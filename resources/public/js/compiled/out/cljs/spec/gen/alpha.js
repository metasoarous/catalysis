// Compiled by ClojureScript 1.9.542 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__61556__auto__,writer__61557__auto__,opt__61558__auto__){
return cljs.core._write.call(null,writer__61557__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__62127__auto__ = [];
var len__62120__auto___86138 = arguments.length;
var i__62121__auto___86139 = (0);
while(true){
if((i__62121__auto___86139 < len__62120__auto___86138)){
args__62127__auto__.push((arguments[i__62121__auto___86139]));

var G__86140 = (i__62121__auto___86139 + (1));
i__62121__auto___86139 = G__86140;
continue;
} else {
}
break;
}

var argseq__62128__auto__ = ((((0) < args__62127__auto__.length))?(new cljs.core.IndexedSeq(args__62127__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__62128__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq86137){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq86137));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__62127__auto__ = [];
var len__62120__auto___86142 = arguments.length;
var i__62121__auto___86143 = (0);
while(true){
if((i__62121__auto___86143 < len__62120__auto___86142)){
args__62127__auto__.push((arguments[i__62121__auto___86143]));

var G__86144 = (i__62121__auto___86143 + (1));
i__62121__auto___86143 = G__86144;
continue;
} else {
}
break;
}

var argseq__62128__auto__ = ((((0) < args__62127__auto__.length))?(new cljs.core.IndexedSeq(args__62127__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__62128__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq86141){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq86141));
});

var g_QMARK__86145 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_86146 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__86145){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__86145))
,null));
var mkg_86147 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__86145,g_86146){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__86145,g_86146))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__86145,g_86146,mkg_86147){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__86145).call(null,x);
});})(g_QMARK__86145,g_86146,mkg_86147))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__86145,g_86146,mkg_86147){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_86147).call(null,gfn);
});})(g_QMARK__86145,g_86146,mkg_86147))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__86145,g_86146,mkg_86147){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_86146).call(null,generator);
});})(g_QMARK__86145,g_86146,mkg_86147))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__86109__auto___86167 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__86109__auto___86167){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__62127__auto__ = [];
var len__62120__auto___86168 = arguments.length;
var i__62121__auto___86169 = (0);
while(true){
if((i__62121__auto___86169 < len__62120__auto___86168)){
args__62127__auto__.push((arguments[i__62121__auto___86169]));

var G__86170 = (i__62121__auto___86169 + (1));
i__62121__auto___86169 = G__86170;
continue;
} else {
}
break;
}

var argseq__62128__auto__ = ((((0) < args__62127__auto__.length))?(new cljs.core.IndexedSeq(args__62127__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__62128__auto__);
});})(g__86109__auto___86167))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__86109__auto___86167){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__86109__auto___86167),args);
});})(g__86109__auto___86167))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__86109__auto___86167){
return (function (seq86148){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq86148));
});})(g__86109__auto___86167))
;


var g__86109__auto___86171 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__86109__auto___86171){
return (function cljs$spec$gen$alpha$list(var_args){
var args__62127__auto__ = [];
var len__62120__auto___86172 = arguments.length;
var i__62121__auto___86173 = (0);
while(true){
if((i__62121__auto___86173 < len__62120__auto___86172)){
args__62127__auto__.push((arguments[i__62121__auto___86173]));

var G__86174 = (i__62121__auto___86173 + (1));
i__62121__auto___86173 = G__86174;
continue;
} else {
}
break;
}

var argseq__62128__auto__ = ((((0) < args__62127__auto__.length))?(new cljs.core.IndexedSeq(args__62127__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__62128__auto__);
});})(g__86109__auto___86171))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__86109__auto___86171){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__86109__auto___86171),args);
});})(g__86109__auto___86171))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__86109__auto___86171){
return (function (seq86149){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq86149));
});})(g__86109__auto___86171))
;


var g__86109__auto___86175 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__86109__auto___86175){
return (function cljs$spec$gen$alpha$map(var_args){
var args__62127__auto__ = [];
var len__62120__auto___86176 = arguments.length;
var i__62121__auto___86177 = (0);
while(true){
if((i__62121__auto___86177 < len__62120__auto___86176)){
args__62127__auto__.push((arguments[i__62121__auto___86177]));

var G__86178 = (i__62121__auto___86177 + (1));
i__62121__auto___86177 = G__86178;
continue;
} else {
}
break;
}

var argseq__62128__auto__ = ((((0) < args__62127__auto__.length))?(new cljs.core.IndexedSeq(args__62127__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__62128__auto__);
});})(g__86109__auto___86175))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__86109__auto___86175){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__86109__auto___86175),args);
});})(g__86109__auto___86175))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__86109__auto___86175){
return (function (seq86150){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq86150));
});})(g__86109__auto___86175))
;


