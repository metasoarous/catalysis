// Compiled by ClojureScript 1.9.542 {}
goog.provide('dat.reactor.dispatcher');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('taoensso.timbre');
goog.require('com.stuartsierra.component');
goog.require('dat.spec.protocols');

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
 * @implements {dat.spec.protocols.PDispatcher}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {dat.spec.protocols.Wire}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {com.stuartsierra.component.Lifecycle}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
dat.reactor.dispatcher.StrictlyOrderedDispatcher = (function (dispatch_chan,__meta,__extmap,__hash){
this.dispatch_chan = dispatch_chan;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
dat.reactor.dispatcher.StrictlyOrderedDispatcher.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__61574__auto__,k__61575__auto__){
var self__ = this;
var this__61574__auto____$1 = this;
return this__61574__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__61575__auto__,null);
});

dat.reactor.dispatcher.StrictlyOrderedDispatcher.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__61576__auto__,k75632,else__61577__auto__){
var self__ = this;
var this__61576__auto____$1 = this;
var G__75634 = k75632;
var G__75634__$1 = (((G__75634 instanceof cljs.core.Keyword))?G__75634.fqn:null);
switch (G__75634__$1) {
case "dispatch-chan":
return self__.dispatch_chan;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k75632,else__61577__auto__);

}
});

dat.reactor.dispatcher.StrictlyOrderedDispatcher.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__61588__auto__,writer__61589__auto__,opts__61590__auto__){
var self__ = this;
var this__61588__auto____$1 = this;
var pr_pair__61591__auto__ = ((function (this__61588__auto____$1){
return (function (keyval__61592__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__61589__auto__,cljs.core.pr_writer,""," ","",opts__61590__auto__,keyval__61592__auto__);
});})(this__61588__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__61589__auto__,pr_pair__61591__auto__,"#dat.reactor.dispatcher.StrictlyOrderedDispatcher{",", ","}",opts__61590__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dispatch-chan","dispatch-chan",628893575),self__.dispatch_chan],null))], null),self__.__extmap));
});

dat.reactor.dispatcher.StrictlyOrderedDispatcher.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

dat.reactor.dispatcher.StrictlyOrderedDispatcher.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__75631){
var self__ = this;
var G__75631__$1 = this;
return (new cljs.core.RecordIter((0),G__75631__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch-chan","dispatch-chan",628893575)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

dat.reactor.dispatcher.StrictlyOrderedDispatcher.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__61572__auto__){
var self__ = this;
var this__61572__auto____$1 = this;
return self__.__meta;
});

dat.reactor.dispatcher.StrictlyOrderedDispatcher.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__61568__auto__){
var self__ = this;
var this__61568__auto____$1 = this;
return (new dat.reactor.dispatcher.StrictlyOrderedDispatcher(self__.dispatch_chan,self__.__meta,self__.__extmap,self__.__hash));
});

dat.reactor.dispatcher.StrictlyOrderedDispatcher.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__61578__auto__){
var self__ = this;
var this__61578__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

dat.reactor.dispatcher.StrictlyOrderedDispatcher.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__61569__auto__){
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

dat.reactor.dispatcher.StrictlyOrderedDispatcher.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__61570__auto__,other__61571__auto__){
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

dat.reactor.dispatcher.StrictlyOrderedDispatcher.prototype.dat$spec$protocols$PDispatcher$ = cljs.core.PROTOCOL_SENTINEL;

dat.reactor.dispatcher.StrictlyOrderedDispatcher.prototype.dat$spec$protocols$PDispatcher$dispatch_BANG_$arity$2 = (function (dispatcher,event){
var self__ = this;
var dispatcher__$1 = this;
return cljs.core.async.put_BANG_.call(null,self__.dispatch_chan,event);
});

dat.reactor.dispatcher.StrictlyOrderedDispatcher.prototype.dat$spec$protocols$PDispatcher$dispatch_BANG_$arity$3 = (function (dispatcher,event,level){
var self__ = this;
var dispatcher__$1 = this;
return cljs.core.async.put_BANG_.call(null,self__.dispatch_chan,event);
});

dat.reactor.dispatcher.StrictlyOrderedDispatcher.prototype.dat$spec$protocols$PDispatcher$dispatcher_event_chan$arity$1 = (function (dispatcher){
var self__ = this;
var dispatcher__$1 = this;
return self__.dispatch_chan;
});

dat.reactor.dispatcher.StrictlyOrderedDispatcher.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__61583__auto__,k__61584__auto__){
var self__ = this;
var this__61583__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-chan","dispatch-chan",628893575),null], null), null),k__61584__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__61583__auto____$1),self__.__meta),k__61584__auto__);
} else {
return (new dat.reactor.dispatcher.StrictlyOrderedDispatcher(self__.dispatch_chan,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__61584__auto__)),null));
}
});

