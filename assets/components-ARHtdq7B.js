import{i as m,_ as N,u as P}from"./index-VBgp0EvH.js";const{vModelText:G,withKeys:L,createElementVNode:e,withDirectives:I,renderList:y,Fragment:$,openBlock:r,createElementBlock:i,toDisplayString:f,createTextVNode:V,vShow:M,pushScopeId:re,popScopeId:ie}=await m("vue"),R={class:"food"},W={class:"container"},O={class:"input"},U={class:"board"},q=["onClick"],z={class:"button"},{computed:H,ref:s,watch:J}=await m("vue"),Q={__name:"food",setup(D){const{toogleFunction:o}=P(),a=s(""),d=s(0),t=s([]);s(!1);const p=()=>{a.value.trim().length>0&&(t.value.push({id:d.value+=1,name:a.value}),a.value="",console.log("id",d.value))},h=x=>{n.value>-1&&(t.value=t.value.filter(_=>_.id!==x.id),n.value=0)},n=s(0),u=s(!1),g=()=>{n.value<t.value.length?n.value+=1:n.value=1,console.log("show",n.value)},E=()=>{o(u)},F=H(()=>u.value?"STOP !!":"START ~"),C=s(),j=()=>{C.value=setInterval(g,5)},A=()=>{u.value?j():clearInterval(C.value)},K=()=>{t.value=[]};return J(u,A),(x,_)=>(r(),i("div",R,[e("div",W,[e("div",O,[I(e("input",{type:"text","onUpdate:modelValue":_[0]||(_[0]=l=>a.value=l),onKeydown:L(p,["enter"]),placeholder:"請輸入你想吃的食物"},null,544),[[G,a.value]]),e("button",{onClick:p},"ADD")]),e("div",U,[e("ul",null,[(r(!0),i($,null,y(t.value,l=>(r(),i("li",{key:l.id},[V(f(l.name),1),e("button",{onClick:b=>h(l)},"x",8,q)]))),128))]),e("p",null,[V("Results : "),(r(!0),i($,null,y(t.value,(l,b)=>I((r(),i("span",{key:l.id},f(l.name),1)),[[M,b+1===n.value]])),128))]),e("div",z,[e("button",{class:"start",onClick:E},f(F.value),1),e("button",{onClick:K},"Clean")])])])]))}},B=N(Q,[["__scopeId","data-v-1c07c715"]]),{createElementVNode:c,toDisplayString:X,resolveComponent:Y,createVNode:k,openBlock:v,createElementBlock:S,createCommentVNode:de,KeepAlive:Z,createBlock:ee,TransitionGroup:te,withCtx:oe,pushScopeId:pe,popScopeId:_e}=await m("vue"),ne={class:"components"},le={class:"compWrap"},ae={key:0,class:"a"},se={key:1,class:"b"},{computed:w,ref:T}=await m("vue"),ce={__name:"components",setup(D){const o=T(!1),a=T([{id:1,url:"./pic/number1.jpg"},{id:2,url:"./pic/number2.jpg"},{id:3,url:"./pic/number3.jpg"},{id:4,url:"./pic/number4.jpg"},{id:5,url:"./pic/number5.jpg"}]),d=w(()=>o.value?"跨專案組件":"自製美食抽籤");w(()=>o.value?B:slideComp);const t=w(()=>o.value?"next":"pre"),p=()=>{o.value=!0},h=()=>{o.value=!1};return(n,u)=>{const g=Y("slideComp");return v(),S("div",ne,[c("div",{class:"preBtn"},[c("button",{onClick:h},"←")]),c("div",le,[c("h1",null,X(d.value),1),k(te,{name:t.value},{default:oe(()=>[o.value?(v(),S("div",ae,[k(g,{data:a.value,style:{"background-color":"#3CA877"}},null,8,["data"])])):(v(),S("div",se,[(v(),ee(Z,null,[k(B)],1024))]))]),_:1},8,["name"])]),c("div",{class:"nextBtn"},[c("button",{onClick:p},"→")])])}}},ve=N(ce,[["__scopeId","data-v-8e89a845"]]);export{ve as default};
