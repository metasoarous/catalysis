// Compiled by ClojureScript 1.9.542 {}
goog.provide('dat.view.dom');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('taoensso.timbre');
goog.require('dat.spec.protocols');
goog.require('dat.reactor.onyx');
goog.require('reagent.core');
goog.require('dat.sys.utils');
goog.require('com.stuartsierra.component');
dat.view.dom.go_render_BANG_ = (function dat$view$dom$go_render_BANG_(dom){
var c__64826__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__64826__auto__){
return (function (){
var f__64827__auto__ = (function (){var switch__64803__auto__ = ((function (c__64826__auto__){
return (function (state_66720){
var state_val_66721 = (state_66720[(1)]);
if((state_val_66721 === (1))){
var state_66720__$1 = state_66720;
var statearr_66722_66732 = state_66720__$1;
(statearr_66722_66732[(2)] = null);

(statearr_66722_66732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66721 === (2))){
var inst_66712 = dat.spec.protocols.send_chan.call(null,dom);
var state_66720__$1 = state_66720;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66720__$1,(4),inst_66712);
} else {
if((state_val_66721 === (3))){
var inst_66718 = (state_66720[(2)]);
var state_66720__$1 = state_66720;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66720__$1,inst_66718);
} else {
if((state_val_66721 === (4))){
var inst_66714 = (state_66720[(2)]);
var inst_66715 = dat.spec.protocols.mount_BANG_.call(null,dom,inst_66714);
var state_66720__$1 = (function (){var statearr_66723 = state_66720;
(statearr_66723[(7)] = inst_66715);

return statearr_66723;
})();
var statearr_66724_66733 = state_66720__$1;
(statearr_66724_66733[(2)] = null);

(statearr_66724_66733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__64826__auto__))
;
return ((function (switch__64803__auto__,c__64826__auto__){
return (function() {
var dat$view$dom$go_render_BANG__$_state_machine__64804__auto__ = null;
var dat$view$dom$go_render_BANG__$_state_machine__64804__auto____0 = (function (){
var statearr_66728 = [null,null,null,null,null,null,null,null];
(statearr_66728[(0)] = dat$view$dom$go_render_BANG__$_state_machine__64804__auto__);

(statearr_66728[(1)] = (1));

return statearr_66728;
});
var dat$view$dom$go_render_BANG__$_state_machine__64804__auto____1 = (function (state_66720){
while(true){
var ret_value__64805__auto__ = (function (){try{while(true){
var result__64806__auto__ = switch__64803__auto__.call(null,state_66720);
if(cljs.core.keyword_identical_QMARK_.call(null,result__64806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64806__auto__;
}
break;
}
}catch (e66729){if((e66729 instanceof Object)){
var ex__64807__auto__ = e66729;
var statearr_66730_66734 = state_66720;
(statearr_66730_66734[(5)] = ex__64807__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66720);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66729;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__64805__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66735 = state_66720;
state_66720 = G__66735;
continue;
} else {
return ret_value__64805__auto__;
}
break;
}
});
dat$view$dom$go_render_BANG__$_state_machine__64804__auto__ = function(state_66720){
switch(arguments.length){
case 0:
return dat$view$dom$go_render_BANG__$_state_machine__64804__auto____0.call(this);
case 1:
return dat$view$dom$go_render_BANG__$_state_machine__64804__auto____1.call(this,state_66720);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
dat$view$dom$go_render_BANG__$_state_machine__64804__auto__.cljs$core$IFn$_invoke$arity$0 = dat$view$dom$go_render_BANG__$_state_machine__64804__auto____0;
dat$view$dom$go_render_BANG__$_state_machine__64804__auto__.cljs$core$IFn$_invoke$arity$1 = dat$view$dom$go_render_BANG__$_state_machine__64804__auto____1;
return dat$view$dom$go_render_BANG__$_state_machine__64804__auto__;
})()
;})(switch__64803__auto__,c__64826__auto__))
})();
var state__64828__auto__ = (function (){var statearr_66731 = f__64827__auto__.call(null);
(statearr_66731[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__64826__auto__);

return statearr_66731;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__64828__auto__);
});})(c__64826__auto__))
);

return c__64826__auto__;
});
dat.view.dom.intent = (function dat$view$dom$intent(var_args){
var args__62582__auto__ = [];
var len__62575__auto___66737 = arguments.length;
var i__62576__auto___66738 = (0);
while(true){
if((i__62576__auto___66738 < len__62575__auto___66737)){
args__62582__auto__.push((arguments[i__62576__auto___66738]));

var G__66739 = (i__62576__auto___66738 + (1));
i__62576__auto___66738 = G__66739;
continue;
} else {
}
break;
}

var argseq__62583__auto__ = ((((0) < args__62582__auto__.length))?(new cljs.core.IndexedSeq(args__62582__auto__.slice((0)),(0),null)):null);
return dat.view.dom.intent.cljs$core$IFn$_invoke$arity$variadic(argseq__62583__auto__);
});
goog.exportSymbol('dat.view.dom.intent', dat.view.dom.intent);

dat.view.dom.intent.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return false;
});

dat.view.dom.intent.cljs$lang$maxFixedArity = (0);

dat.view.dom.intent.cljs$lang$applyTo = (function (seq66736){
return dat.view.dom.intent.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66736));
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
 * @implements {dat.spec.protocols.PDispatcher}
 * @implements {dat.spec.protocols.Dom}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {dat.spec.protocols.Wire}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {com.stuartsierra.component.Lifecycle}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
dat.view.dom.ReagentDom = (function (ui_dispatch_chan,render_chan,reactor,__meta,__extmap,__hash){
this.ui_dispatch_chan = ui_dispatch_chan;
this.render_chan = render_chan;
this.reactor = reactor;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
dat.view.dom.ReagentDom.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__62029__auto__,k__62030__auto__){
var self__ = this;
var this__62029__auto____$1 = this;
return this__62029__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__62030__auto__,null);
});

dat.view.dom.ReagentDom.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__62031__auto__,k66741,else__62032__auto__){
var self__ = this;
var this__62031__auto____$1 = this;
var G__66743 = k66741;
var G__66743__$1 = (((G__66743 instanceof cljs.core.Keyword))?G__66743.fqn:null);
switch (G__66743__$1) {
case "ui-dispatch-chan":
return self__.ui_dispatch_chan;

break;
case "render-chan":
return self__.render_chan;

break;
case "reactor":
return self__.reactor;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k66741,else__62032__auto__);

}
});

dat.view.dom.ReagentDom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__62043__auto__,writer__62044__auto__,opts__62045__auto__){
var self__ = this;
var this__62043__auto____$1 = this;
var pr_pair__62046__auto__ = ((function (this__62043__auto____$1){
return (function (keyval__62047__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__62044__auto__,cljs.core.pr_writer,""," ","",opts__62045__auto__,keyval__62047__auto__);
});})(this__62043__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__62044__auto__,pr_pair__62046__auto__,"#dat.view.dom.ReagentDom{",", ","}",opts__62045__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ui-dispatch-chan","ui-dispatch-chan",-2063622517),self__.ui_dispatch_chan],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render-chan","render-chan",667311808),self__.render_chan],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reactor","reactor",535582272),self__.reactor],null))], null),self__.__extmap));
});

