(ns dat.sys.kabel
  (:require [com.stuartsierra.component :as component]
            [taoensso.timbre :as log :include-macros true]
            #?(:clj [kabel.http-kit :refer [create-http-kit-handler!]])
            [kabel.peer :as kpeer]
            #?(:clj [superv.async :refer [go-try go-loop-try S <? >? put? <??]]
              :cljs [superv.async :refer [go-try go-loop-try S <? >? put?]])
            #?(:clj
                [clojure.core.async :as async :refer [go-loop <! >! >!!]]
              :cljs
                [clojure.core.async :as async :refer [<! >!]]))
  #?(:cljs
      (:require-macros [cljs.core.async.macros :refer [go-loop]])))

(defn pong-middleware [[peer [in out]]]
  (let [new-in (async/chan)]
    (go-loop [p (<! in)]
      (when p
        (log/info "received ping, sending pong")
        (>! out {:type :pong})
        (>! new-in p) ;; pass along (or not...)
        (recur (<! in))))
    [peer [new-in out]]))

(defn ping [[peer [in out]]]
  (go-loop []
    (<! (async/timeout 5000))
    (>! out {:type :ping})
    (recur))
  [peer [in out]])

(defn create-peer [{:as handler :keys [url kind]} & args]
  (log/info "argssszz" kind)
  (case kind
    :kabel.peer/server {:kind :kabel.peer/server
                        :url url
                        :peer (apply kpeer/server-peer S handler args)}
    :kabel.peer/client {:kind :kabel.peer/client
                        :url url
                        :peer (apply kpeer/client-peer S args)}))

(defn connect [{:keys [kind peer url]}]
  (case kind
    :kabel.peer/server (kpeer/start peer)
    :kabel.peer/client (kpeer/connect S peer url)))

(defn close [{:keys [kind peer]}]
  (if (= kind :kabel.peer/server)
    (kpeer/stop peer)))

(defrecord KabelConnection [err-ch ring-handler peer]
  component/Lifecycle
  (start [component]
         (log/info "Get ready")
         (let [url "ws://localhost:9090/kabel"
               err-ch (or err-ch (async/chan))
               peer nil
;;                handler nil
               handler (or ring-handler
                           #?(:clj
                               (assoc (create-http-kit-handler! S url err-ch) :kind :kabel.peer/server)
                              :cljs
                               {:kind :kabel.peer/client
                                :url url}))
               middleware #?(:clj pong-middleware :cljs ping)
               peer (or peer
                        (create-peer handler err-ch middleware))]
           (log/info "Starting Kabel Connection")
           #?(:clj
               (log/info "<??" (<?? S (connect peer)))
              :cljs
               (go-loop []
                  (log/info "go<?" (<? S (connect peer)))))

         (assoc component
           :err-ch err-ch
           :ring-handler handler
           :peer peer)))
  (stop [component]
        (close peer)
        (assoc component
          :err-ch nil
          :ring-handler nil
          :peer nil)))

(defn new-kabel []
  (map->KabelConnection {}))


