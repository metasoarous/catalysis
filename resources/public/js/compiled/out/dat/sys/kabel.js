// Compiled by ClojureScript 1.9.542 {}
goog.provide('dat.sys.kabel');
goog.require('cljs.core');
goog.require('com.stuartsierra.component');
goog.require('taoensso.timbre');
goog.require('kabel.client');
goog.require('kabel.peer');
goog.require('superv.async');
goog.require('cljs.core.async');
goog.require('kabel.middleware.transit');
goog.require('hasch.core');
dat.sys.kabel.pong_middleware = (function dat$sys$kabel$pong_middleware(p__73271){
var vec__73316 = p__73271;
var S = cljs.core.nth.call(null,vec__73316,(0),null);
var peer = cljs.core.nth.call(null,vec__73316,(1),null);
var vec__73319 = cljs.core.nth.call(null,vec__73316,(2),null);
var in$ = cljs.core.nth.call(null,vec__73319,(0),null);
var out = cljs.core.nth.call(null,vec__73319,(1),null);
var new_in = cljs.core.async.chan.call(null);
var new_out = cljs.core.async.chan.call(null);
var c__64826__auto___73360 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__64826__auto___73360,new_in,new_out,vec__73316,S,peer,vec__73319,in$,out){
return (function (){
var f__64827__auto__ = (function (){var switch__64803__auto__ = ((function (c__64826__auto___73360,new_in,new_out,vec__73316,S,peer,vec__73319,in$,out){
return (function (state_73341){
var state_val_73342 = (state_73341[(1)]);
if((state_val_73342 === (1))){
var state_73341__$1 = state_73341;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_73341__$1,(2),in$);
} else {
if((state_val_73342 === (2))){
var inst_73323 = (state_73341[(2)]);
var inst_73324 = inst_73323;
var state_73341__$1 = (function (){var statearr_73343 = state_73341;
(statearr_73343[(7)] = inst_73324);

return statearr_73343;
})();
var statearr_73344_73361 = state_73341__$1;
(statearr_73344_73361[(2)] = null);

(statearr_73344_73361[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73342 === (3))){
var inst_73324 = (state_73341[(7)]);
var state_73341__$1 = state_73341;
if(cljs.core.truth_(inst_73324)){
var statearr_73345_73362 = state_73341__$1;
(statearr_73345_73362[(1)] = (5));

} else {
var statearr_73346_73363 = state_73341__$1;
(statearr_73346_73363[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73342 === (4))){
var inst_73339 = (state_73341[(2)]);
var state_73341__$1 = state_73341;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_73341__$1,inst_73339);
} else {
if((state_val_73342 === (5))){
var inst_73324 = (state_73341[(7)]);
var inst_73327 = (function (){var i = inst_73324;
return ((function (i,inst_73324,state_val_73342,c__64826__auto___73360,new_in,new_out,vec__73316,S,peer,vec__73319,in$,out){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ponging ",i], null);
});
;})(i,inst_73324,state_val_73342,c__64826__auto___73360,new_in,new_out,vec__73316,S,peer,vec__73319,in$,out))
})();
var inst_73328 = (new cljs.core.Delay(inst_73327,null));
var inst_73329 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"dat.sys.kabel","/tmp/form-init3486417385122683475.clj",34,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_73328,null,-439562796);
var state_73341__$1 = (function (){var statearr_73347 = state_73341;
(statearr_73347[(8)] = inst_73329);

return statearr_73347;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_73341__$1,(8),out,inst_73324);
} else {
if((state_val_73342 === (6))){
var state_73341__$1 = state_73341;
var statearr_73348_73364 = state_73341__$1;
(statearr_73348_73364[(2)] = null);

(statearr_73348_73364[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73342 === (7))){
var inst_73337 = (state_73341[(2)]);
var state_73341__$1 = state_73341;
var statearr_73349_73365 = state_73341__$1;
(statearr_73349_73365[(2)] = inst_73337);

(statearr_73349_73365[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73342 === (8))){
var inst_73331 = (state_73341[(2)]);
var state_73341__$1 = (function (){var statearr_73350 = state_73341;
(statearr_73350[(9)] = inst_73331);

return statearr_73350;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_73341__$1,(9),in$);
} else {
if((state_val_73342 === (9))){
var inst_73333 = (state_73341[(2)]);
var inst_73324 = inst_73333;
var state_73341__$1 = (function (){var statearr_73351 = state_73341;
(statearr_73351[(7)] = inst_73324);

return statearr_73351;
})();
var statearr_73352_73366 = state_73341__$1;
(statearr_73352_73366[(2)] = null);

(statearr_73352_73366[(1)] = (3));


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
});})(c__64826__auto___73360,new_in,new_out,vec__73316,S,peer,vec__73319,in$,out))
;
return ((function (switch__64803__auto__,c__64826__auto___73360,new_in,new_out,vec__73316,S,peer,vec__73319,in$,out){
return (function() {
var dat$sys$kabel$pong_middleware_$_state_machine__64804__auto__ = null;
var dat$sys$kabel$pong_middleware_$_state_machine__64804__auto____0 = (function (){
var statearr_73356 = [null,null,null,null,null,null,null,null,null,null];
(statearr_73356[(0)] = dat$sys$kabel$pong_middleware_$_state_machine__64804__auto__);

(statearr_73356[(1)] = (1));

return statearr_73356;
});
var dat$sys$kabel$pong_middleware_$_state_machine__64804__auto____1 = (function (state_73341){
while(true){
var ret_value__64805__auto__ = (function (){try{while(true){
var result__64806__auto__ = switch__64803__auto__.call(null,state_73341);
if(cljs.core.keyword_identical_QMARK_.call(null,result__64806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64806__auto__;
}
break;
}
}catch (e73357){if((e73357 instanceof Object)){
var ex__64807__auto__ = e73357;
var statearr_73358_73367 = state_73341;
(statearr_73358_73367[(5)] = ex__64807__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_73341);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e73357;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__64805__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73368 = state_73341;
state_73341 = G__73368;
continue;
} else {
return ret_value__64805__auto__;
}
break;
}
});
dat$sys$kabel$pong_middleware_$_state_machine__64804__auto__ = function(state_73341){
switch(arguments.length){
case 0:
return dat$sys$kabel$pong_middleware_$_state_machine__64804__auto____0.call(this);
case 1:
return dat$sys$kabel$pong_middleware_$_state_machine__64804__auto____1.call(this,state_73341);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
dat$sys$kabel$pong_middleware_$_state_machine__64804__auto__.cljs$core$IFn$_invoke$arity$0 = dat$sys$kabel$pong_middleware_$_state_machine__64804__auto____0;
dat$sys$kabel$pong_middleware_$_state_machine__64804__auto__.cljs$core$IFn$_invoke$arity$1 = dat$sys$kabel$pong_middleware_$_state_machine__64804__auto____1;
return dat$sys$kabel$pong_middleware_$_state_machine__64804__auto__;
})()
;})(switch__64803__auto__,c__64826__auto___73360,new_in,new_out,vec__73316,S,peer,vec__73319,in$,out))
})();
var state__64828__auto__ = (function (){var statearr_73359 = f__64827__auto__.call(null);
(statearr_73359[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__64826__auto___73360);

return statearr_73359;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__64828__auto__);
});})(c__64826__auto___73360,new_in,new_out,vec__73316,S,peer,vec__73319,in$,out))
);


return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [S,peer,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_in,new_out], null)], null);
});
dat.sys.kabel.ping_middleware = (function dat$sys$kabel$ping_middleware(p__73369){
var vec__73428 = p__73369;
var S = cljs.core.nth.call(null,vec__73428,(0),null);
var peer = cljs.core.nth.call(null,vec__73428,(1),null);
var vec__73431 = cljs.core.nth.call(null,vec__73428,(2),null);
var in$ = cljs.core.nth.call(null,vec__73431,(0),null);
var out = cljs.core.nth.call(null,vec__73431,(1),null);
var new_in = cljs.core.async.chan.call(null);
var new_out = cljs.core.async.chan.call(null);
var c__67032__auto___73486 = superv.async.check_supervisor.call(null,superv.async.S);
var id__67033__auto___73487 = superv.async._register_go.call(null,S,cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"put?","put?",-2135604338,null),new cljs.core.Symbol(null,"S","S",-1387142461,null),new cljs.core.Symbol(null,"out","out",729986010,null),"ping"),cljs.core.list(new cljs.core.Symbol("log","debug","log/debug",31698775,null),"1. client incoming message:",cljs.core.list(new cljs.core.Symbol(null,"<?","<?",-1929864530,null),new cljs.core.Symbol(null,"S","S",-1387142461,null),new cljs.core.Symbol(null,"in","in",109346662,null))),cljs.core.list(new cljs.core.Symbol(null,"put?","put?",-2135604338,null),new cljs.core.Symbol(null,"S","S",-1387142461,null),new cljs.core.Symbol(null,"out","out",729986010,null),"ping2"),cljs.core.list(new cljs.core.Symbol("log","debug","log/debug",31698775,null),"2. client incoming message:",cljs.core.list(new cljs.core.Symbol(null,"<?","<?",-1929864530,null),new cljs.core.Symbol(null,"S","S",-1387142461,null),new cljs.core.Symbol(null,"in","in",109346662,null)))));
var c__64826__auto___73488 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__64826__auto___73488,c__67032__auto___73486,id__67033__auto___73487,new_in,new_out,vec__73428,S,peer,vec__73431,in$,out){
return (function (){
var f__64827__auto__ = (function (){var switch__64803__auto__ = ((function (c__64826__auto___73488,c__67032__auto___73486,id__67033__auto___73487,new_in,new_out,vec__73428,S,peer,vec__73431,in$,out){
return (function (state_73460){
var state_val_73461 = (state_73460[(1)]);
if((state_val_73461 === (1))){
var state_73460__$1 = state_73460;
var statearr_73462_73489 = state_73460__$1;
(statearr_73462_73489[(2)] = null);

(statearr_73462_73489[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73461 === (2))){
var inst_73458 = (state_73460[(2)]);
var state_73460__$1 = state_73460;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_73460__$1,inst_73458);
} else {
if((state_val_73461 === (3))){
var inst_73434 = (state_73460[(2)]);
var inst_73435 = superv.async._unregister_go.call(null,S,id__67033__auto___73487);
var state_73460__$1 = (function (){var statearr_73463 = state_73460;
(statearr_73463[(7)] = inst_73435);

(statearr_73463[(8)] = inst_73434);

return statearr_73463;
})();
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_73460__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73461 === (4))){
var inst_73437 = (state_73460[(9)]);
var inst_73437__$1 = (state_73460[(2)]);
var inst_73438 = cljs.core.ex_data.call(null,inst_73437__$1);
var inst_73439 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_73438);
var inst_73440 = cljs.core._EQ_.call(null,inst_73439,new cljs.core.Keyword(null,"aborted","aborted",1775972619));
var state_73460__$1 = (function (){var statearr_73464 = state_73460;
(statearr_73464[(9)] = inst_73437__$1);

return statearr_73464;
})();
if(inst_73440){
var statearr_73465_73490 = state_73460__$1;
(statearr_73465_73490[(1)] = (5));

} else {
var statearr_73466_73491 = state_73460__$1;
(statearr_73466_73491[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73461 === (5))){
var state_73460__$1 = state_73460;
var statearr_73467_73492 = state_73460__$1;
(statearr_73467_73492[(2)] = null);

(statearr_73467_73492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73461 === (6))){
var inst_73437 = (state_73460[(9)]);
var inst_73443 = superv.async._track_exception.call(null,S,inst_73437);
var state_73460__$1 = state_73460;
var statearr_73468_73493 = state_73460__$1;
(statearr_73468_73493[(2)] = inst_73443);

(statearr_73468_73493[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73461 === (7))){
var inst_73437 = (state_73460[(9)]);
var inst_73445 = (state_73460[(2)]);
var state_73460__$1 = (function (){var statearr_73469 = state_73460;
(statearr_73469[(10)] = inst_73445);

return statearr_73469;
})();
var statearr_73470_73494 = state_73460__$1;
(statearr_73470_73494[(2)] = inst_73437);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_73460__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73461 === (8))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_73460,(4),Error,(3),(2));
var inst_73449 = superv.async.put_QMARK_.call(null,S,out,"ping");
var inst_73450 = (function (){return ((function (_,inst_73449,state_val_73461,c__64826__auto___73488,c__67032__auto___73486,id__67033__auto___73487,new_in,new_out,vec__73428,S,peer,vec__73431,in$,out){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1. client incoming message:",superv.async.throw_if_exception.call(null,S,(function (){var abort__67062__auto__ = superv.async._abort.call(null,S);
var vec__73471 = cljs.core.async.alts_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [abort__67062__auto__,in$], null),new cljs.core.Keyword(null,"priority","priority",1431093715),new cljs.core.Keyword(null,"true","true",-1114210334));
var val__67063__auto__ = cljs.core.nth.call(null,vec__73471,(0),null);
var port__67064__auto__ = cljs.core.nth.call(null,vec__73471,(1),null);
if(cljs.core._EQ_.call(null,port__67064__auto__,abort__67062__auto__)){
return cljs.core.ex_info.call(null,"Aborted operations",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"aborted","aborted",1775972619)], null));
} else {
return val__67063__auto__;
}
})())], null);
});
;})(_,inst_73449,state_val_73461,c__64826__auto___73488,c__67032__auto___73486,id__67033__auto___73487,new_in,new_out,vec__73428,S,peer,vec__73431,in$,out))
})();
var inst_73451 = (new cljs.core.Delay(inst_73450,null));
var inst_73452 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"dat.sys.kabel","/tmp/form-init3486417385122683475.clj",45,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_73451,null,1173547031);
var inst_73453 = superv.async.put_QMARK_.call(null,S,out,"ping2");
var inst_73454 = (function (){return ((function (_,inst_73449,inst_73450,inst_73451,inst_73452,inst_73453,state_val_73461,c__64826__auto___73488,c__67032__auto___73486,id__67033__auto___73487,new_in,new_out,vec__73428,S,peer,vec__73431,in$,out){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["2. client incoming message:",superv.async.throw_if_exception.call(null,S,(function (){var abort__67062__auto__ = superv.async._abort.call(null,S);
var vec__73474 = cljs.core.async.alts_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [abort__67062__auto__,in$], null),new cljs.core.Keyword(null,"priority","priority",1431093715),new cljs.core.Keyword(null,"true","true",-1114210334));
var val__67063__auto__ = cljs.core.nth.call(null,vec__73474,(0),null);
var port__67064__auto__ = cljs.core.nth.call(null,vec__73474,(1),null);
if(cljs.core._EQ_.call(null,port__67064__auto__,abort__67062__auto__)){
return cljs.core.ex_info.call(null,"Aborted operations",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"aborted","aborted",1775972619)], null));
} else {
return val__67063__auto__;
}
})())], null);
});
;})(_,inst_73449,inst_73450,inst_73451,inst_73452,inst_73453,state_val_73461,c__64826__auto___73488,c__67032__auto___73486,id__67033__auto___73487,new_in,new_out,vec__73428,S,peer,vec__73431,in$,out))
})();
var inst_73455 = (new cljs.core.Delay(inst_73454,null));
var inst_73456 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"dat.sys.kabel","/tmp/form-init3486417385122683475.clj",47,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_73455,null,-1495688362);
var state_73460__$1 = (function (){var statearr_73477 = state_73460;
(statearr_73477[(11)] = inst_73449);

(statearr_73477[(12)] = inst_73453);

(statearr_73477[(13)] = inst_73452);

return statearr_73477;
})();
var statearr_73478_73495 = state_73460__$1;
(statearr_73478_73495[(2)] = inst_73456);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_73460__$1);

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
});})(c__64826__auto___73488,c__67032__auto___73486,id__67033__auto___73487,new_in,new_out,vec__73428,S,peer,vec__73431,in$,out))
;
return ((function (switch__64803__auto__,c__64826__auto___73488,c__67032__auto___73486,id__67033__auto___73487,new_in,new_out,vec__73428,S,peer,vec__73431,in$,out){
return (function() {
var dat$sys$kabel$ping_middleware_$_state_machine__64804__auto__ = null;
var dat$sys$kabel$ping_middleware_$_state_machine__64804__auto____0 = (function (){
var statearr_73482 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_73482[(0)] = dat$sys$kabel$ping_middleware_$_state_machine__64804__auto__);

(statearr_73482[(1)] = (1));

return statearr_73482;
});
var dat$sys$kabel$ping_middleware_$_state_machine__64804__auto____1 = (function (state_73460){
while(true){
var ret_value__64805__auto__ = (function (){try{while(true){
var result__64806__auto__ = switch__64803__auto__.call(null,state_73460);
if(cljs.core.keyword_identical_QMARK_.call(null,result__64806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64806__auto__;
}
break;
}
}catch (e73483){if((e73483 instanceof Object)){
var ex__64807__auto__ = e73483;
var statearr_73484_73496 = state_73460;
(statearr_73484_73496[(5)] = ex__64807__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_73460);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e73483;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__64805__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73497 = state_73460;
state_73460 = G__73497;
continue;
} else {
return ret_value__64805__auto__;
}
break;
}
});
dat$sys$kabel$ping_middleware_$_state_machine__64804__auto__ = function(state_73460){
switch(arguments.length){
case 0:
return dat$sys$kabel$ping_middleware_$_state_machine__64804__auto____0.call(this);
case 1:
return dat$sys$kabel$ping_middleware_$_state_machine__64804__auto____1.call(this,state_73460);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
dat$sys$kabel$ping_middleware_$_state_machine__64804__auto__.cljs$core$IFn$_invoke$arity$0 = dat$sys$kabel$ping_middleware_$_state_machine__64804__auto____0;
dat$sys$kabel$ping_middleware_$_state_machine__64804__auto__.cljs$core$IFn$_invoke$arity$1 = dat$sys$kabel$ping_middleware_$_state_machine__64804__auto____1;
return dat$sys$kabel$ping_middleware_$_state_machine__64804__auto__;
})()
;})(switch__64803__auto__,c__64826__auto___73488,c__67032__auto___73486,id__67033__auto___73487,new_in,new_out,vec__73428,S,peer,vec__73431,in$,out))
})();
var state__64828__auto__ = (function (){var statearr_73485 = f__64827__auto__.call(null);
(statearr_73485[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__64826__auto___73488);

return statearr_73485;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__64828__auto__);
});})(c__64826__auto___73488,c__67032__auto___73486,id__67033__auto___73487,new_in,new_out,vec__73428,S,peer,vec__73431,in$,out))
);


