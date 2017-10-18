// Compiled by ClojureScript 1.9.542 {}
goog.provide('dat.sync.client');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('dat.remote');
goog.require('dat.reactor');
goog.require('dat.reactor.dispatcher');
goog.require('dat.sync.utils');
goog.require('datascript.core');
goog.require('com.stuartsierra.component');
goog.require('taoensso.timbre');
/**
 * Takes a transaction map form and translates it into a collection of list forms
 */
dat.sync.client.normalized_tx_map_form = (function dat$sync$client$normalized_tx_map_form(m){
var temp__6736__auto__ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__6736__auto__)){
var m_id = temp__6736__auto__;
return cljs.core.mapcat.call(null,((function (m_id,temp__6736__auto__){
return (function (p__88169){
var vec__88170 = p__88169;
var k = cljs.core.nth.call(null,vec__88170,(0),null);
var v = cljs.core.nth.call(null,vec__88170,(1),null);
return dat.sync.client.normalized_tx_list_form.call(null,new cljs.core.Keyword("db","add","db/add",235286841),m_id,k,v);
});})(m_id,temp__6736__auto__))
,cljs.core.dissoc.call(null,m,new cljs.core.Keyword("db","id","db/id",-1388397098)));
} else {
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"dat.sync.client","/tmp/form-init8382301926859034614.clj",40,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (temp__6736__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Tx map form does not have a :db/id:",m], null);
});})(temp__6736__auto__))
,null)),null,1389783389);

var message = "Tx map form doesn't not have a :db/id";
throw (new Error(message));
}
});
/**
 * Takes a transaction list form and normalizes it's values, such that any maps or collections are expanded
 *   into list forms and concat'd onto the argument list form.
 */
dat.sync.client.normalized_tx_list_form = (function dat$sync$client$normalized_tx_list_form(var_args){
var args88173 = [];
var len__62120__auto___88180 = arguments.length;
var i__62121__auto___88181 = (0);
while(true){
if((i__62121__auto___88181 < len__62120__auto___88180)){
args88173.push((arguments[i__62121__auto___88181]));

var G__88182 = (i__62121__auto___88181 + (1));
i__62121__auto___88181 = G__88182;
continue;
} else {
}
break;
}

var G__88175 = args88173.length;
switch (G__88175) {
case 4:
return dat.sync.client.normalized_tx_list_form.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 1:
return dat.sync.client.normalized_tx_list_form.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args88173.length)].join('')));

}
});

dat.sync.client.normalized_tx_list_form.cljs$core$IFn$_invoke$arity$4 = (function (op,e,a,v){
if(cljs.core.map_QMARK_.call(null,v)){
return cljs.core.conj.call(null,dat.sync.client.normalized_tx_map_form.call(null,v),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,e,a,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(v)], null));
} else {
if(cljs.core.coll_QMARK_.call(null,v)){
return cljs.core.mapcat.call(null,cljs.core.partial.call(null,dat.sync.client.normalized_tx_list_form,op,e,a),v);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,e,a,v], null)], null);

}
}
});

dat.sync.client.normalized_tx_list_form.cljs$core$IFn$_invoke$arity$1 = (function (p__88176){
var vec__88177 = p__88176;
var op = cljs.core.nth.call(null,vec__88177,(0),null);
var e = cljs.core.nth.call(null,vec__88177,(1),null);
var a = cljs.core.nth.call(null,vec__88177,(2),null);
var v = cljs.core.nth.call(null,vec__88177,(3),null);
return dat.sync.client.normalized_tx_list_form.call(null,op,e,a,v);
});

dat.sync.client.normalized_tx_list_form.cljs$lang$maxFixedArity = 4;

dat.sync.client.normalized_tx_form = (function dat$sync$client$normalized_tx_form(tx_form){
if(cljs.core.map_QMARK_.call(null,tx_form)){
return dat.sync.client.normalized_tx_map_form.call(null,tx_form);
} else {
if(cljs.core.coll_QMARK_.call(null,tx_form)){
return dat.sync.client.normalized_tx_list_form.call(null,tx_form);
} else {
return null;
}
}
});
/**
 * Normalizes a transaction specification such that any map or :db.cardinality/many collection forms are expanded into list form
 */
dat.sync.client.normalize_tx = (function dat$sync$client$normalize_tx(tx){
return cljs.core.mapcat.call(null,dat.sync.client.normalized_tx_form,tx);
});
/**
 * The base satsync schema
 */
dat.sync.client.base_schema = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("e","type","e/type",1174270209),new cljs.core.Keyword("attribute.ref","types","attribute.ref/types",-780449566),new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("dat.sync","diff","dat.sync/diff",-412127223),new cljs.core.Keyword("dat.sync.remote.db","id","dat.sync.remote.db/id",-1585153142),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("dat.sync.tx","origin","dat.sync.tx/origin",-493816040),new cljs.core.Keyword("dat.sync","route","dat.sync/route",1000690783)],[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","doc","db/doc",1913350069),"An entity that represents all of the persisted changes to an entity that have not been confirmed yet."], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722),new cljs.core.Keyword("db","doc","db/doc",1913350069),"The eid of the entity on the remote."], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","doc","db/doc",1913350069),"The origin of the transaction. Should be either :dat.sync.tx.origin/remote or .../local"], null),cljs.core.PersistentArrayMap.EMPTY]);
dat.sync.client.schema_idents = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("e","type","e/type",1174270209),new cljs.core.Keyword("attribute.ref","types","attribute.ref/types",-780449566)], null);
dat.sync.client.ident_pulls = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (ident){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ident,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096)], null)], null);
}),dat.sync.client.schema_idents));
dat.sync.client.schema_query = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__61833__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),dat.sync.client.ident_pulls], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__61833__auto__);
})(),new cljs.core.Symbol(null,"?e","?e",-1194391683,null)),new cljs.core.Symbol(null,"pull","pull",779986722,null)),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("db","ident","db/ident",-737096)], null)], null);
dat.sync.client.replace_ident = (function dat$sync$client$replace_ident(entity,attr){
return cljs.core.update.call(null,entity,attr,new cljs.core.Keyword("db","ident","db/ident",-737096));
});
dat.sync.client.schema = (function dat$sync$client$schema(db){
var schema = datascript.core.q.call(null,dat.sync.client.schema_query,db);
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (schema){
return (function (schema_entity){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(schema_entity),cljs.core.update.call(null,cljs.core.assoc.call(null,cljs.core.reduce.call(null,dat.sync.client.replace_ident,schema_entity,dat.sync.client.schema_idents),new cljs.core.Keyword("dat.sync.remote.db","valueType","dat.sync.remote.db/valueType",1761535388),new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1(schema_entity)),new cljs.core.Keyword("db","valueType","db/valueType",1827971944),((function (schema){
return (function (value_type_ident){
if(cljs.core._EQ_.call(null,value_type_ident,new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079))){
return value_type_ident;
} else {
return null;
}
});})(schema))
)], null);
});})(schema))
,schema));
});
/**
 * Extracts the schema (presently defined as anything with an :db/ident attribute) from the translation tx, or if a db is specified,
 *   it's schema is used. It's assumed here the 
 */
dat.sync.client.tx_schema_changes = (function dat$sync$client$tx_schema_changes(var_args){
var args88185 = [];
var len__62120__auto___88193 = arguments.length;
var i__62121__auto___88194 = (0);
while(true){
if((i__62121__auto___88194 < len__62120__auto___88193)){
args88185.push((arguments[i__62121__auto___88194]));

var G__88195 = (i__62121__auto___88194 + (1));
i__62121__auto___88194 = G__88195;
continue;
} else {
}
break;
}

var G__88187 = args88185.length;
switch (G__88187) {
case 2:
return dat.sync.client.tx_schema_changes.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dat.sync.client.tx_schema_changes.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args88185.length)].join('')));

}
});

