(ns dat.sys.enval
  #?(:cljs (:require-macros [dat.sys.enval :refer [defnr bind-api]])))

;; NOTE: moved to dat.spec.utils for now


;; ???: should we support a match-based api binding?
;; '(:enval
;;    [(instance? env DatascriptDB) [datascript.core :refer [q pull pull-many]]]
;;    [(instance? env DatomicDB)    [datomic.core :refer [q pull pull-many]]])

#?(:clj
(defmacro bind-api
  "bind resource-api for this namespace. use with defnr."
  [binds]
  ;; ???: multiple api bindings?
  ;; ???: mechanism for warning when shadowing a binding elsewhere in the namespace
  ;; ???: more/less sophisticated api binding style
  `(.resetMeta
     *ns* ;; ~*ns*
     (assoc
       (or (meta *ns*) {})
       ::api-bindings '~binds))))

#?(:clj
(defn fnr**
  [api binds & body]
  `(fn [resource# & args#]
     (let [~api resource#]
       (apply
         (fn ~binds ~@body)
         args#)))))

#?(:clj
(defmacro fnr
  "fn with resource-api as first argument. You should not nest these."
  [binds & body]
  `(fn [resource# & args#]
     (let [~(::api-bindings (meta *ns*)) resource#]
       (apply
         (fn ~binds ~@body)
         args#)))))

;; #?(:clj
;; (defmacro defnr
;;   "defn with resource-api as first argument."
;;   [sym binds & body]
;;   ;; TODO: use the robust argument destructuring from defn
;;   ;; TODO: call efficiency improvements
;;   ;; ???: if multiple api bindings allowed, choose api binding in map funciton description?
;;   `(defn ~sym [resource# & args#]
;;      (let [~(::api-bindings (meta *ns*)) resource#]
;;        (apply
;;          (fn ~binds ~@body)
;;          args#)))))

#?(:clj
(defmacro defnr [sym binds & body]
  `(def ~sym (fnr ~binds ~@body))))


(bind-api {:keys [temp]})


(defnr testtt []
  (temp))

(defn go-test []
  (testtt {:temp #(str "Hello, resource.")}))
