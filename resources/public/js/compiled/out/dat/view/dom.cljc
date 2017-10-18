(ns dat.view.dom
  #?(:cljs (:require-macros [cljs.core.async.macros :as async-macros :refer [go go-loop]]))
  (:require #?@(:clj [[clojure.core.async :as async :refer [go go-loop]]]
                :cljs [[cljs.core.async :as async]])
            [taoensso.timbre :as log :include-macros true]
            [dat.spec.protocols :as protocols]
            [dat.reactor.onyx :as onyx]
;;             [rum.core :as rum]
            [reagent.core :as reagent]
            [dat.sys.utils :refer [deep-merge cat-into]]
            [com.stuartsierra.component :as component]))


(defn go-render! [dom]
  (go-loop []
    (let [render-event (async/<! (protocols/send-chan dom))]
      (protocols/mount! dom render-event))
    (recur)))

(defn ^:export intent [& args]
  false
  )


(defrecord ReagentDom [ui-dispatch-chan render-chan reactor]
  component/Lifecycle
  (start [dom]
    (log/info "Starting ReagentDom Component")
         (let [ui-dispatch-size 100
               dom (assoc dom
                            :ui-dispatch-chan (or ui-dispatch-chan (async/chan ui-dispatch-size))
                            :render-chan (or render-chan (async/chan)))]
           ;; TODO: make idempotent and give kill-chan
           (go-render! dom)
           (onyx/expand-job!
             reactor
             ::job
             {:catalog [{:onyx/type :input
                         :onyx/name ::event
                         :dat.reactor.onyx/chan ui-dispatch-chan
                         :onyx/batch-size ui-dispatch-size}
                        {:onyx/type :output
                         :onyx/name ::render
                         :dat.reactor.onyx/chan render-chan
                         :onyx/batch-size 1}]
              :workflow [[::event :dat.reactor/legacy]
                         [:dat.reactor/legacy ::render]
                         [::event ::intent]
                         [::intent ::render]]
              :flow-conditions [{:flow/from ::ui-dispatch
                                 :flow/to [:dat.reactor/legacy]
                                 :flow/predicate :dat.reactor.onyx/legacy?}
                                {:flow/from ::ui-dispatch
                                 :flow/to [:dat.reactor/intent]
                                 :flow/predicate ::intent?}]})
           dom))
  (stop [dom]
    (log/info "Stopping ReagentDom Component")
    (when ui-dispatch-chan (async/close! ui-dispatch-chan))
    (assoc dom
      :ui-dispatch-chan nil
      :render-chan nil))
  protocols/Dom
  (mount! [dom {:as renderable :keys [:dat.view/render :dat.view/mount-id]}]
    ;; TODO: with rum serverside needs to decide between render-html vs render-static-markup
    ;; TODO: serverside should store rendered html to a ring route
;;     (#(:clj rum/render-html
;;        :cljs rum/mount)
;;       (render-fn)
;;       path)
    ;; TODO: if render is keyword compile to fn
    #?(:cljs
        (reagent/render-component
          [render
           (assoc renderable
             ;; ??? :conn
             :dat.view/dom dom
             ::dispatch!(partial async/put! ui-dispatch-chan))]
          (.getElementById js/document mount-id)))
        :clj (throw "No implementation for serverside rendering"))
  protocols/Wire
  (recv-chan [dom]
    ui-dispatch-chan)
  (send-chan [dom]
    render-chan)
  protocols/PDispatcher
  (dispatch! [dom event]
    (async/put! ui-dispatch-chan event))
  (dispatch! [dom event level]
    (async/put! ui-dispatch-chan event))
  (dispatcher-event-chan [dom]
    ui-dispatch-chan))

(defn new-reagent-dom
  "If :app is specified, it is reacted on. If not, it is computed as a map of {:dispatcher :reactor :conn}"
  ([options]
   (map->ReagentDom options))
  ([]
   (new-reagent-dom {})))


;; ???: race error occurs because chrome is doing something with sessions maybe. happens when using rum and react-dom not loaded properly. maybe has to do with react-dom-server
;; user=> 17-07-07 16:16:41 bamatop WARN [dat.reactor.onyx:137] - Unhandled event: :chsk/uidport-open
;; 17-07-07 16:16:41 bamatop INFO [dat.reactor.onyx:131] - Sending bootstrap message nil {:dat.reactor/event :dat.reactor/legacy, :event [:dat.sync.client/bootstrap true], :id :dat.sync.client/bootstrap, :dat.remote/ring-req {:cookies {"ring-session" {:value "1f5a4f8c-3725-4220-ab68-bc1ddfd7dbf0"}}, :remote-addr "0:0:0:0:0:0:0:1", :params {:client-id "eeb1ce34-f791-493d-8d3c-da26c6655a45"}, :flash nil, :route-params {}, :headers {"origin" "http://localhost:2358", "host" "localhost:2358", "upgrade" "websocket", "user-agent" "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/59.0.3071.109 Chrome/59.0.3071.109 Safari/537.36", "cookie" "ring-session=1f5a4f8c-3725-4220-ab68-bc1ddfd7dbf0", "connection" "Upgrade", "pragma" "no-cache", "sec-websocket-key" "P+w1R0lthJ+M6t3hlrsIkw==", "accept-language" "en-US,en;q=0.8", "sec-websocket-version" "13", "accept-encoding" "gzip, deflate, br", "sec-websocket-extensions" "permessage-deflate; client_max_window_bits", "dnt" "1", "cache-control" "no-cache"}, :async-channel #object[org.httpkit.server.AsyncChannel 0x12aa3c34 "/0:0:0:0:0:0:0:1:2358<->/0:0:0:0:0:0:0:1:50202"], :server-port 2358, :content-length 0, :form-params {}, :compojure/route [:get "/chsk"], :websocket? true, :session/key "1f5a4f8c-3725-4220-ab68-bc1ddfd7dbf0", :query-params {"client-id" "eeb1ce34-f791-493d-8d3c-da26c6655a45"}, :content-type nil, :character-encoding "utf8", :uri "/chsk", :server-name "localhost", :query-string "client-id=eeb1ce34-f791-493d-8d3c-da26c6655a45", :body nil, :multipart-params {}, :scheme :http, :request-method :get, :session #:ring.middleware.anti-forgery{:anti-forgery-token "E4z/xiz8RWwgUKZzWyvjjxxK8Ab/2mvOBhY5p/jVh8ICM9B9DDsHKDSFwsWAOnEb4/95DBGIQK6uZj80"}}, :dat.remote/peer-id :taoensso.sente/nil-uid, :dat.sync/event-source :dat.sync/remote}
;; Exception in thread "async-dispatch-8" java.lang.RuntimeException: java.lang.Exception: Not supported: class clojure.lang.Delay
;; 	at com.cognitect.transit.impl.WriterFactory$1.write(WriterFactory.java:60)