dat.view.dom.ReagentDom.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

dat.view.dom.ReagentDom.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__66740){
var self__ = this;
var G__66740__$1 = this;
return (new cljs.core.RecordIter((0),G__66740__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui-dispatch-chan","ui-dispatch-chan",-2063622517),new cljs.core.Keyword(null,"render-chan","render-chan",667311808),new cljs.core.Keyword(null,"reactor","reactor",535582272)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

dat.view.dom.ReagentDom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__62027__auto__){
var self__ = this;
var this__62027__auto____$1 = this;
return self__.__meta;
});

dat.view.dom.ReagentDom.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__62023__auto__){
var self__ = this;
var this__62023__auto____$1 = this;
return (new dat.view.dom.ReagentDom(self__.ui_dispatch_chan,self__.render_chan,self__.reactor,self__.__meta,self__.__extmap,self__.__hash));
});

dat.view.dom.ReagentDom.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__62033__auto__){
var self__ = this;
var this__62033__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

dat.view.dom.ReagentDom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__62024__auto__){
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

dat.view.dom.ReagentDom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__62025__auto__,other__62026__auto__){
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

dat.view.dom.ReagentDom.prototype.dat$spec$protocols$Dom$ = cljs.core.PROTOCOL_SENTINEL;

dat.view.dom.ReagentDom.prototype.dat$spec$protocols$Dom$mount_BANG_$arity$2 = (function (dom,p__66744){
var self__ = this;
var map__66745 = p__66744;
var map__66745__$1 = ((((!((map__66745 == null)))?((((map__66745.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66745.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66745):map__66745);
var renderable = map__66745__$1;
var render = cljs.core.get.call(null,map__66745__$1,new cljs.core.Keyword("dat.view","render","dat.view/render",874415262));
var mount_id = cljs.core.get.call(null,map__66745__$1,new cljs.core.Keyword("dat.view","mount-id","dat.view/mount-id",-1080021398));
var dom__$1 = this;
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [render,cljs.core.assoc.call(null,renderable,new cljs.core.Keyword("dat.view","dom","dat.view/dom",509613858),dom__$1,new cljs.core.Keyword("dat.view.dom","dispatch!","dat.view.dom/dispatch!",906816272),cljs.core.partial.call(null,cljs.core.async.put_BANG_,self__.ui_dispatch_chan))], null),document.getElementById(mount_id));


throw "No implementation for serverside rendering";
});

dat.view.dom.ReagentDom.prototype.dat$spec$protocols$PDispatcher$ = cljs.core.PROTOCOL_SENTINEL;

dat.view.dom.ReagentDom.prototype.dat$spec$protocols$PDispatcher$dispatch_BANG_$arity$2 = (function (dom,event){
var self__ = this;
var dom__$1 = this;
return cljs.core.async.put_BANG_.call(null,self__.ui_dispatch_chan,event);
});

dat.view.dom.ReagentDom.prototype.dat$spec$protocols$PDispatcher$dispatch_BANG_$arity$3 = (function (dom,event,level){
var self__ = this;
var dom__$1 = this;
return cljs.core.async.put_BANG_.call(null,self__.ui_dispatch_chan,event);
});

dat.view.dom.ReagentDom.prototype.dat$spec$protocols$PDispatcher$dispatcher_event_chan$arity$1 = (function (dom){
var self__ = this;
var dom__$1 = this;
return self__.ui_dispatch_chan;
});

dat.view.dom.ReagentDom.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__62038__auto__,k__62039__auto__){
var self__ = this;
var this__62038__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reactor","reactor",535582272),null,new cljs.core.Keyword(null,"render-chan","render-chan",667311808),null,new cljs.core.Keyword(null,"ui-dispatch-chan","ui-dispatch-chan",-2063622517),null], null), null),k__62039__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__62038__auto____$1),self__.__meta),k__62039__auto__);
} else {
return (new dat.view.dom.ReagentDom(self__.ui_dispatch_chan,self__.render_chan,self__.reactor,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__62039__auto__)),null));
}
});

