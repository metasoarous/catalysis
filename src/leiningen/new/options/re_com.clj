(ns leiningen.new.options.re-com
  (:require [leiningen.new.options.helpers :as helpers]))

(def option "+re-com")

(defn assets [data]
  [["resources/public/re-com/css/re-com.css" (helpers/render "resources/public/re-com/css/re-com.css" data)]
   ["resources/public/re-com/css/chosen-sprite@2x.png" (helpers/render "resources/public/re-com/css/chosen-sprite@2x.png")]
   ["resources/public/re-com/css/chosen-sprite.png" (helpers/render "resources/public/re-com/css/chosen-sprite.png")]
   ["resources/public/re-com/css/material-design-iconic-font.min.css" (helpers/render "resources/public/re-com/css/material-design-iconic-font.min.css" data)]

   ["resources/public/re-com/fonts/Material-Design-Iconic-Font.eot" (helpers/render "resources/public/re-com/fonts/Material-Design-Iconic-Font.eot")]
   ["resources/public/re-com/fonts/Material-Design-Iconic-Font.svg" (helpers/render "resources/public/re-com/fonts/Material-Design-Iconic-Font.svg")]
   ["resources/public/re-com/fonts/Material-Design-Iconic-Font.ttf" (helpers/render "resources/public/re-com/fonts/Material-Design-Iconic-Font.ttf")]
   ["resources/public/re-com/fonts/Material-Design-Iconic-Font.woff" (helpers/render "resources/public/re-com/fonts/Material-Design-Iconic-Font.woff")]
   ["resources/public/re-com/fonts/Material-Design-Iconic-Font.woff2" (helpers/render "resources/public/re-com/fonts/Material-Design-Iconic-Font.woff2")]])
