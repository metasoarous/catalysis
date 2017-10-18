// Compiled by ClojureScript 1.9.542 {}
goog.provide('dat.remote.impl.sente');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('dat.sync.client');
goog.require('dat.reactor');
goog.require('dat.sync.utils');
goog.require('dat.spec.protocols');
goog.require('com.stuartsierra.component');
goog.require('taoensso.timbre');
goog.require('taoensso.sente');
goog.require('taoensso.sente.packers.transit');

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
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
dat.remote.impl.sente.DBFn = (function (lang,params,code,__meta,__extmap,__hash){
this.lang = lang;
this.params = params;
this.code = code;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
dat.remote.impl.sente.DBFn.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__61574__auto__,k__61575__auto__){
var self__ = this;
var this__61574__auto____$1 = this;
return this__61574__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__61575__auto__,null);
});

dat.remote.impl.sente.DBFn.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__61576__auto__,k89920,else__61577__auto__){
var self__ = this;
var this__61576__auto____$1 = this;
var G__89922 = k89920;
var G__89922__$1 = (((G__89922 instanceof cljs.core.Keyword))?G__89922.fqn:null);
switch (G__89922__$1) {
case "lang":
return self__.lang;

break;
case "params":
return self__.params;

break;
case "code":
return self__.code;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k89920,else__61577__auto__);

}
});

dat.remote.impl.sente.DBFn.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__61588__auto__,writer__61589__auto__,opts__61590__auto__){
var self__ = this;
var this__61588__auto____$1 = this;
var pr_pair__61591__auto__ = ((function (this__61588__auto____$1){
return (function (keyval__61592__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__61589__auto__,cljs.core.pr_writer,""," ","",opts__61590__auto__,keyval__61592__auto__);
});})(this__61588__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__61589__auto__,pr_pair__61591__auto__,"#dat.remote.impl.sente.DBFn{",", ","}",opts__61590__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"lang","lang",-1819677104),self__.lang],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"code","code",1586293142),self__.code],null))], null),self__.__extmap));
});

dat.remote.impl.sente.DBFn.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

dat.remote.impl.sente.DBFn.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__89919){
var self__ = this;
var G__89919__$1 = this;
return (new cljs.core.RecordIter((0),G__89919__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"code","code",1586293142)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

dat.remote.impl.sente.DBFn.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__61572__auto__){
var self__ = this;
var this__61572__auto____$1 = this;
return self__.__meta;
});

dat.remote.impl.sente.DBFn.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__61568__auto__){
var self__ = this;
var this__61568__auto____$1 = this;
return (new dat.remote.impl.sente.DBFn(self__.lang,self__.params,self__.code,self__.__meta,self__.__extmap,self__.__hash));
});

dat.remote.impl.sente.DBFn.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__61578__auto__){
var self__ = this;
var this__61578__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

dat.remote.impl.sente.DBFn.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__61569__auto__){
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

dat.remote.impl.sente.DBFn.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__61570__auto__,other__61571__auto__){
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

dat.remote.impl.sente.DBFn.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__61583__auto__,k__61584__auto__){
var self__ = this;
var this__61583__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"lang","lang",-1819677104),null,new cljs.core.Keyword(null,"code","code",1586293142),null], null), null),k__61584__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__61583__auto____$1),self__.__meta),k__61584__auto__);
} else {
return (new dat.remote.impl.sente.DBFn(self__.lang,self__.params,self__.code,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__61584__auto__)),null));
}
});

dat.remote.impl.sente.DBFn.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__61581__auto__,k__61582__auto__,G__89919){
var self__ = this;
var this__61581__auto____$1 = this;
var pred__89923 = cljs.core.keyword_identical_QMARK_;
var expr__89924 = k__61582__auto__;
if(cljs.core.truth_(pred__89923.call(null,new cljs.core.Keyword(null,"lang","lang",-1819677104),expr__89924))){
return (new dat.remote.impl.sente.DBFn(G__89919,self__.params,self__.code,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__89923.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__89924))){
return (new dat.remote.impl.sente.DBFn(self__.lang,G__89919,self__.code,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__89923.call(null,new cljs.core.Keyword(null,"code","code",1586293142),expr__89924))){
return (new dat.remote.impl.sente.DBFn(self__.lang,self__.params,G__89919,self__.__meta,self__.__extmap,null));
} else {
return (new dat.remote.impl.sente.DBFn(self__.lang,self__.params,self__.code,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__61582__auto__,G__89919),null));
}
}
}
});

dat.remote.impl.sente.DBFn.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__61586__auto__){
var self__ = this;
var this__61586__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"lang","lang",-1819677104),self__.lang],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"code","code",1586293142),self__.code],null))], null),self__.__extmap));
});

dat.remote.impl.sente.DBFn.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__61573__auto__,G__89919){
var self__ = this;
var this__61573__auto____$1 = this;
return (new dat.remote.impl.sente.DBFn(self__.lang,self__.params,self__.code,G__89919,self__.__extmap,self__.__hash));
});

dat.remote.impl.sente.DBFn.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__61579__auto__,entry__61580__auto__){
var self__ = this;
var this__61579__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__61580__auto__)){
return this__61579__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__61580__auto__,(0)),cljs.core._nth.call(null,entry__61580__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__61579__auto____$1,entry__61580__auto__);
}
});

dat.remote.impl.sente.DBFn.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"lang","lang",-179145577,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"code","code",-1068142627,null)], null);
});

dat.remote.impl.sente.DBFn.cljs$lang$type = true;

dat.remote.impl.sente.DBFn.cljs$lang$ctorPrSeq = (function (this__61610__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"dat.remote.impl.sente/DBFn");
});

dat.remote.impl.sente.DBFn.cljs$lang$ctorPrWriter = (function (this__61610__auto__,writer__61611__auto__){
return cljs.core._write.call(null,writer__61611__auto__,"dat.remote.impl.sente/DBFn");
});

dat.remote.impl.sente.__GT_DBFn = (function dat$remote$impl$sente$__GT_DBFn(lang,params,code){
return (new dat.remote.impl.sente.DBFn(lang,params,code,null,null,null));
});

dat.remote.impl.sente.map__GT_DBFn = (function dat$remote$impl$sente$map__GT_DBFn(G__89921){
return (new dat.remote.impl.sente.DBFn(new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(G__89921),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__89921),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(G__89921),null,cljs.core.dissoc.call(null,G__89921,new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"code","code",1586293142)),null));
});


cljs.reader.register_tag_parser_BANG_.call(null,new cljs.core.Symbol("db","fn","db/fn",465270057,null),cljs.core.pr_str);
/**
 * In exchange for this overhead we get send/recv using the same universal-namespaced-segment-maps.
 */