return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [S,peer,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_in,new_out], null)], null);
});
dat.sys.kabel.url = "ws://localhost:47291";
dat.sys.kabel.server_id = new cljs.core.UUID("05a06e85-e7ca-4213-9fe5-04ae511e50a0", -333801943);
dat.sys.kabel.client_id = new cljs.core.UUID("c14c628b-b151-4967-ae0a-7c83e5622d0f", -95319604);

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
dat.sys.kabel.KabelConnection = (function (peer_conn,__meta,__extmap,__hash){
this.peer_conn = peer_conn;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
dat.sys.kabel.KabelConnection.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__62029__auto__,k__62030__auto__){
var self__ = this;
var this__62029__auto____$1 = this;
return this__62029__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__62030__auto__,null);
});

dat.sys.kabel.KabelConnection.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__62031__auto__,k73499,else__62032__auto__){
var self__ = this;
var this__62031__auto____$1 = this;
var G__73501 = k73499;
var G__73501__$1 = (((G__73501 instanceof cljs.core.Keyword))?G__73501.fqn:null);
switch (G__73501__$1) {
case "peer-conn":
return self__.peer_conn;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k73499,else__62032__auto__);

}
});

dat.sys.kabel.KabelConnection.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__62043__auto__,writer__62044__auto__,opts__62045__auto__){
var self__ = this;
var this__62043__auto____$1 = this;
var pr_pair__62046__auto__ = ((function (this__62043__auto____$1){
return (function (keyval__62047__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__62044__auto__,cljs.core.pr_writer,""," ","",opts__62045__auto__,keyval__62047__auto__);
});})(this__62043__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__62044__auto__,pr_pair__62046__auto__,"#dat.sys.kabel.KabelConnection{",", ","}",opts__62045__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"peer-conn","peer-conn",1957720180),self__.peer_conn],null))], null),self__.__extmap));
});

