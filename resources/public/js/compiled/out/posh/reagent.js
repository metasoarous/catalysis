// Compiled by ClojureScript 1.9.542 {}
goog.provide('posh.reagent');
goog.require('cljs.core');
goog.require('posh.core');
goog.require('posh.stateful');
goog.require('posh.lib.db');
goog.require('posh.lib.update');
goog.require('datascript.core');
goog.require('reagent.core');
goog.require('reagent.ratom');
posh.reagent.missing_pull_result = (function posh$reagent$missing_pull_result(pull_expr){
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),null], null), null),pull_expr))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),null], null);
} else {
return null;
}
});
posh.reagent.safe_pull = (function posh$reagent$safe_pull(db,query,id){
if(cljs.core.integer_QMARK_.call(null,id)){
return datascript.core.pull.call(null,db,query,id);
} else {
if(cljs.core.vector_QMARK_.call(null,id)){
var temp__6736__auto__ = datascript.core.entid.call(null,db,id);
if(cljs.core.truth_(temp__6736__auto__)){
var eid = temp__6736__auto__;
return datascript.core.pull.call(null,db,query,eid);
} else {
return posh.reagent.missing_pull_result.call(null,query);
}
} else {
if((id == null)){
return posh.reagent.missing_pull_result.call(null,query);
} else {
return null;
}
}
}
});
posh.reagent.dcfg = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"db","db",993250759),datascript.core.db,new cljs.core.Keyword(null,"pull","pull",-860544805),posh.reagent.safe_pull,new cljs.core.Keyword(null,"q","q",689001697),datascript.core.q,new cljs.core.Keyword(null,"filter","filter",-948537934),datascript.core.filter,new cljs.core.Keyword(null,"with","with",-1536296876),datascript.core.with$,new cljs.core.Keyword(null,"entid","entid",1720688982),datascript.core.entid,new cljs.core.Keyword(null,"transact!","transact!",-822725810),datascript.core.transact_BANG_], null);
posh.reagent.set_conn_listener_BANG_ = (function posh$reagent$set_conn_listener_BANG_(posh_atom,conn,db_id){
var posh_vars = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"posh-atom","posh-atom",-510480810),posh_atom,new cljs.core.Keyword(null,"db-id","db-id",747248515),db_id], null);
datascript.core.listen_BANG_.call(null,conn,new cljs.core.Keyword(null,"posh-dispenser","posh-dispenser",-482466766),((function (posh_vars){
return (function (var$){
if((var$ instanceof cljs.core.Keyword)){
return cljs.core.get.call(null,posh_vars,var$);
} else {
return null;
}
});})(posh_vars))
);

cljs.core.add_watch.call(null,conn,new cljs.core.Keyword(null,"posh-schema-listener","posh-schema-listener",-158129486),((function (posh_vars){
return (function (_,___$1,old_state,new_state){
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(old_state),new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(new_state))){
return cljs.core.swap_BANG_.call(null,posh_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),db_id], null),new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(new_state));
} else {
return null;
}
});})(posh_vars))
);

