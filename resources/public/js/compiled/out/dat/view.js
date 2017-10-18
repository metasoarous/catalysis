// Compiled by ClojureScript 1.9.542 {}
goog.provide('dat.view');
goog.require('cljs.core');
goog.require('dat.reactor');
goog.require('dat.reactor.dispatcher');
goog.require('dat.view.representation');
goog.require('dat.view.router');
goog.require('dat.view.utils');
goog.require('dat.view.context');
goog.require('dat.view.query');
goog.require('dat.view.routes');
goog.require('dat.view.settings');
goog.require('dat.spec.protocols');
goog.require('datascript.core');
goog.require('posh.reagent');
goog.require('reagent.core');
goog.require('reagent.ratom');
goog.require('re_com.core');
goog.require('datafrisk.core');
goog.require('taoensso.timbre');
goog.require('com.stuartsierra.component');
goog.require('clojure.walk');
goog.require('goog.date.Date');
goog.require('cljs_time.core');
goog.require('cljs.core.async');
goog.require('cljs.spec.alpha');
goog.require('cljs_time.format');
goog.require('cljs_time.coerce');
goog.require('cljs.pprint');
goog.require('cljs.core.match');
goog.require('markdown.core');
goog.require('dat.view.styles');
goog.require('re_com.input_time');
/**
 * Maps args `[app context data]` to a representation (hiccup, most likely) as dispatched by (first context). Representations can
 *   be added via register-representation.
 * 
 *   Note: State is currently in a var in dat.view.representation; There will maybe eventually be a default such, but it
 *   would be good to make it possible to not do that.
 */
dat.view.represent = dat.view.representation.represent;
/**
 * Registers a representation function (maping of args args `[app context data]` to a view representation) for a given
 *   context-id (the first value of `context := [context-id context-data]`). as dispatched by (first context). Representations can
 *   be added via register-representation.
 * 
 *   Note: State is currently in a var in dat.view.representation; There will maybe eventually be a default such, but it
 *   would be good to manage the state yourself.
 */
dat.view.register_representation = dat.view.representation.register_representation;
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("dat.view","event-id","dat.view/event-id",-148668634),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Symbol("cljs.core","namespace","cljs.core/namespace",1653264270,null)),cljs.spec.alpha.and_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Symbol("cljs.core","namespace","cljs.core/namespace",1653264270,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword_QMARK_,cljs.core.namespace], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("dat.view","event","dat.view/event",974402686),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"event-id","event-id",2130210178),new cljs.core.Keyword("dat.view","event-id","dat.view/event-id",-148668634),new cljs.core.Keyword(null,"event-data","event-data",-1726012139),cljs.core.list(new cljs.core.Symbol("cljs.core","constantly","cljs.core/constantly",119002258,null),true))),cljs.spec.alpha.and_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"event-id","event-id",2130210178),new cljs.core.Keyword("dat.view","event-id","dat.view/event-id",-148668634),new cljs.core.Keyword(null,"event-data","event-data",-1726012139),cljs.core.list(new cljs.core.Symbol("cljs.core","constantly","cljs.core/constantly",119002258,null),true))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vector_QMARK_,cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event-id","event-id",2130210178),new cljs.core.Keyword(null,"event-data","event-data",-1726012139)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.view","event-id","dat.view/event-id",-148668634),cljs.core.constantly.call(null,true)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.view","event-id","dat.view/event-id",-148668634),cljs.core.list(new cljs.core.Symbol("cljs.core","constantly","cljs.core/constantly",119002258,null),true)], null))], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("dat.view","conn","dat.view/conn",2021265851),new cljs.core.Symbol("datascript.core","conn?","datascript.core/conn?",-1070052590,null),datascript.core.conn_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("dat.view","dispatcher","dat.view/dispatcher",-1289221968),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","satisfies?","cljs.core/satisfies?",-1074798682,null),new cljs.core.Symbol("dat.spec.protocols","PDispatcher","dat.spec.protocols/PDispatcher",1738673943,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),(function (p1__87518_SHARP_){
if(!((p1__87518_SHARP_ == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === p1__87518_SHARP_.dat$spec$protocols$PDispatcher$))){
return true;
} else {
if((!p1__87518_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,dat.spec.protocols.PDispatcher,p1__87518_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,dat.spec.protocols.PDispatcher,p1__87518_SHARP_);
}
}));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("dat.view","base-context","dat.view/base-context",1813985899),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("dat.view","remote","dat.view/remote",945380636),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__87520#","p1__87520#",-635356327,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","satisfies?","cljs.core/satisfies?",-1074798682,null),new cljs.core.Symbol("dat.spec.protocols","PRemoteSendEvent","dat.spec.protocols/PRemoteSendEvent",-152836058,null),new cljs.core.Symbol(null,"p1__87520#","p1__87520#",-635356327,null))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__87521#","p1__87521#",2073312562,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","satisfies?","cljs.core/satisfies?",-1074798682,null),new cljs.core.Symbol("dat.spec.protocols","PRemoteEventChan","dat.spec.protocols/PRemoteEventChan",1355169249,null),new cljs.core.Symbol(null,"p1__87521#","p1__87521#",2073312562,null)))),cljs.spec.alpha.and_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","satisfies?","cljs.core/satisfies?",-1074798682,null),new cljs.core.Symbol("dat.spec.protocols","PRemoteSendEvent","dat.spec.protocols/PRemoteSendEvent",-152836058,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","satisfies?","cljs.core/satisfies?",-1074798682,null),new cljs.core.Symbol("dat.spec.protocols","PRemoteEventChan","dat.spec.protocols/PRemoteEventChan",1355169249,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (p1__87520_SHARP_){
if(!((p1__87520_SHARP_ == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === p1__87520_SHARP_.dat$spec$protocols$PRemoteSendEvent$))){
return true;
} else {
if((!p1__87520_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,dat.spec.protocols.PRemoteSendEvent,p1__87520_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,dat.spec.protocols.PRemoteSendEvent,p1__87520_SHARP_);
}
}),(function (p1__87521_SHARP_){
if(!((p1__87521_SHARP_ == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === p1__87521_SHARP_.dat$spec$protocols$PRemoteEventChan$))){
return true;
} else {
if((!p1__87521_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,dat.spec.protocols.PRemoteEventChan,p1__87521_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,dat.spec.protocols.PRemoteEventChan,p1__87521_SHARP_);
}
})], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("dat.view","app","dat.view/app",-2035101391),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.view","conn","dat.view/conn",2021265851),new cljs.core.Keyword("dat.view","dispatcher","dat.view/dispatcher",-1289221968),new cljs.core.Keyword("dat.view","base-context","dat.view/base-context",1813985899)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.view","remote","dat.view/remote",945380636)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.view","conn","dat.view/conn",2021265851),new cljs.core.Keyword("dat.view","dispatcher","dat.view/dispatcher",-1289221968),new cljs.core.Keyword("dat.view","base-context","dat.view/base-context",1813985899)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.view","remote","dat.view/remote",945380636)], null),null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__87524){
return cljs.core.map_QMARK_.call(null,G__87524);
}),(function (G__87524){
return cljs.core.contains_QMARK_.call(null,G__87524,new cljs.core.Keyword(null,"conn","conn",278309663));
}),(function (G__87524){
return cljs.core.contains_QMARK_.call(null,G__87524,new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132));
}),(function (G__87524){
return cljs.core.contains_QMARK_.call(null,G__87524,new cljs.core.Keyword(null,"base-context","base-context",66708423));
})], null),(function (G__87524){
return (cljs.core.map_QMARK_.call(null,G__87524)) && (cljs.core.contains_QMARK_.call(null,G__87524,new cljs.core.Keyword(null,"conn","conn",278309663))) && (cljs.core.contains_QMARK_.call(null,G__87524,new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132))) && (cljs.core.contains_QMARK_.call(null,G__87524,new cljs.core.Keyword(null,"base-context","base-context",66708423)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remote","remote",-1593576576)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.view","conn","dat.view/conn",2021265851),new cljs.core.Keyword("dat.view","dispatcher","dat.view/dispatcher",-1289221968),new cljs.core.Keyword("dat.view","base-context","dat.view/base-context",1813985899)], null),null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"conn","conn",278309663),new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132),new cljs.core.Keyword(null,"base-context","base-context",66708423)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.view","remote","dat.view/remote",945380636)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"conn","conn",278309663))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"base-context","base-context",66708423)))], null),null])));
dat.view.dispatch_BANG_ = (function dat$view$dispatch_BANG_(var_args){
var args87525 = [];
var len__62120__auto___87528 = arguments.length;
var i__62121__auto___87529 = (0);
while(true){
if((i__62121__auto___87529 < len__62120__auto___87528)){
args87525.push((arguments[i__62121__auto___87529]));

var G__87530 = (i__62121__auto___87529 + (1));
i__62121__auto___87529 = G__87530;
continue;
} else {
}
break;
}

var G__87527 = args87525.length;
switch (G__87527) {
case 2:
return dat.view.dispatch_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dat.view.dispatch_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args87525.length)].join('')));

}
});

dat.view.dispatch_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app,event){
return dat.reactor.dispatcher.dispatch_BANG_.call(null,new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132).cljs$core$IFn$_invoke$arity$1(app),event);
});

dat.view.dispatch_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (app,event,level){
return dat.reactor.dispatcher.dispatch_BANG_.call(null,new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132).cljs$core$IFn$_invoke$arity$1(app),event,level);
});

dat.view.dispatch_BANG_.cljs$lang$maxFixedArity = 3;

cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("dat.view","dispatch-args","dat.view/dispatch-args",-324168925),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword("dat.view","app","dat.view/app",-2035101391),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("dat.view","event","dat.view/event",974402686),new cljs.core.Keyword(null,"level","level",1290497552),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null))),cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"level","level",1290497552)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.view","app","dat.view/app",-2035101391),new cljs.core.Keyword("dat.view","event","dat.view/event",974402686),cljs.spec.alpha.maybe_impl.call(null,cljs.core.keyword_QMARK_,new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.view","app","dat.view/app",-2035101391),new cljs.core.Keyword("dat.view","event","dat.view/event",974402686),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null))], null)));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Symbol("dat.view","dispatch!","dat.view/dispatch!",1992765923,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword("dat.view","dispatch-args","dat.view/dispatch-args",-324168925),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.list(new cljs.core.Symbol("cljs.core","constantly","cljs.core/constantly",119002258,null),true)),cljs.spec.alpha.fspec_impl.call(null,cljs.spec.alpha.spec_impl.call(null,new cljs.core.Keyword("dat.view","dispatch-args","dat.view/dispatch-args",-324168925),new cljs.core.Keyword("dat.view","dispatch-args","dat.view/dispatch-args",-324168925),null,null),new cljs.core.Keyword("dat.view","dispatch-args","dat.view/dispatch-args",-324168925),cljs.spec.alpha.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.core","constantly","cljs.core/constantly",119002258,null),true),cljs.core.constantly.call(null,true),null,null),cljs.core.list(new cljs.core.Symbol("cljs.core","constantly","cljs.core/constantly",119002258,null),true),null,null,null));
dat.view.dispatch_error_BANG_ = (function dat$view$dispatch_error_BANG_(app,event){
return dat.reactor.dispatcher.dispatch_error_BANG_.call(null,new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132).cljs$core$IFn$_invoke$arity$1(app),event);
});
cljs.spec.alpha.def_impl.call(null,new cljs.core.Symbol("dat.view","dispatch-error!","dat.view/dispatch-error!",-834420944,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword("dat.view","app","dat.view/app",-2035101391),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("dat.view","event","dat.view/event",974402686)),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.list(new cljs.core.Symbol("cljs.core","constantly","cljs.core/constantly",119002258,null),true)),cljs.spec.alpha.fspec_impl.call(null,cljs.spec.alpha.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword("dat.view","app","dat.view/app",-2035101391),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("dat.view","event","dat.view/event",974402686)),cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"event","event",301435442)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.view","app","dat.view/app",-2035101391),new cljs.core.Keyword("dat.view","event","dat.view/event",974402686)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.view","app","dat.view/app",-2035101391),new cljs.core.Keyword("dat.view","event","dat.view/event",974402686)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword("dat.view","app","dat.view/app",-2035101391),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("dat.view","event","dat.view/event",974402686)),cljs.spec.alpha.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.core","constantly","cljs.core/constantly",119002258,null),true),cljs.core.constantly.call(null,true),null,null),cljs.core.list(new cljs.core.Symbol("cljs.core","constantly","cljs.core/constantly",119002258,null),true),null,null,null));
/**
 * DEPRECATED: Helper function for dispatching tx messages to server.
 */
dat.view.send_tx_BANG_ = (function dat$view$send_tx_BANG_(app,tx_forms){
return dat.view.dispatch_BANG_.call(null,app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.sync.client","send-remote-tx","dat.sync.client/send-remote-tx",-648888103),tx_forms], null));
});
/**
 * DEPRECATED
 */
dat.view.send_remote_event_BANG_ = (function dat$view$send_remote_event_BANG_(app,remote_event){
return dat.view.dispatch_BANG_.call(null,app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.remote","send-event!","dat.remote/send-event!",934871644),remote_event], null));
});
dat.view.global_tx_BANG_ = (function dat$view$global_tx_BANG_(app,txs){
return dat.view.dispatch_BANG_.call(null,app,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("dat.sync","event","dat.sync/event",974460040),new cljs.core.Keyword("dat.sync","tx","dat.sync/tx",-1195991452),new cljs.core.Keyword(null,"txs","txs",2056038378),txs], null));
});
dat.view.box_styles = dat.view.styles.box_styles;
dat.view.h_box_styles = dat.view.styles.h_box_styles;
dat.view.v_box_styles = dat.view.styles.v_box_styles;
dat.view.bordered_box_style = dat.view.styles.bordered_box_style;
/**
 * Prefers children over child
 */
dat.view.box = (function dat$view$box(p__87532){
var map__87535 = p__87532;
var map__87535__$1 = ((((!((map__87535 == null)))?((((map__87535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87535.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__87535):map__87535);
var args = map__87535__$1;
var style = cljs.core.get.call(null,map__87535__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var children = cljs.core.get.call(null,map__87535__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var child = cljs.core.get.call(null,map__87535__$1,new cljs.core.Keyword(null,"child","child",623967545));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,dat.view.box_styles,style)], null),(function (){var or__60899__auto__ = cljs.core.seq.call(null,children);
if(or__60899__auto__){
return or__60899__auto__;
} else {
return child;
}
})()], null);
});
dat.view.debug_str = (function dat$view$debug_str(var_args){
var args87537 = [];
var len__62120__auto___87542 = arguments.length;
var i__62121__auto___87543 = (0);
while(true){
if((i__62121__auto___87543 < len__62120__auto___87542)){
args87537.push((arguments[i__62121__auto___87543]));

var G__87544 = (i__62121__auto___87543 + (1));
i__62121__auto___87543 = G__87544;
continue;
} else {
}
break;
}

var G__87539 = args87537.length;
switch (G__87539) {
case 2:
return dat.view.debug_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dat.view.debug_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args87537.length)].join('')));

}
});

dat.view.debug_str.cljs$core$IFn$_invoke$arity$2 = (function (message,data){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(message),cljs.core.str.cljs$core$IFn$_invoke$arity$1(dat.view.debug_str.call(null,data))].join('');
});

dat.view.debug_str.cljs$core$IFn$_invoke$arity$1 = (function (data){
var sb__61991__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_87540_87546 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_87541_87547 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_87540_87546,_STAR_print_fn_STAR_87541_87547,sb__61991__auto__){
return (function (x__61992__auto__){
return sb__61991__auto__.append(x__61992__auto__);
});})(_STAR_print_newline_STAR_87540_87546,_STAR_print_fn_STAR_87541_87547,sb__61991__auto__))
;

try{cljs.pprint.pprint.call(null,data);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_87541_87547;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_87540_87546;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__61991__auto__)].join('');
});

dat.view.debug_str.cljs$lang$maxFixedArity = 2;

dat.view.debug = (function dat$view$debug(var_args){
var args87548 = [];
var len__62120__auto___87551 = arguments.length;
var i__62121__auto___87552 = (0);
while(true){
if((i__62121__auto___87552 < len__62120__auto___87551)){
args87548.push((arguments[i__62121__auto___87552]));

var G__87553 = (i__62121__auto___87552 + (1));
i__62121__auto___87552 = G__87553;
continue;
} else {
}
break;
}

var G__87550 = args87548.length;
switch (G__87550) {
case 2:
return dat.view.debug.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dat.view.debug.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args87548.length)].join('')));

}
});

dat.view.debug.cljs$core$IFn$_invoke$arity$2 = (function (message,data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.debug","div.debug",-1545042863),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),message], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"max-height","max-height",-612563804),"300px",new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"auto"], null)], null),dat.view.debug_str.call(null,data)], null)], null);
});

dat.view.debug.cljs$core$IFn$_invoke$arity$1 = (function (data){
return dat.view.debug.call(null,"",data);
});

dat.view.debug.cljs$lang$maxFixedArity = 2;

dat.view.representation.register_representation.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,context,data){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"No representation for:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dat.view.debug,"context:",context], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dat.view.debug,"data:",data], null)], null);
}));
dat.view.base_pull = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._STAR_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("e","type","e/type",1174270209),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._STAR_], null)], null)], null);
dat.view.deref_or_value = dat.view.utils.deref_or_value;
dat.view.deep_merge = dat.view.utils.deep_merge;
dat.view.as_reaction = dat.view.utils.as_reaction;
dat.view.safe_q = dat.view.utils.safe_q;
dat.view.pull_many = dat.view.utils.pull_many;
dat.view.pull_attr = dat.view.utils.pull_attr;
dat.view.pull_path = dat.view.utils.pull_path;
dat.view.default_base_context = dat.view.context.default_base_context;
dat.view.base_context = dat.view.context.base_context;
dat.view.update_base_context_BANG_ = dat.view.context.update_base_context_BANG_;
dat.view.set_base_context_BANG_ = dat.view.context.set_base_context_BANG_;
dat.view.attr_signature_reaction = dat.view.context.attr_signature_reaction;
dat.view.attribute_schema_reaction = dat.view.context.attribute_schema_reaction;
dat.view.component_context = dat.view.context.component_context;
dat.view.base_schema = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("dat.view.base-context","value","dat.view.base-context/value",1527769668),cljs.core.PersistentArrayMap.EMPTY], null);
dat.view.default_settings = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("dat.view","base-context","dat.view/base-context",1813985899),new cljs.core.Keyword("dat.view.base-context","value","dat.view.base-context/value",1527769668),cljs.core.PersistentArrayMap.EMPTY], null)], null);
dat.view.loading_notification = (function dat$view$loading_notification(message){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center"], null),new cljs.core.Keyword(null,"gap","gap",80255254),"15px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),message], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.throbber,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"large","large",-196820544)], null)], null)], null);
});
/**
 * A collapse button for hiding information; arg collapse? should be a bool or an ratom thereof.
 *   If no click handler is specified, toggles the atom.
 */
dat.view.collapse_button = (function dat$view$collapse_button(var_args){
var args87555 = [];
var len__62120__auto___87561 = arguments.length;
var i__62121__auto___87562 = (0);
while(true){
if((i__62121__auto___87562 < len__62120__auto___87561)){
args87555.push((arguments[i__62121__auto___87562]));

var G__87563 = (i__62121__auto___87562 + (1));
i__62121__auto___87562 = G__87563;
continue;
} else {
}
break;
}

var G__87557 = args87555.length;
switch (G__87557) {
case 2:
return dat.view.collapse_button.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dat.view.collapse_button.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args87555.length)].join('')));

}
});

