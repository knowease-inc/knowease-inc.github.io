(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{428:function(t,n,e){"use strict";e.d(n,"a",(function(){return c})),e.d(n,"b",(function(){return l})),e.d(n,"c",(function(){return f})),e.d(n,"d",(function(){return d}));var r=e(429),o=e(0),c=Object(o.e)("v-card__actions"),l=Object(o.e)("v-card__subtitle"),f=Object(o.e)("v-card__text"),d=Object(o.e)("v-card__title");r.a},446:function(t,n,e){"use strict";e(7),e(11),e(9),e(13);var r=e(2),o=(e(46),e(61),e(33),e(10),e(35),e(67),e(252),e(25),e(41),e(253),e(254),e(255),e(256),e(257),e(258),e(259),e(260),e(261),e(262),e(263),e(264),e(265),e(51),e(8),e(251),e(1)),c=e(86),l=e(0);function f(object,t){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),n.push.apply(n,e)}return n}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(n){Object(r.a)(t,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(source,n))}))}return t}var v=["sm","md","lg","xl"],h=["start","end","center"];function y(t,n){return v.reduce((function(e,r){return e[t+Object(l.q)(r)]=n(),e}),{})}var m=function(t){return[].concat(h,["baseline","stretch"]).includes(t)},j=y("align",(function(){return{type:String,default:null,validator:m}})),O=function(t){return[].concat(h,["space-between","space-around"]).includes(t)},_=y("justify",(function(){return{type:String,default:null,validator:O}})),x=function(t){return[].concat(h,["space-between","space-around","stretch"]).includes(t)},C=y("alignContent",(function(){return{type:String,default:null,validator:x}})),w={align:Object.keys(j),justify:Object.keys(_),alignContent:Object.keys(C)},P={align:"align",justify:"justify",alignContent:"align-content"};function S(t,n,e){var r=P[t];if(null!=e){if(n){var o=n.replace(t,"");r+="-".concat(o)}return(r+="-".concat(e)).toLowerCase()}}var k=new Map;n.a=o.default.extend({name:"v-row",functional:!0,props:d(d(d({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:m}},j),{},{justify:{type:String,default:null,validator:O}},_),{},{alignContent:{type:String,default:null,validator:x}},C),render:function(t,n){var e=n.props,data=n.data,o=n.children,l="";for(var f in e)l+=String(e[f]);var d=k.get(l);return d||function(){var t,n;for(n in d=[],w)w[n].forEach((function(t){var r=e[t],o=S(n,t,r);o&&d.push(o)}));d.push((t={"no-gutters":e.noGutters,"row--dense":e.dense},Object(r.a)(t,"align-".concat(e.align),e.align),Object(r.a)(t,"justify-".concat(e.justify),e.justify),Object(r.a)(t,"align-content-".concat(e.alignContent),e.alignContent),t)),k.set(l,d)}(),t(e.tag,Object(c.a)(data,{staticClass:"row",class:d}),o)}})},452:function(t,n,e){"use strict";e(11),e(10),e(76),e(33),e(266),e(251),e(78),e(91);var r=e(1);var o,c=e(86);n.a=(o="container",r.default.extend({name:"v-".concat(o),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,n){var e=n.props,data=n.data,r=n.children;data.staticClass="".concat(o," ").concat(data.staticClass||"").trim();var c=data.attrs;if(c){data.attrs={};var l=Object.keys(c).filter((function(t){if("slot"===t)return!1;var n=c[t];return t.startsWith("data-")?(data.attrs[t]=n,!1):n||"string"==typeof n}));l.length&&(data.staticClass+=" ".concat(l.join(" ")))}return e.id&&(data.domProps=data.domProps||{},data.domProps.id=e.id),t(e.tag,data,r)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,n){var e,r=n.props,data=n.data,o=n.children,l=data.attrs;return l&&(data.attrs={},e=Object.keys(l).filter((function(t){if("slot"===t)return!1;var n=l[t];return t.startsWith("data-")?(data.attrs[t]=n,!1):n||"string"==typeof n}))),r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),t(r.tag,Object(c.a)(data,{staticClass:"container",class:Array({"container--fluid":r.fluid}).concat(e||[])}),o)}})},461:function(t,n,e){var content=e(478);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(17).default)("5a202e00",content,!0,{sourceMap:!1})},477:function(t,n,e){"use strict";e(461)},478:function(t,n,e){var r=e(16)(!1);r.push([t.i,".expCard[data-v-c14308b4]{font-size:16px!important;font-weight:600!important;color:#4c4c4c!important}.expCardSubTitle[data-v-c14308b4]{font-size:12px!important;font-weight:500!important;line-height:140%}",""]),t.exports=r},493:function(t,n,e){"use strict";e.r(n);e(57),e(9);var r=e(24),o=e(32),c=e(28),l=e(21),f=e(14),d=e(77);function v(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=Object(l.a)(t);if(n){var o=Object(l.a)(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return Object(c.a)(this,e)}}var h=function(t,n,e,desc){var r,o=arguments.length,c=o<3?n:null===desc?desc=Object.getOwnPropertyDescriptor(n,e):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,n,e,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(n,e,c):r(n,e))||c);return o>3&&c&&Object.defineProperty(n,e,c),c},y=function(t){Object(o.a)(e,t);var n=v(e);function e(){var t;return Object(r.a)(this,e),(t=n.apply(this,arguments)).height="200",t.linkBtnColor="primary",t.content={name:"EASYXPLAIN",explanation:"짧고 쉬운 전문/기술용어 설명과 모든 가이드를 얻거나 제공하고 쉽게 설명하는 능력을 인정 받는 플랫폼",href:void 0,shortcut:{name:"(준비중)",href:void 0},introduce:{name:"소개",to:"/service/easyxplain/introduce"},regulations:{name:"규정",to:"/service/easyxplain/regulations"}},t}return e}(d.Vue);h([Object(d.Provide)()],y.prototype,"height",void 0),h([Object(d.Provide)()],y.prototype,"linkBtnColor",void 0),h([Object(d.Provide)()],y.prototype,"content",void 0);var m=y=h([Object(d.Component)({})],y),j=(e(477),e(60)),O=e(75),_=e.n(O),x=e(432),C=e(429),w=e(428),P=e(452),S=e(249),k=e(446),component=Object(j.a)(m,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-card",{attrs:{height:t.height,flat:""}},[!0===t.$vuetify.breakpoint.smAndUp?e("v-img",{staticClass:"d-flex align-center",attrs:{src:"https://cdn.pixabay.com/photo/2017/03/03/13/56/key-2114046_960_720.jpg",height:t.height}},[e("v-container",[e("v-row",{attrs:{justify:"start"}},[e("v-card",{staticClass:"my-0 ml-5 pa-0",attrs:{outlined:"",flat:"","max-width":"345",height:t.height-20}},[e("v-card-actions",{staticClass:"d-flex justify-center mt-4"},[e("v-btn",{attrs:{text:"",href:t.content.href}},[e("v-img",{attrs:{src:"/img/EASYXPLAIN_LOGO.png",height:"25","max-width":"100",contain:""}})],1)],1),t._v(" "),e("v-card-title",{staticClass:"d-flex align-center expCard"},[e("span",{staticClass:"mr-2"},[t._v("\n              "+t._s(t.content.name)+"\n            ")]),t._v(" "),e("v-btn",{attrs:{text:"",small:"",disabled:void 0===t.content.shortcut.href,color:t.linkBtnColor,href:t.content.shortcut.href}},[t._v("\n              "+t._s(t.content.shortcut.name)+"\n            ")]),t._v(" "),e("v-btn",{attrs:{text:"",small:"",color:t.linkBtnColor,to:t.content.introduce.to}},[t._v("\n              "+t._s(t.content.introduce.name)+"\n            ")]),t._v(" "),e("v-btn",{attrs:{text:"",small:"",color:t.linkBtnColor,to:t.content.regulations.to}},[t._v("\n              "+t._s(t.content.regulations.name)+"\n            ")])],1),t._v(" "),e("v-card-subtitle",{staticClass:"expCardSubTitle"},[t._v("\n            "+t._s(t.content.explanation)+"\n          ")])],1)],1)],1)],1):e("v-container",[e("v-row",{attrs:{justify:"center"}},[e("v-card",{staticClass:"my-0 pa-0 pb-3",attrs:{outlined:"",flat:"","max-width":"345"}},[e("v-card-actions",{staticClass:"d-flex justify-center mt-4"},[e("v-btn",{attrs:{text:"",href:t.content.href}},[e("v-img",{attrs:{src:"/img/EASYXPLAIN_LOGO.png",height:"25","max-width":"100",contain:""}})],1)],1),t._v(" "),e("v-card-title",{staticClass:"d-flex align-center expCard"},[e("span",{staticClass:"mr-2"},[t._v("\n            "+t._s(t.content.name)+"\n          ")]),t._v(" "),e("v-btn",{attrs:{text:"","x-small":"",disabled:void 0===t.content.shortcut.href,color:t.linkBtnColor,href:t.content.shortcut.href}},[t._v("\n            "+t._s(t.content.shortcut.name)+"\n          ")]),t._v(" "),e("v-btn",{attrs:{text:"","x-small":"",color:t.linkBtnColor,to:t.content.introduce.to}},[t._v("\n            "+t._s(t.content.introduce.name)+"\n          ")]),t._v(" "),e("v-btn",{attrs:{text:"","x-small":"",color:t.linkBtnColor,to:t.content.regulations.to}},[t._v("\n            "+t._s(t.content.regulations.name)+"\n          ")])],1),t._v(" "),e("v-card-subtitle",{staticClass:"expCardSubTitle"},[t._v("\n          "+t._s(t.content.explanation)+"\n        ")])],1)],1)],1)],1)}),[],!1,null,"c14308b4",null);n.default=component.exports;_()(component,{VBtn:x.a,VCard:C.a,VCardActions:w.a,VCardSubtitle:w.b,VCardTitle:w.d,VContainer:P.a,VImg:S.a,VRow:k.a})}}]);