dat.reactor.dispatcher.StrictlyOrderedDispatcher.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__61581__auto__,k__61582__auto__,G__75631){
var self__ = this;
var this__61581__auto____$1 = this;
var pred__75635 = cljs.core.keyword_identical_QMARK_;
var expr__75636 = k__61582__auto__;
if(cljs.core.truth_(pred__75635.call(null,new cljs.core.Keyword(null,"dispatch-chan","dispatch-chan",628893575),expr__75636))){
return (new dat.reactor.dispatcher.StrictlyOrderedDispatcher(G__75631,self__.__meta,self__.__extmap,null));
} else {
return (new dat.reactor.dispatcher.StrictlyOrderedDispatcher(self__.dispatch_chan,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__61582__auto__,G__75631),null));
}
});

dat.reactor.dispatcher.StrictlyOrderedDispatcher.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__61586__auto__){
var self__ = this;
var this__61586__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dispatch-chan","dispatch-chan",628893575),self__.dispatch_chan],null))], null),self__.__extmap));
});

dat.reactor.dispatcher.StrictlyOrderedDispatcher.prototype.dat$spec$protocols$Wire$ = cljs.core.PROTOCOL_SENTINEL;

dat.reactor.dispatcher.StrictlyOrderedDispatcher.prototype.dat$spec$protocols$Wire$recv_chan$arity$1 = (function (dispatcher){
var self__ = this;
var dispatcher__$1 = this;
return self__.dispatch_chan;
});

dat.reactor.dispatcher.StrictlyOrderedDispatcher.prototype.dat$spec$protocols$Wire$send_chan$arity$1 = (function (dispatcher){
var self__ = this;
var dispatcher__$1 = this;
return self__.dispatch_chan;
});

dat.reactor.dispatcher.StrictlyOrderedDispatcher.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__61573__auto__,G__75631){
var self__ = this;
var this__61573__auto____$1 = this;
return (new dat.reactor.dispatcher.StrictlyOrderedDispatcher(self__.dispatch_chan,G__75631,self__.__extmap,self__.__hash));
});

dat.reactor.dispatcher.StrictlyOrderedDispatcher.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__61579__auto__,entry__61580__auto__){
var self__ = this;
var this__61579__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__61580__auto__)){
return this__61579__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__61580__auto__,(0)),cljs.core._nth.call(null,entry__61580__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__61579__auto____$1,entry__61580__auto__);
}
});

dat.reactor.dispatcher.StrictlyOrderedDispatcher.prototype.com$stuartsierra$component$Lifecycle$ = cljs.core.PROTOCOL_SENTINEL;

dat.reactor.dispatcher.StrictlyOrderedDispatcher.prototype.com$stuartsierra$component$Lifecycle$start$arity$1 = (function (dispatcher){
var self__ = this;
var dispatcher__$1 = this;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dat.reactor.dispatcher","/tmp/form-init8382301926859034614.clj",44,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (dispatcher__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Starting StrictlyOrderedDispatcher"], null);
});})(dispatcher__$1))
,null)),null,1189299442);

return cljs.core.assoc.call(null,dispatcher__$1,new cljs.core.Keyword(null,"dispatch-chan","dispatch-chan",628893575),(function (){var or__60899__auto__ = self__.dispatch_chan;
if(cljs.core.truth_(or__60899__auto__)){
return or__60899__auto__;
} else {
return cljs.core.async.chan.call(null,(100));
}
})());
});

dat.reactor.dispatcher.StrictlyOrderedDispatcher.prototype.com$stuartsierra$component$Lifecycle$stop$arity$1 = (function (dispatcher){
var self__ = this;
var dispatcher__$1 = this;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dat.reactor.dispatcher","/tmp/form-init8382301926859034614.clj",48,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (dispatcher__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Stopping StrictlyOrderedDispatcher"], null);
});})(dispatcher__$1))
,null)),null,-1707975788);

if(cljs.core.truth_(self__.dispatch_chan)){
cljs.core.async.close_BANG_.call(null,self__.dispatch_chan);
} else {
}

return cljs.core.assoc.call(null,dispatcher__$1,new cljs.core.Keyword(null,"dispatch-chan","dispatch-chan",628893575),null);
});

dat.reactor.dispatcher.StrictlyOrderedDispatcher.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dispatch-chan","dispatch-chan",-2025542194,null)], null);
});

dat.reactor.dispatcher.StrictlyOrderedDispatcher.cljs$lang$type = true;

