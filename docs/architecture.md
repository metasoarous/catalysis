
## System (Component) architecture

Datsys is built out of the following libraries:

* [Datsync](https://github.com/metasoarous/datsync): Humble basis upon which we may approach the Web After Tomorrow; `Datomic <-> DataScript` sync utilities
* Datview: Reusable Reagent components for dynamically and flexibly translating data in a Datomic or DataScript database into UI representations and forms, input, and controls.
* Datreactor: Re-frame style event handling transaction coordination for DataScript connections.
* Datspec: Specifications, protocols and lib version coordination for Dat`*` systems.

It is all of these things and none of these things.
It is whichever of them you decide to hook up.

Each of these libraries has been designed around a set of system abstractions, declared as protocols.
These protocols define an abstraction over the shape of the various system components in the overall architecture.
The goal is that it be possible to swap implementations in and out depending on what pieces are needed for a particular application.
(So far this system modularization only extends as far as the client, since that's where most of the code is.
 However, the server will end up following this pattern as well.)

Let's take a look at `yourapp.client.app` (assuming you ran `lein new datsys yourapp`):

```clj
(defn new-system []
  (-> (component/system-map
        ;; Remote is our main server connection
        :remote     (sente/new-sente-remote)
        ;; For dispatching event streams to the reactor
        :dispatcher (dispatcher/new-strictly-ordered-dispatcher)
        ;; Remote is our main server connection
        :app        (component/using
                      (dat.view/new-datview)
                      [:remote :dispatcher])
        :reactor    (component/using
                      (reactor/new-simple-reactor)
                      [:remote :dispatcher :app])
        :datsync    (component/using
                      (dat.sync/new-datsync)
                      [:remote :dispatcher]))))
```

This describes a system that is syncing a DataScript database on a client with (most likely) a Datomic database on a server, with messages transmitted by a default Sente-based implementation of the Remote abstraction's protocol(s).
This DataScript database then feeds a view using the datview component `:app`.
The one core piece in orchestrating all of this is the reactor and the dispatcher.
Together these manage the flow of events and their updates on the app state, as well as orchestrate side effects.

Since these pieces are modular, you could just use the reactor and dispatcher, but nothing else.
Or you could use that plus Datsync, but not use Datview.
Or use Datview, but not Datsync.
Or use DataScript on the server instead of Datomic.
Or whatever.

The goal is for this to be flexible enough to describe a lot of different systems within the general span of this set of pieces.
So if it isn't working for you let us know.

(Aside: Why haven't people been building system components on top of protocols abstracting subsystem boundaries more?)

Of course, as the name might suggest, we'll also be building specs into this project.
So that'll be another nice layer of expressiveness open to us for describing subsystem boundaries.

### Arachne plugin

As mentioned in the README, we have hopes of setting up Datsync as an Arachne plugin.
Since Arachne is heavily based upon Stuart Sierra's component library, we should be able to fit right in there, and look forward to doing so.

### Mount

If you're not a big fan of Component, and prefer Mount, you can take a look at the sample code in `src/cljs/<your-app>/app.cljs` for a sense of how you might wrap things in Mount..
The basic idea is that you can define `defmounts` where the start and stop just trigger the `start` and `stop` protocol functions of `component/Lifecycle`.
We hope to eventually add a generator option for this.

<br/>
