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

/***/ "./js/mobile/app.js":
/*!**************************!*\
  !*** ./js/mobile/app.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var sal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sal.js */ "./node_modules/sal.js/dist/sal.js");
/* harmony import */ var sal_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sal_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helper */ "./js/helper.js");
/* harmony import */ var _Tab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Tab */ "./js/Tab.js");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Modal */ "./js/Modal.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! events */ "./node_modules/events/events.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_6__);

swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination]);








gsap__WEBPACK_IMPORTED_MODULE_7__["default"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_8__["default"]);

var app = function app() {
  aos__WEBPACK_IMPORTED_MODULE_1___default().init({
    once: true
  }); //header

  (function () {
    var siteHeader = (0,_helper__WEBPACK_IMPORTED_MODULE_3__.findOne)('header');
    var headerHeight = siteHeader.clientHeight;
    var siteMenu = (0,_helper__WEBPACK_IMPORTED_MODULE_3__.findOne)('.header-menu__button', siteHeader);
    var siteMenuItems = (0,_helper__WEBPACK_IMPORTED_MODULE_3__.find)('.header-menu__link', siteHeader);
    var sections = siteMenuItems.map(function (link) {
      return (0,_helper__WEBPACK_IMPORTED_MODULE_3__.findOne)(link.getAttribute('href'));
    });
    var sectionsStart = [];

    var getSectionsStart = function getSectionsStart() {
      return sections.forEach(function (section, index) {
        return sectionsStart[index] = ~~((0,_helper__WEBPACK_IMPORTED_MODULE_3__.getOffset)(section).top - headerHeight) + 1;
      });
    };

    var moveSection = function moveSection(index) {
      window.scroll({
        top: sectionsStart[index],
        behavior: 'smooth'
      });
    }; //header fixed


    var changeHeader = function changeHeader() {
      siteHeader.classList[window.pageYOffset >= siteHeader.offsetHeight ? 'add' : 'remove']('fixed');
    };

    (0,_helper__WEBPACK_IMPORTED_MODULE_3__.on)(window, 'scroll', changeHeader); //메뉴 open,close

    siteMenu.addEventListener('click', function (event) {
      event.preventDefault();

      if (siteHeader.classList.contains('header-menu--open')) {
        siteHeader.classList.remove('header-menu--open');
        siteHeader.classList.remove('fixed');
      } else {
        siteHeader.classList.add('header-menu--open');
        siteHeader.classList.add('fixed');
      }
    });
    getSectionsStart();
    siteMenuItems.forEach(function (siteMenuItem, index) {
      siteMenuItem.addEventListener("click", function (event) {
        event.preventDefault();
        siteHeader.classList.remove('header-menu--open');
        moveSection(index);
      });
    });
    (0,_helper__WEBPACK_IMPORTED_MODULE_3__.on)(window, 'load', getSectionsStart);
    (0,_helper__WEBPACK_IMPORTED_MODULE_3__.on)(window, 'resize', getSectionsStart);
  })(); // Brand Film


  (function () {
    var brandFilm = (0,_helper__WEBPACK_IMPORTED_MODULE_3__.findOne)('.brand-film');
    var tab = new _Tab__WEBPACK_IMPORTED_MODULE_4__["default"]((0,_helper__WEBPACK_IMPORTED_MODULE_3__.findOne)('.tab', brandFilm));
    tab.menus[0].click();
    var brandFilmCarousel = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.brand-film .swiper', {
      slidesPerView: 'auto',
      spaceBetween: 10,
      observer: true,
      observeParents: true
    });
  })(); // WHY NOT ROAD


  (function () {
    var road = (0,_helper__WEBPACK_IMPORTED_MODULE_3__.findOne)('.road');
    var carouselWrap = (0,_helper__WEBPACK_IMPORTED_MODULE_3__.findOne)('.road__carousel_1 .swiper', road);
    var carouselWrap2 = (0,_helper__WEBPACK_IMPORTED_MODULE_3__.findOne)('.road__carousel_2 .swiper', road);
    var carouselPagination = (0,_helper__WEBPACK_IMPORTED_MODULE_3__.findOne)('.swiper-pagination', road);
    var carouselPaginationMenus = (0,_helper__WEBPACK_IMPORTED_MODULE_3__.find)('p', carouselWrap).map(function (menu) {
      return menu.innerText;
    });
    var roadCarousel = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](carouselWrap, {
      loop: true,
      slidesPerView: 'auto',
      loopAdditionalSlides: '5',
      loopedSlides: '5',
      spaceBetween: 10,
      pagination: {
        el: carouselPagination,
        clickable: true,
        renderBullet: function renderBullet(index, className) {
          return "<div class=\"".concat(className, "\">").concat(carouselPaginationMenus[index], "</div>");
        }
      }
    });
    var roadCarousel2 = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](carouselWrap2, {
      // loop: true,
      slidesPerView: "auto",
      centeredSlides: true,
      allowTouchMove: false,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });

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
      }); // triggers[3].click();
    })();
  })(); // WHY NOT CONTENTS


  (function () {
    var contents = (0,_helper__WEBPACK_IMPORTED_MODULE_3__.findOne)('.contents');
    var carouselWrap = (0,_helper__WEBPACK_IMPORTED_MODULE_3__.findOne)('.swiper', contents);
    var carouselPagination = (0,_helper__WEBPACK_IMPORTED_MODULE_3__.findOne)('.swiper-pagination', contents);
    var carouselPaginationMenus = (0,_helper__WEBPACK_IMPORTED_MODULE_3__.find)('[data-pagination-name]', contents).map(function (menu) {
      return menu.dataset.paginationName;
    });
    var contentCarousel = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](carouselWrap, {
      loop: true,
      slidesPerView: 'auto',
      loopAdditionalSlides: '5',
      spaceBetween: 10,
      pagination: {
        el: carouselPagination,
        clickable: true,
        renderBullet: function renderBullet(index, className) {
          return "<div class=\"".concat(className, "\">").concat(carouselPaginationMenus[index], "</div>");
        }
      }
    });
  })();
};

