// Compiled by ClojureScript 1.9.542 {}
goog.provide('taoensso.sente');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('taoensso.encore');
goog.require('taoensso.timbre');
goog.require('taoensso.sente.interfaces');
if(cljs.core.vector_QMARK_.call(null,taoensso.encore.encore_version)){
taoensso.encore.assert_min_encore_version.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(79),(1)], null));
} else {
taoensso.encore.assert_min_encore_version.call(null,2.79);
}
/**
 * Useful for identifying client/server mismatch
 */
taoensso.sente.sente_version = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(11),(0)], null);
taoensso.sente.node_target_QMARK_ = cljs.core._EQ_.call(null,cljs.core._STAR_target_STAR_,"nodejs");
if(typeof taoensso.sente.debug_mode_QMARK__ !== 'undefined'){
} else {
taoensso.sente.debug_mode_QMARK__ = cljs.core.atom.call(null,false);
}
taoensso.sente.expected = (function taoensso$sente$expected(expected,x){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"expected","expected",1583670997),expected,new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null)], null);
});
/**
 * Returns nil if given argument is a valid [ev-id ?ev-data] form. Otherwise
 *   returns a map of validation errors like `{:wrong-type {:expected _ :actual _}}`.
 */
taoensso.sente.validate_event = (function taoensso$sente$validate_event(x){
if(!(cljs.core.vector_QMARK_.call(null,x))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrong-type","wrong-type",929556915),taoensso.sente.expected.call(null,new cljs.core.Keyword(null,"vector","vector",1902966158),x)], null);
} else {
if(cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null).call(null,cljs.core.count.call(null,x)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrong-length","wrong-length",1367572281),taoensso.sente.expected.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null),x)], null);
} else {
var vec__88460 = x;
var ev_id = cljs.core.nth.call(null,vec__88460,(0),null);
var _ = cljs.core.nth.call(null,vec__88460,(1),null);
if(!((ev_id instanceof cljs.core.Keyword))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrong-id-type","wrong-id-type",-1213601689),taoensso.sente.expected.call(null,new cljs.core.Keyword(null,"keyword","keyword",811389747),ev_id)], null);
} else {
if(cljs.core.not.call(null,cljs.core.namespace.call(null,ev_id))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unnamespaced-id","unnamespaced-id",1976189772),taoensso.sente.expected.call(null,new cljs.core.Keyword(null,"namespaced-keyword","namespaced-keyword",131372895),ev_id)], null);
} else {
return null;

}
}

}
}
});
/**
 * Returns given argument if it is a valid [ev-id ?ev-data] form. Otherwise
 *   throws a validation exception.
 */
taoensso.sente.assert_event = (function taoensso$sente$assert_event(x){
var temp__6738__auto__ = taoensso.sente.validate_event.call(null,x);
if(cljs.core.truth_(temp__6738__auto__)){
var errs = temp__6738__auto__;
throw cljs.core.ex_info.call(null,"Invalid event",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"given","given",716253602),x,new cljs.core.Keyword(null,"errors","errors",-908790718),errs], null));
} else {
return null;
}
});
/**
 * Valid [ev-id ?ev-data] form?
 */
taoensso.sente.event_QMARK_ = (function taoensso$sente$event_QMARK_(x){
return (taoensso.sente.validate_event.call(null,x) == null);
});
taoensso.sente.as_event = (function taoensso$sente$as_event(x){
var temp__6736__auto__ = taoensso.sente.validate_event.call(null,x);
if(cljs.core.truth_(temp__6736__auto__)){
var errs = temp__6736__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","bad-event","chsk/bad-event",-565206930),x], null);
} else {
return x;
}
});
taoensso.sente.client_event_msg_QMARK_ = (function taoensso$sente$client_event_msg_QMARK_(x){
var and__60887__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__60887__auto__){
var and__60887__auto____$1 = taoensso.encore.ks_EQ_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null),x);
if(and__60887__auto____$1){
var map__88473 = x;
var map__88473__$1 = ((((!((map__88473 == null)))?((((map__88473.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88473.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__88473):map__88473);
var ch_recv = cljs.core.get.call(null,map__88473__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.call(null,map__88473__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state = cljs.core.get.call(null,map__88473__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var event = cljs.core.get.call(null,map__88473__$1,new cljs.core.Keyword(null,"event","event",301435442));
var and__60887__auto____$2 = taoensso.encore.chan_QMARK_.call(null,ch_recv);
if(and__60887__auto____$2){
var and__60887__auto____$3 = cljs.core.ifn_QMARK_.call(null,send_fn);
if(and__60887__auto____$3){
var and__60887__auto____$4 = taoensso.encore.atom_QMARK_.call(null,state);
if(and__60887__auto____$4){
return taoensso.sente.event_QMARK_.call(null,event);
} else {
return and__60887__auto____$4;
}
} else {
return and__60887__auto____$3;
}
} else {
return and__60887__auto____$2;
}
} else {
return and__60887__auto____$1;
}
} else {
return and__60887__auto__;
}
});
taoensso.sente.server_event_msg_QMARK_ = (function taoensso$sente$server_event_msg_QMARK_(x){
var and__60887__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__60887__auto__){
var and__60887__auto____$1 = taoensso.encore.ks_EQ_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),null,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),null,new cljs.core.Keyword(null,"uid","uid",-1447769400),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null),x);
if(and__60887__auto____$1){
var map__88485 = x;
var map__88485__$1 = ((((!((map__88485 == null)))?((((map__88485.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88485.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__88485):map__88485);
var ch_recv = cljs.core.get.call(null,map__88485__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.call(null,map__88485__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var connected_uids = cljs.core.get.call(null,map__88485__$1,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231));
var ring_req = cljs.core.get.call(null,map__88485__$1,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961));
var client_id = cljs.core.get.call(null,map__88485__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var event = cljs.core.get.call(null,map__88485__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.call(null,map__88485__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
var and__60887__auto____$2 = taoensso.encore.chan_QMARK_.call(null,ch_recv);
if(and__60887__auto____$2){
var and__60887__auto____$3 = cljs.core.ifn_QMARK_.call(null,send_fn);
if(and__60887__auto____$3){
var and__60887__auto____$4 = taoensso.encore.atom_QMARK_.call(null,connected_uids);
if(and__60887__auto____$4){
var and__60887__auto____$5 = cljs.core.map_QMARK_.call(null,ring_req);
if(and__60887__auto____$5){
var and__60887__auto____$6 = taoensso.encore.nblank_str_QMARK_.call(null,client_id);
if(and__60887__auto____$6){
var and__60887__auto____$7 = taoensso.sente.event_QMARK_.call(null,event);
if(cljs.core.truth_(and__60887__auto____$7)){
return ((_QMARK_reply_fn == null)) || (cljs.core.ifn_QMARK_.call(null,_QMARK_reply_fn));
} else {
return and__60887__auto____$7;
}
} else {
return and__60887__auto____$6;
}
} else {
return and__60887__auto____$5;
}
} else {
return and__60887__auto____$4;
}
} else {
return and__60887__auto____$3;
}
} else {
return and__60887__auto____$2;
}
} else {
return and__60887__auto____$1;
}
} else {
return and__60887__auto__;
}
});
/**
 * All server `event-msg`s go through this
 */
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_ = (function taoensso$sente$put_server_event_msg_GT_ch_recv_BANG_(ch_recv,p__88487){
var map__88493 = p__88487;
var map__88493__$1 = ((((!((map__88493 == null)))?((((map__88493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88493.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__88493):map__88493);
var ev_msg = map__88493__$1;
var event = cljs.core.get.call(null,map__88493__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.call(null,map__88493__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
var vec__88495 = taoensso.sente.as_event.call(null,event);
var ev_id = cljs.core.nth.call(null,vec__88495,(0),null);
var ev__QMARK_data = cljs.core.nth.call(null,vec__88495,(1),null);
var valid_event = vec__88495;
var ev_msg_STAR_ = cljs.core.merge.call(null,ev_msg,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"event","event",301435442),valid_event,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),_QMARK_reply_fn,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null));
if(cljs.core.not.call(null,taoensso.sente.server_event_msg_QMARK_.call(null,ev_msg_STAR_))){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init8382301926859034614.clj",187,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__88495,ev_id,ev__QMARK_data,valid_event,ev_msg_STAR_,map__88493,map__88493__$1,ev_msg,event,_QMARK_reply_fn){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad ev-msg: %s",ev_msg], null);
});})(vec__88495,ev_id,ev__QMARK_data,valid_event,ev_msg_STAR_,map__88493,map__88493__$1,ev_msg,event,_QMARK_reply_fn))
,null)),null,532606666);
} else {
return cljs.core.async.put_BANG_.call(null,ch_recv,ev_msg_STAR_);
}
});
taoensso.sente.cb_error_QMARK_ = (function taoensso$sente$cb_error_QMARK_(cb_reply_clj){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264),null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439),null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489),null], null), null).call(null,cb_reply_clj);
});
taoensso.sente.cb_success_QMARK_ = (function taoensso$sente$cb_success_QMARK_(cb_reply_clj){
return cljs.core.not.call(null,taoensso.sente.cb_error_QMARK_.call(null,cb_reply_clj));
});
/**
 * prefixed-pstr->[clj ?cb-uuid]
 */
taoensso.sente.unpack = (function taoensso$sente$unpack(packer,prefixed_pstr){
if(typeof prefixed_pstr === 'string'){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",201,"(string? prefixed-pstr)",prefixed_pstr,null,null);
}

var wrapped_QMARK_ = taoensso.encore.str_starts_with_QMARK_.call(null,prefixed_pstr,"+");
var pstr = cljs.core.subs.call(null,prefixed_pstr,(1));
var clj = (function (){try{return taoensso.sente.interfaces.unpack.call(null,packer,pstr);
}catch (e88505){var t = e88505;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/tmp/form-init8382301926859034614.clj",208,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (t,wrapped_QMARK_,pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad package: %s (%s)",pstr,t], null);
});})(t,wrapped_QMARK_,pstr))
,null)),null,-1338945115);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","bad-package","chsk/bad-package",501893679),pstr], null);
}})();
var vec__88502 = ((wrapped_QMARK_)?clj:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,null], null));
var clj__$1 = cljs.core.nth.call(null,vec__88502,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__88502,(1),null);
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.call(null,(0),_QMARK_cb_uuid))?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):_QMARK_cb_uuid);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init8382301926859034614.clj",214,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (wrapped_QMARK_,pstr,clj,vec__88502,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unpacking: %s -> %s",prefixed_pstr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null)], null);
});})(wrapped_QMARK_,pstr,clj,vec__88502,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1))
,null)),null,-1489582840);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null);
});
taoensso.sente.with__QMARK_meta = (function taoensso$sente$with__QMARK_meta(x,_QMARK_m){
if(cljs.core.seq.call(null,_QMARK_m)){
return cljs.core.with_meta.call(null,x,_QMARK_m);
} else {
return x;
}
});
/**
 * clj->prefixed-pstr
 */
taoensso.sente.pack = (function taoensso$sente$pack(var_args){
var args88506 = [];
var len__62120__auto___88509 = arguments.length;
var i__62121__auto___88510 = (0);
while(true){
if((i__62121__auto___88510 < len__62120__auto___88509)){
args88506.push((arguments[i__62121__auto___88510]));

var G__88511 = (i__62121__auto___88510 + (1));
i__62121__auto___88510 = G__88511;
continue;
} else {
}
break;
}

var G__88508 = args88506.length;
switch (G__88508) {
case 3:
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args88506.length)].join('')));

}
});

taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3 = (function (packer,_QMARK_packer_meta,clj){
var pstr = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.sente.interfaces.pack.call(null,packer,taoensso.sente.with__QMARK_meta.call(null,clj,_QMARK_packer_meta)))].join('');
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init8382301926859034614.clj",224,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Packing (unwrapped): %s -> %s",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_packer_meta,clj], null),pstr], null);
});})(pstr))
,null)),null,1482587102);

return pstr;
});

taoensso.sente.pack.cljs$core$IFn$_invoke$arity$4 = (function (packer,_QMARK_packer_meta,clj,_QMARK_cb_uuid){
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.call(null,_QMARK_cb_uuid,new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321)))?(0):_QMARK_cb_uuid);
var wrapped_clj = (cljs.core.truth_(_QMARK_cb_uuid__$1)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,_QMARK_cb_uuid__$1], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj], null));
var pstr = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("+"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.sente.interfaces.pack.call(null,packer,taoensso.sente.with__QMARK_meta.call(null,wrapped_clj,_QMARK_packer_meta)))].join('');
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init8382301926859034614.clj",234,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (_QMARK_cb_uuid__$1,wrapped_clj,pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Packing (wrapped): %s -> %s",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_packer_meta,clj,_QMARK_cb_uuid__$1], null),pstr], null);
});})(_QMARK_cb_uuid__$1,wrapped_clj,pstr))
,null)),null,-1845219988);

return pstr;
});

taoensso.sente.pack.cljs$lang$maxFixedArity = 4;


/**
* @constructor
 * @implements {taoensso.sente.interfaces.IPacker}
*/
taoensso.sente.EdnPacker = (function (){
})
taoensso.sente.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$ = cljs.core.PROTOCOL_SENTINEL;

taoensso.sente.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$pack$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return taoensso.encore.pr_edn.call(null,x);
});

taoensso.sente.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$unpack$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return taoensso.encore.read_edn.call(null,s);
});

taoensso.sente.EdnPacker.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

taoensso.sente.EdnPacker.cljs$lang$type = true;

taoensso.sente.EdnPacker.cljs$lang$ctorStr = "taoensso.sente/EdnPacker";

taoensso.sente.EdnPacker.cljs$lang$ctorPrWriter = (function (this__61556__auto__,writer__61557__auto__,opt__61558__auto__){
return cljs.core._write.call(null,writer__61557__auto__,"taoensso.sente/EdnPacker");
});

taoensso.sente.__GT_EdnPacker = (function taoensso$sente$__GT_EdnPacker(){
return (new taoensso.sente.EdnPacker());
});

taoensso.sente.default_edn_packer = (new taoensso.sente.EdnPacker());
taoensso.sente.coerce_packer = (function taoensso$sente$coerce_packer(x){
if(cljs.core._EQ_.call(null,x,new cljs.core.Keyword(null,"edn","edn",1317840885))){
return taoensso.sente.default_edn_packer;
} else {
var e = (function (){try{if((function (p1__88513_SHARP_){
if(!((p1__88513_SHARP_ == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === p1__88513_SHARP_.taoensso$sente$interfaces$IPacker$))){
return true;
} else {
if((!p1__88513_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IPacker,p1__88513_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IPacker,p1__88513_SHARP_);
}
}).call(null,x)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e88516){if((e88516 instanceof Error)){
var e = e88516;
return e;
} else {
throw e88516;

}
}})();
if((e == null)){
return x;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",247,"((fn* [p1__88513#] (satisfies? interfaces/IPacker p1__88513#)) x)",x,e,null);
}
}
});
taoensso.sente.next_idx_BANG_ = taoensso.encore.idx_fn.call(null);


/**
 * Takes a web server adapter[1] and returns a map with keys:
 *  :ch-recv ; core.async channel to receive `event-msg`s (internal or from clients).
 *  :send-fn ; (fn [user-id ev] for server>user push.
 *  :ajax-post-fn                ; (fn [ring-req]) for Ring CSRF-POST + chsk URL.
 *  :ajax-get-or-ws-handshake-fn ; (fn [ring-req]) for Ring GET + chsk URL.
 *  :connected-uids ; Watchable, read-only (atom {:ws #{_} :ajax #{_} :any #{_}}).
 * 
 *   Common options:
 *  :user-id-fn        ; (fn [ring-req]) -> unique user-id for server>user push.
 *  :csrf-token-fn     ; (fn [ring-req]) -> CSRF token for Ajax POSTs.
 *  :handshake-data-fn ; (fn [ring-req]) -> arb user data to append to handshake evs.
 *  :ws-kalive-ms      ; Ping to keep a WebSocket conn alive if no activity
 *                     ; w/in given msecs. Should be different to client's :ws-kalive-ms.
 *  :lp-timeout-ms     ; Timeout (repoll) long-polling Ajax conns after given msecs.
 *  :send-buf-ms-ajax  ; [2]
 *  :send-buf-ms-ws    ; [2]
 *  :packer            ; :edn (default), or an IPacker implementation.
 * 
 *   [1] e.g. `(taoensso.sente.server-adapters.http-kit/get-sch-adapter)` or
 *         `(taoensso.sente.server-adapters.immutant/get-sch-adapter)`.
 *    You must have the necessary web-server dependency in your project.clj and
 *    the necessary entry in your namespace's `ns` form.
 * 
 *   [2] Optimization to allow transparent batching of rapidly-triggered
 *    server>user pushes. This is esp. important for Ajax clients which use a
 *    (slow) reconnecting poller. Actual event dispatch may occur <= given ms
 *    after send call (larger values => larger batch windows).
 */
taoensso.sente.make_channel_socket_server_BANG_ = (function taoensso$sente$make_channel_socket_server_BANG_(var_args){
var args__62127__auto__ = [];
var len__62120__auto___88824 = arguments.length;
var i__62121__auto___88825 = (0);
while(true){
if((i__62121__auto___88825 < len__62120__auto___88824)){
args__62127__auto__.push((arguments[i__62121__auto___88825]));

var G__88826 = (i__62121__auto___88825 + (1));
i__62121__auto___88825 = G__88826;
continue;
} else {
}
break;
}

var argseq__62128__auto__ = ((((1) < args__62127__auto__.length))?(new cljs.core.IndexedSeq(args__62127__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__62128__auto__);
});

taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (web_server_ch_adapter,p__88521){
var vec__88522 = p__88521;
var map__88525 = cljs.core.nth.call(null,vec__88522,(0),null);
var map__88525__$1 = ((((!((map__88525 == null)))?((((map__88525.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88525.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__88525):map__88525);
var recv_buf_or_n = cljs.core.get.call(null,map__88525__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer.call(null,(1000)));
var ws_kalive_ms = cljs.core.get.call(null,map__88525__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),taoensso.encore.ms.call(null,new cljs.core.Keyword(null,"secs","secs",1532330091),(25)));
var lp_timeout_ms = cljs.core.get.call(null,map__88525__$1,new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),taoensso.encore.ms.call(null,new cljs.core.Keyword(null,"secs","secs",1532330091),(20)));
var send_buf_ms_ajax = cljs.core.get.call(null,map__88525__$1,new cljs.core.Keyword(null,"send-buf-ms-ajax","send-buf-ms-ajax",1546129037),(100));
var send_buf_ms_ws = cljs.core.get.call(null,map__88525__$1,new cljs.core.Keyword(null,"send-buf-ms-ws","send-buf-ms-ws",-1149586238),(30));
var user_id_fn = cljs.core.get.call(null,map__88525__$1,new cljs.core.Keyword(null,"user-id-fn","user-id-fn",-1532150029),((function (vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws){
return (function (ring_req){
return cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null));
});})(vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws))
);
var csrf_token_fn = cljs.core.get.call(null,map__88525__$1,new cljs.core.Keyword(null,"csrf-token-fn","csrf-token-fn",-1846298394),((function (vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn){
return (function (ring_req){
var or__60899__auto__ = cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856)], null));
if(cljs.core.truth_(or__60899__auto__)){
return or__60899__auto__;
} else {
var or__60899__auto____$1 = cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword("ring.middleware.anti-forgery","anti-forgery-token","ring.middleware.anti-forgery/anti-forgery-token",571563484)], null));
if(cljs.core.truth_(or__60899__auto____$1)){
return or__60899__auto____$1;
} else {
return cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),"__anti-forgery-token"], null));
}
}
});})(vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn))
);
var handshake_data_fn = cljs.core.get.call(null,map__88525__$1,new cljs.core.Keyword(null,"handshake-data-fn","handshake-data-fn",2011983089),((function (vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn){
return (function (ring_req){
return null;
});})(vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn))
);
var packer = cljs.core.get.call(null,map__88525__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var e = (function (){try{if(taoensso.encore.pos_int_QMARK_.call(null,send_buf_ms_ajax)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e88527){if((e88527 instanceof Error)){
var e = e88527;
return e;
} else {
throw e88527;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",317,"(enc/pos-int? send-buf-ms-ajax)",send_buf_ms_ajax,e,null);
}
})(),(function (){var e = (function (){try{if(taoensso.encore.pos_int_QMARK_.call(null,send_buf_ms_ws)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e88528){if((e88528 instanceof Error)){
var e = e88528;
return e;
} else {
throw e88528;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",317,"(enc/pos-int? send-buf-ms-ws)",send_buf_ms_ws,e,null);
}
})()], null);

var e_88827 = (function (){try{if(((function (vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p1__88518_SHARP_){
if(!((p1__88518_SHARP_ == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === p1__88518_SHARP_.taoensso$sente$interfaces$IServerChanAdapter$))){
return true;
} else {
if((!p1__88518_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IServerChanAdapter,p1__88518_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IServerChanAdapter,p1__88518_SHARP_);
}
});})(vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
.call(null,web_server_ch_adapter)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e88529){if((e88529 instanceof Error)){
var e = e88529;
return e;
} else {
throw e88529;

}
}})();
if((e_88827 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",318,"((fn* [p1__88518#] (satisfies? interfaces/IServerChanAdapter p1__88518#)) web-server-ch-adapter)",web_server_ch_adapter,e_88827,null);
}

var max_ms_88828 = taoensso.sente.default_client_side_ajax_timeout_ms;
if((lp_timeout_ms >= max_ms_88828)){
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(":lp-timeout-ms must be < "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(max_ms_88828)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),lp_timeout_ms,new cljs.core.Keyword(null,"default-client-side-ajax-timeout-ms","default-client-side-ajax-timeout-ms",1149929762),max_ms_88828], null));
} else {
}

var packer__$1 = taoensso.sente.coerce_packer.call(null,packer);
var ch_recv = cljs.core.async.chan.call(null,recv_buf_or_n);
var user_id_fn__$1 = ((function (packer__$1,ch_recv,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req,client_id){
var or__60899__auto__ = user_id_fn.call(null,cljs.core.assoc.call(null,ring_req,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id));
if(cljs.core.truth_(or__60899__auto__)){
return or__60899__auto__;
} else {
return new cljs.core.Keyword("taoensso.sente","nil-uid","taoensso.sente/nil-uid",-2111603486);
}
});})(packer__$1,ch_recv,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var conns_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null));
var send_buffers_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null));
var connected_uids_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.PersistentHashSet.EMPTY], null));
var upd_conn_BANG_ = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var G__88829 = null;
var G__88829__3 = (function (conn_type,uid,client_id){
return taoensso.encore.swap_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type,uid,client_id], null),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
var vec__88531 = _QMARK_v;
var _QMARK_sch = cljs.core.nth.call(null,vec__88531,(0),null);
var _udt = cljs.core.nth.call(null,vec__88531,(1),null);
var new_udt = taoensso.encore.now_udt.call(null);
return taoensso.encore.swapped.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_sch,new_udt], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init?","init?",438181499),(_QMARK_v == null),new cljs.core.Keyword(null,"udt","udt",2011712751),new_udt,new cljs.core.Keyword(null,"?sch","?sch",2064493898),_QMARK_sch], null));
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
});
var G__88829__4 = (function (conn_type,uid,client_id,new__QMARK_sch){
return taoensso.encore.swap_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type,uid,client_id], null),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
var new_udt = taoensso.encore.now_udt.call(null);
return taoensso.encore.swapped.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new__QMARK_sch,new_udt], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init?","init?",438181499),(_QMARK_v == null),new cljs.core.Keyword(null,"udt","udt",2011712751),new_udt,new cljs.core.Keyword(null,"?sch","?sch",2064493898),new__QMARK_sch], null));
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
});
G__88829 = function(conn_type,uid,client_id,new__QMARK_sch){
switch(arguments.length){
case 3:
return G__88829__3.call(this,conn_type,uid,client_id);
case 4:
return G__88829__4.call(this,conn_type,uid,client_id,new__QMARK_sch);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__88829.cljs$core$IFn$_invoke$arity$3 = G__88829__3;
G__88829.cljs$core$IFn$_invoke$arity$4 = G__88829__4;
return G__88829;
})()
;})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var connect_uid_BANG_ = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (conn_type,uid){
if(cljs.core.truth_((function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_.call(null,uid)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e88534){if((e88534 instanceof Error)){
var e = e88534;
return e;
} else {
throw e88534;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",362,"(taoensso.truss.impl/some? uid)",uid,e,null);
}
})())){
} else {
throw (new Error("Assert failed: (have? uid)"));
}