datascript.core.listen_BANG_.call(null,conn,new cljs.core.Keyword(null,"posh-listener","posh-listener",-6636061),((function (posh_vars){
return (function (tx_report){
var map__67595 = cljs.core.swap_BANG_.call(null,posh_atom,posh.core.after_transact,cljs.core.PersistentArrayMap.createAsIfByAssoc([conn,tx_report]));
var map__67595__$1 = ((((!((map__67595 == null)))?((((map__67595.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67595.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67595):map__67595);
var ratoms = cljs.core.get.call(null,map__67595__$1,new cljs.core.Keyword(null,"ratoms","ratoms",1900437364));
var changed = cljs.core.get.call(null,map__67595__$1,new cljs.core.Keyword(null,"changed","changed",570724917));
var seq__67597 = cljs.core.seq.call(null,changed);
var chunk__67598 = null;
var count__67599 = (0);
var i__67600 = (0);
while(true){
if((i__67600 < count__67599)){
var vec__67601 = cljs.core._nth.call(null,chunk__67598,i__67600);
var k = cljs.core.nth.call(null,vec__67601,(0),null);
var v = cljs.core.nth.call(null,vec__67601,(1),null);
cljs.core.reset_BANG_.call(null,cljs.core.get.call(null,ratoms,k),new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(v));

var G__67607 = seq__67597;
var G__67608 = chunk__67598;
var G__67609 = count__67599;
var G__67610 = (i__67600 + (1));
seq__67597 = G__67607;
chunk__67598 = G__67608;
count__67599 = G__67609;
i__67600 = G__67610;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__67597);
if(temp__6738__auto__){
var seq__67597__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__67597__$1)){
var c__61810__auto__ = cljs.core.chunk_first.call(null,seq__67597__$1);
var G__67611 = cljs.core.chunk_rest.call(null,seq__67597__$1);
var G__67612 = c__61810__auto__;
var G__67613 = cljs.core.count.call(null,c__61810__auto__);
var G__67614 = (0);
seq__67597 = G__67611;
chunk__67598 = G__67612;
count__67599 = G__67613;
i__67600 = G__67614;
continue;
} else {
var vec__67604 = cljs.core.first.call(null,seq__67597__$1);
var k = cljs.core.nth.call(null,vec__67604,(0),null);
var v = cljs.core.nth.call(null,vec__67604,(1),null);
cljs.core.reset_BANG_.call(null,cljs.core.get.call(null,ratoms,k),new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(v));

var G__67615 = cljs.core.next.call(null,seq__67597__$1);
var G__67616 = null;
var G__67617 = (0);
var G__67618 = (0);
seq__67597 = G__67615;
chunk__67598 = G__67616;
count__67599 = G__67617;
i__67600 = G__67618;
continue;
}
} else {
return null;
}
}
break;
}
});})(posh_vars))
);

return conn;
});
posh.reagent.posh_BANG_ = (function posh$reagent$posh_BANG_(var_args){
var args__62127__auto__ = [];
var len__62120__auto___67620 = arguments.length;
var i__62121__auto___67621 = (0);
while(true){
if((i__62121__auto___67621 < len__62120__auto___67620)){
args__62127__auto__.push((arguments[i__62121__auto___67621]));

var G__67622 = (i__62121__auto___67621 + (1));
i__62121__auto___67621 = G__67622;
continue;
} else {
}
break;
}

var argseq__62128__auto__ = ((((0) < args__62127__auto__.length))?(new cljs.core.IndexedSeq(args__62127__auto__.slice((0)),(0),null)):null);
return posh.reagent.posh_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__62128__auto__);
});

posh.reagent.posh_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (conns){
var posh_atom = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return cljs.core.reset_BANG_.call(null,posh_atom,(function (){var n = (0);
var conns__$1 = conns;
var posh_tree = cljs.core.assoc.call(null,posh.core.empty_tree.call(null,posh.reagent.dcfg,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"results","results",-1134170113)], null)),new cljs.core.Keyword(null,"ratoms","ratoms",1900437364),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"reactions","reactions",2029850654),cljs.core.PersistentArrayMap.EMPTY);
while(true){
if(cljs.core.empty_QMARK_.call(null,conns__$1)){
return posh_tree;
} else {
var G__67623 = (n + (1));
var G__67624 = cljs.core.rest.call(null,conns__$1);
var G__67625 = (function (){var db_id = cljs.core.keyword.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("conn"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
return posh.core.add_db.call(null,posh_tree,db_id,posh.reagent.set_conn_listener_BANG_.call(null,posh_atom,cljs.core.first.call(null,conns__$1),db_id),new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.first.call(null,conns__$1))));
})();
n = G__67623;
conns__$1 = G__67624;
posh_tree = G__67625;
continue;
}
break;
}
})());
});