dat.view.collapse_button.cljs$core$IFn$_invoke$arity$2 = (function (collapse_QMARK_,on_click_fn){
var vec__87558 = (cljs.core.truth_(dat.view.utils.deref_or_value.call(null,collapse_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zmdi-caret-right","Expand collection"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zmdi-caret-down","Hide collection"], null));
var icon_name = cljs.core.nth.call(null,vec__87558,(0),null);
var tooltip = cljs.core.nth.call(null,vec__87558,(1),null);
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_icon_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),icon_name,new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),tooltip,new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click_fn], null);
});

dat.view.collapse_button.cljs$core$IFn$_invoke$arity$1 = (function (collapse_QMARK_){
return dat.view.collapse_button.call(null,collapse_QMARK_,(function (){
return cljs.core.swap_BANG_.call(null,collapse_QMARK_,cljs.core.not);
}));
});

dat.view.collapse_button.cljs$lang$maxFixedArity = 2;

dat.view.pull_summary_string = (function dat$view$pull_summary_string(pull_data){
try{if(((!((pull_data == null)))?((((pull_data.cljs$lang$protocol_mask$partition0$ & (256))) || ((cljs.core.PROTOCOL_SENTINEL === pull_data.cljs$core$ILookup$)))?true:(((!pull_data.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,pull_data):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,pull_data))){
try{var pull_data_name__87600 = cljs.core.get.call(null,pull_data,new cljs.core.Keyword("e","name","e/name",1843675300),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.call(null,pull_data_name__87600,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
var name = cljs.core.get.call(null,pull_data,new cljs.core.Keyword("e","name","e/name",1843675300));
return name;
} else {
throw cljs.core.match.backtrack;

}
}catch (e87611){if((e87611 instanceof Error)){
var e__37574__auto__ = e87611;
if((e__37574__auto__ === cljs.core.match.backtrack)){
try{var pull_data_label__87601 = cljs.core.get.call(null,pull_data,new cljs.core.Keyword("attribute","label","attribute/label",1739207376),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.call(null,pull_data_label__87601,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
var label = cljs.core.get.call(null,pull_data,new cljs.core.Keyword("attribute","label","attribute/label",1739207376));
return label;
} else {
throw cljs.core.match.backtrack;

}
}catch (e87612){if((e87612 instanceof Error)){
var e__37574__auto____$1 = e87612;
if((e__37574__auto____$1 === cljs.core.match.backtrack)){
try{var pull_data_type__87599 = cljs.core.get.call(null,pull_data,new cljs.core.Keyword("e","type","e/type",1174270209),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(((!((pull_data_type__87599 == null)))?((((pull_data_type__87599.cljs$lang$protocol_mask$partition0$ & (256))) || ((cljs.core.PROTOCOL_SENTINEL === pull_data_type__87599.cljs$core$ILookup$)))?true:(((!pull_data_type__87599.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,pull_data_type__87599):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,pull_data_type__87599))){
try{var pull_data_type__87599_ident__87605 = cljs.core.get.call(null,pull_data_type__87599,new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,pull_data_type__87599_ident__87605,new cljs.core.Keyword("e.type","Type","e.type/Type",1148833992))){
try{var pull_data_ident__87602 = cljs.core.get.call(null,pull_data,new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.call(null,pull_data_ident__87602,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
var ident = cljs.core.get.call(null,pull_data,new cljs.core.Keyword("db","ident","db/ident",-737096));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,ident)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" Type")].join('');
} else {
throw cljs.core.match.backtrack;

}
}catch (e87620){if((e87620 instanceof Error)){
var e__37574__auto____$2 = e87620;
if((e__37574__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37574__auto____$2;
}
} else {
throw e87620;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e87619){if((e87619 instanceof Error)){
var e__37574__auto____$2 = e87619;
if((e__37574__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37574__auto____$2;
}
} else {
throw e87619;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e87613){if((e87613 instanceof Error)){
var e__37574__auto____$2 = e87613;
if((e__37574__auto____$2 === cljs.core.match.backtrack)){
try{var pull_data_ident__87602 = cljs.core.get.call(null,pull_data,new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.call(null,pull_data_ident__87602,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
var ident = cljs.core.get.call(null,pull_data,new cljs.core.Keyword("db","ident","db/ident",-737096));
return cljs.core.name.call(null,ident);
} else {
throw cljs.core.match.backtrack;

}
}catch (e87614){if((e87614 instanceof Error)){
var e__37574__auto____$3 = e87614;
if((e__37574__auto____$3 === cljs.core.match.backtrack)){
try{var pull_data_type__87599 = cljs.core.get.call(null,pull_data,new cljs.core.Keyword("e","type","e/type",1174270209),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(((!((pull_data_type__87599 == null)))?((((pull_data_type__87599.cljs$lang$protocol_mask$partition0$ & (256))) || ((cljs.core.PROTOCOL_SENTINEL === pull_data_type__87599.cljs$core$ILookup$)))?true:(((!pull_data_type__87599.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,pull_data_type__87599):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,pull_data_type__87599))){
try{var pull_data_type__87599_ident__87608 = cljs.core.get.call(null,pull_data_type__87599,new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.call(null,pull_data_type__87599_ident__87608,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
var type_ident = cljs.core.get.call(null,pull_data_type__87599,new cljs.core.Keyword("db","ident","db/ident",-737096));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,type_ident)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" instance")].join('');
} else {
throw cljs.core.match.backtrack;

}
}catch (e87617){if((e87617 instanceof Error)){
var e__37574__auto____$4 = e87617;
if((e__37574__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37574__auto____$4;
}
} else {
throw e87617;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e87615){if((e87615 instanceof Error)){
var e__37574__auto____$4 = e87615;
if((e__37574__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37574__auto____$4;
}
} else {
throw e87615;

}
}} else {
throw e__37574__auto____$3;
}
} else {
throw e87614;

}
}} else {
throw e__37574__auto____$2;
}
} else {
throw e87613;

}
}} else {
throw e__37574__auto____$1;
}
} else {
throw e87612;

}
}} else {
throw e__37574__auto__;
}
} else {
throw e87611;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e87609){if((e87609 instanceof Error)){
var e__37574__auto__ = e87609;
if((e__37574__auto__ === cljs.core.match.backtrack)){
return cljs.core.pr_str.call(null,pull_data);
} else {
throw e__37574__auto__;
}
} else {
throw e87609;

}
}});
dat.view.representation.register_representation.call(null,new cljs.core.Keyword("dat.view","pull-summary-string","dat.view/pull-summary-string",-1756715240),(function (_,___$1,pull_data){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),dat.view.pull_summary_string.call(null,pull_data)], null);
}));
dat.view.representation.register_representation.call(null,new cljs.core.Keyword("dat.view","pull-summary-view","dat.view/pull-summary-view",-546204668),(function (app,p__87621,pull_data){
var vec__87622 = p__87621;
var _ = cljs.core.nth.call(null,vec__87622,(0),null);
var context = cljs.core.nth.call(null,vec__87622,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword("dom","attrs","dom/attrs",-2091026283).cljs$core$IFn$_invoke$arity$1(context),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dat.view.represent,app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.view","pull-summary-string","dat.view/pull-summary-string",-1756715240),new cljs.core.Keyword("dat.view.context","locals","dat.view.context/locals",2099213948).cljs$core$IFn$_invoke$arity$1(context)], null),pull_data], null)], null);
}));
dat.view.pull_summary_view = (function dat$view$pull_summary_view(app,context,pull_data){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dat.view.represent,app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.view","pull-summary-view","dat.view/pull-summary-view",-546204668),new cljs.core.Keyword("dat.view.context","locals","dat.view.context/locals",2099213948).cljs$core$IFn$_invoke$arity$1(context)], null),pull_data], null);
});
dat.view.representation.register_representation.call(null,new cljs.core.Keyword("dat.view","collapse-summary","dat.view/collapse-summary",-1988549137),(function (app,p__87625,values){
var vec__87626 = p__87625;
var _ = cljs.core.nth.call(null,vec__87626,(0),null);
var context = cljs.core.nth.call(null,vec__87626,(1),null);
var local_context = new cljs.core.Keyword("dat.view.context","locals","dat.view.context/locals",2099213948).cljs$core$IFn$_invoke$arity$1(context);
if(cljs.core.map_QMARK_.call(null,values)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dat.view.represent,app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.view","pull-summary-view","dat.view/pull-summary-view",-546204668),local_context], null),values], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,dat.view.h_box_styles,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"10px"], null))], null),(function (){var iter__61761__auto__ = ((function (local_context,vec__87626,_,context){
return (function dat$view$iter__87629(s__87630){
return (new cljs.core.LazySeq(null,((function (local_context,vec__87626,_,context){
return (function (){
var s__87630__$1 = s__87630;
while(true){
var temp__6738__auto__ = cljs.core.seq.call(null,s__87630__$1);
if(temp__6738__auto__){
var s__87630__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__87630__$2)){
var c__61759__auto__ = cljs.core.chunk_first.call(null,s__87630__$2);
var size__61760__auto__ = cljs.core.count.call(null,c__61759__auto__);
var b__87632 = cljs.core.chunk_buffer.call(null,size__61760__auto__);
if((function (){var i__87631 = (0);
while(true){
if((i__87631 < size__61760__auto__)){
var value = cljs.core._nth.call(null,c__61759__auto__,i__87631);
cljs.core.chunk_append.call(null,b__87632,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dat.view.represent,app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.view","pull-summary-view","dat.view/pull-summary-view",-546204668),local_context], null),value], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.hash.call(null,value)], null)));

var G__87633 = (i__87631 + (1));
i__87631 = G__87633;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__87632),dat$view$iter__87629.call(null,cljs.core.chunk_rest.call(null,s__87630__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__87632),null);
}
} else {
var value = cljs.core.first.call(null,s__87630__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dat.view.represent,app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.view","pull-summary-view","dat.view/pull-summary-view",-546204668),local_context], null),value], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.hash.call(null,value)], null)),dat$view$iter__87629.call(null,cljs.core.rest.call(null,s__87630__$2)));
}
} else {
return null;
}
break;
}
});})(local_context,vec__87626,_,context))
,null,null));
});})(local_context,vec__87626,_,context))
;
return iter__61761__auto__.call(null,values);
})()], null);
}
}));
dat.view.collapse_summary = (function dat$view$collapse_summary(app,context,values){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dat.view.represent,app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.view","collapse-summary","dat.view/collapse-summary",-1988549137),new cljs.core.Keyword("dat.view.context","locals","dat.view.context/locals",2099213948).cljs$core$IFn$_invoke$arity$1(context)], null),values], null);
});
dat.view.lablify_attr_ident = (function dat$view$lablify_attr_ident(attr_ident){
var vec__87637 = clojure.string.split.call(null,cljs.core.name.call(null,attr_ident),/-/);
var seq__87638 = cljs.core.seq.call(null,vec__87637);
var first__87639 = cljs.core.first.call(null,seq__87638);
var seq__87638__$1 = cljs.core.next.call(null,seq__87638);
var x = first__87639;
var xs = seq__87638__$1;
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.capitalize.call(null,x)], null),xs));
});
dat.view.label_styles = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold"], null);
dat.view.representation.register_representation.call(null,new cljs.core.Keyword("dat.view","label-view","dat.view/label-view",1771521843),(function (app,_,attr_ident){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_(attr_ident)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"style","style",-496642736),dat.view.label_styles,new cljs.core.Keyword(null,"label","label",1718410804),(function (){var or__60899__auto__ = ((cljs.core._EQ_.call(null,attr_ident,new cljs.core.Keyword("db","id","db/id",-1388397098)))?"DB ID":null);
if(cljs.core.truth_(or__60899__auto__)){
return or__60899__auto__;
} else {
var or__60899__auto____$1 = new cljs.core.Keyword("attribute","label","attribute/label",1739207376).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,posh.reagent.pull.call(null,new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(app),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("attribute","label","attribute/label",1739207376)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096),attr_ident], null))));
if(cljs.core.truth_(or__60899__auto____$1)){
return or__60899__auto____$1;
} else {
return dat.view.lablify_attr_ident.call(null,attr_ident);
}
}
})()], null):null)], null);
}));
/**
 * For a given attr-ident, render a label for that attribute.
 */
dat.view.label_view = (function dat$view$label_view(var_args){
var args87640 = [];
var len__62120__auto___87643 = arguments.length;
var i__62121__auto___87644 = (0);
while(true){
if((i__62121__auto___87644 < len__62120__auto___87643)){
args87640.push((arguments[i__62121__auto___87644]));

var G__87645 = (i__62121__auto___87644 + (1));
i__62121__auto___87644 = G__87645;
continue;
} else {
}
break;
}

var G__87642 = args87640.length;
switch (G__87642) {
case 3:
return dat.view.label_view.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dat.view.label_view.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args87640.length)].join('')));

}
});

dat.view.label_view.cljs$core$IFn$_invoke$arity$3 = (function (app,context,attr_ident){
var local_context = new cljs.core.Keyword("dat.view.context","locals","dat.view.context/locals",2099213948).cljs$core$IFn$_invoke$arity$1(context);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dat.view.represent,app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.view","label-view","dat.view/label-view",1771521843),local_context], null),attr_ident], null);
});

dat.view.label_view.cljs$core$IFn$_invoke$arity$2 = (function (app,attr_ident){
return dat.view.label_view.call(null,app,cljs.core.PersistentArrayMap.EMPTY,attr_ident);
});

dat.view.label_view.cljs$lang$maxFixedArity = 3;

dat.view.get_nested_pull_expr = (function dat$view$get_nested_pull_expr(pull_expr,attr_ident){
var or__60899__auto__ = cljs.core.some.call(null,(function (attr_entry){
if(((attr_entry instanceof cljs.core.Keyword)) && (cljs.core._EQ_.call(null,attr_entry,attr_ident))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
} else {
if(cljs.core.truth_((function (){var and__60887__auto__ = cljs.core.map_QMARK_.call(null,attr_entry);
if(and__60887__auto__){
return cljs.core.get.call(null,attr_entry,attr_ident);
} else {
return and__60887__auto__;
}
})())){
return cljs.core.get.call(null,attr_entry,attr_ident);
} else {
return false;

}
}
}),pull_expr);
if(cljs.core.truth_(or__60899__auto__)){
return or__60899__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
}
});
dat.view.representation.register_representation.call(null,new cljs.core.Keyword("dat.view","copy-entity-control","dat.view/copy-entity-control",-852239595),(function (app,_,pull_data){
var pull_data__$1 = dat.view.utils.deref_or_value.call(null,pull_data);
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_icon_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi-copy",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"smaller","smaller",-1619801498),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"10px"], null),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),"Copy entity",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (pull_data__$1){
return (function (){
return alert("Coming soon to a database application near you");
});})(pull_data__$1))
], null);
}));
dat.view.representation.register_representation.call(null,new cljs.core.Keyword("dat.view","edit-entity-control","dat.view/edit-entity-control",585020520),(function (app,p__87647,pull_data){
var vec__87648 = p__87647;
var _ = cljs.core.nth.call(null,vec__87648,(0),null);
var context = cljs.core.nth.call(null,vec__87648,(1),null);
var pull_data__$1 = dat.view.utils.deref_or_value.call(null,pull_data);
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_icon_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi-edit",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"10px"], null),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"smaller","smaller",-1619801498),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),"Edit entity",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (pull_data__$1,vec__87648,_,context){
return (function (){
return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword("dat.view","edit?","dat.view/edit?",1975627254).cljs$core$IFn$_invoke$arity$1(context),cljs.core.not);
});})(pull_data__$1,vec__87648,_,context))
], null);
}));
/**
 * DEPRECATED
 */
dat.view.get_remote_eid = (function dat$view$get_remote_eid(app,eid){
return cljs.core.deref.call(null,dat.view.pull_attr.call(null,new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(app),eid,new cljs.core.Keyword("dat.sync.remote.db","id","dat.sync.remote.db/id",-1585153142)));
});
/**
 * DEPRECATED
 */
dat.view.delete_entity_handler_STAR_ = (function dat$view$delete_entity_handler_STAR_(app,eid){
if(cljs.core.truth_(confirm("Delete entity?"))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dat.view","/tmp/form-init8382301926859034614.clj",410,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Deleting entity:",eid], null);
}),null)),null,1152039361);

var temp__6736__auto__ = dat.view.get_remote_eid.call(null,app,eid);
if(cljs.core.truth_(temp__6736__auto__)){
var remote_eid = temp__6736__auto__;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"dat.view","/tmp/form-init8382301926859034614.clj",413,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (remote_eid,temp__6736__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Deleting entity (remote-eid):",remote_eid], null);
});})(remote_eid,temp__6736__auto__))
,null)),null,-998486315);

return dat.view.send_remote_event_BANG_.call(null,app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.sync.remote","tx","dat.sync.remote/tx",1131820532),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441),remote_eid], null)], null)], null));
} else {
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"dat.view","/tmp/form-init8382301926859034614.clj",415,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (temp__6736__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unable to find remote db id for entity",datascript.core.pull.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(app)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),eid)], null);
});})(temp__6736__auto__))
,null)),null,-2101608811);
}
} else {
return null;
}
});
dat.view.delete_entity_handler2_STAR_ = (function dat$view$delete_entity_handler2_STAR_(app,eid){
if(cljs.core.truth_(confirm("Delete entity?"))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dat.view","/tmp/form-init8382301926859034614.clj",420,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Deleting entity:",eid], null);
}),null)),null,-1349877777);