var newly_connected_QMARK_ = taoensso.encore.swap_in_BANG_.call(null,connected_uids_,cljs.core.PersistentVector.EMPTY,((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__88535){
var map__88536 = p__88535;
var map__88536__$1 = ((((!((map__88536 == null)))?((((map__88536.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88536.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__88536):map__88536);
var old_m = map__88536__$1;
var ws = cljs.core.get.call(null,map__88536__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax = cljs.core.get.call(null,map__88536__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.call(null,map__88536__$1,new cljs.core.Keyword(null,"any","any",1705907423));
var new_m = (function (){var G__88538 = conn_type;
var G__88538__$1 = (((G__88538 instanceof cljs.core.Keyword))?G__88538.fqn:null);
switch (G__88538__$1) {
case "ws":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.conj.call(null,ws,uid),new cljs.core.Keyword(null,"ajax","ajax",814345549),ajax,new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.conj.call(null,any,uid)], null);

break;
case "ajax":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),ws,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.conj.call(null,ajax,uid),new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.conj.call(null,any,uid)], null);

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(conn_type)].join('')));

}
})();
return taoensso.encore.swapped.call(null,new_m,(function (){var old_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(old_m);
var new_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(new_m);
if((!(cljs.core.contains_QMARK_.call(null,old_any,uid))) && (cljs.core.contains_QMARK_.call(null,new_any,uid))){
return new cljs.core.Keyword(null,"newly-connected","newly-connected",-2029862681);
} else {
return null;
}
})());
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
return newly_connected_QMARK_;
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var upd_connected_uid_BANG_ = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (uid){
if(cljs.core.truth_((function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_.call(null,uid)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e88539){if((e88539 instanceof Error)){
var e = e88539;
return e;
} else {
throw e88539;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",379,"(taoensso.truss.impl/some? uid)",uid,e,null);
}
})())){
} else {
throw (new Error("Assert failed: (have? uid)"));
}

var newly_disconnected_QMARK_ = taoensso.encore.swap_in_BANG_.call(null,connected_uids_,cljs.core.PersistentVector.EMPTY,((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__88540){
var map__88541 = p__88540;
var map__88541__$1 = ((((!((map__88541 == null)))?((((map__88541.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88541.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__88541):map__88541);
var old_m = map__88541__$1;
var ws = cljs.core.get.call(null,map__88541__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax = cljs.core.get.call(null,map__88541__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.call(null,map__88541__$1,new cljs.core.Keyword(null,"any","any",1705907423));
var conns_SINGLEQUOTE_ = cljs.core.deref.call(null,conns_);
var any_ws_clients_QMARK_ = cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443).cljs$core$IFn$_invoke$arity$1(conns_SINGLEQUOTE_),uid);
var any_ajax_clients_QMARK_ = cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549).cljs$core$IFn$_invoke$arity$1(conns_SINGLEQUOTE_),uid);
var any_clients_QMARK_ = (any_ws_clients_QMARK_) || (any_ajax_clients_QMARK_);
var new_m = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),((any_ws_clients_QMARK_)?cljs.core.conj.call(null,ws,uid):cljs.core.disj.call(null,ws,uid)),new cljs.core.Keyword(null,"ajax","ajax",814345549),((any_ajax_clients_QMARK_)?cljs.core.conj.call(null,ajax,uid):cljs.core.disj.call(null,ajax,uid)),new cljs.core.Keyword(null,"any","any",1705907423),((any_clients_QMARK_)?cljs.core.conj.call(null,any,uid):cljs.core.disj.call(null,any,uid))], null);
return taoensso.encore.swapped.call(null,new_m,(function (){var old_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(old_m);
var new_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(new_m);
if((cljs.core.contains_QMARK_.call(null,old_any,uid)) && (!(cljs.core.contains_QMARK_.call(null,new_any,uid)))){
return new cljs.core.Keyword(null,"newly-disconnected","newly-disconnected",-1586164962);
} else {
return null;
}
})());
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
return newly_disconnected_QMARK_;
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var send_fn = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() { 
var G__88831__delegate = function (user_id,ev,p__88543){
var vec__88544 = p__88543;
var map__88547 = cljs.core.nth.call(null,vec__88544,(0),null);
var map__88547__$1 = ((((!((map__88547 == null)))?((((map__88547.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88547.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__88547):map__88547);
var opts = map__88547__$1;
var flush_QMARK_ = cljs.core.get.call(null,map__88547__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var uid_88832 = ((cljs.core._EQ_.call(null,user_id,new cljs.core.Keyword("sente","all-users-without-uid","sente/all-users-without-uid",-42979578)))?new cljs.core.Keyword("taoensso.sente","nil-uid","taoensso.sente/nil-uid",-2111603486):user_id);
var __88833 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init8382301926859034614.clj",405,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (uid_88832,vec__88544,map__88547,map__88547__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (->uid %s) %s",uid_88832,ev], null);
});})(uid_88832,vec__88544,map__88547,map__88547__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-853570995);
var __88834__$1 = (cljs.core.truth_(uid_88832)?null:(function(){throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Support for sending to `nil` user-ids has been REMOVED. "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Please send to `:sente/all-users-without-uid` instead.")].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("uid")].join('')))})());
var __88835__$2 = taoensso.sente.assert_event.call(null,ev);
var ev_uuid_88836 = taoensso.encore.uuid_str.call(null);
var flush_buffer_BANG__88837 = ((function (uid_88832,__88833,__88834__$1,__88835__$2,ev_uuid_88836,vec__88544,map__88547,map__88547__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (conn_type){
var temp__6738__auto__ = taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type], null),((function (uid_88832,__88833,__88834__$1,__88835__$2,ev_uuid_88836,vec__88544,map__88547,map__88547__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (m){
var vec__88549 = cljs.core.get.call(null,m,uid_88832);
var ___$3 = cljs.core.nth.call(null,vec__88549,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__88549,(1),null);
if(cljs.core.contains_QMARK_.call(null,ev_uuids,ev_uuid_88836)){
return taoensso.encore.swapped.call(null,cljs.core.dissoc.call(null,m,uid_88832),cljs.core.get.call(null,m,uid_88832));
} else {
return taoensso.encore.swapped.call(null,m,null);
}
});})(uid_88832,__88833,__88834__$1,__88835__$2,ev_uuid_88836,vec__88544,map__88547,map__88547__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
if(cljs.core.truth_(temp__6738__auto__)){
var pulled = temp__6738__auto__;
var vec__88552 = pulled;
var buffered_evs = cljs.core.nth.call(null,vec__88552,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__88552,(1),null);
if(cljs.core.vector_QMARK_.call(null,buffered_evs)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",432,"(vector? buffered-evs)",buffered_evs,null,null);
}

if(cljs.core.set_QMARK_.call(null,ev_uuids)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",433,"(set? ev-uuids)",ev_uuids,null,null);
}

var packer_metas = cljs.core.mapv.call(null,cljs.core.meta,buffered_evs);
var combined_packer_meta = cljs.core.reduce.call(null,cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,packer_metas);
var buffered_evs_ppstr = taoensso.sente.pack.call(null,packer__$1,combined_packer_meta,buffered_evs);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init8382301926859034614.clj",441,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (packer_metas,combined_packer_meta,buffered_evs_ppstr,vec__88552,buffered_evs,ev_uuids,pulled,temp__6738__auto__,uid_88832,__88833,__88834__$1,__88835__$2,ev_uuid_88836,vec__88544,map__88547,map__88547__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buffered-evs-ppstr: %s (with meta %s)",buffered_evs_ppstr,combined_packer_meta], null);
});})(packer_metas,combined_packer_meta,buffered_evs_ppstr,vec__88552,buffered_evs,ev_uuids,pulled,temp__6738__auto__,uid_88832,__88833,__88834__$1,__88835__$2,ev_uuid_88836,vec__88544,map__88547,map__88547__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-1273026024);

var G__88555 = conn_type;
var G__88555__$1 = (((G__88555 instanceof cljs.core.Keyword))?G__88555.fqn:null);
switch (G__88555__$1) {
case "ws":
return taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.call(null,conns_,uid_88832,buffered_evs_ppstr,upd_conn_BANG_);

break;
case "ajax":
return taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.call(null,conns_,uid_88832,buffered_evs_ppstr);

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(conn_type)].join('')));

}
} else {
return null;
}
});})(uid_88832,__88833,__88834__$1,__88835__$2,ev_uuid_88836,vec__88544,map__88547,map__88547__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
if(cljs.core._EQ_.call(null,ev,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","close","chsk/close",1840295819)], null))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/tmp/form-init8382301926859034614.clj",452,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (uid_88832,__88833,__88834__$1,__88835__$2,ev_uuid_88836,flush_buffer_BANG__88837,vec__88544,map__88547,map__88547__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk closing (client may reconnect): %s",uid_88832], null);
});})(uid_88832,__88833,__88834__$1,__88835__$2,ev_uuid_88836,flush_buffer_BANG__88837,vec__88544,map__88547,map__88547__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,1453149053);

if(cljs.core.truth_(flush_QMARK_)){
flush_buffer_BANG__88837.call(null,new cljs.core.Keyword(null,"ws","ws",86841443));

flush_buffer_BANG__88837.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549));
} else {
}

var seq__88556_88839 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid_88832], null))));
var chunk__88557_88840 = null;
var count__88558_88841 = (0);
var i__88559_88842 = (0);
while(true){
if((i__88559_88842 < count__88558_88841)){
var vec__88560_88843 = cljs.core._nth.call(null,chunk__88557_88840,i__88559_88842);
var _QMARK_sch_88844 = cljs.core.nth.call(null,vec__88560_88843,(0),null);
var _udt_88845 = cljs.core.nth.call(null,vec__88560_88843,(1),null);
var temp__6738__auto___88846 = _QMARK_sch_88844;
if(cljs.core.truth_(temp__6738__auto___88846)){
var sch_88847 = temp__6738__auto___88846;
taoensso.sente.interfaces.sch_close_BANG_.call(null,sch_88847);
} else {
}

var G__88848 = seq__88556_88839;
var G__88849 = chunk__88557_88840;
var G__88850 = count__88558_88841;
var G__88851 = (i__88559_88842 + (1));
seq__88556_88839 = G__88848;
chunk__88557_88840 = G__88849;
count__88558_88841 = G__88850;
i__88559_88842 = G__88851;
continue;
} else {
var temp__6738__auto___88852 = cljs.core.seq.call(null,seq__88556_88839);
if(temp__6738__auto___88852){
var seq__88556_88853__$1 = temp__6738__auto___88852;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__88556_88853__$1)){
var c__61810__auto___88854 = cljs.core.chunk_first.call(null,seq__88556_88853__$1);
var G__88855 = cljs.core.chunk_rest.call(null,seq__88556_88853__$1);
var G__88856 = c__61810__auto___88854;
var G__88857 = cljs.core.count.call(null,c__61810__auto___88854);
var G__88858 = (0);
seq__88556_88839 = G__88855;
chunk__88557_88840 = G__88856;
count__88558_88841 = G__88857;
i__88559_88842 = G__88858;
continue;
} else {
var vec__88563_88859 = cljs.core.first.call(null,seq__88556_88853__$1);
var _QMARK_sch_88860 = cljs.core.nth.call(null,vec__88563_88859,(0),null);
var _udt_88861 = cljs.core.nth.call(null,vec__88563_88859,(1),null);
var temp__6738__auto___88862__$1 = _QMARK_sch_88860;
if(cljs.core.truth_(temp__6738__auto___88862__$1)){
var sch_88863 = temp__6738__auto___88862__$1;
taoensso.sente.interfaces.sch_close_BANG_.call(null,sch_88863);
} else {
}

var G__88864 = cljs.core.next.call(null,seq__88556_88853__$1);
var G__88865 = null;
var G__88866 = (0);
var G__88867 = (0);
seq__88556_88839 = G__88864;
chunk__88557_88840 = G__88865;
count__88558_88841 = G__88866;
i__88559_88842 = G__88867;
continue;
}
} else {
}
}
break;
}

var seq__88566_88868 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid_88832], null))));
var chunk__88567_88869 = null;
var count__88568_88870 = (0);
var i__88569_88871 = (0);
while(true){
if((i__88569_88871 < count__88568_88870)){
var vec__88570_88872 = cljs.core._nth.call(null,chunk__88567_88869,i__88569_88871);
var _QMARK_sch_88873 = cljs.core.nth.call(null,vec__88570_88872,(0),null);
var _udt_88874 = cljs.core.nth.call(null,vec__88570_88872,(1),null);
var temp__6738__auto___88875 = _QMARK_sch_88873;
if(cljs.core.truth_(temp__6738__auto___88875)){
var sch_88876 = temp__6738__auto___88875;
taoensso.sente.interfaces.sch_close_BANG_.call(null,sch_88876);
} else {
}

var G__88877 = seq__88566_88868;
var G__88878 = chunk__88567_88869;
var G__88879 = count__88568_88870;
var G__88880 = (i__88569_88871 + (1));
seq__88566_88868 = G__88877;
chunk__88567_88869 = G__88878;
count__88568_88870 = G__88879;
i__88569_88871 = G__88880;
continue;
} else {
var temp__6738__auto___88881 = cljs.core.seq.call(null,seq__88566_88868);
if(temp__6738__auto___88881){
var seq__88566_88882__$1 = temp__6738__auto___88881;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__88566_88882__$1)){
var c__61810__auto___88883 = cljs.core.chunk_first.call(null,seq__88566_88882__$1);
var G__88884 = cljs.core.chunk_rest.call(null,seq__88566_88882__$1);
var G__88885 = c__61810__auto___88883;
var G__88886 = cljs.core.count.call(null,c__61810__auto___88883);
var G__88887 = (0);
seq__88566_88868 = G__88884;
chunk__88567_88869 = G__88885;
count__88568_88870 = G__88886;
i__88569_88871 = G__88887;
continue;
} else {
var vec__88573_88888 = cljs.core.first.call(null,seq__88566_88882__$1);
var _QMARK_sch_88889 = cljs.core.nth.call(null,vec__88573_88888,(0),null);
var _udt_88890 = cljs.core.nth.call(null,vec__88573_88888,(1),null);
var temp__6738__auto___88891__$1 = _QMARK_sch_88889;
if(cljs.core.truth_(temp__6738__auto___88891__$1)){
var sch_88892 = temp__6738__auto___88891__$1;
taoensso.sente.interfaces.sch_close_BANG_.call(null,sch_88892);
} else {
}

var G__88893 = cljs.core.next.call(null,seq__88566_88882__$1);
var G__88894 = null;
var G__88895 = (0);
var G__88896 = (0);
seq__88566_88868 = G__88893;
chunk__88567_88869 = G__88894;
count__88568_88870 = G__88895;
i__88569_88871 = G__88896;
continue;
}
} else {
}
}
break;
}
} else {
var seq__88576_88897 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"ajax","ajax",814345549)], null));
var chunk__88577_88898 = null;
var count__88578_88899 = (0);
var i__88579_88900 = (0);
while(true){
if((i__88579_88900 < count__88578_88899)){
var conn_type_88901 = cljs.core._nth.call(null,chunk__88577_88898,i__88579_88900);
taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type_88901,uid_88832], null),((function (seq__88576_88897,chunk__88577_88898,count__88578_88899,i__88579_88900,conn_type_88901,uid_88832,__88833,__88834__$1,__88835__$2,ev_uuid_88836,flush_buffer_BANG__88837,vec__88544,map__88547,map__88547__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
if(cljs.core.not.call(null,_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.createAsIfByAssoc([ev_uuid_88836])], null);
} else {
var vec__88580 = _QMARK_v;
var buffered_evs = cljs.core.nth.call(null,vec__88580,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__88580,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,buffered_evs,ev),cljs.core.conj.call(null,ev_uuids,ev_uuid_88836)], null);
}
});})(seq__88576_88897,chunk__88577_88898,count__88578_88899,i__88579_88900,conn_type_88901,uid_88832,__88833,__88834__$1,__88835__$2,ev_uuid_88836,flush_buffer_BANG__88837,vec__88544,map__88547,map__88547__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var G__88902 = seq__88576_88897;
var G__88903 = chunk__88577_88898;
var G__88904 = count__88578_88899;
var G__88905 = (i__88579_88900 + (1));
seq__88576_88897 = G__88902;
chunk__88577_88898 = G__88903;
count__88578_88899 = G__88904;
i__88579_88900 = G__88905;
continue;
} else {
var temp__6738__auto___88906 = cljs.core.seq.call(null,seq__88576_88897);
if(temp__6738__auto___88906){
var seq__88576_88907__$1 = temp__6738__auto___88906;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__88576_88907__$1)){
var c__61810__auto___88908 = cljs.core.chunk_first.call(null,seq__88576_88907__$1);
var G__88909 = cljs.core.chunk_rest.call(null,seq__88576_88907__$1);
var G__88910 = c__61810__auto___88908;
var G__88911 = cljs.core.count.call(null,c__61810__auto___88908);
var G__88912 = (0);
seq__88576_88897 = G__88909;
chunk__88577_88898 = G__88910;
count__88578_88899 = G__88911;
i__88579_88900 = G__88912;
continue;
} else {
var conn_type_88913 = cljs.core.first.call(null,seq__88576_88907__$1);
taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type_88913,uid_88832], null),((function (seq__88576_88897,chunk__88577_88898,count__88578_88899,i__88579_88900,conn_type_88913,seq__88576_88907__$1,temp__6738__auto___88906,uid_88832,__88833,__88834__$1,__88835__$2,ev_uuid_88836,flush_buffer_BANG__88837,vec__88544,map__88547,map__88547__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
if(cljs.core.not.call(null,_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.createAsIfByAssoc([ev_uuid_88836])], null);
} else {
var vec__88583 = _QMARK_v;
var buffered_evs = cljs.core.nth.call(null,vec__88583,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__88583,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,buffered_evs,ev),cljs.core.conj.call(null,ev_uuids,ev_uuid_88836)], null);
}
});})(seq__88576_88897,chunk__88577_88898,count__88578_88899,i__88579_88900,conn_type_88913,seq__88576_88907__$1,temp__6738__auto___88906,uid_88832,__88833,__88834__$1,__88835__$2,ev_uuid_88836,flush_buffer_BANG__88837,vec__88544,map__88547,map__88547__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var G__88914 = cljs.core.next.call(null,seq__88576_88907__$1);
var G__88915 = null;
var G__88916 = (0);
var G__88917 = (0);
seq__88576_88897 = G__88914;
chunk__88577_88898 = G__88915;
count__88578_88899 = G__88916;
i__88579_88900 = G__88917;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(flush_QMARK_)){
flush_buffer_BANG__88837.call(null,new cljs.core.Keyword(null,"ws","ws",86841443));

flush_buffer_BANG__88837.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549));
} else {
var ws_timeout_88918 = cljs.core.async.timeout.call(null,send_buf_ms_ws);
var ajax_timeout_88919 = cljs.core.async.timeout.call(null,send_buf_ms_ajax);
var c__69114__auto___88920 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__69114__auto___88920,ws_timeout_88918,ajax_timeout_88919,uid_88832,__88833,__88834__$1,__88835__$2,ev_uuid_88836,flush_buffer_BANG__88837,vec__88544,map__88547,map__88547__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__69115__auto__ = (function (){var switch__69000__auto__ = ((function (c__69114__auto___88920,ws_timeout_88918,ajax_timeout_88919,uid_88832,__88833,__88834__$1,__88835__$2,ev_uuid_88836,flush_buffer_BANG__88837,vec__88544,map__88547,map__88547__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_88590){
var state_val_88591 = (state_88590[(1)]);
if((state_val_88591 === (1))){
var state_88590__$1 = state_88590;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88590__$1,(2),ws_timeout_88918);
} else {
if((state_val_88591 === (2))){
var inst_88587 = (state_88590[(2)]);
var inst_88588 = flush_buffer_BANG__88837.call(null,new cljs.core.Keyword(null,"ws","ws",86841443));
var state_88590__$1 = (function (){var statearr_88592 = state_88590;
(statearr_88592[(7)] = inst_88587);

return statearr_88592;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_88590__$1,inst_88588);
} else {
return null;
}
}
});})(c__69114__auto___88920,ws_timeout_88918,ajax_timeout_88919,uid_88832,__88833,__88834__$1,__88835__$2,ev_uuid_88836,flush_buffer_BANG__88837,vec__88544,map__88547,map__88547__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__69000__auto__,c__69114__auto___88920,ws_timeout_88918,ajax_timeout_88919,uid_88832,__88833,__88834__$1,__88835__$2,ev_uuid_88836,flush_buffer_BANG__88837,vec__88544,map__88547,map__88547__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__69001__auto__ = null;
var taoensso$sente$state_machine__69001__auto____0 = (function (){
var statearr_88596 = [null,null,null,null,null,null,null,null];
(statearr_88596[(0)] = taoensso$sente$state_machine__69001__auto__);

(statearr_88596[(1)] = (1));

return statearr_88596;
});
var taoensso$sente$state_machine__69001__auto____1 = (function (state_88590){
while(true){
var ret_value__69002__auto__ = (function (){try{while(true){
var result__69003__auto__ = switch__69000__auto__.call(null,state_88590);
if(cljs.core.keyword_identical_QMARK_.call(null,result__69003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69003__auto__;
}
break;
}
}catch (e88597){if((e88597 instanceof Object)){
var ex__69004__auto__ = e88597;
var statearr_88598_88921 = state_88590;
(statearr_88598_88921[(5)] = ex__69004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_88590);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e88597;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__69002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88922 = state_88590;
state_88590 = G__88922;
continue;
} else {
return ret_value__69002__auto__;
}
break;
}
});
taoensso$sente$state_machine__69001__auto__ = function(state_88590){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__69001__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__69001__auto____1.call(this,state_88590);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$sente$state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__69001__auto____0;
taoensso$sente$state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__69001__auto____1;
return taoensso$sente$state_machine__69001__auto__;
})()
;})(switch__69000__auto__,c__69114__auto___88920,ws_timeout_88918,ajax_timeout_88919,uid_88832,__88833,__88834__$1,__88835__$2,ev_uuid_88836,flush_buffer_BANG__88837,vec__88544,map__88547,map__88547__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__69116__auto__ = (function (){var statearr_88599 = f__69115__auto__.call(null);
(statearr_88599[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__69114__auto___88920);

return statearr_88599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__69116__auto__);
});})(c__69114__auto___88920,ws_timeout_88918,ajax_timeout_88919,uid_88832,__88833,__88834__$1,__88835__$2,ev_uuid_88836,flush_buffer_BANG__88837,vec__88544,map__88547,map__88547__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);


var c__69114__auto___88923 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__69114__auto___88923,ws_timeout_88918,ajax_timeout_88919,uid_88832,__88833,__88834__$1,__88835__$2,ev_uuid_88836,flush_buffer_BANG__88837,vec__88544,map__88547,map__88547__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__69115__auto__ = (function (){var switch__69000__auto__ = ((function (c__69114__auto___88923,ws_timeout_88918,ajax_timeout_88919,uid_88832,__88833,__88834__$1,__88835__$2,ev_uuid_88836,flush_buffer_BANG__88837,vec__88544,map__88547,map__88547__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_88604){
var state_val_88605 = (state_88604[(1)]);
if((state_val_88605 === (1))){
var state_88604__$1 = state_88604;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88604__$1,(2),ajax_timeout_88919);
} else {
if((state_val_88605 === (2))){
var inst_88601 = (state_88604[(2)]);
var inst_88602 = flush_buffer_BANG__88837.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var state_88604__$1 = (function (){var statearr_88606 = state_88604;
(statearr_88606[(7)] = inst_88601);

return statearr_88606;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_88604__$1,inst_88602);
} else {
return null;
}
}
});})(c__69114__auto___88923,ws_timeout_88918,ajax_timeout_88919,uid_88832,__88833,__88834__$1,__88835__$2,ev_uuid_88836,flush_buffer_BANG__88837,vec__88544,map__88547,map__88547__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__69000__auto__,c__69114__auto___88923,ws_timeout_88918,ajax_timeout_88919,uid_88832,__88833,__88834__$1,__88835__$2,ev_uuid_88836,flush_buffer_BANG__88837,vec__88544,map__88547,map__88547__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__69001__auto__ = null;
var taoensso$sente$state_machine__69001__auto____0 = (function (){
var statearr_88610 = [null,null,null,null,null,null,null,null];
(statearr_88610[(0)] = taoensso$sente$state_machine__69001__auto__);

(statearr_88610[(1)] = (1));

return statearr_88610;
});
var taoensso$sente$state_machine__69001__auto____1 = (function (state_88604){
while(true){
var ret_value__69002__auto__ = (function (){try{while(true){
var result__69003__auto__ = switch__69000__auto__.call(null,state_88604);
if(cljs.core.keyword_identical_QMARK_.call(null,result__69003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69003__auto__;
}
break;
}
}catch (e88611){if((e88611 instanceof Object)){
var ex__69004__auto__ = e88611;
var statearr_88612_88924 = state_88604;
(statearr_88612_88924[(5)] = ex__69004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_88604);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e88611;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__69002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88925 = state_88604;
state_88604 = G__88925;
continue;
} else {
return ret_value__69002__auto__;
}
break;
}
});
taoensso$sente$state_machine__69001__auto__ = function(state_88604){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__69001__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__69001__auto____1.call(this,state_88604);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$sente$state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__69001__auto____0;
taoensso$sente$state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__69001__auto____1;
return taoensso$sente$state_machine__69001__auto__;
})()
;})(switch__69000__auto__,c__69114__auto___88923,ws_timeout_88918,ajax_timeout_88919,uid_88832,__88833,__88834__$1,__88835__$2,ev_uuid_88836,flush_buffer_BANG__88837,vec__88544,map__88547,map__88547__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__69116__auto__ = (function (){var statearr_88613 = f__69115__auto__.call(null);
(statearr_88613[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__69114__auto___88923);

return statearr_88613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__69116__auto__);
});})(c__69114__auto___88923,ws_timeout_88918,ajax_timeout_88919,uid_88832,__88833,__88834__$1,__88835__$2,ev_uuid_88836,flush_buffer_BANG__88837,vec__88544,map__88547,map__88547__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

}
}

return null;
};
var G__88831 = function (user_id,ev,var_args){
var p__88543 = null;
if (arguments.length > 2) {
var G__88926__i = 0, G__88926__a = new Array(arguments.length -  2);
while (G__88926__i < G__88926__a.length) {G__88926__a[G__88926__i] = arguments[G__88926__i + 2]; ++G__88926__i;}
  p__88543 = new cljs.core.IndexedSeq(G__88926__a,0,null);
} 
return G__88831__delegate.call(this,user_id,ev,p__88543);};
G__88831.cljs$lang$maxFixedArity = 2;
G__88831.cljs$lang$applyTo = (function (arglist__88927){
var user_id = cljs.core.first(arglist__88927);
arglist__88927 = cljs.core.next(arglist__88927);
var ev = cljs.core.first(arglist__88927);
var p__88543 = cljs.core.rest(arglist__88927);
return G__88831__delegate(user_id,ev,p__88543);
});
G__88831.cljs$core$IFn$_invoke$arity$variadic = G__88831__delegate;
return G__88831;
})()
;})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var ev_msg_const = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),connected_uids_], null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),connected_uids_,new cljs.core.Keyword(null,"ajax-post-fn","ajax-post-fn",1830071264),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req){
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp.call(null,web_server_ch_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_){
if(cljs.core.not.call(null,websocket_QMARK_)){
} else {
throw (new Error("Assert failed: (not websocket?)"));
}

var params = cljs.core.get.call(null,ring_req,new cljs.core.Keyword(null,"params","params",710516235));
var ppstr = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"ppstr","ppstr",1557495252));
var client_id = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var vec__88614 = taoensso.sente.unpack.call(null,packer__$1,ppstr);
var clj = cljs.core.nth.call(null,vec__88614,(0),null);
var has_cb_QMARK_ = cljs.core.nth.call(null,vec__88614,(1),null);
var reply_fn = (function (){var replied_QMARK__ = cljs.core.atom.call(null,false);
return ((function (replied_QMARK__,params,ppstr,client_id,vec__88614,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (resp_clj){
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_.call(null,replied_QMARK__,false,true))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init8382301926859034614.clj",521,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (replied_QMARK__,params,ppstr,client_id,vec__88614,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ajax post reply): %s",resp_clj], null);
});})(replied_QMARK__,params,ppstr,client_id,vec__88614,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-765257683);

