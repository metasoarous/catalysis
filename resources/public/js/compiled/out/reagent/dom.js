// Compiled by ClojureScript 1.9.542 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('cljsjs.react.dom');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
goog.require('reagent.debug');
goog.require('reagent.interop');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(!((reagent.dom.imported == null))){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__60899__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__60899__auto__)){
return or__60899__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_63982 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_63982){
return (function (){
var _STAR_always_update_STAR_63983 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(!((callback == null))){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_63983;
}});})(_STAR_always_update_STAR_63982))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_63982;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args63984 = [];
var len__62120__auto___63987 = arguments.length;
var i__62121__auto___63988 = (0);
while(true){
if((i__62121__auto___63988 < len__62120__auto___63987)){
args63984.push((arguments[i__62121__auto___63988]));

var G__63989 = (i__62121__auto___63988 + (1));
i__62121__auto___63988 = G__63989;
continue;
} else {
}
break;
}

var G__63986 = args63984.length;
switch (G__63986) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args63984.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module.call(null)["findDOMNode"])(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__63995_63999 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__63996_64000 = null;
var count__63997_64001 = (0);
var i__63998_64002 = (0);
while(true){
if((i__63998_64002 < count__63997_64001)){
var v_64003 = cljs.core._nth.call(null,chunk__63996_64000,i__63998_64002);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_64003);

var G__64004 = seq__63995_63999;
var G__64005 = chunk__63996_64000;
var G__64006 = count__63997_64001;
var G__64007 = (i__63998_64002 + (1));
seq__63995_63999 = G__64004;
chunk__63996_64000 = G__64005;
count__63997_64001 = G__64006;
i__63998_64002 = G__64007;
continue;
} else {
var temp__6738__auto___64008 = cljs.core.seq.call(null,seq__63995_63999);
if(temp__6738__auto___64008){
var seq__63995_64009__$1 = temp__6738__auto___64008;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__63995_64009__$1)){
var c__61810__auto___64010 = cljs.core.chunk_first.call(null,seq__63995_64009__$1);
var G__64011 = cljs.core.chunk_rest.call(null,seq__63995_64009__$1);
var G__64012 = c__61810__auto___64010;
var G__64013 = cljs.core.count.call(null,c__61810__auto___64010);
var G__64014 = (0);
seq__63995_63999 = G__64011;
chunk__63996_64000 = G__64012;
count__63997_64001 = G__64013;
i__63998_64002 = G__64014;
continue;
} else {
var v_64015 = cljs.core.first.call(null,seq__63995_64009__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_64015);

var G__64016 = cljs.core.next.call(null,seq__63995_64009__$1);
var G__64017 = null;
var G__64018 = (0);
var G__64019 = (0);
seq__63995_63999 = G__64016;
chunk__63996_64000 = G__64017;
count__63997_64001 = G__64018;
i__63998_64002 = G__64019;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map?rel=1506064171565