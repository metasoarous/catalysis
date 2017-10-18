// Compiled by ClojureScript 1.9.542 {}
goog.provide('io.rkn.conformity.core');
goog.require('cljs.core');
goog.require('dat.sync.db');
goog.require('datascript.core');
io.rkn.conformity.core.default_conformity_attribute = new cljs.core.Keyword("confirmity","conformed-norms","confirmity/conformed-norms",1604599153);
/**
 * Transaction function to ensure each norm tx is executed exactly once
 */
io.rkn.conformity.core.ensure_norm_tx_txfn = (function io$rkn$conformity$core$ensure_norm_tx_txfn(db,norm_attr,norm,index_attr,index,tx){
if(cljs.core.seq.call(null,dat.sync.db.q.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?tx","?tx",778318308,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?na","?na",1324227212,null),new cljs.core.Symbol(null,"?nv","?nv",-1014956469,null),new cljs.core.Symbol(null,"?ia","?ia",-864392035,null),new cljs.core.Symbol(null,"?iv","?iv",1923524663,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?tx","?tx",778318308,null),new cljs.core.Symbol(null,"?na","?na",1324227212,null),new cljs.core.Symbol(null,"?nv","?nv",-1014956469,null),new cljs.core.Symbol(null,"?tx","?tx",778318308,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?tx","?tx",778318308,null),new cljs.core.Symbol(null,"?ia","?ia",-864392035,null),new cljs.core.Symbol(null,"?iv","?iv",1923524663,null),new cljs.core.Symbol(null,"?tx","?tx",778318308,null)], null)], null),db,norm_attr,norm,index_attr,index))){
return null;
} else {
return cljs.core.cons.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword("db","id","db/id",-1388397098),dat.sync.db.tempid_BANG_.call(null,db,new cljs.core.Keyword("db.part","tx","db.part/tx",-1480923213)),norm_attr,norm,index_attr,index]),tx);
}
});
/**
 * Returns the index-attr corresponding to a conformity-attr
 */
io.rkn.conformity.core.index_attr = (function io$rkn$conformity$core$index_attr(conformity_attr){
return cljs.core.keyword.call(null,cljs.core.namespace.call(null,conformity_attr),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,conformity_attr)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-index")].join(''));
});
/**
 * Returns true if a database has an attribute named attr-name
 */
io.rkn.conformity.core.has_attribute_QMARK_ = (function io$rkn$conformity$core$has_attribute_QMARK_(db,attr_name){
return cljs.core.boolean$.call(null,new cljs.core.Keyword("db.install","_attribute","db.install/_attribute",1853441294).cljs$core$IFn$_invoke$arity$1(dat.sync.db.entity.call(null,db,attr_name)));
});
/**
 * Returns true if a database has a function named fn-name
 */
io.rkn.conformity.core.has_function_QMARK_ = (function io$rkn$conformity$core$has_function_QMARK_(db,fn_name){
return cljs.core.boolean$.call(null,new cljs.core.Keyword("db","fn","db/fn",-1175261470).cljs$core$IFn$_invoke$arity$1(dat.sync.db.entity.call(null,db,fn_name)));
});
/**
 * Returns the default-conformity-attribute for a db.
 */
io.rkn.conformity.core.default_conformity_attribute_for_db = (function io$rkn$conformity$core$default_conformity_attribute_for_db(db){
var or__61290__auto__ = cljs.core.some.call(null,(function (p1__66272_SHARP_){
var and__61271__auto__ = io.rkn.conformity.core.has_attribute_QMARK_.call(null,db,p1__66272_SHARP_);
if(cljs.core.truth_(and__61271__auto__)){
return p1__66272_SHARP_;
} else {
return and__61271__auto__;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("conformity","conformed-norms","conformity/conformed-norms",1835094319),io.rkn.conformity.core.default_conformity_attribute], null));
if(cljs.core.truth_(or__61290__auto__)){
return or__61290__auto__;
} else {
return new cljs.core.Keyword("conformity","conformed-norms","conformity/conformed-norms",1835094319);
}
});
/**
 * Ensure that the two attributes and one transaction function
 *   required to track conformity via the conformity-attr keyword
 *   parameter are installed in the database.
 */
io.rkn.conformity.core.ensure_conformity_schema = (function io$rkn$conformity$core$ensure_conformity_schema(conn,conformity_attr){
if(cljs.core.truth_(io.rkn.conformity.core.has_attribute_QMARK_.call(null,dat.sync.db.db.call(null,conn),conformity_attr))){
} else {
dat.sync.db.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("db","id","db/id",-1388397098),dat.sync.db.tempid_BANG_.call(null,conn,new cljs.core.Keyword("db.part","db","db.part/db",-2028116570)),new cljs.core.Keyword("db","ident","db/ident",-737096),conformity_attr,new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","keyword","db.type/keyword",205926793),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db.cardinality","one","db.cardinality/one",1428352190),new cljs.core.Keyword("db","doc","db/doc",1913350069),"Name of this transaction's norm",new cljs.core.Keyword("db","index","db/index",-1531680669),true,new cljs.core.Keyword("db.install","_attribute","db.install/_attribute",1853441294),new cljs.core.Keyword("db.part","db","db.part/db",-2028116570)], null)], null));
}