return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,taoensso.sente.pack.call(null,packer__$1,cljs.core.meta.call(null,resp_clj),resp_clj));
} else {
return null;
}
});
;})(replied_QMARK__,params,ppstr,client_id,vec__88614,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_.call(null,ch_recv,cljs.core.merge.call(null,ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req,new cljs.core.Keyword(null,"event","event",301435442),clj,new cljs.core.Keyword(null,"uid","uid",-1447769400),user_id_fn__$1.call(null,ring_req,client_id),new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),(cljs.core.truth_(has_cb_QMARK_)?reply_fn:null)], null)));

if(cljs.core.truth_(has_cb_QMARK_)){
var temp__6738__auto__ = lp_timeout_ms;
if(cljs.core.truth_(temp__6738__auto__)){
var ms = temp__6738__auto__;
var c__69114__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__69114__auto__,ms,temp__6738__auto__,params,ppstr,client_id,vec__88614,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__69115__auto__ = (function (){var switch__69000__auto__ = ((function (c__69114__auto__,ms,temp__6738__auto__,params,ppstr,client_id,vec__88614,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_88622){
var state_val_88623 = (state_88622[(1)]);
if((state_val_88623 === (1))){
var inst_88617 = cljs.core.async.timeout.call(null,ms);
var state_88622__$1 = state_88622;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88622__$1,(2),inst_88617);
} else {
if((state_val_88623 === (2))){
var inst_88619 = (state_88622[(2)]);
var inst_88620 = reply_fn.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var state_88622__$1 = (function (){var statearr_88624 = state_88622;
(statearr_88624[(7)] = inst_88619);

return statearr_88624;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_88622__$1,inst_88620);
} else {
return null;
}
}
});})(c__69114__auto__,ms,temp__6738__auto__,params,ppstr,client_id,vec__88614,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__69000__auto__,c__69114__auto__,ms,temp__6738__auto__,params,ppstr,client_id,vec__88614,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__69001__auto__ = null;
var taoensso$sente$state_machine__69001__auto____0 = (function (){
var statearr_88628 = [null,null,null,null,null,null,null,null];
(statearr_88628[(0)] = taoensso$sente$state_machine__69001__auto__);

(statearr_88628[(1)] = (1));

return statearr_88628;
});
var taoensso$sente$state_machine__69001__auto____1 = (function (state_88622){
while(true){
var ret_value__69002__auto__ = (function (){try{while(true){
var result__69003__auto__ = switch__69000__auto__.call(null,state_88622);
if(cljs.core.keyword_identical_QMARK_.call(null,result__69003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69003__auto__;
}
break;
}
}catch (e88629){if((e88629 instanceof Object)){
var ex__69004__auto__ = e88629;
var statearr_88630_88928 = state_88622;
(statearr_88630_88928[(5)] = ex__69004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_88622);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e88629;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__69002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88929 = state_88622;
state_88622 = G__88929;
continue;
} else {
return ret_value__69002__auto__;
}
break;
}
});
taoensso$sente$state_machine__69001__auto__ = function(state_88622){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__69001__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__69001__auto____1.call(this,state_88622);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$sente$state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__69001__auto____0;
taoensso$sente$state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__69001__auto____1;
return taoensso$sente$state_machine__69001__auto__;
})()
;})(switch__69000__auto__,c__69114__auto__,ms,temp__6738__auto__,params,ppstr,client_id,vec__88614,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__69116__auto__ = (function (){var statearr_88631 = f__69115__auto__.call(null);
(statearr_88631[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__69114__auto__);

return statearr_88631;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__69116__auto__);
});})(c__69114__auto__,ms,temp__6738__auto__,params,ppstr,client_id,vec__88614,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__69114__auto__;
} else {
return null;
}
} else {
return reply_fn.call(null,new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337));
}
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null));
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"ajax-get-or-ws-handshake-fn","ajax-get-or-ws-handshake-fn",-1210409233),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req){
var sch_uuid = taoensso.encore.uuid_str.call(null,(6));
var params = cljs.core.get.call(null,ring_req,new cljs.core.Keyword(null,"params","params",710516235));
var client_id = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var csrf_token = csrf_token_fn.call(null,ring_req);
var uid = user_id_fn__$1.call(null,ring_req,client_id);
var receive_event_msg_BANG_ = ((function (sch_uuid,params,client_id,csrf_token,uid,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$self = null;
var taoensso$sente$self__1 = (function (event){
return taoensso$sente$self.call(null,event,null);
});
var taoensso$sente$self__2 = (function (event,_QMARK_reply_fn){
return taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_.call(null,ch_recv,cljs.core.merge.call(null,ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req,new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),_QMARK_reply_fn,new cljs.core.Keyword(null,"uid","uid",-1447769400),uid], null)));
});
taoensso$sente$self = function(event,_QMARK_reply_fn){
switch(arguments.length){
case 1:
return taoensso$sente$self__1.call(this,event);
case 2:
return taoensso$sente$self__2.call(this,event,_QMARK_reply_fn);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$sente$self.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$self__1;
taoensso$sente$self.cljs$core$IFn$_invoke$arity$2 = taoensso$sente$self__2;
return taoensso$sente$self;
})()
;})(sch_uuid,params,client_id,csrf_token,uid,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var send_handshake_BANG_ = ((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init8382301926859034614.clj",566,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-handshake!"], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,1339976298);

var _QMARK_handshake_data = handshake_data_fn.call(null,ring_req);
var handshake_ev = (((_QMARK_handshake_data == null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,csrf_token], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,csrf_token,_QMARK_handshake_data], null)], null));
return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,taoensso.sente.pack.call(null,packer__$1,null,handshake_ev));
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
if(clojure.string.blank_QMARK_.call(null,client_id)){
var err_msg = "Client's Ring request doesn't have a client id. Does your server have the necessary keyword Ring middleware (`wrap-params` & `wrap-keyword-params`)?";
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/tmp/form-init8382301926859034614.clj",577,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (err_msg,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(err_msg),cljs.core.str.cljs$core$IFn$_invoke$arity$1(": %s")].join(''),ring_req], null);
});})(err_msg,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-421225751);

throw cljs.core.ex_info.call(null,err_msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req], null));
} else {
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp.call(null,web_server_ch_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_){
if(cljs.core.truth_(websocket_QMARK_)){
var _ = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init8382301926859034614.clj",586,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New WebSocket channel: %s (%s)",uid,sch_uuid], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-2052058764);
var updated_conn = upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id,server_ch);
var udt_open = new cljs.core.Keyword(null,"udt","udt",2011712751).cljs$core$IFn$_invoke$arity$1(updated_conn);
if(cljs.core.truth_(connect_uid_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid))){
receive_event_msg_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","uidport-open","chsk/uidport-open",1685786954),uid], null));
} else {
}

send_handshake_BANG_.call(null,server_ch,websocket_QMARK_);

