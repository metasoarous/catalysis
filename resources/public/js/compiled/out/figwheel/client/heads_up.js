// Compiled by ClojureScript 1.9.542 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');
goog.require('goog.dom.dataset');
goog.require('goog.object');
goog.require('goog.dom');
goog.require('cljs.pprint');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__62127__auto__ = [];
var len__62120__auto___91473 = arguments.length;
var i__62121__auto___91474 = (0);
while(true){
if((i__62121__auto___91474 < len__62120__auto___91473)){
args__62127__auto__.push((arguments[i__62121__auto___91474]));

var G__91475 = (i__62121__auto___91474 + (1));
i__62121__auto___91474 = G__91475;
continue;
} else {
}
break;
}

var argseq__62128__auto__ = ((((2) < args__62127__auto__.length))?(new cljs.core.IndexedSeq(args__62127__auto__.slice((2)),(0),null)):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__62128__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__91465_91476 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__91466_91477 = null;
var count__91467_91478 = (0);
var i__91468_91479 = (0);
while(true){
if((i__91468_91479 < count__91467_91478)){
var k_91480 = cljs.core._nth.call(null,chunk__91466_91477,i__91468_91479);
e.setAttribute(cljs.core.name.call(null,k_91480),cljs.core.get.call(null,attrs,k_91480));

var G__91481 = seq__91465_91476;
var G__91482 = chunk__91466_91477;
var G__91483 = count__91467_91478;
var G__91484 = (i__91468_91479 + (1));
seq__91465_91476 = G__91481;
chunk__91466_91477 = G__91482;
count__91467_91478 = G__91483;
i__91468_91479 = G__91484;
continue;
} else {
var temp__6738__auto___91485 = cljs.core.seq.call(null,seq__91465_91476);
if(temp__6738__auto___91485){
var seq__91465_91486__$1 = temp__6738__auto___91485;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__91465_91486__$1)){
var c__61810__auto___91487 = cljs.core.chunk_first.call(null,seq__91465_91486__$1);
var G__91488 = cljs.core.chunk_rest.call(null,seq__91465_91486__$1);
var G__91489 = c__61810__auto___91487;
var G__91490 = cljs.core.count.call(null,c__61810__auto___91487);
var G__91491 = (0);
seq__91465_91476 = G__91488;
chunk__91466_91477 = G__91489;
count__91467_91478 = G__91490;
i__91468_91479 = G__91491;
continue;
} else {
var k_91492 = cljs.core.first.call(null,seq__91465_91486__$1);
e.setAttribute(cljs.core.name.call(null,k_91492),cljs.core.get.call(null,attrs,k_91492));

var G__91493 = cljs.core.next.call(null,seq__91465_91486__$1);
var G__91494 = null;
var G__91495 = (0);
var G__91496 = (0);
seq__91465_91476 = G__91493;
chunk__91466_91477 = G__91494;
count__91467_91478 = G__91495;
i__91468_91479 = G__91496;
continue;
}
} else {
}
}
break;
}

