import{s as t,aT as e,aE as i,aC as s,m as n,aU as o}from"./DxRAhOm-.js";class r{constructor(t){let{x:e,y:i,width:s,height:n}=t;this.x=e,this.y=i,this.width=s,this.height=n}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function a(t,e){return{x:{before:Math.max(0,e.left-t.left),after:Math.max(0,t.right-e.right)},y:{before:Math.max(0,e.top-t.top),after:Math.max(0,t.bottom-e.bottom)}}}function l(t){return Array.isArray(t)?new r({x:t[0],y:t[1],width:0,height:0}):t.getBoundingClientRect()}function f(t){const e=t.getBoundingClientRect(),i=getComputedStyle(t),s=i.transform;if(s){let n,o,a,l,f;if(s.startsWith("matrix3d("))n=s.slice(9,-1).split(/, /),o=+n[0],a=+n[5],l=+n[12],f=+n[13];else{if(!s.startsWith("matrix("))return new r(e);n=s.slice(7,-1).split(/, /),o=+n[0],a=+n[3],l=+n[4],f=+n[5]}const u=i.transformOrigin,h=e.x-l-(1-o)*parseFloat(u),c=e.y-f-(1-a)*parseFloat(u.slice(u.indexOf(" ")+1)),d=o?e.width/o:t.offsetWidth+1,y=a?e.height/a:t.offsetHeight+1;return new r({x:h,y:c,width:d,height:y})}return new r(e)}function u(t,e,i){if(void 0===t.animate)return{finished:Promise.resolve()};let s;try{s=t.animate(e,i)}catch(n){return{finished:Promise.resolve()}}return void 0===s.finished&&(s.finished=new Promise((t=>{s.onfinish=()=>{t(s)}}))),s}const h="cubic-bezier(0.4, 0, 0.2, 1)",c="cubic-bezier(0.0, 0, 0.2, 1)",d="cubic-bezier(0.4, 0, 1, 1)";var y="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z",p="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z",C="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",g="M13.64,21.97C13.14,22.21 12.54,22 12.31,21.5L10.13,16.76L7.62,18.78C7.45,18.92 7.24,19 7,19A1,1 0 0,1 6,18V3A1,1 0 0,1 7,2C7.24,2 7.47,2.09 7.64,2.23L7.65,2.22L19.14,11.86C19.57,12.22 19.62,12.85 19.27,13.27C19.12,13.45 18.91,13.57 18.7,13.61L15.54,14.23L17.74,18.96C18,19.46 17.76,20.05 17.26,20.28L13.64,21.97Z",v="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z",L="M13 19C13 18.66 13.04 18.33 13.09 18H4V8L12 13L20 8V13.09C20.72 13.21 21.39 13.46 22 13.81V6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H13.09C13.04 19.67 13 19.34 13 19M20 6L12 11L4 6H20M20 22V20H16V18H20V16L23 19L20 22Z",H="M4,6H20V16H4M20,18A2,2 0 0,0 22,16V6C22,4.89 21.1,4 20,4H4C2.89,4 2,4.89 2,6V16A2,2 0 0,0 4,18H0V20H24V18H20Z",m="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z",V="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z",M="M5,3C3.89,3 3,3.89 3,5V19C3,20.11 3.89,21 5,21H19C20.11,21 21,20.11 21,19V5C21,3.89 20.11,3 19,3H5M5,5H19V19H5V5M7,7V9H17V7H7M7,11V13H17V11H7M7,15V17H14V15H7Z",b="M16.36,14C16.44,13.34 16.5,12.68 16.5,12C16.5,11.32 16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12C20,12.69 19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12C9.5,11.32 9.56,10.65 9.66,10H14.34C14.43,10.65 14.5,11.32 14.5,12C14.5,12.68 14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12C4,11.31 4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.32 7.5,12C7.5,12.68 7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z";const w=n({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition");function x(n,o,r){return t()({name:n,props:w({mode:r,origin:o}),setup(t,o){let{slots:r}=o;const a={onBeforeEnter(e){t.origin&&(e.style.transformOrigin=t.origin)},onLeave(e){if(t.leaveAbsolute){const{offsetTop:t,offsetLeft:i,offsetWidth:s,offsetHeight:n}=e;e._transitionInitialStyles={position:e.style.position,top:e.style.top,left:e.style.left,width:e.style.width,height:e.style.height},e.style.position="absolute",e.style.top=`${t}px`,e.style.left=`${i}px`,e.style.width=`${s}px`,e.style.height=`${n}px`}t.hideOnLeave&&e.style.setProperty("display","none","important")},onAfterLeave(e){if(t.leaveAbsolute&&(null==e?void 0:e._transitionInitialStyles)){const{position:t,top:i,left:s,width:n,height:o}=e._transitionInitialStyles;delete e._transitionInitialStyles,e.style.position=t||"",e.style.top=i||"",e.style.left=s||"",e.style.width=n||"",e.style.height=o||""}}};return()=>{const o=t.group?e:i;return s(o,{name:t.disabled?"":n,css:!t.disabled,...t.group?void 0:{mode:t.mode},...t.disabled?{}:a},r.default)}}})}function A(n,o){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"in-out";return t()({name:n,props:{mode:{type:String,default:r},disabled:Boolean,group:Boolean},setup(t,r){let{slots:a}=r;const l=t.group?e:i;return()=>s(l,{name:t.disabled?"":n,css:!t.disabled,...t.disabled?{}:o},a.default)}})}function _(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";const e=arguments.length>1&&void 0!==arguments[1]&&arguments[1]?"width":"height",i=o(`offset-${e}`);return{onBeforeEnter(t){t._parent=t.parentNode,t._initialStyle={transition:t.style.transition,overflow:t.style.overflow,[e]:t.style[e]}},onEnter(s){const n=s._initialStyle;s.style.setProperty("transition","none","important"),s.style.overflow="hidden";const o=`${s[i]}px`;s.style[e]="0",s.offsetHeight,s.style.transition=n.transition,t&&s._parent&&s._parent.classList.add(t),requestAnimationFrame((()=>{s.style[e]=o}))},onAfterEnter:n,onEnterCancelled:n,onLeave(t){t._initialStyle={transition:"",overflow:t.style.overflow,[e]:t.style[e]},t.style.overflow="hidden",t.style[e]=`${t[i]}px`,t.offsetHeight,requestAnimationFrame((()=>t.style[e]="0"))},onAfterLeave:s,onLeaveCancelled:s};function s(e){t&&e._parent&&e._parent.classList.remove(t),n(e)}function n(t){const i=t._initialStyle[e];t.style.overflow=t._initialStyle.overflow,null!=i&&(t.style[e]=i),delete t._initialStyle}}x("fab-transition","center center","out-in"),x("dialog-bottom-transition"),x("dialog-top-transition");const S=x("fade-transition");x("scale-transition"),x("scroll-x-transition"),x("scroll-x-reverse-transition"),x("scroll-y-transition"),x("scroll-y-reverse-transition"),x("slide-x-transition"),x("slide-x-reverse-transition");const R=x("slide-y-transition");x("slide-y-reverse-transition");const W=A("expand-transition",_()),B=A("expand-x-transition",_("",!0)),Z=Symbol("Forwarded refs");function $(t,e){let i=t;for(;i;){const t=Reflect.getOwnPropertyDescriptor(i,e);if(t)return t;i=Object.getPrototypeOf(i)}}function O(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),s=1;s<e;s++)i[s-1]=arguments[s];return t[Z]=i,new Proxy(t,{get(t,e){if(Reflect.has(t,e))return Reflect.get(t,e);if("symbol"!=typeof e&&!e.startsWith("$")&&!e.startsWith("__"))for(const s of i)if(s.value&&Reflect.has(s.value,e)){const t=Reflect.get(s.value,e);return"function"==typeof t?t.bind(s.value):t}},has(t,e){if(Reflect.has(t,e))return!0;if("symbol"==typeof e||e.startsWith("$")||e.startsWith("__"))return!1;for(const s of i)if(s.value&&Reflect.has(s.value,e))return!0;return!1},set(t,e,s){if(Reflect.has(t,e))return Reflect.set(t,e,s);if("symbol"==typeof e||e.startsWith("$")||e.startsWith("__"))return!1;for(const n of i)if(n.value&&Reflect.has(n.value,e))return Reflect.set(n.value,e,s);return!1},getOwnPropertyDescriptor(t,e){var s;const n=Reflect.getOwnPropertyDescriptor(t,e);if(n)return n;if("symbol"!=typeof e&&!e.startsWith("$")&&!e.startsWith("__")){for(const t of i){if(!t.value)continue;const i=$(t.value,e)??("_"in t.value?$(null==(s=t.value._)?void 0:s.setupState,e):void 0);if(i)return i}for(const t of i){const i=t.value&&t.value[Z];if(!i)continue;const s=i.slice();for(;s.length;){const t=s.shift(),i=$(t.value,e);if(i)return i;const n=t.value&&t.value[Z];n&&s.push(...n)}}}}})}export{r as B,S as V,L as a,p as b,v as c,y as d,V as e,O as f,g,B as h,R as i,u as j,W as k,C as l,M as m,f as n,m as o,b as p,H as q,c as r,h as s,d as t,l as u,a as v};