var temp__6738__auto__ = ws_kalive_ms;
if(cljs.core.truth_(temp__6738__auto__)){
var ms = temp__6738__auto__;
var c__69114__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__69114__auto__,ms,temp__6738__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__69115__auto__ = (function (){var switch__69000__auto__ = ((function (c__69114__auto__,ms,temp__6738__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_88667){
var state_val_88668 = (state_88667[(1)]);
if((state_val_88668 === (7))){
var inst_88663 = (state_88667[(2)]);
var state_88667__$1 = state_88667;
var statearr_88669_88930 = state_88667__$1;
(statearr_88669_88930[(2)] = inst_88663);

(statearr_88669_88930[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88668 === (1))){
var inst_88632 = udt_open;
var state_88667__$1 = (function (){var statearr_88670 = state_88667;
(statearr_88670[(7)] = inst_88632);

return statearr_88670;
})();
var statearr_88671_88931 = state_88667__$1;
(statearr_88671_88931[(2)] = null);

(statearr_88671_88931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88668 === (4))){
var inst_88641 = (state_88667[(8)]);
var inst_88636 = (state_88667[(2)]);
var inst_88637 = cljs.core.deref.call(null,conns_);
var inst_88638 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_88639 = [new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id];
var inst_88640 = (new cljs.core.PersistentVector(null,3,(5),inst_88638,inst_88639,null));
var inst_88641__$1 = cljs.core.get_in.call(null,inst_88637,inst_88640);
var state_88667__$1 = (function (){var statearr_88672 = state_88667;
(statearr_88672[(9)] = inst_88636);

(statearr_88672[(8)] = inst_88641__$1);

return statearr_88672;
})();
if(cljs.core.truth_(inst_88641__$1)){
var statearr_88673_88932 = state_88667__$1;
(statearr_88673_88932[(1)] = (5));

} else {
var statearr_88674_88933 = state_88667__$1;
(statearr_88674_88933[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88668 === (13))){
var inst_88647 = (state_88667[(10)]);
var inst_88656 = (state_88667[(2)]);
var inst_88632 = inst_88647;
var state_88667__$1 = (function (){var statearr_88675 = state_88667;
(statearr_88675[(11)] = inst_88656);

(statearr_88675[(7)] = inst_88632);

return statearr_88675;
})();
var statearr_88676_88934 = state_88667__$1;
(statearr_88676_88934[(2)] = null);

(statearr_88676_88934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88668 === (6))){
var state_88667__$1 = state_88667;
var statearr_88677_88935 = state_88667__$1;
(statearr_88677_88935[(2)] = null);

(statearr_88677_88935[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88668 === (3))){
var inst_88665 = (state_88667[(2)]);
var state_88667__$1 = state_88667;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_88667__$1,inst_88665);
} else {
if((state_val_88668 === (12))){
var state_88667__$1 = state_88667;
var statearr_88678_88936 = state_88667__$1;
(statearr_88678_88936[(2)] = null);

(statearr_88678_88936[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88668 === (2))){
var inst_88634 = cljs.core.async.timeout.call(null,ms);
var state_88667__$1 = state_88667;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88667__$1,(4),inst_88634);
} else {
if((state_val_88668 === (11))){
var inst_88652 = taoensso.sente.pack.call(null,packer__$1,null,new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304));
var inst_88653 = taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,inst_88652);
var state_88667__$1 = state_88667;
var statearr_88679_88937 = state_88667__$1;
(statearr_88679_88937[(2)] = inst_88653);

(statearr_88679_88937[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88668 === (9))){
var state_88667__$1 = state_88667;
var statearr_88680_88938 = state_88667__$1;
(statearr_88680_88938[(2)] = null);

(statearr_88680_88938[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88668 === (5))){
var inst_88641 = (state_88667[(8)]);
var inst_88646 = cljs.core.nth.call(null,inst_88641,(0),null);
var inst_88647 = cljs.core.nth.call(null,inst_88641,(1),null);
var inst_88648 = taoensso.sente.interfaces.sch_open_QMARK_.call(null,server_ch);
var state_88667__$1 = (function (){var statearr_88681 = state_88667;
(statearr_88681[(10)] = inst_88647);

(statearr_88681[(12)] = inst_88646);

return statearr_88681;
})();
if(cljs.core.truth_(inst_88648)){
var statearr_88682_88939 = state_88667__$1;
(statearr_88682_88939[(1)] = (8));

} else {
var statearr_88683_88940 = state_88667__$1;
(statearr_88683_88940[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88668 === (10))){
var inst_88660 = (state_88667[(2)]);
var state_88667__$1 = state_88667;
var statearr_88684_88941 = state_88667__$1;
(statearr_88684_88941[(2)] = inst_88660);

(statearr_88684_88941[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88668 === (8))){
var inst_88647 = (state_88667[(10)]);
var inst_88632 = (state_88667[(7)]);
var inst_88650 = cljs.core._EQ_.call(null,inst_88647,inst_88632);
var state_88667__$1 = state_88667;
if(inst_88650){
var statearr_88685_88942 = state_88667__$1;
(statearr_88685_88942[(1)] = (11));

} else {
var statearr_88686_88943 = state_88667__$1;
(statearr_88686_88943[(1)] = (12));

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
});})(c__69114__auto__,ms,temp__6738__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__69000__auto__,c__69114__auto__,ms,temp__6738__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__69001__auto__ = null;
var taoensso$sente$state_machine__69001__auto____0 = (function (){
var statearr_88690 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_88690[(0)] = taoensso$sente$state_machine__69001__auto__);

(statearr_88690[(1)] = (1));

return statearr_88690;
});
var taoensso$sente$state_machine__69001__auto____1 = (function (state_88667){
while(true){
var ret_value__69002__auto__ = (function (){try{while(true){
var result__69003__auto__ = switch__69000__auto__.call(null,state_88667);
if(cljs.core.keyword_identical_QMARK_.call(null,result__69003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69003__auto__;
}
break;
}
}catch (e88691){if((e88691 instanceof Object)){
var ex__69004__auto__ = e88691;
var statearr_88692_88944 = state_88667;
(statearr_88692_88944[(5)] = ex__69004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_88667);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e88691;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__69002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88945 = state_88667;
state_88667 = G__88945;
continue;
} else {
return ret_value__69002__auto__;
}
break;
}
});
taoensso$sente$state_machine__69001__auto__ = function(state_88667){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__69001__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__69001__auto____1.call(this,state_88667);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$sente$state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__69001__auto____0;
taoensso$sente$state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__69001__auto____1;
return taoensso$sente$state_machine__69001__auto__;
})()
;})(switch__69000__auto__,c__69114__auto__,ms,temp__6738__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__69116__auto__ = (function (){var statearr_88693 = f__69115__auto__.call(null);
(statearr_88693[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__69114__auto__);

return statearr_88693;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__69116__auto__);
});})(c__69114__auto__,ms,temp__6738__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__69114__auto__;
} else {
return null;
}
} else {
var _ = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init8382301926859034614.clj",615,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New Ajax handshake/poll: %s (%s)",uid,sch_uuid], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-484506798);
var updated_conn = upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549),uid,client_id,server_ch);
var udt_open = new cljs.core.Keyword(null,"udt","udt",2011712751).cljs$core$IFn$_invoke$arity$1(updated_conn);
var handshake_QMARK_ = (function (){var or__60899__auto__ = new cljs.core.Keyword(null,"init?","init?",438181499).cljs$core$IFn$_invoke$arity$1(updated_conn);
if(cljs.core.truth_(or__60899__auto__)){
return or__60899__auto__;
} else {
return new cljs.core.Keyword(null,"handshake?","handshake?",-423743093).cljs$core$IFn$_invoke$arity$1(params);
}
})();
if(cljs.core.truth_(connect_uid_BANG_.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549),uid))){
receive_event_msg_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","uidport-open","chsk/uidport-open",1685786954),uid], null));
} else {
}

if(cljs.core.truth_(handshake_QMARK_)){
return send_handshake_BANG_.call(null,server_ch,websocket_QMARK_);
} else {
var temp__6738__auto__ = lp_timeout_ms;
if(cljs.core.truth_(temp__6738__auto__)){
var ms = temp__6738__auto__;
var c__69114__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__69114__auto__,ms,temp__6738__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__69115__auto__ = (function (){var switch__69000__auto__ = ((function (c__69114__auto__,ms,temp__6738__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_88719){
var state_val_88720 = (state_88719[(1)]);
if((state_val_88720 === (1))){
var inst_88694 = cljs.core.async.timeout.call(null,ms);
var state_88719__$1 = state_88719;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88719__$1,(2),inst_88694);
} else {
if((state_val_88720 === (2))){
var inst_88701 = (state_88719[(7)]);
var inst_88696 = (state_88719[(2)]);
var inst_88697 = cljs.core.deref.call(null,conns_);
var inst_88698 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_88699 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid,client_id];
var inst_88700 = (new cljs.core.PersistentVector(null,3,(5),inst_88698,inst_88699,null));
var inst_88701__$1 = cljs.core.get_in.call(null,inst_88697,inst_88700);
var state_88719__$1 = (function (){var statearr_88721 = state_88719;
(statearr_88721[(7)] = inst_88701__$1);

(statearr_88721[(8)] = inst_88696);

return statearr_88721;
})();
if(cljs.core.truth_(inst_88701__$1)){
var statearr_88722_88946 = state_88719__$1;
(statearr_88722_88946[(1)] = (3));

} else {
var statearr_88723_88947 = state_88719__$1;
(statearr_88723_88947[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88720 === (3))){
var inst_88701 = (state_88719[(7)]);
var inst_88706 = cljs.core.nth.call(null,inst_88701,(0),null);
var inst_88707 = cljs.core.nth.call(null,inst_88701,(1),null);
var inst_88708 = cljs.core._EQ_.call(null,inst_88707,udt_open);
var state_88719__$1 = (function (){var statearr_88724 = state_88719;
(statearr_88724[(9)] = inst_88706);

return statearr_88724;
})();
if(inst_88708){
var statearr_88725_88948 = state_88719__$1;
(statearr_88725_88948[(1)] = (6));

} else {
var statearr_88726_88949 = state_88719__$1;
(statearr_88726_88949[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88720 === (4))){
var state_88719__$1 = state_88719;
var statearr_88727_88950 = state_88719__$1;
(statearr_88727_88950[(2)] = null);

(statearr_88727_88950[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88720 === (5))){
var inst_88717 = (state_88719[(2)]);
var state_88719__$1 = state_88719;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_88719__$1,inst_88717);
} else {
if((state_val_88720 === (6))){
var inst_88710 = taoensso.sente.pack.call(null,packer__$1,null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var inst_88711 = taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,inst_88710);
var state_88719__$1 = state_88719;
var statearr_88728_88951 = state_88719__$1;
(statearr_88728_88951[(2)] = inst_88711);

(statearr_88728_88951[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88720 === (7))){
var state_88719__$1 = state_88719;
var statearr_88729_88952 = state_88719__$1;
(statearr_88729_88952[(2)] = null);

(statearr_88729_88952[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88720 === (8))){
var inst_88714 = (state_88719[(2)]);
var state_88719__$1 = state_88719;
var statearr_88730_88953 = state_88719__$1;
(statearr_88730_88953[(2)] = inst_88714);

(statearr_88730_88953[(1)] = (5));


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
});})(c__69114__auto__,ms,temp__6738__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__69000__auto__,c__69114__auto__,ms,temp__6738__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__69001__auto__ = null;
var taoensso$sente$state_machine__69001__auto____0 = (function (){
var statearr_88734 = [null,null,null,null,null,null,null,null,null,null];
(statearr_88734[(0)] = taoensso$sente$state_machine__69001__auto__);

(statearr_88734[(1)] = (1));

return statearr_88734;
});
var taoensso$sente$state_machine__69001__auto____1 = (function (state_88719){
while(true){
var ret_value__69002__auto__ = (function (){try{while(true){
var result__69003__auto__ = switch__69000__auto__.call(null,state_88719);
if(cljs.core.keyword_identical_QMARK_.call(null,result__69003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69003__auto__;
}
break;
}
}catch (e88735){if((e88735 instanceof Object)){
var ex__69004__auto__ = e88735;
var statearr_88736_88954 = state_88719;
(statearr_88736_88954[(5)] = ex__69004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_88719);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e88735;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__69002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88955 = state_88719;
state_88719 = G__88955;
continue;
} else {
return ret_value__69002__auto__;
}
break;
}
});
taoensso$sente$state_machine__69001__auto__ = function(state_88719){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__69001__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__69001__auto____1.call(this,state_88719);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$sente$state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__69001__auto____0;
taoensso$sente$state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__69001__auto____1;
return taoensso$sente$state_machine__69001__auto__;
})()
;})(switch__69000__auto__,c__69114__auto__,ms,temp__6738__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__69116__auto__ = (function (){var statearr_88737 = f__69115__auto__.call(null);
(statearr_88737[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__69114__auto__);

return statearr_88737;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__69116__auto__);
});})(c__69114__auto__,ms,temp__6738__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__69114__auto__;
} else {
return null;
}
}
}
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"on-msg","on-msg",-2021925279),((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_,req_ppstr){
if(cljs.core.truth_(websocket_QMARK_)){
} else {
throw (new Error("Assert failed: websocket?"));
}

upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id);

var vec__88738 = taoensso.sente.unpack.call(null,packer__$1,req_ppstr);
var clj = cljs.core.nth.call(null,vec__88738,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__88738,(1),null);
return receive_event_msg_BANG_.call(null,clj,(cljs.core.truth_(_QMARK_cb_uuid)?((function (vec__88738,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function taoensso$sente$reply_fn(resp_clj){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init8382301926859034614.clj",645,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__88738,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ws reply): %s",resp_clj], null);
});})(vec__88738,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,261532277);

return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,taoensso.sente.pack.call(null,packer__$1,cljs.core.meta.call(null,resp_clj),resp_clj,_QMARK_cb_uuid));
});})(vec__88738,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
:null));
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"on-close","on-close",-761178394),((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_,_status){
var conn_type = (cljs.core.truth_(websocket_QMARK_)?new cljs.core.Keyword(null,"ws","ws",86841443):new cljs.core.Keyword(null,"ajax","ajax",814345549));
var _ = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init8382301926859034614.clj",654,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (conn_type,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["%s channel closed: %s (%s)",(cljs.core.truth_(websocket_QMARK_)?"WebSocket":"Ajax"),uid,sch_uuid], null);
});})(conn_type,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-195253760);
var updated_conn = upd_conn_BANG_.call(null,conn_type,uid,client_id,null);
var udt_close = new cljs.core.Keyword(null,"udt","udt",2011712751).cljs$core$IFn$_invoke$arity$1(updated_conn);
var c__69114__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__69114__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__69115__auto__ = (function (){var switch__69000__auto__ = ((function (c__69114__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_88792){
var state_val_88793 = (state_88792[(1)]);
if((state_val_88793 === (7))){
var state_88792__$1 = state_88792;
var statearr_88794_88956 = state_88792__$1;
(statearr_88794_88956[(2)] = null);

(statearr_88794_88956[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88793 === (1))){
var inst_88741 = cljs.core.async.timeout.call(null,(5000));
var state_88792__$1 = state_88792;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88792__$1,(2),inst_88741);
} else {
if((state_val_88793 === (4))){
var state_88792__$1 = state_88792;
var statearr_88795_88957 = state_88792__$1;
(statearr_88795_88957[(2)] = null);

(statearr_88795_88957[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88793 === (13))){
var state_88792__$1 = state_88792;
var statearr_88796_88958 = state_88792__$1;
(statearr_88796_88958[(2)] = null);

(statearr_88796_88958[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88793 === (6))){
var inst_88753 = (state_88792[(7)]);
var inst_88752 = (state_88792[(8)]);
var inst_88769 = (state_88792[(9)]);
var inst_88751 = (state_88792[(10)]);
var inst_88764 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_88765 = [conn_type,uid,client_id];
var inst_88766 = (new cljs.core.PersistentVector(null,3,(5),inst_88764,inst_88765,null));
var inst_88768 = (function (){var vec__88744 = inst_88751;
var __QMARK_sch = inst_88752;
var udt_t1 = inst_88753;
return ((function (vec__88744,__QMARK_sch,udt_t1,inst_88753,inst_88752,inst_88769,inst_88751,inst_88764,inst_88765,inst_88766,state_val_88793,c__69114__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__88767){
var vec__88797 = p__88767;
var _sch = cljs.core.nth.call(null,vec__88797,(0),null);
var udt_t1__$1 = cljs.core.nth.call(null,vec__88797,(1),null);
if(cljs.core._EQ_.call(null,udt_t1__$1,udt_close)){
return taoensso.encore.swapped.call(null,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782),true);
} else {
return taoensso.encore.swapped.call(null,udt_t1__$1,false);
}
});
;})(vec__88744,__QMARK_sch,udt_t1,inst_88753,inst_88752,inst_88769,inst_88751,inst_88764,inst_88765,inst_88766,state_val_88793,c__69114__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var inst_88769__$1 = taoensso.encore.swap_in_BANG_.call(null,conns_,inst_88766,inst_88768);
var state_88792__$1 = (function (){var statearr_88800 = state_88792;
(statearr_88800[(9)] = inst_88769__$1);

return statearr_88800;
})();
if(cljs.core.truth_(inst_88769__$1)){
var statearr_88801_88959 = state_88792__$1;
(statearr_88801_88959[(1)] = (9));

} else {
var statearr_88802_88960 = state_88792__$1;
(statearr_88802_88960[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88793 === (3))){
var inst_88753 = (state_88792[(7)]);
var inst_88752 = (state_88792[(8)]);
var inst_88751 = (state_88792[(10)]);
var inst_88756 = (function (){var vec__88744 = inst_88751;
var __QMARK_sch = inst_88752;
var udt_t1 = inst_88753;
return ((function (vec__88744,__QMARK_sch,udt_t1,inst_88753,inst_88752,inst_88751,state_val_88793,c__69114__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["close-timeout: %s %s %s %s",conn_type,uid,sch_uuid,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._EQ_.call(null,udt_t1,udt_close),udt_t1,udt_close], null)], null);
});
;})(vec__88744,__QMARK_sch,udt_t1,inst_88753,inst_88752,inst_88751,state_val_88793,c__69114__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var inst_88757 = (new cljs.core.Delay(inst_88756,null));
var inst_88758 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/tmp/form-init8382301926859034614.clj",668,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_88757,null,-1806543331);
var state_88792__$1 = state_88792;
var statearr_88803_88961 = state_88792__$1;
(statearr_88803_88961[(2)] = inst_88758);

(statearr_88803_88961[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88793 === (12))){
var inst_88778 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_88779 = [new cljs.core.Keyword("chsk","uidport-close","chsk/uidport-close",901058678),uid];
var inst_88780 = (new cljs.core.PersistentVector(null,2,(5),inst_88778,inst_88779,null));
var inst_88781 = receive_event_msg_BANG_.call(null,inst_88780);
var state_88792__$1 = state_88792;
var statearr_88804_88962 = state_88792__$1;
(statearr_88804_88962[(2)] = inst_88781);

(statearr_88804_88962[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88793 === (2))){
var inst_88751 = (state_88792[(10)]);
var inst_88743 = (state_88792[(2)]);
var inst_88747 = cljs.core.deref.call(null,conns_);
var inst_88748 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_88749 = [conn_type,uid,client_id];
var inst_88750 = (new cljs.core.PersistentVector(null,3,(5),inst_88748,inst_88749,null));
var inst_88751__$1 = cljs.core.get_in.call(null,inst_88747,inst_88750);
var inst_88752 = cljs.core.nth.call(null,inst_88751__$1,(0),null);
var inst_88753 = cljs.core.nth.call(null,inst_88751__$1,(1),null);
var inst_88754 = cljs.core.deref.call(null,taoensso.sente.debug_mode_QMARK__);
var state_88792__$1 = (function (){var statearr_88805 = state_88792;
(statearr_88805[(7)] = inst_88753);

(statearr_88805[(11)] = inst_88743);

(statearr_88805[(8)] = inst_88752);

(statearr_88805[(10)] = inst_88751__$1);

return statearr_88805;
})();
if(cljs.core.truth_(inst_88754)){
var statearr_88806_88963 = state_88792__$1;
(statearr_88806_88963[(1)] = (3));

} else {
var statearr_88807_88964 = state_88792__$1;
(statearr_88807_88964[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88793 === (11))){
var inst_88787 = (state_88792[(2)]);
var state_88792__$1 = state_88792;
var statearr_88808_88965 = state_88792__$1;
(statearr_88808_88965[(2)] = inst_88787);

(statearr_88808_88965[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88793 === (9))){
var inst_88753 = (state_88792[(7)]);
var inst_88752 = (state_88792[(8)]);
var inst_88769 = (state_88792[(9)]);
var inst_88751 = (state_88792[(10)]);
var inst_88771 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_88772 = [conn_type,uid];
var inst_88773 = (new cljs.core.PersistentVector(null,2,(5),inst_88771,inst_88772,null));
var inst_88774 = (function (){var vec__88744 = inst_88751;
var __QMARK_sch = inst_88752;
var udt_t1 = inst_88753;
var disconnect_QMARK_ = inst_88769;
return ((function (vec__88744,__QMARK_sch,udt_t1,disconnect_QMARK_,inst_88753,inst_88752,inst_88769,inst_88751,inst_88771,inst_88772,inst_88773,state_val_88793,c__69114__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_m){
if(cljs.core.empty_QMARK_.call(null,_QMARK_m)){
return new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782);
} else {
return _QMARK_m;
}
});
;})(vec__88744,__QMARK_sch,udt_t1,disconnect_QMARK_,inst_88753,inst_88752,inst_88769,inst_88751,inst_88771,inst_88772,inst_88773,state_val_88793,c__69114__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var inst_88775 = taoensso.encore.swap_in_BANG_.call(null,conns_,inst_88773,inst_88774);
var inst_88776 = upd_connected_uid_BANG_.call(null,uid);
var state_88792__$1 = (function (){var statearr_88809 = state_88792;
(statearr_88809[(12)] = inst_88775);

return statearr_88809;
})();
if(cljs.core.truth_(inst_88776)){
var statearr_88810_88966 = state_88792__$1;
(statearr_88810_88966[(1)] = (12));

} else {
var statearr_88811_88967 = state_88792__$1;
(statearr_88811_88967[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88793 === (5))){
var inst_88753 = (state_88792[(7)]);
var inst_88761 = (state_88792[(2)]);
var inst_88762 = cljs.core._EQ_.call(null,inst_88753,udt_close);
var state_88792__$1 = (function (){var statearr_88812 = state_88792;
(statearr_88812[(13)] = inst_88761);

return statearr_88812;
})();
if(inst_88762){
var statearr_88813_88968 = state_88792__$1;
(statearr_88813_88968[(1)] = (6));

} else {
var statearr_88814_88969 = state_88792__$1;
(statearr_88814_88969[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88793 === (14))){
var inst_88784 = (state_88792[(2)]);
var state_88792__$1 = state_88792;
var statearr_88815_88970 = state_88792__$1;
(statearr_88815_88970[(2)] = inst_88784);

(statearr_88815_88970[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88793 === (10))){
var state_88792__$1 = state_88792;
var statearr_88816_88971 = state_88792__$1;
(statearr_88816_88971[(2)] = null);

(statearr_88816_88971[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88793 === (8))){
var inst_88790 = (state_88792[(2)]);
var state_88792__$1 = state_88792;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_88792__$1,inst_88790);
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
});})(c__69114__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__69000__auto__,c__69114__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__69001__auto__ = null;
var taoensso$sente$state_machine__69001__auto____0 = (function (){
var statearr_88820 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_88820[(0)] = taoensso$sente$state_machine__69001__auto__);

(statearr_88820[(1)] = (1));

return statearr_88820;
});
var taoensso$sente$state_machine__69001__auto____1 = (function (state_88792){
while(true){
var ret_value__69002__auto__ = (function (){try{while(true){
var result__69003__auto__ = switch__69000__auto__.call(null,state_88792);
if(cljs.core.keyword_identical_QMARK_.call(null,result__69003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69003__auto__;
}
break;
}
}catch (e88821){if((e88821 instanceof Object)){
var ex__69004__auto__ = e88821;
var statearr_88822_88972 = state_88792;
(statearr_88822_88972[(5)] = ex__69004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_88792);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e88821;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__69002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88973 = state_88792;
state_88792 = G__88973;
continue;
} else {
return ret_value__69002__auto__;
}
break;
}
});
taoensso$sente$state_machine__69001__auto__ = function(state_88792){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__69001__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__69001__auto____1.call(this,state_88792);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$sente$state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__69001__auto____0;
taoensso$sente$state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__69001__auto____1;
return taoensso$sente$state_machine__69001__auto__;
})()
;})(switch__69000__auto__,c__69114__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__69116__auto__ = (function (){var statearr_88823 = f__69115__auto__.call(null);
(statearr_88823[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__69114__auto__);

return statearr_88823;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__69116__auto__);
});})(c__69114__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__69114__auto__;
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"on-error","on-error",1728533530),((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_,error){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/tmp/form-init8382301926859034614.clj",690,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ring-req->server-ch-resp error: %s (%s)",error,uid,sch_uuid], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,1258180977);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null));
}
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__88522,map__88525,map__88525__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null);
});

taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$applyTo = (function (seq88519){
var G__88520 = cljs.core.first.call(null,seq88519);
var seq88519__$1 = cljs.core.next.call(null,seq88519);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__88520,seq88519__$1);
});

/**
 * Actually pushes buffered events (as packed-str) to all uid's WebSocket conns.
 */
taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_ = (function taoensso$sente$send_buffered_server_evs_GT_ws_clients_BANG_(conns_,uid,buffered_evs_pstr,upd_conn_BANG_){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init8382301926859034614.clj",696,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ws-clients!: %s",buffered_evs_pstr], null);
}),null)),null,901791861);

var seq__88990 = cljs.core.seq.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid], null)));
var chunk__88991 = null;
var count__88992 = (0);
var i__88993 = (0);
while(true){
if((i__88993 < count__88992)){
var vec__88994 = cljs.core._nth.call(null,chunk__88991,i__88993);
var client_id = cljs.core.nth.call(null,vec__88994,(0),null);
var vec__88997 = cljs.core.nth.call(null,vec__88994,(1),null);
var _QMARK_sch = cljs.core.nth.call(null,vec__88997,(0),null);
var _udt = cljs.core.nth.call(null,vec__88997,(1),null);
var temp__6738__auto___89006 = _QMARK_sch;
if(cljs.core.truth_(temp__6738__auto___89006)){
var sch_89007 = temp__6738__auto___89006;
upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id);

taoensso.sente.interfaces.sch_send_BANG_.call(null,sch_89007,new cljs.core.Keyword(null,"websocket","websocket",-1714963101),buffered_evs_pstr);
} else {
}

var G__89008 = seq__88990;
var G__89009 = chunk__88991;
var G__89010 = count__88992;
var G__89011 = (i__88993 + (1));
seq__88990 = G__89008;
chunk__88991 = G__89009;
count__88992 = G__89010;
i__88993 = G__89011;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__88990);
if(temp__6738__auto__){
var seq__88990__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__88990__$1)){
var c__61810__auto__ = cljs.core.chunk_first.call(null,seq__88990__$1);
var G__89012 = cljs.core.chunk_rest.call(null,seq__88990__$1);
var G__89013 = c__61810__auto__;
var G__89014 = cljs.core.count.call(null,c__61810__auto__);
var G__89015 = (0);
seq__88990 = G__89012;
chunk__88991 = G__89013;
count__88992 = G__89014;
i__88993 = G__89015;
continue;
} else {
var vec__89000 = cljs.core.first.call(null,seq__88990__$1);
var client_id = cljs.core.nth.call(null,vec__89000,(0),null);
var vec__89003 = cljs.core.nth.call(null,vec__89000,(1),null);
var _QMARK_sch = cljs.core.nth.call(null,vec__89003,(0),null);
var _udt = cljs.core.nth.call(null,vec__89003,(1),null);
var temp__6738__auto___89016__$1 = _QMARK_sch;
if(cljs.core.truth_(temp__6738__auto___89016__$1)){
var sch_89017 = temp__6738__auto___89016__$1;
upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id);

taoensso.sente.interfaces.sch_send_BANG_.call(null,sch_89017,new cljs.core.Keyword(null,"websocket","websocket",-1714963101),buffered_evs_pstr);
} else {
}

var G__89018 = cljs.core.next.call(null,seq__88990__$1);
var G__89019 = null;
var G__89020 = (0);
var G__89021 = (0);
seq__88990 = G__89018;
chunk__88991 = G__89019;
count__88992 = G__89020;
i__88993 = G__89021;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Actually pushes buffered events (as packed-str) to all uid's Ajax conns.
 *   Allows some time for possible Ajax poller reconnects.
 */
taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_ = (function taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG_(conns_,uid,buffered_evs_pstr){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init8382301926859034614.clj",706,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ajax-clients!: %s",buffered_evs_pstr], null);
}),null)),null,538252871);

var ms_backoffs = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(90),(180),(360),(720),(1440)], null);
var client_ids_unsatisfied = cljs.core.keys.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid], null)));
if(cljs.core.empty_QMARK_.call(null,client_ids_unsatisfied)){
return null;
} else {
var c__69114__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__69114__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (){
var f__69115__auto__ = (function (){var switch__69000__auto__ = ((function (c__69114__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (state_89152){
var state_val_89153 = (state_89152[(1)]);
if((state_val_89153 === (7))){
var inst_89107 = (state_89152[(7)]);
var inst_89114 = (state_89152[(8)]);
var inst_89108 = (state_89152[(9)]);
var inst_89124 = (function (){var n = inst_89107;
var client_ids_satisfied = inst_89108;
var _QMARK_pulled = inst_89114;
return ((function (n,client_ids_satisfied,_QMARK_pulled,inst_89107,inst_89114,inst_89108,state_val_89153,c__69114__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (s,client_id,p__89123){
var vec__89154 = p__89123;
var _QMARK_sch = cljs.core.nth.call(null,vec__89154,(0),null);
var _udt = cljs.core.nth.call(null,vec__89154,(1),null);
var sent_QMARK_ = (function (){var temp__6738__auto__ = _QMARK_sch;
if(cljs.core.truth_(temp__6738__auto__)){
var sch = temp__6738__auto__;
return taoensso.sente.interfaces.sch_send_BANG_.call(null,_QMARK_sch,cljs.core.not.call(null,new cljs.core.Keyword(null,"websocket","websocket",-1714963101)),buffered_evs_pstr);
} else {
return null;
}
})();
if(cljs.core.truth_(sent_QMARK_)){
return cljs.core.conj.call(null,s,client_id);
} else {
return s;
}
});
;})(n,client_ids_satisfied,_QMARK_pulled,inst_89107,inst_89114,inst_89108,state_val_89153,c__69114__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var inst_89125 = cljs.core.PersistentHashSet.EMPTY;
var inst_89126 = cljs.core.reduce_kv.call(null,inst_89124,inst_89125,inst_89114);
var state_89152__$1 = state_89152;
var statearr_89157_89190 = state_89152__$1;
(statearr_89157_89190[(2)] = inst_89126);

(statearr_89157_89190[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89153 === (1))){
var inst_89106 = cljs.core.PersistentHashSet.EMPTY;
var inst_89107 = (0);
var inst_89108 = inst_89106;
var state_89152__$1 = (function (){var statearr_89158 = state_89152;
(statearr_89158[(7)] = inst_89107);

(statearr_89158[(9)] = inst_89108);

return statearr_89158;
})();
var statearr_89159_89191 = state_89152__$1;
(statearr_89159_89191[(2)] = null);

(statearr_89159_89191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89153 === (4))){
var state_89152__$1 = state_89152;
var statearr_89160_89192 = state_89152__$1;
(statearr_89160_89192[(2)] = true);

(statearr_89160_89192[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89153 === (15))){
var inst_89145 = (state_89152[(2)]);
var state_89152__$1 = state_89152;
var statearr_89161_89193 = state_89152__$1;
(statearr_89161_89193[(2)] = inst_89145);

(statearr_89161_89193[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89153 === (13))){
var inst_89131 = (state_89152[(10)]);
var inst_89136 = cljs.core.rand_int.call(null,inst_89131);
var inst_89137 = (inst_89131 + inst_89136);
var inst_89138 = cljs.core.async.timeout.call(null,inst_89137);
var state_89152__$1 = state_89152;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_89152__$1,(16),inst_89138);
} else {
if((state_val_89153 === (6))){
var inst_89114 = (state_89152[(8)]);
var inst_89121 = (state_89152[(2)]);
var state_89152__$1 = (function (){var statearr_89162 = state_89152;
(statearr_89162[(11)] = inst_89121);

return statearr_89162;
})();
if(cljs.core.truth_(inst_89114)){
var statearr_89163_89194 = state_89152__$1;
(statearr_89163_89194[(1)] = (7));

} else {
var statearr_89164_89195 = state_89152__$1;
(statearr_89164_89195[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89153 === (3))){
var inst_89150 = (state_89152[(2)]);
var state_89152__$1 = state_89152;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_89152__$1,inst_89150);
} else {
if((state_val_89153 === (12))){
var inst_89148 = (state_89152[(2)]);
var state_89152__$1 = state_89152;
var statearr_89165_89196 = state_89152__$1;
(statearr_89165_89196[(2)] = inst_89148);

(statearr_89165_89196[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89153 === (2))){
var inst_89107 = (state_89152[(7)]);
var inst_89114 = (state_89152[(8)]);
var inst_89108 = (state_89152[(9)]);
var inst_89110 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_89111 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid];
var inst_89112 = (new cljs.core.PersistentVector(null,2,(5),inst_89110,inst_89111,null));
var inst_89113 = (function (){var n = inst_89107;
var client_ids_satisfied = inst_89108;
return ((function (n,client_ids_satisfied,inst_89107,inst_89114,inst_89108,inst_89110,inst_89111,inst_89112,state_val_89153,c__69114__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (m){
var ks_to_pull = cljs.core.remove.call(null,client_ids_satisfied,cljs.core.keys.call(null,m));
if(cljs.core.empty_QMARK_.call(null,ks_to_pull)){
return taoensso.encore.swapped.call(null,m,null);
} else {
return taoensso.encore.swapped.call(null,cljs.core.reduce.call(null,((function (ks_to_pull,n,client_ids_satisfied,inst_89107,inst_89114,inst_89108,inst_89110,inst_89111,inst_89112,state_val_89153,c__69114__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (m__$1,k){
var vec__89166 = cljs.core.get.call(null,m__$1,k);
var _QMARK_sch = cljs.core.nth.call(null,vec__89166,(0),null);
var udt = cljs.core.nth.call(null,vec__89166,(1),null);
return cljs.core.assoc.call(null,m__$1,k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,udt], null));
});})(ks_to_pull,n,client_ids_satisfied,inst_89107,inst_89114,inst_89108,inst_89110,inst_89111,inst_89112,state_val_89153,c__69114__auto__,ms_backoffs,client_ids_unsatisfied))
,m,ks_to_pull),cljs.core.select_keys.call(null,m,ks_to_pull));
}
});
;})(n,client_ids_satisfied,inst_89107,inst_89114,inst_89108,inst_89110,inst_89111,inst_89112,state_val_89153,c__69114__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var inst_89114__$1 = taoensso.encore.swap_in_BANG_.call(null,conns_,inst_89112,inst_89113);
var inst_89115 = (function (){var n = inst_89107;
var client_ids_satisfied = inst_89108;
var _QMARK_pulled = inst_89114__$1;
return ((function (n,client_ids_satisfied,_QMARK_pulled,inst_89107,inst_89114,inst_89108,inst_89110,inst_89111,inst_89112,inst_89113,inst_89114__$1,state_val_89153,c__69114__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (x){
var or__60899__auto__ = (x == null);
if(or__60899__auto__){
return or__60899__auto__;
} else {
return taoensso.truss.impl.non_throwing.call(null,cljs.core.map_QMARK_).call(null,x);
}
});
;})(n,client_ids_satisfied,_QMARK_pulled,inst_89107,inst_89114,inst_89108,inst_89110,inst_89111,inst_89112,inst_89113,inst_89114__$1,state_val_89153,c__69114__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var inst_89116 = inst_89115.call(null,inst_89114__$1);
var state_89152__$1 = (function (){var statearr_89169 = state_89152;
(statearr_89169[(8)] = inst_89114__$1);

return statearr_89169;
})();
if(cljs.core.truth_(inst_89116)){
var statearr_89170_89197 = state_89152__$1;
(statearr_89170_89197[(1)] = (4));

} else {
var statearr_89171_89198 = state_89152__$1;
(statearr_89171_89198[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89153 === (11))){
var state_89152__$1 = state_89152;
var statearr_89172_89199 = state_89152__$1;
(statearr_89172_89199[(2)] = null);

(statearr_89172_89199[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89153 === (9))){
var inst_89107 = (state_89152[(7)]);
var inst_89131 = (state_89152[(10)]);
var inst_89108 = (state_89152[(9)]);
var inst_89129 = (state_89152[(2)]);
var inst_89130 = cljs.core.into.call(null,inst_89108,inst_89129);
var inst_89131__$1 = cljs.core.get.call(null,ms_backoffs,inst_89107);
var state_89152__$1 = (function (){var statearr_89173 = state_89152;
(statearr_89173[(12)] = inst_89130);

(statearr_89173[(10)] = inst_89131__$1);

return statearr_89173;
})();
if(cljs.core.truth_(inst_89131__$1)){
var statearr_89174_89200 = state_89152__$1;
(statearr_89174_89200[(1)] = (10));

} else {
var statearr_89175_89201 = state_89152__$1;
(statearr_89175_89201[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89153 === (5))){
var inst_89114 = (state_89152[(8)]);
var inst_89119 = taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",733,"([:or nil? map?] ?pulled)",inst_89114,null,null);
var state_89152__$1 = state_89152;
var statearr_89176_89202 = state_89152__$1;
(statearr_89176_89202[(2)] = inst_89119);

(statearr_89176_89202[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89153 === (14))){
var state_89152__$1 = state_89152;
var statearr_89177_89203 = state_89152__$1;
(statearr_89177_89203[(2)] = null);

(statearr_89177_89203[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89153 === (16))){
var inst_89130 = (state_89152[(12)]);
var inst_89107 = (state_89152[(7)]);
var inst_89140 = (state_89152[(2)]);
var inst_89141 = (inst_89107 + (1));
var inst_89107__$1 = inst_89141;
var inst_89108 = inst_89130;
var state_89152__$1 = (function (){var statearr_89178 = state_89152;
(statearr_89178[(13)] = inst_89140);

(statearr_89178[(7)] = inst_89107__$1);

(statearr_89178[(9)] = inst_89108);

return statearr_89178;
})();
var statearr_89179_89204 = state_89152__$1;
(statearr_89179_89204[(2)] = null);

(statearr_89179_89204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89153 === (10))){
var inst_89130 = (state_89152[(12)]);
var inst_89133 = cljs.core.complement.call(null,inst_89130);
var inst_89134 = taoensso.encore.rsome.call(null,inst_89133,client_ids_unsatisfied);
var state_89152__$1 = state_89152;
if(cljs.core.truth_(inst_89134)){
var statearr_89180_89205 = state_89152__$1;
(statearr_89180_89205[(1)] = (13));

} else {
var statearr_89181_89206 = state_89152__$1;
(statearr_89181_89206[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89153 === (8))){
var state_89152__$1 = state_89152;
var statearr_89182_89207 = state_89152__$1;
(statearr_89182_89207[(2)] = null);

(statearr_89182_89207[(1)] = (9));


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
});})(c__69114__auto__,ms_backoffs,client_ids_unsatisfied))
;
return ((function (switch__69000__auto__,c__69114__auto__,ms_backoffs,client_ids_unsatisfied){
return (function() {
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__69001__auto__ = null;
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__69001__auto____0 = (function (){
var statearr_89186 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_89186[(0)] = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__69001__auto__);

(statearr_89186[(1)] = (1));

return statearr_89186;
});
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__69001__auto____1 = (function (state_89152){
while(true){
var ret_value__69002__auto__ = (function (){try{while(true){
var result__69003__auto__ = switch__69000__auto__.call(null,state_89152);
if(cljs.core.keyword_identical_QMARK_.call(null,result__69003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69003__auto__;
}
break;
}
}catch (e89187){if((e89187 instanceof Object)){
var ex__69004__auto__ = e89187;
var statearr_89188_89208 = state_89152;
(statearr_89188_89208[(5)] = ex__69004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_89152);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e89187;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__69002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__89209 = state_89152;
state_89152 = G__89209;
continue;
} else {
return ret_value__69002__auto__;
}
break;
}
});
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__69001__auto__ = function(state_89152){
switch(arguments.length){
case 0:
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__69001__auto____0.call(this);
case 1:
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__69001__auto____1.call(this,state_89152);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__69001__auto____0;
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__69001__auto____1;
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__69001__auto__;
})()
;})(switch__69000__auto__,c__69114__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var state__69116__auto__ = (function (){var statearr_89189 = f__69115__auto__.call(null);
(statearr_89189[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__69114__auto__);

return statearr_89189;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__69116__auto__);
});})(c__69114__auto__,ms_backoffs,client_ids_unsatisfied))
);

return c__69114__auto__;
}
});
/**
 * Alias of `taoensso.encore/ajax-lite`
 */
taoensso.sente.ajax_lite = taoensso.encore.ajax_lite;

/**
 * @interface
 */
taoensso.sente.IChSocket = function(){};

taoensso.sente._chsk_connect_BANG_ = (function taoensso$sente$_chsk_connect_BANG_(chsk){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 == null)))){
return chsk.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(chsk);
} else {
var x__61617__auto__ = (((chsk == null))?null:chsk);
var m__61618__auto__ = (taoensso.sente._chsk_connect_BANG_[goog.typeOf(x__61617__auto__)]);
if(!((m__61618__auto__ == null))){
return m__61618__auto__.call(null,chsk);
} else {
var m__61618__auto____$1 = (taoensso.sente._chsk_connect_BANG_["_"]);
if(!((m__61618__auto____$1 == null))){
return m__61618__auto____$1.call(null,chsk);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.-chsk-connect!",chsk);
}
}
}
});

taoensso.sente._chsk_disconnect_BANG_ = (function taoensso$sente$_chsk_disconnect_BANG_(chsk,reason){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 == null)))){
return chsk.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2(chsk,reason);
} else {
var x__61617__auto__ = (((chsk == null))?null:chsk);
var m__61618__auto__ = (taoensso.sente._chsk_disconnect_BANG_[goog.typeOf(x__61617__auto__)]);
if(!((m__61618__auto__ == null))){
return m__61618__auto__.call(null,chsk,reason);
} else {
var m__61618__auto____$1 = (taoensso.sente._chsk_disconnect_BANG_["_"]);
if(!((m__61618__auto____$1 == null))){
return m__61618__auto____$1.call(null,chsk,reason);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.-chsk-disconnect!",chsk);
}
}
}
});

taoensso.sente._chsk_reconnect_BANG_ = (function taoensso$sente$_chsk_reconnect_BANG_(chsk){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 == null)))){
return chsk.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1(chsk);
} else {
var x__61617__auto__ = (((chsk == null))?null:chsk);
var m__61618__auto__ = (taoensso.sente._chsk_reconnect_BANG_[goog.typeOf(x__61617__auto__)]);
if(!((m__61618__auto__ == null))){
return m__61618__auto__.call(null,chsk);
} else {
var m__61618__auto____$1 = (taoensso.sente._chsk_reconnect_BANG_["_"]);
if(!((m__61618__auto____$1 == null))){
return m__61618__auto____$1.call(null,chsk);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.-chsk-reconnect!",chsk);
}
}
}
});

taoensso.sente._chsk_send_BANG_ = (function taoensso$sente$_chsk_send_BANG_(chsk,ev,opts){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 == null)))){
return chsk.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3(chsk,ev,opts);
} else {
var x__61617__auto__ = (((chsk == null))?null:chsk);
var m__61618__auto__ = (taoensso.sente._chsk_send_BANG_[goog.typeOf(x__61617__auto__)]);
if(!((m__61618__auto__ == null))){
return m__61618__auto__.call(null,chsk,ev,opts);
} else {
var m__61618__auto____$1 = (taoensso.sente._chsk_send_BANG_["_"]);
if(!((m__61618__auto____$1 == null))){
return m__61618__auto____$1.call(null,chsk,ev,opts);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.-chsk-send!",chsk);
}
}
}
});

taoensso.sente.chsk_connect_BANG_ = (function taoensso$sente$chsk_connect_BANG_(chsk){
return taoensso.sente._chsk_connect_BANG_.call(null,chsk);
});

taoensso.sente.chsk_disconnect_BANG_ = (function taoensso$sente$chsk_disconnect_BANG_(chsk){
return taoensso.sente._chsk_disconnect_BANG_.call(null,chsk,new cljs.core.Keyword(null,"requested-disconnect","requested-disconnect",1037120641));
});

/**
 * Useful for reauthenticating after login/logout, etc.
 */
taoensso.sente.chsk_reconnect_BANG_ = (function taoensso$sente$chsk_reconnect_BANG_(chsk){
return taoensso.sente._chsk_reconnect_BANG_.call(null,chsk);
});

/**
 * Deprecated
 */
taoensso.sente.chsk_destroy_BANG_ = taoensso.sente.chsk_disconnect_BANG_;
/**
 * Sends `[ev-id ev-?data :as event]`, returns true on apparent success.
 */
taoensso.sente.chsk_send_BANG_ = (function taoensso$sente$chsk_send_BANG_(var_args){
var args89210 = [];
var len__62120__auto___89213 = arguments.length;
var i__62121__auto___89214 = (0);
while(true){
if((i__62121__auto___89214 < len__62120__auto___89213)){
args89210.push((arguments[i__62121__auto___89214]));

var G__89215 = (i__62121__auto___89214 + (1));
i__62121__auto___89214 = G__89215;
continue;
} else {
}
break;
}

var G__89212 = args89210.length;
switch (G__89212) {
case 2:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args89210.length)].join('')));

}
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (chsk,ev){
return taoensso.sente.chsk_send_BANG_.call(null,chsk,ev,cljs.core.PersistentArrayMap.EMPTY);
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (chsk,ev,_QMARK_timeout_ms,_QMARK_cb){
return taoensso.sente.chsk_send_BANG_.call(null,chsk,ev,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),_QMARK_timeout_ms,new cljs.core.Keyword(null,"cb","cb",589947841),_QMARK_cb], null));
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (chsk,ev,opts){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init8382301926859034614.clj",783,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (%s) %s",cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"cb","cb",589947841),cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"cb","cb",589947841).cljs$core$IFn$_invoke$arity$1(opts))),ev], null);
}),null)),null,690144763);

