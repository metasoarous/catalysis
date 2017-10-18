// Compiled by ClojureScript 1.9.542 {}
goog.provide('dat.sync.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('dat.remote');
goog.require('datascript.db');
goog.require('dat.sync.db');
goog.require('com.rpl.specter');
goog.require('dat.reactor');
goog.require('dat.reactor.onyx');
goog.require('dat.reactor.dispatcher');
goog.require('datascript.core');
goog.require('dat.spec.protocols');
goog.require('com.stuartsierra.component');
goog.require('dat.spec.utils');
goog.require('taoensso.timbre');
dat.sync.core.identity_gdatom_QMARK_ = (function dat$sync$core$identity_gdatom_QMARK_(p__66069){
var vec__66076 = p__66069;
var vec__66079 = cljs.core.nth.call(null,vec__66076,(0),null);
var ident_attr = cljs.core.nth.call(null,vec__66079,(0),null);
var _ = cljs.core.nth.call(null,vec__66079,(1),null);
var attr = cljs.core.nth.call(null,vec__66076,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__66076,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__66076,(3),null);
var ___$3 = cljs.core.nth.call(null,vec__66076,(4),null);
return cljs.core._EQ_.call(null,ident_attr,attr);
});
dat.sync.core.globalize_uuid = (function dat$sync$core$globalize_uuid(db,eid){
var it = dat.sync.db.entity.call(null,db,eid);
var dbident = new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(it);
if(cljs.core.truth_(dbident)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096),dbident], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.sync","uuid","dat.sync/uuid",-402536853),new cljs.core.Keyword("dat.sync","uuid","dat.sync/uuid",-402536853).cljs$core$IFn$_invoke$arity$1(it)], null);

}
});
dat.sync.core.localize_uuid_deprecated = (function dat$sync$core$localize_uuid_deprecated(db,euuid){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.sync","uuid","dat.sync/uuid",-402536853),euuid], null);
});
dat.sync.core.datom__GT_tx = (function dat$sync$core$datom__GT_tx(p__66082){
var vec__66086 = p__66082;
var e = cljs.core.nth.call(null,vec__66086,(0),null);
var a = cljs.core.nth.call(null,vec__66086,(1),null);
var v = cljs.core.nth.call(null,vec__66086,(2),null);
var tx = cljs.core.nth.call(null,vec__66086,(3),null);
var add_QMARK_ = cljs.core.nth.call(null,vec__66086,(4),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(add_QMARK_)?new cljs.core.Keyword("db","add","db/add",235286841):new cljs.core.Keyword("db","retract","db/retract",-1549825231)),e,a,v], null);
});
dat.sync.core.datom_GT__LT_tx = (function dat$sync$core$datom_GT__LT_tx(){
return cljs.core.map.call(null,dat.sync.core.datom__GT_tx);
});
dat.sync.core.ref_QMARK_ = (function dat$sync$core$ref_QMARK_(db,attr_ident){
var or__61290__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","unique","db/unique",329396388),null,new cljs.core.Keyword("db","valueType","db/valueType",1827971944),null,new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),null], null), null).call(null,attr_ident);
if(cljs.core.truth_(or__61290__auto__)){
return or__61290__auto__;
} else {
return dat.sync.db.q.call(null,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?attr","?attr",-2066507837,null),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?ident","?ident",1230589912,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?attr","?attr",-2066507837,null),new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Symbol(null,"?ident","?ident",1230589912,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?attr","?attr",-2066507837,null),new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Symbol(null,"?ref-enum","?ref-enum",462690791,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?ref-enum","?ref-enum",462690791,null),new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null)], null),db,attr_ident);
}
});
dat.sync.core.many_QMARK_ = (function dat$sync$core$many_QMARK_(db,attr_ident){
return dat.sync.db.q.call(null,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?attr","?attr",-2066507837,null),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?ident","?ident",1230589912,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?attr","?attr",-2066507837,null),new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Symbol(null,"?ident","?ident",1230589912,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?attr","?attr",-2066507837,null),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Symbol(null,"?many-enum","?many-enum",-715240085,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?many-enum","?many-enum",-715240085,null),new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234)], null)], null),db,attr_ident);
});
dat.sync.core.datom_identer = (function dat$sync$core$datom_identer(db,uuid){
return (function (p__66093){
var vec__66094 = p__66093;
var e = cljs.core.nth.call(null,vec__66094,(0),null);
var a = cljs.core.nth.call(null,vec__66094,(1),null);
var v = cljs.core.nth.call(null,vec__66094,(2),null);
var tx = cljs.core.nth.call(null,vec__66094,(3),null);
var add_QMARK_ = cljs.core.nth.call(null,vec__66094,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [uuid.call(null,db,e),a,((cljs.core.not.call(null,dat.sync.core.ref_QMARK_.call(null,db,a)))?v:(cljs.core.truth_((function (){var and__61271__auto__ = dat.sync.core.many_QMARK_.call(null,db,a);
if(cljs.core.truth_(and__61271__auto__)){
return cljs.core.coll_QMARK_.call(null,v);
} else {
return and__61271__auto__;
}
})())?cljs.core.map.call(null,cljs.core.partial.call(null,uuid,db),v):uuid.call(null,db,v))),tx,add_QMARK_], null);
});
});
dat.sync.core.datom_attr_resolver = (function dat$sync$core$datom_attr_resolver(db){
return (function (p__66101){
var vec__66102 = p__66101;
var e = cljs.core.nth.call(null,vec__66102,(0),null);
var a = cljs.core.nth.call(null,vec__66102,(1),null);
var v = cljs.core.nth.call(null,vec__66102,(2),null);
var tx = cljs.core.nth.call(null,vec__66102,(3),null);
var add_QMARK_ = cljs.core.nth.call(null,vec__66102,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,(((a instanceof cljs.core.Keyword))?a:new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(dat.sync.db.entity.call(null,db,a))),v,tx,add_QMARK_], null);
});
});
dat.sync.core.datom_GT__LT_gdatom = (function dat$sync$core$datom_GT__LT_gdatom(db){
return cljs.core.comp.call(null,cljs.core.map.call(null,dat.sync.core.datom_attr_resolver.call(null,db)),cljs.core.map.call(null,dat.sync.core.datom_identer.call(null,db,dat.sync.core.globalize_uuid)));
});
dat.sync.core.gdatom_GT__LT_datom = (function dat$sync$core$gdatom_GT__LT_datom(db){
return cljs.core.identity;
});
dat.sync.core.gdatom_GT__LT_datom_deprecated = (function dat$sync$core$gdatom_GT__LT_datom_deprecated(db){
return cljs.core.map.call(null,dat.sync.core.datom_identer.call(null,db,dat.sync.core.localize_uuid_deprecated));
});
dat.sync.core.assign_ident = (function dat$sync$core$assign_ident(p__66105){
var vec__66112 = p__66105;
var vec__66115 = cljs.core.nth.call(null,vec__66112,(0),null);
var ident_attr = cljs.core.nth.call(null,vec__66115,(0),null);
var ident_value = cljs.core.nth.call(null,vec__66115,(1),null);
var a = cljs.core.nth.call(null,vec__66112,(1),null);
var v = cljs.core.nth.call(null,vec__66112,(2),null);
var tx = cljs.core.nth.call(null,vec__66112,(3),null);
var add_QMARK_ = cljs.core.nth.call(null,vec__66112,(4),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([ident_attr,ident_value]);
});
dat.sync.core.datom_GT__LT_tx_idents = (function dat$sync$core$datom_GT__LT_tx_idents(){
return cljs.core.comp.call(null,cljs.core.filter.call(null,dat.sync.core.identity_gdatom_QMARK_),cljs.core.map.call(null,dat.sync.core.assign_ident));
});
dat.sync.core.snap_transact = (function dat$sync$core$snap_transact(conn,p__66118){
var map__66121 = p__66118;
var map__66121__$1 = ((((!((map__66121 == null)))?((((map__66121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66121.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66121):map__66121);
var txs = cljs.core.get.call(null,map__66121__$1,new cljs.core.Keyword(null,"txs","txs",2056038378));
var tx_meta = cljs.core.get.call(null,map__66121__$1,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194));
return dat.sync.db.with$.call(null,dat.sync.db.db.call(null,conn),txs);
});
goog.exportSymbol('dat.sync.core.snap_transact', dat.sync.core.snap_transact);
dat.sync.core.tx_report__GT_gdatoms = (function dat$sync$core$tx_report__GT_gdatoms(p__66123){
var map__66126 = p__66123;
var map__66126__$1 = ((((!((map__66126 == null)))?((((map__66126.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66126.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66126):map__66126);
var seg = map__66126__$1;
var tx_data = cljs.core.get.call(null,map__66126__$1,new cljs.core.Keyword(null,"tx-data","tx-data",934159761));
var db_after = cljs.core.get.call(null,map__66126__$1,new cljs.core.Keyword(null,"db-after","db-after",-571884666));
var gdatoms = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,dat.sync.core.datom_GT__LT_gdatom.call(null,db_after),tx_data);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("dat.reactor","event","dat.reactor/event",-1385170451),new cljs.core.Keyword("dat.sync","gdatoms","dat.sync/gdatoms",-353657446),new cljs.core.Keyword(null,"datoms","datoms",-290874434),gdatoms], null);
});
goog.exportSymbol('dat.sync.core.tx_report__GT_gdatoms', dat.sync.core.tx_report__GT_gdatoms);
dat.sync.core.weird_nil_ident_QMARK_ = (function dat$sync$core$weird_nil_ident_QMARK_(p__66128){
var vec__66135 = p__66128;
var vec__66138 = cljs.core.nth.call(null,vec__66135,(0),null);
var _ = cljs.core.nth.call(null,vec__66138,(0),null);
var ident_value = cljs.core.nth.call(null,vec__66138,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__66135,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__66135,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__66135,(3),null);
var ___$4 = cljs.core.nth.call(null,vec__66135,(4),null);
return (ident_value == null);
});
dat.sync.core.gdatoms__GT_local_txs = (function dat$sync$core$gdatoms__GT_local_txs(gdatoms){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.comp.call(null,cljs.core.remove.call(null,dat.sync.core.weird_nil_ident_QMARK_),cljs.core.map.call(null,(function (p1__66141_SHARP_){
if(cljs.core.truth_(dat.sync.core.identity_gdatom_QMARK_.call(null,p1__66141_SHARP_))){
return dat.sync.core.assign_ident.call(null,p1__66141_SHARP_);
} else {
return dat.sync.core.datom__GT_tx.call(null,p1__66141_SHARP_);
}
}))),gdatoms);
});
dat.sync.core.gdatoms__GT_local_ds_txs = (function dat$sync$core$gdatoms__GT_local_ds_txs(p__66142){
var map__66149 = p__66142;
var map__66149__$1 = ((((!((map__66149 == null)))?((((map__66149.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66149.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66149):map__66149);
var seg = map__66149__$1;
var datoms = cljs.core.get.call(null,map__66149__$1,new cljs.core.Keyword(null,"datoms","datoms",-290874434));
var datomses = cljs.core.get.call(null,map__66149__$1,new cljs.core.Keyword(null,"datomses","datomses",1035210778));
var iter__62216__auto__ = ((function (map__66149,map__66149__$1,seg,datoms,datomses){
return (function dat$sync$core$gdatoms__GT_local_ds_txs_$_iter__66151(s__66152){
return (new cljs.core.LazySeq(null,((function (map__66149,map__66149__$1,seg,datoms,datomses){
return (function (){
var s__66152__$1 = s__66152;
while(true){
var temp__6738__auto__ = cljs.core.seq.call(null,s__66152__$1);
if(temp__6738__auto__){
var s__66152__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__66152__$2)){
var c__62214__auto__ = cljs.core.chunk_first.call(null,s__66152__$2);
var size__62215__auto__ = cljs.core.count.call(null,c__62214__auto__);
var b__66154 = cljs.core.chunk_buffer.call(null,size__62215__auto__);
if((function (){var i__66153 = (0);
while(true){
if((i__66153 < size__62215__auto__)){
var datoms__$1 = cljs.core._nth.call(null,c__62214__auto__,i__66153);
cljs.core.chunk_append.call(null,b__66154,(function (){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"dat.sync.core","/tmp/form-init3486417385122683475.clj",144,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (i__66153,datoms__$1,c__62214__auto__,size__62215__auto__,b__66154,s__66152__$2,temp__6738__auto__,map__66149,map__66149__$1,seg,datoms,datomses){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["txacting",cljs.core.vec.call(null,datoms__$1)], null);
});})(i__66153,datoms__$1,c__62214__auto__,size__62215__auto__,b__66154,s__66152__$2,temp__6738__auto__,map__66149,map__66149__$1,seg,datoms,datomses))
,null)),null,1173761833);

return cljs.core.into.call(null,seg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("dat.reactor","event","dat.reactor/event",-1385170451),new cljs.core.Keyword("dat.sync","local-txs","dat.sync/local-txs",-821876329),new cljs.core.Keyword(null,"txs","txs",2056038378),dat.sync.core.gdatoms__GT_local_txs.call(null,datoms__$1)], null));
})()
);

var G__66155 = (i__66153 + (1));
i__66153 = G__66155;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__66154),dat$sync$core$gdatoms__GT_local_ds_txs_$_iter__66151.call(null,cljs.core.chunk_rest.call(null,s__66152__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__66154),null);
}
} else {
var datoms__$1 = cljs.core.first.call(null,s__66152__$2);
return cljs.core.cons.call(null,(function (){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"dat.sync.core","/tmp/form-init3486417385122683475.clj",144,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (datoms__$1,s__66152__$2,temp__6738__auto__,map__66149,map__66149__$1,seg,datoms,datomses){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["txacting",cljs.core.vec.call(null,datoms__$1)], null);
});})(datoms__$1,s__66152__$2,temp__6738__auto__,map__66149,map__66149__$1,seg,datoms,datomses))
,null)),null,-81152703);

return cljs.core.into.call(null,seg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("dat.reactor","event","dat.reactor/event",-1385170451),new cljs.core.Keyword("dat.sync","local-txs","dat.sync/local-txs",-821876329),new cljs.core.Keyword(null,"txs","txs",2056038378),dat.sync.core.gdatoms__GT_local_txs.call(null,datoms__$1)], null));
})()
,dat$sync$core$gdatoms__GT_local_ds_txs_$_iter__66151.call(null,cljs.core.rest.call(null,s__66152__$2)));
}
} else {
return null;
}
break;
}
});})(map__66149,map__66149__$1,seg,datoms,datomses))
,null,null));
});})(map__66149,map__66149__$1,seg,datoms,datomses))
;
return iter__62216__auto__.call(null,(function (){var or__61290__auto__ = datomses;
if(cljs.core.truth_(or__61290__auto__)){
return or__61290__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [datoms], null);
}
})());
});
goog.exportSymbol('dat.sync.core.gdatoms__GT_local_ds_txs', dat.sync.core.gdatoms__GT_local_ds_txs);
dat.sync.core.split_id_datoms = (function dat$sync$core$split_id_datoms(p__66156){
var map__66159 = p__66156;
var map__66159__$1 = ((((!((map__66159 == null)))?((((map__66159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66159.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66159):map__66159);
var seg = map__66159__$1;
var datoms = cljs.core.get.call(null,map__66159__$1,new cljs.core.Keyword(null,"datoms","datoms",-290874434));
var local_id_assignments = cljs.core.filter.call(null,dat.sync.core.identity_gdatom_QMARK_,datoms);
var other_datoms = cljs.core.remove.call(null,dat.sync.core.identity_gdatom_QMARK_,datoms);
return cljs.core.assoc.call(null,seg,new cljs.core.Keyword(null,"datoms","datoms",-290874434),null,new cljs.core.Keyword(null,"datomses","datomses",1035210778),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [local_id_assignments,other_datoms], null));
});
goog.exportSymbol('dat.sync.core.split_id_datoms', dat.sync.core.split_id_datoms);
dat.sync.core.datom__GT_has_ident_QMARK_ = (function dat$sync$core$datom__GT_has_ident_QMARK_(db){
return (function (p__66165){
var vec__66166 = p__66165;
var e = cljs.core.nth.call(null,vec__66166,(0),null);
var _ = cljs.core.nth.call(null,vec__66166,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__66166,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__66166,(3),null);
var ___$3 = cljs.core.nth.call(null,vec__66166,(4),null);
return new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(dat.sync.db.entity.call(null,db,e));
});
});
dat.sync.core.snapshot = (function dat$sync$core$snapshot(p__66170,p__66171){
var map__66184 = p__66170;
var map__66184__$1 = ((((!((map__66184 == null)))?((((map__66184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66184.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66184):map__66184);
var knowbase = map__66184__$1;
var conn = cljs.core.get.call(null,map__66184__$1,new cljs.core.Keyword(null,"conn","conn",278309663));
var map__66185 = p__66171;
var map__66185__$1 = ((((!((map__66185 == null)))?((((map__66185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66185.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66185):map__66185);
var event_msg = map__66185__$1;
var peer_id = cljs.core.get.call(null,map__66185__$1,new cljs.core.Keyword("dat.remote","peer-id","dat.remote/peer-id",524490523));
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dat.sync.core","/tmp/form-init3486417385122683475.clj",164,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (map__66184,map__66184__$1,knowbase,conn,map__66185,map__66185__$1,event_msg,peer_id){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Sending bootstrap message",peer_id], null);
});})(map__66184,map__66184__$1,knowbase,conn,map__66185,map__66185__$1,event_msg,peer_id))
,null)),null,-1859302920);

var db = dat.sync.db.db.call(null,conn);
var has_ident_QMARK_ = dat.sync.core.datom__GT_has_ident_QMARK_.call(null,db);
var datoms = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,dat.sync.core.datom_GT__LT_gdatom.call(null,db),dat.spec.protocols.snapshot.call(null,knowbase));
var uuids = cljs.core.filter.call(null,dat.sync.core.identity_gdatom_QMARK_,datoms);
var ident_datoms = cljs.core.filter.call(null,has_ident_QMARK_,datoms);
var core_schema_datoms = cljs.core.filter.call(null,((function (db,has_ident_QMARK_,datoms,uuids,ident_datoms,map__66184,map__66184__$1,knowbase,conn,map__66185,map__66185__$1,event_msg,peer_id){
return (function (p__66188){
var vec__66189 = p__66188;
var _ = cljs.core.nth.call(null,vec__66189,(0),null);
var a = cljs.core.nth.call(null,vec__66189,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__66189,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__66189,(3),null);
var ___$3 = cljs.core.nth.call(null,vec__66189,(4),null);
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","unique","db/unique",329396388),null,new cljs.core.Keyword("db","valueType","db/valueType",1827971944),null,new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),null,new cljs.core.Keyword("db","ident","db/ident",-737096),null], null), null).call(null,a);
});})(db,has_ident_QMARK_,datoms,uuids,ident_datoms,map__66184,map__66184__$1,knowbase,conn,map__66185,map__66185__$1,event_msg,peer_id))
,ident_datoms);
var other_schema_datoms = cljs.core.remove.call(null,((function (db,has_ident_QMARK_,datoms,uuids,ident_datoms,core_schema_datoms,map__66184,map__66184__$1,knowbase,conn,map__66185,map__66185__$1,event_msg,peer_id){
return (function (p__66192){
var vec__66193 = p__66192;
var _ = cljs.core.nth.call(null,vec__66193,(0),null);
var a = cljs.core.nth.call(null,vec__66193,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__66193,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__66193,(3),null);
var ___$3 = cljs.core.nth.call(null,vec__66193,(4),null);
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","unique","db/unique",329396388),null,new cljs.core.Keyword("db","valueType","db/valueType",1827971944),null,new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),null,new cljs.core.Keyword("db","ident","db/ident",-737096),null], null), null).call(null,a);
});})(db,has_ident_QMARK_,datoms,uuids,ident_datoms,core_schema_datoms,map__66184,map__66184__$1,knowbase,conn,map__66185,map__66185__$1,event_msg,peer_id))
,ident_datoms);
var other_datoms = cljs.core.remove.call(null,((function (db,has_ident_QMARK_,datoms,uuids,ident_datoms,core_schema_datoms,other_schema_datoms,map__66184,map__66184__$1,knowbase,conn,map__66185,map__66185__$1,event_msg,peer_id){
return (function (p1__66169_SHARP_){
var or__61290__auto__ = dat.sync.core.identity_gdatom_QMARK_.call(null,p1__66169_SHARP_);
if(cljs.core.truth_(or__61290__auto__)){
return or__61290__auto__;
} else {
return has_ident_QMARK_.call(null,p1__66169_SHARP_);
}
});})(db,has_ident_QMARK_,datoms,uuids,ident_datoms,core_schema_datoms,other_schema_datoms,map__66184,map__66184__$1,knowbase,conn,map__66185,map__66185__$1,event_msg,peer_id))
,datoms);
var seg = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("dat.remote","peer-id","dat.remote/peer-id",524490523),peer_id,new cljs.core.Keyword("dat.reactor","event","dat.reactor/event",-1385170451),new cljs.core.Keyword("dat.sync","snapshot","dat.sync/snapshot",1546049956),new cljs.core.Keyword(null,"datomses","datomses",1035210778),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [uuids,core_schema_datoms,other_schema_datoms,other_datoms], null)], null);
return seg;
});
dat.sync.core.transaction_QMARK_ = (function dat$sync$core$transaction_QMARK_(event,old_seg,seg,all_new){
return cljs.core.contains_QMARK_.call(null,seg,new cljs.core.Keyword(null,"txs","txs",2056038378));
});
goog.exportSymbol('dat.sync.core.transaction_QMARK_', dat.sync.core.transaction_QMARK_);
dat.sync.core.localize_QMARK_ = (function dat$sync$core$localize_QMARK_(event,old_seg,seg,all_new){
return cljs.core._EQ_.call(null,new cljs.core.Keyword("dat.reactor","event","dat.reactor/event",-1385170451).cljs$core$IFn$_invoke$arity$1(seg),new cljs.core.Keyword("dat.sync","gdatoms","dat.sync/gdatoms",-353657446));
});
goog.exportSymbol('dat.sync.core.localize_QMARK_', dat.sync.core.localize_QMARK_);
dat.sync.core.legacy_QMARK_ = (function dat$sync$core$legacy_QMARK_(event,old_seg,seg,all_new){
return cljs.core._EQ_.call(null,new cljs.core.Keyword("dat.reactor","event","dat.reactor/event",-1385170451).cljs$core$IFn$_invoke$arity$1(seg),new cljs.core.Keyword("dat.reactor","legacy","dat.reactor/legacy",546320112));
});
goog.exportSymbol('dat.sync.core.legacy_QMARK_', dat.sync.core.legacy_QMARK_);
dat.sync.core.legacy_tx_QMARK_ = (function dat$sync$core$legacy_tx_QMARK_(event,old_seg,seg,all_new){
var and__61271__auto__ = dat.sync.core.legacy_QMARK_.call(null,event,old_seg,seg,all_new);
if(cljs.core.truth_(and__61271__auto__)){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(seg)),new cljs.core.Keyword("dat.sync.client","send-remote-tx","dat.sync.client/send-remote-tx",-648888103));
} else {
return and__61271__auto__;
}
});
goog.exportSymbol('dat.sync.core.legacy_tx_QMARK_', dat.sync.core.legacy_tx_QMARK_);
if(typeof dat.sync.core.legacy__GT_seg2 !== 'undefined'){
} else {
dat.sync.core.legacy__GT_seg2 = (function (){var method_table__62385__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__62386__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__62387__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__62388__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__62389__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"dat.sync.core","legacy->seg2"),cljs.core.first,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__62389__auto__,method_table__62385__auto__,prefer_table__62386__auto__,method_cache__62387__auto__,cached_hierarchy__62388__auto__));
})();
}
cljs.core._add_method.call(null,dat.sync.core.legacy__GT_seg2,new cljs.core.Keyword("dat.sync.client","send-remote-tx","dat.sync.client/send-remote-tx",-648888103),(function (p__66196){
var vec__66197 = p__66196;
var _ = cljs.core.nth.call(null,vec__66197,(0),null);
var txs = cljs.core.nth.call(null,vec__66197,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("dat.reactor","event","dat.reactor/event",-1385170451),new cljs.core.Keyword("dat.sync","tx","dat.sync/tx",-1195991452),new cljs.core.Keyword(null,"txs","txs",2056038378),txs], null);
}));
cljs.core._add_method.call(null,dat.sync.core.legacy__GT_seg2,new cljs.core.Keyword("dat.remote","send-event!","dat.remote/send-event!",934871644),(function (p__66200){
var vec__66201 = p__66200;
var _ = cljs.core.nth.call(null,vec__66201,(0),null);
var event = cljs.core.nth.call(null,vec__66201,(1),null);
return null;
}));
dat.sync.core.legacy_translator = (function dat$sync$core$legacy_translator(p__66204){
var map__66207 = p__66204;
var map__66207__$1 = ((((!((map__66207 == null)))?((((map__66207.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66207.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66207):map__66207);
var event = cljs.core.get.call(null,map__66207__$1,new cljs.core.Keyword(null,"event","event",301435442));
return dat.sync.core.legacy__GT_seg2.call(null,event);
});
goog.exportSymbol('dat.sync.core.legacy_translator', dat.sync.core.legacy_translator);
dat.sync.core.snapshot_QMARK_ = (function dat$sync$core$snapshot_QMARK_(event,old_seg,seg,all_new){
return cljs.core._EQ_.call(null,new cljs.core.Keyword("dat.reactor","event","dat.reactor/event",-1385170451).cljs$core$IFn$_invoke$arity$1(seg),new cljs.core.Keyword("dat.sync","snapshot","dat.sync/snapshot",1546049956));
});
goog.exportSymbol('dat.sync.core.snapshot_QMARK_', dat.sync.core.snapshot_QMARK_);
dat.sync.core.request_snapshot_QMARK_ = (function dat$sync$core$request_snapshot_QMARK_(event,old_seg,seg,all_new){
return cljs.core._EQ_.call(null,new cljs.core.Keyword("dat.reactor","event","dat.reactor/event",-1385170451).cljs$core$IFn$_invoke$arity$1(seg),new cljs.core.Keyword("dat.sync","request-snapshot","dat.sync/request-snapshot",81664815));
});
goog.exportSymbol('dat.sync.core.request_snapshot_QMARK_', dat.sync.core.request_snapshot_QMARK_);
dat.sync.core.source_from_transactor_QMARK_ = (function dat$sync$core$source_from_transactor_QMARK_(event,old_seg,seg,all_new){
return cljs.core._EQ_.call(null,new cljs.core.Keyword("dat.reactor","input","dat.reactor/input",498748102).cljs$core$IFn$_invoke$arity$1(seg),new cljs.core.Keyword("dat.sync","tx-report","dat.sync/tx-report",1237006785));
});
goog.exportSymbol('dat.sync.core.source_from_transactor_QMARK_', dat.sync.core.source_from_transactor_QMARK_);
dat.sync.core.source_from_remote_QMARK_ = (function dat$sync$core$source_from_remote_QMARK_(event,old_seg,seg,all_new){
return cljs.core._EQ_.call(null,new cljs.core.Keyword("dat.reactor","input","dat.reactor/input",498748102).cljs$core$IFn$_invoke$arity$1(seg),new cljs.core.Keyword("dat.sync","remote","dat.sync/remote",946224418));
});
goog.exportSymbol('dat.sync.core.source_from_remote_QMARK_', dat.sync.core.source_from_remote_QMARK_);
if(typeof dat.sync.core.event_msg_handler !== 'undefined'){
} else {
dat.sync.core.event_msg_handler = (function (){var method_table__62385__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__62386__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__62387__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__62388__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__62389__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"dat.sync.core","event-msg-handler"),((function (method_table__62385__auto__,prefer_table__62386__auto__,method_cache__62387__auto__,cached_hierarchy__62388__auto__,hierarchy__62389__auto__){
return (function (app,p__66209){
var map__66210 = p__66209;
var map__66210__$1 = ((((!((map__66210 == null)))?((((map__66210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66210.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66210):map__66210);
var event_msg = map__66210__$1;
var id = cljs.core.get.call(null,map__66210__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return id;
});})(method_table__62385__auto__,prefer_table__62386__auto__,method_cache__62387__auto__,cached_hierarchy__62388__auto__,hierarchy__62389__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__62389__auto__,method_table__62385__auto__,prefer_table__62386__auto__,method_cache__62387__auto__,cached_hierarchy__62388__auto__));
})();
}
cljs.core._add_method.call(null,dat.sync.core.event_msg_handler,new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304),(function (_,___$1){
return null;
}));
cljs.core._add_method.call(null,dat.sync.core.event_msg_handler,new cljs.core.Keyword(null,"default","default",-1987822328),(function (app,p__66212){
var map__66213 = p__66212;
var map__66213__$1 = ((((!((map__66213 == null)))?((((map__66213.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66213.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66213):map__66213);
var event_msg = map__66213__$1;
var event = cljs.core.get.call(null,map__66213__$1,new cljs.core.Keyword(null,"event","event",301435442));
var id = cljs.core.get.call(null,map__66213__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var _QMARK_data = cljs.core.get.call(null,map__66213__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var ring_req = cljs.core.get.call(null,map__66213__$1,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961));
var _QMARK_reply_fn = cljs.core.get.call(null,map__66213__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
var send_fn = cljs.core.get.call(null,map__66213__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"dat.sync.core","/tmp/form-init3486417385122683475.clj",305,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (map__66213,map__66213__$1,event_msg,event,id,_QMARK_data,ring_req,_QMARK_reply_fn,send_fn){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unhandled event:",id], null);
});})(map__66213,map__66213__$1,event_msg,event,id,_QMARK_data,ring_req,_QMARK_reply_fn,send_fn))
,null)),null,-105477225);
}));
dat.reactor.register_handler.call(null,new cljs.core.Keyword("dat.remote","connected","dat.remote/connected",-95364560),(function (app,db,_){
return dat.reactor.resolve_to.call(null,app,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.sync.client","request-bootstrap","dat.sync.client/request-bootstrap",1164062733),true], null)], null));
}));
dat.reactor.register_handler.call(null,new cljs.core.Keyword("dat.sync.client","request-bootstrap","dat.sync.client/request-bootstrap",1164062733),(function (app,db,_){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dat.sync.core","/tmp/form-init3486417385122683475.clj",327,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Sending bootstrap request!"], null);
}),null)),null,1014945374);

return dat.reactor.resolve_to.call(null,app,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.remote","send-event!","dat.remote/send-event!",934871644),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.sync.client","bootstrap","dat.sync.client/bootstrap",1964218081),true], null)], null)], null));
}));
dat.reactor.register_handler.call(null,new cljs.core.Keyword("dat.sync.client","bootstrap","dat.sync.client/bootstrap",1964218081),(function (app,db,p__66215){
var vec__66216 = p__66215;
var _ = cljs.core.nth.call(null,vec__66216,(0),null);
var tx_data = cljs.core.nth.call(null,vec__66216,(1),null);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dat.sync.core","/tmp/form-init3486417385122683475.clj",336,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__66216,_,tx_data){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Received bootstrap!",cljs.core.take.call(null,(10),tx_data)], null);
});})(vec__66216,_,tx_data))
,null)),null,1576909002);

