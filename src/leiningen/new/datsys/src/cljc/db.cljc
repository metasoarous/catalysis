(ns {{ns-name}}.db
  #?(:cljs (:require-macros [cljs.core.async.macros :as async-macros :refer [go go-loop]]))
  (:require #?@(:clj [[clojure.core.async :as async :refer [go go-loop]]]
                :cljs [[cljs.core.async :as async]])
            [taoensso.timbre :as log :include-macros true]
            [dat.sync.core :as dat.sync]
            [dat.sync.db :as d]
            [datascript.core :as ds]
            [datascript.db]
            [dat.view]
            [dat.spec.protocols :as protocols]
            [{{ns-name}}.utils :refer [deep-merge cat-into]]
            #?(:clj [taoensso.nippy :as nippy])
            #?(:clj [clojure.java.io :as io])
;;             #?(:clj [io.rkn.conformity :as conformity])
            [io.rkn.conformity.core :as conformity]
            #?(:clj [datomic.api :as dapi])
            [com.stuartsierra.component :as component])
            
  #?(:clj
      (:import [java.io DataInputStream DataOutputStream])))

(def bare-bones-schema
  {:db/ident {:db/unique :db.unique/identity}
   :db/cardinality {:db/valueType :db.type/ref}
   :db/valueType {:db/valueType :db.type/ref}
   :db/unique {:db/valueType :db.type/ref}
   :dat.sync/uuid {:db/unique :db.unique/identity}})

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
   {:db/ident :db.part/tx}])


(defn ensure-schema-datascript!
  [conn]
  (doseq [txs [enum-idents schema-idents]]
    (do
      ;; (log/debug "ensuring txs: " txs)
      (d/transact! conn txs))))

#?(:clj
   (defn ensure-schema!
     [conn]
  ;; The schema is in `resources/schema.edn`; Note that we make requirements in that schema about having Datview schema loaded
     (let [schema-data (merge dat.view/base-schema
                              (conformity/read-resource "schema.edn"))]
;;                            (-> "schema.edn" io/resource slurp read-string)

    ;; TODO: hot load schemas from file so they get rewritten with a file watch. make a fn 'ensure-conforms-harsh that makes the db entity look like the unique items from file. make sure to add an attr that explains that they cannot be changed from the ui only from file or they will get smashed on reload. {:conformity/warn "Conformity manages this entity in *file-name*. If you wish to make permanent changes do so there and not via transactions."}
       (try
         (conformity/ensure-conforms conn schema-data)
         (catch Exception e
           (.printStackTrace e))))))

#?(:clj
   (defn db-persister [url]
;;   (log/debug "nippy freezing")
     (fn [{:as report :keys [db-after]}]
       (with-open [out (clojure.java.io/output-stream url)]
           (nippy/freeze-to-out! (DataOutputStream. out) {:datoms (ds/datoms db-after :eavt)
                                                          :schema (:schema db-after)})))))

(defn create-conn! [kind url reset-on-start?]
  (case kind
    :datomic
    #?(:clj
        (do
          (when reset-on-start?
            (dapi/delete-database url))
          (dapi/create-database url)
          (dapi/connect url)))

    :datascript
    (do
      (let [conn-from-storage
            #?(:clj
                (when-not reset-on-start?
                   (try
                     (with-open [in (io/input-stream url)]
                       (let [{:keys [datoms schema]} (nippy/thaw-from-in! (DataInputStream. in))]
                         (when datoms
;;                            (log/debug "nippy thawing")
                           (ds/conn-from-datoms datoms schema))))
                     (catch Exception e)))
                :cljs nil)]
          (or conn-from-storage (ds/create-conn bare-bones-schema))))))

(defrecord KnowledgeBase [config conn tx-report-chan kind]
  component/Lifecycle
  (start
    [component]
    (let [peer-type #?(:clj :dat.sync/server
                       :cljs :dat.sync/client)
          reset-on-start? (get-in config {peer-type :reset-on-start?})
          kind (get-in config [peer-type :kind])
          url (get-in config [peer-type :url])
          conn (or conn (create-conn! kind url reset-on-start?))
          tx-report-chan (or tx-report-chan (async/chan))]
      (log/info (str "Knowbase Starting with kind: " kind))
      (case kind
        :datascript
        (do
          (ensure-schema-datascript! conn)
          (ds/listen! conn ::tx-report #(async/put! tx-report-chan %))
          #?(:clj (ds/listen! conn ::persist (db-persister url))))

        :datomic
        (do
          #?(:clj (dat.sync/go-tx-report! (dapi/tx-report-queue conn) tx-report-chan))))

      #?(:clj (ensure-schema! conn))

      (assoc component
        :kind kind
        :conn (d/conn-from-conn conn)
        :tx-report-chan tx-report-chan)))
  (stop
    [component]
    (case kind
      :datascript
      (do
        (ds/unlisten! conn ::tx-report)
        (ds/unlisten! conn ::persist)))
    (assoc component
      :kind nil
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
            ;; TODO: support 'at
            (protocols/snapshot component))
  (snapshot [component]
            (let [db @conn]
              (remove (partial d/fn-datom? db) (d/datoms db :eavt))))
  (events [component from] nil)
  (events [component from to] nil))

(defn create-knowledge-base
  ([] (create-knowledge-base {}))
  ([opts]
   (map->KnowledgeBase opts)))

