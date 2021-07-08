(function(t){function e(e){for(var n,i,r=e[0],c=e[1],l=e[2],m=0,u=[];m<r.length;m++)i=r[m],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&u.push(s[i][0]),s[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(u.length)u.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,r=1;r<a.length;r++){var c=a[r];0!==s[c]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},s={app:0},o=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/portfolio/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var d=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"517b":function(t,e,a){t.exports=a.p+"img/fable.53259eea.jpg"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Home")],1)},o=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-container"},[a("Welcome"),a("nav",{staticClass:"layover",attrs:{id:"navbar"}},[a("b-nav",{attrs:{align:"center"}},[a("b-nav-item",{on:{click:t.viewWelcome}},[t._v("Home")]),t._l(t.navlinks,(function(e,n){return a("b-nav-item",{key:e,class:t.activeIndex(n),on:{click:function(e){return t.goToIndex(n)}}},[t._v(" "+t._s(e)+" ")])}))],2)],1),a("carousel-3d",{ref:"mycarousel",staticClass:"d-none",attrs:{id:"carousel",count:t.navlinks.length,space:500,width:1900,height:2800},on:{"after-slide-change":t.goToIndex}},[a("slide",{attrs:{index:0}},[a("About")],1),a("slide",{attrs:{index:1}},[a("Projects")],1),a("slide",{attrs:{index:2}},[a("Contacts")],1)],1)],1)},r=[],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"holoContainerLayover",attrs:{id:"expandAboutLayover"}}),a("div",{staticClass:"holoContainer",attrs:{id:"expandAboutContainer"}},[t._m(0),t._m(1),a("i",{staticClass:"fas fa-expand-arrows-alt",attrs:{id:"expandAbout"},on:{click:function(e){return t.expandAbout()}}}),a("i",{attrs:{id:"compressAbout"},on:{click:function(e){return t.compressAbout()}}})])])},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"holo-top"},[a("h2",{staticClass:"text-center"},[t._v("About")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{attrs:{id:"about"}},[a("div",{staticClass:"label-wrap"}),a("p",{attrs:{id:"paragraph"}})])}],d=(a("a15b"),a("ac1f"),a("1276"),{mounted:function(){var t='My name is Daniel Pellegrini*In 2020, after 16 years of totally different fields jobs, I decided to change my career* I wanted to learn about what I was really interested in and what I enjoyed doing in my free time and so I began putting serious effort into creating websites* In October 2020, I quit my job and I attended a Full Stack Web Developer course in Boolean Careers*We started with <span class="fab fa-html5"></span> and <span class="fab fa-css3-alt"></span> with <span class="fab fa-sass"></span> as prepocessor and <span class="fab fa-bootstrap"></span> as framework*After several exercises we turned to <span class="fab fa-js-square"></span> and we started to build more dynamic pages with <span class="fab fa-vuejs"></span> framework\'s help*Then we went deeper into programming, so we started learning <span class="fab fa-php"></span> with its framework <span class="fab fa-laravel"></span> and databases management with <span id="fa-mysql"></span>*At the end of the course we had an exam and I developed, with a team of 5 course mates, a complex web app, including Backend (Authentication, integration of a payment service with Braintree APIs and management of charts with Chart-Js) and Frontend with responsive interface*<span class="fas fa-caret-right"> <b></span> Final project GitHub repo link <a href="https://github.com/danielpellegrini/Bdoctors.git" target="blank">here</a></b> <span class="fas fa-caret-left"></span>',e=t.split("*").join(". <br/>");document.getElementById("paragraph").innerHTML=e;var a=document.createElement("img");a.setAttribute("src","https://cdn.iconscout.com/icon/free/png-512/mysql-19-1174939.png"),document.getElementById("fa-mysql").appendChild(a),console.log(e)},methods:{expandAbout:function(){document.getElementById("expandAboutLayover").className="max-width holoContainerLayover",document.getElementById("expandAboutContainer").className="max-width holoContainer",document.getElementById("compressAbout").className="fas fa-compress-arrows-alt",document.getElementById("about").className="increase-about",document.getElementById("expandAbout").className=" ",document.getElementsByTagName("UL")[0].className="hidden nav justify-content-center",this.$parent.$parent.animationSpeed=1e9},compressAbout:function(){document.getElementById("expandAboutLayover").className="holoContainerLayover",document.getElementById("expandAboutContainer").className="holoContainer",document.getElementById("expandAbout").className="fas fa-expand-arrows-alt",document.getElementById("about").className=" ",document.getElementById("compressAbout").className=" ",document.getElementsByTagName("UL")[0].className="visible nav justify-content-center",this.$parent.$parent.animationSpeed=500}}}),m=d,u=a("2877"),p=Object(u["a"])(m,c,l,!1,null,null,null),f=p.exports,h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"holoContainerLayover",attrs:{id:"expandProjectsLayover"}}),a("div",{staticClass:"holoContainer",attrs:{id:"expandProjectsContainer"}},[t._m(0),t._m(1),a("i",{staticClass:"fas fa-expand-arrows-alt",attrs:{id:"expandProjects"},on:{click:function(e){return t.expandProjects()}}}),a("i",{attrs:{id:"compressProjects"},on:{click:function(e){return t.compressProjects()}}})])])},v=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"holo-top"},[a("h2",{staticClass:"text-center"},[t._v("Projects")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("div",{attrs:{id:"projects"}},[n("div",{staticClass:"row-container first-row"},[n("div",{staticClass:"card column-3-with-offset column-3-with-offset"},[n("a",{attrs:{href:"https://danielpellegrini.github.io/js-html-css-boolzap/",target:"blank"}},[n("img",{staticClass:"card-img-top",attrs:{src:a("c067"),alt:"whatsapp image"}})]),n("div",{staticClass:"card-body"},[n("div",[n("h5",{staticClass:"card-title"},[t._v("WhatsApp Web (clone)")]),n("p",{staticClass:"card-text"},[t._v("Technologies used:")]),n("p",{staticClass:"card-text"},[t._v("- HTML5")]),n("p",{staticClass:"card-text"},[t._v("- CSS")]),n("p",{staticClass:"card-text"},[t._v("- Javascript (VueJs).")])]),n("div",[n("a",{staticClass:"btn",attrs:{href:"https://danielpellegrini.github.io/js-html-css-boolzap/",target:"blank"}},[t._v("View")])])])]),n("div",{staticClass:"card column-3-with-offset"},[n("a",{attrs:{href:"https://danielpellegrini.github.io/vue-boolflix/",target:"blank"}},[n("img",{staticClass:"card-img-top",attrs:{src:a("a971"),alt:"netflix image"}})]),n("div",{staticClass:"card-body"},[n("div",[n("h5",{staticClass:"card-title"},[t._v("Netflix (clone)")]),n("p",{staticClass:"card-text"},[t._v("Technologies used:")]),n("p",{staticClass:"card-text"},[t._v("- HTML5")]),n("p",{staticClass:"card-text"},[t._v("- CSS")]),n("p",{staticClass:"card-text"},[t._v("- Javascript (VueJs)")]),n("p",{staticClass:"card-text"},[t._v("- API call to TMDB")])]),n("div",[n("a",{staticClass:"btn",attrs:{href:"https://danielpellegrini.github.io/vue-boolflix/",target:"blank"}},[t._v("View")])])])]),n("div",{staticClass:"card column-3-with-offset"},[n("a",{attrs:{href:"https://danielpellegrini.github.io/html-css-spotifyweb/",target:"blank"}},[n("img",{staticClass:"card-img-top",attrs:{src:a("5d7e"),alt:"spotify image"}})]),n("div",{staticClass:"card-body"},[n("div",[n("h5",{staticClass:"card-title"},[t._v("Spotify Web (clone)")]),n("p",{staticClass:"card-text"},[t._v("Technologies used:")]),n("p",{staticClass:"card-text"},[t._v("- HTML5")]),n("p",{staticClass:"card-text"},[t._v("- CSS")])]),n("div",[n("a",{staticClass:"btn",attrs:{href:"https://danielpellegrini.github.io/html-css-spotifyweb/",target:"blank"}},[t._v("View")])])])]),n("div",{staticClass:"row-container second-row"},[n("div",{staticClass:"card column-3-with-offset"},[n("a",{attrs:{href:"https://fable-kindergarten.herokuapp.com/",target:"blank"}},[n("img",{staticClass:"card-img-top",attrs:{src:a("517b"),alt:"spotify image"}})]),n("div",{staticClass:"card-body"},[n("div",[n("h5",{staticClass:"card-title"},[t._v("Fable Kindergarten")]),n("p",{staticClass:"card-text"},[t._v("Technologies used:")]),n("p",{staticClass:"card-text"},[t._v("- PHP")]),n("p",{staticClass:"card-text"},[t._v("- HTML5")]),n("p",{staticClass:"card-text"},[t._v("- CSS")])]),n("div",[n("a",{staticClass:"btn",attrs:{href:"https://fable-kindergarten.herokuapp.com/",target:"blank"}},[t._v("View")])])])]),n("div",{staticClass:"card column-3-with-offset"},[n("a",{attrs:{href:"https://danielpellegrini.github.io/html-css-digitalocean/",target:"blank"}},[n("img",{staticClass:"card-img-top",attrs:{src:a("a8e7"),alt:"spotify image"}})]),n("div",{staticClass:"card-body"},[n("div",[n("h5",{staticClass:"card-title"},[t._v("Digital Ocean (clone)")]),n("p",{staticClass:"card-text"},[t._v("Technologies used:")]),n("p",{staticClass:"card-text"},[t._v("- HTML5")]),n("p",{staticClass:"card-text"},[t._v("- CSS")])]),n("div",[n("a",{staticClass:"btn",attrs:{href:"https://danielpellegrini.github.io/html-css-digitalocean/",target:"blank"}},[t._v("View")])])])])])])])])}],g={methods:{expandProjects:function(){document.getElementById("expandProjectsLayover").className="max-width holoContainerLayover",document.getElementById("expandProjectsContainer").className="max-width holoContainer",document.getElementById("projects").className="increase-projects",document.getElementById("compressProjects").className="fas fa-compress-arrows-alt",document.getElementById("expandProjects").className=" ",document.getElementsByTagName("UL")[0].className="hidden nav justify-content-center",this.$parent.$parent.animationSpeed=1e9},compressProjects:function(){document.getElementById("expandProjectsLayover").className="holoContainerLayover",document.getElementById("expandProjectsContainer").className="holoContainer",document.getElementById("projects").className=" ",document.getElementById("expandProjects").className="fas fa-expand-arrows-alt",document.getElementById("compressProjects").className=" ",document.getElementsByTagName("UL")[0].className="visible nav justify-content-center",this.$parent.$parent.animationSpeed=500}}},b=g,C=Object(u["a"])(b,h,v,!1,null,null,null),y=C.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"holoContainerLayover",attrs:{id:"expandContactsLayover"}}),a("div",{staticClass:"holoContainer",attrs:{id:"expandContactsContainer"}},[t._m(0),a("main",{attrs:{id:"contacts"}}),a("i",{staticClass:"fas fa-expand-arrows-alt",attrs:{id:"expandContacts"},on:{click:function(e){return t.expandContacts()}}}),a("i",{attrs:{id:"compressContacts"},on:{click:function(e){return t.compressContacts()}}})])])},w=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"holo-top"},[a("h2",{staticClass:"text-center"},[t._v("Contacts")])])}],_={methods:{expandContacts:function(){document.getElementById("expandContactsLayover").className="max-width holoContainerLayover",document.getElementById("expandContactsContainer").className="max-width holoContainer",document.getElementById("compressContacts").className="fas fa-compress-arrows-alt",document.getElementById("expandContacts").className=" ",document.getElementsByTagName("UL")[0].className="hidden nav justify-content-center",this.$parent.$parent.animationSpeed=1e9},compressContacts:function(){document.getElementById("expandContactsLayover").className="holoContainerLayover",document.getElementById("expandContactsContainer").className="holoContainer",document.getElementById("expandContacts").className="fas fa-expand-arrows-alt",document.getElementById("compressContacts").className=" ",document.getElementsByTagName("UL")[0].className="visible nav justify-content-center",this.$parent.$parent.animationSpeed=500}}},E=_,I=Object(u["a"])(E,x,w,!1,null,null,null),j=I.exports,N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"welcomeComponent"}},[a("div",{attrs:{id:"welcome-container-top"}},[a("div",{staticClass:"more-container",attrs:{id:"more-container"},on:{click:t.hideWelcome}},[t._m(0)]),t._m(1)]),t._m(2),t._m(3)])},B=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"swipe-up-container"}},[a("i",{staticClass:"fas fa-angle-up justify-content-center d-flex slide-out-blurred-top"}),a("i",{staticClass:"fas fa-angle-up justify-content-center d-flex slide-out-blurred-top2"}),a("i",{staticClass:"fas fa-angle-up justify-content-center d-flex slide-out-blurred-top-last"}),a("h6",[t._v("More")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"welcome-content-top"},[a("div",{staticClass:"welcome"},[a("span",{staticClass:"text1"})]),a("div",{staticClass:"welcome"},[a("span",{staticClass:"text2"})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"loader"}},[a("div",{staticClass:"outer"},[a("div",{staticClass:"inner"})]),a("h2",[t._v("LOADING...")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"welcome-container-bottom"}},[a("div",{staticClass:"welcome-content-bottom"},[a("div",{staticClass:"welcome"},[a("span",{staticClass:"text3"})])])])}],k=a("d4ec"),T=a("bee2"),M=(a("d3b7"),{methods:{hideWelcome:function(){document.getElementById("welcome-container-top").className="slide-out-top",document.getElementById("welcome-container-bottom").className="slide-out-bottom",document.getElementById("carousel").className="hundred carousel-3d-container",document.getElementById("welcomeComponent").className="hide-welcome",document.getElementById("navbar").className="d-block",document.getElementById("navbar").className="layover",document.getElementsByTagName("UL")[0].className="nav justify-content-center",document.getElementById("more-container").className="hidden"},hideMore:function(){document.getElementById("more-container").className="hidden"},viewMore:function(){document.getElementById("more-container").className="more-container"}},mounted:function(){var t=this;this.hideMore(),setTimeout((function(){return t.viewMore()}),7e3);var e=function(){function t(e){Object(k["a"])(this,t),this.el=e,this.chars="!<>-_\\/[]{}—=+*^?#__",this.update=this.update.bind(this)}return Object(T["a"])(t,[{key:"setText",value:function(t){var e=this,a=this.el.innerText,n=Math.max(a.length,t.length),s=new Promise((function(t){return e.resolve=t}));this.queue=[];for(var o=0;o<n;o++){var i=a[o]||"",r=t[o]||"",c=Math.floor(50*Math.random()),l=c+Math.floor(50*Math.random());this.queue.push({from:i,to:r,start:c,end:l})}return cancelAnimationFrame(this.frameRequest),this.frame=0,this.update(),s}},{key:"setText1",value:function(t){var e=this,a=this.el.innerText,n=Math.max(a.length,t.length),s=new Promise((function(t){return e.resolve=t}));this.queue=[];for(var o=0;o<n;o++){var i=a[o]||"",r=t[o]||"",c=Math.floor(50*Math.random()),l=c+Math.floor(50*Math.random());this.queue.push({from:i,to:r,start:c,end:l})}return cancelAnimationFrame(this.frameRequest),this.frame=0,this.update(),s}},{key:"setText2",value:function(t){var e=this,a=this.el.innerText,n=Math.max(a.length,t.length),s=new Promise((function(t){return e.resolve=t}));this.queue=[];for(var o=0;o<n;o++){var i=a[o]||"",r=t[o]||"",c=Math.floor(50*Math.random()),l=c+Math.floor(50*Math.random());this.queue.push({from:i,to:r,start:c,end:l})}return cancelAnimationFrame(this.frameRequest),this.frame=0,this.update(),s}},{key:"update",value:function(){for(var t="",e=0,a=0,n=this.queue.length;a<n;a++){var s=this.queue[a],o=s.from,i=s.to,r=s.start,c=s.end,l=s.char;this.frame>=c?t+=i:this.frame>=r?((!l||Math.random()<1)&&(l=this.randomChar(),this.queue[a].char=l),t+='<span class="dud">'.concat(l,"</span>")):t+=o}this.el.innerHTML=t,e===this.queue.length?this.resolve():(this.frameRequest=requestAnimationFrame(this.update),this.frame++)}},{key:"randomChar",value:function(){return this.chars[Math.floor(Math.random()*this.chars.length)]}}]),t}(),a=["Hi,"],n=["I am <span>Daniel Pellegrini</span>"],s=["and I am a <span>Full Stack Web Dev</span>"],o=document.querySelector(".text1"),i=document.querySelector(".text2"),r=document.querySelector(".text3"),c=new e(o),l=new e(i),d=new e(r),m=0,u=function t(){c.setText(a[m]).then((function(){t()})),m=(m+1)%a.length},p=function t(){l.setText1(n[m]).then((function(){t()})),m=(m+1)%n.length},f=function t(){d.setText2(s[0]).then((function(){t()})),m=(m+1)%s.length};setTimeout((function(){return u()}),2e3),setTimeout((function(){return p()}),3800),setTimeout((function(){return f()}),5800)}}),P=M,A=Object(u["a"])(P,N,B,!1,null,null,null),L=A.exports,S=a("2af0"),$=a.n(S),q={data:function(){return{navlinks:["About","Projects","Contacts"],linksIndex:0,active:!0,isActive:!1}},name:"Home",components:{About:f,Projects:y,Contacts:j,Welcome:L,Carousel3d:S["Carousel3d"],Slide:S["Slide"]},methods:{goToIndex:function(t){this.$refs.mycarousel.goSlide(t),this.linksIndex=t},activeIndex:function(t){return t!==this.linksIndex?"":"highlight"},viewWelcome:function(){var t=this;document.getElementById("carousel").className="carousel-3d-container zero",document.getElementById("welcome-container-top").className="slide-in-top",document.getElementById("welcome-container-bottom").className="slide-in-bottom",document.getElementById("welcomeComponent").className="view-welcome",document.getElementsByTagName("UL")[0].className="d-none",setTimeout((function(){return t.viewMore()}),2e3)},viewMore:function(){document.getElementById("more-container").className="more-container",document.getElementById("welcome-container-top").className=" ",document.getElementById("welcome-container-bottom").className=" "}}},O=q,H=Object(u["a"])(O,i,r,!1,null,null,null),W=H.exports,F={name:"App",components:{Home:W}},U=F,D=(a("5c0b"),Object(u["a"])(U,s,o,!1,null,null,null)),J=D.exports,V=a("5f5b"),R=a("b1e0");a("f9e3"),a("2dd8");n["default"].use(V["a"]),n["default"].use(R["a"]),n["default"].use($.a),n["default"].config.productionTip=!1,new n["default"]({render:function(t){return t(J)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";a("9c0c")},"5d7e":function(t,e,a){t.exports=a.p+"img/spotify.edb78492.jpg"},"9c0c":function(t,e,a){},a8e7:function(t,e,a){t.exports=a.p+"img/digitalocean.8c6b9228.jpg"},a971:function(t,e,a){t.exports=a.p+"img/netflix.4386ad82.jpg"},c067:function(t,e,a){t.exports=a.p+"img/whatsappweb.8da889e2.jpg"}});
//# sourceMappingURL=app.520f80e8.js.map