return dat.view.global_tx_BANG_.call(null,app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441),eid], null)], null));
} else {
return null;
}
});
dat.view.delete_entity_handler = (function dat$view$delete_entity_handler(app,eid){
return dat.view.delete_entity_handler2_STAR_.call(null,app,eid);
});
dat.view.representation.register_representation.call(null,new cljs.core.Keyword("dat.view","delete-entity-control","dat.view/delete-entity-control",-2105401663),(function (app,_,data){
var eid = ((cljs.core.map_QMARK_.call(null,data))?new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(data):data);
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_icon_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi-delete",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"smaller","smaller",-1619801498),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),"Delete entity",new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.partial.call(null,dat.view.delete_entity_handler,app,eid)], null);
}));
dat.view.component_controls = (function dat$view$component_controls(context){
return new cljs.core.Keyword("dat.view","controls","dat.view/controls",2009457336).cljs$core$IFn$_invoke$arity$1(context);
});
dat.view.representation.register_representation.call(null,new cljs.core.Keyword("dat.view","control-set","dat.view/control-set",587644972),(function (app,p__87651,data){
var vec__87652 = p__87651;
var _ = cljs.core.nth.call(null,vec__87652,(0),null);
var context = cljs.core.nth.call(null,vec__87652,(1),null);
var local_context = new cljs.core.Keyword("dat.view.context","locals","dat.view.context/locals",2099213948).cljs$core$IFn$_invoke$arity$1(context);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword("dom","attrs","dom/attrs",-2091026283).cljs$core$IFn$_invoke$arity$1(context),(function (){var iter__61761__auto__ = ((function (local_context,vec__87652,_,context){
return (function dat$view$iter__87655(s__87656){
return (new cljs.core.LazySeq(null,((function (local_context,vec__87652,_,context){
return (function (){
var s__87656__$1 = s__87656;
while(true){
var temp__6738__auto__ = cljs.core.seq.call(null,s__87656__$1);
if(temp__6738__auto__){
var s__87656__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__87656__$2)){
var c__61759__auto__ = cljs.core.chunk_first.call(null,s__87656__$2);
var size__61760__auto__ = cljs.core.count.call(null,c__61759__auto__);
var b__87658 = cljs.core.chunk_buffer.call(null,size__61760__auto__);
if((function (){var i__87657 = (0);
while(true){
if((i__87657 < size__61760__auto__)){
var control_id = cljs.core._nth.call(null,c__61759__auto__,i__87657);
cljs.core.chunk_append.call(null,b__87658,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dat.view.represent,app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [control_id,local_context], null),data], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.hash.call(null,control_id)], null)));

var G__87659 = (i__87657 + (1));
i__87657 = G__87659;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__87658),dat$view$iter__87655.call(null,cljs.core.chunk_rest.call(null,s__87656__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__87658),null);
}
} else {
var control_id = cljs.core.first.call(null,s__87656__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dat.view.represent,app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [control_id,local_context], null),data], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.hash.call(null,control_id)], null)),dat$view$iter__87655.call(null,cljs.core.rest.call(null,s__87656__$2)));
}
} else {
return null;
}
break;
}
});})(local_context,vec__87652,_,context))
,null,null));
});})(local_context,vec__87652,_,context))
;
return iter__61761__auto__.call(null,cljs.core.distinct.call(null,dat.view.component_controls.call(null,context)));
})()], null);
}));
dat.view.representation.register_representation.call(null,new cljs.core.Keyword("dat.view","value-view","dat.view/value-view",-1236191956),(function (app,p__87660,value){
var vec__87661 = p__87660;
var _ = cljs.core.nth.call(null,vec__87661,(0),null);
var context = cljs.core.nth.call(null,vec__87661,(1),null);
var attr_ident = new cljs.core.Keyword("db.attr","ident","db.attr/ident",1809115541).cljs$core$IFn$_invoke$arity$1(context);
var attr_sig = cljs.core.deref.call(null,dat.view.attr_signature_reaction.call(null,app,attr_ident));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword("dom","attrs","dom/attrs",-2091026283).cljs$core$IFn$_invoke$arity$1(context),(function (){try{if(((!((attr_sig == null)))?((((attr_sig.cljs$lang$protocol_mask$partition0$ & (256))) || ((cljs.core.PROTOCOL_SENTINEL === attr_sig.cljs$core$ILookup$)))?true:(((!attr_sig.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,attr_sig):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,attr_sig))){
try{var attr_sig_valueType__87667 = cljs.core.get.call(null,attr_sig,new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,attr_sig_valueType__87667,new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079))){
var nested_context = cljs.core.update.call(null,new cljs.core.Keyword("dat.view.context","locals","dat.view.context/locals",2099213948).cljs$core$IFn$_invoke$arity$1(context),new cljs.core.Keyword("dat.view","pull-expr","dat.view/pull-expr",523109997),dat.view.get_nested_pull_expr,attr_ident);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dat.view.represent,app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.view","pull-data-view","dat.view/pull-data-view",1272314540),nested_context], null),value], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e87670){if((e87670 instanceof Error)){
var e__37574__auto__ = e87670;
if((e__37574__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37574__auto__;
}
} else {
throw e87670;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e87668){if((e87668 instanceof Error)){
var e__37574__auto__ = e87668;
if((e__37574__auto__ === cljs.core.match.backtrack)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join('');
} else {
throw e__37574__auto__;
}
} else {
throw e87668;

}
}})()], null);
}));
dat.view.representation.register_representation.call(null,new cljs.core.Keyword("dat.view","attr-values-view","dat.view/attr-values-view",1162973652),(function (app,p__87671,values){
var vec__87672 = p__87671;
var _ = cljs.core.nth.call(null,vec__87672,(0),null);
var context = cljs.core.nth.call(null,vec__87672,(1),null);
var collapse_attribute_QMARK_ = reagent.core.atom.call(null,new cljs.core.Keyword("dat.view","collapsed?","dat.view/collapsed?",-450528998).cljs$core$IFn$_invoke$arity$1(context));
var local_context = new cljs.core.Keyword("dat.view.context","locals","dat.view.context/locals",2099213948).cljs$core$IFn$_invoke$arity$1(context);
return ((function (collapse_attribute_QMARK_,local_context,vec__87672,_,context){
return (function (app__$1,p__87675,values__$1){
var vec__87676 = p__87675;
var ___$1 = cljs.core.nth.call(null,vec__87676,(0),null);
var context__$1 = cljs.core.nth.call(null,vec__87676,(1),null);
var collapsable_QMARK_ = new cljs.core.Keyword("dat.view","collapsable?","dat.view/collapsable?",1095765451).cljs$core$IFn$_invoke$arity$1(context__$1);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword("dom","attrs","dom/attrs",-2091026283).cljs$core$IFn$_invoke$arity$1(context__$1),(cljs.core.truth_(collapsable_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dat.view.collapse_button,collapse_attribute_QMARK_], null):null),(cljs.core.truth_(cljs.core.deref.call(null,collapse_attribute_QMARK_))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dat.view.collapse_summary,app__$1,local_context,values__$1], null):null),(cljs.core.truth_((function (){var or__60899__auto__ = cljs.core.not.call(null,collapsable_QMARK_);
if(or__60899__auto__){
return or__60899__auto__;
} else {
var and__60887__auto__ = collapsable_QMARK_;
if(cljs.core.truth_(and__60887__auto__)){
return cljs.core.not.call(null,cljs.core.deref.call(null,collapse_attribute_QMARK_));
} else {
return and__60887__auto__;
}
}
})())?(function (){var iter__61761__auto__ = ((function (collapsable_QMARK_,vec__87676,___$1,context__$1,collapse_attribute_QMARK_,local_context,vec__87672,_,context){
return (function dat$view$iter__87679(s__87680){
return (new cljs.core.LazySeq(null,((function (collapsable_QMARK_,vec__87676,___$1,context__$1,collapse_attribute_QMARK_,local_context,vec__87672,_,context){
return (function (){
var s__87680__$1 = s__87680;
while(true){
var temp__6738__auto__ = cljs.core.seq.call(null,s__87680__$1);
if(temp__6738__auto__){
var s__87680__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__87680__$2)){
var c__61759__auto__ = cljs.core.chunk_first.call(null,s__87680__$2);
var size__61760__auto__ = cljs.core.count.call(null,c__61759__auto__);
var b__87682 = cljs.core.chunk_buffer.call(null,size__61760__auto__);
if((function (){var i__87681 = (0);
while(true){
if((i__87681 < size__61760__auto__)){
var value = cljs.core._nth.call(null,c__61759__auto__,i__87681);
cljs.core.chunk_append.call(null,b__87682,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dat.view.represent,app__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.view","value-view","dat.view/value-view",-1236191956),local_context], null),value], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.hash.call(null,value)], null)));

var G__87683 = (i__87681 + (1));
i__87681 = G__87683;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__87682),dat$view$iter__87679.call(null,cljs.core.chunk_rest.call(null,s__87680__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__87682),null);
}
} else {
var value = cljs.core.first.call(null,s__87680__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dat.view.represent,app__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.view","value-view","dat.view/value-view",-1236191956),local_context], null),value], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.hash.call(null,value)], null)),dat$view$iter__87679.call(null,cljs.core.rest.call(null,s__87680__$2)));
}
} else {
return null;
}
break;
}
});})(collapsable_QMARK_,vec__87676,___$1,context__$1,collapse_attribute_QMARK_,local_context,vec__87672,_,context))
,null,null));
});})(collapsable_QMARK_,vec__87676,___$1,context__$1,collapse_attribute_QMARK_,local_context,vec__87672,_,context))
;
return iter__61761__auto__.call(null,dat.view.utils.deref_or_value.call(null,values__$1));
})():null)], null);
});
;})(collapse_attribute_QMARK_,local_context,vec__87672,_,context))
}));
dat.view.sorted_values = (function dat$view$sorted_values(app,attr_ident,values){
var temp__6736__auto__ = new cljs.core.Keyword("attribute","sort-by","attribute/sort-by",-326148075).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,dat.view.attr_signature_reaction.call(null,app,attr_ident)));
if(cljs.core.truth_(temp__6736__auto__)){
var sort_by_attr = temp__6736__auto__;
return cljs.core.sort_by.call(null,sort_by_attr,values);
} else {
return values;
}
});
dat.view.representation.register_representation.call(null,new cljs.core.Keyword("dat.view","attr-view","dat.view/attr-view",1759506839),(function (app,p__87684,values){
var vec__87685 = p__87684;
var _ = cljs.core.nth.call(null,vec__87685,(0),null);
var context = cljs.core.nth.call(null,vec__87685,(1),null);
var attr_ident = new cljs.core.Keyword("db.attr","ident","db.attr/ident",1809115541).cljs$core$IFn$_invoke$arity$1(context);
var attr_signature = cljs.core.deref.call(null,dat.view.attr_signature_reaction.call(null,app,attr_ident));
var local_context = new cljs.core.Keyword("dat.view.context","locals","dat.view.context/locals",2099213948).cljs$core$IFn$_invoke$arity$1(context);
var child_context = cljs.core.merge.call(null,local_context,cljs.core.get_in.call(null,local_context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.view","ref-attrs","dat.view/ref-attrs",140030239),attr_ident], null)));
var values__$1 = dat.view.sorted_values.call(null,app,attr_ident,values);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword("dom","attrs","dom/attrs",-2091026283).cljs$core$IFn$_invoke$arity$1(context),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,dat.view.v_box_styles)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dat.view.represent,app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.view","label-view","dat.view/label-view",1771521843),cljs.core.assoc.call(null,child_context,new cljs.core.Keyword("dat.view","attr-signature","dat.view/attr-signature",2010718390),attr_signature)], null),attr_ident], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dat.view.represent,app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.view","control-set","dat.view/control-set",587644972),cljs.core.assoc.call(null,child_context,new cljs.core.Keyword("dat.view","controls","dat.view/controls",2009457336),new cljs.core.Keyword("dat.view","controls","dat.view/controls",2009457336).cljs$core$IFn$_invoke$arity$1(context))], null),values__$1], null)], null),(function (){try{if(((!((attr_signature == null)))?((((attr_signature.cljs$lang$protocol_mask$partition0$ & (256))) || ((cljs.core.PROTOCOL_SENTINEL === attr_signature.cljs$core$ILookup$)))?true:(((!attr_signature.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,attr_signature):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,attr_signature))){
try{var attr_signature_cardinality__87691 = cljs.core.get.call(null,attr_signature,new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,attr_signature_cardinality__87691,new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dat.view.represent,app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.view","attr-values-view","dat.view/attr-values-view",1162973652),child_context], null),values__$1], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e87694){if((e87694 instanceof Error)){
var e__37574__auto__ = e87694;
if((e__37574__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37574__auto__;
}
} else {
throw e87694;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e87692){if((e87692 instanceof Error)){
var e__37574__auto__ = e87692;
if((e__37574__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dat.view.represent,app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.view","value-view","dat.view/value-view",-1236191956),child_context], null),values__$1], null);
} else {
throw e__37574__auto__;
}
} else {
throw e87692;

}
}})()], null);
}));
dat.view.attr_entity_order = (function dat$view$attr_entity_order(attr_data){
var or__60899__auto__ = new cljs.core.Keyword("e","order","e/order",-1254677165).cljs$core$IFn$_invoke$arity$1(attr_data);
if(cljs.core.truth_(or__60899__auto__)){
return or__60899__auto__;
} else {
if(cljs.core.truth_(new cljs.core.Keyword("db","isComponent","db/isComponent",423352398).cljs$core$IFn$_invoke$arity$1(attr_data))){
return (10);
} else {
if(cljs.core.truth_(new cljs.core.Keyword("db.type","ref?","db.type/ref?",649820014).cljs$core$IFn$_invoke$arity$1(attr_data))){
return (5);
} else {
return (0);

}
}
}
});
dat.view.attr_order = cljs.core.memoize.call(null,(function (app,attr){
return reagent.ratom.make_reaction.call(null,(function (){
if((attr instanceof cljs.core.Keyword)){
return dat.view.attr_entity_order.call(null,cljs.core.deref.call(null,dat.view.attr_signature_reaction.call(null,app,attr)));
} else {
if(cljs.core.map_QMARK_.call(null,attr)){
return dat.view.attr_entity_order.call(null,attr);
} else {
return null;
}
}
}));
}));
dat.view.pull_attributes = (function dat$view$pull_attributes(var_args){
var args87695 = [];
var len__62120__auto___87699 = arguments.length;
var i__62121__auto___87700 = (0);
while(true){
if((i__62121__auto___87700 < len__62120__auto___87699)){
args87695.push((arguments[i__62121__auto___87700]));

var G__87701 = (i__62121__auto___87700 + (1));
i__62121__auto___87700 = G__87701;
continue;
} else {
}
break;
}

var G__87697 = args87695.length;
switch (G__87697) {
case 2:
return dat.view.pull_attributes.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dat.view.pull_attributes.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args87695.length)].join('')));

}
});

dat.view.pull_attributes.cljs$core$IFn$_invoke$arity$2 = (function (pull_expr,pull_data){
return cljs.core.distinct.call(null,cljs.core.concat.call(null,cljs.core.flatten.call(null,cljs.core.map.call(null,(function (attr_spec){
if((attr_spec instanceof cljs.core.Keyword)){
return attr_spec;
} else {
if(cljs.core.map_QMARK_.call(null,attr_spec)){
return cljs.core.keys.call(null,attr_spec);
} else {
if((attr_spec instanceof cljs.core.Symbol)){
var G__87698 = attr_spec;
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),G__87698)){
return cljs.core.filter.call(null,cljs.core.set.call(null,dat.view.pull_attributes.call(null,cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"*","*",345799209,null),null], null), null),pull_expr),cljs.core.PersistentVector.EMPTY)),cljs.core.keys.call(null,dat.view.utils.deref_or_value.call(null,pull_data)));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"*","*",345799209,null),G__87698)){
return cljs.core.filter.call(null,cljs.core.set.call(null,dat.view.pull_attributes.call(null,cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"*","*",345799209,null),null], null), null),pull_expr),cljs.core.PersistentVector.EMPTY)),cljs.core.keys.call(null,dat.view.utils.deref_or_value.call(null,pull_data)));
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr_spec)].join('')));

}
}
} else {
return null;
}
}
}
}),dat.view.deref_or_value.call(null,pull_expr))),cljs.core.keys.call(null,pull_data)));
});

dat.view.pull_attributes.cljs$core$IFn$_invoke$arity$1 = (function (pull_expr){
return dat.view.pull_attributes.call(null,pull_expr,cljs.core.PersistentVector.EMPTY);
});

dat.view.pull_attributes.cljs$lang$maxFixedArity = 2;

dat.view.representation.register_representation.call(null,new cljs.core.Keyword("dat.view","pull-data-view","dat.view/pull-data-view",1272314540),(function (app,p__87703,pull_data){
var vec__87704 = p__87703;
var _ = cljs.core.nth.call(null,vec__87704,(0),null);
var context = cljs.core.nth.call(null,vec__87704,(1),null);
var collapse_attribute_QMARK_ = reagent.core.atom.call(null,new cljs.core.Keyword("dat.view","collapsed?","dat.view/collapsed?",-450528998).cljs$core$IFn$_invoke$arity$1(context));
var edit_QMARK_ = reagent.core.atom.call(null,null);
var copy_QMARK_ = reagent.core.atom.call(null,null);
var copy = reagent.core.atom.call(null,null);
return ((function (collapse_attribute_QMARK_,edit_QMARK_,copy_QMARK_,copy,vec__87704,_,context){
return (function (app__$1,p__87707,pull_data__$1){
var vec__87708 = p__87707;
var ___$1 = cljs.core.nth.call(null,vec__87708,(0),null);
var context__$1 = cljs.core.nth.call(null,vec__87708,(1),null);
var local_context = new cljs.core.Keyword("dat.view.context","locals","dat.view.context/locals",2099213948).cljs$core$IFn$_invoke$arity$1(context__$1);
var collapsable_QMARK_ = new cljs.core.Keyword("dat.view","collapsable?","dat.view/collapsable?",1095765451).cljs$core$IFn$_invoke$arity$1(context__$1);
var pull_expr = new cljs.core.Keyword("dat.view","pull-expr","dat.view/pull-expr",523109997).cljs$core$IFn$_invoke$arity$1(context__$1);
var pull_data__$2 = dat.view.utils.deref_or_value.call(null,pull_data__$1);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),dat.view.h_box_styles], null),(cljs.core.truth_(collapsable_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dat.view.collapse_button,collapse_attribute_QMARK_], null):null),(cljs.core.truth_(cljs.core.deref.call(null,collapse_attribute_QMARK_))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dat.view.collapse_summary,app__$1,context__$1,pull_data__$2], null):null),(cljs.core.truth_((function (){var or__60899__auto__ = cljs.core.not.call(null,collapsable_QMARK_);
if(or__60899__auto__){
return or__60899__auto__;
} else {
var and__60887__auto__ = collapsable_QMARK_;
if(cljs.core.truth_(and__60887__auto__)){
return cljs.core.not.call(null,cljs.core.deref.call(null,collapse_attribute_QMARK_));
} else {
return and__60887__auto__;
}
}
})())?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword("dom","attrs","dom/attrs",-2091026283).cljs$core$IFn$_invoke$arity$1(context__$1),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,dat.view.v_box_styles)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dat.view.represent,app__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.view","pull-summary-view","dat.view/pull-summary-view",-546204668),local_context], null),pull_data__$2], null),(function (){var local_context__$1 = cljs.core.assoc.call(null,local_context,new cljs.core.Keyword("dat.view","controls","dat.view/controls",2009457336),new cljs.core.Keyword("dat.view","controls","dat.view/controls",2009457336).cljs$core$IFn$_invoke$arity$1(context__$1),new cljs.core.Keyword("dat.view","edit?","dat.view/edit?",1975627254),edit_QMARK_,new cljs.core.Keyword("dat.view","copy?","dat.view/copy?",1484288348),copy_QMARK_,new cljs.core.Keyword("dat.view","copy","dat.view/copy",673281007),copy);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dat.view.represent,app__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.view","control-set","dat.view/control-set",587644972),local_context__$1], null),pull_data__$2], null);
})()], null),(function (){var iter__61761__auto__ = ((function (local_context,collapsable_QMARK_,pull_expr,pull_data__$2,vec__87708,___$1,context__$1,collapse_attribute_QMARK_,edit_QMARK_,copy_QMARK_,copy,vec__87704,_,context){
return (function dat$view$iter__87711(s__87712){
return (new cljs.core.LazySeq(null,((function (local_context,collapsable_QMARK_,pull_expr,pull_data__$2,vec__87708,___$1,context__$1,collapse_attribute_QMARK_,edit_QMARK_,copy_QMARK_,copy,vec__87704,_,context){
return (function (){
var s__87712__$1 = s__87712;
while(true){
var temp__6738__auto__ = cljs.core.seq.call(null,s__87712__$1);
if(temp__6738__auto__){
var s__87712__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__87712__$2)){
var c__61759__auto__ = cljs.core.chunk_first.call(null,s__87712__$2);
var size__61760__auto__ = cljs.core.count.call(null,c__61759__auto__);
var b__87714 = cljs.core.chunk_buffer.call(null,size__61760__auto__);
if((function (){var i__87713 = (0);
while(true){
if((i__87713 < size__61760__auto__)){
var attr_ident = cljs.core._nth.call(null,c__61759__auto__,i__87713);
cljs.core.chunk_append.call(null,b__87714,(function (){var temp__6738__auto____$1 = cljs.core.get.call(null,pull_data__$2,attr_ident);
if(cljs.core.truth_(temp__6738__auto____$1)){
var values = temp__6738__auto____$1;
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dat.view.represent,app__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.view","attr-view","dat.view/attr-view",1759506839),cljs.core.assoc.call(null,local_context,new cljs.core.Keyword("db.attr","ident","db.attr/ident",1809115541),attr_ident)], null),values], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.hash.call(null,attr_ident)], null));
} else {
return null;
}
})());

var G__87715 = (i__87713 + (1));
i__87713 = G__87715;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__87714),dat$view$iter__87711.call(null,cljs.core.chunk_rest.call(null,s__87712__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__87714),null);
}
} else {
var attr_ident = cljs.core.first.call(null,s__87712__$2);
return cljs.core.cons.call(null,(function (){var temp__6738__auto____$1 = cljs.core.get.call(null,pull_data__$2,attr_ident);
if(cljs.core.truth_(temp__6738__auto____$1)){
var values = temp__6738__auto____$1;
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dat.view.represent,app__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.view","attr-view","dat.view/attr-view",1759506839),cljs.core.assoc.call(null,local_context,new cljs.core.Keyword("db.attr","ident","db.attr/ident",1809115541),attr_ident)], null),values], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.hash.call(null,attr_ident)], null));
} else {
return null;
}
})(),dat$view$iter__87711.call(null,cljs.core.rest.call(null,s__87712__$2)));
}
} else {
return null;
}
break;
}
});})(local_context,collapsable_QMARK_,pull_expr,pull_data__$2,vec__87708,___$1,context__$1,collapse_attribute_QMARK_,edit_QMARK_,copy_QMARK_,copy,vec__87704,_,context))
,null,null));
});})(local_context,collapsable_QMARK_,pull_expr,pull_data__$2,vec__87708,___$1,context__$1,collapse_attribute_QMARK_,edit_QMARK_,copy_QMARK_,copy,vec__87704,_,context))
;
return iter__61761__auto__.call(null,cljs.core.sort_by.call(null,cljs.core.comp.call(null,cljs.core.deref,cljs.core.partial.call(null,dat.view.attr_order,app__$1)),dat.view.pull_attributes.call(null,pull_expr,pull_data__$2)));
})(),(((cljs.core.deref.call(null,edit_QMARK_) == null))?null:new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,dat.view.h_box_styles,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"15px",new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),(cljs.core.truth_(cljs.core.deref.call(null,edit_QMARK_))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Editing"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dat.view.represent,app__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.view","pull-form","dat.view/pull-form",466212808),local_context], null),pull_data__$2], null)], null)),(((cljs.core.deref.call(null,copy_QMARK_) == null))?null:new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,dat.view.h_box_styles,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"15px"], null),(cljs.core.truth_(cljs.core.deref.call(null,copy_QMARK_))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Copying"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dat.view.represent,app__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.view","pull-form","dat.view/pull-form",466212808),local_context], null),pull_data__$2], null)], null))], null):null)], null);
});
;})(collapse_attribute_QMARK_,edit_QMARK_,copy_QMARK_,copy,vec__87704,_,context))
}));
dat.view.representation.register_representation.call(null,new cljs.core.Keyword("dat.view","pull-view","dat.view/pull-view",-578133888),(function (app,p__87716,p__87717){
var vec__87718 = p__87716;
var _ = cljs.core.nth.call(null,vec__87718,(0),null);
var context = cljs.core.nth.call(null,vec__87718,(1),null);
var vec__87721 = p__87717;
var pull_expr = cljs.core.nth.call(null,vec__87721,(0),null);
var eid = cljs.core.nth.call(null,vec__87721,(1),null);
var pull_expr__$1 = cljs.core.deref.call(null,dat.view.entity_pull.call(null,app,eid,new cljs.core.Keyword("dat.view","pull-summary-attrs","dat.view/pull-summary-attrs",1731287888).cljs$core$IFn$_invoke$arity$1(context)));
var pull_data = posh.reagent.pull.call(null,new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(app),pull_expr__$1,eid);
var child_context = cljs.core.assoc.call(null,cljs.core.merge.call(null,new cljs.core.Keyword("dat.view.context","locals","dat.view.context/locals",2099213948).cljs$core$IFn$_invoke$arity$1(context),dat.view.meta_context.call(null,pull_expr__$1)),new cljs.core.Keyword("dat.view","pull-expr","dat.view/pull-expr",523109997),pull_expr__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dat.view.represent,app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.view","pull-data-view","dat.view/pull-data-view",1272314540),child_context], null),pull_data], null)], null);
}));
/**
 * Given a DS connection, a app pull-expression and data from that pull expression (possibly as a reaction),
 *   render the UI subject to the pull-expr metadata.
 */
dat.view.pull_data_view = (function dat$view$pull_data_view(var_args){
var args87724 = [];
var len__62120__auto___87727 = arguments.length;
var i__62121__auto___87728 = (0);
while(true){
if((i__62121__auto___87728 < len__62120__auto___87727)){
args87724.push((arguments[i__62121__auto___87728]));

var G__87729 = (i__62121__auto___87728 + (1));
i__62121__auto___87728 = G__87729;
continue;
} else {
}
break;
}

var G__87726 = args87724.length;
switch (G__87726) {
case 3:
return dat.view.pull_data_view.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dat.view.pull_data_view.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args87724.length)].join('')));

}
});

