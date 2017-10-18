// Compiled by ClojureScript 1.9.542 {}
goog.provide('datascript.core');
goog.require('cljs.core');
goog.require('datascript.db');
goog.require('datascript.pull_api');
goog.require('datascript.query');
goog.require('datascript.impl.entity');
goog.require('datascript.btset');
datascript.core.q = (function datascript$core$q(var_args){
var args__62127__auto__ = [];
var len__62120__auto___66303 = arguments.length;
var i__62121__auto___66304 = (0);
while(true){
if((i__62121__auto___66304 < len__62120__auto___66303)){
args__62127__auto__.push((arguments[i__62121__auto___66304]));

var G__66305 = (i__62121__auto___66304 + (1));
i__62121__auto___66304 = G__66305;
continue;
} else {
}
break;
}

var argseq__62128__auto__ = ((((1) < args__62127__auto__.length))?(new cljs.core.IndexedSeq(args__62127__auto__.slice((1)),(0),null)):null);
return datascript.core.q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__62128__auto__);
});

datascript.core.q.cljs$core$IFn$_invoke$arity$variadic = (function (q,inputs){
return null;
});

datascript.core.q.cljs$lang$maxFixedArity = (1);

datascript.core.q.cljs$lang$applyTo = (function (seq66301){
var G__66302 = cljs.core.first.call(null,seq66301);
var seq66301__$1 = cljs.core.next.call(null,seq66301);
return datascript.core.q.cljs$core$IFn$_invoke$arity$variadic(G__66302,seq66301__$1);
});

datascript.core.q = datascript.query.q;
datascript.core.entity = (function datascript$core$entity(db,eid){
return null;
});
datascript.core.entity = datascript.impl.entity.entity;
datascript.core.entity_db = (function datascript$core$entity_db(entity){
if(cljs.core.truth_(datascript.impl.entity.entity_QMARK_.call(null,entity))){
} else {
throw (new Error("Assert failed: (de/entity? entity)"));
}

return entity.db;
});
datascript.core.datom = (function datascript$core$datom(var_args){
var args66306 = [];
var len__62120__auto___66309 = arguments.length;
var i__62121__auto___66310 = (0);
while(true){
if((i__62121__auto___66310 < len__62120__auto___66309)){
args66306.push((arguments[i__62121__auto___66310]));

var G__66311 = (i__62121__auto___66310 + (1));
i__62121__auto___66310 = G__66311;
continue;
} else {
}
break;
}

var G__66308 = args66306.length;
switch (G__66308) {
case 3:
return datascript.core.datom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return datascript.core.datom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return datascript.core.datom.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args66306.length)].join('')));

}
});

datascript.core.datom.cljs$core$IFn$_invoke$arity$3 = (function (e,a,v){
return null;
});

datascript.core.datom.cljs$core$IFn$_invoke$arity$4 = (function (e,a,v,tx){
return null;
});

datascript.core.datom.cljs$core$IFn$_invoke$arity$5 = (function (e,a,v,tx,added){
return null;
});

datascript.core.datom.cljs$lang$maxFixedArity = 5;

datascript.core.datom = datascript.db.datom;
datascript.core.pull = (function datascript$core$pull(db,selector,eid){
return null;
});
datascript.core.pull = datascript.pull_api.pull;
datascript.core.pull_many = (function datascript$core$pull_many(db,selector,eids){
return null;
});
datascript.core.pull_many = datascript.pull_api.pull_many;
datascript.core.touch = (function datascript$core$touch(e){
return null;
});
datascript.core.touch = datascript.impl.entity.touch;
datascript.core.empty_db = (function datascript$core$empty_db(var_args){
var args66313 = [];
var len__62120__auto___66316 = arguments.length;
var i__62121__auto___66317 = (0);
while(true){
if((i__62121__auto___66317 < len__62120__auto___66316)){
args66313.push((arguments[i__62121__auto___66317]));

var G__66318 = (i__62121__auto___66317 + (1));
i__62121__auto___66317 = G__66318;
continue;
} else {
}
break;
}

var G__66315 = args66313.length;
switch (G__66315) {
case 0:
return datascript.core.empty_db.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args66313.length)].join('')));

}
});

datascript.core.empty_db.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
});

datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1 = (function (schema){
return null;
});

datascript.core.empty_db.cljs$lang$maxFixedArity = 1;

datascript.core.empty_db = datascript.db.empty_db;
datascript.core.init_db = (function datascript$core$init_db(var_args){
var args66320 = [];
var len__62120__auto___66323 = arguments.length;
var i__62121__auto___66324 = (0);
while(true){
if((i__62121__auto___66324 < len__62120__auto___66323)){
args66320.push((arguments[i__62121__auto___66324]));

var G__66325 = (i__62121__auto___66324 + (1));
i__62121__auto___66324 = G__66325;
continue;
} else {
}
break;
}

var G__66322 = args66320.length;
switch (G__66322) {
case 1:
return datascript.core.init_db.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return datascript.core.init_db.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args66320.length)].join('')));

}
});

