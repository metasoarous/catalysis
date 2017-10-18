// Compiled by ClojureScript 1.9.542 {}
goog.provide('re_com.validate');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('re_com.util');
goog.require('reagent.core');
goog.require('reagent.impl.template');
goog.require('goog.string');
goog.require('goog.date.UtcDateTime');
/**
 * Converts obj to a string and truncates it to max-len chars if necessary.
 * When truncation is necessary, adds an elipsis to the end
 */
re_com.validate.left_string = (function re_com$validate$left_string(obj,max_len){
return goog.string.truncate([cljs.core.str.cljs$core$IFn$_invoke$arity$1(obj)].join(''),max_len);
});
/**
 * Sends a message to the DeV Tools console as an error. Returns false to indicate 'error' condition
 */
re_com.validate.log_error = (function re_com$validate$log_error(var_args){
var args__62127__auto__ = [];
var len__62120__auto___84497 = arguments.length;
var i__62121__auto___84498 = (0);
while(true){
if((i__62121__auto___84498 < len__62120__auto___84497)){
args__62127__auto__.push((arguments[i__62121__auto___84498]));

var G__84499 = (i__62121__auto___84498 + (1));
i__62121__auto___84498 = G__84499;
continue;
} else {
}
break;
}

var argseq__62128__auto__ = ((((0) < args__62127__auto__.length))?(new cljs.core.IndexedSeq(args__62127__auto__.slice((0)),(0),null)):null);
return re_com.validate.log_error.cljs$core$IFn$_invoke$arity$variadic(argseq__62128__auto__);
});

re_com.validate.log_error.cljs$core$IFn$_invoke$arity$variadic = (function (args){
console.error(cljs.core.apply.call(null,cljs.core.str,args));

return false;
});

re_com.validate.log_error.cljs$lang$maxFixedArity = (0);

re_com.validate.log_error.cljs$lang$applyTo = (function (seq84496){
return re_com.validate.log_error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq84496));
});

/**
 * Sends a message to the DeV Tools console as an warning. Returns true to indicate 'not and error' condition
 */
re_com.validate.log_warning = (function re_com$validate$log_warning(var_args){
var args__62127__auto__ = [];
var len__62120__auto___84501 = arguments.length;
var i__62121__auto___84502 = (0);
while(true){
if((i__62121__auto___84502 < len__62120__auto___84501)){
args__62127__auto__.push((arguments[i__62121__auto___84502]));

var G__84503 = (i__62121__auto___84502 + (1));
i__62121__auto___84502 = G__84503;
continue;
} else {
}
break;
}

var argseq__62128__auto__ = ((((0) < args__62127__auto__.length))?(new cljs.core.IndexedSeq(args__62127__auto__.slice((0)),(0),null)):null);
return re_com.validate.log_warning.cljs$core$IFn$_invoke$arity$variadic(argseq__62128__auto__);
});

re_com.validate.log_warning.cljs$core$IFn$_invoke$arity$variadic = (function (args){
console.warn(cljs.core.apply.call(null,cljs.core.str,args));

return true;
});

re_com.validate.log_warning.cljs$lang$maxFixedArity = (0);

re_com.validate.log_warning.cljs$lang$applyTo = (function (seq84500){
return re_com.validate.log_warning.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq84500));
});

re_com.validate.hash_map_with_name_keys = (function re_com$validate$hash_map_with_name_keys(v){
return cljs.core.zipmap.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"name","name",1843675177),v),v);
});
/**
 * Package up all the relevant data for validation purposes from the xxx-args-desc map into a new map
 */
re_com.validate.extract_arg_data = (function re_com$validate$extract_arg_data(args_desc){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"arg-names","arg-names",1632831252),cljs.core.set.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"name","name",1843675177),args_desc)),new cljs.core.Keyword(null,"required-args","required-args",1225806985),cljs.core.set.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.filter.call(null,new cljs.core.Keyword(null,"required","required",1807647006),args_desc))),new cljs.core.Keyword(null,"validated-args","validated-args",278814533),re_com.validate.hash_map_with_name_keys.call(null,cljs.core.vec.call(null,cljs.core.filter.call(null,new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),args_desc)))], null);
});
/**
 * returns true if every passed-args is value. Otherwise log the problem and return false
 */
re_com.validate.arg_names_valid_QMARK_ = (function re_com$validate$arg_names_valid_QMARK_(defined_args,passed_args){
var or__60899__auto__ = clojure.set.superset_QMARK_.call(null,defined_args,passed_args);
if(cljs.core.truth_(or__60899__auto__)){
return or__60899__auto__;
} else {
var missing_args = cljs.core.remove.call(null,defined_args,passed_args);
return re_com.validate.log_error.call(null,"Invalid argument(s): ",missing_args);
}
});
/**
 * returns true if all the required args are supplied. Otherwise log the error and return false
 */
re_com.validate.required_args_passed_QMARK_ = (function re_com$validate$required_args_passed_QMARK_(required_args,passed_args){
var or__60899__auto__ = clojure.set.superset_QMARK_.call(null,passed_args,required_args);
if(cljs.core.truth_(or__60899__auto__)){
return or__60899__auto__;
} else {
var missing_args = cljs.core.remove.call(null,passed_args,required_args);
return re_com.validate.log_error.call(null,"Missing required argument(s): ",missing_args);
}
});
/**
 * Gathers together a list of args that have a validator and...
 * returns true if all argument values are valid OR are just warnings (log warning to the console).
 * Otherwise log an error to the console and return false.
 * Validation functions can return:
 *       - true:   validation success
 *       - false:  validation failed - use standard error message
 *       - map:    validation failed - includes two keys:
 *                                       :status  - :error:   log to console as error
 *                                                  :warning: log to console as warning
 *                                       :message - use this string in the message of the warning/error
 */
re_com.validate.validate_fns_pass_QMARK_ = (function re_com$validate$validate_fns_pass_QMARK_(args_with_validators,passed_args,component_name){
var validate_arg = (function (p__84508){
var vec__84509 = p__84508;
var _ = cljs.core.nth.call(null,vec__84509,(0),null);
var v_arg_def = cljs.core.nth.call(null,vec__84509,(1),null);
var arg_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(v_arg_def);
var arg_val = re_com.util.deref_or_value.call(null,arg_name.call(null,passed_args));
var required_QMARK_ = new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(v_arg_def);
var validate_result = new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944).cljs$core$IFn$_invoke$arity$1(v_arg_def).call(null,arg_val);
var log_msg_base = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Validation failed for argument '"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name),cljs.core.str.cljs$core$IFn$_invoke$arity$1("' in component '"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_name),cljs.core.str.cljs$core$IFn$_invoke$arity$1("': ")].join('');
var comp_path = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(reagent.core.component_path.call(null,reagent.core.current_component.call(null)))].join('');
var warning_QMARK_ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(validate_result),new cljs.core.Keyword(null,"warning","warning",-1685650671));
if((validate_result === true) || (((arg_val == null)) && (cljs.core.not.call(null,required_QMARK_)))){
return true;
} else {
if(validate_result === false){
return re_com.validate.log_error.call(null,log_msg_base,"Expected '",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(v_arg_def),"'. Got '",(((arg_val == null))?"nil":re_com.validate.left_string.call(null,arg_val,(60))),"'",comp_path);
} else {
if(cljs.core.map_QMARK_.call(null,validate_result)){
return ((warning_QMARK_)?re_com.validate.log_warning:re_com.validate.log_error).call(null,log_msg_base,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(validate_result),((warning_QMARK_)?comp_path:null));
} else {
return re_com.validate.log_error.call(null,"Invalid return from validate-fn: ",validate_result,comp_path);

}
}
}
});
return cljs.core.every_QMARK_.call(null,cljs.core.true_QMARK_,cljs.core.map.call(null,validate_arg,cljs.core.select_keys.call(null,args_with_validators,cljs.core.vec.call(null,cljs.core.keys.call(null,passed_args)))));
});
/**
 * Calls three validation tests:
 *  - Are arg names valid?
 *  - Have all required args been passed?
 *  - Specific valiadation function calls to check arg values if specified
 * If they all pass, returns true.
 * Normally used for a call to the {:pre...} at the beginning of a function
 */
