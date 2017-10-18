// Compiled by ClojureScript 1.9.542 {}
goog.provide('posh.lib.q_analyze');
goog.require('cljs.core');
goog.require('posh.lib.util');
goog.require('datascript.core');
goog.require('posh.lib.datom_matcher');
goog.require('posh.lib.pull_analyze');
goog.require('cljs.core.match');
posh.lib.q_analyze.take_until = (function posh$lib$q_analyze$take_until(stop_at_QMARK_,ls){
if(cljs.core.truth_((function (){var or__60899__auto__ = cljs.core.empty_QMARK_.call(null,ls);
if(or__60899__auto__){
return or__60899__auto__;
} else {
return stop_at_QMARK_.call(null,cljs.core.first.call(null,ls));
}
})())){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.cons.call(null,cljs.core.first.call(null,ls),posh.lib.q_analyze.take_until.call(null,stop_at_QMARK_,cljs.core.rest.call(null,ls)));
}
});
posh.lib.q_analyze.rest_at = (function posh$lib$q_analyze$rest_at(rest_at_QMARK_,ls){
while(true){
if(cljs.core.truth_((function (){var or__60899__auto__ = cljs.core.empty_QMARK_.call(null,ls);
if(or__60899__auto__){
return or__60899__auto__;
} else {
return rest_at_QMARK_.call(null,cljs.core.first.call(null,ls));
}
})())){
return ls;
} else {
var G__66654 = rest_at_QMARK_;
var G__66655 = cljs.core.rest.call(null,ls);
rest_at_QMARK_ = G__66654;
ls = G__66655;
continue;
}
break;
}
});
posh.lib.q_analyze.split_list_at = (function posh$lib$q_analyze$split_list_at(split_at_QMARK_,ls){
if(cljs.core.empty_QMARK_.call(null,ls)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first.call(null,ls),posh.lib.q_analyze.take_until.call(null,split_at_QMARK_,posh.lib.q_analyze.take_until.call(null,split_at_QMARK_,cljs.core.rest.call(null,ls)))]),posh.lib.q_analyze.split_list_at.call(null,split_at_QMARK_,posh.lib.q_analyze.rest_at.call(null,split_at_QMARK_,cljs.core.rest.call(null,ls))));
}
});
posh.lib.q_analyze.query_to_map = (function posh$lib$q_analyze$query_to_map(query){
if(!(cljs.core.map_QMARK_.call(null,query))){
return posh.lib.q_analyze.split_list_at.call(null,cljs.core.keyword_QMARK_,query);
} else {
return query;
}
});
posh.lib.q_analyze.dbvar_QMARK_ = (function posh$lib$q_analyze$dbvar_QMARK_(x){
return ((x instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('')),"$"));
});
posh.lib.q_analyze.qvar_QMARK_ = (function posh$lib$q_analyze$qvar_QMARK_(x){
return ((x instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('')),"?"));
});
posh.lib.q_analyze.get_all_vars = (function posh$lib$q_analyze$get_all_vars(query){
if(cljs.core.empty_QMARK_.call(null,query)){
return cljs.core.PersistentHashSet.EMPTY;
} else {
if(cljs.core.coll_QMARK_.call(null,cljs.core.first.call(null,query))){
return clojure.set.union.call(null,posh.lib.q_analyze.get_all_vars.call(null,cljs.core.first.call(null,query)),posh.lib.q_analyze.get_all_vars.call(null,cljs.core.rest.call(null,query)));
} else {
if(cljs.core.truth_(posh.lib.q_analyze.qvar_QMARK_.call(null,cljs.core.first.call(null,query)))){
return cljs.core.conj.call(null,posh.lib.q_analyze.get_all_vars.call(null,cljs.core.rest.call(null,query)),cljs.core.first.call(null,query));
} else {
return posh.lib.q_analyze.get_all_vars.call(null,cljs.core.rest.call(null,query));

}
}
}
});
posh.lib.q_analyze.qvar_gen = (function (){var qvar_count = cljs.core.atom.call(null,(3284832));
return ((function (qvar_count){
return (function (){
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("?var"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.call(null,qvar_count,cljs.core.inc))].join(''));
});
;})(qvar_count))
})();
posh.lib.q_analyze.eav_QMARK_ = (function posh$lib$q_analyze$eav_QMARK_(v){
return (cljs.core.vector_QMARK_.call(null,v)) && (cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.coll_QMARK_,v)));
});
posh.lib.q_analyze.wildcard_QMARK_ = (function posh$lib$q_analyze$wildcard_QMARK_(s){
return cljs.core._EQ_.call(null,s,new cljs.core.Symbol(null,"_","_",-1201019570,null));
});
posh.lib.q_analyze.normalize_eav_helper = (function posh$lib$q_analyze$normalize_eav_helper(eav,n,neweav,vars){
if(cljs.core._EQ_.call(null,n,(0))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"eav","eav",-1118737308),neweav,new cljs.core.Keyword(null,"vars","vars",-2046957217),vars], null);
} else {
if(cljs.core.truth_((function (){var and__60887__auto__ = cljs.core.first.call(null,eav);
if(cljs.core.truth_(and__60887__auto__)){
return cljs.core.not.call(null,posh.lib.q_analyze.wildcard_QMARK_.call(null,cljs.core.first.call(null,eav)));
} else {
return and__60887__auto__;
}
})())){
return posh.lib.q_analyze.normalize_eav_helper.call(null,cljs.core.rest.call(null,eav),(n - (1)),cljs.core.conj.call(null,neweav,cljs.core.first.call(null,eav)),vars);
} else {
var var$ = posh.lib.q_analyze.qvar_gen.call(null);
return posh.lib.q_analyze.normalize_eav_helper.call(null,cljs.core.rest.call(null,eav),(n - (1)),cljs.core.conj.call(null,neweav,var$),cljs.core.conj.call(null,vars,var$));
}
}
});
posh.lib.q_analyze.normalize_eav = (function posh$lib$q_analyze$normalize_eav(eav){
var dbeav = (cljs.core.truth_(posh.lib.q_analyze.dbvar_QMARK_.call(null,cljs.core.first.call(null,eav)))?eav:cljs.core.cons.call(null,cljs.core.symbol.call(null,"$"),eav));
return cljs.core.vec.call(null,cljs.core.cons.call(null,cljs.core.first.call(null,dbeav),cljs.core.concat.call(null,new cljs.core.Keyword(null,"eav","eav",-1118737308).cljs$core$IFn$_invoke$arity$1(posh.lib.q_analyze.normalize_eav_helper.call(null,cljs.core.rest.call(null,dbeav),(3),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY)),cljs.core.drop.call(null,(4),dbeav))));
});
posh.lib.q_analyze.normalize_all_eavs = (function posh$lib$q_analyze$normalize_all_eavs(where){
if(cljs.core.empty_QMARK_.call(null,where)){
return cljs.core.PersistentVector.EMPTY;
} else {
if(cljs.core.list_QMARK_.call(null,where)){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first.call(null,where)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or-join","or-join",591375469,null),new cljs.core.Symbol(null,"not-join","not-join",-645515756,null)], null)))){
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,where),cljs.core.second.call(null,where)], null),posh.lib.q_analyze.normalize_all_eavs.call(null,cljs.core.vec.call(null,cljs.core.drop.call(null,(2),where))));
} else {
return cljs.core.cons.call(null,cljs.core.first.call(null,where),posh.lib.q_analyze.normalize_all_eavs.call(null,cljs.core.vec.call(null,cljs.core.rest.call(null,where))));
}
} else {
if(cljs.core.truth_(posh.lib.q_analyze.eav_QMARK_.call(null,where))){
return posh.lib.q_analyze.normalize_eav.call(null,where);
} else {
if((cljs.core.vector_QMARK_.call(null,where)) && (cljs.core.list_QMARK_.call(null,cljs.core.first.call(null,where)))){
return where;
} else {
if(cljs.core.coll_QMARK_.call(null,where)){
return cljs.core.vec.call(null,cljs.core.map.call(null,posh.lib.q_analyze.normalize_all_eavs,where));
} else {
return where;

}
}
}
}
}
});
posh.lib.q_analyze.get_eavs = (function posh$lib$q_analyze$get_eavs(where){
if(cljs.core.empty_QMARK_.call(null,where)){
return cljs.core.PersistentVector.EMPTY;
} else {
var item = cljs.core.first.call(null,where);
if(cljs.core.seq_QMARK_.call(null,item)){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first.call(null,item)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or-join","or-join",591375469,null),new cljs.core.Symbol(null,"not-join","not-join",-645515756,null)], null)))){
return cljs.core.concat.call(null,posh.lib.q_analyze.get_eavs.call(null,cljs.core.vec.call(null,cljs.core.rest.call(null,where))),posh.lib.q_analyze.get_eavs.call(null,cljs.core.vec.call(null,cljs.core.drop.call(null,(2),item))));
} else {
return cljs.core.concat.call(null,posh.lib.q_analyze.get_eavs.call(null,cljs.core.vec.call(null,cljs.core.rest.call(null,where))),posh.lib.q_analyze.get_eavs.call(null,cljs.core.vec.call(null,cljs.core.rest.call(null,item))));
}
} else {
if(cljs.core.truth_(posh.lib.q_analyze.eav_QMARK_.call(null,item))){
return cljs.core.cons.call(null,item,posh.lib.q_analyze.get_eavs.call(null,cljs.core.rest.call(null,where)));
} else {
if((cljs.core.vector_QMARK_.call(null,item)) && (cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,item)))){
var ocr_66669 = cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.first.call(null,item))], null),cljs.core.rest.call(null,item)));
try{if((cljs.core.vector_QMARK_.call(null,ocr_66669)) && ((cljs.core.count.call(null,ocr_66669) === 2))){
try{var ocr_66669_0__66672 = cljs.core.nth.call(null,ocr_66669,(0));
if((cljs.core.vector_QMARK_.call(null,ocr_66669_0__66672)) && ((cljs.core.count.call(null,ocr_66669_0__66672) === 5))){
try{var ocr_66669_0__66672_0__66674 = cljs.core.nth.call(null,ocr_66669_0__66672,(0));
if(cljs.core._EQ_.call(null,ocr_66669_0__66672_0__66674,new cljs.core.Symbol(null,"get-else","get-else",1312024065,null))){
var db = cljs.core.nth.call(null,ocr_66669_0__66672,(1));
var e = cljs.core.nth.call(null,ocr_66669_0__66672,(2));
var a = cljs.core.nth.call(null,ocr_66669_0__66672,(3));
var v = cljs.core.nth.call(null,ocr_66669,(1));
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [db,e,a,v], null)], null),posh.lib.q_analyze.get_eavs.call(null,cljs.core.vec.call(null,cljs.core.rest.call(null,where))));
} else {
throw cljs.core.match.backtrack;

}
}catch (e66681){if((e66681 instanceof Error)){
var e__37574__auto__ = e66681;
if((e__37574__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37574__auto__;
}
} else {
throw e66681;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e66680){if((e66680 instanceof Error)){
var e__37574__auto__ = e66680;
if((e__37574__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37574__auto__;
}
} else {
throw e66680;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e66679){if((e66679 instanceof Error)){
var e__37574__auto__ = e66679;
if((e__37574__auto__ === cljs.core.match.backtrack)){
return posh.lib.q_analyze.get_eavs.call(null,cljs.core.vec.call(null,cljs.core.rest.call(null,where)));
} else {
throw e__37574__auto__;
}
} else {
throw e66679;

}
}} else {
return posh.lib.q_analyze.get_eavs.call(null,cljs.core.vec.call(null,cljs.core.rest.call(null,where)));

}
}
}
}
});
posh.lib.q_analyze.qm_to_query = (function posh$lib$q_analyze$qm_to_query(qm){
return cljs.core.reduce.call(null,(function (xs,p__66686){
var vec__66687 = p__66686;
var k = cljs.core.nth.call(null,vec__66687,(0),null);
var v = cljs.core.nth.call(null,vec__66687,(1),null);
return cljs.core.concat.call(null,xs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),v);
}),cljs.core.PersistentVector.EMPTY,qm);
});
posh.lib.q_analyze.create_q_datoms = (function posh$lib$q_analyze$create_q_datoms(results,eavs,vars){
return cljs.core.set.call(null,cljs.core.mapcat.call(null,(function (r){
var vs = cljs.core.zipmap.call(null,vars,r);
return cljs.core.map.call(null,((function (vs){
return (function (eav){
return cljs.core.vec.call(null,cljs.core.map.call(null,((function (vs){
return (function (p1__66690_SHARP_){
if(cljs.core.truth_(posh.lib.q_analyze.qvar_QMARK_.call(null,p1__66690_SHARP_))){
return cljs.core.get.call(null,vs,p1__66690_SHARP_);
} else {
return p1__66690_SHARP_;
}
});})(vs))
,eav));
});})(vs))
,eavs);
}),results));
});
posh.lib.q_analyze.count_qvars = (function posh$lib$q_analyze$count_qvars(xs){
if(cljs.core.empty_QMARK_.call(null,xs)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(cljs.core.coll_QMARK_.call(null,cljs.core.first.call(null,xs))){
return cljs.core.merge_with.call(null,cljs.core._PLUS_,posh.lib.q_analyze.count_qvars.call(null,cljs.core.first.call(null,xs)),posh.lib.q_analyze.count_qvars.call(null,cljs.core.rest.call(null,xs)));
} else {
return cljs.core.merge_with.call(null,cljs.core._PLUS_,(cljs.core.truth_(posh.lib.q_analyze.qvar_QMARK_.call(null,cljs.core.first.call(null,xs)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first.call(null,xs),(1)]):null),posh.lib.q_analyze.count_qvars.call(null,cljs.core.rest.call(null,xs)));

}
}
});
posh.lib.q_analyze.fill_qvar_set = (function posh$lib$q_analyze$fill_qvar_set(qvar,results,where){
var iter__61761__auto__ = (function posh$lib$q_analyze$fill_qvar_set_$_iter__66695(s__66696){
return (new cljs.core.LazySeq(null,(function (){
var s__66696__$1 = s__66696;
while(true){
var temp__6738__auto__ = cljs.core.seq.call(null,s__66696__$1);
if(temp__6738__auto__){
var s__66696__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__66696__$2)){
var c__61759__auto__ = cljs.core.chunk_first.call(null,s__66696__$2);
var size__61760__auto__ = cljs.core.count.call(null,c__61759__auto__);
var b__66698 = cljs.core.chunk_buffer.call(null,size__61760__auto__);
if((function (){var i__66697 = (0);
while(true){
if((i__66697 < size__61760__auto__)){
var r = cljs.core._nth.call(null,c__61759__auto__,i__66697);
cljs.core.chunk_append.call(null,b__66698,(function (){var vars = cljs.core.zipmap.call(null,where,r);
return cljs.core.get.call(null,vars,qvar);
})());

var G__66699 = (i__66697 + (1));
i__66697 = G__66699;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__66698),posh$lib$q_analyze$fill_qvar_set_$_iter__66695.call(null,cljs.core.chunk_rest.call(null,s__66696__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__66698),null);
}
} else {
var r = cljs.core.first.call(null,s__66696__$2);
return cljs.core.cons.call(null,(function (){var vars = cljs.core.zipmap.call(null,where,r);
return cljs.core.get.call(null,vars,qvar);
})(),posh$lib$q_analyze$fill_qvar_set_$_iter__66695.call(null,cljs.core.rest.call(null,s__66696__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__61761__auto__.call(null,results);
});
posh.lib.q_analyze.seq_merge_with = (function posh$lib$q_analyze$seq_merge_with(f,seq1,seq2){
if(cljs.core.empty_QMARK_.call(null,seq1)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,seq1),cljs.core.first.call(null,seq2)),posh.lib.q_analyze.seq_merge_with.call(null,f,cljs.core.rest.call(null,seq1),cljs.core.rest.call(null,seq2)));
}
});
posh.lib.q_analyze.stack_vectors = (function posh$lib$q_analyze$stack_vectors(vs){
return cljs.core.reduce.call(null,(function (stacked,eav){
return posh.lib.q_analyze.seq_merge_with.call(null,cljs.core.conj,stacked,eav);
}),cljs.core.take.call(null,cljs.core.count.call(null,cljs.core.first.call(null,vs)),cljs.core.repeat.call(null,cljs.core.PersistentHashSet.EMPTY)),vs);
});
posh.lib.q_analyze.pattern_from_eav__old = (function posh$lib$q_analyze$pattern_from_eav__old(vars,p__66702){
var vec__66781 = p__66702;
var e = cljs.core.nth.call(null,vec__66781,(0),null);
var a = cljs.core.nth.call(null,vec__66781,(1),null);
var v = cljs.core.nth.call(null,vec__66781,(2),null);
var eav = vec__66781;
var vec__66784 = cljs.core.map.call(null,posh.lib.q_analyze.qvar_QMARK_,eav);
var qe = cljs.core.nth.call(null,vec__66784,(0),null);
var qa = cljs.core.nth.call(null,vec__66784,(1),null);
var qv = cljs.core.nth.call(null,vec__66784,(2),null);
var iter__61761__auto__ = ((function (vec__66784,qe,qa,qv,vec__66781,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__66787(s__66788){
return (new cljs.core.LazySeq(null,((function (vec__66784,qe,qa,qv,vec__66781,e,a,v,eav){
return (function (){
var s__66788__$1 = s__66788;
while(true){
var temp__6738__auto__ = cljs.core.seq.call(null,s__66788__$1);
if(temp__6738__auto__){
var xs__7294__auto__ = temp__6738__auto__;
var ee = cljs.core.first.call(null,xs__7294__auto__);
var iterys__61757__auto__ = ((function (s__66788__$1,ee,xs__7294__auto__,temp__6738__auto__,vec__66784,qe,qa,qv,vec__66781,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__66787_$_iter__66789(s__66790){
return (new cljs.core.LazySeq(null,((function (s__66788__$1,ee,xs__7294__auto__,temp__6738__auto__,vec__66784,qe,qa,qv,vec__66781,e,a,v,eav){
return (function (){
var s__66790__$1 = s__66790;
while(true){
var temp__6738__auto____$1 = cljs.core.seq.call(null,s__66790__$1);
if(temp__6738__auto____$1){
var xs__7294__auto____$1 = temp__6738__auto____$1;
var aa = cljs.core.first.call(null,xs__7294__auto____$1);
var iterys__61757__auto__ = ((function (s__66790__$1,s__66788__$1,aa,xs__7294__auto____$1,temp__6738__auto____$1,ee,xs__7294__auto__,temp__6738__auto__,vec__66784,qe,qa,qv,vec__66781,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__66787_$_iter__66789_$_iter__66791(s__66792){
return (new cljs.core.LazySeq(null,((function (s__66790__$1,s__66788__$1,aa,xs__7294__auto____$1,temp__6738__auto____$1,ee,xs__7294__auto__,temp__6738__auto__,vec__66784,qe,qa,qv,vec__66781,e,a,v,eav){
return (function (){
var s__66792__$1 = s__66792;
while(true){
var temp__6738__auto____$2 = cljs.core.seq.call(null,s__66792__$1);
if(temp__6738__auto____$2){
var s__66792__$2 = temp__6738__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__66792__$2)){
var c__61759__auto__ = cljs.core.chunk_first.call(null,s__66792__$2);
var size__61760__auto__ = cljs.core.count.call(null,c__61759__auto__);
var b__66794 = cljs.core.chunk_buffer.call(null,size__61760__auto__);
if((function (){var i__66793 = (0);
while(true){
if((i__66793 < size__61760__auto__)){
var vv = cljs.core._nth.call(null,c__61759__auto__,i__66793);
if((function (){var wildcard_count = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (i__66793,s__66792__$1,s__66790__$1,s__66788__$1,vv,c__61759__auto__,size__61760__auto__,b__66794,s__66792__$2,temp__6738__auto____$2,aa,xs__7294__auto____$1,temp__6738__auto____$1,ee,xs__7294__auto__,temp__6738__auto__,vec__66784,qe,qa,qv,vec__66781,e,a,v,eav){
return (function (p1__66700_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),p1__66700_SHARP_)){
return (1);
} else {
return (0);
}
});})(i__66793,s__66792__$1,s__66790__$1,s__66788__$1,vv,c__61759__auto__,size__61760__auto__,b__66794,s__66792__$2,temp__6738__auto____$2,aa,xs__7294__auto____$1,temp__6738__auto____$1,ee,xs__7294__auto__,temp__6738__auto__,vec__66784,qe,qa,qv,vec__66781,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null)));
var exposed_qvars = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (i__66793,s__66792__$1,s__66790__$1,s__66788__$1,wildcard_count,vv,c__61759__auto__,size__61760__auto__,b__66794,s__66792__$2,temp__6738__auto____$2,aa,xs__7294__auto____$1,temp__6738__auto____$1,ee,xs__7294__auto__,temp__6738__auto__,vec__66784,qe,qa,qv,vec__66781,e,a,v,eav){
return (function (p__66851){
var vec__66852 = p__66851;
var var_QMARK_ = cljs.core.nth.call(null,vec__66852,(0),null);
var val = cljs.core.nth.call(null,vec__66852,(1),null);
if(cljs.core.truth_((function (){var and__60887__auto__ = var_QMARK_;
if(cljs.core.truth_(and__60887__auto__)){
return cljs.core.not_EQ_.call(null,val,new cljs.core.Symbol(null,"_","_",-1201019570,null));
} else {
return and__60887__auto__;
}
})())){
return (1);
} else {
return (0);
}
});})(i__66793,s__66792__$1,s__66790__$1,s__66788__$1,wildcard_count,vv,c__61759__auto__,size__61760__auto__,b__66794,s__66792__$2,temp__6738__auto____$2,aa,xs__7294__auto____$1,temp__6738__auto____$1,ee,xs__7294__auto__,temp__6738__auto__,vec__66784,qe,qa,qv,vec__66781,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,ee], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qa,aa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qv,vv], null)], null)));
var qvar_count = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (i__66793,s__66792__$1,s__66790__$1,s__66788__$1,wildcard_count,exposed_qvars,vv,c__61759__auto__,size__61760__auto__,b__66794,s__66792__$2,temp__6738__auto____$2,aa,xs__7294__auto____$1,temp__6738__auto____$1,ee,xs__7294__auto__,temp__6738__auto__,vec__66784,qe,qa,qv,vec__66781,e,a,v,eav){
return (function (p1__66701_SHARP_){
if(cljs.core.truth_(p1__66701_SHARP_)){
return (1);
} else {
return (0);
}
});})(i__66793,s__66792__$1,s__66790__$1,s__66788__$1,wildcard_count,exposed_qvars,vv,c__61759__auto__,size__61760__auto__,b__66794,s__66792__$2,temp__6738__auto____$2,aa,xs__7294__auto____$1,temp__6738__auto____$1,ee,xs__7294__auto__,temp__6738__auto__,vec__66784,qe,qa,qv,vec__66781,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,qa,qv], null)));
return ((wildcard_count >= (1))) && ((((qvar_count > (1))) && (cljs.core._EQ_.call(null,(1),exposed_qvars))) || ((qvar_count <= (1)))) && ((wildcard_count <= qvar_count));
})()){
cljs.core.chunk_append.call(null,b__66794,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null));

var G__66859 = (i__66793 + (1));
i__66793 = G__66859;
continue;
} else {
var G__66860 = (i__66793 + (1));
i__66793 = G__66860;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__66794),posh$lib$q_analyze$pattern_from_eav__old_$_iter__66787_$_iter__66789_$_iter__66791.call(null,cljs.core.chunk_rest.call(null,s__66792__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__66794),null);
}
} else {
var vv = cljs.core.first.call(null,s__66792__$2);
if((function (){var wildcard_count = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (s__66792__$1,s__66790__$1,s__66788__$1,vv,s__66792__$2,temp__6738__auto____$2,aa,xs__7294__auto____$1,temp__6738__auto____$1,ee,xs__7294__auto__,temp__6738__auto__,vec__66784,qe,qa,qv,vec__66781,e,a,v,eav){
return (function (p1__66700_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),p1__66700_SHARP_)){
return (1);
} else {
return (0);
}
});})(s__66792__$1,s__66790__$1,s__66788__$1,vv,s__66792__$2,temp__6738__auto____$2,aa,xs__7294__auto____$1,temp__6738__auto____$1,ee,xs__7294__auto__,temp__6738__auto__,vec__66784,qe,qa,qv,vec__66781,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null)));
var exposed_qvars = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (s__66792__$1,s__66790__$1,s__66788__$1,wildcard_count,vv,s__66792__$2,temp__6738__auto____$2,aa,xs__7294__auto____$1,temp__6738__auto____$1,ee,xs__7294__auto__,temp__6738__auto__,vec__66784,qe,qa,qv,vec__66781,e,a,v,eav){
return (function (p__66855){
var vec__66856 = p__66855;
var var_QMARK_ = cljs.core.nth.call(null,vec__66856,(0),null);
var val = cljs.core.nth.call(null,vec__66856,(1),null);
if(cljs.core.truth_((function (){var and__60887__auto__ = var_QMARK_;
if(cljs.core.truth_(and__60887__auto__)){
return cljs.core.not_EQ_.call(null,val,new cljs.core.Symbol(null,"_","_",-1201019570,null));
} else {
return and__60887__auto__;
}
})())){
return (1);
} else {
return (0);
}
});})(s__66792__$1,s__66790__$1,s__66788__$1,wildcard_count,vv,s__66792__$2,temp__6738__auto____$2,aa,xs__7294__auto____$1,temp__6738__auto____$1,ee,xs__7294__auto__,temp__6738__auto__,vec__66784,qe,qa,qv,vec__66781,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,ee], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qa,aa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qv,vv], null)], null)));
var qvar_count = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (s__66792__$1,s__66790__$1,s__66788__$1,wildcard_count,exposed_qvars,vv,s__66792__$2,temp__6738__auto____$2,aa,xs__7294__auto____$1,temp__6738__auto____$1,ee,xs__7294__auto__,temp__6738__auto__,vec__66784,qe,qa,qv,vec__66781,e,a,v,eav){
return (function (p1__66701_SHARP_){
if(cljs.core.truth_(p1__66701_SHARP_)){
return (1);
} else {
return (0);
}
});})(s__66792__$1,s__66790__$1,s__66788__$1,wildcard_count,exposed_qvars,vv,s__66792__$2,temp__6738__auto____$2,aa,xs__7294__auto____$1,temp__6738__auto____$1,ee,xs__7294__auto__,temp__6738__auto__,vec__66784,qe,qa,qv,vec__66781,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,qa,qv], null)));
return ((wildcard_count >= (1))) && ((((qvar_count > (1))) && (cljs.core._EQ_.call(null,(1),exposed_qvars))) || ((qvar_count <= (1)))) && ((wildcard_count <= qvar_count));
})()){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null),posh$lib$q_analyze$pattern_from_eav__old_$_iter__66787_$_iter__66789_$_iter__66791.call(null,cljs.core.rest.call(null,s__66792__$2)));
} else {
var G__66861 = cljs.core.rest.call(null,s__66792__$2);
s__66792__$1 = G__66861;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__66790__$1,s__66788__$1,aa,xs__7294__auto____$1,temp__6738__auto____$1,ee,xs__7294__auto__,temp__6738__auto__,vec__66784,qe,qa,qv,vec__66781,e,a,v,eav))
,null,null));
});})(s__66790__$1,s__66788__$1,aa,xs__7294__auto____$1,temp__6738__auto____$1,ee,xs__7294__auto__,temp__6738__auto__,vec__66784,qe,qa,qv,vec__66781,e,a,v,eav))
;
var fs__61758__auto__ = cljs.core.seq.call(null,iterys__61757__auto__.call(null,(cljs.core.truth_(qv)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.call(null,vars,v)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null))));
if(fs__61758__auto__){
return cljs.core.concat.call(null,fs__61758__auto__,posh$lib$q_analyze$pattern_from_eav__old_$_iter__66787_$_iter__66789.call(null,cljs.core.rest.call(null,s__66790__$1)));
} else {
var G__66862 = cljs.core.rest.call(null,s__66790__$1);
s__66790__$1 = G__66862;
continue;
}
} else {
return null;
}
break;
}
});})(s__66788__$1,ee,xs__7294__auto__,temp__6738__auto__,vec__66784,qe,qa,qv,vec__66781,e,a,v,eav))
,null,null));
});})(s__66788__$1,ee,xs__7294__auto__,temp__6738__auto__,vec__66784,qe,qa,qv,vec__66781,e,a,v,eav))
;
var fs__61758__auto__ = cljs.core.seq.call(null,iterys__61757__auto__.call(null,(cljs.core.truth_(qa)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.call(null,vars,a)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null))));
if(fs__61758__auto__){
return cljs.core.concat.call(null,fs__61758__auto__,posh$lib$q_analyze$pattern_from_eav__old_$_iter__66787.call(null,cljs.core.rest.call(null,s__66788__$1)));
} else {
var G__66863 = cljs.core.rest.call(null,s__66788__$1);
s__66788__$1 = G__66863;
continue;
}
} else {
return null;
}
break;
}
});})(vec__66784,qe,qa,qv,vec__66781,e,a,v,eav))
,null,null));
});})(vec__66784,qe,qa,qv,vec__66781,e,a,v,eav))
;
return iter__61761__auto__.call(null,(cljs.core.truth_(qe)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.call(null,vars,e)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e], null)));
});
posh.lib.q_analyze.get_ = (function posh$lib$q_analyze$get_(m,k){

var or__60899__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(or__60899__auto__)){
return or__60899__auto__;
} else {
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
}
});
posh.lib.q_analyze.pattern_from_eav = (function posh$lib$q_analyze$pattern_from_eav(vars,eav){
var ocr_66973 = cljs.core.vec.call(null,eav);
var ocr_66974 = cljs.core.vec.call(null,cljs.core.map.call(null,posh.lib.q_analyze.qvar_QMARK_,eav));
try{if((cljs.core.vector_QMARK_.call(null,ocr_66973)) && ((cljs.core.count.call(null,ocr_66973) === 3))){
try{var ocr_66973_0__67002 = cljs.core.nth.call(null,ocr_66973,(0));
if(cljs.core._EQ_.call(null,ocr_66973_0__67002,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_66973_1__67003 = cljs.core.nth.call(null,ocr_66973,(1));
if(cljs.core._EQ_.call(null,ocr_66973_1__67003,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_66973_2__67004 = cljs.core.nth.call(null,ocr_66973,(2));
if(cljs.core._EQ_.call(null,ocr_66973_2__67004,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e67078){if((e67078 instanceof Error)){
var e__37574__auto__ = e67078;
if((e__37574__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,ocr_66974)) && ((cljs.core.count.call(null,ocr_66974) === 3))){
try{var ocr_66974_2__67007 = cljs.core.nth.call(null,ocr_66974,(2));
if((ocr_66974_2__67007 === false)){
var v = cljs.core.nth.call(null,ocr_66973,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e67080){if((e67080 instanceof Error)){
var e__37574__auto____$1 = e67080;
if((e__37574__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_66974_2__67007 = cljs.core.nth.call(null,ocr_66974,(2));
if((ocr_66974_2__67007 === true)){
var v = cljs.core.nth.call(null,ocr_66973,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_.call(null,vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e67081){if((e67081 instanceof Error)){
var e__37574__auto____$2 = e67081;
if((e__37574__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37574__auto____$2;
}
} else {
throw e67081;

}
}} else {
throw e__37574__auto____$1;
}
} else {
throw e67080;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e67079){if((e67079 instanceof Error)){
var e__37574__auto____$1 = e67079;
if((e__37574__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37574__auto____$1;
}
} else {
throw e67079;

}
}} else {
throw e__37574__auto__;
}
} else {
throw e67078;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e67073){if((e67073 instanceof Error)){
var e__37574__auto__ = e67073;
if((e__37574__auto__ === cljs.core.match.backtrack)){
try{var ocr_66973_2__67004 = cljs.core.nth.call(null,ocr_66973,(2));
if(cljs.core._EQ_.call(null,ocr_66973_2__67004,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{if((cljs.core.vector_QMARK_.call(null,ocr_66974)) && ((cljs.core.count.call(null,ocr_66974) === 3))){
try{var ocr_66974_1__67009 = cljs.core.nth.call(null,ocr_66974,(1));
if((ocr_66974_1__67009 === false)){
var a = cljs.core.nth.call(null,ocr_66973,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e67076){if((e67076 instanceof Error)){
var e__37574__auto____$1 = e67076;
if((e__37574__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_66974_1__67009 = cljs.core.nth.call(null,ocr_66974,(1));
if((ocr_66974_1__67009 === true)){
var a = cljs.core.nth.call(null,ocr_66973,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_.call(null,vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e67077){if((e67077 instanceof Error)){
var e__37574__auto____$2 = e67077;
if((e__37574__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37574__auto____$2;
}
} else {
throw e67077;

}
}} else {
throw e__37574__auto____$1;
}
} else {
throw e67076;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e67075){if((e67075 instanceof Error)){
var e__37574__auto____$1 = e67075;
if((e__37574__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37574__auto____$1;
}
} else {
throw e67075;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e67074){if((e67074 instanceof Error)){
var e__37574__auto____$1 = e67074;
if((e__37574__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37574__auto____$1;
}
} else {
throw e67074;

}
}} else {
throw e__37574__auto__;
}
} else {
throw e67073;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e67015){if((e67015 instanceof Error)){
var e__37574__auto__ = e67015;
if((e__37574__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,ocr_66974)) && ((cljs.core.count.call(null,ocr_66974) === 3))){
try{var ocr_66974_0__67011 = cljs.core.nth.call(null,ocr_66974,(0));
if((ocr_66974_0__67011 === false)){
try{var ocr_66973_1__67003 = cljs.core.nth.call(null,ocr_66973,(1));
if(cljs.core._EQ_.call(null,ocr_66973_1__67003,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_66973_2__67004 = cljs.core.nth.call(null,ocr_66973,(2));
if(cljs.core._EQ_.call(null,ocr_66973_2__67004,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_66973,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e67072){if((e67072 instanceof Error)){
var e__37574__auto____$1 = e67072;
if((e__37574__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37574__auto____$1;
}
} else {
throw e67072;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e67071){if((e67071 instanceof Error)){
var e__37574__auto____$1 = e67071;
if((e__37574__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37574__auto____$1;
}
} else {
throw e67071;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e67017){if((e67017 instanceof Error)){
var e__37574__auto____$1 = e67017;
if((e__37574__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_66974_0__67011 = cljs.core.nth.call(null,ocr_66974,(0));
if((ocr_66974_0__67011 === true)){
try{var ocr_66973_2__67004 = cljs.core.nth.call(null,ocr_66973,(2));
if(cljs.core._EQ_.call(null,ocr_66973_2__67004,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_66973_1__67003 = cljs.core.nth.call(null,ocr_66973,(1));
if(cljs.core._EQ_.call(null,ocr_66973_1__67003,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_66973,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_.call(null,vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e67068){if((e67068 instanceof Error)){
var e__37574__auto____$2 = e67068;
if((e__37574__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_66974_1__67012 = cljs.core.nth.call(null,ocr_66974,(1));
if((ocr_66974_1__67012 === true)){
var a = cljs.core.nth.call(null,ocr_66973,(1));
var e = cljs.core.nth.call(null,ocr_66973,(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_.call(null,vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_.call(null,vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e67069){if((e67069 instanceof Error)){
var e__37574__auto____$3 = e67069;
if((e__37574__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_66974_1__67012 = cljs.core.nth.call(null,ocr_66974,(1));
if((ocr_66974_1__67012 === false)){
var a = cljs.core.nth.call(null,ocr_66973,(1));
var e = cljs.core.nth.call(null,ocr_66973,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_.call(null,vars,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e67070){if((e67070 instanceof Error)){
var e__37574__auto____$4 = e67070;
if((e__37574__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37574__auto____$4;
}
} else {
throw e67070;

}
}} else {
throw e__37574__auto____$3;
}
} else {
throw e67069;

}
}} else {
throw e__37574__auto____$2;
}
} else {
throw e67068;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e67067){if((e67067 instanceof Error)){
var e__37574__auto____$2 = e67067;
if((e__37574__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37574__auto____$2;
}
} else {
throw e67067;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e67018){if((e67018 instanceof Error)){
var e__37574__auto____$2 = e67018;
if((e__37574__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_66974_0__67011 = cljs.core.nth.call(null,ocr_66974,(0));
if((ocr_66974_0__67011 === false)){
try{var ocr_66974_1__67012 = cljs.core.nth.call(null,ocr_66974,(1));
if((ocr_66974_1__67012 === true)){
try{var ocr_66973_2__67004 = cljs.core.nth.call(null,ocr_66973,(2));
if(cljs.core._EQ_.call(null,ocr_66973_2__67004,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_66973,(0));
var a = cljs.core.nth.call(null,ocr_66973,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,posh.lib.q_analyze.get_.call(null,vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e67066){if((e67066 instanceof Error)){
var e__37574__auto____$3 = e67066;
if((e__37574__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37574__auto____$3;
}
} else {
throw e67066;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e67063){if((e67063 instanceof Error)){
var e__37574__auto____$3 = e67063;
if((e__37574__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_66974_1__67012 = cljs.core.nth.call(null,ocr_66974,(1));
if((ocr_66974_1__67012 === false)){
try{var ocr_66973_2__67004 = cljs.core.nth.call(null,ocr_66973,(2));
if(cljs.core._EQ_.call(null,ocr_66973_2__67004,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_66973,(0));
var a = cljs.core.nth.call(null,ocr_66973,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e67065){if((e67065 instanceof Error)){
var e__37574__auto____$4 = e67065;
if((e__37574__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37574__auto____$4;
}
} else {
throw e67065;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e67064){if((e67064 instanceof Error)){
var e__37574__auto____$4 = e67064;
if((e__37574__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37574__auto____$4;
}
} else {
throw e67064;

}
}} else {
throw e__37574__auto____$3;
}
} else {
throw e67063;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e67019){if((e67019 instanceof Error)){
var e__37574__auto____$3 = e67019;
if((e__37574__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_66974_2__67013 = cljs.core.nth.call(null,ocr_66974,(2));
if((ocr_66974_2__67013 === true)){
try{var ocr_66974_0__67011 = cljs.core.nth.call(null,ocr_66974,(0));
if((ocr_66974_0__67011 === true)){
try{var ocr_66973_1__67003 = cljs.core.nth.call(null,ocr_66973,(1));
if(cljs.core._EQ_.call(null,ocr_66973_1__67003,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_66973,(0));
var v = cljs.core.nth.call(null,ocr_66973,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_.call(null,vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_.call(null,vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e67062){if((e67062 instanceof Error)){
var e__37574__auto____$4 = e67062;
if((e__37574__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37574__auto____$4;
}
} else {
throw e67062;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e67061){if((e67061 instanceof Error)){
var e__37574__auto____$4 = e67061;
if((e__37574__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37574__auto____$4;
}
} else {
throw e67061;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e67020){if((e67020 instanceof Error)){
var e__37574__auto____$4 = e67020;
if((e__37574__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_66974_2__67013 = cljs.core.nth.call(null,ocr_66974,(2));
if((ocr_66974_2__67013 === false)){
try{var ocr_66974_0__67011 = cljs.core.nth.call(null,ocr_66974,(0));
if((ocr_66974_0__67011 === true)){
try{var ocr_66973_1__67003 = cljs.core.nth.call(null,ocr_66973,(1));
if(cljs.core._EQ_.call(null,ocr_66973_1__67003,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_66973,(0));
var v = cljs.core.nth.call(null,ocr_66973,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_.call(null,vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e67060){if((e67060 instanceof Error)){
var e__37574__auto____$5 = e67060;
if((e__37574__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37574__auto____$5;
}
} else {
throw e67060;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e67059){if((e67059 instanceof Error)){
var e__37574__auto____$5 = e67059;
if((e__37574__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37574__auto____$5;
}
} else {
throw e67059;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e67021){if((e67021 instanceof Error)){
var e__37574__auto____$5 = e67021;
if((e__37574__auto____$5 === cljs.core.match.backtrack)){
try{var ocr_66974_2__67013 = cljs.core.nth.call(null,ocr_66974,(2));
if((ocr_66974_2__67013 === true)){
try{var ocr_66974_0__67011 = cljs.core.nth.call(null,ocr_66974,(0));
if((ocr_66974_0__67011 === false)){
try{var ocr_66973_1__67003 = cljs.core.nth.call(null,ocr_66973,(1));
if(cljs.core._EQ_.call(null,ocr_66973_1__67003,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_66973,(0));
var v = cljs.core.nth.call(null,ocr_66973,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_.call(null,vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e67058){if((e67058 instanceof Error)){
var e__37574__auto____$6 = e67058;
if((e__37574__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37574__auto____$6;
}
} else {
throw e67058;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e67057){if((e67057 instanceof Error)){
var e__37574__auto____$6 = e67057;
if((e__37574__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37574__auto____$6;
}
} else {
throw e67057;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e67022){if((e67022 instanceof Error)){
var e__37574__auto____$6 = e67022;
if((e__37574__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_66974_2__67013 = cljs.core.nth.call(null,ocr_66974,(2));
if((ocr_66974_2__67013 === false)){
try{var ocr_66974_0__67011 = cljs.core.nth.call(null,ocr_66974,(0));
if((ocr_66974_0__67011 === false)){
try{var ocr_66973_1__67003 = cljs.core.nth.call(null,ocr_66973,(1));
if(cljs.core._EQ_.call(null,ocr_66973_1__67003,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_66973,(0));
var v = cljs.core.nth.call(null,ocr_66973,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e67056){if((e67056 instanceof Error)){
var e__37574__auto____$7 = e67056;
if((e__37574__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37574__auto____$7;
}
} else {
throw e67056;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e67055){if((e67055 instanceof Error)){
var e__37574__auto____$7 = e67055;
if((e__37574__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37574__auto____$7;
}
} else {
throw e67055;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e67023){if((e67023 instanceof Error)){
var e__37574__auto____$7 = e67023;
if((e__37574__auto____$7 === cljs.core.match.backtrack)){
try{var ocr_66974_2__67013 = cljs.core.nth.call(null,ocr_66974,(2));
if((ocr_66974_2__67013 === true)){
try{var ocr_66974_1__67012 = cljs.core.nth.call(null,ocr_66974,(1));
if((ocr_66974_1__67012 === true)){
try{var ocr_66973_0__67002 = cljs.core.nth.call(null,ocr_66973,(0));
if(cljs.core._EQ_.call(null,ocr_66973_0__67002,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.call(null,ocr_66973,(1));
var v = cljs.core.nth.call(null,ocr_66973,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_.call(null,vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_.call(null,vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e67054){if((e67054 instanceof Error)){
var e__37574__auto____$8 = e67054;
if((e__37574__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37574__auto____$8;
}
} else {
throw e67054;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e67053){if((e67053 instanceof Error)){
var e__37574__auto____$8 = e67053;
if((e__37574__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37574__auto____$8;
}
} else {
throw e67053;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e67024){if((e67024 instanceof Error)){
var e__37574__auto____$8 = e67024;
if((e__37574__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_66974_2__67013 = cljs.core.nth.call(null,ocr_66974,(2));
if((ocr_66974_2__67013 === false)){
try{var ocr_66974_1__67012 = cljs.core.nth.call(null,ocr_66974,(1));
if((ocr_66974_1__67012 === true)){
try{var ocr_66973_0__67002 = cljs.core.nth.call(null,ocr_66973,(0));
if(cljs.core._EQ_.call(null,ocr_66973_0__67002,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.call(null,ocr_66973,(1));
var v = cljs.core.nth.call(null,ocr_66973,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_.call(null,vars,a),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e67052){if((e67052 instanceof Error)){
var e__37574__auto____$9 = e67052;
if((e__37574__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37574__auto____$9;
}
} else {
throw e67052;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e67051){if((e67051 instanceof Error)){
var e__37574__auto____$9 = e67051;
if((e__37574__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37574__auto____$9;
}
} else {
throw e67051;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e67025){if((e67025 instanceof Error)){
var e__37574__auto____$9 = e67025;
if((e__37574__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_66974_2__67013 = cljs.core.nth.call(null,ocr_66974,(2));
if((ocr_66974_2__67013 === true)){
try{var ocr_66974_1__67012 = cljs.core.nth.call(null,ocr_66974,(1));
if((ocr_66974_1__67012 === false)){
try{var ocr_66973_0__67002 = cljs.core.nth.call(null,ocr_66973,(0));
if(cljs.core._EQ_.call(null,ocr_66973_0__67002,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.call(null,ocr_66973,(1));
var v = cljs.core.nth.call(null,ocr_66973,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,posh.lib.q_analyze.get_.call(null,vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e67050){if((e67050 instanceof Error)){
var e__37574__auto____$10 = e67050;
if((e__37574__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37574__auto____$10;
}
} else {
throw e67050;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e67049){if((e67049 instanceof Error)){
var e__37574__auto____$10 = e67049;
if((e__37574__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37574__auto____$10;
}
} else {
throw e67049;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e67026){if((e67026 instanceof Error)){
var e__37574__auto____$10 = e67026;
if((e__37574__auto____$10 === cljs.core.match.backtrack)){
try{var ocr_66974_2__67013 = cljs.core.nth.call(null,ocr_66974,(2));
if((ocr_66974_2__67013 === false)){
try{var ocr_66974_1__67012 = cljs.core.nth.call(null,ocr_66974,(1));
if((ocr_66974_1__67012 === false)){
try{var ocr_66973_0__67002 = cljs.core.nth.call(null,ocr_66973,(0));
if(cljs.core._EQ_.call(null,ocr_66973_0__67002,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.call(null,ocr_66973,(1));
var v = cljs.core.nth.call(null,ocr_66973,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e67048){if((e67048 instanceof Error)){
var e__37574__auto____$11 = e67048;
if((e__37574__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37574__auto____$11;
}
} else {
throw e67048;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e67047){if((e67047 instanceof Error)){
var e__37574__auto____$11 = e67047;
if((e__37574__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37574__auto____$11;
}
} else {
throw e67047;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e67027){if((e67027 instanceof Error)){
var e__37574__auto____$11 = e67027;
if((e__37574__auto____$11 === cljs.core.match.backtrack)){
try{var ocr_66974_2__67013 = cljs.core.nth.call(null,ocr_66974,(2));
if((ocr_66974_2__67013 === true)){
try{var ocr_66974_0__67011 = cljs.core.nth.call(null,ocr_66974,(0));
if((ocr_66974_0__67011 === true)){
try{var ocr_66974_1__67012 = cljs.core.nth.call(null,ocr_66974,(1));
if((ocr_66974_1__67012 === true)){
var e = cljs.core.nth.call(null,ocr_66973,(0));
var a = cljs.core.nth.call(null,ocr_66973,(1));
var v = cljs.core.nth.call(null,ocr_66973,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_.call(null,vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_.call(null,vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_.call(null,vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e67046){if((e67046 instanceof Error)){
var e__37574__auto____$12 = e67046;
if((e__37574__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37574__auto____$12;
}
} else {
throw e67046;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e67041){if((e67041 instanceof Error)){
var e__37574__auto____$12 = e67041;
if((e__37574__auto____$12 === cljs.core.match.backtrack)){
try{var ocr_66974_0__67011 = cljs.core.nth.call(null,ocr_66974,(0));
if((ocr_66974_0__67011 === false)){
try{var ocr_66974_1__67012 = cljs.core.nth.call(null,ocr_66974,(1));
if((ocr_66974_1__67012 === true)){
var e = cljs.core.nth.call(null,ocr_66973,(0));
var a = cljs.core.nth.call(null,ocr_66973,(1));
var v = cljs.core.nth.call(null,ocr_66973,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_.call(null,vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,posh.lib.q_analyze.get_.call(null,vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e67045){if((e67045 instanceof Error)){
var e__37574__auto____$13 = e67045;
if((e__37574__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37574__auto____$13;
}
} else {
throw e67045;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e67042){if((e67042 instanceof Error)){
var e__37574__auto____$13 = e67042;
if((e__37574__auto____$13 === cljs.core.match.backtrack)){
try{var ocr_66974_0__67011 = cljs.core.nth.call(null,ocr_66974,(0));
if((ocr_66974_0__67011 === true)){
try{var ocr_66974_1__67012 = cljs.core.nth.call(null,ocr_66974,(1));
if((ocr_66974_1__67012 === false)){
var e = cljs.core.nth.call(null,ocr_66973,(0));
var a = cljs.core.nth.call(null,ocr_66973,(1));
var v = cljs.core.nth.call(null,ocr_66973,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,posh.lib.q_analyze.get_.call(null,vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_.call(null,vars,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e67044){if((e67044 instanceof Error)){
var e__37574__auto____$14 = e67044;
if((e__37574__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37574__auto____$14;
}
} else {
throw e67044;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e67043){if((e67043 instanceof Error)){
var e__37574__auto____$14 = e67043;
if((e__37574__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37574__auto____$14;
}
} else {
throw e67043;

}
}} else {
throw e__37574__auto____$13;
}
} else {
throw e67042;

}
}} else {
throw e__37574__auto____$12;
}
} else {
throw e67041;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e67028){if((e67028 instanceof Error)){
var e__37574__auto____$12 = e67028;
if((e__37574__auto____$12 === cljs.core.match.backtrack)){
try{var ocr_66974_2__67013 = cljs.core.nth.call(null,ocr_66974,(2));
if((ocr_66974_2__67013 === false)){
try{var ocr_66974_0__67011 = cljs.core.nth.call(null,ocr_66974,(0));
if((ocr_66974_0__67011 === true)){
try{var ocr_66974_1__67012 = cljs.core.nth.call(null,ocr_66974,(1));
if((ocr_66974_1__67012 === true)){
var e = cljs.core.nth.call(null,ocr_66973,(0));
var a = cljs.core.nth.call(null,ocr_66973,(1));
var v = cljs.core.nth.call(null,ocr_66973,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_.call(null,vars,a),v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_.call(null,vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e67040){if((e67040 instanceof Error)){
var e__37574__auto____$13 = e67040;
if((e__37574__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37574__auto____$13;
}
} else {
throw e67040;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e67039){if((e67039 instanceof Error)){
var e__37574__auto____$13 = e67039;
if((e__37574__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37574__auto____$13;
}
} else {
throw e67039;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e67029){if((e67029 instanceof Error)){
var e__37574__auto____$13 = e67029;
if((e__37574__auto____$13 === cljs.core.match.backtrack)){
try{var ocr_66974_2__67013 = cljs.core.nth.call(null,ocr_66974,(2));
if((ocr_66974_2__67013 === true)){
try{var ocr_66974_0__67011 = cljs.core.nth.call(null,ocr_66974,(0));
if((ocr_66974_0__67011 === false)){
try{var ocr_66974_1__67012 = cljs.core.nth.call(null,ocr_66974,(1));
if((ocr_66974_1__67012 === false)){
var e = cljs.core.nth.call(null,ocr_66973,(0));
var a = cljs.core.nth.call(null,ocr_66973,(1));
var v = cljs.core.nth.call(null,ocr_66973,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e67038){if((e67038 instanceof Error)){
var e__37574__auto____$14 = e67038;
if((e__37574__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37574__auto____$14;
}
} else {
throw e67038;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e67037){if((e67037 instanceof Error)){
var e__37574__auto____$14 = e67037;
if((e__37574__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37574__auto____$14;
}
} else {
throw e67037;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e67030){if((e67030 instanceof Error)){
var e__37574__auto____$14 = e67030;
if((e__37574__auto____$14 === cljs.core.match.backtrack)){
try{var ocr_66974_2__67013 = cljs.core.nth.call(null,ocr_66974,(2));
if((ocr_66974_2__67013 === false)){
try{var ocr_66974_0__67011 = cljs.core.nth.call(null,ocr_66974,(0));
if((ocr_66974_0__67011 === true)){
try{var ocr_66974_1__67012 = cljs.core.nth.call(null,ocr_66974,(1));
if((ocr_66974_1__67012 === false)){
var e = cljs.core.nth.call(null,ocr_66973,(0));
var a = cljs.core.nth.call(null,ocr_66973,(1));
var v = cljs.core.nth.call(null,ocr_66973,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e67036){if((e67036 instanceof Error)){
var e__37574__auto____$15 = e67036;
if((e__37574__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37574__auto____$15;
}
} else {
throw e67036;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e67032){if((e67032 instanceof Error)){
var e__37574__auto____$15 = e67032;
if((e__37574__auto____$15 === cljs.core.match.backtrack)){
try{var ocr_66974_0__67011 = cljs.core.nth.call(null,ocr_66974,(0));
if((ocr_66974_0__67011 === false)){
try{var ocr_66974_1__67012 = cljs.core.nth.call(null,ocr_66974,(1));
if((ocr_66974_1__67012 === true)){
var e = cljs.core.nth.call(null,ocr_66973,(0));
var a = cljs.core.nth.call(null,ocr_66973,(1));
var v = cljs.core.nth.call(null,ocr_66973,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e67034){if((e67034 instanceof Error)){
var e__37574__auto____$16 = e67034;
if((e__37574__auto____$16 === cljs.core.match.backtrack)){
try{var ocr_66974_1__67012 = cljs.core.nth.call(null,ocr_66974,(1));
if((ocr_66974_1__67012 === false)){
var e = cljs.core.nth.call(null,ocr_66973,(0));
var a = cljs.core.nth.call(null,ocr_66973,(1));
var v = cljs.core.nth.call(null,ocr_66973,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e67035){if((e67035 instanceof Error)){
var e__37574__auto____$17 = e67035;
if((e__37574__auto____$17 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37574__auto____$17;
}
} else {
throw e67035;

}
}} else {
throw e__37574__auto____$16;
}
} else {
throw e67034;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e67033){if((e67033 instanceof Error)){
var e__37574__auto____$16 = e67033;
if((e__37574__auto____$16 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37574__auto____$16;
}
} else {
throw e67033;

}
}} else {
throw e__37574__auto____$15;
}
} else {
throw e67032;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e67031){if((e67031 instanceof Error)){
var e__37574__auto____$15 = e67031;
if((e__37574__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37574__auto____$15;
}
} else {
throw e67031;

}
}} else {
throw e__37574__auto____$14;
}
} else {
throw e67030;

}
}} else {
throw e__37574__auto____$13;
}
} else {
throw e67029;

}
}} else {
throw e__37574__auto____$12;
}
} else {
throw e67028;

}
}} else {
throw e__37574__auto____$11;
}
} else {
throw e67027;

}
}} else {
throw e__37574__auto____$10;
}
} else {
throw e67026;

}
}} else {
throw e__37574__auto____$9;
}
} else {
throw e67025;

}
}} else {
throw e__37574__auto____$8;
}
} else {
throw e67024;

}
}} else {
throw e__37574__auto____$7;
}
} else {
throw e67023;

}
}} else {
throw e__37574__auto____$6;
}
} else {
throw e67022;

}
}} else {
throw e__37574__auto____$5;
}
} else {
throw e67021;

}
}} else {
throw e__37574__auto____$4;
}
} else {
throw e67020;

}
}} else {
throw e__37574__auto____$3;
}
} else {
throw e67019;

}
}} else {
throw e__37574__auto____$2;
}
} else {
throw e67018;

}
}} else {
throw e__37574__auto____$1;
}
} else {
throw e67017;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e67016){if((e67016 instanceof Error)){
var e__37574__auto____$1 = e67016;
if((e__37574__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37574__auto____$1;
}
} else {
throw e67016;

}
}} else {
throw e__37574__auto__;
}
} else {
throw e67015;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e67014){if((e67014 instanceof Error)){
var e__37574__auto__ = e67014;
if((e__37574__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw e__37574__auto__;
}
} else {
throw e67014;

}
}});
posh.lib.q_analyze.filter_pattern_from_eav = (function posh$lib$q_analyze$filter_pattern_from_eav(vars,eav){
var ocr_67176 = cljs.core.vec.call(null,eav);
var ocr_67177 = cljs.core.vec.call(null,cljs.core.map.call(null,posh.lib.q_analyze.qvar_QMARK_,eav));
try{if((cljs.core.vector_QMARK_.call(null,ocr_67176)) && ((cljs.core.count.call(null,ocr_67176) === 3))){
try{var ocr_67176_0__67202 = cljs.core.nth.call(null,ocr_67176,(0));
if(cljs.core._EQ_.call(null,ocr_67176_0__67202,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_67176_1__67203 = cljs.core.nth.call(null,ocr_67176,(1));
if(cljs.core._EQ_.call(null,ocr_67176_1__67203,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_67176_2__67204 = cljs.core.nth.call(null,ocr_67176,(2));
if(cljs.core._EQ_.call(null,ocr_67176_2__67204,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
return cljs.core.PersistentVector.EMPTY;
} else {
throw cljs.core.match.backtrack;

}
}catch (e67266){if((e67266 instanceof Error)){
var e__37574__auto__ = e67266;
if((e__37574__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,ocr_67177)) && ((cljs.core.count.call(null,ocr_67177) === 3))){
try{var ocr_67177_2__67207 = cljs.core.nth.call(null,ocr_67177,(2));
if((ocr_67177_2__67207 === false)){
var v = cljs.core.nth.call(null,ocr_67176,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e67268){if((e67268 instanceof Error)){
var e__37574__auto____$1 = e67268;
if((e__37574__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_67177_2__67207 = cljs.core.nth.call(null,ocr_67177,(2));
if((ocr_67177_2__67207 === true)){
var v = cljs.core.nth.call(null,ocr_67176,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),vars.call(null,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e67269){if((e67269 instanceof Error)){
var e__37574__auto____$2 = e67269;
if((e__37574__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37574__auto____$2;
}
} else {
throw e67269;

}
}} else {
throw e__37574__auto____$1;
}
} else {
throw e67268;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e67267){if((e67267 instanceof Error)){
var e__37574__auto____$1 = e67267;
if((e__37574__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37574__auto____$1;
}
} else {
throw e67267;

}
}} else {
throw e__37574__auto__;
}
} else {
throw e67266;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e67261){if((e67261 instanceof Error)){
var e__37574__auto__ = e67261;
if((e__37574__auto__ === cljs.core.match.backtrack)){
try{var ocr_67176_2__67204 = cljs.core.nth.call(null,ocr_67176,(2));
if(cljs.core._EQ_.call(null,ocr_67176_2__67204,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{if((cljs.core.vector_QMARK_.call(null,ocr_67177)) && ((cljs.core.count.call(null,ocr_67177) === 3))){
try{var ocr_67177_1__67209 = cljs.core.nth.call(null,ocr_67177,(1));
if((ocr_67177_1__67209 === false)){
var a = cljs.core.nth.call(null,ocr_67176,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e67264){if((e67264 instanceof Error)){
var e__37574__auto____$1 = e67264;
if((e__37574__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_67177_1__67209 = cljs.core.nth.call(null,ocr_67177,(1));
if((ocr_67177_1__67209 === true)){
var a = cljs.core.nth.call(null,ocr_67176,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),vars.call(null,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e67265){if((e67265 instanceof Error)){
var e__37574__auto____$2 = e67265;
if((e__37574__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37574__auto____$2;
}
} else {
throw e67265;

}
}} else {
throw e__37574__auto____$1;
}
} else {
throw e67264;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e67263){if((e67263 instanceof Error)){
var e__37574__auto____$1 = e67263;
if((e__37574__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37574__auto____$1;
}
} else {
throw e67263;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e67262){if((e67262 instanceof Error)){
var e__37574__auto____$1 = e67262;
if((e__37574__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37574__auto____$1;
}
} else {
throw e67262;

}
}} else {
throw e__37574__auto__;
}
} else {
throw e67261;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e67215){if((e67215 instanceof Error)){
var e__37574__auto__ = e67215;
if((e__37574__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,ocr_67177)) && ((cljs.core.count.call(null,ocr_67177) === 3))){
try{var ocr_67177_0__67211 = cljs.core.nth.call(null,ocr_67177,(0));
if((ocr_67177_0__67211 === false)){
try{var ocr_67176_1__67203 = cljs.core.nth.call(null,ocr_67176,(1));
if(cljs.core._EQ_.call(null,ocr_67176_1__67203,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_67176_2__67204 = cljs.core.nth.call(null,ocr_67176,(2));
if(cljs.core._EQ_.call(null,ocr_67176_2__67204,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_67176,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e67260){if((e67260 instanceof Error)){
var e__37574__auto____$1 = e67260;
if((e__37574__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37574__auto____$1;
}
} else {
throw e67260;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e67259){if((e67259 instanceof Error)){
var e__37574__auto____$1 = e67259;
if((e__37574__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37574__auto____$1;
}
} else {
throw e67259;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e67217){if((e67217 instanceof Error)){
var e__37574__auto____$1 = e67217;
if((e__37574__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_67177_0__67211 = cljs.core.nth.call(null,ocr_67177,(0));
if((ocr_67177_0__67211 === true)){
try{var ocr_67176_2__67204 = cljs.core.nth.call(null,ocr_67176,(2));
if(cljs.core._EQ_.call(null,ocr_67176_2__67204,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_67176_1__67203 = cljs.core.nth.call(null,ocr_67176,(1));
if(cljs.core._EQ_.call(null,ocr_67176_1__67203,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_67176,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars.call(null,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e67256){if((e67256 instanceof Error)){
var e__37574__auto____$2 = e67256;
if((e__37574__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_67177_1__67212 = cljs.core.nth.call(null,ocr_67177,(1));
if((ocr_67177_1__67212 === true)){
var a = cljs.core.nth.call(null,ocr_67176,(1));
var e = cljs.core.nth.call(null,ocr_67176,(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars.call(null,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),vars.call(null,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e67257){if((e67257 instanceof Error)){
var e__37574__auto____$3 = e67257;
if((e__37574__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_67177_1__67212 = cljs.core.nth.call(null,ocr_67177,(1));
if((ocr_67177_1__67212 === false)){
var a = cljs.core.nth.call(null,ocr_67176,(1));
var e = cljs.core.nth.call(null,ocr_67176,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars.call(null,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e67258){if((e67258 instanceof Error)){
var e__37574__auto____$4 = e67258;
if((e__37574__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37574__auto____$4;
}
} else {
throw e67258;

}
}} else {
throw e__37574__auto____$3;
}
} else {
throw e67257;

}
}} else {
throw e__37574__auto____$2;
}
} else {
throw e67256;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e67255){if((e67255 instanceof Error)){
var e__37574__auto____$2 = e67255;
if((e__37574__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37574__auto____$2;
}
} else {
throw e67255;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e67218){if((e67218 instanceof Error)){
var e__37574__auto____$2 = e67218;
if((e__37574__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_67177_0__67211 = cljs.core.nth.call(null,ocr_67177,(0));
if((ocr_67177_0__67211 === false)){
try{var ocr_67177_1__67212 = cljs.core.nth.call(null,ocr_67177,(1));
if((ocr_67177_1__67212 === true)){
try{var ocr_67176_2__67204 = cljs.core.nth.call(null,ocr_67176,(2));
if(cljs.core._EQ_.call(null,ocr_67176_2__67204,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_67176,(0));
var a = cljs.core.nth.call(null,ocr_67176,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,vars.call(null,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e67254){if((e67254 instanceof Error)){
var e__37574__auto____$3 = e67254;
if((e__37574__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37574__auto____$3;
}
} else {
throw e67254;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e67253){if((e67253 instanceof Error)){
var e__37574__auto____$3 = e67253;
if((e__37574__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37574__auto____$3;
}
} else {
throw e67253;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e67219){if((e67219 instanceof Error)){
var e__37574__auto____$3 = e67219;
if((e__37574__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_67177_2__67213 = cljs.core.nth.call(null,ocr_67177,(2));
if((ocr_67177_2__67213 === true)){
try{var ocr_67177_0__67211 = cljs.core.nth.call(null,ocr_67177,(0));
if((ocr_67177_0__67211 === true)){
try{var ocr_67176_1__67203 = cljs.core.nth.call(null,ocr_67176,(1));
if(cljs.core._EQ_.call(null,ocr_67176_1__67203,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_67176,(0));
var v = cljs.core.nth.call(null,ocr_67176,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars.call(null,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),vars.call(null,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e67252){if((e67252 instanceof Error)){
var e__37574__auto____$4 = e67252;
if((e__37574__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37574__auto____$4;
}
} else {
throw e67252;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e67251){if((e67251 instanceof Error)){
var e__37574__auto____$4 = e67251;
if((e__37574__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37574__auto____$4;
}
} else {
throw e67251;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e67220){if((e67220 instanceof Error)){
var e__37574__auto____$4 = e67220;
if((e__37574__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_67177_2__67213 = cljs.core.nth.call(null,ocr_67177,(2));
if((ocr_67177_2__67213 === false)){
try{var ocr_67177_0__67211 = cljs.core.nth.call(null,ocr_67177,(0));
if((ocr_67177_0__67211 === true)){
try{var ocr_67176_1__67203 = cljs.core.nth.call(null,ocr_67176,(1));
if(cljs.core._EQ_.call(null,ocr_67176_1__67203,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_67176,(0));
var v = cljs.core.nth.call(null,ocr_67176,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars.call(null,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e67250){if((e67250 instanceof Error)){
var e__37574__auto____$5 = e67250;
if((e__37574__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37574__auto____$5;
}
} else {
throw e67250;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e67249){if((e67249 instanceof Error)){
var e__37574__auto____$5 = e67249;
if((e__37574__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37574__auto____$5;
}
} else {
throw e67249;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e67221){if((e67221 instanceof Error)){
var e__37574__auto____$5 = e67221;
if((e__37574__auto____$5 === cljs.core.match.backtrack)){
try{var ocr_67177_2__67213 = cljs.core.nth.call(null,ocr_67177,(2));
if((ocr_67177_2__67213 === true)){
try{var ocr_67177_0__67211 = cljs.core.nth.call(null,ocr_67177,(0));
if((ocr_67177_0__67211 === false)){
try{var ocr_67176_1__67203 = cljs.core.nth.call(null,ocr_67176,(1));
if(cljs.core._EQ_.call(null,ocr_67176_1__67203,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_67176,(0));
var v = cljs.core.nth.call(null,ocr_67176,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),vars.call(null,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e67248){if((e67248 instanceof Error)){
var e__37574__auto____$6 = e67248;
if((e__37574__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37574__auto____$6;
}
} else {
throw e67248;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e67245){if((e67245 instanceof Error)){
var e__37574__auto____$6 = e67245;
if((e__37574__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_67177_1__67212 = cljs.core.nth.call(null,ocr_67177,(1));
if((ocr_67177_1__67212 === true)){
try{var ocr_67176_0__67202 = cljs.core.nth.call(null,ocr_67176,(0));
if(cljs.core._EQ_.call(null,ocr_67176_0__67202,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.call(null,ocr_67176,(1));
var v = cljs.core.nth.call(null,ocr_67176,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),vars.call(null,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),vars.call(null,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e67247){if((e67247 instanceof Error)){
var e__37574__auto____$7 = e67247;
if((e__37574__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37574__auto____$7;
}
} else {
throw e67247;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e67246){if((e67246 instanceof Error)){
var e__37574__auto____$7 = e67246;
if((e__37574__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37574__auto____$7;
}
} else {
throw e67246;

}
}} else {
throw e__37574__auto____$6;
}
} else {
throw e67245;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e67222){if((e67222 instanceof Error)){
var e__37574__auto____$6 = e67222;
if((e__37574__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_67177_2__67213 = cljs.core.nth.call(null,ocr_67177,(2));
if((ocr_67177_2__67213 === false)){
try{var ocr_67177_1__67212 = cljs.core.nth.call(null,ocr_67177,(1));
if((ocr_67177_1__67212 === true)){
try{var ocr_67176_0__67202 = cljs.core.nth.call(null,ocr_67176,(0));
if(cljs.core._EQ_.call(null,ocr_67176_0__67202,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.call(null,ocr_67176,(1));
var v = cljs.core.nth.call(null,ocr_67176,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),vars.call(null,a),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e67244){if((e67244 instanceof Error)){
var e__37574__auto____$7 = e67244;
if((e__37574__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37574__auto____$7;
}
} else {
throw e67244;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e67243){if((e67243 instanceof Error)){
var e__37574__auto____$7 = e67243;
if((e__37574__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37574__auto____$7;
}
} else {
throw e67243;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e67223){if((e67223 instanceof Error)){
var e__37574__auto____$7 = e67223;
if((e__37574__auto____$7 === cljs.core.match.backtrack)){
try{var ocr_67177_2__67213 = cljs.core.nth.call(null,ocr_67177,(2));
if((ocr_67177_2__67213 === true)){
try{var ocr_67177_1__67212 = cljs.core.nth.call(null,ocr_67177,(1));
if((ocr_67177_1__67212 === false)){
try{var ocr_67176_0__67202 = cljs.core.nth.call(null,ocr_67176,(0));
if(cljs.core._EQ_.call(null,ocr_67176_0__67202,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.call(null,ocr_67176,(1));
var v = cljs.core.nth.call(null,ocr_67176,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,vars.call(null,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e67242){if((e67242 instanceof Error)){
var e__37574__auto____$8 = e67242;
if((e__37574__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37574__auto____$8;
}
} else {
throw e67242;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e67236){if((e67236 instanceof Error)){
var e__37574__auto____$8 = e67236;
if((e__37574__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_67177_1__67212 = cljs.core.nth.call(null,ocr_67177,(1));
if((ocr_67177_1__67212 === true)){
try{var ocr_67177_0__67211 = cljs.core.nth.call(null,ocr_67177,(0));
if((ocr_67177_0__67211 === true)){
var e = cljs.core.nth.call(null,ocr_67176,(0));
var a = cljs.core.nth.call(null,ocr_67176,(1));
var v = cljs.core.nth.call(null,ocr_67176,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),vars.call(null,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),vars.call(null,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars.call(null,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e67240){if((e67240 instanceof Error)){
var e__37574__auto____$9 = e67240;
if((e__37574__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_67177_0__67211 = cljs.core.nth.call(null,ocr_67177,(0));
if((ocr_67177_0__67211 === false)){
var e = cljs.core.nth.call(null,ocr_67176,(0));
var a = cljs.core.nth.call(null,ocr_67176,(1));
var v = cljs.core.nth.call(null,ocr_67176,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),vars.call(null,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,vars.call(null,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e67241){if((e67241 instanceof Error)){
var e__37574__auto____$10 = e67241;
if((e__37574__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37574__auto____$10;
}
} else {
throw e67241;

}
}} else {
throw e__37574__auto____$9;
}
} else {
throw e67240;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e67237){if((e67237 instanceof Error)){
var e__37574__auto____$9 = e67237;
if((e__37574__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_67177_1__67212 = cljs.core.nth.call(null,ocr_67177,(1));
if((ocr_67177_1__67212 === false)){
try{var ocr_67177_0__67211 = cljs.core.nth.call(null,ocr_67177,(0));
if((ocr_67177_0__67211 === true)){
var e = cljs.core.nth.call(null,ocr_67176,(0));
var a = cljs.core.nth.call(null,ocr_67176,(1));
var v = cljs.core.nth.call(null,ocr_67176,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,vars.call(null,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars.call(null,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e67239){if((e67239 instanceof Error)){
var e__37574__auto____$10 = e67239;
if((e__37574__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37574__auto____$10;
}
} else {
throw e67239;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e67238){if((e67238 instanceof Error)){
var e__37574__auto____$10 = e67238;
if((e__37574__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37574__auto____$10;
}
} else {
throw e67238;

}
}} else {
throw e__37574__auto____$9;
}
} else {
throw e67237;

}
}} else {
throw e__37574__auto____$8;
}
} else {
throw e67236;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e67224){if((e67224 instanceof Error)){
var e__37574__auto____$8 = e67224;
if((e__37574__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_67177_2__67213 = cljs.core.nth.call(null,ocr_67177,(2));
if((ocr_67177_2__67213 === false)){
try{var ocr_67177_0__67211 = cljs.core.nth.call(null,ocr_67177,(0));
if((ocr_67177_0__67211 === true)){
try{var ocr_67177_1__67212 = cljs.core.nth.call(null,ocr_67177,(1));
if((ocr_67177_1__67212 === true)){
var e = cljs.core.nth.call(null,ocr_67176,(0));
var a = cljs.core.nth.call(null,ocr_67176,(1));
var v = cljs.core.nth.call(null,ocr_67176,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),vars.call(null,a),v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars.call(null,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e67235){if((e67235 instanceof Error)){
var e__37574__auto____$9 = e67235;
if((e__37574__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37574__auto____$9;
}
} else {
throw e67235;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e67234){if((e67234 instanceof Error)){
var e__37574__auto____$9 = e67234;
if((e__37574__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37574__auto____$9;
}
} else {
throw e67234;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e67225){if((e67225 instanceof Error)){
var e__37574__auto____$9 = e67225;
if((e__37574__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_67177_2__67213 = cljs.core.nth.call(null,ocr_67177,(2));
if((ocr_67177_2__67213 === true)){
try{var ocr_67177_0__67211 = cljs.core.nth.call(null,ocr_67177,(0));
if((ocr_67177_0__67211 === false)){
try{var ocr_67177_1__67212 = cljs.core.nth.call(null,ocr_67177,(1));
if((ocr_67177_1__67212 === false)){
var e = cljs.core.nth.call(null,ocr_67176,(0));
var a = cljs.core.nth.call(null,ocr_67176,(1));
var v = cljs.core.nth.call(null,ocr_67176,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e67233){if((e67233 instanceof Error)){
var e__37574__auto____$10 = e67233;
if((e__37574__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37574__auto____$10;
}
} else {
throw e67233;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e67232){if((e67232 instanceof Error)){
var e__37574__auto____$10 = e67232;
if((e__37574__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37574__auto____$10;
}
} else {
throw e67232;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e67226){if((e67226 instanceof Error)){
var e__37574__auto____$10 = e67226;
if((e__37574__auto____$10 === cljs.core.match.backtrack)){
try{var ocr_67177_2__67213 = cljs.core.nth.call(null,ocr_67177,(2));
if((ocr_67177_2__67213 === false)){
try{var ocr_67177_0__67211 = cljs.core.nth.call(null,ocr_67177,(0));
if((ocr_67177_0__67211 === true)){
try{var ocr_67177_1__67212 = cljs.core.nth.call(null,ocr_67177,(1));
if((ocr_67177_1__67212 === false)){
var e = cljs.core.nth.call(null,ocr_67176,(0));
var a = cljs.core.nth.call(null,ocr_67176,(1));
var v = cljs.core.nth.call(null,ocr_67176,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e67231){if((e67231 instanceof Error)){
var e__37574__auto____$11 = e67231;
if((e__37574__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37574__auto____$11;
}
} else {
throw e67231;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e67228){if((e67228 instanceof Error)){
var e__37574__auto____$11 = e67228;
if((e__37574__auto____$11 === cljs.core.match.backtrack)){
try{var ocr_67177_0__67211 = cljs.core.nth.call(null,ocr_67177,(0));
if((ocr_67177_0__67211 === false)){
try{var ocr_67177_1__67212 = cljs.core.nth.call(null,ocr_67177,(1));
if((ocr_67177_1__67212 === true)){
var e = cljs.core.nth.call(null,ocr_67176,(0));
var a = cljs.core.nth.call(null,ocr_67176,(1));
var v = cljs.core.nth.call(null,ocr_67176,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e67230){if((e67230 instanceof Error)){
var e__37574__auto____$12 = e67230;
if((e__37574__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37574__auto____$12;
}
} else {
throw e67230;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e67229){if((e67229 instanceof Error)){
var e__37574__auto____$12 = e67229;
if((e__37574__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37574__auto____$12;
}
} else {
throw e67229;

}
}} else {
throw e__37574__auto____$11;
}
} else {
throw e67228;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e67227){if((e67227 instanceof Error)){
var e__37574__auto____$11 = e67227;
if((e__37574__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37574__auto____$11;
}
} else {
throw e67227;

}
}} else {
throw e__37574__auto____$10;
}
} else {
throw e67226;

}
}} else {
throw e__37574__auto____$9;
}
} else {
throw e67225;

}
}} else {
throw e__37574__auto____$8;
}
} else {
throw e67224;

}
}} else {
throw e__37574__auto____$7;
}
} else {
throw e67223;

}
}} else {
throw e__37574__auto____$6;
}
} else {
throw e67222;

}
}} else {
throw e__37574__auto____$5;
}
} else {
throw e67221;

}
}} else {
throw e__37574__auto____$4;
}
} else {
throw e67220;

}
}} else {
throw e__37574__auto____$3;
}
} else {
throw e67219;

}
}} else {
throw e__37574__auto____$2;
}
} else {
throw e67218;

}
}} else {
throw e__37574__auto____$1;
}
} else {
throw e67217;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e67216){if((e67216 instanceof Error)){
var e__37574__auto____$1 = e67216;
if((e__37574__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37574__auto____$1;
}
} else {
throw e67216;

}
}} else {
throw e__37574__auto__;
}
} else {
throw e67215;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e67214){if((e67214 instanceof Error)){
var e__37574__auto__ = e67214;
if((e__37574__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw e__37574__auto__;
}
} else {
throw e67214;

}
}});
posh.lib.q_analyze.patterns_from_eavs = (function posh$lib$q_analyze$patterns_from_eavs(dbvarmap,vars,patterns){
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,(function (p__67275){
var vec__67276 = p__67275;
var k = cljs.core.nth.call(null,vec__67276,(0),null);
var v = cljs.core.nth.call(null,vec__67276,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1(dbvarmap.call(null,k)),cljs.core.mapcat.call(null,((function (vec__67276,k,v){
return (function (p1__67270_SHARP_){
return posh.lib.q_analyze.pattern_from_eav.call(null,vars,cljs.core.rest.call(null,p1__67270_SHARP_));
});})(vec__67276,k,v))
,v)]);
}),cljs.core.group_by.call(null,cljs.core.first,patterns)));
});
posh.lib.q_analyze.filter_patterns_from_eavs = (function posh$lib$q_analyze$filter_patterns_from_eavs(dbvarmap,vars,patterns){
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,(function (p__67284){
var vec__67285 = p__67284;
var k = cljs.core.nth.call(null,vec__67285,(0),null);
var v = cljs.core.nth.call(null,vec__67285,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1(dbvarmap.call(null,k)),cljs.core.mapcat.call(null,((function (vec__67285,k,v){
return (function (p1__67279_SHARP_){
return posh.lib.q_analyze.filter_pattern_from_eav.call(null,vars,cljs.core.rest.call(null,p1__67279_SHARP_));
});})(vec__67285,k,v))
,v)]);
}),cljs.core.group_by.call(null,cljs.core.first,patterns)));
});
posh.lib.q_analyze.just_qvars = (function posh$lib$q_analyze$just_qvars(ins,args){
if(cljs.core.empty_QMARK_.call(null,ins)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.call(null,((((cljs.core.first.call(null,ins) instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,ins))].join('')),"$")))?null:cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first.call(null,ins),cljs.core.first.call(null,args)])),posh.lib.q_analyze.just_qvars.call(null,cljs.core.rest.call(null,ins),cljs.core.rest.call(null,args)));
}
});
posh.lib.q_analyze.get_input_sets = (function posh$lib$q_analyze$get_input_sets(ins,args){
var varmap = posh.lib.q_analyze.just_qvars.call(null,ins,args);
if(!(cljs.core.empty_QMARK_.call(null,varmap))){
var qvars = cljs.core.vec.call(null,posh.lib.q_analyze.get_all_vars.call(null,cljs.core.keys.call(null,varmap)));
var varvals = cljs.core.apply.call(null,cljs.core.partial.call(null,datascript.core.q,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),qvars,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.keys.call(null,varmap)], null)),cljs.core.vals.call(null,varmap));
var varsets = cljs.core.reduce.call(null,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.conj),cljs.core.zipmap.call(null,qvars,cljs.core.repeat.call(null,cljs.core.PersistentHashSet.EMPTY)),cljs.core.map.call(null,((function (qvars,varvals,varmap){
return (function (p1__67288_SHARP_){
return cljs.core.zipmap.call(null,qvars,p1__67288_SHARP_);
});})(qvars,varvals,varmap))
,varvals));
return varsets;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
posh.lib.q_analyze.pull_pattern_QMARK_ = (function posh$lib$q_analyze$pull_pattern_QMARK_(x){
return (cljs.core.coll_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,x),new cljs.core.Symbol(null,"pull","pull",779986722,null))) && (cljs.core._EQ_.call(null,(3),cljs.core.count.call(null,x)));
});
posh.lib.q_analyze.replace_find_pulls = (function posh$lib$q_analyze$replace_find_pulls(qfind){

return clojure.walk.postwalk.call(null,(function (x){
if(cljs.core.truth_(posh.lib.q_analyze.pull_pattern_QMARK_.call(null,x))){
return cljs.core.second.call(null,x);
} else {
return x;
}
}),qfind);
});
posh.lib.q_analyze.get_pull_var_pairs = (function posh$lib$q_analyze$get_pull_var_pairs(qfind){

if(cljs.core.coll_QMARK_.call(null,qfind)){
if(cljs.core.empty_QMARK_.call(null,qfind)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(cljs.core.truth_(posh.lib.q_analyze.pull_pattern_QMARK_.call(null,qfind))){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.second.call(null,qfind),cljs.core.nth.call(null,qfind,(2))]);
} else {
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,posh.lib.q_analyze.get_pull_var_pairs,qfind));

}
}
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
posh.lib.q_analyze.match_var_to_db = (function posh$lib$q_analyze$match_var_to_db(var$,dbvarmap,dbeavs){
while(true){
if(cljs.core.empty_QMARK_.call(null,dbeavs)){
return null;
} else {
var vec__67292 = cljs.core.first.call(null,dbeavs);
var db = cljs.core.nth.call(null,vec__67292,(0),null);
var e = cljs.core.nth.call(null,vec__67292,(1),null);
var a = cljs.core.nth.call(null,vec__67292,(2),null);
var v = cljs.core.nth.call(null,vec__67292,(3),null);
if(cljs.core.truth_((function (){var or__60899__auto__ = cljs.core._EQ_.call(null,var$,e);
if(or__60899__auto__){
return or__60899__auto__;
} else {
var and__60887__auto__ = cljs.core._EQ_.call(null,var$,v);
if(and__60887__auto__){
return posh.lib.pull_analyze.ref_QMARK_.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(dbvarmap.call(null,db)),a);
} else {
return and__60887__auto__;
}
}
})())){
return dbvarmap.call(null,db);
} else {
var G__67295 = var$;
var G__67296 = dbvarmap;
var G__67297 = cljs.core.rest.call(null,dbeavs);
var$ = G__67295;
dbvarmap = G__67296;
dbeavs = G__67297;
continue;
}
}
break;
}
});
posh.lib.q_analyze.match_vars_to_dbs = (function posh$lib$q_analyze$match_vars_to_dbs(vars,dbvarmap,dbeavs){
if(cljs.core.empty_QMARK_.call(null,vars)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first.call(null,vars),posh.lib.q_analyze.match_var_to_db.call(null,cljs.core.first.call(null,vars),dbvarmap,dbeavs)]),posh.lib.q_analyze.match_vars_to_dbs.call(null,cljs.core.rest.call(null,vars),dbvarmap,dbeavs));
}
});
posh.lib.q_analyze.index_of = (function posh$lib$q_analyze$index_of(xs,x){
var n = (0);
var xs__$1 = xs;
while(true){
if(cljs.core.empty_QMARK_.call(null,xs__$1)){
return null;
} else {
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__$1),x)){
return n;
} else {
var G__67298 = (n + (1));
var G__67299 = cljs.core.rest.call(null,xs__$1);
n = G__67298;
xs__$1 = G__67299;
continue;

}
}
break;
}
});
posh.lib.q_analyze.db_arg_QMARK_ = (function posh$lib$q_analyze$db_arg_QMARK_(arg){
var and__60887__auto__ = cljs.core.map_QMARK_.call(null,arg);
if(and__60887__auto__){
var and__60887__auto____$1 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(arg);
if(cljs.core.truth_(and__60887__auto____$1)){
return new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(arg);
} else {
return and__60887__auto____$1;
}
} else {
return and__60887__auto__;
}
});
posh.lib.q_analyze.convert_args_to = (function posh$lib$q_analyze$convert_args_to(type,args){
return cljs.core.map.call(null,(function (p1__67300_SHARP_){
if(cljs.core.truth_(posh.lib.q_analyze.db_arg_QMARK_.call(null,p1__67300_SHARP_))){
return type.call(null,p1__67300_SHARP_);
} else {
return p1__67300_SHARP_;
}
}),args);
});
posh.lib.q_analyze.make_dbarg_map = (function posh$lib$q_analyze$make_dbarg_map(ins,args){
if(cljs.core.empty_QMARK_.call(null,ins)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.call(null,(cljs.core.truth_(posh.lib.q_analyze.dbvar_QMARK_.call(null,cljs.core.first.call(null,ins)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first.call(null,ins),cljs.core.first.call(null,args)]):null),posh.lib.q_analyze.make_dbarg_map.call(null,cljs.core.rest.call(null,ins),cljs.core.rest.call(null,args)));
}
});
posh.lib.q_analyze.split_datoms = (function posh$lib$q_analyze$split_datoms(datoms){
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,(function (p__67305){
var vec__67306 = p__67305;
var db_sym = cljs.core.nth.call(null,vec__67306,(0),null);
var db_datoms = cljs.core.nth.call(null,vec__67306,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([db_sym,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.vec,cljs.core.rest),db_datoms)]);
}),cljs.core.group_by.call(null,cljs.core.first,datoms)));
});
posh.lib.q_analyze.resolve_any_idents = (function posh$lib$q_analyze$resolve_any_idents(entid_fn,db,input_set){
return cljs.core.set.call(null,(function (){var iter__61761__auto__ = (function posh$lib$q_analyze$resolve_any_idents_$_iter__67313(s__67314){
return (new cljs.core.LazySeq(null,(function (){
var s__67314__$1 = s__67314;
while(true){
var temp__6738__auto__ = cljs.core.seq.call(null,s__67314__$1);
if(temp__6738__auto__){
var s__67314__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__67314__$2)){
var c__61759__auto__ = cljs.core.chunk_first.call(null,s__67314__$2);
var size__61760__auto__ = cljs.core.count.call(null,c__61759__auto__);
var b__67316 = cljs.core.chunk_buffer.call(null,size__61760__auto__);
if((function (){var i__67315 = (0);
while(true){
if((i__67315 < size__61760__auto__)){
var x = cljs.core._nth.call(null,c__61759__auto__,i__67315);
cljs.core.chunk_append.call(null,b__67316,((cljs.core.coll_QMARK_.call(null,x))?entid_fn.call(null,db,x):x));

var G__67317 = (i__67315 + (1));
i__67315 = G__67317;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__67316),posh$lib$q_analyze$resolve_any_idents_$_iter__67313.call(null,cljs.core.chunk_rest.call(null,s__67314__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__67316),null);
}
} else {
var x = cljs.core.first.call(null,s__67314__$2);
return cljs.core.cons.call(null,((cljs.core.coll_QMARK_.call(null,x))?entid_fn.call(null,db,x):x),posh$lib$q_analyze$resolve_any_idents_$_iter__67313.call(null,cljs.core.rest.call(null,s__67314__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__61761__auto__.call(null,input_set);
})());
});
posh.lib.q_analyze.q_analyze = (function posh$lib$q_analyze$q_analyze(dcfg,retrieve,query,args){
var qm = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null)], null)], null),posh.lib.q_analyze.query_to_map.call(null,query));
var where = posh.lib.q_analyze.normalize_all_eavs.call(null,cljs.core.vec.call(null,new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(qm)));
var eavs = posh.lib.q_analyze.get_eavs.call(null,where);
var vars = cljs.core.vec.call(null,posh.lib.q_analyze.get_all_vars.call(null,eavs));
var newqm = cljs.core.merge.call(null,qm,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),vars,new cljs.core.Keyword(null,"where","where",-2044795965),where], null));
var dbvarmap = posh.lib.q_analyze.make_dbarg_map.call(null,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args);
var fixed_args = cljs.core.map.call(null,((function (qm,where,eavs,vars,newqm,dbvarmap){
return (function (p__67347){
var vec__67348 = p__67347;
var sym = cljs.core.nth.call(null,vec__67348,(0),null);
var arg = cljs.core.nth.call(null,vec__67348,(1),null);
var or__60899__auto__ = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,dbvarmap,sym));
if(cljs.core.truth_(or__60899__auto__)){
return or__60899__auto__;
} else {
return arg;
}
});})(qm,where,eavs,vars,newqm,dbvarmap))
,cljs.core.zipmap.call(null,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args));
var r = cljs.core.apply.call(null,cljs.core.partial.call(null,new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),newqm),fixed_args);
var lookup_ref_patterns = cljs.core.map.call(null,((function (qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r){
return (function (p__67351){
var vec__67352 = p__67351;
var a = cljs.core.nth.call(null,vec__67352,(0),null);
var v = cljs.core.nth.call(null,vec__67352,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null);
});})(qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r))
,cljs.core.filter.call(null,cljs.core.every_pred.call(null,cljs.core.vector_QMARK_,cljs.core.comp.call(null,cljs.core.keyword_QMARK_,cljs.core.first),cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core._EQ_,(2)),cljs.core.count)),args));
return cljs.core.merge.call(null,(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),null,new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),retrieve))?(function (){var datoms = posh.lib.q_analyze.split_datoms.call(null,posh.lib.q_analyze.create_q_datoms.call(null,r,eavs,vars));
return cljs.core.merge.call(null,(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms","datoms",-290874434),cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,((function (datoms,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns){
return (function (p__67355){
var vec__67356 = p__67355;
var db_sym = cljs.core.nth.call(null,vec__67356,(0),null);
var db_datoms = cljs.core.nth.call(null,vec__67356,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1(dbvarmap.call(null,db_sym)),db_datoms]);
});})(datoms,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns))
,datoms))], null):null),(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,((function (datoms,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns){
return (function (p__67359){
var vec__67360 = p__67359;
var db_sym = cljs.core.nth.call(null,vec__67360,(0),null);
var db_datoms = cljs.core.nth.call(null,vec__67360,(1),null);
var db = dbvarmap.call(null,db_sym);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1(db),posh.lib.util.t_for_datoms.call(null,new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(db),db_datoms)]);
});})(datoms,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns))
,datoms))], null):null));
})():null),(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),datascript.core.q.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.vec.call(null,new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(qm)),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars,new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null)], null),cljs.core.vec.call(null,r))], null):null),(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),null,new cljs.core.Keyword(null,"patterns","patterns",1164082024),null,new cljs.core.Keyword(null,"simple-patterns","simple-patterns",788142763),null], null), null),retrieve))?(function (){var in_vars = posh.lib.q_analyze.get_input_sets.call(null,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args);
var eavs_ins = cljs.core.map.call(null,((function (in_vars,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns){
return (function (p__67363){
var vec__67364 = p__67363;
var seq__67365 = cljs.core.seq.call(null,vec__67364);
var first__67366 = cljs.core.first.call(null,seq__67365);
var seq__67365__$1 = cljs.core.next.call(null,seq__67365);
var db = first__67366;
var eav = seq__67365__$1;
return cljs.core.vec.call(null,cljs.core.cons.call(null,db,cljs.core.map.call(null,((function (vec__67364,seq__67365,first__67366,seq__67365__$1,db,eav,in_vars,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns){
return (function (p1__67320_SHARP_){
var temp__6736__auto__ = in_vars.call(null,p1__67320_SHARP_);
if(cljs.core.truth_(temp__6736__auto__)){
var v = temp__6736__auto__;
return posh.lib.q_analyze.resolve_any_idents.call(null,new cljs.core.Keyword(null,"entid","entid",1720688982).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,dbvarmap,db)),v);
} else {
return p1__67320_SHARP_;
}
});})(vec__67364,seq__67365,first__67366,seq__67365__$1,db,eav,in_vars,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns))
,eav)));
});})(in_vars,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns))
,cljs.core.concat.call(null,lookup_ref_patterns,eavs));
var qvar_count = posh.lib.q_analyze.count_qvars.call(null,eavs_ins);
var linked_qvars = cljs.core.set.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,((function (in_vars,eavs_ins,qvar_count,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns){
return (function (p__67367){
var vec__67368 = p__67367;
var k = cljs.core.nth.call(null,vec__67368,(0),null);
var v = cljs.core.nth.call(null,vec__67368,(1),null);
if((v > (1))){
return k;
} else {
return null;
}
});})(in_vars,eavs_ins,qvar_count,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns))
,qvar_count)));
var rvars = cljs.core.zipmap.call(null,vars,posh.lib.q_analyze.stack_vectors.call(null,r));
var prepped_eavs = clojure.walk.postwalk.call(null,((function (in_vars,eavs_ins,qvar_count,linked_qvars,rvars,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns){
return (function (p1__67321_SHARP_){
if(cljs.core.truth_((function (){var and__60887__auto__ = posh.lib.q_analyze.qvar_QMARK_.call(null,p1__67321_SHARP_);
if(cljs.core.truth_(and__60887__auto__)){
return cljs.core.not.call(null,linked_qvars.call(null,p1__67321_SHARP_));
} else {
return and__60887__auto__;
}
})())){
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
} else {
return p1__67321_SHARP_;
}
});})(in_vars,eavs_ins,qvar_count,linked_qvars,rvars,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns))
,eavs_ins);
return cljs.core.merge.call(null,(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"simple-patterns","simple-patterns",788142763),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),posh.lib.q_analyze.patterns_from_eavs.call(null,dbvarmap,rvars,clojure.walk.postwalk.call(null,((function (in_vars,eavs_ins,qvar_count,linked_qvars,rvars,prepped_eavs,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns){
return (function (p1__67322_SHARP_){
if(cljs.core.truth_(posh.lib.q_analyze.qvar_QMARK_.call(null,p1__67322_SHARP_))){
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
} else {
return p1__67322_SHARP_;
}
});})(in_vars,eavs_ins,qvar_count,linked_qvars,rvars,prepped_eavs,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns))
,eavs_ins))], null):null),(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),posh.lib.q_analyze.patterns_from_eavs.call(null,dbvarmap,rvars,prepped_eavs),new cljs.core.Keyword(null,"linked","linked",-1703156372),linked_qvars], null):null),(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),posh.lib.q_analyze.filter_patterns_from_eavs.call(null,dbvarmap,rvars,prepped_eavs)], null):null));
})():null));
});

//# sourceMappingURL=q_analyze.js.map?rel=1506064177513