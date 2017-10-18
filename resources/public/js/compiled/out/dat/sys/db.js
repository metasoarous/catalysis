// Compiled by ClojureScript 1.9.542 {}
goog.provide('dat.sys.db');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('taoensso.timbre');
goog.require('dat.sync.core');
goog.require('dat.sync.db');
goog.require('datascript.core');
goog.require('datascript.db');
goog.require('dat.view');
goog.require('dat.spec.protocols');
goog.require('dat.sys.utils');
goog.require('io.rkn.conformity.core');
goog.require('com.stuartsierra.component');
dat.sys.db.bare_bones_schema = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)], null),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null),new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null),new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null),new cljs.core.Keyword("dat.sync","uuid","dat.sync/uuid",-402536853),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)], null)], null);
dat.sys.db.enum_idents = new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.cardinality","one","db.cardinality/one",1428352190)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.unique","value","db.unique/value",276903088)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.type","keyword","db.type/keyword",205926793)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.type","string","db.type/string",1432572808)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.type","boolean","db.type/boolean",-645454270)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.type","long","db.type/long",700514073)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.type","bigint","db.type/bigint",774640017)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.type","float","db.type/float",-315575090)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.type","double","db.type/double",-521884231)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.type","bigdec","db.type/bigdec",1626126666)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.type","instant","db.type/instant",-1024769248)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.type","uuid","db.type/uuid",1543195203)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.type","uri","db.type/uri",-437575613)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.type","bytes","db.type/bytes",-1439792254)], null)], null);
dat.sys.db.schema_idents = new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","keyword","db.type/keyword",205926793),new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db","doc","db/doc",1913350069),new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","string","db.type/string",1432572808)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db","index","db/index",-1531680669),new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","boolean","db.type/boolean",-645454270)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db","fulltext","db/fulltext",-1432910705),new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","boolean","db.type/boolean",-645454270)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db","isComponent","db/isComponent",423352398),new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","boolean","db.type/boolean",-645454270)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db","noHistory","db/noHistory",-1975127444),new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","boolean","db.type/boolean",-645454270)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.install","attribute","db.install/attribute",-225839074),new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.alter","attribute","db.alter/attribute",1551890331),new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.install","partition","db.install/partition",-1744031140),new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.part","db","db.part/db",-2028116570)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.part","user","db.part/user",-546775899)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.part","tx","db.part/tx",-1480923213)], null)], null);
dat.sys.db.ensure_schema_datascript_BANG_ = (function dat$sys$db$ensure_schema_datascript_BANG_(conn){
var seq__75401 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dat.sys.db.enum_idents,dat.sys.db.schema_idents], null));
var chunk__75402 = null;
var count__75403 = (0);
var i__75404 = (0);
while(true){
if((i__75404 < count__75403)){
var txs = cljs.core._nth.call(null,chunk__75402,i__75404);
dat.sync.db.transact_BANG_.call(null,conn,txs);

var G__75405 = seq__75401;
var G__75406 = chunk__75402;
var G__75407 = count__75403;
var G__75408 = (i__75404 + (1));
seq__75401 = G__75405;
chunk__75402 = G__75406;
count__75403 = G__75407;
i__75404 = G__75408;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__75401);
if(temp__6738__auto__){
var seq__75401__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__75401__$1)){
var c__62265__auto__ = cljs.core.chunk_first.call(null,seq__75401__$1);
var G__75409 = cljs.core.chunk_rest.call(null,seq__75401__$1);
var G__75410 = c__62265__auto__;
var G__75411 = cljs.core.count.call(null,c__62265__auto__);
var G__75412 = (0);
seq__75401 = G__75409;
chunk__75402 = G__75410;
count__75403 = G__75411;
i__75404 = G__75412;
continue;
} else {
var txs = cljs.core.first.call(null,seq__75401__$1);
dat.sync.db.transact_BANG_.call(null,conn,txs);

var G__75413 = cljs.core.next.call(null,seq__75401__$1);
var G__75414 = null;
var G__75415 = (0);
var G__75416 = (0);
seq__75401 = G__75413;
chunk__75402 = G__75414;
count__75403 = G__75415;
i__75404 = G__75416;
continue;
}
} else {
return null;
}
}
break;
}
});
dat.sys.db.create_conn_BANG_ = (function dat$sys$db$create_conn_BANG_(kind,url,reset_on_start_QMARK_){
var G__75418 = kind;
var G__75418__$1 = (((G__75418 instanceof cljs.core.Keyword))?G__75418.fqn:null);
switch (G__75418__$1) {
case "datomic":
return new cljs.core.Keyword(null,"datascript","datascript",-2114593819);

break;
default:
var conn_from_storage = null;
var or__61290__auto__ = conn_from_storage;
if(cljs.core.truth_(or__61290__auto__)){
return or__61290__auto__;
} else {
return datascript.core.create_conn.call(null,dat.sys.db.bare_bones_schema);
}

}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {dat.spec.protocols.EventState}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {dat.spec.protocols.Wire}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {com.stuartsierra.component.Lifecycle}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
dat.sys.db.KnowledgeBase = (function (config,conn,tx_report_chan,kind,__meta,__extmap,__hash){
this.config = config;
this.conn = conn;
this.tx_report_chan = tx_report_chan;
this.kind = kind;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
dat.sys.db.KnowledgeBase.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__62029__auto__,k__62030__auto__){
var self__ = this;
var this__62029__auto____$1 = this;
return this__62029__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__62030__auto__,null);
});

dat.sys.db.KnowledgeBase.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__62031__auto__,k75422,else__62032__auto__){
var self__ = this;
var this__62031__auto____$1 = this;
var G__75424 = k75422;
var G__75424__$1 = (((G__75424 instanceof cljs.core.Keyword))?G__75424.fqn:null);
switch (G__75424__$1) {
case "config":
return self__.config;

break;
case "conn":
return self__.conn;

break;
case "tx-report-chan":
return self__.tx_report_chan;

break;
case "kind":
return self__.kind;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k75422,else__62032__auto__);

}
});