dat.reactor.dispatcher.StrictlyOrderedDispatcher.cljs$lang$ctorPrSeq = (function (this__61610__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"dat.reactor.dispatcher/StrictlyOrderedDispatcher");
});

dat.reactor.dispatcher.StrictlyOrderedDispatcher.cljs$lang$ctorPrWriter = (function (this__61610__auto__,writer__61611__auto__){
return cljs.core._write.call(null,writer__61611__auto__,"dat.reactor.dispatcher/StrictlyOrderedDispatcher");
});

dat.reactor.dispatcher.__GT_StrictlyOrderedDispatcher = (function dat$reactor$dispatcher$__GT_StrictlyOrderedDispatcher(dispatch_chan){
return (new dat.reactor.dispatcher.StrictlyOrderedDispatcher(dispatch_chan,null,null,null));
});

dat.reactor.dispatcher.map__GT_StrictlyOrderedDispatcher = (function dat$reactor$dispatcher$map__GT_StrictlyOrderedDispatcher(G__75633){
return (new dat.reactor.dispatcher.StrictlyOrderedDispatcher(new cljs.core.Keyword(null,"dispatch-chan","dispatch-chan",628893575).cljs$core$IFn$_invoke$arity$1(G__75633),null,cljs.core.dissoc.call(null,G__75633,new cljs.core.Keyword(null,"dispatch-chan","dispatch-chan",628893575)),null));
});

/**
 * Creates a new strictly ordered dispatcher. This is fine for most cases, and ensures that all events are
 *   handled in the order they were dispatched (or should...). Can specify `{:dispatch-chan your-chan}` to customize
 *   the flow.
 */
dat.reactor.dispatcher.new_strictly_ordered_dispatcher = (function dat$reactor$dispatcher$new_strictly_ordered_dispatcher(var_args){
var args75639 = [];
var len__62120__auto___75642 = arguments.length;
var i__62121__auto___75643 = (0);
while(true){
if((i__62121__auto___75643 < len__62120__auto___75642)){
args75639.push((arguments[i__62121__auto___75643]));

var G__75644 = (i__62121__auto___75643 + (1));
i__62121__auto___75643 = G__75644;
continue;
} else {
}
break;
}

var G__75641 = args75639.length;
switch (G__75641) {
case 1:
return dat.reactor.dispatcher.new_strictly_ordered_dispatcher.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return dat.reactor.dispatcher.new_strictly_ordered_dispatcher.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args75639.length)].join('')));

}
});

dat.reactor.dispatcher.new_strictly_ordered_dispatcher.cljs$core$IFn$_invoke$arity$1 = (function (options){
return dat.reactor.dispatcher.map__GT_StrictlyOrderedDispatcher.call(null,options);
});

dat.reactor.dispatcher.new_strictly_ordered_dispatcher.cljs$core$IFn$_invoke$arity$0 = (function (){
return dat.reactor.dispatcher.new_strictly_ordered_dispatcher.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

dat.reactor.dispatcher.new_strictly_ordered_dispatcher.cljs$lang$maxFixedArity = 1;


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
 * @implements {dat.spec.protocols.PDispatcher}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {dat.spec.protocols.Wire}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {com.stuartsierra.component.Lifecycle}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
dat.reactor.dispatcher.ErrorPriorityDispatcher = (function (default_GT_,error_GT_,ppub,send_GT_,recv_GT_,__meta,__extmap,__hash){
this.default_GT_ = default_GT_;
this.error_GT_ = error_GT_;
this.ppub = ppub;
this.send_GT_ = send_GT_;
this.recv_GT_ = recv_GT_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
dat.reactor.dispatcher.ErrorPriorityDispatcher.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__61574__auto__,k__61575__auto__){
var self__ = this;
var this__61574__auto____$1 = this;
return this__61574__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__61575__auto__,null);
});

dat.reactor.dispatcher.ErrorPriorityDispatcher.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__61576__auto__,k75647,else__61577__auto__){
var self__ = this;
var this__61576__auto____$1 = this;
var G__75649 = k75647;
var G__75649__$1 = (((G__75649 instanceof cljs.core.Keyword))?G__75649.fqn:null);
switch (G__75649__$1) {
case "default>":
return self__.default_GT_;

break;
case "error>":
return self__.error_GT_;

break;
case "ppub":
return self__.ppub;

break;
case "send>":
return self__.send_GT_;

break;
case "recv>":
return self__.recv_GT_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k75647,else__61577__auto__);

}
});

