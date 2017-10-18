// Compiled by ClojureScript 1.9.542 {}
goog.provide('com.rpl.specter');
goog.require('cljs.core');
goog.require('com.rpl.specter.protocols');
goog.require('com.rpl.specter.impl');
goog.require('com.rpl.specter.navs');
goog.require('clojure.set');
com.rpl.specter.static_path_QMARK_ = (function com$rpl$specter$static_path_QMARK_(path){
if(cljs.core.sequential_QMARK_.call(null,path)){
return cljs.core.every_QMARK_.call(null,com.rpl.specter.static_path_QMARK_,path);
} else {
return cljs.core.not.call(null,com.rpl.specter.impl.dynamic_param_QMARK_.call(null,path));
}
});
com.rpl.specter.wrap_dynamic_nav = (function com$rpl$specter$wrap_dynamic_nav(f){
return (function() { 
var G__76934__delegate = function (args){
var ret = cljs.core.apply.call(null,f,args);
if(cljs.core.truth_((function (){var and__60887__auto__ = cljs.core.sequential_QMARK_.call(null,ret);
if(and__60887__auto__){
return com.rpl.specter.static_path_QMARK_.call(null,ret);
} else {
return and__60887__auto__;
}
})())){
return com.rpl.specter.impl.comp_paths_STAR_.call(null,ret);
} else {
if((cljs.core.sequential_QMARK_.call(null,ret)) && (cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,ret)))){
return cljs.core.first.call(null,ret);
} else {
return ret;

}
}
};
var G__76934 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__76935__i = 0, G__76935__a = new Array(arguments.length -  0);
while (G__76935__i < G__76935__a.length) {G__76935__a[G__76935__i] = arguments[G__76935__i + 0]; ++G__76935__i;}
  args = new cljs.core.IndexedSeq(G__76935__a,0,null);
} 
return G__76934__delegate.call(this,args);};
G__76934.cljs$lang$maxFixedArity = 0;
G__76934.cljs$lang$applyTo = (function (arglist__76936){
var args = cljs.core.seq(arglist__76936);
return G__76934__delegate(args);
});
G__76934.cljs$core$IFn$_invoke$arity$variadic = G__76934__delegate;
return G__76934;
})()
;
});
/**
 * Returns a compiled version of the given path for use with
 * compiled-{select/transform/setval/etc.} functions.
 */
com.rpl.specter.comp_paths = (function com$rpl$specter$comp_paths(var_args){
var args__62127__auto__ = [];
var len__62120__auto___76953 = arguments.length;
var i__62121__auto___76954 = (0);
while(true){
if((i__62121__auto___76954 < len__62120__auto___76953)){
args__62127__auto__.push((arguments[i__62121__auto___76954]));

var G__76955 = (i__62121__auto___76954 + (1));
i__62121__auto___76954 = G__76955;
continue;
} else {
}
break;
}

var argseq__62128__auto__ = ((((0) < args__62127__auto__.length))?(new cljs.core.IndexedSeq(args__62127__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic(argseq__62128__auto__);
});

com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic = (function (apath){
return com.rpl.specter.impl.comp_paths_STAR_.call(null,cljs.core.vec.call(null,apath));
});

com.rpl.specter.comp_paths.cljs$lang$maxFixedArity = (0);

com.rpl.specter.comp_paths.cljs$lang$applyTo = (function (seq76952){
return com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq76952));
});

/**
 * Version of select that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select = com.rpl.specter.impl.compiled_select_STAR_;
/**
 * Navigates to and returns a sequence of all the elements specified by the path.
 */
com.rpl.specter.select_STAR_ = (function com$rpl$specter$select_STAR_(path,structure){
return com.rpl.specter.compiled_select.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),structure);
});
/**
 * Version of select-one that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_one = com.rpl.specter.impl.compiled_select_one_STAR_;
/**
 * Like select, but returns either one element or nil. Throws exception if multiple elements found
 */
com.rpl.specter.select_one_STAR_ = (function com$rpl$specter$select_one_STAR_(path,structure){
return com.rpl.specter.compiled_select_one.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),structure);
});
/**
 * Version of select-one! that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_one_BANG_ = com.rpl.specter.impl.compiled_select_one_BANG__STAR_;
/**
 * Returns exactly one element, throws exception if zero or multiple elements found
 */
com.rpl.specter.select_one_BANG__STAR_ = (function com$rpl$specter$select_one_BANG__STAR_(path,structure){
return com.rpl.specter.compiled_select_one_BANG_.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),structure);
});
/**
 * Version of select-first that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_first = com.rpl.specter.impl.compiled_select_first_STAR_;
/**
 * Returns first element found.
 */
com.rpl.specter.select_first_STAR_ = (function com$rpl$specter$select_first_STAR_(path,structure){
return com.rpl.specter.compiled_select_first.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),structure);
});
/**
 * Version of select-any that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_any = com.rpl.specter.impl.compiled_select_any_STAR_;
/**
 * Global value used to indicate no elements selected during
 *           [[select-any]].
 */
com.rpl.specter.NONE = com.rpl.specter.impl.NONE;
/**
 * Returns any element found or [[NONE]] if nothing selected. This is the most
 * efficient of the various selection operations.
 */
com.rpl.specter.select_any_STAR_ = (function com$rpl$specter$select_any_STAR_(path,structure){
return com.rpl.specter.compiled_select_any.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),structure);
});
/**
 * Version of selected-any? that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_selected_any_QMARK_ = com.rpl.specter.impl.compiled_selected_any_QMARK__STAR_;
/**
 * Returns true if any element was selected, false otherwise.
 */
com.rpl.specter.selected_any_QMARK__STAR_ = (function com$rpl$specter$selected_any_QMARK__STAR_(path,structure){
return com.rpl.specter.compiled_selected_any_QMARK_.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),structure);
});
/**
 * Version of traverse that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_traverse = com.rpl.specter.impl.do_compiled_traverse;
/**
 * Return a reducible object that traverses over `structure` to every element
 * specified by the path
 */
com.rpl.specter.traverse_STAR_ = (function com$rpl$specter$traverse_STAR_(apath,structure){
return com.rpl.specter.compiled_traverse.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,apath),structure);
});
/**
 * Version of traverse-all that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_traverse_all = com.rpl.specter.impl.compiled_traverse_all_STAR_;
/**
 * Returns a transducer that traverses over each element with the given path.
 */
com.rpl.specter.traverse_all_STAR_ = (function com$rpl$specter$traverse_all_STAR_(apath){
return com.rpl.specter.compiled_traverse_all.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,apath));
});
/**
 * Version of transform that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_transform = com.rpl.specter.impl.compiled_transform_STAR_;
/**
 * Navigates to each value specified by the path and replaces it by the result of running
 *   the transform-fn on it
 */
com.rpl.specter.transform_STAR_ = (function com$rpl$specter$transform_STAR_(path,transform_fn,structure){
return com.rpl.specter.compiled_transform.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),transform_fn,structure);
});
/**
 * Version of `multi-transform` that takes in a path precompiled with `comp-paths`
 */
com.rpl.specter.compiled_multi_transform = com.rpl.specter.impl.compiled_multi_transform_STAR_;
/**
 * Just like `transform` but expects transform functions to be specified
 * inline in the path using `terminal`. Error is thrown if navigation finishes
 * at a non-`terminal` navigator. `terminal-val` is a wrapper around `terminal` and is
 * the `multi-transform` equivalent of `setval`.
 */
com.rpl.specter.multi_transform_STAR_ = (function com$rpl$specter$multi_transform_STAR_(path,structure){
return com.rpl.specter.compiled_multi_transform.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),structure);
});
/**
 * Version of setval that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_setval = com.rpl.specter.impl.compiled_setval_STAR_;
/**
 * Navigates to each value specified by the path and replaces it by val
 */
com.rpl.specter.setval_STAR_ = (function com$rpl$specter$setval_STAR_(path,val,structure){
return com.rpl.specter.compiled_setval.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),val,structure);
});
/**
 * Version of replace-in that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_replace_in = com.rpl.specter.impl.compiled_replace_in_STAR_;
/**
 * Similar to transform, except returns a pair of [transformed-structure sequence-of-user-ret].
 * The transform-fn in this case is expected to return [ret user-ret]. ret is
 * what's used to transform the data structure, while user-ret will be added to the user-ret sequence
 * in the final return. replace-in is useful for situations where you need to know the specific values
 * of what was transformed in the data structure.
 */
com.rpl.specter.replace_in_STAR_ = (function com$rpl$specter$replace_in_STAR_(var_args){
var args__62127__auto__ = [];
var len__62120__auto___76963 = arguments.length;
var i__62121__auto___76964 = (0);
while(true){
if((i__62121__auto___76964 < len__62120__auto___76963)){
args__62127__auto__.push((arguments[i__62121__auto___76964]));

var G__76965 = (i__62121__auto___76964 + (1));
i__62121__auto___76964 = G__76965;
continue;
} else {
}
break;
}

var argseq__62128__auto__ = ((((3) < args__62127__auto__.length))?(new cljs.core.IndexedSeq(args__62127__auto__.slice((3)),(0),null)):null);
return com.rpl.specter.replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__62128__auto__);
});

com.rpl.specter.replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (path,transform_fn,structure,p__76960){
var map__76961 = p__76960;
var map__76961__$1 = ((((!((map__76961 == null)))?((((map__76961.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76961.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__76961):map__76961);
var merge_fn = cljs.core.get.call(null,map__76961__$1,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),cljs.core.concat);
return com.rpl.specter.compiled_replace_in.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),transform_fn,structure,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),merge_fn);
});

com.rpl.specter.replace_in_STAR_.cljs$lang$maxFixedArity = (3);

com.rpl.specter.replace_in_STAR_.cljs$lang$applyTo = (function (seq76956){
var G__76957 = cljs.core.first.call(null,seq76956);
var seq76956__$1 = cljs.core.next.call(null,seq76956);
var G__76958 = cljs.core.first.call(null,seq76956__$1);
var seq76956__$2 = cljs.core.next.call(null,seq76956__$1);
var G__76959 = cljs.core.first.call(null,seq76956__$2);
var seq76956__$3 = cljs.core.next.call(null,seq76956__$2);
return com.rpl.specter.replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__76957,G__76958,G__76959,seq76956__$3);
});

com.rpl.specter.late_path = com.rpl.specter.impl.late_path;
com.rpl.specter.dynamic_param_QMARK_ = com.rpl.specter.impl.dynamic_param_QMARK_;
com.rpl.specter.late_resolved_fn = com.rpl.specter.impl.late_resolved_fn;
/**
 * Turns a navigator that takes one argument into a navigator that takes
 *        many arguments and uses the same navigator with each argument. There
 *        is no performance cost to using this. See implementation of `keypath`
 */
com.rpl.specter.eachnav = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function (navfn){
var latenavfn = com.rpl.specter.late_resolved_fn.call(null,navfn);
return cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,((function (latenavfn){
return (function() { 
var G__76966__delegate = function (args){
return cljs.core.map.call(null,latenavfn,args);
};
var G__76966 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__76967__i = 0, G__76967__a = new Array(arguments.length -  0);
while (G__76967__i < G__76967__a.length) {G__76967__a[G__76967__i] = arguments[G__76967__i + 0]; ++G__76967__i;}
  args = new cljs.core.IndexedSeq(G__76967__a,0,null);
} 
return G__76966__delegate.call(this,args);};
G__76966.cljs$lang$maxFixedArity = 0;
G__76966.cljs$lang$applyTo = (function (arglist__76968){
var args = cljs.core.seq(arglist__76968);
return G__76966__delegate(args);
});
G__76966.cljs$core$IFn$_invoke$arity$variadic = G__76966__delegate;
return G__76966;
})()
;})(latenavfn))
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
})),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
com.rpl.specter.local_declarepath = com.rpl.specter.impl.local_declarepath;


com.rpl.specter.STOP_select_STAR_ = (function com$rpl$specter$STOP_select_STAR_(structure,next_fn){
return com.rpl.specter.NONE;
});

com.rpl.specter.STOP_transform_STAR_ = (function com$rpl$specter$STOP_transform_STAR_(structure,next_fn){
return structure;
});

/**
 * Stops navigation at this point. For selection returns nothing and for
 *        transformation returns the structure unchanged
 */
com.rpl.specter.STOP = (function (){
if(typeof com.rpl.specter.t_com$rpl$specter76969 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter76969 = (function (meta76970){
this.meta76970 = meta76970;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter76969.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_76971,meta76970__$1){
var self__ = this;
var _76971__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter76969(meta76970__$1));
});

com.rpl.specter.t_com$rpl$specter76969.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_76971){
var self__ = this;
var _76971__$1 = this;
return self__.meta76970;
});

com.rpl.specter.t_com$rpl$specter76969.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter76969.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__21118__auto__,vals__21119__auto__,structure,next_fn__21120__auto__){
var self__ = this;
var this__21118__auto____$1 = this;
var next_fn = ((function (this__21118__auto____$1){
return (function (s__21121__auto__){
return next_fn__21120__auto__.call(null,vals__21119__auto__,s__21121__auto__);
});})(this__21118__auto____$1))
;
return com.rpl.specter.NONE;
});

com.rpl.specter.t_com$rpl$specter76969.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__21118__auto__,vals__21119__auto__,structure,next_fn__21120__auto__){
var self__ = this;
var this__21118__auto____$1 = this;
var next_fn = ((function (this__21118__auto____$1){
return (function (s__21121__auto__){
return next_fn__21120__auto__.call(null,vals__21119__auto__,s__21121__auto__);
});})(this__21118__auto____$1))
;
return structure;
});

com.rpl.specter.t_com$rpl$specter76969.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta76970","meta76970",453225924,null)], null);
});

com.rpl.specter.t_com$rpl$specter76969.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter76969.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter76969";

com.rpl.specter.t_com$rpl$specter76969.cljs$lang$ctorPrWriter = (function (this__61556__auto__,writer__61557__auto__,opt__61558__auto__){
return cljs.core._write.call(null,writer__61557__auto__,"com.rpl.specter/t_com$rpl$specter76969");
});

com.rpl.specter.__GT_t_com$rpl$specter76969 = (function com$rpl$specter$__GT_t_com$rpl$specter76969(meta76970){
return (new com.rpl.specter.t_com$rpl$specter76969(meta76970));
});

}

return (new com.rpl.specter.t_com$rpl$specter76969(null));
})()
;
/**
 * Stays navigated at the current point. Essentially a no-op navigator.
 */
com.rpl.specter.STAY = com.rpl.specter.impl.STAY_STAR_;
/**
 * For usage with `multi-transform`, defines an endpoint in the navigation
 *        that will have the parameterized transform function run. The transform
 *        function works just like it does in `transform`, with collected values
 *        given as the first arguments
 */
com.rpl.specter.terminal = com.rpl.specter.impl.direct_nav_obj.call(null,(function (afn){
if(typeof com.rpl.specter.t_com$rpl$specter76972 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter76972 = (function (afn,meta76973){
this.afn = afn;
this.meta76973 = meta76973;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter76972.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_76974,meta76973__$1){
var self__ = this;
var _76974__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter76972(self__.afn,meta76973__$1));
});

com.rpl.specter.t_com$rpl$specter76972.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_76974){
var self__ = this;
var _76974__$1 = this;
return self__.meta76973;
});

com.rpl.specter.t_com$rpl$specter76972.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter76972.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
throw (new java.lang.IllegalArgumentException(com.rpl.specter.impl.smart_str.call(null,"'terminal' should only be used in multi-transform")));
});

com.rpl.specter.t_com$rpl$specter76972.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.terminal_STAR_.call(null,self__.afn,vals,structure);
});

com.rpl.specter.t_com$rpl$specter76972.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta76973","meta76973",2103791293,null)], null);
});

com.rpl.specter.t_com$rpl$specter76972.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter76972.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter76972";

com.rpl.specter.t_com$rpl$specter76972.cljs$lang$ctorPrWriter = (function (this__61556__auto__,writer__61557__auto__,opt__61558__auto__){
return cljs.core._write.call(null,writer__61557__auto__,"com.rpl.specter/t_com$rpl$specter76972");
});

com.rpl.specter.__GT_t_com$rpl$specter76972 = (function com$rpl$specter$__GT_t_com$rpl$specter76972(afn__$1,meta76973){
return (new com.rpl.specter.t_com$rpl$specter76972(afn__$1,meta76973));
});

}

return (new com.rpl.specter.t_com$rpl$specter76972(afn,null));
}));
/**
 * Like `terminal` but specifies a val to set at the location regardless of
 * the collected values or the value at the location.
 */
com.rpl.specter.terminal_val = (function com$rpl$specter$terminal_val(v){
return com.rpl.specter.terminal.call(null,com.rpl.specter.impl.fast_constantly.call(null,v));
});


com.rpl.specter.ALL_select_STAR_ = (function com$rpl$specter$ALL_select_STAR_(structure,next_fn){
return com.rpl.specter.navs.all_select.call(null,structure,next_fn);
});

com.rpl.specter.ALL_transform_STAR_ = (function com$rpl$specter$ALL_transform_STAR_(structure,next_fn){
return com.rpl.specter.navs.all_transform.call(null,structure,next_fn);
});

/**
 * Navigate to every element of the collection. For maps navigates to
 *        a vector of `[key value]`.
 */
com.rpl.specter.ALL = (function (){
if(typeof com.rpl.specter.t_com$rpl$specter76975 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter76975 = (function (meta76976){
this.meta76976 = meta76976;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter76975.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_76977,meta76976__$1){
var self__ = this;
var _76977__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter76975(meta76976__$1));
});

com.rpl.specter.t_com$rpl$specter76975.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_76977){
var self__ = this;
var _76977__$1 = this;
return self__.meta76976;
});

com.rpl.specter.t_com$rpl$specter76975.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter76975.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__21118__auto__,vals__21119__auto__,structure,next_fn__21120__auto__){
var self__ = this;
var this__21118__auto____$1 = this;
var next_fn = ((function (this__21118__auto____$1){
return (function (s__21121__auto__){
return next_fn__21120__auto__.call(null,vals__21119__auto__,s__21121__auto__);
});})(this__21118__auto____$1))
;
return com.rpl.specter.navs.all_select.call(null,structure,next_fn);
});