if(cljs.core.truth_(io.rkn.conformity.core.has_attribute_QMARK_.call(null,dat.sync.db.db.call(null,conn),io.rkn.conformity.core.index_attr.call(null,conformity_attr)))){
} else {
dat.sync.db.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("db","id","db/id",-1388397098),dat.sync.db.tempid_BANG_.call(null,conn,new cljs.core.Keyword("db.part","db","db.part/db",-2028116570)),new cljs.core.Keyword("db","ident","db/ident",-737096),io.rkn.conformity.core.index_attr.call(null,conformity_attr),new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","long","db.type/long",700514073),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db.cardinality","one","db.cardinality/one",1428352190),new cljs.core.Keyword("db","doc","db/doc",1913350069),"Index of this transaction within its norm",new cljs.core.Keyword("db","index","db/index",-1531680669),true,new cljs.core.Keyword("db.install","_attribute","db.install/_attribute",1853441294),new cljs.core.Keyword("db.part","db","db.part/db",-2028116570)], null)], null));
}

if(cljs.core.truth_(io.rkn.conformity.core.has_function_QMARK_.call(null,dat.sync.db.db.call(null,conn),new cljs.core.Keyword("io.rkn.conformity.core","ensure-norm-tx-txfn","io.rkn.conformity.core/ensure-norm-tx-txfn",1464951422)))){
return null;
} else {
return dat.sync.db.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),dat.sync.db.tempid_BANG_.call(null,conn,new cljs.core.Keyword("db.part","user","db.part/user",-546775899)),new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("io.rkn.conformity.core","ensure-norm-tx-txfn","io.rkn.conformity.core/ensure-norm-tx-txfn",1464951422),new cljs.core.Keyword("db","doc","db/doc",1913350069),"Ensures each norm tx is executed exactly once",new cljs.core.Keyword("db","fn","db/fn",-1175261470),io.rkn.conformity.core.ensure_norm_tx_txfn], null)], null));
}
});
/**
 * Does database have a norm installed?
 * 
 *    conformity-attr  (optional) the keyword name of the attribute used to
 *                     track conformity
 *    norm             the keyword name of the norm you want to check
 *    tx-count         the count of transactions for that norm
 */
io.rkn.conformity.core.conforms_to_QMARK_ = (function io$rkn$conformity$core$conforms_to_QMARK_(var_args){
var args66273 = [];
var len__62575__auto___66276 = arguments.length;
var i__62576__auto___66277 = (0);
while(true){
if((i__62576__auto___66277 < len__62575__auto___66276)){
args66273.push((arguments[i__62576__auto___66277]));

var G__66278 = (i__62576__auto___66277 + (1));
i__62576__auto___66277 = G__66278;
continue;
} else {
}
break;
}

var G__66275 = args66273.length;
switch (G__66275) {
case 3:
return io.rkn.conformity.core.conforms_to_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return io.rkn.conformity.core.conforms_to_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args66273.length)].join('')));

}
});

io.rkn.conformity.core.conforms_to_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (db,norm,tx_count){
return io.rkn.conformity.core.conforms_to_QMARK_.call(null,db,io.rkn.conformity.core.default_conformity_attribute_for_db.call(null,db),norm,tx_count);
});

