(ns {{ns-name}}.run
  (:gen-class)
  (:require [taoensso.timbre :as log :include-macros true]
            [com.stuartsierra.component :as component]
            [{{ns-name}}.config :as config]
            [{{ns-name}}.system :refer [create-system]]))

(defn -main [& args]
  ;; XXX Eventually hook command line args into config-overwrides here so they flow through system. Room for
  ;; lib work...
  (component/start (create-system))
  (log/info "{{name}} started"))

