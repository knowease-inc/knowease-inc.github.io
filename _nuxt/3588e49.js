(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{492:function(t,e,r){var content=r(493);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("7132a15d",content,!0,{sourceMap:!1})},493:function(t,e,r){var n=r(14)(!1);n.push([t.i,".theme--light.v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-divider{border-color:hsla(0,0%,100%,.12)}.v-divider{display:block;flex:1 1 0px;max-width:100%;height:0;max-height:0;border:solid;border-width:thin 0 0;transition:inherit}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px)}.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical){margin-left:72px}.v-application--is-rtl .v-divider--inset:not(.v-divider--vertical){margin-right:72px}.v-divider--vertical{align-self:stretch;border:solid;border-width:0 thin 0 0;display:inline-flex;height:inherit;min-height:100%;max-height:100%;max-width:0;width:0;vertical-align:text-bottom;margin:0 -1px}.v-divider--vertical.v-divider--inset{margin-top:8px;min-height:0;max-height:calc(100% - 16px)}",""]),t.exports=n},498:function(t,e,r){var content=r(512);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("ba07523c",content,!0,{sourceMap:!1})},499:function(t,e,r){"use strict";r(9),r(6),r(10),r(11),r(7),r(12);var n=r(2),o=(r(492),r(30));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=o.a.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:l({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:l({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})},511:function(t,e,r){"use strict";r(498)},512:function(t,e,r){var n=r(14)(!1);n.push([t.i,".contentTitle[data-v-3aad8c73],.contentTitleFirst[data-v-3aad8c73]{font-size:20px;font-weight:800}.contentTitleFirst[data-v-3aad8c73]{color:#3746fb}.contentText[data-v-3aad8c73]{font-size:15px;font-weight:600}.contentSubText[data-v-3aad8c73]{font-size:13px;font-weight:400;color:#5a5a5a}",""]),t.exports=n},536:function(t,e,r){"use strict";r.r(e);r(90),r(11);var n=r(27),o=r(43),c=r(36),l=r(25),d=r(19),v=r(495);function f(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(c.a)(this,r)}}var h=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},x=function(t){Object(o.a)(r,t);var e=f(r);function r(){var t;return Object(n.a)(this,r),(t=e.apply(this,arguments)).items=[{title:"Easy",content:"최상위 가치는 '쉬움'입니다.",subcontent:"시작할 수 있어야 다음이 있잖아요."},{title:"Short",content:"사용 과정은 짧은 것이 기본입니다.",subcontent:"'필요할 수 있는 기능'은 필요한 경우가 아니면 복잡함일 뿐이죠."},{title:"Accessible",content:"'모두'가 쉽게 접근할 수 있는지 고려합니다.",subcontent:"그게 좋잖아요."},{title:"Yours",content:"사용자가 제공해준 것을 잊지 않습니다.",subcontent:"사용자가 준 데이터라면, 그 보답도 있어야죠."}],t}return r}(v.Vue);h([Object(v.Provide)()],x.prototype,"items",void 0);var y=x=h([Object(v.Component)({})],x),m=(r(511),r(54)),O=r(64),j=r.n(O),w=r(474),_=r(273),C=r(485),P=r(499),R=r(491),component=Object(m.a)(y,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",{attrs:{"no-gutters":""}},t._l(t.items,(function(e,n){return r("v-col",{key:n,attrs:{cols:"12",sm:"6"}},[r("v-card",{staticClass:"my-1 d-flex flex-column",attrs:{justify:"center",flat:""}},[r("v-card-text",{staticClass:"pa-0"},[r("div",{staticClass:"contentTitle contentTitleFirst mb-2"},[t._v("\n          "+t._s(e.title)+"\n        ")])]),t._v(" "),r("v-divider",{staticClass:"mr-2"}),t._v(" "),r("v-card-text",{staticClass:"px-1 py-2 py-sm-4"},[r("div",{staticClass:"contentText"},[t._v("\n          "+t._s(e.content)+"\n        ")]),t._v(" "),r("div",{staticClass:"contentSubText"},[t._v("\n          "+t._s(e.subcontent)+"\n        ")])])],1)],1)})),1)}),[],!1,null,"3aad8c73",null);e.default=component.exports;j()(component,{VCard:w.a,VCardText:_.c,VCol:C.a,VDivider:P.a,VRow:R.a})}}]);