dat.reactor.dispatcher.ErrorPriorityDispatcher.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__61588__auto__,writer__61589__auto__,opts__61590__auto__){
var self__ = this;
var this__61588__auto____$1 = this;
var pr_pair__61591__auto__ = ((function (this__61588__auto____$1){
return (function (keyval__61592__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__61589__auto__,cljs.core.pr_writer,""," ","",opts__61590__auto__,keyval__61592__auto__);
});})(this__61588__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__61589__auto__,pr_pair__61591__auto__,"#dat.reactor.dispatcher.ErrorPriorityDispatcher{",", ","}",opts__61590__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"default>","default>",-374545113),self__.default_GT_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"error>","error>",-1970398855),self__.error_GT_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ppub","ppub",-404508411),self__.ppub],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"send>","send>",158540406),self__.send_GT_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"recv>","recv>",-1762221420),self__.recv_GT_],null))], null),self__.__extmap));
});

dat.reactor.dispatcher.ErrorPriorityDispatcher.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

dat.reactor.dispatcher.ErrorPriorityDispatcher.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__75646){
var self__ = this;
var G__75646__$1 = this;
return (new cljs.core.RecordIter((0),G__75646__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default>","default>",-374545113),new cljs.core.Keyword(null,"error>","error>",-1970398855),new cljs.core.Keyword(null,"ppub","ppub",-404508411),new cljs.core.Keyword(null,"send>","send>",158540406),new cljs.core.Keyword(null,"recv>","recv>",-1762221420)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

dat.reactor.dispatcher.ErrorPriorityDispatcher.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__61572__auto__){
var self__ = this;
var this__61572__auto____$1 = this;
return self__.__meta;
});

dat.reactor.dispatcher.ErrorPriorityDispatcher.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__61568__auto__){
var self__ = this;
var this__61568__auto____$1 = this;
return (new dat.reactor.dispatcher.ErrorPriorityDispatcher(self__.default_GT_,self__.error_GT_,self__.ppub,self__.send_GT_,self__.recv_GT_,self__.__meta,self__.__extmap,self__.__hash));
});

dat.reactor.dispatcher.ErrorPriorityDispatcher.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__61578__auto__){
var self__ = this;
var this__61578__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

dat.reactor.dispatcher.ErrorPriorityDispatcher.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__61569__auto__){
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

dat.reactor.dispatcher.ErrorPriorityDispatcher.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__61570__auto__,other__61571__auto__){
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

dat.reactor.dispatcher.ErrorPriorityDispatcher.prototype.dat$spec$protocols$PDispatcher$ = cljs.core.PROTOCOL_SENTINEL;

dat.reactor.dispatcher.ErrorPriorityDispatcher.prototype.dat$spec$protocols$PDispatcher$dispatch_BANG_$arity$2 = (function (dispatcher,event){
var self__ = this;
var dispatcher__$1 = this;
return dispatcher__$1.dat$spec$protocols$PDispatcher$dispatch_BANG_$arity$3(null,event,new cljs.core.Keyword(null,"default","default",-1987822328));
});

dat.reactor.dispatcher.ErrorPriorityDispatcher.prototype.dat$spec$protocols$PDispatcher$dispatch_BANG_$arity$3 = (function (dispatcher,event,level){
var self__ = this;
var dispatcher__$1 = this;
return cljs.core.async.put_BANG_.call(null,self__.send_GT_,cljs.core.assoc.call(null,event,new cljs.core.Keyword("dat.reactor","priority","dat.reactor/priority",-2109050234),level));
});

dat.reactor.dispatcher.ErrorPriorityDispatcher.prototype.dat$spec$protocols$PDispatcher$dispatcher_event_chan$arity$1 = (function (dispatcher){
var self__ = this;
var dispatcher__$1 = this;
return self__.recv_GT_;
});

dat.reactor.dispatcher.ErrorPriorityDispatcher.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__61583__auto__,k__61584__auto__){
var self__ = this;
var this__61583__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ppub","ppub",-404508411),null,new cljs.core.Keyword(null,"default>","default>",-374545113),null,new cljs.core.Keyword(null,"recv>","recv>",-1762221420),null,new cljs.core.Keyword(null,"send>","send>",158540406),null,new cljs.core.Keyword(null,"error>","error>",-1970398855),null], null), null),k__61584__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__61583__auto____$1),self__.__meta),k__61584__auto__);
} else {
return (new dat.reactor.dispatcher.ErrorPriorityDispatcher(self__.default_GT_,self__.error_GT_,self__.ppub,self__.send_GT_,self__.recv_GT_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__61584__auto__)),null));
}
});

