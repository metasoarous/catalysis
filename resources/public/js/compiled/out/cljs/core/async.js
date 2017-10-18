// Compiled by ClojureScript 1.9.542 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args69173 = [];
var len__62120__auto___69179 = arguments.length;
var i__62121__auto___69180 = (0);
while(true){
if((i__62121__auto___69180 < len__62120__auto___69179)){
args69173.push((arguments[i__62121__auto___69180]));

var G__69181 = (i__62121__auto___69180 + (1));
i__62121__auto___69180 = G__69181;
continue;
} else {
}
break;
}

var G__69175 = args69173.length;
switch (G__69175) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args69173.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async69176 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async69176 = (function (f,blockable,meta69177){
this.f = f;
this.blockable = blockable;
this.meta69177 = meta69177;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async69176.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_69178,meta69177__$1){
var self__ = this;
var _69178__$1 = this;
return (new cljs.core.async.t_cljs$core$async69176(self__.f,self__.blockable,meta69177__$1));
});

cljs.core.async.t_cljs$core$async69176.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_69178){
var self__ = this;
var _69178__$1 = this;
return self__.meta69177;
});

cljs.core.async.t_cljs$core$async69176.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async69176.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async69176.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async69176.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async69176.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta69177","meta69177",-1422867829,null)], null);
});

cljs.core.async.t_cljs$core$async69176.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async69176.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async69176";

cljs.core.async.t_cljs$core$async69176.cljs$lang$ctorPrWriter = (function (this__61556__auto__,writer__61557__auto__,opt__61558__auto__){
return cljs.core._write.call(null,writer__61557__auto__,"cljs.core.async/t_cljs$core$async69176");
});

cljs.core.async.__GT_t_cljs$core$async69176 = (function cljs$core$async$__GT_t_cljs$core$async69176(f__$1,blockable__$1,meta69177){
return (new cljs.core.async.t_cljs$core$async69176(f__$1,blockable__$1,meta69177));
});

}

return (new cljs.core.async.t_cljs$core$async69176(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args69185 = [];
var len__62120__auto___69188 = arguments.length;
var i__62121__auto___69189 = (0);
while(true){
if((i__62121__auto___69189 < len__62120__auto___69188)){
args69185.push((arguments[i__62121__auto___69189]));

var G__69190 = (i__62121__auto___69189 + (1));
i__62121__auto___69189 = G__69190;
continue;
} else {
}
break;
}

var G__69187 = args69185.length;
switch (G__69187) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args69185.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buffer must be supplied when transducer is"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args69192 = [];
var len__62120__auto___69195 = arguments.length;
var i__62121__auto___69196 = (0);
while(true){
if((i__62121__auto___69196 < len__62120__auto___69195)){
args69192.push((arguments[i__62121__auto___69196]));

var G__69197 = (i__62121__auto___69196 + (1));
i__62121__auto___69196 = G__69197;
continue;
} else {
}
break;
}

var G__69194 = args69192.length;
switch (G__69194) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args69192.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args69199 = [];
var len__62120__auto___69202 = arguments.length;
var i__62121__auto___69203 = (0);
while(true){
if((i__62121__auto___69203 < len__62120__auto___69202)){
args69199.push((arguments[i__62121__auto___69203]));

var G__69204 = (i__62121__auto___69203 + (1));
i__62121__auto___69203 = G__69204;
continue;
} else {
}
break;
}

var G__69201 = args69199.length;
switch (G__69201) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args69199.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_69206 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_69206);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_69206,ret){
return (function (){
return fn1.call(null,val_69206);
});})(val_69206,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args69207 = [];
var len__62120__auto___69210 = arguments.length;
var i__62121__auto___69211 = (0);
while(true){
if((i__62121__auto___69211 < len__62120__auto___69210)){
args69207.push((arguments[i__62121__auto___69211]));

var G__69212 = (i__62121__auto___69211 + (1));
i__62121__auto___69211 = G__69212;
continue;
} else {
}
break;
}

var G__69209 = args69207.length;
switch (G__69209) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args69207.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__6736__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__6736__auto__)){
var ret = temp__6736__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__6736__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__6736__auto__)){
var retb = temp__6736__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__6736__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__6736__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__61920__auto___69214 = n;
var x_69215 = (0);
while(true){
if((x_69215 < n__61920__auto___69214)){
(a[x_69215] = (0));

var G__69216 = (x_69215 + (1));
x_69215 = G__69216;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__69217 = (i + (1));
i = G__69217;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async69221 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async69221 = (function (flag,meta69222){
this.flag = flag;
this.meta69222 = meta69222;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async69221.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_69223,meta69222__$1){
var self__ = this;
var _69223__$1 = this;
return (new cljs.core.async.t_cljs$core$async69221(self__.flag,meta69222__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async69221.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_69223){
var self__ = this;
var _69223__$1 = this;
return self__.meta69222;
});})(flag))
;

cljs.core.async.t_cljs$core$async69221.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async69221.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async69221.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async69221.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async69221.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta69222","meta69222",648451064,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async69221.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async69221.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async69221";

cljs.core.async.t_cljs$core$async69221.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__61556__auto__,writer__61557__auto__,opt__61558__auto__){
return cljs.core._write.call(null,writer__61557__auto__,"cljs.core.async/t_cljs$core$async69221");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async69221 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async69221(flag__$1,meta69222){
return (new cljs.core.async.t_cljs$core$async69221(flag__$1,meta69222));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async69221(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async69227 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async69227 = (function (flag,cb,meta69228){
this.flag = flag;
this.cb = cb;
this.meta69228 = meta69228;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async69227.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_69229,meta69228__$1){
var self__ = this;
var _69229__$1 = this;
return (new cljs.core.async.t_cljs$core$async69227(self__.flag,self__.cb,meta69228__$1));
});

cljs.core.async.t_cljs$core$async69227.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_69229){
var self__ = this;
var _69229__$1 = this;
return self__.meta69228;
});

cljs.core.async.t_cljs$core$async69227.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async69227.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async69227.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async69227.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async69227.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta69228","meta69228",1306019949,null)], null);
});

cljs.core.async.t_cljs$core$async69227.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async69227.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async69227";

cljs.core.async.t_cljs$core$async69227.cljs$lang$ctorPrWriter = (function (this__61556__auto__,writer__61557__auto__,opt__61558__auto__){
return cljs.core._write.call(null,writer__61557__auto__,"cljs.core.async/t_cljs$core$async69227");
});

cljs.core.async.__GT_t_cljs$core$async69227 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async69227(flag__$1,cb__$1,meta69228){
return (new cljs.core.async.t_cljs$core$async69227(flag__$1,cb__$1,meta69228));
});

}

