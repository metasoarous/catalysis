// Compiled by ClojureScript 1.9.542 {}
goog.provide('dat.sys.views');
goog.require('cljs.core');
goog.require('dat.view');
goog.require('posh.reagent');
goog.require('reagent.core');
goog.require('taoensso.timbre');
goog.require('re_com.core');
dat.sys.views.time_entry = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("e","name","e/name",1843675300),new cljs.core.Keyword("time.entry","start-time","time.entry/start-time",199269375),new cljs.core.Keyword("time.entry","stop-time","time.entry/stop-time",-1566421731),new cljs.core.Keyword("e","description","e/description",-1428560395)], null);
dat.sys.views.base_todo_view = cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("e","name","e/name",1843675300),new cljs.core.Keyword("e","description","e/description",-1428560395),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("e","category","e/category",-593092683),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("e","name","e/name",1843675300),new cljs.core.Keyword("e","description","e/description",-1428560395)], null),new cljs.core.Keyword("e","tags","e/tags",1771419004),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("e","name","e/name",1843675300),new cljs.core.Keyword("e","description","e/description",-1428560395)], null),new cljs.core.Keyword("todo","time-entries","todo/time-entries",-1200230295),dat.sys.views.time_entry], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"attributes","attributes",-74013604),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"attr-view","attr-view",-1060936077),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),""], null)], null)], null),new cljs.core.Keyword("dat.view","summary","dat.view/summary",-1365389012),dat.view.pull_summary_view], null));
dat.sys.views.todo_view = (function dat$sys$views$todo_view(var_args){
var args75379 = [];
var len__62575__auto___75382 = arguments.length;
var i__62576__auto___75383 = (0);
while(true){
if((i__62576__auto___75383 < len__62575__auto___75382)){
args75379.push((arguments[i__62576__auto___75383]));

var G__75384 = (i__62576__auto___75383 + (1));
i__62576__auto___75383 = G__75384;
continue;
} else {
}
break;
}

var G__75381 = args75379.length;
switch (G__75381) {
case 0:
return dat.sys.views.todo_view.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return dat.sys.views.todo_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args75379.length)].join('')));

}
});

dat.sys.views.todo_view.cljs$core$IFn$_invoke$arity$0 = (function (){
return dat.sys.views.base_todo_view;
});

dat.sys.views.todo_view.cljs$core$IFn$_invoke$arity$1 = (function (depth){
if(!((depth === (0)))){
return cljs.core.conj.call(null,dat.sys.views.base_todo_view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("todo","subtasks","todo/subtasks",-2073367907),dat.sys.views.todo_view.call(null,(depth - (1)))], null));
} else {
return dat.sys.views.base_todo_view;
}
});

dat.sys.views.todo_view.cljs$lang$maxFixedArity = 1;

dat.sys.views.type_instance_eids_rx = (function dat$sys$views$type_instance_eids_rx(app,type_ident){
return posh.reagent.q.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?type-ident","?type-ident",-1355222271,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("e","type","e/type",1174270209),new cljs.core.Symbol(null,"?type","?type",-1287409101,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?type","?type",-1287409101,null),new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Symbol(null,"?type-ident","?type-ident",-1355222271,null)], null)], null),new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(app),type_ident);
});
dat.sys.views.todos_view = (function dat$sys$views$todos_view(app){
var todo_eids = cljs.core.deref.call(null,dat.sys.views.type_instance_eids_rx.call(null,app,new cljs.core.Keyword("e.type","Todo","e.type/Todo",784779788)));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"margin","margin",-995903681),"20px 5px 5px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Todos"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Below are forms and views for each todo item in the database:"], null),(function (){var iter__62216__auto__ = ((function (todo_eids){
return (function dat$sys$views$todos_view_$_iter__75390(s__75391){
return (new cljs.core.LazySeq(null,((function (todo_eids){
return (function (){
var s__75391__$1 = s__75391;
while(true){
var temp__6738__auto__ = cljs.core.seq.call(null,s__75391__$1);
if(temp__6738__auto__){
var s__75391__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__75391__$2)){
var c__62214__auto__ = cljs.core.chunk_first.call(null,s__75391__$2);
var size__62215__auto__ = cljs.core.count.call(null,c__62214__auto__);
var b__75393 = cljs.core.chunk_buffer.call(null,size__62215__auto__);
if((function (){var i__75392 = (0);
while(true){
if((i__75392 < size__62215__auto__)){
var todo = cljs.core._nth.call(null,c__62214__auto__,i__75392);
cljs.core.chunk_append.call(null,b__75393,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"20px 5px"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dat.view.pull_form,app,dat.sys.views.todo_view.call(null,(1)),todo], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dat.view.pull_view,app,dat.sys.views.todo_view.call(null,(1)),todo], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),todo], null)));

var G__75394 = (i__75392 + (1));
i__75392 = G__75394;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__75393),dat$sys$views$todos_view_$_iter__75390.call(null,cljs.core.chunk_rest.call(null,s__75391__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__75393),null);
}
} else {
var todo = cljs.core.first.call(null,s__75391__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"20px 5px"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dat.view.pull_form,app,dat.sys.views.todo_view.call(null,(1)),todo], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dat.view.pull_view,app,dat.sys.views.todo_view.call(null,(1)),todo], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),todo], null)),dat$sys$views$todos_view_$_iter__75390.call(null,cljs.core.rest.call(null,s__75391__$2)));
}
} else {
return null;
}
break;
}
});})(todo_eids))
,null,null));
});})(todo_eids))
;
return iter__62216__auto__.call(null,todo_eids);
})()], null)], null);
});
dat.sys.views.main = (function dat$sys$views$main(app){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"margin","margin",-995903681),"15px",new cljs.core.Keyword(null,"gap","gap",80255254),"15px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Datsys"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"18px"], null)], null),"Congrats! You've got a Datsys app running :-)"], null),taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dat.sys.views","/tmp/form-init3486417385122683475.clj",95,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["inside the main function"], null);
}),null)),null,1380636021),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dat.view.debug,"Here's a debug example:",cljs.core.deref.call(null,posh.reagent.q.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"?t-ident","?t-ident",1372739338,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("e","type","e/type",1174270209),new cljs.core.Symbol(null,"?t","?t",1786819229,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?t","?t",1786819229,null),new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Symbol(null,"?t-ident","?t-ident",1372739338,null)], null)], null),new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(app)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dat.sys.views.todos_view,app], null)], null)], null);
});

//# sourceMappingURL=views.js.map?rel=1506323312202