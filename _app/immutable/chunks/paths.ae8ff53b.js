import{n as b,s as g}from"./scheduler.7a274a43.js";const e=[];function d(n,l=b){let o;const i=new Set;function r(t){if(g(n,t)&&(n=t,o)){const c=!e.length;for(const s of i)s[1](),e.push(s,n);if(c){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function u(t){r(t(n))}function _(t,c=b){const s=[t,c];return i.add(s),i.size===1&&(o=l(r,u)||b),t(n),()=>{i.delete(s),i.size===0&&o&&(o(),o=null)}}return{set:r,update:u,subscribe:_}}var f;const p=((f=globalThis.__sveltekit_gansnu)==null?void 0:f.base)??"/slick-portfolio-svelte";var a;const k=((a=globalThis.__sveltekit_gansnu)==null?void 0:a.assets)??p;export{k as a,p as b,d as w};
