(ns incognito.transit
  (:require [cognitect.transit :as transit]
            [cljs.reader :refer [read-string]]
            [incognito.base :refer [incognito-reader incognito-writer]]))

(deftype IncognitoTaggedLiteralHandler [write-handlers map-handler]
  Object
  (tag [_ v]
    ;; TODO this explicit type dispatch is bad, use an appropriate interface
    ;; instead
    ;; if it is not a standard map, we treat it as a record
    (if-not (or (isa? (type v) cljs.core/PersistentArrayMap)
                (isa? (type v) cljs.core/PersistentHashMap)
                (isa? (type v) cljs.core/PersistentTreeMap))
      "incognito"
      (.tag map-handler v)))
  (rep [_ v]
    (if-not (or (isa? (type v) cljs.core/PersistentArrayMap)
                (isa? (type v) cljs.core/PersistentHashMap)
                (isa? (type v) cljs.core/PersistentTreeMap))
      (if (isa? (type v) incognito.base/IncognitoTaggedLiteral)
        (into {} v) ;; carry on as map
        (incognito-writer @write-handlers v))
      (.rep map-handler v)))
  (stringRep [this v] nil))

(defn incognito-write-handler [write-handlers]
  (IncognitoTaggedLiteralHandler. write-handlers (transit/MapHandler.)))

(defn incognito-read-handler [read-handlers]
  (partial incognito-reader @read-handlers))
