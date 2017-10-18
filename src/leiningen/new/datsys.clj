(ns leiningen.new.datsys
  (:require
    [leiningen.new.templates :refer [name-to-path sanitize-ns ->files]]
    [leiningen.new.options.base :as base]
    [leiningen.new.options.views :as views]
    [leiningen.new.options.helpers :as helpers]
    [leiningen.new.options.re-com :as re-com]
    [leiningen.new.options.checkouts :as checkouts]
    [leiningen.core.main :as main]))


;; Just realized; datspec should be about having a static project.clj like specification of what your datsys options
;; are in the sense of this namespace, what has been created so far, etc, and shows you changes to the template on a per
;; file basis, taking into account your changes.
;; So your datspec.clj file would compile or recompile things from the template.

;; Random port blocks
;; Set up checkouts
;; Datomic pro
;; P2P?
;; Component vs mount


(defn app-files [data options]
  (concat
   (base/files data)
   (views/view-cljs options data)
   (re-com/assets data)))


(defn generate-ports []
  (let [server-port (+ 3000 (rand-int 10000))]
    {:server-port server-port
     :figwheel-port (inc server-port)
     :nrepl-port (+ server-port 2)
     :figwheel-nrepl-port (+ server-port 3)}))


(defn template-data [name options]
  (merge
    (generate-ports)
    {:name      name
     :ns-name   (sanitize-ns name)
     :sanitized (name-to-path name)
     :checkouts? (helpers/option? "+checkouts" options)}))
   

;; Think about generating base port

(defn datsys [name & options]
  (let [data (template-data name options)]
    ;(check-options options)
    (main/info "Generating datsys project:" name)
    (apply ->files data (app-files data options))
    (main/info "Cloning checkouts")
    (checkouts/clone-git-deps (:ns-name data))))
    


