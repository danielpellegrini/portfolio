(function(t){function e(e){for(var s,o,r=e[0],c=e[1],l=e[2],u=0,m=[];u<r.length;u++)o=r[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&m.push(n[o][0]),n[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);d&&d(e);while(m.length)m.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,r=1;r<a.length;r++){var c=a[r];0!==n[c]&&(s=!1)}s&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},n={app:0},i=[];function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/portfolio/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var d=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"517b":function(t,e,a){t.exports=a.p+"img/fable.53259eea.jpg"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Home")],1)},i=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-container"},[a("Welcome"),a("nav",{staticClass:"layover",attrs:{id:"navbar"}},[a("b-nav",{attrs:{align:"center"}},[a("b-nav-item",{on:{click:t.viewWelcome}},[t._v("Home")]),t._l(t.navlinks,(function(e,s){return a("b-nav-item",{key:e,class:t.activeIndex(s),on:{click:function(e){return t.goToIndex(s)}}},[t._v(" "+t._s(e)+" ")])}))],2)],1),a("carousel-3d",{ref:"mycarousel",staticClass:"d-none",attrs:{id:"carousel",count:t.navlinks.length,space:500,width:1900,height:2800},on:{"after-slide-change":t.goToIndex}},[a("slide",{attrs:{index:0}},[a("About")],1),a("slide",{attrs:{index:1}},[a("Projects")],1),a("slide",{attrs:{index:2}},[a("Contacts")],1)],1)],1)},r=[],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"holoContainerLayover",attrs:{id:"expandAboutLayover"}}),a("div",{staticClass:"holoContainer",attrs:{id:"expandAboutContainer"}},[t._m(0),t._m(1),a("i",{staticClass:"fas fa-expand-arrows-alt",attrs:{id:"expandAbout"},on:{click:function(e){return t.expandAbout()}}}),a("i",{attrs:{id:"compressAbout"},on:{click:function(e){return t.compressAbout()}}})])])},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"holo-top"},[a("h2",{staticClass:"text-center"},[t._v("About")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{attrs:{id:"about"}},[a("div",{staticClass:"label-wrap"}),a("p",{attrs:{id:"paragraph"}})])}],d=(a("a15b"),a("ac1f"),a("1276"),{mounted:function(){var t='My name is Daniel Pellegrini*In 2020, after 16 years of totally different fields jobs, I decided to change my career* I wanted to learn about what I was really interested in and what I enjoyed doing in my free time and so I began putting serious effort into creating websites* In October 2020, I quit my job and I attended a Full Stack Web Developer course in Boolean Careers*We started with <span class="fab fa-html5"></span> and <span class="fab fa-css3-alt"></span> with <span class="fab fa-sass"></span> as prepocessor and <span class="fab fa-bootstrap"></span> as framework*After several exercises we turned to <span class="fab fa-js-square"></span> and we started to build more dynamic pages with <span class="fab fa-vuejs"></span> framework\'s help*Then we went deeper into programming, so we started learning <span class="fab fa-php"></span> with its framework <span class="fab fa-laravel"></span> and databases management with <span id="fa-mysql"></span>*At the end of the course we had an exam and I developed, with a team of 5 course mates, a complex web app, including Backend (Authentication, integration of a payment service with Braintree APIs and management of charts with Chart-Js) and Frontend with responsive interface*<span class="fas fa-caret-right"> <b></span> Final project GitHub repo link <a href="https://github.com/danielpellegrini/Bdoctors.git" target="blank">here</a></b> <span class="fas fa-caret-left"></span>',e=t.split("*").join(". <br/>");document.getElementById("paragraph").innerHTML=e;var a=document.createElement("img");a.setAttribute("src","https://cdn.iconscout.com/icon/free/png-512/mysql-19-1174939.png"),document.getElementById("fa-mysql").appendChild(a),console.log(e)},methods:{expandAbout:function(){document.getElementById("expandAboutLayover").className="max-width holoContainerLayover",document.getElementById("expandAboutContainer").className="max-width holoContainer",document.getElementById("compressAbout").className="fas fa-compress-arrows-alt",document.getElementById("about").className="increase-about",document.getElementById("expandAbout").className=" ",document.getElementsByTagName("UL")[0].className="hidden nav justify-content-center",this.$parent.$parent.animationSpeed=1e9},compressAbout:function(){document.getElementById("expandAboutLayover").className="holoContainerLayover",document.getElementById("expandAboutContainer").className="holoContainer",document.getElementById("expandAbout").className="fas fa-expand-arrows-alt",document.getElementById("about").className=" ",document.getElementById("compressAbout").className=" ",document.getElementsByTagName("UL")[0].className="visible nav justify-content-center",this.$parent.$parent.animationSpeed=500}}}),u=d,m=a("2877"),f=Object(m["a"])(u,c,l,!1,null,null,null),p=f.exports,h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"holoContainerLayover",attrs:{id:"expandProjectsLayover"}}),a("div",{staticClass:"holoContainer",attrs:{id:"expandProjectsContainer"}},[t._m(0),t._m(1),a("i",{staticClass:"fas fa-expand-arrows-alt",attrs:{id:"expandProjects"},on:{click:function(e){return t.expandProjects()}}}),a("i",{attrs:{id:"compressProjects"},on:{click:function(e){return t.compressProjects()}}})])])},v=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"holo-top"},[a("h2",{staticClass:"text-center"},[t._v("Projects")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",[s("div",{attrs:{id:"projects"}},[s("div",{staticClass:"row-container first-row"},[s("div",{staticClass:"card column-3-with-offset column-3-with-offset"},[s("a",{attrs:{href:"https://danielpellegrini.github.io/js-html-css-boolzap/",target:"blank"}},[s("img",{staticClass:"card-img-top",attrs:{src:a("c067"),alt:"whatsapp image"}})]),s("div",{staticClass:"card-body"},[s("div",[s("h5",{staticClass:"card-title"},[t._v("WhatsApp Web (clone)")]),s("h6",{staticClass:"card-text"},[t._v("Technologies used:")]),s("p",{staticClass:"card-text"},[s("span",{staticClass:"fab fa-html5"})]),s("p",{staticClass:"card-text"},[s("span",{staticClass:"fab fa-css3-alt"})]),s("p",{staticClass:"card-text"},[s("span",{staticClass:"fab fa-js-square"},[t._v(" / "),s("span",{staticClass:"fab fa-vuejs"})])])]),s("div",[s("a",{staticClass:"btn",attrs:{href:"https://danielpellegrini.github.io/js-html-css-boolzap/",target:"blank"}},[t._v("View")])])])]),s("div",{staticClass:"card column-3-with-offset"},[s("a",{attrs:{href:"https://danielpellegrini.github.io/vue-boolflix/",target:"blank"}},[s("img",{staticClass:"card-img-top",attrs:{src:a("a971"),alt:"netflix image"}})]),s("div",{staticClass:"card-body"},[s("div",[s("h5",{staticClass:"card-title"},[t._v("Netflix (clone)")]),s("h6",{staticClass:"card-text"},[t._v("Technologies used:")]),s("p",{staticClass:"card-text"},[s("span",{staticClass:"fab fa-html5"})]),s("p",{staticClass:"card-text"},[s("span",{staticClass:"fab fa-css3-alt"})]),s("p",{staticClass:"card-text"},[s("span",{staticClass:"fab fa-js-square"},[t._v(" / "),s("span",{staticClass:"fab fa-vuejs"})])]),s("h6",{staticClass:"card-text"},[t._v("AJAX call to TMDB")])]),s("div",[s("a",{staticClass:"btn",attrs:{href:"https://danielpellegrini.github.io/vue-boolflix/",target:"blank"}},[t._v("View")])])])]),s("div",{staticClass:"card column-3-with-offset"},[s("a",{attrs:{href:"https://danielpellegrini.github.io/html-css-spotifyweb/",target:"blank"}},[s("img",{staticClass:"card-img-top",attrs:{src:a("5d7e"),alt:"spotify image"}})]),s("div",{staticClass:"card-body"},[s("div",[s("h5",{staticClass:"card-title"},[t._v("Spotify Web (clone)")]),s("h6",{staticClass:"card-text"},[t._v("Technologies used:")]),s("p",{staticClass:"card-text"},[s("span",{staticClass:"fab fa-html5"})]),s("p",{staticClass:"card-text"},[s("span",{staticClass:"fab fa-css3-alt"})])]),s("div",[s("a",{staticClass:"btn",attrs:{href:"https://danielpellegrini.github.io/html-css-spotifyweb/",target:"blank"}},[t._v("View")])])])]),s("div",{staticClass:"row-container second-row"},[s("div",{staticClass:"card column-3-with-offset"},[s("a",{attrs:{href:"https://fable-kindergarten.herokuapp.com/",target:"blank"}},[s("img",{staticClass:"card-img-top",attrs:{src:a("517b"),alt:"spotify image"}})]),s("div",{staticClass:"card-body"},[s("div",[s("h5",{staticClass:"card-title"},[t._v("Fable Kindergarten")]),s("h6",{staticClass:"card-text"},[t._v("Technologies used:")]),s("p",{staticClass:"card-text"},[s("span",{staticClass:"fab fa-html5"})]),s("p",{staticClass:"card-text"},[s("span",{staticClass:"fab fa-css3-alt"})]),s("p",{staticClass:"card-text"},[s("span",{staticClass:"fab fa-php"})]),s("p",{staticClass:"card-text"},[s("span",{staticClass:"fab fa-js-square"}),s("small",[t._v(" jQuery")])])]),s("div",[s("a",{staticClass:"btn",attrs:{href:"https://fable-kindergarten.herokuapp.com/",target:"blank"}},[t._v("View")])])])]),s("div",{staticClass:"card column-3-with-offset"},[s("a",{attrs:{href:"https://danielpellegrini.github.io/html-css-digitalocean/",target:"blank"}},[s("img",{staticClass:"card-img-top",attrs:{src:a("a8e7"),alt:"spotify image"}})]),s("div",{staticClass:"card-body"},[s("div",[s("h5",{staticClass:"card-title"},[t._v("Digital Ocean (clone)")]),s("h6",{staticClass:"card-text"},[t._v("Technologies used:")]),s("p",{staticClass:"card-text"},[s("span",{staticClass:"fab fa-html5"})]),s("p",{staticClass:"card-text"},[s("span",{staticClass:"fab fa-css3-alt"})])]),s("div",[s("a",{staticClass:"btn",attrs:{href:"https://danielpellegrini.github.io/html-css-digitalocean/",target:"blank"}},[t._v("View")])])])])])])])])}],g={methods:{expandProjects:function(){document.getElementById("expandProjectsLayover").className="max-width holoContainerLayover",document.getElementById("expandProjectsContainer").className="max-width holoContainer",document.getElementById("projects").className="increase-projects",document.getElementById("compressProjects").className="fas fa-compress-arrows-alt",document.getElementById("expandProjects").className=" ",document.getElementsByTagName("UL")[0].className="hidden nav justify-content-center",this.$parent.$parent.animationSpeed=1e9},compressProjects:function(){document.getElementById("expandProjectsLayover").className="holoContainerLayover",document.getElementById("expandProjectsContainer").className="holoContainer",document.getElementById("projects").className=" ",document.getElementById("expandProjects").className="fas fa-expand-arrows-alt",document.getElementById("compressProjects").className=" ",document.getElementsByTagName("UL")[0].className="visible nav justify-content-center",this.$parent.$parent.animationSpeed=500}}},b=g,C=Object(m["a"])(b,h,v,!1,null,null,null),y=C.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"holoContainerLayover",attrs:{id:"expandContactsLayover"}}),a("div",{staticClass:"holoContainer",attrs:{id:"expandContactsContainer"}},[t._m(0),a("main",{attrs:{id:"contacts"}},[a("h1",[t._v("Have a question or want to work togheter?")]),a("h1",[t._v("Let's get in touch!")]),a("div",{staticClass:"icons-container"},[a("div",{class:{rotate:t.isGithub},on:{mouseover:function(e){t.isGithub=!0},mouseout:function(e){t.isGithub=!1}}},[t._m(1)]),a("div",{class:{rotate:t.isLinkedin},on:{mouseover:function(e){t.isLinkedin=!0},mouseout:function(e){t.isLinkedin=!1}}},[t._m(2)]),a("div",{class:{rotate:t.isEmail},on:{mouseover:function(e){t.isEmail=!0},mouseout:function(e){t.isEmail=!1}}},[t._m(3)])])])])])},w=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"holo-top"},[a("h2",{staticClass:"text-center"},[t._v("Contacts")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{href:"https://github.com/danielpellegrini",target:"blank"}},[a("span",{staticClass:"fab fa-github"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{href:"https://linkedin.com/in/daniel-pellegrini-38655571",target:"blank"}},[a("span",{staticClass:"fab fa-linkedin"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{href:"mailto:danielpellegrini87@gmail.com",target:"blank"}},[a("span",{staticClass:"far fa-envelope"})])}],_={data:function(){return{isGithub:!1,isLinkedin:!1,isEmail:!1}}},j=_,E=Object(m["a"])(j,x,w,!1,null,null,null),I=E.exports,k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"welcomeComponent"}},[a("div",{attrs:{id:"welcome-container-top"}},[a("div",{staticClass:"more-container",attrs:{id:"more-container"},on:{click:t.hideWelcome}},[t._m(0)]),t._m(1)]),t._m(2),t._m(3)])},N=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"swipe-up-container"}},[a("i",{staticClass:"fas fa-angle-up justify-content-center d-flex slide-out-blurred-top"}),a("i",{staticClass:"fas fa-angle-up justify-content-center d-flex slide-out-blurred-top2"}),a("i",{staticClass:"fas fa-angle-up justify-content-center d-flex slide-out-blurred-top-last"}),a("h6",[t._v("More")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"welcome-content-top"},[a("div",{staticClass:"welcome"},[a("span",{staticClass:"text1"})]),a("div",{staticClass:"welcome"},[a("span",{staticClass:"text2"})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"loader"}},[a("div",{staticClass:"outer"},[a("div",{staticClass:"inner"})]),a("h2",[t._v("LOADING...")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"welcome-container-bottom"}},[a("div",{staticClass:"welcome-content-bottom"},[a("div",{staticClass:"welcome"},[a("span",{staticClass:"text3"})])])])}],B=a("d4ec"),A=a("bee2"),T=(a("d3b7"),{methods:{hideWelcome:function(){document.getElementById("welcome-container-top").className="slide-out-top",document.getElementById("welcome-container-bottom").className="slide-out-bottom",document.getElementById("carousel").className="hundred carousel-3d-container",document.getElementById("welcomeComponent").className="hide-welcome",document.getElementById("navbar").className="d-block",document.getElementById("navbar").className="layover",document.getElementsByTagName("UL")[0].className="nav justify-content-center",document.getElementById("more-container").className="hidden"},hideMore:function(){document.getElementById("more-container").className="hidden"},viewMore:function(){document.getElementById("more-container").className="more-container"}},mounted:function(){var t=this;this.hideMore(),setTimeout((function(){return t.viewMore()}),7e3);var e=function(){function t(e){Object(B["a"])(this,t),this.el=e,this.chars="!<>-_\\/[]{}—=+*^?#__",this.update=this.update.bind(this)}return Object(A["a"])(t,[{key:"setText",value:function(t){var e=this,a=this.el.innerText,s=Math.max(a.length,t.length),n=new Promise((function(t){return e.resolve=t}));this.queue=[];for(var i=0;i<s;i++){var o=a[i]||"",r=t[i]||"",c=Math.floor(50*Math.random()),l=c+Math.floor(50*Math.random());this.queue.push({from:o,to:r,start:c,end:l})}return cancelAnimationFrame(this.frameRequest),this.frame=0,this.update(),n}},{key:"setText1",value:function(t){var e=this,a=this.el.innerText,s=Math.max(a.length,t.length),n=new Promise((function(t){return e.resolve=t}));this.queue=[];for(var i=0;i<s;i++){var o=a[i]||"",r=t[i]||"",c=Math.floor(50*Math.random()),l=c+Math.floor(50*Math.random());this.queue.push({from:o,to:r,start:c,end:l})}return cancelAnimationFrame(this.frameRequest),this.frame=0,this.update(),n}},{key:"setText2",value:function(t){var e=this,a=this.el.innerText,s=Math.max(a.length,t.length),n=new Promise((function(t){return e.resolve=t}));this.queue=[];for(var i=0;i<s;i++){var o=a[i]||"",r=t[i]||"",c=Math.floor(50*Math.random()),l=c+Math.floor(50*Math.random());this.queue.push({from:o,to:r,start:c,end:l})}return cancelAnimationFrame(this.frameRequest),this.frame=0,this.update(),n}},{key:"update",value:function(){for(var t="",e=0,a=0,s=this.queue.length;a<s;a++){var n=this.queue[a],i=n.from,o=n.to,r=n.start,c=n.end,l=n.char;this.frame>=c?t+=o:this.frame>=r?((!l||Math.random()<1)&&(l=this.randomChar(),this.queue[a].char=l),t+='<span class="dud">'.concat(l,"</span>")):t+=i}this.el.innerHTML=t,e===this.queue.length?this.resolve():(this.frameRequest=requestAnimationFrame(this.update),this.frame++)}},{key:"randomChar",value:function(){return this.chars[Math.floor(Math.random()*this.chars.length)]}}]),t}(),a=["Hi,"],s=["I am <span>Daniel Pellegrini</span>"],n=["and I am a <span>Full Stack Web Dev</span>"],i=document.querySelector(".text1"),o=document.querySelector(".text2"),r=document.querySelector(".text3"),c=new e(i),l=new e(o),d=new e(r),u=0,m=function t(){c.setText(a[u]).then((function(){t()})),u=(u+1)%a.length},f=function t(){l.setText1(s[u]).then((function(){t()})),u=(u+1)%s.length},p=function t(){d.setText2(n[0]).then((function(){t()})),u=(u+1)%n.length};setTimeout((function(){return m()}),2e3),setTimeout((function(){return f()}),3800),setTimeout((function(){return p()}),5800)}}),M=T,P=Object(m["a"])(M,k,N,!1,null,null,null),L=P.exports,$=a("2af0"),q=a.n($),O={data:function(){return{navlinks:["About","Projects","Contacts"],linksIndex:0,active:!0,isActive:!1}},name:"Home",components:{About:p,Projects:y,Contacts:I,Welcome:L,Carousel3d:$["Carousel3d"],Slide:$["Slide"]},methods:{goToIndex:function(t){this.$refs.mycarousel.goSlide(t),this.linksIndex=t},activeIndex:function(t){return t!==this.linksIndex?"":"highlight"},viewWelcome:function(){var t=this;document.getElementById("carousel").className="carousel-3d-container zero",document.getElementById("welcome-container-top").className="slide-in-top",document.getElementById("welcome-container-bottom").className="slide-in-bottom",document.getElementById("welcomeComponent").className="view-welcome",document.getElementsByTagName("UL")[0].className="d-none",setTimeout((function(){return t.viewMore()}),2e3)},viewMore:function(){document.getElementById("more-container").className="more-container",document.getElementById("welcome-container-top").className=" ",document.getElementById("welcome-container-bottom").className=" "}}},S=O,W=Object(m["a"])(S,o,r,!1,null,null,null),F=W.exports,H={name:"App",components:{Home:F}},D=H,G=(a("5c0b"),Object(m["a"])(D,n,i,!1,null,null,null)),U=G.exports,V=a("5f5b"),J=a("b1e0");a("f9e3"),a("2dd8");s["default"].use(V["a"]),s["default"].use(J["a"]),s["default"].use(q.a),s["default"].config.productionTip=!1,new s["default"]({render:function(t){return t(U)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";a("9c0c")},"5d7e":function(t,e,a){t.exports=a.p+"img/spotify.edb78492.jpg"},"9c0c":function(t,e,a){},a8e7:function(t,e,a){t.exports=a.p+"img/digitalocean.8c6b9228.jpg"},a971:function(t,e,a){t.exports=a.p+"img/netflix.4386ad82.jpg"},c067:function(t,e,a){t.exports=a.p+"img/whatsappweb.8da889e2.jpg"}});
//# sourceMappingURL=app.bcef8328.js.map