datascript.core.init_db.cljs$core$IFn$_invoke$arity$1 = (function (datoms){
return null;
});

datascript.core.init_db.cljs$core$IFn$_invoke$arity$2 = (function (datoms,schema){
return null;
});

datascript.core.init_db.cljs$lang$maxFixedArity = 2;

datascript.core.init_db = datascript.db.init_db;
datascript.core.datom_QMARK_ = (function datascript$core$datom_QMARK_(x){
return null;
});
datascript.core.datom_QMARK_ = datascript.db.datom_QMARK_;
datascript.core.db_QMARK_ = (function datascript$core$db_QMARK_(x){
return null;
});
datascript.core.db_QMARK_ = datascript.db.db_QMARK_;
datascript.core.tx0 = datascript.db.tx0;
datascript.core.is_filtered = (function datascript$core$is_filtered(x){
return (x instanceof datascript.db.FilteredDB);
});
datascript.core.filter = (function datascript$core$filter(db,pred){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

if(cljs.core.truth_(datascript.core.is_filtered.call(null,db))){
var fdb = db;
var orig_pred = fdb.pred;
var orig_db = fdb.unfiltered_db;
return (new datascript.db.FilteredDB(orig_db,((function (fdb,orig_pred,orig_db){
return (function (p1__66327_SHARP_){
var and__60887__auto__ = orig_pred.call(null,p1__66327_SHARP_);
if(cljs.core.truth_(and__60887__auto__)){
return pred.call(null,orig_db,p1__66327_SHARP_);
} else {
return and__60887__auto__;
}
});})(fdb,orig_pred,orig_db))
,cljs.core.atom.call(null,(0)),null,null,null));
} else {
return (new datascript.db.FilteredDB(db,(function (p1__66328_SHARP_){
return pred.call(null,db,p1__66328_SHARP_);
}),cljs.core.atom.call(null,(0)),null,null,null));
}
});
datascript.core.with$ = (function datascript$core$with(var_args){
var args66329 = [];
var len__62120__auto___66332 = arguments.length;
var i__62121__auto___66333 = (0);
while(true){
if((i__62121__auto___66333 < len__62120__auto___66332)){
args66329.push((arguments[i__62121__auto___66333]));

var G__66334 = (i__62121__auto___66333 + (1));
i__62121__auto___66333 = G__66334;
continue;
} else {
}
break;
}

var G__66331 = args66329.length;
switch (G__66331) {
case 2:
return datascript.core.with$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.with$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args66329.length)].join('')));

}
});

datascript.core.with$.cljs$core$IFn$_invoke$arity$2 = (function (db,tx_data){
return datascript.core.with$.call(null,db,tx_data,null);
});

datascript.core.with$.cljs$core$IFn$_invoke$arity$3 = (function (db,tx_data,tx_meta){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

if(cljs.core.truth_(datascript.core.is_filtered.call(null,db))){
throw cljs.core.ex_info.call(null,"Filtered DB cannot be modified",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transaction","filtered","transaction/filtered",1699706605)], null));
} else {
return datascript.db.transact_tx_data.call(null,datascript.db.map__GT_TxReport.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"db-before","db-before",-553691536),db,new cljs.core.Keyword(null,"db-after","db-after",-571884666),db,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"tempids","tempids",1767509089),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta], null)),tx_data);
}
});

datascript.core.with$.cljs$lang$maxFixedArity = 3;

datascript.core.db_with = (function datascript$core$db_with(db,tx_data){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(datascript.core.with$.call(null,db,tx_data));
});
datascript.core.datoms = (function datascript$core$datoms(var_args){
var args66336 = [];
var len__62120__auto___66339 = arguments.length;
var i__62121__auto___66340 = (0);
while(true){
if((i__62121__auto___66340 < len__62120__auto___66339)){
args66336.push((arguments[i__62121__auto___66340]));

var G__66341 = (i__62121__auto___66340 + (1));
i__62121__auto___66340 = G__66341;
continue;
} else {
}
break;
}

var G__66338 = args66336.length;
switch (G__66338) {
case 2:
return datascript.core.datoms.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.datoms.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return datascript.core.datoms.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return datascript.core.datoms.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return datascript.core.datoms.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args66336.length)].join('')));

}
});

datascript.core.datoms.cljs$core$IFn$_invoke$arity$2 = (function (db,index){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._datoms.call(null,db,index,cljs.core.PersistentVector.EMPTY);
});

datascript.core.datoms.cljs$core$IFn$_invoke$arity$3 = (function (db,index,c1){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._datoms.call(null,db,index,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1], null));
});