return dat.reactor.with_effect.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.reactor","dispatch!","dat.reactor/dispatch!",2015016299),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.sync.client.bootstrap","complete?","dat.sync.client.bootstrap/complete?",-1333465608),true], null)], null),dat.reactor.resolve_to.call(null,app,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.sync.client","recv-remote-tx","dat.sync.client/recv-remote-tx",-325804681),tx_data], null)], null)));
}));
dat.sync.core.legacy_server_segment_BANG_ = (function dat$sync$core$legacy_server_segment_BANG_(app,seg){
return dat.sync.core.event_msg_handler.call(null,app,seg);
});
dat.sync.core.transact_segment_BANG_ = (function dat$sync$core$transact_segment_BANG_(p__66219,p__66220){
var map__66225 = p__66219;
var map__66225__$1 = ((((!((map__66225 == null)))?((((map__66225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66225.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66225):map__66225);
var knowbase = map__66225__$1;
var conn = cljs.core.get.call(null,map__66225__$1,new cljs.core.Keyword(null,"conn","conn",278309663));
var map__66226 = p__66220;
var map__66226__$1 = ((((!((map__66226 == null)))?((((map__66226.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66226.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66226):map__66226);
var seg = map__66226__$1;
var txs = cljs.core.get.call(null,map__66226__$1,new cljs.core.Keyword(null,"txs","txs",2056038378));
var tx_meta = cljs.core.get.call(null,map__66226__$1,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194));
var report = dat.sync.db.transact_BANG_.call(null,conn,txs,tx_meta);
return report;
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {com.stuartsierra.component.Lifecycle}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
dat.sync.core.Datsync = (function (dispatcher,remote,__meta,__extmap,__hash){
this.dispatcher = dispatcher;
this.remote = remote;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
dat.sync.core.Datsync.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__62029__auto__,k__62030__auto__){
var self__ = this;
var this__62029__auto____$1 = this;
return this__62029__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__62030__auto__,null);
});

dat.sync.core.Datsync.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__62031__auto__,k66231,else__62032__auto__){
var self__ = this;
var this__62031__auto____$1 = this;
var G__66233 = k66231;
var G__66233__$1 = (((G__66233 instanceof cljs.core.Keyword))?G__66233.fqn:null);
switch (G__66233__$1) {
case "dispatcher":
return self__.dispatcher;

break;
case "remote":
return self__.remote;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k66231,else__62032__auto__);

}
});

dat.sync.core.Datsync.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__62043__auto__,writer__62044__auto__,opts__62045__auto__){
var self__ = this;
var this__62043__auto____$1 = this;
var pr_pair__62046__auto__ = ((function (this__62043__auto____$1){
return (function (keyval__62047__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__62044__auto__,cljs.core.pr_writer,""," ","",opts__62045__auto__,keyval__62047__auto__);
});})(this__62043__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__62044__auto__,pr_pair__62046__auto__,"#dat.sync.core.Datsync{",", ","}",opts__62045__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132),self__.dispatcher],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"remote","remote",-1593576576),self__.remote],null))], null),self__.__extmap));
});

