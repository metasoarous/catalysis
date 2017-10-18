(ns superv.async
  #?(:clj (:gen-class :main true))
  (:require #?(:clj [clojure.core.async :refer [<! <!! >! >!! alt! alt!!
                                                alts! alts!! go go-loop
                                                chan thread timeout put! close!
                                                take!]
                     :as async]
               :cljs [cljs.core.async :refer [<! >! alts! chan timeout put! close!
                                              take!]
                      :as async])
            #?(:cljs (cljs.core.async.impl.protocols :refer [ReadPort])))
  #?(:cljs (:require-macros [superv.async :refer [wrap-abort! >? <? go-try go-loop-try
                                                  on-abort go-super go-loop-super go-for alts?]]
                            [cljs.core.async.macros :refer [go go-loop alt!]]))
  #?(:clj (:import (clojure.core.async.impl.protocols ReadPort))))


(defn- cljs-env?
  "Take the &env from a macro, and tell whether we are expanding into cljs."
  [env]
  (boolean (:ns env)))

#?(:clj
   (defmacro if-cljs
     "Return then if we are generating cljs code and else for Clojure code.
     https://groups.google.com/d/msg/clojurescript/iBY5HaQda4A/w1lAQi9_AwsJ"
     [then else]
     (if (cljs-env? &env) then else)))


;; The protocols and the binding are needed for the channel ops to be
;; transparent for supervision, most importantly exception tracking
(defprotocol PSupervisor
  (-error [this])
  (-abort [this])
  (-register-go [this body])
  (-unregister-go [this id])
  (-track-exception [this e])
  (-free-exception [this e]))


#?(:clj
   (defn ^java.util.Date now []
     (java.util.Date.))
   :cljs (defn now []
           (js/Date.)))

