// Compiled by ClojureScript 1.9.542 {}
goog.provide('incognito.base');
goog.require('cljs.core');
goog.require('cljs.reader');

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
incognito.base.IncognitoTaggedLiteral = (function (tag,value,__meta,__extmap,__hash){
this.tag = tag;
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
incognito.base.IncognitoTaggedLiteral.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__62029__auto__,k__62030__auto__){
var self__ = this;
var this__62029__auto____$1 = this;
return this__62029__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__62030__auto__,null);
});

incognito.base.IncognitoTaggedLiteral.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__62031__auto__,k66802,else__62032__auto__){
var self__ = this;
var this__62031__auto____$1 = this;
var G__66804 = k66802;
var G__66804__$1 = (((G__66804 instanceof cljs.core.Keyword))?G__66804.fqn:null);
switch (G__66804__$1) {
case "tag":
return self__.tag;

break;
case "value":
return self__.value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k66802,else__62032__auto__);

}
});

incognito.base.IncognitoTaggedLiteral.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__62043__auto__,writer__62044__auto__,opts__62045__auto__){
var self__ = this;
var this__62043__auto____$1 = this;
var pr_pair__62046__auto__ = ((function (this__62043__auto____$1){
return (function (keyval__62047__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__62044__auto__,cljs.core.pr_writer,""," ","",opts__62045__auto__,keyval__62047__auto__);
});})(this__62043__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__62044__auto__,pr_pair__62046__auto__,"#incognito.base.IncognitoTaggedLiteral{",", ","}",opts__62045__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tag","tag",-1290361223),self__.tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

incognito.base.IncognitoTaggedLiteral.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

incognito.base.IncognitoTaggedLiteral.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__66801){
var self__ = this;
var G__66801__$1 = this;
return (new cljs.core.RecordIter((0),G__66801__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"value","value",305978217)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

incognito.base.IncognitoTaggedLiteral.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__62027__auto__){
var self__ = this;
var this__62027__auto____$1 = this;
return self__.__meta;
});

incognito.base.IncognitoTaggedLiteral.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__62023__auto__){
var self__ = this;
var this__62023__auto____$1 = this;
return (new incognito.base.IncognitoTaggedLiteral(self__.tag,self__.value,self__.__meta,self__.__extmap,self__.__hash));
});

incognito.base.IncognitoTaggedLiteral.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__62033__auto__){
var self__ = this;
var this__62033__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

incognito.base.IncognitoTaggedLiteral.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__62024__auto__){
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

incognito.base.IncognitoTaggedLiteral.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__62025__auto__,other__62026__auto__){
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

incognito.base.IncognitoTaggedLiteral.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__62038__auto__,k__62039__auto__){
var self__ = this;
var this__62038__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"tag","tag",-1290361223),null], null), null),k__62039__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__62038__auto____$1),self__.__meta),k__62039__auto__);
} else {
return (new incognito.base.IncognitoTaggedLiteral(self__.tag,self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__62039__auto__)),null));
}
});

incognito.base.IncognitoTaggedLiteral.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__62036__auto__,k__62037__auto__,G__66801){
var self__ = this;
var this__62036__auto____$1 = this;
var pred__66805 = cljs.core.keyword_identical_QMARK_;
var expr__66806 = k__62037__auto__;
if(cljs.core.truth_(pred__66805.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),expr__66806))){
return (new incognito.base.IncognitoTaggedLiteral(G__66801,self__.value,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__66805.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__66806))){
return (new incognito.base.IncognitoTaggedLiteral(self__.tag,G__66801,self__.__meta,self__.__extmap,null));
} else {
return (new incognito.base.IncognitoTaggedLiteral(self__.tag,self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__62037__auto__,G__66801),null));
}
}
});

