(ns {{ns-name}}.system
  "System constructor."
  (:require [com.stuartsierra.component :as component]
            [{{ns-name}}.config :as config]
            [{{ns-name}}.datomic :as datomic]
            [{{ns-name}}.db :as db]
            [{{ns-name}}.server :as server]
            [{{ns-name}}.routes :as routes]
            [{{ns-name}}.ring-handler :as handler]
            [{{ns-name}}.import :as import]
            [dat.reactor.dispatcher :as dispatcher]
            [dat.reactor.onyx :as oreactor]
            [dat.remote.impl.sente :as sente]
            [dat.sync.core :as dat.sync]))


(defn create-system
  ([config-overrides]
   (component/system-map
     :remote (sente/new-sente-remote {:server? true})
     :config (config/create-config config-overrides)
     :knowbase (component/using (db/create-knowledge-base) [:config])
     :dispatcher (dispatcher/new-strictly-ordered-dispatcher)
     :importer (component/using (import/new-importer) [:config :knowbase])
     :reactor (component/using (oreactor/new-onyx-reactor) [:remote :dispatcher])
     :datsync (component/using (dat.sync/new-datsync-server) [:knowbase :remote :dispatcher :reactor])
     :routes (component/using (routes/new-routes) [:config])
     :ring-handler (component/using (handler/new-ring-handler)
                                    {:config :config
                                     :routes :routes
                                     :ws-connection :remote})
     ;; NOTE: dev/clj/user.clj depends on :http-server
     :http-server (component/using (server/new-http-server) [:config :ring-handler :datsync])))
  ([] (create-system {})))

