// Compiled by ClojureScript 1.9.542 {}
goog.provide('re_com.util');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('goog.date.DateTime');
goog.require('goog.date.UtcDateTime');
/**
 * Takes a function 'f' amd a map 'm'.  Applies 'f' to each value in 'm' and returns.
 * (fmap  inc  {:a 4  :b 2})   =>   {:a 5  :b 3}
 */
re_com.util.fmap = (function re_com$util$fmap(f,m){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__61761__auto__ = (function re_com$util$fmap_$_iter__84434(s__84435){
return (new cljs.core.LazySeq(null,(function (){
var s__84435__$1 = s__84435;
while(true){
var temp__6738__auto__ = cljs.core.seq.call(null,s__84435__$1);
if(temp__6738__auto__){
var s__84435__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__84435__$2)){
var c__61759__auto__ = cljs.core.chunk_first.call(null,s__84435__$2);
var size__61760__auto__ = cljs.core.count.call(null,c__61759__auto__);
var b__84437 = cljs.core.chunk_buffer.call(null,size__61760__auto__);
if((function (){var i__84436 = (0);
while(true){
if((i__84436 < size__61760__auto__)){
var vec__84444 = cljs.core._nth.call(null,c__61759__auto__,i__84436);
var k = cljs.core.nth.call(null,vec__84444,(0),null);
var val = cljs.core.nth.call(null,vec__84444,(1),null);
cljs.core.chunk_append.call(null,b__84437,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,val)], null));

var G__84450 = (i__84436 + (1));
i__84436 = G__84450;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__84437),re_com$util$fmap_$_iter__84434.call(null,cljs.core.chunk_rest.call(null,s__84435__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__84437),null);
}
} else {
var vec__84447 = cljs.core.first.call(null,s__84435__$2);
var k = cljs.core.nth.call(null,vec__84447,(0),null);
var val = cljs.core.nth.call(null,vec__84447,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,val)], null),re_com$util$fmap_$_iter__84434.call(null,cljs.core.rest.call(null,s__84435__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__61761__auto__.call(null,m);
})());
});
/**
 * Recursively merges maps. If vals are not maps, the last value wins.
 */
re_com.util.deep_merge = (function re_com$util$deep_merge(var_args){
var args__62127__auto__ = [];
var len__62120__auto___84452 = arguments.length;
var i__62121__auto___84453 = (0);
while(true){
if((i__62121__auto___84453 < len__62120__auto___84452)){
args__62127__auto__.push((arguments[i__62121__auto___84453]));

var G__84454 = (i__62121__auto___84453 + (1));
i__62121__auto___84453 = G__84454;
continue;
} else {
}
break;
}

var argseq__62128__auto__ = ((((0) < args__62127__auto__.length))?(new cljs.core.IndexedSeq(args__62127__auto__.slice((0)),(0),null)):null);
return re_com.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__62128__auto__);
});

re_com.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (vals){
if(cljs.core.every_QMARK_.call(null,cljs.core.map_QMARK_,vals)){
return cljs.core.apply.call(null,cljs.core.merge_with,re_com.util.deep_merge,vals);
} else {
return cljs.core.last.call(null,vals);
}
});

re_com.util.deep_merge.cljs$lang$maxFixedArity = (0);

re_com.util.deep_merge.cljs$lang$applyTo = (function (seq84451){
return re_com.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq84451));
});

re_com.util.deref_or_value = (function re_com$util$deref_or_value(val_or_atom){
if(((!((val_or_atom == null)))?((((val_or_atom.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === val_or_atom.cljs$core$IDeref$)))?true:(((!val_or_atom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,val_or_atom):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,val_or_atom))){
return cljs.core.deref.call(null,val_or_atom);
} else {
return val_or_atom;
}
});
re_com.util.get_element_by_id = (function re_com$util$get_element_by_id(id){
return document.getElementById(id);
});
/**
 * Left pad a string 's' with '0', until 's' has length 'len'. Return 's' unchanged, if it is already len or greater
 */
re_com.util.pad_zero = (function re_com$util$pad_zero(s,len){
if((cljs.core.count.call(null,s) < len)){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.take_last.call(null,len,cljs.core.concat.call(null,cljs.core.repeat.call(null,len,"0"),s)));
} else {
return s;
}
});
/**
 * return 'num' as a string of 'len' characters, left padding with '0' as necessary
 */
re_com.util.pad_zero_number = (function re_com$util$pad_zero_number(num,len){
return re_com.util.pad_zero.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(num)].join(''),len);
});
/**
 * takes a number (and optional :negative keyword to indicate a negative value) and returns that number as a string with 'px' at the end
 */