dat.view.dom.ReagentDom.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__62036__auto__,k__62037__auto__,G__66740){
var self__ = this;
var this__62036__auto____$1 = this;
var pred__66747 = cljs.core.keyword_identical_QMARK_;
var expr__66748 = k__62037__auto__;
if(cljs.core.truth_(pred__66747.call(null,new cljs.core.Keyword(null,"ui-dispatch-chan","ui-dispatch-chan",-2063622517),expr__66748))){
return (new dat.view.dom.ReagentDom(G__66740,self__.render_chan,self__.reactor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__66747.call(null,new cljs.core.Keyword(null,"render-chan","render-chan",667311808),expr__66748))){
return (new dat.view.dom.ReagentDom(self__.ui_dispatch_chan,G__66740,self__.reactor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__66747.call(null,new cljs.core.Keyword(null,"reactor","reactor",535582272),expr__66748))){
return (new dat.view.dom.ReagentDom(self__.ui_dispatch_chan,self__.render_chan,G__66740,self__.__meta,self__.__extmap,null));
} else {
return (new dat.view.dom.ReagentDom(self__.ui_dispatch_chan,self__.render_chan,self__.reactor,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__62037__auto__,G__66740),null));
}
}
}
});

dat.view.dom.ReagentDom.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__62041__auto__){
var self__ = this;
var this__62041__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ui-dispatch-chan","ui-dispatch-chan",-2063622517),self__.ui_dispatch_chan],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render-chan","render-chan",667311808),self__.render_chan],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reactor","reactor",535582272),self__.reactor],null))], null),self__.__extmap));
});

dat.view.dom.ReagentDom.prototype.dat$spec$protocols$Wire$ = cljs.core.PROTOCOL_SENTINEL;

dat.view.dom.ReagentDom.prototype.dat$spec$protocols$Wire$recv_chan$arity$1 = (function (dom){
var self__ = this;
var dom__$1 = this;
return self__.ui_dispatch_chan;
});

dat.view.dom.ReagentDom.prototype.dat$spec$protocols$Wire$send_chan$arity$1 = (function (dom){
var self__ = this;
var dom__$1 = this;
return self__.render_chan;
});

