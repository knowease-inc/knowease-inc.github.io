(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{464:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return l})),n.d(e,"c",(function(){return d})),n.d(e,"d",(function(){return f}));var r=n(465),o=n(0),c=Object(o.e)("v-card__actions"),l=Object(o.e)("v-card__subtitle"),d=Object(o.e)("v-card__text"),f=Object(o.e)("v-card__title");r.a},482:function(t,e,n){"use strict";n(7),n(11),n(9),n(13);var r=n(2),o=(n(46),n(64),n(32),n(10),n(36),n(68),n(271),n(23),n(40),n(272),n(273),n(274),n(275),n(276),n(277),n(278),n(279),n(280),n(281),n(282),n(283),n(284),n(47),n(8),n(270),n(1)),c=n(88),l=n(0);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],m=["start","end","center"];function h(t,e){return v.reduce((function(n,r){return n[t+Object(l.u)(r)]=e(),n}),{})}var x=function(t){return[].concat(m,["baseline","stretch"]).includes(t)},y=h("align",(function(){return{type:String,default:null,validator:x}})),_=function(t){return[].concat(m,["space-between","space-around"]).includes(t)},w=h("justify",(function(){return{type:String,default:null,validator:_}})),C=function(t){return[].concat(m,["space-between","space-around","stretch"]).includes(t)},j=h("alignContent",(function(){return{type:String,default:null,validator:C}})),k={align:Object.keys(y),justify:Object.keys(w),alignContent:Object.keys(j)},O={align:"align",justify:"justify",alignContent:"align-content"};function P(t,e,n){var r=O[t];if(null!=n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return(r+="-".concat(n)).toLowerCase()}}var S=new Map;e.a=o.default.extend({name:"v-row",functional:!0,props:f(f(f({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:x}},y),{},{justify:{type:String,default:null,validator:_}},w),{},{alignContent:{type:String,default:null,validator:C}},j),render:function(t,e){var n=e.props,data=e.data,o=e.children,l="";for(var d in n)l+=String(n[d]);var f=S.get(l);return f||function(){var t,e;for(e in f=[],k)k[e].forEach((function(t){var r=n[t],o=P(e,t,r);o&&f.push(o)}));f.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r.a)(t,"align-".concat(n.align),n.align),Object(r.a)(t,"justify-".concat(n.justify),n.justify),Object(r.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),S.set(l,f)}(),t(n.tag,Object(c.a)(data,{staticClass:"row",class:f}),o)}})},483:function(t,e,n){"use strict";n(11),n(10),n(78),n(32),n(285),n(270),n(80),n(92);var r=n(1);var o,c=n(88);e.a=(o="container",r.default.extend({name:"v-".concat(o),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,e){var n=e.props,data=e.data,r=e.children;data.staticClass="".concat(o," ").concat(data.staticClass||"").trim();var c=data.attrs;if(c){data.attrs={};var l=Object.keys(c).filter((function(t){if("slot"===t)return!1;var e=c[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}));l.length&&(data.staticClass+=" ".concat(l.join(" ")))}return n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),t(n.tag,data,r)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var n,r=e.props,data=e.data,o=e.children,l=data.attrs;return l&&(data.attrs={},n=Object.keys(l).filter((function(t){if("slot"===t)return!1;var e=l[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),t(r.tag,Object(c.a)(data,{staticClass:"container",class:Array({"container--fluid":r.fluid}).concat(n||[])}),o)}})},515:function(t,e,n){var content=n(543);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("457f3430",content,!0,{sourceMap:!1})},542:function(t,e,n){"use strict";n(515)},543:function(t,e,n){var r=n(16)(!1);r.push([t.i,".title-in-intoroduce-box[data-v-424d2a82]{background-color:#fff;border:2px solid #fff;border-radius:13px;box-shadow:3px 3px 10px rgba(0,0,0,.2);padding:2px 5px;font-weight:700;line-height:1.8}.text1-in-introduce-box[data-v-424d2a82]{font-weight:400}.text2-in-introduce-box[data-v-424d2a82]{font-weight:700}.function-introduce-container[data-v-424d2a82]{background:linear-gradient(0deg,#fff 75%,#2979ff 0)}.webmarket-btn[data-v-424d2a82]{border-radius:12px}.component-titles[data-v-424d2a82],.scroll-ending-text[data-v-424d2a82]{font-weight:700;font-size:24px}.scroll-ending-text-small[data-v-424d2a82]{font-weight:700;font-size:13px}.text-in-scroll-ending[data-v-424d2a82]{background-color:#2979ff;border:2px solid #2979ff;border-radius:13px;box-shadow:3px 3px 10px rgba(0,0,0,.2);padding:2px 5px;font-weight:700;line-height:1.8}.bordered-image[data-v-424d2a82]{border:1px solid grey;border-radius:12px}",""]),t.exports=r},580:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{serviceName:"미닛",downloadURL:{Chrome:"https://chrome.google.com/webstore/detail/%EB%AF%B8%EB%8B%9B/fnkdlnkmiekkedkpolbkffdfljjinoee?hl=ko"},introduce:{card:{color:"primary",height:300},text:{first:"영상? 글? 보다가 우클릭하면 바로",second:"어려운 것을 쉽게 이해하게 돕는 확장프로그램을 소개합니다"},btn:{install:"확장프로그램 설치",manual:{install:"설치 방법",usage:"사용 방법"},targetID:{downloadChromeWebMarket:"extension-download-chorme",install:"extension-installation",usage:"extension-usage"}},funcs:[{icon:"🖥️",title:"어려운 영상(YouTube) 쉽게 보조 설명",description:"'봐야겠다' 싶지만 어려울 것 같은 영상(영어 포함)을 만났을 때, 내용을 쉽고 (한국어로!) 짧게 해설해 도움을 줘요. 시간 절약 통한 효율적인 학습을 가능하게 해주죠."},{icon:"📑",title:"글 (뉴스, 전문지식 등) 쉽게 설명 기능",description:"전문적인 글의 습득 어려움을 최소화하는 기능이에요. 목적에 따라 내용을 빠르게 재해석할 수 있으며, 글을 통해 얻고자 하는 주요 정보를 놓치지 않게 되요."}],warning:["* Chrome(크롬) 브라우저에서만 모든 기능이 정상적으로 동작해요"]},installation:{title:"간단 설치하기",description:"단 2번의 클릭으로 설치 완료되요!",card:{color:void 0,height:1200},steps:[{image:"/img/pages.service.meaniit.extension-meaniit/step1.png",number:1,text:"<a href=\"https://chrome.google.com/webstore/detail/%EB%AF%B8%EB%8B%9B/fnkdlnkmiekkedkpolbkffdfljjinoee?hl=ko\" target='_blank'>[확장프로그램 설치]</a> 버튼을 눌러요"},{image:"/img/pages.service.meaniit.extension-meaniit/step2.png",number:2,text:'Chrome 웹 스토어에서 [다운로드] 버튼을 누르면<br>잠시후 설치 완료!<br><small style="color: red;">* Chrome 브라우저에서만 모든 기능이 정상적으로 동작해요</small><br><small style="color: red;">** Chrome 브라우저 최신 버전 유지를 권장드려요 (오래된 버전에서는 동작하지 않을 수 있음)</small>'}]},use:{title:"사용하기",description:"어떻게 사용하면 될까요? 최대로 활용하는 방법은?",card:{color:"#E6E9F0",height:void 0},steps:[{image:"/img/pages.service.meaniit.extension-meaniit/usage_step1.png",number:1,text:"유튜브(YouTube) 홈페이지를 열고<br>영어라서, 어려워서, 당장 시간이 없는데 영상이 길어서😅<br>그냥 보기 부담(?)되는 영상을 선택해 들어가요"},{image:"/img/pages.service.meaniit.extension-meaniit/usage_step2.png",number:2,text:"빈 곳에서 우클릭 -> [유튜브 보조설명AI] 메뉴를 눌러요"},{image:"/img/pages.service.meaniit.extension-meaniit/usage_step3.png",number:3,text:'Chrome 브라우저 알림이 뜨고<br>잠시(약 4초) 기다려요<br><small style="color: red;">* 이 사이에 사용자분께서 직접 다른 탭을 여는 경우, 정상적으로 동작하지 않을 수 있어요</small>'},{image:"/img/pages.service.meaniit.extension-meaniit/usage_step4.png",number:4,text:"페이지 이동 후 로딩이 시작되었다면<br>왼쪽의 해당 영상을 함께 켜놓고 봐도 되고👀<br>다른 일을 하고 있어도 되요"},{image:"/img/pages.service.meaniit.extension-meaniit/usage_step5.png",number:5,text:"완료 알림 표시가 되면<br>완료된 내용을 확인하면 끝!"}]},ending:{text:["최종적으로 우리는 설명 대상의 난이도를 표시하고<br>여러분이","원하는 난이도의 설명","을 제공하도록 할거에요!<br>잘 부탁드려요! 😄"]}}},head:function(){var t="해외 자료거나 어렵고 길거나! 좋은 정보/지식을 다루는 영상 그래도 이해하고 싶다면? 용어 설명과 자료 정리를 보조해줘요",e=t,n="https://dmq1lrjfpg713.cloudfront.net/og_20220126.png";return{title:"YouTube, 전문 정보를 쉬운 해설과 함께 - Chrome 확장프로그램, ".concat(this.serviceName),meta:[{hid:"og:title",property:"og:title",content:t},{hid:"og:description",property:"og:description",content:e},{hid:"og:image",property:"og:image",content:n},{hid:"twitter:title",name:"twitter:title",content:t},{hid:"twitter:description",name:"twitter:description",content:e},{hid:"twitter:image",name:"twitter:image",content:n},{hid:"description",name:"description",content:t}]}},computed:{totalCols:function(){return this.$vuetify.breakpoint.xlOnly?6:this.$vuetify.breakpoint.lgOnly?8:this.$vuetify.breakpoint.mdOnly?10:12}},methods:{toChromeWebMarket:function(){var t=this.downloadURL.Chrome;window.open(t,"_blank")},scrollTo:function(t){var e=document.getElementById(t).getBoundingClientRect().top+window.pageYOffset;window.scrollTo({top:e,behavior:"smooth"})},openImageInNewTab:function(t){window.open(t,"_blank")}}},o=(n(542),n(63)),c=n(77),l=n.n(c),d=n(470),f=n(465),v=n(464),m=n(478),h=n(483),x=n(184),y=n(268),_=n(482),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:""}},[n("v-card",{staticClass:"ma-0 rounded-0",attrs:{color:t.introduce.card.color,height:t.introduce.card.height,flat:""}},[n("v-row",{attrs:{justify:"center",align:"center","no-gutters":""}},[n("v-col",{attrs:{cols:t.totalCols}},[n("v-card",{staticClass:"ma-0 rounded-0 d-flex flex-column justify-center items-start text-start",attrs:{color:t.introduce.card.color,height:t.introduce.card.height,flat:""}},[n("v-card-text",{staticClass:"white--text mt-6"},[n("div",[n("span",{staticClass:"text1-in-introduce-box headline"},[t._v(t._s(t.introduce.text.first))]),t._v(" "),n("span",{staticClass:"title-in-intoroduce-box primary--text mx-1 headline"},[t._v(t._s(t.serviceName))]),t._v(" "),n("br"),t._v(" "),n("span",{staticClass:"text2-in-introduce-box headline"},[t._v(t._s(t.introduce.text.second))])])]),t._v(" "),n("v-card-actions",{staticClass:"ml-2"},[n("v-btn",{staticClass:"webmarket-btn",attrs:{id:t.introduce.btn.targetID.downloadChromeWebMarket},on:{click:function(e){return t.toChromeWebMarket()}}},[n("span",{staticStyle:{"font-weight":"bold"}},[t._v(t._s(t.introduce.btn.install))])]),t._v(" "),n("v-btn",{staticClass:"webmarket-btn",attrs:{color:"accent",dark:""},on:{click:function(e){return t.scrollTo(t.introduce.btn.targetID.install)}}},[n("span",{staticStyle:{"font-weight":"bold"}},[t._v(t._s(t.introduce.btn.manual.install))])]),t._v(" "),n("v-btn",{staticClass:"webmarket-btn",attrs:{color:"accent",dark:""},on:{click:function(e){return t.scrollTo(t.introduce.btn.targetID.usage)}}},[n("span",{staticStyle:{"font-weight":"bold"}},[t._v(t._s(t.introduce.btn.manual.usage))])])],1),t._v(" "),n("v-card-text",{staticClass:"grey--text text--lighten-3"},[n("span",{domProps:{innerHTML:t._s(t.introduce.warning[0])}})])],1)],1)],1)],1),t._v(" "),n("v-container",{staticClass:"function-introduce-container mb-12",attrs:{fluid:""}},[n("v-row",{attrs:{justify:"center"}},t._l(t.introduce.funcs,(function(e,r){return n("v-col",{key:r,attrs:{cols:"12",xl:"2",lg:"3",md:"4",sm:"6"}},[n("v-card",{staticClass:"d-flex flex-column align-center justify-center py-6 px-4",style:{borderRadius:"20px"},attrs:{elevation:"5"}},[n("v-icon",{staticClass:"text-center",attrs:{"x-large":""}},[t._v(t._s(e.icon))]),t._v(" "),n("v-card-title",{staticClass:"text-center"},[t._v(t._s(e.title))]),t._v(" "),n("v-card-text",{staticClass:"text-center"},[t._v(t._s(e.description))])],1)],1)})),1)],1),t._v(" "),n("v-row",{staticClass:"py-12 mb-12",attrs:{justify:"center","no-gutters":""}},[n("v-col",{attrs:{cols:t.totalCols}},[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"12"}},[n("v-card",{attrs:{flat:""}},[n("v-card-subtitle",{staticClass:"pb-0 mb-1"},[t._v(t._s(t.installation.description))]),t._v(" "),n("v-card-title",{staticClass:"pt-1 mb-2 component-titles",attrs:{id:t.introduce.btn.targetID.install}},[t._v(t._s(t.installation.title))])],1)],1)],1),t._v(" "),n("v-card",{staticClass:"ma-0 px-6 rounded-0",attrs:{color:t.installation.card.color,"max-height":t.installation.card.height,flat:""}},[n("v-row",{attrs:{justify:"center",align:"center","no-gutters":""}},t._l(t.installation.steps,(function(e,r){return n("v-col",{key:r,staticClass:"mb-8",attrs:{cols:"12"}},[n("v-card",{attrs:{flat:""}},[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"12",md:"5"}},[n("v-img",{staticClass:"bordered-image",attrs:{src:e.image,height:"100%",width:"100%"},on:{click:function(n){return t.openImageInNewTab(e.image)}}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",md:"7"}},[n("v-card-title",[t._v(t._s(e.number)+".")]),t._v(" "),n("v-card-text",{staticClass:"ml-2 body-1"},[n("span",{domProps:{innerHTML:t._s(e.text)}})])],1)],1)],1)],1)})),1)],1)],1)],1),t._v(" "),n("v-card",{staticClass:"ma-0 px-6 py-12 rounded-0",attrs:{color:t.use.card.color,"max-height":t.use.card.height+240,flat:""}},[n("v-row",{attrs:{justify:"center",align:"center","no-gutters":""}},[n("v-col",{attrs:{cols:t.totalCols}},[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"12"}},[n("v-card",{attrs:{flat:"",color:t.use.card.color}},[n("v-card-subtitle",{staticClass:"pb-0 mb-1"},[t._v(t._s(t.use.description))]),t._v(" "),n("v-card-title",{staticClass:"pt-1 mb-2 component-titles",attrs:{id:t.introduce.btn.targetID.usage}},[t._v(t._s(t.use.title))])],1)],1)],1),t._v(" "),n("v-card",{staticClass:"ma-0 px-6 rounded-0",attrs:{color:t.use.card.color,"max-height":t.use.card.height,flat:""}},[n("v-row",{attrs:{justify:"center",align:"center","no-gutters":""}},t._l(t.use.steps,(function(e,r){return n("v-col",{key:r,staticClass:"mb-8",attrs:{cols:"12"}},[n("v-card",{attrs:{flat:"",color:t.use.card.color}},[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"12",md:"5"}},[n("v-img",{staticClass:"bordered-image",attrs:{src:e.image,height:"100%",width:"100%"},on:{click:function(n){return t.openImageInNewTab(e.image)}}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",md:"7"}},[n("v-card-title",[t._v(t._s(e.number)+".")]),t._v(" "),n("v-card-text",{staticClass:"ml-2 body-1"},[n("span",{domProps:{innerHTML:t._s(e.text)}})])],1)],1)],1)],1)})),1)],1)],1)],1)],1),t._v(" "),n("v-row",{staticClass:"scroll-ending-text my-12 py-12",class:t.$vuetify.breakpoint.smAndUp?"scroll-ending-text my-12 py-12":"scroll-ending-text-small my-12 py-12",attrs:{justify:"center",align:"center"}},[n("p",{staticClass:"text-center"},[n("span",{domProps:{innerHTML:t._s(t.ending.text[0])}}),t._v(" "),n("span",{staticClass:"text-in-scroll-ending white--text",domProps:{innerHTML:t._s(t.ending.text[1])}}),t._v(" "),n("span",{domProps:{innerHTML:t._s(t.ending.text[2])}})])])],1)}),[],!1,null,"424d2a82",null);e.default=component.exports;l()(component,{VBtn:d.a,VCard:f.a,VCardActions:v.a,VCardSubtitle:v.b,VCardText:v.c,VCardTitle:v.d,VCol:m.a,VContainer:h.a,VIcon:x.a,VImg:y.a,VRow:_.a})}}]);