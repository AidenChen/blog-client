import{d as C,N as P,K as B,r as E,O as N,o as S,e as R,i as V,t,v as s,x as i,P as y,Q as k,H as q,y as d,z as w,A as x,B as b,R as u,_ as A}from"./DLSY-3Be.js";import{M as z,u as D}from"./QLoAUO6_.js";const F={class:"post-list"},I={class:"post-list-inner"},K={class:"post-time"},O={class:"post-title"},Q=["innerHTML"],U={key:1},j={key:2,style:{"margin-top":"0"}},G=C({name:"PostList",__name:"index",async setup(J){let _,m;const H=new z,l=P(),c=D(),{posts:p,curPage:o,allPage:g}=B(c);p.value=[],o.value=1,g.value=0;const h=E("");l.query.tags&&(h.value=l.query.tags),[_,m]=N(()=>c.indexPost({tags:h.value})),await _,m(),S(()=>{window.addEventListener("scroll",f)}),R(()=>{window.removeEventListener("scroll",f)});const M=a=>H.parse(a),f=()=>{const a=document.body.scrollTop||document.documentElement.scrollTop,v=document.body.scrollHeight||document.documentElement.scrollHeight,n=window.innerHeight;v-(a+n)<=.5&&L()},L=()=>{o.value+1<=g.value?(o.value++,c.indexPost({index:o.value,tags:l.query.tags??""})):console.log("finished")};return(a,v)=>{const n=V("router-link");return t(),s("div",F,[i("ul",I,[(t(!0),s(y,null,k(q(p),e=>(t(),s("li",{key:e.id,class:"post-item"},[i("p",K,d(e.created_at),1),i("h1",O,[w(n,{to:"/posts/"+e.id},{default:x(()=>[b(d(e.title),1)]),_:2},1032,["to"])]),e.abstract?(t(),s("div",{key:0,class:"post-abstract markdown-body",innerHTML:M(e.abstract)},null,8,Q)):u("",!0),e.abstract?(t(),s("p",U,[w(n,{to:"/posts/"+e.id,class:"post-entry"},{default:x(()=>[b(" Read More... ")]),_:2},1032,["to"])])):u("",!0),e.tags.length?(t(),s("p",j,[(t(!0),s(y,null,k(e.tags.sort((r,T)=>r.name.localeCompare(T.name)),r=>(t(),s("span",{key:r.id,class:"post-tag"},d(r.name),1))),128))])):u("",!0)]))),128))])])}}}),Y=A(G,[["__scopeId","data-v-2f99bc77"]]);export{Y as default};