dat.sync.core.Datsync.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

dat.sync.core.Datsync.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__66230){
var self__ = this;
var G__66230__$1 = this;
return (new cljs.core.RecordIter((0),G__66230__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132),new cljs.core.Keyword(null,"remote","remote",-1593576576)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

dat.sync.core.Datsync.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__62027__auto__){
var self__ = this;
var this__62027__auto____$1 = this;
return self__.__meta;
});

dat.sync.core.Datsync.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__62023__auto__){
var self__ = this;
var this__62023__auto____$1 = this;
return (new dat.sync.core.Datsync(self__.dispatcher,self__.remote,self__.__meta,self__.__extmap,self__.__hash));
});

dat.sync.core.Datsync.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__62033__auto__){
var self__ = this;
var this__62033__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

dat.sync.core.Datsync.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__62024__auto__){
var self__ = this;
var this__62024__auto____$1 = this;
var h__61796__auto__ = self__.__hash;
if(!((h__61796__auto__ == null))){
return h__61796__auto__;
} else {
var h__61796__auto____$1 = cljs.core.hash_imap.call(null,this__62024__auto____$1);
self__.__hash = h__61796__auto____$1;

return h__61796__auto____$1;
}
});

dat.sync.core.Datsync.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__62025__auto__,other__62026__auto__){
var self__ = this;
var this__62025__auto____$1 = this;
if(cljs.core.truth_((function (){var and__61271__auto__ = other__62026__auto__;
if(cljs.core.truth_(and__61271__auto__)){
return ((this__62025__auto____$1.constructor === other__62026__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__62025__auto____$1,other__62026__auto__));
} else {
return and__61271__auto__;
}
})())){
return true;
} else {
return false;
}
});

