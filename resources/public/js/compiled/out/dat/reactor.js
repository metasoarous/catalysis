// Compiled by ClojureScript 1.9.542 {}
goog.provide('dat.reactor');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('taoensso.timbre');
goog.require('dat.spec.protocols');
goog.require('dat.reactor.dispatcher');
goog.require('datascript.core');
goog.require('com.stuartsierra.component');
if(typeof dat.reactor.handle_event_BANG_ !== 'undefined'){
} else {
dat.reactor.handle_event_BANG_ = (function (){var method_table__61930__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__61931__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__61932__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__61933__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__61934__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"dat.reactor","handle-event!"),((function (method_table__61930__auto__,prefer_table__61931__auto__,method_cache__61932__auto__,cached_hierarchy__61933__auto__,hierarchy__61934__auto__){
return (function (_,___$1,p__75703){
var vec__75704 = p__75703;
var event_id = cljs.core.nth.call(null,vec__75704,(0),null);
var ___$2 = cljs.core.nth.call(null,vec__75704,(1),null);
return event_id;
});})(method_table__61930__auto__,prefer_table__61931__auto__,method_cache__61932__auto__,cached_hierarchy__61933__auto__,hierarchy__61934__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__61934__auto__,method_table__61930__auto__,prefer_table__61931__auto__,method_cache__61932__auto__,cached_hierarchy__61933__auto__));
})();
}
dat.reactor.dispatch_BANG_ = (function dat$reactor$dispatch_BANG_(var_args){
var args75707 = [];
var len__62120__auto___75710 = arguments.length;
var i__62121__auto___75711 = (0);
while(true){
if((i__62121__auto___75711 < len__62120__auto___75710)){
args75707.push((arguments[i__62121__auto___75711]));

var G__75712 = (i__62121__auto___75711 + (1));
i__62121__auto___75711 = G__75712;
continue;
} else {
}
break;
}

var G__75709 = args75707.length;
switch (G__75709) {
case 3:
return dat.reactor.dispatch_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dat.reactor.dispatch_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args75707.length)].join('')));

}
});

dat.reactor.dispatch_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (reactor,message,level){
return dat.reactor.dispatcher.dispatch_BANG_.call(null,new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132).cljs$core$IFn$_invoke$arity$1(reactor),message,level);
});

dat.reactor.dispatch_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (reactor,message){
return dat.reactor.dispatcher.dispatch_BANG_.call(null,new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132).cljs$core$IFn$_invoke$arity$1(reactor),message);
});

dat.reactor.dispatch_BANG_.cljs$lang$maxFixedArity = 3;

dat.reactor.dispatch_error_BANG_ = (function dat$reactor$dispatch_error_BANG_(reactor,message){
return dat.reactor.dispatcher.dispatch_error_BANG_.call(null,new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132).cljs$core$IFn$_invoke$arity$1(reactor),message);
});
/**
 * Within a handle-event method implementation, you can call this function to resolve a single event to
 *   some sequence of more atomic (presumably; thought you could get recursive...) events. This is a little bit
 *   experimental at the moment, as there might be some gotchas with error handling flow. But for right now, you
 *   have the option of specifying :datview.resolver/catch?, which lets you decide whether events should continue
 *   getting processed if one of the events errors (if set to truthy, skips over the errored event). Note that
 *   presently, errors do not bubble up. The last successful state of the db will be returned. Errors will be passed
 *   through to the :datview/error.
 */
dat.reactor.resolve_to = (function dat$reactor$resolve_to(var_args){
var args75714 = [];
var len__62120__auto___75721 = arguments.length;
var i__62121__auto___75722 = (0);
while(true){
if((i__62121__auto___75722 < len__62120__auto___75721)){
args75714.push((arguments[i__62121__auto___75722]));

var G__75723 = (i__62121__auto___75722 + (1));
i__62121__auto___75722 = G__75723;
continue;
} else {
}
break;
}

var G__75716 = args75714.length;
switch (G__75716) {
case 4:
return dat.reactor.resolve_to.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return dat.reactor.resolve_to.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args75714.length)].join('')));

}
});

dat.reactor.resolve_to.cljs$core$IFn$_invoke$arity$4 = (function (app,db,events,p__75717){
var map__75718 = p__75717;
var map__75718__$1 = ((((!((map__75718 == null)))?((((map__75718.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75718.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__75718):map__75718);
var options = map__75718__$1;
var catch_QMARK_ = cljs.core.get.call(null,map__75718__$1,new cljs.core.Keyword("datview.resolver","catch?","datview.resolver/catch?",2025040664));
return cljs.core.reduce.call(null,((function (map__75718,map__75718__$1,options,catch_QMARK_){
return (function (db_SINGLEQUOTE_,event){
try{return dat.reactor.handle_event_BANG_.call(null,app,db_SINGLEQUOTE_,event);
}catch (e75720){var e = e75720;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"dat.reactor","/tmp/form-init8382301926859034614.clj",60,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,map__75718,map__75718__$1,options,catch_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Resolver exception:"], null);
});})(e,map__75718,map__75718__$1,options,catch_QMARK_))
,null)),null,-1518643312);

console.log(e.stack);

if(cljs.core.truth_(catch_QMARK_)){
return db_SINGLEQUOTE_;
} else {
return cljs.core.reduced.call(null,cljs.core.with_meta.call(null,db_SINGLEQUOTE_,cljs.core.merge.call(null,cljs.core.meta.call(null,db_SINGLEQUOTE_),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("datview.resolver","error","datview.resolver/error",1263884080),e], null))));
}
}});})(map__75718,map__75718__$1,options,catch_QMARK_))
,db,cljs.core.remove.call(null,cljs.core.nil_QMARK_,events));
});

dat.reactor.resolve_to.cljs$core$IFn$_invoke$arity$3 = (function (app,db,events){
return dat.reactor.resolve_to.call(null,app,db,events,cljs.core.PersistentArrayMap.EMPTY);
});

dat.reactor.resolve_to.cljs$lang$maxFixedArity = 4;

dat.reactor.preserve_meta = (function dat$reactor$preserve_meta(handler_fn){
return (function (app,db,event){
var new_db = handler_fn.call(null,app,db,event);
if(cljs.core.truth_(cljs.core.meta.call(null,new_db))){
return new_db;
} else {
return cljs.core.with_meta.call(null,new_db,cljs.core.meta.call(null,db));
}
});
});
/**
 * Register an event handler. Optionally specify middleware as second arg. Can be a vector of such fns, as well.
 *   Middleware is typical in order; First in the sequence ends up being responsible for creating the handler function
 *   that actually returns the final value. Except... We have some default handlers (see implementation, for now, till
 *   we spec this out).
 */