dat.view.dom.ReagentDom.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__62028__auto__,G__66740){
var self__ = this;
var this__62028__auto____$1 = this;
return (new dat.view.dom.ReagentDom(self__.ui_dispatch_chan,self__.render_chan,self__.reactor,G__66740,self__.__extmap,self__.__hash));
});

dat.view.dom.ReagentDom.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__62034__auto__,entry__62035__auto__){
var self__ = this;
var this__62034__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__62035__auto__)){
return this__62034__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__62035__auto__,(0)),cljs.core._nth.call(null,entry__62035__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__62034__auto____$1,entry__62035__auto__);
}
});

dat.view.dom.ReagentDom.prototype.com$stuartsierra$component$Lifecycle$ = cljs.core.PROTOCOL_SENTINEL;

dat.view.dom.ReagentDom.prototype.com$stuartsierra$component$Lifecycle$start$arity$1 = (function (dom){
var self__ = this;
var dom__$1 = this;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dat.view.dom","/tmp/form-init3486417385122683475.clj",28,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (dom__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Starting ReagentDom Component"], null);
});})(dom__$1))
,null)),null,-132709415);

var ui_dispatch_size = (100);
var dom__$2 = cljs.core.assoc.call(null,dom__$1,new cljs.core.Keyword(null,"ui-dispatch-chan","ui-dispatch-chan",-2063622517),(function (){var or__61290__auto__ = self__.ui_dispatch_chan;
if(cljs.core.truth_(or__61290__auto__)){
return or__61290__auto__;
} else {
return cljs.core.async.chan.call(null,ui_dispatch_size);
}
})(),new cljs.core.Keyword(null,"render-chan","render-chan",667311808),(function (){var or__61290__auto__ = self__.render_chan;
if(cljs.core.truth_(or__61290__auto__)){
return or__61290__auto__;
} else {
return cljs.core.async.chan.call(null);
}
})());
dat.view.dom.go_render_BANG_.call(null,dom__$2);

dat.reactor.onyx.expand_job_BANG_.call(null,self__.reactor,new cljs.core.Keyword("dat.view.dom","job","dat.view.dom/job",567079951),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"catalog","catalog",-439057154),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("onyx","type","onyx/type",1170345418),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword("onyx","name","onyx/name",1848664427),new cljs.core.Keyword("dat.view.dom","event","dat.view.dom/event",421950242),new cljs.core.Keyword("dat.reactor.onyx","chan","dat.reactor.onyx/chan",-868503422),self__.ui_dispatch_chan,new cljs.core.Keyword("onyx","batch-size","onyx/batch-size",1209135837),ui_dispatch_size], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("onyx","type","onyx/type",1170345418),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword("onyx","name","onyx/name",1848664427),new cljs.core.Keyword("dat.view.dom","render","dat.view.dom/render",-1826044862),new cljs.core.Keyword("dat.reactor.onyx","chan","dat.reactor.onyx/chan",-868503422),self__.render_chan,new cljs.core.Keyword("onyx","batch-size","onyx/batch-size",1209135837),(1)], null)], null),new cljs.core.Keyword(null,"workflow","workflow",-640694607),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.view.dom","event","dat.view.dom/event",421950242),new cljs.core.Keyword("dat.reactor","legacy","dat.reactor/legacy",546320112)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.reactor","legacy","dat.reactor/legacy",546320112),new cljs.core.Keyword("dat.view.dom","render","dat.view.dom/render",-1826044862)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.view.dom","event","dat.view.dom/event",421950242),new cljs.core.Keyword("dat.view.dom","intent","dat.view.dom/intent",-253530873)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.view.dom","intent","dat.view.dom/intent",-253530873),new cljs.core.Keyword("dat.view.dom","render","dat.view.dom/render",-1826044862)], null)], null),new cljs.core.Keyword(null,"flow-conditions","flow-conditions",-833083495),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("flow","from","flow/from",1812137506),new cljs.core.Keyword("dat.view.dom","ui-dispatch","dat.view.dom/ui-dispatch",290293096),new cljs.core.Keyword("flow","to","flow/to",188953993),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.reactor","legacy","dat.reactor/legacy",546320112)], null),new cljs.core.Keyword("flow","predicate","flow/predicate",-1745647926),new cljs.core.Keyword("dat.reactor.onyx","legacy?","dat.reactor.onyx/legacy?",-2052540510)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("flow","from","flow/from",1812137506),new cljs.core.Keyword("dat.view.dom","ui-dispatch","dat.view.dom/ui-dispatch",290293096),new cljs.core.Keyword("flow","to","flow/to",188953993),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.reactor","intent","dat.reactor/intent",1168947034)], null),new cljs.core.Keyword("flow","predicate","flow/predicate",-1745647926),new cljs.core.Keyword("dat.view.dom","intent?","dat.view.dom/intent?",506690328)], null)], null)], null));

