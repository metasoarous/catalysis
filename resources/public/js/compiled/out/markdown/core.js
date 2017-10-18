// Compiled by ClojureScript 1.9.542 {}
goog.provide('markdown.core');
goog.require('cljs.core');
goog.require('markdown.common');
goog.require('markdown.links');
goog.require('markdown.transformers');
markdown.core.init_transformer = (function markdown$core$init_transformer(p__84257){
var map__84268 = p__84257;
var map__84268__$1 = ((((!((map__84268 == null)))?((((map__84268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__84268.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__84268):map__84268);
var replacement_transformers = cljs.core.get.call(null,map__84268__$1,new cljs.core.Keyword(null,"replacement-transformers","replacement-transformers",-2028552897));
var custom_transformers = cljs.core.get.call(null,map__84268__$1,new cljs.core.Keyword(null,"custom-transformers","custom-transformers",1440601790));
return ((function (map__84268,map__84268__$1,replacement_transformers,custom_transformers){
return (function (html,line,next_line,state){
var _STAR_next_line_STAR_84270 = markdown.transformers._STAR_next_line_STAR_;
markdown.transformers._STAR_next_line_STAR_ = next_line;

try{var vec__84271 = cljs.core.reduce.call(null,((function (_STAR_next_line_STAR_84270,map__84268,map__84268__$1,replacement_transformers,custom_transformers){
return (function (p__84274,transformer){
var vec__84275 = p__84274;
var text = cljs.core.nth.call(null,vec__84275,(0),null);
var state__$1 = cljs.core.nth.call(null,vec__84275,(1),null);
return transformer.call(null,text,state__$1);
});})(_STAR_next_line_STAR_84270,map__84268,map__84268__$1,replacement_transformers,custom_transformers))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__60899__auto__ = replacement_transformers;
if(cljs.core.truth_(or__60899__auto__)){
return or__60899__auto__;
} else {
return cljs.core.into.call(null,markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.call(null,vec__84271,(0),null);
var new_state = cljs.core.nth.call(null,vec__84271,(1),null);
html.append(text);

return new_state;
}finally {markdown.transformers._STAR_next_line_STAR_ = _STAR_next_line_STAR_84270;
}});
;})(map__84268,map__84268__$1,replacement_transformers,custom_transformers))
});
/**
 * Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
 */
markdown.core.format = (function markdown$core$format(var_args){
var args__62127__auto__ = [];
var len__62120__auto___84280 = arguments.length;
var i__62121__auto___84281 = (0);
while(true){
if((i__62121__auto___84281 < len__62120__auto___84280)){
args__62127__auto__.push((arguments[i__62121__auto___84281]));

var G__84282 = (i__62121__auto___84281 + (1));
i__62121__auto___84281 = G__84282;
continue;
} else {
}
break;
}

var argseq__62128__auto__ = ((((1) < args__62127__auto__.length))?(new cljs.core.IndexedSeq(args__62127__auto__.slice((1)),(0),null)):null);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__62128__auto__);
});

markdown.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
});

markdown.core.format.cljs$lang$maxFixedArity = (1);

markdown.core.format.cljs$lang$applyTo = (function (seq84278){
var G__84279 = cljs.core.first.call(null,seq84278);
var seq84278__$1 = cljs.core.next.call(null,seq84278);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic(G__84279,seq84278__$1);
});

markdown.core.parse_references = (function markdown$core$parse_references(lines){
var references = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var seq__84287_84291 = cljs.core.seq.call(null,lines);
var chunk__84288_84292 = null;
var count__84289_84293 = (0);
var i__84290_84294 = (0);
while(true){
if((i__84290_84294 < count__84289_84293)){
var line_84295 = cljs.core._nth.call(null,chunk__84288_84292,i__84290_84294);
markdown.links.parse_reference_link.call(null,line_84295,references);

var G__84296 = seq__84287_84291;
var G__84297 = chunk__84288_84292;
var G__84298 = count__84289_84293;
var G__84299 = (i__84290_84294 + (1));
seq__84287_84291 = G__84296;
chunk__84288_84292 = G__84297;
count__84289_84293 = G__84298;
i__84290_84294 = G__84299;
continue;
} else {
var temp__6738__auto___84300 = cljs.core.seq.call(null,seq__84287_84291);
if(temp__6738__auto___84300){
var seq__84287_84301__$1 = temp__6738__auto___84300;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__84287_84301__$1)){
var c__61810__auto___84302 = cljs.core.chunk_first.call(null,seq__84287_84301__$1);
var G__84303 = cljs.core.chunk_rest.call(null,seq__84287_84301__$1);
var G__84304 = c__61810__auto___84302;
var G__84305 = cljs.core.count.call(null,c__61810__auto___84302);
var G__84306 = (0);
seq__84287_84291 = G__84303;
chunk__84288_84292 = G__84304;
count__84289_84293 = G__84305;
i__84290_84294 = G__84306;
continue;
} else {
var line_84307 = cljs.core.first.call(null,seq__84287_84301__$1);
markdown.links.parse_reference_link.call(null,line_84307,references);

var G__84308 = cljs.core.next.call(null,seq__84287_84301__$1);
var G__84309 = null;
var G__84310 = (0);
var G__84311 = (0);
seq__84287_84291 = G__84308;
chunk__84288_84292 = G__84309;
count__84289_84293 = G__84310;
i__84290_84294 = G__84311;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,references);
});
markdown.core.parse_footnotes = (function markdown$core$parse_footnotes(lines){
var footnotes = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"next-fn-id","next-fn-id",738579636),(1),new cljs.core.Keyword(null,"processed","processed",800622264),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"unprocessed","unprocessed",766771972),cljs.core.PersistentArrayMap.EMPTY], null));
var seq__84316_84320 = cljs.core.seq.call(null,lines);
var chunk__84317_84321 = null;
var count__84318_84322 = (0);
var i__84319_84323 = (0);
while(true){
if((i__84319_84323 < count__84318_84322)){
var line_84324 = cljs.core._nth.call(null,chunk__84317_84321,i__84319_84323);
markdown.links.parse_footnote_link.call(null,line_84324,footnotes);

var G__84325 = seq__84316_84320;
var G__84326 = chunk__84317_84321;
var G__84327 = count__84318_84322;
var G__84328 = (i__84319_84323 + (1));
seq__84316_84320 = G__84325;
chunk__84317_84321 = G__84326;
count__84318_84322 = G__84327;
i__84319_84323 = G__84328;
continue;
} else {
var temp__6738__auto___84329 = cljs.core.seq.call(null,seq__84316_84320);
if(temp__6738__auto___84329){
var seq__84316_84330__$1 = temp__6738__auto___84329;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__84316_84330__$1)){
var c__61810__auto___84331 = cljs.core.chunk_first.call(null,seq__84316_84330__$1);
var G__84332 = cljs.core.chunk_rest.call(null,seq__84316_84330__$1);
var G__84333 = c__61810__auto___84331;
var G__84334 = cljs.core.count.call(null,c__61810__auto___84331);
var G__84335 = (0);
seq__84316_84320 = G__84332;
chunk__84317_84321 = G__84333;
count__84318_84322 = G__84334;
i__84319_84323 = G__84335;
continue;
} else {
var line_84336 = cljs.core.first.call(null,seq__84316_84330__$1);
markdown.links.parse_footnote_link.call(null,line_84336,footnotes);

var G__84337 = cljs.core.next.call(null,seq__84316_84330__$1);
var G__84338 = null;
var G__84339 = (0);
var G__84340 = (0);
seq__84316_84320 = G__84337;
chunk__84317_84321 = G__84338;
count__84318_84322 = G__84339;
i__84319_84323 = G__84340;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,footnotes);
});
markdown.core.parse_metadata = (function markdown$core$parse_metadata(lines){
var vec__84345 = cljs.core.split_with.call(null,(function (p1__84341_SHARP_){
return cljs.core.not_empty.call(null,p1__84341_SHARP_.trim());
}),lines);
var metadata = cljs.core.nth.call(null,vec__84345,(0),null);
var lines__$1 = cljs.core.nth.call(null,vec__84345,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.parse_metadata_headers.call(null,metadata),lines__$1], null);
});
/**
 * processes input text line by line and outputs an HTML string
 */
markdown.core.md_to_html_string_STAR_ = (function markdown$core$md_to_html_string_STAR_(text,params){
var _STAR_substring_STAR_84363 = markdown.common._STAR_substring_STAR_;
var formatter84364 = markdown.transformers.formatter;
markdown.common._STAR_substring_STAR_ = ((function (_STAR_substring_STAR_84363,formatter84364){
return (function (s,n){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.drop.call(null,n,s));
});})(_STAR_substring_STAR_84363,formatter84364))
;

markdown.transformers.formatter = markdown.core.format;

try{var params__$1 = (cljs.core.truth_(params)?cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),params):null);
var lines = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n")].join('').split("\n");
var html = (new goog.string.StringBuffer(""));
var references = (cljs.core.truth_(new cljs.core.Keyword(null,"reference-links?","reference-links?",-2003778981).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_references.call(null,lines):null);
var footnotes = (cljs.core.truth_(new cljs.core.Keyword(null,"footnotes?","footnotes?",-1590157845).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_footnotes.call(null,lines):null);
var vec__84365 = (cljs.core.truth_(new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_metadata.call(null,lines):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,lines], null));
var metadata = cljs.core.nth.call(null,vec__84365,(0),null);
var lines__$1 = cljs.core.nth.call(null,vec__84365,(1),null);
var transformer = markdown.core.init_transformer.call(null,params__$1);
var G__84371_84378 = lines__$1;
var vec__84372_84379 = G__84371_84378;
var seq__84373_84380 = cljs.core.seq.call(null,vec__84372_84379);
var first__84374_84381 = cljs.core.first.call(null,seq__84373_84380);
var seq__84373_84382__$1 = cljs.core.next.call(null,seq__84373_84380);
var line_84383 = first__84374_84381;
var more_84384 = seq__84373_84382__$1;
var state_84385 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clojurescript","clojurescript",-299769403),true,new cljs.core.Keyword(null,"references","references",882562509),references,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),footnotes,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true], null),params__$1);
var G__84371_84386__$1 = G__84371_84378;
var state_84387__$1 = state_84385;
while(true){
var vec__84375_84388 = G__84371_84386__$1;
var seq__84376_84389 = cljs.core.seq.call(null,vec__84375_84388);
var first__84377_84390 = cljs.core.first.call(null,seq__84376_84389);
var seq__84376_84391__$1 = cljs.core.next.call(null,seq__84376_84389);
var line_84392__$1 = first__84377_84390;
var more_84393__$1 = seq__84376_84391__$1;
var state_84394__$2 = state_84387__$1;
var state_84395__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_84394__$2))?transformer.call(null,html,new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_84394__$2),cljs.core.first.call(null,more_84393__$1),cljs.core.assoc.call(null,cljs.core.dissoc.call(null,state_84394__$2,new cljs.core.Keyword(null,"buf","buf",-213913340),new cljs.core.Keyword(null,"lists","lists",-884730684)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true)):state_84394__$2);
if(cljs.core.truth_(cljs.core.not_empty.call(null,more_84393__$1))){
var G__84396 = more_84393__$1;
var G__84397 = cljs.core.assoc.call(null,transformer.call(null,html,line_84392__$1,cljs.core.first.call(null,more_84393__$1),state_84395__$3),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),cljs.core.empty_QMARK_.call(null,line_84392__$1));
G__84371_84386__$1 = G__84396;
state_84387__$1 = G__84397;
continue;
} else {
transformer.call(null,html.append(markdown.transformers.footer.call(null,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205).cljs$core$IFn$_invoke$arity$1(state_84395__$3))),line_84392__$1,"",cljs.core.assoc.call(null,state_84395__$3,new cljs.core.Keyword(null,"eof","eof",-489063237),true));
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"metadata","metadata",1799301597),metadata,new cljs.core.Keyword(null,"html","html",-998796897),html.toString()], null);
}finally {markdown.transformers.formatter = formatter84364;

markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR_84363;
}});
markdown.core.md__GT_html = (function markdown$core$md__GT_html(var_args){
var args__62127__auto__ = [];
var len__62120__auto___84400 = arguments.length;
var i__62121__auto___84401 = (0);
while(true){
if((i__62121__auto___84401 < len__62120__auto___84400)){
args__62127__auto__.push((arguments[i__62121__auto___84401]));

var G__84402 = (i__62121__auto___84401 + (1));
i__62121__auto___84401 = G__84402;
continue;
} else {
}
break;
}

var argseq__62128__auto__ = ((((1) < args__62127__auto__.length))?(new cljs.core.IndexedSeq(args__62127__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__62128__auto__);
});

markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return new cljs.core.Keyword(null,"html","html",-998796897).cljs$core$IFn$_invoke$arity$1(markdown.core.md_to_html_string_STAR_.call(null,text,params));
});

