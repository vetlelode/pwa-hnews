(function(t){function e(e){for(var r,c,i=e[0],u=e[1],s=e[2],l=0,p=[];l<i.length;l++)c=i[l],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&p.push(a[c][0]),a[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);f&&f(e);while(p.length)p.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,c=1;c<n.length;c++){var u=n[c];0!==a[u]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},o=[];function c(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"e65dcd7a"}[t]+".js"}function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n=a[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=a[t]=[e,r]}));e.push(n[2]=r);var o,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=c(t);var s=new Error;o=function(e){u.onerror=u.onload=null,clearTimeout(l);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;s.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",s.name="ChunkLoadError",s.type=r,s.request=o,n[1](s)}a[t]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:u})}),12e4);u.onerror=u.onload=o,document.head.appendChild(u)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var f=s;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"1da6":function(t,e,n){},"21bb":function(t,e,n){"use strict";var r=n("7a98"),a=n.n(r);a.a},"320c":function(t,e,n){"use strict";var r=n("1da6"),a=n.n(r);a.a},"597b":function(t,e,n){},"5c0b":function(t,e,n){"use strict";var r=n("e332"),a=n.n(r);a.a},"68cc":function(t,e,n){},"7a98":function(t,e,n){},c55f:function(t,e,n){"use strict";var r=n("68cc"),a=n.n(r);a.a},cd49:function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view"),n("link",{attrs:{href:"https://fonts.googleapis.com/icon?family=Material+Icons",rel:"stylesheet"}})],1)},o=[],c=r["a"].extend({}),i=c,u=(n("5c0b"),n("2877")),s=Object(u["a"])(i,a,o,!1,null,null,null),l=s.exports,f=n("8c4f"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[t._m(0),n("Index")],1)},d=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("div",{attrs:{id:"head"}},[t._v("{ pwa-hnews }")])])}],h=(n("6b54"),n("2397"),n("d225")),y=n("b0b4"),v=n("4e2b"),b=n("308d"),m=n("6bb5"),j=n("9ab4"),g=n("60a3"),O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{on:{keyup:function(e){return e.ctrlKey?t.openArt(e):null}}},t._l(t.stories,(function(t){return n("div",{key:t},[n("DisplayStory",{attrs:{story:t}})],1)})),0)},w=[],k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("article",{class:{big:t.showCommments}},[n("aside",{staticClass:"lefty"}),n("section",[n("a",{attrs:{href:t.data.url}},[t._v("\n                "+t._s(t.data.title)+"\n            ")]),n("span",{staticClass:"meta"},[t._v(t._s(t.data.score)+" points by "+t._s(t.data.by)+"\n                "+t._s(t.hoursSince(t.data.time))),n("br")]),n("span",{staticClass:"url"},[n("a",{attrs:{href:t.data.url}},[t._v("("+t._s(t.data.url)+")")])])]),n("a",{on:{click:function(e){t.showCommments=!t.showCommments}}},[n("aside",{staticClass:"righty"},[n("i",{staticClass:"material-icons"},[t._v("comment")]),n("span",{staticClass:"comments"},[t._v(t._s(t.data.descendants))])])])]),t.showCommments?n("section",{staticClass:"comments"},[n("DisplayComments",{attrs:{parent:t.data}})],1):t._e()])},_=[],R=(n("ac6a"),n("ac4d"),n("8a81"),n("5df3"),n("1c4c"),n("7f7f"),n("96cf"),n("3b8d")),S=function(){function t(e,n,r,a,o,c,i,u){Object(h["a"])(this,t),this.id=e,this.by=n,this.time=r,this.text=a,this.kids=o,this.score=c,this.title=i,this.descendants=u}return Object(y["a"])(t,[{key:"setTitle",value:function(t){this.title=t}},{key:"getTitle",value:function(){return this.title}},{key:"getKids",value:function(){return this.kids}}]),t}();function x(t){var e=C();return function(){var n,r=Object(m["a"])(t);if(e){var a=Object(m["a"])(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(b["a"])(this,n)}}function C(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var D=function(t){Object(v["a"])(n,t);var e=x(n);function n(t,r,a,o,c,i,u,s,l){var f;return Object(h["a"])(this,n),f=e.call(this,t,r,a,o,c,i,u,s),f.url=l,f}return Object(y["a"])(n,[{key:"getUrl",value:function(){return this.url}}]),n}(S);function P(t){var e=M();return function(){var n,r=Object(m["a"])(t);if(e){var a=Object(m["a"])(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(b["a"])(this,n)}}function M(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var A=function(t){Object(v["a"])(n,t);var e=P(n);function n(t,r,a,o,c,i,u,s,l){var f;return Object(h["a"])(this,n),f=e.call(this,t,a,o,c,i,u,s,l),f.parent=r,f.display=!0,f}return Object(y["a"])(n,[{key:"getParent",value:function(){return this.parent}},{key:"changeDisplay",value:function(){this.display=!this.display}}]),n}(S),E=n("bc3a"),T=n.n(E);function $(t,e){var n;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=I(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var r=0,a=function(){};return{s:a,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,i=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return c=t.done,t},e:function(t){i=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(i)throw o}}}}function I(t,e){if(t){if("string"===typeof t)return Q(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Q(t,e):void 0}}function Q(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var F=function(){function t(){Object(h["a"])(this,t)}return Object(y["a"])(t,null,[{key:"QueryStory",value:function(){var t=Object(R["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",T.a.get("https://hacker-news.firebaseio.com/v0/item/"+e+".json").then((function(t){return new D(t.data.id,t.data.by,new Date(1e3*t.data.time),t.data.text,t.data.kids,t.data.score,t.data.title,t.data.descendants,t.data.url)})));case 1:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"QueryFrontPage",value:function(){var t=[];return T.a.get("https://hacker-news.firebaseio.com/v0/topstories.json").then((function(e){var n,r=0,a=$(e.data);try{for(a.s();!(n=a.n()).done;){var o=n.value;if(r>=30)break;"number"!==typeof o&&(o=parseInt(o)),"number"===typeof o&&t.push(o),r++}}catch(c){a.e(c)}finally{a.f()}})).catch((function(t){console.log(t)})),t}},{key:"QueryComments",value:function(t){var e,n=[],r=$(t);try{for(r.s();!(e=r.n()).done;){var a=e.value;T.a.get("https://hacker-news.firebaseio.com/v0/item/"+a+".json").then((function(t){n.push(new A(t.data.id,t.data.parent,t.data.by,new Date(1e3*t.data.time),t.data.text,t.data.kids,t.data.score,t.data.title,t.data.descendants))})).catch((function(t){console.log(t)}))}}catch(o){r.e(o)}finally{r.f()}return n}}]),t}(),H=function(){function t(){Object(h["a"])(this,t)}return Object(y["a"])(t,null,[{key:"HoursSince",value:function(t){var e=Math.abs((new Date).getTime()-t.getTime())/36e5;return e<1?Math.round(60*e)+" minutes ago":e<24?e>2?Math.round(e)+" hours ago":Math.round(e)+" hour ago":e>2?Math.round(e/24)+" days ago":Math.round(e/24)+" day ago"}}]),t}(),K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",t._l(t.kids,(function(e){return n("li",{key:e.id},[n("p",{staticClass:"author"},[t._v("\n            "+t._s(e.by)+"\n            "),n("span",[t._v(t._s(t.hoursSince(e.time)))]),e.display?n("a",{staticClass:"lessShow",on:{click:function(t){return e.changeDisplay()}}},[t._v("[-]")]):t._e(),e.display?t._e():n("a",{staticClass:"lessShow",on:{click:function(t){return e.changeDisplay()}}},[t._v("[+]")])]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.display,expression:"kid.display"}]},[n("p",{staticClass:"commentBody",domProps:{innerHTML:t._s(e.text)}}),n("DisplayComments",{attrs:{parent:e}})],1)])})),0)},N=[];function L(t){var e=q();return function(){var n,r=Object(m["a"])(t);if(e){var a=Object(m["a"])(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(b["a"])(this,n)}}function q(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var B=function(){var t=function(t){Object(v["a"])(n,t);var e=L(n);function n(){var t;return Object(h["a"])(this,n),t=e.apply(this,arguments),t.kids=[],t}return Object(y["a"])(n,[{key:"mounted",value:function(){this.parent.getKids()&&(this.kids=F.QueryComments(this.parent.getKids()))}},{key:"hoursSince",value:function(t){return H.HoursSince(t)}}]),n}(g["c"]);return Object(j["a"])([Object(g["b"])()],t.prototype,"parent",void 0),t=Object(j["a"])([g["a"]],t),t}(),J=B,U=J,z=(n("e553"),Object(u["a"])(U,K,N,!1,null,null,null)),G=z.exports;function V(t){var e=W();return function(){var n,r=Object(m["a"])(t);if(e){var a=Object(m["a"])(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(b["a"])(this,n)}}function W(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var X=function(){var t=function(t){Object(v["a"])(n,t);var e=V(n);function n(){var t;return Object(h["a"])(this,n),t=e.apply(this,arguments),t.data=new D(1,"a",new Date,"",[],0,"loading..",0,""),t.showCommments=!1,t.comments=[],t}return Object(y["a"])(n,[{key:"hoursSince",value:function(t){return H.HoursSince(t)}},{key:"mounted",value:function(){var t=this,e=F.QueryStory(this.story);e.then((function(e){t.data=e}))}}]),n}(g["c"]);return Object(j["a"])([Object(g["b"])({default:1})],t.prototype,"story",void 0),t=Object(j["a"])([Object(g["a"])({components:{DisplayComments:G}})],t),t}(),Y=X,Z=Y,tt=(n("c55f"),Object(u["a"])(Z,k,_,!1,null,null,null)),et=tt.exports;function nt(t){var e=rt();return function(){var n,r=Object(m["a"])(t);if(e){var a=Object(m["a"])(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(b["a"])(this,n)}}function rt(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var at=function(){var t=function(t){Object(v["a"])(n,t);var e=nt(n);function n(){var t;return Object(h["a"])(this,n),t=e.apply(this,arguments),t.stories=[],t}return Object(y["a"])(n,[{key:"mounted",value:function(){this.stories=F.QueryFrontPage()}},{key:"openArt",value:function(){console.log("hei")}}]),n}(g["c"]);return t=Object(j["a"])([Object(g["a"])({components:{DisplayStory:et}})],t),t}(),ot=at,ct=ot,it=(n("320c"),Object(u["a"])(ct,O,w,!1,null,null,null)),ut=it.exports;function st(t){var e=lt();return function(){var n,r=Object(m["a"])(t);if(e){var a=Object(m["a"])(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(b["a"])(this,n)}}function lt(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var ft=function(){var t=function(t){Object(v["a"])(n,t);var e=st(n);function n(){var t;return Object(h["a"])(this,n),t=e.apply(this,arguments),t.menu=!1,t}return Object(y["a"])(n,[{key:"showMenu",value:function(){this.menu=!this.menu}}]),n}(g["c"]);return t=Object(j["a"])([Object(g["a"])({components:{Index:ut}})],t),t}(),pt=ft,dt=pt,ht=(n("21bb"),Object(u["a"])(dt,p,d,!1,null,null,null)),yt=ht.exports;r["a"].use(f["a"]);var vt=new f["a"]({routes:[{path:"/",name:"home",component:yt},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),bt=n("9483");Object(bt["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),r["a"].config.productionTip=!1,new r["a"]({router:vt,render:function(t){return t(l)}}).$mount("#app")},e332:function(t,e,n){},e553:function(t,e,n){"use strict";var r=n("597b"),a=n.n(r);a.a}});
//# sourceMappingURL=app.41e06022.js.map