dat.view.pull_data_view.cljs$core$IFn$_invoke$arity$3 = (function (app,context,pull_data){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dat.view.represent,app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.view","pull-data-view","dat.view/pull-data-view",1272314540),context], null),pull_data], null);
});

dat.view.pull_data_view.cljs$core$IFn$_invoke$arity$2 = (function (app,pull_data){
return dat.view.pull_data_view.call(null,app,cljs.core.PersistentArrayMap.EMPTY,pull_data);
});

dat.view.pull_data_view.cljs$lang$maxFixedArity = 3;

dat.view.pull_view = (function dat$view$pull_view(var_args){
var args87731 = [];
var len__62120__auto___87734 = arguments.length;
var i__62121__auto___87735 = (0);
while(true){
if((i__62121__auto___87735 < len__62120__auto___87734)){
args87731.push((arguments[i__62121__auto___87735]));

var G__87736 = (i__62121__auto___87735 + (1));
i__62121__auto___87735 = G__87736;
continue;
} else {
}
break;
}

var G__87733 = args87731.length;
switch (G__87733) {
case 2:
return dat.view.pull_view.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dat.view.pull_view.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return dat.view.pull_view.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args87731.length)].join('')));

}
});

dat.view.pull_view.cljs$core$IFn$_invoke$arity$2 = (function (app,eid){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dat.view.pull_view,app,cljs.core.deref.call(null,dat.view.entity_pull.call(null,app,eid)),eid], null);
});

dat.view.pull_view.cljs$core$IFn$_invoke$arity$3 = (function (app,pull_expr,eid){
var pull_expr__$1 = dat.view.deref_or_value.call(null,pull_expr);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [dat.view.pull_view,app,dat.view.meta_context.call(null,pull_expr__$1),pull_expr__$1,eid], null);
});

dat.view.pull_view.cljs$core$IFn$_invoke$arity$4 = (function (app,context,pull_expr,eid){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dat.view.represent,app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.view","pull-view","dat.view/pull-view",-578133888),context], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pull_expr,eid], null)], null);
});

dat.view.pull_view.cljs$lang$maxFixedArity = 4;

dat.view.cast_value_type = (function dat$view$cast_value_type(value_type_ident,str_value){
var G__87739 = value_type_ident;
var G__87739__$1 = (((G__87739 instanceof cljs.core.Keyword))?G__87739.fqn:null);
switch (G__87739__$1) {
case "db.type/double":
return parseFloat(str_value);

break;
case "db.type/float":
return parseFloat(str_value);

break;
case "db.type/long":
return parseInt(str_value);

break;
case "db.type/integer":
return parseInt(str_value);

break;
default:
return str_value;

}
});
dat.view.parse_from_ui = (function dat$view$parse_from_ui(value_type_ident,in_value){
var G__87742 = value_type_ident;
var G__87742__$1 = (((G__87742 instanceof cljs.core.Keyword))?G__87742.fqn:null);
switch (G__87742__$1) {
case "db.type/double":
return parseFloat(in_value);

break;
case "db.type/float":
return parseFloat(in_value);

break;
case "db.type/long":
return parseInt(in_value);

break;
case "db.type/integer":
return parseInt(in_value);

break;
case "db.type/ref":
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dat.view","/tmp/form-init8382301926859034614.clj",737,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (G__87742,G__87742__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["parsing ref ui",in_value], null);
});})(G__87742,G__87742__$1))
,null)),null,-2134555105);

var or__60899__auto__ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(in_value);
if(cljs.core.truth_(or__60899__auto__)){
return or__60899__auto__;
} else {
return in_value;
}

break;
default:
return in_value;

}
});
dat.view.parse_from_db = (function dat$view$parse_from_db(value_type_ident,in_value){
var G__87745 = value_type_ident;
var G__87745__$1 = (((G__87745 instanceof cljs.core.Keyword))?G__87745.fqn:null);
switch (G__87745__$1) {
case "db.type/ref":
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dat.view","/tmp/form-init8382301926859034614.clj",747,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (G__87745,G__87745__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["parsing ref db",in_value], null);
});})(G__87745,G__87745__$1))
,null)),null,1456864782);

var or__60899__auto__ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(in_value);
if(cljs.core.truth_(or__60899__auto__)){
return or__60899__auto__;
} else {
return in_value;
}

break;
default:
return in_value;

}
});
/**
 * Takes an app, an eid attr-ident and an old value, and builds a change handler for that value
 */
dat.view.make_change_handler = (function dat$view$make_change_handler(app,eid,attr_ident,old_value){
var current_value = reagent.core.atom.call(null,old_value);
var value_type_ident = datascript.core.q.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?value-type-ident","?value-type-ident",1331439437,null),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Symbol(null,"?attr-ident","?attr-ident",1043001135,null),new cljs.core.Keyword(null,"where","where",-2044795965),cljs.core.list(new cljs.core.Symbol(null,"attr-ident-value-type-ident","attr-ident-value-type-ident",1337996970,null),new cljs.core.Symbol(null,"?attr-ident","?attr-ident",1043001135,null),new cljs.core.Symbol(null,"?value-type-ident","?value-type-ident",1331439437,null))], null),cljs.core.deref.call(null,new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(app)),dat.view.query.rules,attr_ident);
return ((function (current_value,value_type_ident){
return (function (new_value){
var old_value__$1 = cljs.core.deref.call(null,current_value);
var new_value__$1 = dat.view.cast_value_type.call(null,value_type_ident,new_value);
if(cljs.core.not_EQ_.call(null,old_value__$1,new_value__$1)){
cljs.core.reset_BANG_.call(null,current_value,new_value__$1);

return dat.view.send_tx_BANG_.call(null,app,cljs.core.concat.call(null,(cljs.core.truth_(old_value__$1)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),eid,attr_ident,old_value__$1], null)], null):null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),eid,attr_ident,new_value__$1], null)], null)));
} else {
return null;
}
});
;})(current_value,value_type_ident))
});
dat.view.db_update_value = (function dat$view$db_update_value(db,eid,attr_ident,new_value){
var value_type_ident = datascript.core.q.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?value-type-ident","?value-type-ident",1331439437,null),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Symbol(null,"?attr-ident","?attr-ident",1043001135,null),new cljs.core.Keyword(null,"where","where",-2044795965),cljs.core.list(new cljs.core.Symbol(null,"attr-ident-value-type-ident","attr-ident-value-type-ident",1337996970,null),new cljs.core.Symbol(null,"?attr-ident","?attr-ident",1043001135,null),new cljs.core.Symbol(null,"?value-type-ident","?value-type-ident",1331439437,null))], null),db,dat.view.query.rules,attr_ident);
var new_value__$1 = dat.view.parse_from_ui.call(null,value_type_ident,new_value);
var old_value = dat.view.parse_from_db.call(null,value_type_ident,attr_ident.call(null,datascript.core.entity.call(null,db,eid)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(old_value)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),eid,attr_ident,old_value], null):null),(cljs.core.truth_(new_value__$1)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),eid,attr_ident,new_value__$1], null):null)], null);
});
/**
 * Takes an app, an eid attr-ident and an old value, and builds a change handler for that value
 */
dat.view.value_change_handler = (function dat$view$value_change_handler(app,eid,attr_ident,new_value){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dat.view","/tmp/form-init8382301926859034614.clj",797,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["change-handler",eid,attr_ident,new_value], null);
}),null)),null,662455734);

return dat.view.global_tx_BANG_.call(null,app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",-151594418),dat.view.db_update_value,eid,attr_ident,new_value], null)], null));
});
/**
 * DEPRECATED
 */
dat.view.apply_reference_change_BANG_ = (function dat$view$apply_reference_change_BANG_(var_args){
var args87747 = [];
var len__62120__auto___87757 = arguments.length;
var i__62121__auto___87758 = (0);
while(true){
if((i__62121__auto___87758 < len__62120__auto___87757)){
args87747.push((arguments[i__62121__auto___87758]));

var G__87759 = (i__62121__auto___87758 + (1));
i__62121__auto___87758 = G__87759;
continue;
} else {
}
break;
}

var G__87749 = args87747.length;
switch (G__87749) {
case 4:
return dat.view.apply_reference_change_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return dat.view.apply_reference_change_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args87747.length)].join('')));

}
});

dat.view.apply_reference_change_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (app,eid,attr_ident,new_value){
return dat.view.apply_reference_change_BANG_.call(null,app,eid,attr_ident,null,new_value);
});

dat.view.apply_reference_change_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (app,eid,attr_ident,old_value,new_value){
var old_value__$1 = (function (){try{if(((!((old_value == null)))?((((old_value.cljs$lang$protocol_mask$partition0$ & (256))) || ((cljs.core.PROTOCOL_SENTINEL === old_value.cljs$core$ILookup$)))?true:(((!old_value.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,old_value):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,old_value))){
try{var old_value_id__87753 = cljs.core.get.call(null,old_value,new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.call(null,old_value_id__87753,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
var id = cljs.core.get.call(null,old_value,new cljs.core.Keyword("db","id","db/id",-1388397098));
return id;
} else {
throw cljs.core.match.backtrack;

}
}catch (e87756){if((e87756 instanceof Error)){
var e__37574__auto__ = e87756;
if((e__37574__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37574__auto__;
}
} else {
throw e87756;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e87754){if((e87754 instanceof Error)){
var e__37574__auto__ = e87754;
if((e__37574__auto__ === cljs.core.match.backtrack)){
var id = old_value;
return id;
} else {
throw e__37574__auto__;
}
} else {
throw e87754;

}
}})();
return dat.view.send_tx_BANG_.call(null,app,cljs.core.concat.call(null,(((new_value == null))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),eid,attr_ident,new_value], null)], null)),(((old_value__$1 == null))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),eid,attr_ident,old_value__$1], null)], null))));
});

dat.view.apply_reference_change_BANG_.cljs$lang$maxFixedArity = 5;

dat.view.ref_attr_options = cljs.core.memoize.call(null,(function() {
var G__87761 = null;
var G__87761__2 = (function (app,attr_ident){
return dat.view.ref_attr_options.call(null,app,attr_ident,null);
});
var G__87761__3 = (function (app,attr_ident,sort_key){
return dat.view.ref_attr_options.call(null,app,attr_ident,sort_key,cljs.core.PersistentArrayMap.EMPTY);
});
var G__87761__4 = (function (app,attr_ident,sort_key,posh_options){
var posh_options__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cache","cache",-1237023054),new cljs.core.Keyword(null,"forever","forever",2103455015)], null),posh_options);
var sort_key__$1 = (function (){var or__60899__auto__ = sort_key;
if(cljs.core.truth_(or__60899__auto__)){
return or__60899__auto__;
} else {
return new cljs.core.Keyword("db","id","db/id",-1388397098);
}
})();
return reagent.ratom.make_reaction.call(null,((function (posh_options__$1,sort_key__$1){
return (function (){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"dat.view","/tmp/form-init8382301926859034614.clj",830,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (posh_options__$1,sort_key__$1){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CALLING REF_ATTR_OPTIONS!!!",attr_ident,"with posh options",posh_options__$1], null);
});})(posh_options__$1,sort_key__$1))
,null)),null,1685664799);

var options = (function (){var or__60899__auto__ = cljs.core.seq.call(null,new cljs.core.Keyword("attribute.ref","options","attribute.ref/options",794868384).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,posh.reagent.pull.call(null,new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(app),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("attribute.ref","options","attribute.ref/options",794868384),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("e","type","e/type",1174270209),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096),attr_ident], null),posh_options__$1))));
if(or__60899__auto__){
return or__60899__auto__;
} else {
var eids = cljs.core.deref.call(null,posh.reagent.q.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?attr","?attr",-2066507837,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?attr","?attr",-2066507837,null),new cljs.core.Keyword("attribute.ref","types","attribute.ref/types",-780449566),new cljs.core.Symbol(null,"?type","?type",-1287409101,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("e","type","e/type",1174270209),new cljs.core.Symbol(null,"?type","?type",-1287409101,null)], null)], null),new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(app),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096),attr_ident], null),posh_options__$1));
return cljs.core.mapv.call(null,cljs.core.comp.call(null,cljs.core.deref,cljs.core.partial.call(null,posh.reagent.pull,new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(app),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("e","type","e/type",1174270209),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)], null)], null))),eids);
}
})();
return cljs.core.vec.call(null,cljs.core.sort_by.call(null,sort_key__$1,options));
});})(posh_options__$1,sort_key__$1))
);
});
G__87761 = function(app,attr_ident,sort_key,posh_options){
switch(arguments.length){
case 2:
return G__87761__2.call(this,app,attr_ident);
case 3:
return G__87761__3.call(this,app,attr_ident,sort_key);
case 4:
return G__87761__4.call(this,app,attr_ident,sort_key,posh_options);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__87761.cljs$core$IFn$_invoke$arity$2 = G__87761__2;
G__87761.cljs$core$IFn$_invoke$arity$3 = G__87761__3;
G__87761.cljs$core$IFn$_invoke$arity$4 = G__87761__4;
return G__87761;
})()
);
dat.view.select_entity_input = (function dat$view$select_entity_input(var_args){
var args87762 = [];
var len__62120__auto___87765 = arguments.length;
var i__62121__auto___87766 = (0);
while(true){
if((i__62121__auto___87766 < len__62120__auto___87765)){
args87762.push((arguments[i__62121__auto___87766]));

var G__87767 = (i__62121__auto___87766 + (1));
i__62121__auto___87766 = G__87767;
continue;
} else {
}
break;
}

var G__87764 = args87762.length;
switch (G__87764) {
case 5:
return dat.view.select_entity_input.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return dat.view.select_entity_input.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args87762.length)].join('')));

}
});

dat.view.select_entity_input.cljs$core$IFn$_invoke$arity$5 = (function (app,context,eid,attr_ident,value){
var options = dat.view.deref_or_value.call(null,(function (){var or__60899__auto__ = new cljs.core.Keyword("dat.view","options","dat.view/options",2114765317).cljs$core$IFn$_invoke$arity$1(context);
if(cljs.core.truth_(or__60899__auto__)){
return or__60899__auto__;
} else {
return dat.view.ref_attr_options.call(null,app,attr_ident,new cljs.core.Keyword("dat.view.options","sort-by","dat.view.options/sort-by",-2019313467).cljs$core$IFn$_invoke$arity$1(context));
}
})());
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [dat.view.select_entity_input,app,context,eid,attr_ident,value,options], null);
});

