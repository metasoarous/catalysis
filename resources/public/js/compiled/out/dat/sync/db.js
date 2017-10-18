// Compiled by ClojureScript 1.9.542 {}
goog.provide('dat.sync.db');
goog.require('cljs.core');
goog.require('taoensso.timbre');
goog.require('datascript.core');
goog.require('datascript.db');
goog.require('dat.spec.protocols');
goog.require('dat.spec.utils');
goog.require('com.rpl.specter');

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
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
dat.sync.db.DereffingDB = (function (conn,deref_fn,kind,__meta,__extmap,__hash){
this.conn = conn;
this.deref_fn = deref_fn;
this.kind = kind;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229700362;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
dat.sync.db.DereffingDB.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__61574__auto__,k__61575__auto__){
var self__ = this;
var this__61574__auto____$1 = this;
return this__61574__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__61575__auto__,null);
});

dat.sync.db.DereffingDB.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__61576__auto__,k92652,else__61577__auto__){
var self__ = this;
var this__61576__auto____$1 = this;
var G__92654 = k92652;
var G__92654__$1 = (((G__92654 instanceof cljs.core.Keyword))?G__92654.fqn:null);
switch (G__92654__$1) {
case "conn":
return self__.conn;

break;
case "deref-fn":
return self__.deref_fn;

break;
case "kind":
return self__.kind;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k92652,else__61577__auto__);

}
});

dat.sync.db.DereffingDB.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__61588__auto__,writer__61589__auto__,opts__61590__auto__){
var self__ = this;
var this__61588__auto____$1 = this;
var pr_pair__61591__auto__ = ((function (this__61588__auto____$1){
return (function (keyval__61592__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__61589__auto__,cljs.core.pr_writer,""," ","",opts__61590__auto__,keyval__61592__auto__);
});})(this__61588__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__61589__auto__,pr_pair__61591__auto__,"#dat.sync.db.DereffingDB{",", ","}",opts__61590__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"conn","conn",278309663),self__.conn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"deref-fn","deref-fn",1583490450),self__.deref_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kind","kind",-717265803),self__.kind],null))], null),self__.__extmap));
});

dat.sync.db.DereffingDB.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

dat.sync.db.DereffingDB.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__92651){
var self__ = this;
var G__92651__$1 = this;
return (new cljs.core.RecordIter((0),G__92651__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"conn","conn",278309663),new cljs.core.Keyword(null,"deref-fn","deref-fn",1583490450),new cljs.core.Keyword(null,"kind","kind",-717265803)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

dat.sync.db.DereffingDB.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__61572__auto__){
var self__ = this;
var this__61572__auto____$1 = this;
return self__.__meta;
});

dat.sync.db.DereffingDB.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__61568__auto__){
var self__ = this;
var this__61568__auto____$1 = this;
return (new dat.sync.db.DereffingDB(self__.conn,self__.deref_fn,self__.kind,self__.__meta,self__.__extmap,self__.__hash));
});

dat.sync.db.DereffingDB.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__61578__auto__){
var self__ = this;
var this__61578__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

dat.sync.db.DereffingDB.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__61569__auto__){
var self__ = this;
var this__61569__auto____$1 = this;
var h__61341__auto__ = self__.__hash;
if(!((h__61341__auto__ == null))){
return h__61341__auto__;
} else {
var h__61341__auto____$1 = cljs.core.hash_imap.call(null,this__61569__auto____$1);
self__.__hash = h__61341__auto____$1;

return h__61341__auto____$1;
}
});

dat.sync.db.DereffingDB.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__61570__auto__,other__61571__auto__){
var self__ = this;
var this__61570__auto____$1 = this;
if(cljs.core.truth_((function (){var and__60887__auto__ = other__61571__auto__;
if(cljs.core.truth_(and__60887__auto__)){
return ((this__61570__auto____$1.constructor === other__61571__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__61570__auto____$1,other__61571__auto__));
} else {
return and__60887__auto__;
}
})())){
return true;
} else {
return false;
}
});

