(defproject datsys "0.0.1-alpha1-SNAPSHOT"
  :description "(+ clj cljs datomic datascript frp) web development framework" ;;should this be "an" or "un"?
  :url "https://github.com/metasoarous/datsys"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :min-lein-version "2.0.0"
  :dependencies [[org.clojure/clojure "1.9.0-alpha7"]
                 [org.clojure/clojurescript "1.9.76"]
                 [org.clojure/core.async "0.2.382"]
;;                  [org.clojure/tools.logging "0.3.1"] ;; Should remove this for timbre
                 [org.clojure/core.match "0.3.0-alpha4"]
                 [org.clojure/core.typed "0.3.23"]
                 ;; Datsys things
                 [datsync "0.0.1-alpha1-SNAPSHOT"]
                 [datview "0.0.1-alpha2-SNAPSHOT"]
                 [datspec "0.0.1-alpha1-SNAPSHOT"]
                 [datreactor "0.0.1-alpha1-SNAPSHOT"]
                 ;; Other stuff (should try to clean things up once in main project)
                 [com.stuartsierra/component "0.3.1"]
                 [environ "1.0.3"]
                 [slingshot "0.12.2"]
                 [ring/ring-core "1.5.0"]
                 [ring/ring-defaults "0.2.1"]
                 [compojure "1.5.0"]
                 [http-kit "2.1.19"]
                 [bidi "2.0.9"]
                 [com.cognitect/transit-clj "0.8.288" :exclusions [commons-codec]]
                 [com.cognitect/transit-cljs "0.8.239"]
                 [com.lucasbradstreet/cljs-uuid-utils "1.0.2"]
                 [testdouble/clojurescript.csv "0.2.0"]
                 [datascript "0.15.0"]
                 [posh "0.5.3.3"]
                 [data-frisk-reagent "0.2.5"]
                 [reagent "0.6.0-rc"]
                 [org.webjars/bootstrap "3.3.5"]
                 [re-com "0.8.3"]
                 [prismatic/schema "1.1.3"]
                 [io.rkn/conformity "0.4.0"]
                 [ch.qos.logback/logback-classic "1.1.7"]
                 [com.taoensso/timbre "4.7.0"]
                 [com.taoensso/encore "2.68.1"]
                 [com.taoensso/sente "1.8.1" :exclusions [org.clojure/tools.reader]]
                 ;;For the free version of Datomic
                 [com.datomic/datomic-free "0.9.5372" :exclusions [joda-time org.slf4j/slf4j-nop]]

                 ;; libraries to suppress warnings until upstream libraries get sorted with clojure 1.9 alpha
                 [org.clojure/tools.analyzer "0.6.9"]
                 [medley "0.8.2"]]

  :plugins [[lein-cljsbuild "1.1.1"]]
  ;; For Datomic Pro uncomment the following and set the DATOMIC_USERNAME and DATAOMIC_PASSWORD environment
  ;; variables of the process in which you run this program to those matching your Datomic Pro account. You'll
  ;; have to start your own transactor separately from this process as well. More instructions on how to do
  ;; that in the Wiki (I think... bug us if you can't find them).
  ;:repositories {"my.datomic.com" {:url
  ;                               "https://my.datomic.com/repo"
  ;                                 :username
  ;                                [:env/datomic_username]
  ;                                 :password
  ;                                 [:env/datomic_password]}}
  :source-paths ["src"]
  :resource-paths ["resources"]
  :target-path "target/%s"

  ;; Should be doing https://github.com/cemerick/clojurescript.test/issues/97 instead, but I can't figure it out so we turn off clean protection instead
  :clean-targets ^{:protect false} [:target-path :compile-path "resources/public/js/compiled"]

  :main ^:skip-aot dat.sys.run
  :cljsbuild {:builds
              {:client
               {:source-paths ["src/dat/sys/client"
                               "dev"]
                               ;; Uncomment if you'd like to checkout one of the sources below for dev
                               ;"checkouts/datview/src"
                               ;"checkouts/datsync/src"
                               ;"checkouts/datreactor/src"
                               ;"checkouts/datspec/src"]
                :figwheel {:on-jsload "dat.sys.dev.start/on-js-reload"}
                :compiler {:main dat.sys.client.start
                           :asset-path "js/compiled/out"
                           :output-to "resources/public/js/compiled/app.js"
                           :output-dir "resources/public/js/compiled/out"
                           :optimizations :none
                           :source-map-timestamp true}}}} ;; helps prevent browser caching from interferring with interactive dev

                       ;:devcards {:source-paths ["src"]
                                  ;:figwheel {:devcards true}  ;; <- note this
                                  ;:compiler {:main    "dat.sys.client.cards"
                                             ;:asset-path "js/compiled/devcards_out"
                                             ;:output-to  "resources/public/js/datsys_devcards.js"
                                             ;:output-dir "resources/public/js/devcards_out"
                                             ;:source-map-timestamp true}}}}

  ;; The figwheel config is adapted from https://github.com/plexus/chestnut

  ;; nREPL by default starts in the :main namespace, we want to start in `user`
  ;; because that's where our development helper functions like (run) and
  ;; (browser-repl) live.
  :repl-options {:init-ns user}

  ;; When running figwheel from nREPL, figwheel will read this configuration
  ;; stanza, but it will read it without passing through leiningen's profile
  ;; merging. So don't put a :figwheel section under the :dev profile, it will
  ;; not be picked up, instead configure figwheel here on the top level.

  :figwheel {;; :server-port 3449                ;; default. overwritten by datsys config anyways
             ;; :server-ip "127.0.0.1"           ;; default
             :css-dirs ["resources/public/css"]  ;; watch and update CSS

             ;; To be able to open files in your editor from the heads up display
             ;; you will need to put a script on your path.
             ;; that script will have to take a file path and a line number
             ;; ie. in  ~/bin/myfile-opener
             ;; #! /bin/sh
             ;; emacsclient -n +$2 $1
             ;;
             ;; :open-file-command "myfile-opener"

             :server-logfile "logs/figwheel.log"}


  :profiles {:dev-config {}
             :dev [:dev-config
                   {:dependencies [[alembic "0.3.2"]
                                   [figwheel "0.5.5-SNAPSHOT"]
                                   [figwheel-sidecar "0.5.5-SNAPSHOT"] ;;:exclusions [org.clojure/clojure org.clojure/clojurescript fipp.visit/boolean?]
                                   [com.cemerick/pomegranate "0.3.1"]
                                   [com.cemerick/piggieback "0.2.1"]
                                   [org.clojure/tools.nrepl "0.2.12"]
                                   [devcards "0.2.1"]]
                    :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}
                    :plugins [[lein-figwheel "0.5.5-SNAPSHOT"] ;;:exclusions [org.clojure/clojure org.clojure/clojurescript org.codehaus.plexus/plexus-utils]

                              [com.palletops/lein-shorthand "0.4.0"]
                              [lein-environ "1.0.1"]]
                    ;; The lein-shorthand plugin gives us access to the following shortcuts as `./*` (e.g. `./pprint`)
                    :shorthand {. [clojure.pprint/pprint
                                   alembic.still/distill
                                   alembic.still/lein
                                   taoensso.timbre/trace
                                   taoensso.timbre/spy]}
                    :source-paths ["dev"]
                    ;; libs/datsync/resources is important here; It's lib code need access to it's resources
                    ;; dir in dev
                    :resource-paths ^:replace ["resources" "libs/datsync/resources"]}]
             :prod {:cljsbuild
                    {:builds
                     {:client {:source-paths ^:replace ["src/dat/sys/client"]
                               :compiler {;;:main dat.sys.client.start
                                          ;;:source-map false
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