var g__86109__auto___86179 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__86109__auto___86179){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__62127__auto__ = [];
var len__62120__auto___86180 = arguments.length;
var i__62121__auto___86181 = (0);
while(true){
if((i__62121__auto___86181 < len__62120__auto___86180)){
args__62127__auto__.push((arguments[i__62121__auto___86181]));

var G__86182 = (i__62121__auto___86181 + (1));
i__62121__auto___86181 = G__86182;
continue;
} else {
}
break;
}

var argseq__62128__auto__ = ((((0) < args__62127__auto__.length))?(new cljs.core.IndexedSeq(args__62127__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__62128__auto__);
});})(g__86109__auto___86179))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__86109__auto___86179){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__86109__auto___86179),args);
});})(g__86109__auto___86179))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__86109__auto___86179){
return (function (seq86151){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq86151));
});})(g__86109__auto___86179))
;


var g__86109__auto___86183 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__86109__auto___86183){
return (function cljs$spec$gen$alpha$set(var_args){
var args__62127__auto__ = [];
var len__62120__auto___86184 = arguments.length;
var i__62121__auto___86185 = (0);
while(true){
if((i__62121__auto___86185 < len__62120__auto___86184)){
args__62127__auto__.push((arguments[i__62121__auto___86185]));

var G__86186 = (i__62121__auto___86185 + (1));
i__62121__auto___86185 = G__86186;
continue;
} else {
}
break;
}

var argseq__62128__auto__ = ((((0) < args__62127__auto__.length))?(new cljs.core.IndexedSeq(args__62127__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__62128__auto__);
});})(g__86109__auto___86183))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__86109__auto___86183){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__86109__auto___86183),args);
});})(g__86109__auto___86183))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__86109__auto___86183){
return (function (seq86152){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq86152));
});})(g__86109__auto___86183))
;


var g__86109__auto___86187 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__86109__auto___86187){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__62127__auto__ = [];
var len__62120__auto___86188 = arguments.length;
var i__62121__auto___86189 = (0);
while(true){
if((i__62121__auto___86189 < len__62120__auto___86188)){
args__62127__auto__.push((arguments[i__62121__auto___86189]));

var G__86190 = (i__62121__auto___86189 + (1));
i__62121__auto___86189 = G__86190;
continue;
} else {
}
break;
}

var argseq__62128__auto__ = ((((0) < args__62127__auto__.length))?(new cljs.core.IndexedSeq(args__62127__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__62128__auto__);
});})(g__86109__auto___86187))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__86109__auto___86187){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__86109__auto___86187),args);
});})(g__86109__auto___86187))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__86109__auto___86187){
return (function (seq86153){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq86153));
});})(g__86109__auto___86187))
;


var g__86109__auto___86191 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__86109__auto___86191){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__62127__auto__ = [];
var len__62120__auto___86192 = arguments.length;
var i__62121__auto___86193 = (0);
while(true){
if((i__62121__auto___86193 < len__62120__auto___86192)){
args__62127__auto__.push((arguments[i__62121__auto___86193]));

var G__86194 = (i__62121__auto___86193 + (1));
i__62121__auto___86193 = G__86194;
continue;
} else {
}
break;
}

var argseq__62128__auto__ = ((((0) < args__62127__auto__.length))?(new cljs.core.IndexedSeq(args__62127__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__62128__auto__);
});})(g__86109__auto___86191))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__86109__auto___86191){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__86109__auto___86191),args);
});})(g__86109__auto___86191))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__86109__auto___86191){
return (function (seq86154){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq86154));
});})(g__86109__auto___86191))
;


var g__86109__auto___86195 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__86109__auto___86195){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__62127__auto__ = [];
var len__62120__auto___86196 = arguments.length;
var i__62121__auto___86197 = (0);
while(true){
if((i__62121__auto___86197 < len__62120__auto___86196)){
args__62127__auto__.push((arguments[i__62121__auto___86197]));

var G__86198 = (i__62121__auto___86197 + (1));
i__62121__auto___86197 = G__86198;
continue;
} else {
}
break;
}

var argseq__62128__auto__ = ((((0) < args__62127__auto__.length))?(new cljs.core.IndexedSeq(args__62127__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__62128__auto__);
});})(g__86109__auto___86195))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__86109__auto___86195){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__86109__auto___86195),args);
});})(g__86109__auto___86195))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__86109__auto___86195){
return (function (seq86155){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq86155));
});})(g__86109__auto___86195))
;


var g__86109__auto___86199 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__86109__auto___86199){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__62127__auto__ = [];
var len__62120__auto___86200 = arguments.length;
var i__62121__auto___86201 = (0);
while(true){
if((i__62121__auto___86201 < len__62120__auto___86200)){
args__62127__auto__.push((arguments[i__62121__auto___86201]));

var G__86202 = (i__62121__auto___86201 + (1));
i__62121__auto___86201 = G__86202;
continue;
} else {
}
break;
}

var argseq__62128__auto__ = ((((0) < args__62127__auto__.length))?(new cljs.core.IndexedSeq(args__62127__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__62128__auto__);
});})(g__86109__auto___86199))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__86109__auto___86199){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__86109__auto___86199),args);
});})(g__86109__auto___86199))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__86109__auto___86199){
return (function (seq86156){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq86156));
});})(g__86109__auto___86199))
;


