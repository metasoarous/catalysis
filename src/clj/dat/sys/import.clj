(ns dat.sys.import
  (:require [taoensso.timbre :as log :include-macros true]
            [dat.spec.protocols :as protocols]
            [dat.sync.core :as dat.sync]
            [dat.sync.db :as d]
            [clojure.java.io :as io]
            [io.rkn.conformity.core :as conformity]
            [com.stuartsierra.component :as component]))

(defrecord Importer [config knowbase]
  component/Lifecycle
  (start [component]
    (log/info "Importing data")
    (let [conn (:conn knowbase)
          data (conformity/read-resource "test-data.edn")]
      (log/debug "import norms" data)
        (conformity/ensure-conforms
          conn
          data)

        (case (d/db-kind conn)
          (log/info "  providing uuids")
          ;; TODO: make a db-fn that does this work to avoid race conditions
          :datscript nil
          (:datomic :wrapped-datomic)
          (let [uuids (d/uuid-all-the-things* @conn (protocols/snapshot knowbase))]
            (d/transact! conn uuids)))))
  (stop [component]
        component))

(defn new-importer
  ([] (new-importer {}))
  ([opts]
   (map->Importer opts)))

