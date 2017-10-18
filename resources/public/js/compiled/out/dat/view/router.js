// Compiled by ClojureScript 1.9.542 {}
goog.provide('dat.view.router');
goog.require('cljs.core');
goog.require('bidi.bidi');
goog.require('dat.view.settings');
goog.require('dat.reactor.dispatcher');
goog.require('dat.view.routes');
goog.require('datascript.core');
goog.require('reagent.ratom');
goog.require('goog.events');
goog.require('dat.reactor');
goog.require('dat.view.utils');
goog.require('taoensso.timbre');
goog.require('goog.history.Html5History');
goog.require('goog.history.EventType');
dat.view.router.make_history = (function dat$view$router$make_history(){
var G__85965 = (new goog.history.Html5History());
G__85965.setPathPrefix([cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.protocol),cljs.core.str.cljs$core$IFn$_invoke$arity$1("//"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host)].join(''));

G__85965.setUseFragment(false);

return G__85965;
});
dat.view.router.attach_history_handler_BANG_ = (function dat$view$router$attach_history_handler_BANG_(history,handler_fn){
var G__85968 = history;
goog.events.listen(G__85968,goog.history.EventType.NAVIGATE,((function (G__85968){
return (function (p1__85966_SHARP_){
return handler_fn.call(null,p1__85966_SHARP_);
});})(G__85968))
);

G__85968.setEnabled(true);

return G__85968;
});
dat.view.router.update_route_BANG_ = (function dat$view$router$update_route_BANG_(app){
return dat.reactor.dispatcher.dispatch_BANG_.call(null,new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132).cljs$core$IFn$_invoke$arity$1(app),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.view.router","path-change","dat.view.router/path-change",391116151),window.location.pathname], null));
});
dat.reactor.register_handler.call(null,new cljs.core.Keyword("dat.view.router","path-change","dat.view.router/path-change",391116151),(function (app,db,p__85969){
var vec__85970 = p__85969;
var _ = cljs.core.nth.call(null,vec__85970,(0),null);
var new_path = cljs.core.nth.call(null,vec__85970,(1),null);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"dat.view.router","/tmp/form-init8382301926859034614.clj",52,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__85970,_,new_path){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Routing path change",new_path], null);
});})(vec__85970,_,new_path))
,null)),null,-1263965801);

return dat.reactor.resolve_to.call(null,app,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.view.settings","update","dat.view.settings/update",-1733360771),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.view.router","current-path","dat.view.router/current-path",1076946889),new_path], null)], null)], null));
}));
dat.view.router.make_handler_fn = (function dat$view$router$make_handler_fn(app){
return (function (_){
return dat.view.router.update_route_BANG_.call(null,app);
});
});
dat.view.router.current_route = cljs.core.memoize.call(null,(function (app){
return reagent.ratom.make_reaction.call(null,(function (){
return bidi.bidi.match_route.call(null,dat.view.utils.deref_or_value.call(null,new cljs.core.Keyword(null,"routes","routes",457900162).cljs$core$IFn$_invoke$arity$1(app)),(function (){var or__60899__auto__ = cljs.core.deref.call(null,dat.view.settings.get_setting.call(null,app,new cljs.core.Keyword("dat.view.router","current-path","dat.view.router/current-path",1076946889)));
if(cljs.core.truth_(or__60899__auto__)){
return or__60899__auto__;
} else {
return "/";
}
})());
}));
}));
dat.view.router.set_route_BANG_ = (function dat$view$router$set_route_BANG_(app,p__85973){
var map__85978 = p__85973;
var map__85978__$1 = ((((!((map__85978 == null)))?((((map__85978.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85978.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__85978):map__85978);
var route = map__85978__$1;
var handler = cljs.core.get.call(null,map__85978__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var route_params = cljs.core.get.call(null,map__85978__$1,new cljs.core.Keyword(null,"route-params","route-params",2111411055));
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dat.view.router","/tmp/form-init8382301926859034614.clj",75,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (map__85978,map__85978__$1,route,handler,route_params){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["set-route! to route:",route], null);
});})(map__85978,map__85978__$1,route,handler,route_params))
,null)),null,1584646919);

var flattened_params = cljs.core.vec.call(null,cljs.core.flatten.call(null,cljs.core.seq.call(null,route_params)));
var _ = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"dat.view.router","/tmp/form-init8382301926859034614.clj",77,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (flattened_params,map__85978,map__85978__$1,route,handler,route_params){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flattened-params:",flattened_params], null);
});})(flattened_params,map__85978,map__85978__$1,route,handler,route_params))
,null)),null,-1708626839);
var path_for_route = cljs.core.apply.call(null,bidi.bidi.path_for,dat.view.utils.deref_or_value.call(null,(function (){var or__60899__auto__ = new cljs.core.Keyword(null,"routes","routes",457900162).cljs$core$IFn$_invoke$arity$1(app);
if(cljs.core.truth_(or__60899__auto__)){
return or__60899__auto__;
} else {
return dat.view.routes.routes;
}
})()),handler,flattened_params);
if(cljs.core.not.call(null,path_for_route)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"dat.view.router","/tmp/form-init8382301926859034614.clj",84,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (flattened_params,_,path_for_route,map__85978,map__85978__$1,route,handler,route_params){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Hit bad route with params:",(function (){var sb__61991__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_85980_85982 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_85981_85983 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_85980_85982,_STAR_print_fn_STAR_85981_85983,sb__61991__auto__,flattened_params,_,path_for_route,map__85978,map__85978__$1,route,handler,route_params){
return (function (x__61992__auto__){
return sb__61991__auto__.append(x__61992__auto__);
});})(_STAR_print_newline_STAR_85980_85982,_STAR_print_fn_STAR_85981_85983,sb__61991__auto__,flattened_params,_,path_for_route,map__85978,map__85978__$1,route,handler,route_params))
;

try{cljs.core.pr_str.call(null,flattened_params);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_85981_85983;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_85980_85982;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__61991__auto__)].join('');
})()], null);
});})(flattened_params,_,path_for_route,map__85978,map__85978__$1,route,handler,route_params))
,null)),null,-626252969);

taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"dat.view.router","/tmp/form-init8382301926859034614.clj",85,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (flattened_params,_,path_for_route,map__85978,map__85978__$1,route,handler,route_params){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad route path:",path_for_route], null);
});})(flattened_params,_,path_for_route,map__85978,map__85978__$1,route,handler,route_params))
,null)),null,-1668640160);

return alert("Hit a bad route: ",cljs.core.pr_str.call(null,route_params));
} else {
return new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(app).setToken(path_for_route);
}
});

//# sourceMappingURL=router.js.map?rel=1506064205686