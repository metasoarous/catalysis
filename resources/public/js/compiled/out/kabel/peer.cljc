(ns kabel.peer
  "Peer 2 peer connectivity."
  (:require #?(:clj [kabel.platform-log :refer [debug info warn error]])
            [clojure.set :as set]
            #?(:clj [superv.async :refer [<? <<? go-try go-loop-try alt?
                                          go-loop-super]])
            [kabel.client :refer [client-connect!]]
            [kabel.middleware.transit :refer [transit]]
            #?(:cljs [superv.async :refer [throw-if-exception
                                           -track-exception -free-exception
                                           -register-go -unregister-go]])
            #?(:clj [clojure.core.async :as async
                     :refer [>! timeout chan put! pub sub unsub close!]]
               :cljs [cljs.core.async :as async
                      :refer [>! timeout chan put! pub sub unsub close!]]))
  #?(:cljs (:require-macros [cljs.core.async.macros :refer (go go-loop alt!)]
                            [kabel.platform-log :refer [debug info warn error]]
                            [superv.async :refer [<<? <? go-try go-loop-try alt?
                                                  go-loop-super]])))


(defn drain [[S peer [in out]]]
  (go-loop-super S [i (<? S in)]
                 (when i
                   (recur (<? S in)))))

(defn connect
  "Connect peer to url."
  [S peer url]
  (go-try S
          (let [{{:keys [middleware serialization-middleware
                         read-handlers write-handlers]} :volatile
                 :keys [id]} @peer
                [c-in c-out] (<? S (client-connect! S url
                                                    id
                                                    read-handlers
                                                    write-handlers))]
            (-> [S peer [c-in c-out]]
                serialization-middleware
                middleware
                drain))))

(defn client-peer
  "Creates a client-side peer only."
  ([S id middleware]
   (client-peer S id middleware transit))
  ([S id middleware serialization-middleware]
   (client-peer S id middleware serialization-middleware (atom {}) (atom {})))
  ([S id middleware serialization-middleware read-handlers write-handlers]
   (let [log (atom {})
         bus-in (chan)
         bus-out (pub bus-in :type)]
     (atom {:volatile {:log log
                       :middleware middleware
                       :serialization-middleware serialization-middleware
                       :read-handlers read-handlers
                       :write-handlers write-handlers
                       :supervisor S
                       :chans [bus-in bus-out]}
            :id id}))))


(defn server-peer
  "Constructs a listening peer."
  ([S handler id middleware]
   (server-peer S handler id middleware transit))
  ([S handler id middleware serialization-middleware]
   (server-peer S handler id middleware serialization-middleware (atom {}) (atom {})))
  ([S handler id middleware serialization-middleware read-handlers write-handlers]
   (let [{:keys [new-conns url]} handler
         log (atom {})
         bus-in (chan)
         bus-out (pub bus-in :type)
         peer (atom {:volatile (merge handler
                                      {:middleware middleware
                                       :serialization-middleware serialization-middleware
                                       :read-handlers read-handlers
                                       :write-handlers write-handlers
                                       :log log
                                       :supervisor S
                                       :chans [bus-in bus-out]})
                     :addresses #{(:url handler)}
                     :id id})]
     (go-loop-super S [[in out] (<? S new-conns) 
                       ]
                    (drain (middleware (serialization-middleware [S peer [in out]])))
                    (recur (<? S new-conns)))
     peer)))



(defn start [peer]
  (let [{{S :supervisor} :volatile} @peer]
    (go-try S
            (if (:started? @peer)
              false
              (let [stop-fn (-> @peer :volatile :handler :stop-fn)]
                (info {:event :starting-peer :id (:id @peer)})
                (swap! peer update-in [:volatile] (get-in @peer [:volatile :start-fn]))
                (swap! peer assoc :started? true)
                true)))))


(defn stop [peer]
  (let [{{S :supervisor} :volatile} @peer]
    (go-try S
            (if-not (:started? @peer)
              false
              (do
                (info {:event :stopping-peer :id (:id @peer)})
                (when-let [stop-fn (get-in @peer [:volatile :stop-fn])]
                  (stop-fn :timeout 1000))
                (<? S (timeout 200))
                (when-let [hub (get-in @peer [:volatile :channel-hub])]
                  (reset! hub {}))
                (when-let [in (-> @peer :volatile :chans first)]
                  (close! in))
                (swap! peer assoc :started? false)
                true)))))

