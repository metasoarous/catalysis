// Compiled by ClojureScript 1.9.542 {}
goog.provide('hasch.core');
goog.require('cljs.core');
goog.require('hasch.benc');
goog.require('hasch.platform');
hasch.core.uuid4 = hasch.platform.uuid4;
hasch.core.uuid5 = hasch.platform.uuid5;
hasch.core.hash__GT_str = hasch.platform.hash__GT_str;
/**
 * Hash an edn value with SHA-512 by default or a compatible hash function of choice.
 */
hasch.core.edn_hash = (function hasch$core$edn_hash(var_args){
var args72071 = [];
var len__62575__auto___72074 = arguments.length;
var i__62576__auto___72075 = (0);
while(true){
if((i__62576__auto___72075 < len__62575__auto___72074)){
args72071.push((arguments[i__62576__auto___72075]));

var G__72076 = (i__62576__auto___72075 + (1));
i__62576__auto___72075 = G__72076;
continue;
} else {
}
break;
}

var G__72073 = args72071.length;
switch (G__72073) {
case 1:
return hasch.core.edn_hash.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hasch.core.edn_hash.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hasch.core.edn_hash.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args72071.length)].join('')));

}
});

hasch.core.edn_hash.cljs$core$IFn$_invoke$arity$1 = (function (val){
return hasch.core.edn_hash.call(null,val,cljs.core.PersistentArrayMap.EMPTY);
});

hasch.core.edn_hash.cljs$core$IFn$_invoke$arity$2 = (function (val,write_handlers){
return hasch.core.edn_hash.call(null,val,hasch.platform.sha512_message_digest,write_handlers);
});

hasch.core.edn_hash.cljs$core$IFn$_invoke$arity$3 = (function (val,md_create_fn,write_handlers){
return cljs.core.map.call(null,(function (p1__72070_SHARP_){
if((p1__72070_SHARP_ < (0))){
return (p1__72070_SHARP_ + (256));
} else {
return p1__72070_SHARP_;
}
}),hasch.benc.digest.call(null,hasch.benc._coerce.call(null,val,md_create_fn,(function (){var or__61290__auto__ = write_handlers;
if(cljs.core.truth_(or__61290__auto__)){
return or__61290__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),md_create_fn));
});

hasch.core.edn_hash.cljs$lang$maxFixedArity = 3;

/**
 * Creates random UUID-4 without argument or UUID-5 for the argument value.
 * 
 *   Optionally an incognito-style write-handlers map can be supplied,
 *   which describes record serialization in terms of Clojure data
 *   structures.
 */
hasch.core.uuid = (function hasch$core$uuid(var_args){
var args72078 = [];
var len__62575__auto___72086 = arguments.length;
var i__62576__auto___72087 = (0);
while(true){
if((i__62576__auto___72087 < len__62575__auto___72086)){
args72078.push((arguments[i__62576__auto___72087]));

var G__72088 = (i__62576__auto___72087 + (1));
i__62576__auto___72087 = G__72088;
continue;
} else {
}
break;
}

var G__72082 = args72078.length;
switch (G__72082) {
case 0:
return hasch.core.uuid.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__62598__auto__ = (new cljs.core.IndexedSeq(args72078.slice((1)),(0),null));
return hasch.core.uuid.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__62598__auto__);

}
});

hasch.core.uuid.cljs$core$IFn$_invoke$arity$0 = (function (){
return hasch.core.uuid4.call(null);
});

hasch.core.uuid.cljs$core$IFn$_invoke$arity$variadic = (function (val,p__72083){
var map__72084 = p__72083;
var map__72084__$1 = ((((!((map__72084 == null)))?((((map__72084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72084.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__72084):map__72084);
var write_handlers = cljs.core.get.call(null,map__72084__$1,new cljs.core.Keyword(null,"write-handlers","write-handlers",-2097288911));
return hasch.core.uuid5.call(null,hasch.core.edn_hash.call(null,val,write_handlers));
});

hasch.core.uuid.cljs$lang$applyTo = (function (seq72079){
var G__72080 = cljs.core.first.call(null,seq72079);
var seq72079__$1 = cljs.core.next.call(null,seq72079);
return hasch.core.uuid.cljs$core$IFn$_invoke$arity$variadic(G__72080,seq72079__$1);
});

hasch.core.uuid.cljs$lang$maxFixedArity = (1);


//# sourceMappingURL=core.js.map?rel=1506321320078