(ns dat.sys.db
  #?(:cljs (:require-macros [cljs.core.async.macros :as async-macros :refer [go go-loop]]))
  (:require #?@(:clj [[clojure.core.async :as async :refer [go go-loop]]]
                :cljs [[cljs.core.async :as async]])
            [taoensso.timbre :as log :include-macros true]

            [dat.sync.core :as dat.sync]
            [datascript.core :as ds]
            [dat.view]
            [dat.spec.protocols :as protocols]
            [dat.sys.utils :refer [deep-merge cat-into]]
            [com.rpl.specter :as specter]
            #?(:clj [taoensso.nippy :as nippy])
            #?(:clj [clojure.java.io :as io])
            #?(:clj [io.rkn.conformity :as conformity])
            #?(:clj [datomic.api :as dapi])
            [com.stuartsierra.component :as component]
            )
  #?(:clj
      (:import [java.io DataInputStream DataOutputStream])))

;; ;;
;; ;; From https://github.com/plumatic/schema
;; ;;
;; (defn cljs-env?
;;   "Take the &env from a macro, and tell whether we are expanding into cljs."
;;   [env]
;;   (boolean (:ns env)))

;; ;;
;; ;; From https://github.com/plumatic/schema
;; ;;
;; #?(:clj
;; (defmacro if-cljs
;;   "Return then if we are generating cljs code and else for Clojure code.
;;    https://groups.google.com/d/msg/clojurescript/iBY5HaQda4A/w1lAQi9_AwsJ"
;;   [then else]
;;   (if (cljs-env? &env) then else)))

;; (defn-tx
;;   {:require }
;;   [db arg arg]
;;   (d/q blah blah))

;; #?(:clj
;; (defmacro defn-tx [sym form & body]
;;   `(if-cljs
;;      (defn ~sym ~form ~body)
;;      (let [binds# (when (vector? ~form) ~form)
;;            fn-map# (when (map? ~form) ~form)
;;            body# (if binds# '~@body '~(rest @body))
;;            binds# (or binds# ~(first @body))
;;            fn-map# (into
;;                      {:lang "clojure"
;;                       :params binds#
;;                       :code body#}
;;                      fn-map#)]
;;        (def ~sym (datomic.api/function fn-map#))))))

;; (defmacro defn-tx [api {:keys [q pull]}]
;;   `{:params [db]
;;     :requires [[dat.sync.datomic :as dat.sync.kb]]
;;     :lang "clojure"
;;     :code dat.sync.kb/q
;;    })

;; (defn register-fn! [{:as api :keys [transact!]} conn fn-ident fn-spec]
;;   (transact!
;;     conn
;;     [{:db/ident fn-ident
;;       :db/fn fn-spec
;;       :db/doc ""
;;       :db/id #db/id [:db.part/user]
;;       }
;;       ]))

;; #?(:clj
;; (defn datomic-listen! [& args]
;;   (throw "listen! not implemented in datomic yet")))