dat.remote.impl.sente.recv_ev_msg__GT_seg = (function dat$remote$impl$sente$recv_ev_msg__GT_seg(ev_msg){
var ev_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(ev_msg);
var ev_data = new cljs.core.Keyword(null,"?data","?data",-9471433).cljs$core$IFn$_invoke$arity$1(ev_msg);
var ring_req = new cljs.core.Keyword(null,"ring-req","ring-req",-747861961).cljs$core$IFn$_invoke$arity$1(ev_msg);
var peer_id = new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(ev_msg);
if(cljs.core._EQ_.call(null,ev_id,new cljs.core.Keyword("dat.remote.impl.sente","segment","dat.remote.impl.sente/segment",-541117692))){
return dat.sync.utils.cat_into.call(null,cljs.core.PersistentArrayMap.EMPTY,ev_data,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("dat.remote","ring-req","dat.remote/ring-req",-889391444),ring_req,new cljs.core.Keyword("dat.remote","peer-id","dat.remote/peer-id",524490523),peer_id], null));
} else {
return cljs.core.assoc.call(null,ev_msg,new cljs.core.Keyword("dat.reactor","event","dat.reactor/event",-1385170451),new cljs.core.Keyword("dat.reactor","legacy","dat.reactor/legacy",546320112));
}
});
/**
 * Make sure all vector events are converted into universal-namespaced-segment-maps
 */
dat.remote.impl.sente.send_ev__GT_seg = (function dat$remote$impl$sente$send_ev__GT_seg(ev){
if(cljs.core.vector_QMARK_.call(null,ev)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("dat.reactor","event","dat.reactor/event",-1385170451),new cljs.core.Keyword("dat.reactor","legacy","dat.reactor/legacy",546320112),new cljs.core.Keyword(null,"event","event",301435442),ev,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.first.call(null,ev)], null);
} else {
return ev;
}
});
dat.remote.impl.sente.default_sente_options = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"chsk-route","chsk-route",28990043),"/chsk",new cljs.core.Keyword(null,"user-id-fn","user-id-fn",-1532150029),new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"wrap-recv-evs?","wrap-recv-evs?",-1996694153),false,new cljs.core.Keyword(null,"packer","packer",66077544),taoensso.sente.packers.transit.get_transit_packer.call(null)], null);
dat.remote.impl.sente.go_sente_send_BANG_ = (function dat$remote$impl$sente$go_sente_send_BANG_(var_args){
var args89927 = [];
var len__62120__auto___90085 = arguments.length;
var i__62121__auto___90086 = (0);
while(true){
if((i__62121__auto___90086 < len__62120__auto___90085)){
args89927.push((arguments[i__62121__auto___90086]));

var G__90087 = (i__62121__auto___90086 + (1));
i__62121__auto___90086 = G__90087;
continue;
} else {
}
break;
}

var G__89929 = args89927.length;
switch (G__89929) {
case 2:
return dat.remote.impl.sente.go_sente_send_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dat.remote.impl.sente.go_sente_send_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args89927.length)].join('')));

}
});

dat.remote.impl.sente.go_sente_send_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (send_GT_,sock){
return dat.remote.impl.sente.go_sente_send_BANG_.call(null,send_GT_,sock,(100));
});

