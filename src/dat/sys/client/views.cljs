(ns dat.sys.client.views
  "# Views"
  (:require [dat.view]
            [posh.reagent :as posh]
            [taoensso.timbre :as log :include-macros true]
            [reagent.core :as r]
            [re-com.core :as re-com]
            [datascript.core :as d]
            [dat.sys.shared.utils :as utils :refer [cat-into]]
            [dat.sys.client.onyx :as onyx]))

;; The core views namespace...

;; We'll be looking at how you might set up a simple Todo application using Datsync, DataScript, Posh and
;; Datview.


;; ## Everything's data

;; Datview translates declarative queries into virtual dom (via hiccup).
;; These declarative queries have embedded in them not just the "data" query (as we typically think of it in
;; database terms), but also a description of how to translate the query results into hiccup.
;; These descriptions are stored as metadata on DataScript query data structures.

;; The simplest of examples:

(def time-entry
  [:db/id :e/name :time.entry/start-time :time.entry/stop-time :e/description])

(def base-todo-view
  ^{:attributes {:attr-view {:style {:background-color ""}}}
    :dat.view/summary dat.view/pull-summary-view}
  ;; You can also plug in a reactive atom if you wish
  ;^{:dat.view/spec spec-atom}
  [:db/id :e/name :e/description
   {:e/category [:db/id :e/name :e/description]
    :e/tags [:db/id :e/name :e/description]
    :todo/time-entries time-entry}])

;; We could call (dat.view/pull-view conn base-todo-view eid) and get a hiccup view of the

;; We should just be able to use recursion depth specifications and ...; Posh doesn't allow, so this is just a
;; hack for now...
(defn todo-view
  ([]
   base-todo-view)
  ([depth]
   (if-not (zero? depth)
     (conj base-todo-view {:todo/subtasks (todo-view (dec depth))})
     base-todo-view)))

;; The above only describes how we'd render a single todo item.
;; But we'll want to render a collection.

;; (Soon this will be possible by using annotated pull directly within `q`, but for now you're stuck
;; separating things out this way)

(defn type-instance-eids-rx
  [app type-ident]
  (posh/q '[:find [?e ...]
            :in $ ?type-ident
            :where [?e :e/type ?type]
                   [?type :db/ident ?type-ident]]
          (:conn app)
          ;;[:db/ident type-ident]
          type-ident))


;; Now we can put these things together into a Reagent component

(defn todos-view [app]
  (let [todo-eids @(type-instance-eids-rx app :e.type/Todo)]
    [re-com/v-box
     :margin "20px 5px 5px"
     :children [[:h2 "Todos"]
                [:p "Below are forms and views for each todo item in the database:"]
                (for [todo todo-eids]
                  ^{:key todo}
                  [:div {:style {:margin "20px 5px"}}
                   ;; Should be using shared reaction here?
                   [dat.view/pull-form app (todo-view 1) todo]
                   [dat.view/pull-view app (todo-view 1) todo]
                   ])]]))

(defn re-layout [attr]
  (case attr
    :route/todos {:dat.sys.client.onyx/type :dat.sys.client.onyx/q
                  :q '[:find ?todo
                       :in $
                       :where
                       [?type :db/ident :e.type/Todo]
                       [?todo :e/type ?type]]
                  :layout-attr ::todos}
    ::todos {:dat.sys.client.onyx/type :dat.sys.client.onyx/relation
             :container {:dat.sys.client.onyx/type :dat.sys.client.onyx/container
                         :rargs {:style {}}}
             :instance-attr ::todo
             :instance-key-fn first}
    ::todo {:dat.sys.client.onyx/type :dat.sys.client.onyx/instance
            :layout-expr '[::?todo]
            :container {:dat.sys.client.onyx/type :dat.sys.client.onyx/container
                        :rargs {:style {}}}}
    ::?todo {:dat.sys.client.onyx/type :dat.sys.client.onyx/pull
             :layout-expr '[:e/name :e.edit/name *]
             :pull-expr '[*]
             :rargs {:eid ::?todo}
             :container {:dat.sys.client.onyx/type :dat.sys.client.onyx/container
                         :rargs {:style onyx/my-h-box-style}}}
    :e/name {:dat.sys.client.onyx/type :dat.sys.client.onyx/represent
             :represent :re-com.core/label
             :rargs {:label :e/name}}
    :e.edit/name {:dat.sys.client.onyx/type :dat.sys.client.onyx/represent
                  :represent :re-com.core/input-text
                  :rargs {:model :e/name
                          :on-change [:dat.sys.client.onyx/dispatch-attr :e/name]}}
    {:dat.sys.client.onyx/type :dat.sys.client.onyx/represent
     :represent :re-com.core/label
     :rargs {:label [:dat.sys.client.onyx/omni-value attr]}}))

