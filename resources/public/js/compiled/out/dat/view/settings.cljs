(ns dat.view.settings
  (:require [datascript.core :as d]
            [reagent.core :as r]
            [reagent.ratom :refer-macros [reaction]]
            [dat.reactor :as reactor]
            [dat.reactor.dispatcher :as dispatcher]
            [taoensso.timbre :as log]
            [posh.reagent :as posh]))


;; Should really split these up...
(def schema
  ;; How to create singleton entities?
  {:db/ident {:db/unique :db.unique/identity}
   :dat.view/settings {}
   ;; All routing should be based on a routing entity; future XXX
   :dat.view.router/current-path {}})


(defn init!
  [app]
  (let [tx [{:db/id (d/tempid -1)
             :db/ident :dat.view/settings
             :dat.view.router/current-path js/window.location.pathname}]]
    (d/transact! (:conn app) tx)))


;; TODO We should just be registering transaction functions

(reactor/register-handler ::update
  (fn [app db [_ [setting-ident setting-value]]]
    (let [tx [{:db/ident :dat.view/settings setting-ident setting-value}]]
      (reactor/resolve-to app db [[:dat.reactor/local-tx tx]]))))

(defn update-setting
  [app setting new-value]
  (log/debug "update-setting called with" setting new-value)
  (dispatcher/dispatch! (:dispatcher app) [::update [setting new-value]]))

(defn get-setting
  ([app setting-ident]
   (reaction
     (get
       @(get-setting app)
       setting-ident)))
  ([app]
   (posh/pull (:conn app) '[*] [:db/ident :dat.view/settings])))

;; TODO Buid out stuff for syncing settings objects for users