dat.view.select_entity_input.cljs$core$IFn$_invoke$arity$6 = (function (app,context,eid,attr_ident,value,options){
var value__$1 = dat.view.utils.deref_or_value.call(null,value);
var id_fn = (function (){var or__60899__auto__ = new cljs.core.Keyword("dat.view","id-fn","dat.view/id-fn",-1967348950).cljs$core$IFn$_invoke$arity$1(context);
if(cljs.core.truth_(or__60899__auto__)){
return or__60899__auto__;
} else {
return new cljs.core.Keyword("db","id","db/id",-1388397098);
}
})();
var value__$2 = (function (){var or__60899__auto__ = id_fn.call(null,value__$1);
if(cljs.core.truth_(or__60899__auto__)){
return or__60899__auto__;
} else {
var or__60899__auto____$1 = (function (){var and__60887__auto__ = cljs.core.vector_QMARK_.call(null,value__$1);
if(and__60887__auto__){
return cljs.core.deref.call(null,dat.view.pull_attr.call(null,new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(app),value__$1,id_fn));
} else {
return and__60887__auto__;
}
})();
if(cljs.core.truth_(or__60899__auto____$1)){
return or__60899__auto____$1;
} else {
return value__$1;
}
}
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),dat.view.h_box_styles], null),new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min-width","min-width",1926193728),"150px"], null),new cljs.core.Keyword(null,"filter-box?","filter-box?",-1157583688),true,new cljs.core.Keyword(null,"choices","choices",1385611597),options,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),id_fn,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),(function (){var or__60899__auto__ = new cljs.core.Keyword("dat.view","label-fn","dat.view/label-fn",1422563365).cljs$core$IFn$_invoke$arity$1(context);
if(cljs.core.truth_(or__60899__auto__)){
return or__60899__auto__;
} else {
return dat.view.pull_summary_string;
}
})(),new cljs.core.Keyword(null,"model","model",331153215),value__$2,new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.partial.call(null,dat.view.value_change_handler,app,eid,attr_ident)], null),(((value__$2 == null))?null:new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_icon_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi-close-circle",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"smaller","smaller",-1619801498),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"3px 7px"], null),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),"Retract",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (value__$1,id_fn,value__$2){
return (function (){
return dat.view.value_change_handler.call(null,app,eid,attr_ident,null);
});})(value__$1,id_fn,value__$2))
], null))], null);
});

dat.view.select_entity_input.cljs$lang$maxFixedArity = 6;

dat.view.md = (function dat$view$md(md_string){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),markdown.core.md__GT_html.call(null,md_string)], null)], null)], null)], null)], null);
});
dat.view.datetime_with_time_int = (function dat$view$datetime_with_time_int(datetime,time_int){
var dt = cljs_time.core.to_default_time_zone.call(null,datetime);
var dt_with_time = cljs_time.core.local_date_time.call(null,cljs_time.core.year.call(null,dt),cljs_time.core.month.call(null,dt),cljs_time.core.day.call(null,dt),re_com.input_time.time__GT_hrs.call(null,time_int),re_com.input_time.time__GT_mins.call(null,time_int),cljs_time.core.second.call(null,dt),cljs_time.core.milli.call(null,dt));
var dt_utc = cljs_time.coerce.to_date_time.call(null,dt_with_time);
return dt_utc;
});
dat.view.datetime_with_date = (function dat$view$datetime_with_date(dt,date){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dat.view","/tmp/form-init8382301926859034614.clj",925,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["date-val",date], null);
}),null)),null,-2118306080);

return cljs_time.core.date_time.call(null,cljs_time.core.year.call(null,date),cljs_time.core.month.call(null,date),cljs_time.core.day.call(null,date),cljs_time.core.hour.call(null,dt),cljs_time.core.minute.call(null,dt),cljs_time.core.second.call(null,dt),cljs_time.core.milli.call(null,dt));
});
/**
 * DEPRECATED
 */
dat.view.datetime_change_handler = (function dat$view$datetime_change_handler(app,datetime_mask_fn,eid,attr_ident,current_value,new_partial_value){
var old_value = cljs.core.deref.call(null,current_value);
var new_value = datetime_mask_fn.call(null,old_value,new_partial_value);
cljs.core.reset_BANG_.call(null,current_value,new_value);

return dat.view.send_tx_BANG_.call(null,app,cljs.core.concat.call(null,(cljs.core.truth_(old_value)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),eid,attr_ident,cljs_time.coerce.to_date.call(null,old_value)], null)], null):null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),eid,attr_ident,cljs_time.coerce.to_date.call(null,new_value)], null)], null)));
});
dat.view.datetime_change_handler2 = (function dat$view$datetime_change_handler2(app,datetime_mask_fn,eid,attr_ident,current_value,new_partial_value){
var old_value = cljs.core.deref.call(null,current_value);
var new_value = datetime_mask_fn.call(null,old_value,new_partial_value);
cljs.core.reset_BANG_.call(null,current_value,new_value);

return dat.view.global_tx_BANG_.call(null,app,cljs.core.concat.call(null,(cljs.core.truth_(old_value)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),eid,attr_ident,cljs_time.coerce.to_date.call(null,old_value)], null)], null):null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),eid,attr_ident,cljs_time.coerce.to_date.call(null,new_value)], null)], null)));
});
dat.view.datetime_date_change_handler = (function dat$view$datetime_date_change_handler(app,eid,attr_ident,current_value,new_date_value){
return dat.view.datetime_change_handler2.call(null,app,dat.view.datetime_with_date,eid,attr_ident,current_value,new_date_value);
});
dat.view.datetime_time_int_change_handler = (function dat$view$datetime_time_int_change_handler(app,eid,attr_ident,current_value,new_time_value){
return dat.view.datetime_change_handler2.call(null,app,dat.view.datetime_with_time_int,eid,attr_ident,current_value,new_time_value);
});
dat.view.datetime__GT_time_int = (function dat$view$datetime__GT_time_int(datetime){
var dt = cljs_time.core.to_default_time_zone.call(null,datetime);
return (((100) * cljs_time.core.hour.call(null,dt)) + cljs_time.core.minute.call(null,dt));
});
dat.view.representation.register_representation.call(null,new cljs.core.Keyword("dat.view","datetime-selector","dat.view/datetime-selector",-1819103649),(function (app,p__87769,p__87770){
var vec__87771 = p__87769;
var _ = cljs.core.nth.call(null,vec__87771,(0),null);
var context = cljs.core.nth.call(null,vec__87771,(1),null);
var vec__87774 = p__87770;
var eid = cljs.core.nth.call(null,vec__87774,(0),null);
var attr_ident = cljs.core.nth.call(null,vec__87774,(1),null);
var value = cljs.core.nth.call(null,vec__87774,(2),null);
var current_utc_datetime = reagent.core.atom.call(null,(function (){var or__60899__auto__ = cljs_time.coerce.from_date.call(null,value);
if(cljs.core.truth_(or__60899__auto__)){
return or__60899__auto__;
} else {
return cljs_time.core.now.call(null);
}
})());
return ((function (current_utc_datetime,vec__87771,_,context,vec__87774,eid,attr_ident,value){
return (function (app__$1,p__87777,p__87778){
var vec__87779 = p__87777;
var ___$1 = cljs.core.nth.call(null,vec__87779,(0),null);
var context__$1 = cljs.core.nth.call(null,vec__87779,(1),null);
var vec__87782 = p__87778;
var eid__$1 = cljs.core.nth.call(null,vec__87782,(0),null);
var attr_ident__$1 = cljs.core.nth.call(null,vec__87782,(1),null);
var value__$1 = cljs.core.nth.call(null,vec__87782,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.datepicker_dropdown,new cljs.core.Keyword(null,"model","model",331153215),cljs.core.deref.call(null,current_utc_datetime),new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.partial.call(null,dat.view.datetime_date_change_handler,app__$1,eid__$1,attr_ident__$1,current_utc_datetime)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_time,new cljs.core.Keyword(null,"model","model",331153215),dat.view.datetime__GT_time_int.call(null,cljs.core.deref.call(null,current_utc_datetime)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.partial.call(null,dat.view.datetime_time_int_change_handler,app__$1,eid__$1,attr_ident__$1,current_utc_datetime)], null)], null)], null);
});
;})(current_utc_datetime,vec__87771,_,context,vec__87774,eid,attr_ident,value))
}));
dat.view.datetime_selector = (function dat$view$datetime_selector(app,eid,attr_ident,value){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dat.view.represent,app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.view","datetime-selector","dat.view/datetime-selector",-1819103649),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eid,attr_ident,value], null)], null);
});
/**
 * DEPRECATED
 */
dat.view.boolean_selector = (function dat$view$boolean_selector(app,eid,attr_ident,value){
var current_value = cljs.core.atom.call(null,value);
return ((function (current_value){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.checkbox,new cljs.core.Keyword(null,"model","model",331153215),cljs.core.deref.call(null,current_value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (current_value){
return (function (new_value){
var old_value = cljs.core.deref.call(null,current_value);
cljs.core.reset_BANG_.call(null,current_value,new_value);

return dat.view.send_tx_BANG_.call(null,app,cljs.core.concat.call(null,(((old_value == null))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),eid,attr_ident,old_value], null)], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),eid,attr_ident,new_value], null)], null)));
});})(current_value))
], null);
});
;})(current_value))
});
dat.view.boolean_selector2 = (function dat$view$boolean_selector2(app,eid,attr_ident,value){
var current_value = cljs.core.atom.call(null,value);
return ((function (current_value){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.checkbox,new cljs.core.Keyword(null,"model","model",331153215),cljs.core.deref.call(null,current_value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (current_value){
return (function (new_value){
var old_value = cljs.core.deref.call(null,current_value);
cljs.core.reset_BANG_.call(null,current_value,new_value);

return dat.view.global_tx_BANG_.call(null,app,cljs.core.concat.call(null,(((old_value == null))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),eid,attr_ident,old_value], null)], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),eid,attr_ident,new_value], null)], null)));
});})(current_value))
], null);
});
;})(current_value))
});
dat.view.input_for = (function dat$view$input_for(app,context,pull_expr,eid,attr_ident,value){
var child_context = cljs.core.assoc.call(null,new cljs.core.Keyword("dat.view.context","locals","dat.view.context/locals",2099213948).cljs$core$IFn$_invoke$arity$1(context),new cljs.core.Keyword("dat.view","pull-expr","dat.view/pull-expr",523109997),pull_expr);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dat.view.represent,app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.view","input-for","dat.view/input-for",-1325907962),child_context], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eid,attr_ident,value], null)], null);
});
dat.view.representation.register_representation.call(null,new cljs.core.Keyword("dat.view","input-for","dat.view/input-for",-1325907962),(function (app,p__87786,p__87787){
var vec__87788 = p__87786;
var _ = cljs.core.nth.call(null,vec__87788,(0),null);
var context = cljs.core.nth.call(null,vec__87788,(1),null);
var vec__87791 = p__87787;
var eid = cljs.core.nth.call(null,vec__87791,(0),null);
var attr_ident = cljs.core.nth.call(null,vec__87791,(1),null);
var value = cljs.core.nth.call(null,vec__87791,(2),null);
var attr = cljs.core.deref.call(null,dat.view.attr_signature_reaction.call(null,app,attr_ident));
var pull_expr = new cljs.core.Keyword("dat.view","pull-expr","dat.view/pull-expr",523109997).cljs$core$IFn$_invoke$arity$1(context);
var local_context = new cljs.core.Keyword("dat.view.context","locals","dat.view.context/locals",2099213948).cljs$core$IFn$_invoke$arity$1(context);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword("dom","attrs","dom/attrs",-2091026283).cljs$core$IFn$_invoke$arity$1(context),(function (){var control_context = cljs.core.assoc.call(null,local_context,new cljs.core.Keyword("dat.view","controls","dat.view/controls",2009457336),new cljs.core.Keyword("dat.view","controls","dat.view/controls",2009457336).cljs$core$IFn$_invoke$arity$1(context));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dat.view.represent,app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.view","control-set","dat.view/control-set",587644972),control_context], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eid,attr_ident,value], null)], null);
})(),(function (){try{if(((!((attr == null)))?((((attr.cljs$lang$protocol_mask$partition0$ & (256))) || ((cljs.core.PROTOCOL_SENTINEL === attr.cljs$core$ILookup$)))?true:(((!attr.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,attr):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,attr))){
try{var attr_valueType__87798 = cljs.core.get.call(null,attr,new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,attr_valueType__87798,new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079))){
try{var attr_isComponent__87799 = cljs.core.get.call(null,attr,new cljs.core.Keyword("db","isComponent","db/isComponent",423352398),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((attr_isComponent__87799 === true)){
var sub_expr = cljs.core.some.call(null,((function (attr_isComponent__87799,attr_valueType__87798,attr,pull_expr,local_context,vec__87788,_,context,vec__87791,eid,attr_ident,value){
return (function (p1__87785_SHARP_){
return cljs.core.get.call(null,p1__87785_SHARP_,attr_ident);
});})(attr_isComponent__87799,attr_valueType__87798,attr,pull_expr,local_context,vec__87788,_,context,vec__87791,eid,attr_ident,value))
,pull_expr);
var sub_expr__$1 = ((cljs.core._EQ_.call(null,sub_expr,new cljs.core.Symbol(null,"...","...",-1926939749,null)))?(function (){var or__60899__auto__ = new cljs.core.Keyword("dat.view","root-pull-expr","dat.view/root-pull-expr",-2013146326).cljs$core$IFn$_invoke$arity$1(context);
if(cljs.core.truth_(or__60899__auto__)){
return or__60899__auto__;
} else {
return pull_expr;
}
})():sub_expr);
var local_context__$1 = cljs.core.assoc.call(null,local_context,new cljs.core.Keyword("dat.view","pull-expr","dat.view/pull-expr",523109997),sub_expr__$1);
var local_context__$2 = (cljs.core.truth_(new cljs.core.Keyword("dat.view","root-pull-expr","dat.view/root-pull-expr",-2013146326).cljs$core$IFn$_invoke$arity$1(context))?local_context__$1:cljs.core.assoc.call(null,local_context__$1,new cljs.core.Keyword("dat.view","root-pull-expr","dat.view/root-pull-expr",-2013146326),pull_expr));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [dat.view.pull_form,app,local_context__$2,sub_expr__$1,value], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e87809){if((e87809 instanceof Error)){
var e__37574__auto__ = e87809;
if((e__37574__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [dat.view.select_entity_input,app,context,eid,attr_ident,value], null);
} else {
throw e__37574__auto__;
}
} else {
throw e87809;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e87802){if((e87802 instanceof Error)){
var e__37574__auto__ = e87802;
if((e__37574__auto__ === cljs.core.match.backtrack)){
try{var attr_valueType__87798 = cljs.core.get.call(null,attr,new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,attr_valueType__87798,new cljs.core.Keyword("db.type","instant","db.type/instant",-1024769248))){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [dat.view.datetime_selector,app,eid,attr_ident,value], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e87803){if((e87803 instanceof Error)){
var e__37574__auto____$1 = e87803;
if((e__37574__auto____$1 === cljs.core.match.backtrack)){
try{var attr_valueType__87798 = cljs.core.get.call(null,attr,new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,attr_valueType__87798,new cljs.core.Keyword("db.type","boolean","db.type/boolean",-645454270))){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [dat.view.boolean_selector2,app,eid,attr_ident,value], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e87804){if((e87804 instanceof Error)){
var e__37574__auto____$2 = e87804;
if((e__37574__auto____$2 === cljs.core.match.backtrack)){
try{var attr_valueType__87798 = cljs.core.get.call(null,attr,new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,attr_valueType__87798,new cljs.core.Keyword("db.type","float","db.type/float",-315575090))){
return cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(new cljs.core.Keyword("dat.view","text-rows","dat.view/text-rows",600063895).cljs$core$IFn$_invoke$arity$1(context))?re_com.core.input_textarea:re_com.core.input_text),new cljs.core.Keyword(null,"model","model",331153215),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword("dat.view","input-style","dat.view/input-style",1364529078).cljs$core$IFn$_invoke$arity$1(context),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("dat.view","input-style","dat.view/input-style",1364529078).cljs$core$IFn$_invoke$arity$1(context)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.partial.call(null,dat.view.value_change_handler,app,eid,attr_ident)], null),(function (){var temp__6738__auto__ = new cljs.core.Keyword("dat.view","placeholder","dat.view/placeholder",1640782113).cljs$core$IFn$_invoke$arity$1(context);
if(cljs.core.truth_(temp__6738__auto__)){
var placeholder = temp__6738__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder], null);
} else {
return null;
}
})(),(function (){var temp__6738__auto__ = new cljs.core.Keyword("dat.view","text-rows","dat.view/text-rows",600063895).cljs$core$IFn$_invoke$arity$1(context);
if(cljs.core.truth_(temp__6738__auto__)){
var rows = temp__6738__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680),rows], null);
} else {
return null;
}
})()));
} else {
throw cljs.core.match.backtrack;

}
}catch (e87805){if((e87805 instanceof Error)){
var e__37574__auto____$3 = e87805;
if((e__37574__auto____$3 === cljs.core.match.backtrack)){
try{var attr_valueType__87798 = cljs.core.get.call(null,attr,new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,attr_valueType__87798,new cljs.core.Keyword("db.type","double","db.type/double",-521884231))){
return cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(new cljs.core.Keyword("dat.view","text-rows","dat.view/text-rows",600063895).cljs$core$IFn$_invoke$arity$1(context))?re_com.core.input_textarea:re_com.core.input_text),new cljs.core.Keyword(null,"model","model",331153215),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword("dat.view","input-style","dat.view/input-style",1364529078).cljs$core$IFn$_invoke$arity$1(context),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("dat.view","input-style","dat.view/input-style",1364529078).cljs$core$IFn$_invoke$arity$1(context)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.partial.call(null,dat.view.value_change_handler,app,eid,attr_ident)], null),(function (){var temp__6738__auto__ = new cljs.core.Keyword("dat.view","placeholder","dat.view/placeholder",1640782113).cljs$core$IFn$_invoke$arity$1(context);
if(cljs.core.truth_(temp__6738__auto__)){
var placeholder = temp__6738__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder], null);
} else {
return null;
}
})(),(function (){var temp__6738__auto__ = new cljs.core.Keyword("dat.view","text-rows","dat.view/text-rows",600063895).cljs$core$IFn$_invoke$arity$1(context);
if(cljs.core.truth_(temp__6738__auto__)){
var rows = temp__6738__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680),rows], null);
} else {
return null;
}
})()));
} else {
throw cljs.core.match.backtrack;

}
}catch (e87806){if((e87806 instanceof Error)){
var e__37574__auto____$4 = e87806;
if((e__37574__auto____$4 === cljs.core.match.backtrack)){
try{var attr_valueType__87798 = cljs.core.get.call(null,attr,new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,attr_valueType__87798,new cljs.core.Keyword("db.type","integer","db.type/integer",797688700))){
return cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(new cljs.core.Keyword("dat.view","text-rows","dat.view/text-rows",600063895).cljs$core$IFn$_invoke$arity$1(context))?re_com.core.input_textarea:re_com.core.input_text),new cljs.core.Keyword(null,"model","model",331153215),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword("dat.view","input-style","dat.view/input-style",1364529078).cljs$core$IFn$_invoke$arity$1(context),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("dat.view","input-style","dat.view/input-style",1364529078).cljs$core$IFn$_invoke$arity$1(context)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.partial.call(null,dat.view.value_change_handler,app,eid,attr_ident)], null),(function (){var temp__6738__auto__ = new cljs.core.Keyword("dat.view","placeholder","dat.view/placeholder",1640782113).cljs$core$IFn$_invoke$arity$1(context);
if(cljs.core.truth_(temp__6738__auto__)){
var placeholder = temp__6738__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder], null);
} else {
return null;
}
})(),(function (){var temp__6738__auto__ = new cljs.core.Keyword("dat.view","text-rows","dat.view/text-rows",600063895).cljs$core$IFn$_invoke$arity$1(context);
if(cljs.core.truth_(temp__6738__auto__)){
var rows = temp__6738__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680),rows], null);
} else {
return null;
}
})()));
} else {
throw cljs.core.match.backtrack;

}
}catch (e87807){if((e87807 instanceof Error)){
var e__37574__auto____$5 = e87807;
if((e__37574__auto____$5 === cljs.core.match.backtrack)){
try{var attr_valueType__87798 = cljs.core.get.call(null,attr,new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,attr_valueType__87798,new cljs.core.Keyword("db.type","long","db.type/long",700514073))){
return cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(new cljs.core.Keyword("dat.view","text-rows","dat.view/text-rows",600063895).cljs$core$IFn$_invoke$arity$1(context))?re_com.core.input_textarea:re_com.core.input_text),new cljs.core.Keyword(null,"model","model",331153215),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword("dat.view","input-style","dat.view/input-style",1364529078).cljs$core$IFn$_invoke$arity$1(context),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("dat.view","input-style","dat.view/input-style",1364529078).cljs$core$IFn$_invoke$arity$1(context)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.partial.call(null,dat.view.value_change_handler,app,eid,attr_ident)], null),(function (){var temp__6738__auto__ = new cljs.core.Keyword("dat.view","placeholder","dat.view/placeholder",1640782113).cljs$core$IFn$_invoke$arity$1(context);
if(cljs.core.truth_(temp__6738__auto__)){
var placeholder = temp__6738__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder], null);
} else {
return null;
}
})(),(function (){var temp__6738__auto__ = new cljs.core.Keyword("dat.view","text-rows","dat.view/text-rows",600063895).cljs$core$IFn$_invoke$arity$1(context);
if(cljs.core.truth_(temp__6738__auto__)){
var rows = temp__6738__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680),rows], null);
} else {
return null;
}
})()));
} else {
throw cljs.core.match.backtrack;

}
}catch (e87808){if((e87808 instanceof Error)){
var e__37574__auto____$6 = e87808;
if((e__37574__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37574__auto____$6;
}
} else {
throw e87808;

}
}} else {
throw e__37574__auto____$5;
}
} else {
throw e87807;

}
}} else {
throw e__37574__auto____$4;
}
} else {
throw e87806;

}
}} else {
throw e__37574__auto____$3;
}
} else {
throw e87805;

}
}} else {
throw e__37574__auto____$2;
}
} else {
throw e87804;

}
}} else {
throw e__37574__auto____$1;
}
} else {
throw e87803;

}
}} else {
throw e__37574__auto__;
}
} else {
throw e87802;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e87800){if((e87800 instanceof Error)){
var e__37574__auto__ = e87800;
if((e__37574__auto__ === cljs.core.match.backtrack)){
return cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(new cljs.core.Keyword("dat.view","text-rows","dat.view/text-rows",600063895).cljs$core$IFn$_invoke$arity$1(context))?re_com.core.input_textarea:re_com.core.input_text),new cljs.core.Keyword(null,"model","model",331153215),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword("dat.view","input-style","dat.view/input-style",1364529078).cljs$core$IFn$_invoke$arity$1(context),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("dat.view","input-style","dat.view/input-style",1364529078).cljs$core$IFn$_invoke$arity$1(context)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.partial.call(null,dat.view.value_change_handler,app,eid,attr_ident)], null),(function (){var temp__6738__auto__ = new cljs.core.Keyword("dat.view","placeholder","dat.view/placeholder",1640782113).cljs$core$IFn$_invoke$arity$1(context);
if(cljs.core.truth_(temp__6738__auto__)){
var placeholder = temp__6738__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder], null);
} else {
return null;
}
})(),(function (){var temp__6738__auto__ = new cljs.core.Keyword("dat.view","text-rows","dat.view/text-rows",600063895).cljs$core$IFn$_invoke$arity$1(context);
if(cljs.core.truth_(temp__6738__auto__)){
var rows = temp__6738__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680),rows], null);
} else {
return null;
}
})()));
} else {
throw e__37574__auto__;
}
} else {
throw e87800;

}
}})()], null);
}));
/**
 * DEPRECATED
 */