re_com.validate.validate_args = (function re_com$validate$validate_args(var_args){
var args__62127__auto__ = [];
var len__62120__auto___84515 = arguments.length;
var i__62121__auto___84516 = (0);
while(true){
if((i__62121__auto___84516 < len__62120__auto___84515)){
args__62127__auto__.push((arguments[i__62121__auto___84516]));

var G__84517 = (i__62121__auto___84516 + (1));
i__62121__auto___84516 = G__84517;
continue;
} else {
}
break;
}

var argseq__62128__auto__ = ((((2) < args__62127__auto__.length))?(new cljs.core.IndexedSeq(args__62127__auto__.slice((2)),(0),null)):null);
return re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__62128__auto__);
});

re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic = (function (arg_defs,passed_args,component_name){
if(cljs.core.not.call(null,goog.DEBUG)){
return true;
} else {
var passed_arg_keys = cljs.core.set.call(null,cljs.core.keys.call(null,passed_args));
var and__60887__auto__ = re_com.validate.arg_names_valid_QMARK_.call(null,new cljs.core.Keyword(null,"arg-names","arg-names",1632831252).cljs$core$IFn$_invoke$arity$1(arg_defs),passed_arg_keys);
if(cljs.core.truth_(and__60887__auto__)){
var and__60887__auto____$1 = re_com.validate.required_args_passed_QMARK_.call(null,new cljs.core.Keyword(null,"required-args","required-args",1225806985).cljs$core$IFn$_invoke$arity$1(arg_defs),passed_arg_keys);
if(cljs.core.truth_(and__60887__auto____$1)){
return re_com.validate.validate_fns_pass_QMARK_.call(null,new cljs.core.Keyword(null,"validated-args","validated-args",278814533).cljs$core$IFn$_invoke$arity$1(arg_defs),passed_args,cljs.core.first.call(null,component_name));
} else {
return and__60887__auto____$1;
}
} else {
return and__60887__auto__;
}
}
});

re_com.validate.validate_args.cljs$lang$maxFixedArity = (2);

re_com.validate.validate_args.cljs$lang$applyTo = (function (seq84512){
var G__84513 = cljs.core.first.call(null,seq84512);
var seq84512__$1 = cljs.core.next.call(null,seq84512);
var G__84514 = cljs.core.first.call(null,seq84512__$1);
var seq84512__$2 = cljs.core.next.call(null,seq84512__$1);
return re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(G__84513,G__84514,seq84512__$2);
});

re_com.validate.justify_options = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"between","between",1131099276),new cljs.core.Keyword(null,"around","around",-265975553)], null);
re_com.validate.align_options = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"baseline","baseline",1151033280),new cljs.core.Keyword(null,"stretch","stretch",-1888837380)], null);
re_com.validate.scroll_options = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"off","off",606440789),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.Keyword(null,"spill","spill",-1725816817)], null);
re_com.validate.alert_types = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"warning","warning",-1685650671),new cljs.core.Keyword(null,"danger","danger",-624338030)], null);
re_com.validate.button_sizes = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"regular","regular",-1153375582),new cljs.core.Keyword(null,"smaller","smaller",-1619801498),new cljs.core.Keyword(null,"larger","larger",1304935444)], null);
re_com.validate.throbber_sizes = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"regular","regular",-1153375582),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"large","large",-196820544)], null);
re_com.validate.input_status_types = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warning","warning",-1685650671),new cljs.core.Keyword(null,"error","error",-978969032)], null);
re_com.validate.popover_status_types = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warning","warning",-1685650671),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"info","info",-317069002)], null);
re_com.validate.title_levels = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level1","level1",813811133),new cljs.core.Keyword(null,"level2","level2",-2044031830),new cljs.core.Keyword(null,"level3","level3",1192475079),new cljs.core.Keyword(null,"level4","level4",1467985519)], null);
re_com.validate.position_options = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"above-left","above-left",-1593975744),new cljs.core.Keyword(null,"above-center","above-center",1960103104),new cljs.core.Keyword(null,"above-right","above-right",791010942),new cljs.core.Keyword(null,"below-left","below-left",1233934732),new cljs.core.Keyword(null,"below-center","below-center",-2126885397),new cljs.core.Keyword(null,"below-right","below-right",1598040732),new cljs.core.Keyword(null,"left-above","left-above",1205957481),new cljs.core.Keyword(null,"left-center","left-center",374119202),new cljs.core.Keyword(null,"left-below","left-below",1290111351),new cljs.core.Keyword(null,"right-above","right-above",832458485),new cljs.core.Keyword(null,"right-center","right-center",2147253074),new cljs.core.Keyword(null,"right-below","right-below",586981827)], null);
/**
 * Validates the passed argument against the expected set
 */
re_com.validate.validate_arg_against_set = (function re_com$validate$validate_arg_against_set(arg,arg_name,valid_set){
var arg__$1 = re_com.util.deref_or_value.call(null,arg);
var or__60899__auto__ = cljs.core.not_EQ_.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([arg__$1]),valid_set),null);
if(or__60899__auto__){
return or__60899__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name),cljs.core.str.cljs$core$IFn$_invoke$arity$1(". Expected one of "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(valid_set),cljs.core.str.cljs$core$IFn$_invoke$arity$1(". Got '"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(re_com.validate.left_string.call(null,arg__$1,(40))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("'")].join('');
}
});
re_com.validate.justify_style_QMARK_ = (function re_com$validate$justify_style_QMARK_(arg){
return re_com.validate.validate_arg_against_set.call(null,arg,":justify-style",re_com.validate.justify_options);
});
re_com.validate.align_style_QMARK_ = (function re_com$validate$align_style_QMARK_(arg){
return re_com.validate.validate_arg_against_set.call(null,arg,":align-style",re_com.validate.align_options);
});
re_com.validate.scroll_style_QMARK_ = (function re_com$validate$scroll_style_QMARK_(arg){
return re_com.validate.validate_arg_against_set.call(null,arg,":scroll-style",re_com.validate.scroll_options);
});
re_com.validate.alert_type_QMARK_ = (function re_com$validate$alert_type_QMARK_(arg){
return re_com.validate.validate_arg_against_set.call(null,arg,":alert-type",re_com.validate.alert_types);
});
re_com.validate.button_size_QMARK_ = (function re_com$validate$button_size_QMARK_(arg){
return re_com.validate.validate_arg_against_set.call(null,arg,":size",re_com.validate.button_sizes);
});
re_com.validate.throbber_size_QMARK_ = (function re_com$validate$throbber_size_QMARK_(arg){
return re_com.validate.validate_arg_against_set.call(null,arg,":size",re_com.validate.throbber_sizes);
});
re_com.validate.input_status_type_QMARK_ = (function re_com$validate$input_status_type_QMARK_(arg){
return re_com.validate.validate_arg_against_set.call(null,arg,":status",re_com.validate.input_status_types);
});
re_com.validate.popover_status_type_QMARK_ = (function re_com$validate$popover_status_type_QMARK_(arg){
return re_com.validate.validate_arg_against_set.call(null,arg,":status",re_com.validate.popover_status_types);
});
re_com.validate.title_level_type_QMARK_ = (function re_com$validate$title_level_type_QMARK_(arg){
return re_com.validate.validate_arg_against_set.call(null,arg,":level",re_com.validate.title_levels);
});
re_com.validate.position_QMARK_ = (function re_com$validate$position_QMARK_(arg){
return re_com.validate.validate_arg_against_set.call(null,arg,":position",re_com.validate.position_options);
});
/**
 * Given a vector or list of codes, create a [:span] hiccup vector containing a comma separated list of the codes
 */
