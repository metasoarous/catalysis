(ns dat.sys.run
  (:gen-class)
  (:require [taoensso.timbre :as log :include-macros true]
            [com.stuartsierra.component :as component]
            [dat.sys.config :as config]
            [dat.sys.system :refer [create-system]]))

(defn -main [& args]
  ;; TODO Eventually hook command line args into config-overwrides here so they flow through system. Room for
  ;; lib work...
  (component/start (create-system))
  (log/info "datsys started"))