var g__86109__auto___86203 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__86109__auto___86203){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__62127__auto__ = [];
var len__62120__auto___86204 = arguments.length;
var i__62121__auto___86205 = (0);
while(true){
if((i__62121__auto___86205 < len__62120__auto___86204)){
args__62127__auto__.push((arguments[i__62121__auto___86205]));

var G__86206 = (i__62121__auto___86205 + (1));
i__62121__auto___86205 = G__86206;
continue;
} else {
}
break;
}

var argseq__62128__auto__ = ((((0) < args__62127__auto__.length))?(new cljs.core.IndexedSeq(args__62127__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__62128__auto__);
});})(g__86109__auto___86203))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__86109__auto___86203){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__86109__auto___86203),args);
});})(g__86109__auto___86203))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__86109__auto___86203){
return (function (seq86157){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq86157));
});})(g__86109__auto___86203))
;


var g__86109__auto___86207 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__86109__auto___86207){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__62127__auto__ = [];
var len__62120__auto___86208 = arguments.length;
var i__62121__auto___86209 = (0);
while(true){
if((i__62121__auto___86209 < len__62120__auto___86208)){
args__62127__auto__.push((arguments[i__62121__auto___86209]));

var G__86210 = (i__62121__auto___86209 + (1));
i__62121__auto___86209 = G__86210;
continue;
} else {
}
break;
}

var argseq__62128__auto__ = ((((0) < args__62127__auto__.length))?(new cljs.core.IndexedSeq(args__62127__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__62128__auto__);
});})(g__86109__auto___86207))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__86109__auto___86207){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__86109__auto___86207),args);
});})(g__86109__auto___86207))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__86109__auto___86207){
return (function (seq86158){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq86158));
});})(g__86109__auto___86207))
;


var g__86109__auto___86211 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__86109__auto___86211){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__62127__auto__ = [];
var len__62120__auto___86212 = arguments.length;
var i__62121__auto___86213 = (0);
while(true){
if((i__62121__auto___86213 < len__62120__auto___86212)){
args__62127__auto__.push((arguments[i__62121__auto___86213]));

var G__86214 = (i__62121__auto___86213 + (1));
i__62121__auto___86213 = G__86214;
continue;
} else {
}
break;
}

var argseq__62128__auto__ = ((((0) < args__62127__auto__.length))?(new cljs.core.IndexedSeq(args__62127__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__62128__auto__);
});})(g__86109__auto___86211))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__86109__auto___86211){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__86109__auto___86211),args);
});})(g__86109__auto___86211))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__86109__auto___86211){
return (function (seq86159){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq86159));
});})(g__86109__auto___86211))
;


var g__86109__auto___86215 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__86109__auto___86215){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__62127__auto__ = [];
var len__62120__auto___86216 = arguments.length;
var i__62121__auto___86217 = (0);
while(true){
if((i__62121__auto___86217 < len__62120__auto___86216)){
args__62127__auto__.push((arguments[i__62121__auto___86217]));

var G__86218 = (i__62121__auto___86217 + (1));
i__62121__auto___86217 = G__86218;
continue;
} else {
}
break;
}

var argseq__62128__auto__ = ((((0) < args__62127__auto__.length))?(new cljs.core.IndexedSeq(args__62127__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__62128__auto__);
});})(g__86109__auto___86215))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__86109__auto___86215){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__86109__auto___86215),args);
});})(g__86109__auto___86215))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__86109__auto___86215){
return (function (seq86160){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq86160));
});})(g__86109__auto___86215))
;


var g__86109__auto___86219 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__86109__auto___86219){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__62127__auto__ = [];
var len__62120__auto___86220 = arguments.length;
var i__62121__auto___86221 = (0);
while(true){
if((i__62121__auto___86221 < len__62120__auto___86220)){
args__62127__auto__.push((arguments[i__62121__auto___86221]));

var G__86222 = (i__62121__auto___86221 + (1));
i__62121__auto___86221 = G__86222;
continue;
} else {
}
break;
}

var argseq__62128__auto__ = ((((0) < args__62127__auto__.length))?(new cljs.core.IndexedSeq(args__62127__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__62128__auto__);
});})(g__86109__auto___86219))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__86109__auto___86219){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__86109__auto___86219),args);
});})(g__86109__auto___86219))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__86109__auto___86219){
return (function (seq86161){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq86161));
});})(g__86109__auto___86219))
;


