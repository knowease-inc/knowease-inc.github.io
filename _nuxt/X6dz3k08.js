import{n as e}from"./Cm6eEEAv.js";import{m as t}from"./DIU8TKhH.js";import{aK as l,av as r,q as o,x as s,g as a,aL as n}from"./r_Ez2V8M.js";const u=l.reduce(((e,t)=>(e[t]={type:[Boolean,String,Number],default:!1},e)),{}),f=l.reduce(((e,t)=>(e["offset"+r(t)]={type:[String,Number],default:null},e)),{}),c=l.reduce(((e,t)=>(e["order"+r(t)]={type:[String,Number],default:null},e)),{}),i={col:Object.keys(u),offset:Object.keys(f),order:Object.keys(c)};function d(e,t,l){let r=e;if(null!=l&&!1!==l){if(t){r+=`-${t.replace(e,"")}`}return"col"===e&&(r="v-"+r),"col"!==e||""!==l&&!0!==l?(r+=`-${l}`,r.toLowerCase()):r.toLowerCase()}}const p=["auto","start","end","center","baseline","stretch"],m=o({cols:{type:[Boolean,String,Number],default:!1},...u,offset:{type:[String,Number],default:null},...f,order:{type:[String,Number],default:null},...c,alignSelf:{type:String,default:null,validator:e=>p.includes(e)},...t(),...e()},"VCol"),g=s()({name:"VCol",props:m(),setup(e,t){let{slots:l}=t;const r=a((()=>{const t=[];let l;for(l in i)i[l].forEach((r=>{const o=e[r],s=d(l,r,o);s&&t.push(s)}));const r=t.some((e=>e.startsWith("v-col-")));return t.push({"v-col":!r||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),t}));return()=>{var t;return n(e.tag,{class:[r.value,e.class],style:e.style},null==(t=l.default)?void 0:t.call(l))}}});export{g as V};