dat.sync.core.Datsync.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__62038__auto__,k__62039__auto__){
var self__ = this;
var this__62038__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remote","remote",-1593576576),null,new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132),null], null), null),k__62039__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__62038__auto____$1),self__.__meta),k__62039__auto__);
} else {
return (new dat.sync.core.Datsync(self__.dispatcher,self__.remote,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__62039__auto__)),null));
}
});

dat.sync.core.Datsync.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__62036__auto__,k__62037__auto__,G__66230){
var self__ = this;
var this__62036__auto____$1 = this;
var pred__66234 = cljs.core.keyword_identical_QMARK_;
var expr__66235 = k__62037__auto__;
if(cljs.core.truth_(pred__66234.call(null,new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132),expr__66235))){
return (new dat.sync.core.Datsync(G__66230,self__.remote,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__66234.call(null,new cljs.core.Keyword(null,"remote","remote",-1593576576),expr__66235))){
return (new dat.sync.core.Datsync(self__.dispatcher,G__66230,self__.__meta,self__.__extmap,null));
} else {
return (new dat.sync.core.Datsync(self__.dispatcher,self__.remote,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__62037__auto__,G__66230),null));
}
}
});

dat.sync.core.Datsync.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__62041__auto__){
var self__ = this;
var this__62041__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132),self__.dispatcher],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"remote","remote",-1593576576),self__.remote],null))], null),self__.__extmap));
});

dat.sync.core.Datsync.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__62028__auto__,G__66230){
var self__ = this;
var this__62028__auto____$1 = this;
return (new dat.sync.core.Datsync(self__.dispatcher,self__.remote,G__66230,self__.__extmap,self__.__hash));
});

dat.sync.core.Datsync.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__62034__auto__,entry__62035__auto__){
var self__ = this;
var this__62034__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__62035__auto__)){
return this__62034__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__62035__auto__,(0)),cljs.core._nth.call(null,entry__62035__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__62034__auto____$1,entry__62035__auto__);
}
});

dat.sync.core.Datsync.prototype.com$stuartsierra$component$Lifecycle$ = cljs.core.PROTOCOL_SENTINEL;

dat.sync.core.Datsync.prototype.com$stuartsierra$component$Lifecycle$start$arity$1 = (function (component){
var self__ = this;
var component__$1 = this;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dat.sync.core","/tmp/form-init3486417385122683475.clj",357,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (component__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Starting Datsync component"], null);
});})(component__$1))
,null)),null,1449734804);

taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dat.sync.core","/tmp/form-init3486417385122683475.clj",360,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (component__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Dispatched schema changes"], null);
});})(component__$1))
,null)),null,-541341869);

cljs.core.async.pipeline.call(null,(1),dat.spec.protocols.send_chan.call(null,self__.dispatcher),cljs.core.map.call(null,((function (component__$1){
return (function (p1__66229_SHARP_){
return cljs.core.assoc.call(null,p1__66229_SHARP_,new cljs.core.Keyword("dat.reactor","event","dat.reactor/event",-1385170451),new cljs.core.Keyword("dat.reactor","legacy","dat.reactor/legacy",546320112),new cljs.core.Keyword("dat.sync","event-source","dat.sync/event-source",465339675),new cljs.core.Keyword("dat.sync","remote","dat.sync/remote",946224418));
});})(component__$1))
),dat.spec.protocols.recv_chan.call(null,self__.remote));

return component__$1;
});