var g__86109__auto___86223 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__86109__auto___86223){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__62127__auto__ = [];
var len__62120__auto___86224 = arguments.length;
var i__62121__auto___86225 = (0);
while(true){
if((i__62121__auto___86225 < len__62120__auto___86224)){
args__62127__auto__.push((arguments[i__62121__auto___86225]));

var G__86226 = (i__62121__auto___86225 + (1));
i__62121__auto___86225 = G__86226;
continue;
} else {
}
break;
}

var argseq__62128__auto__ = ((((0) < args__62127__auto__.length))?(new cljs.core.IndexedSeq(args__62127__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__62128__auto__);
});})(g__86109__auto___86223))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__86109__auto___86223){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__86109__auto___86223),args);
});})(g__86109__auto___86223))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__86109__auto___86223){
return (function (seq86162){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq86162));
});})(g__86109__auto___86223))
;


var g__86109__auto___86227 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__86109__auto___86227){
return (function cljs$spec$gen$alpha$return(var_args){
var args__62127__auto__ = [];
var len__62120__auto___86228 = arguments.length;
var i__62121__auto___86229 = (0);
while(true){
if((i__62121__auto___86229 < len__62120__auto___86228)){
args__62127__auto__.push((arguments[i__62121__auto___86229]));

var G__86230 = (i__62121__auto___86229 + (1));
i__62121__auto___86229 = G__86230;
continue;
} else {
}
break;
}

var argseq__62128__auto__ = ((((0) < args__62127__auto__.length))?(new cljs.core.IndexedSeq(args__62127__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__62128__auto__);
});})(g__86109__auto___86227))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__86109__auto___86227){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__86109__auto___86227),args);
});})(g__86109__auto___86227))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__86109__auto___86227){
return (function (seq86163){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq86163));
});})(g__86109__auto___86227))
;


var g__86109__auto___86231 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__86109__auto___86231){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__62127__auto__ = [];
var len__62120__auto___86232 = arguments.length;
var i__62121__auto___86233 = (0);
while(true){
if((i__62121__auto___86233 < len__62120__auto___86232)){
args__62127__auto__.push((arguments[i__62121__auto___86233]));

var G__86234 = (i__62121__auto___86233 + (1));
i__62121__auto___86233 = G__86234;
continue;
} else {
}
break;
}

var argseq__62128__auto__ = ((((0) < args__62127__auto__.length))?(new cljs.core.IndexedSeq(args__62127__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__62128__auto__);
});})(g__86109__auto___86231))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__86109__auto___86231){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__86109__auto___86231),args);
});})(g__86109__auto___86231))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__86109__auto___86231){
return (function (seq86164){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq86164));
});})(g__86109__auto___86231))
;


var g__86109__auto___86235 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__86109__auto___86235){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__62127__auto__ = [];
var len__62120__auto___86236 = arguments.length;
var i__62121__auto___86237 = (0);
while(true){
if((i__62121__auto___86237 < len__62120__auto___86236)){
args__62127__auto__.push((arguments[i__62121__auto___86237]));

var G__86238 = (i__62121__auto___86237 + (1));
i__62121__auto___86237 = G__86238;
continue;
} else {
}
break;
}

var argseq__62128__auto__ = ((((0) < args__62127__auto__.length))?(new cljs.core.IndexedSeq(args__62127__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__62128__auto__);
});})(g__86109__auto___86235))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__86109__auto___86235){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__86109__auto___86235),args);
});})(g__86109__auto___86235))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__86109__auto___86235){
return (function (seq86165){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq86165));
});})(g__86109__auto___86235))
;


var g__86109__auto___86239 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__86109__auto___86239){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__62127__auto__ = [];
var len__62120__auto___86240 = arguments.length;
var i__62121__auto___86241 = (0);
while(true){
if((i__62121__auto___86241 < len__62120__auto___86240)){
args__62127__auto__.push((arguments[i__62121__auto___86241]));

var G__86242 = (i__62121__auto___86241 + (1));
i__62121__auto___86241 = G__86242;
continue;
} else {
}
break;
}

var argseq__62128__auto__ = ((((0) < args__62127__auto__.length))?(new cljs.core.IndexedSeq(args__62127__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__62128__auto__);
});})(g__86109__auto___86239))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__86109__auto___86239){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__86109__auto___86239),args);
});})(g__86109__auto___86239))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__86109__auto___86239){
return (function (seq86166){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq86166));
});})(g__86109__auto___86239))
;

var g__86122__auto___86264 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__86122__auto___86264){
return (function cljs$spec$gen$alpha$any(var_args){
var args__62127__auto__ = [];
var len__62120__auto___86265 = arguments.length;
var i__62121__auto___86266 = (0);
while(true){
if((i__62121__auto___86266 < len__62120__auto___86265)){
args__62127__auto__.push((arguments[i__62121__auto___86266]));

var G__86267 = (i__62121__auto___86266 + (1));
i__62121__auto___86266 = G__86267;
continue;
} else {
}
break;
}

var argseq__62128__auto__ = ((((0) < args__62127__auto__.length))?(new cljs.core.IndexedSeq(args__62127__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__62128__auto__);
});})(g__86122__auto___86264))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__86122__auto___86264){
return (function (args){
return cljs.core.deref.call(null,g__86122__auto___86264);
});})(g__86122__auto___86264))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__86122__auto___86264){
return (function (seq86243){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq86243));
});})(g__86122__auto___86264))
;


