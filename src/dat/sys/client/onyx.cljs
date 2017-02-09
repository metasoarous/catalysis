(ns dat.sys.client.onyx
  "# Views"
  (:require [dat.view.styles :as styles]
            [posh.reagent :as posh]
            [taoensso.timbre :as log :include-macros true]
            [reagent.core :as r]
            [re-com.core :as re-com]
            [clojure.spec :as s]
            [dat.sys.shared.utils :as utils :refer [minto cat-into] :refer-macros [xfn]]
            [datascript.core :as d]
            [onyx-local-rt.api :as onyx]
            [bidi.bidi :as bidi]))

;;
;; ## Temporary Constansts - should move to configuration
;;
(defonce onyx-batch-size 20)
(defonce my-h-box-style (into {:width "100%" :flex-flow "row wrap"} (merge styles/bordered-box-style styles/h-box-styles)))

(def init onyx/init)

;;
;; Onyx runtime utils
;;
(defn less-segment [seg-or-segs]
  (let [less #(into
                {}
                (xfn [[k v]]
                  [k (if (fn? v) ::fn v)])
                (dissoc % :container))]
    (if (map? seg-or-segs)
      (less seg-or-segs)
      (map less seg-or-segs))))

(defn flow-spec-choose [task->spec source tasks else]
  (cat-into
    []
    (for [task tasks]
      {:flow/from source
       :flow/to [task]
       ::spec (task->spec task)
       :flow/predicate [::valid? ::spec]
       :flow/short-circuit? true
       })
    (when else
      [{:flow/from source
        :flow/to [else]
        :flow/short-circuit? true
        :flow/predicate ::always}])))

(defn input-task [task-name & {:as task}]
  (into
    {:onyx/type :input
     :onyx/name task-name
     :onyx/batch-size onyx-batch-size}
    task))

(defn output-task [task-name & {:as task}]
  (into
  {:onyx/type :output
   :onyx/name task-name
   :onyx/batch-size onyx-batch-size}
    task))

(defn context-task [app [task-name fn-name] & {:as task}]
  (into
  {:onyx/type :function
   :onyx/name task-name
   :onyx/batch-size onyx-batch-size
   ::app app
   :onyx/fn fn-name}
    task))

(defn ^:export inject-app* [{:keys [onyx.core/task-map onyx.core/params] :as pipeline} lifecycle]
  (let [app (::app task-map)]
    {:onyx.core/params [app]}))

(defonce ^:export inject-app-calls {:lifecycle/before-task-start inject-app*}) ;; keeps cljs compiler from optimizing out inject-app*

(defn inject-app [task-name]
  {:lifecycle/task task-name
   :lifecycle/calls ::inject-app-calls})

;;
;; ## Candidates for onyx runtime inclusion
;;
(defn onyx-out
  "Returns outputs of onyx job presumably after draining."
  [env]
  (into
    {}
    (comp
      (filter (fn [[_ task]] (= (get-in task [:event :onyx.core/task-map :onyx/type]) :output)))
      (xfn [[task-name task]]
           [task-name (:outputs task)]))
    (:tasks env)))

(defn onyx-run [onyx-env in]
  (-> (reduce (fn [env [task segment]]
                 (onyx/new-segment env task segment)) onyx-env in)
      (onyx/drain)
      (onyx/stop)))

(defn onyx-step
  "Ticks until the start of the next task"
  [onyx-env]
  (reduce
    (fn [env _]
      (if (= (:next-action env) :lifecycle/after-batch)
        (reduced (onyx/tick env))
        (onyx/tick env)))
    (onyx/tick onyx-env)
    (range 1000)))

