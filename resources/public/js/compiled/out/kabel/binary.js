// Compiled by ClojureScript 1.9.542 {}
goog.provide('kabel.binary');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('hasch.platform');
goog.require('kabel.util');
kabel.binary.encoding_table = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"binary","binary",-1802232288),(0),new cljs.core.Keyword(null,"string","string",-1989541586),(1),new cljs.core.Keyword(null,"pr-str","pr-str",587523624),(2),new cljs.core.Keyword(null,"transit-json","transit-json",1168016579),(11),new cljs.core.Keyword(null,"transit-msgpack","transit-msgpack",-127166965),(12)], null);
kabel.binary.decoding_table = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__66844){
var vec__66845 = p__66844;
var k = cljs.core.nth.call(null,vec__66845,(0),null);
var v = cljs.core.nth.call(null,vec__66845,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,k], null);
})),kabel.binary.encoding_table);
kabel.binary.to_binary = (function kabel$binary$to_binary(p__66848){
var map__66851 = p__66848;
var map__66851__$1 = ((((!((map__66851 == null)))?((((map__66851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66851.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66851):map__66851);
var m = map__66851__$1;
var serialization = cljs.core.get.call(null,map__66851__$1,new cljs.core.Keyword("kabel","serialization","kabel/serialization",437520425));
var payload = cljs.core.get.call(null,map__66851__$1,new cljs.core.Keyword("kabel","payload","kabel/payload",251259889));
var payload__$1 = ((cljs.core.not.call(null,serialization))?hasch.platform.utf8.call(null,cljs.core.pr_str.call(null,m)):payload);
var serialization__$1 = ((cljs.core.not.call(null,serialization))?new cljs.core.Keyword(null,"pr-str","pr-str",587523624):serialization);
var header = [(0),(0),(0),kabel.binary.encoding_table.call(null,serialization__$1)];
var wrapped = (new Uint8Array(((4) + payload__$1.length)));
var _ = wrapped.set((new Uint8Array(header)),(0));
var ___$1 = wrapped.set((new Uint8Array(payload__$1)),(4));
if(cljs.core.not.call(null,kabel.util.on_node_QMARK_.call(null))){
return (new Blob([wrapped]));
} else {
return (new Buffer(wrapped));
}
});
kabel.binary.from_binary = (function kabel$binary$from_binary(binary,cb){
var l = (cljs.core.truth_(kabel.util.on_node_QMARK_.call(null))?binary.length:binary.size);
var fr = (new FileReader());
fr.onload = ((function (l,fr){
return (function (p1__66853_SHARP_){
var b = p1__66853_SHARP_.target.result;
var encoding = kabel.binary.decoding_table.call(null,((new Uint8Array(b.slice((0),(4))))[(3)]));
var payload = (new Uint8Array(b.slice((4),l)));
return cb.call(null,(function (){try{if(cljs.core._EQ_.call(null,encoding,new cljs.core.Keyword(null,"pr-str","pr-str",587523624))){
return cljs.reader.read_string.call(null,(new TextDecoder("utf-8")).decode(payload));
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("kabel","serialization","kabel/serialization",437520425),encoding,new cljs.core.Keyword("kabel","payload","kabel/payload",251259889),payload], null);
}
}catch (e66855){if((e66855 instanceof Error)){
var e = e66855;
return cljs.core.ex_info.call(null,"Cannot parse binary.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),e], null));
} else {
throw e66855;

}
}})());
});})(l,fr))
;

return fr.readAsArrayBuffer(binary);
});

//# sourceMappingURL=binary.js.map?rel=1506321316565