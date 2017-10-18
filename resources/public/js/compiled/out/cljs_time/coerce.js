// Compiled by ClojureScript 1.9.542 {}
goog.provide('cljs_time.coerce');
goog.require('cljs.core');
goog.require('cljs_time.core');
goog.require('cljs_time.format');
goog.require('goog.date.UtcDateTime');

/**
 * @interface
 */
cljs_time.coerce.ICoerce = function(){};

/**
 * Convert `obj` to a goog.date.DateTime instance.
 */
cljs_time.coerce.to_date_time = (function cljs_time$coerce$to_date_time(obj){
if((!((obj == null))) && (!((obj.cljs_time$coerce$ICoerce$to_date_time$arity$1 == null)))){
return obj.cljs_time$coerce$ICoerce$to_date_time$arity$1(obj);
} else {
var x__61617__auto__ = (((obj == null))?null:obj);
var m__61618__auto__ = (cljs_time.coerce.to_date_time[goog.typeOf(x__61617__auto__)]);
if(!((m__61618__auto__ == null))){
return m__61618__auto__.call(null,obj);
} else {
var m__61618__auto____$1 = (cljs_time.coerce.to_date_time["_"]);
if(!((m__61618__auto____$1 == null))){
return m__61618__auto____$1.call(null,obj);
} else {
throw cljs.core.missing_protocol.call(null,"ICoerce.to-date-time",obj);
}
}
}
});

/**
 * Returns a DateTime instance in the UTC time zone corresponding to the given
 *   number of milliseconds after the Unix epoch.
 */
cljs_time.coerce.from_long = (function cljs_time$coerce$from_long(millis){
var G__85516 = millis;
if((G__85516 == null)){
return null;
} else {
return goog.date.UtcDateTime.fromTimestamp.call(null,G__85516);
}
});
/**
 * Returns DateTime instance from string using formatters in cljs-time.format,
 *   returning first which parses
 */