dat.sync.db.DereffingDB.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__61583__auto__,k__61584__auto__){
var self__ = this;
var this__61583__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"deref-fn","deref-fn",1583490450),null,new cljs.core.Keyword(null,"kind","kind",-717265803),null,new cljs.core.Keyword(null,"conn","conn",278309663),null], null), null),k__61584__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__61583__auto____$1),self__.__meta),k__61584__auto__);
} else {
return (new dat.sync.db.DereffingDB(self__.conn,self__.deref_fn,self__.kind,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__61584__auto__)),null));
}
});

dat.sync.db.DereffingDB.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__61581__auto__,k__61582__auto__,G__92651){
var self__ = this;
var this__61581__auto____$1 = this;
var pred__92655 = cljs.core.keyword_identical_QMARK_;
var expr__92656 = k__61582__auto__;
if(cljs.core.truth_(pred__92655.call(null,new cljs.core.Keyword(null,"conn","conn",278309663),expr__92656))){
return (new dat.sync.db.DereffingDB(G__92651,self__.deref_fn,self__.kind,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__92655.call(null,new cljs.core.Keyword(null,"deref-fn","deref-fn",1583490450),expr__92656))){
return (new dat.sync.db.DereffingDB(self__.conn,G__92651,self__.kind,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__92655.call(null,new cljs.core.Keyword(null,"kind","kind",-717265803),expr__92656))){
return (new dat.sync.db.DereffingDB(self__.conn,self__.deref_fn,G__92651,self__.__meta,self__.__extmap,null));
} else {
return (new dat.sync.db.DereffingDB(self__.conn,self__.deref_fn,self__.kind,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__61582__auto__,G__92651),null));
}
}
}
});

dat.sync.db.DereffingDB.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__61586__auto__){
var self__ = this;
var this__61586__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"conn","conn",278309663),self__.conn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"deref-fn","deref-fn",1583490450),self__.deref_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kind","kind",-717265803),self__.kind],null))], null),self__.__extmap));
});

dat.sync.db.DereffingDB.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__61573__auto__,G__92651){
var self__ = this;
var this__61573__auto____$1 = this;
return (new dat.sync.db.DereffingDB(self__.conn,self__.deref_fn,self__.kind,G__92651,self__.__extmap,self__.__hash));
});

dat.sync.db.DereffingDB.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__61579__auto__,entry__61580__auto__){
var self__ = this;
var this__61579__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__61580__auto__)){
return this__61579__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__61580__auto__,(0)),cljs.core._nth.call(null,entry__61580__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__61579__auto____$1,entry__61580__auto__);
}
});

dat.sync.db.DereffingDB.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (function (){var or__60899__auto__ = self__.deref_fn;
if(cljs.core.truth_(or__60899__auto__)){
return or__60899__auto__;
} else {
return cljs.core.deref;
}
})().call(null,self__.conn);
});

dat.sync.db.DereffingDB.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"conn","conn",1918841190,null),new cljs.core.Symbol(null,"deref-fn","deref-fn",-1070945319,null),new cljs.core.Symbol(null,"kind","kind",923265724,null)], null);
});

dat.sync.db.DereffingDB.cljs$lang$type = true;

dat.sync.db.DereffingDB.cljs$lang$ctorPrSeq = (function (this__61610__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"dat.sync.db/DereffingDB");
});

dat.sync.db.DereffingDB.cljs$lang$ctorPrWriter = (function (this__61610__auto__,writer__61611__auto__){
return cljs.core._write.call(null,writer__61611__auto__,"dat.sync.db/DereffingDB");
});

dat.sync.db.__GT_DereffingDB = (function dat$sync$db$__GT_DereffingDB(conn,deref_fn,kind){
return (new dat.sync.db.DereffingDB(conn,deref_fn,kind,null,null,null));
});

dat.sync.db.map__GT_DereffingDB = (function dat$sync$db$map__GT_DereffingDB(G__92653){
return (new dat.sync.db.DereffingDB(new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(G__92653),new cljs.core.Keyword(null,"deref-fn","deref-fn",1583490450).cljs$core$IFn$_invoke$arity$1(G__92653),new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(G__92653),null,cljs.core.dissoc.call(null,G__92653,new cljs.core.Keyword(null,"conn","conn",278309663),new cljs.core.Keyword(null,"deref-fn","deref-fn",1583490450),new cljs.core.Keyword(null,"kind","kind",-717265803)),null));
});

