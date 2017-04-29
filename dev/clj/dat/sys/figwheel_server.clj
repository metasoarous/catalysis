(ns dat.sys.figwheel-server
  (:require [com.stuartsierra.component :as component]
            [figwheel-sidecar.system :as figwheel]
            [dat.sys.utils :refer [deep-merge]]
            [taoensso.timbre :as log :include-macros true]))


(defrecord FigwheelServer [config ring-handler figwheel-system]
  component/Lifecycle
  (start [component]
         (let [port (-> config :server :port)
               fig-config (deep-merge (figwheel/fetch-config)
                                      {:data {:figwheel-options (merge
                                                                 {:ring-handler (:handler ring-handler)}

                                                           ;; comment out to allow figwheel config to determine the port instead of datsys config:
                                                                 (when port {:server-port port}))}})

               figwheel-system (figwheel/create-figwheel-system fig-config)]
           (component/start figwheel-system)
           (log/info "Figwheel server started on port:" port)
           (assoc component :figwheel-system figwheel-system)))
  (stop [component]
        (component/stop figwheel-system)
        (assoc component :figwheel-system nil)))

(defn browser-repl [fig-server]
  (figwheel/cljs-repl (:figwheel-system (:figwheel-system fig-server)) nil))

(defn new-figwheel-server []
  (map->FigwheelServer {}))