dat.sync.client.tx_schema_changes.cljs$core$IFn$_invoke$arity$2 = (function (db,tx){
var new_ident_changes = dat.sync.client.tx_schema_changes.call(null,tx);
var old_ident_eids = cljs.core.set.call(null,datascript.core.q.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("db","ident","db/ident",-737096)], null)], null)));
var changes_to_old_eids = cljs.core.filter.call(null,((function (new_ident_changes,old_ident_eids){
return (function (p__88188){
var vec__88189 = p__88188;
var op = cljs.core.nth.call(null,vec__88189,(0),null);
var e = cljs.core.nth.call(null,vec__88189,(1),null);
var a = cljs.core.nth.call(null,vec__88189,(2),null);
var v = cljs.core.nth.call(null,vec__88189,(3),null);
var datom = vec__88189;
try{return old_ident_eids.call(null,e);
}catch (e88192){var e__$1 = e88192;
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"dat.sync.client","/tmp/form-init8382301926859034614.clj",140,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e__$1,vec__88189,op,e,a,v,datom,new_ident_changes,old_ident_eids){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__$1,"Failed to grok datom in tx-schema-changes"], null);
});})(e__$1,vec__88189,op,e,a,v,datom,new_ident_changes,old_ident_eids))
,null)),null,1661939247);
}});})(new_ident_changes,old_ident_eids))
,tx);
var tx__$1 = cljs.core.vec.call(null,cljs.core.distinct.call(null,cljs.core.concat.call(null,new_ident_changes,changes_to_old_eids)));
return tx__$1;
});

dat.sync.client.tx_schema_changes.cljs$core$IFn$_invoke$arity$1 = (function (tx){
var schema_eids = cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.second,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core._EQ_,new cljs.core.Keyword("db","ident","db/ident",-737096)),(function (p1__88184_SHARP_){
return cljs.core.nth.call(null,p1__88184_SHARP_,(2));
})),tx)));
return cljs.core.filter.call(null,cljs.core.comp.call(null,schema_eids,cljs.core.second),tx);
});

dat.sync.client.tx_schema_changes.cljs$lang$maxFixedArity = 2;

dat.sync.client.ref_ident_or_value = (function dat$sync$client$ref_ident_or_value(db,attr,v){
var or__60899__auto__ = (function (){var and__60887__auto__ = cljs.core.integer_QMARK_.call(null,v);
if(and__60887__auto__){
var and__60887__auto____$1 = datascript.core.q.call(null,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?attr","?attr",-2066507837,null),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?attr","?attr",-2066507837,null),new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Symbol(null,"?attr-ident","?attr-ident",1043001135,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?attr","?attr",-2066507837,null),new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Symbol(null,"?attr-value-type","?attr-value-type",781210451,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?attr-value-type","?attr-value-type",781210451,null),new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?attr-ident","?attr-ident",1043001135,null)], null),db,attr);
if(cljs.core.truth_(and__60887__auto____$1)){
return datascript.core.q.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?val-ident","?val-ident",1020747701,null),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?val","?val",-44429635,null),new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Symbol(null,"?val-ident","?val-ident",1020747701,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?val","?val",-44429635,null)], null),db,v);
} else {
return and__60887__auto____$1;
}
} else {
return and__60887__auto__;
}
})();
if(cljs.core.truth_(or__60899__auto__)){
return or__60899__auto__;
} else {
return v;
}
});
/**
 * Takes the schema related tx-forms from an import tx (as given to us via the output of tx-schema-changes) and returns
 *   the merge of this schema data into the db's existing schema definition.
 */
dat.sync.client.schema_with_changes = (function dat$sync$client$schema_with_changes(db,tx){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dat.sync.client","/tmp/form-init8382301926859034614.clj",179,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Calling schema-with-changes"], null);
}),null)),null,118304142);

var tx__$1 = dat.sync.client.normalize_tx.call(null,tx);
var db_SINGLEQUOTE_ = datascript.core.db_with.call(null,db,tx__$1);
var _ = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dat.sync.client","/tmp/form-init8382301926859034614.clj",182,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (tx__$1,db_SINGLEQUOTE_){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["With db"], null);
});})(tx__$1,db_SINGLEQUOTE_))
,null)),null,1626629709);
var new_schema = dat.sync.client.schema.call(null,db_SINGLEQUOTE_);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dat.sync.client","/tmp/form-init8382301926859034614.clj",184,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (tx__$1,db_SINGLEQUOTE_,_,new_schema){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Done with schema-with-changes"], null);
});})(tx__$1,db_SINGLEQUOTE_,_,new_schema))
,null)),null,1788343871);

taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dat.sync.client","/tmp/form-init8382301926859034614.clj",185,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (tx__$1,db_SINGLEQUOTE_,_,new_schema){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Some schema changes...",new cljs.core.Keyword("optiq","last","optiq/last",943180417).cljs$core$IFn$_invoke$arity$1(new_schema)], null);
});})(tx__$1,db_SINGLEQUOTE_,_,new_schema))
,null)),null,-1942577226);

return cljs.core.merge_with.call(null,cljs.core.merge,new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(db),new_schema);
});
dat.sync.client.comp_tx_middleware = (function dat$sync$client$comp_tx_middleware(db,fns){
if(cljs.core.seq_QMARK_.call(null,fns)){
return cljs.core.apply.call(null,cljs.core.comp,cljs.core.map.call(null,(function (p1__88197_SHARP_){
return cljs.core.partial.call(null,p1__88197_SHARP_,db);
}),fns));
} else {
return cljs.core.identity;
}
});
dat.sync.client.replace_schema = (function dat$sync$client$replace_schema(db,schema){
return datascript.core.init_db.call(null,datascript.core.datoms.call(null,db,new cljs.core.Keyword(null,"eavt","eavt",-666437073)),schema);
});
dat.sync.client._transact_with_middleware_BANG_ = (function dat$sync$client$_transact_with_middleware_BANG_(conn,middleware_fn,tx_data,tx_meta){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error("Assert failed: (d/conn? conn)"));
}

var normalized_tx = dat.sync.client.normalize_tx.call(null,tx_data);
var report = cljs.core.atom.call(null,null);
cljs.core.swap_BANG_.call(null,conn,((function (normalized_tx,report){
return (function (db){
var db__$1 = (function (){var temp__6736__auto__ = cljs.core.seq.call(null,dat.sync.client.tx_schema_changes.call(null,normalized_tx));
if(temp__6736__auto__){
var schema_changes = temp__6736__auto__;
var new_schema = dat.sync.client.schema_with_changes.call(null,db,schema_changes);
var new_db = dat.sync.client.replace_schema.call(null,db,new_schema);
return new_db;
} else {
return db;
}
})();
var r = datascript.core.with$.call(null,db__$1,middleware_fn.call(null,db__$1,normalized_tx,tx_meta),tx_meta);
cljs.core.reset_BANG_.call(null,report,r);

return new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(r);
});})(normalized_tx,report))
);

return cljs.core.deref.call(null,report);
});
/**
 * We need to override the d/transact! function so we can insert transaction middleware that automatically adds
 *   our tx metadata for us. We shouldn't have to think about this; it should be transparent, and we should be keeping
 *   track of where data originated from, etc.
 */
dat.sync.client.transact_with_middleware_BANG_ = (function dat$sync$client$transact_with_middleware_BANG_(var_args){
var args88198 = [];
var len__62120__auto___88211 = arguments.length;
var i__62121__auto___88212 = (0);
while(true){
if((i__62121__auto___88212 < len__62120__auto___88211)){
args88198.push((arguments[i__62121__auto___88212]));

var G__88213 = (i__62121__auto___88212 + (1));
i__62121__auto___88212 = G__88213;
continue;
} else {
}
break;
}

var G__88200 = args88198.length;
switch (G__88200) {
case 3:
return dat.sync.client.transact_with_middleware_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return dat.sync.client.transact_with_middleware_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args88198.length)].join('')));

}
});
goog.exportSymbol('dat.sync.client.transact_with_middleware_BANG_', dat.sync.client.transact_with_middleware_BANG_);

dat.sync.client.transact_with_middleware_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (conn,middleware_fn,tx_data){
return dat.sync.client.transact_with_middleware_BANG_.call(null,conn,middleware_fn,tx_data,null);
});

dat.sync.client.transact_with_middleware_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (conn,middleware_fn,tx_data,tx_meta){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error("Assert failed: (d/conn? conn)"));
}

