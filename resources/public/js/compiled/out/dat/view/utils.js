// Compiled by ClojureScript 1.9.542 {}
goog.provide('dat.view.utils');
goog.require('cljs.core');
goog.require('datascript.core');
goog.require('reagent.core');
goog.require('reagent.ratom');
goog.require('posh.reagent');
goog.require('taoensso.timbre');
dat.view.utils.deref_or_value = (function dat$view$utils$deref_or_value(val_or_atom){
if(((!((val_or_atom == null)))?((((val_or_atom.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === val_or_atom.cljs$core$IDeref$)))?true:(((!val_or_atom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,val_or_atom):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,val_or_atom))){
return cljs.core.deref.call(null,val_or_atom);
} else {
return val_or_atom;
}
});
/**
 * Like merge, but merges maps recursively.
 */
dat.view.utils.deep_merge = (function dat$view$utils$deep_merge(var_args){
var args__62127__auto__ = [];
var len__62120__auto___76228 = arguments.length;
var i__62121__auto___76229 = (0);
while(true){
if((i__62121__auto___76229 < len__62120__auto___76228)){
args__62127__auto__.push((arguments[i__62121__auto___76229]));

var G__76230 = (i__62121__auto___76229 + (1));
i__62121__auto___76229 = G__76230;
continue;
} else {
}
break;
}

var argseq__62128__auto__ = ((((0) < args__62127__auto__.length))?(new cljs.core.IndexedSeq(args__62127__auto__.slice((0)),(0),null)):null);
return dat.view.utils.deep_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__62128__auto__);
});

dat.view.utils.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
if(cljs.core.every_QMARK_.call(null,(function (p1__76226_SHARP_){
return (cljs.core.map_QMARK_.call(null,p1__76226_SHARP_)) || ((p1__76226_SHARP_ == null));
}),maps)){
return cljs.core.apply.call(null,cljs.core.merge_with,dat.view.utils.deep_merge,maps);
} else {
return cljs.core.last.call(null,maps);
}
});

dat.view.utils.deep_merge.cljs$lang$maxFixedArity = (0);

dat.view.utils.deep_merge.cljs$lang$applyTo = (function (seq76227){
return dat.view.utils.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq76227));
});

dat.view.utils.ratom = reagent.core.atom;
/**
 * Treat a regular atom as though it were a reaction; Be careful, memoizes (we might end up using a dispensor trick
 *   like posh does to avoid this, but that limits us to using conns; can't get listeners/watches with regular atoms...)
 */
dat.view.utils.as_reaction = cljs.core.memoize.call(null,(function (vanilla_atom){
var trigger = dat.view.utils.ratom.call(null,(0));
cljs.core.add_watch.call(null,vanilla_atom,new cljs.core.Keyword(null,"as-reaction-trigger","as-reaction-trigger",718960944),((function (trigger){
return (function() { 
var G__76231__delegate = function (_){
return cljs.core.swap_BANG_.call(null,trigger,cljs.core.inc);
};
var G__76231 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__76232__i = 0, G__76232__a = new Array(arguments.length -  0);
while (G__76232__i < G__76232__a.length) {G__76232__a[G__76232__i] = arguments[G__76232__i + 0]; ++G__76232__i;}
  _ = new cljs.core.IndexedSeq(G__76232__a,0,null);
} 
return G__76231__delegate.call(this,_);};
G__76231.cljs$lang$maxFixedArity = 0;
G__76231.cljs$lang$applyTo = (function (arglist__76233){
var _ = cljs.core.seq(arglist__76233);
return G__76231__delegate(_);
});
G__76231.cljs$core$IFn$_invoke$arity$variadic = G__76231__delegate;
return G__76231;
})()
;})(trigger))
);

return reagent.ratom.make_reaction.call(null,((function (trigger){
return (function (){
cljs.core.deref.call(null,trigger);

return cljs.core.deref.call(null,vanilla_atom);
});})(trigger))
);
}));
/**
 * A version of posh/q without any transaction pattern matching filters (al a posh) that delegates directly to d/q, and
 *   wraps in a reaction
 */
