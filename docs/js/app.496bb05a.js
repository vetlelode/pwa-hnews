(function(t){function e(e){for(var r,c,i=e[0],s=e[1],u=e[2],l=0,d=[];l<i.length;l++)c=i[l],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&d.push(a[c][0]),a[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);f&&f(e);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,c=1;c<n.length;c++){var s=n[c];0!==a[s]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},o=[];function c(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"e65dcd7a"}[t]+".js"}function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n=a[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=a[t]=[e,r]}));e.push(n[2]=r);var o,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=c(t);var u=new Error;o=function(e){s.onerror=s.onload=null,clearTimeout(l);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",u.name="ChunkLoadError",u.type=r,u.request=o,n[1](u)}a[t]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:s})}),12e4);s.onerror=s.onload=o,document.head.appendChild(s)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var f=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"1da6":function(t,e,n){},"21bb":function(t,e,n){"use strict";var r=n("7a98"),a=n.n(r);a.a},"320c":function(t,e,n){"use strict";var r=n("1da6"),a=n.n(r);a.a},"597b":function(t,e,n){},"5c0b":function(t,e,n){"use strict";var r=n("e332"),a=n.n(r);a.a},"68cc":function(t,e,n){},"7a98":function(t,e,n){},c55f:function(t,e,n){"use strict";var r=n("68cc"),a=n.n(r);a.a},cd49:function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view"),n("link",{attrs:{href:"https://fonts.googleapis.com/icon?family=Material+Icons",rel:"stylesheet"}})],1)},o=[],c=r["a"].extend({}),i=c,s=(n("5c0b"),n("2877")),u=Object(s["a"])(i,a,o,!1,null,null,null),l=u.exports,f=n("8c4f"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("header",{staticClass:"home"},[n("aside",{staticClass:"left"},[n("span",{staticClass:"material-icons"},[n("a",{on:{click:t.refresh}},[t._v("refresh")])])]),n("div",{attrs:{id:"head"}},[t._v("{ pwa-hnews }")]),n("aside",{staticClass:"right"},[n("span",{staticClass:"material-icons"},[n("a",{on:{click:function(e){t.menu=!0}}},[t._v("settings")])])])]),n("Index",{key:t.reRender}),t.menu?n("Settings",{on:{close:function(e){t.menu=!1}}}):t._e()],1)},p=[],h=(n("6b54"),n("2397"),n("d225")),v=n("b0b4"),y=n("4e2b"),b=n("308d"),m=n("6bb5"),g=n("9ab4"),j=n("60a3"),O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[t._l(t.stories,(function(t){return n("div",{key:t},[n("DisplayStory",{attrs:{story:t}})],1)})),n("div",{attrs:{id:"expand"}},[n("span",{staticClass:"material-icons"},[n("a",{on:{click:function(e){return t.addMore()}}},[t._v("keyboard_arrow_down")])])])],2)},w=[],_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("article",{class:{big:t.showCommments}},[n("aside",{staticClass:"lefty"}),n("section",[n("a",{attrs:{href:t.data.url}},[t._v(t._s(t.data.title))]),n("span",{staticClass:"meta"},[t._v("\n                "+t._s(t.data.score)+" points by "+t._s(t.data.by)+"\n                "+t._s(t.hoursSince(t.data.time))+"\n                "),n("br")]),n("span",{staticClass:"url"},[n("a",{attrs:{href:t.data.url}},[t._v("("+t._s(t.data.url)+")")])])]),n("a",{on:{click:function(e){t.showCommments=!t.showCommments}}},[n("aside",{staticClass:"righty"},[n("i",{staticClass:"material-icons"},[t._v("comment")]),n("span",{staticClass:"comments"},[t._v(t._s(t.data.descendants))])])])]),t.showCommments?n("section",{staticClass:"comments"},[n("DisplayComments",{attrs:{parent:t.data}})],1):t._e()])},k=[],C=(n("ac6a"),n("ac4d"),n("8a81"),n("5df3"),n("1c4c"),n("7f7f"),n("96cf"),n("3b8d")),S=function(){function t(e,n,r,a,o,c,i,s){Object(h["a"])(this,t),this.id=e,this.by=n,this.time=r,this.text=a,this.kids=o,this.score=c,this.title=i,this.descendants=s}return Object(v["a"])(t,[{key:"setTitle",value:function(t){this.title=t}},{key:"getTitle",value:function(){return this.title}},{key:"getKids",value:function(){return this.kids}}]),t}();function R(t){var e=x();return function(){var n,r=Object(m["a"])(t);if(e){var a=Object(m["a"])(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(b["a"])(this,n)}}function x(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var D=function(t){Object(y["a"])(n,t);var e=R(n);function n(t,r,a,o,c,i,s,u,l){var f;return Object(h["a"])(this,n),f=e.call(this,t,r,a,o,c,i,s,u),f.url=l,f}return Object(v["a"])(n,[{key:"getUrl",value:function(){return this.url}}]),n}(S);function P(t){var e=M();return function(){var n,r=Object(m["a"])(t);if(e){var a=Object(m["a"])(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(b["a"])(this,n)}}function M(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var A=function(t){Object(y["a"])(n,t);var e=P(n);function n(t,r,a,o,c,i,s,u,l){var f;return Object(h["a"])(this,n),f=e.call(this,t,a,o,c,i,s,u,l),f.parent=r,f.display=!0,f}return Object(v["a"])(n,[{key:"getParent",value:function(){return this.parent}},{key:"changeDisplay",value:function(){this.display=!this.display}}]),n}(S),T=n("bc3a"),E=n.n(T);function $(t,e){var n;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=I(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var r=0,a=function(){};return{s:a,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,i=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return c=t.done,t},e:function(t){i=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(i)throw o}}}}function I(t,e){if(t){if("string"===typeof t)return N(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?N(t,e):void 0}}function N(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var Q=function(){function t(){Object(h["a"])(this,t)}return Object(v["a"])(t,null,[{key:"QueryStory",value:function(){var t=Object(C["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",E.a.get("https://hacker-news.firebaseio.com/v0/item/"+e+".json").then((function(t){return new D(t.data.id,t.data.by,new Date(1e3*t.data.time),t.data.text,t.data.kids,t.data.score,t.data.title,t.data.descendants,t.data.url)})));case 1:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"QueryFrontPage",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"topstories",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:30,r=[],a="";return a="topstories"==t||"newstories"==t||"beststories"==t?"https://hacker-news.firebaseio.com/v0/"+t+".json":"https://hacker-news.firebaseio.com/v0/topstories.json",E.a.get(a).then((function(t){var a=e;console.log(e,n);var o,c=$(t.data);try{for(c.s();!(o=c.n()).done;){var i=o.value;a>=e&&a<=n&&(r.push(parseInt(i)),console.log(a)),a++}}catch(s){c.e(s)}finally{c.f()}})).catch((function(t){console.log(t)})),r}},{key:"QueryComments",value:function(t){var e,n=[],r=$(t);try{for(r.s();!(e=r.n()).done;){var a=e.value;E.a.get("https://hacker-news.firebaseio.com/v0/item/"+a+".json").then((function(t){n.push(new A(t.data.id,t.data.parent,t.data.by,new Date(1e3*t.data.time),t.data.text,t.data.kids,t.data.score,t.data.title,t.data.descendants))})).catch((function(t){console.log(t)}))}}catch(o){r.e(o)}finally{r.f()}return n}}]),t}(),F=function(){function t(){Object(h["a"])(this,t)}return Object(v["a"])(t,null,[{key:"HoursSince",value:function(t){var e=Math.abs((new Date).getTime()-t.getTime())/36e5;return e<1?Math.round(60*e)+" minutes ago":e<24?e>2?Math.round(e)+" hours ago":Math.round(e)+" hour ago":e>2?Math.round(e/24)+" days ago":Math.round(e/24)+" day ago"}}]),t}(),H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",t._l(t.kids,(function(e){return n("li",{key:e.id},[n("p",{staticClass:"author"},[t._v("\n            "+t._s(e.by)+"\n            "),n("span",[t._v(t._s(t.hoursSince(e.time)))]),e.display?n("a",{staticClass:"lessShow",on:{click:function(t){return e.changeDisplay()}}},[t._v("[-]")]):t._e(),e.display?t._e():n("a",{staticClass:"lessShow",on:{click:function(t){return e.changeDisplay()}}},[t._v("[+]")])]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.display,expression:"kid.display"}]},[n("p",{staticClass:"commentBody",domProps:{innerHTML:t._s(e.text)}}),n("DisplayComments",{attrs:{parent:e}})],1)])})),0)},B=[];function K(t){var e=L();return function(){var n,r=Object(m["a"])(t);if(e){var a=Object(m["a"])(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(b["a"])(this,n)}}function L(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var q=function(){var t=function(t){Object(y["a"])(n,t);var e=K(n);function n(){var t;return Object(h["a"])(this,n),t=e.apply(this,arguments),t.kids=[],t}return Object(v["a"])(n,[{key:"mounted",value:function(){this.parent.getKids()&&(this.kids=Q.QueryComments(this.parent.getKids()))}},{key:"hoursSince",value:function(t){return F.HoursSince(t)}}]),n}(j["c"]);return Object(g["a"])([Object(j["b"])()],t.prototype,"parent",void 0),t=Object(g["a"])([j["a"]],t),t}(),J=q,U=J,z=(n("e553"),Object(s["a"])(U,H,B,!1,null,null,null)),G=z.exports;function V(t){var e=W();return function(){var n,r=Object(m["a"])(t);if(e){var a=Object(m["a"])(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(b["a"])(this,n)}}function W(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var X=function(){var t=function(t){Object(y["a"])(n,t);var e=V(n);function n(){var t;return Object(h["a"])(this,n),t=e.apply(this,arguments),t.data=new D(1,"a",new Date,"",[],0,"loading..",0,""),t.showCommments=!1,t.comments=[],t}return Object(v["a"])(n,[{key:"hoursSince",value:function(t){return F.HoursSince(t)}},{key:"mounted",value:function(){var t=this,e=Q.QueryStory(this.story);e.then((function(e){t.data=e}))}}]),n}(j["c"]);return Object(g["a"])([Object(j["b"])({default:1})],t.prototype,"story",void 0),t=Object(g["a"])([Object(j["a"])({components:{DisplayComments:G}})],t),t}(),Y=X,Z=Y,tt=(n("c55f"),Object(s["a"])(Z,_,k,!1,null,null,null)),et=tt.exports;function nt(t){var e=rt();return function(){var n,r=Object(m["a"])(t);if(e){var a=Object(m["a"])(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(b["a"])(this,n)}}function rt(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var at=function(){var t=function(t){Object(y["a"])(n,t);var e=nt(n);function n(){var t;return Object(h["a"])(this,n),t=e.apply(this,arguments),t.stories=[],t}return Object(v["a"])(n,[{key:"mounted",value:function(){this.stories=Q.QueryFrontPage("topstories")}},{key:"addMore",value:function(){console.log(this.stories.length);var t=Q.QueryFrontPage("topstories",this.stories.length,this.stories.length+30);this.stories=t}}]),n}(j["c"]);return t=Object(g["a"])([Object(j["a"])({components:{DisplayStory:et}})],t),t}(),ot=at,ct=ot,it=(n("320c"),Object(s["a"])(ct,O,w,!1,null,null,null)),st=it.exports,ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"modal"}},[n("div",{staticClass:"modal-mask"},[n("div",{staticClass:"modal-wrapper"},[n("div",{staticClass:"modal-container"},[n("header",{staticClass:"modalHeader"},[n("h3",[t._v("Settings")]),n("aside",[n("span",{staticClass:"material-icons"},[n("a",{staticClass:"close",on:{click:function(e){return t.$emit("close")}}},[t._v("\n                                close")])])])]),n("form",{staticClass:"settings"},[n("section",{staticClass:"formRow"},[n("label",{attrs:{for:""}},[t._v("Sort by:")]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.SortingChosen,expression:"SortingChosen"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.SortingChosen=e.target.multiple?n:n[0]}}},t._l(t.SortingOptions,(function(e){return n("option",{key:e.value,domProps:{value:e.value}},[t._v(t._s(e.text))])})),0)]),n("section",{staticClass:"formRow"},[n("label",{attrs:{for:""}},[t._v("Show Only:")]),n("select",[n("option",[t._v("Popular")]),n("option",[t._v("Newest")]),n("option",[t._v("Popular")])])])])])])])])},lt=[];function ft(t){var e=dt();return function(){var n,r=Object(m["a"])(t);if(e){var a=Object(m["a"])(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(b["a"])(this,n)}}function dt(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var pt=function(t){Object(y["a"])(n,t);var e=ft(n);function n(){var t;return Object(h["a"])(this,n),t=e.apply(this,arguments),t.Only="All",t.SortingChosen="topstories",t.SortingOptions=[{text:"Top",value:"topstories"},{text:"New",value:"newstories"},{text:"Best",value:"beststories"}],t}return Object(v["a"])(n,[{key:"emitOption",value:function(t,e){console.log(e.target),this.$emit(t,e)}}]),n}(j["c"]),ht=pt,vt=(n("d382"),Object(s["a"])(ht,ut,lt,!1,null,null,null)),yt=vt.exports;function bt(t){var e=mt();return function(){var n,r=Object(m["a"])(t);if(e){var a=Object(m["a"])(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(b["a"])(this,n)}}function mt(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var gt=function(){var t=function(t){Object(y["a"])(n,t);var e=bt(n);function n(){var t;return Object(h["a"])(this,n),t=e.apply(this,arguments),t.reRender=0,t.menu=!1,t}return Object(v["a"])(n,[{key:"refresh",value:function(){this.reRender+=1}}]),n}(j["c"]);return t=Object(g["a"])([Object(j["a"])({components:{Index:st,Settings:yt}})],t),t}(),jt=gt,Ot=jt,wt=(n("21bb"),Object(s["a"])(Ot,d,p,!1,null,null,null)),_t=wt.exports;r["a"].use(f["a"]);var kt=new f["a"]({routes:[{path:"/",name:"home",component:_t},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),Ct=n("9483");Object(Ct["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),r["a"].config.productionTip=!1,new r["a"]({router:kt,render:function(t){return t(l)}}).$mount("#app")},d382:function(t,e,n){"use strict";var r=n("eec4"),a=n.n(r);a.a},e332:function(t,e,n){},e553:function(t,e,n){"use strict";var r=n("597b"),a=n.n(r);a.a},eec4:function(t,e,n){}});
//# sourceMappingURL=app.496bb05a.js.map