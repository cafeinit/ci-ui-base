webpackJsonp([5],{13:function(t,e){t.exports=function(t,e,i,n){var r,l=t=t||{},o=typeof t.default;"object"!==o&&"function"!==o||(r=t,l=t.default);var a="function"==typeof l?l.options:l;if(e&&(a.render=e.render,a.staticRenderFns=e.staticRenderFns),i&&(a._scopeId=i),n){var c=Object.create(a.computed||null);Object.keys(n).forEach(function(t){var e=n[t];c[t]=function(){return e}}),a.computed=c}return{esModule:r,exports:l,options:a}}},22:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"view-list"},[i("h2",{staticClass:"app-title"},[t._v("List")]),i("ci-list",[i("ci-list-header",{attrs:{title:"List Title","extend-text":"more"}}),i("ci-list-body",[i("ci-list-cell",{attrs:{image:"http://via.placeholder.com/96x96","image-width":"48","image-height":"48",title:"Item Title",text:"Some text here","extend-text":"detail","extend-icon":"chevron_right"}}),i("ci-list-cell",{attrs:{title:"Bryan Cranston",text:"Bryan Cranston played the role of Walter in Breaking Bad. He is also known for playing.","extend-text":"important","extend-icon":"error_outline"}}),i("ci-list-cell",{attrs:{title:"Item Title","extend-icon":"ic_play_circle_outline"}})],1)],1)],1)},staticRenderFns:[]}},34:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"view-list"}},9:function(t,e,i){var n=i(13)(i(34),i(22),null,null);t.exports=n.exports}});