(ns leiningen.new.options.base
  (:require [leiningen.new.options.helpers :as helpers]))


(defn src-file [filename data]
  (let [ext (last (clojure.string/split filename #"\."))]
    [(str "src/" ext "/{{sanitized}}/" filename)
     (helpers/render (str "src/" ext "/" filename) data)]))


(defn files [data]
  [["README.md" (helpers/render "README.md" data)]
   ["project.clj" (helpers/render "project.clj" data)]
   [".gitignore" (helpers/render ".gitignore" data)]
   ["dev/clj/user.clj" (helpers/render "dev/clj/user.clj" data)]
   ["dev/clj/{{sanitized}}/figwheel_server.clj" (helpers/render "dev/clj/figwheel_server.clj" data)]
   ["dev/cljs/{{sanitized}}/start.cljs" (helpers/render "dev/cljs/start.cljs" data)]

   ["resources/index.html" (helpers/render "resources/index.html" data)]
   ["resources/schema.edn" (helpers/render "resources/schema.edn" data)]
   ["resources/test-data.edn" (helpers/render "resources/test-data.edn" data)]

   ["resources/public/css/bootstrap.css" (helpers/render "resources/public/css/bootstrap.css" data)]
   ["resources/public/css/style.css" (helpers/render "resources/public/css/style.css" data)]


   (src-file "app.clj" data)
   (src-file "config.clj" data)
   (src-file "import.clj" data)
   (src-file "ring_handler.clj" data)
   (src-file "run.clj" data)
   (src-file "server.clj" data)
   (src-file "system.clj" data)
   (src-file "ws.clj" data)

   (src-file "db.cljc" data)
   (src-file "events.cljc" data)
   (src-file "routes.cljc" data)
   (src-file "utils.cljc" data)

   (src-file "app.cljs" data)
   (src-file "views.cljs" data)])