datascript.core.datoms.cljs$core$IFn$_invoke$arity$4 = (function (db,index,c1,c2){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._datoms.call(null,db,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2], null));
});

datascript.core.datoms.cljs$core$IFn$_invoke$arity$5 = (function (db,index,c1,c2,c3){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._datoms.call(null,db,index,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2,c3], null));
});

datascript.core.datoms.cljs$core$IFn$_invoke$arity$6 = (function (db,index,c1,c2,c3,c4){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._datoms.call(null,db,index,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2,c3,c4], null));
});

datascript.core.datoms.cljs$lang$maxFixedArity = 6;

datascript.core.seek_datoms = (function datascript$core$seek_datoms(var_args){
var args66343 = [];
var len__62120__auto___66346 = arguments.length;
var i__62121__auto___66347 = (0);
while(true){
if((i__62121__auto___66347 < len__62120__auto___66346)){
args66343.push((arguments[i__62121__auto___66347]));

var G__66348 = (i__62121__auto___66347 + (1));
i__62121__auto___66347 = G__66348;
continue;
} else {
}
break;
}

var G__66345 = args66343.length;
switch (G__66345) {
case 2:
return datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args66343.length)].join('')));

}
});

datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$2 = (function (db,index){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._seek_datoms.call(null,db,index,cljs.core.PersistentVector.EMPTY);
});

datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$3 = (function (db,index,c1){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._seek_datoms.call(null,db,index,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1], null));
});

datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$4 = (function (db,index,c1,c2){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._seek_datoms.call(null,db,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2], null));
});

datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$5 = (function (db,index,c1,c2,c3){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._seek_datoms.call(null,db,index,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2,c3], null));
});

datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$6 = (function (db,index,c1,c2,c3,c4){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._seek_datoms.call(null,db,index,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2,c3,c4], null));
});

datascript.core.seek_datoms.cljs$lang$maxFixedArity = 6;

datascript.core.index_range = (function datascript$core$index_range(db,attr,start,end){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._index_range.call(null,db,attr,start,end);
});
datascript.core.entid = (function datascript$core$entid(db,eid){
return null;
});
datascript.core.entid = datascript.db.entid;
datascript.core.conn_QMARK_ = (function datascript$core$conn_QMARK_(conn){
var and__60887__auto__ = ((!((conn == null)))?((((conn.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === conn.cljs$core$IDeref$)))?true:(((!conn.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,conn):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,conn));
if(and__60887__auto__){
return datascript.db.db_QMARK_.call(null,cljs.core.deref.call(null,conn));
} else {
return and__60887__auto__;
}
});
datascript.core.conn_from_db = (function datascript$core$conn_from_db(db){
return cljs.core.atom.call(null,db,new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"listeners","listeners",394544445),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY)], null));
});
datascript.core.conn_from_datoms = (function datascript$core$conn_from_datoms(var_args){
var args66354 = [];
var len__62120__auto___66357 = arguments.length;
var i__62121__auto___66358 = (0);
while(true){
if((i__62121__auto___66358 < len__62120__auto___66357)){
args66354.push((arguments[i__62121__auto___66358]));

var G__66359 = (i__62121__auto___66358 + (1));
i__62121__auto___66358 = G__66359;
continue;
} else {
}
break;
}

var G__66356 = args66354.length;
switch (G__66356) {
case 1:
return datascript.core.conn_from_datoms.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return datascript.core.conn_from_datoms.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args66354.length)].join('')));

}
});

datascript.core.conn_from_datoms.cljs$core$IFn$_invoke$arity$1 = (function (datoms){
return datascript.core.conn_from_db.call(null,datascript.core.init_db.call(null,datoms));
});

datascript.core.conn_from_datoms.cljs$core$IFn$_invoke$arity$2 = (function (datoms,schema){
return datascript.core.conn_from_db.call(null,datascript.core.init_db.call(null,datoms,schema));
});

datascript.core.conn_from_datoms.cljs$lang$maxFixedArity = 2;

datascript.core.create_conn = (function datascript$core$create_conn(var_args){
var args66361 = [];
var len__62120__auto___66364 = arguments.length;
var i__62121__auto___66365 = (0);
while(true){
if((i__62121__auto___66365 < len__62120__auto___66364)){
args66361.push((arguments[i__62121__auto___66365]));

var G__66366 = (i__62121__auto___66365 + (1));
i__62121__auto___66365 = G__66366;
continue;
} else {
}
break;
}

var G__66363 = args66361.length;
switch (G__66363) {
case 0:
return datascript.core.create_conn.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return datascript.core.create_conn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args66361.length)].join('')));

}
});

datascript.core.create_conn.cljs$core$IFn$_invoke$arity$0 = (function (){
return datascript.core.conn_from_db.call(null,datascript.core.empty_db.call(null));
});

