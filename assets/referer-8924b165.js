import{d as g,r as y,j as l,A as u,v as e,y as d,z as f,u as r,X as b,Y as w,I,C,U as R,V as k}from"./index-554c0bf5.js";import{i as S}from"./chunk-55IO54NW-506e045e.js";import{s as V}from"./site-d74a71fe.js";import{u as A}from"./loading-968ffe27.js";import{a as B,b as D}from"./referer-5c6998b4.js";import{u as E}from"./wallet-894e431c.js";import{u as N}from"./contracts-8faa2317.js";import{a as j}from"./vue-router-329b4f44.js";import{_ as L}from"./_plugin-vue_export-helper-c27b6911.js";import"./pinia-86a25644.js";import"./index-db580711.js";const p=o=>(R("data-v-2a564328"),o=o(),k(),o),T={class:"space-y-8"},U=p(()=>e("h1",{class:"text-center text-xl"},"Connect With Your Referrer",-1)),W={class:"space-y-6 text-center"},Y={class:"space-y-4"},z={class:"text-sm"},F={class:"font-bold text-red-500"},M={class:"mx-auto w-full max-w-sm"},X={key:0,class:"mt-2 text-left text-red-500"},$=p(()=>e("p",{class:"text-sm"}," Leave it blank if you don't have a referral, still get discount on transaction fees ",-1)),q=g({__name:"referer",setup(o){const t=B(),_=D(),n=j(),m=()=>{_.value=!0,n.push({path:"/"})},a=y(),i=A(),v=E(),x=async()=>{if(a.value=void 0,(!t.value||t.value=="")&&(t.value="0xA7055be2010f8C5eE3282E0c6f763ca42F14e909"),!S(t.value))return a.value="Invalid wallet address";i.value=!0;try{const{wait:s}=await N(t.value);await s()&&(v.referer=t.value,n.push({path:"/"}))}catch(s){console.error(s),s.reason?a.value=s.reason:s.message&&(a.value=s.message)}i.value=!1};return(s,c)=>(l(),u("div",T,[U,e("div",W,[e("div",Y,[e("p",z,[d(" Register to get an instant "),e("span",F,f(`${r(V).feeDiscount}%`),1),d(" discount on transaction fees: ")]),e("div",M,[b(e("input",{"onUpdate:modelValue":c[0]||(c[0]=h=>I(t)?t.value=h:null),type:"text"},null,512),[[w,r(t)]]),r(a)?(l(),u("p",X,f(r(a)),1)):C("",!0)]),$]),e("div",{class:"flex items-center justify-center space-x-6"},[e("button",{class:"hidden ring-#66615b text-#66615b",onClick:m},"Ignore"),e("button",{class:"ring-#cb4715 bg-#cb4715 text-white",onClick:x},"Confirm")])])]))}});const ae=L(q,[["__scopeId","data-v-2a564328"]]);export{ae as default};
