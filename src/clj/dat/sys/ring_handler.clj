(ns dat.sys.ring-handler
  (:require [taoensso.timbre :as log :include-macros true]
            [com.stuartsierra.component :as component]
            [compojure.core :refer [routes GET POST]]
            [compojure.route :as route]
            [ring.util.response :as resp]
            [ring.middleware.defaults :refer [site-defaults wrap-defaults]]
            [ring.middleware.resource :refer (wrap-resource)]
            [dat.sys.ws :as ws]))

(defn fallbacks [handlers]
  (apply routes
         (map
           #(GET "*" _ %)
           handlers)))

(defn main-handler [chsk-handlers fallback-handlers]
  (routes
   (GET  "/"     _   (clojure.java.io/resource "index.html"))
   (GET  "/chsk" req ((:get chsk-handlers) req))
   (POST "/chsk" req ((:put chsk-handlers) req))
   (GET "*" _ (fallbacks fallback-handlers)) ;; FIXME: should be some sort of ANY
   (route/not-found "<h1>Page not found</h1>")))

(defn app [handler]
  (let [ring-defaults-config
        (-> site-defaults
            (assoc-in
             [:security :anti-forgery]
             {:read-token (fn [req] (-> req :params :csrf-token))})
            (assoc-in [:static :resources] "public"))]
    (-> handler
        (wrap-defaults ring-defaults-config)
        (wrap-resource "/META-INF/resources"))))


(defrecord RingHandler [config ws-connection routes handler]
  component/Lifecycle
  (start [component]
      component
      (let [component (component/stop component)
            {:keys [ajax-post-fn ajax-get-or-ws-handshake-fn]} (ws/ring-handlers ws-connection)
            handler (app (main-handler (:ring-handlers ws-connection) (:handlers routes)))]
        (assoc component :handler handler)))
  (stop [component]
    (assoc component :handler nil)))

(defn new-ring-handler []
  (map->RingHandler {}))

