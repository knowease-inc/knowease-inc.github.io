(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{273:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return l})),n.d(e,"c",(function(){return d})),n.d(e,"d",(function(){return f}));var r=n(474),o=n(0),c=Object(o.e)("v-card__actions"),l=Object(o.e)("v-card__subtitle"),d=Object(o.e)("v-card__text"),f=Object(o.e)("v-card__title");r.a},494:function(t,e,n){"use strict";n(6),n(10),n(11),n(12);var r=n(2),o=(n(45),n(65),n(29),n(9),n(33),n(68),n(277),n(21),n(37),n(278),n(279),n(280),n(281),n(282),n(283),n(284),n(285),n(286),n(287),n(288),n(289),n(290),n(46),n(7),n(275),n(1)),c=n(90),l=n(0);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],h=["start","end","center"];function x(t,e){return v.reduce((function(n,r){return n[t+Object(l.u)(r)]=e(),n}),{})}var y=function(t){return[].concat(h,["baseline","stretch"]).includes(t)},m=x("align",(function(){return{type:String,default:null,validator:y}})),w=function(t){return[].concat(h,["space-between","space-around"]).includes(t)},_=x("justify",(function(){return{type:String,default:null,validator:w}})),j=function(t){return[].concat(h,["space-between","space-around","stretch"]).includes(t)},O=x("alignContent",(function(){return{type:String,default:null,validator:j}})),C={align:Object.keys(m),justify:Object.keys(_),alignContent:Object.keys(O)},S={align:"align",justify:"justify",alignContent:"align-content"};function I(t,e,n){var r=S[t];if(null!=n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return(r+="-".concat(n)).toLowerCase()}}var k=new Map;e.a=o.default.extend({name:"v-row",functional:!0,props:f(f(f({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:y}},m),{},{justify:{type:String,default:null,validator:w}},_),{},{alignContent:{type:String,default:null,validator:j}},O),render:function(t,e){var n=e.props,data=e.data,o=e.children,l="";for(var d in n)l+=String(n[d]);var f=k.get(l);return f||function(){var t,e;for(e in f=[],C)C[e].forEach((function(t){var r=n[t],o=I(e,t,r);o&&f.push(o)}));f.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r.a)(t,"align-".concat(n.align),n.align),Object(r.a)(t,"justify-".concat(n.justify),n.justify),Object(r.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),k.set(l,f)}(),t(n.tag,Object(c.a)(data,{staticClass:"row",class:f}),o)}})},501:function(t,e,n){var content=n(517);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("3d707e4c",content,!0,{sourceMap:!1})},516:function(t,e,n){"use strict";n(501)},517:function(t,e,n){var r=n(14)(!1);r.push([t.i,".month[data-v-7c7382b6]{font-weight:600;font-size:20px}.year[data-v-7c7382b6]{font-weight:500;font-size:12px}.month-xs[data-v-7c7382b6]{font-weight:600;font-size:32px}.year-xs[data-v-7c7382b6]{font-weight:500;font-size:20px}.main-color[data-v-7c7382b6]{color:#3746fb}.text-line-height[data-v-7c7382b6]{line-height:1.2}.text-nowrap[data-v-7c7382b6]{white-space:nowrap}.history-line[data-v-7c7382b6]{border-top:.5px solid #d3d3d3}.history-line-xs[data-v-7c7382b6]{border-top:1px solid #3746fb}.date-circle[data-v-7c7382b6]{background-color:#3746fb;border-radius:50%;color:#fff;display:flex;flex-direction:column;justify-content:center;align-items:center}#carouselContainer[data-v-7c7382b6]{transition:transform .2s}.circle-sm[data-v-7c7382b6]{width:65px;height:65px}.circle-xs[data-v-7c7382b6]{min-width:110px;min-height:110px;max-width:110px;max-height:110px}",""]),t.exports=r},542:function(t,e,n){"use strict";n.r(e);n(33),n(78);var r={data:function(){return{contents:[{title:"주요 마일스톤 (3rd)",date:"2023.12",body:"'자료조사AI(가칭)' 내부 테스트: 자료조사 ~ 보고서 작성 특화 구조 구축 및 GPT 기반 문서 작성 연구 결과 테스트",left:!1,small:!0,color:"secondary",icon:null},{title:"AI 기술 활용 사업전략 신규 수립",date:"2023.8",body:"GPT 기술 상용화에 따른 신규 사업전략, AI 기술 활용 정보 격차 해소 상용 서비스 계획 수립",left:!0,small:!1,color:"primary",icon:"mdi-robot"},{title:"주요 마일스톤 (2th)",date:"2023.4",body:"난이도 저감 위한 GPT 및 기존 NLP 구조 활용 연구: 어려운 단어 사용에 대한 난이도 등급별 설명 제공 방법",left:!1,small:!0,color:"secondary"},{title:"주요 마일스톤 (1st)",date:"2023.4",body:"사용자 참여 지식 데이터베이스 Semi Open 테스트",left:!1,small:!0,color:"secondary"},{title:"투자 유치 (엔젤 투자)",date:"2022.12",body:"투자가치 평가 약 40억 수준",left:!0,small:!1,color:"primary",icon:"mdi-currency-usd"},{title:"GET-A Inc 설립 (전 쉬운지식 LLC)",date:"2022.10",body:"투자유치 위한 주식회사 설립",left:!0,small:!1,color:"primary",icon:"mdi-play"},{title:"인프라(Cloud Native) 연구 및 구축",date:"2021.10",body:"클라우드 서비스(AWS)를 활용한 대량 이용 대비 웹서비스 인프라 최적화 테스트를 했습니다.",left:!1,small:!0,color:"secondary"},{title:"최초 사업전략 수립",date:"2020.7",body:"어려운 지식, 정보에 대한 쉬운 설명 제공(난이도 저감) 정보기술 연구 및 서비스화",left:!1,small:!0,color:"secondary"},{title:"최초 개발 멤버 구성",date:"2019.7",body:"총 3명으로 구성된 개발 멤버로, 우수한 개발 능력을 갖춘 멤버가 합류함으로써 본격적인 서비스 개발을 구상할 수 있었습니다.",left:!0,small:!1,color:"primary",icon:"mdi-account-multiple-plus"}],carouselStartIndex:0}},created:function(){this.$parent.$on("carousel-action",this.handleCarouselAction)},methods:{splitDate:function(t){return t.split(".")},setTwoNumber:function(t){return t<10?"0"+t:t},handleCarouselAction:function(t){"left"===t?this.calculateIndexToLeft():"right"===t&&this.calculateIndexToRight(),this.$emit("update-carousel-index",this.carouselStartIndex)},calculateIndexToRight:function(){var t=this.contents.length,e=this.$vuetify.breakpoint.smAndUp&&this.carouselStartIndex===t-4,n=this.$vuetify.breakpoint.xsOnly&&this.carouselStartIndex===t-1;e||n||(this.carouselStartIndex=(this.carouselStartIndex+1)%t)},calculateIndexToLeft:function(){if(0!==this.carouselStartIndex){var t=this.contents.length;this.carouselStartIndex=(this.carouselStartIndex-1+t)%t}},checkToRenderIndex:function(t){return this.carouselStartIndex===t}}},o=(n(516),n(54)),c=n(64),l=n.n(c),d=n(474),f=n(273),v=n(485),h=n(494),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"mt-sm-4 mx-0 mr-sm-4 pt-10 pb-sm-5",attrs:{flat:""}},[n("v-card-text",{staticClass:"px-0"},[n("div",{class:t.$vuetify.breakpoint.smAndUp?"history-line":"history-line-xs"}),t._v(" "),t.$vuetify.breakpoint.smAndUp?n("v-col",{staticClass:"d-flex mt-n14 overflow-hidden",attrs:{id:"carouselContainer",cols:"9",offset:"2"}},t._l(t.contents,(function(e,i){return n("v-col",{key:i,style:{transform:"translateX("+100*-t.carouselStartIndex+"%)"},attrs:{cols:"3"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:i>=t.carouselStartIndex,expression:"i >= carouselStartIndex"}],staticClass:"d-flex flex-column"},[n("v-col",{staticClass:"date-circle circle-sm"},t._l(t.splitDate(e.date),(function(e,r){return n("div",{key:e+r},[n("div",{staticClass:"text--white",class:r?"month":"year"},[t._v("\n                "+t._s(r?t.setTwoNumber(e):e)+"\n              ")])])})),0),t._v(" "),n("v-col",{staticClass:"pr-0 pl-5"},[n("div",{staticClass:"text-body-2 font-weight-bold text-nowrap mb-1 main-color"},[t._v("\n              "+t._s(e.title)+"\n            ")]),t._v(" "),n("div",{staticClass:"text-caption text-line-height"},[t._v("\n              "+t._s(e.body)+"\n            ")])])],1)])})),1):t._e(),t._v(" "),t.$vuetify.breakpoint.xsOnly?n("v-row",{staticClass:"mt-n16",attrs:{justify:"center"}},[n("v-col",{staticClass:"d-flex flex-nowrap overflow-hidden",attrs:{cols:"12"}},t._l(t.contents,(function(e,i){return n("v-col",{key:i,staticClass:"text-center px-0 pt-0",style:{transform:"translateX("+100*-t.carouselStartIndex+"%)"},attrs:{cols:"12"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.checkToRenderIndex(i),expression:"checkToRenderIndex(i)"}],staticClass:"d-flex flex-column align-center",attrs:{cols:"12"}},[n("v-col",{staticClass:"date-circle circle-xs",attrs:{cols:"7"}},t._l(t.splitDate(e.date),(function(e,r){return n("div",{key:e+r},[n("div",{class:r?"month-xs mt-1":"year-xs mb-1"},[t._v("\n                  "+t._s(r?t.setTwoNumber(e):e)+"\n                ")])])})),0),t._v(" "),n("v-col",[n("div",{staticClass:"text-body-1 font-weight-bold mb-1"},[t._v("\n                "+t._s(e.title)+"\n              ")]),t._v(" "),n("div",{staticClass:"text-body-2 text-line-height"},[t._v("\n                "+t._s(e.body)+"\n              ")])])],1)])})),1)],1):t._e()],1)],1)}),[],!1,null,"7c7382b6",null);e.default=component.exports;l()(component,{VCard:d.a,VCardText:f.c,VCol:v.a,VRow:h.a})}}]);