dat.sys.kabel.KabelConnection.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

dat.sys.kabel.KabelConnection.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__73498){
var self__ = this;
var G__73498__$1 = this;
return (new cljs.core.RecordIter((0),G__73498__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"peer-conn","peer-conn",1957720180)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

dat.sys.kabel.KabelConnection.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__62027__auto__){
var self__ = this;
var this__62027__auto____$1 = this;
return self__.__meta;
});

dat.sys.kabel.KabelConnection.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__62023__auto__){
var self__ = this;
var this__62023__auto____$1 = this;
return (new dat.sys.kabel.KabelConnection(self__.peer_conn,self__.__meta,self__.__extmap,self__.__hash));
});

dat.sys.kabel.KabelConnection.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__62033__auto__){
var self__ = this;
var this__62033__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

dat.sys.kabel.KabelConnection.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__62024__auto__){
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

dat.sys.kabel.KabelConnection.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__62025__auto__,other__62026__auto__){
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

dat.sys.kabel.KabelConnection.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__62038__auto__,k__62039__auto__){
var self__ = this;
var this__62038__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"peer-conn","peer-conn",1957720180),null], null), null),k__62039__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__62038__auto____$1),self__.__meta),k__62039__auto__);
} else {
return (new dat.sys.kabel.KabelConnection(self__.peer_conn,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__62039__auto__)),null));
}
});