;; (defmacro simple-datomic-fn [fn-key]
;;   `{:db/id #db/id [:db.part/user]
;;     :db/ident fn-key
;;     :db/fn (datomic.api/function
;;              '{:lang "clojure"
;;                :params [db]
;;                :requires [[~(namespace fn-key)]]
;;                :code (~(symbol fn-key) db)})
;;     ;;     :db/doc ;;TODO:

;;     })

(defrecord DatomAPI [pull pull-many q with entity transact! snap])

(def datascript-api
  (map->DatomAPI
  {:pull ds/pull
   :pull-many ds/pull-many
   :q ds/q
   :with ds/with
   :entity ds/entity
   :transact! ds/transact!
   :snap deref
;;    :listen! ds/listen!
   }))

#?(:clj
(defn datomic-transact!
  ([conn txs]
   (datomic-transact! conn txs nil))
  ([conn txs tx-meta]
   @(dapi/transact conn txs))))

#?(:clj
(def datomic-api
  (map->DatomAPI
  {:pull dapi/pull
   :pull-many dapi/pull-many
   :q dapi/q
   :with dapi/with
   :entity dapi/entity
   :transact! datomic-transact!
   :snap dapi/db
;;    :listen! datomic-listen!
   })))

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

(defrecord DatascriptDB [config conn tx-report-chan datom-api]
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
        :datom-api datascript-api
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
  (snapshot [component at]
    ;; TODO: support 'at
    (protocols/snapshot component))
  (snapshot [component]
    (ds/datoms @conn :eavt))
  (events [component from] nil)
  (events [component from to] nil))

(defn create-datascript []
  (map->DatascriptDB {}))

#?(:clj
(defrecord DatomicDB [config conn tx-report-chan datom-api]
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
                      :datom-api datomic-api
                      :conn conn
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
  (snapshot [component at]
    ;; TODO: support for 'at
    (protocols/snapshot component))
  (snapshot [component]
    (let [db (dapi/db conn)
          db-fns (into
                   #{}
                  (dapi/q '[:find [?fn ...]
                           :where
                           [?fn :db/fn]] db))]
          (->> (dapi/datoms db :eavt)
               (remove (fn [[e _ _ _ _]]
                         (contains? db-fns e))))))
  (events [component from] nil)
  (events [component from to] nil)))

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

(defn datomic-tempids->ints [txs]
  ;; TODO: handle datomic partitions
  (let [txs-after (specter/transform
                    (specter/walker #(instance? datomic.db.DbId %))
                    #(:idx %)
                    txs)]
    txs-after))

(def bare-bones-schema
  {:db/ident {:db/unique :db.unique/identity}
   :db/cardinality {:db/valueType :db.type/ref}
   :db/valueType {:db/valueType :db.type/ref}
   :db/unique {:db/valueType :db.type/ref}

   ;; ???: can :e/type be in just transactions now?
   :e/type {:db/valueType :db.type/ref}
   :dat.sync/uuident {:db/unique :db.unique/identity}
   })

(def enum-idents
  [{:db/ident :db.cardinality/many}
   {:db/ident :db.cardinality/one}
   {:db/ident :db.unique/identity}
   {:db/ident :db.unique/value}
   {:db/ident :db.type/keyword}
   {:db/ident :db.type/string}
   {:db/ident :db.type/boolean}
   {:db/ident :db.type/long}
   {:db/ident :db.type/bigint}
   {:db/ident :db.type/float}
   {:db/ident :db.type/double}
   {:db/ident :db.type/bigdec}
   {:db/ident :db.type/ref}
   {:db/ident :db.type/instant}
   {:db/ident :db.type/uuid}
   {:db/ident :db.type/uri}
   {:db/ident :db.type/bytes}])

(def schema-idents
  [{:db/ident :db/ident
    :db/valueType :db.type/keyword
    :db/unique :db.unique/identity}
   {:db/ident :db/cardinality
    :db/valueType :db.type/ref}
   {:db/ident :db/unique
    :db/valueType :db.type/ref}
   {:db/ident :db/valueType
    :db/valueType :db.type/ref}
   {:db/ident :db/doc
    :db/valueType :db.type/string}
   {:db/ident :db/index
    :db/valueType :db.type/boolean}
   {:db/ident :db/fulltext
    :db/valueType :db.type/boolean}
   {:db/ident :db/isComponent
    :db/valueType :db.type/boolean}
   {:db/ident :db/noHistory
    :db/valueType :db.type/boolean}

   {:db/ident :db.install/attribute
    :db/valueType :db.type/ref}
   {:db/ident :db.alter/attribute
    :db/valueType :db.type/ref}
   {:db/ident :db.install/partition
    :db/valueType :db.type/ref}
   {:db/ident :db.part/db}
   {:db/ident :db.part/user}
   {:db/ident :db.part/tx}
   ])

(def datsync-idents
  ;; FIXME: get from datsync
  [{:db/ident :e/type
    :db/valueType :db.type/ref}
   {:db/ident :dat.sync/uuident
    :db/unique :db.unique/identity}])

(defn attr-ref-middleware [transact]
  (fn [{:as report :keys [db-after]} txs]
    (let [txs (datomic-tempids->ints txs)]
;;       (log/debug "txs-post-id" txs)
      ;; ***???: attr-refs become [:db/ident keyword?]. testing implementation in datascript
      (transact report txs))))

;; (def identing-meta
;;   {:datascript.db/tx-middleware
;;    (comp
;;      attr-ref-middleware
;;      datascript.db/schema-middleware)})

(defn persistent-datascript-transact!
  ([conn txs] (persistent-datascript-transact! conn txs nil))
  ([conn txs {:as tx-meta :keys [datascript.db/tx-middleware]}]
   (ds/transact! conn txs
    (assoc
      (or tx-meta {})
      :datascript.db/tx-middleware
      (comp
        attr-ref-middleware
        (or tx-middleware identity)
        dat.sync/uuident-all-the-things
        datascript.db/schema-middleware)))))

(def persistent-datascript-api
  (map->DatomAPI
  {:pull ds/pull
   :pull-many ds/pull-many
   :q ds/q
   :with ds/with
   :entity ds/entity
   :transact! persistent-datascript-transact!
   :snap deref
;;    :listen! ds/listen!
   }))

#?(:clj
(defn ensure-schema-datascript!
  [conn]
  ;; FIXME: :db.install/attribute needs to be a :db.type/ref
  (let [schema-data (merge dat.view/base-schema
                           (-> "schema.edn" io/resource slurp read-string))
        ;; FIXME: conformity unavailable so using hardcoded schema loading
        dat-view-schema-txes (get-in schema-data [:dat.view/base-schema :txes])
        dat-sys-schema-txes (get-in schema-data [:datsys/base-schema :txes])
        txes (cat-into
                [enum-idents schema-idents]
               dat-view-schema-txes
               dat-sys-schema-txes)]
    (doseq [txs txes]
      (do
;;         (log/debug "ensuring txs: " txs)
        (persistent-datascript-transact!
          conn
          txs))))))

#?(:clj
(defn db-persister [url]
  (fn [{:as report :keys [db-after]}]
    (with-open [out (clojure.java.io/output-stream url)]
        (nippy/freeze-to-out! (DataOutputStream. out) {:datoms (ds/datoms db-after :eavt)
                                                       :schema (:schema db-after)})))))

#?(:clj
(defrecord PersistentDatascriptDB [config conn tx-report-chan datom-api]
   component/Lifecycle
  (start [component]
    (let [url "resources/persistent-datomic.bytes";;(-> config :persistent-datascript :url)
          listening? conn ;; FIXME: assumes conn will never be fed in from ss system
          base-schema (deep-merge bare-bones-schema
                                  (:datascript/schema config)) ;; FIXME: schema should be probably be completely in the config. maybe stored just like datomic schema.
          conn (or conn (ds/create-conn base-schema))
          tx-report-chan (or tx-report-chan (async/chan))]
      (ensure-schema-datascript! conn)
      (try
        (with-open [in (io/input-stream url)]
          (let [{:keys [datoms schema]} (nippy/thaw-from-in! (DataInputStream. in))]
            (when datoms
              (reset! conn (ds/init-db datoms schema)))))
        (catch Exception e))

      (when-not listening?
        ;; ???: is this check already done in ds/listen!
        (ds/listen! conn ::tx-report #(async/put! tx-report-chan %))
        (ds/listen! conn ::persist (db-persister url)))
      (assoc component
        :tx-report-chan tx-report-chan
        :datom-api persistent-datascript-api
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
  (snapshot [component at]
    ;; TODO: support 'at
    (protocols/snapshot component))
  (snapshot [component]
    (ds/datoms @conn :eavt))
  (events [component from] nil)
  (events [component from to] nil)))

#?(:clj
(defn create-persistent-datascript []
  (map->PersistentDatascriptDB {})))




