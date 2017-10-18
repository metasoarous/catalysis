// Compiled by ClojureScript 1.9.542 {}
goog.provide('kabel.middleware.handler');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('superv.async');
goog.require('cljs.core.async');
/**
 * Applies given callback functions to messages on [in out] channels and passes
 *   through the return value of the callback. The callbacks have to return a
 *   go-channel.
 */
kabel.middleware.handler.handler = (function kabel$middleware$handler$handler(cb_in,cb_out,p__71033){
var vec__71392 = p__71033;
var S = cljs.core.nth.call(null,vec__71392,(0),null);
var peer = cljs.core.nth.call(null,vec__71392,(1),null);
var vec__71395 = cljs.core.nth.call(null,vec__71392,(2),null);
var in$ = cljs.core.nth.call(null,vec__71395,(0),null);
var out = cljs.core.nth.call(null,vec__71395,(1),null);
var new_in = cljs.core.async.chan.call(null);
var new_out = cljs.core.async.chan.call(null);
var c__67032__auto___71750 = superv.async.check_supervisor.call(null,superv.async.S);
var id__67033__auto___71751 = superv.async._register_go.call(null,S,cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","loop","clojure.core/loop",-1797836771,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null),cljs.core.list(new cljs.core.Symbol(null,"<?","<?",-1929864530,null),new cljs.core.Symbol(null,"S","S",-1387142461,null),new cljs.core.Symbol(null,"in","in",109346662,null))], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"i","i",253690212,null),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol(null,"when-let","when-let",-1383043480,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null),cljs.core.list(new cljs.core.Symbol(null,"<?","<?",-1929864530,null),new cljs.core.Symbol(null,"S","S",-1387142461,null),cljs.core.list(new cljs.core.Symbol(null,"cb-in","cb-in",-495996051,null),new cljs.core.Symbol(null,"i","i",253690212,null)))], null),cljs.core.list(new cljs.core.Symbol(null,">?",">?",-766996309,null),new cljs.core.Symbol(null,"S","S",-1387142461,null),new cljs.core.Symbol(null,"new-in","new-in",970651751,null),new cljs.core.Symbol(null,"i","i",253690212,null))),cljs.core.list(new cljs.core.Symbol(null,"recur","recur",1202958259,null),cljs.core.list(new cljs.core.Symbol(null,"<?","<?",-1929864530,null),new cljs.core.Symbol(null,"S","S",-1387142461,null),new cljs.core.Symbol(null,"in","in",109346662,null)))),cljs.core.list(new cljs.core.Symbol(null,"close!","close!",-438778971,null),new cljs.core.Symbol(null,"new-in","new-in",970651751,null))))));
var c__64826__auto___71752 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__64826__auto___71752,c__67032__auto___71750,id__67033__auto___71751,new_in,new_out,vec__71392,S,peer,vec__71395,in$,out){
return (function (){
var f__64827__auto__ = (function (){var switch__64803__auto__ = ((function (c__64826__auto___71752,c__67032__auto___71750,id__67033__auto___71751,new_in,new_out,vec__71392,S,peer,vec__71395,in$,out){
return (function (state_71518){
var state_val_71519 = (state_71518[(1)]);
if((state_val_71519 === (7))){
var inst_71401 = (state_71518[(7)]);
var inst_71409 = (state_71518[(2)]);
var state_71518__$1 = (function (){var statearr_71520 = state_71518;
(statearr_71520[(8)] = inst_71409);

return statearr_71520;
})();
var statearr_71521_71753 = state_71518__$1;
(statearr_71521_71753[(2)] = inst_71401);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71518__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71519 === (20))){
var inst_71447 = (state_71518[(9)]);
var state_71518__$1 = state_71518;
var statearr_71522_71754 = state_71518__$1;
(statearr_71522_71754[(2)] = inst_71447);

(statearr_71522_71754[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71519 === (27))){
var inst_71458 = (state_71518[(10)]);
var state_71518__$1 = state_71518;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_71518__$1,(29),new_in,inst_71458);
} else {
if((state_val_71519 === (1))){
var state_71518__$1 = state_71518;
var statearr_71523_71755 = state_71518__$1;
(statearr_71523_71755[(2)] = null);

(statearr_71523_71755[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71519 === (24))){
var inst_71490 = (state_71518[(11)]);
var inst_71486 = (state_71518[(2)]);
var inst_71490__$1 = superv.async._abort.call(null,S);
var inst_71491 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_71492 = [inst_71490__$1,in$];
var inst_71493 = (new cljs.core.PersistentVector(null,2,(5),inst_71491,inst_71492,null));
var state_71518__$1 = (function (){var statearr_71524 = state_71518;
(statearr_71524[(12)] = inst_71486);

(statearr_71524[(11)] = inst_71490__$1);

return statearr_71524;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_71518__$1,(30),inst_71493,new cljs.core.Keyword(null,"priority","priority",1431093715),new cljs.core.Keyword(null,"true","true",-1114210334));
} else {
if((state_val_71519 === (4))){
var inst_71401 = (state_71518[(7)]);
var inst_71401__$1 = (state_71518[(2)]);
var inst_71402 = cljs.core.ex_data.call(null,inst_71401__$1);
var inst_71403 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_71402);
var inst_71404 = cljs.core._EQ_.call(null,inst_71403,new cljs.core.Keyword(null,"aborted","aborted",1775972619));
var state_71518__$1 = (function (){var statearr_71525 = state_71518;
(statearr_71525[(7)] = inst_71401__$1);

return statearr_71525;
})();
if(inst_71404){
var statearr_71526_71756 = state_71518__$1;
(statearr_71526_71756[(1)] = (5));

} else {
var statearr_71527_71757 = state_71518__$1;
(statearr_71527_71757[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71519 === (15))){
var inst_71440 = (state_71518[(13)]);
var inst_71434 = (state_71518[(14)]);
var inst_71440__$1 = superv.async._abort.call(null,S);
var inst_71441 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_71442 = cb_in.call(null,inst_71434);
var inst_71443 = [inst_71440__$1,inst_71442];
var inst_71444 = (new cljs.core.PersistentVector(null,2,(5),inst_71441,inst_71443,null));
var state_71518__$1 = (function (){var statearr_71528 = state_71518;
(statearr_71528[(13)] = inst_71440__$1);

return statearr_71528;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_71518__$1,(18),inst_71444,new cljs.core.Keyword(null,"priority","priority",1431093715),new cljs.core.Keyword(null,"true","true",-1114210334));
} else {
if((state_val_71519 === (21))){
var inst_71458 = (state_71518[(10)]);
var inst_71457 = (state_71518[(2)]);
var inst_71458__$1 = superv.async.throw_if_exception.call(null,S,inst_71457);
var state_71518__$1 = (function (){var statearr_71529 = state_71518;
(statearr_71529[(10)] = inst_71458__$1);

return statearr_71529;
})();
if(cljs.core.truth_(inst_71458__$1)){
var statearr_71530_71758 = state_71518__$1;
(statearr_71530_71758[(1)] = (22));

} else {
var statearr_71531_71759 = state_71518__$1;
(statearr_71531_71759[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71519 === (31))){
var inst_71500 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_71501 = [new cljs.core.Keyword(null,"aborted","aborted",1775972619)];
var inst_71502 = cljs.core.PersistentHashMap.fromArrays(inst_71500,inst_71501);
var inst_71503 = cljs.core.ex_info.call(null,"Aborted operations",inst_71502);
var state_71518__$1 = state_71518;
var statearr_71532_71760 = state_71518__$1;
(statearr_71532_71760[(2)] = inst_71503);

(statearr_71532_71760[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71519 === (32))){
var inst_71496 = (state_71518[(15)]);
var state_71518__$1 = state_71518;
var statearr_71533_71761 = state_71518__$1;
(statearr_71533_71761[(2)] = inst_71496);

(statearr_71533_71761[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71519 === (33))){
var inst_71506 = (state_71518[(2)]);
var inst_71507 = superv.async.throw_if_exception.call(null,S,inst_71506);
var inst_71434 = inst_71507;
var state_71518__$1 = (function (){var statearr_71534 = state_71518;
(statearr_71534[(14)] = inst_71434);

return statearr_71534;
})();
var statearr_71535_71762 = state_71518__$1;
(statearr_71535_71762[(2)] = null);

(statearr_71535_71762[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71519 === (13))){
var inst_71434 = (state_71518[(14)]);
var state_71518__$1 = state_71518;
if(cljs.core.truth_(inst_71434)){
var statearr_71536_71763 = state_71518__$1;
(statearr_71536_71763[(1)] = (15));

} else {
var statearr_71537_71764 = state_71518__$1;
(statearr_71537_71764[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71519 === (22))){
var inst_71463 = (state_71518[(16)]);
var inst_71463__$1 = superv.async._abort.call(null,S);
var inst_71464 = cljs.core.async.timeout.call(null,(0));
var inst_71465 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_71466 = [inst_71463__$1,inst_71464];
var inst_71467 = (new cljs.core.PersistentVector(null,2,(5),inst_71465,inst_71466,null));
var state_71518__$1 = (function (){var statearr_71538 = state_71518;
(statearr_71538[(16)] = inst_71463__$1);

return statearr_71538;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_71518__$1,(25),inst_71467,new cljs.core.Keyword(null,"priority","priority",1431093715),true);
} else {
if((state_val_71519 === (29))){
var inst_71480 = (state_71518[(2)]);
var state_71518__$1 = state_71518;
var statearr_71539_71765 = state_71518__$1;
(statearr_71539_71765[(2)] = inst_71480);

(statearr_71539_71765[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71519 === (6))){
var inst_71401 = (state_71518[(7)]);
var inst_71407 = superv.async._track_exception.call(null,S,inst_71401);
var state_71518__$1 = state_71518;
var statearr_71540_71766 = state_71518__$1;
(statearr_71540_71766[(2)] = inst_71407);

(statearr_71540_71766[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71519 === (28))){
var inst_71482 = (state_71518[(2)]);
var inst_71483 = superv.async.throw_if_exception.call(null,S,inst_71482);
var state_71518__$1 = state_71518;
var statearr_71541_71767 = state_71518__$1;
(statearr_71541_71767[(2)] = inst_71483);

(statearr_71541_71767[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71519 === (25))){
var inst_71463 = (state_71518[(16)]);
var inst_71469 = (state_71518[(2)]);
var inst_71470 = cljs.core.nth.call(null,inst_71469,(0),null);
var inst_71471 = cljs.core.nth.call(null,inst_71469,(1),null);
var inst_71472 = cljs.core._EQ_.call(null,inst_71471,inst_71463);
var state_71518__$1 = (function (){var statearr_71542 = state_71518;
(statearr_71542[(17)] = inst_71470);

return statearr_71542;
})();
if(inst_71472){
var statearr_71543_71768 = state_71518__$1;
(statearr_71543_71768[(1)] = (26));

} else {
var statearr_71544_71769 = state_71518__$1;
(statearr_71544_71769[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71519 === (17))){
var inst_71512 = (state_71518[(2)]);
var state_71518__$1 = state_71518;
var statearr_71545_71770 = state_71518__$1;
(statearr_71545_71770[(2)] = inst_71512);

(statearr_71545_71770[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71519 === (3))){
var inst_71398 = (state_71518[(2)]);
var inst_71399 = superv.async._unregister_go.call(null,S,id__67033__auto___71751);
var state_71518__$1 = (function (){var statearr_71546 = state_71518;
(statearr_71546[(18)] = inst_71398);

(statearr_71546[(19)] = inst_71399);

return statearr_71546;
})();
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71518__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71519 === (12))){
var inst_71432 = (state_71518[(2)]);
var inst_71433 = superv.async.throw_if_exception.call(null,S,inst_71432);
var inst_71434 = inst_71433;
var state_71518__$1 = (function (){var statearr_71547 = state_71518;
(statearr_71547[(14)] = inst_71434);

return statearr_71547;
})();
var statearr_71548_71771 = state_71518__$1;
(statearr_71548_71771[(2)] = null);

(statearr_71548_71771[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71519 === (2))){
var inst_71516 = (state_71518[(2)]);
var state_71518__$1 = state_71518;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71518__$1,inst_71516);
} else {
if((state_val_71519 === (23))){
var state_71518__$1 = state_71518;
var statearr_71549_71772 = state_71518__$1;
(statearr_71549_71772[(2)] = null);

(statearr_71549_71772[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71519 === (19))){
var inst_71451 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_71452 = [new cljs.core.Keyword(null,"aborted","aborted",1775972619)];
var inst_71453 = cljs.core.PersistentHashMap.fromArrays(inst_71451,inst_71452);
var inst_71454 = cljs.core.ex_info.call(null,"Aborted operations",inst_71453);
var state_71518__$1 = state_71518;
var statearr_71550_71773 = state_71518__$1;
(statearr_71550_71773[(2)] = inst_71454);

(statearr_71550_71773[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71519 === (11))){
var inst_71422 = (state_71518[(20)]);
var state_71518__$1 = state_71518;
var statearr_71551_71774 = state_71518__$1;
(statearr_71551_71774[(2)] = inst_71422);

(statearr_71551_71774[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71519 === (9))){
var inst_71416 = (state_71518[(21)]);
var inst_71421 = (state_71518[(2)]);
var inst_71422 = cljs.core.nth.call(null,inst_71421,(0),null);
var inst_71423 = cljs.core.nth.call(null,inst_71421,(1),null);
var inst_71424 = cljs.core._EQ_.call(null,inst_71423,inst_71416);
var state_71518__$1 = (function (){var statearr_71552 = state_71518;
(statearr_71552[(20)] = inst_71422);

return statearr_71552;
})();
if(inst_71424){
var statearr_71553_71775 = state_71518__$1;
(statearr_71553_71775[(1)] = (10));

} else {
var statearr_71554_71776 = state_71518__$1;
(statearr_71554_71776[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71519 === (5))){
var state_71518__$1 = state_71518;
var statearr_71555_71777 = state_71518__$1;
(statearr_71555_71777[(2)] = null);

(statearr_71555_71777[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71519 === (14))){
var inst_71514 = (state_71518[(2)]);
var state_71518__$1 = state_71518;
var statearr_71556_71778 = state_71518__$1;
(statearr_71556_71778[(2)] = inst_71514);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71518__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71519 === (26))){
var inst_71474 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_71475 = [new cljs.core.Keyword(null,"aborted","aborted",1775972619)];
var inst_71476 = cljs.core.PersistentHashMap.fromArrays(inst_71474,inst_71475);
var inst_71477 = cljs.core.ex_info.call(null,"Aborted operations",inst_71476);
var state_71518__$1 = state_71518;
var statearr_71557_71779 = state_71518__$1;
(statearr_71557_71779[(2)] = inst_71477);

(statearr_71557_71779[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71519 === (16))){
var inst_71510 = cljs.core.async.close_BANG_.call(null,new_in);
var state_71518__$1 = state_71518;
var statearr_71558_71780 = state_71518__$1;
(statearr_71558_71780[(2)] = inst_71510);

(statearr_71558_71780[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71519 === (30))){
var inst_71490 = (state_71518[(11)]);
var inst_71495 = (state_71518[(2)]);
var inst_71496 = cljs.core.nth.call(null,inst_71495,(0),null);
var inst_71497 = cljs.core.nth.call(null,inst_71495,(1),null);
var inst_71498 = cljs.core._EQ_.call(null,inst_71497,inst_71490);
var state_71518__$1 = (function (){var statearr_71559 = state_71518;
(statearr_71559[(15)] = inst_71496);

return statearr_71559;
})();
if(inst_71498){
var statearr_71560_71781 = state_71518__$1;
(statearr_71560_71781[(1)] = (31));

} else {
var statearr_71561_71782 = state_71518__$1;
(statearr_71561_71782[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71519 === (10))){
var inst_71426 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_71427 = [new cljs.core.Keyword(null,"aborted","aborted",1775972619)];
var inst_71428 = cljs.core.PersistentHashMap.fromArrays(inst_71426,inst_71427);
var inst_71429 = cljs.core.ex_info.call(null,"Aborted operations",inst_71428);
var state_71518__$1 = state_71518;
var statearr_71562_71783 = state_71518__$1;
(statearr_71562_71783[(2)] = inst_71429);

(statearr_71562_71783[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71519 === (18))){
var inst_71440 = (state_71518[(13)]);
var inst_71446 = (state_71518[(2)]);
var inst_71447 = cljs.core.nth.call(null,inst_71446,(0),null);
var inst_71448 = cljs.core.nth.call(null,inst_71446,(1),null);
var inst_71449 = cljs.core._EQ_.call(null,inst_71448,inst_71440);
var state_71518__$1 = (function (){var statearr_71563 = state_71518;
(statearr_71563[(9)] = inst_71447);

return statearr_71563;
})();
if(inst_71449){
var statearr_71564_71784 = state_71518__$1;
(statearr_71564_71784[(1)] = (19));

} else {
var statearr_71565_71785 = state_71518__$1;
(statearr_71565_71785[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71519 === (8))){
var inst_71416 = (state_71518[(21)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_71518,(4),Error,(3),(2));
var inst_71416__$1 = superv.async._abort.call(null,S);
var inst_71417 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_71418 = [inst_71416__$1,in$];
var inst_71419 = (new cljs.core.PersistentVector(null,2,(5),inst_71417,inst_71418,null));
var state_71518__$1 = (function (){var statearr_71566 = state_71518;
(statearr_71566[(21)] = inst_71416__$1);

return statearr_71566;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_71518__$1,(9),inst_71419,new cljs.core.Keyword(null,"priority","priority",1431093715),new cljs.core.Keyword(null,"true","true",-1114210334));
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
});})(c__64826__auto___71752,c__67032__auto___71750,id__67033__auto___71751,new_in,new_out,vec__71392,S,peer,vec__71395,in$,out))
;
return ((function (switch__64803__auto__,c__64826__auto___71752,c__67032__auto___71750,id__67033__auto___71751,new_in,new_out,vec__71392,S,peer,vec__71395,in$,out){
return (function() {
var kabel$middleware$handler$handler_$_state_machine__64804__auto__ = null;
var kabel$middleware$handler$handler_$_state_machine__64804__auto____0 = (function (){
var statearr_71570 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71570[(0)] = kabel$middleware$handler$handler_$_state_machine__64804__auto__);

(statearr_71570[(1)] = (1));

return statearr_71570;
});
var kabel$middleware$handler$handler_$_state_machine__64804__auto____1 = (function (state_71518){
while(true){
var ret_value__64805__auto__ = (function (){try{while(true){
var result__64806__auto__ = switch__64803__auto__.call(null,state_71518);
if(cljs.core.keyword_identical_QMARK_.call(null,result__64806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64806__auto__;
}
break;
}
}catch (e71571){if((e71571 instanceof Object)){
var ex__64807__auto__ = e71571;
var statearr_71572_71786 = state_71518;
(statearr_71572_71786[(5)] = ex__64807__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71518);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71571;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__64805__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71787 = state_71518;
state_71518 = G__71787;
continue;
} else {
return ret_value__64805__auto__;
}
break;
}
});
kabel$middleware$handler$handler_$_state_machine__64804__auto__ = function(state_71518){
switch(arguments.length){
case 0:
return kabel$middleware$handler$handler_$_state_machine__64804__auto____0.call(this);
case 1:
return kabel$middleware$handler$handler_$_state_machine__64804__auto____1.call(this,state_71518);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
kabel$middleware$handler$handler_$_state_machine__64804__auto__.cljs$core$IFn$_invoke$arity$0 = kabel$middleware$handler$handler_$_state_machine__64804__auto____0;
kabel$middleware$handler$handler_$_state_machine__64804__auto__.cljs$core$IFn$_invoke$arity$1 = kabel$middleware$handler$handler_$_state_machine__64804__auto____1;
return kabel$middleware$handler$handler_$_state_machine__64804__auto__;
})()
;})(switch__64803__auto__,c__64826__auto___71752,c__67032__auto___71750,id__67033__auto___71751,new_in,new_out,vec__71392,S,peer,vec__71395,in$,out))
})();
var state__64828__auto__ = (function (){var statearr_71573 = f__64827__auto__.call(null);
(statearr_71573[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__64826__auto___71752);

return statearr_71573;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__64828__auto__);
});})(c__64826__auto___71752,c__67032__auto___71750,id__67033__auto___71751,new_in,new_out,vec__71392,S,peer,vec__71395,in$,out))
);


var c__67032__auto___71788 = superv.async.check_supervisor.call(null,superv.async.S);
var id__67033__auto___71789 = superv.async._register_go.call(null,S,cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","loop","clojure.core/loop",-1797836771,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"o","o",290524299,null),cljs.core.list(new cljs.core.Symbol(null,"<?","<?",-1929864530,null),new cljs.core.Symbol(null,"S","S",-1387142461,null),new cljs.core.Symbol(null,"new-out","new-out",255826518,null))], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"o","o",290524299,null),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol(null,"when-let","when-let",-1383043480,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"o","o",290524299,null),cljs.core.list(new cljs.core.Symbol(null,"<?","<?",-1929864530,null),new cljs.core.Symbol(null,"S","S",-1387142461,null),cljs.core.list(new cljs.core.Symbol(null,"cb-out","cb-out",211512254,null),new cljs.core.Symbol(null,"o","o",290524299,null)))], null),cljs.core.list(new cljs.core.Symbol(null,">?",">?",-766996309,null),new cljs.core.Symbol(null,"S","S",-1387142461,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"o","o",290524299,null))),cljs.core.list(new cljs.core.Symbol(null,"recur","recur",1202958259,null),cljs.core.list(new cljs.core.Symbol(null,"<?","<?",-1929864530,null),new cljs.core.Symbol(null,"S","S",-1387142461,null),new cljs.core.Symbol(null,"new-out","new-out",255826518,null)))),cljs.core.list(new cljs.core.Symbol(null,"close!","close!",-438778971,null),new cljs.core.Symbol(null,"new-out","new-out",255826518,null))))));
var c__64826__auto___71790 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__64826__auto___71790,c__67032__auto___71788,id__67033__auto___71789,new_in,new_out,vec__71392,S,peer,vec__71395,in$,out){
return (function (){
var f__64827__auto__ = (function (){var switch__64803__auto__ = ((function (c__64826__auto___71790,c__67032__auto___71788,id__67033__auto___71789,new_in,new_out,vec__71392,S,peer,vec__71395,in$,out){
return (function (state_71694){
var state_val_71695 = (state_71694[(1)]);
if((state_val_71695 === (7))){
var inst_71577 = (state_71694[(7)]);
var inst_71585 = (state_71694[(2)]);
var state_71694__$1 = (function (){var statearr_71696 = state_71694;
(statearr_71696[(8)] = inst_71585);

return statearr_71696;
})();
var statearr_71697_71791 = state_71694__$1;
(statearr_71697_71791[(2)] = inst_71577);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71694__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71695 === (20))){
var inst_71623 = (state_71694[(9)]);
var state_71694__$1 = state_71694;
var statearr_71698_71792 = state_71694__$1;
(statearr_71698_71792[(2)] = inst_71623);

(statearr_71698_71792[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71695 === (27))){
var inst_71634 = (state_71694[(10)]);
var state_71694__$1 = state_71694;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_71694__$1,(29),out,inst_71634);
} else {
if((state_val_71695 === (1))){
var state_71694__$1 = state_71694;
var statearr_71699_71793 = state_71694__$1;
(statearr_71699_71793[(2)] = null);

(statearr_71699_71793[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71695 === (24))){
var inst_71666 = (state_71694[(11)]);
var inst_71662 = (state_71694[(2)]);
var inst_71666__$1 = superv.async._abort.call(null,S);
var inst_71667 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_71668 = [inst_71666__$1,new_out];
var inst_71669 = (new cljs.core.PersistentVector(null,2,(5),inst_71667,inst_71668,null));
var state_71694__$1 = (function (){var statearr_71700 = state_71694;
(statearr_71700[(11)] = inst_71666__$1);

(statearr_71700[(12)] = inst_71662);

return statearr_71700;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_71694__$1,(30),inst_71669,new cljs.core.Keyword(null,"priority","priority",1431093715),new cljs.core.Keyword(null,"true","true",-1114210334));
} else {
if((state_val_71695 === (4))){
var inst_71577 = (state_71694[(7)]);
var inst_71577__$1 = (state_71694[(2)]);
var inst_71578 = cljs.core.ex_data.call(null,inst_71577__$1);
var inst_71579 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_71578);
var inst_71580 = cljs.core._EQ_.call(null,inst_71579,new cljs.core.Keyword(null,"aborted","aborted",1775972619));
var state_71694__$1 = (function (){var statearr_71701 = state_71694;
(statearr_71701[(7)] = inst_71577__$1);

return statearr_71701;
})();
if(inst_71580){
var statearr_71702_71794 = state_71694__$1;
(statearr_71702_71794[(1)] = (5));

} else {
var statearr_71703_71795 = state_71694__$1;
(statearr_71703_71795[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71695 === (15))){
var inst_71616 = (state_71694[(13)]);
var inst_71610 = (state_71694[(14)]);
var inst_71616__$1 = superv.async._abort.call(null,S);
var inst_71617 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_71618 = cb_out.call(null,inst_71610);
var inst_71619 = [inst_71616__$1,inst_71618];
var inst_71620 = (new cljs.core.PersistentVector(null,2,(5),inst_71617,inst_71619,null));
var state_71694__$1 = (function (){var statearr_71704 = state_71694;
(statearr_71704[(13)] = inst_71616__$1);

return statearr_71704;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_71694__$1,(18),inst_71620,new cljs.core.Keyword(null,"priority","priority",1431093715),new cljs.core.Keyword(null,"true","true",-1114210334));
} else {
if((state_val_71695 === (21))){
var inst_71634 = (state_71694[(10)]);
var inst_71633 = (state_71694[(2)]);
var inst_71634__$1 = superv.async.throw_if_exception.call(null,S,inst_71633);
var state_71694__$1 = (function (){var statearr_71705 = state_71694;
(statearr_71705[(10)] = inst_71634__$1);

return statearr_71705;
})();
if(cljs.core.truth_(inst_71634__$1)){
var statearr_71706_71796 = state_71694__$1;
(statearr_71706_71796[(1)] = (22));

} else {
var statearr_71707_71797 = state_71694__$1;
(statearr_71707_71797[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71695 === (31))){
var inst_71676 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_71677 = [new cljs.core.Keyword(null,"aborted","aborted",1775972619)];
var inst_71678 = cljs.core.PersistentHashMap.fromArrays(inst_71676,inst_71677);
var inst_71679 = cljs.core.ex_info.call(null,"Aborted operations",inst_71678);
var state_71694__$1 = state_71694;
var statearr_71708_71798 = state_71694__$1;
(statearr_71708_71798[(2)] = inst_71679);

(statearr_71708_71798[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71695 === (32))){
var inst_71672 = (state_71694[(15)]);
var state_71694__$1 = state_71694;
var statearr_71709_71799 = state_71694__$1;
(statearr_71709_71799[(2)] = inst_71672);

(statearr_71709_71799[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71695 === (33))){
var inst_71682 = (state_71694[(2)]);
var inst_71683 = superv.async.throw_if_exception.call(null,S,inst_71682);
var inst_71610 = inst_71683;
var state_71694__$1 = (function (){var statearr_71710 = state_71694;
(statearr_71710[(14)] = inst_71610);

return statearr_71710;
})();
var statearr_71711_71800 = state_71694__$1;
(statearr_71711_71800[(2)] = null);

(statearr_71711_71800[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71695 === (13))){
var inst_71610 = (state_71694[(14)]);
var state_71694__$1 = state_71694;
if(cljs.core.truth_(inst_71610)){
var statearr_71712_71801 = state_71694__$1;
(statearr_71712_71801[(1)] = (15));

} else {
var statearr_71713_71802 = state_71694__$1;
(statearr_71713_71802[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71695 === (22))){
var inst_71639 = (state_71694[(16)]);
var inst_71639__$1 = superv.async._abort.call(null,S);
var inst_71640 = cljs.core.async.timeout.call(null,(0));
var inst_71641 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_71642 = [inst_71639__$1,inst_71640];
var inst_71643 = (new cljs.core.PersistentVector(null,2,(5),inst_71641,inst_71642,null));
var state_71694__$1 = (function (){var statearr_71714 = state_71694;
(statearr_71714[(16)] = inst_71639__$1);

return statearr_71714;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_71694__$1,(25),inst_71643,new cljs.core.Keyword(null,"priority","priority",1431093715),true);
} else {
if((state_val_71695 === (29))){
var inst_71656 = (state_71694[(2)]);
var state_71694__$1 = state_71694;
var statearr_71715_71803 = state_71694__$1;
(statearr_71715_71803[(2)] = inst_71656);

(statearr_71715_71803[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71695 === (6))){
var inst_71577 = (state_71694[(7)]);
var inst_71583 = superv.async._track_exception.call(null,S,inst_71577);
var state_71694__$1 = state_71694;
var statearr_71716_71804 = state_71694__$1;
(statearr_71716_71804[(2)] = inst_71583);

(statearr_71716_71804[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71695 === (28))){
var inst_71658 = (state_71694[(2)]);
var inst_71659 = superv.async.throw_if_exception.call(null,S,inst_71658);
var state_71694__$1 = state_71694;
var statearr_71717_71805 = state_71694__$1;
(statearr_71717_71805[(2)] = inst_71659);

(statearr_71717_71805[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71695 === (25))){
var inst_71639 = (state_71694[(16)]);
var inst_71645 = (state_71694[(2)]);
var inst_71646 = cljs.core.nth.call(null,inst_71645,(0),null);
var inst_71647 = cljs.core.nth.call(null,inst_71645,(1),null);
var inst_71648 = cljs.core._EQ_.call(null,inst_71647,inst_71639);
var state_71694__$1 = (function (){var statearr_71718 = state_71694;
(statearr_71718[(17)] = inst_71646);

return statearr_71718;
})();
if(inst_71648){
var statearr_71719_71806 = state_71694__$1;
(statearr_71719_71806[(1)] = (26));

} else {
var statearr_71720_71807 = state_71694__$1;
(statearr_71720_71807[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71695 === (17))){
var inst_71688 = (state_71694[(2)]);
var state_71694__$1 = state_71694;
var statearr_71721_71808 = state_71694__$1;
(statearr_71721_71808[(2)] = inst_71688);

(statearr_71721_71808[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71695 === (3))){
var inst_71574 = (state_71694[(2)]);
var inst_71575 = superv.async._unregister_go.call(null,S,id__67033__auto___71789);
var state_71694__$1 = (function (){var statearr_71722 = state_71694;
(statearr_71722[(18)] = inst_71575);

(statearr_71722[(19)] = inst_71574);

return statearr_71722;
})();
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71694__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71695 === (12))){
var inst_71608 = (state_71694[(2)]);
var inst_71609 = superv.async.throw_if_exception.call(null,S,inst_71608);
var inst_71610 = inst_71609;
var state_71694__$1 = (function (){var statearr_71723 = state_71694;
(statearr_71723[(14)] = inst_71610);

return statearr_71723;
})();
var statearr_71724_71809 = state_71694__$1;
(statearr_71724_71809[(2)] = null);

(statearr_71724_71809[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71695 === (2))){
var inst_71692 = (state_71694[(2)]);
var state_71694__$1 = state_71694;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71694__$1,inst_71692);
} else {
if((state_val_71695 === (23))){
var state_71694__$1 = state_71694;
var statearr_71725_71810 = state_71694__$1;
(statearr_71725_71810[(2)] = null);

(statearr_71725_71810[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71695 === (19))){
var inst_71627 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_71628 = [new cljs.core.Keyword(null,"aborted","aborted",1775972619)];
var inst_71629 = cljs.core.PersistentHashMap.fromArrays(inst_71627,inst_71628);
var inst_71630 = cljs.core.ex_info.call(null,"Aborted operations",inst_71629);
var state_71694__$1 = state_71694;
var statearr_71726_71811 = state_71694__$1;
(statearr_71726_71811[(2)] = inst_71630);

(statearr_71726_71811[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71695 === (11))){
var inst_71598 = (state_71694[(20)]);
var state_71694__$1 = state_71694;
var statearr_71727_71812 = state_71694__$1;
(statearr_71727_71812[(2)] = inst_71598);

(statearr_71727_71812[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71695 === (9))){
var inst_71592 = (state_71694[(21)]);
var inst_71597 = (state_71694[(2)]);
var inst_71598 = cljs.core.nth.call(null,inst_71597,(0),null);
var inst_71599 = cljs.core.nth.call(null,inst_71597,(1),null);
var inst_71600 = cljs.core._EQ_.call(null,inst_71599,inst_71592);
var state_71694__$1 = (function (){var statearr_71728 = state_71694;
(statearr_71728[(20)] = inst_71598);

return statearr_71728;
})();
if(inst_71600){
var statearr_71729_71813 = state_71694__$1;
(statearr_71729_71813[(1)] = (10));

} else {
var statearr_71730_71814 = state_71694__$1;
(statearr_71730_71814[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71695 === (5))){
var state_71694__$1 = state_71694;
var statearr_71731_71815 = state_71694__$1;
(statearr_71731_71815[(2)] = null);

(statearr_71731_71815[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71695 === (14))){
var inst_71690 = (state_71694[(2)]);
var state_71694__$1 = state_71694;
var statearr_71732_71816 = state_71694__$1;
(statearr_71732_71816[(2)] = inst_71690);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71694__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71695 === (26))){
var inst_71650 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_71651 = [new cljs.core.Keyword(null,"aborted","aborted",1775972619)];
var inst_71652 = cljs.core.PersistentHashMap.fromArrays(inst_71650,inst_71651);
var inst_71653 = cljs.core.ex_info.call(null,"Aborted operations",inst_71652);
var state_71694__$1 = state_71694;
var statearr_71733_71817 = state_71694__$1;
(statearr_71733_71817[(2)] = inst_71653);

(statearr_71733_71817[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71695 === (16))){
var inst_71686 = cljs.core.async.close_BANG_.call(null,new_out);
var state_71694__$1 = state_71694;
var statearr_71734_71818 = state_71694__$1;
(statearr_71734_71818[(2)] = inst_71686);

(statearr_71734_71818[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71695 === (30))){
var inst_71666 = (state_71694[(11)]);
var inst_71671 = (state_71694[(2)]);
var inst_71672 = cljs.core.nth.call(null,inst_71671,(0),null);
var inst_71673 = cljs.core.nth.call(null,inst_71671,(1),null);
var inst_71674 = cljs.core._EQ_.call(null,inst_71673,inst_71666);
var state_71694__$1 = (function (){var statearr_71735 = state_71694;
(statearr_71735[(15)] = inst_71672);

return statearr_71735;
})();
if(inst_71674){
var statearr_71736_71819 = state_71694__$1;
(statearr_71736_71819[(1)] = (31));

} else {
var statearr_71737_71820 = state_71694__$1;
(statearr_71737_71820[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71695 === (10))){
var inst_71602 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_71603 = [new cljs.core.Keyword(null,"aborted","aborted",1775972619)];
var inst_71604 = cljs.core.PersistentHashMap.fromArrays(inst_71602,inst_71603);
var inst_71605 = cljs.core.ex_info.call(null,"Aborted operations",inst_71604);
var state_71694__$1 = state_71694;
var statearr_71738_71821 = state_71694__$1;
(statearr_71738_71821[(2)] = inst_71605);

(statearr_71738_71821[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71695 === (18))){
var inst_71616 = (state_71694[(13)]);
var inst_71622 = (state_71694[(2)]);
var inst_71623 = cljs.core.nth.call(null,inst_71622,(0),null);
var inst_71624 = cljs.core.nth.call(null,inst_71622,(1),null);
var inst_71625 = cljs.core._EQ_.call(null,inst_71624,inst_71616);
var state_71694__$1 = (function (){var statearr_71739 = state_71694;
(statearr_71739[(9)] = inst_71623);

return statearr_71739;
})();
if(inst_71625){
var statearr_71740_71822 = state_71694__$1;
(statearr_71740_71822[(1)] = (19));

} else {
var statearr_71741_71823 = state_71694__$1;
(statearr_71741_71823[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71695 === (8))){
var inst_71592 = (state_71694[(21)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_71694,(4),Error,(3),(2));
var inst_71592__$1 = superv.async._abort.call(null,S);
var inst_71593 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_71594 = [inst_71592__$1,new_out];
var inst_71595 = (new cljs.core.PersistentVector(null,2,(5),inst_71593,inst_71594,null));
var state_71694__$1 = (function (){var statearr_71742 = state_71694;
(statearr_71742[(21)] = inst_71592__$1);

return statearr_71742;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_71694__$1,(9),inst_71595,new cljs.core.Keyword(null,"priority","priority",1431093715),new cljs.core.Keyword(null,"true","true",-1114210334));
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
});})(c__64826__auto___71790,c__67032__auto___71788,id__67033__auto___71789,new_in,new_out,vec__71392,S,peer,vec__71395,in$,out))
;
return ((function (switch__64803__auto__,c__64826__auto___71790,c__67032__auto___71788,id__67033__auto___71789,new_in,new_out,vec__71392,S,peer,vec__71395,in$,out){
return (function() {
var kabel$middleware$handler$handler_$_state_machine__64804__auto__ = null;
var kabel$middleware$handler$handler_$_state_machine__64804__auto____0 = (function (){
var statearr_71746 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71746[(0)] = kabel$middleware$handler$handler_$_state_machine__64804__auto__);

(statearr_71746[(1)] = (1));

return statearr_71746;
});
var kabel$middleware$handler$handler_$_state_machine__64804__auto____1 = (function (state_71694){
while(true){
var ret_value__64805__auto__ = (function (){try{while(true){
var result__64806__auto__ = switch__64803__auto__.call(null,state_71694);
if(cljs.core.keyword_identical_QMARK_.call(null,result__64806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64806__auto__;
}
break;
}
}catch (e71747){if((e71747 instanceof Object)){
var ex__64807__auto__ = e71747;
var statearr_71748_71824 = state_71694;
(statearr_71748_71824[(5)] = ex__64807__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71694);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71747;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__64805__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71825 = state_71694;
state_71694 = G__71825;
continue;
} else {
return ret_value__64805__auto__;
}
break;
}
});
kabel$middleware$handler$handler_$_state_machine__64804__auto__ = function(state_71694){
switch(arguments.length){
case 0:
return kabel$middleware$handler$handler_$_state_machine__64804__auto____0.call(this);
case 1:
return kabel$middleware$handler$handler_$_state_machine__64804__auto____1.call(this,state_71694);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
kabel$middleware$handler$handler_$_state_machine__64804__auto__.cljs$core$IFn$_invoke$arity$0 = kabel$middleware$handler$handler_$_state_machine__64804__auto____0;
kabel$middleware$handler$handler_$_state_machine__64804__auto__.cljs$core$IFn$_invoke$arity$1 = kabel$middleware$handler$handler_$_state_machine__64804__auto____1;
return kabel$middleware$handler$handler_$_state_machine__64804__auto__;
})()
;})(switch__64803__auto__,c__64826__auto___71790,c__67032__auto___71788,id__67033__auto___71789,new_in,new_out,vec__71392,S,peer,vec__71395,in$,out))
})();
var state__64828__auto__ = (function (){var statearr_71749 = f__64827__auto__.call(null);
(statearr_71749[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__64826__auto___71790);

return statearr_71749;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__64828__auto__);
});})(c__64826__auto___71790,c__67032__auto___71788,id__67033__auto___71789,new_in,new_out,vec__71392,S,peer,vec__71395,in$,out))
);


return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [S,peer,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_in,new_out], null)], null);
});

//# sourceMappingURL=handler.js.map?rel=1506321319739