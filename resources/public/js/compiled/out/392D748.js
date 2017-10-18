goog.provide('figwheel.connect.client');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('dat.sys.start');
goog.require('figwheel.client.utils');
goog.require('dat.sys.app');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__75450__delegate = function (x){
if(cljs.core.truth_(dat.sys.start.on_js_reload)){
return cljs.core.apply.call(null,dat.sys.start.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'dat.sys.start/on-js-reload' is missing");
}
};
var G__75450 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__75451__i = 0, G__75451__a = new Array(arguments.length -  0);
while (G__75451__i < G__75451__a.length) {G__75451__a[G__75451__i] = arguments[G__75451__i + 0]; ++G__75451__i;}
  x = new cljs.core.IndexedSeq(G__75451__a,0,null);
} 
return G__75450__delegate.call(this,x);};
G__75450.cljs$lang$maxFixedArity = 0;
G__75450.cljs$lang$applyTo = (function (arglist__75452){
var x = cljs.core.seq(arglist__75452);
return G__75450__delegate(x);
});
G__75450.cljs$core$IFn$_invoke$arity$variadic = G__75450__delegate;
return G__75450;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"client",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:2358/figwheel-ws"], null));