var g__86122__auto___86268 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__86122__auto___86268){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__62127__auto__ = [];
var len__62120__auto___86269 = arguments.length;
var i__62121__auto___86270 = (0);
while(true){
if((i__62121__auto___86270 < len__62120__auto___86269)){
args__62127__auto__.push((arguments[i__62121__auto___86270]));

var G__86271 = (i__62121__auto___86270 + (1));
i__62121__auto___86270 = G__86271;
continue;
} else {
}
break;
}

var argseq__62128__auto__ = ((((0) < args__62127__auto__.length))?(new cljs.core.IndexedSeq(args__62127__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__62128__auto__);
});})(g__86122__auto___86268))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__86122__auto___86268){
return (function (args){
return cljs.core.deref.call(null,g__86122__auto___86268);
});})(g__86122__auto___86268))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__86122__auto___86268){
return (function (seq86244){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq86244));
});})(g__86122__auto___86268))
;


var g__86122__auto___86272 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__86122__auto___86272){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__62127__auto__ = [];
var len__62120__auto___86273 = arguments.length;
var i__62121__auto___86274 = (0);
while(true){
if((i__62121__auto___86274 < len__62120__auto___86273)){
args__62127__auto__.push((arguments[i__62121__auto___86274]));

var G__86275 = (i__62121__auto___86274 + (1));
i__62121__auto___86274 = G__86275;
continue;
} else {
}
break;
}

var argseq__62128__auto__ = ((((0) < args__62127__auto__.length))?(new cljs.core.IndexedSeq(args__62127__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__62128__auto__);
});})(g__86122__auto___86272))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__86122__auto___86272){
return (function (args){
return cljs.core.deref.call(null,g__86122__auto___86272);
});})(g__86122__auto___86272))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__86122__auto___86272){
return (function (seq86245){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq86245));
});})(g__86122__auto___86272))
;


var g__86122__auto___86276 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__86122__auto___86276){
return (function cljs$spec$gen$alpha$char(var_args){
var args__62127__auto__ = [];
var len__62120__auto___86277 = arguments.length;
var i__62121__auto___86278 = (0);
while(true){
if((i__62121__auto___86278 < len__62120__auto___86277)){
args__62127__auto__.push((arguments[i__62121__auto___86278]));

var G__86279 = (i__62121__auto___86278 + (1));
i__62121__auto___86278 = G__86279;
continue;
} else {
}
break;
}

var argseq__62128__auto__ = ((((0) < args__62127__auto__.length))?(new cljs.core.IndexedSeq(args__62127__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__62128__auto__);
});})(g__86122__auto___86276))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__86122__auto___86276){
return (function (args){
return cljs.core.deref.call(null,g__86122__auto___86276);
});})(g__86122__auto___86276))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__86122__auto___86276){
return (function (seq86246){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq86246));
});})(g__86122__auto___86276))
;


var g__86122__auto___86280 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__86122__auto___86280){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__62127__auto__ = [];
var len__62120__auto___86281 = arguments.length;
var i__62121__auto___86282 = (0);
while(true){
if((i__62121__auto___86282 < len__62120__auto___86281)){
args__62127__auto__.push((arguments[i__62121__auto___86282]));

var G__86283 = (i__62121__auto___86282 + (1));
i__62121__auto___86282 = G__86283;
continue;
} else {
}
break;
}

var argseq__62128__auto__ = ((((0) < args__62127__auto__.length))?(new cljs.core.IndexedSeq(args__62127__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__62128__auto__);
});})(g__86122__auto___86280))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__86122__auto___86280){
return (function (args){
return cljs.core.deref.call(null,g__86122__auto___86280);
});})(g__86122__auto___86280))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__86122__auto___86280){
return (function (seq86247){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq86247));
});})(g__86122__auto___86280))
;


var g__86122__auto___86284 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__86122__auto___86284){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__62127__auto__ = [];
var len__62120__auto___86285 = arguments.length;
var i__62121__auto___86286 = (0);
while(true){
if((i__62121__auto___86286 < len__62120__auto___86285)){
args__62127__auto__.push((arguments[i__62121__auto___86286]));

var G__86287 = (i__62121__auto___86286 + (1));
i__62121__auto___86286 = G__86287;
continue;
} else {
}
break;
}

var argseq__62128__auto__ = ((((0) < args__62127__auto__.length))?(new cljs.core.IndexedSeq(args__62127__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__62128__auto__);
});})(g__86122__auto___86284))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__86122__auto___86284){
return (function (args){
return cljs.core.deref.call(null,g__86122__auto___86284);
});})(g__86122__auto___86284))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__86122__auto___86284){
return (function (seq86248){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq86248));
});})(g__86122__auto___86284))
;