dat.remote.impl.sente.go_sente_send_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (send_GT_,p__89930,retries){
var map__89931 = p__89930;
var map__89931__$1 = ((((!((map__89931 == null)))?((((map__89931.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89931.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__89931):map__89931);
var sente_sock = map__89931__$1;
var send_fn = cljs.core.get.call(null,map__89931__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var connected_uids = cljs.core.get.call(null,map__89931__$1,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231));
var c__69114__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__69114__auto__,map__89931,map__89931__$1,sente_sock,send_fn,connected_uids){
return (function (){
var f__69115__auto__ = (function (){var switch__69000__auto__ = ((function (c__69114__auto__,map__89931,map__89931__$1,sente_sock,send_fn,connected_uids){
return (function (state_90029){
var state_val_90030 = (state_90029[(1)]);
if((state_val_90030 === (7))){
var inst_89953 = (state_90029[(2)]);
var state_90029__$1 = state_90029;
if(cljs.core.truth_(inst_89953)){
var statearr_90031_90089 = state_90029__$1;
(statearr_90031_90089[(1)] = (11));

} else {
var statearr_90032_90090 = state_90029__$1;
(statearr_90032_90090[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90030 === (20))){
var inst_89978 = (state_90029[(7)]);
var inst_89977 = (state_90029[(8)]);
var inst_89980 = (inst_89978 < inst_89977);
var inst_89981 = inst_89980;
var state_90029__$1 = state_90029;
if(cljs.core.truth_(inst_89981)){
var statearr_90033_90091 = state_90029__$1;
(statearr_90033_90091[(1)] = (22));

} else {
var statearr_90034_90092 = state_90029__$1;
(statearr_90034_90092[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90030 === (27))){
var inst_90011 = (state_90029[(2)]);
var state_90029__$1 = state_90029;
var statearr_90035_90093 = state_90029__$1;
(statearr_90035_90093[(2)] = inst_90011);

(statearr_90035_90093[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90030 === (1))){
var state_90029__$1 = state_90029;
var statearr_90036_90094 = state_90029__$1;
(statearr_90036_90094[(2)] = null);

(statearr_90036_90094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90030 === (24))){
var inst_90013 = (state_90029[(2)]);
var state_90029__$1 = state_90029;
var statearr_90037_90095 = state_90029__$1;
(statearr_90037_90095[(2)] = inst_90013);

(statearr_90037_90095[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90030 === (4))){
var inst_89937 = (state_90029[(9)]);
var inst_89936 = (state_90029[(2)]);
var inst_89937__$1 = dat.remote.impl.sente.send_ev__GT_seg.call(null,inst_89936);
var inst_89939 = (inst_89937__$1 == null);
var inst_89940 = cljs.core.not.call(null,inst_89939);
var state_90029__$1 = (function (){var statearr_90038 = state_90029;
(statearr_90038[(9)] = inst_89937__$1);

return statearr_90038;
})();
if(inst_89940){
var statearr_90039_90096 = state_90029__$1;
(statearr_90039_90096[(1)] = (5));

} else {
var statearr_90040_90097 = state_90029__$1;
(statearr_90040_90097[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90030 === (15))){
var state_90029__$1 = state_90029;
if(cljs.core.truth_(connected_uids)){
var statearr_90041_90098 = state_90029__$1;
(statearr_90041_90098[(1)] = (17));

} else {
var statearr_90042_90099 = state_90029__$1;
(statearr_90042_90099[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90030 === (21))){
var inst_90015 = (state_90029[(2)]);
var state_90029__$1 = state_90029;
var statearr_90046_90100 = state_90029__$1;
(statearr_90046_90100[(2)] = inst_90015);

(statearr_90046_90100[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90030 === (13))){
var inst_89958 = (state_90029[(10)]);
var inst_89959 = (state_90029[(11)]);
var inst_89958__$1 = (state_90029[(2)]);
var inst_89959__$1 = cljs.core.get.call(null,inst_89958__$1,new cljs.core.Keyword("dat.remote","peer-id","dat.remote/peer-id",524490523));
var state_90029__$1 = (function (){var statearr_90047 = state_90029;
(statearr_90047[(10)] = inst_89958__$1);

(statearr_90047[(11)] = inst_89959__$1);

return statearr_90047;
})();
if(cljs.core.truth_(inst_89959__$1)){
var statearr_90048_90101 = state_90029__$1;
(statearr_90048_90101[(1)] = (14));

} else {
var statearr_90049_90102 = state_90029__$1;
(statearr_90049_90102[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90030 === (22))){
var inst_89958 = (state_90029[(10)]);
var inst_89976 = (state_90029[(12)]);
var inst_89978 = (state_90029[(7)]);
var inst_89977 = (state_90029[(8)]);
var inst_89975 = (state_90029[(13)]);
var inst_89983 = cljs.core._nth.call(null,inst_89976,inst_89978);
var inst_89984 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_89985 = [new cljs.core.Keyword("dat.remote.impl.sente","segment","dat.remote.impl.sente/segment",-541117692),inst_89958];
var inst_89986 = (new cljs.core.PersistentVector(null,2,(5),inst_89984,inst_89985,null));
var inst_89987 = send_fn.call(null,inst_89983,inst_89986);
var inst_89988 = (inst_89978 + (1));
var tmp90043 = inst_89976;
var tmp90044 = inst_89977;
var tmp90045 = inst_89975;
var inst_89975__$1 = tmp90045;
var inst_89976__$1 = tmp90043;
var inst_89977__$1 = tmp90044;
var inst_89978__$1 = inst_89988;
var state_90029__$1 = (function (){var statearr_90050 = state_90029;
(statearr_90050[(14)] = inst_89987);

(statearr_90050[(12)] = inst_89976__$1);

(statearr_90050[(7)] = inst_89978__$1);

(statearr_90050[(8)] = inst_89977__$1);

(statearr_90050[(13)] = inst_89975__$1);

return statearr_90050;
})();
var statearr_90051_90103 = state_90029__$1;
(statearr_90051_90103[(2)] = null);

(statearr_90051_90103[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90030 === (29))){
var inst_89991 = (state_90029[(15)]);
var inst_89958 = (state_90029[(10)]);
var inst_90000 = cljs.core.first.call(null,inst_89991);
var inst_90001 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_90002 = [new cljs.core.Keyword("dat.remote.impl.sente","segment","dat.remote.impl.sente/segment",-541117692),inst_89958];
var inst_90003 = (new cljs.core.PersistentVector(null,2,(5),inst_90001,inst_90002,null));
var inst_90004 = send_fn.call(null,inst_90000,inst_90003);
var inst_90005 = cljs.core.next.call(null,inst_89991);
var inst_89975 = inst_90005;
var inst_89976 = null;
var inst_89977 = (0);
var inst_89978 = (0);
var state_90029__$1 = (function (){var statearr_90052 = state_90029;
(statearr_90052[(16)] = inst_90004);

(statearr_90052[(12)] = inst_89976);

(statearr_90052[(7)] = inst_89978);

(statearr_90052[(8)] = inst_89977);

(statearr_90052[(13)] = inst_89975);

return statearr_90052;
})();
var statearr_90053_90104 = state_90029__$1;
(statearr_90053_90104[(2)] = null);

(statearr_90053_90104[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90030 === (6))){
var state_90029__$1 = state_90029;
var statearr_90054_90105 = state_90029__$1;
(statearr_90054_90105[(2)] = false);

(statearr_90054_90105[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90030 === (28))){
var inst_89991 = (state_90029[(15)]);
var inst_89995 = cljs.core.chunk_first.call(null,inst_89991);
var inst_89996 = cljs.core.chunk_rest.call(null,inst_89991);
var inst_89997 = cljs.core.count.call(null,inst_89995);
var inst_89975 = inst_89996;
var inst_89976 = inst_89995;
var inst_89977 = inst_89997;
var inst_89978 = (0);
var state_90029__$1 = (function (){var statearr_90055 = state_90029;
(statearr_90055[(12)] = inst_89976);

(statearr_90055[(7)] = inst_89978);

(statearr_90055[(8)] = inst_89977);

(statearr_90055[(13)] = inst_89975);

return statearr_90055;
})();
var statearr_90056_90106 = state_90029__$1;
(statearr_90056_90106[(2)] = null);

(statearr_90056_90106[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90030 === (25))){
var inst_89991 = (state_90029[(15)]);
var inst_89993 = cljs.core.chunked_seq_QMARK_.call(null,inst_89991);
var state_90029__$1 = state_90029;
if(inst_89993){
var statearr_90057_90107 = state_90029__$1;
(statearr_90057_90107[(1)] = (28));

} else {
var statearr_90058_90108 = state_90029__$1;
(statearr_90058_90108[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90030 === (17))){
var inst_89972 = cljs.core.deref.call(null,connected_uids);
var inst_89973 = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(inst_89972);
var inst_89974 = cljs.core.seq.call(null,inst_89973);
var inst_89975 = inst_89974;
var inst_89976 = null;
var inst_89977 = (0);
var inst_89978 = (0);
var state_90029__$1 = (function (){var statearr_90059 = state_90029;
(statearr_90059[(12)] = inst_89976);

(statearr_90059[(7)] = inst_89978);

(statearr_90059[(8)] = inst_89977);

(statearr_90059[(13)] = inst_89975);

return statearr_90059;
})();
var statearr_90060_90109 = state_90029__$1;
(statearr_90060_90109[(2)] = null);

(statearr_90060_90109[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90030 === (3))){
var inst_90027 = (state_90029[(2)]);
var state_90029__$1 = state_90029;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_90029__$1,inst_90027);
} else {
if((state_val_90030 === (12))){
var inst_89937 = (state_90029[(9)]);
var state_90029__$1 = state_90029;
var statearr_90061_90110 = state_90029__$1;
(statearr_90061_90110[(2)] = inst_89937);

(statearr_90061_90110[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90030 === (2))){
var state_90029__$1 = state_90029;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_90029__$1,(4),send_GT_);
} else {
if((state_val_90030 === (23))){
var inst_89991 = (state_90029[(15)]);
var inst_89975 = (state_90029[(13)]);
var inst_89991__$1 = cljs.core.seq.call(null,inst_89975);
var state_90029__$1 = (function (){var statearr_90062 = state_90029;
(statearr_90062[(15)] = inst_89991__$1);

return statearr_90062;
})();
if(inst_89991__$1){
var statearr_90063_90111 = state_90029__$1;
(statearr_90063_90111[(1)] = (25));

} else {
var statearr_90064_90112 = state_90029__$1;
(statearr_90064_90112[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90030 === (19))){
var inst_90022 = (state_90029[(2)]);
var state_90029__$1 = state_90029;
var statearr_90065_90113 = state_90029__$1;
(statearr_90065_90113[(2)] = inst_90022);

(statearr_90065_90113[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90030 === (11))){
var inst_89937 = (state_90029[(9)]);
var inst_89955 = cljs.core.apply.call(null,cljs.core.hash_map,inst_89937);
var state_90029__$1 = state_90029;
var statearr_90066_90114 = state_90029__$1;
(statearr_90066_90114[(2)] = inst_89955);

(statearr_90066_90114[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90030 === (9))){
var state_90029__$1 = state_90029;
var statearr_90067_90115 = state_90029__$1;
(statearr_90067_90115[(2)] = false);

(statearr_90067_90115[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90030 === (5))){
var inst_89937 = (state_90029[(9)]);
var inst_89942 = inst_89937.cljs$lang$protocol_mask$partition0$;
var inst_89943 = (inst_89942 & (64));
var inst_89944 = inst_89937.cljs$core$ISeq$;
var inst_89945 = (cljs.core.PROTOCOL_SENTINEL === inst_89944);
var inst_89946 = (inst_89943) || (inst_89945);
var state_90029__$1 = state_90029;
if(cljs.core.truth_(inst_89946)){
var statearr_90068_90116 = state_90029__$1;
(statearr_90068_90116[(1)] = (8));

} else {
var statearr_90069_90117 = state_90029__$1;
(statearr_90069_90117[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90030 === (14))){
var inst_89958 = (state_90029[(10)]);
var inst_89959 = (state_90029[(11)]);
var inst_89961 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_89962 = cljs.core.dissoc.call(null,inst_89958,new cljs.core.Keyword("dat.remote","peer-id","dat.remote/peer-id",524490523));
var inst_89963 = [new cljs.core.Keyword("dat.remote.impl.sente","segment","dat.remote.impl.sente/segment",-541117692),inst_89962];
var inst_89964 = (new cljs.core.PersistentVector(null,2,(5),inst_89961,inst_89963,null));
var inst_89965 = send_fn.call(null,inst_89959,inst_89964);
var state_90029__$1 = state_90029;
var statearr_90070_90118 = state_90029__$1;
(statearr_90070_90118[(2)] = inst_89965);

(statearr_90070_90118[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90030 === (26))){
var state_90029__$1 = state_90029;
var statearr_90071_90119 = state_90029__$1;
(statearr_90071_90119[(2)] = null);

(statearr_90071_90119[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90030 === (16))){
var inst_90024 = (state_90029[(2)]);
var state_90029__$1 = (function (){var statearr_90072 = state_90029;
(statearr_90072[(17)] = inst_90024);

return statearr_90072;
})();
var statearr_90073_90120 = state_90029__$1;
(statearr_90073_90120[(2)] = null);

(statearr_90073_90120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90030 === (30))){
var inst_90008 = (state_90029[(2)]);
var state_90029__$1 = state_90029;
var statearr_90074_90121 = state_90029__$1;
(statearr_90074_90121[(2)] = inst_90008);

(statearr_90074_90121[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90030 === (10))){
var inst_89950 = (state_90029[(2)]);
var state_90029__$1 = state_90029;
var statearr_90075_90122 = state_90029__$1;
(statearr_90075_90122[(2)] = inst_89950);

(statearr_90075_90122[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90030 === (18))){
var inst_89958 = (state_90029[(10)]);
var inst_90017 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_90018 = [new cljs.core.Keyword("dat.remote.impl.sente","segment","dat.remote.impl.sente/segment",-541117692),inst_89958];
var inst_90019 = (new cljs.core.PersistentVector(null,2,(5),inst_90017,inst_90018,null));
var inst_90020 = send_fn.call(null,inst_90019);
var state_90029__$1 = state_90029;
var statearr_90076_90123 = state_90029__$1;
(statearr_90076_90123[(2)] = inst_90020);

(statearr_90076_90123[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90030 === (8))){
var state_90029__$1 = state_90029;
var statearr_90077_90124 = state_90029__$1;
(statearr_90077_90124[(2)] = true);

(statearr_90077_90124[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__69114__auto__,map__89931,map__89931__$1,sente_sock,send_fn,connected_uids))
;
return ((function (switch__69000__auto__,c__69114__auto__,map__89931,map__89931__$1,sente_sock,send_fn,connected_uids){
return (function() {
var dat$remote$impl$sente$state_machine__69001__auto__ = null;
var dat$remote$impl$sente$state_machine__69001__auto____0 = (function (){
var statearr_90081 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_90081[(0)] = dat$remote$impl$sente$state_machine__69001__auto__);

(statearr_90081[(1)] = (1));

return statearr_90081;
});
var dat$remote$impl$sente$state_machine__69001__auto____1 = (function (state_90029){
while(true){
var ret_value__69002__auto__ = (function (){try{while(true){
var result__69003__auto__ = switch__69000__auto__.call(null,state_90029);
if(cljs.core.keyword_identical_QMARK_.call(null,result__69003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69003__auto__;
}
break;
}
}catch (e90082){if((e90082 instanceof Object)){
var ex__69004__auto__ = e90082;
var statearr_90083_90125 = state_90029;
(statearr_90083_90125[(5)] = ex__69004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90029);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e90082;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__69002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90126 = state_90029;
state_90029 = G__90126;
continue;
} else {
return ret_value__69002__auto__;
}
break;
}
});
dat$remote$impl$sente$state_machine__69001__auto__ = function(state_90029){
switch(arguments.length){
case 0:
return dat$remote$impl$sente$state_machine__69001__auto____0.call(this);
case 1:
return dat$remote$impl$sente$state_machine__69001__auto____1.call(this,state_90029);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
dat$remote$impl$sente$state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$0 = dat$remote$impl$sente$state_machine__69001__auto____0;
dat$remote$impl$sente$state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$1 = dat$remote$impl$sente$state_machine__69001__auto____1;
return dat$remote$impl$sente$state_machine__69001__auto__;
})()
;})(switch__69000__auto__,c__69114__auto__,map__89931,map__89931__$1,sente_sock,send_fn,connected_uids))
})();
var state__69116__auto__ = (function (){var statearr_90084 = f__69115__auto__.call(null);
(statearr_90084[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__69114__auto__);

return statearr_90084;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__69116__auto__);
});})(c__69114__auto__,map__89931,map__89931__$1,sente_sock,send_fn,connected_uids))
);

return c__69114__auto__;
});

dat.remote.impl.sente.go_sente_send_BANG_.cljs$lang$maxFixedArity = 3;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {dat.spec.protocols.PRemoteEventChan}
 * @implements {dat.spec.protocols.PRemoteSendEvent}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {dat.spec.protocols.RingSock}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {dat.spec.protocols.Wire}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {com.stuartsierra.component.Lifecycle}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
dat.remote.impl.sente.SenteRemote = (function (sente_options,send_GT_,recv_GT_,sente_sock,stop_remote,server_QMARK_,__meta,__extmap,__hash){
this.sente_options = sente_options;
this.send_GT_ = send_GT_;
this.recv_GT_ = recv_GT_;
this.sente_sock = sente_sock;
this.stop_remote = stop_remote;
this.server_QMARK_ = server_QMARK_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
dat.remote.impl.sente.SenteRemote.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__61574__auto__,k__61575__auto__){
var self__ = this;
var this__61574__auto____$1 = this;
return this__61574__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__61575__auto__,null);
});

dat.remote.impl.sente.SenteRemote.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__61576__auto__,k90129,else__61577__auto__){
var self__ = this;
var this__61576__auto____$1 = this;
var G__90131 = k90129;
var G__90131__$1 = (((G__90131 instanceof cljs.core.Keyword))?G__90131.fqn:null);
switch (G__90131__$1) {
case "sente-options":
return self__.sente_options;

break;
case "send>":
return self__.send_GT_;

break;
case "recv>":
return self__.recv_GT_;

break;
case "sente-sock":
return self__.sente_sock;

break;
case "stop-remote":
return self__.stop_remote;

break;
case "server?":
return self__.server_QMARK_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k90129,else__61577__auto__);

}
});

dat.remote.impl.sente.SenteRemote.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__61588__auto__,writer__61589__auto__,opts__61590__auto__){
var self__ = this;
var this__61588__auto____$1 = this;
var pr_pair__61591__auto__ = ((function (this__61588__auto____$1){
return (function (keyval__61592__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__61589__auto__,cljs.core.pr_writer,""," ","",opts__61590__auto__,keyval__61592__auto__);
});})(this__61588__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__61589__auto__,pr_pair__61591__auto__,"#dat.remote.impl.sente.SenteRemote{",", ","}",opts__61590__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sente-options","sente-options",-1204018742),self__.sente_options],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"send>","send>",158540406),self__.send_GT_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"recv>","recv>",-1762221420),self__.recv_GT_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sente-sock","sente-sock",-1421548735),self__.sente_sock],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stop-remote","stop-remote",1455305901),self__.stop_remote],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"server?","server?",1803113525),self__.server_QMARK_],null))], null),self__.__extmap));
});

dat.remote.impl.sente.SenteRemote.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

dat.remote.impl.sente.SenteRemote.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__90128){
var self__ = this;
var G__90128__$1 = this;
return (new cljs.core.RecordIter((0),G__90128__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sente-options","sente-options",-1204018742),new cljs.core.Keyword(null,"send>","send>",158540406),new cljs.core.Keyword(null,"recv>","recv>",-1762221420),new cljs.core.Keyword(null,"sente-sock","sente-sock",-1421548735),new cljs.core.Keyword(null,"stop-remote","stop-remote",1455305901),new cljs.core.Keyword(null,"server?","server?",1803113525)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

dat.remote.impl.sente.SenteRemote.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__61572__auto__){
var self__ = this;
var this__61572__auto____$1 = this;
return self__.__meta;
});

dat.remote.impl.sente.SenteRemote.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__61568__auto__){
var self__ = this;
var this__61568__auto____$1 = this;
return (new dat.remote.impl.sente.SenteRemote(self__.sente_options,self__.send_GT_,self__.recv_GT_,self__.sente_sock,self__.stop_remote,self__.server_QMARK_,self__.__meta,self__.__extmap,self__.__hash));
});

dat.remote.impl.sente.SenteRemote.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__61578__auto__){
var self__ = this;
var this__61578__auto____$1 = this;
return (6 + cljs.core.count.call(null,self__.__extmap));
});

dat.remote.impl.sente.SenteRemote.prototype.dat$spec$protocols$PRemoteSendEvent$ = cljs.core.PROTOCOL_SENTINEL;

dat.remote.impl.sente.SenteRemote.prototype.dat$spec$protocols$PRemoteSendEvent$send_event_BANG_$arity$2 = (function (remote,event){
var self__ = this;
var remote__$1 = this;
return cljs.core.async.put_BANG_.call(null,self__.send_GT_,event);
});

dat.remote.impl.sente.SenteRemote.prototype.dat$spec$protocols$PRemoteSendEvent$send_event_BANG_$arity$3 = (function (remote,peer_id,event){
var self__ = this;
var remote__$1 = this;
return cljs.core.async.put_BANG_.call(null,self__.send_GT_,cljs.core.assoc.call(null,dat.remote.impl.sente.send_ev__GT_seg.call(null,event),new cljs.core.Keyword("dat.remote","peer-id","dat.remote/peer-id",524490523),peer_id));
});

dat.remote.impl.sente.SenteRemote.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__61569__auto__){
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

dat.remote.impl.sente.SenteRemote.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__61570__auto__,other__61571__auto__){
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

dat.remote.impl.sente.SenteRemote.prototype.dat$spec$protocols$RingSock$ = cljs.core.PROTOCOL_SENTINEL;

dat.remote.impl.sente.SenteRemote.prototype.dat$spec$protocols$RingSock$sock_route$arity$1 = (function (remote){
var self__ = this;
var remote__$1 = this;
return new cljs.core.Keyword(null,"chsk-route","chsk-route",28990043).cljs$core$IFn$_invoke$arity$1(self__.sente_options);
});

dat.remote.impl.sente.SenteRemote.prototype.dat$spec$protocols$RingSock$sock_get$arity$1 = (function (remote){
var self__ = this;
var remote__$1 = this;
return new cljs.core.Keyword(null,"ajax-get-or-ws-handshake-fn","ajax-get-or-ws-handshake-fn",-1210409233).cljs$core$IFn$_invoke$arity$1(self__.sente_sock);
});

dat.remote.impl.sente.SenteRemote.prototype.dat$spec$protocols$RingSock$sock_post$arity$1 = (function (remote){
var self__ = this;
var remote__$1 = this;
return new cljs.core.Keyword(null,"ajax-post-fn","ajax-post-fn",1830071264).cljs$core$IFn$_invoke$arity$1(self__.sente_sock);
});

dat.remote.impl.sente.SenteRemote.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__61583__auto__,k__61584__auto__){
var self__ = this;
var this__61583__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"sente-sock","sente-sock",-1421548735),null,new cljs.core.Keyword(null,"sente-options","sente-options",-1204018742),null,new cljs.core.Keyword(null,"stop-remote","stop-remote",1455305901),null,new cljs.core.Keyword(null,"recv>","recv>",-1762221420),null,new cljs.core.Keyword(null,"server?","server?",1803113525),null,new cljs.core.Keyword(null,"send>","send>",158540406),null], null), null),k__61584__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__61583__auto____$1),self__.__meta),k__61584__auto__);
} else {
return (new dat.remote.impl.sente.SenteRemote(self__.sente_options,self__.send_GT_,self__.recv_GT_,self__.sente_sock,self__.stop_remote,self__.server_QMARK_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__61584__auto__)),null));
}
});

dat.remote.impl.sente.SenteRemote.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__61581__auto__,k__61582__auto__,G__90128){
var self__ = this;
var this__61581__auto____$1 = this;
var pred__90132 = cljs.core.keyword_identical_QMARK_;
var expr__90133 = k__61582__auto__;
if(cljs.core.truth_(pred__90132.call(null,new cljs.core.Keyword(null,"sente-options","sente-options",-1204018742),expr__90133))){
return (new dat.remote.impl.sente.SenteRemote(G__90128,self__.send_GT_,self__.recv_GT_,self__.sente_sock,self__.stop_remote,self__.server_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__90132.call(null,new cljs.core.Keyword(null,"send>","send>",158540406),expr__90133))){
return (new dat.remote.impl.sente.SenteRemote(self__.sente_options,G__90128,self__.recv_GT_,self__.sente_sock,self__.stop_remote,self__.server_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__90132.call(null,new cljs.core.Keyword(null,"recv>","recv>",-1762221420),expr__90133))){
return (new dat.remote.impl.sente.SenteRemote(self__.sente_options,self__.send_GT_,G__90128,self__.sente_sock,self__.stop_remote,self__.server_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__90132.call(null,new cljs.core.Keyword(null,"sente-sock","sente-sock",-1421548735),expr__90133))){
return (new dat.remote.impl.sente.SenteRemote(self__.sente_options,self__.send_GT_,self__.recv_GT_,G__90128,self__.stop_remote,self__.server_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__90132.call(null,new cljs.core.Keyword(null,"stop-remote","stop-remote",1455305901),expr__90133))){
return (new dat.remote.impl.sente.SenteRemote(self__.sente_options,self__.send_GT_,self__.recv_GT_,self__.sente_sock,G__90128,self__.server_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__90132.call(null,new cljs.core.Keyword(null,"server?","server?",1803113525),expr__90133))){
return (new dat.remote.impl.sente.SenteRemote(self__.sente_options,self__.send_GT_,self__.recv_GT_,self__.sente_sock,self__.stop_remote,G__90128,self__.__meta,self__.__extmap,null));
} else {
return (new dat.remote.impl.sente.SenteRemote(self__.sente_options,self__.send_GT_,self__.recv_GT_,self__.sente_sock,self__.stop_remote,self__.server_QMARK_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__61582__auto__,G__90128),null));
}
}
}
}
}
}
});

dat.remote.impl.sente.SenteRemote.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__61586__auto__){
var self__ = this;
var this__61586__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sente-options","sente-options",-1204018742),self__.sente_options],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"send>","send>",158540406),self__.send_GT_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"recv>","recv>",-1762221420),self__.recv_GT_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sente-sock","sente-sock",-1421548735),self__.sente_sock],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stop-remote","stop-remote",1455305901),self__.stop_remote],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"server?","server?",1803113525),self__.server_QMARK_],null))], null),self__.__extmap));
});

dat.remote.impl.sente.SenteRemote.prototype.dat$spec$protocols$Wire$ = cljs.core.PROTOCOL_SENTINEL;

dat.remote.impl.sente.SenteRemote.prototype.dat$spec$protocols$Wire$recv_chan$arity$1 = (function (remote){
var self__ = this;
var remote__$1 = this;
return self__.recv_GT_;
});

dat.remote.impl.sente.SenteRemote.prototype.dat$spec$protocols$Wire$send_chan$arity$1 = (function (remote){
var self__ = this;
var remote__$1 = this;
return self__.send_GT_;
});

dat.remote.impl.sente.SenteRemote.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__61573__auto__,G__90128){
var self__ = this;
var this__61573__auto____$1 = this;
return (new dat.remote.impl.sente.SenteRemote(self__.sente_options,self__.send_GT_,self__.recv_GT_,self__.sente_sock,self__.stop_remote,self__.server_QMARK_,G__90128,self__.__extmap,self__.__hash));
});

dat.remote.impl.sente.SenteRemote.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__61579__auto__,entry__61580__auto__){
var self__ = this;
var this__61579__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__61580__auto__)){
return this__61579__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__61580__auto__,(0)),cljs.core._nth.call(null,entry__61580__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__61579__auto____$1,entry__61580__auto__);
}
});

dat.remote.impl.sente.SenteRemote.prototype.dat$spec$protocols$PRemoteEventChan$ = cljs.core.PROTOCOL_SENTINEL;

dat.remote.impl.sente.SenteRemote.prototype.dat$spec$protocols$PRemoteEventChan$remote_event_chan$arity$1 = (function (remote){
var self__ = this;
var remote__$1 = this;
return self__.recv_GT_;
});

dat.remote.impl.sente.SenteRemote.prototype.com$stuartsierra$component$Lifecycle$ = cljs.core.PROTOCOL_SENTINEL;

dat.remote.impl.sente.SenteRemote.prototype.com$stuartsierra$component$Lifecycle$start$arity$1 = (function (remote){
var self__ = this;
var remote__$1 = this;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dat.remote.impl.sente","/tmp/form-init8382301926859034614.clj",83,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (remote__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Starting SenteRemote Component"], null);
});})(remote__$1))
,null)),null,-72330915);

var send_GT___$1 = (function (){var or__60899__auto__ = self__.send_GT_;
if(cljs.core.truth_(or__60899__auto__)){
return or__60899__auto__;
} else {
return cljs.core.async.chan.call(null,(100));
}
})();
var recv_GT___$1 = (function (){var or__60899__auto__ = self__.recv_GT_;
if(cljs.core.truth_(or__60899__auto__)){
return or__60899__auto__;
} else {
return cljs.core.async.chan.call(null,(100));
}
})();
var sente_options__$1 = cljs.core.merge.call(null,dat.remote.impl.sente.default_sente_options,self__.sente_options);
var sock_options = cljs.core.merge.call(null,dat.remote.impl.sente.default_sente_options,cljs.core.dissoc.call(null,sente_options__$1,new cljs.core.Keyword(null,"chsk-route","chsk-route",28990043)));
var map__90135 = (function (){var or__60899__auto__ = self__.sente_sock;
if(cljs.core.truth_(or__60899__auto__)){
return or__60899__auto__;
} else {
if(cljs.core.truth_(self__.server_QMARK_)){
throw "Sente cannot run in server mode in cljs";
} else {
return taoensso.sente.make_channel_socket_BANG_.call(null,new cljs.core.Keyword(null,"chsk-route","chsk-route",28990043).cljs$core$IFn$_invoke$arity$1(sente_options__$1),sock_options);
}
}
})();
var map__90135__$1 = ((((!((map__90135 == null)))?((((map__90135.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__90135.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90135):map__90135);
var sente_sock__$1 = map__90135__$1;
var ch_recv = cljs.core.get.call(null,map__90135__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.call(null,map__90135__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var connected_uids = cljs.core.get.call(null,map__90135__$1,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231));
var ajax_post_fn = cljs.core.get.call(null,map__90135__$1,new cljs.core.Keyword(null,"ajax-post-fn","ajax-post-fn",1830071264));
var ajax_get_or_ws_handshake_fn = cljs.core.get.call(null,map__90135__$1,new cljs.core.Keyword(null,"ajax-get-or-ws-handshake-fn","ajax-get-or-ws-handshake-fn",-1210409233));
var stop_remote__$1 = (function (){var or__60899__auto__ = self__.stop_remote;
if(cljs.core.truth_(or__60899__auto__)){
return or__60899__auto__;
} else {
dat.remote.impl.sente.go_sente_send_BANG_.call(null,send_GT___$1,sente_sock__$1);

return taoensso.sente.start_chsk_router_BANG_.call(null,ch_recv,((function (or__60899__auto__,send_GT___$1,recv_GT___$1,sente_options__$1,sock_options,map__90135,map__90135__$1,sente_sock__$1,ch_recv,send_fn,connected_uids,ajax_post_fn,ajax_get_or_ws_handshake_fn,remote__$1){
return (function (p1__90127_SHARP_){
var seg = dat.remote.impl.sente.recv_ev_msg__GT_seg.call(null,p1__90127_SHARP_);
return cljs.core.async.put_BANG_.call(null,recv_GT___$1,seg);
});})(or__60899__auto__,send_GT___$1,recv_GT___$1,sente_options__$1,sock_options,map__90135,map__90135__$1,sente_sock__$1,ch_recv,send_fn,connected_uids,ajax_post_fn,ajax_get_or_ws_handshake_fn,remote__$1))
);
}
})();
return cljs.core.assoc.call(null,remote__$1,new cljs.core.Keyword(null,"send>","send>",158540406),send_GT___$1,new cljs.core.Keyword(null,"recv>","recv>",-1762221420),recv_GT___$1,new cljs.core.Keyword(null,"stop-remote","stop-remote",1455305901),stop_remote__$1,new cljs.core.Keyword(null,"sente-sock","sente-sock",-1421548735),sente_sock__$1,new cljs.core.Keyword(null,"sente-options","sente-options",-1204018742),sente_options__$1);
});

dat.remote.impl.sente.SenteRemote.prototype.com$stuartsierra$component$Lifecycle$stop$arity$1 = (function (remote){
var self__ = this;
var remote__$1 = this;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dat.remote.impl.sente","/tmp/form-init8382301926859034614.clj",109,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (remote__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Stopping SenteRemote component"], null);
});})(remote__$1))
,null)),null,-304817131);