var report = dat.sync.client._transact_with_middleware_BANG_.call(null,conn,middleware_fn,tx_data,tx_meta);
var seq__88201_88215 = cljs.core.seq.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn))));
var chunk__88202_88216 = null;
var count__88203_88217 = (0);
var i__88204_88218 = (0);
while(true){
if((i__88204_88218 < count__88203_88217)){
var vec__88205_88219 = cljs.core._nth.call(null,chunk__88202_88216,i__88204_88218);
var __88220 = cljs.core.nth.call(null,vec__88205_88219,(0),null);
var callback_88221 = cljs.core.nth.call(null,vec__88205_88219,(1),null);
callback_88221.call(null,report);

var G__88222 = seq__88201_88215;
var G__88223 = chunk__88202_88216;
var G__88224 = count__88203_88217;
var G__88225 = (i__88204_88218 + (1));
seq__88201_88215 = G__88222;
chunk__88202_88216 = G__88223;
count__88203_88217 = G__88224;
i__88204_88218 = G__88225;
continue;
} else {
var temp__6738__auto___88226 = cljs.core.seq.call(null,seq__88201_88215);
if(temp__6738__auto___88226){
var seq__88201_88227__$1 = temp__6738__auto___88226;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__88201_88227__$1)){
var c__61810__auto___88228 = cljs.core.chunk_first.call(null,seq__88201_88227__$1);
var G__88229 = cljs.core.chunk_rest.call(null,seq__88201_88227__$1);
var G__88230 = c__61810__auto___88228;
var G__88231 = cljs.core.count.call(null,c__61810__auto___88228);
var G__88232 = (0);
seq__88201_88215 = G__88229;
chunk__88202_88216 = G__88230;
count__88203_88217 = G__88231;
i__88204_88218 = G__88232;
continue;
} else {
var vec__88208_88233 = cljs.core.first.call(null,seq__88201_88227__$1);
var __88234 = cljs.core.nth.call(null,vec__88208_88233,(0),null);
var callback_88235 = cljs.core.nth.call(null,vec__88208_88233,(1),null);
callback_88235.call(null,report);

var G__88236 = cljs.core.next.call(null,seq__88201_88227__$1);
var G__88237 = null;
var G__88238 = (0);
var G__88239 = (0);
seq__88201_88215 = G__88236;
chunk__88202_88216 = G__88237;
count__88203_88217 = G__88238;
i__88204_88218 = G__88239;
continue;
}
} else {
}
}
break;
}

return report;
});

dat.sync.client.transact_with_middleware_BANG_.cljs$lang$maxFixedArity = 4;

/**
 * Given a tx-report, return transaction representing metadata about the transaction
 */
dat.sync.client.tx_metadata = (function dat$sync$client$tx_metadata(p__88240){
var map__88247 = p__88240;
var map__88247__$1 = ((((!((map__88247 == null)))?((((map__88247.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88247.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__88247):map__88247);
var tx_report = map__88247__$1;
var db_before = cljs.core.get.call(null,map__88247__$1,new cljs.core.Keyword(null,"db-before","db-before",-553691536));
var db_after = cljs.core.get.call(null,map__88247__$1,new cljs.core.Keyword(null,"db-after","db-after",-571884666));
var tx_data = cljs.core.get.call(null,map__88247__$1,new cljs.core.Keyword(null,"tx-data","tx-data",934159761));
var tempids = cljs.core.get.call(null,map__88247__$1,new cljs.core.Keyword(null,"tempids","tempids",1767509089));
var tx_meta = cljs.core.get.call(null,map__88247__$1,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194));
var tx_id = new cljs.core.Keyword("db","current-tx","db/current-tx",1600722132).cljs$core$IFn$_invoke$arity$1(tempids);
return cljs.core.concat.call(null,cljs.core.map.call(null,((function (tx_id,map__88247,map__88247__$1,tx_report,db_before,db_after,tx_data,tempids,tx_meta){
return (function (p__88249){
var vec__88250 = p__88249;
var k = cljs.core.nth.call(null,vec__88250,(0),null);
var v = cljs.core.nth.call(null,vec__88250,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),tx_id,k,v], null);
});})(tx_id,map__88247,map__88247__$1,tx_report,db_before,db_after,tx_data,tempids,tx_meta))
,tx_meta),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),tx_id,new cljs.core.Keyword("dat.sync","sync?","dat.sync/sync?",-1112095904),false], null)], null));
});
dat.sync.client.get_or_assign_local_eid = (function dat$sync$client$get_or_assign_local_eid(db,current_mapping,eid){
var temp__6736__auto__ = current_mapping.call(null,eid);
if(cljs.core.truth_(temp__6736__auto__)){
var local_eid = temp__6736__auto__;
return local_eid;
} else {
var temp__6736__auto____$1 = datascript.core.q.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("dat.sync.remote.db","id","dat.sync.remote.db/id",-1585153142),new cljs.core.Symbol(null,"?id","?id",928433279,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?id","?id",928433279,null)], null),db,eid);
if(cljs.core.truth_(temp__6736__auto____$1)){
var local_eid = temp__6736__auto____$1;
return local_eid;
} else {
return datascript.core.tempid.call(null,null);
}
}
});
/**
 * Returns all reference attribute idents that exist in database ...
 */
dat.sync.client.get_ref_attrs_for_mapping = (function dat$sync$client$get_ref_attrs_for_mapping(db,tx){
var db_ref_type_remote_eid = cljs.core.some.call(null,(function (p__88274){
var vec__88275 = p__88274;
var eid = cljs.core.nth.call(null,vec__88275,(0),null);
var tx_forms = cljs.core.nth.call(null,vec__88275,(1),null);
if(cljs.core.truth_(cljs.core.some.call(null,((function (vec__88275,eid,tx_forms){
return (function (p__88278){
var vec__88279 = p__88278;
var op = cljs.core.nth.call(null,vec__88279,(0),null);
var e = cljs.core.nth.call(null,vec__88279,(1),null);
var a = cljs.core.nth.call(null,vec__88279,(2),null);
var v = cljs.core.nth.call(null,vec__88279,(3),null);
var t = cljs.core.nth.call(null,vec__88279,(4),null);
var tx_form = vec__88279;
return (cljs.core._EQ_.call(null,a,new cljs.core.Keyword("db","ident","db/ident",-737096))) && (cljs.core._EQ_.call(null,v,new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)));
});})(vec__88275,eid,tx_forms))
,tx_forms))){
return eid;
} else {
return null;
}
}),cljs.core.group_by.call(null,cljs.core.second,tx));
var tx_attr_idents = cljs.core.set.call(null,cljs.core.map.call(null,((function (db_ref_type_remote_eid){
return (function (p1__88253_SHARP_){
return cljs.core.nth.call(null,p1__88253_SHARP_,(2));
});})(db_ref_type_remote_eid))
,tx));
return cljs.core.set.call(null,cljs.core.concat.call(null,datascript.core.q.call(null,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?attr-ident","?attr-ident",1043001135,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?attr-ident","?attr-ident",1043001135,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Symbol(null,"?ref-type-remote-eid","?ref-type-remote-eid",1265469323,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?attr","?attr",-2066507837,null),new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Symbol(null,"?attr-ident","?attr-ident",1043001135,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?attr","?attr",-2066507837,null),new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Symbol(null,"?ref-type","?ref-type",-1276050493,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?ref-type","?ref-type",-1276050493,null),new cljs.core.Keyword("dat.sync.remote.db","id","dat.sync.remote.db/id",-1585153142),new cljs.core.Symbol(null,"?ref-type-remote-eid","?ref-type-remote-eid",1265469323,null)], null)], null),db,tx_attr_idents,db_ref_type_remote_eid),cljs.core.keep.call(null,((function (db_ref_type_remote_eid,tx_attr_idents){
return (function (p__88282){
var vec__88283 = p__88282;
var eid = cljs.core.nth.call(null,vec__88283,(0),null);
var tx_forms = cljs.core.nth.call(null,vec__88283,(1),null);
if(cljs.core.truth_(cljs.core.some.call(null,((function (vec__88283,eid,tx_forms,db_ref_type_remote_eid,tx_attr_idents){
return (function (p__88286){
var vec__88287 = p__88286;
var op = cljs.core.nth.call(null,vec__88287,(0),null);
var e = cljs.core.nth.call(null,vec__88287,(1),null);
var a = cljs.core.nth.call(null,vec__88287,(2),null);
var v = cljs.core.nth.call(null,vec__88287,(3),null);
var tx_form = vec__88287;
return (cljs.core._EQ_.call(null,a,new cljs.core.Keyword("db","valueType","db/valueType",1827971944))) && (cljs.core._EQ_.call(null,v,db_ref_type_remote_eid));
});})(vec__88283,eid,tx_forms,db_ref_type_remote_eid,tx_attr_idents))
,tx_forms))){
return cljs.core.some.call(null,((function (vec__88283,eid,tx_forms,db_ref_type_remote_eid,tx_attr_idents){
return (function (p__88290){
var vec__88291 = p__88290;
var op = cljs.core.nth.call(null,vec__88291,(0),null);
var e = cljs.core.nth.call(null,vec__88291,(1),null);
var a = cljs.core.nth.call(null,vec__88291,(2),null);
var v = cljs.core.nth.call(null,vec__88291,(3),null);
var tx_form = vec__88291;
if(cljs.core._EQ_.call(null,a,new cljs.core.Keyword("db","ident","db/ident",-737096))){
return v;
} else {
return null;
}
});})(vec__88283,eid,tx_forms,db_ref_type_remote_eid,tx_attr_idents))
,tx_forms);
} else {
return null;
}
});})(db_ref_type_remote_eid,tx_attr_idents))
,cljs.core.group_by.call(null,cljs.core.second,tx))));
});
/**
 * Creates a map of remote eids to local eids for any id in the tx, providing consistent tempids where needed
 */