dat.sync.core.Datsync.prototype.com$stuartsierra$component$Lifecycle$stop$arity$1 = (function (component){
var self__ = this;
var component__$1 = this;
return component__$1;
});

dat.sync.core.Datsync.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dispatcher","dispatcher",2093752659,null),new cljs.core.Symbol(null,"remote","remote",46954951,null)], null);
});

dat.sync.core.Datsync.cljs$lang$type = true;

dat.sync.core.Datsync.cljs$lang$ctorPrSeq = (function (this__62065__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"dat.sync.core/Datsync");
});

dat.sync.core.Datsync.cljs$lang$ctorPrWriter = (function (this__62065__auto__,writer__62066__auto__){
return cljs.core._write.call(null,writer__62066__auto__,"dat.sync.core/Datsync");
});

dat.sync.core.__GT_Datsync = (function dat$sync$core$__GT_Datsync(dispatcher,remote){
return (new dat.sync.core.Datsync(dispatcher,remote,null,null,null));
});

dat.sync.core.map__GT_Datsync = (function dat$sync$core$map__GT_Datsync(G__66232){
return (new dat.sync.core.Datsync(new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132).cljs$core$IFn$_invoke$arity$1(G__66232),new cljs.core.Keyword(null,"remote","remote",-1593576576).cljs$core$IFn$_invoke$arity$1(G__66232),null,cljs.core.dissoc.call(null,G__66232,new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132),new cljs.core.Keyword(null,"remote","remote",-1593576576)),null));
});

dat.sync.core.new_datsync = (function dat$sync$core$new_datsync(){
return dat.sync.core.map__GT_Datsync.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
dat.sync.core.onyx_batch_size = (20);
dat.sync.core.base_catalog = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("onyx","type","onyx/type",1170345418),new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.Keyword("onyx","name","onyx/name",1848664427),new cljs.core.Keyword("dat.sync.core","split-id-datoms","dat.sync.core/split-id-datoms",1628297286),new cljs.core.Keyword("onyx","fn","onyx/fn",-1172046942),new cljs.core.Keyword("dat.sync.core","split-id-datoms","dat.sync.core/split-id-datoms",1628297286),new cljs.core.Keyword("onyx","batch-size","onyx/batch-size",1209135837),dat.sync.core.onyx_batch_size], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("onyx","type","onyx/type",1170345418),new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.Keyword("onyx","name","onyx/name",1848664427),new cljs.core.Keyword("dat.sync.core","snapshot","dat.sync.core/snapshot",-2139746629),new cljs.core.Keyword("onyx","fn","onyx/fn",-1172046942),new cljs.core.Keyword("dat.sync.core","snapshot","dat.sync.core/snapshot",-2139746629),new cljs.core.Keyword("onyx","batch-size","onyx/batch-size",1209135837),dat.sync.core.onyx_batch_size], null)], null);

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {com.stuartsierra.component.Lifecycle}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
dat.sync.core.DatsyncClient = (function (dispatcher,remote,reactor,knowbase,conn,__meta,__extmap,__hash){
this.dispatcher = dispatcher;
this.remote = remote;
this.reactor = reactor;
this.knowbase = knowbase;
this.conn = conn;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
dat.sync.core.DatsyncClient.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__62029__auto__,k__62030__auto__){
var self__ = this;
var this__62029__auto____$1 = this;
return this__62029__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__62030__auto__,null);
});

dat.sync.core.DatsyncClient.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__62031__auto__,k66239,else__62032__auto__){
var self__ = this;
var this__62031__auto____$1 = this;
var G__66241 = k66239;
var G__66241__$1 = (((G__66241 instanceof cljs.core.Keyword))?G__66241.fqn:null);
switch (G__66241__$1) {
case "dispatcher":
return self__.dispatcher;

break;
case "remote":
return self__.remote;

break;
case "reactor":
return self__.reactor;

break;
case "knowbase":
return self__.knowbase;

break;
case "conn":
return self__.conn;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k66239,else__62032__auto__);

}
});

dat.sync.core.DatsyncClient.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__62043__auto__,writer__62044__auto__,opts__62045__auto__){
var self__ = this;
var this__62043__auto____$1 = this;
var pr_pair__62046__auto__ = ((function (this__62043__auto____$1){
return (function (keyval__62047__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__62044__auto__,cljs.core.pr_writer,""," ","",opts__62045__auto__,keyval__62047__auto__);
});})(this__62043__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__62044__auto__,pr_pair__62046__auto__,"#dat.sync.core.DatsyncClient{",", ","}",opts__62045__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132),self__.dispatcher],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"remote","remote",-1593576576),self__.remote],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reactor","reactor",535582272),self__.reactor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"knowbase","knowbase",-132061592),self__.knowbase],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"conn","conn",278309663),self__.conn],null))], null),self__.__extmap));
});

dat.sync.core.DatsyncClient.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

dat.sync.core.DatsyncClient.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__66238){
var self__ = this;
var G__66238__$1 = this;
return (new cljs.core.RecordIter((0),G__66238__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132),new cljs.core.Keyword(null,"remote","remote",-1593576576),new cljs.core.Keyword(null,"reactor","reactor",535582272),new cljs.core.Keyword(null,"knowbase","knowbase",-132061592),new cljs.core.Keyword(null,"conn","conn",278309663)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

dat.sync.core.DatsyncClient.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__62027__auto__){
var self__ = this;
var this__62027__auto____$1 = this;
return self__.__meta;
});

dat.sync.core.DatsyncClient.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__62023__auto__){
var self__ = this;
var this__62023__auto____$1 = this;
return (new dat.sync.core.DatsyncClient(self__.dispatcher,self__.remote,self__.reactor,self__.knowbase,self__.conn,self__.__meta,self__.__extmap,self__.__hash));
});

dat.sync.core.DatsyncClient.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__62033__auto__){
var self__ = this;
var this__62033__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

dat.sync.core.DatsyncClient.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__62024__auto__){
var self__ = this;
var this__62024__auto____$1 = this;
var h__61796__auto__ = self__.__hash;
if(!((h__61796__auto__ == null))){
return h__61796__auto__;
} else {
var h__61796__auto____$1 = cljs.core.hash_imap.call(null,this__62024__auto____$1);
self__.__hash = h__61796__auto____$1;

return h__61796__auto____$1;
}
});

dat.sync.core.DatsyncClient.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__62025__auto__,other__62026__auto__){
var self__ = this;
var this__62025__auto____$1 = this;
if(cljs.core.truth_((function (){var and__61271__auto__ = other__62026__auto__;
if(cljs.core.truth_(and__61271__auto__)){
return ((this__62025__auto____$1.constructor === other__62026__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__62025__auto____$1,other__62026__auto__));
} else {
return and__61271__auto__;
}
})())){
return true;
} else {
return false;
}
});

dat.sync.core.DatsyncClient.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__62038__auto__,k__62039__auto__){
var self__ = this;
var this__62038__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"reactor","reactor",535582272),null,new cljs.core.Keyword(null,"remote","remote",-1593576576),null,new cljs.core.Keyword(null,"knowbase","knowbase",-132061592),null,new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132),null,new cljs.core.Keyword(null,"conn","conn",278309663),null], null), null),k__62039__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__62038__auto____$1),self__.__meta),k__62039__auto__);
} else {
return (new dat.sync.core.DatsyncClient(self__.dispatcher,self__.remote,self__.reactor,self__.knowbase,self__.conn,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__62039__auto__)),null));
}
});

dat.sync.core.DatsyncClient.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__62036__auto__,k__62037__auto__,G__66238){
var self__ = this;
var this__62036__auto____$1 = this;
var pred__66242 = cljs.core.keyword_identical_QMARK_;
var expr__66243 = k__62037__auto__;
if(cljs.core.truth_(pred__66242.call(null,new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132),expr__66243))){
return (new dat.sync.core.DatsyncClient(G__66238,self__.remote,self__.reactor,self__.knowbase,self__.conn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__66242.call(null,new cljs.core.Keyword(null,"remote","remote",-1593576576),expr__66243))){
return (new dat.sync.core.DatsyncClient(self__.dispatcher,G__66238,self__.reactor,self__.knowbase,self__.conn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__66242.call(null,new cljs.core.Keyword(null,"reactor","reactor",535582272),expr__66243))){
return (new dat.sync.core.DatsyncClient(self__.dispatcher,self__.remote,G__66238,self__.knowbase,self__.conn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__66242.call(null,new cljs.core.Keyword(null,"knowbase","knowbase",-132061592),expr__66243))){
return (new dat.sync.core.DatsyncClient(self__.dispatcher,self__.remote,self__.reactor,G__66238,self__.conn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__66242.call(null,new cljs.core.Keyword(null,"conn","conn",278309663),expr__66243))){
return (new dat.sync.core.DatsyncClient(self__.dispatcher,self__.remote,self__.reactor,self__.knowbase,G__66238,self__.__meta,self__.__extmap,null));
} else {
return (new dat.sync.core.DatsyncClient(self__.dispatcher,self__.remote,self__.reactor,self__.knowbase,self__.conn,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__62037__auto__,G__66238),null));
}
}
}
}
}
});

dat.sync.core.DatsyncClient.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__62041__auto__){
var self__ = this;
var this__62041__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132),self__.dispatcher],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"remote","remote",-1593576576),self__.remote],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reactor","reactor",535582272),self__.reactor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"knowbase","knowbase",-132061592),self__.knowbase],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"conn","conn",278309663),self__.conn],null))], null),self__.__extmap));
});

dat.sync.core.DatsyncClient.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__62028__auto__,G__66238){
var self__ = this;
var this__62028__auto____$1 = this;
return (new dat.sync.core.DatsyncClient(self__.dispatcher,self__.remote,self__.reactor,self__.knowbase,self__.conn,G__66238,self__.__extmap,self__.__hash));
});

dat.sync.core.DatsyncClient.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__62034__auto__,entry__62035__auto__){
var self__ = this;
var this__62034__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__62035__auto__)){
return this__62034__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__62035__auto__,(0)),cljs.core._nth.call(null,entry__62035__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__62034__auto____$1,entry__62035__auto__);
}
});

