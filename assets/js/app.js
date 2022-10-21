/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/Modal.js":
/*!*********************!*\
  !*** ./js/Modal.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ "./js/helper.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }


var CLASS_NAME_BODY_OPEN = 'modal-open';
var CLASS_NAME_OPEN = 'modal--open';
var CLASS_NAME_FADE = 'modal--fade';

var Modal = /*#__PURE__*/function () {
  function Modal() {
    _classCallCheck(this, Modal);

    this.body = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.findOne)('body');
    this.modals = [];
    this.onEvent();
  }

  _createClass(Modal, [{
    key: "open",
    value: function open(target) {
      if (!this.modals.length) {
        this.body.classList.add(CLASS_NAME_BODY_OPEN);
      }

      this.modals.push(target);
      target.classList.add(CLASS_NAME_OPEN);
      setTimeout(function () {
        return target.classList.add(CLASS_NAME_FADE);
      }, 0);
      return this;
    }
  }, {
    key: "close",
    value: function close(targetModal) {
      var index = this.modals.length - 1;

      if (targetModal) {
        index = this.modals.indexOf(targetModal);

        if (index === -1) {
          index = 0;
        }
      }

      var target = this.modals.splice(index, 1)[0];
      if (!target) return;
      target.classList.remove(CLASS_NAME_FADE, CLASS_NAME_OPEN);

      if (!this.modals.length) {
        this.body.classList.remove(CLASS_NAME_BODY_OPEN);
      }
    }
  }, {
    key: "onClose",
    value: function onClose(event) {
      var close = event.target.closest('.modal__close');

      if (close) {
        if (close.tagName === 'A') event.preventDefault();
        this.close();
      }
    }
  }, {
    key: "onEvent",
    value: function onEvent() {
      (0,_helper__WEBPACK_IMPORTED_MODULE_0__.on)(this.body, 'click', this.onClose.bind(this), false);
    }
  }, {
    key: "scrollWidth",
    get: function get() {
      return Math.abs(window.innerWidth - document.documentElement.clientWidth);
    }
  }]);

  return Modal;
}();

/* harmony default export */ __webpack_exports__["default"] = (Modal);

/***/ }),

/***/ "./js/Tab.js":
/*!*******************!*\
  !*** ./js/Tab.js ***!
  \*******************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ "./js/helper.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var Tab = /*#__PURE__*/function () {
  function Tab(element, callback) {
    _classCallCheck(this, Tab);

    this.element = element;
    this.menus = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.find)('.tab__menu', this.element);
    this.panels = this.menus.map(function (menu) {
      var panelId = menu.getAttribute('aria-controls');
      var panel = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.findOne)("#".concat(panelId));
      return panel;
    });
    this.current = 0;
    this.panelTimer = null;
    this.callback = callback;
    this.initEvents();
  }

  _createClass(Tab, [{
    key: "toggleTab",
    value: function toggleTab() {
      var _this = this;

      this.menus.forEach(function (menu, index) {
        if (_this.current === index) {
          menu.classList.add('tab__menu--active');
          menu.setAttribute('aria-selected', true);
        } else {
          menu.classList.remove('tab__menu--active');
          menu.setAttribute('aria-selected', false);
        }
      });
    }
  }, {
    key: "togglePanel",
    value: function togglePanel() {
      var _this2 = this;

      this.panels.forEach(function (panel, index) {
        if (_this2.current === index) {
          panel.classList.add('tab__panel--in');
          _this2.panelTimer && clearTimeout(_this2.panelTimer);
          _this2.panelTimer = setTimeout(function () {
            return panel.classList.add('tab__panel--active');
          }, 13);
        } else {
          panel.classList.remove('tab__panel--in', 'tab__panel--active');
        }
      });
    }
  }, {
    key: "toggle",
    value: function toggle() {
      this.toggleTab();
      this.togglePanel();
    }
  }, {
    key: "initEvents",
    value: function initEvents() {
      var _this3 = this;

      this.menus.forEach(function (menu, index) {
        (0,_helper__WEBPACK_IMPORTED_MODULE_0__.on)(menu, 'click', function (event) {
          event.preventDefault();
          _this3.current = index;

          _this3.toggle();

          _this3.callback && _this3.callback();
        });
      });
    }
  }]);

  return Tab;
}();

/* harmony default export */ __webpack_exports__["default"] = (Tab);

/***/ }),

/***/ "./js/helper.js":
/*!**********************!*\
  !*** ./js/helper.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "debounce": function() { return /* binding */ debounce; },