io.rkn.conformity.core.conforms_to_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (db,conformity_attr,norm,tx_count){
var and__61271__auto__ = io.rkn.conformity.core.has_attribute_QMARK_.call(null,db,conformity_attr);
if(cljs.core.truth_(and__61271__auto__)){
return ((tx_count > (0))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,dat.sync.db.q.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?tx","?tx",778318308,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?na","?na",1324227212,null),new cljs.core.Symbol(null,"?nv","?nv",-1014956469,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?tx","?tx",778318308,null),new cljs.core.Symbol(null,"?na","?na",1324227212,null),new cljs.core.Symbol(null,"?nv","?nv",-1014956469,null),new cljs.core.Symbol(null,"?tx","?tx",778318308,null)], null)], null),db,conformity_attr,norm)),tx_count));
} else {
return and__61271__auto__;
}
});

io.rkn.conformity.core.conforms_to_QMARK_.cljs$lang$maxFixedArity = 4;

/**
 * Reduces the seq of transactions for a norm into a transaction
 *   result accumulator
 */
io.rkn.conformity.core.reduce_txes = (function io$rkn$conformity$core$reduce_txes(acc,conn,norm_attr,norm_name,txes,sync_schema_timeout){
return cljs.core.reduce.call(null,(function (acc__$1,p__66287){
var vec__66288 = p__66287;
var tx_index = cljs.core.nth.call(null,vec__66288,(0),null);
var tx = cljs.core.nth.call(null,vec__66288,(1),null);
try{var safe_tx = (function (){var G__66292 = dat.sync.db.db_kind.call(null,conn);
var G__66292__$1 = (((G__66292 instanceof cljs.core.Keyword))?G__66292.fqn:null);
switch (G__66292__$1) {
case "datascript":
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",-151594418),io.rkn.conformity.core.ensure_norm_tx_txfn,norm_attr,norm_name,io.rkn.conformity.core.index_attr.call(null,norm_attr),tx_index,tx], null);

break;
case "datomic":
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("io.rkn.conformity.core","ensure-norm-tx-txfn","io.rkn.conformity.core/ensure-norm-tx-txfn",1464951422),norm_attr,norm_name,io.rkn.conformity.core.index_attr.call(null,norm_attr),tx_index,tx], null);

break;
case "wrapped-datomic":
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("io.rkn.conformity.core","ensure-norm-tx-txfn","io.rkn.conformity.core/ensure-norm-tx-txfn",1464951422),norm_attr,norm_name,io.rkn.conformity.core.index_attr.call(null,norm_attr),tx_index,tx], null);

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(dat.sync.db.db_kind.call(null,conn))].join('')));

}
})();
var _ = (function (){var G__66293 = dat.sync.db.db_kind.call(null,conn);
var G__66293__$1 = (((G__66293 instanceof cljs.core.Keyword))?G__66293.fqn:null);
switch (G__66293__$1) {
case "datascript":
return null;

break;
case "wrapped-datomic":
return new cljs.core.Keyword(null,"datomic","datomic",-1210223216);

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(dat.sync.db.db_kind.call(null,conn))].join('')));

}
})();
var tx_result = dat.sync.db.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [safe_tx], null));
if(cljs.core.next.call(null,new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1(tx_result))){
return cljs.core.conj.call(null,acc__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"norm-name","norm-name",638411765),norm_name,new cljs.core.Keyword(null,"tx-index","tx-index",-41169422),tx_index,new cljs.core.Keyword(null,"tx-result","tx-result",938751716),tx_result], null));
} else {
return acc__$1;
}
}catch (e66291){var t = e66291;
var reason = t.getMessage();
var data = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"succeeded","succeeded",-1860573089),acc__$1,new cljs.core.Keyword(null,"failed","failed",-1397425762),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"norm-name","norm-name",638411765),norm_name,new cljs.core.Keyword(null,"tx-index","tx-index",-41169422),tx_index,new cljs.core.Keyword(null,"reason","reason",-2070751759),reason], null)], null);
throw cljs.core.ex_info.call(null,reason,data,t);
}}),acc,cljs.core.map_indexed.call(null,cljs.core.vector,txes));
});
/**
 * Pull from `norm-map` the `norm-name` value. If the norm contains a
 *   `txes-fn` key, allow processing of that key to stand in for a `txes`
 *   value. Returns the value containing transactable data.
 */