incognito.base.IncognitoTaggedLiteral.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__62041__auto__){
var self__ = this;
var this__62041__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tag","tag",-1290361223),self__.tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

incognito.base.IncognitoTaggedLiteral.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__62028__auto__,G__66801){
var self__ = this;
var this__62028__auto____$1 = this;
return (new incognito.base.IncognitoTaggedLiteral(self__.tag,self__.value,G__66801,self__.__extmap,self__.__hash));
});

incognito.base.IncognitoTaggedLiteral.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__62034__auto__,entry__62035__auto__){
var self__ = this;
var this__62034__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__62035__auto__)){
return this__62034__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__62035__auto__,(0)),cljs.core._nth.call(null,entry__62035__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__62034__auto____$1,entry__62035__auto__);
}
});

incognito.base.IncognitoTaggedLiteral.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
});

incognito.base.IncognitoTaggedLiteral.cljs$lang$type = true;

incognito.base.IncognitoTaggedLiteral.cljs$lang$ctorPrSeq = (function (this__62065__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"incognito.base/IncognitoTaggedLiteral");
});

incognito.base.IncognitoTaggedLiteral.cljs$lang$ctorPrWriter = (function (this__62065__auto__,writer__62066__auto__){
return cljs.core._write.call(null,writer__62066__auto__,"incognito.base/IncognitoTaggedLiteral");
});

incognito.base.__GT_IncognitoTaggedLiteral = (function incognito$base$__GT_IncognitoTaggedLiteral(tag,value){
return (new incognito.base.IncognitoTaggedLiteral(tag,value,null,null,null));
});

incognito.base.map__GT_IncognitoTaggedLiteral = (function incognito$base$map__GT_IncognitoTaggedLiteral(G__66803){
return (new incognito.base.IncognitoTaggedLiteral(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(G__66803),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__66803),null,cljs.core.dissoc.call(null,G__66803,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"value","value",305978217)),null));
});

incognito.base.pr_str__GT_pure_read_string = (function incognito$base$pr_str__GT_pure_read_string(r){
var r_str = cljs.core.pr_str.call(null,r);
var _STAR_tag_table_STAR_66811 = cljs.reader._STAR_tag_table_STAR_;
var _STAR_default_data_reader_fn_STAR_66812 = cljs.reader._STAR_default_data_reader_fn_STAR_;
cljs.reader._STAR_tag_table_STAR_ = cljs.core.atom.call(null,cljs.core.select_keys.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["inst","uuid","queue","js"], null)));

cljs.reader._STAR_default_data_reader_fn_STAR_ = cljs.core.atom.call(null,((function (_STAR_tag_table_STAR_66811,_STAR_default_data_reader_fn_STAR_66812,r_str){
return (function (t,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,v], null);
});})(_STAR_tag_table_STAR_66811,_STAR_default_data_reader_fn_STAR_66812,r_str))
);

try{return cljs.reader.read_string.call(null,r_str);
}finally {cljs.reader._STAR_default_data_reader_fn_STAR_ = _STAR_default_data_reader_fn_STAR_66812;

cljs.reader._STAR_tag_table_STAR_ = _STAR_tag_table_STAR_66811;
}});
incognito.base.incognito_reader = (function incognito$base$incognito_reader(read_handlers,m){
if(cljs.core.truth_(read_handlers.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(m)))){
return read_handlers.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(m)).call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(m));
} else {
return incognito.base.map__GT_IncognitoTaggedLiteral.call(null,m);
}
});
incognito.base.incognito_writer = (function incognito$base$incognito_writer(write_handlers,r){
var s = cljs.core.symbol.call(null,cljs.core.pr_str.call(null,cljs.core.type.call(null,r)));
var vec__66816 = (cljs.core.truth_(write_handlers.call(null,s))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,write_handlers.call(null,s).call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,r))], null):incognito.base.pr_str__GT_pure_read_string.call(null,r));
var tag = cljs.core.nth.call(null,vec__66816,(0),null);
var v = cljs.core.nth.call(null,vec__66816,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),tag,new cljs.core.Keyword(null,"value","value",305978217),v], null);
});

//# sourceMappingURL=base.js.map?rel=1506321316366