return taoensso.sente._chsk_send_BANG_.call(null,chsk,ev,opts);
});

taoensso.sente.chsk_send_BANG_.cljs$lang$maxFixedArity = 4;

taoensso.sente.chsk_send__GT_closed_BANG_ = (function taoensso$sente$chsk_send__GT_closed_BANG_(_QMARK_cb_fn){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init8382301926859034614.clj",788,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send against closed chsk."], null);
}),null)),null,1423037047);

if(cljs.core.truth_(_QMARK_cb_fn)){
_QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264));
} else {
}

return false;
});
taoensso.sente.assert_send_args = (function taoensso$sente$assert_send_args(x,_QMARK_timeout_ms,_QMARK_cb){
taoensso.sente.assert_event.call(null,x);

if((((_QMARK_timeout_ms == null)) && ((_QMARK_cb == null))) || (taoensso.encore.nat_int_QMARK_.call(null,_QMARK_timeout_ms))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("cb requires a timeout; timeout-ms should be a +ive integer: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_timeout_ms)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(or (and (nil? ?timeout-ms) (nil? ?cb)) (and (enc/nat-int? ?timeout-ms)))")].join('')));
}

if(((_QMARK_cb == null)) || (cljs.core.ifn_QMARK_.call(null,_QMARK_cb)) || (taoensso.encore.chan_QMARK_.call(null,_QMARK_cb))){
return null;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("cb should be nil, an ifn, or a channel: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,_QMARK_cb))].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(or (nil? ?cb) (ifn? ?cb) (enc/chan? ?cb))")].join('')));
}
});
taoensso.sente.pull_unused_cb_fn_BANG_ = (function taoensso$sente$pull_unused_cb_fn_BANG_(cbs_waiting_,_QMARK_cb_uuid){
var temp__6738__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__6738__auto__)){
var cb_uuid = temp__6738__auto__;
return taoensso.encore.swap_in_BANG_.call(null,cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid], null),((function (cb_uuid,temp__6738__auto__){
return (function (_QMARK_f){
return taoensso.encore.swapped.call(null,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782),_QMARK_f);
});})(cb_uuid,temp__6738__auto__))
);
} else {
return null;
}
});
/**
 * Atomically swaps the value of chk's :state_ atom.
 */
taoensso.sente.swap_chsk_state_BANG_ = (function taoensso$sente$swap_chsk_state_BANG_(chsk,f){
var vec__89220 = taoensso.encore.swap_in_BANG_.call(null,new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk),(function (old_state){
var new_state = f.call(null,old_state);
var new_state__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"first-open?","first-open?",396686530).cljs$core$IFn$_invoke$arity$1(old_state))?cljs.core.assoc.call(null,new_state,new cljs.core.Keyword(null,"first-open?","first-open?",396686530),false):new_state);
var new_state__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(new_state__$1))?cljs.core.dissoc.call(null,new_state__$1,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733)):new_state__$1);
return taoensso.encore.swapped.call(null,new_state__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state__$2], null));
}));
var old_state = cljs.core.nth.call(null,vec__89220,(0),null);
var new_state = cljs.core.nth.call(null,vec__89220,(1),null);
if(cljs.core.not_EQ_.call(null,old_state,new_state)){
var output = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state], null);
cljs.core.async.put_BANG_.call(null,cljs.core.get_in.call(null,chsk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"state","state",-1988618099)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),output], null));

return output;
} else {
return null;
}
});
taoensso.sente.chsk_state__GT_closed = (function taoensso$sente$chsk_state__GT_closed(state,reason){
var e_89227 = (function (){try{if(cljs.core.map_QMARK_.call(null,state)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e89225){if((e89225 instanceof Error)){
var e = e89225;
return e;
} else {
throw e89225;

}
}})();
if((e_89227 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",835,"(map? state)",state,e_89227,null);
}

var e_89228 = (function (){try{if((function (x){
return cljs.core.contains_QMARK_.call(null,taoensso.truss.impl.set_STAR_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"requested-disconnect","requested-disconnect",1037120641),null,new cljs.core.Keyword(null,"downgrading-ws-to-ajax","downgrading-ws-to-ajax",402136720),null,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424),null,new cljs.core.Keyword(null,"requested-reconnect","requested-reconnect",2008347707),null], null), null)),x);
}).call(null,reason)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e89226){if((e89226 instanceof Error)){
var e = e89226;
return e;
} else {
throw e89226;

}
}})();
if((e_89228 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",836,"([:el #{:requested-disconnect :downgrading-ws-to-ajax :unexpected :requested-reconnect}] reason)",reason,e_89228,null);
}

if(cljs.core.truth_((function (){var or__60899__auto__ = new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__60899__auto__)){
return or__60899__auto__;
} else {
return cljs.core.not_EQ_.call(null,reason,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424));
}
})())){
return cljs.core.assoc.call(null,cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733)),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"last-close","last-close",-2054255782),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"reason","reason",-2070751759),reason], null));
} else {
return state;
}
});
/**
 * Experimental, undocumented. Allows a core.async channel to be provided
 *   instead of a cb-fn. The channel will receive values of form
 *   [<event-id>.cb <reply>].
 */
taoensso.sente.cb_chan_as_fn = (function taoensso$sente$cb_chan_as_fn(_QMARK_cb,ev){
if(((_QMARK_cb == null)) || (cljs.core.ifn_QMARK_.call(null,_QMARK_cb))){
return _QMARK_cb;
} else {
var e_89237 = (function (){try{if(taoensso.encore.chan_QMARK_.call(null,_QMARK_cb)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e89233){if((e89233 instanceof Error)){
var e = e89233;
return e;
} else {
throw e89233;

}
}})();
if((e_89237 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",857,"(enc/chan? ?cb)",_QMARK_cb,e_89237,null);
}

taoensso.sente.assert_event.call(null,ev);

var vec__89234 = ev;
var ev_id = cljs.core.nth.call(null,vec__89234,(0),null);
var _ = cljs.core.nth.call(null,vec__89234,(1),null);
var cb_ch = _QMARK_cb;
return ((function (vec__89234,ev_id,_,cb_ch){
return (function (reply){
return cljs.core.async.put_BANG_.call(null,cb_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.encore.as_qname.call(null,ev_id)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".cb")].join('')),reply], null));
});
;})(vec__89234,ev_id,_,cb_ch))
}
});
taoensso.sente.receive_buffered_evs_BANG_ = (function taoensso$sente$receive_buffered_evs_BANG_(chs,clj){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init8382301926859034614.clj",868,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-buffered-evs!: %s",clj], null);
}),null)),null,1666128089);

var buffered_evs = ((cljs.core.vector_QMARK_.call(null,clj))?clj:taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",869,"(vector? clj)",clj,null,null));
var seq__89248 = cljs.core.seq.call(null,buffered_evs);
var chunk__89249 = null;
var count__89250 = (0);
var i__89251 = (0);
while(true){
if((i__89251 < count__89250)){
var ev = cljs.core._nth.call(null,chunk__89249,i__89251);
taoensso.sente.assert_event.call(null,ev);

var vec__89252_89258 = ev;
var id_89259 = cljs.core.nth.call(null,vec__89252_89258,(0),null);
if(cljs.core.not_EQ_.call(null,cljs.core.namespace.call(null,id_89259),"chsk")){
} else {
throw (new Error("Assert failed: (not= (namespace id) \"chsk\")"));
}

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__89260 = seq__89248;
var G__89261 = chunk__89249;
var G__89262 = count__89250;
var G__89263 = (i__89251 + (1));
seq__89248 = G__89260;
chunk__89249 = G__89261;
count__89250 = G__89262;
i__89251 = G__89263;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__89248);
if(temp__6738__auto__){
var seq__89248__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__89248__$1)){
var c__61810__auto__ = cljs.core.chunk_first.call(null,seq__89248__$1);
var G__89264 = cljs.core.chunk_rest.call(null,seq__89248__$1);
var G__89265 = c__61810__auto__;
var G__89266 = cljs.core.count.call(null,c__61810__auto__);
var G__89267 = (0);
seq__89248 = G__89264;
chunk__89249 = G__89265;
count__89250 = G__89266;
i__89251 = G__89267;
continue;
} else {
var ev = cljs.core.first.call(null,seq__89248__$1);
taoensso.sente.assert_event.call(null,ev);

var vec__89255_89268 = ev;
var id_89269 = cljs.core.nth.call(null,vec__89255_89268,(0),null);
if(cljs.core.not_EQ_.call(null,cljs.core.namespace.call(null,id_89269),"chsk")){
} else {
throw (new Error("Assert failed: (not= (namespace id) \"chsk\")"));
}

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__89270 = cljs.core.next.call(null,seq__89248__$1);
var G__89271 = null;
var G__89272 = (0);
var G__89273 = (0);
seq__89248 = G__89270;
chunk__89249 = G__89271;
count__89250 = G__89272;
i__89251 = G__89273;
continue;
}
} else {
return null;
}
}
break;
}
});
taoensso.sente.handshake_QMARK_ = (function taoensso$sente$handshake_QMARK_(x){
var and__60887__auto__ = cljs.core.vector_QMARK_.call(null,x);
if(and__60887__auto__){
var vec__89283 = x;
var x1 = cljs.core.nth.call(null,vec__89283,(0),null);
return cljs.core._EQ_.call(null,x1,new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686));
} else {
return and__60887__auto__;
}
});
taoensso.sente.receive_handshake_BANG_ = (function taoensso$sente$receive_handshake_BANG_(chsk_type,chsk,clj){
var e_89307 = (function (){try{if((function (x){
return cljs.core.contains_QMARK_.call(null,taoensso.truss.impl.set_STAR_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null], null), null)),x);
}).call(null,chsk_type)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e89297){if((e89297 instanceof Error)){
var e = e89297;
return e;
} else {
throw e89297;

}
}})();
if((e_89307 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",883,"([:el #{:ws :ajax}] chsk-type)",chsk_type,e_89307,null);
}

var e_89308 = (function (){try{if(cljs.core.truth_(taoensso.sente.handshake_QMARK_.call(null,clj))){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e89298){if((e89298 instanceof Error)){
var e = e89298;
return e;
} else {
throw e89298;

}
}})();
if((e_89308 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",884,"(handshake? clj)",clj,e_89308,null);
}

taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init8382301926859034614.clj",885,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-handshake! (%s): %s",chsk_type,clj], null);
}),null)),null,1973687300);

var vec__89299 = clj;
var _ = cljs.core.nth.call(null,vec__89299,(0),null);
var vec__89302 = cljs.core.nth.call(null,vec__89299,(1),null);
var _QMARK_uid = cljs.core.nth.call(null,vec__89302,(0),null);
var _QMARK_csrf_token = cljs.core.nth.call(null,vec__89302,(1),null);
var _QMARK_handshake_data = cljs.core.nth.call(null,vec__89302,(2),null);
var map__89305 = chsk;
var map__89305__$1 = ((((!((map__89305 == null)))?((((map__89305.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89305.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__89305):map__89305);
var chs = cljs.core.get.call(null,map__89305__$1,new cljs.core.Keyword(null,"chs","chs",376886120));
var ever_opened_QMARK__ = cljs.core.get.call(null,map__89305__$1,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913));
var first_handshake_QMARK_ = cljs.core.compare_and_set_BANG_.call(null,ever_opened_QMARK__,false,true);
var new_state = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),chsk_type,new cljs.core.Keyword(null,"open?","open?",1238443125),true,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),true,new cljs.core.Keyword(null,"uid","uid",-1447769400),_QMARK_uid,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),_QMARK_csrf_token,new cljs.core.Keyword(null,"handshake-data","handshake-data",-278378864),_QMARK_handshake_data,new cljs.core.Keyword(null,"first-open?","first-open?",396686530),first_handshake_QMARK_], null);
var handshake_ev = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,first_handshake_QMARK_], null)], null);
taoensso.sente.assert_event.call(null,handshake_ev);

if(clojure.string.blank_QMARK_.call(null,_QMARK_csrf_token)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init8382301926859034614.clj",904,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__89299,_,vec__89302,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__89305,map__89305__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SECURITY WARNING: no CSRF token available for use by Sente"], null);
});})(vec__89299,_,vec__89302,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__89305,map__89305__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev))
,null)),null,-504963290);
} else {
}

taoensso.sente.swap_chsk_state_BANG_.call(null,chsk,((function (vec__89299,_,vec__89302,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__89305,map__89305__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev){
return (function (p1__89286_SHARP_){
return cljs.core.merge.call(null,p1__89286_SHARP_,new_state);
});})(vec__89299,_,vec__89302,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__89305,map__89305__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev))
);

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(chs),handshake_ev);

return new cljs.core.Keyword(null,"handled","handled",1889700151);
});
/**
 * nnil iff the websocket npm library[1] is available.
 *   Easiest way to install:
 *     1. Add the lein-npm[2] plugin to your `project.clj`,
 *     2. Add: `:npm {:dependencies [[websocket "1.0.23"]]}`
 * 
 *   [1] Ref. https://www.npmjs.com/package/websocket
 *   [2] Ref. https://github.com/RyanMcG/lein-npm
 */
taoensso.sente._QMARK_node_npm_websocket_ = (new cljs.core.Delay((function (){
if((taoensso.sente.node_target_QMARK_) && (typeof require !== 'undefined')){
try{return require("websocket");
}catch (e89309){var e = e89309;
return null;
}} else {
return null;
}
}),null));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChWebSocket = (function (client_id,chs,params,packer,url,ws_kalive_ms,state_,instance_handle_,retry_count_,ever_opened_QMARK__,backoff_ms_fn,cbs_waiting_,socket_,udt_last_comms_,__meta,__extmap,__hash){
this.client_id = client_id;
this.chs = chs;
this.params = params;
this.packer = packer;
this.url = url;
this.ws_kalive_ms = ws_kalive_ms;
this.state_ = state_;
this.instance_handle_ = instance_handle_;
this.retry_count_ = retry_count_;
this.ever_opened_QMARK__ = ever_opened_QMARK__;
this.backoff_ms_fn = backoff_ms_fn;
this.cbs_waiting_ = cbs_waiting_;
this.socket_ = socket_;
this.udt_last_comms_ = udt_last_comms_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__61574__auto__,k__61575__auto__){
var self__ = this;
var this__61574__auto____$1 = this;
return this__61574__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__61575__auto__,null);
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__61576__auto__,k89316,else__61577__auto__){
var self__ = this;
var this__61576__auto____$1 = this;
var G__89318 = k89316;
var G__89318__$1 = (((G__89318 instanceof cljs.core.Keyword))?G__89318.fqn:null);
switch (G__89318__$1) {
case "ws-kalive-ms":
return self__.ws_kalive_ms;

break;
case "ever-opened?_":
return self__.ever_opened_QMARK__;

break;
case "client-id":
return self__.client_id;

break;
case "packer":
return self__.packer;

break;
case "chs":
return self__.chs;

break;
case "udt-last-comms_":
return self__.udt_last_comms_;

break;
case "params":
return self__.params;

break;
case "retry-count_":
return self__.retry_count_;

break;
case "backoff-ms-fn":
return self__.backoff_ms_fn;

break;
case "socket_":
return self__.socket_;

break;
case "url":
return self__.url;

break;
case "instance-handle_":
return self__.instance_handle_;

break;
case "cbs-waiting_":
return self__.cbs_waiting_;

break;
case "state_":
return self__.state_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k89316,else__61577__auto__);

}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__61588__auto__,writer__61589__auto__,opts__61590__auto__){
var self__ = this;
var this__61588__auto____$1 = this;
var pr_pair__61591__auto__ = ((function (this__61588__auto____$1){
return (function (keyval__61592__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__61589__auto__,cljs.core.pr_writer,""," ","",opts__61590__auto__,keyval__61592__auto__);
});})(this__61588__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__61589__auto__,pr_pair__61591__auto__,"#taoensso.sente.ChWebSocket{",", ","}",opts__61590__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),self__.ws_kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),self__.instance_handle_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),self__.retry_count_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),self__.udt_last_comms_],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__89315){
var self__ = this;
var G__89315__$1 = this;
return (new cljs.core.RecordIter((0),G__89315__$1,14,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__61572__auto__){
var self__ = this;
var this__61572__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__61568__auto__){
var self__ = this;
var this__61568__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__61578__auto__){
var self__ = this;
var this__61578__auto____$1 = this;
return (14 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__61569__auto__){
var self__ = this;
var this__61569__auto____$1 = this;
var h__61341__auto__ = self__.__hash;
if(!((h__61341__auto__ == null))){
return h__61341__auto__;
} else {
var h__61341__auto____$1 = cljs.core.hash_imap.call(null,this__61569__auto____$1);
self__.__hash = h__61341__auto____$1;

return h__61341__auto____$1;
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__61570__auto__,other__61571__auto__){
var self__ = this;
var this__61570__auto____$1 = this;
if(cljs.core.truth_((function (){var and__60887__auto__ = other__61571__auto__;
if(cljs.core.truth_(and__60887__auto__)){
return ((this__61570__auto____$1.constructor === other__61571__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__61570__auto____$1,other__61571__auto__));
} else {
return and__60887__auto__;
}
})())){
return true;
} else {
return false;
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__61583__auto__,k__61584__auto__){
var self__ = this;
var this__61583__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, [new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__61584__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__61583__auto____$1),self__.__meta),k__61584__auto__);
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__61584__auto__)),null));
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__61581__auto__,k__61582__auto__,G__89315){
var self__ = this;
var this__61581__auto____$1 = this;
var pred__89319 = cljs.core.keyword_identical_QMARK_;
var expr__89320 = k__61582__auto__;
if(cljs.core.truth_(pred__89319.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__89320))){
return (new taoensso.sente.ChWebSocket(G__89315,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__89319.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__89320))){
return (new taoensso.sente.ChWebSocket(self__.client_id,G__89315,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__89319.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__89320))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,G__89315,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__89319.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__89320))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,G__89315,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__89319.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__89320))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__89315,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__89319.call(null,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),expr__89320))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__89315,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__89319.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__89320))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,G__89315,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__89319.call(null,new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),expr__89320))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,G__89315,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__89319.call(null,new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),expr__89320))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,G__89315,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__89319.call(null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),expr__89320))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,G__89315,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__89319.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__89320))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,G__89315,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__89319.call(null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),expr__89320))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,G__89315,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__89319.call(null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),expr__89320))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,G__89315,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__89319.call(null,new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),expr__89320))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,G__89315,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__61582__auto__,G__89315),null));
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
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__61586__auto__){
var self__ = this;
var this__61586__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),self__.ws_kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),self__.instance_handle_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),self__.retry_count_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),self__.udt_last_comms_],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__61573__auto__,G__89315){
var self__ = this;
var this__61573__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,G__89315,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__61579__auto__,entry__61580__auto__){
var self__ = this;
var this__61579__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__61580__auto__)){
return this__61579__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__61580__auto__,(0)),cljs.core._nth.call(null,entry__61580__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__61579__auto____$1,entry__61580__auto__);
}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$ = cljs.core.PROTOCOL_SENTINEL;

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
cljs.core.reset_BANG_.call(null,self__.instance_handle_,null);

taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (chsk__$1){
return (function (p1__89310_SHARP_){
return taoensso.sente.chsk_state__GT_closed.call(null,p1__89310_SHARP_,reason);
});})(chsk__$1))
);

var temp__6738__auto__ = cljs.core.deref.call(null,self__.socket_);
if(cljs.core.truth_(temp__6738__auto__)){
var s = temp__6738__auto__;
return s.close((1000),"CLOSE_NORMAL");
} else {
return null;
}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
chsk__$1.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2(null,new cljs.core.Keyword(null,"requested-reconnect","requested-reconnect",2008347707));

return chsk__$1.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(null);
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,opts){
var self__ = this;
var chsk__$1 = this;
var map__89322 = opts;
var map__89322__$1 = ((((!((map__89322 == null)))?((((map__89322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89322.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__89322):map__89322);
var _QMARK_timeout_ms = cljs.core.get.call(null,map__89322__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.call(null,map__89322__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.call(null,map__89322__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var _ = taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
return taoensso.sente.chsk_send__GT_closed_BANG_.call(null,_QMARK_cb_fn);
} else {
var _QMARK_cb_uuid = (cljs.core.truth_(_QMARK_cb_fn)?taoensso.encore.uuid_str.call(null,(6)):null);
var ppstr = taoensso.sente.pack.call(null,self__.packer,cljs.core.meta.call(null,ev),ev,_QMARK_cb_uuid);
var temp__6738__auto___89413 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__6738__auto___89413)){
var cb_uuid_89414 = temp__6738__auto___89413;
taoensso.encore.reset_in_BANG_.call(null,self__.cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid_89414], null),(function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_.call(null,_QMARK_cb_fn)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e89324){if((e89324 instanceof Error)){
var e = e89324;
return e;
} else {
throw e89324;

}
}})();
if((e == null)){
return _QMARK_cb_fn;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",974,"(taoensso.truss.impl/some? ?cb-fn)",_QMARK_cb_fn,e,null);
}
})());

var temp__6738__auto___89415__$1 = _QMARK_timeout_ms;
if(cljs.core.truth_(temp__6738__auto___89415__$1)){
var timeout_ms_89416 = temp__6738__auto___89415__$1;
var c__69114__auto___89417 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__69114__auto___89417,timeout_ms_89416,temp__6738__auto___89415__$1,cb_uuid_89414,temp__6738__auto___89413,_QMARK_cb_uuid,ppstr,map__89322,map__89322__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (){
var f__69115__auto__ = (function (){var switch__69000__auto__ = ((function (c__69114__auto___89417,timeout_ms_89416,temp__6738__auto___89415__$1,cb_uuid_89414,temp__6738__auto___89413,_QMARK_cb_uuid,ppstr,map__89322,map__89322__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (state_89335){
var state_val_89336 = (state_89335[(1)]);
if((state_val_89336 === (1))){
var inst_89325 = cljs.core.async.timeout.call(null,timeout_ms_89416);
var state_89335__$1 = state_89335;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_89335__$1,(2),inst_89325);
} else {
if((state_val_89336 === (2))){
var inst_89328 = (state_89335[(7)]);
var inst_89327 = (state_89335[(2)]);
var inst_89328__$1 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,_QMARK_cb_uuid);
var state_89335__$1 = (function (){var statearr_89337 = state_89335;
(statearr_89337[(8)] = inst_89327);

(statearr_89337[(7)] = inst_89328__$1);

return statearr_89337;
})();
if(cljs.core.truth_(inst_89328__$1)){
var statearr_89338_89418 = state_89335__$1;
(statearr_89338_89418[(1)] = (3));

} else {
var statearr_89339_89419 = state_89335__$1;
(statearr_89339_89419[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89336 === (3))){
var inst_89328 = (state_89335[(7)]);
var inst_89330 = inst_89328.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var state_89335__$1 = state_89335;
var statearr_89340_89420 = state_89335__$1;
(statearr_89340_89420[(2)] = inst_89330);

(statearr_89340_89420[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89336 === (4))){
var state_89335__$1 = state_89335;
var statearr_89341_89421 = state_89335__$1;
(statearr_89341_89421[(2)] = null);

(statearr_89341_89421[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89336 === (5))){
var inst_89333 = (state_89335[(2)]);
var state_89335__$1 = state_89335;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_89335__$1,inst_89333);
} else {
return null;
}
}
}
}
}
});})(c__69114__auto___89417,timeout_ms_89416,temp__6738__auto___89415__$1,cb_uuid_89414,temp__6738__auto___89413,_QMARK_cb_uuid,ppstr,map__89322,map__89322__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
;
return ((function (switch__69000__auto__,c__69114__auto___89417,timeout_ms_89416,temp__6738__auto___89415__$1,cb_uuid_89414,temp__6738__auto___89413,_QMARK_cb_uuid,ppstr,map__89322,map__89322__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function() {
var taoensso$sente$state_machine__69001__auto__ = null;
var taoensso$sente$state_machine__69001__auto____0 = (function (){
var statearr_89345 = [null,null,null,null,null,null,null,null,null];
(statearr_89345[(0)] = taoensso$sente$state_machine__69001__auto__);

(statearr_89345[(1)] = (1));

return statearr_89345;
});
var taoensso$sente$state_machine__69001__auto____1 = (function (state_89335){
while(true){
var ret_value__69002__auto__ = (function (){try{while(true){
var result__69003__auto__ = switch__69000__auto__.call(null,state_89335);
if(cljs.core.keyword_identical_QMARK_.call(null,result__69003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69003__auto__;
}
break;
}
}catch (e89346){if((e89346 instanceof Object)){
var ex__69004__auto__ = e89346;
var statearr_89347_89422 = state_89335;
(statearr_89347_89422[(5)] = ex__69004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_89335);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e89346;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__69002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__89423 = state_89335;
state_89335 = G__89423;
continue;
} else {
return ret_value__69002__auto__;
}
break;
}
});
taoensso$sente$state_machine__69001__auto__ = function(state_89335){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__69001__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__69001__auto____1.call(this,state_89335);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$sente$state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__69001__auto____0;
taoensso$sente$state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__69001__auto____1;
return taoensso$sente$state_machine__69001__auto__;
})()
;})(switch__69000__auto__,c__69114__auto___89417,timeout_ms_89416,temp__6738__auto___89415__$1,cb_uuid_89414,temp__6738__auto___89413,_QMARK_cb_uuid,ppstr,map__89322,map__89322__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
})();
var state__69116__auto__ = (function (){var statearr_89348 = f__69115__auto__.call(null);
(statearr_89348[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__69114__auto___89417);

return statearr_89348;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__69116__auto__);
});})(c__69114__auto___89417,timeout_ms_89416,temp__6738__auto___89415__$1,cb_uuid_89414,temp__6738__auto___89413,_QMARK_cb_uuid,ppstr,map__89322,map__89322__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
);

} else {
}
} else {
}

try{cljs.core.deref.call(null,self__.socket_).send(ppstr);

cljs.core.reset_BANG_.call(null,self__.udt_last_comms_,taoensso.encore.now_udt.call(null));

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}catch (e89349){var e = e89349;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/tmp/form-init8382301926859034614.clj",986,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,_QMARK_cb_uuid,ppstr,map__89322,map__89322__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Chsk send error"], null);
});})(e,_QMARK_cb_uuid,ppstr,map__89322,map__89322__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
,null)),null,-1612411471);

