import{F as I,G as P,H as S,I as R,d as O,J as x,r as k,i as T,t as D,v as L,x as _,K as M,z as h,A as v,B as w,_ as U}from"./B6c9Oh1x.js";import{u as G}from"./D9Z-tvvb.js";const J="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAACYktHRAD/h4/MvwAAAAlwSFlzAAALEwAACxMBAJqcGAAAADlJREFUWMPt08ERACAIBDEomvqxBh18EQogn9us+HsJAAAAt0BPfQU8A2YKULKSdQAQmpIBAMBm4AAtdCIhmRB8RAAAAABJRU5ErkJggg==";function N(t){return I()?(P(t),!0):!1}function B(t){return typeof t=="function"?t():S(t)}const C=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const F=Object.prototype.toString,W=t=>F.call(t)==="[object Object]",g=()=>{},H=Q();function Q(){var t,s;return C&&((t=window==null?void 0:window.navigator)==null?void 0:t.userAgent)&&(/iP(ad|hone|od)/.test(window.navigator.userAgent)||((s=window==null?void 0:window.navigator)==null?void 0:s.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function p(t){var s;const r=B(t);return(s=r==null?void 0:r.$el)!=null?s:r}const b=C?window:void 0;function E(...t){let s,r,o,A;if(typeof t[0]=="string"||Array.isArray(t[0])?([r,o,A]=t,s=b):[s,r,o,A]=t,!s)return g;Array.isArray(r)||(r=[r]),Array.isArray(o)||(o=[o]);const d=[],l=()=>{d.forEach(c=>c()),d.length=0},u=(c,a,e,n)=>(c.addEventListener(a,e,n),()=>c.removeEventListener(a,e,n)),f=R(()=>[p(s),B(A)],([c,a])=>{if(l(),!c)return;const e=W(a)?{...a}:a;d.push(...r.flatMap(n=>o.map(i=>u(c,n,i,e))))},{immediate:!0,flush:"post"}),m=()=>{f(),l()};return N(m),m}let y=!1;function V(t,s,r={}){const{window:o=b,ignore:A=[],capture:d=!0,detectIframe:l=!1}=r;if(!o)return g;H&&!y&&(y=!0,Array.from(o.document.body.children).forEach(e=>e.addEventListener("click",g)),o.document.documentElement.addEventListener("click",g));let u=!0;const f=e=>A.some(n=>{if(typeof n=="string")return Array.from(o.document.querySelectorAll(n)).some(i=>i===e.target||e.composedPath().includes(i));{const i=p(n);return i&&(e.target===i||e.composedPath().includes(i))}}),c=[E(o,"click",e=>{const n=p(t);if(!(!n||n===e.target||e.composedPath().includes(n))){if(e.detail===0&&(u=!f(e)),!u){u=!0;return}s(e)}},{passive:!0,capture:d}),E(o,"pointerdown",e=>{const n=p(t);u=!f(e)&&!!(n&&!e.composedPath().includes(n))},{passive:!0}),l&&E(o,"blur",e=>{setTimeout(()=>{var n;const i=p(t);((n=o.document.activeElement)==null?void 0:n.tagName)==="IFRAME"&&!(i!=null&&i.contains(o.document.activeElement))&&s(e)},0)})].filter(Boolean);return()=>c.forEach(e=>e())}const j={class:"top-bar"},q={class:"top-bar-inner"},z={class:"site-nav"},K=O({name:"TopBar",__name:"top-bar",setup(t){const s=G(),{posts:r,curPage:o,allPage:A}=x(s),d=()=>{r.value=[],o.value=1,A.value=0,s.indexPost()},l=k(!1),u=()=>{l.value=!0},f=k(null);return V(f,()=>{l.value=!1}),(m,c)=>{const a=T("router-link");return D(),L("header",j,[_("div",q,[_("nav",z,[_("img",{onTouchstartPassive:u,ref_key:"menuRef",ref:f,class:"top__menu",src:J,alt:"菜单"},null,544),_("div",{class:M(["trigger",{hover:S(l)}])},[h(a,{class:"header-link",to:"/posts",onClick:d},{default:v(()=>[w("POSTS")]),_:1}),h(a,{class:"header-link",to:"/tags"},{default:v(()=>[w("TAGS")]),_:1}),h(a,{class:"header-link",to:"/profile"},{default:v(()=>[w("PROFILE")]),_:1})],2)]),h(a,{class:"top__title",to:"/home"},{default:v(()=>[w(" Aiden Notes ")]),_:1})])])}}}),$=U(K,[["__scopeId","data-v-3b9995ec"]]);export{$ as default};