return dom__$2;
});

dat.view.dom.ReagentDom.prototype.com$stuartsierra$component$Lifecycle$stop$arity$1 = (function (dom){
var self__ = this;
var dom__$1 = this;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dat.view.dom","/tmp/form-init3486417385122683475.clj",58,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (dom__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Stopping ReagentDom Component"], null);
});})(dom__$1))
,null)),null,-1023755229);

if(cljs.core.truth_(self__.ui_dispatch_chan)){
cljs.core.async.close_BANG_.call(null,self__.ui_dispatch_chan);
} else {
}

return cljs.core.assoc.call(null,dom__$1,new cljs.core.Keyword(null,"ui-dispatch-chan","ui-dispatch-chan",-2063622517),null,new cljs.core.Keyword(null,"render-chan","render-chan",667311808),null);
});

dat.view.dom.ReagentDom.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ui-dispatch-chan","ui-dispatch-chan",-423090990,null),new cljs.core.Symbol(null,"render-chan","render-chan",-1987123961,null),new cljs.core.Symbol(null,"reactor","reactor",-2118853497,null)], null);
});

dat.view.dom.ReagentDom.cljs$lang$type = true;

dat.view.dom.ReagentDom.cljs$lang$ctorPrSeq = (function (this__62065__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"dat.view.dom/ReagentDom");
});

dat.view.dom.ReagentDom.cljs$lang$ctorPrWriter = (function (this__62065__auto__,writer__62066__auto__){
return cljs.core._write.call(null,writer__62066__auto__,"dat.view.dom/ReagentDom");
});

dat.view.dom.__GT_ReagentDom = (function dat$view$dom$__GT_ReagentDom(ui_dispatch_chan,render_chan,reactor){
return (new dat.view.dom.ReagentDom(ui_dispatch_chan,render_chan,reactor,null,null,null));
});

dat.view.dom.map__GT_ReagentDom = (function dat$view$dom$map__GT_ReagentDom(G__66742){
return (new dat.view.dom.ReagentDom(new cljs.core.Keyword(null,"ui-dispatch-chan","ui-dispatch-chan",-2063622517).cljs$core$IFn$_invoke$arity$1(G__66742),new cljs.core.Keyword(null,"render-chan","render-chan",667311808).cljs$core$IFn$_invoke$arity$1(G__66742),new cljs.core.Keyword(null,"reactor","reactor",535582272).cljs$core$IFn$_invoke$arity$1(G__66742),null,cljs.core.dissoc.call(null,G__66742,new cljs.core.Keyword(null,"ui-dispatch-chan","ui-dispatch-chan",-2063622517),new cljs.core.Keyword(null,"render-chan","render-chan",667311808),new cljs.core.Keyword(null,"reactor","reactor",535582272)),null));
});

/**
 * If :app is specified, it is reacted on. If not, it is computed as a map of {:dispatcher :reactor :conn}
 */
dat.view.dom.new_reagent_dom = (function dat$view$dom$new_reagent_dom(var_args){
var args66751 = [];
var len__62575__auto___66754 = arguments.length;
var i__62576__auto___66755 = (0);
while(true){
if((i__62576__auto___66755 < len__62575__auto___66754)){
args66751.push((arguments[i__62576__auto___66755]));

var G__66756 = (i__62576__auto___66755 + (1));
i__62576__auto___66755 = G__66756;
continue;
} else {
}
break;
}

var G__66753 = args66751.length;
switch (G__66753) {
case 1:
return dat.view.dom.new_reagent_dom.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return dat.view.dom.new_reagent_dom.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args66751.length)].join('')));

}
});

dat.view.dom.new_reagent_dom.cljs$core$IFn$_invoke$arity$1 = (function (options){
return dat.view.dom.map__GT_ReagentDom.call(null,options);
});

dat.view.dom.new_reagent_dom.cljs$core$IFn$_invoke$arity$0 = (function (){
return dat.view.dom.new_reagent_dom.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

dat.view.dom.new_reagent_dom.cljs$lang$maxFixedArity = 1;


//# sourceMappingURL=dom.js.map?rel=1506321315929