dat.view.utils.safe_q = cljs.core.memoize.call(null,(function() { 
var G__76234__delegate = function (query,conn,args){
return reagent.ratom.make_reaction.call(null,(function (){
var conn__$1 = dat.view.utils.as_reaction.call(null,conn);
var db = dat.view.utils.deref_or_value.call(null,conn__$1);
var args__$1 = cljs.core.mapv.call(null,dat.view.utils.deref_or_value,args);
return cljs.core.apply.call(null,datascript.core.q,query,db,args__$1);
}));
};
var G__76234 = function (query,conn,var_args){
var args = null;
if (arguments.length > 2) {
var G__76235__i = 0, G__76235__a = new Array(arguments.length -  2);
while (G__76235__i < G__76235__a.length) {G__76235__a[G__76235__i] = arguments[G__76235__i + 2]; ++G__76235__i;}
  args = new cljs.core.IndexedSeq(G__76235__a,0,null);
} 
return G__76234__delegate.call(this,query,conn,args);};
G__76234.cljs$lang$maxFixedArity = 2;
G__76234.cljs$lang$applyTo = (function (arglist__76236){
var query = cljs.core.first(arglist__76236);
arglist__76236 = cljs.core.next(arglist__76236);
var conn = cljs.core.first(arglist__76236);
var args = cljs.core.rest(arglist__76236);
return G__76234__delegate(query,conn,args);
});
G__76234.cljs$core$IFn$_invoke$arity$variadic = G__76234__delegate;
return G__76234;
})()
);
dat.view.utils.pull_many = (function dat$view$utils$pull_many(app,pattern,eids){
return cljs.core.map.call(null,cljs.core.partial.call(null,posh.reagent.pull,new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(app),pattern),dat.view.utils.deref_or_value.call(null,eids));
});
/**
 * Wraps safe pull, and etracts the results for a given attr
 */
dat.view.utils.pull_attr = cljs.core.memoize.call(null,(function() {
var G__76237 = null;
var G__76237__3 = (function (conn,eid,attr_ident){
return dat.view.utils.pull_attr.call(null,conn,eid,attr_ident,cljs.core.PersistentArrayMap.EMPTY);
});
var G__76237__4 = (function (conn,eid,attr_ident,options){
return reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.get.call(null,cljs.core.deref.call(null,posh.reagent.pull.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr_ident], null),eid,options)),attr_ident);
}));
});
G__76237 = function(conn,eid,attr_ident,options){
switch(arguments.length){
case 3:
return G__76237__3.call(this,conn,eid,attr_ident);
case 4:
return G__76237__4.call(this,conn,eid,attr_ident,options);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__76237.cljs$core$IFn$_invoke$arity$3 = G__76237__3;
G__76237.cljs$core$IFn$_invoke$arity$4 = G__76237__4;
return G__76237;
})()
);
dat.view.utils.pull_path = cljs.core.memoize.call(null,(function() {
var G__76238 = null;
var G__76238__3 = (function (conn,eid,attr_path){
return dat.view.utils.pull_path.call(null,conn,eid,attr_path,cljs.core.PersistentArrayMap.EMPTY);
});
var G__76238__4 = (function (conn,eid,attr_path,options){
return reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,posh.reagent.pull.call(null,conn,cljs.core.vec.call(null,cljs.core.filter.call(null,cljs.core.keyword_QMARK_,attr_path)),eid,options)),attr_path);
}));
});
G__76238 = function(conn,eid,attr_path,options){
switch(arguments.length){
case 3:
return G__76238__3.call(this,conn,eid,attr_path);
case 4:
return G__76238__4.call(this,conn,eid,attr_path,options);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__76238.cljs$core$IFn$_invoke$arity$3 = G__76238__3;
G__76238.cljs$core$IFn$_invoke$arity$4 = G__76238__4;
return G__76238;
})()
);

//# sourceMappingURL=utils.js.map?rel=1506064189925