com.rpl.specter.t_com$rpl$specter76975.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__21118__auto__,vals__21119__auto__,structure,next_fn__21120__auto__){
var self__ = this;
var this__21118__auto____$1 = this;
var next_fn = ((function (this__21118__auto____$1){
return (function (s__21121__auto__){
return next_fn__21120__auto__.call(null,vals__21119__auto__,s__21121__auto__);
});})(this__21118__auto____$1))
;
return com.rpl.specter.navs.all_transform.call(null,structure,next_fn);
});

com.rpl.specter.t_com$rpl$specter76975.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta76976","meta76976",-2107955562,null)], null);
});

com.rpl.specter.t_com$rpl$specter76975.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter76975.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter76975";

com.rpl.specter.t_com$rpl$specter76975.cljs$lang$ctorPrWriter = (function (this__61556__auto__,writer__61557__auto__,opt__61558__auto__){
return cljs.core._write.call(null,writer__61557__auto__,"com.rpl.specter/t_com$rpl$specter76975");
});

com.rpl.specter.__GT_t_com$rpl$specter76975 = (function com$rpl$specter$__GT_t_com$rpl$specter76975(meta76976){
return (new com.rpl.specter.t_com$rpl$specter76975(meta76976));
});

}

return (new com.rpl.specter.t_com$rpl$specter76975(null));
})()
;


com.rpl.specter.MAP_VALS_select_STAR_ = (function com$rpl$specter$MAP_VALS_select_STAR_(structure,next_fn){
return cljs.core.reduce.call(null,(function (curr__20042__auto__,v){
var ret__20043__auto__ = next_fn.call(null,v);
if((ret__20043__auto__ === com.rpl.specter.NONE)){
return curr__20042__auto__;
} else {
if(cljs.core.reduced_QMARK_.call(null,ret__20043__auto__)){
return cljs.core.reduced.call(null,ret__20043__auto__);
} else {
return ret__20043__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.vals.call(null,structure));
});

com.rpl.specter.MAP_VALS_transform_STAR_ = (function com$rpl$specter$MAP_VALS_transform_STAR_(structure,next_fn){
return com.rpl.specter.navs.map_vals_transform.call(null,structure,next_fn);
});

/**
 * Navigate to each value of the map. This is more efficient than
 *        navigating via [ALL LAST]
 */
com.rpl.specter.MAP_VALS = (function (){
if(typeof com.rpl.specter.t_com$rpl$specter76978 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter76978 = (function (meta76979){
this.meta76979 = meta76979;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter76978.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_76980,meta76979__$1){
var self__ = this;
var _76980__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter76978(meta76979__$1));
});

com.rpl.specter.t_com$rpl$specter76978.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_76980){
var self__ = this;
var _76980__$1 = this;
return self__.meta76979;
});

com.rpl.specter.t_com$rpl$specter76978.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter76978.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__21118__auto__,vals__21119__auto__,structure,next_fn__21120__auto__){
var self__ = this;
var this__21118__auto____$1 = this;
var next_fn = ((function (this__21118__auto____$1){
return (function (s__21121__auto__){
return next_fn__21120__auto__.call(null,vals__21119__auto__,s__21121__auto__);
});})(this__21118__auto____$1))
;
return cljs.core.reduce.call(null,((function (next_fn,this__21118__auto____$1){
return (function (curr__20042__auto__,v){
var ret__20043__auto__ = next_fn.call(null,v);
if((ret__20043__auto__ === com.rpl.specter.NONE)){
return curr__20042__auto__;
} else {
if(cljs.core.reduced_QMARK_.call(null,ret__20043__auto__)){
return cljs.core.reduced.call(null,ret__20043__auto__);
} else {
return ret__20043__auto__;
}
}
});})(next_fn,this__21118__auto____$1))
,com.rpl.specter.NONE,cljs.core.vals.call(null,structure));
});

com.rpl.specter.t_com$rpl$specter76978.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__21118__auto__,vals__21119__auto__,structure,next_fn__21120__auto__){
var self__ = this;
var this__21118__auto____$1 = this;
var next_fn = ((function (this__21118__auto____$1){
return (function (s__21121__auto__){
return next_fn__21120__auto__.call(null,vals__21119__auto__,s__21121__auto__);
});})(this__21118__auto____$1))
;
return com.rpl.specter.navs.map_vals_transform.call(null,structure,next_fn);
});

com.rpl.specter.t_com$rpl$specter76978.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta76979","meta76979",-1624121020,null)], null);
});

com.rpl.specter.t_com$rpl$specter76978.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter76978.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter76978";

com.rpl.specter.t_com$rpl$specter76978.cljs$lang$ctorPrWriter = (function (this__61556__auto__,writer__61557__auto__,opt__61558__auto__){
return cljs.core._write.call(null,writer__61557__auto__,"com.rpl.specter/t_com$rpl$specter76978");
});

com.rpl.specter.__GT_t_com$rpl$specter76978 = (function com$rpl$specter$__GT_t_com$rpl$specter76978(meta76979){
return (new com.rpl.specter.t_com$rpl$specter76978(meta76979));
});

}

return (new com.rpl.specter.t_com$rpl$specter76978(null));
})()
;


com.rpl.specter.MAP_KEYS_select_STAR_ = (function com$rpl$specter$MAP_KEYS_select_STAR_(structure,next_fn){
return cljs.core.reduce.call(null,(function (curr__20042__auto__,k){
var ret__20043__auto__ = next_fn.call(null,k);
if((ret__20043__auto__ === com.rpl.specter.NONE)){
return curr__20042__auto__;
} else {
if(cljs.core.reduced_QMARK_.call(null,ret__20043__auto__)){
return cljs.core.reduced.call(null,ret__20043__auto__);
} else {
return ret__20043__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.keys.call(null,structure));
});

com.rpl.specter.MAP_KEYS_transform_STAR_ = (function com$rpl$specter$MAP_KEYS_transform_STAR_(structure,next_fn){
return com.rpl.specter.navs.map_keys_transform.call(null,structure,next_fn);
});

/**
 * Navigate to each key of the map. This is more efficient than
 *        navigating via [ALL FIRST]
 */
com.rpl.specter.MAP_KEYS = (function (){
if(typeof com.rpl.specter.t_com$rpl$specter76981 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter76981 = (function (meta76982){
this.meta76982 = meta76982;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter76981.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_76983,meta76982__$1){
var self__ = this;
var _76983__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter76981(meta76982__$1));
});

com.rpl.specter.t_com$rpl$specter76981.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_76983){
var self__ = this;
var _76983__$1 = this;
return self__.meta76982;
});

com.rpl.specter.t_com$rpl$specter76981.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter76981.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__21118__auto__,vals__21119__auto__,structure,next_fn__21120__auto__){
var self__ = this;
var this__21118__auto____$1 = this;
var next_fn = ((function (this__21118__auto____$1){
return (function (s__21121__auto__){
return next_fn__21120__auto__.call(null,vals__21119__auto__,s__21121__auto__);
});})(this__21118__auto____$1))
;
return cljs.core.reduce.call(null,((function (next_fn,this__21118__auto____$1){
return (function (curr__20042__auto__,k){
var ret__20043__auto__ = next_fn.call(null,k);
if((ret__20043__auto__ === com.rpl.specter.NONE)){
return curr__20042__auto__;
} else {
if(cljs.core.reduced_QMARK_.call(null,ret__20043__auto__)){
return cljs.core.reduced.call(null,ret__20043__auto__);
} else {
return ret__20043__auto__;
}
}
});})(next_fn,this__21118__auto____$1))
,com.rpl.specter.NONE,cljs.core.keys.call(null,structure));
});

com.rpl.specter.t_com$rpl$specter76981.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__21118__auto__,vals__21119__auto__,structure,next_fn__21120__auto__){
var self__ = this;
var this__21118__auto____$1 = this;
var next_fn = ((function (this__21118__auto____$1){
return (function (s__21121__auto__){
return next_fn__21120__auto__.call(null,vals__21119__auto__,s__21121__auto__);
});})(this__21118__auto____$1))
;
return com.rpl.specter.navs.map_keys_transform.call(null,structure,next_fn);
});

com.rpl.specter.t_com$rpl$specter76981.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta76982","meta76982",2092566342,null)], null);
});

com.rpl.specter.t_com$rpl$specter76981.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter76981.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter76981";

com.rpl.specter.t_com$rpl$specter76981.cljs$lang$ctorPrWriter = (function (this__61556__auto__,writer__61557__auto__,opt__61558__auto__){
return cljs.core._write.call(null,writer__61557__auto__,"com.rpl.specter/t_com$rpl$specter76981");
});

com.rpl.specter.__GT_t_com$rpl$specter76981 = (function com$rpl$specter$__GT_t_com$rpl$specter76981(meta76982){
return (new com.rpl.specter.t_com$rpl$specter76981(meta76982));
});

}

return (new com.rpl.specter.t_com$rpl$specter76981(null));
})()
;
com.rpl.specter.VAL = (function (){
if(typeof com.rpl.specter.t_com$rpl$specter76984 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter76984 = (function (meta76985){
this.meta76985 = meta76985;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter76984.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_76986,meta76985__$1){
var self__ = this;
var _76986__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter76984(meta76985__$1));
});

com.rpl.specter.t_com$rpl$specter76984.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_76986){
var self__ = this;
var _76986__$1 = this;
return self__.meta76985;
});

com.rpl.specter.t_com$rpl$specter76984.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter76984.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__21880__auto__,vals__21881__auto__,structure,next_fn__21882__auto__){
var self__ = this;
var this__21880__auto____$1 = this;
return next_fn__21882__auto__.call(null,cljs.core.conj.call(null,vals__21881__auto__,structure),structure);
});

com.rpl.specter.t_com$rpl$specter76984.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__21880__auto__,vals__21881__auto__,structure,next_fn__21882__auto__){
var self__ = this;
var this__21880__auto____$1 = this;
return next_fn__21882__auto__.call(null,cljs.core.conj.call(null,vals__21881__auto__,structure),structure);
});

com.rpl.specter.t_com$rpl$specter76984.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta76985","meta76985",-1291876163,null)], null);
});

com.rpl.specter.t_com$rpl$specter76984.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter76984.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter76984";

com.rpl.specter.t_com$rpl$specter76984.cljs$lang$ctorPrWriter = (function (this__61556__auto__,writer__61557__auto__,opt__61558__auto__){
return cljs.core._write.call(null,writer__61557__auto__,"com.rpl.specter/t_com$rpl$specter76984");
});

com.rpl.specter.__GT_t_com$rpl$specter76984 = (function com$rpl$specter$__GT_t_com$rpl$specter76984(meta76985){
return (new com.rpl.specter.t_com$rpl$specter76984(meta76985));
});

}

return (new com.rpl.specter.t_com$rpl$specter76984(null));
})()
;
/**
 * Navigate to the last element of the collection. If the collection is
 *        empty navigation is stopped at this point.
 */
com.rpl.specter.LAST = com.rpl.specter.navs.PosNavigator.call(null,com.rpl.specter.navs.get_last,com.rpl.specter.navs.update_last);
/**
 * Navigate to the first element of the collection. If the collection is
 *        empty navigation is stopped at this point.
 */
com.rpl.specter.FIRST = com.rpl.specter.navs.PosNavigator.call(null,com.rpl.specter.navs.get_first,com.rpl.specter.navs.update_first);


com.rpl.specter.srange_dynamic_select_STAR_ = (function com$rpl$specter$srange_dynamic_select_STAR_(start_fn,end_fn,structure,next_fn){
return com.rpl.specter.navs.srange_select.call(null,structure,start_fn.call(null,structure),end_fn.call(null,structure),next_fn);
});

com.rpl.specter.srange_dynamic_transform_STAR_ = (function com$rpl$specter$srange_dynamic_transform_STAR_(start_fn,end_fn,structure,next_fn){
return com.rpl.specter.navs.srange_transform.call(null,structure,start_fn.call(null,structure),end_fn.call(null,structure),next_fn);
});

/**
 * Uses start-fn and end-fn to determine the bounds of the subsequence
 *        to select when navigating. Each function takes in the structure as input.
 */
com.rpl.specter.srange_dynamic = com.rpl.specter.impl.direct_nav_obj.call(null,(function (start_fn,end_fn){
if(typeof com.rpl.specter.t_com$rpl$specter76987 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter76987 = (function (start_fn,end_fn,meta76988){
this.start_fn = start_fn;
this.end_fn = end_fn;
this.meta76988 = meta76988;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter76987.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_76989,meta76988__$1){
var self__ = this;
var _76989__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter76987(self__.start_fn,self__.end_fn,meta76988__$1));
});

com.rpl.specter.t_com$rpl$specter76987.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_76989){
var self__ = this;
var _76989__$1 = this;
return self__.meta76988;
});

com.rpl.specter.t_com$rpl$specter76987.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter76987.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__21118__auto__,vals__21119__auto__,structure,next_fn__21120__auto__){
var self__ = this;
var this__21118__auto____$1 = this;
var next_fn = ((function (this__21118__auto____$1){
return (function (s__21121__auto__){
return next_fn__21120__auto__.call(null,vals__21119__auto__,s__21121__auto__);
});})(this__21118__auto____$1))
;
return com.rpl.specter.navs.srange_select.call(null,structure,self__.start_fn.call(null,structure),self__.end_fn.call(null,structure),next_fn);
});

com.rpl.specter.t_com$rpl$specter76987.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__21118__auto__,vals__21119__auto__,structure,next_fn__21120__auto__){
var self__ = this;
var this__21118__auto____$1 = this;
var next_fn = ((function (this__21118__auto____$1){
return (function (s__21121__auto__){
return next_fn__21120__auto__.call(null,vals__21119__auto__,s__21121__auto__);
});})(this__21118__auto____$1))
;
return com.rpl.specter.navs.srange_transform.call(null,structure,self__.start_fn.call(null,structure),self__.end_fn.call(null,structure),next_fn);
});

com.rpl.specter.t_com$rpl$specter76987.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start-fn","start-fn",-1617360859,null),new cljs.core.Symbol(null,"end-fn","end-fn",1694587211,null),new cljs.core.Symbol(null,"meta76988","meta76988",-795823583,null)], null);
});

com.rpl.specter.t_com$rpl$specter76987.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter76987.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter76987";

com.rpl.specter.t_com$rpl$specter76987.cljs$lang$ctorPrWriter = (function (this__61556__auto__,writer__61557__auto__,opt__61558__auto__){
return cljs.core._write.call(null,writer__61557__auto__,"com.rpl.specter/t_com$rpl$specter76987");
});

com.rpl.specter.__GT_t_com$rpl$specter76987 = (function com$rpl$specter$__GT_t_com$rpl$specter76987(start_fn__$1,end_fn__$1,meta76988){
return (new com.rpl.specter.t_com$rpl$specter76987(start_fn__$1,end_fn__$1,meta76988));
});

}

return (new com.rpl.specter.t_com$rpl$specter76987(start_fn,end_fn,null));
}));


com.rpl.specter.srange_select_STAR_ = (function com$rpl$specter$srange_select_STAR_(start,end,structure,next_fn){
return com.rpl.specter.navs.srange_select.call(null,structure,start,end,next_fn);
});

com.rpl.specter.srange_transform_STAR_ = (function com$rpl$specter$srange_transform_STAR_(start,end,structure,next_fn){
return com.rpl.specter.navs.srange_transform.call(null,structure,start,end,next_fn);
});

/**
 * Navigates to the subsequence bound by the indexes start (inclusive)
 *        and end (exclusive)
 */
com.rpl.specter.srange = com.rpl.specter.impl.direct_nav_obj.call(null,(function (start,end){
if(typeof com.rpl.specter.t_com$rpl$specter76990 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter76990 = (function (start,end,meta76991){
this.start = start;
this.end = end;
this.meta76991 = meta76991;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter76990.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_76992,meta76991__$1){
var self__ = this;
var _76992__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter76990(self__.start,self__.end,meta76991__$1));
});

com.rpl.specter.t_com$rpl$specter76990.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_76992){
var self__ = this;
var _76992__$1 = this;
return self__.meta76991;
});

com.rpl.specter.t_com$rpl$specter76990.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter76990.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__21118__auto__,vals__21119__auto__,structure,next_fn__21120__auto__){
var self__ = this;
var this__21118__auto____$1 = this;
var next_fn = ((function (this__21118__auto____$1){
return (function (s__21121__auto__){
return next_fn__21120__auto__.call(null,vals__21119__auto__,s__21121__auto__);
});})(this__21118__auto____$1))
;
return com.rpl.specter.navs.srange_select.call(null,structure,self__.start,self__.end,next_fn);
});

com.rpl.specter.t_com$rpl$specter76990.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__21118__auto__,vals__21119__auto__,structure,next_fn__21120__auto__){
var self__ = this;
var this__21118__auto____$1 = this;
var next_fn = ((function (this__21118__auto____$1){
return (function (s__21121__auto__){
return next_fn__21120__auto__.call(null,vals__21119__auto__,s__21121__auto__);
});})(this__21118__auto____$1))
;
return com.rpl.specter.navs.srange_transform.call(null,structure,self__.start,self__.end,next_fn);
});

com.rpl.specter.t_com$rpl$specter76990.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"end","end",1372345569,null),new cljs.core.Symbol(null,"meta76991","meta76991",-1317078461,null)], null);
});

com.rpl.specter.t_com$rpl$specter76990.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter76990.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter76990";

com.rpl.specter.t_com$rpl$specter76990.cljs$lang$ctorPrWriter = (function (this__61556__auto__,writer__61557__auto__,opt__61558__auto__){
return cljs.core._write.call(null,writer__61557__auto__,"com.rpl.specter/t_com$rpl$specter76990");
});

