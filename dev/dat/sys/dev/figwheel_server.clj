(ns dat.sys.dev.figwheel-server
  (:require [com.stuartsierra.component :as component]
            [figwheel-sidecar.system :as fig]
            [dat.sys.shared.utils :refer [deep-merge]]
            [taoensso.timbre :as log :include-macros true]))


(defrecord FigwheelServer [config ring-handler figwheel]
  component/Lifecycle
  (start [component]
         (let [port (-> config :server :port)
               fig-config (deep-merge (fig/fetch-config)
                                      {:data {:figwheel-options (merge
                                                                 {:ring-handler (:handler ring-handler)}

                                                           ;; comment out to allow figwheel config to determine the port instead of datsys config:
                                                                 (when port {:server-port port}))}})

               figwheel (or figwheel (component/start (fig/create-figwheel-system fig-config)))]
;;            (component/start figwheel)
           (log/info "Figwheel server started on port:" port)
           (assoc component :figwheel figwheel)))
  (stop [component]
        (component/stop figwheel)
        (assoc component :figwheel nil)))

(defn browser-repl [fig-server]
  (log/info "Starting figwheel browser-repl")
  (let [fs (get-in fig-server [:figwheel :figwheel-system])]
    (if fs
      (fig/cljs-repl fs)
      (log/debug "FigwheelServer has no figwheel-system cannot start browser-repl."))))

(defn new-figwheel-server []
  (map->FigwheelServer {}))