(defrecord TrackingSupervisor [error abort registered pending-exceptions]
  PSupervisor
  (-error [this] error)
  (-abort [this] abort)
  (-register-go [this body]
    (let [id #?(:clj (java.util.UUID/randomUUID) :cljs (random-uuid))]
      (swap! registered assoc id body)
      id))
  (-unregister-go [this id]
    (swap! registered dissoc id))
  (-track-exception [this e]
    (swap! pending-exceptions assoc e (now)))
  (-free-exception [this e]
    (swap! pending-exceptions dissoc e)))

#?(:cljs (enable-console-print!))

(defn simple-supervisor
  "A simple supervisor which deals with errors through callbacks. You need to
  close its abort channel manually if you want the context to stop. It is
  supposed to be used at a boundary to an unsupervised system. If you want
  strong supervision, use the restarting-supervisor instead."
  [& {:keys [stale-timeout error-fn pending-fn]
      :or {stale-timeout (* 10 1000)
           error-fn (fn [e] (println "Supervisor:" e
                                     #?(:cljs (.-stack e))))}}]
  (let [s (map->TrackingSupervisor {:error (chan)
                                    :abort (chan)
                                    :registered (atom {})
                                    :pending-exceptions (atom {})})
        err-ch (:error s)]

    ;; avoid using go-loops with aot here
    (take! err-ch (fn loop-fn [e]
                    (error-fn e)
                    (take! err-ch loop-fn)))
    ((fn pending [_]
       (let [[[e _]] (filter (fn [[k v]]
                               (> (- (.getTime (now)) stale-timeout)
                                  #?(:clj (.getTime ^java.util.Date v)
                                     :cljs (.getTime v))))
                             @(:pending-exceptions s))]

         (when e
           (error-fn e)
           (-free-exception s e))
         (take! (timeout stale-timeout) pending))) nil)
    s))

;; a simple global instance, will probably be removed
(def S (simple-supervisor))

(defn throw-if-exception
  "Helper method that checks if x is Exception and if yes, wraps it in a new
  exception, passing though ex-data if any, and throws it. The wrapping is done
  to maintain a full stack trace when jumping between multiple contexts."
  [S x]
  (if (instance? #?(:clj Exception :cljs js/Error) x)
    (do (-free-exception S x)
        (throw (ex-info (or #?(:clj (.getMessage x)) (str x))
                        (or (ex-data x) {})
                        x)))
    x))

;; HACK ensure cljs vars dependencies for macro referenced vars
(defn ^:export superv-init []
  [-error -abort -register-go -unregister-go -track-exception -free-exception throw-if-exception])

(superv-init)

(defn supervisor? [x]
  (satisfies? PSupervisor x))

(defn check-supervisor [x]
  (when-not (supervisor? x)
    (throw (ex-info "First argument is not a supervisor."
                    {:argument x}))))

(defn chan?
  "Here until http://dev.clojure.org/jira/browse/ASYNC-74 is resolved."
  [x]
  (satisfies? #?(:clj clojure.core.async.impl.protocols/ReadPort
                 :cljs cljs.core.async.impl.protocols/ReadPort)
              x))

#?(:clj
   (defmacro go-try
     "Asynchronously executes the body in a go block. Returns a channel
  which will receive the result of the body when completed or the
  exception if an exception is thrown. You are responsible to take
  this exception and deal with it! This means you need to take the
  result from the cannel at some point or the supervisor will take
  care of the error."
     {:style/indent 1}
     [S & body]
     `(let [c# (check-supervisor S)
            id# (-register-go ~S (quote ~body))]
        ;; if-cljs is sensible to symbol pass-through it is not yet
        ;; clear to me why (if-cljs `cljs.core.async/go `async/go)
        ;; does not work
        (if-cljs (cljs.core.async.macros/go
                   (try ~@body
                        (catch js/Error e#
                          (when-not (= (:type (ex-data e#))
                                       :aborted)
                            (-track-exception ~S e#))
                          e#)
                        (finally
                          (-unregister-go ~S id#))))
                 (go
                   (try
                     ~@body
                     (catch Exception e#
                       (when-not (= (:type (ex-data e#))
                                    :aborted)
                         (-track-exception ~S e#))
                       e#)
                     (finally
                       (-unregister-go ~S id#))))))))




#?(:clj
   (defmacro go-loop-try
     "Loop binding for go-try."
     {:style/indent 2}
     [S bindings & body]
     `(go-try ~S (loop ~bindings ~@body))))


#?(:clj
   (defmacro thread-try
     "Asynchronously executes the body in a thread. Returns a channel
  which will receive the result of the body or the exception if one is
  thrown. "
     {:style/indent 1}
     [S & body]
     `(if-cljs (throw (ex-info "thread-try is not supported in cljs." {:code body}))
               (let [c# (check-supervisor S)
                     id# (-register-go ~S (quote ~body))]
                 (thread
                   (try
                     ~@body
                     (catch Exception e#
                       (when-not (= (:type (ex-data e#))
                                    :aborted)
                         (-track-exception ~S e#))
                       e#)
                     (finally
                       (-unregister-go ~S id#))))))))


#?(:clj
   (defmacro wrap-abort!
     "Internal."
     [S & body]
     `(if-cljs (let [abort# (-abort ~S)
                     to# (cljs.core.async/timeout 0)
                     [val# port#] (cljs.core.async/alts! [abort# to#] :priority true)]
                 (if (= port# abort#)
                   (ex-info "Aborted operations" {:type :aborted})
                   (do ~@body)))
               (let [abort# (-abort ~S)
                     to# (timeout 0)
                     [val# port#] (alts! [abort# to#] :priority true)]
                 (if (= port# abort#)
                   (ex-info "Aborted operations" {:type :aborted})
                   (do ~@body))))))

#?(:clj
  (defmacro <?
    "Same as core.async <! but throws an exception if the channel returns a
throwable object or the context has been aborted."
    [S ch]
    `(if-cljs (throw-if-exception ~S
              (let [abort# (-abort ~S)
                    [val# port#] (cljs.core.async/alts! [abort# ~ch] :priority :true)]
                (if (= port# abort#)
                  (ex-info "Aborted operations" {:type :aborted})
                  val#)))
              (throw-if-exception ~S
              (let [abort# (-abort ~S)
                    [val# port#] (alts! [abort# ~ch] :priority :true)]
                (if (= port# abort#)
                  (ex-info "Aborted operations" {:type :aborted})
                  val#))))))


#?(:clj
  (defn <??
    "Same as core.async <!! but throws an exception if the channel returns a
throwable object or the context has been aborted. "
    [S ch]
    (throw-if-exception S
    (let [abort (-abort S)
          [val port] (alts!! [abort ch] :priority :true)]
      (if (= port abort)
        (ex-info "Aborted operations" {:type :aborted})
        val)))))


#?(:clj
  (defmacro try<?
    [S ch & body]
    `(try (<? ~S ~ch) ~@body)))

#?(:clj
  (defmacro try<??
    [S ch & body]
    `(try (<?? ~S ~ch) ~@body)))



(defn take?
"Same as core.async/take!, but tracks exceptions in supervisor. TODO
deal with abortion."
([S port fn1] (take? S port fn1 true))
([S port fn1 on-caller?]
  (async/take! port
              (fn [v]
                (when (instance? #?(:clj Exception :cljs js/Error) v)
                  (-free-exception S v))
                (fn1 v))
              on-caller?)))


#?(:clj
  (defmacro >?
    "Same as core.async >! but throws an exception if the context has been aborted."
    [S ch m]
    `(if-cljs (throw-if-exception ~S (wrap-abort! ~S (cljs.core.async/>! ~ch ~m)))
              (throw-if-exception ~S (wrap-abort! ~S (>! ~ch ~m))))))

(defn put?
"Same as core.async/put!, but tracks exceptions in supervisor. TODO
deal with abortion."
([S port val]
  (put? S port val (fn noop [_])))
([S port val fn1]
  (put? S port val fn1 true))
([S port val fn1 on-caller?]
  (async/put! port
              val
              (fn [ret]
                (when (and (instance? #?(:clj Exception :cljs js/Error) val)
                          (not (= (:type (ex-data val))
                                  :aborted)))
                  (-track-exception S val))
                (fn1 ret))
              on-caller?)))

#?(:clj
   (defmacro alts?
     "Same as core.async alts! but throws an exception if the channel returns a
  throwable object or the context has been aborted. This is a macro and not a
  function like alts!."
     [S ports & opts]
     ;; TODO has no priority in order, can use alternative channel than abort
     `(if-cljs (let [[val# port#] (cljs.core.async/alts! (concat [(-abort ~S)] ~ports) ~@opts)]
                 [(throw-if-exception ~S val#) port#])
               (let [[val# port#] (alts! (concat [(-abort ~S)] ~ports) ~@opts)]
                 [(throw-if-exception ~S val#) port#]))))


#?(:clj
  (defmacro alt?
    "Same as core.async alt! but throws an exception if the channel returns a
throwable object or the context has been aborted."
    [S & clauses]
    `(if-cljs (throw-if-exception ~S (wrap-abort! ~S (cljs.core.async.macros/alt! ~@clauses)))
              (throw-if-exception ~S (wrap-abort! ~S (alt! ~@clauses))))))

#?(:clj
  (defmacro <<!
    "Takes multiple results from a channel and returns them as a vector.
The input channel must be closed."
    [ch]
    `(if-cljs (let [ch# ~ch]
                (cljs.core.async/<! (cljs.core.async/into [] ch#)))
              (let [ch# ~ch]
                (<! (async/into [] ch#))))))

#?(:clj
  (defmacro <<?
    "Takes multiple results from a channel and returns them as a vector.
Throws if any result is an exception or the context has been aborted."
    [S ch]
    `(if-cljs (cljs.core.async.macros/alt!
                (-abort ~S)
                ([v#] (throw (ex-info "Aborted operations" {:type :aborted})))

                (cljs.core.async.macros/go (<<! ~ch))
                ([v#] (doall (mapv (fn [e#] (throw-if-exception ~S e#)) v#))))
              (alt! (-abort ~S)
                    ([v#] (throw (ex-info "Aborted operations" {:type :aborted})))

                    (go (<<! ~ch))
                    ([v#] (doall (mapv (fn [e#] (throw-if-exception ~S e#)) v#)))))))

;; TODO lazy-seq vs. full vector in <<! ?
#?(:clj
  (defn <<!!
    [ch]
    (lazy-seq
    (let [next (<!! ch)]
      (when next
        (cons next (<<!! ch)))))))

#?(:clj
  (defn <<??
    [S ch]
    (lazy-seq
    (let [next (<?? S ch)]
      (when next
        (cons next (<<?? S ch)))))))

#?(:clj
  (defmacro <!*
    "Takes one result from each channel and returns them as a collection.
    The results maintain the order of channels."
    [chs]
    `(let [chs# ~chs]
      (loop [chs# chs#
             results# (if-cljs cljs.core.PersistentQueue.EMPTY
                                (clojure.lang.PersistentQueue/EMPTY))]
        (if-let [head# (first chs#)]
          (->> (if-cljs (cljs.core.async/<! head#) (<! head#))
                (conj results#)
                (recur (rest chs#)))
          (vec results#))))))

#?(:clj
  (defmacro <?*
     "Takes one result from each channel and returns them as a collection.
      The results maintain the order of channels. Throws if any of the
      channels returns an exception."
     [S chs]
     `(let [chs# ~chs]
        (loop [chs# chs#
               results# (if-cljs cljs.core.PersistentQueue.EMPTY
                                 (clojure.lang.PersistentQueue/EMPTY))]
          (if-let [head# (first chs#)]
            (->> (<? ~S head#)
                 (conj results#)
                 (recur (rest chs#)))
            (vec results#))))))

#?(:clj
   (defn <!!*
     [chs]
     (<!! (go (<!* chs)))))

#?(:clj
   (defn <??*
     [S chs]
     (<?? S (go-try S (<?* S chs)))))


(defn pmap>>
  "Takes objects from in-ch, asynchrously applies function f> (function should
  return a channel), takes the result from the returned channel and if it's
  truthy, puts it in the out-ch. Returns the closed out-ch. Closes the
  returned channel when the input channel has been completely consumed and all
  objects have been processed.
  If out-ch is not provided, an unbuffered one will be used."
  ([S f> parallelism in-ch]
   (pmap>> S f> parallelism (async/chan) in-ch))
  ([S f> parallelism out-ch in-ch]
   {:pre [(fn? f>)
          (and (integer? parallelism) (pos? parallelism))
          (instance? ReadPort in-ch)]}
   (let [threads (atom parallelism)]
     (dotimes [_ parallelism]
       (go-try S
         (loop []
           (when-let [obj (<? S in-ch)]
             (if (instance? #?(:clj Exception :cljs js/Error) obj)
               (do
                 (>? S out-ch obj)
                 (async/close! out-ch))
               (do
                 (when-let [result (<? S (f> obj))]
                   (>? S out-ch result))
                 (recur)))))
         (when (zero? (swap! threads dec))
           (async/close! out-ch))))
     out-ch)))



(defn engulf
  "Similiar to dorun. Simply takes messages from channels but does nothing with
  them. Returns channel that will close when all messages have been consumed."
  [S & cs]
  (let [ch (async/merge cs)]
    (go-loop-try S []
      (when (<? S ch) (recur)))))

(defn reduce>
  "Performs a reduce on objects from ch with the function f> (which
  should return a channel). Returns a channel with the resulting
  value."
  [S f> acc ch]
  (let [result (chan)]
    (go-loop-try S [acc acc]
      (if-let [x (<? S ch)]
        (if (instance? #?(:clj Exception :cljs js/Error) x)
          (do
            (>? S result x)
            (async/close! result))
          (->> (f> acc x) (<? S) recur))
        (do
          (>? S result acc)
          (async/close! result))))
    result))

(defn concat>>
  "Concatenates two or more channels. First takes all values from first channel
  and supplies to output channel, then takes all values from second channel and
  so on. Similiar to core.async/merge but maintains the order of values."
  [S & cs]
  (let [out (chan)]
    (go-try S
      (loop [cs cs]
        (if-let [c (first cs)]
          (if-let [v (<? S c)]
            (do
              (>? S out v)
              (recur cs))
            ; channel empty - move to next channel
            (recur (rest cs)))
          ; no more channels remaining - close output channel
          (async/close! out))))
    out))


(defn partition-all>> [S n in-ch & {:keys [out-ch]}]
  "Batches results from input channel into vectors of n size and supplies
  them to ouput channel. If any input result is an exception, it is put onto
  output channel directly and ouput channel is closed."
  {:pre [(pos? n)]}
  (let [out-ch (or out-ch (chan))]
    (go-loop-try S [batch []]
      (if-let [obj (<? S in-ch)]
        (if (instance? #?(:clj Exception :cljs js/Error) obj)
          ; exception - put on output and close
          (do (>? S out-ch obj)
              (async/close! out-ch))
          ; add object to current batch
          (let [new-batch (conj batch obj)]
            (if (= n (count new-batch))
              ; batch size reached - put batch on output and start a new one
              (do
                (>? S out-ch new-batch)
                (recur []))
              ; process next object
              (recur new-batch))))
        ; no more results - put outstanding batch onto output and close
        (do
          (when (not-empty batch)
            (>? S out-ch batch))
          (async/close! out-ch))))
    out-ch))

(defn count>
  "Counts items in a channel. Returns a channel with the item count."
  [S ch]
  (async/reduce (fn [acc obj] (if (instance? #?(:clj Exception :cljs js/Error) obj)
                                (put? S (-error S) obj)
                                (inc acc))) 0 ch))



(defn debounce>>
  "Debounces channel. Forwards first item from input channel to output
  immediately. After that one item every interval ms (if any). If there are more
  items in between, they are dropped."
  [S ch interval]
  (let [out (chan)]
    (go-loop-try S [last-val nil]
      (let [val (or last-val (<? S ch))
            timer (async/timeout interval)]
        (if (nil? val)
          (async/close! out)
          (let [[new-val ch] (alts? S [ch timer])]
            (condp = ch
              timer (do (>? S out val) (recur nil))
              ch (recur new-val))))))
    out))


#?(:clj
   (defmacro on-abort
     "Executes body if the supervisor aborts the context. You *need* to
  use this to free up any external resources. This is necessary,
  because our error handling is not part of the runtime which could
  free the resources for us as is the case with the Erlang VM."
     {:style/indent 1}
     [S & body]
     `(if-cljs
       (go-try ~S
        (cljs.core.async/<! (-abort ~S))
        ~@body)
       (go-try ~S
        (<! (-abort ~S))
        ~@body))))

(defn tap
  "Safely managed tap. The channel is closed on abortion and all
  pending puts are flushed."
  ([S mult ch]
   (tap S mult ch false))
  ([S mult ch close?]
   (on-abort S
     (close! ch)
     ;; flush
     (go-try (while (<! ch))))
   (async/tap mult ch close?)))

(defn sub
  "Safely managed subscription. The channel is closed on abortion and
  all pending puts are flushed."
  ([S p topic ch]
   (sub S p topic ch false))
  ([S p topic ch close?]
   (on-abort S
     (close! ch)
     ;; flush
     (go-try S (while (<! ch))))
   (async/sub p topic ch close?)))


#?(:clj
   (defmacro go-super
     "Asynchronously executes the body in a go block. Returns a channel which
  will receive the result of the body when completed or nil if an
  exception is thrown. Communicates exceptions via supervisor channels."
     {:style/indent 1}
     [S & body]
     `(let [c# (check-supervisor S)
            id# (-register-go ~S (quote ~body))]
        (if-cljs
         (cljs.core.async.macros/go
           (try
             ~@body
             (catch js/Error e#
               (let [err-ch# (-error ~S)]
                 (cljs.core.async/>! err-ch# e#)))
             (finally
               (-unregister-go ~S id#))))
         (go
           (try
             ~@body
             (catch Exception e#
               (let [err-ch# (-error ~S)]
                 (>! err-ch# e#)))
             (finally
               (-unregister-go ~S id#))))))))

#?(:clj
   (defmacro go-loop-super
     "Supervised loop binding."
     {:style/indent 2}
     [S bindings & body]
     `(go-super ~S (loop ~bindings ~@body))))

#?(:clj
   (defmacro thread-super
     "Asynchronously executes the body in a thread. Returns a channel
  which will receive the result of the body when completed or nil if
  an exception is thrown. Communicates exceptions via supervisor
  channels."
     {:style/indent 1}
     [S & body]
     `(if-cljs
       (throw (ex-info "thread-super not supported in cljs." {:code body}))
       (let [id# (-register-go ~S (quote ~body))]
         (thread
           (try
             ~@body
             (catch #?(:clj Exception :cljs js/Error) e#
                 ;; bug in core.async:
                 ;; No method in multimethod '-item-to-ssa' for dispatch value: :protocol-invoke
                 (let [err-ch# (-error ~S)]
                   (put! err-ch# e#)))
             (finally
               (-unregister-go ~S id#))))))))


(defn chan-super
  "Creates a supervised channel for transducer xform. Exceptions
  immediatly propagate to the supervisor."
  [S buf-or-n xform]
  (chan buf-or-n xform (fn [e] (put! (:error S) e))))



;; taken from clojure/core ~ 1.7
#?(:clj
   (defmacro ^{:private true} assert-args
     [& pairs]
     `(do (when-not ~(first pairs)
            (throw (IllegalArgumentException.
                    (str (first ~'&form) " requires " ~(second pairs) " in " ~'*ns* ":" (:line (meta ~'&form))))))
          ~(let [more (nnext pairs)]
             (when more
               (list* `assert-args more))))))


#?(:clj
   (defmacro go-for
     "Channel comprehension adapted from clojure.core 1.7. Takes a vector of one
  or more binding-form/collection-expr pairs, each followed by zero or more
  modifiers, and yields a channel of evaluations of expr.

  Collections are iterated in a nested fashion, rightmost fastest, and
  nested coll-exprs can refer to bindings created in prior
  binding-forms. Supported modifiers are: :let [binding-form expr ...],
  :while test, :when test. If a top-level entry is nil, it is skipped
  as it cannot be put on the result channel by core.async semantics.

  (<<? S (go-for [x (range 10) :let [y (<? (go-try 4))] :while (< x y)] [x y]))"
     [S seq-exprs body-expr]
     (assert-args
      (vector? seq-exprs) "a vector for its binding"
      (even? (count seq-exprs)) "an even number of forms in binding vector")
     (let [to-groups (fn [seq-exprs]
                       (reduce (fn [groups [k v]]
                                 (if (keyword? k)
                                   (conj (pop groups) (conj (peek groups) [k v]))
                                   (conj groups [k v])))
                               [] (partition 2 seq-exprs)))
           err (fn [& msg] (throw (IllegalArgumentException. ^String (apply str msg))))
           emit-bind (fn emit-bind [res-ch [[bind expr & mod-pairs]
                                            & [[_ next-expr] :as next-groups]]]
                       (let [giter (gensym "iter__")
                             gxs (gensym "s__")
                             do-mod (fn do-mod [[[k v :as pair] & etc]]
                                      (cond
                                        (= k :let) `(let ~v ~(do-mod etc))
                                        (= k :while) `(when ~v ~(do-mod etc))
                                        (= k :when) `(if ~v
                                                       ~(do-mod etc)
                                                       (recur (rest ~gxs)))
                                        (keyword? k) (err "Invalid 'for' keyword " k)
                                        next-groups
                                        `(let [iterys# ~(emit-bind res-ch next-groups)
                                               fs# (<? ~S (iterys# ~next-expr))]
                                           (if fs#
                                             (concat fs# (<? ~S (~giter (rest ~gxs))))
                                             (recur (rest ~gxs))))
                                        :else `(let [res# ~body-expr]
                                                 (when res#
                                                   (>? ~S ~res-ch res#))
                                                 (<? ~S (~giter (rest ~gxs))))))]
                         `(fn ~giter [~gxs]
                            (go-loop-try ~S [~gxs ~gxs]
                                         (let [~gxs (seq ~gxs)]
                                           (when-first [~bind ~gxs]
                                             ~(do-mod mod-pairs)))))))
           res-ch (gensym "res_ch__")]
       `(let [~res-ch (if-cljs (cljs.core.async/chan) (chan))
              iter# ~(emit-bind res-ch (to-groups seq-exprs))]
          (if-cljs (cljs.core.async.macros/go
                     (try (<? ~S (iter# ~(second seq-exprs)))
                          (catch js/Error e#
                            (-track-exception ~S e#)
                            (cljs.core.async/>! ~res-ch e#))
                          (finally (cljs.core.async/close! ~res-ch))))
                   (go (try (<? ~S (iter# ~(second seq-exprs)))
                            (catch Exception e#
                              (-track-exception ~S e#)
                              (>! ~res-ch e#))
                            (finally (async/close! ~res-ch)))))
          ~res-ch))))


(defn restarting-supervisor
  "Starts a subsystem with supervised go-routines initialized by start-fn.
  Restarts the system on error for retries times with a potential delay in
  milliseconds, an optional error-fn predicate determining the retry and a
  optional filter by exception type. You can optionally pass a supervisor to
  form a supervision tree. Whenever this passed supervisor aborts the context,
  this supervisor will close as well. You still need to block on the result of
  this supervisor if you want a clean synchronized shutdown. The concept is
  similar to http://learnyousomeerlang.com/supervisors

  All blocking channel ops in the subroutines (supervised context) are
  aborted with an exception on error to force total termination. The
  supervisor waits until all supervised go-routines are finished and
  have freed resources before restarting.

  If exceptions are not taken from go-try channels (by error), they become stale
  after the stale-timeout and trigger a restart or are propagated to the parent
  supervisor (if available) and the return value.

  Note: The signature and behaviour of this function might still change."
  [start-fn & {:keys [retries delay error-fn exception stale-timeout log-fn
                      supervisor]
               :or {retries #?(:clj Long/MAX_VALUE :cljs js/Infinity)
                    delay 0
                    error-fn nil
                    exception #?(:clj Exception :cljs js/Error)
                    stale-timeout (* 60 1000)
                    log-fn (fn [level msg]
                             (println level msg))}}]
  (let [retries (or retries #?(:clj Long/MAX_VALUE :cljs js/Infinity))
        out-ch (chan)]
    (go-loop [retries retries]
      (let [err-ch (chan)
            ab-ch (chan)
            close-ch (chan)
            s (map->TrackingSupervisor {:error err-ch :abort ab-ch
                                        :registered (atom {})
                                        :pending-exceptions (atom {})
                                        :restarting true})
            res-ch (start-fn s)
            stale-timeout 1000]

        (when supervisor
          ;; this will trigger a close event when all subroutines are stopped
          (on-abort supervisor
            (close! ab-ch)))

        (go-loop []
          (when-not (async/poll! ab-ch)
            (<! (timeout stale-timeout))
            (let [[[e _]] (filter (fn [[k v]]
                                    (> (- (.getTime (now)) stale-timeout)
                                       (.getTime v)))
                                  @(:pending-exceptions s))]
              (if e
                (do
                  (when-not (= (:type (ex-data e)) :aborted)
                    (log-fn :info {:event :stale-error-in-supervisor
                                   :error e}))
                  (-free-exception s e)
                  (put! err-ch e))
                (recur)))))

        (go-loop [i 0]
          (if-not (and (empty? @(:registered s))
                       (empty? @(:pending-exceptions s)))
            (do
              (<! (timeout 100))
              (recur (inc i)))
            (close! close-ch)))


        (let [[e? c] (alts! [err-ch close-ch] :priority true)]
          (if-not (= c close-ch) ;; an error occured
            (do
              (close! err-ch)
              (close! ab-ch)
              (<! close-ch) ;; wait until we are finished
              (if (or (not (instance? exception e?))
                      (not (or (not error-fn) (error-fn e?)))
                      (not (pos? retries)))
                (do
                  (log-fn :error {:event :passing-error :error e?})
                  (when supervisor
                    (put! (-error supervisor) e?))
                  (put! out-ch e?)
                  (close! out-ch))
                (do (<! (timeout delay))
                    (log-fn :debug {:event :retry :error e? :further-retries retries})
                    (recur (dec retries)))))
            (do (put! out-ch (<! res-ch))
                (close! out-ch))))))
    out-ch))
