(ns leiningen.new.options.views
  (:require [leiningen.new.options.helpers :as helpers]
            [leiningen.new.options.re-com :as re-com]
            [leiningen.new.options.routes :as routes]))

(defn file [name data]
  [ ["src/cljs/{{sanitized}}/views.cljs"
     (helpers/render (str "src/cljs/" name ".cljs")
                     data)]])


(defn view-cljs [options data]
  (file "views" data))