var g__86122__auto___86288 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__86122__auto___86288){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__62127__auto__ = [];
var len__62120__auto___86289 = arguments.length;
var i__62121__auto___86290 = (0);
while(true){
if((i__62121__auto___86290 < len__62120__auto___86289)){
args__62127__auto__.push((arguments[i__62121__auto___86290]));

var G__86291 = (i__62121__auto___86290 + (1));
i__62121__auto___86290 = G__86291;
continue;
} else {
}
break;
}

var argseq__62128__auto__ = ((((0) < args__62127__auto__.length))?(new cljs.core.IndexedSeq(args__62127__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__62128__auto__);
});})(g__86122__auto___86288))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__86122__auto___86288){
return (function (args){
return cljs.core.deref.call(null,g__86122__auto___86288);
});})(g__86122__auto___86288))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__86122__auto___86288){
return (function (seq86249){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq86249));
});})(g__86122__auto___86288))
;


var g__86122__auto___86292 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__86122__auto___86292){
return (function cljs$spec$gen$alpha$double(var_args){
var args__62127__auto__ = [];
var len__62120__auto___86293 = arguments.length;
var i__62121__auto___86294 = (0);
while(true){
if((i__62121__auto___86294 < len__62120__auto___86293)){
args__62127__auto__.push((arguments[i__62121__auto___86294]));

var G__86295 = (i__62121__auto___86294 + (1));
i__62121__auto___86294 = G__86295;
continue;
} else {
}
break;
}

var argseq__62128__auto__ = ((((0) < args__62127__auto__.length))?(new cljs.core.IndexedSeq(args__62127__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__62128__auto__);
});})(g__86122__auto___86292))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__86122__auto___86292){
return (function (args){
return cljs.core.deref.call(null,g__86122__auto___86292);
});})(g__86122__auto___86292))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__86122__auto___86292){
return (function (seq86250){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq86250));
});})(g__86122__auto___86292))
;


var g__86122__auto___86296 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__86122__auto___86296){
return (function cljs$spec$gen$alpha$int(var_args){
var args__62127__auto__ = [];
var len__62120__auto___86297 = arguments.length;
var i__62121__auto___86298 = (0);
while(true){
if((i__62121__auto___86298 < len__62120__auto___86297)){
args__62127__auto__.push((arguments[i__62121__auto___86298]));

var G__86299 = (i__62121__auto___86298 + (1));
i__62121__auto___86298 = G__86299;
continue;
} else {
}
break;
}

var argseq__62128__auto__ = ((((0) < args__62127__auto__.length))?(new cljs.core.IndexedSeq(args__62127__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__62128__auto__);
});})(g__86122__auto___86296))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__86122__auto___86296){
return (function (args){
return cljs.core.deref.call(null,g__86122__auto___86296);
});})(g__86122__auto___86296))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__86122__auto___86296){
return (function (seq86251){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq86251));
});})(g__86122__auto___86296))
;


var g__86122__auto___86300 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__86122__auto___86300){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__62127__auto__ = [];
var len__62120__auto___86301 = arguments.length;
var i__62121__auto___86302 = (0);
while(true){
if((i__62121__auto___86302 < len__62120__auto___86301)){
args__62127__auto__.push((arguments[i__62121__auto___86302]));

var G__86303 = (i__62121__auto___86302 + (1));
i__62121__auto___86302 = G__86303;
continue;
} else {
}
break;
}

var argseq__62128__auto__ = ((((0) < args__62127__auto__.length))?(new cljs.core.IndexedSeq(args__62127__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__62128__auto__);
});})(g__86122__auto___86300))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__86122__auto___86300){
return (function (args){
return cljs.core.deref.call(null,g__86122__auto___86300);
});})(g__86122__auto___86300))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__86122__auto___86300){
return (function (seq86252){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq86252));
});})(g__86122__auto___86300))
;


var g__86122__auto___86304 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__86122__auto___86304){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__62127__auto__ = [];
var len__62120__auto___86305 = arguments.length;
var i__62121__auto___86306 = (0);
while(true){
if((i__62121__auto___86306 < len__62120__auto___86305)){
args__62127__auto__.push((arguments[i__62121__auto___86306]));

var G__86307 = (i__62121__auto___86306 + (1));
i__62121__auto___86306 = G__86307;
continue;
} else {
}
break;
}

var argseq__62128__auto__ = ((((0) < args__62127__auto__.length))?(new cljs.core.IndexedSeq(args__62127__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__62128__auto__);
});})(g__86122__auto___86304))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__86122__auto___86304){
return (function (args){
return cljs.core.deref.call(null,g__86122__auto___86304);
});})(g__86122__auto___86304))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__86122__auto___86304){
return (function (seq86253){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq86253));
});})(g__86122__auto___86304))
;


