// Compiled by ClojureScript 1.9.542 {}
goog.provide('dat.reactor.onyx');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('taoensso.timbre');
goog.require('dat.spec.protocols');
goog.require('onyx_local_rt.api');
goog.require('datascript.core');
goog.require('dat.reactor');
goog.require('com.stuartsierra.component');
dat.reactor.onyx.conj_job = (function dat$reactor$onyx$conj_job(var_args){
var args64885 = [];
var len__62575__auto___64891 = arguments.length;
var i__62576__auto___64892 = (0);
while(true){
if((i__62576__auto___64892 < len__62575__auto___64891)){
args64885.push((arguments[i__62576__auto___64892]));

var G__64893 = (i__62576__auto___64892 + (1));
i__62576__auto___64892 = G__64893;
continue;
} else {
}
break;
}

var G__64887 = args64885.length;
switch (G__64887) {
case 0:
return dat.reactor.onyx.conj_job.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return dat.reactor.onyx.conj_job.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dat.reactor.onyx.conj_job.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args64885.length)].join('')));

}
});

dat.reactor.onyx.conj_job.cljs$core$IFn$_invoke$arity$0 = (function (){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"catalog","catalog",-439057154),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"workflow","workflow",-640694607),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"flow-conditions","flow-conditions",-833083495),cljs.core.PersistentVector.EMPTY], null);
});

dat.reactor.onyx.conj_job.cljs$core$IFn$_invoke$arity$1 = (function (job){
return job;
});