dat.sync.client.make_eid_mapping = (function dat$sync$client$make_eid_mapping(db,tx){
var m = cljs.core.reduce.call(null,(function (m,p__88306){
var vec__88307 = p__88306;
var eid = cljs.core.nth.call(null,vec__88307,(0),null);
var eid_tx = cljs.core.nth.call(null,vec__88307,(1),null);
return cljs.core.assoc.call(null,m,eid,dat.sync.client.get_or_assign_local_eid.call(null,db,m,eid));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.group_by.call(null,cljs.core.second,tx));
var ref_attribute_idents = dat.sync.client.get_ref_attrs_for_mapping.call(null,db,tx);
return cljs.core.reduce.call(null,((function (m,ref_attribute_idents){
return (function (m_SINGLEQUOTE_,p__88310){
var vec__88311 = p__88310;
var op = cljs.core.nth.call(null,vec__88311,(0),null);
var e = cljs.core.nth.call(null,vec__88311,(1),null);
var a = cljs.core.nth.call(null,vec__88311,(2),null);
var v = cljs.core.nth.call(null,vec__88311,(3),null);
var tx_form = vec__88311;
return cljs.core.assoc.call(null,m_SINGLEQUOTE_,v,dat.sync.client.get_or_assign_local_eid.call(null,db,m_SINGLEQUOTE_,v));
});})(m,ref_attribute_idents))
,m,cljs.core.filter.call(null,((function (m,ref_attribute_idents){
return (function (p__88314){
var vec__88315 = p__88314;
var op = cljs.core.nth.call(null,vec__88315,(0),null);
var e = cljs.core.nth.call(null,vec__88315,(1),null);
var a = cljs.core.nth.call(null,vec__88315,(2),null);
var v = cljs.core.nth.call(null,vec__88315,(3),null);
var tx_form = vec__88315;
return ref_attribute_idents.call(null,a);
});})(m,ref_attribute_idents))
,tx));
});
/**
 * Takes a tx in canonical form and changes any incoming eids (including reference ids (WIP XXX)) to equivalents consistent with the local db. It does this
 *   by looking for a match to an existing :dat.sync.remote.db/id. If it doesn't find one, it matches it with a negative one
 *   and adds an [:db/add eid :dat.sync.remote.db/id _] statement to the tx.
 */
dat.sync.client.translate_eids = (function dat$sync$client$translate_eids(db,tx){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"dat.sync.client","/tmp/form-init8382301926859034614.clj",394,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Calling translate-eids"], null);
}),null)),null,-1989038679);

var eid_mapping = dat.sync.client.make_eid_mapping.call(null,db,tx);
var ref_attribute_idents = dat.sync.client.get_ref_attrs_for_mapping.call(null,db,tx);
return cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.mapv.call(null,((function (eid_mapping,ref_attribute_idents){
return (function (p__88326){
var vec__88327 = p__88326;
var op = cljs.core.nth.call(null,vec__88327,(0),null);
var e = cljs.core.nth.call(null,vec__88327,(1),null);
var a = cljs.core.nth.call(null,vec__88327,(2),null);
var v = cljs.core.nth.call(null,vec__88327,(3),null);
var tx_form = vec__88327;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,eid_mapping.call(null,e),a,(cljs.core.truth_(ref_attribute_idents.call(null,a))?eid_mapping.call(null,v):v)], null);
});})(eid_mapping,ref_attribute_idents))
,tx),(function (){var local_tx_eids = cljs.core.vals.call(null,eid_mapping);
var local_tx_eids_w_remote = cljs.core.set.call(null,datascript.core.q.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("dat.sync.remote.db","id","dat.sync.remote.db/id",-1585153142),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null),db,local_tx_eids));
var local_tx_eids_wo_remote = cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,local_tx_eids_w_remote),local_tx_eids);
var reverse_mapping = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (local_tx_eids,local_tx_eids_w_remote,local_tx_eids_wo_remote,eid_mapping,ref_attribute_idents){
return (function (p__88330){
var vec__88331 = p__88330;
var k = cljs.core.nth.call(null,vec__88331,(0),null);
var v = cljs.core.nth.call(null,vec__88331,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,k], null);
});})(local_tx_eids,local_tx_eids_w_remote,local_tx_eids_wo_remote,eid_mapping,ref_attribute_idents))
,eid_mapping));
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"dat.sync.client","/tmp/form-init8382301926859034614.clj",410,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (local_tx_eids,local_tx_eids_w_remote,local_tx_eids_wo_remote,reverse_mapping,eid_mapping,ref_attribute_idents){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["n local eids w remote",cljs.core.count.call(null,local_tx_eids_w_remote)], null);
});})(local_tx_eids,local_tx_eids_w_remote,local_tx_eids_wo_remote,reverse_mapping,eid_mapping,ref_attribute_idents))
,null)),null,611224351);

taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"dat.sync.client","/tmp/form-init8382301926859034614.clj",411,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (local_tx_eids,local_tx_eids_w_remote,local_tx_eids_wo_remote,reverse_mapping,eid_mapping,ref_attribute_idents){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["n local eids w/o remote",cljs.core.count.call(null,local_tx_eids_wo_remote)], null);
});})(local_tx_eids,local_tx_eids_w_remote,local_tx_eids_wo_remote,reverse_mapping,eid_mapping,ref_attribute_idents))
,null)),null,-2008939072);

return cljs.core.mapv.call(null,((function (local_tx_eids,local_tx_eids_w_remote,local_tx_eids_wo_remote,reverse_mapping,eid_mapping,ref_attribute_idents){
return (function (eid){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),eid,new cljs.core.Keyword("dat.sync.remote.db","id","dat.sync.remote.db/id",-1585153142),reverse_mapping.call(null,eid)], null);
});})(local_tx_eids,local_tx_eids_w_remote,local_tx_eids_wo_remote,reverse_mapping,eid_mapping,ref_attribute_idents))
,local_tx_eids_wo_remote);
})()));
});
/**
 * Here we add data we need to track the origin of the data (that we don't need to )
 */
dat.sync.client.wrap_remote_tx = (function dat$sync$client$wrap_remote_tx(db,tx,other_tx_meta){
var tx__$1 = dat.sync.client.translate_eids.call(null,db,dat.sync.client.normalize_tx.call(null,tx));
return tx__$1;
});
dat.sync.client.apply_remote_tx_BANG_ = (function dat$sync$client$apply_remote_tx_BANG_(var_args){
var args88334 = [];
var len__62120__auto___88337 = arguments.length;
var i__62121__auto___88338 = (0);
while(true){
if((i__62121__auto___88338 < len__62120__auto___88337)){
args88334.push((arguments[i__62121__auto___88338]));

var G__88339 = (i__62121__auto___88338 + (1));
i__62121__auto___88338 = G__88339;
continue;
} else {
}
break;
}

var G__88336 = args88334.length;
switch (G__88336) {
case 2:
return dat.sync.client.apply_remote_tx_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dat.sync.client.apply_remote_tx_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args88334.length)].join('')));

}
});