markdown.core.md__GT_html.cljs$lang$maxFixedArity = (1);

markdown.core.md__GT_html.cljs$lang$applyTo = (function (seq84398){
var G__84399 = cljs.core.first.call(null,seq84398);
var seq84398__$1 = cljs.core.next.call(null,seq84398);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic(G__84399,seq84398__$1);
});

markdown.core.md__GT_html_with_meta = (function markdown$core$md__GT_html_with_meta(var_args){
var args__62127__auto__ = [];
var len__62120__auto___84405 = arguments.length;
var i__62121__auto___84406 = (0);
while(true){
if((i__62121__auto___84406 < len__62120__auto___84405)){
args__62127__auto__.push((arguments[i__62121__auto___84406]));

var G__84407 = (i__62121__auto___84406 + (1));
i__62121__auto___84406 = G__84407;
continue;
} else {
}
break;
}

var argseq__62128__auto__ = ((((1) < args__62127__auto__.length))?(new cljs.core.IndexedSeq(args__62127__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__62128__auto__);
});

markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return markdown.core.md_to_html_string_STAR_.call(null,text,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742),true], null),params));
});

markdown.core.md__GT_html_with_meta.cljs$lang$maxFixedArity = (1);

markdown.core.md__GT_html_with_meta.cljs$lang$applyTo = (function (seq84403){
var G__84404 = cljs.core.first.call(null,seq84403);
var seq84403__$1 = cljs.core.next.call(null,seq84403);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic(G__84404,seq84403__$1);
});

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtml = (function markdown$core$mdToHtml(var_args){
var args__62127__auto__ = [];
var len__62120__auto___84409 = arguments.length;
var i__62121__auto___84410 = (0);
while(true){
if((i__62121__auto___84410 < len__62120__auto___84409)){
args__62127__auto__.push((arguments[i__62121__auto___84410]));

var G__84411 = (i__62121__auto___84410 + (1));
i__62121__auto___84410 = G__84411;
continue;
} else {
}
break;
}

var argseq__62128__auto__ = ((((0) < args__62127__auto__.length))?(new cljs.core.IndexedSeq(args__62127__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(argseq__62128__auto__);
});
goog.exportSymbol('markdown.core.mdToHtml', markdown.core.mdToHtml);

markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.call(null,markdown.core.md__GT_html,params);
});

markdown.core.mdToHtml.cljs$lang$maxFixedArity = (0);

markdown.core.mdToHtml.cljs$lang$applyTo = (function (seq84408){
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq84408));
});

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtmlWithMeta = (function markdown$core$mdToHtmlWithMeta(var_args){
var args__62127__auto__ = [];
var len__62120__auto___84413 = arguments.length;
var i__62121__auto___84414 = (0);
while(true){
if((i__62121__auto___84414 < len__62120__auto___84413)){
args__62127__auto__.push((arguments[i__62121__auto___84414]));

var G__84415 = (i__62121__auto___84414 + (1));
i__62121__auto___84414 = G__84415;
continue;
} else {
}
break;
}

var argseq__62128__auto__ = ((((0) < args__62127__auto__.length))?(new cljs.core.IndexedSeq(args__62127__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic(argseq__62128__auto__);
});
goog.exportSymbol('markdown.core.mdToHtmlWithMeta', markdown.core.mdToHtmlWithMeta);

markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.call(null,markdown.core.md__GT_html_with_meta,params);
});

markdown.core.mdToHtmlWithMeta.cljs$lang$maxFixedArity = (0);

markdown.core.mdToHtmlWithMeta.cljs$lang$applyTo = (function (seq84412){
return markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq84412));
});


//# sourceMappingURL=core.js.map?rel=1506064200137