re_com.validate.make_code_list = (function re_com$validate$make_code_list(codes){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)], null),cljs.core.interpose.call(null,", ",cljs.core.map.call(null,(function (p1__84518_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"code","code",1586293142),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__84518_SHARP_)].join('')],null));
}),codes)));
});
re_com.validate.justify_options_list = re_com.validate.make_code_list.call(null,re_com.validate.justify_options);
re_com.validate.align_options_list = re_com.validate.make_code_list.call(null,re_com.validate.align_options);
re_com.validate.scroll_options_list = re_com.validate.make_code_list.call(null,re_com.validate.scroll_options);
re_com.validate.alert_types_list = re_com.validate.make_code_list.call(null,re_com.validate.alert_types);
re_com.validate.button_sizes_list = re_com.validate.make_code_list.call(null,re_com.validate.button_sizes);
re_com.validate.throbber_sizes_list = re_com.validate.make_code_list.call(null,re_com.validate.throbber_sizes);
re_com.validate.input_status_types_list = re_com.validate.make_code_list.call(null,re_com.validate.input_status_types);
re_com.validate.popover_status_types_list = re_com.validate.make_code_list.call(null,re_com.validate.popover_status_types);
re_com.validate.title_levels_list = re_com.validate.make_code_list.call(null,re_com.validate.title_levels);
re_com.validate.position_options_list = re_com.validate.make_code_list.call(null,re_com.validate.position_options);
re_com.validate.html_attrs = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 210, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"on-key-down-capture","on-key-down-capture",-1395197888),null,new cljs.core.Keyword(null,"role","role",-736691072),null,new cljs.core.Keyword(null,"rel","rel",1378823488),null,new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),null,new cljs.core.Keyword(null,"on-drop-capture","on-drop-capture",1615153632),null,new cljs.core.Keyword(null,"on-drag-exit","on-drag-exit",2762272),null,new cljs.core.Keyword(null,"spread-method","spread-method",-1720392096),null,new cljs.core.Keyword(null,"auto-complete","auto-complete",244958848),null,new cljs.core.Keyword(null,"open","open",-1763596448),null,new cljs.core.Keyword(null,"tab-index","tab-index",895755393),null,new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),null,new cljs.core.Keyword(null,"async","async",1050769601),null,new cljs.core.Keyword(null,"on-input-capture","on-input-capture",2039664929),null,new cljs.core.Keyword(null,"on-key-press-capture","on-key-press-capture",1439709729),null,new cljs.core.Keyword(null,"min","min",444991522),null,new cljs.core.Keyword(null,"on-blur-capture","on-blur-capture",2031809666),null,new cljs.core.Keyword(null,"gradient-transform","gradient-transform",-1737815870),null,new cljs.core.Keyword(null,"radio-group","radio-group",1791520002),null,new cljs.core.Keyword(null,"sizes","sizes",-273528126),null,new cljs.core.Keyword(null,"rx","rx",1627208482),null,new cljs.core.Keyword(null,"r","r",-471384190),null,new cljs.core.Keyword(null,"on-touch-cancel","on-touch-cancel",1125389250),null,new cljs.core.Keyword(null,"on-key-press","on-key-press",-399563677),null,new cljs.core.Keyword(null,"max-length","max-length",-254826109),null,new cljs.core.Keyword(null,"stroke","stroke",1741823555),null,new cljs.core.Keyword(null,"stop-color","stop-color",316173955),null,new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),null,new cljs.core.Keyword(null,"on-drag-over-capture","on-drag-over-capture",552548804),null,new cljs.core.Keyword(null,"transform","transform",1381301764),null,new cljs.core.Keyword(null,"selected","selected",574897764),null,new cljs.core.Keyword(null,"dx","dx",-381796732),null,new cljs.core.Keyword(null,"date-time","date-time",177938180),null,new cljs.core.Keyword(null,"on-double-click-capture","on-double-click-capture",-28858331),null,new cljs.core.Keyword(null,"preserve-aspect-ratio","preserve-aspect-ratio",-1746347963),null,new cljs.core.Keyword(null,"on-scroll","on-scroll",1590848677),null,new cljs.core.Keyword(null,"dir","dir",1734754661),null,new cljs.core.Keyword(null,"muted","muted",1275109029),null,new cljs.core.Keyword(null,"seamless","seamless",-1120344251),null,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),null,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),null,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),null,new cljs.core.Keyword(null,"alt","alt",-3214426),null,new cljs.core.Keyword(null,"cell-padding","cell-padding",978029542),null,new cljs.core.Keyword(null,"offset","offset",296498311),null,new cljs.core.Keyword(null,"frame-border","frame-border",-1868748185),null,new cljs.core.Keyword(null,"content-editable","content-editable",636764967),null,new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),null,new cljs.core.Keyword(null,"coords","coords",-599429112),null,new cljs.core.Keyword(null,"method","method",55703592),null,new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"margin-width","margin-width",-1252353816),null,new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),null,new cljs.core.Keyword(null,"access-key","access-key",914744840),null,new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"on-mouse-enter-capture","on-mouse-enter-capture",-862465943),null,new cljs.core.Keyword(null,"on-mouse-down-capture","on-mouse-down-capture",1176660233),null,new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),null,new cljs.core.Keyword(null,"form-action","form-action",-1436001591),null,new cljs.core.Keyword(null,"fill","fill",883462889),null,new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"on-submit-capture","on-submit-capture",2089939562),null,new cljs.core.Keyword(null,"href-lang","href-lang",1832618890),null,new cljs.core.Keyword(null,"y1","y1",589123466),null,new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),null,new cljs.core.Keyword(null,"dy","dy",1719547243),null,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),null,new cljs.core.Keyword(null,"defer","defer",-40276405),null,new cljs.core.Keyword(null,"form-target","form-target",1549802860),null,new cljs.core.Keyword(null,"on-wheel","on-wheel",-1971630708),null,new cljs.core.Keyword(null,"type","type",1174270348),null,new cljs.core.Keyword(null,"controls","controls",1340701452),null,new cljs.core.Keyword(null,"manifest","manifest",-1386791956),null,new cljs.core.Keyword(null,"src","src",-1651076051),null,new cljs.core.Keyword(null,"points","points",-1486596883),null,new cljs.core.Keyword(null,"on-wheel-capture","on-wheel-capture",-950568595),null,new cljs.core.Keyword(null,"view-box","view-box",-1792199155),null,new cljs.core.Keyword(null,"form-no-validate","form-no-validate",-1832208755),null,new cljs.core.Keyword(null,"icon","icon",1679606541),null,new cljs.core.Keyword(null,"on-drag","on-drag",-69159091),null,new cljs.core.Keyword(null,"multiple","multiple",1244445549),null,new cljs.core.Keyword(null,"on-paste-capture","on-paste-capture",664699950),null,new cljs.core.Keyword(null,"scope","scope",-439358418),null,new cljs.core.Keyword(null,"sandbox","sandbox",-54636402),null,new cljs.core.Keyword(null,"on-mouse-leave-capture","on-mouse-leave-capture",-251526962),null,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),null,new cljs.core.Keyword(null,"on-click","on-click",1632826543),null,new cljs.core.Keyword(null,"stop-opacity","stop-opacity",-2018003729),null,new cljs.core.Keyword(null,"size","size",1098693007),null,new cljs.core.Keyword(null,"use-map","use-map",705810863),null,new cljs.core.Keyword(null,"title","title",636505583),null,new cljs.core.Keyword(null,"allow-full-screen","allow-full-screen",-1219396017),null,new cljs.core.Keyword(null,"on-mouse-out-capture","on-mouse-out-capture",-1317872881),null,new cljs.core.Keyword(null,"loop","loop",-395552849),null,new cljs.core.Keyword(null,"on-paste","on-paste",-50859856),null,new cljs.core.Keyword(null,"html-for","html-for",594503920),null,new cljs.core.Keyword(null,"lang","lang",-1819677104),null,new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),null,new cljs.core.Keyword(null,"src-set","src-set",1389408880),null,new cljs.core.Keyword(null,"rows","rows",850049680),null,new cljs.core.Keyword(null,"on-copy-capture","on-copy-capture",-988406096),null,new cljs.core.Keyword(null,"on-key-up","on-key-up",884441808),null,new cljs.core.Keyword(null,"on-cut","on-cut",-1019124687),null,new cljs.core.Keyword(null,"enc-type","enc-type",-1746291599),null,new cljs.core.Keyword(null,"http-equiv","http-equiv",-433976463),null,new cljs.core.Keyword(null,"cols","cols",-1914801295),null,new cljs.core.Keyword(null,"scrolling","scrolling",349011090),null,new cljs.core.Keyword(null,"preload","preload",1646824722),null,new cljs.core.Keyword(null,"on-drag-leave","on-drag-leave",-373180078),null,new cljs.core.Keyword(null,"marker-start","marker-start",-56273582),null,new cljs.core.Keyword(null,"on-touch-cancel-capture","on-touch-cancel-capture",282949330),null,new cljs.core.Keyword(null,"poster","poster",-1616913550),null,new cljs.core.Keyword(null,"on-drag-start","on-drag-start",-47712205),null,new cljs.core.Keyword(null,"on-touch-move-capture","on-touch-move-capture",2112992339),null,new cljs.core.Keyword(null,"draggable","draggable",1676206163),null,new cljs.core.Keyword(null,"auto-play","auto-play",-645319501),null,new cljs.core.Keyword(null,"on-scroll-capture","on-scroll-capture",537214227),null,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),null,new cljs.core.Keyword(null,"list","list",765357683),null,new cljs.core.Keyword(null,"on-mouse-up-capture","on-mouse-up-capture",-1098004557),null,new cljs.core.Keyword(null,"hidden","hidden",-312506092),null,new cljs.core.Keyword(null,"max","max",61366548),null,new cljs.core.Keyword(null,"media-group","media-group",1155749300),null,new cljs.core.Keyword(null,"opacity","opacity",397153780),null,new cljs.core.Keyword(null,"on-double-click","on-double-click",1434856980),null,new cljs.core.Keyword(null,"cx","cx",1272694324),null,new cljs.core.Keyword(null,"label","label",1718410804),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"accept-charset","accept-charset",-1667839372),null,new cljs.core.Keyword(null,"on-key-up-capture","on-key-up-capture",798383732),null,new cljs.core.Keyword(null,"wmode","wmode",661021556),null,new cljs.core.Keyword(null,"no-validate","no-validate",72997812),null,new cljs.core.Keyword(null,"cy","cy",755331060),null,new cljs.core.Keyword(null,"on-drag-capture","on-drag-capture",1336556597),null,new cljs.core.Keyword(null,"char-set","char-set",-155556619),null,new cljs.core.Keyword(null,"checked","checked",-50955819),null,new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),null,new cljs.core.Keyword(null,"on-drag-enter","on-drag-enter",-1692112235),null,new cljs.core.Keyword(null,"on-mouse-move","on-mouse-move",-1386320874),null,new cljs.core.Keyword(null,"shape","shape",1190694006),null,new cljs.core.Keyword(null,"cross-origin","cross-origin",-2100195210),null,new cljs.core.Keyword(null,"col-span","col-span",-232603210),null,new cljs.core.Keyword(null,"on-mouse-move-capture","on-mouse-move-capture",-528714122),null,new cljs.core.Keyword(null,"on-copy","on-copy",-227435882),null,new cljs.core.Keyword(null,"on-drag-enter-capture","on-drag-enter-capture",955704982),null,new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),null,new cljs.core.Keyword(null,"on-touch-move","on-touch-move",1587118423),null,new cljs.core.Keyword(null,"on-touch-end-capture","on-touch-end-capture",-635667049),null,new cljs.core.Keyword(null,"src-doc","src-doc",-543683145),null,new cljs.core.Keyword(null,"on-drag-start-capture","on-drag-start-capture",-198934889),null,new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),null,new cljs.core.Keyword(null,"on-touch-start-capture","on-touch-start-capture",126030904),null,new cljs.core.Keyword(null,"on-click-capture","on-click-capture",-1777989448),null,new cljs.core.Keyword(null,"on-cut-capture","on-cut-capture",1724168408),null,new cljs.core.Keyword(null,"d","d",1972142424),null,new cljs.core.Keyword(null,"action","action",-811238024),null,new cljs.core.Keyword(null,"on-mouse-up","on-mouse-up",-1340533320),null,new cljs.core.Keyword(null,"cell-spacing","cell-spacing",769666488),null,new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),null,new cljs.core.Keyword(null,"spell-check","spell-check",-2060352968),null,new cljs.core.Keyword(null,"class-name","class-name",945142584),null,new cljs.core.Keyword(null,"fy","fy",550788984),null,new cljs.core.Keyword(null,"on-drag-over","on-drag-over",-93410408),null,new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),null,new cljs.core.Keyword(null,"x","x",2099068185),null,new cljs.core.Keyword(null,"pattern-content-units","pattern-content-units",-776686279),null,new cljs.core.Keyword(null,"x1","x1",-1863922247),null,new cljs.core.Keyword(null,"form","form",-1624062471),null,new cljs.core.Keyword(null,"target","target",253001721),null,new cljs.core.Keyword(null,"read-only","read-only",-191706886),null,new cljs.core.Keyword(null,"on-input","on-input",-267523366),null,new cljs.core.Keyword(null,"version","version",425292698),null,new cljs.core.Keyword(null,"y2","y2",-718691301),null,new cljs.core.Keyword(null,"form-method","form-method",1197598843),null,new cljs.core.Keyword(null,"on-change","on-change",-732046149),null,new cljs.core.Keyword(null,"on-touch-start","on-touch-start",447239419),null,new cljs.core.Keyword(null,"allow-transparency","allow-transparency",-912588389),null,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),null,new cljs.core.Keyword(null,"marker-mid","marker-mid",-505338277),null,new cljs.core.Keyword(null,"fx","fx",-1237829572),null,new cljs.core.Keyword(null,"margin-height","margin-height",-711398340),null,new cljs.core.Keyword(null,"download","download",-300081668),null,new cljs.core.Keyword(null,"on-mouse-over-capture","on-mouse-over-capture",-19370468),null,new cljs.core.Keyword(null,"step","step",1288888124),null,new cljs.core.Keyword(null,"media","media",-1066138403),null,new cljs.core.Keyword(null,"on-change-capture","on-change-capture",-862104355),null,new cljs.core.Keyword(null,"on-focus-capture","on-focus-capture",1657084317),null,new cljs.core.Keyword(null,"x2","x2",-1362513475),null,new cljs.core.Keyword(null,"ry","ry",-334598563),null,new cljs.core.Keyword(null,"gradient-units","gradient-units",-1502403779),null,new cljs.core.Keyword(null,"on-touch-end","on-touch-end",1515667389),null,new cljs.core.Keyword(null,"href","href",-793805698),null,new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),null,new cljs.core.Keyword(null,"required","required",1807647006),null,new cljs.core.Keyword(null,"pattern-units","pattern-units",-1273751842),null,new cljs.core.Keyword(null,"font-family","font-family",-667419874),null,new cljs.core.Keyword(null,"on-drag-exit-capture","on-drag-exit-capture",1830296414),null,new cljs.core.Keyword(null,"form-enc-type","form-enc-type",-1649098754),null,new cljs.core.Keyword(null,"height","height",1025178622),null,new cljs.core.Keyword(null,"marker-end","marker-end",341488703),null,new cljs.core.Keyword(null,"on-drag-end-capture","on-drag-end-capture",36069439),null,new cljs.core.Keyword(null,"pattern","pattern",242135423),null,new cljs.core.Keyword(null,"row-span","row-span",-365554241),null,new cljs.core.Keyword(null,"accept","accept",1874130431),null,new cljs.core.Keyword(null,"span","span",1394872991),null,new cljs.core.Keyword(null,"on-drag-leave-capture","on-drag-leave-capture",-1751732545),null,new cljs.core.Keyword(null,"on-drag-end","on-drag-end",520272671),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null);
re_com.validate.extension_attrs = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"aria","aria",1737868339),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null);
re_com.validate.css_styles = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 311, [new cljs.core.Keyword(null,"transform-style","transform-style",-1887177696),null,new cljs.core.Keyword(null,"border-image","border-image",-230471616),null,new cljs.core.Keyword(null,"mm","mm",-1652850560),null,new cljs.core.Keyword(null,"border-image-slice","border-image-slice",-4957056),null,new cljs.core.Keyword(null,"border-style","border-style",-485574304),null,new cljs.core.Keyword(null,"line-height","line-height",1870784992),null,new cljs.core.Keyword(null,"text-rendering","text-rendering",872518208),null,new cljs.core.Keyword(null,"min-width","min-width",1926193728),null,new cljs.core.Keyword(null,"font-style","font-style",-773672352),null,new cljs.core.Keyword(null,"block-size","block-size",-1062272384),null,new cljs.core.Keyword(null,"inline-size","inline-size",-2060171616),null,new cljs.core.Keyword(null,"animation-delay","animation-delay",-488570176),null,new cljs.core.Keyword(null,"vmin","vmin",446546816),null,new cljs.core.Keyword(null,"transition-delay","transition-delay",-235557887),null,new cljs.core.Keyword(null,"mask","mask",-585748447),null,new cljs.core.Keyword(null,"image-rendering","image-rendering",770251905),null,new cljs.core.Keyword(null,"image-orientation","image-orientation",614962369),null,new cljs.core.Keyword(null,"border-top-style","border-top-style",-668961567),null,new cljs.core.Keyword(null,"box-decoration-break","box-decoration-break",-566185727),null,new cljs.core.Keyword(null,"mask-type","mask-type",-1876682271),null,new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),null,new cljs.core.Keyword(null,"font-variant-numeric","font-variant-numeric",-749791),null,new cljs.core.Keyword(null,"font-stretch","font-stretch",-1432788830),null,new cljs.core.Keyword(null,"text-decoration-style","text-decoration-style",1254269122),null,new cljs.core.Keyword(null,"-webkit-flex-basis","-webkit-flex-basis",1359112386),null,new cljs.core.Keyword(null,"border-block-end","border-block-end",-2082909662),null,new cljs.core.Keyword(null,"align-items","align-items",-267946462),null,new cljs.core.Keyword(null,"inherit","inherit",-1840815422),null,new cljs.core.Keyword(null,"padding-inline-end","padding-inline-end",-647416958),null,new cljs.core.Keyword(null,"object-fit","object-fit",-429593694),null,new cljs.core.Keyword(null,"text-overflow","text-overflow",-1022366814),null,new cljs.core.Keyword(null,"will-change","will-change",-152752061),null,new cljs.core.Keyword(null,"outline-offset","outline-offset",1155254595),null,new cljs.core.Keyword(null,"align-content","align-content",-990200349),null,new cljs.core.Keyword(null,"grid-column-end","grid-column-end",592662211),null,new cljs.core.Keyword(null,"pt","pt",556460867),null,new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),null,new cljs.core.Keyword(null,"clip","clip",830998499),null,new cljs.core.Keyword(null,"padding-block-start","padding-block-start",1054404612),null,new cljs.core.Keyword(null,"max-height","max-height",-612563804),null,new cljs.core.Keyword(null,"offset-block-end","offset-block-end",1207635172),null,new cljs.core.Keyword(null,"isolation","isolation",-1230029596),null,new cljs.core.Keyword(null,"border-right","border-right",-668932860),null,new cljs.core.Keyword(null,"text-transform","text-transform",1685000676),null,new cljs.core.Keyword(null,"transform","transform",1381301764),null,new cljs.core.Keyword(null,"border-inline-end-style","border-inline-end-style",60342820),null,new cljs.core.Keyword(null,"border-bottom-style","border-bottom-style",925668932),null,new cljs.core.Keyword(null,"grid-template","grid-template",-268181948),null,new cljs.core.Keyword(null,"animation","animation",-1248293244),null,new cljs.core.Keyword(null,"column-count","column-count",1235131236),null,new cljs.core.Keyword(null,"-webkit-align-content","-webkit-align-content",246986596),null,new cljs.core.Keyword(null,"color","color",1011675173),null,new cljs.core.Keyword(null,"list-style-position","list-style-position",-335344571),null,new cljs.core.Keyword(null,"margin-inline-end","margin-inline-end",-1696808891),null,new cljs.core.Keyword(null,"-webkit-align-self","-webkit-align-self",-34524059),null,new cljs.core.Keyword(null,"text-align","text-align",1786091845),null,new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),null,new cljs.core.Keyword(null,"tab-size","tab-size",-1265790523),null,new cljs.core.Keyword(null,"min-height","min-height",398480837),null,new cljs.core.Keyword(null,"font-language-override","font-language-override",-1059219899),null,new cljs.core.Keyword(null,"page-break-inside","page-break-inside",-1878278555),null,new cljs.core.Keyword(null,"ruby-merge","ruby-merge",1832161925),null,new cljs.core.Keyword(null,"grid-auto-position","grid-auto-position",-1160742267),null,new cljs.core.Keyword(null,"border-left-width","border-left-width",2037218085),null,new cljs.core.Keyword(null,"-ms-user-select","-ms-user-select",953709445),null,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),null,new cljs.core.Keyword(null,"line-break","line-break",908969510),null,new cljs.core.Keyword(null,"outline-style","outline-style",227043878),null,new cljs.core.Keyword(null,"white-space","white-space",-707351930),null,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),null,new cljs.core.Keyword(null,"transition","transition",765692007),null,new cljs.core.Keyword(null,"animation-direction","animation-direction",-362912441),null,new cljs.core.Keyword(null,"top","top",-1856271961),null,new cljs.core.Keyword(null,"font-variant","font-variant",1251503591),null,new cljs.core.Keyword(null,"writing-mode","writing-mode",-1707110905),null,new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),null,new cljs.core.Keyword(null,"offset-inline-end","offset-inline-end",1318051431),null,new cljs.core.Keyword(null,"-webkit-flex-grow","-webkit-flex-grow",949294887),null,new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"max-block-size","max-block-size",-1751985816),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"border-right-style","border-right-style",-1606013368),null,new cljs.core.Keyword(null,"border-top-right-radius","border-top-right-radius",1678770792),null,new cljs.core.Keyword(null,"font-variant-ligatures","font-variant-ligatures",-181253464),null,new cljs.core.Keyword(null,"overflow","overflow",2058931880),null,new cljs.core.Keyword(null,"grid","grid",402978600),null,new cljs.core.Keyword(null,"columns","columns",1998437288),null,new cljs.core.Keyword(null,"shape-outside","shape-outside",-830371896),null,new cljs.core.Keyword(null,"-moz-user-select","-moz-user-select",-342302744),null,new cljs.core.Keyword(null,"padding-block-end","padding-block-end",923602025),null,new cljs.core.Keyword(null,"backface-visibility","backface-visibility",-367721111),null,new cljs.core.Keyword(null,"mix-blend-mode","mix-blend-mode",-1150163607),null,new cljs.core.Keyword(null,"min-inline-size","min-inline-size",-2050841943),null,new cljs.core.Keyword(null,"hyphens","hyphens",2113533609),null,new cljs.core.Keyword(null,"break-inside","break-inside",310021897),null,new cljs.core.Keyword(null,"border-block-end-width","border-block-end-width",-1045470455),null,new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),null,new cljs.core.Keyword(null,"text-decoration-line","text-decoration-line",1905751849),null,new cljs.core.Keyword(null,"border-left-color","border-left-color",-1166146583),null,new cljs.core.Keyword(null,"list-style","list-style",-809622358),null,new cljs.core.Keyword(null,"-webkit-flex-flow","-webkit-flex-flow",667076810),null,new cljs.core.Keyword(null,"-webkit-flex-wrap","-webkit-flex-wrap",-628183766),null,new cljs.core.Keyword(null,"margin-block-end","margin-block-end",-1287470806),null,new cljs.core.Keyword(null,"list-style-type","list-style-type",-1703248598),null,new cljs.core.Keyword(null,"-webkit-user-select","-webkit-user-select",-651687510),null,new cljs.core.Keyword(null,"background-color","background-color",570434026),null,new cljs.core.Keyword(null,"overflow-wrap","overflow-wrap",-60289494),null,new cljs.core.Keyword(null,"word-wrap","word-wrap",-1700975926),null,new cljs.core.Keyword(null,"margin-top","margin-top",392161226),null,new cljs.core.Keyword(null,"-webkit-flex","-webkit-flex",-1736517621),null,new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),null,new cljs.core.Keyword(null,"-webkit-justify-content","-webkit-justify-content",205818059),null,new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"px","px",281329899),null,new cljs.core.Keyword(null,"background","background",-863952629),null,new cljs.core.Keyword(null,"hz","hz",-1450739349),null,new cljs.core.Keyword(null,"page-break-after","page-break-after",1723909515),null,new cljs.core.Keyword(null,"background-blend-mode","background-blend-mode",-1923706293),null,new cljs.core.Keyword(null,"rem","rem",-976484757),null,new cljs.core.Keyword(null,"em","em",707813035),null,new cljs.core.Keyword(null,"font-feature-settings","font-feature-settings",-1311751381),null,new cljs.core.Keyword(null,"dppx","dppx",1920508843),null,new cljs.core.Keyword(null,"grid-auto-rows","grid-auto-rows",-113194069),null,new cljs.core.Keyword(null,"background-attachment","background-attachment",-885303381),null,new cljs.core.Keyword(null,"flex-wrap","flex-wrap",455413707),null,new cljs.core.Keyword(null,"grid-template-rows","grid-template-rows",-372292629),null,new cljs.core.Keyword(null,"grid-row-start","grid-row-start",-1827627988),null,new cljs.core.Keyword(null,"dpcm","dpcm",-1187601236),null,new cljs.core.Keyword(null,"grid-auto-flow","grid-auto-flow",-1754873684),null,new cljs.core.Keyword(null,"cursor","cursor",1011937484),null,new cljs.core.Keyword(null,"border-right-width","border-right-width",750273868),null,new cljs.core.Keyword(null,"border-inline-start-width","border-inline-start-width",874415532),null,new cljs.core.Keyword(null,"flex","flex",-1425124628),null,new cljs.core.Keyword(null,"border-inline-end-color","border-inline-end-color",144511980),null,new cljs.core.Keyword(null,"ruby-position","ruby-position",-1367543795),null,new cljs.core.Keyword(null,"pc","pc",512913453),null,new cljs.core.Keyword(null,"text-orientation","text-orientation",561880685),null,new cljs.core.Keyword(null,"border-block-start-style","border-block-start-style",255834733),null,new cljs.core.Keyword(null,"list-style-image","list-style-image",-1093077267),null,new cljs.core.Keyword(null,"max-width","max-width",-1939924051),null,new cljs.core.Keyword(null,"border-bottom-left-radius","border-bottom-left-radius",-76446610),null,new cljs.core.Keyword(null,"text-combine-upright","text-combine-upright",1934643374),null,new cljs.core.Keyword(null,"vh","vh",79552846),null,new cljs.core.Keyword(null,"ime-mode","ime-mode",1418620270),null,new cljs.core.Keyword(null,"all","all",892129742),null,new cljs.core.Keyword(null,"border-image-source","border-image-source",1924962862),null,new cljs.core.Keyword(null,"outline-width","outline-width",-381531602),null,new cljs.core.Keyword(null,"resize","resize",297367086),null,new cljs.core.Keyword(null,"border-inline-end","border-inline-end",1529961070),null,new cljs.core.Keyword(null,"border-block-end-style","border-block-end-style",-936122706),null,new cljs.core.Keyword(null,"perspective","perspective",1459886798),null,new cljs.core.Keyword(null,"border-left","border-left",-1150760178),null,new cljs.core.Keyword(null,"border-top-left-radius","border-top-left-radius",1361811342),null,new cljs.core.Keyword(null,"word-spacing","word-spacing",-1211711602),null,new cljs.core.Keyword(null,"s","s",1705939918),null,new cljs.core.Keyword(null,"flex-shrink","flex-shrink",1481146383),null,new cljs.core.Keyword(null,"animation-timing-function","animation-timing-function",-1186881521),null,new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),null,new cljs.core.Keyword(null,"ch","ch",-554717905),null,new cljs.core.Keyword(null,"border-bottom-width","border-bottom-width",-1417262769),null,new cljs.core.Keyword(null,"font","font",-1506159249),null,new cljs.core.Keyword(null,"font-variant-alternates","font-variant-alternates",2146842031),null,new cljs.core.Keyword(null,"column-gap","column-gap",384822863),null,new cljs.core.Keyword(null,"border-block-start-width","border-block-start-width",989693743),null,new cljs.core.Keyword(null,"vw","vw",1941049135),null,new cljs.core.Keyword(null,"border-collapse","border-collapse",919100239),null,new cljs.core.Keyword(null,"deg","deg",-681556081),null,new cljs.core.Keyword(null,"-webkit-flex-shrink","-webkit-flex-shrink",1567519631),null,new cljs.core.Keyword(null,"orphans","orphans",1913357231),null,new cljs.core.Keyword(null,"border-right-color","border-right-color",2017953775),null,new cljs.core.Keyword(null,"background-clip","background-clip",1705503920),null,new cljs.core.Keyword(null,"background-image","background-image",-1142314704),null,new cljs.core.Keyword(null,"dpi","dpi",-986162832),null,new cljs.core.Keyword(null,"unicode-range","unicode-range",-2014392944),null,new cljs.core.Keyword(null,"clip-path","clip-path",-439959120),null,new cljs.core.Keyword(null,"cm","cm",540591536),null,new cljs.core.Keyword(null,"turn","turn",75759344),null,new cljs.core.Keyword(null,"ruby-align","ruby-align",-479045808),null,new cljs.core.Keyword(null,"text-align-last","text-align-last",1401448400),null,new cljs.core.Keyword(null,"grid-column-start","grid-column-start",718549073),null,new cljs.core.Keyword(null,"border-block-start-color","border-block-start-color",690898129),null,new cljs.core.Keyword(null,"border-image-repeat","border-image-repeat",-1007131119),null,new cljs.core.Keyword(null,"grid-row","grid-row",-1737175087),null,new cljs.core.Keyword(null,"widows","widows",1989591025),null,new cljs.core.Keyword(null,"border-width","border-width",-1512605390),null,new cljs.core.Keyword(null,"filter","filter",-948537934),null,new cljs.core.Keyword(null,"quotes","quotes",-844987790),null,new cljs.core.Keyword(null,"offset-block-start","offset-block-start",-188512622),null,new cljs.core.Keyword(null,"offset-inline-start","offset-inline-start",-1043134574),null,new cljs.core.Keyword(null,"text-indent","text-indent",-1987214414),null,new cljs.core.Keyword(null,"z-index","z-index",1892827090),null,new cljs.core.Keyword(null,"margin-block-start","margin-block-start",1770237075),null,new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),null,new cljs.core.Keyword(null,"border-left-style","border-left-style",65166675),null,new cljs.core.Keyword(null,"empty-cells","empty-cells",306849587),null,new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),null,new cljs.core.Keyword(null,"ex","ex",-1413771341),null,new cljs.core.Keyword(null,"font-variant-caps","font-variant-caps",-1493584780),null,new cljs.core.Keyword(null,"text-decoration-color","text-decoration-color",853200020),null,new cljs.core.Keyword(null,"word-break","word-break",-407281356),null,new cljs.core.Keyword(null,"border-top-width","border-top-width",1612782932),null,new cljs.core.Keyword(null,"background-origin","background-origin",79411540),null,new cljs.core.Keyword(null,"column-width","column-width",405119380),null,new cljs.core.Keyword(null,"min-block-size","min-block-size",2039624084),null,new cljs.core.Keyword(null,"border-spacing","border-spacing",-1602200108),null,new cljs.core.Keyword(null,"opacity","opacity",397153780),null,new cljs.core.Keyword(null,"page-break-before","page-break-before",-944104780),null,new cljs.core.Keyword(null,"padding","padding",1660304693),null,new cljs.core.Keyword(null,"font-kerning","font-kerning",-638989899),null,new cljs.core.Keyword(null,"grid-area","grid-area",-1829717451),null,new cljs.core.Keyword(null,"border-inline-start","border-inline-start",957988437),null,new cljs.core.Keyword(null,"border-top-color","border-top-color",-804629899),null,new cljs.core.Keyword(null,"border-image-outset","border-image-outset",-335977867),null,new cljs.core.Keyword(null,"font-variant-position","font-variant-position",783614741),null,new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),null,new cljs.core.Keyword(null,"max-inline-size","max-inline-size",1870424342),null,new cljs.core.Keyword(null,"transition-timing-function","transition-timing-function",-549540522),null,new cljs.core.Keyword(null,"overflow-x","overflow-x",-26547754),null,new cljs.core.Keyword(null,"outline","outline",793464534),null,new cljs.core.Keyword(null,"animation-duration","animation-duration",-1261077706),null,new cljs.core.Keyword(null,"initial","initial",1854648214),null,new cljs.core.Keyword(null,"border-block-start","border-block-start",1160398742),null,new cljs.core.Keyword(null,"text-underline-position","text-underline-position",-1234733162),null,new cljs.core.Keyword(null,"border-inline-start-style","border-inline-start-style",1730804630),null,new cljs.core.Keyword(null,"animation-play-state","animation-play-state",655922102),null,new cljs.core.Keyword(null,"transform-origin","transform-origin",-586167370),null,new cljs.core.Keyword(null,"object-position","object-position",-598884937),null,new cljs.core.Keyword(null,"marks","marks",-1844991497),null,new cljs.core.Keyword(null,"perspective-origin","perspective-origin",-1049394665),null,new cljs.core.Keyword(null,"right","right",-452581833),null,new cljs.core.Keyword(null,"text-shadow","text-shadow",116733623),null,new cljs.core.Keyword(null,"border-color","border-color",-2059162761),null,new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),null,new cljs.core.Keyword(null,"transition-property","transition-property",2036650935),null,new cljs.core.Keyword(null,"shape-margin","shape-margin",358865911),null,new cljs.core.Keyword(null,"display","display",242065432),null,new cljs.core.Keyword(null,"image-resolution","image-resolution",-1933945832),null,new cljs.core.Keyword(null,"position","position",-2011731912),null,new cljs.core.Keyword(null,"order","order",-1254677256),null,new cljs.core.Keyword(null,"grid-template-areas","grid-template-areas",-1162938120),null,new cljs.core.Keyword(null,"vmax","vmax",-1435213544),null,new cljs.core.Keyword(null,"shape-image-threshold","shape-image-threshold",-1978694824),null,new cljs.core.Keyword(null,"border-inline-end-width","border-inline-end-width",1208892376),null,new cljs.core.Keyword(null,"column-fill","column-fill",1132872696),null,new cljs.core.Keyword(null,"-webkit-order","-webkit-order",-1474851815),null,new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),null,new cljs.core.Keyword(null,"column-span","column-span",1302376857),null,new cljs.core.Keyword(null,"background-repeat","background-repeat",-387201191),null,new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),null,new cljs.core.Keyword(null,"break-before","break-before",-1036311591),null,new cljs.core.Keyword(null,"unicode-bidi","unicode-bidi",310629754),null,new cljs.core.Keyword(null,"margin-inline-start","margin-inline-start",320232954),null,new cljs.core.Keyword(null,"align-self","align-self",1475936794),null,new cljs.core.Keyword(null,"margin-right","margin-right",809689658),null,new cljs.core.Keyword(null,"grid-row-end","grid-row-end",-128277830),null,new cljs.core.Keyword(null,"background-position","background-position",1112702746),null,new cljs.core.Keyword(null,"scroll-behavior","scroll-behavior",1300031290),null,new cljs.core.Keyword(null,"table-layout","table-layout",-1260034150),null,new cljs.core.Keyword(null,"border-inline-start-color","border-inline-start-color",392047707),null,new cljs.core.Keyword(null,"grid-template-columns","grid-template-columns",-594112133),null,new cljs.core.Keyword(null,"border","border",1444987323),null,new cljs.core.Keyword(null,"column-rule-width","column-rule-width",-305318373),null,new cljs.core.Keyword(null,"border-bottom-color","border-bottom-color",-208763333),null,new cljs.core.Keyword(null,"border-top","border-top",-158897573),null,new cljs.core.Keyword(null,"column-rule-color","column-rule-color",525397723),null,new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),null,new cljs.core.Keyword(null,"border-radius","border-radius",419594011),null,new cljs.core.Keyword(null,"ms","ms",-1152709733),null,new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),null,new cljs.core.Keyword(null,"flex-basis","flex-basis",983188475),null,new cljs.core.Keyword(null,"caption-side","caption-side",500795420),null,new cljs.core.Keyword(null,"-webkit-align-items","-webkit-align-items",1515523100),null,new cljs.core.Keyword(null,"font-synthesis","font-synthesis",-2125674372),null,new cljs.core.Keyword(null,"touch-action","touch-action",-128660292),null,new cljs.core.Keyword(null,"break-after","break-after",-1075423972),null,new cljs.core.Keyword(null,"font-size-adjust","font-size-adjust",-104156772),null,new cljs.core.Keyword(null,"rad","rad",-833983012),null,new cljs.core.Keyword(null,"transition-duration","transition-duration",85784092),null,new cljs.core.Keyword(null,"border-bottom-right-radius","border-bottom-right-radius",414899772),null,new cljs.core.Keyword(null,"khz","khz",507119228),null,new cljs.core.Keyword(null,"counter-increment","counter-increment",-181725540),null,new cljs.core.Keyword(null,"font-variant-east-asian","font-variant-east-asian",-992331876),null,new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),null,new cljs.core.Keyword(null,"outline-color","outline-color",-804747875),null,new cljs.core.Keyword(null,"animation-iteration-count","animation-iteration-count",-1410888227),null,new cljs.core.Keyword(null,"background-size","background-size",-1248630243),null,new cljs.core.Keyword(null,"visibility","visibility",1338380893),null,new cljs.core.Keyword(null,"grad","grad",1125187229),null,new cljs.core.Keyword(null,"column-rule","column-rule",121487261),null,new cljs.core.Keyword(null,"animation-fill-mode","animation-fill-mode",1637181373),null,new cljs.core.Keyword(null,"direction","direction",-633359395),null,new cljs.core.Keyword(null,"user-select","user-select",-346451650),null,new cljs.core.Keyword(null,"unset","unset",-513298114),null,new cljs.core.Keyword(null,"column-rule-style","column-rule-style",547990910),null,new cljs.core.Keyword(null,"animation-name","animation-name",-302195330),null,new cljs.core.Keyword(null,"grid-column","grid-column",-1086912770),null,new cljs.core.Keyword(null,"font-family","font-family",-667419874),null,new cljs.core.Keyword(null,"grid-auto-columns","grid-auto-columns",-1346990274),null,new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),null,new cljs.core.Keyword(null,"-webkit-flex-direction","-webkit-flex-direction",1024372702),null,new cljs.core.Keyword(null,"height","height",1025178622),null,new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),null,new cljs.core.Keyword(null,"in","in",-1531184865),null,new cljs.core.Keyword(null,"clear","clear",1877104959),null,new cljs.core.Keyword(null,"left","left",-399115937),null,new cljs.core.Keyword(null,"padding-inline-start","padding-inline-start",1837266335),null,new cljs.core.Keyword(null,"counter-reset","counter-reset",1170260511),null,new cljs.core.Keyword(null,"flex-flow","flex-flow",544537375),null,new cljs.core.Keyword(null,"border-image-width","border-image-width",-478445793),null,new cljs.core.Keyword(null,"margin","margin",-995903681),null,new cljs.core.Keyword(null,"border-block-end-color","border-block-end-color",1571299231),null], null), null);
/**
 * Returns true if the passed argument is either valid hiccup or a string, otherwise false/error
 */