datascript.core.create_conn.cljs$core$IFn$_invoke$arity$1 = (function (schema){
return datascript.core.conn_from_db.call(null,datascript.core.empty_db.call(null,schema));
});

datascript.core.create_conn.cljs$lang$maxFixedArity = 1;

datascript.core._transact_BANG_ = (function datascript$core$_transact_BANG_(conn,tx_data,tx_meta){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

var report = cljs.core.atom.call(null,null);
cljs.core.swap_BANG_.call(null,conn,((function (report){
return (function (db){
var r = datascript.core.with$.call(null,db,tx_data,tx_meta);
cljs.core.reset_BANG_.call(null,report,r);

return new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(r);
});})(report))
);

return cljs.core.deref.call(null,report);
});
datascript.core.transact_BANG_ = (function datascript$core$transact_BANG_(var_args){
var args66368 = [];
var len__62120__auto___66381 = arguments.length;
var i__62121__auto___66382 = (0);
while(true){
if((i__62121__auto___66382 < len__62120__auto___66381)){
args66368.push((arguments[i__62121__auto___66382]));

var G__66383 = (i__62121__auto___66382 + (1));
i__62121__auto___66382 = G__66383;
continue;
} else {
}
break;
}

var G__66370 = args66368.length;
switch (G__66370) {
case 2:
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args66368.length)].join('')));

}
});

datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (conn,tx_data){
return datascript.core.transact_BANG_.call(null,conn,tx_data,null);
});

datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (conn,tx_data,tx_meta){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

var report = datascript.core._transact_BANG_.call(null,conn,tx_data,tx_meta);
var seq__66371_66385 = cljs.core.seq.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn))));
var chunk__66372_66386 = null;
var count__66373_66387 = (0);
var i__66374_66388 = (0);
while(true){
if((i__66374_66388 < count__66373_66387)){
var vec__66375_66389 = cljs.core._nth.call(null,chunk__66372_66386,i__66374_66388);
var __66390 = cljs.core.nth.call(null,vec__66375_66389,(0),null);
var callback_66391 = cljs.core.nth.call(null,vec__66375_66389,(1),null);
callback_66391.call(null,report);

var G__66392 = seq__66371_66385;
var G__66393 = chunk__66372_66386;
var G__66394 = count__66373_66387;
var G__66395 = (i__66374_66388 + (1));
seq__66371_66385 = G__66392;
chunk__66372_66386 = G__66393;
count__66373_66387 = G__66394;
i__66374_66388 = G__66395;
continue;
} else {
var temp__6738__auto___66396 = cljs.core.seq.call(null,seq__66371_66385);
if(temp__6738__auto___66396){
var seq__66371_66397__$1 = temp__6738__auto___66396;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66371_66397__$1)){
var c__61810__auto___66398 = cljs.core.chunk_first.call(null,seq__66371_66397__$1);
var G__66399 = cljs.core.chunk_rest.call(null,seq__66371_66397__$1);
var G__66400 = c__61810__auto___66398;
var G__66401 = cljs.core.count.call(null,c__61810__auto___66398);
var G__66402 = (0);
seq__66371_66385 = G__66399;
chunk__66372_66386 = G__66400;
count__66373_66387 = G__66401;
i__66374_66388 = G__66402;
continue;
} else {
var vec__66378_66403 = cljs.core.first.call(null,seq__66371_66397__$1);
var __66404 = cljs.core.nth.call(null,vec__66378_66403,(0),null);
var callback_66405 = cljs.core.nth.call(null,vec__66378_66403,(1),null);
callback_66405.call(null,report);

var G__66406 = cljs.core.next.call(null,seq__66371_66397__$1);
var G__66407 = null;
var G__66408 = (0);
var G__66409 = (0);
seq__66371_66385 = G__66406;
chunk__66372_66386 = G__66407;
count__66373_66387 = G__66408;
i__66374_66388 = G__66409;
continue;
}
} else {
}
}
break;
}

return report;
});

datascript.core.transact_BANG_.cljs$lang$maxFixedArity = 3;

datascript.core.reset_conn_BANG_ = (function datascript$core$reset_conn_BANG_(var_args){
var args66411 = [];
var len__62120__auto___66424 = arguments.length;
var i__62121__auto___66425 = (0);
while(true){
if((i__62121__auto___66425 < len__62120__auto___66424)){
args66411.push((arguments[i__62121__auto___66425]));

var G__66426 = (i__62121__auto___66425 + (1));
i__62121__auto___66425 = G__66426;
continue;
} else {
}
break;
}

var G__66413 = args66411.length;
switch (G__66413) {
case 2:
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args66411.length)].join('')));

}
});

datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (conn,db){
return datascript.core.reset_conn_BANG_.call(null,conn,db,null);
});

datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (conn,db,tx_meta){
var report = datascript.db.map__GT_TxReport.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"db-before","db-before",-553691536),cljs.core.deref.call(null,conn),new cljs.core.Keyword(null,"db-after","db-after",-571884666),db,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.concat.call(null,cljs.core.map.call(null,(function (p1__66410_SHARP_){
return cljs.core.assoc.call(null,p1__66410_SHARP_,new cljs.core.Keyword(null,"added","added",2057651688),false);
}),datascript.core.datoms.call(null,cljs.core.deref.call(null,conn),new cljs.core.Keyword(null,"eavt","eavt",-666437073))),datascript.core.datoms.call(null,db,new cljs.core.Keyword(null,"eavt","eavt",-666437073))),new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta], null));
cljs.core.reset_BANG_.call(null,conn,db);

var seq__66414_66428 = cljs.core.seq.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn))));
var chunk__66415_66429 = null;
var count__66416_66430 = (0);
var i__66417_66431 = (0);
while(true){
if((i__66417_66431 < count__66416_66430)){
var vec__66418_66432 = cljs.core._nth.call(null,chunk__66415_66429,i__66417_66431);
var __66433 = cljs.core.nth.call(null,vec__66418_66432,(0),null);
var callback_66434 = cljs.core.nth.call(null,vec__66418_66432,(1),null);
callback_66434.call(null,report);

var G__66435 = seq__66414_66428;
var G__66436 = chunk__66415_66429;
var G__66437 = count__66416_66430;
var G__66438 = (i__66417_66431 + (1));
seq__66414_66428 = G__66435;
chunk__66415_66429 = G__66436;
count__66416_66430 = G__66437;
i__66417_66431 = G__66438;
continue;
} else {
var temp__6738__auto___66439 = cljs.core.seq.call(null,seq__66414_66428);
if(temp__6738__auto___66439){
var seq__66414_66440__$1 = temp__6738__auto___66439;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66414_66440__$1)){
var c__61810__auto___66441 = cljs.core.chunk_first.call(null,seq__66414_66440__$1);
var G__66442 = cljs.core.chunk_rest.call(null,seq__66414_66440__$1);
var G__66443 = c__61810__auto___66441;
var G__66444 = cljs.core.count.call(null,c__61810__auto___66441);
var G__66445 = (0);
seq__66414_66428 = G__66442;
chunk__66415_66429 = G__66443;
count__66416_66430 = G__66444;
i__66417_66431 = G__66445;
continue;
} else {
var vec__66421_66446 = cljs.core.first.call(null,seq__66414_66440__$1);
var __66447 = cljs.core.nth.call(null,vec__66421_66446,(0),null);
var callback_66448 = cljs.core.nth.call(null,vec__66421_66446,(1),null);
callback_66448.call(null,report);

var G__66449 = cljs.core.next.call(null,seq__66414_66440__$1);
var G__66450 = null;
var G__66451 = (0);
var G__66452 = (0);
seq__66414_66428 = G__66449;
chunk__66415_66429 = G__66450;
count__66416_66430 = G__66451;
i__66417_66431 = G__66452;
continue;
}
} else {
}
}
break;
}

return db;
});

datascript.core.reset_conn_BANG_.cljs$lang$maxFixedArity = 3;

datascript.core.listen_BANG_ = (function datascript$core$listen_BANG_(var_args){
var args66453 = [];
var len__62120__auto___66456 = arguments.length;
var i__62121__auto___66457 = (0);
while(true){
if((i__62121__auto___66457 < len__62120__auto___66456)){
args66453.push((arguments[i__62121__auto___66457]));

var G__66458 = (i__62121__auto___66457 + (1));
i__62121__auto___66457 = G__66458;
continue;
} else {
}
break;
}

var G__66455 = args66453.length;
switch (G__66455) {
case 2:
return datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args66453.length)].join('')));

}
});

datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (conn,callback){
return datascript.core.listen_BANG_.call(null,conn,cljs.core.rand.call(null),callback);
});

datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (conn,key,callback){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn)),cljs.core.assoc,key,callback);

return key;
});

datascript.core.listen_BANG_.cljs$lang$maxFixedArity = 3;

