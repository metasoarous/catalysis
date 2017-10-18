// Compiled by ClojureScript 1.9.542 {}
goog.provide('superv.async');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async.impl.protocols');
/**
 * Take the &env from a macro, and tell whether we are expanding into cljs.
 */
superv.async.cljs_env_QMARK_ = (function superv$async$cljs_env_QMARK_(env){
return cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env));
});

/**
 * @interface
 */
superv.async.PSupervisor = function(){};

superv.async._error = (function superv$async$_error(this$){
if((!((this$ == null))) && (!((this$.superv$async$PSupervisor$_error$arity$1 == null)))){
return this$.superv$async$PSupervisor$_error$arity$1(this$);
} else {
var x__61617__auto__ = (((this$ == null))?null:this$);
var m__61618__auto__ = (superv.async._error[goog.typeOf(x__61617__auto__)]);
if(!((m__61618__auto__ == null))){
return m__61618__auto__.call(null,this$);
} else {
var m__61618__auto____$1 = (superv.async._error["_"]);
if(!((m__61618__auto____$1 == null))){
return m__61618__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"PSupervisor.-error",this$);
}
}
}
});

superv.async._abort = (function superv$async$_abort(this$){
if((!((this$ == null))) && (!((this$.superv$async$PSupervisor$_abort$arity$1 == null)))){
return this$.superv$async$PSupervisor$_abort$arity$1(this$);
} else {
var x__61617__auto__ = (((this$ == null))?null:this$);
var m__61618__auto__ = (superv.async._abort[goog.typeOf(x__61617__auto__)]);
if(!((m__61618__auto__ == null))){
return m__61618__auto__.call(null,this$);
} else {
var m__61618__auto____$1 = (superv.async._abort["_"]);
if(!((m__61618__auto____$1 == null))){
return m__61618__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"PSupervisor.-abort",this$);
}
}
}
});

superv.async._register_go = (function superv$async$_register_go(this$,body){
if((!((this$ == null))) && (!((this$.superv$async$PSupervisor$_register_go$arity$2 == null)))){
return this$.superv$async$PSupervisor$_register_go$arity$2(this$,body);
} else {
var x__61617__auto__ = (((this$ == null))?null:this$);
var m__61618__auto__ = (superv.async._register_go[goog.typeOf(x__61617__auto__)]);
if(!((m__61618__auto__ == null))){
return m__61618__auto__.call(null,this$,body);
} else {
var m__61618__auto____$1 = (superv.async._register_go["_"]);
if(!((m__61618__auto____$1 == null))){
return m__61618__auto____$1.call(null,this$,body);
} else {
throw cljs.core.missing_protocol.call(null,"PSupervisor.-register-go",this$);
}
}
}
});

superv.async._unregister_go = (function superv$async$_unregister_go(this$,id){
if((!((this$ == null))) && (!((this$.superv$async$PSupervisor$_unregister_go$arity$2 == null)))){
return this$.superv$async$PSupervisor$_unregister_go$arity$2(this$,id);
} else {
var x__61617__auto__ = (((this$ == null))?null:this$);
var m__61618__auto__ = (superv.async._unregister_go[goog.typeOf(x__61617__auto__)]);
if(!((m__61618__auto__ == null))){
return m__61618__auto__.call(null,this$,id);
} else {
var m__61618__auto____$1 = (superv.async._unregister_go["_"]);
if(!((m__61618__auto____$1 == null))){
return m__61618__auto____$1.call(null,this$,id);
} else {
throw cljs.core.missing_protocol.call(null,"PSupervisor.-unregister-go",this$);
}
}
}
});

superv.async._track_exception = (function superv$async$_track_exception(this$,e){
if((!((this$ == null))) && (!((this$.superv$async$PSupervisor$_track_exception$arity$2 == null)))){
return this$.superv$async$PSupervisor$_track_exception$arity$2(this$,e);
} else {
var x__61617__auto__ = (((this$ == null))?null:this$);
var m__61618__auto__ = (superv.async._track_exception[goog.typeOf(x__61617__auto__)]);
if(!((m__61618__auto__ == null))){
return m__61618__auto__.call(null,this$,e);
} else {
var m__61618__auto____$1 = (superv.async._track_exception["_"]);
if(!((m__61618__auto____$1 == null))){
return m__61618__auto____$1.call(null,this$,e);
} else {
throw cljs.core.missing_protocol.call(null,"PSupervisor.-track-exception",this$);
}
}
}
});

superv.async._free_exception = (function superv$async$_free_exception(this$,e){
if((!((this$ == null))) && (!((this$.superv$async$PSupervisor$_free_exception$arity$2 == null)))){
return this$.superv$async$PSupervisor$_free_exception$arity$2(this$,e);
} else {
var x__61617__auto__ = (((this$ == null))?null:this$);
var m__61618__auto__ = (superv.async._free_exception[goog.typeOf(x__61617__auto__)]);
if(!((m__61618__auto__ == null))){
return m__61618__auto__.call(null,this$,e);
} else {
var m__61618__auto____$1 = (superv.async._free_exception["_"]);
if(!((m__61618__auto____$1 == null))){
return m__61618__auto____$1.call(null,this$,e);
} else {
throw cljs.core.missing_protocol.call(null,"PSupervisor.-free-exception",this$);
}
}
}
});

superv.async.now = (function superv$async$now(){
return (new Date());
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
 * @implements {superv.async.PSupervisor}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
superv.async.TrackingSupervisor = (function (error,abort,registered,pending_exceptions,__meta,__extmap,__hash){
this.error = error;
this.abort = abort;
this.registered = registered;
this.pending_exceptions = pending_exceptions;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
superv.async.TrackingSupervisor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__61574__auto__,k__61575__auto__){
var self__ = this;
var this__61574__auto____$1 = this;
return this__61574__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__61575__auto__,null);
});

superv.async.TrackingSupervisor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__61576__auto__,k81227,else__61577__auto__){
var self__ = this;
var this__61576__auto____$1 = this;
var G__81229 = k81227;
var G__81229__$1 = (((G__81229 instanceof cljs.core.Keyword))?G__81229.fqn:null);
switch (G__81229__$1) {
case "error":
return self__.error;

break;
case "abort":
return self__.abort;

break;
case "registered":
return self__.registered;

break;
case "pending-exceptions":
return self__.pending_exceptions;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k81227,else__61577__auto__);

}
});

superv.async.TrackingSupervisor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__61588__auto__,writer__61589__auto__,opts__61590__auto__){
var self__ = this;
var this__61588__auto____$1 = this;
var pr_pair__61591__auto__ = ((function (this__61588__auto____$1){
return (function (keyval__61592__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__61589__auto__,cljs.core.pr_writer,""," ","",opts__61590__auto__,keyval__61592__auto__);
});})(this__61588__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__61589__auto__,pr_pair__61591__auto__,"#superv.async.TrackingSupervisor{",", ","}",opts__61590__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"error","error",-978969032),self__.error],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"abort","abort",521193198),self__.abort],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"registered","registered",-388600037),self__.registered],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pending-exceptions","pending-exceptions",-1888280094),self__.pending_exceptions],null))], null),self__.__extmap));
});

superv.async.TrackingSupervisor.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

superv.async.TrackingSupervisor.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__81226){
var self__ = this;
var G__81226__$1 = this;
return (new cljs.core.RecordIter((0),G__81226__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"registered","registered",-388600037),new cljs.core.Keyword(null,"pending-exceptions","pending-exceptions",-1888280094)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

superv.async.TrackingSupervisor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__61572__auto__){
var self__ = this;
var this__61572__auto____$1 = this;
return self__.__meta;
});

superv.async.TrackingSupervisor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__61568__auto__){
var self__ = this;
var this__61568__auto____$1 = this;
return (new superv.async.TrackingSupervisor(self__.error,self__.abort,self__.registered,self__.pending_exceptions,self__.__meta,self__.__extmap,self__.__hash));
});

superv.async.TrackingSupervisor.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__61578__auto__){
var self__ = this;
var this__61578__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

superv.async.TrackingSupervisor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__61569__auto__){
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

superv.async.TrackingSupervisor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__61570__auto__,other__61571__auto__){
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

superv.async.TrackingSupervisor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__61583__auto__,k__61584__auto__){
var self__ = this;
var this__61583__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pending-exceptions","pending-exceptions",-1888280094),null,new cljs.core.Keyword(null,"abort","abort",521193198),null,new cljs.core.Keyword(null,"error","error",-978969032),null,new cljs.core.Keyword(null,"registered","registered",-388600037),null], null), null),k__61584__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__61583__auto____$1),self__.__meta),k__61584__auto__);
} else {
return (new superv.async.TrackingSupervisor(self__.error,self__.abort,self__.registered,self__.pending_exceptions,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__61584__auto__)),null));
}
});

superv.async.TrackingSupervisor.prototype.superv$async$PSupervisor$ = cljs.core.PROTOCOL_SENTINEL;

superv.async.TrackingSupervisor.prototype.superv$async$PSupervisor$_error$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.error;
});

superv.async.TrackingSupervisor.prototype.superv$async$PSupervisor$_abort$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.abort;
});

superv.async.TrackingSupervisor.prototype.superv$async$PSupervisor$_register_go$arity$2 = (function (this$,body){
var self__ = this;
var this$__$1 = this;
var id = cljs.core.random_uuid.call(null);
cljs.core.swap_BANG_.call(null,self__.registered,cljs.core.assoc,id,body);

return id;
});

superv.async.TrackingSupervisor.prototype.superv$async$PSupervisor$_unregister_go$arity$2 = (function (this$,id){
var self__ = this;
var this$__$1 = this;
return cljs.core.swap_BANG_.call(null,self__.registered,cljs.core.dissoc,id);
});

superv.async.TrackingSupervisor.prototype.superv$async$PSupervisor$_track_exception$arity$2 = (function (this$,e){
var self__ = this;
var this$__$1 = this;
return cljs.core.swap_BANG_.call(null,self__.pending_exceptions,cljs.core.assoc,e,superv.async.now.call(null));
});

superv.async.TrackingSupervisor.prototype.superv$async$PSupervisor$_free_exception$arity$2 = (function (this$,e){
var self__ = this;
var this$__$1 = this;
return cljs.core.swap_BANG_.call(null,self__.pending_exceptions,cljs.core.dissoc,e);
});

superv.async.TrackingSupervisor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__61581__auto__,k__61582__auto__,G__81226){
var self__ = this;
var this__61581__auto____$1 = this;
var pred__81230 = cljs.core.keyword_identical_QMARK_;
var expr__81231 = k__61582__auto__;
if(cljs.core.truth_(pred__81230.call(null,new cljs.core.Keyword(null,"error","error",-978969032),expr__81231))){
return (new superv.async.TrackingSupervisor(G__81226,self__.abort,self__.registered,self__.pending_exceptions,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__81230.call(null,new cljs.core.Keyword(null,"abort","abort",521193198),expr__81231))){
return (new superv.async.TrackingSupervisor(self__.error,G__81226,self__.registered,self__.pending_exceptions,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__81230.call(null,new cljs.core.Keyword(null,"registered","registered",-388600037),expr__81231))){
return (new superv.async.TrackingSupervisor(self__.error,self__.abort,G__81226,self__.pending_exceptions,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__81230.call(null,new cljs.core.Keyword(null,"pending-exceptions","pending-exceptions",-1888280094),expr__81231))){
return (new superv.async.TrackingSupervisor(self__.error,self__.abort,self__.registered,G__81226,self__.__meta,self__.__extmap,null));
} else {
return (new superv.async.TrackingSupervisor(self__.error,self__.abort,self__.registered,self__.pending_exceptions,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__61582__auto__,G__81226),null));
}
}
}
}
});

superv.async.TrackingSupervisor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__61586__auto__){
var self__ = this;
var this__61586__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"error","error",-978969032),self__.error],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"abort","abort",521193198),self__.abort],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"registered","registered",-388600037),self__.registered],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pending-exceptions","pending-exceptions",-1888280094),self__.pending_exceptions],null))], null),self__.__extmap));
});

superv.async.TrackingSupervisor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__61573__auto__,G__81226){
var self__ = this;
var this__61573__auto____$1 = this;
return (new superv.async.TrackingSupervisor(self__.error,self__.abort,self__.registered,self__.pending_exceptions,G__81226,self__.__extmap,self__.__hash));
});

superv.async.TrackingSupervisor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__61579__auto__,entry__61580__auto__){
var self__ = this;
var this__61579__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__61580__auto__)){
return this__61579__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__61580__auto__,(0)),cljs.core._nth.call(null,entry__61580__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__61579__auto____$1,entry__61580__auto__);
}
});

superv.async.TrackingSupervisor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"error","error",661562495,null),new cljs.core.Symbol(null,"abort","abort",-2133242571,null),new cljs.core.Symbol(null,"registered","registered",1251931490,null),new cljs.core.Symbol(null,"pending-exceptions","pending-exceptions",-247748567,null)], null);
});

superv.async.TrackingSupervisor.cljs$lang$type = true;

superv.async.TrackingSupervisor.cljs$lang$ctorPrSeq = (function (this__61610__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"superv.async/TrackingSupervisor");
});

superv.async.TrackingSupervisor.cljs$lang$ctorPrWriter = (function (this__61610__auto__,writer__61611__auto__){
return cljs.core._write.call(null,writer__61611__auto__,"superv.async/TrackingSupervisor");
});

superv.async.__GT_TrackingSupervisor = (function superv$async$__GT_TrackingSupervisor(error,abort,registered,pending_exceptions){
return (new superv.async.TrackingSupervisor(error,abort,registered,pending_exceptions,null,null,null));
});

superv.async.map__GT_TrackingSupervisor = (function superv$async$map__GT_TrackingSupervisor(G__81228){
return (new superv.async.TrackingSupervisor(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(G__81228),new cljs.core.Keyword(null,"abort","abort",521193198).cljs$core$IFn$_invoke$arity$1(G__81228),new cljs.core.Keyword(null,"registered","registered",-388600037).cljs$core$IFn$_invoke$arity$1(G__81228),new cljs.core.Keyword(null,"pending-exceptions","pending-exceptions",-1888280094).cljs$core$IFn$_invoke$arity$1(G__81228),null,cljs.core.dissoc.call(null,G__81228,new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"registered","registered",-388600037),new cljs.core.Keyword(null,"pending-exceptions","pending-exceptions",-1888280094)),null));
});

cljs.core.enable_console_print_BANG_.call(null);
/**
 * A simple supervisor which deals with errors through callbacks. You need to
 *   close its abort channel manually if you want the context to stop. It is
 *   supposed to be used at a boundary to an unsupervised system. If you want
 *   strong supervision, use the restarting-supervisor instead.
 */
superv.async.simple_supervisor = (function superv$async$simple_supervisor(var_args){
var args__62127__auto__ = [];
var len__62120__auto___81258 = arguments.length;
var i__62121__auto___81259 = (0);
while(true){
if((i__62121__auto___81259 < len__62120__auto___81258)){
args__62127__auto__.push((arguments[i__62121__auto___81259]));

var G__81260 = (i__62121__auto___81259 + (1));
i__62121__auto___81259 = G__81260;
continue;
} else {
}
break;
}

var argseq__62128__auto__ = ((((0) < args__62127__auto__.length))?(new cljs.core.IndexedSeq(args__62127__auto__.slice((0)),(0),null)):null);
return superv.async.simple_supervisor.cljs$core$IFn$_invoke$arity$variadic(argseq__62128__auto__);
});

superv.async.simple_supervisor.cljs$core$IFn$_invoke$arity$variadic = (function (p__81235){
var map__81236 = p__81235;
var map__81236__$1 = ((((!((map__81236 == null)))?((((map__81236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__81236.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__81236):map__81236);
var stale_timeout = cljs.core.get.call(null,map__81236__$1,new cljs.core.Keyword(null,"stale-timeout","stale-timeout",-468804294),((10) * (1000)));
var error_fn = cljs.core.get.call(null,map__81236__$1,new cljs.core.Keyword(null,"error-fn","error-fn",-171437615),((function (map__81236,map__81236__$1,stale_timeout){
return (function (e){
return cljs.core.println.call(null,"Supervisor:",e,e.stack);
});})(map__81236,map__81236__$1,stale_timeout))
);
var pending_fn = cljs.core.get.call(null,map__81236__$1,new cljs.core.Keyword(null,"pending-fn","pending-fn",1734381755));
var s = superv.async.map__GT_TrackingSupervisor.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"abort","abort",521193198),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"registered","registered",-388600037),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"pending-exceptions","pending-exceptions",-1888280094),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY)], null));
var err_ch = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(s);
cljs.core.async.take_BANG_.call(null,err_ch,((function (s,err_ch,map__81236,map__81236__$1,stale_timeout,error_fn,pending_fn){
return (function superv$async$loop_fn(e){
error_fn.call(null,e);

return cljs.core.async.take_BANG_.call(null,err_ch,superv$async$loop_fn);
});})(s,err_ch,map__81236,map__81236__$1,stale_timeout,error_fn,pending_fn))
);

((function (s,err_ch,map__81236,map__81236__$1,stale_timeout,error_fn,pending_fn){
return (function superv$async$pending(_){
var vec__81248 = cljs.core.filter.call(null,((function (s,err_ch,map__81236,map__81236__$1,stale_timeout,error_fn,pending_fn){
return (function (p__81254){
var vec__81255 = p__81254;
var k = cljs.core.nth.call(null,vec__81255,(0),null);
var v = cljs.core.nth.call(null,vec__81255,(1),null);
return ((superv.async.now.call(null).getTime() - stale_timeout) > v.getTime());
});})(s,err_ch,map__81236,map__81236__$1,stale_timeout,error_fn,pending_fn))
,cljs.core.deref.call(null,new cljs.core.Keyword(null,"pending-exceptions","pending-exceptions",-1888280094).cljs$core$IFn$_invoke$arity$1(s)));
var vec__81251 = cljs.core.nth.call(null,vec__81248,(0),null);
var e = cljs.core.nth.call(null,vec__81251,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__81251,(1),null);
if(cljs.core.truth_(e)){
error_fn.call(null,e);

superv.async._free_exception.call(null,s,e);
} else {
}

return cljs.core.async.take_BANG_.call(null,cljs.core.async.timeout.call(null,stale_timeout),superv$async$pending);
});})(s,err_ch,map__81236,map__81236__$1,stale_timeout,error_fn,pending_fn))
.call(null,null);

return s;
});

superv.async.simple_supervisor.cljs$lang$maxFixedArity = (0);

superv.async.simple_supervisor.cljs$lang$applyTo = (function (seq81234){
return superv.async.simple_supervisor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq81234));
});

superv.async.S = superv.async.simple_supervisor.call(null);
/**
 * Helper method that checks if x is Exception and if yes, wraps it in a new
 *   exception, passing though ex-data if any, and throws it. The wrapping is done
 *   to maintain a full stack trace when jumping between multiple contexts.
 */
superv.async.throw_if_exception = (function superv$async$throw_if_exception(S,x){
if((x instanceof Error)){
superv.async._free_exception.call(null,S,x);

throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''),(function (){var or__60899__auto__ = cljs.core.ex_data.call(null,x);
if(cljs.core.truth_(or__60899__auto__)){
return or__60899__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),x);
} else {
return x;
}
});
superv.async.superv_init = (function superv$async$superv_init(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [superv.async._error,superv.async._abort,superv.async._register_go,superv.async._unregister_go,superv.async._track_exception,superv.async._free_exception,superv.async.throw_if_exception], null);
});
goog.exportSymbol('superv.async.superv_init', superv.async.superv_init);
superv.async.superv_init.call(null);
superv.async.supervisor_QMARK_ = (function superv$async$supervisor_QMARK_(x){
if(!((x == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === x.superv$async$PSupervisor$))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,superv.async.PSupervisor,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,superv.async.PSupervisor,x);
}
});
superv.async.check_supervisor = (function superv$async$check_supervisor(x){
if(cljs.core.truth_(superv.async.supervisor_QMARK_.call(null,x))){
return null;
} else {
throw cljs.core.ex_info.call(null,"First argument is not a supervisor.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"argument","argument",1183001841),x], null));
}
});
/**
 * Here until http://dev.clojure.org/jira/browse/ASYNC-74 is resolved.
 */
superv.async.chan_QMARK_ = (function superv$async$chan_QMARK_(x){
if(!((x == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$async$impl$protocols$ReadPort$))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,x);
}
});
/**
 * Same as core.async/take!, but tracks exceptions in supervisor. TODO
 * deal with abortion.
 */
superv.async.take_QMARK_ = (function superv$async$take_QMARK_(var_args){
var args81278 = [];
var len__62120__auto___81281 = arguments.length;
var i__62121__auto___81282 = (0);
while(true){
if((i__62121__auto___81282 < len__62120__auto___81281)){
args81278.push((arguments[i__62121__auto___81282]));

var G__81283 = (i__62121__auto___81282 + (1));
i__62121__auto___81282 = G__81283;
continue;
} else {
}
break;
}

var G__81280 = args81278.length;
switch (G__81280) {
case 3:
return superv.async.take_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return superv.async.take_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args81278.length)].join('')));

}
});

superv.async.take_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (S,port,fn1){
return superv.async.take_QMARK_.call(null,S,port,fn1,true);
});

superv.async.take_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (S,port,fn1,on_caller_QMARK_){
return cljs.core.async.take_BANG_.call(null,port,(function (v){
if((v instanceof Error)){
superv.async._free_exception.call(null,S,v);
} else {
}

return fn1.call(null,v);
}),on_caller_QMARK_);
});

superv.async.take_QMARK_.cljs$lang$maxFixedArity = 4;

/**
 * Same as core.async/put!, but tracks exceptions in supervisor. TODO
 * deal with abortion.
 */
superv.async.put_QMARK_ = (function superv$async$put_QMARK_(var_args){
var args81285 = [];
var len__62120__auto___81288 = arguments.length;
var i__62121__auto___81289 = (0);
while(true){
if((i__62121__auto___81289 < len__62120__auto___81288)){
args81285.push((arguments[i__62121__auto___81289]));

var G__81290 = (i__62121__auto___81289 + (1));
i__62121__auto___81289 = G__81290;
continue;
} else {
}
break;
}

var G__81287 = args81285.length;
switch (G__81287) {
case 3:
return superv.async.put_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return superv.async.put_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return superv.async.put_QMARK_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args81285.length)].join('')));

}
});

superv.async.put_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (S,port,val){
return superv.async.put_QMARK_.call(null,S,port,val,(function superv$async$noop(_){
return null;
}));
});

superv.async.put_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (S,port,val,fn1){
return superv.async.put_QMARK_.call(null,S,port,val,fn1,true);
});

superv.async.put_QMARK_.cljs$core$IFn$_invoke$arity$5 = (function (S,port,val,fn1,on_caller_QMARK_){
return cljs.core.async.put_BANG_.call(null,port,val,(function (ret){
if(((val instanceof Error)) && (!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,val)),new cljs.core.Keyword(null,"aborted","aborted",1775972619))))){
superv.async._track_exception.call(null,S,val);
} else {
}

return fn1.call(null,ret);
}),on_caller_QMARK_);
});

superv.async.put_QMARK_.cljs$lang$maxFixedArity = 5;

/**
 * Takes objects from in-ch, asynchrously applies function f> (function should
 *   return a channel), takes the result from the returned channel and if it's
 *   truthy, puts it in the out-ch. Returns the closed out-ch. Closes the
 *   returned channel when the input channel has been completely consumed and all
 *   objects have been processed.
 *   If out-ch is not provided, an unbuffered one will be used.
 */
superv.async.pmap_GT__GT_ = (function superv$async$pmap_GT__GT_(var_args){
var args81303 = [];
var len__62120__auto___81506 = arguments.length;
var i__62121__auto___81507 = (0);
while(true){
if((i__62121__auto___81507 < len__62120__auto___81506)){
args81303.push((arguments[i__62121__auto___81507]));

var G__81508 = (i__62121__auto___81507 + (1));
i__62121__auto___81507 = G__81508;
continue;
} else {
}
break;
}

var G__81305 = args81303.length;
switch (G__81305) {
case 4:
return superv.async.pmap_GT__GT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return superv.async.pmap_GT__GT_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args81303.length)].join('')));

}
});

superv.async.pmap_GT__GT_.cljs$core$IFn$_invoke$arity$4 = (function (S,f_GT_,parallelism,in_ch){
return superv.async.pmap_GT__GT_.call(null,S,f_GT_,parallelism,cljs.core.async.chan.call(null),in_ch);
});