dat.reactor.register_handler = (function dat$reactor$register_handler(var_args){
var args75725 = [];
var len__62120__auto___75728 = arguments.length;
var i__62121__auto___75729 = (0);
while(true){
if((i__62121__auto___75729 < len__62120__auto___75728)){
args75725.push((arguments[i__62121__auto___75729]));

var G__75730 = (i__62121__auto___75729 + (1));
i__62121__auto___75729 = G__75730;
continue;
} else {
}
break;
}

var G__75727 = args75725.length;
switch (G__75727) {
case 2:
return dat.reactor.register_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dat.reactor.register_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args75725.length)].join('')));

}
});

dat.reactor.register_handler.cljs$core$IFn$_invoke$arity$2 = (function (event_id,handler_fn){
return dat.reactor.register_handler.call(null,event_id,cljs.core.PersistentVector.EMPTY,handler_fn);
});

dat.reactor.register_handler.cljs$core$IFn$_invoke$arity$3 = (function (event_id,middleware_fn,handler_fn){
var post_middleware = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dat.reactor.preserve_meta], null);
var pre_middleware = cljs.core.PersistentVector.EMPTY;
var middleware_fns = cljs.core.vec.call(null,cljs.core.concat.call(null,post_middleware,((cljs.core.sequential_QMARK_.call(null,middleware_fn))?middleware_fn:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [middleware_fn], null)),pre_middleware));
var middleware_fn__$1 = cljs.core.apply.call(null,cljs.core.comp,middleware_fns);
var handler_fn__$1 = middleware_fn__$1.call(null,handler_fn);
return cljs.core._add_method.call(null,dat.reactor.handle_event_BANG_,event_id,((function (post_middleware,pre_middleware,middleware_fns,middleware_fn__$1,handler_fn__$1){
return (function (app,db,event){
return handler_fn__$1.call(null,app,db,event);
});})(post_middleware,pre_middleware,middleware_fns,middleware_fn__$1,handler_fn__$1))
);
});

dat.reactor.register_handler.cljs$lang$maxFixedArity = 3;

if(typeof dat.reactor.execute_effect_BANG_ !== 'undefined'){
} else {
dat.reactor.execute_effect_BANG_ = (function (){var method_table__61930__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__61931__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__61932__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__61933__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__61934__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"dat.reactor","execute-effect!"),((function (method_table__61930__auto__,prefer_table__61931__auto__,method_cache__61932__auto__,cached_hierarchy__61933__auto__,hierarchy__61934__auto__){
return (function (_,___$1,p__75732){
var vec__75733 = p__75732;
var effect_id = cljs.core.nth.call(null,vec__75733,(0),null);
var ___$2 = cljs.core.nth.call(null,vec__75733,(1),null);
return effect_id;
});})(method_table__61930__auto__,prefer_table__61931__auto__,method_cache__61932__auto__,cached_hierarchy__61933__auto__,hierarchy__61934__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__61934__auto__,method_table__61930__auto__,prefer_table__61931__auto__,method_cache__61932__auto__,cached_hierarchy__61933__auto__));
})();
}
dat.reactor.concatv = cljs.core.comp.call(null,cljs.core.vec,cljs.core.concat);
/**
 * Registers effects on the database value. This is the mode of communication for effect message which need to get processed.
 */
dat.reactor.with_effects = (function dat$reactor$with_effects(effects,db){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"dat.reactor","/tmp/form-init8382301926859034614.clj",127,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Adding effects for effect-ids:",cljs.core.map.call(null,cljs.core.first,effects)], null);
}),null)),null,1233129604);

return cljs.core.with_meta.call(null,db,cljs.core.update.call(null,cljs.core.meta.call(null,db),new cljs.core.Keyword("dat.reactor","effects","dat.reactor/effects",21173161),dat.reactor.concatv,cljs.core.map.call(null,(function (effect){
return cljs.core.with_meta.call(null,effect,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),db], null));
}),effects)));
});
/**
 * Registers effect on the database value. This is the mode of communication for effect message which need to get processed.
 */
dat.reactor.with_effect = (function dat$reactor$with_effect(effect,db){
return dat.reactor.with_effects.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [effect], null),db);
});
/**
 * Register an event handler. Optionally specify middleware as second arg. Can be a vector of such fns, as well.
 *   Middleware is typical in order; First in the sequence ends up being responsible for creating the handler function
 *   we spec this out). Also, calling this function registers an _event_ handler by the same effect-id; This should
 *   eventually act as a default, but not override any event handler already set up with the same id, but for now avoid
 *   collisions between event and effect ids.
 */
dat.reactor.register_effect = (function dat$reactor$register_effect(var_args){
var args75736 = [];
var len__62120__auto___75740 = arguments.length;
var i__62121__auto___75741 = (0);
while(true){
if((i__62121__auto___75741 < len__62120__auto___75740)){
args75736.push((arguments[i__62121__auto___75741]));

var G__75742 = (i__62121__auto___75741 + (1));
i__62121__auto___75741 = G__75742;
continue;
} else {
}
break;
}

var G__75738 = args75736.length;
switch (G__75738) {
case 2:
return dat.reactor.register_effect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dat.reactor.register_effect.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args75736.length)].join('')));

}
});

dat.reactor.register_effect.cljs$core$IFn$_invoke$arity$2 = (function (effect_id,effect_fn){
return dat.reactor.register_effect.call(null,effect_id,cljs.core.PersistentVector.EMPTY,effect_fn);
});

dat.reactor.register_effect.cljs$core$IFn$_invoke$arity$3 = (function (effect_id,middleware_fn,effect_fn){
var post_middleware = cljs.core.PersistentVector.EMPTY;
var pre_middleware = cljs.core.PersistentVector.EMPTY;
var middleware_fns = cljs.core.vec.call(null,cljs.core.concat.call(null,post_middleware,((cljs.core.sequential_QMARK_.call(null,middleware_fn))?middleware_fn:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [middleware_fn], null)),pre_middleware));
var middleware_fn__$1 = cljs.core.apply.call(null,cljs.core.comp,middleware_fns);
var effect_fn__$1 = middleware_fn__$1.call(null,effect_fn);
cljs.core._add_method.call(null,dat.reactor.execute_effect_BANG_,effect_id,((function (post_middleware,pre_middleware,middleware_fns,middleware_fn__$1,effect_fn__$1){
return (function (app,db,effect){
try{return effect_fn__$1.call(null,app,db,effect);
}catch (e75739){var e = e75739;
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"dat.reactor","/tmp/form-init8382301926859034614.clj",171,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,post_middleware,pre_middleware,middleware_fns,middleware_fn__$1,effect_fn__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Error executing effect:",effect,e], null);
});})(e,post_middleware,pre_middleware,middleware_fns,middleware_fn__$1,effect_fn__$1))
,null)),null,-1547341582);
}});})(post_middleware,pre_middleware,middleware_fns,middleware_fn__$1,effect_fn__$1))
);