posh.reagent.posh_BANG_.cljs$lang$maxFixedArity = (0);

posh.reagent.posh_BANG_.cljs$lang$applyTo = (function (seq67619){
return posh.reagent.posh_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq67619));
});

posh.reagent.get_conn_var = (function posh$reagent$get_conn_var(conn,var$){
return new cljs.core.Keyword(null,"posh-dispenser","posh-dispenser",-482466766).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn)))).call(null,var$);
});
posh.reagent.get_posh_atom = (function posh$reagent$get_posh_atom(poshdb_or_conn){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,poshdb_or_conn))){
return posh.reagent.get_conn_var.call(null,poshdb_or_conn,new cljs.core.Keyword(null,"posh-atom","posh-atom",-510480810));
} else {
return posh.stateful.get_posh_atom.call(null,poshdb_or_conn);
}
});
posh.reagent.get_db = (function posh$reagent$get_db(poshdb_or_conn){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,poshdb_or_conn))){
return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),posh.reagent.get_conn_var.call(null,poshdb_or_conn,new cljs.core.Keyword(null,"db-id","db-id",747248515))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"posh","posh",-1205664462),posh.reagent.get_conn_var.call(null,poshdb_or_conn,new cljs.core.Keyword(null,"posh-atom","posh-atom",-510480810))], null));
} else {
return poshdb_or_conn;
}
});
posh.reagent.rm_posh_item = (function posh$reagent$rm_posh_item(posh_atom,storage_key){
return cljs.core.swap_BANG_.call(null,posh_atom,(function (posh_atom_val){
return cljs.core.assoc.call(null,posh.core.remove_item.call(null,posh_atom_val,storage_key),new cljs.core.Keyword(null,"ratoms","ratoms",1900437364),cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"ratoms","ratoms",1900437364).cljs$core$IFn$_invoke$arity$1(posh_atom_val),storage_key),new cljs.core.Keyword(null,"reactions","reactions",2029850654),cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"reactions","reactions",2029850654).cljs$core$IFn$_invoke$arity$1(posh_atom_val),storage_key));
}));
});
posh.reagent.make_query_reaction = (function posh$reagent$make_query_reaction(var_args){
var args67626 = [];
var len__62120__auto___67629 = arguments.length;
var i__62121__auto___67630 = (0);
while(true){
if((i__62121__auto___67630 < len__62120__auto___67629)){
args67626.push((arguments[i__62121__auto___67630]));

var G__67631 = (i__62121__auto___67630 + (1));
i__62121__auto___67630 = G__67631;
continue;
} else {
}
break;
}

var G__67628 = args67626.length;
switch (G__67628) {
case 4:
return posh.reagent.make_query_reaction.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return posh.reagent.make_query_reaction.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args67626.length)].join('')));

}
});

