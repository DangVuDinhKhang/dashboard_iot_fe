import{a1 as o,r as u,O as f,K as d,e as v,a2 as l,a3 as i,X as h,a4 as m}from"./Q7CzeNFU.js";function U(t,a={}){const e=a.head||o();if(e)return e.ssr?e.push(t,a):p(e,t,a)}function p(t,a,e={}){const s=u(!1),n=u({});f(()=>{n.value=s.value?{}:m(a)});const r=t.push(n.value,e);return d(n,c=>{r.patch(c)}),h()&&(v(()=>{r.dispose()}),l(()=>{s.value=!0}),i(()=>{s.value=!1})),r}export{U as u};