io.rkn.conformity.core.get_norm = (function io$rkn$conformity$core$get_norm(conn,norm_map,norm_name){
var map__66298 = cljs.core.get.call(null,norm_map,norm_name);
var map__66298__$1 = ((((!((map__66298 == null)))?((((map__66298.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66298.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66298):map__66298);
var norm = map__66298__$1;
var txes = cljs.core.get.call(null,map__66298__$1,new cljs.core.Keyword(null,"txes","txes",-2122282744));
var txes_fn = cljs.core.get.call(null,map__66298__$1,new cljs.core.Keyword(null,"txes-fn","txes-fn",1819936070));
return norm;
});
/**
 * Reduces norms from a norm-map specified by a seq of norm-names into
 *   a transaction result accumulator
 */
io.rkn.conformity.core.reduce_norms = (function io$rkn$conformity$core$reduce_norms(acc,conn,norm_attr,norm_map,norm_names){
var sync_schema_timeout = new cljs.core.Keyword("conformity.setting","sync-schema-timeout","conformity.setting/sync-schema-timeout",1187188106).cljs$core$IFn$_invoke$arity$1(norm_map);
return cljs.core.reduce.call(null,((function (sync_schema_timeout){
return (function (acc__$1,norm_name){
var requires = new cljs.core.Keyword(null,"requires","requires",-1201390927).cljs$core$IFn$_invoke$arity$1(norm_name.call(null,norm_map));
var acc__$2 = (function (){var G__66304 = acc__$1;
if(cljs.core.truth_(requires)){
return io.rkn.conformity.core.reduce_norms.call(null,G__66304,conn,norm_attr,norm_map,requires);
} else {
return G__66304;
}
})();
var map__66303 = io.rkn.conformity.core.get_norm.call(null,conn,norm_map,norm_name);
var map__66303__$1 = ((((!((map__66303 == null)))?((((map__66303.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66303.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66303):map__66303);
var txes = cljs.core.get.call(null,map__66303__$1,new cljs.core.Keyword(null,"txes","txes",-2122282744));
var ex = cljs.core.get.call(null,map__66303__$1,new cljs.core.Keyword(null,"ex","ex",-1413771341));
if(cljs.core.truth_(io.rkn.conformity.core.conforms_to_QMARK_.call(null,dat.sync.db.db.call(null,conn),norm_attr,norm_name,cljs.core.count.call(null,txes)))){
return acc__$2;
} else {
if(cljs.core.empty_QMARK_.call(null,txes)){
var reason = (function (){var or__61290__auto__ = ex;
if(cljs.core.truth_(or__61290__auto__)){
return or__61290__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("No transactions provided for norm "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(norm_name)].join('');
}
})();
var data = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"succeeded","succeeded",-1860573089),acc__$2,new cljs.core.Keyword(null,"failed","failed",-1397425762),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"norm-name","norm-name",638411765),norm_name,new cljs.core.Keyword(null,"reason","reason",-2070751759),reason], null)], null);
throw cljs.core.ex_info.call(null,reason,data);
} else {
return io.rkn.conformity.core.reduce_txes.call(null,acc__$2,conn,norm_attr,norm_name,txes,sync_schema_timeout);

}
}
});})(sync_schema_timeout))
,acc,norm_names);
});
/**
 * Ensure that norms represented as datoms are conformed-to (installed), be they
 *   schema, data or otherwise.
 * 
 *    conformity-attr  (optional) the keyword name of the attribute used to
 *                     track conformity
 *    norm-map         a map from norm names to data maps.
 *                     a data map contains:
 *                       :txes     - the data to install
 *                       :txes-fn  - An alternative to txes, pointing to a
 *                                   symbol representing a fn on the classpath that
 *                                   will return transactions.
 *                       :requires - (optional) a list of prerequisite norms
 *                                   in norm-map.
 *    norm-names       (optional) A collection of names of norms to conform to.
 *                     Will use keys of norm-map if not provided.
 * 
 *   On success, returns a vector of maps with values for :norm-name, :tx-index,
 *   and :tx-result for each transaction that improved the db's conformity.
 * 
 *   On failure, throws an ex-info with a reason and data about any partial
 *   success before the failure.
 */
io.rkn.conformity.core.ensure_conforms = (function io$rkn$conformity$core$ensure_conforms(var_args){
var args66306 = [];
var len__62575__auto___66309 = arguments.length;
var i__62576__auto___66310 = (0);
while(true){
if((i__62576__auto___66310 < len__62575__auto___66309)){
args66306.push((arguments[i__62576__auto___66310]));

var G__66311 = (i__62576__auto___66310 + (1));
i__62576__auto___66310 = G__66311;
continue;
} else {
}
break;
}

var G__66308 = args66306.length;
switch (G__66308) {
case 2:
return io.rkn.conformity.core.ensure_conforms.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return io.rkn.conformity.core.ensure_conforms.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return io.rkn.conformity.core.ensure_conforms.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args66306.length)].join('')));

}
});

