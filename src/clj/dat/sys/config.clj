(ns dat.sys.config
  (:require [environ.core :as environ]
            [taoensso.timbre :as log :include-macros true]
            [com.stuartsierra.component :as component]))

(defn ?->int [x]
  (try (Integer/parseInt x)
       (catch Exception e nil)))

(defn ?->boolean [x]
  (case x
    (true "true" :true "TRUE" :TRUE) true
    :else false))

(def config-rules
  {:port                   {:path [:server :port]
                            :parse ?->int
                            ;; XXX Just an idea sketch; can construct generators
                            :generator {:init   2358
                                        :gen-fn (fn [last-value] (inc last-value))
                                        :test-fn (fn [value] "Test if port is bound")}}
   :datomic-url            {:path [:datomic :url]}
   :datomic-seed-data    {:path [:datomic :seed-data]}
   :datomic-reset-schema {:path [:datomic :reset-db] :parse ?->boolean}})

(def defaults
  {:server {:port 2358}
   :datomic {:url "datomic:mem://base"}})


(defn get-environ-config [rules env]
  (reduce
    (fn [config [name {:keys [parse path] :or {parse identity}}]]
      (if-let [env-var-val (get env name)]
        (assoc-in config (or path [name]) (parse env-var-val))
        config))
    {}
    rules))

(defn deep-merge
  "Like merge, but merges maps recursively."
  [& maps]
  (if (every? #(or (map? %) (nil? %)) maps)
    (apply merge-with deep-merge maps)
    (last maps)))

(defn get-config
  ([overrides]
   (deep-merge defaults
               ;; Should move defaults into a config file eventually...
               ;(read-string (slurp "config.edn"))
               (get-environ-config config-rules environ/env)
               overrides))
  ([] (get-config {})))

(defrecord Config [overrides]
  component/Lifecycle
  (start [component]
    (log/info "Starting config component")
    (into component (get-config overrides)))
  (stop [component]
    component))

(defn create-config
  "Create a new instance of a Config component, with config-overrides."
  ([config-overrides]
   (Config. config-overrides))
  ([] (create-config {})))

:ok