dat.sync.core.DatsyncClient.prototype.com$stuartsierra$component$Lifecycle$ = cljs.core.PROTOCOL_SENTINEL;

dat.sync.core.DatsyncClient.prototype.com$stuartsierra$component$Lifecycle$start$arity$1 = (function (component){
var self__ = this;
var component__$1 = this;
var component__$2 = cljs.core.assoc.call(null,component__$1,new cljs.core.Keyword(null,"conn","conn",278309663),(function (){var or__61290__auto__ = self__.conn;
if(cljs.core.truth_(or__61290__auto__)){
return or__61290__auto__;
} else {
return new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(self__.knowbase);
}
})());
var onyx_batch_size = (20);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dat.sync.core","/tmp/form-init3486417385122683475.clj",396,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (component__$2,onyx_batch_size,component__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Starting Datsync component"], null);
});})(component__$2,onyx_batch_size,component__$1))
,null)),null,1472180498);

dat.reactor.onyx.expand_job_BANG_.call(null,self__.reactor,new cljs.core.Keyword("dat.sync.core","base-job","dat.sync.core/base-job",-905963843),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"catalog","catalog",-439057154),dat.sync.core.base_catalog], null));

dat.reactor.onyx.expand_job_BANG_.call(null,self__.reactor,new cljs.core.Keyword("dat.sync.core","job","dat.sync.core/job",-1517777540),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"catalog","catalog",-439057154),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("onyx","type","onyx/type",1170345418),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword("onyx","name","onyx/name",1848664427),new cljs.core.Keyword("dat.reactor","legacy","dat.reactor/legacy",546320112),new cljs.core.Keyword("dat.reactor","chan","dat.reactor/chan",1738071800),dat.reactor.onyx.handler_chan_BANG_.call(null,component__$2,dat.reactor.onyx.legacy_segment_BANG_),new cljs.core.Keyword("onyx","batch-size","onyx/batch-size",1209135837),onyx_batch_size], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("onyx","type","onyx/type",1170345418),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword("onyx","batch-size","onyx/batch-size",1209135837),onyx_batch_size,new cljs.core.Keyword("dat.reactor","chan","dat.reactor/chan",1738071800),dat.spec.protocols.recv_chan.call(null,self__.dispatcher),new cljs.core.Keyword("onyx","name","onyx/name",1848664427),new cljs.core.Keyword("dat.view.dom","event","dat.view.dom/event",421950242)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("onyx","type","onyx/type",1170345418),new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.Keyword("onyx","name","onyx/name",1848664427),new cljs.core.Keyword("dat.sync","snap-transact","dat.sync/snap-transact",-1464985425),new cljs.core.Keyword("onyx","fn","onyx/fn",-1172046942),new cljs.core.Keyword("dat.sync.core","snap-transact","dat.sync.core/snap-transact",-983773274),new cljs.core.Keyword(null,"conn","conn",278309663),new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(self__.knowbase),new cljs.core.Keyword("onyx","params","onyx/params",716013253),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"conn","conn",278309663)], null),new cljs.core.Keyword("onyx","batch-size","onyx/batch-size",1209135837),onyx_batch_size], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("onyx","type","onyx/type",1170345418),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword("onyx","batch-size","onyx/batch-size",1209135837),onyx_batch_size,new cljs.core.Keyword("dat.reactor","chan","dat.reactor/chan",1738071800),dat.spec.protocols.send_chan.call(null,self__.dispatcher),new cljs.core.Keyword("onyx","name","onyx/name",1848664427),new cljs.core.Keyword("dat.view.dom","render","dat.view.dom/render",-1826044862)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("onyx","type","onyx/type",1170345418),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword("onyx","batch-size","onyx/batch-size",1209135837),onyx_batch_size,new cljs.core.Keyword("dat.reactor","chan","dat.reactor/chan",1738071800),dat.spec.protocols.recv_chan.call(null,self__.remote),new cljs.core.Keyword("onyx","name","onyx/name",1848664427),new cljs.core.Keyword("dat.remote","recv","dat.remote/recv",932956803)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("onyx","type","onyx/type",1170345418),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword("onyx","batch-size","onyx/batch-size",1209135837),onyx_batch_size,new cljs.core.Keyword("dat.reactor","chan","dat.reactor/chan",1738071800),dat.spec.protocols.send_chan.call(null,self__.remote),new cljs.core.Keyword("onyx","name","onyx/name",1848664427),new cljs.core.Keyword("dat.remote","send","dat.remote/send",-879753943)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("onyx","type","onyx/type",1170345418),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword("onyx","batch-size","onyx/batch-size",1209135837),onyx_batch_size,new cljs.core.Keyword("dat.reactor","chan","dat.reactor/chan",1738071800),dat.reactor.onyx.handler_chan_BANG_.call(null,self__.knowbase,dat.sync.core.transact_segment_BANG_),new cljs.core.Keyword("onyx","name","onyx/name",1848664427),new cljs.core.Keyword("dat.sync","transact","dat.sync/transact",-2010856764)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("onyx","type","onyx/type",1170345418),new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.Keyword("onyx","name","onyx/name",1848664427),new cljs.core.Keyword("dat.sync","localize","dat.sync/localize",-808866470),new cljs.core.Keyword("onyx","fn","onyx/fn",-1172046942),new cljs.core.Keyword("dat.sync.core","gdatoms->local-ds-txs","dat.sync.core/gdatoms->local-ds-txs",442291453),new cljs.core.Keyword("onyx","batch-size","onyx/batch-size",1209135837),onyx_batch_size], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("onyx","type","onyx/type",1170345418),new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.Keyword("onyx","name","onyx/name",1848664427),new cljs.core.Keyword("dat.sync","globalize","dat.sync/globalize",1796697559),new cljs.core.Keyword("onyx","fn","onyx/fn",-1172046942),new cljs.core.Keyword("dat.sync.core","tx-report->gdatoms","dat.sync.core/tx-report->gdatoms",17278585),new cljs.core.Keyword("onyx","batch-size","onyx/batch-size",1209135837),onyx_batch_size], null)], null),new cljs.core.Keyword(null,"workflow","workflow",-640694607),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.view.dom","event","dat.view.dom/event",421950242),new cljs.core.Keyword("dat.reactor","legacy","dat.reactor/legacy",546320112)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.remote","recv","dat.remote/recv",932956803),new cljs.core.Keyword("dat.reactor","legacy","dat.reactor/legacy",546320112)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.remote","recv","dat.remote/recv",932956803),new cljs.core.Keyword("dat.sync","localize","dat.sync/localize",-808866470)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.sync","localize","dat.sync/localize",-808866470),new cljs.core.Keyword("dat.sync","transact","dat.sync/transact",-2010856764)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.remote","recv","dat.remote/recv",932956803),new cljs.core.Keyword("dat.sync","localize","dat.sync/localize",-808866470)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.view.dom","event","dat.view.dom/event",421950242),new cljs.core.Keyword("dat.sync","snap-transact","dat.sync/snap-transact",-1464985425)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.sync","snap-transact","dat.sync/snap-transact",-1464985425),new cljs.core.Keyword("dat.sync","globalize","dat.sync/globalize",1796697559)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.sync","globalize","dat.sync/globalize",1796697559),new cljs.core.Keyword("dat.remote","send","dat.remote/send",-879753943)], null)], null),new cljs.core.Keyword(null,"flow-conditions","flow-conditions",-833083495),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("flow","from","flow/from",1812137506),new cljs.core.Keyword("dat.view.dom","event","dat.view.dom/event",421950242),new cljs.core.Keyword("flow","to","flow/to",188953993),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.sync","snap-transact","dat.sync/snap-transact",-1464985425)], null),new cljs.core.Keyword("flow","predicate","flow/predicate",-1745647926),new cljs.core.Keyword("dat.sync.core","transaction?","dat.sync.core/transaction?",1543373224)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("flow","from","flow/from",1812137506),new cljs.core.Keyword("dat.remote","recv","dat.remote/recv",932956803),new cljs.core.Keyword("flow","to","flow/to",188953993),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.sync","localize","dat.sync/localize",-808866470)], null),new cljs.core.Keyword("flow","predicate","flow/predicate",-1745647926),new cljs.core.Keyword("dat.sync.core","snapshot?","dat.sync.core/snapshot?",1853671883)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("flow","from","flow/from",1812137506),new cljs.core.Keyword("dat.remote","recv","dat.remote/recv",932956803),new cljs.core.Keyword("flow","to","flow/to",188953993),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.sync","localize","dat.sync/localize",-808866470)], null),new cljs.core.Keyword("flow","predicate","flow/predicate",-1745647926),new cljs.core.Keyword("dat.sync.core","localize?","dat.sync.core/localize?",1454212335)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("flow","from","flow/from",1812137506),new cljs.core.Keyword("dat.view.dom","event","dat.view.dom/event",421950242),new cljs.core.Keyword("flow","to","flow/to",188953993),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.reactor","legacy","dat.reactor/legacy",546320112)], null),new cljs.core.Keyword("flow","predicate","flow/predicate",-1745647926),new cljs.core.Keyword("dat.sync.core","legacy?","dat.sync.core/legacy?",-304022752)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("flow","from","flow/from",1812137506),new cljs.core.Keyword("dat.remote","recv","dat.remote/recv",932956803),new cljs.core.Keyword("flow","to","flow/to",188953993),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.reactor","legacy","dat.reactor/legacy",546320112)], null),new cljs.core.Keyword("flow","predicate","flow/predicate",-1745647926),new cljs.core.Keyword("dat.sync.core","legacy?","dat.sync.core/legacy?",-304022752)], null)], null)], null));

return component__$2;
});

dat.sync.core.DatsyncClient.prototype.com$stuartsierra$component$Lifecycle$stop$arity$1 = (function (component){
var self__ = this;
var component__$1 = this;
return cljs.core.assoc.call(null,component__$1,new cljs.core.Keyword(null,"conn","conn",278309663),null);
});

