webpackJsonp([3],{10:function(e,t){e.exports=function(e,t,n,i,r){var o,s=e=e||{},l=typeof e.default;"object"!==l&&"function"!==l||(o=e,s=e.default);var a="function"==typeof s?s.options:s;t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),i&&(a._scopeId=i);var c;if(r?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},a._ssrRegister=c):n&&(c=n),c){var d=a.functional,_=d?a.render:a.beforeCreate;d?a.render=function(e,t){return c.call(t),_(e,t)}:a.beforeCreate=_?[].concat(_,c):[c]}return{esModule:o,exports:s,options:a}}},22:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"view-list"}},23:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"view-list"},[n("h2",{staticClass:"app-title"},[e._v("List")]),n("ci-list",[n("ci-list-header",{attrs:{title:"List Title",extend:"more"}}),n("ci-list-body",[n("ci-list-cell",{attrs:{image:"http://via.placeholder.com/48x48",title:"Item Title",text:"Some text here",extend_text:"detail",extend_icon:"chevron_right"}}),n("ci-list-cell",{attrs:{title:"Bryan Cranston",text:"Bryan Cranston played the role of Walter in Breaking Bad. He is also known for playing.",extend_text:"important",extend_icon:"error_outline"}}),n("ci-list-cell",{attrs:{title:"Item Title",extend_icon:"ic_play_circle_outline"}})],1)],1)],1)},staticRenderFns:[]}},8:function(e,t,n){var i=n(10)(n(22),n(23),null,null,null);e.exports=i.exports}});