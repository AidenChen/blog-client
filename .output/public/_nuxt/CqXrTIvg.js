import{F as I,G as P,H as y,I as R,d as O,J as x,r as k,i as D,t as L,v as M,x as v,K as T,z as _,A as h,B as w,_ as U}from"./B_VHvxBh.js";import{u as G}from"./DUDKzhn9.js";const J="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAACYktHRAD/h4/MvwAAAAlwSFlzAAALEwAACxMBAJqcGAAAADlJREFUWMPt08ERACAIBDEomvqxBh18EQogn9us+HsJAAAAt0BPfQU8A2YKULKSdQAQmpIBAMBm4AAtdCIhmRB8RAAAAABJRU5ErkJggg==";function N(t){return I()?(P(t),!0):!1}function S(t){return typeof t=="function"?t():y(t)}const C=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const F=Object.prototype.toString,W=t=>F.call(t)==="[object Object]",g=()=>{},H=Q();function Q(){var t,s;return C&&((t=window==null?void 0:window.navigator)==null?void 0:t.userAgent)&&(/iP(ad|hone|od)/.test(window.navigator.userAgent)||((s=window==null?void 0:window.navigator)==null?void 0:s.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function p(t){var s;const r=S(t);return(s=r==null?void 0:r.$el)!=null?s:r}const B=C?window:void 0;function E(...t){let s,r,o,A;if(typeof t[0]=="string"||Array.isArray(t[0])?([r,o,A]=t,s=B):[s,r,o,A]=t,!s)return g;Array.isArray(r)||(r=[r]),Array.isArray(o)||(o=[o]);const d=[],c=()=>{d.forEach(l=>l()),d.length=0},u=(l,a,e,n)=>(l.addEventListener(a,e,n),()=>l.removeEventListener(a,e,n)),f=R(()=>[p(s),S(A)],([l,a])=>{if(c(),!l)return;const e=W(a)?{...a}:a;d.push(...r.flatMap(n=>o.map(i=>u(l,n,i,e))))},{immediate:!0,flush:"post"}),m=()=>{f(),c()};return N(m),m}let b=!1;function V(t,s,r={}){const{window:o=B,ignore:A=[],capture:d=!0,detectIframe:c=!1}=r;if(!o)return g;H&&!b&&(b=!0,Array.from(o.document.body.children).forEach(e=>e.addEventListener("click",g)),o.document.documentElement.addEventListener("click",g));let u=!0;const f=e=>A.some(n=>{if(typeof n=="string")return Array.from(o.document.querySelectorAll(n)).some(i=>i===e.target||e.composedPath().includes(i));{const i=p(n);return i&&(e.target===i||e.composedPath().includes(i))}}),l=[E(o,"click",e=>{const n=p(t);if(!(!n||n===e.target||e.composedPath().includes(n))){if(e.detail===0&&(u=!f(e)),!u){u=!0;return}s(e)}},{passive:!0,capture:d}),E(o,"pointerdown",e=>{const n=p(t);u=!f(e)&&!!(n&&!e.composedPath().includes(n))},{passive:!0}),c&&E(o,"blur",e=>{setTimeout(()=>{var n;const i=p(t);((n=o.document.activeElement)==null?void 0:n.tagName)==="IFRAME"&&!(i!=null&&i.contains(o.document.activeElement))&&s(e)},0)})].filter(Boolean);return()=>l.forEach(e=>e())}const j={class:"top-bar"},q={class:"top-bar-inner"},z={class:"top-bar-nav"},K=O({name:"TopBar",__name:"top-bar",setup(t){const s=G(),{posts:r,curPage:o,allPage:A}=x(s),d=()=>{r.value=[],o.value=1,A.value=0,s.indexPost()},c=k(!1),u=()=>{c.value=!0},f=k(null);return V(f,()=>{c.value=!1}),(m,l)=>{const a=D("router-link");return L(),M("header",j,[v("div",q,[v("nav",z,[v("img",{onClick:u,ref_key:"menuRef",ref:f,class:"top-bar-menu",src:J,alt:"菜单"},null,512),v("div",{class:T(["trigger",{hover:y(c)}])},[_(a,{class:"top-bar-link",to:"/posts",onClick:d},{default:h(()=>[w("POSTS")]),_:1}),_(a,{class:"top-bar-link",to:"/tags"},{default:h(()=>[w("TAGS")]),_:1}),_(a,{class:"top-bar-link",to:"/profile"},{default:h(()=>[w("PROFILE")]),_:1})],2)]),_(a,{class:"top-bar-title",to:"/home"},{default:h(()=>[w("Aiden Notes")]),_:1})])])}}}),$=U(K,[["__scopeId","data-v-071d2724"]]);export{$ as default};
