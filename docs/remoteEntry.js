var login;login=(()=>{"use strict";var e,r,t={774:(e,r,t)=>{var o={"./App":()=>Promise.all([t.e(379),t.e(225)]).then(()=>()=>t(225)),"./loadApp":()=>Promise.all([t.e(379),t.e(966)]).then(()=>()=>t(966))},n=e=>t.o(o,e)?o[e]():Promise.resolve().then(()=>{throw new Error('Module "'+e+'" does not exist in container.')}),i=e=>{var r=t.S.default,o="default";if(r&&r!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[o]=e,t.I(o)};t.d(r,{get:()=>n,init:()=>i})}},o={};function n(e){if(o[e])return o[e].exports;var r=o[e]={exports:{}};return t[e](r,r.exports,n),r.exports}return n.m=t,n.d=(e,r)=>{for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce((r,t)=>(n.f[t](e,r),r),[])),n.u=e=>e+"."+e+".js",n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="@comprehensive-demo/app-04:",n.l=(t,o,i)=>{if(e[t])e[t].push(o);else{var a,l;if(void 0!==i)for(var s=document.getElementsByTagName("script"),u=0;u<s.length;u++){var d=s[u];if(d.getAttribute("src")==t||d.getAttribute("data-webpack")==r+i){a=d;break}}a||(l=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",r+i),a.src=t),e[t]=[o];var p=(r,o)=>{a.onerror=a.onload=null,clearTimeout(f);var n=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),n&&n.forEach(e=>e(o)),r)return r(o)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=p.bind(null,a.onerror),a.onload=p.bind(null,a.onload),l&&document.head.appendChild(a)}},n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="https://filipemerker.github.io/module-federation-login",(()=>{n.S={};var e={};n.I=r=>{if(e[r])return e[r];e[r]=1,n.o(n.S,r)||(n.S[r]={}),n.S[r];var t=[];return t.length&&(e[r]=Promise.all(t).then(()=>e[r]=1))}})(),(()=>{var e={535:0};n.f.j=(r,t)=>{var o=n.o(e,r)?e[r]:void 0;if(0!==o)if(o)t.push(o[2]);else{var i=new Promise((t,n)=>{o=e[r]=[t,n]});t.push(o[2]=i);var a=n.p+n.u(r),l=new Error;n.l(a,t=>{if(n.o(e,r)&&(0!==(o=e[r])&&(e[r]=void 0),o)){var i=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+r+" failed.\n("+i+": "+a+")",l.name="ChunkLoadError",l.type=i,l.request=a,o[1](l)}},"chunk-"+r)}};var r=self.webpackChunk_comprehensive_demo_app_04=self.webpackChunk_comprehensive_demo_app_04||[],t=r.push.bind(r);r.push=r=>{for(var o,i,[a,l,s]=r,u=0,d=[];u<a.length;u++)i=a[u],n.o(e,i)&&e[i]&&d.push(e[i][0]),e[i]=0;for(o in l)n.o(l,o)&&(n.m[o]=l[o]);for(s&&s(n),t(r);d.length;)d.shift()()}})(),n(774)})();