(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{273:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return l})),n.d(e,"c",(function(){return d})),n.d(e,"d",(function(){return f}));var r=n(474),o=n(0),c=Object(o.e)("v-card__actions"),l=Object(o.e)("v-card__subtitle"),d=Object(o.e)("v-card__text"),f=Object(o.e)("v-card__title");r.a},491:function(t,e,n){"use strict";n(6),n(10),n(11),n(12);var r=n(2),o=(n(45),n(65),n(29),n(9),n(33),n(68),n(276),n(21),n(37),n(277),n(278),n(279),n(280),n(281),n(282),n(283),n(284),n(285),n(286),n(287),n(288),n(289),n(46),n(7),n(275),n(1)),c=n(88),l=n(0);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],m=["start","end","center"];function y(t,e){return v.reduce((function(n,r){return n[t+Object(l.u)(r)]=e(),n}),{})}var x=function(t){return[].concat(m,["baseline","stretch"]).includes(t)},O=y("align",(function(){return{type:String,default:null,validator:x}})),j=function(t){return[].concat(m,["space-between","space-around"]).includes(t)},w=y("justify",(function(){return{type:String,default:null,validator:j}})),h=function(t){return[].concat(m,["space-between","space-around","stretch"]).includes(t)},C=y("alignContent",(function(){return{type:String,default:null,validator:h}})),_={align:Object.keys(O),justify:Object.keys(w),alignContent:Object.keys(C)},k={align:"align",justify:"justify",alignContent:"align-content"};function $(t,e,n){var r=k[t];if(null!=n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return(r+="-".concat(n)).toLowerCase()}}var S=new Map;e.a=o.default.extend({name:"v-row",functional:!0,props:f(f(f({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:x}},O),{},{justify:{type:String,default:null,validator:j}},w),{},{alignContent:{type:String,default:null,validator:h}},C),render:function(t,e){var n=e.props,data=e.data,o=e.children,l="";for(var d in n)l+=String(n[d]);var f=S.get(l);return f||function(){var t,e;for(e in f=[],_)_[e].forEach((function(t){var r=n[t],o=$(e,t,r);o&&f.push(o)}));f.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r.a)(t,"align-".concat(n.align),n.align),Object(r.a)(t,"justify-".concat(n.justify),n.justify),Object(r.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),S.set(l,f)}(),t(n.tag,Object(c.a)(data,{staticClass:"row",class:f}),o)}})},495:function(t,e,n){var content=n(508);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("61f2622f",content,!0,{sourceMap:!1})},507:function(t,e,n){"use strict";n(495)},508:function(t,e,n){var r=n(14)(!1);r.push([t.i,".main-font-size[data-v-18710428]{font-size:28px}.main-font-size-xs[data-v-18710428]{font-size:20px}.position-relative[data-v-18710428]{position:relative}.position-absolute[data-v-18710428]{position:absolute;top:75%;width:100%}.opacity-img[data-v-18710428]{opacity:1%}",""]),t.exports=r},533:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{imgs:{topIntro:"/img/intro_top.png",logo:"https://dmq1lrjfpg713.cloudfront.net/img/logo.png",duplication:"/img/duplication.png",badge:"/img/badge.png"},items:{text:{first:"누구든지 쉽고 빠르게<br />AI 기술 통한 자료조사, 보고서 초안 작성",second:"작업은 간소화하고 조사량은 늘리고, 놓치지 않는 자료 출처까지<br />업무 효율을 극대화하세요"}}}}},o=(n(507),n(54)),c=n(64),l=n.n(c),d=n(474),f=n(273),v=n(485),m=n(272),y=n(491),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:{"position-relative":t.$vuetify.breakpoint.smAndUp}},[n("v-row",{attrs:{justify:"space-between"}},[n("v-col",{staticClass:"white--text pb-0 pl-sm-3 pl-6 mt-12 mt-sm-0",class:t.$vuetify.breakpoint.smAndUp?"main-font-size":"main-font-size-xs",attrs:{cols:"8",sm:"6","align-self":"center"}},[n("div",{staticClass:"d-flex"},[t._v("\n        쉬운 조사 보고서는\n        "),n("div",{staticClass:"rounded-lg d-flex align-center ml-sm-3 ml-2 px-2",staticStyle:{"background-color":"white"}},[n("v-img",{attrs:{src:t.imgs.logo,width:t.$vuetify.breakpoint.smAndUp?"90":"60"}})],1)]),t._v(" "),n("span",{staticClass:"font-weight-black"},[t._v("자료조사 AI를 소개")]),t._v("합니다\n    ")]),t._v(" "),n("v-col",{staticClass:"pb-0",attrs:{cols:"4","offset-sm":"2"}},[n("v-img",{staticClass:"ml-sm-0 ml-n10",class:{"opacity-img":t.$vuetify.breakpoint.xsOnly},attrs:{src:t.imgs.topIntro,width:"200","min-width":t.$vuetify.breakpoint.xsOnly?"140":"200","aspect-ratio":.8}})],1)],1),t._v(" "),n("v-row",{class:{"position-absolute":t.$vuetify.breakpoint.smAndUp}},[n("v-col",{staticClass:"pl-1 pr-sm-3 pr-0 py-sm-3 py-0",attrs:{cols:"12",sm:"6"}},[n("v-card",{staticClass:"d-flex flex-column align-center",class:t.$vuetify.breakpoint.smAndUp?"rounded-xl":"rounded-0 py-3",attrs:{height:t.$vuetify.breakpoint.smAndUp?180:220,flat:t.$vuetify.breakpoint.xsOnly}},[n("v-card-subtitle",[n("v-img",{attrs:{src:t.imgs.duplication,width:"50"}})],1),t._v(" "),n("v-card-text",[n("p",{staticClass:"my-4 text-center text--primary",domProps:{innerHTML:t._s(t.items.text.first)}})])],1)],1),t._v(" "),n("v-col",{staticClass:"pr-1 pl-sm-3 pl-1 py-sm-3 py-0",style:{boxShadow:t.$vuetify.breakpoint.xsOnly?"0px 5px 10px #eef4fe":""},attrs:{cols:"12",sm:"6"}},[n("v-card",{staticClass:"d-flex flex-column align-center",class:t.$vuetify.breakpoint.smAndUp?"rounded-xl":"rounded-0 py-3",attrs:{flat:t.$vuetify.breakpoint.xsOnly,height:t.$vuetify.breakpoint.smAndUp?180:220}},[n("v-card-subtitle",[n("v-img",{attrs:{src:t.imgs.badge,width:"45"}})],1),t._v(" "),n("v-card-text",[n("p",{staticClass:"my-4 text-center text--primary",domProps:{innerHTML:t._s(t.items.text.second)}})])],1)],1)],1)],1)}),[],!1,null,"18710428",null);e.default=component.exports;l()(component,{VCard:d.a,VCardSubtitle:f.b,VCardText:f.c,VCol:v.a,VImg:m.a,VRow:y.a})}}]);