dat.view.create_type_reference_STAR_ = (function dat$view$create_type_reference_STAR_(app,eid,attr_ident,type_ident){
return dat.view.send_tx_BANG_.call(null,app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-1),new cljs.core.Keyword("e","type","e/type",1174270209),type_ident], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),eid,attr_ident,(-1)], null)], null));
});
dat.view.create_type_reference2_STAR_ = (function dat$view$create_type_reference2_STAR_(app,eid,attr_ident,type_ident){
return dat.view.global_tx_BANG_.call(null,app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-1),new cljs.core.Keyword("e","type","e/type",1174270209),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096),type_ident], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),eid,attr_ident,(-1)], null)], null));
});
dat.view.create_type_reference = (function dat$view$create_type_reference(app,eid,attr_ident,type_ident){
return dat.view.create_type_reference2_STAR_.call(null,app,eid,attr_ident,type_ident);
});
dat.view.attr_type_selector = (function dat$view$attr_type_selector(type_idents,selected_type,ok_fn,cancel_fn){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Please select an entity type"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"choices","choices",1385611597),cljs.core.mapv.call(null,(function (x){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),x,new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.pr_str.call(null,x)], null);
}),type_idents),new cljs.core.Keyword(null,"model","model",331153215),selected_type,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"300px"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (x){
return cljs.core.reset_BANG_.call(null,selected_type,x);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_icon_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi-check",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"larger","larger",1304935444),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"10px"], null),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),"add selected entity",new cljs.core.Keyword(null,"on-click","on-click",1632826543),ok_fn], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_icon_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi-close-circle",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"larger","larger",1304935444),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"10px"], null),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),"Cancel",new cljs.core.Keyword(null,"on-click","on-click",1632826543),cancel_fn], null)], null)], null)], null)], null);
});
dat.view.field_for_skeleton = (function dat$view$field_for_skeleton(app,attr_ident,controls,inputs){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex-flow","flex-flow",544537375),"column wrap"], null),new cljs.core.Keyword(null,"padding","padding",1660304693),"10px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex-flow","flex-flow",544537375),"row wrap"], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dat.view.label_view,app,attr_ident], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),controls], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex-flow","flex-flow",544537375),"column wrap"], null),new cljs.core.Keyword(null,"children","children",-940561982),inputs], null)], null)], null);
});
/**
 * Simple add reference button
 */
dat.view.add_reference_button = (function dat$view$add_reference_button(var_args){
var args87810 = [];
var len__62120__auto___87813 = arguments.length;
var i__62121__auto___87814 = (0);
while(true){
if((i__62121__auto___87814 < len__62120__auto___87813)){
args87810.push((arguments[i__62121__auto___87814]));

var G__87815 = (i__62121__auto___87814 + (1));
i__62121__auto___87814 = G__87815;
continue;
} else {
}
break;
}

var G__87812 = args87810.length;
switch (G__87812) {
case 2:
return dat.view.add_reference_button.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dat.view.add_reference_button.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args87810.length)].join('')));

}
});

dat.view.add_reference_button.cljs$core$IFn$_invoke$arity$2 = (function (tooltip,on_click_fn){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_icon_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi-plus",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"smaller","smaller",-1619801498),new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click_fn,new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),tooltip], null);
});

dat.view.add_reference_button.cljs$core$IFn$_invoke$arity$1 = (function (on_click_fn){
return dat.view.add_reference_button.call(null,"Add entity",on_click_fn);
});

dat.view.add_reference_button.cljs$lang$maxFixedArity = 2;

/**
 * Simply add a reference for a given type (TODO...)
 */
dat.view.add_reference_for_type_button = (function dat$view$add_reference_for_type_button(tooltip,type_ident){
return null;
});
/**
 * An add reference button that pops up a modal form with a submit button.
 *   modal-popup arg should be a component that takes param:
 *   * form-activated?: an atom with a bool indicating whether the form should be shown.
 *   This component should make sure to toggle form-activated? when it's done creating
 *   the component, or if there is a cancelation.
 */
dat.view.add_reference_button_modal = (function dat$view$add_reference_button_modal(var_args){
var args87817 = [];
var len__62120__auto___87820 = arguments.length;
var i__62121__auto___87821 = (0);
while(true){
if((i__62121__auto___87821 < len__62120__auto___87820)){
args87817.push((arguments[i__62121__auto___87821]));

var G__87822 = (i__62121__auto___87821 + (1));
i__62121__auto___87821 = G__87822;
continue;
} else {
}
break;
}

var G__87819 = args87817.length;
switch (G__87819) {
case 2:
return dat.view.add_reference_button_modal.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dat.view.add_reference_button_modal.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args87817.length)].join('')));

}
});

dat.view.add_reference_button_modal.cljs$core$IFn$_invoke$arity$2 = (function (tooltip,modal_popup){
var form_activated_QMARK_ = reagent.core.atom.call(null,false);
return ((function (form_activated_QMARK_){
return (function (tooltip__$1,modal_popup__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dat.view.add_reference_button,tooltip__$1,((function (form_activated_QMARK_){
return (function (){
return cljs.core.reset_BANG_.call(null,form_activated_QMARK_,true);
});})(form_activated_QMARK_))
], null),(cljs.core.truth_(cljs.core.deref.call(null,form_activated_QMARK_))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.modal_panel,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [modal_popup__$1,form_activated_QMARK_], null)], null):null)], null)], null);
});
;})(form_activated_QMARK_))
});

dat.view.add_reference_button_modal.cljs$core$IFn$_invoke$arity$1 = (function (modal_popup){
return dat.view.add_reference_button.call(null,"Add entity",modal_popup);
});

dat.view.add_reference_button_modal.cljs$lang$maxFixedArity = 2;

dat.view.representation.register_representation.call(null,new cljs.core.Keyword("dat.view","add-reference-button","dat.view/add-reference-button",-2105141825),(function (app,p__87824,p__87825){
var vec__87826 = p__87824;
var _ = cljs.core.nth.call(null,vec__87826,(0),null);
var context = cljs.core.nth.call(null,vec__87826,(1),null);
var vec__87829 = p__87825;
var eid = cljs.core.nth.call(null,vec__87829,(0),null);
var attr_ident = cljs.core.nth.call(null,vec__87829,(1),null);
var values = cljs.core.nth.call(null,vec__87829,(2),null);
var attr_sig = cljs.core.deref.call(null,dat.view.context.attr_signature_reaction.call(null,app,attr_ident));
var activate_type_selector_QMARK_ = reagent.core.atom.call(null,false);
var selected_type = reagent.core.atom.call(null,null);
var cancel_fn = ((function (attr_sig,activate_type_selector_QMARK_,selected_type,vec__87826,_,context,vec__87829,eid,attr_ident,values){
return (function (){
cljs.core.reset_BANG_.call(null,activate_type_selector_QMARK_,false);

cljs.core.reset_BANG_.call(null,selected_type,null);

return false;
});})(attr_sig,activate_type_selector_QMARK_,selected_type,vec__87826,_,context,vec__87829,eid,attr_ident,values))
;
var ok_fn = ((function (attr_sig,activate_type_selector_QMARK_,selected_type,cancel_fn,vec__87826,_,context,vec__87829,eid,attr_ident,values){
return (function (){
cljs.core.reset_BANG_.call(null,activate_type_selector_QMARK_,false);

dat.view.create_type_reference.call(null,app,eid,attr_ident,cljs.core.deref.call(null,selected_type));

cljs.core.reset_BANG_.call(null,selected_type,null);

return false;
});})(attr_sig,activate_type_selector_QMARK_,selected_type,cancel_fn,vec__87826,_,context,vec__87829,eid,attr_ident,values))
;
return ((function (attr_sig,activate_type_selector_QMARK_,selected_type,cancel_fn,ok_fn,vec__87826,_,context,vec__87829,eid,attr_ident,values){
return (function (app__$1,p__87832,p__87833){
var vec__87834 = p__87832;
var ___$1 = cljs.core.nth.call(null,vec__87834,(0),null);
var context__$1 = cljs.core.nth.call(null,vec__87834,(1),null);
var vec__87837 = p__87833;
var eid__$1 = cljs.core.nth.call(null,vec__87837,(0),null);
var attr_ident__$1 = cljs.core.nth.call(null,vec__87837,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__87837,(2),null);
var type_idents = new cljs.core.Keyword("attribute.ref","types","attribute.ref/types",-780449566).cljs$core$IFn$_invoke$arity$1(attr_sig);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dat.view.add_reference_button,((function (type_idents,vec__87834,___$1,context__$1,vec__87837,eid__$1,attr_ident__$1,___$2,attr_sig,activate_type_selector_QMARK_,selected_type,cancel_fn,ok_fn,vec__87826,_,context,vec__87829,eid,attr_ident,values){
return (function (){
if((cljs.core.count.call(null,type_idents) > (1))){
return cljs.core.reset_BANG_.call(null,activate_type_selector_QMARK_,true);
} else {
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,type_idents),(0))){
return alert("No types associated with this attribute; This will be allowed in the future, till then please find/file a GH issue to show interest.");
} else {
return dat.view.create_type_reference.call(null,app__$1,eid__$1,attr_ident__$1,cljs.core.first.call(null,type_idents));

}
}
});})(type_idents,vec__87834,___$1,context__$1,vec__87837,eid__$1,attr_ident__$1,___$2,attr_sig,activate_type_selector_QMARK_,selected_type,cancel_fn,ok_fn,vec__87826,_,context,vec__87829,eid,attr_ident,values))
], null),(cljs.core.truth_(cljs.core.deref.call(null,activate_type_selector_QMARK_))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.modal_panel,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [dat.view.attr_type_selector,type_idents,selected_type,ok_fn,cancel_fn], null)], null):null)], null);
});
;})(attr_sig,activate_type_selector_QMARK_,selected_type,cancel_fn,ok_fn,vec__87826,_,context,vec__87829,eid,attr_ident,values))
}));
dat.view.representation.register_representation.call(null,new cljs.core.Keyword("dat.view","fields-for","dat.view/fields-for",691698105),(function (app,p__87840,p__87841){
var vec__87842 = p__87840;
var _ = cljs.core.nth.call(null,vec__87842,(0),null);
var context = cljs.core.nth.call(null,vec__87842,(1),null);
var vec__87845 = p__87841;
var eid = cljs.core.nth.call(null,vec__87845,(0),null);
var attr_ident = cljs.core.nth.call(null,vec__87845,(1),null);
var value = cljs.core.nth.call(null,vec__87845,(2),null);
return ((function (vec__87842,_,context,vec__87845,eid,attr_ident,value){
return (function (app__$1,p__87848,p__87849){
var vec__87850 = p__87848;
var ___$1 = cljs.core.nth.call(null,vec__87850,(0),null);
var context__$1 = cljs.core.nth.call(null,vec__87850,(1),null);
var vec__87853 = p__87849;
var eid__$1 = cljs.core.nth.call(null,vec__87853,(0),null);
var attr_ident__$1 = cljs.core.nth.call(null,vec__87853,(1),null);
var value__$1 = cljs.core.nth.call(null,vec__87853,(2),null);
var pull_expr = new cljs.core.Keyword("dat.view","pull-expr","dat.view/pull-expr",523109997).cljs$core$IFn$_invoke$arity$1(context__$1);
var conn = new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(app__$1);
var value__$2 = (function (){var or__60899__auto__ = value__$1;
if(cljs.core.truth_(or__60899__auto__)){
return or__60899__auto__;
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,posh.reagent.pull.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr_ident__$1], null),eid__$1)),attr_ident__$1);
}
})();
var local_context = new cljs.core.Keyword("dat.view.context","locals","dat.view.context/locals",2099213948).cljs$core$IFn$_invoke$arity$1(context__$1);
if(cljs.core.truth_((function (){var and__60887__auto__ = eid__$1;
if(cljs.core.truth_(and__60887__auto__)){
return cljs.core.not.call(null,(function (){var or__60899__auto__ = new cljs.core.Keyword("attribute","hidden?","attribute/hidden?",1419899352).cljs$core$IFn$_invoke$arity$1(context__$1);
if(cljs.core.truth_(or__60899__auto__)){
return or__60899__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),null,new cljs.core.Keyword("db","ident","db/ident",-737096),null], null), null).call(null,attr_ident__$1);
}
})());
} else {
return and__60887__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword("dom","attrs","dom/attrs",-2091026283).cljs$core$IFn$_invoke$arity$1(context__$1),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),dat.view.h_box_styles], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dat.view.label_view,app__$1,attr_ident__$1], null),(function (){var control_context = cljs.core.assoc.call(null,local_context,new cljs.core.Keyword("dat.view","controls","dat.view/controls",2009457336),new cljs.core.Keyword("dat.view","controls","dat.view/controls",2009457336).cljs$core$IFn$_invoke$arity$1(context__$1));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dat.view.represent,app__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.view","control-set","dat.view/control-set",587644972),control_context], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eid__$1,attr_ident__$1,value__$2], null)], null);
})()], null),(function (){var iter__61761__auto__ = ((function (pull_expr,conn,value__$2,local_context,vec__87850,___$1,context__$1,vec__87853,eid__$1,attr_ident__$1,value__$1,vec__87842,_,context,vec__87845,eid,attr_ident,value){
return (function dat$view$iter__87856(s__87857){
return (new cljs.core.LazySeq(null,((function (pull_expr,conn,value__$2,local_context,vec__87850,___$1,context__$1,vec__87853,eid__$1,attr_ident__$1,value__$1,vec__87842,_,context,vec__87845,eid,attr_ident,value){
return (function (){
var s__87857__$1 = s__87857;
while(true){
var temp__6738__auto__ = cljs.core.seq.call(null,s__87857__$1);
if(temp__6738__auto__){
var s__87857__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__87857__$2)){
var c__61759__auto__ = cljs.core.chunk_first.call(null,s__87857__$2);
var size__61760__auto__ = cljs.core.count.call(null,c__61759__auto__);
var b__87859 = cljs.core.chunk_buffer.call(null,size__61760__auto__);
if((function (){var i__87858 = (0);
while(true){
if((i__87858 < size__61760__auto__)){
var value__$3 = cljs.core._nth.call(null,c__61759__auto__,i__87858);
cljs.core.chunk_append.call(null,b__87859,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dat.view.represent,app__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.view","input-for","dat.view/input-for",-1325907962),local_context], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eid__$1,attr_ident__$1,value__$3], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.hash.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"fields-for","fields-for",-1050734427),new cljs.core.Keyword(null,"eid","eid",559519930),eid__$1,new cljs.core.Keyword(null,"attr-ident","attr-ident",-1689455267),attr_ident__$1,new cljs.core.Keyword(null,"value","value",305978217),value__$3], null))], null)));

var G__87860 = (i__87858 + (1));
i__87858 = G__87860;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__87859),dat$view$iter__87856.call(null,cljs.core.chunk_rest.call(null,s__87857__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__87859),null);
}
} else {
var value__$3 = cljs.core.first.call(null,s__87857__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dat.view.represent,app__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.view","input-for","dat.view/input-for",-1325907962),local_context], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eid__$1,attr_ident__$1,value__$3], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.hash.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"fields-for","fields-for",-1050734427),new cljs.core.Keyword(null,"eid","eid",559519930),eid__$1,new cljs.core.Keyword(null,"attr-ident","attr-ident",-1689455267),attr_ident__$1,new cljs.core.Keyword(null,"value","value",305978217),value__$3], null))], null)),dat$view$iter__87856.call(null,cljs.core.rest.call(null,s__87857__$2)));
}
} else {
return null;
}
break;
}
});})(pull_expr,conn,value__$2,local_context,vec__87850,___$1,context__$1,vec__87853,eid__$1,attr_ident__$1,value__$1,vec__87842,_,context,vec__87845,eid,attr_ident,value))
,null,null));
});})(pull_expr,conn,value__$2,local_context,vec__87850,___$1,context__$1,vec__87853,eid__$1,attr_ident__$1,value__$1,vec__87842,_,context,vec__87845,eid,attr_ident,value))
;
return iter__61761__auto__.call(null,(function (){var value__$3 = dat.view.utils.deref_or_value.call(null,value__$2);
return dat.view.sorted_values.call(null,app__$1,attr_ident__$1,(function (){var or__60899__auto__ = ((cljs.core.sequential_QMARK_.call(null,value__$3))?cljs.core.seq.call(null,value__$3):null);
if(cljs.core.truth_(or__60899__auto__)){
return or__60899__auto__;
} else {
var or__60899__auto____$1 = (cljs.core.truth_(value__$3)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value__$3], null):null);
if(cljs.core.truth_(or__60899__auto____$1)){
return or__60899__auto____$1;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null);
}
}
})());
})());
})()], null);
} else {
return null;
}
});
;})(vec__87842,_,context,vec__87845,eid,attr_ident,value))
}));
dat.view.fields_for = (function dat$view$fields_for(app,context,eid,attr_ident,value){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dat.view.represent,app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.view","fields-for","dat.view/fields-for",691698105),context], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eid,attr_ident,value], null)], null);
});
/**
 * Grabs attributes corresponding to * pulls, not otherwise fetched at the top level of a pull-expr
 */
