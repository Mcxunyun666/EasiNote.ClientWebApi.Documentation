(function(e){function t(t){for(var r,o,c=t[0],i=t[1],l=t[2],s=0,f=[];s<c.length;s++)o=c[s],Object.prototype.hasOwnProperty.call(u,o)&&u[o]&&f.push(u[o][0]),u[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(f.length)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==u[c]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},u={app:0},a=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d0bdb67":"a19da948","chunk-2d0e64f6":"6e2f69e7","chunk-2d21a79a":"9a69f66f","chunk-8052c1d0":"eef0d24c"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-8052c1d0":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d0bdb67":"31d6cfe0","chunk-2d0e64f6":"31d6cfe0","chunk-2d21a79a":"31d6cfe0","chunk-8052c1d0":"abba2f50"}[e]+".css",u=i.p+r,a=document.getElementsByTagName("link"),c=0;c<a.length;c++){var l=a[c],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===u))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){l=f[c],s=l.getAttribute("data-href");if(s===r||s===u)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||u,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[e],d.parentNode.removeChild(d),n(a)},d.href=u;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){o[e]=0})));var r=u[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,n){r=u[e]=[t,n]}));t.push(r[2]=a);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=c(e);var f=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(d);var n=u[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}u[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var d=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Nav")],1)},u=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("EasiNote 前端回调测试页面")]),n("el-button-group",[n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.switchToView(0)}}},[e._v("0 首页")]),n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.switchToView(1)}}},[e._v("1 通用回调 InvokeMethod")]),n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.switchToView(2)}}},[e._v("2 执行自定义方法")]),n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.switchToView(3)}}},[e._v("3 创建 web presentation card 元素")]),n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.switchToView(4)}}},[e._v("4 插入多媒体（图片，音视频）元素")])],1),n("router-view")],1)},c=[],i={name:"Nav",componenets:{},methods:{switchToView:function(e){0===e?this.routerPush("/"):this.routerPush("/debugPage".concat(e))},routerPush:function(e){this.$route.path!==e&&this.$router.push(e)}}},l=i,s=n("2877"),f=Object(s["a"])(l,a,c,!1,null,null,null),d=f.exports,p={name:"App",components:{Nav:d}},h=p,b=(n("034f"),Object(s["a"])(h,o,u,!1,null,null,null)),m=b.exports,v=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("h3",[e._v("请选择对应的标签调试")]),n("el-link",{attrs:{href:"https://github.com/EasiNote/EasiNote.ClientWebApi.Documentation",target:"_blank"}},[e._v(" github 文档点击这里 ")])],1)},y=[],w={name:"Home",components:{}},k=w,_=Object(s["a"])(k,g,y,!1,null,null,null),P=_.exports;r["default"].use(v["a"]);var E=function(){return n.e("chunk-2d21a79a").then(n.bind(null,"bc58"))},O=function(){return n.e("chunk-8052c1d0").then(n.bind(null,"b8f0"))},j=function(){return n.e("chunk-2d0bdb67").then(n.bind(null,"2cbb"))},T=function(){return n.e("chunk-2d0e64f6").then(n.bind(null,"97ce"))},N=[{path:"/",name:"Home",component:P},{path:"/debugPage1",component:E},{path:"/debugPage2",component:O},{path:"/debugPage3",component:j},{path:"/debugPage4",component:T}],x=new v["a"]({base:"",routes:N}),C=x,S=n("5c96"),A=n.n(S);n("0fae");r["default"].use(A.a),r["default"].config.productionTip=!1,new r["default"]({router:C,render:function(e){return e(m)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.baf1fbc7.js.map