(defn re-job [app]
  (let [cat-fns {:route    :dat.sys.client.onyx/route
                 :q        :dat.sys.client.onyx/q
                 :pull     :dat.sys.client.onyx/pull
                 :relation :dat.sys.client.onyx/relation
                 :instance :dat.sys.client.onyx/instance
                 :entity   :dat.sys.client.onyx/entity
                 :error    :dat.sys.client.onyx/error
                 :expand-* :dat.sys.client.onyx/expand-*}
        ins #{:in}
        outs #{:render}]
    {:workflow [;; ???: [:event :value] [:value :conn]
                 ;;     [:event :path]  [:path :conn]
                 [:in :route]
                 [:in :q] [:q :relation] [:relation :instance] [:instance :entity] [:entity :render]
                                         [:relation :render]
                 [:in :pull]
                 [:pull :expand-*] [:expand-* :entity]
                 [:in :error] [:error :render]

                 [:route :q]
                 [:route :pull]
                 [:route :error]]
     :catalog (cat-into
                []
                (map onyx/input-task ins)
                (map onyx/output-task outs)
                (map (partial onyx/context-task app) cat-fns))
     :lifecycles (mapv onyx/inject-app (keys cat-fns))
     :flow-conditions (cat-into
                        [
;;                           {:flow/from :entity
;;                           :flow/to [:render]
;;                           :flow/thrown-exception? true
;;                           :flow/short-circuit? true
;;                           :flow/post-transform ::error-representation
;;                           :flow/predicate ::handle-error?
;;                            }
                         ]
                        (onyx/flow-spec-choose {:render :dat.sys.client.onyx/container} :relation [:render] :instance)
                        (onyx/flow-spec-choose cat-fns :in [:route :q :pull] :error)
                        (onyx/flow-spec-choose cat-fns :route [:q :pull] :error))}))

(defonce routing-table
  ["/" {"" :route/todos
        "todo/" {"" :route/todos}}])

;;
;;
;; This is the main view function, which you plug into the Datview component
;;
(defn main [app]
  (let [app (assoc app
              :routes routing-table
              :layout re-layout
              :whitelist onyx/whitelist
              :dispatch! (fn [event] (d/transact! (:conn app) [[:db.fn/call onyx/intent event]])))
        job (re-job app)
        env (atom (onyx/init job)) ;; env is a plain (non-reactive) atom whose value should never change. It is wrapped in an atom to protect it from reagent equality checks.
        ]
    [re-com/v-box
     :margin "15px"
     :gap "15px"
     :children [[:h1 "Datsys"]
                [:p {:style {:font-size "18px"}} "Congrats! You've got a Datsys app running :-)"]
                ;; A debug example:
                ;[dat.view/debug "todo instance eids:" @(type-instance-eids-rx app :e.type/Todo)]
                ;[dat.view/debug "Here's a debug example:"
                ;@(posh/q (:conn app)
                ;'[:find ?e ?t-ident
                ;:where [?e :e/type ?t]
                ;[?t :db/ident ?t-ident]])]
                ;; XXX TODO Get this working now...

                ;; Uncomment for the good 'ol alpha dat.sys
                [todos-view app]

                ;; Uncomment for the brand new onyx style dat.sys brittle pre-alpha
;;                 [onyx/re-onyx env 2 {:path "/"
;;                                      :dat.sys.client.onyx/type :dat.sys.client.onyx/route}]

                ;; Uncomment for a brittle debugger for onyx style dat.sys Hint: use step repeatedly or drain > feed-all > drain
;;                 [onyx/onyx-sim job {:path "/"
;;                                     :dat.sys.client.onyx/type :dat.sys.client.onyx/route}]
                ]]))

