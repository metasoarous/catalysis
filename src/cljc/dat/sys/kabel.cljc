(ns dat.sys.kabel
  (:require [com.stuartsierra.component :as component]
            [taoensso.timbre :as log :include-macros true]
            [kabel.client :as cli]
            #?(:clj [kabel.http-kit :as http-kit])
            [kabel.peer :as peer]
            #?(:clj [superv.async :refer [<?? go-try S go-loop-try <? >? put?]]
               :cljs [superv.async :refer [go-try S go-loop-try <? >? put?]])
            #?(:clj [clojure.core.async :refer [go go-loop timeout <! >! <!! put! chan]]
               :cljs [clojure.core.async :refer [timeout <! >! put! chan]])
            [kabel.middleware.transit :refer [transit]]
            [hasch.core :refer [uuid]])
   #?(:cljs
      (:require-macros [cljs.core.async.macros :refer [go go-loop]]))
  )

;; server peer code
(defn pong-middleware [[S peer [in out]]]
  (let [new-in (chan)
        new-out (chan)]
    ;; we just mirror the messages back
    (go-loop [i (<! in)]
      (when i
        (log/debug "ponging " i)
        (>! out i)
        (recur (<! in))))
    ;; Note that we pass through the supervisor, peer and new channels
    [S peer [new-in new-out]]))

(defn ping-middleware [[S peer [in out]]]
  (let [new-in (chan)
        new-out (chan)]
    (go-try S
            (put? S out "ping")
            (log/debug "1. client incoming message:" (<? S in))
            (put? S out "ping2")
            (log/debug "2. client incoming message:" (<? S in)))
    [S peer [new-in new-out]]))

;; this url is needed for the server to open the proper
;; socket and for the client to know where to connect to
(def url "ws://localhost:47291")

;; ;; this is useful to track messages, so each peer should have a unique id
(def server-id #uuid "05a06e85-e7ca-4213-9fe5-04ae511e50a0")
(def client-id #uuid "c14c628b-b151-4967-ae0a-7c83e5622d0f")

(defrecord KabelConnection [peer-conn]
  component/Lifecycle
  (start [component]
         (let [peer-conn (or peer-conn
                             #?(:clj
                                 (peer/server-peer S (http-kit/create-http-kit-handler! S url server-id) server-id
                                                   pong-middleware
                                                   ;; we chose no serialization (pr-str/read-string by default)
                                                   identity
                                                   ;; we could also pick the transit middleware
                                                   #_transit)
                                 :cljs (peer/client-peer S client-id
                                                         ping-middleware
                                                         identity)))]
           #?(:clj
               (<?? S (peer/start peer-conn))
              :cljs
               (go-loop [] (<? S (peer/connect S peer-conn url))))
           (log/info "Started Kabel Connection")
         (assoc component
           :peer-conn peer-conn)))
  (stop [component]
        #?(:clj (<?? S (peer/stop peer-conn)))
        (assoc component
          :peer-conn nil)))

(defn new-kabel []
  (map->KabelConnection {}))