dat.sync.client.apply_remote_tx_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (conn,tx){
return dat.sync.client.apply_remote_tx_BANG_.call(null,conn,tx);
});

dat.sync.client.apply_remote_tx_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (conn,tx,tx_meta){
var remote_tx_meta = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("dat.sync.prov","agent","dat.sync.prov/agent",1202284884),new cljs.core.Keyword("dat.sync","remote","dat.sync/remote",946224418)], null);
var tx_meta__$1 = cljs.core.merge.call(null,remote_tx_meta,tx_meta);
return dat.sync.client.transact_with_middleware_BANG_.call(null,conn,dat.sync.client.wrap_remote_tx,tx,tx_meta__$1);
});

dat.sync.client.apply_remote_tx_BANG_.cljs$lang$maxFixedArity = 3;

dat.sync.client.apply_schema_tx_BANG_ = (function dat$sync$client$apply_schema_tx_BANG_(conn,schema_tx){
return dat.sync.client.transact_with_middleware_BANG_.call(null,conn,cljs.core.constantly.call(null,schema_tx),schema_tx);
});
/**
 * Update schema using a DataScript friendly schema-spec
 */
dat.sync.client.update_schema_BANG_ = (function dat$sync$client$update_schema_BANG_(conn,schema_spec){
return cljs.core.swap_BANG_.call(null,conn,(function (p__88344){
var map__88345 = p__88344;
var map__88345__$1 = ((((!((map__88345 == null)))?((((map__88345.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88345.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__88345):map__88345);
var db = map__88345__$1;
var schema = cljs.core.get.call(null,map__88345__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
return dat.sync.client.replace_schema.call(null,db,dat.sync.utils.deep_merge.call(null,schema,schema_spec));
}));
});
dat.sync.client.datom_tx_form = (function dat$sync$client$datom_tx_form(datom){
var vec__88350 = datom;
var e = cljs.core.nth.call(null,vec__88350,(0),null);
var a = cljs.core.nth.call(null,vec__88350,(1),null);
var v = cljs.core.nth.call(null,vec__88350,(2),null);
var t = cljs.core.nth.call(null,vec__88350,(3),null);
var b = cljs.core.nth.call(null,vec__88350,(4),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [true,new cljs.core.Keyword("db","add","db/add",235286841),false,new cljs.core.Keyword("db","retract","db/retract",-1549825231)], null).call(null,b),e,a,v], null);
});
dat.sync.client.datoms_as_tx = (function dat$sync$client$datoms_as_tx(datoms){
return cljs.core.map.call(null,dat.sync.client.datom_tx_form,datoms);
});
/**
 * Apply tx-data datom vectors in [e a v t b] form. Wraps in wrap-remote-tx middleware via apply-remote-tx!
 */
dat.sync.client.apply_tx_data_BANG_ = (function dat$sync$client$apply_tx_data_BANG_(conn,tx_data){
return dat.sync.client.apply_remote_tx_BANG_.call(null,conn,dat.sync.client.datoms_as_tx.call(null,tx_data));
});
dat.sync.client.remote_tx = (function dat$sync$client$remote_tx(db,tx){
var tx__$1 = cljs.core.remove.call(null,(function (p__88357){
var vec__88358 = p__88357;
var _ = cljs.core.nth.call(null,vec__88358,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__88358,(1),null);
var a = cljs.core.nth.call(null,vec__88358,(2),null);
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("dat.sync.remote.db","id","dat.sync.remote.db/id",-1585153142),null,new cljs.core.Keyword("db","id","db/id",-1388397098),null], null), null).call(null,a);
}),dat.sync.client.normalize_tx.call(null,tx));
var translated_tx = datascript.core.q.call(null,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?op","?op",-135731883,null),new cljs.core.Symbol(null,"?dat-e","?dat-e",-1250363738,null),new cljs.core.Symbol(null,"?a","?a",1314302913,null),new cljs.core.Symbol(null,"?dat-v","?dat-v",225153114,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?op","?op",-135731883,null),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"?a","?a",1314302913,null),new cljs.core.Symbol(null,"?v","?v",-464183118,null)], null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"get-else","get-else",1312024065,null),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("dat.sync.remote.db","id","dat.sync.remote.db/id",-1585153142),new cljs.core.Symbol(null,"?e","?e",-1194391683,null)),new cljs.core.Symbol(null,"?dat-e","?dat-e",-1250363738,null)], null),cljs.core.list(new cljs.core.Symbol(null,"remote-value-trans","remote-value-trans",1839065408,null),new cljs.core.Symbol(null,"?v","?v",-464183118,null),new cljs.core.Symbol(null,"?a","?a",1314302913,null),new cljs.core.Symbol(null,"?dat-v","?dat-v",225153114,null))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"attr-type-ident","attr-type-ident",406808068,null),new cljs.core.Symbol(null,"?attr-ident","?attr-ident",1043001135,null),new cljs.core.Symbol(null,"?type-ident","?type-ident",-1355222271,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?attr","?attr",-2066507837,null),new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Symbol(null,"?attr-ident","?attr-ident",1043001135,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?attr","?attr",-2066507837,null),new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Symbol(null,"?vt","?vt",-716030965,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?vt","?vt",-716030965,null),new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Symbol(null,"?type-ident","?type-ident",-1355222271,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"is-ref","is-ref",-974708517,null),new cljs.core.Symbol(null,"?attr-ident","?attr-ident",1043001135,null)),cljs.core.list(new cljs.core.Symbol(null,"attr-type-ident","attr-type-ident",406808068,null),new cljs.core.Symbol(null,"?attr-ident","?attr-ident",1043001135,null),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"remote-value-trans","remote-value-trans",1839065408,null),new cljs.core.Symbol(null,"?ds-v","?ds-v",1727718739,null),new cljs.core.Symbol(null,"?attr-ident","?attr-ident",1043001135,null),new cljs.core.Symbol(null,"?remote-v","?remote-v",961691610,null)),cljs.core.list(new cljs.core.Symbol(null,"is-ref","is-ref",-974708517,null),new cljs.core.Symbol(null,"?attr-ident","?attr-ident",1043001135,null)),cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"?ds-v","?ds-v",1727718739,null),(0)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?ds-v","?ds-v",1727718739,null),new cljs.core.Keyword("dat.sync.remote.db","id","dat.sync.remote.db/id",-1585153142),new cljs.core.Symbol(null,"?remote-v","?remote-v",961691610,null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"remote-value-trans","remote-value-trans",1839065408,null),new cljs.core.Symbol(null,"?ds-v","?ds-v",1727718739,null),new cljs.core.Symbol(null,"?attr-ident","?attr-ident",1043001135,null),new cljs.core.Symbol(null,"?remote-v","?remote-v",961691610,null)),cljs.core.list(new cljs.core.Symbol(null,"is-ref","is-ref",-974708517,null),new cljs.core.Symbol(null,"?attr-ident","?attr-ident",1043001135,null)),cljs.core.list(new cljs.core.Symbol(null,"<","<",993667236,null),new cljs.core.Symbol(null,"?ds-v","?ds-v",1727718739,null),(0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"ground","ground",-1460862835,null),new cljs.core.Symbol(null,"?ds-v","?ds-v",1727718739,null)),new cljs.core.Symbol(null,"?remote-v","?remote-v",961691610,null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"remote-value-trans","remote-value-trans",1839065408,null),new cljs.core.Symbol(null,"?ds-v","?ds-v",1727718739,null),new cljs.core.Symbol(null,"?atrr-ident","?atrr-ident",-1482246381,null),new cljs.core.Symbol(null,"?remote-v","?remote-v",961691610,null)),cljs.core.list(new cljs.core.Symbol(null,"attr-type-ident","attr-type-ident",406808068,null),new cljs.core.Symbol(null,"?attr-ident","?attr-ident",1043001135,null),new cljs.core.Symbol(null,"?vt-ident","?vt-ident",-1314834085,null)),cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"?vt-ident","?vt-ident",-1314834085,null),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"ground","ground",-1460862835,null),new cljs.core.Symbol(null,"?ds-v","?ds-v",1727718739,null)),new cljs.core.Symbol(null,"?remote-v","?remote-v",961691610,null)], null)], null)], null),db,tx__$1);
return cljs.core.vec.call(null,translated_tx);
});
/**
 * Calls out to the remote-tx function; Deprecated.
 */