var g__86122__auto___86308 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__86122__auto___86308){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__62127__auto__ = [];
var len__62120__auto___86309 = arguments.length;
var i__62121__auto___86310 = (0);
while(true){
if((i__62121__auto___86310 < len__62120__auto___86309)){
args__62127__auto__.push((arguments[i__62121__auto___86310]));

var G__86311 = (i__62121__auto___86310 + (1));
i__62121__auto___86310 = G__86311;
continue;
} else {
}
break;
}

var argseq__62128__auto__ = ((((0) < args__62127__auto__.length))?(new cljs.core.IndexedSeq(args__62127__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__62128__auto__);
});})(g__86122__auto___86308))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__86122__auto___86308){
return (function (args){
return cljs.core.deref.call(null,g__86122__auto___86308);
});})(g__86122__auto___86308))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__86122__auto___86308){
return (function (seq86254){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq86254));
});})(g__86122__auto___86308))
;


var g__86122__auto___86312 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__86122__auto___86312){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__62127__auto__ = [];
var len__62120__auto___86313 = arguments.length;
var i__62121__auto___86314 = (0);
while(true){
if((i__62121__auto___86314 < len__62120__auto___86313)){
args__62127__auto__.push((arguments[i__62121__auto___86314]));

var G__86315 = (i__62121__auto___86314 + (1));
i__62121__auto___86314 = G__86315;
continue;
} else {
}
break;
}

var argseq__62128__auto__ = ((((0) < args__62127__auto__.length))?(new cljs.core.IndexedSeq(args__62127__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__62128__auto__);
});})(g__86122__auto___86312))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__86122__auto___86312){
return (function (args){
return cljs.core.deref.call(null,g__86122__auto___86312);
});})(g__86122__auto___86312))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__86122__auto___86312){
return (function (seq86255){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq86255));
});})(g__86122__auto___86312))
;


var g__86122__auto___86316 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__86122__auto___86316){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__62127__auto__ = [];
var len__62120__auto___86317 = arguments.length;
var i__62121__auto___86318 = (0);
while(true){
if((i__62121__auto___86318 < len__62120__auto___86317)){
args__62127__auto__.push((arguments[i__62121__auto___86318]));

var G__86319 = (i__62121__auto___86318 + (1));
i__62121__auto___86318 = G__86319;
continue;
} else {
}
break;
}

var argseq__62128__auto__ = ((((0) < args__62127__auto__.length))?(new cljs.core.IndexedSeq(args__62127__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__62128__auto__);
});})(g__86122__auto___86316))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__86122__auto___86316){
return (function (args){
return cljs.core.deref.call(null,g__86122__auto___86316);
});})(g__86122__auto___86316))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__86122__auto___86316){
return (function (seq86256){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq86256));
});})(g__86122__auto___86316))
;


var g__86122__auto___86320 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__86122__auto___86320){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__62127__auto__ = [];
var len__62120__auto___86321 = arguments.length;
var i__62121__auto___86322 = (0);
while(true){
if((i__62121__auto___86322 < len__62120__auto___86321)){
args__62127__auto__.push((arguments[i__62121__auto___86322]));

var G__86323 = (i__62121__auto___86322 + (1));
i__62121__auto___86322 = G__86323;
continue;
} else {
}
break;
}

var argseq__62128__auto__ = ((((0) < args__62127__auto__.length))?(new cljs.core.IndexedSeq(args__62127__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__62128__auto__);
});})(g__86122__auto___86320))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__86122__auto___86320){
return (function (args){
return cljs.core.deref.call(null,g__86122__auto___86320);
});})(g__86122__auto___86320))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__86122__auto___86320){
return (function (seq86257){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq86257));
});})(g__86122__auto___86320))
;


var g__86122__auto___86324 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__86122__auto___86324){
return (function cljs$spec$gen$alpha$string(var_args){
var args__62127__auto__ = [];
var len__62120__auto___86325 = arguments.length;
var i__62121__auto___86326 = (0);
while(true){
if((i__62121__auto___86326 < len__62120__auto___86325)){
args__62127__auto__.push((arguments[i__62121__auto___86326]));

var G__86327 = (i__62121__auto___86326 + (1));
i__62121__auto___86326 = G__86327;
continue;
} else {
}
break;
}

var argseq__62128__auto__ = ((((0) < args__62127__auto__.length))?(new cljs.core.IndexedSeq(args__62127__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__62128__auto__);
});})(g__86122__auto___86324))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__86122__auto___86324){
return (function (args){
return cljs.core.deref.call(null,g__86122__auto___86324);
});})(g__86122__auto___86324))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__86122__auto___86324){
return (function (seq86258){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq86258));
});})(g__86122__auto___86324))
;


