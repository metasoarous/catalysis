// Compiled by ClojureScript 1.9.542 {}
goog.provide('posh.lib.datom_matcher');
goog.require('cljs.core');
goog.require('clojure.set');
posh.lib.datom_matcher.datom_match_pattern_QMARK_ = (function posh$lib$datom_matcher$datom_match_pattern_QMARK_(pattern,datom){
while(true){
if(cljs.core.empty_QMARK_.call(null,pattern)){
return true;
} else {
if(cljs.core.truth_((function (){var p = cljs.core.first.call(null,pattern);
var or__60899__auto__ = cljs.core._EQ_.call(null,p,new cljs.core.Symbol(null,"_","_",-1201019570,null));
if(or__60899__auto__){
return or__60899__auto__;
} else {
var or__60899__auto____$1 = (function (){var and__60887__auto__ = cljs.core.set_QMARK_.call(null,p);
if(and__60887__auto__){
return p.call(null,cljs.core.first.call(null,datom));
} else {
return and__60887__auto__;
}
})();
if(cljs.core.truth_(or__60899__auto____$1)){
return or__60899__auto____$1;
} else {
return cljs.core._EQ_.call(null,p,cljs.core.first.call(null,datom));
}
}
})())){
var G__64104 = cljs.core.rest.call(null,pattern);
var G__64105 = cljs.core.rest.call(null,datom);
pattern = G__64104;
datom = G__64105;
continue;
} else {
return null;
}
}
break;
}
});
posh.lib.datom_matcher.datom_match_QMARK_ = (function posh$lib$datom_matcher$datom_match_QMARK_(patterns,datom){
return cljs.core.some.call(null,(function (p1__64106_SHARP_){
return posh.lib.datom_matcher.datom_match_pattern_QMARK_.call(null,p1__64106_SHARP_,datom);
}),patterns);
});
posh.lib.datom_matcher.any_datoms_match_QMARK_ = (function posh$lib$datom_matcher$any_datoms_match_QMARK_(patterns,datoms){
var G__64109 = patterns;
if(cljs.core._EQ_.call(null,null,G__64109)){
return null;
} else {
if(cljs.core._EQ_.call(null,cljs.core.PersistentVector.EMPTY,G__64109)){
return null;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null),G__64109)){
return true;
} else {
return cljs.core.some.call(null,((function (G__64109){
return (function (p1__64107_SHARP_){
return posh.lib.datom_matcher.datom_match_QMARK_.call(null,patterns,p1__64107_SHARP_);
});})(G__64109))
,datoms);

}
}
}
});
posh.lib.datom_matcher.matching_datoms = (function posh$lib$datom_matcher$matching_datoms(patterns,datoms){
var G__64112 = patterns;
if(cljs.core._EQ_.call(null,cljs.core.PersistentVector.EMPTY,G__64112)){
return datoms;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null),G__64112)){
return datoms;
} else {
if(cljs.core._EQ_.call(null,null,G__64112)){
return null;
} else {
return cljs.core.filter.call(null,((function (G__64112){
return (function (p1__64110_SHARP_){
return posh.lib.datom_matcher.datom_match_QMARK_.call(null,patterns,p1__64110_SHARP_);
});})(G__64112))
,datoms);

}
}
}
});
posh.lib.datom_matcher.combine_entids = (function posh$lib$datom_matcher$combine_entids(entids,rest_datom,patterns,new_patterns,leftover_patterns){
while(true){
if(cljs.core.empty_QMARK_.call(null,patterns)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"new-patterns","new-patterns",404552774),cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,entids,rest_datom)),new_patterns),new cljs.core.Keyword(null,"leftover-patterns","leftover-patterns",377032963),leftover_patterns], null);
} else {
if(cljs.core._EQ_.call(null,rest_datom,cljs.core.rest.call(null,cljs.core.first.call(null,patterns)))){
var G__64113 = clojure.set.union.call(null,entids,((cljs.core.set_QMARK_.call(null,cljs.core.ffirst.call(null,patterns)))?cljs.core.ffirst.call(null,patterns):cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.ffirst.call(null,patterns)], null))));
var G__64114 = rest_datom;
var G__64115 = cljs.core.rest.call(null,patterns);
var G__64116 = new_patterns;
var G__64117 = leftover_patterns;
entids = G__64113;
rest_datom = G__64114;
patterns = G__64115;
new_patterns = G__64116;
leftover_patterns = G__64117;
continue;
} else {
var G__64118 = entids;
var G__64119 = rest_datom;
var G__64120 = cljs.core.rest.call(null,patterns);
var G__64121 = new_patterns;
var G__64122 = cljs.core.cons.call(null,cljs.core.first.call(null,patterns),leftover_patterns);
entids = G__64118;
rest_datom = G__64119;
patterns = G__64120;
new_patterns = G__64121;
leftover_patterns = G__64122;
continue;
}
}
break;
}
});
posh.lib.datom_matcher.reduce_patterns = (function posh$lib$datom_matcher$reduce_patterns(patterns){
var new_patterns = cljs.core.PersistentVector.EMPTY;
var leftover_patterns = patterns;
while(true){
if(cljs.core.empty_QMARK_.call(null,leftover_patterns)){
return new_patterns;
} else {
if((function (){var id = cljs.core.ffirst.call(null,leftover_patterns);
return (cljs.core.set_QMARK_.call(null,id)) || (typeof id === 'number');
})()){
var r = posh.lib.datom_matcher.combine_entids.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.rest.call(null,cljs.core.first.call(null,leftover_patterns)),leftover_patterns,new_patterns,cljs.core.PersistentVector.EMPTY);
var G__64123 = new cljs.core.Keyword(null,"new-patterns","new-patterns",404552774).cljs$core$IFn$_invoke$arity$1(r);
var G__64124 = new cljs.core.Keyword(null,"leftover-patterns","leftover-patterns",377032963).cljs$core$IFn$_invoke$arity$1(r);
new_patterns = G__64123;
leftover_patterns = G__64124;
continue;
} else {
var G__64125 = cljs.core.cons.call(null,cljs.core.first.call(null,leftover_patterns),new_patterns);
var G__64126 = cljs.core.rest.call(null,leftover_patterns);
new_patterns = G__64125;
leftover_patterns = G__64126;
continue;
}
}
break;
}
});

//# sourceMappingURL=datom_matcher.js.map?rel=1506064171765