/* harmony export */   "delegate": function() { return /* binding */ delegate; },
/* harmony export */   "find": function() { return /* binding */ find; },
/* harmony export */   "findOne": function() { return /* binding */ findOne; },
/* harmony export */   "getOffset": function() { return /* binding */ getOffset; },
/* harmony export */   "off": function() { return /* binding */ off; },
/* harmony export */   "on": function() { return /* binding */ on; }
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var findOne = function findOne(selector) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return context.querySelector(selector);
};
var find = function find(selector) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return _toConsumableArray(context.querySelectorAll(selector));
};
var on = function on(target, type, callback) {
  var capture = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (!target || !target.addEventListener) return;
  target.addEventListener(type, callback, capture);
};
var off = function off(target, type, callback) {
  return target.removeEventListener(type, callback);
};
var delegate = function delegate(target, selector, type, handler, capture) {
  var dispatchEvent = function dispatchEvent(event) {
    var targetElement = event.target;
    var potentialElements = targetElement.closest(selector);

    if (potentialElements) {
      handler.call(potentialElements, event);
    }
  };

  on(target, type, dispatchEvent, !!capture);
};
var getOffset = function getOffset(element) {
  var rect = element.getBoundingClientRect();
  return {
    top: rect.top + window.scrollY,
    left: rect.left + window.scrollX
  };
};
var debounce = function debounce(func) {
  var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
  var inDebounce;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    inDebounce && clearTimeout(inDebounce);
    inDebounce = setTimeout(function () {
      return func.apply(void 0, args);
    }, wait);
  };
};

/***/ }),

/***/ "./js/pc/app.js":
/*!**********************!*\
  !*** ./js/pc/app.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var sal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sal.js */ "./node_modules/sal.js/dist/sal.js");
/* harmony import */ var sal_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sal_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helper */ "./js/helper.js");
/* harmony import */ var _Tab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Tab */ "./js/Tab.js");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Modal */ "./js/Modal.js");

swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination]);







gsap__WEBPACK_IMPORTED_MODULE_6__["default"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_7__["default"]);

var app = function app() {
  aos__WEBPACK_IMPORTED_MODULE_1___default().init({
    once: true
  }); // ScrollSpy

  (function () {
    var header = (0,_helper__WEBPACK_IMPORTED_MODULE_3__.findOne)('.header');
    var headerHeight = header.clientHeight;
    var links = (0,_helper__WEBPACK_IMPORTED_MODULE_3__.find)('.header__link', header);
    var sections = links.map(function (link) {
      return (0,_helper__WEBPACK_IMPORTED_MODULE_3__.findOne)(link.getAttribute('href'));
    });
    var sectionsStart = [];

    var getSectionsStart = function getSectionsStart() {
      return sections.forEach(function (section, index) {
        return sectionsStart[index] = ~~((0,_helper__WEBPACK_IMPORTED_MODULE_3__.getOffset)(section).top - headerHeight) + 5;
      });
    };

    var toggleLink = function toggleLink() {
      var scrollY = window.scrollY;
      var currentIndex = sectionsStart.length - 1;

      while (currentIndex) {
        if (scrollY >= sectionsStart[currentIndex]) break;
        currentIndex--;
      }

      links.forEach(function (link, index) {
        link.classList[index === currentIndex ? 'add' : 'remove']('header__link--active');
      });
    };

    var moveSection = function moveSection(index) {
      window.scroll({
        top: sectionsStart[index],
        behavior: 'smooth'
      });
    };

    getSectionsStart();
    links.forEach(function (link, index) {
      (0,_helper__WEBPACK_IMPORTED_MODULE_3__.on)(link, 'click', function (event) {
        event.preventDefault();
        moveSection(index);
        toggleLink();
      });
    });
    (0,_helper__WEBPACK_IMPORTED_MODULE_3__.on)(window, 'load', getSectionsStart);
    (0,_helper__WEBPACK_IMPORTED_MODULE_3__.on)(window, 'resize', getSectionsStart);
    (0,_helper__WEBPACK_IMPORTED_MODULE_3__.on)(window, 'scroll', toggleLink);
  })(); // Brand Film


  (function () {
    var brandFilm = (0,_helper__WEBPACK_IMPORTED_MODULE_3__.findOne)('.brand-film');
    var tab = new _Tab__WEBPACK_IMPORTED_MODULE_4__["default"]((0,_helper__WEBPACK_IMPORTED_MODULE_3__.findOne)('.tab', brandFilm));
    tab.menus[0].click();
    var brandFilmCarousel = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.brand-film .swiper', {
      slidesPerView: 'auto',
      spaceBetween: 50,
      centeredSlides: true,
      observer: true,
      observeParents: true,
      allowTouchMove: false,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
  })(); // WHY NOT ROAD


  (function () {
    // const iframes = find('.showroom-apps__content-swiper iframe');
    // //console.log(iframes)
    // let iframeSrc = [];
    // iframes.forEach((iframe) => {
    //     iframeSrc.push(iframe.src);
    // });
    var roadCarousel = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.road .swiper', {
      loop: true,
      slidesPerView: 'auto',
      centeredSlides: true,
      allowTouchMove: false,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      on: {}
    }); // const roadCarousel = new Swiper('.road .swiper', {
    //     loop: true,
    //     slidesPerView: 'auto',
    //     centeredSlides: true,
    //     allowTouchMove: false,
    //     navigation: {
    //         nextEl: ".swiper-button-next",
    //         prevEl: ".swiper-button-prev",
    //     },
    // });

    (function () {
      var modal = new _Modal__WEBPACK_IMPORTED_MODULE_5__["default"]();
      var triggers = (0,_helper__WEBPACK_IMPORTED_MODULE_3__.find)('.road__link');

      var getId = function getId(trigger) {
        return trigger.getAttribute('href');
      };

      var contents = triggers.reduce(function (contents, trigger) {
        var id = getId(trigger);
        var content = (0,_helper__WEBPACK_IMPORTED_MODULE_3__.findOne)(id);
        contents[id] = content;
        return contents;
      }, {});
      triggers.forEach(function (trigger) {
        (0,_helper__WEBPACK_IMPORTED_MODULE_3__.on)(trigger, 'click', function (event) {
          event.preventDefault();
          var id = getId(trigger);
          var content = contents[id];
          modal.open(content);
        });
      }); //triggers[4].click();
    })();
  })(); // WHY NOT CONTENTS


  (function () {
    var contents = (0,_helper__WEBPACK_IMPORTED_MODULE_3__.findOne)('.contents');
    var tab = new _Tab__WEBPACK_IMPORTED_MODULE_4__["default"]((0,_helper__WEBPACK_IMPORTED_MODULE_3__.findOne)('.tab', contents));
    tab.menus[0].click();
  })();
};