re_com.util.px = (function re_com$util$px(var_args){
var args__62127__auto__ = [];
var len__62120__auto___84459 = arguments.length;
var i__62121__auto___84460 = (0);
while(true){
if((i__62121__auto___84460 < len__62120__auto___84459)){
args__62127__auto__.push((arguments[i__62121__auto___84460]));

var G__84461 = (i__62121__auto___84460 + (1));
i__62121__auto___84460 = G__84461;
continue;
} else {
}
break;
}

var argseq__62128__auto__ = ((((1) < args__62127__auto__.length))?(new cljs.core.IndexedSeq(args__62127__auto__.slice((1)),(0),null)):null);
return re_com.util.px.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__62128__auto__);
});

re_com.util.px.cljs$core$IFn$_invoke$arity$variadic = (function (val,negative){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(negative)?(- val):val)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px")].join('');
});

re_com.util.px.cljs$lang$maxFixedArity = (1);

re_com.util.px.cljs$lang$applyTo = (function (seq84457){
var G__84458 = cljs.core.first.call(null,seq84457);
var seq84457__$1 = cljs.core.next.call(null,seq84457);
return re_com.util.px.cljs$core$IFn$_invoke$arity$variadic(G__84458,seq84457__$1);
});

/**
 * Removes the item at position n from a vector v, returning a shrunk vector
 */
re_com.util.remove_nth = (function re_com$util$remove_nth(v,n){
return cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.subvec.call(null,v,(0),n),cljs.core.subvec.call(null,v,(n + (1)),cljs.core.count.call(null,v))));
});
re_com.util.insert_nth = (function re_com$util$insert_nth(vect,index,item){
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.subvec.call(null,vect,(0),index),item,cljs.core.subvec.call(null,vect,index));
});
/**
 * Takes a vector of maps 'v'. Returns the position of the first item in 'v' whose id-fn (default :id) matches 'id'.
 * Returns nil if id not found
 */
re_com.util.position_for_id = (function re_com$util$position_for_id(var_args){
var args__62127__auto__ = [];
var len__62120__auto___84468 = arguments.length;
var i__62121__auto___84469 = (0);
while(true){
if((i__62121__auto___84469 < len__62120__auto___84468)){
args__62127__auto__.push((arguments[i__62121__auto___84469]));

var G__84470 = (i__62121__auto___84469 + (1));
i__62121__auto___84469 = G__84470;
continue;
} else {
}
break;
}

var argseq__62128__auto__ = ((((2) < args__62127__auto__.length))?(new cljs.core.IndexedSeq(args__62127__auto__.slice((2)),(0),null)):null);
return re_com.util.position_for_id.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__62128__auto__);
});