document.addEventListener('DOMContentLoaded', app);

/***/ }),

/***/ "./scss/mobile/app.scss":
/*!******************************!*\
  !*** ./scss/mobile/app.scss ***!
  \******************************/
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
/******/ 	__webpack_require__.O(undefined, ["vendors"], function() { return __webpack_require__("./js/mobile/app.js"); })
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], function() { return __webpack_require__("./scss/mobile/app.scss"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztVRWxEQTtVQUNBO1VBQ0E7VUFDQSwyREFBMkQsbURBQW1EO1VBQzlHLHFGQUFxRix1REFBdUQ7VUFDNUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9Nb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9UYWIuanMiLCJ3ZWJwYWNrOi8vLy4vanMvaGVscGVyLmpzIiwid2VicGFjazovLy8uL2pzL21vYmlsZS9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc2Nzcy9tb2JpbGUvYXBwLnNjc3M/ZTI1NSIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9ub2RlIG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovLy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovLy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2ZpbmRPbmUsIG9ufSBmcm9tICcuL2hlbHBlcic7XHJcblxyXG5jb25zdCBDTEFTU19OQU1FX0JPRFlfT1BFTiA9ICdtb2RhbC1vcGVuJztcclxuY29uc3QgQ0xBU1NfTkFNRV9PUEVOID0gJ21vZGFsLS1vcGVuJztcclxuY29uc3QgQ0xBU1NfTkFNRV9GQURFID0gJ21vZGFsLS1mYWRlJztcclxuXHJcbmNvbnN0IE1vZGFsID0gY2xhc3Mge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5ib2R5ID0gZmluZE9uZSgnYm9keScpO1xyXG5cclxuICAgICAgICB0aGlzLm1vZGFscyA9IFtdO1xyXG4gICAgICAgIHRoaXMub25FdmVudCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW4odGFyZ2V0KSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm1vZGFscy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5ib2R5LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9CT0RZX09QRU4pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5tb2RhbHMucHVzaCh0YXJnZXQpO1xyXG4gICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfT1BFTik7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0YXJnZXQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0ZBREUpLCAwKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2UodGFyZ2V0TW9kYWwpIHtcclxuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLm1vZGFscy5sZW5ndGggLSAxO1xyXG5cclxuICAgICAgICBpZiAodGFyZ2V0TW9kYWwpIHtcclxuICAgICAgICAgICAgaW5kZXggPSB0aGlzLm1vZGFscy5pbmRleE9mKHRhcmdldE1vZGFsKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIGluZGV4ID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5tb2RhbHMuc3BsaWNlKGluZGV4LCAxKVswXTtcclxuXHJcbiAgICAgICAgaWYgKCF0YXJnZXQpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9GQURFLCBDTEFTU19OQU1FX09QRU4pO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMubW9kYWxzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLmJvZHkuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0JPRFlfT1BFTik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xvc2UoZXZlbnQpIHtcclxuICAgICAgICBjb25zdCBjbG9zZSA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcubW9kYWxfX2Nsb3NlJyk7XHJcblxyXG4gICAgICAgIGlmIChjbG9zZSkge1xyXG4gICAgICAgICAgICBpZiAoY2xvc2UudGFnTmFtZSA9PT0gJ0EnKSBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkV2ZW50KCkge1xyXG4gICAgICAgIG9uKHRoaXMuYm9keSwgJ2NsaWNrJywgdGhpcy5vbkNsb3NlLmJpbmQodGhpcyksIGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc2Nyb2xsV2lkdGgoKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguYWJzKHdpbmRvdy5pbm5lcldpZHRoIC0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoKTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vZGFsOyIsImltcG9ydCB7ZmluZE9uZSwgZmluZCwgb259IGZyb20gJy4vaGVscGVyJztcclxuXHJcbmNvbnN0IFRhYiA9IGNsYXNzIHtcclxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuICAgICAgICB0aGlzLm1lbnVzID0gZmluZCgnLnRhYl9fbWVudScsIHRoaXMuZWxlbWVudCk7XHJcbiAgICAgICAgdGhpcy5wYW5lbHMgPSB0aGlzLm1lbnVzLm1hcChtZW51ID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcGFuZWxJZCA9IG1lbnUuZ2V0QXR0cmlidXRlKCdhcmlhLWNvbnRyb2xzJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhbmVsID0gZmluZE9uZShgIyR7cGFuZWxJZH1gKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBwYW5lbDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gMDtcclxuICAgICAgICB0aGlzLnBhbmVsVGltZXIgPSBudWxsO1xyXG5cclxuICAgICAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdEV2ZW50cygpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZVRhYigpIHtcclxuICAgICAgICB0aGlzLm1lbnVzLmZvckVhY2goKG1lbnUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnQgPT09IGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ3RhYl9fbWVudS0tYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICBtZW51LnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsIHRydWUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKCd0YWJfX21lbnUtLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgbWVudS5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVQYW5lbCgpIHtcclxuICAgICAgICB0aGlzLnBhbmVscy5mb3JFYWNoKChwYW5lbCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudCA9PT0gaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIHBhbmVsLmNsYXNzTGlzdC5hZGQoJ3RhYl9fcGFuZWwtLWluJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhbmVsVGltZXIgJiYgY2xlYXJUaW1lb3V0KHRoaXMucGFuZWxUaW1lcik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhbmVsVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHBhbmVsLmNsYXNzTGlzdC5hZGQoJ3RhYl9fcGFuZWwtLWFjdGl2ZScpLCAxMyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwYW5lbC5jbGFzc0xpc3QucmVtb3ZlKCd0YWJfX3BhbmVsLS1pbicsICd0YWJfX3BhbmVsLS1hY3RpdmUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZSgpIHtcclxuICAgICAgICB0aGlzLnRvZ2dsZVRhYigpO1xyXG4gICAgICAgIHRoaXMudG9nZ2xlUGFuZWwoKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0RXZlbnRzKCkge1xyXG4gICAgICAgIHRoaXMubWVudXMuZm9yRWFjaCgobWVudSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgb24obWVudSwgJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudCA9IGluZGV4O1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGxiYWNrICYmIHRoaXMuY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYWI7IiwiZXhwb3J0IGNvbnN0IGZpbmRPbmUgPSAoc2VsZWN0b3IsIGNvbnRleHQgPSBkb2N1bWVudCkgPT4gY29udGV4dC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcclxuZXhwb3J0IGNvbnN0IGZpbmQgPSAoc2VsZWN0b3IsIGNvbnRleHQgPSBkb2N1bWVudCkgPT4gWy4uLmNvbnRleHQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcildO1xyXG5cclxuZXhwb3J0IGNvbnN0IG9uID0gKHRhcmdldCwgdHlwZSwgY2FsbGJhY2ssIGNhcHR1cmUgPSBmYWxzZSkgPT4ge1xyXG4gICAgaWYgKCF0YXJnZXQgfHwgIXRhcmdldC5hZGRFdmVudExpc3RlbmVyKSByZXR1cm47XHJcblxyXG4gICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgY2FsbGJhY2ssIGNhcHR1cmUpO1xyXG59O1xyXG5leHBvcnQgY29uc3Qgb2ZmID0gKHRhcmdldCwgdHlwZSwgY2FsbGJhY2spID0+IHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGNhbGxiYWNrKTtcclxuZXhwb3J0IGNvbnN0IGRlbGVnYXRlID0gKHRhcmdldCwgc2VsZWN0b3IsIHR5cGUsIGhhbmRsZXIsIGNhcHR1cmUpID0+IHtcclxuICAgIGNvbnN0IGRpc3BhdGNoRXZlbnQgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCB0YXJnZXRFbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgIGNvbnN0IHBvdGVudGlhbEVsZW1lbnRzID0gdGFyZ2V0RWxlbWVudC5jbG9zZXN0KHNlbGVjdG9yKTtcclxuXHJcbiAgICAgICAgaWYgKHBvdGVudGlhbEVsZW1lbnRzKSB7XHJcbiAgICAgICAgICAgIGhhbmRsZXIuY2FsbChwb3RlbnRpYWxFbGVtZW50cywgZXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgb24odGFyZ2V0LCB0eXBlLCBkaXNwYXRjaEV2ZW50LCAhIWNhcHR1cmUpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldE9mZnNldCA9IChlbGVtZW50KSA9PiB7XHJcbiAgICBjb25zdCByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHRvcDogcmVjdC50b3AgKyB3aW5kb3cuc2Nyb2xsWSxcclxuICAgICAgICBsZWZ0OiByZWN0LmxlZnQgKyB3aW5kb3cuc2Nyb2xsWFxyXG4gICAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkZWJvdW5jZSA9IChmdW5jLCB3YWl0ID0gMzAwKSA9PiB7XHJcbiAgICBsZXQgaW5EZWJvdW5jZTtcclxuXHJcbiAgICByZXR1cm4gKC4uLmFyZ3MpID0+IHtcclxuICAgICAgICBpbkRlYm91bmNlICYmIGNsZWFyVGltZW91dChpbkRlYm91bmNlKTtcclxuICAgICAgICBpbkRlYm91bmNlID0gc2V0VGltZW91dCgoKSA9PiBmdW5jKC4uLmFyZ3MpLCB3YWl0KTtcclxuICAgIH07XHJcbn07IiwiaW1wb3J0IFN3aXBlciwge05hdmlnYXRpb24sIFBhZ2luYXRpb24gfSBmcm9tICdzd2lwZXInO1xyXG5Td2lwZXIudXNlKFtOYXZpZ2F0aW9uLCBQYWdpbmF0aW9uXSk7XHJcbmltcG9ydCBBT1MgZnJvbSAnYW9zJztcclxuaW1wb3J0IHNhbCBmcm9tICdzYWwuanMnXHJcbmltcG9ydCBnc2FwIGZyb20gJ2dzYXAnO1xyXG5pbXBvcnQgU2Nyb2xsVHJpZ2dlciBmcm9tICdnc2FwL1Njcm9sbFRyaWdnZXInO1xyXG5pbXBvcnQge2ZpbmRPbmUsIGZpbmQsIGdldE9mZnNldCwgb259IGZyb20gJy4uL2hlbHBlcic7XHJcbmltcG9ydCBUYWIgZnJvbSAnLi4vVGFiJztcclxuaW1wb3J0IE1vZGFsIGZyb20gXCIuLi9Nb2RhbFwiO1xyXG5pbXBvcnQgKiBhcyBldmVudHMgZnJvbSBcImV2ZW50c1wiO1xyXG5cclxuZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUcmlnZ2VyKTtcclxuXHJcbmNvbnN0IGFwcCA9ICgpID0+IHtcclxuICAgIEFPUy5pbml0KHtcclxuICAgICAgICBvbmNlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICAvL2hlYWRlclxyXG4gICAgKCgpID0+IHtcclxuICAgICAgICBjb25zdCBzaXRlSGVhZGVyICA9IGZpbmRPbmUoJ2hlYWRlcicpO1xyXG4gICAgICAgIGNvbnN0IGhlYWRlckhlaWdodCA9IHNpdGVIZWFkZXIuY2xpZW50SGVpZ2h0O1xyXG4gICAgICAgIGNvbnN0IHNpdGVNZW51ID0gZmluZE9uZSgnLmhlYWRlci1tZW51X19idXR0b24nLCBzaXRlSGVhZGVyKTtcclxuICAgICAgICBjb25zdCBzaXRlTWVudUl0ZW1zID0gZmluZCgnLmhlYWRlci1tZW51X19saW5rJywgc2l0ZUhlYWRlcik7XHJcbiAgICAgICAgY29uc3Qgc2VjdGlvbnMgPSBzaXRlTWVudUl0ZW1zLm1hcChsaW5rID0+IGZpbmRPbmUobGluay5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSkpO1xyXG4gICAgICAgIGNvbnN0IHNlY3Rpb25zU3RhcnQgPSBbXTtcclxuICAgICAgICBjb25zdCBnZXRTZWN0aW9uc1N0YXJ0ID0gKCkgPT4gc2VjdGlvbnMuZm9yRWFjaCgoc2VjdGlvbiwgaW5kZXgpID0+IHNlY3Rpb25zU3RhcnRbaW5kZXhdID0gfn4oZ2V0T2Zmc2V0KHNlY3Rpb24pLnRvcCAtIGhlYWRlckhlaWdodCkrMSk7XHJcblxyXG4gICAgICAgIGNvbnN0IG1vdmVTZWN0aW9uID0gKGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGwoe1xyXG4gICAgICAgICAgICAgICAgdG9wOiBzZWN0aW9uc1N0YXJ0W2luZGV4XSxcclxuICAgICAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvL2hlYWRlciBmaXhlZFxyXG4gICAgICAgIGNvbnN0IGNoYW5nZUhlYWRlciA9ICgpID0+IHtcclxuICAgICAgICAgICAgc2l0ZUhlYWRlci5jbGFzc0xpc3Rbd2luZG93LnBhZ2VZT2Zmc2V0ID49IHNpdGVIZWFkZXIub2Zmc2V0SGVpZ2h0ID8gJ2FkZCcgOiAncmVtb3ZlJ10oJ2ZpeGVkJyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvbih3aW5kb3csICdzY3JvbGwnLCBjaGFuZ2VIZWFkZXIpO1xyXG5cclxuICAgICAgICAvL+uplOuJtCBvcGVuLGNsb3NlXHJcbiAgICAgICAgc2l0ZU1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIGlmKHNpdGVIZWFkZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdoZWFkZXItbWVudS0tb3BlbicpKSB7XHJcbiAgICAgICAgICAgICAgICBzaXRlSGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hlYWRlci1tZW51LS1vcGVuJyk7XHJcbiAgICAgICAgICAgICAgICBzaXRlSGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2ZpeGVkJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzaXRlSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1tZW51LS1vcGVuJyk7XHJcbiAgICAgICAgICAgICAgICBzaXRlSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2ZpeGVkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZ2V0U2VjdGlvbnNTdGFydCgpO1xyXG5cclxuICAgICAgICBzaXRlTWVudUl0ZW1zLmZvckVhY2goKHNpdGVNZW51SXRlbSxpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBzaXRlTWVudUl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIHNpdGVIZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGVhZGVyLW1lbnUtLW9wZW4nKTtcclxuICAgICAgICAgICAgICAgIG1vdmVTZWN0aW9uKGluZGV4KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBvbih3aW5kb3csICdsb2FkJywgZ2V0U2VjdGlvbnNTdGFydCk7XHJcbiAgICAgICAgb24od2luZG93LCAncmVzaXplJywgZ2V0U2VjdGlvbnNTdGFydCk7XHJcblxyXG4gICAgfSkoKTtcclxuXHJcbiAgICAvLyBCcmFuZCBGaWxtXHJcbiAgICAoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGJyYW5kRmlsbSA9IGZpbmRPbmUoJy5icmFuZC1maWxtJyk7XHJcbiAgICAgICAgY29uc3QgdGFiID0gbmV3IFRhYihmaW5kT25lKCcudGFiJywgYnJhbmRGaWxtKSk7XHJcbiAgICAgICAgdGFiLm1lbnVzWzBdLmNsaWNrKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGJyYW5kRmlsbUNhcm91c2VsID0gbmV3IFN3aXBlcignLmJyYW5kLWZpbG0gLnN3aXBlcicsIHtcclxuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogJ2F1dG8nLFxyXG4gICAgICAgICAgICBzcGFjZUJldHdlZW46IDEwLFxyXG4gICAgICAgICAgICBvYnNlcnZlcjogdHJ1ZSxcclxuICAgICAgICAgICAgb2JzZXJ2ZVBhcmVudHM6IHRydWUsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfSkoKTtcclxuXHJcbiAgICAvLyBXSFkgTk9UIFJPQURcclxuICAgICgoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgcm9hZCA9IGZpbmRPbmUoJy5yb2FkJyk7XHJcbiAgICAgICAgY29uc3QgY2Fyb3VzZWxXcmFwID0gZmluZE9uZSgnLnJvYWRfX2Nhcm91c2VsXzEgLnN3aXBlcicsIHJvYWQpO1xyXG4gICAgICAgIGNvbnN0IGNhcm91c2VsV3JhcDIgPSBmaW5kT25lKCcucm9hZF9fY2Fyb3VzZWxfMiAuc3dpcGVyJywgcm9hZCk7XHJcbiAgICAgICAgY29uc3QgY2Fyb3VzZWxQYWdpbmF0aW9uID0gZmluZE9uZSgnLnN3aXBlci1wYWdpbmF0aW9uJywgcm9hZCk7XHJcbiAgICAgICAgY29uc3QgY2Fyb3VzZWxQYWdpbmF0aW9uTWVudXMgPSBmaW5kKCdwJywgY2Fyb3VzZWxXcmFwKS5tYXAobWVudSA9PiBtZW51LmlubmVyVGV4dCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHJvYWRDYXJvdXNlbCA9IG5ldyBTd2lwZXIoY2Fyb3VzZWxXcmFwLCB7XHJcbiAgICAgICAgICAgIGxvb3A6dHJ1ZSxcclxuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogJ2F1dG8nLFxyXG4gICAgICAgICAgICBsb29wQWRkaXRpb25hbFNsaWRlczogJzUnLFxyXG4gICAgICAgICAgICBsb29wZWRTbGlkZXM6ICc1JyxcclxuICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAxMCxcclxuXHJcbiAgICAgICAgICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICAgICAgICAgIGVsOiBjYXJvdXNlbFBhZ2luYXRpb24sXHJcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICByZW5kZXJCdWxsZXQoaW5kZXgsIGNsYXNzTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgPGRpdiBjbGFzcz1cIiR7Y2xhc3NOYW1lfVwiPiR7Y2Fyb3VzZWxQYWdpbmF0aW9uTWVudXNbaW5kZXhdfTwvZGl2PmA7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCByb2FkQ2Fyb3VzZWwyID0gbmV3IFN3aXBlcihjYXJvdXNlbFdyYXAyLCB7XHJcbiAgICAgICAgICAgIC8vIGxvb3A6IHRydWUsXHJcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IFwiYXV0b1wiLFxyXG4gICAgICAgICAgICBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcclxuICAgICAgICAgICAgYWxsb3dUb3VjaE1vdmU6IGZhbHNlLFxyXG4gICAgICAgICAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICBuZXh0RWw6IFwiLnN3aXBlci1idXR0b24tbmV4dFwiLFxyXG4gICAgICAgICAgICAgICAgcHJldkVsOiBcIi5zd2lwZXItYnV0dG9uLXByZXZcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgICgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1vZGFsID0gbmV3IE1vZGFsKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRyaWdnZXJzID0gZmluZCgnLnJvYWRfX2xpbmsnKTtcclxuICAgICAgICAgICAgY29uc3QgZ2V0SWQgPSB0cmlnZ2VyID0+IHRyaWdnZXIuZ2V0QXR0cmlidXRlKCdocmVmJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnRzID0gdHJpZ2dlcnMucmVkdWNlKChjb250ZW50cywgdHJpZ2dlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaWQgPSBnZXRJZCh0cmlnZ2VyKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBmaW5kT25lKGlkKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb250ZW50c1tpZF0gPSBjb250ZW50O1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBjb250ZW50cztcclxuICAgICAgICAgICAgfSwge30pO1xyXG5cclxuICAgICAgICAgICAgdHJpZ2dlcnMuZm9yRWFjaCgodHJpZ2dlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgb24odHJpZ2dlciwgJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaWQgPSBnZXRJZCh0cmlnZ2VyKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb250ZW50ID0gY29udGVudHNbaWRdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBtb2RhbC5vcGVuKGNvbnRlbnQpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gdHJpZ2dlcnNbM10uY2xpY2soKTtcclxuICAgICAgICB9KSgpO1xyXG5cclxuICAgIH0pKCk7XHJcblxyXG4gICAgLy8gV0hZIE5PVCBDT05URU5UU1xyXG4gICAgKCgpID0+IHtcclxuICAgICAgICBjb25zdCBjb250ZW50cyA9IGZpbmRPbmUoJy5jb250ZW50cycpO1xyXG4gICAgICAgIGNvbnN0IGNhcm91c2VsV3JhcCA9IGZpbmRPbmUoJy5zd2lwZXInLCBjb250ZW50cyk7XHJcbiAgICAgICAgY29uc3QgY2Fyb3VzZWxQYWdpbmF0aW9uID0gZmluZE9uZSgnLnN3aXBlci1wYWdpbmF0aW9uJywgY29udGVudHMpO1xyXG4gICAgICAgIGNvbnN0IGNhcm91c2VsUGFnaW5hdGlvbk1lbnVzID0gZmluZCgnW2RhdGEtcGFnaW5hdGlvbi1uYW1lXScsIGNvbnRlbnRzKS5tYXAobWVudSA9PiBtZW51LmRhdGFzZXQucGFnaW5hdGlvbk5hbWUpO1xyXG5cclxuICAgICAgICBjb25zdCBjb250ZW50Q2Fyb3VzZWwgPSBuZXcgU3dpcGVyKGNhcm91c2VsV3JhcCwge1xyXG4gICAgICAgICAgICBsb29wOnRydWUsXHJcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcclxuICAgICAgICAgICAgbG9vcEFkZGl0aW9uYWxTbGlkZXM6ICc1JyxcclxuICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAxMCxcclxuXHJcbiAgICAgICAgICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICAgICAgICAgIGVsOiBjYXJvdXNlbFBhZ2luYXRpb24sXHJcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICByZW5kZXJCdWxsZXQoaW5kZXgsIGNsYXNzTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgPGRpdiBjbGFzcz1cIiR7Y2xhc3NOYW1lfVwiPiR7Y2Fyb3VzZWxQYWdpbmF0aW9uTWVudXNbaW5kZXhdfTwvZGl2PmA7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICB9KSgpO1xyXG5cclxuXHJcblxyXG5cclxufTtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBhcHApOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdGxvYWRlZDogZmFsc2UsXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuXHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IGZ1bmN0aW9uKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgY2h1bmtJZHMgPSBkZWZlcnJlZFtpXVswXTtcblx0XHR2YXIgZm4gPSBkZWZlcnJlZFtpXVsxXTtcblx0XHR2YXIgcHJpb3JpdHkgPSBkZWZlcnJlZFtpXVsyXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoZnVuY3Rpb24oa2V5KSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSk7IH0pKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZTsgfTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5tZCA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRtb2R1bGUucGF0aHMgPSBbXTtcblx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRyZXR1cm4gbW9kdWxlO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJhcHBcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSBmdW5jdGlvbihjaHVua0lkKSB7IHJldHVybiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDA7IH07XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gZnVuY3Rpb24ocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpIHtcblx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcblx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcblx0dmFyIHJ1bnRpbWUgPSBkYXRhWzJdO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoZnVuY3Rpb24oaWQpIHsgcmV0dXJuIGluc3RhbGxlZENodW5rc1tpZF0gIT09IDA7IH0pKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua1wiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzXCJdLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oXCIuL2pzL21vYmlsZS9hcHAuanNcIik7IH0pXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvcnNcIl0sIGZ1bmN0aW9uKCkgeyByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc2Nzcy9tb2JpbGUvYXBwLnNjc3NcIik7IH0pXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbImZpbmRPbmUiLCJvbiIsIkNMQVNTX05BTUVfQk9EWV9PUEVOIiwiQ0xBU1NfTkFNRV9PUEVOIiwiQ0xBU1NfTkFNRV9GQURFIiwiTW9kYWwiLCJib2R5IiwibW9kYWxzIiwib25FdmVudCIsInRhcmdldCIsImxlbmd0aCIsImNsYXNzTGlzdCIsImFkZCIsInB1c2giLCJzZXRUaW1lb3V0IiwidGFyZ2V0TW9kYWwiLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJyZW1vdmUiLCJldmVudCIsImNsb3NlIiwiY2xvc2VzdCIsInRhZ05hbWUiLCJwcmV2ZW50RGVmYXVsdCIsIm9uQ2xvc2UiLCJiaW5kIiwiTWF0aCIsImFicyIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudFdpZHRoIiwiZmluZCIsIlRhYiIsImVsZW1lbnQiLCJjYWxsYmFjayIsIm1lbnVzIiwicGFuZWxzIiwibWFwIiwibWVudSIsInBhbmVsSWQiLCJnZXRBdHRyaWJ1dGUiLCJwYW5lbCIsImN1cnJlbnQiLCJwYW5lbFRpbWVyIiwiaW5pdEV2ZW50cyIsImZvckVhY2giLCJzZXRBdHRyaWJ1dGUiLCJjbGVhclRpbWVvdXQiLCJ0b2dnbGVUYWIiLCJ0b2dnbGVQYW5lbCIsInRvZ2dsZSIsInNlbGVjdG9yIiwiY29udGV4dCIsInF1ZXJ5U2VsZWN0b3IiLCJxdWVyeVNlbGVjdG9yQWxsIiwidHlwZSIsImNhcHR1cmUiLCJhZGRFdmVudExpc3RlbmVyIiwib2ZmIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRlbGVnYXRlIiwiaGFuZGxlciIsImRpc3BhdGNoRXZlbnQiLCJ0YXJnZXRFbGVtZW50IiwicG90ZW50aWFsRWxlbWVudHMiLCJjYWxsIiwiZ2V0T2Zmc2V0IiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsInNjcm9sbFkiLCJsZWZ0Iiwic2Nyb2xsWCIsImRlYm91bmNlIiwiZnVuYyIsIndhaXQiLCJpbkRlYm91bmNlIiwiYXJncyIsIlN3aXBlciIsIk5hdmlnYXRpb24iLCJQYWdpbmF0aW9uIiwidXNlIiwiQU9TIiwic2FsIiwiZ3NhcCIsIlNjcm9sbFRyaWdnZXIiLCJldmVudHMiLCJyZWdpc3RlclBsdWdpbiIsImFwcCIsImluaXQiLCJvbmNlIiwic2l0ZUhlYWRlciIsImhlYWRlckhlaWdodCIsImNsaWVudEhlaWdodCIsInNpdGVNZW51Iiwic2l0ZU1lbnVJdGVtcyIsInNlY3Rpb25zIiwibGluayIsInNlY3Rpb25zU3RhcnQiLCJnZXRTZWN0aW9uc1N0YXJ0Iiwic2VjdGlvbiIsIm1vdmVTZWN0aW9uIiwic2Nyb2xsIiwiYmVoYXZpb3IiLCJjaGFuZ2VIZWFkZXIiLCJwYWdlWU9mZnNldCIsIm9mZnNldEhlaWdodCIsImNvbnRhaW5zIiwic2l0ZU1lbnVJdGVtIiwiYnJhbmRGaWxtIiwidGFiIiwiY2xpY2siLCJicmFuZEZpbG1DYXJvdXNlbCIsInNsaWRlc1BlclZpZXciLCJzcGFjZUJldHdlZW4iLCJvYnNlcnZlciIsIm9ic2VydmVQYXJlbnRzIiwicm9hZCIsImNhcm91c2VsV3JhcCIsImNhcm91c2VsV3JhcDIiLCJjYXJvdXNlbFBhZ2luYXRpb24iLCJjYXJvdXNlbFBhZ2luYXRpb25NZW51cyIsImlubmVyVGV4dCIsInJvYWRDYXJvdXNlbCIsImxvb3AiLCJsb29wQWRkaXRpb25hbFNsaWRlcyIsImxvb3BlZFNsaWRlcyIsInBhZ2luYXRpb24iLCJlbCIsImNsaWNrYWJsZSIsInJlbmRlckJ1bGxldCIsImNsYXNzTmFtZSIsInJvYWRDYXJvdXNlbDIiLCJjZW50ZXJlZFNsaWRlcyIsImFsbG93VG91Y2hNb3ZlIiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsIm1vZGFsIiwidHJpZ2dlcnMiLCJnZXRJZCIsInRyaWdnZXIiLCJjb250ZW50cyIsInJlZHVjZSIsImlkIiwiY29udGVudCIsIm9wZW4iLCJkYXRhc2V0IiwicGFnaW5hdGlvbk5hbWUiLCJjb250ZW50Q2Fyb3VzZWwiXSwic291cmNlUm9vdCI6IiJ9