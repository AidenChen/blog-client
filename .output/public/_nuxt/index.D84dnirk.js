import{d as _,H as d,F as p,I as l,t as m,v as u,x as t,y as r,K as e,_ as f}from"./entry.Do5IkvpS.js";import{u as h}from"./vue.f36acd1f.2J0K-8-8.js";import{u as v}from"./state.zrsBDhjj.js";const x={class:"post-detail"},w={class:"post-detail-inner"},y={class:"post-wrapper",ref:"post"},H={class:"post-title"},P={class:"post-time"},S=["innerHTML"],k=_({name:"PostDetail",__name:"index",async setup(B){let o,a;const c=d(),n=v(),{currentPost:s,currentPostCompile:i}=p(n);return[o,a]=l(()=>n.showPost(c.params.id)),await o,a(),h({title:s.value.title}),(C,T)=>(m(),u("div",x,[t("div",w,[t("div",y,[t("h1",H,r(e(s).title),1),t("p",P,r(e(s).created_at),1),t("div",{class:"markdown-body",innerHTML:e(i),ref:"content"},null,8,S)],512)])]))}}),M=f(k,[["__scopeId","data-v-373c5c1c"]]);export{M as default};