return cljs.core._add_method.call(null,dat.reactor.handle_event_BANG_,effect_id,((function (post_middleware,pre_middleware,middleware_fns,middleware_fn__$1,effect_fn__$1){
return (function (app,db,effect){
return dat.reactor.with_effect.call(null,effect,db);
});})(post_middleware,pre_middleware,middleware_fns,middleware_fn__$1,effect_fn__$1))
);
});

dat.reactor.register_effect.cljs$lang$maxFixedArity = 3;

dat.reactor.register_handler.call(null,new cljs.core.Keyword("dat.reactor","resolve-tx-report","dat.reactor/resolve-tx-report",-1394533746),(function (_,db,p__75744){
var vec__75745 = p__75744;
var ___$1 = cljs.core.nth.call(null,vec__75745,(0),null);
var tx_report = cljs.core.nth.call(null,vec__75745,(1),null);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"dat.reactor","/tmp/form-init8382301926859034614.clj",187,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__75745,___$1,tx_report){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Handler :dat.reactor/resolve-tx-report called."], null);
});})(vec__75745,___$1,tx_report))
,null)),null,-2137601504);

return new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(tx_report);
}));
dat.reactor.register_handler.call(null,new cljs.core.Keyword("dat.reactor","local-tx","dat.reactor/local-tx",-702931104),(function (app,db,p__75748){
var vec__75749 = p__75748;
var _ = cljs.core.nth.call(null,vec__75749,(0),null);
var tx_forms = cljs.core.nth.call(null,vec__75749,(1),null);
var tx_meta = cljs.core.nth.call(null,vec__75749,(2),null);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"dat.reactor","/tmp/form-init8382301926859034614.clj",193,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__75749,_,tx_forms,tx_meta){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Handler :dat.reactor/local-tx called."], null);
});})(vec__75749,_,tx_forms,tx_meta))
,null)),null,-2093648719);

var tx_report = datascript.core.with$.call(null,db,tx_forms,tx_meta);
return dat.reactor.with_effect.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.reactor","execute-tx-report-handlers!","dat.reactor/execute-tx-report-handlers!",-1580532868),tx_report], null),dat.reactor.resolve_to.call(null,app,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.reactor","resolve-tx-report","dat.reactor/resolve-tx-report",-1394533746),tx_report], null)], null)));
}));
dat.reactor.register_effect.call(null,new cljs.core.Keyword("dat.reactor","execute-tx-report-handlers!","dat.reactor/execute-tx-report-handlers!",-1580532868),(function (app,db,p__75752){
var vec__75753 = p__75752;
var _ = cljs.core.nth.call(null,vec__75753,(0),null);
var tx_report = cljs.core.nth.call(null,vec__75753,(1),null);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"dat.reactor","/tmp/form-init8382301926859034614.clj",205,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__75753,_,tx_report){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Effect handler :dat.reactor/fire-tx-report-handlers! called."], null);
});})(vec__75753,_,tx_report))
,null)),null,2144211133);

var seq__75756 = cljs.core.seq.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(app)))));
var chunk__75757 = null;
var count__75758 = (0);
var i__75759 = (0);
while(true){
if((i__75759 < count__75758)){
var vec__75760 = cljs.core._nth.call(null,chunk__75757,i__75759);
var ___$1 = cljs.core.nth.call(null,vec__75760,(0),null);
var callback = cljs.core.nth.call(null,vec__75760,(1),null);
callback.call(null,tx_report);

var G__75766 = seq__75756;
var G__75767 = chunk__75757;
var G__75768 = count__75758;
var G__75769 = (i__75759 + (1));
seq__75756 = G__75766;
chunk__75757 = G__75767;
count__75758 = G__75768;
i__75759 = G__75769;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__75756);
if(temp__6738__auto__){
var seq__75756__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__75756__$1)){
var c__61810__auto__ = cljs.core.chunk_first.call(null,seq__75756__$1);
var G__75770 = cljs.core.chunk_rest.call(null,seq__75756__$1);
var G__75771 = c__61810__auto__;
var G__75772 = cljs.core.count.call(null,c__61810__auto__);
var G__75773 = (0);
seq__75756 = G__75770;
chunk__75757 = G__75771;
count__75758 = G__75772;
i__75759 = G__75773;
continue;
} else {
var vec__75763 = cljs.core.first.call(null,seq__75756__$1);
var ___$1 = cljs.core.nth.call(null,vec__75763,(0),null);
var callback = cljs.core.nth.call(null,vec__75763,(1),null);
callback.call(null,tx_report);

var G__75774 = cljs.core.next.call(null,seq__75756__$1);
var G__75775 = null;
var G__75776 = (0);
var G__75777 = (0);
seq__75756 = G__75774;
chunk__75757 = G__75775;
count__75758 = G__75776;
i__75759 = G__75777;
continue;
}
} else {
return null;
}
}
break;
}
}));
dat.reactor.register_effect.call(null,new cljs.core.Keyword("dat.reactor","dispatch!","dat.reactor/dispatch!",2015016299),(function (app,db,p__75778){
var vec__75779 = p__75778;
var _ = cljs.core.nth.call(null,vec__75779,(0),null);
var dispatch_message = cljs.core.nth.call(null,vec__75779,(1),null);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"dat.reactor","/tmp/form-init8382301926859034614.clj",213,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__75779,_,dispatch_message){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Calling dispatch after effect for dispatch id:",cljs.core.first.call(null,dispatch_message)], null);
});})(vec__75779,_,dispatch_message))
,null)),null,35084173);

return dat.reactor.dispatcher.dispatch_BANG_.call(null,new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132).cljs$core$IFn$_invoke$arity$1(app),dispatch_message);
}));
dat.reactor.register_effect.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (app,db,event){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"dat.reactor","/tmp/form-init8382301926859034614.clj",224,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["No effect definition for event:",event,"You should probably go add one in your events ns"], null);
}),null)),null,-2046715672);

return db;
}));
dat.reactor.register_handler.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (app,db,event){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"dat.reactor","/tmp/form-init8382301926859034614.clj",229,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["No handler definition for event:",event,"You should probably go add one in your events ns"], null);
}),null)),null,-960613120);

return db;
}));
/**
 * Starts a go loop that processes events and effects using the handle-event! and
 *   execute-effect! fns. Effects are executed in sequence after the transaction commits.
 *   If a handler fails, the effects will not fire (will eventually support control over
 *   this behavior).
 */
