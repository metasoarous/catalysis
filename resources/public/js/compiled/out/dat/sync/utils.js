// Compiled by ClojureScript 1.9.542 {}
goog.provide('dat.sync.utils');
goog.require('cljs.core');
goog.require('cljs.core.match');
goog.require('cljs.pprint');
goog.require('taoensso.timbre');
dat.sync.utils.deref_or_value = (function dat$sync$utils$deref_or_value(val_or_atom){
if(((!((val_or_atom == null)))?((((val_or_atom.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === val_or_atom.cljs$core$IDeref$)))?true:(((!val_or_atom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,val_or_atom):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,val_or_atom))){
return cljs.core.deref.call(null,val_or_atom);
} else {
return val_or_atom;
}
});
dat.sync.utils.deep_merge = (function dat$sync$utils$deep_merge(var_args){
var args88101 = [];
var len__62120__auto___88104 = arguments.length;
var i__62121__auto___88105 = (0);
while(true){
if((i__62121__auto___88105 < len__62120__auto___88104)){
args88101.push((arguments[i__62121__auto___88105]));

var G__88106 = (i__62121__auto___88105 + (1));
i__62121__auto___88105 = G__88106;
continue;
} else {
}
break;
}

var G__88103 = args88101.length;
switch (G__88103) {
case 1:
return dat.sync.utils.deep_merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dat.sync.utils.deep_merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args88101.length)].join('')));

}
});

dat.sync.utils.deep_merge.cljs$core$IFn$_invoke$arity$1 = (function (map1){
return map1;
});

dat.sync.utils.deep_merge.cljs$core$IFn$_invoke$arity$2 = (function (map1,map2){
return cljs.core.merge_with.call(null,dat.sync.utils.inner_merge,map1,map2);
});

dat.sync.utils.deep_merge.cljs$lang$maxFixedArity = 2;

dat.sync.utils.inner_merge_dispatch_signature = (function dat$sync$utils$inner_merge_dispatch_signature(x){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"seq?","seq?",702501050),cljs.core.seq_QMARK_.call(null,x),new cljs.core.Keyword(null,"map?","map?",873867235),cljs.core.map_QMARK_.call(null,x)], null);
});
dat.sync.utils.merge_zip = (function dat$sync$utils$merge_zip(xs,ys){
return cljs.core.mapv.call(null,dat.sync.utils.deep_merge,xs,ys);
});
dat.sync.utils.default_inner_merge_opts = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"coll-merge","coll-merge",1132683306),cljs.core.concat], null);
dat.sync.utils.inner_merge = (function dat$sync$utils$inner_merge(var_args){
var args88108 = [];
var len__62120__auto___88137 = arguments.length;
var i__62121__auto___88138 = (0);
while(true){
if((i__62121__auto___88138 < len__62120__auto___88137)){
args88108.push((arguments[i__62121__auto___88138]));

var G__88139 = (i__62121__auto___88138 + (1));
i__62121__auto___88138 = G__88139;
continue;
} else {
}
break;
}

var G__88110 = args88108.length;
switch (G__88110) {
case 2:
return dat.sync.utils.inner_merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dat.sync.utils.inner_merge.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args88108.length)].join('')));

}
});

dat.sync.utils.inner_merge.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return dat.sync.utils.inner_merge.call(null,dat.sync.utils.default_inner_merge_opts,x,y);
});

