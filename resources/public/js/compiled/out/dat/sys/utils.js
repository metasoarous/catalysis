// Compiled by ClojureScript 1.9.542 {}
goog.provide('dat.sys.utils');
goog.require('cljs.core');
dat.sys.utils.deref_or_value = (function dat$sys$utils$deref_or_value(val_or_atom){
if(((!((val_or_atom == null)))?((((val_or_atom.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === val_or_atom.cljs$core$IDeref$)))?true:(((!val_or_atom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,val_or_atom):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,val_or_atom))){
return cljs.core.deref.call(null,val_or_atom);
} else {
return val_or_atom;
}
});
/**
 * Like merge, but merges maps recursively.
 */
dat.sys.utils.deep_merge = (function dat$sys$utils$deep_merge(var_args){
var args__62582__auto__ = [];
var len__62575__auto___66260 = arguments.length;
var i__62576__auto___66261 = (0);
while(true){
if((i__62576__auto___66261 < len__62575__auto___66260)){
args__62582__auto__.push((arguments[i__62576__auto___66261]));

var G__66262 = (i__62576__auto___66261 + (1));
i__62576__auto___66261 = G__66262;
continue;
} else {
}
break;
}

var argseq__62583__auto__ = ((((0) < args__62582__auto__.length))?(new cljs.core.IndexedSeq(args__62582__auto__.slice((0)),(0),null)):null);
return dat.sys.utils.deep_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__62583__auto__);
});

dat.sys.utils.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
if(cljs.core.every_QMARK_.call(null,(function (p1__66258_SHARP_){
return (cljs.core.map_QMARK_.call(null,p1__66258_SHARP_)) || ((p1__66258_SHARP_ == null));
}),maps)){
return cljs.core.apply.call(null,cljs.core.merge_with,dat.sys.utils.deep_merge,maps);
} else {
return cljs.core.last.call(null,maps);
}
});

dat.sys.utils.deep_merge.cljs$lang$maxFixedArity = (0);

dat.sys.utils.deep_merge.cljs$lang$applyTo = (function (seq66259){
return dat.sys.utils.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66259));
});

/**
 * Any number of transducers and sequences concatonated into one sequence.
 */
dat.sys.utils.cat_into = (function dat$sys$utils$cat_into(var_args){
var args__62582__auto__ = [];
var len__62575__auto___66267 = arguments.length;
var i__62576__auto___66268 = (0);
while(true){
if((i__62576__auto___66268 < len__62575__auto___66267)){
args__62582__auto__.push((arguments[i__62576__auto___66268]));

var G__66269 = (i__62576__auto___66268 + (1));
i__62576__auto___66268 = G__66269;
continue;
} else {
}
break;
}

var argseq__62583__auto__ = ((((1) < args__62582__auto__.length))?(new cljs.core.IndexedSeq(args__62582__auto__.slice((1)),(0),null)):null);
return dat.sys.utils.cat_into.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__62583__auto__);
});

dat.sys.utils.cat_into.cljs$core$IFn$_invoke$arity$variadic = (function (coll,xfns_and_seqs){
var map__66265 = ((cljs.core.fn_QMARK_.call(null,cljs.core.first.call(null,xfns_and_seqs)))?cljs.core.group_by.call(null,cljs.core.fn_QMARK_,xfns_and_seqs):new cljs.core.PersistentArrayMap(null, 1, [false,xfns_and_seqs], null));
var map__66265__$1 = ((((!((map__66265 == null)))?((((map__66265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66265.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66265):map__66265);
var xfns = cljs.core.get.call(null,map__66265__$1,true);
var seqs = cljs.core.get.call(null,map__66265__$1,false);
return cljs.core.into.call(null,coll,cljs.core.apply.call(null,cljs.core.comp,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cat], null),xfns)),seqs);
});

dat.sys.utils.cat_into.cljs$lang$maxFixedArity = (1);

dat.sys.utils.cat_into.cljs$lang$applyTo = (function (seq66263){
var G__66264 = cljs.core.first.call(null,seq66263);
var seq66263__$1 = cljs.core.next.call(null,seq66263);
return dat.sys.utils.cat_into.cljs$core$IFn$_invoke$arity$variadic(G__66264,seq66263__$1);
});


//# sourceMappingURL=utils.js.map?rel=1506321313985