posh.reagent.make_query_reaction.cljs$core$IFn$_invoke$arity$4 = (function (posh_atom,storage_key,add_query_fn,options){
var temp__6736__auto__ = cljs.core.get_in.call(null,cljs.core.deref.call(null,posh_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reactions","reactions",2029850654),storage_key], null));
if(cljs.core.truth_(temp__6736__auto__)){
var r = temp__6736__auto__;
return r;
} else {
return cljs.core.get.call(null,new cljs.core.Keyword(null,"reactions","reactions",2029850654).cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.call(null,posh_atom,((function (temp__6736__auto__){
return (function (posh_atom_val){
var posh_atom_with_query = add_query_fn.call(null,posh_atom_val);
var query_result = new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"cache","cache",-1237023054).cljs$core$IFn$_invoke$arity$1(posh_atom_with_query),storage_key));
var query_ratom = (function (){var or__60899__auto__ = cljs.core.get.call(null,new cljs.core.Keyword(null,"ratoms","ratoms",1900437364).cljs$core$IFn$_invoke$arity$1(posh_atom_with_query),storage_key);
if(cljs.core.truth_(or__60899__auto__)){
return or__60899__auto__;
} else {
return reagent.core.atom.call(null,query_result);
}
})();
var query_reaction = reagent.ratom.make_reaction.call(null,((function (posh_atom_with_query,query_result,query_ratom,temp__6736__auto__){
return (function (){
return cljs.core.deref.call(null,query_ratom);
});})(posh_atom_with_query,query_result,query_ratom,temp__6736__auto__))
,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360),((function (posh_atom_with_query,query_result,query_ratom,temp__6736__auto__){
return (function (_,___$1){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"cache","cache",-1237023054).cljs$core$IFn$_invoke$arity$1(options),new cljs.core.Keyword(null,"forever","forever",2103455015))){
return null;
} else {
return cljs.core.swap_BANG_.call(null,posh_atom,((function (posh_atom_with_query,query_result,query_ratom,temp__6736__auto__){
return (function (posh_atom_val__$1){
return cljs.core.assoc.call(null,posh.core.remove_item.call(null,posh_atom_val__$1,storage_key),new cljs.core.Keyword(null,"ratoms","ratoms",1900437364),cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"ratoms","ratoms",1900437364).cljs$core$IFn$_invoke$arity$1(posh_atom_val__$1),storage_key),new cljs.core.Keyword(null,"reactions","reactions",2029850654),cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"reactions","reactions",2029850654).cljs$core$IFn$_invoke$arity$1(posh_atom_val__$1),storage_key));
});})(posh_atom_with_query,query_result,query_ratom,temp__6736__auto__))
);
}
});})(posh_atom_with_query,query_result,query_ratom,temp__6736__auto__))
);
return cljs.core.assoc.call(null,posh_atom_with_query,new cljs.core.Keyword(null,"ratoms","ratoms",1900437364),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"ratoms","ratoms",1900437364).cljs$core$IFn$_invoke$arity$1(posh_atom_with_query),storage_key,query_ratom),new cljs.core.Keyword(null,"reactions","reactions",2029850654),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"reactions","reactions",2029850654).cljs$core$IFn$_invoke$arity$1(posh_atom_with_query),storage_key,query_reaction));
});})(temp__6736__auto__))
)),storage_key);
}
});

posh.reagent.make_query_reaction.cljs$core$IFn$_invoke$arity$3 = (function (posh_atom,storage_key,add_query_fn){
return posh.reagent.make_query_reaction.call(null,posh_atom,storage_key,add_query_fn,cljs.core.PersistentArrayMap.EMPTY);
});

posh.reagent.make_query_reaction.cljs$lang$maxFixedArity = 4;

/**
 * Returns a reaction of a pull expression. The options argument may specify `:cache :forever`, which keeps query results
 *   cached indefinitely, even if the reaction is disposed.
 */
posh.reagent.pull = (function posh$reagent$pull(var_args){
var args67634 = [];
var len__62120__auto___67637 = arguments.length;
var i__62121__auto___67638 = (0);
while(true){
if((i__62121__auto___67638 < len__62120__auto___67637)){
args67634.push((arguments[i__62121__auto___67638]));

var G__67639 = (i__62121__auto___67638 + (1));
i__62121__auto___67638 = G__67639;
continue;
} else {
}
break;
}

var G__67636 = args67634.length;
switch (G__67636) {
case 4:
return posh.reagent.pull.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return posh.reagent.pull.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args67634.length)].join('')));

}
});

posh.reagent.pull.cljs$core$IFn$_invoke$arity$4 = (function (poshdb,pull_pattern,eid,options){
var true_poshdb = posh.reagent.get_db.call(null,poshdb);
var storage_key = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pull","pull",-860544805),true_poshdb,pull_pattern,eid], null);
var posh_atom = posh.reagent.get_posh_atom.call(null,poshdb);
return posh.reagent.make_query_reaction.call(null,posh_atom,storage_key,((function (true_poshdb,storage_key,posh_atom){
return (function (p1__67633_SHARP_){
return posh.core.add_pull.call(null,p1__67633_SHARP_,true_poshdb,pull_pattern,eid);
});})(true_poshdb,storage_key,posh_atom))
,options);
});