dat.sync.client.datomic_tx = (function dat$sync$client$datomic_tx(db,tx){
return dat.sync.client.remote_tx.call(null,db,tx);
});
dat.sync.client.schema_attrs_by = (function dat$sync$client$schema_attrs_by(db,attr_or_fn,value){
return cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,(function (p__88365){
var vec__88366 = p__88365;
var _ = cljs.core.nth.call(null,vec__88366,(0),null);
var attr_schema = cljs.core.nth.call(null,vec__88366,(1),null);
return cljs.core._EQ_.call(null,value,attr_or_fn.call(null,attr_schema));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(db))));
});
dat.sync.client.globalize_datoms = (function dat$sync$client$globalize_datoms(db_before,datoms,p__88369){
var map__88380 = p__88369;
var map__88380__$1 = ((((!((map__88380 == null)))?((((map__88380.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88380.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__88380):map__88380);
var identity_attrs = cljs.core.get.call(null,map__88380__$1,new cljs.core.Keyword(null,"identity-attrs","identity-attrs",-1333692779));

taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dat.sync.client","/tmp/form-init8382301926859034614.clj",584,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (map__88380,map__88380__$1,identity_attrs){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Calling globalize datoms"], null);
});})(map__88380,map__88380__$1,identity_attrs))
,null)),null,-1488651022);

var ref_attrs = dat.sync.client.schema_attrs_by.call(null,db_before,new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079));
var identity_attrs__$1 = (function (){var or__60899__auto__ = identity_attrs;
if(cljs.core.truth_(or__60899__auto__)){
return or__60899__auto__;
} else {
return cljs.core.disj.call(null,dat.sync.client.schema_attrs_by.call(null,db_before,new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)),new cljs.core.Keyword("dat.sync.remote.db","id","dat.sync.remote.db/id",-1585153142));
}
})();
var eids = cljs.core.reduce.call(null,((function (ref_attrs,identity_attrs__$1,map__88380,map__88380__$1,identity_attrs){
return (function (eids,p__88382){
var vec__88383 = p__88382;
var e = cljs.core.nth.call(null,vec__88383,(0),null);
var a = cljs.core.nth.call(null,vec__88383,(1),null);
var v = cljs.core.nth.call(null,vec__88383,(2),null);
var eids__$1 = cljs.core.conj.call(null,eids,e);
if(cljs.core.truth_(cljs.core.get.call(null,ref_attrs,a))){
return cljs.core.conj.call(null,eids__$1,v);
} else {
return eids__$1;
}
});})(ref_attrs,identity_attrs__$1,map__88380,map__88380__$1,identity_attrs))
,cljs.core.PersistentHashSet.EMPTY,datoms);
var eid_identities = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (ref_attrs,identity_attrs__$1,eids,map__88380,map__88380__$1,identity_attrs){
return (function (pull_data){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(pull_data),(function (){var temp__6738__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.partial.call(null,cljs.core.get,pull_data),identity_attrs__$1));
if(cljs.core.truth_(temp__6738__auto__)){
var identity_attr = temp__6738__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [identity_attr,cljs.core.get.call(null,pull_data,identity_attr)], null);
} else {
return null;
}
})()], null);
});})(ref_attrs,identity_attrs__$1,eids,map__88380,map__88380__$1,identity_attrs))
,datascript.core.pull_many.call(null,db_before,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098)], null),identity_attrs__$1),eids)));
var translate_eid = ((function (ref_attrs,identity_attrs__$1,eids,eid_identities,map__88380,map__88380__$1,identity_attrs){
return (function (e){
var or__60899__auto__ = cljs.core.get.call(null,eid_identities,e);
if(cljs.core.truth_(or__60899__auto__)){
return or__60899__auto__;
} else {
return (- e);
}
});})(ref_attrs,identity_attrs__$1,eids,eid_identities,map__88380,map__88380__$1,identity_attrs))
;
var translate_val = ((function (ref_attrs,identity_attrs__$1,eids,eid_identities,translate_eid,map__88380,map__88380__$1,identity_attrs){
return (function (a,v){
if(cljs.core.truth_(ref_attrs.call(null,a))){
return translate_eid.call(null,v);
} else {
return v;
}
});})(ref_attrs,identity_attrs__$1,eids,eid_identities,translate_eid,map__88380,map__88380__$1,identity_attrs))
;
var datoms__$1 = cljs.core.map.call(null,((function (ref_attrs,identity_attrs__$1,eids,eid_identities,translate_eid,translate_val,map__88380,map__88380__$1,identity_attrs){
return (function (p__88386){
var vec__88387 = p__88386;
var e = cljs.core.nth.call(null,vec__88387,(0),null);
var a = cljs.core.nth.call(null,vec__88387,(1),null);
var v = cljs.core.nth.call(null,vec__88387,(2),null);
var t = cljs.core.nth.call(null,vec__88387,(3),null);
var b = cljs.core.nth.call(null,vec__88387,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [translate_eid.call(null,e),a,translate_val.call(null,a,v),t,b], null);
});})(ref_attrs,identity_attrs__$1,eids,eid_identities,translate_eid,translate_val,map__88380,map__88380__$1,identity_attrs))
,datoms);
return datoms__$1;
});
/**
 * Convenience function for globalizing a set of datoms from a tx report
 */
dat.sync.client.globalize_tx_report = (function dat$sync$client$globalize_tx_report(var_args){
var args88390 = [];
var len__62120__auto___88396 = arguments.length;
var i__62121__auto___88397 = (0);
while(true){
if((i__62121__auto___88397 < len__62120__auto___88396)){
args88390.push((arguments[i__62121__auto___88397]));

var G__88398 = (i__62121__auto___88397 + (1));
i__62121__auto___88397 = G__88398;
continue;
} else {
}
break;
}

var G__88392 = args88390.length;
switch (G__88392) {
case 1:
return dat.sync.client.globalize_tx_report.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dat.sync.client.globalize_tx_report.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args88390.length)].join('')));

}
});

dat.sync.client.globalize_tx_report.cljs$core$IFn$_invoke$arity$1 = (function (tx_report){
return dat.sync.client.globalize_tx_report.call(null,tx_report,cljs.core.PersistentArrayMap.EMPTY);
});

dat.sync.client.globalize_tx_report.cljs$core$IFn$_invoke$arity$2 = (function (p__88393,opts){
var map__88394 = p__88393;
var map__88394__$1 = ((((!((map__88394 == null)))?((((map__88394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88394.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__88394):map__88394);
var db_before = cljs.core.get.call(null,map__88394__$1,new cljs.core.Keyword(null,"db-before","db-before",-553691536));
var tx_data = cljs.core.get.call(null,map__88394__$1,new cljs.core.Keyword(null,"tx-data","tx-data",934159761));
return dat.sync.client.globalize_datoms.call(null,db_before,tx_data,opts);
});

dat.sync.client.globalize_tx_report.cljs$lang$maxFixedArity = 2;

dat.reactor.register_handler.call(null,new cljs.core.Keyword("dat.sync.client","apply-schema-changes","dat.sync.client/apply-schema-changes",-238626299),(function (_,db,p__88400){
var vec__88401 = p__88400;
var ___$1 = cljs.core.nth.call(null,vec__88401,(0),null);
var schema_tx = cljs.core.nth.call(null,vec__88401,(1),null);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dat.sync.client","/tmp/form-init8382301926859034614.clj",689,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__88401,___$1,schema_tx){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Applying schema changes!"], null);
});})(vec__88401,___$1,schema_tx))
,null)),null,1347655829);

