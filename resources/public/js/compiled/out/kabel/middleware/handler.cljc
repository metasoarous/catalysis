(ns kabel.middleware.handler
  "Generic callback handler middleware."
  (:require [clojure.set :as set]
            #?(:clj [superv.async :refer [<? >? go-loop-try]]
               :cljs [superv.async :refer [superv-init]])
            #?(:clj [clojure.core.async :as async
                      :refer [chan close!]]
               :cljs [cljs.core.async :as async :refer [chan close!]]))
  #?(:cljs (:require-macros [superv.async :refer [<? >? go-loop-try]])))


(defn handler
  "Applies given callback functions to messages on [in out] channels and passes
  through the return value of the callback. The callbacks have to return a
  go-channel."
  [cb-in cb-out [S peer [in out]]]
  (let [new-in (chan)
        new-out (chan)]
    (go-loop-try S [i (<? S in)]
      (if i
        (do
          (when-let [i (<? S (cb-in i))]
            (>? S new-in i))
          (recur (<? S in)))
        (close! new-in)))
    (go-loop-try S [o (<? S new-out)]
      (if o
        (do
          (when-let [o (<? S (cb-out o))]
            (>? S out o))
          (recur (<? S new-out)))
        (close! new-out)))
    [S peer [new-in new-out]]))
