(ns kabel.binary
  "This namespace provides a minimal binary encoding for all connection types."
  (:require [cljs.reader :refer [read-string]]
            [hasch.platform :refer [utf8]]
            [kabel.util :refer [on-node?]]))

(def encoding-table {:binary          0
                     :string          1
                     :pr-str          2
                     :transit-json    11
                     :transit-msgpack 12})

(def decoding-table (into {} (map (fn [[k v]] [v k])) encoding-table))


(defn to-binary [{:keys [kabel/serialization kabel/payload] :as m}]
  (let [payload (if-not serialization
                  (utf8 (pr-str m)) ;; fallback if no serialization middleware is present
                  payload)
        serialization (if-not serialization :pr-str serialization)
        header (array 0 0 0 (encoding-table serialization))
        ;; manual concat
        wrapped (js/Uint8Array. (+ 4 (.-length payload))) 
        _ (.set wrapped (js/Uint8Array. header) 0)
        _ (.set wrapped (js/Uint8Array. payload) 4)]
    (if-not (on-node?)
      (js/Blob. #js [wrapped])
      (js/Buffer. wrapped))))


(defn from-binary [binary cb]
  (let [l (if (on-node?)
            (.-length binary) ;; Buffer
            (.-size binary)) ;; Blob
        fr (js/FileReader.)]
    (set! (.-onload fr)
          #(let [b (.. % -target -result)
                 encoding (-> (.slice b 0 4)
                              (js/Uint8Array.)
                              (aget 3)
                              decoding-table)
                 payload (js/Uint8Array. (.slice b 4 l))]
             (cb
              (try
                (if (= encoding :pr-str)
                  (-> (js/TextDecoder. "utf-8")
                      (.decode payload)
                      read-string)
                  {:kabel/serialization encoding
                   :kabel/payload payload})
                (catch js/Error e
                  (ex-info "Cannot parse binary."
                           {:error e}))))))
    (.readAsArrayBuffer fr binary)))