dat.reactor.go_react_BANG_ = (function dat$reactor$go_react_BANG_(reactor,app){
var event_chan = dat.spec.protocols.dispatcher_event_chan.call(null,new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132).cljs$core$IFn$_invoke$arity$1(reactor));
var conn = new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(reactor);
var kill_chan = cljs.core.async.chan.call(null);
var c__69114__auto___76164 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__69114__auto___76164,event_chan,conn,kill_chan){
return (function (){
var f__69115__auto__ = (function (){var switch__69000__auto__ = ((function (c__69114__auto___76164,event_chan,conn,kill_chan){
return (function (state_76071){
var state_val_76072 = (state_76071[(1)]);
if((state_val_76072 === (7))){
var inst_75973 = (state_76071[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_76071,(6),new cljs.core.Keyword(null,"default","default",-1987822328),null,(5));
var inst_75985 = cljs.core._EQ_.call(null,inst_75973,kill_chan);
var state_76071__$1 = state_76071;
if(inst_75985){
var statearr_76074_76165 = state_76071__$1;
(statearr_76074_76165[(1)] = (8));

} else {
var statearr_76075_76166 = state_76071__$1;
(statearr_76075_76166[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76072 === (20))){
var inst_76012 = cljs.core.deref.call(null,conn);
var state_76071__$1 = state_76071;
var statearr_76076_76167 = state_76071__$1;
(statearr_76076_76167[(2)] = inst_76012);

(statearr_76076_76167[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76072 === (27))){
var inst_76044 = (state_76071[(2)]);
var state_76071__$1 = state_76071;
var statearr_76081_76168 = state_76071__$1;
(statearr_76081_76168[(2)] = inst_76044);

(statearr_76081_76168[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76072 === (1))){
var state_76071__$1 = state_76071;
var statearr_76082_76169 = state_76071__$1;
(statearr_76082_76169[(2)] = null);

(statearr_76082_76169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76072 === (24))){
var inst_76047 = (state_76071[(2)]);
var state_76071__$1 = state_76071;
var statearr_76083_76170 = state_76071__$1;
(statearr_76083_76170[(2)] = inst_76047);

(statearr_76083_76170[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76072 === (4))){
var inst_75971 = (state_76071[(8)]);
var inst_75971__$1 = (state_76071[(2)]);
var inst_75972 = cljs.core.nth.call(null,inst_75971__$1,(0),null);
var inst_75973 = cljs.core.nth.call(null,inst_75971__$1,(1),null);
var inst_75974 = cljs.core.atom.call(null,null);
var state_76071__$1 = (function (){var statearr_76090 = state_76071;
(statearr_76090[(7)] = inst_75973);

(statearr_76090[(8)] = inst_75971__$1);

(statearr_76090[(9)] = inst_75972);

(statearr_76090[(10)] = inst_75974);

return statearr_76090;
})();
var statearr_76091_76171 = state_76071__$1;
(statearr_76091_76171[(2)] = null);

(statearr_76091_76171[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76072 === (15))){
var inst_76051 = (state_76071[(2)]);
var state_76071__$1 = state_76071;
var statearr_76092_76172 = state_76071__$1;
(statearr_76092_76172[(2)] = inst_76051);

(statearr_76092_76172[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76072 === (21))){
var inst_76000 = (state_76071[(11)]);
var inst_76001 = (state_76071[(12)]);
var inst_76007 = (state_76071[(13)]);
var inst_75999 = (state_76071[(14)]);
var inst_76002 = (state_76071[(15)]);
var inst_76014 = (state_76071[(2)]);
var inst_76015 = dat.reactor.execute_effect_BANG_.call(null,app,inst_76014,inst_76007);
var inst_76016 = (inst_76002 + (1));
var tmp76084 = inst_76000;
var tmp76085 = inst_76001;
var tmp76086 = inst_75999;
var inst_75999__$1 = tmp76086;
var inst_76000__$1 = tmp76084;
var inst_76001__$1 = tmp76085;
var inst_76002__$1 = inst_76016;
var state_76071__$1 = (function (){var statearr_76093 = state_76071;
(statearr_76093[(11)] = inst_76000__$1);

(statearr_76093[(16)] = inst_76015);

(statearr_76093[(12)] = inst_76001__$1);

(statearr_76093[(14)] = inst_75999__$1);

(statearr_76093[(15)] = inst_76002__$1);

return statearr_76093;
})();
var statearr_76094_76173 = state_76071__$1;
(statearr_76094_76173[(2)] = null);

(statearr_76094_76173[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76072 === (31))){
var inst_75973 = (state_76071[(7)]);
var inst_75971 = (state_76071[(8)]);
var inst_75972 = (state_76071[(9)]);
var inst_75974 = (state_76071[(10)]);
var inst_76061 = (function (){var vec__75964 = inst_75971;
var event = inst_75972;
var port = inst_75973;
var final_meta = inst_75974;
return ((function (vec__75964,event,port,final_meta,inst_75973,inst_75971,inst_75972,inst_75974,state_val_76072,c__69114__auto___76164,event_chan,conn,kill_chan){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["go-react! process recieved kill-chan signal"], null);
});
;})(vec__75964,event,port,final_meta,inst_75973,inst_75971,inst_75972,inst_75974,state_val_76072,c__69114__auto___76164,event_chan,conn,kill_chan))
})();
var inst_76062 = (new cljs.core.Delay(inst_76061,null));
var inst_76063 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dat.reactor","/tmp/form-init8382301926859034614.clj",276,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_76062,null,1047248793);
var state_76071__$1 = state_76071;
var statearr_76096_76174 = state_76071__$1;
(statearr_76096_76174[(2)] = inst_76063);

(statearr_76096_76174[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76072 === (32))){
var state_76071__$1 = state_76071;
var statearr_76097_76175 = state_76071__$1;
(statearr_76097_76175[(2)] = null);

(statearr_76097_76175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76072 === (33))){
var inst_76067 = (state_76071[(2)]);
var state_76071__$1 = state_76071;
var statearr_76098_76176 = state_76071__$1;
(statearr_76098_76176[(2)] = inst_76067);

(statearr_76098_76176[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76072 === (13))){
var inst_76054 = (state_76071[(2)]);
var state_76071__$1 = state_76071;
var statearr_76099_76177 = state_76071__$1;
(statearr_76099_76177[(2)] = inst_76054);

(statearr_76099_76177[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76072 === (22))){
var inst_76019 = (state_76071[(17)]);
var inst_76023 = cljs.core.chunked_seq_QMARK_.call(null,inst_76019);
var state_76071__$1 = state_76071;
if(inst_76023){
var statearr_76103_76178 = state_76071__$1;
(statearr_76103_76178[(1)] = (25));

} else {
var statearr_76104_76179 = state_76071__$1;
(statearr_76104_76179[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76072 === (29))){
var inst_76035 = cljs.core.deref.call(null,conn);
var state_76071__$1 = state_76071;
var statearr_76106_76180 = state_76071__$1;
(statearr_76106_76180[(2)] = inst_76035);

(statearr_76106_76180[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76072 === (6))){
var inst_75973 = (state_76071[(7)]);
var inst_75971 = (state_76071[(8)]);
var inst_75972 = (state_76071[(9)]);
var inst_75974 = (state_76071[(10)]);
var inst_75975 = (state_76071[(2)]);
var inst_75977 = (function (){var vec__75964 = inst_75971;
var event = inst_75972;
var port = inst_75973;
var final_meta = inst_75974;
var e = inst_75975;
return ((function (vec__75964,event,port,final_meta,e,inst_75973,inst_75971,inst_75972,inst_75974,inst_75975,state_val_76072,c__69114__auto___76164,event_chan,conn,kill_chan){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Exception in reactor go loop"], null);
});
;})(vec__75964,event,port,final_meta,e,inst_75973,inst_75971,inst_75972,inst_75974,inst_75975,state_val_76072,c__69114__auto___76164,event_chan,conn,kill_chan))
})();
var inst_75978 = (new cljs.core.Delay(inst_75977,null));
var inst_75979 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"dat.reactor","/tmp/form-init8382301926859034614.clj",273,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_75978,null,414183527);
var inst_75980 = inst_75975.stack;
var inst_75981 = console.log(inst_75980);
var state_76071__$1 = (function (){var statearr_76108 = state_76071;
(statearr_76108[(18)] = inst_75979);

return statearr_76108;
})();
var statearr_76109_76181 = state_76071__$1;
(statearr_76109_76181[(2)] = inst_75981);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76071__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76072 === (28))){
var inst_76032 = (state_76071[(19)]);
var state_76071__$1 = state_76071;
var statearr_76115_76182 = state_76071__$1;
(statearr_76115_76182[(2)] = inst_76032);

(statearr_76115_76182[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76072 === (25))){
var inst_76019 = (state_76071[(17)]);
var inst_76025 = cljs.core.chunk_first.call(null,inst_76019);
var inst_76026 = cljs.core.chunk_rest.call(null,inst_76019);
var inst_76027 = cljs.core.count.call(null,inst_76025);
var inst_75999 = inst_76026;
var inst_76000 = inst_76025;
var inst_76001 = inst_76027;
var inst_76002 = (0);
var state_76071__$1 = (function (){var statearr_76116 = state_76071;
(statearr_76116[(11)] = inst_76000);

(statearr_76116[(12)] = inst_76001);

(statearr_76116[(14)] = inst_75999);

(statearr_76116[(15)] = inst_76002);

return statearr_76116;
})();
var statearr_76117_76183 = state_76071__$1;
(statearr_76117_76183[(2)] = null);

(statearr_76117_76183[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76072 === (17))){
var inst_76019 = (state_76071[(17)]);
var inst_75999 = (state_76071[(14)]);
var inst_76019__$1 = cljs.core.seq.call(null,inst_75999);
var state_76071__$1 = (function (){var statearr_76118 = state_76071;
(statearr_76118[(17)] = inst_76019__$1);

return statearr_76118;
})();
if(inst_76019__$1){
var statearr_76120_76184 = state_76071__$1;
(statearr_76120_76184[(1)] = (22));

} else {
var statearr_76123_76185 = state_76071__$1;
(statearr_76123_76185[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76072 === (3))){
var inst_76069 = (state_76071[(2)]);
var state_76071__$1 = state_76071;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_76071__$1,inst_76069);
} else {
if((state_val_76072 === (12))){
var state_76071__$1 = state_76071;
var statearr_76125_76186 = state_76071__$1;
(statearr_76125_76186[(2)] = null);

(statearr_76125_76186[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76072 === (2))){
var inst_75967 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_75968 = [kill_chan,event_chan];
var inst_75969 = (new cljs.core.PersistentVector(null,2,(5),inst_75967,inst_75968,null));
var state_76071__$1 = state_76071;
return cljs.core.async.ioc_alts_BANG_.call(null,state_76071__$1,(4),inst_75969,new cljs.core.Keyword(null,"priority","priority",1431093715),true);
} else {
if((state_val_76072 === (23))){
var state_76071__$1 = state_76071;
var statearr_76126_76187 = state_76071__$1;
(statearr_76126_76187[(2)] = null);

(statearr_76126_76187[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76072 === (19))){
var inst_76009 = (state_76071[(20)]);
var state_76071__$1 = state_76071;
var statearr_76129_76188 = state_76071__$1;
(statearr_76129_76188[(2)] = inst_76009);

(statearr_76129_76188[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76072 === (11))){
var inst_75992 = (state_76071[(21)]);
var inst_75998 = cljs.core.seq.call(null,inst_75992);
var inst_75999 = inst_75998;
var inst_76000 = null;
var inst_76001 = (0);
var inst_76002 = (0);
var state_76071__$1 = (function (){var statearr_76130 = state_76071;
(statearr_76130[(11)] = inst_76000);

(statearr_76130[(12)] = inst_76001);

(statearr_76130[(14)] = inst_75999);

(statearr_76130[(15)] = inst_76002);

return statearr_76130;
})();
var statearr_76133_76189 = state_76071__$1;
(statearr_76133_76189[(2)] = null);

(statearr_76133_76189[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76072 === (9))){
var inst_75973 = (state_76071[(7)]);
var inst_75971 = (state_76071[(8)]);
var inst_75972 = (state_76071[(9)]);
var inst_75992 = (state_76071[(21)]);
var inst_75974 = (state_76071[(10)]);
var inst_75988 = (function (){var vec__75964 = inst_75971;
var event = inst_75972;
var port = inst_75973;
var final_meta = inst_75974;
return ((function (vec__75964,event,port,final_meta,inst_75973,inst_75971,inst_75972,inst_75992,inst_75974,state_val_76072,c__69114__auto___76164,event_chan,conn,kill_chan){
return (function (current_db){
try{var new_db = dat.reactor.handle_event_BANG_.call(null,reactor,current_db,event);
cljs.core.reset_BANG_.call(null,final_meta,cljs.core.meta.call(null,new_db));

return cljs.core.with_meta.call(null,new_db,cljs.core.dissoc.call(null,cljs.core.meta.call(null,new_db),new cljs.core.Keyword("dat.reactor","effects","dat.reactor/effects",21173161)));
}catch (e76136){var e = e76136;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"dat.reactor","/tmp/form-init8382301926859034614.clj",263,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,vec__75964,event,port,final_meta,inst_75973,inst_75971,inst_75972,inst_75992,inst_75974,state_val_76072,c__69114__auto___76164,event_chan,conn,kill_chan){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Exception in reactor swap for event: ",event], null);
});})(e,vec__75964,event,port,final_meta,inst_75973,inst_75971,inst_75972,inst_75992,inst_75974,state_val_76072,c__69114__auto___76164,event_chan,conn,kill_chan))
,null)),null,1506627111);

console.log(e.stack);

return current_db;
}});
;})(vec__75964,event,port,final_meta,inst_75973,inst_75971,inst_75972,inst_75992,inst_75974,state_val_76072,c__69114__auto___76164,event_chan,conn,kill_chan))
})();
var inst_75989 = cljs.core.swap_BANG_.call(null,conn,inst_75988);
var inst_75990 = cljs.core.deref.call(null,inst_75974);
var inst_75991 = new cljs.core.Keyword("dat.reactor","effects","dat.reactor/effects",21173161).cljs$core$IFn$_invoke$arity$1(inst_75990);
var inst_75992__$1 = cljs.core.seq.call(null,inst_75991);
var state_76071__$1 = (function (){var statearr_76138 = state_76071;
(statearr_76138[(21)] = inst_75992__$1);

(statearr_76138[(22)] = inst_75989);

return statearr_76138;
})();
if(inst_75992__$1){
var statearr_76139_76190 = state_76071__$1;
(statearr_76139_76190[(1)] = (11));

} else {
var statearr_76140_76191 = state_76071__$1;
(statearr_76140_76191[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76072 === (5))){
var inst_75973 = (state_76071[(7)]);
var inst_76058 = (state_76071[(2)]);
var inst_76059 = cljs.core._EQ_.call(null,inst_75973,kill_chan);
var state_76071__$1 = (function (){var statearr_76141 = state_76071;
(statearr_76141[(23)] = inst_76058);

return statearr_76141;
})();
if(inst_76059){
var statearr_76142_76192 = state_76071__$1;
(statearr_76142_76192[(1)] = (31));

} else {
var statearr_76143_76193 = state_76071__$1;
(statearr_76143_76193[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76072 === (14))){
var inst_76001 = (state_76071[(12)]);
var inst_76002 = (state_76071[(15)]);
var inst_76004 = (inst_76002 < inst_76001);
var inst_76005 = inst_76004;
var state_76071__$1 = state_76071;
if(cljs.core.truth_(inst_76005)){
var statearr_76144_76194 = state_76071__$1;
(statearr_76144_76194[(1)] = (16));

} else {
var statearr_76145_76195 = state_76071__$1;
(statearr_76145_76195[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76072 === (26))){
var inst_76019 = (state_76071[(17)]);
var inst_76030 = (state_76071[(24)]);
var inst_76032 = (state_76071[(19)]);
var inst_76030__$1 = cljs.core.first.call(null,inst_76019);
var inst_76031 = cljs.core.meta.call(null,inst_76030__$1);
var inst_76032__$1 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(inst_76031);
var state_76071__$1 = (function (){var statearr_76146 = state_76071;
(statearr_76146[(24)] = inst_76030__$1);

(statearr_76146[(19)] = inst_76032__$1);

return statearr_76146;
})();
if(cljs.core.truth_(inst_76032__$1)){
var statearr_76147_76196 = state_76071__$1;
(statearr_76147_76196[(1)] = (28));

} else {
var statearr_76148_76197 = state_76071__$1;
(statearr_76148_76197[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76072 === (16))){
var inst_76000 = (state_76071[(11)]);
var inst_76007 = (state_76071[(13)]);
var inst_76009 = (state_76071[(20)]);
var inst_76002 = (state_76071[(15)]);
var inst_76007__$1 = cljs.core._nth.call(null,inst_76000,inst_76002);
var inst_76008 = cljs.core.meta.call(null,inst_76007__$1);
var inst_76009__$1 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(inst_76008);
var state_76071__$1 = (function (){var statearr_76149 = state_76071;
(statearr_76149[(13)] = inst_76007__$1);

(statearr_76149[(20)] = inst_76009__$1);

return statearr_76149;
})();
if(cljs.core.truth_(inst_76009__$1)){
var statearr_76150_76198 = state_76071__$1;
(statearr_76150_76198[(1)] = (19));

} else {
var statearr_76151_76199 = state_76071__$1;
(statearr_76151_76199[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76072 === (30))){
var inst_76019 = (state_76071[(17)]);
var inst_76030 = (state_76071[(24)]);
var inst_76037 = (state_76071[(2)]);
var inst_76038 = dat.reactor.execute_effect_BANG_.call(null,app,inst_76037,inst_76030);
var inst_76041 = cljs.core.next.call(null,inst_76019);
var inst_75999 = inst_76041;
var inst_76000 = null;
var inst_76001 = (0);
var inst_76002 = (0);
var state_76071__$1 = (function (){var statearr_76152 = state_76071;
(statearr_76152[(11)] = inst_76000);

(statearr_76152[(12)] = inst_76001);

(statearr_76152[(14)] = inst_75999);

(statearr_76152[(25)] = inst_76038);

(statearr_76152[(15)] = inst_76002);

return statearr_76152;
})();
var statearr_76153_76200 = state_76071__$1;
(statearr_76153_76200[(2)] = null);

(statearr_76153_76200[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76072 === (10))){
var inst_76056 = (state_76071[(2)]);
var state_76071__$1 = state_76071;
var statearr_76154_76201 = state_76071__$1;
(statearr_76154_76201[(2)] = inst_76056);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76071__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76072 === (18))){
var inst_76049 = (state_76071[(2)]);
var state_76071__$1 = state_76071;
var statearr_76155_76202 = state_76071__$1;
(statearr_76155_76202[(2)] = inst_76049);

(statearr_76155_76202[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76072 === (8))){
var state_76071__$1 = state_76071;
var statearr_76156_76203 = state_76071__$1;
(statearr_76156_76203[(2)] = null);

(statearr_76156_76203[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__69114__auto___76164,event_chan,conn,kill_chan))
;
return ((function (switch__69000__auto__,c__69114__auto___76164,event_chan,conn,kill_chan){
return (function() {
var dat$reactor$go_react_BANG__$_state_machine__69001__auto__ = null;
var dat$reactor$go_react_BANG__$_state_machine__69001__auto____0 = (function (){
var statearr_76160 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_76160[(0)] = dat$reactor$go_react_BANG__$_state_machine__69001__auto__);

(statearr_76160[(1)] = (1));

return statearr_76160;
});
var dat$reactor$go_react_BANG__$_state_machine__69001__auto____1 = (function (state_76071){
while(true){
var ret_value__69002__auto__ = (function (){try{while(true){
var result__69003__auto__ = switch__69000__auto__.call(null,state_76071);
if(cljs.core.keyword_identical_QMARK_.call(null,result__69003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69003__auto__;
}
break;
}
}catch (e76161){if((e76161 instanceof Object)){
var ex__69004__auto__ = e76161;
var statearr_76162_76204 = state_76071;
(statearr_76162_76204[(5)] = ex__69004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76071);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e76161;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__69002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76205 = state_76071;
state_76071 = G__76205;
continue;
} else {
return ret_value__69002__auto__;
}
break;
}
});
dat$reactor$go_react_BANG__$_state_machine__69001__auto__ = function(state_76071){
switch(arguments.length){
case 0:
return dat$reactor$go_react_BANG__$_state_machine__69001__auto____0.call(this);
case 1:
return dat$reactor$go_react_BANG__$_state_machine__69001__auto____1.call(this,state_76071);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
dat$reactor$go_react_BANG__$_state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$0 = dat$reactor$go_react_BANG__$_state_machine__69001__auto____0;
dat$reactor$go_react_BANG__$_state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$1 = dat$reactor$go_react_BANG__$_state_machine__69001__auto____1;
return dat$reactor$go_react_BANG__$_state_machine__69001__auto__;
})()
;})(switch__69000__auto__,c__69114__auto___76164,event_chan,conn,kill_chan))
})();
var state__69116__auto__ = (function (){var statearr_76163 = f__69115__auto__.call(null);
(statearr_76163[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__69114__auto___76164);

return statearr_76163;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__69116__auto__);
});})(c__69114__auto___76164,event_chan,conn,kill_chan))
);


return kill_chan;
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {com.stuartsierra.component.Lifecycle}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
dat.reactor.SimpleReactor = (function (app,dispatcher,reactor,conn,kill_chan,__meta,__extmap,__hash){
this.app = app;
this.dispatcher = dispatcher;
this.reactor = reactor;
this.conn = conn;
this.kill_chan = kill_chan;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
dat.reactor.SimpleReactor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__61574__auto__,k__61575__auto__){
var self__ = this;
var this__61574__auto____$1 = this;
return this__61574__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__61575__auto__,null);
});

dat.reactor.SimpleReactor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__61576__auto__,k76207,else__61577__auto__){
var self__ = this;
var this__61576__auto____$1 = this;
var G__76209 = k76207;
var G__76209__$1 = (((G__76209 instanceof cljs.core.Keyword))?G__76209.fqn:null);
switch (G__76209__$1) {
case "app":
return self__.app;

break;
case "dispatcher":
return self__.dispatcher;

break;
case "reactor":
return self__.reactor;

break;
case "conn":
return self__.conn;

break;
case "kill-chan":
return self__.kill_chan;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k76207,else__61577__auto__);

}
});

dat.reactor.SimpleReactor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__61588__auto__,writer__61589__auto__,opts__61590__auto__){
var self__ = this;
var this__61588__auto____$1 = this;
var pr_pair__61591__auto__ = ((function (this__61588__auto____$1){
return (function (keyval__61592__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__61589__auto__,cljs.core.pr_writer,""," ","",opts__61590__auto__,keyval__61592__auto__);
});})(this__61588__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__61589__auto__,pr_pair__61591__auto__,"#dat.reactor.SimpleReactor{",", ","}",opts__61590__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app","app",-560961707),self__.app],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132),self__.dispatcher],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reactor","reactor",535582272),self__.reactor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"conn","conn",278309663),self__.conn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kill-chan","kill-chan",-1563670254),self__.kill_chan],null))], null),self__.__extmap));
});

dat.reactor.SimpleReactor.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

dat.reactor.SimpleReactor.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__76206){
var self__ = this;
var G__76206__$1 = this;
return (new cljs.core.RecordIter((0),G__76206__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132),new cljs.core.Keyword(null,"reactor","reactor",535582272),new cljs.core.Keyword(null,"conn","conn",278309663),new cljs.core.Keyword(null,"kill-chan","kill-chan",-1563670254)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

dat.reactor.SimpleReactor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__61572__auto__){
var self__ = this;
var this__61572__auto____$1 = this;
return self__.__meta;
});

dat.reactor.SimpleReactor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__61568__auto__){
var self__ = this;
var this__61568__auto____$1 = this;
return (new dat.reactor.SimpleReactor(self__.app,self__.dispatcher,self__.reactor,self__.conn,self__.kill_chan,self__.__meta,self__.__extmap,self__.__hash));
});

dat.reactor.SimpleReactor.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__61578__auto__){
var self__ = this;
var this__61578__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

dat.reactor.SimpleReactor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__61569__auto__){
var self__ = this;
var this__61569__auto____$1 = this;
var h__61341__auto__ = self__.__hash;
if(!((h__61341__auto__ == null))){
return h__61341__auto__;
} else {
var h__61341__auto____$1 = cljs.core.hash_imap.call(null,this__61569__auto____$1);
self__.__hash = h__61341__auto____$1;

return h__61341__auto____$1;
}
});

dat.reactor.SimpleReactor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__61570__auto__,other__61571__auto__){
var self__ = this;
var this__61570__auto____$1 = this;
if(cljs.core.truth_((function (){var and__60887__auto__ = other__61571__auto__;
if(cljs.core.truth_(and__60887__auto__)){
return ((this__61570__auto____$1.constructor === other__61571__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__61570__auto____$1,other__61571__auto__));
} else {
return and__60887__auto__;
}
})())){
return true;
} else {
return false;
}
});

dat.reactor.SimpleReactor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__61583__auto__,k__61584__auto__){
var self__ = this;
var this__61583__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"reactor","reactor",535582272),null,new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132),null,new cljs.core.Keyword(null,"kill-chan","kill-chan",-1563670254),null,new cljs.core.Keyword(null,"app","app",-560961707),null,new cljs.core.Keyword(null,"conn","conn",278309663),null], null), null),k__61584__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__61583__auto____$1),self__.__meta),k__61584__auto__);
} else {
return (new dat.reactor.SimpleReactor(self__.app,self__.dispatcher,self__.reactor,self__.conn,self__.kill_chan,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__61584__auto__)),null));
}
});

dat.reactor.SimpleReactor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__61581__auto__,k__61582__auto__,G__76206){
var self__ = this;
var this__61581__auto____$1 = this;
var pred__76210 = cljs.core.keyword_identical_QMARK_;
var expr__76211 = k__61582__auto__;
if(cljs.core.truth_(pred__76210.call(null,new cljs.core.Keyword(null,"app","app",-560961707),expr__76211))){
return (new dat.reactor.SimpleReactor(G__76206,self__.dispatcher,self__.reactor,self__.conn,self__.kill_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__76210.call(null,new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132),expr__76211))){
return (new dat.reactor.SimpleReactor(self__.app,G__76206,self__.reactor,self__.conn,self__.kill_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__76210.call(null,new cljs.core.Keyword(null,"reactor","reactor",535582272),expr__76211))){
return (new dat.reactor.SimpleReactor(self__.app,self__.dispatcher,G__76206,self__.conn,self__.kill_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__76210.call(null,new cljs.core.Keyword(null,"conn","conn",278309663),expr__76211))){
return (new dat.reactor.SimpleReactor(self__.app,self__.dispatcher,self__.reactor,G__76206,self__.kill_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__76210.call(null,new cljs.core.Keyword(null,"kill-chan","kill-chan",-1563670254),expr__76211))){
return (new dat.reactor.SimpleReactor(self__.app,self__.dispatcher,self__.reactor,self__.conn,G__76206,self__.__meta,self__.__extmap,null));
} else {
return (new dat.reactor.SimpleReactor(self__.app,self__.dispatcher,self__.reactor,self__.conn,self__.kill_chan,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__61582__auto__,G__76206),null));
}
}
}
}
}
});

