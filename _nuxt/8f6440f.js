(window.webpackJsonp=window.webpackJsonp||[]).push([[17,5,6,7],{273:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return d})),n.d(e,"d",(function(){return f}));var o=n(474),r=n(0),l=Object(r.e)("v-card__actions"),c=Object(r.e)("v-card__subtitle"),d=Object(r.e)("v-card__text"),f=Object(r.e)("v-card__title");o.a},491:function(t,e,n){"use strict";n(6),n(10),n(11),n(12);var o=n(2),r=(n(45),n(65),n(29),n(9),n(33),n(68),n(276),n(21),n(37),n(277),n(278),n(279),n(280),n(281),n(282),n(283),n(284),n(285),n(286),n(287),n(288),n(289),n(46),n(7),n(275),n(1)),l=n(88),c=n(0);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],h=["start","end","center"];function m(t,e){return v.reduce((function(n,o){return n[t+Object(c.u)(o)]=e(),n}),{})}var x=function(t){return[].concat(h,["baseline","stretch"]).includes(t)},y=m("align",(function(){return{type:String,default:null,validator:x}})),_=function(t){return[].concat(h,["space-between","space-around"]).includes(t)},C=m("justify",(function(){return{type:String,default:null,validator:_}})),w=function(t){return[].concat(h,["space-between","space-around","stretch"]).includes(t)},k=m("alignContent",(function(){return{type:String,default:null,validator:w}})),S={align:Object.keys(y),justify:Object.keys(C),alignContent:Object.keys(k)},A={align:"align",justify:"justify",alignContent:"align-content"};function j(t,e,n){var o=A[t];if(null!=n){if(e){var r=e.replace(t,"");o+="-".concat(r)}return(o+="-".concat(n)).toLowerCase()}}var I=new Map;e.a=r.default.extend({name:"v-row",functional:!0,props:f(f(f({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:x}},y),{},{justify:{type:String,default:null,validator:_}},C),{},{alignContent:{type:String,default:null,validator:w}},k),render:function(t,e){var n=e.props,data=e.data,r=e.children,c="";for(var d in n)c+=String(n[d]);var f=I.get(c);return f||function(){var t,e;for(e in f=[],S)S[e].forEach((function(t){var o=n[t],r=j(e,t,o);r&&f.push(r)}));f.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(o.a)(t,"align-".concat(n.align),n.align),Object(o.a)(t,"justify-".concat(n.justify),n.justify),Object(o.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),I.set(c,f)}(),t(n.tag,Object(l.a)(data,{staticClass:"row",class:f}),r)}})},494:function(t,e,n){"use strict";n(10),n(9),n(76),n(29),n(291),n(275),n(77),n(95);var o=n(1);var r,l=n(88);e.a=(r="container",o.default.extend({name:"v-".concat(r),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,e){var n=e.props,data=e.data,o=e.children;data.staticClass="".concat(r," ").concat(data.staticClass||"").trim();var l=data.attrs;if(l){data.attrs={};var c=Object.keys(l).filter((function(t){if("slot"===t)return!1;var e=l[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}));c.length&&(data.staticClass+=" ".concat(c.join(" ")))}return n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),t(n.tag,data,o)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var n,o=e.props,data=e.data,r=e.children,c=data.attrs;return c&&(data.attrs={},n=Object.keys(c).filter((function(t){if("slot"===t)return!1;var e=c[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),o.id&&(data.domProps=data.domProps||{},data.domProps.id=o.id),t(o.tag,Object(l.a)(data,{staticClass:"container",class:Array({"container--fluid":o.fluid}).concat(n||[])}),r)}})},502:function(t,e,n){var content=n(520);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("02872371",content,!0,{sourceMap:!1})},503:function(t,e,n){var content=n(522);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("97d150f0",content,!0,{sourceMap:!1})},504:function(t,e,n){var content=n(524);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("6762f5cd",content,!0,{sourceMap:!1})},519:function(t,e,n){"use strict";n(502)},520:function(t,e,n){var o=n(14)(!1);o.push([t.i,".position-relative[data-v-7f464c80]{position:relative}.inside-logo-img[data-v-7f464c80]{position:absolute;left:27%;top:22%}",""]),t.exports=o},521:function(t,e,n){"use strict";n(503)},522:function(t,e,n){var o=n(14)(!1);o.push([t.i,".v-btn__content{text-transform:none}.position-relative{position:relative}.profile-top{background-color:#2979ff;color:#fff;height:200px;width:300px;border-radius:50%;top:-16%;left:-18%}.profile-bottom,.profile-top{position:absolute;display:flex;align-items:center;justify-content:center;flex-direction:column}.profile-bottom{height:140px;width:220px;bottom:0}.profile-left{background-color:#2979ff;color:#fff;height:220px;width:230px;border-radius:30%/70%;top:-8px;left:-22%}.profile-left,.profile-right{position:absolute;display:flex;align-items:center;justify-content:center;flex-direction:column}.profile-right{height:200px;width:220px;right:-.5rem;text-align:right}.advisor-headline-color{color:#a6a6a6}.profile-headline-color{color:#accbff}.line-change{width:200px;word-break:keep-all}.line-change-xs{width:10rem;word-break:keep-all}",""]),t.exports=o},523:function(t,e,n){"use strict";n(504)},524:function(t,e,n){var o=n(14)(!1);o.push([t.i,".month[data-v-120b15fc]{font-weight:600;font-size:20px}.year[data-v-120b15fc]{font-weight:500;font-size:12px}.month-xs[data-v-120b15fc]{font-weight:600;font-size:32px}.year-xs[data-v-120b15fc]{font-weight:500;font-size:20px}.main-color[data-v-120b15fc]{color:#2979ff}.text-line-height[data-v-120b15fc]{line-height:1.2}.text-nowrap[data-v-120b15fc]{white-space:nowrap}.history-line[data-v-120b15fc]{border-top:.5px solid #fff}.white-circle[data-v-120b15fc]{background-color:#fff;border-radius:50%;display:flex;flex-direction:column;justify-content:center;align-items:center}#carouselContainer[data-v-120b15fc]{transition:transform .2s}.circle-sm[data-v-120b15fc]{width:65px;height:65px}.circle-xs[data-v-120b15fc]{min-width:110px;min-height:110px;max-width:110px;max-height:110px}",""]),t.exports=o},530:function(t,e,n){var content=n(582);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("18abf012",content,!0,{sourceMap:!1})},539:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{linkBtnColor:"#2979ff",content:{name:"미닛",explanation:"자료조사부터 보고서 초안 작성, 완성까지 함께하는 GPT 기반 인공지능(AI, Artificial Intelligence) 서비스",href:void 0,shortcut:{name:"(준비중)",href:void 0},introduce:{name:"서비스 소개",to:"/service/meaniit/introduce"}},btnInServiceCard:{minWidth:0,paddingLeft:0}}},computed:{setContainerHeight:function(){return this.$vuetify.breakpoint.xsOnly?"450":"245"}}},r=(n(519),n(54)),l=n(64),c=n.n(l),d=n(191),f=n(474),v=n(273),h=n(272),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"d-flex flex-sm-row align-sm-start justify-sm-center px-sm-9 my-sm-7 flex-column align-center justify-start rounded-xl overflow-hidden pt-7 px-1",attrs:{height:t.setContainerHeight}},[n("v-card",{staticClass:"my-sm-auto my-0 mr-sm-9 pa-0 pb-3",attrs:{"max-width":"345",flat:""}},[n("v-card-title",{staticClass:"font-weight-bold mb-sm-1 mb-2 pt-0"},[t._v("\n      미닛\n    ")]),t._v(" "),n("v-card-subtitle",{staticClass:"expCardSubTitle",class:t.$vuetify.breakpoint.smAndUp?"":"text-body-2",style:{ineHeight:t.$vuetify.breakpoint.smAndUp?"1.4":""}},[t._v("\n      "+t._s(t.content.explanation)+"\n    ")]),t._v(" "),t.$vuetify.breakpoint.smAndUp?n("v-card-actions",{staticClass:"d-flex align-center"},[n("v-btn",{staticClass:"px-4",style:t.btnInServiceCard,attrs:{disabled:void 0===t.content.shortcut.href,color:t.linkBtnColor,href:t.content.shortcut.href,rounded:"",small:""}},[t._v("\n        "+t._s(t.content.shortcut.name)+"\n      ")]),t._v(" "),n("v-btn",{staticClass:"px-4",style:t.btnInServiceCard,attrs:{color:t.linkBtnColor,to:t.content.introduce.to,outlined:"",rounded:"",small:""}},[t._v("\n        "+t._s(t.content.introduce.name)+"\n      ")])],1):t._e(),t._v(" "),t.$vuetify.breakpoint.xsOnly?n("v-card-title",{staticClass:"d-flex align-center"},[n("v-btn",{staticClass:"mb-2",style:t.btnInServiceCard,attrs:{disabled:void 0===t.content.shortcut.href,color:t.linkBtnColor,href:t.content.shortcut.href,block:"",rounded:""}},[t._v("\n        "+t._s(t.content.shortcut.name)+"\n      ")]),t._v(" "),n("v-btn",{staticClass:"px-7",style:t.btnInServiceCard,attrs:{outlined:"",rounded:"",color:t.linkBtnColor,to:t.content.introduce.to}},[t._v("\n        "+t._s(t.content.introduce.name)+"\n      ")])],1):t._e()],1),t._v(" "),n("v-img",{staticClass:"mt-3 position-relative",attrs:{src:"/img/mobile_img.png","max-width":"200"}},[n("v-img",{staticClass:"inside-logo-img",attrs:{src:"https://dmq1lrjfpg713.cloudfront.net/img/logo.png",height:"30","max-width":"100",contain:""}})],1)],1)}),[],!1,null,"7f464c80",null);e.default=component.exports;c()(component,{VBtn:d.a,VCard:f.a,VCardActions:v.a,VCardSubtitle:v.b,VCardTitle:v.d,VImg:h.a})},540:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{members:[{name:"SUNGHYUN KIM",avatar:"https://media.licdn.com/dms/image/D4D03AQGdlvHZJ2mJ5w/profile-displayphoto-shrink_200_200/0/1698296734296?e=2147483647&v=beta&t=6ALNzwS5oEl41WyQ-5JEKBzLT9HCOsSQR5cmzU24feg",headline:"Data Architect | Entrepreneur",companyAndSchoolInfo:"Treasure Data | Hankuk University of Foreign Studies",link:"https://jp.linkedin.com/in/tooget/ko?trk=public-profile-badge-profile-badge-view-profile-cta"},{name:"Yoon Soo Choi",avatar:"https://media.licdn.com/dms/image/C5603AQHSSZa5p-U3-A/profile-displayphoto-shrink_200_200/0/1608736555680?e=2147483647&v=beta&t=cGoqWOKxZb4PD9fOzQRYfrn0SeeC8aTAVLYUFAQrr_Y",headline:"Financial Data Engineering & Analytics",companyAndSchoolInfo:"Kyobo Securities | 한국외국어대학교",link:"https://kr.linkedin.com/in/ys0101?trk=public-profile-badge-profile-badge-view-profile-cta"},{name:"박성묵",avatar:"https://media.licdn.com/dms/image/D5603AQHeaxjIDJz5kQ/profile-displayphoto-shrink_200_200/0/1666582082157?e=2147483647&v=beta&t=8QqaIh8F0Mp6KkaJ7VWXReu6Yax6BjIuE0p-D4k0DfA",headline:"GET-A Inc CEO & Founder / 개발",companyAndSchoolInfo:"(주)게타 스타트업 경영 및 '미닛' 서비스 개발 전략",link:"https://kr.linkedin.com/in/%EC%84%B1%EB%AC%B5-%EB%B0%95-34a0a2135?trk=public-profile-badge-profile-badge-view-profile-cta"},{name:"구본승",avatar:"https://static.licdn.com/sc/h/244xhbkr7g40x6bsu4gi6q4ry",headline:"GET-A Investor / 전략",companyAndSchoolInfo:"(주)게타 '미닛' 서비스 전략 설정 및 시장 조사",link:""},{name:"이세영",avatar:"https://media.licdn.com/dms/image/D4E03AQGtAmUFlJ7PRg/profile-displayphoto-shrink_800_800/0/1671090034757?e=1715817600&v=beta&t=3I97flB4rFY0etxvBanawbvDMmHL3hph2J81LYEOg4s",headline:"GET-A / 프론트엔드",companyAndSchoolInfo:" '미닛' 서비스 개발 전략",link:"https://kr.linkedin.com/in/%EC%84%B8%EC%98%81-%EC%9D%B4-00a55825a?trk=profile-badge"},{name:"오지나",avatar:"https://media.licdn.com/dms/image/D5603AQEquY1xJzsGNg/profile-displayphoto-shrink_800_800/0/1709842659907?e=1715817600&v=beta&t=gPckLfYc717ooTKf3rCSyOy5XIJ1cNhOmGhGsFUgHkc",headline:"GET-A / 백엔드",companyAndSchoolInfo:" '미닛' 서비스 개발 전략",link:"https://kr.linkedin.com/in/jina5?trk=profile-badge"}],advisors:[{name:"Hyuncheol Shin",avatar:"https://static.licdn.com/sc/h/244xhbkr7g40x6bsu4gi6q4ry",headline:"Derivatives Quant / Algorithmic Trader",companyAndSchoolInfo:"'미닛' 서비스 개발 자문",link:"https://www.linkedin.com/in/hyuncheol-shin-asdf123123/?trk=public-profile-badge-profile-badge-view-profile-cta&originalSubdomain=kr"}]}}},r=(n(521),n(54)),l=n(64),c=n.n(l),d=n(189),f=n(191),v=n(474),h=n(273),m=n(485),x=n(272),y=n(491),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("script",{tag:"component",attrs:{type:"text/javascript",src:"https://platform.linkedin.com/badges/js/profile.js",async:"",defer:""}}),t._v(" "),n("v-row",{staticClass:"mx-0 mb-3 pa-0",attrs:{"no-gutters":""}},[n("span",{staticClass:"text-body-1 font-weight-medium"},[t._v(" Team ")])]),t._v(" "),n("v-row",{staticClass:"ma-0 pa-0",attrs:{"justify-sm":"start",justify:"center","no-gutters":""}},t._l(t.members,(function(e,i){var o=e.name,r=e.headline,l=e.avatar,c=e.companyAndSchoolInfo,link=e.link;return n("v-col",{key:i,staticClass:"mt-0 pa-0",attrs:{cols:"12",sm:"5",md:"4",lg:"3"}},[n("v-card",{staticClass:"overflow-hidden rounded-xl position-relative mb-5",attrs:{height:t.$vuetify.breakpoint.smAndUp?"280":"200",width:t.$vuetify.breakpoint.smAndUp?"220":"420",flat:"",elevation:"2"}},[t.$vuetify.breakpoint.smAndUp?n("div",{staticClass:"profile-top"},[n("div",{staticClass:"mt-10 pb-4"},[n("v-avatar",{attrs:{size:"60"}},[n("img",{attrs:{src:l,alt:o}})])],1),t._v(" "),n("div",{staticClass:"text-body-2 font-weight-bold"},[t._v(t._s(o))]),t._v(" "),n("div",{staticClass:"text-caption profile-headline-color line-change text-center",staticStyle:{"line-height":"1.2"}},[t._v("\n            "+t._s(r)+"\n          ")])]):t._e(),t._v(" "),t.$vuetify.breakpoint.smAndUp?n("div",{staticClass:"profile-bottom"},[n("v-card-text",{staticClass:"text-center pt-0 mt-n3 text-body-2 gray--text line-change"},[t._v("\n            "+t._s(c)+"\n          ")]),t._v(" "),n("v-btn",{staticStyle:{bottom:"10%"},attrs:{rounded:"",outlined:"",absolute:"",small:"",color:"#2979ff",href:link,disabled:!link}},[t._v("\n            View profile\n          ")])],1):t._e(),t._v(" "),t.$vuetify.breakpoint.xsOnly?n("div",{staticClass:"profile-left pl-8 mt-2",staticStyle:{height:"100%"}},[n("div",{staticClass:"ml-7"},[n("v-avatar",{attrs:{size:"70"}},[n("img",{attrs:{src:l,alt:o}})])],1),t._v(" "),n("div",{staticClass:"text-body-1 font-weight-bold pl-6 my-1"},[t._v(t._s(o))]),t._v(" "),n("div",{staticClass:"text-body-2 profile-headline-color pr-0 pl-8 line-change-xs text-center",staticStyle:{"line-height":"1.2"}},[t._v("\n            "+t._s(r)+"\n          ")])]):t._e(),t._v(" "),t.$vuetify.breakpoint.xsOnly?n("div",{staticClass:"profile-right mt-n3",staticStyle:{height:"90%"}},[n("v-card-text",{staticClass:"text-right text-body-2 gray--text line-change-xs pr-0 mr-n7 pl-6",staticStyle:{"line-height":"1.6"}},[t._v("\n            "+t._s(c)+"\n          ")]),t._v(" "),n("v-btn",{staticStyle:{bottom:"0%",right:"10%"},attrs:{rounded:"",outlined:"",absolute:"",small:"",color:"#2979ff",href:link,disabled:!link}},[t._v("\n            View profile\n          ")])],1):t._e()])],1)})),1),t._v(" "),n("v-row",{staticClass:"mx-0 mb-3 pa-0 mt-9",attrs:{"no-gutters":""}},[n("span",{staticClass:"text-body-1 font-weight-medium"},[t._v(" Advisor ")])]),t._v(" "),n("v-row",{staticClass:"ma-0 pa-0",attrs:{"no-gutters":""}},[t._l(t.advisors,(function(e,i){var o=e.name,r=e.headline,l=e.avatar,c=e.companyAndSchoolInfo,link=e.link;return n("v-col",{key:i,staticClass:"mt-0 pa-0 mr-6"},[n("v-card",{staticClass:"d-flex align-start rounded-xl px-sm-16 px-5 py-sm-6 py-8",attrs:{height:t.$vuetify.breakpoint.smAndUp?"150":"200",width:"450"}},[n("div",[n("v-avatar",{attrs:{size:"60"}},[n("img",{attrs:{src:l,alt:o}})])],1),t._v(" "),n("div",{staticClass:"flex flex-column ml-3"},[n("div",{staticClass:"text-body-2 font-weight-bold"},[t._v(t._s(o))]),t._v(" "),n("div",{staticClass:"text-caption advisor-headline-color mb-2"},[t._v("\n            "+t._s(r)+"\n          ")]),t._v(" "),n("div",{staticClass:"text-body-2 gray--text mb-2"},[t._v("\n            "+t._s(c)+"\n          ")]),t._v(" "),n("v-btn",{attrs:{rounded:"",outlined:"",small:t.$vuetify.breakpoint.smAndUp,color:"#2979ff",href:link}},[t._v("\n            View profile\n          ")])],1)])],1)})),t._v(" "),t.$vuetify.breakpoint.smAndUp?n("v-col",{staticClass:"rounded-xl",staticStyle:{height:"150px","overflow-y":"hidden"}},[n("v-img",{attrs:{src:"/img/meeting_img.png",height:"250",width:"460"}})],1):t._e()],2)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VAvatar:d.a,VBtn:f.a,VCard:v.a,VCardText:h.c,VCol:m.a,VImg:x.a,VRow:y.a})},541:function(t,e,n){"use strict";n.r(e);n(33),n(78);var o={data:function(){return{contents:[{title:"'자료조사AI(가칭)' 내부 테스트",date:"2023.12",body:"AI 발전에 따른, 빠른 정보 습득 및 쉬운 정리 GPT 기능 서비스화",left:!1,small:!0,color:"secondary",icon:null},{title:"투자 유치 (엔젤 투자)",date:"2022.12",body:"투자가치 평가 약 40억 수준",left:!0,small:!1,color:"primary",icon:"mdi-currency-usd"},{title:"GET-A Inc 설립 (전 쉬운지식 LLC)",date:"2022.10",body:"법인 형태 변경(모든 멤버 유지): 유한책임회사 -> 주식회사",left:!0,small:!1,color:"primary",icon:"mdi-play"},{title:"'쉬운 설명 플랫폼' Beta Test",date:"2021.9",body:"클라우드 서비스(AWS)를 활용한 대량 이용 대비 서비스 인프라 최적화 완료 후 두 번째 공개 테스트를 했습니다. (Market/Infra Test)",left:!1,small:!0,color:"secondary",icon:null},{title:"'쉬운 설명 플랫폼' Alpha Test",date:"2020.10",body:"미닛 최소 작동 모델(MVP) 완성 후, 고객지향적인 기능 개발을 위해 고객 대상 최초 테스트가 이루어졌습니다.",left:!1,small:!0,color:"secondary",icon:null},{title:"창립 멤버 구성",date:"2019.7",body:"총 4명으로 구성된 창립 멤버로, 우수한 개발 능력을 갖춘 멤버가 합류함으로써 본격적인 서비스 개발에 착수했습니다.",left:!0,small:!0,color:"primary",icon:null},{title:"'쉬운 설명 플랫폼' 최초 개발",date:"2019.4",body:"아이디어 상태였던 미닛 아이템을 직접 개발하기 시작했습니다.",left:!1,small:!0,color:"secondary",icon:null}],carouselStartIndex:0}},created:function(){this.$parent.$on("carousel-action",this.handleCarouselAction)},methods:{splitDate:function(t){return t.split(".")},setTwoNumber:function(t){return t<10?"0"+t:t},handleCarouselAction:function(t){"left"===t?this.calculateIndexToLeft():"right"===t&&this.calculateIndexToRight(),this.$emit("update-carousel-index",this.carouselStartIndex)},calculateIndexToRight:function(){var t=this.contents.length,e=this.$vuetify.breakpoint.smAndUp&&this.carouselStartIndex===t-4,n=this.$vuetify.breakpoint.xsOnly&&this.carouselStartIndex===t-1;e||n||(this.carouselStartIndex=(this.carouselStartIndex+1)%t)},calculateIndexToLeft:function(){if(0!==this.carouselStartIndex){var t=this.contents.length;this.carouselStartIndex=(this.carouselStartIndex-1+t)%t}},checkToRenderIndex:function(t){return this.carouselStartIndex===t}}},r=(n(523),n(54)),l=n(64),c=n.n(l),d=n(474),f=n(273),v=n(485),h=n(491),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"mt-sm-4 mx-0 mr-sm-4 pt-16 pb-sm-5",attrs:{flat:"",outlined:t.$vuetify.breakpoint.xsOnly,color:"#2979ff"}},[n("v-card-text",{staticClass:"px-0"},[n("div",{staticClass:"history-line"}),t._v(" "),t.$vuetify.breakpoint.smAndUp?n("v-col",{staticClass:"d-flex mt-n14 overflow-hidden",attrs:{id:"carouselContainer",cols:"9",offset:"2"}},t._l(t.contents,(function(e,i){return n("v-col",{key:i,style:{transform:"translateX("+100*-t.carouselStartIndex+"%)"},attrs:{cols:"3"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:i>=t.carouselStartIndex,expression:"i >= carouselStartIndex"}],staticClass:"d-flex flex-column"},[n("v-col",{staticClass:"white-circle circle-sm"},t._l(t.splitDate(e.date),(function(e,o){return n("div",{key:e+o},[n("div",{staticClass:"main-color",class:o?"month":"year"},[t._v("\n                "+t._s(o?t.setTwoNumber(e):e)+"\n              ")])])})),0),t._v(" "),n("v-col",{staticClass:"white--text pr-0 pl-5"},[n("div",{staticClass:"text-body-2 font-weight-bold text-nowrap mb-1"},[t._v("\n              "+t._s(e.title)+"\n            ")]),t._v(" "),n("div",{staticClass:"text-caption text-line-height"},[t._v("\n              "+t._s(e.body)+"\n            ")])])],1)])})),1):t._e(),t._v(" "),t.$vuetify.breakpoint.xsOnly?n("v-row",{staticClass:"mt-n16",attrs:{justify:"center"}},[n("v-col",{staticClass:"d-flex flex-nowrap overflow-hidden",attrs:{cols:"12"}},t._l(t.contents,(function(e,i){return n("v-col",{key:i,staticClass:"text-center px-0 pt-0",style:{transform:"translateX("+100*-t.carouselStartIndex+"%)"},attrs:{cols:"12"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.checkToRenderIndex(i),expression:"checkToRenderIndex(i)"}],staticClass:"d-flex flex-column align-center",attrs:{cols:"12"}},[n("v-col",{staticClass:"white-circle circle-xs",attrs:{cols:"7"}},t._l(t.splitDate(e.date),(function(e,o){return n("div",{key:e+o},[n("div",{staticClass:"main-color",class:o?"month-xs mt-1":"year-xs mb-1"},[t._v("\n                  "+t._s(o?t.setTwoNumber(e):e)+"\n                ")])])})),0),t._v(" "),n("v-col",{staticClass:"white--text"},[n("div",{staticClass:"text-body-1 font-weight-bold mb-1"},[t._v("\n                "+t._s(e.title)+"\n              ")]),t._v(" "),n("div",{staticClass:"text-body-2 text-line-height"},[t._v("\n                "+t._s(e.body)+"\n              ")])])],1)])})),1)],1):t._e()],1)],1)}),[],!1,null,"120b15fc",null);e.default=component.exports;c()(component,{VCard:d.a,VCardText:f.c,VCol:v.a,VRow:h.a})},581:function(t,e,n){"use strict";n(530)},582:function(t,e,n){var o=n(14)(!1);o.push([t.i,".content-title[data-v-6177cee4]{color:#2979ff;font-weight:700}.content-subtitle[data-v-6177cee4]{font-size:20px;text-align:center}",""]),t.exports=o},595:function(t,e,n){"use strict";n.r(e);var o=n(539),r=n(540),l=n(541),c={components:{Services:o.default,Founders:r.default,Timeline:l.default},data:function(){return{carouselIndex:0}},methods:{triggerCarouselAction:function(t){this.$emit("carousel-action",t)},updateCarouselIndex:function(t){this.carouselIndex=t}}},d=(n(581),n(54)),f=n(64),v=n.n(f),h=n(191),m=n(485),x=n(494),y=n(185),_=n(491),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"d-flex flex-column",attrs:{fluid:""}},[n("v-row",{attrs:{justify:"center"}},[n("v-col",{staticClass:"d-flex flex-column align-center"},[n("p",{staticClass:"content-title"},[t._v("게타's 서비스")]),t._v(" "),t.$vuetify.breakpoint.smAndUp?n("div",{staticClass:"content-subtitle"},[n("div",{staticClass:"font-weight-bold"},[t._v("\n          정보, 지식이 쉽고 빠르게 전달 및 소통 되도록 만드는\n        ")]),t._v(" "),n("div",[t._v("모든 기술을 고민하고 그것들에 도전하고 있습니다.")])]):t._e(),t._v(" "),n("v-col",{attrs:{cols:"11",sm:"9",md:"7"}},[n("services")],1)],1)],1),t._v(" "),n("v-row",{staticClass:"mt-16 d-flex flex-column align-center white--text",staticStyle:{"background-color":"#2979ff"},attrs:{justify:"center","no-gutters":""}},[n("v-col",{staticClass:"d-flex flex-column align-center pt-16",attrs:{cols:"12",sm:"4"}},[n("p",{staticClass:"content-title white--text"},[t._v("연혁")]),t._v(" "),n("v-col",{staticClass:"d-flex"},[n("v-col",{staticClass:"content-subtitle pa-0 pl-9",attrs:{cols:"12",sm:"auto","offset-sm":"1"}},[t._v("\n          게타(GET-A)을 위했던\n          "),n("span",{staticClass:"font-weight-black"},[t._v("지난 여정")])]),t._v(" "),t.$vuetify.breakpoint.smAndUp?n("v-col",{staticClass:"py-0",attrs:{cols:"auto",offset:"4"}},[n("v-btn",{attrs:{disabled:0===t.carouselIndex,icon:"",small:""},on:{click:function(e){return t.triggerCarouselAction("left")}}},[n("v-icon",{attrs:{size:"32",color:"white"}},[t._v(t._s("mdi-chevron-left"))])],1),t._v(" "),n("v-btn",{attrs:{icon:"",small:""},on:{click:function(e){return t.triggerCarouselAction("right")}}},[n("v-icon",{attrs:{size:"32",color:"white"}},[t._v(t._s("mdi-chevron-right"))])],1)],1):t._e()],1)],1),t._v(" "),n("timeline",{on:{"update-carousel-index":t.updateCarouselIndex}}),t._v(" "),t.$vuetify.breakpoint.xsOnly?n("v-col",{staticClass:"mb-8",attrs:{cols:"auto"}},[n("v-btn",{attrs:{disabled:0===t.carouselIndex,icon:""},on:{click:function(e){return t.triggerCarouselAction("left")}}},[n("v-icon",{attrs:{size:"60",color:"white"}},[t._v(t._s("mdi-chevron-left"))])],1),t._v(" "),n("v-btn",{attrs:{icon:""},on:{click:function(e){return t.triggerCarouselAction("right")}}},[n("v-icon",{attrs:{size:"60",color:"white"}},[t._v(t._s("mdi-chevron-right"))])],1)],1):t._e()],1),t._v(" "),n("v-row",{staticClass:"pt-16",attrs:{justify:"center"}},[n("v-col",{staticClass:"d-flex flex-column align-center"},[n("p",{staticClass:"content-title"},[t._v("함께하는 사람들")]),t._v(" "),n("div",{staticClass:"content-subtitle"},[n("div",[t._v("\n          게타(GET-A)을 위해 "),t.$vuetify.breakpoint.xsOnly?n("br"):t._e(),t._v(" "),n("span",{staticClass:"font-weight-bold"},[t._v(" 고군분투하는 이들")])])]),t._v(" "),n("v-col",{attrs:{cols:"11",sm:"8"}},[n("founders")],1)],1)],1)],1)}),[],!1,null,"6177cee4",null);e.default=component.exports;v()(component,{VBtn:h.a,VCol:m.a,VContainer:x.a,VIcon:y.a,VRow:_.a})}}]);