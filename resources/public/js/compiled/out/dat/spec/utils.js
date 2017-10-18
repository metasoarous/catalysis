// Compiled by ClojureScript 1.9.542 {}
goog.provide('dat.spec.utils');
goog.require('cljs.core');
/**
 * Any number of transducers and sequences concatonated into one sequence.
 */
dat.spec.utils.cat_into = (function dat$spec$utils$cat_into(var_args){
var args__62127__auto__ = [];
var len__62120__auto___92639 = arguments.length;
var i__62121__auto___92640 = (0);
while(true){
if((i__62121__auto___92640 < len__62120__auto___92639)){
args__62127__auto__.push((arguments[i__62121__auto___92640]));

var G__92641 = (i__62121__auto___92640 + (1));
i__62121__auto___92640 = G__92641;
continue;
} else {
}
break;
}

var argseq__62128__auto__ = ((((1) < args__62127__auto__.length))?(new cljs.core.IndexedSeq(args__62127__auto__.slice((1)),(0),null)):null);
return dat.spec.utils.cat_into.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__62128__auto__);
});

dat.spec.utils.cat_into.cljs$core$IFn$_invoke$arity$variadic = (function (coll,xfns_and_seqs){
var map__92637 = ((cljs.core.fn_QMARK_.call(null,cljs.core.first.call(null,xfns_and_seqs)))?cljs.core.group_by.call(null,cljs.core.fn_QMARK_,xfns_and_seqs):new cljs.core.PersistentArrayMap(null, 1, [false,xfns_and_seqs], null));
var map__92637__$1 = ((((!((map__92637 == null)))?((((map__92637.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__92637.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__92637):map__92637);
var xfns = cljs.core.get.call(null,map__92637__$1,true);
var seqs = cljs.core.get.call(null,map__92637__$1,false);
return cljs.core.into.call(null,coll,cljs.core.apply.call(null,cljs.core.comp,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cat], null),xfns)),seqs);
});

dat.spec.utils.cat_into.cljs$lang$maxFixedArity = (1);

dat.spec.utils.cat_into.cljs$lang$applyTo = (function (seq92635){
var G__92636 = cljs.core.first.call(null,seq92635);
var seq92635__$1 = cljs.core.next.call(null,seq92635);
return dat.spec.utils.cat_into.cljs$core$IFn$_invoke$arity$variadic(G__92636,seq92635__$1);
});

/**
 * Like merge, but merges maps recursively.
 */
dat.spec.utils.deep_merge = (function dat$spec$utils$deep_merge(var_args){
var args__62127__auto__ = [];
var len__62120__auto___92644 = arguments.length;
var i__62121__auto___92645 = (0);
while(true){
if((i__62121__auto___92645 < len__62120__auto___92644)){
args__62127__auto__.push((arguments[i__62121__auto___92645]));

var G__92646 = (i__62121__auto___92645 + (1));
i__62121__auto___92645 = G__92646;
continue;
} else {
}
break;
}

var argseq__62128__auto__ = ((((0) < args__62127__auto__.length))?(new cljs.core.IndexedSeq(args__62127__auto__.slice((0)),(0),null)):null);
return dat.spec.utils.deep_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__62128__auto__);
});

dat.spec.utils.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
if(cljs.core.every_QMARK_.call(null,(function (p1__92642_SHARP_){
return (cljs.core.map_QMARK_.call(null,p1__92642_SHARP_)) || ((p1__92642_SHARP_ == null));
}),maps)){
return cljs.core.apply.call(null,cljs.core.merge_with,dat.spec.utils.deep_merge,maps);
} else {
return cljs.core.last.call(null,maps);
}
});

dat.spec.utils.deep_merge.cljs$lang$maxFixedArity = (0);

dat.spec.utils.deep_merge.cljs$lang$applyTo = (function (seq92643){
return dat.spec.utils.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq92643));
});

dat.spec.utils.deref_or_value = (function dat$spec$utils$deref_or_value(val_or_atom){
if(((!((val_or_atom == null)))?((((val_or_atom.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === val_or_atom.cljs$core$IDeref$)))?true:(((!val_or_atom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,val_or_atom):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,val_or_atom))){
return cljs.core.deref.call(null,val_or_atom);
} else {
return val_or_atom;
}
});

//# sourceMappingURL=utils.js.map?rel=1506064217744