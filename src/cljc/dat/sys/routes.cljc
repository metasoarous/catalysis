(ns dat.sys.routes
  (:require [taoensso.timbre :as log :include-macros true]
            [com.stuartsierra.component :as component]
            [bidi.bidi :as bidi]

            #?(:clj [compojure.core :refer [routes GET POST]])))


(defn test-routes []
  #?(:clj
      (routes
        (GET  "/a" _  "a"))))

(defn test-routes-two []
  #?(:clj
      (routes
        (GET "/a" _ "never a")
        (GET  "/b" _  "b"))))


(defrecord Routes [config handlers]
  component/Lifecycle
  (start [component]
         component
         (assoc component :handlers [(test-routes) (test-routes-two)]))
  (stop [component]
        (assoc component :handlers nil)))


(defn new-routes []
  (map->Routes {}))

