import{_ as e,u as t,e as s,f as l,g as a,o as i,h as n,w as d,b as c,a as o,n as r,i as u,d as m,t as p,j as f,c as h,r as x,F as g,k as v,l as y,m as _,p as b,v as w,q as k,s as j,x as T,y as C,z}from"./r_Ez2V8M.js";import{u as L}from"./TIhkRSTS.js";import{V as A}from"./X6dz3k08.js";import{V,a as H,b as M,c as S,d as U,e as I,f as B,g as P,m as X,h as $,i as q,j as E,k as F,l as O,n as W,u as D,o as G,p as J,q as K,r as N,s as Q,t as R}from"./Cm6eEEAv.js";import{V as Y}from"./D8gPIIIE.js";import{V as Z}from"./CwBlE6sz.js";import{m as ee,a as te,V as se,b as le}from"./ByQ5WGPZ.js";import{m as ae,u as ie}from"./DIU8TKhH.js";import{V as ne}from"./Drw3eIZ3.js";import"./DBO0z-O2.js";const de=["innerHTML"],ce={class:"video-container"},oe=["src"],re={class:"video-container"},ue=["src"],me="#3746fb",pe=e({__name:"Services",setup(e){const{xs:h,smAndUp:x}=t(),{t:g,locale:v}=s(),y=l(),{trackEvent:_}=L(),b=a((()=>({header:{title:g("pages.index.service.header.title")},meaniit:{name:g("pages.index.service.cards.meaniit.title"),description:g("pages.index.service.cards.meaniit.description"),shortcut:{name:g("pages.index.service.cards.meaniit.shortcutLabel"),href:"https://ko.meaniit.com/"},introduce:{name:g("pages.index.service.cards.meaniit.introduceLabel"),to:"/service/meaniit/introduce"}},education:{name:g("pages.index.service.cards.education.title"),description:g("pages.index.service.cards.education.description"),introduce:{name:g("pages.index.service.cards.education.introduceLabel"),to:"get-a@get-a.io"}}}))),w={minWidth:0,paddingLeft:0},k="/img/report.mp4",j="/img/teaching.mp4",T=a((()=>h.value?"en"===v.value?"600":"500":"600")),C=e=>{_("service_section_nav_btn",{button_name:e.name}),e.href?window.open(e.href,"_blank"):y.push(e.to)};return(e,t)=>(i(),n(Z,{align:"center",justify:"center"},{default:d((()=>[c(A,{cols:"12",class:"text-center pt-12 text-md-h5 text-h6",style:{"line-height":"1.8"}},{default:d((()=>[o("div",{class:r(e.smAndup?"font-weight-black":"font-weight-bold"),innerHTML:u(b).header.title},null,10,de)])),_:1}),c(A,{cols:"12",sm:"10",md:"6",lg:"5",xl:"4"},{default:d((()=>[c(V,{height:u(T),flat:"",class:"px-sm-4 px-md-6 px-lg-8 my-sm-7 rounded-xl pt-7 px-1",theme:"light"},{default:d((()=>[c(V,{class:"my-sm-auto my-0",flat:""},{default:d((()=>[c(H,{class:"font-weight-bold content-title"},{default:d((()=>[m(p(u(b).meaniit.name),1)])),_:1}),c(M,{class:"service-exp"},{default:d((()=>[m(p(u(b).meaniit.description),1)])),_:1}),c(S,{class:r([u(x)?"pt-sm-4  pl-4":"d-flex flex-column","en"===u(v)?"d-flex flex-column align-start":""])},{default:d((()=>[c(Y,{disabled:!u(b).meaniit.shortcut.href,elevation:0,color:me,style:f({...w,...u(x)?{}:{width:"100%"}}),variant:"elevated",rounded:"",class:r([u(x)?"px-4 ":"mb-2"]),onClick:t[0]||(t[0]=e=>C(u(b).meaniit.shortcut))},{default:d((()=>[m(p(u(b).meaniit.shortcut.name),1)])),_:1},8,["disabled","style","class"]),c(Y,{disabled:"",color:me,style:f({...w,...u(x)?{}:{width:"100%"}}),variant:"outlined",rounded:"",class:r([u(x)?"px-4":"px-7 ml-n1"]),onClick:t[1]||(t[1]=e=>C(u(b).meaniit.introduce))},{default:d((()=>[m(p(u(b).meaniit.introduce.name),1)])),_:1},8,["style","class"])])),_:1},8,["class"]),o("div",ce,[o("video",{src:k,autoplay:"",loop:"",muted:"",class:r(u(x)?"meaniit-video":"meaniit-video-xs")},null,10,oe)])])),_:1})])),_:1},8,["height"])])),_:1}),c(A,{cols:"12",sm:"10",md:"6",lg:"5",xl:"4"},{default:d((()=>[c(V,{height:u(T),flat:"",class:"px-sm-4 px-md-6 px-lg-8 my-sm-7 rounded-xl pt-7 px-1",theme:"light"},{default:d((()=>[c(V,{class:"my-sm-auto my-0",flat:""},{default:d((()=>[c(H,{class:"font-weight-bold content-title"},{default:d((()=>[m(p(u(b).education.name),1)])),_:1}),c(M,{class:"service-exp"},{default:d((()=>[m(p(u(b).education.description),1)])),_:1}),c(S,{class:r([u(x)?"pt-4 pl-4":"full-width"])},{default:d((()=>[c(Y,{variant:"outlined",color:me,style:f({...w,...u(h).value?{width:"100%"}:{}}),block:!u(x),rounded:"",class:r([u(x)?"px-4":"px-7 ml-n1"]),disabled:!u(b).education.introduce.to,onClick:t[2]||(t[2]=e=>{return t=u(b).education.introduce,window.location.href=`mailto:${t.to}`,void _("contact_us_btn",{button_name:t.name});var t})},{default:d((()=>[m(p(u(b).education.introduce.name),1)])),_:1},8,["style","block","class","disabled"])])),_:1},8,["class"]),o("div",re,[o("video",{src:j,autoplay:"",loop:"",muted:"",class:r(u(x)?"edu-video":"edu-video-xs")},null,10,ue)])])),_:1})])),_:1},8,["height"])])),_:1})])),_:1}))}},[["__scopeId","data-v-e6d847e3"]]),fe={class:"flex flex-column ml-3"},he={class:"text-body-1 font-weight-bold"},xe={class:"headline-color mb-2"},ge={class:"text-sm--body-1 text-body-2 text-gray mb-sm-2"},ve={class:"flex flex-column ml-3"},ye={class:"text-body-1 font-weight-bold"},_e={class:"headline-color mb-2"},be={class:"text-sm--body-1 text-body-2 text-gray mb-sm-2"},we={__name:"Founders",setup(e){const{xs:l,smAndUp:f,mdAndUp:_}=t(),{tm:b,locale:w}=s(),k=a((()=>b("pages.index.founders.members"))),j=a((()=>b("pages.index.founders.advisors"))),T=a((()=>"en"===w.value));return(e,t)=>(i(),h("div",null,[(i(),n(x("script"),{type:"text/javascript",src:"https://platform.linkedin.com/badges/js/profile.js",async:"",defer:""})),c(Z,{justify:"center",class:"ma-0 pa-0"},{default:d((()=>[c(A,{cols:"10",class:"font-weight-medium text-grey text-h6"},{default:d((()=>t[0]||(t[0]=[m(" Team ")]))),_:1}),(i(!0),h(g,null,v(u(k),(({name:e,headline:s,avatar:l,companyAndSchoolInfo:a,link:h},x)=>(i(),n(A,{key:x,cols:"12",sm:"12",md:"6",lg:"5",class:"d-flex justify-center mb-4"},{default:d((()=>[c(V,{class:r(["d-flex align-center rounded-xl px-sm-8 pa-md-4 px-4",{"justify-space-evenly":u(T)}]),"min-height":u(f)?"220":"230",width:u(f)?"420":"270"},{default:d((()=>[c(U,{size:u(f)?"140":"100"},{default:d((()=>[c(I,{src:l,alt:e},null,8,["src","alt"])])),_:2},1032,["size"]),o("div",fe,[o("div",he,p(e),1),o("div",xe,p(s),1),o("div",ge,p(a),1),c(S,{class:"pa-0"},{default:d((()=>[c(Y,{rounded:"",variant:"outlined",position:"absolute",size:"small",color:"#3746fb",href:h,class:"mt-sm-4 mt-0"},{default:d((()=>t[1]||(t[1]=[m(" View profile ")]))),_:2},1032,["href"])])),_:2},1024)])])),_:2},1032,["class","min-height","width"])])),_:2},1024)))),128))])),_:1}),c(Z,{justify:"center",class:"ma-0 pa-0"},{default:d((()=>[c(A,{cols:"10",class:"font-weight-medium text-grey text-h6"},{default:d((()=>t[2]||(t[2]=[m(" Advisor ")]))),_:1}),(i(!0),h(g,null,v(u(j),(({name:e,headline:s,avatar:l,companyAndSchoolInfo:a,link:r},h)=>(i(),n(A,{key:h,cols:"12",sm:"12",md:"6",lg:"5",class:"d-flex justify-center pb-4 mb-sm-4"},{default:d((()=>[c(V,{class:"d-flex justify-space-evenly align-center rounded-xl px-sm-8 pa-md-4 px-4","min-height":u(f)?"220":"230",width:u(f)?"420":"270"},{default:d((()=>[c(U,{size:u(f)?"140":"100"},{default:d((()=>[c(I,{src:l,alt:e},null,8,["src","alt"])])),_:2},1032,["size"]),o("div",ve,[o("div",ye,p(e),1),o("div",_e,p(s),1),o("div",be,p(a),1),c(S,{class:"pa-0"},{default:d((()=>[c(Y,{rounded:"",variant:"outlined",position:"absolute",size:"small",color:"#3746fb",href:r,class:"mt-sm-4 mt-0"},{default:d((()=>t[3]||(t[3]=[m(" View profile ")]))),_:2},1032,["href"])])),_:2},1024)])])),_:2},1032,["min-height","width"])])),_:2},1024)))),128)),u(_)?(i(),n(A,{key:0,cols:"12",md:"6",lg:"5",class:"d-flex justify-center pb-8"},{default:d((()=>[c(V,{class:"rounded-xl","max-height":u(f)?"100%":"230",width:u(f)?"420":"270"},{default:d((()=>[c(I,{src:"/img/meeting_img.png",height:"100%",cover:"",class:"rounded-xl"})])),_:1},8,["max-height","width"])])),_:1})):y("",!0)])),_:1})]))}},ke={class:"d-flex flex-column"},je={class:"d-flex flex-column align-center",cols:"12"},Te={class:"font-weight-bold my-4",style:{"font-size":"1.4rem"}},Ce={class:"text-body-1 text-line-height"},ze=e({__name:"Timeline",setup(e){const{xs:l,smAndUp:m,mdAndUp:x,lgAndUp:k}=t(),{t:j,tm:T}=s(),{trackEvent:C}=L(),z=a((()=>T("pages.index.timeline.events").map((e=>({title:j(e.title),date:j(e.date),body:j(e.body)}))))),H=_(0),M=e=>e.split("."),S=e=>e<10?"0"+e:e,U=e=>{"left"===e?X():"right"===e&&I(),C("carousel_click")},I=()=>{const e=z.value.length,t=m.value?e-3:e-1;H.value<t&&(H.value+=1)},X=()=>{H.value>0&&(H.value-=1)};return(e,t)=>(i(),h(g,null,[c(Z,{justify:"center"},{default:d((()=>[c(A,{cols:"auto",offset:u(x)?4:6,class:r(u(m)?"pb-8 pl-16":"mb-8")},{default:d((()=>[c(Y,{disabled:0===u(H),color:"white",variant:"text",onClick:t[0]||(t[0]=e=>U("left"))},{default:d((()=>[c(B,{icon:u(ee),size:"60"},null,8,["icon"])])),_:1},8,["disabled"]),c(Y,{disabled:u(H)===u(z).length-3,color:"white",variant:"text",onClick:t[1]||(t[1]=e=>U("right"))},{default:d((()=>[c(B,{icon:u(te),size:"60"},null,8,["icon"])])),_:1},8,["disabled"])])),_:1},8,["offset","class"])])),_:1}),c(V,{flat:"",variant:u(l)?"outlined":"",color:"#3746fb",class:"mt-sm-4 mx-0 pt-16 pb-sm-5"},{default:d((()=>[c(P,{class:"px-0"},{default:d((()=>[t[2]||(t[2]=o("div",{class:"history-line"},null,-1)),u(m)?(i(),n(A,{key:0,id:"carouselContainer",cols:"9",offset:"2",class:"d-flex mt-n16 overflow-hidden"},{default:d((()=>[(i(!0),h(g,null,v(u(z),((e,t)=>(i(),n(A,{key:t,style:f({transform:`translateX(${100*-u(H)}%)`}),sm:"6",lg:"4"},{default:d((()=>[b(o("div",ke,[c(A,{class:"white-circle circle-sm"},{default:d((()=>[(i(!0),h(g,null,v(M(e.date),((e,t)=>(i(),h("div",{key:e+t},[o("div",{class:r([t?"month":"year","main-color"])},p(t?S(e):e),3)])))),128))])),_:2},1024),c(A,{class:"text-white px-4 pr-md-8"},{default:d((()=>[o("div",{class:r(["text-wrap my-4 font-weight-black",u(k)?"history-title":"text-h6"])},p(e.title),3),o("div",{class:r(["text-line-height",u(k)?"history-body":"text-body-1"])},p(e.body),3)])),_:2},1024)],512),[[w,t>=u(H)]])])),_:2},1032,["style"])))),128))])),_:1})):y("",!0),u(l)?(i(),n(Z,{key:1,class:"mt-n16",justify:"center"},{default:d((()=>[c(A,{cols:"12",class:"d-flex flex-nowrap overflow-hidden"},{default:d((()=>[(i(!0),h(g,null,v(u(z),((e,t)=>(i(),n(A,{key:t,cols:"12",class:"text-center px-0 pt-0",style:f({transform:`translateX(${100*-u(H)}%)`})},{default:d((()=>{return[b(o("div",je,[c(A,{class:"white-circle circle-xs",cols:"7"},{default:d((()=>[(i(!0),h(g,null,v(M(e.date),((e,t)=>(i(),h("div",{key:e+t},[o("div",{class:r([t?"month-xs mt-1":"year-xs mb-1","main-color"])},p(t?S(e):e),3)])))),128))])),_:2},1024),c(A,{cols:"10",class:"text-white"},{default:d((()=>[o("div",Te,p(e.title),1),o("div",Ce,p(e.body),1)])),_:2},1024)],512),[[w,(s=t,H.value===s)]])];var s})),_:2},1032,["style"])))),128))])),_:1})])),_:1})):y("",!0)])),_:1})])),_:1},8,["variant"])],64))}},[["__scopeId","data-v-c671b5a8"]]),Le={class:"font-weight-bold pt-2 pb-8"},Ae=["href"],Ve=["src","alt","height","width"],He={__name:"Partners",setup(e){const{xs:l}=t(),{t:r}=s(),m=[{name:"경기도과학진흥원",ci:"/img/partners/gbsa.png",link:"https://www.gbsa.or.kr/"},{name:"성균관대학교",ci:"/img/partners/성균관대.png",link:"https://www.skku.edu/skku/"},{name:"차의과대학교",ci:"/img/partners/차의과대.png",link:"https://www.cha.ac.kr/"},{name:"경민대학교",ci:"/img/partners/경민대.png",link:"https://www.kyungmin.ac.kr/homepage/intro.do"},{name:"연성대학교",ci:"/img/partners/연성대.png",link:"https://www.yeonsung.ac.kr/sites/ko/index.do"}],f=a((()=>l.value?{width:"90",height:"30"}:{width:"160",height:"40"}));return(e,t)=>(i(),n(A,{cols:"12",justify:"center"},{default:d((()=>[c(Z,{justify:"center",class:"text-sm-h5 text-h6 pa-4",style:{"line-height":"1.8"}},{default:d((()=>[o("div",Le,p(u(r)("pages.index.partners.title")),1)])),_:1}),c(Z,{justify:"center",class:"text-sm-h5 text-h6 py-4",style:{"line-height":"1.8"}},{default:d((()=>[(i(),h(g,null,v(m,(({name:e,ci:t,link:s})=>c(A,{key:s,class:"text-center my-8"},{default:d((()=>[o("a",{href:s,target:"_blank"},[o("img",{src:t,alt:e,height:u(f).height,width:u(f).width},null,8,Ve)],8,Ae)])),_:2},1024))),64))])),_:1})])),_:1}))}},Me=k({color:String,...X(),...ae(),...$(),...q(),...E(),...F(),...O(),...W(),...j()},"VSheet"),Se=T()({name:"VSheet",props:Me(),setup(e,t){let{slots:s}=t;const{themeClasses:l}=C(e),{backgroundColorClasses:a,backgroundColorStyles:i}=D(z(e,"color")),{borderClasses:n}=G(e),{dimensionStyles:d}=J(e),{elevationClasses:o}=K(e),{locationStyles:r}=N(e),{positionClasses:u}=Q(e),{roundedClasses:m}=R(e);return ie((()=>c(e.tag,{class:["v-sheet",l.value,a.value,n.value,o.value,u.value,m.value,e.class],style:[i.value,d.value,r.value,e.style]},s))),{}}}),Ue=["innerHTML"],Ie=["innerHTML"],Be={class:"scroll-indicator"},Pe=e({__name:"Carousel",setup(e){const{xs:l,smAndUp:m}=t(),{t:p}=s(),f=a((()=>l.value?p("pages.index.carousel.upperXsOnly"):p("pages.index.carousel.upper"))),h=a((()=>l.value?"upperText-xsonly":"upperText")),x=a((()=>l.value?"lowerText-xsonly":"lowerText"));return(e,t)=>(i(),n(V,{width:"100%",height:u(m)?"105vh":"100%",class:"image-container mt-9"},{default:d((()=>[c(Se,{height:"100%",color:"rgba(0,0,0,0)",class:"d-flex justify-center align-center pa-sm-4 px-0"},{default:d((()=>[c(A,{cols:"10",sm:"8"},{default:d((()=>[c(se,{lines:"two",class:r(["pt-12 font-color parent-text-float text-center",u(l)?"pl-0":"side-blank"])},{default:d((()=>[o("p",{class:r([u(h),"my-4 text-sm-h3 text-lg-h2 pt-4 pt-sm-0 text-h5 font-weight-black"]),innerHTML:u(f)},null,10,Ue),o("p",{class:r([u(x),"pt-4"]),innerHTML:u(p)("pages.index.carousel.lower")},null,10,Ie),o("div",Be,[c(B,{icon:u(le),size:"50",class:"arrow"},null,8,["icon"])])])),_:1},8,["class"])])),_:1})])),_:1})])),_:1},8,["height"]))}},[["__scopeId","data-v-9ec3ef02"]]),Xe=k({withBackground:Boolean,...ae(),...j(),...W()},"VThemeProvider"),$e=T()({name:"VThemeProvider",props:Xe(),setup(e,t){let{slots:s}=t;const{themeClasses:l}=C(e);return()=>{var t;return e.withBackground?c(e.tag,{class:["v-theme-provider",l.value,e.class],style:e.style},{default:()=>{var e;return[null==(e=s.default)?void 0:e.call(s)]}}):null==(t=s.default)?void 0:t.call(s)}}}),qe={class:"content-title"},Ee={class:"content-title py-4"},Fe={class:"content-title text-white py-4"},Oe=["innerHTML"],We={class:"content-title"},De=["innerHTML"],Ge={__name:"index",setup(e){const{xs:l,smAndUp:a,mdAndUp:r}=t(),{t:m}=s();return(e,t)=>(i(),n(ne,{class:"d-flex flex-column pa-0",fluid:""},{default:d((()=>[c(Z,{justify:"center",class:"px-0"},{default:d((()=>[c(Pe)])),_:1}),c(Z,{justify:"center",style:{"background-color":"rgba(2, 32, 71, 0.05)","font-size":"1.8rem","min-height":"100vh"},class:"py-8 py-sm-16"},{default:d((()=>[c(A,{class:"d-flex flex-column align-center pt-16"},{default:d((()=>[o("p",qe,p(u(m)("pages.index.pageTitle.service")),1),c(A,{cols:"12",sm:"8"},{default:d((()=>[c(pe)])),_:1})])),_:1})])),_:1}),c($e,{theme:"light","with-background":"",style:{width:"100%"}},{default:d((()=>[c(Z,{class:"d-flex justify-center align-center py-8 py-sm-16",style:{"min-height":"80vh"}},{default:d((()=>[c(A,{class:"d-flex flex-column align-center"},{default:d((()=>[o("p",Ee,p(u(m)("pages.index.pageTitle.partners")),1),c(A,{cols:"11",sm:"10",md:"8",class:"pb-16"},{default:d((()=>[c(He)])),_:1})])),_:1})])),_:1})])),_:1}),c(Z,{justify:"center",align:"center",style:{"background-color":"#3746fb","min-height":"80vh"},class:"mt-16 d-flex pt-8"},{default:d((()=>[c(A,{cols:"8",sm:"8",class:"content-subtitle pa-0 text-white"},{default:d((()=>[o("p",Fe,p(u(m)("pages.index.pageTitle.history")),1),o("p",{style:{"font-size":"1.4rem"},class:"mt-4 font-weight-bold",innerHTML:u(m)("pages.index.timeline.title")},null,8,Oe)])),_:1}),c(A,{cols:"12",sm:"12"},{default:d((()=>[c(ze)])),_:1})])),_:1}),c(Z,{justify:"center",class:"pt-16",style:f([{"background-color":"rgba(2, 32, 71, 0.05)"},{minHeight:u(r)?"100vh":""}])},{default:d((()=>[c(A,{class:"d-flex flex-column align-center"},{default:d((()=>[o("p",We,p(u(m)("pages.index.pageTitle.team")),1),o("div",{class:"content-subtitle my-4",style:f({"font-size":u(a)?"1.8rem":"1.2rem"})},[o("div",{innerHTML:u(m)("pages.index.pageTitle.teamSub")},null,8,De)],4),c(A,{cols:"11",sm:"8"},{default:d((()=>[c(we)])),_:1})])),_:1})])),_:1},8,["style"])])),_:1}))}};export{Ge as default};