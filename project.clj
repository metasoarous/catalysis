(defproject datsys "0.0.1-alpha3"
  :description "(+ clj cljs datomic datascript frp) web development framework" ;;should this be "an" or "un"?
  :url "https://github.com/metasoarous/datsys"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :min-lein-version "2.0.0"
  :dependencies [[org.clojure/clojure "1.9.0-alpha15"]
                 [org.clojure/tools.reader "1.0.0-beta3"]
                 [org.clojure/clojurescript "1.9.518"]
                 [org.clojure/core.async "0.3.442"]
                 [org.clojure/core.match "0.3.0-alpha4"]
                 ;[org.clojure/core.typed "0.3.28"] ;; WARNING: 0.3.28 breaks piggieback(!); 0.3.23 known-safe
                 ;; Datsys things
                 [datsync "0.0.1-alpha3"]
                 [datview "0.0.1-alpha3"]
                 [datspec "0.0.1-alpha3"]
                 [datreactor "0.0.1-alpha3"]
                 ;; Other stuff (should try to clean things up once in main project)
                 [com.stuartsierra/component "0.3.2"]
                 [environ "1.1.0"]
                 [slingshot "0.12.2"]
                 [ring/ring-core "1.5.0" :exclusions [commons-codec]]
                 [ring/ring-defaults "0.2.1"]
                 [compojure "1.5.1"]
                 [http-kit "2.2.0"]
                 [bidi "2.0.16"]
                 [com.cognitect/transit-clj "0.8.297"]
                 [com.cognitect/transit-cljs "0.8.239"]
                 [com.lucasbradstreet/cljs-uuid-utils "1.0.2"]
                 [testdouble/clojurescript.csv "0.2.0"]
                 [datascript "0.15.5"]
                 [posh "0.5.5"]
                 [data-frisk-reagent "0.3.5"]
                 [reagent "0.6.0"]
                 [org.webjars/bootstrap "3.3.5"]
                 [re-com "0.8.3"]
                 [prismatic/schema "1.1.3"]
                 [io.rkn/conformity "0.4.0"]
                 [ch.qos.logback/logback-classic "1.1.8"]
                 [com.taoensso/timbre "4.8.0"]
                 [com.taoensso/encore "2.88.2"]
                 [com.taoensso/sente "1.11.0" :exclusions [org.clojure/tools.reader]]
                 ;;For the free version of Datomic
                 [com.datomic/datomic-free "0.9.5544" :exclusions [joda-time org.slf4j/slf4j-nop com.google.guava/guava commons-codec]]

                 ;; libraries to suppress warnings until upstream libraries get sorted with clojure 1.9 alpha
                 [org.clojure/tools.analyzer "0.6.9"]
                 [medley "0.8.4"]]

  :plugins [[lein-cljsbuild "1.1.5" :exclusions [org.clojure/clojure]]]
  ;; For Datomic Pro uncomment the following and set the DATOMIC_USERNAME and DATAOMIC_PASSWORD environment
  ;; variables of the process in which you run this program to those matching your Datomic Pro account. You'll
  ;; have to start your own transactor separately from this process as well. More instructions on how to do
  ;; that in the Wiki (I think... bug us if you can't find them).
  ;; TODO Add `+datomic-pro` toggle for this
  ;:repositories {"my.datomic.com" {:url
  ;                               "https://my.datomic.com/repo"
  ;                                 :username
  ;                                [:env/datomic_username]
  ;                                 :password
  ;                                 [:env/datomic_password]}}
  :source-paths ["src/cljc"
                 "src/clj"
                 ;; TODO Uncomment if you would like checkouts; This should be +edge for everything on
                 ;"checkouts/datview/src/clj"
                 ;"checkouts/datview/src/cljc"
                 ;"checkouts/datsync/src/clj"
                 ;"checkouts/datsync/src/cljc"
                 ;"checkouts/datreactor/src/clj"
                 ;"checkouts/datreactor/src/cljc"
                 ;"checkouts/datspec/src/clj"
                 ;"checkouts/datspec/src/cljc"
                 #_:end]

  :resource-paths ["resources"]
  :target-path "target/%s"

  ;; Should be doing https://github.com/cemerick/clojurescript.test/issues/97 instead, but I can't figure it out so we turn off clean protection instead
  :clean-targets ^{:protect false} [:target-path :compile-path "resources/public/js/compiled"]

  :main ^:skip-aot dat.sys.run
  :cljsbuild {:builds
              {:client
               {:source-paths ["src/cljc" "src/cljs"]
                :compiler {:main dat.sys.app
                           :asset-path "js/compiled/out"
                           :output-to "resources/public/js/compiled/app.js"
                           :output-dir "resources/public/js/compiled/out"
                           :optimizations :none
                           :source-map true
                           :source-map-timestamp true}}}} ;; helps prevent browser caching from interferring with interactive dev


  ;; The figwheel config is adapted from https://github.com/plexus/chestnut

  ;; nREPL by default starts in the :main namespace, we want to start in `user`
  ;; because that's where our development helper functions like (run) and
  ;; (browser-repl) live.
  :repl-options {:init-ns user
                 ;should have this auto-gen
                 :port 11233}

  ;; When running figwheel from nREPL, figwheel will read this configuration
  ;; stanza, but it will read it without passing through leiningen's profile
  ;; merging. So don't put a :figwheel section under the :dev profile, it will
  ;; not be picked up, instead configure figwheel here on the top level.
  :figwheel {:server-port 11234                ;; default. overwritten by datsys config anyways
             ;; :server-ip "127.0.0.1"           ;; default
             :css-dirs ["resources/public/css"]  ;; watch and update CSS
             :server-logfile "logs/figwheel.log"}


  :profiles {:dev-config {}
             :dev [:dev-config
                   {:dependencies [[alembic "0.3.2"]
                                   [figwheel "0.5.8"]
                                   [figwheel-sidecar "0.5.8"] ;;:exclusions [org.clojure/clojure org.clojure/clojurescript fipp.visit/boolean?]
                                   [com.cemerick/pomegranate "0.3.1"]
                                   [com.cemerick/piggieback "0.2.1"]
                                   [org.clojure/tools.nrepl "0.2.12"]
                                   [devcards "0.2.2" :exclusions [cljsjs/react-dom]]]
                    :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}
                    :cljsbuild {:builds {:client {:source-paths ["dev/cljs" "dev/cljc"]
                                                  :figwheel {:on-jsload "dat.sys.start/on-js-reload"}}}}
                    :plugins [[lein-figwheel "0.5.8"] ;;:exclusions [org.clojure/clojure org.clojure/clojurescript org.codehaus.plexus/plexus-utils]
                              ;[com.palletops/lein-shorthand "0.4.0"]
                              [lein-environ "1.0.1"]]
                    ;; The lein-shorthand plugin gives us access to the following shortcuts as `./*` (e.g. `./pprint`)
                    :shorthand {. [clojure.pprint/pprint
                                   alembic.still/distill
                                   alembic.still/lein
                                   taoensso.timbre/trace
                                   taoensso.timbre/spy]}
                    :source-paths ["dev/clj"
                                   "dev/cljc"
                                   ;; TODO Uncomment if you would like checkouts; This should be +edge opton or some such
                                   ;"checkouts/datview/src/cljs"
                                   ;"checkouts/datview/src/cljc"
                                   ;"checkouts/datsync/src/cljs"
                                   ;"checkouts/datsync/src/cljc"
                                   ;"checkouts/datreactor/src/cljs"
                                   ;"checkouts/datreactor/src/cljc"
                                   ;"checkouts/datspec/src/cljs"
                                   ;"checkouts/datspec/src/cljc"
                                   #_:end]
                    ;; libs/datsync/resources is important here; It's lib code need access to it's resources
                    ;; dir in dev
                    :resource-paths ^:replace ["resources" "libs/datsync/resources"]}]
             :prod {:cljsbuild
                    {:builds
                     {:client {:figwheel false
                               :compiler {:output-dir "resources/public/js/compiled"
                                          :output-to "resources/public/js/compiled/app.js"
                                          :source-map "resources/public/js/compiled/app.js.map"
                                          ;:pseudo-names true
                                          :optimizations :advanced
                                          :pretty-print false}}}}}

             :uberjar [:prod
                       {:omit-source true
                        :aot :all}]}

  :aliases {"package"
            ["with-profile" "prod" "do"
             "clean" ["cljsbuild" "once"]]
            "run-prod"
            ["with-profile" "prod" "do"
             "package" "run"]})