dat.reactor.dispatcher.ErrorPriorityDispatcher.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__61581__auto__,k__61582__auto__,G__75646){
var self__ = this;
var this__61581__auto____$1 = this;
var pred__75650 = cljs.core.keyword_identical_QMARK_;
var expr__75651 = k__61582__auto__;
if(cljs.core.truth_(pred__75650.call(null,new cljs.core.Keyword(null,"default>","default>",-374545113),expr__75651))){
return (new dat.reactor.dispatcher.ErrorPriorityDispatcher(G__75646,self__.error_GT_,self__.ppub,self__.send_GT_,self__.recv_GT_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__75650.call(null,new cljs.core.Keyword(null,"error>","error>",-1970398855),expr__75651))){
return (new dat.reactor.dispatcher.ErrorPriorityDispatcher(self__.default_GT_,G__75646,self__.ppub,self__.send_GT_,self__.recv_GT_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__75650.call(null,new cljs.core.Keyword(null,"ppub","ppub",-404508411),expr__75651))){
return (new dat.reactor.dispatcher.ErrorPriorityDispatcher(self__.default_GT_,self__.error_GT_,G__75646,self__.send_GT_,self__.recv_GT_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__75650.call(null,new cljs.core.Keyword(null,"send>","send>",158540406),expr__75651))){
return (new dat.reactor.dispatcher.ErrorPriorityDispatcher(self__.default_GT_,self__.error_GT_,self__.ppub,G__75646,self__.recv_GT_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__75650.call(null,new cljs.core.Keyword(null,"recv>","recv>",-1762221420),expr__75651))){
return (new dat.reactor.dispatcher.ErrorPriorityDispatcher(self__.default_GT_,self__.error_GT_,self__.ppub,self__.send_GT_,G__75646,self__.__meta,self__.__extmap,null));
} else {
return (new dat.reactor.dispatcher.ErrorPriorityDispatcher(self__.default_GT_,self__.error_GT_,self__.ppub,self__.send_GT_,self__.recv_GT_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__61582__auto__,G__75646),null));
}
}
}
}
}
});

dat.reactor.dispatcher.ErrorPriorityDispatcher.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__61586__auto__){
var self__ = this;
var this__61586__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"default>","default>",-374545113),self__.default_GT_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"error>","error>",-1970398855),self__.error_GT_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ppub","ppub",-404508411),self__.ppub],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"send>","send>",158540406),self__.send_GT_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"recv>","recv>",-1762221420),self__.recv_GT_],null))], null),self__.__extmap));
});

dat.reactor.dispatcher.ErrorPriorityDispatcher.prototype.dat$spec$protocols$Wire$ = cljs.core.PROTOCOL_SENTINEL;

dat.reactor.dispatcher.ErrorPriorityDispatcher.prototype.dat$spec$protocols$Wire$recv_chan$arity$1 = (function (dispatcher){
var self__ = this;
var dispatcher__$1 = this;
return self__.recv_GT_;
});

dat.reactor.dispatcher.ErrorPriorityDispatcher.prototype.dat$spec$protocols$Wire$send_chan$arity$1 = (function (dispatcher){
var self__ = this;
var dispatcher__$1 = this;
return self__.send_GT_;
});

dat.reactor.dispatcher.ErrorPriorityDispatcher.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__61573__auto__,G__75646){
var self__ = this;
var this__61573__auto____$1 = this;
return (new dat.reactor.dispatcher.ErrorPriorityDispatcher(self__.default_GT_,self__.error_GT_,self__.ppub,self__.send_GT_,self__.recv_GT_,G__75646,self__.__extmap,self__.__hash));
});

dat.reactor.dispatcher.ErrorPriorityDispatcher.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__61579__auto__,entry__61580__auto__){
var self__ = this;
var this__61579__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__61580__auto__)){
return this__61579__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__61580__auto__,(0)),cljs.core._nth.call(null,entry__61580__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__61579__auto____$1,entry__61580__auto__);
}
});

dat.reactor.dispatcher.ErrorPriorityDispatcher.prototype.com$stuartsierra$component$Lifecycle$ = cljs.core.PROTOCOL_SENTINEL;

dat.reactor.dispatcher.ErrorPriorityDispatcher.prototype.com$stuartsierra$component$Lifecycle$start$arity$1 = (function (dispatcher){
var self__ = this;
var dispatcher__$1 = this;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dat.reactor.dispatcher","/tmp/form-init8382301926859034614.clj",81,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (dispatcher__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Starting ErrorPriorityDispatcher"], null);
});})(dispatcher__$1))
,null)),null,-1236780142);

