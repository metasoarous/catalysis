(ns dat.view.representation
  (:require
    #?(:cljs [reagent.core :as r])
    #?(:cljs [reagent.ratom :refer-macros [reaction]])
    [taoensso.timbre :as log]
    [dat.view.styles :as styles]
    #?(:cljs [dat.view.context :as context])))


(defn cljc-atom [init-value]
  (#?(:cljs r/atom :clj atom)
    init-value))

;(def represent* nil)
(defmulti represent*
  "Reprsent some data given a representation specification"
  (fn [_ representation _]
    (try
      (first representation)
      (catch #?(:clj Exception :cljs :default) e
        (log/error "Could not dispatch on malformed representation:" representation)))))


(defn represent
  [app representation data]
  #?(:cljs (r/create-class
             {:display-name (str "representation " (try (first representation) (catch :default _ "?")))
              :reagent-render
              (fn [app representation data]
                [represent* app representation data])})
     :clj [represent* app representation data]))

;; TODO Replace evil global mutable state with local values!
(defonce registrations
  (cljc-atom {}))

(defn reactively-register
  "Representation middleware: *Should* make it so that when we update representations on the client, they update in the views."
  [representation-id representation-fn]
  (swap! registrations assoc representation-id representation-fn)
  (let [registration-reaction #?(:cljs (reaction (get @registrations representation-id))
                                 :clj registrations)]
    (fn [app representation data]
      ;; Goal: This should only update if we have changed the representation (in cljs); We'll see :-)
      ;; If we defined reaction in clj, we could actually _use_ the defer value to compute the new function
      @registration-reaction
      (representation-fn app representation data))))

(defn handle-errors
  "Representation middleware: *Should* make it so that when we update representations on the client, they update in the views."
  [representation-id representation-fn]
  (fn [app representation data]
    ;; Goal: This should only update if we have changed the representation (in cljs); We'll see :-)
    ;; If we defined reaction in clj, we could actually _use_ the defer value to compute the new function
    (try
      (representation-fn app representation data)
      (catch #?(:clj Exception :cljs :default) e
        (let [collapse? (cljc-atom true)]
          (fn [app representation data]
            (log/error e (str "Exception raised for representation: " representation-id))
            [:div.error {:style {:border-style "solid" :border-color "red" :padding "8px 12px" :margin "15px 3px"}}
             [:p [:strong "Error rendering component " (str representation-id)]]
             [:p [:a {:on-click (fn [& args] (swap! collapse? not))} "See more/less"]]
             (when-not @collapse?
               [:div
                [:p "Error"]
                [:pre (pr-str e)
                 #?(:cljs (try (.-stack e) (catch :default e "!!!Unable to print stack trace!!!")))]
                [:p "representation:"]
                [:pre (pr-str representation)]
                [:p "Data:"]
                [:pre (pr-str data)]])]))))))


(defn representation-override
  [representation-fn]
  (fn [app [representation-id context-data] data]
    (if-let [representation-id (:dat.view/representation-id context-data)]
      [represent app [representation-id (dissoc context-data :dat.view/representation-id)] data]
      [representation-fn app [representation-id context-data] data])))


;(def resolve-context* nil)
(defmulti resolve-context*
  (fn [app representation]
    (first representation)))

(defmethod resolve-context* :default
  [app representation]
  (second representation))

#?(:cljs
    (defn resolve-context [app [representation-id local-context]]
      ;(log/debug "Resolving context for: " [representation-id local-context])
      (let [context @(context/component-context app representation-id local-context)]
        (resolve-context* app [representation-id context]))))


(defn register-context-resolution
  [representation-id middleware resolution-fn]
  (defmethod resolve-context* representation-id
    [app representation representation-id]
    (let [middleware-fn (apply comp middleware)
          resolution-fn (middleware-fn resolution-fn)]
      (resolution-fn app representation representation-id))))

#?(:cljs
    (defn resolve-context-ware
      [representation-fn]
      (fn [app representation data]
        ;(log/debug "rsolving rep" (pr-str representation))
        (representation-fn
          app
          [(first representation) (resolve-context app representation)]
          data)))
   :clj
    ;; TODO For now...
    (def resolve-context-ware identity))

(defn apply-form2-middleware
  [middleware representation-fn]
  (fn [app representation data]
    (let [return-val (representation-fn app representation data)]
      (if (fn? return-val)
        ;; Then form2 component
        ((apply comp middleware) return-val)
        ;; then hiccup; return directly
        return-val))))

(defn register-representation
  ([representation-id middleware representation-fn]
   (let [base-middleware [resolve-context-ware
                          (partial reactively-register representation-id)
                          (partial handle-errors representation-id)]
         outer-middleware (concat middleware base-middleware)
         middleware (concat middleware
                            [(partial apply-form2-middleware outer-middleware)]
                            base-middleware)
         middleware-fn (apply comp middleware)
         representation-fn' (middleware-fn representation-fn)]
     (swap! registrations assoc representation-id representation-fn')
     (defmethod represent* representation-id
       [app context data]
       (representation-fn' app context data))))
  ([representation-id representation-fn]
   (register-representation representation-id [] representation-fn)))


