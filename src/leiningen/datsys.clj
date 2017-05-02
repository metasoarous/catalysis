(ns leiningen.datsys
  (:require [leiningen.new.options.helpers :as helpers]))


(defmulti handle-checkout-command
  (fn [command args]
    command))

(defn checkouts
  [command & args]
  (handle-checkout-command command args))
  
(defmethod handle-checkout-command "init"
  [command args]
  (println "Recieving checkout init message:" args))
    
(defmethod handle-checkout-command :default
  [command args]
  (println "Recieving random command:" command "; args:" args))

  