var send_GT___$1 = (function (){var or__60899__auto__ = self__.send_GT_;
if(cljs.core.truth_(or__60899__auto__)){
return or__60899__auto__;
} else {
return cljs.core.async.chan.call(null,(100));
}
})();
var ppub__$1 = (function (){var or__60899__auto__ = self__.ppub;
if(cljs.core.truth_(or__60899__auto__)){
return or__60899__auto__;
} else {
return cljs.core.async.pub.call(null,send_GT___$1,new cljs.core.Keyword("dat.reactor","priority","dat.reactor/priority",-2109050234),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default","default",-1987822328),(99),new cljs.core.Keyword(null,"error","error",-978969032),(1)], null));
}
})();
var recv_GT___$1 = (function (){var or__60899__auto__ = self__.recv_GT_;
if(cljs.core.truth_(or__60899__auto__)){
return or__60899__auto__;
} else {
return cljs.core.async.chan.call(null);
}
})();
var default_GT___$1 = (function (){var or__60899__auto__ = self__.default_GT_;
if(cljs.core.truth_(or__60899__auto__)){
return or__60899__auto__;
} else {
var chan_GT_ = cljs.core.async.chan.call(null);
cljs.core.async.sub.call(null,ppub__$1,new cljs.core.Keyword(null,"default","default",-1987822328),chan_GT_);

return chan_GT_;
}
})();
var error_GT___$1 = (function (){var or__60899__auto__ = self__.error_GT_;
if(cljs.core.truth_(or__60899__auto__)){
return or__60899__auto__;
} else {
var chan_GT_ = cljs.core.async.chan.call(null);
cljs.core.async.sub.call(null,ppub__$1,new cljs.core.Keyword(null,"error","error",-978969032),chan_GT_);

return chan_GT_;
}
})();
var c__69114__auto___75682 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__69114__auto___75682,send_GT___$1,ppub__$1,recv_GT___$1,default_GT___$1,error_GT___$1,dispatcher__$1){
return (function (){
var f__69115__auto__ = (function (){var switch__69000__auto__ = ((function (c__69114__auto___75682,send_GT___$1,ppub__$1,recv_GT___$1,default_GT___$1,error_GT___$1,dispatcher__$1){
return (function (state_75669){
var state_val_75670 = (state_75669[(1)]);
if((state_val_75670 === (1))){
var state_75669__$1 = state_75669;
var statearr_75671_75683 = state_75669__$1;
(statearr_75671_75683[(2)] = null);

(statearr_75671_75683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75670 === (2))){
var inst_75657 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_75658 = [error_GT___$1,default_GT___$1];
var inst_75659 = (new cljs.core.PersistentVector(null,2,(5),inst_75657,inst_75658,null));
var state_75669__$1 = state_75669;
return cljs.core.async.ioc_alts_BANG_.call(null,state_75669__$1,(4),inst_75659,new cljs.core.Keyword(null,"priority","priority",1431093715),true);
} else {
if((state_val_75670 === (3))){
var inst_75667 = (state_75669[(2)]);
var state_75669__$1 = state_75669;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_75669__$1,inst_75667);
} else {
if((state_val_75670 === (4))){
var inst_75661 = (state_75669[(2)]);
var inst_75662 = cljs.core.nth.call(null,inst_75661,(0),null);
var inst_75663 = cljs.core.nth.call(null,inst_75661,(1),null);
var state_75669__$1 = (function (){var statearr_75672 = state_75669;
(statearr_75672[(7)] = inst_75663);

return statearr_75672;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_75669__$1,(5),recv_GT___$1,inst_75662);
} else {
if((state_val_75670 === (5))){
var inst_75665 = (state_75669[(2)]);
var state_75669__$1 = state_75669;
var statearr_75673_75684 = state_75669__$1;
(statearr_75673_75684[(2)] = inst_75665);

(statearr_75673_75684[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__69114__auto___75682,send_GT___$1,ppub__$1,recv_GT___$1,default_GT___$1,error_GT___$1,dispatcher__$1))
;
return ((function (switch__69000__auto__,c__69114__auto___75682,send_GT___$1,ppub__$1,recv_GT___$1,default_GT___$1,error_GT___$1,dispatcher__$1){
return (function() {
var dat$reactor$dispatcher$state_machine__69001__auto__ = null;
var dat$reactor$dispatcher$state_machine__69001__auto____0 = (function (){
var statearr_75677 = [null,null,null,null,null,null,null,null];
(statearr_75677[(0)] = dat$reactor$dispatcher$state_machine__69001__auto__);

(statearr_75677[(1)] = (1));

return statearr_75677;
});
var dat$reactor$dispatcher$state_machine__69001__auto____1 = (function (state_75669){
while(true){
var ret_value__69002__auto__ = (function (){try{while(true){
var result__69003__auto__ = switch__69000__auto__.call(null,state_75669);
if(cljs.core.keyword_identical_QMARK_.call(null,result__69003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69003__auto__;
}
break;
}
}catch (e75678){if((e75678 instanceof Object)){
var ex__69004__auto__ = e75678;
var statearr_75679_75685 = state_75669;
(statearr_75679_75685[(5)] = ex__69004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_75669);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e75678;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__69002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75686 = state_75669;
state_75669 = G__75686;
continue;
} else {
return ret_value__69002__auto__;
}
break;
}
});
dat$reactor$dispatcher$state_machine__69001__auto__ = function(state_75669){
switch(arguments.length){
case 0:
return dat$reactor$dispatcher$state_machine__69001__auto____0.call(this);
case 1:
return dat$reactor$dispatcher$state_machine__69001__auto____1.call(this,state_75669);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
dat$reactor$dispatcher$state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$0 = dat$reactor$dispatcher$state_machine__69001__auto____0;
dat$reactor$dispatcher$state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$1 = dat$reactor$dispatcher$state_machine__69001__auto____1;
return dat$reactor$dispatcher$state_machine__69001__auto__;
})()
;})(switch__69000__auto__,c__69114__auto___75682,send_GT___$1,ppub__$1,recv_GT___$1,default_GT___$1,error_GT___$1,dispatcher__$1))
})();
var state__69116__auto__ = (function (){var statearr_75680 = f__69115__auto__.call(null);
(statearr_75680[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__69114__auto___75682);

return statearr_75680;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__69116__auto__);
});})(c__69114__auto___75682,send_GT___$1,ppub__$1,recv_GT___$1,default_GT___$1,error_GT___$1,dispatcher__$1))
);


return cljs.core.assoc.call(null,dispatcher__$1,new cljs.core.Keyword(null,"send>","send>",158540406),send_GT___$1,new cljs.core.Keyword(null,"recv>","recv>",-1762221420),recv_GT___$1,new cljs.core.Keyword(null,"ppub","ppub",-404508411),ppub__$1,new cljs.core.Keyword(null,"default>","default>",-374545113),default_GT___$1,new cljs.core.Keyword(null,"error>","error>",-1970398855),error_GT___$1);
});

dat.reactor.dispatcher.ErrorPriorityDispatcher.prototype.com$stuartsierra$component$Lifecycle$stop$arity$1 = (function (dispatcher){
var self__ = this;
var dispatcher__$1 = this;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dat.reactor.dispatcher","/tmp/form-init8382301926859034614.clj",111,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (dispatcher__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Stopping ErrorPriorityDispatcher"], null);
});})(dispatcher__$1))
,null)),null,-445582331);

return cljs.core.assoc.call(null,dispatcher__$1,new cljs.core.Keyword(null,"send>","send>",158540406),null,new cljs.core.Keyword(null,"recv>","recv>",-1762221420),null,new cljs.core.Keyword(null,"ppub","ppub",-404508411),null,new cljs.core.Keyword(null,"default>","default>",-374545113),null,new cljs.core.Keyword(null,"error>","error>",-1970398855),null);
});

dat.reactor.dispatcher.ErrorPriorityDispatcher.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"default>","default>",1265986414,null),new cljs.core.Symbol(null,"error>","error>",-329867328,null),new cljs.core.Symbol(null,"ppub","ppub",1236023116,null),new cljs.core.Symbol(null,"send>","send>",1799071933,null),new cljs.core.Symbol(null,"recv>","recv>",-121689893,null)], null);
});

