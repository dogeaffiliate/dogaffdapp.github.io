import{u as f,d as k,r as F}from"./wallet-1d791f41.js";import{a as C,s as m,b as S}from"./contracts-43d9d856.js";import{B,F as v}from"./chunk-55IO54NW-f7e1bd9c.js";import{d as h,r as w,w as g,j as i,A as d,v as e,z as _,u as n,F as $,a as D,b as N,k as R,W as A,y,X as E,N as L,O as V,m as b,Y as I}from"./index-8dfb0143.js";import{_ as M}from"./_plugin-vue_export-helper-c27b6911.js";import{c as T}from"./index-db580711.js";import"./pinia-33049115.js";const O="/assets/register-count-06142b5e.svg",P="/assets/earned-aa0d3310.svg",U=(o,s=2)=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0,maximumFractionDigits:s}).format(Number.parseFloat(o.toString())).replace("$",""),j=o=>{const[s,t]=o.toString().split("."),a=t==null?void 0:t.replace(/0+$/,"");return a?`${s}.${a}`:s},H=(o,s=2)=>{const t=B.from(o);if(t.lt(1))return j(t.toNumber().toFixed(s));const r=[...[{value:1,symbol:""},{value:1e3,symbol:"K"},{value:1e6,symbol:"M"},{value:1e9,symbol:"B"},{value:1e12,symbol:"T"}]].reverse().find(p=>t.gte(p.value));if(!r)return"0";const c=/\.0+$|(\.\d*[1-9])0+$/,l=v.from(r.value);return v.from(t).divUnsafe(l).round(s).toString().replace(c,"$1")+r.symbol},Y=e("div",{class:"flex items-center justify-center space-x-6"},[e("p",{class:"text-#9a9a9a text-sm"}," Note: Only transactions through Pancakeswap are profitable from the affiliate marketing program ")],-1),G={class:"-mt-6 -ml-6 flex flex-wrap items-center justify-center"},W={class:"btn-action max-w-68 mt-6 ml-6 w-full text-left"},Z=e("img",{class:"h-10 w-10 sm:h-14 sm:w-14",src:O},null,-1),q={class:"all:block space-y-0.5"},z=e("span",{class:"text-sm font-medium uppercase"},"NUMBER REFERER:",-1),K={class:"font-bold"},X={class:"btn-action max-w-68 mt-6 ml-6 w-full text-left"},J=e("img",{class:"h-10 w-10 sm:h-14 sm:w-14",src:P},null,-1),Q={class:"all:block space-y-0.5"},ee=e("span",{class:"text-sm font-medium uppercase"},"$DOGAFF RECEIVED:",-1),te={class:"font-bold"},se=h({__name:"DashboardActions",props:{referralsCount:null},setup(o){const s=()=>{window.open("https://pancakeswap.finance/swap?outputCurrency=0x5f7B5F7640009F78B9365D3423397d325d850F29")},t=f(),a=w();return g(async()=>{t.address&&(a.value=await C(t.address))}),(r,c)=>(i(),d($,null,[Y,e("div",{class:"flex items-center justify-center space-x-6"},[e("button",{class:"w-50 ring-#cb4715 bg-#cb4715 rounded-full px-6 py-2 font-bold text-white ring-2",onClick:s}," BUY $DOGEAFF ")]),e("div",G,[e("button",W,[Z,e("span",q,[z,e("span",K,_(n(U)(o.referralsCount)),1)])]),e("button",X,[J,e("span",Q,[ee,e("span",te,_(n(a)?n(H)(n(a)):0),1)])])])],64))}});const oe={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},ae=e("path",{fill:"currentColor",d:"M21 7L9 19l-5.5-5.5l1.41-1.41L9 16.17L19.59 5.59L21 7Z"},null,-1),ne=[ae];function re(o,s){return i(),d("svg",oe,ne)}const ce={name:"mdi-check",render:re},ie={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},le=e("path",{fill:"currentColor",d:"M19 21H8V7h11m0-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-3-4H4a2 2 0 0 0-2 2v14h2V3h12V1Z"},null,-1),de=[le];function ue(o,s){return i(),d("svg",ie,de)}const _e={name:"mdi-content-copy",render:ue},pe=o=>(L("data-v-603d26c9"),o=o(),V(),o),me={class:"mx-auto w-full max-w-screen-sm space-y-4 text-center"},fe=pe(()=>e("p",{class:"font-medium"},"Your referer link:",-1)),he={class:"relative"},xe=["value"],ve={class:"text-#9a9a9a text-sm"},ye={class:"font-bold text-red-500"},be=E('<div class="space-y-6 text-center" data-v-603d26c9><div class="space-y-4" data-v-603d26c9><h1 class="text-center text-2xl font-bold" data-v-603d26c9>How to make profit from Affiliate program</h1><p class="text-sm" data-v-603d26c9>Step 1: Register Affiliate Program (Skip if you have already done this step)</p><p class="text-sm" data-v-603d26c9> Step 2: Copy your Affiliate link and refer it to your friends (Require your friends to successfully register via your Affiliate link) </p><p class="text-sm" data-v-603d26c9> Step 3: Your friends buy or sell Token $DOGAFF via Pancakeswap you will get 4% per transaction </p><p class="text-sm" data-v-603d26c9> The list of friends successfully referred and the number of tokens received will be below </p></div></div>',1),we=h({__name:"RefererLink",setup(o){const s=f(),t=D(()=>`${window.location.origin}/?from=${s.address}`),{copied:a,copy:r}=k({source:t}),c=F(!1,1e3);return N(a,()=>{c.value=a.value}),(l,u)=>(i(),d("div",me,[fe,e("div",he,[e("input",{value:n(t),readonly:"",type:"text"},null,8,xe),e("button",{class:"bg-#f3f2ee absolute top-1/2 right-4 -translate-y-1/2",onClick:u[0]||(u[0]=()=>n(r)())},[(i(),R(A(n(c)?n(ce):n(_e)),{class:"h-5 w-5"}))])]),e("p",ve,[y(" Share this link to your friends and you will receive "),e("span",ye,_(`${n(m).feeReferer}%`),1),y(" of transaction fees every time they make a successful transaction! ")]),be]))}});const ge=M(we,[["__scopeId","data-v-603d26c9"]]),$e={class:"space-y-8"},ke=e("h1",{class:"text-center text-2xl font-bold"},"Dashboard",-1),Fe={class:"space-y-8"},Ce={class:"overflow-x-auto"},Se={class:"min-w-full divide-y divide-white whitespace-nowrap"},Be=e("thead",{class:"bg-#f5962b"},[e("tr",{class:"divide-x divide-white"},[e("th",{class:"w-24 rounded-lg px-4 py-2 text-center text-sm font-semibold text-white"},"#"),e("th",{class:"rounded-lg px-4 py-2 text-center text-sm font-semibold text-white"},"Wallet"),e("th",{class:"rounded-lg px-4 py-2 text-center text-sm font-semibold text-white"})])],-1),De={class:"bg-#f8f8f8 divide-y divide-white"},Ne={class:"text-#8a8a8a rounded-lg px-4 py-2 text-sm"},Re={class:"text-#8a8a8a rounded-lg px-4 py-2 text-sm"},Ae={class:"text-#8a8a8a rounded-lg px-4 py-2 text-sm"},Ee=["href"],Ue=h({__name:"index",setup(o){const s=f(),t=w([]),a=r=>{var l;const c=(l=T[m.chain].blockExplorers)==null?void 0:l.default;return c?`${c.url.replace(/\/$/,"")}/token/${m.contracts.token}?a=${r}`:"#"};return g(async()=>{s.address&&(t.value=await S(s.address))}),(r,c)=>{const l=ge,u=se;return i(),d("div",$e,[ke,e("div",Fe,[b(l),b(u,{"referrals-count":n(t).length},null,8,["referrals-count"]),e("div",Ce,[e("table",Se,[Be,e("tbody",De,[(i(!0),d($,null,I(n(t),(p,x)=>(i(),d("tr",{key:x,class:"divide-x divide-white text-center"},[e("td",Ne,_(x+1),1),e("td",Re,_(p),1),e("td",Ae,[e("a",{href:a(p),class:"text-#eb5e28",target:"_blank"}," Transactions ",8,Ee)])]))),128))])])])])])}}});export{Ue as default};