dat.sync.db.datascript_QMARK_ = (function dat$sync$db$datascript_QMARK_(db_or_conn){
var or__60899__auto__ = datascript.core.conn_QMARK_.call(null,db_or_conn);
if(cljs.core.truth_(or__60899__auto__)){
return or__60899__auto__;
} else {
return datascript.db.db_QMARK_.call(null,db_or_conn);
}
});
dat.sync.db.db_kind = (function dat$sync$db$db_kind(db_or_conn){
if(cljs.core.truth_(dat.sync.db.datascript_QMARK_.call(null,db_or_conn))){
return new cljs.core.Keyword(null,"datascript","datascript",-2114593819);
} else {
if((db_or_conn instanceof dat.sync.db.DereffingDB)){
return new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(db_or_conn);
} else {
return new cljs.core.Keyword(null,"datomic","datomic",-1210223216);

}
}
});
dat.sync.db.entity = (function dat$sync$db$entity(db,eid){
var G__92660 = dat.sync.db.db_kind.call(null,db);
var G__92660__$1 = (((G__92660 instanceof cljs.core.Keyword))?G__92660.fqn:null);
switch (G__92660__$1) {
case "datascript":
return datascript.core.entity.call(null,db,eid);

break;
default:
return new cljs.core.Keyword(null,"datomic","datomic",-1210223216).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"wrapped-datomic","wrapped-datomic",1957197976));

}
});
dat.sync.db.pull = (function dat$sync$db$pull(db,pull_expr,eid){
var G__92663 = dat.sync.db.db_kind.call(null,db);
var G__92663__$1 = (((G__92663 instanceof cljs.core.Keyword))?G__92663.fqn:null);
switch (G__92663__$1) {
case "datascript":
return datascript.core.pull.call(null,db,pull_expr,eid);

break;
default:
return new cljs.core.Keyword(null,"datomic","datomic",-1210223216).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"wrapped-datomic","wrapped-datomic",1957197976));

}
});
dat.sync.db.pull_many = (function dat$sync$db$pull_many(db,pull_expr,eids){
var G__92666 = dat.sync.db.db_kind.call(null,db);
var G__92666__$1 = (((G__92666 instanceof cljs.core.Keyword))?G__92666.fqn:null);
switch (G__92666__$1) {
case "datascript":
return datascript.core.pull_many.call(null,db,pull_expr,eids);

break;
default:
return new cljs.core.Keyword(null,"datomic","datomic",-1210223216).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"wrapped-datomic","wrapped-datomic",1957197976));

}
});
dat.sync.db.q = (function dat$sync$db$q(var_args){
var args__62127__auto__ = [];
var len__62120__auto___92672 = arguments.length;
var i__62121__auto___92673 = (0);
while(true){
if((i__62121__auto___92673 < len__62120__auto___92672)){
args__62127__auto__.push((arguments[i__62121__auto___92673]));

var G__92674 = (i__62121__auto___92673 + (1));
i__62121__auto___92673 = G__92674;
continue;
} else {
}
break;
}

var argseq__62128__auto__ = ((((2) < args__62127__auto__.length))?(new cljs.core.IndexedSeq(args__62127__auto__.slice((2)),(0),null)):null);
return dat.sync.db.q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__62128__auto__);
});

dat.sync.db.q.cljs$core$IFn$_invoke$arity$variadic = (function (q_expr,db,ins){
var G__92671 = dat.sync.db.db_kind.call(null,db);
var G__92671__$1 = (((G__92671 instanceof cljs.core.Keyword))?G__92671.fqn:null);
switch (G__92671__$1) {
case "datascript":
return cljs.core.apply.call(null,datascript.core.q,q_expr,db,ins);

break;
default:
return new cljs.core.Keyword(null,"datomic","datomic",-1210223216).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"wrapped-datomic","wrapped-datomic",1957197976));

}
});

dat.sync.db.q.cljs$lang$maxFixedArity = (2);

dat.sync.db.q.cljs$lang$applyTo = (function (seq92668){
var G__92669 = cljs.core.first.call(null,seq92668);
var seq92668__$1 = cljs.core.next.call(null,seq92668);
var G__92670 = cljs.core.first.call(null,seq92668__$1);
var seq92668__$2 = cljs.core.next.call(null,seq92668__$1);
return dat.sync.db.q.cljs$core$IFn$_invoke$arity$variadic(G__92669,G__92670,seq92668__$2);
});

