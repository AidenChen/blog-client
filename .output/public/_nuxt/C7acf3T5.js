import{d as T,M as C,J as P,r as B,N as E,o as N,e as S,i as V,t,v as s,x as i,O as f,P as k,H as q,y as d,z as x,A as w,B as H,Q as u,_ as R}from"./C0woAc5E.js";import{u as A,m as z}from"./CoSR6qih.js";const D={class:"post-list"},F={class:"post-list-inner"},I={class:"post-time"},J={class:"post-title"},O=["innerHTML"],Q={key:1},U={key:2,style:{"margin-top":"0"}},j=T({name:"PostList",__name:"index",async setup(G){let _,m;const l=C(),c=A(),{posts:p,curPage:o,allPage:g}=P(c);p.value=[],o.value=1,g.value=0;const h=B("");l.query.tags&&(h.value=l.query.tags),[_,m]=E(()=>c.indexPost({tags:h.value})),await _,m(),N(()=>{window.addEventListener("scroll",v)}),S(()=>{window.removeEventListener("scroll",v)});const b=a=>z.parse(a),v=()=>{const a=document.body.scrollTop||document.documentElement.scrollTop,y=document.body.scrollHeight||document.documentElement.scrollHeight,n=window.innerHeight;y-(a+n)<=.5&&L()},L=()=>{o.value+1<=g.value?(o.value++,c.indexPost({index:o.value,tags:l.query.tags??""})):console.log("finished")};return(a,y)=>{const n=V("router-link");return t(),s("div",D,[i("ul",F,[(t(!0),s(f,null,k(q(p),e=>(t(),s("li",{key:e.id,class:"post-item"},[i("p",I,d(e.created_at),1),i("h1",J,[x(n,{to:"/posts/"+e.id},{default:w(()=>[H(d(e.title),1)]),_:2},1032,["to"])]),e.abstract?(t(),s("div",{key:0,class:"post-abstract markdown-body",innerHTML:b(e.abstract)},null,8,O)):u("",!0),e.abstract?(t(),s("p",Q,[x(n,{to:"/posts/"+e.id,class:"post-entry"},{default:w(()=>[H(" Read More... ")]),_:2},1032,["to"])])):u("",!0),e.tags.length?(t(),s("p",U,[(t(!0),s(f,null,k(e.tags.sort((r,M)=>r.name.localeCompare(M.name)),r=>(t(),s("span",{key:r.id,class:"post-tag"},d(r.name),1))),128))])):u("",!0)]))),128))])])}}}),X=R(j,[["__scopeId","data-v-2484314a"]]);export{X as default};