dat.sys.db.KnowledgeBase.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__62043__auto__,writer__62044__auto__,opts__62045__auto__){
var self__ = this;
var this__62043__auto____$1 = this;
var pr_pair__62046__auto__ = ((function (this__62043__auto____$1){
return (function (keyval__62047__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__62044__auto__,cljs.core.pr_writer,""," ","",opts__62045__auto__,keyval__62047__auto__);
});})(this__62043__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__62044__auto__,pr_pair__62046__auto__,"#dat.sys.db.KnowledgeBase{",", ","}",opts__62045__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"config","config",994861415),self__.config],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"conn","conn",278309663),self__.conn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tx-report-chan","tx-report-chan",267121033),self__.tx_report_chan],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kind","kind",-717265803),self__.kind],null))], null),self__.__extmap));
});

dat.sys.db.KnowledgeBase.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

dat.sys.db.KnowledgeBase.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__75421){
var self__ = this;
var G__75421__$1 = this;
return (new cljs.core.RecordIter((0),G__75421__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"conn","conn",278309663),new cljs.core.Keyword(null,"tx-report-chan","tx-report-chan",267121033),new cljs.core.Keyword(null,"kind","kind",-717265803)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

dat.sys.db.KnowledgeBase.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__62027__auto__){
var self__ = this;
var this__62027__auto____$1 = this;
return self__.__meta;
});

dat.sys.db.KnowledgeBase.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__62023__auto__){
var self__ = this;
var this__62023__auto____$1 = this;
return (new dat.sys.db.KnowledgeBase(self__.config,self__.conn,self__.tx_report_chan,self__.kind,self__.__meta,self__.__extmap,self__.__hash));
});