dat.sys.kabel.KabelConnection.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__62036__auto__,k__62037__auto__,G__73498){
var self__ = this;
var this__62036__auto____$1 = this;
var pred__73502 = cljs.core.keyword_identical_QMARK_;
var expr__73503 = k__62037__auto__;
if(cljs.core.truth_(pred__73502.call(null,new cljs.core.Keyword(null,"peer-conn","peer-conn",1957720180),expr__73503))){
return (new dat.sys.kabel.KabelConnection(G__73498,self__.__meta,self__.__extmap,null));
} else {
return (new dat.sys.kabel.KabelConnection(self__.peer_conn,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__62037__auto__,G__73498),null));
}
});

dat.sys.kabel.KabelConnection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__62041__auto__){
var self__ = this;
var this__62041__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"peer-conn","peer-conn",1957720180),self__.peer_conn],null))], null),self__.__extmap));
});

dat.sys.kabel.KabelConnection.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__62028__auto__,G__73498){
var self__ = this;
var this__62028__auto____$1 = this;
return (new dat.sys.kabel.KabelConnection(self__.peer_conn,G__73498,self__.__extmap,self__.__hash));
});

dat.sys.kabel.KabelConnection.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__62034__auto__,entry__62035__auto__){
var self__ = this;
var this__62034__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__62035__auto__)){
return this__62034__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__62035__auto__,(0)),cljs.core._nth.call(null,entry__62035__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__62034__auto____$1,entry__62035__auto__);
}
});