posh.reagent.pull.cljs$core$IFn$_invoke$arity$3 = (function (poshdb,pull_pattern,eid){
return posh.reagent.pull.call(null,poshdb,pull_pattern,eid,cljs.core.PersistentArrayMap.EMPTY);
});

posh.reagent.pull.cljs$lang$maxFixedArity = 4;

posh.reagent.pull_info = (function posh$reagent$pull_info(poshdb,pull_pattern,eid){
var true_poshdb = posh.reagent.get_db.call(null,poshdb);
var storage_key = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pull","pull",-860544805),true_poshdb,pull_pattern,eid], null);
var posh_atom = posh.reagent.get_posh_atom.call(null,poshdb);
return cljs.core.dissoc.call(null,posh.lib.update.update_pull.call(null,cljs.core.deref.call(null,posh_atom),storage_key),new cljs.core.Keyword(null,"reload-fn","reload-fn",-1150160860));
});
posh.reagent.pull_tx = (function posh$reagent$pull_tx(tx_patterns,poshdb,pull_pattern,eid){
cljs.core.println.call(null,"pull-tx is deprecated. Calling pull without your tx-patterns.");

return posh.reagent.pull.call(null,poshdb,pull_pattern,eid);
});
posh.reagent.parse_q_query = (function posh$reagent$parse_q_query(query){
return cljs.core.first.call(null,cljs.core.reduce.call(null,(function (p__67645,query_item){
var vec__67646 = p__67645;
var parsed_query = cljs.core.nth.call(null,vec__67646,(0),null);
var last_key = cljs.core.nth.call(null,vec__67646,(1),null);
if((query_item instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,parsed_query,query_item,cljs.core.PersistentVector.EMPTY),query_item], null);
} else {
if(cljs.core.truth_(last_key)){
} else {
throw (new Error("Assert failed: last-key"));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update.call(null,parsed_query,last_key,cljs.core.conj,query_item),last_key], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,null], null),query));
});
posh.reagent.q_args_count = (function posh$reagent$q_args_count(query){
var parsed_query = posh.reagent.parse_q_query.call(null,query);
var temp__6736__auto__ = new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(parsed_query);
if(cljs.core.truth_(temp__6736__auto__)){
var in_clause = temp__6736__auto__;
return cljs.core.count.call(null,in_clause);
} else {
return (1);
}
});
/**
 * Returns a datalog query reaction. If args count doens't match the query's input count, a final options map argument
 *   is accepted. This options map may specify `:cache :forever`, which keeps query results cached even if the reaction is
 *   disposed.
 */
posh.reagent.q = (function posh$reagent$q(var_args){
var args__62127__auto__ = [];
var len__62120__auto___67656 = arguments.length;
var i__62121__auto___67657 = (0);
while(true){
if((i__62121__auto___67657 < len__62120__auto___67656)){
args__62127__auto__.push((arguments[i__62121__auto___67657]));

var G__67658 = (i__62121__auto___67657 + (1));
i__62121__auto___67657 = G__67658;
continue;
} else {
}
break;
}

var argseq__62128__auto__ = ((((1) < args__62127__auto__.length))?(new cljs.core.IndexedSeq(args__62127__auto__.slice((1)),(0),null)):null);
return posh.reagent.q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__62128__auto__);
});