dat.sync.db.db = (function dat$sync$db$db(conn){
var G__92677 = dat.sync.db.db_kind.call(null,conn);
var G__92677__$1 = (((G__92677 instanceof cljs.core.Keyword))?G__92677.fqn:null);
switch (G__92677__$1) {
case "datascript":
return cljs.core.deref.call(null,conn);

break;
case "wrapped-datomic":
return cljs.core.deref.call(null,conn);

break;
default:
return new cljs.core.Keyword(null,"datomic","datomic",-1210223216);

}
});
dat.sync.db.gen_uuid = (function dat$sync$db$gen_uuid(){
return datascript.core.squuid.call(null);
});
dat.sync.db.datomic_tempids__GT_ints = (function dat$sync$db$datomic_tempids__GT_ints(txs){
var txs_after = com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__21890__auto__ = dat.sync.db.pathcache92684;
var info__21890__auto____$1 = (((info__21890__auto__ == null))?(function (){var info92685 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.walker,new cljs.core.Var(function(){return com.rpl.specter.walker;},new cljs.core.Symbol("com.rpl.specter","walker","com.rpl.specter/walker",188203798,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"walker","walker",-1621010049,null),"resources/public/js/compiled/out/com/rpl/specter.cljc",9,1,825,828,cljs.core.List.EMPTY,"Using clojure.walk, navigate the data structure until reaching\n          a value for which `afn` returns truthy.",(cljs.core.truth_(com.rpl.specter.walker)?com.rpl.specter.walker.cljs$lang$test:null)])),new cljs.core.Symbol("specter","walker","specter/walker",390054917,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_SpecialFormUse.call(null,((function (info__21890__auto__){
return (function (p1__92679_SHARP_){
return (p1__92679_SHARP_ instanceof datomic.db.DbId);
});})(info__21890__auto__))
,cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__92679#","p1__92679#",-1024105778,null)], null),cljs.core.list(new cljs.core.Symbol(null,"instance?","instance?",1075939923,null),new cljs.core.Symbol(null,"datomic.db.DbId","datomic.db.DbId",497995476,null),new cljs.core.Symbol(null,"p1__92679#","p1__92679#",-1024105778,null))))], null),cljs.core.list(new cljs.core.Symbol("specter","walker","specter/walker",390054917,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__92679#","p1__92679#",-1024105778,null)], null),cljs.core.list(new cljs.core.Symbol(null,"instance?","instance?",1075939923,null),new cljs.core.Symbol(null,"datomic.db.DbId","datomic.db.DbId",497995476,null),new cljs.core.Symbol(null,"p1__92679#","p1__92679#",-1024105778,null)))))], null),"dat.sync.db",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("specter","walker","specter/walker",390054917,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__92679#","p1__92679#",-1024105778,null)], null),cljs.core.list(new cljs.core.Symbol(null,"instance?","instance?",1075939923,null),new cljs.core.Symbol(null,"datomic.db.DbId","datomic.db.DbId",497995476,null),new cljs.core.Symbol(null,"p1__92679#","p1__92679#",-1024105778,null)))], null));
dat.sync.db.pathcache92684 = info92685;

return info92685;
})():info__21890__auto__);
var precompiled92686 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__21890__auto____$1);
var dynamic_QMARK___21891__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__21890__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___21891__auto__)){
return precompiled92686.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.walker,((function (info__21890__auto__,info__21890__auto____$1,precompiled92686,dynamic_QMARK___21891__auto__){
return (function (p1__92679_SHARP_){
return (p1__92679_SHARP_ instanceof datomic.db.DbId);
});})(info__21890__auto__,info__21890__auto____$1,precompiled92686,dynamic_QMARK___21891__auto__))
], null));
} else {
return precompiled92686;
}
})(),(function (p1__92680_SHARP_){
return new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(p1__92680_SHARP_);
}),txs);
return txs_after;
});
dat.sync.db.mw_datomic_tempid = (function dat$sync$db$mw_datomic_tempid(transact){
return (function (p__92690,txs){
var map__92691 = p__92690;
var map__92691__$1 = ((((!((map__92691 == null)))?((((map__92691.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__92691.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__92691):map__92691);
var report = map__92691__$1;
var db_after = cljs.core.get.call(null,map__92691__$1,new cljs.core.Keyword(null,"db-after","db-after",-571884666));
var txs__$1 = dat.sync.db.datomic_tempids__GT_ints.call(null,txs);
return transact.call(null,report,txs__$1);
});
});
dat.sync.db.uuid_all_the_things_STAR_ = (function dat$sync$db$uuid_all_the_things_STAR_(db,datoms){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.comp.call(null,cljs.core.map.call(null,(function (p__92700){
var vec__92701 = p__92700;
var eid = cljs.core.nth.call(null,vec__92701,(0),null);
var _ = cljs.core.nth.call(null,vec__92701,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__92701,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__92701,(3),null);
var ___$3 = cljs.core.nth.call(null,vec__92701,(4),null);
return eid;
})),cljs.core.distinct.call(null),cljs.core.map.call(null,cljs.core.partial.call(null,dat.sync.db.entity,db)),cljs.core.remove.call(null,new cljs.core.Keyword("db","ident","db/ident",-737096)),cljs.core.remove.call(null,new cljs.core.Keyword("dat.sync","uuid","dat.sync/uuid",-402536853)),cljs.core.map.call(null,(function (p__92704){
var map__92705 = p__92704;
var map__92705__$1 = ((((!((map__92705 == null)))?((((map__92705.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__92705.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__92705):map__92705);
var id = cljs.core.get.call(null,map__92705__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),id,new cljs.core.Keyword("dat.sync","uuid","dat.sync/uuid",-402536853),dat.sync.db.gen_uuid.call(null)], null);
}))),datoms);
});
/**
 * tx-middleware to add uuids to any fresh entity that didn't get one assigned during the transaction.
 */
dat.sync.db.mw_uuid_all_the_things = (function dat$sync$db$mw_uuid_all_the_things(transact){
return (function (report,txs){
var map__92709 = transact.call(null,report,txs);
var map__92709__$1 = ((((!((map__92709 == null)))?((((map__92709.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__92709.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__92709):map__92709);
var report__$1 = map__92709__$1;
var db_after = cljs.core.get.call(null,map__92709__$1,new cljs.core.Keyword(null,"db-after","db-after",-571884666));
var tx_data = cljs.core.get.call(null,map__92709__$1,new cljs.core.Keyword(null,"tx-data","tx-data",934159761));
var uuids = dat.sync.db.uuid_all_the_things_STAR_.call(null,db_after,tx_data);
return transact.call(null,report__$1,uuids);
});
});
dat.sync.db.compatability_meta = (function dat$sync$db$compatability_meta(tx_meta){
return cljs.core.update_in.call(null,tx_meta,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datascript.db","tx-middleware","datascript.db/tx-middleware",1289225479)], null),(function (p1__92711_SHARP_){
return cljs.core.comp.call(null,(function (){var or__60899__auto__ = p1__92711_SHARP_;
if(cljs.core.truth_(or__60899__auto__)){
return or__60899__auto__;
} else {
return cljs.core.identity;
}
})(),dat.sync.db.mw_uuid_all_the_things,datascript.db.schema_middleware);
}));
});
dat.sync.db.with$ = (function dat$sync$db$with(var_args){
var args92712 = [];
var len__62120__auto___92716 = arguments.length;
var i__62121__auto___92717 = (0);
while(true){
if((i__62121__auto___92717 < len__62120__auto___92716)){
args92712.push((arguments[i__62121__auto___92717]));

var G__92718 = (i__62121__auto___92717 + (1));
i__62121__auto___92717 = G__92718;
continue;
} else {
}
break;
}

var G__92714 = args92712.length;
switch (G__92714) {
case 2:
return dat.sync.db.with$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dat.sync.db.with$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args92712.length)].join('')));

}
});

dat.sync.db.with$.cljs$core$IFn$_invoke$arity$2 = (function (db,txs){
return dat.sync.db.with$.call(null,db,txs,null);
});

dat.sync.db.with$.cljs$core$IFn$_invoke$arity$3 = (function (db,txs,tx_meta){
var G__92715 = dat.sync.db.db_kind.call(null,db);
var G__92715__$1 = (((G__92715 instanceof cljs.core.Keyword))?G__92715.fqn:null);
switch (G__92715__$1) {
case "datascript":
return datascript.core.with$.call(null,db,txs,dat.sync.db.compatability_meta.call(null,tx_meta));

break;
default:
return new cljs.core.Keyword(null,"datomic","datomic",-1210223216).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"wrapped-datomic","wrapped-datomic",1957197976));

}
});

dat.sync.db.with$.cljs$lang$maxFixedArity = 3;

dat.sync.db.transact_BANG_ = (function dat$sync$db$transact_BANG_(var_args){
var args92721 = [];
var len__62120__auto___92725 = arguments.length;
var i__62121__auto___92726 = (0);
while(true){
if((i__62121__auto___92726 < len__62120__auto___92725)){
args92721.push((arguments[i__62121__auto___92726]));

var G__92727 = (i__62121__auto___92726 + (1));
i__62121__auto___92726 = G__92727;
continue;
} else {
}
break;
}

var G__92723 = args92721.length;
switch (G__92723) {
case 2:
return dat.sync.db.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dat.sync.db.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args92721.length)].join('')));

}
});

