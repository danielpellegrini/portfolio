(function(e){function t(t){for(var o,s,i=t[0],c=t[1],l=t[2],m=0,d=[];m<i.length;m++)s=i[m],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&d.push(a[s][0]),a[s]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);u&&u(t);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(o=!1)}o&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},a={app:0},r=[];function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/portfolio/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Home")],1)},r=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main-container"},[n("Welcome"),n("nav",{staticClass:"layover",attrs:{id:"navbar"}},[n("b-nav",{attrs:{align:"center"}},[n("b-nav-item",{on:{click:e.viewWelcome}},[e._v("Home")]),e._l(e.navlinks,(function(t,o){return n("b-nav-item",{key:t,class:e.activeIndex(o),on:{click:function(t){return e.goToIndex(o)}}},[e._v(" "+e._s(t)+" ")])}))],2)],1),n("carousel-3d",{ref:"mycarousel",staticClass:"d-none",attrs:{id:"carousel",width:500,height:750},on:{"after-slide-change":e.goToIndex}},[n("slide",{attrs:{index:0}},[n("About")],1),n("slide",{attrs:{index:1}},[n("Projects")],1),n("slide",{attrs:{index:2}},[n("Contacts")],1)],1)],1)},i=[],c=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},l=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"holoContainerLayover"}),n("div",{staticClass:"holoContainer"},[n("div",{staticClass:"holo-top"},[n("h2",{staticClass:"text-center"},[e._v("About")])]),n("main",[n("section",[n("p",[e._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odit accusantium id nisi deserunt ex porro itaque. Suscipit eos doloremque minima, repudiandae dolorum autem nobis, modi enim ex, maxime cumque!")])])])])])}],u=n("2877"),m={},d=Object(u["a"])(m,c,l,!1,null,null,null),h=d.exports,f=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},v=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"holoContainerLayover"}),n("div",{staticClass:"holoContainer"},[n("div",{staticClass:"holo-top"},[n("h2",{staticClass:"text-center"},[e._v("Projects")])])])])}],p={},g=Object(u["a"])(p,f,v,!1,null,null,null),b=g.exports,y=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},_=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"holoContainerLayover"}),n("div",{staticClass:"holoContainer"},[n("div",{staticClass:"holo-top"},[n("h2",{staticClass:"text-center"},[e._v("Contacts")])])])])}],x={},w=Object(u["a"])(x,y,_,!1,null,null,null),C=w.exports,E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"welcomeComponent"}},[n("div",{attrs:{id:"welcome-container-top"}},[n("div",{staticClass:"more-container",attrs:{id:"more-container"},on:{click:e.hideWelcome}},[e._m(0)]),e._m(1)]),e._m(2),e._m(3)])},M=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"swipe-up-container"}},[n("i",{staticClass:"fas fa-angle-up justify-content-center d-flex slide-out-blurred-top"}),n("i",{staticClass:"fas fa-angle-up justify-content-center d-flex slide-out-blurred-top2"}),n("i",{staticClass:"fas fa-angle-up justify-content-center d-flex slide-out-blurred-top-last"}),n("h6",[e._v("More")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"welcome-content-top"},[n("div",{staticClass:"welcome"},[n("span",{staticClass:"text1"})]),n("div",{staticClass:"welcome"},[n("span",{staticClass:"text2"})])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"loader"}},[n("div",{staticClass:"outer"},[n("div",{staticClass:"inner"})]),n("h2",[e._v("LOADING...")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"welcome-container-bottom"}},[n("div",{staticClass:"welcome-content-bottom"},[n("div",{staticClass:"welcome"},[n("span",{staticClass:"text3"})])])])}],I=n("d4ec"),j=n("bee2"),T=(n("d3b7"),{methods:{hideWelcome:function(){document.getElementById("welcome-container-top").className="slide-out-top",document.getElementById("welcome-container-bottom").className="slide-out-bottom",document.getElementById("carousel").className="hundred carousel-3d-container",document.getElementById("welcomeComponent").className="hide-welcome",document.getElementById("navbar").className="d-block",document.getElementById("navbar").className="layover",document.getElementsByTagName("UL")[0].className="nav justify-content-center",document.getElementById("more-container").className="hidden"},hideMore:function(){document.getElementById("more-container").className="hidden"},viewMore:function(){document.getElementById("more-container").className="more-container"}},mounted:function(){var e=this;this.hideMore(),setTimeout((function(){return e.viewMore()}),7e3);var t=function(){function e(t){Object(I["a"])(this,e),this.el=t,this.chars="!<>-_\\/[]{}—=+*^?#__",this.update=this.update.bind(this)}return Object(j["a"])(e,[{key:"setText",value:function(e){var t=this,n=this.el.innerText,o=Math.max(n.length,e.length),a=new Promise((function(e){return t.resolve=e}));this.queue=[];for(var r=0;r<o;r++){var s=n[r]||"",i=e[r]||"",c=Math.floor(50*Math.random()),l=c+Math.floor(50*Math.random());this.queue.push({from:s,to:i,start:c,end:l})}return cancelAnimationFrame(this.frameRequest),this.frame=0,this.update(),a}},{key:"setText1",value:function(e){var t=this,n=this.el.innerText,o=Math.max(n.length,e.length),a=new Promise((function(e){return t.resolve=e}));this.queue=[];for(var r=0;r<o;r++){var s=n[r]||"",i=e[r]||"",c=Math.floor(50*Math.random()),l=c+Math.floor(50*Math.random());this.queue.push({from:s,to:i,start:c,end:l})}return cancelAnimationFrame(this.frameRequest),this.frame=0,this.update(),a}},{key:"setText2",value:function(e){var t=this,n=this.el.innerText,o=Math.max(n.length,e.length),a=new Promise((function(e){return t.resolve=e}));this.queue=[];for(var r=0;r<o;r++){var s=n[r]||"",i=e[r]||"",c=Math.floor(50*Math.random()),l=c+Math.floor(50*Math.random());this.queue.push({from:s,to:i,start:c,end:l})}return cancelAnimationFrame(this.frameRequest),this.frame=0,this.update(),a}},{key:"update",value:function(){for(var e="",t=0,n=0,o=this.queue.length;n<o;n++){var a=this.queue[n],r=a.from,s=a.to,i=a.start,c=a.end,l=a.char;this.frame>=c?e+=s:this.frame>=i?((!l||Math.random()<1)&&(l=this.randomChar(),this.queue[n].char=l),e+='<span class="dud">'.concat(l,"</span>")):e+=r}this.el.innerHTML=e,t===this.queue.length?this.resolve():(this.frameRequest=requestAnimationFrame(this.update),this.frame++)}},{key:"randomChar",value:function(){return this.chars[Math.floor(Math.random()*this.chars.length)]}}]),e}(),n=["Hi,"],o=["I am <span>Daniel Pellegrini</span>"],a=["and I am a <span>Full Stack Web Dev</span>"],r=document.querySelector(".text1"),s=document.querySelector(".text2"),i=document.querySelector(".text3"),c=new t(r),l=new t(s),u=new t(i),m=0,d=function e(){c.setText(n[m]).then((function(){e()})),m=(m+1)%n.length},h=function e(){l.setText1(o[m]).then((function(){e()})),m=(m+1)%o.length},f=function e(){u.setText2(a[0]).then((function(){e()})),m=(m+1)%a.length};setTimeout((function(){return d()}),1800),setTimeout((function(){return h()}),3e3),setTimeout((function(){return f()}),5e3)}}),q=T,N=Object(u["a"])(q,E,M,!1,null,null,null),O=N.exports,k={data:function(){return{navlinks:["About","Projects","Contacts"],linksIndex:0,active:!0}},name:"Home",components:{About:h,Projects:b,Contacts:C,Welcome:O},methods:{goToIndex:function(e){this.$refs.mycarousel.goSlide(e),this.linksIndex=e},activeIndex:function(e){return e!==this.linksIndex?"":"highlight"},viewWelcome:function(){var e=this;document.getElementById("carousel").className="carousel-3d-container zero",document.getElementById("welcome-container-top").className="slide-in-top",document.getElementById("welcome-container-bottom").className="slide-in-bottom",document.getElementById("welcomeComponent").className="view-welcome",document.getElementsByTagName("UL")[0].className="d-none",setTimeout((function(){return e.viewMore()}),1500)},viewMore:function(){document.getElementById("more-container").className="more-container",document.getElementById("welcome-container-top").className=" ",document.getElementById("welcome-container-bottom").className=" "}}},B=k,P=Object(u["a"])(B,s,i,!1,null,null,null),$=P.exports,S={name:"App",components:{Home:$}},A=S,L=(n("5c0b"),Object(u["a"])(A,a,r,!1,null,null,null)),W=L.exports,H=n("5f5b"),F=n("b1e0"),R=n("2af0"),D=n.n(R);n("f9e3"),n("2dd8");o["default"].use(H["a"]),o["default"].use(F["a"]),o["default"].use(D.a),o["default"].config.productionTip=!1,new o["default"]({render:function(e){return e(W)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"9c0c":function(e,t,n){}});
//# sourceMappingURL=app.778a8166.js.map