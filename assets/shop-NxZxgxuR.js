import{i as _,d as C,_ as x,s as N,R as V}from"./index-yAf2-A1m.js";const{ref:f}=await _("vue"),I=C("shop",()=>{const s=f();fetch("https://api.escuelajs.co/api/v1/products").then(e=>e.json()).then(e=>s.value=e).catch(e=>console.log("error :",e));const n=f();return fetch("https://api.escuelajs.co/api/v1/categories").then(e=>e.json()).then(e=>n.value=e).catch(e=>console.log("error :",e)),{data:s,cat:n}}),{createElementVNode:t,renderList:g,Fragment:m,openBlock:a,createElementBlock:c,toDisplayString:l,createTextVNode:r,unref:b,withCtx:E,createVNode:F,pushScopeId:j,popScopeId:B}=await _("vue"),i=s=>(j("data-v-b74251d9"),s=s(),B(),s),D={class:"shop"},$={class:"tag"},L=["onClick"],R={class:"container"},T=i(()=>t("div",{class:"blur"},[t("h2",null,"View Details")],-1)),A={class:"image"},M=["src"],P={class:"detail"},U=i(()=>t("span",{class:"title"},"Name : ",-1)),q=i(()=>t("span",{class:"title"},"Price : ",-1)),z=i(()=>t("span",{class:"title"},"Category : ",-1)),{ref:u,computed:G}=await _("vue"),H={__name:"shop",setup(s){const n=I(),{data:e,cat:J}=N(n),S=u([{id:1,name:"Clothes"},{id:2,name:"Electronics"},{id:3,name:"Furniture"},{id:4,name:"Shoes"},{id:5,name:"Miscellaneous"}]),d=u(!1),p=u(),k=h=>{d.value=!0,p.value=e.value.filter(v=>v.category.id===h)},w=()=>{d.value=!1},y=G(()=>d.value?p.value:e.value);return(h,v)=>(a(),c("div",D,[t("div",$,[r(" Category : "),t("button",{onClick:w}," All "),(a(!0),c(m,null,g(S.value,o=>(a(),c("button",{key:o.id,onClick:K=>k(o.id)},l(o.name),9,L))),128))]),t("div",R,[(a(!0),c(m,null,g(y.value,o=>(a(),c("div",{class:"data",key:o.id},[F(b(V),{to:`/products/${o.id}`},{default:E(()=>[T,t("div",A,[t("img",{src:o.images[0],alt:"product_image"},null,8,M)]),t("div",P,[t("p",null,[U,r(l(o.title),1)]),t("p",null,[q,r("US$ "+l(o.price),1)]),t("p",null,[z,r(l(o.category.name),1)])])]),_:2},1032,["to"])]))),128))])]))}},Q=x(H,[["__scopeId","data-v-b74251d9"]]);export{Q as default};