re_com.validate.string_or_hiccup_QMARK_ = (function re_com$validate$string_or_hiccup_QMARK_(arg){
return reagent.impl.template.valid_tag_QMARK_.call(null,re_com.util.deref_or_value.call(null,arg));
});
/**
 * Returns true if the passed argument is a vector of maps (either directly or contained in an atom), otherwise false/error
 * Notes:
 *  - actually it also accepts a list of maps (should we rename this? Potential long/ugly names: sequential-of-maps?, vector-or-list-of-maps?)
 *  - vector/list can be empty
 *  - only checks the first element in the vector/list
 */
re_com.validate.vector_of_maps_QMARK_ = (function re_com$validate$vector_of_maps_QMARK_(arg){
var arg__$1 = re_com.util.deref_or_value.call(null,arg);
return (cljs.core.sequential_QMARK_.call(null,arg__$1)) && ((cljs.core.empty_QMARK_.call(null,arg__$1)) || (cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,arg__$1))));
});
/**
 * Returns true if the passed argument is a valid CSS style.
 * Otherwise returns a warning map
 */
re_com.validate.css_style_QMARK_ = (function re_com$validate$css_style_QMARK_(arg){
if(cljs.core.not.call(null,goog.DEBUG)){
return true;
} else {
var arg__$1 = re_com.util.deref_or_value.call(null,arg);
var and__60887__auto__ = cljs.core.map_QMARK_.call(null,arg__$1);
if(and__60887__auto__){
var arg_keys = cljs.core.keys.call(null,arg__$1);
var or__60899__auto__ = clojure.set.superset_QMARK_.call(null,re_com.validate.css_styles,arg_keys);
if(cljs.core.truth_(or__60899__auto__)){
return or__60899__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"warning","warning",-1685650671),new cljs.core.Keyword(null,"message","message",-406056002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unknown CSS style(s): "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.call(null,re_com.validate.css_styles,arg_keys))].join('')], null);
}
} else {
return and__60887__auto__;
}
}
});
/**
 * Returns truthy if the attribute name is an extension attribute, that is data-* or aria-*, otherwise falsey.
 */