dat.sys.db.KnowledgeBase.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__62033__auto__){
var self__ = this;
var this__62033__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

dat.sys.db.KnowledgeBase.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__62024__auto__){
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

dat.sys.db.KnowledgeBase.prototype.dat$spec$protocols$EventState$ = cljs.core.PROTOCOL_SENTINEL;

dat.sys.db.KnowledgeBase.prototype.dat$spec$protocols$EventState$snapshot$arity$2 = (function (component,at){
var self__ = this;
var component__$1 = this;
return component__$1.dat$spec$protocols$EventState$snapshot$arity$1(null);
});

dat.sys.db.KnowledgeBase.prototype.dat$spec$protocols$EventState$snapshot$arity$1 = (function (component){
var self__ = this;
var component__$1 = this;
var db = cljs.core.deref.call(null,self__.conn);
return cljs.core.remove.call(null,cljs.core.partial.call(null,dat.sync.db.fn_datom_QMARK_,db),dat.sync.db.datoms.call(null,db,new cljs.core.Keyword(null,"eavt","eavt",-666437073)));
});

dat.sys.db.KnowledgeBase.prototype.dat$spec$protocols$EventState$events$arity$2 = (function (component,from){
var self__ = this;
var component__$1 = this;
return null;
});

dat.sys.db.KnowledgeBase.prototype.dat$spec$protocols$EventState$events$arity$3 = (function (component,from,to){
var self__ = this;
var component__$1 = this;
return null;
});

dat.sys.db.KnowledgeBase.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__62025__auto__,other__62026__auto__){
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

dat.sys.db.KnowledgeBase.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__62038__auto__,k__62039__auto__){
var self__ = this;
var this__62038__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"config","config",994861415),null,new cljs.core.Keyword(null,"tx-report-chan","tx-report-chan",267121033),null,new cljs.core.Keyword(null,"kind","kind",-717265803),null,new cljs.core.Keyword(null,"conn","conn",278309663),null], null), null),k__62039__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__62038__auto____$1),self__.__meta),k__62039__auto__);
} else {
return (new dat.sys.db.KnowledgeBase(self__.config,self__.conn,self__.tx_report_chan,self__.kind,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__62039__auto__)),null));
}
});

dat.sys.db.KnowledgeBase.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__62036__auto__,k__62037__auto__,G__75421){
var self__ = this;
var this__62036__auto____$1 = this;
var pred__75425 = cljs.core.keyword_identical_QMARK_;
var expr__75426 = k__62037__auto__;
if(cljs.core.truth_(pred__75425.call(null,new cljs.core.Keyword(null,"config","config",994861415),expr__75426))){
return (new dat.sys.db.KnowledgeBase(G__75421,self__.conn,self__.tx_report_chan,self__.kind,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__75425.call(null,new cljs.core.Keyword(null,"conn","conn",278309663),expr__75426))){
return (new dat.sys.db.KnowledgeBase(self__.config,G__75421,self__.tx_report_chan,self__.kind,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__75425.call(null,new cljs.core.Keyword(null,"tx-report-chan","tx-report-chan",267121033),expr__75426))){
return (new dat.sys.db.KnowledgeBase(self__.config,self__.conn,G__75421,self__.kind,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__75425.call(null,new cljs.core.Keyword(null,"kind","kind",-717265803),expr__75426))){
return (new dat.sys.db.KnowledgeBase(self__.config,self__.conn,self__.tx_report_chan,G__75421,self__.__meta,self__.__extmap,null));
} else {
return (new dat.sys.db.KnowledgeBase(self__.config,self__.conn,self__.tx_report_chan,self__.kind,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__62037__auto__,G__75421),null));
}
}
}
}
});

dat.sys.db.KnowledgeBase.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__62041__auto__){
var self__ = this;
var this__62041__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"config","config",994861415),self__.config],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"conn","conn",278309663),self__.conn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tx-report-chan","tx-report-chan",267121033),self__.tx_report_chan],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kind","kind",-717265803),self__.kind],null))], null),self__.__extmap));
});

dat.sys.db.KnowledgeBase.prototype.dat$spec$protocols$Wire$ = cljs.core.PROTOCOL_SENTINEL;

dat.sys.db.KnowledgeBase.prototype.dat$spec$protocols$Wire$send_chan$arity$1 = (function (c){
var self__ = this;
var c__$1 = this;
return null;
});

