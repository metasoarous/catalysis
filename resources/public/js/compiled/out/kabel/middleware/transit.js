// Compiled by ClojureScript 1.9.542 {}
goog.provide('kabel.middleware.transit');
goog.require('cljs.core');
goog.require('kabel.middleware.handler');
goog.require('kabel.util');
goog.require('cognitect.transit');
goog.require('incognito.transit');
/**
 * Serializes all incoming and outgoing edn datastructures in transit form.
 */
kabel.middleware.transit.transit = (function kabel$middleware$transit$transit(var_args){
var args71832 = [];
var len__62575__auto___72021 = arguments.length;
var i__62576__auto___72022 = (0);
while(true){
if((i__62576__auto___72022 < len__62575__auto___72021)){
args71832.push((arguments[i__62576__auto___72022]));

var G__72023 = (i__62576__auto___72022 + (1));
i__62576__auto___72022 = G__72023;
continue;
} else {
}
break;
}

var G__71834 = args71832.length;
switch (G__71834) {
case 1:
return kabel.middleware.transit.transit.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return kabel.middleware.transit.transit.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args71832.length)].join('')));

}
});

kabel.middleware.transit.transit.cljs$core$IFn$_invoke$arity$1 = (function (p__71835){
var vec__71836 = p__71835;
var S = cljs.core.nth.call(null,vec__71836,(0),null);
var peer = cljs.core.nth.call(null,vec__71836,(1),null);
var vec__71839 = cljs.core.nth.call(null,vec__71836,(2),null);
var in$ = cljs.core.nth.call(null,vec__71839,(0),null);
var out = cljs.core.nth.call(null,vec__71839,(1),null);
return kabel.middleware.transit.transit.call(null,new cljs.core.Keyword(null,"json","json",1279968570),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [S,peer,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [in$,out], null)], null));
});