com.rpl.specter.__GT_t_com$rpl$specter76990 = (function com$rpl$specter$__GT_t_com$rpl$specter76990(start__$1,end__$1,meta76991){
return (new com.rpl.specter.t_com$rpl$specter76990(start__$1,end__$1,meta76991));
});

}

return (new com.rpl.specter.t_com$rpl$specter76990(start,end,null));
}));


com.rpl.specter.continuous_subseqs_select_STAR_ = (function com$rpl$specter$continuous_subseqs_select_STAR_(pred,structure,next_fn){
return cljs.core.reduce.call(null,(function (curr__20042__auto__,p__76997){
var vec__76998 = p__76997;
var s = cljs.core.nth.call(null,vec__76998,(0),null);
var e = cljs.core.nth.call(null,vec__76998,(1),null);
var ret__20043__auto__ = com.rpl.specter.navs.srange_select.call(null,structure,s,e,next_fn);
if((ret__20043__auto__ === com.rpl.specter.NONE)){
return curr__20042__auto__;
} else {
if(cljs.core.reduced_QMARK_.call(null,ret__20043__auto__)){
return cljs.core.reduced.call(null,ret__20043__auto__);
} else {
return ret__20043__auto__;
}
}
}),com.rpl.specter.NONE,com.rpl.specter.impl.matching_ranges.call(null,structure,pred));
});

com.rpl.specter.continuous_subseqs_transform_STAR_ = (function com$rpl$specter$continuous_subseqs_transform_STAR_(pred,structure,next_fn){
return com.rpl.specter.impl.continuous_subseqs_transform_STAR_.call(null,pred,structure,next_fn);
});

/**
 * Navigates to every continuous subsequence of elements matching `pred`
 */
com.rpl.specter.continuous_subseqs = com.rpl.specter.impl.direct_nav_obj.call(null,(function (pred){
if(typeof com.rpl.specter.t_com$rpl$specter77001 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter77001 = (function (pred,meta77002){
this.pred = pred;
this.meta77002 = meta77002;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter77001.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77003,meta77002__$1){
var self__ = this;
var _77003__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter77001(self__.pred,meta77002__$1));
});

com.rpl.specter.t_com$rpl$specter77001.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77003){
var self__ = this;
var _77003__$1 = this;
return self__.meta77002;
});

com.rpl.specter.t_com$rpl$specter77001.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter77001.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__21118__auto__,vals__21119__auto__,structure,next_fn__21120__auto__){
var self__ = this;
var this__21118__auto____$1 = this;
var next_fn = ((function (this__21118__auto____$1){
return (function (s__21121__auto__){
return next_fn__21120__auto__.call(null,vals__21119__auto__,s__21121__auto__);
});})(this__21118__auto____$1))
;
return cljs.core.reduce.call(null,((function (next_fn,this__21118__auto____$1){
return (function (curr__20042__auto__,p__77004){
var vec__77005 = p__77004;
var s = cljs.core.nth.call(null,vec__77005,(0),null);
var e = cljs.core.nth.call(null,vec__77005,(1),null);
var ret__20043__auto__ = com.rpl.specter.navs.srange_select.call(null,structure,s,e,next_fn);
if((ret__20043__auto__ === com.rpl.specter.NONE)){
return curr__20042__auto__;
} else {
if(cljs.core.reduced_QMARK_.call(null,ret__20043__auto__)){
return cljs.core.reduced.call(null,ret__20043__auto__);
} else {
return ret__20043__auto__;
}
}
});})(next_fn,this__21118__auto____$1))
,com.rpl.specter.NONE,com.rpl.specter.impl.matching_ranges.call(null,structure,self__.pred));
});

com.rpl.specter.t_com$rpl$specter77001.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__21118__auto__,vals__21119__auto__,structure,next_fn__21120__auto__){
var self__ = this;
var this__21118__auto____$1 = this;
var next_fn = ((function (this__21118__auto____$1){
return (function (s__21121__auto__){
return next_fn__21120__auto__.call(null,vals__21119__auto__,s__21121__auto__);
});})(this__21118__auto____$1))
;
return com.rpl.specter.impl.continuous_subseqs_transform_STAR_.call(null,self__.pred,structure,next_fn);
});

com.rpl.specter.t_com$rpl$specter77001.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"meta77002","meta77002",-1803642099,null)], null);
});

com.rpl.specter.t_com$rpl$specter77001.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter77001.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter77001";

com.rpl.specter.t_com$rpl$specter77001.cljs$lang$ctorPrWriter = (function (this__61556__auto__,writer__61557__auto__,opt__61558__auto__){
return cljs.core._write.call(null,writer__61557__auto__,"com.rpl.specter/t_com$rpl$specter77001");
});

com.rpl.specter.__GT_t_com$rpl$specter77001 = (function com$rpl$specter$__GT_t_com$rpl$specter77001(pred__$1,meta77002){
return (new com.rpl.specter.t_com$rpl$specter77001(pred__$1,meta77002));
});

}

return (new com.rpl.specter.t_com$rpl$specter77001(pred,null));
}));


com.rpl.specter.BEGINNING_select_STAR_ = (function com$rpl$specter$BEGINNING_select_STAR_(structure,next_fn){
return next_fn.call(null,((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY));
});

com.rpl.specter.BEGINNING_transform_STAR_ = (function com$rpl$specter$BEGINNING_transform_STAR_(structure,next_fn){
if(typeof structure === 'string'){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_fn.call(null,"")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(structure)].join('');
} else {
var to_prepend = next_fn.call(null,cljs.core.PersistentVector.EMPTY);
return com.rpl.specter.navs.prepend_all.call(null,structure,to_prepend);
}
});

/**
 * Navigate to the empty subsequence before the first element of the collection.
 */
com.rpl.specter.BEGINNING = (function (){
if(typeof com.rpl.specter.t_com$rpl$specter77008 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter77008 = (function (meta77009){
this.meta77009 = meta77009;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter77008.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77010,meta77009__$1){
var self__ = this;
var _77010__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter77008(meta77009__$1));
});

com.rpl.specter.t_com$rpl$specter77008.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77010){
var self__ = this;
var _77010__$1 = this;
return self__.meta77009;
});

com.rpl.specter.t_com$rpl$specter77008.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter77008.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__21118__auto__,vals__21119__auto__,structure,next_fn__21120__auto__){
var self__ = this;
var this__21118__auto____$1 = this;
var next_fn = ((function (this__21118__auto____$1){
return (function (s__21121__auto__){
return next_fn__21120__auto__.call(null,vals__21119__auto__,s__21121__auto__);
});})(this__21118__auto____$1))
;
return next_fn.call(null,((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY));
});

com.rpl.specter.t_com$rpl$specter77008.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__21118__auto__,vals__21119__auto__,structure,next_fn__21120__auto__){
var self__ = this;
var this__21118__auto____$1 = this;
var next_fn = ((function (this__21118__auto____$1){
return (function (s__21121__auto__){
return next_fn__21120__auto__.call(null,vals__21119__auto__,s__21121__auto__);
});})(this__21118__auto____$1))
;
if(typeof structure === 'string'){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_fn.call(null,"")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(structure)].join('');
} else {
var to_prepend = next_fn.call(null,cljs.core.PersistentVector.EMPTY);
return com.rpl.specter.navs.prepend_all.call(null,structure,to_prepend);
}
});

com.rpl.specter.t_com$rpl$specter77008.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta77009","meta77009",1984669452,null)], null);
});

com.rpl.specter.t_com$rpl$specter77008.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter77008.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter77008";

com.rpl.specter.t_com$rpl$specter77008.cljs$lang$ctorPrWriter = (function (this__61556__auto__,writer__61557__auto__,opt__61558__auto__){
return cljs.core._write.call(null,writer__61557__auto__,"com.rpl.specter/t_com$rpl$specter77008");
});

com.rpl.specter.__GT_t_com$rpl$specter77008 = (function com$rpl$specter$__GT_t_com$rpl$specter77008(meta77009){
return (new com.rpl.specter.t_com$rpl$specter77008(meta77009));
});

}

return (new com.rpl.specter.t_com$rpl$specter77008(null));
})()
;


com.rpl.specter.END_select_STAR_ = (function com$rpl$specter$END_select_STAR_(structure,next_fn){
return next_fn.call(null,((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY));
});

com.rpl.specter.END_transform_STAR_ = (function com$rpl$specter$END_transform_STAR_(structure,next_fn){
if(typeof structure === 'string'){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(structure),cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_fn.call(null,""))].join('');
} else {
var to_append = next_fn.call(null,cljs.core.PersistentVector.EMPTY);
return com.rpl.specter.navs.append_all.call(null,structure,to_append);
}
});

/**
 * Navigate to the empty subsequence after the last element of the collection.
 */
com.rpl.specter.END = (function (){
if(typeof com.rpl.specter.t_com$rpl$specter77011 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter77011 = (function (meta77012){
this.meta77012 = meta77012;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter77011.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77013,meta77012__$1){
var self__ = this;
var _77013__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter77011(meta77012__$1));
});

com.rpl.specter.t_com$rpl$specter77011.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77013){
var self__ = this;
var _77013__$1 = this;
return self__.meta77012;
});

com.rpl.specter.t_com$rpl$specter77011.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter77011.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__21118__auto__,vals__21119__auto__,structure,next_fn__21120__auto__){
var self__ = this;
var this__21118__auto____$1 = this;
var next_fn = ((function (this__21118__auto____$1){
return (function (s__21121__auto__){
return next_fn__21120__auto__.call(null,vals__21119__auto__,s__21121__auto__);
});})(this__21118__auto____$1))
;
return next_fn.call(null,((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY));
});

com.rpl.specter.t_com$rpl$specter77011.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__21118__auto__,vals__21119__auto__,structure,next_fn__21120__auto__){
var self__ = this;
var this__21118__auto____$1 = this;
var next_fn = ((function (this__21118__auto____$1){
return (function (s__21121__auto__){
return next_fn__21120__auto__.call(null,vals__21119__auto__,s__21121__auto__);
});})(this__21118__auto____$1))
;
if(typeof structure === 'string'){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(structure),cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_fn.call(null,""))].join('');
} else {
var to_append = next_fn.call(null,cljs.core.PersistentVector.EMPTY);
return com.rpl.specter.navs.append_all.call(null,structure,to_append);
}
});

com.rpl.specter.t_com$rpl$specter77011.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta77012","meta77012",164975084,null)], null);
});

com.rpl.specter.t_com$rpl$specter77011.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter77011.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter77011";

com.rpl.specter.t_com$rpl$specter77011.cljs$lang$ctorPrWriter = (function (this__61556__auto__,writer__61557__auto__,opt__61558__auto__){
return cljs.core._write.call(null,writer__61557__auto__,"com.rpl.specter/t_com$rpl$specter77011");
});

com.rpl.specter.__GT_t_com$rpl$specter77011 = (function com$rpl$specter$__GT_t_com$rpl$specter77011(meta77012){
return (new com.rpl.specter.t_com$rpl$specter77011(meta77012));
});

}

return (new com.rpl.specter.t_com$rpl$specter77011(null));
})()
;


com.rpl.specter.NONE_ELEM_select_STAR_ = (function com$rpl$specter$NONE_ELEM_select_STAR_(structure,next_fn){
return next_fn.call(null,com.rpl.specter.NONE);
});

com.rpl.specter.NONE_ELEM_transform_STAR_ = (function com$rpl$specter$NONE_ELEM_transform_STAR_(structure,next_fn){
var newe = next_fn.call(null,com.rpl.specter.NONE);
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
if((structure == null)){
return cljs.core.PersistentHashSet.createAsIfByAssoc([newe]);
} else {
return cljs.core.conj.call(null,structure,newe);
}
}
});

/**
 * Navigate to 'void' elem in the set.
 *        For transformations - if result is not `NONE`,
 *        then add that value to the set.
 */
com.rpl.specter.NONE_ELEM = (function (){
if(typeof com.rpl.specter.t_com$rpl$specter77014 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter77014 = (function (meta77015){
this.meta77015 = meta77015;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter77014.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77016,meta77015__$1){
var self__ = this;
var _77016__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter77014(meta77015__$1));
});

com.rpl.specter.t_com$rpl$specter77014.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77016){
var self__ = this;
var _77016__$1 = this;
return self__.meta77015;
});

com.rpl.specter.t_com$rpl$specter77014.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter77014.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__21118__auto__,vals__21119__auto__,structure,next_fn__21120__auto__){
var self__ = this;
var this__21118__auto____$1 = this;
var next_fn = ((function (this__21118__auto____$1){
return (function (s__21121__auto__){
return next_fn__21120__auto__.call(null,vals__21119__auto__,s__21121__auto__);
});})(this__21118__auto____$1))
;
return next_fn.call(null,com.rpl.specter.NONE);
});

com.rpl.specter.t_com$rpl$specter77014.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__21118__auto__,vals__21119__auto__,structure,next_fn__21120__auto__){
var self__ = this;
var this__21118__auto____$1 = this;
var next_fn = ((function (this__21118__auto____$1){
return (function (s__21121__auto__){
return next_fn__21120__auto__.call(null,vals__21119__auto__,s__21121__auto__);
});})(this__21118__auto____$1))
;
var newe = next_fn.call(null,com.rpl.specter.NONE);
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
if((structure == null)){
return cljs.core.PersistentHashSet.createAsIfByAssoc([newe]);
} else {
return cljs.core.conj.call(null,structure,newe);
}
}
});

com.rpl.specter.t_com$rpl$specter77014.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta77015","meta77015",-802297727,null)], null);
});

com.rpl.specter.t_com$rpl$specter77014.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter77014.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter77014";

com.rpl.specter.t_com$rpl$specter77014.cljs$lang$ctorPrWriter = (function (this__61556__auto__,writer__61557__auto__,opt__61558__auto__){
return cljs.core._write.call(null,writer__61557__auto__,"com.rpl.specter/t_com$rpl$specter77014");
});

com.rpl.specter.__GT_t_com$rpl$specter77014 = (function com$rpl$specter$__GT_t_com$rpl$specter77014(meta77015){
return (new com.rpl.specter.t_com$rpl$specter77014(meta77015));
});

}

return (new com.rpl.specter.t_com$rpl$specter77014(null));
})()
;


com.rpl.specter.BEFORE_ELEM_select_STAR_ = (function com$rpl$specter$BEFORE_ELEM_select_STAR_(structure,next_fn){
return next_fn.call(null,com.rpl.specter.NONE);
});

com.rpl.specter.BEFORE_ELEM_transform_STAR_ = (function com$rpl$specter$BEFORE_ELEM_transform_STAR_(structure,next_fn){
var newe = next_fn.call(null,com.rpl.specter.NONE);
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
return com.rpl.specter.navs.prepend_one.call(null,structure,newe);
}
});

/**
 * Navigate to 'void' element before the sequence.
 *        For transformations – if result is not `NONE`,
 *        then prepend that value.
 */
com.rpl.specter.BEFORE_ELEM = (function (){
if(typeof com.rpl.specter.t_com$rpl$specter77017 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter77017 = (function (meta77018){
this.meta77018 = meta77018;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter77017.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77019,meta77018__$1){
var self__ = this;
var _77019__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter77017(meta77018__$1));
});

com.rpl.specter.t_com$rpl$specter77017.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77019){
var self__ = this;
var _77019__$1 = this;
return self__.meta77018;
});

com.rpl.specter.t_com$rpl$specter77017.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter77017.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__21118__auto__,vals__21119__auto__,structure,next_fn__21120__auto__){
var self__ = this;
var this__21118__auto____$1 = this;
var next_fn = ((function (this__21118__auto____$1){
return (function (s__21121__auto__){
return next_fn__21120__auto__.call(null,vals__21119__auto__,s__21121__auto__);
});})(this__21118__auto____$1))
;
return next_fn.call(null,com.rpl.specter.NONE);
});

com.rpl.specter.t_com$rpl$specter77017.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__21118__auto__,vals__21119__auto__,structure,next_fn__21120__auto__){
var self__ = this;
var this__21118__auto____$1 = this;
var next_fn = ((function (this__21118__auto____$1){
return (function (s__21121__auto__){
return next_fn__21120__auto__.call(null,vals__21119__auto__,s__21121__auto__);
});})(this__21118__auto____$1))
;
var newe = next_fn.call(null,com.rpl.specter.NONE);
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
return com.rpl.specter.navs.prepend_one.call(null,structure,newe);
}
});

com.rpl.specter.t_com$rpl$specter77017.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta77018","meta77018",430051605,null)], null);
});

com.rpl.specter.t_com$rpl$specter77017.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter77017.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter77017";

com.rpl.specter.t_com$rpl$specter77017.cljs$lang$ctorPrWriter = (function (this__61556__auto__,writer__61557__auto__,opt__61558__auto__){
return cljs.core._write.call(null,writer__61557__auto__,"com.rpl.specter/t_com$rpl$specter77017");
});

com.rpl.specter.__GT_t_com$rpl$specter77017 = (function com$rpl$specter$__GT_t_com$rpl$specter77017(meta77018){
return (new com.rpl.specter.t_com$rpl$specter77017(meta77018));
});

}

return (new com.rpl.specter.t_com$rpl$specter77017(null));
})()
;


com.rpl.specter.AFTER_ELEM_select_STAR_ = (function com$rpl$specter$AFTER_ELEM_select_STAR_(structure,next_fn){
return next_fn.call(null,com.rpl.specter.NONE);
});

com.rpl.specter.AFTER_ELEM_transform_STAR_ = (function com$rpl$specter$AFTER_ELEM_transform_STAR_(structure,next_fn){
var newe = next_fn.call(null,com.rpl.specter.NONE);
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
return com.rpl.specter.navs.append_one.call(null,structure,newe);
}
});

/**
 * Navigate to 'void' element after the sequence.
 *        For transformations – if result is not `NONE`,
 *        then append that value.
 */