try{taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"dat.remote.impl.sente","/tmp/form-init8382301926859034614.clj",112,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (remote__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SenteRemote stopped successfully"], null);
});})(remote__$1))
,null)),null,1370666541);

self__.stop_remote.call(null);

return cljs.core.assoc.call(null,remote__$1,new cljs.core.Keyword(null,"send>","send>",158540406),null,new cljs.core.Keyword(null,"recv>","recv>",-1762221420),null,new cljs.core.Keyword(null,"stop-remote","stop-remote",1455305901),null,new cljs.core.Keyword(null,"sente-options","sente-options",-1204018742),null,new cljs.core.Keyword(null,"sente-sock","sente-sock",-1421548735),null);
}catch (e90137){var e = e90137;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"dat.remote.impl.sente","/tmp/form-init8382301926859034614.clj",121,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,remote__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Error stopping SenteRemote:",e], null);
});})(e,remote__$1))
,null)),null,-1950819660);

return remote__$1;
}});

dat.remote.impl.sente.SenteRemote.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sente-options","sente-options",436512785,null),new cljs.core.Symbol(null,"send>","send>",1799071933,null),new cljs.core.Symbol(null,"recv>","recv>",-121689893,null),new cljs.core.Symbol(null,"sente-sock","sente-sock",218982792,null),new cljs.core.Symbol(null,"stop-remote","stop-remote",-1199129868,null),new cljs.core.Symbol(null,"server?","server?",-851322244,null)], null);
});

