// Compiled by ClojureScript 1.9.542 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__60899__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__60899__auto__){
return or__60899__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("goog/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__60899__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__60899__auto__)){
return or__60899__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__90276_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__90276_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__90281 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__90282 = null;
var count__90283 = (0);
var i__90284 = (0);
while(true){
if((i__90284 < count__90283)){
var n = cljs.core._nth.call(null,chunk__90282,i__90284);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__90285 = seq__90281;
var G__90286 = chunk__90282;
var G__90287 = count__90283;
var G__90288 = (i__90284 + (1));
seq__90281 = G__90285;
chunk__90282 = G__90286;
count__90283 = G__90287;
i__90284 = G__90288;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__90281);
if(temp__6738__auto__){
var seq__90281__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__90281__$1)){
var c__61810__auto__ = cljs.core.chunk_first.call(null,seq__90281__$1);
var G__90289 = cljs.core.chunk_rest.call(null,seq__90281__$1);
var G__90290 = c__61810__auto__;
var G__90291 = cljs.core.count.call(null,c__61810__auto__);
var G__90292 = (0);
seq__90281 = G__90289;
chunk__90282 = G__90290;
count__90283 = G__90291;
i__90284 = G__90292;
continue;
} else {
var n = cljs.core.first.call(null,seq__90281__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__90293 = cljs.core.next.call(null,seq__90281__$1);
var G__90294 = null;
var G__90295 = (0);
var G__90296 = (0);
seq__90281 = G__90293;
chunk__90282 = G__90294;
count__90283 = G__90295;
i__90284 = G__90296;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__90347_90358 = cljs.core.seq.call(null,deps);
var chunk__90348_90359 = null;
var count__90349_90360 = (0);
var i__90350_90361 = (0);
while(true){
if((i__90350_90361 < count__90349_90360)){
var dep_90362 = cljs.core._nth.call(null,chunk__90348_90359,i__90350_90361);
topo_sort_helper_STAR_.call(null,dep_90362,(depth + (1)),state);

var G__90363 = seq__90347_90358;
var G__90364 = chunk__90348_90359;
var G__90365 = count__90349_90360;
var G__90366 = (i__90350_90361 + (1));
seq__90347_90358 = G__90363;
chunk__90348_90359 = G__90364;
count__90349_90360 = G__90365;
i__90350_90361 = G__90366;
continue;
} else {
var temp__6738__auto___90367 = cljs.core.seq.call(null,seq__90347_90358);
if(temp__6738__auto___90367){
var seq__90347_90368__$1 = temp__6738__auto___90367;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__90347_90368__$1)){
var c__61810__auto___90369 = cljs.core.chunk_first.call(null,seq__90347_90368__$1);
var G__90370 = cljs.core.chunk_rest.call(null,seq__90347_90368__$1);
var G__90371 = c__61810__auto___90369;
var G__90372 = cljs.core.count.call(null,c__61810__auto___90369);
var G__90373 = (0);
seq__90347_90358 = G__90370;
chunk__90348_90359 = G__90371;
count__90349_90360 = G__90372;
i__90350_90361 = G__90373;
continue;
} else {
var dep_90374 = cljs.core.first.call(null,seq__90347_90368__$1);
topo_sort_helper_STAR_.call(null,dep_90374,(depth + (1)),state);

var G__90375 = cljs.core.next.call(null,seq__90347_90368__$1);
var G__90376 = null;
var G__90377 = (0);
var G__90378 = (0);
seq__90347_90358 = G__90375;
chunk__90348_90359 = G__90376;
count__90349_90360 = G__90377;
i__90350_90361 = G__90378;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__90351){
var vec__90355 = p__90351;
var seq__90356 = cljs.core.seq.call(null,vec__90355);
var first__90357 = cljs.core.first.call(null,seq__90356);
var seq__90356__$1 = cljs.core.next.call(null,seq__90356);
var x = first__90357;
var xs = seq__90356__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__90355,seq__90356,first__90357,seq__90356__$1,x,xs,get_deps__$1){
return (function (p1__90297_SHARP_){
return clojure.set.difference.call(null,p1__90297_SHARP_,x);
});})(vec__90355,seq__90356,first__90357,seq__90356__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__90391 = cljs.core.seq.call(null,provides);
var chunk__90392 = null;
var count__90393 = (0);
var i__90394 = (0);
while(true){
if((i__90394 < count__90393)){
var prov = cljs.core._nth.call(null,chunk__90392,i__90394);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__90395_90403 = cljs.core.seq.call(null,requires);
var chunk__90396_90404 = null;
var count__90397_90405 = (0);
var i__90398_90406 = (0);
while(true){
if((i__90398_90406 < count__90397_90405)){
var req_90407 = cljs.core._nth.call(null,chunk__90396_90404,i__90398_90406);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_90407,prov);

var G__90408 = seq__90395_90403;
var G__90409 = chunk__90396_90404;
var G__90410 = count__90397_90405;
var G__90411 = (i__90398_90406 + (1));
seq__90395_90403 = G__90408;
chunk__90396_90404 = G__90409;
count__90397_90405 = G__90410;
i__90398_90406 = G__90411;
continue;
} else {
var temp__6738__auto___90412 = cljs.core.seq.call(null,seq__90395_90403);
if(temp__6738__auto___90412){
var seq__90395_90413__$1 = temp__6738__auto___90412;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__90395_90413__$1)){
var c__61810__auto___90414 = cljs.core.chunk_first.call(null,seq__90395_90413__$1);
var G__90415 = cljs.core.chunk_rest.call(null,seq__90395_90413__$1);
var G__90416 = c__61810__auto___90414;
var G__90417 = cljs.core.count.call(null,c__61810__auto___90414);
var G__90418 = (0);
seq__90395_90403 = G__90415;
chunk__90396_90404 = G__90416;
count__90397_90405 = G__90417;
i__90398_90406 = G__90418;
continue;
} else {
var req_90419 = cljs.core.first.call(null,seq__90395_90413__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_90419,prov);

var G__90420 = cljs.core.next.call(null,seq__90395_90413__$1);
var G__90421 = null;
var G__90422 = (0);
var G__90423 = (0);
seq__90395_90403 = G__90420;
chunk__90396_90404 = G__90421;
count__90397_90405 = G__90422;
i__90398_90406 = G__90423;
continue;
}
} else {
}
}
break;
}

var G__90424 = seq__90391;
var G__90425 = chunk__90392;
var G__90426 = count__90393;
var G__90427 = (i__90394 + (1));
seq__90391 = G__90424;
chunk__90392 = G__90425;
count__90393 = G__90426;
i__90394 = G__90427;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__90391);
if(temp__6738__auto__){
var seq__90391__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__90391__$1)){
var c__61810__auto__ = cljs.core.chunk_first.call(null,seq__90391__$1);
var G__90428 = cljs.core.chunk_rest.call(null,seq__90391__$1);
var G__90429 = c__61810__auto__;
var G__90430 = cljs.core.count.call(null,c__61810__auto__);
var G__90431 = (0);
seq__90391 = G__90428;
chunk__90392 = G__90429;
count__90393 = G__90430;
i__90394 = G__90431;
continue;
} else {
var prov = cljs.core.first.call(null,seq__90391__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__90399_90432 = cljs.core.seq.call(null,requires);
var chunk__90400_90433 = null;
var count__90401_90434 = (0);
var i__90402_90435 = (0);
while(true){
if((i__90402_90435 < count__90401_90434)){
var req_90436 = cljs.core._nth.call(null,chunk__90400_90433,i__90402_90435);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_90436,prov);

var G__90437 = seq__90399_90432;
var G__90438 = chunk__90400_90433;
var G__90439 = count__90401_90434;
var G__90440 = (i__90402_90435 + (1));
seq__90399_90432 = G__90437;
chunk__90400_90433 = G__90438;
count__90401_90434 = G__90439;
i__90402_90435 = G__90440;
continue;
} else {
var temp__6738__auto___90441__$1 = cljs.core.seq.call(null,seq__90399_90432);
if(temp__6738__auto___90441__$1){
var seq__90399_90442__$1 = temp__6738__auto___90441__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__90399_90442__$1)){
var c__61810__auto___90443 = cljs.core.chunk_first.call(null,seq__90399_90442__$1);
var G__90444 = cljs.core.chunk_rest.call(null,seq__90399_90442__$1);
var G__90445 = c__61810__auto___90443;
var G__90446 = cljs.core.count.call(null,c__61810__auto___90443);
var G__90447 = (0);
seq__90399_90432 = G__90444;
chunk__90400_90433 = G__90445;
count__90401_90434 = G__90446;
i__90402_90435 = G__90447;
continue;
} else {
var req_90448 = cljs.core.first.call(null,seq__90399_90442__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_90448,prov);

var G__90449 = cljs.core.next.call(null,seq__90399_90442__$1);
var G__90450 = null;
var G__90451 = (0);
var G__90452 = (0);
seq__90399_90432 = G__90449;
chunk__90400_90433 = G__90450;
count__90401_90434 = G__90451;
i__90402_90435 = G__90452;
continue;
}
} else {
}
}
break;
}