datascript.core.unlisten_BANG_ = (function datascript$core$unlisten_BANG_(conn,key){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn)),cljs.core.dissoc,key);
});
datascript.core.data_readers = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol("datascript","Datom","datascript/Datom",-901340080,null),datascript.db.datom_from_reader,new cljs.core.Symbol("datascript","DB","datascript/DB",-487332776,null),datascript.db.db_from_reader], null);
var seq__66460_66470 = cljs.core.seq.call(null,datascript.core.data_readers);
var chunk__66461_66471 = null;
var count__66462_66472 = (0);
var i__66463_66473 = (0);
while(true){
if((i__66463_66473 < count__66462_66472)){
var vec__66464_66474 = cljs.core._nth.call(null,chunk__66461_66471,i__66463_66473);
var tag_66475 = cljs.core.nth.call(null,vec__66464_66474,(0),null);
var cb_66476 = cljs.core.nth.call(null,vec__66464_66474,(1),null);
cljs.reader.register_tag_parser_BANG_.call(null,tag_66475,cb_66476);

var G__66477 = seq__66460_66470;
var G__66478 = chunk__66461_66471;
var G__66479 = count__66462_66472;
var G__66480 = (i__66463_66473 + (1));
seq__66460_66470 = G__66477;
chunk__66461_66471 = G__66478;
count__66462_66472 = G__66479;
i__66463_66473 = G__66480;
continue;
} else {
var temp__6738__auto___66481 = cljs.core.seq.call(null,seq__66460_66470);
if(temp__6738__auto___66481){
var seq__66460_66482__$1 = temp__6738__auto___66481;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66460_66482__$1)){
var c__61810__auto___66483 = cljs.core.chunk_first.call(null,seq__66460_66482__$1);
var G__66484 = cljs.core.chunk_rest.call(null,seq__66460_66482__$1);
var G__66485 = c__61810__auto___66483;
var G__66486 = cljs.core.count.call(null,c__61810__auto___66483);
var G__66487 = (0);
seq__66460_66470 = G__66484;
chunk__66461_66471 = G__66485;
count__66462_66472 = G__66486;
i__66463_66473 = G__66487;
continue;
} else {
var vec__66467_66488 = cljs.core.first.call(null,seq__66460_66482__$1);
var tag_66489 = cljs.core.nth.call(null,vec__66467_66488,(0),null);
var cb_66490 = cljs.core.nth.call(null,vec__66467_66488,(1),null);
cljs.reader.register_tag_parser_BANG_.call(null,tag_66489,cb_66490);

var G__66491 = cljs.core.next.call(null,seq__66460_66482__$1);
var G__66492 = null;
var G__66493 = (0);
var G__66494 = (0);
seq__66460_66470 = G__66491;
chunk__66461_66471 = G__66492;
count__66462_66472 = G__66493;
i__66463_66473 = G__66494;
continue;
}
} else {
}
}
break;
}
datascript.core.last_tempid = cljs.core.atom.call(null,(-1000000));
datascript.core.tempid = (function datascript$core$tempid(var_args){
var args66495 = [];
var len__62120__auto___66498 = arguments.length;
var i__62121__auto___66499 = (0);
while(true){
if((i__62121__auto___66499 < len__62120__auto___66498)){
args66495.push((arguments[i__62121__auto___66499]));

var G__66500 = (i__62121__auto___66499 + (1));
i__62121__auto___66499 = G__66500;
continue;
} else {
}
break;
}

var G__66497 = args66495.length;
switch (G__66497) {
case 1:
return datascript.core.tempid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return datascript.core.tempid.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args66495.length)].join('')));

}
});

datascript.core.tempid.cljs$core$IFn$_invoke$arity$1 = (function (part){
if(cljs.core._EQ_.call(null,part,new cljs.core.Keyword("db.part","tx","db.part/tx",-1480923213))){
return new cljs.core.Keyword("db","current-tx","db/current-tx",1600722132);
} else {
return cljs.core.swap_BANG_.call(null,datascript.core.last_tempid,cljs.core.dec);
}
});

datascript.core.tempid.cljs$core$IFn$_invoke$arity$2 = (function (part,x){
if(cljs.core._EQ_.call(null,part,new cljs.core.Keyword("db.part","tx","db.part/tx",-1480923213))){
return new cljs.core.Keyword("db","current-tx","db/current-tx",1600722132);
} else {
return x;
}
});

datascript.core.tempid.cljs$lang$maxFixedArity = 2;

datascript.core.resolve_tempid = (function datascript$core$resolve_tempid(_db,tempids,tempid){
return cljs.core.get.call(null,tempids,tempid);
});
datascript.core.db = (function datascript$core$db(conn){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

return cljs.core.deref.call(null,conn);
});
datascript.core.transact = (function datascript$core$transact(var_args){
var args66502 = [];
var len__62120__auto___66508 = arguments.length;
var i__62121__auto___66509 = (0);
while(true){
if((i__62121__auto___66509 < len__62120__auto___66508)){
args66502.push((arguments[i__62121__auto___66509]));

var G__66510 = (i__62121__auto___66509 + (1));
i__62121__auto___66509 = G__66510;
continue;
} else {
}
break;
}

var G__66504 = args66502.length;
switch (G__66504) {
case 2:
return datascript.core.transact.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.transact.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args66502.length)].join('')));

}
});

datascript.core.transact.cljs$core$IFn$_invoke$arity$2 = (function (conn,tx_data){
return datascript.core.transact.call(null,conn,tx_data,null);
});