dat.remote.impl.sente.SenteRemote.cljs$lang$type = true;

dat.remote.impl.sente.SenteRemote.cljs$lang$ctorPrSeq = (function (this__61610__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"dat.remote.impl.sente/SenteRemote");
});

dat.remote.impl.sente.SenteRemote.cljs$lang$ctorPrWriter = (function (this__61610__auto__,writer__61611__auto__){
return cljs.core._write.call(null,writer__61611__auto__,"dat.remote.impl.sente/SenteRemote");
});

dat.remote.impl.sente.__GT_SenteRemote = (function dat$remote$impl$sente$__GT_SenteRemote(sente_options,send_GT_,recv_GT_,sente_sock,stop_remote,server_QMARK_){
return (new dat.remote.impl.sente.SenteRemote(sente_options,send_GT_,recv_GT_,sente_sock,stop_remote,server_QMARK_,null,null,null));
});

dat.remote.impl.sente.map__GT_SenteRemote = (function dat$remote$impl$sente$map__GT_SenteRemote(G__90130){
return (new dat.remote.impl.sente.SenteRemote(new cljs.core.Keyword(null,"sente-options","sente-options",-1204018742).cljs$core$IFn$_invoke$arity$1(G__90130),new cljs.core.Keyword(null,"send>","send>",158540406).cljs$core$IFn$_invoke$arity$1(G__90130),new cljs.core.Keyword(null,"recv>","recv>",-1762221420).cljs$core$IFn$_invoke$arity$1(G__90130),new cljs.core.Keyword(null,"sente-sock","sente-sock",-1421548735).cljs$core$IFn$_invoke$arity$1(G__90130),new cljs.core.Keyword(null,"stop-remote","stop-remote",1455305901).cljs$core$IFn$_invoke$arity$1(G__90130),new cljs.core.Keyword(null,"server?","server?",1803113525).cljs$core$IFn$_invoke$arity$1(G__90130),null,cljs.core.dissoc.call(null,G__90130,new cljs.core.Keyword(null,"sente-options","sente-options",-1204018742),new cljs.core.Keyword(null,"send>","send>",158540406),new cljs.core.Keyword(null,"recv>","recv>",-1762221420),new cljs.core.Keyword(null,"sente-sock","sente-sock",-1421548735),new cljs.core.Keyword(null,"stop-remote","stop-remote",1455305901),new cljs.core.Keyword(null,"server?","server?",1803113525)),null));
});

