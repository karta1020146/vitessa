import{a as N,i as m,_ as P,u as R}from"./index-qDdPn6N_.js";const K={slide:{url:"https://karta1020146.github.io/slide/assets/fed/slide.js",format:"esm",from:"vite"}},L=async(o,e)=>{const t=typeof o=="function"?await o():o,n=document.createElement("script");n.type="text/javascript",n.onload=e,n.src=t,document.getElementsByTagName("head")[0].appendChild(n)};function U(o,e){return G(o).then(t=>()=>e==="webpack"&&Object.prototype.toString.call(t).indexOf("Module")>-1&&t.default?t.default:t)}const I=o=>({vue:{"3.4.4":{get:()=>U(new URL("__federation_shared_vue-JW-49ar0.js",import.meta.url).href,o),loaded:1}}});async function G(o){return N(()=>import(o),__vite__mapDeps([]))}async function W(o){const e=K[o];if(e.inited)return e.lib;if(e.format==="var")return new Promise(t=>{const n=()=>{e.inited||(e.lib=window[o],e.lib.init(I(e.from)),e.inited=!0),t(e.lib)};return L(e.url,n)});if(["esm","systemjs"].includes(e.format))return new Promise((t,n)=>{(typeof e.url=="function"?e.url:()=>Promise.resolve(e.url))().then(u=>{N(()=>import(u),__vite__mapDeps([])).then(d=>{if(!e.inited){const s=I(e.from);d.init(s),e.lib=d,e.lib.init(s),e.inited=!0}t(e.lib)}).catch(n)})})}function J(o,e){if(!o?.default&&e){let t=Object.create(null);return t.default=o,t.__esModule=!0,t}return o}function q(o,e){return W(o).then(t=>t.get(e).then(n=>n()))}const{vModelText:z,withKeys:H,createElementVNode:a,withDirectives:T,renderList:V,Fragment:E,openBlock:_,createElementBlock:v,toDisplayString:g,createTextVNode:$,vShow:Q,pushScopeId:we,popScopeId:ke}=await m("vue"),X={class:"food"},Y={class:"container"},Z={class:"input"},ee={class:"board"},te=["onClick"],oe={class:"button"},{computed:ne,ref:i,watch:se}=await m("vue"),ae={__name:"food",setup(o){const{toogleFunction:e}=R(),t=i(""),n=i(0),l=i([]);i(!1);const u=()=>{t.value.trim().length>0&&(l.value.push({id:n.value+=1,name:t.value}),t.value="",console.log("id",n.value))},d=x=>{s.value>-1&&(l.value=l.value.filter(f=>f.id!==x.id),s.value=0)},s=i(0),c=i(!1),S=()=>{s.value<l.value.length?s.value+=1:s.value=1,console.log("show",s.value)},A=()=>{e(c)},j=ne(()=>c.value?"STOP !!":"START ~"),b=i(),F=()=>{b.value=setInterval(S,5)},M=()=>{c.value?F():clearInterval(b.value)},O=()=>{l.value=[]};return se(c,M),(x,f)=>(_(),v("div",X,[a("div",Y,[a("div",Z,[T(a("input",{type:"text","onUpdate:modelValue":f[0]||(f[0]=r=>t.value=r),onKeydown:H(u,["enter"]),placeholder:"請輸入你想吃的食物"},null,544),[[z,t.value]]),a("button",{onClick:u},"ADD")]),a("div",ee,[a("ul",null,[(_(!0),v(E,null,V(l.value,r=>(_(),v("li",{key:r.id},[$(g(r.name),1),a("button",{onClick:C=>d(r)},"x",8,te)]))),128))]),a("p",null,[$("Results : "),(_(!0),v(E,null,V(l.value,(r,C)=>T((_(),v("span",{key:r.id},g(r.name),1)),[[Q,C+1===s.value]])),128))]),a("div",oe,[a("button",{class:"start",onClick:A},g(j.value),1),a("button",{onClick:O},"Clean")])])])]))}},B=P(ae,[["__scopeId","data-v-8722fc0c"]]),{createElementVNode:p,toDisplayString:le,unref:re,createVNode:w,openBlock:h,createElementBlock:k,createCommentVNode:ye,KeepAlive:ce,createBlock:ie,TransitionGroup:ue,withCtx:de,pushScopeId:Se,popScopeId:be}=await m("vue"),pe={class:"components"},_e={class:"compWrap"},ve={key:0,class:"a"},me={key:1,class:"b"},{computed:y,ref:D}=await m("vue"),{defineAsyncComponent:fe}=await m("vue"),he={__name:"components",setup(o){const e=fe(()=>q("slide","./slide").then(c=>J(c,!0))),t=D(!1),n=D([{id:1,url:"https://picsum.photos/500/500?random=1"},{id:2,url:"https://picsum.photos/500/500?random=2"},{id:3,url:"https://picsum.photos/500/500?random=3"},{id:4,url:"https://picsum.photos/500/500?random=4"},{id:5,url:"https://picsum.photos/500/500?random=5"},{id:6,url:"https://picsum.photos/500/500?random=6"}]),l=y(()=>t.value?"遠端簡易輪播":"自製美食抽籤");y(()=>t.value?B:e);const u=y(()=>t.value?"next":"pre"),d=()=>{t.value=!0},s=()=>{t.value=!1};return(c,S)=>(h(),k("div",pe,[p("div",{class:"preBtn"},[p("button",{onClick:s},"←")]),p("div",_e,[p("h1",null,le(l.value),1),w(ue,{name:u.value},{default:de(()=>[t.value?(h(),k("div",ve,[w(re(e),{data:n.value,style:{"background-color":"#3CA877"}},null,8,["data"])])):(h(),k("div",me,[(h(),ie(ce,null,[w(B)],1024))]))]),_:1},8,["name"])]),p("div",{class:"nextBtn"},[p("button",{onClick:d},"→")])]))}},xe=P(he,[["__scopeId","data-v-dff9a2f5"]]);export{xe as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}