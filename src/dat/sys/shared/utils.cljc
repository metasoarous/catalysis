(ns dat.sys.shared.utils
  (:require [taoensso.timbre :as log])
  #?(:cljs (:require-macros [dat.sys.shared.utils :refer [xfn stepper]])))

(defn deref-or-value
  [val-or-atom]
  (if (satisfies? #?(:cljs IDeref :clj clojure.lang.IDeref) val-or-atom) @val-or-atom val-or-atom))

#?(:clj
(defmacro xfn [bindings & body]
  `(map (fn ~bindings ~@body))))

#?(:clj
(defmacro stepper [[step acc in] & body]
  `(fn [~step]
    (fn
      ([] (~step))
      ([~acc] (~step ~acc))
      ([~acc ~in]
       ~@body)))))

(defn expand [predicate coll]
  (stepper [step acc in]
    (if (predicate in)
      (reduce step acc coll)
      (step acc in))
    ))

;;
;; cat-into takes a collection to merge into, any number of transducers, and at least one sequence. The sequences are treated as a single sequence back to back.
;;
;; args -
;;   coll [transucers ...]* [sequences ...]+
;;
(defn cat-into [coll & xfns-and-seqs]
  (let [{xfns true
         seqs false} (if (fn? (first xfns-and-seqs))
                       (group-by fn? xfns-and-seqs)
                       {false xfns-and-seqs}
                       )]
    (into coll
          (apply comp (into [cat] xfns))
          seqs)))

(defn fmap [f dict]
  ;; FIXME: not robust only handles single {}
  (into {} (map (fn [[k v]]
                  [k (f v)])) dict))

(defn mapply [f & args]
  (apply f (apply concat (butlast args) (last args))))

(defn minto
  ([in from]
    (into in cat from))
  ([in xform from]
   (into in (comp cat xform) from)))

(defn deep-merge
  "Like merge, but merges maps recursively."
  [& maps]
  (if (every? #(or (map? %) (nil? %)) maps)
    (apply merge-with deep-merge maps)
    (last maps)))

