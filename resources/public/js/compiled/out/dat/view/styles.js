// Compiled by ClojureScript 1.9.542 {}
goog.provide('dat.view.styles');
goog.require('cljs.core');
dat.view.styles.box_styles = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"inline-flex",new cljs.core.Keyword(null,"flex-wrap","flex-wrap",455413707),"wrap"], null);
dat.view.styles.h_box_styles = cljs.core.merge.call(null,dat.view.styles.box_styles,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row"], null));
dat.view.styles.v_box_styles = cljs.core.merge.call(null,dat.view.styles.box_styles,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null));
dat.view.styles.bordered_box_style = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border","border",1444987323),"2px solid grey",new cljs.core.Keyword(null,"margin","margin",-995903681),"3px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#E5FFF6"], null);
dat.view.styles.error_styles = cljs.core.merge.call(null,dat.view.styles.v_box_styles,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border","border",1444987323),"2px solid red",new cljs.core.Keyword(null,"margin","margin",-995903681),"3px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#FFE5E5"], null));

//# sourceMappingURL=styles.js.map?rel=1506064198669