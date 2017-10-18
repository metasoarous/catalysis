// Compiled by ClojureScript 1.9.542 {}
goog.provide('kabel.client');
goog.require('cljs.core');
goog.require('kabel.binary');
goog.require('kabel.util');
goog.require('goog.net.WebSocket');
goog.require('goog.Uri');
goog.require('goog.events');
goog.require('cljs.core.async');
goog.require('superv.async');
/**
 * Connects to url. Puts [in out] channels on return channel when ready.
 * Only supports websocket at the moment, but is supposed to dispatch on
 *   protocol of url. read-opts is ignored on cljs for now, use the
 *   platform-wide reader setup.
 */
kabel.client.client_connect_BANG_ = (function kabel$client$client_connect_BANG_(var_args){
var args71001 = [];
var len__62575__auto___71011 = arguments.length;
var i__62576__auto___71012 = (0);
while(true){
if((i__62576__auto___71012 < len__62575__auto___71011)){
args71001.push((arguments[i__62576__auto___71012]));

var G__71013 = (i__62576__auto___71012 + (1));
i__62576__auto___71012 = G__71013;
continue;
} else {
}
break;
}

var G__71003 = args71001.length;
switch (G__71003) {
case 3:
return kabel.client.client_connect_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return kabel.client.client_connect_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args71001.length)].join('')));

}
});

kabel.client.client_connect_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (S,url,peer_id){
return kabel.client.client_connect_BANG_.call(null,S,url,peer_id,cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY));
});

kabel.client.client_connect_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (S,url,peer_id,read_handlers,write_handlers){
if(cljs.core.truth_(kabel.util.on_node_QMARK_.call(null))){
console.log("Setting global W3C WebSocket API to 'websocket' package.");

WebSocket = require("websocket").w3cwebsocket;
} else {
}

var channel = (new goog.net.WebSocket(false));
var in$ = cljs.core.async.chan.call(null);
var out = cljs.core.async.chan.call(null);
var opener = cljs.core.async.chan.call(null);
var host = (new goog.Uri(url.replace("ws","http"))).getDomain();
console.info("kabel.client",cljs.core.pr_str.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"connecting-to","connecting-to",-1991299113),new cljs.core.Keyword(null,"url","url",276297046),url], null)));

var G__71004_71015 = channel;
goog.events.listen(G__71004_71015,goog.net.WebSocket.EventType.MESSAGE,((function (G__71004_71015,channel,in$,out,opener,host){
return (function (evt){
try{return kabel.binary.from_binary.call(null,evt.message,((function (G__71004_71015,channel,in$,out,opener,host){
return (function (p1__71000_SHARP_){
return cljs.core.async.put_BANG_.call(null,in$,((cljs.core.map_QMARK_.call(null,p1__71000_SHARP_))?cljs.core.assoc.call(null,p1__71000_SHARP_,new cljs.core.Keyword("kabel","host","kabel/host",-1456877872),host):p1__71000_SHARP_));
});})(G__71004_71015,channel,in$,out,opener,host))
);
}catch (e71005){if((e71005 instanceof Error)){
var e = e71005;
console.error("kabel.client",cljs.core.pr_str.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"cannot-read-message","cannot-read-message",-543619229),new cljs.core.Keyword(null,"error","error",-978969032),e], null)));

return cljs.core.async.put_BANG_.call(null,superv.async._error.call(null,S),e);
} else {
throw e71005;

}
}});})(G__71004_71015,channel,in$,out,opener,host))
);

goog.events.listen(G__71004_71015,goog.net.WebSocket.EventType.CLOSED,((function (G__71004_71015,channel,in$,out,opener,host){
return (function (evt){
var e = cljs.core.ex_info.call(null,"Connection closed!",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),evt], null));
console.info("kabel.client",cljs.core.pr_str.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"connection-closed","connection-closed",579733998),new cljs.core.Keyword(null,"closed-event","closed-event",1324983202),evt], null)));

cljs.core.async.close_BANG_.call(null,in$);

cljs.core.async.put_BANG_.call(null,superv.async._error.call(null,S),e);

try{cljs.core.async.put_BANG_.call(null,opener,e);
}catch (e71006){if((e71006 instanceof Object)){
var e_71016__$1 = e71006;
} else {
throw e71006;

}
}
channel.close();

return cljs.core.async.close_BANG_.call(null,opener);
});})(G__71004_71015,channel,in$,out,opener,host))
);

goog.events.listen(G__71004_71015,goog.net.WebSocket.EventType.OPENED,((function (G__71004_71015,channel,in$,out,opener,host){
return (function (evt){
cljs.core.async.put_BANG_.call(null,opener,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [in$,out], null));

return cljs.core.async.close_BANG_.call(null,opener);
});})(G__71004_71015,channel,in$,out,opener,host))
);

goog.events.listen(G__71004_71015,goog.net.WebSocket.EventType.ERROR,((function (G__71004_71015,channel,in$,out,opener,host){
return (function (evt){
var e = cljs.core.ex_info.call(null,"Connection error!",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),evt], null));
console.error("kabel.client",cljs.core.pr_str.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"websocket-error","websocket-error",941100166),new cljs.core.Keyword(null,"error","error",-978969032),evt], null)));

cljs.core.async.put_BANG_.call(null,superv.async._error.call(null,S),e);

try{cljs.core.async.put_BANG_.call(null,opener,e);
}catch (e71007){if((e71007 instanceof Object)){
var e_71017__$1 = e71007;
} else {
throw e71007;

}
}
return cljs.core.async.close_BANG_.call(null,opener);
});})(G__71004_71015,channel,in$,out,opener,host))
);

try{
channel.open(url);
}catch (e71008){if((e71008 instanceof Object)){
var e_71018 = e71008;
var e_71019__$1 = cljs.core.ex_info.call(null,"Connection failed!",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"connection-failed","connection-failed",-1910345930),new cljs.core.Keyword(null,"error","error",-978969032),e_71018], null));
cljs.core.async.put_BANG_.call(null,superv.async._error.call(null,S),e_71019__$1);

cljs.core.async.put_BANG_.call(null,opener,e_71019__$1);

cljs.core.async.close_BANG_.call(null,opener);
} else {
throw e71008;

}
}

((function (channel,in$,out,opener,host){
return (function kabel$client$sender(){
return cljs.core.async.take_BANG_.call(null,out,((function (channel,in$,out,opener,host){
return (function (m){
if(cljs.core.truth_(m)){
try{channel.send(kabel.binary.to_binary.call(null,m));
}catch (e71010){if((e71010 instanceof Error)){
var e_71020 = e71010;
console.error("kabel.client",cljs.core.pr_str.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"cannot-send-transit-message","cannot-send-transit-message",-1612316504),new cljs.core.Keyword(null,"error","error",-978969032),e_71020], null)));

cljs.core.async.put_BANG_.call(null,superv.async._error.call(null,S),e_71020);
} else {
throw e71010;

}
}
return kabel$client$sender.call(null);
} else {
return channel.close();
}
});})(channel,in$,out,opener,host))
);
});})(channel,in$,out,opener,host))
.call(null);

return opener;
});

kabel.client.client_connect_BANG_.cljs$lang$maxFixedArity = 5;


//# sourceMappingURL=client.js.map?rel=1506321319120