kabel.middleware.transit.transit.cljs$core$IFn$_invoke$arity$4 = (function (backend,read_handlers,write_handlers,p__71842){
var vec__71843 = p__71842;
var S = cljs.core.nth.call(null,vec__71843,(0),null);
var peer = cljs.core.nth.call(null,vec__71843,(1),null);
var vec__71846 = cljs.core.nth.call(null,vec__71843,(2),null);
var in$ = cljs.core.nth.call(null,vec__71846,(0),null);
var out = cljs.core.nth.call(null,vec__71846,(1),null);
return kabel.middleware.handler.handler.call(null,((function (vec__71843,S,peer,vec__71846,in$,out){
return (function (p1__71830_SHARP_){
var c__67032__auto__ = superv.async.check_supervisor.call(null,superv.async.S);
var id__67033__auto__ = superv.async._register_go.call(null,S,cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("kabel","serialization","kabel/serialization",2078051952,null),new cljs.core.Symbol("kabel","payload","kabel/payload",1891791416,null)], null)], null),new cljs.core.Symbol(null,"p1__71830#","p1__71830#",2040175521,null)], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"serialization","serialization",1169102467,null),new cljs.core.Keyword(null,"transit-json","transit-json",1168016579)),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"serialization","serialization",1169102467,null),new cljs.core.Keyword(null,"transit-msgpack","transit-msgpack",-127166965))),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ir","ir",498778850,null),cljs.core.list(new cljs.core.Symbol(null,"incognito-read-handler","incognito-read-handler",1439470766,null),new cljs.core.Symbol(null,"read-handlers","read-handlers",-544976454,null)),new cljs.core.Symbol(null,"v","v",1661996586,null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reader","reader",1810192380,null),cljs.core.list(new cljs.core.Symbol("t","reader","t/reader",1810192240,null),new cljs.core.Symbol(null,"backend","backend",793042403,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handlers","handlers",79528781),new cljs.core.PersistentArrayMap(null, 2, ["u",cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","uuid","cljs.core/uuid",959287997,null),new cljs.core.Symbol(null,"v","v",1661996586,null))),"incognito",new cljs.core.Symbol(null,"ir","ir",498778850,null)], null)], null))], null),cljs.core.list(new cljs.core.Symbol("t","read","t/read",-1514376992,null),new cljs.core.Symbol(null,"reader","reader",1810192380,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol("js","TextDecoder.","js/TextDecoder.",1086841679,null),"utf-8"),cljs.core.list(new cljs.core.Symbol(null,".decode",".decode",398235023,null),new cljs.core.Symbol(null,"payload","payload",1257495435,null))))),new cljs.core.Symbol(null,"merged","merged",-1005723126,null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"v","v",1661996586,null)),cljs.core.list(new cljs.core.Symbol(null,"merge","merge",-163787882,null),new cljs.core.Symbol(null,"v","v",1661996586,null),cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Symbol(null,"p1__71830#","p1__71830#",2040175521,null),new cljs.core.Keyword("kabel","serialization","kabel/serialization",437520425),new cljs.core.Keyword("kabel","payload","kabel/payload",251259889))),new cljs.core.Symbol(null,"v","v",1661996586,null))], null),new cljs.core.Symbol(null,"merged","merged",-1005723126,null)),new cljs.core.Symbol(null,"p1__71830#","p1__71830#",2040175521,null)))));
var c__64826__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__64826__auto__,c__67032__auto__,id__67033__auto__,vec__71843,S,peer,vec__71846,in$,out){
return (function (){
var f__64827__auto__ = (function (){var switch__64803__auto__ = ((function (c__64826__auto__,c__67032__auto__,id__67033__auto__,vec__71843,S,peer,vec__71846,in$,out){
return (function (state_71917){
var state_val_71918 = (state_71917[(1)]);
if((state_val_71918 === (7))){
var inst_71852 = (state_71917[(7)]);
var inst_71860 = (state_71917[(2)]);
var state_71917__$1 = (function (){var statearr_71919 = state_71917;
(statearr_71919[(8)] = inst_71860);

return statearr_71919;
})();
var statearr_71920_72025 = state_71917__$1;
(statearr_71920_72025[(2)] = inst_71852);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71917__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71918 === (20))){
var inst_71913 = (state_71917[(2)]);
var state_71917__$1 = state_71917;
var statearr_71921_72026 = state_71917__$1;
(statearr_71921_72026[(2)] = inst_71913);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71917__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71918 === (1))){
var state_71917__$1 = state_71917;
var statearr_71922_72027 = state_71917__$1;
(statearr_71922_72027[(2)] = null);

(statearr_71922_72027[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71918 === (4))){
var inst_71852 = (state_71917[(7)]);
var inst_71852__$1 = (state_71917[(2)]);
var inst_71853 = cljs.core.ex_data.call(null,inst_71852__$1);
var inst_71854 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_71853);
var inst_71855 = cljs.core._EQ_.call(null,inst_71854,new cljs.core.Keyword(null,"aborted","aborted",1775972619));
var state_71917__$1 = (function (){var statearr_71923 = state_71917;
(statearr_71923[(7)] = inst_71852__$1);

return statearr_71923;
})();
if(inst_71855){
var statearr_71924_72028 = state_71917__$1;
(statearr_71924_72028[(1)] = (5));

} else {
var statearr_71925_72029 = state_71917__$1;
(statearr_71925_72029[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71918 === (15))){
var inst_71882 = cljs.core.apply.call(null,cljs.core.hash_map,p1__71830_SHARP_);
var state_71917__$1 = state_71917;
var statearr_71926_72030 = state_71917__$1;
(statearr_71926_72030[(2)] = inst_71882);

(statearr_71926_72030[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71918 === (21))){
var inst_71903 = (state_71917[(9)]);
var inst_71906 = cljs.core.dissoc.call(null,p1__71830_SHARP_,new cljs.core.Keyword("kabel","serialization","kabel/serialization",437520425),new cljs.core.Keyword("kabel","payload","kabel/payload",251259889));
var inst_71907 = cljs.core.merge.call(null,inst_71903,inst_71906);
var state_71917__$1 = state_71917;
var statearr_71927_72031 = state_71917__$1;
(statearr_71927_72031[(2)] = inst_71907);

(statearr_71927_72031[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71918 === (13))){
var state_71917__$1 = state_71917;
var statearr_71928_72032 = state_71917__$1;
(statearr_71928_72032[(2)] = false);

(statearr_71928_72032[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71918 === (22))){
var inst_71903 = (state_71917[(9)]);
var state_71917__$1 = state_71917;
var statearr_71929_72033 = state_71917__$1;
(statearr_71929_72033[(2)] = inst_71903);

(statearr_71929_72033[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71918 === (6))){
var inst_71852 = (state_71917[(7)]);
var inst_71858 = superv.async._track_exception.call(null,S,inst_71852);
var state_71917__$1 = state_71917;
var statearr_71930_72034 = state_71917__$1;
(statearr_71930_72034[(2)] = inst_71858);

(statearr_71930_72034[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71918 === (17))){
var inst_71885 = (state_71917[(10)]);
var inst_71886 = (state_71917[(11)]);
var inst_71885__$1 = (state_71917[(2)]);
var inst_71886__$1 = cljs.core.get.call(null,inst_71885__$1,new cljs.core.Keyword("kabel","serialization","kabel/serialization",437520425));
var inst_71887 = cljs.core.get.call(null,inst_71885__$1,new cljs.core.Keyword("kabel","payload","kabel/payload",251259889));
var inst_71888 = cljs.core._EQ_.call(null,inst_71886__$1,new cljs.core.Keyword(null,"transit-json","transit-json",1168016579));
var inst_71889 = cljs.core._EQ_.call(null,inst_71886__$1,new cljs.core.Keyword(null,"transit-msgpack","transit-msgpack",-127166965));
var inst_71890 = (inst_71888) || (inst_71889);
var state_71917__$1 = (function (){var statearr_71931 = state_71917;
(statearr_71931[(10)] = inst_71885__$1);

(statearr_71931[(11)] = inst_71886__$1);

(statearr_71931[(12)] = inst_71887);

return statearr_71931;
})();
if(cljs.core.truth_(inst_71890)){
var statearr_71932_72035 = state_71917__$1;
(statearr_71932_72035[(1)] = (18));

} else {
var statearr_71933_72036 = state_71917__$1;
(statearr_71933_72036[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71918 === (3))){
var inst_71849 = (state_71917[(2)]);
var inst_71850 = superv.async._unregister_go.call(null,S,id__67033__auto__);
var state_71917__$1 = (function (){var statearr_71934 = state_71917;
(statearr_71934[(13)] = inst_71850);

(statearr_71934[(14)] = inst_71849);

return statearr_71934;
})();
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71917__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71918 === (12))){
var state_71917__$1 = state_71917;
var statearr_71935_72037 = state_71917__$1;
(statearr_71935_72037[(2)] = true);

(statearr_71935_72037[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71918 === (2))){
var inst_71915 = (state_71917[(2)]);
var state_71917__$1 = state_71917;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71917__$1,inst_71915);
} else {
if((state_val_71918 === (23))){
var inst_71910 = (state_71917[(2)]);
var state_71917__$1 = state_71917;
var statearr_71936_72038 = state_71917__$1;
(statearr_71936_72038[(2)] = inst_71910);

(statearr_71936_72038[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71918 === (19))){
var state_71917__$1 = state_71917;
var statearr_71937_72039 = state_71917__$1;
(statearr_71937_72039[(2)] = p1__71830_SHARP_);

(statearr_71937_72039[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71918 === (11))){
var inst_71880 = (state_71917[(2)]);
var state_71917__$1 = state_71917;
if(cljs.core.truth_(inst_71880)){
var statearr_71938_72040 = state_71917__$1;
(statearr_71938_72040[(1)] = (15));

} else {
var statearr_71939_72041 = state_71917__$1;
(statearr_71939_72041[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71918 === (9))){
var inst_71869 = p1__71830_SHARP_.cljs$lang$protocol_mask$partition0$;
var inst_71870 = (inst_71869 & (64));
var inst_71871 = p1__71830_SHARP_.cljs$core$ISeq$;
var inst_71872 = (cljs.core.PROTOCOL_SENTINEL === inst_71871);
var inst_71873 = (inst_71870) || (inst_71872);
var state_71917__$1 = state_71917;
if(cljs.core.truth_(inst_71873)){
var statearr_71940_72042 = state_71917__$1;
(statearr_71940_72042[(1)] = (12));

} else {
var statearr_71941_72043 = state_71917__$1;
(statearr_71941_72043[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71918 === (5))){
var state_71917__$1 = state_71917;
var statearr_71942_72044 = state_71917__$1;
(statearr_71942_72044[(2)] = null);

(statearr_71942_72044[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71918 === (14))){
var inst_71877 = (state_71917[(2)]);
var state_71917__$1 = state_71917;
var statearr_71943_72045 = state_71917__$1;
(statearr_71943_72045[(2)] = inst_71877);

(statearr_71943_72045[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71918 === (16))){
var state_71917__$1 = state_71917;
var statearr_71944_72046 = state_71917__$1;
(statearr_71944_72046[(2)] = p1__71830_SHARP_);

(statearr_71944_72046[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71918 === (10))){
var state_71917__$1 = state_71917;
var statearr_71945_72047 = state_71917__$1;
(statearr_71945_72047[(2)] = false);

(statearr_71945_72047[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71918 === (18))){
var inst_71885 = (state_71917[(10)]);
var inst_71886 = (state_71917[(11)]);
var inst_71887 = (state_71917[(12)]);
var inst_71903 = (state_71917[(9)]);
var inst_71892 = incognito.transit.incognito_read_handler.call(null,read_handlers);
var inst_71893 = [new cljs.core.Keyword(null,"handlers","handlers",79528781)];
var inst_71894 = ["u","incognito"];
var inst_71895 = (function (){var map__71864 = inst_71885;
var serialization = inst_71886;
var payload = inst_71887;
var ir = inst_71892;
return ((function (map__71864,serialization,payload,ir,inst_71885,inst_71886,inst_71887,inst_71903,inst_71892,inst_71893,inst_71894,state_val_71918,c__64826__auto__,c__67032__auto__,id__67033__auto__,vec__71843,S,peer,vec__71846,in$,out){
return (function (v){
return cljs.core.uuid.call(null,v);
});
;})(map__71864,serialization,payload,ir,inst_71885,inst_71886,inst_71887,inst_71903,inst_71892,inst_71893,inst_71894,state_val_71918,c__64826__auto__,c__67032__auto__,id__67033__auto__,vec__71843,S,peer,vec__71846,in$,out))
})();
var inst_71896 = [inst_71895,inst_71892];
var inst_71897 = cljs.core.PersistentHashMap.fromArrays(inst_71894,inst_71896);
var inst_71898 = [inst_71897];
var inst_71899 = cljs.core.PersistentHashMap.fromArrays(inst_71893,inst_71898);
var inst_71900 = cognitect.transit.reader.call(null,backend,inst_71899);
var inst_71901 = (new TextDecoder("utf-8"));
var inst_71902 = inst_71901.decode(inst_71887);
var inst_71903__$1 = cognitect.transit.read.call(null,inst_71900,inst_71902);
var inst_71904 = cljs.core.map_QMARK_.call(null,inst_71903__$1);
var state_71917__$1 = (function (){var statearr_71946 = state_71917;
(statearr_71946[(9)] = inst_71903__$1);

return statearr_71946;
})();
if(inst_71904){
var statearr_71947_72048 = state_71917__$1;
(statearr_71947_72048[(1)] = (21));

} else {
var statearr_71948_72049 = state_71917__$1;
(statearr_71948_72049[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71918 === (8))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_71917,(4),Error,(3),(2));
var inst_71866 = (p1__71830_SHARP_ == null);
var inst_71867 = cljs.core.not.call(null,inst_71866);
var state_71917__$1 = state_71917;
if(inst_71867){
var statearr_71949_72050 = state_71917__$1;
(statearr_71949_72050[(1)] = (9));

} else {
var statearr_71950_72051 = state_71917__$1;
(statearr_71950_72051[(1)] = (10));

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
});})(c__64826__auto__,c__67032__auto__,id__67033__auto__,vec__71843,S,peer,vec__71846,in$,out))
;
return ((function (switch__64803__auto__,c__64826__auto__,c__67032__auto__,id__67033__auto__,vec__71843,S,peer,vec__71846,in$,out){
return (function() {
var kabel$middleware$transit$state_machine__64804__auto__ = null;
var kabel$middleware$transit$state_machine__64804__auto____0 = (function (){
var statearr_71954 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71954[(0)] = kabel$middleware$transit$state_machine__64804__auto__);

(statearr_71954[(1)] = (1));

return statearr_71954;
});
var kabel$middleware$transit$state_machine__64804__auto____1 = (function (state_71917){
while(true){
var ret_value__64805__auto__ = (function (){try{while(true){
var result__64806__auto__ = switch__64803__auto__.call(null,state_71917);
if(cljs.core.keyword_identical_QMARK_.call(null,result__64806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64806__auto__;
}
break;
}
}catch (e71955){if((e71955 instanceof Object)){
var ex__64807__auto__ = e71955;
var statearr_71956_72052 = state_71917;
(statearr_71956_72052[(5)] = ex__64807__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71917);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71955;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__64805__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72053 = state_71917;
state_71917 = G__72053;
continue;
} else {
return ret_value__64805__auto__;
}
break;
}
});
kabel$middleware$transit$state_machine__64804__auto__ = function(state_71917){
switch(arguments.length){
case 0:
return kabel$middleware$transit$state_machine__64804__auto____0.call(this);
case 1:
return kabel$middleware$transit$state_machine__64804__auto____1.call(this,state_71917);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
kabel$middleware$transit$state_machine__64804__auto__.cljs$core$IFn$_invoke$arity$0 = kabel$middleware$transit$state_machine__64804__auto____0;
kabel$middleware$transit$state_machine__64804__auto__.cljs$core$IFn$_invoke$arity$1 = kabel$middleware$transit$state_machine__64804__auto____1;
return kabel$middleware$transit$state_machine__64804__auto__;
})()
;})(switch__64803__auto__,c__64826__auto__,c__67032__auto__,id__67033__auto__,vec__71843,S,peer,vec__71846,in$,out))
})();
var state__64828__auto__ = (function (){var statearr_71957 = f__64827__auto__.call(null);
(statearr_71957[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__64826__auto__);

return statearr_71957;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__64828__auto__);
});})(c__64826__auto__,c__67032__auto__,id__67033__auto__,vec__71843,S,peer,vec__71846,in$,out))
);

return c__64826__auto__;
});})(vec__71843,S,peer,vec__71846,in$,out))
,((function (vec__71843,S,peer,vec__71846,in$,out){
return (function (p1__71831_SHARP_){
var c__67032__auto__ = superv.async.check_supervisor.call(null,superv.async.S);
var id__67033__auto__ = superv.async._register_go.call(null,S,cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Keyword("kabel","serialization","kabel/serialization",437520425),new cljs.core.Symbol(null,"p1__71831#","p1__71831#",-1667529584,null)),new cljs.core.Symbol(null,"p1__71831#","p1__71831#",-1667529584,null),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("kabel","serialization","kabel/serialization",437520425),cljs.core.list(new cljs.core.Symbol(null,"keyword","keyword",-1843046022,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"transit-",cljs.core.list(new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"backend","backend",793042403,null)))),new cljs.core.Keyword("kabel","payload","kabel/payload",251259889),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"iw","iw",706449371,null),cljs.core.list(new cljs.core.Symbol(null,"incognito-write-handler","incognito-write-handler",2062950114,null),new cljs.core.Symbol(null,"write-handlers","write-handlers",-456757384,null)),new cljs.core.Symbol(null,"writer","writer",1362963291,null),cljs.core.list(new cljs.core.Symbol("t","writer","t/writer",1362962639,null),new cljs.core.Symbol(null,"backend","backend",793042403,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handlers","handlers",79528781),new cljs.core.PersistentArrayMap(null, 1, ["default",new cljs.core.Symbol(null,"iw","iw",706449371,null)], null)], null)),new cljs.core.Symbol(null,"encoder","encoder",527403693,null),cljs.core.list(new cljs.core.Symbol("js","TextEncoder.","js/TextEncoder.",-581385597,null),"utf-8")], null),cljs.core.list(new cljs.core.Symbol(null,"->>","->>",-1874332161,null),cljs.core.list(new cljs.core.Symbol("t","write","t/write",-217117621,null),new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"p1__71831#","p1__71831#",-1667529584,null)),cljs.core.list(new cljs.core.Symbol(null,".encode",".encode",1943798556,null),new cljs.core.Symbol(null,"encoder","encoder",527403693,null))))], null)))));
var c__64826__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__64826__auto__,c__67032__auto__,id__67033__auto__,vec__71843,S,peer,vec__71846,in$,out){
return (function (){
var f__64827__auto__ = (function (){var switch__64803__auto__ = ((function (c__64826__auto__,c__67032__auto__,id__67033__auto__,vec__71843,S,peer,vec__71846,in$,out){
return (function (state_71998){
var state_val_71999 = (state_71998[(1)]);
if((state_val_71999 === (7))){
var inst_71961 = (state_71998[(7)]);
var inst_71969 = (state_71998[(2)]);
var state_71998__$1 = (function (){var statearr_72000 = state_71998;
(statearr_72000[(8)] = inst_71969);

return statearr_72000;
})();
var statearr_72001_72054 = state_71998__$1;
(statearr_72001_72054[(2)] = inst_71961);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71998__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71999 === (1))){
var state_71998__$1 = state_71998;
var statearr_72002_72055 = state_71998__$1;
(statearr_72002_72055[(2)] = null);

(statearr_72002_72055[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71999 === (4))){
var inst_71961 = (state_71998[(7)]);
var inst_71961__$1 = (state_71998[(2)]);
var inst_71962 = cljs.core.ex_data.call(null,inst_71961__$1);
var inst_71963 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_71962);
var inst_71964 = cljs.core._EQ_.call(null,inst_71963,new cljs.core.Keyword(null,"aborted","aborted",1775972619));
var state_71998__$1 = (function (){var statearr_72003 = state_71998;
(statearr_72003[(7)] = inst_71961__$1);

return statearr_72003;
})();
if(inst_71964){
var statearr_72004_72056 = state_71998__$1;
(statearr_72004_72056[(1)] = (5));

} else {
var statearr_72005_72057 = state_71998__$1;
(statearr_72005_72057[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71999 === (6))){
var inst_71961 = (state_71998[(7)]);
var inst_71967 = superv.async._track_exception.call(null,S,inst_71961);
var state_71998__$1 = state_71998;
var statearr_72006_72058 = state_71998__$1;
(statearr_72006_72058[(2)] = inst_71967);

(statearr_72006_72058[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71999 === (3))){
var inst_71958 = (state_71998[(2)]);
var inst_71959 = superv.async._unregister_go.call(null,S,id__67033__auto__);
var state_71998__$1 = (function (){var statearr_72007 = state_71998;
(statearr_72007[(9)] = inst_71959);

(statearr_72007[(10)] = inst_71958);

return statearr_72007;
})();
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71998__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71999 === (2))){
var inst_71996 = (state_71998[(2)]);
var state_71998__$1 = state_71998;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71998__$1,inst_71996);
} else {
if((state_val_71999 === (11))){
var inst_71994 = (state_71998[(2)]);
var state_71998__$1 = state_71998;
var statearr_72008_72059 = state_71998__$1;
(statearr_72008_72059[(2)] = inst_71994);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71998__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71999 === (9))){
var state_71998__$1 = state_71998;
var statearr_72009_72060 = state_71998__$1;
(statearr_72009_72060[(2)] = p1__71831_SHARP_);

(statearr_72009_72060[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71999 === (5))){
var state_71998__$1 = state_71998;
var statearr_72010_72061 = state_71998__$1;
(statearr_72010_72061[(2)] = null);

(statearr_72010_72061[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71999 === (10))){
var inst_71976 = [new cljs.core.Keyword("kabel","serialization","kabel/serialization",437520425),new cljs.core.Keyword("kabel","payload","kabel/payload",251259889)];
var inst_71977 = cljs.core.name.call(null,backend);
var inst_71978 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("transit-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_71977)].join('');
var inst_71979 = cljs.core.keyword.call(null,inst_71978);
var inst_71980 = incognito.transit.incognito_write_handler.call(null,write_handlers);
var inst_71981 = [new cljs.core.Keyword(null,"handlers","handlers",79528781)];
var inst_71982 = ["default"];
var inst_71983 = [inst_71980];
var inst_71984 = cljs.core.PersistentHashMap.fromArrays(inst_71982,inst_71983);
var inst_71985 = [inst_71984];
var inst_71986 = cljs.core.PersistentHashMap.fromArrays(inst_71981,inst_71985);
var inst_71987 = cognitect.transit.writer.call(null,backend,inst_71986);
var inst_71988 = (new TextEncoder("utf-8"));
var inst_71989 = cognitect.transit.write.call(null,inst_71987,p1__71831_SHARP_);
var inst_71990 = inst_71988.encode(inst_71989);
var inst_71991 = [inst_71979,inst_71990];
var inst_71992 = cljs.core.PersistentHashMap.fromArrays(inst_71976,inst_71991);
var state_71998__$1 = state_71998;
var statearr_72011_72062 = state_71998__$1;
(statearr_72011_72062[(2)] = inst_71992);

(statearr_72011_72062[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71999 === (8))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_71998,(4),Error,(3),(2));
var inst_71973 = new cljs.core.Keyword("kabel","serialization","kabel/serialization",437520425).cljs$core$IFn$_invoke$arity$1(p1__71831_SHARP_);
var state_71998__$1 = state_71998;
if(cljs.core.truth_(inst_71973)){
var statearr_72012_72063 = state_71998__$1;
(statearr_72012_72063[(1)] = (9));

} else {
var statearr_72013_72064 = state_71998__$1;
(statearr_72013_72064[(1)] = (10));

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
});})(c__64826__auto__,c__67032__auto__,id__67033__auto__,vec__71843,S,peer,vec__71846,in$,out))
;
return ((function (switch__64803__auto__,c__64826__auto__,c__67032__auto__,id__67033__auto__,vec__71843,S,peer,vec__71846,in$,out){
return (function() {
var kabel$middleware$transit$state_machine__64804__auto__ = null;
var kabel$middleware$transit$state_machine__64804__auto____0 = (function (){
var statearr_72017 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_72017[(0)] = kabel$middleware$transit$state_machine__64804__auto__);

(statearr_72017[(1)] = (1));

return statearr_72017;
});
var kabel$middleware$transit$state_machine__64804__auto____1 = (function (state_71998){
while(true){
var ret_value__64805__auto__ = (function (){try{while(true){
var result__64806__auto__ = switch__64803__auto__.call(null,state_71998);
if(cljs.core.keyword_identical_QMARK_.call(null,result__64806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64806__auto__;
}
break;
}
}catch (e72018){if((e72018 instanceof Object)){
var ex__64807__auto__ = e72018;
var statearr_72019_72065 = state_71998;
(statearr_72019_72065[(5)] = ex__64807__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71998);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e72018;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__64805__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72066 = state_71998;
state_71998 = G__72066;
continue;
} else {
return ret_value__64805__auto__;
}
break;
}
});
kabel$middleware$transit$state_machine__64804__auto__ = function(state_71998){
switch(arguments.length){
case 0:
return kabel$middleware$transit$state_machine__64804__auto____0.call(this);
case 1:
return kabel$middleware$transit$state_machine__64804__auto____1.call(this,state_71998);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
kabel$middleware$transit$state_machine__64804__auto__.cljs$core$IFn$_invoke$arity$0 = kabel$middleware$transit$state_machine__64804__auto____0;
kabel$middleware$transit$state_machine__64804__auto__.cljs$core$IFn$_invoke$arity$1 = kabel$middleware$transit$state_machine__64804__auto____1;
return kabel$middleware$transit$state_machine__64804__auto__;
})()
;})(switch__64803__auto__,c__64826__auto__,c__67032__auto__,id__67033__auto__,vec__71843,S,peer,vec__71846,in$,out))
})();
var state__64828__auto__ = (function (){var statearr_72020 = f__64827__auto__.call(null);
(statearr_72020[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__64826__auto__);

return statearr_72020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__64828__auto__);
});})(c__64826__auto__,c__67032__auto__,id__67033__auto__,vec__71843,S,peer,vec__71846,in$,out))
);

return c__64826__auto__;
});})(vec__71843,S,peer,vec__71846,in$,out))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [S,peer,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [in$,out], null)], null));
});

kabel.middleware.transit.transit.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=transit.js.map?rel=1506321320022