/**
 * Options include `:sente-options`, which is passed as the second argument to `sente/make-channel-socket!`.
 *   Additionally, the `:chsk-route` option of the `:sente-options` map is passed as the first argument to
 *   `sente/make-channel-socket!`, assuming you don't want to use the default (`"chsk"`). You can see all
 *   datsync defaults for these options in `default-sente-options`.
 * 
 *   Additionally, note that you can specify via the options map your own `:event-chan`, which is the channel on which
 *   output messages get put (the result of calling `dat.spec.protocols/remote-event-chan` on this system component).
 */
dat.remote.impl.sente.new_sente_remote = (function dat$remote$impl$sente$new_sente_remote(var_args){
var args90139 = [];
var len__62120__auto___90142 = arguments.length;
var i__62121__auto___90143 = (0);
while(true){
if((i__62121__auto___90143 < len__62120__auto___90142)){
args90139.push((arguments[i__62121__auto___90143]));

var G__90144 = (i__62121__auto___90143 + (1));
i__62121__auto___90143 = G__90144;
continue;
} else {
}
break;
}

var G__90141 = args90139.length;
switch (G__90141) {
case 0:
return dat.remote.impl.sente.new_sente_remote.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return dat.remote.impl.sente.new_sente_remote.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args90139.length)].join('')));

}
});

