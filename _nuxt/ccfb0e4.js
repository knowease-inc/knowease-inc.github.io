(window.webpackJsonp=window.webpackJsonp||[]).push([[19,9],{504:function(t,e,n){"use strict";n(10),n(9),n(76),n(29),n(291),n(275),n(77),n(95);var r=n(1);var c,o=n(88);e.a=(c="container",r.default.extend({name:"v-".concat(c),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,e){var n=e.props,data=e.data,r=e.children;data.staticClass="".concat(c," ").concat(data.staticClass||"").trim();var o=data.attrs;if(o){data.attrs={};var l=Object.keys(o).filter((function(t){if("slot"===t)return!1;var e=o[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}));l.length&&(data.staticClass+=" ".concat(l.join(" ")))}return n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),t(n.tag,data,r)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var n,r=e.props,data=e.data,c=e.children,l=data.attrs;return l&&(data.attrs={},n=Object.keys(l).filter((function(t){if("slot"===t)return!1;var e=l[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),t(r.tag,Object(o.a)(data,{staticClass:"container",class:Array({"container--fluid":r.fluid}).concat(n||[])}),c)}})},532:function(t,e,n){"use strict";n.r(e);n(90),n(11);var r=n(27),c=n(43),o=n(36),l=n(25),f=n(19),d=n(494);function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var c=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(o.a)(this,n)}}var h=function(t,e,n,desc){var r,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(c<3?r(o):c>3?r(e,n,o):r(e,n))||o);return c>3&&o&&Object.defineProperty(e,n,o),o},y=function(t){Object(c.a)(n,t);var e=v(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return n}(d.Vue);h([Object(d.Prop)({type:Array,default:""})],y.prototype,"parentItems",void 0);var m=y=h([Object(d.Component)({})],y),j=n(54),C=n(64),P=n.n(C),x=n(191),_=n(474),O=n(273),R=n(485),k=n(504),w=n(491),component=Object(j.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"mt-sm-8 mt-4",attrs:{flat:"",tile:""}},[n("v-container",{staticClass:"pt-0",attrs:{fluid:""}},[n("v-row",{attrs:{justify:"center",align:"center","no-gutters":""}},t._l(t.parentItems,(function(e,i){return n("v-col",{key:i,staticClass:"d-flex justify-center",attrs:{cols:"12"}},[n("v-card",{attrs:{id:"recruit_position",flat:"",tile:""}},[n("v-card-title",{staticClass:"text-h4 text-sm-h3 font-weight-black",attrs:{id:"position_name"}},[t._v("\n            "+t._s(e.title)+"\n          ")]),t._v(" "),n("v-card-subtitle",{staticClass:"text-sm-h5 grey--text text--lighten-1 font-weight-black my-sm-1"},[t._v("\n            "+t._s(e.description)+"\n          ")]),t._v(" "),t._l(e.subtitle,(function(content,e){return n("div",{key:e,staticClass:"mb-10",attrs:{id:"detail_infos"}},[n("v-card-subtitle",{staticClass:"text-h5 text-sm-h4 font-weight-bold"},[t._v("\n              "+t._s(content.title)+"\n            ")]),t._v(" "),t._l(content.contents,(function(e,r){return n("v-card",{key:r,staticClass:"px-sm-6 px-2",attrs:{flat:"",tile:""}},[n("v-card-text",{staticClass:"text-body-1 text-sm-h5 font-weight-bold"},[t._v("\n                "+t._s(e.title)+"\n              ")]),t._v(" "),n("ul",{staticClass:"text-body-2 text-sm-body-1 px-12"},t._l(e.content,(function(text,e){return n("li",{key:e,staticClass:"pt-0 pb-2"},[t._v("\n                  "+t._s(text)+"\n                ")])})),0)],1)}))],2)})),t._v(" "),n("v-card-actions",{staticClass:"d-flex justify-center",attrs:{id:"button_line"}},[n("v-btn",{staticClass:"font-weight-black",attrs:{id:"button_to_register_form",href:e.registerBtn.url,target:"_blank",color:e.registerBtn.color,dark:"","x-large":"",elevation:"0"}},[t._v("\n              "+t._s(e.registerBtn.name)+"\n            ")])],1)],2)],1)})),1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;P()(component,{VBtn:x.a,VCard:_.a,VCardActions:O.a,VCardSubtitle:O.b,VCardText:O.c,VCardTitle:O.d,VCol:R.a,VContainer:k.a,VRow:w.a})},588:function(t,e,n){"use strict";n.r(e);n(90),n(11);var r=n(27),c=n(44),o=n(43),l=n(36),f=n(25),d=n(19),v=n(494),h=n(532);function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var c=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var m=function(t,e,n,desc){var r,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(c<3?r(o):c>3?r(e,n,o):r(e,n))||o);return c>3&&o&&Object.defineProperty(e,n,o),o},j=function(t){Object(o.a)(n,t);var e=y(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).WebdeveloperFrontend=[{title:"[마감] 웹 서비스(백엔드) 경력직 채용",description:"- 업무, 협력 역량만 봐요! 출/퇴근 어려움, 경력 단절...? 무관!",subtitle:[{title:"직무 소개",contents:[{title:"기초 정보",content:["웹 서비스(백엔드), 계약직","경력 : 2년 이상 또는 이에 준하는 실력을 갖춘 분","채용 인원 : 1 명"]},{title:"업무 소개",content:["자료조사 및 보고서 작성 인공지능(AI) 서비스의 기능을 개발합니다. 비즈니스 요구 사항을 만족하는 기능 및 백엔드 API를 설계, 개발, 테스트 및 배포하게 되며, 이미 완성되어 있는 코드의 개선 및 리팩토링, API 변경사항에 대한 문서 작성 및 관리를 담당합니다.","주요 기능 및 서비스를 위하여 GPT, 자연어 처리(NLP), 데이터 분석 기술을 바탕으로 개발된 다양한 기능 및 API 개선을 맡습니다."]},{title:"담당 업무",content:["Python을 사용한 서버 사이드 로직 개발","GPT(Prompt Engineering), NLP, 데이터 분석 기술 활용한 기능 개발","RESTful API 설계 및 개발","AWS 환경에서 서비스 배포 및 유지보수","프론트엔드 개발자와 협업하여 사용자 요구사항에 맞게 개발"]},{title:"현재 백엔드 개발 스택 참고",content:["FastAPI (일부 Flask), Python","Git, Github","Serverless Framework","AWS (ECS, Lambda, API Gateway, S3 등)","[프론트엔드] Nuxt.js, Vue.js, JavaScript, [DB] MySQL"]}]},{title:"자격 요건",contents:[{title:"기본",content:["Python을 활용한 백엔드 개발 경험이 있으신 분","RESTful API 개발 경험이 있으신 분","RDB/SQL, ORM을 이용한 데이터베이스 처리 및 이용이 가능하신 분","Github를 활용한 개발 및 협업이 가능하신 분","영문 검색을 통해 개발 레퍼런스 확인, 적용 및 문제해결이 뛰어나신 분"]},{title:"우대",content:["GPT, Prompt Engineering에 대한 이해 및 활용 경험이 있으신 분","NLP에 대한 이해 및 활용 경험이 있으신 분","FastAPI 통한 백엔드 개발 경험이 있으신 분","Pandas, PySpark 활용 데이터 핸들링이 가능하신 분","AWS 환경에서의 서비스 배포 및 운영 경험이 있으신 분","AWS 통한 CI/CD 파이프라인 구축 및 운영 경험이 있으신 분","자율적으로 일하면서 문제를 해결할 수 있는 능력이 높으신 분","성장 의지, 자기계발 욕구, 유연한 커뮤니케이션 역량을 객관적으로 제시할 수 있는 분"]}]},{title:"혜택 및 복지",contents:[{title:"기본",content:["4대 보험"]},{title:"추가",content:["100% 재택 근무","유연 근무 (코어 근무시간 외)","월차 제공"]}]},{title:"기타",contents:[{title:"고용 관련",content:["형태 : 계약직(1년)","계약 기간 중 평가에 따라 계약 기간 연장 또는 채용이 취소될 수 있습니다"]},{title:"채용 과정",content:["서류 > 적합성 면접 > 최종합격","서류(지원서) 제출 기간 : 채용 완료 시까지","서류 합격 결과 발표 : 서류 접수 후 5일(영업일) 이내, 합격 안내와 함께 이후 일정 공지"]}]}],registerBtn:{url:"https://forms.gle/ot9JNcXYoh2Qxwex9",name:"지원하기",color:"#2979FF"}}],t}return Object(c.a)(n,[{key:"head",value:function(){return{title:"채용 공고 - (주)게타"}}},{key:"mainCardMaxWidth",get:function(){return this.$vuetify.breakpoint.width<860?this.$vuetify.breakpoint.width:860}}]),n}(v.Vue),C=j=m([Object(v.Component)({components:{RecruitInfos:h.default}})],j),P=n(54),x=n(64),_=n.n(x),O=n(474),R=n(504),component=Object(P.a)(C,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"d-flex justify-center align-center",attrs:{fluid:""}},[n("v-card",{staticClass:"d-flex justify-center align-center mt-2",attrs:{flat:"",tile:"","max-width":t.mainCardMaxWidth,"min-height":t.$vuetify.breakpoint.height-220}},[n("v-card",{attrs:{flat:"",tile:""}},[n("recruit-infos",{attrs:{"parent-items":t.WebdeveloperFrontend}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;_()(component,{VCard:O.a,VContainer:R.a})}}]);