com.rpl.specter.AFTER_ELEM = (function (){
if(typeof com.rpl.specter.t_com$rpl$specter77020 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter77020 = (function (meta77021){
this.meta77021 = meta77021;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter77020.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77022,meta77021__$1){
var self__ = this;
var _77022__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter77020(meta77021__$1));
});

com.rpl.specter.t_com$rpl$specter77020.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77022){
var self__ = this;
var _77022__$1 = this;
return self__.meta77021;
});

com.rpl.specter.t_com$rpl$specter77020.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter77020.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__21118__auto__,vals__21119__auto__,structure,next_fn__21120__auto__){
var self__ = this;
var this__21118__auto____$1 = this;
var next_fn = ((function (this__21118__auto____$1){
return (function (s__21121__auto__){
return next_fn__21120__auto__.call(null,vals__21119__auto__,s__21121__auto__);
});})(this__21118__auto____$1))
;
return next_fn.call(null,com.rpl.specter.NONE);
});

com.rpl.specter.t_com$rpl$specter77020.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__21118__auto__,vals__21119__auto__,structure,next_fn__21120__auto__){
var self__ = this;
var this__21118__auto____$1 = this;
var next_fn = ((function (this__21118__auto____$1){
return (function (s__21121__auto__){
return next_fn__21120__auto__.call(null,vals__21119__auto__,s__21121__auto__);
});})(this__21118__auto____$1))
;
var newe = next_fn.call(null,com.rpl.specter.NONE);
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
return com.rpl.specter.navs.append_one.call(null,structure,newe);
}
});

com.rpl.specter.t_com$rpl$specter77020.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta77021","meta77021",815486464,null)], null);
});

com.rpl.specter.t_com$rpl$specter77020.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter77020.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter77020";

com.rpl.specter.t_com$rpl$specter77020.cljs$lang$ctorPrWriter = (function (this__61556__auto__,writer__61557__auto__,opt__61558__auto__){
return cljs.core._write.call(null,writer__61557__auto__,"com.rpl.specter/t_com$rpl$specter77020");
});

com.rpl.specter.__GT_t_com$rpl$specter77020 = (function com$rpl$specter$__GT_t_com$rpl$specter77020(meta77021){
return (new com.rpl.specter.t_com$rpl$specter77020(meta77021));
});

}

return (new com.rpl.specter.t_com$rpl$specter77020(null));
})()
;


com.rpl.specter.subset_select_STAR_ = (function com$rpl$specter$subset_select_STAR_(aset,structure,next_fn){
return next_fn.call(null,clojure.set.intersection.call(null,structure,aset));
});

com.rpl.specter.subset_transform_STAR_ = (function com$rpl$specter$subset_transform_STAR_(aset,structure,next_fn){
var subset = clojure.set.intersection.call(null,structure,aset);
var newset = next_fn.call(null,subset);
return clojure.set.union.call(null,clojure.set.difference.call(null,structure,subset),newset);
});

/**
 * Navigates to the specified subset (by taking an intersection).
 *        In a transform, that subset in the original set is changed to the
 *        new value of the subset.
 */
com.rpl.specter.subset = com.rpl.specter.impl.direct_nav_obj.call(null,(function (aset){
if(typeof com.rpl.specter.t_com$rpl$specter77023 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter77023 = (function (aset,meta77024){
this.aset = aset;
this.meta77024 = meta77024;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter77023.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77025,meta77024__$1){
var self__ = this;
var _77025__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter77023(self__.aset,meta77024__$1));
});

com.rpl.specter.t_com$rpl$specter77023.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77025){
var self__ = this;
var _77025__$1 = this;
return self__.meta77024;
});

com.rpl.specter.t_com$rpl$specter77023.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter77023.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__21118__auto__,vals__21119__auto__,structure,next_fn__21120__auto__){
var self__ = this;
var this__21118__auto____$1 = this;
var next_fn = ((function (this__21118__auto____$1){
return (function (s__21121__auto__){
return next_fn__21120__auto__.call(null,vals__21119__auto__,s__21121__auto__);
});})(this__21118__auto____$1))
;
return next_fn.call(null,clojure.set.intersection.call(null,structure,self__.aset));
});

com.rpl.specter.t_com$rpl$specter77023.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__21118__auto__,vals__21119__auto__,structure,next_fn__21120__auto__){
var self__ = this;
var this__21118__auto____$1 = this;
var next_fn = ((function (this__21118__auto____$1){
return (function (s__21121__auto__){
return next_fn__21120__auto__.call(null,vals__21119__auto__,s__21121__auto__);
});})(this__21118__auto____$1))
;
var subset = clojure.set.intersection.call(null,structure,self__.aset);
var newset = next_fn.call(null,subset);
return clojure.set.union.call(null,clojure.set.difference.call(null,structure,subset),newset);
});

com.rpl.specter.t_com$rpl$specter77023.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"aset","aset",900773178,null),new cljs.core.Symbol(null,"meta77024","meta77024",-1837528036,null)], null);
});

com.rpl.specter.t_com$rpl$specter77023.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter77023.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter77023";

com.rpl.specter.t_com$rpl$specter77023.cljs$lang$ctorPrWriter = (function (this__61556__auto__,writer__61557__auto__,opt__61558__auto__){
return cljs.core._write.call(null,writer__61557__auto__,"com.rpl.specter/t_com$rpl$specter77023");
});

com.rpl.specter.__GT_t_com$rpl$specter77023 = (function com$rpl$specter$__GT_t_com$rpl$specter77023(aset__$1,meta77024){
return (new com.rpl.specter.t_com$rpl$specter77023(aset__$1,meta77024));
});

}

return (new com.rpl.specter.t_com$rpl$specter77023(aset,null));
}));


com.rpl.specter.submap_select_STAR_ = (function com$rpl$specter$submap_select_STAR_(m_keys,structure,next_fn){
return next_fn.call(null,cljs.core.select_keys.call(null,structure,m_keys));
});

com.rpl.specter.submap_transform_STAR_ = (function com$rpl$specter$submap_transform_STAR_(m_keys,structure,next_fn){
var submap = cljs.core.select_keys.call(null,structure,m_keys);
var newmap = next_fn.call(null,submap);
return cljs.core.merge.call(null,cljs.core.reduce.call(null,cljs.core.dissoc,structure,m_keys),newmap);
});

/**
 * Navigates to the specified submap (using select-keys).
 *        In a transform, that submap in the original map is changed to the new
 *        value of the submap.
 */
com.rpl.specter.submap = com.rpl.specter.impl.direct_nav_obj.call(null,(function (m_keys){
if(typeof com.rpl.specter.t_com$rpl$specter77026 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter77026 = (function (m_keys,meta77027){
this.m_keys = m_keys;
this.meta77027 = meta77027;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter77026.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77028,meta77027__$1){
var self__ = this;
var _77028__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter77026(self__.m_keys,meta77027__$1));
});

com.rpl.specter.t_com$rpl$specter77026.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77028){
var self__ = this;
var _77028__$1 = this;
return self__.meta77027;
});

com.rpl.specter.t_com$rpl$specter77026.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter77026.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__21118__auto__,vals__21119__auto__,structure,next_fn__21120__auto__){
var self__ = this;
var this__21118__auto____$1 = this;
var next_fn = ((function (this__21118__auto____$1){
return (function (s__21121__auto__){
return next_fn__21120__auto__.call(null,vals__21119__auto__,s__21121__auto__);
});})(this__21118__auto____$1))
;
return next_fn.call(null,cljs.core.select_keys.call(null,structure,self__.m_keys));
});

com.rpl.specter.t_com$rpl$specter77026.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__21118__auto__,vals__21119__auto__,structure,next_fn__21120__auto__){
var self__ = this;
var this__21118__auto____$1 = this;
var next_fn = ((function (this__21118__auto____$1){
return (function (s__21121__auto__){
return next_fn__21120__auto__.call(null,vals__21119__auto__,s__21121__auto__);
});})(this__21118__auto____$1))
;
var submap = cljs.core.select_keys.call(null,structure,self__.m_keys);
var newmap = next_fn.call(null,submap);
return cljs.core.merge.call(null,cljs.core.reduce.call(null,cljs.core.dissoc,structure,self__.m_keys),newmap);
});

com.rpl.specter.t_com$rpl$specter77026.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m-keys","m-keys",-197459035,null),new cljs.core.Symbol(null,"meta77027","meta77027",-1082319676,null)], null);
});

com.rpl.specter.t_com$rpl$specter77026.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter77026.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter77026";

com.rpl.specter.t_com$rpl$specter77026.cljs$lang$ctorPrWriter = (function (this__61556__auto__,writer__61557__auto__,opt__61558__auto__){
return cljs.core._write.call(null,writer__61557__auto__,"com.rpl.specter/t_com$rpl$specter77026");
});

com.rpl.specter.__GT_t_com$rpl$specter77026 = (function com$rpl$specter$__GT_t_com$rpl$specter77026(m_keys__$1,meta77027){
return (new com.rpl.specter.t_com$rpl$specter77026(m_keys__$1,meta77027));
});

}

return (new com.rpl.specter.t_com$rpl$specter77026(m_keys,null));
}));


com.rpl.specter.walker_select_STAR_ = (function com$rpl$specter$walker_select_STAR_(afn,structure,next_fn){
return com.rpl.specter.impl.walk_select.call(null,afn,next_fn,structure);
});

com.rpl.specter.walker_transform_STAR_ = (function com$rpl$specter$walker_transform_STAR_(afn,structure,next_fn){
return com.rpl.specter.impl.walk_until.call(null,afn,next_fn,structure);
});

/**
 * Using clojure.walk, navigate the data structure until reaching
 *        a value for which `afn` returns truthy.
 */
com.rpl.specter.walker = com.rpl.specter.impl.direct_nav_obj.call(null,(function (afn){
if(typeof com.rpl.specter.t_com$rpl$specter77029 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter77029 = (function (afn,meta77030){
this.afn = afn;
this.meta77030 = meta77030;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter77029.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77031,meta77030__$1){
var self__ = this;
var _77031__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter77029(self__.afn,meta77030__$1));
});

com.rpl.specter.t_com$rpl$specter77029.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77031){
var self__ = this;
var _77031__$1 = this;
return self__.meta77030;
});

com.rpl.specter.t_com$rpl$specter77029.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter77029.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__21118__auto__,vals__21119__auto__,structure,next_fn__21120__auto__){
var self__ = this;
var this__21118__auto____$1 = this;
var next_fn = ((function (this__21118__auto____$1){
return (function (s__21121__auto__){
return next_fn__21120__auto__.call(null,vals__21119__auto__,s__21121__auto__);
});})(this__21118__auto____$1))
;
return com.rpl.specter.impl.walk_select.call(null,self__.afn,next_fn,structure);
});

com.rpl.specter.t_com$rpl$specter77029.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__21118__auto__,vals__21119__auto__,structure,next_fn__21120__auto__){
var self__ = this;
var this__21118__auto____$1 = this;
var next_fn = ((function (this__21118__auto____$1){
return (function (s__21121__auto__){
return next_fn__21120__auto__.call(null,vals__21119__auto__,s__21121__auto__);
});})(this__21118__auto____$1))
;
return com.rpl.specter.impl.walk_until.call(null,self__.afn,next_fn,structure);
});

com.rpl.specter.t_com$rpl$specter77029.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta77030","meta77030",1120825531,null)], null);
});

com.rpl.specter.t_com$rpl$specter77029.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter77029.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter77029";

com.rpl.specter.t_com$rpl$specter77029.cljs$lang$ctorPrWriter = (function (this__61556__auto__,writer__61557__auto__,opt__61558__auto__){
return cljs.core._write.call(null,writer__61557__auto__,"com.rpl.specter/t_com$rpl$specter77029");
});

com.rpl.specter.__GT_t_com$rpl$specter77029 = (function com$rpl$specter$__GT_t_com$rpl$specter77029(afn__$1,meta77030){
return (new com.rpl.specter.t_com$rpl$specter77029(afn__$1,meta77030));
});

}

return (new com.rpl.specter.t_com$rpl$specter77029(afn,null));
}));


com.rpl.specter.codewalker_select_STAR_ = (function com$rpl$specter$codewalker_select_STAR_(afn,structure,next_fn){
return com.rpl.specter.impl.walk_select.call(null,afn,next_fn,structure);
});

com.rpl.specter.codewalker_transform_STAR_ = (function com$rpl$specter$codewalker_transform_STAR_(afn,structure,next_fn){
return com.rpl.specter.impl.codewalk_until.call(null,afn,next_fn,structure);
});

/**
 * Like `walker` but maintains metadata of any forms traversed.
 */
com.rpl.specter.codewalker = com.rpl.specter.impl.direct_nav_obj.call(null,(function (afn){
if(typeof com.rpl.specter.t_com$rpl$specter77032 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter77032 = (function (afn,meta77033){
this.afn = afn;
this.meta77033 = meta77033;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter77032.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77034,meta77033__$1){
var self__ = this;
var _77034__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter77032(self__.afn,meta77033__$1));
});

com.rpl.specter.t_com$rpl$specter77032.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77034){
var self__ = this;
var _77034__$1 = this;
return self__.meta77033;
});

com.rpl.specter.t_com$rpl$specter77032.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter77032.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__21118__auto__,vals__21119__auto__,structure,next_fn__21120__auto__){
var self__ = this;
var this__21118__auto____$1 = this;
var next_fn = ((function (this__21118__auto____$1){
return (function (s__21121__auto__){
return next_fn__21120__auto__.call(null,vals__21119__auto__,s__21121__auto__);
});})(this__21118__auto____$1))
;
return com.rpl.specter.impl.walk_select.call(null,self__.afn,next_fn,structure);
});

com.rpl.specter.t_com$rpl$specter77032.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__21118__auto__,vals__21119__auto__,structure,next_fn__21120__auto__){
var self__ = this;
var this__21118__auto____$1 = this;
var next_fn = ((function (this__21118__auto____$1){
return (function (s__21121__auto__){
return next_fn__21120__auto__.call(null,vals__21119__auto__,s__21121__auto__);
});})(this__21118__auto____$1))
;
return com.rpl.specter.impl.codewalk_until.call(null,self__.afn,next_fn,structure);
});

com.rpl.specter.t_com$rpl$specter77032.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta77033","meta77033",1037899030,null)], null);
});

com.rpl.specter.t_com$rpl$specter77032.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter77032.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter77032";

com.rpl.specter.t_com$rpl$specter77032.cljs$lang$ctorPrWriter = (function (this__61556__auto__,writer__61557__auto__,opt__61558__auto__){
return cljs.core._write.call(null,writer__61557__auto__,"com.rpl.specter/t_com$rpl$specter77032");
});

com.rpl.specter.__GT_t_com$rpl$specter77032 = (function com$rpl$specter$__GT_t_com$rpl$specter77032(afn__$1,meta77033){
return (new com.rpl.specter.t_com$rpl$specter77032(afn__$1,meta77033));
});

}

return (new com.rpl.specter.t_com$rpl$specter77032(afn,null));
}));
/**
 * Navigates to a sequence that contains the results of (select ...),
 *   but is a view to the original structure that can be transformed.
 * 
 *   Requires that the input navigators will walk the structure's
 *   children in the same order when executed on "select" and then
 *   "transform".
 * 
 *   If transformed sequence is smaller than input sequence, missing entries
 *   will be filled in with NONE, triggering removal if supported by that navigator.
 */
com.rpl.specter.subselect = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function() { 
var G__77038__delegate = function (path){
var builder__21883__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late){
if(typeof com.rpl.specter.t_com$rpl$specter77035 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter77035 = (function (path,late,meta77036){
this.path = path;
this.late = late;
this.meta77036 = meta77036;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter77035.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77037,meta77036__$1){
var self__ = this;
var _77037__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter77035(self__.path,self__.late,meta77036__$1));
});

com.rpl.specter.t_com$rpl$specter77035.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77037){
var self__ = this;
var _77037__$1 = this;
return self__.meta77036;
});

com.rpl.specter.t_com$rpl$specter77035.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter77035.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__21118__auto__,vals__21119__auto__,structure,next_fn__21120__auto__){
var self__ = this;
var this__21118__auto____$1 = this;
var next_fn = ((function (this__21118__auto____$1){
return (function (s__21121__auto__){
return next_fn__21120__auto__.call(null,vals__21119__auto__,s__21121__auto__);
});})(this__21118__auto____$1))
;
return next_fn.call(null,com.rpl.specter.compiled_select.call(null,self__.late,structure));
});

com.rpl.specter.t_com$rpl$specter77035.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__21118__auto__,vals__21119__auto__,structure,next_fn__21120__auto__){
var self__ = this;
var this__21118__auto____$1 = this;
var next_fn = ((function (this__21118__auto____$1){
return (function (s__21121__auto__){
return next_fn__21120__auto__.call(null,vals__21119__auto__,s__21121__auto__);
});})(this__21118__auto____$1))
;
var select_result = com.rpl.specter.compiled_select.call(null,self__.late,structure);
var transformed = next_fn.call(null,select_result);
var values_to_insert = com.rpl.specter.impl.mutable_cell.call(null,transformed);
return com.rpl.specter.compiled_transform.call(null,self__.late,((function (select_result,transformed,values_to_insert,next_fn,this__21118__auto____$1){
return (function (_){
var vs = com.rpl.specter.impl.get_cell.call(null,values_to_insert);
if(cljs.core.truth_(vs)){
com.rpl.specter.impl.update_cell_BANG_.call(null,values_to_insert,cljs.core.next);

return cljs.core.first.call(null,vs);
} else {
return com.rpl.specter.NONE;
}
});})(select_result,transformed,values_to_insert,next_fn,this__21118__auto____$1))
,structure);
});

com.rpl.specter.t_com$rpl$specter77035.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta77036","meta77036",-1120999862,null)], null);
});

com.rpl.specter.t_com$rpl$specter77035.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter77035.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter77035";

com.rpl.specter.t_com$rpl$specter77035.cljs$lang$ctorPrWriter = (function (this__61556__auto__,writer__61557__auto__,opt__61558__auto__){
return cljs.core._write.call(null,writer__61557__auto__,"com.rpl.specter/t_com$rpl$specter77035");
});

