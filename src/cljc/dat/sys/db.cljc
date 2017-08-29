(ns dat.sys.db
  #?(:cljs (:require-macros [cljs.core.async.macros :as async-macros :refer [go go-loop]]))
  (:require #?@(:clj [[clojure.core.async :as async :refer [go go-loop]]]
                :cljs [[cljs.core.async :as async]])
            [taoensso.timbre :as log :include-macros true]

;;             [taoensso.nippy :as nippy]
            [dat.sync.core :as dat.sync]
            [datascript.core :as ds]
            [dat.spec.protocols :as protocols]
            [dat.sys.utils :refer [deep-merge cat-into]]
;;             [com.rpl.specter :as specter]
            #?(:clj [clojure.java.io :as io])
            #?(:clj [io.rkn.conformity :as conformity])
            #?(:clj [datomic.api :as dapi])
            [com.stuartsierra.component :as component]
            ))

;; (defn pull [{:as kb :keys [api db]} pull-expr eid]
;;   ((:pull api) db pull-expr eid))

;; (defn pull-many [{:as kb :keys [api db]} pull-expr eids]
;;   ((:pull-many api) db pull-expr eids))

;; (defn q [q-expr {:as kb :keys [api db]} & inputs]
;;   ;; ???: check :in for extra dbs and rulesets
;;   (apply (:q api) q-espr db inputs))

;; (defn entity [{:as kb :keys [api db]} eid]
;;   ((:entity api) db eid))

;; (defn with [{:as kb :keys [api db]} txs]
;;   ((:with api) db txs))

;; (defn transact! [{:as kb :keys [api conn]} txs]
;;   ((:transact! api) conn txs))

;; (defn listen! [{:as kb :keys [api]} & args]
;;   ;; ???: protocol instead
;;   (apply (:listen! api) args))

;; (defn filter* [{:as kb :keys [api db]} & args]
;;   ;; TODO: change to name filter, fix clash with clojure.core
;;   (apply (:filter api) db args))

;; #?(:clj
;; (defn datomic-listen! [& args]
;;   (throw "listen! not implemented in datomic yet")))

;; (def datascript-api
;;   {:pull ds/pull
;;    :pull-many ds/pull-many
;;    :q ds/q
;;    :with ds/with
;;    :entity ds/entity
;;    :transact! ds/transact!
;;    :listen! ds/listen!})

;; #?(:clj
;; (def datomic-api
;;   {:pull dapi/pull
;;    :pull-many dapi/pull-many
;;    :q dapi/q
;;    :with dapi/with
;;    :entity dapi/entity
;;    :transact! #(deref (apply dapi/transact %&))
;;    :listen! datomic-listen!}))






;; ;; Will need to come up with a migration system XXX
;; ;; Look at https://github.com/rkneufeldapi/conformity and https://github.com/bitemyapp/brambling
;; ;; Not hard to bake our own as well if those don't work
#?(:clj
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
        (.printStackTrace e))))))