return (new cljs.core.async.t_cljs$core$async69227(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__69230_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__69230_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__69231_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__69231_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__60899__auto__ = wport;
if(cljs.core.truth_(or__60899__auto__)){
return or__60899__auto__;
} else {
return port;
}
})()], null));
} else {
var G__69232 = (i + (1));
i = G__69232;
continue;
}
} else {
return null;
}
break;
}
})();
var or__60899__auto__ = ret;
if(cljs.core.truth_(or__60899__auto__)){
return or__60899__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__6738__auto__ = (function (){var and__60887__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__60887__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__60887__auto__;
}
})();
if(cljs.core.truth_(temp__6738__auto__)){
var got = temp__6738__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__62127__auto__ = [];
var len__62120__auto___69238 = arguments.length;
var i__62121__auto___69239 = (0);
while(true){
if((i__62121__auto___69239 < len__62120__auto___69238)){
args__62127__auto__.push((arguments[i__62121__auto___69239]));

var G__69240 = (i__62121__auto___69239 + (1));
i__62121__auto___69239 = G__69240;
continue;
} else {
}
break;
}

var argseq__62128__auto__ = ((((1) < args__62127__auto__.length))?(new cljs.core.IndexedSeq(args__62127__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__62128__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__69235){
var map__69236 = p__69235;
var map__69236__$1 = ((((!((map__69236 == null)))?((((map__69236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69236.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69236):map__69236);
var opts = map__69236__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq69233){
var G__69234 = cljs.core.first.call(null,seq69233);
var seq69233__$1 = cljs.core.next.call(null,seq69233);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__69234,seq69233__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args69241 = [];
var len__62120__auto___69291 = arguments.length;
var i__62121__auto___69292 = (0);
while(true){
if((i__62121__auto___69292 < len__62120__auto___69291)){
args69241.push((arguments[i__62121__auto___69292]));

var G__69293 = (i__62121__auto___69292 + (1));
i__62121__auto___69292 = G__69293;
continue;
} else {
}
break;
}

var G__69243 = args69241.length;
switch (G__69243) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args69241.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__69114__auto___69295 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__69114__auto___69295){
return (function (){
var f__69115__auto__ = (function (){var switch__69000__auto__ = ((function (c__69114__auto___69295){
return (function (state_69267){
var state_val_69268 = (state_69267[(1)]);
if((state_val_69268 === (7))){
var inst_69263 = (state_69267[(2)]);
var state_69267__$1 = state_69267;
var statearr_69269_69296 = state_69267__$1;
(statearr_69269_69296[(2)] = inst_69263);

(statearr_69269_69296[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69268 === (1))){
var state_69267__$1 = state_69267;
var statearr_69270_69297 = state_69267__$1;
(statearr_69270_69297[(2)] = null);

(statearr_69270_69297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69268 === (4))){
var inst_69246 = (state_69267[(7)]);
var inst_69246__$1 = (state_69267[(2)]);
var inst_69247 = (inst_69246__$1 == null);
var state_69267__$1 = (function (){var statearr_69271 = state_69267;
(statearr_69271[(7)] = inst_69246__$1);

return statearr_69271;
})();
if(cljs.core.truth_(inst_69247)){
var statearr_69272_69298 = state_69267__$1;
(statearr_69272_69298[(1)] = (5));

} else {
var statearr_69273_69299 = state_69267__$1;
(statearr_69273_69299[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69268 === (13))){
var state_69267__$1 = state_69267;
var statearr_69274_69300 = state_69267__$1;
(statearr_69274_69300[(2)] = null);

(statearr_69274_69300[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69268 === (6))){
var inst_69246 = (state_69267[(7)]);
var state_69267__$1 = state_69267;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_69267__$1,(11),to,inst_69246);
} else {
if((state_val_69268 === (3))){
var inst_69265 = (state_69267[(2)]);
var state_69267__$1 = state_69267;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69267__$1,inst_69265);
} else {
if((state_val_69268 === (12))){
var state_69267__$1 = state_69267;
var statearr_69275_69301 = state_69267__$1;
(statearr_69275_69301[(2)] = null);

(statearr_69275_69301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69268 === (2))){
var state_69267__$1 = state_69267;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69267__$1,(4),from);
} else {
if((state_val_69268 === (11))){
var inst_69256 = (state_69267[(2)]);
var state_69267__$1 = state_69267;
if(cljs.core.truth_(inst_69256)){
var statearr_69276_69302 = state_69267__$1;
(statearr_69276_69302[(1)] = (12));

} else {
var statearr_69277_69303 = state_69267__$1;
(statearr_69277_69303[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69268 === (9))){
var state_69267__$1 = state_69267;
var statearr_69278_69304 = state_69267__$1;
(statearr_69278_69304[(2)] = null);

(statearr_69278_69304[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69268 === (5))){
var state_69267__$1 = state_69267;
if(cljs.core.truth_(close_QMARK_)){
var statearr_69279_69305 = state_69267__$1;
(statearr_69279_69305[(1)] = (8));

} else {
var statearr_69280_69306 = state_69267__$1;
(statearr_69280_69306[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69268 === (14))){
var inst_69261 = (state_69267[(2)]);
var state_69267__$1 = state_69267;
var statearr_69281_69307 = state_69267__$1;
(statearr_69281_69307[(2)] = inst_69261);

(statearr_69281_69307[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69268 === (10))){
var inst_69253 = (state_69267[(2)]);
var state_69267__$1 = state_69267;
var statearr_69282_69308 = state_69267__$1;
(statearr_69282_69308[(2)] = inst_69253);

(statearr_69282_69308[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69268 === (8))){
var inst_69250 = cljs.core.async.close_BANG_.call(null,to);
var state_69267__$1 = state_69267;
var statearr_69283_69309 = state_69267__$1;
(statearr_69283_69309[(2)] = inst_69250);

(statearr_69283_69309[(1)] = (10));


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
});})(c__69114__auto___69295))
;
return ((function (switch__69000__auto__,c__69114__auto___69295){
return (function() {
var cljs$core$async$state_machine__69001__auto__ = null;
var cljs$core$async$state_machine__69001__auto____0 = (function (){
var statearr_69287 = [null,null,null,null,null,null,null,null];
(statearr_69287[(0)] = cljs$core$async$state_machine__69001__auto__);

(statearr_69287[(1)] = (1));

return statearr_69287;
});
var cljs$core$async$state_machine__69001__auto____1 = (function (state_69267){
while(true){
var ret_value__69002__auto__ = (function (){try{while(true){
var result__69003__auto__ = switch__69000__auto__.call(null,state_69267);
if(cljs.core.keyword_identical_QMARK_.call(null,result__69003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69003__auto__;
}
break;
}
}catch (e69288){if((e69288 instanceof Object)){
var ex__69004__auto__ = e69288;
var statearr_69289_69310 = state_69267;
(statearr_69289_69310[(5)] = ex__69004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69267);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69288;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__69002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69311 = state_69267;
state_69267 = G__69311;
continue;
} else {
return ret_value__69002__auto__;
}
break;
}
});
cljs$core$async$state_machine__69001__auto__ = function(state_69267){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__69001__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__69001__auto____1.call(this,state_69267);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__69001__auto____0;
cljs$core$async$state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__69001__auto____1;
return cljs$core$async$state_machine__69001__auto__;
})()
;})(switch__69000__auto__,c__69114__auto___69295))
})();
var state__69116__auto__ = (function (){var statearr_69290 = f__69115__auto__.call(null);
(statearr_69290[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__69114__auto___69295);

return statearr_69290;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__69116__auto__);
});})(c__69114__auto___69295))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__69499){
var vec__69500 = p__69499;
var v = cljs.core.nth.call(null,vec__69500,(0),null);
var p = cljs.core.nth.call(null,vec__69500,(1),null);
var job = vec__69500;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__69114__auto___69686 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__69114__auto___69686,res,vec__69500,v,p,job,jobs,results){
return (function (){
var f__69115__auto__ = (function (){var switch__69000__auto__ = ((function (c__69114__auto___69686,res,vec__69500,v,p,job,jobs,results){
return (function (state_69507){
var state_val_69508 = (state_69507[(1)]);
if((state_val_69508 === (1))){
var state_69507__$1 = state_69507;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_69507__$1,(2),res,v);
} else {
if((state_val_69508 === (2))){
var inst_69504 = (state_69507[(2)]);
var inst_69505 = cljs.core.async.close_BANG_.call(null,res);
var state_69507__$1 = (function (){var statearr_69509 = state_69507;
(statearr_69509[(7)] = inst_69504);

return statearr_69509;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69507__$1,inst_69505);
} else {
return null;
}
}
});})(c__69114__auto___69686,res,vec__69500,v,p,job,jobs,results))
;
return ((function (switch__69000__auto__,c__69114__auto___69686,res,vec__69500,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__69001__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__69001__auto____0 = (function (){
var statearr_69513 = [null,null,null,null,null,null,null,null];
(statearr_69513[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__69001__auto__);

(statearr_69513[(1)] = (1));

return statearr_69513;
});
var cljs$core$async$pipeline_STAR__$_state_machine__69001__auto____1 = (function (state_69507){
while(true){
var ret_value__69002__auto__ = (function (){try{while(true){
var result__69003__auto__ = switch__69000__auto__.call(null,state_69507);
if(cljs.core.keyword_identical_QMARK_.call(null,result__69003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69003__auto__;
}
break;
}
}catch (e69514){if((e69514 instanceof Object)){
var ex__69004__auto__ = e69514;
var statearr_69515_69687 = state_69507;
(statearr_69515_69687[(5)] = ex__69004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69507);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69514;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__69002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69688 = state_69507;
state_69507 = G__69688;
continue;
} else {
return ret_value__69002__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__69001__auto__ = function(state_69507){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__69001__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__69001__auto____1.call(this,state_69507);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__69001__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__69001__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__69001__auto__;
})()
;})(switch__69000__auto__,c__69114__auto___69686,res,vec__69500,v,p,job,jobs,results))
})();
var state__69116__auto__ = (function (){var statearr_69516 = f__69115__auto__.call(null);
(statearr_69516[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__69114__auto___69686);

return statearr_69516;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__69116__auto__);
});})(c__69114__auto___69686,res,vec__69500,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__69517){
var vec__69518 = p__69517;
var v = cljs.core.nth.call(null,vec__69518,(0),null);
var p = cljs.core.nth.call(null,vec__69518,(1),null);
var job = vec__69518;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__61920__auto___69689 = n;
var __69690 = (0);
while(true){
if((__69690 < n__61920__auto___69689)){
var G__69521_69691 = type;
var G__69521_69692__$1 = (((G__69521_69691 instanceof cljs.core.Keyword))?G__69521_69691.fqn:null);
switch (G__69521_69692__$1) {
case "compute":
var c__69114__auto___69694 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__69690,c__69114__auto___69694,G__69521_69691,G__69521_69692__$1,n__61920__auto___69689,jobs,results,process,async){
return (function (){
var f__69115__auto__ = (function (){var switch__69000__auto__ = ((function (__69690,c__69114__auto___69694,G__69521_69691,G__69521_69692__$1,n__61920__auto___69689,jobs,results,process,async){
return (function (state_69534){
var state_val_69535 = (state_69534[(1)]);
if((state_val_69535 === (1))){
var state_69534__$1 = state_69534;
var statearr_69536_69695 = state_69534__$1;
(statearr_69536_69695[(2)] = null);

(statearr_69536_69695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69535 === (2))){
var state_69534__$1 = state_69534;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69534__$1,(4),jobs);
} else {
if((state_val_69535 === (3))){
var inst_69532 = (state_69534[(2)]);
var state_69534__$1 = state_69534;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69534__$1,inst_69532);
} else {
if((state_val_69535 === (4))){
var inst_69524 = (state_69534[(2)]);
var inst_69525 = process.call(null,inst_69524);
var state_69534__$1 = state_69534;
if(cljs.core.truth_(inst_69525)){
var statearr_69537_69696 = state_69534__$1;
(statearr_69537_69696[(1)] = (5));

} else {
var statearr_69538_69697 = state_69534__$1;
(statearr_69538_69697[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69535 === (5))){
var state_69534__$1 = state_69534;
var statearr_69539_69698 = state_69534__$1;
(statearr_69539_69698[(2)] = null);

(statearr_69539_69698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69535 === (6))){
var state_69534__$1 = state_69534;
var statearr_69540_69699 = state_69534__$1;
(statearr_69540_69699[(2)] = null);

(statearr_69540_69699[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69535 === (7))){
var inst_69530 = (state_69534[(2)]);
var state_69534__$1 = state_69534;
var statearr_69541_69700 = state_69534__$1;
(statearr_69541_69700[(2)] = inst_69530);

(statearr_69541_69700[(1)] = (3));


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
});})(__69690,c__69114__auto___69694,G__69521_69691,G__69521_69692__$1,n__61920__auto___69689,jobs,results,process,async))
;
return ((function (__69690,switch__69000__auto__,c__69114__auto___69694,G__69521_69691,G__69521_69692__$1,n__61920__auto___69689,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__69001__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__69001__auto____0 = (function (){
var statearr_69545 = [null,null,null,null,null,null,null];
(statearr_69545[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__69001__auto__);

(statearr_69545[(1)] = (1));

return statearr_69545;
});
var cljs$core$async$pipeline_STAR__$_state_machine__69001__auto____1 = (function (state_69534){
while(true){
var ret_value__69002__auto__ = (function (){try{while(true){
var result__69003__auto__ = switch__69000__auto__.call(null,state_69534);
if(cljs.core.keyword_identical_QMARK_.call(null,result__69003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69003__auto__;
}
break;
}
}catch (e69546){if((e69546 instanceof Object)){
var ex__69004__auto__ = e69546;
var statearr_69547_69701 = state_69534;
(statearr_69547_69701[(5)] = ex__69004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69534);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69546;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__69002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69702 = state_69534;
state_69534 = G__69702;
continue;
} else {
return ret_value__69002__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__69001__auto__ = function(state_69534){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__69001__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__69001__auto____1.call(this,state_69534);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__69001__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__69001__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__69001__auto__;
})()
;})(__69690,switch__69000__auto__,c__69114__auto___69694,G__69521_69691,G__69521_69692__$1,n__61920__auto___69689,jobs,results,process,async))
})();
var state__69116__auto__ = (function (){var statearr_69548 = f__69115__auto__.call(null);
(statearr_69548[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__69114__auto___69694);

return statearr_69548;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__69116__auto__);
});})(__69690,c__69114__auto___69694,G__69521_69691,G__69521_69692__$1,n__61920__auto___69689,jobs,results,process,async))
);


break;
case "async":
var c__69114__auto___69703 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__69690,c__69114__auto___69703,G__69521_69691,G__69521_69692__$1,n__61920__auto___69689,jobs,results,process,async){
return (function (){
var f__69115__auto__ = (function (){var switch__69000__auto__ = ((function (__69690,c__69114__auto___69703,G__69521_69691,G__69521_69692__$1,n__61920__auto___69689,jobs,results,process,async){
return (function (state_69561){
var state_val_69562 = (state_69561[(1)]);
if((state_val_69562 === (1))){
var state_69561__$1 = state_69561;
var statearr_69563_69704 = state_69561__$1;
(statearr_69563_69704[(2)] = null);

(statearr_69563_69704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69562 === (2))){
var state_69561__$1 = state_69561;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69561__$1,(4),jobs);
} else {
if((state_val_69562 === (3))){
var inst_69559 = (state_69561[(2)]);
var state_69561__$1 = state_69561;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69561__$1,inst_69559);
} else {
if((state_val_69562 === (4))){
var inst_69551 = (state_69561[(2)]);
var inst_69552 = async.call(null,inst_69551);
var state_69561__$1 = state_69561;
if(cljs.core.truth_(inst_69552)){
var statearr_69564_69705 = state_69561__$1;
(statearr_69564_69705[(1)] = (5));

} else {
var statearr_69565_69706 = state_69561__$1;
(statearr_69565_69706[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69562 === (5))){
var state_69561__$1 = state_69561;
var statearr_69566_69707 = state_69561__$1;
(statearr_69566_69707[(2)] = null);

(statearr_69566_69707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69562 === (6))){
var state_69561__$1 = state_69561;
var statearr_69567_69708 = state_69561__$1;
(statearr_69567_69708[(2)] = null);

(statearr_69567_69708[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69562 === (7))){
var inst_69557 = (state_69561[(2)]);
var state_69561__$1 = state_69561;
var statearr_69568_69709 = state_69561__$1;
(statearr_69568_69709[(2)] = inst_69557);

(statearr_69568_69709[(1)] = (3));


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
});})(__69690,c__69114__auto___69703,G__69521_69691,G__69521_69692__$1,n__61920__auto___69689,jobs,results,process,async))
;
return ((function (__69690,switch__69000__auto__,c__69114__auto___69703,G__69521_69691,G__69521_69692__$1,n__61920__auto___69689,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__69001__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__69001__auto____0 = (function (){
var statearr_69572 = [null,null,null,null,null,null,null];
(statearr_69572[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__69001__auto__);

(statearr_69572[(1)] = (1));

return statearr_69572;
});
var cljs$core$async$pipeline_STAR__$_state_machine__69001__auto____1 = (function (state_69561){
while(true){
var ret_value__69002__auto__ = (function (){try{while(true){
var result__69003__auto__ = switch__69000__auto__.call(null,state_69561);
if(cljs.core.keyword_identical_QMARK_.call(null,result__69003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69003__auto__;
}
break;
}
}catch (e69573){if((e69573 instanceof Object)){
var ex__69004__auto__ = e69573;
var statearr_69574_69710 = state_69561;
(statearr_69574_69710[(5)] = ex__69004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69561);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69573;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__69002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69711 = state_69561;
state_69561 = G__69711;
continue;
} else {
return ret_value__69002__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__69001__auto__ = function(state_69561){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__69001__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__69001__auto____1.call(this,state_69561);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__69001__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__69001__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__69001__auto__;
})()
;})(__69690,switch__69000__auto__,c__69114__auto___69703,G__69521_69691,G__69521_69692__$1,n__61920__auto___69689,jobs,results,process,async))
})();
var state__69116__auto__ = (function (){var statearr_69575 = f__69115__auto__.call(null);
(statearr_69575[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__69114__auto___69703);

return statearr_69575;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__69116__auto__);
});})(__69690,c__69114__auto___69703,G__69521_69691,G__69521_69692__$1,n__61920__auto___69689,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')));

}

var G__69712 = (__69690 + (1));
__69690 = G__69712;
continue;
} else {
}
break;
}

var c__69114__auto___69713 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__69114__auto___69713,jobs,results,process,async){
return (function (){
var f__69115__auto__ = (function (){var switch__69000__auto__ = ((function (c__69114__auto___69713,jobs,results,process,async){
return (function (state_69597){
var state_val_69598 = (state_69597[(1)]);
if((state_val_69598 === (1))){
var state_69597__$1 = state_69597;
var statearr_69599_69714 = state_69597__$1;
(statearr_69599_69714[(2)] = null);

(statearr_69599_69714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69598 === (2))){
var state_69597__$1 = state_69597;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69597__$1,(4),from);
} else {
if((state_val_69598 === (3))){
var inst_69595 = (state_69597[(2)]);
var state_69597__$1 = state_69597;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69597__$1,inst_69595);
} else {
if((state_val_69598 === (4))){
var inst_69578 = (state_69597[(7)]);
var inst_69578__$1 = (state_69597[(2)]);
var inst_69579 = (inst_69578__$1 == null);
var state_69597__$1 = (function (){var statearr_69600 = state_69597;
(statearr_69600[(7)] = inst_69578__$1);

return statearr_69600;
})();
if(cljs.core.truth_(inst_69579)){
var statearr_69601_69715 = state_69597__$1;
(statearr_69601_69715[(1)] = (5));

} else {
var statearr_69602_69716 = state_69597__$1;
(statearr_69602_69716[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69598 === (5))){
var inst_69581 = cljs.core.async.close_BANG_.call(null,jobs);
var state_69597__$1 = state_69597;
var statearr_69603_69717 = state_69597__$1;
(statearr_69603_69717[(2)] = inst_69581);

(statearr_69603_69717[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69598 === (6))){
var inst_69578 = (state_69597[(7)]);
var inst_69583 = (state_69597[(8)]);
var inst_69583__$1 = cljs.core.async.chan.call(null,(1));
var inst_69584 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_69585 = [inst_69578,inst_69583__$1];
var inst_69586 = (new cljs.core.PersistentVector(null,2,(5),inst_69584,inst_69585,null));
var state_69597__$1 = (function (){var statearr_69604 = state_69597;
(statearr_69604[(8)] = inst_69583__$1);

return statearr_69604;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_69597__$1,(8),jobs,inst_69586);
} else {
if((state_val_69598 === (7))){
var inst_69593 = (state_69597[(2)]);
var state_69597__$1 = state_69597;
var statearr_69605_69718 = state_69597__$1;
(statearr_69605_69718[(2)] = inst_69593);

(statearr_69605_69718[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69598 === (8))){
var inst_69583 = (state_69597[(8)]);
var inst_69588 = (state_69597[(2)]);
var state_69597__$1 = (function (){var statearr_69606 = state_69597;
(statearr_69606[(9)] = inst_69588);

return statearr_69606;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_69597__$1,(9),results,inst_69583);
} else {
if((state_val_69598 === (9))){
var inst_69590 = (state_69597[(2)]);
var state_69597__$1 = (function (){var statearr_69607 = state_69597;
(statearr_69607[(10)] = inst_69590);

return statearr_69607;
})();
var statearr_69608_69719 = state_69597__$1;
(statearr_69608_69719[(2)] = null);

(statearr_69608_69719[(1)] = (2));


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
});})(c__69114__auto___69713,jobs,results,process,async))
;
return ((function (switch__69000__auto__,c__69114__auto___69713,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__69001__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__69001__auto____0 = (function (){
var statearr_69612 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_69612[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__69001__auto__);

(statearr_69612[(1)] = (1));

return statearr_69612;
});
var cljs$core$async$pipeline_STAR__$_state_machine__69001__auto____1 = (function (state_69597){
while(true){
var ret_value__69002__auto__ = (function (){try{while(true){
var result__69003__auto__ = switch__69000__auto__.call(null,state_69597);
if(cljs.core.keyword_identical_QMARK_.call(null,result__69003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69003__auto__;
}
break;
}
}catch (e69613){if((e69613 instanceof Object)){
var ex__69004__auto__ = e69613;
var statearr_69614_69720 = state_69597;
(statearr_69614_69720[(5)] = ex__69004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69597);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69613;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__69002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69721 = state_69597;
state_69597 = G__69721;
continue;
} else {
return ret_value__69002__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__69001__auto__ = function(state_69597){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__69001__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__69001__auto____1.call(this,state_69597);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__69001__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__69001__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__69001__auto__;
})()
;})(switch__69000__auto__,c__69114__auto___69713,jobs,results,process,async))
})();
var state__69116__auto__ = (function (){var statearr_69615 = f__69115__auto__.call(null);
(statearr_69615[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__69114__auto___69713);

return statearr_69615;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__69116__auto__);
});})(c__69114__auto___69713,jobs,results,process,async))
);


var c__69114__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__69114__auto__,jobs,results,process,async){
return (function (){
var f__69115__auto__ = (function (){var switch__69000__auto__ = ((function (c__69114__auto__,jobs,results,process,async){
return (function (state_69653){
var state_val_69654 = (state_69653[(1)]);
if((state_val_69654 === (7))){
var inst_69649 = (state_69653[(2)]);
var state_69653__$1 = state_69653;
var statearr_69655_69722 = state_69653__$1;
(statearr_69655_69722[(2)] = inst_69649);

(statearr_69655_69722[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69654 === (20))){
var state_69653__$1 = state_69653;
var statearr_69656_69723 = state_69653__$1;
(statearr_69656_69723[(2)] = null);

(statearr_69656_69723[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69654 === (1))){
var state_69653__$1 = state_69653;
var statearr_69657_69724 = state_69653__$1;
(statearr_69657_69724[(2)] = null);

(statearr_69657_69724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69654 === (4))){
var inst_69618 = (state_69653[(7)]);
var inst_69618__$1 = (state_69653[(2)]);
var inst_69619 = (inst_69618__$1 == null);
var state_69653__$1 = (function (){var statearr_69658 = state_69653;
(statearr_69658[(7)] = inst_69618__$1);

return statearr_69658;
})();
if(cljs.core.truth_(inst_69619)){
var statearr_69659_69725 = state_69653__$1;
(statearr_69659_69725[(1)] = (5));

} else {
var statearr_69660_69726 = state_69653__$1;
(statearr_69660_69726[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69654 === (15))){
var inst_69631 = (state_69653[(8)]);
var state_69653__$1 = state_69653;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_69653__$1,(18),to,inst_69631);
} else {
if((state_val_69654 === (21))){
var inst_69644 = (state_69653[(2)]);
var state_69653__$1 = state_69653;
var statearr_69661_69727 = state_69653__$1;
(statearr_69661_69727[(2)] = inst_69644);

(statearr_69661_69727[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69654 === (13))){
var inst_69646 = (state_69653[(2)]);
var state_69653__$1 = (function (){var statearr_69662 = state_69653;
(statearr_69662[(9)] = inst_69646);

return statearr_69662;
})();
var statearr_69663_69728 = state_69653__$1;
(statearr_69663_69728[(2)] = null);

(statearr_69663_69728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69654 === (6))){
var inst_69618 = (state_69653[(7)]);
var state_69653__$1 = state_69653;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69653__$1,(11),inst_69618);
} else {
if((state_val_69654 === (17))){
var inst_69639 = (state_69653[(2)]);
var state_69653__$1 = state_69653;
if(cljs.core.truth_(inst_69639)){
var statearr_69664_69729 = state_69653__$1;
(statearr_69664_69729[(1)] = (19));

} else {
var statearr_69665_69730 = state_69653__$1;
(statearr_69665_69730[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69654 === (3))){
var inst_69651 = (state_69653[(2)]);
var state_69653__$1 = state_69653;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69653__$1,inst_69651);
} else {
if((state_val_69654 === (12))){
var inst_69628 = (state_69653[(10)]);
var state_69653__$1 = state_69653;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69653__$1,(14),inst_69628);
} else {
if((state_val_69654 === (2))){
var state_69653__$1 = state_69653;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69653__$1,(4),results);
} else {
if((state_val_69654 === (19))){
var state_69653__$1 = state_69653;
var statearr_69666_69731 = state_69653__$1;
(statearr_69666_69731[(2)] = null);

(statearr_69666_69731[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69654 === (11))){
var inst_69628 = (state_69653[(2)]);
var state_69653__$1 = (function (){var statearr_69667 = state_69653;
(statearr_69667[(10)] = inst_69628);

return statearr_69667;
})();
var statearr_69668_69732 = state_69653__$1;
(statearr_69668_69732[(2)] = null);

(statearr_69668_69732[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69654 === (9))){
var state_69653__$1 = state_69653;
var statearr_69669_69733 = state_69653__$1;
(statearr_69669_69733[(2)] = null);

(statearr_69669_69733[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69654 === (5))){
var state_69653__$1 = state_69653;
if(cljs.core.truth_(close_QMARK_)){
var statearr_69670_69734 = state_69653__$1;
(statearr_69670_69734[(1)] = (8));

} else {
var statearr_69671_69735 = state_69653__$1;
(statearr_69671_69735[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69654 === (14))){
var inst_69633 = (state_69653[(11)]);
var inst_69631 = (state_69653[(8)]);
var inst_69631__$1 = (state_69653[(2)]);
var inst_69632 = (inst_69631__$1 == null);
var inst_69633__$1 = cljs.core.not.call(null,inst_69632);
var state_69653__$1 = (function (){var statearr_69672 = state_69653;
(statearr_69672[(11)] = inst_69633__$1);

(statearr_69672[(8)] = inst_69631__$1);

return statearr_69672;
})();
if(inst_69633__$1){
var statearr_69673_69736 = state_69653__$1;
(statearr_69673_69736[(1)] = (15));

} else {
var statearr_69674_69737 = state_69653__$1;
(statearr_69674_69737[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69654 === (16))){
var inst_69633 = (state_69653[(11)]);
var state_69653__$1 = state_69653;
var statearr_69675_69738 = state_69653__$1;
(statearr_69675_69738[(2)] = inst_69633);

(statearr_69675_69738[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69654 === (10))){
var inst_69625 = (state_69653[(2)]);
var state_69653__$1 = state_69653;
var statearr_69676_69739 = state_69653__$1;
(statearr_69676_69739[(2)] = inst_69625);

(statearr_69676_69739[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69654 === (18))){
var inst_69636 = (state_69653[(2)]);
var state_69653__$1 = state_69653;
var statearr_69677_69740 = state_69653__$1;
(statearr_69677_69740[(2)] = inst_69636);

(statearr_69677_69740[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69654 === (8))){
var inst_69622 = cljs.core.async.close_BANG_.call(null,to);
var state_69653__$1 = state_69653;
var statearr_69678_69741 = state_69653__$1;
(statearr_69678_69741[(2)] = inst_69622);

(statearr_69678_69741[(1)] = (10));


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
});})(c__69114__auto__,jobs,results,process,async))
;
return ((function (switch__69000__auto__,c__69114__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__69001__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__69001__auto____0 = (function (){
var statearr_69682 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_69682[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__69001__auto__);

(statearr_69682[(1)] = (1));

return statearr_69682;
});
var cljs$core$async$pipeline_STAR__$_state_machine__69001__auto____1 = (function (state_69653){
while(true){
var ret_value__69002__auto__ = (function (){try{while(true){
var result__69003__auto__ = switch__69000__auto__.call(null,state_69653);
if(cljs.core.keyword_identical_QMARK_.call(null,result__69003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69003__auto__;
}
break;
}
}catch (e69683){if((e69683 instanceof Object)){
var ex__69004__auto__ = e69683;
var statearr_69684_69742 = state_69653;
(statearr_69684_69742[(5)] = ex__69004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69653);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69683;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__69002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69743 = state_69653;
state_69653 = G__69743;
continue;
} else {
return ret_value__69002__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__69001__auto__ = function(state_69653){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__69001__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__69001__auto____1.call(this,state_69653);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__69001__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__69001__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__69001__auto__;
})()
;})(switch__69000__auto__,c__69114__auto__,jobs,results,process,async))
})();
var state__69116__auto__ = (function (){var statearr_69685 = f__69115__auto__.call(null);
(statearr_69685[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__69114__auto__);

return statearr_69685;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__69116__auto__);
});})(c__69114__auto__,jobs,results,process,async))
);

return c__69114__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args69744 = [];
var len__62120__auto___69747 = arguments.length;
var i__62121__auto___69748 = (0);
while(true){
if((i__62121__auto___69748 < len__62120__auto___69747)){
args69744.push((arguments[i__62121__auto___69748]));

var G__69749 = (i__62121__auto___69748 + (1));
i__62121__auto___69748 = G__69749;
continue;
} else {
}
break;
}

var G__69746 = args69744.length;
switch (G__69746) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args69744.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args69751 = [];
var len__62120__auto___69754 = arguments.length;
var i__62121__auto___69755 = (0);
while(true){
if((i__62121__auto___69755 < len__62120__auto___69754)){
args69751.push((arguments[i__62121__auto___69755]));

var G__69756 = (i__62121__auto___69755 + (1));
i__62121__auto___69755 = G__69756;
continue;
} else {
}
break;
}

var G__69753 = args69751.length;
switch (G__69753) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args69751.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args69758 = [];
var len__62120__auto___69811 = arguments.length;
var i__62121__auto___69812 = (0);
while(true){
if((i__62121__auto___69812 < len__62120__auto___69811)){
args69758.push((arguments[i__62121__auto___69812]));

var G__69813 = (i__62121__auto___69812 + (1));
i__62121__auto___69812 = G__69813;
continue;
} else {
}
break;
}

var G__69760 = args69758.length;
switch (G__69760) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args69758.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__69114__auto___69815 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__69114__auto___69815,tc,fc){
return (function (){
var f__69115__auto__ = (function (){var switch__69000__auto__ = ((function (c__69114__auto___69815,tc,fc){
return (function (state_69786){
var state_val_69787 = (state_69786[(1)]);
if((state_val_69787 === (7))){
var inst_69782 = (state_69786[(2)]);
var state_69786__$1 = state_69786;
var statearr_69788_69816 = state_69786__$1;
(statearr_69788_69816[(2)] = inst_69782);

(statearr_69788_69816[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69787 === (1))){
var state_69786__$1 = state_69786;
var statearr_69789_69817 = state_69786__$1;
(statearr_69789_69817[(2)] = null);

(statearr_69789_69817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69787 === (4))){
var inst_69763 = (state_69786[(7)]);
var inst_69763__$1 = (state_69786[(2)]);
var inst_69764 = (inst_69763__$1 == null);
var state_69786__$1 = (function (){var statearr_69790 = state_69786;
(statearr_69790[(7)] = inst_69763__$1);

return statearr_69790;
})();
if(cljs.core.truth_(inst_69764)){
var statearr_69791_69818 = state_69786__$1;
(statearr_69791_69818[(1)] = (5));

} else {
var statearr_69792_69819 = state_69786__$1;
(statearr_69792_69819[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69787 === (13))){
var state_69786__$1 = state_69786;
var statearr_69793_69820 = state_69786__$1;
(statearr_69793_69820[(2)] = null);

(statearr_69793_69820[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69787 === (6))){
var inst_69763 = (state_69786[(7)]);
var inst_69769 = p.call(null,inst_69763);
var state_69786__$1 = state_69786;
if(cljs.core.truth_(inst_69769)){
var statearr_69794_69821 = state_69786__$1;
(statearr_69794_69821[(1)] = (9));

} else {
var statearr_69795_69822 = state_69786__$1;
(statearr_69795_69822[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69787 === (3))){
var inst_69784 = (state_69786[(2)]);
var state_69786__$1 = state_69786;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69786__$1,inst_69784);
} else {
if((state_val_69787 === (12))){
var state_69786__$1 = state_69786;
var statearr_69796_69823 = state_69786__$1;
(statearr_69796_69823[(2)] = null);

(statearr_69796_69823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69787 === (2))){
var state_69786__$1 = state_69786;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69786__$1,(4),ch);
} else {
if((state_val_69787 === (11))){
var inst_69763 = (state_69786[(7)]);
var inst_69773 = (state_69786[(2)]);
var state_69786__$1 = state_69786;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_69786__$1,(8),inst_69773,inst_69763);
} else {
if((state_val_69787 === (9))){
var state_69786__$1 = state_69786;
var statearr_69797_69824 = state_69786__$1;
(statearr_69797_69824[(2)] = tc);

(statearr_69797_69824[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69787 === (5))){
var inst_69766 = cljs.core.async.close_BANG_.call(null,tc);
var inst_69767 = cljs.core.async.close_BANG_.call(null,fc);
var state_69786__$1 = (function (){var statearr_69798 = state_69786;
(statearr_69798[(8)] = inst_69766);

return statearr_69798;
})();
var statearr_69799_69825 = state_69786__$1;
(statearr_69799_69825[(2)] = inst_69767);

(statearr_69799_69825[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69787 === (14))){
var inst_69780 = (state_69786[(2)]);
var state_69786__$1 = state_69786;
var statearr_69800_69826 = state_69786__$1;
(statearr_69800_69826[(2)] = inst_69780);

(statearr_69800_69826[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69787 === (10))){
var state_69786__$1 = state_69786;
var statearr_69801_69827 = state_69786__$1;
(statearr_69801_69827[(2)] = fc);

(statearr_69801_69827[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69787 === (8))){
var inst_69775 = (state_69786[(2)]);
var state_69786__$1 = state_69786;
if(cljs.core.truth_(inst_69775)){
var statearr_69802_69828 = state_69786__$1;
(statearr_69802_69828[(1)] = (12));

} else {
var statearr_69803_69829 = state_69786__$1;
(statearr_69803_69829[(1)] = (13));

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
});})(c__69114__auto___69815,tc,fc))
;
return ((function (switch__69000__auto__,c__69114__auto___69815,tc,fc){
return (function() {
var cljs$core$async$state_machine__69001__auto__ = null;
var cljs$core$async$state_machine__69001__auto____0 = (function (){
var statearr_69807 = [null,null,null,null,null,null,null,null,null];
(statearr_69807[(0)] = cljs$core$async$state_machine__69001__auto__);

(statearr_69807[(1)] = (1));

return statearr_69807;
});
var cljs$core$async$state_machine__69001__auto____1 = (function (state_69786){
while(true){
var ret_value__69002__auto__ = (function (){try{while(true){
var result__69003__auto__ = switch__69000__auto__.call(null,state_69786);
if(cljs.core.keyword_identical_QMARK_.call(null,result__69003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69003__auto__;
}
break;
}
}catch (e69808){if((e69808 instanceof Object)){
var ex__69004__auto__ = e69808;
var statearr_69809_69830 = state_69786;
(statearr_69809_69830[(5)] = ex__69004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69786);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69808;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__69002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69831 = state_69786;
state_69786 = G__69831;
continue;
} else {
return ret_value__69002__auto__;
}
break;
}
});
cljs$core$async$state_machine__69001__auto__ = function(state_69786){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__69001__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__69001__auto____1.call(this,state_69786);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__69001__auto____0;
cljs$core$async$state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__69001__auto____1;
return cljs$core$async$state_machine__69001__auto__;
})()
;})(switch__69000__auto__,c__69114__auto___69815,tc,fc))
})();
var state__69116__auto__ = (function (){var statearr_69810 = f__69115__auto__.call(null);
(statearr_69810[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__69114__auto___69815);

return statearr_69810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__69116__auto__);
});})(c__69114__auto___69815,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__69114__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__69114__auto__){
return (function (){
var f__69115__auto__ = (function (){var switch__69000__auto__ = ((function (c__69114__auto__){
return (function (state_69895){
var state_val_69896 = (state_69895[(1)]);
if((state_val_69896 === (7))){
var inst_69891 = (state_69895[(2)]);
var state_69895__$1 = state_69895;
var statearr_69897_69918 = state_69895__$1;
(statearr_69897_69918[(2)] = inst_69891);

(statearr_69897_69918[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69896 === (1))){
var inst_69875 = init;
var state_69895__$1 = (function (){var statearr_69898 = state_69895;
(statearr_69898[(7)] = inst_69875);

return statearr_69898;
})();
var statearr_69899_69919 = state_69895__$1;
(statearr_69899_69919[(2)] = null);

(statearr_69899_69919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69896 === (4))){
var inst_69878 = (state_69895[(8)]);
var inst_69878__$1 = (state_69895[(2)]);
var inst_69879 = (inst_69878__$1 == null);
var state_69895__$1 = (function (){var statearr_69900 = state_69895;
(statearr_69900[(8)] = inst_69878__$1);

return statearr_69900;
})();
if(cljs.core.truth_(inst_69879)){
var statearr_69901_69920 = state_69895__$1;
(statearr_69901_69920[(1)] = (5));

} else {
var statearr_69902_69921 = state_69895__$1;
(statearr_69902_69921[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69896 === (6))){
var inst_69875 = (state_69895[(7)]);
var inst_69882 = (state_69895[(9)]);
var inst_69878 = (state_69895[(8)]);
var inst_69882__$1 = f.call(null,inst_69875,inst_69878);
var inst_69883 = cljs.core.reduced_QMARK_.call(null,inst_69882__$1);
var state_69895__$1 = (function (){var statearr_69903 = state_69895;
(statearr_69903[(9)] = inst_69882__$1);

return statearr_69903;
})();
if(inst_69883){
var statearr_69904_69922 = state_69895__$1;
(statearr_69904_69922[(1)] = (8));

} else {
var statearr_69905_69923 = state_69895__$1;
(statearr_69905_69923[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69896 === (3))){
var inst_69893 = (state_69895[(2)]);
var state_69895__$1 = state_69895;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69895__$1,inst_69893);
} else {
if((state_val_69896 === (2))){
var state_69895__$1 = state_69895;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69895__$1,(4),ch);
} else {
if((state_val_69896 === (9))){
var inst_69882 = (state_69895[(9)]);
var inst_69875 = inst_69882;
var state_69895__$1 = (function (){var statearr_69906 = state_69895;
(statearr_69906[(7)] = inst_69875);

return statearr_69906;
})();
var statearr_69907_69924 = state_69895__$1;
(statearr_69907_69924[(2)] = null);

(statearr_69907_69924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69896 === (5))){
var inst_69875 = (state_69895[(7)]);
var state_69895__$1 = state_69895;
var statearr_69908_69925 = state_69895__$1;
(statearr_69908_69925[(2)] = inst_69875);

(statearr_69908_69925[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69896 === (10))){
var inst_69889 = (state_69895[(2)]);
var state_69895__$1 = state_69895;
var statearr_69909_69926 = state_69895__$1;
(statearr_69909_69926[(2)] = inst_69889);

(statearr_69909_69926[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69896 === (8))){
var inst_69882 = (state_69895[(9)]);
var inst_69885 = cljs.core.deref.call(null,inst_69882);
var state_69895__$1 = state_69895;
var statearr_69910_69927 = state_69895__$1;
(statearr_69910_69927[(2)] = inst_69885);

(statearr_69910_69927[(1)] = (10));


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
});})(c__69114__auto__))
;
return ((function (switch__69000__auto__,c__69114__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__69001__auto__ = null;
var cljs$core$async$reduce_$_state_machine__69001__auto____0 = (function (){
var statearr_69914 = [null,null,null,null,null,null,null,null,null,null];
(statearr_69914[(0)] = cljs$core$async$reduce_$_state_machine__69001__auto__);

(statearr_69914[(1)] = (1));

return statearr_69914;
});
var cljs$core$async$reduce_$_state_machine__69001__auto____1 = (function (state_69895){
while(true){
var ret_value__69002__auto__ = (function (){try{while(true){
var result__69003__auto__ = switch__69000__auto__.call(null,state_69895);
if(cljs.core.keyword_identical_QMARK_.call(null,result__69003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69003__auto__;
}
break;
}
}catch (e69915){if((e69915 instanceof Object)){
var ex__69004__auto__ = e69915;
var statearr_69916_69928 = state_69895;
(statearr_69916_69928[(5)] = ex__69004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69895);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69915;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__69002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69929 = state_69895;
state_69895 = G__69929;
continue;
} else {
return ret_value__69002__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__69001__auto__ = function(state_69895){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__69001__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__69001__auto____1.call(this,state_69895);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__69001__auto____0;
cljs$core$async$reduce_$_state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__69001__auto____1;
return cljs$core$async$reduce_$_state_machine__69001__auto__;
})()
;})(switch__69000__auto__,c__69114__auto__))
})();
var state__69116__auto__ = (function (){var statearr_69917 = f__69115__auto__.call(null);
(statearr_69917[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__69114__auto__);

return statearr_69917;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__69116__auto__);
});})(c__69114__auto__))
);

return c__69114__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__69114__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__69114__auto__,f__$1){
return (function (){
var f__69115__auto__ = (function (){var switch__69000__auto__ = ((function (c__69114__auto__,f__$1){
return (function (state_69949){
var state_val_69950 = (state_69949[(1)]);
if((state_val_69950 === (1))){
var inst_69944 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_69949__$1 = state_69949;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69949__$1,(2),inst_69944);
} else {
if((state_val_69950 === (2))){
var inst_69946 = (state_69949[(2)]);
var inst_69947 = f__$1.call(null,inst_69946);
var state_69949__$1 = state_69949;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69949__$1,inst_69947);
} else {
return null;
}
}
});})(c__69114__auto__,f__$1))
;
return ((function (switch__69000__auto__,c__69114__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__69001__auto__ = null;
var cljs$core$async$transduce_$_state_machine__69001__auto____0 = (function (){
var statearr_69954 = [null,null,null,null,null,null,null];
(statearr_69954[(0)] = cljs$core$async$transduce_$_state_machine__69001__auto__);

(statearr_69954[(1)] = (1));

return statearr_69954;
});
var cljs$core$async$transduce_$_state_machine__69001__auto____1 = (function (state_69949){
while(true){
var ret_value__69002__auto__ = (function (){try{while(true){
var result__69003__auto__ = switch__69000__auto__.call(null,state_69949);
if(cljs.core.keyword_identical_QMARK_.call(null,result__69003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69003__auto__;
}
break;
}
}catch (e69955){if((e69955 instanceof Object)){
var ex__69004__auto__ = e69955;
var statearr_69956_69958 = state_69949;
(statearr_69956_69958[(5)] = ex__69004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69949);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69955;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__69002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69959 = state_69949;
state_69949 = G__69959;
continue;
} else {
return ret_value__69002__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__69001__auto__ = function(state_69949){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__69001__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__69001__auto____1.call(this,state_69949);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__69001__auto____0;
cljs$core$async$transduce_$_state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__69001__auto____1;
return cljs$core$async$transduce_$_state_machine__69001__auto__;
})()
;})(switch__69000__auto__,c__69114__auto__,f__$1))
})();
var state__69116__auto__ = (function (){var statearr_69957 = f__69115__auto__.call(null);
(statearr_69957[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__69114__auto__);

return statearr_69957;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__69116__auto__);
});})(c__69114__auto__,f__$1))
);

return c__69114__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args69960 = [];
var len__62120__auto___70012 = arguments.length;
var i__62121__auto___70013 = (0);
while(true){
if((i__62121__auto___70013 < len__62120__auto___70012)){
args69960.push((arguments[i__62121__auto___70013]));

var G__70014 = (i__62121__auto___70013 + (1));
i__62121__auto___70013 = G__70014;
continue;
} else {
}
break;
}

var G__69962 = args69960.length;
switch (G__69962) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args69960.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__69114__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__69114__auto__){
return (function (){
var f__69115__auto__ = (function (){var switch__69000__auto__ = ((function (c__69114__auto__){
return (function (state_69987){
var state_val_69988 = (state_69987[(1)]);
if((state_val_69988 === (7))){
var inst_69969 = (state_69987[(2)]);
var state_69987__$1 = state_69987;
var statearr_69989_70016 = state_69987__$1;
(statearr_69989_70016[(2)] = inst_69969);

(statearr_69989_70016[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69988 === (1))){
var inst_69963 = cljs.core.seq.call(null,coll);
var inst_69964 = inst_69963;
var state_69987__$1 = (function (){var statearr_69990 = state_69987;
(statearr_69990[(7)] = inst_69964);

return statearr_69990;
})();
var statearr_69991_70017 = state_69987__$1;
(statearr_69991_70017[(2)] = null);

(statearr_69991_70017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69988 === (4))){
var inst_69964 = (state_69987[(7)]);
var inst_69967 = cljs.core.first.call(null,inst_69964);
var state_69987__$1 = state_69987;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_69987__$1,(7),ch,inst_69967);
} else {
if((state_val_69988 === (13))){
var inst_69981 = (state_69987[(2)]);
var state_69987__$1 = state_69987;
var statearr_69992_70018 = state_69987__$1;
(statearr_69992_70018[(2)] = inst_69981);

(statearr_69992_70018[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69988 === (6))){
var inst_69972 = (state_69987[(2)]);
var state_69987__$1 = state_69987;
if(cljs.core.truth_(inst_69972)){
var statearr_69993_70019 = state_69987__$1;
(statearr_69993_70019[(1)] = (8));

} else {
var statearr_69994_70020 = state_69987__$1;
(statearr_69994_70020[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69988 === (3))){
var inst_69985 = (state_69987[(2)]);
var state_69987__$1 = state_69987;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69987__$1,inst_69985);
} else {
if((state_val_69988 === (12))){
var state_69987__$1 = state_69987;
var statearr_69995_70021 = state_69987__$1;
(statearr_69995_70021[(2)] = null);

(statearr_69995_70021[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69988 === (2))){
var inst_69964 = (state_69987[(7)]);
var state_69987__$1 = state_69987;
if(cljs.core.truth_(inst_69964)){
var statearr_69996_70022 = state_69987__$1;
(statearr_69996_70022[(1)] = (4));

} else {
var statearr_69997_70023 = state_69987__$1;
(statearr_69997_70023[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69988 === (11))){
var inst_69978 = cljs.core.async.close_BANG_.call(null,ch);
var state_69987__$1 = state_69987;
var statearr_69998_70024 = state_69987__$1;
(statearr_69998_70024[(2)] = inst_69978);

(statearr_69998_70024[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69988 === (9))){
var state_69987__$1 = state_69987;
if(cljs.core.truth_(close_QMARK_)){
var statearr_69999_70025 = state_69987__$1;
(statearr_69999_70025[(1)] = (11));

} else {
var statearr_70000_70026 = state_69987__$1;
(statearr_70000_70026[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69988 === (5))){
var inst_69964 = (state_69987[(7)]);
var state_69987__$1 = state_69987;
var statearr_70001_70027 = state_69987__$1;
(statearr_70001_70027[(2)] = inst_69964);

(statearr_70001_70027[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69988 === (10))){
var inst_69983 = (state_69987[(2)]);
var state_69987__$1 = state_69987;
var statearr_70002_70028 = state_69987__$1;
(statearr_70002_70028[(2)] = inst_69983);

(statearr_70002_70028[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69988 === (8))){
var inst_69964 = (state_69987[(7)]);
var inst_69974 = cljs.core.next.call(null,inst_69964);
var inst_69964__$1 = inst_69974;
var state_69987__$1 = (function (){var statearr_70003 = state_69987;
(statearr_70003[(7)] = inst_69964__$1);

return statearr_70003;
})();
var statearr_70004_70029 = state_69987__$1;
(statearr_70004_70029[(2)] = null);

(statearr_70004_70029[(1)] = (2));


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
});})(c__69114__auto__))
;
return ((function (switch__69000__auto__,c__69114__auto__){
return (function() {
var cljs$core$async$state_machine__69001__auto__ = null;
var cljs$core$async$state_machine__69001__auto____0 = (function (){
var statearr_70008 = [null,null,null,null,null,null,null,null];
(statearr_70008[(0)] = cljs$core$async$state_machine__69001__auto__);

(statearr_70008[(1)] = (1));

return statearr_70008;
});
var cljs$core$async$state_machine__69001__auto____1 = (function (state_69987){
while(true){
var ret_value__69002__auto__ = (function (){try{while(true){
var result__69003__auto__ = switch__69000__auto__.call(null,state_69987);
if(cljs.core.keyword_identical_QMARK_.call(null,result__69003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69003__auto__;
}
break;
}
}catch (e70009){if((e70009 instanceof Object)){
var ex__69004__auto__ = e70009;
var statearr_70010_70030 = state_69987;
(statearr_70010_70030[(5)] = ex__69004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69987);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70009;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__69002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70031 = state_69987;
state_69987 = G__70031;
continue;
} else {
return ret_value__69002__auto__;
}
break;
}
});
cljs$core$async$state_machine__69001__auto__ = function(state_69987){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__69001__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__69001__auto____1.call(this,state_69987);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__69001__auto____0;
cljs$core$async$state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__69001__auto____1;
return cljs$core$async$state_machine__69001__auto__;
})()
;})(switch__69000__auto__,c__69114__auto__))
})();
var state__69116__auto__ = (function (){var statearr_70011 = f__69115__auto__.call(null);
(statearr_70011[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__69114__auto__);

return statearr_70011;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__69116__auto__);
});})(c__69114__auto__))
);

return c__69114__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__61617__auto__ = (((_ == null))?null:_);
var m__61618__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__61617__auto__)]);
if(!((m__61618__auto__ == null))){
return m__61618__auto__.call(null,_);
} else {
var m__61618__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__61618__auto____$1 == null))){
return m__61618__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__61617__auto__ = (((m == null))?null:m);
var m__61618__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__61617__auto__)]);
if(!((m__61618__auto__ == null))){
return m__61618__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__61618__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__61618__auto____$1 == null))){
return m__61618__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__61617__auto__ = (((m == null))?null:m);
var m__61618__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__61617__auto__)]);
if(!((m__61618__auto__ == null))){
return m__61618__auto__.call(null,m,ch);
} else {
var m__61618__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__61618__auto____$1 == null))){
return m__61618__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__61617__auto__ = (((m == null))?null:m);
var m__61618__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__61617__auto__)]);
if(!((m__61618__auto__ == null))){
return m__61618__auto__.call(null,m);
} else {
var m__61618__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__61618__auto____$1 == null))){
return m__61618__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async70257 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async70257 = (function (ch,cs,meta70258){
this.ch = ch;
this.cs = cs;
this.meta70258 = meta70258;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async70257.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_70259,meta70258__$1){
var self__ = this;
var _70259__$1 = this;
return (new cljs.core.async.t_cljs$core$async70257(self__.ch,self__.cs,meta70258__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async70257.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_70259){
var self__ = this;
var _70259__$1 = this;
return self__.meta70258;
});})(cs))
;

cljs.core.async.t_cljs$core$async70257.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async70257.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async70257.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async70257.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async70257.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async70257.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async70257.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta70258","meta70258",2002169499,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async70257.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async70257.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async70257";

cljs.core.async.t_cljs$core$async70257.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__61556__auto__,writer__61557__auto__,opt__61558__auto__){
return cljs.core._write.call(null,writer__61557__auto__,"cljs.core.async/t_cljs$core$async70257");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async70257 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async70257(ch__$1,cs__$1,meta70258){
return (new cljs.core.async.t_cljs$core$async70257(ch__$1,cs__$1,meta70258));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async70257(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__69114__auto___70482 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__69114__auto___70482,cs,m,dchan,dctr,done){
return (function (){
var f__69115__auto__ = (function (){var switch__69000__auto__ = ((function (c__69114__auto___70482,cs,m,dchan,dctr,done){
return (function (state_70394){
var state_val_70395 = (state_70394[(1)]);
if((state_val_70395 === (7))){
var inst_70390 = (state_70394[(2)]);
var state_70394__$1 = state_70394;
var statearr_70396_70483 = state_70394__$1;
(statearr_70396_70483[(2)] = inst_70390);

(statearr_70396_70483[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70395 === (20))){
var inst_70293 = (state_70394[(7)]);
var inst_70305 = cljs.core.first.call(null,inst_70293);
var inst_70306 = cljs.core.nth.call(null,inst_70305,(0),null);
var inst_70307 = cljs.core.nth.call(null,inst_70305,(1),null);
var state_70394__$1 = (function (){var statearr_70397 = state_70394;
(statearr_70397[(8)] = inst_70306);

return statearr_70397;
})();
if(cljs.core.truth_(inst_70307)){
var statearr_70398_70484 = state_70394__$1;
(statearr_70398_70484[(1)] = (22));

} else {
var statearr_70399_70485 = state_70394__$1;
(statearr_70399_70485[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70395 === (27))){
var inst_70337 = (state_70394[(9)]);
var inst_70262 = (state_70394[(10)]);
var inst_70342 = (state_70394[(11)]);
var inst_70335 = (state_70394[(12)]);
var inst_70342__$1 = cljs.core._nth.call(null,inst_70335,inst_70337);
var inst_70343 = cljs.core.async.put_BANG_.call(null,inst_70342__$1,inst_70262,done);
var state_70394__$1 = (function (){var statearr_70400 = state_70394;
(statearr_70400[(11)] = inst_70342__$1);

return statearr_70400;
})();
if(cljs.core.truth_(inst_70343)){
var statearr_70401_70486 = state_70394__$1;
(statearr_70401_70486[(1)] = (30));

} else {
var statearr_70402_70487 = state_70394__$1;
(statearr_70402_70487[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70395 === (1))){
var state_70394__$1 = state_70394;
var statearr_70403_70488 = state_70394__$1;
(statearr_70403_70488[(2)] = null);

(statearr_70403_70488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70395 === (24))){
var inst_70293 = (state_70394[(7)]);
var inst_70312 = (state_70394[(2)]);
var inst_70313 = cljs.core.next.call(null,inst_70293);
var inst_70271 = inst_70313;
var inst_70272 = null;
var inst_70273 = (0);
var inst_70274 = (0);
var state_70394__$1 = (function (){var statearr_70404 = state_70394;
(statearr_70404[(13)] = inst_70273);

(statearr_70404[(14)] = inst_70271);

(statearr_70404[(15)] = inst_70274);

(statearr_70404[(16)] = inst_70272);

(statearr_70404[(17)] = inst_70312);

return statearr_70404;
})();
var statearr_70405_70489 = state_70394__$1;
(statearr_70405_70489[(2)] = null);

(statearr_70405_70489[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70395 === (39))){
var state_70394__$1 = state_70394;
var statearr_70409_70490 = state_70394__$1;
(statearr_70409_70490[(2)] = null);

(statearr_70409_70490[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70395 === (4))){
var inst_70262 = (state_70394[(10)]);
var inst_70262__$1 = (state_70394[(2)]);
var inst_70263 = (inst_70262__$1 == null);
var state_70394__$1 = (function (){var statearr_70410 = state_70394;
(statearr_70410[(10)] = inst_70262__$1);

return statearr_70410;
})();
if(cljs.core.truth_(inst_70263)){
var statearr_70411_70491 = state_70394__$1;
(statearr_70411_70491[(1)] = (5));

} else {
var statearr_70412_70492 = state_70394__$1;
(statearr_70412_70492[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70395 === (15))){
var inst_70273 = (state_70394[(13)]);
var inst_70271 = (state_70394[(14)]);
var inst_70274 = (state_70394[(15)]);
var inst_70272 = (state_70394[(16)]);
var inst_70289 = (state_70394[(2)]);
var inst_70290 = (inst_70274 + (1));
var tmp70406 = inst_70273;
var tmp70407 = inst_70271;
var tmp70408 = inst_70272;
var inst_70271__$1 = tmp70407;
var inst_70272__$1 = tmp70408;
var inst_70273__$1 = tmp70406;
var inst_70274__$1 = inst_70290;
var state_70394__$1 = (function (){var statearr_70413 = state_70394;
(statearr_70413[(18)] = inst_70289);

(statearr_70413[(13)] = inst_70273__$1);

(statearr_70413[(14)] = inst_70271__$1);

(statearr_70413[(15)] = inst_70274__$1);

(statearr_70413[(16)] = inst_70272__$1);

return statearr_70413;
})();
var statearr_70414_70493 = state_70394__$1;
(statearr_70414_70493[(2)] = null);

(statearr_70414_70493[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70395 === (21))){
var inst_70316 = (state_70394[(2)]);
var state_70394__$1 = state_70394;
var statearr_70418_70494 = state_70394__$1;
(statearr_70418_70494[(2)] = inst_70316);

(statearr_70418_70494[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70395 === (31))){
var inst_70342 = (state_70394[(11)]);
var inst_70346 = done.call(null,null);
var inst_70347 = cljs.core.async.untap_STAR_.call(null,m,inst_70342);
var state_70394__$1 = (function (){var statearr_70419 = state_70394;
(statearr_70419[(19)] = inst_70346);

return statearr_70419;
})();
var statearr_70420_70495 = state_70394__$1;
(statearr_70420_70495[(2)] = inst_70347);

(statearr_70420_70495[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70395 === (32))){
var inst_70336 = (state_70394[(20)]);
var inst_70337 = (state_70394[(9)]);
var inst_70334 = (state_70394[(21)]);
var inst_70335 = (state_70394[(12)]);
var inst_70349 = (state_70394[(2)]);
var inst_70350 = (inst_70337 + (1));
var tmp70415 = inst_70336;
var tmp70416 = inst_70334;
var tmp70417 = inst_70335;
var inst_70334__$1 = tmp70416;
var inst_70335__$1 = tmp70417;
var inst_70336__$1 = tmp70415;
var inst_70337__$1 = inst_70350;
var state_70394__$1 = (function (){var statearr_70421 = state_70394;
(statearr_70421[(20)] = inst_70336__$1);

(statearr_70421[(9)] = inst_70337__$1);

(statearr_70421[(22)] = inst_70349);

(statearr_70421[(21)] = inst_70334__$1);

(statearr_70421[(12)] = inst_70335__$1);

return statearr_70421;
})();
var statearr_70422_70496 = state_70394__$1;
(statearr_70422_70496[(2)] = null);

(statearr_70422_70496[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70395 === (40))){
var inst_70362 = (state_70394[(23)]);
var inst_70366 = done.call(null,null);
var inst_70367 = cljs.core.async.untap_STAR_.call(null,m,inst_70362);
var state_70394__$1 = (function (){var statearr_70423 = state_70394;
(statearr_70423[(24)] = inst_70366);

return statearr_70423;
})();
var statearr_70424_70497 = state_70394__$1;
(statearr_70424_70497[(2)] = inst_70367);

(statearr_70424_70497[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70395 === (33))){
var inst_70353 = (state_70394[(25)]);
var inst_70355 = cljs.core.chunked_seq_QMARK_.call(null,inst_70353);
var state_70394__$1 = state_70394;
if(inst_70355){
var statearr_70425_70498 = state_70394__$1;
(statearr_70425_70498[(1)] = (36));

} else {
var statearr_70426_70499 = state_70394__$1;
(statearr_70426_70499[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70395 === (13))){
var inst_70283 = (state_70394[(26)]);
var inst_70286 = cljs.core.async.close_BANG_.call(null,inst_70283);
var state_70394__$1 = state_70394;
var statearr_70427_70500 = state_70394__$1;
(statearr_70427_70500[(2)] = inst_70286);

(statearr_70427_70500[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70395 === (22))){
var inst_70306 = (state_70394[(8)]);
var inst_70309 = cljs.core.async.close_BANG_.call(null,inst_70306);
var state_70394__$1 = state_70394;
var statearr_70428_70501 = state_70394__$1;
(statearr_70428_70501[(2)] = inst_70309);

(statearr_70428_70501[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70395 === (36))){
var inst_70353 = (state_70394[(25)]);
var inst_70357 = cljs.core.chunk_first.call(null,inst_70353);
var inst_70358 = cljs.core.chunk_rest.call(null,inst_70353);
var inst_70359 = cljs.core.count.call(null,inst_70357);
var inst_70334 = inst_70358;
var inst_70335 = inst_70357;
var inst_70336 = inst_70359;
var inst_70337 = (0);
var state_70394__$1 = (function (){var statearr_70429 = state_70394;
(statearr_70429[(20)] = inst_70336);

(statearr_70429[(9)] = inst_70337);

(statearr_70429[(21)] = inst_70334);

(statearr_70429[(12)] = inst_70335);

return statearr_70429;
})();
var statearr_70430_70502 = state_70394__$1;
(statearr_70430_70502[(2)] = null);

(statearr_70430_70502[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70395 === (41))){
var inst_70353 = (state_70394[(25)]);
var inst_70369 = (state_70394[(2)]);
var inst_70370 = cljs.core.next.call(null,inst_70353);
var inst_70334 = inst_70370;
var inst_70335 = null;
var inst_70336 = (0);
var inst_70337 = (0);
var state_70394__$1 = (function (){var statearr_70431 = state_70394;
(statearr_70431[(20)] = inst_70336);

(statearr_70431[(9)] = inst_70337);

(statearr_70431[(21)] = inst_70334);

(statearr_70431[(12)] = inst_70335);

(statearr_70431[(27)] = inst_70369);

return statearr_70431;
})();
var statearr_70432_70503 = state_70394__$1;
(statearr_70432_70503[(2)] = null);

(statearr_70432_70503[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70395 === (43))){
var state_70394__$1 = state_70394;
var statearr_70433_70504 = state_70394__$1;
(statearr_70433_70504[(2)] = null);

(statearr_70433_70504[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70395 === (29))){
var inst_70378 = (state_70394[(2)]);
var state_70394__$1 = state_70394;
var statearr_70434_70505 = state_70394__$1;
(statearr_70434_70505[(2)] = inst_70378);

(statearr_70434_70505[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70395 === (44))){
var inst_70387 = (state_70394[(2)]);
var state_70394__$1 = (function (){var statearr_70435 = state_70394;
(statearr_70435[(28)] = inst_70387);

return statearr_70435;
})();
var statearr_70436_70506 = state_70394__$1;
(statearr_70436_70506[(2)] = null);

(statearr_70436_70506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70395 === (6))){
var inst_70326 = (state_70394[(29)]);
var inst_70325 = cljs.core.deref.call(null,cs);
var inst_70326__$1 = cljs.core.keys.call(null,inst_70325);
var inst_70327 = cljs.core.count.call(null,inst_70326__$1);
var inst_70328 = cljs.core.reset_BANG_.call(null,dctr,inst_70327);
var inst_70333 = cljs.core.seq.call(null,inst_70326__$1);
var inst_70334 = inst_70333;
var inst_70335 = null;
var inst_70336 = (0);
var inst_70337 = (0);
var state_70394__$1 = (function (){var statearr_70437 = state_70394;
(statearr_70437[(20)] = inst_70336);

(statearr_70437[(9)] = inst_70337);

(statearr_70437[(29)] = inst_70326__$1);

(statearr_70437[(30)] = inst_70328);

(statearr_70437[(21)] = inst_70334);

(statearr_70437[(12)] = inst_70335);

return statearr_70437;
})();
var statearr_70438_70507 = state_70394__$1;
(statearr_70438_70507[(2)] = null);

(statearr_70438_70507[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70395 === (28))){
var inst_70353 = (state_70394[(25)]);
var inst_70334 = (state_70394[(21)]);
var inst_70353__$1 = cljs.core.seq.call(null,inst_70334);
var state_70394__$1 = (function (){var statearr_70439 = state_70394;
(statearr_70439[(25)] = inst_70353__$1);

return statearr_70439;
})();
if(inst_70353__$1){
var statearr_70440_70508 = state_70394__$1;
(statearr_70440_70508[(1)] = (33));

} else {
var statearr_70441_70509 = state_70394__$1;
(statearr_70441_70509[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70395 === (25))){
var inst_70336 = (state_70394[(20)]);
var inst_70337 = (state_70394[(9)]);
var inst_70339 = (inst_70337 < inst_70336);
var inst_70340 = inst_70339;
var state_70394__$1 = state_70394;
if(cljs.core.truth_(inst_70340)){
var statearr_70442_70510 = state_70394__$1;
(statearr_70442_70510[(1)] = (27));

} else {
var statearr_70443_70511 = state_70394__$1;
(statearr_70443_70511[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70395 === (34))){
var state_70394__$1 = state_70394;
var statearr_70444_70512 = state_70394__$1;
(statearr_70444_70512[(2)] = null);

(statearr_70444_70512[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70395 === (17))){
var state_70394__$1 = state_70394;
var statearr_70445_70513 = state_70394__$1;
(statearr_70445_70513[(2)] = null);

(statearr_70445_70513[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70395 === (3))){
var inst_70392 = (state_70394[(2)]);
var state_70394__$1 = state_70394;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_70394__$1,inst_70392);
} else {
if((state_val_70395 === (12))){
var inst_70321 = (state_70394[(2)]);
var state_70394__$1 = state_70394;
var statearr_70446_70514 = state_70394__$1;
(statearr_70446_70514[(2)] = inst_70321);

(statearr_70446_70514[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70395 === (2))){
var state_70394__$1 = state_70394;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_70394__$1,(4),ch);
} else {
if((state_val_70395 === (23))){
var state_70394__$1 = state_70394;
var statearr_70447_70515 = state_70394__$1;
(statearr_70447_70515[(2)] = null);

(statearr_70447_70515[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70395 === (35))){
var inst_70376 = (state_70394[(2)]);
var state_70394__$1 = state_70394;
var statearr_70448_70516 = state_70394__$1;
(statearr_70448_70516[(2)] = inst_70376);

(statearr_70448_70516[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70395 === (19))){
var inst_70293 = (state_70394[(7)]);
var inst_70297 = cljs.core.chunk_first.call(null,inst_70293);
var inst_70298 = cljs.core.chunk_rest.call(null,inst_70293);
var inst_70299 = cljs.core.count.call(null,inst_70297);
var inst_70271 = inst_70298;
var inst_70272 = inst_70297;
var inst_70273 = inst_70299;
var inst_70274 = (0);
var state_70394__$1 = (function (){var statearr_70449 = state_70394;
(statearr_70449[(13)] = inst_70273);

(statearr_70449[(14)] = inst_70271);

(statearr_70449[(15)] = inst_70274);

(statearr_70449[(16)] = inst_70272);

return statearr_70449;
})();
var statearr_70450_70517 = state_70394__$1;
(statearr_70450_70517[(2)] = null);

(statearr_70450_70517[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70395 === (11))){
var inst_70293 = (state_70394[(7)]);
var inst_70271 = (state_70394[(14)]);
var inst_70293__$1 = cljs.core.seq.call(null,inst_70271);
var state_70394__$1 = (function (){var statearr_70451 = state_70394;
(statearr_70451[(7)] = inst_70293__$1);

return statearr_70451;
})();
if(inst_70293__$1){
var statearr_70452_70518 = state_70394__$1;
(statearr_70452_70518[(1)] = (16));

} else {
var statearr_70453_70519 = state_70394__$1;
(statearr_70453_70519[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70395 === (9))){
var inst_70323 = (state_70394[(2)]);
var state_70394__$1 = state_70394;
var statearr_70454_70520 = state_70394__$1;
(statearr_70454_70520[(2)] = inst_70323);

(statearr_70454_70520[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70395 === (5))){
var inst_70269 = cljs.core.deref.call(null,cs);
var inst_70270 = cljs.core.seq.call(null,inst_70269);
var inst_70271 = inst_70270;
var inst_70272 = null;
var inst_70273 = (0);
var inst_70274 = (0);
var state_70394__$1 = (function (){var statearr_70455 = state_70394;
(statearr_70455[(13)] = inst_70273);

(statearr_70455[(14)] = inst_70271);

(statearr_70455[(15)] = inst_70274);

(statearr_70455[(16)] = inst_70272);

return statearr_70455;
})();
var statearr_70456_70521 = state_70394__$1;
(statearr_70456_70521[(2)] = null);

(statearr_70456_70521[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70395 === (14))){
var state_70394__$1 = state_70394;
var statearr_70457_70522 = state_70394__$1;
(statearr_70457_70522[(2)] = null);

(statearr_70457_70522[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70395 === (45))){
var inst_70384 = (state_70394[(2)]);
var state_70394__$1 = state_70394;
var statearr_70458_70523 = state_70394__$1;
(statearr_70458_70523[(2)] = inst_70384);

(statearr_70458_70523[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70395 === (26))){
var inst_70326 = (state_70394[(29)]);
var inst_70380 = (state_70394[(2)]);
var inst_70381 = cljs.core.seq.call(null,inst_70326);
var state_70394__$1 = (function (){var statearr_70459 = state_70394;
(statearr_70459[(31)] = inst_70380);

return statearr_70459;
})();
if(inst_70381){
var statearr_70460_70524 = state_70394__$1;
(statearr_70460_70524[(1)] = (42));

} else {
var statearr_70461_70525 = state_70394__$1;
(statearr_70461_70525[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70395 === (16))){
var inst_70293 = (state_70394[(7)]);
var inst_70295 = cljs.core.chunked_seq_QMARK_.call(null,inst_70293);
var state_70394__$1 = state_70394;
if(inst_70295){
var statearr_70462_70526 = state_70394__$1;
(statearr_70462_70526[(1)] = (19));

} else {
var statearr_70463_70527 = state_70394__$1;
(statearr_70463_70527[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70395 === (38))){
var inst_70373 = (state_70394[(2)]);
var state_70394__$1 = state_70394;
var statearr_70464_70528 = state_70394__$1;
(statearr_70464_70528[(2)] = inst_70373);

(statearr_70464_70528[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70395 === (30))){
var state_70394__$1 = state_70394;
var statearr_70465_70529 = state_70394__$1;
(statearr_70465_70529[(2)] = null);

(statearr_70465_70529[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70395 === (10))){
var inst_70274 = (state_70394[(15)]);
var inst_70272 = (state_70394[(16)]);
var inst_70282 = cljs.core._nth.call(null,inst_70272,inst_70274);
var inst_70283 = cljs.core.nth.call(null,inst_70282,(0),null);
var inst_70284 = cljs.core.nth.call(null,inst_70282,(1),null);
var state_70394__$1 = (function (){var statearr_70466 = state_70394;
(statearr_70466[(26)] = inst_70283);

return statearr_70466;
})();
if(cljs.core.truth_(inst_70284)){
var statearr_70467_70530 = state_70394__$1;
(statearr_70467_70530[(1)] = (13));

} else {
var statearr_70468_70531 = state_70394__$1;
(statearr_70468_70531[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70395 === (18))){
var inst_70319 = (state_70394[(2)]);
var state_70394__$1 = state_70394;
var statearr_70469_70532 = state_70394__$1;
(statearr_70469_70532[(2)] = inst_70319);

(statearr_70469_70532[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70395 === (42))){
var state_70394__$1 = state_70394;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_70394__$1,(45),dchan);
} else {
if((state_val_70395 === (37))){
var inst_70353 = (state_70394[(25)]);
var inst_70362 = (state_70394[(23)]);
var inst_70262 = (state_70394[(10)]);
var inst_70362__$1 = cljs.core.first.call(null,inst_70353);
var inst_70363 = cljs.core.async.put_BANG_.call(null,inst_70362__$1,inst_70262,done);
var state_70394__$1 = (function (){var statearr_70470 = state_70394;
(statearr_70470[(23)] = inst_70362__$1);

return statearr_70470;
})();
if(cljs.core.truth_(inst_70363)){
var statearr_70471_70533 = state_70394__$1;
(statearr_70471_70533[(1)] = (39));

} else {
var statearr_70472_70534 = state_70394__$1;
(statearr_70472_70534[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70395 === (8))){
var inst_70273 = (state_70394[(13)]);
var inst_70274 = (state_70394[(15)]);
var inst_70276 = (inst_70274 < inst_70273);
var inst_70277 = inst_70276;
var state_70394__$1 = state_70394;
if(cljs.core.truth_(inst_70277)){
var statearr_70473_70535 = state_70394__$1;
(statearr_70473_70535[(1)] = (10));

} else {
var statearr_70474_70536 = state_70394__$1;
(statearr_70474_70536[(1)] = (11));

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
});})(c__69114__auto___70482,cs,m,dchan,dctr,done))
;
return ((function (switch__69000__auto__,c__69114__auto___70482,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__69001__auto__ = null;
var cljs$core$async$mult_$_state_machine__69001__auto____0 = (function (){
var statearr_70478 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_70478[(0)] = cljs$core$async$mult_$_state_machine__69001__auto__);

(statearr_70478[(1)] = (1));

return statearr_70478;
});
var cljs$core$async$mult_$_state_machine__69001__auto____1 = (function (state_70394){
while(true){
var ret_value__69002__auto__ = (function (){try{while(true){
var result__69003__auto__ = switch__69000__auto__.call(null,state_70394);
if(cljs.core.keyword_identical_QMARK_.call(null,result__69003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69003__auto__;
}
break;
}
}catch (e70479){if((e70479 instanceof Object)){
var ex__69004__auto__ = e70479;
var statearr_70480_70537 = state_70394;
(statearr_70480_70537[(5)] = ex__69004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70394);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70479;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__69002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70538 = state_70394;
state_70394 = G__70538;
continue;
} else {
return ret_value__69002__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__69001__auto__ = function(state_70394){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__69001__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__69001__auto____1.call(this,state_70394);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__69001__auto____0;
cljs$core$async$mult_$_state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__69001__auto____1;
return cljs$core$async$mult_$_state_machine__69001__auto__;
})()
;})(switch__69000__auto__,c__69114__auto___70482,cs,m,dchan,dctr,done))
})();
var state__69116__auto__ = (function (){var statearr_70481 = f__69115__auto__.call(null);
(statearr_70481[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__69114__auto___70482);

return statearr_70481;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__69116__auto__);
});})(c__69114__auto___70482,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args70539 = [];
var len__62120__auto___70542 = arguments.length;
var i__62121__auto___70543 = (0);
while(true){
if((i__62121__auto___70543 < len__62120__auto___70542)){
args70539.push((arguments[i__62121__auto___70543]));

var G__70544 = (i__62121__auto___70543 + (1));
i__62121__auto___70543 = G__70544;
continue;
} else {
}
break;
}

var G__70541 = args70539.length;
switch (G__70541) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args70539.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__61617__auto__ = (((m == null))?null:m);
var m__61618__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__61617__auto__)]);
if(!((m__61618__auto__ == null))){
return m__61618__auto__.call(null,m,ch);
} else {
var m__61618__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__61618__auto____$1 == null))){
return m__61618__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__61617__auto__ = (((m == null))?null:m);
var m__61618__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__61617__auto__)]);
if(!((m__61618__auto__ == null))){
return m__61618__auto__.call(null,m,ch);
} else {
var m__61618__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__61618__auto____$1 == null))){
return m__61618__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__61617__auto__ = (((m == null))?null:m);
var m__61618__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__61617__auto__)]);
if(!((m__61618__auto__ == null))){
return m__61618__auto__.call(null,m);
} else {
var m__61618__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__61618__auto____$1 == null))){
return m__61618__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__61617__auto__ = (((m == null))?null:m);
var m__61618__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__61617__auto__)]);
if(!((m__61618__auto__ == null))){
return m__61618__auto__.call(null,m,state_map);
} else {
var m__61618__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__61618__auto____$1 == null))){
return m__61618__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__61617__auto__ = (((m == null))?null:m);
var m__61618__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__61617__auto__)]);
if(!((m__61618__auto__ == null))){
return m__61618__auto__.call(null,m,mode);
} else {
var m__61618__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__61618__auto____$1 == null))){
return m__61618__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__62127__auto__ = [];
var len__62120__auto___70556 = arguments.length;
var i__62121__auto___70557 = (0);
while(true){
if((i__62121__auto___70557 < len__62120__auto___70556)){
args__62127__auto__.push((arguments[i__62121__auto___70557]));

var G__70558 = (i__62121__auto___70557 + (1));
i__62121__auto___70557 = G__70558;
continue;
} else {
}
break;
}

var argseq__62128__auto__ = ((((3) < args__62127__auto__.length))?(new cljs.core.IndexedSeq(args__62127__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__62128__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__70550){
var map__70551 = p__70550;
var map__70551__$1 = ((((!((map__70551 == null)))?((((map__70551.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70551.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70551):map__70551);
var opts = map__70551__$1;
var statearr_70553_70559 = state;
(statearr_70553_70559[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__6738__auto__ = cljs.core.async.do_alts.call(null,((function (map__70551,map__70551__$1,opts){
return (function (val){
var statearr_70554_70560 = state;
(statearr_70554_70560[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__70551,map__70551__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__6738__auto__)){
var cb = temp__6738__auto__;
var statearr_70555_70561 = state;
(statearr_70555_70561[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq70546){
var G__70547 = cljs.core.first.call(null,seq70546);
var seq70546__$1 = cljs.core.next.call(null,seq70546);
var G__70548 = cljs.core.first.call(null,seq70546__$1);
var seq70546__$2 = cljs.core.next.call(null,seq70546__$1);
var G__70549 = cljs.core.first.call(null,seq70546__$2);
var seq70546__$3 = cljs.core.next.call(null,seq70546__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__70547,G__70548,G__70549,seq70546__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async70729 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async70729 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta70730){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta70730 = meta70730;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async70729.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_70731,meta70730__$1){
var self__ = this;
var _70731__$1 = this;
return (new cljs.core.async.t_cljs$core$async70729(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta70730__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async70729.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_70731){
var self__ = this;
var _70731__$1 = this;
return self__.meta70730;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async70729.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async70729.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async70729.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async70729.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async70729.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async70729.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async70729.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async70729.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("mode must be one of: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async70729.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta70730","meta70730",274162202,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async70729.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async70729.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async70729";

cljs.core.async.t_cljs$core$async70729.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__61556__auto__,writer__61557__auto__,opt__61558__auto__){
return cljs.core._write.call(null,writer__61557__auto__,"cljs.core.async/t_cljs$core$async70729");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async70729 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async70729(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta70730){
return (new cljs.core.async.t_cljs$core$async70729(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta70730));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async70729(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__69114__auto___70896 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__69114__auto___70896,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__69115__auto__ = (function (){var switch__69000__auto__ = ((function (c__69114__auto___70896,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_70833){
var state_val_70834 = (state_70833[(1)]);
if((state_val_70834 === (7))){
var inst_70748 = (state_70833[(2)]);
var state_70833__$1 = state_70833;
var statearr_70835_70897 = state_70833__$1;
(statearr_70835_70897[(2)] = inst_70748);

(statearr_70835_70897[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70834 === (20))){
var inst_70760 = (state_70833[(7)]);
var state_70833__$1 = state_70833;
var statearr_70836_70898 = state_70833__$1;
(statearr_70836_70898[(2)] = inst_70760);

(statearr_70836_70898[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70834 === (27))){
var state_70833__$1 = state_70833;
var statearr_70837_70899 = state_70833__$1;
(statearr_70837_70899[(2)] = null);

(statearr_70837_70899[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70834 === (1))){
var inst_70735 = (state_70833[(8)]);
var inst_70735__$1 = calc_state.call(null);
var inst_70737 = (inst_70735__$1 == null);
var inst_70738 = cljs.core.not.call(null,inst_70737);
var state_70833__$1 = (function (){var statearr_70838 = state_70833;
(statearr_70838[(8)] = inst_70735__$1);

return statearr_70838;
})();
if(inst_70738){
var statearr_70839_70900 = state_70833__$1;
(statearr_70839_70900[(1)] = (2));

} else {
var statearr_70840_70901 = state_70833__$1;
(statearr_70840_70901[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70834 === (24))){
var inst_70807 = (state_70833[(9)]);
var inst_70793 = (state_70833[(10)]);
var inst_70784 = (state_70833[(11)]);
var inst_70807__$1 = inst_70784.call(null,inst_70793);
var state_70833__$1 = (function (){var statearr_70841 = state_70833;
(statearr_70841[(9)] = inst_70807__$1);

return statearr_70841;
})();
if(cljs.core.truth_(inst_70807__$1)){
var statearr_70842_70902 = state_70833__$1;
(statearr_70842_70902[(1)] = (29));

} else {
var statearr_70843_70903 = state_70833__$1;
(statearr_70843_70903[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70834 === (4))){
var inst_70751 = (state_70833[(2)]);
var state_70833__$1 = state_70833;
if(cljs.core.truth_(inst_70751)){
var statearr_70844_70904 = state_70833__$1;
(statearr_70844_70904[(1)] = (8));

} else {
var statearr_70845_70905 = state_70833__$1;
(statearr_70845_70905[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70834 === (15))){
var inst_70778 = (state_70833[(2)]);
var state_70833__$1 = state_70833;
if(cljs.core.truth_(inst_70778)){
var statearr_70846_70906 = state_70833__$1;
(statearr_70846_70906[(1)] = (19));

} else {
var statearr_70847_70907 = state_70833__$1;
(statearr_70847_70907[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70834 === (21))){
var inst_70783 = (state_70833[(12)]);
var inst_70783__$1 = (state_70833[(2)]);
var inst_70784 = cljs.core.get.call(null,inst_70783__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_70785 = cljs.core.get.call(null,inst_70783__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_70786 = cljs.core.get.call(null,inst_70783__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_70833__$1 = (function (){var statearr_70848 = state_70833;
(statearr_70848[(12)] = inst_70783__$1);

(statearr_70848[(11)] = inst_70784);

(statearr_70848[(13)] = inst_70785);

return statearr_70848;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_70833__$1,(22),inst_70786);
} else {
if((state_val_70834 === (31))){
var inst_70815 = (state_70833[(2)]);
var state_70833__$1 = state_70833;
if(cljs.core.truth_(inst_70815)){
var statearr_70849_70908 = state_70833__$1;
(statearr_70849_70908[(1)] = (32));

} else {
var statearr_70850_70909 = state_70833__$1;
(statearr_70850_70909[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70834 === (32))){
var inst_70792 = (state_70833[(14)]);
var state_70833__$1 = state_70833;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_70833__$1,(35),out,inst_70792);
} else {
if((state_val_70834 === (33))){
var inst_70783 = (state_70833[(12)]);
var inst_70760 = inst_70783;
var state_70833__$1 = (function (){var statearr_70851 = state_70833;
(statearr_70851[(7)] = inst_70760);

return statearr_70851;
})();
var statearr_70852_70910 = state_70833__$1;
(statearr_70852_70910[(2)] = null);

(statearr_70852_70910[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70834 === (13))){
var inst_70760 = (state_70833[(7)]);
var inst_70767 = inst_70760.cljs$lang$protocol_mask$partition0$;
var inst_70768 = (inst_70767 & (64));
var inst_70769 = inst_70760.cljs$core$ISeq$;
var inst_70770 = (cljs.core.PROTOCOL_SENTINEL === inst_70769);
var inst_70771 = (inst_70768) || (inst_70770);
var state_70833__$1 = state_70833;
if(cljs.core.truth_(inst_70771)){
var statearr_70853_70911 = state_70833__$1;
(statearr_70853_70911[(1)] = (16));

} else {
var statearr_70854_70912 = state_70833__$1;
(statearr_70854_70912[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70834 === (22))){
var inst_70792 = (state_70833[(14)]);
var inst_70793 = (state_70833[(10)]);
var inst_70791 = (state_70833[(2)]);
var inst_70792__$1 = cljs.core.nth.call(null,inst_70791,(0),null);
var inst_70793__$1 = cljs.core.nth.call(null,inst_70791,(1),null);
var inst_70794 = (inst_70792__$1 == null);
var inst_70795 = cljs.core._EQ_.call(null,inst_70793__$1,change);
var inst_70796 = (inst_70794) || (inst_70795);
var state_70833__$1 = (function (){var statearr_70855 = state_70833;
(statearr_70855[(14)] = inst_70792__$1);

(statearr_70855[(10)] = inst_70793__$1);

return statearr_70855;
})();
if(cljs.core.truth_(inst_70796)){
var statearr_70856_70913 = state_70833__$1;
(statearr_70856_70913[(1)] = (23));

} else {
var statearr_70857_70914 = state_70833__$1;
(statearr_70857_70914[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70834 === (36))){
var inst_70783 = (state_70833[(12)]);
var inst_70760 = inst_70783;
var state_70833__$1 = (function (){var statearr_70858 = state_70833;
(statearr_70858[(7)] = inst_70760);

return statearr_70858;
})();
var statearr_70859_70915 = state_70833__$1;
(statearr_70859_70915[(2)] = null);

(statearr_70859_70915[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70834 === (29))){
var inst_70807 = (state_70833[(9)]);
var state_70833__$1 = state_70833;
var statearr_70860_70916 = state_70833__$1;
(statearr_70860_70916[(2)] = inst_70807);

(statearr_70860_70916[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70834 === (6))){
var state_70833__$1 = state_70833;
var statearr_70861_70917 = state_70833__$1;
(statearr_70861_70917[(2)] = false);

(statearr_70861_70917[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70834 === (28))){
var inst_70803 = (state_70833[(2)]);
var inst_70804 = calc_state.call(null);
var inst_70760 = inst_70804;
var state_70833__$1 = (function (){var statearr_70862 = state_70833;
(statearr_70862[(15)] = inst_70803);

(statearr_70862[(7)] = inst_70760);

return statearr_70862;
})();
var statearr_70863_70918 = state_70833__$1;
(statearr_70863_70918[(2)] = null);

(statearr_70863_70918[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70834 === (25))){
var inst_70829 = (state_70833[(2)]);
var state_70833__$1 = state_70833;
var statearr_70864_70919 = state_70833__$1;
(statearr_70864_70919[(2)] = inst_70829);

(statearr_70864_70919[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70834 === (34))){
var inst_70827 = (state_70833[(2)]);
var state_70833__$1 = state_70833;
var statearr_70865_70920 = state_70833__$1;
(statearr_70865_70920[(2)] = inst_70827);

(statearr_70865_70920[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70834 === (17))){
var state_70833__$1 = state_70833;
var statearr_70866_70921 = state_70833__$1;
(statearr_70866_70921[(2)] = false);

(statearr_70866_70921[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70834 === (3))){
var state_70833__$1 = state_70833;
var statearr_70867_70922 = state_70833__$1;
(statearr_70867_70922[(2)] = false);

(statearr_70867_70922[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70834 === (12))){
var inst_70831 = (state_70833[(2)]);
var state_70833__$1 = state_70833;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_70833__$1,inst_70831);
} else {
if((state_val_70834 === (2))){
var inst_70735 = (state_70833[(8)]);
var inst_70740 = inst_70735.cljs$lang$protocol_mask$partition0$;
var inst_70741 = (inst_70740 & (64));
var inst_70742 = inst_70735.cljs$core$ISeq$;
var inst_70743 = (cljs.core.PROTOCOL_SENTINEL === inst_70742);
var inst_70744 = (inst_70741) || (inst_70743);
var state_70833__$1 = state_70833;
if(cljs.core.truth_(inst_70744)){
var statearr_70868_70923 = state_70833__$1;
(statearr_70868_70923[(1)] = (5));

} else {
var statearr_70869_70924 = state_70833__$1;
(statearr_70869_70924[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70834 === (23))){
var inst_70792 = (state_70833[(14)]);
var inst_70798 = (inst_70792 == null);
var state_70833__$1 = state_70833;
if(cljs.core.truth_(inst_70798)){
var statearr_70870_70925 = state_70833__$1;
(statearr_70870_70925[(1)] = (26));

} else {
var statearr_70871_70926 = state_70833__$1;
(statearr_70871_70926[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70834 === (35))){
var inst_70818 = (state_70833[(2)]);
var state_70833__$1 = state_70833;
if(cljs.core.truth_(inst_70818)){
var statearr_70872_70927 = state_70833__$1;
(statearr_70872_70927[(1)] = (36));

} else {
var statearr_70873_70928 = state_70833__$1;
(statearr_70873_70928[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70834 === (19))){
var inst_70760 = (state_70833[(7)]);
var inst_70780 = cljs.core.apply.call(null,cljs.core.hash_map,inst_70760);
var state_70833__$1 = state_70833;
var statearr_70874_70929 = state_70833__$1;
(statearr_70874_70929[(2)] = inst_70780);

(statearr_70874_70929[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70834 === (11))){
var inst_70760 = (state_70833[(7)]);
var inst_70764 = (inst_70760 == null);
var inst_70765 = cljs.core.not.call(null,inst_70764);
var state_70833__$1 = state_70833;
if(inst_70765){
var statearr_70875_70930 = state_70833__$1;
(statearr_70875_70930[(1)] = (13));

} else {
var statearr_70876_70931 = state_70833__$1;
(statearr_70876_70931[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70834 === (9))){
var inst_70735 = (state_70833[(8)]);
var state_70833__$1 = state_70833;
var statearr_70877_70932 = state_70833__$1;
(statearr_70877_70932[(2)] = inst_70735);

(statearr_70877_70932[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70834 === (5))){
var state_70833__$1 = state_70833;
var statearr_70878_70933 = state_70833__$1;
(statearr_70878_70933[(2)] = true);

(statearr_70878_70933[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70834 === (14))){
var state_70833__$1 = state_70833;
var statearr_70879_70934 = state_70833__$1;
(statearr_70879_70934[(2)] = false);

(statearr_70879_70934[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70834 === (26))){
var inst_70793 = (state_70833[(10)]);
var inst_70800 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_70793);
var state_70833__$1 = state_70833;
var statearr_70880_70935 = state_70833__$1;
(statearr_70880_70935[(2)] = inst_70800);

(statearr_70880_70935[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70834 === (16))){
var state_70833__$1 = state_70833;
var statearr_70881_70936 = state_70833__$1;
(statearr_70881_70936[(2)] = true);

(statearr_70881_70936[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70834 === (38))){
var inst_70823 = (state_70833[(2)]);
var state_70833__$1 = state_70833;
var statearr_70882_70937 = state_70833__$1;
(statearr_70882_70937[(2)] = inst_70823);

(statearr_70882_70937[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70834 === (30))){
var inst_70793 = (state_70833[(10)]);
var inst_70784 = (state_70833[(11)]);
var inst_70785 = (state_70833[(13)]);
var inst_70810 = cljs.core.empty_QMARK_.call(null,inst_70784);
var inst_70811 = inst_70785.call(null,inst_70793);
var inst_70812 = cljs.core.not.call(null,inst_70811);
var inst_70813 = (inst_70810) && (inst_70812);
var state_70833__$1 = state_70833;
var statearr_70883_70938 = state_70833__$1;
(statearr_70883_70938[(2)] = inst_70813);

(statearr_70883_70938[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70834 === (10))){
var inst_70735 = (state_70833[(8)]);
var inst_70756 = (state_70833[(2)]);
var inst_70757 = cljs.core.get.call(null,inst_70756,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_70758 = cljs.core.get.call(null,inst_70756,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_70759 = cljs.core.get.call(null,inst_70756,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_70760 = inst_70735;
var state_70833__$1 = (function (){var statearr_70884 = state_70833;
(statearr_70884[(16)] = inst_70757);

(statearr_70884[(17)] = inst_70759);

(statearr_70884[(7)] = inst_70760);

(statearr_70884[(18)] = inst_70758);

return statearr_70884;
})();
var statearr_70885_70939 = state_70833__$1;
(statearr_70885_70939[(2)] = null);

(statearr_70885_70939[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70834 === (18))){
var inst_70775 = (state_70833[(2)]);
var state_70833__$1 = state_70833;
var statearr_70886_70940 = state_70833__$1;
(statearr_70886_70940[(2)] = inst_70775);

(statearr_70886_70940[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70834 === (37))){
var state_70833__$1 = state_70833;
var statearr_70887_70941 = state_70833__$1;
(statearr_70887_70941[(2)] = null);

(statearr_70887_70941[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70834 === (8))){
var inst_70735 = (state_70833[(8)]);
var inst_70753 = cljs.core.apply.call(null,cljs.core.hash_map,inst_70735);
var state_70833__$1 = state_70833;
var statearr_70888_70942 = state_70833__$1;
(statearr_70888_70942[(2)] = inst_70753);

(statearr_70888_70942[(1)] = (10));


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
});})(c__69114__auto___70896,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__69000__auto__,c__69114__auto___70896,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__69001__auto__ = null;
var cljs$core$async$mix_$_state_machine__69001__auto____0 = (function (){
var statearr_70892 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_70892[(0)] = cljs$core$async$mix_$_state_machine__69001__auto__);

(statearr_70892[(1)] = (1));

return statearr_70892;
});
var cljs$core$async$mix_$_state_machine__69001__auto____1 = (function (state_70833){
while(true){
var ret_value__69002__auto__ = (function (){try{while(true){
var result__69003__auto__ = switch__69000__auto__.call(null,state_70833);
if(cljs.core.keyword_identical_QMARK_.call(null,result__69003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69003__auto__;
}
break;
}
}catch (e70893){if((e70893 instanceof Object)){
var ex__69004__auto__ = e70893;
var statearr_70894_70943 = state_70833;
(statearr_70894_70943[(5)] = ex__69004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70833);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70893;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__69002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70944 = state_70833;
state_70833 = G__70944;
continue;
} else {
return ret_value__69002__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__69001__auto__ = function(state_70833){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__69001__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__69001__auto____1.call(this,state_70833);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__69001__auto____0;
cljs$core$async$mix_$_state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__69001__auto____1;
return cljs$core$async$mix_$_state_machine__69001__auto__;
})()
;})(switch__69000__auto__,c__69114__auto___70896,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__69116__auto__ = (function (){var statearr_70895 = f__69115__auto__.call(null);
(statearr_70895[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__69114__auto___70896);

return statearr_70895;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__69116__auto__);
});})(c__69114__auto___70896,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__61617__auto__ = (((p == null))?null:p);
var m__61618__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__61617__auto__)]);
if(!((m__61618__auto__ == null))){
return m__61618__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__61618__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__61618__auto____$1 == null))){
return m__61618__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__61617__auto__ = (((p == null))?null:p);
var m__61618__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__61617__auto__)]);
if(!((m__61618__auto__ == null))){
return m__61618__auto__.call(null,p,v,ch);
} else {
var m__61618__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__61618__auto____$1 == null))){
return m__61618__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args70945 = [];
var len__62120__auto___70948 = arguments.length;
var i__62121__auto___70949 = (0);
while(true){
if((i__62121__auto___70949 < len__62120__auto___70948)){
args70945.push((arguments[i__62121__auto___70949]));

var G__70950 = (i__62121__auto___70949 + (1));
i__62121__auto___70949 = G__70950;
continue;
} else {
}
break;
}

var G__70947 = args70945.length;
switch (G__70947) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args70945.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__61617__auto__ = (((p == null))?null:p);
var m__61618__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__61617__auto__)]);
if(!((m__61618__auto__ == null))){
return m__61618__auto__.call(null,p);
} else {
var m__61618__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__61618__auto____$1 == null))){
return m__61618__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__61617__auto__ = (((p == null))?null:p);
var m__61618__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__61617__auto__)]);
if(!((m__61618__auto__ == null))){
return m__61618__auto__.call(null,p,v);
} else {
var m__61618__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__61618__auto____$1 == null))){
return m__61618__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args70953 = [];
var len__62120__auto___71078 = arguments.length;
var i__62121__auto___71079 = (0);
while(true){
if((i__62121__auto___71079 < len__62120__auto___71078)){
args70953.push((arguments[i__62121__auto___71079]));

var G__71080 = (i__62121__auto___71079 + (1));
i__62121__auto___71079 = G__71080;
continue;
} else {
}
break;
}

var G__70955 = args70953.length;
switch (G__70955) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args70953.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__60899__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__60899__auto__)){
return or__60899__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__60899__auto__,mults){
return (function (p1__70952_SHARP_){
if(cljs.core.truth_(p1__70952_SHARP_.call(null,topic))){
return p1__70952_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__70952_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__60899__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async70956 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async70956 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta70957){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta70957 = meta70957;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async70956.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_70958,meta70957__$1){
var self__ = this;
var _70958__$1 = this;
return (new cljs.core.async.t_cljs$core$async70956(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta70957__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async70956.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_70958){
var self__ = this;
var _70958__$1 = this;
return self__.meta70957;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async70956.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async70956.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async70956.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async70956.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async70956.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__6738__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__6738__auto__)){
var m = temp__6738__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async70956.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async70956.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async70956.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta70957","meta70957",1997043853,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async70956.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async70956.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async70956";

cljs.core.async.t_cljs$core$async70956.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__61556__auto__,writer__61557__auto__,opt__61558__auto__){
return cljs.core._write.call(null,writer__61557__auto__,"cljs.core.async/t_cljs$core$async70956");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async70956 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async70956(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta70957){
return (new cljs.core.async.t_cljs$core$async70956(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta70957));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async70956(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__69114__auto___71082 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__69114__auto___71082,mults,ensure_mult,p){
return (function (){
var f__69115__auto__ = (function (){var switch__69000__auto__ = ((function (c__69114__auto___71082,mults,ensure_mult,p){
return (function (state_71030){
var state_val_71031 = (state_71030[(1)]);
if((state_val_71031 === (7))){
var inst_71026 = (state_71030[(2)]);
var state_71030__$1 = state_71030;
var statearr_71032_71083 = state_71030__$1;
(statearr_71032_71083[(2)] = inst_71026);

(statearr_71032_71083[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71031 === (20))){
var state_71030__$1 = state_71030;
var statearr_71033_71084 = state_71030__$1;
(statearr_71033_71084[(2)] = null);

(statearr_71033_71084[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71031 === (1))){
var state_71030__$1 = state_71030;
var statearr_71034_71085 = state_71030__$1;
(statearr_71034_71085[(2)] = null);

(statearr_71034_71085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71031 === (24))){
var inst_71009 = (state_71030[(7)]);
var inst_71018 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_71009);
var state_71030__$1 = state_71030;
var statearr_71035_71086 = state_71030__$1;
(statearr_71035_71086[(2)] = inst_71018);

(statearr_71035_71086[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71031 === (4))){
var inst_70961 = (state_71030[(8)]);
var inst_70961__$1 = (state_71030[(2)]);
var inst_70962 = (inst_70961__$1 == null);
var state_71030__$1 = (function (){var statearr_71036 = state_71030;
(statearr_71036[(8)] = inst_70961__$1);

return statearr_71036;
})();
if(cljs.core.truth_(inst_70962)){
var statearr_71037_71087 = state_71030__$1;
(statearr_71037_71087[(1)] = (5));

} else {
var statearr_71038_71088 = state_71030__$1;
(statearr_71038_71088[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71031 === (15))){
var inst_71003 = (state_71030[(2)]);
var state_71030__$1 = state_71030;
var statearr_71039_71089 = state_71030__$1;
(statearr_71039_71089[(2)] = inst_71003);

(statearr_71039_71089[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71031 === (21))){
var inst_71023 = (state_71030[(2)]);
var state_71030__$1 = (function (){var statearr_71040 = state_71030;
(statearr_71040[(9)] = inst_71023);

return statearr_71040;
})();
var statearr_71041_71090 = state_71030__$1;
(statearr_71041_71090[(2)] = null);

(statearr_71041_71090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71031 === (13))){
var inst_70985 = (state_71030[(10)]);
var inst_70987 = cljs.core.chunked_seq_QMARK_.call(null,inst_70985);
var state_71030__$1 = state_71030;
if(inst_70987){
var statearr_71042_71091 = state_71030__$1;
(statearr_71042_71091[(1)] = (16));

} else {
var statearr_71043_71092 = state_71030__$1;
(statearr_71043_71092[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71031 === (22))){
var inst_71015 = (state_71030[(2)]);
var state_71030__$1 = state_71030;
if(cljs.core.truth_(inst_71015)){
var statearr_71044_71093 = state_71030__$1;
(statearr_71044_71093[(1)] = (23));

} else {
var statearr_71045_71094 = state_71030__$1;
(statearr_71045_71094[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71031 === (6))){
var inst_71011 = (state_71030[(11)]);
var inst_70961 = (state_71030[(8)]);
var inst_71009 = (state_71030[(7)]);
var inst_71009__$1 = topic_fn.call(null,inst_70961);
var inst_71010 = cljs.core.deref.call(null,mults);
var inst_71011__$1 = cljs.core.get.call(null,inst_71010,inst_71009__$1);
var state_71030__$1 = (function (){var statearr_71046 = state_71030;
(statearr_71046[(11)] = inst_71011__$1);

(statearr_71046[(7)] = inst_71009__$1);

return statearr_71046;
})();
if(cljs.core.truth_(inst_71011__$1)){
var statearr_71047_71095 = state_71030__$1;
(statearr_71047_71095[(1)] = (19));

} else {
var statearr_71048_71096 = state_71030__$1;
(statearr_71048_71096[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71031 === (25))){
var inst_71020 = (state_71030[(2)]);
var state_71030__$1 = state_71030;
var statearr_71049_71097 = state_71030__$1;
(statearr_71049_71097[(2)] = inst_71020);

(statearr_71049_71097[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71031 === (17))){
var inst_70985 = (state_71030[(10)]);
var inst_70994 = cljs.core.first.call(null,inst_70985);
var inst_70995 = cljs.core.async.muxch_STAR_.call(null,inst_70994);
var inst_70996 = cljs.core.async.close_BANG_.call(null,inst_70995);
var inst_70997 = cljs.core.next.call(null,inst_70985);
var inst_70971 = inst_70997;
var inst_70972 = null;
var inst_70973 = (0);
var inst_70974 = (0);
var state_71030__$1 = (function (){var statearr_71050 = state_71030;
(statearr_71050[(12)] = inst_70996);

(statearr_71050[(13)] = inst_70972);

(statearr_71050[(14)] = inst_70971);

(statearr_71050[(15)] = inst_70974);

(statearr_71050[(16)] = inst_70973);

return statearr_71050;
})();
var statearr_71051_71098 = state_71030__$1;
(statearr_71051_71098[(2)] = null);

(statearr_71051_71098[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71031 === (3))){
var inst_71028 = (state_71030[(2)]);
var state_71030__$1 = state_71030;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71030__$1,inst_71028);
} else {
if((state_val_71031 === (12))){
var inst_71005 = (state_71030[(2)]);
var state_71030__$1 = state_71030;
var statearr_71052_71099 = state_71030__$1;
(statearr_71052_71099[(2)] = inst_71005);

(statearr_71052_71099[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71031 === (2))){
var state_71030__$1 = state_71030;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71030__$1,(4),ch);
} else {
if((state_val_71031 === (23))){
var state_71030__$1 = state_71030;
var statearr_71053_71100 = state_71030__$1;
(statearr_71053_71100[(2)] = null);

(statearr_71053_71100[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71031 === (19))){
var inst_71011 = (state_71030[(11)]);
var inst_70961 = (state_71030[(8)]);
var inst_71013 = cljs.core.async.muxch_STAR_.call(null,inst_71011);
var state_71030__$1 = state_71030;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_71030__$1,(22),inst_71013,inst_70961);
} else {
if((state_val_71031 === (11))){
var inst_70971 = (state_71030[(14)]);
var inst_70985 = (state_71030[(10)]);
var inst_70985__$1 = cljs.core.seq.call(null,inst_70971);
var state_71030__$1 = (function (){var statearr_71054 = state_71030;
(statearr_71054[(10)] = inst_70985__$1);

return statearr_71054;
})();
if(inst_70985__$1){
var statearr_71055_71101 = state_71030__$1;
(statearr_71055_71101[(1)] = (13));

} else {
var statearr_71056_71102 = state_71030__$1;
(statearr_71056_71102[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71031 === (9))){
var inst_71007 = (state_71030[(2)]);
var state_71030__$1 = state_71030;
var statearr_71057_71103 = state_71030__$1;
(statearr_71057_71103[(2)] = inst_71007);

(statearr_71057_71103[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71031 === (5))){
var inst_70968 = cljs.core.deref.call(null,mults);
var inst_70969 = cljs.core.vals.call(null,inst_70968);
var inst_70970 = cljs.core.seq.call(null,inst_70969);
var inst_70971 = inst_70970;
var inst_70972 = null;
var inst_70973 = (0);
var inst_70974 = (0);
var state_71030__$1 = (function (){var statearr_71058 = state_71030;
(statearr_71058[(13)] = inst_70972);

(statearr_71058[(14)] = inst_70971);

(statearr_71058[(15)] = inst_70974);

(statearr_71058[(16)] = inst_70973);

return statearr_71058;
})();
var statearr_71059_71104 = state_71030__$1;
(statearr_71059_71104[(2)] = null);

(statearr_71059_71104[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71031 === (14))){
var state_71030__$1 = state_71030;
var statearr_71063_71105 = state_71030__$1;
(statearr_71063_71105[(2)] = null);

(statearr_71063_71105[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71031 === (16))){
var inst_70985 = (state_71030[(10)]);
var inst_70989 = cljs.core.chunk_first.call(null,inst_70985);
var inst_70990 = cljs.core.chunk_rest.call(null,inst_70985);
var inst_70991 = cljs.core.count.call(null,inst_70989);
var inst_70971 = inst_70990;
var inst_70972 = inst_70989;
var inst_70973 = inst_70991;
var inst_70974 = (0);
var state_71030__$1 = (function (){var statearr_71064 = state_71030;
(statearr_71064[(13)] = inst_70972);

(statearr_71064[(14)] = inst_70971);

(statearr_71064[(15)] = inst_70974);

(statearr_71064[(16)] = inst_70973);

return statearr_71064;
})();
var statearr_71065_71106 = state_71030__$1;
(statearr_71065_71106[(2)] = null);

(statearr_71065_71106[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71031 === (10))){
var inst_70972 = (state_71030[(13)]);
var inst_70971 = (state_71030[(14)]);
var inst_70974 = (state_71030[(15)]);
var inst_70973 = (state_71030[(16)]);
var inst_70979 = cljs.core._nth.call(null,inst_70972,inst_70974);
var inst_70980 = cljs.core.async.muxch_STAR_.call(null,inst_70979);
var inst_70981 = cljs.core.async.close_BANG_.call(null,inst_70980);
var inst_70982 = (inst_70974 + (1));
var tmp71060 = inst_70972;
var tmp71061 = inst_70971;
var tmp71062 = inst_70973;
var inst_70971__$1 = tmp71061;
var inst_70972__$1 = tmp71060;
var inst_70973__$1 = tmp71062;
var inst_70974__$1 = inst_70982;
var state_71030__$1 = (function (){var statearr_71066 = state_71030;
(statearr_71066[(13)] = inst_70972__$1);

(statearr_71066[(14)] = inst_70971__$1);

(statearr_71066[(15)] = inst_70974__$1);

(statearr_71066[(17)] = inst_70981);

(statearr_71066[(16)] = inst_70973__$1);

return statearr_71066;
})();
var statearr_71067_71107 = state_71030__$1;
(statearr_71067_71107[(2)] = null);

(statearr_71067_71107[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71031 === (18))){
var inst_71000 = (state_71030[(2)]);
var state_71030__$1 = state_71030;
var statearr_71068_71108 = state_71030__$1;
(statearr_71068_71108[(2)] = inst_71000);

(statearr_71068_71108[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71031 === (8))){
var inst_70974 = (state_71030[(15)]);
var inst_70973 = (state_71030[(16)]);
var inst_70976 = (inst_70974 < inst_70973);
var inst_70977 = inst_70976;
var state_71030__$1 = state_71030;
if(cljs.core.truth_(inst_70977)){
var statearr_71069_71109 = state_71030__$1;
(statearr_71069_71109[(1)] = (10));

} else {
var statearr_71070_71110 = state_71030__$1;
(statearr_71070_71110[(1)] = (11));

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
}
}
});})(c__69114__auto___71082,mults,ensure_mult,p))
;
return ((function (switch__69000__auto__,c__69114__auto___71082,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__69001__auto__ = null;
var cljs$core$async$state_machine__69001__auto____0 = (function (){
var statearr_71074 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71074[(0)] = cljs$core$async$state_machine__69001__auto__);

(statearr_71074[(1)] = (1));

return statearr_71074;
});
var cljs$core$async$state_machine__69001__auto____1 = (function (state_71030){
while(true){
var ret_value__69002__auto__ = (function (){try{while(true){
var result__69003__auto__ = switch__69000__auto__.call(null,state_71030);
if(cljs.core.keyword_identical_QMARK_.call(null,result__69003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69003__auto__;
}
break;
}
}catch (e71075){if((e71075 instanceof Object)){
var ex__69004__auto__ = e71075;
var statearr_71076_71111 = state_71030;
(statearr_71076_71111[(5)] = ex__69004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71030);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71075;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__69002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71112 = state_71030;
state_71030 = G__71112;
continue;
} else {
return ret_value__69002__auto__;
}
break;
}
});
cljs$core$async$state_machine__69001__auto__ = function(state_71030){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__69001__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__69001__auto____1.call(this,state_71030);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__69001__auto____0;
cljs$core$async$state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__69001__auto____1;
return cljs$core$async$state_machine__69001__auto__;
})()
;})(switch__69000__auto__,c__69114__auto___71082,mults,ensure_mult,p))
})();
var state__69116__auto__ = (function (){var statearr_71077 = f__69115__auto__.call(null);
(statearr_71077[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__69114__auto___71082);

return statearr_71077;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__69116__auto__);
});})(c__69114__auto___71082,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args71113 = [];
var len__62120__auto___71116 = arguments.length;
var i__62121__auto___71117 = (0);
while(true){
if((i__62121__auto___71117 < len__62120__auto___71116)){
args71113.push((arguments[i__62121__auto___71117]));

var G__71118 = (i__62121__auto___71117 + (1));
i__62121__auto___71117 = G__71118;
continue;
} else {
}
break;
}

var G__71115 = args71113.length;
switch (G__71115) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args71113.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args71120 = [];
var len__62120__auto___71123 = arguments.length;
var i__62121__auto___71124 = (0);
while(true){
if((i__62121__auto___71124 < len__62120__auto___71123)){
args71120.push((arguments[i__62121__auto___71124]));

var G__71125 = (i__62121__auto___71124 + (1));
i__62121__auto___71124 = G__71125;
continue;
} else {
}
break;
}

var G__71122 = args71120.length;
switch (G__71122) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args71120.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args71127 = [];
var len__62120__auto___71198 = arguments.length;
var i__62121__auto___71199 = (0);
while(true){
if((i__62121__auto___71199 < len__62120__auto___71198)){
args71127.push((arguments[i__62121__auto___71199]));

var G__71200 = (i__62121__auto___71199 + (1));
i__62121__auto___71199 = G__71200;
continue;
} else {
}
break;
}

var G__71129 = args71127.length;
switch (G__71129) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args71127.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__69114__auto___71202 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__69114__auto___71202,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__69115__auto__ = (function (){var switch__69000__auto__ = ((function (c__69114__auto___71202,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_71168){
var state_val_71169 = (state_71168[(1)]);
if((state_val_71169 === (7))){
var state_71168__$1 = state_71168;
var statearr_71170_71203 = state_71168__$1;
(statearr_71170_71203[(2)] = null);

(statearr_71170_71203[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71169 === (1))){
var state_71168__$1 = state_71168;
var statearr_71171_71204 = state_71168__$1;
(statearr_71171_71204[(2)] = null);

(statearr_71171_71204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71169 === (4))){
var inst_71132 = (state_71168[(7)]);
var inst_71134 = (inst_71132 < cnt);
var state_71168__$1 = state_71168;
if(cljs.core.truth_(inst_71134)){
var statearr_71172_71205 = state_71168__$1;
(statearr_71172_71205[(1)] = (6));

} else {
var statearr_71173_71206 = state_71168__$1;
(statearr_71173_71206[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71169 === (15))){
var inst_71164 = (state_71168[(2)]);
var state_71168__$1 = state_71168;
var statearr_71174_71207 = state_71168__$1;
(statearr_71174_71207[(2)] = inst_71164);

(statearr_71174_71207[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71169 === (13))){
var inst_71157 = cljs.core.async.close_BANG_.call(null,out);
var state_71168__$1 = state_71168;
var statearr_71175_71208 = state_71168__$1;
(statearr_71175_71208[(2)] = inst_71157);

(statearr_71175_71208[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71169 === (6))){
var state_71168__$1 = state_71168;
var statearr_71176_71209 = state_71168__$1;
(statearr_71176_71209[(2)] = null);

(statearr_71176_71209[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71169 === (3))){
var inst_71166 = (state_71168[(2)]);
var state_71168__$1 = state_71168;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71168__$1,inst_71166);
} else {
if((state_val_71169 === (12))){
var inst_71154 = (state_71168[(8)]);
var inst_71154__$1 = (state_71168[(2)]);
var inst_71155 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_71154__$1);
var state_71168__$1 = (function (){var statearr_71177 = state_71168;
(statearr_71177[(8)] = inst_71154__$1);

return statearr_71177;
})();
if(cljs.core.truth_(inst_71155)){
var statearr_71178_71210 = state_71168__$1;
(statearr_71178_71210[(1)] = (13));

} else {
var statearr_71179_71211 = state_71168__$1;
(statearr_71179_71211[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71169 === (2))){
var inst_71131 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_71132 = (0);
var state_71168__$1 = (function (){var statearr_71180 = state_71168;
(statearr_71180[(7)] = inst_71132);

(statearr_71180[(9)] = inst_71131);

return statearr_71180;
})();
var statearr_71181_71212 = state_71168__$1;
(statearr_71181_71212[(2)] = null);

(statearr_71181_71212[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71169 === (11))){
var inst_71132 = (state_71168[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_71168,(10),Object,null,(9));
var inst_71141 = chs__$1.call(null,inst_71132);
var inst_71142 = done.call(null,inst_71132);
var inst_71143 = cljs.core.async.take_BANG_.call(null,inst_71141,inst_71142);
var state_71168__$1 = state_71168;
var statearr_71182_71213 = state_71168__$1;
(statearr_71182_71213[(2)] = inst_71143);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71168__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71169 === (9))){
var inst_71132 = (state_71168[(7)]);
var inst_71145 = (state_71168[(2)]);
var inst_71146 = (inst_71132 + (1));
var inst_71132__$1 = inst_71146;
var state_71168__$1 = (function (){var statearr_71183 = state_71168;
(statearr_71183[(7)] = inst_71132__$1);

(statearr_71183[(10)] = inst_71145);

return statearr_71183;
})();
var statearr_71184_71214 = state_71168__$1;
(statearr_71184_71214[(2)] = null);

(statearr_71184_71214[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71169 === (5))){
var inst_71152 = (state_71168[(2)]);
var state_71168__$1 = (function (){var statearr_71185 = state_71168;
(statearr_71185[(11)] = inst_71152);

return statearr_71185;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71168__$1,(12),dchan);
} else {
if((state_val_71169 === (14))){
var inst_71154 = (state_71168[(8)]);
var inst_71159 = cljs.core.apply.call(null,f,inst_71154);
var state_71168__$1 = state_71168;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_71168__$1,(16),out,inst_71159);
} else {
if((state_val_71169 === (16))){
var inst_71161 = (state_71168[(2)]);
var state_71168__$1 = (function (){var statearr_71186 = state_71168;
(statearr_71186[(12)] = inst_71161);

return statearr_71186;
})();
var statearr_71187_71215 = state_71168__$1;
(statearr_71187_71215[(2)] = null);

(statearr_71187_71215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71169 === (10))){
var inst_71136 = (state_71168[(2)]);
var inst_71137 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_71168__$1 = (function (){var statearr_71188 = state_71168;
(statearr_71188[(13)] = inst_71136);

return statearr_71188;
})();
var statearr_71189_71216 = state_71168__$1;
(statearr_71189_71216[(2)] = inst_71137);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71168__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71169 === (8))){
var inst_71150 = (state_71168[(2)]);
var state_71168__$1 = state_71168;
var statearr_71190_71217 = state_71168__$1;
(statearr_71190_71217[(2)] = inst_71150);

(statearr_71190_71217[(1)] = (5));


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
});})(c__69114__auto___71202,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__69000__auto__,c__69114__auto___71202,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__69001__auto__ = null;
var cljs$core$async$state_machine__69001__auto____0 = (function (){
var statearr_71194 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71194[(0)] = cljs$core$async$state_machine__69001__auto__);

(statearr_71194[(1)] = (1));

return statearr_71194;
});
var cljs$core$async$state_machine__69001__auto____1 = (function (state_71168){
while(true){
var ret_value__69002__auto__ = (function (){try{while(true){
var result__69003__auto__ = switch__69000__auto__.call(null,state_71168);
if(cljs.core.keyword_identical_QMARK_.call(null,result__69003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69003__auto__;
}
break;
}
}catch (e71195){if((e71195 instanceof Object)){
var ex__69004__auto__ = e71195;
var statearr_71196_71218 = state_71168;
(statearr_71196_71218[(5)] = ex__69004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71168);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71195;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__69002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71219 = state_71168;
state_71168 = G__71219;
continue;
} else {
return ret_value__69002__auto__;
}
break;
}
});
cljs$core$async$state_machine__69001__auto__ = function(state_71168){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__69001__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__69001__auto____1.call(this,state_71168);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__69001__auto____0;
cljs$core$async$state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__69001__auto____1;
return cljs$core$async$state_machine__69001__auto__;
})()
;})(switch__69000__auto__,c__69114__auto___71202,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__69116__auto__ = (function (){var statearr_71197 = f__69115__auto__.call(null);
(statearr_71197[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__69114__auto___71202);

return statearr_71197;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__69116__auto__);
});})(c__69114__auto___71202,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args71221 = [];
var len__62120__auto___71279 = arguments.length;
var i__62121__auto___71280 = (0);
while(true){
if((i__62121__auto___71280 < len__62120__auto___71279)){
args71221.push((arguments[i__62121__auto___71280]));

var G__71281 = (i__62121__auto___71280 + (1));
i__62121__auto___71280 = G__71281;
continue;
} else {
}
break;
}

var G__71223 = args71221.length;
switch (G__71223) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args71221.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__69114__auto___71283 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__69114__auto___71283,out){
return (function (){
var f__69115__auto__ = (function (){var switch__69000__auto__ = ((function (c__69114__auto___71283,out){
return (function (state_71255){
var state_val_71256 = (state_71255[(1)]);
if((state_val_71256 === (7))){
var inst_71235 = (state_71255[(7)]);
var inst_71234 = (state_71255[(8)]);
var inst_71234__$1 = (state_71255[(2)]);
var inst_71235__$1 = cljs.core.nth.call(null,inst_71234__$1,(0),null);
var inst_71236 = cljs.core.nth.call(null,inst_71234__$1,(1),null);
var inst_71237 = (inst_71235__$1 == null);
var state_71255__$1 = (function (){var statearr_71257 = state_71255;
(statearr_71257[(7)] = inst_71235__$1);

(statearr_71257[(9)] = inst_71236);

(statearr_71257[(8)] = inst_71234__$1);

return statearr_71257;
})();
if(cljs.core.truth_(inst_71237)){
var statearr_71258_71284 = state_71255__$1;
(statearr_71258_71284[(1)] = (8));

} else {
var statearr_71259_71285 = state_71255__$1;
(statearr_71259_71285[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71256 === (1))){
var inst_71224 = cljs.core.vec.call(null,chs);
var inst_71225 = inst_71224;
var state_71255__$1 = (function (){var statearr_71260 = state_71255;
(statearr_71260[(10)] = inst_71225);

return statearr_71260;
})();
var statearr_71261_71286 = state_71255__$1;
(statearr_71261_71286[(2)] = null);

(statearr_71261_71286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71256 === (4))){
var inst_71225 = (state_71255[(10)]);
var state_71255__$1 = state_71255;
return cljs.core.async.ioc_alts_BANG_.call(null,state_71255__$1,(7),inst_71225);
} else {
if((state_val_71256 === (6))){
var inst_71251 = (state_71255[(2)]);
var state_71255__$1 = state_71255;
var statearr_71262_71287 = state_71255__$1;
(statearr_71262_71287[(2)] = inst_71251);

(statearr_71262_71287[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71256 === (3))){
var inst_71253 = (state_71255[(2)]);
var state_71255__$1 = state_71255;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71255__$1,inst_71253);
} else {
if((state_val_71256 === (2))){
var inst_71225 = (state_71255[(10)]);
var inst_71227 = cljs.core.count.call(null,inst_71225);
var inst_71228 = (inst_71227 > (0));
var state_71255__$1 = state_71255;
if(cljs.core.truth_(inst_71228)){
var statearr_71264_71288 = state_71255__$1;
(statearr_71264_71288[(1)] = (4));

} else {
var statearr_71265_71289 = state_71255__$1;
(statearr_71265_71289[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71256 === (11))){
var inst_71225 = (state_71255[(10)]);
var inst_71244 = (state_71255[(2)]);
var tmp71263 = inst_71225;
var inst_71225__$1 = tmp71263;
var state_71255__$1 = (function (){var statearr_71266 = state_71255;
(statearr_71266[(11)] = inst_71244);

(statearr_71266[(10)] = inst_71225__$1);

return statearr_71266;
})();
var statearr_71267_71290 = state_71255__$1;
(statearr_71267_71290[(2)] = null);

(statearr_71267_71290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71256 === (9))){
var inst_71235 = (state_71255[(7)]);
var state_71255__$1 = state_71255;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_71255__$1,(11),out,inst_71235);
} else {
if((state_val_71256 === (5))){
var inst_71249 = cljs.core.async.close_BANG_.call(null,out);
var state_71255__$1 = state_71255;
var statearr_71268_71291 = state_71255__$1;
(statearr_71268_71291[(2)] = inst_71249);

(statearr_71268_71291[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71256 === (10))){
var inst_71247 = (state_71255[(2)]);
var state_71255__$1 = state_71255;
var statearr_71269_71292 = state_71255__$1;
(statearr_71269_71292[(2)] = inst_71247);

(statearr_71269_71292[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71256 === (8))){
var inst_71235 = (state_71255[(7)]);
var inst_71236 = (state_71255[(9)]);
var inst_71234 = (state_71255[(8)]);
var inst_71225 = (state_71255[(10)]);
var inst_71239 = (function (){var cs = inst_71225;
var vec__71230 = inst_71234;
var v = inst_71235;
var c = inst_71236;
return ((function (cs,vec__71230,v,c,inst_71235,inst_71236,inst_71234,inst_71225,state_val_71256,c__69114__auto___71283,out){
return (function (p1__71220_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__71220_SHARP_);
});
;})(cs,vec__71230,v,c,inst_71235,inst_71236,inst_71234,inst_71225,state_val_71256,c__69114__auto___71283,out))
})();
var inst_71240 = cljs.core.filterv.call(null,inst_71239,inst_71225);
var inst_71225__$1 = inst_71240;
var state_71255__$1 = (function (){var statearr_71270 = state_71255;
(statearr_71270[(10)] = inst_71225__$1);

return statearr_71270;
})();
var statearr_71271_71293 = state_71255__$1;
(statearr_71271_71293[(2)] = null);

(statearr_71271_71293[(1)] = (2));


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
});})(c__69114__auto___71283,out))
;
return ((function (switch__69000__auto__,c__69114__auto___71283,out){
return (function() {
var cljs$core$async$state_machine__69001__auto__ = null;
var cljs$core$async$state_machine__69001__auto____0 = (function (){
var statearr_71275 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71275[(0)] = cljs$core$async$state_machine__69001__auto__);

(statearr_71275[(1)] = (1));

return statearr_71275;
});
var cljs$core$async$state_machine__69001__auto____1 = (function (state_71255){
while(true){
var ret_value__69002__auto__ = (function (){try{while(true){
var result__69003__auto__ = switch__69000__auto__.call(null,state_71255);
if(cljs.core.keyword_identical_QMARK_.call(null,result__69003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69003__auto__;
}
break;
}
}catch (e71276){if((e71276 instanceof Object)){
var ex__69004__auto__ = e71276;
var statearr_71277_71294 = state_71255;
(statearr_71277_71294[(5)] = ex__69004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71255);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71276;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__69002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71295 = state_71255;
state_71255 = G__71295;
continue;
} else {
return ret_value__69002__auto__;
}
break;
}
});
cljs$core$async$state_machine__69001__auto__ = function(state_71255){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__69001__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__69001__auto____1.call(this,state_71255);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__69001__auto____0;
cljs$core$async$state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__69001__auto____1;
return cljs$core$async$state_machine__69001__auto__;
})()
;})(switch__69000__auto__,c__69114__auto___71283,out))
})();
var state__69116__auto__ = (function (){var statearr_71278 = f__69115__auto__.call(null);
(statearr_71278[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__69114__auto___71283);

return statearr_71278;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__69116__auto__);
});})(c__69114__auto___71283,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args71296 = [];
var len__62120__auto___71345 = arguments.length;
var i__62121__auto___71346 = (0);
while(true){
if((i__62121__auto___71346 < len__62120__auto___71345)){
args71296.push((arguments[i__62121__auto___71346]));

var G__71347 = (i__62121__auto___71346 + (1));
i__62121__auto___71346 = G__71347;
continue;
} else {
}
break;
}

var G__71298 = args71296.length;
switch (G__71298) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args71296.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__69114__auto___71349 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__69114__auto___71349,out){
return (function (){
var f__69115__auto__ = (function (){var switch__69000__auto__ = ((function (c__69114__auto___71349,out){
return (function (state_71322){
var state_val_71323 = (state_71322[(1)]);
if((state_val_71323 === (7))){
var inst_71304 = (state_71322[(7)]);
var inst_71304__$1 = (state_71322[(2)]);
var inst_71305 = (inst_71304__$1 == null);
var inst_71306 = cljs.core.not.call(null,inst_71305);
var state_71322__$1 = (function (){var statearr_71324 = state_71322;
(statearr_71324[(7)] = inst_71304__$1);

return statearr_71324;
})();
if(inst_71306){
var statearr_71325_71350 = state_71322__$1;
(statearr_71325_71350[(1)] = (8));

} else {
var statearr_71326_71351 = state_71322__$1;
(statearr_71326_71351[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71323 === (1))){
var inst_71299 = (0);
var state_71322__$1 = (function (){var statearr_71327 = state_71322;
(statearr_71327[(8)] = inst_71299);

return statearr_71327;
})();
var statearr_71328_71352 = state_71322__$1;
(statearr_71328_71352[(2)] = null);

(statearr_71328_71352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71323 === (4))){
var state_71322__$1 = state_71322;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71322__$1,(7),ch);
} else {
if((state_val_71323 === (6))){
var inst_71317 = (state_71322[(2)]);
var state_71322__$1 = state_71322;
var statearr_71329_71353 = state_71322__$1;
(statearr_71329_71353[(2)] = inst_71317);

(statearr_71329_71353[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71323 === (3))){
var inst_71319 = (state_71322[(2)]);
var inst_71320 = cljs.core.async.close_BANG_.call(null,out);
var state_71322__$1 = (function (){var statearr_71330 = state_71322;
(statearr_71330[(9)] = inst_71319);

return statearr_71330;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71322__$1,inst_71320);
} else {
if((state_val_71323 === (2))){
var inst_71299 = (state_71322[(8)]);
var inst_71301 = (inst_71299 < n);
var state_71322__$1 = state_71322;
if(cljs.core.truth_(inst_71301)){
var statearr_71331_71354 = state_71322__$1;
(statearr_71331_71354[(1)] = (4));

} else {
var statearr_71332_71355 = state_71322__$1;
(statearr_71332_71355[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71323 === (11))){
var inst_71299 = (state_71322[(8)]);
var inst_71309 = (state_71322[(2)]);
var inst_71310 = (inst_71299 + (1));
var inst_71299__$1 = inst_71310;
var state_71322__$1 = (function (){var statearr_71333 = state_71322;
(statearr_71333[(8)] = inst_71299__$1);

(statearr_71333[(10)] = inst_71309);

return statearr_71333;
})();
var statearr_71334_71356 = state_71322__$1;
(statearr_71334_71356[(2)] = null);

(statearr_71334_71356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71323 === (9))){
var state_71322__$1 = state_71322;
var statearr_71335_71357 = state_71322__$1;
(statearr_71335_71357[(2)] = null);

(statearr_71335_71357[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71323 === (5))){
var state_71322__$1 = state_71322;
var statearr_71336_71358 = state_71322__$1;
(statearr_71336_71358[(2)] = null);

(statearr_71336_71358[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71323 === (10))){
var inst_71314 = (state_71322[(2)]);
var state_71322__$1 = state_71322;
var statearr_71337_71359 = state_71322__$1;
(statearr_71337_71359[(2)] = inst_71314);

(statearr_71337_71359[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71323 === (8))){
var inst_71304 = (state_71322[(7)]);
var state_71322__$1 = state_71322;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_71322__$1,(11),out,inst_71304);
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
});})(c__69114__auto___71349,out))
;
return ((function (switch__69000__auto__,c__69114__auto___71349,out){
return (function() {
var cljs$core$async$state_machine__69001__auto__ = null;
var cljs$core$async$state_machine__69001__auto____0 = (function (){
var statearr_71341 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_71341[(0)] = cljs$core$async$state_machine__69001__auto__);

(statearr_71341[(1)] = (1));

return statearr_71341;
});
var cljs$core$async$state_machine__69001__auto____1 = (function (state_71322){
while(true){
var ret_value__69002__auto__ = (function (){try{while(true){
var result__69003__auto__ = switch__69000__auto__.call(null,state_71322);
if(cljs.core.keyword_identical_QMARK_.call(null,result__69003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69003__auto__;
}
break;
}
}catch (e71342){if((e71342 instanceof Object)){
var ex__69004__auto__ = e71342;
var statearr_71343_71360 = state_71322;
(statearr_71343_71360[(5)] = ex__69004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71322);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71342;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__69002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71361 = state_71322;
state_71322 = G__71361;
continue;
} else {
return ret_value__69002__auto__;
}
break;
}
});
cljs$core$async$state_machine__69001__auto__ = function(state_71322){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__69001__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__69001__auto____1.call(this,state_71322);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__69001__auto____0;
cljs$core$async$state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__69001__auto____1;
return cljs$core$async$state_machine__69001__auto__;
})()
;})(switch__69000__auto__,c__69114__auto___71349,out))
})();
var state__69116__auto__ = (function (){var statearr_71344 = f__69115__auto__.call(null);
(statearr_71344[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__69114__auto___71349);

return statearr_71344;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__69116__auto__);
});})(c__69114__auto___71349,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async71369 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async71369 = (function (f,ch,meta71370){
this.f = f;
this.ch = ch;
this.meta71370 = meta71370;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async71369.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_71371,meta71370__$1){
var self__ = this;
var _71371__$1 = this;
return (new cljs.core.async.t_cljs$core$async71369(self__.f,self__.ch,meta71370__$1));
});

cljs.core.async.t_cljs$core$async71369.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_71371){
var self__ = this;
var _71371__$1 = this;
return self__.meta71370;
});

cljs.core.async.t_cljs$core$async71369.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async71369.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async71369.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async71369.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async71369.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async71372 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async71372 = (function (f,ch,meta71370,_,fn1,meta71373){
this.f = f;
this.ch = ch;
this.meta71370 = meta71370;
this._ = _;
this.fn1 = fn1;
this.meta71373 = meta71373;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async71372.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_71374,meta71373__$1){
var self__ = this;
var _71374__$1 = this;
return (new cljs.core.async.t_cljs$core$async71372(self__.f,self__.ch,self__.meta71370,self__._,self__.fn1,meta71373__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async71372.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_71374){
var self__ = this;
var _71374__$1 = this;
return self__.meta71373;
});})(___$1))
;

cljs.core.async.t_cljs$core$async71372.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async71372.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async71372.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async71372.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__71362_SHARP_){
return f1.call(null,(((p1__71362_SHARP_ == null))?null:self__.f.call(null,p1__71362_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async71372.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta71370","meta71370",-1147700088,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async71369","cljs.core.async/t_cljs$core$async71369",-1459522781,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta71373","meta71373",-151379648,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async71372.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async71372.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async71372";

cljs.core.async.t_cljs$core$async71372.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__61556__auto__,writer__61557__auto__,opt__61558__auto__){
return cljs.core._write.call(null,writer__61557__auto__,"cljs.core.async/t_cljs$core$async71372");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async71372 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async71372(f__$1,ch__$1,meta71370__$1,___$2,fn1__$1,meta71373){
return (new cljs.core.async.t_cljs$core$async71372(f__$1,ch__$1,meta71370__$1,___$2,fn1__$1,meta71373));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async71372(self__.f,self__.ch,self__.meta71370,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__60887__auto__ = ret;
if(cljs.core.truth_(and__60887__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__60887__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async71369.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async71369.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async71369.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta71370","meta71370",-1147700088,null)], null);
});

cljs.core.async.t_cljs$core$async71369.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async71369.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async71369";

cljs.core.async.t_cljs$core$async71369.cljs$lang$ctorPrWriter = (function (this__61556__auto__,writer__61557__auto__,opt__61558__auto__){
return cljs.core._write.call(null,writer__61557__auto__,"cljs.core.async/t_cljs$core$async71369");
});

cljs.core.async.__GT_t_cljs$core$async71369 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async71369(f__$1,ch__$1,meta71370){
return (new cljs.core.async.t_cljs$core$async71369(f__$1,ch__$1,meta71370));
});

}

return (new cljs.core.async.t_cljs$core$async71369(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async71378 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async71378 = (function (f,ch,meta71379){
this.f = f;
this.ch = ch;
this.meta71379 = meta71379;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async71378.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_71380,meta71379__$1){
var self__ = this;
var _71380__$1 = this;
return (new cljs.core.async.t_cljs$core$async71378(self__.f,self__.ch,meta71379__$1));
});

cljs.core.async.t_cljs$core$async71378.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_71380){
var self__ = this;
var _71380__$1 = this;
return self__.meta71379;
});

cljs.core.async.t_cljs$core$async71378.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async71378.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async71378.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async71378.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async71378.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async71378.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async71378.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta71379","meta71379",141816530,null)], null);
});

cljs.core.async.t_cljs$core$async71378.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async71378.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async71378";

cljs.core.async.t_cljs$core$async71378.cljs$lang$ctorPrWriter = (function (this__61556__auto__,writer__61557__auto__,opt__61558__auto__){
return cljs.core._write.call(null,writer__61557__auto__,"cljs.core.async/t_cljs$core$async71378");
});

cljs.core.async.__GT_t_cljs$core$async71378 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async71378(f__$1,ch__$1,meta71379){
return (new cljs.core.async.t_cljs$core$async71378(f__$1,ch__$1,meta71379));
});

}

return (new cljs.core.async.t_cljs$core$async71378(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async71384 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async71384 = (function (p,ch,meta71385){
this.p = p;
this.ch = ch;
this.meta71385 = meta71385;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async71384.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_71386,meta71385__$1){
var self__ = this;
var _71386__$1 = this;
return (new cljs.core.async.t_cljs$core$async71384(self__.p,self__.ch,meta71385__$1));
});

cljs.core.async.t_cljs$core$async71384.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_71386){
var self__ = this;
var _71386__$1 = this;
return self__.meta71385;
});

cljs.core.async.t_cljs$core$async71384.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async71384.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async71384.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async71384.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async71384.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async71384.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async71384.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async71384.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta71385","meta71385",2117182191,null)], null);
});

cljs.core.async.t_cljs$core$async71384.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async71384.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async71384";

cljs.core.async.t_cljs$core$async71384.cljs$lang$ctorPrWriter = (function (this__61556__auto__,writer__61557__auto__,opt__61558__auto__){
return cljs.core._write.call(null,writer__61557__auto__,"cljs.core.async/t_cljs$core$async71384");
});

cljs.core.async.__GT_t_cljs$core$async71384 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async71384(p__$1,ch__$1,meta71385){
return (new cljs.core.async.t_cljs$core$async71384(p__$1,ch__$1,meta71385));
});

}

return (new cljs.core.async.t_cljs$core$async71384(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args71387 = [];
var len__62120__auto___71431 = arguments.length;
var i__62121__auto___71432 = (0);
while(true){
if((i__62121__auto___71432 < len__62120__auto___71431)){
args71387.push((arguments[i__62121__auto___71432]));

var G__71433 = (i__62121__auto___71432 + (1));
i__62121__auto___71432 = G__71433;
continue;
} else {
}
break;
}

var G__71389 = args71387.length;
switch (G__71389) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args71387.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__69114__auto___71435 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__69114__auto___71435,out){
return (function (){
var f__69115__auto__ = (function (){var switch__69000__auto__ = ((function (c__69114__auto___71435,out){
return (function (state_71410){
var state_val_71411 = (state_71410[(1)]);
if((state_val_71411 === (7))){
var inst_71406 = (state_71410[(2)]);
var state_71410__$1 = state_71410;
var statearr_71412_71436 = state_71410__$1;
(statearr_71412_71436[(2)] = inst_71406);

(statearr_71412_71436[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71411 === (1))){
var state_71410__$1 = state_71410;
var statearr_71413_71437 = state_71410__$1;
(statearr_71413_71437[(2)] = null);

(statearr_71413_71437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71411 === (4))){
var inst_71392 = (state_71410[(7)]);
var inst_71392__$1 = (state_71410[(2)]);
var inst_71393 = (inst_71392__$1 == null);
var state_71410__$1 = (function (){var statearr_71414 = state_71410;
(statearr_71414[(7)] = inst_71392__$1);

return statearr_71414;
})();
if(cljs.core.truth_(inst_71393)){
var statearr_71415_71438 = state_71410__$1;
(statearr_71415_71438[(1)] = (5));

} else {
var statearr_71416_71439 = state_71410__$1;
(statearr_71416_71439[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71411 === (6))){
var inst_71392 = (state_71410[(7)]);
var inst_71397 = p.call(null,inst_71392);
var state_71410__$1 = state_71410;
if(cljs.core.truth_(inst_71397)){
var statearr_71417_71440 = state_71410__$1;
(statearr_71417_71440[(1)] = (8));

} else {
var statearr_71418_71441 = state_71410__$1;
(statearr_71418_71441[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71411 === (3))){
var inst_71408 = (state_71410[(2)]);
var state_71410__$1 = state_71410;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71410__$1,inst_71408);
} else {
if((state_val_71411 === (2))){
var state_71410__$1 = state_71410;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71410__$1,(4),ch);
} else {
if((state_val_71411 === (11))){
var inst_71400 = (state_71410[(2)]);
var state_71410__$1 = state_71410;
var statearr_71419_71442 = state_71410__$1;
(statearr_71419_71442[(2)] = inst_71400);

(statearr_71419_71442[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71411 === (9))){
var state_71410__$1 = state_71410;
var statearr_71420_71443 = state_71410__$1;
(statearr_71420_71443[(2)] = null);

(statearr_71420_71443[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71411 === (5))){
var inst_71395 = cljs.core.async.close_BANG_.call(null,out);
var state_71410__$1 = state_71410;
var statearr_71421_71444 = state_71410__$1;
(statearr_71421_71444[(2)] = inst_71395);

(statearr_71421_71444[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71411 === (10))){
var inst_71403 = (state_71410[(2)]);
var state_71410__$1 = (function (){var statearr_71422 = state_71410;
(statearr_71422[(8)] = inst_71403);

return statearr_71422;
})();
var statearr_71423_71445 = state_71410__$1;
(statearr_71423_71445[(2)] = null);

(statearr_71423_71445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71411 === (8))){
var inst_71392 = (state_71410[(7)]);
var state_71410__$1 = state_71410;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_71410__$1,(11),out,inst_71392);
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
});})(c__69114__auto___71435,out))
;
return ((function (switch__69000__auto__,c__69114__auto___71435,out){
return (function() {
var cljs$core$async$state_machine__69001__auto__ = null;
var cljs$core$async$state_machine__69001__auto____0 = (function (){
var statearr_71427 = [null,null,null,null,null,null,null,null,null];
(statearr_71427[(0)] = cljs$core$async$state_machine__69001__auto__);

(statearr_71427[(1)] = (1));

return statearr_71427;
});
var cljs$core$async$state_machine__69001__auto____1 = (function (state_71410){
while(true){
var ret_value__69002__auto__ = (function (){try{while(true){
var result__69003__auto__ = switch__69000__auto__.call(null,state_71410);
if(cljs.core.keyword_identical_QMARK_.call(null,result__69003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69003__auto__;
}
break;
}
}catch (e71428){if((e71428 instanceof Object)){
var ex__69004__auto__ = e71428;
var statearr_71429_71446 = state_71410;
(statearr_71429_71446[(5)] = ex__69004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71410);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71428;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__69002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71447 = state_71410;
state_71410 = G__71447;
continue;
} else {
return ret_value__69002__auto__;
}
break;
}
});
cljs$core$async$state_machine__69001__auto__ = function(state_71410){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__69001__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__69001__auto____1.call(this,state_71410);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__69001__auto____0;
cljs$core$async$state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__69001__auto____1;
return cljs$core$async$state_machine__69001__auto__;
})()
;})(switch__69000__auto__,c__69114__auto___71435,out))
})();
var state__69116__auto__ = (function (){var statearr_71430 = f__69115__auto__.call(null);
(statearr_71430[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__69114__auto___71435);

return statearr_71430;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__69116__auto__);
});})(c__69114__auto___71435,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args71448 = [];
var len__62120__auto___71451 = arguments.length;
var i__62121__auto___71452 = (0);
while(true){
if((i__62121__auto___71452 < len__62120__auto___71451)){
args71448.push((arguments[i__62121__auto___71452]));

var G__71453 = (i__62121__auto___71452 + (1));
i__62121__auto___71452 = G__71453;
continue;
} else {
}
break;
}

var G__71450 = args71448.length;
switch (G__71450) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args71448.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__69114__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__69114__auto__){
return (function (){
var f__69115__auto__ = (function (){var switch__69000__auto__ = ((function (c__69114__auto__){
return (function (state_71620){
var state_val_71621 = (state_71620[(1)]);
if((state_val_71621 === (7))){
var inst_71616 = (state_71620[(2)]);
var state_71620__$1 = state_71620;
var statearr_71622_71663 = state_71620__$1;
(statearr_71622_71663[(2)] = inst_71616);

(statearr_71622_71663[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71621 === (20))){
var inst_71586 = (state_71620[(7)]);
var inst_71597 = (state_71620[(2)]);
var inst_71598 = cljs.core.next.call(null,inst_71586);
var inst_71572 = inst_71598;
var inst_71573 = null;
var inst_71574 = (0);
var inst_71575 = (0);
var state_71620__$1 = (function (){var statearr_71623 = state_71620;
(statearr_71623[(8)] = inst_71575);

(statearr_71623[(9)] = inst_71573);

(statearr_71623[(10)] = inst_71572);

(statearr_71623[(11)] = inst_71574);

(statearr_71623[(12)] = inst_71597);

return statearr_71623;
})();
var statearr_71624_71664 = state_71620__$1;
(statearr_71624_71664[(2)] = null);

(statearr_71624_71664[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71621 === (1))){
var state_71620__$1 = state_71620;
var statearr_71625_71665 = state_71620__$1;
(statearr_71625_71665[(2)] = null);

(statearr_71625_71665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71621 === (4))){
var inst_71561 = (state_71620[(13)]);
var inst_71561__$1 = (state_71620[(2)]);
var inst_71562 = (inst_71561__$1 == null);
var state_71620__$1 = (function (){var statearr_71626 = state_71620;
(statearr_71626[(13)] = inst_71561__$1);

return statearr_71626;
})();
if(cljs.core.truth_(inst_71562)){
var statearr_71627_71666 = state_71620__$1;
(statearr_71627_71666[(1)] = (5));

} else {
var statearr_71628_71667 = state_71620__$1;
(statearr_71628_71667[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71621 === (15))){
var state_71620__$1 = state_71620;
var statearr_71632_71668 = state_71620__$1;
(statearr_71632_71668[(2)] = null);

(statearr_71632_71668[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71621 === (21))){
var state_71620__$1 = state_71620;
var statearr_71633_71669 = state_71620__$1;
(statearr_71633_71669[(2)] = null);

(statearr_71633_71669[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71621 === (13))){
var inst_71575 = (state_71620[(8)]);
var inst_71573 = (state_71620[(9)]);
var inst_71572 = (state_71620[(10)]);
var inst_71574 = (state_71620[(11)]);
var inst_71582 = (state_71620[(2)]);
var inst_71583 = (inst_71575 + (1));
var tmp71629 = inst_71573;
var tmp71630 = inst_71572;
var tmp71631 = inst_71574;
var inst_71572__$1 = tmp71630;
var inst_71573__$1 = tmp71629;
var inst_71574__$1 = tmp71631;
var inst_71575__$1 = inst_71583;
var state_71620__$1 = (function (){var statearr_71634 = state_71620;
(statearr_71634[(14)] = inst_71582);

(statearr_71634[(8)] = inst_71575__$1);

(statearr_71634[(9)] = inst_71573__$1);

(statearr_71634[(10)] = inst_71572__$1);

(statearr_71634[(11)] = inst_71574__$1);

return statearr_71634;
})();
var statearr_71635_71670 = state_71620__$1;
(statearr_71635_71670[(2)] = null);

(statearr_71635_71670[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71621 === (22))){
var state_71620__$1 = state_71620;
var statearr_71636_71671 = state_71620__$1;
(statearr_71636_71671[(2)] = null);

(statearr_71636_71671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71621 === (6))){
var inst_71561 = (state_71620[(13)]);
var inst_71570 = f.call(null,inst_71561);
var inst_71571 = cljs.core.seq.call(null,inst_71570);
var inst_71572 = inst_71571;
var inst_71573 = null;
var inst_71574 = (0);
var inst_71575 = (0);
var state_71620__$1 = (function (){var statearr_71637 = state_71620;
(statearr_71637[(8)] = inst_71575);

(statearr_71637[(9)] = inst_71573);

(statearr_71637[(10)] = inst_71572);

(statearr_71637[(11)] = inst_71574);

return statearr_71637;
})();
var statearr_71638_71672 = state_71620__$1;
(statearr_71638_71672[(2)] = null);

(statearr_71638_71672[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71621 === (17))){
var inst_71586 = (state_71620[(7)]);
var inst_71590 = cljs.core.chunk_first.call(null,inst_71586);
var inst_71591 = cljs.core.chunk_rest.call(null,inst_71586);
var inst_71592 = cljs.core.count.call(null,inst_71590);
var inst_71572 = inst_71591;
var inst_71573 = inst_71590;
var inst_71574 = inst_71592;
var inst_71575 = (0);
var state_71620__$1 = (function (){var statearr_71639 = state_71620;
(statearr_71639[(8)] = inst_71575);

(statearr_71639[(9)] = inst_71573);

(statearr_71639[(10)] = inst_71572);

(statearr_71639[(11)] = inst_71574);

return statearr_71639;
})();
var statearr_71640_71673 = state_71620__$1;
(statearr_71640_71673[(2)] = null);

(statearr_71640_71673[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71621 === (3))){
var inst_71618 = (state_71620[(2)]);
var state_71620__$1 = state_71620;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71620__$1,inst_71618);
} else {
if((state_val_71621 === (12))){
var inst_71606 = (state_71620[(2)]);
var state_71620__$1 = state_71620;
var statearr_71641_71674 = state_71620__$1;
(statearr_71641_71674[(2)] = inst_71606);

(statearr_71641_71674[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71621 === (2))){
var state_71620__$1 = state_71620;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71620__$1,(4),in$);
} else {
if((state_val_71621 === (23))){
var inst_71614 = (state_71620[(2)]);
var state_71620__$1 = state_71620;
var statearr_71642_71675 = state_71620__$1;
(statearr_71642_71675[(2)] = inst_71614);

(statearr_71642_71675[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71621 === (19))){
var inst_71601 = (state_71620[(2)]);
var state_71620__$1 = state_71620;
var statearr_71643_71676 = state_71620__$1;
(statearr_71643_71676[(2)] = inst_71601);

(statearr_71643_71676[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71621 === (11))){
var inst_71572 = (state_71620[(10)]);
var inst_71586 = (state_71620[(7)]);
var inst_71586__$1 = cljs.core.seq.call(null,inst_71572);
var state_71620__$1 = (function (){var statearr_71644 = state_71620;
(statearr_71644[(7)] = inst_71586__$1);

return statearr_71644;
})();
if(inst_71586__$1){
var statearr_71645_71677 = state_71620__$1;
(statearr_71645_71677[(1)] = (14));

} else {
var statearr_71646_71678 = state_71620__$1;
(statearr_71646_71678[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71621 === (9))){
var inst_71608 = (state_71620[(2)]);
var inst_71609 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_71620__$1 = (function (){var statearr_71647 = state_71620;
(statearr_71647[(15)] = inst_71608);

return statearr_71647;
})();
if(cljs.core.truth_(inst_71609)){
var statearr_71648_71679 = state_71620__$1;
(statearr_71648_71679[(1)] = (21));

} else {
var statearr_71649_71680 = state_71620__$1;
(statearr_71649_71680[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71621 === (5))){
var inst_71564 = cljs.core.async.close_BANG_.call(null,out);
var state_71620__$1 = state_71620;
var statearr_71650_71681 = state_71620__$1;
(statearr_71650_71681[(2)] = inst_71564);

(statearr_71650_71681[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71621 === (14))){
var inst_71586 = (state_71620[(7)]);
var inst_71588 = cljs.core.chunked_seq_QMARK_.call(null,inst_71586);
var state_71620__$1 = state_71620;
if(inst_71588){
var statearr_71651_71682 = state_71620__$1;
(statearr_71651_71682[(1)] = (17));

} else {
var statearr_71652_71683 = state_71620__$1;
(statearr_71652_71683[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71621 === (16))){
var inst_71604 = (state_71620[(2)]);
var state_71620__$1 = state_71620;
var statearr_71653_71684 = state_71620__$1;
(statearr_71653_71684[(2)] = inst_71604);

(statearr_71653_71684[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71621 === (10))){
var inst_71575 = (state_71620[(8)]);
var inst_71573 = (state_71620[(9)]);
var inst_71580 = cljs.core._nth.call(null,inst_71573,inst_71575);
var state_71620__$1 = state_71620;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_71620__$1,(13),out,inst_71580);
} else {
if((state_val_71621 === (18))){
var inst_71586 = (state_71620[(7)]);
var inst_71595 = cljs.core.first.call(null,inst_71586);
var state_71620__$1 = state_71620;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_71620__$1,(20),out,inst_71595);
} else {
if((state_val_71621 === (8))){
var inst_71575 = (state_71620[(8)]);
var inst_71574 = (state_71620[(11)]);
var inst_71577 = (inst_71575 < inst_71574);
var inst_71578 = inst_71577;
var state_71620__$1 = state_71620;
if(cljs.core.truth_(inst_71578)){
var statearr_71654_71685 = state_71620__$1;
(statearr_71654_71685[(1)] = (10));

} else {
var statearr_71655_71686 = state_71620__$1;
(statearr_71655_71686[(1)] = (11));

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
});})(c__69114__auto__))
;
return ((function (switch__69000__auto__,c__69114__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__69001__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__69001__auto____0 = (function (){
var statearr_71659 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71659[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__69001__auto__);

(statearr_71659[(1)] = (1));

return statearr_71659;
});
var cljs$core$async$mapcat_STAR__$_state_machine__69001__auto____1 = (function (state_71620){
while(true){
var ret_value__69002__auto__ = (function (){try{while(true){
var result__69003__auto__ = switch__69000__auto__.call(null,state_71620);
if(cljs.core.keyword_identical_QMARK_.call(null,result__69003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69003__auto__;
}
break;
}
}catch (e71660){if((e71660 instanceof Object)){
var ex__69004__auto__ = e71660;
var statearr_71661_71687 = state_71620;
(statearr_71661_71687[(5)] = ex__69004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71620);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71660;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__69002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71688 = state_71620;
state_71620 = G__71688;
continue;
} else {
return ret_value__69002__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__69001__auto__ = function(state_71620){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__69001__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__69001__auto____1.call(this,state_71620);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__69001__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__69001__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__69001__auto__;
})()
;})(switch__69000__auto__,c__69114__auto__))
})();
var state__69116__auto__ = (function (){var statearr_71662 = f__69115__auto__.call(null);
(statearr_71662[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__69114__auto__);

return statearr_71662;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__69116__auto__);
});})(c__69114__auto__))
);

return c__69114__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args71689 = [];
var len__62120__auto___71692 = arguments.length;
var i__62121__auto___71693 = (0);
while(true){
if((i__62121__auto___71693 < len__62120__auto___71692)){
args71689.push((arguments[i__62121__auto___71693]));

var G__71694 = (i__62121__auto___71693 + (1));
i__62121__auto___71693 = G__71694;
continue;
} else {
}
break;
}

var G__71691 = args71689.length;
switch (G__71691) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args71689.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args71696 = [];
var len__62120__auto___71699 = arguments.length;
var i__62121__auto___71700 = (0);
while(true){
if((i__62121__auto___71700 < len__62120__auto___71699)){
args71696.push((arguments[i__62121__auto___71700]));

var G__71701 = (i__62121__auto___71700 + (1));
i__62121__auto___71700 = G__71701;
continue;
} else {
}
break;
}

var G__71698 = args71696.length;
switch (G__71698) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args71696.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args71703 = [];
var len__62120__auto___71754 = arguments.length;
var i__62121__auto___71755 = (0);
while(true){
if((i__62121__auto___71755 < len__62120__auto___71754)){
args71703.push((arguments[i__62121__auto___71755]));

var G__71756 = (i__62121__auto___71755 + (1));
i__62121__auto___71755 = G__71756;
continue;
} else {
}
break;
}

var G__71705 = args71703.length;
switch (G__71705) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args71703.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__69114__auto___71758 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__69114__auto___71758,out){
return (function (){
var f__69115__auto__ = (function (){var switch__69000__auto__ = ((function (c__69114__auto___71758,out){
return (function (state_71729){
var state_val_71730 = (state_71729[(1)]);
if((state_val_71730 === (7))){
var inst_71724 = (state_71729[(2)]);
var state_71729__$1 = state_71729;
var statearr_71731_71759 = state_71729__$1;
(statearr_71731_71759[(2)] = inst_71724);

(statearr_71731_71759[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71730 === (1))){
var inst_71706 = null;
var state_71729__$1 = (function (){var statearr_71732 = state_71729;
(statearr_71732[(7)] = inst_71706);

return statearr_71732;
})();
var statearr_71733_71760 = state_71729__$1;
(statearr_71733_71760[(2)] = null);

(statearr_71733_71760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71730 === (4))){
var inst_71709 = (state_71729[(8)]);
var inst_71709__$1 = (state_71729[(2)]);
var inst_71710 = (inst_71709__$1 == null);
var inst_71711 = cljs.core.not.call(null,inst_71710);
var state_71729__$1 = (function (){var statearr_71734 = state_71729;
(statearr_71734[(8)] = inst_71709__$1);

return statearr_71734;
})();
if(inst_71711){
var statearr_71735_71761 = state_71729__$1;
(statearr_71735_71761[(1)] = (5));

} else {
var statearr_71736_71762 = state_71729__$1;
(statearr_71736_71762[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71730 === (6))){
var state_71729__$1 = state_71729;
var statearr_71737_71763 = state_71729__$1;
(statearr_71737_71763[(2)] = null);

(statearr_71737_71763[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71730 === (3))){
var inst_71726 = (state_71729[(2)]);
var inst_71727 = cljs.core.async.close_BANG_.call(null,out);
var state_71729__$1 = (function (){var statearr_71738 = state_71729;
(statearr_71738[(9)] = inst_71726);

return statearr_71738;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71729__$1,inst_71727);
} else {
if((state_val_71730 === (2))){
var state_71729__$1 = state_71729;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71729__$1,(4),ch);
} else {
if((state_val_71730 === (11))){
var inst_71709 = (state_71729[(8)]);
var inst_71718 = (state_71729[(2)]);
var inst_71706 = inst_71709;
var state_71729__$1 = (function (){var statearr_71739 = state_71729;
(statearr_71739[(7)] = inst_71706);

(statearr_71739[(10)] = inst_71718);

return statearr_71739;
})();
var statearr_71740_71764 = state_71729__$1;
(statearr_71740_71764[(2)] = null);

(statearr_71740_71764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71730 === (9))){
var inst_71709 = (state_71729[(8)]);
var state_71729__$1 = state_71729;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_71729__$1,(11),out,inst_71709);
} else {
if((state_val_71730 === (5))){
var inst_71709 = (state_71729[(8)]);
var inst_71706 = (state_71729[(7)]);
var inst_71713 = cljs.core._EQ_.call(null,inst_71709,inst_71706);
var state_71729__$1 = state_71729;
if(inst_71713){
var statearr_71742_71765 = state_71729__$1;
(statearr_71742_71765[(1)] = (8));

} else {
var statearr_71743_71766 = state_71729__$1;
(statearr_71743_71766[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71730 === (10))){
var inst_71721 = (state_71729[(2)]);
var state_71729__$1 = state_71729;
var statearr_71744_71767 = state_71729__$1;
(statearr_71744_71767[(2)] = inst_71721);

(statearr_71744_71767[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71730 === (8))){
var inst_71706 = (state_71729[(7)]);
var tmp71741 = inst_71706;
var inst_71706__$1 = tmp71741;
var state_71729__$1 = (function (){var statearr_71745 = state_71729;
(statearr_71745[(7)] = inst_71706__$1);

return statearr_71745;
})();
var statearr_71746_71768 = state_71729__$1;
(statearr_71746_71768[(2)] = null);

(statearr_71746_71768[(1)] = (2));


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
});})(c__69114__auto___71758,out))
;
return ((function (switch__69000__auto__,c__69114__auto___71758,out){
return (function() {
var cljs$core$async$state_machine__69001__auto__ = null;
var cljs$core$async$state_machine__69001__auto____0 = (function (){
var statearr_71750 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_71750[(0)] = cljs$core$async$state_machine__69001__auto__);

(statearr_71750[(1)] = (1));

return statearr_71750;
});
var cljs$core$async$state_machine__69001__auto____1 = (function (state_71729){
while(true){
var ret_value__69002__auto__ = (function (){try{while(true){
var result__69003__auto__ = switch__69000__auto__.call(null,state_71729);
if(cljs.core.keyword_identical_QMARK_.call(null,result__69003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69003__auto__;
}
break;
}
}catch (e71751){if((e71751 instanceof Object)){
var ex__69004__auto__ = e71751;
var statearr_71752_71769 = state_71729;
(statearr_71752_71769[(5)] = ex__69004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71729);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71751;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__69002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71770 = state_71729;
state_71729 = G__71770;
continue;
} else {
return ret_value__69002__auto__;
}
break;
}
});
cljs$core$async$state_machine__69001__auto__ = function(state_71729){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__69001__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__69001__auto____1.call(this,state_71729);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__69001__auto____0;
cljs$core$async$state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__69001__auto____1;
return cljs$core$async$state_machine__69001__auto__;
})()
;})(switch__69000__auto__,c__69114__auto___71758,out))
})();
var state__69116__auto__ = (function (){var statearr_71753 = f__69115__auto__.call(null);
(statearr_71753[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__69114__auto___71758);

return statearr_71753;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__69116__auto__);
});})(c__69114__auto___71758,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args71771 = [];
var len__62120__auto___71841 = arguments.length;
var i__62121__auto___71842 = (0);
while(true){
if((i__62121__auto___71842 < len__62120__auto___71841)){
args71771.push((arguments[i__62121__auto___71842]));

var G__71843 = (i__62121__auto___71842 + (1));
i__62121__auto___71842 = G__71843;
continue;
} else {
}
break;
}

var G__71773 = args71771.length;
switch (G__71773) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args71771.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__69114__auto___71845 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__69114__auto___71845,out){
return (function (){
var f__69115__auto__ = (function (){var switch__69000__auto__ = ((function (c__69114__auto___71845,out){
return (function (state_71811){
var state_val_71812 = (state_71811[(1)]);
if((state_val_71812 === (7))){
var inst_71807 = (state_71811[(2)]);
var state_71811__$1 = state_71811;
var statearr_71813_71846 = state_71811__$1;
(statearr_71813_71846[(2)] = inst_71807);

(statearr_71813_71846[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71812 === (1))){
var inst_71774 = (new Array(n));
var inst_71775 = inst_71774;
var inst_71776 = (0);
var state_71811__$1 = (function (){var statearr_71814 = state_71811;
(statearr_71814[(7)] = inst_71776);

(statearr_71814[(8)] = inst_71775);

return statearr_71814;
})();
var statearr_71815_71847 = state_71811__$1;
(statearr_71815_71847[(2)] = null);

(statearr_71815_71847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71812 === (4))){
var inst_71779 = (state_71811[(9)]);
var inst_71779__$1 = (state_71811[(2)]);
var inst_71780 = (inst_71779__$1 == null);
var inst_71781 = cljs.core.not.call(null,inst_71780);
var state_71811__$1 = (function (){var statearr_71816 = state_71811;
(statearr_71816[(9)] = inst_71779__$1);

return statearr_71816;
})();
if(inst_71781){
var statearr_71817_71848 = state_71811__$1;
(statearr_71817_71848[(1)] = (5));

} else {
var statearr_71818_71849 = state_71811__$1;
(statearr_71818_71849[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71812 === (15))){
var inst_71801 = (state_71811[(2)]);
var state_71811__$1 = state_71811;
var statearr_71819_71850 = state_71811__$1;
(statearr_71819_71850[(2)] = inst_71801);

(statearr_71819_71850[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71812 === (13))){
var state_71811__$1 = state_71811;
var statearr_71820_71851 = state_71811__$1;
(statearr_71820_71851[(2)] = null);

(statearr_71820_71851[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71812 === (6))){
var inst_71776 = (state_71811[(7)]);
var inst_71797 = (inst_71776 > (0));
var state_71811__$1 = state_71811;
if(cljs.core.truth_(inst_71797)){
var statearr_71821_71852 = state_71811__$1;
(statearr_71821_71852[(1)] = (12));

} else {
var statearr_71822_71853 = state_71811__$1;
(statearr_71822_71853[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71812 === (3))){
var inst_71809 = (state_71811[(2)]);
var state_71811__$1 = state_71811;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71811__$1,inst_71809);
} else {
if((state_val_71812 === (12))){
var inst_71775 = (state_71811[(8)]);
var inst_71799 = cljs.core.vec.call(null,inst_71775);
var state_71811__$1 = state_71811;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_71811__$1,(15),out,inst_71799);
} else {
if((state_val_71812 === (2))){
var state_71811__$1 = state_71811;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71811__$1,(4),ch);
} else {
if((state_val_71812 === (11))){
var inst_71791 = (state_71811[(2)]);
var inst_71792 = (new Array(n));
var inst_71775 = inst_71792;
var inst_71776 = (0);
var state_71811__$1 = (function (){var statearr_71823 = state_71811;
(statearr_71823[(7)] = inst_71776);

(statearr_71823[(10)] = inst_71791);

(statearr_71823[(8)] = inst_71775);

return statearr_71823;
})();
var statearr_71824_71854 = state_71811__$1;
(statearr_71824_71854[(2)] = null);

(statearr_71824_71854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71812 === (9))){
var inst_71775 = (state_71811[(8)]);
var inst_71789 = cljs.core.vec.call(null,inst_71775);
var state_71811__$1 = state_71811;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_71811__$1,(11),out,inst_71789);
} else {
if((state_val_71812 === (5))){
var inst_71776 = (state_71811[(7)]);
var inst_71779 = (state_71811[(9)]);
var inst_71784 = (state_71811[(11)]);
var inst_71775 = (state_71811[(8)]);
var inst_71783 = (inst_71775[inst_71776] = inst_71779);
var inst_71784__$1 = (inst_71776 + (1));
var inst_71785 = (inst_71784__$1 < n);
var state_71811__$1 = (function (){var statearr_71825 = state_71811;
(statearr_71825[(11)] = inst_71784__$1);

(statearr_71825[(12)] = inst_71783);

return statearr_71825;
})();
if(cljs.core.truth_(inst_71785)){
var statearr_71826_71855 = state_71811__$1;
(statearr_71826_71855[(1)] = (8));

} else {
var statearr_71827_71856 = state_71811__$1;
(statearr_71827_71856[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71812 === (14))){
var inst_71804 = (state_71811[(2)]);
var inst_71805 = cljs.core.async.close_BANG_.call(null,out);
var state_71811__$1 = (function (){var statearr_71829 = state_71811;
(statearr_71829[(13)] = inst_71804);

return statearr_71829;
})();
var statearr_71830_71857 = state_71811__$1;
(statearr_71830_71857[(2)] = inst_71805);

(statearr_71830_71857[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71812 === (10))){
var inst_71795 = (state_71811[(2)]);
var state_71811__$1 = state_71811;
var statearr_71831_71858 = state_71811__$1;
(statearr_71831_71858[(2)] = inst_71795);

(statearr_71831_71858[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71812 === (8))){
var inst_71784 = (state_71811[(11)]);
var inst_71775 = (state_71811[(8)]);
var tmp71828 = inst_71775;
var inst_71775__$1 = tmp71828;
var inst_71776 = inst_71784;
var state_71811__$1 = (function (){var statearr_71832 = state_71811;
(statearr_71832[(7)] = inst_71776);

(statearr_71832[(8)] = inst_71775__$1);

return statearr_71832;
})();
var statearr_71833_71859 = state_71811__$1;
(statearr_71833_71859[(2)] = null);

(statearr_71833_71859[(1)] = (2));


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
});})(c__69114__auto___71845,out))
;
return ((function (switch__69000__auto__,c__69114__auto___71845,out){
return (function() {
var cljs$core$async$state_machine__69001__auto__ = null;
var cljs$core$async$state_machine__69001__auto____0 = (function (){
var statearr_71837 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71837[(0)] = cljs$core$async$state_machine__69001__auto__);

(statearr_71837[(1)] = (1));

return statearr_71837;
});
var cljs$core$async$state_machine__69001__auto____1 = (function (state_71811){
while(true){
var ret_value__69002__auto__ = (function (){try{while(true){
var result__69003__auto__ = switch__69000__auto__.call(null,state_71811);
if(cljs.core.keyword_identical_QMARK_.call(null,result__69003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69003__auto__;
}
break;
}
}catch (e71838){if((e71838 instanceof Object)){
var ex__69004__auto__ = e71838;
var statearr_71839_71860 = state_71811;
(statearr_71839_71860[(5)] = ex__69004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71811);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71838;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__69002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71861 = state_71811;
state_71811 = G__71861;
continue;
} else {
return ret_value__69002__auto__;
}
break;
}
});
cljs$core$async$state_machine__69001__auto__ = function(state_71811){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__69001__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__69001__auto____1.call(this,state_71811);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__69001__auto____0;
cljs$core$async$state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__69001__auto____1;
return cljs$core$async$state_machine__69001__auto__;
})()
;})(switch__69000__auto__,c__69114__auto___71845,out))
})();
var state__69116__auto__ = (function (){var statearr_71840 = f__69115__auto__.call(null);
(statearr_71840[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__69114__auto___71845);

return statearr_71840;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__69116__auto__);
});})(c__69114__auto___71845,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args71862 = [];
var len__62120__auto___71936 = arguments.length;
var i__62121__auto___71937 = (0);
while(true){
if((i__62121__auto___71937 < len__62120__auto___71936)){
args71862.push((arguments[i__62121__auto___71937]));

var G__71938 = (i__62121__auto___71937 + (1));
i__62121__auto___71937 = G__71938;
continue;
} else {
}
break;
}

var G__71864 = args71862.length;
switch (G__71864) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args71862.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__69114__auto___71940 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__69114__auto___71940,out){
return (function (){
var f__69115__auto__ = (function (){var switch__69000__auto__ = ((function (c__69114__auto___71940,out){
return (function (state_71906){
var state_val_71907 = (state_71906[(1)]);
if((state_val_71907 === (7))){
var inst_71902 = (state_71906[(2)]);
var state_71906__$1 = state_71906;
var statearr_71908_71941 = state_71906__$1;
(statearr_71908_71941[(2)] = inst_71902);

(statearr_71908_71941[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71907 === (1))){
var inst_71865 = [];
var inst_71866 = inst_71865;
var inst_71867 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_71906__$1 = (function (){var statearr_71909 = state_71906;
(statearr_71909[(7)] = inst_71867);

(statearr_71909[(8)] = inst_71866);

return statearr_71909;
})();
var statearr_71910_71942 = state_71906__$1;
(statearr_71910_71942[(2)] = null);

(statearr_71910_71942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71907 === (4))){
var inst_71870 = (state_71906[(9)]);
var inst_71870__$1 = (state_71906[(2)]);
var inst_71871 = (inst_71870__$1 == null);
var inst_71872 = cljs.core.not.call(null,inst_71871);
var state_71906__$1 = (function (){var statearr_71911 = state_71906;
(statearr_71911[(9)] = inst_71870__$1);

return statearr_71911;
})();
if(inst_71872){
var statearr_71912_71943 = state_71906__$1;
(statearr_71912_71943[(1)] = (5));

} else {
var statearr_71913_71944 = state_71906__$1;
(statearr_71913_71944[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71907 === (15))){
var inst_71896 = (state_71906[(2)]);
var state_71906__$1 = state_71906;
var statearr_71914_71945 = state_71906__$1;
(statearr_71914_71945[(2)] = inst_71896);

(statearr_71914_71945[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71907 === (13))){
var state_71906__$1 = state_71906;
var statearr_71915_71946 = state_71906__$1;
(statearr_71915_71946[(2)] = null);

(statearr_71915_71946[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71907 === (6))){
var inst_71866 = (state_71906[(8)]);
var inst_71891 = inst_71866.length;
var inst_71892 = (inst_71891 > (0));
var state_71906__$1 = state_71906;
if(cljs.core.truth_(inst_71892)){
var statearr_71916_71947 = state_71906__$1;
(statearr_71916_71947[(1)] = (12));

} else {
var statearr_71917_71948 = state_71906__$1;
(statearr_71917_71948[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71907 === (3))){
var inst_71904 = (state_71906[(2)]);
var state_71906__$1 = state_71906;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71906__$1,inst_71904);
} else {
if((state_val_71907 === (12))){
var inst_71866 = (state_71906[(8)]);
var inst_71894 = cljs.core.vec.call(null,inst_71866);
var state_71906__$1 = state_71906;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_71906__$1,(15),out,inst_71894);
} else {
if((state_val_71907 === (2))){
var state_71906__$1 = state_71906;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71906__$1,(4),ch);
} else {
if((state_val_71907 === (11))){
var inst_71874 = (state_71906[(10)]);
var inst_71870 = (state_71906[(9)]);
var inst_71884 = (state_71906[(2)]);
var inst_71885 = [];
var inst_71886 = inst_71885.push(inst_71870);
var inst_71866 = inst_71885;
var inst_71867 = inst_71874;
var state_71906__$1 = (function (){var statearr_71918 = state_71906;
(statearr_71918[(11)] = inst_71886);

(statearr_71918[(7)] = inst_71867);

(statearr_71918[(12)] = inst_71884);

(statearr_71918[(8)] = inst_71866);

return statearr_71918;
})();
var statearr_71919_71949 = state_71906__$1;
(statearr_71919_71949[(2)] = null);

(statearr_71919_71949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71907 === (9))){
var inst_71866 = (state_71906[(8)]);
var inst_71882 = cljs.core.vec.call(null,inst_71866);
var state_71906__$1 = state_71906;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_71906__$1,(11),out,inst_71882);
} else {
if((state_val_71907 === (5))){
var inst_71874 = (state_71906[(10)]);
var inst_71867 = (state_71906[(7)]);
var inst_71870 = (state_71906[(9)]);
var inst_71874__$1 = f.call(null,inst_71870);
var inst_71875 = cljs.core._EQ_.call(null,inst_71874__$1,inst_71867);
var inst_71876 = cljs.core.keyword_identical_QMARK_.call(null,inst_71867,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_71877 = (inst_71875) || (inst_71876);
var state_71906__$1 = (function (){var statearr_71920 = state_71906;
(statearr_71920[(10)] = inst_71874__$1);

return statearr_71920;
})();
if(cljs.core.truth_(inst_71877)){
var statearr_71921_71950 = state_71906__$1;
(statearr_71921_71950[(1)] = (8));

} else {
var statearr_71922_71951 = state_71906__$1;
(statearr_71922_71951[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71907 === (14))){
var inst_71899 = (state_71906[(2)]);
var inst_71900 = cljs.core.async.close_BANG_.call(null,out);
var state_71906__$1 = (function (){var statearr_71924 = state_71906;
(statearr_71924[(13)] = inst_71899);

return statearr_71924;
})();
var statearr_71925_71952 = state_71906__$1;
(statearr_71925_71952[(2)] = inst_71900);

(statearr_71925_71952[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71907 === (10))){
var inst_71889 = (state_71906[(2)]);
var state_71906__$1 = state_71906;
var statearr_71926_71953 = state_71906__$1;
(statearr_71926_71953[(2)] = inst_71889);

(statearr_71926_71953[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71907 === (8))){
var inst_71874 = (state_71906[(10)]);
var inst_71870 = (state_71906[(9)]);
var inst_71866 = (state_71906[(8)]);
var inst_71879 = inst_71866.push(inst_71870);
var tmp71923 = inst_71866;
var inst_71866__$1 = tmp71923;
var inst_71867 = inst_71874;
var state_71906__$1 = (function (){var statearr_71927 = state_71906;
(statearr_71927[(7)] = inst_71867);

(statearr_71927[(14)] = inst_71879);

(statearr_71927[(8)] = inst_71866__$1);

return statearr_71927;
})();
var statearr_71928_71954 = state_71906__$1;
(statearr_71928_71954[(2)] = null);

(statearr_71928_71954[(1)] = (2));


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
});})(c__69114__auto___71940,out))
;
return ((function (switch__69000__auto__,c__69114__auto___71940,out){
return (function() {
var cljs$core$async$state_machine__69001__auto__ = null;
var cljs$core$async$state_machine__69001__auto____0 = (function (){
var statearr_71932 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71932[(0)] = cljs$core$async$state_machine__69001__auto__);

(statearr_71932[(1)] = (1));

return statearr_71932;
});
var cljs$core$async$state_machine__69001__auto____1 = (function (state_71906){
while(true){
var ret_value__69002__auto__ = (function (){try{while(true){
var result__69003__auto__ = switch__69000__auto__.call(null,state_71906);
if(cljs.core.keyword_identical_QMARK_.call(null,result__69003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69003__auto__;
}
break;
}
}catch (e71933){if((e71933 instanceof Object)){
var ex__69004__auto__ = e71933;
var statearr_71934_71955 = state_71906;
(statearr_71934_71955[(5)] = ex__69004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71906);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71933;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__69002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71956 = state_71906;
state_71906 = G__71956;
continue;
} else {
return ret_value__69002__auto__;
}
break;
}
});
cljs$core$async$state_machine__69001__auto__ = function(state_71906){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__69001__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__69001__auto____1.call(this,state_71906);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__69001__auto____0;
cljs$core$async$state_machine__69001__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__69001__auto____1;
return cljs$core$async$state_machine__69001__auto__;
})()
;})(switch__69000__auto__,c__69114__auto___71940,out))
})();
var state__69116__auto__ = (function (){var statearr_71935 = f__69115__auto__.call(null);
(statearr_71935[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__69114__auto___71940);

return statearr_71935;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__69116__auto__);
});})(c__69114__auto___71940,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1506064180757