var seq__91469_91497 = cljs.core.seq.call(null,children);
var chunk__91470_91498 = null;
var count__91471_91499 = (0);
var i__91472_91500 = (0);
while(true){
if((i__91472_91500 < count__91471_91499)){
var ch_91501 = cljs.core._nth.call(null,chunk__91470_91498,i__91472_91500);
e.appendChild(ch_91501);

var G__91502 = seq__91469_91497;
var G__91503 = chunk__91470_91498;
var G__91504 = count__91471_91499;
var G__91505 = (i__91472_91500 + (1));
seq__91469_91497 = G__91502;
chunk__91470_91498 = G__91503;
count__91471_91499 = G__91504;
i__91472_91500 = G__91505;
continue;
} else {
var temp__6738__auto___91506 = cljs.core.seq.call(null,seq__91469_91497);
if(temp__6738__auto___91506){
var seq__91469_91507__$1 = temp__6738__auto___91506;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__91469_91507__$1)){
var c__61810__auto___91508 = cljs.core.chunk_first.call(null,seq__91469_91507__$1);
var G__91509 = cljs.core.chunk_rest.call(null,seq__91469_91507__$1);
var G__91510 = c__61810__auto___91508;
var G__91511 = cljs.core.count.call(null,c__61810__auto___91508);
var G__91512 = (0);
seq__91469_91497 = G__91509;
chunk__91470_91498 = G__91510;
count__91471_91499 = G__91511;
i__91472_91500 = G__91512;
continue;
} else {
var ch_91513 = cljs.core.first.call(null,seq__91469_91507__$1);
e.appendChild(ch_91513);

var G__91514 = cljs.core.next.call(null,seq__91469_91507__$1);
var G__91515 = null;
var G__91516 = (0);
var G__91517 = (0);
seq__91469_91497 = G__91514;
chunk__91470_91498 = G__91515;
count__91471_91499 = G__91516;
i__91472_91500 = G__91517;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq91462){
var G__91463 = cljs.core.first.call(null,seq91462);
var seq91462__$1 = cljs.core.next.call(null,seq91462);
var G__91464 = cljs.core.first.call(null,seq91462__$1);
var seq91462__$2 = cljs.core.next.call(null,seq91462__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__91463,G__91464,seq91462__$2);
});