dat.sync.db.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (conn,txs){
return dat.sync.db.transact_BANG_.call(null,conn,txs,null);
});

dat.sync.db.transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (conn,txs,tx_meta){
var G__92724 = dat.sync.db.db_kind.call(null,conn);
var G__92724__$1 = (((G__92724 instanceof cljs.core.Keyword))?G__92724.fqn:null);
switch (G__92724__$1) {
case "datascript":
return datascript.core.transact_BANG_.call(null,conn,txs,dat.sync.db.compatability_meta.call(null,tx_meta));

break;
case "datomic":
return new cljs.core.Keyword(null,"wrapped-datomic","wrapped-datomic",1957197976);

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(dat.sync.db.db_kind.call(null,conn))].join('')));

}
});

dat.sync.db.transact_BANG_.cljs$lang$maxFixedArity = 3;

dat.sync.db.fn_entity_QMARK_ = (function dat$sync$db$fn_entity_QMARK_(db,eid){
return cljs.core.boolean$.call(null,new cljs.core.Keyword("db","fn","db/fn",-1175261470).cljs$core$IFn$_invoke$arity$1(dapi.entity.call(null,db,eid)));
});
dat.sync.db.fn_datom_QMARK_ = (function dat$sync$db$fn_datom_QMARK_(db,p__92730){
var vec__92734 = p__92730;
var eid = cljs.core.nth.call(null,vec__92734,(0),null);
var _ = cljs.core.nth.call(null,vec__92734,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__92734,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__92734,(3),null);
var ___$3 = cljs.core.nth.call(null,vec__92734,(4),null);
return dat.sync.db.fn_entity_QMARK_.call(null,db,eid);
});
dat.sync.db.datoms = (function dat$sync$db$datoms(var_args){
var args__62127__auto__ = [];
var len__62120__auto___92740 = arguments.length;
var i__62121__auto___92741 = (0);
while(true){
if((i__62121__auto___92741 < len__62120__auto___92740)){
args__62127__auto__.push((arguments[i__62121__auto___92741]));

var G__92742 = (i__62121__auto___92741 + (1));
i__62121__auto___92741 = G__92742;
continue;
} else {
}
break;
}

var argseq__62128__auto__ = ((((1) < args__62127__auto__.length))?(new cljs.core.IndexedSeq(args__62127__auto__.slice((1)),(0),null)):null);
return dat.sync.db.datoms.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__62128__auto__);
});