dat.sys.db.KnowledgeBase.prototype.dat$spec$protocols$Wire$recv_chan$arity$1 = (function (c){
var self__ = this;
var c__$1 = this;
return self__.tx_report_chan;
});

dat.sys.db.KnowledgeBase.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__62028__auto__,G__75421){
var self__ = this;
var this__62028__auto____$1 = this;
return (new dat.sys.db.KnowledgeBase(self__.config,self__.conn,self__.tx_report_chan,self__.kind,G__75421,self__.__extmap,self__.__hash));
});

dat.sys.db.KnowledgeBase.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__62034__auto__,entry__62035__auto__){
var self__ = this;
var this__62034__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__62035__auto__)){
return this__62034__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__62035__auto__,(0)),cljs.core._nth.call(null,entry__62035__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__62034__auto____$1,entry__62035__auto__);
}
});

dat.sys.db.KnowledgeBase.prototype.com$stuartsierra$component$Lifecycle$ = cljs.core.PROTOCOL_SENTINEL;

dat.sys.db.KnowledgeBase.prototype.com$stuartsierra$component$Lifecycle$start$arity$1 = (function (component){
var self__ = this;
var component__$1 = this;
var peer_type = new cljs.core.Keyword("dat.sync","client","dat.sync/client",693124697);
var reset_on_start_QMARK_ = cljs.core.get_in.call(null,self__.config,cljs.core.PersistentArrayMap.createAsIfByAssoc([peer_type,new cljs.core.Keyword(null,"reset-on-start?","reset-on-start?",-1890540983)]));
var kind__$1 = cljs.core.get_in.call(null,self__.config,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [peer_type,new cljs.core.Keyword(null,"kind","kind",-717265803)], null));
var url = cljs.core.get_in.call(null,self__.config,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [peer_type,new cljs.core.Keyword(null,"url","url",276297046)], null));
var conn__$1 = (function (){var or__61290__auto__ = self__.conn;
if(cljs.core.truth_(or__61290__auto__)){
return or__61290__auto__;
} else {
return dat.sys.db.create_conn_BANG_.call(null,kind__$1,url,reset_on_start_QMARK_);
}
})();
var tx_report_chan__$1 = (function (){var or__61290__auto__ = self__.tx_report_chan;
if(cljs.core.truth_(or__61290__auto__)){
return or__61290__auto__;
} else {
return cljs.core.async.chan.call(null);
}
})();
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dat.sys.db","/tmp/form-init3486417385122683475.clj",146,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (peer_type,reset_on_start_QMARK_,kind__$1,url,conn__$1,tx_report_chan__$1,component__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Knowbase Starting with kind: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(kind__$1)].join('')], null);
});})(peer_type,reset_on_start_QMARK_,kind__$1,url,conn__$1,tx_report_chan__$1,component__$1))
,null)),null,290294932);

var G__75428_75431 = kind__$1;
var G__75428_75432__$1 = (((G__75428_75431 instanceof cljs.core.Keyword))?G__75428_75431.fqn:null);
switch (G__75428_75432__$1) {
case "datascript":
dat.sys.db.ensure_schema_datascript_BANG_.call(null,conn__$1);

datascript.core.listen_BANG_.call(null,conn__$1,new cljs.core.Keyword("dat.sys.db","tx-report","dat.sys.db/tx-report",2005175461),((function (G__75428_75431,G__75428_75432__$1,peer_type,reset_on_start_QMARK_,kind__$1,url,conn__$1,tx_report_chan__$1,component__$1){
return (function (p1__75420_SHARP_){
return cljs.core.async.put_BANG_.call(null,tx_report_chan__$1,p1__75420_SHARP_);
});})(G__75428_75431,G__75428_75432__$1,peer_type,reset_on_start_QMARK_,kind__$1,url,conn__$1,tx_report_chan__$1,component__$1))
);

break;
case "datomic":

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(kind__$1)].join('')));

}

return cljs.core.assoc.call(null,component__$1,new cljs.core.Keyword(null,"kind","kind",-717265803),kind__$1,new cljs.core.Keyword(null,"conn","conn",278309663),dat.sync.db.conn_from_conn.call(null,conn__$1),new cljs.core.Keyword(null,"tx-report-chan","tx-report-chan",267121033),tx_report_chan__$1);
});

