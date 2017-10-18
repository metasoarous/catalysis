// Compiled by ClojureScript 1.9.542 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__63563__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__63563 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__63564__i = 0, G__63564__a = new Array(arguments.length -  0);
while (G__63564__i < G__63564__a.length) {G__63564__a[G__63564__i] = arguments[G__63564__i + 0]; ++G__63564__i;}
  args = new cljs.core.IndexedSeq(G__63564__a,0,null);
} 
return G__63563__delegate.call(this,args);};
G__63563.cljs$lang$maxFixedArity = 0;
G__63563.cljs$lang$applyTo = (function (arglist__63565){
var args = cljs.core.seq(arglist__63565);
return G__63563__delegate(args);
});
G__63563.cljs$core$IFn$_invoke$arity$variadic = G__63563__delegate;
return G__63563;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__63566__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__63566 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__63567__i = 0, G__63567__a = new Array(arguments.length -  0);
while (G__63567__i < G__63567__a.length) {G__63567__a[G__63567__i] = arguments[G__63567__i + 0]; ++G__63567__i;}
  args = new cljs.core.IndexedSeq(G__63567__a,0,null);
} 
return G__63566__delegate.call(this,args);};
G__63566.cljs$lang$maxFixedArity = 0;
G__63566.cljs$lang$applyTo = (function (arglist__63568){
var args = cljs.core.seq(arglist__63568);
return G__63566__delegate(args);
});
G__63566.cljs$core$IFn$_invoke$arity$variadic = G__63566__delegate;
return G__63566;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1506064170527