dat.remote.impl.sente.new_sente_remote.cljs$core$IFn$_invoke$arity$0 = (function (){
return dat.remote.impl.sente.new_sente_remote.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

dat.remote.impl.sente.new_sente_remote.cljs$core$IFn$_invoke$arity$1 = (function (options){
return dat.remote.impl.sente.map__GT_SenteRemote.call(null,options);
});

dat.remote.impl.sente.new_sente_remote.cljs$lang$maxFixedArity = 1;

dat.reactor.register_handler.call(null,new cljs.core.Keyword("dat.remote.impl.sente","event","dat.remote.impl.sente/event",1757332610),(function (app,db,p__90146){
var vec__90147 = p__90146;
var _ = cljs.core.nth.call(null,vec__90147,(0),null);
var sente_message = cljs.core.nth.call(null,vec__90147,(1),null);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"dat.remote.impl.sente","/tmp/form-init8382301926859034614.clj",168,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__90147,_,sente_message){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Sente message recieved:",cljs.core.first.call(null,sente_message)], null);
});})(vec__90147,_,sente_message))
,null)),null,-1783672680);

return dat.reactor.resolve_to.call(null,app,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sente_message], null));
}));
dat.reactor.register_handler.call(null,new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),(function (app,db,p__90150){
var vec__90151 = p__90150;
var _ = cljs.core.nth.call(null,vec__90151,(0),null);
var message = cljs.core.nth.call(null,vec__90151,(1),null);
try{if(cljs.core.truth_((function (){var or__60899__auto__ = new cljs.core.Keyword(null,"first-open?","first-open?",396686530).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,message));
if(cljs.core.truth_(or__60899__auto__)){
return or__60899__auto__;
} else {
return new cljs.core.Keyword(null,"first-open?","first-open?",396686530).cljs$core$IFn$_invoke$arity$1(message);
}
})())){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dat.remote.impl.sente","/tmp/form-init8382301926859034614.clj",192,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__90151,_,message){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["First channel socket open; Sending bootstrap message"], null);
});})(vec__90151,_,message))
,null)),null,-1793336996);

