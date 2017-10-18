// Compiled by ClojureScript 1.9.542 {}
goog.provide('onyx.triggers');
goog.require('cljs.core');
goog.require('onyx.windowing.units');
goog.require('onyx.static$.util');
onyx.triggers.next_fire_time = (function onyx$triggers$next_fire_time(p__62636){
var map__62639 = p__62636;
var map__62639__$1 = ((((!((map__62639 == null)))?((((map__62639.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62639.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62639):map__62639);
var trigger = map__62639__$1;
var period = cljs.core.get.call(null,map__62639__$1,new cljs.core.Keyword("trigger","period","trigger/period",710363569));
if(cljs.core._EQ_.call(null,onyx.windowing.units.standard_units_for.call(null,cljs.core.second.call(null,period)),new cljs.core.Keyword(null,"milliseconds","milliseconds",-1238025512))){
var ms = cljs.core.apply.call(null,onyx.windowing.units.to_standard_units,period);
return (onyx.static$.util.now.call(null) + ms);
} else {
throw cljs.core.ex_info.call(null,":trigger/period must be a unit that can be converted to :milliseconds",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"trigger","trigger",103466139),trigger], null));
}
});
onyx.triggers.exceeds_watermark_QMARK_ = (function onyx$triggers$exceeds_watermark_QMARK_(window,upper_extent_bound,segment){
var watermark = cljs.core.get.call(null,segment,new cljs.core.Keyword("window","window-key","window/window-key",-436709213).cljs$core$IFn$_invoke$arity$1(window));
return (onyx.windowing.units.coerce_key.call(null,watermark,new cljs.core.Keyword(null,"milliseconds","milliseconds",-1238025512)) >= upper_extent_bound);
});
onyx.triggers.exceeds_percentile_watermark_QMARK_ = (function onyx$triggers$exceeds_percentile_watermark_QMARK_(window,trigger,lower_extent_bound,upper_extent_bound,segment){
var watermark = cljs.core.get.call(null,segment,new cljs.core.Keyword("window","window-key","window/window-key",-436709213).cljs$core$IFn$_invoke$arity$1(window));
var pct = new cljs.core.Keyword("trigger","watermark-percentage","trigger/watermark-percentage",1245073398).cljs$core$IFn$_invoke$arity$1(trigger);
var offset = ((upper_extent_bound - lower_extent_bound) * pct);
return (onyx.windowing.units.coerce_key.call(null,watermark,new cljs.core.Keyword(null,"milliseconds","milliseconds",-1238025512)) >= (lower_extent_bound + offset));
});
onyx.triggers.segment_init_state = (function onyx$triggers$segment_init_state(_){
return (0);
});
onyx.triggers.timer_init_state = (function onyx$triggers$timer_init_state(trigger){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,onyx.triggers.next_fire_time.call(null,trigger)], null);
});
onyx.triggers.punctuation_init_state = (function onyx$triggers$punctuation_init_state(trigger){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fire?","fire?",-1924029271),false], null);
});
onyx.triggers.watermark_init_state = (function onyx$triggers$watermark_init_state(trigger){
return null;
});
onyx.triggers.percentile_watermark_init_state = (function onyx$triggers$percentile_watermark_init_state(trigger){
return null;
});
onyx.triggers.segment_init_locals = (function onyx$triggers$segment_init_locals(trigger){
return cljs.core.PersistentArrayMap.EMPTY;
});
onyx.triggers.timer_init_locals = (function onyx$triggers$timer_init_locals(trigger){
return cljs.core.PersistentArrayMap.EMPTY;
});
onyx.triggers.punctuation_init_locals = (function onyx$triggers$punctuation_init_locals(trigger){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pred-fn","pred-fn",-1305072773),onyx.static$.util.kw__GT_fn.call(null,new cljs.core.Keyword("trigger","pred","trigger/pred",835767021).cljs$core$IFn$_invoke$arity$1(trigger))], null);
});
onyx.triggers.watermark_init_locals = (function onyx$triggers$watermark_init_locals(trigger){
return cljs.core.PersistentArrayMap.EMPTY;
});
onyx.triggers.percentile_watermark_init_locals = (function onyx$triggers$percentile_watermark_init_locals(trigger){
return cljs.core.PersistentArrayMap.EMPTY;
});
onyx.triggers.segment_next_state = (function onyx$triggers$segment_next_state(p__62641,state,p__62642){
var map__62647 = p__62641;
var map__62647__$1 = ((((!((map__62647 == null)))?((((map__62647.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62647.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62647):map__62647);
var threshold = cljs.core.get.call(null,map__62647__$1,new cljs.core.Keyword("trigger","threshold","trigger/threshold",1291289287));
var map__62648 = p__62642;
var map__62648__$1 = ((((!((map__62648 == null)))?((((map__62648.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62648.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62648):map__62648);
var state_event = map__62648__$1;
var event_type = cljs.core.get.call(null,map__62648__$1,new cljs.core.Keyword(null,"event-type","event-type",319722813));
if(cljs.core._EQ_.call(null,event_type,new cljs.core.Keyword(null,"new-segment","new-segment",-1974816380))){
return (cljs.core.mod.call(null,state,cljs.core.first.call(null,threshold)) + (1));
} else {
return state;
}
});
onyx.triggers.timer_next_state = (function onyx$triggers$timer_next_state(p__62651,p__62652,p__62653){
var map__62661 = p__62651;
var map__62661__$1 = ((((!((map__62661 == null)))?((((map__62661.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62661.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62661):map__62661);
var trigger = map__62661__$1;
var period = cljs.core.get.call(null,map__62661__$1,new cljs.core.Keyword("trigger","period","trigger/period",710363569));
var vec__62662 = p__62652;
var _ = cljs.core.nth.call(null,vec__62662,(0),null);
var fire_time = cljs.core.nth.call(null,vec__62662,(1),null);
var map__62665 = p__62653;
var map__62665__$1 = ((((!((map__62665 == null)))?((((map__62665.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62665.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62665):map__62665);
var state_event = map__62665__$1;
var event_type = cljs.core.get.call(null,map__62665__$1,new cljs.core.Keyword(null,"event-type","event-type",319722813));
var fire_QMARK_ = ((onyx.static$.util.now.call(null) > fire_time)) || (cljs.core.boolean$.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"job-completed","job-completed",629265890),null,new cljs.core.Keyword(null,"recovered","recovered",-2003051022),null], null), null).call(null,event_type)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fire_QMARK_,((fire_QMARK_)?onyx.triggers.next_fire_time.call(null,trigger):fire_time)], null);
});
onyx.triggers.punctuation_next_state = (function onyx$triggers$punctuation_next_state(trigger,state,p__62668){
var map__62673 = p__62668;
var map__62673__$1 = ((((!((map__62673 == null)))?((((map__62673.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62673.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62673):map__62673);
var state_event = map__62673__$1;
var trigger_state = cljs.core.get.call(null,map__62673__$1,new cljs.core.Keyword(null,"trigger-state","trigger-state",-1285376437));
var map__62675 = trigger_state;
var map__62675__$1 = ((((!((map__62675 == null)))?((((map__62675.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62675.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62675):map__62675);
var pred_fn = cljs.core.get.call(null,map__62675__$1,new cljs.core.Keyword(null,"pred-fn","pred-fn",-1305072773));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fire?","fire?",-1924029271),pred_fn.call(null,trigger,state_event)], null);
});
onyx.triggers.watermark_next_state = (function onyx$triggers$watermark_next_state(trigger,state,state_event){
return null;
});
onyx.triggers.percentile_watermark_next_state = (function onyx$triggers$percentile_watermark_next_state(trigger,state,state_event){
return null;
});
onyx.triggers.segment_fire_QMARK_ = (function onyx$triggers$segment_fire_QMARK_(p__62677,trigger_state,p__62678){
var map__62683 = p__62677;
var map__62683__$1 = ((((!((map__62683 == null)))?((((map__62683.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62683.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62683):map__62683);
var trigger = map__62683__$1;
var threshold = cljs.core.get.call(null,map__62683__$1,new cljs.core.Keyword("trigger","threshold","trigger/threshold",1291289287));
var map__62684 = p__62678;
var map__62684__$1 = ((((!((map__62684 == null)))?((((map__62684.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62684.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62684):map__62684);
var state_event = map__62684__$1;
var event_type = cljs.core.get.call(null,map__62684__$1,new cljs.core.Keyword(null,"event-type","event-type",319722813));
var or__61290__auto__ = (cljs.core._EQ_.call(null,event_type,new cljs.core.Keyword(null,"new-segment","new-segment",-1974816380))) && (cljs.core._EQ_.call(null,trigger_state,cljs.core.first.call(null,threshold)));
if(or__61290__auto__){
return or__61290__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"job-completed","job-completed",629265890),null,new cljs.core.Keyword(null,"recovered","recovered",-2003051022),null], null), null).call(null,event_type);
}
});
onyx.triggers.timer_fire_QMARK_ = (function onyx$triggers$timer_fire_QMARK_(trigger,p__62687,state_event){
var vec__62691 = p__62687;
var fire_QMARK_ = cljs.core.nth.call(null,vec__62691,(0),null);
var _ = cljs.core.nth.call(null,vec__62691,(1),null);
return fire_QMARK_;
});
onyx.triggers.punctuation_fire_QMARK_ = (function onyx$triggers$punctuation_fire_QMARK_(trigger,state,state_event){
return new cljs.core.Keyword(null,"fire?","fire?",-1924029271).cljs$core$IFn$_invoke$arity$1(state);
});
onyx.triggers.watermark_fire_QMARK_ = (function onyx$triggers$watermark_fire_QMARK_(trigger,trigger_state,p__62694){
var map__62697 = p__62694;
var map__62697__$1 = ((((!((map__62697 == null)))?((((map__62697.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62697.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62697):map__62697);
var state_event = map__62697__$1;
var upper_bound = cljs.core.get.call(null,map__62697__$1,new cljs.core.Keyword(null,"upper-bound","upper-bound",1562892816));
var event_type = cljs.core.get.call(null,map__62697__$1,new cljs.core.Keyword(null,"event-type","event-type",319722813));
var segment = cljs.core.get.call(null,map__62697__$1,new cljs.core.Keyword(null,"segment","segment",-964921196));
var window = cljs.core.get.call(null,map__62697__$1,new cljs.core.Keyword(null,"window","window",724519534));
var or__61290__auto__ = (function (){var and__61271__auto__ = segment;
if(cljs.core.truth_(and__61271__auto__)){
return onyx.triggers.exceeds_watermark_QMARK_.call(null,window,upper_bound,segment);
} else {
return and__61271__auto__;
}
})();
if(cljs.core.truth_(or__61290__auto__)){
return or__61290__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"job-completed","job-completed",629265890),null,new cljs.core.Keyword(null,"recovered","recovered",-2003051022),null], null), null).call(null,event_type);
}
});
onyx.triggers.percentile_watermark_fire_QMARK_ = (function onyx$triggers$percentile_watermark_fire_QMARK_(trigger,trigger_state,p__62699){
var map__62702 = p__62699;
var map__62702__$1 = ((((!((map__62702 == null)))?((((map__62702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62702.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62702):map__62702);
var lower_bound = cljs.core.get.call(null,map__62702__$1,new cljs.core.Keyword(null,"lower-bound","lower-bound",153632489));
var upper_bound = cljs.core.get.call(null,map__62702__$1,new cljs.core.Keyword(null,"upper-bound","upper-bound",1562892816));
var event_type = cljs.core.get.call(null,map__62702__$1,new cljs.core.Keyword(null,"event-type","event-type",319722813));
var segment = cljs.core.get.call(null,map__62702__$1,new cljs.core.Keyword(null,"segment","segment",-964921196));
var window = cljs.core.get.call(null,map__62702__$1,new cljs.core.Keyword(null,"window","window",724519534));
var or__61290__auto__ = (function (){var and__61271__auto__ = segment;
if(cljs.core.truth_(and__61271__auto__)){
return onyx.triggers.exceeds_percentile_watermark_QMARK_.call(null,window,trigger,lower_bound,upper_bound,segment);
} else {
return and__61271__auto__;
}
})();
if(cljs.core.truth_(or__61290__auto__)){
return or__61290__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"job-completed","job-completed",629265890),null,new cljs.core.Keyword(null,"recovered","recovered",-2003051022),null], null), null).call(null,event_type);
}
});
onyx.triggers.segment = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("trigger","init-state","trigger/init-state",1701233828),onyx.triggers.segment_init_state,new cljs.core.Keyword("trigger","init-locals","trigger/init-locals",-1757731138),onyx.triggers.segment_init_locals,new cljs.core.Keyword("trigger","next-state","trigger/next-state",1843587884),onyx.triggers.segment_next_state,new cljs.core.Keyword("trigger","trigger-fire?","trigger/trigger-fire?",1005631648),onyx.triggers.segment_fire_QMARK_], null);
goog.exportSymbol('onyx.triggers.segment', onyx.triggers.segment);
onyx.triggers.timer = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("trigger","init-state","trigger/init-state",1701233828),onyx.triggers.timer_init_state,new cljs.core.Keyword("trigger","init-locals","trigger/init-locals",-1757731138),onyx.triggers.timer_init_locals,new cljs.core.Keyword("trigger","next-state","trigger/next-state",1843587884),onyx.triggers.timer_next_state,new cljs.core.Keyword("trigger","trigger-fire?","trigger/trigger-fire?",1005631648),onyx.triggers.timer_fire_QMARK_], null);
goog.exportSymbol('onyx.triggers.timer', onyx.triggers.timer);
onyx.triggers.punctuation = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("trigger","init-state","trigger/init-state",1701233828),onyx.triggers.punctuation_init_state,new cljs.core.Keyword("trigger","init-locals","trigger/init-locals",-1757731138),onyx.triggers.punctuation_init_locals,new cljs.core.Keyword("trigger","next-state","trigger/next-state",1843587884),onyx.triggers.punctuation_next_state,new cljs.core.Keyword("trigger","trigger-fire?","trigger/trigger-fire?",1005631648),onyx.triggers.punctuation_fire_QMARK_], null);
goog.exportSymbol('onyx.triggers.punctuation', onyx.triggers.punctuation);
onyx.triggers.watermark = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("trigger","init-state","trigger/init-state",1701233828),onyx.triggers.watermark_init_state,new cljs.core.Keyword("trigger","init-locals","trigger/init-locals",-1757731138),onyx.triggers.watermark_init_locals,new cljs.core.Keyword("trigger","next-state","trigger/next-state",1843587884),onyx.triggers.watermark_next_state,new cljs.core.Keyword("trigger","trigger-fire?","trigger/trigger-fire?",1005631648),onyx.triggers.watermark_fire_QMARK_], null);
goog.exportSymbol('onyx.triggers.watermark', onyx.triggers.watermark);
onyx.triggers.percentile_watermark = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("trigger","init-state","trigger/init-state",1701233828),onyx.triggers.percentile_watermark_init_state,new cljs.core.Keyword("trigger","init-locals","trigger/init-locals",-1757731138),onyx.triggers.percentile_watermark_init_locals,new cljs.core.Keyword("trigger","next-state","trigger/next-state",1843587884),onyx.triggers.percentile_watermark_next_state,new cljs.core.Keyword("trigger","trigger-fire?","trigger/trigger-fire?",1005631648),onyx.triggers.percentile_watermark_fire_QMARK_], null);
goog.exportSymbol('onyx.triggers.percentile_watermark', onyx.triggers.percentile_watermark);

//# sourceMappingURL=triggers.js.map?rel=1506321309167