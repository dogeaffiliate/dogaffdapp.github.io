import{i as o}from"./chunk-55IO54NW-f7e1bd9c.js";import{u as i,c as f,b as d}from"./wallet-1d791f41.js";import{g as m}from"./contracts-43d9d856.js";import{b as l}from"./index-8dfb0143.js";import"./pinia-33049115.js";import"./index-db580711.js";async function s(r){r.referer=r.address?await m(r.address):void 0}const R={priority:-97,async install(){const r=i();if(await s(r),l(()=>r.address,()=>s(r)),!r.referer){const e=f(),a=d(),t=e.from&&typeof e.from=="string"&&o(e.from);a.value=t?e.from:void 0}}};export{R as referer};
