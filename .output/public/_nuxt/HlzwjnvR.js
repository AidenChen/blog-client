import{d,u as p,J as m,Q as f,t,v as e,x as c,N as g,O as x,H as h,y,_ as k}from"./DZRu2iXf.js";import{u as v}from"./BxQh3C1k.js";const C={class:"tag"},S={class:"tag-items"},B=["onClick"],T=d({__name:"index",async setup(w){let s,a;const i=p(),o=v(),{tags:_}=m(o),l=n=>{i.push({name:"post-list",query:{tags:n}})};return[s,a]=f(()=>o.indexTag()),await s,a(),(n,N)=>(t(),e("div",C,[c("ul",S,[(t(!0),e(g,null,x(h(_),(r,u)=>(t(),e("li",{class:"tag-item",key:u,onClick:R=>l(r.id)},[c("span",null,y(r.name),1)],8,B))),128))])]))}}),D=k(T,[["__scopeId","data-v-f9342dc7"]]);export{D as default};