dat.reactor.SimpleReactor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__61586__auto__){
var self__ = this;
var this__61586__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app","app",-560961707),self__.app],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132),self__.dispatcher],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reactor","reactor",535582272),self__.reactor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"conn","conn",278309663),self__.conn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kill-chan","kill-chan",-1563670254),self__.kill_chan],null))], null),self__.__extmap));
});

dat.reactor.SimpleReactor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__61573__auto__,G__76206){
var self__ = this;
var this__61573__auto____$1 = this;
return (new dat.reactor.SimpleReactor(self__.app,self__.dispatcher,self__.reactor,self__.conn,self__.kill_chan,G__76206,self__.__extmap,self__.__hash));
});

dat.reactor.SimpleReactor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__61579__auto__,entry__61580__auto__){
var self__ = this;
var this__61579__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__61580__auto__)){
return this__61579__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__61580__auto__,(0)),cljs.core._nth.call(null,entry__61580__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__61579__auto____$1,entry__61580__auto__);
}
});

dat.reactor.SimpleReactor.prototype.com$stuartsierra$component$Lifecycle$ = cljs.core.PROTOCOL_SENTINEL;

dat.reactor.SimpleReactor.prototype.com$stuartsierra$component$Lifecycle$start$arity$1 = (function (reactor__$1){
var self__ = this;
var reactor__$2 = this;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dat.reactor","/tmp/form-init8382301926859034614.clj",284,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (reactor__$2){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Starting SimpleReactor Component"], null);
});})(reactor__$2))
,null)),null,-679689761);