dat.view.rest_attributes = (function dat$view$rest_attributes(pull_expr,pull_data){
return cljs.core.remove.call(null,cljs.core.keys.call(null,pull_data),cljs.core.flatten.call(null,cljs.core.map.call(null,(function (attr_spec){
if(cljs.core.map_QMARK_.call(null,attr_spec)){
return cljs.core.keys.call(null,attr_spec);
} else {
return attr_spec;
}
}),pull_expr)));
});
dat.view.representation.register_representation.call(null,new cljs.core.Keyword("dat.view","pull-form","dat.view/pull-form",466212808),(function (app,p__87861,pull_data_or_id){
var vec__87862 = p__87861;
var _ = cljs.core.nth.call(null,vec__87862,(0),null);
var context = cljs.core.nth.call(null,vec__87862,(1),null);
var pull_expr = dat.view.deref_or_value.call(null,dat.view.entity_pull.call(null,app,pull_data_or_id));
var pull_data_or_id__$1 = dat.view.deref_or_value.call(null,pull_data_or_id);
var local_context = new cljs.core.Keyword("dat.view.context","locals","dat.view.context/locals",2099213948).cljs$core$IFn$_invoke$arity$1(context);
var eid = (cljs.core.truth_(cljs.core.some_fn.call(null,cljs.core.integer_QMARK_,cljs.core.vector_QMARK_).call(null,pull_data_or_id__$1))?pull_data_or_id__$1:((cljs.core.map_QMARK_.call(null,pull_data_or_id__$1))?new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(pull_data_or_id__$1):null));
var pull_data = cljs.core.deref.call(null,posh.reagent.pull.call(null,new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(app),pull_expr,eid));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword("dom","attrs","dom/attrs",-2091026283).cljs$core$IFn$_invoke$arity$1(context),(function (){var control_context = cljs.core.assoc.call(null,local_context,new cljs.core.Keyword("dat.view","controls","dat.view/controls",2009457336),new cljs.core.Keyword("dat.view","controls","dat.view/controls",2009457336).cljs$core$IFn$_invoke$arity$1(context));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dat.view.represent,app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.view","control-set","dat.view/control-set",587644972),control_context], null),pull_data], null);
})(),(function (){var iter__61761__auto__ = ((function (pull_expr,pull_data_or_id__$1,local_context,eid,pull_data,vec__87862,_,context){
return (function dat$view$iter__87865(s__87866){
return (new cljs.core.LazySeq(null,((function (pull_expr,pull_data_or_id__$1,local_context,eid,pull_data,vec__87862,_,context){
return (function (){
var s__87866__$1 = s__87866;
while(true){
var temp__6738__auto__ = cljs.core.seq.call(null,s__87866__$1);
if(temp__6738__auto__){
var s__87866__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__87866__$2)){
var c__61759__auto__ = cljs.core.chunk_first.call(null,s__87866__$2);
var size__61760__auto__ = cljs.core.count.call(null,c__61759__auto__);
var b__87868 = cljs.core.chunk_buffer.call(null,size__61760__auto__);
if((function (){var i__87867 = (0);
while(true){
if((i__87867 < size__61760__auto__)){
var attr_ident = cljs.core._nth.call(null,c__61759__auto__,i__87867);
cljs.core.chunk_append.call(null,b__87868,(function (){var values = cljs.core.get.call(null,pull_data_or_id__$1,attr_ident);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dat.view.represent,app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.view","fields-for","dat.view/fields-for",691698105),cljs.core.assoc.call(null,local_context,new cljs.core.Keyword("db.attr","ident","db.attr/ident",1809115541),attr_ident)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eid,attr_ident,values], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.hash.call(null,attr_ident)], null));
})());

var G__87869 = (i__87867 + (1));
i__87867 = G__87869;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__87868),dat$view$iter__87865.call(null,cljs.core.chunk_rest.call(null,s__87866__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__87868),null);
}
} else {
var attr_ident = cljs.core.first.call(null,s__87866__$2);
return cljs.core.cons.call(null,(function (){var values = cljs.core.get.call(null,pull_data_or_id__$1,attr_ident);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dat.view.represent,app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.view","fields-for","dat.view/fields-for",691698105),cljs.core.assoc.call(null,local_context,new cljs.core.Keyword("db.attr","ident","db.attr/ident",1809115541),attr_ident)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eid,attr_ident,values], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.hash.call(null,attr_ident)], null));
})(),dat$view$iter__87865.call(null,cljs.core.rest.call(null,s__87866__$2)));
}
} else {
return null;
}
break;
}
});})(pull_expr,pull_data_or_id__$1,local_context,eid,pull_data,vec__87862,_,context))
,null,null));
});})(pull_expr,pull_data_or_id__$1,local_context,eid,pull_data,vec__87862,_,context))
;
return iter__61761__auto__.call(null,cljs.core.sort_by.call(null,cljs.core.comp.call(null,cljs.core.deref,cljs.core.partial.call(null,dat.view.attr_order,app)),dat.view.pull_attributes.call(null,pull_expr,pull_data)));
})()], null);
}));
/**
 * Renders a form with defaults from pull data, or for an existing entity, subject to optional specification of a
 *   pull expression (possibly annotated with context metadata; or nil, if pull-expr should be inferred), a context map
 *   (which itself may contain a `:dat.view/pull-expr`), and either pull data, or a lookup ref or eid corresponding to data which should be pulled.
 */
dat.view.pull_form = (function dat$view$pull_form(var_args){
var args87870 = [];
var len__62120__auto___87873 = arguments.length;
var i__62121__auto___87874 = (0);
while(true){
if((i__62121__auto___87874 < len__62120__auto___87873)){
args87870.push((arguments[i__62121__auto___87874]));

var G__87875 = (i__62121__auto___87874 + (1));
i__62121__auto___87874 = G__87875;
continue;
} else {
}
break;
}

var G__87872 = args87870.length;
switch (G__87872) {
case 2:
return dat.view.pull_form.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dat.view.pull_form.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return dat.view.pull_form.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args87870.length)].join('')));

}
});

dat.view.pull_form.cljs$core$IFn$_invoke$arity$2 = (function (app,pull_data_or_id){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dat.view.pull_form,app,null,pull_data_or_id], null);
});

dat.view.pull_form.cljs$core$IFn$_invoke$arity$3 = (function (app,pull_expr,pull_data_or_id){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [dat.view.pull_form,app,null,pull_expr,pull_data_or_id], null);
});

dat.view.pull_form.cljs$core$IFn$_invoke$arity$4 = (function (app,context,pull_expr,pull_data_or_id){
if(cljs.core.truth_(pull_data_or_id)){
var context__$1 = (cljs.core.truth_((function (){var and__60887__auto__ = pull_expr;
if(cljs.core.truth_(and__60887__auto__)){
return cljs.core.not.call(null,context);
} else {
return and__60887__auto__;
}
})())?cljs.core.merge.call(null,context,dat.view.meta_context.call(null,pull_expr)):context);
var context__$2 = cljs.core.assoc.call(null,context__$1,new cljs.core.Keyword("dat.view","pull-expr","dat.view/pull-expr",523109997),pull_expr);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dat.view.represent,app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.view","pull-form","dat.view/pull-form",466212808),(function (){var or__60899__auto__ = context__$2;
if(cljs.core.truth_(or__60899__auto__)){
return or__60899__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()], null),pull_data_or_id], null);
} else {
return null;
}
});

dat.view.pull_form.cljs$lang$maxFixedArity = 4;

dat.view.representation.register_representation.call(null,new cljs.core.Keyword("dat.view","edit-entity-form","dat.view/edit-entity-form",1326015497),(function (app,p__87877,eid){
var vec__87878 = p__87877;
var _ = cljs.core.nth.call(null,vec__87878,(0),null);
var context = cljs.core.nth.call(null,vec__87878,(1),null);
var temp__6736__auto__ = cljs.core.deref.call(null,dat.view.pull_attr.call(null,new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(app),eid,new cljs.core.Keyword("db","id","db/id",-1388397098)));
if(cljs.core.truth_(temp__6736__auto__)){
var eid__$1 = temp__6736__auto__;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),dat.view.v_box_styles,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Editing entity"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [dat.view.pull_form,app,context,null,eid__$1], null),(cljs.core.truth_(new cljs.core.Keyword("dat.view.edit","preview","dat.view.edit/preview",28371446).cljs$core$IFn$_invoke$arity$1(context))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),dat.view.v_box_styles,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Preview:"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [dat.view.pull_view,app,context,null,eid__$1], null)], null):null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dat.view.loading_notification,"Please wait; form data is loading."], null);
}
}));
/**
 * This is a somewhat higher level representation/control than ::pull-form. It is meant to be used as the outer most layer.
 */
dat.view.edit_entity_form = (function dat$view$edit_entity_form(app,context,eid){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dat.view.represent,app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.view","edit-entity-form","dat.view/edit-entity-form",1326015497),context], null),eid], null);
});
dat.view.type_data = cljs.core.memoize.call(null,(function (app,base_type){
return posh.reagent.pull.call(null,new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(app),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db","isComponent","db/isComponent",423352398),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("e","type","e/type",1174270209),new cljs.core.Symbol(null,"...","...",-1926939749,null),new cljs.core.Keyword("e.type","isa","e.type/isa",1998833162),new cljs.core.Symbol(null,"...","...",-1926939749,null),new cljs.core.Keyword("e.type","attributes","e.type/attributes",-1947278087),new cljs.core.Symbol(null,"...","...",-1926939749,null),new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Symbol(null,"...","...",-1926939749,null),new cljs.core.Keyword("attribute.ref","types","attribute.ref/types",-780449566),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null),base_type,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cache","cache",-1237023054),new cljs.core.Keyword(null,"forever","forever",2103455015)], null));
}));
dat.view.type_pull = cljs.core.memoize.call(null,(function() {
var dat$view$type_pull_STAR_ = null;
var dat$view$type_pull_STAR___2 = (function (app,base_type){
return dat$view$type_pull_STAR_.call(null,app,base_type,cljs.core.PersistentArrayMap.EMPTY);
});
var dat$view$type_pull_STAR___3 = (function (app,base_type,pull_summary_attrs){
return reagent.ratom.make_reaction.call(null,(function (){
var type_data = cljs.core.deref.call(null,dat.view.type_data.call(null,app,base_type));
return clojure.walk.postwalk.call(null,((function (type_data){
return (function (data){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("e","type","e/type",1174270209).cljs$core$IFn$_invoke$arity$1(data)),new cljs.core.Keyword("e.type","Type","e.type/Type",1148833992))){
return ((function (type_data){
return (function (p1__87881_SHARP_){
return cljs.core.with_meta.call(null,p1__87881_SHARP_,cljs.core.merge.call(null,cljs.core.meta.call(null,p1__87881_SHARP_),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("e","type-ident","e/type-ident",662275643),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(data)], null)));
});})(type_data))
.call(null,cljs.core.vec.call(null,cljs.core.distinct.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.concat.call(null,(function (){var temp__6738__auto__ = new cljs.core.Keyword("e.type","isa","e.type/isa",1998833162).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(temp__6738__auto__)){
var supertypes = temp__6738__auto__;
return cljs.core.apply.call(null,cljs.core.concat,supertypes);
} else {
return null;
}
})(),cljs.core.map.call(null,((function (type_data){
return (function (attr){
if(cljs.core.truth_(new cljs.core.Keyword("db.type","ref?","db.type/ref?",649820014).cljs$core$IFn$_invoke$arity$1(attr))){
if(cljs.core.truth_(new cljs.core.Keyword("db","isComponent","db/isComponent",423352398).cljs$core$IFn$_invoke$arity$1(attr))){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(attr),cljs.core.with_meta.call(null,cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,new cljs.core.Keyword("attribute.ref","types","attribute.ref/types",-780449566).cljs$core$IFn$_invoke$arity$1(attr))))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),true], null))]);
} else {
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(attr),cljs.core.with_meta.call(null,cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.get.call(null,pull_summary_attrs,new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(attr)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("e","name","e/name",1843675300),new cljs.core.Keyword("e","description","e/description",-1428560395),new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("e","type","e/type",1174270209),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","ident","db/ident",-737096)], null)], null)], null))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("dat.view","collapsed?","dat.view/collapsed?",-450528998),true,new cljs.core.Keyword("dat.view","collapsable?","dat.view/collapsable?",1095765451),true], null))]);
}
} else {
return new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(attr);
}
});})(type_data))
,cljs.core.sort_by.call(null,dat.view.attr_entity_order,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db","id","db/id",-1388397098)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db","ident","db/ident",-737096)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("e","type","e/type",1174270209),new cljs.core.Keyword("db.type","ref?","db.type/ref?",649820014),true,new cljs.core.Keyword("attribute.ref","types","attribute.ref/types",-780449566),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("e.type","Type","e.type/Type",1148833992),new cljs.core.Keyword("e.type","attributes","e.type/attributes",-1947278087),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db","id","db/id",-1388397098)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db","ident","db/ident",-737096)], null)], null)], null)], null)], null)], null),cljs.core.map.call(null,((function (type_data){
return (function (attr){
return cljs.core.assoc.call(null,attr,new cljs.core.Keyword("db.type","ref?","db.type/ref?",649820014),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),null], null), null).call(null,new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1(attr))));
});})(type_data))
,new cljs.core.Keyword("e.type","attributes","e.type/attributes",-1947278087).cljs$core$IFn$_invoke$arity$1(data))))))))));
} else {
return data;

}
});})(type_data))
,type_data);
}));
});
dat$view$type_pull_STAR_ = function(app,base_type,pull_summary_attrs){
switch(arguments.length){
case 2:
return dat$view$type_pull_STAR___2.call(this,app,base_type);
case 3:
return dat$view$type_pull_STAR___3.call(this,app,base_type,pull_summary_attrs);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
dat$view$type_pull_STAR_.cljs$core$IFn$_invoke$arity$2 = dat$view$type_pull_STAR___2;
dat$view$type_pull_STAR_.cljs$core$IFn$_invoke$arity$3 = dat$view$type_pull_STAR___3;
return dat$view$type_pull_STAR_;
})()
);
dat.view.entity_pull = cljs.core.memoize.call(null,(function() {
var dat$view$entity_pull_STAR_ = null;
var dat$view$entity_pull_STAR___2 = (function (app,entity_or_eid){
return dat$view$entity_pull_STAR_.call(null,app,entity_or_eid,cljs.core.PersistentArrayMap.EMPTY);
});
var dat$view$entity_pull_STAR___3 = (function (app,entity_or_eid,pull_summary_attrs){
if(((!((entity_or_eid == null)))?((((entity_or_eid.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === entity_or_eid.cljs$core$IDeref$)))?true:false):false)){
return dat$view$entity_pull_STAR_.call(null,app,cljs.core.deref.call(null,entity_or_eid),pull_summary_attrs);
} else {
if(cljs.core.map_QMARK_.call(null,entity_or_eid)){
var temp__6736__auto__ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("e","type","e/type",1174270209).cljs$core$IFn$_invoke$arity$1(entity_or_eid));
if(cljs.core.truth_(temp__6736__auto__)){
var type = temp__6736__auto__;
return dat.view.type_pull.call(null,app,type,pull_summary_attrs);
} else {
return dat$view$entity_pull_STAR_.call(null,app,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(entity_or_eid),pull_summary_attrs);
}
} else {
var type_id_rx = dat.view.pull_path.call(null,new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(app),entity_or_eid,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("e","type","e/type",1174270209),new cljs.core.Keyword("db","id","db/id",-1388397098)], null));
return reagent.ratom.make_reaction.call(null,((function (type_id_rx){
return (function (){
var temp__6736__auto__ = cljs.core.deref.call(null,type_id_rx);
if(cljs.core.truth_(temp__6736__auto__)){
var type_id = temp__6736__auto__;
return cljs.core.deref.call(null,dat.view.type_pull.call(null,app,type_id,pull_summary_attrs));
} else {
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"dat.view","/tmp/form-init8382301926859034614.clj",1566,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (temp__6736__auto__,type_id_rx){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad type id for entity-or-eid: ",entity_or_eid], null);
});})(temp__6736__auto__,type_id_rx))
,null)),null,1246038287);

return dat.view.base_pull;
}
});})(type_id_rx))
);

}
}
});
dat$view$entity_pull_STAR_ = function(app,entity_or_eid,pull_summary_attrs){
switch(arguments.length){
case 2:
return dat$view$entity_pull_STAR___2.call(this,app,entity_or_eid);
case 3:
return dat$view$entity_pull_STAR___3.call(this,app,entity_or_eid,pull_summary_attrs);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
dat$view$entity_pull_STAR_.cljs$core$IFn$_invoke$arity$2 = dat$view$entity_pull_STAR___2;
dat$view$entity_pull_STAR_.cljs$core$IFn$_invoke$arity$3 = dat$view$entity_pull_STAR___3;
return dat$view$entity_pull_STAR_;
})()
);
dat.view.meta_context = (function dat$view$meta_context(pull_expr){
var ref_attrs = cljs.core.filter.call(null,cljs.core.map_QMARK_,pull_expr);
var non_ref_attrs = cljs.core.remove.call(null,cljs.core.map_QMARK_,pull_expr);
return cljs.core.assoc.call(null,cljs.core.meta.call(null,pull_expr),new cljs.core.Keyword("dat.view","pull-expr","dat.view/pull-expr",523109997),pull_expr,new cljs.core.Keyword("dat.view","ref-attrs","dat.view/ref-attrs",140030239),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (ref_attrs,non_ref_attrs){
return (function (p__87888){
var vec__87889 = p__87888;
var attr_ident = cljs.core.nth.call(null,vec__87889,(0),null);
var attr_pull_expr = cljs.core.nth.call(null,vec__87889,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr_ident,dat.view.meta_context.call(null,attr_pull_expr)], null);
});})(ref_attrs,non_ref_attrs))
,cljs.core.apply.call(null,cljs.core.merge,ref_attrs))),new cljs.core.Keyword("dat.view","non-ref-attrs","dat.view/non-ref-attrs",-254282321),non_ref_attrs);
});
cljs.core.swap_BANG_.call(null,dat.view.context.default_base_context,dat.view.utils.deep_merge,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("dat.view","base-config","dat.view/base-config",1145005276),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("dat.view","pull-summary-view","dat.view/pull-summary-view",-546204668),new cljs.core.Keyword("dat.view","pull-form","dat.view/pull-form",466212808),new cljs.core.Keyword("dat.view","value-view","dat.view/value-view",-1236191956),new cljs.core.Keyword("dat.view","pull-data-view","dat.view/pull-data-view",1272314540),new cljs.core.Keyword("dat.view","pull-view-controls","dat.view/pull-view-controls",-1459141965),new cljs.core.Keyword("dat.view","label-view","dat.view/label-view",1771521843),new cljs.core.Keyword("dat.view","attr-values-view","dat.view/attr-values-view",1162973652),new cljs.core.Keyword("dat.view","attr-view","dat.view/attr-view",1759506839),new cljs.core.Keyword("dat.view","fields-for","dat.view/fields-for",691698105)],[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("dom","attrs","dom/attrs",-2091026283),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,dat.view.v_box_styles,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),"15px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold"], null))], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("dom","attrs","dom/attrs",-2091026283),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),dat.view.bordered_box_style], null),new cljs.core.Keyword("dat.view","controls","dat.view/controls",2009457336),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.view","delete-entity-control","dat.view/delete-entity-control",-2105401663)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("dom","attrs","dom/attrs",-2091026283),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,dat.view.h_box_styles,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"3px"], null))], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("dom","attrs","dom/attrs",-2091026283),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,dat.view.h_box_styles,dat.view.bordered_box_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"8px 15px",new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null))], null),new cljs.core.Keyword("dat.view","controls","dat.view/controls",2009457336),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.view","copy-entity-control","dat.view/copy-entity-control",-852239595),new cljs.core.Keyword("dat.view","edit-entity-control","dat.view/edit-entity-control",585020520),new cljs.core.Keyword("dat.view","delete-entity-control","dat.view/delete-entity-control",-2105401663)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("dom","attrs","dom/attrs",-2091026283),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,dat.view.h_box_styles,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"5px"], null))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("dom","attrs","dom/attrs",-2091026283),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("dom","attrs","dom/attrs",-2091026283),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),dat.view.h_box_styles], null),new cljs.core.Keyword("dat.view","collapsable?","dat.view/collapsable?",1095765451),true,new cljs.core.Keyword("dat.view","collapsed?","dat.view/collapsed?",-450528998),true], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("dom","attrs","dom/attrs",-2091026283),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,dat.view.v_box_styles,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"5px 12px"], null))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("dom","attrs","dom/attrs",-2091026283),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,dat.view.v_box_styles,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"7px"], null))], null)], null)]),new cljs.core.Keyword("dat.view","card-config","dat.view/card-config",-1032435729),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("dat.view","fields-for","dat.view/fields-for",691698105),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("dat.view","controls","dat.view/controls",2009457336),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.view","add-reference-button","dat.view/add-reference-button",-2105141825)], null)], null)], null)], null),new cljs.core.Keyword("dat.view","value-type-config","dat.view/value-type-config",564574161),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db.type","string","db.type/string",1432572808),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("dat.view","input-for","dat.view/input-for",-1325907962),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("dat.view","input-style","dat.view/input-style",1364529078),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"200px"], null)], null)], null),new cljs.core.Keyword("db.type","float","db.type/float",-315575090),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("dat.view","input-for","dat.view/input-for",-1325907962),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("dat.view","input-style","dat.view/input-style",1364529078),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"130px"], null)], null)], null),new cljs.core.Keyword("db.type","double","db.type/double",-521884231),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("dat.view","input-for","dat.view/input-for",-1325907962),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("dat.view","input-style","dat.view/input-style",1364529078),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"130px"], null)], null)], null),new cljs.core.Keyword("db.type","integer","db.type/integer",797688700),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("dat.view","input-for","dat.view/input-for",-1325907962),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("dat.view","input-style","dat.view/input-style",1364529078),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100px"], null)], null)], null),new cljs.core.Keyword("db.type","long","db.type/long",700514073),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("dat.view","input-for","dat.view/input-for",-1325907962),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("dat.view","input-style","dat.view/input-style",1364529078),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100px"], null)], null)], null)], null),new cljs.core.Keyword("dat.view","attr-config","dat.view/attr-config",-308000137),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("dat.view","fields-for","dat.view/fields-for",691698105),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("attribute","hidden?","attribute/hidden?",1419899352),true,new cljs.core.Keyword("dom","attrs","dom/attrs",-2091026283),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null)], null)], null)], null),new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("dat.view","fields-for","dat.view/fields-for",691698105),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("attribute","hidden?","attribute/hidden?",1419899352),true,new cljs.core.Keyword("dom","attrs","dom/attrs",-2091026283),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null)], null)], null)], null),new cljs.core.Keyword("comment","body","comment/body",1250275262),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("dat.view","input-for","dat.view/input-for",-1325907962),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("dat.view","input-style","dat.view/input-style",1364529078),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"500px"], null),new cljs.core.Keyword("dat.view","text-rows","dat.view/text-rows",600063895),(10)], null)], null),new cljs.core.Keyword("db","doc","db/doc",1913350069),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("dat.view","input-for","dat.view/input-for",-1325907962),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("dat.view","input-style","dat.view/input-style",1364529078),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"500px"], null),new cljs.core.Keyword("dat.view","text-rows","dat.view/text-rows",600063895),(10)], null)], null)], null)], null));

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
dat.view.Datview = (function (conn,config,routes,datascript,remote,dispatcher,main,__meta,__extmap,__hash){
this.conn = conn;
this.config = config;
this.routes = routes;
this.datascript = datascript;
this.remote = remote;
this.dispatcher = dispatcher;
this.main = main;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
dat.view.Datview.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__61574__auto__,k__61575__auto__){
var self__ = this;
var this__61574__auto____$1 = this;
return this__61574__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__61575__auto__,null);
});

