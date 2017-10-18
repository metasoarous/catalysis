(ns kabel.middleware.transit
  (:require
   [kabel.middleware.handler :refer [handler]]
   #?(:clj [kabel.platform-log :refer [debug]])
   #?(:cljs [kabel.util :refer [on-node?]])
   #?(:clj [superv.async :refer [go-try]])
   [cognitect.transit :as t]
   [incognito.transit :refer [incognito-read-handler incognito-write-handler]])
  #?(:clj (:import [java.io ByteArrayInputStream ByteArrayOutputStream])
     :cljs (:require-macros [superv.async :refer [go-try]]
                            [kabel.platform-log :refer [debug]])))


(defn transit
  "Serializes all incoming and outgoing edn datastructures in transit form."
  ([[S peer [in out]]]
   (transit :json (atom {}) (atom {}) [S peer [in out]]))
  ([backend read-handlers write-handlers [S peer [in out]]]
   (handler #(go-try S
                     (let [{:keys [kabel/serialization kabel/payload]} %]
                       (if (or (= serialization :transit-json)
                               (= serialization :transit-msgpack))
                         (let [ir (incognito-read-handler read-handlers)
                               v #?(:clj (with-open [bais (ByteArrayInputStream. payload)]
                                           (let [reader
                                                 (t/reader bais backend
                                                           {:handlers {"incognito" ir}})]
                                             (t/read reader)))
                                    :cljs (let [reader
                                                (t/reader backend
                                                          {:handlers {"u" (fn [v] (cljs.core/uuid v))
                                                                      "incognito" ir}})]
                                            (t/read reader (-> (js/TextDecoder. "utf-8")
                                                               (.decode payload)))))
                               merged (if (map? v)
                                        (merge v (dissoc % :kabel/serialization
                                                         :kabel/payload))
                                        v)]
                           #_(debug {:event :transit-deserialized
                                   :value merged})
                           merged)
                         %)))
            #(go-try S
                     (if (:kabel/serialization %) ;; already serialized
                       %
                       (do
                         #_(debug {:event :transit-serialize
                                 :value %})
                         {:kabel/serialization
                          (keyword (str "transit-" (name backend)))
                          :kabel/payload
                          #?(:clj (with-open [baos (ByteArrayOutputStream.)]
                                    (let [iw (incognito-write-handler write-handlers)
                                          writer (t/writer baos backend {:handlers {java.util.Map iw}})]
                                      (t/write writer %))
                                    (.toByteArray baos))
                             :cljs (let [iw (incognito-write-handler write-handlers)
                                         writer (t/writer backend {:handlers {"default" iw}})
                                         encoder (js/TextEncoder. "utf-8")]
                                     (->> (t/write writer %)
                                          (.encode encoder))))})))
            [S peer [in out]])))



(comment
  (require '[superv.async :refer [S <??]])

  (let [in (chan)
        out (chan)
        [S _ [nin nout]] (transit [S nil [in out]])]
    (put! nout "hello")
    (prn (vec (<?? S out)))
    )


  (let [reader (transit/reader :json {:handlers ;; remove if uuid problem is gone
                                                              {"u" (fn [v] (cljs.core/uuid v))
                                                               "incognito" (incognito-read-handler read-handlers)}})]
                            (if-not (on-node?)
                              ;; Browser
                              (let [fr (js/FileReader.)]
                                (set! (.-onload fr) #(let [res (js/String. (.. % -target -result))]
                                                       #_(debug "Received message: " res)
                                                       (put! in (assoc (transit/read reader res) :host host))))

                                (.readAsText fr (.-message evt)))
                              ;; nodejs
                              (let [s  (js/String.fromCharCode.apply
                                        nil
                                        (js/Uint8Array. (.. evt -message)))]
                                (put! in (assoc (transit/read reader s) :host host)))))

  (let [i-write-handler (incognito-write-handler write-handlers)
        writer (transit/writer
                :json
                {:handlers {"default" i-write-handler}})
        to-send (transit/write writer (assoc m :sender peer-id))]
    (if-not (on-node?)
      ;(.send channel (js/Blob. #js [to-send])) ;; Browser
      (.send channel (js/Buffer. to-send)) ;; NodeJS
      ))

  )