com.rpl.specter.__GT_t_com$rpl$specter77035 = (function com$rpl$specter$__GT_t_com$rpl$specter77035(path__$1,late__$1,meta77036){
return (new com.rpl.specter.t_com$rpl$specter77035(path__$1,late__$1,meta77036));
});

}

return (new com.rpl.specter.t_com$rpl$specter77035(path,late,null));
}));
var curr_params__21884__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__21884__auto__)){
return cljs.core.apply.call(null,builder__21883__auto__,curr_params__21884__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__21883__auto__,curr_params__21884__auto__);
}
};
var G__77038 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__77039__i = 0, G__77039__a = new Array(arguments.length -  0);
while (G__77039__i < G__77039__a.length) {G__77039__a[G__77039__i] = arguments[G__77039__i + 0]; ++G__77039__i;}
  path = new cljs.core.IndexedSeq(G__77039__a,0,null);
} 
return G__77038__delegate.call(this,path);};
G__77038.cljs$lang$maxFixedArity = 0;
G__77038.cljs$lang$applyTo = (function (arglist__77040){
var path = cljs.core.seq(arglist__77040);
return G__77038__delegate(path);
});
G__77038.cljs$core$IFn$_invoke$arity$variadic = G__77038__delegate;
return G__77038;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigate to the specified keys one after another. If navigate to NONE,
 *           that element is removed from the map or vector.
 */
com.rpl.specter.keypath = com.rpl.specter.eachnav.call(null,com.rpl.specter.navs.keypath_STAR_);
/**
 * Navigate to the specified keys one after another, only if they exist
 *           in the data structure. If navigate to NONE, that element is removed
 *           from the map or vector.
 */
com.rpl.specter.must = com.rpl.specter.eachnav.call(null,com.rpl.specter.navs.must_STAR_);
/**
 * Navigate to the specified indices one after another.If navigate to
 *          NONE, that element is removed from the sequence.
 */
com.rpl.specter.nthpath = com.rpl.specter.eachnav.call(null,com.rpl.specter.navs.nthpath_STAR_);
/**
 * Navigates to result of running `afn` on the currently navigated value.
 */
com.rpl.specter.view = com.rpl.specter.impl.direct_nav_obj.call(null,(function (afn){
if(typeof com.rpl.specter.t_com$rpl$specter77041 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter77041 = (function (afn,meta77042){
this.afn = afn;
this.meta77042 = meta77042;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter77041.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77043,meta77042__$1){
var self__ = this;
var _77043__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter77041(self__.afn,meta77042__$1));
});

com.rpl.specter.t_com$rpl$specter77041.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77043){
var self__ = this;
var _77043__$1 = this;
return self__.meta77042;
});

com.rpl.specter.t_com$rpl$specter77041.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter77041.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return next_fn.call(null,vals,self__.afn.call(null,structure));
});

com.rpl.specter.t_com$rpl$specter77041.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return next_fn.call(null,vals,self__.afn.call(null,structure));
});

com.rpl.specter.t_com$rpl$specter77041.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta77042","meta77042",-1925896961,null)], null);
});

com.rpl.specter.t_com$rpl$specter77041.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter77041.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter77041";

com.rpl.specter.t_com$rpl$specter77041.cljs$lang$ctorPrWriter = (function (this__61556__auto__,writer__61557__auto__,opt__61558__auto__){
return cljs.core._write.call(null,writer__61557__auto__,"com.rpl.specter/t_com$rpl$specter77041");
});

com.rpl.specter.__GT_t_com$rpl$specter77041 = (function com$rpl$specter$__GT_t_com$rpl$specter77041(afn__$1,meta77042){
return (new com.rpl.specter.t_com$rpl$specter77041(afn__$1,meta77042));
});

}

return (new com.rpl.specter.t_com$rpl$specter77041(afn,null));
}));


com.rpl.specter.parser_select_STAR_ = (function com$rpl$specter$parser_select_STAR_(parse_fn,unparse_fn,structure,next_fn){
return next_fn.call(null,parse_fn.call(null,structure));
});

com.rpl.specter.parser_transform_STAR_ = (function com$rpl$specter$parser_transform_STAR_(parse_fn,unparse_fn,structure,next_fn){
return unparse_fn.call(null,next_fn.call(null,parse_fn.call(null,structure)));
});

/**
 * Navigate to the result of running `parse-fn` on the value. For
 *        transforms, the transformed value then has `unparse-fn` run on
 *        it to get the final value at this point.
 */
com.rpl.specter.parser = com.rpl.specter.impl.direct_nav_obj.call(null,(function (parse_fn,unparse_fn){
if(typeof com.rpl.specter.t_com$rpl$specter77044 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter77044 = (function (parse_fn,unparse_fn,meta77045){
this.parse_fn = parse_fn;
this.unparse_fn = unparse_fn;
this.meta77045 = meta77045;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter77044.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77046,meta77045__$1){
var self__ = this;
var _77046__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter77044(self__.parse_fn,self__.unparse_fn,meta77045__$1));
});

com.rpl.specter.t_com$rpl$specter77044.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77046){
var self__ = this;
var _77046__$1 = this;
return self__.meta77045;
});

com.rpl.specter.t_com$rpl$specter77044.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter77044.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__21118__auto__,vals__21119__auto__,structure,next_fn__21120__auto__){
var self__ = this;
var this__21118__auto____$1 = this;
var next_fn = ((function (this__21118__auto____$1){
return (function (s__21121__auto__){
return next_fn__21120__auto__.call(null,vals__21119__auto__,s__21121__auto__);
});})(this__21118__auto____$1))
;
return next_fn.call(null,self__.parse_fn.call(null,structure));
});

com.rpl.specter.t_com$rpl$specter77044.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__21118__auto__,vals__21119__auto__,structure,next_fn__21120__auto__){
var self__ = this;
var this__21118__auto____$1 = this;
var next_fn = ((function (this__21118__auto____$1){
return (function (s__21121__auto__){
return next_fn__21120__auto__.call(null,vals__21119__auto__,s__21121__auto__);
});})(this__21118__auto____$1))
;
return self__.unparse_fn.call(null,next_fn.call(null,self__.parse_fn.call(null,structure)));
});

com.rpl.specter.t_com$rpl$specter77044.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parse-fn","parse-fn",-836029424,null),new cljs.core.Symbol(null,"unparse-fn","unparse-fn",407187734,null),new cljs.core.Symbol(null,"meta77045","meta77045",1549586453,null)], null);
});

com.rpl.specter.t_com$rpl$specter77044.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter77044.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter77044";

com.rpl.specter.t_com$rpl$specter77044.cljs$lang$ctorPrWriter = (function (this__61556__auto__,writer__61557__auto__,opt__61558__auto__){
return cljs.core._write.call(null,writer__61557__auto__,"com.rpl.specter/t_com$rpl$specter77044");
});

com.rpl.specter.__GT_t_com$rpl$specter77044 = (function com$rpl$specter$__GT_t_com$rpl$specter77044(parse_fn__$1,unparse_fn__$1,meta77045){
return (new com.rpl.specter.t_com$rpl$specter77044(parse_fn__$1,unparse_fn__$1,meta77045));
});

}

return (new com.rpl.specter.t_com$rpl$specter77044(parse_fn,unparse_fn,null));
}));


com.rpl.specter.ATOM_select_STAR_ = (function com$rpl$specter$ATOM_select_STAR_(structure,next_fn){
return next_fn.call(null,cljs.core.deref.call(null,structure));
});

com.rpl.specter.ATOM_transform_STAR_ = (function com$rpl$specter$ATOM_transform_STAR_(structure,next_fn){
cljs.core.swap_BANG_.call(null,structure,next_fn);

return structure;
});

/**
 * Navigates to atom value.
 */
com.rpl.specter.ATOM = (function (){
if(typeof com.rpl.specter.t_com$rpl$specter77047 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter77047 = (function (meta77048){
this.meta77048 = meta77048;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter77047.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77049,meta77048__$1){
var self__ = this;
var _77049__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter77047(meta77048__$1));
});

com.rpl.specter.t_com$rpl$specter77047.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77049){
var self__ = this;
var _77049__$1 = this;
return self__.meta77048;
});

com.rpl.specter.t_com$rpl$specter77047.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter77047.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__21118__auto__,vals__21119__auto__,structure,next_fn__21120__auto__){
var self__ = this;
var this__21118__auto____$1 = this;
var next_fn = ((function (this__21118__auto____$1){
return (function (s__21121__auto__){
return next_fn__21120__auto__.call(null,vals__21119__auto__,s__21121__auto__);
});})(this__21118__auto____$1))
;
return next_fn.call(null,cljs.core.deref.call(null,structure));
});

com.rpl.specter.t_com$rpl$specter77047.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__21118__auto__,vals__21119__auto__,structure,next_fn__21120__auto__){
var self__ = this;
var this__21118__auto____$1 = this;
var next_fn = ((function (this__21118__auto____$1){
return (function (s__21121__auto__){
return next_fn__21120__auto__.call(null,vals__21119__auto__,s__21121__auto__);
});})(this__21118__auto____$1))
;
cljs.core.swap_BANG_.call(null,structure,next_fn);

return structure;
});

com.rpl.specter.t_com$rpl$specter77047.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta77048","meta77048",-1528211186,null)], null);
});

com.rpl.specter.t_com$rpl$specter77047.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter77047.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter77047";

com.rpl.specter.t_com$rpl$specter77047.cljs$lang$ctorPrWriter = (function (this__61556__auto__,writer__61557__auto__,opt__61558__auto__){
return cljs.core._write.call(null,writer__61557__auto__,"com.rpl.specter/t_com$rpl$specter77047");
});

com.rpl.specter.__GT_t_com$rpl$specter77047 = (function com$rpl$specter$__GT_t_com$rpl$specter77047(meta77048){
return (new com.rpl.specter.t_com$rpl$specter77047(meta77048));
});

}

return (new com.rpl.specter.t_com$rpl$specter77047(null));
})()
;
/**
 * Filters the current value based on whether a path finds anything.
 *   e.g. (selected? :vals ALL even?) keeps the current element only if an
 *   even number exists for the :vals key.
 */
com.rpl.specter.selected_QMARK_ = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function() { 
var G__77055__delegate = function (path){
var temp__6736__auto__ = com.rpl.specter.navs.extract_basic_filter_fn.call(null,path);
if(cljs.core.truth_(temp__6736__auto__)){
var afn = temp__6736__auto__;
return afn;
} else {
var builder__21883__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,((function (temp__6736__auto__){
return (function (late){
if(typeof com.rpl.specter.t_com$rpl$specter77052 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter77052 = (function (path,temp__6736__auto__,late,meta77053){
this.path = path;
this.temp__6736__auto__ = temp__6736__auto__;
this.late = late;
this.meta77053 = meta77053;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter77052.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (temp__6736__auto__){
return (function (_77054,meta77053__$1){
var self__ = this;
var _77054__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter77052(self__.path,self__.temp__6736__auto__,self__.late,meta77053__$1));
});})(temp__6736__auto__))
;

com.rpl.specter.t_com$rpl$specter77052.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (temp__6736__auto__){
return (function (_77054){
var self__ = this;
var _77054__$1 = this;
return self__.meta77053;
});})(temp__6736__auto__))
;

com.rpl.specter.t_com$rpl$specter77052.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter77052.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = ((function (temp__6736__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_select.call(null,((function (this$__$1,temp__6736__auto__){
return (function (p1__77050_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_.call(null,self__.late,vals,p1__77050_SHARP_);
});})(this$__$1,temp__6736__auto__))
,vals,structure,next_fn);
});})(temp__6736__auto__))
;

com.rpl.specter.t_com$rpl$specter77052.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = ((function (temp__6736__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_transform.call(null,((function (this$__$1,temp__6736__auto__){
return (function (p1__77051_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_.call(null,self__.late,vals,p1__77051_SHARP_);
});})(this$__$1,temp__6736__auto__))
,vals,structure,next_fn);
});})(temp__6736__auto__))
;

com.rpl.specter.t_com$rpl$specter77052.getBasis = ((function (temp__6736__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"temp__6736__auto__","temp__6736__auto__",-1815609319,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta77053","meta77053",-1307798399,null)], null);
});})(temp__6736__auto__))
;

com.rpl.specter.t_com$rpl$specter77052.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter77052.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter77052";

com.rpl.specter.t_com$rpl$specter77052.cljs$lang$ctorPrWriter = ((function (temp__6736__auto__){
return (function (this__61556__auto__,writer__61557__auto__,opt__61558__auto__){
return cljs.core._write.call(null,writer__61557__auto__,"com.rpl.specter/t_com$rpl$specter77052");
});})(temp__6736__auto__))
;

com.rpl.specter.__GT_t_com$rpl$specter77052 = ((function (temp__6736__auto__){
return (function com$rpl$specter$__GT_t_com$rpl$specter77052(path__$1,temp__6736__auto____$1,late__$1,meta77053){
return (new com.rpl.specter.t_com$rpl$specter77052(path__$1,temp__6736__auto____$1,late__$1,meta77053));
});})(temp__6736__auto__))
;

}

return (new com.rpl.specter.t_com$rpl$specter77052(path,temp__6736__auto__,late,null));
});})(temp__6736__auto__))
);
var curr_params__21884__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__21884__auto__)){
return cljs.core.apply.call(null,builder__21883__auto__,curr_params__21884__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__21883__auto__,curr_params__21884__auto__);
}
}
};
var G__77055 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__77056__i = 0, G__77056__a = new Array(arguments.length -  0);
while (G__77056__i < G__77056__a.length) {G__77056__a[G__77056__i] = arguments[G__77056__i + 0]; ++G__77056__i;}
  path = new cljs.core.IndexedSeq(G__77056__a,0,null);
} 
return G__77055__delegate.call(this,path);};
G__77055.cljs$lang$maxFixedArity = 0;
G__77055.cljs$lang$applyTo = (function (arglist__77057){
var path = cljs.core.seq(arglist__77057);
return G__77055__delegate(path);
});
G__77055.cljs$core$IFn$_invoke$arity$variadic = G__77055__delegate;
return G__77055;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
com.rpl.specter.not_selected_QMARK_ = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function() { 
var G__77063__delegate = function (path){
var temp__6736__auto__ = com.rpl.specter.navs.extract_basic_filter_fn.call(null,path);
if(cljs.core.truth_(temp__6736__auto__)){
var afn = temp__6736__auto__;
return ((function (afn,temp__6736__auto__){
return (function (s){
return cljs.core.not.call(null,afn.call(null,s));
});
;})(afn,temp__6736__auto__))
} else {
var builder__21883__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,((function (temp__6736__auto__){
return (function (late){
if(typeof com.rpl.specter.t_com$rpl$specter77060 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter77060 = (function (path,temp__6736__auto__,late,meta77061){
this.path = path;
this.temp__6736__auto__ = temp__6736__auto__;
this.late = late;
this.meta77061 = meta77061;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter77060.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (temp__6736__auto__){
return (function (_77062,meta77061__$1){
var self__ = this;
var _77062__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter77060(self__.path,self__.temp__6736__auto__,self__.late,meta77061__$1));
});})(temp__6736__auto__))
;

com.rpl.specter.t_com$rpl$specter77060.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (temp__6736__auto__){
return (function (_77062){
var self__ = this;
var _77062__$1 = this;
return self__.meta77061;
});})(temp__6736__auto__))
;

com.rpl.specter.t_com$rpl$specter77060.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter77060.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = ((function (temp__6736__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_select.call(null,((function (this$__$1,temp__6736__auto__){
return (function (p1__77058_SHARP_){
return com.rpl.specter.navs.not_selected_QMARK__STAR_.call(null,self__.late,vals,p1__77058_SHARP_);
});})(this$__$1,temp__6736__auto__))
,vals,structure,next_fn);
});})(temp__6736__auto__))
;

com.rpl.specter.t_com$rpl$specter77060.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = ((function (temp__6736__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_transform.call(null,((function (this$__$1,temp__6736__auto__){
return (function (p1__77059_SHARP_){
return com.rpl.specter.navs.not_selected_QMARK__STAR_.call(null,self__.late,vals,p1__77059_SHARP_);
});})(this$__$1,temp__6736__auto__))
,vals,structure,next_fn);
});})(temp__6736__auto__))
;

com.rpl.specter.t_com$rpl$specter77060.getBasis = ((function (temp__6736__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"temp__6736__auto__","temp__6736__auto__",-1815609319,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta77061","meta77061",-1994049247,null)], null);
});})(temp__6736__auto__))
;

com.rpl.specter.t_com$rpl$specter77060.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter77060.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter77060";

com.rpl.specter.t_com$rpl$specter77060.cljs$lang$ctorPrWriter = ((function (temp__6736__auto__){
return (function (this__61556__auto__,writer__61557__auto__,opt__61558__auto__){
return cljs.core._write.call(null,writer__61557__auto__,"com.rpl.specter/t_com$rpl$specter77060");
});})(temp__6736__auto__))
;

com.rpl.specter.__GT_t_com$rpl$specter77060 = ((function (temp__6736__auto__){
return (function com$rpl$specter$__GT_t_com$rpl$specter77060(path__$1,temp__6736__auto____$1,late__$1,meta77061){
return (new com.rpl.specter.t_com$rpl$specter77060(path__$1,temp__6736__auto____$1,late__$1,meta77061));
});})(temp__6736__auto__))
;

}

