// Compiled by ClojureScript 1.9.542 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.8";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args91771 = [];
var len__62120__auto___91774 = arguments.length;
var i__62121__auto___91775 = (0);
while(true){
if((i__62121__auto___91775 < len__62120__auto___91774)){
args91771.push((arguments[i__62121__auto___91775]));

var G__91776 = (i__62121__auto___91775 + (1));
i__62121__auto___91775 = G__91776;
continue;
} else {
}
break;
}

var G__91773 = args91771.length;
switch (G__91773) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args91771.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__62127__auto__ = [];
var len__62120__auto___91779 = arguments.length;
var i__62121__auto___91780 = (0);
while(true){
if((i__62121__auto___91780 < len__62120__auto___91779)){
args__62127__auto__.push((arguments[i__62121__auto___91780]));

var G__91781 = (i__62121__auto___91780 + (1));
i__62121__auto___91780 = G__91781;
continue;
} else {
}
break;
}

var argseq__62128__auto__ = ((((0) < args__62127__auto__.length))?(new cljs.core.IndexedSeq(args__62127__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__62128__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq91778){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq91778));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__62127__auto__ = [];
var len__62120__auto___91783 = arguments.length;
var i__62121__auto___91784 = (0);
while(true){
if((i__62121__auto___91784 < len__62120__auto___91783)){
args__62127__auto__.push((arguments[i__62121__auto___91784]));

var G__91785 = (i__62121__auto___91784 + (1));
i__62121__auto___91784 = G__91785;
continue;
} else {
}
break;
}

var argseq__62128__auto__ = ((((0) < args__62127__auto__.length))?(new cljs.core.IndexedSeq(args__62127__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__62128__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq91782){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq91782));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__91786 = cljs.core._EQ_;
var expr__91787 = (function (){var or__60899__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e91790){if((e91790 instanceof Error)){
var e = e91790;
return false;
} else {
throw e91790;

}
}})();
if(cljs.core.truth_(or__60899__auto__)){
return or__60899__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__91786.call(null,"true",expr__91787))){
return true;
} else {
if(cljs.core.truth_(pred__91786.call(null,"false",expr__91787))){
return false;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__91787)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel autoloading "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e91792){if((e91792 instanceof Error)){
var e = e91792;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unable to access localStorage")].join(''));
} else {
throw e91792;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__91793){
var map__91796 = p__91793;
var map__91796__$1 = ((((!((map__91796 == null)))?((((map__91796.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91796.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__91796):map__91796);
var message = cljs.core.get.call(null,map__91796__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__91796__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" : "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__60899__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__60899__auto__)){
return or__60899__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__60887__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__60887__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__60887__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__69114__auto___91958 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__69114__auto___91958,ch){
return (function (){
var f__69115__auto__ = (function (){var switch__69000__auto__ = ((function (c__69114__auto___91958,ch){
return (function (state_91927){
var state_val_91928 = (state_91927[(1)]);
if((state_val_91928 === (7))){
var inst_91923 = (state_91927[(2)]);
var state_91927__$1 = state_91927;
var statearr_91929_91959 = state_91927__$1;
(statearr_91929_91959[(2)] = inst_91923);

(statearr_91929_91959[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91928 === (1))){
var state_91927__$1 = state_91927;
var statearr_91930_91960 = state_91927__$1;
(statearr_91930_91960[(2)] = null);

(statearr_91930_91960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91928 === (4))){
var inst_91880 = (state_91927[(7)]);
var inst_91880__$1 = (state_91927[(2)]);
var state_91927__$1 = (function (){var statearr_91931 = state_91927;
(statearr_91931[(7)] = inst_91880__$1);

return statearr_91931;
})();
if(cljs.core.truth_(inst_91880__$1)){
var statearr_91932_91961 = state_91927__$1;
(statearr_91932_91961[(1)] = (5));

} else {
var statearr_91933_91962 = state_91927__$1;
(statearr_91933_91962[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91928 === (15))){
var inst_91887 = (state_91927[(8)]);
var inst_91902 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_91887);
var inst_91903 = cljs.core.first.call(null,inst_91902);
var inst_91904 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_91903);
var inst_91905 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not loading code with warnings - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_91904)].join('');
var inst_91906 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_91905);
var state_91927__$1 = state_91927;
var statearr_91934_91963 = state_91927__$1;
(statearr_91934_91963[(2)] = inst_91906);

(statearr_91934_91963[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91928 === (13))){
var inst_91911 = (state_91927[(2)]);
var state_91927__$1 = state_91927;
var statearr_91935_91964 = state_91927__$1;
(statearr_91935_91964[(2)] = inst_91911);

(statearr_91935_91964[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91928 === (6))){
var state_91927__$1 = state_91927;
var statearr_91936_91965 = state_91927__$1;
(statearr_91936_91965[(2)] = null);

(statearr_91936_91965[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91928 === (17))){
var inst_91909 = (state_91927[(2)]);
var state_91927__$1 = state_91927;
var statearr_91937_91966 = state_91927__$1;
(statearr_91937_91966[(2)] = inst_91909);

(statearr_91937_91966[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91928 === (3))){
var inst_91925 = (state_91927[(2)]);
var state_91927__$1 = state_91927;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_91927__$1,inst_91925);
} else {
if((state_val_91928 === (12))){
var inst_91886 = (state_91927[(9)]);
var inst_91900 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_91886,opts);
var state_91927__$1 = state_91927;
if(cljs.core.truth_(inst_91900)){
var statearr_91938_91967 = state_91927__$1;
(statearr_91938_91967[(1)] = (15));

} else {
var statearr_91939_91968 = state_91927__$1;
(statearr_91939_91968[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91928 === (2))){
var state_91927__$1 = state_91927;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_91927__$1,(4),ch);
} else {
if((state_val_91928 === (11))){
var inst_91887 = (state_91927[(8)]);
var inst_91892 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_91893 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_91887);
var inst_91894 = cljs.core.async.timeout.call(null,(1000));
var inst_91895 = [inst_91893,inst_91894];
var inst_91896 = (new cljs.core.PersistentVector(null,2,(5),inst_91892,inst_91895,null));
var state_91927__$1 = state_91927;
return cljs.core.async.ioc_alts_BANG_.call(null,state_91927__$1,(14),inst_91896);
} else {
if((state_val_91928 === (9))){
var inst_91887 = (state_91927[(8)]);
var inst_91913 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_91914 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_91887);
var inst_91915 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_91914);
var inst_91916 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Not loading: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_91915)].join('');
var inst_91917 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_91916);
var state_91927__$1 = (function (){var statearr_91940 = state_91927;
(statearr_91940[(10)] = inst_91913);

return statearr_91940;
})();
var statearr_91941_91969 = state_91927__$1;
(statearr_91941_91969[(2)] = inst_91917);

(statearr_91941_91969[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91928 === (5))){
var inst_91880 = (state_91927[(7)]);
var inst_91882 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_91883 = (new cljs.core.PersistentArrayMap(null,2,inst_91882,null));
var inst_91884 = (new cljs.core.PersistentHashSet(null,inst_91883,null));
var inst_91885 = figwheel.client.focus_msgs.call(null,inst_91884,inst_91880);
var inst_91886 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_91885);
var inst_91887 = cljs.core.first.call(null,inst_91885);
var inst_91888 = figwheel.client.autoload_QMARK_.call(null);
var state_91927__$1 = (function (){var statearr_91942 = state_91927;
(statearr_91942[(9)] = inst_91886);

(statearr_91942[(8)] = inst_91887);

return statearr_91942;
})();
if(cljs.core.truth_(inst_91888)){
var statearr_91943_91970 = state_91927__$1;
(statearr_91943_91970[(1)] = (8));

} else {
var statearr_91944_91971 = state_91927__$1;
(statearr_91944_91971[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91928 === (14))){
var inst_91898 = (state_91927[(2)]);
var state_91927__$1 = state_91927;
var statearr_91945_91972 = state_91927__$1;
(statearr_91945_91972[(2)] = inst_91898);

(statearr_91945_91972[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91928 === (16))){
var state_91927__$1 = state_91927;
var statearr_91946_91973 = state_91927__$1;
(statearr_91946_91973[(2)] = null);

(statearr_91946_91973[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91928 === (10))){
var inst_91919 = (state_91927[(2)]);
var state_91927__$1 = (function (){var statearr_91947 = state_91927;
(statearr_91947[(11)] = inst_91919);

return statearr_91947;
})();
var statearr_91948_91974 = state_91927__$1;
(statearr_91948_91974[(2)] = null);

(statearr_91948_91974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91928 === (8))){
var inst_91886 = (state_91927[(9)]);
var inst_91890 = figwheel.client.reload_file_state_QMARK_.call(null,inst_91886,opts);
var state_91927__$1 = state_91927;
if(cljs.core.truth_(inst_91890)){
var statearr_91949_91975 = state_91927__$1;
(statearr_91949_91975[(1)] = (11));

} else {
var statearr_91950_91976 = state_91927__$1;
(statearr_91950_91976[(1)] = (12));

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
});})(c__69114__auto___91958,ch))
;
return ((function (switch__69000__auto__,c__69114__auto___91958,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__69001__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__69001__auto____0 = (function (){
var statearr_91954 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_91954[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__69001__auto__);

(statearr_91954[(1)] = (1));

return statearr_91954;
});
var figwheel$client$file_reloader_plugin_$_state_machine__69001__auto____1 = (function (state_91927){
while(true){
var ret_value__69002__auto__ = (function (){try{while(true){
var result__69003__auto__ = switch__69000__auto__.call(null,state_91927);
if(cljs.core.keyword_identical_QMARK_.call(null,result__69003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69003__auto__;
}
break;
}
}catch (e91955){if((e91955 instanceof Object)){
var ex__69004__auto__ = e91955;
var statearr_91956_91977 = state_91927;
(statearr_91956_91977[(5)] = ex__69004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91927);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e91955;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__69002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__91978 = state_91927;
state_91927 = G__91978;
continue;
} else {
return ret_value__69002__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__69001__auto__ = function(state_91927){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__69001__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__69001__auto____1.call(this,state_91927);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__69001__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__69001__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__69001__auto__;
})()
;})(switch__69000__auto__,c__69114__auto___91958,ch))
})();
var state__69116__auto__ = (function (){var statearr_91957 = f__69115__auto__.call(null);
(statearr_91957[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__69114__auto___91958);

return statearr_91957;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__69116__auto__);
});})(c__69114__auto___91958,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__91979_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__91979_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_91982 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_91982){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e91981){if((e91981 instanceof Error)){
var e = e91981;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_91982], null));
} else {
var e = e91981;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_91982))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__91983){
var map__91992 = p__91983;
var map__91992__$1 = ((((!((map__91992 == null)))?((((map__91992.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91992.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__91992):map__91992);
var opts = map__91992__$1;
var build_id = cljs.core.get.call(null,map__91992__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__91992,map__91992__$1,opts,build_id){
return (function (p__91994){
var vec__91995 = p__91994;
var seq__91996 = cljs.core.seq.call(null,vec__91995);
var first__91997 = cljs.core.first.call(null,seq__91996);
var seq__91996__$1 = cljs.core.next.call(null,seq__91996);
var map__91998 = first__91997;
var map__91998__$1 = ((((!((map__91998 == null)))?((((map__91998.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91998.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__91998):map__91998);
var msg = map__91998__$1;
var msg_name = cljs.core.get.call(null,map__91998__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__91996__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__91995,seq__91996,first__91997,seq__91996__$1,map__91998,map__91998__$1,msg,msg_name,_,map__91992,map__91992__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__91995,seq__91996,first__91997,seq__91996__$1,map__91998,map__91998__$1,msg,msg_name,_,map__91992,map__91992__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__91992,map__91992__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__92006){
var vec__92007 = p__92006;
var seq__92008 = cljs.core.seq.call(null,vec__92007);
var first__92009 = cljs.core.first.call(null,seq__92008);
var seq__92008__$1 = cljs.core.next.call(null,seq__92008);
var map__92010 = first__92009;
var map__92010__$1 = ((((!((map__92010 == null)))?((((map__92010.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__92010.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__92010):map__92010);
var msg = map__92010__$1;
var msg_name = cljs.core.get.call(null,map__92010__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__92008__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__92012){
var map__92024 = p__92012;
var map__92024__$1 = ((((!((map__92024 == null)))?((((map__92024.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__92024.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__92024):map__92024);
var on_compile_warning = cljs.core.get.call(null,map__92024__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__92024__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__92024,map__92024__$1,on_compile_warning,on_compile_fail){
return (function (p__92026){
var vec__92027 = p__92026;
var seq__92028 = cljs.core.seq.call(null,vec__92027);
var first__92029 = cljs.core.first.call(null,seq__92028);
var seq__92028__$1 = cljs.core.next.call(null,seq__92028);
var map__92030 = first__92029;
var map__92030__$1 = ((((!((map__92030 == null)))?((((map__92030.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__92030.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__92030):map__92030);
var msg = map__92030__$1;
var msg_name = cljs.core.get.call(null,map__92030__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__92028__$1;
var pred__92032 = cljs.core._EQ_;
var expr__92033 = msg_name;
if(cljs.core.truth_(pred__92032.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__92033))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__92032.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__92033))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__92024,map__92024__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__69114__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__69114__auto__,msg_hist,msg_names,msg){
return (function (){
var f__69115__auto__ = (function (){var switch__69000__auto__ = ((function (c__69114__auto__,msg_hist,msg_names,msg){
return (function (state_92261){
var state_val_92262 = (state_92261[(1)]);
if((state_val_92262 === (7))){
var inst_92181 = (state_92261[(2)]);
var state_92261__$1 = state_92261;
if(cljs.core.truth_(inst_92181)){
var statearr_92263_92313 = state_92261__$1;
(statearr_92263_92313[(1)] = (8));

} else {
var statearr_92264_92314 = state_92261__$1;
(statearr_92264_92314[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92262 === (20))){
var inst_92255 = (state_92261[(2)]);
var state_92261__$1 = state_92261;
var statearr_92265_92315 = state_92261__$1;
(statearr_92265_92315[(2)] = inst_92255);

(statearr_92265_92315[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92262 === (27))){
var inst_92251 = (state_92261[(2)]);
var state_92261__$1 = state_92261;
var statearr_92266_92316 = state_92261__$1;
(statearr_92266_92316[(2)] = inst_92251);

(statearr_92266_92316[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92262 === (1))){
var inst_92174 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_92261__$1 = state_92261;
if(cljs.core.truth_(inst_92174)){
var statearr_92267_92317 = state_92261__$1;
(statearr_92267_92317[(1)] = (2));

} else {
var statearr_92268_92318 = state_92261__$1;
(statearr_92268_92318[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92262 === (24))){
var inst_92253 = (state_92261[(2)]);
var state_92261__$1 = state_92261;
var statearr_92269_92319 = state_92261__$1;
(statearr_92269_92319[(2)] = inst_92253);

(statearr_92269_92319[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92262 === (4))){
var inst_92259 = (state_92261[(2)]);
var state_92261__$1 = state_92261;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_92261__$1,inst_92259);
} else {
if((state_val_92262 === (15))){
var inst_92257 = (state_92261[(2)]);
var state_92261__$1 = state_92261;
var statearr_92270_92320 = state_92261__$1;
(statearr_92270_92320[(2)] = inst_92257);

(statearr_92270_92320[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92262 === (21))){
var inst_92210 = (state_92261[(2)]);
var inst_92211 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_92212 = figwheel.client.auto_jump_to_error.call(null,opts,inst_92211);
var state_92261__$1 = (function (){var statearr_92271 = state_92261;
(statearr_92271[(7)] = inst_92210);

return statearr_92271;
})();
var statearr_92272_92321 = state_92261__$1;
(statearr_92272_92321[(2)] = inst_92212);

(statearr_92272_92321[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92262 === (31))){
var inst_92240 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_92261__$1 = state_92261;
if(cljs.core.truth_(inst_92240)){
var statearr_92273_92322 = state_92261__$1;
(statearr_92273_92322[(1)] = (34));

} else {
var statearr_92274_92323 = state_92261__$1;
(statearr_92274_92323[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92262 === (32))){
var inst_92249 = (state_92261[(2)]);
var state_92261__$1 = state_92261;
var statearr_92275_92324 = state_92261__$1;
(statearr_92275_92324[(2)] = inst_92249);

(statearr_92275_92324[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92262 === (33))){
var inst_92236 = (state_92261[(2)]);
var inst_92237 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_92238 = figwheel.client.auto_jump_to_error.call(null,opts,inst_92237);
var state_92261__$1 = (function (){var statearr_92276 = state_92261;
(statearr_92276[(8)] = inst_92236);

return statearr_92276;
})();
var statearr_92277_92325 = state_92261__$1;
(statearr_92277_92325[(2)] = inst_92238);

(statearr_92277_92325[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92262 === (13))){
var inst_92195 = figwheel.client.heads_up.clear.call(null);
var state_92261__$1 = state_92261;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_92261__$1,(16),inst_92195);
} else {
if((state_val_92262 === (22))){
var inst_92216 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_92217 = figwheel.client.heads_up.append_warning_message.call(null,inst_92216);
var state_92261__$1 = state_92261;
var statearr_92278_92326 = state_92261__$1;
(statearr_92278_92326[(2)] = inst_92217);

(statearr_92278_92326[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92262 === (36))){
var inst_92247 = (state_92261[(2)]);
var state_92261__$1 = state_92261;
var statearr_92279_92327 = state_92261__$1;
(statearr_92279_92327[(2)] = inst_92247);

(statearr_92279_92327[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92262 === (29))){
var inst_92227 = (state_92261[(2)]);
var inst_92228 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_92229 = figwheel.client.auto_jump_to_error.call(null,opts,inst_92228);
var state_92261__$1 = (function (){var statearr_92280 = state_92261;
(statearr_92280[(9)] = inst_92227);

return statearr_92280;
})();
var statearr_92281_92328 = state_92261__$1;
(statearr_92281_92328[(2)] = inst_92229);

(statearr_92281_92328[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92262 === (6))){
var inst_92176 = (state_92261[(10)]);
var state_92261__$1 = state_92261;
var statearr_92282_92329 = state_92261__$1;
(statearr_92282_92329[(2)] = inst_92176);

(statearr_92282_92329[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92262 === (28))){
var inst_92223 = (state_92261[(2)]);
var inst_92224 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_92225 = figwheel.client.heads_up.display_warning.call(null,inst_92224);
var state_92261__$1 = (function (){var statearr_92283 = state_92261;
(statearr_92283[(11)] = inst_92223);

return statearr_92283;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_92261__$1,(29),inst_92225);
} else {
if((state_val_92262 === (25))){
var inst_92221 = figwheel.client.heads_up.clear.call(null);
var state_92261__$1 = state_92261;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_92261__$1,(28),inst_92221);
} else {
if((state_val_92262 === (34))){
var inst_92242 = figwheel.client.heads_up.flash_loaded.call(null);
var state_92261__$1 = state_92261;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_92261__$1,(37),inst_92242);
} else {
if((state_val_92262 === (17))){
var inst_92201 = (state_92261[(2)]);
var inst_92202 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_92203 = figwheel.client.auto_jump_to_error.call(null,opts,inst_92202);
var state_92261__$1 = (function (){var statearr_92284 = state_92261;
(statearr_92284[(12)] = inst_92201);

return statearr_92284;
})();
var statearr_92285_92330 = state_92261__$1;
(statearr_92285_92330[(2)] = inst_92203);

(statearr_92285_92330[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92262 === (3))){
var inst_92193 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_92261__$1 = state_92261;
if(cljs.core.truth_(inst_92193)){
var statearr_92286_92331 = state_92261__$1;
(statearr_92286_92331[(1)] = (13));

} else {
var statearr_92287_92332 = state_92261__$1;
(statearr_92287_92332[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92262 === (12))){
var inst_92189 = (state_92261[(2)]);
var state_92261__$1 = state_92261;
var statearr_92288_92333 = state_92261__$1;
(statearr_92288_92333[(2)] = inst_92189);

(statearr_92288_92333[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92262 === (2))){
var inst_92176 = (state_92261[(10)]);
var inst_92176__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_92261__$1 = (function (){var statearr_92289 = state_92261;
(statearr_92289[(10)] = inst_92176__$1);

return statearr_92289;
})();
if(cljs.core.truth_(inst_92176__$1)){
var statearr_92290_92334 = state_92261__$1;
(statearr_92290_92334[(1)] = (5));

} else {
var statearr_92291_92335 = state_92261__$1;
(statearr_92291_92335[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92262 === (23))){
var inst_92219 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_92261__$1 = state_92261;
if(cljs.core.truth_(inst_92219)){
var statearr_92292_92336 = state_92261__$1;
(statearr_92292_92336[(1)] = (25));

} else {
var statearr_92293_92337 = state_92261__$1;
(statearr_92293_92337[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92262 === (35))){
var state_92261__$1 = state_92261;
var statearr_92294_92338 = state_92261__$1;
(statearr_92294_92338[(2)] = null);

(statearr_92294_92338[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92262 === (19))){
var inst_92214 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_92261__$1 = state_92261;
if(cljs.core.truth_(inst_92214)){
var statearr_92295_92339 = state_92261__$1;
(statearr_92295_92339[(1)] = (22));

} else {
var statearr_92296_92340 = state_92261__$1;
(statearr_92296_92340[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92262 === (11))){
var inst_92185 = (state_92261[(2)]);
var state_92261__$1 = state_92261;
var statearr_92297_92341 = state_92261__$1;
(statearr_92297_92341[(2)] = inst_92185);

(statearr_92297_92341[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92262 === (9))){
var inst_92187 = figwheel.client.heads_up.clear.call(null);
var state_92261__$1 = state_92261;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_92261__$1,(12),inst_92187);
} else {
if((state_val_92262 === (5))){
var inst_92178 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_92261__$1 = state_92261;
var statearr_92298_92342 = state_92261__$1;
(statearr_92298_92342[(2)] = inst_92178);

(statearr_92298_92342[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92262 === (14))){
var inst_92205 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_92261__$1 = state_92261;
if(cljs.core.truth_(inst_92205)){
var statearr_92299_92343 = state_92261__$1;
(statearr_92299_92343[(1)] = (18));

} else {
var statearr_92300_92344 = state_92261__$1;
(statearr_92300_92344[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92262 === (26))){
var inst_92231 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_92261__$1 = state_92261;
if(cljs.core.truth_(inst_92231)){
var statearr_92301_92345 = state_92261__$1;
(statearr_92301_92345[(1)] = (30));

} else {
var statearr_92302_92346 = state_92261__$1;
(statearr_92302_92346[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92262 === (16))){
var inst_92197 = (state_92261[(2)]);
var inst_92198 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_92199 = figwheel.client.heads_up.display_exception.call(null,inst_92198);
var state_92261__$1 = (function (){var statearr_92303 = state_92261;
(statearr_92303[(13)] = inst_92197);

return statearr_92303;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_92261__$1,(17),inst_92199);
} else {
if((state_val_92262 === (30))){
var inst_92233 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_92234 = figwheel.client.heads_up.display_warning.call(null,inst_92233);
var state_92261__$1 = state_92261;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_92261__$1,(33),inst_92234);
} else {
if((state_val_92262 === (10))){
var inst_92191 = (state_92261[(2)]);
var state_92261__$1 = state_92261;
var statearr_92304_92347 = state_92261__$1;
(statearr_92304_92347[(2)] = inst_92191);

(statearr_92304_92347[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92262 === (18))){
var inst_92207 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_92208 = figwheel.client.heads_up.display_exception.call(null,inst_92207);
var state_92261__$1 = state_92261;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_92261__$1,(21),inst_92208);
} else {
if((state_val_92262 === (37))){
var inst_92244 = (state_92261[(2)]);
var state_92261__$1 = state_92261;
var statearr_92305_92348 = state_92261__$1;
(statearr_92305_92348[(2)] = inst_92244);

(statearr_92305_92348[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92262 === (8))){
var inst_92183 = figwheel.client.heads_up.flash_loaded.call(null);
var state_92261__$1 = state_92261;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_92261__$1,(11),inst_92183);
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
});})(c__69114__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__69000__auto__,c__69114__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__69001__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__69001__auto____0 = (function (){
var statearr_92309 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_92309[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__69001__auto__);

(statearr_92309[(1)] = (1));

return statearr_92309;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__69001__auto____1 = (function (state_92261){
while(true){
var ret_value__69002__auto__ = (function (){try{while(true){
var result__69003__auto__ = switch__69000__auto__.call(null,state_92261);
if(cljs.core.keyword_identical_QMARK_.call(null,result__69003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69003__auto__;
}
break;
}
}catch (e92310){if((e92310 instanceof Object)){
var ex__69004__auto__ = e92310;
var statearr_92311_92349 = state_92261;
(statearr_92311_92349[(5)] = ex__69004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_92261);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e92310;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__69002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__92350 = state_92261;
state_92261 = G__92350;
continue;
} else {
return ret_value__69002__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__69001__auto__ = function(state_92261){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__69001__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__69001__auto____1.call(this,state_92261);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__69001__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__69001__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__69001__auto__;
})()
;})(switch__69000__auto__,c__69114__auto__,msg_hist,msg_names,msg))
})();
var state__69116__auto__ = (function (){var statearr_92312 = f__69115__auto__.call(null);
(statearr_92312[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__69114__auto__);

return statearr_92312;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__69116__auto__);
});})(c__69114__auto__,msg_hist,msg_names,msg))
);

return c__69114__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__69114__auto___92413 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__69114__auto___92413,ch){
return (function (){
var f__69115__auto__ = (function (){var switch__69000__auto__ = ((function (c__69114__auto___92413,ch){
return (function (state_92396){
var state_val_92397 = (state_92396[(1)]);
if((state_val_92397 === (1))){
var state_92396__$1 = state_92396;
var statearr_92398_92414 = state_92396__$1;
(statearr_92398_92414[(2)] = null);

(statearr_92398_92414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92397 === (2))){
var state_92396__$1 = state_92396;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_92396__$1,(4),ch);
} else {
if((state_val_92397 === (3))){
var inst_92394 = (state_92396[(2)]);
var state_92396__$1 = state_92396;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_92396__$1,inst_92394);
} else {
if((state_val_92397 === (4))){
var inst_92384 = (state_92396[(7)]);
var inst_92384__$1 = (state_92396[(2)]);
var state_92396__$1 = (function (){var statearr_92399 = state_92396;
(statearr_92399[(7)] = inst_92384__$1);

return statearr_92399;
})();
if(cljs.core.truth_(inst_92384__$1)){
var statearr_92400_92415 = state_92396__$1;
(statearr_92400_92415[(1)] = (5));

} else {
var statearr_92401_92416 = state_92396__$1;
(statearr_92401_92416[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92397 === (5))){
var inst_92384 = (state_92396[(7)]);
var inst_92386 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_92384);
var state_92396__$1 = state_92396;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_92396__$1,(8),inst_92386);
} else {
if((state_val_92397 === (6))){
var state_92396__$1 = state_92396;
var statearr_92402_92417 = state_92396__$1;
(statearr_92402_92417[(2)] = null);

(statearr_92402_92417[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92397 === (7))){
var inst_92392 = (state_92396[(2)]);
var state_92396__$1 = state_92396;
var statearr_92403_92418 = state_92396__$1;
(statearr_92403_92418[(2)] = inst_92392);

(statearr_92403_92418[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92397 === (8))){
var inst_92388 = (state_92396[(2)]);
var state_92396__$1 = (function (){var statearr_92404 = state_92396;
(statearr_92404[(8)] = inst_92388);

return statearr_92404;
})();
var statearr_92405_92419 = state_92396__$1;
(statearr_92405_92419[(2)] = null);

(statearr_92405_92419[(1)] = (2));


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
});})(c__69114__auto___92413,ch))
;
return ((function (switch__69000__auto__,c__69114__auto___92413,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__69001__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__69001__auto____0 = (function (){
var statearr_92409 = [null,null,null,null,null,null,null,null,null];
(statearr_92409[(0)] = figwheel$client$heads_up_plugin_$_state_machine__69001__auto__);

(statearr_92409[(1)] = (1));

return statearr_92409;
});
var figwheel$client$heads_up_plugin_$_state_machine__69001__auto____1 = (function (state_92396){
while(true){
var ret_value__69002__auto__ = (function (){try{while(true){
var result__69003__auto__ = switch__69000__auto__.call(null,state_92396);
if(cljs.core.keyword_identical_QMARK_.call(null,result__69003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69003__auto__;
}
break;
}
}catch (e92410){if((e92410 instanceof Object)){
var ex__69004__auto__ = e92410;
var statearr_92411_92420 = state_92396;
(statearr_92411_92420[(5)] = ex__69004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_92396);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e92410;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__69002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__92421 = state_92396;
state_92396 = G__92421;
continue;
} else {
return ret_value__69002__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__69001__auto__ = function(state_92396){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__69001__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__69001__auto____1.call(this,state_92396);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__69001__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__69001__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__69001__auto__;
})()
;})(switch__69000__auto__,c__69114__auto___92413,ch))
})();
var state__69116__auto__ = (function (){var statearr_92412 = f__69115__auto__.call(null);
(statearr_92412[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__69114__auto___92413);

return statearr_92412;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__69116__auto__);
});})(c__69114__auto___92413,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__69114__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__69114__auto__){
return (function (){
var f__69115__auto__ = (function (){var switch__69000__auto__ = ((function (c__69114__auto__){
return (function (state_92442){
var state_val_92443 = (state_92442[(1)]);
if((state_val_92443 === (1))){
var inst_92437 = cljs.core.async.timeout.call(null,(3000));
var state_92442__$1 = state_92442;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_92442__$1,(2),inst_92437);
} else {
if((state_val_92443 === (2))){
var inst_92439 = (state_92442[(2)]);
var inst_92440 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_92442__$1 = (function (){var statearr_92444 = state_92442;
(statearr_92444[(7)] = inst_92439);

return statearr_92444;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_92442__$1,inst_92440);
} else {
return null;
}
}
});})(c__69114__auto__))
;
return ((function (switch__69000__auto__,c__69114__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__69001__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__69001__auto____0 = (function (){
var statearr_92448 = [null,null,null,null,null,null,null,null];
(statearr_92448[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__69001__auto__);

(statearr_92448[(1)] = (1));

return statearr_92448;
});
var figwheel$client$enforce_project_plugin_$_state_machine__69001__auto____1 = (function (state_92442){
while(true){
var ret_value__69002__auto__ = (function (){try{while(true){
var result__69003__auto__ = switch__69000__auto__.call(null,state_92442);
if(cljs.core.keyword_identical_QMARK_.call(null,result__69003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69003__auto__;
}
break;
}
}catch (e92449){if((e92449 instanceof Object)){
var ex__69004__auto__ = e92449;
var statearr_92450_92452 = state_92442;
(statearr_92450_92452[(5)] = ex__69004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_92442);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e92449;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__69002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__92453 = state_92442;
state_92442 = G__92453;
continue;
} else {
return ret_value__69002__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__69001__auto__ = function(state_92442){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__69001__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__69001__auto____1.call(this,state_92442);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__69001__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__69001__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__69001__auto__;
})()
;})(switch__69000__auto__,c__69114__auto__))
})();
var state__69116__auto__ = (function (){var statearr_92451 = f__69115__auto__.call(null);
(statearr_92451[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__69114__auto__);

return statearr_92451;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__69116__auto__);
});})(c__69114__auto__))
);

return c__69114__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__6738__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__6738__auto__)){
var figwheel_version = temp__6738__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__69114__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__69114__auto__,figwheel_version,temp__6738__auto__){
return (function (){
var f__69115__auto__ = (function (){var switch__69000__auto__ = ((function (c__69114__auto__,figwheel_version,temp__6738__auto__){
return (function (state_92476){
var state_val_92477 = (state_92476[(1)]);
if((state_val_92477 === (1))){
var inst_92470 = cljs.core.async.timeout.call(null,(2000));
var state_92476__$1 = state_92476;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_92476__$1,(2),inst_92470);
} else {
if((state_val_92477 === (2))){
var inst_92472 = (state_92476[(2)]);
var inst_92473 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Client Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong> is not equal to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Sidecar Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".  Shutting down Websocket Connection!"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<h4>To fix try:</h4>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_92474 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_92473);
var state_92476__$1 = (function (){var statearr_92478 = state_92476;
(statearr_92478[(7)] = inst_92472);

return statearr_92478;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_92476__$1,inst_92474);
} else {
return null;
}
}
});})(c__69114__auto__,figwheel_version,temp__6738__auto__))
;
return ((function (switch__69000__auto__,c__69114__auto__,figwheel_version,temp__6738__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__69001__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__69001__auto____0 = (function (){
var statearr_92482 = [null,null,null,null,null,null,null,null];
(statearr_92482[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__69001__auto__);

(statearr_92482[(1)] = (1));

return statearr_92482;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__69001__auto____1 = (function (state_92476){
while(true){
var ret_value__69002__auto__ = (function (){try{while(true){
var result__69003__auto__ = switch__69000__auto__.call(null,state_92476);
if(cljs.core.keyword_identical_QMARK_.call(null,result__69003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69003__auto__;
}
break;
}
}catch (e92483){if((e92483 instanceof Object)){
var ex__69004__auto__ = e92483;
var statearr_92484_92486 = state_92476;
(statearr_92484_92486[(5)] = ex__69004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_92476);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e92483;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__69002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__92487 = state_92476;
state_92476 = G__92487;
continue;
} else {
return ret_value__69002__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__69001__auto__ = function(state_92476){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__69001__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__69001__auto____1.call(this,state_92476);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__69001__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__69001__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__69001__auto__;
})()
;})(switch__69000__auto__,c__69114__auto__,figwheel_version,temp__6738__auto__))
})();
var state__69116__auto__ = (function (){var statearr_92485 = f__69115__auto__.call(null);
(statearr_92485[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__69114__auto__);

return statearr_92485;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__69116__auto__);
});})(c__69114__auto__,figwheel_version,temp__6738__auto__))
);

return c__69114__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__92488){
var map__92492 = p__92488;
var map__92492__$1 = ((((!((map__92492 == null)))?((((map__92492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__92492.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__92492):map__92492);
var file = cljs.core.get.call(null,map__92492__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__92492__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__92492__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__92494 = "";
var G__92494__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__92494),cljs.core.str.cljs$core$IFn$_invoke$arity$1("file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__92494);
var G__92494__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__92494__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__92494__$1);
if(cljs.core.truth_((function (){var and__60887__auto__ = line;
if(cljs.core.truth_(and__60887__auto__)){
return column;
} else {
return and__60887__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__92494__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__92494__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__92495){
var map__92502 = p__92495;
var map__92502__$1 = ((((!((map__92502 == null)))?((((map__92502.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__92502.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__92502):map__92502);
var ed = map__92502__$1;
var formatted_exception = cljs.core.get.call(null,map__92502__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__92502__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__92502__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__92504_92508 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__92505_92509 = null;
var count__92506_92510 = (0);
var i__92507_92511 = (0);
while(true){
if((i__92507_92511 < count__92506_92510)){
var msg_92512 = cljs.core._nth.call(null,chunk__92505_92509,i__92507_92511);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_92512);

var G__92513 = seq__92504_92508;
var G__92514 = chunk__92505_92509;
var G__92515 = count__92506_92510;
var G__92516 = (i__92507_92511 + (1));
seq__92504_92508 = G__92513;
chunk__92505_92509 = G__92514;
count__92506_92510 = G__92515;
i__92507_92511 = G__92516;
continue;
} else {
var temp__6738__auto___92517 = cljs.core.seq.call(null,seq__92504_92508);
if(temp__6738__auto___92517){
var seq__92504_92518__$1 = temp__6738__auto___92517;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__92504_92518__$1)){
var c__61810__auto___92519 = cljs.core.chunk_first.call(null,seq__92504_92518__$1);
var G__92520 = cljs.core.chunk_rest.call(null,seq__92504_92518__$1);
var G__92521 = c__61810__auto___92519;
var G__92522 = cljs.core.count.call(null,c__61810__auto___92519);
var G__92523 = (0);
seq__92504_92508 = G__92520;
chunk__92505_92509 = G__92521;
count__92506_92510 = G__92522;
i__92507_92511 = G__92523;
continue;
} else {
var msg_92524 = cljs.core.first.call(null,seq__92504_92518__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_92524);

var G__92525 = cljs.core.next.call(null,seq__92504_92518__$1);
var G__92526 = null;
var G__92527 = (0);
var G__92528 = (0);
seq__92504_92508 = G__92525;
chunk__92505_92509 = G__92526;
count__92506_92510 = G__92527;
i__92507_92511 = G__92528;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Error on "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__92529){
var map__92532 = p__92529;
var map__92532__$1 = ((((!((map__92532 == null)))?((((map__92532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__92532.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__92532):map__92532);
var w = map__92532__$1;
var message = cljs.core.get.call(null,map__92532__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Compile Warning - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,336,336,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,328,328,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("ws://"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__60887__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__60887__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__60887__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__92544 = cljs.core.seq.call(null,plugins);
var chunk__92545 = null;
var count__92546 = (0);
var i__92547 = (0);
while(true){
if((i__92547 < count__92546)){
var vec__92548 = cljs.core._nth.call(null,chunk__92545,i__92547);
var k = cljs.core.nth.call(null,vec__92548,(0),null);
var plugin = cljs.core.nth.call(null,vec__92548,(1),null);
if(cljs.core.truth_(plugin)){
var pl_92554 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__92544,chunk__92545,count__92546,i__92547,pl_92554,vec__92548,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_92554.call(null,msg_hist);
});})(seq__92544,chunk__92545,count__92546,i__92547,pl_92554,vec__92548,k,plugin))
);
} else {
}

var G__92555 = seq__92544;
var G__92556 = chunk__92545;
var G__92557 = count__92546;
var G__92558 = (i__92547 + (1));
seq__92544 = G__92555;
chunk__92545 = G__92556;
count__92546 = G__92557;
i__92547 = G__92558;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__92544);
if(temp__6738__auto__){
var seq__92544__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__92544__$1)){
var c__61810__auto__ = cljs.core.chunk_first.call(null,seq__92544__$1);
var G__92559 = cljs.core.chunk_rest.call(null,seq__92544__$1);
var G__92560 = c__61810__auto__;
var G__92561 = cljs.core.count.call(null,c__61810__auto__);
var G__92562 = (0);
seq__92544 = G__92559;
chunk__92545 = G__92560;
count__92546 = G__92561;
i__92547 = G__92562;
continue;
} else {
var vec__92551 = cljs.core.first.call(null,seq__92544__$1);
var k = cljs.core.nth.call(null,vec__92551,(0),null);
var plugin = cljs.core.nth.call(null,vec__92551,(1),null);
if(cljs.core.truth_(plugin)){
var pl_92563 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__92544,chunk__92545,count__92546,i__92547,pl_92563,vec__92551,k,plugin,seq__92544__$1,temp__6738__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_92563.call(null,msg_hist);
});})(seq__92544,chunk__92545,count__92546,i__92547,pl_92563,vec__92551,k,plugin,seq__92544__$1,temp__6738__auto__))
);
} else {
}

var G__92564 = cljs.core.next.call(null,seq__92544__$1);
var G__92565 = null;
var G__92566 = (0);
var G__92567 = (0);
seq__92544 = G__92564;
chunk__92545 = G__92565;
count__92546 = G__92566;
i__92547 = G__92567;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args92568 = [];
var len__62120__auto___92575 = arguments.length;
var i__62121__auto___92576 = (0);
while(true){
if((i__62121__auto___92576 < len__62120__auto___92575)){
args92568.push((arguments[i__62121__auto___92576]));

var G__92577 = (i__62121__auto___92576 + (1));
i__62121__auto___92576 = G__92577;
continue;
} else {
}
break;
}

var G__92570 = args92568.length;
switch (G__92570) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args92568.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__92571_92579 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__92572_92580 = null;
var count__92573_92581 = (0);
var i__92574_92582 = (0);
while(true){
if((i__92574_92582 < count__92573_92581)){
var msg_92583 = cljs.core._nth.call(null,chunk__92572_92580,i__92574_92582);
figwheel.client.socket.handle_incoming_message.call(null,msg_92583);

var G__92584 = seq__92571_92579;
var G__92585 = chunk__92572_92580;
var G__92586 = count__92573_92581;
var G__92587 = (i__92574_92582 + (1));
seq__92571_92579 = G__92584;
chunk__92572_92580 = G__92585;
count__92573_92581 = G__92586;
i__92574_92582 = G__92587;
continue;
} else {
var temp__6738__auto___92588 = cljs.core.seq.call(null,seq__92571_92579);
if(temp__6738__auto___92588){
var seq__92571_92589__$1 = temp__6738__auto___92588;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__92571_92589__$1)){
var c__61810__auto___92590 = cljs.core.chunk_first.call(null,seq__92571_92589__$1);
var G__92591 = cljs.core.chunk_rest.call(null,seq__92571_92589__$1);
var G__92592 = c__61810__auto___92590;
var G__92593 = cljs.core.count.call(null,c__61810__auto___92590);
var G__92594 = (0);
seq__92571_92579 = G__92591;
chunk__92572_92580 = G__92592;
count__92573_92581 = G__92593;
i__92574_92582 = G__92594;
continue;
} else {
var msg_92595 = cljs.core.first.call(null,seq__92571_92589__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_92595);

var G__92596 = cljs.core.next.call(null,seq__92571_92589__$1);
var G__92597 = null;
var G__92598 = (0);
var G__92599 = (0);
seq__92571_92579 = G__92596;
chunk__92572_92580 = G__92597;
count__92573_92581 = G__92598;
i__92574_92582 = G__92599;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__62127__auto__ = [];
var len__62120__auto___92604 = arguments.length;
var i__62121__auto___92605 = (0);
while(true){
if((i__62121__auto___92605 < len__62120__auto___92604)){
args__62127__auto__.push((arguments[i__62121__auto___92605]));

var G__92606 = (i__62121__auto___92605 + (1));
i__62121__auto___92605 = G__92606;
continue;
} else {
}
break;
}

var argseq__62128__auto__ = ((((0) < args__62127__auto__.length))?(new cljs.core.IndexedSeq(args__62127__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__62128__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__92601){
var map__92602 = p__92601;
var map__92602__$1 = ((((!((map__92602 == null)))?((((map__92602.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__92602.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__92602):map__92602);
var opts = map__92602__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq92600){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq92600));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e92608){if((e92608 instanceof Error)){
var e = e92608;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e92608;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__92612){
var map__92613 = p__92612;
var map__92613__$1 = ((((!((map__92613 == null)))?((((map__92613.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__92613.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__92613):map__92613);
var msg_name = cljs.core.get.call(null,map__92613__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1506064217599