dat.sync.core.DatsyncClient.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dispatcher","dispatcher",2093752659,null),new cljs.core.Symbol(null,"remote","remote",46954951,null),new cljs.core.Symbol(null,"reactor","reactor",-2118853497,null),new cljs.core.Symbol(null,"knowbase","knowbase",1508469935,null),new cljs.core.Symbol(null,"conn","conn",1918841190,null)], null);
});

dat.sync.core.DatsyncClient.cljs$lang$type = true;

dat.sync.core.DatsyncClient.cljs$lang$ctorPrSeq = (function (this__62065__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"dat.sync.core/DatsyncClient");
});

dat.sync.core.DatsyncClient.cljs$lang$ctorPrWriter = (function (this__62065__auto__,writer__62066__auto__){
return cljs.core._write.call(null,writer__62066__auto__,"dat.sync.core/DatsyncClient");
});

dat.sync.core.__GT_DatsyncClient = (function dat$sync$core$__GT_DatsyncClient(dispatcher,remote,reactor,knowbase,conn){
return (new dat.sync.core.DatsyncClient(dispatcher,remote,reactor,knowbase,conn,null,null,null));
});

dat.sync.core.map__GT_DatsyncClient = (function dat$sync$core$map__GT_DatsyncClient(G__66240){
return (new dat.sync.core.DatsyncClient(new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132).cljs$core$IFn$_invoke$arity$1(G__66240),new cljs.core.Keyword(null,"remote","remote",-1593576576).cljs$core$IFn$_invoke$arity$1(G__66240),new cljs.core.Keyword(null,"reactor","reactor",535582272).cljs$core$IFn$_invoke$arity$1(G__66240),new cljs.core.Keyword(null,"knowbase","knowbase",-132061592).cljs$core$IFn$_invoke$arity$1(G__66240),new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(G__66240),null,cljs.core.dissoc.call(null,G__66240,new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132),new cljs.core.Keyword(null,"remote","remote",-1593576576),new cljs.core.Keyword(null,"reactor","reactor",535582272),new cljs.core.Keyword(null,"knowbase","knowbase",-132061592),new cljs.core.Keyword(null,"conn","conn",278309663)),null));
});

dat.sync.core.new_datsync_client = (function dat$sync$core$new_datsync_client(){
return dat.sync.core.map__GT_DatsyncClient.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {com.stuartsierra.component.Lifecycle}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
dat.sync.core.DatsyncServer = (function (dispatcher,remote,knowbase,reactor,__meta,__extmap,__hash){
this.dispatcher = dispatcher;
this.remote = remote;
this.knowbase = knowbase;
this.reactor = reactor;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
dat.sync.core.DatsyncServer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__62029__auto__,k__62030__auto__){
var self__ = this;
var this__62029__auto____$1 = this;
return this__62029__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__62030__auto__,null);
});

dat.sync.core.DatsyncServer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__62031__auto__,k66247,else__62032__auto__){
var self__ = this;
var this__62031__auto____$1 = this;
var G__66249 = k66247;
var G__66249__$1 = (((G__66249 instanceof cljs.core.Keyword))?G__66249.fqn:null);
switch (G__66249__$1) {
case "dispatcher":
return self__.dispatcher;

break;
case "remote":
return self__.remote;

break;
case "knowbase":
return self__.knowbase;

break;
case "reactor":
return self__.reactor;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k66247,else__62032__auto__);

}
});

dat.sync.core.DatsyncServer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__62043__auto__,writer__62044__auto__,opts__62045__auto__){
var self__ = this;
var this__62043__auto____$1 = this;
var pr_pair__62046__auto__ = ((function (this__62043__auto____$1){
return (function (keyval__62047__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__62044__auto__,cljs.core.pr_writer,""," ","",opts__62045__auto__,keyval__62047__auto__);
});})(this__62043__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__62044__auto__,pr_pair__62046__auto__,"#dat.sync.core.DatsyncServer{",", ","}",opts__62045__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132),self__.dispatcher],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"remote","remote",-1593576576),self__.remote],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"knowbase","knowbase",-132061592),self__.knowbase],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reactor","reactor",535582272),self__.reactor],null))], null),self__.__extmap));
});

dat.sync.core.DatsyncServer.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

dat.sync.core.DatsyncServer.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__66246){
var self__ = this;
var G__66246__$1 = this;
return (new cljs.core.RecordIter((0),G__66246__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132),new cljs.core.Keyword(null,"remote","remote",-1593576576),new cljs.core.Keyword(null,"knowbase","knowbase",-132061592),new cljs.core.Keyword(null,"reactor","reactor",535582272)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

dat.sync.core.DatsyncServer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__62027__auto__){
var self__ = this;
var this__62027__auto____$1 = this;
return self__.__meta;
});

dat.sync.core.DatsyncServer.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__62023__auto__){
var self__ = this;
var this__62023__auto____$1 = this;
return (new dat.sync.core.DatsyncServer(self__.dispatcher,self__.remote,self__.knowbase,self__.reactor,self__.__meta,self__.__extmap,self__.__hash));
});

dat.sync.core.DatsyncServer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__62033__auto__){
var self__ = this;
var this__62033__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

dat.sync.core.DatsyncServer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__62024__auto__){
var self__ = this;
var this__62024__auto____$1 = this;
var h__61796__auto__ = self__.__hash;
if(!((h__61796__auto__ == null))){
return h__61796__auto__;
} else {
var h__61796__auto____$1 = cljs.core.hash_imap.call(null,this__62024__auto____$1);
self__.__hash = h__61796__auto____$1;

return h__61796__auto____$1;
}
});

dat.sync.core.DatsyncServer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__62025__auto__,other__62026__auto__){
var self__ = this;
var this__62025__auto____$1 = this;
if(cljs.core.truth_((function (){var and__61271__auto__ = other__62026__auto__;
if(cljs.core.truth_(and__61271__auto__)){
return ((this__62025__auto____$1.constructor === other__62026__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__62025__auto____$1,other__62026__auto__));
} else {
return and__61271__auto__;
}
})())){
return true;
} else {
return false;
}
});

dat.sync.core.DatsyncServer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__62038__auto__,k__62039__auto__){
var self__ = this;
var this__62038__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reactor","reactor",535582272),null,new cljs.core.Keyword(null,"remote","remote",-1593576576),null,new cljs.core.Keyword(null,"knowbase","knowbase",-132061592),null,new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132),null], null), null),k__62039__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__62038__auto____$1),self__.__meta),k__62039__auto__);
} else {
return (new dat.sync.core.DatsyncServer(self__.dispatcher,self__.remote,self__.knowbase,self__.reactor,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__62039__auto__)),null));
}
});

dat.sync.core.DatsyncServer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__62036__auto__,k__62037__auto__,G__66246){
var self__ = this;
var this__62036__auto____$1 = this;
var pred__66250 = cljs.core.keyword_identical_QMARK_;
var expr__66251 = k__62037__auto__;
if(cljs.core.truth_(pred__66250.call(null,new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132),expr__66251))){
return (new dat.sync.core.DatsyncServer(G__66246,self__.remote,self__.knowbase,self__.reactor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__66250.call(null,new cljs.core.Keyword(null,"remote","remote",-1593576576),expr__66251))){
return (new dat.sync.core.DatsyncServer(self__.dispatcher,G__66246,self__.knowbase,self__.reactor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__66250.call(null,new cljs.core.Keyword(null,"knowbase","knowbase",-132061592),expr__66251))){
return (new dat.sync.core.DatsyncServer(self__.dispatcher,self__.remote,G__66246,self__.reactor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__66250.call(null,new cljs.core.Keyword(null,"reactor","reactor",535582272),expr__66251))){
return (new dat.sync.core.DatsyncServer(self__.dispatcher,self__.remote,self__.knowbase,G__66246,self__.__meta,self__.__extmap,null));
} else {
return (new dat.sync.core.DatsyncServer(self__.dispatcher,self__.remote,self__.knowbase,self__.reactor,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__62037__auto__,G__66246),null));
}
}
}
}
});

dat.sync.core.DatsyncServer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__62041__auto__){
var self__ = this;
var this__62041__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132),self__.dispatcher],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"remote","remote",-1593576576),self__.remote],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"knowbase","knowbase",-132061592),self__.knowbase],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reactor","reactor",535582272),self__.reactor],null))], null),self__.__extmap));
});

dat.sync.core.DatsyncServer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__62028__auto__,G__66246){
var self__ = this;
var this__62028__auto____$1 = this;
return (new dat.sync.core.DatsyncServer(self__.dispatcher,self__.remote,self__.knowbase,self__.reactor,G__66246,self__.__extmap,self__.__hash));
});

dat.sync.core.DatsyncServer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__62034__auto__,entry__62035__auto__){
var self__ = this;
var this__62034__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__62035__auto__)){
return this__62034__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__62035__auto__,(0)),cljs.core._nth.call(null,entry__62035__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__62034__auto____$1,entry__62035__auto__);
}
});

dat.sync.core.DatsyncServer.prototype.com$stuartsierra$component$Lifecycle$ = cljs.core.PROTOCOL_SENTINEL;

dat.sync.core.DatsyncServer.prototype.com$stuartsierra$component$Lifecycle$start$arity$1 = (function (component){
var self__ = this;
var component__$1 = this;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dat.sync.core","/tmp/form-init3486417385122683475.clj",516,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (component__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Starting Datsync Server component"], null);
});})(component__$1))
,null)),null,-1062505476);

dat.reactor.onyx.expand_job_BANG_.call(null,self__.reactor,new cljs.core.Keyword("dat.sync.core","base-job","dat.sync.core/base-job",-905963843),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"catalog","catalog",-439057154),dat.sync.core.base_catalog], null));