dat.view.Datview.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__61576__auto__,k87893,else__61577__auto__){
var self__ = this;
var this__61576__auto____$1 = this;
var G__87895 = k87893;
var G__87895__$1 = (((G__87895 instanceof cljs.core.Keyword))?G__87895.fqn:null);
switch (G__87895__$1) {
case "conn":
return self__.conn;

break;
case "config":
return self__.config;

break;
case "routes":
return self__.routes;

break;
case "datascript":
return self__.datascript;

break;
case "remote":
return self__.remote;

break;
case "dispatcher":
return self__.dispatcher;

break;
case "main":
return self__.main;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k87893,else__61577__auto__);

}
});

dat.view.Datview.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__61588__auto__,writer__61589__auto__,opts__61590__auto__){
var self__ = this;
var this__61588__auto____$1 = this;
var pr_pair__61591__auto__ = ((function (this__61588__auto____$1){
return (function (keyval__61592__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__61589__auto__,cljs.core.pr_writer,""," ","",opts__61590__auto__,keyval__61592__auto__);
});})(this__61588__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__61589__auto__,pr_pair__61591__auto__,"#dat.view.Datview{",", ","}",opts__61590__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"conn","conn",278309663),self__.conn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"config","config",994861415),self__.config],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"routes","routes",457900162),self__.routes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"datascript","datascript",-2114593819),self__.datascript],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"remote","remote",-1593576576),self__.remote],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132),self__.dispatcher],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"main","main",-2117802661),self__.main],null))], null),self__.__extmap));
});

dat.view.Datview.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

dat.view.Datview.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__87892){
var self__ = this;
var G__87892__$1 = this;
return (new cljs.core.RecordIter((0),G__87892__$1,7,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"conn","conn",278309663),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"routes","routes",457900162),new cljs.core.Keyword(null,"datascript","datascript",-2114593819),new cljs.core.Keyword(null,"remote","remote",-1593576576),new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132),new cljs.core.Keyword(null,"main","main",-2117802661)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

dat.view.Datview.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__61572__auto__){
var self__ = this;
var this__61572__auto____$1 = this;
return self__.__meta;
});

dat.view.Datview.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__61568__auto__){
var self__ = this;
var this__61568__auto____$1 = this;
return (new dat.view.Datview(self__.conn,self__.config,self__.routes,self__.datascript,self__.remote,self__.dispatcher,self__.main,self__.__meta,self__.__extmap,self__.__hash));
});

dat.view.Datview.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__61578__auto__){
var self__ = this;
var this__61578__auto____$1 = this;
return (7 + cljs.core.count.call(null,self__.__extmap));
});

dat.view.Datview.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__61569__auto__){
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

dat.view.Datview.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__61570__auto__,other__61571__auto__){
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

dat.view.Datview.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__61583__auto__,k__61584__auto__){
var self__ = this;
var this__61583__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"remote","remote",-1593576576),null,new cljs.core.Keyword(null,"routes","routes",457900162),null,new cljs.core.Keyword(null,"datascript","datascript",-2114593819),null,new cljs.core.Keyword(null,"config","config",994861415),null,new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132),null,new cljs.core.Keyword(null,"main","main",-2117802661),null,new cljs.core.Keyword(null,"conn","conn",278309663),null], null), null),k__61584__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__61583__auto____$1),self__.__meta),k__61584__auto__);
} else {
return (new dat.view.Datview(self__.conn,self__.config,self__.routes,self__.datascript,self__.remote,self__.dispatcher,self__.main,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__61584__auto__)),null));
}
});

dat.view.Datview.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__61581__auto__,k__61582__auto__,G__87892){
var self__ = this;
var this__61581__auto____$1 = this;
var pred__87896 = cljs.core.keyword_identical_QMARK_;
var expr__87897 = k__61582__auto__;
if(cljs.core.truth_(pred__87896.call(null,new cljs.core.Keyword(null,"conn","conn",278309663),expr__87897))){
return (new dat.view.Datview(G__87892,self__.config,self__.routes,self__.datascript,self__.remote,self__.dispatcher,self__.main,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__87896.call(null,new cljs.core.Keyword(null,"config","config",994861415),expr__87897))){
return (new dat.view.Datview(self__.conn,G__87892,self__.routes,self__.datascript,self__.remote,self__.dispatcher,self__.main,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__87896.call(null,new cljs.core.Keyword(null,"routes","routes",457900162),expr__87897))){
return (new dat.view.Datview(self__.conn,self__.config,G__87892,self__.datascript,self__.remote,self__.dispatcher,self__.main,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__87896.call(null,new cljs.core.Keyword(null,"datascript","datascript",-2114593819),expr__87897))){
return (new dat.view.Datview(self__.conn,self__.config,self__.routes,G__87892,self__.remote,self__.dispatcher,self__.main,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__87896.call(null,new cljs.core.Keyword(null,"remote","remote",-1593576576),expr__87897))){
return (new dat.view.Datview(self__.conn,self__.config,self__.routes,self__.datascript,G__87892,self__.dispatcher,self__.main,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__87896.call(null,new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132),expr__87897))){
return (new dat.view.Datview(self__.conn,self__.config,self__.routes,self__.datascript,self__.remote,G__87892,self__.main,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__87896.call(null,new cljs.core.Keyword(null,"main","main",-2117802661),expr__87897))){
return (new dat.view.Datview(self__.conn,self__.config,self__.routes,self__.datascript,self__.remote,self__.dispatcher,G__87892,self__.__meta,self__.__extmap,null));
} else {
return (new dat.view.Datview(self__.conn,self__.config,self__.routes,self__.datascript,self__.remote,self__.dispatcher,self__.main,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__61582__auto__,G__87892),null));
}
}
}
}
}
}
}
});

dat.view.Datview.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__61586__auto__){
var self__ = this;
var this__61586__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"conn","conn",278309663),self__.conn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"config","config",994861415),self__.config],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"routes","routes",457900162),self__.routes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"datascript","datascript",-2114593819),self__.datascript],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"remote","remote",-1593576576),self__.remote],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132),self__.dispatcher],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"main","main",-2117802661),self__.main],null))], null),self__.__extmap));
});

dat.view.Datview.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__61573__auto__,G__87892){
var self__ = this;
var this__61573__auto____$1 = this;
return (new dat.view.Datview(self__.conn,self__.config,self__.routes,self__.datascript,self__.remote,self__.dispatcher,self__.main,G__87892,self__.__extmap,self__.__hash));
});

dat.view.Datview.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__61579__auto__,entry__61580__auto__){
var self__ = this;
var this__61579__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__61580__auto__)){
return this__61579__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__61580__auto__,(0)),cljs.core._nth.call(null,entry__61580__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__61579__auto____$1,entry__61580__auto__);
}
});

dat.view.Datview.prototype.com$stuartsierra$component$Lifecycle$ = cljs.core.PROTOCOL_SENTINEL;

dat.view.Datview.prototype.com$stuartsierra$component$Lifecycle$start$arity$1 = (function (component){
var self__ = this;
var component__$1 = this;
try{taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dat.view","/tmp/form-init8382301926859034614.clj",1736,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (component__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Starting Datview"], null);
});})(component__$1))
,null)),null,-1772643572);

taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dat.view","/tmp/form-init8382301926859034614.clj",1737,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (component__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["datascript-conn-Datview",new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(self__.datascript)], null);
});})(component__$1))
,null)),null,-27789655);

var base_schema = dat.view.utils.deep_merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)], null),new cljs.core.Keyword("dat.sync.remote.db","id","dat.sync.remote.db/id",-1585153142),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)], null)], null),new cljs.core.Keyword("datascript","schema","datascript/schema",461092344).cljs$core$IFn$_invoke$arity$1(self__.config));
var conn__$1 = (function (){var or__60899__auto__ = self__.conn;
if(cljs.core.truth_(or__60899__auto__)){
return or__60899__auto__;
} else {
var or__60899__auto____$1 = new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(self__.datascript);
if(cljs.core.truth_(or__60899__auto____$1)){
return or__60899__auto____$1;
} else {
var or__60899__auto____$2 = new cljs.core.Keyword("dat.view","conn","dat.view/conn",2021265851).cljs$core$IFn$_invoke$arity$1(self__.config);
if(cljs.core.truth_(or__60899__auto____$2)){
return or__60899__auto____$2;
} else {
return datascript.core.create_conn.call(null,base_schema);
}
}
}
})();
var routes__$1 = (function (){var or__60899__auto__ = self__.routes;
if(cljs.core.truth_(or__60899__auto__)){
return or__60899__auto__;
} else {
var or__60899__auto____$1 = new cljs.core.Keyword("dat.view","routes","dat.view/routes",-2094077594).cljs$core$IFn$_invoke$arity$1(self__.config);
if(cljs.core.truth_(or__60899__auto____$1)){
return or__60899__auto____$1;
} else {
return dat.view.routes.routes;
}
}
})();
var main__$1 = (function (){var or__60899__auto__ = self__.main;
if(cljs.core.truth_(or__60899__auto__)){
return or__60899__auto__;
} else {
return new cljs.core.Keyword("dat.view","main","dat.view/main",-1444902265).cljs$core$IFn$_invoke$arity$1(self__.config);
}
})();
var history = dat.view.router.make_history.call(null);
var component__$2 = cljs.core.assoc.call(null,component__$1,new cljs.core.Keyword(null,"conn","conn",278309663),conn__$1,new cljs.core.Keyword(null,"base-conn","base-conn",-339817902),conn__$1,new cljs.core.Keyword(null,"main","main",-2117802661),main__$1,new cljs.core.Keyword(null,"history","history",-247395220),history,new cljs.core.Keyword(null,"routes","routes",457900162),routes__$1);
datascript.core.transact_BANG_.call(null,conn__$1,dat.view.default_settings);

posh.reagent.posh_BANG_.call(null,conn__$1);

dat.view.settings.init_BANG_.call(null,component__$2);

dat.view.router.attach_history_handler_BANG_.call(null,history,dat.view.router.make_handler_fn.call(null,component__$2));

return component__$2;
}catch (e87899){var e = e87899;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"dat.view","/tmp/form-init8382301926859034614.clj",1759,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,component__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Error starting Datview:",e], null);
});})(e,component__$1))
,null)),null,-795936623);

cljs.core.println.call(null,e.stack);

return component__$1;
}});

dat.view.Datview.prototype.com$stuartsierra$component$Lifecycle$stop$arity$1 = (function (component){
var self__ = this;
var component__$1 = this;
return cljs.core.assoc.call(null,component__$1,new cljs.core.Keyword(null,"reactor","reactor",535582272),null,new cljs.core.Keyword(null,"conn","conn",278309663),null);
});

dat.view.Datview.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"conn","conn",1918841190,null),new cljs.core.Symbol(null,"config","config",-1659574354,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"datascript","datascript",-474062292,null),new cljs.core.Symbol(null,"remote","remote",46954951,null),new cljs.core.Symbol(null,"dispatcher","dispatcher",2093752659,null),new cljs.core.Symbol(null,"main","main",-477271134,null)], null);
});

dat.view.Datview.cljs$lang$type = true;

dat.view.Datview.cljs$lang$ctorPrSeq = (function (this__61610__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"dat.view/Datview");
});

dat.view.Datview.cljs$lang$ctorPrWriter = (function (this__61610__auto__,writer__61611__auto__){
return cljs.core._write.call(null,writer__61611__auto__,"dat.view/Datview");
});

dat.view.__GT_Datview = (function dat$view$__GT_Datview(conn,config,routes,datascript__$1,remote,dispatcher,main){
return (new dat.view.Datview(conn,config,routes,datascript__$1,remote,dispatcher,main,null,null,null));
});

dat.view.map__GT_Datview = (function dat$view$map__GT_Datview(G__87894){
return (new dat.view.Datview(new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(G__87894),new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(G__87894),new cljs.core.Keyword(null,"routes","routes",457900162).cljs$core$IFn$_invoke$arity$1(G__87894),new cljs.core.Keyword(null,"datascript","datascript",-2114593819).cljs$core$IFn$_invoke$arity$1(G__87894),new cljs.core.Keyword(null,"remote","remote",-1593576576).cljs$core$IFn$_invoke$arity$1(G__87894),new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132).cljs$core$IFn$_invoke$arity$1(G__87894),new cljs.core.Keyword(null,"main","main",-2117802661).cljs$core$IFn$_invoke$arity$1(G__87894),null,cljs.core.dissoc.call(null,G__87894,new cljs.core.Keyword(null,"conn","conn",278309663),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"routes","routes",457900162),new cljs.core.Keyword(null,"datascript","datascript",-2114593819),new cljs.core.Keyword(null,"remote","remote",-1593576576),new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132),new cljs.core.Keyword(null,"main","main",-2117802661)),null));
});

/**
 * Creates a new instance of datview, to be passed around in your application code as either
 *   `app` or `datview` (the latter, following from typical System Component naming conventions,
 *   and the fact that this will be a Datview object)
 */
dat.view.new_datview = (function dat$view$new_datview(var_args){
var args87901 = [];
var len__62120__auto___87907 = arguments.length;
var i__62121__auto___87908 = (0);
while(true){
if((i__62121__auto___87908 < len__62120__auto___87907)){
args87901.push((arguments[i__62121__auto___87908]));

var G__87909 = (i__62121__auto___87908 + (1));
i__62121__auto___87908 = G__87909;
continue;
} else {
}
break;
}

var G__87903 = args87901.length;
switch (G__87903) {
case 1:
return dat.view.new_datview.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return dat.view.new_datview.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args87901.length)].join('')));

}
});

dat.view.new_datview.cljs$core$IFn$_invoke$arity$1 = (function (p__87904){
var map__87905 = p__87904;
var map__87905__$1 = ((((!((map__87905 == null)))?((((map__87905.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87905.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__87905):map__87905);
var config = map__87905__$1;
var schema = cljs.core.get.call(null,map__87905__$1,new cljs.core.Keyword("datascript","schema","datascript/schema",461092344));
var conn = cljs.core.get.call(null,map__87905__$1,new cljs.core.Keyword("dat.view","conn","dat.view/conn",2021265851));
var base_context = cljs.core.get.call(null,map__87905__$1,new cljs.core.Keyword("dat.view","base-context","dat.view/base-context",1813985899));
return dat.view.map__GT_Datview.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"config","config",994861415),config], null));
});

dat.view.new_datview.cljs$core$IFn$_invoke$arity$0 = (function (){
return dat.view.new_datview.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

dat.view.new_datview.cljs$lang$maxFixedArity = 1;


//# sourceMappingURL=view.js.map?rel=1506064210021