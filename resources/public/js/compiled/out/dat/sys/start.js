// Compiled by ClojureScript 1.9.542 {}
goog.provide('dat.sys.start');
goog.require('cljs.core');
goog.require('dat.sys.app');
goog.require('dat.view');
goog.require('taoensso.timbre');
dat.sys.start.on_js_reload = (function dat$sys$start$on_js_reload(){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dat.sys.start","/tmp/form-init3486417385122683475.clj",8,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["------ Figwheel Has Reloaded ------"], null);
}),null)),null,-757159429);

return dat.view.dispatch_BANG_.call(null,new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(dat.sys.app.system),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel","reload","figwheel/reload",-534642450),null], null));
});

//# sourceMappingURL=start.js.map?rel=1506323312538