return dat.reactor.resolve_to.call(null,app,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.remote","connected","dat.remote/connected",-95364560),true], null)], null));
} else {
return db;
}
}catch (e90154){var e = e90154;
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"dat.remote.impl.sente","/tmp/form-init8382301926859034614.clj",198,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,vec__90151,_,message){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Exception handling :chsk/state:",e], null);
});})(e,vec__90151,_,message))
,null)),null,-1216334967);
}}));
dat.reactor.register_handler.call(null,new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304),(function (app,db,_){
return db;
}));
dat.reactor.register_handler.call(null,new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),(function (app,db,p__90155){
var vec__90156 = p__90155;
var _ = cljs.core.nth.call(null,vec__90156,(0),null);
var map__90159 = cljs.core.nth.call(null,vec__90156,(1),null);
var map__90159__$1 = ((((!((map__90159 == null)))?((((map__90159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__90159.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90159):map__90159);
var ev_msg = map__90159__$1;
var _QMARK_data = cljs.core.get.call(null,map__90159__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
return db;
}));
dat.reactor.register_handler.call(null,new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),(function (app,db,p__90161){
var vec__90162 = p__90161;
var _ = cljs.core.nth.call(null,vec__90162,(0),null);
var event = cljs.core.nth.call(null,vec__90162,(1),null);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dat.remote.impl.sente","/tmp/form-init8382301926859034614.clj",217,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__90162,_,event){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [":chsk/recv for event-id:",cljs.core.first.call(null,event)], null);
});})(vec__90162,_,event))
,null)),null,1832541246);

return dat.reactor.resolve_to.call(null,app,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [event], null));
}));
dat.remote.impl.sente.ring_handlers = (function dat$remote$impl$sente$ring_handlers(ws_connection){
return new cljs.core.Keyword(null,"ring-handlers","ring-handlers",-1858967252).cljs$core$IFn$_invoke$arity$1(ws_connection);
});

//# sourceMappingURL=sente.js.map?rel=1506064215390