dat.sync.db.datoms.cljs$core$IFn$_invoke$arity$variadic = (function (db,args){
var G__92739 = dat.sync.db.db_kind.call(null,db);
var G__92739__$1 = (((G__92739 instanceof cljs.core.Keyword))?G__92739.fqn:null);
switch (G__92739__$1) {
case "datascript":
return cljs.core.apply.call(null,datascript.core.datoms,db,args);

break;
default:
return new cljs.core.Keyword(null,"datomic","datomic",-1210223216).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"wrapped-datomic","wrapped-datomic",1957197976));

}
});

dat.sync.db.datoms.cljs$lang$maxFixedArity = (1);

dat.sync.db.datoms.cljs$lang$applyTo = (function (seq92737){
var G__92738 = cljs.core.first.call(null,seq92737);
var seq92737__$1 = cljs.core.next.call(null,seq92737);
return dat.sync.db.datoms.cljs$core$IFn$_invoke$arity$variadic(G__92738,seq92737__$1);
});

dat.sync.db.current_tempid = cljs.core.atom.call(null,(0));
/**
 * Default keeps clojurescript ints from overflowing
 */
dat.sync.db.roll_BANG_ = (function dat$sync$db$roll_BANG_(var_args){
var args92745 = [];
var len__62120__auto___92748 = arguments.length;
var i__62121__auto___92749 = (0);
while(true){
if((i__62121__auto___92749 < len__62120__auto___92748)){
args92745.push((arguments[i__62121__auto___92749]));

var G__92750 = (i__62121__auto___92749 + (1));
i__62121__auto___92749 = G__92750;
continue;
} else {
}
break;
}

var G__92747 = args92745.length;
switch (G__92747) {
case 1:
return dat.sync.db.roll_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return dat.sync.db.roll_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args92745.length)].join('')));

}
});

