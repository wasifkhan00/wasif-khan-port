import{n as f,s as _}from"./scheduler.7a274a43.js";const e=[];function d(n,l=f){let i;const o=new Set;function r(t){if(_(n,t)&&(n=t,i)){const c=!e.length;for(const s of o)s[1](),e.push(s,n);if(c){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function b(t){r(t(n))}function p(t,c=f){const s=[t,c];return o.add(s),o.size===1&&(i=l(r,b)||f),t(n),()=>{o.delete(s),o.size===0&&i&&(i(),i=null)}}return{set:r,update:b,subscribe:p}}var a;const h=((a=globalThis.__sveltekit_1cspsyf)==null?void 0:a.base)??"/wasif-khan-port";var u;const k=((u=globalThis.__sveltekit_1cspsyf)==null?void 0:u.assets)??h;export{k as a,h as b,d as w};