io.rkn.conformity.core.ensure_conforms.cljs$core$IFn$_invoke$arity$2 = (function (conn,norm_map){
return io.rkn.conformity.core.ensure_conforms.call(null,conn,norm_map,cljs.core.keys.call(null,norm_map));
});

io.rkn.conformity.core.ensure_conforms.cljs$core$IFn$_invoke$arity$3 = (function (conn,norm_map,norm_names){
return io.rkn.conformity.core.ensure_conforms.call(null,conn,io.rkn.conformity.core.default_conformity_attribute_for_db.call(null,dat.sync.db.db.call(null,conn)),norm_map,norm_names);
});

io.rkn.conformity.core.ensure_conforms.cljs$core$IFn$_invoke$arity$4 = (function (conn,conformity_attr,norm_map,norm_names){
io.rkn.conformity.core.ensure_conformity_schema.call(null,conn,conformity_attr);

return io.rkn.conformity.core.reduce_norms.call(null,cljs.core.PersistentVector.EMPTY,conn,conformity_attr,norm_map,norm_names);
});

io.rkn.conformity.core.ensure_conforms.cljs$lang$maxFixedArity = 4;

io.rkn.conformity.core.speculative_conn = (function io$rkn$conformity$core$speculative_conn(db){
var G__66315 = dat.sync.db.db_kind.call(null,db);
var G__66315__$1 = (((G__66315 instanceof cljs.core.Keyword))?G__66315.fqn:null);
switch (G__66315__$1) {
case "datascript":
return datascript.core.conn_from_db.call(null,db);

break;
case "datomic":
return null;

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(dat.sync.db.db_kind.call(null,db))].join('')));

}
});
/**
 * Variation of ensure-conforms that speculatively ensures norm are conformed to
 * 
 * On success, returns a map with:
 *   :db     the resulting database that conforms the the provided norms
 *   :result a vector of maps with values for :norm-name, :tx-index,
 *           and :tx-result for each transaction that improved the db's conformity.
 * 
 * On failure, throws an ex-info with a reason and data about any partial
 * success before the failure.
 */
io.rkn.conformity.core.with_conforms = (function io$rkn$conformity$core$with_conforms(var_args){
var args66317 = [];
var len__62575__auto___66320 = arguments.length;
var i__62576__auto___66321 = (0);
while(true){
if((i__62576__auto___66321 < len__62575__auto___66320)){
args66317.push((arguments[i__62576__auto___66321]));

var G__66322 = (i__62576__auto___66321 + (1));
i__62576__auto___66321 = G__66322;
continue;
} else {
}
break;
}

var G__66319 = args66317.length;
switch (G__66319) {
case 2:
return io.rkn.conformity.core.with_conforms.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return io.rkn.conformity.core.with_conforms.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return io.rkn.conformity.core.with_conforms.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args66317.length)].join('')));

}
});

io.rkn.conformity.core.with_conforms.cljs$core$IFn$_invoke$arity$2 = (function (db,norm_map){
return io.rkn.conformity.core.with_conforms.call(null,db,norm_map,cljs.core.keys.call(null,norm_map));
});

io.rkn.conformity.core.with_conforms.cljs$core$IFn$_invoke$arity$3 = (function (db,norm_map,norm_names){
return io.rkn.conformity.core.with_conforms.call(null,db,io.rkn.conformity.core.default_conformity_attribute_for_db.call(null,db),norm_map,norm_names);
});

io.rkn.conformity.core.with_conforms.cljs$core$IFn$_invoke$arity$4 = (function (db,conformity_attr,norm_map,norm_names){
var conn = io.rkn.conformity.core.speculative_conn.call(null,db);
io.rkn.conformity.core.ensure_conformity_schema.call(null,conn,conformity_attr);

var result = io.rkn.conformity.core.reduce_norms.call(null,cljs.core.PersistentVector.EMPTY,conn,conformity_attr,norm_map,norm_names);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),dat.sync.db.db.call(null,conn),new cljs.core.Keyword(null,"result","result",1415092211),result], null);
});

io.rkn.conformity.core.with_conforms.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=core.js.map?rel=1506321314148