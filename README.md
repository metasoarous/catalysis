
![Datsys](datsys.png)

(Formerly Catalysis)

<br/>

## A web application development framework embracing:

* The unidirectional flow of derived data & generally the power of the stream processing model for concurrency and distribution on the server and client (a la [Re-frame](https://github.com/Day8/re-frame), Elm, Redux, Samza)
* The vision described in the Web After Tomorrow: Scoped Datomic/DataScript database sync as a model for state management and communication
* The superpowers of Datomic and DataScript (RDF/EAV data model and declarative Datalog and pull queries)
* Stuart Sierra's system component model + protocols & specs for system modularity (Arachne module ready eventually hopefully as well)

See the talk from Clojure/West 2016: [Datalog all the way down](https://www.youtube.com/watch?v=aI0zVzzoK_E)

[![Join the chat at https://gitter.im/metasoarous/datsys](https://badges.gitter.im/metasoarous/datsys.svg)](https://gitter.im/metasoarous/datsys?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

<br/>



## Quick start

Datsys is now (finally!) available as a Leiningen generator.
To get started simply run

```
lein new datsys your-project
cd your-project
lein repl
(run)
```

You should see a bunch of crap print out on the REPL, all culminating in a message from Figwheel that looks something like:

```
Figwheel: Starting server at http://0.0.0.0:<port-number>
```

Every time you generate a Datsys project, you'll get a unique port number assignment, to avoid conflicting ports among your legion of Datsys apps.
Yeah; You're welcome.
You can configure this default in `src/clj/<your-app>config.clj` or via the `PORT` environment variable.
Configuration options can also be passed directly to run like `(run {:server {:port 8882}})` to specify config overrides.

Go to the URL Figwheel prints for you, and it should load up a bunch of todo items from an in memory Datomic db onto the browser in a DataScript database.
Try clicking around, and look at the JS console to see debug statements as the glorious action unfolds.


## Making yourself at home

When you're ready, you'll want to look at `resources/schema.edn` and `resources/test-data.edn` to set up your Datomic data model.
After that, you can look at `src/cljs/<your-app>/views.cljs` for some starter view code.
You can either run with the Datview view framework, or rip it out in favor of vanilla Reagent + Posh (we'll probably make this a generator flag eventually).

Note that the schema data is a [conformity](https://github.com/rkneufeld/conformity) spec, so you can continue to use this same file for all your migrations.
If you want to see how these migrations are hooked up, take a look at the `yourapp.datomic/Datomic` component.

### Datomic Pro

Assuming you want to use the free version of Datomic to test things out, things _should_ run out of the box here.
There's a partial description in the wiki of how to get Datomic Pro set up with this application, should you need it (as well as some commented code in the project.clj).
We'll eventually add a flag for this to the generator as well.

### Browser Repl

You can get the browser-connected figwheel repl with the command:

```clj
(browser-repl)
```

And return to the server repl with:

```clj
:cljs/quit
```

### Reloaded workflow

When you execute `run` Stuart Sierra system is created and started, and managed for you in the `user/system` var.
(see Stuart Sierra's Component for more information about systems and components in this sense).
If you need to reset the system, call `reset`, or `(stop)` followed by `(start)`.

It's also possible to wrap the system components using Mount, if you'd rather.
For some guidance there, please see the commented out code in `src/cljs/<your-app>/app.cljs`.

### Config

This application uses a system configuration component found in `yourapp.config`.
There's a default settings map there you can edit, and all settings are customizable via environment variables or run time arguments.
Feel free to extend this for your needs to keep all your config logic in one place.
Or replace with whatever you like here.
We may move to a proper library for doing this.


## Getting in deep

From here, check out:

* The rest of this README to get a bit of a better sense for the Datsys architecture
* The Gitter channel to chat with someone
* This repos docs/wiki for information about the Datsys vision
* The Datsync repo and it's docs for more specific information about Datsync
* The Datview repo if you're interested in leveraging Datview
* The Posh repo if you intend to use the Posh API
* If you're looking for more involved assistance, we're also available for consulting (<chris@thoughtnode.com>)


## Contributing to Datsys (and other Dat\* projects)

We would love your help!
Anything from filing bug reports, to documentation, to hacking on code is infinitely appreciated.
For docs, feel free to contribute directly to the wiki.
For code or code-comment/README docs, feel free to submit a pull-request.
Before you start working on anything big please get in touch with us about it using either a github issue, or by reaching out to us on the Gitter channel.

### Dealing with multiple repos

If you're contributing code to one of the other Dat projects, you'll likely want to use the [Checkout dependencies](https://github.com/technomancy/leiningen/blob/master/doc/TUTORIAL.md#checkout-dependencies) feature of Leiningen.
In short, clone whatever projects you're working on into a `checkouts` dir in `datsys` (note: linking will not work if you want client reloading via Figwheel).
Be aware of the caveats listed in the link above.
We'll eventually add a `+checkouts` option to the generator to initialize these checkouts for you.

### Roadmap

There's obviously also a ton smaller things that need to be done and fixed, and you can take a look at project issues for those.
But the following is a very big picture overview of some of the more major things we'd like to accomplish with the system.

* Datsync:
    * Security and scoping filters (+ posh query exports for automated scoping)
    * Offline availability
    * Entity validations
    * Onyx distribution
    * Long term:
        * P2P (non-centralized) distribution/sharing (perhaps via CRDTs or CVDCS)
        * Log history plugins
* Datview:
    * Rewrite in terms more general `(transform app context data)` context-based translation function, with multimethod dispatching for extensible rendering.
    * Finish setting up default context hooks/implementations.
    * Build out more default control widgets and clean way of grouping them.
    * Documentation
    * Package together some example widgets (as context multimethod implementations).
* Datspec
    * Add Clojure spec hotness to abstract architectural descriptions :-) (and generally spec rest of project(s) as well)
* Datsys:
    * Documentation
    * More example apps
    * System Componentization of server, similar to what we've done for client:
      Going to be a little more challenging here since the flow of data is a bit more complicated, and scalability more of a concern.
      But we should still be able to come up with some nice abstractions so folks can switch out different implementations.
    * Generative testing (based on specs)
    * Arachne plugin?

<br/>



## Deployment

### Deploying to Heroku

(Disclaimer: I haven't tried this; copied from Rente.)

To make Datsys run on Heroku, you need to let Leiningen on Heroku use the "package" build task.

To do this, and point Leiningen on Heroku to the "package" target, add the following config variable to Heroku by running this command:

```
heroku config:add LEIN_BUILD_TASK=package
```

Everything is nicely wrapped in shiny purple foil if you simply click this button:

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

Enjoy!

### Mobile App?

There's been talk of folks starting to use this in mobile apps.
I've you've been using it for mobile apps, please write about it (blog post, tweet, GH wiki page, whatevs) and PR a link here or message me.



## Contributions

This code was initially developed as a fork of Rente, but has diverged significantly.
We thank the authors of Rente for their contribution.

This library is authored by Christopher T. Small, with contributions from the following individuals:

Kyle Langford
Brian Marco

See LICENSE for license.