datascript.core.transact.cljs$core$IFn$_invoke$arity$3 = (function (conn,tx_data,tx_meta){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

var res = datascript.core.transact_BANG_.call(null,conn,tx_data,tx_meta);
if(typeof datascript.core.t_datascript$core66505 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IDerefWithTimeout}
 * @implements {cljs.core.IPending}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
datascript.core.t_datascript$core66505 = (function (conn,tx_data,tx_meta,res,meta66506){
this.conn = conn;
this.tx_data = tx_data;
this.tx_meta = tx_meta;
this.res = res;
this.meta66506 = meta66506;
this.cljs$lang$protocol_mask$partition0$ = 491520;
this.cljs$lang$protocol_mask$partition1$ = 1;
})
datascript.core.t_datascript$core66505.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (res){
return (function (_66507,meta66506__$1){
var self__ = this;
var _66507__$1 = this;
return (new datascript.core.t_datascript$core66505(self__.conn,self__.tx_data,self__.tx_meta,self__.res,meta66506__$1));
});})(res))
;

datascript.core.t_datascript$core66505.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (res){
return (function (_66507){
var self__ = this;
var _66507__$1 = this;
return self__.meta66506;
});})(res))
;

datascript.core.t_datascript$core66505.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (res){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.res;
});})(res))
;

datascript.core.t_datascript$core66505.prototype.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3 = ((function (res){
return (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return self__.res;
});})(res))
;

datascript.core.t_datascript$core66505.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = ((function (res){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(res))
;

datascript.core.t_datascript$core66505.getBasis = ((function (res){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"conn","conn",1918841190,null),new cljs.core.Symbol(null,"tx-data","tx-data",-1720276008,null),new cljs.core.Symbol(null,"tx-meta","tx-meta",-1495152575,null),new cljs.core.Symbol(null,"res","res",245523648,null),new cljs.core.Symbol(null,"meta66506","meta66506",1924296480,null)], null);
});})(res))
;

datascript.core.t_datascript$core66505.cljs$lang$type = true;

datascript.core.t_datascript$core66505.cljs$lang$ctorStr = "datascript.core/t_datascript$core66505";

datascript.core.t_datascript$core66505.cljs$lang$ctorPrWriter = ((function (res){
return (function (this__61556__auto__,writer__61557__auto__,opt__61558__auto__){
return cljs.core._write.call(null,writer__61557__auto__,"datascript.core/t_datascript$core66505");
});})(res))
;

datascript.core.__GT_t_datascript$core66505 = ((function (res){
return (function datascript$core$__GT_t_datascript$core66505(conn__$1,tx_data__$1,tx_meta__$1,res__$1,meta66506){
return (new datascript.core.t_datascript$core66505(conn__$1,tx_data__$1,tx_meta__$1,res__$1,meta66506));
});})(res))
;

}

return (new datascript.core.t_datascript$core66505(conn,tx_data,tx_meta,res,cljs.core.PersistentArrayMap.EMPTY));
});

datascript.core.transact.cljs$lang$maxFixedArity = 3;

datascript.core.future_call = (function datascript$core$future_call(f){
var res = cljs.core.atom.call(null,null);
var realized = cljs.core.atom.call(null,false);
setTimeout(((function (res,realized){
return (function (){
cljs.core.reset_BANG_.call(null,res,f.call(null));

return cljs.core.reset_BANG_.call(null,realized,true);
});})(res,realized))
,(0));

if(typeof datascript.core.t_datascript$core66515 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IDerefWithTimeout}
 * @implements {cljs.core.IPending}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
datascript.core.t_datascript$core66515 = (function (f,res,realized,meta66516){
this.f = f;
this.res = res;
this.realized = realized;
this.meta66516 = meta66516;
this.cljs$lang$protocol_mask$partition0$ = 491520;
this.cljs$lang$protocol_mask$partition1$ = 1;
})
datascript.core.t_datascript$core66515.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (res,realized){
return (function (_66517,meta66516__$1){
var self__ = this;
var _66517__$1 = this;
return (new datascript.core.t_datascript$core66515(self__.f,self__.res,self__.realized,meta66516__$1));
});})(res,realized))
;

datascript.core.t_datascript$core66515.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (res,realized){
return (function (_66517){
var self__ = this;
var _66517__$1 = this;
return self__.meta66516;
});})(res,realized))
;

datascript.core.t_datascript$core66515.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (res,realized){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.res);
});})(res,realized))
;

datascript.core.t_datascript$core66515.prototype.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3 = ((function (res,realized){
return (function (_,___$1,timeout_val){
var self__ = this;
var ___$2 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,self__.realized))){
return cljs.core.deref.call(null,self__.res);
} else {
return timeout_val;
}
});})(res,realized))
;

datascript.core.t_datascript$core66515.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = ((function (res,realized){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.realized);
});})(res,realized))
;

