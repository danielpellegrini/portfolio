if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise((async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},r=(r,s)=>{Promise.all(r.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(r)};self.define=(r,c,i)=>{s[r]||(s[r]=Promise.resolve().then((()=>{let s={};const n={uri:location.origin+r.slice(1)};return Promise.all(c.map((r=>{switch(r){case"exports":return s;case"module":return n;default:return e(r)}}))).then((e=>{const r=i(...e);return s.default||(s.default=r),s}))})))}}define("./sw.js",["./workbox-a9938592"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"app.css",revision:"68b329da9893e34099c7d8ad5cb9c940"},{url:"css/app.9cb8e0d7.css",revision:"6c645a8c59d5ed23758d4603d2c5de34"},{url:"css/chunk-vendors.f4fc0aef.css",revision:"c2469a52c1ebb85223145a039f853c8b"},{url:"favicon.ico",revision:"1ba2ae710d927f13d483fd5d1e548c9b"},{url:"index.html",revision:"ceb6fb8ba0095385e3ceb346ea0cde9f"},{url:"js/app.eb174ffe.js",revision:"71b228fd4e12aea9d71e85288bf38efc"},{url:"js/chunk-vendors.e5f077e4.js",revision:"50e54d06b7a139eff78803fd8cf680b2"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