return (new com.rpl.specter.t_com$rpl$specter77060(path,temp__6736__auto__,late,null));
});})(temp__6736__auto__))
);
var curr_params__21884__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__21884__auto__)){
return cljs.core.apply.call(null,builder__21883__auto__,curr_params__21884__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__21883__auto__,curr_params__21884__auto__);
}
}
};
var G__77063 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__77064__i = 0, G__77064__a = new Array(arguments.length -  0);
while (G__77064__i < G__77064__a.length) {G__77064__a[G__77064__i] = arguments[G__77064__i + 0]; ++G__77064__i;}
  path = new cljs.core.IndexedSeq(G__77064__a,0,null);
} 
return G__77063__delegate.call(this,path);};
G__77063.cljs$lang$maxFixedArity = 0;
G__77063.cljs$lang$applyTo = (function (arglist__77065){
var path = cljs.core.seq(arglist__77065);
return G__77063__delegate(path);
});
G__77063.cljs$core$IFn$_invoke$arity$variadic = G__77063__delegate;
return G__77063;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to a view of the current sequence that only contains elements that
 *   match the given path. An element matches the selector path if calling select
 *   on that element with the path yields anything other than an empty sequence.
 * 
 *   For transformation: `NONE` entries in the result sequence cause corresponding entries in
 *   input to be removed. A result sequence smaller than the input sequence is equivalent to
 *   padding the result sequence with `NONE` at the end until the same size as the input.
 */
com.rpl.specter.filterer = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function() { 
var G__77066__delegate = function (path){
return com.rpl.specter.subselect.call(null,com.rpl.specter.ALL,com.rpl.specter.selected_QMARK_.call(null,path));
};
var G__77066 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__77067__i = 0, G__77067__a = new Array(arguments.length -  0);
while (G__77067__i < G__77067__a.length) {G__77067__a[G__77067__i] = arguments[G__77067__i + 0]; ++G__77067__i;}
  path = new cljs.core.IndexedSeq(G__77067__a,0,null);
} 
return G__77066__delegate.call(this,path);};
G__77066.cljs$lang$maxFixedArity = 0;
G__77066.cljs$lang$applyTo = (function (arglist__77068){
var path = cljs.core.seq(arglist__77068);
return G__77066__delegate(path);
});
G__77066.cljs$core$IFn$_invoke$arity$variadic = G__77066__delegate;
return G__77066;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to a view of the current value by transforming it with the
 * specified path and update-fn.
 */
com.rpl.specter.transformed = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function (path,update_fn){
var builder__21883__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late,late_fn){
if(typeof com.rpl.specter.t_com$rpl$specter77069 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter77069 = (function (path,update_fn,late,late_fn,meta77070){
this.path = path;
this.update_fn = update_fn;
this.late = late;
this.late_fn = late_fn;
this.meta77070 = meta77070;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter77069.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77071,meta77070__$1){
var self__ = this;
var _77071__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter77069(self__.path,self__.update_fn,self__.late,self__.late_fn,meta77070__$1));
});

com.rpl.specter.t_com$rpl$specter77069.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77071){
var self__ = this;
var _77071__$1 = this;
return self__.meta77070;
});

com.rpl.specter.t_com$rpl$specter77069.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter77069.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__21118__auto__,vals__21119__auto__,structure,next_fn__21120__auto__){
var self__ = this;
var this__21118__auto____$1 = this;
var next_fn = ((function (this__21118__auto____$1){
return (function (s__21121__auto__){
return next_fn__21120__auto__.call(null,vals__21119__auto__,s__21121__auto__);
});})(this__21118__auto____$1))
;
return next_fn.call(null,com.rpl.specter.compiled_transform.call(null,self__.late,self__.late_fn,structure));
});

com.rpl.specter.t_com$rpl$specter77069.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__21118__auto__,vals__21119__auto__,structure,next_fn__21120__auto__){
var self__ = this;
var this__21118__auto____$1 = this;
var next_fn = ((function (this__21118__auto____$1){
return (function (s__21121__auto__){
return next_fn__21120__auto__.call(null,vals__21119__auto__,s__21121__auto__);
});})(this__21118__auto____$1))
;
return next_fn.call(null,com.rpl.specter.compiled_transform.call(null,self__.late,self__.late_fn,structure));
});

com.rpl.specter.t_com$rpl$specter77069.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"late-fn","late-fn",268309430,null),new cljs.core.Symbol(null,"meta77070","meta77070",1470801187,null)], null);
});

com.rpl.specter.t_com$rpl$specter77069.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter77069.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter77069";

com.rpl.specter.t_com$rpl$specter77069.cljs$lang$ctorPrWriter = (function (this__61556__auto__,writer__61557__auto__,opt__61558__auto__){
return cljs.core._write.call(null,writer__61557__auto__,"com.rpl.specter/t_com$rpl$specter77069");
});

com.rpl.specter.__GT_t_com$rpl$specter77069 = (function com$rpl$specter$__GT_t_com$rpl$specter77069(path__$1,update_fn__$1,late__$1,late_fn__$1,meta77070){
return (new com.rpl.specter.t_com$rpl$specter77069(path__$1,update_fn__$1,late__$1,late_fn__$1,meta77070));
});

}

return (new com.rpl.specter.t_com$rpl$specter77069(path,update_fn,late,late_fn,null));
}));
var curr_params__21884__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path),update_fn], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__21884__auto__)){
return cljs.core.apply.call(null,builder__21883__auto__,curr_params__21884__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__21883__auto__,curr_params__21884__auto__);
}
})),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to a view of the current value by transforming with a reduction over
 * the specified traversal.
 */
com.rpl.specter.traversed = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function (path,reduce_fn){
var builder__21883__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late,late_fn){
if(typeof com.rpl.specter.t_com$rpl$specter77072 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter77072 = (function (path,reduce_fn,late,late_fn,meta77073){
this.path = path;
this.reduce_fn = reduce_fn;
this.late = late;
this.late_fn = late_fn;
this.meta77073 = meta77073;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter77072.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77074,meta77073__$1){
var self__ = this;
var _77074__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter77072(self__.path,self__.reduce_fn,self__.late,self__.late_fn,meta77073__$1));
});

com.rpl.specter.t_com$rpl$specter77072.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77074){
var self__ = this;
var _77074__$1 = this;
return self__.meta77073;
});

com.rpl.specter.t_com$rpl$specter77072.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter77072.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__21118__auto__,vals__21119__auto__,structure,next_fn__21120__auto__){
var self__ = this;
var this__21118__auto____$1 = this;
var next_fn = ((function (this__21118__auto____$1){
return (function (s__21121__auto__){
return next_fn__21120__auto__.call(null,vals__21119__auto__,s__21121__auto__);
});})(this__21118__auto____$1))
;
return next_fn.call(null,cljs.core.reduce.call(null,self__.late_fn,com.rpl.specter.compiled_traverse.call(null,self__.late,structure)));
});

com.rpl.specter.t_com$rpl$specter77072.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__21118__auto__,vals__21119__auto__,structure,next_fn__21120__auto__){
var self__ = this;
var this__21118__auto____$1 = this;
var next_fn = ((function (this__21118__auto____$1){
return (function (s__21121__auto__){
return next_fn__21120__auto__.call(null,vals__21119__auto__,s__21121__auto__);
});})(this__21118__auto____$1))
;
return next_fn.call(null,cljs.core.reduce.call(null,self__.late_fn,com.rpl.specter.compiled_traverse.call(null,self__.late,structure)));
});

com.rpl.specter.t_com$rpl$specter77072.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"reduce-fn","reduce-fn",-1484020844,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"late-fn","late-fn",268309430,null),new cljs.core.Symbol(null,"meta77073","meta77073",-1460523274,null)], null);
});

com.rpl.specter.t_com$rpl$specter77072.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter77072.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter77072";

com.rpl.specter.t_com$rpl$specter77072.cljs$lang$ctorPrWriter = (function (this__61556__auto__,writer__61557__auto__,opt__61558__auto__){
return cljs.core._write.call(null,writer__61557__auto__,"com.rpl.specter/t_com$rpl$specter77072");
});

com.rpl.specter.__GT_t_com$rpl$specter77072 = (function com$rpl$specter$__GT_t_com$rpl$specter77072(path__$1,reduce_fn__$1,late__$1,late_fn__$1,meta77073){
return (new com.rpl.specter.t_com$rpl$specter77072(path__$1,reduce_fn__$1,late__$1,late_fn__$1,meta77073));
});

}

return (new com.rpl.specter.t_com$rpl$specter77072(path,reduce_fn,late,late_fn,null));
}));
var curr_params__21884__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path),reduce_fn], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__21884__auto__)){
return cljs.core.apply.call(null,builder__21883__auto__,curr_params__21884__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__21883__auto__,curr_params__21884__auto__);
}
})),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Keeps the element only if it matches the supplied predicate. This is the
 *        late-bound parameterized version of using a function directly in a path.
 */
com.rpl.specter.pred = com.rpl.specter.impl.pred_STAR_;
(com.rpl.specter.protocols.ImplicitNav["null"] = true);

(com.rpl.specter.protocols.implicit_nav["null"] = (function (this$){
return com.rpl.specter.STAY;
}));
cljs.core.Keyword.prototype.com$rpl$specter$protocols$ImplicitNav$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.navs.keypath_STAR_.call(null,this$__$1);
});
(com.rpl.specter.protocols.ImplicitNav["function"] = true);

(com.rpl.specter.protocols.implicit_nav["function"] = (function (this$){
return com.rpl.specter.pred.call(null,this$);
}));
cljs.core.PersistentHashSet.prototype.com$rpl$specter$protocols$ImplicitNav$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashSet.prototype.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.pred.call(null,this$__$1);
});


com.rpl.specter.nil__GT_val_select_STAR_ = (function com$rpl$specter$nil__GT_val_select_STAR_(v,structure,next_fn){
return next_fn.call(null,(((structure == null))?v:structure));
});

com.rpl.specter.nil__GT_val_transform_STAR_ = (function com$rpl$specter$nil__GT_val_transform_STAR_(v,structure,next_fn){
return next_fn.call(null,(((structure == null))?v:structure));
});

/**
 * Navigates to the provided val if the structure is nil. Otherwise it stays
 *        navigated at the structure.
 */
com.rpl.specter.nil__GT_val = com.rpl.specter.impl.direct_nav_obj.call(null,(function (v){
if(typeof com.rpl.specter.t_com$rpl$specter77075 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter77075 = (function (v,meta77076){
this.v = v;
this.meta77076 = meta77076;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter77075.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77077,meta77076__$1){
var self__ = this;
var _77077__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter77075(self__.v,meta77076__$1));
});

com.rpl.specter.t_com$rpl$specter77075.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77077){
var self__ = this;
var _77077__$1 = this;
return self__.meta77076;
});

com.rpl.specter.t_com$rpl$specter77075.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter77075.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__21118__auto__,vals__21119__auto__,structure,next_fn__21120__auto__){
var self__ = this;
var this__21118__auto____$1 = this;
var next_fn = ((function (this__21118__auto____$1){
return (function (s__21121__auto__){
return next_fn__21120__auto__.call(null,vals__21119__auto__,s__21121__auto__);
});})(this__21118__auto____$1))
;
return next_fn.call(null,(((structure == null))?self__.v:structure));
});

com.rpl.specter.t_com$rpl$specter77075.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__21118__auto__,vals__21119__auto__,structure,next_fn__21120__auto__){
var self__ = this;
var this__21118__auto____$1 = this;
var next_fn = ((function (this__21118__auto____$1){
return (function (s__21121__auto__){
return next_fn__21120__auto__.call(null,vals__21119__auto__,s__21121__auto__);
});})(this__21118__auto____$1))
;
return next_fn.call(null,(((structure == null))?self__.v:structure));
});

com.rpl.specter.t_com$rpl$specter77075.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"meta77076","meta77076",1441051655,null)], null);
});

com.rpl.specter.t_com$rpl$specter77075.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter77075.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter77075";

com.rpl.specter.t_com$rpl$specter77075.cljs$lang$ctorPrWriter = (function (this__61556__auto__,writer__61557__auto__,opt__61558__auto__){
return cljs.core._write.call(null,writer__61557__auto__,"com.rpl.specter/t_com$rpl$specter77075");
});

com.rpl.specter.__GT_t_com$rpl$specter77075 = (function com$rpl$specter$__GT_t_com$rpl$specter77075(v__$1,meta77076){
return (new com.rpl.specter.t_com$rpl$specter77075(v__$1,meta77076));
});

}

return (new com.rpl.specter.t_com$rpl$specter77075(v,null));
}));
/**
 * Navigates to #{} if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_SET = com.rpl.specter.nil__GT_val.call(null,cljs.core.PersistentHashSet.EMPTY);
/**
 * Navigates to '() if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_LIST = com.rpl.specter.nil__GT_val.call(null,cljs.core.List.EMPTY);
/**
 * Navigates to [] if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_VECTOR = com.rpl.specter.nil__GT_val.call(null,cljs.core.PersistentVector.EMPTY);


com.rpl.specter.META_select_STAR_ = (function com$rpl$specter$META_select_STAR_(structure,next_fn){
return next_fn.call(null,cljs.core.meta.call(null,structure));
});

com.rpl.specter.META_transform_STAR_ = (function com$rpl$specter$META_transform_STAR_(structure,next_fn){
return cljs.core.with_meta.call(null,structure,next_fn.call(null,cljs.core.meta.call(null,structure)));
});

/**
 * Navigates to the metadata of the structure, or nil if
 *   the structure has no metadata or may not contain metadata.
 */
com.rpl.specter.META = (function (){
if(typeof com.rpl.specter.t_com$rpl$specter77078 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter77078 = (function (meta77079){
this.meta77079 = meta77079;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter77078.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77080,meta77079__$1){
var self__ = this;
var _77080__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter77078(meta77079__$1));
});

com.rpl.specter.t_com$rpl$specter77078.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77080){
var self__ = this;
var _77080__$1 = this;
return self__.meta77079;
});

com.rpl.specter.t_com$rpl$specter77078.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter77078.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__21118__auto__,vals__21119__auto__,structure,next_fn__21120__auto__){
var self__ = this;
var this__21118__auto____$1 = this;
var next_fn = ((function (this__21118__auto____$1){
return (function (s__21121__auto__){
return next_fn__21120__auto__.call(null,vals__21119__auto__,s__21121__auto__);
});})(this__21118__auto____$1))
;
return next_fn.call(null,cljs.core.meta.call(null,structure));
});

com.rpl.specter.t_com$rpl$specter77078.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__21118__auto__,vals__21119__auto__,structure,next_fn__21120__auto__){
var self__ = this;
var this__21118__auto____$1 = this;
var next_fn = ((function (this__21118__auto____$1){
return (function (s__21121__auto__){
return next_fn__21120__auto__.call(null,vals__21119__auto__,s__21121__auto__);
});})(this__21118__auto____$1))
;
return cljs.core.with_meta.call(null,structure,next_fn.call(null,cljs.core.meta.call(null,structure)));
});

com.rpl.specter.t_com$rpl$specter77078.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta77079","meta77079",251905893,null)], null);
});

com.rpl.specter.t_com$rpl$specter77078.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter77078.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter77078";

com.rpl.specter.t_com$rpl$specter77078.cljs$lang$ctorPrWriter = (function (this__61556__auto__,writer__61557__auto__,opt__61558__auto__){
return cljs.core._write.call(null,writer__61557__auto__,"com.rpl.specter/t_com$rpl$specter77078");
});

com.rpl.specter.__GT_t_com$rpl$specter77078 = (function com$rpl$specter$__GT_t_com$rpl$specter77078(meta77079){
return (new com.rpl.specter.t_com$rpl$specter77078(meta77079));
});

}

return (new com.rpl.specter.t_com$rpl$specter77078(null));
})()
;


com.rpl.specter.NAME_select_STAR_ = (function com$rpl$specter$NAME_select_STAR_(structure,next_fn){
return next_fn.call(null,cljs.core.name.call(null,structure));
});

com.rpl.specter.NAME_transform_STAR_ = (function com$rpl$specter$NAME_transform_STAR_(structure,next_fn){
var new_name = next_fn.call(null,cljs.core.name.call(null,structure));
var ns = cljs.core.namespace.call(null,structure);
if((structure instanceof cljs.core.Keyword)){
return cljs.core.keyword.call(null,ns,new_name);
} else {
if((structure instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,ns,new_name);
} else {
throw (new java.lang.IllegalArgumentException(com.rpl.specter.impl.smart_str.call(null,"NAME can only be used on symbols or keywords - ",structure)));

}
}
});

/**
 * Navigates to the name portion of the keyword or symbol
 */
com.rpl.specter.NAME = (function (){
if(typeof com.rpl.specter.t_com$rpl$specter77081 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter77081 = (function (meta77082){
this.meta77082 = meta77082;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter77081.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77083,meta77082__$1){
var self__ = this;
var _77083__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter77081(meta77082__$1));
});

com.rpl.specter.t_com$rpl$specter77081.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77083){
var self__ = this;
var _77083__$1 = this;
return self__.meta77082;
});

com.rpl.specter.t_com$rpl$specter77081.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter77081.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__21118__auto__,vals__21119__auto__,structure,next_fn__21120__auto__){
var self__ = this;
var this__21118__auto____$1 = this;
var next_fn = ((function (this__21118__auto____$1){
return (function (s__21121__auto__){
return next_fn__21120__auto__.call(null,vals__21119__auto__,s__21121__auto__);
});})(this__21118__auto____$1))
;
return next_fn.call(null,cljs.core.name.call(null,structure));
});

com.rpl.specter.t_com$rpl$specter77081.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__21118__auto__,vals__21119__auto__,structure,next_fn__21120__auto__){
var self__ = this;
var this__21118__auto____$1 = this;
var next_fn = ((function (this__21118__auto____$1){
return (function (s__21121__auto__){
return next_fn__21120__auto__.call(null,vals__21119__auto__,s__21121__auto__);
});})(this__21118__auto____$1))
;
var new_name = next_fn.call(null,cljs.core.name.call(null,structure));
var ns = cljs.core.namespace.call(null,structure);
if((structure instanceof cljs.core.Keyword)){
return cljs.core.keyword.call(null,ns,new_name);
} else {
if((structure instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,ns,new_name);
} else {
throw (new java.lang.IllegalArgumentException(com.rpl.specter.impl.smart_str.call(null,"NAME can only be used on symbols or keywords - ",structure)));

}
}
});

