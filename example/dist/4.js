webpackJsonp([4],{10:function(e,t){e.exports=function(e,t,r,o,a){var n,i=e=e||{},l=typeof e.default;"object"!==l&&"function"!==l||(n=e,i=e.default);var s="function"==typeof i?i.options:i;t&&(s.render=t.render,s.staticRenderFns=t.staticRenderFns),o&&(s._scopeId=o);var c;if(a?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},s._ssrRegister=c):r&&(c=r),c){var d=s.functional,p=d?s.render:s.beforeCreate;d?s.render=function(e,t){return c.call(t),p(e,t)}:s.beforeCreate=p?[].concat(p,c):[c]}return{esModule:n,exports:i,options:s}}},13:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"view-block"}},14:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"view-block"},[r("h2",{staticClass:"app-title"},[e._v("Block")]),r("ci-block",[r("ci-block-header",{attrs:{title:"Block Title",extend:"more"}}),r("ci-block-body",[r("ci-media",{attrs:{modifier:"image-top",title:"Bryan Cranston",text:"Bryan Cranston played the role of Walter in Breaking Bad. He is also known for playing.",image:"http://via.placeholder.com/960x400"}})],1)],1),r("ci-block",{attrs:{modifier:"border"}},[r("ci-block-header",{attrs:{title:"Block Title",extend:"more"}}),r("ci-block-body",[r("ci-media",{attrs:{title:"Bryan Cranston",text:"Bryan Cranston played the role of Walter in Breaking Bad. He is also known for playing.",image:"http://via.placeholder.com/96x96"}})],1),r("ci-block-footer",{staticClass:"ci-text-right"},[e._v("Add to Cart")])],1),r("ci-block",{attrs:{modifier:"radius"}},[r("ci-block-header",{attrs:{title:"Block Title",extend:"more"}}),r("ci-block-body",[r("ci-media",{attrs:{title:"Bryan Cranston",text:"Bryan Cranston played the role of Walter in Breaking Bad. He is also known for playing.",image:"http://via.placeholder.com/96x96"}})],1)],1),r("ci-block",{attrs:{modifier:"radius raised"}},[r("ci-block-header",{attrs:{title:"Block Title",extend:"more"}}),r("ci-block-body",[r("ci-media",{attrs:{title:"Bryan Cranston",text:"Bryan Cranston played the role of Walter in Breaking Bad. He is also known for playing.",image:"http://via.placeholder.com/96x96"}})],1)],1)],1)},staticRenderFns:[]}},6:function(e,t,r){var o=r(10)(r(13),r(14),null,null,null);e.exports=o.exports}});