// Compiled by ClojureScript 1.9.542 {}
goog.provide('onyx.lifecycles.lifecycle_compile');
goog.require('cljs.core');
goog.require('taoensso.timbre');
goog.require('onyx.static$.util');
onyx.lifecycles.lifecycle_compile.resolve_lifecycle_calls = (function onyx$lifecycles$lifecycle_compile$resolve_lifecycle_calls(calls){
return onyx.static$.util.resolve_dynamic.call(null,calls);
});
onyx.lifecycles.lifecycle_compile.select_applicable_lifecycles = (function onyx$lifecycles$lifecycle_compile$select_applicable_lifecycles(lifecycles,task_name){
return cljs.core.filter.call(null,(function (p1__63398_SHARP_){
return (cljs.core._EQ_.call(null,new cljs.core.Keyword("lifecycle","task","lifecycle/task",-1174935319).cljs$core$IFn$_invoke$arity$1(p1__63398_SHARP_),new cljs.core.Keyword(null,"all","all",892129742))) || (cljs.core._EQ_.call(null,new cljs.core.Keyword("lifecycle","task","lifecycle/task",-1174935319).cljs$core$IFn$_invoke$arity$1(p1__63398_SHARP_),task_name));
}),lifecycles);
});
onyx.lifecycles.lifecycle_compile.resolve_lifecycle_functions = (function onyx$lifecycles$lifecycle_compile$resolve_lifecycle_functions(lifecycles,phase,invoker){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (lifecycle){
var calls_map = onyx.lifecycles.lifecycle_compile.resolve_lifecycle_calls.call(null,new cljs.core.Keyword("lifecycle","calls","lifecycle/calls",-199124898).cljs$core$IFn$_invoke$arity$1(lifecycle));
var temp__6738__auto__ = cljs.core.get.call(null,calls_map,phase);
if(cljs.core.truth_(temp__6738__auto__)){
var g = temp__6738__auto__;
return invoker.call(null,lifecycle,g);
} else {
return null;
}
}),lifecycles));
});
onyx.lifecycles.lifecycle_compile.compile_start_task_functions = (function onyx$lifecycles$lifecycle_compile$compile_start_task_functions(p__63399){
var map__63402 = p__63399;
var map__63402__$1 = ((((!((map__63402 == null)))?((((map__63402.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63402.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63402):map__63402);
var lifecycles = cljs.core.get.call(null,map__63402__$1,new cljs.core.Keyword("onyx.core","lifecycles","onyx.core/lifecycles",150880888));
var task = cljs.core.get.call(null,map__63402__$1,new cljs.core.Keyword("onyx.core","task","onyx.core/task",1756945878));
var matched = onyx.lifecycles.lifecycle_compile.select_applicable_lifecycles.call(null,lifecycles,task);
var fs = onyx.lifecycles.lifecycle_compile.resolve_lifecycle_functions.call(null,matched,new cljs.core.Keyword("lifecycle","start-task?","lifecycle/start-task?",1478637931),((function (matched,map__63402,map__63402__$1,lifecycles,task){
return (function (lifecycle,f){
return ((function (matched,map__63402,map__63402__$1,lifecycles,task){
return (function (event){
return f.call(null,event,lifecycle);
});
;})(matched,map__63402,map__63402__$1,lifecycles,task))
});})(matched,map__63402,map__63402__$1,lifecycles,task))
);
return ((function (matched,fs,map__63402,map__63402__$1,lifecycles,task){
return (function (event){
if(cljs.core.seq.call(null,fs)){
return cljs.core.every_QMARK_.call(null,cljs.core.true_QMARK_,cljs.core.apply.call(null,cljs.core.juxt,fs).call(null,event));
} else {
return true;
}
});
;})(matched,fs,map__63402,map__63402__$1,lifecycles,task))
});
onyx.lifecycles.lifecycle_compile.compile_lifecycle_handle_exception_functions = (function onyx$lifecycles$lifecycle_compile$compile_lifecycle_handle_exception_functions(p__63404){
var map__63407 = p__63404;
var map__63407__$1 = ((((!((map__63407 == null)))?((((map__63407.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63407.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63407):map__63407);
var lifecycles = cljs.core.get.call(null,map__63407__$1,new cljs.core.Keyword("onyx.core","lifecycles","onyx.core/lifecycles",150880888));
var task = cljs.core.get.call(null,map__63407__$1,new cljs.core.Keyword("onyx.core","task","onyx.core/task",1756945878));
var matched = onyx.lifecycles.lifecycle_compile.select_applicable_lifecycles.call(null,lifecycles,task);
var fs = onyx.lifecycles.lifecycle_compile.resolve_lifecycle_functions.call(null,matched,new cljs.core.Keyword("lifecycle","handle-exception","lifecycle/handle-exception",1160673407),((function (matched,map__63407,map__63407__$1,lifecycles,task){
return (function (lifecycle,f){
return ((function (matched,map__63407,map__63407__$1,lifecycles,task){
return (function (event,phase,e){
return f.call(null,event,lifecycle,phase,e);
});
;})(matched,map__63407,map__63407__$1,lifecycles,task))
});})(matched,map__63407,map__63407__$1,lifecycles,task))
);
return ((function (matched,fs,map__63407,map__63407__$1,lifecycles,task){
return (function (event,phase,e){
if(cljs.core.seq.call(null,fs)){
var results = cljs.core.apply.call(null,cljs.core.juxt,fs).call(null,event,phase,e);
var or__61290__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_,new cljs.core.Keyword(null,"defer","defer",-40276405)),results));
if(cljs.core.truth_(or__61290__auto__)){
return or__61290__auto__;
} else {
return new cljs.core.Keyword(null,"kill","kill",-12335575);
}
} else {
return new cljs.core.Keyword(null,"kill","kill",-12335575);
}
});
;})(matched,fs,map__63407,map__63407__$1,lifecycles,task))
});
onyx.lifecycles.lifecycle_compile.compile_lifecycle_functions = (function onyx$lifecycles$lifecycle_compile$compile_lifecycle_functions(p__63409,kw){
var map__63412 = p__63409;
var map__63412__$1 = ((((!((map__63412 == null)))?((((map__63412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63412.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63412):map__63412);
var lifecycles = cljs.core.get.call(null,map__63412__$1,new cljs.core.Keyword("onyx.core","lifecycles","onyx.core/lifecycles",150880888));
var task = cljs.core.get.call(null,map__63412__$1,new cljs.core.Keyword("onyx.core","task","onyx.core/task",1756945878));
var matched = onyx.lifecycles.lifecycle_compile.select_applicable_lifecycles.call(null,lifecycles,task);
if(!(cljs.core.empty_QMARK_.call(null,matched))){
return cljs.core.reduce.call(null,((function (matched,map__63412,map__63412__$1,lifecycles,task){
return (function (f,lifecycle){
var calls_map = onyx.lifecycles.lifecycle_compile.resolve_lifecycle_calls.call(null,new cljs.core.Keyword("lifecycle","calls","lifecycle/calls",-199124898).cljs$core$IFn$_invoke$arity$1(lifecycle));
var temp__6736__auto__ = cljs.core.get.call(null,calls_map,kw);
if(cljs.core.truth_(temp__6736__auto__)){
var g = temp__6736__auto__;
return cljs.core.comp.call(null,((function (g,temp__6736__auto__,calls_map,matched,map__63412,map__63412__$1,lifecycles,task){
return (function (x){
return cljs.core.merge.call(null,x,g.call(null,x,lifecycle));
});})(g,temp__6736__auto__,calls_map,matched,map__63412,map__63412__$1,lifecycles,task))
,f);
} else {
return f;
}
});})(matched,map__63412,map__63412__$1,lifecycles,task))
,cljs.core.identity,matched);
} else {
return null;
}
});

//# sourceMappingURL=lifecycle_compile.js.map?rel=1506321311271