dat.sys.kabel.KabelConnection.prototype.com$stuartsierra$component$Lifecycle$ = cljs.core.PROTOCOL_SENTINEL;

dat.sys.kabel.KabelConnection.prototype.com$stuartsierra$component$Lifecycle$start$arity$1 = (function (component){
var self__ = this;
var component__$1 = this;
var peer_conn__$1 = (function (){var or__61290__auto__ = self__.peer_conn;
if(cljs.core.truth_(or__61290__auto__)){
return or__61290__auto__;
} else {
return kabel.peer.client_peer.call(null,superv.async.S,dat.sys.kabel.client_id,dat.sys.kabel.ping_middleware,cljs.core.identity);
}
})();
var c__64826__auto___73549 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__64826__auto___73549,peer_conn__$1,component__$1){
return (function (){
var f__64827__auto__ = (function (){var switch__64803__auto__ = ((function (c__64826__auto___73549,peer_conn__$1,component__$1){
return (function (state_73531){
var state_val_73532 = (state_73531[(1)]);
if((state_val_73532 === (1))){
var state_73531__$1 = state_73531;
var statearr_73533_73550 = state_73531__$1;
(statearr_73533_73550[(2)] = null);

(statearr_73533_73550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73532 === (2))){
var inst_73509 = (state_73531[(7)]);
var inst_73509__$1 = superv.async._abort.call(null,superv.async.S);
var inst_73510 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_73511 = kabel.peer.connect.call(null,superv.async.S,peer_conn__$1,dat.sys.kabel.url);
var inst_73512 = [inst_73509__$1,inst_73511];
var inst_73513 = (new cljs.core.PersistentVector(null,2,(5),inst_73510,inst_73512,null));
var state_73531__$1 = (function (){var statearr_73534 = state_73531;
(statearr_73534[(7)] = inst_73509__$1);

return statearr_73534;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_73531__$1,(4),inst_73513,new cljs.core.Keyword(null,"priority","priority",1431093715),new cljs.core.Keyword(null,"true","true",-1114210334));
} else {
if((state_val_73532 === (3))){
var inst_73529 = (state_73531[(2)]);
var state_73531__$1 = state_73531;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_73531__$1,inst_73529);
} else {
if((state_val_73532 === (4))){
var inst_73509 = (state_73531[(7)]);
var inst_73515 = (state_73531[(2)]);
var inst_73516 = cljs.core.nth.call(null,inst_73515,(0),null);
var inst_73517 = cljs.core.nth.call(null,inst_73515,(1),null);
var inst_73518 = cljs.core._EQ_.call(null,inst_73517,inst_73509);
var state_73531__$1 = (function (){var statearr_73535 = state_73531;
(statearr_73535[(8)] = inst_73516);

return statearr_73535;
})();
if(inst_73518){
var statearr_73536_73551 = state_73531__$1;
(statearr_73536_73551[(1)] = (5));

} else {
var statearr_73537_73552 = state_73531__$1;
(statearr_73537_73552[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73532 === (5))){
var inst_73520 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_73521 = [new cljs.core.Keyword(null,"aborted","aborted",1775972619)];
var inst_73522 = cljs.core.PersistentHashMap.fromArrays(inst_73520,inst_73521);
var inst_73523 = cljs.core.ex_info.call(null,"Aborted operations",inst_73522);
var state_73531__$1 = state_73531;
var statearr_73538_73553 = state_73531__$1;
(statearr_73538_73553[(2)] = inst_73523);

(statearr_73538_73553[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73532 === (6))){
var inst_73516 = (state_73531[(8)]);
var state_73531__$1 = state_73531;
var statearr_73539_73554 = state_73531__$1;
(statearr_73539_73554[(2)] = inst_73516);

(statearr_73539_73554[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73532 === (7))){
var inst_73526 = (state_73531[(2)]);
var inst_73527 = superv.async.throw_if_exception.call(null,superv.async.S,inst_73526);
var state_73531__$1 = state_73531;
var statearr_73540_73555 = state_73531__$1;
(statearr_73540_73555[(2)] = inst_73527);

(statearr_73540_73555[(1)] = (3));


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
});})(c__64826__auto___73549,peer_conn__$1,component__$1))
;
return ((function (switch__64803__auto__,c__64826__auto___73549,peer_conn__$1,component__$1){
return (function() {
var dat$sys$kabel$state_machine__64804__auto__ = null;
var dat$sys$kabel$state_machine__64804__auto____0 = (function (){
var statearr_73544 = [null,null,null,null,null,null,null,null,null];
(statearr_73544[(0)] = dat$sys$kabel$state_machine__64804__auto__);

(statearr_73544[(1)] = (1));

return statearr_73544;
});
var dat$sys$kabel$state_machine__64804__auto____1 = (function (state_73531){
while(true){
var ret_value__64805__auto__ = (function (){try{while(true){
var result__64806__auto__ = switch__64803__auto__.call(null,state_73531);
if(cljs.core.keyword_identical_QMARK_.call(null,result__64806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64806__auto__;
}
break;
}
}catch (e73545){if((e73545 instanceof Object)){
var ex__64807__auto__ = e73545;
var statearr_73546_73556 = state_73531;
(statearr_73546_73556[(5)] = ex__64807__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_73531);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e73545;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__64805__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73557 = state_73531;
state_73531 = G__73557;
continue;
} else {
return ret_value__64805__auto__;
}
break;
}
});
dat$sys$kabel$state_machine__64804__auto__ = function(state_73531){
switch(arguments.length){
case 0:
return dat$sys$kabel$state_machine__64804__auto____0.call(this);
case 1:
return dat$sys$kabel$state_machine__64804__auto____1.call(this,state_73531);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
dat$sys$kabel$state_machine__64804__auto__.cljs$core$IFn$_invoke$arity$0 = dat$sys$kabel$state_machine__64804__auto____0;
dat$sys$kabel$state_machine__64804__auto__.cljs$core$IFn$_invoke$arity$1 = dat$sys$kabel$state_machine__64804__auto____1;
return dat$sys$kabel$state_machine__64804__auto__;
})()
;})(switch__64803__auto__,c__64826__auto___73549,peer_conn__$1,component__$1))
})();
var state__64828__auto__ = (function (){var statearr_73547 = f__64827__auto__.call(null);
(statearr_73547[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__64826__auto___73549);

return statearr_73547;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__64828__auto__);
});})(c__64826__auto___73549,peer_conn__$1,component__$1))
);


taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dat.sys.kabel","/tmp/form-init3486417385122683475.clj",76,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (peer_conn__$1,component__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Started Kabel Connection"], null);
});})(peer_conn__$1,component__$1))
,null)),null,-1882896348);

return cljs.core.assoc.call(null,component__$1,new cljs.core.Keyword(null,"peer-conn","peer-conn",1957720180),peer_conn__$1);
});

dat.sys.kabel.KabelConnection.prototype.com$stuartsierra$component$Lifecycle$stop$arity$1 = (function (component){
var self__ = this;
var component__$1 = this;
return cljs.core.assoc.call(null,component__$1,new cljs.core.Keyword(null,"peer-conn","peer-conn",1957720180),null);
});

dat.sys.kabel.KabelConnection.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"peer-conn","peer-conn",-696715589,null)], null);
});

