import{A as f,s as m}from"./index-401b77de.js";const l=[];function d(t,n=f){let e;const o=new Set;function r(i){if(m(t,i)&&(t=i,e)){const c=!l.length;for(const a of o)a[1](),l.push(a,t);if(c){for(let a=0;a<l.length;a+=2)l[a][0](l[a+1]);l.length=0}}}function u(i){r(i(t))}function s(i,c=f){const a=[i,c];return o.add(a),o.size===1&&(e=n(r)||f),i(t),()=>{o.delete(a),o.size===0&&(e(),e=null)}}return{set:r,update:u,subscribe:s}}let p="",g="";function w(t){p=t.base,g=t.assets||p}function y(t){let n=t.baseURI;if(!n){const e=t.getElementsByTagName("base");n=e.length?e[0].href:t.URL}return n}function R(){return{x:pageXOffset,y:pageYOffset}}function A(t){let n,e=null,o=null,r=null;for(const s of t.composedPath())s instanceof Element&&(!n&&s.nodeName.toUpperCase()==="A"&&(n=s),e===null&&(e=b(s,"data-sveltekit-noscroll")),o===null&&(o=b(s,"data-sveltekit-prefetch")),r===null&&(r=b(s,"data-sveltekit-reload")));const u=n&&new URL(n instanceof SVGAElement?n.href.baseVal:n.href,document.baseURI);return{a:n,url:u,options:{noscroll:e,prefetch:o,reload:r}}}function b(t,n){const e=t.getAttribute(n);return e===null?e:e===""?!0:(e==="off",!1)}function h(t){const n=d(t);let e=!0;function o(){e=!0,n.update(s=>s)}function r(s){e=!1,n.set(s)}function u(s){let i;return n.subscribe(c=>{(i===void 0||e&&c!==i)&&s(i=c)})}return{notify:o,set:r,subscribe:u}}function _(){const{set:t,subscribe:n}=d(!1);let e;async function o(){clearTimeout(e);const r=await fetch(`${g}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(r.ok){const{version:u}=await r.json(),s=u!=="1662596884534";return s&&(t(!0),clearTimeout(e)),s}else throw new Error(`Version check failed: ${r.status}`)}return{subscribe:n,check:o}}let k;function E(t){k=t.client}const T={url:h({}),page:h({}),navigating:d(null),updated:_()};export{R as a,w as b,k as c,A as f,y as g,E as i,T as s};
