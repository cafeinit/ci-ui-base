webpackJsonp([4],{11:function(e,t){e.exports=function(e,t,n,i,r){var o,s=e=e||{},l=typeof e.default;"object"!==l&&"function"!==l||(o=e,s=e.default);var a="function"==typeof s?s.options:s;t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),i&&(a._scopeId=i);var c;if(r?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},a._ssrRegister=c):n&&(c=n),c){var d=a.functional,p=d?a.render:a.beforeCreate;d?a.render=function(e,t){return c.call(t),p(e,t)}:a.beforeCreate=p?[].concat(p,c):[c]}return{esModule:o,exports:s,options:a}}},27:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"view-list"}},28:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"view-list"},[n("h2",{staticClass:"app-title"},[e._v("List")]),n("ci-list",[n("ci-list-header",{attrs:{title:"List Title","extend-text":"more"}}),n("ci-list-body",[n("ci-list-cell",{attrs:{image:"http://via.placeholder.com/96x96","image-width":"48","image-height":"48",title:"Item Title",text:"Some text here","extend-text":"detail","extend-icon":"chevron_right"}}),n("ci-list-cell",{attrs:{title:"Bryan Cranston",text:"Bryan Cranston played the role of Walter in Breaking Bad. He is also known for playing.","extend-text":"important","extend-icon":"error_outline"}}),n("ci-list-cell",{attrs:{title:"Item Title","extend-icon":"ic_play_circle_outline"}})],1)],1)],1)},staticRenderFns:[]}},9:function(e,t,n){var i=n(11)(n(27),n(28),null,null,null);e.exports=i.exports}});