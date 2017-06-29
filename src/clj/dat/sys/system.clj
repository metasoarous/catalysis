(ns dat.sys.system
  "System constructor."
  (:require [com.stuartsierra.component :as component]
            [dat.sys.config :as config]
            [dat.sys.datomic :as datomic]
            [dat.sys.db :as db]
            [dat.sys.server :as server]
            [dat.sys.routes :as routes]
            [dat.reactor.onyx :as oreactor]
            [dat.sys.kabel :as kabel]
            [dat.sys.ring-handler :as handler]
            [dat.sys.app :as app]
            [dat.sys.import :as import]
            [dat.sync.core :as dat.sync]
            [dat.reactor.dispatcher :as dispatcher]
            [dat.remote.impl.sente :as sente]))


(defn create-system
  ([config-overrides]
   (component/system-map
     :remote (sente/new-sente-remote {:server? true})
     :config (config/create-config config-overrides)
;;      :datomic (component/using (datomic/create-persistent-datascript) [:config])
     :datomic (component/using
                (db/create-datomic) [:config])
;;      :reactor (component/using
;;                   (oreactor/new-onyx-reactor)
;;                   {:transactor :datomic
;;                    :app :datomic
;;                    :remote :remote
;;                    :dispatcher :dispatcher})
     :dispatcher (dispatcher/new-strictly-ordered-dispatcher)
     :importer (component/using (import/new-importer) [:config :datomic])
;;      :kabel (component/using (kabel/new-kabel) [])
     :routes (component/using (routes/new-routes) [:config])
     :ring-handler (component/using (handler/new-ring-handler)
                                    {:config :config
                                     :routes :routes
                                     :ws-connection :remote})
     :http-server (component/using (server/new-http-server) [:datomic :config :ring-handler]) ;; user.clj depends on :http-server
     :app (component/using (app/new-app) [:config :remote :datomic])))
  ([] (create-system {})))