try{var conn__$1 = (function (){var or__60899__auto__ = self__.conn;
if(cljs.core.truth_(or__60899__auto__)){
return or__60899__auto__;
} else {
var or__60899__auto____$1 = new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(self__.app);
if(cljs.core.truth_(or__60899__auto____$1)){
return or__60899__auto____$1;
} else {
return datascript.core.create_conn.call(null);
}
}
})();
var app__$1 = (function (){var or__60899__auto__ = self__.app;
if(cljs.core.truth_(or__60899__auto__)){
return or__60899__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"conn","conn",278309663),conn__$1,new cljs.core.Keyword(null,"reactor","reactor",535582272),reactor__$2,new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132),self__.dispatcher], null);
}
})();
var reactor__$3 = cljs.core.assoc.call(null,reactor__$2,new cljs.core.Keyword(null,"app","app",-560961707),app__$1,new cljs.core.Keyword(null,"conn","conn",278309663),conn__$1);
var kill_chan__$1 = dat.reactor.go_react_BANG_.call(null,reactor__$3,app__$1);
var reactor__$4 = cljs.core.assoc.call(null,reactor__$3,new cljs.core.Keyword(null,"kill-chan","kill-chan",-1563670254),kill_chan__$1);
return reactor__$4;
}catch (e76213){var e = e76213;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"dat.reactor","/tmp/form-init8382301926859034614.clj",297,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,reactor__$2){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Error starting SimpleReactor:",e], null);
});})(e,reactor__$2))
,null)),null,-575902829);

