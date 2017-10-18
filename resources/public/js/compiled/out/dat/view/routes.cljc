(ns dat.view.routes
  #?(:cljs (:require [reagent.core :as r])))


;; Defining routes, and any client vs server agnostic functionality

;; Should have some way of pulling routes out of this scenario


(def routes
  ["/" {"" :index
        ;; uber generix
        ["entity/" [#"\d+" :db/id]] {"/view" :view-entity
                                     "/edit" :edit-entity}
        ;; Should be able to add guard here, but wasn't able... Need to try again
        ;["entity/create/" [#"[\d[a-zA-Z]\-]*" :datview.creation/token]] :create-entity
        ["entity/create/" :dat.view.creation/token] :create-entity
        ;; Create an entity with a given type
        ;; (not sure why keyword isn't working here.. should; if not need to write workarounds...
        ;["create/" [keyword :e/type]] :create-entity
        ;; Need to add schema controls still...
        "schema/" :schema}])
        

