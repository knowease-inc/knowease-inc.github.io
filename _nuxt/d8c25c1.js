(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{464:function(t,n,e){"use strict";e.d(n,"a",(function(){return c})),e.d(n,"b",(function(){return l})),e.d(n,"c",(function(){return d})),e.d(n,"d",(function(){return f}));var r=e(465),o=e(0),c=Object(o.e)("v-card__actions"),l=Object(o.e)("v-card__subtitle"),d=Object(o.e)("v-card__text"),f=Object(o.e)("v-card__title");r.a},482:function(t,n,e){"use strict";e(7),e(11),e(9),e(13);var r=e(2),o=(e(46),e(64),e(32),e(10),e(36),e(68),e(271),e(23),e(39),e(272),e(273),e(274),e(275),e(276),e(277),e(278),e(279),e(280),e(281),e(282),e(283),e(284),e(47),e(8),e(270),e(1)),c=e(88),l=e(0);function d(object,t){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),n.push.apply(n,e)}return n}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(n){Object(r.a)(t,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(source,n))}))}return t}var v=["sm","md","lg","xl"],h=["start","end","center"];function y(t,n){return v.reduce((function(e,r){return e[t+Object(l.u)(r)]=n(),e}),{})}var m=function(t){return[].concat(h,["baseline","stretch"]).includes(t)},j=y("align",(function(){return{type:String,default:null,validator:m}})),O=function(t){return[].concat(h,["space-between","space-around"]).includes(t)},_=y("justify",(function(){return{type:String,default:null,validator:O}})),x=function(t){return[].concat(h,["space-between","space-around","stretch"]).includes(t)},C=y("alignContent",(function(){return{type:String,default:null,validator:x}})),w={align:Object.keys(j),justify:Object.keys(_),alignContent:Object.keys(C)},P={align:"align",justify:"justify",alignContent:"align-content"};function S(t,n,e){var r=P[t];if(null!=e){if(n){var o=n.replace(t,"");r+="-".concat(o)}return(r+="-".concat(e)).toLowerCase()}}var k=new Map;n.a=o.default.extend({name:"v-row",functional:!0,props:f(f(f({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:m}},j),{},{justify:{type:String,default:null,validator:O}},_),{},{alignContent:{type:String,default:null,validator:x}},C),render:function(t,n){var e=n.props,data=n.data,o=n.children,l="";for(var d in e)l+=String(e[d]);var f=k.get(l);return f||function(){var t,n;for(n in f=[],w)w[n].forEach((function(t){var r=e[t],o=S(n,t,r);o&&f.push(o)}));f.push((t={"no-gutters":e.noGutters,"row--dense":e.dense},Object(r.a)(t,"align-".concat(e.align),e.align),Object(r.a)(t,"justify-".concat(e.justify),e.justify),Object(r.a)(t,"align-content-".concat(e.alignContent),e.alignContent),t)),k.set(l,f)}(),t(e.tag,Object(c.a)(data,{staticClass:"row",class:f}),o)}})},484:function(t,n,e){"use strict";e(11),e(10),e(78),e(32),e(285),e(270),e(80),e(92);var r=e(1);var o,c=e(88);n.a=(o="container",r.default.extend({name:"v-".concat(o),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,n){var e=n.props,data=n.data,r=n.children;data.staticClass="".concat(o," ").concat(data.staticClass||"").trim();var c=data.attrs;if(c){data.attrs={};var l=Object.keys(c).filter((function(t){if("slot"===t)return!1;var n=c[t];return t.startsWith("data-")?(data.attrs[t]=n,!1):n||"string"==typeof n}));l.length&&(data.staticClass+=" ".concat(l.join(" ")))}return e.id&&(data.domProps=data.domProps||{},data.domProps.id=e.id),t(e.tag,data,r)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,n){var e,r=n.props,data=n.data,o=n.children,l=data.attrs;return l&&(data.attrs={},e=Object.keys(l).filter((function(t){if("slot"===t)return!1;var n=l[t];return t.startsWith("data-")?(data.attrs[t]=n,!1):n||"string"==typeof n}))),r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),t(r.tag,Object(c.a)(data,{staticClass:"container",class:Array({"container--fluid":r.fluid}).concat(e||[])}),o)}})},499:function(t,n,e){var content=e(521);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(17).default)("ae810d6c",content,!0,{sourceMap:!1})},520:function(t,n,e){"use strict";e(499)},521:function(t,n,e){var r=e(16)(!1);r.push([t.i,".expCard[data-v-60144d48]{font-size:16px!important;font-weight:600!important;color:#4c4c4c!important}.expCardSubTitle[data-v-60144d48]{font-size:12px!important;font-weight:500!important;line-height:140%}",""]),t.exports=r},540:function(t,n,e){"use strict";e.r(n);e(58),e(9);var r=e(25),o=e(33),c=e(28),l=e(21),d=e(14),f=e(79);function v(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=Object(l.a)(t);if(n){var o=Object(l.a)(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return Object(c.a)(this,e)}}var h=function(t,n,e,desc){var r,o=arguments.length,c=o<3?n:null===desc?desc=Object.getOwnPropertyDescriptor(n,e):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,n,e,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(n,e,c):r(n,e))||c);return o>3&&c&&Object.defineProperty(n,e,c),c},y=function(t){Object(o.a)(e,t);var n=v(e);function e(){var t;return Object(r.a)(this,e),(t=n.apply(this,arguments)).height="200",t.linkBtnColor="primary",t.content={name:"EASYXPLAIN",explanation:"짧고 쉬운 전문/기술용어 설명과 모든 가이드를 얻거나 제공하고 쉽게 설명하는 능력을 인정 받는 플랫폼",href:void 0,shortcut:{name:"바로가기",href:"https://ko.easyxplain.com/"},introduce:{name:"소개",to:"/service/easyxplain/introduce"},regulations:{name:"규정",to:"/service/easyxplain/regulations"}},t}return e}(f.Vue);h([Object(f.Provide)()],y.prototype,"height",void 0),h([Object(f.Provide)()],y.prototype,"linkBtnColor",void 0),h([Object(f.Provide)()],y.prototype,"content",void 0);var m=y=h([Object(f.Component)({})],y),j=(e(520),e(63)),O=e(77),_=e.n(O),x=e(470),C=e(465),w=e(464),P=e(484),S=e(268),k=e(482),component=Object(j.a)(m,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-card",{attrs:{height:t.height,flat:""}},[!0===t.$vuetify.breakpoint.smAndUp?e("v-img",{staticClass:"d-flex align-center",attrs:{src:"https://cdn.pixabay.com/photo/2017/03/03/13/56/key-2114046_960_720.jpg",height:t.height}},[e("v-container",[e("v-row",{attrs:{justify:"start"}},[e("v-card",{staticClass:"my-0 ml-5 pa-0",attrs:{outlined:"",flat:"","max-width":"345",height:t.height-20}},[e("v-card-actions",{staticClass:"d-flex justify-center mt-4"},[e("v-btn",{attrs:{text:"",href:t.content.href}},[e("v-img",{attrs:{src:"/img/EASYXPLAIN_LOGO.png",height:"25","max-width":"100",contain:""}})],1)],1),t._v(" "),e("v-card-title",{staticClass:"d-flex align-center expCard"},[e("span",{staticClass:"mr-2"},[t._v("\n              "+t._s(t.content.name)+"\n            ")]),t._v(" "),e("v-btn",{attrs:{text:"",small:"",disabled:void 0===t.content.shortcut.href,color:t.linkBtnColor,href:t.content.shortcut.href}},[t._v("\n              "+t._s(t.content.shortcut.name)+"\n            ")]),t._v(" "),e("v-btn",{attrs:{text:"",small:"",color:t.linkBtnColor,to:t.content.introduce.to}},[t._v("\n              "+t._s(t.content.introduce.name)+"\n            ")]),t._v(" "),e("v-btn",{attrs:{text:"",small:"",color:t.linkBtnColor,to:t.content.regulations.to}},[t._v("\n              "+t._s(t.content.regulations.name)+"\n            ")])],1),t._v(" "),e("v-card-subtitle",{staticClass:"expCardSubTitle"},[t._v("\n            "+t._s(t.content.explanation)+"\n          ")])],1)],1)],1)],1):e("v-container",[e("v-row",{attrs:{justify:"center"}},[e("v-card",{staticClass:"my-0 pa-0 pb-3",attrs:{outlined:"",flat:"","max-width":"345"}},[e("v-card-actions",{staticClass:"d-flex justify-center mt-4"},[e("v-btn",{attrs:{text:"",href:t.content.href}},[e("v-img",{attrs:{src:"/img/EASYXPLAIN_LOGO.png",height:"25","max-width":"100",contain:""}})],1)],1),t._v(" "),e("v-card-title",{staticClass:"d-flex align-center expCard"},[e("span",{staticClass:"mr-2"},[t._v("\n            "+t._s(t.content.name)+"\n          ")]),t._v(" "),e("v-btn",{attrs:{text:"","x-small":"",disabled:void 0===t.content.shortcut.href,color:t.linkBtnColor,href:t.content.shortcut.href}},[t._v("\n            "+t._s(t.content.shortcut.name)+"\n          ")]),t._v(" "),e("v-btn",{attrs:{text:"","x-small":"",color:t.linkBtnColor,to:t.content.introduce.to}},[t._v("\n            "+t._s(t.content.introduce.name)+"\n          ")]),t._v(" "),e("v-btn",{attrs:{text:"","x-small":"",color:t.linkBtnColor,to:t.content.regulations.to}},[t._v("\n            "+t._s(t.content.regulations.name)+"\n          ")])],1),t._v(" "),e("v-card-subtitle",{staticClass:"expCardSubTitle"},[t._v("\n          "+t._s(t.content.explanation)+"\n        ")])],1)],1)],1)],1)}),[],!1,null,"60144d48",null);n.default=component.exports;_()(component,{VBtn:x.a,VCard:C.a,VCardActions:w.a,VCardSubtitle:w.b,VCardTitle:w.d,VContainer:P.a,VImg:S.a,VRow:k.a})}}]);