superv.async.pmap_GT__GT_.cljs$core$IFn$_invoke$arity$5 = (function (S,f_GT_,parallelism,out_ch,in_ch){
if(cljs.core.fn_QMARK_.call(null,f_GT_)){
} else {
throw (new Error("Assert failed: (fn? f>)"));
}

if((cljs.core.integer_QMARK_.call(null,parallelism)) && ((parallelism > (0)))){
} else {
throw (new Error("Assert failed: (and (integer? parallelism) (pos? parallelism))"));
}

if((in_ch instanceof cljs.core.async.impl.protocols.ReadPort)){
} else {
throw (new Error("Assert failed: (instance? ReadPort in-ch)"));
}

var threads = cljs.core.atom.call(null,parallelism);
var n__61920__auto___81510 = parallelism;
var __81511 = (0);
while(true){
if((__81511 < n__61920__auto___81510)){
var c__77324__auto___81512 = superv.async.check_supervisor.call(null,superv.async.S);
var id__77325__auto___81513 = superv.async._register_go.call(null,S,cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"loop","loop",1244978678,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"when-let","when-let",-1383043480,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null),cljs.core.list(new cljs.core.Symbol(null,"<?","<?",-1929864530,null),new cljs.core.Symbol(null,"S","S",-1387142461,null),new cljs.core.Symbol(null,"in-ch","in-ch",-1757981794,null))], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"instance?","instance?",1075939923,null),new cljs.core.Symbol("js","Error","js/Error",-1692659266,null),new cljs.core.Symbol(null,"obj","obj",-1672671807,null)),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol(null,">?",">?",-766996309,null),new cljs.core.Symbol(null,"S","S",-1387142461,null),new cljs.core.Symbol(null,"out-ch","out-ch",1451485673,null),new cljs.core.Symbol(null,"obj","obj",-1672671807,null)),cljs.core.list(new cljs.core.Symbol("async","close!","async/close!",-546451935,null),new cljs.core.Symbol(null,"out-ch","out-ch",1451485673,null))),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol(null,"when-let","when-let",-1383043480,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"result","result",-1239343558,null),cljs.core.list(new cljs.core.Symbol(null,"<?","<?",-1929864530,null),new cljs.core.Symbol(null,"S","S",-1387142461,null),cljs.core.list(new cljs.core.Symbol(null,"f>","f>",-1169871571,null),new cljs.core.Symbol(null,"obj","obj",-1672671807,null)))], null),cljs.core.list(new cljs.core.Symbol(null,">?",">?",-766996309,null),new cljs.core.Symbol(null,"S","S",-1387142461,null),new cljs.core.Symbol(null,"out-ch","out-ch",1451485673,null),new cljs.core.Symbol(null,"result","result",-1239343558,null))),cljs.core.list(new cljs.core.Symbol(null,"recur","recur",1202958259,null)))))),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),cljs.core.list(new cljs.core.Symbol(null,"swap!","swap!",-655677516,null),new cljs.core.Symbol(null,"threads","threads",-77267207,null),new cljs.core.Symbol(null,"dec","dec",-766002333,null))),cljs.core.list(new cljs.core.Symbol("async","close!","async/close!",-546451935,null),new cljs.core.Symbol(null,"out-ch","out-ch",1451485673,null)))));
var c__69114__auto___81514 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__81511,c__69114__auto___81514,c__77324__auto___81512,id__77325__auto___81513,n__61920__auto___81510,threads){
return (function (){
var f__69115__auto__ = (function (){var switch__69000__auto__ = ((function (__81511,c__69114__auto___81514,c__77324__auto___81512,id__77325__auto___81513,n__61920__auto___81510,threads){
return (function (state_81440){
var state_val_81441 = (state_81440[(1)]);
if((state_val_81441 === (7))){
var inst_81309 = (state_81440[(7)]);
var inst_81317 = (state_81440[(2)]);
var state_81440__$1 = (function (){var statearr_81442 = state_81440;
(statearr_81442[(8)] = inst_81317);

return statearr_81442;
})();
var statearr_81443_81515 = state_81440__$1;
(statearr_81443_81515[(2)] = inst_81309);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_81440__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81441 === (20))){
var inst_81424 = (state_81440[(2)]);
var state_81440__$1 = state_81440;
var statearr_81444_81516 = state_81440__$1;
(statearr_81444_81516[(2)] = inst_81424);

(statearr_81444_81516[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81441 === (27))){
var inst_81386 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_81387 = [new cljs.core.Keyword(null,"aborted","aborted",1775972619)];
var inst_81388 = cljs.core.PersistentHashMap.fromArrays(inst_81386,inst_81387);
var inst_81389 = cljs.core.ex_info.call(null,"Aborted operations",inst_81388);
var state_81440__$1 = state_81440;
var statearr_81445_81517 = state_81440__$1;
(statearr_81445_81517[(2)] = inst_81389);

(statearr_81445_81517[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81441 === (1))){
var state_81440__$1 = state_81440;
var statearr_81446_81518 = state_81440__$1;
(statearr_81446_81518[(2)] = null);

(statearr_81446_81518[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81441 === (24))){
var inst_81368 = (state_81440[(2)]);
var inst_81369 = superv.async.throw_if_exception.call(null,S,inst_81368);
var inst_81370 = cljs.core.async.close_BANG_.call(null,out_ch);
var state_81440__$1 = (function (){var statearr_81447 = state_81440;
(statearr_81447[(9)] = inst_81369);

return statearr_81447;
})();
var statearr_81448_81519 = state_81440__$1;
(statearr_81448_81519[(2)] = inst_81370);

(statearr_81448_81519[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81441 === (39))){
var state_81440__$1 = state_81440;
var statearr_81449_81520 = state_81440__$1;
(statearr_81449_81520[(2)] = null);

(statearr_81449_81520[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81441 === (4))){
var inst_81309 = (state_81440[(7)]);
var inst_81309__$1 = (state_81440[(2)]);
var inst_81310 = cljs.core.ex_data.call(null,inst_81309__$1);
var inst_81311 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_81310);
var inst_81312 = cljs.core._EQ_.call(null,inst_81311,new cljs.core.Keyword(null,"aborted","aborted",1775972619));
var state_81440__$1 = (function (){var statearr_81450 = state_81440;
(statearr_81450[(7)] = inst_81309__$1);

return statearr_81450;
})();
if(inst_81312){
var statearr_81451_81521 = state_81440__$1;
(statearr_81451_81521[(1)] = (5));

} else {
var statearr_81452_81522 = state_81440__$1;
(statearr_81452_81522[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81441 === (15))){
var inst_81342 = (state_81440[(10)]);
var inst_81344 = (inst_81342 instanceof Error);
var state_81440__$1 = state_81440;
if(cljs.core.truth_(inst_81344)){
var statearr_81453_81523 = state_81440__$1;
(statearr_81453_81523[(1)] = (18));

} else {
var statearr_81454_81524 = state_81440__$1;
(statearr_81454_81524[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81441 === (21))){
var inst_81349 = (state_81440[(11)]);
var inst_81355 = (state_81440[(2)]);
var inst_81356 = cljs.core.nth.call(null,inst_81355,(0),null);
var inst_81357 = cljs.core.nth.call(null,inst_81355,(1),null);
var inst_81358 = cljs.core._EQ_.call(null,inst_81357,inst_81349);
var state_81440__$1 = (function (){var statearr_81455 = state_81440;
(statearr_81455[(12)] = inst_81356);

return statearr_81455;
})();
if(inst_81358){
var statearr_81456_81525 = state_81440__$1;
(statearr_81456_81525[(1)] = (22));

} else {
var statearr_81457_81526 = state_81440__$1;
(statearr_81457_81526[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81441 === (31))){
var state_81440__$1 = state_81440;
var statearr_81458_81527 = state_81440__$1;
(statearr_81458_81527[(2)] = null);

(statearr_81458_81527[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81441 === (32))){
var inst_81421 = (state_81440[(2)]);
var state_81440__$1 = (function (){var statearr_81459 = state_81440;
(statearr_81459[(13)] = inst_81421);

return statearr_81459;
})();
var statearr_81460_81528 = state_81440__$1;
(statearr_81460_81528[(2)] = null);

(statearr_81460_81528[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81441 === (40))){
var inst_81436 = (state_81440[(2)]);
var state_81440__$1 = state_81440;
var statearr_81461_81529 = state_81440__$1;
(statearr_81461_81529[(2)] = inst_81436);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_81440__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81441 === (33))){
var inst_81398 = (state_81440[(14)]);
var inst_81404 = (state_81440[(2)]);
var inst_81405 = cljs.core.nth.call(null,inst_81404,(0),null);
var inst_81406 = cljs.core.nth.call(null,inst_81404,(1),null);
var inst_81407 = cljs.core._EQ_.call(null,inst_81406,inst_81398);
var state_81440__$1 = (function (){var statearr_81462 = state_81440;
(statearr_81462[(15)] = inst_81405);

return statearr_81462;
})();
if(inst_81407){
var statearr_81463_81530 = state_81440__$1;
(statearr_81463_81530[(1)] = (34));

} else {
var statearr_81464_81531 = state_81440__$1;
(statearr_81464_81531[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81441 === (13))){
var inst_81331 = (state_81440[(16)]);
var state_81440__$1 = state_81440;
var statearr_81465_81532 = state_81440__$1;
(statearr_81465_81532[(2)] = inst_81331);

(statearr_81465_81532[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81441 === (22))){
var inst_81360 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_81361 = [new cljs.core.Keyword(null,"aborted","aborted",1775972619)];
var inst_81362 = cljs.core.PersistentHashMap.fromArrays(inst_81360,inst_81361);
var inst_81363 = cljs.core.ex_info.call(null,"Aborted operations",inst_81362);
var state_81440__$1 = state_81440;
var statearr_81466_81533 = state_81440__$1;
(statearr_81466_81533[(2)] = inst_81363);

(statearr_81466_81533[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81441 === (36))){
var inst_81417 = (state_81440[(2)]);
var inst_81418 = superv.async.throw_if_exception.call(null,S,inst_81417);
var state_81440__$1 = state_81440;
var statearr_81467_81534 = state_81440__$1;
(statearr_81467_81534[(2)] = inst_81418);

(statearr_81467_81534[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81441 === (29))){
var inst_81393 = (state_81440[(17)]);
var inst_81392 = (state_81440[(2)]);
var inst_81393__$1 = superv.async.throw_if_exception.call(null,S,inst_81392);
var state_81440__$1 = (function (){var statearr_81468 = state_81440;
(statearr_81468[(17)] = inst_81393__$1);

return statearr_81468;
})();
if(cljs.core.truth_(inst_81393__$1)){
var statearr_81469_81535 = state_81440__$1;
(statearr_81469_81535[(1)] = (30));

} else {
var statearr_81470_81536 = state_81440__$1;
(statearr_81470_81536[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81441 === (6))){
var inst_81309 = (state_81440[(7)]);
var inst_81315 = superv.async._track_exception.call(null,S,inst_81309);
var state_81440__$1 = state_81440;
var statearr_81471_81537 = state_81440__$1;
(statearr_81471_81537[(2)] = inst_81315);

(statearr_81471_81537[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81441 === (28))){
var inst_81382 = (state_81440[(18)]);
var state_81440__$1 = state_81440;
var statearr_81472_81538 = state_81440__$1;
(statearr_81472_81538[(2)] = inst_81382);

(statearr_81472_81538[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81441 === (25))){
var inst_81366 = (state_81440[(2)]);
var state_81440__$1 = state_81440;
var statearr_81473_81539 = state_81440__$1;
(statearr_81473_81539[(2)] = inst_81366);

(statearr_81473_81539[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81441 === (34))){
var inst_81409 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_81410 = [new cljs.core.Keyword(null,"aborted","aborted",1775972619)];
var inst_81411 = cljs.core.PersistentHashMap.fromArrays(inst_81409,inst_81410);
var inst_81412 = cljs.core.ex_info.call(null,"Aborted operations",inst_81411);
var state_81440__$1 = state_81440;
var statearr_81474_81540 = state_81440__$1;
(statearr_81474_81540[(2)] = inst_81412);

(statearr_81474_81540[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81441 === (17))){
var inst_81427 = (state_81440[(2)]);
var state_81440__$1 = state_81440;
var statearr_81475_81541 = state_81440__$1;
(statearr_81475_81541[(2)] = inst_81427);

(statearr_81475_81541[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81441 === (3))){
var inst_81306 = (state_81440[(2)]);
var inst_81307 = superv.async._unregister_go.call(null,S,id__77325__auto___81513);
var state_81440__$1 = (function (){var statearr_81476 = state_81440;
(statearr_81476[(19)] = inst_81306);

(statearr_81476[(20)] = inst_81307);

return statearr_81476;
})();
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_81440__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81441 === (12))){
var inst_81335 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_81336 = [new cljs.core.Keyword(null,"aborted","aborted",1775972619)];
var inst_81337 = cljs.core.PersistentHashMap.fromArrays(inst_81335,inst_81336);
var inst_81338 = cljs.core.ex_info.call(null,"Aborted operations",inst_81337);
var state_81440__$1 = state_81440;
var statearr_81477_81542 = state_81440__$1;
(statearr_81477_81542[(2)] = inst_81338);

(statearr_81477_81542[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81441 === (2))){
var inst_81438 = (state_81440[(2)]);
var state_81440__$1 = state_81440;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_81440__$1,inst_81438);
} else {
if((state_val_81441 === (23))){
var inst_81342 = (state_81440[(10)]);
var state_81440__$1 = state_81440;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_81440__$1,(25),out_ch,inst_81342);
} else {
if((state_val_81441 === (35))){
var inst_81393 = (state_81440[(17)]);
var state_81440__$1 = state_81440;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_81440__$1,(37),out_ch,inst_81393);
} else {
if((state_val_81441 === (19))){
var inst_81342 = (state_81440[(10)]);
var inst_81375 = (state_81440[(21)]);
var inst_81375__$1 = superv.async._abort.call(null,S);
var inst_81376 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_81377 = f_GT_.call(null,inst_81342);
var inst_81378 = [inst_81375__$1,inst_81377];
var inst_81379 = (new cljs.core.PersistentVector(null,2,(5),inst_81376,inst_81378,null));
var state_81440__$1 = (function (){var statearr_81478 = state_81440;
(statearr_81478[(21)] = inst_81375__$1);

return statearr_81478;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_81440__$1,(26),inst_81379,new cljs.core.Keyword(null,"priority","priority",1431093715),new cljs.core.Keyword(null,"true","true",-1114210334));
} else {
if((state_val_81441 === (11))){
var inst_81325 = (state_81440[(22)]);
var inst_81330 = (state_81440[(2)]);
var inst_81331 = cljs.core.nth.call(null,inst_81330,(0),null);
var inst_81332 = cljs.core.nth.call(null,inst_81330,(1),null);
var inst_81333 = cljs.core._EQ_.call(null,inst_81332,inst_81325);
var state_81440__$1 = (function (){var statearr_81479 = state_81440;
(statearr_81479[(16)] = inst_81331);

return statearr_81479;
})();
if(inst_81333){
var statearr_81480_81543 = state_81440__$1;
(statearr_81480_81543[(1)] = (12));

} else {
var statearr_81481_81544 = state_81440__$1;
(statearr_81481_81544[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81441 === (9))){
var inst_81325 = (state_81440[(22)]);
var inst_81325__$1 = superv.async._abort.call(null,S);
var inst_81326 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_81327 = [inst_81325__$1,in_ch];
var inst_81328 = (new cljs.core.PersistentVector(null,2,(5),inst_81326,inst_81327,null));
var state_81440__$1 = (function (){var statearr_81482 = state_81440;
(statearr_81482[(22)] = inst_81325__$1);

return statearr_81482;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_81440__$1,(11),inst_81328,new cljs.core.Keyword(null,"priority","priority",1431093715),new cljs.core.Keyword(null,"true","true",-1114210334));
} else {
if((state_val_81441 === (5))){
var state_81440__$1 = state_81440;
var statearr_81483_81545 = state_81440__$1;
(statearr_81483_81545[(2)] = null);

(statearr_81483_81545[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81441 === (14))){
var inst_81342 = (state_81440[(10)]);
var inst_81341 = (state_81440[(2)]);
var inst_81342__$1 = superv.async.throw_if_exception.call(null,S,inst_81341);
var state_81440__$1 = (function (){var statearr_81484 = state_81440;
(statearr_81484[(10)] = inst_81342__$1);

return statearr_81484;
})();
if(cljs.core.truth_(inst_81342__$1)){
var statearr_81485_81546 = state_81440__$1;
(statearr_81485_81546[(1)] = (15));

} else {
var statearr_81486_81547 = state_81440__$1;
(statearr_81486_81547[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81441 === (26))){
var inst_81375 = (state_81440[(21)]);
var inst_81381 = (state_81440[(2)]);
var inst_81382 = cljs.core.nth.call(null,inst_81381,(0),null);
var inst_81383 = cljs.core.nth.call(null,inst_81381,(1),null);
var inst_81384 = cljs.core._EQ_.call(null,inst_81383,inst_81375);
var state_81440__$1 = (function (){var statearr_81487 = state_81440;
(statearr_81487[(18)] = inst_81382);

return statearr_81487;
})();
if(inst_81384){
var statearr_81488_81548 = state_81440__$1;
(statearr_81488_81548[(1)] = (27));

} else {
var statearr_81489_81549 = state_81440__$1;
(statearr_81489_81549[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81441 === (16))){
var state_81440__$1 = state_81440;
var statearr_81490_81550 = state_81440__$1;
(statearr_81490_81550[(2)] = null);

(statearr_81490_81550[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81441 === (38))){
var inst_81433 = cljs.core.async.close_BANG_.call(null,out_ch);
var state_81440__$1 = state_81440;
var statearr_81491_81551 = state_81440__$1;
(statearr_81491_81551[(2)] = inst_81433);

(statearr_81491_81551[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81441 === (30))){
var inst_81398 = (state_81440[(14)]);
var inst_81398__$1 = superv.async._abort.call(null,S);
var inst_81399 = cljs.core.async.timeout.call(null,(0));
var inst_81400 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_81401 = [inst_81398__$1,inst_81399];
var inst_81402 = (new cljs.core.PersistentVector(null,2,(5),inst_81400,inst_81401,null));
var state_81440__$1 = (function (){var statearr_81492 = state_81440;
(statearr_81492[(14)] = inst_81398__$1);

return statearr_81492;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_81440__$1,(33),inst_81402,new cljs.core.Keyword(null,"priority","priority",1431093715),true);
} else {
if((state_val_81441 === (10))){
var inst_81429 = (state_81440[(2)]);
var inst_81430 = cljs.core.swap_BANG_.call(null,threads,cljs.core.dec);
var inst_81431 = (inst_81430 === (0));
var state_81440__$1 = (function (){var statearr_81493 = state_81440;
(statearr_81493[(23)] = inst_81429);

return statearr_81493;
})();
if(cljs.core.truth_(inst_81431)){
var statearr_81494_81552 = state_81440__$1;
(statearr_81494_81552[(1)] = (38));

} else {
var statearr_81495_81553 = state_81440__$1;
(statearr_81495_81553[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81441 === (18))){
var inst_81349 = (state_81440[(11)]);
var inst_81349__$1 = superv.async._abort.call(null,S);
var inst_81350 = cljs.core.async.timeout.call(null,(0));
var inst_81351 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_81352 = [inst_81349__$1,inst_81350];
var inst_81353 = (new cljs.core.PersistentVector(null,2,(5),inst_81351,inst_81352,null));
var state_81440__$1 = (function (){var statearr_81496 = state_81440;
(statearr_81496[(11)] = inst_81349__$1);

return statearr_81496;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_81440__$1,(21),inst_81353,new cljs.core.Keyword(null,"priority","priority",1431093715),true);
} else {
if((state_val_81441 === (37))){
var inst_81415 = (state_81440[(2)]);
var state_81440__$1 = state_81440;
var statearr_81497_81554 = state_81440__$1;
(statearr_81497_81554[(2)] = inst_81415);

(statearr_81497_81554[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81441 === (8))){
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_81440,(4),Error,(3),(2));
var state_81440__$1 = state_81440;
var statearr_81498_81555 = state_81440__$1;
(statearr_81498_81555[(2)] = null);

(statearr_81498_81555[(1)] = (9));


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
});})(__81511,c__69114__auto___81514,c__77324__auto___81512,id__77325__auto___81513,n__61920__auto___81510,threads))
;
return ((function (__81511,switch__69000__auto__,c__69114__auto___81514,c__77324__auto___81512,id__77325__auto___81513,n__61920__auto___81510,threads){
return (function() {
var superv$async$state_machine__69001__auto__ = null;
var superv$async$state_machine__69001__auto____0 = (function (){
var statearr_81502 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_81502[(0)] = superv$async$state_machine__69001__auto__);

(statearr_81502[(1)] = (1));

return statearr_81502;
});
var superv$async$state_machine__69001__auto____1 = (function (state_81440){
while(true){
var ret_value__69002__auto__ = (function (){try{while(true){
var result__69003__auto__ = switch__69000__auto__.call(null,state_81440);
if(cljs.core.keyword_identical_QMARK_.call(null,result__69003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69003__auto__;
}
break;
}
}catch (e81503){if((e81503 instanceof Object)){
var ex__69004__auto__ = e81503;
var statearr_81504_81556 = state_81440;
(statearr_81504_81556[(5)] = ex__69004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_81440);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e81503;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__69002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__81557 = state_81440;
state_81440 = G__81557;
continue;
} else {
return ret_value__69002__auto__;
}
break;
}
});
superv$async$state_machine__69001__auto__ = function(state_81440){
switch(arguments.length){
case 0:
return superv$async$state_machine__69001__auto____0.call(this);
case 1:
return superv$async$state_machine__69001__auto____1.call(this,state_81440);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
superv$async$state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$0 = superv$async$state_machine__69001__auto____0;
superv$async$state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$1 = superv$async$state_machine__69001__auto____1;
return superv$async$state_machine__69001__auto__;
})()
;})(__81511,switch__69000__auto__,c__69114__auto___81514,c__77324__auto___81512,id__77325__auto___81513,n__61920__auto___81510,threads))
})();
var state__69116__auto__ = (function (){var statearr_81505 = f__69115__auto__.call(null);
(statearr_81505[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__69114__auto___81514);

return statearr_81505;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__69116__auto__);
});})(__81511,c__69114__auto___81514,c__77324__auto___81512,id__77325__auto___81513,n__61920__auto___81510,threads))
);


var G__81558 = (__81511 + (1));
__81511 = G__81558;
continue;
} else {
}
break;
}

return out_ch;
});

superv.async.pmap_GT__GT_.cljs$lang$maxFixedArity = 5;

/**
 * Similiar to dorun. Simply takes messages from channels but does nothing with
 *   them. Returns channel that will close when all messages have been consumed.
 */
superv.async.engulf = (function superv$async$engulf(var_args){
var args__62127__auto__ = [];
var len__62120__auto___81639 = arguments.length;
var i__62121__auto___81640 = (0);
while(true){
if((i__62121__auto___81640 < len__62120__auto___81639)){
args__62127__auto__.push((arguments[i__62121__auto___81640]));

var G__81641 = (i__62121__auto___81640 + (1));
i__62121__auto___81640 = G__81641;
continue;
} else {
}
break;
}

var argseq__62128__auto__ = ((((1) < args__62127__auto__.length))?(new cljs.core.IndexedSeq(args__62127__auto__.slice((1)),(0),null)):null);
return superv.async.engulf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__62128__auto__);
});

superv.async.engulf.cljs$core$IFn$_invoke$arity$variadic = (function (S,cs){
var ch = cljs.core.async.merge.call(null,cs);
var c__77324__auto__ = superv.async.check_supervisor.call(null,superv.async.S);
var id__77325__auto__ = superv.async._register_go.call(null,S,cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","loop","clojure.core/loop",-1797836771,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"<?","<?",-1929864530,null),new cljs.core.Symbol(null,"S","S",-1387142461,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)),cljs.core.list(new cljs.core.Symbol(null,"recur","recur",1202958259,null))))));
var c__69114__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__69114__auto__,c__77324__auto__,id__77325__auto__,ch){
return (function (){
var f__69115__auto__ = (function (){var switch__69000__auto__ = ((function (c__69114__auto__,c__77324__auto__,id__77325__auto__,ch){
return (function (state_81608){
var state_val_81609 = (state_81608[(1)]);
if((state_val_81609 === (7))){
var inst_81564 = (state_81608[(7)]);
var inst_81572 = (state_81608[(2)]);
var state_81608__$1 = (function (){var statearr_81610 = state_81608;
(statearr_81610[(8)] = inst_81572);

return statearr_81610;
})();
var statearr_81611_81642 = state_81608__$1;
(statearr_81611_81642[(2)] = inst_81564);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_81608__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81609 === (1))){
var state_81608__$1 = state_81608;
var statearr_81612_81643 = state_81608__$1;
(statearr_81612_81643[(2)] = null);

(statearr_81612_81643[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81609 === (4))){
var inst_81564 = (state_81608[(7)]);
var inst_81564__$1 = (state_81608[(2)]);
var inst_81565 = cljs.core.ex_data.call(null,inst_81564__$1);
var inst_81566 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_81565);
var inst_81567 = cljs.core._EQ_.call(null,inst_81566,new cljs.core.Keyword(null,"aborted","aborted",1775972619));
var state_81608__$1 = (function (){var statearr_81613 = state_81608;
(statearr_81613[(7)] = inst_81564__$1);

return statearr_81613;
})();
if(inst_81567){
var statearr_81614_81644 = state_81608__$1;
(statearr_81614_81644[(1)] = (5));

} else {
var statearr_81615_81645 = state_81608__$1;
(statearr_81615_81645[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81609 === (15))){
var state_81608__$1 = state_81608;
var statearr_81616_81646 = state_81608__$1;
(statearr_81616_81646[(2)] = null);

(statearr_81616_81646[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81609 === (13))){
var inst_81586 = (state_81608[(9)]);
var state_81608__$1 = state_81608;
var statearr_81617_81647 = state_81608__$1;
(statearr_81617_81647[(2)] = inst_81586);

(statearr_81617_81647[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81609 === (6))){
var inst_81564 = (state_81608[(7)]);
var inst_81570 = superv.async._track_exception.call(null,S,inst_81564);
var state_81608__$1 = state_81608;
var statearr_81618_81648 = state_81608__$1;
(statearr_81618_81648[(2)] = inst_81570);

(statearr_81618_81648[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81609 === (17))){
var inst_81602 = (state_81608[(2)]);
var state_81608__$1 = state_81608;
var statearr_81619_81649 = state_81608__$1;
(statearr_81619_81649[(2)] = inst_81602);

(statearr_81619_81649[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81609 === (3))){
var inst_81561 = (state_81608[(2)]);
var inst_81562 = superv.async._unregister_go.call(null,S,id__77325__auto__);
var state_81608__$1 = (function (){var statearr_81620 = state_81608;
(statearr_81620[(10)] = inst_81562);

(statearr_81620[(11)] = inst_81561);

return statearr_81620;
})();
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_81608__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81609 === (12))){
var inst_81590 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_81591 = [new cljs.core.Keyword(null,"aborted","aborted",1775972619)];
var inst_81592 = cljs.core.PersistentHashMap.fromArrays(inst_81590,inst_81591);
var inst_81593 = cljs.core.ex_info.call(null,"Aborted operations",inst_81592);
var state_81608__$1 = state_81608;
var statearr_81621_81650 = state_81608__$1;
(statearr_81621_81650[(2)] = inst_81593);

(statearr_81621_81650[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81609 === (2))){
var inst_81606 = (state_81608[(2)]);
var state_81608__$1 = state_81608;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_81608__$1,inst_81606);
} else {
if((state_val_81609 === (11))){
var inst_81580 = (state_81608[(12)]);
var inst_81585 = (state_81608[(2)]);
var inst_81586 = cljs.core.nth.call(null,inst_81585,(0),null);
var inst_81587 = cljs.core.nth.call(null,inst_81585,(1),null);
var inst_81588 = cljs.core._EQ_.call(null,inst_81587,inst_81580);
var state_81608__$1 = (function (){var statearr_81622 = state_81608;
(statearr_81622[(9)] = inst_81586);

return statearr_81622;
})();
if(inst_81588){
var statearr_81623_81651 = state_81608__$1;
(statearr_81623_81651[(1)] = (12));

} else {
var statearr_81624_81652 = state_81608__$1;
(statearr_81624_81652[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81609 === (9))){
var inst_81580 = (state_81608[(12)]);
var inst_81580__$1 = superv.async._abort.call(null,S);
var inst_81581 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_81582 = [inst_81580__$1,ch];
var inst_81583 = (new cljs.core.PersistentVector(null,2,(5),inst_81581,inst_81582,null));
var state_81608__$1 = (function (){var statearr_81625 = state_81608;
(statearr_81625[(12)] = inst_81580__$1);

return statearr_81625;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_81608__$1,(11),inst_81583,new cljs.core.Keyword(null,"priority","priority",1431093715),new cljs.core.Keyword(null,"true","true",-1114210334));
} else {
if((state_val_81609 === (5))){
var state_81608__$1 = state_81608;
var statearr_81626_81653 = state_81608__$1;
(statearr_81626_81653[(2)] = null);

(statearr_81626_81653[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81609 === (14))){
var inst_81596 = (state_81608[(2)]);
var inst_81597 = superv.async.throw_if_exception.call(null,S,inst_81596);
var state_81608__$1 = state_81608;
if(cljs.core.truth_(inst_81597)){
var statearr_81627_81654 = state_81608__$1;
(statearr_81627_81654[(1)] = (15));

} else {
var statearr_81628_81655 = state_81608__$1;
(statearr_81628_81655[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81609 === (16))){
var state_81608__$1 = state_81608;
var statearr_81629_81656 = state_81608__$1;
(statearr_81629_81656[(2)] = null);

(statearr_81629_81656[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81609 === (10))){
var inst_81604 = (state_81608[(2)]);
var state_81608__$1 = state_81608;
var statearr_81630_81657 = state_81608__$1;
(statearr_81630_81657[(2)] = inst_81604);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_81608__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81609 === (8))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_81608,(4),Error,(3),(2));
var state_81608__$1 = state_81608;
var statearr_81631_81658 = state_81608__$1;
(statearr_81631_81658[(2)] = null);

(statearr_81631_81658[(1)] = (9));


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
});})(c__69114__auto__,c__77324__auto__,id__77325__auto__,ch))
;
return ((function (switch__69000__auto__,c__69114__auto__,c__77324__auto__,id__77325__auto__,ch){
return (function() {
var superv$async$state_machine__69001__auto__ = null;
var superv$async$state_machine__69001__auto____0 = (function (){
var statearr_81635 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_81635[(0)] = superv$async$state_machine__69001__auto__);

(statearr_81635[(1)] = (1));

return statearr_81635;
});
var superv$async$state_machine__69001__auto____1 = (function (state_81608){
while(true){
var ret_value__69002__auto__ = (function (){try{while(true){
var result__69003__auto__ = switch__69000__auto__.call(null,state_81608);
if(cljs.core.keyword_identical_QMARK_.call(null,result__69003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69003__auto__;
}
break;
}
}catch (e81636){if((e81636 instanceof Object)){
var ex__69004__auto__ = e81636;
var statearr_81637_81659 = state_81608;
(statearr_81637_81659[(5)] = ex__69004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_81608);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e81636;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__69002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__81660 = state_81608;
state_81608 = G__81660;
continue;
} else {
return ret_value__69002__auto__;
}
break;
}
});
superv$async$state_machine__69001__auto__ = function(state_81608){
switch(arguments.length){
case 0:
return superv$async$state_machine__69001__auto____0.call(this);
case 1:
return superv$async$state_machine__69001__auto____1.call(this,state_81608);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
superv$async$state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$0 = superv$async$state_machine__69001__auto____0;
superv$async$state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$1 = superv$async$state_machine__69001__auto____1;
return superv$async$state_machine__69001__auto__;
})()
;})(switch__69000__auto__,c__69114__auto__,c__77324__auto__,id__77325__auto__,ch))
})();
var state__69116__auto__ = (function (){var statearr_81638 = f__69115__auto__.call(null);
(statearr_81638[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__69114__auto__);

return statearr_81638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__69116__auto__);
});})(c__69114__auto__,c__77324__auto__,id__77325__auto__,ch))
);

return c__69114__auto__;
});

superv.async.engulf.cljs$lang$maxFixedArity = (1);

superv.async.engulf.cljs$lang$applyTo = (function (seq81559){
var G__81560 = cljs.core.first.call(null,seq81559);
var seq81559__$1 = cljs.core.next.call(null,seq81559);
return superv.async.engulf.cljs$core$IFn$_invoke$arity$variadic(G__81560,seq81559__$1);
});

/**
 * Performs a reduce on objects from ch with the function f> (which
 *   should return a channel). Returns a channel with the resulting
 *   value.
 */
superv.async.reduce_GT_ = (function superv$async$reduce_GT_(S,f_GT_,acc,ch){
var result = cljs.core.async.chan.call(null);
var c__77324__auto___82027 = superv.async.check_supervisor.call(null,superv.async.S);
var id__77325__auto___82028 = superv.async._register_go.call(null,S,cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","loop","clojure.core/loop",-1797836771,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"acc","acc",-1815869457,null),new cljs.core.Symbol(null,"acc","acc",-1815869457,null)], null),cljs.core.list(new cljs.core.Symbol(null,"if-let","if-let",1803593690,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),cljs.core.list(new cljs.core.Symbol(null,"<?","<?",-1929864530,null),new cljs.core.Symbol(null,"S","S",-1387142461,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null))], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"instance?","instance?",1075939923,null),new cljs.core.Symbol("js","Error","js/Error",-1692659266,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol(null,">?",">?",-766996309,null),new cljs.core.Symbol(null,"S","S",-1387142461,null),new cljs.core.Symbol(null,"result","result",-1239343558,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol("async","close!","async/close!",-546451935,null),new cljs.core.Symbol(null,"result","result",-1239343558,null))),cljs.core.list(new cljs.core.Symbol(null,"->>","->>",-1874332161,null),cljs.core.list(new cljs.core.Symbol(null,"f>","f>",-1169871571,null),new cljs.core.Symbol(null,"acc","acc",-1815869457,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"<?","<?",-1929864530,null),new cljs.core.Symbol(null,"S","S",-1387142461,null)),new cljs.core.Symbol(null,"recur","recur",1202958259,null))),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol(null,">?",">?",-766996309,null),new cljs.core.Symbol(null,"S","S",-1387142461,null),new cljs.core.Symbol(null,"result","result",-1239343558,null),new cljs.core.Symbol(null,"acc","acc",-1815869457,null)),cljs.core.list(new cljs.core.Symbol("async","close!","async/close!",-546451935,null),new cljs.core.Symbol(null,"result","result",-1239343558,null)))))));
var c__69114__auto___82029 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__69114__auto___82029,c__77324__auto___82027,id__77325__auto___82028,result){
return (function (){
var f__69115__auto__ = (function (){var switch__69000__auto__ = ((function (c__69114__auto___82029,c__77324__auto___82027,id__77325__auto___82028,result){
return (function (state_81969){
var state_val_81970 = (state_81969[(1)]);
if((state_val_81970 === (7))){
var inst_81847 = (state_81969[(7)]);
var inst_81855 = (state_81969[(2)]);
var state_81969__$1 = (function (){var statearr_81971 = state_81969;
(statearr_81971[(8)] = inst_81855);

return statearr_81971;
})();
var statearr_81972_82030 = state_81969__$1;
(statearr_81972_82030[(2)] = inst_81847);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_81969__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81970 === (20))){
var inst_81935 = (state_81969[(2)]);
var state_81969__$1 = state_81969;
var statearr_81973_82031 = state_81969__$1;
(statearr_81973_82031[(2)] = inst_81935);

(statearr_81973_82031[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81970 === (27))){
var inst_81925 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_81926 = [new cljs.core.Keyword(null,"aborted","aborted",1775972619)];
var inst_81927 = cljs.core.PersistentHashMap.fromArrays(inst_81925,inst_81926);
var inst_81928 = cljs.core.ex_info.call(null,"Aborted operations",inst_81927);
var state_81969__$1 = state_81969;
var statearr_81974_82032 = state_81969__$1;
(statearr_81974_82032[(2)] = inst_81928);

(statearr_81974_82032[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81970 === (1))){
var state_81969__$1 = state_81969;
var statearr_81975_82033 = state_81969__$1;
(statearr_81975_82033[(2)] = null);

(statearr_81975_82033[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81970 === (24))){
var inst_81907 = (state_81969[(2)]);
var inst_81908 = superv.async.throw_if_exception.call(null,S,inst_81907);
var inst_81909 = cljs.core.async.close_BANG_.call(null,result);
var state_81969__$1 = (function (){var statearr_81976 = state_81969;
(statearr_81976[(9)] = inst_81908);

return statearr_81976;
})();
var statearr_81977_82034 = state_81969__$1;
(statearr_81977_82034[(2)] = inst_81909);

(statearr_81977_82034[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81970 === (4))){
var inst_81847 = (state_81969[(7)]);
var inst_81847__$1 = (state_81969[(2)]);
var inst_81848 = cljs.core.ex_data.call(null,inst_81847__$1);
var inst_81849 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_81848);
var inst_81850 = cljs.core._EQ_.call(null,inst_81849,new cljs.core.Keyword(null,"aborted","aborted",1775972619));
var state_81969__$1 = (function (){var statearr_81978 = state_81969;
(statearr_81978[(7)] = inst_81847__$1);

return statearr_81978;
})();
if(inst_81850){
var statearr_81979_82035 = state_81969__$1;
(statearr_81979_82035[(1)] = (5));

} else {
var statearr_81980_82036 = state_81969__$1;
(statearr_81980_82036[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81970 === (15))){
var inst_81881 = (state_81969[(10)]);
var inst_81883 = (inst_81881 instanceof Error);
var state_81969__$1 = state_81969;
if(cljs.core.truth_(inst_81883)){
var statearr_81981_82037 = state_81969__$1;
(statearr_81981_82037[(1)] = (18));

} else {
var statearr_81982_82038 = state_81969__$1;
(statearr_81982_82038[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81970 === (21))){
var inst_81888 = (state_81969[(11)]);
var inst_81894 = (state_81969[(2)]);
var inst_81895 = cljs.core.nth.call(null,inst_81894,(0),null);
var inst_81896 = cljs.core.nth.call(null,inst_81894,(1),null);
var inst_81897 = cljs.core._EQ_.call(null,inst_81896,inst_81888);
var state_81969__$1 = (function (){var statearr_81983 = state_81969;
(statearr_81983[(12)] = inst_81895);

return statearr_81983;
})();
if(inst_81897){
var statearr_81984_82039 = state_81969__$1;
(statearr_81984_82039[(1)] = (22));

} else {
var statearr_81985_82040 = state_81969__$1;
(statearr_81985_82040[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81970 === (31))){
var inst_81951 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_81952 = [new cljs.core.Keyword(null,"aborted","aborted",1775972619)];
var inst_81953 = cljs.core.PersistentHashMap.fromArrays(inst_81951,inst_81952);
var inst_81954 = cljs.core.ex_info.call(null,"Aborted operations",inst_81953);
var state_81969__$1 = state_81969;
var statearr_81986_82041 = state_81969__$1;
(statearr_81986_82041[(2)] = inst_81954);

(statearr_81986_82041[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81970 === (32))){
var inst_81859 = (state_81969[(13)]);
var state_81969__$1 = state_81969;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_81969__$1,(34),result,inst_81859);
} else {
if((state_val_81970 === (33))){
var inst_81959 = (state_81969[(2)]);
var inst_81960 = superv.async.throw_if_exception.call(null,S,inst_81959);
var inst_81961 = cljs.core.async.close_BANG_.call(null,result);
var state_81969__$1 = (function (){var statearr_81987 = state_81969;
(statearr_81987[(14)] = inst_81960);

return statearr_81987;
})();
var statearr_81988_82042 = state_81969__$1;
(statearr_81988_82042[(2)] = inst_81961);

(statearr_81988_82042[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81970 === (13))){
var inst_81870 = (state_81969[(15)]);
var state_81969__$1 = state_81969;
var statearr_81989_82043 = state_81969__$1;
(statearr_81989_82043[(2)] = inst_81870);

(statearr_81989_82043[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81970 === (22))){
var inst_81899 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_81900 = [new cljs.core.Keyword(null,"aborted","aborted",1775972619)];
var inst_81901 = cljs.core.PersistentHashMap.fromArrays(inst_81899,inst_81900);
var inst_81902 = cljs.core.ex_info.call(null,"Aborted operations",inst_81901);
var state_81969__$1 = state_81969;
var statearr_81990_82044 = state_81969__$1;
(statearr_81990_82044[(2)] = inst_81902);

(statearr_81990_82044[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81970 === (29))){
var inst_81931 = (state_81969[(2)]);
var inst_81932 = superv.async.throw_if_exception.call(null,S,inst_81931);
var inst_81859 = inst_81932;
var state_81969__$1 = (function (){var statearr_81991 = state_81969;
(statearr_81991[(13)] = inst_81859);

return statearr_81991;
})();
var statearr_81992_82045 = state_81969__$1;
(statearr_81992_82045[(2)] = null);

(statearr_81992_82045[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81970 === (6))){
var inst_81847 = (state_81969[(7)]);
var inst_81853 = superv.async._track_exception.call(null,S,inst_81847);
var state_81969__$1 = state_81969;
var statearr_81993_82046 = state_81969__$1;
(statearr_81993_82046[(2)] = inst_81853);

(statearr_81993_82046[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81970 === (28))){
var inst_81921 = (state_81969[(16)]);
var state_81969__$1 = state_81969;
var statearr_81994_82047 = state_81969__$1;
(statearr_81994_82047[(2)] = inst_81921);

(statearr_81994_82047[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81970 === (25))){
var inst_81905 = (state_81969[(2)]);
var state_81969__$1 = state_81969;
var statearr_81995_82048 = state_81969__$1;
(statearr_81995_82048[(2)] = inst_81905);

(statearr_81995_82048[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81970 === (34))){
var inst_81957 = (state_81969[(2)]);
var state_81969__$1 = state_81969;
var statearr_81996_82049 = state_81969__$1;
(statearr_81996_82049[(2)] = inst_81957);

(statearr_81996_82049[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81970 === (17))){
var inst_81963 = (state_81969[(2)]);
var state_81969__$1 = state_81969;
var statearr_81997_82050 = state_81969__$1;
(statearr_81997_82050[(2)] = inst_81963);

(statearr_81997_82050[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81970 === (3))){
var inst_81844 = (state_81969[(2)]);
var inst_81845 = superv.async._unregister_go.call(null,S,id__77325__auto___82028);
var state_81969__$1 = (function (){var statearr_81998 = state_81969;
(statearr_81998[(17)] = inst_81844);

(statearr_81998[(18)] = inst_81845);

return statearr_81998;
})();
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_81969__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81970 === (12))){
var inst_81874 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_81875 = [new cljs.core.Keyword(null,"aborted","aborted",1775972619)];
var inst_81876 = cljs.core.PersistentHashMap.fromArrays(inst_81874,inst_81875);
var inst_81877 = cljs.core.ex_info.call(null,"Aborted operations",inst_81876);
var state_81969__$1 = state_81969;
var statearr_81999_82051 = state_81969__$1;
(statearr_81999_82051[(2)] = inst_81877);

(statearr_81999_82051[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81970 === (2))){
var inst_81967 = (state_81969[(2)]);
var state_81969__$1 = state_81969;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_81969__$1,inst_81967);
} else {
if((state_val_81970 === (23))){
var inst_81881 = (state_81969[(10)]);
var state_81969__$1 = state_81969;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_81969__$1,(25),result,inst_81881);
} else {
if((state_val_81970 === (19))){
var inst_81881 = (state_81969[(10)]);
var inst_81859 = (state_81969[(13)]);
var inst_81914 = (state_81969[(19)]);
var inst_81914__$1 = superv.async._abort.call(null,S);
var inst_81915 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_81916 = f_GT_.call(null,inst_81859,inst_81881);
var inst_81917 = [inst_81914__$1,inst_81916];
var inst_81918 = (new cljs.core.PersistentVector(null,2,(5),inst_81915,inst_81917,null));
var state_81969__$1 = (function (){var statearr_82000 = state_81969;
(statearr_82000[(19)] = inst_81914__$1);

return statearr_82000;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_81969__$1,(26),inst_81918,new cljs.core.Keyword(null,"priority","priority",1431093715),new cljs.core.Keyword(null,"true","true",-1114210334));
} else {
if((state_val_81970 === (11))){
var inst_81864 = (state_81969[(20)]);
var inst_81869 = (state_81969[(2)]);
var inst_81870 = cljs.core.nth.call(null,inst_81869,(0),null);
var inst_81871 = cljs.core.nth.call(null,inst_81869,(1),null);
var inst_81872 = cljs.core._EQ_.call(null,inst_81871,inst_81864);
var state_81969__$1 = (function (){var statearr_82001 = state_81969;
(statearr_82001[(15)] = inst_81870);

return statearr_82001;
})();
if(inst_81872){
var statearr_82002_82052 = state_81969__$1;
(statearr_82002_82052[(1)] = (12));

} else {
var statearr_82003_82053 = state_81969__$1;
(statearr_82003_82053[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81970 === (9))){
var inst_81864 = (state_81969[(20)]);
var inst_81864__$1 = superv.async._abort.call(null,S);
var inst_81865 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_81866 = [inst_81864__$1,ch];
var inst_81867 = (new cljs.core.PersistentVector(null,2,(5),inst_81865,inst_81866,null));
var state_81969__$1 = (function (){var statearr_82004 = state_81969;
(statearr_82004[(20)] = inst_81864__$1);

return statearr_82004;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_81969__$1,(11),inst_81867,new cljs.core.Keyword(null,"priority","priority",1431093715),new cljs.core.Keyword(null,"true","true",-1114210334));
} else {
if((state_val_81970 === (5))){
var state_81969__$1 = state_81969;
var statearr_82005_82054 = state_81969__$1;
(statearr_82005_82054[(2)] = null);

(statearr_82005_82054[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81970 === (14))){
var inst_81881 = (state_81969[(10)]);
var inst_81880 = (state_81969[(2)]);
var inst_81881__$1 = superv.async.throw_if_exception.call(null,S,inst_81880);
var state_81969__$1 = (function (){var statearr_82006 = state_81969;
(statearr_82006[(10)] = inst_81881__$1);

return statearr_82006;
})();
if(cljs.core.truth_(inst_81881__$1)){
var statearr_82007_82055 = state_81969__$1;
(statearr_82007_82055[(1)] = (15));

} else {
var statearr_82008_82056 = state_81969__$1;
(statearr_82008_82056[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81970 === (26))){
var inst_81914 = (state_81969[(19)]);
var inst_81920 = (state_81969[(2)]);
var inst_81921 = cljs.core.nth.call(null,inst_81920,(0),null);
var inst_81922 = cljs.core.nth.call(null,inst_81920,(1),null);
var inst_81923 = cljs.core._EQ_.call(null,inst_81922,inst_81914);
var state_81969__$1 = (function (){var statearr_82009 = state_81969;
(statearr_82009[(16)] = inst_81921);

return statearr_82009;
})();
if(inst_81923){
var statearr_82010_82057 = state_81969__$1;
(statearr_82010_82057[(1)] = (27));

} else {
var statearr_82011_82058 = state_81969__$1;
(statearr_82011_82058[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81970 === (16))){
var inst_81940 = (state_81969[(21)]);
var inst_81940__$1 = superv.async._abort.call(null,S);
var inst_81941 = cljs.core.async.timeout.call(null,(0));
var inst_81942 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_81943 = [inst_81940__$1,inst_81941];
var inst_81944 = (new cljs.core.PersistentVector(null,2,(5),inst_81942,inst_81943,null));
var state_81969__$1 = (function (){var statearr_82012 = state_81969;
(statearr_82012[(21)] = inst_81940__$1);

return statearr_82012;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_81969__$1,(30),inst_81944,new cljs.core.Keyword(null,"priority","priority",1431093715),true);
} else {
if((state_val_81970 === (30))){
var inst_81940 = (state_81969[(21)]);
var inst_81946 = (state_81969[(2)]);
var inst_81947 = cljs.core.nth.call(null,inst_81946,(0),null);
var inst_81948 = cljs.core.nth.call(null,inst_81946,(1),null);
var inst_81949 = cljs.core._EQ_.call(null,inst_81948,inst_81940);
var state_81969__$1 = (function (){var statearr_82013 = state_81969;
(statearr_82013[(22)] = inst_81947);

return statearr_82013;
})();
if(inst_81949){
var statearr_82014_82059 = state_81969__$1;
(statearr_82014_82059[(1)] = (31));

} else {
var statearr_82015_82060 = state_81969__$1;
(statearr_82015_82060[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81970 === (10))){
var inst_81965 = (state_81969[(2)]);
var state_81969__$1 = state_81969;
var statearr_82016_82061 = state_81969__$1;
(statearr_82016_82061[(2)] = inst_81965);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_81969__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81970 === (18))){
var inst_81888 = (state_81969[(11)]);
var inst_81888__$1 = superv.async._abort.call(null,S);
var inst_81889 = cljs.core.async.timeout.call(null,(0));
var inst_81890 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_81891 = [inst_81888__$1,inst_81889];
var inst_81892 = (new cljs.core.PersistentVector(null,2,(5),inst_81890,inst_81891,null));
var state_81969__$1 = (function (){var statearr_82017 = state_81969;
(statearr_82017[(11)] = inst_81888__$1);

return statearr_82017;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_81969__$1,(21),inst_81892,new cljs.core.Keyword(null,"priority","priority",1431093715),true);
} else {
if((state_val_81970 === (8))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_81969,(4),Error,(3),(2));
var inst_81859 = acc;
var state_81969__$1 = (function (){var statearr_82018 = state_81969;
(statearr_82018[(13)] = inst_81859);

return statearr_82018;
})();
var statearr_82019_82062 = state_81969__$1;
(statearr_82019_82062[(2)] = null);

(statearr_82019_82062[(1)] = (9));


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
}
}
}
}
});})(c__69114__auto___82029,c__77324__auto___82027,id__77325__auto___82028,result))
;
return ((function (switch__69000__auto__,c__69114__auto___82029,c__77324__auto___82027,id__77325__auto___82028,result){
return (function() {
var superv$async$reduce_GT__$_state_machine__69001__auto__ = null;
var superv$async$reduce_GT__$_state_machine__69001__auto____0 = (function (){
var statearr_82023 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_82023[(0)] = superv$async$reduce_GT__$_state_machine__69001__auto__);

(statearr_82023[(1)] = (1));

return statearr_82023;
});
var superv$async$reduce_GT__$_state_machine__69001__auto____1 = (function (state_81969){
while(true){
var ret_value__69002__auto__ = (function (){try{while(true){
var result__69003__auto__ = switch__69000__auto__.call(null,state_81969);
if(cljs.core.keyword_identical_QMARK_.call(null,result__69003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69003__auto__;
}
break;
}
}catch (e82024){if((e82024 instanceof Object)){
var ex__69004__auto__ = e82024;
var statearr_82025_82063 = state_81969;
(statearr_82025_82063[(5)] = ex__69004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_81969);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e82024;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__69002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__82064 = state_81969;
state_81969 = G__82064;
continue;
} else {
return ret_value__69002__auto__;
}
break;
}
});
superv$async$reduce_GT__$_state_machine__69001__auto__ = function(state_81969){
switch(arguments.length){
case 0:
return superv$async$reduce_GT__$_state_machine__69001__auto____0.call(this);
case 1:
return superv$async$reduce_GT__$_state_machine__69001__auto____1.call(this,state_81969);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
superv$async$reduce_GT__$_state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$0 = superv$async$reduce_GT__$_state_machine__69001__auto____0;
superv$async$reduce_GT__$_state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$1 = superv$async$reduce_GT__$_state_machine__69001__auto____1;
return superv$async$reduce_GT__$_state_machine__69001__auto__;
})()
;})(switch__69000__auto__,c__69114__auto___82029,c__77324__auto___82027,id__77325__auto___82028,result))
})();
var state__69116__auto__ = (function (){var statearr_82026 = f__69115__auto__.call(null);
(statearr_82026[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__69114__auto___82029);

return statearr_82026;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__69116__auto__);
});})(c__69114__auto___82029,c__77324__auto___82027,id__77325__auto___82028,result))
);


return result;
});
/**
 * Concatenates two or more channels. First takes all values from first channel
 *   and supplies to output channel, then takes all values from second channel and
 *   so on. Similiar to core.async/merge but maintains the order of values.
 */
superv.async.concat_GT__GT_ = (function superv$async$concat_GT__GT_(var_args){
var args__62127__auto__ = [];
var len__62120__auto___82194 = arguments.length;
var i__62121__auto___82195 = (0);
while(true){
if((i__62121__auto___82195 < len__62120__auto___82194)){
args__62127__auto__.push((arguments[i__62121__auto___82195]));

var G__82196 = (i__62121__auto___82195 + (1));
i__62121__auto___82195 = G__82196;
continue;
} else {
}
break;
}

var argseq__62128__auto__ = ((((1) < args__62127__auto__.length))?(new cljs.core.IndexedSeq(args__62127__auto__.slice((1)),(0),null)):null);
return superv.async.concat_GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__62128__auto__);
});

superv.async.concat_GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (S,cs){
var out = cljs.core.async.chan.call(null);
var c__77324__auto___82197 = superv.async.check_supervisor.call(null,superv.async.S);
var id__77325__auto___82198 = superv.async._register_go.call(null,S,cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"loop","loop",1244978678,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null)], null),cljs.core.list(new cljs.core.Symbol(null,"if-let","if-let",1803593690,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",-122660552,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null))], null),cljs.core.list(new cljs.core.Symbol(null,"if-let","if-let",1803593690,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null),cljs.core.list(new cljs.core.Symbol(null,"<?","<?",-1929864530,null),new cljs.core.Symbol(null,"S","S",-1387142461,null),new cljs.core.Symbol(null,"c","c",-122660552,null))], null),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol(null,">?",">?",-766996309,null),new cljs.core.Symbol(null,"S","S",-1387142461,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"v","v",1661996586,null)),cljs.core.list(new cljs.core.Symbol(null,"recur","recur",1202958259,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null))),cljs.core.list(new cljs.core.Symbol(null,"recur","recur",1202958259,null),cljs.core.list(new cljs.core.Symbol(null,"rest","rest",398835108,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null)))),cljs.core.list(new cljs.core.Symbol("async","close!","async/close!",-546451935,null),new cljs.core.Symbol(null,"out","out",729986010,null))))));
var c__69114__auto___82199 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__69114__auto___82199,c__77324__auto___82197,id__77325__auto___82198,out){
return (function (){
var f__69115__auto__ = (function (){var switch__69000__auto__ = ((function (c__69114__auto___82199,c__77324__auto___82197,id__77325__auto___82198,out){
return (function (state_82147){
var state_val_82148 = (state_82147[(1)]);
if((state_val_82148 === (7))){
var inst_82070 = (state_82147[(7)]);
var inst_82078 = (state_82147[(2)]);
var state_82147__$1 = (function (){var statearr_82150 = state_82147;
(statearr_82150[(8)] = inst_82078);

return statearr_82150;
})();
var statearr_82151_82200 = state_82147__$1;
(statearr_82151_82200[(2)] = inst_82070);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_82147__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82148 === (20))){
var inst_82137 = (state_82147[(2)]);
var state_82147__$1 = state_82147;
var statearr_82152_82201 = state_82147__$1;
(statearr_82152_82201[(2)] = inst_82137);

(statearr_82152_82201[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82148 === (1))){
var state_82147__$1 = state_82147;
var statearr_82153_82202 = state_82147__$1;
(statearr_82153_82202[(2)] = null);

(statearr_82153_82202[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82148 === (24))){
var inst_82082 = (state_82147[(9)]);
var inst_82130 = (state_82147[(2)]);
var inst_82131 = superv.async.throw_if_exception.call(null,S,inst_82130);
var tmp82149 = inst_82082;
var inst_82082__$1 = tmp82149;
var state_82147__$1 = (function (){var statearr_82154 = state_82147;
(statearr_82154[(9)] = inst_82082__$1);

(statearr_82154[(10)] = inst_82131);

return statearr_82154;
})();
var statearr_82155_82203 = state_82147__$1;
(statearr_82155_82203[(2)] = null);

(statearr_82155_82203[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82148 === (4))){
var inst_82070 = (state_82147[(7)]);
var inst_82070__$1 = (state_82147[(2)]);
var inst_82071 = cljs.core.ex_data.call(null,inst_82070__$1);
var inst_82072 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_82071);
var inst_82073 = cljs.core._EQ_.call(null,inst_82072,new cljs.core.Keyword(null,"aborted","aborted",1775972619));
var state_82147__$1 = (function (){var statearr_82156 = state_82147;
(statearr_82156[(7)] = inst_82070__$1);

return statearr_82156;
})();
if(inst_82073){
var statearr_82157_82204 = state_82147__$1;
(statearr_82157_82204[(1)] = (5));

} else {
var statearr_82158_82205 = state_82147__$1;
(statearr_82158_82205[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82148 === (15))){
var inst_82099 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_82100 = [new cljs.core.Keyword(null,"aborted","aborted",1775972619)];
var inst_82101 = cljs.core.PersistentHashMap.fromArrays(inst_82099,inst_82100);
var inst_82102 = cljs.core.ex_info.call(null,"Aborted operations",inst_82101);
var state_82147__$1 = state_82147;
var statearr_82159_82206 = state_82147__$1;
(statearr_82159_82206[(2)] = inst_82102);

(statearr_82159_82206[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82148 === (21))){
var inst_82111 = (state_82147[(11)]);
var inst_82117 = (state_82147[(2)]);
var inst_82118 = cljs.core.nth.call(null,inst_82117,(0),null);
var inst_82119 = cljs.core.nth.call(null,inst_82117,(1),null);
var inst_82120 = cljs.core._EQ_.call(null,inst_82119,inst_82111);
var state_82147__$1 = (function (){var statearr_82160 = state_82147;
(statearr_82160[(12)] = inst_82118);

return statearr_82160;
})();
if(inst_82120){
var statearr_82161_82207 = state_82147__$1;
(statearr_82161_82207[(1)] = (22));

} else {
var statearr_82162_82208 = state_82147__$1;
(statearr_82162_82208[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82148 === (13))){
var inst_82141 = (state_82147[(2)]);
var state_82147__$1 = state_82147;
var statearr_82163_82209 = state_82147__$1;
(statearr_82163_82209[(2)] = inst_82141);

(statearr_82163_82209[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82148 === (22))){
var inst_82122 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_82123 = [new cljs.core.Keyword(null,"aborted","aborted",1775972619)];
var inst_82124 = cljs.core.PersistentHashMap.fromArrays(inst_82122,inst_82123);
var inst_82125 = cljs.core.ex_info.call(null,"Aborted operations",inst_82124);
var state_82147__$1 = state_82147;
var statearr_82164_82210 = state_82147__$1;
(statearr_82164_82210[(2)] = inst_82125);

(statearr_82164_82210[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82148 === (6))){
var inst_82070 = (state_82147[(7)]);
var inst_82076 = superv.async._track_exception.call(null,S,inst_82070);
var state_82147__$1 = state_82147;
var statearr_82165_82211 = state_82147__$1;
(statearr_82165_82211[(2)] = inst_82076);

(statearr_82165_82211[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82148 === (25))){
var inst_82128 = (state_82147[(2)]);
var state_82147__$1 = state_82147;
var statearr_82166_82212 = state_82147__$1;
(statearr_82166_82212[(2)] = inst_82128);

(statearr_82166_82212[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82148 === (17))){
var inst_82106 = (state_82147[(13)]);
var inst_82105 = (state_82147[(2)]);
var inst_82106__$1 = superv.async.throw_if_exception.call(null,S,inst_82105);
var state_82147__$1 = (function (){var statearr_82167 = state_82147;
(statearr_82167[(13)] = inst_82106__$1);

return statearr_82167;
})();
if(cljs.core.truth_(inst_82106__$1)){
var statearr_82168_82213 = state_82147__$1;
(statearr_82168_82213[(1)] = (18));

} else {
var statearr_82169_82214 = state_82147__$1;
(statearr_82169_82214[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82148 === (3))){
var inst_82067 = (state_82147[(2)]);
var inst_82068 = superv.async._unregister_go.call(null,S,id__77325__auto___82198);
var state_82147__$1 = (function (){var statearr_82170 = state_82147;
(statearr_82170[(14)] = inst_82067);

(statearr_82170[(15)] = inst_82068);

return statearr_82170;
})();
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_82147__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82148 === (12))){
var inst_82139 = cljs.core.async.close_BANG_.call(null,out);
var state_82147__$1 = state_82147;
var statearr_82171_82215 = state_82147__$1;
(statearr_82171_82215[(2)] = inst_82139);

(statearr_82171_82215[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82148 === (2))){
var inst_82145 = (state_82147[(2)]);
var state_82147__$1 = state_82147;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_82147__$1,inst_82145);
} else {
if((state_val_82148 === (23))){
var inst_82106 = (state_82147[(13)]);
var state_82147__$1 = state_82147;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_82147__$1,(25),out,inst_82106);
} else {
if((state_val_82148 === (19))){
var inst_82082 = (state_82147[(9)]);
var inst_82134 = cljs.core.rest.call(null,inst_82082);
var inst_82082__$1 = inst_82134;
var state_82147__$1 = (function (){var statearr_82172 = state_82147;
(statearr_82172[(9)] = inst_82082__$1);

return statearr_82172;
})();
var statearr_82173_82216 = state_82147__$1;
(statearr_82173_82216[(2)] = null);

(statearr_82173_82216[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82148 === (11))){
var inst_82089 = (state_82147[(16)]);
var inst_82084 = (state_82147[(17)]);
var inst_82089__$1 = superv.async._abort.call(null,S);
var inst_82090 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_82091 = [inst_82089__$1,inst_82084];
var inst_82092 = (new cljs.core.PersistentVector(null,2,(5),inst_82090,inst_82091,null));
var state_82147__$1 = (function (){var statearr_82174 = state_82147;
(statearr_82174[(16)] = inst_82089__$1);

return statearr_82174;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_82147__$1,(14),inst_82092,new cljs.core.Keyword(null,"priority","priority",1431093715),new cljs.core.Keyword(null,"true","true",-1114210334));
} else {
if((state_val_82148 === (9))){
var inst_82082 = (state_82147[(9)]);
var inst_82084 = (state_82147[(17)]);
var inst_82084__$1 = cljs.core.first.call(null,inst_82082);
var state_82147__$1 = (function (){var statearr_82175 = state_82147;
(statearr_82175[(17)] = inst_82084__$1);

return statearr_82175;
})();
if(cljs.core.truth_(inst_82084__$1)){
var statearr_82176_82217 = state_82147__$1;
(statearr_82176_82217[(1)] = (11));

} else {
var statearr_82177_82218 = state_82147__$1;
(statearr_82177_82218[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82148 === (5))){
var state_82147__$1 = state_82147;
var statearr_82178_82219 = state_82147__$1;
(statearr_82178_82219[(2)] = null);

(statearr_82178_82219[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82148 === (14))){
var inst_82089 = (state_82147[(16)]);
var inst_82094 = (state_82147[(2)]);
var inst_82095 = cljs.core.nth.call(null,inst_82094,(0),null);
var inst_82096 = cljs.core.nth.call(null,inst_82094,(1),null);
var inst_82097 = cljs.core._EQ_.call(null,inst_82096,inst_82089);
var state_82147__$1 = (function (){var statearr_82179 = state_82147;
(statearr_82179[(18)] = inst_82095);

return statearr_82179;
})();
if(inst_82097){
var statearr_82180_82220 = state_82147__$1;
(statearr_82180_82220[(1)] = (15));

} else {
var statearr_82181_82221 = state_82147__$1;
(statearr_82181_82221[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82148 === (16))){
var inst_82095 = (state_82147[(18)]);
var state_82147__$1 = state_82147;
var statearr_82182_82222 = state_82147__$1;
(statearr_82182_82222[(2)] = inst_82095);

(statearr_82182_82222[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82148 === (10))){
var inst_82143 = (state_82147[(2)]);
var state_82147__$1 = state_82147;
var statearr_82183_82223 = state_82147__$1;
(statearr_82183_82223[(2)] = inst_82143);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_82147__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82148 === (18))){
var inst_82111 = (state_82147[(11)]);
var inst_82111__$1 = superv.async._abort.call(null,S);
var inst_82112 = cljs.core.async.timeout.call(null,(0));
var inst_82113 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_82114 = [inst_82111__$1,inst_82112];
var inst_82115 = (new cljs.core.PersistentVector(null,2,(5),inst_82113,inst_82114,null));
var state_82147__$1 = (function (){var statearr_82184 = state_82147;
(statearr_82184[(11)] = inst_82111__$1);

return statearr_82184;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_82147__$1,(21),inst_82115,new cljs.core.Keyword(null,"priority","priority",1431093715),true);
} else {
if((state_val_82148 === (8))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_82147,(4),Error,(3),(2));
var inst_82082 = cs;
var state_82147__$1 = (function (){var statearr_82185 = state_82147;
(statearr_82185[(9)] = inst_82082);

return statearr_82185;
})();
var statearr_82186_82224 = state_82147__$1;
(statearr_82186_82224[(2)] = null);

(statearr_82186_82224[(1)] = (9));


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
});})(c__69114__auto___82199,c__77324__auto___82197,id__77325__auto___82198,out))
;
return ((function (switch__69000__auto__,c__69114__auto___82199,c__77324__auto___82197,id__77325__auto___82198,out){
return (function() {
var superv$async$state_machine__69001__auto__ = null;
var superv$async$state_machine__69001__auto____0 = (function (){
var statearr_82190 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_82190[(0)] = superv$async$state_machine__69001__auto__);

(statearr_82190[(1)] = (1));

return statearr_82190;
});
var superv$async$state_machine__69001__auto____1 = (function (state_82147){
while(true){
var ret_value__69002__auto__ = (function (){try{while(true){
var result__69003__auto__ = switch__69000__auto__.call(null,state_82147);
if(cljs.core.keyword_identical_QMARK_.call(null,result__69003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69003__auto__;
}
break;
}
}catch (e82191){if((e82191 instanceof Object)){
var ex__69004__auto__ = e82191;
var statearr_82192_82225 = state_82147;
(statearr_82192_82225[(5)] = ex__69004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_82147);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e82191;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__69002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__82226 = state_82147;
state_82147 = G__82226;
continue;
} else {
return ret_value__69002__auto__;
}
break;
}
});
superv$async$state_machine__69001__auto__ = function(state_82147){
switch(arguments.length){
case 0:
return superv$async$state_machine__69001__auto____0.call(this);
case 1:
return superv$async$state_machine__69001__auto____1.call(this,state_82147);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
superv$async$state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$0 = superv$async$state_machine__69001__auto____0;
superv$async$state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$1 = superv$async$state_machine__69001__auto____1;
return superv$async$state_machine__69001__auto__;
})()
;})(switch__69000__auto__,c__69114__auto___82199,c__77324__auto___82197,id__77325__auto___82198,out))
})();
var state__69116__auto__ = (function (){var statearr_82193 = f__69115__auto__.call(null);
(statearr_82193[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__69114__auto___82199);

return statearr_82193;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__69116__auto__);
});})(c__69114__auto___82199,c__77324__auto___82197,id__77325__auto___82198,out))
);


return out;
});

superv.async.concat_GT__GT_.cljs$lang$maxFixedArity = (1);

superv.async.concat_GT__GT_.cljs$lang$applyTo = (function (seq82065){
var G__82066 = cljs.core.first.call(null,seq82065);
var seq82065__$1 = cljs.core.next.call(null,seq82065);
return superv.async.concat_GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__82066,seq82065__$1);
});

superv.async.partition_all_GT__GT_ = (function superv$async$partition_all_GT__GT_(var_args){
var args__62127__auto__ = [];
var len__62120__auto___82444 = arguments.length;
var i__62121__auto___82445 = (0);
while(true){
if((i__62121__auto___82445 < len__62120__auto___82444)){
args__62127__auto__.push((arguments[i__62121__auto___82445]));

var G__82446 = (i__62121__auto___82445 + (1));
i__62121__auto___82445 = G__82446;
continue;
} else {
}
break;
}

var argseq__62128__auto__ = ((((3) < args__62127__auto__.length))?(new cljs.core.IndexedSeq(args__62127__auto__.slice((3)),(0),null)):null);
return superv.async.partition_all_GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__62128__auto__);
});

superv.async.partition_all_GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (S,n,in_ch,p__82231){
var map__82232 = p__82231;
var map__82232__$1 = ((((!((map__82232 == null)))?((((map__82232.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82232.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82232):map__82232);
var out_ch = cljs.core.get.call(null,map__82232__$1,new cljs.core.Keyword(null,"out-ch","out-ch",-189045854));

new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(n > (0))], null)], null);

var out_ch__$1 = (function (){var or__60899__auto__ = out_ch;
if(cljs.core.truth_(or__60899__auto__)){
return or__60899__auto__;
} else {
return cljs.core.async.chan.call(null);
}
})();
var c__77324__auto___82447 = superv.async.check_supervisor.call(null,superv.async.S);
var id__77325__auto___82448 = superv.async._register_go.call(null,S,cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","loop","clojure.core/loop",-1797836771,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"batch","batch",977610327,null),cljs.core.PersistentVector.EMPTY], null),cljs.core.list(new cljs.core.Symbol(null,"if-let","if-let",1803593690,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null),cljs.core.list(new cljs.core.Symbol(null,"<?","<?",-1929864530,null),new cljs.core.Symbol(null,"S","S",-1387142461,null),new cljs.core.Symbol(null,"in-ch","in-ch",-1757981794,null))], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"instance?","instance?",1075939923,null),new cljs.core.Symbol("js","Error","js/Error",-1692659266,null),new cljs.core.Symbol(null,"obj","obj",-1672671807,null)),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol(null,">?",">?",-766996309,null),new cljs.core.Symbol(null,"S","S",-1387142461,null),new cljs.core.Symbol(null,"out-ch","out-ch",1451485673,null),new cljs.core.Symbol(null,"obj","obj",-1672671807,null)),cljs.core.list(new cljs.core.Symbol("async","close!","async/close!",-546451935,null),new cljs.core.Symbol(null,"out-ch","out-ch",1451485673,null))),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"new-batch","new-batch",720019835,null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"batch","batch",977610327,null),new cljs.core.Symbol(null,"obj","obj",-1672671807,null))], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"new-batch","new-batch",720019835,null))),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol(null,">?",">?",-766996309,null),new cljs.core.Symbol(null,"S","S",-1387142461,null),new cljs.core.Symbol(null,"out-ch","out-ch",1451485673,null),new cljs.core.Symbol(null,"new-batch","new-batch",720019835,null)),cljs.core.list(new cljs.core.Symbol(null,"recur","recur",1202958259,null),cljs.core.PersistentVector.EMPTY)),cljs.core.list(new cljs.core.Symbol(null,"recur","recur",1202958259,null),new cljs.core.Symbol(null,"new-batch","new-batch",720019835,null))))),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"not-empty","not-empty",2029453590,null),new cljs.core.Symbol(null,"batch","batch",977610327,null)),cljs.core.list(new cljs.core.Symbol(null,">?",">?",-766996309,null),new cljs.core.Symbol(null,"S","S",-1387142461,null),new cljs.core.Symbol(null,"out-ch","out-ch",1451485673,null),new cljs.core.Symbol(null,"batch","batch",977610327,null))),cljs.core.list(new cljs.core.Symbol("async","close!","async/close!",-546451935,null),new cljs.core.Symbol(null,"out-ch","out-ch",1451485673,null)))))));
var c__69114__auto___82449 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__69114__auto___82449,c__77324__auto___82447,id__77325__auto___82448,out_ch__$1,map__82232,map__82232__$1,out_ch){
return (function (){
var f__69115__auto__ = (function (){var switch__69000__auto__ = ((function (c__69114__auto___82449,c__77324__auto___82447,id__77325__auto___82448,out_ch__$1,map__82232,map__82232__$1,out_ch){
return (function (state_82376){
var state_val_82377 = (state_82376[(1)]);
if((state_val_82377 === (7))){
var inst_82237 = (state_82376[(7)]);
var inst_82245 = (state_82376[(2)]);
var state_82376__$1 = (function (){var statearr_82378 = state_82376;
(statearr_82378[(8)] = inst_82245);

return statearr_82378;
})();
var statearr_82379_82450 = state_82376__$1;
(statearr_82379_82450[(2)] = inst_82237);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_82376__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82377 === (20))){
var inst_82337 = (state_82376[(2)]);
var state_82376__$1 = state_82376;
var statearr_82380_82451 = state_82376__$1;
(statearr_82380_82451[(2)] = inst_82337);

(statearr_82380_82451[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82377 === (27))){
var inst_82302 = (state_82376[(9)]);
var inst_82250 = inst_82302;
var state_82376__$1 = (function (){var statearr_82381 = state_82376;
(statearr_82381[(10)] = inst_82250);

return statearr_82381;
})();
var statearr_82382_82452 = state_82376__$1;
(statearr_82382_82452[(2)] = null);

(statearr_82382_82452[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82377 === (1))){
var state_82376__$1 = state_82376;
var statearr_82383_82453 = state_82376__$1;
(statearr_82383_82453[(2)] = null);

(statearr_82383_82453[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82377 === (24))){
var inst_82298 = (state_82376[(2)]);
var inst_82299 = superv.async.throw_if_exception.call(null,S,inst_82298);
var inst_82300 = cljs.core.async.close_BANG_.call(null,out_ch__$1);
var state_82376__$1 = (function (){var statearr_82384 = state_82376;
(statearr_82384[(11)] = inst_82299);

return statearr_82384;
})();
var statearr_82385_82454 = state_82376__$1;
(statearr_82385_82454[(2)] = inst_82300);

(statearr_82385_82454[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82377 === (39))){
var inst_82250 = (state_82376[(10)]);
var state_82376__$1 = state_82376;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_82376__$1,(41),out_ch__$1,inst_82250);
} else {
if((state_val_82377 === (4))){
var inst_82237 = (state_82376[(7)]);
var inst_82237__$1 = (state_82376[(2)]);
var inst_82238 = cljs.core.ex_data.call(null,inst_82237__$1);
var inst_82239 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_82238);
var inst_82240 = cljs.core._EQ_.call(null,inst_82239,new cljs.core.Keyword(null,"aborted","aborted",1775972619));
var state_82376__$1 = (function (){var statearr_82386 = state_82376;
(statearr_82386[(7)] = inst_82237__$1);

return statearr_82386;
})();
if(inst_82240){
var statearr_82387_82455 = state_82376__$1;
(statearr_82387_82455[(1)] = (5));

} else {
var statearr_82388_82456 = state_82376__$1;
(statearr_82388_82456[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82377 === (15))){
var inst_82272 = (state_82376[(12)]);
var inst_82274 = (inst_82272 instanceof Error);
var state_82376__$1 = state_82376;
if(cljs.core.truth_(inst_82274)){
var statearr_82389_82457 = state_82376__$1;
(statearr_82389_82457[(1)] = (18));

} else {
var statearr_82390_82458 = state_82376__$1;
(statearr_82390_82458[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82377 === (21))){
var inst_82279 = (state_82376[(13)]);
var inst_82285 = (state_82376[(2)]);
var inst_82286 = cljs.core.nth.call(null,inst_82285,(0),null);
var inst_82287 = cljs.core.nth.call(null,inst_82285,(1),null);
var inst_82288 = cljs.core._EQ_.call(null,inst_82287,inst_82279);
var state_82376__$1 = (function (){var statearr_82391 = state_82376;
(statearr_82391[(14)] = inst_82286);

return statearr_82391;
})();
if(inst_82288){
var statearr_82392_82459 = state_82376__$1;
(statearr_82392_82459[(1)] = (22));

} else {
var statearr_82393_82460 = state_82376__$1;
(statearr_82393_82460[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82377 === (31))){
var inst_82302 = (state_82376[(9)]);
var state_82376__$1 = state_82376;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_82376__$1,(33),out_ch__$1,inst_82302);
} else {
if((state_val_82377 === (32))){
var inst_82328 = (state_82376[(2)]);
var inst_82329 = superv.async.throw_if_exception.call(null,S,inst_82328);
var inst_82330 = cljs.core.PersistentVector.EMPTY;
var inst_82250 = inst_82330;
var state_82376__$1 = (function (){var statearr_82394 = state_82376;
(statearr_82394[(10)] = inst_82250);

(statearr_82394[(15)] = inst_82329);

return statearr_82394;
})();
var statearr_82395_82461 = state_82376__$1;
(statearr_82395_82461[(2)] = null);

(statearr_82395_82461[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82377 === (40))){
var inst_82363 = (state_82376[(2)]);
var inst_82364 = superv.async.throw_if_exception.call(null,S,inst_82363);
var state_82376__$1 = state_82376;
var statearr_82396_82462 = state_82376__$1;
(statearr_82396_82462[(2)] = inst_82364);

(statearr_82396_82462[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82377 === (33))){
var inst_82326 = (state_82376[(2)]);
var state_82376__$1 = state_82376;
var statearr_82397_82463 = state_82376__$1;
(statearr_82397_82463[(2)] = inst_82326);

(statearr_82397_82463[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82377 === (13))){
var inst_82261 = (state_82376[(16)]);
var state_82376__$1 = state_82376;
var statearr_82398_82464 = state_82376__$1;
(statearr_82398_82464[(2)] = inst_82261);

(statearr_82398_82464[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82377 === (22))){
var inst_82290 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_82291 = [new cljs.core.Keyword(null,"aborted","aborted",1775972619)];
var inst_82292 = cljs.core.PersistentHashMap.fromArrays(inst_82290,inst_82291);
var inst_82293 = cljs.core.ex_info.call(null,"Aborted operations",inst_82292);
var state_82376__$1 = state_82376;
var statearr_82399_82465 = state_82376__$1;
(statearr_82399_82465[(2)] = inst_82293);

(statearr_82399_82465[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82377 === (36))){
var inst_82367 = (state_82376[(2)]);
var inst_82368 = cljs.core.async.close_BANG_.call(null,out_ch__$1);
var state_82376__$1 = (function (){var statearr_82400 = state_82376;
(statearr_82400[(17)] = inst_82367);

return statearr_82400;
})();
var statearr_82401_82466 = state_82376__$1;
(statearr_82401_82466[(2)] = inst_82368);

(statearr_82401_82466[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82377 === (41))){
var inst_82361 = (state_82376[(2)]);
var state_82376__$1 = state_82376;
var statearr_82402_82467 = state_82376__$1;
(statearr_82402_82467[(2)] = inst_82361);

(statearr_82402_82467[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82377 === (29))){
var inst_82309 = (state_82376[(18)]);
var inst_82315 = (state_82376[(2)]);
var inst_82316 = cljs.core.nth.call(null,inst_82315,(0),null);
var inst_82317 = cljs.core.nth.call(null,inst_82315,(1),null);
var inst_82318 = cljs.core._EQ_.call(null,inst_82317,inst_82309);
var state_82376__$1 = (function (){var statearr_82403 = state_82376;
(statearr_82403[(19)] = inst_82316);

return statearr_82403;
})();
if(inst_82318){
var statearr_82404_82468 = state_82376__$1;
(statearr_82404_82468[(1)] = (30));

} else {
var statearr_82405_82469 = state_82376__$1;
(statearr_82405_82469[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82377 === (6))){
var inst_82237 = (state_82376[(7)]);
var inst_82243 = superv.async._track_exception.call(null,S,inst_82237);
var state_82376__$1 = state_82376;
var statearr_82406_82470 = state_82376__$1;
(statearr_82406_82470[(2)] = inst_82243);

(statearr_82406_82470[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82377 === (28))){
var inst_82335 = (state_82376[(2)]);
var state_82376__$1 = state_82376;
var statearr_82407_82471 = state_82376__$1;
(statearr_82407_82471[(2)] = inst_82335);

(statearr_82407_82471[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82377 === (25))){
var inst_82296 = (state_82376[(2)]);
var state_82376__$1 = state_82376;
var statearr_82408_82472 = state_82376__$1;
(statearr_82408_82472[(2)] = inst_82296);

(statearr_82408_82472[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82377 === (34))){
var inst_82344 = (state_82376[(20)]);
var inst_82344__$1 = superv.async._abort.call(null,S);
var inst_82345 = cljs.core.async.timeout.call(null,(0));
var inst_82346 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_82347 = [inst_82344__$1,inst_82345];
var inst_82348 = (new cljs.core.PersistentVector(null,2,(5),inst_82346,inst_82347,null));
var state_82376__$1 = (function (){var statearr_82409 = state_82376;
(statearr_82409[(20)] = inst_82344__$1);

return statearr_82409;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_82376__$1,(37),inst_82348,new cljs.core.Keyword(null,"priority","priority",1431093715),true);
} else {
if((state_val_82377 === (17))){
var inst_82370 = (state_82376[(2)]);
var state_82376__$1 = state_82376;
var statearr_82410_82473 = state_82376__$1;
(statearr_82410_82473[(2)] = inst_82370);

(statearr_82410_82473[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82377 === (3))){
var inst_82234 = (state_82376[(2)]);
var inst_82235 = superv.async._unregister_go.call(null,S,id__77325__auto___82448);
var state_82376__$1 = (function (){var statearr_82411 = state_82376;
(statearr_82411[(21)] = inst_82234);

(statearr_82411[(22)] = inst_82235);

return statearr_82411;
})();
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_82376__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82377 === (12))){
var inst_82265 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_82266 = [new cljs.core.Keyword(null,"aborted","aborted",1775972619)];
var inst_82267 = cljs.core.PersistentHashMap.fromArrays(inst_82265,inst_82266);
var inst_82268 = cljs.core.ex_info.call(null,"Aborted operations",inst_82267);
var state_82376__$1 = state_82376;
var statearr_82412_82474 = state_82376__$1;
(statearr_82412_82474[(2)] = inst_82268);

(statearr_82412_82474[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82377 === (2))){
var inst_82374 = (state_82376[(2)]);
var state_82376__$1 = state_82376;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_82376__$1,inst_82374);
} else {
if((state_val_82377 === (23))){
var inst_82272 = (state_82376[(12)]);
var state_82376__$1 = state_82376;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_82376__$1,(25),out_ch__$1,inst_82272);
} else {
if((state_val_82377 === (35))){
var state_82376__$1 = state_82376;
var statearr_82413_82475 = state_82376__$1;
(statearr_82413_82475[(2)] = null);

(statearr_82413_82475[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82377 === (19))){
var inst_82272 = (state_82376[(12)]);
var inst_82250 = (state_82376[(10)]);
var inst_82302 = (state_82376[(9)]);
var inst_82302__$1 = cljs.core.conj.call(null,inst_82250,inst_82272);
var inst_82303 = cljs.core.count.call(null,inst_82302__$1);
var inst_82304 = cljs.core._EQ_.call(null,n,inst_82303);
var state_82376__$1 = (function (){var statearr_82414 = state_82376;
(statearr_82414[(9)] = inst_82302__$1);

return statearr_82414;
})();
if(inst_82304){
var statearr_82415_82476 = state_82376__$1;
(statearr_82415_82476[(1)] = (26));

} else {
var statearr_82416_82477 = state_82376__$1;
(statearr_82416_82477[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82377 === (11))){
var inst_82255 = (state_82376[(23)]);
var inst_82260 = (state_82376[(2)]);
var inst_82261 = cljs.core.nth.call(null,inst_82260,(0),null);
var inst_82262 = cljs.core.nth.call(null,inst_82260,(1),null);
var inst_82263 = cljs.core._EQ_.call(null,inst_82262,inst_82255);
var state_82376__$1 = (function (){var statearr_82417 = state_82376;
(statearr_82417[(16)] = inst_82261);

return statearr_82417;
})();
if(inst_82263){
var statearr_82418_82478 = state_82376__$1;
(statearr_82418_82478[(1)] = (12));

} else {
var statearr_82419_82479 = state_82376__$1;
(statearr_82419_82479[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82377 === (9))){
var inst_82255 = (state_82376[(23)]);
var inst_82255__$1 = superv.async._abort.call(null,S);
var inst_82256 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_82257 = [inst_82255__$1,in_ch];
var inst_82258 = (new cljs.core.PersistentVector(null,2,(5),inst_82256,inst_82257,null));
var state_82376__$1 = (function (){var statearr_82420 = state_82376;
(statearr_82420[(23)] = inst_82255__$1);

return statearr_82420;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_82376__$1,(11),inst_82258,new cljs.core.Keyword(null,"priority","priority",1431093715),new cljs.core.Keyword(null,"true","true",-1114210334));
} else {
if((state_val_82377 === (5))){
var state_82376__$1 = state_82376;
var statearr_82421_82480 = state_82376__$1;
(statearr_82421_82480[(2)] = null);

(statearr_82421_82480[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82377 === (14))){
var inst_82272 = (state_82376[(12)]);
var inst_82271 = (state_82376[(2)]);
var inst_82272__$1 = superv.async.throw_if_exception.call(null,S,inst_82271);
var state_82376__$1 = (function (){var statearr_82422 = state_82376;
(statearr_82422[(12)] = inst_82272__$1);

return statearr_82422;
})();
if(cljs.core.truth_(inst_82272__$1)){
var statearr_82423_82481 = state_82376__$1;
(statearr_82423_82481[(1)] = (15));

} else {
var statearr_82424_82482 = state_82376__$1;
(statearr_82424_82482[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82377 === (26))){
var inst_82309 = (state_82376[(18)]);
var inst_82309__$1 = superv.async._abort.call(null,S);
var inst_82310 = cljs.core.async.timeout.call(null,(0));
var inst_82311 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_82312 = [inst_82309__$1,inst_82310];
var inst_82313 = (new cljs.core.PersistentVector(null,2,(5),inst_82311,inst_82312,null));
var state_82376__$1 = (function (){var statearr_82425 = state_82376;
(statearr_82425[(18)] = inst_82309__$1);

return statearr_82425;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_82376__$1,(29),inst_82313,new cljs.core.Keyword(null,"priority","priority",1431093715),true);
} else {
if((state_val_82377 === (16))){
var inst_82250 = (state_82376[(10)]);
var inst_82339 = cljs.core.not_empty.call(null,inst_82250);
var state_82376__$1 = state_82376;
if(cljs.core.truth_(inst_82339)){
var statearr_82426_82483 = state_82376__$1;
(statearr_82426_82483[(1)] = (34));

} else {
var statearr_82427_82484 = state_82376__$1;
(statearr_82427_82484[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82377 === (38))){
var inst_82355 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_82356 = [new cljs.core.Keyword(null,"aborted","aborted",1775972619)];
var inst_82357 = cljs.core.PersistentHashMap.fromArrays(inst_82355,inst_82356);
var inst_82358 = cljs.core.ex_info.call(null,"Aborted operations",inst_82357);
var state_82376__$1 = state_82376;
var statearr_82428_82485 = state_82376__$1;
(statearr_82428_82485[(2)] = inst_82358);

(statearr_82428_82485[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82377 === (30))){
var inst_82320 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_82321 = [new cljs.core.Keyword(null,"aborted","aborted",1775972619)];
var inst_82322 = cljs.core.PersistentHashMap.fromArrays(inst_82320,inst_82321);
var inst_82323 = cljs.core.ex_info.call(null,"Aborted operations",inst_82322);
var state_82376__$1 = state_82376;
var statearr_82429_82486 = state_82376__$1;
(statearr_82429_82486[(2)] = inst_82323);

(statearr_82429_82486[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82377 === (10))){
var inst_82372 = (state_82376[(2)]);
var state_82376__$1 = state_82376;
var statearr_82430_82487 = state_82376__$1;
(statearr_82430_82487[(2)] = inst_82372);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_82376__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82377 === (18))){
var inst_82279 = (state_82376[(13)]);
var inst_82279__$1 = superv.async._abort.call(null,S);
var inst_82280 = cljs.core.async.timeout.call(null,(0));
var inst_82281 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_82282 = [inst_82279__$1,inst_82280];
var inst_82283 = (new cljs.core.PersistentVector(null,2,(5),inst_82281,inst_82282,null));
var state_82376__$1 = (function (){var statearr_82431 = state_82376;
(statearr_82431[(13)] = inst_82279__$1);

return statearr_82431;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_82376__$1,(21),inst_82283,new cljs.core.Keyword(null,"priority","priority",1431093715),true);
} else {
if((state_val_82377 === (37))){
var inst_82344 = (state_82376[(20)]);
var inst_82350 = (state_82376[(2)]);
var inst_82351 = cljs.core.nth.call(null,inst_82350,(0),null);
var inst_82352 = cljs.core.nth.call(null,inst_82350,(1),null);
var inst_82353 = cljs.core._EQ_.call(null,inst_82352,inst_82344);
var state_82376__$1 = (function (){var statearr_82432 = state_82376;
(statearr_82432[(24)] = inst_82351);

return statearr_82432;
})();
if(inst_82353){
var statearr_82433_82488 = state_82376__$1;
(statearr_82433_82488[(1)] = (38));

} else {
var statearr_82434_82489 = state_82376__$1;
(statearr_82434_82489[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82377 === (8))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_82376,(4),Error,(3),(2));
var inst_82249 = cljs.core.PersistentVector.EMPTY;
var inst_82250 = inst_82249;
var state_82376__$1 = (function (){var statearr_82435 = state_82376;
(statearr_82435[(10)] = inst_82250);

return statearr_82435;
})();
var statearr_82436_82490 = state_82376__$1;
(statearr_82436_82490[(2)] = null);

(statearr_82436_82490[(1)] = (9));


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
});})(c__69114__auto___82449,c__77324__auto___82447,id__77325__auto___82448,out_ch__$1,map__82232,map__82232__$1,out_ch))
;
return ((function (switch__69000__auto__,c__69114__auto___82449,c__77324__auto___82447,id__77325__auto___82448,out_ch__$1,map__82232,map__82232__$1,out_ch){
return (function() {
var superv$async$state_machine__69001__auto__ = null;
var superv$async$state_machine__69001__auto____0 = (function (){
var statearr_82440 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_82440[(0)] = superv$async$state_machine__69001__auto__);

(statearr_82440[(1)] = (1));

return statearr_82440;
});
var superv$async$state_machine__69001__auto____1 = (function (state_82376){
while(true){
var ret_value__69002__auto__ = (function (){try{while(true){
var result__69003__auto__ = switch__69000__auto__.call(null,state_82376);
if(cljs.core.keyword_identical_QMARK_.call(null,result__69003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69003__auto__;
}
break;
}
}catch (e82441){if((e82441 instanceof Object)){
var ex__69004__auto__ = e82441;
var statearr_82442_82491 = state_82376;
(statearr_82442_82491[(5)] = ex__69004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_82376);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e82441;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__69002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__82492 = state_82376;
state_82376 = G__82492;
continue;
} else {
return ret_value__69002__auto__;
}
break;
}
});
superv$async$state_machine__69001__auto__ = function(state_82376){
switch(arguments.length){
case 0:
return superv$async$state_machine__69001__auto____0.call(this);
case 1:
return superv$async$state_machine__69001__auto____1.call(this,state_82376);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
superv$async$state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$0 = superv$async$state_machine__69001__auto____0;
superv$async$state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$1 = superv$async$state_machine__69001__auto____1;
return superv$async$state_machine__69001__auto__;
})()
;})(switch__69000__auto__,c__69114__auto___82449,c__77324__auto___82447,id__77325__auto___82448,out_ch__$1,map__82232,map__82232__$1,out_ch))
})();
var state__69116__auto__ = (function (){var statearr_82443 = f__69115__auto__.call(null);
(statearr_82443[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__69114__auto___82449);

return statearr_82443;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__69116__auto__);
});})(c__69114__auto___82449,c__77324__auto___82447,id__77325__auto___82448,out_ch__$1,map__82232,map__82232__$1,out_ch))
);


return out_ch__$1;
});

superv.async.partition_all_GT__GT_.cljs$lang$maxFixedArity = (3);

superv.async.partition_all_GT__GT_.cljs$lang$applyTo = (function (seq82227){
var G__82228 = cljs.core.first.call(null,seq82227);
var seq82227__$1 = cljs.core.next.call(null,seq82227);
var G__82229 = cljs.core.first.call(null,seq82227__$1);
var seq82227__$2 = cljs.core.next.call(null,seq82227__$1);
var G__82230 = cljs.core.first.call(null,seq82227__$2);
var seq82227__$3 = cljs.core.next.call(null,seq82227__$2);
return superv.async.partition_all_GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__82228,G__82229,G__82230,seq82227__$3);
});

/**
 * Counts items in a channel. Returns a channel with the item count.
 */
superv.async.count_GT_ = (function superv$async$count_GT_(S,ch){
return cljs.core.async.reduce.call(null,(function (acc,obj){
if((obj instanceof Error)){
return superv.async.put_QMARK_.call(null,S,superv.async._error.call(null,S),obj);
} else {
return (acc + (1));
}
}),(0),ch);
});
/**
 * Debounces channel. Forwards first item from input channel to output
 *   immediately. After that one item every interval ms (if any). If there are more
 *   items in between, they are dropped.
 */
superv.async.debounce_GT__GT_ = (function superv$async$debounce_GT__GT_(S,ch,interval){
var out = cljs.core.async.chan.call(null);
var c__77324__auto___82841 = superv.async.check_supervisor.call(null,superv.async.S);
var id__77325__auto___82842 = superv.async._register_go.call(null,S,cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","loop","clojure.core/loop",-1797836771,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"last-val","last-val",-1727586789,null),null], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"last-val","last-val",-1727586789,null),cljs.core.list(new cljs.core.Symbol(null,"<?","<?",-1929864530,null),new cljs.core.Symbol(null,"S","S",-1387142461,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null))),new cljs.core.Symbol(null,"timer","timer",373563788,null),cljs.core.list(new cljs.core.Symbol("async","timeout","async/timeout",1951904349,null),new cljs.core.Symbol(null,"interval","interval",-945940352,null))], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"val","val",1769233139,null)),cljs.core.list(new cljs.core.Symbol("async","close!","async/close!",-546451935,null),new cljs.core.Symbol(null,"out","out",729986010,null)),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"new-val","new-val",902372928,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null),cljs.core.list(new cljs.core.Symbol(null,"alts?","alts?",1625745590,null),new cljs.core.Symbol(null,"S","S",-1387142461,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"timer","timer",373563788,null)], null))], null),cljs.core.list(new cljs.core.Symbol(null,"condp","condp",1054325175,null),new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"timer","timer",373563788,null),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol(null,">?",">?",-766996309,null),new cljs.core.Symbol(null,"S","S",-1387142461,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"val","val",1769233139,null)),cljs.core.list(new cljs.core.Symbol(null,"recur","recur",1202958259,null),null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),cljs.core.list(new cljs.core.Symbol(null,"recur","recur",1202958259,null),new cljs.core.Symbol(null,"new-val","new-val",902372928,null)))))))));
var c__69114__auto___82843 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__69114__auto___82843,c__77324__auto___82841,id__77325__auto___82842,out){
return (function (){
var f__69115__auto__ = (function (){var switch__69000__auto__ = ((function (c__69114__auto___82843,c__77324__auto___82841,id__77325__auto___82842,out){
return (function (state_82787){
var state_val_82788 = (state_82787[(1)]);
if((state_val_82788 === (7))){
var inst_82670 = (state_82787[(7)]);
var inst_82678 = (state_82787[(2)]);
var state_82787__$1 = (function (){var statearr_82789 = state_82787;
(statearr_82789[(8)] = inst_82678);

return statearr_82789;
})();
var statearr_82790_82844 = state_82787__$1;
(statearr_82790_82844[(2)] = inst_82670);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_82787__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82788 === (20))){
var inst_82781 = (state_82787[(2)]);
var state_82787__$1 = state_82787;
var statearr_82791_82845 = state_82787__$1;
(statearr_82791_82845[(2)] = inst_82781);

(statearr_82791_82845[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82788 === (27))){
var inst_82708 = (state_82787[(9)]);
var state_82787__$1 = state_82787;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_82787__$1,(29),out,inst_82708);
} else {
if((state_val_82788 === (1))){
var state_82787__$1 = state_82787;
var statearr_82792_82846 = state_82787__$1;
(statearr_82792_82846[(2)] = null);

(statearr_82792_82846[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82788 === (24))){
var inst_82779 = (state_82787[(2)]);
var state_82787__$1 = state_82787;
var statearr_82793_82847 = state_82787__$1;
(statearr_82793_82847[(2)] = inst_82779);

(statearr_82793_82847[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82788 === (4))){
var inst_82670 = (state_82787[(7)]);
var inst_82670__$1 = (state_82787[(2)]);
var inst_82671 = cljs.core.ex_data.call(null,inst_82670__$1);
var inst_82672 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_82671);
var inst_82673 = cljs.core._EQ_.call(null,inst_82672,new cljs.core.Keyword(null,"aborted","aborted",1775972619));
var state_82787__$1 = (function (){var statearr_82794 = state_82787;
(statearr_82794[(7)] = inst_82670__$1);

return statearr_82794;
})();
if(inst_82673){
var statearr_82795_82848 = state_82787__$1;
(statearr_82795_82848[(1)] = (5));

} else {
var statearr_82796_82849 = state_82787__$1;
(statearr_82796_82849[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82788 === (15))){
var inst_82699 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_82700 = [new cljs.core.Keyword(null,"aborted","aborted",1775972619)];
var inst_82701 = cljs.core.PersistentHashMap.fromArrays(inst_82699,inst_82700);
var inst_82702 = cljs.core.ex_info.call(null,"Aborted operations",inst_82701);
var state_82787__$1 = state_82787;
var statearr_82797_82850 = state_82787__$1;
(statearr_82797_82850[(2)] = inst_82702);

(statearr_82797_82850[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82788 === (21))){
var inst_82709 = (state_82787[(10)]);
var inst_82737 = (state_82787[(11)]);
var inst_82729 = (state_82787[(2)]);
var inst_82730 = cljs.core.nth.call(null,inst_82729,(0),null);
var inst_82731 = cljs.core.nth.call(null,inst_82729,(1),null);
var inst_82732 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_82733 = superv.async.throw_if_exception.call(null,S,inst_82730);
var inst_82734 = [inst_82733,inst_82731];
var inst_82735 = (new cljs.core.PersistentVector(null,2,(5),inst_82732,inst_82734,null));
var inst_82736 = cljs.core.nth.call(null,inst_82735,(0),null);
var inst_82737__$1 = cljs.core.nth.call(null,inst_82735,(1),null);
var inst_82741 = cljs.core._EQ_.call(null,inst_82709,inst_82737__$1);
var state_82787__$1 = (function (){var statearr_82798 = state_82787;
(statearr_82798[(12)] = inst_82736);

(statearr_82798[(11)] = inst_82737__$1);

return statearr_82798;
})();
if(inst_82741){
var statearr_82799_82851 = state_82787__$1;
(statearr_82799_82851[(1)] = (22));

} else {
var statearr_82800_82852 = state_82787__$1;
(statearr_82800_82852[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82788 === (31))){
var inst_82737 = (state_82787[(11)]);
var inst_82773 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_82737)].join('');
var inst_82774 = (new Error(inst_82773));
var inst_82775 = (function(){throw inst_82774})();
var state_82787__$1 = state_82787;
var statearr_82801_82853 = state_82787__$1;
(statearr_82801_82853[(2)] = inst_82775);

(statearr_82801_82853[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82788 === (32))){
var inst_82777 = (state_82787[(2)]);
var state_82787__$1 = state_82787;
var statearr_82802_82854 = state_82787__$1;
(statearr_82802_82854[(2)] = inst_82777);

(statearr_82802_82854[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82788 === (13))){
var inst_82708 = (state_82787[(9)]);
var inst_82708__$1 = (state_82787[(2)]);
var inst_82709 = cljs.core.async.timeout.call(null,interval);
var inst_82710 = (inst_82708__$1 == null);
var state_82787__$1 = (function (){var statearr_82803 = state_82787;
(statearr_82803[(9)] = inst_82708__$1);

(statearr_82803[(10)] = inst_82709);

return statearr_82803;
})();
if(cljs.core.truth_(inst_82710)){
var statearr_82804_82855 = state_82787__$1;
(statearr_82804_82855[(1)] = (18));

} else {
var statearr_82805_82856 = state_82787__$1;
(statearr_82805_82856[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82788 === (22))){
var inst_82746 = (state_82787[(13)]);
var inst_82746__$1 = superv.async._abort.call(null,S);
var inst_82747 = cljs.core.async.timeout.call(null,(0));
var inst_82748 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_82749 = [inst_82746__$1,inst_82747];
var inst_82750 = (new cljs.core.PersistentVector(null,2,(5),inst_82748,inst_82749,null));
var state_82787__$1 = (function (){var statearr_82806 = state_82787;
(statearr_82806[(13)] = inst_82746__$1);

return statearr_82806;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_82787__$1,(25),inst_82750,new cljs.core.Keyword(null,"priority","priority",1431093715),true);
} else {
if((state_val_82788 === (29))){
var inst_82763 = (state_82787[(2)]);
var state_82787__$1 = state_82787;
var statearr_82807_82857 = state_82787__$1;
(statearr_82807_82857[(2)] = inst_82763);

(statearr_82807_82857[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82788 === (6))){
var inst_82670 = (state_82787[(7)]);
var inst_82676 = superv.async._track_exception.call(null,S,inst_82670);
var state_82787__$1 = state_82787;
var statearr_82808_82858 = state_82787__$1;
(statearr_82808_82858[(2)] = inst_82676);

(statearr_82808_82858[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82788 === (28))){
var inst_82765 = (state_82787[(2)]);
var inst_82766 = superv.async.throw_if_exception.call(null,S,inst_82765);
var inst_82682 = null;
var state_82787__$1 = (function (){var statearr_82809 = state_82787;
(statearr_82809[(14)] = inst_82682);

(statearr_82809[(15)] = inst_82766);

return statearr_82809;
})();
var statearr_82810_82859 = state_82787__$1;
(statearr_82810_82859[(2)] = null);

(statearr_82810_82859[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82788 === (25))){
var inst_82746 = (state_82787[(13)]);
var inst_82752 = (state_82787[(2)]);
var inst_82753 = cljs.core.nth.call(null,inst_82752,(0),null);
var inst_82754 = cljs.core.nth.call(null,inst_82752,(1),null);
var inst_82755 = cljs.core._EQ_.call(null,inst_82754,inst_82746);
var state_82787__$1 = (function (){var statearr_82811 = state_82787;
(statearr_82811[(16)] = inst_82753);

return statearr_82811;
})();
if(inst_82755){
var statearr_82812_82860 = state_82787__$1;
(statearr_82812_82860[(1)] = (26));

} else {
var statearr_82813_82861 = state_82787__$1;
(statearr_82813_82861[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82788 === (17))){
var inst_82705 = (state_82787[(2)]);
var inst_82706 = superv.async.throw_if_exception.call(null,S,inst_82705);
var state_82787__$1 = state_82787;
var statearr_82814_82862 = state_82787__$1;
(statearr_82814_82862[(2)] = inst_82706);

(statearr_82814_82862[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82788 === (3))){
var inst_82667 = (state_82787[(2)]);
var inst_82668 = superv.async._unregister_go.call(null,S,id__77325__auto___82842);
var state_82787__$1 = (function (){var statearr_82815 = state_82787;
(statearr_82815[(17)] = inst_82668);

(statearr_82815[(18)] = inst_82667);

return statearr_82815;
})();
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_82787__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82788 === (12))){
var inst_82689 = (state_82787[(19)]);
var inst_82689__$1 = superv.async._abort.call(null,S);
var inst_82690 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_82691 = [inst_82689__$1,ch];
var inst_82692 = (new cljs.core.PersistentVector(null,2,(5),inst_82690,inst_82691,null));
var state_82787__$1 = (function (){var statearr_82816 = state_82787;
(statearr_82816[(19)] = inst_82689__$1);

return statearr_82816;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_82787__$1,(14),inst_82692,new cljs.core.Keyword(null,"priority","priority",1431093715),new cljs.core.Keyword(null,"true","true",-1114210334));
} else {
if((state_val_82788 === (2))){
var inst_82785 = (state_82787[(2)]);
var state_82787__$1 = state_82787;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_82787__$1,inst_82785);
} else {
if((state_val_82788 === (23))){
var inst_82737 = (state_82787[(11)]);
var inst_82769 = cljs.core._EQ_.call(null,inst_82737,inst_82737);
var state_82787__$1 = state_82787;
if(inst_82769){
var statearr_82817_82863 = state_82787__$1;
(statearr_82817_82863[(1)] = (30));

} else {
var statearr_82818_82864 = state_82787__$1;
(statearr_82818_82864[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82788 === (19))){
var inst_82709 = (state_82787[(10)]);
var inst_82720 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_82721 = superv.async._abort.call(null,S);
var inst_82722 = [inst_82721];
var inst_82723 = (new cljs.core.PersistentVector(null,1,(5),inst_82720,inst_82722,null));
var inst_82724 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_82725 = [ch,inst_82709];
var inst_82726 = (new cljs.core.PersistentVector(null,2,(5),inst_82724,inst_82725,null));
var inst_82727 = cljs.core.concat.call(null,inst_82723,inst_82726);
var state_82787__$1 = state_82787;
return cljs.core.async.ioc_alts_BANG_.call(null,state_82787__$1,(21),inst_82727);
} else {
if((state_val_82788 === (11))){
var inst_82682 = (state_82787[(14)]);
var state_82787__$1 = state_82787;
var statearr_82819_82865 = state_82787__$1;
(statearr_82819_82865[(2)] = inst_82682);

(statearr_82819_82865[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82788 === (9))){
var inst_82682 = (state_82787[(14)]);
var state_82787__$1 = state_82787;
if(cljs.core.truth_(inst_82682)){
var statearr_82820_82866 = state_82787__$1;
(statearr_82820_82866[(1)] = (11));

} else {
var statearr_82821_82867 = state_82787__$1;
(statearr_82821_82867[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82788 === (5))){
var state_82787__$1 = state_82787;
var statearr_82822_82868 = state_82787__$1;
(statearr_82822_82868[(2)] = null);

(statearr_82822_82868[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82788 === (14))){
var inst_82689 = (state_82787[(19)]);
var inst_82694 = (state_82787[(2)]);
var inst_82695 = cljs.core.nth.call(null,inst_82694,(0),null);
var inst_82696 = cljs.core.nth.call(null,inst_82694,(1),null);
var inst_82697 = cljs.core._EQ_.call(null,inst_82696,inst_82689);
var state_82787__$1 = (function (){var statearr_82823 = state_82787;
(statearr_82823[(20)] = inst_82695);

return statearr_82823;
})();
if(inst_82697){
var statearr_82824_82869 = state_82787__$1;
(statearr_82824_82869[(1)] = (15));

} else {
var statearr_82825_82870 = state_82787__$1;
(statearr_82825_82870[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82788 === (26))){
var inst_82757 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_82758 = [new cljs.core.Keyword(null,"aborted","aborted",1775972619)];
var inst_82759 = cljs.core.PersistentHashMap.fromArrays(inst_82757,inst_82758);
var inst_82760 = cljs.core.ex_info.call(null,"Aborted operations",inst_82759);
var state_82787__$1 = state_82787;
var statearr_82826_82871 = state_82787__$1;
(statearr_82826_82871[(2)] = inst_82760);

(statearr_82826_82871[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82788 === (16))){
var inst_82695 = (state_82787[(20)]);
var state_82787__$1 = state_82787;
var statearr_82827_82872 = state_82787__$1;
(statearr_82827_82872[(2)] = inst_82695);

(statearr_82827_82872[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82788 === (30))){
var inst_82736 = (state_82787[(12)]);
var inst_82682 = inst_82736;
var state_82787__$1 = (function (){var statearr_82828 = state_82787;
(statearr_82828[(14)] = inst_82682);

return statearr_82828;
})();
var statearr_82829_82873 = state_82787__$1;
(statearr_82829_82873[(2)] = null);

(statearr_82829_82873[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82788 === (10))){
var inst_82783 = (state_82787[(2)]);
var state_82787__$1 = state_82787;
var statearr_82830_82874 = state_82787__$1;
(statearr_82830_82874[(2)] = inst_82783);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_82787__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82788 === (18))){
var inst_82712 = cljs.core.async.close_BANG_.call(null,out);
var state_82787__$1 = state_82787;
var statearr_82831_82875 = state_82787__$1;
(statearr_82831_82875[(2)] = inst_82712);

(statearr_82831_82875[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82788 === (8))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_82787,(4),Error,(3),(2));
var inst_82682 = null;
var state_82787__$1 = (function (){var statearr_82832 = state_82787;
(statearr_82832[(14)] = inst_82682);

return statearr_82832;
})();
var statearr_82833_82876 = state_82787__$1;
(statearr_82833_82876[(2)] = null);

(statearr_82833_82876[(1)] = (9));


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
}
}
});})(c__69114__auto___82843,c__77324__auto___82841,id__77325__auto___82842,out))
;
return ((function (switch__69000__auto__,c__69114__auto___82843,c__77324__auto___82841,id__77325__auto___82842,out){
return (function() {
var superv$async$debounce_GT__GT__$_state_machine__69001__auto__ = null;
var superv$async$debounce_GT__GT__$_state_machine__69001__auto____0 = (function (){
var statearr_82837 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_82837[(0)] = superv$async$debounce_GT__GT__$_state_machine__69001__auto__);

(statearr_82837[(1)] = (1));

return statearr_82837;
});
var superv$async$debounce_GT__GT__$_state_machine__69001__auto____1 = (function (state_82787){
while(true){
var ret_value__69002__auto__ = (function (){try{while(true){
var result__69003__auto__ = switch__69000__auto__.call(null,state_82787);
if(cljs.core.keyword_identical_QMARK_.call(null,result__69003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69003__auto__;
}
break;
}
}catch (e82838){if((e82838 instanceof Object)){
var ex__69004__auto__ = e82838;
var statearr_82839_82877 = state_82787;
(statearr_82839_82877[(5)] = ex__69004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_82787);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e82838;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__69002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__82878 = state_82787;
state_82787 = G__82878;
continue;
} else {
return ret_value__69002__auto__;
}
break;
}
});
superv$async$debounce_GT__GT__$_state_machine__69001__auto__ = function(state_82787){
switch(arguments.length){
case 0:
return superv$async$debounce_GT__GT__$_state_machine__69001__auto____0.call(this);
case 1:
return superv$async$debounce_GT__GT__$_state_machine__69001__auto____1.call(this,state_82787);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
superv$async$debounce_GT__GT__$_state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$0 = superv$async$debounce_GT__GT__$_state_machine__69001__auto____0;
superv$async$debounce_GT__GT__$_state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$1 = superv$async$debounce_GT__GT__$_state_machine__69001__auto____1;
return superv$async$debounce_GT__GT__$_state_machine__69001__auto__;
})()
;})(switch__69000__auto__,c__69114__auto___82843,c__77324__auto___82841,id__77325__auto___82842,out))
})();
var state__69116__auto__ = (function (){var statearr_82840 = f__69115__auto__.call(null);
(statearr_82840[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__69114__auto___82843);

return statearr_82840;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__69116__auto__);
});})(c__69114__auto___82843,c__77324__auto___82841,id__77325__auto___82842,out))
);


return out;
});
/**
 * Safely managed tap. The channel is closed on abortion and all
 *   pending puts are flushed.
 */
superv.async.tap = (function superv$async$tap(var_args){
var args82879 = [];
var len__62120__auto___83017 = arguments.length;
var i__62121__auto___83018 = (0);
while(true){
if((i__62121__auto___83018 < len__62120__auto___83017)){
args82879.push((arguments[i__62121__auto___83018]));

var G__83019 = (i__62121__auto___83018 + (1));
i__62121__auto___83018 = G__83019;
continue;
} else {
}
break;
}

var G__82881 = args82879.length;
switch (G__82881) {
case 3:
return superv.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return superv.async.tap.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args82879.length)].join('')));

}
});

superv.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (S,mult,ch){
return superv.async.tap.call(null,S,mult,ch,false);
});

superv.async.tap.cljs$core$IFn$_invoke$arity$4 = (function (S,mult,ch,close_QMARK_){
var c__77324__auto___83021 = superv.async.check_supervisor.call(null,superv.async.S);
var id__77325__auto___83022 = superv.async._register_go.call(null,S,cljs.core.list(cljs.core.list(new cljs.core.Symbol("cljs.core.async","<!","cljs.core.async/<!",1278951036,null),cljs.core.list(new cljs.core.Symbol("superv.async","-abort","superv.async/-abort",-365058004,null),new cljs.core.Symbol(null,"S","S",-1387142461,null))),cljs.core.list(new cljs.core.Symbol(null,"close!","close!",-438778971,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)),cljs.core.list(new cljs.core.Symbol(null,"go-try","go-try",1412345407,null),cljs.core.list(new cljs.core.Symbol(null,"while","while",-1691317983,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null))))));
var c__69114__auto___83023 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__69114__auto___83023,c__77324__auto___83021,id__77325__auto___83022){
return (function (){
var f__69115__auto__ = (function (){var switch__69000__auto__ = ((function (c__69114__auto___83023,c__77324__auto___83021,id__77325__auto___83022){
return (function (state_82960){
var state_val_82961 = (state_82960[(1)]);
if((state_val_82961 === (7))){
var inst_82885 = (state_82960[(7)]);
var inst_82893 = (state_82960[(2)]);
var state_82960__$1 = (function (){var statearr_82962 = state_82960;
(statearr_82962[(8)] = inst_82893);

return statearr_82962;
})();
var statearr_82963_83024 = state_82960__$1;
(statearr_82963_83024[(2)] = inst_82885);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_82960__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82961 === (1))){
var state_82960__$1 = state_82960;
var statearr_82964_83025 = state_82960__$1;
(statearr_82964_83025[(2)] = null);

(statearr_82964_83025[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82961 === (4))){
var inst_82885 = (state_82960[(7)]);
var inst_82885__$1 = (state_82960[(2)]);
var inst_82886 = cljs.core.ex_data.call(null,inst_82885__$1);
var inst_82887 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_82886);
var inst_82888 = cljs.core._EQ_.call(null,inst_82887,new cljs.core.Keyword(null,"aborted","aborted",1775972619));
var state_82960__$1 = (function (){var statearr_82965 = state_82960;
(statearr_82965[(7)] = inst_82885__$1);

return statearr_82965;
})();
if(inst_82888){
var statearr_82966_83026 = state_82960__$1;
(statearr_82966_83026[(1)] = (5));

} else {
var statearr_82967_83027 = state_82960__$1;
(statearr_82967_83027[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82961 === (15))){
var inst_82909 = (state_82960[(2)]);
var state_82960__$1 = state_82960;
var statearr_82968_83028 = state_82960__$1;
(statearr_82968_83028[(2)] = inst_82909);

(statearr_82968_83028[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82961 === (13))){
var state_82960__$1 = state_82960;
var statearr_82969_83029 = state_82960__$1;
(statearr_82969_83029[(2)] = null);

(statearr_82969_83029[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82961 === (6))){
var inst_82885 = (state_82960[(7)]);
var inst_82891 = superv.async._track_exception.call(null,S,inst_82885);
var state_82960__$1 = state_82960;
var statearr_82970_83030 = state_82960__$1;
(statearr_82970_83030[(2)] = inst_82891);

(statearr_82970_83030[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82961 === (3))){
var inst_82882 = (state_82960[(2)]);
var inst_82883 = superv.async._unregister_go.call(null,S,id__77325__auto___83022);
var state_82960__$1 = (function (){var statearr_82971 = state_82960;
(statearr_82971[(9)] = inst_82883);

(statearr_82971[(10)] = inst_82882);

return statearr_82971;
})();
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_82960__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82961 === (12))){
var inst_82904 = (state_82960[(2)]);
var state_82960__$1 = state_82960;
if(cljs.core.truth_(inst_82904)){
var statearr_82972_83031 = state_82960__$1;
(statearr_82972_83031[(1)] = (13));

} else {
var statearr_82973_83032 = state_82960__$1;
(statearr_82973_83032[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82961 === (2))){
var inst_82958 = (state_82960[(2)]);
var state_82960__$1 = state_82960;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_82960__$1,inst_82958);
} else {
if((state_val_82961 === (11))){
var inst_82901 = (state_82960[(11)]);
var inst_82911 = (state_82960[(2)]);
var inst_82912 = null;
var inst_82913 = superv.async._register_go.call(null,inst_82911,inst_82912);
var inst_82954 = cljs.core.async.chan.call(null,(1));
var inst_82955 = (function (){var c__77324__auto____$1 = inst_82901;
var id__77325__auto____$1 = inst_82913;
var c__69114__auto____$1 = inst_82954;
return ((function (c__77324__auto____$1,id__77325__auto____$1,c__69114__auto____$1,inst_82901,inst_82911,inst_82912,inst_82913,inst_82954,state_val_82961,c__69114__auto___83023,c__77324__auto___83021,id__77325__auto___83022){
return (function (){
var f__69115__auto__ = (function (){var switch__69000__auto__ = ((function (c__77324__auto____$1,id__77325__auto____$1,c__69114__auto____$1,inst_82901,inst_82911,inst_82912,inst_82913,inst_82954,state_val_82961,c__69114__auto___83023,c__77324__auto___83021,id__77325__auto___83022){
return (function (state_82952){
var state_val_82953 = (state_82952[(1)]);
if((state_val_82953 === (7))){
var state_82952__$1 = state_82952;
var statearr_82974_83033 = state_82952__$1;
(statearr_82974_83033[(2)] = null);

(statearr_82974_83033[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82953 === (20))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_82952,(10),Error,(3),(2));
var state_82952__$1 = state_82952;
var statearr_82975_83034 = state_82952__$1;
(statearr_82975_83034[(2)] = null);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_82952__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82953 === (1))){
var state_82952__$1 = state_82952;
var statearr_82976_83035 = state_82952__$1;
(statearr_82976_83035[(2)] = null);

(statearr_82976_83035[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82953 === (4))){
var state_82952__$1 = state_82952;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82952__$1,(6),ch);
} else {
if((state_val_82953 === (15))){
var inst_82927 = (state_82952[(7)]);
var inst_82942 = (state_82952[(2)]);
var inst_82943 = superv.async._track_exception.call(null,inst_82942,inst_82927);
var state_82952__$1 = state_82952;
var statearr_82977_83036 = state_82952__$1;
(statearr_82977_83036[(2)] = inst_82943);

(statearr_82977_83036[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82953 === (13))){
var inst_82927 = (state_82952[(7)]);
var inst_82945 = (state_82952[(2)]);
var state_82952__$1 = (function (){var statearr_82978 = state_82952;
(statearr_82978[(8)] = inst_82945);

return statearr_82978;
})();
var statearr_82979_83037 = state_82952__$1;
(statearr_82979_83037[(2)] = inst_82927);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_82952__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82953 === (6))){
var inst_82917 = (state_82952[(2)]);
var state_82952__$1 = state_82952;
if(cljs.core.truth_(inst_82917)){
var statearr_82980_83038 = state_82952__$1;
(statearr_82980_83038[(1)] = (7));

} else {
var statearr_82981_83039 = state_82952__$1;
(statearr_82981_83039[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82953 === (17))){
var state_82952__$1 = state_82952;
var statearr_82982_83040 = state_82952__$1;
(statearr_82982_83040[(2)] = null);

(statearr_82982_83040[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82953 === (3))){
var inst_82914 = (state_82952[(2)]);
var state_82952__$1 = (function (){var statearr_82983 = state_82952;
(statearr_82983[(9)] = inst_82914);

return statearr_82983;
})();
var statearr_82984_83041 = state_82952__$1;
(statearr_82984_83041[(2)] = null);

(statearr_82984_83041[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82953 === (12))){
var state_82952__$1 = state_82952;
var statearr_82985_83042 = state_82952__$1;
(statearr_82985_83042[(2)] = null);

(statearr_82985_83042[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82953 === (2))){
var inst_82950 = (state_82952[(2)]);
var state_82952__$1 = state_82952;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_82952__$1,inst_82950);
} else {
if((state_val_82953 === (19))){
var inst_82940 = (state_82952[(2)]);
var state_82952__$1 = state_82952;
var statearr_82986_83043 = state_82952__$1;
(statearr_82986_83043[(2)] = inst_82940);

(statearr_82986_83043[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82953 === (11))){
var state_82952__$1 = state_82952;
var statearr_82987_83044 = state_82952__$1;
(statearr_82987_83044[(2)] = null);

(statearr_82987_83044[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82953 === (9))){
var inst_82922 = (state_82952[(2)]);
var state_82952__$1 = state_82952;
var statearr_82988_83045 = state_82952__$1;
(statearr_82988_83045[(2)] = inst_82922);

(statearr_82988_83045[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82953 === (5))){
var inst_82924 = (state_82952[(2)]);
var inst_82925 = superv.async._unregister_go.call(null,inst_82924,id__77325__auto____$1);
var state_82952__$1 = (function (){var statearr_82989 = state_82952;
(statearr_82989[(10)] = inst_82925);

return statearr_82989;
})();
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_82952__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82953 === (14))){
var state_82952__$1 = state_82952;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82952__$1,(16),ch);
} else {
if((state_val_82953 === (16))){
var inst_82935 = (state_82952[(2)]);
var state_82952__$1 = state_82952;
if(cljs.core.truth_(inst_82935)){
var statearr_82990_83046 = state_82952__$1;
(statearr_82990_83046[(1)] = (17));

} else {
var statearr_82991_83047 = state_82952__$1;
(statearr_82991_83047[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82953 === (10))){
var inst_82927 = (state_82952[(7)]);
var inst_82927__$1 = (state_82952[(2)]);
var inst_82928 = cljs.core.ex_data.call(null,inst_82927__$1);
var inst_82929 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_82928);
var inst_82930 = cljs.core._EQ_.call(null,inst_82929,new cljs.core.Keyword(null,"aborted","aborted",1775972619));
var state_82952__$1 = (function (){var statearr_82992 = state_82952;
(statearr_82992[(7)] = inst_82927__$1);

return statearr_82992;
})();
if(inst_82930){
var statearr_82993_83048 = state_82952__$1;
(statearr_82993_83048[(1)] = (11));

} else {
var statearr_82994_83049 = state_82952__$1;
(statearr_82994_83049[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82953 === (18))){
var state_82952__$1 = state_82952;
var statearr_82995_83050 = state_82952__$1;
(statearr_82995_83050[(2)] = null);

(statearr_82995_83050[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82953 === (8))){
var state_82952__$1 = state_82952;
var statearr_82996_83051 = state_82952__$1;
(statearr_82996_83051[(2)] = null);

(statearr_82996_83051[(1)] = (9));


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
});})(c__77324__auto____$1,id__77325__auto____$1,c__69114__auto____$1,inst_82901,inst_82911,inst_82912,inst_82913,inst_82954,state_val_82961,c__69114__auto___83023,c__77324__auto___83021,id__77325__auto___83022))
;
return ((function (switch__69000__auto__,c__77324__auto____$1,id__77325__auto____$1,c__69114__auto____$1,inst_82901,inst_82911,inst_82912,inst_82913,inst_82954,state_val_82961,c__69114__auto___83023,c__77324__auto___83021,id__77325__auto___83022){
return (function() {
var superv$async$state_machine__69001__auto__ = null;
var superv$async$state_machine__69001__auto____0 = (function (){
var statearr_83000 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_83000[(0)] = superv$async$state_machine__69001__auto__);

(statearr_83000[(1)] = (1));

return statearr_83000;
});
var superv$async$state_machine__69001__auto____1 = (function (state_82952){
while(true){
var ret_value__69002__auto__ = (function (){try{while(true){
var result__69003__auto__ = switch__69000__auto__.call(null,state_82952);
if(cljs.core.keyword_identical_QMARK_.call(null,result__69003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69003__auto__;
}
break;
}
}catch (e83001){if((e83001 instanceof Object)){
var ex__69004__auto__ = e83001;
var statearr_83002_83052 = state_82952;
(statearr_83002_83052[(5)] = ex__69004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_82952);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e83001;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__69002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__83053 = state_82952;
state_82952 = G__83053;
continue;
} else {
return ret_value__69002__auto__;
}
break;
}
});
superv$async$state_machine__69001__auto__ = function(state_82952){
switch(arguments.length){
case 0:
return superv$async$state_machine__69001__auto____0.call(this);
case 1:
return superv$async$state_machine__69001__auto____1.call(this,state_82952);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
superv$async$state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$0 = superv$async$state_machine__69001__auto____0;
superv$async$state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$1 = superv$async$state_machine__69001__auto____1;
return superv$async$state_machine__69001__auto__;
})()
;})(switch__69000__auto__,c__77324__auto____$1,id__77325__auto____$1,c__69114__auto____$1,inst_82901,inst_82911,inst_82912,inst_82913,inst_82954,state_val_82961,c__69114__auto___83023,c__77324__auto___83021,id__77325__auto___83022))
})();
var state__69116__auto__ = (function (){var statearr_83003 = f__69115__auto__.call(null);
(statearr_83003[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__69114__auto____$1);

return statearr_83003;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__69116__auto__);
});
;})(c__77324__auto____$1,id__77325__auto____$1,c__69114__auto____$1,inst_82901,inst_82911,inst_82912,inst_82913,inst_82954,state_val_82961,c__69114__auto___83023,c__77324__auto___83021,id__77325__auto___83022))
})();
var inst_82956 = cljs.core.async.impl.dispatch.run.call(null,inst_82955);
var state_82960__$1 = (function (){var statearr_83004 = state_82960;
(statearr_83004[(12)] = inst_82956);

return statearr_83004;
})();
var statearr_83005_83054 = state_82960__$1;
(statearr_83005_83054[(2)] = inst_82954);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_82960__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82961 === (9))){
var inst_82899 = (state_82960[(2)]);
var inst_82900 = cljs.core.async.close_BANG_.call(null,ch);
var inst_82901 = superv.async.check_supervisor.call(null,superv.async.S);
var state_82960__$1 = (function (){var statearr_83006 = state_82960;
(statearr_83006[(13)] = inst_82900);

(statearr_83006[(11)] = inst_82901);

(statearr_83006[(14)] = inst_82899);

return statearr_83006;
})();
var statearr_83007_83055 = state_82960__$1;
(statearr_83007_83055[(2)] = null);

(statearr_83007_83055[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82961 === (5))){
var state_82960__$1 = state_82960;
var statearr_83008_83056 = state_82960__$1;
(statearr_83008_83056[(2)] = null);

(statearr_83008_83056[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82961 === (14))){
var state_82960__$1 = state_82960;
var statearr_83009_83057 = state_82960__$1;
(statearr_83009_83057[(2)] = null);

(statearr_83009_83057[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82961 === (10))){
var state_82960__$1 = state_82960;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82960__$1,(12),ch);
} else {
if((state_val_82961 === (8))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_82960,(4),Error,(3),(2));
var inst_82897 = superv.async._abort.call(null,S);
var state_82960__$1 = state_82960;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82960__$1,(9),inst_82897);
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
});})(c__69114__auto___83023,c__77324__auto___83021,id__77325__auto___83022))
;
return ((function (switch__69000__auto__,c__69114__auto___83023,c__77324__auto___83021,id__77325__auto___83022){
return (function() {
var superv$async$state_machine__69001__auto__ = null;
var superv$async$state_machine__69001__auto____0 = (function (){
var statearr_83013 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_83013[(0)] = superv$async$state_machine__69001__auto__);

(statearr_83013[(1)] = (1));

return statearr_83013;
});
var superv$async$state_machine__69001__auto____1 = (function (state_82960){
while(true){
var ret_value__69002__auto__ = (function (){try{while(true){
var result__69003__auto__ = switch__69000__auto__.call(null,state_82960);
if(cljs.core.keyword_identical_QMARK_.call(null,result__69003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69003__auto__;
}
break;
}
}catch (e83014){if((e83014 instanceof Object)){
var ex__69004__auto__ = e83014;
var statearr_83015_83058 = state_82960;
(statearr_83015_83058[(5)] = ex__69004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_82960);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e83014;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__69002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__83059 = state_82960;
state_82960 = G__83059;
continue;
} else {
return ret_value__69002__auto__;
}
break;
}
});
superv$async$state_machine__69001__auto__ = function(state_82960){
switch(arguments.length){
case 0:
return superv$async$state_machine__69001__auto____0.call(this);
case 1:
return superv$async$state_machine__69001__auto____1.call(this,state_82960);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
superv$async$state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$0 = superv$async$state_machine__69001__auto____0;
superv$async$state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$1 = superv$async$state_machine__69001__auto____1;
return superv$async$state_machine__69001__auto__;
})()
;})(switch__69000__auto__,c__69114__auto___83023,c__77324__auto___83021,id__77325__auto___83022))
})();
var state__69116__auto__ = (function (){var statearr_83016 = f__69115__auto__.call(null);
(statearr_83016[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__69114__auto___83023);

return statearr_83016;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__69116__auto__);
});})(c__69114__auto___83023,c__77324__auto___83021,id__77325__auto___83022))
);


return cljs.core.async.tap.call(null,mult,ch,close_QMARK_);
});

superv.async.tap.cljs$lang$maxFixedArity = 4;

/**
 * Safely managed subscription. The channel is closed on abortion and
 *   all pending puts are flushed.
 */
superv.async.sub = (function superv$async$sub(var_args){
var args83060 = [];
var len__62120__auto___83164 = arguments.length;
var i__62121__auto___83165 = (0);
while(true){
if((i__62121__auto___83165 < len__62120__auto___83164)){
args83060.push((arguments[i__62121__auto___83165]));

var G__83166 = (i__62121__auto___83165 + (1));
i__62121__auto___83165 = G__83166;
continue;
} else {
}
break;
}

var G__83062 = args83060.length;
switch (G__83062) {
case 4:
return superv.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return superv.async.sub.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args83060.length)].join('')));

}
});

superv.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (S,p,topic,ch){
return superv.async.sub.call(null,S,p,topic,ch,false);
});

superv.async.sub.cljs$core$IFn$_invoke$arity$5 = (function (S,p,topic,ch,close_QMARK_){
var c__77324__auto___83168 = superv.async.check_supervisor.call(null,superv.async.S);
var id__77325__auto___83169 = superv.async._register_go.call(null,S,cljs.core.list(cljs.core.list(new cljs.core.Symbol("cljs.core.async","<!","cljs.core.async/<!",1278951036,null),cljs.core.list(new cljs.core.Symbol("superv.async","-abort","superv.async/-abort",-365058004,null),new cljs.core.Symbol(null,"S","S",-1387142461,null))),cljs.core.list(new cljs.core.Symbol(null,"close!","close!",-438778971,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)),cljs.core.list(new cljs.core.Symbol(null,"go-try","go-try",1412345407,null),new cljs.core.Symbol(null,"S","S",-1387142461,null),cljs.core.list(new cljs.core.Symbol(null,"while","while",-1691317983,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null))))));
var c__69114__auto___83170 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__69114__auto___83170,c__77324__auto___83168,id__77325__auto___83169){
return (function (){
var f__69115__auto__ = (function (){var switch__69000__auto__ = ((function (c__69114__auto___83170,c__77324__auto___83168,id__77325__auto___83169){
return (function (state_83121){
var state_val_83122 = (state_83121[(1)]);
if((state_val_83122 === (1))){
var state_83121__$1 = state_83121;
var statearr_83123_83171 = state_83121__$1;
(statearr_83123_83171[(2)] = null);

(statearr_83123_83171[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83122 === (2))){
var inst_83119 = (state_83121[(2)]);
var state_83121__$1 = state_83121;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_83121__$1,inst_83119);
} else {
if((state_val_83122 === (3))){
var inst_83063 = (state_83121[(2)]);
var inst_83064 = superv.async._unregister_go.call(null,S,id__77325__auto___83169);
var state_83121__$1 = (function (){var statearr_83124 = state_83121;
(statearr_83124[(7)] = inst_83063);

(statearr_83124[(8)] = inst_83064);

return statearr_83124;
})();
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_83121__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83122 === (4))){
var inst_83066 = (state_83121[(9)]);
var inst_83066__$1 = (state_83121[(2)]);
var inst_83067 = cljs.core.ex_data.call(null,inst_83066__$1);
var inst_83068 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_83067);
var inst_83069 = cljs.core._EQ_.call(null,inst_83068,new cljs.core.Keyword(null,"aborted","aborted",1775972619));
var state_83121__$1 = (function (){var statearr_83125 = state_83121;
(statearr_83125[(9)] = inst_83066__$1);

return statearr_83125;
})();
if(inst_83069){
var statearr_83126_83172 = state_83121__$1;
(statearr_83126_83172[(1)] = (5));

} else {
var statearr_83127_83173 = state_83121__$1;
(statearr_83127_83173[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83122 === (5))){
var state_83121__$1 = state_83121;
var statearr_83128_83174 = state_83121__$1;
(statearr_83128_83174[(2)] = null);

(statearr_83128_83174[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83122 === (6))){
var inst_83066 = (state_83121[(9)]);
var inst_83072 = superv.async._track_exception.call(null,S,inst_83066);
var state_83121__$1 = state_83121;
var statearr_83129_83175 = state_83121__$1;
(statearr_83129_83175[(2)] = inst_83072);

(statearr_83129_83175[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83122 === (7))){
var inst_83066 = (state_83121[(9)]);
var inst_83074 = (state_83121[(2)]);
var state_83121__$1 = (function (){var statearr_83130 = state_83121;
(statearr_83130[(10)] = inst_83074);

return statearr_83130;
})();
var statearr_83131_83176 = state_83121__$1;
(statearr_83131_83176[(2)] = inst_83066);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_83121__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83122 === (8))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_83121,(4),Error,(3),(2));
var inst_83078 = superv.async._abort.call(null,S);
var state_83121__$1 = state_83121;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_83121__$1,(9),inst_83078);
} else {
if((state_val_83122 === (9))){
var inst_83080 = (state_83121[(2)]);
var inst_83081 = cljs.core.async.close_BANG_.call(null,ch);
var inst_83082 = superv.async.check_supervisor.call(null,superv.async.S);
var inst_83083 = cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"while","while",-1691317983,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null))));
var inst_83084 = superv.async._register_go.call(null,S,inst_83083);
var inst_83115 = cljs.core.async.chan.call(null,(1));
var inst_83116 = (function (){var c__77324__auto____$1 = inst_83082;
var id__77325__auto____$1 = inst_83084;
var c__69114__auto____$1 = inst_83115;
return ((function (c__77324__auto____$1,id__77325__auto____$1,c__69114__auto____$1,inst_83080,inst_83081,inst_83082,inst_83083,inst_83084,inst_83115,state_val_83122,c__69114__auto___83170,c__77324__auto___83168,id__77325__auto___83169){
return (function (){
var f__69115__auto__ = (function (){var switch__69000__auto__ = ((function (c__77324__auto____$1,id__77325__auto____$1,c__69114__auto____$1,inst_83080,inst_83081,inst_83082,inst_83083,inst_83084,inst_83115,state_val_83122,c__69114__auto___83170,c__77324__auto___83168,id__77325__auto___83169){
return (function (state_83113){
var state_val_83114 = (state_83113[(1)]);
if((state_val_83114 === (7))){
var inst_83088 = (state_83113[(7)]);
var inst_83096 = (state_83113[(2)]);
var state_83113__$1 = (function (){var statearr_83132 = state_83113;
(statearr_83132[(8)] = inst_83096);

return statearr_83132;
})();
var statearr_83133_83177 = state_83113__$1;
(statearr_83133_83177[(2)] = inst_83088);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_83113__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83114 === (1))){
var state_83113__$1 = state_83113;
var statearr_83134_83178 = state_83113__$1;
(statearr_83134_83178[(2)] = null);

(statearr_83134_83178[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83114 === (4))){
var inst_83088 = (state_83113[(7)]);
var inst_83088__$1 = (state_83113[(2)]);
var inst_83089 = cljs.core.ex_data.call(null,inst_83088__$1);
var inst_83090 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_83089);
var inst_83091 = cljs.core._EQ_.call(null,inst_83090,new cljs.core.Keyword(null,"aborted","aborted",1775972619));
var state_83113__$1 = (function (){var statearr_83135 = state_83113;
(statearr_83135[(7)] = inst_83088__$1);

return statearr_83135;
})();
if(inst_83091){
var statearr_83136_83179 = state_83113__$1;
(statearr_83136_83179[(1)] = (5));

} else {
var statearr_83137_83180 = state_83113__$1;
(statearr_83137_83180[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83114 === (13))){
var state_83113__$1 = state_83113;
var statearr_83138_83181 = state_83113__$1;
(statearr_83138_83181[(2)] = null);

(statearr_83138_83181[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83114 === (6))){
var inst_83088 = (state_83113[(7)]);
var inst_83094 = superv.async._track_exception.call(null,S,inst_83088);
var state_83113__$1 = state_83113;
var statearr_83139_83182 = state_83113__$1;
(statearr_83139_83182[(2)] = inst_83094);

(statearr_83139_83182[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83114 === (3))){
var inst_83085 = (state_83113[(2)]);
var inst_83086 = superv.async._unregister_go.call(null,S,id__77325__auto____$1);
var state_83113__$1 = (function (){var statearr_83140 = state_83113;
(statearr_83140[(9)] = inst_83085);

(statearr_83140[(10)] = inst_83086);

return statearr_83140;
})();
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_83113__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83114 === (12))){
var state_83113__$1 = state_83113;
var statearr_83141_83183 = state_83113__$1;
(statearr_83141_83183[(2)] = null);

(statearr_83141_83183[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83114 === (2))){
var inst_83111 = (state_83113[(2)]);
var state_83113__$1 = state_83113;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_83113__$1,inst_83111);
} else {
if((state_val_83114 === (11))){
var inst_83102 = (state_83113[(2)]);
var state_83113__$1 = state_83113;
if(cljs.core.truth_(inst_83102)){
var statearr_83142_83184 = state_83113__$1;
(statearr_83142_83184[(1)] = (12));

} else {
var statearr_83143_83185 = state_83113__$1;
(statearr_83143_83185[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83114 === (9))){
var state_83113__$1 = state_83113;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_83113__$1,(11),ch);
} else {
if((state_val_83114 === (5))){
var state_83113__$1 = state_83113;
var statearr_83144_83186 = state_83113__$1;
(statearr_83144_83186[(2)] = null);

(statearr_83144_83186[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83114 === (14))){
var inst_83107 = (state_83113[(2)]);
var state_83113__$1 = state_83113;
var statearr_83145_83187 = state_83113__$1;
(statearr_83145_83187[(2)] = inst_83107);

(statearr_83145_83187[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83114 === (10))){
var inst_83109 = (state_83113[(2)]);
var state_83113__$1 = state_83113;
var statearr_83146_83188 = state_83113__$1;
(statearr_83146_83188[(2)] = inst_83109);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_83113__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83114 === (8))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_83113,(4),Error,(3),(2));
var state_83113__$1 = state_83113;
var statearr_83147_83189 = state_83113__$1;
(statearr_83147_83189[(2)] = null);

(statearr_83147_83189[(1)] = (9));


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
});})(c__77324__auto____$1,id__77325__auto____$1,c__69114__auto____$1,inst_83080,inst_83081,inst_83082,inst_83083,inst_83084,inst_83115,state_val_83122,c__69114__auto___83170,c__77324__auto___83168,id__77325__auto___83169))
;
return ((function (switch__69000__auto__,c__77324__auto____$1,id__77325__auto____$1,c__69114__auto____$1,inst_83080,inst_83081,inst_83082,inst_83083,inst_83084,inst_83115,state_val_83122,c__69114__auto___83170,c__77324__auto___83168,id__77325__auto___83169){
return (function() {
var superv$async$state_machine__69001__auto__ = null;
var superv$async$state_machine__69001__auto____0 = (function (){
var statearr_83151 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_83151[(0)] = superv$async$state_machine__69001__auto__);

(statearr_83151[(1)] = (1));

return statearr_83151;
});
var superv$async$state_machine__69001__auto____1 = (function (state_83113){
while(true){
var ret_value__69002__auto__ = (function (){try{while(true){
var result__69003__auto__ = switch__69000__auto__.call(null,state_83113);
if(cljs.core.keyword_identical_QMARK_.call(null,result__69003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69003__auto__;
}
break;
}
}catch (e83152){if((e83152 instanceof Object)){
var ex__69004__auto__ = e83152;
var statearr_83153_83190 = state_83113;
(statearr_83153_83190[(5)] = ex__69004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_83113);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e83152;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__69002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__83191 = state_83113;
state_83113 = G__83191;
continue;
} else {
return ret_value__69002__auto__;
}
break;
}
});
superv$async$state_machine__69001__auto__ = function(state_83113){
switch(arguments.length){
case 0:
return superv$async$state_machine__69001__auto____0.call(this);
case 1:
return superv$async$state_machine__69001__auto____1.call(this,state_83113);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
superv$async$state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$0 = superv$async$state_machine__69001__auto____0;
superv$async$state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$1 = superv$async$state_machine__69001__auto____1;
return superv$async$state_machine__69001__auto__;
})()
;})(switch__69000__auto__,c__77324__auto____$1,id__77325__auto____$1,c__69114__auto____$1,inst_83080,inst_83081,inst_83082,inst_83083,inst_83084,inst_83115,state_val_83122,c__69114__auto___83170,c__77324__auto___83168,id__77325__auto___83169))
})();
var state__69116__auto__ = (function (){var statearr_83154 = f__69115__auto__.call(null);
(statearr_83154[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__69114__auto____$1);

return statearr_83154;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__69116__auto__);
});
;})(c__77324__auto____$1,id__77325__auto____$1,c__69114__auto____$1,inst_83080,inst_83081,inst_83082,inst_83083,inst_83084,inst_83115,state_val_83122,c__69114__auto___83170,c__77324__auto___83168,id__77325__auto___83169))
})();
var inst_83117 = cljs.core.async.impl.dispatch.run.call(null,inst_83116);
var state_83121__$1 = (function (){var statearr_83155 = state_83121;
(statearr_83155[(11)] = inst_83080);

(statearr_83155[(12)] = inst_83117);

(statearr_83155[(13)] = inst_83081);

return statearr_83155;
})();
var statearr_83156_83192 = state_83121__$1;
(statearr_83156_83192[(2)] = inst_83115);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_83121__$1);

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
});})(c__69114__auto___83170,c__77324__auto___83168,id__77325__auto___83169))
;
return ((function (switch__69000__auto__,c__69114__auto___83170,c__77324__auto___83168,id__77325__auto___83169){
return (function() {
var superv$async$state_machine__69001__auto__ = null;
var superv$async$state_machine__69001__auto____0 = (function (){
var statearr_83160 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_83160[(0)] = superv$async$state_machine__69001__auto__);

(statearr_83160[(1)] = (1));

return statearr_83160;
});
var superv$async$state_machine__69001__auto____1 = (function (state_83121){
while(true){
var ret_value__69002__auto__ = (function (){try{while(true){
var result__69003__auto__ = switch__69000__auto__.call(null,state_83121);
if(cljs.core.keyword_identical_QMARK_.call(null,result__69003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69003__auto__;
}
break;
}
}catch (e83161){if((e83161 instanceof Object)){
var ex__69004__auto__ = e83161;
var statearr_83162_83193 = state_83121;
(statearr_83162_83193[(5)] = ex__69004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_83121);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e83161;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__69002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__83194 = state_83121;
state_83121 = G__83194;
continue;
} else {
return ret_value__69002__auto__;
}
break;
}
});
superv$async$state_machine__69001__auto__ = function(state_83121){
switch(arguments.length){
case 0:
return superv$async$state_machine__69001__auto____0.call(this);
case 1:
return superv$async$state_machine__69001__auto____1.call(this,state_83121);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
superv$async$state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$0 = superv$async$state_machine__69001__auto____0;
superv$async$state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$1 = superv$async$state_machine__69001__auto____1;
return superv$async$state_machine__69001__auto__;
})()
;})(switch__69000__auto__,c__69114__auto___83170,c__77324__auto___83168,id__77325__auto___83169))
})();
var state__69116__auto__ = (function (){var statearr_83163 = f__69115__auto__.call(null);
(statearr_83163[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__69114__auto___83170);

return statearr_83163;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__69116__auto__);
});})(c__69114__auto___83170,c__77324__auto___83168,id__77325__auto___83169))
);


return cljs.core.async.sub.call(null,p,topic,ch,close_QMARK_);
});

superv.async.sub.cljs$lang$maxFixedArity = 5;

/**
 * Creates a supervised channel for transducer xform. Exceptions
 *   immediatly propagate to the supervisor.
 */
superv.async.chan_super = (function superv$async$chan_super(S,buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,(function (e){
return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(S),e);
}));
});
/**
 * Starts a subsystem with supervised go-routines initialized by start-fn.
 *   Restarts the system on error for retries times with a potential delay in
 *   milliseconds, an optional error-fn predicate determining the retry and a
 *   optional filter by exception type. You can optionally pass a supervisor to
 *   form a supervision tree. Whenever this passed supervisor aborts the context,
 *   this supervisor will close as well. You still need to block on the result of
 *   this supervisor if you want a clean synchronized shutdown. The concept is
 *   similar to http://learnyousomeerlang.com/supervisors
 * 
 *   All blocking channel ops in the subroutines (supervised context) are
 *   aborted with an exception on error to force total termination. The
 *   supervisor waits until all supervised go-routines are finished and
 *   have freed resources before restarting.
 * 
 *   If exceptions are not taken from go-try channels (by error), they become stale
 *   after the stale-timeout and trigger a restart or are propagated to the parent
 *   supervisor (if available) and the return value.
 * 
 *   Note: The signature and behaviour of this function might still change.
 */
superv.async.restarting_supervisor = (function superv$async$restarting_supervisor(var_args){
var args__62127__auto__ = [];
var len__62120__auto___83502 = arguments.length;
var i__62121__auto___83503 = (0);
while(true){
if((i__62121__auto___83503 < len__62120__auto___83502)){
args__62127__auto__.push((arguments[i__62121__auto___83503]));

var G__83504 = (i__62121__auto___83503 + (1));
i__62121__auto___83503 = G__83504;
continue;
} else {
}
break;
}

var argseq__62128__auto__ = ((((1) < args__62127__auto__.length))?(new cljs.core.IndexedSeq(args__62127__auto__.slice((1)),(0),null)):null);
return superv.async.restarting_supervisor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__62128__auto__);
});

superv.async.restarting_supervisor.cljs$core$IFn$_invoke$arity$variadic = (function (start_fn,p__83209){
var map__83210 = p__83209;
var map__83210__$1 = ((((!((map__83210 == null)))?((((map__83210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__83210.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83210):map__83210);
var retries = cljs.core.get.call(null,map__83210__$1,new cljs.core.Keyword(null,"retries","retries",1888092808),Infinity);
var delay = cljs.core.get.call(null,map__83210__$1,new cljs.core.Keyword(null,"delay","delay",-574225219),(0));
var error_fn = cljs.core.get.call(null,map__83210__$1,new cljs.core.Keyword(null,"error-fn","error-fn",-171437615),null);
var exception = cljs.core.get.call(null,map__83210__$1,new cljs.core.Keyword(null,"exception","exception",-335277064),Error);
var stale_timeout = cljs.core.get.call(null,map__83210__$1,new cljs.core.Keyword(null,"stale-timeout","stale-timeout",-468804294),((60) * (1000)));
var log_fn = cljs.core.get.call(null,map__83210__$1,new cljs.core.Keyword(null,"log-fn","log-fn",-2003241282),((function (map__83210,map__83210__$1,retries,delay,error_fn,exception,stale_timeout){
return (function (level,msg){
return cljs.core.println.call(null,level,msg);
});})(map__83210,map__83210__$1,retries,delay,error_fn,exception,stale_timeout))
);
var supervisor = cljs.core.get.call(null,map__83210__$1,new cljs.core.Keyword(null,"supervisor","supervisor",-134060208));
var retries__$1 = (function (){var or__60899__auto__ = retries;
if(cljs.core.truth_(or__60899__auto__)){
return or__60899__auto__;
} else {
return Infinity;
}
})();
var out_ch = cljs.core.async.chan.call(null);
var c__69114__auto___83505 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__69114__auto___83505,retries__$1,out_ch,map__83210,map__83210__$1,retries,delay,error_fn,exception,stale_timeout,log_fn,supervisor){
return (function (){
var f__69115__auto__ = (function (){var switch__69000__auto__ = ((function (c__69114__auto___83505,retries__$1,out_ch,map__83210,map__83210__$1,retries,delay,error_fn,exception,stale_timeout,log_fn,supervisor){
return (function (state_83401){
var state_val_83402 = (state_83401[(1)]);
if((state_val_83402 === (7))){
var inst_83216 = (state_83401[(7)]);
var inst_83344 = (state_83401[(2)]);
var inst_83345 = cljs.core.nth.call(null,inst_83344,(0),null);
var inst_83346 = cljs.core.nth.call(null,inst_83344,(1),null);
var inst_83347 = cljs.core._EQ_.call(null,inst_83346,inst_83216);
var inst_83348 = !(inst_83347);
var state_83401__$1 = (function (){var statearr_83403 = state_83401;
(statearr_83403[(8)] = inst_83345);

return statearr_83403;
})();
if(inst_83348){
var statearr_83404_83506 = state_83401__$1;
(statearr_83404_83506[(1)] = (8));

} else {
var statearr_83405_83507 = state_83401__$1;
(statearr_83405_83507[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83402 === (20))){
var inst_83345 = (state_83401[(8)]);
var inst_83376 = (state_83401[(2)]);
var inst_83377 = cljs.core.async.put_BANG_.call(null,out_ch,inst_83345);
var inst_83378 = cljs.core.async.close_BANG_.call(null,out_ch);
var state_83401__$1 = (function (){var statearr_83406 = state_83401;
(statearr_83406[(9)] = inst_83376);

(statearr_83406[(10)] = inst_83377);

return statearr_83406;
})();
var statearr_83407_83508 = state_83401__$1;
(statearr_83407_83508[(2)] = inst_83378);

(statearr_83407_83508[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83402 === (1))){
var inst_83212 = retries__$1;
var state_83401__$1 = (function (){var statearr_83408 = state_83401;
(statearr_83408[(11)] = inst_83212);

return statearr_83408;
})();
var statearr_83409_83509 = state_83401__$1;
(statearr_83409_83509[(2)] = null);

(statearr_83409_83509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83402 === (4))){
var inst_83215 = (state_83401[(12)]);
var inst_83214 = (state_83401[(13)]);
var inst_83212 = (state_83401[(11)]);
var inst_83225 = (state_83401[(14)]);
var inst_83216 = (state_83401[(7)]);
var inst_83224 = (state_83401[(15)]);
var inst_83227 = superv.async.check_supervisor.call(null,superv.async.S);
var inst_83228 = cljs.core.list(cljs.core.list(new cljs.core.Symbol("cljs.core.async","<!","cljs.core.async/<!",1278951036,null),cljs.core.list(new cljs.core.Symbol("superv.async","-abort","superv.async/-abort",-365058004,null),new cljs.core.Symbol(null,"supervisor","supervisor",1506471319,null))),cljs.core.list(new cljs.core.Symbol(null,"close!","close!",-438778971,null),new cljs.core.Symbol(null,"ab-ch","ab-ch",-698106711,null)));
var inst_83229 = superv.async._register_go.call(null,supervisor,inst_83228);
var inst_83254 = cljs.core.async.chan.call(null,(1));
var inst_83255 = (function (){var stale_timeout__$1 = (1000);
var c__69114__auto____$1 = inst_83254;
var c__77324__auto__ = inst_83227;
var err_ch = inst_83214;
var ab_ch = inst_83215;
var id__77325__auto__ = inst_83229;
var res_ch = inst_83225;
var close_ch = inst_83216;
var retries__$2 = inst_83212;
var s = inst_83224;
return ((function (stale_timeout__$1,c__69114__auto____$1,c__77324__auto__,err_ch,ab_ch,id__77325__auto__,res_ch,close_ch,retries__$2,s,inst_83215,inst_83214,inst_83212,inst_83225,inst_83216,inst_83224,inst_83227,inst_83228,inst_83229,inst_83254,state_val_83402,c__69114__auto___83505,retries__$1,out_ch,map__83210,map__83210__$1,retries,delay,error_fn,exception,stale_timeout,log_fn,supervisor){
return (function (){
var f__69115__auto__ = (function (){var switch__69000__auto__ = ((function (stale_timeout__$1,c__69114__auto____$1,c__77324__auto__,err_ch,ab_ch,id__77325__auto__,res_ch,close_ch,retries__$2,s,inst_83215,inst_83214,inst_83212,inst_83225,inst_83216,inst_83224,inst_83227,inst_83228,inst_83229,inst_83254,state_val_83402,c__69114__auto___83505,retries__$1,out_ch,map__83210,map__83210__$1,retries,delay,error_fn,exception,stale_timeout,log_fn,supervisor){
return (function (state_83252){
var state_val_83253 = (state_83252[(1)]);
if((state_val_83253 === (1))){
var state_83252__$1 = state_83252;
var statearr_83410_83510 = state_83252__$1;
(statearr_83410_83510[(2)] = null);

(statearr_83410_83510[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83253 === (2))){
var inst_83250 = (state_83252[(2)]);
var state_83252__$1 = state_83252;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_83252__$1,inst_83250);
} else {
if((state_val_83253 === (3))){
var inst_83230 = (state_83252[(2)]);
var inst_83231 = superv.async._unregister_go.call(null,supervisor,id__77325__auto__);
var state_83252__$1 = (function (){var statearr_83411 = state_83252;
(statearr_83411[(7)] = inst_83231);

(statearr_83411[(8)] = inst_83230);

return statearr_83411;
})();
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_83252__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83253 === (4))){
var inst_83233 = (state_83252[(9)]);
var inst_83233__$1 = (state_83252[(2)]);
var inst_83234 = cljs.core.ex_data.call(null,inst_83233__$1);
var inst_83235 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_83234);
var inst_83236 = cljs.core._EQ_.call(null,inst_83235,new cljs.core.Keyword(null,"aborted","aborted",1775972619));
var state_83252__$1 = (function (){var statearr_83412 = state_83252;
(statearr_83412[(9)] = inst_83233__$1);

return statearr_83412;
})();
if(inst_83236){
var statearr_83413_83511 = state_83252__$1;
(statearr_83413_83511[(1)] = (5));

} else {
var statearr_83414_83512 = state_83252__$1;
(statearr_83414_83512[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83253 === (5))){
var state_83252__$1 = state_83252;
var statearr_83415_83513 = state_83252__$1;
(statearr_83415_83513[(2)] = null);

(statearr_83415_83513[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83253 === (6))){
var inst_83233 = (state_83252[(9)]);
var inst_83239 = superv.async._track_exception.call(null,supervisor,inst_83233);
var state_83252__$1 = state_83252;
var statearr_83416_83514 = state_83252__$1;
(statearr_83416_83514[(2)] = inst_83239);

(statearr_83416_83514[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83253 === (7))){
var inst_83233 = (state_83252[(9)]);
var inst_83241 = (state_83252[(2)]);
var state_83252__$1 = (function (){var statearr_83417 = state_83252;
(statearr_83417[(10)] = inst_83241);

return statearr_83417;
})();
var statearr_83418_83515 = state_83252__$1;
(statearr_83418_83515[(2)] = inst_83233);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_83252__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83253 === (8))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_83252,(4),Error,(3),(2));
var inst_83245 = superv.async._abort.call(null,supervisor);
var state_83252__$1 = state_83252;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_83252__$1,(9),inst_83245);
} else {
if((state_val_83253 === (9))){
var inst_83247 = (state_83252[(2)]);
var inst_83248 = cljs.core.async.close_BANG_.call(null,ab_ch);
var state_83252__$1 = (function (){var statearr_83419 = state_83252;
(statearr_83419[(11)] = inst_83247);

return statearr_83419;
})();
var statearr_83420_83516 = state_83252__$1;
(statearr_83420_83516[(2)] = inst_83248);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_83252__$1);

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
});})(stale_timeout__$1,c__69114__auto____$1,c__77324__auto__,err_ch,ab_ch,id__77325__auto__,res_ch,close_ch,retries__$2,s,inst_83215,inst_83214,inst_83212,inst_83225,inst_83216,inst_83224,inst_83227,inst_83228,inst_83229,inst_83254,state_val_83402,c__69114__auto___83505,retries__$1,out_ch,map__83210,map__83210__$1,retries,delay,error_fn,exception,stale_timeout,log_fn,supervisor))
;
return ((function (switch__69000__auto__,stale_timeout__$1,c__69114__auto____$1,c__77324__auto__,err_ch,ab_ch,id__77325__auto__,res_ch,close_ch,retries__$2,s,inst_83215,inst_83214,inst_83212,inst_83225,inst_83216,inst_83224,inst_83227,inst_83228,inst_83229,inst_83254,state_val_83402,c__69114__auto___83505,retries__$1,out_ch,map__83210,map__83210__$1,retries,delay,error_fn,exception,stale_timeout,log_fn,supervisor){
return (function() {
var superv$async$state_machine__69001__auto__ = null;
var superv$async$state_machine__69001__auto____0 = (function (){
var statearr_83424 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_83424[(0)] = superv$async$state_machine__69001__auto__);

(statearr_83424[(1)] = (1));

return statearr_83424;
});
var superv$async$state_machine__69001__auto____1 = (function (state_83252){
while(true){
var ret_value__69002__auto__ = (function (){try{while(true){
var result__69003__auto__ = switch__69000__auto__.call(null,state_83252);
if(cljs.core.keyword_identical_QMARK_.call(null,result__69003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69003__auto__;
}
break;
}
}catch (e83425){if((e83425 instanceof Object)){
var ex__69004__auto__ = e83425;
var statearr_83426_83517 = state_83252;
(statearr_83426_83517[(5)] = ex__69004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_83252);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e83425;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__69002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__83518 = state_83252;
state_83252 = G__83518;
continue;
} else {
return ret_value__69002__auto__;
}
break;
}
});
superv$async$state_machine__69001__auto__ = function(state_83252){
switch(arguments.length){
case 0:
return superv$async$state_machine__69001__auto____0.call(this);
case 1:
return superv$async$state_machine__69001__auto____1.call(this,state_83252);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
superv$async$state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$0 = superv$async$state_machine__69001__auto____0;
superv$async$state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$1 = superv$async$state_machine__69001__auto____1;
return superv$async$state_machine__69001__auto__;
})()
;})(switch__69000__auto__,stale_timeout__$1,c__69114__auto____$1,c__77324__auto__,err_ch,ab_ch,id__77325__auto__,res_ch,close_ch,retries__$2,s,inst_83215,inst_83214,inst_83212,inst_83225,inst_83216,inst_83224,inst_83227,inst_83228,inst_83229,inst_83254,state_val_83402,c__69114__auto___83505,retries__$1,out_ch,map__83210,map__83210__$1,retries,delay,error_fn,exception,stale_timeout,log_fn,supervisor))
})();
var state__69116__auto__ = (function (){var statearr_83427 = f__69115__auto__.call(null);
(statearr_83427[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__69114__auto____$1);

return statearr_83427;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__69116__auto__);
});
;})(stale_timeout__$1,c__69114__auto____$1,c__77324__auto__,err_ch,ab_ch,id__77325__auto__,res_ch,close_ch,retries__$2,s,inst_83215,inst_83214,inst_83212,inst_83225,inst_83216,inst_83224,inst_83227,inst_83228,inst_83229,inst_83254,state_val_83402,c__69114__auto___83505,retries__$1,out_ch,map__83210,map__83210__$1,retries,delay,error_fn,exception,stale_timeout,log_fn,supervisor))
})();
var inst_83256 = cljs.core.async.impl.dispatch.run.call(null,inst_83255);
var state_83401__$1 = (function (){var statearr_83428 = state_83401;
(statearr_83428[(16)] = inst_83256);

return statearr_83428;
})();
var statearr_83429_83519 = state_83401__$1;
(statearr_83429_83519[(2)] = inst_83254);

(statearr_83429_83519[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83402 === (15))){
var inst_83345 = (state_83401[(8)]);
var inst_83367 = [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_83368 = [new cljs.core.Keyword(null,"passing-error","passing-error",-1357712542),inst_83345];
var inst_83369 = cljs.core.PersistentHashMap.fromArrays(inst_83367,inst_83368);
var inst_83370 = log_fn.call(null,new cljs.core.Keyword(null,"error","error",-978969032),inst_83369);
var state_83401__$1 = (function (){var statearr_83430 = state_83401;
(statearr_83430[(17)] = inst_83370);

return statearr_83430;
})();
if(cljs.core.truth_(supervisor)){
var statearr_83431_83520 = state_83401__$1;
(statearr_83431_83520[(1)] = (18));

} else {
var statearr_83432_83521 = state_83401__$1;
(statearr_83432_83521[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83402 === (21))){
var inst_83212 = (state_83401[(11)]);
var inst_83345 = (state_83401[(8)]);
var inst_83382 = (state_83401[(2)]);
var inst_83383 = [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"further-retries","further-retries",1297645153)];
var inst_83384 = [new cljs.core.Keyword(null,"retry","retry",-614012896),inst_83345,inst_83212];
var inst_83385 = cljs.core.PersistentHashMap.fromArrays(inst_83383,inst_83384);
var inst_83386 = log_fn.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),inst_83385);
var inst_83387 = (inst_83212 - (1));
var inst_83212__$1 = inst_83387;
var state_83401__$1 = (function (){var statearr_83433 = state_83401;
(statearr_83433[(11)] = inst_83212__$1);

(statearr_83433[(18)] = inst_83386);

(statearr_83433[(19)] = inst_83382);

return statearr_83433;
})();
var statearr_83434_83522 = state_83401__$1;
(statearr_83434_83522[(2)] = null);

(statearr_83434_83522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83402 === (13))){
var inst_83345 = (state_83401[(8)]);
var inst_83359 = error_fn.call(null,inst_83345);
var state_83401__$1 = state_83401;
var statearr_83435_83523 = state_83401__$1;
(statearr_83435_83523[(2)] = inst_83359);

(statearr_83435_83523[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83402 === (22))){
var inst_83393 = (state_83401[(2)]);
var inst_83394 = cljs.core.async.put_BANG_.call(null,out_ch,inst_83393);
var inst_83395 = cljs.core.async.close_BANG_.call(null,out_ch);
var state_83401__$1 = (function (){var statearr_83436 = state_83401;
(statearr_83436[(20)] = inst_83394);

return statearr_83436;
})();
var statearr_83437_83524 = state_83401__$1;
(statearr_83437_83524[(2)] = inst_83395);

(statearr_83437_83524[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83402 === (6))){
var inst_83215 = (state_83401[(12)]);
var inst_83214 = (state_83401[(13)]);
var inst_83212 = (state_83401[(11)]);
var inst_83225 = (state_83401[(14)]);
var inst_83216 = (state_83401[(7)]);
var inst_83224 = (state_83401[(15)]);
var inst_83259 = (state_83401[(2)]);
var inst_83306 = cljs.core.async.chan.call(null,(1));
var inst_83307 = (function (){var retries__$2 = inst_83212;
var err_ch = inst_83214;
var ab_ch = inst_83215;
var close_ch = inst_83216;
var s = inst_83224;
var res_ch = inst_83225;
var stale_timeout__$1 = (1000);
var c__69114__auto____$1 = inst_83306;
return ((function (retries__$2,err_ch,ab_ch,close_ch,s,res_ch,stale_timeout__$1,c__69114__auto____$1,inst_83215,inst_83214,inst_83212,inst_83225,inst_83216,inst_83224,inst_83259,inst_83306,state_val_83402,c__69114__auto___83505,retries__$1,out_ch,map__83210,map__83210__$1,retries,delay,error_fn,exception,stale_timeout,log_fn,supervisor){
return (function (){
var f__69115__auto__ = (function (){var switch__69000__auto__ = ((function (retries__$2,err_ch,ab_ch,close_ch,s,res_ch,stale_timeout__$1,c__69114__auto____$1,inst_83215,inst_83214,inst_83212,inst_83225,inst_83216,inst_83224,inst_83259,inst_83306,state_val_83402,c__69114__auto___83505,retries__$1,out_ch,map__83210,map__83210__$1,retries,delay,error_fn,exception,stale_timeout,log_fn,supervisor){
return (function (state_83304){
var state_val_83305 = (state_83304[(1)]);
if((state_val_83305 === (7))){
var inst_83279 = (state_83304[(7)]);
var inst_83266 = (state_83304[(2)]);
var inst_83274 = (function (){return ((function (inst_83279,inst_83266,state_val_83305,retries__$2,err_ch,ab_ch,close_ch,s,res_ch,stale_timeout__$1,c__69114__auto____$1,inst_83215,inst_83214,inst_83212,inst_83225,inst_83216,inst_83224,inst_83259,inst_83306,state_val_83402,c__69114__auto___83505,retries__$1,out_ch,map__83210,map__83210__$1,retries,delay,error_fn,exception,stale_timeout,log_fn,supervisor){
return (function (p__83273){
var vec__83438 = p__83273;
var k = cljs.core.nth.call(null,vec__83438,(0),null);
var v = cljs.core.nth.call(null,vec__83438,(1),null);
return ((superv.async.now.call(null).getTime() - stale_timeout__$1) > v.getTime());
});
;})(inst_83279,inst_83266,state_val_83305,retries__$2,err_ch,ab_ch,close_ch,s,res_ch,stale_timeout__$1,c__69114__auto____$1,inst_83215,inst_83214,inst_83212,inst_83225,inst_83216,inst_83224,inst_83259,inst_83306,state_val_83402,c__69114__auto___83505,retries__$1,out_ch,map__83210,map__83210__$1,retries,delay,error_fn,exception,stale_timeout,log_fn,supervisor))
})();
var inst_83275 = new cljs.core.Keyword(null,"pending-exceptions","pending-exceptions",-1888280094).cljs$core$IFn$_invoke$arity$1(s);
var inst_83276 = cljs.core.deref.call(null,inst_83275);
var inst_83277 = cljs.core.filter.call(null,inst_83274,inst_83276);
var inst_83278 = cljs.core.nth.call(null,inst_83277,(0),null);
var inst_83279__$1 = cljs.core.nth.call(null,inst_83278,(0),null);
var inst_83280 = cljs.core.nth.call(null,inst_83278,(1),null);
var state_83304__$1 = (function (){var statearr_83441 = state_83304;
(statearr_83441[(7)] = inst_83279__$1);

(statearr_83441[(8)] = inst_83266);

(statearr_83441[(9)] = inst_83280);

return statearr_83441;
})();
if(cljs.core.truth_(inst_83279__$1)){
var statearr_83442_83525 = state_83304__$1;
(statearr_83442_83525[(1)] = (8));

} else {
var statearr_83443_83526 = state_83304__$1;
(statearr_83443_83526[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83305 === (1))){
var state_83304__$1 = state_83304;
var statearr_83444_83527 = state_83304__$1;
(statearr_83444_83527[(2)] = null);

(statearr_83444_83527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83305 === (4))){
var state_83304__$1 = state_83304;
var statearr_83445_83528 = state_83304__$1;
(statearr_83445_83528[(2)] = null);

(statearr_83445_83528[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83305 === (13))){
var inst_83279 = (state_83304[(7)]);
var inst_83292 = (state_83304[(2)]);
var inst_83293 = superv.async._free_exception.call(null,s,inst_83279);
var inst_83294 = cljs.core.async.put_BANG_.call(null,err_ch,inst_83279);
var state_83304__$1 = (function (){var statearr_83446 = state_83304;
(statearr_83446[(10)] = inst_83293);

(statearr_83446[(11)] = inst_83292);

return statearr_83446;
})();
var statearr_83447_83529 = state_83304__$1;
(statearr_83447_83529[(2)] = inst_83294);

(statearr_83447_83529[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83305 === (6))){
var inst_83300 = (state_83304[(2)]);
var state_83304__$1 = state_83304;
var statearr_83448_83530 = state_83304__$1;
(statearr_83448_83530[(2)] = inst_83300);

(statearr_83448_83530[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83305 === (3))){
var inst_83302 = (state_83304[(2)]);
var state_83304__$1 = state_83304;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_83304__$1,inst_83302);
} else {
if((state_val_83305 === (12))){
var inst_83279 = (state_83304[(7)]);
var inst_83287 = [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_83288 = [new cljs.core.Keyword(null,"stale-error-in-supervisor","stale-error-in-supervisor",-123257662),inst_83279];
var inst_83289 = cljs.core.PersistentHashMap.fromArrays(inst_83287,inst_83288);
var inst_83290 = log_fn.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_83289);
var state_83304__$1 = state_83304;
var statearr_83449_83531 = state_83304__$1;
(statearr_83449_83531[(2)] = inst_83290);

(statearr_83449_83531[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83305 === (2))){
var inst_83261 = cljs.core.async.poll_BANG_.call(null,ab_ch);
var state_83304__$1 = state_83304;
if(cljs.core.truth_(inst_83261)){
var statearr_83450_83532 = state_83304__$1;
(statearr_83450_83532[(1)] = (4));

} else {
var statearr_83451_83533 = state_83304__$1;
(statearr_83451_83533[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83305 === (11))){
var state_83304__$1 = state_83304;
var statearr_83452_83534 = state_83304__$1;
(statearr_83452_83534[(2)] = null);

(statearr_83452_83534[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83305 === (9))){
var state_83304__$1 = state_83304;
var statearr_83453_83535 = state_83304__$1;
(statearr_83453_83535[(2)] = null);

(statearr_83453_83535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83305 === (5))){
var inst_83264 = cljs.core.async.timeout.call(null,stale_timeout__$1);
var state_83304__$1 = state_83304;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_83304__$1,(7),inst_83264);
} else {
if((state_val_83305 === (10))){
var inst_83298 = (state_83304[(2)]);
var state_83304__$1 = state_83304;
var statearr_83454_83536 = state_83304__$1;
(statearr_83454_83536[(2)] = inst_83298);

(statearr_83454_83536[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83305 === (8))){
var inst_83279 = (state_83304[(7)]);
var inst_83282 = cljs.core.ex_data.call(null,inst_83279);
var inst_83283 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_83282);
var inst_83284 = cljs.core._EQ_.call(null,inst_83283,new cljs.core.Keyword(null,"aborted","aborted",1775972619));
var state_83304__$1 = state_83304;
if(inst_83284){
var statearr_83455_83537 = state_83304__$1;
(statearr_83455_83537[(1)] = (11));

} else {
var statearr_83456_83538 = state_83304__$1;
(statearr_83456_83538[(1)] = (12));

}

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
});})(retries__$2,err_ch,ab_ch,close_ch,s,res_ch,stale_timeout__$1,c__69114__auto____$1,inst_83215,inst_83214,inst_83212,inst_83225,inst_83216,inst_83224,inst_83259,inst_83306,state_val_83402,c__69114__auto___83505,retries__$1,out_ch,map__83210,map__83210__$1,retries,delay,error_fn,exception,stale_timeout,log_fn,supervisor))
;
return ((function (switch__69000__auto__,retries__$2,err_ch,ab_ch,close_ch,s,res_ch,stale_timeout__$1,c__69114__auto____$1,inst_83215,inst_83214,inst_83212,inst_83225,inst_83216,inst_83224,inst_83259,inst_83306,state_val_83402,c__69114__auto___83505,retries__$1,out_ch,map__83210,map__83210__$1,retries,delay,error_fn,exception,stale_timeout,log_fn,supervisor){
return (function() {
var superv$async$state_machine__69001__auto__ = null;
var superv$async$state_machine__69001__auto____0 = (function (){
var statearr_83460 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_83460[(0)] = superv$async$state_machine__69001__auto__);

(statearr_83460[(1)] = (1));

return statearr_83460;
});
var superv$async$state_machine__69001__auto____1 = (function (state_83304){
while(true){
var ret_value__69002__auto__ = (function (){try{while(true){
var result__69003__auto__ = switch__69000__auto__.call(null,state_83304);
if(cljs.core.keyword_identical_QMARK_.call(null,result__69003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69003__auto__;
}
break;
}
}catch (e83461){if((e83461 instanceof Object)){
var ex__69004__auto__ = e83461;
var statearr_83462_83539 = state_83304;
(statearr_83462_83539[(5)] = ex__69004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_83304);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e83461;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__69002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__83540 = state_83304;
state_83304 = G__83540;
continue;
} else {
return ret_value__69002__auto__;
}
break;
}
});
superv$async$state_machine__69001__auto__ = function(state_83304){
switch(arguments.length){
case 0:
return superv$async$state_machine__69001__auto____0.call(this);
case 1:
return superv$async$state_machine__69001__auto____1.call(this,state_83304);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
superv$async$state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$0 = superv$async$state_machine__69001__auto____0;
superv$async$state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$1 = superv$async$state_machine__69001__auto____1;
return superv$async$state_machine__69001__auto__;
})()
;})(switch__69000__auto__,retries__$2,err_ch,ab_ch,close_ch,s,res_ch,stale_timeout__$1,c__69114__auto____$1,inst_83215,inst_83214,inst_83212,inst_83225,inst_83216,inst_83224,inst_83259,inst_83306,state_val_83402,c__69114__auto___83505,retries__$1,out_ch,map__83210,map__83210__$1,retries,delay,error_fn,exception,stale_timeout,log_fn,supervisor))
})();
var state__69116__auto__ = (function (){var statearr_83463 = f__69115__auto__.call(null);
(statearr_83463[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__69114__auto____$1);

return statearr_83463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__69116__auto__);
});
;})(retries__$2,err_ch,ab_ch,close_ch,s,res_ch,stale_timeout__$1,c__69114__auto____$1,inst_83215,inst_83214,inst_83212,inst_83225,inst_83216,inst_83224,inst_83259,inst_83306,state_val_83402,c__69114__auto___83505,retries__$1,out_ch,map__83210,map__83210__$1,retries,delay,error_fn,exception,stale_timeout,log_fn,supervisor))
})();
var inst_83308 = cljs.core.async.impl.dispatch.run.call(null,inst_83307);
var inst_83334 = cljs.core.async.chan.call(null,(1));
var inst_83335 = (function (){var retries__$2 = inst_83212;
var err_ch = inst_83214;
var ab_ch = inst_83215;
var close_ch = inst_83216;
var s = inst_83224;
var res_ch = inst_83225;
var stale_timeout__$1 = (1000);
var c__69114__auto____$1 = inst_83334;
return ((function (retries__$2,err_ch,ab_ch,close_ch,s,res_ch,stale_timeout__$1,c__69114__auto____$1,inst_83215,inst_83214,inst_83212,inst_83225,inst_83216,inst_83224,inst_83259,inst_83306,inst_83307,inst_83308,inst_83334,state_val_83402,c__69114__auto___83505,retries__$1,out_ch,map__83210,map__83210__$1,retries,delay,error_fn,exception,stale_timeout,log_fn,supervisor){
return (function (){
var f__69115__auto__ = (function (){var switch__69000__auto__ = ((function (retries__$2,err_ch,ab_ch,close_ch,s,res_ch,stale_timeout__$1,c__69114__auto____$1,inst_83215,inst_83214,inst_83212,inst_83225,inst_83216,inst_83224,inst_83259,inst_83306,inst_83307,inst_83308,inst_83334,state_val_83402,c__69114__auto___83505,retries__$1,out_ch,map__83210,map__83210__$1,retries,delay,error_fn,exception,stale_timeout,log_fn,supervisor){
return (function (state_83332){
var state_val_83333 = (state_83332[(1)]);
if((state_val_83333 === (1))){
var inst_83309 = (0);
var state_83332__$1 = (function (){var statearr_83464 = state_83332;
(statearr_83464[(7)] = inst_83309);

return statearr_83464;
})();
var statearr_83465_83541 = state_83332__$1;
(statearr_83465_83541[(2)] = null);

(statearr_83465_83541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83333 === (2))){
var inst_83311 = new cljs.core.Keyword(null,"registered","registered",-388600037).cljs$core$IFn$_invoke$arity$1(s);
var inst_83312 = cljs.core.deref.call(null,inst_83311);
var inst_83313 = cljs.core.empty_QMARK_.call(null,inst_83312);
var inst_83314 = new cljs.core.Keyword(null,"pending-exceptions","pending-exceptions",-1888280094).cljs$core$IFn$_invoke$arity$1(s);
var inst_83315 = cljs.core.deref.call(null,inst_83314);
var inst_83316 = cljs.core.empty_QMARK_.call(null,inst_83315);
var inst_83317 = (inst_83313) && (inst_83316);
var inst_83318 = cljs.core.not.call(null,inst_83317);
var state_83332__$1 = state_83332;
if(inst_83318){
var statearr_83466_83542 = state_83332__$1;
(statearr_83466_83542[(1)] = (4));

} else {
var statearr_83467_83543 = state_83332__$1;
(statearr_83467_83543[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83333 === (3))){
var inst_83330 = (state_83332[(2)]);
var state_83332__$1 = state_83332;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_83332__$1,inst_83330);
} else {
if((state_val_83333 === (4))){
var inst_83320 = cljs.core.async.timeout.call(null,(100));
var state_83332__$1 = state_83332;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_83332__$1,(7),inst_83320);
} else {
if((state_val_83333 === (5))){
var inst_83326 = cljs.core.async.close_BANG_.call(null,close_ch);
var state_83332__$1 = state_83332;
var statearr_83468_83544 = state_83332__$1;
(statearr_83468_83544[(2)] = inst_83326);

(statearr_83468_83544[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83333 === (6))){
var inst_83328 = (state_83332[(2)]);
var state_83332__$1 = state_83332;
var statearr_83469_83545 = state_83332__$1;
(statearr_83469_83545[(2)] = inst_83328);

(statearr_83469_83545[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83333 === (7))){
var inst_83309 = (state_83332[(7)]);
var inst_83322 = (state_83332[(2)]);
var inst_83323 = (inst_83309 + (1));
var inst_83309__$1 = inst_83323;
var state_83332__$1 = (function (){var statearr_83470 = state_83332;
(statearr_83470[(8)] = inst_83322);

(statearr_83470[(7)] = inst_83309__$1);

return statearr_83470;
})();
var statearr_83471_83546 = state_83332__$1;
(statearr_83471_83546[(2)] = null);

(statearr_83471_83546[(1)] = (2));


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
});})(retries__$2,err_ch,ab_ch,close_ch,s,res_ch,stale_timeout__$1,c__69114__auto____$1,inst_83215,inst_83214,inst_83212,inst_83225,inst_83216,inst_83224,inst_83259,inst_83306,inst_83307,inst_83308,inst_83334,state_val_83402,c__69114__auto___83505,retries__$1,out_ch,map__83210,map__83210__$1,retries,delay,error_fn,exception,stale_timeout,log_fn,supervisor))
;
return ((function (switch__69000__auto__,retries__$2,err_ch,ab_ch,close_ch,s,res_ch,stale_timeout__$1,c__69114__auto____$1,inst_83215,inst_83214,inst_83212,inst_83225,inst_83216,inst_83224,inst_83259,inst_83306,inst_83307,inst_83308,inst_83334,state_val_83402,c__69114__auto___83505,retries__$1,out_ch,map__83210,map__83210__$1,retries,delay,error_fn,exception,stale_timeout,log_fn,supervisor){
return (function() {
var superv$async$state_machine__69001__auto__ = null;
var superv$async$state_machine__69001__auto____0 = (function (){
var statearr_83475 = [null,null,null,null,null,null,null,null,null];
(statearr_83475[(0)] = superv$async$state_machine__69001__auto__);

(statearr_83475[(1)] = (1));

return statearr_83475;
});
var superv$async$state_machine__69001__auto____1 = (function (state_83332){
while(true){
var ret_value__69002__auto__ = (function (){try{while(true){
var result__69003__auto__ = switch__69000__auto__.call(null,state_83332);
if(cljs.core.keyword_identical_QMARK_.call(null,result__69003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69003__auto__;
}
break;
}
}catch (e83476){if((e83476 instanceof Object)){
var ex__69004__auto__ = e83476;
var statearr_83477_83547 = state_83332;
(statearr_83477_83547[(5)] = ex__69004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_83332);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e83476;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__69002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__83548 = state_83332;
state_83332 = G__83548;
continue;
} else {
return ret_value__69002__auto__;
}
break;
}
});
superv$async$state_machine__69001__auto__ = function(state_83332){
switch(arguments.length){
case 0:
return superv$async$state_machine__69001__auto____0.call(this);
case 1:
return superv$async$state_machine__69001__auto____1.call(this,state_83332);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
superv$async$state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$0 = superv$async$state_machine__69001__auto____0;
superv$async$state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$1 = superv$async$state_machine__69001__auto____1;
return superv$async$state_machine__69001__auto__;
})()
;})(switch__69000__auto__,retries__$2,err_ch,ab_ch,close_ch,s,res_ch,stale_timeout__$1,c__69114__auto____$1,inst_83215,inst_83214,inst_83212,inst_83225,inst_83216,inst_83224,inst_83259,inst_83306,inst_83307,inst_83308,inst_83334,state_val_83402,c__69114__auto___83505,retries__$1,out_ch,map__83210,map__83210__$1,retries,delay,error_fn,exception,stale_timeout,log_fn,supervisor))
})();
var state__69116__auto__ = (function (){var statearr_83478 = f__69115__auto__.call(null);
(statearr_83478[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__69114__auto____$1);

return statearr_83478;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__69116__auto__);
});
;})(retries__$2,err_ch,ab_ch,close_ch,s,res_ch,stale_timeout__$1,c__69114__auto____$1,inst_83215,inst_83214,inst_83212,inst_83225,inst_83216,inst_83224,inst_83259,inst_83306,inst_83307,inst_83308,inst_83334,state_val_83402,c__69114__auto___83505,retries__$1,out_ch,map__83210,map__83210__$1,retries,delay,error_fn,exception,stale_timeout,log_fn,supervisor))
})();
var inst_83336 = cljs.core.async.impl.dispatch.run.call(null,inst_83335);
var inst_83340 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_83341 = [inst_83214,inst_83216];
var inst_83342 = (new cljs.core.PersistentVector(null,2,(5),inst_83340,inst_83341,null));
var state_83401__$1 = (function (){var statearr_83479 = state_83401;
(statearr_83479[(21)] = inst_83336);

(statearr_83479[(22)] = inst_83259);

(statearr_83479[(23)] = inst_83308);

return statearr_83479;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_83401__$1,(7),inst_83342,new cljs.core.Keyword(null,"priority","priority",1431093715),true);
} else {
if((state_val_83402 === (17))){
var inst_83390 = (state_83401[(2)]);
var state_83401__$1 = state_83401;
var statearr_83480_83549 = state_83401__$1;
(statearr_83480_83549[(2)] = inst_83390);

(statearr_83480_83549[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83402 === (3))){
var inst_83399 = (state_83401[(2)]);
var state_83401__$1 = state_83401;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_83401__$1,inst_83399);
} else {
if((state_val_83402 === (12))){
var inst_83356 = (state_83401[(24)]);
var state_83401__$1 = state_83401;
var statearr_83481_83550 = state_83401__$1;
(statearr_83481_83550[(2)] = inst_83356);

(statearr_83481_83550[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83402 === (2))){
var inst_83215 = (state_83401[(12)]);
var inst_83214 = (state_83401[(13)]);
var inst_83224 = (state_83401[(15)]);
var inst_83214__$1 = cljs.core.async.chan.call(null);
var inst_83215__$1 = cljs.core.async.chan.call(null);
var inst_83216 = cljs.core.async.chan.call(null);
var inst_83217 = [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"registered","registered",-388600037),new cljs.core.Keyword(null,"pending-exceptions","pending-exceptions",-1888280094),new cljs.core.Keyword(null,"restarting","restarting",760677572)];
var inst_83218 = cljs.core.PersistentHashMap.EMPTY;
var inst_83219 = cljs.core.atom.call(null,inst_83218);
var inst_83220 = cljs.core.PersistentHashMap.EMPTY;
var inst_83221 = cljs.core.atom.call(null,inst_83220);
var inst_83222 = [inst_83214__$1,inst_83215__$1,inst_83219,inst_83221,true];
var inst_83223 = cljs.core.PersistentHashMap.fromArrays(inst_83217,inst_83222);
var inst_83224__$1 = superv.async.map__GT_TrackingSupervisor.call(null,inst_83223);
var inst_83225 = start_fn.call(null,inst_83224__$1);
var state_83401__$1 = (function (){var statearr_83482 = state_83401;
(statearr_83482[(12)] = inst_83215__$1);

(statearr_83482[(13)] = inst_83214__$1);

(statearr_83482[(14)] = inst_83225);

(statearr_83482[(7)] = inst_83216);

(statearr_83482[(15)] = inst_83224__$1);

return statearr_83482;
})();
if(cljs.core.truth_(supervisor)){
var statearr_83483_83551 = state_83401__$1;
(statearr_83483_83551[(1)] = (4));

} else {
var statearr_83484_83552 = state_83401__$1;
(statearr_83484_83552[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83402 === (19))){
var state_83401__$1 = state_83401;
var statearr_83485_83553 = state_83401__$1;
(statearr_83485_83553[(2)] = null);

(statearr_83485_83553[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83402 === (11))){
var inst_83356 = (state_83401[(24)]);
var inst_83345 = (state_83401[(8)]);
var inst_83353 = (state_83401[(2)]);
var inst_83354 = (inst_83345 instanceof exception);
var inst_83355 = cljs.core.not.call(null,inst_83354);
var inst_83356__$1 = cljs.core.not.call(null,error_fn);
var state_83401__$1 = (function (){var statearr_83486 = state_83401;
(statearr_83486[(25)] = inst_83353);

(statearr_83486[(24)] = inst_83356__$1);

(statearr_83486[(26)] = inst_83355);

return statearr_83486;
})();
if(inst_83356__$1){
var statearr_83487_83554 = state_83401__$1;
(statearr_83487_83554[(1)] = (12));

} else {
var statearr_83488_83555 = state_83401__$1;
(statearr_83488_83555[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83402 === (9))){
var inst_83225 = (state_83401[(14)]);
var state_83401__$1 = state_83401;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_83401__$1,(22),inst_83225);
} else {
if((state_val_83402 === (5))){
var state_83401__$1 = state_83401;
var statearr_83489_83556 = state_83401__$1;
(statearr_83489_83556[(2)] = null);

(statearr_83489_83556[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83402 === (14))){
var inst_83212 = (state_83401[(11)]);
var inst_83355 = (state_83401[(26)]);
var inst_83361 = (state_83401[(2)]);
var inst_83362 = cljs.core.not.call(null,inst_83361);
var inst_83363 = (inst_83212 > (0));
var inst_83364 = cljs.core.not.call(null,inst_83363);
var inst_83365 = (inst_83355) || (inst_83362) || (inst_83364);
var state_83401__$1 = state_83401;
if(cljs.core.truth_(inst_83365)){
var statearr_83490_83557 = state_83401__$1;
(statearr_83490_83557[(1)] = (15));

} else {
var statearr_83491_83558 = state_83401__$1;
(statearr_83491_83558[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83402 === (16))){
var inst_83380 = cljs.core.async.timeout.call(null,delay);
var state_83401__$1 = state_83401;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_83401__$1,(21),inst_83380);
} else {
if((state_val_83402 === (10))){
var inst_83397 = (state_83401[(2)]);
var state_83401__$1 = state_83401;
var statearr_83492_83559 = state_83401__$1;
(statearr_83492_83559[(2)] = inst_83397);

(statearr_83492_83559[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83402 === (18))){
var inst_83345 = (state_83401[(8)]);
var inst_83372 = superv.async._error.call(null,supervisor);
var inst_83373 = cljs.core.async.put_BANG_.call(null,inst_83372,inst_83345);
var state_83401__$1 = state_83401;
var statearr_83493_83560 = state_83401__$1;
(statearr_83493_83560[(2)] = inst_83373);

(statearr_83493_83560[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83402 === (8))){
var inst_83215 = (state_83401[(12)]);
var inst_83214 = (state_83401[(13)]);
var inst_83216 = (state_83401[(7)]);
var inst_83350 = cljs.core.async.close_BANG_.call(null,inst_83214);
var inst_83351 = cljs.core.async.close_BANG_.call(null,inst_83215);
var state_83401__$1 = (function (){var statearr_83494 = state_83401;
(statearr_83494[(27)] = inst_83350);

(statearr_83494[(28)] = inst_83351);

return statearr_83494;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_83401__$1,(11),inst_83216);
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
});})(c__69114__auto___83505,retries__$1,out_ch,map__83210,map__83210__$1,retries,delay,error_fn,exception,stale_timeout,log_fn,supervisor))
;
return ((function (switch__69000__auto__,c__69114__auto___83505,retries__$1,out_ch,map__83210,map__83210__$1,retries,delay,error_fn,exception,stale_timeout,log_fn,supervisor){
return (function() {
var superv$async$state_machine__69001__auto__ = null;
var superv$async$state_machine__69001__auto____0 = (function (){
var statearr_83498 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_83498[(0)] = superv$async$state_machine__69001__auto__);

(statearr_83498[(1)] = (1));

return statearr_83498;
});
var superv$async$state_machine__69001__auto____1 = (function (state_83401){
while(true){
var ret_value__69002__auto__ = (function (){try{while(true){
var result__69003__auto__ = switch__69000__auto__.call(null,state_83401);
if(cljs.core.keyword_identical_QMARK_.call(null,result__69003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69003__auto__;
}
break;
}
}catch (e83499){if((e83499 instanceof Object)){
var ex__69004__auto__ = e83499;
var statearr_83500_83561 = state_83401;
(statearr_83500_83561[(5)] = ex__69004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_83401);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e83499;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__69002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__83562 = state_83401;
state_83401 = G__83562;
continue;
} else {
return ret_value__69002__auto__;
}
break;
}
});
superv$async$state_machine__69001__auto__ = function(state_83401){
switch(arguments.length){
case 0:
return superv$async$state_machine__69001__auto____0.call(this);
case 1:
return superv$async$state_machine__69001__auto____1.call(this,state_83401);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
superv$async$state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$0 = superv$async$state_machine__69001__auto____0;
superv$async$state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$1 = superv$async$state_machine__69001__auto____1;
return superv$async$state_machine__69001__auto__;
})()
;})(switch__69000__auto__,c__69114__auto___83505,retries__$1,out_ch,map__83210,map__83210__$1,retries,delay,error_fn,exception,stale_timeout,log_fn,supervisor))
})();
var state__69116__auto__ = (function (){var statearr_83501 = f__69115__auto__.call(null);
(statearr_83501[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__69114__auto___83505);

return statearr_83501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__69116__auto__);
});})(c__69114__auto___83505,retries__$1,out_ch,map__83210,map__83210__$1,retries,delay,error_fn,exception,stale_timeout,log_fn,supervisor))
);


return out_ch;
});

superv.async.restarting_supervisor.cljs$lang$maxFixedArity = (1);

superv.async.restarting_supervisor.cljs$lang$applyTo = (function (seq83207){
var G__83208 = cljs.core.first.call(null,seq83207);
var seq83207__$1 = cljs.core.next.call(null,seq83207);
return superv.async.restarting_supervisor.cljs$core$IFn$_invoke$arity$variadic(G__83208,seq83207__$1);
});


//# sourceMappingURL=async.js.map?rel=1506064198107