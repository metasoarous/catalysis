(ns dat.sys.kabel-pong
  (:require [kabel.client :as cli]
            #?(:clj [kabel.http-kit :as http-kit])
            [kabel.peer :as peer]
            #?(:clj [superv.async :refer [<?? go-try S go-loop-try <? >? put?]]
               :cljs [superv.async :refer [go-try S go-loop-try <? >? put?]])
            #?(:clj [clojure.core.async :refer [go go-loop timeout <! >! <!! put! chan]]
               :cljs [clojure.core.async :refer [timeout <! >! put! chan]])
            [kabel.middleware.transit :refer [transit]]
            [hasch.core :refer [uuid]])
   #?(:cljs
      (:require-macros [cljs.core.async.macros :refer [go go-loop]])))


;; this url is needed for the server to open the proper
;; socket and for the client to know where to connect to
(def url "ws://localhost:47291")


;; server peer code
(defn pong-middleware [[S peer [in out]]]
  (let [new-in (chan)
        new-out (chan)]
    ;; we just mirror the messages back
    (go-loop [i (<! in)]
      (when i
        (println "ponging " i)
        (>! out i)
        (recur (<! in))))
    ;; Note that we pass through the supervisor, peer and new channels
    [S peer [new-in new-out]]))

;; ;; this is useful to track messages, so each peer should have a unique id
(def server-id #uuid "05a06e85-e7ca-4213-9fe5-04ae511e50a0")

#?(:clj
    (def server (peer/server-peer S (http-kit/create-http-kit-handler! S url server-id) server-id
                              ;; here you can plug in your (composition of) middleware(s)
                              pong-middleware
                              ;; we chose no serialization (pr-str/read-string by default)
                              identity
                              ;; we could also pick the transit middleware
                              #_transit)))

;; we need to start the peer to open the socket
;; (<?? S (peer/start server))


(def client-id #uuid "c14c628b-b151-4967-ae0a-7c83e5622d0f")

;; client
(def client (peer/client-peer S client-id
                              ;; Here we have a simple middleware to trigger some roundtrips
                              ;; from the client
                              (fn [[S peer [in out]]]
                                (let [new-in (chan)
                                      new-out (chan)]
                                  (go-try S
                                          (put? S out "ping")
                                          (println "1. client incoming message:" (<? S in))
                                          (put? S out "ping2")
                                          (println "2. client incoming message:" (<? S in)))
                                  [S peer [new-in new-out]]))
                              ;; we need to pick the same middleware for serialization
                              ;; (no auto-negotiation yet)
                              identity))


;; let's connect the client to the server
;; (<?? S (peer/connect S client url))
;; (go-loop [] (<? S (peer/connect S client url)))


(comment
  ;; and stop the server
  (<?? S (peer/stop server))
  )
