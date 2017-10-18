// Compiled by ClojureScript 1.9.542 {}
goog.provide('dat.sys.routes');
goog.require('cljs.core');
goog.require('taoensso.timbre');
goog.require('com.stuartsierra.component');
goog.require('bidi.bidi');
dat.sys.routes.test_routes = (function dat$sys$routes$test_routes(){
return null;
});
dat.sys.routes.test_routes_two = (function dat$sys$routes$test_routes_two(){
return null;
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
dat.sys.routes.Routes = (function (config,handlers,__meta,__extmap,__hash){
this.config = config;
this.handlers = handlers;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
dat.sys.routes.Routes.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__62029__auto__,k__62030__auto__){
var self__ = this;
var this__62029__auto____$1 = this;
return this__62029__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__62030__auto__,null);
});

dat.sys.routes.Routes.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__62031__auto__,k71024,else__62032__auto__){
var self__ = this;
var this__62031__auto____$1 = this;
var G__71026 = k71024;
var G__71026__$1 = (((G__71026 instanceof cljs.core.Keyword))?G__71026.fqn:null);
switch (G__71026__$1) {
case "config":
return self__.config;

break;
case "handlers":
return self__.handlers;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k71024,else__62032__auto__);

}
});

dat.sys.routes.Routes.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__62043__auto__,writer__62044__auto__,opts__62045__auto__){
var self__ = this;
var this__62043__auto____$1 = this;
var pr_pair__62046__auto__ = ((function (this__62043__auto____$1){
return (function (keyval__62047__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__62044__auto__,cljs.core.pr_writer,""," ","",opts__62045__auto__,keyval__62047__auto__);
});})(this__62043__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__62044__auto__,pr_pair__62046__auto__,"#dat.sys.routes.Routes{",", ","}",opts__62045__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"config","config",994861415),self__.config],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"handlers","handlers",79528781),self__.handlers],null))], null),self__.__extmap));
});

dat.sys.routes.Routes.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

dat.sys.routes.Routes.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__71023){
var self__ = this;
var G__71023__$1 = this;
return (new cljs.core.RecordIter((0),G__71023__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"handlers","handlers",79528781)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

dat.sys.routes.Routes.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__62027__auto__){
var self__ = this;
var this__62027__auto____$1 = this;
return self__.__meta;
});

dat.sys.routes.Routes.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__62023__auto__){
var self__ = this;
var this__62023__auto____$1 = this;
return (new dat.sys.routes.Routes(self__.config,self__.handlers,self__.__meta,self__.__extmap,self__.__hash));
});

dat.sys.routes.Routes.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__62033__auto__){
var self__ = this;
var this__62033__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

dat.sys.routes.Routes.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__62024__auto__){
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

dat.sys.routes.Routes.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__62025__auto__,other__62026__auto__){
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

dat.sys.routes.Routes.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__62038__auto__,k__62039__auto__){
var self__ = this;
var this__62038__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"config","config",994861415),null,new cljs.core.Keyword(null,"handlers","handlers",79528781),null], null), null),k__62039__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__62038__auto____$1),self__.__meta),k__62039__auto__);
} else {
return (new dat.sys.routes.Routes(self__.config,self__.handlers,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__62039__auto__)),null));
}
});

dat.sys.routes.Routes.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__62036__auto__,k__62037__auto__,G__71023){
var self__ = this;
var this__62036__auto____$1 = this;
var pred__71027 = cljs.core.keyword_identical_QMARK_;
var expr__71028 = k__62037__auto__;
if(cljs.core.truth_(pred__71027.call(null,new cljs.core.Keyword(null,"config","config",994861415),expr__71028))){
return (new dat.sys.routes.Routes(G__71023,self__.handlers,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__71027.call(null,new cljs.core.Keyword(null,"handlers","handlers",79528781),expr__71028))){
return (new dat.sys.routes.Routes(self__.config,G__71023,self__.__meta,self__.__extmap,null));
} else {
return (new dat.sys.routes.Routes(self__.config,self__.handlers,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__62037__auto__,G__71023),null));
}
}
});

dat.sys.routes.Routes.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__62041__auto__){
var self__ = this;
var this__62041__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"config","config",994861415),self__.config],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"handlers","handlers",79528781),self__.handlers],null))], null),self__.__extmap));
});

dat.sys.routes.Routes.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__62028__auto__,G__71023){
var self__ = this;
var this__62028__auto____$1 = this;
return (new dat.sys.routes.Routes(self__.config,self__.handlers,G__71023,self__.__extmap,self__.__hash));
});

dat.sys.routes.Routes.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__62034__auto__,entry__62035__auto__){
var self__ = this;
var this__62034__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__62035__auto__)){
return this__62034__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__62035__auto__,(0)),cljs.core._nth.call(null,entry__62035__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__62034__auto____$1,entry__62035__auto__);
}
});

dat.sys.routes.Routes.prototype.com$stuartsierra$component$Lifecycle$ = cljs.core.PROTOCOL_SENTINEL;

dat.sys.routes.Routes.prototype.com$stuartsierra$component$Lifecycle$start$arity$1 = (function (component){
var self__ = this;
var component__$1 = this;

return cljs.core.assoc.call(null,component__$1,new cljs.core.Keyword(null,"handlers","handlers",79528781),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dat.sys.routes.test_routes.call(null),dat.sys.routes.test_routes_two.call(null)], null));
});

dat.sys.routes.Routes.prototype.com$stuartsierra$component$Lifecycle$stop$arity$1 = (function (component){
var self__ = this;
var component__$1 = this;
return cljs.core.assoc.call(null,component__$1,new cljs.core.Keyword(null,"handlers","handlers",79528781),null);
});

dat.sys.routes.Routes.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"config","config",-1659574354,null),new cljs.core.Symbol(null,"handlers","handlers",1720060308,null)], null);
});

dat.sys.routes.Routes.cljs$lang$type = true;

dat.sys.routes.Routes.cljs$lang$ctorPrSeq = (function (this__62065__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"dat.sys.routes/Routes");
});

dat.sys.routes.Routes.cljs$lang$ctorPrWriter = (function (this__62065__auto__,writer__62066__auto__){
return cljs.core._write.call(null,writer__62066__auto__,"dat.sys.routes/Routes");
});

dat.sys.routes.__GT_Routes = (function dat$sys$routes$__GT_Routes(config,handlers){
return (new dat.sys.routes.Routes(config,handlers,null,null,null));
});

dat.sys.routes.map__GT_Routes = (function dat$sys$routes$map__GT_Routes(G__71025){
return (new dat.sys.routes.Routes(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(G__71025),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(G__71025),null,cljs.core.dissoc.call(null,G__71025,new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"handlers","handlers",79528781)),null));
});

dat.sys.routes.new_routes = (function dat$sys$routes$new_routes(){
return dat.sys.routes.map__GT_Routes.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

//# sourceMappingURL=routes.js.map?rel=1506321319239