dat.sys.db.KnowledgeBase.prototype.com$stuartsierra$component$Lifecycle$stop$arity$1 = (function (component){
var self__ = this;
var component__$1 = this;
var G__75429_75434 = self__.kind;
var G__75429_75435__$1 = (((G__75429_75434 instanceof cljs.core.Keyword))?G__75429_75434.fqn:null);
switch (G__75429_75435__$1) {
case "datascript":
datascript.core.unlisten_BANG_.call(null,self__.conn,new cljs.core.Keyword("dat.sys.db","tx-report","dat.sys.db/tx-report",2005175461));

datascript.core.unlisten_BANG_.call(null,self__.conn,new cljs.core.Keyword("dat.sys.db","persist","dat.sys.db/persist",1194932050));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.kind)].join('')));

}

return cljs.core.assoc.call(null,component__$1,new cljs.core.Keyword(null,"kind","kind",-717265803),null,new cljs.core.Keyword(null,"conn","conn",278309663),null,new cljs.core.Keyword(null,"tx-report-chan","tx-report-chan",267121033),null);
});

dat.sys.db.KnowledgeBase.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"config","config",-1659574354,null),new cljs.core.Symbol(null,"conn","conn",1918841190,null),new cljs.core.Symbol(null,"tx-report-chan","tx-report-chan",1907652560,null),new cljs.core.Symbol(null,"kind","kind",923265724,null)], null);
});

dat.sys.db.KnowledgeBase.cljs$lang$type = true;

dat.sys.db.KnowledgeBase.cljs$lang$ctorPrSeq = (function (this__62065__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"dat.sys.db/KnowledgeBase");
});

dat.sys.db.KnowledgeBase.cljs$lang$ctorPrWriter = (function (this__62065__auto__,writer__62066__auto__){
return cljs.core._write.call(null,writer__62066__auto__,"dat.sys.db/KnowledgeBase");
});

dat.sys.db.__GT_KnowledgeBase = (function dat$sys$db$__GT_KnowledgeBase(config,conn,tx_report_chan,kind){
return (new dat.sys.db.KnowledgeBase(config,conn,tx_report_chan,kind,null,null,null));
});

dat.sys.db.map__GT_KnowledgeBase = (function dat$sys$db$map__GT_KnowledgeBase(G__75423){
return (new dat.sys.db.KnowledgeBase(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(G__75423),new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(G__75423),new cljs.core.Keyword(null,"tx-report-chan","tx-report-chan",267121033).cljs$core$IFn$_invoke$arity$1(G__75423),new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(G__75423),null,cljs.core.dissoc.call(null,G__75423,new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"conn","conn",278309663),new cljs.core.Keyword(null,"tx-report-chan","tx-report-chan",267121033),new cljs.core.Keyword(null,"kind","kind",-717265803)),null));
});

dat.sys.db.create_knowledge_base = (function dat$sys$db$create_knowledge_base(var_args){
var args75437 = [];
var len__62575__auto___75440 = arguments.length;
var i__62576__auto___75441 = (0);
while(true){
if((i__62576__auto___75441 < len__62575__auto___75440)){
args75437.push((arguments[i__62576__auto___75441]));

var G__75442 = (i__62576__auto___75441 + (1));
i__62576__auto___75441 = G__75442;
continue;
} else {
}
break;
}

var G__75439 = args75437.length;
switch (G__75439) {
case 0:
return dat.sys.db.create_knowledge_base.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return dat.sys.db.create_knowledge_base.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args75437.length)].join('')));

}
});

dat.sys.db.create_knowledge_base.cljs$core$IFn$_invoke$arity$0 = (function (){
return dat.sys.db.create_knowledge_base.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

dat.sys.db.create_knowledge_base.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return dat.sys.db.map__GT_KnowledgeBase.call(null,opts);
});

dat.sys.db.create_knowledge_base.cljs$lang$maxFixedArity = 1;


//# sourceMappingURL=db.js.map?rel=1506323312456