com.rpl.specter.t_com$rpl$specter77081.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta77082","meta77082",1192675043,null)], null);
});

com.rpl.specter.t_com$rpl$specter77081.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter77081.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter77081";

com.rpl.specter.t_com$rpl$specter77081.cljs$lang$ctorPrWriter = (function (this__61556__auto__,writer__61557__auto__,opt__61558__auto__){
return cljs.core._write.call(null,writer__61557__auto__,"com.rpl.specter/t_com$rpl$specter77081");
});

com.rpl.specter.__GT_t_com$rpl$specter77081 = (function com$rpl$specter$__GT_t_com$rpl$specter77081(meta77082){
return (new com.rpl.specter.t_com$rpl$specter77081(meta77082));
});

}

return (new com.rpl.specter.t_com$rpl$specter77081(null));
})()
;


com.rpl.specter.NAMESPACE_select_STAR_ = (function com$rpl$specter$NAMESPACE_select_STAR_(structure,next_fn){
return next_fn.call(null,cljs.core.namespace.call(null,structure));
});

com.rpl.specter.NAMESPACE_transform_STAR_ = (function com$rpl$specter$NAMESPACE_transform_STAR_(structure,next_fn){
var name = cljs.core.name.call(null,structure);
var new_ns = next_fn.call(null,cljs.core.namespace.call(null,structure));
if((structure instanceof cljs.core.Keyword)){
return cljs.core.keyword.call(null,new_ns,name);
} else {
if((structure instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,new_ns,name);
} else {
throw (new java.lang.IllegalArgumentException(com.rpl.specter.impl.smart_str.call(null,"NAMESPACE can only be used on symbols or keywords - ",structure)));

}
}
});

/**
 * Navigates to the namespace portion of the keyword or symbol
 */
com.rpl.specter.NAMESPACE = (function (){
if(typeof com.rpl.specter.t_com$rpl$specter77084 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter77084 = (function (meta77085){
this.meta77085 = meta77085;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter77084.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77086,meta77085__$1){
var self__ = this;
var _77086__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter77084(meta77085__$1));
});

com.rpl.specter.t_com$rpl$specter77084.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77086){
var self__ = this;
var _77086__$1 = this;
return self__.meta77085;
});

com.rpl.specter.t_com$rpl$specter77084.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter77084.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__21118__auto__,vals__21119__auto__,structure,next_fn__21120__auto__){
var self__ = this;
var this__21118__auto____$1 = this;
var next_fn = ((function (this__21118__auto____$1){
return (function (s__21121__auto__){
return next_fn__21120__auto__.call(null,vals__21119__auto__,s__21121__auto__);
});})(this__21118__auto____$1))
;
return next_fn.call(null,cljs.core.namespace.call(null,structure));
});

com.rpl.specter.t_com$rpl$specter77084.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__21118__auto__,vals__21119__auto__,structure,next_fn__21120__auto__){
var self__ = this;
var this__21118__auto____$1 = this;
var next_fn = ((function (this__21118__auto____$1){
return (function (s__21121__auto__){
return next_fn__21120__auto__.call(null,vals__21119__auto__,s__21121__auto__);
});})(this__21118__auto____$1))
;
var name = cljs.core.name.call(null,structure);
var new_ns = next_fn.call(null,cljs.core.namespace.call(null,structure));
if((structure instanceof cljs.core.Keyword)){
return cljs.core.keyword.call(null,new_ns,name);
} else {
if((structure instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,new_ns,name);
} else {
throw (new java.lang.IllegalArgumentException(com.rpl.specter.impl.smart_str.call(null,"NAMESPACE can only be used on symbols or keywords - ",structure)));

}
}
});

com.rpl.specter.t_com$rpl$specter77084.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta77085","meta77085",505448085,null)], null);
});

com.rpl.specter.t_com$rpl$specter77084.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter77084.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter77084";

com.rpl.specter.t_com$rpl$specter77084.cljs$lang$ctorPrWriter = (function (this__61556__auto__,writer__61557__auto__,opt__61558__auto__){
return cljs.core._write.call(null,writer__61557__auto__,"com.rpl.specter/t_com$rpl$specter77084");
});

com.rpl.specter.__GT_t_com$rpl$specter77084 = (function com$rpl$specter$__GT_t_com$rpl$specter77084(meta77085){
return (new com.rpl.specter.t_com$rpl$specter77084(meta77085));
});

}

return (new com.rpl.specter.t_com$rpl$specter77084(null));
})()
;
/**
 * Adds the result of running select with the given path on the
 *        current value to the collected vals.
 */
com.rpl.specter.collect = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function() { 
var G__77090__delegate = function (path){
var builder__21883__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late){
if(typeof com.rpl.specter.t_com$rpl$specter77087 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter77087 = (function (path,late,meta77088){
this.path = path;
this.late = late;
this.meta77088 = meta77088;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter77087.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77089,meta77088__$1){
var self__ = this;
var _77089__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter77087(self__.path,self__.late,meta77088__$1));
});

com.rpl.specter.t_com$rpl$specter77087.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77089){
var self__ = this;
var _77089__$1 = this;
return self__.meta77088;
});

com.rpl.specter.t_com$rpl$specter77087.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter77087.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__21880__auto__,vals__21881__auto__,structure,next_fn__21882__auto__){
var self__ = this;
var this__21880__auto____$1 = this;
return next_fn__21882__auto__.call(null,cljs.core.conj.call(null,vals__21881__auto__,com.rpl.specter.compiled_select.call(null,self__.late,structure)),structure);
});

com.rpl.specter.t_com$rpl$specter77087.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__21880__auto__,vals__21881__auto__,structure,next_fn__21882__auto__){
var self__ = this;
var this__21880__auto____$1 = this;
return next_fn__21882__auto__.call(null,cljs.core.conj.call(null,vals__21881__auto__,com.rpl.specter.compiled_select.call(null,self__.late,structure)),structure);
});

com.rpl.specter.t_com$rpl$specter77087.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta77088","meta77088",-1406031700,null)], null);
});

com.rpl.specter.t_com$rpl$specter77087.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter77087.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter77087";

com.rpl.specter.t_com$rpl$specter77087.cljs$lang$ctorPrWriter = (function (this__61556__auto__,writer__61557__auto__,opt__61558__auto__){
return cljs.core._write.call(null,writer__61557__auto__,"com.rpl.specter/t_com$rpl$specter77087");
});

com.rpl.specter.__GT_t_com$rpl$specter77087 = (function com$rpl$specter$__GT_t_com$rpl$specter77087(path__$1,late__$1,meta77088){
return (new com.rpl.specter.t_com$rpl$specter77087(path__$1,late__$1,meta77088));
});

}

return (new com.rpl.specter.t_com$rpl$specter77087(path,late,null));
}));
var curr_params__21884__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__21884__auto__)){
return cljs.core.apply.call(null,builder__21883__auto__,curr_params__21884__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__21883__auto__,curr_params__21884__auto__);
}
};
var G__77090 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__77091__i = 0, G__77091__a = new Array(arguments.length -  0);
while (G__77091__i < G__77091__a.length) {G__77091__a[G__77091__i] = arguments[G__77091__i + 0]; ++G__77091__i;}
  path = new cljs.core.IndexedSeq(G__77091__a,0,null);
} 
return G__77090__delegate.call(this,path);};
G__77090.cljs$lang$maxFixedArity = 0;
G__77090.cljs$lang$applyTo = (function (arglist__77092){
var path = cljs.core.seq(arglist__77092);
return G__77090__delegate(path);
});
G__77090.cljs$core$IFn$_invoke$arity$variadic = G__77090__delegate;
return G__77090;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Adds the result of running select-one with the given path on the
 *        current value to the collected vals.
 */
com.rpl.specter.collect_one = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function() { 
var G__77096__delegate = function (path){
var builder__21883__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late){
if(typeof com.rpl.specter.t_com$rpl$specter77093 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter77093 = (function (path,late,meta77094){
this.path = path;
this.late = late;
this.meta77094 = meta77094;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter77093.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77095,meta77094__$1){
var self__ = this;
var _77095__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter77093(self__.path,self__.late,meta77094__$1));
});

com.rpl.specter.t_com$rpl$specter77093.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77095){
var self__ = this;
var _77095__$1 = this;
return self__.meta77094;
});

com.rpl.specter.t_com$rpl$specter77093.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter77093.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__21880__auto__,vals__21881__auto__,structure,next_fn__21882__auto__){
var self__ = this;
var this__21880__auto____$1 = this;
return next_fn__21882__auto__.call(null,cljs.core.conj.call(null,vals__21881__auto__,com.rpl.specter.compiled_select_one.call(null,self__.late,structure)),structure);
});

com.rpl.specter.t_com$rpl$specter77093.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__21880__auto__,vals__21881__auto__,structure,next_fn__21882__auto__){
var self__ = this;
var this__21880__auto____$1 = this;
return next_fn__21882__auto__.call(null,cljs.core.conj.call(null,vals__21881__auto__,com.rpl.specter.compiled_select_one.call(null,self__.late,structure)),structure);
});

com.rpl.specter.t_com$rpl$specter77093.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta77094","meta77094",-2010446552,null)], null);
});

com.rpl.specter.t_com$rpl$specter77093.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter77093.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter77093";

com.rpl.specter.t_com$rpl$specter77093.cljs$lang$ctorPrWriter = (function (this__61556__auto__,writer__61557__auto__,opt__61558__auto__){
return cljs.core._write.call(null,writer__61557__auto__,"com.rpl.specter/t_com$rpl$specter77093");
});

com.rpl.specter.__GT_t_com$rpl$specter77093 = (function com$rpl$specter$__GT_t_com$rpl$specter77093(path__$1,late__$1,meta77094){
return (new com.rpl.specter.t_com$rpl$specter77093(path__$1,late__$1,meta77094));
});

}

return (new com.rpl.specter.t_com$rpl$specter77093(path,late,null));
}));
var curr_params__21884__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__21884__auto__)){
return cljs.core.apply.call(null,builder__21883__auto__,curr_params__21884__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__21883__auto__,curr_params__21884__auto__);
}
};
var G__77096 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__77097__i = 0, G__77097__a = new Array(arguments.length -  0);
while (G__77097__i < G__77097__a.length) {G__77097__a[G__77097__i] = arguments[G__77097__i + 0]; ++G__77097__i;}
  path = new cljs.core.IndexedSeq(G__77097__a,0,null);
} 
return G__77096__delegate.call(this,path);};
G__77096.cljs$lang$maxFixedArity = 0;
G__77096.cljs$lang$applyTo = (function (arglist__77098){
var path = cljs.core.seq(arglist__77098);
return G__77096__delegate(path);
});
G__77096.cljs$core$IFn$_invoke$arity$variadic = G__77096__delegate;
return G__77096;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Adds an external value to the collected vals. Useful when additional arguments
 *   are required to the transform function that would otherwise require partial
 *   application or a wrapper function.
 * 
 *   e.g., incrementing val at path [:a :b] by 3:
 *   (transform [:a :b (putval 3)] + some-map)
 */
com.rpl.specter.putval = com.rpl.specter.impl.direct_nav_obj.call(null,(function (val){
if(typeof com.rpl.specter.t_com$rpl$specter77099 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter77099 = (function (val,meta77100){
this.val = val;
this.meta77100 = meta77100;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter77099.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77101,meta77100__$1){
var self__ = this;
var _77101__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter77099(self__.val,meta77100__$1));
});

com.rpl.specter.t_com$rpl$specter77099.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77101){
var self__ = this;
var _77101__$1 = this;
return self__.meta77100;
});

com.rpl.specter.t_com$rpl$specter77099.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter77099.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__21880__auto__,vals__21881__auto__,structure,next_fn__21882__auto__){
var self__ = this;
var this__21880__auto____$1 = this;
return next_fn__21882__auto__.call(null,cljs.core.conj.call(null,vals__21881__auto__,self__.val),structure);
});

com.rpl.specter.t_com$rpl$specter77099.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__21880__auto__,vals__21881__auto__,structure,next_fn__21882__auto__){
var self__ = this;
var this__21880__auto____$1 = this;
return next_fn__21882__auto__.call(null,cljs.core.conj.call(null,vals__21881__auto__,self__.val),structure);
});

com.rpl.specter.t_com$rpl$specter77099.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"meta77100","meta77100",-1399849250,null)], null);
});

com.rpl.specter.t_com$rpl$specter77099.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter77099.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter77099";

com.rpl.specter.t_com$rpl$specter77099.cljs$lang$ctorPrWriter = (function (this__61556__auto__,writer__61557__auto__,opt__61558__auto__){
return cljs.core._write.call(null,writer__61557__auto__,"com.rpl.specter/t_com$rpl$specter77099");
});

com.rpl.specter.__GT_t_com$rpl$specter77099 = (function com$rpl$specter$__GT_t_com$rpl$specter77099(val__$1,meta77100){
return (new com.rpl.specter.t_com$rpl$specter77099(val__$1,meta77100));
});

}

return (new com.rpl.specter.t_com$rpl$specter77099(val,null));
}));
/**
 * Continues navigating on the given path with the collected vals reset to []. Once
 *   navigation leaves the scope of with-fresh-collected, the collected vals revert
 *   to what they were before.
 */
com.rpl.specter.with_fresh_collected = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function() { 
var G__77107__delegate = function (path){
var builder__21883__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late){
if(typeof com.rpl.specter.t_com$rpl$specter77102 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter77102 = (function (path,late,meta77103){
this.path = path;
this.late = late;
this.meta77103 = meta77103;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter77102.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77104,meta77103__$1){
var self__ = this;
var _77104__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter77102(self__.path,self__.late,meta77103__$1));
});

com.rpl.specter.t_com$rpl$specter77102.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77104){
var self__ = this;
var _77104__$1 = this;
return self__.meta77103;
});

com.rpl.specter.t_com$rpl$specter77102.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter77102.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.protocols.select_STAR_.call(null,self__.late,cljs.core.PersistentVector.EMPTY,structure,((function (this$__$1){
return (function (_,structure__$1){
return next_fn.call(null,vals,structure__$1);
});})(this$__$1))
);
});

com.rpl.specter.t_com$rpl$specter77102.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.protocols.transform_STAR_.call(null,self__.late,cljs.core.PersistentVector.EMPTY,structure,((function (this$__$1){
return (function (_,structure__$1){
return next_fn.call(null,vals,structure__$1);
});})(this$__$1))
);
});

com.rpl.specter.t_com$rpl$specter77102.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta77103","meta77103",1311533883,null)], null);
});

com.rpl.specter.t_com$rpl$specter77102.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter77102.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter77102";

com.rpl.specter.t_com$rpl$specter77102.cljs$lang$ctorPrWriter = (function (this__61556__auto__,writer__61557__auto__,opt__61558__auto__){
return cljs.core._write.call(null,writer__61557__auto__,"com.rpl.specter/t_com$rpl$specter77102");
});

com.rpl.specter.__GT_t_com$rpl$specter77102 = (function com$rpl$specter$__GT_t_com$rpl$specter77102(path__$1,late__$1,meta77103){
return (new com.rpl.specter.t_com$rpl$specter77102(path__$1,late__$1,meta77103));
});

}

return (new com.rpl.specter.t_com$rpl$specter77102(path,late,null));
}));
var curr_params__21884__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__21884__auto__)){
return cljs.core.apply.call(null,builder__21883__auto__,curr_params__21884__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__21883__auto__,curr_params__21884__auto__);
}
};
var G__77107 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__77108__i = 0, G__77108__a = new Array(arguments.length -  0);
while (G__77108__i < G__77108__a.length) {G__77108__a[G__77108__i] = arguments[G__77108__i + 0]; ++G__77108__i;}
  path = new cljs.core.IndexedSeq(G__77108__a,0,null);
} 
return G__77107__delegate.call(this,path);};
G__77107.cljs$lang$maxFixedArity = 0;
G__77107.cljs$lang$applyTo = (function (arglist__77109){
var path = cljs.core.seq(arglist__77109);
return G__77107__delegate(path);
});
G__77107.cljs$core$IFn$_invoke$arity$variadic = G__77107__delegate;
return G__77107;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Drops all collected values for subsequent navigation.
 */
com.rpl.specter.DISPENSE = (function (){
if(typeof com.rpl.specter.t_com$rpl$specter77110 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter77110 = (function (meta77111){
this.meta77111 = meta77111;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter77110.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77112,meta77111__$1){
var self__ = this;
var _77112__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter77110(meta77111__$1));
});

com.rpl.specter.t_com$rpl$specter77110.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77112){
var self__ = this;
var _77112__$1 = this;
return self__.meta77111;
});

com.rpl.specter.t_com$rpl$specter77110.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter77110.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return next_fn.call(null,cljs.core.PersistentVector.EMPTY,structure);
});

com.rpl.specter.t_com$rpl$specter77110.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return next_fn.call(null,cljs.core.PersistentVector.EMPTY,structure);
});

com.rpl.specter.t_com$rpl$specter77110.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta77111","meta77111",1103027491,null)], null);
});

com.rpl.specter.t_com$rpl$specter77110.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter77110.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter77110";

com.rpl.specter.t_com$rpl$specter77110.cljs$lang$ctorPrWriter = (function (this__61556__auto__,writer__61557__auto__,opt__61558__auto__){
return cljs.core._write.call(null,writer__61557__auto__,"com.rpl.specter/t_com$rpl$specter77110");
});

com.rpl.specter.__GT_t_com$rpl$specter77110 = (function com$rpl$specter$__GT_t_com$rpl$specter77110(meta77111){
return (new com.rpl.specter.t_com$rpl$specter77110(meta77111));
});

}

return (new com.rpl.specter.t_com$rpl$specter77110(null));
})()
;
/**
 * Like cond-path, but with if semantics.
 */
