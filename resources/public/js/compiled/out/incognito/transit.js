// Compiled by ClojureScript 1.9.542 {}
goog.provide('incognito.transit');
goog.require('cljs.core');
goog.require('cognitect.transit');
goog.require('cljs.reader');
goog.require('incognito.base');

/**
* @constructor
 * @implements {incognito.transit.Object}
*/
incognito.transit.IncognitoTaggedLiteralHandler = (function (write_handlers,map_handler){
this.write_handlers = write_handlers;
this.map_handler = map_handler;
})
incognito.transit.IncognitoTaggedLiteralHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
if(!((cljs.core.isa_QMARK_.call(null,cljs.core.type.call(null,v),cljs.core.PersistentArrayMap)) || (cljs.core.isa_QMARK_.call(null,cljs.core.type.call(null,v),cljs.core.PersistentHashMap)) || (cljs.core.isa_QMARK_.call(null,cljs.core.type.call(null,v),cljs.core.PersistentTreeMap)))){
return "incognito";
} else {
return self__.map_handler.tag(v);
}
});

incognito.transit.IncognitoTaggedLiteralHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
if(!((cljs.core.isa_QMARK_.call(null,cljs.core.type.call(null,v),cljs.core.PersistentArrayMap)) || (cljs.core.isa_QMARK_.call(null,cljs.core.type.call(null,v),cljs.core.PersistentHashMap)) || (cljs.core.isa_QMARK_.call(null,cljs.core.type.call(null,v),cljs.core.PersistentTreeMap)))){
if(cljs.core.isa_QMARK_.call(null,cljs.core.type.call(null,v),incognito.base.IncognitoTaggedLiteral)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,v);
} else {
return incognito.base.incognito_writer.call(null,cljs.core.deref.call(null,self__.write_handlers),v);
}
} else {
return self__.map_handler.rep(v);
}
});

incognito.transit.IncognitoTaggedLiteralHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return null;
});

incognito.transit.IncognitoTaggedLiteralHandler.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"write-handlers","write-handlers",-456757384,null),new cljs.core.Symbol(null,"map-handler","map-handler",-989481679,null)], null);
});

incognito.transit.IncognitoTaggedLiteralHandler.cljs$lang$type = true;

incognito.transit.IncognitoTaggedLiteralHandler.cljs$lang$ctorStr = "incognito.transit/IncognitoTaggedLiteralHandler";

incognito.transit.IncognitoTaggedLiteralHandler.cljs$lang$ctorPrWriter = (function (this__62011__auto__,writer__62012__auto__,opt__62013__auto__){
return cljs.core._write.call(null,writer__62012__auto__,"incognito.transit/IncognitoTaggedLiteralHandler");
});

incognito.transit.__GT_IncognitoTaggedLiteralHandler = (function incognito$transit$__GT_IncognitoTaggedLiteralHandler(write_handlers,map_handler){
return (new incognito.transit.IncognitoTaggedLiteralHandler(write_handlers,map_handler));
});

incognito.transit.incognito_write_handler = (function incognito$transit$incognito_write_handler(write_handlers){
return (new incognito.transit.IncognitoTaggedLiteralHandler(write_handlers,(new cognitect.transit.MapHandler())));
});
incognito.transit.incognito_read_handler = (function incognito$transit$incognito_read_handler(read_handlers){
return cljs.core.partial.call(null,incognito.base.incognito_reader,cljs.core.deref.call(null,read_handlers));
});

//# sourceMappingURL=transit.js.map?rel=1506321319790