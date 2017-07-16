var CIUIBase =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(10),
  /* template */
  __webpack_require__(14),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\Users\\iburn.DESKTOP-OLFUPN1\\CafeInit\\ci-ui-base\\src\\vue\\CIMedia.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] CIMedia.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-56982eec", Component.options)
  } else {
    hotAPI.reload("data-v-56982eec", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(6),
  /* template */
  __webpack_require__(15),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\Users\\iburn.DESKTOP-OLFUPN1\\CafeInit\\ci-ui-base\\src\\vue\\CIBlock\\CIBlock.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] CIBlock.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5d8e76cd", Component.options)
  } else {
    hotAPI.reload("data-v-5d8e76cd", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(7),
  /* template */
  __webpack_require__(11),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\Users\\iburn.DESKTOP-OLFUPN1\\CafeInit\\ci-ui-base\\src\\vue\\CIBlock\\CIBlockBody.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] CIBlockBody.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0026510f", Component.options)
  } else {
    hotAPI.reload("data-v-0026510f", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(8),
  /* template */
  __webpack_require__(12),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\Users\\iburn.DESKTOP-OLFUPN1\\CafeInit\\ci-ui-base\\src\\vue\\CIBlock\\CIBlockFooter.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] CIBlockFooter.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2cac0748", Component.options)
  } else {
    hotAPI.reload("data-v-2cac0748", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(9),
  /* template */
  __webpack_require__(13),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\Users\\iburn.DESKTOP-OLFUPN1\\CafeInit\\ci-ui-base\\src\\vue\\CIBlock\\CIBlockHeader.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] CIBlockHeader.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4dde6b3a", Component.options)
  } else {
    hotAPI.reload("data-v-4dde6b3a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//

/**
 * @fileoverview CIBlock
 * @author burning (www.cafeinit.com)
 * @version 2017.07.16
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ci-block',

  props: {
    border: {
      type: String,
      default: ''
    },

    radius: {
      type: String,
      default: ''
    },

    raised: {
      type: String,
      default: ''
    }
  },

  computed: {
    class_name: function class_name() {
      return {
        'ci-block_border': this.border,
        'ci-block_radius': this.radius,
        'ci-block_raised': this.raised
      };
    }
  }
});

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//

/**
 * @fileoverview CIBlockBody
 * @author burning (www.cafeinit.com)
 * @version 2017.07.16
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ci-block-body'
});

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//

/**
 * @fileoverview CIBlockFooter
 * @author burning (www.cafeinit.com)
 * @version 2017.07.16
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ci-block-footer'
});

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CIMedia_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CIMedia_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__CIMedia_vue__);
//
//
//
//
//

/**
 * @fileoverview CIBlockHeader
 * @author burning (www.cafeinit.com)
 * @version 2017.07.16
 */



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ci-block-header',

  components: {
    'ci-media': __WEBPACK_IMPORTED_MODULE_0__CIMedia_vue___default.a
  },

  props: {
    title: {
      type: String,
      default: ''
    },

    extend: {
      type: String,
      default: ''
    }
  }
});

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ci-media',

  props: {
    image: {
      type: Object,
      default: function _default() {
        return null;
      }
    },

    title: {
      type: String,
      default: ''
    },

    text: {
      type: String,
      default: ''
    },

    extend: {
      type: String,
      default: ''
    }
  }
});

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "ci-block__body"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-0026510f", module.exports)
  }
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "ci-block__footer"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-2cac0748", module.exports)
  }
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "ci-block__header"
  }, [_c('ci-media', {
    attrs: {
      "title": _vm.title,
      "extend": _vm.extend
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-4dde6b3a", module.exports)
  }
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "ci-media"
  }, [(_vm.image) ? _c('div', {
    staticClass: "ci-media__image"
  }, [_c('img', {
    attrs: {
      "src": _vm.image.src,
      "width": "100%"
    }
  })]) : _vm._e(), _c('div', {
    staticClass: "ci-media__content"
  }, [(_vm.title) ? _c('h4', {
    staticClass: "ci-media__title"
  }, [_vm._v(_vm._s(_vm.title))]) : _vm._e(), (_vm.text) ? _c('p', {
    staticClass: "ci-media__text"
  }, [_vm._v(_vm._s(_vm.text))]) : _vm._e()]), (_vm.extend) ? _c('div', {
    staticClass: "ci-media__extend"
  }, [_vm._v(_vm._s(_vm.extend))]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-56982eec", module.exports)
  }
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "ci-block",
    class: _vm.class_name
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-5d8e76cd", module.exports)
  }
}

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CIBlock_CIBlock_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CIBlock_CIBlock_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__CIBlock_CIBlock_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CIBlock_CIBlockBody_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CIBlock_CIBlockBody_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__CIBlock_CIBlockBody_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CIBlock_CIBlockFooter_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CIBlock_CIBlockFooter_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__CIBlock_CIBlockFooter_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__CIBlock_CIBlockHeader_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__CIBlock_CIBlockHeader_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__CIBlock_CIBlockHeader_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__CIMedia_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__CIMedia_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__CIMedia_vue__);
/**
 * @fileoverview index
 * @author burning (www.cafeinit.com)
 * @version 2017.07.16
 */








const CIUIBase = {
  CIBlock: __WEBPACK_IMPORTED_MODULE_0__CIBlock_CIBlock_vue___default.a,
  CIBlockBody: __WEBPACK_IMPORTED_MODULE_1__CIBlock_CIBlockBody_vue___default.a,
  CIBlockFooter: __WEBPACK_IMPORTED_MODULE_2__CIBlock_CIBlockFooter_vue___default.a,
  CIBlockHeader: __WEBPACK_IMPORTED_MODULE_3__CIBlock_CIBlockHeader_vue___default.a,
  CIMedia: __WEBPACK_IMPORTED_MODULE_4__CIMedia_vue___default.a
}

CIUIBase.plugin = plugin

if (window.Vue) {
  Vue.use(plugin)
}

/* harmony default export */ __webpack_exports__["default"] = (CIUIBase);

function plugin(Vue) {
  for (let key in CIUIBase) {
    Vue.component(CIUIBase[key].name, CIUIBase[key])
  }
}


/***/ })
/******/ ]);