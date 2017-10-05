(ns leiningen.new.options.checkouts
  (:require [leiningen.new.options.helpers :as helpers]
            [clojure.java.shell :as shell]))

(def option "+checkouts")

;; Have to build a thing to create all of the checkouts
;; Change paths mostly for now
;; Should have a 


(def git-deps
  [["git@github.com:metasoarous/datsync" "symmetric"]
   ["git@github.com:metasoarous/datspec" "symmetric"]
   ["git@github.com:metasoarous/datview" "symmetric"]
   ["git@github.com:metasoarous/datreactor" "symmetric"]
   ["git@github.com:bamarco/datascript" "tx-middleware"]
   ["git@github.com:bamarco/conformity" "datsync"]])

(defn clone-git-dep
  [path [url branch]]
  (let [;; default short name
        short-name (last (clojure.string/split url #"/"))
        ;; base args
        args ["git" "clone" url (str path "/checkouts/" short-name)]
        ;; If there's a special branch use that
        args (if branch (into args ["-b" branch]) args)]
    (println args)
    (apply shell/sh args)))

(defn clone-git-deps
  [path]
  (doseq [git-dep git-deps]
    (clone-git-dep path git-dep)))

