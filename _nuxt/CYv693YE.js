import{g as e,aJ as t,y as r,ai as a,B as l,bf as n,bg as o,aC as u,bh as i,aM as s,bi as v,bj as c,bk as f,h as d,bl as p,bm as h,bn as g,bo as b,bp as y,bq as m,br as x}from"./wZGbNkSH.js";async function q(t,r=e()){const{path:a,matched:l}=r.resolve(t);if(!l.length)return;if(r._routePreloaded||(r._routePreloaded=new Set),r._routePreloaded.has(a))return;const n=r._preloadPromises=r._preloadPromises||[];if(n.length>4)return Promise.all(n).then((()=>q(t,r)));r._routePreloaded.add(a);const o=l.map((e=>{var t;return null==(t=e.components)?void 0:t.default})).filter((e=>"function"==typeof e));for(const e of o){const t=Promise.resolve(e()).catch((()=>{})).finally((()=>n.splice(n.indexOf(t))));n.push(t)}await Promise.all(n)}function C(f){const m=f.componentName||"NuxtLink";function x(e){return"string"==typeof e&&e.startsWith("#")}function C(e,t){if(!e||"append"!==f.trailingSlash&&"remove"!==f.trailingSlash)return e;if("string"==typeof e)return S(e,f.trailingSlash);const r="path"in e&&void 0!==e.path?e.path:t(e).path;return{...e,name:void 0,path:S(r,f.trailingSlash)}}function P(t){const r=e(),a=y(),l=d((()=>!!t.target&&"_self"!==t.target)),n=d((()=>{const e=t.to||t.href||"";return"string"==typeof e&&p(e,{acceptRelative:!0})})),o=v("RouterLink"),u="string"!=typeof o?o.useLink:void 0,i=d((()=>{if(t.external)return!0;const e=t.to||t.href||"";return"object"!=typeof e&&(""===e||n.value)})),s=d((()=>{const e=t.to||t.href||"";return i.value?e:C(e,r.resolve)})),c=i.value||null==u?void 0:u({...t,to:s}),f=d((()=>{var e;if(!s.value||n.value||x(s.value))return s.value;if(i.value){const e="object"==typeof s.value&&"path"in s.value?h(s.value):s.value;return C("object"==typeof e?r.resolve(e).href:e,r.resolve)}return"object"==typeof s.value?(null==(e=r.resolve(s.value))?void 0:e.href)??null:C(g(a.app.baseURL,s.value),r.resolve)}));return{to:s,hasTarget:l,isAbsoluteUrl:n,isExternal:i,href:f,isActive:(null==c?void 0:c.isActive)??d((()=>s.value===r.currentRoute.value.path)),isExactActive:(null==c?void 0:c.isExactActive)??d((()=>s.value===r.currentRoute.value.path)),route:(null==c?void 0:c.route)??d((()=>r.resolve(s.value))),async navigate(){await b(f.value,{replace:t.replace,external:i.value||l.value})}}}return t({name:m,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},prefetchOn:{type:[String,Object],default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},useLink:P,setup(t,{slots:d}){const p=e(),{to:g,href:b,navigate:y,isExternal:m,hasTarget:C,isAbsoluteUrl:S}=P(t),A=r(!1),R=r(null),_=e=>{var r;R.value=t.custom?null==(r=null==e?void 0:e.$el)?void 0:r.nextElementSibling:null==e?void 0:e.$el};function k(e){var r,a;return!A.value&&("string"==typeof t.prefetchOn?t.prefetchOn===e:(null==(r=t.prefetchOn)?void 0:r[e])??(null==(a=f.prefetchOn)?void 0:a[e]))&&!1!==(t.prefetch??f.prefetch)&&!0!==t.noPrefetch&&"_blank"!==t.target&&!function(){const e=navigator.connection;if(e&&(e.saveData||w.test(e.effectiveType)))return!0;return!1}()}async function O(e=a()){if(A.value)return;A.value=!0;const t="string"==typeof g.value?g.value:m.value?h(g.value):p.resolve(g.value).fullPath,r=m.value?new URL(t,window.location.href).href:t;await Promise.all([e.hooks.callHook("link:prefetch",r).catch((()=>{})),!m.value&&!C.value&&q(g.value,p).catch((()=>{}))])}if(k("visibility")){const e=a();let t,r=null;l((()=>{const l=function(){const e=a();if(e._observer)return e._observer;let t=null;const r=new Map,l=(e,a)=>(t||(t=new IntersectionObserver((e=>{for(const t of e){const e=r.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&e&&e()}}))),r.set(e,a),t.observe(e),()=>{r.delete(e),null==t||t.unobserve(e),0===r.size&&(null==t||t.disconnect(),t=null)}),n=e._observer={observe:l};return n}();n((()=>{t=o((()=>{var t;(null==(t=null==R?void 0:R.value)?void 0:t.tagName)&&(r=l.observe(R.value,(async()=>{null==r||r(),r=null,await O(e)})))}))}))})),u((()=>{t&&i(t),null==r||r(),r=null}))}return()=>{var e;if(!m.value&&!C.value&&!x(g.value)){const e={ref:_,to:g.value,activeClass:t.activeClass||f.activeClass,exactActiveClass:t.exactActiveClass||f.exactActiveClass,replace:t.replace,ariaCurrentValue:t.ariaCurrentValue,custom:t.custom};return t.custom||(k("interaction")&&(e.onPointerenter=O.bind(null,void 0),e.onFocus=O.bind(null,void 0)),A.value&&(e.class=t.prefetchedClass||f.prefetchedClass),e.rel=t.rel||void 0),s(v("RouterLink"),e,d.default)}const r=t.target||null,a=((...e)=>e.find((e=>void 0!==e)))(t.noRel?"":t.rel,f.externalRelAttribute,S.value||C.value?"noopener noreferrer":"")||null;return t.custom?d.default?d.default({href:b.value,navigate:y,prefetch:O,get route(){if(!b.value)return;const e=new URL(b.value,window.location.href);return{path:e.pathname,fullPath:e.pathname,get query(){return c(e.search)},hash:e.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:b.value}},rel:a,target:r,isExternal:m.value||C.value,isActive:!1,isExactActive:!1}):null:s("a",{ref:R,href:b.value||null,rel:a,target:r},null==(e=d.default)?void 0:e.call(d))}}})}const P=C(f);function S(e,t){const r="append"===t?m:x;return p(e)&&!e.startsWith("http")?e:r(e,!0)}const w=/2g/;export{P as _};