datascript.core.t_datascript$core66515.getBasis = ((function (res,realized){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"res","res",245523648,null),new cljs.core.Symbol(null,"realized","realized",1487343404,null),new cljs.core.Symbol(null,"meta66516","meta66516",653155917,null)], null);
});})(res,realized))
;

datascript.core.t_datascript$core66515.cljs$lang$type = true;

datascript.core.t_datascript$core66515.cljs$lang$ctorStr = "datascript.core/t_datascript$core66515";

datascript.core.t_datascript$core66515.cljs$lang$ctorPrWriter = ((function (res,realized){
return (function (this__61556__auto__,writer__61557__auto__,opt__61558__auto__){
return cljs.core._write.call(null,writer__61557__auto__,"datascript.core/t_datascript$core66515");
});})(res,realized))
;

datascript.core.__GT_t_datascript$core66515 = ((function (res,realized){
return (function datascript$core$future_call_$___GT_t_datascript$core66515(f__$1,res__$1,realized__$1,meta66516){
return (new datascript.core.t_datascript$core66515(f__$1,res__$1,realized__$1,meta66516));
});})(res,realized))
;

}

return (new datascript.core.t_datascript$core66515(f,res,realized,cljs.core.PersistentArrayMap.EMPTY));
});
datascript.core.transact_async = (function datascript$core$transact_async(var_args){
var args66518 = [];
var len__62120__auto___66521 = arguments.length;
var i__62121__auto___66522 = (0);
while(true){
if((i__62121__auto___66522 < len__62120__auto___66521)){
args66518.push((arguments[i__62121__auto___66522]));

var G__66523 = (i__62121__auto___66522 + (1));
i__62121__auto___66522 = G__66523;
continue;
} else {
}
break;
}

var G__66520 = args66518.length;
switch (G__66520) {
case 2:
return datascript.core.transact_async.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.transact_async.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args66518.length)].join('')));

}
});

datascript.core.transact_async.cljs$core$IFn$_invoke$arity$2 = (function (conn,tx_data){
return datascript.core.transact_async.call(null,conn,tx_data,null);
});

datascript.core.transact_async.cljs$core$IFn$_invoke$arity$3 = (function (conn,tx_data,tx_meta){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

return datascript.core.future_call.call(null,(function (){
return datascript.core.transact_BANG_.call(null,conn,tx_data,tx_meta);
}));
});

datascript.core.transact_async.cljs$lang$maxFixedArity = 3;

datascript.core.rand_bits = (function datascript$core$rand_bits(pow){
return cljs.core.rand_int.call(null,((1) << pow));
});
datascript.core.to_hex_string = (function datascript$core$to_hex_string(n,l){
var s = n.toString((16));
var c = cljs.core.count.call(null,s);
if((c > l)){
return cljs.core.subs.call(null,s,(0),l);
} else {
if((c < l)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(l - c),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
} else {
return s;

}
}
});
datascript.core.squuid = (function datascript$core$squuid(var_args){
var args66525 = [];
var len__62120__auto___66528 = arguments.length;
var i__62121__auto___66529 = (0);
while(true){
if((i__62121__auto___66529 < len__62120__auto___66528)){
args66525.push((arguments[i__62121__auto___66529]));

var G__66530 = (i__62121__auto___66529 + (1));
i__62121__auto___66529 = G__66530;
continue;
} else {
}
break;
}

var G__66527 = args66525.length;
switch (G__66527) {
case 0:
return datascript.core.squuid.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return datascript.core.squuid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args66525.length)].join('')));

}
});

datascript.core.squuid.cljs$core$IFn$_invoke$arity$0 = (function (){
return datascript.core.squuid.call(null,(new Date()).getTime());
});

datascript.core.squuid.cljs$core$IFn$_invoke$arity$1 = (function (msec){
return cljs.core.uuid.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.core.to_hex_string.call(null,((msec / (1000)) | (0)),(8))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.core.to_hex_string.call(null,datascript.core.rand_bits.call(null,(16)),(4))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.core.to_hex_string.call(null,((datascript.core.rand_bits.call(null,(16)) & (4095)) | (16384)),(4))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.core.to_hex_string.call(null,((datascript.core.rand_bits.call(null,(16)) & (16383)) | (32768)),(4))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.core.to_hex_string.call(null,datascript.core.rand_bits.call(null,(16)),(4))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.core.to_hex_string.call(null,datascript.core.rand_bits.call(null,(16)),(4))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.core.to_hex_string.call(null,datascript.core.rand_bits.call(null,(16)),(4)))].join(''));
});

datascript.core.squuid.cljs$lang$maxFixedArity = 1;

datascript.core.squuid_time_millis = (function datascript$core$squuid_time_millis(uuid){
return (parseInt(cljs.core.subs.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid)].join(''),(0),(8)),(16)) * (1000));
});

//# sourceMappingURL=core.js.map?rel=1506064176555