(ns dat.sys.events
  (:require [dat.reactor :as reactor]
            [datascript.core :as d]))


;; This is where you would handle custom message ids, perhaps something like this


;; Simple example that logs figwheel events
(reactor/register-handler
  :figwheel/reload
  (fn [app db event]
    (reactor/resolve-to app db [[:dat.reactor/local-tx [{:db/id -1 :event/id :figwheel/reload}]]])))