var new_schema = dat.sync.client.schema_with_changes.call(null,db,schema_tx);
var new_db = dat.sync.client.replace_schema.call(null,db,new_schema);
return new_db;
}));
dat.reactor.register_handler.call(null,new cljs.core.Keyword("dat.sync.client","merge-schema","dat.sync.client/merge-schema",1680698506),(function (_,db,p__88404){
var vec__88405 = p__88404;
var ___$1 = cljs.core.nth.call(null,vec__88405,(0),null);
var schema = cljs.core.nth.call(null,vec__88405,(1),null);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dat.sync.client","/tmp/form-init8382301926859034614.clj",699,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__88405,___$1,schema){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Applying schema changes!"], null);
});})(vec__88405,___$1,schema))
,null)),null,784834806);

var new_schema = dat.sync.utils.deep_merge.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(db),schema);
var new_db = dat.sync.client.replace_schema.call(null,db,new_schema);
return new_db;
}));
dat.reactor.register_handler.call(null,new cljs.core.Keyword("dat.sync.client","recv-remote-tx","dat.sync.client/recv-remote-tx",-325804681),(function (app,db,p__88408){
var vec__88409 = p__88408;
var _ = cljs.core.nth.call(null,vec__88409,(0),null);
var tx_data = cljs.core.nth.call(null,vec__88409,(1),null);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dat.sync.client","/tmp/form-init8382301926859034614.clj",708,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__88409,_,tx_data){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Running remote-tx in :dat.sync/recv-remote-tx."], null);
});})(vec__88409,_,tx_data))
,null)),null,-933780797);

var normalized_tx = dat.sync.client.normalize_tx.call(null,tx_data);
var translated_tx = dat.sync.client.translate_eids.call(null,db,normalized_tx);
var schema_changes = dat.sync.client.tx_schema_changes.call(null,db,translated_tx);
var remote_tx_meta = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("dat.sync.prov","agent","dat.sync.prov/agent",1202284884),new cljs.core.Keyword("dat.sync","remote","dat.sync/remote",946224418)], null);
return dat.reactor.resolve_to.call(null,app,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.seq.call(null,schema_changes))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.sync.client","apply-schema-changes","dat.sync.client/apply-schema-changes",-238626299),schema_changes], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.reactor","local-tx","dat.reactor/local-tx",-702931104),translated_tx,remote_tx_meta], null)], null));
}));
dat.reactor.register_handler.call(null,new cljs.core.Keyword("dat.sync.client","send-remote-tx","dat.sync.client/send-remote-tx",-648888103),(function (app,db,p__88412){
var vec__88413 = p__88412;
var _ = cljs.core.nth.call(null,vec__88413,(0),null);
var tx = cljs.core.nth.call(null,vec__88413,(1),null);
var tx_meta = cljs.core.nth.call(null,vec__88413,(2),null);
var translated_tx = dat.sync.client.remote_tx.call(null,db,tx);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dat.sync.client","/tmp/form-init8382301926859034614.clj",723,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (translated_tx,vec__88413,_,tx,tx_meta){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Sending tx:",cljs.core.pr_str.call(null,cljs.core.take.call(null,(100),translated_tx)),"..."], null);
});})(translated_tx,vec__88413,_,tx,tx_meta))
,null)),null,568497999);

return dat.reactor.resolve_to.call(null,app,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.remote","send-event!","dat.remote/send-event!",934871644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.sync.remote","tx","dat.sync.remote/tx",1131820532),translated_tx,tx_meta], null)], null)], null));
}));
dat.reactor.register_handler.call(null,new cljs.core.Keyword("dat.remote","connected","dat.remote/connected",-95364560),(function (app,db,_){
return dat.reactor.resolve_to.call(null,app,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.sync.client","request-bootstrap","dat.sync.client/request-bootstrap",1164062733),true], null)], null));
}));
dat.reactor.register_handler.call(null,new cljs.core.Keyword("dat.sync.client","request-bootstrap","dat.sync.client/request-bootstrap",1164062733),(function (app,db,_){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dat.sync.client","/tmp/form-init8382301926859034614.clj",739,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Sending bootstrap request!"], null);
}),null)),null,-891781296);

return dat.reactor.resolve_to.call(null,app,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.remote","send-event!","dat.remote/send-event!",934871644),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.sync.client","bootstrap","dat.sync.client/bootstrap",1964218081),true], null)], null)], null));
}));
dat.reactor.register_handler.call(null,new cljs.core.Keyword("dat.sync.client","bootstrap","dat.sync.client/bootstrap",1964218081),(function (app,db,p__88416){
var vec__88417 = p__88416;
var _ = cljs.core.nth.call(null,vec__88417,(0),null);
var tx_data = cljs.core.nth.call(null,vec__88417,(1),null);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dat.sync.client","/tmp/form-init8382301926859034614.clj",748,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__88417,_,tx_data){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Recieved bootstrap!",cljs.core.take.call(null,(10),tx_data)], null);
});})(vec__88417,_,tx_data))
,null)),null,1618228675);

return dat.reactor.with_effect.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.reactor","dispatch!","dat.reactor/dispatch!",2015016299),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.sync.client.bootstrap","complete?","dat.sync.client.bootstrap/complete?",-1333465608),true], null)], null),dat.reactor.resolve_to.call(null,app,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.sync.client","recv-remote-tx","dat.sync.client/recv-remote-tx",-325804681),tx_data], null)], null)));
}));

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
dat.sync.client.Datsync = (function (dispatcher,remote,__meta,__extmap,__hash){
this.dispatcher = dispatcher;
this.remote = remote;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
dat.sync.client.Datsync.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__61574__auto__,k__61575__auto__){
var self__ = this;
var this__61574__auto____$1 = this;
return this__61574__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__61575__auto__,null);
});

dat.sync.client.Datsync.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__61576__auto__,k88421,else__61577__auto__){
var self__ = this;
var this__61576__auto____$1 = this;
var G__88423 = k88421;
var G__88423__$1 = (((G__88423 instanceof cljs.core.Keyword))?G__88423.fqn:null);
switch (G__88423__$1) {
case "dispatcher":
return self__.dispatcher;

break;
case "remote":
return self__.remote;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k88421,else__61577__auto__);

}
});

dat.sync.client.Datsync.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__61588__auto__,writer__61589__auto__,opts__61590__auto__){
var self__ = this;
var this__61588__auto____$1 = this;
var pr_pair__61591__auto__ = ((function (this__61588__auto____$1){
return (function (keyval__61592__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__61589__auto__,cljs.core.pr_writer,""," ","",opts__61590__auto__,keyval__61592__auto__);
});})(this__61588__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__61589__auto__,pr_pair__61591__auto__,"#dat.sync.client.Datsync{",", ","}",opts__61590__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132),self__.dispatcher],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"remote","remote",-1593576576),self__.remote],null))], null),self__.__extmap));
});

dat.sync.client.Datsync.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

dat.sync.client.Datsync.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__88420){
var self__ = this;
var G__88420__$1 = this;
return (new cljs.core.RecordIter((0),G__88420__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132),new cljs.core.Keyword(null,"remote","remote",-1593576576)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

dat.sync.client.Datsync.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__61572__auto__){
var self__ = this;
var this__61572__auto____$1 = this;
return self__.__meta;
});

dat.sync.client.Datsync.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__61568__auto__){
var self__ = this;
var this__61568__auto____$1 = this;
return (new dat.sync.client.Datsync(self__.dispatcher,self__.remote,self__.__meta,self__.__extmap,self__.__hash));
});

dat.sync.client.Datsync.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__61578__auto__){
var self__ = this;
var this__61578__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

dat.sync.client.Datsync.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__61569__auto__){
var self__ = this;
var this__61569__auto____$1 = this;
var h__61341__auto__ = self__.__hash;
if(!((h__61341__auto__ == null))){
return h__61341__auto__;
} else {
var h__61341__auto____$1 = cljs.core.hash_imap.call(null,this__61569__auto____$1);
self__.__hash = h__61341__auto____$1;

return h__61341__auto____$1;
}
});

dat.sync.client.Datsync.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__61570__auto__,other__61571__auto__){
var self__ = this;
var this__61570__auto____$1 = this;
if(cljs.core.truth_((function (){var and__60887__auto__ = other__61571__auto__;
if(cljs.core.truth_(and__60887__auto__)){
return ((this__61570__auto____$1.constructor === other__61571__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__61570__auto____$1,other__61571__auto__));
} else {
return and__60887__auto__;
}
})())){
return true;
} else {
return false;
}
});

