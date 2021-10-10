(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{497:function(t,e,n){var content=n(515);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("3374d184",content,!0,{sourceMap:!1})},514:function(t,e,n){"use strict";n(497)},515:function(t,e,n){var o=n(16)(!1);o.push([t.i,".article-title[data-v-5bc6487b],.article-title-xs[data-v-5bc6487b]{font-weight:500}",""]),t.exports=o},538:function(t,e,n){"use strict";n.r(e);var o=n(30),r=(n(93),{data:function(){return{title:"고객 문의",valid:!0,question:"",questionCounter:1e3,questionRules:[function(t){return!!t||"내용 입력이 필요합니다."},function(t){return t&&t.length<=1e3||"Question must be less than 100 characters"}],email:"",emailRules:[function(t){return!!t||"이메일 주소 입력이 필요합니다."},function(t){return/.+@.+\..+/.test(t)||"이메일 주소를 입력해야 합니다."}],select:null,items:["서비스 이용 문제","신규 기능 건의","비즈니스 상담"],checkbox:!1}},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:"고객 문의 페이지입니다. 서비스 이용 문제, 신규 기능 건의, 비즈니스 상담 요청 등이 가능합니다."}]}},computed:{cardWidth:function(){return this.$vuetify.breakpoint.width>800?800:this.$vuetify.breakpoint.width}},methods:{_summit:function(){var t=this;this.$refs.form.validate(),this.valid&&this._postIssueCreation().then((function(){alert("「"+t.select+" / "+t.email+"」를 이슈로 등록하였습니다."),location.reload()})).catch((function(t){console.log(t)}))},_mapVselectToGithubIssuelabels:function(){switch(this.select){case"서비스 이용 문제":return["Domain:UX","Task:Bug","Communication:VoiceOfCustomer"];case"신규 기능 건의":return["Domain:UX","Task:Enhancement","Communication:VoiceOfCustomer"];case"비즈니스 상담":return["Domain:Business","Task:Enhancement","Communication:VoiceOfCustomer"];default:return["Communication:VoiceOfCustomer"]}},_postIssueCreation:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("https://asia-northeast3-knowease-inc.cloudfunctions.net/jwt-creation-app-for-knowease-inc-github-io");case 2:return n=e.sent,e.next=5,t.$axios.$post("https://api.github.com/app/installations/19408771/access_tokens",{},{headers:{Authorization:"Bearer ".concat(n),Accept:"application/vnd.github.v3+json"}});case 5:return o=e.sent,e.next=8,t.$axios.$post("https://api.github.com/repos/knowease-inc/knowease-inc.github.io/issues",{title:t.select+" / "+t.email,labels:t._mapVselectToGithubIssuelabels(),body:"| Email | 항목 | 질문 |\n| -- | -- | -- |\n|"+t.email+"|"+t.select+"|"+t.question+"|"},{headers:{Authorization:"Token ".concat(o.token),Accept:"application/vnd.github.v3+json"}});case 8:return r=e.sent,e.abrupt("return",r);case 10:case"end":return e.stop()}}),e)})))()}}}),c=(n(514),n(63)),l=n(77),d=n.n(l),m=n(470),f=n(465),h=n(464),v=n(599),x=n(484),k=n(589),C=n(591),w=n(543),_=n(590),V=n(53),T=n(193),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"d-flex justify-center mt-10 mx-0 px-0 px-sm-3",attrs:{fluid:""}},[n("v-card",{staticClass:"d-flex align-center ma-0 pa-0",attrs:{flat:"","max-width":"800",color:"rgba(0, 0, 0, 0)"}},[n("v-card",{staticClass:"pa-1 pa-sm-3",attrs:{width:t.cardWidth,flat:"",outlined:""}},[n("v-toolbar",{staticClass:"d-flex justify-center",attrs:{flat:""}},[n("v-toolbar-title",[n("span",{staticClass:"article-title ma-0"},[t._v(t._s(t.title))])])],1),t._v(" "),n("v-card-text",{staticClass:"pb-0"},[n("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-text-field",{staticClass:"mt-2",attrs:{rules:t.emailRules,label:"E-mail 주소를 입력해주세요.",type:"text","prepend-icon":"mdi-email",required:"",dense:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),n("v-select",{attrs:{items:t.items,rules:[function(t){return!!t||"필수 선택 항목입니다."}],label:"관련 주제를 선택해주세요.","prepend-icon":"mdi-cursor-default",required:""},model:{value:t.select,callback:function(e){t.select=e},expression:"select"}}),t._v(" "),n("v-textarea",{attrs:{counter:t.questionCounter,rules:t.questionRules,name:"question",label:"문의/건의 내용을 입력해주세요.",hint:"무관한 내용, 타인에 대한 비난/비방/욕설 등이 포함되는 경우 무통보 삭제될 수 있습니다.","auto-grow":"",dense:""},model:{value:t.question,callback:function(e){t.question=e},expression:"question"}}),t._v(" "),n("v-checkbox",{attrs:{rules:[function(t){return!!t||"동의하지 않는 경우 내용이 등록되지 않습니다."}],label:"메일 주소, 작성 내용을 Github Repository(Knowease-inc.github.io)상 공개에 동의합니다.",required:""},model:{value:t.checkbox,callback:function(e){t.checkbox=e},expression:"checkbox"}})],1)],1),t._v(" "),n("v-card-actions",{staticClass:"justify-end pt-0"},[n("v-btn",{staticClass:"mr-4",attrs:{disabled:!t.valid,color:"primary",outlined:""},on:{click:t._summit}},[t._v("\n          등록\n        ")])],1)],1)],1)],1)}),[],!1,null,"5bc6487b",null);e.default=component.exports;d()(component,{VBtn:m.a,VCard:f.a,VCardActions:h.a,VCardText:h.c,VCheckbox:v.a,VContainer:x.a,VForm:k.a,VSelect:C.a,VTextField:w.a,VTextarea:_.a,VToolbar:V.a,VToolbarTitle:T.b})}}]);