document.addEventListener('DOMContentLoaded', app);

/***/ }),

/***/ "./scss/pc/app.scss":
/*!**************************!*\
  !*** ./scss/pc/app.scss ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.nmd = function(module) {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["vendors"], function() { return __webpack_require__("./js/pc/app.js"); })
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], function() { return __webpack_require__("./scss/pc/app.scss"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQzdCQTtXQUNBO1dBQ0E7V0FDQSxlQUFlLDRCQUE0QjtXQUMzQyxlQUFlO1dBQ2YsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BELDhDQUE4Qzs7Ozs7V0NBOUM7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDSkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBLDhDQUE4Qzs7V0FFOUM7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxtQ0FBbUM7V0FDcEU7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztVRWxEQTtVQUNBO1VBQ0E7VUFDQSwyREFBMkQsK0NBQStDO1VBQzFHLHFGQUFxRixtREFBbUQ7VUFDeEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9Nb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9UYWIuanMiLCJ3ZWJwYWNrOi8vLy4vanMvaGVscGVyLmpzIiwid2VicGFjazovLy8uL2pzL3BjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zY3NzL3BjL2FwcC5zY3NzP2YzMzIiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbm9kZSBtb2R1bGUgZGVjb3JhdG9yIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly8vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly8vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovLy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtmaW5kT25lLCBvbn0gZnJvbSAnLi9oZWxwZXInO1xyXG5cclxuY29uc3QgQ0xBU1NfTkFNRV9CT0RZX09QRU4gPSAnbW9kYWwtb3Blbic7XHJcbmNvbnN0IENMQVNTX05BTUVfT1BFTiA9ICdtb2RhbC0tb3Blbic7XHJcbmNvbnN0IENMQVNTX05BTUVfRkFERSA9ICdtb2RhbC0tZmFkZSc7XHJcblxyXG5jb25zdCBNb2RhbCA9IGNsYXNzIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuYm9keSA9IGZpbmRPbmUoJ2JvZHknKTtcclxuXHJcbiAgICAgICAgdGhpcy5tb2RhbHMgPSBbXTtcclxuICAgICAgICB0aGlzLm9uRXZlbnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuKHRhcmdldCkge1xyXG4gICAgICAgIGlmICghdGhpcy5tb2RhbHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYm9keS5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQk9EWV9PUEVOKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubW9kYWxzLnB1c2godGFyZ2V0KTtcclxuICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX09QRU4pO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGFyZ2V0LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9GQURFKSwgMCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlKHRhcmdldE1vZGFsKSB7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5tb2RhbHMubGVuZ3RoIC0gMTtcclxuXHJcbiAgICAgICAgaWYgKHRhcmdldE1vZGFsKSB7XHJcbiAgICAgICAgICAgIGluZGV4ID0gdGhpcy5tb2RhbHMuaW5kZXhPZih0YXJnZXRNb2RhbCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBpbmRleCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IHRoaXMubW9kYWxzLnNwbGljZShpbmRleCwgMSlbMF07XHJcblxyXG4gICAgICAgIGlmICghdGFyZ2V0KSByZXR1cm47XHJcblxyXG4gICAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfRkFERSwgQ0xBU1NfTkFNRV9PUEVOKTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLm1vZGFscy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9CT0RZX09QRU4pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkNsb3NlKGV2ZW50KSB7XHJcbiAgICAgICAgY29uc3QgY2xvc2UgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLm1vZGFsX19jbG9zZScpO1xyXG5cclxuICAgICAgICBpZiAoY2xvc2UpIHtcclxuICAgICAgICAgICAgaWYgKGNsb3NlLnRhZ05hbWUgPT09ICdBJykgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25FdmVudCgpIHtcclxuICAgICAgICBvbih0aGlzLmJvZHksICdjbGljaycsIHRoaXMub25DbG9zZS5iaW5kKHRoaXMpLCBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNjcm9sbFdpZHRoKCkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmFicyh3aW5kb3cuaW5uZXJXaWR0aCAtIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb2RhbDsiLCJpbXBvcnQge2ZpbmRPbmUsIGZpbmQsIG9ufSBmcm9tICcuL2hlbHBlcic7XHJcblxyXG5jb25zdCBUYWIgPSBjbGFzcyB7XHJcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjYWxsYmFjaykge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5tZW51cyA9IGZpbmQoJy50YWJfX21lbnUnLCB0aGlzLmVsZW1lbnQpO1xyXG4gICAgICAgIHRoaXMucGFuZWxzID0gdGhpcy5tZW51cy5tYXAobWVudSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhbmVsSWQgPSBtZW51LmdldEF0dHJpYnV0ZSgnYXJpYS1jb250cm9scycpO1xyXG4gICAgICAgICAgICBjb25zdCBwYW5lbCA9IGZpbmRPbmUoYCMke3BhbmVsSWR9YCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcGFuZWw7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudCA9IDA7XHJcbiAgICAgICAgdGhpcy5wYW5lbFRpbWVyID0gbnVsbDtcclxuXHJcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xyXG5cclxuICAgICAgICB0aGlzLmluaXRFdmVudHMoKTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVUYWIoKSB7XHJcbiAgICAgICAgdGhpcy5tZW51cy5mb3JFYWNoKChtZW51LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50ID09PSBpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgbWVudS5jbGFzc0xpc3QuYWRkKCd0YWJfX21lbnUtLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgbWVudS5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCB0cnVlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgndGFiX19tZW51LS1hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIG1lbnUuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlUGFuZWwoKSB7XHJcbiAgICAgICAgdGhpcy5wYW5lbHMuZm9yRWFjaCgocGFuZWwsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnQgPT09IGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICBwYW5lbC5jbGFzc0xpc3QuYWRkKCd0YWJfX3BhbmVsLS1pbicpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYW5lbFRpbWVyICYmIGNsZWFyVGltZW91dCh0aGlzLnBhbmVsVGltZXIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYW5lbFRpbWVyID0gc2V0VGltZW91dCgoKSA9PiBwYW5lbC5jbGFzc0xpc3QuYWRkKCd0YWJfX3BhbmVsLS1hY3RpdmUnKSwgMTMpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcGFuZWwuY2xhc3NMaXN0LnJlbW92ZSgndGFiX19wYW5lbC0taW4nLCAndGFiX19wYW5lbC0tYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGUoKSB7XHJcbiAgICAgICAgdGhpcy50b2dnbGVUYWIoKTtcclxuICAgICAgICB0aGlzLnRvZ2dsZVBhbmVsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdEV2ZW50cygpIHtcclxuICAgICAgICB0aGlzLm1lbnVzLmZvckVhY2goKG1lbnUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIG9uKG1lbnUsICdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnQgPSBpbmRleDtcclxuICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWxsYmFjayAmJiB0aGlzLmNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFiOyIsImV4cG9ydCBjb25zdCBmaW5kT25lID0gKHNlbGVjdG9yLCBjb250ZXh0ID0gZG9jdW1lbnQpID0+IGNvbnRleHQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XHJcbmV4cG9ydCBjb25zdCBmaW5kID0gKHNlbGVjdG9yLCBjb250ZXh0ID0gZG9jdW1lbnQpID0+IFsuLi5jb250ZXh0LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpXTtcclxuXHJcbmV4cG9ydCBjb25zdCBvbiA9ICh0YXJnZXQsIHR5cGUsIGNhbGxiYWNrLCBjYXB0dXJlID0gZmFsc2UpID0+IHtcclxuICAgIGlmICghdGFyZ2V0IHx8ICF0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcikgcmV0dXJuO1xyXG5cclxuICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGNhbGxiYWNrLCBjYXB0dXJlKTtcclxufTtcclxuZXhwb3J0IGNvbnN0IG9mZiA9ICh0YXJnZXQsIHR5cGUsIGNhbGxiYWNrKSA9PiB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBjYWxsYmFjayk7XHJcbmV4cG9ydCBjb25zdCBkZWxlZ2F0ZSA9ICh0YXJnZXQsIHNlbGVjdG9yLCB0eXBlLCBoYW5kbGVyLCBjYXB0dXJlKSA9PiB7XHJcbiAgICBjb25zdCBkaXNwYXRjaEV2ZW50ID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0RWxlbWVudCA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICBjb25zdCBwb3RlbnRpYWxFbGVtZW50cyA9IHRhcmdldEVsZW1lbnQuY2xvc2VzdChzZWxlY3Rvcik7XHJcblxyXG4gICAgICAgIGlmIChwb3RlbnRpYWxFbGVtZW50cykge1xyXG4gICAgICAgICAgICBoYW5kbGVyLmNhbGwocG90ZW50aWFsRWxlbWVudHMsIGV2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIG9uKHRhcmdldCwgdHlwZSwgZGlzcGF0Y2hFdmVudCwgISFjYXB0dXJlKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRPZmZzZXQgPSAoZWxlbWVudCkgPT4ge1xyXG4gICAgY29uc3QgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0b3A6IHJlY3QudG9wICsgd2luZG93LnNjcm9sbFksXHJcbiAgICAgICAgbGVmdDogcmVjdC5sZWZ0ICsgd2luZG93LnNjcm9sbFhcclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZGVib3VuY2UgPSAoZnVuYywgd2FpdCA9IDMwMCkgPT4ge1xyXG4gICAgbGV0IGluRGVib3VuY2U7XHJcblxyXG4gICAgcmV0dXJuICguLi5hcmdzKSA9PiB7XHJcbiAgICAgICAgaW5EZWJvdW5jZSAmJiBjbGVhclRpbWVvdXQoaW5EZWJvdW5jZSk7XHJcbiAgICAgICAgaW5EZWJvdW5jZSA9IHNldFRpbWVvdXQoKCkgPT4gZnVuYyguLi5hcmdzKSwgd2FpdCk7XHJcbiAgICB9O1xyXG59OyIsImltcG9ydCBTd2lwZXIsIHtOYXZpZ2F0aW9uLCBQYWdpbmF0aW9uIH0gZnJvbSAnc3dpcGVyJztcclxuU3dpcGVyLnVzZShbTmF2aWdhdGlvbiwgUGFnaW5hdGlvbl0pO1xyXG5pbXBvcnQgQU9TIGZyb20gJ2Fvcyc7XHJcbmltcG9ydCBzYWwgZnJvbSAnc2FsLmpzJ1xyXG5pbXBvcnQgZ3NhcCBmcm9tICdnc2FwJztcclxuaW1wb3J0IFNjcm9sbFRyaWdnZXIgZnJvbSAnZ3NhcC9TY3JvbGxUcmlnZ2VyJztcclxuaW1wb3J0IHtmaW5kT25lLCBmaW5kLCBnZXRPZmZzZXQsIG9ufSBmcm9tICcuLi9oZWxwZXInO1xyXG5pbXBvcnQgVGFiIGZyb20gJy4uL1RhYic7XHJcbmltcG9ydCBNb2RhbCBmcm9tIFwiLi4vTW9kYWxcIjtcclxuXHJcbmdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVHJpZ2dlcik7XHJcblxyXG5jb25zdCBhcHAgPSAoKSA9PiB7XHJcbiAgICBBT1MuaW5pdCh7XHJcbiAgICAgICAgb25jZTogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gU2Nyb2xsU3B5XHJcbiAgICAoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGZpbmRPbmUoJy5oZWFkZXInKTtcclxuICAgICAgICBjb25zdCBoZWFkZXJIZWlnaHQgPSBoZWFkZXIuY2xpZW50SGVpZ2h0O1xyXG4gICAgICAgIGNvbnN0IGxpbmtzID0gZmluZCgnLmhlYWRlcl9fbGluaycsIGhlYWRlcik7XHJcbiAgICAgICAgY29uc3Qgc2VjdGlvbnMgPSBsaW5rcy5tYXAobGluayA9PiBmaW5kT25lKGxpbmsuZ2V0QXR0cmlidXRlKCdocmVmJykpKTtcclxuICAgICAgICBjb25zdCBzZWN0aW9uc1N0YXJ0ID0gW107XHJcbiAgICAgICAgY29uc3QgZ2V0U2VjdGlvbnNTdGFydCA9ICgpID0+IHNlY3Rpb25zLmZvckVhY2goKHNlY3Rpb24sIGluZGV4KSA9PiBzZWN0aW9uc1N0YXJ0W2luZGV4XSA9IH5+KGdldE9mZnNldChzZWN0aW9uKS50b3AgLSBoZWFkZXJIZWlnaHQpKzUpO1xyXG4gICAgICAgIGNvbnN0IHRvZ2dsZUxpbmsgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbFkgPSB3aW5kb3cuc2Nyb2xsWTtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRJbmRleCA9IHNlY3Rpb25zU3RhcnQubGVuZ3RoIC0gMTtcclxuXHJcbiAgICAgICAgICAgIHdoaWxlIChjdXJyZW50SW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzY3JvbGxZID49IHNlY3Rpb25zU3RhcnRbY3VycmVudEluZGV4XSkgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgY3VycmVudEluZGV4LS07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxpbmtzLmZvckVhY2goKGxpbmssIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsaW5rLmNsYXNzTGlzdFtpbmRleCA9PT0gY3VycmVudEluZGV4ID8gJ2FkZCcgOiAncmVtb3ZlJ10oJ2hlYWRlcl9fbGluay0tYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgbW92ZVNlY3Rpb24gPSAoaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgd2luZG93LnNjcm9sbCh7XHJcbiAgICAgICAgICAgICAgICB0b3A6IHNlY3Rpb25zU3RhcnRbaW5kZXhdLFxyXG4gICAgICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGdldFNlY3Rpb25zU3RhcnQoKTtcclxuXHJcbiAgICAgICAgbGlua3MuZm9yRWFjaCgobGluaywgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgb24obGluaywgJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgbW92ZVNlY3Rpb24oaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgdG9nZ2xlTGluaygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgb24od2luZG93LCAnbG9hZCcsIGdldFNlY3Rpb25zU3RhcnQpO1xyXG4gICAgICAgIG9uKHdpbmRvdywgJ3Jlc2l6ZScsIGdldFNlY3Rpb25zU3RhcnQpO1xyXG4gICAgICAgIG9uKHdpbmRvdywgJ3Njcm9sbCcsIHRvZ2dsZUxpbmspO1xyXG4gICAgfSkoKTtcclxuXHJcbiAgICAvLyBCcmFuZCBGaWxtXHJcbiAgICAoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGJyYW5kRmlsbSA9IGZpbmRPbmUoJy5icmFuZC1maWxtJyk7XHJcbiAgICAgICAgY29uc3QgdGFiID0gbmV3IFRhYihmaW5kT25lKCcudGFiJywgYnJhbmRGaWxtKSk7XHJcbiAgICAgICAgdGFiLm1lbnVzWzBdLmNsaWNrKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGJyYW5kRmlsbUNhcm91c2VsID0gbmV3IFN3aXBlcignLmJyYW5kLWZpbG0gLnN3aXBlcicsIHtcclxuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogJ2F1dG8nLFxyXG4gICAgICAgICAgICBzcGFjZUJldHdlZW46IDUwLFxyXG4gICAgICAgICAgICBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcclxuICAgICAgICAgICAgb2JzZXJ2ZXI6IHRydWUsXHJcbiAgICAgICAgICAgIG9ic2VydmVQYXJlbnRzOiB0cnVlLFxyXG4gICAgICAgICAgICBhbGxvd1RvdWNoTW92ZTogZmFsc2UsXHJcbiAgICAgICAgICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgICAgICAgICAgIG5leHRFbDogXCIuc3dpcGVyLWJ1dHRvbi1uZXh0XCIsXHJcbiAgICAgICAgICAgICAgICBwcmV2RWw6IFwiLnN3aXBlci1idXR0b24tcHJldlwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH0pKCk7XHJcblxyXG4gICAgLy8gV0hZIE5PVCBST0FEXHJcbiAgICAoKCkgPT4ge1xyXG4gICAgICAgIC8vIGNvbnN0IGlmcmFtZXMgPSBmaW5kKCcuc2hvd3Jvb20tYXBwc19fY29udGVudC1zd2lwZXIgaWZyYW1lJyk7XHJcbiAgICAgICAgLy8gLy9jb25zb2xlLmxvZyhpZnJhbWVzKVxyXG4gICAgICAgIC8vIGxldCBpZnJhbWVTcmMgPSBbXTtcclxuICAgICAgICAvLyBpZnJhbWVzLmZvckVhY2goKGlmcmFtZSkgPT4ge1xyXG4gICAgICAgIC8vICAgICBpZnJhbWVTcmMucHVzaChpZnJhbWUuc3JjKTtcclxuICAgICAgICAvLyB9KTtcclxuXHJcbiAgICAgICAgY29uc3Qgcm9hZENhcm91c2VsID0gbmV3IFN3aXBlcignLnJvYWQgLnN3aXBlcicsIHtcclxuICAgICAgICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogJ2F1dG8nLFxyXG4gICAgICAgICAgICBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcclxuICAgICAgICAgICAgYWxsb3dUb3VjaE1vdmU6IGZhbHNlLFxyXG4gICAgICAgICAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICBuZXh0RWw6IFwiLnN3aXBlci1idXR0b24tbmV4dFwiLFxyXG4gICAgICAgICAgICAgICAgcHJldkVsOiBcIi5zd2lwZXItYnV0dG9uLXByZXZcIixcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIG9uIDoge1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIC8vIGNvbnN0IHJvYWRDYXJvdXNlbCA9IG5ldyBTd2lwZXIoJy5yb2FkIC5zd2lwZXInLCB7XHJcbiAgICAgICAgLy8gICAgIGxvb3A6IHRydWUsXHJcbiAgICAgICAgLy8gICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcclxuICAgICAgICAvLyAgICAgY2VudGVyZWRTbGlkZXM6IHRydWUsXHJcbiAgICAgICAgLy8gICAgIGFsbG93VG91Y2hNb3ZlOiBmYWxzZSxcclxuICAgICAgICAvLyAgICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICAgIC8vICAgICAgICAgbmV4dEVsOiBcIi5zd2lwZXItYnV0dG9uLW5leHRcIixcclxuICAgICAgICAvLyAgICAgICAgIHByZXZFbDogXCIuc3dpcGVyLWJ1dHRvbi1wcmV2XCIsXHJcbiAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgLy8gfSk7XHJcblxyXG5cclxuICAgICAgICAoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBtb2RhbCA9IG5ldyBNb2RhbCgpO1xyXG4gICAgICAgICAgICBjb25zdCB0cmlnZ2VycyA9IGZpbmQoJy5yb2FkX19saW5rJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGdldElkID0gdHJpZ2dlciA9PiB0cmlnZ2VyLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xyXG4gICAgICAgICAgICBjb25zdCBjb250ZW50cyA9IHRyaWdnZXJzLnJlZHVjZSgoY29udGVudHMsIHRyaWdnZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gZ2V0SWQodHJpZ2dlcik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb250ZW50ID0gZmluZE9uZShpZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29udGVudHNbaWRdID0gY29udGVudDtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY29udGVudHM7XHJcbiAgICAgICAgICAgIH0sIHt9KTtcclxuXHJcbiAgICAgICAgICAgIHRyaWdnZXJzLmZvckVhY2goKHRyaWdnZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIG9uKHRyaWdnZXIsICdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gZ2V0SWQodHJpZ2dlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udGVudCA9IGNvbnRlbnRzW2lkXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbW9kYWwub3Blbihjb250ZW50KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vdHJpZ2dlcnNbNF0uY2xpY2soKTtcclxuICAgICAgICB9KSgpO1xyXG5cclxuICAgIH0pKCk7XHJcblxyXG4gICAgLy8gV0hZIE5PVCBDT05URU5UU1xyXG4gICAgKCgpID0+IHtcclxuICAgICAgICBjb25zdCBjb250ZW50cyA9IGZpbmRPbmUoJy5jb250ZW50cycpO1xyXG4gICAgICAgIGNvbnN0IHRhYiA9IG5ldyBUYWIoZmluZE9uZSgnLnRhYicsIGNvbnRlbnRzKSk7XHJcbiAgICAgICAgdGFiLm1lbnVzWzBdLmNsaWNrKCk7XHJcbiAgICB9KSgpO1xyXG5cclxuXHJcbn07XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgYXBwKTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHRsb2FkZWQ6IGZhbHNlLFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcblx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSBmdW5jdGlvbihyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpIHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGNodW5rSWRzID0gZGVmZXJyZWRbaV1bMF07XG5cdFx0dmFyIGZuID0gZGVmZXJyZWRbaV1bMV07XG5cdFx0dmFyIHByaW9yaXR5ID0gZGVmZXJyZWRbaV1bMl07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pOyB9KSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGU7IH07XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ubWQgPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0bW9kdWxlLnBhdGhzID0gW107XG5cdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0cmV0dXJuIG1vZHVsZTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiYXBwXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gZnVuY3Rpb24oY2h1bmtJZCkgeyByZXR1cm4gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwOyB9O1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IGZ1bmN0aW9uKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSB7XG5cdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG5cdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG5cdHZhciBydW50aW1lID0gZGF0YVsyXTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKGZ1bmN0aW9uKGlkKSB7IHJldHVybiBpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwOyB9KSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtcIl0gPSBzZWxmW1wid2VicGFja0NodW5rXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxuX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9yc1wiXSwgZnVuY3Rpb24oKSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9qcy9wYy9hcHAuanNcIik7IH0pXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvcnNcIl0sIGZ1bmN0aW9uKCkgeyByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc2Nzcy9wYy9hcHAuc2Nzc1wiKTsgfSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOlsiZmluZE9uZSIsIm9uIiwiQ0xBU1NfTkFNRV9CT0RZX09QRU4iLCJDTEFTU19OQU1FX09QRU4iLCJDTEFTU19OQU1FX0ZBREUiLCJNb2RhbCIsImJvZHkiLCJtb2RhbHMiLCJvbkV2ZW50IiwidGFyZ2V0IiwibGVuZ3RoIiwiY2xhc3NMaXN0IiwiYWRkIiwicHVzaCIsInNldFRpbWVvdXQiLCJ0YXJnZXRNb2RhbCIsImluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsInJlbW92ZSIsImV2ZW50IiwiY2xvc2UiLCJjbG9zZXN0IiwidGFnTmFtZSIsInByZXZlbnREZWZhdWx0Iiwib25DbG9zZSIsImJpbmQiLCJNYXRoIiwiYWJzIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50V2lkdGgiLCJmaW5kIiwiVGFiIiwiZWxlbWVudCIsImNhbGxiYWNrIiwibWVudXMiLCJwYW5lbHMiLCJtYXAiLCJtZW51IiwicGFuZWxJZCIsImdldEF0dHJpYnV0ZSIsInBhbmVsIiwiY3VycmVudCIsInBhbmVsVGltZXIiLCJpbml0RXZlbnRzIiwiZm9yRWFjaCIsInNldEF0dHJpYnV0ZSIsImNsZWFyVGltZW91dCIsInRvZ2dsZVRhYiIsInRvZ2dsZVBhbmVsIiwidG9nZ2xlIiwic2VsZWN0b3IiLCJjb250ZXh0IiwicXVlcnlTZWxlY3RvciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ0eXBlIiwiY2FwdHVyZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJvZmYiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGVsZWdhdGUiLCJoYW5kbGVyIiwiZGlzcGF0Y2hFdmVudCIsInRhcmdldEVsZW1lbnQiLCJwb3RlbnRpYWxFbGVtZW50cyIsImNhbGwiLCJnZXRPZmZzZXQiLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwic2Nyb2xsWSIsImxlZnQiLCJzY3JvbGxYIiwiZGVib3VuY2UiLCJmdW5jIiwid2FpdCIsImluRGVib3VuY2UiLCJhcmdzIiwiU3dpcGVyIiwiTmF2aWdhdGlvbiIsIlBhZ2luYXRpb24iLCJ1c2UiLCJBT1MiLCJzYWwiLCJnc2FwIiwiU2Nyb2xsVHJpZ2dlciIsInJlZ2lzdGVyUGx1Z2luIiwiYXBwIiwiaW5pdCIsIm9uY2UiLCJoZWFkZXIiLCJoZWFkZXJIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJsaW5rcyIsInNlY3Rpb25zIiwibGluayIsInNlY3Rpb25zU3RhcnQiLCJnZXRTZWN0aW9uc1N0YXJ0Iiwic2VjdGlvbiIsInRvZ2dsZUxpbmsiLCJjdXJyZW50SW5kZXgiLCJtb3ZlU2VjdGlvbiIsInNjcm9sbCIsImJlaGF2aW9yIiwiYnJhbmRGaWxtIiwidGFiIiwiY2xpY2siLCJicmFuZEZpbG1DYXJvdXNlbCIsInNsaWRlc1BlclZpZXciLCJzcGFjZUJldHdlZW4iLCJjZW50ZXJlZFNsaWRlcyIsIm9ic2VydmVyIiwib2JzZXJ2ZVBhcmVudHMiLCJhbGxvd1RvdWNoTW92ZSIsIm5hdmlnYXRpb24iLCJuZXh0RWwiLCJwcmV2RWwiLCJyb2FkQ2Fyb3VzZWwiLCJsb29wIiwibW9kYWwiLCJ0cmlnZ2VycyIsImdldElkIiwidHJpZ2dlciIsImNvbnRlbnRzIiwicmVkdWNlIiwiaWQiLCJjb250ZW50Iiwib3BlbiJdLCJzb3VyY2VSb290IjoiIn0=