console.log(e.stack);

return reactor__$2;
}});

dat.reactor.SimpleReactor.prototype.com$stuartsierra$component$Lifecycle$stop$arity$1 = (function (reactor__$1){
var self__ = this;
var reactor__$2 = this;
if(cljs.core.truth_(self__.kill_chan)){
cljs.core.async.put_BANG_.call(null,self__.kill_chan,new cljs.core.Keyword(null,"kill","kill",-12335575));
} else {
}

return reactor__$2;
});

dat.reactor.SimpleReactor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"dispatcher","dispatcher",2093752659,null),new cljs.core.Symbol(null,"reactor","reactor",-2118853497,null),new cljs.core.Symbol(null,"conn","conn",1918841190,null),new cljs.core.Symbol(null,"kill-chan","kill-chan",76861273,null)], null);
});

dat.reactor.SimpleReactor.cljs$lang$type = true;

dat.reactor.SimpleReactor.cljs$lang$ctorPrSeq = (function (this__61610__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"dat.reactor/SimpleReactor");
});

dat.reactor.SimpleReactor.cljs$lang$ctorPrWriter = (function (this__61610__auto__,writer__61611__auto__){
return cljs.core._write.call(null,writer__61611__auto__,"dat.reactor/SimpleReactor");
});

dat.reactor.__GT_SimpleReactor = (function dat$reactor$__GT_SimpleReactor(app,dispatcher,reactor,conn,kill_chan){
return (new dat.reactor.SimpleReactor(app,dispatcher,reactor,conn,kill_chan,null,null,null));
});