com.rpl.specter.if_path = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function() {
var G__77121 = null;
var G__77121__2 = (function (cond_p,then_path){
return com.rpl.specter.if_path.call(null,cond_p,then_path,com.rpl.specter.STOP);
});
var G__77121__3 = (function (cond_p,then_path,else_path){
var temp__6736__auto__ = com.rpl.specter.navs.extract_basic_filter_fn.call(null,cond_p);
if(cljs.core.truth_(temp__6736__auto__)){
var afn = temp__6736__auto__;
var builder__21883__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,((function (afn,temp__6736__auto__){
return (function (late_then,late_else){
if(typeof com.rpl.specter.t_com$rpl$specter77115 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter77115 = (function (cond_p,then_path,else_path,temp__6736__auto__,afn,late_then,late_else,meta77116){
this.cond_p = cond_p;
this.then_path = then_path;
this.else_path = else_path;
this.temp__6736__auto__ = temp__6736__auto__;
this.afn = afn;
this.late_then = late_then;
this.late_else = late_else;
this.meta77116 = meta77116;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter77115.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (afn,temp__6736__auto__){
return (function (_77117,meta77116__$1){
var self__ = this;
var _77117__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter77115(self__.cond_p,self__.then_path,self__.else_path,self__.temp__6736__auto__,self__.afn,self__.late_then,self__.late_else,meta77116__$1));
});})(afn,temp__6736__auto__))
;

com.rpl.specter.t_com$rpl$specter77115.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (afn,temp__6736__auto__){
return (function (_77117){
var self__ = this;
var _77117__$1 = this;
return self__.meta77116;
});})(afn,temp__6736__auto__))
;

com.rpl.specter.t_com$rpl$specter77115.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter77115.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = ((function (afn,temp__6736__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_select.call(null,vals,structure,next_fn,self__.afn,self__.late_then,self__.late_else);
});})(afn,temp__6736__auto__))
;

com.rpl.specter.t_com$rpl$specter77115.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = ((function (afn,temp__6736__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_transform.call(null,vals,structure,next_fn,self__.afn,self__.late_then,self__.late_else);
});})(afn,temp__6736__auto__))
;

com.rpl.specter.t_com$rpl$specter77115.getBasis = ((function (afn,temp__6736__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-p","cond-p",695068009,null),new cljs.core.Symbol(null,"then-path","then-path",1949536092,null),new cljs.core.Symbol(null,"else-path","else-path",-2100209576,null),new cljs.core.Symbol(null,"temp__6736__auto__","temp__6736__auto__",-1815609319,null),new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"late-then","late-then",1623904294,null),new cljs.core.Symbol(null,"late-else","late-else",1462724600,null),new cljs.core.Symbol(null,"meta77116","meta77116",-1741333511,null)], null);
});})(afn,temp__6736__auto__))
;

com.rpl.specter.t_com$rpl$specter77115.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter77115.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter77115";

com.rpl.specter.t_com$rpl$specter77115.cljs$lang$ctorPrWriter = ((function (afn,temp__6736__auto__){
return (function (this__61556__auto__,writer__61557__auto__,opt__61558__auto__){
return cljs.core._write.call(null,writer__61557__auto__,"com.rpl.specter/t_com$rpl$specter77115");
});})(afn,temp__6736__auto__))
;

com.rpl.specter.__GT_t_com$rpl$specter77115 = ((function (afn,temp__6736__auto__){
return (function com$rpl$specter$__GT_t_com$rpl$specter77115(cond_p__$1,then_path__$1,else_path__$1,temp__6736__auto____$1,afn__$1,late_then__$1,late_else__$1,meta77116){
return (new com.rpl.specter.t_com$rpl$specter77115(cond_p__$1,then_path__$1,else_path__$1,temp__6736__auto____$1,afn__$1,late_then__$1,late_else__$1,meta77116));
});})(afn,temp__6736__auto__))
;

}

return (new com.rpl.specter.t_com$rpl$specter77115(cond_p,then_path,else_path,temp__6736__auto__,afn,late_then,late_else,null));
});})(afn,temp__6736__auto__))
);
var curr_params__21884__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,then_path),com.rpl.specter.late_path.call(null,else_path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__21884__auto__)){
return cljs.core.apply.call(null,builder__21883__auto__,curr_params__21884__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__21883__auto__,curr_params__21884__auto__);
}
} else {
var builder__21883__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,((function (temp__6736__auto__){
return (function (late_cond,late_then,late_else){
if(typeof com.rpl.specter.t_com$rpl$specter77118 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter77118 = (function (cond_p,then_path,else_path,temp__6736__auto__,late_cond,late_then,late_else,meta77119){
this.cond_p = cond_p;
this.then_path = then_path;
this.else_path = else_path;
this.temp__6736__auto__ = temp__6736__auto__;
this.late_cond = late_cond;
this.late_then = late_then;
this.late_else = late_else;
this.meta77119 = meta77119;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter77118.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (temp__6736__auto__){
return (function (_77120,meta77119__$1){
var self__ = this;
var _77120__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter77118(self__.cond_p,self__.then_path,self__.else_path,self__.temp__6736__auto__,self__.late_cond,self__.late_then,self__.late_else,meta77119__$1));
});})(temp__6736__auto__))
;

com.rpl.specter.t_com$rpl$specter77118.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (temp__6736__auto__){
return (function (_77120){
var self__ = this;
var _77120__$1 = this;
return self__.meta77119;
});})(temp__6736__auto__))
;

com.rpl.specter.t_com$rpl$specter77118.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter77118.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = ((function (temp__6736__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_select.call(null,vals,structure,next_fn,((function (this$__$1,temp__6736__auto__){
return (function (p1__77113_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_.call(null,self__.late_cond,vals,p1__77113_SHARP_);
});})(this$__$1,temp__6736__auto__))
,self__.late_then,self__.late_else);
});})(temp__6736__auto__))
;

com.rpl.specter.t_com$rpl$specter77118.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = ((function (temp__6736__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_transform.call(null,vals,structure,next_fn,((function (this$__$1,temp__6736__auto__){
return (function (p1__77114_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_.call(null,self__.late_cond,vals,p1__77114_SHARP_);
});})(this$__$1,temp__6736__auto__))
,self__.late_then,self__.late_else);
});})(temp__6736__auto__))
;

com.rpl.specter.t_com$rpl$specter77118.getBasis = ((function (temp__6736__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-p","cond-p",695068009,null),new cljs.core.Symbol(null,"then-path","then-path",1949536092,null),new cljs.core.Symbol(null,"else-path","else-path",-2100209576,null),new cljs.core.Symbol(null,"temp__6736__auto__","temp__6736__auto__",-1815609319,null),new cljs.core.Symbol(null,"late-cond","late-cond",1031862828,null),new cljs.core.Symbol(null,"late-then","late-then",1623904294,null),new cljs.core.Symbol(null,"late-else","late-else",1462724600,null),new cljs.core.Symbol(null,"meta77119","meta77119",-1535512611,null)], null);
});})(temp__6736__auto__))
;

com.rpl.specter.t_com$rpl$specter77118.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter77118.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter77118";

com.rpl.specter.t_com$rpl$specter77118.cljs$lang$ctorPrWriter = ((function (temp__6736__auto__){
return (function (this__61556__auto__,writer__61557__auto__,opt__61558__auto__){
return cljs.core._write.call(null,writer__61557__auto__,"com.rpl.specter/t_com$rpl$specter77118");
});})(temp__6736__auto__))
;

com.rpl.specter.__GT_t_com$rpl$specter77118 = ((function (temp__6736__auto__){
return (function com$rpl$specter$__GT_t_com$rpl$specter77118(cond_p__$1,then_path__$1,else_path__$1,temp__6736__auto____$1,late_cond__$1,late_then__$1,late_else__$1,meta77119){
return (new com.rpl.specter.t_com$rpl$specter77118(cond_p__$1,then_path__$1,else_path__$1,temp__6736__auto____$1,late_cond__$1,late_then__$1,late_else__$1,meta77119));
});})(temp__6736__auto__))
;

}

return (new com.rpl.specter.t_com$rpl$specter77118(cond_p,then_path,else_path,temp__6736__auto__,late_cond,late_then,late_else,null));
});})(temp__6736__auto__))
);
var curr_params__21884__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,cond_p),com.rpl.specter.late_path.call(null,then_path),com.rpl.specter.late_path.call(null,else_path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__21884__auto__)){
return cljs.core.apply.call(null,builder__21883__auto__,curr_params__21884__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__21883__auto__,curr_params__21884__auto__);
}
}
});
G__77121 = function(cond_p,then_path,else_path){
switch(arguments.length){
case 2:
return G__77121__2.call(this,cond_p,then_path);
case 3:
return G__77121__3.call(this,cond_p,then_path,else_path);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__77121.cljs$core$IFn$_invoke$arity$2 = G__77121__2;
G__77121.cljs$core$IFn$_invoke$arity$3 = G__77121__3;
return G__77121;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Takes in alternating cond-path path cond-path path...
 * Tests the structure if selecting with cond-path returns anything.
 * If so, it uses the following path for this portion of the navigation.
 * Otherwise, it tries the next cond-path. If nothing matches, then the structure
 * is not selected.
 * 
 * The input paths may be parameterized, in which case the result of cond-path
 * will be parameterized in the order of which the parameterized navigators
 * were declared.
 */
com.rpl.specter.cond_path = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function() { 
var G__77126__delegate = function (conds){
var pairs = cljs.core.reverse.call(null,cljs.core.partition.call(null,(2),conds));
return cljs.core.reduce.call(null,((function (pairs){
return (function (p,p__77122){
var vec__77123 = p__77122;
var tester = cljs.core.nth.call(null,vec__77123,(0),null);
var apath = cljs.core.nth.call(null,vec__77123,(1),null);
return com.rpl.specter.if_path.call(null,tester,apath,p);
});})(pairs))
,com.rpl.specter.STOP,pairs);
};
var G__77126 = function (var_args){
var conds = null;
if (arguments.length > 0) {
var G__77127__i = 0, G__77127__a = new Array(arguments.length -  0);
while (G__77127__i < G__77127__a.length) {G__77127__a[G__77127__i] = arguments[G__77127__i + 0]; ++G__77127__i;}
  conds = new cljs.core.IndexedSeq(G__77127__a,0,null);
} 
return G__77126__delegate.call(this,conds);};
G__77126.cljs$lang$maxFixedArity = 0;
G__77126.cljs$lang$applyTo = (function (arglist__77128){
var conds = cljs.core.seq(arglist__77128);
return G__77126__delegate(conds);
});
G__77126.cljs$core$IFn$_invoke$arity$variadic = G__77126__delegate;
return G__77126;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * A path that branches on multiple paths. For updates,
 * applies updates to the paths in order.
 */
com.rpl.specter.multi_path = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function() {
var G__77136 = null;
var G__77136__0 = (function (){
return com.rpl.specter.STAY;
});
var G__77136__1 = (function (path){
return path;
});
var G__77136__2 = (function (path1,path2){
var builder__21883__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late1,late2){
if(typeof com.rpl.specter.t_com$rpl$specter77129 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter77129 = (function (path1,path2,late1,late2,meta77130){
this.path1 = path1;
this.path2 = path2;
this.late1 = late1;
this.late2 = late2;
this.meta77130 = meta77130;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter77129.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77131,meta77130__$1){
var self__ = this;
var _77131__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter77129(self__.path1,self__.path2,self__.late1,self__.late2,meta77130__$1));
});

com.rpl.specter.t_com$rpl$specter77129.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77131){
var self__ = this;
var _77131__$1 = this;
return self__.meta77130;
});

com.rpl.specter.t_com$rpl$specter77129.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter77129.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var res1 = com.rpl.specter.protocols.select_STAR_.call(null,self__.late1,vals,structure,next_fn);
if(cljs.core.reduced_QMARK_.call(null,res1)){
return res1;
} else {
var res2 = com.rpl.specter.protocols.select_STAR_.call(null,self__.late2,vals,structure,next_fn);
if((com.rpl.specter.NONE === res1)){
return res2;
} else {
return res1;
}
}
});

com.rpl.specter.t_com$rpl$specter77129.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var s1 = com.rpl.specter.protocols.transform_STAR_.call(null,self__.late1,vals,structure,next_fn);
return com.rpl.specter.protocols.transform_STAR_.call(null,self__.late2,vals,s1,next_fn);
});

com.rpl.specter.t_com$rpl$specter77129.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path1","path1",-2002517142,null),new cljs.core.Symbol(null,"path2","path2",-1937913521,null),new cljs.core.Symbol(null,"late1","late1",-1413016621,null),new cljs.core.Symbol(null,"late2","late2",-681717994,null),new cljs.core.Symbol(null,"meta77130","meta77130",588630176,null)], null);
});

com.rpl.specter.t_com$rpl$specter77129.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter77129.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter77129";

com.rpl.specter.t_com$rpl$specter77129.cljs$lang$ctorPrWriter = (function (this__61556__auto__,writer__61557__auto__,opt__61558__auto__){
return cljs.core._write.call(null,writer__61557__auto__,"com.rpl.specter/t_com$rpl$specter77129");
});

com.rpl.specter.__GT_t_com$rpl$specter77129 = (function com$rpl$specter$__GT_t_com$rpl$specter77129(path1__$1,path2__$1,late1__$1,late2__$1,meta77130){
return (new com.rpl.specter.t_com$rpl$specter77129(path1__$1,path2__$1,late1__$1,late2__$1,meta77130));
});

}

return (new com.rpl.specter.t_com$rpl$specter77129(path1,path2,late1,late2,null));
}));
var curr_params__21884__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path1),com.rpl.specter.late_path.call(null,path2)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__21884__auto__)){
return cljs.core.apply.call(null,builder__21883__auto__,curr_params__21884__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__21883__auto__,curr_params__21884__auto__);
}
});
var G__77136__3 = (function() { 
var G__77137__delegate = function (path1,path2,paths){
return cljs.core.reduce.call(null,com.rpl.specter.multi_path,com.rpl.specter.multi_path.call(null,path1,path2),paths);
};
var G__77137 = function (path1,path2,var_args){
var paths = null;
if (arguments.length > 2) {
var G__77138__i = 0, G__77138__a = new Array(arguments.length -  2);
while (G__77138__i < G__77138__a.length) {G__77138__a[G__77138__i] = arguments[G__77138__i + 2]; ++G__77138__i;}
  paths = new cljs.core.IndexedSeq(G__77138__a,0,null);
} 
return G__77137__delegate.call(this,path1,path2,paths);};
G__77137.cljs$lang$maxFixedArity = 2;
G__77137.cljs$lang$applyTo = (function (arglist__77139){
var path1 = cljs.core.first(arglist__77139);
arglist__77139 = cljs.core.next(arglist__77139);
var path2 = cljs.core.first(arglist__77139);
var paths = cljs.core.rest(arglist__77139);
return G__77137__delegate(path1,path2,paths);
});
G__77137.cljs$core$IFn$_invoke$arity$variadic = G__77137__delegate;
return G__77137;
})()
;
G__77136 = function(path1,path2,var_args){
var paths = var_args;
switch(arguments.length){
case 0:
return G__77136__0.call(this);
case 1:
return G__77136__1.call(this,path1);
case 2:
return G__77136__2.call(this,path1,path2);
default:
var G__77140 = null;
if (arguments.length > 2) {
var G__77141__i = 0, G__77141__a = new Array(arguments.length -  2);
while (G__77141__i < G__77141__a.length) {G__77141__a[G__77141__i] = arguments[G__77141__i + 2]; ++G__77141__i;}
G__77140 = new cljs.core.IndexedSeq(G__77141__a,0,null);
}
return G__77136__3.cljs$core$IFn$_invoke$arity$variadic(path1,path2, G__77140);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__77136.cljs$lang$maxFixedArity = 2;
G__77136.cljs$lang$applyTo = G__77136__3.cljs$lang$applyTo;
G__77136.cljs$core$IFn$_invoke$arity$0 = G__77136__0;
G__77136.cljs$core$IFn$_invoke$arity$1 = G__77136__1;
G__77136.cljs$core$IFn$_invoke$arity$2 = G__77136__2;
G__77136.cljs$core$IFn$_invoke$arity$variadic = G__77136__3.cljs$core$IFn$_invoke$arity$variadic;
return G__77136;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to the current element and then navigates via the provided path.
 * This can be used to implement pre-order traversal.
 */
com.rpl.specter.stay_then_continue = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function() { 
var G__77142__delegate = function (path){
return com.rpl.specter.multi_path.call(null,com.rpl.specter.STAY,path);
};
var G__77142 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__77143__i = 0, G__77143__a = new Array(arguments.length -  0);
while (G__77143__i < G__77143__a.length) {G__77143__a[G__77143__i] = arguments[G__77143__i + 0]; ++G__77143__i;}
  path = new cljs.core.IndexedSeq(G__77143__a,0,null);
} 
return G__77142__delegate.call(this,path);};
G__77142.cljs$lang$maxFixedArity = 0;
G__77142.cljs$lang$applyTo = (function (arglist__77144){
var path = cljs.core.seq(arglist__77144);
return G__77142__delegate(path);
});
G__77142.cljs$core$IFn$_invoke$arity$variadic = G__77142__delegate;
return G__77142;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to the provided path and then to the current element. This can be used
 * to implement post-order traversal.
 */
com.rpl.specter.continue_then_stay = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function() { 
var G__77145__delegate = function (path){
return com.rpl.specter.multi_path.call(null,path,com.rpl.specter.STAY);
};
var G__77145 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__77146__i = 0, G__77146__a = new Array(arguments.length -  0);
while (G__77146__i < G__77146__a.length) {G__77146__a[G__77146__i] = arguments[G__77146__i + 0]; ++G__77146__i;}
  path = new cljs.core.IndexedSeq(G__77146__a,0,null);
} 
return G__77145__delegate.call(this,path);};
G__77145.cljs$lang$maxFixedArity = 0;
G__77145.cljs$lang$applyTo = (function (arglist__77147){
var path = cljs.core.seq(arglist__77147);
return G__77145__delegate(path);
});
G__77145.cljs$core$IFn$_invoke$arity$variadic = G__77145__delegate;
return G__77145;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);

//# sourceMappingURL=specter.js.map?rel=1506064194250