var temp__6738__auto___89424 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__6738__auto___89424)){
var cb_uuid_89425 = temp__6738__auto___89424;
var cb_fn_STAR__89426 = (function (){var or__60899__auto__ = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,cb_uuid_89425);
if(cljs.core.truth_(or__60899__auto__)){
return or__60899__auto__;
} else {
var e__$1 = (function (){try{if(taoensso.truss.impl.some_QMARK_.call(null,_QMARK_cb_fn)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e89350){if((e89350 instanceof Error)){
var e__$1 = e89350;
return e__$1;
} else {
throw e89350;

}
}})();
if((e__$1 == null)){
return _QMARK_cb_fn;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",989,"(taoensso.truss.impl/some? ?cb-fn)",_QMARK_cb_fn,e__$1,null);
}
}
})();
cb_fn_STAR__89426.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439));
} else {
}

return false;
}}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var temp__6738__auto__ = (function (){var or__60899__auto__ = taoensso.encore.oget.call(null,goog.global,"WebSocket");
if(cljs.core.truth_(or__60899__auto__)){
return or__60899__auto__;
} else {
var or__60899__auto____$1 = taoensso.encore.oget.call(null,goog.global,"MozWebSocket");
if(cljs.core.truth_(or__60899__auto____$1)){
return or__60899__auto____$1;
} else {
return taoensso.encore.oget.call(null,cljs.core.deref.call(null,taoensso.sente._QMARK_node_npm_websocket_),"w3cwebsocket");
}
}
})();
if(cljs.core.truth_(temp__6738__auto__)){
var WebSocket = temp__6738__auto__;
var instance_handle = cljs.core.reset_BANG_.call(null,self__.instance_handle_,taoensso.encore.uuid_str.call(null));
var have_handle_QMARK_ = ((function (instance_handle,WebSocket,temp__6738__auto__,chsk__$1){
return (function (){
return cljs.core._EQ_.call(null,cljs.core.deref.call(null,self__.instance_handle_),instance_handle);
});})(instance_handle,WebSocket,temp__6738__auto__,chsk__$1))
;
var connect_fn = ((function (instance_handle,have_handle_QMARK_,WebSocket,temp__6738__auto__,chsk__$1){
return (function taoensso$sente$connect_fn(){
if(cljs.core.truth_(have_handle_QMARK_.call(null))){
var retry_fn = ((function (instance_handle,have_handle_QMARK_,WebSocket,temp__6738__auto__,chsk__$1){
return (function (){
if(cljs.core.truth_(have_handle_QMARK_.call(null))){
var retry_count_STAR_ = cljs.core.swap_BANG_.call(null,self__.retry_count_,cljs.core.inc);
var backoff_ms = self__.backoff_ms_fn.call(null,retry_count_STAR_);
var udt_next_reconnect = (taoensso.encore.now_udt.call(null) + backoff_ms);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init8382301926859034614.clj",1011,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__6738__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect attempt (%s) in %s ms",retry_count_STAR_,backoff_ms], null);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__6738__auto__,chsk__$1))
,null)),null,-1067001390);

goog.global.setTimeout(taoensso$sente$connect_fn,backoff_ms);

return taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__6738__auto__,chsk__$1){
return (function (p1__89311_SHARP_){
return cljs.core.assoc.call(null,p1__89311_SHARP_,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733),udt_next_reconnect);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__6738__auto__,chsk__$1))
);
} else {
return null;
}
});})(instance_handle,have_handle_QMARK_,WebSocket,temp__6738__auto__,chsk__$1))
;
var _QMARK_socket = (function (){try{return (new WebSocket(taoensso.encore.merge_url_with_query_string.call(null,self__.url,cljs.core.merge.call(null,self__.params,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id], null)))));
}catch (e89357){var e = e89357;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/tmp/form-init8382301926859034614.clj",1025,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,retry_fn,instance_handle,have_handle_QMARK_,WebSocket,temp__6738__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"WebSocket error"], null);
});})(e,retry_fn,instance_handle,have_handle_QMARK_,WebSocket,temp__6738__auto__,chsk__$1))
,null)),null,1821332714);

return null;
}})();
if(cljs.core.not.call(null,_QMARK_socket)){
return retry_fn.call(null);
} else {
return cljs.core.reset_BANG_.call(null,self__.socket_,(function (){var G__89358 = _QMARK_socket;
(G__89358["onerror"] = ((function (G__89358,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__6738__auto__,chsk__$1){
return (function (ws_ev){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/tmp/form-init8382301926859034614.clj",1035,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (G__89358,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__6738__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["WebSocket error: %s",(function (){try{return cljs.core.js__GT_clj.call(null,ws_ev);
}catch (e89359){var _ = e89359;
return ws_ev;
}})()], null);
});})(G__89358,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__6738__auto__,chsk__$1))
,null)),null,1064401001);

var last_ws_error = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"ev","ev",-406827324),ws_ev], null);
return taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (last_ws_error,G__89358,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__6738__auto__,chsk__$1){
return (function (p1__89312_SHARP_){
return cljs.core.assoc.call(null,p1__89312_SHARP_,new cljs.core.Keyword(null,"last-ws-error","last-ws-error",-820288502),last_ws_error);
});})(last_ws_error,G__89358,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__6738__auto__,chsk__$1))
);
});})(G__89358,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__6738__auto__,chsk__$1))
);

(G__89358["onmessage"] = ((function (G__89358,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__6738__auto__,chsk__$1){
return (function (ws_ev){
var ppstr = taoensso.encore.oget.call(null,ws_ev,"data");
var vec__89360 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__89360,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__89360,(1),null);
cljs.core.reset_BANG_.call(null,self__.udt_last_comms_,taoensso.encore.now_udt.call(null));

var or__60899__auto__ = (cljs.core.truth_(taoensso.sente.handshake_QMARK_.call(null,clj))?(function (){
taoensso.sente.receive_handshake_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),chsk__$1,clj);

cljs.core.reset_BANG_.call(null,self__.retry_count_,(0));

return new cljs.core.Keyword(null,"handshake","handshake",68079331);
})()
:null);
if(cljs.core.truth_(or__60899__auto__)){
return or__60899__auto__;
} else {
var or__60899__auto____$1 = ((cljs.core._EQ_.call(null,clj,new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)))?(function (){
cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(self__.chs),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)], null));

return new cljs.core.Keyword(null,"noop","noop",-673731258);
})()
:null);
if(cljs.core.truth_(or__60899__auto____$1)){
return or__60899__auto____$1;
} else {
var temp__6736__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__6736__auto__)){
var cb_uuid = temp__6736__auto__;
var temp__6736__auto____$1 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,cb_uuid);
if(cljs.core.truth_(temp__6736__auto____$1)){
var cb_fn = temp__6736__auto____$1;
return cb_fn.call(null,clj);
} else {
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init8382301926859034614.clj",1071,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (temp__6736__auto____$1,cb_uuid,temp__6736__auto__,or__60899__auto____$1,or__60899__auto__,ppstr,vec__89360,clj,_QMARK_cb_uuid,G__89358,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__6738__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",clj], null);
});})(temp__6736__auto____$1,cb_uuid,temp__6736__auto__,or__60899__auto____$1,or__60899__auto__,ppstr,vec__89360,clj,_QMARK_cb_uuid,G__89358,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__6738__auto__,chsk__$1))
,null)),null,1147521936);
}
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,buffered_evs);
}
}
}
});})(G__89358,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__6738__auto__,chsk__$1))
);

(G__89358["onclose"] = ((function (G__89358,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__6738__auto__,chsk__$1){
return (function (ws_ev){
var clean_QMARK_ = taoensso.encore.oget.call(null,ws_ev,"wasClean");
var code = taoensso.encore.oget.call(null,ws_ev,"code");
var reason = taoensso.encore.oget.call(null,ws_ev,"reason");
var last_ws_close = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"ev","ev",-406827324),ws_ev,new cljs.core.Keyword(null,"clean?","clean?",-1675631009),clean_QMARK_,new cljs.core.Keyword(null,"code","code",1586293142),code,new cljs.core.Keyword(null,"reason","reason",-2070751759),reason], null);
if(cljs.core.truth_(clean_QMARK_)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/tmp/form-init8382301926859034614.clj",1093,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (clean_QMARK_,code,reason,last_ws_close,G__89358,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__6738__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Clean WebSocket close, will not attempt reconnect"], null);
});})(clean_QMARK_,code,reason,last_ws_close,G__89358,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__6738__auto__,chsk__$1))
,null)),null,-290463366);

return taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (clean_QMARK_,code,reason,last_ws_close,G__89358,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__6738__auto__,chsk__$1){
return (function (p1__89313_SHARP_){
return cljs.core.assoc.call(null,p1__89313_SHARP_,new cljs.core.Keyword(null,"last-ws-close","last-ws-close",-798104932),last_ws_close);
});})(clean_QMARK_,code,reason,last_ws_close,G__89358,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__6738__auto__,chsk__$1))
);
} else {
taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (clean_QMARK_,code,reason,last_ws_close,G__89358,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__6738__auto__,chsk__$1){
return (function (p1__89314_SHARP_){
return cljs.core.assoc.call(null,taoensso.sente.chsk_state__GT_closed.call(null,p1__89314_SHARP_,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424)),new cljs.core.Keyword(null,"last-ws-close","last-ws-close",-798104932),last_ws_close);
});})(clean_QMARK_,code,reason,last_ws_close,G__89358,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__6738__auto__,chsk__$1))
);

return retry_fn.call(null);
}
});})(G__89358,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__6738__auto__,chsk__$1))
);

return G__89358;
})());
}
} else {
return null;
}
});})(instance_handle,have_handle_QMARK_,WebSocket,temp__6738__auto__,chsk__$1))
;
var temp__6738__auto___89427__$1 = self__.ws_kalive_ms;
if(cljs.core.truth_(temp__6738__auto___89427__$1)){
var ms_89428 = temp__6738__auto___89427__$1;
var c__69114__auto___89429 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__69114__auto___89429,ms_89428,temp__6738__auto___89427__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__6738__auto__,chsk__$1){
return (function (){
var f__69115__auto__ = (function (){var switch__69000__auto__ = ((function (c__69114__auto___89429,ms_89428,temp__6738__auto___89427__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__6738__auto__,chsk__$1){
return (function (state_89390){
var state_val_89391 = (state_89390[(1)]);
if((state_val_89391 === (7))){
var inst_89386 = (state_89390[(2)]);
var state_89390__$1 = state_89390;
var statearr_89392_89430 = state_89390__$1;
(statearr_89392_89430[(2)] = inst_89386);

(statearr_89392_89430[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89391 === (1))){
var state_89390__$1 = state_89390;
var statearr_89393_89431 = state_89390__$1;
(statearr_89393_89431[(2)] = null);

(statearr_89393_89431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89391 === (4))){
var inst_89367 = (state_89390[(2)]);
var inst_89368 = have_handle_QMARK_.call(null);
var state_89390__$1 = (function (){var statearr_89394 = state_89390;
(statearr_89394[(7)] = inst_89367);

return statearr_89394;
})();
if(cljs.core.truth_(inst_89368)){
var statearr_89395_89432 = state_89390__$1;
(statearr_89395_89432[(1)] = (5));

} else {
var statearr_89396_89433 = state_89390__$1;
(statearr_89396_89433[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89391 === (6))){
var state_89390__$1 = state_89390;
var statearr_89397_89434 = state_89390__$1;
(statearr_89397_89434[(2)] = null);

(statearr_89397_89434[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89391 === (3))){
var inst_89388 = (state_89390[(2)]);
var state_89390__$1 = state_89390;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_89390__$1,inst_89388);
} else {
if((state_val_89391 === (2))){
var inst_89364 = cljs.core.deref.call(null,self__.udt_last_comms_);
var inst_89365 = cljs.core.async.timeout.call(null,ms_89428);
var state_89390__$1 = (function (){var statearr_89398 = state_89390;
(statearr_89398[(8)] = inst_89364);

return statearr_89398;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_89390__$1,(4),inst_89365);
} else {
if((state_val_89391 === (9))){
var state_89390__$1 = state_89390;
var statearr_89399_89435 = state_89390__$1;
(statearr_89399_89435[(2)] = null);

(statearr_89399_89435[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89391 === (5))){
var inst_89364 = (state_89390[(8)]);
var inst_89370 = cljs.core.deref.call(null,self__.udt_last_comms_);
var inst_89371 = cljs.core._EQ_.call(null,inst_89364,inst_89370);
var state_89390__$1 = state_89390;
if(inst_89371){
var statearr_89400_89436 = state_89390__$1;
(statearr_89400_89436[(1)] = (8));

} else {
var statearr_89401_89437 = state_89390__$1;
(statearr_89401_89437[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89391 === (10))){
var inst_89382 = (state_89390[(2)]);
var state_89390__$1 = (function (){var statearr_89402 = state_89390;
(statearr_89402[(9)] = inst_89382);

return statearr_89402;
})();
var statearr_89403_89438 = state_89390__$1;
(statearr_89403_89438[(2)] = null);

(statearr_89403_89438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89391 === (8))){
var inst_89373 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_89374 = [new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)];
var inst_89375 = (new cljs.core.PersistentVector(null,1,(5),inst_89373,inst_89374,null));
var inst_89376 = [new cljs.core.Keyword(null,"flush?","flush?",-108887231)];
var inst_89377 = [true];
var inst_89378 = cljs.core.PersistentHashMap.fromArrays(inst_89376,inst_89377);
var inst_89379 = taoensso.sente._chsk_send_BANG_.call(null,chsk__$1,inst_89375,inst_89378);
var state_89390__$1 = state_89390;
var statearr_89404_89439 = state_89390__$1;
(statearr_89404_89439[(2)] = inst_89379);

(statearr_89404_89439[(1)] = (10));


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
});})(c__69114__auto___89429,ms_89428,temp__6738__auto___89427__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__6738__auto__,chsk__$1))
;
return ((function (switch__69000__auto__,c__69114__auto___89429,ms_89428,temp__6738__auto___89427__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__6738__auto__,chsk__$1){
return (function() {
var taoensso$sente$state_machine__69001__auto__ = null;
var taoensso$sente$state_machine__69001__auto____0 = (function (){
var statearr_89408 = [null,null,null,null,null,null,null,null,null,null];
(statearr_89408[(0)] = taoensso$sente$state_machine__69001__auto__);

(statearr_89408[(1)] = (1));

return statearr_89408;
});
var taoensso$sente$state_machine__69001__auto____1 = (function (state_89390){
while(true){
var ret_value__69002__auto__ = (function (){try{while(true){
var result__69003__auto__ = switch__69000__auto__.call(null,state_89390);
if(cljs.core.keyword_identical_QMARK_.call(null,result__69003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69003__auto__;
}
break;
}
}catch (e89409){if((e89409 instanceof Object)){
var ex__69004__auto__ = e89409;
var statearr_89410_89440 = state_89390;
(statearr_89410_89440[(5)] = ex__69004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_89390);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e89409;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__69002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__89441 = state_89390;
state_89390 = G__89441;
continue;
} else {
return ret_value__69002__auto__;
}
break;
}
});
taoensso$sente$state_machine__69001__auto__ = function(state_89390){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__69001__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__69001__auto____1.call(this,state_89390);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$sente$state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__69001__auto____0;
taoensso$sente$state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__69001__auto____1;
return taoensso$sente$state_machine__69001__auto__;
})()
;})(switch__69000__auto__,c__69114__auto___89429,ms_89428,temp__6738__auto___89427__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__6738__auto__,chsk__$1))
})();
var state__69116__auto__ = (function (){var statearr_89411 = f__69115__auto__.call(null);
(statearr_89411[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__69114__auto___89429);

return statearr_89411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__69116__auto__);
});})(c__69114__auto___89429,ms_89428,temp__6738__auto___89427__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__6738__auto__,chsk__$1))
);

} else {
}

cljs.core.reset_BANG_.call(null,self__.retry_count_,(0));

connect_fn.call(null);

return chsk__$1;
} else {
return null;
}
});

taoensso.sente.ChWebSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"client-id","client-id",1175909387,null),new cljs.core.Symbol(null,"chs","chs",2017417647,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"packer","packer",1706609071,null),new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"ws-kalive-ms","ws-kalive-ms",-1212255801,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"instance-handle_","instance-handle_",-282852930,null),new cljs.core.Symbol(null,"retry-count_","retry-count_",1660769620,null),new cljs.core.Symbol(null,"ever-opened?_","ever-opened?_",-1013096856,null),new cljs.core.Symbol(null,"backoff-ms-fn","backoff-ms-fn",-1881539814,null),new cljs.core.Symbol(null,"cbs-waiting_","cbs-waiting_",121502466,null),new cljs.core.Symbol(null,"socket_","socket_",1279482619,null),new cljs.core.Symbol(null,"udt-last-comms_","udt-last-comms_",1494731888,null)], null);
});

taoensso.sente.ChWebSocket.cljs$lang$type = true;

taoensso.sente.ChWebSocket.cljs$lang$ctorPrSeq = (function (this__61610__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChWebSocket");
});

taoensso.sente.ChWebSocket.cljs$lang$ctorPrWriter = (function (this__61610__auto__,writer__61611__auto__){
return cljs.core._write.call(null,writer__61611__auto__,"taoensso.sente/ChWebSocket");
});

taoensso.sente.__GT_ChWebSocket = (function taoensso$sente$__GT_ChWebSocket(client_id,chs,params,packer,url,ws_kalive_ms,state_,instance_handle_,retry_count_,ever_opened_QMARK__,backoff_ms_fn,cbs_waiting_,socket_,udt_last_comms_){
return (new taoensso.sente.ChWebSocket(client_id,chs,params,packer,url,ws_kalive_ms,state_,instance_handle_,retry_count_,ever_opened_QMARK__,backoff_ms_fn,cbs_waiting_,socket_,udt_last_comms_,null,null,null));
});

taoensso.sente.map__GT_ChWebSocket = (function taoensso$sente$map__GT_ChWebSocket(G__89317){
return (new taoensso.sente.ChWebSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__89317),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__89317),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__89317),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__89317),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__89317),new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968).cljs$core$IFn$_invoke$arity$1(G__89317),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__89317),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457).cljs$core$IFn$_invoke$arity$1(G__89317),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093).cljs$core$IFn$_invoke$arity$1(G__89317),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913).cljs$core$IFn$_invoke$arity$1(G__89317),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__89317),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061).cljs$core$IFn$_invoke$arity$1(G__89317),new cljs.core.Keyword(null,"socket_","socket_",-361048908).cljs$core$IFn$_invoke$arity$1(G__89317),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639).cljs$core$IFn$_invoke$arity$1(G__89317),null,cljs.core.dissoc.call(null,G__89317,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639)),null));
});

taoensso.sente.new_ChWebSocket = (function taoensso$sente$new_ChWebSocket(opts){
return taoensso.sente.map__GT_ChWebSocket.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"state_","state_",957667102),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),false], null)),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),cljs.core.atom.call(null,null),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),cljs.core.atom.call(null,(0)),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),cljs.core.atom.call(null,false),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"socket_","socket_",-361048908),cljs.core.atom.call(null,null),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),cljs.core.atom.call(null,null)], null),opts));
});
/**
 * We must set *some* client-side timeout otherwise an unpredictable (and
 *   probably too short) browser default will be used. Must be > server's
 *   :lp-timeout-ms.
 */
taoensso.sente.default_client_side_ajax_timeout_ms = taoensso.encore.ms.call(null,new cljs.core.Keyword(null,"secs","secs",1532330091),(60));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChAjaxSocket = (function (client_id,chs,params,packer,url,state_,instance_handle_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_,__meta,__extmap,__hash){
this.client_id = client_id;
this.chs = chs;
this.params = params;
this.packer = packer;
this.url = url;
this.state_ = state_;
this.instance_handle_ = instance_handle_;
this.ever_opened_QMARK__ = ever_opened_QMARK__;
this.backoff_ms_fn = backoff_ms_fn;
this.ajax_opts = ajax_opts;
this.curr_xhr_ = curr_xhr_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__61574__auto__,k__61575__auto__){
var self__ = this;
var this__61574__auto____$1 = this;
return this__61574__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__61575__auto__,null);
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__61576__auto__,k89449,else__61577__auto__){
var self__ = this;
var this__61576__auto____$1 = this;
var G__89451 = k89449;
var G__89451__$1 = (((G__89451 instanceof cljs.core.Keyword))?G__89451.fqn:null);
switch (G__89451__$1) {
case "curr-xhr_":
return self__.curr_xhr_;

break;
case "ever-opened?_":
return self__.ever_opened_QMARK__;

break;
case "client-id":
return self__.client_id;

break;
case "packer":
return self__.packer;

break;
case "chs":
return self__.chs;

break;
case "params":
return self__.params;

break;
case "backoff-ms-fn":
return self__.backoff_ms_fn;

break;
case "url":
return self__.url;

break;
case "instance-handle_":
return self__.instance_handle_;

break;
case "ajax-opts":
return self__.ajax_opts;

break;
case "state_":
return self__.state_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k89449,else__61577__auto__);

}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__61588__auto__,writer__61589__auto__,opts__61590__auto__){
var self__ = this;
var this__61588__auto____$1 = this;
var pr_pair__61591__auto__ = ((function (this__61588__auto____$1){
return (function (keyval__61592__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__61589__auto__,cljs.core.pr_writer,""," ","",opts__61590__auto__,keyval__61592__auto__);
});})(this__61588__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__61589__auto__,pr_pair__61591__auto__,"#taoensso.sente.ChAjaxSocket{",", ","}",opts__61590__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),self__.instance_handle_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__89448){
var self__ = this;
var G__89448__$1 = this;
return (new cljs.core.RecordIter((0),G__89448__$1,11,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__61572__auto__){
var self__ = this;
var this__61572__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__61568__auto__){
var self__ = this;
var this__61568__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__61578__auto__){
var self__ = this;
var this__61578__auto____$1 = this;
return (11 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__61569__auto__){
var self__ = this;
var this__61569__auto____$1 = this;
var h__61341__auto__ = self__.__hash;
if(!((h__61341__auto__ == null))){
return h__61341__auto__;
} else {
var h__61341__auto____$1 = cljs.core.hash_imap.call(null,this__61569__auto____$1);
self__.__hash = h__61341__auto____$1;

return h__61341__auto____$1;
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__61570__auto__,other__61571__auto__){
var self__ = this;
var this__61570__auto____$1 = this;
if(cljs.core.truth_((function (){var and__60887__auto__ = other__61571__auto__;
if(cljs.core.truth_(and__60887__auto__)){
return ((this__61570__auto____$1.constructor === other__61571__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__61570__auto____$1,other__61571__auto__));
} else {
return and__60887__auto__;
}
})())){
return true;
} else {
return false;
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__61583__auto__,k__61584__auto__){
var self__ = this;
var this__61583__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__61584__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__61583__auto____$1),self__.__meta),k__61584__auto__);
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__61584__auto__)),null));
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__61581__auto__,k__61582__auto__,G__89448){
var self__ = this;
var this__61581__auto____$1 = this;
var pred__89452 = cljs.core.keyword_identical_QMARK_;
var expr__89453 = k__61582__auto__;
if(cljs.core.truth_(pred__89452.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__89453))){
return (new taoensso.sente.ChAjaxSocket(G__89448,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__89452.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__89453))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,G__89448,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__89452.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__89453))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,G__89448,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__89452.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__89453))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,G__89448,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__89452.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__89453))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__89448,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__89452.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__89453))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__89448,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__89452.call(null,new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),expr__89453))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,G__89448,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__89452.call(null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),expr__89453))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,G__89448,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__89452.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__89453))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,G__89448,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__89452.call(null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),expr__89453))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,G__89448,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__89452.call(null,new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),expr__89453))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,G__89448,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__61582__auto__,G__89448),null));
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
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__61586__auto__){
var self__ = this;
var this__61586__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),self__.instance_handle_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__61573__auto__,G__89448){
var self__ = this;
var this__61573__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,G__89448,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__61579__auto__,entry__61580__auto__){
var self__ = this;
var this__61579__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__61580__auto__)){
return this__61579__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__61580__auto__,(0)),cljs.core._nth.call(null,entry__61580__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__61579__auto____$1,entry__61580__auto__);
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$ = cljs.core.PROTOCOL_SENTINEL;

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
cljs.core.reset_BANG_.call(null,self__.instance_handle_,null);

taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (chsk__$1){
return (function (p1__89442_SHARP_){
return taoensso.sente.chsk_state__GT_closed.call(null,p1__89442_SHARP_,reason);
});})(chsk__$1))
);

