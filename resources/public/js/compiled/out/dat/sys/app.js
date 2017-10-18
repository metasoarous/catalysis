// Compiled by ClojureScript 1.9.542 {}
goog.provide('dat.sys.app');
goog.require('cljs.core');
goog.require('dat.view');
goog.require('dat.reactor');
goog.require('dat.reactor.onyx');
goog.require('dat.remote');
goog.require('dat.view.dom');
goog.require('dat.sys.db');
goog.require('dat.remote.impl.sente');
goog.require('dat.sync.core');
goog.require('dat.sys.views');
goog.require('dat.sys.events');
goog.require('dat.reactor.dispatcher');
goog.require('taoensso.timbre');
goog.require('reagent.core');
goog.require('com.stuartsierra.component');
dat.sys.app.new_system = (function dat$sys$app$new_system(){
return com.stuartsierra.component.system_map.call(null,new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("dat.sync","client","dat.sync/client",693124697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"datascript","datascript",-2114593819)], null)], null),new cljs.core.Keyword(null,"knowbase","knowbase",-132061592),com.stuartsierra.component.using.call(null,dat.sys.db.create_knowledge_base.call(null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415)], null)),new cljs.core.Keyword(null,"remote","remote",-1593576576),dat.remote.impl.sente.new_sente_remote.call(null),new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132),dat.reactor.dispatcher.new_strictly_ordered_dispatcher.call(null),new cljs.core.Keyword(null,"app","app",-560961707),com.stuartsierra.component.using.call(null,dat.view.new_datview.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("dat.view","main","dat.view/main",-1444902265),dat.sys.views.main], null)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"remote","remote",-1593576576),new cljs.core.Keyword(null,"remote","remote",-1593576576),new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132),new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132),new cljs.core.Keyword(null,"datascript","datascript",-2114593819),new cljs.core.Keyword(null,"knowbase","knowbase",-132061592)], null)),new cljs.core.Keyword(null,"datsync","datsync",2058990342),com.stuartsierra.component.using.call(null,dat.sync.core.new_datsync_client.call(null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"knowbase","knowbase",-132061592),new cljs.core.Keyword(null,"remote","remote",-1593576576),new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132),new cljs.core.Keyword(null,"reactor","reactor",535582272)], null)),new cljs.core.Keyword(null,"reactor","reactor",535582272),com.stuartsierra.component.using.call(null,dat.reactor.onyx.new_onyx_reactor.call(null),cljs.core.PersistentVector.EMPTY));
});
if(typeof dat.sys.app.system !== 'undefined'){
} else {
dat.sys.app.system = (function (){
cljs.core.enable_console_print_BANG_.call(null);

taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dat.sys.app","/tmp/form-init3486417385122683475.clj",103,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Creating and starting system"], null);
}),null)),null,-1197255364);

return com.stuartsierra.component.start.call(null,dat.sys.app.new_system.call(null));
})()
;
}
dat.sys.app.main = (function dat$sys$app$main(){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dat.sys.app","/tmp/form-init3486417385122683475.clj",107,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Running main function"], null);
}),null)),null,-1180978948);

var temp__6738__auto__ = document.getElementById("app");
if(cljs.core.truth_(temp__6738__auto__)){
var root = temp__6738__auto__;
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dat.sys.views.main,new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(dat.sys.app.system)], null),root);
} else {
return null;
}
});
goog.exportSymbol('dat.sys.app.main', dat.sys.app.main);
dat.sys.app.main.call(null);

//# sourceMappingURL=app.js.map?rel=1506323312521