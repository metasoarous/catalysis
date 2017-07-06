(ns dat.sys.import
  (:require [taoensso.timbre :as log :include-macros true]
            [dat.spec.protocols :as protocols]
            [clojure.java.io :as io]
            [com.stuartsierra.component :as component]))

(defrecord Importer [config datomic]
  component/Lifecycle
  (start [component]
    (log/info "Importing data")
    (let [data (-> "resources/test-data.edn" slurp read-string)]
      (protocols/transact! datomic data)))
  (stop [component]
       component))


(defn new-importer []
  (map->Importer {}))