(defrecord DatascriptDB [config conn tx-report-chan]
   component/Lifecycle
  (start [component]
    (let [listening? conn ;; FIXME: assumes conn will never be fed in from ss system
          base-schema (deep-merge {:db/ident {:db/unique :db.unique/identity}
                                   :dat.sync/uuident {:db/unique :db.unique/identity}
                                   :db/cardinality {:db/valueType :db.type/ref}
                                   :db/valueType {:db/valueType :db.type/ref}
                                   :db/unique {:db/valueType :db.type/ref}
                                   :e/type {:db/valueType :db.type/ref}
                                   :dat.sync.remote.db/id {:db/unique :db.unique/identity} ;; DEPRECATED: TODO:
                                   }
                                  (:datascript/schema config)) ;; FIXME: schema should be probably be completely in the config. maybe stored just like datomic schema.
          conn (or conn (ds/create-conn base-schema))
          tx-report-chan (or tx-report-chan (async/chan))]
      (when-not listening?
        ;; ???: is this check already done in ds/listen!
        (ds/listen! conn ::tx-report #(async/put! tx-report-chan %)))
      (assoc component
        :tx-report-chan tx-report-chan
        :q ds/q
        :pull ds/pull
        :entity ds/entity
        :db deref
        :conn conn)))
  (stop [component]
    (ds/unlisten! conn ::tx-report)
    (assoc component
      :tx-report-chan nil
      :conn nil))
  protocols/Wire
  (send-chan [c]
    ;; TODO: set up go block for transactions {:keys [txs]}
    nil)
  (recv-chan [c]
    tx-report-chan)
  protocols/EventState
  (snapshot [component] (protocols/bootstrap component))
  (snapshot [component at] (protocols/bootstrap component))
  (events [component from] nil)
  (events [component from to] nil)
  protocols/PTransactor
  (transact! [component txs]
    (ds/transact! conn txs))
  (transact! [component txs tx-meta]
    (ds/transact! conn txs tx-meta))
  (bootstrap [component]
    ;;(dat.sync/datom><gdatom conn)
    (ds/datoms @conn :eavt))
  (tx-report-chan [component]
    tx-report-chan))

(defn create-datascript []
  (map->DatascriptDB {}))

#?(:clj
(defrecord DatomicDB [config conn tx-report-chan q pull entity db]
  component/Lifecycle
  (start [component]
    (let [listening? conn ;; FIXME: assumes conn will never be fed in from ss system
          url (-> config :datomic :url)
          deleted? (dapi/delete-database url)
          created? (dapi/create-database url)
          tx-report-chan (or tx-report-chan (async/chan))
          conn (or conn (dapi/connect url))
          tx-report-queue (dapi/tx-report-queue conn)
          component (assoc component
                      :conn conn
                      :q dapi/q
                      :pull dapi/pull
                      :entity dapi/entity
                      :db dapi/db
                      :tx-report-chan tx-report-chan)]
      ;; XXX Should be a little smarter here and actually test to see if the schema is in place, then transact
      ;; if it isn't. Similarly when we get more robust migrations.
      (log/info "Datomic Starting")
      (when-not listening?
        (ensure-schema! conn)
        (dat.sync/go-tx-report! tx-report-queue tx-report-chan))
    component))
  (stop [component]
    (assoc component
      :conn nil
      :tx-report-chan nil))
  protocols/Wire
  (send-chan [c]
    ;; TODO: set up go block for transactions {:keys [txs]}
    nil)
  (recv-chan [c]
    tx-report-chan)
  protocols/EventState
  (snapshot [component] (protocols/bootstrap component))
  (snapshot [component at] (protocols/bootstrap component))
  (events [component from] nil)
  (events [component from to] nil)
  protocols/PTransactor
  (transact! [component txs]
    (dapi/transact conn txs))
  (transact! [component txs tx-meta]
    ;; ???: can datomic have meta?
    (dapi/transact conn txs))
  (bootstrap [component]
    (let [db (dapi/db conn)
          db-fns (into
                   #{}
                  (dapi/q '[:find [?fn ...]
                           :where
                           [?fn :db/fn]] db))]
          (->> (dapi/datoms db :eavt)
               (remove (fn [[e _ _ _ _]]
                         (contains? db-fns e))))))
  (tx-report-chan [component]
    tx-report-chan)))

#?(:clj
(defn bootstrap-deprecated [{:as component :keys [conn]}]
  (let [db (dapi/db conn)]
    (->> (dapi/datoms db :eavt)
         (map (fn [[e a v t]] e))
         (distinct)
         (dapi/pull-many db '[*])
         (filter #(not (:db/fn %)))))))

#?(:clj
(defn create-datomic []
  (map->DatomicDB {})))

;; ;; ???: ***how do?
;; (defn db-api [db]
;;   (cond
;;     (instance? db DatomicDB) {:q #(dapi/q % (dapi/db conn) %&)
;;                               :pull (partial dapi/pull (dapi/db conn))
;;                               :pull-many (partial dapi/pull-many (dapi/db conn))
;;                               :db #(dapi/db conn)}
;;     :else {:q ds/q
;;            :pull ds/}
;;   "{:keys [q pull pull-many]}" ;; TODO: make an api spec
;;   (api []))

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