var temp__6738__auto__ = cljs.core.deref.call(null,self__.curr_xhr_);
if(cljs.core.truth_(temp__6738__auto__)){
var x = temp__6738__auto__;
return x.abort();
} else {
return null;
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
chsk__$1.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2(null,new cljs.core.Keyword(null,"requested-reconnect","requested-reconnect",2008347707));

return chsk__$1.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(null);
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,opts){
var self__ = this;
var chsk__$1 = this;
var map__89455 = opts;
var map__89455__$1 = ((((!((map__89455 == null)))?((((map__89455.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89455.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__89455):map__89455);
var _QMARK_timeout_ms = cljs.core.get.call(null,map__89455__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.call(null,map__89455__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.call(null,map__89455__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var _ = taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
return taoensso.sente.chsk_send__GT_closed_BANG_.call(null,_QMARK_cb_fn);
} else {
var csrf_token = new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_));
taoensso.sente.ajax_lite.call(null,self__.url,cljs.core.merge.call(null,self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(function (){var or__60899__auto__ = _QMARK_timeout_ms;
if(cljs.core.truth_(or__60899__auto__)){
return or__60899__auto__;
} else {
var or__60899__auto____$1 = new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts);
if(cljs.core.truth_(or__60899__auto____$1)){
return or__60899__auto____$1;
} else {
return taoensso.sente.default_client_side_ajax_timeout_ms;
}
}
})(),new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.merge.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"X-CSRF-Token","X-CSRF-Token",1562992453),csrf_token], null)),new cljs.core.Keyword(null,"params","params",710516235),(function (){var ppstr = taoensso.sente.pack.call(null,self__.packer,cljs.core.meta.call(null,ev),ev,(cljs.core.truth_(_QMARK_cb_fn)?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):null));
return cljs.core.merge.call(null,self__.params,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),csrf_token,new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id,new cljs.core.Keyword(null,"ppstr","ppstr",1557495252),ppstr], null));
})()], null)),((function (csrf_token,map__89455,map__89455__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function taoensso$sente$ajax_cb(p__89457){
var map__89463 = p__89457;
var map__89463__$1 = ((((!((map__89463 == null)))?((((map__89463.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89463.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__89463):map__89463);
var _QMARK_error = cljs.core.get.call(null,map__89463__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.call(null,map__89463__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.call(null,_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
} else {
return null;
}
} else {
taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (map__89463,map__89463__$1,_QMARK_error,_QMARK_content,csrf_token,map__89455,map__89455__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (p1__89443_SHARP_){
return taoensso.sente.chsk_state__GT_closed.call(null,p1__89443_SHARP_,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424));
});})(map__89463,map__89463__$1,_QMARK_error,_QMARK_content,csrf_token,map__89455,map__89455__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
);

if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439));
} else {
return null;
}
}
} else {
var content = _QMARK_content;
var resp_ppstr = content;
var vec__89465 = taoensso.sente.unpack.call(null,self__.packer,resp_ppstr);
var resp_clj = cljs.core.nth.call(null,vec__89465,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__89465,(1),null);
if(cljs.core.truth_(_QMARK_cb_fn)){
_QMARK_cb_fn.call(null,resp_clj);
} else {
if(cljs.core.not_EQ_.call(null,resp_clj,new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init8382301926859034614.clj",1213,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (content,resp_ppstr,vec__89465,resp_clj,___$1,map__89463,map__89463__$1,_QMARK_error,_QMARK_content,csrf_token,map__89455,map__89455__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",resp_clj], null);
});})(content,resp_ppstr,vec__89465,resp_clj,___$1,map__89463,map__89463__$1,_QMARK_error,_QMARK_content,csrf_token,map__89455,map__89455__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
,null)),null,-1698006838);
} else {
}
}

return taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (content,resp_ppstr,vec__89465,resp_clj,___$1,map__89463,map__89463__$1,_QMARK_error,_QMARK_content,csrf_token,map__89455,map__89455__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (p1__89444_SHARP_){
return cljs.core.assoc.call(null,p1__89444_SHARP_,new cljs.core.Keyword(null,"open?","open?",1238443125),true);
});})(content,resp_ppstr,vec__89465,resp_clj,___$1,map__89463,map__89463__$1,_QMARK_error,_QMARK_content,csrf_token,map__89455,map__89455__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
);
}
});})(csrf_token,map__89455,map__89455__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
);

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var instance_handle = cljs.core.reset_BANG_.call(null,self__.instance_handle_,taoensso.encore.uuid_str.call(null));
var have_handle_QMARK_ = ((function (instance_handle,chsk__$1){
return (function (){
return cljs.core._EQ_.call(null,cljs.core.deref.call(null,self__.instance_handle_),instance_handle);
});})(instance_handle,chsk__$1))
;
var poll_fn = ((function (instance_handle,have_handle_QMARK_,chsk__$1){
return (function taoensso$sente$poll_fn(retry_count){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init8382301926859034614.clj",1223,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["async-poll-for-update!"], null);
});})(instance_handle,have_handle_QMARK_,chsk__$1))
,null)),null,-1227611118);

if(cljs.core.truth_(have_handle_QMARK_.call(null))){
var retry_fn = ((function (instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
if(cljs.core.truth_(have_handle_QMARK_.call(null))){
var retry_count_STAR_ = (retry_count + (1));
var backoff_ms = self__.backoff_ms_fn.call(null,retry_count_STAR_);
var udt_next_reconnect = (taoensso.encore.now_udt.call(null) + backoff_ms);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init8382301926859034614.clj",1231,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect attempt (%s) in %s ms",retry_count_STAR_,backoff_ms], null);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1))
,null)),null,-916629752);

goog.global.setTimeout(((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
return taoensso$sente$poll_fn.call(null,retry_count_STAR_);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1))
,backoff_ms);

return taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (p1__89445_SHARP_){
return cljs.core.assoc.call(null,p1__89445_SHARP_,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733),udt_next_reconnect);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1))
);
} else {
return null;
}
});})(instance_handle,have_handle_QMARK_,chsk__$1))
;
return cljs.core.reset_BANG_.call(null,self__.curr_xhr_,taoensso.sente.ajax_lite.call(null,self__.url,cljs.core.merge.call(null,self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(function (){var or__60899__auto__ = new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts);
if(cljs.core.truth_(or__60899__auto__)){
return or__60899__auto__;
} else {
return taoensso.sente.default_client_side_ajax_timeout_ms;
}
})(),new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.merge.call(null,self__.params,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id], null),(cljs.core.truth_(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handshake?","handshake?",-423743093),true], null)))], null)),((function (retry_fn,instance_handle,have_handle_QMARK_,chsk__$1){
return (function taoensso$sente$poll_fn_$_ajax_cb(p__89479){
var map__89485 = p__89479;
var map__89485__$1 = ((((!((map__89485 == null)))?((((map__89485.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89485.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__89485):map__89485);
var _QMARK_error = cljs.core.get.call(null,map__89485__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.call(null,map__89485__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.call(null,_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
return taoensso$sente$poll_fn.call(null,(0));
} else {
taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (map__89485,map__89485__$1,_QMARK_error,_QMARK_content,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (p1__89446_SHARP_){
return taoensso.sente.chsk_state__GT_closed.call(null,p1__89446_SHARP_,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424));
});})(map__89485,map__89485__$1,_QMARK_error,_QMARK_content,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1))
);

return retry_fn.call(null);

}
} else {
var content = _QMARK_content;
var ppstr = content;
var vec__89487 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__89487,(0),null);
var handshake_QMARK_ = taoensso.sente.handshake_QMARK_.call(null,clj);
if(cljs.core.truth_(handshake_QMARK_)){
taoensso.sente.receive_handshake_BANG_.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549),chsk__$1,clj);
} else {
}

taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (content,ppstr,vec__89487,clj,handshake_QMARK_,map__89485,map__89485__$1,_QMARK_error,_QMARK_content,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (p1__89447_SHARP_){
return cljs.core.assoc.call(null,p1__89447_SHARP_,new cljs.core.Keyword(null,"open?","open?",1238443125),true);
});})(content,ppstr,vec__89487,clj,handshake_QMARK_,map__89485,map__89485__$1,_QMARK_error,_QMARK_content,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1))
);

taoensso$sente$poll_fn.call(null,(0));

if(cljs.core.truth_(handshake_QMARK_)){
return null;
} else {
var or__60899__auto__ = ((cljs.core._EQ_.call(null,clj,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489)))?(function (){
if(cljs.core.truth_(cljs.core.deref.call(null,taoensso.sente.debug_mode_QMARK__))){
taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("debug","timeout","debug/timeout",309499949)], null)], null));
} else {
}

return new cljs.core.Keyword(null,"noop","noop",-673731258);
})()
:null);
if(cljs.core.truth_(or__60899__auto__)){
return or__60899__auto__;
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,buffered_evs);
}
}
}
});})(retry_fn,instance_handle,have_handle_QMARK_,chsk__$1))
));
} else {
return null;
}
});})(instance_handle,have_handle_QMARK_,chsk__$1))
;
poll_fn.call(null,(0));

return chsk__$1;
});

taoensso.sente.ChAjaxSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"client-id","client-id",1175909387,null),new cljs.core.Symbol(null,"chs","chs",2017417647,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"packer","packer",1706609071,null),new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"instance-handle_","instance-handle_",-282852930,null),new cljs.core.Symbol(null,"ever-opened?_","ever-opened?_",-1013096856,null),new cljs.core.Symbol(null,"backoff-ms-fn","backoff-ms-fn",-1881539814,null),new cljs.core.Symbol(null,"ajax-opts","ajax-opts",1122292418,null),new cljs.core.Symbol(null,"curr-xhr_","curr-xhr_",321757831,null)], null);
});

taoensso.sente.ChAjaxSocket.cljs$lang$type = true;

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrSeq = (function (this__61610__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrWriter = (function (this__61610__auto__,writer__61611__auto__){
return cljs.core._write.call(null,writer__61611__auto__,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.__GT_ChAjaxSocket = (function taoensso$sente$__GT_ChAjaxSocket(client_id,chs,params,packer,url,state_,instance_handle_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_){
return (new taoensso.sente.ChAjaxSocket(client_id,chs,params,packer,url,state_,instance_handle_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_,null,null,null));
});

taoensso.sente.map__GT_ChAjaxSocket = (function taoensso$sente$map__GT_ChAjaxSocket(G__89450){
return (new taoensso.sente.ChAjaxSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__89450),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__89450),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__89450),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__89450),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__89450),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__89450),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457).cljs$core$IFn$_invoke$arity$1(G__89450),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913).cljs$core$IFn$_invoke$arity$1(G__89450),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__89450),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109).cljs$core$IFn$_invoke$arity$1(G__89450),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696).cljs$core$IFn$_invoke$arity$1(G__89450),null,cljs.core.dissoc.call(null,G__89450,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696)),null));
});

taoensso.sente.new_ChAjaxSocket = (function taoensso$sente$new_ChAjaxSocket(opts){
return taoensso.sente.map__GT_ChAjaxSocket.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state_","state_",957667102),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ajax","ajax",814345549),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),false], null)),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),cljs.core.atom.call(null,null),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),cljs.core.atom.call(null,false),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),cljs.core.atom.call(null,null)], null),opts));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChAutoSocket = (function (ws_chsk_opts,ajax_chsk_opts,state_,impl_,__meta,__extmap,__hash){
this.ws_chsk_opts = ws_chsk_opts;
this.ajax_chsk_opts = ajax_chsk_opts;
this.state_ = state_;
this.impl_ = impl_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
taoensso.sente.ChAutoSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__61574__auto__,k__61575__auto__){
var self__ = this;
var this__61574__auto____$1 = this;
return this__61574__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__61575__auto__,null);
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__61576__auto__,k89492,else__61577__auto__){
var self__ = this;
var this__61576__auto____$1 = this;
var G__89494 = k89492;
var G__89494__$1 = (((G__89494 instanceof cljs.core.Keyword))?G__89494.fqn:null);
switch (G__89494__$1) {
case "ws-chsk-opts":
return self__.ws_chsk_opts;

break;
case "ajax-chsk-opts":
return self__.ajax_chsk_opts;

break;
case "state_":
return self__.state_;

break;
case "impl_":
return self__.impl_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k89492,else__61577__auto__);

}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__61588__auto__,writer__61589__auto__,opts__61590__auto__){
var self__ = this;
var this__61588__auto____$1 = this;
var pr_pair__61591__auto__ = ((function (this__61588__auto____$1){
return (function (keyval__61592__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__61589__auto__,cljs.core.pr_writer,""," ","",opts__61590__auto__,keyval__61592__auto__);
});})(this__61588__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__61589__auto__,pr_pair__61591__auto__,"#taoensso.sente.ChAutoSocket{",", ","}",opts__61590__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),self__.ws_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),self__.ajax_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"impl_","impl_",1218818179),self__.impl_],null))], null),self__.__extmap));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

taoensso.sente.ChAutoSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__89491){
var self__ = this;
var G__89491__$1 = this;
return (new cljs.core.RecordIter((0),G__89491__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"impl_","impl_",1218818179)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__61572__auto__){
var self__ = this;
var this__61572__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__61568__auto__){
var self__ = this;
var this__61568__auto____$1 = this;
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__61578__auto__){
var self__ = this;
var this__61578__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__61569__auto__){
var self__ = this;
var this__61569__auto____$1 = this;
var h__61341__auto__ = self__.__hash;
if(!((h__61341__auto__ == null))){
return h__61341__auto__;
} else {
var h__61341__auto____$1 = cljs.core.hash_imap.call(null,this__61569__auto____$1);
self__.__hash = h__61341__auto____$1;

return h__61341__auto____$1;
}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__61570__auto__,other__61571__auto__){
var self__ = this;
var this__61570__auto____$1 = this;
if(cljs.core.truth_((function (){var and__60887__auto__ = other__61571__auto__;
if(cljs.core.truth_(and__60887__auto__)){
return ((this__61570__auto____$1.constructor === other__61571__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__61570__auto____$1,other__61571__auto__));
} else {
return and__60887__auto__;
}
})())){
return true;
} else {
return false;
}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__61583__auto__,k__61584__auto__){
var self__ = this;
var this__61583__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"impl_","impl_",1218818179),null,new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),null,new cljs.core.Keyword(null,"state_","state_",957667102),null,new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),null], null), null),k__61584__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__61583__auto____$1),self__.__meta),k__61584__auto__);
} else {
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__61584__auto__)),null));
}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__61581__auto__,k__61582__auto__,G__89491){
var self__ = this;
var this__61581__auto____$1 = this;
var pred__89495 = cljs.core.keyword_identical_QMARK_;
var expr__89496 = k__61582__auto__;
if(cljs.core.truth_(pred__89495.call(null,new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),expr__89496))){
return (new taoensso.sente.ChAutoSocket(G__89491,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__89495.call(null,new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),expr__89496))){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,G__89491,self__.state_,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__89495.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__89496))){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,G__89491,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__89495.call(null,new cljs.core.Keyword(null,"impl_","impl_",1218818179),expr__89496))){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,G__89491,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__61582__auto__,G__89491),null));
}
}
}
}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__61586__auto__){
var self__ = this;
var this__61586__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),self__.ws_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),self__.ajax_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"impl_","impl_",1218818179),self__.impl_],null))], null),self__.__extmap));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__61573__auto__,G__89491){
var self__ = this;
var this__61573__auto____$1 = this;
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,G__89491,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__61579__auto__,entry__61580__auto__){
var self__ = this;
var this__61579__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__61580__auto__)){
return this__61579__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__61580__auto__,(0)),cljs.core._nth.call(null,entry__61580__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__61579__auto____$1,entry__61580__auto__);
}
});

taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$ = cljs.core.PROTOCOL_SENTINEL;

taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
var temp__6738__auto__ = cljs.core.deref.call(null,self__.impl_);
if(cljs.core.truth_(temp__6738__auto__)){
var impl = temp__6738__auto__;
return taoensso.sente._chsk_disconnect_BANG_.call(null,impl,reason);
} else {
return null;
}
});

taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var temp__6738__auto__ = cljs.core.deref.call(null,self__.impl_);
if(cljs.core.truth_(temp__6738__auto__)){
var impl = temp__6738__auto__;
taoensso.sente._chsk_disconnect_BANG_.call(null,impl,new cljs.core.Keyword(null,"requested-reconnect","requested-reconnect",2008347707));

return chsk__$1.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(null);
} else {
return null;
}
});

taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,opts){
var self__ = this;
var chsk__$1 = this;
var temp__6736__auto__ = cljs.core.deref.call(null,self__.impl_);
if(cljs.core.truth_(temp__6736__auto__)){
var impl = temp__6736__auto__;
return taoensso.sente._chsk_send_BANG_.call(null,impl,ev,opts);
} else {
var map__89498 = opts;
var map__89498__$1 = ((((!((map__89498 == null)))?((((map__89498.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89498.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__89498):map__89498);
var _QMARK_cb = cljs.core.get.call(null,map__89498__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
return taoensso.sente.chsk_send__GT_closed_BANG_.call(null,_QMARK_cb_fn);
}
});

taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var ajax_chsk_opts__$1 = cljs.core.assoc.call(null,self__.ajax_chsk_opts,new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_);
var ws_chsk_opts__$1 = cljs.core.assoc.call(null,self__.ws_chsk_opts,new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_);
var ajax_conn_BANG_ = ((function (ajax_chsk_opts__$1,ws_chsk_opts__$1,chsk__$1){
return (function (){
cljs.core.remove_watch.call(null,self__.state_,new cljs.core.Keyword("chsk","auto-ajax-downgrade","chsk/auto-ajax-downgrade",-831528080));

return taoensso.sente._chsk_connect_BANG_.call(null,taoensso.sente.new_ChAjaxSocket.call(null,ajax_chsk_opts__$1));
});})(ajax_chsk_opts__$1,ws_chsk_opts__$1,chsk__$1))
;
var ws_conn_BANG_ = ((function (ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1){
return (function (){
var downgraded_QMARK___89501 = cljs.core.atom.call(null,false);
cljs.core.add_watch.call(null,self__.state_,new cljs.core.Keyword("chsk","auto-ajax-downgrade","chsk/auto-ajax-downgrade",-831528080),((function (downgraded_QMARK___89501,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1){
return (function (_,___$1,old_state,new_state){
var temp__6738__auto__ = cljs.core.deref.call(null,self__.impl_);
if(cljs.core.truth_(temp__6738__auto__)){
var impl = temp__6738__auto__;
var temp__6738__auto____$1 = new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913).cljs$core$IFn$_invoke$arity$1(impl);
if(cljs.core.truth_(temp__6738__auto____$1)){
var ever_opened_QMARK__ = temp__6738__auto____$1;
if(cljs.core.truth_(cljs.core.deref.call(null,ever_opened_QMARK__))){
return null;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"last-error","last-error",1848699973).cljs$core$IFn$_invoke$arity$1(new_state))){
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_.call(null,downgraded_QMARK___89501,false,true))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init8382301926859034614.clj",1359,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (ever_opened_QMARK__,temp__6738__auto____$1,impl,temp__6738__auto__,downgraded_QMARK___89501,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Permanently downgrading :auto chsk -> :ajax"], null);
});})(ever_opened_QMARK__,temp__6738__auto____$1,impl,temp__6738__auto__,downgraded_QMARK___89501,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1))
,null)),null,1053047825);

taoensso.sente._chsk_disconnect_BANG_.call(null,impl,new cljs.core.Keyword(null,"downgrading-ws-to-ajax","downgrading-ws-to-ajax",402136720));

return cljs.core.reset_BANG_.call(null,self__.impl_,ajax_conn_BANG_.call(null));
} else {
return null;
}
} else {
return null;
}
}
} else {
return null;
}
} else {
return null;
}
});})(downgraded_QMARK___89501,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1))
);

return taoensso.sente._chsk_connect_BANG_.call(null,taoensso.sente.new_ChWebSocket.call(null,ws_chsk_opts__$1));
});})(ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1))
;
cljs.core.reset_BANG_.call(null,self__.impl_,(function (){var or__60899__auto__ = ws_conn_BANG_.call(null);
if(cljs.core.truth_(or__60899__auto__)){
return or__60899__auto__;
} else {
return ajax_conn_BANG_.call(null);
}
})());

return chsk__$1;
});

taoensso.sente.ChAutoSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ws-chsk-opts","ws-chsk-opts",-349638577,null),new cljs.core.Symbol(null,"ajax-chsk-opts","ajax-chsk-opts",-1051844442,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"impl_","impl_",-1435617590,null)], null);
});

taoensso.sente.ChAutoSocket.cljs$lang$type = true;

taoensso.sente.ChAutoSocket.cljs$lang$ctorPrSeq = (function (this__61610__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChAutoSocket");
});

taoensso.sente.ChAutoSocket.cljs$lang$ctorPrWriter = (function (this__61610__auto__,writer__61611__auto__){
return cljs.core._write.call(null,writer__61611__auto__,"taoensso.sente/ChAutoSocket");
});

taoensso.sente.__GT_ChAutoSocket = (function taoensso$sente$__GT_ChAutoSocket(ws_chsk_opts,ajax_chsk_opts,state_,impl_){
return (new taoensso.sente.ChAutoSocket(ws_chsk_opts,ajax_chsk_opts,state_,impl_,null,null,null));
});

taoensso.sente.map__GT_ChAutoSocket = (function taoensso$sente$map__GT_ChAutoSocket(G__89493){
return (new taoensso.sente.ChAutoSocket(new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104).cljs$core$IFn$_invoke$arity$1(G__89493),new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327).cljs$core$IFn$_invoke$arity$1(G__89493),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__89493),new cljs.core.Keyword(null,"impl_","impl_",1218818179).cljs$core$IFn$_invoke$arity$1(G__89493),null,cljs.core.dissoc.call(null,G__89493,new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"impl_","impl_",1218818179)),null));
});

taoensso.sente.new_ChAutoSocket = (function taoensso$sente$new_ChAutoSocket(opts){
return taoensso.sente.map__GT_ChAutoSocket.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state_","state_",957667102),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),false], null)),new cljs.core.Keyword(null,"impl_","impl_",1218818179),cljs.core.atom.call(null,null)], null),opts));
});
taoensso.sente.get_chsk_url = (function taoensso$sente$get_chsk_url(protocol,host,path,type){
var protocol__$1 = (function (){var G__89506 = protocol;
var G__89506__$1 = (((G__89506 instanceof cljs.core.Keyword))?G__89506.fqn:null);
switch (G__89506__$1) {
case "http":
return "http:";

break;
case "https":
return "https:";

break;
default:
return protocol;

}
})();
var protocol__$2 = (function (){var e = (function (){try{if(((function (protocol__$1){
return (function (x){
return cljs.core.contains_QMARK_.call(null,taoensso.truss.impl.set_STAR_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["https:",null,"http:",null], null), null)),x);
});})(protocol__$1))
.call(null,protocol__$1)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e89507){if((e89507 instanceof Error)){
var e = e89507;
return e;
} else {
throw e89507;

}
}})();
if((e == null)){
return protocol__$1;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",1379,"([:el #{\"https:\" \"http:\"}] protocol)",protocol__$1,e,null);
}
})();
var protocol__$3 = (function (){var G__89508 = type;
var G__89508__$1 = (((G__89508 instanceof cljs.core.Keyword))?G__89508.fqn:null);
switch (G__89508__$1) {
case "ajax":
return protocol__$2;

break;
case "ws":
var G__89509 = protocol__$2;
switch (G__89509) {
case "https:":
return "wss:";

break;
case "http:":
return "ws:";

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol__$2)].join('')));

}

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')));

}
})();
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol__$3),cljs.core.str.cljs$core$IFn$_invoke$arity$1("//"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.encore.path.call(null,host,path))].join('');
});
/**
 * Returns nil on failure, or a map with keys:
 *     :ch-recv ; core.async channel to receive `event-msg`s (internal or from
 *              ; clients). May `put!` (inject) arbitrary `event`s to this channel.
 *     :send-fn ; (fn [event & [?timeout-ms ?cb-fn]]) for client>server send.
 *     :state   ; Watchable, read-only (atom {:type _ :open? _ :uid _ :csrf-token _}).
 *     :chsk    ; IChSocket implementer. You can usu. ignore this.
 * 
 *   Common options:
 *     :type           ; e/o #{:auto :ws :ajax}. You'll usually want the default (:auto).
 *     :protocol       ; Server protocol, e/o #{:http :https}.
 *     :host           ; Server host (defaults to current page's host).
 *     :params         ; Map of any params to incl. in chsk Ring requests (handy
 *                     ; for application-level auth, etc.).
 *     :packer         ; :edn (default), or an IPacker implementation.
 *     :ajax-opts      ; Base opts map provided to `taoensso.encore/ajax-lite`.
 *     :wrap-recv-evs? ; Should events from server be wrapped in [:chsk/recv _]?
 *     :ws-kalive-ms   ; Ping to keep a WebSocket conn alive if no activity
 *                     ; w/in given msecs. Should be different to server's :ws-kalive-ms.
 */
taoensso.sente.make_channel_socket_client_BANG_ = (function taoensso$sente$make_channel_socket_client_BANG_(var_args){
var args__62127__auto__ = [];
var len__62120__auto___89530 = arguments.length;
var i__62121__auto___89531 = (0);
while(true){
if((i__62121__auto___89531 < len__62120__auto___89530)){
args__62127__auto__.push((arguments[i__62121__auto___89531]));

var G__89532 = (i__62121__auto___89531 + (1));
i__62121__auto___89531 = G__89532;
continue;
} else {
}
break;
}

var argseq__62128__auto__ = ((((1) < args__62127__auto__.length))?(new cljs.core.IndexedSeq(args__62127__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__62128__auto__);
});

taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (path,p__89515){
var vec__89516 = p__89515;
var map__89519 = cljs.core.nth.call(null,vec__89516,(0),null);
var map__89519__$1 = ((((!((map__89519 == null)))?((((map__89519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89519.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__89519):map__89519);
var opts = map__89519__$1;
var ajax_opts = cljs.core.get.call(null,map__89519__$1,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109));
var ws_kalive_ms = cljs.core.get.call(null,map__89519__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),taoensso.encore.ms.call(null,new cljs.core.Keyword(null,"secs","secs",1532330091),(20)));
var client_id = cljs.core.get.call(null,map__89519__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140),(function (){var or__60899__auto__ = new cljs.core.Keyword(null,"client-uuid","client-uuid",-1717531965).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__60899__auto__)){
return or__60899__auto__;
} else {
return taoensso.encore.uuid_str.call(null);
}
})());
var protocol = cljs.core.get.call(null,map__89519__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
var packer = cljs.core.get.call(null,map__89519__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
var params = cljs.core.get.call(null,map__89519__$1,new cljs.core.Keyword(null,"params","params",710516235));
var type = cljs.core.get.call(null,map__89519__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492));
var host = cljs.core.get.call(null,map__89519__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var recv_buf_or_n = cljs.core.get.call(null,map__89519__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer.call(null,(2048)));
var backoff_ms_fn = cljs.core.get.call(null,map__89519__$1,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),taoensso.encore.exp_backoff);
var wrap_recv_evs_QMARK_ = cljs.core.get.call(null,map__89519__$1,new cljs.core.Keyword(null,"wrap-recv-evs?","wrap-recv-evs?",-1996694153),true);
var _deprecated_more_opts = cljs.core.nth.call(null,vec__89516,(1),null);
var e_89533 = (function (){try{if(((function (vec__89516,map__89519,map__89519__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (x){
return cljs.core.contains_QMARK_.call(null,taoensso.truss.impl.set_STAR_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null)),x);
});})(vec__89516,map__89519,map__89519__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
.call(null,type)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e89521){if((e89521 instanceof Error)){
var e = e89521;
return e;
} else {
throw e89521;

}
}})();
if((e_89533 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",1421,"([:in #{:ws :ajax :auto}] type)",type,e_89533,null);
}

var e_89534 = (function (){try{if(taoensso.encore.nblank_str_QMARK_.call(null,client_id)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e89522){if((e89522 instanceof Error)){
var e = e89522;
return e;
} else {
throw e89522;

}
}})();
if((e_89534 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",1422,"(enc/nblank-str? client-id)",client_id,e_89534,null);
}

if(!((_deprecated_more_opts == null))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init8382301926859034614.clj",1424,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__89516,map__89519,map__89519__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`make-channel-socket-client!` fn signature CHANGED with Sente v0.10.0."], null);
});})(vec__89516,map__89519,map__89519__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null,485568135);
} else {
}

if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"lp-timeout","lp-timeout",1149461302))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init8382301926859034614.clj",1425,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__89516,map__89519,map__89519__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [":lp-timeout opt has CHANGED; please use :lp-timout-ms."], null);
});})(vec__89516,map__89519,map__89519__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null,-469904949);
} else {
}

