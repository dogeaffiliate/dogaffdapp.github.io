import{G as V,r as J,H as L,b as X,f as Y,I as k,J as N,K as Z,i as $,L as A,M as T,n as tt,N as et,O as st,a as nt}from"./index-28f61451.js";var ot=!1;/*!
  * pinia v2.0.30
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let B;const O=t=>B=t,D=Symbol();function R(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var I;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(I||(I={}));function it(){const t=V(!0),n=t.run(()=>J({}));let s=[],e=[];const c=L({install(u){O(c),c._a=u,u.provide(D,c),u.config.globalProperties.$pinia=c,e.forEach(a=>s.push(a)),e=[]},use(u){return!this._a&&!ot?e.push(u):s.push(u),this},_p:s,_a:null,_e:t,_s:new Map,state:n});return c}const K=()=>{};function H(t,n,s,e=K){t.push(n);const c=()=>{const u=t.indexOf(n);u>-1&&(t.splice(u,1),e())};return!s&&A()&&T(c),c}function j(t,...n){t.slice().forEach(s=>{s(...n)})}function C(t,n){t instanceof Map&&n instanceof Map&&n.forEach((s,e)=>t.set(e,s)),t instanceof Set&&n instanceof Set&&n.forEach(t.add,t);for(const s in n){if(!n.hasOwnProperty(s))continue;const e=n[s],c=t[s];R(c)&&R(e)&&t.hasOwnProperty(s)&&!k(e)&&!N(e)?t[s]=C(c,e):t[s]=e}return t}const ct=Symbol();function rt(t){return!R(t)||!t.hasOwnProperty(ct)}const{assign:d}=Object;function ut(t){return!!(k(t)&&t.effect)}function ft(t,n,s,e){const{state:c,actions:u,getters:a}=n,f=s.state.value[t];let m;function h(){f||(s.state.value[t]=c?c():{});const b=st(s.state.value[t]);return d(b,u,Object.keys(a||{}).reduce((v,y)=>(v[y]=L(nt(()=>{O(s);const p=s._s.get(t);return a[y].call(p,p)})),v),{}))}return m=M(t,h,n,s,e,!0),m.$reset=function(){const v=c?c():{};this.$patch(y=>{d(y,v)})},m}function M(t,n,s={},e,c,u){let a;const f=d({actions:{}},s),m={deep:!0};let h,b,v=L([]),y=L([]),p;const _=e.state.value[t];!u&&!_&&(e.state.value[t]={}),J({});let x;function F(r){let o;h=b=!1,typeof r=="function"?(r(e.state.value[t]),o={type:I.patchFunction,storeId:t,events:p}):(C(e.state.value[t],r),o={type:I.patchObject,payload:r,storeId:t,events:p});const S=x=Symbol();tt().then(()=>{x===S&&(h=!0)}),b=!0,j(v,o,e.state.value[t])}const W=K;function q(){a.stop(),v=[],y=[],e._s.delete(t)}function z(r,o){return function(){O(e);const S=Array.from(arguments),g=[],w=[];function Q(i){g.push(i)}function U(i){w.push(i)}j(y,{args:S,name:r,store:l,after:Q,onError:U});let E;try{E=o.apply(this&&this.$id===t?this:l,S)}catch(i){throw j(w,i),i}return E instanceof Promise?E.then(i=>(j(g,i),i)).catch(i=>(j(w,i),Promise.reject(i))):(j(g,E),E)}}const G={_p:e,$id:t,$onAction:H.bind(null,y),$patch:F,$reset:W,$subscribe(r,o={}){const S=H(v,r,o.detached,()=>g()),g=a.run(()=>X(()=>e.state.value[t],w=>{(o.flush==="sync"?b:h)&&r({storeId:t,type:I.direct,events:p},w)},d({},m,o)));return S},$dispose:q},l=Y(G);e._s.set(t,l);const P=e._e.run(()=>(a=V(),a.run(()=>n())));for(const r in P){const o=P[r];if(k(o)&&!ut(o)||N(o))u||(_&&rt(o)&&(k(o)?o.value=_[r]:C(o,_[r])),e.state.value[t][r]=o);else if(typeof o=="function"){const S=z(r,o);P[r]=S,f.actions[r]=o}}return d(l,P),d(Z(l),P),Object.defineProperty(l,"$state",{get:()=>e.state.value[t],set:r=>{F(o=>{d(o,r)})}}),e._p.forEach(r=>{d(l,a.run(()=>r({store:l,app:e._a,pinia:e,options:f})))}),_&&u&&s.hydrate&&s.hydrate(l.$state,_),h=!0,b=!0,l}function lt(t,n,s){let e,c;const u=typeof n=="function";typeof t=="string"?(e=t,c=u?s:n):(c=t,e=t.id);function a(f,m){const h=et();return f=f||h&&$(D,null),f&&O(f),f=B,f._s.has(e)||(u?M(e,n,c,f):ft(e,c,f)),f._s.get(e)}return a.$id=e,a}export{it as c,lt as d};
