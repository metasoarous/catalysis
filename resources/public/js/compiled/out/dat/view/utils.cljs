(ns dat.view.utils
  ;(:require-macros [reagent.ratom :refer [reaction]])
  (:require
    [datascript.core :as d]
    [reagent.core :as r]
    [reagent.ratom :as ratom :refer-macros [reaction]]
    [posh.reagent :as posh]
    [taoensso.timbre :as log]))

;(defn deref-or-value
;  [val-or-atom]
;  (if (satisfies? #?(:cljs IDeref :clj clojure.lang.IDeref) val-or-atom) @val-or-atom val-or-atom))
(defn deref-or-value
  [val-or-atom]
  (if (satisfies? IDeref val-or-atom) @val-or-atom val-or-atom))

(defn deep-merge
  "Like merge, but merges maps recursively."
  ;; XXX Need to be able to specify customizations for how things like vectors are going to merge;
  ;; May not always want to do what is described here
  [& maps]
  (if (every? #(or (map? %) (nil? %)) maps)
    (apply merge-with deep-merge maps)
    (last maps)))


(def ratom r/atom)


;; If we build/mock a reaction macro for clj, we could build these out for both
;; is it bad to memoize this? Would rather use a dispenser...
(def as-reaction
  "Treat a regular atom as though it were a reaction; Be careful, memoizes (we might end up using a dispensor trick
  like posh does to avoid this, but that limits us to using conns; can't get listeners/watches with regular atoms...)"
  (memoize
    (fn
      [vanilla-atom]
      (let [trigger (ratom 0)]
        (add-watch vanilla-atom :as-reaction-trigger (fn [& _] (swap! trigger inc)))
        (reaction
          @trigger
          @vanilla-atom)))))


;; XXX This will be coming to posh soon, but in case we need it earlier

(def safe-q
  "A version of posh/q without any transaction pattern matching filters (al a posh) that delegates directly to d/q, and
  wraps in a reaction"
  ;posh/q)
  (memoize
    (fn [query conn & args]
      (reaction
        (let [conn (as-reaction conn)
              db (deref-or-value conn)
              args (mapv deref-or-value args)]
          (apply d/q query db args))))))

;; QUESTION Should this be wrapped in a reaction as well?
(defn pull-many
  [app pattern eids]
  (map (partial posh/pull (:conn app) pattern)
       (deref-or-value eids)))


(def pull-attr
  "Wraps safe pull, and etracts the results for a given attr"
  (memoize
    (fn
      ([conn eid attr-ident options]
       (reaction
         (get @(posh/pull conn [attr-ident] eid options) attr-ident)))
      ([conn eid attr-ident]
       (pull-attr conn eid attr-ident {})))))


(def pull-path
  (memoize
    (fn
      ([conn eid attr-path options]
       ;; Question: Should use cursor?
       (reaction
         (get-in
           @(posh/pull conn (vec (filter keyword? attr-path)) eid options)
           attr-path)))
      ([conn eid attr-path]
       (pull-path conn eid attr-path {})))))



