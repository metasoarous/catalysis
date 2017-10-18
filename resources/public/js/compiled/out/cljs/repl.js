// Compiled by ClojureScript 1.9.542 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__91333){
var map__91358 = p__91333;
var map__91358__$1 = ((((!((map__91358 == null)))?((((map__91358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91358.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__91358):map__91358);
var m = map__91358__$1;
var n = cljs.core.get.call(null,map__91358__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__91358__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__6738__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__6738__auto__)){
var ns = temp__6738__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__91360_91382 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__91361_91383 = null;
var count__91362_91384 = (0);
var i__91363_91385 = (0);
while(true){
if((i__91363_91385 < count__91362_91384)){
var f_91386 = cljs.core._nth.call(null,chunk__91361_91383,i__91363_91385);
cljs.core.println.call(null,"  ",f_91386);

var G__91387 = seq__91360_91382;
var G__91388 = chunk__91361_91383;
var G__91389 = count__91362_91384;
var G__91390 = (i__91363_91385 + (1));
seq__91360_91382 = G__91387;
chunk__91361_91383 = G__91388;
count__91362_91384 = G__91389;
i__91363_91385 = G__91390;
continue;
} else {
var temp__6738__auto___91391 = cljs.core.seq.call(null,seq__91360_91382);
if(temp__6738__auto___91391){
var seq__91360_91392__$1 = temp__6738__auto___91391;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__91360_91392__$1)){
var c__61810__auto___91393 = cljs.core.chunk_first.call(null,seq__91360_91392__$1);
var G__91394 = cljs.core.chunk_rest.call(null,seq__91360_91392__$1);
var G__91395 = c__61810__auto___91393;
var G__91396 = cljs.core.count.call(null,c__61810__auto___91393);
var G__91397 = (0);
seq__91360_91382 = G__91394;
chunk__91361_91383 = G__91395;
count__91362_91384 = G__91396;
i__91363_91385 = G__91397;
continue;
} else {
var f_91398 = cljs.core.first.call(null,seq__91360_91392__$1);
cljs.core.println.call(null,"  ",f_91398);

var G__91399 = cljs.core.next.call(null,seq__91360_91392__$1);
var G__91400 = null;
var G__91401 = (0);
var G__91402 = (0);
seq__91360_91382 = G__91399;
chunk__91361_91383 = G__91400;
count__91362_91384 = G__91401;
i__91363_91385 = G__91402;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_91403 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__60899__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__60899__auto__)){
return or__60899__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_91403);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_91403)))?cljs.core.second.call(null,arglists_91403):arglists_91403));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/special_forms#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__91364_91404 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__91365_91405 = null;
var count__91366_91406 = (0);
var i__91367_91407 = (0);
while(true){
if((i__91367_91407 < count__91366_91406)){
var vec__91368_91408 = cljs.core._nth.call(null,chunk__91365_91405,i__91367_91407);
var name_91409 = cljs.core.nth.call(null,vec__91368_91408,(0),null);
var map__91371_91410 = cljs.core.nth.call(null,vec__91368_91408,(1),null);
var map__91371_91411__$1 = ((((!((map__91371_91410 == null)))?((((map__91371_91410.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91371_91410.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__91371_91410):map__91371_91410);
var doc_91412 = cljs.core.get.call(null,map__91371_91411__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_91413 = cljs.core.get.call(null,map__91371_91411__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_91409);

cljs.core.println.call(null," ",arglists_91413);

if(cljs.core.truth_(doc_91412)){
cljs.core.println.call(null," ",doc_91412);
} else {
}

var G__91414 = seq__91364_91404;
var G__91415 = chunk__91365_91405;
var G__91416 = count__91366_91406;
var G__91417 = (i__91367_91407 + (1));
seq__91364_91404 = G__91414;
chunk__91365_91405 = G__91415;
count__91366_91406 = G__91416;
i__91367_91407 = G__91417;
continue;
} else {
var temp__6738__auto___91418 = cljs.core.seq.call(null,seq__91364_91404);
if(temp__6738__auto___91418){
var seq__91364_91419__$1 = temp__6738__auto___91418;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__91364_91419__$1)){
var c__61810__auto___91420 = cljs.core.chunk_first.call(null,seq__91364_91419__$1);
var G__91421 = cljs.core.chunk_rest.call(null,seq__91364_91419__$1);
var G__91422 = c__61810__auto___91420;
var G__91423 = cljs.core.count.call(null,c__61810__auto___91420);
var G__91424 = (0);
seq__91364_91404 = G__91421;
chunk__91365_91405 = G__91422;
count__91366_91406 = G__91423;
i__91367_91407 = G__91424;
continue;
} else {
var vec__91373_91425 = cljs.core.first.call(null,seq__91364_91419__$1);
var name_91426 = cljs.core.nth.call(null,vec__91373_91425,(0),null);
var map__91376_91427 = cljs.core.nth.call(null,vec__91373_91425,(1),null);
var map__91376_91428__$1 = ((((!((map__91376_91427 == null)))?((((map__91376_91427.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91376_91427.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__91376_91427):map__91376_91427);
var doc_91429 = cljs.core.get.call(null,map__91376_91428__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_91430 = cljs.core.get.call(null,map__91376_91428__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_91426);

cljs.core.println.call(null," ",arglists_91430);

if(cljs.core.truth_(doc_91429)){
cljs.core.println.call(null," ",doc_91429);
} else {
}

var G__91431 = cljs.core.next.call(null,seq__91364_91419__$1);
var G__91432 = null;
var G__91433 = (0);
var G__91434 = (0);
seq__91364_91404 = G__91431;
chunk__91365_91405 = G__91432;
count__91366_91406 = G__91433;
i__91367_91407 = G__91434;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__6738__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__6738__auto__)){
var fnspec = temp__6738__auto__;
cljs.core.print.call(null,"Spec");

var seq__91378 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__91379 = null;
var count__91380 = (0);
var i__91381 = (0);
while(true){
if((i__91381 < count__91380)){
var role = cljs.core._nth.call(null,chunk__91379,i__91381);
var temp__6738__auto___91435__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6738__auto___91435__$1)){
var spec_91436 = temp__6738__auto___91435__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_91436));
} else {
}

var G__91437 = seq__91378;
var G__91438 = chunk__91379;
var G__91439 = count__91380;
var G__91440 = (i__91381 + (1));
seq__91378 = G__91437;
chunk__91379 = G__91438;
count__91380 = G__91439;
i__91381 = G__91440;
continue;
} else {
var temp__6738__auto____$1 = cljs.core.seq.call(null,seq__91378);
if(temp__6738__auto____$1){
var seq__91378__$1 = temp__6738__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__91378__$1)){
var c__61810__auto__ = cljs.core.chunk_first.call(null,seq__91378__$1);
var G__91441 = cljs.core.chunk_rest.call(null,seq__91378__$1);
var G__91442 = c__61810__auto__;
var G__91443 = cljs.core.count.call(null,c__61810__auto__);
var G__91444 = (0);
seq__91378 = G__91441;
chunk__91379 = G__91442;
count__91380 = G__91443;
i__91381 = G__91444;
continue;
} else {
var role = cljs.core.first.call(null,seq__91378__$1);
var temp__6738__auto___91445__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6738__auto___91445__$2)){
var spec_91446 = temp__6738__auto___91445__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_91446));
} else {
}

var G__91447 = cljs.core.next.call(null,seq__91378__$1);
var G__91448 = null;
var G__91449 = (0);
var G__91450 = (0);
seq__91378 = G__91447;
chunk__91379 = G__91448;
count__91380 = G__91449;
i__91381 = G__91450;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1506064216528