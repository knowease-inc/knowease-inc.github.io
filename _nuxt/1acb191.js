(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{492:function(t,e,r){var content=r(493);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("7132a15d",content,!0,{sourceMap:!1})},493:function(t,e,r){var o=r(14)(!1);o.push([t.i,".theme--light.v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-divider{border-color:hsla(0,0%,100%,.12)}.v-divider{display:block;flex:1 1 0px;max-width:100%;height:0;max-height:0;border:solid;border-width:thin 0 0;transition:inherit}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px)}.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical){margin-left:72px}.v-application--is-rtl .v-divider--inset:not(.v-divider--vertical){margin-right:72px}.v-divider--vertical{align-self:stretch;border:solid;border-width:0 thin 0 0;display:inline-flex;height:inherit;min-height:100%;max-height:100%;max-width:0;width:0;vertical-align:text-bottom;margin:0 -1px}.v-divider--vertical.v-divider--inset{margin-top:8px;min-height:0;max-height:calc(100% - 16px)}",""]),t.exports=o},498:function(t,e,r){"use strict";r(9),r(6),r(10),r(11),r(7),r(12);var o=r(2),n=(r(492),r(30));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=n.a.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:c({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:c({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})},530:function(t,e,r){var content=r(581);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("4836de24",content,!0,{sourceMap:!1})},580:function(t,e,r){"use strict";r(530)},581:function(t,e,r){var o=r(14)(!1);o.push([t.i,".upperText[data-v-73e92c10]{font-weight:800;font-size:32px}.upperText[data-v-73e92c10],.upperText-xsonly[data-v-73e92c10]{text-shadow:-1px 0 #323232,0 1px #323232,1px 0 #323232,0 -1px #323232}.upperText-xsonly[data-v-73e92c10]{font-weight:600;font-size:18px}.lowerText[data-v-73e92c10]{font-size:16px;font-weight:700}.lowerText[data-v-73e92c10],.lowerText-xsonly[data-v-73e92c10]{text-shadow:-1px 0 #323232,0 1px #323232,1px 0 #323232,0 -1px #323232}.lowerText-xsonly[data-v-73e92c10]{font-size:14px;font-weight:400}",""]),t.exports=o},593:function(t,e,r){"use strict";r.r(e);var o={data:function(){return{carouselHeight:"280",cycleInterval:"15000",effect:{reverse:void 0,transition:void 0},items:[{src:"https://cdn.pixabay.com/photo/2012/03/01/01/42/hands-20333_960_720.jpg",text:{upper:"누구든지 쉽고 빠르게<br />AI 기술 통한 자료조사, 보고서 초안 작성",lower:"작업은 간소화하고 조사량은 늘리고, 놓치지 않는 자료 출처까지<br />업무 효율을 극대화하세요"}}]}}},n=(r(580),r(54)),l=r(64),c=r.n(l),d=r(474),v=r(488),h=r(489),x=r(498),f=r(118),m=r(89),w=r(52),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{attrs:{flat:"",tile:"",outlined:""}},[r("v-carousel",{attrs:{"hide-delimiters":"","show-arrows":!1,height:t.carouselHeight,interval:t.cycleInterval}},t._l(t.items,(function(e,i){return r("v-carousel-item",{key:i,attrs:{src:e.src,"reverse-transition":t.effect.reverse,transition:t.effect.transition}},[r("v-sheet",{staticClass:"d-flex justify-start align-center pa-4",attrs:{height:"100%",color:"rgba(0,0,0,0)"}},[r("v-card",{attrs:{color:"rgba(0,0,0,0)",flat:"",tile:""}},[r("v-list-item",{attrs:{"two-line":""}},[!0===t.$vuetify.breakpoint.xsOnly?r("v-list-item-content",[r("div",{staticClass:"upperText-xsonly"},[r("p",{staticClass:"upperText",domProps:{innerHTML:t._s(e.text.upper)}})]),t._v(" "),r("v-divider",{staticClass:"mt-3 mb-4"}),t._v(" "),r("div",{staticClass:"lowerText-xsonly"},[r("p",{staticClass:"lowerText",domProps:{innerHTML:t._s(e.text.lower)}})])],1):r("v-list-item-content",[r("p",{staticClass:"upperText",domProps:{innerHTML:t._s(e.text.upper)}}),t._v(" "),r("v-divider",{staticClass:"mt-3 mb-4"}),t._v(" "),r("p",{staticClass:"lowerText",domProps:{innerHTML:t._s(e.text.lower)}})],1)],1)],1)],1)],1)})),1)],1)}),[],!1,null,"73e92c10",null);e.default=component.exports;c()(component,{VCard:d.a,VCarousel:v.a,VCarouselItem:h.a,VDivider:x.a,VListItem:f.a,VListItemContent:m.a,VSheet:w.a})}}]);