re_com.validate.extension_attribute_QMARK_ = (function re_com$validate$extension_attribute_QMARK_(attr){
var attr__$1 = cljs.core.name.call(null,attr);
var ext_QMARK_ = ((function (attr__$1){
return (function (p1__84519_SHARP_){
return (cljs.core._EQ_.call(null,attr__$1.indexOf(p1__84519_SHARP_),(0))) && ((cljs.core.count.call(null,attr__$1) > cljs.core.count.call(null,p1__84519_SHARP_)));
});})(attr__$1))
;
return cljs.core.some.call(null,cljs.core.comp.call(null,ext_QMARK_,((function (attr__$1,ext_QMARK_){
return (function (p1__84520_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__84520_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-")].join('');
});})(attr__$1,ext_QMARK_))
,cljs.core.name),re_com.validate.extension_attrs);
});
/**
 * Returns the subset of HTML attributes contained in the passed argument that are not valid HTML attributes.
 */
re_com.validate.invalid_html_attrs = (function re_com$validate$invalid_html_attrs(attrs){
return cljs.core.remove.call(null,(function (p1__84521_SHARP_){
var or__60899__auto__ = re_com.validate.html_attrs.call(null,p1__84521_SHARP_);
if(cljs.core.truth_(or__60899__auto__)){
return or__60899__auto__;
} else {
return re_com.validate.extension_attribute_QMARK_.call(null,p1__84521_SHARP_);
}
}),attrs);
});
/**
 * Returns true if the passed argument is a valid HTML, SVG or event attribute.
 * Otherwise returns a warning map.
 * Notes:
 *  - Prevents :class and :style attributes
 */