var packer__$1 = taoensso.sente.coerce_packer.call(null,packer);
var vec__89523 = (function (){var win_loc = taoensso.encore.get_win_loc.call(null);
var path__$1 = (function (){var or__60899__auto__ = path;
if(cljs.core.truth_(or__60899__auto__)){
return or__60899__auto__;
} else {
return new cljs.core.Keyword(null,"pathname","pathname",-1420497528).cljs$core$IFn$_invoke$arity$1(win_loc);
}
})();
var temp__6736__auto__ = new cljs.core.Keyword(null,"chsk-url-fn","chsk-url-fn",1968894294).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__6736__auto__)){
var f = temp__6736__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null,path__$1,win_loc,new cljs.core.Keyword(null,"ws","ws",86841443)),f.call(null,path__$1,win_loc,new cljs.core.Keyword(null,"ajax","ajax",814345549))], null);
} else {
var protocol__$1 = (function (){var or__60899__auto__ = protocol;
if(cljs.core.truth_(or__60899__auto__)){
return or__60899__auto__;
} else {
var or__60899__auto____$1 = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(win_loc);
if(cljs.core.truth_(or__60899__auto____$1)){
return or__60899__auto____$1;
} else {
return new cljs.core.Keyword(null,"http","http",382524695);
}
}
})();
var host__$1 = (function (){var or__60899__auto__ = host;
if(cljs.core.truth_(or__60899__auto__)){
return or__60899__auto__;
} else {
return new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(win_loc);
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.sente.get_chsk_url.call(null,protocol__$1,host__$1,path__$1,new cljs.core.Keyword(null,"ws","ws",86841443)),taoensso.sente.get_chsk_url.call(null,protocol__$1,host__$1,path__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549))], null);
}
})();
var ws_url = cljs.core.nth.call(null,vec__89523,(0),null);
var ajax_url = cljs.core.nth.call(null,vec__89523,(1),null);
var private_chs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"internal","internal",-854870097),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(128))),new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(10))),new cljs.core.Keyword(null,"<server","<server",-2135373537),(function (){var buf = cljs.core.async.sliding_buffer.call(null,(512));
if(cljs.core.truth_(wrap_recv_evs_QMARK_)){
return cljs.core.async.chan.call(null,buf,cljs.core.map.call(null,((function (buf,packer__$1,vec__89523,ws_url,ajax_url,vec__89516,map__89519,map__89519__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (ev){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),ev], null);
});})(buf,packer__$1,vec__89523,ws_url,ajax_url,vec__89516,map__89519,map__89519__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
));
} else {
return cljs.core.async.chan.call(null,buf);
}
})()], null);
var common_chsk_opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"chs","chs",376886120),private_chs,new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"packer","packer",66077544),packer__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),ws_kalive_ms], null);
var ws_chsk_opts = cljs.core.merge.call(null,common_chsk_opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),ws_url,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),backoff_ms_fn], null));
var ajax_chsk_opts = cljs.core.merge.call(null,common_chsk_opts,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),ajax_url,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),ajax_opts,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),backoff_ms_fn], null));
var auto_chsk_opts = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),ws_chsk_opts,new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),ajax_chsk_opts], null);
var _QMARK_chsk = taoensso.sente._chsk_connect_BANG_.call(null,(function (){var G__89526 = type;
var G__89526__$1 = (((G__89526 instanceof cljs.core.Keyword))?G__89526.fqn:null);
switch (G__89526__$1) {
case "ws":
return taoensso.sente.new_ChWebSocket.call(null,ws_chsk_opts);

break;
case "ajax":
return taoensso.sente.new_ChAjaxSocket.call(null,ajax_chsk_opts);

break;
case "auto":
return taoensso.sente.new_ChAutoSocket.call(null,auto_chsk_opts);

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')));

}
})());
var temp__6736__auto__ = _QMARK_chsk;
if(cljs.core.truth_(temp__6736__auto__)){
var chsk = temp__6736__auto__;
var chsk_state_ = new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk);
var internal_ch = new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(private_chs);
var send_fn = cljs.core.partial.call(null,taoensso.sente.chsk_send_BANG_,chsk);
var ev_ch = cljs.core.async.merge.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(private_chs),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(private_chs),new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(private_chs)], null),recv_buf_or_n);
var ev_msg_ch = cljs.core.async.chan.call(null,(1),cljs.core.map.call(null,((function (chsk_state_,internal_ch,send_fn,ev_ch,chsk,temp__6736__auto__,packer__$1,vec__89523,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__89516,map__89519,map__89519__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (ev){
var vec__89527 = taoensso.sente.as_event.call(null,ev);
var ev_id = cljs.core.nth.call(null,vec__89527,(0),null);
var ev__QMARK_data = cljs.core.nth.call(null,vec__89527,(1),null);
var ev__$1 = vec__89527;
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),internal_ch,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),chsk_state_,new cljs.core.Keyword(null,"event","event",301435442),ev__$1,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null);
});})(chsk_state_,internal_ch,send_fn,ev_ch,chsk,temp__6736__auto__,packer__$1,vec__89523,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__89516,map__89519,map__89519__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
));
cljs.core.async.pipe.call(null,ev_ch,ev_msg_ch);

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"chsk","chsk",-863703081),chsk,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ev_msg_ch,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk)], null);
} else {
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init8382301926859034614.clj",1513,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (temp__6736__auto__,packer__$1,vec__89523,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__89516,map__89519,map__89519__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to create channel socket"], null);
});})(temp__6736__auto__,packer__$1,vec__89523,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__89516,map__89519,map__89519__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null,1357432132);
}
});

taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$applyTo = (function (seq89513){
var G__89514 = cljs.core.first.call(null,seq89513);
var seq89513__$1 = cljs.core.next.call(null,seq89513);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__89514,seq89513__$1);
});

taoensso.sente._start_chsk_router_BANG_ = (function taoensso$sente$_start_chsk_router_BANG_(server_QMARK_,ch_recv,event_msg_handler,opts){
var map__89616 = opts;
var map__89616__$1 = ((((!((map__89616 == null)))?((((map__89616.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89616.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__89616):map__89616);
var trace_evs_QMARK_ = cljs.core.get.call(null,map__89616__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__89616__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var simple_auto_threading_QMARK_ = cljs.core.get.call(null,map__89616__$1,new cljs.core.Keyword(null,"simple-auto-threading?","simple-auto-threading?",1950754184));
var ch_ctrl = cljs.core.async.chan.call(null);
var execute1 = ((function (map__89616,map__89616__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl){
return (function (f){
return f.call(null);
});})(map__89616,map__89616__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl))
;
var c__69114__auto___89696 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__69114__auto___89696,map__89616,map__89616__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
var f__69115__auto__ = (function (){var switch__69000__auto__ = ((function (c__69114__auto___89696,map__89616,map__89616__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (state_89663){
var state_val_89664 = (state_89663[(1)]);
if((state_val_89664 === (7))){
var inst_89659 = (state_89663[(2)]);
var state_89663__$1 = state_89663;
var statearr_89665_89697 = state_89663__$1;
(statearr_89665_89697[(2)] = inst_89659);

(statearr_89665_89697[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89664 === (1))){
var state_89663__$1 = state_89663;
var statearr_89666_89698 = state_89663__$1;
(statearr_89666_89698[(2)] = null);

(statearr_89666_89698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89664 === (4))){
var inst_89628 = (state_89663[(7)]);
var inst_89629 = (state_89663[(8)]);
var inst_89626 = (state_89663[(9)]);
var inst_89626__$1 = (state_89663[(2)]);
var inst_89627 = cljs.core.nth.call(null,inst_89626__$1,(0),null);
var inst_89628__$1 = cljs.core.nth.call(null,inst_89626__$1,(1),null);
var inst_89629__$1 = cljs.core._EQ_.call(null,inst_89628__$1,ch_ctrl);
var state_89663__$1 = (function (){var statearr_89667 = state_89663;
(statearr_89667[(10)] = inst_89627);

(statearr_89667[(7)] = inst_89628__$1);

(statearr_89667[(8)] = inst_89629__$1);

(statearr_89667[(9)] = inst_89626__$1);

return statearr_89667;
})();
if(inst_89629__$1){
var statearr_89668_89699 = state_89663__$1;
(statearr_89668_89699[(1)] = (5));

} else {
var statearr_89669_89700 = state_89663__$1;
(statearr_89669_89700[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89664 === (15))){
var inst_89627 = (state_89663[(10)]);
var state_89663__$1 = state_89663;
var statearr_89670_89701 = state_89663__$1;
(statearr_89670_89701[(2)] = inst_89627);

(statearr_89670_89701[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89664 === (13))){
var inst_89645 = (state_89663[(2)]);
var state_89663__$1 = state_89663;
var statearr_89671_89702 = state_89663__$1;
(statearr_89671_89702[(2)] = inst_89645);

(statearr_89671_89702[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89664 === (6))){
var inst_89627 = (state_89663[(10)]);
var inst_89634 = (inst_89627 == null);
var inst_89635 = cljs.core.not.call(null,inst_89634);
var state_89663__$1 = state_89663;
if(inst_89635){
var statearr_89672_89703 = state_89663__$1;
(statearr_89672_89703[(1)] = (8));

} else {
var statearr_89673_89704 = state_89663__$1;
(statearr_89673_89704[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89664 === (3))){
var inst_89661 = (state_89663[(2)]);
var state_89663__$1 = state_89663;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_89663__$1,inst_89661);
} else {
if((state_val_89664 === (12))){
var state_89663__$1 = state_89663;
var statearr_89674_89705 = state_89663__$1;
(statearr_89674_89705[(2)] = false);

(statearr_89674_89705[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89664 === (2))){
var inst_89622 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_89623 = [ch_recv,ch_ctrl];
var inst_89624 = (new cljs.core.PersistentVector(null,2,(5),inst_89622,inst_89623,null));
var state_89663__$1 = state_89663;
return cljs.core.async.ioc_alts_BANG_.call(null,state_89663__$1,(4),inst_89624);
} else {
if((state_val_89664 === (11))){
var state_89663__$1 = state_89663;
var statearr_89675_89706 = state_89663__$1;
(statearr_89675_89706[(2)] = true);

(statearr_89675_89706[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89664 === (9))){
var state_89663__$1 = state_89663;
var statearr_89676_89707 = state_89663__$1;
(statearr_89676_89707[(2)] = false);

(statearr_89676_89707[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89664 === (5))){
var state_89663__$1 = state_89663;
var statearr_89677_89708 = state_89663__$1;
(statearr_89677_89708[(2)] = null);

(statearr_89677_89708[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89664 === (14))){
var inst_89627 = (state_89663[(10)]);
var inst_89650 = cljs.core.apply.call(null,cljs.core.hash_map,inst_89627);
var state_89663__$1 = state_89663;
var statearr_89678_89709 = state_89663__$1;
(statearr_89678_89709[(2)] = inst_89650);

(statearr_89678_89709[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89664 === (16))){
var inst_89627 = (state_89663[(10)]);
var inst_89628 = (state_89663[(7)]);
var inst_89629 = (state_89663[(8)]);
var inst_89626 = (state_89663[(9)]);
var inst_89653 = (state_89663[(2)]);
var inst_89654 = cljs.core.get.call(null,inst_89653,new cljs.core.Keyword(null,"event","event",301435442));
var inst_89655 = (function (){var vec__89619 = inst_89626;
var v = inst_89627;
var p = inst_89628;
var stop_QMARK_ = inst_89629;
var map__89632 = inst_89653;
var event_msg = inst_89653;
var event = inst_89654;
return ((function (vec__89619,v,p,stop_QMARK_,map__89632,event_msg,event,inst_89627,inst_89628,inst_89629,inst_89626,inst_89653,inst_89654,state_val_89664,c__69114__auto___89696,map__89616,map__89616__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
try{if(cljs.core.truth_(trace_evs_QMARK_)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init8382301926859034614.clj",1540,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__89619,v,p,stop_QMARK_,map__89632,event_msg,event,inst_89627,inst_89628,inst_89629,inst_89626,inst_89653,inst_89654,state_val_89664,c__69114__auto___89696,map__89616,map__89616__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Pre-handler event: %s",event], null);
});})(vec__89619,v,p,stop_QMARK_,map__89632,event_msg,event,inst_89627,inst_89628,inst_89629,inst_89626,inst_89653,inst_89654,state_val_89664,c__69114__auto___89696,map__89616,map__89616__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
,null)),null,614981655);
} else {
}

return event_msg_handler.call(null,(cljs.core.truth_(server_QMARK_)?(function (){var e = (function (){try{if(cljs.core.truth_(taoensso.sente.server_event_msg_QMARK_.call(null,event_msg))){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e89681){if((e89681 instanceof Error)){
var e = e89681;
return e;
} else {
throw e89681;

}
}})();
if((e == null)){
return event_msg;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,null,"taoensso.sente",1543,"(server-event-msg? event-msg)",event_msg,e,null);
}
})():(function (){var e = (function (){try{if(cljs.core.truth_(taoensso.sente.client_event_msg_QMARK_.call(null,event_msg))){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e89682){if((e89682 instanceof Error)){
var e = e89682;
return e;
} else {
throw e89682;

}
}})();
if((e == null)){
return event_msg;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,null,"taoensso.sente",1544,"(client-event-msg? event-msg)",event_msg,e,null);
}
})()));
}catch (e89679){if((e89679 instanceof Error)){
var e1 = e89679;
try{var temp__6736__auto__ = error_handler;
if(cljs.core.truth_(temp__6736__auto__)){
var eh = temp__6736__auto__;
return error_handler.call(null,e1,event_msg);
} else {
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/tmp/form-init8382301926859034614.clj",1549,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (temp__6736__auto__,e1,vec__89619,v,p,stop_QMARK_,map__89632,event_msg,event,inst_89627,inst_89628,inst_89629,inst_89626,inst_89653,inst_89654,state_val_89664,c__69114__auto___89696,map__89616,map__89616__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e1,"Chsk router `event-msg-handler` error: %s",event], null);
});})(temp__6736__auto__,e1,vec__89619,v,p,stop_QMARK_,map__89632,event_msg,event,inst_89627,inst_89628,inst_89629,inst_89626,inst_89653,inst_89654,state_val_89664,c__69114__auto___89696,map__89616,map__89616__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
,null)),null,-1447792867);
}
}catch (e89680){if((e89680 instanceof Error)){
var e2 = e89680;
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/tmp/form-init8382301926859034614.clj",1550,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e2,e1,vec__89619,v,p,stop_QMARK_,map__89632,event_msg,event,inst_89627,inst_89628,inst_89629,inst_89626,inst_89653,inst_89654,state_val_89664,c__69114__auto___89696,map__89616,map__89616__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e2,"Chsk router `error-handler` error: %s",event], null);
});})(e2,e1,vec__89619,v,p,stop_QMARK_,map__89632,event_msg,event,inst_89627,inst_89628,inst_89629,inst_89626,inst_89653,inst_89654,state_val_89664,c__69114__auto___89696,map__89616,map__89616__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
,null)),null,-2112597177);
} else {
throw e89680;

}
}} else {
throw e89679;

}
}});
;})(vec__89619,v,p,stop_QMARK_,map__89632,event_msg,event,inst_89627,inst_89628,inst_89629,inst_89626,inst_89653,inst_89654,state_val_89664,c__69114__auto___89696,map__89616,map__89616__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
})();
var inst_89656 = execute1.call(null,inst_89655);
var state_89663__$1 = (function (){var statearr_89683 = state_89663;
(statearr_89683[(11)] = inst_89656);

return statearr_89683;
})();
var statearr_89684_89710 = state_89663__$1;
(statearr_89684_89710[(2)] = null);

(statearr_89684_89710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89664 === (10))){
var inst_89648 = (state_89663[(2)]);
var state_89663__$1 = state_89663;
if(cljs.core.truth_(inst_89648)){
var statearr_89685_89711 = state_89663__$1;
(statearr_89685_89711[(1)] = (14));

} else {
var statearr_89686_89712 = state_89663__$1;
(statearr_89686_89712[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89664 === (8))){
var inst_89627 = (state_89663[(10)]);
var inst_89637 = inst_89627.cljs$lang$protocol_mask$partition0$;
var inst_89638 = (inst_89637 & (64));
var inst_89639 = inst_89627.cljs$core$ISeq$;
var inst_89640 = (cljs.core.PROTOCOL_SENTINEL === inst_89639);
var inst_89641 = (inst_89638) || (inst_89640);
var state_89663__$1 = state_89663;
if(cljs.core.truth_(inst_89641)){
var statearr_89687_89713 = state_89663__$1;
(statearr_89687_89713[(1)] = (11));

} else {
var statearr_89688_89714 = state_89663__$1;
(statearr_89688_89714[(1)] = (12));

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
});})(c__69114__auto___89696,map__89616,map__89616__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
;
return ((function (switch__69000__auto__,c__69114__auto___89696,map__89616,map__89616__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function() {
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__69001__auto__ = null;
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__69001__auto____0 = (function (){
var statearr_89692 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_89692[(0)] = taoensso$sente$_start_chsk_router_BANG__$_state_machine__69001__auto__);

(statearr_89692[(1)] = (1));

return statearr_89692;
});
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__69001__auto____1 = (function (state_89663){
while(true){
var ret_value__69002__auto__ = (function (){try{while(true){
var result__69003__auto__ = switch__69000__auto__.call(null,state_89663);
if(cljs.core.keyword_identical_QMARK_.call(null,result__69003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69003__auto__;
}
break;
}
}catch (e89693){if((e89693 instanceof Object)){
var ex__69004__auto__ = e89693;
var statearr_89694_89715 = state_89663;
(statearr_89694_89715[(5)] = ex__69004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_89663);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e89693;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__69002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__89716 = state_89663;
state_89663 = G__89716;
continue;
} else {
return ret_value__69002__auto__;
}
break;
}
});
taoensso$sente$_start_chsk_router_BANG__$_state_machine__69001__auto__ = function(state_89663){
switch(arguments.length){
case 0:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__69001__auto____0.call(this);
case 1:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__69001__auto____1.call(this,state_89663);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$sente$_start_chsk_router_BANG__$_state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__69001__auto____0;
taoensso$sente$_start_chsk_router_BANG__$_state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__69001__auto____1;
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__69001__auto__;
})()
;})(switch__69000__auto__,c__69114__auto___89696,map__89616,map__89616__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
})();
var state__69116__auto__ = (function (){var statearr_89695 = f__69115__auto__.call(null);
(statearr_89695[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__69114__auto___89696);

return statearr_89695;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__69116__auto__);
});})(c__69114__auto___89696,map__89616,map__89616__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
);


return ((function (map__89616,map__89616__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function taoensso$sente$_start_chsk_router_BANG__$_stop_BANG_(){
return cljs.core.async.close_BANG_.call(null,ch_ctrl);
});
;})(map__89616,map__89616__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
});
/**
 * Creates a simple go-loop to call `(event-msg-handler <server-event-msg>)`
 *   and log any errors. Returns a `(fn stop! [])`. Note that advanced users may
 *   prefer to just write their own loop against `ch-recv`.
 * 
 *   Nb performance note: since your `event-msg-handler` fn will be executed
 *   within a simple go block, you'll want this fn to be ~non-blocking
 *   (you'll especially want to avoid blocking IO) to avoid starving the
 *   core.async thread pool under load. To avoid blocking, you can use futures,
 *   agents, core.async, etc. as appropriate.
 * 
 *   Or for simple automatic future-based threading of every request, enable
 *   the `:simple-auto-threading?` opt (disabled by default).
 */
taoensso.sente.start_server_chsk_router_BANG_ = (function taoensso$sente$start_server_chsk_router_BANG_(var_args){
var args__62127__auto__ = [];
var len__62120__auto___89726 = arguments.length;
var i__62121__auto___89727 = (0);
while(true){
if((i__62121__auto___89727 < len__62120__auto___89726)){
args__62127__auto__.push((arguments[i__62121__auto___89727]));

var G__89728 = (i__62121__auto___89727 + (1));
i__62121__auto___89727 = G__89728;
continue;
} else {
}
break;
}

var argseq__62128__auto__ = ((((2) < args__62127__auto__.length))?(new cljs.core.IndexedSeq(args__62127__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__62128__auto__);
});

taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__89720){
var vec__89721 = p__89720;
var map__89724 = cljs.core.nth.call(null,vec__89721,(0),null);
var map__89724__$1 = ((((!((map__89724 == null)))?((((map__89724.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89724.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__89724):map__89724);
var opts = map__89724__$1;
var trace_evs_QMARK_ = cljs.core.get.call(null,map__89724__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__89724__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var simple_auto_threading_QMARK_ = cljs.core.get.call(null,map__89724__$1,new cljs.core.Keyword(null,"simple-auto-threading?","simple-auto-threading?",1950754184));
return taoensso.sente._start_chsk_router_BANG_.call(null,new cljs.core.Keyword(null,"server","server",1499190120),ch_recv,event_msg_handler,opts);
});

taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$applyTo = (function (seq89717){
var G__89718 = cljs.core.first.call(null,seq89717);
var seq89717__$1 = cljs.core.next.call(null,seq89717);
var G__89719 = cljs.core.first.call(null,seq89717__$1);
var seq89717__$2 = cljs.core.next.call(null,seq89717__$1);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__89718,G__89719,seq89717__$2);
});

/**
 * Creates a simple go-loop to call `(event-msg-handler <server-event-msg>)`
 *   and log any errors. Returns a `(fn stop! [])`. Note that advanced users may
 *   prefer to just write their own loop against `ch-recv`.
 * 
 *   Nb performance note: since your `event-msg-handler` fn will be executed
 *   within a simple go block, you'll want this fn to be ~non-blocking
 *   (you'll especially want to avoid blocking IO) to avoid starving the
 *   core.async thread pool under load. To avoid blocking, you can use futures,
 *   agents, core.async, etc. as appropriate.
 */
taoensso.sente.start_client_chsk_router_BANG_ = (function taoensso$sente$start_client_chsk_router_BANG_(var_args){
var args__62127__auto__ = [];
var len__62120__auto___89738 = arguments.length;
var i__62121__auto___89739 = (0);
while(true){
if((i__62121__auto___89739 < len__62120__auto___89738)){
args__62127__auto__.push((arguments[i__62121__auto___89739]));

var G__89740 = (i__62121__auto___89739 + (1));
i__62121__auto___89739 = G__89740;
continue;
} else {
}
break;
}

var argseq__62128__auto__ = ((((2) < args__62127__auto__.length))?(new cljs.core.IndexedSeq(args__62127__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__62128__auto__);
});

taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__89732){
var vec__89733 = p__89732;
var map__89736 = cljs.core.nth.call(null,vec__89733,(0),null);
var map__89736__$1 = ((((!((map__89736 == null)))?((((map__89736.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89736.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__89736):map__89736);
var opts = map__89736__$1;
var trace_evs_QMARK_ = cljs.core.get.call(null,map__89736__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__89736__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
return taoensso.sente._start_chsk_router_BANG_.call(null,cljs.core.not.call(null,new cljs.core.Keyword(null,"server","server",1499190120)),ch_recv,event_msg_handler,opts);
});

taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$applyTo = (function (seq89729){
var G__89730 = cljs.core.first.call(null,seq89729);
var seq89729__$1 = cljs.core.next.call(null,seq89729);
var G__89731 = cljs.core.first.call(null,seq89729__$1);
var seq89729__$2 = cljs.core.next.call(null,seq89729__$1);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__89730,G__89731,seq89729__$2);
});

taoensso.sente.event_msg_QMARK_ = taoensso.sente.client_event_msg_QMARK_;
/**
 * Platform-specific alias for `make-channel-socket-server!` or
 *   `make-channel-socket-client!`. Please see the appropriate aliased fn
 * docstring for details.
 */
taoensso.sente.make_channel_socket_BANG_ = taoensso.sente.make_channel_socket_client_BANG_;
/**
 * Platform-specific alias for `start-server-chsk-router!` or
 *   `start-client-chsk-router!`. Please see the appropriate aliased fn
 *   docstring for details.
 */
taoensso.sente.start_chsk_router_BANG_ = taoensso.sente.start_client_chsk_router_BANG_;
/**
 * DEPRECATED: Please use `start-chsk-router!` instead
 */
taoensso.sente.start_chsk_router_loop_BANG_ = (function taoensso$sente$start_chsk_router_loop_BANG_(event_handler,ch_recv){
return taoensso.sente.start_client_chsk_router_BANG_.call(null,ch_recv,(function (ev_msg){
return event_handler.call(null,new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(ev_msg),new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861).cljs$core$IFn$_invoke$arity$1(ev_msg));
}));
});

/**
 * DEPRECATED. Please use `timbre/set-level!` instead
 */
taoensso.sente.set_logging_level_BANG_ = taoensso.timbre.set_level_BANG_;

/**
 * DEPRECATED: Please use `ajax-lite` instead
 */
taoensso.sente.ajax_call = taoensso.encore.ajax_lite;

/**
 * DEPRECATED
 */
taoensso.sente.default_chsk_url_fn = (function taoensso$sente$default_chsk_url_fn(path,p__89741,websocket_QMARK_){
var map__89744 = p__89741;
var map__89744__$1 = ((((!((map__89744 == null)))?((((map__89744.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89744.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__89744):map__89744);
var location = map__89744__$1;
var protocol = cljs.core.get.call(null,map__89744__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
var host = cljs.core.get.call(null,map__89744__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var pathname = cljs.core.get.call(null,map__89744__$1,new cljs.core.Keyword(null,"pathname","pathname",-1420497528));
var protocol__$1 = (cljs.core.truth_(websocket_QMARK_)?((cljs.core._EQ_.call(null,protocol,"https:"))?"wss:":"ws:"):protocol);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("//"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(host),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__60899__auto__ = path;
if(cljs.core.truth_(or__60899__auto__)){
return or__60899__auto__;
} else {
return pathname;
}
})())].join('');
});

//# sourceMappingURL=sente.js.map?rel=1506064214492