webpackJsonp([1],{12:function(e,t){e.exports=function(e,t,r,i){var n,a=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(n=e,a=e.default);var o="function"==typeof a?a.options:a;if(t&&(o.render=t.render,o.staticRenderFns=t.staticRenderFns),r&&(o._scopeId=r),i){var c=Object.create(o.computed||null);Object.keys(i).forEach(function(e){var t=i[e];c[e]=function(){return t}}),o.computed=c}return{esModule:n,exports:a,options:o}}},13:function(e,t,r){function i(e){for(var t=0;t<e.length;t++){var r=e[t],i=d[r.id];if(i){i.refs++;for(var n=0;n<i.parts.length;n++)i.parts[n](r.parts[n]);for(;n<r.parts.length;n++)i.parts.push(a(r.parts[n]));i.parts.length>r.parts.length&&(i.parts.length=r.parts.length)}else{for(var s=[],n=0;n<r.parts.length;n++)s.push(a(r.parts[n]));d[r.id]={id:r.id,refs:1,parts:s}}}}function n(){var e=document.createElement("style");return e.type="text/css",f.appendChild(e),e}function a(e){var t,r,i=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(i){if(h)return g;i.parentNode.removeChild(i)}if(m){var a=l++;i=p||(p=n()),t=s.bind(null,i,a,!1),r=s.bind(null,i,a,!0)}else i=n(),t=o.bind(null,i),r=function(){i.parentNode.removeChild(i)};return t(e),function(i){if(i){if(i.css===e.css&&i.media===e.media&&i.sourceMap===e.sourceMap)return;t(e=i)}else r()}}function s(e,t,r,i){var n=r?"":i.css;if(e.styleSheet)e.styleSheet.cssText=v(t,n);else{var a=document.createTextNode(n),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(a,s[t]):e.appendChild(a)}}function o(e,t){var r=t.css,i=t.media,n=t.sourceMap;if(i&&e.setAttribute("media",i),n&&(r+="\n/*# sourceURL="+n.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var u=r(14),d={},f=c&&(document.head||document.getElementsByTagName("head")[0]),p=null,l=0,h=!1,g=function(){},m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,r){h=r;var n=u(e,t);return i(n),function(t){for(var r=[],a=0;a<n.length;a++){var s=n[a],o=d[s.id];o.refs--,r.push(o)}t?(n=u(e,t),i(n)):n=[];for(var a=0;a<r.length;a++){var o=r[a];if(0===o.refs){for(var c=0;c<o.parts.length;c++)o.parts[c]();delete d[o.id]}}}};var v=function(){var e=[];return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}()},14:function(e,t){e.exports=function(e,t){for(var r=[],i={},n=0;n<t.length;n++){var a=t[n],s=a[0],o=a[1],c=a[2],u=a[3],d={id:e+":"+n,css:o,media:c,sourceMap:u};i[s]?i[s].parts.push(d):r.push(i[s]={id:s,parts:[d]})}return r}},15:function(e,t){function r(e,t){var r=e[1]||"",n=e[3];if(!n)return r;if(t&&"function"==typeof btoa){var a=i(n);return[r].concat(n.sources.map(function(e){return"/*# sourceURL="+n.sourceRoot+e+" */"})).concat([a]).join("\n")}return[r].join("\n")}function i(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var i=r(t,e);return t[2]?"@media "+t[2]+"{"+i+"}":i}).join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},n=0;n<this.length;n++){var a=this[n][0];"number"==typeof a&&(i[a]=!0)}for(n=0;n<e.length;n++){var s=e[n];"number"==typeof s[0]&&i[s[0]]||(r&&!s[2]?s[2]=r:r&&(s[2]="("+s[2]+") and ("+r+")"),t.push(s))}},t}},18:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"view-image"},[r("h2",{staticClass:"app-title"},[e._v("Image")]),r("ci-image",{attrs:{src:e.image_src,width:"300",radius:"20",mode:"auto-height"},on:{click:e.imageOnClick}}),r("ci-image",{attrs:{"is-lazy":!0,src:e.image_src,width:"300",height:"300",radius:"25"},on:{click:e.imageOnClick}}),r("ci-image",{attrs:{src:e.image_src,width:"300",height:"200",radius:"20"}}),r("ci-image",{attrs:{src:e.image_src,width:"200",height:"300",radius:"10"}}),r("ci-image",{attrs:{src:e.image_src,width:"300",height:"300",mode:"aspect-fit"}}),r("ci-image",{attrs:{src:e.image_src,width:"300",height:"200",mode:"aspect-fit"}}),r("ci-image",{attrs:{"is-lazy":!0,src:e.image_src,width:"200",height:"300",mode:"aspect-fit"}}),r("ci-image",{attrs:{"is-lazy":!0,src:"https://vuejs.org/images/logo.png",width:"200",height:"300",radius:"10",mode:"aspect-fit"}}),r("ci-image",{attrs:{"is-lazy":!0,src:"http://img12.360buyimg.com/cms/jfs/t4087/29/78270449/95294/2bf5e226/583b86e5N5886c370.jpg",width:"200",height:"300",mode:"aspect-fit"}}),r("ci-image",{attrs:{"is-lazy":!0,src:"http://img12.360buyimg.com/cms/jfs/t4087/29/78270449/95294/2bf5e226/583b86e5N5886c370.jpg",width:"200",height:"300",radius:"10"}})],1)},staticRenderFns:[]}},24:function(e,t,r){var i=r(34);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);r(13)("21a70e6e",i,!0)},29:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"view-image",data:function(){return{image_src:"https://img30.360buyimg.com/popWaterMark/jfs/t3034/278/2345638110/141275/166e9a8f/57d67b45N2991179b.jpg",product:{}}},created:function(){var e=this;this.getProduct(function(t){e.product=t})},methods:{imageOnClick:function(e){console.log("imageOnClick",e,this)},getProduct:function(e){var t=this;setTimeout(function(){var r={thumb:t.image_src,name:"Product Name",price:"1,000.99"};e(r)},1e3)}}}},34:function(e,t,r){t=e.exports=r(15)(void 0),t.push([e.i,".ci-image[data-v-29de1828]{margin:30px auto;box-shadow:5px 5px 10px rgba(0,0,0,.25)}",""])},7:function(e,t,r){r(24);var i=r(12)(r(29),r(18),"data-v-29de1828",null);e.exports=i.exports}});