var G__90453 = cljs.core.next.call(null,seq__90391__$1);
var G__90454 = null;
var G__90455 = (0);
var G__90456 = (0);
seq__90391 = G__90453;
chunk__90392 = G__90454;
count__90393 = G__90455;
i__90394 = G__90456;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__90461_90465 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__90462_90466 = null;
var count__90463_90467 = (0);
var i__90464_90468 = (0);
while(true){
if((i__90464_90468 < count__90463_90467)){
var ns_90469 = cljs.core._nth.call(null,chunk__90462_90466,i__90464_90468);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_90469);

var G__90470 = seq__90461_90465;
var G__90471 = chunk__90462_90466;
var G__90472 = count__90463_90467;
var G__90473 = (i__90464_90468 + (1));
seq__90461_90465 = G__90470;
chunk__90462_90466 = G__90471;
count__90463_90467 = G__90472;
i__90464_90468 = G__90473;
continue;
} else {
var temp__6738__auto___90474 = cljs.core.seq.call(null,seq__90461_90465);
if(temp__6738__auto___90474){
var seq__90461_90475__$1 = temp__6738__auto___90474;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__90461_90475__$1)){
var c__61810__auto___90476 = cljs.core.chunk_first.call(null,seq__90461_90475__$1);
var G__90477 = cljs.core.chunk_rest.call(null,seq__90461_90475__$1);
var G__90478 = c__61810__auto___90476;
var G__90479 = cljs.core.count.call(null,c__61810__auto___90476);
var G__90480 = (0);
seq__90461_90465 = G__90477;
chunk__90462_90466 = G__90478;
count__90463_90467 = G__90479;
i__90464_90468 = G__90480;
continue;
} else {
var ns_90481 = cljs.core.first.call(null,seq__90461_90475__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_90481);

var G__90482 = cljs.core.next.call(null,seq__90461_90475__$1);
var G__90483 = null;
var G__90484 = (0);
var G__90485 = (0);
seq__90461_90465 = G__90482;
chunk__90462_90466 = G__90483;
count__90463_90467 = G__90484;
i__90464_90468 = G__90485;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__60899__auto__ = goog.require__;
if(cljs.core.truth_(or__60899__auto__)){
return or__60899__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__90486__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__90486 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__90487__i = 0, G__90487__a = new Array(arguments.length -  0);
while (G__90487__i < G__90487__a.length) {G__90487__a[G__90487__i] = arguments[G__90487__i + 0]; ++G__90487__i;}
  args = new cljs.core.IndexedSeq(G__90487__a,0,null);
} 
return G__90486__delegate.call(this,args);};
G__90486.cljs$lang$maxFixedArity = 0;
G__90486.cljs$lang$applyTo = (function (arglist__90488){
var args = cljs.core.seq(arglist__90488);
return G__90486__delegate(args);
});
G__90486.cljs$core$IFn$_invoke$arity$variadic = G__90486__delegate;
return G__90486;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__90490 = cljs.core._EQ_;
var expr__90491 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__90490.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__90491))){
var path_parts = ((function (pred__90490,expr__90491){
return (function (p1__90489_SHARP_){
return clojure.string.split.call(null,p1__90489_SHARP_,/[\/\\]/);
});})(pred__90490,expr__90491))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__90490,expr__90491){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e90493){if((e90493 instanceof Error)){
var e = e90493;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e90493;

}
}})());
});
;})(path_parts,sep,root,pred__90490,expr__90491))
} else {
if(cljs.core.truth_(pred__90490.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__90491))){
return ((function (pred__90490,expr__90491){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__90490,expr__90491){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__90490,expr__90491))
);

return deferred.addErrback(((function (deferred,pred__90490,expr__90491){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__90490,expr__90491))
);
});
;})(pred__90490,expr__90491))
} else {
return ((function (pred__90490,expr__90491){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__90490,expr__90491))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__90494,callback){
var map__90497 = p__90494;
var map__90497__$1 = ((((!((map__90497 == null)))?((((map__90497.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__90497.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90497):map__90497);
var file_msg = map__90497__$1;
var request_url = cljs.core.get.call(null,map__90497__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Attempting to load "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__90497,map__90497__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Successfully loaded "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__90497,map__90497__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__69114__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__69114__auto__){
return (function (){
var f__69115__auto__ = (function (){var switch__69000__auto__ = ((function (c__69114__auto__){
return (function (state_90521){
var state_val_90522 = (state_90521[(1)]);
if((state_val_90522 === (7))){
var inst_90517 = (state_90521[(2)]);
var state_90521__$1 = state_90521;
var statearr_90523_90543 = state_90521__$1;
(statearr_90523_90543[(2)] = inst_90517);

(statearr_90523_90543[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90522 === (1))){
var state_90521__$1 = state_90521;
var statearr_90524_90544 = state_90521__$1;
(statearr_90524_90544[(2)] = null);

(statearr_90524_90544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90522 === (4))){
var inst_90501 = (state_90521[(7)]);
var inst_90501__$1 = (state_90521[(2)]);
var state_90521__$1 = (function (){var statearr_90525 = state_90521;
(statearr_90525[(7)] = inst_90501__$1);

return statearr_90525;
})();
if(cljs.core.truth_(inst_90501__$1)){
var statearr_90526_90545 = state_90521__$1;
(statearr_90526_90545[(1)] = (5));

} else {
var statearr_90527_90546 = state_90521__$1;
(statearr_90527_90546[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90522 === (6))){
var state_90521__$1 = state_90521;
var statearr_90528_90547 = state_90521__$1;
(statearr_90528_90547[(2)] = null);

(statearr_90528_90547[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90522 === (3))){
var inst_90519 = (state_90521[(2)]);
var state_90521__$1 = state_90521;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_90521__$1,inst_90519);
} else {
if((state_val_90522 === (2))){
var state_90521__$1 = state_90521;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_90521__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_90522 === (11))){
var inst_90513 = (state_90521[(2)]);
var state_90521__$1 = (function (){var statearr_90529 = state_90521;
(statearr_90529[(8)] = inst_90513);

return statearr_90529;
})();
var statearr_90530_90548 = state_90521__$1;
(statearr_90530_90548[(2)] = null);

(statearr_90530_90548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90522 === (9))){
var inst_90505 = (state_90521[(9)]);
var inst_90507 = (state_90521[(10)]);
var inst_90509 = inst_90507.call(null,inst_90505);
var state_90521__$1 = state_90521;
var statearr_90531_90549 = state_90521__$1;
(statearr_90531_90549[(2)] = inst_90509);

(statearr_90531_90549[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90522 === (5))){
var inst_90501 = (state_90521[(7)]);
var inst_90503 = figwheel.client.file_reloading.blocking_load.call(null,inst_90501);
var state_90521__$1 = state_90521;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_90521__$1,(8),inst_90503);
} else {
if((state_val_90522 === (10))){
var inst_90505 = (state_90521[(9)]);
var inst_90511 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_90505);
var state_90521__$1 = state_90521;
var statearr_90532_90550 = state_90521__$1;
(statearr_90532_90550[(2)] = inst_90511);

(statearr_90532_90550[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90522 === (8))){
var inst_90501 = (state_90521[(7)]);
var inst_90507 = (state_90521[(10)]);
var inst_90505 = (state_90521[(2)]);
var inst_90506 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_90507__$1 = cljs.core.get.call(null,inst_90506,inst_90501);
var state_90521__$1 = (function (){var statearr_90533 = state_90521;
(statearr_90533[(9)] = inst_90505);

(statearr_90533[(10)] = inst_90507__$1);

return statearr_90533;
})();
if(cljs.core.truth_(inst_90507__$1)){
var statearr_90534_90551 = state_90521__$1;
(statearr_90534_90551[(1)] = (9));

} else {
var statearr_90535_90552 = state_90521__$1;
(statearr_90535_90552[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__69114__auto__))
;
return ((function (switch__69000__auto__,c__69114__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__69001__auto__ = null;
var figwheel$client$file_reloading$state_machine__69001__auto____0 = (function (){
var statearr_90539 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_90539[(0)] = figwheel$client$file_reloading$state_machine__69001__auto__);

(statearr_90539[(1)] = (1));

return statearr_90539;
});
var figwheel$client$file_reloading$state_machine__69001__auto____1 = (function (state_90521){
while(true){
var ret_value__69002__auto__ = (function (){try{while(true){
var result__69003__auto__ = switch__69000__auto__.call(null,state_90521);
if(cljs.core.keyword_identical_QMARK_.call(null,result__69003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69003__auto__;
}
break;
}
}catch (e90540){if((e90540 instanceof Object)){
var ex__69004__auto__ = e90540;
var statearr_90541_90553 = state_90521;
(statearr_90541_90553[(5)] = ex__69004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90521);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e90540;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__69002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90554 = state_90521;
state_90521 = G__90554;
continue;
} else {
return ret_value__69002__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__69001__auto__ = function(state_90521){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__69001__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__69001__auto____1.call(this,state_90521);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__69001__auto____0;
figwheel$client$file_reloading$state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__69001__auto____1;
return figwheel$client$file_reloading$state_machine__69001__auto__;
})()
;})(switch__69000__auto__,c__69114__auto__))
})();
var state__69116__auto__ = (function (){var statearr_90542 = f__69115__auto__.call(null);
(statearr_90542[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__69114__auto__);

return statearr_90542;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__69116__auto__);
});})(c__69114__auto__))
);

return c__69114__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__90555,callback){
var map__90558 = p__90555;
var map__90558__$1 = ((((!((map__90558 == null)))?((((map__90558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__90558.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90558):map__90558);
var file_msg = map__90558__$1;
var namespace = cljs.core.get.call(null,map__90558__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__90558,map__90558__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__90558,map__90558__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__90560){
var map__90563 = p__90560;
var map__90563__$1 = ((((!((map__90563 == null)))?((((map__90563.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__90563.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90563):map__90563);
var file_msg = map__90563__$1;
var namespace = cljs.core.get.call(null,map__90563__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__60887__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__60887__auto__){
var or__60899__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__60899__auto__)){
return or__60899__auto__;
} else {
var or__60899__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__60899__auto____$1)){
return or__60899__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__60887__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__90565,callback){
var map__90568 = p__90565;
var map__90568__$1 = ((((!((map__90568 == null)))?((((map__90568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__90568.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90568):map__90568);
var file_msg = map__90568__$1;
var request_url = cljs.core.get.call(null,map__90568__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__90568__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not trying to load file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__69114__auto___90672 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__69114__auto___90672,out){
return (function (){
var f__69115__auto__ = (function (){var switch__69000__auto__ = ((function (c__69114__auto___90672,out){
return (function (state_90654){
var state_val_90655 = (state_90654[(1)]);
if((state_val_90655 === (1))){
var inst_90628 = cljs.core.seq.call(null,files);
var inst_90629 = cljs.core.first.call(null,inst_90628);
var inst_90630 = cljs.core.next.call(null,inst_90628);
var inst_90631 = files;
var state_90654__$1 = (function (){var statearr_90656 = state_90654;
(statearr_90656[(7)] = inst_90631);

(statearr_90656[(8)] = inst_90630);

(statearr_90656[(9)] = inst_90629);

return statearr_90656;
})();
var statearr_90657_90673 = state_90654__$1;
(statearr_90657_90673[(2)] = null);

(statearr_90657_90673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90655 === (2))){
var inst_90631 = (state_90654[(7)]);
var inst_90637 = (state_90654[(10)]);
var inst_90636 = cljs.core.seq.call(null,inst_90631);
var inst_90637__$1 = cljs.core.first.call(null,inst_90636);
var inst_90638 = cljs.core.next.call(null,inst_90636);
var inst_90639 = (inst_90637__$1 == null);
var inst_90640 = cljs.core.not.call(null,inst_90639);
var state_90654__$1 = (function (){var statearr_90658 = state_90654;
(statearr_90658[(10)] = inst_90637__$1);

(statearr_90658[(11)] = inst_90638);

return statearr_90658;
})();
if(inst_90640){
var statearr_90659_90674 = state_90654__$1;
(statearr_90659_90674[(1)] = (4));

} else {
var statearr_90660_90675 = state_90654__$1;
(statearr_90660_90675[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90655 === (3))){
var inst_90652 = (state_90654[(2)]);
var state_90654__$1 = state_90654;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_90654__$1,inst_90652);
} else {
if((state_val_90655 === (4))){
var inst_90637 = (state_90654[(10)]);
var inst_90642 = figwheel.client.file_reloading.reload_js_file.call(null,inst_90637);
var state_90654__$1 = state_90654;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_90654__$1,(7),inst_90642);
} else {
if((state_val_90655 === (5))){
var inst_90648 = cljs.core.async.close_BANG_.call(null,out);
var state_90654__$1 = state_90654;
var statearr_90661_90676 = state_90654__$1;
(statearr_90661_90676[(2)] = inst_90648);

(statearr_90661_90676[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90655 === (6))){
var inst_90650 = (state_90654[(2)]);
var state_90654__$1 = state_90654;
var statearr_90662_90677 = state_90654__$1;
(statearr_90662_90677[(2)] = inst_90650);

(statearr_90662_90677[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90655 === (7))){
var inst_90638 = (state_90654[(11)]);
var inst_90644 = (state_90654[(2)]);
var inst_90645 = cljs.core.async.put_BANG_.call(null,out,inst_90644);
var inst_90631 = inst_90638;
var state_90654__$1 = (function (){var statearr_90663 = state_90654;
(statearr_90663[(12)] = inst_90645);

(statearr_90663[(7)] = inst_90631);

return statearr_90663;
})();
var statearr_90664_90678 = state_90654__$1;
(statearr_90664_90678[(2)] = null);

(statearr_90664_90678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__69114__auto___90672,out))
;
return ((function (switch__69000__auto__,c__69114__auto___90672,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__69001__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__69001__auto____0 = (function (){
var statearr_90668 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_90668[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__69001__auto__);

(statearr_90668[(1)] = (1));

return statearr_90668;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__69001__auto____1 = (function (state_90654){
while(true){
var ret_value__69002__auto__ = (function (){try{while(true){
var result__69003__auto__ = switch__69000__auto__.call(null,state_90654);
if(cljs.core.keyword_identical_QMARK_.call(null,result__69003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69003__auto__;
}
break;
}
}catch (e90669){if((e90669 instanceof Object)){
var ex__69004__auto__ = e90669;
var statearr_90670_90679 = state_90654;
(statearr_90670_90679[(5)] = ex__69004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90654);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e90669;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__69002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90680 = state_90654;
state_90654 = G__90680;
continue;
} else {
return ret_value__69002__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__69001__auto__ = function(state_90654){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__69001__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__69001__auto____1.call(this,state_90654);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__69001__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__69001__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__69001__auto__;
})()
;})(switch__69000__auto__,c__69114__auto___90672,out))
})();
var state__69116__auto__ = (function (){var statearr_90671 = f__69115__auto__.call(null);
(statearr_90671[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__69114__auto___90672);

return statearr_90671;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__69116__auto__);
});})(c__69114__auto___90672,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__90681,opts){
var map__90685 = p__90681;
var map__90685__$1 = ((((!((map__90685 == null)))?((((map__90685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__90685.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90685):map__90685);
var eval_body = cljs.core.get.call(null,map__90685__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__90685__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__60887__auto__ = eval_body;
if(cljs.core.truth_(and__60887__auto__)){
return typeof eval_body === 'string';
} else {
return and__60887__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Evaling file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e90687){var e = e90687;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unable to evaluate "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__6736__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__90688_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__90688_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__6736__auto__)){
var file_msg = temp__6736__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__90697){
var vec__90698 = p__90697;
var k = cljs.core.nth.call(null,vec__90698,(0),null);
var v = cljs.core.nth.call(null,vec__90698,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__90701){
var vec__90702 = p__90701;
var k = cljs.core.nth.call(null,vec__90702,(0),null);
var v = cljs.core.nth.call(null,vec__90702,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__90708,p__90709){
var map__90957 = p__90708;
var map__90957__$1 = ((((!((map__90957 == null)))?((((map__90957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__90957.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90957):map__90957);
var opts = map__90957__$1;
var before_jsload = cljs.core.get.call(null,map__90957__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__90957__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__90957__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__90958 = p__90709;
var map__90958__$1 = ((((!((map__90958 == null)))?((((map__90958.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__90958.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90958):map__90958);
var msg = map__90958__$1;
var files = cljs.core.get.call(null,map__90958__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__90958__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__90958__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__69114__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__69114__auto__,map__90957,map__90957__$1,opts,before_jsload,on_jsload,reload_dependents,map__90958,map__90958__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__69115__auto__ = (function (){var switch__69000__auto__ = ((function (c__69114__auto__,map__90957,map__90957__$1,opts,before_jsload,on_jsload,reload_dependents,map__90958,map__90958__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_91112){
var state_val_91113 = (state_91112[(1)]);
if((state_val_91113 === (7))){
var inst_90973 = (state_91112[(7)]);
var inst_90974 = (state_91112[(8)]);
var inst_90972 = (state_91112[(9)]);
var inst_90975 = (state_91112[(10)]);
var inst_90980 = cljs.core._nth.call(null,inst_90973,inst_90975);
var inst_90981 = figwheel.client.file_reloading.eval_body.call(null,inst_90980,opts);
var inst_90982 = (inst_90975 + (1));
var tmp91114 = inst_90973;
var tmp91115 = inst_90974;
var tmp91116 = inst_90972;
var inst_90972__$1 = tmp91116;
var inst_90973__$1 = tmp91114;
var inst_90974__$1 = tmp91115;
var inst_90975__$1 = inst_90982;
var state_91112__$1 = (function (){var statearr_91117 = state_91112;
(statearr_91117[(7)] = inst_90973__$1);

(statearr_91117[(8)] = inst_90974__$1);

(statearr_91117[(9)] = inst_90972__$1);

(statearr_91117[(10)] = inst_90975__$1);

(statearr_91117[(11)] = inst_90981);

return statearr_91117;
})();
var statearr_91118_91204 = state_91112__$1;
(statearr_91118_91204[(2)] = null);

(statearr_91118_91204[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91113 === (20))){
var inst_91015 = (state_91112[(12)]);
var inst_91023 = figwheel.client.file_reloading.sort_files.call(null,inst_91015);
var state_91112__$1 = state_91112;
var statearr_91119_91205 = state_91112__$1;
(statearr_91119_91205[(2)] = inst_91023);

(statearr_91119_91205[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91113 === (27))){
var state_91112__$1 = state_91112;
var statearr_91120_91206 = state_91112__$1;
(statearr_91120_91206[(2)] = null);

(statearr_91120_91206[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91113 === (1))){
var inst_90964 = (state_91112[(13)]);
var inst_90961 = before_jsload.call(null,files);
var inst_90962 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_90963 = (function (){return ((function (inst_90964,inst_90961,inst_90962,state_val_91113,c__69114__auto__,map__90957,map__90957__$1,opts,before_jsload,on_jsload,reload_dependents,map__90958,map__90958__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__90705_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__90705_SHARP_);
});
;})(inst_90964,inst_90961,inst_90962,state_val_91113,c__69114__auto__,map__90957,map__90957__$1,opts,before_jsload,on_jsload,reload_dependents,map__90958,map__90958__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_90964__$1 = cljs.core.filter.call(null,inst_90963,files);
var inst_90965 = cljs.core.not_empty.call(null,inst_90964__$1);
var state_91112__$1 = (function (){var statearr_91121 = state_91112;
(statearr_91121[(13)] = inst_90964__$1);

(statearr_91121[(14)] = inst_90961);

(statearr_91121[(15)] = inst_90962);

return statearr_91121;
})();
if(cljs.core.truth_(inst_90965)){
var statearr_91122_91207 = state_91112__$1;
(statearr_91122_91207[(1)] = (2));

} else {
var statearr_91123_91208 = state_91112__$1;
(statearr_91123_91208[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91113 === (24))){
var state_91112__$1 = state_91112;
var statearr_91124_91209 = state_91112__$1;
(statearr_91124_91209[(2)] = null);

(statearr_91124_91209[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91113 === (39))){
var inst_91065 = (state_91112[(16)]);
var state_91112__$1 = state_91112;
var statearr_91125_91210 = state_91112__$1;
(statearr_91125_91210[(2)] = inst_91065);

(statearr_91125_91210[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91113 === (46))){
var inst_91107 = (state_91112[(2)]);
var state_91112__$1 = state_91112;
var statearr_91126_91211 = state_91112__$1;
(statearr_91126_91211[(2)] = inst_91107);

(statearr_91126_91211[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91113 === (4))){
var inst_91009 = (state_91112[(2)]);
var inst_91010 = cljs.core.List.EMPTY;
var inst_91011 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_91010);
var inst_91012 = (function (){return ((function (inst_91009,inst_91010,inst_91011,state_val_91113,c__69114__auto__,map__90957,map__90957__$1,opts,before_jsload,on_jsload,reload_dependents,map__90958,map__90958__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__90706_SHARP_){
var and__60887__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__90706_SHARP_);
if(cljs.core.truth_(and__60887__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__90706_SHARP_));
} else {
return and__60887__auto__;
}
});
;})(inst_91009,inst_91010,inst_91011,state_val_91113,c__69114__auto__,map__90957,map__90957__$1,opts,before_jsload,on_jsload,reload_dependents,map__90958,map__90958__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_91013 = cljs.core.filter.call(null,inst_91012,files);
var inst_91014 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_91015 = cljs.core.concat.call(null,inst_91013,inst_91014);
var state_91112__$1 = (function (){var statearr_91127 = state_91112;
(statearr_91127[(12)] = inst_91015);

(statearr_91127[(17)] = inst_91009);

(statearr_91127[(18)] = inst_91011);

return statearr_91127;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_91128_91212 = state_91112__$1;
(statearr_91128_91212[(1)] = (16));

} else {
var statearr_91129_91213 = state_91112__$1;
(statearr_91129_91213[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91113 === (15))){
var inst_90999 = (state_91112[(2)]);
var state_91112__$1 = state_91112;
var statearr_91130_91214 = state_91112__$1;
(statearr_91130_91214[(2)] = inst_90999);

(statearr_91130_91214[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91113 === (21))){
var inst_91025 = (state_91112[(19)]);
var inst_91025__$1 = (state_91112[(2)]);
var inst_91026 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_91025__$1);
var state_91112__$1 = (function (){var statearr_91131 = state_91112;
(statearr_91131[(19)] = inst_91025__$1);

return statearr_91131;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_91112__$1,(22),inst_91026);
} else {
if((state_val_91113 === (31))){
var inst_91110 = (state_91112[(2)]);
var state_91112__$1 = state_91112;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_91112__$1,inst_91110);
} else {
if((state_val_91113 === (32))){
var inst_91065 = (state_91112[(16)]);
var inst_91070 = inst_91065.cljs$lang$protocol_mask$partition0$;
var inst_91071 = (inst_91070 & (64));
var inst_91072 = inst_91065.cljs$core$ISeq$;
var inst_91073 = (cljs.core.PROTOCOL_SENTINEL === inst_91072);
var inst_91074 = (inst_91071) || (inst_91073);
var state_91112__$1 = state_91112;
if(cljs.core.truth_(inst_91074)){
var statearr_91132_91215 = state_91112__$1;
(statearr_91132_91215[(1)] = (35));

} else {
var statearr_91133_91216 = state_91112__$1;
(statearr_91133_91216[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91113 === (40))){
var inst_91087 = (state_91112[(20)]);
var inst_91086 = (state_91112[(2)]);
var inst_91087__$1 = cljs.core.get.call(null,inst_91086,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_91088 = cljs.core.get.call(null,inst_91086,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_91089 = cljs.core.not_empty.call(null,inst_91087__$1);
var state_91112__$1 = (function (){var statearr_91134 = state_91112;
(statearr_91134[(21)] = inst_91088);

(statearr_91134[(20)] = inst_91087__$1);

return statearr_91134;
})();
if(cljs.core.truth_(inst_91089)){
var statearr_91135_91217 = state_91112__$1;
(statearr_91135_91217[(1)] = (41));

} else {
var statearr_91136_91218 = state_91112__$1;
(statearr_91136_91218[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91113 === (33))){
var state_91112__$1 = state_91112;
var statearr_91137_91219 = state_91112__$1;
(statearr_91137_91219[(2)] = false);

(statearr_91137_91219[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91113 === (13))){
var inst_90985 = (state_91112[(22)]);
var inst_90989 = cljs.core.chunk_first.call(null,inst_90985);
var inst_90990 = cljs.core.chunk_rest.call(null,inst_90985);
var inst_90991 = cljs.core.count.call(null,inst_90989);
var inst_90972 = inst_90990;
var inst_90973 = inst_90989;
var inst_90974 = inst_90991;
var inst_90975 = (0);
var state_91112__$1 = (function (){var statearr_91138 = state_91112;
(statearr_91138[(7)] = inst_90973);

(statearr_91138[(8)] = inst_90974);

(statearr_91138[(9)] = inst_90972);

(statearr_91138[(10)] = inst_90975);

return statearr_91138;
})();
var statearr_91139_91220 = state_91112__$1;
(statearr_91139_91220[(2)] = null);

(statearr_91139_91220[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91113 === (22))){
var inst_91033 = (state_91112[(23)]);
var inst_91028 = (state_91112[(24)]);
var inst_91025 = (state_91112[(19)]);
var inst_91029 = (state_91112[(25)]);
var inst_91028__$1 = (state_91112[(2)]);
var inst_91029__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_91028__$1);
var inst_91030 = (function (){var all_files = inst_91025;
var res_SINGLEQUOTE_ = inst_91028__$1;
var res = inst_91029__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_91033,inst_91028,inst_91025,inst_91029,inst_91028__$1,inst_91029__$1,state_val_91113,c__69114__auto__,map__90957,map__90957__$1,opts,before_jsload,on_jsload,reload_dependents,map__90958,map__90958__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__90707_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__90707_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_91033,inst_91028,inst_91025,inst_91029,inst_91028__$1,inst_91029__$1,state_val_91113,c__69114__auto__,map__90957,map__90957__$1,opts,before_jsload,on_jsload,reload_dependents,map__90958,map__90958__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_91031 = cljs.core.filter.call(null,inst_91030,inst_91028__$1);
var inst_91032 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_91033__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_91032);
var inst_91034 = cljs.core.not_empty.call(null,inst_91033__$1);
var state_91112__$1 = (function (){var statearr_91140 = state_91112;
(statearr_91140[(23)] = inst_91033__$1);

(statearr_91140[(26)] = inst_91031);

(statearr_91140[(24)] = inst_91028__$1);

(statearr_91140[(25)] = inst_91029__$1);

return statearr_91140;
})();
if(cljs.core.truth_(inst_91034)){
var statearr_91141_91221 = state_91112__$1;
(statearr_91141_91221[(1)] = (23));

} else {
var statearr_91142_91222 = state_91112__$1;
(statearr_91142_91222[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91113 === (36))){
var state_91112__$1 = state_91112;
var statearr_91143_91223 = state_91112__$1;
(statearr_91143_91223[(2)] = false);

(statearr_91143_91223[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91113 === (41))){
var inst_91087 = (state_91112[(20)]);
var inst_91091 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_91092 = cljs.core.map.call(null,inst_91091,inst_91087);
var inst_91093 = cljs.core.pr_str.call(null,inst_91092);
var inst_91094 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("figwheel-no-load meta-data: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_91093)].join('');
var inst_91095 = figwheel.client.utils.log.call(null,inst_91094);
var state_91112__$1 = state_91112;
var statearr_91144_91224 = state_91112__$1;
(statearr_91144_91224[(2)] = inst_91095);

(statearr_91144_91224[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91113 === (43))){
var inst_91088 = (state_91112[(21)]);
var inst_91098 = (state_91112[(2)]);
var inst_91099 = cljs.core.not_empty.call(null,inst_91088);
var state_91112__$1 = (function (){var statearr_91145 = state_91112;
(statearr_91145[(27)] = inst_91098);

return statearr_91145;
})();
if(cljs.core.truth_(inst_91099)){
var statearr_91146_91225 = state_91112__$1;
(statearr_91146_91225[(1)] = (44));

} else {
var statearr_91147_91226 = state_91112__$1;
(statearr_91147_91226[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91113 === (29))){
var inst_91033 = (state_91112[(23)]);
var inst_91031 = (state_91112[(26)]);
var inst_91028 = (state_91112[(24)]);
var inst_91025 = (state_91112[(19)]);
var inst_91029 = (state_91112[(25)]);
var inst_91065 = (state_91112[(16)]);
var inst_91061 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_91064 = (function (){var all_files = inst_91025;
var res_SINGLEQUOTE_ = inst_91028;
var res = inst_91029;
var files_not_loaded = inst_91031;
var dependencies_that_loaded = inst_91033;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_91033,inst_91031,inst_91028,inst_91025,inst_91029,inst_91065,inst_91061,state_val_91113,c__69114__auto__,map__90957,map__90957__$1,opts,before_jsload,on_jsload,reload_dependents,map__90958,map__90958__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__91063){
var map__91148 = p__91063;
var map__91148__$1 = ((((!((map__91148 == null)))?((((map__91148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91148.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__91148):map__91148);
var namespace = cljs.core.get.call(null,map__91148__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_91033,inst_91031,inst_91028,inst_91025,inst_91029,inst_91065,inst_91061,state_val_91113,c__69114__auto__,map__90957,map__90957__$1,opts,before_jsload,on_jsload,reload_dependents,map__90958,map__90958__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_91065__$1 = cljs.core.group_by.call(null,inst_91064,inst_91031);
var inst_91067 = (inst_91065__$1 == null);
var inst_91068 = cljs.core.not.call(null,inst_91067);
var state_91112__$1 = (function (){var statearr_91150 = state_91112;
(statearr_91150[(16)] = inst_91065__$1);

(statearr_91150[(28)] = inst_91061);

return statearr_91150;
})();
if(inst_91068){
var statearr_91151_91227 = state_91112__$1;
(statearr_91151_91227[(1)] = (32));

} else {
var statearr_91152_91228 = state_91112__$1;
(statearr_91152_91228[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91113 === (44))){
var inst_91088 = (state_91112[(21)]);
var inst_91101 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_91088);
var inst_91102 = cljs.core.pr_str.call(null,inst_91101);
var inst_91103 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("not required: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_91102)].join('');
var inst_91104 = figwheel.client.utils.log.call(null,inst_91103);
var state_91112__$1 = state_91112;
var statearr_91153_91229 = state_91112__$1;
(statearr_91153_91229[(2)] = inst_91104);

(statearr_91153_91229[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91113 === (6))){
var inst_91006 = (state_91112[(2)]);
var state_91112__$1 = state_91112;
var statearr_91154_91230 = state_91112__$1;
(statearr_91154_91230[(2)] = inst_91006);

(statearr_91154_91230[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91113 === (28))){
var inst_91031 = (state_91112[(26)]);
var inst_91058 = (state_91112[(2)]);
var inst_91059 = cljs.core.not_empty.call(null,inst_91031);
var state_91112__$1 = (function (){var statearr_91155 = state_91112;
(statearr_91155[(29)] = inst_91058);

return statearr_91155;
})();
if(cljs.core.truth_(inst_91059)){
var statearr_91156_91231 = state_91112__$1;
(statearr_91156_91231[(1)] = (29));

} else {
var statearr_91157_91232 = state_91112__$1;
(statearr_91157_91232[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91113 === (25))){
var inst_91029 = (state_91112[(25)]);
var inst_91045 = (state_91112[(2)]);
var inst_91046 = cljs.core.not_empty.call(null,inst_91029);
var state_91112__$1 = (function (){var statearr_91158 = state_91112;
(statearr_91158[(30)] = inst_91045);

return statearr_91158;
})();
if(cljs.core.truth_(inst_91046)){
var statearr_91159_91233 = state_91112__$1;
(statearr_91159_91233[(1)] = (26));

} else {
var statearr_91160_91234 = state_91112__$1;
(statearr_91160_91234[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91113 === (34))){
var inst_91081 = (state_91112[(2)]);
var state_91112__$1 = state_91112;
if(cljs.core.truth_(inst_91081)){
var statearr_91161_91235 = state_91112__$1;
(statearr_91161_91235[(1)] = (38));

} else {
var statearr_91162_91236 = state_91112__$1;
(statearr_91162_91236[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91113 === (17))){
var state_91112__$1 = state_91112;
var statearr_91163_91237 = state_91112__$1;
(statearr_91163_91237[(2)] = recompile_dependents);

(statearr_91163_91237[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91113 === (3))){
var state_91112__$1 = state_91112;
var statearr_91164_91238 = state_91112__$1;
(statearr_91164_91238[(2)] = null);

(statearr_91164_91238[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91113 === (12))){
var inst_91002 = (state_91112[(2)]);
var state_91112__$1 = state_91112;
var statearr_91165_91239 = state_91112__$1;
(statearr_91165_91239[(2)] = inst_91002);

(statearr_91165_91239[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91113 === (2))){
var inst_90964 = (state_91112[(13)]);
var inst_90971 = cljs.core.seq.call(null,inst_90964);
var inst_90972 = inst_90971;
var inst_90973 = null;
var inst_90974 = (0);
var inst_90975 = (0);
var state_91112__$1 = (function (){var statearr_91166 = state_91112;
(statearr_91166[(7)] = inst_90973);

(statearr_91166[(8)] = inst_90974);

(statearr_91166[(9)] = inst_90972);

(statearr_91166[(10)] = inst_90975);

return statearr_91166;
})();
var statearr_91167_91240 = state_91112__$1;
(statearr_91167_91240[(2)] = null);

(statearr_91167_91240[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91113 === (23))){
var inst_91033 = (state_91112[(23)]);
var inst_91031 = (state_91112[(26)]);
var inst_91028 = (state_91112[(24)]);
var inst_91025 = (state_91112[(19)]);
var inst_91029 = (state_91112[(25)]);
var inst_91036 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_91038 = (function (){var all_files = inst_91025;
var res_SINGLEQUOTE_ = inst_91028;
var res = inst_91029;
var files_not_loaded = inst_91031;
var dependencies_that_loaded = inst_91033;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_91033,inst_91031,inst_91028,inst_91025,inst_91029,inst_91036,state_val_91113,c__69114__auto__,map__90957,map__90957__$1,opts,before_jsload,on_jsload,reload_dependents,map__90958,map__90958__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__91037){
var map__91168 = p__91037;
var map__91168__$1 = ((((!((map__91168 == null)))?((((map__91168.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91168.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__91168):map__91168);
var request_url = cljs.core.get.call(null,map__91168__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_91033,inst_91031,inst_91028,inst_91025,inst_91029,inst_91036,state_val_91113,c__69114__auto__,map__90957,map__90957__$1,opts,before_jsload,on_jsload,reload_dependents,map__90958,map__90958__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_91039 = cljs.core.reverse.call(null,inst_91033);
var inst_91040 = cljs.core.map.call(null,inst_91038,inst_91039);
var inst_91041 = cljs.core.pr_str.call(null,inst_91040);
var inst_91042 = figwheel.client.utils.log.call(null,inst_91041);
var state_91112__$1 = (function (){var statearr_91170 = state_91112;
(statearr_91170[(31)] = inst_91036);

return statearr_91170;
})();
var statearr_91171_91241 = state_91112__$1;
(statearr_91171_91241[(2)] = inst_91042);

(statearr_91171_91241[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91113 === (35))){
var state_91112__$1 = state_91112;
var statearr_91172_91242 = state_91112__$1;
(statearr_91172_91242[(2)] = true);

(statearr_91172_91242[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91113 === (19))){
var inst_91015 = (state_91112[(12)]);
var inst_91021 = figwheel.client.file_reloading.expand_files.call(null,inst_91015);
var state_91112__$1 = state_91112;
var statearr_91173_91243 = state_91112__$1;
(statearr_91173_91243[(2)] = inst_91021);

(statearr_91173_91243[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91113 === (11))){
var state_91112__$1 = state_91112;
var statearr_91174_91244 = state_91112__$1;
(statearr_91174_91244[(2)] = null);

(statearr_91174_91244[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91113 === (9))){
var inst_91004 = (state_91112[(2)]);
var state_91112__$1 = state_91112;
var statearr_91175_91245 = state_91112__$1;
(statearr_91175_91245[(2)] = inst_91004);

(statearr_91175_91245[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91113 === (5))){
var inst_90974 = (state_91112[(8)]);
var inst_90975 = (state_91112[(10)]);
var inst_90977 = (inst_90975 < inst_90974);
var inst_90978 = inst_90977;
var state_91112__$1 = state_91112;
if(cljs.core.truth_(inst_90978)){
var statearr_91176_91246 = state_91112__$1;
(statearr_91176_91246[(1)] = (7));

} else {
var statearr_91177_91247 = state_91112__$1;
(statearr_91177_91247[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91113 === (14))){
var inst_90985 = (state_91112[(22)]);
var inst_90994 = cljs.core.first.call(null,inst_90985);
var inst_90995 = figwheel.client.file_reloading.eval_body.call(null,inst_90994,opts);
var inst_90996 = cljs.core.next.call(null,inst_90985);
var inst_90972 = inst_90996;
var inst_90973 = null;
var inst_90974 = (0);
var inst_90975 = (0);
var state_91112__$1 = (function (){var statearr_91178 = state_91112;
(statearr_91178[(7)] = inst_90973);

(statearr_91178[(32)] = inst_90995);

(statearr_91178[(8)] = inst_90974);

(statearr_91178[(9)] = inst_90972);

(statearr_91178[(10)] = inst_90975);

return statearr_91178;
})();
var statearr_91179_91248 = state_91112__$1;
(statearr_91179_91248[(2)] = null);

(statearr_91179_91248[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91113 === (45))){
var state_91112__$1 = state_91112;
var statearr_91180_91249 = state_91112__$1;
(statearr_91180_91249[(2)] = null);

(statearr_91180_91249[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91113 === (26))){
var inst_91033 = (state_91112[(23)]);
var inst_91031 = (state_91112[(26)]);
var inst_91028 = (state_91112[(24)]);
var inst_91025 = (state_91112[(19)]);
var inst_91029 = (state_91112[(25)]);
var inst_91048 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_91050 = (function (){var all_files = inst_91025;
var res_SINGLEQUOTE_ = inst_91028;
var res = inst_91029;
var files_not_loaded = inst_91031;
var dependencies_that_loaded = inst_91033;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_91033,inst_91031,inst_91028,inst_91025,inst_91029,inst_91048,state_val_91113,c__69114__auto__,map__90957,map__90957__$1,opts,before_jsload,on_jsload,reload_dependents,map__90958,map__90958__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__91049){
var map__91181 = p__91049;
var map__91181__$1 = ((((!((map__91181 == null)))?((((map__91181.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91181.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__91181):map__91181);
var namespace = cljs.core.get.call(null,map__91181__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__91181__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_91033,inst_91031,inst_91028,inst_91025,inst_91029,inst_91048,state_val_91113,c__69114__auto__,map__90957,map__90957__$1,opts,before_jsload,on_jsload,reload_dependents,map__90958,map__90958__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_91051 = cljs.core.map.call(null,inst_91050,inst_91029);
var inst_91052 = cljs.core.pr_str.call(null,inst_91051);
var inst_91053 = figwheel.client.utils.log.call(null,inst_91052);
var inst_91054 = (function (){var all_files = inst_91025;
var res_SINGLEQUOTE_ = inst_91028;
var res = inst_91029;
var files_not_loaded = inst_91031;
var dependencies_that_loaded = inst_91033;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_91033,inst_91031,inst_91028,inst_91025,inst_91029,inst_91048,inst_91050,inst_91051,inst_91052,inst_91053,state_val_91113,c__69114__auto__,map__90957,map__90957__$1,opts,before_jsload,on_jsload,reload_dependents,map__90958,map__90958__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_91033,inst_91031,inst_91028,inst_91025,inst_91029,inst_91048,inst_91050,inst_91051,inst_91052,inst_91053,state_val_91113,c__69114__auto__,map__90957,map__90957__$1,opts,before_jsload,on_jsload,reload_dependents,map__90958,map__90958__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_91055 = setTimeout(inst_91054,(10));
var state_91112__$1 = (function (){var statearr_91183 = state_91112;
(statearr_91183[(33)] = inst_91048);

(statearr_91183[(34)] = inst_91053);

return statearr_91183;
})();
var statearr_91184_91250 = state_91112__$1;
(statearr_91184_91250[(2)] = inst_91055);

(statearr_91184_91250[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91113 === (16))){
var state_91112__$1 = state_91112;
var statearr_91185_91251 = state_91112__$1;
(statearr_91185_91251[(2)] = reload_dependents);

(statearr_91185_91251[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91113 === (38))){
var inst_91065 = (state_91112[(16)]);
var inst_91083 = cljs.core.apply.call(null,cljs.core.hash_map,inst_91065);
var state_91112__$1 = state_91112;
var statearr_91186_91252 = state_91112__$1;
(statearr_91186_91252[(2)] = inst_91083);

(statearr_91186_91252[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91113 === (30))){
var state_91112__$1 = state_91112;
var statearr_91187_91253 = state_91112__$1;
(statearr_91187_91253[(2)] = null);

(statearr_91187_91253[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91113 === (10))){
var inst_90985 = (state_91112[(22)]);
var inst_90987 = cljs.core.chunked_seq_QMARK_.call(null,inst_90985);
var state_91112__$1 = state_91112;
if(inst_90987){
var statearr_91188_91254 = state_91112__$1;
(statearr_91188_91254[(1)] = (13));

} else {
var statearr_91189_91255 = state_91112__$1;
(statearr_91189_91255[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91113 === (18))){
var inst_91019 = (state_91112[(2)]);
var state_91112__$1 = state_91112;
if(cljs.core.truth_(inst_91019)){
var statearr_91190_91256 = state_91112__$1;
(statearr_91190_91256[(1)] = (19));

} else {
var statearr_91191_91257 = state_91112__$1;
(statearr_91191_91257[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91113 === (42))){
var state_91112__$1 = state_91112;
var statearr_91192_91258 = state_91112__$1;
(statearr_91192_91258[(2)] = null);

(statearr_91192_91258[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91113 === (37))){
var inst_91078 = (state_91112[(2)]);
var state_91112__$1 = state_91112;
var statearr_91193_91259 = state_91112__$1;
(statearr_91193_91259[(2)] = inst_91078);

(statearr_91193_91259[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91113 === (8))){
var inst_90985 = (state_91112[(22)]);
var inst_90972 = (state_91112[(9)]);
var inst_90985__$1 = cljs.core.seq.call(null,inst_90972);
var state_91112__$1 = (function (){var statearr_91194 = state_91112;
(statearr_91194[(22)] = inst_90985__$1);

return statearr_91194;
})();
if(inst_90985__$1){
var statearr_91195_91260 = state_91112__$1;
(statearr_91195_91260[(1)] = (10));

} else {
var statearr_91196_91261 = state_91112__$1;
(statearr_91196_91261[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__69114__auto__,map__90957,map__90957__$1,opts,before_jsload,on_jsload,reload_dependents,map__90958,map__90958__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__69000__auto__,c__69114__auto__,map__90957,map__90957__$1,opts,before_jsload,on_jsload,reload_dependents,map__90958,map__90958__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__69001__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__69001__auto____0 = (function (){
var statearr_91200 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_91200[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__69001__auto__);

(statearr_91200[(1)] = (1));

return statearr_91200;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__69001__auto____1 = (function (state_91112){
while(true){
var ret_value__69002__auto__ = (function (){try{while(true){
var result__69003__auto__ = switch__69000__auto__.call(null,state_91112);
if(cljs.core.keyword_identical_QMARK_.call(null,result__69003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69003__auto__;
}
break;
}
}catch (e91201){if((e91201 instanceof Object)){
var ex__69004__auto__ = e91201;
var statearr_91202_91262 = state_91112;
(statearr_91202_91262[(5)] = ex__69004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91112);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e91201;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__69002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__91263 = state_91112;
state_91112 = G__91263;
continue;
} else {
return ret_value__69002__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__69001__auto__ = function(state_91112){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__69001__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__69001__auto____1.call(this,state_91112);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__69001__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__69001__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__69001__auto__;
})()
;})(switch__69000__auto__,c__69114__auto__,map__90957,map__90957__$1,opts,before_jsload,on_jsload,reload_dependents,map__90958,map__90958__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__69116__auto__ = (function (){var statearr_91203 = f__69115__auto__.call(null);
(statearr_91203[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__69114__auto__);

return statearr_91203;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__69116__auto__);
});})(c__69114__auto__,map__90957,map__90957__$1,opts,before_jsload,on_jsload,reload_dependents,map__90958,map__90958__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__69114__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),cljs.core.str.cljs$core$IFn$_invoke$arity$1("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__91266,link){
var map__91269 = p__91266;
var map__91269__$1 = ((((!((map__91269 == null)))?((((map__91269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91269.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__91269):map__91269);
var file = cljs.core.get.call(null,map__91269__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6738__auto__ = link.href;
if(cljs.core.truth_(temp__6738__auto__)){
var link_href = temp__6738__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__6738__auto__,map__91269,map__91269__$1,file){
return (function (p1__91264_SHARP_,p2__91265_SHARP_){
if(cljs.core._EQ_.call(null,p1__91264_SHARP_,p2__91265_SHARP_)){
return p1__91264_SHARP_;
} else {
return false;
}
});})(link_href,temp__6738__auto__,map__91269,map__91269__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__6738__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__91275){
var map__91276 = p__91275;
var map__91276__$1 = ((((!((map__91276 == null)))?((((map__91276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91276.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__91276):map__91276);
var match_length = cljs.core.get.call(null,map__91276__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__91276__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__91271_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__91271_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__6738__auto__)){
var res = temp__6738__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args91278 = [];
var len__62120__auto___91281 = arguments.length;
var i__62121__auto___91282 = (0);
while(true){
if((i__62121__auto___91282 < len__62120__auto___91281)){
args91278.push((arguments[i__62121__auto___91282]));

var G__91283 = (i__62121__auto___91282 + (1));
i__62121__auto___91282 = G__91283;
continue;
} else {
}
break;
}

var G__91280 = args91278.length;
switch (G__91280) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args91278.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__91285_SHARP_,p2__91286_SHARP_){
return cljs.core.assoc.call(null,p1__91285_SHARP_,cljs.core.get.call(null,p2__91286_SHARP_,key),p2__91286_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__91287){
var map__91290 = p__91287;
var map__91290__$1 = ((((!((map__91290 == null)))?((((map__91290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91290.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__91290):map__91290);
var f_data = map__91290__$1;
var file = cljs.core.get.call(null,map__91290__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6738__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__6738__auto__)){
var link = temp__6738__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__91292,p__91293){
var map__91302 = p__91292;
var map__91302__$1 = ((((!((map__91302 == null)))?((((map__91302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91302.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__91302):map__91302);
var opts = map__91302__$1;
var on_cssload = cljs.core.get.call(null,map__91302__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__91303 = p__91293;
var map__91303__$1 = ((((!((map__91303 == null)))?((((map__91303.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91303.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__91303):map__91303);
var files_msg = map__91303__$1;
var files = cljs.core.get.call(null,map__91303__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__91306_91310 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__91307_91311 = null;
var count__91308_91312 = (0);
var i__91309_91313 = (0);
while(true){
if((i__91309_91313 < count__91308_91312)){
var f_91314 = cljs.core._nth.call(null,chunk__91307_91311,i__91309_91313);
figwheel.client.file_reloading.reload_css_file.call(null,f_91314);

var G__91315 = seq__91306_91310;
var G__91316 = chunk__91307_91311;
var G__91317 = count__91308_91312;
var G__91318 = (i__91309_91313 + (1));
seq__91306_91310 = G__91315;
chunk__91307_91311 = G__91316;
count__91308_91312 = G__91317;
i__91309_91313 = G__91318;
continue;
} else {
var temp__6738__auto___91319 = cljs.core.seq.call(null,seq__91306_91310);
if(temp__6738__auto___91319){
var seq__91306_91320__$1 = temp__6738__auto___91319;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__91306_91320__$1)){
var c__61810__auto___91321 = cljs.core.chunk_first.call(null,seq__91306_91320__$1);
var G__91322 = cljs.core.chunk_rest.call(null,seq__91306_91320__$1);
var G__91323 = c__61810__auto___91321;
var G__91324 = cljs.core.count.call(null,c__61810__auto___91321);
var G__91325 = (0);
seq__91306_91310 = G__91322;
chunk__91307_91311 = G__91323;
count__91308_91312 = G__91324;
i__91309_91313 = G__91325;
continue;
} else {
var f_91326 = cljs.core.first.call(null,seq__91306_91320__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_91326);

var G__91327 = cljs.core.next.call(null,seq__91306_91320__$1);
var G__91328 = null;
var G__91329 = (0);
var G__91330 = (0);
seq__91306_91310 = G__91327;
chunk__91307_91311 = G__91328;
count__91308_91312 = G__91329;
i__91309_91313 = G__91330;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__91302,map__91302__$1,opts,on_cssload,map__91303,map__91303__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__91302,map__91302__$1,opts,on_cssload,map__91303,map__91303__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1506064216382