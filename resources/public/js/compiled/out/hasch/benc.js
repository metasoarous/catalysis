// Compiled by ClojureScript 1.9.542 {}
goog.provide('hasch.benc');
goog.require('cljs.core');

/**
 * @interface
 */
hasch.benc.PHashCoercion = function(){};

hasch.benc._coerce = (function hasch$benc$_coerce(this$,md_create_fn,write_handlers){
if((!((this$ == null))) && (!((this$.hasch$benc$PHashCoercion$_coerce$arity$3 == null)))){
return this$.hasch$benc$PHashCoercion$_coerce$arity$3(this$,md_create_fn,write_handlers);
} else {
var x__61617__auto__ = (((this$ == null))?null:this$);
var m__61618__auto__ = (hasch.benc._coerce[goog.typeOf(x__61617__auto__)]);
if(!((m__61618__auto__ == null))){
return m__61618__auto__.call(null,this$,md_create_fn,write_handlers);
} else {
var m__61618__auto____$1 = (hasch.benc._coerce["_"]);
if(!((m__61618__auto____$1 == null))){
return m__61618__auto____$1.call(null,this$,md_create_fn,write_handlers);
} else {
throw cljs.core.missing_protocol.call(null,"PHashCoercion.-coerce",this$);
}
}
}
});

hasch.benc.magics = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"binary","binary",-1802232288),new cljs.core.Keyword(null,"inst","inst",645962501),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Keyword(null,"literal","literal",1664775605),new cljs.core.Keyword(null,"uuid","uuid",-2145095719),new cljs.core.Keyword(null,"seq","seq",-1817803783),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"boolean","boolean",-1919418404),new cljs.core.Keyword(null,"map","map",1371690461)],[(13),(6),(2),(4),(3),(9),(5),(0),(12),(7),(8),(11),(1),(10)]);
hasch.benc.split_size = (1024);
hasch.benc.max_entropy_byte_count = (32);
hasch.benc.byte_array = (function hasch$benc$byte_array(len){
return cljs.core.into_array.call(null,cljs.core.repeat.call(null,len,(0)));
});
hasch.benc.digest = (function hasch$benc$digest(bytes_or_seq_of_bytes,md_create_fn){
var md = md_create_fn.call(null);
if(cljs.core.seq_QMARK_.call(null,bytes_or_seq_of_bytes)){
var seq__90171_90175 = cljs.core.seq.call(null,bytes_or_seq_of_bytes);
var chunk__90172_90176 = null;
var count__90173_90177 = (0);
var i__90174_90178 = (0);
while(true){
if((i__90174_90178 < count__90173_90177)){
var bs_90179 = cljs.core._nth.call(null,chunk__90172_90176,i__90174_90178);
md.update(bs_90179);

var G__90180 = seq__90171_90175;
var G__90181 = chunk__90172_90176;
var G__90182 = count__90173_90177;
var G__90183 = (i__90174_90178 + (1));
seq__90171_90175 = G__90180;
chunk__90172_90176 = G__90181;
count__90173_90177 = G__90182;
i__90174_90178 = G__90183;
continue;
} else {
var temp__6738__auto___90184 = cljs.core.seq.call(null,seq__90171_90175);
if(temp__6738__auto___90184){
var seq__90171_90185__$1 = temp__6738__auto___90184;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__90171_90185__$1)){
var c__61810__auto___90186 = cljs.core.chunk_first.call(null,seq__90171_90185__$1);
var G__90187 = cljs.core.chunk_rest.call(null,seq__90171_90185__$1);
var G__90188 = c__61810__auto___90186;
var G__90189 = cljs.core.count.call(null,c__61810__auto___90186);
var G__90190 = (0);
seq__90171_90175 = G__90187;
chunk__90172_90176 = G__90188;
count__90173_90177 = G__90189;
i__90174_90178 = G__90190;
continue;
} else {
var bs_90191 = cljs.core.first.call(null,seq__90171_90185__$1);
md.update(bs_90191);

var G__90192 = cljs.core.next.call(null,seq__90171_90185__$1);
var G__90193 = null;
var G__90194 = (0);
var G__90195 = (0);
seq__90171_90175 = G__90192;
chunk__90172_90176 = G__90193;
count__90173_90177 = G__90194;
i__90174_90178 = G__90195;
continue;
}
} else {
}
}
break;
}
} else {
md.update(bytes_or_seq_of_bytes);
}

return md.digest();
});
hasch.benc.coerce_seq = (function hasch$benc$coerce_seq(seq,md_create_fn,write_handlers){
var seq_md = md_create_fn.call(null);
var s_90202 = seq;
while(true){
var vec__90199_90203 = s_90202;
var seq__90200_90204 = cljs.core.seq.call(null,vec__90199_90203);
var first__90201_90205 = cljs.core.first.call(null,seq__90200_90204);
var seq__90200_90206__$1 = cljs.core.next.call(null,seq__90200_90204);
var f_90207 = first__90201_90205;
var r_90208 = seq__90200_90206__$1;
seq_md.update(hasch.benc._coerce.call(null,f_90207,md_create_fn,write_handlers));

if(cljs.core.empty_QMARK_.call(null,r_90208)){
} else {
var G__90209 = cljs.core.rest.call(null,s_90202);
s_90202 = G__90209;
continue;
}
break;
}

return seq_md.digest();
});
/**
 * Commutatively coerces elements of collection, seq entries must already be crypto hashes
 *   to avoid collisions in XOR. Takes at maximum 32 bytes into account.
 */
hasch.benc.xor_hashes = (function hasch$benc$xor_hashes(seq){
var len = (function (){var x__61244__auto__ = cljs.core.count.call(null,cljs.core.first.call(null,seq));
var y__61245__auto__ = hasch.benc.max_entropy_byte_count;
return ((x__61244__auto__ < y__61245__auto__) ? x__61244__auto__ : y__61245__auto__);
})();
return cljs.core.reduce.call(null,((function (len){
return (function (acc,elem){
var i_90210 = (0);
while(true){
if((i_90210 < len)){
(acc[i_90210] = ((acc[i_90210]) ^ (elem[i_90210])));

var G__90211 = (i_90210 + (1));
i_90210 = G__90211;
continue;
} else {
}
break;
}

return acc;
});})(len))
,hasch.benc.byte_array.call(null,len),seq);
});
hasch.benc.encode_safe = (function hasch$benc$encode_safe(a,md_create_fn){
if((cljs.core.count.call(null,a) < hasch.benc.split_size)){
var len = cljs.core.long$.call(null,a.length);
var ea = hasch.benc.byte_array.call(null,len);
var i_90212 = (0);
while(true){
if(cljs.core._EQ_.call(null,i_90212,len)){
} else {
var e_90213 = (a[i_90212]);
if(((e_90213 > (0))) && ((e_90213 < (30)))){
(ea[i_90212] = (1));
} else {
}

var G__90214 = (i_90212 + (1));
i_90212 = G__90214;
continue;
}
break;
}

return a.concat(ea);
} else {
return hasch.benc.digest.call(null,a,md_create_fn);
}
});

//# sourceMappingURL=benc.js.map?rel=1506064215477