var g__86122__auto___86328 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__86122__auto___86328){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__62127__auto__ = [];
var len__62120__auto___86329 = arguments.length;
var i__62121__auto___86330 = (0);
while(true){
if((i__62121__auto___86330 < len__62120__auto___86329)){
args__62127__auto__.push((arguments[i__62121__auto___86330]));

var G__86331 = (i__62121__auto___86330 + (1));
i__62121__auto___86330 = G__86331;
continue;
} else {
}
break;
}

var argseq__62128__auto__ = ((((0) < args__62127__auto__.length))?(new cljs.core.IndexedSeq(args__62127__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__62128__auto__);
});})(g__86122__auto___86328))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__86122__auto___86328){
return (function (args){
return cljs.core.deref.call(null,g__86122__auto___86328);
});})(g__86122__auto___86328))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__86122__auto___86328){
return (function (seq86259){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq86259));
});})(g__86122__auto___86328))
;


var g__86122__auto___86332 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__86122__auto___86332){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__62127__auto__ = [];
var len__62120__auto___86333 = arguments.length;
var i__62121__auto___86334 = (0);
while(true){
if((i__62121__auto___86334 < len__62120__auto___86333)){
args__62127__auto__.push((arguments[i__62121__auto___86334]));

var G__86335 = (i__62121__auto___86334 + (1));
i__62121__auto___86334 = G__86335;
continue;
} else {
}
break;
}

var argseq__62128__auto__ = ((((0) < args__62127__auto__.length))?(new cljs.core.IndexedSeq(args__62127__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__62128__auto__);
});})(g__86122__auto___86332))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__86122__auto___86332){
return (function (args){
return cljs.core.deref.call(null,g__86122__auto___86332);
});})(g__86122__auto___86332))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__86122__auto___86332){
return (function (seq86260){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq86260));
});})(g__86122__auto___86332))
;


var g__86122__auto___86336 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__86122__auto___86336){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__62127__auto__ = [];
var len__62120__auto___86337 = arguments.length;
var i__62121__auto___86338 = (0);
while(true){
if((i__62121__auto___86338 < len__62120__auto___86337)){
args__62127__auto__.push((arguments[i__62121__auto___86338]));

var G__86339 = (i__62121__auto___86338 + (1));
i__62121__auto___86338 = G__86339;
continue;
} else {
}
break;
}

var argseq__62128__auto__ = ((((0) < args__62127__auto__.length))?(new cljs.core.IndexedSeq(args__62127__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__62128__auto__);
});})(g__86122__auto___86336))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__86122__auto___86336){
return (function (args){
return cljs.core.deref.call(null,g__86122__auto___86336);
});})(g__86122__auto___86336))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__86122__auto___86336){
return (function (seq86261){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq86261));
});})(g__86122__auto___86336))
;


var g__86122__auto___86340 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__86122__auto___86340){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__62127__auto__ = [];
var len__62120__auto___86341 = arguments.length;
var i__62121__auto___86342 = (0);
while(true){
if((i__62121__auto___86342 < len__62120__auto___86341)){
args__62127__auto__.push((arguments[i__62121__auto___86342]));

var G__86343 = (i__62121__auto___86342 + (1));
i__62121__auto___86342 = G__86343;
continue;
} else {
}
break;
}

var argseq__62128__auto__ = ((((0) < args__62127__auto__.length))?(new cljs.core.IndexedSeq(args__62127__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__62128__auto__);
});})(g__86122__auto___86340))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__86122__auto___86340){
return (function (args){
return cljs.core.deref.call(null,g__86122__auto___86340);
});})(g__86122__auto___86340))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__86122__auto___86340){
return (function (seq86262){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq86262));
});})(g__86122__auto___86340))
;


var g__86122__auto___86344 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__86122__auto___86344){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__62127__auto__ = [];
var len__62120__auto___86345 = arguments.length;
var i__62121__auto___86346 = (0);
while(true){
if((i__62121__auto___86346 < len__62120__auto___86345)){
args__62127__auto__.push((arguments[i__62121__auto___86346]));

var G__86347 = (i__62121__auto___86346 + (1));
i__62121__auto___86346 = G__86347;
continue;
} else {
}
break;
}

var argseq__62128__auto__ = ((((0) < args__62127__auto__.length))?(new cljs.core.IndexedSeq(args__62127__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__62128__auto__);
});})(g__86122__auto___86344))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__86122__auto___86344){
return (function (args){
return cljs.core.deref.call(null,g__86122__auto___86344);
});})(g__86122__auto___86344))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__86122__auto___86344){
return (function (seq86263){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq86263));
});})(g__86122__auto___86344))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__62127__auto__ = [];
var len__62120__auto___86350 = arguments.length;
var i__62121__auto___86351 = (0);
while(true){
if((i__62121__auto___86351 < len__62120__auto___86350)){
args__62127__auto__.push((arguments[i__62121__auto___86351]));

var G__86352 = (i__62121__auto___86351 + (1));
i__62121__auto___86351 = G__86352;
continue;
} else {
}
break;
}

var argseq__62128__auto__ = ((((0) < args__62127__auto__.length))?(new cljs.core.IndexedSeq(args__62127__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__62128__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__86348_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__86348_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq86349){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq86349));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__86353_SHARP_){
return (new Date(p1__86353_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map?rel=1506064206498