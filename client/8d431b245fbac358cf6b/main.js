!function(t){function e(e){for(var n,c,o=e[0],s=e[1],i=0,u=[];i<o.length;i++)c=o[i],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&u.push(r[c][0]),r[c]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);for(l&&l(e);u.length;)u.shift()()}var n={},r={1:0};function c(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,c){n=r[t]=[e,c]}));e.push(n[2]=o);var s,i=document.createElement("script");i.charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.src=function(t){return c.p+"8d431b245fbac358cf6b/"+({0:"index"}[t]||t)+"."+t+".js"}(t);var l=new Error;s=function(e){i.onerror=i.onload=null,clearTimeout(u);var n=r[t];if(0!==n){if(n){var c=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+c+": "+o+")",l.name="ChunkLoadError",l.type=c,l.request=o,n[1](l)}r[t]=void 0}};var u=setTimeout((function(){s({type:"timeout",target:i})}),12e4);i.onerror=i.onload=s,document.head.appendChild(i)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="client/",c.oe=function(t){throw console.error(t),t};var o=window.webpackJsonp=window.webpackJsonp||[],s=o.push.bind(o);o.push=e,o=o.slice();for(var i=0;i<o.length;i++)e(o[i]);var l=s;c(c.s=3)}([function(t,e,n){"use strict";function r(){}n.d(e,"a",(function(){return B})),n.d(e,"b",(function(){return Pt})),n.d(e,"c",(function(){return lt})),n.d(e,"d",(function(){return X})),n.d(e,"e",(function(){return k})),n.d(e,"f",(function(){return o})),n.d(e,"g",(function(){return L})),n.d(e,"h",(function(){return $t})),n.d(e,"i",(function(){return U})),n.d(e,"j",(function(){return zt})),n.d(e,"k",(function(){return A})),n.d(e,"l",(function(){return N})),n.d(e,"m",(function(){return D})),n.d(e,"n",(function(){return St})),n.d(e,"o",(function(){return wt})),n.d(e,"p",(function(){return xt})),n.d(e,"q",(function(){return b})),n.d(e,"r",(function(){return Ct})),n.d(e,"s",(function(){return S})),n.d(e,"t",(function(){return E})),n.d(e,"u",(function(){return z})),n.d(e,"v",(function(){return q})),n.d(e,"w",(function(){return j})),n.d(e,"x",(function(){return tt})),n.d(e,"y",(function(){return _t})),n.d(e,"z",(function(){return kt})),n.d(e,"A",(function(){return Ot})),n.d(e,"B",(function(){return c})),n.d(e,"C",(function(){return qt})),n.d(e,"D",(function(){return _})),n.d(e,"E",(function(){return u})),n.d(e,"F",(function(){return P})),n.d(e,"G",(function(){return Tt})),n.d(e,"H",(function(){return r})),n.d(e,"I",(function(){return O})),n.d(e,"J",(function(){return G})),n.d(e,"K",(function(){return l})),n.d(e,"L",(function(){return a})),n.d(e,"M",(function(){return Z})),n.d(e,"N",(function(){return R})),n.d(e,"O",(function(){return H})),n.d(e,"P",(function(){return C})),n.d(e,"Q",(function(){return d})),n.d(e,"R",(function(){return T})),n.d(e,"S",(function(){return I})),n.d(e,"T",(function(){return gt})),n.d(e,"U",(function(){return vt})),n.d(e,"V",(function(){return m}));const c=t=>t;function o(t,e){for(const n in e)t[n]=e[n];return t}function s(t){return t()}function i(){return Object.create(null)}function l(t){t.forEach(s)}function u(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function f(t){return 0===Object.keys(t).length}function d(t,...e){if(null==t)return r;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function b(t,e,n,r){if(t){const c=p(t,e,n,r);return t[0](c)}}function p(t,e,n,r){return t[1]&&r?o(n.ctx.slice(),t[1](r(e))):n.ctx}function h(t,e,n,r){if(t[2]&&r){const c=t[2](r(n));if(void 0===e.dirty)return c;if("object"==typeof c){const t=[],n=Math.max(e.dirty.length,c.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|c[r];return t}return e.dirty|c}return e.dirty}function m(t,e,n,r,c,o,s){const i=h(e,r,c,o);if(i){const c=p(e,n,r,s);t.p(c,i)}}function j(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function O(t){return null==t?"":t}const $="undefined"!=typeof window;let g=$?()=>window.performance.now():()=>Date.now(),v=$?t=>requestAnimationFrame(t):r;const y=new Set;function w(t){y.forEach(e=>{e.c(t)||(y.delete(e),e.f())}),0!==y.size&&v(w)}function x(t){let e;return 0===y.size&&v(w),{promise:new Promise(n=>{y.add(e={c:t,f:n})}),abort(){y.delete(e)}}}function k(t,e){t.appendChild(e)}function _(t,e,n){t.insertBefore(e,n||null)}function E(t){t.parentNode.removeChild(t)}function S(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function z(t){return document.createElement(t)}function T(t){return document.createTextNode(t)}function C(){return T(" ")}function q(){return T("")}function P(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function L(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function R(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const r in e)null==e[r]?t.removeAttribute(r):"style"===r?t.style.cssText=e[r]:"__value"===r?t.value=t[r]=e[r]:n[r]&&n[r].set?t[r]=e[r]:L(t,r,e[r])}function U(t){return Array.from(t.childNodes)}function A(t,e,n,r){for(let r=0;r<t.length;r+=1){const c=t[r];if(c.nodeName===e){let e=0;const o=[];for(;e<c.attributes.length;){const t=c.attributes[e++];n[t.name]||o.push(t.name)}for(let t=0;t<o.length;t++)c.removeAttribute(o[t]);return t.splice(r,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):z(e)}function D(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return T(e)}function N(t){return D(t," ")}function H(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function I(t,e,n){t.classList[n?"add":"remove"](e)}function M(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}function G(t,e=document.body){return Array.from(e.querySelectorAll(t))}class B{constructor(t=null){this.a=t,this.e=this.n=null}m(t,e,n=null){this.e||(this.e=z(e.nodeName),this.t=e,this.h(t)),this.i(n)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)_(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(E)}}const V=new Set;let J,K=0;function F(t,e,n,r,c,o,s,i=0){const l=16.666/r;let u="{\n";for(let t=0;t<=1;t+=l){const r=e+(n-e)*o(t);u+=100*t+`%{${s(r,1-r)}}\n`}const a=u+`100% {${s(n,1-n)}}\n}`,f=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(a)}_${i}`,d=t.ownerDocument;V.add(d);const b=d.__svelte_stylesheet||(d.__svelte_stylesheet=d.head.appendChild(z("style")).sheet),p=d.__svelte_rules||(d.__svelte_rules={});p[f]||(p[f]=!0,b.insertRule(`@keyframes ${f} ${a}`,b.cssRules.length));const h=t.style.animation||"";return t.style.animation=`${h?h+", ":""}${f} ${r}ms linear ${c}ms 1 both`,K+=1,f}function Y(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),c=n.length-r.length;c&&(t.style.animation=r.join(", "),K-=c,K||v(()=>{K||(V.forEach(t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}}),V.clear())}))}function Q(t){J=t}function W(){if(!J)throw new Error("Function called outside component initialization");return J}function X(t){W().$$.after_update.push(t)}function Z(t,e){W().$$.context.set(t,e)}function tt(t){return W().$$.context.get(t)}const et=[],nt=[],rt=[],ct=[],ot=Promise.resolve();let st=!1;function it(){st||(st=!0,ot.then(ft))}function lt(t){rt.push(t)}let ut=!1;const at=new Set;function ft(){if(!ut){ut=!0;do{for(let t=0;t<et.length;t+=1){const e=et[t];Q(e),dt(e.$$)}for(Q(null),et.length=0;nt.length;)nt.pop()();for(let t=0;t<rt.length;t+=1){const e=rt[t];at.has(e)||(at.add(e),e())}rt.length=0}while(et.length);for(;ct.length;)ct.pop()();st=!1,ut=!1,at.clear()}}function dt(t){if(null!==t.fragment){t.update(),l(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(lt)}}let bt;function pt(){return bt||(bt=Promise.resolve(),bt.then(()=>{bt=null})),bt}function ht(t,e,n){t.dispatchEvent(M(`${e?"intro":"outro"}${n}`))}const mt=new Set;let jt;function Ot(){jt={r:0,c:[],p:jt}}function $t(){jt.r||l(jt.c),jt=jt.p}function gt(t,e){t&&t.i&&(mt.delete(t),t.i(e))}function vt(t,e,n,r){if(t&&t.o){if(mt.has(t))return;mt.add(t),jt.c.push(()=>{mt.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}const yt={duration:0};function wt(t,e,n){let o,s,i=e(t,n),l=!1,a=0;function f(){o&&Y(t,o)}function d(){const{delay:e=0,duration:n=300,easing:u=c,tick:d=r,css:b}=i||yt;b&&(o=F(t,0,1,n,e,u,b,a++)),d(0,1);const p=g()+e,h=p+n;s&&s.abort(),l=!0,lt(()=>ht(t,!0,"start")),s=x(e=>{if(l){if(e>=h)return d(1,0),ht(t,!0,"end"),f(),l=!1;if(e>=p){const t=u((e-p)/n);d(t,1-t)}}return l})}let b=!1;return{start(){b||(Y(t),u(i)?(i=i(),pt().then(d)):d())},invalidate(){b=!1},end(){l&&(f(),l=!1)}}}function xt(t,e,n){let o,s=e(t,n),i=!0;const a=jt;function f(){const{delay:e=0,duration:n=300,easing:u=c,tick:f=r,css:d}=s||yt;d&&(o=F(t,1,0,n,e,u,d));const b=g()+e,p=b+n;lt(()=>ht(t,!1,"start")),x(e=>{if(i){if(e>=p)return f(0,1),ht(t,!1,"end"),--a.r||l(a.c),!1;if(e>=b){const t=u((e-b)/n);f(1-t,t)}}return i})}return a.r+=1,u(s)?pt().then(()=>{s=s(),f()}):f(),{end(e){e&&s.tick&&s.tick(1,0),i&&(o&&Y(t,o),i=!1)}}}"undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function kt(t,e){const n={},r={},c={$$scope:1};let o=t.length;for(;o--;){const s=t[o],i=e[o];if(i){for(const t in s)t in i||(r[t]=1);for(const t in i)c[t]||(n[t]=i[t],c[t]=1);t[o]=i}else for(const t in s)c[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function _t(t){return"object"==typeof t&&null!==t?t:{}}new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]);let Et;function St(t){t&&t.c()}function zt(t,e){t&&t.l(e)}function Tt(t,e,n){const{fragment:r,on_mount:c,on_destroy:o,after_update:i}=t.$$;r&&r.m(e,n),lt(()=>{const e=c.map(s).filter(u);o?o.push(...e):l(e),t.$$.on_mount=[]}),i.forEach(lt)}function Ct(t,e){const n=t.$$;null!==n.fragment&&(l(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function qt(t,e,n,c,o,s,u=[-1]){const a=J;Q(t);const f=e.props||{},d=t.$$={fragment:null,ctx:null,props:s,update:r,not_equal:o,bound:i(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:[]),callbacks:i(),dirty:u,skip_bound:!1};let b=!1;if(d.ctx=n?n(t,f,(e,n,...r)=>{const c=r.length?r[0]:n;return d.ctx&&o(d.ctx[e],d.ctx[e]=c)&&(!d.skip_bound&&d.bound[e]&&d.bound[e](c),b&&function(t,e){-1===t.$$.dirty[0]&&(et.push(t),it(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(t,e)),n}):[],d.update(),b=!0,l(d.before_update),d.fragment=!!c&&c(d.ctx),e.target){if(e.hydrate){const t=U(e.target);d.fragment&&d.fragment.l(t),t.forEach(E)}else d.fragment&&d.fragment.c();e.intro&&gt(t.$$.fragment),Tt(t,e.target,e.anchor),ft()}Q(a)}"function"==typeof HTMLElement&&(Et=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}$destroy(){Ct(this,1),this.$destroy=r}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){this.$$set&&!f(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});class Pt{$destroy(){Ct(this,1),this.$destroy=r}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){this.$$set&&!f(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}},function(t,e,n){"use strict";n.r(e);var r=n(0);function c(t){let e,n,c;const o=t[2].default,s=Object(r.q)(o,t,t[1],null);return{c(){e=Object(r.u)("div"),s&&s.c(),this.h()},l(t){e=Object(r.k)(t,"DIV",{class:!0});var n=Object(r.i)(e);s&&s.l(n),n.forEach(r.t),this.h()},h(){Object(r.g)(e,"class",n=Object(r.I)(t[0]&&t[0])+" svelte-bzvyyq")},m(t,n){Object(r.D)(t,e,n),s&&s.m(e,null),c=!0},p(t,[i]){s&&s.p&&2&i&&Object(r.V)(s,o,t,t[1],i,null,null),(!c||1&i&&n!==(n=Object(r.I)(t[0]&&t[0])+" svelte-bzvyyq"))&&Object(r.g)(e,"class",n)},i(t){c||(Object(r.T)(s,t),c=!0)},o(t){Object(r.U)(s,t),c=!1},d(t){t&&Object(r.t)(e),s&&s.d(t)}}}function o(t,e,n){let{$$slots:r={},$$scope:c}=e,{background:o}=e;return t.$$set=t=>{"background"in t&&n(0,o=t.background),"$$scope"in t&&n(1,c=t.$$scope)},[o,c,r]}class s extends r.b{constructor(t){var e;super(),document.getElementById("svelte-bzvyyq-style")||((e=Object(r.u)("style")).id="svelte-bzvyyq-style",e.textContent="div.svelte-bzvyyq{padding:1rem 0}.black.svelte-bzvyyq{background-color:var(--background-dark);color:var(--text-dark)}.primary.svelte-bzvyyq{background-color:var(--primary);color:var(--text-light)}.secondary.svelte-bzvyyq{background-color:var(--secondary);color:var(--text-dark)}.monkey.svelte-bzvyyq{background-color:white;background-image:url('/img/monkey-yellow.svg');background-position:-1% 20%;background-size:240%;background-repeat:no-repeat;background-attachment:fixed}@media(prefers-color-scheme: dark){.monkey.svelte-bzvyyq{background-color:black;color:var(--primary);filter:grayscale(100%)\n  }}",Object(r.e)(document.head,e)),Object(r.C)(this,t,o,c,r.L,{background:0})}}e.default=s},function(t,e,n){"use strict";n.r(e);var r=n(0);function c(t){let e,n;const c=t[6].default,o=Object(r.q)(c,t,t[5],null);return{c(){e=Object(r.u)("section"),o&&o.c(),this.h()},l(t){e=Object(r.k)(t,"SECTION",{class:!0});var n=Object(r.i)(e);o&&o.l(n),n.forEach(r.t),this.h()},h(){Object(r.g)(e,"class","root svelte-181cnst"),Object(r.S)(e,"paddingNormal","normal"===t[2]),Object(r.S)(e,"fullHeight",t[0]),Object(r.S)(e,"article","article"===t[1]),Object(r.S)(e,"relative",t[3]),Object(r.S)(e,"center",t[4])},m(t,c){Object(r.D)(t,e,c),o&&o.m(e,null),n=!0},p(t,[n]){o&&o.p&&32&n&&Object(r.V)(o,c,t,t[5],n,null,null),4&n&&Object(r.S)(e,"paddingNormal","normal"===t[2]),1&n&&Object(r.S)(e,"fullHeight",t[0]),2&n&&Object(r.S)(e,"article","article"===t[1]),8&n&&Object(r.S)(e,"relative",t[3]),16&n&&Object(r.S)(e,"center",t[4])},i(t){n||(Object(r.T)(o,t),n=!0)},o(t){Object(r.U)(o,t),n=!1},d(t){t&&Object(r.t)(e),o&&o.d(t)}}}function o(t,e,n){let{$$slots:r={},$$scope:c}=e,{fullHeight:o=!1}=e,{variant:s="normal"}=e,{padding:i="normal"}=e,{relative:l=!1}=e,{center:u=!1}=e;return t.$$set=t=>{"fullHeight"in t&&n(0,o=t.fullHeight),"variant"in t&&n(1,s=t.variant),"padding"in t&&n(2,i=t.padding),"relative"in t&&n(3,l=t.relative),"center"in t&&n(4,u=t.center),"$$scope"in t&&n(5,c=t.$$scope)},[o,s,i,l,u,c,r]}class s extends r.b{constructor(t){var e;super(),document.getElementById("svelte-181cnst-style")||((e=Object(r.u)("style")).id="svelte-181cnst-style",e.textContent=".root.svelte-181cnst{max-width:var(--max-width);width:100%;margin:0 auto}.center.svelte-181cnst{display:flex;align-items:center;justify-content:center;flex-direction:column}.relative.svelte-181cnst{position:relative}.fullHeight.svelte-181cnst{min-height:100vh}.article.svelte-181cnst{max-width:var(--max-width--article)}@media(max-width: 900px){.article.svelte-181cnst{max-width:unset\n  }}.paddingNormal.svelte-181cnst{padding:0 var(--sideMargin)}",Object(r.e)(document.head,e)),Object(r.C)(this,t,o,c,r.L,{fullHeight:0,variant:1,padding:2,relative:3,center:4})}}e.default=s},function(t,e,n){"use strict";n.r(e);var r={};n.r(r),n.d(r,"default",(function(){return S}));var c=n(0);const o=[];function s(t,e=c.H){let n;const r=[];function s(e){if(Object(c.L)(t,e)&&(t=e,n)){const e=!o.length;for(let e=0;e<r.length;e+=1){const n=r[e];n[1](),o.push(n,t)}if(e){for(let t=0;t<o.length;t+=2)o[t][0](o[t+1]);o.length=0}}}return{set:s,update:function(e){s(e(t))},subscribe:function(o,i=c.H){const l=[o,i];return r.push(l),1===r.length&&(n=e(s)||c.H),o(t),()=>{const t=r.indexOf(l);-1!==t&&r.splice(t,1),0===r.length&&(n(),n=null)}}}}const i={};var l=n(1);function u(t){let e,n,r;const o=t[3].default,s=Object(c.q)(o,t,t[2],null);let i=[{href:t[0]},t[1]],l={};for(let t=0;t<i.length;t+=1)l=Object(c.f)(l,i[t]);return{c(){e=Object(c.u)("a"),n=Object(c.u)("span"),s&&s.c(),this.h()},l(t){e=Object(c.k)(t,"A",{href:!0});var r=Object(c.i)(e);n=Object(c.k)(r,"SPAN",{class:!0});var o=Object(c.i)(n);s&&s.l(o),o.forEach(c.t),r.forEach(c.t),this.h()},h(){Object(c.g)(n,"class","svelte-6ozuhv"),Object(c.N)(e,l),Object(c.S)(e,"svelte-6ozuhv",!0)},m(t,o){Object(c.D)(t,e,o),Object(c.e)(e,n),s&&s.m(n,null),r=!0},p(t,[n]){s&&s.p&&4&n&&Object(c.V)(s,o,t,t[2],n,null,null),Object(c.N)(e,l=Object(c.z)(i,[(!r||1&n)&&{href:t[0]},2&n&&t[1]])),Object(c.S)(e,"svelte-6ozuhv",!0)},i(t){r||(Object(c.T)(s,t),r=!0)},o(t){Object(c.U)(s,t),r=!1},d(t){t&&Object(c.t)(e),s&&s.d(t)}}}function a(t,e,n){let{$$slots:r={},$$scope:o}=e,{href:s}=e;return t.$$set=t=>{n(1,e=Object(c.f)(Object(c.f)({},e),Object(c.w)(t))),"href"in t&&n(0,s=t.href),"$$scope"in t&&n(2,o=t.$$scope)},e=Object(c.w)(e),[s,e,o,r]}class f extends c.b{constructor(t){var e;super(),document.getElementById("svelte-6ozuhv-style")||((e=Object(c.u)("style")).id="svelte-6ozuhv-style",e.textContent="a.svelte-6ozuhv{font-size:1rem;position:relative;padding:4px;color:var(--text-white);border-radius:300px;text-decoration:none;border:3px solid transparent}a.svelte-6ozuhv:hover{border-color:white}span.svelte-6ozuhv{display:inline-block;border-radius:300px;padding:0.5rem 1rem;background:white}",Object(c.e)(document.head,e)),Object(c.C)(this,t,a,u,c.L,{href:0})}}var d=f;function b(t){let e;return{c(){e=Object(c.R)("About")},l(t){e=Object(c.m)(t,"About")},m(t,n){Object(c.D)(t,e,n)},d(t){t&&Object(c.t)(e)}}}function p(t){let e;return{c(){e=Object(c.R)("Contact")},l(t){e=Object(c.m)(t,"Contact")},m(t,n){Object(c.D)(t,e,n)},d(t){t&&Object(c.t)(e)}}}function h(t){let e;return{c(){e=Object(c.R)("Careers")},l(t){e=Object(c.m)(t,"Careers")},m(t,n){Object(c.D)(t,e,n)},d(t){t&&Object(c.t)(e)}}}function m(t){let e,n,r,o,s,i,l;return n=new d({props:{href:"#about",$$slots:{default:[b]},$$scope:{ctx:t}}}),o=new d({props:{href:"#contact",$$slots:{default:[p]},$$scope:{ctx:t}}}),i=new d({props:{href:"#about",$$slots:{default:[h]},$$scope:{ctx:t}}}),{c(){e=Object(c.u)("nav"),Object(c.n)(n.$$.fragment),r=Object(c.P)(),Object(c.n)(o.$$.fragment),s=Object(c.P)(),Object(c.n)(i.$$.fragment),this.h()},l(t){e=Object(c.k)(t,"NAV",{class:!0});var l=Object(c.i)(e);Object(c.j)(n.$$.fragment,l),r=Object(c.l)(l),Object(c.j)(o.$$.fragment,l),s=Object(c.l)(l),Object(c.j)(i.$$.fragment,l),l.forEach(c.t),this.h()},h(){Object(c.g)(e,"class","svelte-57duaq")},m(t,u){Object(c.D)(t,e,u),Object(c.G)(n,e,null),Object(c.e)(e,r),Object(c.G)(o,e,null),Object(c.e)(e,s),Object(c.G)(i,e,null),l=!0},p(t,[e]){const r={};1&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r);const c={};1&e&&(c.$$scope={dirty:e,ctx:t}),o.$set(c);const s={};1&e&&(s.$$scope={dirty:e,ctx:t}),i.$set(s)},i(t){l||(Object(c.T)(n.$$.fragment,t),Object(c.T)(o.$$.fragment,t),Object(c.T)(i.$$.fragment,t),l=!0)},o(t){Object(c.U)(n.$$.fragment,t),Object(c.U)(o.$$.fragment,t),Object(c.U)(i.$$.fragment,t),l=!1},d(t){t&&Object(c.t)(e),Object(c.r)(n),Object(c.r)(o),Object(c.r)(i)}}}class j extends c.b{constructor(t){var e;super(),document.getElementById("svelte-57duaq-style")||((e=Object(c.u)("style")).id="svelte-57duaq-style",e.textContent="nav.svelte-57duaq{top:0;left:0;position:absolute;justify-content:flex-end;width:100%;padding:1rem 2rem;display:flex;z-index:300}",Object(c.e)(document.head,e)),Object(c.C)(this,t,null,m,c.L,{})}}var O=j,$=n(2);function g(t){let e;return{c(){e=Object(c.R)("asd")},l(t){e=Object(c.m)(t,"asd")},m(t,n){Object(c.D)(t,e,n)},d(t){t&&Object(c.t)(e)}}}function v(t){let e,n;return e=new $.default({props:{fullHeight:!0,$$slots:{default:[g]},$$scope:{ctx:t}}}),{c(){Object(c.n)(e.$$.fragment)},l(t){Object(c.j)(e.$$.fragment,t)},m(t,r){Object(c.G)(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){n||(Object(c.T)(e.$$.fragment,t),n=!0)},o(t){Object(c.U)(e.$$.fragment,t),n=!1},d(t){Object(c.r)(e,t)}}}function y(t){let e,n,r;return n=new l.default({props:{background:"black",padding:"none",$$slots:{default:[v]},$$scope:{ctx:t}}}),{c(){e=Object(c.u)("footer"),Object(c.n)(n.$$.fragment)},l(t){e=Object(c.k)(t,"FOOTER",{});var r=Object(c.i)(e);Object(c.j)(n.$$.fragment,r),r.forEach(c.t)},m(t,o){Object(c.D)(t,e,o),Object(c.G)(n,e,null),r=!0},p(t,[e]){const r={};1&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(Object(c.T)(n.$$.fragment,t),r=!0)},o(t){Object(c.U)(n.$$.fragment,t),r=!1},d(t){t&&Object(c.t)(e),Object(c.r)(n)}}}class w extends c.b{constructor(t){super(),Object(c.C)(this,t,null,y,c.L,{})}}var x=w;function k(t){let e,n,r,o,s,i;e=new O({props:{segment:t[0]}});const l=t[2].default,u=Object(c.q)(l,t,t[1],null);return s=new x({}),{c(){Object(c.n)(e.$$.fragment),n=Object(c.P)(),r=Object(c.u)("main"),u&&u.c(),o=Object(c.P)(),Object(c.n)(s.$$.fragment)},l(t){Object(c.j)(e.$$.fragment,t),n=Object(c.l)(t),r=Object(c.k)(t,"MAIN",{});var i=Object(c.i)(r);u&&u.l(i),i.forEach(c.t),o=Object(c.l)(t),Object(c.j)(s.$$.fragment,t)},m(t,l){Object(c.G)(e,t,l),Object(c.D)(t,n,l),Object(c.D)(t,r,l),u&&u.m(r,null),Object(c.D)(t,o,l),Object(c.G)(s,t,l),i=!0},p(t,[n]){const r={};1&n&&(r.segment=t[0]),e.$set(r),u&&u.p&&2&n&&Object(c.V)(u,l,t,t[1],n,null,null)},i(t){i||(Object(c.T)(e.$$.fragment,t),Object(c.T)(u,t),Object(c.T)(s.$$.fragment,t),i=!0)},o(t){Object(c.U)(e.$$.fragment,t),Object(c.U)(u,t),Object(c.U)(s.$$.fragment,t),i=!1},d(t){Object(c.r)(e,t),t&&Object(c.t)(n),t&&Object(c.t)(r),u&&u.d(t),t&&Object(c.t)(o),Object(c.r)(s,t)}}}function _(t,e,n){let{$$slots:r={},$$scope:c}=e,{segment:o}=e;return t.$$set=t=>{"segment"in t&&n(0,o=t.segment),"$$scope"in t&&n(1,c=t.$$scope)},[o,c,r]}class E extends c.b{constructor(t){super(),Object(c.C)(this,t,_,k,c.L,{segment:0})}}var S=E;function z(t){let e,n,r=t[1].stack+"";return{c(){e=Object(c.u)("pre"),n=Object(c.R)(r)},l(t){e=Object(c.k)(t,"PRE",{});var o=Object(c.i)(e);n=Object(c.m)(o,r),o.forEach(c.t)},m(t,r){Object(c.D)(t,e,r),Object(c.e)(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&Object(c.O)(n,r)},d(t){t&&Object(c.t)(e)}}}function T(t){let e,n,r,o,s,i,l,u,a,f=t[1].message+"";document.title=e=t[0];let d=t[2]&&t[1].stack&&z(t);return{c(){n=Object(c.P)(),r=Object(c.u)("h1"),o=Object(c.R)(t[0]),s=Object(c.P)(),i=Object(c.u)("p"),l=Object(c.R)(f),u=Object(c.P)(),d&&d.c(),a=Object(c.v)(),this.h()},l(e){Object(c.J)('[data-svelte="svelte-1moakz"]',document.head).forEach(c.t),n=Object(c.l)(e),r=Object(c.k)(e,"H1",{class:!0});var b=Object(c.i)(r);o=Object(c.m)(b,t[0]),b.forEach(c.t),s=Object(c.l)(e),i=Object(c.k)(e,"P",{class:!0});var p=Object(c.i)(i);l=Object(c.m)(p,f),p.forEach(c.t),u=Object(c.l)(e),d&&d.l(e),a=Object(c.v)(),this.h()},h(){Object(c.g)(r,"class","svelte-184wp6z"),Object(c.g)(i,"class","svelte-184wp6z")},m(t,e){Object(c.D)(t,n,e),Object(c.D)(t,r,e),Object(c.e)(r,o),Object(c.D)(t,s,e),Object(c.D)(t,i,e),Object(c.e)(i,l),Object(c.D)(t,u,e),d&&d.m(t,e),Object(c.D)(t,a,e)},p(t,[n]){1&n&&e!==(e=t[0])&&(document.title=e),1&n&&Object(c.O)(o,t[0]),2&n&&f!==(f=t[1].message+"")&&Object(c.O)(l,f),t[2]&&t[1].stack?d?d.p(t,n):(d=z(t),d.c(),d.m(a.parentNode,a)):d&&(d.d(1),d=null)},i:c.H,o:c.H,d(t){t&&Object(c.t)(n),t&&Object(c.t)(r),t&&Object(c.t)(s),t&&Object(c.t)(i),t&&Object(c.t)(u),d&&d.d(t),t&&Object(c.t)(a)}}}function C(t,e,n){let{status:r}=e,{error:c}=e;return t.$$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,c=t.error)},[r,c,!1]}class q extends c.b{constructor(t){var e;super(),document.getElementById("svelte-184wp6z-style")||((e=Object(c.u)("style")).id="svelte-184wp6z-style",e.textContent="h1.svelte-184wp6z,p.svelte-184wp6z{margin:0 auto}h1.svelte-184wp6z{font-size:2.8em;font-weight:700;margin:0 0 0.5em 0}p.svelte-184wp6z{margin:1em auto}@media(min-width: 480px){h1.svelte-184wp6z{font-size:4em}}",Object(c.e)(document.head,e)),Object(c.C)(this,t,C,T,c.L,{status:0,error:1})}}var P=q;function L(t){let e,n,r;const o=[t[4].props];var s=t[4].component;function i(t){let e={};for(let t=0;t<o.length;t+=1)e=Object(c.f)(e,o[t]);return{props:e}}return s&&(e=new s(i())),{c(){e&&Object(c.n)(e.$$.fragment),n=Object(c.v)()},l(t){e&&Object(c.j)(e.$$.fragment,t),n=Object(c.v)()},m(t,o){e&&Object(c.G)(e,t,o),Object(c.D)(t,n,o),r=!0},p(t,r){const l=16&r?Object(c.z)(o,[Object(c.y)(t[4].props)]):{};if(s!==(s=t[4].component)){if(e){Object(c.A)();const t=e;Object(c.U)(t.$$.fragment,1,0,()=>{Object(c.r)(t,1)}),Object(c.h)()}s?(e=new s(i()),Object(c.n)(e.$$.fragment),Object(c.T)(e.$$.fragment,1),Object(c.G)(e,n.parentNode,n)):e=null}else s&&e.$set(l)},i(t){r||(e&&Object(c.T)(e.$$.fragment,t),r=!0)},o(t){e&&Object(c.U)(e.$$.fragment,t),r=!1},d(t){t&&Object(c.t)(n),e&&Object(c.r)(e,t)}}}function R(t){let e,n;return e=new P({props:{error:t[0],status:t[1]}}),{c(){Object(c.n)(e.$$.fragment)},l(t){Object(c.j)(e.$$.fragment,t)},m(t,r){Object(c.G)(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(Object(c.T)(e.$$.fragment,t),n=!0)},o(t){Object(c.U)(e.$$.fragment,t),n=!1},d(t){Object(c.r)(e,t)}}}function U(t){let e,n,r,o;const s=[R,L],i=[];function l(t,e){return t[0]?0:1}return e=l(t),n=i[e]=s[e](t),{c(){n.c(),r=Object(c.v)()},l(t){n.l(t),r=Object(c.v)()},m(t,n){i[e].m(t,n),Object(c.D)(t,r,n),o=!0},p(t,o){let u=e;e=l(t),e===u?i[e].p(t,o):(Object(c.A)(),Object(c.U)(i[u],1,1,()=>{i[u]=null}),Object(c.h)(),n=i[e],n?n.p(t,o):(n=i[e]=s[e](t),n.c()),Object(c.T)(n,1),n.m(r.parentNode,r))},i(t){o||(Object(c.T)(n),o=!0)},o(t){Object(c.U)(n),o=!1},d(t){i[e].d(t),t&&Object(c.t)(r)}}}function A(t){let e,n;const r=[{segment:t[2][0]},t[3].props];let o={$$slots:{default:[U]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)o=Object(c.f)(o,r[t]);return e=new S({props:o}),{c(){Object(c.n)(e.$$.fragment)},l(t){Object(c.j)(e.$$.fragment,t)},m(t,r){Object(c.G)(e,t,r),n=!0},p(t,[n]){const o=12&n?Object(c.z)(r,[4&n&&{segment:t[2][0]},8&n&&Object(c.y)(t[3].props)]):{};147&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||(Object(c.T)(e.$$.fragment,t),n=!0)},o(t){Object(c.U)(e.$$.fragment,t),n=!1},d(t){Object(c.r)(e,t)}}}function D(t,e,n){let{stores:r}=e,{error:o}=e,{status:s}=e,{segments:l}=e,{level0:u}=e,{level1:a=null}=e,{notify:f}=e;return Object(c.d)(f),Object(c.M)(i,r),t.$$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,o=t.error),"status"in t&&n(1,s=t.status),"segments"in t&&n(2,l=t.segments),"level0"in t&&n(3,u=t.level0),"level1"in t&&n(4,a=t.level1),"notify"in t&&n(6,f=t.notify)},[o,s,l,u,a,r,f]}class N extends c.b{constructor(t){super(),Object(c.C)(this,t,D,A,c.L,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}var H=N;const I=[],M=[{js:()=>n.e(0).then(n.bind(null,6))}],G=[{pattern:/^\/$/,parts:[{i:0}]}];
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function B(t,e,n,r){return new(n||(n=Promise))((function(c,o){function s(t){try{l(r.next(t))}catch(t){o(t)}}function i(t){try{l(r.throw(t))}catch(t){o(t)}}function l(t){var e;t.done?c(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,i)}l((r=r.apply(t,e||[])).next())}))}function V(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}let J,K=1;const F="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},Y={};let Q,W;function X(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{const[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r}),e}function Z(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(Q))return null;let e=t.pathname.slice(Q.length);if(""===e&&(e="/"),!I.some(t=>t.test(e)))for(let n=0;n<G.length;n+=1){const r=G[n],c=r.pattern.exec(e);if(c){const n=X(t.search),o=r.parts[r.parts.length-1],s=o.params?o.params(c):{},i={host:location.host,path:e,query:n,params:s};return{href:t.href,route:r,match:c,page:i}}}}function tt(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=V(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const c=new URL(r);if(c.pathname===location.pathname&&c.search===location.search)return;const o=Z(c);if(o){rt(o,null,e.hasAttribute("sapper:noscroll"),c.hash),t.preventDefault(),F.pushState({id:J},"",c.href)}}function et(){return{x:pageXOffset,y:pageYOffset}}function nt(t){if(Y[J]=et(),t.state){const e=Z(new URL(location.href));e?rt(e,t.state.id):location.href=location.href}else K=K+1,function(t){J=t}(K),F.replaceState({id:J},"",location.href)}function rt(t,e,n,r){return B(this,void 0,void 0,(function*(){const c=!!e;if(c)J=e;else{const t=et();Y[J]=t,J=e=++K,Y[J]=n?t:{x:0,y:0}}if(yield W(t),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let t,n=Y[e];r&&(t=document.getElementById(r.slice(1)),t&&(n={x:0,y:t.getBoundingClientRect().top+scrollY})),Y[J]=n,c||t?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function ct(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}let ot,st=null;function it(t){const e=V(t.target);e&&"prefetch"===e.rel&&function(t){const e=Z(new URL(t,ct(document)));if(e)st&&t===st.href||(st={href:t,promise:xt(e)}),st.promise}(e.href)}function lt(t){clearTimeout(ot),ot=setTimeout(()=>{it(t)},20)}function ut(t,e={noscroll:!1,replaceState:!1}){const n=Z(new URL(t,ct(document)));return n?(F[e.replaceState?"replaceState":"pushState"]({id:J},"",t),rt(n,null,e.noscroll)):(location.href=t,new Promise(()=>{}))}const at="undefined"!=typeof __SAPPER__&&__SAPPER__;let ft,dt,bt,pt=!1,ht=[],mt="{}";const jt={page:function(t){const e=s(t);let n=!0;return{notify:function(){n=!0,e.update(t=>t)},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe(e=>{(void 0===r||n&&e!==r)&&t(r=e)})}}}({}),preloading:s(null),session:s(at&&at.session)};let Ot,$t,gt;function vt(t,e){const{error:n}=t;return Object.assign({error:n},e)}function yt(t){return B(this,void 0,void 0,(function*(){ft&&jt.preloading.set(!0);const e=(n=t,st&&st.href===n.href?st.promise:xt(n));var n;const r=dt={},c=yield e,{redirect:o}=c;if(r===dt)if(o)yield ut(o.location,{replaceState:!0});else{const{props:e,branch:n}=c;yield wt(n,e,vt(e,t.page))}}))}function wt(t,e,n){return B(this,void 0,void 0,(function*(){jt.page.set(n),jt.preloading.set(!1),ft?ft.$set(e):(e.stores={page:{subscribe:jt.page.subscribe},preloading:{subscribe:jt.preloading.subscribe},session:jt.session},e.level0={props:yield bt},e.notify=jt.page.notify,ft=new H({target:gt,props:e,hydrate:!0})),ht=t,mt=JSON.stringify(n.query),pt=!0,$t=!1}))}function xt(t){return B(this,void 0,void 0,(function*(){const{route:e,page:n}=t,c=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[c[0]]},i={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(o&&(o.statusCode!==t||o.location!==e))throw new Error("Conflicting redirects");o={statusCode:t,location:e}},error:(t,e)=>{s.error="string"==typeof e?new Error(e):e,s.status=t}};if(!bt){const t=r.preload||(()=>({}));bt=at.preloaded[0]||t.call(i,{host:n.host,path:n.path,query:n.query,params:{}},Ot)}let l,u=1;try{const r=JSON.stringify(n.query),o=e.pattern.exec(n.path);let a=!1;l=yield Promise.all(e.parts.map((e,l)=>B(this,void 0,void 0,(function*(){const f=c[l];if(function(t,e,n,r){if(r!==mt)return!0;const c=ht[t];return!!c&&(e!==c.segment||(!(!c.match||JSON.stringify(c.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0))}(l,f,o,r)&&(a=!0),s.segments[u]=c[l+1],!e)return{segment:f};const d=u++;if(!$t&&!a&&ht[l]&&ht[l].part===e.i)return ht[l];a=!1;const{default:b,preload:p}=yield M[e.i].js();let h;return h=pt||!at.preloaded[l+1]?p?yield p.call(i,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Ot):{}:at.preloaded[l+1],s["level"+d]={component:b,props:h,segment:f,match:o,part:e.i}}))))}catch(t){s.error=t,s.status=500,l=[]}return{redirect:o,props:s,branch:l}}))}jt.session.subscribe(t=>B(void 0,void 0,void 0,(function*(){if(Ot=t,!pt)return;$t=!0;const e=Z(new URL(location.href)),n=dt={},{redirect:r,props:c,branch:o}=yield xt(e);n===dt&&(r?yield ut(r.location,{replaceState:!0}):yield wt(o,c,vt(c,e.page)))})));var kt,_t,Et;kt={target:document.querySelector("#sapper")},_t=kt.target,gt=_t,Et=at.baseUrl,Q=Et,W=yt,"scrollRestoration"in F&&(F.scrollRestoration="manual"),addEventListener("beforeunload",()=>{F.scrollRestoration="auto"}),addEventListener("load",()=>{F.scrollRestoration="manual"}),addEventListener("click",tt),addEventListener("popstate",nt),addEventListener("touchstart",it),addEventListener("mousemove",lt),at.error?Promise.resolve().then(()=>function(){const{host:t,pathname:e,search:n}=location,{session:r,preloaded:c,status:o,error:s}=at;bt||(bt=c&&c[0]);const i={error:s,status:o,session:r,level0:{props:bt},level1:{props:{status:o,error:s},component:P},segments:c},l=X(n);wt([],i,{host:t,path:e,query:l,params:{},error:s})}()):Promise.resolve().then(()=>{const{hash:t,href:e}=location;F.replaceState({id:K},"",e);const n=Z(new URL(location.href));if(n)return rt(n,K,!0,t)})}]);