re_com.util.position_for_id.cljs$core$IFn$_invoke$arity$variadic = (function (id,v,p__84465){
var map__84466 = p__84465;
var map__84466__$1 = ((((!((map__84466 == null)))?((((map__84466.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__84466.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__84466):map__84466);
var id_fn = cljs.core.get.call(null,map__84466__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var index_fn = ((function (map__84466,map__84466__$1,id_fn){
return (function (index,item){
if(cljs.core._EQ_.call(null,id_fn.call(null,item),id)){
return index;
} else {
return null;
}
});})(map__84466,map__84466__$1,id_fn))
;
return cljs.core.first.call(null,cljs.core.keep_indexed.call(null,index_fn,v));
});

re_com.util.position_for_id.cljs$lang$maxFixedArity = (2);

re_com.util.position_for_id.cljs$lang$applyTo = (function (seq84462){
var G__84463 = cljs.core.first.call(null,seq84462);
var seq84462__$1 = cljs.core.next.call(null,seq84462);
var G__84464 = cljs.core.first.call(null,seq84462__$1);
var seq84462__$2 = cljs.core.next.call(null,seq84462__$1);
return re_com.util.position_for_id.cljs$core$IFn$_invoke$arity$variadic(G__84463,G__84464,seq84462__$2);
});

/**
 * Takes a vector of maps 'v'. Returns the first item in 'v' whose id-fn (default :id) matches 'id'.
 * Returns nil if id not found
 */
re_com.util.item_for_id = (function re_com$util$item_for_id(var_args){
var args__62127__auto__ = [];
var len__62120__auto___84478 = arguments.length;
var i__62121__auto___84479 = (0);
while(true){
if((i__62121__auto___84479 < len__62120__auto___84478)){
args__62127__auto__.push((arguments[i__62121__auto___84479]));

var G__84480 = (i__62121__auto___84479 + (1));
i__62121__auto___84479 = G__84480;
continue;
} else {
}
break;
}

var argseq__62128__auto__ = ((((2) < args__62127__auto__.length))?(new cljs.core.IndexedSeq(args__62127__auto__.slice((2)),(0),null)):null);
return re_com.util.item_for_id.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__62128__auto__);
});

re_com.util.item_for_id.cljs$core$IFn$_invoke$arity$variadic = (function (id,v,p__84475){
var map__84476 = p__84475;
var map__84476__$1 = ((((!((map__84476 == null)))?((((map__84476.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__84476.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__84476):map__84476);
var id_fn = cljs.core.get.call(null,map__84476__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.first.call(null,cljs.core.filter.call(null,((function (map__84476,map__84476__$1,id_fn){
return (function (p1__84471_SHARP_){
return cljs.core._EQ_.call(null,id_fn.call(null,p1__84471_SHARP_),id);
});})(map__84476,map__84476__$1,id_fn))
,v));
});

re_com.util.item_for_id.cljs$lang$maxFixedArity = (2);

re_com.util.item_for_id.cljs$lang$applyTo = (function (seq84472){
var G__84473 = cljs.core.first.call(null,seq84472);
var seq84472__$1 = cljs.core.next.call(null,seq84472);
var G__84474 = cljs.core.first.call(null,seq84472__$1);
var seq84472__$2 = cljs.core.next.call(null,seq84472__$1);
return re_com.util.item_for_id.cljs$core$IFn$_invoke$arity$variadic(G__84473,G__84474,seq84472__$2);
});

/**
 * Takes a vector of maps 'v', each of which has an id-fn (default :id) key.
 *   Return v where item matching 'id' is excluded
 */
re_com.util.remove_id_item = (function re_com$util$remove_id_item(var_args){
var args__62127__auto__ = [];
var len__62120__auto___84488 = arguments.length;
var i__62121__auto___84489 = (0);
while(true){
if((i__62121__auto___84489 < len__62120__auto___84488)){
args__62127__auto__.push((arguments[i__62121__auto___84489]));

var G__84490 = (i__62121__auto___84489 + (1));
i__62121__auto___84489 = G__84490;
continue;
} else {
}
break;
}

var argseq__62128__auto__ = ((((2) < args__62127__auto__.length))?(new cljs.core.IndexedSeq(args__62127__auto__.slice((2)),(0),null)):null);
return re_com.util.remove_id_item.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__62128__auto__);
});

re_com.util.remove_id_item.cljs$core$IFn$_invoke$arity$variadic = (function (id,v,p__84485){
var map__84486 = p__84485;
var map__84486__$1 = ((((!((map__84486 == null)))?((((map__84486.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__84486.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__84486):map__84486);
var id_fn = cljs.core.get.call(null,map__84486__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.filterv.call(null,((function (map__84486,map__84486__$1,id_fn){
return (function (p1__84481_SHARP_){
return cljs.core.not_EQ_.call(null,id_fn.call(null,p1__84481_SHARP_),id);
});})(map__84486,map__84486__$1,id_fn))
,v);
});

re_com.util.remove_id_item.cljs$lang$maxFixedArity = (2);

re_com.util.remove_id_item.cljs$lang$applyTo = (function (seq84482){
var G__84483 = cljs.core.first.call(null,seq84482);
var seq84482__$1 = cljs.core.next.call(null,seq84482);
var G__84484 = cljs.core.first.call(null,seq84482__$1);
var seq84482__$2 = cljs.core.next.call(null,seq84482__$1);
return re_com.util.remove_id_item.cljs$core$IFn$_invoke$arity$variadic(G__84483,G__84484,seq84482__$2);
});

/**
 * (for [[index item first? last?] (enumerate coll)] ...)  
 */
re_com.util.enumerate = (function re_com$util$enumerate(coll){
var c = (cljs.core.count.call(null,coll) - (1));
var f = ((function (c){
return (function (index,item){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,item,cljs.core._EQ_.call(null,(0),index),cljs.core._EQ_.call(null,c,index)], null);
});})(c))
;
return cljs.core.map_indexed.call(null,f,coll);
});
/**
 * Given a DOM node, I traverse through all ascendant nodes (until I reach body), summing any scrollLeft and scrollTop values
 * and return these sums in a map
 */
re_com.util.sum_scroll_offsets = (function re_com$util$sum_scroll_offsets(node){
var current_node = node.parentNode;
var sum_scroll_left = (0);
var sum_scroll_top = (0);
while(true){
if(cljs.core.not_EQ_.call(null,current_node.tagName,"BODY")){
var G__84491 = current_node.parentNode;
var G__84492 = (sum_scroll_left + current_node.scrollLeft);
var G__84493 = (sum_scroll_top + current_node.scrollTop);
current_node = G__84491;
sum_scroll_left = G__84492;
sum_scroll_top = G__84493;
continue;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),sum_scroll_left,new cljs.core.Keyword(null,"top","top",-1856271961),sum_scroll_top], null);
}
break;
}
});
/**
 * Answer a goog.date.UtcDateTime based on local date/time.
 */
re_com.util.now__GT_utc = (function re_com$util$now__GT_utc(){
var local_date = (new goog.date.DateTime());
return (new goog.date.UtcDateTime(local_date.getYear(),local_date.getMonth(),local_date.getDate(),(0),(0),(0),(0)));
});

//# sourceMappingURL=util.js.map?rel=1506064200269