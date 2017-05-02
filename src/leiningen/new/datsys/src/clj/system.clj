(ns {{ns-name}}.system
  "System constructor."
  (:require [com.stuartsierra.component :as component]
            [{{ns-name}}.ws :as ws]
            [{{ns-name}}.config :as config]
            [{{ns-name}}.datomic :as datomic]
            [{{ns-name}}.server :as server]
            [{{ns-name}}.routes :as routes]
            [{{ns-name}}.ring-handler :as handler]
            [{{ns-name}}.app :as app]
            [{{ns-name}}.import :as import]))


(defn create-system
  ([config-overrides]
   (component/system-map
     :config (config/create-config config-overrides)
     :datomic (component/using (datomic/create-datomic) [:config])
     :importer (component/using (import/new-importer) [:config :datomic])
     :ws-connection (component/using (ws/new-ws-connection) [:config])
     :routes (component/using (routes/new-routes) [:config])
     :ring-handler (component/using (handler/new-ring-handler) [:config :routes :ws-connection])
     :http-server (component/using (server/new-http-server) [:datomic :config :ring-handler]) ;; user.clj depends on :http-server
     :app (component/using (app/new-app) [:config :ws-connection :datomic])))
  ([] (create-system {})))