cljs_time.coerce.from_string = (function cljs_time$coerce$from_string(s){
if(cljs.core.truth_(s)){
return cljs.core.first.call(null,(function (){var iter__61761__auto__ = (function cljs_time$coerce$from_string_$_iter__85525(s__85526){
return (new cljs.core.LazySeq(null,(function (){
var s__85526__$1 = s__85526;
while(true){
var temp__6738__auto__ = cljs.core.seq.call(null,s__85526__$1);
if(temp__6738__auto__){
var s__85526__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__85526__$2)){
var c__61759__auto__ = cljs.core.chunk_first.call(null,s__85526__$2);
var size__61760__auto__ = cljs.core.count.call(null,c__61759__auto__);
var b__85528 = cljs.core.chunk_buffer.call(null,size__61760__auto__);
if((function (){var i__85527 = (0);
while(true){
if((i__85527 < size__61760__auto__)){
var f = cljs.core._nth.call(null,c__61759__auto__,i__85527);
var d = (function (){try{return cljs_time.format.parse.call(null,f,s);
}catch (e85531){if((e85531 instanceof Error)){
var _ = e85531;
return null;
} else {
throw e85531;

}
}})();
if(cljs.core.truth_(d)){
cljs.core.chunk_append.call(null,b__85528,d);

var G__85533 = (i__85527 + (1));
i__85527 = G__85533;
continue;
} else {
var G__85534 = (i__85527 + (1));
i__85527 = G__85534;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__85528),cljs_time$coerce$from_string_$_iter__85525.call(null,cljs.core.chunk_rest.call(null,s__85526__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__85528),null);
}
} else {
var f = cljs.core.first.call(null,s__85526__$2);
var d = (function (){try{return cljs_time.format.parse.call(null,f,s);
}catch (e85532){if((e85532 instanceof Error)){
var _ = e85532;
return null;
} else {
throw e85532;

}
}})();
if(cljs.core.truth_(d)){
return cljs.core.cons.call(null,d,cljs_time$coerce$from_string_$_iter__85525.call(null,cljs.core.rest.call(null,s__85526__$2)));
} else {
var G__85535 = cljs.core.rest.call(null,s__85526__$2);
s__85526__$1 = G__85535;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__61761__auto__.call(null,cljs.core.vals.call(null,cljs_time.format.formatters));
})());
} else {
return null;
}
});
/**
 * Returns a DateTime instance in the UTC time zone corresponding to the given
 *   js Date object.
 */
cljs_time.coerce.from_date = (function cljs_time$coerce$from_date(date){
var G__85537 = date;
var G__85537__$1 = (((G__85537 == null))?null:G__85537.getTime());
if((G__85537__$1 == null)){
return null;
} else {
return cljs_time.coerce.from_long.call(null,G__85537__$1);
}
});
/**
 * Convert `obj` to the number of milliseconds after the Unix epoch.
 */
cljs_time.coerce.to_long = (function cljs_time$coerce$to_long(obj){
var G__85539 = obj;
var G__85539__$1 = (((G__85539 == null))?null:cljs_time.coerce.to_date_time.call(null,G__85539));
if((G__85539__$1 == null)){
return null;
} else {
return G__85539__$1.getTime();
}
});
/**
 * Convert `obj` to Unix epoch.
 */
cljs_time.coerce.to_epoch = (function cljs_time$coerce$to_epoch(obj){
var G__85541 = obj;
var G__85541__$1 = (((G__85541 == null))?null:cljs_time.coerce.to_long.call(null,G__85541));
if((G__85541__$1 == null)){
return null;
} else {
return (G__85541__$1 / (1000));
}
});
/**
 * Convert `obj` to a JavaScript Date instance.
 */
cljs_time.coerce.to_date = (function cljs_time$coerce$to_date(obj){
var G__85543 = obj;
var G__85543__$1 = (((G__85543 == null))?null:cljs_time.coerce.to_date_time.call(null,G__85543));
var G__85543__$2 = (((G__85543__$1 == null))?null:G__85543__$1.getTime());
if((G__85543__$2 == null)){
return null;
} else {
return (new Date(G__85543__$2));
}
});
/**
 * Returns a string representation of obj in UTC time-zone
 *   using "yyyy-MM-dd'T'HH:mm:ss.SSSZZ" date-time representation.
 */
cljs_time.coerce.to_string = (function cljs_time$coerce$to_string(obj){
var G__85545 = obj;
var G__85545__$1 = (((G__85545 == null))?null:cljs_time.coerce.to_date_time.call(null,G__85545));
if((G__85545__$1 == null)){
return null;
} else {
return cljs_time.format.unparse.call(null,new cljs.core.Keyword(null,"date-time","date-time",177938180).cljs$core$IFn$_invoke$arity$1(cljs_time.format.formatters),G__85545__$1);
}
});
/**
 * Convert `obj` to a goog.date.Date instance
 */
cljs_time.coerce.to_local_date = (function cljs_time$coerce$to_local_date(obj){
if(cljs.core.truth_(obj)){
var temp__6736__auto__ = cljs_time.coerce.to_date_time.call(null,obj);
if(cljs.core.truth_(temp__6736__auto__)){
var dt = temp__6736__auto__;
return (new goog.date.Date(dt.getYear(),dt.getMonth(),dt.getDate()));
} else {
return null;
}
} else {
return null;
}
});
/**
 * Convert `obj` to a goog.date.DateTime instance
 */
cljs_time.coerce.to_local_date_time = (function cljs_time$coerce$to_local_date_time(obj){
if(cljs.core.truth_(obj)){
var temp__6736__auto__ = cljs_time.coerce.to_date_time.call(null,obj);
if(cljs.core.truth_(temp__6736__auto__)){
var dt = temp__6736__auto__;
var G__85547 = (new goog.date.DateTime(dt.getYear(),dt.getMonth(),dt.getDate()));
G__85547.setHours(dt.getHours());

G__85547.setMinutes(dt.getMinutes());

G__85547.setSeconds(dt.getSeconds());

G__85547.setMilliseconds(dt.getMilliseconds());

return G__85547;
} else {
return null;
}
} else {
return null;
}
});
(cljs_time.coerce.ICoerce["null"] = true);

(cljs_time.coerce.to_date_time["null"] = (function (_){
return null;
}));

Date.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL;

Date.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (date){
var date__$1 = this;
return cljs_time.coerce.from_date.call(null,date__$1);
});

goog.date.Date.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.Date.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (local_date){
var local_date__$1 = this;
if(cljs.core.truth_(local_date__$1)){
return cljs_time.core.to_utc_time_zone.call(null,local_date__$1);
} else {
return null;
}
});

goog.date.DateTime.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.DateTime.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (local_date_time){
var local_date_time__$1 = this;
if(cljs.core.truth_(local_date_time__$1)){
return cljs_time.core.to_utc_time_zone.call(null,local_date_time__$1);
} else {
return null;
}
});

goog.date.UtcDateTime.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.UtcDateTime.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (date_time){
var date_time__$1 = this;
return date_time__$1;
});

(cljs_time.coerce.ICoerce["number"] = true);

(cljs_time.coerce.to_date_time["number"] = (function (long$){
return cljs_time.coerce.from_long.call(null,long$);
}));

(cljs_time.coerce.ICoerce["string"] = true);

(cljs_time.coerce.to_date_time["string"] = (function (string){
return cljs_time.coerce.from_string.call(null,string);
}));

//# sourceMappingURL=coerce.js.map?rel=1506064203420