dat.reactor.onyx.expand_job_BANG_.call(null,self__.reactor,new cljs.core.Keyword("dat.sync.core","job","dat.sync.core/job",-1517777540),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"catalog","catalog",-439057154),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("onyx","type","onyx/type",1170345418),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword("onyx","name","onyx/name",1848664427),new cljs.core.Keyword("dat.reactor","legacy","dat.reactor/legacy",546320112),new cljs.core.Keyword("dat.reactor","chan","dat.reactor/chan",1738071800),dat.reactor.onyx.handler_chan_BANG_.call(null,component__$1,dat.sync.core.legacy_server_segment_BANG_),new cljs.core.Keyword("onyx","batch-size","onyx/batch-size",1209135837),dat.sync.core.onyx_batch_size], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("onyx","type","onyx/type",1170345418),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword("onyx","batch-size","onyx/batch-size",1209135837),dat.sync.core.onyx_batch_size,new cljs.core.Keyword("dat.reactor","chan","dat.reactor/chan",1738071800),dat.spec.protocols.recv_chan.call(null,self__.dispatcher),new cljs.core.Keyword("onyx","name","onyx/name",1848664427),new cljs.core.Keyword("dat.view.dom","event","dat.view.dom/event",421950242)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("onyx","type","onyx/type",1170345418),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword("onyx","batch-size","onyx/batch-size",1209135837),dat.sync.core.onyx_batch_size,new cljs.core.Keyword("dat.reactor","chan","dat.reactor/chan",1738071800),dat.spec.protocols.recv_chan.call(null,self__.remote),new cljs.core.Keyword("onyx","name","onyx/name",1848664427),new cljs.core.Keyword("dat.remote","recv","dat.remote/recv",932956803)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("onyx","type","onyx/type",1170345418),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword("onyx","batch-size","onyx/batch-size",1209135837),dat.sync.core.onyx_batch_size,new cljs.core.Keyword("dat.reactor","chan","dat.reactor/chan",1738071800),dat.spec.protocols.send_chan.call(null,self__.remote),new cljs.core.Keyword("onyx","name","onyx/name",1848664427),new cljs.core.Keyword("dat.remote","send","dat.remote/send",-879753943)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("onyx","type","onyx/type",1170345418),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword("onyx","batch-size","onyx/batch-size",1209135837),dat.sync.core.onyx_batch_size,new cljs.core.Keyword("dat.reactor","chan","dat.reactor/chan",1738071800),dat.spec.protocols.recv_chan.call(null,self__.knowbase),new cljs.core.Keyword("onyx","name","onyx/name",1848664427),new cljs.core.Keyword("dat.sync","tx-report","dat.sync/tx-report",1237006785)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("onyx","type","onyx/type",1170345418),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword("onyx","batch-size","onyx/batch-size",1209135837),dat.sync.core.onyx_batch_size,new cljs.core.Keyword("dat.reactor","chan","dat.reactor/chan",1738071800),dat.reactor.onyx.handler_chan_BANG_.call(null,self__.knowbase,dat.sync.core.transact_segment_BANG_),new cljs.core.Keyword("onyx","name","onyx/name",1848664427),new cljs.core.Keyword("dat.sync","transact","dat.sync/transact",-2010856764)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("onyx","type","onyx/type",1170345418),new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.Keyword("onyx","name","onyx/name",1848664427),new cljs.core.Keyword("dat.sync","localize","dat.sync/localize",-808866470),new cljs.core.Keyword("onyx","fn","onyx/fn",-1172046942),new cljs.core.Keyword("dat.sync.core","gdatoms->local-ds-txs","dat.sync.core/gdatoms->local-ds-txs",442291453),new cljs.core.Keyword("onyx","batch-size","onyx/batch-size",1209135837),dat.sync.core.onyx_batch_size], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("onyx","type","onyx/type",1170345418),new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.Keyword("onyx","name","onyx/name",1848664427),new cljs.core.Keyword("dat.sync","globalize","dat.sync/globalize",1796697559),new cljs.core.Keyword("onyx","fn","onyx/fn",-1172046942),new cljs.core.Keyword("dat.sync.core","tx-report->gdatoms","dat.sync.core/tx-report->gdatoms",17278585),new cljs.core.Keyword("onyx","batch-size","onyx/batch-size",1209135837),dat.sync.core.onyx_batch_size], null)], null),new cljs.core.Keyword(null,"workflow","workflow",-640694607),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.view.dom","event","dat.view.dom/event",421950242),new cljs.core.Keyword("dat.reactor","legacy","dat.reactor/legacy",546320112)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.remote","recv","dat.remote/recv",932956803),new cljs.core.Keyword("dat.reactor","legacy","dat.reactor/legacy",546320112)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.remote","recv","dat.remote/recv",932956803),new cljs.core.Keyword("dat.sync.core","snapshot","dat.sync.core/snapshot",-2139746629)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.sync.core","snapshot","dat.sync.core/snapshot",-2139746629),new cljs.core.Keyword("dat.remote","send","dat.remote/send",-879753943)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.remote","recv","dat.remote/recv",932956803),new cljs.core.Keyword("dat.sync.core","split-id-datoms","dat.sync.core/split-id-datoms",1628297286)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.sync.core","split-id-datoms","dat.sync.core/split-id-datoms",1628297286),new cljs.core.Keyword("dat.sync","localize","dat.sync/localize",-808866470)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.sync","localize","dat.sync/localize",-808866470),new cljs.core.Keyword("dat.sync","transact","dat.sync/transact",-2010856764)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.sync","tx-report","dat.sync/tx-report",1237006785),new cljs.core.Keyword("dat.sync","globalize","dat.sync/globalize",1796697559)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.sync","globalize","dat.sync/globalize",1796697559),new cljs.core.Keyword("dat.remote","send","dat.remote/send",-879753943)], null)], null),new cljs.core.Keyword(null,"flow-conditions","flow-conditions",-833083495),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("flow","from","flow/from",1812137506),new cljs.core.Keyword("dat.remote","recv","dat.remote/recv",932956803),new cljs.core.Keyword("flow","to","flow/to",188953993),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.sync.core","snapshot","dat.sync.core/snapshot",-2139746629)], null),new cljs.core.Keyword("flow","predicate","flow/predicate",-1745647926),new cljs.core.Keyword("dat.sync.core","request-snapshot?","dat.sync.core/request-snapshot?",312355278)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("flow","from","flow/from",1812137506),new cljs.core.Keyword("dat.remote","recv","dat.remote/recv",932956803),new cljs.core.Keyword("flow","to","flow/to",188953993),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.sync.core","split-id-datoms","dat.sync.core/split-id-datoms",1628297286)], null),new cljs.core.Keyword("flow","predicate","flow/predicate",-1745647926),new cljs.core.Keyword("dat.sync.core","localize?","dat.sync.core/localize?",1454212335)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("flow","from","flow/from",1812137506),new cljs.core.Keyword("dat.view.dom","event","dat.view.dom/event",421950242),new cljs.core.Keyword("flow","to","flow/to",188953993),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.reactor","legacy","dat.reactor/legacy",546320112)], null),new cljs.core.Keyword("flow","predicate","flow/predicate",-1745647926),new cljs.core.Keyword("dat.sync.core","legacy?","dat.sync.core/legacy?",-304022752)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("flow","from","flow/from",1812137506),new cljs.core.Keyword("dat.remote","recv","dat.remote/recv",932956803),new cljs.core.Keyword("flow","to","flow/to",188953993),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.reactor","legacy","dat.reactor/legacy",546320112)], null),new cljs.core.Keyword("flow","predicate","flow/predicate",-1745647926),new cljs.core.Keyword("dat.sync.core","legacy?","dat.sync.core/legacy?",-304022752)], null)], null)], null));

return component__$1;
});

dat.sync.core.DatsyncServer.prototype.com$stuartsierra$component$Lifecycle$stop$arity$1 = (function (component){
var self__ = this;
var component__$1 = this;
return component__$1;
});

dat.sync.core.DatsyncServer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dispatcher","dispatcher",2093752659,null),new cljs.core.Symbol(null,"remote","remote",46954951,null),new cljs.core.Symbol(null,"knowbase","knowbase",1508469935,null),new cljs.core.Symbol(null,"reactor","reactor",-2118853497,null)], null);
});

dat.sync.core.DatsyncServer.cljs$lang$type = true;

dat.sync.core.DatsyncServer.cljs$lang$ctorPrSeq = (function (this__62065__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"dat.sync.core/DatsyncServer");
});

dat.sync.core.DatsyncServer.cljs$lang$ctorPrWriter = (function (this__62065__auto__,writer__62066__auto__){
return cljs.core._write.call(null,writer__62066__auto__,"dat.sync.core/DatsyncServer");
});

dat.sync.core.__GT_DatsyncServer = (function dat$sync$core$__GT_DatsyncServer(dispatcher,remote,knowbase,reactor){
return (new dat.sync.core.DatsyncServer(dispatcher,remote,knowbase,reactor,null,null,null));
});

dat.sync.core.map__GT_DatsyncServer = (function dat$sync$core$map__GT_DatsyncServer(G__66248){
return (new dat.sync.core.DatsyncServer(new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132).cljs$core$IFn$_invoke$arity$1(G__66248),new cljs.core.Keyword(null,"remote","remote",-1593576576).cljs$core$IFn$_invoke$arity$1(G__66248),new cljs.core.Keyword(null,"knowbase","knowbase",-132061592).cljs$core$IFn$_invoke$arity$1(G__66248),new cljs.core.Keyword(null,"reactor","reactor",535582272).cljs$core$IFn$_invoke$arity$1(G__66248),null,cljs.core.dissoc.call(null,G__66248,new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132),new cljs.core.Keyword(null,"remote","remote",-1593576576),new cljs.core.Keyword(null,"knowbase","knowbase",-132061592),new cljs.core.Keyword(null,"reactor","reactor",535582272)),null));
});

dat.sync.core.new_datsync_server = (function dat$sync$core$new_datsync_server(){
return dat.sync.core.map__GT_DatsyncServer.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

//# sourceMappingURL=core.js.map?rel=1506321313900