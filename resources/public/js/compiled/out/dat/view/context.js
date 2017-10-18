// Compiled by ClojureScript 1.9.542 {}
goog.provide('dat.view.context');
goog.require('cljs.core');
goog.require('dat.view.utils');
goog.require('posh.reagent');
goog.require('dat.reactor');
goog.require('reagent.core');
goog.require('reagent.ratom');
goog.require('datascript.core');
goog.require('taoensso.timbre');
if(typeof dat.view.context.default_base_context !== 'undefined'){
} else {
dat.view.context.default_base_context = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
dat.view.context.base_context = cljs.core.memoize.call(null,(function (app){
return reagent.ratom.make_reaction.call(null,(function (){
try{return new cljs.core.Keyword("dat.view.base-context","value","dat.view.base-context/value",1527769668).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,posh.reagent.pull.call(null,new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(app),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("dat.view","base-context","dat.view/base-context",1813985899)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cache","cache",-1237023054),new cljs.core.Keyword(null,"forever","forever",2103455015)], null))));
}catch (e76241){var e = e76241;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"dat.view.context","/tmp/form-init8382301926859034614.clj",40,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["You don't yet have a :dat.view/base-context setting defined. Creating one."], null);
});})(e))
,null)),null,-583526595);

return dat.reactor.dispatch_BANG_.call(null,app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.reactor","local-tx","dat.reactor/local-tx",-702931104),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("dat.view","base-context","dat.view/base-context",1813985899)], null)], null)], null));
}}));
}));
dat.view.context.update_base_context_BANG_ = (function dat$view$context$update_base_context_BANG_(var_args){
var args__62127__auto__ = [];
var len__62120__auto___76245 = arguments.length;
var i__62121__auto___76246 = (0);
while(true){
if((i__62121__auto___76246 < len__62120__auto___76245)){
args__62127__auto__.push((arguments[i__62121__auto___76246]));

var G__76247 = (i__62121__auto___76246 + (1));
i__62121__auto___76246 = G__76247;
continue;
} else {
}
break;
}

var argseq__62128__auto__ = ((((2) < args__62127__auto__.length))?(new cljs.core.IndexedSeq(args__62127__auto__.slice((2)),(0),null)):null);
return dat.view.context.update_base_context_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__62128__auto__);
});

dat.view.context.update_base_context_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (app,f,args){
var txf = (function dat$view$context$txf(db){
return cljs.core.apply.call(null,cljs.core.update,datascript.core.pull.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("dat.view","base-context","dat.view/base-context",1813985899)], null)),new cljs.core.Keyword("dat.view.base-context","value","dat.view.base-context/value",1527769668),f,args);
});
return datascript.core.transact_BANG_.call(null,new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(app),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",-151594418),txf], null)], null));
});

dat.view.context.update_base_context_BANG_.cljs$lang$maxFixedArity = (2);

dat.view.context.update_base_context_BANG_.cljs$lang$applyTo = (function (seq76242){
var G__76243 = cljs.core.first.call(null,seq76242);
var seq76242__$1 = cljs.core.next.call(null,seq76242);
var G__76244 = cljs.core.first.call(null,seq76242__$1);
var seq76242__$2 = cljs.core.next.call(null,seq76242__$1);
return dat.view.context.update_base_context_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__76243,G__76244,seq76242__$2);
});

dat.view.context.set_base_context_BANG_ = (function dat$view$context$set_base_context_BANG_(app,context){
return dat.view.context.update_base_context_BANG_.call(null,app,cljs.core.constantly.call(null,context));
});
/**
 * Returns the corresponding attr-ident entry from the Datomic schema. Returns full entity ref-attr; Have to path for idents.
 */
dat.view.context.attribute_schema_reaction = cljs.core.memoize.call(null,(function (app,attr_ident){
if(cljs.core._EQ_.call(null,attr_ident,new cljs.core.Keyword("db","id","db/id",-1388397098))){
return reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),null], null);
}));
} else {
return posh.reagent.pull.call(null,new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(app),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096)], null),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096)], null),new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096)], null),new cljs.core.Keyword("attribute.ref","types","attribute.ref/types",-780449566),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096)], null),new cljs.core.Keyword("attribute","sort-by","attribute/sort-by",-326148075),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096),attr_ident], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cache","cache",-1237023054),new cljs.core.Keyword(null,"forever","forever",2103455015)], null));
}
}));
/**
 * Reaction of the pull of a schema attribute, where any ref-attrs to something with any ident entity
 *   have been replaced by that ident keyword.
 */
