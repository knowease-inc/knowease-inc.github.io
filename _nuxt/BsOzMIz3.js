import{m as e,a as t,b as l}from"./CUEMhdZ6.js";import{_ as s,e as a,f as n,g as i,h as o,o as c,i as r,w as d,b as u,a as m,n as p,j as f,t as g,k as h,d as x,r as _,c as v,F as y,l as b,p as w,m as k,q as j,s as T,v as S,x as V,y as z,z as L,A as H}from"./DxRAhOm-.js";import{u as M}from"./aFC_wNlN.js";import{V as A}from"./p3zFhi9T.js";import{V as U,a as C,b as P,c as I,d as q,e as E,m as B,f as D,g as O,h as F,i as N,j as W,k as X,u as $,l as G,n as J,o as K,p as Y,q as Q,r as R}from"./D-Ra3PIM.js";import{V as Z}from"./CKDQMWaM.js";import{V as ee}from"./Bc9PhCMi.js";import{V as te,a as le,b as se,c as ae,d as ne,u as ie}from"./B_ksv_7B.js";import{m as oe,u as ce}from"./DvM3JbWs.js";import{V as re}from"./xwuvR2PD.js";import"./BX2R2PN2.js";const de=["innerHTML"],ue={class:"font-weight-bold service-title"},me=["innerHTML"],pe={class:"font-weight-bold service-title"},fe=["innerHTML"],ge=s({__name:"Services",setup(l){const{xs:s,smAndUp:_,mdAndUp:v,lgAndUp:y}=a(),{t:b,locale:w}=n(),k=i(),{trackEvent:j}=M(),T=o((()=>({header:{title:z.value},meaniit:{name:b("pages.index.service.cards.meaniit.title"),description:b("pages.index.service.cards.meaniit.description"),shortcut:{name:b("pages.index.service.cards.meaniit.shortcutLabel"),href:"https://ko.meaniit.com/"},introduce:{name:b("pages.index.service.cards.meaniit.introduceLabel"),to:"/service/meaniit/introduce"}},education:{name:b("pages.index.service.cards.education.title"),description:b("pages.index.service.cards.education.description"),introduce:{name:b("pages.index.service.cards.education.introduceLabel"),to:"get-a@get-a.io"}}}))),S="/img/new/service_meaniit.jpg",V="/img/new/service_edu.jpg",z=o((()=>{const e=b("pages.index.service.header.title");return"en"===w.value?e.replace(", and",", and <br />"):e.replace("제공하며 ","제공하며 <br />")})),L=o((()=>s.value?(w.value,"300"):"640")),H=o((()=>{const e=T.value.meaniit.description;return s.value?"EN"===w.value?e.replace("technology,","technology,<br />"):e.replace("까지","까지<br />").replace("서비스","서비스<br />"):e.replace("까지","까지<br />")})),q=o((()=>{const e=T.value.education.description;return s.value&&"EN"===w.value?e.replace("technology,","technology,<br />"):e.replace("(DX)","(DX)<br />")})),E=e=>{j("service_section_nav_btn",{button_name:e.name}),e.href?window.open(e.href,"_blank"):k.push(e.to)};return(l,a)=>(c(),r(ee,{justify:"center",class:"py-8 py-sm-16"},{default:d((()=>[u(A,{cols:"9",sm:"10",class:"d-flex flex-column align-center pt-sm-16 pt-8"},{default:d((()=>[m("p",{class:p(f(s)?"section-title-xs":"section-title")},g(f(b)("pages.index.pageTitle.service")),3),m("p",{class:p(["mb-sm-12",f(s)?"section-subtitle-xs":"section-subtitle"]),style:h({fontSize:f(s)?"0.9rem":""}),innerHTML:f(T).header.title},null,14,de)])),_:1}),u(A,{cols:"10",sm:"10",class:"d-sm-flex"},{default:d((()=>[u(U,{class:p(["my-4 my-sm-0 text-white pa-sm-12 px-4 py-6 d-flex flex-column justify-space-between mr-sm-9",f(s)?"rounded-lg":"rounded-xl"]),image:S,width:f(_)?730:"",height:f(L),variant:"flat"},{default:d((()=>[u(C,null,{default:d((()=>[m("p",ue,g(f(T).meaniit.name),1)])),_:1}),m("div",null,[u(P,{class:"px-2"},{default:d((()=>[m("p",{class:p(f(s)?"content-subtitle-xs":"content-subtitle"),innerHTML:f(H)},null,10,me)])),_:1}),u(I,null,{default:d((()=>[u(Z,{disabled:!f(T).meaniit.shortcut.href,"append-icon":f(e),color:"white",text:f(T).meaniit.shortcut.name,variant:"outlined",onClick:a[0]||(a[0]=e=>E(f(T).meaniit.shortcut))},null,8,["disabled","append-icon","text"]),u(Z,{disabled:"",rounded:"",text:f(T).meaniit.introduce.name,onClick:a[1]||(a[1]=e=>E(f(T).meaniit.introduce))},{default:d((()=>[x(g(f(T).meaniit.introduce.name),1)])),_:1},8,["text"])])),_:1})])])),_:1},8,["class","image","width","height"]),u(U,{class:p(["text-white pa-sm-12 px-4 py-6 d-flex flex-column justify-space-between ml-sm-9",f(s)?"rounded-lg":"rounded-xl"]),image:V,width:f(_)?730:"",height:f(L),variant:"flat"},{default:d((()=>[u(C,null,{default:d((()=>[m("p",pe,g(f(T).education.name),1)])),_:1}),m("div",null,[u(P,{class:"px-2"},{default:d((()=>[m("p",{class:p(f(s)?"content-subtitle-xs":"content-subtitle"),innerHTML:f(q)},null,10,fe)])),_:1}),u(I,null,{default:d((()=>[u(Z,{"append-icon":f(t),color:"white",text:f(T).education.introduce.name,variant:"outlined",rounded:"lg",disabled:!f(T).education.introduce.to,onClick:a[2]||(a[2]=e=>{return t=f(T).education.introduce,window.location.href=`mailto:${t.to}`,void j("contact_us_btn",{button_name:t.name});var t})},null,8,["append-icon","text","disabled"])])),_:1})])])),_:1},8,["class","image","width","height"])])),_:1})])),_:1}))}},[["__scopeId","data-v-5e169f4b"]]),he=["innerHTML"],xe=["innerHTML"],_e=["innerHTML"],ve=["innerHTML"],ye=["innerHTML"],be={class:"flex flex-column ml-sm-12 ml-4 font-weight-bold"},we={__name:"Founders",setup(e){const{xs:t,smAndUp:s,mdAndUp:i}=a(),{t:w,tm:k,locale:j}=n(),T=o((()=>k("pages.index.founders.members")));o((()=>"en"===j.value));const S=o((()=>{const e=w("pages.index.pageTitle.teamSub");return"en"===j.value?e.replace("is the ","is the <br />"):e.replace("이란 ","이란 <br />")})),V=o((()=>w("pages.index.founders.achievement.main").replace("(Japan)의 ","(Japan)의 <br />")));return(e,a)=>(c(),r(ee,{justify:"center",class:"bg-color bg-p"},{default:d((()=>[u(A,{cols:"10",sm:"10",class:"d-flex flex-column align-center"},{default:d((()=>[m("p",{class:p(f(t)?"section-title-xs":"section-title"),style:h({fontSize:f(t)?"2.3rem":""})},g(f(w)("pages.index.pageTitle.team")),7),m("p",{class:p(["my-4",f(t)?"section-subtitle-xs":"section-subtitle"])},g(f(S)),3)])),_:1}),u(A,{cols:"11",sm:"10"},{default:d((()=>[(c(),r(_("script"),{type:"text/javascript",src:"https://platform.linkedin.com/badges/js/profile.js",async:"",defer:""})),u(ee,{justify:"center","justify-sm":"space-between",class:"py-sm-12"},{default:d((()=>[u(A,{cols:"12",sm:"6"},{default:d((()=>[u(q,{src:"https://dmq1lrjfpg713.cloudfront.net/img/ceo_horizontal_1024x576.jpg",class:"rounded-xl"})])),_:1}),u(A,{cols:"12",sm:"6","align-self":"center"},{default:d((()=>[m("div",{style:h({width:f(t)?"100%":"90%"}),class:"px-sm-16 d-flex flex-column ga-sm-8 ga-4"},[u(te,{label:"",color:"#3746FB",variant:"outlined",size:f(t)?"large":"x-large",class:"font-weight-bold pt-sm-1 my-2 my-sm-0",style:{width:"fit-content","border-radius":"10px"}},{default:d((()=>[x(" CEO "+g(f(w)("pages.index.founders.ceo")),1)])),_:1},8,["size"]),m("p",{class:"font-weight-bold",style:h({fontSize:f(t)?"1rem":"1.5rem"}),innerHTML:f(V)},null,12,he),m("div",{class:"text-start d-flex flex-column ga-sm-6 ga-2",style:h({fontSize:f(t)?"0.9rem":"1.15rem"})},[m("p",{innerHTML:f(w)("pages.index.founders.achievement.second")},null,8,xe),m("p",{innerHTML:f(w)("pages.index.founders.achievement.third")},null,8,_e),m("p",{innerHTML:f(w)("pages.index.founders.achievement.fourth")},null,8,ve)],4)],4)])),_:1})])),_:1}),u(ee,{class:"d-flex flex-column justify-center align-center my-sm-12 my-8"},{default:d((()=>[u(te,{label:"",color:"#3746FB",variant:"text",size:"x-large"},{default:d((()=>[m("span",{class:p(f(t)?"section-subtitle-xs font-weight-bold":"section-subtitle font-weight-bold"),style:{color:"inherit"}}," Co-founder ",2)])),_:1}),m("p",{style:h({fontSize:f(t)?"1.3rem":"2.5rem"}),class:"text-center font-weight-bold",innerHTML:f(w)("pages.index.founders.subTitle")},null,12,ye)])),_:1}),u(ee,null,{default:d((()=>[(c(!0),v(y,null,b(f(T),(({name:e,headline:n,avatar:i,companyAndSchoolInfo:o,link:_},v)=>(c(),r(A,{cols:"12",sm:"6",class:"d-flex",key:v},{default:d((()=>[u(U,{width:"100%",variant:"flat",class:"d-flex align-sm-center rounded-xl pa-sm-8 pa-4 member-card-shadow"},{default:d((()=>[u(E,{size:f(s)?"120":"60"},{default:d((()=>[u(q,{src:i,alt:e},null,8,["src","alt"])])),_:2},1032,["size"]),m("div",be,[m("div",{class:p(f(t)?"content-subtitle-xs":"content-subtitle"),style:h({fontSize:f(t)?"1.15rem":""})},g(e),7),m("div",{style:h([{color:"#3746fb"},{fontSize:f(t)?"0.9rem":""}]),class:"my-2"},g(n),5),m("div",{class:"mb-sm-2 font-weight-medium text-start",style:h({fontSize:f(t)?"0.9rem":""})},g(o),5),u(I,{class:"pa-0"},{default:d((()=>[u(Z,{rounded:"lg",variant:"tonal",position:"absolute",href:_,"append-icon":f(l),style:{"background-color":"#f5f7f8",color:"#555555","font-weight":"400"},class:"mt-sm-4 mt-2"},{default:d((()=>a[0]||(a[0]=[x(" View Profile ")]))),_:2},1032,["href","append-icon"])])),_:2},1024)])])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1})])),_:1}))}},ke=w("/img/new/history.mp4"),je=k({withBackground:Boolean,...oe(),...j(),...B()},"VThemeProvider"),Te=T()({name:"VThemeProvider",props:je(),setup(e,t){let{slots:l}=t;const{themeClasses:s}=S(e);return()=>{var t;return e.withBackground?u(e.tag,{class:["v-theme-provider",s.value,e.class],style:e.style},{default:()=>{var e;return[null==(e=l.default)?void 0:e.call(l)]}}):null==(t=l.default)?void 0:t.call(l)}}}),Se=["width"],Ve={class:"main-color"},ze=s({__name:"Timeline",setup(e){const{xs:t,smAndUp:l,mdAndUp:s,lgAndUp:i}=a(),{t:o,tm:_}=n();return(e,l)=>(c(),r(Te,{theme:"light"},{default:d((()=>[u(ee,{justify:"center",class:"py-8 py-sm-16"},{default:d((()=>[u(A,{cols:"12",lg:"10",class:"d-flex flex-column pb-0 pb-sm-3"},{default:d((()=>[m("p",{class:p(f(t)?"section-title-xs text-center":"section-title"),style:h({fontSize:f(t)?"2.3rem":""})},g(f(o)("pages.index.pageTitle.history")),7),m("p",{class:p(["text-sm-start mt-sm-4",f(t)?"section-subtitle-xs":"section-subtitle"])},g(f(o)("pages.index.timeline.title")),3)])),_:1}),u(A,{cols:"12",sm:"10",class:"d-sm-flex py-0 py-sm-3"},{default:d((()=>[u(A,{cols:"12",sm:"6",class:p(f(t)?"d-flex justify-center pt-0":"")},{default:d((()=>[m("video",{width:f(t)?350:700,autoplay:"",muted:"",loop:""},l[0]||(l[0]=[m("source",{src:ke,type:"video/mp4"},null,-1),x(" Your browser does not support the video tag. ")]),8,Se)])),_:1},8,["class"]),u(A,{cols:"12",sm:"6",class:"d-flex flex-column"},{default:d((()=>[(c(!0),v(y,null,b(f(_)("pages.index.timeline").events,(e=>(c(),v("div",{key:e.year},[u(ee,{class:"font-weight-bold"},{default:d((()=>[u(A,{cols:"2",sm:"3",class:"pt-sm-2 ml-sm-8 ml-4"},{default:d((()=>[m("span",{style:h({fontSize:f(t)?"1.15rem":"1.9rem"})},g(e.year),5)])),_:2},1024),u(A,{cols:"9",sm:"8",class:"mb-4 mb-sm-12"},{default:d((()=>[(c(!0),v(y,null,b(e.months,((e,l)=>(c(),r(ee,{key:e.title+l,style:h({fontSize:f(t)?"1rem":"1.3rem"})},{default:d((()=>[u(A,{cols:"2",class:"text-center"},{default:d((()=>{return[m("span",Ve,g((t=e.month,t<10?"0"+t:t)),1)];var t})),_:2},1024),u(A,{cols:"10",sm:"8",class:"pl-sm-3 pl-1"},{default:d((()=>[m("span",{style:h({fontSize:f(t)?"1rem":"1.3rem"})},g(e.title),5),m("p",{class:"font-weight-regular text-start",style:h({fontSize:f(t)?"0.95rem":"1.25rem",color:"#555555"})},g(e.body),5)])),_:2},1024)])),_:2},1032,["style"])))),128))])),_:2},1024)])),_:2},1024)])))),128))])),_:1})])),_:1})])),_:1})])),_:1}))}},[["__scopeId","data-v-71caf744"]]),Le=["href"],He=["src","alt","height","width"],Me={__name:"Partners",setup(e){const{xs:t}=a(),{t:l}=n(),s=[{name:"경기도과학진흥원",ci:"/img/partners/gbsa.jpg",link:"https://www.gbsa.or.kr/"},{name:"성균관대학교",ci:"/img/partners/성균관대.jpg",link:"https://www.skku.edu/skku/"},{name:"차의과대학교",ci:"/img/partners/차의과대.jpg",link:"https://www.cha.ac.kr/"},{name:"경민대학교",ci:"/img/partners/경민대.jpg",link:"https://www.kyungmin.ac.kr/homepage/intro.do"},{name:"연성대학교",ci:"/img/partners/연성대.jpg",link:"https://www.yeonsung.ac.kr/sites/ko/index.do"}],i=o((()=>t.value?{width:"105",height:"45"}:{width:"282",height:"120"}));return(e,a)=>(c(),r(Te,{theme:"light"},{default:d((()=>[u(ee,{justify:"center",class:"py-8 py-sm-16"},{default:d((()=>[u(A,{cols:"10",lg:"10",class:"d-flex flex-column"},{default:d((()=>[m("p",{class:p(f(t)?"section-title-xs text-center":"section-title"),style:h({fontSize:f(t)?"2.3rem":""})},g(f(l)("pages.index.pageTitle.partners")),7),m("p",{class:p(["text-sm-start mt-4",f(t)?"section-subtitle-xs":"section-subtitle"]),style:h({fontSize:f(t)?"0.9rem":""})},g(f(l)("pages.index.partners.title")),7),u(A,{cols:"12",justify:"center",class:"overflow-x-hidden px-sm-3 px-0"},{default:d((()=>[u(ee,{justify:"start",class:"py-4",style:{"line-height":"1.8"},"no-gutters":f(t)},{default:d((()=>[(c(),v(y,null,b(s,(({name:e,ci:t,link:l})=>u(A,{key:l,class:"my-sm-8 mx-auto",cols:"4",sm:"auto"},{default:d((()=>[m("a",{href:l,target:"_blank"},[m("img",{src:t,alt:e,height:f(i).height,width:f(i).width},null,8,He)],8,Le)])),_:2},1024))),64))])),_:1},8,["no-gutters"])])),_:1})])),_:1})])),_:1})])),_:1}))}},Ae=["innerHTML"],Ue=["innerHTML"],Ce=s({__name:"HeroSection",setup(e){const{xs:t,smAndUp:l,mdAndUp:s,lgAndUp:i}=a(),{t:p,locale:g}=n(),x=o((()=>({lineHeight:t.value?"1.4":"1.2",fontSize:t.value?"2.5rem":"5.6rem",fontWeight:"700"}))),_=o((()=>({lineHeight:"1.4",fontSize:t.value?"1.15rem":"2rem",fontWeight:"700",paddingBottom:t.value?"30%":"11%"}))),v=o((()=>p("pages.index.hero.upper").replace("st ","st<br />"))),y=o((()=>{const e=p("pages.index.hero.lower");return t.value?"EN"===g.value?e.replace("technology,","technology,<br />"):e.replace("곳으로","곳으로<br />"):e}));return(e,t)=>(c(),r(ee,{justify:"center",class:"px-0"},{default:d((()=>[u(U,{width:"100%",height:"100vh",class:"image-container d-flex flex-column justify-end"},{default:d((()=>[u(A,{cols:"11",sm:"10",lg:"10",offset:"1",class:"px-sm-4 text-box"},{default:d((()=>[m("p",{style:h(f(x)),innerHTML:f(v)},null,12,Ae),m("p",{style:h(f(_)),class:"mt-sm-8 mt-4",innerHTML:f(y)},null,12,Ue)])),_:1})])),_:1})])),_:1}))}},[["__scopeId","data-v-e49b9723"]]),Pe=k({color:String,...D(),...oe(),...O(),...F(),...N(),...W(),...X(),...B(),...j()},"VSheet"),Ie=T()({name:"VSheet",props:Pe(),setup(e,t){let{slots:l}=t;const{themeClasses:s}=S(e),{backgroundColorClasses:a,backgroundColorStyles:n}=$(V(e,"color")),{borderClasses:i}=G(e),{dimensionStyles:o}=J(e),{elevationClasses:c}=K(e),{locationStyles:r}=Y(e),{positionClasses:d}=Q(e),{roundedClasses:m}=R(e);return ce((()=>u(e.tag,{class:["v-sheet",s.value,a.value,i.value,c.value,d.value,m.value,e.class],style:[n.value,o.value,r.value,e.style]},l))),{}}}),qe=["innerHTML"],Ee=["innerHTML"],Be={class:"text-end"},De=s({__name:"Contact",setup(e){const{t:t,locale:l}=n(),{xs:s,smAndUp:i,mdAndUp:_,lgAndUp:v}=a(),y=z(null),b=z(!0),w=z(""),k=z(""),j=z(""),T=z(""),S=z(""),V=z(!1),M=[e=>!!e||"이메일 주소 입력이 필요합니다.",e=>/.+@.+\..+/.test(e)||"이메일 주소를 입력해야 합니다."],U=[e=>!!e||"내용 입력이 필요합니다.",e=>e&&e.length<=1e3||"Question must be less than 1000 characters"],C=o((()=>{const e=t("pages.index.contact.proposalText");return"en"===l.value?e.replace("out? ","out? <br />"):e.replace("요? ","요? <br />")})),P=o((()=>{const e=t("pages.index.contact.guideText");return"en"===l.value?e.replace("Automation). ","Automation). <br />"):e.replace("제공합니다. ","제공합니다. <br />")})),I=async()=>{if(y.value.validate(),b.value)try{await E({customer_name:w.value,customer_email:T.value,customer_phone:k.value,content:S.value}),alert("문의사항 등록되었습니다."),location.reload()}catch(e){console.error(e),alert("문제가 발생했습니다. 다시 시도해주세요.")}},E=async(e={})=>{const{customer_name:t,customer_email:l,content:s,customer_phone:a}=e;try{const e="https://ko.api.researcher.meaniit.com",n=new FormData;n.append("customer_name",t),n.append("customer_email",l),n.append("content",s),n.append("customer_phone",a);const{data:i,error:o}=await ie(`${e}/api/resource/users/inquiry`,{method:"POST",headers:{"x-api-key":"2kamERrKtd78e7iXsTxxP3kdkDteXbAM5uN7rWMV"},body:n},"$DOOAbaaV7K");return o.value&&console.error("서버에 데이터 저장 실패:",o.value),i.value}catch(n){console.error("서버 통신 중 오류 발생:",n)}};return(e,l)=>(c(),r(ee,{justify:"center",class:"gradient-background pb-12 pb-sm-0"},{default:d((()=>[u(A,{cols:"10",lg:"10",class:"d-sm-flex flex-sm-column align-center pt-16 text-center"},{default:d((()=>[m("p",{class:p(["my-6",f(s)?"section-title-xs text-center":"section-title"])}," Contact ",2),m("p",{class:"font-weight-bold my-4 d-flex flex-column flex-sm-row align-center",style:h({fontSize:f(s)?"1.3rem":"2.5rem"})},[u(q,{src:"/img/GET_A_LOGO.png",width:f(s)?80:200,class:"mr-sm-4 mb-sm-0 mb-2"},null,8,["width"]),m("span",null,g(f(t)("pages.index.contact.subTitle")),1)],4),m("p",{class:"font-weight-bold my-4",style:h({fontSize:f(s)?"1.15rem":"1.5rem"}),innerHTML:f(C)},null,12,qe),m("p",{class:p(["mb-sm-12",f(s)?"section-subtitle-xs":"section-subtitle"]),style:h({fontSize:f(s)?"0.92rem":""}),innerHTML:f(P)},null,14,Ee)])),_:1}),u(A,{cols:"12",sm:"10"},{default:d((()=>[u(A,{cols:"10",offset:"1","offset-sm":"1"},{default:d((()=>[m("p",Be,[l[6]||(l[6]=m("span",{class:"main-color"},"*",-1)),x(" "+g(f(t)("pages.index.contact.required")),1)])])),_:1}),u(le,{ref_key:"form",ref:y,"v-model":f(b),"validate-on":"submit"},{default:d((()=>[u(ee,{justify:"center"},{default:d((()=>[u(A,{cols:"10",sm:"5"},{default:d((()=>[u(Ie,{class:"d-flex align-center rounded-lg px-sm-4"},{default:d((()=>[u(A,{cols:"3",sm:"3",class:"input-label font-w-800"},{default:d((()=>[x(g(f(t)("pages.index.contact.template.name"))+" ",1),l[7]||(l[7]=m("span",{class:"main-color"},"*",-1))])),_:1}),u(A,{cols:"8",class:"py-0"},{default:d((()=>[u(se,{modelValue:f(w),"onUpdate:modelValue":l[0]||(l[0]=e=>L(w)?w.value=e:null),placeholder:f(t)("pages.index.contact.template.namePlaceholder"),density:"compact",variant:"plain","hide-details":"",type:"text","validate-on":"invalid-input"},null,8,["modelValue","placeholder"])])),_:1})])),_:1})])),_:1}),u(A,{cols:"10",sm:"5"},{default:d((()=>[u(Ie,{class:"d-flex align-center rounded-lg px-sm-4"},{default:d((()=>[u(A,{cols:"auto",sm:"3",class:"input-label font-w-800"},{default:d((()=>[x(g(f(t)("pages.index.contact.template.contactInfo"))+" ",1),l[8]||(l[8]=m("span",{class:"main-color"},"*",-1))])),_:1}),u(A,{cols:"8",class:"py-0"},{default:d((()=>[u(se,{modelValue:f(k),"onUpdate:modelValue":l[1]||(l[1]=e=>L(k)?k.value=e:null),placeholder:f(t)("pages.index.contact.template.contactInfoPlaceholder"),density:"compact",variant:"plain","hide-details":"",type:"text","validate-on":"invalid-input"},null,8,["modelValue","placeholder"])])),_:1})])),_:1})])),_:1})])),_:1}),u(ee,{justify:"center"},{default:d((()=>[u(A,{cols:"10",sm:"5"},{default:d((()=>[u(Ie,{class:"d-flex align-center rounded-lg px-sm-4"},{default:d((()=>[u(A,{cols:"3",sm:"3",class:"input-label font-w-800 pr-1 pr-sm-3"},{default:d((()=>[x(g(f(t)("pages.index.contact.template.email"))+" ",1),l[9]||(l[9]=m("span",{class:"main-color"},"*",-1))])),_:1}),u(A,{cols:"8",class:"py-0"},{default:d((()=>[u(se,{modelValue:f(T),"onUpdate:modelValue":l[2]||(l[2]=e=>L(T)?T.value=e:null),rules:M,placeholder:f(t)("pages.index.contact.template.emailPlaceholder"),density:"compact",variant:"plain","single-line":"","hide-details":"",type:"text","validate-on":"invalid-input"},null,8,["modelValue","placeholder"])])),_:1})])),_:1})])),_:1}),u(A,{cols:"10",sm:"5"},{default:d((()=>[u(Ie,{class:"d-flex align-center rounded-lg px-sm-4"},{default:d((()=>[u(A,{cols:"3",sm:"3",class:"input-label font-w-800"},{default:d((()=>[x(g(f(t)("pages.index.contact.template.companyInfo")),1)])),_:1}),u(A,{cols:"8",class:"py-0"},{default:d((()=>[u(se,{modelValue:f(j),"onUpdate:modelValue":l[3]||(l[3]=e=>L(j)?j.value=e:null),placeholder:f(t)("pages.index.contact.template.companyInfoPlaceholder"),density:"compact",variant:"plain","hide-details":"",type:"text"},null,8,["modelValue","placeholder"])])),_:1})])),_:1})])),_:1})])),_:1}),u(ee,{justify:"center"},{default:d((()=>[u(A,{cols:"10",sm:"10"},{default:d((()=>[u(Ie,{class:"d-sm-flex align-center rounded-lg px-sm-4"},{default:d((()=>[u(A,{cols:"5",sm:"auto","align-self":"start",class:"input-label font-w-800 py-4 mr-sm-12"},{default:d((()=>[x(g(f(t)("pages.index.contact.template.inquiries"))+" ",1),l[10]||(l[10]=m("span",{class:"main-color"},"*",-1))])),_:1}),u(A,{cols:"10",sm:"9",class:"pt-0 py-sm-3"},{default:d((()=>[u(ae,{modelValue:f(S),"onUpdate:modelValue":l[4]||(l[4]=e=>L(S)?S.value=e:null),counter:1e3,rules:U,name:"question",placeholder:f(t)("pages.index.contact.template.inquiriesPlaceholder"),density:"compact",variant:"plain","hide-details":"",type:"text",hint:"무관한 내용, 타인에 대한 비난/비방/욕설 등이 포함되는 경우 무통보 삭제될 수 있습니다.","auto-grow":"","validate-on":"submit"},null,8,["modelValue","placeholder"])])),_:1})])),_:1})])),_:1})])),_:1}),u(ee,{justify:"center"},{default:d((()=>[u(A,{cols:"10",sm:"11","offset-sm":"1",class:"pl-3 pl-sm-0"},{default:d((()=>[u(ne,{modelValue:f(V),"onUpdate:modelValue":l[5]||(l[5]=e=>L(V)?V.value=e:null),rules:[e=>!!e||"동의하지 않는 경우 내용이 등록되지 않습니다."],label:f(t)("pages.index.contact.template.label"),"validate-on":"submit",class:"font-w-600"},null,8,["modelValue","rules","label"])])),_:1})])),_:1})])),_:1},8,["v-model"]),u(ee,{justify:"center"},{default:d((()=>[u(A,{cols:"10",sm:"2"},{default:d((()=>[u(Z,{disabled:!f(b),color:"#3746fb",class:"mr-4",size:"x-large",block:"",variant:"flat",style:h([{"z-index":"999"},{fontSize:(f(s),"1.3rem"),fontWeight:"700"}]),onClick:I},{default:d((()=>[x(g(f(t)("pages.index.contact.template.contactBtn")),1)])),_:1},8,["disabled","style"])])),_:1})])),_:1})])),_:1}),f(i)?(c(),r(A,{key:0},{default:d((()=>l[11]||(l[11]=[m("p",{class:"bg-text"},"Tech Evangelistin Your Day",-1)]))),_:1})):H("",!0)])),_:1}))}},[["__scopeId","data-v-c6ff1781"]]),Oe={__name:"index",setup:e=>(a(),(e,t)=>(c(),r(re,{class:"d-flex flex-column pa-0",fluid:""},{default:d((()=>[u(Ce),u(ge),u(Me),u(we),u(ze),u(De)])),_:1})))};export{Oe as default};