(defmethod onyx/transition-env :remove-segment
  [env {:keys [task segment]}]
  (update-in env [:tasks task :outputs] (partial into [] (remove #(= segment %)))))

(defn onyx-remove-segment [env output-task segment]
  (onyx/transition-env env {:event :remove-segment
                            :task output-task
                            :segment segment}))

(defn onyx-feed-loop [env & selections]
  ;; TODO: :in and :render need to be genericized
  (reduce
    (fn [env selection]
      (-> (onyx/new-segment env :in selection)
          (onyx-remove-segment :render selection)))
    env
    selections))


;;
;; ## spec and flow control
;;
(defn ^:export valid? [event old-seg seg all-new spec]
;;   (log/debug "validating" spec (less-segment seg))
  (s/valid? spec seg))

(def ^:export always (constantly true))

(defn seg-type? [my-type]
  ;; TODO: I think there are existing spec tools for this sort of thing
  #(= (::type %) my-type))

(def container? (seg-type? ::container))
(def representation? (seg-type? ::represent))
(s/def ::route (seg-type? ::route))
(s/def ::q (seg-type? ::q))
(s/def ::pull (seg-type? ::pull))
(s/def ::entity (seg-type? ::entity))
(s/def ::container container?)

;;
;; ## Tasks
;;
(defn ^:export expand-* [_ {:as context :keys [layout-expr entity]}]
  (assoc context :layout-expr (into [] (utils/expand #{'* "*"} (remove (into #{:db/id} layout-expr) (keys entity))) layout-expr)))

(defn ^:export route [{:keys [routes layout]} {:keys [path]}]
  (log/debug "routing path:" path)
  (let [layout-attr (:handler (bidi/match-route routes path))]
    (log/debug "  layout-attr" layout-attr)
    (into (layout layout-attr) {:layout-path [layout-attr]})))

(defn ^:export q [{:keys [layout conn]} {:as context :keys [q layout-attr layout-path]}]
;;   (log/debug layout-path "q'ing" q)
  (into (if layout-attr (layout layout-attr) context) {:relation @(posh/q q conn)
                                        :layout-path layout-path}))

(defn ^:export pull [{:keys [layout conn]} {:as context :keys [pull-expr layout-attr layout-path] {:keys [eid]} :rargs}]
;;   (log/debug layout-path "pulling" context)
  (into (if layout-attr (layout layout-attr) context) {:entity @(posh/pull conn pull-expr eid)
                                                       ::type ::entity
                                                       :layout-path (if layout-attr (conj layout-path layout-attr) layout-path)}))

(defn ^:export relation [{:keys [layout]} {:keys [container layout-path relation instance-attr instance-key-fn]}]
;;   (log/debug layout-path "relating" relation)
  (into
    [(assoc container :layout-path layout-path)]
    (for [instance relation]
      (assoc (layout instance-attr)
        :layout-path (conj layout-path (instance-key-fn instance))
        :instance instance))))

(defn ^:export instance [_ {:as context :keys [instance layout-expr]}]
;;   (log/debug "instancing" instance)
  (assoc (dissoc context :instance)
    ::type ::entity
    :entity (zipmap layout-expr instance)))

(defn ^:export entity [{:as app :keys [whitelist layout]} {:keys [entity layout-expr container layout-path]}]
;;   (log/debug layout-expr "entity'ing" entity)
  (into
    [(assoc container :layout-path layout-path)]
    (for [attr layout-expr]
      (let [attr-layout (layout attr)
            rargs (into
                    {}
                    (for [[k fn-spec] (:rargs attr-layout)]
                      (let [f (if (vector? fn-spec)
                                (apply (whitelist (first fn-spec)) (rest fn-spec))
                                #(get %2 fn-spec) ;; plain keyword
                                )]
                        [k (f app entity)])))]
;;         (log/debug "  " attr-layout)
        (assoc attr-layout
          :rargs rargs
          :represent (whitelist (:represent attr-layout))
          :layout-path (conj layout-path attr))))))

(defn ^:export error-representation [event segment exception]
  ;; ???: complex representations should be made into components?
  {::type ::represent
   :represent re-com/label
   :layout-path [:errors (str segment)] ;; !!!: hacky
   :rargs {:label (str "Exception " exception " choked on: " segment)}})

(defn ^:export error [app seg]
  ;; TODO: generate an expection message with useful debug info
  (throw "Choked on" (less-segment seg) " segment"))

;;
;; ## Whitelist
;;
(defn ^:export dispatch-attr [attr]
  (fn [{:keys [dispatch!]} entity]
    #(dispatch! {::type ::value
                 :value %
                 :eid (:db/id entity)
                 :attr attr})))

(defn ^:export omni-value [attr]
  (fn [_ entity]
;;     (log/debug "omni" entity)
    (str (get entity attr))))

(defonce whitelist
  {:re-com.core/label re-com/label
   :re-com.core/input-text re-com/input-text

   :clojure.core/identity identity
   ::dispatch-attr dispatch-attr
   ::omni-value omni-value})

;;
;; seg-type
;; TODO: fold back into regular event handling.
;; ???: Might want to handle events with onyx tasks and windowing
;;
(defmulti intent (fn [_ event]
                   (log/debug "intenting:" (::type event))
                   (::type event)))

(defmethod intent ::value [db {:keys [eid attr value]}]
  (log/debug "setting eav" eid attr value)
  [[:db/add eid attr value]])

;;
;; ## hiccup
;;
(defn boxer [& {:as args
                style :style}]
;;   (log/debug "boxing" direction)
  (let
    [direction (:flex-direction style)
     boxcar (case direction
              :column re-com/v-box
              "column" re-com/v-box
              :row re-com/h-box
              "row" re-com/h-box
              nil (do (log/debug "boxer direction nil") re-com/v-box)
              (throw (str "Unknown boxer direction " direction)))]
    (minto [boxcar] args)))

(defn box-children [container children]
  ;; TODO: layout-key box
  (minto [boxer :children children] (:rargs container)))

(defn display [representation]
  (minto [(:represent representation)] (:rargs representation)))

(defn pretty-text-area [& {:keys [label printables rows printable]}]
  [re-com/v-box :children
   [[re-com/label :label label]
    [re-com/input-textarea
;;      :disabled? true
     :rows rows
     :width "100%"
     :on-change #()
     :model (with-out-str (apply str (map cljs.pprint/pprint (or printables [printable]))))]]])

(defn text-label [& {:keys [label text]}]
  [boxer :style my-h-box-style :children
   [[re-com/label :label label :style {:margin 5}]
    [re-com/label :label text :style {:margin 5}]]])

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; ## TODO: virtual attribute container
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; ???: integrate
;; (defn setup-virtual-attrs! [conn virtual {eid :db/id}]
;;   (when virtual
;;     (do
;;       (log/debug "virtual-attr:" (assoc virtual :db/id eid))
;;       (d/transact! conn [(assoc virtual :db/id eid)])
;;       (log/debug "  virtual-actual" (get (d/entity @conn eid) (ffirst virtual)))
;;       )))

;; (defn teardown-virtual-attrs! [conn virtual {eid :db/id}]
;;   (when virtual
;;     (d/transact! conn (map
;;                         (fn [attr]
;;                           [:db/retract eid attr])
;;                         (keys virtual)))))


;;
;; ## re-onyx
;;
(defn layout-depth [render]
  (-> render
      :layout-path
      count))

(defn bins-by-depth [renders]
  (let [bins (group-by layout-depth renders)]
    (into (sorted-map) (sort-by first bins))))

(defn in-container [container render]
  (reduce #(and %1 %2) (map #(= %1 %2) (:layout-path container) (:layout-path render))))

(defn root-bin [bins]
  (let [[depth children] (first bins)]
    (cond
      (= depth 0) {::type ::represent
                   :represent re-com/label
                   :rargs {:label (apply str (into ["ERRORS: "] children))}}
      (= (count children) 1) (first children)
      :else {::type ::represent
             :represent re-com/label
             :rargs {:label "Error: more than one root-bin."}})))

(defn onyx-box [re-render representation bins]
  ;; TODO: key things
;;   (log/debug "o-box" representation)
  (cond
    (container? representation) (let [[depth subrenders] (first bins)
                                      children (filter (partial in-container representation) subrenders)
                                      more-bins (rest bins)]
;;                                   (log/debug "boxing-children container:" representation)
                          (box-children representation (mapv (fn [%]
                                                               (log/debug "  child:" %)
                                                               [onyx-box re-render % more-bins]) children))) ;; not tail recursion. would be difficult to make it so. should be okay for now. Parse trees: how do they work? *<:o)
    (representation? representation) (display representation)
    (nil? representation) (throw "Error for now. Nil might be okay for a representation. Maybe just return nil or a span.")
    :else (do
;;             (log/debug "re-render:" representation)
            [re-render representation]) ;; recur differently if the render needs to loop back through the onyx-env
    ))

(defn re-onyx [env onyx-depth segment]
  (let [{:keys [render]} (onyx-out (onyx-run @env {:in segment}))
        bins (bins-by-depth render)]
;;     (log/debug "binsezes" bins)
    ;; ???: onyx-depth causes innefficiencies. option to turn off?
    (if (= onyx-depth 0)
      [re-com/label :label "Reached Max Onyx Depth. Either max-depth is too low or you have an infinite render loop."]
      [onyx-box (partial re-onyx env (dec onyx-depth)) (root-bin bins) (rest bins)])))

;;
;; ## Onyx sim
;;

(defn pretty-layout-path [rep]
  [re-com/label :label (str "<" (::type rep) "> " (:layout-path rep))])

(defn pretty-onyx-out [env out]
  (cond
    (container? out) [pretty-layout-path out]
    (representation? out) [re-com/v-box :children [[pretty-layout-path out] [display out]]]
    :else [re-com/h-box :children
     [[re-com/button :label "^Feed" :on-click #(swap! env (fn [e] (onyx-feed-loop e out)))]
      [pretty-layout-path out]]]))

(defn pretty-onyx-outbox [env outputs]
  [re-com/v-box :children
   (cat-into [[re-com/title :label "Outbox" :level :level4]
              [re-com/button :label "^Feed-all" :on-click (fn [] (swap!
                                                                   env
                                                                   (fn [e]
                                                                     (apply
                                                                       onyx-feed-loop
                                                                       e
                                                                       (remove #(or (container? %) (representation? %)) outputs)))))]]
    (for [out outputs] [pretty-onyx-out env out]))])

(defn pretty-onyx-inbox [env inputs]
  (if (= 0 (count inputs))
    [:span]
    [pretty-text-area :label "Inbox" :printable (map less-segment inputs) :rows 5]))

(defn task-box [env [task-name {:keys [inbox outputs]}]]
  [re-com/v-box :children
   [[re-com/title :label task-name :level :level3]
    (when inbox [pretty-onyx-inbox env inbox])
    (when outputs [pretty-onyx-outbox env outputs])]])

(defn pretty-onyx [env]
  (let [env-data (onyx/env-summary @env)]
     [re-com/v-box :children
      (cat-into
        [[text-label :label "Next Action:" :text (pr-str (:next-action env-data))]]
        (for [task (:tasks env-data)]
          [task-box env task]))]))

(defn onyx-sim [job seg]
  (let [env (r/atom (-> (onyx/init job)
                        (onyx/new-segment :in seg)))]
    ;; TODO: posh/pull does not work with onyx-sim, but does with re-onyx because this env is in a ratom and updated that way so it doesn't listen to posh in the same way maybe.
    (fn [_ _]
        [re-com/v-box :children
         [[re-com/h-box :children [[re-com/button :label "Tick" :on-click #(swap! env onyx/tick)]
                                   [re-com/button :label "Step" :on-click #(swap! env onyx-step)]
                                   [re-com/button :label "Drain" :on-click #(swap! env (comp onyx/stop onyx/drain))]]]
          [pretty-onyx env]]])))