dat.reactor.onyx.conj_job.cljs$core$IFn$_invoke$arity$2 = (function (p__64888,more_job){
var map__64889 = p__64888;
var map__64889__$1 = ((((!((map__64889 == null)))?((((map__64889.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64889.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64889):map__64889);
var job = map__64889__$1;
var catalog = cljs.core.get.call(null,map__64889__$1,new cljs.core.Keyword(null,"catalog","catalog",-439057154));
var workflow = cljs.core.get.call(null,map__64889__$1,new cljs.core.Keyword(null,"workflow","workflow",-640694607));
var flow_conditions = cljs.core.get.call(null,map__64889__$1,new cljs.core.Keyword(null,"flow-conditions","flow-conditions",-833083495));
return cljs.core.assoc.call(null,job,new cljs.core.Keyword(null,"catalog","catalog",-439057154),cljs.core.into.call(null,(function (){var or__61290__auto__ = catalog;
if(cljs.core.truth_(or__61290__auto__)){
return or__61290__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),new cljs.core.Keyword(null,"catalog","catalog",-439057154).cljs$core$IFn$_invoke$arity$1(more_job)),new cljs.core.Keyword(null,"workflow","workflow",-640694607),cljs.core.into.call(null,(function (){var or__61290__auto__ = workflow;
if(cljs.core.truth_(or__61290__auto__)){
return or__61290__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),new cljs.core.Keyword(null,"workflow","workflow",-640694607).cljs$core$IFn$_invoke$arity$1(more_job)),new cljs.core.Keyword(null,"flow-conditions","flow-conditions",-833083495),cljs.core.into.call(null,(function (){var or__61290__auto__ = flow_conditions;
if(cljs.core.truth_(or__61290__auto__)){
return or__61290__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),new cljs.core.Keyword(null,"flow-conditions","flow-conditions",-833083495).cljs$core$IFn$_invoke$arity$1(more_job)));
});

dat.reactor.onyx.conj_job.cljs$lang$maxFixedArity = 2;

dat.reactor.onyx.legacy_event__GT_seg = (function dat$reactor$onyx$legacy_event__GT_seg(event){
if(cljs.core.vector_QMARK_.call(null,event)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("dat.reactor","event","dat.reactor/event",-1385170451),new cljs.core.Keyword("dat.reactor","legacy","dat.reactor/legacy",546320112),new cljs.core.Keyword(null,"event","event",301435442),event], null);
} else {
return event;
}
});
dat.reactor.onyx.legacy_event_GT__LT_seg = (function dat$reactor$onyx$legacy_event_GT__LT_seg(){
return cljs.core.map.call(null,dat.reactor.onyx.legacy_event__GT_seg);
});
dat.reactor.onyx.remove_outputs = (function dat$reactor$onyx$remove_outputs(env,task_name){
return cljs.core.assoc_in.call(null,env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tasks","tasks",-1754368880),task_name,new cljs.core.Keyword(null,"outputs","outputs",-1896513034)], null),cljs.core.PersistentVector.EMPTY);
});
dat.reactor.onyx.loopback_drain = (function dat$reactor$onyx$loopback_drain(env){
var env__$1 = env;
while(true){
var drained_env = onyx_local_rt.api.drain.call(null,env__$1);
var loop_segs = cljs.core.get_in.call(null,drained_env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tasks","tasks",-1754368880),new cljs.core.Keyword("dat.reactor","loopback","dat.reactor/loopback",715606267),new cljs.core.Keyword(null,"outputs","outputs",-1896513034)], null));
if(cljs.core.not.call(null,loop_segs)){
return drained_env;
} else {
var G__64895 = onyx_local_rt.api.new_segment.call(null,dat.reactor.onyx.remove_outputs.call(null,drained_env,new cljs.core.Keyword("dat.reactor","loopback","dat.reactor/loopback",715606267)),new cljs.core.Keyword("dat.reactor","loop-in","dat.reactor/loop-in",65022138),loop_segs);
env__$1 = G__64895;
continue;
}
break;
}
});
dat.reactor.onyx.go_react_BANG_ = (function dat$reactor$onyx$go_react_BANG_(p__64897){
var map__65306 = p__64897;
var map__65306__$1 = ((((!((map__65306 == null)))?((((map__65306.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65306.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65306):map__65306);
var onyx_atom = cljs.core.get.call(null,map__65306__$1,new cljs.core.Keyword(null,"onyx-atom","onyx-atom",1198478119));
var event_chan = cljs.core.get.call(null,map__65306__$1,new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912));
var kill_chan = cljs.core.get.call(null,map__65306__$1,new cljs.core.Keyword(null,"kill-chan","kill-chan",-1563670254));
var c__64826__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__64826__auto__,map__65306,map__65306__$1,onyx_atom,event_chan,kill_chan){
return (function (){
var f__64827__auto__ = (function (){var switch__64803__auto__ = ((function (c__64826__auto__,map__65306,map__65306__$1,onyx_atom,event_chan,kill_chan){
return (function (state_65568){
var state_val_65569 = (state_65568[(1)]);
if((state_val_65569 === (65))){
var inst_65471 = (state_65568[(7)]);
var inst_65489 = cljs.core.apply.call(null,cljs.core.hash_map,inst_65471);
var state_65568__$1 = state_65568;
var statearr_65570_65714 = state_65568__$1;
(statearr_65570_65714[(2)] = inst_65489);

(statearr_65570_65714[(1)] = (67));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65569 === (70))){
var inst_65512 = (state_65568[(8)]);
var inst_65505 = (state_65568[(9)]);
var inst_65507 = (state_65568[(10)]);
var inst_65512__$1 = cljs.core._nth.call(null,inst_65505,inst_65507);
var state_65568__$1 = (function (){var statearr_65571 = state_65568;
(statearr_65571[(8)] = inst_65512__$1);

return statearr_65571;
})();
if(cljs.core.truth_(inst_65512__$1)){
var statearr_65572_65715 = state_65568__$1;
(statearr_65572_65715[(1)] = (73));

} else {
var statearr_65573_65716 = state_65568__$1;
(statearr_65573_65716[(1)] = (74));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65569 === (62))){
var state_65568__$1 = state_65568;
var statearr_65574_65717 = state_65568__$1;
(statearr_65574_65717[(2)] = true);

(statearr_65574_65717[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65569 === (74))){
var state_65568__$1 = state_65568;
var statearr_65575_65718 = state_65568__$1;
(statearr_65575_65718[(2)] = null);

(statearr_65575_65718[(1)] = (75));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65569 === (7))){
var inst_65564 = (state_65568[(2)]);
var state_65568__$1 = state_65568;
var statearr_65576_65719 = state_65568__$1;
(statearr_65576_65719[(2)] = inst_65564);

(statearr_65576_65719[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65569 === (59))){
var inst_65471 = (state_65568[(7)]);
var inst_65476 = inst_65471.cljs$lang$protocol_mask$partition0$;
var inst_65477 = (inst_65476 & (64));
var inst_65478 = inst_65471.cljs$core$ISeq$;
var inst_65479 = (cljs.core.PROTOCOL_SENTINEL === inst_65478);
var inst_65480 = (inst_65477) || (inst_65479);
var state_65568__$1 = state_65568;
if(cljs.core.truth_(inst_65480)){
var statearr_65577_65720 = state_65568__$1;
(statearr_65577_65720[(1)] = (62));

} else {
var statearr_65578_65721 = state_65568__$1;
(statearr_65578_65721[(1)] = (63));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65569 === (86))){
var inst_65534 = (state_65568[(2)]);
var state_65568__$1 = state_65568;
var statearr_65579_65722 = state_65568__$1;
(statearr_65579_65722[(2)] = inst_65534);

(statearr_65579_65722[(1)] = (85));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65569 === (20))){
var inst_65374 = (state_65568[(11)]);
var inst_65373 = (state_65568[(12)]);
var inst_65376 = (inst_65374 < inst_65373);
var inst_65377 = inst_65376;
var state_65568__$1 = state_65568;
if(cljs.core.truth_(inst_65377)){
var statearr_65580_65723 = state_65568__$1;
(statearr_65580_65723[(1)] = (22));

} else {
var statearr_65581_65724 = state_65568__$1;
(statearr_65581_65724[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65569 === (72))){
var inst_65546 = (state_65568[(2)]);
var state_65568__$1 = state_65568;
var statearr_65582_65725 = state_65568__$1;
(statearr_65582_65725[(2)] = inst_65546);

(statearr_65582_65725[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65569 === (58))){
var inst_65552 = (state_65568[(2)]);
var state_65568__$1 = state_65568;
var statearr_65583_65726 = state_65568__$1;
(statearr_65583_65726[(2)] = inst_65552);

(statearr_65583_65726[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65569 === (60))){
var state_65568__$1 = state_65568;
var statearr_65584_65727 = state_65568__$1;
(statearr_65584_65727[(2)] = false);

(statearr_65584_65727[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65569 === (27))){
var inst_65396 = (state_65568[(2)]);
var state_65568__$1 = state_65568;
if(cljs.core.truth_(inst_65396)){
var statearr_65585_65728 = state_65568__$1;
(statearr_65585_65728[(1)] = (31));

} else {
var statearr_65586_65729 = state_65568__$1;
(statearr_65586_65729[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65569 === (1))){
var state_65568__$1 = state_65568;
var statearr_65587_65730 = state_65568__$1;
(statearr_65587_65730[(2)] = null);

(statearr_65587_65730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65569 === (69))){
var inst_65461 = (state_65568[(13)]);
var inst_65548 = (state_65568[(2)]);
var inst_65549 = cljs.core.next.call(null,inst_65461);
var inst_65371 = inst_65549;
var inst_65372 = null;
var inst_65373 = (0);
var inst_65374 = (0);
var state_65568__$1 = (function (){var statearr_65588 = state_65568;
(statearr_65588[(11)] = inst_65374);

(statearr_65588[(14)] = inst_65548);

(statearr_65588[(15)] = inst_65372);

(statearr_65588[(12)] = inst_65373);

(statearr_65588[(16)] = inst_65371);

return statearr_65588;
})();
var statearr_65589_65731 = state_65568__$1;
(statearr_65589_65731[(2)] = null);

(statearr_65589_65731[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65569 === (24))){
var inst_65557 = (state_65568[(2)]);
var state_65568__$1 = state_65568;
var statearr_65590_65732 = state_65568__$1;
(statearr_65590_65732[(2)] = inst_65557);

(statearr_65590_65732[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65569 === (55))){
var inst_65555 = (state_65568[(2)]);
var state_65568__$1 = state_65568;
var statearr_65591_65733 = state_65568__$1;
(statearr_65591_65733[(2)] = inst_65555);

(statearr_65591_65733[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65569 === (85))){
var inst_65522 = (state_65568[(17)]);
var inst_65537 = (state_65568[(2)]);
var inst_65538 = cljs.core.next.call(null,inst_65522);
var inst_65504 = inst_65538;
var inst_65505 = null;
var inst_65506 = (0);
var inst_65507 = (0);
var state_65568__$1 = (function (){var statearr_65592 = state_65568;
(statearr_65592[(9)] = inst_65505);

(statearr_65592[(18)] = inst_65537);

(statearr_65592[(10)] = inst_65507);

(statearr_65592[(19)] = inst_65506);

(statearr_65592[(20)] = inst_65504);

return statearr_65592;
})();
var statearr_65593_65734 = state_65568__$1;
(statearr_65593_65734[(2)] = null);

(statearr_65593_65734[(1)] = (68));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65569 === (39))){
var inst_65421 = (state_65568[(21)]);
var inst_65402 = (state_65568[(22)]);
var state_65568__$1 = state_65568;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_65568__$1,(42),inst_65402,inst_65421);
} else {
if((state_val_65569 === (46))){
var inst_65431 = (state_65568[(23)]);
var inst_65435 = cljs.core.chunk_first.call(null,inst_65431);
var inst_65436 = cljs.core.chunk_rest.call(null,inst_65431);
var inst_65437 = cljs.core.count.call(null,inst_65435);
var inst_65413 = inst_65436;
var inst_65414 = inst_65435;
var inst_65415 = inst_65437;
var inst_65416 = (0);
var state_65568__$1 = (function (){var statearr_65594 = state_65568;
(statearr_65594[(24)] = inst_65413);

(statearr_65594[(25)] = inst_65414);

(statearr_65594[(26)] = inst_65415);

(statearr_65594[(27)] = inst_65416);

return statearr_65594;
})();
var statearr_65595_65735 = state_65568__$1;
(statearr_65595_65735[(2)] = null);

(statearr_65595_65735[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65569 === (4))){
var inst_65318 = (state_65568[(28)]);
var inst_65316 = (state_65568[(29)]);
var inst_65316__$1 = (state_65568[(2)]);
var inst_65317 = cljs.core.nth.call(null,inst_65316__$1,(0),null);
var inst_65318__$1 = cljs.core.nth.call(null,inst_65316__$1,(1),null);
var inst_65319 = cljs.core._EQ_.call(null,inst_65318__$1,kill_chan);
var state_65568__$1 = (function (){var statearr_65596 = state_65568;
(statearr_65596[(28)] = inst_65318__$1);

(statearr_65596[(30)] = inst_65317);

(statearr_65596[(29)] = inst_65316__$1);

return statearr_65596;
})();
if(inst_65319){
var statearr_65597_65736 = state_65568__$1;
(statearr_65597_65736[(1)] = (5));

} else {
var statearr_65598_65737 = state_65568__$1;
(statearr_65598_65737[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65569 === (77))){
var inst_65522 = (state_65568[(17)]);
var inst_65524 = cljs.core.chunked_seq_QMARK_.call(null,inst_65522);
var state_65568__$1 = state_65568;
if(inst_65524){
var statearr_65599_65738 = state_65568__$1;
(statearr_65599_65738[(1)] = (80));

} else {
var statearr_65600_65739 = state_65568__$1;
(statearr_65600_65739[(1)] = (81));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65569 === (54))){
var state_65568__$1 = state_65568;
var statearr_65601_65740 = state_65568__$1;
(statearr_65601_65740[(2)] = null);

(statearr_65601_65740[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65569 === (15))){
var state_65568__$1 = state_65568;
var statearr_65602_65741 = state_65568__$1;
(statearr_65602_65741[(2)] = false);

(statearr_65602_65741[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65569 === (48))){
var inst_65450 = (state_65568[(2)]);
var state_65568__$1 = state_65568;
var statearr_65606_65742 = state_65568__$1;
(statearr_65606_65742[(2)] = inst_65450);

(statearr_65606_65742[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65569 === (50))){
var state_65568__$1 = state_65568;
var statearr_65607_65743 = state_65568__$1;
(statearr_65607_65743[(2)] = null);

(statearr_65607_65743[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65569 === (75))){
var inst_65505 = (state_65568[(9)]);
var inst_65507 = (state_65568[(10)]);
var inst_65506 = (state_65568[(19)]);
var inst_65504 = (state_65568[(20)]);
var inst_65518 = (state_65568[(2)]);
var inst_65519 = (inst_65507 + (1));
var tmp65603 = inst_65505;
var tmp65604 = inst_65506;
var tmp65605 = inst_65504;
var inst_65504__$1 = tmp65605;
var inst_65505__$1 = tmp65603;
var inst_65506__$1 = tmp65604;
var inst_65507__$1 = inst_65519;
var state_65568__$1 = (function (){var statearr_65608 = state_65568;
(statearr_65608[(31)] = inst_65518);

(statearr_65608[(9)] = inst_65505__$1);

(statearr_65608[(10)] = inst_65507__$1);

(statearr_65608[(19)] = inst_65506__$1);

(statearr_65608[(20)] = inst_65504__$1);

return statearr_65608;
})();
var statearr_65609_65744 = state_65568__$1;
(statearr_65609_65744[(2)] = null);

(statearr_65609_65744[(1)] = (68));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65569 === (21))){
var inst_65559 = (state_65568[(2)]);
var state_65568__$1 = state_65568;
var statearr_65610_65745 = state_65568__$1;
(statearr_65610_65745[(2)] = inst_65559);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65568__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65569 === (31))){
var inst_65380 = (state_65568[(32)]);
var inst_65398 = cljs.core.apply.call(null,cljs.core.hash_map,inst_65380);
var state_65568__$1 = state_65568;
var statearr_65611_65746 = state_65568__$1;
(statearr_65611_65746[(2)] = inst_65398);

(statearr_65611_65746[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65569 === (32))){
var inst_65380 = (state_65568[(32)]);
var state_65568__$1 = state_65568;
var statearr_65612_65747 = state_65568__$1;
(statearr_65612_65747[(2)] = inst_65380);

(statearr_65612_65747[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65569 === (40))){
var state_65568__$1 = state_65568;
var statearr_65613_65748 = state_65568__$1;
(statearr_65613_65748[(2)] = null);

(statearr_65613_65748[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65569 === (56))){
var inst_65461 = (state_65568[(13)]);
var inst_65465 = cljs.core.chunk_first.call(null,inst_65461);
var inst_65466 = cljs.core.chunk_rest.call(null,inst_65461);
var inst_65467 = cljs.core.count.call(null,inst_65465);
var inst_65371 = inst_65466;
var inst_65372 = inst_65465;
var inst_65373 = inst_65467;
var inst_65374 = (0);
var state_65568__$1 = (function (){var statearr_65614 = state_65568;
(statearr_65614[(11)] = inst_65374);

(statearr_65614[(15)] = inst_65372);

(statearr_65614[(12)] = inst_65373);

(statearr_65614[(16)] = inst_65371);

return statearr_65614;
})();
var statearr_65615_65749 = state_65568__$1;
(statearr_65615_65749[(2)] = null);

(statearr_65615_65749[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65569 === (33))){
var inst_65362 = (state_65568[(33)]);
var inst_65401 = (state_65568[(2)]);
var inst_65402 = cljs.core.get.call(null,inst_65401,new cljs.core.Keyword("dat.reactor","chan","dat.reactor/chan",1738071800));
var inst_65407 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_65408 = new cljs.core.Keyword("onyx","name","onyx/name",1848664427).cljs$core$IFn$_invoke$arity$1(inst_65401);
var inst_65409 = [new cljs.core.Keyword(null,"tasks","tasks",-1754368880),inst_65408,new cljs.core.Keyword(null,"outputs","outputs",-1896513034)];
var inst_65410 = (new cljs.core.PersistentVector(null,3,(5),inst_65407,inst_65409,null));
var inst_65411 = cljs.core.get_in.call(null,inst_65362,inst_65410);
var inst_65412 = cljs.core.seq.call(null,inst_65411);
var inst_65413 = inst_65412;
var inst_65414 = null;
var inst_65415 = (0);
var inst_65416 = (0);
var state_65568__$1 = (function (){var statearr_65616 = state_65568;
(statearr_65616[(24)] = inst_65413);

(statearr_65616[(25)] = inst_65414);

(statearr_65616[(22)] = inst_65402);

(statearr_65616[(26)] = inst_65415);

(statearr_65616[(27)] = inst_65416);

return statearr_65616;
})();
var statearr_65617_65750 = state_65568__$1;
(statearr_65617_65750[(2)] = null);

(statearr_65617_65750[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65569 === (13))){
var inst_65351 = (state_65568[(2)]);
var state_65568__$1 = state_65568;
if(cljs.core.truth_(inst_65351)){
var statearr_65618_65751 = state_65568__$1;
(statearr_65618_65751[(1)] = (17));

} else {
var statearr_65619_65752 = state_65568__$1;
(statearr_65619_65752[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65569 === (22))){
var inst_65374 = (state_65568[(11)]);
var inst_65372 = (state_65568[(15)]);
var inst_65380 = (state_65568[(32)]);
var inst_65380__$1 = cljs.core._nth.call(null,inst_65372,inst_65374);
var inst_65382 = (inst_65380__$1 == null);
var inst_65383 = cljs.core.not.call(null,inst_65382);
var state_65568__$1 = (function (){var statearr_65623 = state_65568;
(statearr_65623[(32)] = inst_65380__$1);

return statearr_65623;
})();
if(inst_65383){
var statearr_65624_65753 = state_65568__$1;
(statearr_65624_65753[(1)] = (25));

} else {
var statearr_65625_65754 = state_65568__$1;
(statearr_65625_65754[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65569 === (36))){
var inst_65421 = (state_65568[(21)]);
var inst_65414 = (state_65568[(25)]);
var inst_65416 = (state_65568[(27)]);
var inst_65421__$1 = cljs.core._nth.call(null,inst_65414,inst_65416);
var state_65568__$1 = (function (){var statearr_65626 = state_65568;
(statearr_65626[(21)] = inst_65421__$1);

return statearr_65626;
})();
if(cljs.core.truth_(inst_65421__$1)){
var statearr_65627_65755 = state_65568__$1;
(statearr_65627_65755[(1)] = (39));

} else {
var statearr_65628_65756 = state_65568__$1;
(statearr_65628_65756[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65569 === (41))){
var inst_65413 = (state_65568[(24)]);
var inst_65414 = (state_65568[(25)]);
var inst_65415 = (state_65568[(26)]);
var inst_65416 = (state_65568[(27)]);
var inst_65427 = (state_65568[(2)]);
var inst_65428 = (inst_65416 + (1));
var tmp65620 = inst_65413;
var tmp65621 = inst_65414;
var tmp65622 = inst_65415;
var inst_65413__$1 = tmp65620;
var inst_65414__$1 = tmp65621;
var inst_65415__$1 = tmp65622;
var inst_65416__$1 = inst_65428;
var state_65568__$1 = (function (){var statearr_65629 = state_65568;
(statearr_65629[(34)] = inst_65427);

(statearr_65629[(24)] = inst_65413__$1);

(statearr_65629[(25)] = inst_65414__$1);

(statearr_65629[(26)] = inst_65415__$1);

(statearr_65629[(27)] = inst_65416__$1);

return statearr_65629;
})();
var statearr_65630_65757 = state_65568__$1;
(statearr_65630_65757[(2)] = null);

(statearr_65630_65757[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65569 === (43))){
var inst_65431 = (state_65568[(23)]);
var inst_65433 = cljs.core.chunked_seq_QMARK_.call(null,inst_65431);
var state_65568__$1 = state_65568;
if(inst_65433){
var statearr_65631_65758 = state_65568__$1;
(statearr_65631_65758[(1)] = (46));

} else {
var statearr_65632_65759 = state_65568__$1;
(statearr_65632_65759[(1)] = (47));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65569 === (61))){
var inst_65487 = (state_65568[(2)]);
var state_65568__$1 = state_65568;
if(cljs.core.truth_(inst_65487)){
var statearr_65633_65760 = state_65568__$1;
(statearr_65633_65760[(1)] = (65));

} else {
var statearr_65634_65761 = state_65568__$1;
(statearr_65634_65761[(1)] = (66));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65569 === (29))){
var state_65568__$1 = state_65568;
var statearr_65635_65762 = state_65568__$1;
(statearr_65635_65762[(2)] = false);

(statearr_65635_65762[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65569 === (44))){
var state_65568__$1 = state_65568;
var statearr_65636_65763 = state_65568__$1;
(statearr_65636_65763[(2)] = null);

(statearr_65636_65763[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65569 === (6))){
var state_65568__$1 = state_65568;
var statearr_65637_65764 = state_65568__$1;
(statearr_65637_65764[(2)] = null);

(statearr_65637_65764[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65569 === (28))){
var state_65568__$1 = state_65568;
var statearr_65638_65765 = state_65568__$1;
(statearr_65638_65765[(2)] = true);

(statearr_65638_65765[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65569 === (64))){
var inst_65484 = (state_65568[(2)]);
var state_65568__$1 = state_65568;
var statearr_65639_65766 = state_65568__$1;
(statearr_65639_65766[(2)] = inst_65484);

(statearr_65639_65766[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65569 === (51))){
var inst_65431 = (state_65568[(23)]);
var inst_65446 = (state_65568[(2)]);
var inst_65447 = cljs.core.next.call(null,inst_65431);
var inst_65413 = inst_65447;
var inst_65414 = null;
var inst_65415 = (0);
var inst_65416 = (0);
var state_65568__$1 = (function (){var statearr_65640 = state_65568;
(statearr_65640[(24)] = inst_65413);

(statearr_65640[(25)] = inst_65414);

(statearr_65640[(35)] = inst_65446);

(statearr_65640[(26)] = inst_65415);

(statearr_65640[(27)] = inst_65416);

return statearr_65640;
})();
var statearr_65641_65767 = state_65568__$1;
(statearr_65641_65767[(2)] = null);

(statearr_65641_65767[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65569 === (25))){
var inst_65380 = (state_65568[(32)]);
var inst_65385 = inst_65380.cljs$lang$protocol_mask$partition0$;
var inst_65386 = (inst_65385 & (64));
var inst_65387 = inst_65380.cljs$core$ISeq$;
var inst_65388 = (cljs.core.PROTOCOL_SENTINEL === inst_65387);
var inst_65389 = (inst_65386) || (inst_65388);
var state_65568__$1 = state_65568;
if(cljs.core.truth_(inst_65389)){
var statearr_65642_65768 = state_65568__$1;
(statearr_65642_65768[(1)] = (28));

} else {
var statearr_65643_65769 = state_65568__$1;
(statearr_65643_65769[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65569 === (34))){
var inst_65415 = (state_65568[(26)]);
var inst_65416 = (state_65568[(27)]);
var inst_65418 = (inst_65416 < inst_65415);
var inst_65419 = inst_65418;
var state_65568__$1 = state_65568;
if(cljs.core.truth_(inst_65419)){
var statearr_65644_65770 = state_65568__$1;
(statearr_65644_65770[(1)] = (36));

} else {
var statearr_65645_65771 = state_65568__$1;
(statearr_65645_65771[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65569 === (17))){
var inst_65335 = (state_65568[(36)]);
var inst_65353 = cljs.core.apply.call(null,cljs.core.hash_map,inst_65335);
var state_65568__$1 = state_65568;
var statearr_65646_65772 = state_65568__$1;
(statearr_65646_65772[(2)] = inst_65353);

(statearr_65646_65772[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65569 === (3))){
var inst_65566 = (state_65568[(2)]);
var state_65568__$1 = state_65568;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65568__$1,inst_65566);
} else {
if((state_val_65569 === (12))){
var state_65568__$1 = state_65568;
var statearr_65647_65773 = state_65568__$1;
(statearr_65647_65773[(2)] = false);

(statearr_65647_65773[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65569 === (2))){
var inst_65312 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_65313 = [kill_chan,event_chan];
var inst_65314 = (new cljs.core.PersistentVector(null,2,(5),inst_65312,inst_65313,null));
var state_65568__$1 = state_65568;
return cljs.core.async.ioc_alts_BANG_.call(null,state_65568__$1,(4),inst_65314,new cljs.core.Keyword(null,"priority","priority",1431093715),true);
} else {
if((state_val_65569 === (66))){
var inst_65471 = (state_65568[(7)]);
var state_65568__$1 = state_65568;
var statearr_65648_65774 = state_65568__$1;
(statearr_65648_65774[(2)] = inst_65471);

(statearr_65648_65774[(1)] = (67));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65569 === (23))){
var inst_65461 = (state_65568[(13)]);
var inst_65371 = (state_65568[(16)]);
var inst_65461__$1 = cljs.core.seq.call(null,inst_65371);
var state_65568__$1 = (function (){var statearr_65652 = state_65568;
(statearr_65652[(13)] = inst_65461__$1);

return statearr_65652;
})();
if(inst_65461__$1){
var statearr_65653_65775 = state_65568__$1;
(statearr_65653_65775[(1)] = (53));

} else {
var statearr_65654_65776 = state_65568__$1;
(statearr_65654_65776[(1)] = (54));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65569 === (47))){
var inst_65431 = (state_65568[(23)]);
var inst_65440 = (state_65568[(37)]);
var inst_65440__$1 = cljs.core.first.call(null,inst_65431);
var state_65568__$1 = (function (){var statearr_65655 = state_65568;
(statearr_65655[(37)] = inst_65440__$1);

return statearr_65655;
})();
if(cljs.core.truth_(inst_65440__$1)){
var statearr_65656_65777 = state_65568__$1;
(statearr_65656_65777[(1)] = (49));

} else {
var statearr_65657_65778 = state_65568__$1;
(statearr_65657_65778[(1)] = (50));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65569 === (35))){
var inst_65374 = (state_65568[(11)]);
var inst_65372 = (state_65568[(15)]);
var inst_65373 = (state_65568[(12)]);
var inst_65371 = (state_65568[(16)]);
var inst_65457 = (state_65568[(2)]);
var inst_65458 = (inst_65374 + (1));
var tmp65649 = inst_65372;
var tmp65650 = inst_65373;
var tmp65651 = inst_65371;
var inst_65371__$1 = tmp65651;
var inst_65372__$1 = tmp65649;
var inst_65373__$1 = tmp65650;
var inst_65374__$1 = inst_65458;
var state_65568__$1 = (function (){var statearr_65658 = state_65568;
(statearr_65658[(38)] = inst_65457);

(statearr_65658[(11)] = inst_65374__$1);

(statearr_65658[(15)] = inst_65372__$1);

(statearr_65658[(12)] = inst_65373__$1);

(statearr_65658[(16)] = inst_65371__$1);

return statearr_65658;
})();
var statearr_65659_65779 = state_65568__$1;
(statearr_65659_65779[(2)] = null);

(statearr_65659_65779[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65569 === (82))){
var inst_65541 = (state_65568[(2)]);
var state_65568__$1 = state_65568;
var statearr_65660_65780 = state_65568__$1;
(statearr_65660_65780[(2)] = inst_65541);

(statearr_65660_65780[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65569 === (76))){
var inst_65515 = (state_65568[(2)]);
var state_65568__$1 = state_65568;
var statearr_65661_65781 = state_65568__$1;
(statearr_65661_65781[(2)] = inst_65515);

(statearr_65661_65781[(1)] = (75));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65569 === (19))){
var inst_65318 = (state_65568[(28)]);
var inst_65317 = (state_65568[(30)]);
var inst_65362 = (state_65568[(33)]);
var inst_65316 = (state_65568[(29)]);
var inst_65356 = (state_65568[(2)]);
var inst_65357 = cljs.core.get.call(null,inst_65356,new cljs.core.Keyword(null,"env","env",-1815813235));
var inst_65358 = cljs.core.get.call(null,inst_65356,new cljs.core.Keyword(null,"job","job",850873087));
var inst_65359 = new cljs.core.Keyword("dat.reactor","input","dat.reactor/input",498748102).cljs$core$IFn$_invoke$arity$1(inst_65317);
var inst_65360 = onyx_local_rt.api.new_segment.call(null,inst_65357,inst_65359,inst_65317);
var inst_65361 = dat.reactor.onyx.loopback_drain.call(null,inst_65360);
var inst_65362__$1 = onyx_local_rt.api.stop.call(null,inst_65361);
var inst_65367 = (function (){var vec__65309 = inst_65316;
var event = inst_65317;
var port = inst_65318;
var map__65334 = inst_65356;
var env = inst_65357;
var job = inst_65358;
var env_after = inst_65362__$1;
return ((function (vec__65309,event,port,map__65334,env,job,env_after,inst_65318,inst_65317,inst_65362,inst_65316,inst_65356,inst_65357,inst_65358,inst_65359,inst_65360,inst_65361,inst_65362__$1,state_val_65569,c__64826__auto__,map__65306,map__65306__$1,onyx_atom,event_chan,kill_chan){
return (function (p1__64896_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword("onyx","type","onyx/type",1170345418).cljs$core$IFn$_invoke$arity$1(p1__64896_SHARP_),new cljs.core.Keyword(null,"output","output",-1105869043));
});
;})(vec__65309,event,port,map__65334,env,job,env_after,inst_65318,inst_65317,inst_65362,inst_65316,inst_65356,inst_65357,inst_65358,inst_65359,inst_65360,inst_65361,inst_65362__$1,state_val_65569,c__64826__auto__,map__65306,map__65306__$1,onyx_atom,event_chan,kill_chan))
})();
var inst_65368 = new cljs.core.Keyword(null,"catalog","catalog",-439057154).cljs$core$IFn$_invoke$arity$1(inst_65358);
var inst_65369 = cljs.core.filter.call(null,inst_65367,inst_65368);
var inst_65370 = cljs.core.seq.call(null,inst_65369);
var inst_65371 = inst_65370;
var inst_65372 = null;
var inst_65373 = (0);
var inst_65374 = (0);
var state_65568__$1 = (function (){var statearr_65662 = state_65568;
(statearr_65662[(11)] = inst_65374);

(statearr_65662[(15)] = inst_65372);

(statearr_65662[(12)] = inst_65373);

(statearr_65662[(16)] = inst_65371);

(statearr_65662[(33)] = inst_65362__$1);

return statearr_65662;
})();
var statearr_65663_65782 = state_65568__$1;
(statearr_65663_65782[(2)] = null);

(statearr_65663_65782[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65569 === (57))){
var inst_65471 = (state_65568[(7)]);
var inst_65461 = (state_65568[(13)]);
var inst_65471__$1 = cljs.core.first.call(null,inst_65461);
var inst_65473 = (inst_65471__$1 == null);
var inst_65474 = cljs.core.not.call(null,inst_65473);
var state_65568__$1 = (function (){var statearr_65664 = state_65568;
(statearr_65664[(7)] = inst_65471__$1);

return statearr_65664;
})();
if(inst_65474){
var statearr_65665_65783 = state_65568__$1;
(statearr_65665_65783[(1)] = (59));

} else {
var statearr_65666_65784 = state_65568__$1;
(statearr_65666_65784[(1)] = (60));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65569 === (68))){
var inst_65507 = (state_65568[(10)]);
var inst_65506 = (state_65568[(19)]);
var inst_65509 = (inst_65507 < inst_65506);
var inst_65510 = inst_65509;
var state_65568__$1 = state_65568;
if(cljs.core.truth_(inst_65510)){
var statearr_65667_65785 = state_65568__$1;
(statearr_65667_65785[(1)] = (70));

} else {
var statearr_65668_65786 = state_65568__$1;
(statearr_65668_65786[(1)] = (71));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65569 === (11))){
var inst_65335 = (state_65568[(36)]);
var inst_65340 = inst_65335.cljs$lang$protocol_mask$partition0$;
var inst_65341 = (inst_65340 & (64));
var inst_65342 = inst_65335.cljs$core$ISeq$;
var inst_65343 = (cljs.core.PROTOCOL_SENTINEL === inst_65342);
var inst_65344 = (inst_65341) || (inst_65343);
var state_65568__$1 = state_65568;
if(cljs.core.truth_(inst_65344)){
var statearr_65669_65787 = state_65568__$1;
(statearr_65669_65787[(1)] = (14));

} else {
var statearr_65670_65788 = state_65568__$1;
(statearr_65670_65788[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65569 === (9))){
var inst_65318 = (state_65568[(28)]);
var inst_65317 = (state_65568[(30)]);
var inst_65316 = (state_65568[(29)]);
var inst_65325 = (state_65568[(2)]);
var inst_65326 = (function (){var vec__65309 = inst_65316;
var event = inst_65317;
var port = inst_65318;
var e = inst_65325;
return ((function (vec__65309,event,port,e,inst_65318,inst_65317,inst_65316,inst_65325,state_val_65569,c__64826__auto__,map__65306,map__65306__$1,onyx_atom,event_chan,kill_chan){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Exception in reactor go loop"], null);
});
;})(vec__65309,event,port,e,inst_65318,inst_65317,inst_65316,inst_65325,state_val_65569,c__64826__auto__,map__65306,map__65306__$1,onyx_atom,event_chan,kill_chan))
})();
var inst_65327 = (new cljs.core.Delay(inst_65326,null));
var inst_65328 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"dat.reactor.onyx","/tmp/form-init3486417385122683475.clj",78,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_65327,null,-803592108);
var inst_65329 = inst_65325.stack;
var inst_65330 = console.log(inst_65329);
var state_65568__$1 = (function (){var statearr_65671 = state_65568;
(statearr_65671[(39)] = inst_65328);

return statearr_65671;
})();
var statearr_65672_65789 = state_65568__$1;
(statearr_65672_65789[(2)] = inst_65330);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65568__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65569 === (5))){
var inst_65318 = (state_65568[(28)]);
var inst_65317 = (state_65568[(30)]);
var inst_65316 = (state_65568[(29)]);
var inst_65321 = (function (){var vec__65309 = inst_65316;
var event = inst_65317;
var port = inst_65318;
return ((function (vec__65309,event,port,inst_65318,inst_65317,inst_65316,state_val_65569,c__64826__auto__,map__65306,map__65306__$1,onyx_atom,event_chan,kill_chan){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["go-react! received kill-chan signal"], null);
});
;})(vec__65309,event,port,inst_65318,inst_65317,inst_65316,state_val_65569,c__64826__auto__,map__65306,map__65306__$1,onyx_atom,event_chan,kill_chan))
})();
var inst_65322 = (new cljs.core.Delay(inst_65321,null));
var inst_65323 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dat.reactor.onyx","/tmp/form-init3486417385122683475.clj",55,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_65322,null,1987652275);
var state_65568__$1 = state_65568;
var statearr_65673_65790 = state_65568__$1;
(statearr_65673_65790[(2)] = inst_65323);

(statearr_65673_65790[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65569 === (83))){
var inst_65493 = (state_65568[(40)]);
var inst_65531 = (state_65568[(41)]);
var state_65568__$1 = state_65568;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_65568__$1,(86),inst_65493,inst_65531);
} else {
if((state_val_65569 === (14))){
var state_65568__$1 = state_65568;
var statearr_65674_65791 = state_65568__$1;
(statearr_65674_65791[(2)] = true);

(statearr_65674_65791[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65569 === (45))){
var inst_65453 = (state_65568[(2)]);
var state_65568__$1 = state_65568;
var statearr_65675_65792 = state_65568__$1;
(statearr_65675_65792[(2)] = inst_65453);

(statearr_65675_65792[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65569 === (53))){
var inst_65461 = (state_65568[(13)]);
var inst_65463 = cljs.core.chunked_seq_QMARK_.call(null,inst_65461);
var state_65568__$1 = state_65568;
if(inst_65463){
var statearr_65676_65793 = state_65568__$1;
(statearr_65676_65793[(1)] = (56));

} else {
var statearr_65677_65794 = state_65568__$1;
(statearr_65677_65794[(1)] = (57));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65569 === (78))){
var state_65568__$1 = state_65568;
var statearr_65678_65795 = state_65568__$1;
(statearr_65678_65795[(2)] = null);

(statearr_65678_65795[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65569 === (26))){
var state_65568__$1 = state_65568;
var statearr_65679_65796 = state_65568__$1;
(statearr_65679_65796[(2)] = false);

(statearr_65679_65796[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65569 === (16))){
var inst_65348 = (state_65568[(2)]);
var state_65568__$1 = state_65568;
var statearr_65680_65797 = state_65568__$1;
(statearr_65680_65797[(2)] = inst_65348);

(statearr_65680_65797[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65569 === (81))){
var inst_65522 = (state_65568[(17)]);
var inst_65531 = (state_65568[(41)]);
var inst_65531__$1 = cljs.core.first.call(null,inst_65522);
var state_65568__$1 = (function (){var statearr_65681 = state_65568;
(statearr_65681[(41)] = inst_65531__$1);

return statearr_65681;
})();
if(cljs.core.truth_(inst_65531__$1)){
var statearr_65682_65798 = state_65568__$1;
(statearr_65682_65798[(1)] = (83));

} else {
var statearr_65683_65799 = state_65568__$1;
(statearr_65683_65799[(1)] = (84));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65569 === (79))){
var inst_65544 = (state_65568[(2)]);
var state_65568__$1 = state_65568;
var statearr_65684_65800 = state_65568__$1;
(statearr_65684_65800[(2)] = inst_65544);

(statearr_65684_65800[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65569 === (38))){
var inst_65455 = (state_65568[(2)]);
var state_65568__$1 = state_65568;
var statearr_65685_65801 = state_65568__$1;
(statearr_65685_65801[(2)] = inst_65455);

(statearr_65685_65801[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65569 === (30))){
var inst_65393 = (state_65568[(2)]);
var state_65568__$1 = state_65568;
var statearr_65686_65802 = state_65568__$1;
(statearr_65686_65802[(2)] = inst_65393);

(statearr_65686_65802[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65569 === (73))){
var inst_65512 = (state_65568[(8)]);
var inst_65493 = (state_65568[(40)]);
var state_65568__$1 = state_65568;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_65568__$1,(76),inst_65493,inst_65512);
} else {
if((state_val_65569 === (10))){
var inst_65335 = (state_65568[(36)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_65568,(9),new cljs.core.Keyword(null,"default","default",-1987822328),null,(8));
var inst_65335__$1 = cljs.core.deref.call(null,onyx_atom);
var inst_65337 = (inst_65335__$1 == null);
var inst_65338 = cljs.core.not.call(null,inst_65337);
var state_65568__$1 = (function (){var statearr_65687 = state_65568;
(statearr_65687[(36)] = inst_65335__$1);

return statearr_65687;
})();
if(inst_65338){
var statearr_65688_65803 = state_65568__$1;
(statearr_65688_65803[(1)] = (11));

} else {
var statearr_65689_65804 = state_65568__$1;
(statearr_65689_65804[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65569 === (18))){
var inst_65335 = (state_65568[(36)]);
var state_65568__$1 = state_65568;
var statearr_65690_65805 = state_65568__$1;
(statearr_65690_65805[(2)] = inst_65335);

(statearr_65690_65805[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65569 === (52))){
var inst_65443 = (state_65568[(2)]);
var state_65568__$1 = state_65568;
var statearr_65691_65806 = state_65568__$1;
(statearr_65691_65806[(2)] = inst_65443);

(statearr_65691_65806[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65569 === (67))){
var inst_65362 = (state_65568[(33)]);
var inst_65492 = (state_65568[(2)]);
var inst_65493 = cljs.core.get.call(null,inst_65492,new cljs.core.Keyword("dat.reactor","chan","dat.reactor/chan",1738071800));
var inst_65498 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_65499 = new cljs.core.Keyword("onyx","name","onyx/name",1848664427).cljs$core$IFn$_invoke$arity$1(inst_65492);
var inst_65500 = [new cljs.core.Keyword(null,"tasks","tasks",-1754368880),inst_65499,new cljs.core.Keyword(null,"outputs","outputs",-1896513034)];
var inst_65501 = (new cljs.core.PersistentVector(null,3,(5),inst_65498,inst_65500,null));
var inst_65502 = cljs.core.get_in.call(null,inst_65362,inst_65501);
var inst_65503 = cljs.core.seq.call(null,inst_65502);
var inst_65504 = inst_65503;
var inst_65505 = null;
var inst_65506 = (0);
var inst_65507 = (0);
var state_65568__$1 = (function (){var statearr_65692 = state_65568;
(statearr_65692[(9)] = inst_65505);

(statearr_65692[(40)] = inst_65493);

(statearr_65692[(10)] = inst_65507);

(statearr_65692[(19)] = inst_65506);

(statearr_65692[(20)] = inst_65504);

return statearr_65692;
})();
var statearr_65693_65807 = state_65568__$1;
(statearr_65693_65807[(2)] = null);

(statearr_65693_65807[(1)] = (68));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65569 === (71))){
var inst_65522 = (state_65568[(17)]);
var inst_65504 = (state_65568[(20)]);
var inst_65522__$1 = cljs.core.seq.call(null,inst_65504);
var state_65568__$1 = (function (){var statearr_65694 = state_65568;
(statearr_65694[(17)] = inst_65522__$1);

return statearr_65694;
})();
if(inst_65522__$1){
var statearr_65695_65808 = state_65568__$1;
(statearr_65695_65808[(1)] = (77));

} else {
var statearr_65696_65809 = state_65568__$1;
(statearr_65696_65809[(1)] = (78));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65569 === (42))){
var inst_65424 = (state_65568[(2)]);
var state_65568__$1 = state_65568;
var statearr_65697_65810 = state_65568__$1;
(statearr_65697_65810[(2)] = inst_65424);

(statearr_65697_65810[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65569 === (80))){
var inst_65522 = (state_65568[(17)]);
var inst_65526 = cljs.core.chunk_first.call(null,inst_65522);
var inst_65527 = cljs.core.chunk_rest.call(null,inst_65522);
var inst_65528 = cljs.core.count.call(null,inst_65526);
var inst_65504 = inst_65527;
var inst_65505 = inst_65526;
var inst_65506 = inst_65528;
var inst_65507 = (0);
var state_65568__$1 = (function (){var statearr_65698 = state_65568;
(statearr_65698[(9)] = inst_65505);

(statearr_65698[(10)] = inst_65507);

(statearr_65698[(19)] = inst_65506);

(statearr_65698[(20)] = inst_65504);

return statearr_65698;
})();
var statearr_65699_65811 = state_65568__$1;
(statearr_65699_65811[(2)] = null);

(statearr_65699_65811[(1)] = (68));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65569 === (37))){
var inst_65413 = (state_65568[(24)]);
var inst_65431 = (state_65568[(23)]);
var inst_65431__$1 = cljs.core.seq.call(null,inst_65413);
var state_65568__$1 = (function (){var statearr_65700 = state_65568;
(statearr_65700[(23)] = inst_65431__$1);

return statearr_65700;
})();
if(inst_65431__$1){
var statearr_65701_65812 = state_65568__$1;
(statearr_65701_65812[(1)] = (43));

} else {
var statearr_65702_65813 = state_65568__$1;
(statearr_65702_65813[(1)] = (44));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65569 === (63))){
var state_65568__$1 = state_65568;
var statearr_65703_65814 = state_65568__$1;
(statearr_65703_65814[(2)] = false);

(statearr_65703_65814[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65569 === (8))){
var inst_65561 = (state_65568[(2)]);
var state_65568__$1 = (function (){var statearr_65704 = state_65568;
(statearr_65704[(42)] = inst_65561);

return statearr_65704;
})();
var statearr_65705_65815 = state_65568__$1;
(statearr_65705_65815[(2)] = null);

(statearr_65705_65815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65569 === (49))){
var inst_65402 = (state_65568[(22)]);
var inst_65440 = (state_65568[(37)]);
var state_65568__$1 = state_65568;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_65568__$1,(52),inst_65402,inst_65440);
} else {
if((state_val_65569 === (84))){
var state_65568__$1 = state_65568;
var statearr_65706_65816 = state_65568__$1;
(statearr_65706_65816[(2)] = null);

(statearr_65706_65816[(1)] = (85));


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
}
}
}
}
});})(c__64826__auto__,map__65306,map__65306__$1,onyx_atom,event_chan,kill_chan))
;
return ((function (switch__64803__auto__,c__64826__auto__,map__65306,map__65306__$1,onyx_atom,event_chan,kill_chan){
return (function() {
var dat$reactor$onyx$go_react_BANG__$_state_machine__64804__auto__ = null;
var dat$reactor$onyx$go_react_BANG__$_state_machine__64804__auto____0 = (function (){
var statearr_65710 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_65710[(0)] = dat$reactor$onyx$go_react_BANG__$_state_machine__64804__auto__);

(statearr_65710[(1)] = (1));

return statearr_65710;
});
var dat$reactor$onyx$go_react_BANG__$_state_machine__64804__auto____1 = (function (state_65568){
while(true){
var ret_value__64805__auto__ = (function (){try{while(true){
var result__64806__auto__ = switch__64803__auto__.call(null,state_65568);
if(cljs.core.keyword_identical_QMARK_.call(null,result__64806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64806__auto__;
}
break;
}
}catch (e65711){if((e65711 instanceof Object)){
var ex__64807__auto__ = e65711;
var statearr_65712_65817 = state_65568;
(statearr_65712_65817[(5)] = ex__64807__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65568);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65711;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__64805__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65818 = state_65568;
state_65568 = G__65818;
continue;
} else {
return ret_value__64805__auto__;
}
break;
}
});
dat$reactor$onyx$go_react_BANG__$_state_machine__64804__auto__ = function(state_65568){
switch(arguments.length){
case 0:
return dat$reactor$onyx$go_react_BANG__$_state_machine__64804__auto____0.call(this);
case 1:
return dat$reactor$onyx$go_react_BANG__$_state_machine__64804__auto____1.call(this,state_65568);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
dat$reactor$onyx$go_react_BANG__$_state_machine__64804__auto__.cljs$core$IFn$_invoke$arity$0 = dat$reactor$onyx$go_react_BANG__$_state_machine__64804__auto____0;
dat$reactor$onyx$go_react_BANG__$_state_machine__64804__auto__.cljs$core$IFn$_invoke$arity$1 = dat$reactor$onyx$go_react_BANG__$_state_machine__64804__auto____1;
return dat$reactor$onyx$go_react_BANG__$_state_machine__64804__auto__;
})()
;})(switch__64803__auto__,c__64826__auto__,map__65306,map__65306__$1,onyx_atom,event_chan,kill_chan))
})();
var state__64828__auto__ = (function (){var statearr_65713 = f__64827__auto__.call(null);
(statearr_65713[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__64826__auto__);

return statearr_65713;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__64828__auto__);
});})(c__64826__auto__,map__65306,map__65306__$1,onyx_atom,event_chan,kill_chan))
);

return c__64826__auto__;
});
dat.reactor.onyx.always = cljs.core.constantly.call(null,true);
goog.exportSymbol('dat.reactor.onyx.always', dat.reactor.onyx.always);
/**
 * flow-control - 
 */
dat.reactor.onyx.not_nil_QMARK_ = (function dat$reactor$onyx$not_nil_QMARK_(event,old_seg,seg,all_new){
return !((seg == null));
});
goog.exportSymbol('dat.reactor.onyx.not_nil_QMARK_', dat.reactor.onyx.not_nil_QMARK_);
dat.reactor.onyx.handler_chan_BANG_ = (function dat$reactor$onyx$handler_chan_BANG_(var_args){
var args__62582__auto__ = [];
var len__62575__auto___65845 = arguments.length;
var i__62576__auto___65846 = (0);
while(true){
if((i__62576__auto___65846 < len__62575__auto___65845)){
args__62582__auto__.push((arguments[i__62576__auto___65846]));

var G__65847 = (i__62576__auto___65846 + (1));
i__62576__auto___65846 = G__65847;
continue;
} else {
}
break;
}

var argseq__62583__auto__ = ((((2) < args__62582__auto__.length))?(new cljs.core.IndexedSeq(args__62582__auto__.slice((2)),(0),null)):null);
return dat.reactor.onyx.handler_chan_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__62583__auto__);
});

dat.reactor.onyx.handler_chan_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (handler,handler_fn,p__65822){
var map__65823 = p__65822;
var map__65823__$1 = ((((!((map__65823 == null)))?((((map__65823.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65823.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65823):map__65823);
var chan = cljs.core.get.call(null,map__65823__$1,new cljs.core.Keyword(null,"chan","chan",-2103021695));
var chan__$1 = (function (){var or__61290__auto__ = chan;
if(cljs.core.truth_(or__61290__auto__)){
return or__61290__auto__;
} else {
return cljs.core.async.chan.call(null);
}
})();
var c__64826__auto___65848 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__64826__auto___65848,chan__$1,map__65823,map__65823__$1,chan){
return (function (){
var f__64827__auto__ = (function (){var switch__64803__auto__ = ((function (c__64826__auto___65848,chan__$1,map__65823,map__65823__$1,chan){
return (function (state_65833){
var state_val_65834 = (state_65833[(1)]);
if((state_val_65834 === (1))){
var state_65833__$1 = state_65833;
var statearr_65835_65849 = state_65833__$1;
(statearr_65835_65849[(2)] = null);

(statearr_65835_65849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65834 === (2))){
var state_65833__$1 = state_65833;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65833__$1,(4),chan__$1);
} else {
if((state_val_65834 === (3))){
var inst_65831 = (state_65833[(2)]);
var state_65833__$1 = state_65833;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65833__$1,inst_65831);
} else {
if((state_val_65834 === (4))){
var inst_65827 = (state_65833[(2)]);
var inst_65828 = handler_fn.call(null,handler,inst_65827);
var state_65833__$1 = (function (){var statearr_65836 = state_65833;
(statearr_65836[(7)] = inst_65828);

return statearr_65836;
})();
var statearr_65837_65850 = state_65833__$1;
(statearr_65837_65850[(2)] = null);

(statearr_65837_65850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__64826__auto___65848,chan__$1,map__65823,map__65823__$1,chan))
;
return ((function (switch__64803__auto__,c__64826__auto___65848,chan__$1,map__65823,map__65823__$1,chan){
return (function() {
var dat$reactor$onyx$state_machine__64804__auto__ = null;
var dat$reactor$onyx$state_machine__64804__auto____0 = (function (){
var statearr_65841 = [null,null,null,null,null,null,null,null];
(statearr_65841[(0)] = dat$reactor$onyx$state_machine__64804__auto__);

(statearr_65841[(1)] = (1));

return statearr_65841;
});
var dat$reactor$onyx$state_machine__64804__auto____1 = (function (state_65833){
while(true){
var ret_value__64805__auto__ = (function (){try{while(true){
var result__64806__auto__ = switch__64803__auto__.call(null,state_65833);
if(cljs.core.keyword_identical_QMARK_.call(null,result__64806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64806__auto__;
}
break;
}
}catch (e65842){if((e65842 instanceof Object)){
var ex__64807__auto__ = e65842;
var statearr_65843_65851 = state_65833;
(statearr_65843_65851[(5)] = ex__64807__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65833);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65842;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__64805__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65852 = state_65833;
state_65833 = G__65852;
continue;
} else {
return ret_value__64805__auto__;
}
break;
}
});
dat$reactor$onyx$state_machine__64804__auto__ = function(state_65833){
switch(arguments.length){
case 0:
return dat$reactor$onyx$state_machine__64804__auto____0.call(this);
case 1:
return dat$reactor$onyx$state_machine__64804__auto____1.call(this,state_65833);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
dat$reactor$onyx$state_machine__64804__auto__.cljs$core$IFn$_invoke$arity$0 = dat$reactor$onyx$state_machine__64804__auto____0;
dat$reactor$onyx$state_machine__64804__auto__.cljs$core$IFn$_invoke$arity$1 = dat$reactor$onyx$state_machine__64804__auto____1;
return dat$reactor$onyx$state_machine__64804__auto__;
})()
;})(switch__64803__auto__,c__64826__auto___65848,chan__$1,map__65823,map__65823__$1,chan))
})();
var state__64828__auto__ = (function (){var statearr_65844 = f__64827__auto__.call(null);
(statearr_65844[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__64826__auto___65848);

return statearr_65844;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__64828__auto__);
});})(c__64826__auto___65848,chan__$1,map__65823,map__65823__$1,chan))
);


return chan__$1;
});

dat.reactor.onyx.handler_chan_BANG_.cljs$lang$maxFixedArity = (2);

dat.reactor.onyx.handler_chan_BANG_.cljs$lang$applyTo = (function (seq65819){
var G__65820 = cljs.core.first.call(null,seq65819);
var seq65819__$1 = cljs.core.next.call(null,seq65819);
var G__65821 = cljs.core.first.call(null,seq65819__$1);
var seq65819__$2 = cljs.core.next.call(null,seq65819__$1);
return dat.reactor.onyx.handler_chan_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__65820,G__65821,seq65819__$2);
});

dat.reactor.onyx.legacy_segment_BANG_ = (function dat$reactor$onyx$legacy_segment_BANG_(p__65853,p__65854){
var map__65864 = p__65853;
var map__65864__$1 = ((((!((map__65864 == null)))?((((map__65864.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65864.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65864):map__65864);
var app = map__65864__$1;
var conn = cljs.core.get.call(null,map__65864__$1,new cljs.core.Keyword(null,"conn","conn",278309663));
var map__65865 = p__65854;
var map__65865__$1 = ((((!((map__65865 == null)))?((((map__65865.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65865.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65865):map__65865);
var seg = map__65865__$1;
var event = cljs.core.get.call(null,map__65865__$1,new cljs.core.Keyword(null,"event","event",301435442));
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dat.reactor.onyx","/tmp/form-init3486417385122683475.clj",108,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (map__65864,map__65864__$1,app,conn,map__65865,map__65865__$1,seg,event){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["process legacy event",event], null);
});})(map__65864,map__65864__$1,app,conn,map__65865,map__65865__$1,seg,event))
,null)),null,281060738);

var final_meta = cljs.core.atom.call(null,null);
cljs.core.swap_BANG_.call(null,conn,((function (final_meta,map__65864,map__65864__$1,app,conn,map__65865,map__65865__$1,seg,event){
return (function (current_db){
try{var new_db = dat.reactor.handle_event_BANG_.call(null,app,current_db,event);
cljs.core.reset_BANG_.call(null,final_meta,cljs.core.meta.call(null,new_db));

return cljs.core.with_meta.call(null,new_db,cljs.core.dissoc.call(null,cljs.core.meta.call(null,new_db),new cljs.core.Keyword("dat.reactor","effects","dat.reactor/effects",21173161)));
}catch (e65868){var e = e65868;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"dat.reactor.onyx","/tmp/form-init3486417385122683475.clj",120,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,final_meta,map__65864,map__65864__$1,app,conn,map__65865,map__65865__$1,seg,event){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Exception in reactor swap for legacy event: ",event], null);
});})(e,final_meta,map__65864,map__65864__$1,app,conn,map__65865,map__65865__$1,seg,event))
,null)),null,-982901784);

console.log(e.stack);

return current_db;
}});})(final_meta,map__65864,map__65864__$1,app,conn,map__65865,map__65865__$1,seg,event))
);

var temp__6738__auto__ = cljs.core.seq.call(null,new cljs.core.Keyword("dat.reactor","effects","dat.reactor/effects",21173161).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,final_meta)));
if(temp__6738__auto__){
var effects = temp__6738__auto__;
var seq__65869 = cljs.core.seq.call(null,effects);
var chunk__65870 = null;
var count__65871 = (0);
var i__65872 = (0);
while(true){
if((i__65872 < count__65871)){
var effect = cljs.core._nth.call(null,chunk__65870,i__65872);
dat.reactor.execute_effect_BANG_.call(null,app,(function (){var or__61290__auto__ = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,effect));
if(cljs.core.truth_(or__61290__auto__)){
return or__61290__auto__;
} else {
return cljs.core.deref.call(null,conn);
}
})(),effect);

var G__65873 = seq__65869;
var G__65874 = chunk__65870;
var G__65875 = count__65871;
var G__65876 = (i__65872 + (1));
seq__65869 = G__65873;
chunk__65870 = G__65874;
count__65871 = G__65875;
i__65872 = G__65876;
continue;
} else {
var temp__6738__auto____$1 = cljs.core.seq.call(null,seq__65869);
if(temp__6738__auto____$1){
var seq__65869__$1 = temp__6738__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65869__$1)){
var c__62265__auto__ = cljs.core.chunk_first.call(null,seq__65869__$1);
var G__65877 = cljs.core.chunk_rest.call(null,seq__65869__$1);
var G__65878 = c__62265__auto__;
var G__65879 = cljs.core.count.call(null,c__62265__auto__);
var G__65880 = (0);
seq__65869 = G__65877;
chunk__65870 = G__65878;
count__65871 = G__65879;
i__65872 = G__65880;
continue;
} else {
var effect = cljs.core.first.call(null,seq__65869__$1);
dat.reactor.execute_effect_BANG_.call(null,app,(function (){var or__61290__auto__ = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,effect));
if(cljs.core.truth_(or__61290__auto__)){
return or__61290__auto__;
} else {
return cljs.core.deref.call(null,conn);
}
})(),effect);

var G__65881 = cljs.core.next.call(null,seq__65869__$1);
var G__65882 = null;
var G__65883 = (0);
var G__65884 = (0);
seq__65869 = G__65881;
chunk__65870 = G__65882;
count__65871 = G__65883;
i__65872 = G__65884;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
dat.reactor.onyx.go_new_inputs_BANG_ = (function dat$reactor$onyx$go_new_inputs_BANG_(p__65887,event_chan){
var map__65946 = p__65887;
var map__65946__$1 = ((((!((map__65946 == null)))?((((map__65946.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65946.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65946):map__65946);
var onyx__$1 = map__65946__$1;
var job = cljs.core.get.call(null,map__65946__$1,new cljs.core.Keyword(null,"job","job",850873087));
var running_chans = cljs.core.get.call(null,map__65946__$1,new cljs.core.Keyword(null,"running-chans","running-chans",-1708113388));
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"dat.reactor.onyx","/tmp/form-init3486417385122683475.clj",131,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (map__65946,map__65946__$1,onyx__$1,job,running_chans){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["go-new-inputs"], null);
});})(map__65946,map__65946__$1,onyx__$1,job,running_chans))
,null)),null,-1132495223);

var new_input_tasks = cljs.core.sequence.call(null,cljs.core.comp.call(null,cljs.core.filter.call(null,((function (map__65946,map__65946__$1,onyx__$1,job,running_chans){
return (function (p1__65885_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword("onyx","type","onyx/type",1170345418).cljs$core$IFn$_invoke$arity$1(p1__65885_SHARP_),new cljs.core.Keyword(null,"input","input",556931961));
});})(map__65946,map__65946__$1,onyx__$1,job,running_chans))
),cljs.core.filter.call(null,new cljs.core.Keyword("dat.reactor","chan","dat.reactor/chan",1738071800)),cljs.core.remove.call(null,((function (map__65946,map__65946__$1,onyx__$1,job,running_chans){
return (function (p1__65886_SHARP_){
return cljs.core.contains_QMARK_.call(null,running_chans,new cljs.core.Keyword("dat.reactor","chan","dat.reactor/chan",1738071800).cljs$core$IFn$_invoke$arity$1(p1__65886_SHARP_));
});})(map__65946,map__65946__$1,onyx__$1,job,running_chans))
)),new cljs.core.Keyword(null,"catalog","catalog",-439057154).cljs$core$IFn$_invoke$arity$1(job));
var seq__65948_66004 = cljs.core.seq.call(null,new_input_tasks);
var chunk__65949_66005 = null;
var count__65950_66006 = (0);
var i__65951_66007 = (0);
while(true){
if((i__65951_66007 < count__65950_66006)){
var map__65952_66008 = cljs.core._nth.call(null,chunk__65949_66005,i__65951_66007);
var map__65952_66009__$1 = ((((!((map__65952_66008 == null)))?((((map__65952_66008.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65952_66008.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65952_66008):map__65952_66008);
var task_66010 = map__65952_66009__$1;
var chan_66011 = cljs.core.get.call(null,map__65952_66009__$1,new cljs.core.Keyword("dat.reactor","chan","dat.reactor/chan",1738071800));
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"dat.reactor.onyx","/tmp/form-init3486417385122683475.clj",140,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__65948_66004,chunk__65949_66005,count__65950_66006,i__65951_66007,map__65952_66008,map__65952_66009__$1,task_66010,chan_66011,new_input_tasks,map__65946,map__65946__$1,onyx__$1,job,running_chans){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["listening for inputs task",new cljs.core.Keyword("onyx","name","onyx/name",1848664427).cljs$core$IFn$_invoke$arity$1(task_66010)], null);
});})(seq__65948_66004,chunk__65949_66005,count__65950_66006,i__65951_66007,map__65952_66008,map__65952_66009__$1,task_66010,chan_66011,new_input_tasks,map__65946,map__65946__$1,onyx__$1,job,running_chans))
,null)),null,-225626225);

var c__64826__auto___66012 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__65948_66004,chunk__65949_66005,count__65950_66006,i__65951_66007,c__64826__auto___66012,map__65952_66008,map__65952_66009__$1,task_66010,chan_66011,new_input_tasks,map__65946,map__65946__$1,onyx__$1,job,running_chans){
return (function (){
var f__64827__auto__ = (function (){var switch__64803__auto__ = ((function (seq__65948_66004,chunk__65949_66005,count__65950_66006,i__65951_66007,c__64826__auto___66012,map__65952_66008,map__65952_66009__$1,task_66010,chan_66011,new_input_tasks,map__65946,map__65946__$1,onyx__$1,job,running_chans){
return (function (state_65966){
var state_val_65967 = (state_65966[(1)]);
if((state_val_65967 === (1))){
var state_65966__$1 = state_65966;
var statearr_65968_66013 = state_65966__$1;
(statearr_65968_66013[(2)] = null);

(statearr_65968_66013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65967 === (2))){
var state_65966__$1 = state_65966;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65966__$1,(4),chan_66011);
} else {
if((state_val_65967 === (3))){
var inst_65964 = (state_65966[(2)]);
var state_65966__$1 = state_65966;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65966__$1,inst_65964);
} else {
if((state_val_65967 === (4))){
var inst_65956 = (state_65966[(2)]);
var inst_65957 = dat.reactor.onyx.legacy_event__GT_seg.call(null,inst_65956);
var inst_65958 = new cljs.core.Keyword("onyx","name","onyx/name",1848664427).cljs$core$IFn$_invoke$arity$1(task_66010);
var inst_65959 = cljs.core.assoc.call(null,inst_65957,new cljs.core.Keyword("dat.reactor","input","dat.reactor/input",498748102),inst_65958);
var state_65966__$1 = state_65966;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_65966__$1,(5),event_chan,inst_65959);
} else {
if((state_val_65967 === (5))){
var inst_65961 = (state_65966[(2)]);
var state_65966__$1 = (function (){var statearr_65969 = state_65966;
(statearr_65969[(7)] = inst_65961);

return statearr_65969;
})();
var statearr_65970_66014 = state_65966__$1;
(statearr_65970_66014[(2)] = null);

(statearr_65970_66014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(seq__65948_66004,chunk__65949_66005,count__65950_66006,i__65951_66007,c__64826__auto___66012,map__65952_66008,map__65952_66009__$1,task_66010,chan_66011,new_input_tasks,map__65946,map__65946__$1,onyx__$1,job,running_chans))
;
return ((function (seq__65948_66004,chunk__65949_66005,count__65950_66006,i__65951_66007,switch__64803__auto__,c__64826__auto___66012,map__65952_66008,map__65952_66009__$1,task_66010,chan_66011,new_input_tasks,map__65946,map__65946__$1,onyx__$1,job,running_chans){
return (function() {
var dat$reactor$onyx$go_new_inputs_BANG__$_state_machine__64804__auto__ = null;
var dat$reactor$onyx$go_new_inputs_BANG__$_state_machine__64804__auto____0 = (function (){
var statearr_65974 = [null,null,null,null,null,null,null,null];
(statearr_65974[(0)] = dat$reactor$onyx$go_new_inputs_BANG__$_state_machine__64804__auto__);

(statearr_65974[(1)] = (1));

return statearr_65974;
});
var dat$reactor$onyx$go_new_inputs_BANG__$_state_machine__64804__auto____1 = (function (state_65966){
while(true){
var ret_value__64805__auto__ = (function (){try{while(true){
var result__64806__auto__ = switch__64803__auto__.call(null,state_65966);
if(cljs.core.keyword_identical_QMARK_.call(null,result__64806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64806__auto__;
}
break;
}
}catch (e65975){if((e65975 instanceof Object)){
var ex__64807__auto__ = e65975;
var statearr_65976_66015 = state_65966;
(statearr_65976_66015[(5)] = ex__64807__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65966);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65975;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__64805__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66016 = state_65966;
state_65966 = G__66016;
continue;
} else {
return ret_value__64805__auto__;
}
break;
}
});
dat$reactor$onyx$go_new_inputs_BANG__$_state_machine__64804__auto__ = function(state_65966){
switch(arguments.length){
case 0:
return dat$reactor$onyx$go_new_inputs_BANG__$_state_machine__64804__auto____0.call(this);
case 1:
return dat$reactor$onyx$go_new_inputs_BANG__$_state_machine__64804__auto____1.call(this,state_65966);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
dat$reactor$onyx$go_new_inputs_BANG__$_state_machine__64804__auto__.cljs$core$IFn$_invoke$arity$0 = dat$reactor$onyx$go_new_inputs_BANG__$_state_machine__64804__auto____0;
dat$reactor$onyx$go_new_inputs_BANG__$_state_machine__64804__auto__.cljs$core$IFn$_invoke$arity$1 = dat$reactor$onyx$go_new_inputs_BANG__$_state_machine__64804__auto____1;
return dat$reactor$onyx$go_new_inputs_BANG__$_state_machine__64804__auto__;
})()
;})(seq__65948_66004,chunk__65949_66005,count__65950_66006,i__65951_66007,switch__64803__auto__,c__64826__auto___66012,map__65952_66008,map__65952_66009__$1,task_66010,chan_66011,new_input_tasks,map__65946,map__65946__$1,onyx__$1,job,running_chans))
})();
var state__64828__auto__ = (function (){var statearr_65977 = f__64827__auto__.call(null);
(statearr_65977[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__64826__auto___66012);

return statearr_65977;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__64828__auto__);
});})(seq__65948_66004,chunk__65949_66005,count__65950_66006,i__65951_66007,c__64826__auto___66012,map__65952_66008,map__65952_66009__$1,task_66010,chan_66011,new_input_tasks,map__65946,map__65946__$1,onyx__$1,job,running_chans))
);


var G__66017 = seq__65948_66004;
var G__66018 = chunk__65949_66005;
var G__66019 = count__65950_66006;
var G__66020 = (i__65951_66007 + (1));
seq__65948_66004 = G__66017;
chunk__65949_66005 = G__66018;
count__65950_66006 = G__66019;
i__65951_66007 = G__66020;
continue;
} else {
var temp__6738__auto___66021 = cljs.core.seq.call(null,seq__65948_66004);
if(temp__6738__auto___66021){
var seq__65948_66022__$1 = temp__6738__auto___66021;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65948_66022__$1)){
var c__62265__auto___66023 = cljs.core.chunk_first.call(null,seq__65948_66022__$1);
var G__66024 = cljs.core.chunk_rest.call(null,seq__65948_66022__$1);
var G__66025 = c__62265__auto___66023;
var G__66026 = cljs.core.count.call(null,c__62265__auto___66023);
var G__66027 = (0);
seq__65948_66004 = G__66024;
chunk__65949_66005 = G__66025;
count__65950_66006 = G__66026;
i__65951_66007 = G__66027;
continue;
} else {
var map__65978_66028 = cljs.core.first.call(null,seq__65948_66022__$1);
var map__65978_66029__$1 = ((((!((map__65978_66028 == null)))?((((map__65978_66028.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65978_66028.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65978_66028):map__65978_66028);
var task_66030 = map__65978_66029__$1;
var chan_66031 = cljs.core.get.call(null,map__65978_66029__$1,new cljs.core.Keyword("dat.reactor","chan","dat.reactor/chan",1738071800));
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"dat.reactor.onyx","/tmp/form-init3486417385122683475.clj",140,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__65948_66004,chunk__65949_66005,count__65950_66006,i__65951_66007,map__65978_66028,map__65978_66029__$1,task_66030,chan_66031,seq__65948_66022__$1,temp__6738__auto___66021,new_input_tasks,map__65946,map__65946__$1,onyx__$1,job,running_chans){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["listening for inputs task",new cljs.core.Keyword("onyx","name","onyx/name",1848664427).cljs$core$IFn$_invoke$arity$1(task_66030)], null);
});})(seq__65948_66004,chunk__65949_66005,count__65950_66006,i__65951_66007,map__65978_66028,map__65978_66029__$1,task_66030,chan_66031,seq__65948_66022__$1,temp__6738__auto___66021,new_input_tasks,map__65946,map__65946__$1,onyx__$1,job,running_chans))
,null)),null,1009065219);

var c__64826__auto___66032 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__65948_66004,chunk__65949_66005,count__65950_66006,i__65951_66007,c__64826__auto___66032,map__65978_66028,map__65978_66029__$1,task_66030,chan_66031,seq__65948_66022__$1,temp__6738__auto___66021,new_input_tasks,map__65946,map__65946__$1,onyx__$1,job,running_chans){
return (function (){
var f__64827__auto__ = (function (){var switch__64803__auto__ = ((function (seq__65948_66004,chunk__65949_66005,count__65950_66006,i__65951_66007,c__64826__auto___66032,map__65978_66028,map__65978_66029__$1,task_66030,chan_66031,seq__65948_66022__$1,temp__6738__auto___66021,new_input_tasks,map__65946,map__65946__$1,onyx__$1,job,running_chans){
return (function (state_65992){
var state_val_65993 = (state_65992[(1)]);
if((state_val_65993 === (1))){
var state_65992__$1 = state_65992;
var statearr_65994_66033 = state_65992__$1;
(statearr_65994_66033[(2)] = null);

(statearr_65994_66033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65993 === (2))){
var state_65992__$1 = state_65992;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65992__$1,(4),chan_66031);
} else {
if((state_val_65993 === (3))){
var inst_65990 = (state_65992[(2)]);
var state_65992__$1 = state_65992;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65992__$1,inst_65990);
} else {
if((state_val_65993 === (4))){
var inst_65982 = (state_65992[(2)]);
var inst_65983 = dat.reactor.onyx.legacy_event__GT_seg.call(null,inst_65982);
var inst_65984 = new cljs.core.Keyword("onyx","name","onyx/name",1848664427).cljs$core$IFn$_invoke$arity$1(task_66030);
var inst_65985 = cljs.core.assoc.call(null,inst_65983,new cljs.core.Keyword("dat.reactor","input","dat.reactor/input",498748102),inst_65984);
var state_65992__$1 = state_65992;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_65992__$1,(5),event_chan,inst_65985);
} else {
if((state_val_65993 === (5))){
var inst_65987 = (state_65992[(2)]);
var state_65992__$1 = (function (){var statearr_65995 = state_65992;
(statearr_65995[(7)] = inst_65987);

return statearr_65995;
})();
var statearr_65996_66034 = state_65992__$1;
(statearr_65996_66034[(2)] = null);

(statearr_65996_66034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(seq__65948_66004,chunk__65949_66005,count__65950_66006,i__65951_66007,c__64826__auto___66032,map__65978_66028,map__65978_66029__$1,task_66030,chan_66031,seq__65948_66022__$1,temp__6738__auto___66021,new_input_tasks,map__65946,map__65946__$1,onyx__$1,job,running_chans))
;
return ((function (seq__65948_66004,chunk__65949_66005,count__65950_66006,i__65951_66007,switch__64803__auto__,c__64826__auto___66032,map__65978_66028,map__65978_66029__$1,task_66030,chan_66031,seq__65948_66022__$1,temp__6738__auto___66021,new_input_tasks,map__65946,map__65946__$1,onyx__$1,job,running_chans){
return (function() {
var dat$reactor$onyx$go_new_inputs_BANG__$_state_machine__64804__auto__ = null;
var dat$reactor$onyx$go_new_inputs_BANG__$_state_machine__64804__auto____0 = (function (){
var statearr_66000 = [null,null,null,null,null,null,null,null];
(statearr_66000[(0)] = dat$reactor$onyx$go_new_inputs_BANG__$_state_machine__64804__auto__);

(statearr_66000[(1)] = (1));

return statearr_66000;
});
var dat$reactor$onyx$go_new_inputs_BANG__$_state_machine__64804__auto____1 = (function (state_65992){
while(true){
var ret_value__64805__auto__ = (function (){try{while(true){
var result__64806__auto__ = switch__64803__auto__.call(null,state_65992);
if(cljs.core.keyword_identical_QMARK_.call(null,result__64806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64806__auto__;
}
break;
}
}catch (e66001){if((e66001 instanceof Object)){
var ex__64807__auto__ = e66001;
var statearr_66002_66035 = state_65992;
(statearr_66002_66035[(5)] = ex__64807__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65992);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66001;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__64805__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66036 = state_65992;
state_65992 = G__66036;
continue;
} else {
return ret_value__64805__auto__;
}
break;
}
});
dat$reactor$onyx$go_new_inputs_BANG__$_state_machine__64804__auto__ = function(state_65992){
switch(arguments.length){
case 0:
return dat$reactor$onyx$go_new_inputs_BANG__$_state_machine__64804__auto____0.call(this);
case 1:
return dat$reactor$onyx$go_new_inputs_BANG__$_state_machine__64804__auto____1.call(this,state_65992);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
dat$reactor$onyx$go_new_inputs_BANG__$_state_machine__64804__auto__.cljs$core$IFn$_invoke$arity$0 = dat$reactor$onyx$go_new_inputs_BANG__$_state_machine__64804__auto____0;
dat$reactor$onyx$go_new_inputs_BANG__$_state_machine__64804__auto__.cljs$core$IFn$_invoke$arity$1 = dat$reactor$onyx$go_new_inputs_BANG__$_state_machine__64804__auto____1;
return dat$reactor$onyx$go_new_inputs_BANG__$_state_machine__64804__auto__;
})()
;})(seq__65948_66004,chunk__65949_66005,count__65950_66006,i__65951_66007,switch__64803__auto__,c__64826__auto___66032,map__65978_66028,map__65978_66029__$1,task_66030,chan_66031,seq__65948_66022__$1,temp__6738__auto___66021,new_input_tasks,map__65946,map__65946__$1,onyx__$1,job,running_chans))
})();
var state__64828__auto__ = (function (){var statearr_66003 = f__64827__auto__.call(null);
(statearr_66003[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__64826__auto___66032);

return statearr_66003;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__64828__auto__);
});})(seq__65948_66004,chunk__65949_66005,count__65950_66006,i__65951_66007,c__64826__auto___66032,map__65978_66028,map__65978_66029__$1,task_66030,chan_66031,seq__65948_66022__$1,temp__6738__auto___66021,new_input_tasks,map__65946,map__65946__$1,onyx__$1,job,running_chans))
);


var G__66037 = cljs.core.next.call(null,seq__65948_66022__$1);
var G__66038 = null;
var G__66039 = (0);
var G__66040 = (0);
seq__65948_66004 = G__66037;
chunk__65949_66005 = G__66038;
count__65950_66006 = G__66039;
i__65951_66007 = G__66040;
continue;
}
} else {
}
}
break;
}

return cljs.core.assoc.call(null,onyx__$1,new cljs.core.Keyword(null,"running-chans","running-chans",-1708113388),cljs.core.into.call(null,(function (){var or__61290__auto__ = running_chans;
if(cljs.core.truth_(or__61290__auto__)){
return or__61290__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),cljs.core.map.call(null,new cljs.core.Keyword("dat.reactor","chan","dat.reactor/chan",1738071800)),new_input_tasks));
});
dat.reactor.onyx.log_segment_BANG_ = (function dat$reactor$onyx$log_segment_BANG_(log_fn,seg){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dat.reactor.onyx","/tmp/form-init3486417385122683475.clj",154,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["logging segment...",seg], null);
}),null)),null,-1180599741);
});
/**
 * Expands reactor's onyx job to include the given job fragment. The job-key is used to allow overwriting a job fragment previously registered. This function has side effects, but is semi-idempotent (you can safely call multiple times with the same fragment).
 */
dat.reactor.onyx.expand_job_BANG_ = (function dat$reactor$onyx$expand_job_BANG_(p__66041,job_key,fragment){
var map__66047 = p__66041;
var map__66047__$1 = ((((!((map__66047 == null)))?((((map__66047.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66047.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66047):map__66047);
var reactor = map__66047__$1;
var event_chan = cljs.core.get.call(null,map__66047__$1,new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912));
var onyx_atom = cljs.core.get.call(null,map__66047__$1,new cljs.core.Keyword(null,"onyx-atom","onyx-atom",1198478119));
return cljs.core.swap_BANG_.call(null,onyx_atom,((function (map__66047,map__66047__$1,reactor,event_chan,onyx_atom){
return (function (p__66049){
var map__66050 = p__66049;
var map__66050__$1 = ((((!((map__66050 == null)))?((((map__66050.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66050.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66050):map__66050);
var onyx__$1 = map__66050__$1;
var job_fragments = cljs.core.get.call(null,map__66050__$1,new cljs.core.Keyword(null,"job-fragments","job-fragments",-1483444774));
var fragments = cljs.core.assoc.call(null,(function (){var or__61290__auto__ = job_fragments;
if(cljs.core.truth_(or__61290__auto__)){
return or__61290__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),job_key,fragment);
var job = cljs.core.transduce.call(null,cljs.core.map.call(null,cljs.core.second),dat.reactor.onyx.conj_job,fragments);
return dat.reactor.onyx.go_new_inputs_BANG_.call(null,cljs.core.assoc.call(null,onyx__$1,new cljs.core.Keyword(null,"job-fragments","job-fragments",-1483444774),fragments,new cljs.core.Keyword(null,"job","job",850873087),job,new cljs.core.Keyword(null,"env","env",-1815813235),onyx_local_rt.api.init.call(null,job)),event_chan);
});})(map__66047,map__66047__$1,reactor,event_chan,onyx_atom))
);
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
dat.reactor.onyx.OnyxReactor = (function (onyx_atom,event_chan,kill_chan,__meta,__extmap,__hash){
this.onyx_atom = onyx_atom;
this.event_chan = event_chan;
this.kill_chan = kill_chan;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
dat.reactor.onyx.OnyxReactor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__62029__auto__,k__62030__auto__){
var self__ = this;
var this__62029__auto____$1 = this;
return this__62029__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__62030__auto__,null);
});

dat.reactor.onyx.OnyxReactor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__62031__auto__,k66053,else__62032__auto__){
var self__ = this;
var this__62031__auto____$1 = this;
var G__66055 = k66053;
var G__66055__$1 = (((G__66055 instanceof cljs.core.Keyword))?G__66055.fqn:null);
switch (G__66055__$1) {
case "onyx-atom":
return self__.onyx_atom;

break;
case "event-chan":
return self__.event_chan;

break;
case "kill-chan":
return self__.kill_chan;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k66053,else__62032__auto__);

}
});

dat.reactor.onyx.OnyxReactor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__62043__auto__,writer__62044__auto__,opts__62045__auto__){
var self__ = this;
var this__62043__auto____$1 = this;
var pr_pair__62046__auto__ = ((function (this__62043__auto____$1){
return (function (keyval__62047__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__62044__auto__,cljs.core.pr_writer,""," ","",opts__62045__auto__,keyval__62047__auto__);
});})(this__62043__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__62044__auto__,pr_pair__62046__auto__,"#dat.reactor.onyx.OnyxReactor{",", ","}",opts__62045__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"onyx-atom","onyx-atom",1198478119),self__.onyx_atom],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912),self__.event_chan],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kill-chan","kill-chan",-1563670254),self__.kill_chan],null))], null),self__.__extmap));
});

dat.reactor.onyx.OnyxReactor.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

dat.reactor.onyx.OnyxReactor.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__66052){
var self__ = this;
var G__66052__$1 = this;
return (new cljs.core.RecordIter((0),G__66052__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"onyx-atom","onyx-atom",1198478119),new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912),new cljs.core.Keyword(null,"kill-chan","kill-chan",-1563670254)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

dat.reactor.onyx.OnyxReactor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__62027__auto__){
var self__ = this;
var this__62027__auto____$1 = this;
return self__.__meta;
});

dat.reactor.onyx.OnyxReactor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__62023__auto__){
var self__ = this;
var this__62023__auto____$1 = this;
return (new dat.reactor.onyx.OnyxReactor(self__.onyx_atom,self__.event_chan,self__.kill_chan,self__.__meta,self__.__extmap,self__.__hash));
});

dat.reactor.onyx.OnyxReactor.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__62033__auto__){
var self__ = this;
var this__62033__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

dat.reactor.onyx.OnyxReactor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__62024__auto__){
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

dat.reactor.onyx.OnyxReactor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__62025__auto__,other__62026__auto__){
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

dat.reactor.onyx.OnyxReactor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__62038__auto__,k__62039__auto__){
var self__ = this;
var this__62038__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"onyx-atom","onyx-atom",1198478119),null,new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912),null,new cljs.core.Keyword(null,"kill-chan","kill-chan",-1563670254),null], null), null),k__62039__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__62038__auto____$1),self__.__meta),k__62039__auto__);
} else {
return (new dat.reactor.onyx.OnyxReactor(self__.onyx_atom,self__.event_chan,self__.kill_chan,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__62039__auto__)),null));
}
});

dat.reactor.onyx.OnyxReactor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__62036__auto__,k__62037__auto__,G__66052){
var self__ = this;
var this__62036__auto____$1 = this;
var pred__66056 = cljs.core.keyword_identical_QMARK_;
var expr__66057 = k__62037__auto__;
if(cljs.core.truth_(pred__66056.call(null,new cljs.core.Keyword(null,"onyx-atom","onyx-atom",1198478119),expr__66057))){
return (new dat.reactor.onyx.OnyxReactor(G__66052,self__.event_chan,self__.kill_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__66056.call(null,new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912),expr__66057))){
return (new dat.reactor.onyx.OnyxReactor(self__.onyx_atom,G__66052,self__.kill_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__66056.call(null,new cljs.core.Keyword(null,"kill-chan","kill-chan",-1563670254),expr__66057))){
return (new dat.reactor.onyx.OnyxReactor(self__.onyx_atom,self__.event_chan,G__66052,self__.__meta,self__.__extmap,null));
} else {
return (new dat.reactor.onyx.OnyxReactor(self__.onyx_atom,self__.event_chan,self__.kill_chan,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__62037__auto__,G__66052),null));
}
}
}
});

dat.reactor.onyx.OnyxReactor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__62041__auto__){
var self__ = this;
var this__62041__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"onyx-atom","onyx-atom",1198478119),self__.onyx_atom],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912),self__.event_chan],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kill-chan","kill-chan",-1563670254),self__.kill_chan],null))], null),self__.__extmap));
});

dat.reactor.onyx.OnyxReactor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__62028__auto__,G__66052){
var self__ = this;
var this__62028__auto____$1 = this;
return (new dat.reactor.onyx.OnyxReactor(self__.onyx_atom,self__.event_chan,self__.kill_chan,G__66052,self__.__extmap,self__.__hash));
});

dat.reactor.onyx.OnyxReactor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__62034__auto__,entry__62035__auto__){
var self__ = this;
var this__62034__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__62035__auto__)){
return this__62034__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__62035__auto__,(0)),cljs.core._nth.call(null,entry__62035__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__62034__auto____$1,entry__62035__auto__);
}
});

dat.reactor.onyx.OnyxReactor.prototype.com$stuartsierra$component$Lifecycle$ = cljs.core.PROTOCOL_SENTINEL;

dat.reactor.onyx.OnyxReactor.prototype.com$stuartsierra$component$Lifecycle$start$arity$1 = (function (reactor){
var self__ = this;
var reactor__$1 = this;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dat.reactor.onyx","/tmp/form-init3486417385122683475.clj",181,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (reactor__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Starting OnyxReactor Component"], null);
});})(reactor__$1))
,null)),null,-583903794);

var onyx_batch_size = (20);
var running_QMARK_ = self__.kill_chan;
var reactor__$2 = cljs.core.assoc.call(null,reactor__$1,new cljs.core.Keyword(null,"onyx-atom","onyx-atom",1198478119),(function (){var or__61290__auto__ = self__.onyx_atom;
if(cljs.core.truth_(or__61290__auto__)){
return or__61290__auto__;
} else {
return cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
})(),new cljs.core.Keyword(null,"kill-chan","kill-chan",-1563670254),(function (){var or__61290__auto__ = self__.kill_chan;
if(cljs.core.truth_(or__61290__auto__)){
return or__61290__auto__;
} else {
return cljs.core.async.chan.call(null);
}
})(),new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912),(function (){var or__61290__auto__ = self__.event_chan;
if(cljs.core.truth_(or__61290__auto__)){
return or__61290__auto__;
} else {
return cljs.core.async.chan.call(null);
}
})());
dat.reactor.onyx.expand_job_BANG_.call(null,reactor__$2,new cljs.core.Keyword("dat.reactor.onyx","base-job","dat.reactor.onyx/base-job",-1691841981),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"catalog","catalog",-439057154),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("onyx","type","onyx/type",1170345418),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword("onyx","name","onyx/name",1848664427),new cljs.core.Keyword("dat.reactor","loop-in","dat.reactor/loop-in",65022138),new cljs.core.Keyword("onyx","batch-size","onyx/batch-size",1209135837),onyx_batch_size], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("onyx","type","onyx/type",1170345418),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword("onyx","name","onyx/name",1848664427),new cljs.core.Keyword("dat.reactor","loopback","dat.reactor/loopback",715606267),new cljs.core.Keyword("onyx","batch-size","onyx/batch-size",1209135837),onyx_batch_size], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("onyx","type","onyx/type",1170345418),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword("onyx","batch-size","onyx/batch-size",1209135837),onyx_batch_size,new cljs.core.Keyword("dat.reactor","chan","dat.reactor/chan",1738071800),dat.reactor.onyx.handler_chan_BANG_.call(null,null,dat.reactor.onyx.log_segment_BANG_),new cljs.core.Keyword("onyx","name","onyx/name",1848664427),new cljs.core.Keyword("dat.reactor","log","dat.reactor/log",266201969)], null)], null)], null));

if(cljs.core.not.call(null,running_QMARK_)){
dat.reactor.onyx.go_react_BANG_.call(null,reactor__$2);
} else {
}

return reactor__$2;
});

dat.reactor.onyx.OnyxReactor.prototype.com$stuartsierra$component$Lifecycle$stop$arity$1 = (function (reactor){
var self__ = this;
var reactor__$1 = this;
if(cljs.core.truth_(self__.kill_chan)){
cljs.core.async.put_BANG_.call(null,self__.kill_chan,new cljs.core.Keyword(null,"kill","kill",-12335575));
} else {
}

return cljs.core.assoc.call(null,reactor__$1,new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912),null,new cljs.core.Keyword(null,"onyx-atom","onyx-atom",1198478119),null,new cljs.core.Keyword(null,"kill-chan","kill-chan",-1563670254),null);
});

dat.reactor.onyx.OnyxReactor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"onyx-atom","onyx-atom",-1455957650,null),new cljs.core.Symbol(null,"event-chan","event-chan",58153615,null),new cljs.core.Symbol(null,"kill-chan","kill-chan",76861273,null)], null);
});

dat.reactor.onyx.OnyxReactor.cljs$lang$type = true;

dat.reactor.onyx.OnyxReactor.cljs$lang$ctorPrSeq = (function (this__62065__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"dat.reactor.onyx/OnyxReactor");
});

dat.reactor.onyx.OnyxReactor.cljs$lang$ctorPrWriter = (function (this__62065__auto__,writer__62066__auto__){
return cljs.core._write.call(null,writer__62066__auto__,"dat.reactor.onyx/OnyxReactor");
});

dat.reactor.onyx.__GT_OnyxReactor = (function dat$reactor$onyx$__GT_OnyxReactor(onyx_atom,event_chan,kill_chan){
return (new dat.reactor.onyx.OnyxReactor(onyx_atom,event_chan,kill_chan,null,null,null));
});

dat.reactor.onyx.map__GT_OnyxReactor = (function dat$reactor$onyx$map__GT_OnyxReactor(G__66054){
return (new dat.reactor.onyx.OnyxReactor(new cljs.core.Keyword(null,"onyx-atom","onyx-atom",1198478119).cljs$core$IFn$_invoke$arity$1(G__66054),new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912).cljs$core$IFn$_invoke$arity$1(G__66054),new cljs.core.Keyword(null,"kill-chan","kill-chan",-1563670254).cljs$core$IFn$_invoke$arity$1(G__66054),null,cljs.core.dissoc.call(null,G__66054,new cljs.core.Keyword(null,"onyx-atom","onyx-atom",1198478119),new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912),new cljs.core.Keyword(null,"kill-chan","kill-chan",-1563670254)),null));
});

/**
 * If :app is specified, it is reacted on. If not, it is computed as a map of {:dispatcher :reactor :conn}
 */
dat.reactor.onyx.new_onyx_reactor = (function dat$reactor$onyx$new_onyx_reactor(var_args){
var args66060 = [];
var len__62575__auto___66063 = arguments.length;
var i__62576__auto___66064 = (0);
while(true){
if((i__62576__auto___66064 < len__62575__auto___66063)){
args66060.push((arguments[i__62576__auto___66064]));

var G__66065 = (i__62576__auto___66064 + (1));
i__62576__auto___66064 = G__66065;
continue;
} else {
}
break;
}

var G__66062 = args66060.length;
switch (G__66062) {
case 1:
return dat.reactor.onyx.new_onyx_reactor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return dat.reactor.onyx.new_onyx_reactor.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args66060.length)].join('')));

}
});

dat.reactor.onyx.new_onyx_reactor.cljs$core$IFn$_invoke$arity$1 = (function (options){
return dat.reactor.onyx.map__GT_OnyxReactor.call(null,options);
});

dat.reactor.onyx.new_onyx_reactor.cljs$core$IFn$_invoke$arity$0 = (function (){
return dat.reactor.onyx.new_onyx_reactor.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

dat.reactor.onyx.new_onyx_reactor.cljs$lang$maxFixedArity = 1;


//# sourceMappingURL=onyx.js.map?rel=1506321313183