dat.sys.kabel.KabelConnection.cljs$lang$type = true;

dat.sys.kabel.KabelConnection.cljs$lang$ctorPrSeq = (function (this__62065__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"dat.sys.kabel/KabelConnection");
});

dat.sys.kabel.KabelConnection.cljs$lang$ctorPrWriter = (function (this__62065__auto__,writer__62066__auto__){
return cljs.core._write.call(null,writer__62066__auto__,"dat.sys.kabel/KabelConnection");
});

dat.sys.kabel.__GT_KabelConnection = (function dat$sys$kabel$__GT_KabelConnection(peer_conn){
return (new dat.sys.kabel.KabelConnection(peer_conn,null,null,null));
});

dat.sys.kabel.map__GT_KabelConnection = (function dat$sys$kabel$map__GT_KabelConnection(G__73500){
return (new dat.sys.kabel.KabelConnection(new cljs.core.Keyword(null,"peer-conn","peer-conn",1957720180).cljs$core$IFn$_invoke$arity$1(G__73500),null,cljs.core.dissoc.call(null,G__73500,new cljs.core.Keyword(null,"peer-conn","peer-conn",1957720180)),null));
});

dat.sys.kabel.new_kabel = (function dat$sys$kabel$new_kabel(){
return dat.sys.kabel.map__GT_KabelConnection.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

//# sourceMappingURL=kabel.js.map?rel=1506321321113