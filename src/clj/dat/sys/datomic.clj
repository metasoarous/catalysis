(ns dat.sys.datomic
  (:require [taoensso.timbre :as log :include-macros true]
            [clojure.core.async :as async :refer [go go-loop]]
            [taoensso.nippy :as nippy]
            [datomic.api :as dapi]
            [dat.sync.core :as dat.sync]
            [datascript.core :as ds]
            [dat.view]
            [dat.sys.utils :refer [cat-into]]
            [com.rpl.specter :as specter]
            [clojure.java.io :as io]
            [io.rkn.conformity :as conformity]
            [com.stuartsierra.component :as component]))

;; (defn transform-tx-ids [txf]
;;   (fn [db txs]
;;     ;; FIXME: handle partitions
;;     (let [txs-after (specter/transform
;;                       (specter/walker #(instance? datomic.db.DbId %))
;;                       #(:idx %)
;;                       txs)]
;;       (log/debug "with temp eids" txs-after)
;;       (txf db txs-after))))

;; (defn no-attribute-install [txf]
;;   (fn [db txs]
;;     (let [txs-after
;;           (specter/transform
;;             [specter/ALL map?]
;;             #(dissoc % :db.install/_attribute :db.alter/_attribute)
;;             txs)]
;; ;;       (log/debug "no-attr" txs-after)
;;     (txf db txs-after))))

;; (defn attr-as-ident [txf]
;;   (fn [db txs]
;;     (let [txs-after
;;           (specter/transform
;;             [specter/ALL vector? (specter/keypath 1) keyword?]
;;             (fn [ident-attr]
;;               [:db/ident ident-attr])
;;             txs)]
;;       (log/debug "idents-after" txs-after)
;;       (txf db txs-after))))

;; (defn e-attr-as-ident [txf]
;;   (fn [db txs]
;;     (let [txs-after
;;           (specter/transform
;;             [specter/ALL map? #(contains? % :e.type/attributes) :e.type/attributes specter/ALL keyword?]
;;             (fn [ident-attr]
;;               [:db/ident ident-attr])
;;             txs)]
;;       (log/debug "e-idents-after" txs-after)
;;       (txf db txs-after))))

;; (defn e-_attr-as-ident [txf]
;;   (fn [db txs]
;;     (let [txs-after
;;           (specter/transform
;;             [specter/ALL map? #(contains? % :e.type/_attributes) :e.type/_attributes keyword?]
;;             (fn [ident-attr]
;;               [:db/ident ident-attr])
;;             txs)]
;;       (log/debug "e-idents-after" txs-after)
;;       (txf db txs-after))))


;; (defn as-middleware [db txs]
;;   ;; FIXME: this is just to get it working. convert to proper middleware
;;   txs)

;; ;; Will need to come up with a migration system XXX
;; ;; Look at https://github.com/rkneufeldapi/conformity and https://github.com/bitemyapp/brambling
;; ;; Not hard to bake our own as well if those don't work
;; (defn ensure-schema!
;;   [conn]
;;   ;; The schema is in `resources/schema.edn`; Note that we make requirements in that schema about having Datview schema loaded
;;   (let [schema-data (merge dat.view/base-schema
;;                            (-> "schema.edn" io/resource slurp read-string))]
;;     ;; This is where ideally we would be looking at a dependency graph of norms and executing in that order.
;;     ;; Look at Stuart Sierra's dependency library. XXX
;;     (try
;;       (conformity/ensure-conforms conn schema-data)
;;       (catch Exception e
;;         (.printStackTrace e)))))

;; (defn make-unensured-schema!
;;   "Datascript has no schema migrations. Assert the schema the first time then keep it forever."
;;   [conn]
;;   (let [schema-data (merge dat.view/base-schema
;;                            (-> "schema.edn" io/resource slurp read-string))
;;         ;; FIXME: magic keywords
;;         txes (cat-into [] (-> schema-data :dat.view/base-schema :txes) (-> schema-data :catalysis/base-schema :txes))]
;;     (doseq [txs txes]
;;       (do
;;         (dat.sync/apply-schema-tx! conn [[:db.fn/call ((comp transform-tx-ids attr-as-ident e-_attr-as-ident e-attr-as-ident no-attribute-install) as-middleware) txs]])))))

;; ;(-> "config/local/seed-data.edn" slurp read-string)

;; (defn load-data!
;;   [conn filename]
;;   (let [data (-> filename slurp read-string)]
;;     (dapi/transact conn data)))

;; (defrecord Datomic [config conn tx-report-queue tx-report-chan]
;;   component/Lifecycle
;;   (start [component]
;;     (let [url (-> config :datomic :url)
;;           deleted? (dapi/delete-database url)
;;           created? (dapi/create-database url)
;;           tx-report-chan (or tx-report-chan (async/chan))
;;           conn (dapi/connect url)
;;           tx-report-queue (dapi/tx-report-queue conn)
;;           component (assoc component
;;                       :conn conn
;;                       :tx-report-queue tx-report-queue
;;                       :tx-report-chan tx-report-chan)]
;;       ;; XXX Should be a little smarter here and actually test to see if the schema is in place, then transact
;;       ;; if it isn't. Similarly when we get more robust migrations.
;;       (log/info "Datomic Starting")
;;       (ensure-schema! conn)
;;       (dat.sync/go-tx-report! tx-report-queue tx-report-chan)
;;       component))
;;   (stop [component]
;;     (dapi/release conn)
;;     (assoc component :conn nil :tx-report-chan nil)))

;; (defrecord PersistentDatascript [config conn tx-report-chan]
;;   component/Lifecycle
;;   (start [component]
;;     (let [url "resources/persistent-datomic.edn";;(-> config :persistent-datascript :url)
;;           conn (or conn (ds/create-conn {:db/ident {:db/unique :db.unique/identity}
;;                                          :e.type/attributes {:db/type :db.type/ref
;;                                                              :db/cardinality :db.cardinality/many}}))
;;           tx-report-chan (or tx-report-chan (async/chan))]
;;       (ds/transact! conn [{:db/id -1
;;                            :db/ident :db/ident
;;                            :db/unique :db.unique/identity}
;;                           {:db/id -2
;;                            :db/ident :db/doc}
;;                           {:db/id -3
;;                            :db/ident :db/valueType}
;;                           {:db/id -4
;;                            :db/ident :db.unique/identity}])
;; ;;       (try
;; ;;         (nippy/thaw-from-in! (clojure.java.io/input-stream url))
;; ;;         (catch java.io.FileNotFoundException e
;;           (make-unensured-schema! conn)
;;       ;;))
;;       (ds/listen!
;;         conn
;;         ::async
;;         (fn [report]
;;           (async/put! tx-report-chan report)))
;;       ;; TODO: add a one way migration from PersistentDatascript -> Datomic
;; ;;       (go-loop []
;; ;;         (let [{:keys [db-after]} (async/<!! tx-report-chan)]
;; ;;           (nippy/freeze-to-out! (clojure.java.io/output-stream url) db-after))
;; ;;         (recur))
;;       (log/info "PersistentDatascript Starting")
;;       ;; (ensure-schema! conn)
;;       (assoc component
;;         :kind :persistent-datascript
;;         :conn conn
;;         :tx-report-chan tx-report-chan)))
;;   (stop [component]
;;         (ds/unlisten! conn ::async)
;;     (assoc component
;;       :conn nil
;;       :tx-report-chan nil)))

;; (defn create-datomic []
;;   (map->Datomic {}))

;; (defn create-persistent-datascript []
;;   (map->PersistentDatascript {}))

;; (defn transact! [{:as datomic :keys [conn kind]} txs]
;;   (case kind
;;     :persistent-datascript (ds/transact! conn [[:db.fn/call (transform-tx-ids as-middleware) txs]])
;;     @(dapi/transact conn txs)))


;; ;; TODO: ***
;; ;;       1. send transactions to the world on dispatch
;; ;;       2. transact everything from the world locally
;; ;;       3. Persist transactions on server
;; ;;       4. support bootstrap
;; ;;       5. ???: persist transactions in browser
;; ;;       6. support subscriptions and subscription/bootstrap


;; (defn bootstrap!
;;   [{:as datomic :keys [kind conn]}]
;;   ;; This could be a lot more perfomant; And should probably be generally smarter
;;   (log/info "Calculating bootstrap data...")
;;   (case kind
;;     :persistent-datascript
;;     (let [db @conn]
;;       (->> (ds/datoms db :eavt)
;;            (dat.sync/datom><gdatom conn)))
;;     (let [db (dapi/db conn)]
;;       (->> (dapi/datoms db :eavt)
;;            (map (fn [[e a v t]] e))
;;            (distinct)
;;            (dapi/pull-many db '[*])
;;            (filter #(not (:db/fn %)))))))
