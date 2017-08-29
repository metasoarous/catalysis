(ns dat.sys.import
  (:require [taoensso.timbre :as log :include-macros true]
            [dat.spec.protocols :as protocols]
            [dat.sync.core :as dat.sync]
            [datomic.api :as dapi]
            [clojure.java.io :as io]
            [com.stuartsierra.component :as component]))

(defrecord Importer [config datomic]
  component/Lifecycle
  (start [component]
    (log/info "Importing data")
    (let [data (-> "resources/test-data.edn" slurp read-string)]
      (protocols/transact! datomic data)
      ;; FIXME: this next transaction is written terribly, just trying to get it working for now. It can suffer from race conditions and it's assuming datomic.
      (let [uuidents (into []
                           (dat.sync/uuident-all-the-things*
                             (dapi/db (:conn datomic)))
                           (protocols/snapshot datomic))]
;;         (log/debug "imported uuidents" uuidents)
        (protocols/transact!
          datomic
          uuidents))))
  (stop [component]
        component))


(defn new-importer []
  (map->Importer {}))

