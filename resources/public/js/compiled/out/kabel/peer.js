// Compiled by ClojureScript 1.9.542 {}
goog.provide('kabel.peer');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('kabel.client');
goog.require('kabel.middleware.transit');
goog.require('superv.async');
goog.require('cljs.core.async');
kabel.peer.drain = (function kabel$peer$drain(p__72092){
var vec__72196 = p__72092;
var S = cljs.core.nth.call(null,vec__72196,(0),null);
var peer = cljs.core.nth.call(null,vec__72196,(1),null);
var vec__72199 = cljs.core.nth.call(null,vec__72196,(2),null);
var in$ = cljs.core.nth.call(null,vec__72199,(0),null);
var out = cljs.core.nth.call(null,vec__72199,(1),null);
var c__69835__auto__ = superv.async.check_supervisor.call(null,superv.async.S);
var id__69836__auto__ = superv.async._register_go.call(null,S,cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","loop","clojure.core/loop",-1797836771,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null),cljs.core.list(new cljs.core.Symbol(null,"<?","<?",-1929864530,null),new cljs.core.Symbol(null,"S","S",-1387142461,null),new cljs.core.Symbol(null,"in","in",109346662,null))], null),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),new cljs.core.Symbol(null,"i","i",253690212,null),cljs.core.list(new cljs.core.Symbol(null,"recur","recur",1202958259,null),cljs.core.list(new cljs.core.Symbol(null,"<?","<?",-1929864530,null),new cljs.core.Symbol(null,"S","S",-1387142461,null),new cljs.core.Symbol(null,"in","in",109346662,null)))))));
var c__64826__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__64826__auto__,c__69835__auto__,id__69836__auto__,vec__72196,S,peer,vec__72199,in$,out){
return (function (){
var f__64827__auto__ = (function (){var switch__64803__auto__ = ((function (c__64826__auto__,c__69835__auto__,id__69836__auto__,vec__72196,S,peer,vec__72199,in$,out){
return (function (state_72266){
var state_val_72267 = (state_72266[(1)]);
if((state_val_72267 === (7))){
var inst_72215 = (state_72266[(7)]);
var inst_72220 = (state_72266[(2)]);
var inst_72221 = cljs.core.nth.call(null,inst_72220,(0),null);
var inst_72222 = cljs.core.nth.call(null,inst_72220,(1),null);
var inst_72223 = cljs.core._EQ_.call(null,inst_72222,inst_72215);
var state_72266__$1 = (function (){var statearr_72268 = state_72266;
(statearr_72268[(8)] = inst_72221);

return statearr_72268;
})();
if(inst_72223){
var statearr_72269_72299 = state_72266__$1;
(statearr_72269_72299[(1)] = (8));

} else {
var statearr_72270_72300 = state_72266__$1;
(statearr_72270_72300[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72267 === (1))){
var state_72266__$1 = state_72266;
var statearr_72271_72301 = state_72266__$1;
(statearr_72271_72301[(2)] = null);

(statearr_72271_72301[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72267 === (4))){
var inst_72205 = (state_72266[(2)]);
var inst_72206 = superv.async._error.call(null,S);
var state_72266__$1 = state_72266;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_72266__$1,(5),inst_72206,inst_72205);
} else {
if((state_val_72267 === (15))){
var inst_72260 = (state_72266[(2)]);
var state_72266__$1 = state_72266;
var statearr_72272_72302 = state_72266__$1;
(statearr_72272_72302[(2)] = inst_72260);

(statearr_72272_72302[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72267 === (13))){
var inst_72239 = (state_72266[(9)]);
var inst_72239__$1 = superv.async._abort.call(null,S);
var inst_72240 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_72241 = [inst_72239__$1,in$];
var inst_72242 = (new cljs.core.PersistentVector(null,2,(5),inst_72240,inst_72241,null));
var state_72266__$1 = (function (){var statearr_72273 = state_72266;
(statearr_72273[(9)] = inst_72239__$1);

return statearr_72273;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_72266__$1,(16),inst_72242,new cljs.core.Keyword(null,"priority","priority",1431093715),new cljs.core.Keyword(null,"true","true",-1114210334));
} else {
if((state_val_72267 === (6))){
var inst_72215 = (state_72266[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_72266,(4),Error,(3),(2));
var inst_72215__$1 = superv.async._abort.call(null,S);
var inst_72216 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_72217 = [inst_72215__$1,in$];
var inst_72218 = (new cljs.core.PersistentVector(null,2,(5),inst_72216,inst_72217,null));
var state_72266__$1 = (function (){var statearr_72274 = state_72266;
(statearr_72274[(7)] = inst_72215__$1);

return statearr_72274;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_72266__$1,(7),inst_72218,new cljs.core.Keyword(null,"priority","priority",1431093715),new cljs.core.Keyword(null,"true","true",-1114210334));
} else {
if((state_val_72267 === (17))){
var inst_72249 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_72250 = [new cljs.core.Keyword(null,"aborted","aborted",1775972619)];
var inst_72251 = cljs.core.PersistentHashMap.fromArrays(inst_72249,inst_72250);
var inst_72252 = cljs.core.ex_info.call(null,"Aborted operations",inst_72251);
var state_72266__$1 = state_72266;
var statearr_72275_72303 = state_72266__$1;
(statearr_72275_72303[(2)] = inst_72252);

(statearr_72275_72303[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72267 === (3))){
var inst_72202 = (state_72266[(2)]);
var inst_72203 = superv.async._unregister_go.call(null,S,id__69836__auto__);
var state_72266__$1 = (function (){var statearr_72276 = state_72266;
(statearr_72276[(10)] = inst_72203);

(statearr_72276[(11)] = inst_72202);

return statearr_72276;
})();
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_72266__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72267 === (12))){
var inst_72262 = (state_72266[(2)]);
var state_72266__$1 = state_72266;
var statearr_72277_72304 = state_72266__$1;
(statearr_72277_72304[(2)] = inst_72262);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_72266__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72267 === (2))){
var inst_72264 = (state_72266[(2)]);
var state_72266__$1 = state_72266;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_72266__$1,inst_72264);
} else {
if((state_val_72267 === (19))){
var inst_72255 = (state_72266[(2)]);
var inst_72256 = superv.async.throw_if_exception.call(null,S,inst_72255);
var inst_72233 = inst_72256;
var state_72266__$1 = (function (){var statearr_72278 = state_72266;
(statearr_72278[(12)] = inst_72233);

return statearr_72278;
})();
var statearr_72279_72305 = state_72266__$1;
(statearr_72279_72305[(2)] = null);

(statearr_72279_72305[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72267 === (11))){
var inst_72233 = (state_72266[(12)]);
var state_72266__$1 = state_72266;
if(cljs.core.truth_(inst_72233)){
var statearr_72280_72306 = state_72266__$1;
(statearr_72280_72306[(1)] = (13));

} else {
var statearr_72281_72307 = state_72266__$1;
(statearr_72281_72307[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72267 === (9))){
var inst_72221 = (state_72266[(8)]);
var state_72266__$1 = state_72266;
var statearr_72282_72308 = state_72266__$1;
(statearr_72282_72308[(2)] = inst_72221);

(statearr_72282_72308[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72267 === (5))){
var inst_72208 = (state_72266[(2)]);
var state_72266__$1 = state_72266;
var statearr_72283_72309 = state_72266__$1;
(statearr_72283_72309[(2)] = inst_72208);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_72266__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72267 === (14))){
var state_72266__$1 = state_72266;
var statearr_72284_72310 = state_72266__$1;
(statearr_72284_72310[(2)] = null);

(statearr_72284_72310[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72267 === (16))){
var inst_72239 = (state_72266[(9)]);
var inst_72244 = (state_72266[(2)]);
var inst_72245 = cljs.core.nth.call(null,inst_72244,(0),null);
var inst_72246 = cljs.core.nth.call(null,inst_72244,(1),null);
var inst_72247 = cljs.core._EQ_.call(null,inst_72246,inst_72239);
var state_72266__$1 = (function (){var statearr_72285 = state_72266;
(statearr_72285[(13)] = inst_72245);

return statearr_72285;
})();
if(inst_72247){
var statearr_72286_72311 = state_72266__$1;
(statearr_72286_72311[(1)] = (17));

} else {
var statearr_72287_72312 = state_72266__$1;
(statearr_72287_72312[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72267 === (10))){
var inst_72231 = (state_72266[(2)]);
var inst_72232 = superv.async.throw_if_exception.call(null,S,inst_72231);
var inst_72233 = inst_72232;
var state_72266__$1 = (function (){var statearr_72288 = state_72266;
(statearr_72288[(12)] = inst_72233);

return statearr_72288;
})();
var statearr_72289_72313 = state_72266__$1;
(statearr_72289_72313[(2)] = null);

(statearr_72289_72313[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72267 === (18))){
var inst_72245 = (state_72266[(13)]);
var state_72266__$1 = state_72266;
var statearr_72290_72314 = state_72266__$1;
(statearr_72290_72314[(2)] = inst_72245);

(statearr_72290_72314[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72267 === (8))){
var inst_72225 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_72226 = [new cljs.core.Keyword(null,"aborted","aborted",1775972619)];
var inst_72227 = cljs.core.PersistentHashMap.fromArrays(inst_72225,inst_72226);
var inst_72228 = cljs.core.ex_info.call(null,"Aborted operations",inst_72227);
var state_72266__$1 = state_72266;
var statearr_72291_72315 = state_72266__$1;
(statearr_72291_72315[(2)] = inst_72228);

(statearr_72291_72315[(1)] = (10));


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
});})(c__64826__auto__,c__69835__auto__,id__69836__auto__,vec__72196,S,peer,vec__72199,in$,out))
;
return ((function (switch__64803__auto__,c__64826__auto__,c__69835__auto__,id__69836__auto__,vec__72196,S,peer,vec__72199,in$,out){
return (function() {
var kabel$peer$drain_$_state_machine__64804__auto__ = null;
var kabel$peer$drain_$_state_machine__64804__auto____0 = (function (){
var statearr_72295 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_72295[(0)] = kabel$peer$drain_$_state_machine__64804__auto__);

(statearr_72295[(1)] = (1));

return statearr_72295;
});
var kabel$peer$drain_$_state_machine__64804__auto____1 = (function (state_72266){
while(true){
var ret_value__64805__auto__ = (function (){try{while(true){
var result__64806__auto__ = switch__64803__auto__.call(null,state_72266);
if(cljs.core.keyword_identical_QMARK_.call(null,result__64806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64806__auto__;
}
break;
}
}catch (e72296){if((e72296 instanceof Object)){
var ex__64807__auto__ = e72296;
var statearr_72297_72316 = state_72266;
(statearr_72297_72316[(5)] = ex__64807__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_72266);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e72296;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__64805__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72317 = state_72266;
state_72266 = G__72317;
continue;
} else {
return ret_value__64805__auto__;
}
break;
}
});
kabel$peer$drain_$_state_machine__64804__auto__ = function(state_72266){
switch(arguments.length){
case 0:
return kabel$peer$drain_$_state_machine__64804__auto____0.call(this);
case 1:
return kabel$peer$drain_$_state_machine__64804__auto____1.call(this,state_72266);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
kabel$peer$drain_$_state_machine__64804__auto__.cljs$core$IFn$_invoke$arity$0 = kabel$peer$drain_$_state_machine__64804__auto____0;
kabel$peer$drain_$_state_machine__64804__auto__.cljs$core$IFn$_invoke$arity$1 = kabel$peer$drain_$_state_machine__64804__auto____1;
return kabel$peer$drain_$_state_machine__64804__auto__;
})()
;})(switch__64803__auto__,c__64826__auto__,c__69835__auto__,id__69836__auto__,vec__72196,S,peer,vec__72199,in$,out))
})();
var state__64828__auto__ = (function (){var statearr_72298 = f__64827__auto__.call(null);
(statearr_72298[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__64826__auto__);

return statearr_72298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__64828__auto__);
});})(c__64826__auto__,c__69835__auto__,id__69836__auto__,vec__72196,S,peer,vec__72199,in$,out))
);

return c__64826__auto__;
});
/**
 * Connect peer to url.
 */
kabel.peer.connect = (function kabel$peer$connect(S,peer,url){
var c__67032__auto__ = superv.async.check_supervisor.call(null,superv.async.S);
var id__67033__auto__ = superv.async._register_go.call(null,S,cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"middleware","middleware",-1192320265,null),new cljs.core.Symbol(null,"serialization-middleware","serialization-middleware",-189348790,null),new cljs.core.Symbol(null,"read-handlers","read-handlers",-544976454,null),new cljs.core.Symbol(null,"write-handlers","write-handlers",-456757384,null)], null)], null),new cljs.core.Keyword(null,"volatile","volatile",-1259779430),new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null)], null)]),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"peer","peer",-1334772977,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c-in","c-in",517820292,null),new cljs.core.Symbol(null,"c-out","c-out",-21235651,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<?","<?",-1929864530,null),new cljs.core.Symbol(null,"S","S",-1387142461,null),cljs.core.list(new cljs.core.Symbol(null,"client-connect!","client-connect!",-808984398,null),new cljs.core.Symbol(null,"S","S",-1387142461,null),new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"read-handlers","read-handlers",-544976454,null),new cljs.core.Symbol(null,"write-handlers","write-handlers",-456757384,null)))], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"S","S",-1387142461,null),new cljs.core.Symbol(null,"peer","peer",-1334772977,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c-in","c-in",517820292,null),new cljs.core.Symbol(null,"c-out","c-out",-21235651,null)], null)], null),new cljs.core.Symbol(null,"serialization-middleware","serialization-middleware",-189348790,null),new cljs.core.Symbol(null,"middleware","middleware",-1192320265,null),new cljs.core.Symbol(null,"drain","drain",-178568812,null)))));
var c__64826__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__64826__auto__,c__67032__auto__,id__67033__auto__){
return (function (){
var f__64827__auto__ = (function (){var switch__64803__auto__ = ((function (c__64826__auto__,c__67032__auto__,id__67033__auto__){
return (function (state_72579){
var state_val_72580 = (state_72579[(1)]);
if((state_val_72580 === (7))){
var inst_72477 = (state_72579[(7)]);
var inst_72485 = (state_72579[(2)]);
var state_72579__$1 = (function (){var statearr_72581 = state_72579;
(statearr_72581[(8)] = inst_72485);

return statearr_72581;
})();
var statearr_72582_72630 = state_72579__$1;
(statearr_72582_72630[(2)] = inst_72477);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_72579__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72580 === (20))){
var inst_72532 = (state_72579[(2)]);
var state_72579__$1 = state_72579;
if(cljs.core.truth_(inst_72532)){
var statearr_72583_72631 = state_72579__$1;
(statearr_72583_72631[(1)] = (24));

} else {
var statearr_72584_72632 = state_72579__$1;
(statearr_72584_72632[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72580 === (27))){
var inst_72546 = (state_72579[(9)]);
var inst_72552 = (state_72579[(2)]);
var inst_72553 = cljs.core.nth.call(null,inst_72552,(0),null);
var inst_72554 = cljs.core.nth.call(null,inst_72552,(1),null);
var inst_72555 = cljs.core._EQ_.call(null,inst_72554,inst_72546);
var state_72579__$1 = (function (){var statearr_72585 = state_72579;
(statearr_72585[(10)] = inst_72553);

return statearr_72585;
})();
if(inst_72555){
var statearr_72586_72633 = state_72579__$1;
(statearr_72586_72633[(1)] = (28));

} else {
var statearr_72587_72634 = state_72579__$1;
(statearr_72587_72634[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72580 === (1))){
var state_72579__$1 = state_72579;
var statearr_72588_72635 = state_72579__$1;
(statearr_72588_72635[(2)] = null);

(statearr_72588_72635[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72580 === (24))){
var inst_72516 = (state_72579[(11)]);
var inst_72534 = cljs.core.apply.call(null,cljs.core.hash_map,inst_72516);
var state_72579__$1 = state_72579;
var statearr_72589_72636 = state_72579__$1;
(statearr_72589_72636[(2)] = inst_72534);

(statearr_72589_72636[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72580 === (4))){
var inst_72477 = (state_72579[(7)]);
var inst_72477__$1 = (state_72579[(2)]);
var inst_72478 = cljs.core.ex_data.call(null,inst_72477__$1);
var inst_72479 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_72478);
var inst_72480 = cljs.core._EQ_.call(null,inst_72479,new cljs.core.Keyword(null,"aborted","aborted",1775972619));
var state_72579__$1 = (function (){var statearr_72590 = state_72579;
(statearr_72590[(7)] = inst_72477__$1);

return statearr_72590;
})();
if(inst_72480){
var statearr_72591_72637 = state_72579__$1;
(statearr_72591_72637[(1)] = (5));

} else {
var statearr_72592_72638 = state_72579__$1;
(statearr_72592_72638[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72580 === (15))){
var inst_72494 = (state_72579[(12)]);
var inst_72512 = cljs.core.apply.call(null,cljs.core.hash_map,inst_72494);
var state_72579__$1 = state_72579;
var statearr_72593_72639 = state_72579__$1;
(statearr_72593_72639[(2)] = inst_72512);

(statearr_72593_72639[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72580 === (21))){
var state_72579__$1 = state_72579;
var statearr_72594_72640 = state_72579__$1;
(statearr_72594_72640[(2)] = true);

(statearr_72594_72640[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72580 === (13))){
var state_72579__$1 = state_72579;
var statearr_72595_72641 = state_72579__$1;
(statearr_72595_72641[(2)] = false);

(statearr_72595_72641[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72580 === (22))){
var state_72579__$1 = state_72579;
var statearr_72596_72642 = state_72579__$1;
(statearr_72596_72642[(2)] = false);

(statearr_72596_72642[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72580 === (29))){
var inst_72553 = (state_72579[(10)]);
var state_72579__$1 = state_72579;
var statearr_72597_72643 = state_72579__$1;
(statearr_72597_72643[(2)] = inst_72553);

(statearr_72597_72643[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72580 === (6))){
var inst_72477 = (state_72579[(7)]);
var inst_72483 = superv.async._track_exception.call(null,S,inst_72477);
var state_72579__$1 = state_72579;
var statearr_72598_72644 = state_72579__$1;
(statearr_72598_72644[(2)] = inst_72483);

(statearr_72598_72644[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72580 === (28))){
var inst_72557 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_72558 = [new cljs.core.Keyword(null,"aborted","aborted",1775972619)];
var inst_72559 = cljs.core.PersistentHashMap.fromArrays(inst_72557,inst_72558);
var inst_72560 = cljs.core.ex_info.call(null,"Aborted operations",inst_72559);
var state_72579__$1 = state_72579;
var statearr_72599_72645 = state_72579__$1;
(statearr_72599_72645[(2)] = inst_72560);

(statearr_72599_72645[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72580 === (25))){
var inst_72516 = (state_72579[(11)]);
var state_72579__$1 = state_72579;
var statearr_72600_72646 = state_72579__$1;
(statearr_72600_72646[(2)] = inst_72516);

(statearr_72600_72646[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72580 === (17))){
var inst_72516 = (state_72579[(11)]);
var inst_72515 = (state_72579[(13)]);
var inst_72515__$1 = (state_72579[(2)]);
var inst_72516__$1 = cljs.core.get.call(null,inst_72515__$1,new cljs.core.Keyword(null,"volatile","volatile",-1259779430));
var inst_72518 = (inst_72516__$1 == null);
var inst_72519 = cljs.core.not.call(null,inst_72518);
var state_72579__$1 = (function (){var statearr_72601 = state_72579;
(statearr_72601[(11)] = inst_72516__$1);

(statearr_72601[(13)] = inst_72515__$1);

return statearr_72601;
})();
if(inst_72519){
var statearr_72602_72647 = state_72579__$1;
(statearr_72602_72647[(1)] = (18));

} else {
var statearr_72603_72648 = state_72579__$1;
(statearr_72603_72648[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72580 === (3))){
var inst_72474 = (state_72579[(2)]);
var inst_72475 = superv.async._unregister_go.call(null,S,id__67033__auto__);
var state_72579__$1 = (function (){var statearr_72604 = state_72579;
(statearr_72604[(14)] = inst_72475);

(statearr_72604[(15)] = inst_72474);

return statearr_72604;
})();
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_72579__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72580 === (12))){
var state_72579__$1 = state_72579;
var statearr_72605_72649 = state_72579__$1;
(statearr_72605_72649[(2)] = true);

(statearr_72605_72649[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72580 === (2))){
var inst_72577 = (state_72579[(2)]);
var state_72579__$1 = state_72579;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_72579__$1,inst_72577);
} else {
if((state_val_72580 === (23))){
var inst_72529 = (state_72579[(2)]);
var state_72579__$1 = state_72579;
var statearr_72606_72650 = state_72579__$1;
(statearr_72606_72650[(2)] = inst_72529);

(statearr_72606_72650[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72580 === (19))){
var state_72579__$1 = state_72579;
var statearr_72607_72651 = state_72579__$1;
(statearr_72607_72651[(2)] = false);

(statearr_72607_72651[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72580 === (11))){
var inst_72510 = (state_72579[(2)]);
var state_72579__$1 = state_72579;
if(cljs.core.truth_(inst_72510)){
var statearr_72608_72652 = state_72579__$1;
(statearr_72608_72652[(1)] = (15));

} else {
var statearr_72609_72653 = state_72579__$1;
(statearr_72609_72653[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72580 === (9))){
var inst_72494 = (state_72579[(12)]);
var inst_72499 = inst_72494.cljs$lang$protocol_mask$partition0$;
var inst_72500 = (inst_72499 & (64));
var inst_72501 = inst_72494.cljs$core$ISeq$;
var inst_72502 = (cljs.core.PROTOCOL_SENTINEL === inst_72501);
var inst_72503 = (inst_72500) || (inst_72502);
var state_72579__$1 = state_72579;
if(cljs.core.truth_(inst_72503)){
var statearr_72610_72654 = state_72579__$1;
(statearr_72610_72654[(1)] = (12));

} else {
var statearr_72611_72655 = state_72579__$1;
(statearr_72611_72655[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72580 === (5))){
var state_72579__$1 = state_72579;
var statearr_72612_72656 = state_72579__$1;
(statearr_72612_72656[(2)] = null);

(statearr_72612_72656[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72580 === (14))){
var inst_72507 = (state_72579[(2)]);
var state_72579__$1 = state_72579;
var statearr_72613_72657 = state_72579__$1;
(statearr_72613_72657[(2)] = inst_72507);

(statearr_72613_72657[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72580 === (26))){
var inst_72546 = (state_72579[(9)]);
var inst_72515 = (state_72579[(13)]);
var inst_72537 = (state_72579[(2)]);
var inst_72538 = cljs.core.get.call(null,inst_72537,new cljs.core.Keyword(null,"middleware","middleware",1462115504));
var inst_72539 = cljs.core.get.call(null,inst_72537,new cljs.core.Keyword(null,"serialization-middleware","serialization-middleware",-1829880317));
var inst_72540 = cljs.core.get.call(null,inst_72537,new cljs.core.Keyword(null,"read-handlers","read-handlers",2109459315));
var inst_72541 = cljs.core.get.call(null,inst_72537,new cljs.core.Keyword(null,"write-handlers","write-handlers",-2097288911));
var inst_72542 = cljs.core.get.call(null,inst_72515,new cljs.core.Keyword(null,"id","id",-1388402092));
var inst_72546__$1 = superv.async._abort.call(null,S);
var inst_72547 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_72548 = kabel.client.client_connect_BANG_.call(null,S,url,inst_72542,inst_72540,inst_72541);
var inst_72549 = [inst_72546__$1,inst_72548];
var inst_72550 = (new cljs.core.PersistentVector(null,2,(5),inst_72547,inst_72549,null));
var state_72579__$1 = (function (){var statearr_72614 = state_72579;
(statearr_72614[(16)] = inst_72539);

(statearr_72614[(17)] = inst_72538);

(statearr_72614[(9)] = inst_72546__$1);

return statearr_72614;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_72579__$1,(27),inst_72550,new cljs.core.Keyword(null,"priority","priority",1431093715),new cljs.core.Keyword(null,"true","true",-1114210334));
} else {
if((state_val_72580 === (16))){
var inst_72494 = (state_72579[(12)]);
var state_72579__$1 = state_72579;
var statearr_72615_72658 = state_72579__$1;
(statearr_72615_72658[(2)] = inst_72494);

(statearr_72615_72658[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72580 === (30))){
var inst_72539 = (state_72579[(16)]);
var inst_72538 = (state_72579[(17)]);
var inst_72563 = (state_72579[(2)]);
var inst_72564 = superv.async.throw_if_exception.call(null,S,inst_72563);
var inst_72565 = cljs.core.nth.call(null,inst_72564,(0),null);
var inst_72566 = cljs.core.nth.call(null,inst_72564,(1),null);
var inst_72567 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_72568 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_72569 = [inst_72565,inst_72566];
var inst_72570 = (new cljs.core.PersistentVector(null,2,(5),inst_72568,inst_72569,null));
var inst_72571 = [S,peer,inst_72570];
var inst_72572 = (new cljs.core.PersistentVector(null,3,(5),inst_72567,inst_72571,null));
var inst_72573 = inst_72539.call(null,inst_72572);
var inst_72574 = inst_72538.call(null,inst_72573);
var inst_72575 = kabel.peer.drain.call(null,inst_72574);
var state_72579__$1 = state_72579;
var statearr_72616_72659 = state_72579__$1;
(statearr_72616_72659[(2)] = inst_72575);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_72579__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72580 === (10))){
var state_72579__$1 = state_72579;
var statearr_72617_72660 = state_72579__$1;
(statearr_72617_72660[(2)] = false);

(statearr_72617_72660[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72580 === (18))){
var inst_72516 = (state_72579[(11)]);
var inst_72521 = inst_72516.cljs$lang$protocol_mask$partition0$;
var inst_72522 = (inst_72521 & (64));
var inst_72523 = inst_72516.cljs$core$ISeq$;
var inst_72524 = (cljs.core.PROTOCOL_SENTINEL === inst_72523);
var inst_72525 = (inst_72522) || (inst_72524);
var state_72579__$1 = state_72579;
if(cljs.core.truth_(inst_72525)){
var statearr_72618_72661 = state_72579__$1;
(statearr_72618_72661[(1)] = (21));

} else {
var statearr_72619_72662 = state_72579__$1;
(statearr_72619_72662[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72580 === (8))){
var inst_72494 = (state_72579[(12)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_72579,(4),Error,(3),(2));
var inst_72494__$1 = cljs.core.deref.call(null,peer);
var inst_72496 = (inst_72494__$1 == null);
var inst_72497 = cljs.core.not.call(null,inst_72496);
var state_72579__$1 = (function (){var statearr_72620 = state_72579;
(statearr_72620[(12)] = inst_72494__$1);

return statearr_72620;
})();
if(inst_72497){
var statearr_72621_72663 = state_72579__$1;
(statearr_72621_72663[(1)] = (9));

} else {
var statearr_72622_72664 = state_72579__$1;
(statearr_72622_72664[(1)] = (10));

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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__64826__auto__,c__67032__auto__,id__67033__auto__))
;
return ((function (switch__64803__auto__,c__64826__auto__,c__67032__auto__,id__67033__auto__){
return (function() {
var kabel$peer$connect_$_state_machine__64804__auto__ = null;
var kabel$peer$connect_$_state_machine__64804__auto____0 = (function (){
var statearr_72626 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_72626[(0)] = kabel$peer$connect_$_state_machine__64804__auto__);

(statearr_72626[(1)] = (1));

return statearr_72626;
});
var kabel$peer$connect_$_state_machine__64804__auto____1 = (function (state_72579){
while(true){
var ret_value__64805__auto__ = (function (){try{while(true){
var result__64806__auto__ = switch__64803__auto__.call(null,state_72579);
if(cljs.core.keyword_identical_QMARK_.call(null,result__64806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64806__auto__;
}
break;
}
}catch (e72627){if((e72627 instanceof Object)){
var ex__64807__auto__ = e72627;
var statearr_72628_72665 = state_72579;
(statearr_72628_72665[(5)] = ex__64807__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_72579);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e72627;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__64805__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72666 = state_72579;
state_72579 = G__72666;
continue;
} else {
return ret_value__64805__auto__;
}
break;
}
});
kabel$peer$connect_$_state_machine__64804__auto__ = function(state_72579){
switch(arguments.length){
case 0:
return kabel$peer$connect_$_state_machine__64804__auto____0.call(this);
case 1:
return kabel$peer$connect_$_state_machine__64804__auto____1.call(this,state_72579);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
kabel$peer$connect_$_state_machine__64804__auto__.cljs$core$IFn$_invoke$arity$0 = kabel$peer$connect_$_state_machine__64804__auto____0;
kabel$peer$connect_$_state_machine__64804__auto__.cljs$core$IFn$_invoke$arity$1 = kabel$peer$connect_$_state_machine__64804__auto____1;
return kabel$peer$connect_$_state_machine__64804__auto__;
})()
;})(switch__64803__auto__,c__64826__auto__,c__67032__auto__,id__67033__auto__))
})();
var state__64828__auto__ = (function (){var statearr_72629 = f__64827__auto__.call(null);
(statearr_72629[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__64826__auto__);

return statearr_72629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__64828__auto__);
});})(c__64826__auto__,c__67032__auto__,id__67033__auto__))
);

return c__64826__auto__;
});
/**
 * Creates a client-side peer only.
 */
kabel.peer.client_peer = (function kabel$peer$client_peer(var_args){
var args72667 = [];
var len__62575__auto___72670 = arguments.length;
var i__62576__auto___72671 = (0);
while(true){
if((i__62576__auto___72671 < len__62575__auto___72670)){
args72667.push((arguments[i__62576__auto___72671]));

var G__72672 = (i__62576__auto___72671 + (1));
i__62576__auto___72671 = G__72672;
continue;
} else {
}
break;
}

var G__72669 = args72667.length;
switch (G__72669) {
case 3:
return kabel.peer.client_peer.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return kabel.peer.client_peer.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 6:
return kabel.peer.client_peer.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args72667.length)].join('')));

}
});

kabel.peer.client_peer.cljs$core$IFn$_invoke$arity$3 = (function (S,id,middleware){
return kabel.peer.client_peer.call(null,S,id,middleware,kabel.middleware.transit.transit);
});

kabel.peer.client_peer.cljs$core$IFn$_invoke$arity$4 = (function (S,id,middleware,serialization_middleware){
return kabel.peer.client_peer.call(null,S,id,middleware,serialization_middleware,cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY));
});

kabel.peer.client_peer.cljs$core$IFn$_invoke$arity$6 = (function (S,id,middleware,serialization_middleware,read_handlers,write_handlers){
var log = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var bus_in = cljs.core.async.chan.call(null);
var bus_out = cljs.core.async.pub.call(null,bus_in,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"volatile","volatile",-1259779430),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"log","log",-1595516004),log,new cljs.core.Keyword(null,"middleware","middleware",1462115504),middleware,new cljs.core.Keyword(null,"serialization-middleware","serialization-middleware",-1829880317),serialization_middleware,new cljs.core.Keyword(null,"read-handlers","read-handlers",2109459315),read_handlers,new cljs.core.Keyword(null,"write-handlers","write-handlers",-2097288911),write_handlers,new cljs.core.Keyword(null,"supervisor","supervisor",-134060208),S,new cljs.core.Keyword(null,"chans","chans",-1107816853),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bus_in,bus_out], null)], null),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
});

kabel.peer.client_peer.cljs$lang$maxFixedArity = 6;

/**
 * Constructs a listening peer.
 */
kabel.peer.server_peer = (function kabel$peer$server_peer(var_args){
var args72674 = [];
var len__62575__auto___72791 = arguments.length;
var i__62576__auto___72792 = (0);
while(true){
if((i__62576__auto___72792 < len__62575__auto___72791)){
args72674.push((arguments[i__62576__auto___72792]));

var G__72793 = (i__62576__auto___72792 + (1));
i__62576__auto___72792 = G__72793;
continue;
} else {
}
break;
}

var G__72676 = args72674.length;
switch (G__72676) {
case 4:
return kabel.peer.server_peer.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return kabel.peer.server_peer.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 7:
return kabel.peer.server_peer.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args72674.length)].join('')));

}
});

kabel.peer.server_peer.cljs$core$IFn$_invoke$arity$4 = (function (S,handler,id,middleware){
return kabel.peer.server_peer.call(null,S,handler,id,middleware,kabel.middleware.transit.transit);
});

kabel.peer.server_peer.cljs$core$IFn$_invoke$arity$5 = (function (S,handler,id,middleware,serialization_middleware){
return kabel.peer.server_peer.call(null,S,handler,id,middleware,serialization_middleware,cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY));
});

kabel.peer.server_peer.cljs$core$IFn$_invoke$arity$7 = (function (S,handler,id,middleware,serialization_middleware,read_handlers,write_handlers){
var map__72677 = handler;
var map__72677__$1 = ((((!((map__72677 == null)))?((((map__72677.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72677.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__72677):map__72677);
var new_conns = cljs.core.get.call(null,map__72677__$1,new cljs.core.Keyword(null,"new-conns","new-conns",-469351198));
var url = cljs.core.get.call(null,map__72677__$1,new cljs.core.Keyword(null,"url","url",276297046));
var log = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var bus_in = cljs.core.async.chan.call(null);
var bus_out = cljs.core.async.pub.call(null,bus_in,new cljs.core.Keyword(null,"type","type",1174270348));
var peer = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"volatile","volatile",-1259779430),cljs.core.merge.call(null,handler,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"middleware","middleware",1462115504),middleware,new cljs.core.Keyword(null,"serialization-middleware","serialization-middleware",-1829880317),serialization_middleware,new cljs.core.Keyword(null,"read-handlers","read-handlers",2109459315),read_handlers,new cljs.core.Keyword(null,"write-handlers","write-handlers",-2097288911),write_handlers,new cljs.core.Keyword(null,"log","log",-1595516004),log,new cljs.core.Keyword(null,"supervisor","supervisor",-134060208),S,new cljs.core.Keyword(null,"chans","chans",-1107816853),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bus_in,bus_out], null)], null)),new cljs.core.Keyword(null,"addresses","addresses",-559529694),cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(handler)]),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
var c__69835__auto___72795 = superv.async.check_supervisor.call(null,superv.async.S);
var id__69836__auto___72796 = superv.async._register_go.call(null,S,cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","loop","clojure.core/loop",-1797836771,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"in","in",109346662,null),new cljs.core.Symbol(null,"out","out",729986010,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<?","<?",-1929864530,null),new cljs.core.Symbol(null,"S","S",-1387142461,null),new cljs.core.Symbol(null,"new-conns","new-conns",1171180329,null))], null),cljs.core.list(new cljs.core.Symbol(null,"drain","drain",-178568812,null),cljs.core.list(new cljs.core.Symbol(null,"middleware","middleware",-1192320265,null),cljs.core.list(new cljs.core.Symbol(null,"serialization-middleware","serialization-middleware",-189348790,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"S","S",-1387142461,null),new cljs.core.Symbol(null,"peer","peer",-1334772977,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"in","in",109346662,null),new cljs.core.Symbol(null,"out","out",729986010,null)], null)], null)))),cljs.core.list(new cljs.core.Symbol(null,"recur","recur",1202958259,null),cljs.core.list(new cljs.core.Symbol(null,"<?","<?",-1929864530,null),new cljs.core.Symbol(null,"S","S",-1387142461,null),new cljs.core.Symbol(null,"new-conns","new-conns",1171180329,null))))));
var c__64826__auto___72797 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__64826__auto___72797,c__69835__auto___72795,id__69836__auto___72796,map__72677,map__72677__$1,new_conns,url,log,bus_in,bus_out,peer){
return (function (){
var f__64827__auto__ = (function (){var switch__64803__auto__ = ((function (c__64826__auto___72797,c__69835__auto___72795,id__69836__auto___72796,map__72677,map__72677__$1,new_conns,url,log,bus_in,bus_out,peer){
return (function (state_72762){
var state_val_72763 = (state_72762[(1)]);
if((state_val_72763 === (7))){
var inst_72699 = (state_72762[(7)]);
var inst_72704 = (state_72762[(2)]);
var inst_72705 = cljs.core.nth.call(null,inst_72704,(0),null);
var inst_72706 = cljs.core.nth.call(null,inst_72704,(1),null);
var inst_72707 = cljs.core._EQ_.call(null,inst_72706,inst_72699);
var state_72762__$1 = (function (){var statearr_72764 = state_72762;
(statearr_72764[(8)] = inst_72705);

return statearr_72764;
})();
if(inst_72707){
var statearr_72765_72798 = state_72762__$1;
(statearr_72765_72798[(1)] = (8));

} else {
var statearr_72766_72799 = state_72762__$1;
(statearr_72766_72799[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72763 === (1))){
var state_72762__$1 = state_72762;
var statearr_72767_72800 = state_72762__$1;
(statearr_72767_72800[(2)] = null);

(statearr_72767_72800[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72763 === (4))){
var inst_72682 = (state_72762[(2)]);
var inst_72683 = superv.async._error.call(null,S);
var state_72762__$1 = state_72762;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_72762__$1,(5),inst_72683,inst_72682);
} else {
if((state_val_72763 === (15))){
var inst_72744 = (state_72762[(9)]);
var state_72762__$1 = state_72762;
var statearr_72768_72801 = state_72762__$1;
(statearr_72768_72801[(2)] = inst_72744);

(statearr_72768_72801[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72763 === (13))){
var inst_72738 = (state_72762[(10)]);
var inst_72743 = (state_72762[(2)]);
var inst_72744 = cljs.core.nth.call(null,inst_72743,(0),null);
var inst_72745 = cljs.core.nth.call(null,inst_72743,(1),null);
var inst_72746 = cljs.core._EQ_.call(null,inst_72745,inst_72738);
var state_72762__$1 = (function (){var statearr_72769 = state_72762;
(statearr_72769[(9)] = inst_72744);

return statearr_72769;
})();
if(inst_72746){
var statearr_72770_72802 = state_72762__$1;
(statearr_72770_72802[(1)] = (14));

} else {
var statearr_72771_72803 = state_72762__$1;
(statearr_72771_72803[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72763 === (6))){
var inst_72699 = (state_72762[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_72762,(4),Error,(3),(2));
var inst_72699__$1 = superv.async._abort.call(null,S);
var inst_72700 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_72701 = [inst_72699__$1,new_conns];
var inst_72702 = (new cljs.core.PersistentVector(null,2,(5),inst_72700,inst_72701,null));
var state_72762__$1 = (function (){var statearr_72772 = state_72762;
(statearr_72772[(7)] = inst_72699__$1);

return statearr_72772;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_72762__$1,(7),inst_72702,new cljs.core.Keyword(null,"priority","priority",1431093715),new cljs.core.Keyword(null,"true","true",-1114210334));
} else {
if((state_val_72763 === (3))){
var inst_72679 = (state_72762[(2)]);
var inst_72680 = superv.async._unregister_go.call(null,S,id__69836__auto___72796);
var state_72762__$1 = (function (){var statearr_72773 = state_72762;
(statearr_72773[(11)] = inst_72679);

(statearr_72773[(12)] = inst_72680);

return statearr_72773;
})();
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_72762__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72763 === (12))){
var inst_72758 = (state_72762[(2)]);
var state_72762__$1 = state_72762;
var statearr_72774_72804 = state_72762__$1;
(statearr_72774_72804[(2)] = inst_72758);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_72762__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72763 === (2))){
var inst_72760 = (state_72762[(2)]);
var state_72762__$1 = state_72762;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_72762__$1,inst_72760);
} else {
if((state_val_72763 === (11))){
var inst_72719 = (state_72762[(13)]);
var inst_72738 = (state_72762[(10)]);
var inst_72724 = cljs.core.nth.call(null,inst_72719,(0),null);
var inst_72725 = cljs.core.nth.call(null,inst_72719,(1),null);
var inst_72726 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_72727 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_72728 = [inst_72724,inst_72725];
var inst_72729 = (new cljs.core.PersistentVector(null,2,(5),inst_72727,inst_72728,null));
var inst_72730 = [S,peer,inst_72729];
var inst_72731 = (new cljs.core.PersistentVector(null,3,(5),inst_72726,inst_72730,null));
var inst_72732 = serialization_middleware.call(null,inst_72731);
var inst_72733 = middleware.call(null,inst_72732);
var inst_72734 = kabel.peer.drain.call(null,inst_72733);
var inst_72738__$1 = superv.async._abort.call(null,S);
var inst_72739 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_72740 = [inst_72738__$1,new_conns];
var inst_72741 = (new cljs.core.PersistentVector(null,2,(5),inst_72739,inst_72740,null));
var state_72762__$1 = (function (){var statearr_72775 = state_72762;
(statearr_72775[(14)] = inst_72734);

(statearr_72775[(10)] = inst_72738__$1);

return statearr_72775;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_72762__$1,(13),inst_72741,new cljs.core.Keyword(null,"priority","priority",1431093715),new cljs.core.Keyword(null,"true","true",-1114210334));
} else {
if((state_val_72763 === (9))){
var inst_72705 = (state_72762[(8)]);
var state_72762__$1 = state_72762;
var statearr_72776_72805 = state_72762__$1;
(statearr_72776_72805[(2)] = inst_72705);

(statearr_72776_72805[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72763 === (5))){
var inst_72685 = (state_72762[(2)]);
var state_72762__$1 = state_72762;
var statearr_72777_72806 = state_72762__$1;
(statearr_72777_72806[(2)] = inst_72685);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_72762__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72763 === (14))){
var inst_72748 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_72749 = [new cljs.core.Keyword(null,"aborted","aborted",1775972619)];
var inst_72750 = cljs.core.PersistentHashMap.fromArrays(inst_72748,inst_72749);
var inst_72751 = cljs.core.ex_info.call(null,"Aborted operations",inst_72750);
var state_72762__$1 = state_72762;
var statearr_72778_72807 = state_72762__$1;
(statearr_72778_72807[(2)] = inst_72751);

(statearr_72778_72807[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72763 === (16))){
var inst_72754 = (state_72762[(2)]);
var inst_72755 = superv.async.throw_if_exception.call(null,S,inst_72754);
var inst_72719 = inst_72755;
var state_72762__$1 = (function (){var statearr_72779 = state_72762;
(statearr_72779[(13)] = inst_72719);

return statearr_72779;
})();
var statearr_72780_72808 = state_72762__$1;
(statearr_72780_72808[(2)] = null);

(statearr_72780_72808[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72763 === (10))){
var inst_72715 = (state_72762[(2)]);
var inst_72716 = superv.async.throw_if_exception.call(null,S,inst_72715);
var inst_72717 = cljs.core.nth.call(null,inst_72716,(0),null);
var inst_72718 = cljs.core.nth.call(null,inst_72716,(1),null);
var inst_72719 = inst_72716;
var state_72762__$1 = (function (){var statearr_72781 = state_72762;
(statearr_72781[(13)] = inst_72719);

(statearr_72781[(15)] = inst_72717);

(statearr_72781[(16)] = inst_72718);

return statearr_72781;
})();
var statearr_72782_72809 = state_72762__$1;
(statearr_72782_72809[(2)] = null);

(statearr_72782_72809[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72763 === (8))){
var inst_72709 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_72710 = [new cljs.core.Keyword(null,"aborted","aborted",1775972619)];
var inst_72711 = cljs.core.PersistentHashMap.fromArrays(inst_72709,inst_72710);
var inst_72712 = cljs.core.ex_info.call(null,"Aborted operations",inst_72711);
var state_72762__$1 = state_72762;
var statearr_72783_72810 = state_72762__$1;
(statearr_72783_72810[(2)] = inst_72712);

(statearr_72783_72810[(1)] = (10));


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
});})(c__64826__auto___72797,c__69835__auto___72795,id__69836__auto___72796,map__72677,map__72677__$1,new_conns,url,log,bus_in,bus_out,peer))
;
return ((function (switch__64803__auto__,c__64826__auto___72797,c__69835__auto___72795,id__69836__auto___72796,map__72677,map__72677__$1,new_conns,url,log,bus_in,bus_out,peer){
return (function() {
var kabel$peer$state_machine__64804__auto__ = null;
var kabel$peer$state_machine__64804__auto____0 = (function (){
var statearr_72787 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_72787[(0)] = kabel$peer$state_machine__64804__auto__);

(statearr_72787[(1)] = (1));

return statearr_72787;
});
var kabel$peer$state_machine__64804__auto____1 = (function (state_72762){
while(true){
var ret_value__64805__auto__ = (function (){try{while(true){
var result__64806__auto__ = switch__64803__auto__.call(null,state_72762);
if(cljs.core.keyword_identical_QMARK_.call(null,result__64806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64806__auto__;
}
break;
}
}catch (e72788){if((e72788 instanceof Object)){
var ex__64807__auto__ = e72788;
var statearr_72789_72811 = state_72762;
(statearr_72789_72811[(5)] = ex__64807__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_72762);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e72788;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__64805__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72812 = state_72762;
state_72762 = G__72812;
continue;
} else {
return ret_value__64805__auto__;
}
break;
}
});
kabel$peer$state_machine__64804__auto__ = function(state_72762){
switch(arguments.length){
case 0:
return kabel$peer$state_machine__64804__auto____0.call(this);
case 1:
return kabel$peer$state_machine__64804__auto____1.call(this,state_72762);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
kabel$peer$state_machine__64804__auto__.cljs$core$IFn$_invoke$arity$0 = kabel$peer$state_machine__64804__auto____0;
kabel$peer$state_machine__64804__auto__.cljs$core$IFn$_invoke$arity$1 = kabel$peer$state_machine__64804__auto____1;
return kabel$peer$state_machine__64804__auto__;
})()
;})(switch__64803__auto__,c__64826__auto___72797,c__69835__auto___72795,id__69836__auto___72796,map__72677,map__72677__$1,new_conns,url,log,bus_in,bus_out,peer))
})();
var state__64828__auto__ = (function (){var statearr_72790 = f__64827__auto__.call(null);
(statearr_72790[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__64826__auto___72797);

return statearr_72790;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__64828__auto__);
});})(c__64826__auto___72797,c__69835__auto___72795,id__69836__auto___72796,map__72677,map__72677__$1,new_conns,url,log,bus_in,bus_out,peer))
);


return peer;
});

kabel.peer.server_peer.cljs$lang$maxFixedArity = 7;

kabel.peer.start = (function kabel$peer$start(peer){
var map__72886 = cljs.core.deref.call(null,peer);
var map__72886__$1 = ((((!((map__72886 == null)))?((((map__72886.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72886.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__72886):map__72886);
var map__72887 = cljs.core.get.call(null,map__72886__$1,new cljs.core.Keyword(null,"volatile","volatile",-1259779430));
var map__72887__$1 = ((((!((map__72887 == null)))?((((map__72887.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72887.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__72887):map__72887);
var S = cljs.core.get.call(null,map__72887__$1,new cljs.core.Keyword(null,"supervisor","supervisor",-134060208));
var c__67032__auto__ = superv.async.check_supervisor.call(null,superv.async.S);
var id__67033__auto__ = superv.async._register_go.call(null,S,cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Keyword(null,"started?","started?",-1301062863),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"peer","peer",-1334772977,null))),false,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"stop-fn","stop-fn",1292059281,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"peer","peer",-1334772977,null)),new cljs.core.Keyword(null,"volatile","volatile",-1259779430),new cljs.core.Keyword(null,"handler","handler",-195596612),new cljs.core.Keyword(null,"stop-fn","stop-fn",-348472246))], null),cljs.core.list(new cljs.core.Symbol(null,"info","info",1323462525,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"starting-peer","starting-peer",1904331024),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.list(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"peer","peer",-1334772977,null)))], null)),cljs.core.list(new cljs.core.Symbol(null,"swap!","swap!",-655677516,null),new cljs.core.Symbol(null,"peer","peer",-1334772977,null),new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"volatile","volatile",-1259779430)], null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"peer","peer",-1334772977,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"volatile","volatile",-1259779430),new cljs.core.Keyword(null,"start-fn","start-fn",1037074910)], null))),cljs.core.list(new cljs.core.Symbol(null,"swap!","swap!",-655677516,null),new cljs.core.Symbol(null,"peer","peer",-1334772977,null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"started?","started?",-1301062863),true),true))));
var c__64826__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__64826__auto__,c__67032__auto__,id__67033__auto__,map__72886,map__72886__$1,map__72887,map__72887__$1,S){
return (function (){
var f__64827__auto__ = (function (){var switch__64803__auto__ = ((function (c__64826__auto__,c__67032__auto__,id__67033__auto__,map__72886,map__72886__$1,map__72887,map__72887__$1,S){
return (function (state_72935){
var state_val_72936 = (state_72935[(1)]);
if((state_val_72936 === (7))){
var inst_72893 = (state_72935[(7)]);
var inst_72901 = (state_72935[(2)]);
var state_72935__$1 = (function (){var statearr_72937 = state_72935;
(statearr_72937[(8)] = inst_72901);

return statearr_72937;
})();
var statearr_72938_72959 = state_72935__$1;
(statearr_72938_72959[(2)] = inst_72893);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_72935__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72936 === (1))){
var state_72935__$1 = state_72935;
var statearr_72939_72960 = state_72935__$1;
(statearr_72939_72960[(2)] = null);

(statearr_72939_72960[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72936 === (4))){
var inst_72893 = (state_72935[(7)]);
var inst_72893__$1 = (state_72935[(2)]);
var inst_72894 = cljs.core.ex_data.call(null,inst_72893__$1);
var inst_72895 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_72894);
var inst_72896 = cljs.core._EQ_.call(null,inst_72895,new cljs.core.Keyword(null,"aborted","aborted",1775972619));
var state_72935__$1 = (function (){var statearr_72940 = state_72935;
(statearr_72940[(7)] = inst_72893__$1);

return statearr_72940;
})();
if(inst_72896){
var statearr_72941_72961 = state_72935__$1;
(statearr_72941_72961[(1)] = (5));

} else {
var statearr_72942_72962 = state_72935__$1;
(statearr_72942_72962[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72936 === (6))){
var inst_72893 = (state_72935[(7)]);
var inst_72899 = superv.async._track_exception.call(null,S,inst_72893);
var state_72935__$1 = state_72935;
var statearr_72943_72963 = state_72935__$1;
(statearr_72943_72963[(2)] = inst_72899);

(statearr_72943_72963[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72936 === (3))){
var inst_72890 = (state_72935[(2)]);
var inst_72891 = superv.async._unregister_go.call(null,S,id__67033__auto__);
var state_72935__$1 = (function (){var statearr_72944 = state_72935;
(statearr_72944[(9)] = inst_72891);

(statearr_72944[(10)] = inst_72890);

return statearr_72944;
})();
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_72935__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72936 === (2))){
var inst_72933 = (state_72935[(2)]);
var state_72935__$1 = state_72935;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_72935__$1,inst_72933);
} else {
if((state_val_72936 === (11))){
var inst_72931 = (state_72935[(2)]);
var state_72935__$1 = state_72935;
var statearr_72945_72964 = state_72935__$1;
(statearr_72945_72964[(2)] = inst_72931);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_72935__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72936 === (9))){
var state_72935__$1 = state_72935;
var statearr_72946_72965 = state_72935__$1;
(statearr_72946_72965[(2)] = false);

(statearr_72946_72965[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72936 === (5))){
var state_72935__$1 = state_72935;
var statearr_72947_72966 = state_72935__$1;
(statearr_72947_72966[(2)] = null);

(statearr_72947_72966[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72936 === (10))){
var inst_72909 = cljs.core.deref.call(null,peer);
var inst_72910 = new cljs.core.Keyword(null,"volatile","volatile",-1259779430).cljs$core$IFn$_invoke$arity$1(inst_72909);
var inst_72911 = new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(inst_72910);
var inst_72912 = new cljs.core.Keyword(null,"stop-fn","stop-fn",-348472246).cljs$core$IFn$_invoke$arity$1(inst_72911);
var inst_72913 = [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"id","id",-1388402092)];
var inst_72914 = cljs.core.deref.call(null,peer);
var inst_72915 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(inst_72914);
var inst_72916 = [new cljs.core.Keyword(null,"starting-peer","starting-peer",1904331024),inst_72915];
var inst_72917 = cljs.core.PersistentHashMap.fromArrays(inst_72913,inst_72916);
var inst_72918 = cljs.core.pr_str.call(null,inst_72917);
var inst_72919 = console.info("kabel.peer",inst_72918);
var inst_72920 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_72921 = [new cljs.core.Keyword(null,"volatile","volatile",-1259779430)];
var inst_72922 = (new cljs.core.PersistentVector(null,1,(5),inst_72920,inst_72921,null));
var inst_72923 = cljs.core.deref.call(null,peer);
var inst_72924 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_72925 = [new cljs.core.Keyword(null,"volatile","volatile",-1259779430),new cljs.core.Keyword(null,"start-fn","start-fn",1037074910)];
var inst_72926 = (new cljs.core.PersistentVector(null,2,(5),inst_72924,inst_72925,null));
var inst_72927 = cljs.core.get_in.call(null,inst_72923,inst_72926);
var inst_72928 = cljs.core.swap_BANG_.call(null,peer,cljs.core.update_in,inst_72922,inst_72927);
var inst_72929 = cljs.core.swap_BANG_.call(null,peer,cljs.core.assoc,new cljs.core.Keyword(null,"started?","started?",-1301062863),true);
var state_72935__$1 = (function (){var statearr_72948 = state_72935;
(statearr_72948[(11)] = inst_72928);

(statearr_72948[(12)] = inst_72912);

(statearr_72948[(13)] = inst_72919);

(statearr_72948[(14)] = inst_72929);

return statearr_72948;
})();
var statearr_72949_72967 = state_72935__$1;
(statearr_72949_72967[(2)] = true);

(statearr_72949_72967[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72936 === (8))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_72935,(4),Error,(3),(2));
var inst_72905 = cljs.core.deref.call(null,peer);
var inst_72906 = new cljs.core.Keyword(null,"started?","started?",-1301062863).cljs$core$IFn$_invoke$arity$1(inst_72905);
var state_72935__$1 = state_72935;
if(cljs.core.truth_(inst_72906)){
var statearr_72950_72968 = state_72935__$1;
(statearr_72950_72968[(1)] = (9));

} else {
var statearr_72951_72969 = state_72935__$1;
(statearr_72951_72969[(1)] = (10));

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
});})(c__64826__auto__,c__67032__auto__,id__67033__auto__,map__72886,map__72886__$1,map__72887,map__72887__$1,S))
;
return ((function (switch__64803__auto__,c__64826__auto__,c__67032__auto__,id__67033__auto__,map__72886,map__72886__$1,map__72887,map__72887__$1,S){
return (function() {
var kabel$peer$start_$_state_machine__64804__auto__ = null;
var kabel$peer$start_$_state_machine__64804__auto____0 = (function (){
var statearr_72955 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_72955[(0)] = kabel$peer$start_$_state_machine__64804__auto__);

(statearr_72955[(1)] = (1));

return statearr_72955;
});
var kabel$peer$start_$_state_machine__64804__auto____1 = (function (state_72935){
while(true){
var ret_value__64805__auto__ = (function (){try{while(true){
var result__64806__auto__ = switch__64803__auto__.call(null,state_72935);
if(cljs.core.keyword_identical_QMARK_.call(null,result__64806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64806__auto__;
}
break;
}
}catch (e72956){if((e72956 instanceof Object)){
var ex__64807__auto__ = e72956;
var statearr_72957_72970 = state_72935;
(statearr_72957_72970[(5)] = ex__64807__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_72935);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e72956;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__64805__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72971 = state_72935;
state_72935 = G__72971;
continue;
} else {
return ret_value__64805__auto__;
}
break;
}
});
kabel$peer$start_$_state_machine__64804__auto__ = function(state_72935){
switch(arguments.length){
case 0:
return kabel$peer$start_$_state_machine__64804__auto____0.call(this);
case 1:
return kabel$peer$start_$_state_machine__64804__auto____1.call(this,state_72935);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
kabel$peer$start_$_state_machine__64804__auto__.cljs$core$IFn$_invoke$arity$0 = kabel$peer$start_$_state_machine__64804__auto____0;
kabel$peer$start_$_state_machine__64804__auto__.cljs$core$IFn$_invoke$arity$1 = kabel$peer$start_$_state_machine__64804__auto____1;
return kabel$peer$start_$_state_machine__64804__auto__;
})()
;})(switch__64803__auto__,c__64826__auto__,c__67032__auto__,id__67033__auto__,map__72886,map__72886__$1,map__72887,map__72887__$1,S))
})();
var state__64828__auto__ = (function (){var statearr_72958 = f__64827__auto__.call(null);
(statearr_72958[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__64826__auto__);

return statearr_72958;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__64828__auto__);
});})(c__64826__auto__,c__67032__auto__,id__67033__auto__,map__72886,map__72886__$1,map__72887,map__72887__$1,S))
);

return c__64826__auto__;
});
kabel.peer.stop = (function kabel$peer$stop(peer){
var map__73106 = cljs.core.deref.call(null,peer);
var map__73106__$1 = ((((!((map__73106 == null)))?((((map__73106.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73106.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__73106):map__73106);
var map__73107 = cljs.core.get.call(null,map__73106__$1,new cljs.core.Keyword(null,"volatile","volatile",-1259779430));
var map__73107__$1 = ((((!((map__73107 == null)))?((((map__73107.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73107.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__73107):map__73107);
var S = cljs.core.get.call(null,map__73107__$1,new cljs.core.Keyword(null,"supervisor","supervisor",-134060208));
var c__67032__auto__ = superv.async.check_supervisor.call(null,superv.async.S);
var id__67033__auto__ = superv.async._register_go.call(null,S,cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"if-not","if-not",-265415609,null),cljs.core.list(new cljs.core.Keyword(null,"started?","started?",-1301062863),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"peer","peer",-1334772977,null))),false,cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol(null,"info","info",1323462525,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"stopping-peer","stopping-peer",1981986402),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.list(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"peer","peer",-1334772977,null)))], null)),cljs.core.list(new cljs.core.Symbol(null,"when-let","when-let",-1383043480,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"stop-fn","stop-fn",1292059281,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"peer","peer",-1334772977,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"volatile","volatile",-1259779430),new cljs.core.Keyword(null,"stop-fn","stop-fn",-348472246)], null))], null),cljs.core.list(new cljs.core.Symbol(null,"stop-fn","stop-fn",1292059281,null),new cljs.core.Keyword(null,"timeout","timeout",-318625318),(1000))),cljs.core.list(new cljs.core.Symbol(null,"<?","<?",-1929864530,null),new cljs.core.Symbol(null,"S","S",-1387142461,null),cljs.core.list(new cljs.core.Symbol(null,"timeout","timeout",1321906209,null),(200))),cljs.core.list(new cljs.core.Symbol(null,"when-let","when-let",-1383043480,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"hub","hub",-676667763,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"peer","peer",-1334772977,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"volatile","volatile",-1259779430),new cljs.core.Keyword(null,"channel-hub","channel-hub",1030671643)], null))], null),cljs.core.list(new cljs.core.Symbol(null,"reset!","reset!",527275632,null),new cljs.core.Symbol(null,"hub","hub",-676667763,null),cljs.core.PersistentArrayMap.EMPTY)),cljs.core.list(new cljs.core.Symbol(null,"when-let","when-let",-1383043480,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"in","in",109346662,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"peer","peer",-1334772977,null)),new cljs.core.Keyword(null,"volatile","volatile",-1259779430),new cljs.core.Keyword(null,"chans","chans",-1107816853),new cljs.core.Symbol(null,"first","first",996428481,null))], null),cljs.core.list(new cljs.core.Symbol(null,"close!","close!",-438778971,null),new cljs.core.Symbol(null,"in","in",109346662,null))),cljs.core.list(new cljs.core.Symbol(null,"swap!","swap!",-655677516,null),new cljs.core.Symbol(null,"peer","peer",-1334772977,null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"started?","started?",-1301062863),false),true))));
var c__64826__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__64826__auto__,c__67032__auto__,id__67033__auto__,map__73106,map__73106__$1,map__73107,map__73107__$1,S){
return (function (){
var f__64827__auto__ = (function (){var switch__64803__auto__ = ((function (c__64826__auto__,c__67032__auto__,id__67033__auto__,map__73106,map__73106__$1,map__73107,map__73107__$1,S){
return (function (state_73195){
var state_val_73196 = (state_73195[(1)]);
if((state_val_73196 === (7))){
var inst_73113 = (state_73195[(7)]);
var inst_73121 = (state_73195[(2)]);
var state_73195__$1 = (function (){var statearr_73197 = state_73195;
(statearr_73197[(8)] = inst_73121);

return statearr_73197;
})();
var statearr_73198_73240 = state_73195__$1;
(statearr_73198_73240[(2)] = inst_73113);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_73195__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73196 === (20))){
var state_73195__$1 = state_73195;
var statearr_73199_73241 = state_73195__$1;
(statearr_73199_73241[(2)] = null);

(statearr_73199_73241[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73196 === (1))){
var state_73195__$1 = state_73195;
var statearr_73200_73242 = state_73195__$1;
(statearr_73200_73242[(2)] = null);

(statearr_73200_73242[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73196 === (24))){
var inst_73188 = (state_73195[(2)]);
var inst_73189 = cljs.core.swap_BANG_.call(null,peer,cljs.core.assoc,new cljs.core.Keyword(null,"started?","started?",-1301062863),false);
var state_73195__$1 = (function (){var statearr_73201 = state_73195;
(statearr_73201[(9)] = inst_73188);

(statearr_73201[(10)] = inst_73189);

return statearr_73201;
})();
var statearr_73202_73243 = state_73195__$1;
(statearr_73202_73243[(2)] = true);

(statearr_73202_73243[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73196 === (4))){
var inst_73113 = (state_73195[(7)]);
var inst_73113__$1 = (state_73195[(2)]);
var inst_73114 = cljs.core.ex_data.call(null,inst_73113__$1);
var inst_73115 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_73114);
var inst_73116 = cljs.core._EQ_.call(null,inst_73115,new cljs.core.Keyword(null,"aborted","aborted",1775972619));
var state_73195__$1 = (function (){var statearr_73203 = state_73195;
(statearr_73203[(7)] = inst_73113__$1);

return statearr_73203;
})();
if(inst_73116){
var statearr_73204_73244 = state_73195__$1;
(statearr_73204_73244[(1)] = (5));

} else {
var statearr_73205_73245 = state_73195__$1;
(statearr_73205_73245[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73196 === (15))){
var inst_73150 = (state_73195[(11)]);
var inst_73156 = (state_73195[(2)]);
var inst_73157 = cljs.core.nth.call(null,inst_73156,(0),null);
var inst_73158 = cljs.core.nth.call(null,inst_73156,(1),null);
var inst_73159 = cljs.core._EQ_.call(null,inst_73158,inst_73150);
var state_73195__$1 = (function (){var statearr_73206 = state_73195;
(statearr_73206[(12)] = inst_73157);

return statearr_73206;
})();
if(inst_73159){
var statearr_73207_73246 = state_73195__$1;
(statearr_73207_73246[(1)] = (16));

} else {
var statearr_73208_73247 = state_73195__$1;
(statearr_73208_73247[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73196 === (21))){
var inst_73183 = (state_73195[(13)]);
var inst_73179 = (state_73195[(2)]);
var inst_73180 = cljs.core.deref.call(null,peer);
var inst_73181 = new cljs.core.Keyword(null,"volatile","volatile",-1259779430).cljs$core$IFn$_invoke$arity$1(inst_73180);
var inst_73182 = new cljs.core.Keyword(null,"chans","chans",-1107816853).cljs$core$IFn$_invoke$arity$1(inst_73181);
var inst_73183__$1 = cljs.core.first.call(null,inst_73182);
var state_73195__$1 = (function (){var statearr_73209 = state_73195;
(statearr_73209[(14)] = inst_73179);

(statearr_73209[(13)] = inst_73183__$1);

return statearr_73209;
})();
if(cljs.core.truth_(inst_73183__$1)){
var statearr_73210_73248 = state_73195__$1;
(statearr_73210_73248[(1)] = (22));

} else {
var statearr_73211_73249 = state_73195__$1;
(statearr_73211_73249[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73196 === (13))){
var state_73195__$1 = state_73195;
var statearr_73212_73250 = state_73195__$1;
(statearr_73212_73250[(2)] = null);

(statearr_73212_73250[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73196 === (22))){
var inst_73183 = (state_73195[(13)]);
var inst_73185 = cljs.core.async.close_BANG_.call(null,inst_73183);
var state_73195__$1 = state_73195;
var statearr_73213_73251 = state_73195__$1;
(statearr_73213_73251[(2)] = inst_73185);

(statearr_73213_73251[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73196 === (6))){
var inst_73113 = (state_73195[(7)]);
var inst_73119 = superv.async._track_exception.call(null,S,inst_73113);
var state_73195__$1 = state_73195;
var statearr_73214_73252 = state_73195__$1;
(statearr_73214_73252[(2)] = inst_73119);

(statearr_73214_73252[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73196 === (17))){
var inst_73157 = (state_73195[(12)]);
var state_73195__$1 = state_73195;
var statearr_73215_73253 = state_73195__$1;
(statearr_73215_73253[(2)] = inst_73157);

(statearr_73215_73253[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73196 === (3))){
var inst_73110 = (state_73195[(2)]);
var inst_73111 = superv.async._unregister_go.call(null,S,id__67033__auto__);
var state_73195__$1 = (function (){var statearr_73216 = state_73195;
(statearr_73216[(15)] = inst_73111);

(statearr_73216[(16)] = inst_73110);

return statearr_73216;
})();
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_73195__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73196 === (12))){
var inst_73141 = (state_73195[(17)]);
var inst_73143 = inst_73141.call(null,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(1000));
var state_73195__$1 = state_73195;
var statearr_73217_73254 = state_73195__$1;
(statearr_73217_73254[(2)] = inst_73143);

(statearr_73217_73254[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73196 === (2))){
var inst_73193 = (state_73195[(2)]);
var state_73195__$1 = state_73195;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_73195__$1,inst_73193);
} else {
if((state_val_73196 === (23))){
var state_73195__$1 = state_73195;
var statearr_73218_73255 = state_73195__$1;
(statearr_73218_73255[(2)] = null);

(statearr_73218_73255[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73196 === (19))){
var inst_73173 = (state_73195[(18)]);
var inst_73175 = cljs.core.PersistentHashMap.EMPTY;
var inst_73176 = cljs.core.reset_BANG_.call(null,inst_73173,inst_73175);
var state_73195__$1 = state_73195;
var statearr_73219_73256 = state_73195__$1;
(statearr_73219_73256[(2)] = inst_73176);

(statearr_73219_73256[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73196 === (11))){
var inst_73191 = (state_73195[(2)]);
var state_73195__$1 = state_73195;
var statearr_73220_73257 = state_73195__$1;
(statearr_73220_73257[(2)] = inst_73191);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_73195__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73196 === (9))){
var state_73195__$1 = state_73195;
var statearr_73221_73258 = state_73195__$1;
(statearr_73221_73258[(2)] = false);

(statearr_73221_73258[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73196 === (5))){
var state_73195__$1 = state_73195;
var statearr_73222_73259 = state_73195__$1;
(statearr_73222_73259[(2)] = null);

(statearr_73222_73259[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73196 === (14))){
var inst_73150 = (state_73195[(11)]);
var inst_73146 = (state_73195[(2)]);
var inst_73150__$1 = superv.async._abort.call(null,S);
var inst_73151 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_73152 = cljs.core.async.timeout.call(null,(200));
var inst_73153 = [inst_73150__$1,inst_73152];
var inst_73154 = (new cljs.core.PersistentVector(null,2,(5),inst_73151,inst_73153,null));
var state_73195__$1 = (function (){var statearr_73223 = state_73195;
(statearr_73223[(19)] = inst_73146);

(statearr_73223[(11)] = inst_73150__$1);

return statearr_73223;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_73195__$1,(15),inst_73154,new cljs.core.Keyword(null,"priority","priority",1431093715),new cljs.core.Keyword(null,"true","true",-1114210334));
} else {
if((state_val_73196 === (16))){
var inst_73161 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_73162 = [new cljs.core.Keyword(null,"aborted","aborted",1775972619)];
var inst_73163 = cljs.core.PersistentHashMap.fromArrays(inst_73161,inst_73162);
var inst_73164 = cljs.core.ex_info.call(null,"Aborted operations",inst_73163);
var state_73195__$1 = state_73195;
var statearr_73224_73260 = state_73195__$1;
(statearr_73224_73260[(2)] = inst_73164);

(statearr_73224_73260[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73196 === (10))){
var inst_73141 = (state_73195[(17)]);
var inst_73130 = [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"id","id",-1388402092)];
var inst_73131 = cljs.core.deref.call(null,peer);
var inst_73132 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(inst_73131);
var inst_73133 = [new cljs.core.Keyword(null,"stopping-peer","stopping-peer",1981986402),inst_73132];
var inst_73134 = cljs.core.PersistentHashMap.fromArrays(inst_73130,inst_73133);
var inst_73135 = cljs.core.pr_str.call(null,inst_73134);
var inst_73136 = console.info("kabel.peer",inst_73135);
var inst_73137 = cljs.core.deref.call(null,peer);
var inst_73138 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_73139 = [new cljs.core.Keyword(null,"volatile","volatile",-1259779430),new cljs.core.Keyword(null,"stop-fn","stop-fn",-348472246)];
var inst_73140 = (new cljs.core.PersistentVector(null,2,(5),inst_73138,inst_73139,null));
var inst_73141__$1 = cljs.core.get_in.call(null,inst_73137,inst_73140);
var state_73195__$1 = (function (){var statearr_73225 = state_73195;
(statearr_73225[(17)] = inst_73141__$1);

(statearr_73225[(20)] = inst_73136);

return statearr_73225;
})();
if(cljs.core.truth_(inst_73141__$1)){
var statearr_73226_73261 = state_73195__$1;
(statearr_73226_73261[(1)] = (12));

} else {
var statearr_73227_73262 = state_73195__$1;
(statearr_73227_73262[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73196 === (18))){
var inst_73173 = (state_73195[(18)]);
var inst_73167 = (state_73195[(2)]);
var inst_73168 = superv.async.throw_if_exception.call(null,S,inst_73167);
var inst_73169 = cljs.core.deref.call(null,peer);
var inst_73170 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_73171 = [new cljs.core.Keyword(null,"volatile","volatile",-1259779430),new cljs.core.Keyword(null,"channel-hub","channel-hub",1030671643)];
var inst_73172 = (new cljs.core.PersistentVector(null,2,(5),inst_73170,inst_73171,null));
var inst_73173__$1 = cljs.core.get_in.call(null,inst_73169,inst_73172);
var state_73195__$1 = (function (){var statearr_73228 = state_73195;
(statearr_73228[(18)] = inst_73173__$1);

(statearr_73228[(21)] = inst_73168);

return statearr_73228;
})();
if(cljs.core.truth_(inst_73173__$1)){
var statearr_73229_73263 = state_73195__$1;
(statearr_73229_73263[(1)] = (19));

} else {
var statearr_73230_73264 = state_73195__$1;
(statearr_73230_73264[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73196 === (8))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_73195,(4),Error,(3),(2));
var inst_73125 = cljs.core.deref.call(null,peer);
var inst_73126 = new cljs.core.Keyword(null,"started?","started?",-1301062863).cljs$core$IFn$_invoke$arity$1(inst_73125);
var inst_73127 = cljs.core.not.call(null,inst_73126);
var state_73195__$1 = state_73195;
if(inst_73127){
var statearr_73231_73265 = state_73195__$1;
(statearr_73231_73265[(1)] = (9));

} else {
var statearr_73232_73266 = state_73195__$1;
(statearr_73232_73266[(1)] = (10));

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
}
}
}
}
}
}
}
}
}
}
}
});})(c__64826__auto__,c__67032__auto__,id__67033__auto__,map__73106,map__73106__$1,map__73107,map__73107__$1,S))
;
return ((function (switch__64803__auto__,c__64826__auto__,c__67032__auto__,id__67033__auto__,map__73106,map__73106__$1,map__73107,map__73107__$1,S){
return (function() {
var kabel$peer$stop_$_state_machine__64804__auto__ = null;
var kabel$peer$stop_$_state_machine__64804__auto____0 = (function (){
var statearr_73236 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_73236[(0)] = kabel$peer$stop_$_state_machine__64804__auto__);

(statearr_73236[(1)] = (1));

return statearr_73236;
});
var kabel$peer$stop_$_state_machine__64804__auto____1 = (function (state_73195){
while(true){
var ret_value__64805__auto__ = (function (){try{while(true){
var result__64806__auto__ = switch__64803__auto__.call(null,state_73195);
if(cljs.core.keyword_identical_QMARK_.call(null,result__64806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64806__auto__;
}
break;
}
}catch (e73237){if((e73237 instanceof Object)){
var ex__64807__auto__ = e73237;
var statearr_73238_73267 = state_73195;
(statearr_73238_73267[(5)] = ex__64807__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_73195);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e73237;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__64805__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73268 = state_73195;
state_73195 = G__73268;
continue;
} else {
return ret_value__64805__auto__;
}
break;
}
});
kabel$peer$stop_$_state_machine__64804__auto__ = function(state_73195){
switch(arguments.length){
case 0:
return kabel$peer$stop_$_state_machine__64804__auto____0.call(this);
case 1:
return kabel$peer$stop_$_state_machine__64804__auto____1.call(this,state_73195);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
kabel$peer$stop_$_state_machine__64804__auto__.cljs$core$IFn$_invoke$arity$0 = kabel$peer$stop_$_state_machine__64804__auto____0;
kabel$peer$stop_$_state_machine__64804__auto__.cljs$core$IFn$_invoke$arity$1 = kabel$peer$stop_$_state_machine__64804__auto____1;
return kabel$peer$stop_$_state_machine__64804__auto__;
})()
;})(switch__64803__auto__,c__64826__auto__,c__67032__auto__,id__67033__auto__,map__73106,map__73106__$1,map__73107,map__73107__$1,S))
})();
var state__64828__auto__ = (function (){var statearr_73239 = f__64827__auto__.call(null);
(statearr_73239[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__64826__auto__);

return statearr_73239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__64828__auto__);
});})(c__64826__auto__,c__67032__auto__,id__67033__auto__,map__73106,map__73106__$1,map__73107,map__73107__$1,S))
);

return c__64826__auto__;
});

//# sourceMappingURL=peer.js.map?rel=1506321320785