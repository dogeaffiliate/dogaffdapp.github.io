import{d as b,r as y,b as w,j as u,A as d,v as t,y as f,z as _,u as i,K as R,L as C,M as I,C as k,F as S,N as A,O as N}from"./index-8dfb0143.js";import{i as V}from"./chunk-55IO54NW-f7e1bd9c.js";import{u as B}from"./loading-e4f7cb8d.js";import{u as D,b as E,a as F}from"./wallet-1d791f41.js";import{s as L,u as j}from"./contracts-43d9d856.js";import{a as M}from"./vue-router-dc45ca37.js";import{_ as T}from"./_plugin-vue_export-helper-c27b6911.js";const p=r=>(A("data-v-c55f791b"),r=r(),N(),r),W=p(()=>t("h1",{class:"text-center text-xl"},"Connect With Your Referrer",-1)),$={class:"space-y-6 text-center"},z={class:"space-y-4"},K={class:"text-sm"},O={class:"font-bold text-red-500"},U={class:"mx-auto w-full max-w-sm"},Y={key:0,class:"mt-2 text-left text-red-500"},q=p(()=>t("p",{class:"text-sm"},"Leave it blank if you don't have a referral, still get discount on transaction fees",-1)),G=b({__name:"ConnectReferer",emits:["loading"],setup(r,{emit:m}){const e=E(),v=F(),l=M(),x=()=>{v.value=!0,l.push({path:"/"})},a=y(),n=B(),h=D();w(n,()=>m("loading",n.value));const g=async()=>{var o;a.value=void 0;const c=(o=e.value)==null?void 0:o.match(/(\?from=)?(0x[\da-f]{40})$/i);if(c&&c[2]&&(e.value=c[2]),(!e.value||e.value=="")&&(e.value="0xA7055be2010f8C5eE3282E0c6f763ca42F14e909"),!V(e.value))return a.value="Invalid wallet address";n.value=!0;try{const{wait:s}=await j(e.value);await s()&&(h.referer=e.value,l.push({path:"/"}))}catch(s){console.error(s),s.reason?a.value=s.reason:s.message&&(a.value=s.message)}n.value=!1};return(c,o)=>(u(),d(S,null,[W,t("div",$,[t("div",z,[t("p",K,[f(" Register to get an instant "),t("span",O,_(`${i(L).feeDiscount}%`),1),f(" discount on transaction fees: ")]),t("div",U,[R(t("input",{"onUpdate:modelValue":o[0]||(o[0]=s=>I(e)?e.value=s:null),type:"text"},null,512),[[C,i(e)]]),i(a)?(u(),d("p",Y,_(i(a)),1)):k("",!0)]),q]),t("div",{class:"flex items-center justify-center space-x-6"},[t("button",{class:"ring-#66615b text-#66615b",onClick:x},"Ignore"),t("button",{class:"ring-#cb4715 bg-#cb4715 text-white",onClick:g},"Register")])])],64))}});const te=T(G,[["__scopeId","data-v-c55f791b"]]);export{te as _};