re_com.validate.html_attr_QMARK_ = (function re_com$validate$html_attr_QMARK_(arg){
if(cljs.core.not.call(null,goog.DEBUG)){
return true;
} else {
var arg__$1 = re_com.util.deref_or_value.call(null,arg);
var and__60887__auto__ = cljs.core.map_QMARK_.call(null,arg__$1);
if(and__60887__auto__){
var arg_keys = cljs.core.set.call(null,cljs.core.keys.call(null,arg__$1));
var contains_class_QMARK_ = cljs.core.contains_QMARK_.call(null,arg_keys,new cljs.core.Keyword(null,"class","class",-2030961996));
var contains_style_QMARK_ = cljs.core.contains_QMARK_.call(null,arg_keys,new cljs.core.Keyword(null,"style","style",-496642736));
var result = ((contains_class_QMARK_)?":class not allowed in :attr argument":((contains_style_QMARK_)?":style not allowed in :attr argument":(function (){var temp__6738__auto__ = cljs.core.not_empty.call(null,re_com.validate.invalid_html_attrs.call(null,arg_keys));
if(cljs.core.truth_(temp__6738__auto__)){
var invalid = temp__6738__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unknown HTML attribute(s): "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(invalid)].join('');
} else {
return null;
}
})()
));
var or__60899__auto__ = (result == null);
if(or__60899__auto__){
return or__60899__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),(((contains_class_QMARK_) || (contains_style_QMARK_))?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"warning","warning",-1685650671)),new cljs.core.Keyword(null,"message","message",-406056002),result], null);
}
} else {
return and__60887__auto__;
}
}
});
/**
 * Returns true if the passed argument is a valid goog.date.UtcDateTime, otherwise false/error
 */
