(ns dat.sys.import
  (:require [taoensso.timbre :as log :include-macros true]
            [dat.spec.protocols :as protocols]
            [dat.sync.core :as dat.sync]
            [dat.sync.db :as d]
            [datomic.api :as dapi]
            [clojure.java.io :as io]
            [io.rkn.conformity.core :as conformity]
            [com.stuartsierra.component :as component]))

(defrecord Importer [config knowbase]
  component/Lifecycle
  (start [component]
    (log/info "Importing data")
    (let [conn (:conn knowbase)
          data (conformity/read-resource "test-data.edn")]
        (conformity/ensure-conforms
          conn
          data)

        (when (instance? datomic.Connection conn)
          (log/info "  providing uuidents")
          ;; TODO: make a db-fn that does this work to avoid race conditions
          (let [uuidents (d/uuident-all-the-things* (d/snap conn) (protocols/snapshot knowbase))]
            (d/transact! conn uuidents)))))
  (stop [component]
        component))

(defn new-importer
  ([] (new-importer {}))
  ([opts]
   (map->Importer opts)))