dat.reactor.map__GT_SimpleReactor = (function dat$reactor$map__GT_SimpleReactor(G__76208){
return (new dat.reactor.SimpleReactor(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(G__76208),new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132).cljs$core$IFn$_invoke$arity$1(G__76208),new cljs.core.Keyword(null,"reactor","reactor",535582272).cljs$core$IFn$_invoke$arity$1(G__76208),new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(G__76208),new cljs.core.Keyword(null,"kill-chan","kill-chan",-1563670254).cljs$core$IFn$_invoke$arity$1(G__76208),null,cljs.core.dissoc.call(null,G__76208,new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132),new cljs.core.Keyword(null,"reactor","reactor",535582272),new cljs.core.Keyword(null,"conn","conn",278309663),new cljs.core.Keyword(null,"kill-chan","kill-chan",-1563670254)),null));
});

/**
 * If :app is specified, it is reacted on. If not, it is computed as a map of {:dispatcher :reactor :conn}
 */
dat.reactor.new_simple_reactor = (function dat$reactor$new_simple_reactor(var_args){
var args76215 = [];
var len__62120__auto___76218 = arguments.length;
var i__62121__auto___76219 = (0);
while(true){
if((i__62121__auto___76219 < len__62120__auto___76218)){
args76215.push((arguments[i__62121__auto___76219]));

var G__76220 = (i__62121__auto___76219 + (1));
i__62121__auto___76219 = G__76220;
continue;
} else {
}
break;
}

var G__76217 = args76215.length;
switch (G__76217) {
case 1:
return dat.reactor.new_simple_reactor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return dat.reactor.new_simple_reactor.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args76215.length)].join('')));

}
});

dat.reactor.new_simple_reactor.cljs$core$IFn$_invoke$arity$1 = (function (options){
return dat.reactor.map__GT_SimpleReactor.call(null,options);
});

dat.reactor.new_simple_reactor.cljs$core$IFn$_invoke$arity$0 = (function (){
return dat.reactor.new_simple_reactor.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

dat.reactor.new_simple_reactor.cljs$lang$maxFixedArity = 1;


//# sourceMappingURL=reactor.js.map?rel=1506064189818