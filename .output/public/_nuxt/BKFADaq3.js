import{d as L,H as T,F as M,o as P,e as b,I as B,i as E,t as a,v as l,x as n,J as h,K as f,L as S,y as u,z as g,A as x,B as w,_ as C}from"./DeNziqTa.js";import{u as N,m as R}from"./BdtbRVB3.js";const V={class:"post-list"},j={class:"post-items"},q={class:"post-time"},F={class:"post-title"},I=["innerHTML"],z=L({name:"PostList",__name:"index",setup(A){const m=T(),r=N(),{posts:p,selectTags:d,curPage:c,allPage:_}=M(r);P(()=>{window.addEventListener("scroll",v),p.value=[],c.value=1,_.value=0,m.query.tags?d.value=[{id:m.query.tags}]:r.indexPost()}),b(()=>{window.removeEventListener("scroll",v)}),B(()=>d.value,async e=>{const t=e.map(o=>o.id).join(",");t&&await r.indexPost({tags:t})});const y=e=>R.parse(e),v=()=>{const e=document.body.scrollTop||document.documentElement.scrollTop,t=document.body.scrollHeight||document.documentElement.scrollHeight,o=window.innerHeight;t-(e+o)<=.5&&k()},k=()=>{if(c.value+1<=_.value){c.value++;const e=d.value.map(t=>t.id).join(",");r.indexPost({index:c.value,tags:e})}else console.log("finished")};return(e,t)=>{const o=E("router-link");return a(),l("div",V,[n("ul",j,[(a(!0),l(h,null,f(S(p),s=>(a(),l("li",{key:s.id,class:"post-item"},[n("p",q,u(s.created_at),1),n("h1",F,[g(o,{to:"/posts/"+s.id},{default:x(()=>[w(u(s.title),1)]),_:2},1032,["to"])]),n("div",{class:"post-abstract markdown-body",innerHTML:y(s.abstract)},null,8,I),n("p",null,[g(o,{to:"/posts/"+s.id,class:"post-entry"},{default:x(()=>[w(" Read More... ")]),_:2},1032,["to"])]),n("p",null,[(a(!0),l(h,null,f(s.tags.sort((i,H)=>i.name.localeCompare(H.name)),i=>(a(),l("span",{key:i.id,class:"post-tag"},u(i.name),1))),128))])]))),128))])])}}}),K=C(z,[["__scopeId","data-v-ecc862e2"]]);export{K as default};
