(ns dat.sys.datomic
  (:require [taoensso.timbre :as log :include-macros true]
            [datomic.api :as d]
            [dat.view]
            [clojure.java.io :as io]
            [io.rkn.conformity :as conformity]
            [com.stuartsierra.component :as component]))

;; Will need to come up with a migration system XXX
;; Look at https://github.com/rkneufeld/conformity and https://github.com/bitemyapp/brambling
;; Not hard to bake our own as well if those don't work
(defn ensure-schema!
  [conn]
  ;; The schema is in `resources/schema.edn`; Note that we make requirements in that schema about having Datview schema loaded
  (let [schema-data (merge dat.view/base-schema
                           (-> "schema.edn" io/resource slurp read-string))]
    ;; This is where ideally we would be looking at a dependency graph of norms and executing in that order.
    ;; Look at Stuart Sierra's dependency library. XXX
    (try
      (conformity/ensure-conforms conn schema-data)
      (catch Exception e
        (.printStackTrace e)))))

;(-> "config/local/seed-data.edn" slurp read-string)

(defn load-data!
  [conn filename]
  (let [data (-> filename slurp read-string)]
    (d/transact conn data)))

(defrecord Datomic [config conn tx-report-queue]
  component/Lifecycle
  (start [component]
    (let [url (-> config :datomic :url)
          deleted? (d/delete-database url)
          created? (d/create-database url)
          conn (d/connect url)
          tx-report-queue (d/tx-report-queue conn)
          component (assoc component :conn conn :tx-report-queue tx-report-queue)]
      ;; XXX Should be a little smarter here and actually test to see if the schema is in place, then transact
      ;; if it isn't. Similarly when we get more robust migrations.
      (log/info "Datomic Starting")
      (ensure-schema! conn)
      component))
  (stop [component]
    (d/release conn)
    (assoc component :conn nil)))

(defn create-datomic []
  (map->Datomic {}))

(defn bootstrap
  [db]
  ;; This could be a lot more perfomant; And should probably be generally smarter
  (log/info "Calculating bootstrap data...")
  (->> (d/datoms db :eavt)
       (map (fn [[e a v t]] e))
       (distinct)
       (d/pull-many db '[*])
       (filter #(not (:db/fn %)))))