dat.sync.utils.inner_merge.cljs$core$IFn$_invoke$arity$3 = (function (p__88111,x,y){
var map__88112 = p__88111;
var map__88112__$1 = ((((!((map__88112 == null)))?((((map__88112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88112.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__88112):map__88112);
var opts = map__88112__$1;
var coll_merge = cljs.core.get.call(null,map__88112__$1,new cljs.core.Keyword(null,"coll-merge","coll-merge",1132683306));
var ocr_88114 = cljs.core.mapv.call(null,dat.sync.utils.inner_merge_dispatch_signature,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
try{if((cljs.core.vector_QMARK_.call(null,ocr_88114)) && ((cljs.core.count.call(null,ocr_88114) === 2))){
try{var ocr_88114_0__88116 = cljs.core.nth.call(null,ocr_88114,(0));
if(((!((ocr_88114_0__88116 == null)))?((((ocr_88114_0__88116.cljs$lang$protocol_mask$partition0$ & (256))) || ((cljs.core.PROTOCOL_SENTINEL === ocr_88114_0__88116.cljs$core$ILookup$)))?true:(((!ocr_88114_0__88116.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,ocr_88114_0__88116):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,ocr_88114_0__88116))){
try{var ocr_88114_1__88117 = cljs.core.nth.call(null,ocr_88114,(1));
if(((!((ocr_88114_1__88117 == null)))?((((ocr_88114_1__88117.cljs$lang$protocol_mask$partition0$ & (256))) || ((cljs.core.PROTOCOL_SENTINEL === ocr_88114_1__88117.cljs$core$ILookup$)))?true:(((!ocr_88114_1__88117.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,ocr_88114_1__88117):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,ocr_88114_1__88117))){
try{var ocr_88114_1__88117_map_QMARK___88126 = cljs.core.get.call(null,ocr_88114_1__88117,new cljs.core.Keyword(null,"map?","map?",873867235),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((ocr_88114_1__88117_map_QMARK___88126 === true)){
try{var ocr_88114_0__88116_map_QMARK___88121 = cljs.core.get.call(null,ocr_88114_0__88116,new cljs.core.Keyword(null,"map?","map?",873867235),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((ocr_88114_0__88116_map_QMARK___88121 === true)){
return dat.sync.utils.deep_merge.call(null,x,y);
} else {
throw cljs.core.match.backtrack;

}
}catch (e88136){if((e88136 instanceof Error)){
var e__37574__auto__ = e88136;
if((e__37574__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37574__auto__;
}
} else {
throw e88136;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e88133){if((e88133 instanceof Error)){
var e__37574__auto__ = e88133;
if((e__37574__auto__ === cljs.core.match.backtrack)){
try{var ocr_88114_1__88117_col_QMARK___88127 = cljs.core.get.call(null,ocr_88114_1__88117,new cljs.core.Keyword(null,"col?","col?",370873178),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((ocr_88114_1__88117_col_QMARK___88127 === true)){
try{var ocr_88114_0__88116_col_QMARK___88122 = cljs.core.get.call(null,ocr_88114_0__88116,new cljs.core.Keyword(null,"col?","col?",370873178),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((ocr_88114_0__88116_col_QMARK___88122 === true)){
return coll_merge.call(null,x,y);
} else {
throw cljs.core.match.backtrack;

}
}catch (e88135){if((e88135 instanceof Error)){
var e__37574__auto____$1 = e88135;
if((e__37574__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37574__auto____$1;
}
} else {
throw e88135;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e88134){if((e88134 instanceof Error)){
var e__37574__auto____$1 = e88134;
if((e__37574__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37574__auto____$1;
}
} else {
throw e88134;

}
}} else {
throw e__37574__auto__;
}
} else {
throw e88133;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e88131){if((e88131 instanceof Error)){
var e__37574__auto__ = e88131;
if((e__37574__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37574__auto__;
}
} else {
throw e88131;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e88129){if((e88129 instanceof Error)){
var e__37574__auto__ = e88129;
if((e__37574__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37574__auto__;
}
} else {
throw e88129;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e88128){if((e88128 instanceof Error)){
var e__37574__auto__ = e88128;
if((e__37574__auto__ === cljs.core.match.backtrack)){
return y;
} else {
throw e__37574__auto__;
}
} else {
throw e88128;

}
}});

dat.sync.utils.inner_merge.cljs$lang$maxFixedArity = 3;

dat.sync.utils.log = (function dat$sync$utils$log(var_args){
var args__62127__auto__ = [];
var len__62120__auto___88142 = arguments.length;
var i__62121__auto___88143 = (0);
while(true){
if((i__62121__auto___88143 < len__62120__auto___88142)){
args__62127__auto__.push((arguments[i__62121__auto___88143]));

var G__88144 = (i__62121__auto___88143 + (1));
i__62121__auto___88143 = G__88144;
continue;
} else {
}
break;
}

var argseq__62128__auto__ = ((((0) < args__62127__auto__.length))?(new cljs.core.IndexedSeq(args__62127__auto__.slice((0)),(0),null)):null);
return dat.sync.utils.log.cljs$core$IFn$_invoke$arity$variadic(argseq__62128__auto__);
});

dat.sync.utils.log.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,console.log,args);
});

dat.sync.utils.log.cljs$lang$maxFixedArity = (0);

dat.sync.utils.log.cljs$lang$applyTo = (function (seq88141){
return dat.sync.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq88141));
});

dat.sync.utils.tr = (function dat$sync$utils$tr(var_args){
var args88145 = [];
var len__62120__auto___88150 = arguments.length;
var i__62121__auto___88151 = (0);
while(true){
if((i__62121__auto___88151 < len__62120__auto___88150)){
args88145.push((arguments[i__62121__auto___88151]));

var G__88152 = (i__62121__auto___88151 + (1));
i__62121__auto___88151 = G__88152;
continue;
} else {
}
break;
}

var G__88147 = args88145.length;
switch (G__88147) {
case 2:
return dat.sync.utils.tr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dat.sync.utils.tr.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args88145.length)].join('')));

}
});

dat.sync.utils.tr.cljs$core$IFn$_invoke$arity$2 = (function (message,x){
dat.sync.utils.log.call(null,message,(function (){var sb__61991__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_88148_88154 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_88149_88155 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_88148_88154,_STAR_print_fn_STAR_88149_88155,sb__61991__auto__){
return (function (x__61992__auto__){
return sb__61991__auto__.append(x__61992__auto__);
});})(_STAR_print_newline_STAR_88148_88154,_STAR_print_fn_STAR_88149_88155,sb__61991__auto__))
;

try{cljs.pprint.pprint.call(null,x);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_88149_88155;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_88148_88154;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__61991__auto__)].join('');
})());

return x;
});

dat.sync.utils.tr.cljs$core$IFn$_invoke$arity$1 = (function (x){
return dat.sync.utils.tr.call(null,"",x);
});

dat.sync.utils.tr.cljs$lang$maxFixedArity = 2;

/**
 * Any number of transducers and sequences concatonated into one sequence.
 */
dat.sync.utils.cat_into = (function dat$sync$utils$cat_into(var_args){
var args__62127__auto__ = [];
var len__62120__auto___88160 = arguments.length;
var i__62121__auto___88161 = (0);
while(true){
if((i__62121__auto___88161 < len__62120__auto___88160)){
args__62127__auto__.push((arguments[i__62121__auto___88161]));

var G__88162 = (i__62121__auto___88161 + (1));
i__62121__auto___88161 = G__88162;
continue;
} else {
}
break;
}

var argseq__62128__auto__ = ((((1) < args__62127__auto__.length))?(new cljs.core.IndexedSeq(args__62127__auto__.slice((1)),(0),null)):null);
return dat.sync.utils.cat_into.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__62128__auto__);
});

dat.sync.utils.cat_into.cljs$core$IFn$_invoke$arity$variadic = (function (coll,xfns_and_seqs){
var map__88158 = ((cljs.core.fn_QMARK_.call(null,cljs.core.first.call(null,xfns_and_seqs)))?cljs.core.group_by.call(null,cljs.core.fn_QMARK_,xfns_and_seqs):new cljs.core.PersistentArrayMap(null, 1, [false,xfns_and_seqs], null));
var map__88158__$1 = ((((!((map__88158 == null)))?((((map__88158.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88158.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__88158):map__88158);
var xfns = cljs.core.get.call(null,map__88158__$1,true);
var seqs = cljs.core.get.call(null,map__88158__$1,false);
return cljs.core.into.call(null,coll,cljs.core.apply.call(null,cljs.core.comp,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cat], null),xfns)),seqs);
});

dat.sync.utils.cat_into.cljs$lang$maxFixedArity = (1);

dat.sync.utils.cat_into.cljs$lang$applyTo = (function (seq88156){
var G__88157 = cljs.core.first.call(null,seq88156);
var seq88156__$1 = cljs.core.next.call(null,seq88156);
return dat.sync.utils.cat_into.cljs$core$IFn$_invoke$arity$variadic(G__88157,seq88156__$1);
});


//# sourceMappingURL=utils.js.map?rel=1506064211721