dat.view.context.attr_signature_reaction = cljs.core.memoize.call(null,(function (app,attr_ident){
var schema_rx = dat.view.context.attribute_schema_reaction.call(null,app,attr_ident);
return reagent.ratom.make_reaction.call(null,((function (schema_rx){
return (function (){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var mapper = ((function (schema_rx){
return (function dat$view$context$mapper(x){
var or__60899__auto__ = new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(or__60899__auto__)){
return or__60899__auto__;
} else {
var or__60899__auto____$1 = (function (){var and__60887__auto__ = cljs.core.sequential_QMARK_.call(null,x);
if(and__60887__auto__){
return cljs.core.map.call(null,dat$view$context$mapper,x);
} else {
return and__60887__auto__;
}
})();
if(cljs.core.truth_(or__60899__auto____$1)){
return or__60899__auto____$1;
} else {
return x;
}
}
});})(schema_rx))
;
return cljs.core.map.call(null,((function (schema_rx){
return (function (p__76248){
var vec__76249 = p__76248;
var k = cljs.core.nth.call(null,vec__76249,(0),null);
var v = cljs.core.nth.call(null,vec__76249,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,mapper.call(null,v)], null);
});})(schema_rx))
,cljs.core.deref.call(null,schema_rx));
})());
});})(schema_rx))
);
}));
/**
 * This function returns the component configuration (base-context; should rename) for either an entire render network,
 *   abstractly, or for a specific component based on a component id (namespaced keyword matching the function to be called).
 */
dat.view.context.component_context = (function() {
var dat$view$context$component_context_STAR_ = null;
var dat$view$context$component_context_STAR___1 = (function (app){
return reagent.ratom.make_reaction.call(null,(function (){
return dat.view.utils.deep_merge.call(null,cljs.core.deref.call(null,dat.view.context.default_base_context),cljs.core.deref.call(null,dat.view.context.base_context.call(null,app)));
}));
});
var dat$view$context$component_context_STAR___2 = (function (app,representation_id){
return dat$view$context$component_context_STAR_.call(null,app,representation_id,cljs.core.PersistentArrayMap.EMPTY);
});
var dat$view$context$component_context_STAR___3 = (function (app,representation_id,p__76252){
var map__76256 = p__76252;
var map__76256__$1 = ((((!((map__76256 == null)))?((((map__76256.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76256.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__76256):map__76256);
var local_context = map__76256__$1;
var ident = cljs.core.get.call(null,map__76256__$1,new cljs.core.Keyword("db.attr","ident","db.attr/ident",1809115541));
var globals = cljs.core.get.call(null,map__76256__$1,new cljs.core.Keyword("dat.view.context","globals","dat.view.context/globals",-1368321071));
return reagent.ratom.make_reaction.call(null,((function (map__76256,map__76256__$1,local_context,ident,globals){
return (function (){
try{var base_context = cljs.core.deref.call(null,dat.view.context.component_context.call(null,app));
return cljs.core.merge.call(null,cljs.core.get_in.call(null,base_context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.view","base-config","dat.view/base-config",1145005276),representation_id], null)),(cljs.core.truth_(ident)?(function (){var attr_sig = cljs.core.deref.call(null,dat.view.context.attr_signature_reaction.call(null,app,ident));
return cljs.core.merge.call(null,cljs.core.get_in.call(null,base_context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.view","card-config","dat.view/card-config",-1032435729),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659).cljs$core$IFn$_invoke$arity$1(attr_sig),representation_id], null)),cljs.core.get_in.call(null,base_context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.view","value-type-config","dat.view/value-type-config",564574161),new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1(attr_sig),representation_id], null)),cljs.core.get_in.call(null,base_context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.view","attr-config","dat.view/attr-config",-308000137),ident,representation_id], null)));
})():null),globals,local_context,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("dat.view.context","locals","dat.view.context/locals",2099213948),local_context,new cljs.core.Keyword("dat.view.context","globals","dat.view.context/globals",-1368321071),globals], null));
}catch (e76258){var e = e76258;
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"dat.view.context","/tmp/form-init8382301926859034614.clj",159,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,map__76256,map__76256__$1,local_context,ident,globals){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Unable to build component context for local-context:",local_context,"representation-id",representation_id], null);
});})(e,map__76256,map__76256__$1,local_context,ident,globals))
,null)),null,-411421368);
}});})(map__76256,map__76256__$1,local_context,ident,globals))
);
});
dat$view$context$component_context_STAR_ = function(app,representation_id,p__76252){
switch(arguments.length){
case 1:
return dat$view$context$component_context_STAR___1.call(this,app);
case 2:
return dat$view$context$component_context_STAR___2.call(this,app,representation_id);
case 3:
return dat$view$context$component_context_STAR___3.call(this,app,representation_id,p__76252);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
dat$view$context$component_context_STAR_.cljs$core$IFn$_invoke$arity$1 = dat$view$context$component_context_STAR___1;
dat$view$context$component_context_STAR_.cljs$core$IFn$_invoke$arity$2 = dat$view$context$component_context_STAR___2;
dat$view$context$component_context_STAR_.cljs$core$IFn$_invoke$arity$3 = dat$view$context$component_context_STAR___3;
return dat$view$context$component_context_STAR_;
})()
;

//# sourceMappingURL=context.js.map?rel=1506064189991