posh.reagent.q.cljs$core$IFn$_invoke$arity$variadic = (function (query,args){
var n_query_args = posh.reagent.q_args_count.call(null,query);
var vec__67653 = ((cljs.core._EQ_.call(null,n_query_args,cljs.core.count.call(null,args)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [args,cljs.core.PersistentArrayMap.EMPTY], null):((cljs.core._EQ_.call(null,(n_query_args + (1)),cljs.core.count.call(null,args)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.butlast.call(null,args),cljs.core.last.call(null,args)], null):(function(){throw "Incorrect number of args passed to posh query"})()
));
var args__$1 = cljs.core.nth.call(null,vec__67653,(0),null);
var options = cljs.core.nth.call(null,vec__67653,(1),null);
var true_poshdb_args = cljs.core.map.call(null,((function (n_query_args,vec__67653,args__$1,options){
return (function (p1__67649_SHARP_){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,p1__67649_SHARP_))){
return posh.reagent.get_db.call(null,p1__67649_SHARP_);
} else {
return p1__67649_SHARP_;
}
});})(n_query_args,vec__67653,args__$1,options))
,args__$1);
var posh_atom = cljs.core.first.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,posh.reagent.get_posh_atom,args__$1)));
var storage_key = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"q","q",689001697),query,true_poshdb_args], null);
return posh.reagent.make_query_reaction.call(null,posh_atom,storage_key,((function (n_query_args,vec__67653,args__$1,options,true_poshdb_args,posh_atom,storage_key){
return (function (p1__67650_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,posh.core.add_q,p1__67650_SHARP_,query),true_poshdb_args);
});})(n_query_args,vec__67653,args__$1,options,true_poshdb_args,posh_atom,storage_key))
,options);
});

posh.reagent.q.cljs$lang$maxFixedArity = (1);

posh.reagent.q.cljs$lang$applyTo = (function (seq67651){
var G__67652 = cljs.core.first.call(null,seq67651);
var seq67651__$1 = cljs.core.next.call(null,seq67651);
return posh.reagent.q.cljs$core$IFn$_invoke$arity$variadic(G__67652,seq67651__$1);
});

posh.reagent.q_info = (function posh$reagent$q_info(var_args){
var args__62127__auto__ = [];
var len__62120__auto___67662 = arguments.length;
var i__62121__auto___67663 = (0);
while(true){
if((i__62121__auto___67663 < len__62120__auto___67662)){
args__62127__auto__.push((arguments[i__62121__auto___67663]));

var G__67664 = (i__62121__auto___67663 + (1));
i__62121__auto___67663 = G__67664;
continue;
} else {
}
break;
}

var argseq__62128__auto__ = ((((1) < args__62127__auto__.length))?(new cljs.core.IndexedSeq(args__62127__auto__.slice((1)),(0),null)):null);
return posh.reagent.q_info.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__62128__auto__);
});

posh.reagent.q_info.cljs$core$IFn$_invoke$arity$variadic = (function (query,args){
var true_poshdb_args = cljs.core.map.call(null,(function (p1__67659_SHARP_){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,p1__67659_SHARP_))){
return posh.reagent.get_db.call(null,p1__67659_SHARP_);
} else {
return p1__67659_SHARP_;
}
}),args);
var posh_atom = cljs.core.first.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,posh.reagent.get_posh_atom,args)));
var storage_key = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"q","q",689001697),query,true_poshdb_args], null);
return cljs.core.dissoc.call(null,posh.lib.update.update_q.call(null,cljs.core.deref.call(null,posh_atom),storage_key),new cljs.core.Keyword(null,"reload-fn","reload-fn",-1150160860));
});

posh.reagent.q_info.cljs$lang$maxFixedArity = (1);

posh.reagent.q_info.cljs$lang$applyTo = (function (seq67660){
var G__67661 = cljs.core.first.call(null,seq67660);
var seq67660__$1 = cljs.core.next.call(null,seq67660);
return posh.reagent.q_info.cljs$core$IFn$_invoke$arity$variadic(G__67661,seq67660__$1);
});