dat.reactor.dispatcher.ErrorPriorityDispatcher.cljs$lang$type = true;

dat.reactor.dispatcher.ErrorPriorityDispatcher.cljs$lang$ctorPrSeq = (function (this__61610__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"dat.reactor.dispatcher/ErrorPriorityDispatcher");
});

dat.reactor.dispatcher.ErrorPriorityDispatcher.cljs$lang$ctorPrWriter = (function (this__61610__auto__,writer__61611__auto__){
return cljs.core._write.call(null,writer__61611__auto__,"dat.reactor.dispatcher/ErrorPriorityDispatcher");
});

dat.reactor.dispatcher.__GT_ErrorPriorityDispatcher = (function dat$reactor$dispatcher$__GT_ErrorPriorityDispatcher(default_GT_,error_GT_,ppub,send_GT_,recv_GT_){
return (new dat.reactor.dispatcher.ErrorPriorityDispatcher(default_GT_,error_GT_,ppub,send_GT_,recv_GT_,null,null,null));
});

dat.reactor.dispatcher.map__GT_ErrorPriorityDispatcher = (function dat$reactor$dispatcher$map__GT_ErrorPriorityDispatcher(G__75648){
return (new dat.reactor.dispatcher.ErrorPriorityDispatcher(new cljs.core.Keyword(null,"default>","default>",-374545113).cljs$core$IFn$_invoke$arity$1(G__75648),new cljs.core.Keyword(null,"error>","error>",-1970398855).cljs$core$IFn$_invoke$arity$1(G__75648),new cljs.core.Keyword(null,"ppub","ppub",-404508411).cljs$core$IFn$_invoke$arity$1(G__75648),new cljs.core.Keyword(null,"send>","send>",158540406).cljs$core$IFn$_invoke$arity$1(G__75648),new cljs.core.Keyword(null,"recv>","recv>",-1762221420).cljs$core$IFn$_invoke$arity$1(G__75648),null,cljs.core.dissoc.call(null,G__75648,new cljs.core.Keyword(null,"default>","default>",-374545113),new cljs.core.Keyword(null,"error>","error>",-1970398855),new cljs.core.Keyword(null,"ppub","ppub",-404508411),new cljs.core.Keyword(null,"send>","send>",158540406),new cljs.core.Keyword(null,"recv>","recv>",-1762221420)),null));
});