re_com.validate.goog_date_QMARK_ = (function re_com$validate$goog_date_QMARK_(arg){
var arg__$1 = re_com.util.deref_or_value.call(null,arg);
return (arg__$1 instanceof goog.date.UtcDateTime);
});
/**
 * Returns true if the passed argument is a valid regular expression, otherwise false/error
 */
re_com.validate.regex_QMARK_ = (function re_com$validate$regex_QMARK_(arg){
var arg__$1 = re_com.util.deref_or_value.call(null,arg);
return (arg__$1 instanceof RegExp);
});
/**
 * Returns true if the passed argument is a number or a string, otherwise false/error
 */
re_com.validate.number_or_string_QMARK_ = (function re_com$validate$number_or_string_QMARK_(arg){
var arg__$1 = re_com.util.deref_or_value.call(null,arg);
return (typeof arg__$1 === 'number') || (typeof arg__$1 === 'string');
});
/**
 * Returns true if the passed argument is a string (or a string within an atom), otherwise false/error
 */
re_com.validate.string_or_atom_QMARK_ = (function re_com$validate$string_or_atom_QMARK_(arg){
return typeof re_com.util.deref_or_value.call(null,arg) === 'string';
});
/**
 * Returns true if the passed argument is a set (or a set within an atom), otherwise false/error
 */
re_com.validate.set_or_atom_QMARK_ = (function re_com$validate$set_or_atom_QMARK_(arg){
return cljs.core.set_QMARK_.call(null,re_com.util.deref_or_value.call(null,arg));
});

//# sourceMappingURL=validate.js.map?rel=1506064200471