posh.reagent.q_tx = (function posh$reagent$q_tx(var_args){
var args__62127__auto__ = [];
var len__62120__auto___67668 = arguments.length;
var i__62121__auto___67669 = (0);
while(true){
if((i__62121__auto___67669 < len__62120__auto___67668)){
args__62127__auto__.push((arguments[i__62121__auto___67669]));

var G__67670 = (i__62121__auto___67669 + (1));
i__62121__auto___67669 = G__67670;
continue;
} else {
}
break;
}

var argseq__62128__auto__ = ((((2) < args__62127__auto__.length))?(new cljs.core.IndexedSeq(args__62127__auto__.slice((2)),(0),null)):null);
return posh.reagent.q_tx.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__62128__auto__);
});

posh.reagent.q_tx.cljs$core$IFn$_invoke$arity$variadic = (function (tx_patterns,query,args){
cljs.core.println.call(null,"q-tx is deprecated. Calling q without your tx-patterns.");

return cljs.core.apply.call(null,posh.reagent.q,query,args);
});

posh.reagent.q_tx.cljs$lang$maxFixedArity = (2);

posh.reagent.q_tx.cljs$lang$applyTo = (function (seq67665){
var G__67666 = cljs.core.first.call(null,seq67665);
var seq67665__$1 = cljs.core.next.call(null,seq67665);
var G__67667 = cljs.core.first.call(null,seq67665__$1);
var seq67665__$2 = cljs.core.next.call(null,seq67665__$1);
return posh.reagent.q_tx.cljs$core$IFn$_invoke$arity$variadic(G__67666,G__67667,seq67665__$2);
});

posh.reagent.filter_tx = (function posh$reagent$filter_tx(poshdb,tx_patterns){
return posh.stateful.add_filter_tx.call(null,posh.reagent.get_db.call(null,poshdb),tx_patterns);
});
posh.reagent.filter_pull = (function posh$reagent$filter_pull(poshdb,pull_pattern,eid){
return posh.stateful.add_filter_pull.call(null,posh.reagent.get_db.call(null,poshdb),pull_pattern,eid);
});
posh.reagent.filter_q = (function posh$reagent$filter_q(var_args){
var args__62127__auto__ = [];
var len__62120__auto___67674 = arguments.length;
var i__62121__auto___67675 = (0);
while(true){
if((i__62121__auto___67675 < len__62120__auto___67674)){
args__62127__auto__.push((arguments[i__62121__auto___67675]));

var G__67676 = (i__62121__auto___67675 + (1));
i__62121__auto___67675 = G__67676;
continue;
} else {
}
break;
}

var argseq__62128__auto__ = ((((1) < args__62127__auto__.length))?(new cljs.core.IndexedSeq(args__62127__auto__.slice((1)),(0),null)):null);
return posh.reagent.filter_q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__62128__auto__);
});

posh.reagent.filter_q.cljs$core$IFn$_invoke$arity$variadic = (function (query,args){
var true_poshdb_args = cljs.core.map.call(null,(function (p1__67671_SHARP_){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,p1__67671_SHARP_))){
return posh.reagent.get_db.call(null,p1__67671_SHARP_);
} else {
return p1__67671_SHARP_;
}
}),args);
return cljs.core.apply.call(null,posh.stateful.add_filter_q,query,true_poshdb_args);
});

posh.reagent.filter_q.cljs$lang$maxFixedArity = (1);

posh.reagent.filter_q.cljs$lang$applyTo = (function (seq67672){
var G__67673 = cljs.core.first.call(null,seq67672);
var seq67672__$1 = cljs.core.next.call(null,seq67672);
return posh.reagent.filter_q.cljs$core$IFn$_invoke$arity$variadic(G__67673,seq67672__$1);
});

posh.reagent.transact_BANG_ = (function posh$reagent$transact_BANG_(poshdb_or_conn,txs){
return datascript.core.transact_BANG_.call(null,(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,poshdb_or_conn))?poshdb_or_conn:posh.stateful.poshdb__GT_conn.call(null,poshdb_or_conn)),txs);
});

//# sourceMappingURL=reagent.js.map?rel=1506064178115