(ns dat.sys.import
  (:require [taoensso.timbre :as log :include-macros true]
            [dat.sys.datomic :as d]
            [dat.sys.ws :as ws]
            [clojure.java.io :as io]
            [com.stuartsierra.component :as component]
            [dat.sys.app :as app]))

(defrecord Importer [config datomic]
  component/Lifecycle
  (start [component]
    (log/info "Importing data")
    (let [data (-> "resources/test-data.edn" slurp read-string)]
      @(d/transact datomic data)))
  (stop [component]
       component))


(defn new-importer []
  (map->Importer {}))