/**
 * Creates a new ErroPriorityDispatcher. Can customize :default> and :error> through options.
 *   Idea is that Reactor will get error events before other queued events, but the mechanism is a little flawed.
 *   Currently, it's still possible for a non error event to get through before the reactor is ready to consume from the event-chan.
 *   May need to adjust the protocols.
 */
dat.reactor.dispatcher.new_error_priority_dispatcher = (function dat$reactor$dispatcher$new_error_priority_dispatcher(var_args){
var args75687 = [];
var len__62120__auto___75690 = arguments.length;
var i__62121__auto___75691 = (0);
while(true){
if((i__62121__auto___75691 < len__62120__auto___75690)){
args75687.push((arguments[i__62121__auto___75691]));

var G__75692 = (i__62121__auto___75691 + (1));
i__62121__auto___75691 = G__75692;
continue;
} else {
}
break;
}

var G__75689 = args75687.length;
switch (G__75689) {
case 1:
return dat.reactor.dispatcher.new_error_priority_dispatcher.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return dat.reactor.dispatcher.new_error_priority_dispatcher.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args75687.length)].join('')));

}
});

dat.reactor.dispatcher.new_error_priority_dispatcher.cljs$core$IFn$_invoke$arity$1 = (function (options){
return dat.reactor.dispatcher.map__GT_ErrorPriorityDispatcher.call(null,options);
});

dat.reactor.dispatcher.new_error_priority_dispatcher.cljs$core$IFn$_invoke$arity$0 = (function (){
return dat.reactor.dispatcher.new_error_priority_dispatcher.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

dat.reactor.dispatcher.new_error_priority_dispatcher.cljs$lang$maxFixedArity = 1;

/**
 * Dispatches event on the dispatcher component at the given level (:default if unspecified).
 */
dat.reactor.dispatcher.dispatch_BANG_ = (function dat$reactor$dispatcher$dispatch_BANG_(var_args){
var args75694 = [];
var len__62120__auto___75697 = arguments.length;
var i__62121__auto___75698 = (0);
while(true){
if((i__62121__auto___75698 < len__62120__auto___75697)){
args75694.push((arguments[i__62121__auto___75698]));

var G__75699 = (i__62121__auto___75698 + (1));
i__62121__auto___75698 = G__75699;
continue;
} else {
}
break;
}

var G__75696 = args75694.length;
switch (G__75696) {
case 3:
return dat.reactor.dispatcher.dispatch_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dat.reactor.dispatcher.dispatch_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args75694.length)].join('')));

}
});

dat.reactor.dispatcher.dispatch_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (dispatcher,event,level){
return dat.spec.protocols.dispatch_BANG_.call(null,dispatcher,event,level);
});

dat.reactor.dispatcher.dispatch_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (dispatcher,event){
return dat.spec.protocols.dispatch_BANG_.call(null,dispatcher,event,new cljs.core.Keyword(null,"default","default",-1987822328));
});

dat.reactor.dispatcher.dispatch_BANG_.cljs$lang$maxFixedArity = 3;

dat.reactor.dispatcher.dispatch_error_BANG_ = (function dat$reactor$dispatcher$dispatch_error_BANG_(datview,event){
return dat.reactor.dispatcher.dispatch_BANG_.call(null,datview,event,new cljs.core.Keyword(null,"error","error",-978969032));
});
dat.reactor.dispatcher.event_chan = (function dat$reactor$dispatcher$event_chan(dispatcher){

return dat.spec.protocols.dispatcher_event_chan.call(null,dispatcher);
});

//# sourceMappingURL=dispatcher.js.map?rel=1506064189249