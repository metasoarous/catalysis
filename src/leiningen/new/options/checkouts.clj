(ns leiningen.new.options.checkouts
  (:require [leiningen.new.options.helpers :as helpers]))

(def option "+checkouts")

;; Have to build a thing to create all of the checkouts
;; Change paths mostly for now
;; Should have a 

(defn assets [data]
  (if (:checkouts? data)
    []
    []))
