import{a as D,i as m,_ as N,u as R}from"./index-44i8Kc5C.js";const K={slide:{url:"https://karta1020146.github.io/slide/assets/fed/slide.js",format:"esm",from:"vite"}},L=async(o,e)=>{const t=typeof o=="function"?await o():o,n=document.createElement("script");n.type="text/javascript",n.onload=e,n.src=t,document.getElementsByTagName("head")[0].appendChild(n)};function U(o,e){return W(o).then(t=>()=>e==="webpack"&&Object.prototype.toString.call(t).indexOf("Module")>-1&&t.default?t.default:t)}const C=o=>({vue:{"3.4.4":{get:()=>U(new URL("__federation_shared_vue-JW-49ar0.js",import.meta.url).href,o),loaded:1}}});async function W(o){return D(()=>import(o),__vite__mapDeps([]))}async function G(o){const e=K[o];if(e.inited)return e.lib;if(e.format==="var")return new Promise(t=>{const n=()=>{e.inited||(e.lib=window[o],e.lib.init(C(e.from)),e.inited=!0),t(e.lib)};return L(e.url,n)});if(["esm","systemjs"].includes(e.format))return new Promise((t,n)=>{(typeof e.url=="function"?e.url:()=>Promise.resolve(e.url))().then(d=>{D(()=>import(d),__vite__mapDeps([])).then(_=>{if(!e.inited){const s=C(e.from);_.init(s),e.lib=_,e.lib.init(s),e.inited=!0}t(e.lib)}).catch(n)})})}function J(o,e){if(!o?.default&&e){let t=Object.create(null);return t.default=o,t.__esModule=!0,t}return o}function Z(o,e){return G(o).then(t=>t.get(e).then(n=>n()))}const q="/vitessa/assets/number1-4WlD0ZWT.jpg",{vModelText:z,withKeys:H,createElementVNode:a,withDirectives:T,renderList:V,Fragment:$,openBlock:p,createElementBlock:v,toDisplayString:g,createTextVNode:E,vShow:Q,pushScopeId:xe,popScopeId:Ie}=await m("vue"),X={class:"food"},Y={class:"container"},ee={class:"input"},te={class:"board"},oe=["onClick"],ne={class:"button"},{computed:se,ref:i,watch:ae}=await m("vue"),le={__name:"food",setup(o){const{toogleFunction:e}=R(),t=i(""),n=i(0),l=i([]);i(!1);const d=()=>{t.value.trim().length>0&&(l.value.push({id:n.value+=1,name:t.value}),t.value="",console.log("id",n.value))},_=x=>{s.value>-1&&(l.value=l.value.filter(f=>f.id!==x.id),s.value=0)},s=i(0),c=i(!1),y=()=>{s.value<l.value.length?s.value+=1:s.value=1,console.log("show",s.value)},P=()=>{e(c)},A=se(()=>c.value?"STOP !!":"START ~"),S=i(),F=()=>{S.value=setInterval(y,5)},M=()=>{c.value?F():clearInterval(S.value)},O=()=>{l.value=[]};return ae(c,M),(x,f)=>(p(),v("div",X,[a("div",Y,[a("div",ee,[T(a("input",{type:"text","onUpdate:modelValue":f[0]||(f[0]=r=>t.value=r),onKeydown:H(d,["enter"]),placeholder:"請輸入你想吃的食物"},null,544),[[z,t.value]]),a("button",{onClick:d},"ADD")]),a("div",te,[a("ul",null,[(p(!0),v($,null,V(l.value,r=>(p(),v("li",{key:r.id},[E(g(r.name),1),a("button",{onClick:I=>_(r)},"x",8,oe)]))),128))]),a("p",null,[E("Results : "),(p(!0),v($,null,V(l.value,(r,I)=>T((p(),v("span",{key:r.id},g(r.name),1)),[[Q,I+1===s.value]])),128))]),a("div",ne,[a("button",{class:"start",onClick:P},g(A.value),1),a("button",{onClick:O},"Clean")])])])]))}},j=N(le,[["__scopeId","data-v-8722fc0c"]]),{createElementVNode:u,toDisplayString:re,unref:ce,createVNode:w,openBlock:h,createElementBlock:b,createCommentVNode:Ce,KeepAlive:ie,createBlock:ue,TransitionGroup:de,withCtx:_e,pushScopeId:pe,popScopeId:ve}=await m("vue"),me=o=>(pe("data-v-01c57778"),o=o(),ve(),o),fe={class:"components"},he={class:"compWrap"},ge=me(()=>u("img",{src:q,alt:""},null,-1)),we={key:0,class:"a"},be={key:1,class:"b"},{computed:k,ref:B}=await m("vue"),{defineAsyncComponent:ke}=await m("vue"),ye={__name:"components",setup(o){const e=ke(()=>Z("slide","./slide").then(c=>J(c,!0))),t=B(!1),n=B([{id:1,url:"../assets/number1.jpg"},{id:2,url:"../assets/number2.jpg"},{id:3,url:"../assets/number3.jpg"},{id:4,url:"../assets/number4.jpg"},{id:5,url:"../assets/number5.jpg"}]),l=k(()=>t.value?"遠端簡易輪播":"自製美食抽籤");k(()=>t.value?j:e);const d=k(()=>t.value?"next":"pre"),_=()=>{t.value=!0},s=()=>{t.value=!1};return(c,y)=>(h(),b("div",fe,[u("div",{class:"preBtn"},[u("button",{onClick:s},"←")]),u("div",he,[u("h1",null,re(l.value),1),ge,w(de,{name:d.value},{default:_e(()=>[t.value?(h(),b("div",we,[w(ce(e),{data:n.value,style:{"background-color":"#3CA877"}},null,8,["data"])])):(h(),b("div",be,[(h(),ue(ie,null,[w(j)],1024))]))]),_:1},8,["name"])]),u("div",{class:"nextBtn"},[u("button",{onClick:_},"→")])]))}},Te=N(ye,[["__scopeId","data-v-01c57778"]]);export{Te as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}