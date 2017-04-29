(ns dat.sys.views
  "# Views"
  (:require [dat.view]
            [posh.reagent :as posh]
            [reagent.core :as r]
            [taoensso.timbre :as log]
            [re-com.core :as re-com]))


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
                   [dat.view/pull-view app (todo-view 1) todo]])]]))


;; ## Main

;; This is the main view function, which you plug into the Datview component

(defn main [app]
  [re-com/v-box
   :margin "15px"
   :gap "15px"
   :children [[:h1 "Datsys"]
              [:p {:style {:font-size "18px"}} "Congrats! You've got a Datsys app running :-)"]
              ;; A debug example:
              ;[dat.view/debug "todo instance eids:" @(type-instance-eids-rx app :e.type/Todo)]
              (log/info "inside the main function")
              [dat.view/debug "Here's a debug example:"
               @(posh/q '[:find ?e ?t-ident
                          :where [?e :e/type ?t]
                                 [?t :db/ident ?t-ident]]
                        (:conn app))]
              ;; XXX TODO Get this working now...
              [todos-view app]]])

