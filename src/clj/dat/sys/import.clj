(ns dat.sys.import
  (:require [taoensso.timbre :as log :include-macros true]
            [dat.spec.protocols :as protocols]
            [dat.sync.core :as dat.sync]
            [datomic.api :as dapi]
            [clojure.java.io :as io]
            [com.stuartsierra.component :as component]))

(defrecord Importer [config knowbase]
  component/Lifecycle
  (start [component]
    (log/info "Importing data")
    (let [{:keys [transact! snap]} (:datom-api knowbase)
          conn (:conn knowbase)
          data (-> "resources/test-data.edn" slurp read-string)]
      (transact! conn data)
      ;; FIXME: this next transaction is written terribly, just trying to get it working for now. It can suffer from race conditions.
      (let [uuidents (into []
                           (dat.sync/uuident-all-the-things* (snap conn))
                             (protocols/snapshot knowbase))]
;;         (log/debug "new uuidents" uuidents)
        (transact! conn uuidents))))
  (stop [component]
        component))


(defn new-importer []
  (map->Importer {}))

