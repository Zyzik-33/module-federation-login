(self.webpackChunk_comprehensive_demo_app_04=self.webpackChunk_comprehensive_demo_app_04||[]).push([[379],{379:(t,e,n)=>{"use strict";function o(){}function r(t){return t()}function s(){return Object.create(null)}function i(t){t.forEach(r)}function u(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(t){return 0===Object.keys(t).length}function a(t){return null==t?"":t}function f(t,e){t.appendChild(e)}function d(t,e,n){t.insertBefore(e,n||null)}function p(t){t.parentNode.removeChild(t)}function h(t){return document.createElement(t)}function $(){return t=" ",document.createTextNode(t);var t}function m(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function g(t){return function(e){return e.preventDefault(),t.call(this,e)}}function b(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function _(t,e){t.value=null==e?"":e}let y;function k(t){y=t}n.d(e,{f_:()=>D,R3:()=>f,Lj:()=>b,og:()=>p,bG:()=>h,S1:()=>B,$T:()=>d,oL:()=>m,ZT:()=>o,Gu:()=>a,AT:()=>g,j7:()=>i,N8:()=>c,Bm:()=>_,Dh:()=>$}),new Set,new Set;const w=[],v=[],x=[],E=[],C=Promise.resolve();let T=!1;function S(t){x.push(t)}let L=!1;const j=new Set;function A(){if(!L){L=!0;do{for(let t=0;t<w.length;t+=1){const e=w[t];k(e),N(e.$$)}for(w.length=0;v.length;)v.pop()();for(let t=0;t<x.length;t+=1){const e=x[t];j.has(e)||(j.add(e),e())}x.length=0}while(w.length);for(;E.length;)E.pop()();T=!1,L=!1,j.clear()}}function N(t){if(null!==t.fragment){t.update(),i(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(S)}}const O=new Set;let q;function M(t,e){const n=t.$$;null!==n.fragment&&(i(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function B(t,e,n,c,l,a,f=[-1]){const d=y;k(t);const h=e.props||{},$=t.$$={fragment:null,ctx:null,props:a,update:o,not_equal:l,bound:s(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:[]),callbacks:s(),dirty:f,skip_bound:!1};let m=!1;if($.ctx=n?n(t,h,(e,n,...o)=>{const r=o.length?o[0]:n;return $.ctx&&l($.ctx[e],$.ctx[e]=r)&&(!$.skip_bound&&$.bound[e]&&$.bound[e](r),m&&function(t,e){-1===t.$$.dirty[0]&&(w.push(t),T||(T=!0,C.then(A)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(t,e)),n}):[],$.update(),m=!0,i($.before_update),$.fragment=!!c&&c($.ctx),e.target){if(e.hydrate){const t=function(t){return Array.from(t.childNodes)}(e.target);$.fragment&&$.fragment.l(t),t.forEach(p)}else $.fragment&&$.fragment.c();e.intro&&((g=t.$$.fragment)&&g.i&&(O.delete(g),g.i(b))),function(t,e,n){const{fragment:o,on_mount:s,on_destroy:c,after_update:l}=t.$$;o&&o.m(e,n),S(()=>{const e=s.map(r).filter(u);c?c.push(...e):i(e),t.$$.on_mount=[]}),l.forEach(S)}(t,e.target,e.anchor),A()}var g,b;k(d)}"undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:n.g,new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]),"function"==typeof HTMLElement&&(q=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}$destroy(){M(this,1),this.$destroy=o}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){this.$$set&&!l(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});class D{$destroy(){M(this,1),this.$destroy=o}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){this.$$set&&!l(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}}}]);