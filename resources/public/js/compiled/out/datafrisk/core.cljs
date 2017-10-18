(ns datafrisk.core
  (:require [reagent.core :as r]))

(declare DataFrisk)

(defn ExpandButton [{:keys [expanded? path emit-fn]}]
  [:button {:style {:border 0
                    :backgroundColor "transparent" :width "20px" :height "20px"}
            :onClick #(emit-fn (if expanded? :contract :expand) path)}
   [:svg {:viewBox "0 0 100 100"
          :width "100%" :height "100%"
          :style {:transition "all 0.2s ease"
                  :transform (when expanded? "rotate(90deg)")}}
    [:polygon {:points "0,0 0,100 100,50" :stroke "black"}]]])

(def styles
  {:shell {:backgroundColor "#FAFAFA"
           :fontFamily "Consolas,Monaco,Courier New,monospace"
           :fontSize "12px"
           :z-index 9999}
   :strings {:color "#4Ebb4E"}
   :keywords {:color "purple"}
   :numbers {:color "blue"}
   :nil {:color "red"}
   :shell-visible-button {:backgroundColor "#4EE24E"}})

(defn ExpandAllButton [emit-fn data]
  [:button {:onClick #(emit-fn :expand-all data)
            :style {:padding "3px"
                    :borderTopLeftRadius "2px"
                    :borderBottomLeftRadius "2px"
                    :cursor "pointer"
                    :border "1px solid darkgray"
                    :backgroundColor "white"}}
   "Expand all"])

(defn CollapseAllButton [emit-fn data]
  [:button {:onClick #(emit-fn :collapse-all)
            :style {:padding "3px"
                    :cursor "pointer"
                    :borderTopRightRadius "2px"
                    :borderBottomRightRadius "2px"
                    :borderTop "1px solid darkgray"
                    :borderBottom "1px solid darkgray"
                    :borderRight "1px solid darkgray"
                    :borderLeft "0"
                    :backgroundColor "white"}}
   "Collapse all"])

(defn NilText []
  [:span {:style (:nil styles)} (pr-str nil)])

(defn StringText [data]
  [:span {:style (:strings styles)} (pr-str data)])

(defn KeywordText [data]
  [:span {:style (:keywords styles)} (str data)])

(defn NumberText [data]
  [:span {:style (:numbers styles)} data])

(defn Node [{:keys [data path emit-fn swappable]}]
  [:div (cond
          (nil? data)
          [NilText]

          (string? data)
          (if swappable
            [:input {:type "text"
                     :default-value (str data)
                     :on-change
                     (fn string-changed [e]
                       (emit-fn :changed path (.. e -target -value)))}]
            [StringText data])

          (keyword? data)
          (if swappable
            [:input {:type "text"
                     :default-value (name data)
                     :on-change
                     (fn keyword-changed [e]
                       (emit-fn :changed path (keyword (.. e -target -value))))}]
            [KeywordText data])

          (object? data)
          (str data " " (.stringify js/JSON data))

          (number? data)
          (if swappable
            [:input {:type "number"
                     :default-value data
                     :on-change
                     (fn number-changed [e]
                       (emit-fn :changed path (js/Number (.. e -target -value))))}]
            [NumberText data])
          :else
          (str data))])

(defn KeyValNode [{[k v] :data :keys [path expanded-paths emit-fn swappable]}]
  [:div {:style {:display "flex"}}
   [:div {:style {:flex "0 0 auto" :padding "2px"}}
    [Node {:data k}]]
   [:div {:style {:flex "1" :padding "2px"}}
    [DataFrisk {:data v
                :swappable swappable
                :path (conj path k)
                :expanded-paths expanded-paths
                :emit-fn emit-fn}]]])

(defn ListVecNode [{:keys [data path expanded-paths emit-fn swappable]}]
  (let [expanded? (get expanded-paths path)]
    [:div {:style {:display "flex"}}
     (when-not (empty? data)
       [:div {:style {:flex "0 1 auto"}} [ExpandButton {:expanded? expanded?
                                                        :path path
                                                        :emit-fn emit-fn}]])
     [:div {:style {:flex 1}}
      [:span (if (vector? data) "[" "(")]
      (if expanded?
        (map-indexed (fn [i x] ^{:key i} [DataFrisk {:data x
                                                     :swappable swappable
                                                     :path (conj path i)
                                                     :expanded-paths expanded-paths
                                                     :emit-fn emit-fn}]) data)
        (str (count data) " items"))
      [:span (if (vector? data) "]" ")")]]]))

(defn SetNode [{:keys [data path expanded-paths emit-fn swappable]}]
  (let [expanded? (get expanded-paths path)]
    [:div {:style {:display "flex"}}
     (when-not (empty? data)
       [:div {:style {:flex "0 1 auto"}}
        [ExpandButton {:expanded? expanded?
                       :path path
                       :emit-fn emit-fn}]])
     [:div {:style {:flex 1}} [:span "#{"]
      (if expanded?
        (map-indexed (fn [i x] ^{:key i} [DataFrisk {:data x
                                                     :swappable swappable
                                                     :path (conj path x)
                                                     :expanded-paths expanded-paths
                                                     :emit-fn emit-fn}]) data)
        (str (count data) " items"))
      [:span "}"]]]))

(defn KeySet [keyset]
  [:span
   (->> (map-indexed
          (fn [i data] ^{:key i} [:span
                                  (cond (nil? data) [NilText]
                                        (string? data) [StringText data]
                                        (keyword? data) [KeywordText data]
                                        (number? data) [NumberText data]
                                        :else (str data))]) keyset)
        (interpose " "))])

(defn MapNode [{:keys [data path expanded-paths emit-fn] :as all}]
  (let [expanded? (get expanded-paths path)]
    [:div {:style {:display "flex"}}
     [:div {:style {:flex "0 1 auto"}}
      [ExpandButton {:expanded? expanded?
                     :path path
                     :emit-fn emit-fn}]]
     [:div {:style {:flex 1}}
      [:span "{"]
      (if expanded?
        (map-indexed (fn [i x] ^{:key i} [KeyValNode (assoc all :data x)]) data)
        [KeySet (keys data)])
      [:span "}"]]]))

(defn DataFrisk [{:keys [data] :as all}]
  (cond (map? data) [MapNode all]
        (set? data) [SetNode all]
        (or (seq? data) (vector? data)) [ListVecNode all]
        (satisfies? IDeref data) [DataFrisk (assoc all :data @data)]
        :else [Node all]))

(defn conj-to-set [coll x]
  (conj (or coll #{}) x))

(defn expand-all-paths [root-value]
  (loop [remaining [{:path [] :node root-value}]
         expanded-paths #{}]
    (if (seq remaining)
      (let [[current & rest] remaining
            current-node (if (satisfies? IDeref (:node current)) @(:node current) (:node current))]
        (cond (map? current-node)
              (recur
                (concat rest (map (fn [[k v]] {:path (conj (:path current) k)
                                               :node v})
                                  current-node))
                (conj expanded-paths (:path current)))
              (or (seq? current-node) (vector? current-node))
              (recur
                (concat rest (map-indexed (fn [i node] {:path (conj (:path current) i)
                                                        :node node})
                               current-node))
                (conj expanded-paths (:path current)))
              :else
              (recur
                rest
                (if (coll? current-node)
                  (conj expanded-paths (:path current))
                  expanded-paths))))
      expanded-paths)))

(defn emit-fn-factory [state-atom id swappable]
  (fn [event & args]
    (case event
      :expand (swap! state-atom update-in [:data-frisk id :expanded-paths] conj-to-set (first args))
      :expand-all (swap! state-atom assoc-in [:data-frisk id :expanded-paths] (expand-all-paths (first args)))
      :contract (swap! state-atom update-in [:data-frisk id :expanded-paths] disj (first args))
      :collapse-all (swap! state-atom assoc-in [:data-frisk id :expanded-paths] #{})
      :changed (let [[path value] args]
                 (if (seq path)
                   (swap! swappable assoc-in path value)
                   (reset! swappable value))))))

(defn Root [data id state-atom]
  (let [data-frisk (:data-frisk @state-atom)
        swappable (when (satisfies? IAtom data)
                    data)
        emit-fn (emit-fn-factory state-atom id swappable)]
    [:div
     [:div {:style {:padding "4px 2px"}}
      [ExpandAllButton emit-fn data]
      [CollapseAllButton emit-fn]]
     [DataFrisk {:data data
                 :swappable swappable
                 :path []
                 :expanded-paths (get-in data-frisk [id :expanded-paths])
                 :emit-fn emit-fn}]]))

(defn DataFriskShellVisibleButton [visible? toggle-visible-fn]
  [:button {:onClick toggle-visible-fn
            :style (merge {:border 0
                           :cursor "pointer"
                           :font "inherit"
                           :padding "12px"
                           :position "fixed"
                           :right 0
                           :width "80px"
                           :text-align "center"}
                     (:shell-visible-button styles)
                     (when-not visible? {:bottom 0}))}
   (if visible? "Hide" "Data frisk")])

(defn DataFriskShell [& data]
  (let [expand-by-default (reduce #(assoc-in %1 [:data-frisk %2 :expanded-paths] #{[]}) {} (range (count data)))
        state-atom (r/atom expand-by-default)]
    (fn [& data]
      (let [data-frisk (:data-frisk @state-atom)
            visible? (:visible? data-frisk)]
        [:div {:style (merge {:position "fixed"
                              :right 0
                              :bottom 0
                              :width "100%"
                              :height "50%"
                              :max-height (if visible? "50%" 0)
                              :transition "all 0.3s ease-out"
                              :padding 0}
                        (:shell styles))}
         [DataFriskShellVisibleButton visible? (fn [_] (swap! state-atom assoc-in [:data-frisk :visible?] (not visible?)))]
         [:div {:style {:padding "10px"
                        :height "100%"
                        :box-sizing "border-box"
                        :overflow-y "scroll"}}
          (map-indexed (fn [id x]
                         ^{:key id} [Root x id state-atom]) data)]]))))

(defn FriskInlineVisibilityButton
  [visible? update-fn]
  [:button {:style {:border 0
                    :backgroundColor "transparent" :width "20px" :height "20px"}
            :onClick update-fn}
   [:svg {:viewBox "0 0 100 100"
          :width "100%" :height "100%"
          :style {:transition "all 0.2s ease"
                  :transform (when visible? "rotate(90deg)")}}
    [:polygon {:points "0,0 0,100 100,50" :stroke "black"}]]])

(defn FriskInline [& data]
  (let [expand-by-default (reduce #(assoc-in %1 [:data-frisk %2 :expanded-paths] #{[]}) {} (range (count data)))
        state-atom (r/atom expand-by-default)]
    (fn [& data]
      (let [data-frisk (:data-frisk @state-atom)
            visible? (:visible? data-frisk)]
        [:div {:style (merge {:flex-flow "row nowrap"
                              :transition "all 0.3s ease-out"
                              :z-index "5"}
                             (when-not visible?
                               {:overflow-x "hide"
                                :overflow-y "hide"
                                :max-height "30px"
                                :max-width "100px"})
                             (:shell styles))}
         [FriskInlineVisibilityButton visible? (fn [_] (swap! state-atom assoc-in [:data-frisk :visible?] (not visible?)))]
         [:span "Data frisk"]
         (when visible?
           [:div {:style {:padding "10px"
                          ;; TODO Make the max height and width adjustable
                          ;:max-height "400px"
                          ;:max-width "800px"
                          :resize "both"
                          :box-sizing "border-box"
                          :overflow-x "auto"
                          :overflow-y "auto"}}
            (map-indexed (fn [id x]
                           ^{:key id} [Root x id state-atom]) data)])]))))