if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__61930__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__61931__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__61932__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__61933__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__61934__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__61930__auto__,prefer_table__61931__auto__,method_cache__61932__auto__,cached_hierarchy__61933__auto__,hierarchy__61934__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__61930__auto__,prefer_table__61931__auto__,method_cache__61932__auto__,cached_hierarchy__61933__auto__,hierarchy__61934__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__61934__auto__,method_table__61930__auto__,prefer_table__61931__auto__,method_cache__61932__auto__,cached_hierarchy__61933__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine,new cljs.core.Keyword(null,"file-column","file-column",1543934780),dataset.fileColumn], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1("#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cont_id)].join('')))){
var el_91518 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-o-transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 13px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("border-top: 1px solid #f5f5f5;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("line-height: 18px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("color: #333;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-family: monospace;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("padding: 0px 10px 0px 70px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("position: fixed;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("bottom: 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("left: 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("height: 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("opacity: 0.0;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("box-sizing: border-box;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("z-index: 10000;")].join('')], null));
el_91518.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_91518.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_91518.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_91518);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__91519,st_map){
var map__91526 = p__91519;
var map__91526__$1 = ((((!((map__91526 == null)))?((((map__91526.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91526.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__91526):map__91526);
var container_el = cljs.core.get.call(null,map__91526__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__91526,map__91526__$1,container_el){
return (function (p__91528){
var vec__91529 = p__91528;
var k = cljs.core.nth.call(null,vec__91529,(0),null);
var v = cljs.core.nth.call(null,vec__91529,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__91526,map__91526__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__91532,dom_str){
var map__91535 = p__91532;
var map__91535__$1 = ((((!((map__91535 == null)))?((((map__91535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91535.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__91535):map__91535);
var c = map__91535__$1;
var content_area_el = cljs.core.get.call(null,map__91535__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__91537){
var map__91540 = p__91537;
var map__91540__$1 = ((((!((map__91540 == null)))?((((map__91540.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91540.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__91540):map__91540);
var content_area_el = cljs.core.get.call(null,map__91540__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<a style=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1("float: right;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 18px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("text-decoration: none;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("text-align: right;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("width: 30px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("height: 30px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("color: rgba(84,84,84, 0.5);"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("x"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__69114__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__69114__auto__){
return (function (){
var f__69115__auto__ = (function (){var switch__69000__auto__ = ((function (c__69114__auto__){
return (function (state_91583){
var state_val_91584 = (state_91583[(1)]);
if((state_val_91584 === (1))){
var inst_91568 = (state_91583[(7)]);
var inst_91568__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_91569 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_91570 = ["10px","10px","100%","68px","1.0"];
var inst_91571 = cljs.core.PersistentHashMap.fromArrays(inst_91569,inst_91570);
var inst_91572 = cljs.core.merge.call(null,inst_91571,style);
var inst_91573 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_91568__$1,inst_91572);
var inst_91574 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_91568__$1,msg);
var inst_91575 = cljs.core.async.timeout.call(null,(300));
var state_91583__$1 = (function (){var statearr_91585 = state_91583;
(statearr_91585[(8)] = inst_91573);

(statearr_91585[(7)] = inst_91568__$1);

(statearr_91585[(9)] = inst_91574);

return statearr_91585;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_91583__$1,(2),inst_91575);
} else {
if((state_val_91584 === (2))){
var inst_91568 = (state_91583[(7)]);
var inst_91577 = (state_91583[(2)]);
var inst_91578 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_91579 = ["auto"];
var inst_91580 = cljs.core.PersistentHashMap.fromArrays(inst_91578,inst_91579);
var inst_91581 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_91568,inst_91580);
var state_91583__$1 = (function (){var statearr_91586 = state_91583;
(statearr_91586[(10)] = inst_91577);

return statearr_91586;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_91583__$1,inst_91581);
} else {
return null;
}
}
});})(c__69114__auto__))
;
return ((function (switch__69000__auto__,c__69114__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__69001__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__69001__auto____0 = (function (){
var statearr_91590 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_91590[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__69001__auto__);

(statearr_91590[(1)] = (1));

return statearr_91590;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__69001__auto____1 = (function (state_91583){
while(true){
var ret_value__69002__auto__ = (function (){try{while(true){
var result__69003__auto__ = switch__69000__auto__.call(null,state_91583);
if(cljs.core.keyword_identical_QMARK_.call(null,result__69003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69003__auto__;
}
break;
}
}catch (e91591){if((e91591 instanceof Object)){
var ex__69004__auto__ = e91591;
var statearr_91592_91594 = state_91583;
(statearr_91592_91594[(5)] = ex__69004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91583);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e91591;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__69002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__91595 = state_91583;
state_91583 = G__91595;
continue;
} else {
return ret_value__69002__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__69001__auto__ = function(state_91583){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__69001__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__69001__auto____1.call(this,state_91583);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__69001__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__69001__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__69001__auto__;
})()
;})(switch__69000__auto__,c__69114__auto__))
})();
var state__69116__auto__ = (function (){var statearr_91593 = f__69115__auto__.call(null);
(statearr_91593[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__69114__auto__);

return statearr_91593;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__69116__auto__);
});})(c__69114__auto__))
);

return c__69114__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(var_args){
var args91596 = [];
var len__62120__auto___91599 = arguments.length;
var i__62121__auto___91600 = (0);
while(true){
if((i__62121__auto___91600 < len__62120__auto___91599)){
args91596.push((arguments[i__62121__auto___91600]));

var G__91601 = (i__62121__auto___91600 + (1));
i__62121__auto___91600 = G__91601;
continue;
} else {
}
break;
}

var G__91598 = args91596.length;
switch (G__91598) {
case 1:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args91596.length)].join('')));

}
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1 = (function (s){
return figwheel.client.heads_up.heading.call(null,s,"");
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2 = (function (s,sub_head){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div style=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 26px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("line-height: 26px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("margin-bottom: 2px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("padding-top: 1px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" <span style=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1("display: inline-block;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 13px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_head),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</span></div>")].join('');
});

figwheel.client.heads_up.heading.cljs$lang$maxFixedArity = 2;

figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,column_number,msg){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div style=\"cursor: pointer;\" data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" data-file-line=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" data-file-column=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_number),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg,p__91603){
var map__91606 = p__91603;
var map__91606__$1 = ((((!((map__91606 == null)))?((((map__91606.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91606.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__91606):map__91606);
var file = cljs.core.get.call(null,map__91606__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__91606__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__91606__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg__$1 = goog.string.htmlEscape(msg);
if(cljs.core.truth_((function (){var or__60899__auto__ = file;
if(cljs.core.truth_(or__60899__auto__)){
return or__60899__auto__;
} else {
return line;
}
})())){
return figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg__$1);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
}
});
figwheel.client.heads_up.escape = (function figwheel$client$heads_up$escape(x){
return goog.string.htmlEscape(x);
});
figwheel.client.heads_up.pad_line_number = (function figwheel$client$heads_up$pad_line_number(n,line_number){
var len = cljs.core.count.call(null,cljs.core.fnil.call(null,cljs.core.str,"").call(null,line_number));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((len < n))?cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(n - len)," ")):"")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number)].join('');
});
figwheel.client.heads_up.inline_error_line = (function figwheel$client$heads_up$inline_error_line(style,line_number,line){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<span style='"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(style),cljs.core.str.cljs$core$IFn$_invoke$arity$1("'>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<span style='color: #757575;'>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number),cljs.core.str.cljs$core$IFn$_invoke$arity$1("  </span>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,line)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</span>")].join('');
});
figwheel.client.heads_up.format_inline_error_line = (function figwheel$client$heads_up$format_inline_error_line(p__91608){
var vec__91615 = p__91608;
var typ = cljs.core.nth.call(null,vec__91615,(0),null);
var line_number = cljs.core.nth.call(null,vec__91615,(1),null);
var line = cljs.core.nth.call(null,vec__91615,(2),null);
var pred__91618 = cljs.core._EQ_;
var expr__91619 = typ;
if(cljs.core.truth_(pred__91618.call(null,new cljs.core.Keyword(null,"code-line","code-line",-2138627853),expr__91619))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #999;",line_number,line);
} else {
if(cljs.core.truth_(pred__91618.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),expr__91619))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #ccc; font-weight: bold;",line_number,line);
} else {
if(cljs.core.truth_(pred__91618.call(null,new cljs.core.Keyword(null,"error-message","error-message",1756021561),expr__91619))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #D07D7D;",line_number,line);
} else {
return figwheel.client.heads_up.inline_error_line.call(null,"color: #666;",line_number,line);
}
}
}
});
figwheel.client.heads_up.pad_line_numbers = (function figwheel$client$heads_up$pad_line_numbers(inline_error){
var max_line_number_length = cljs.core.count.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.second,inline_error)))].join(''));
return cljs.core.map.call(null,((function (max_line_number_length){
return (function (p1__91621_SHARP_){
return cljs.core.update_in.call(null,p1__91621_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),cljs.core.partial.call(null,figwheel.client.heads_up.pad_line_number,max_line_number_length));
});})(max_line_number_length))
,inline_error);
});
figwheel.client.heads_up.format_inline_error = (function figwheel$client$heads_up$format_inline_error(inline_error){
var lines = cljs.core.map.call(null,figwheel.client.heads_up.format_inline_error_line,figwheel.client.heads_up.pad_line_numbers.call(null,inline_error));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<pre style='whitespace:pre; overflow-x: scroll; font-family:monospace; font-size:0.8em; border-radius: 3px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" line-height: 1.1em; padding: 10px; background-color: rgb(24,26,38); margin-right: 5px'>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"\n",lines)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</pre>")].join('');
});
figwheel.client.heads_up.exception__GT_display_data = (function figwheel$client$heads_up$exception__GT_display_data(p__91624){
var map__91627 = p__91624;
var map__91627__$1 = ((((!((map__91627 == null)))?((((map__91627.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91627.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__91627):map__91627);
var exception = map__91627__$1;
var failed_compiling = cljs.core.get.call(null,map__91627__$1,new cljs.core.Keyword(null,"failed-compiling","failed-compiling",1768639503));
var reader_exception = cljs.core.get.call(null,map__91627__$1,new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098));
var analysis_exception = cljs.core.get.call(null,map__91627__$1,new cljs.core.Keyword(null,"analysis-exception","analysis-exception",591623285));
var class$ = cljs.core.get.call(null,map__91627__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var file = cljs.core.get.call(null,map__91627__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__91627__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__91627__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var message = cljs.core.get.call(null,map__91627__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var error_inline = cljs.core.get.call(null,map__91627__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var last_message = (cljs.core.truth_((function (){var and__60887__auto__ = file;
if(cljs.core.truth_(and__60887__auto__)){
return line;
} else {
return and__60887__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Please see line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" of file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Please see "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),(cljs.core.truth_(analysis_exception)?"Could not Analyze":(cljs.core.truth_(reader_exception)?"Could not Read":(cljs.core.truth_(failed_compiling)?"Could not Compile":"Compile Exception"
))),new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__91627,map__91627__$1,exception,failed_compiling,reader_exception,analysis_exception,class$,file,line,column,message,error_inline){
return (function (p1__91622_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__91622_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
});})(last_message,map__91627,map__91627__$1,exception,failed_compiling,reader_exception,analysis_exception,class$,file,line,column,message,error_inline))
,(cljs.core.truth_(message)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(class$)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,class$)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(": ")].join(''):"")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<span style=\"font-weight:bold;\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</span>")].join(''),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null):cljs.core.map.call(null,((function (last_message,map__91627,map__91627__$1,exception,failed_compiling,reader_exception,analysis_exception,class$,file,line,column,message,error_inline){
return (function (p1__91623_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p1__91623_SHARP_))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(": "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(p1__91623_SHARP_)))].join('');
});})(last_message,map__91627,map__91627__$1,exception,failed_compiling,reader_exception,analysis_exception,class$,file,line,column,message,error_inline))
,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(exception)))),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div style=\"color: #AD4F4F; padding-top: 3px;\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,last_message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.auto_notify_source_file_line = (function figwheel$client$heads_up$auto_notify_source_file_line(p__91629){
var map__91632 = p__91629;
var map__91632__$1 = ((((!((map__91632 == null)))?((((map__91632.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91632.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__91632):map__91632);
var file = cljs.core.get.call(null,map__91632__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__91632__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__91632__$1,new cljs.core.Keyword(null,"column","column",2078222095));
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''),new cljs.core.Keyword(null,"file-line","file-line",-1228823138),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''),new cljs.core.Keyword(null,"file-column","file-column",1543934780),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('')], null));
});
figwheel.client.heads_up.display_exception = (function figwheel$client$heads_up$display_exception(exception_data){
var map__91637 = figwheel.client.heads_up.exception__GT_display_data.call(null,exception_data);
var map__91637__$1 = ((((!((map__91637 == null)))?((((map__91637.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91637.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__91637):map__91637);
var head = cljs.core.get.call(null,map__91637__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__91637__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__91637__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__91637__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__91637__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__91637__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__91637__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg))].join(''));
});
figwheel.client.heads_up.warning_data__GT_display_data = (function figwheel$client$heads_up$warning_data__GT_display_data(p__91640){
var map__91643 = p__91640;
var map__91643__$1 = ((((!((map__91643 == null)))?((((map__91643.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91643.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__91643):map__91643);
var warning_data = map__91643__$1;
var file = cljs.core.get.call(null,map__91643__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__91643__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__91643__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var message = cljs.core.get.call(null,map__91643__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var error_inline = cljs.core.get.call(null,map__91643__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var last_message = (cljs.core.truth_((function (){var and__60887__auto__ = file;
if(cljs.core.truth_(and__60887__auto__)){
return line;
} else {
return and__60887__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Please see line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" of file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Please see "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),"Compile Warning",new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__91643,map__91643__$1,warning_data,file,line,column,message,error_inline){
return (function (p1__91639_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__91639_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
});})(last_message,map__91643,map__91643__$1,warning_data,file,line,column,message,error_inline))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(message)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<span style=\"font-weight:bold;\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</span>")].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null)),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div style=\"color: #AD4F4F; padding-top: 3px; margin-bottom: 10px;\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,last_message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(warning_data){
var map__91647 = figwheel.client.heads_up.warning_data__GT_display_data.call(null,warning_data);
var map__91647__$1 = ((((!((map__91647 == null)))?((((map__91647.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91647.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__91647):map__91647);
var head = cljs.core.get.call(null,map__91647__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__91647__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__91647__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__91647__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__91647__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__91647__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__91647__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg))].join(''));
});
figwheel.client.heads_up.format_warning_message = (function figwheel$client$heads_up$format_warning_message(p__91649){
var map__91653 = p__91649;
var map__91653__$1 = ((((!((map__91653 == null)))?((((map__91653.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91653.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__91653):map__91653);
var warning_data = map__91653__$1;
var message = cljs.core.get.call(null,map__91653__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__91653__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__91653__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__91653__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__91655 = message;
var G__91655__$1 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__91655),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__91655);
var G__91655__$2 = (cljs.core.truth_((function (){var and__60887__auto__ = line;
if(cljs.core.truth_(and__60887__auto__)){
return column;
} else {
return and__60887__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__91655__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):G__91655__$1);
if(cljs.core.truth_(file)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__91655__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join('');
} else {
return G__91655__$2;
}
});
figwheel.client.heads_up.append_warning_message = (function figwheel$client$heads_up$append_warning_message(p__91656){
var map__91661 = p__91656;
var map__91661__$1 = ((((!((map__91661 == null)))?((((map__91661.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91661.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__91661):map__91661);
var warning_data = map__91661__$1;
var message = cljs.core.get.call(null,map__91661__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__91661__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__91661__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__91661__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(cljs.core.truth_(message)){
var map__91663 = figwheel.client.heads_up.ensure_container.call(null);
var map__91663__$1 = ((((!((map__91663 == null)))?((((map__91663.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91663.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__91663):map__91663);
var content_area_el = cljs.core.get.call(null,map__91663__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = goog.dom.createElement("div");
var child_count = goog.dom.getChildren(content_area_el).length;
if((child_count < (6))){
el.innerHTML = figwheel.client.heads_up.format_line.call(null,figwheel.client.heads_up.format_warning_message.call(null,warning_data),warning_data);

return goog.dom.append(content_area_el,el);
} else {
var temp__6738__auto__ = goog.dom.getLastElementChild(content_area_el);
if(cljs.core.truth_(temp__6738__auto__)){
var last_child = temp__6738__auto__;
var temp__6736__auto__ = goog.dom.dataset.get(last_child,"figwheel_count");
if(cljs.core.truth_(temp__6736__auto__)){
var message_count = temp__6736__auto__;
var message_count__$1 = (parseInt(message_count) + (1));
goog.dom.dataset.set(last_child,"figwheel_count",message_count__$1);

return last_child.innerHTML = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(message_count__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" more warnings have not been displayed ...")].join('');
} else {
return goog.dom.append(content_area_el,goog.dom.createDom("div",({"data-figwheel_count": (1), "style": "margin-top: 3px; font-weight: bold"}),"1 more warning that has not been displayed ..."));
}
} else {
return null;
}
}
} else {
return null;
}
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__69114__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__69114__auto__){
return (function (){
var f__69115__auto__ = (function (){var switch__69000__auto__ = ((function (c__69114__auto__){
return (function (state_91711){
var state_val_91712 = (state_91711[(1)]);
if((state_val_91712 === (1))){
var inst_91694 = (state_91711[(7)]);
var inst_91694__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_91695 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_91696 = ["0.0"];
var inst_91697 = cljs.core.PersistentHashMap.fromArrays(inst_91695,inst_91696);
var inst_91698 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_91694__$1,inst_91697);
var inst_91699 = cljs.core.async.timeout.call(null,(300));
var state_91711__$1 = (function (){var statearr_91713 = state_91711;
(statearr_91713[(7)] = inst_91694__$1);

(statearr_91713[(8)] = inst_91698);

return statearr_91713;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_91711__$1,(2),inst_91699);
} else {
if((state_val_91712 === (2))){
var inst_91694 = (state_91711[(7)]);
var inst_91701 = (state_91711[(2)]);
var inst_91702 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_91703 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_91704 = cljs.core.PersistentHashMap.fromArrays(inst_91702,inst_91703);
var inst_91705 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_91694,inst_91704);
var inst_91706 = cljs.core.async.timeout.call(null,(200));
var state_91711__$1 = (function (){var statearr_91714 = state_91711;
(statearr_91714[(9)] = inst_91705);

(statearr_91714[(10)] = inst_91701);

return statearr_91714;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_91711__$1,(3),inst_91706);
} else {
if((state_val_91712 === (3))){
var inst_91694 = (state_91711[(7)]);
var inst_91708 = (state_91711[(2)]);
var inst_91709 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_91694,"");
var state_91711__$1 = (function (){var statearr_91715 = state_91711;
(statearr_91715[(11)] = inst_91708);

return statearr_91715;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_91711__$1,inst_91709);
} else {
return null;
}
}
}
});})(c__69114__auto__))
;
return ((function (switch__69000__auto__,c__69114__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__69001__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__69001__auto____0 = (function (){
var statearr_91719 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_91719[(0)] = figwheel$client$heads_up$clear_$_state_machine__69001__auto__);

(statearr_91719[(1)] = (1));

return statearr_91719;
});
var figwheel$client$heads_up$clear_$_state_machine__69001__auto____1 = (function (state_91711){
while(true){
var ret_value__69002__auto__ = (function (){try{while(true){
var result__69003__auto__ = switch__69000__auto__.call(null,state_91711);
if(cljs.core.keyword_identical_QMARK_.call(null,result__69003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69003__auto__;
}
break;
}
}catch (e91720){if((e91720 instanceof Object)){
var ex__69004__auto__ = e91720;
var statearr_91721_91723 = state_91711;
(statearr_91721_91723[(5)] = ex__69004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91711);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e91720;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__69002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__91724 = state_91711;
state_91711 = G__91724;
continue;
} else {
return ret_value__69002__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__69001__auto__ = function(state_91711){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__69001__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__69001__auto____1.call(this,state_91711);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up$clear_$_state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__69001__auto____0;
figwheel$client$heads_up$clear_$_state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__69001__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__69001__auto__;
})()
;})(switch__69000__auto__,c__69114__auto__))
})();
var state__69116__auto__ = (function (){var statearr_91722 = f__69115__auto__.call(null);
(statearr_91722[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__69114__auto__);

return statearr_91722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__69116__auto__);
});})(c__69114__auto__))
);

return c__69114__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__69114__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__69114__auto__){
return (function (){
var f__69115__auto__ = (function (){var switch__69000__auto__ = ((function (c__69114__auto__){
return (function (state_91756){
var state_val_91757 = (state_91756[(1)]);
if((state_val_91757 === (1))){
var inst_91746 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_91756__$1 = state_91756;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_91756__$1,(2),inst_91746);
} else {
if((state_val_91757 === (2))){
var inst_91748 = (state_91756[(2)]);
var inst_91749 = cljs.core.async.timeout.call(null,(400));
var state_91756__$1 = (function (){var statearr_91758 = state_91756;
(statearr_91758[(7)] = inst_91748);

return statearr_91758;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_91756__$1,(3),inst_91749);
} else {
if((state_val_91757 === (3))){
var inst_91751 = (state_91756[(2)]);
var inst_91752 = figwheel.client.heads_up.clear.call(null);
var state_91756__$1 = (function (){var statearr_91759 = state_91756;
(statearr_91759[(8)] = inst_91751);

return statearr_91759;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_91756__$1,(4),inst_91752);
} else {
if((state_val_91757 === (4))){
var inst_91754 = (state_91756[(2)]);
var state_91756__$1 = state_91756;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_91756__$1,inst_91754);
} else {
return null;
}
}
}
}
});})(c__69114__auto__))
;
return ((function (switch__69000__auto__,c__69114__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__69001__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__69001__auto____0 = (function (){
var statearr_91763 = [null,null,null,null,null,null,null,null,null];
(statearr_91763[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__69001__auto__);

(statearr_91763[(1)] = (1));

return statearr_91763;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__69001__auto____1 = (function (state_91756){
while(true){
var ret_value__69002__auto__ = (function (){try{while(true){
var result__69003__auto__ = switch__69000__auto__.call(null,state_91756);
if(cljs.core.keyword_identical_QMARK_.call(null,result__69003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69003__auto__;
}
break;
}
}catch (e91764){if((e91764 instanceof Object)){
var ex__69004__auto__ = e91764;
var statearr_91765_91767 = state_91756;
(statearr_91765_91767[(5)] = ex__69004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91756);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e91764;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__69002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__91768 = state_91756;
state_91756 = G__91768;
continue;
} else {
return ret_value__69002__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__69001__auto__ = function(state_91756){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__69001__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__69001__auto____1.call(this,state_91756);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__69001__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__69001__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__69001__auto__;
})()
;})(switch__69000__auto__,c__69114__auto__))
})();
var state__69116__auto__ = (function (){var statearr_91766 = f__69115__auto__.call(null);
(statearr_91766[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__69114__auto__);

return statearr_91766;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__69116__auto__);
});})(c__69114__auto__))
);

return c__69114__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";
figwheel.client.heads_up.close_bad_compile_screen = (function figwheel$client$heads_up$close_bad_compile_screen(){
var temp__6738__auto__ = document.getElementById("figwheelFailScreen");
if(cljs.core.truth_(temp__6738__auto__)){
var el = temp__6738__auto__;
return goog.dom.removeNode(el);
} else {
return null;
}
});
figwheel.client.heads_up.bad_compile_screen = (function figwheel$client$heads_up$bad_compile_screen(){
var body = (goog.dom.getElementsByTagNameAndClass("body")[(0)]);
figwheel.client.heads_up.close_bad_compile_screen.call(null);

return goog.dom.append(body,goog.dom.createDom("div",({"id": "figwheelFailScreen", "style": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("background-color: rgba(24, 26, 38, 0.95);"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("position: absolute;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("z-index: 9000;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("width: 100vw;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("height: 100vh;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("top: 0px; left: 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-family: monospace")].join('')}),goog.dom.createDom("div",({"class": "message", "style": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("color: #FFF5DB;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("width: 100vw;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("margin: auto;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("margin-top: 10px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("text-align: center; "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("padding: 2px 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 13px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("position: relative")].join('')}),goog.dom.createDom("a",({"onclick": ((function (body){
return (function (e){
e.preventDefault();

return figwheel.client.heads_up.close_bad_compile_screen.call(null);
});})(body))
, "href": "javascript:", "style": "position: absolute; right: 10px; top: 10px; color: #666"}),"X"),goog.dom.createDom("h2",({"style": "color: #FFF5DB"}),"Figwheel Says: Your code didn't compile."),goog.dom.createDom("div",({"style": "font-size: 12px"}),goog.dom.createDom("p",({"style": "color: #D07D7D;"}),"Keep trying. This page will auto-refresh when your code compiles successfully.")))));
});

//# sourceMappingURL=heads_up.js.map?rel=1506064216943