dat.sync.client.Datsync.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__61583__auto__,k__61584__auto__){
var self__ = this;
var this__61583__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remote","remote",-1593576576),null,new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132),null], null), null),k__61584__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__61583__auto____$1),self__.__meta),k__61584__auto__);
} else {
return (new dat.sync.client.Datsync(self__.dispatcher,self__.remote,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__61584__auto__)),null));
}
});

dat.sync.client.Datsync.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__61581__auto__,k__61582__auto__,G__88420){
var self__ = this;
var this__61581__auto____$1 = this;
var pred__88424 = cljs.core.keyword_identical_QMARK_;
var expr__88425 = k__61582__auto__;
if(cljs.core.truth_(pred__88424.call(null,new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132),expr__88425))){
return (new dat.sync.client.Datsync(G__88420,self__.remote,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__88424.call(null,new cljs.core.Keyword(null,"remote","remote",-1593576576),expr__88425))){
return (new dat.sync.client.Datsync(self__.dispatcher,G__88420,self__.__meta,self__.__extmap,null));
} else {
return (new dat.sync.client.Datsync(self__.dispatcher,self__.remote,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__61582__auto__,G__88420),null));
}
}
});

dat.sync.client.Datsync.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__61586__auto__){
var self__ = this;
var this__61586__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132),self__.dispatcher],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"remote","remote",-1593576576),self__.remote],null))], null),self__.__extmap));
});

dat.sync.client.Datsync.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__61573__auto__,G__88420){
var self__ = this;
var this__61573__auto____$1 = this;
return (new dat.sync.client.Datsync(self__.dispatcher,self__.remote,G__88420,self__.__extmap,self__.__hash));
});

dat.sync.client.Datsync.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__61579__auto__,entry__61580__auto__){
var self__ = this;
var this__61579__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__61580__auto__)){
return this__61579__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__61580__auto__,(0)),cljs.core._nth.call(null,entry__61580__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__61579__auto____$1,entry__61580__auto__);
}
});

dat.sync.client.Datsync.prototype.com$stuartsierra$component$Lifecycle$ = cljs.core.PROTOCOL_SENTINEL;

dat.sync.client.Datsync.prototype.com$stuartsierra$component$Lifecycle$start$arity$1 = (function (component){
var self__ = this;
var component__$1 = this;
var remote_chan = dat.remote.event_chan.call(null,self__.remote);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dat.sync.client","/tmp/form-init8382301926859034614.clj",764,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (remote_chan,component__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Starting Datsync component"], null);
});})(remote_chan,component__$1))
,null)),null,755538750);

dat.reactor.dispatcher.dispatch_BANG_.call(null,self__.dispatcher,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.sync.client","merge-schema","dat.sync.client/merge-schema",1680698506),dat.sync.client.base_schema], null));

taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dat.sync.client","/tmp/form-init8382301926859034614.clj",767,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (remote_chan,component__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Dispatched schema changes"], null);
});})(remote_chan,component__$1))
,null)),null,-1662669072);

var c__69114__auto___88448 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__69114__auto___88448,remote_chan,component__$1){
return (function (){
var f__69115__auto__ = (function (){var switch__69000__auto__ = ((function (c__69114__auto___88448,remote_chan,component__$1){
return (function (state_88435){
var state_val_88436 = (state_88435[(1)]);
if((state_val_88436 === (1))){
var state_88435__$1 = state_88435;
var statearr_88437_88449 = state_88435__$1;
(statearr_88437_88449[(2)] = null);

(statearr_88437_88449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88436 === (2))){
var state_88435__$1 = state_88435;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88435__$1,(4),remote_chan);
} else {
if((state_val_88436 === (3))){
var inst_88433 = (state_88435[(2)]);
var state_88435__$1 = state_88435;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_88435__$1,inst_88433);
} else {
if((state_val_88436 === (4))){
var inst_88429 = (state_88435[(2)]);
var inst_88430 = dat.reactor.dispatcher.dispatch_BANG_.call(null,self__.dispatcher,inst_88429);
var state_88435__$1 = (function (){var statearr_88438 = state_88435;
(statearr_88438[(7)] = inst_88430);

return statearr_88438;
})();
var statearr_88439_88450 = state_88435__$1;
(statearr_88439_88450[(2)] = null);

(statearr_88439_88450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__69114__auto___88448,remote_chan,component__$1))
;
return ((function (switch__69000__auto__,c__69114__auto___88448,remote_chan,component__$1){
return (function() {
var dat$sync$client$state_machine__69001__auto__ = null;
var dat$sync$client$state_machine__69001__auto____0 = (function (){
var statearr_88443 = [null,null,null,null,null,null,null,null];
(statearr_88443[(0)] = dat$sync$client$state_machine__69001__auto__);

(statearr_88443[(1)] = (1));

return statearr_88443;
});
var dat$sync$client$state_machine__69001__auto____1 = (function (state_88435){
while(true){
var ret_value__69002__auto__ = (function (){try{while(true){
var result__69003__auto__ = switch__69000__auto__.call(null,state_88435);
if(cljs.core.keyword_identical_QMARK_.call(null,result__69003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69003__auto__;
}
break;
}
}catch (e88444){if((e88444 instanceof Object)){
var ex__69004__auto__ = e88444;
var statearr_88445_88451 = state_88435;
(statearr_88445_88451[(5)] = ex__69004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_88435);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e88444;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__69002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88452 = state_88435;
state_88435 = G__88452;
continue;
} else {
return ret_value__69002__auto__;
}
break;
}
});
dat$sync$client$state_machine__69001__auto__ = function(state_88435){
switch(arguments.length){
case 0:
return dat$sync$client$state_machine__69001__auto____0.call(this);
case 1:
return dat$sync$client$state_machine__69001__auto____1.call(this,state_88435);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
dat$sync$client$state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$0 = dat$sync$client$state_machine__69001__auto____0;
dat$sync$client$state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$1 = dat$sync$client$state_machine__69001__auto____1;
return dat$sync$client$state_machine__69001__auto__;
})()
;})(switch__69000__auto__,c__69114__auto___88448,remote_chan,component__$1))
})();
var state__69116__auto__ = (function (){var statearr_88446 = f__69115__auto__.call(null);
(statearr_88446[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__69114__auto___88448);

return statearr_88446;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__69116__auto__);
});})(c__69114__auto___88448,remote_chan,component__$1))
);


return component__$1;
});

dat.sync.client.Datsync.prototype.com$stuartsierra$component$Lifecycle$stop$arity$1 = (function (component){
var self__ = this;
var component__$1 = this;
return component__$1;
});

dat.sync.client.Datsync.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dispatcher","dispatcher",2093752659,null),new cljs.core.Symbol(null,"remote","remote",46954951,null)], null);
});

dat.sync.client.Datsync.cljs$lang$type = true;

dat.sync.client.Datsync.cljs$lang$ctorPrSeq = (function (this__61610__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"dat.sync.client/Datsync");
});

dat.sync.client.Datsync.cljs$lang$ctorPrWriter = (function (this__61610__auto__,writer__61611__auto__){
return cljs.core._write.call(null,writer__61611__auto__,"dat.sync.client/Datsync");
});

dat.sync.client.__GT_Datsync = (function dat$sync$client$__GT_Datsync(dispatcher,remote){
return (new dat.sync.client.Datsync(dispatcher,remote,null,null,null));
});

dat.sync.client.map__GT_Datsync = (function dat$sync$client$map__GT_Datsync(G__88422){
return (new dat.sync.client.Datsync(new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132).cljs$core$IFn$_invoke$arity$1(G__88422),new cljs.core.Keyword(null,"remote","remote",-1593576576).cljs$core$IFn$_invoke$arity$1(G__88422),null,cljs.core.dissoc.call(null,G__88422,new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132),new cljs.core.Keyword(null,"remote","remote",-1593576576)),null));
});

dat.sync.client.new_datsync = (function dat$sync$client$new_datsync(){
return dat.sync.client.map__GT_Datsync.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

//# sourceMappingURL=client.js.map?rel=1506064212238