dat.sync.db.roll_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (counter){
return dat.sync.db.roll_BANG_.call(null,counter,(1),(9007199254740991));
});

dat.sync.db.roll_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (counter,lowest,highest){
return cljs.core.swap_BANG_.call(null,counter,(function (p1__92744_SHARP_){
var nextt = (p1__92744_SHARP_ + (1));
if(cljs.core._EQ_.call(null,nextt,highest)){
return lowest;
} else {
return nextt;
}
}));
});

dat.sync.db.roll_BANG_.cljs$lang$maxFixedArity = 3;

dat.sync.db.tempid_BANG_ = (function dat$sync$db$tempid_BANG_(var_args){
var args92752 = [];
var len__62120__auto___92757 = arguments.length;
var i__62121__auto___92758 = (0);
while(true){
if((i__62121__auto___92758 < len__62120__auto___92757)){
args92752.push((arguments[i__62121__auto___92758]));

var G__92759 = (i__62121__auto___92758 + (1));
i__62121__auto___92758 = G__92759;
continue;
} else {
}
break;
}

var G__92754 = args92752.length;
switch (G__92754) {
case 2:
return dat.sync.db.tempid_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dat.sync.db.tempid_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args92752.length)].join('')));

}
});

dat.sync.db.tempid_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (db,part){
var G__92755 = dat.sync.db.db_kind.call(null,db);
var G__92755__$1 = (((G__92755 instanceof cljs.core.Keyword))?G__92755.fqn:null);
switch (G__92755__$1) {
case "datascript":
return (- dat.sync.db.roll_BANG_.call(null,dat.sync.db.current_tempid));

break;
default:
return new cljs.core.Keyword(null,"datomic","datomic",-1210223216);

}
});

dat.sync.db.tempid_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (db,part,n){
var G__92756 = dat.sync.db.db_kind.call(null,db);
var G__92756__$1 = (((G__92756 instanceof cljs.core.Keyword))?G__92756.fqn:null);
switch (G__92756__$1) {
case "datascript":
return n;

break;
default:
return new cljs.core.Keyword(null,"datomic","datomic",-1210223216);

}
});

dat.sync.db.tempid_BANG_.cljs$lang$maxFixedArity = 3;

dat.sync.db.conn_from_conn = (function dat$sync$db$conn_from_conn(conn){
var G__92764 = dat.sync.db.db_kind.call(null,conn);
var G__92764__$1 = (((G__92764 instanceof cljs.core.Keyword))?G__92764.fqn:null);
switch (G__92764__$1) {
case "wrapped-datomic":
return conn;

break;
case "datascript":
return conn;

break;
case "datomic":
return (new dat.sync.db.DereffingDB(conn,null,new cljs.core.Keyword(null,"wrapped-datomic","wrapped-datomic",1957197976),null,null,null));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(dat.sync.db.db_kind.call(null,conn))].join('')));

}
});

//# sourceMappingURL=db.js.map?rel=1506064217984