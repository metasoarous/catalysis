(ns leiningen.new.options.helpers
  (:use [leiningen.new.templates :only [renderer sanitize]]
        [clojure.string :as str]
        [clojure.java.io :as io]))

(def template-name "datsys")

(def render-text (renderer template-name))

(defn resource-input
  "Get resource input stream. Useful for binary resources like images."
  [resource-path]
  (-> (str "leiningen/new/" (sanitize template-name) "/" resource-path)
      io/resource
      io/input-stream))

(defn render
  "Render the content of a resource"
  ([resource-path]
   (resource-input resource-path))
  ([resource-path data]
   (render-text resource-path data)))


(defmulti parse-opt-val
  (fn [opt val] opt))

(defmethod parse-opt-val :default
  [opt val] val)

(defn parse-opt
  "Parse opt by splitting on =; If there is a value on the other side, set that to val.
  If not, set val to true/false depending on whether first char of opt is +/-. The core
  of opt name itself is turned into a keyword with +/- removed. Finally, the val is transformed
  according to the `parse-opt-val` multimethod, which dispatches on opt, defaulting to returning
  val unchanged as a string, but offering the ability to override as needed in the code. The
  return value of this fn is then [opt-keyword val], for associng into a dict of mappings."
  [opt]
  (let [[opt val] (str/split opt #"\=")
        [sign & opt] opt
        val (or val (= sign \+))
        opt (keyword (str/join opt))]
    [opt (parse-opt-val opt val)]))

(defn parse-opts
  [opt-list]
  (into {} (map parse-opt opt-list)))


