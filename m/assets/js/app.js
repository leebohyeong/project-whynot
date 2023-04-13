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
  })(); //footer 개인정보 처리 방침


  (function () {
    var footer = (0,_helper__WEBPACK_IMPORTED_MODULE_3__.findOne)('footer');
    var privacy = (0,_helper__WEBPACK_IMPORTED_MODULE_3__.findOne)('.footer__privacy', footer);
    var privacyModal = (0,_helper__WEBPACK_IMPORTED_MODULE_3__.findOne)('.modal-footer-privacy');
    var modal = new _Modal__WEBPACK_IMPORTED_MODULE_5__["default"]();
    privacy.addEventListener('click', function (event) {
      event.preventDefault();
      modal.open(privacyModal);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQsOENBQThDOzs7OztXQ0E5QztXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NKQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUEsOENBQThDOztXQUU5QztXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLG1DQUFtQztXQUNwRTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFbERBO1VBQ0E7VUFDQTtVQUNBLDJEQUEyRCxtREFBbUQ7VUFDOUcscUZBQXFGLHVEQUF1RDtVQUM1SSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL01vZGFsLmpzIiwid2VicGFjazovLy8uL2pzL1RhYi5qcyIsIndlYnBhY2s6Ly8vLi9qcy9oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vanMvbW9iaWxlL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zY3NzL21vYmlsZS9hcHAuc2Nzcz9lMjU1Iiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL25vZGUgbW9kdWxlIGRlY29yYXRvciIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly8vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7ZmluZE9uZSwgb259IGZyb20gJy4vaGVscGVyJztcclxuXHJcbmNvbnN0IENMQVNTX05BTUVfQk9EWV9PUEVOID0gJ21vZGFsLW9wZW4nO1xyXG5jb25zdCBDTEFTU19OQU1FX09QRU4gPSAnbW9kYWwtLW9wZW4nO1xyXG5jb25zdCBDTEFTU19OQU1FX0ZBREUgPSAnbW9kYWwtLWZhZGUnO1xyXG5cclxuY29uc3QgTW9kYWwgPSBjbGFzcyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmJvZHkgPSBmaW5kT25lKCdib2R5Jyk7XHJcblxyXG4gICAgICAgIHRoaXMubW9kYWxzID0gW107XHJcbiAgICAgICAgdGhpcy5vbkV2ZW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgb3Blbih0YXJnZXQpIHtcclxuICAgICAgICBpZiAoIXRoaXMubW9kYWxzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLmJvZHkuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0JPRFlfT1BFTik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm1vZGFscy5wdXNoKHRhcmdldCk7XHJcbiAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9PUEVOKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRhcmdldC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfRkFERSksIDApO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZSh0YXJnZXRNb2RhbCkge1xyXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMubW9kYWxzLmxlbmd0aCAtIDE7XHJcblxyXG4gICAgICAgIGlmICh0YXJnZXRNb2RhbCkge1xyXG4gICAgICAgICAgICBpbmRleCA9IHRoaXMubW9kYWxzLmluZGV4T2YodGFyZ2V0TW9kYWwpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgaW5kZXggPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB0YXJnZXQgPSB0aGlzLm1vZGFscy5zcGxpY2UoaW5kZXgsIDEpWzBdO1xyXG5cclxuICAgICAgICBpZiAoIXRhcmdldCkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0ZBREUsIENMQVNTX05BTUVfT1BFTik7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5tb2RhbHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYm9keS5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQk9EWV9PUEVOKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25DbG9zZShldmVudCkge1xyXG4gICAgICAgIGNvbnN0IGNsb3NlID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5tb2RhbF9fY2xvc2UnKTtcclxuXHJcbiAgICAgICAgaWYgKGNsb3NlKSB7XHJcbiAgICAgICAgICAgIGlmIChjbG9zZS50YWdOYW1lID09PSAnQScpIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uRXZlbnQoKSB7XHJcbiAgICAgICAgb24odGhpcy5ib2R5LCAnY2xpY2snLCB0aGlzLm9uQ2xvc2UuYmluZCh0aGlzKSwgZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzY3JvbGxXaWR0aCgpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5hYnMod2luZG93LmlubmVyV2lkdGggLSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9kYWw7IiwiaW1wb3J0IHtmaW5kT25lLCBmaW5kLCBvbn0gZnJvbSAnLi9oZWxwZXInO1xyXG5cclxuY29uc3QgVGFiID0gY2xhc3Mge1xyXG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgY2FsbGJhY2spIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xyXG4gICAgICAgIHRoaXMubWVudXMgPSBmaW5kKCcudGFiX19tZW51JywgdGhpcy5lbGVtZW50KTtcclxuICAgICAgICB0aGlzLnBhbmVscyA9IHRoaXMubWVudXMubWFwKG1lbnUgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwYW5lbElkID0gbWVudS5nZXRBdHRyaWJ1dGUoJ2FyaWEtY29udHJvbHMnKTtcclxuICAgICAgICAgICAgY29uc3QgcGFuZWwgPSBmaW5kT25lKGAjJHtwYW5lbElkfWApO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHBhbmVsO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmN1cnJlbnQgPSAwO1xyXG4gICAgICAgIHRoaXMucGFuZWxUaW1lciA9IG51bGw7XHJcblxyXG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcclxuXHJcbiAgICAgICAgdGhpcy5pbml0RXZlbnRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlVGFiKCkge1xyXG4gICAgICAgIHRoaXMubWVudXMuZm9yRWFjaCgobWVudSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudCA9PT0gaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgndGFiX19tZW51LS1hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIG1lbnUuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ3RhYl9fbWVudS0tYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICBtZW51LnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsIGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZVBhbmVsKCkge1xyXG4gICAgICAgIHRoaXMucGFuZWxzLmZvckVhY2goKHBhbmVsLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50ID09PSBpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgcGFuZWwuY2xhc3NMaXN0LmFkZCgndGFiX19wYW5lbC0taW4nKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFuZWxUaW1lciAmJiBjbGVhclRpbWVvdXQodGhpcy5wYW5lbFRpbWVyKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFuZWxUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4gcGFuZWwuY2xhc3NMaXN0LmFkZCgndGFiX19wYW5lbC0tYWN0aXZlJyksIDEzKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHBhbmVsLmNsYXNzTGlzdC5yZW1vdmUoJ3RhYl9fcGFuZWwtLWluJywgJ3RhYl9fcGFuZWwtLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlKCkge1xyXG4gICAgICAgIHRoaXMudG9nZ2xlVGFiKCk7XHJcbiAgICAgICAgdGhpcy50b2dnbGVQYW5lbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRFdmVudHMoKSB7XHJcbiAgICAgICAgdGhpcy5tZW51cy5mb3JFYWNoKChtZW51LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBvbihtZW51LCAnY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50ID0gaW5kZXg7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuY2FsbGJhY2sgJiYgdGhpcy5jYWxsYmFjaygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhYjsiLCJleHBvcnQgY29uc3QgZmluZE9uZSA9IChzZWxlY3RvciwgY29udGV4dCA9IGRvY3VtZW50KSA9PiBjb250ZXh0LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xyXG5leHBvcnQgY29uc3QgZmluZCA9IChzZWxlY3RvciwgY29udGV4dCA9IGRvY3VtZW50KSA9PiBbLi4uY29udGV4dC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKV07XHJcblxyXG5leHBvcnQgY29uc3Qgb24gPSAodGFyZ2V0LCB0eXBlLCBjYWxsYmFjaywgY2FwdHVyZSA9IGZhbHNlKSA9PiB7XHJcbiAgICBpZiAoIXRhcmdldCB8fCAhdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIpIHJldHVybjtcclxuXHJcbiAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBjYWxsYmFjaywgY2FwdHVyZSk7XHJcbn07XHJcbmV4cG9ydCBjb25zdCBvZmYgPSAodGFyZ2V0LCB0eXBlLCBjYWxsYmFjaykgPT4gdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgY2FsbGJhY2spO1xyXG5leHBvcnQgY29uc3QgZGVsZWdhdGUgPSAodGFyZ2V0LCBzZWxlY3RvciwgdHlwZSwgaGFuZGxlciwgY2FwdHVyZSkgPT4ge1xyXG4gICAgY29uc3QgZGlzcGF0Y2hFdmVudCA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRhcmdldEVsZW1lbnQgPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgY29uc3QgcG90ZW50aWFsRWxlbWVudHMgPSB0YXJnZXRFbGVtZW50LmNsb3Nlc3Qoc2VsZWN0b3IpO1xyXG5cclxuICAgICAgICBpZiAocG90ZW50aWFsRWxlbWVudHMpIHtcclxuICAgICAgICAgICAgaGFuZGxlci5jYWxsKHBvdGVudGlhbEVsZW1lbnRzLCBldmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBvbih0YXJnZXQsIHR5cGUsIGRpc3BhdGNoRXZlbnQsICEhY2FwdHVyZSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0T2Zmc2V0ID0gKGVsZW1lbnQpID0+IHtcclxuICAgIGNvbnN0IHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdG9wOiByZWN0LnRvcCArIHdpbmRvdy5zY3JvbGxZLFxyXG4gICAgICAgIGxlZnQ6IHJlY3QubGVmdCArIHdpbmRvdy5zY3JvbGxYXHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlYm91bmNlID0gKGZ1bmMsIHdhaXQgPSAzMDApID0+IHtcclxuICAgIGxldCBpbkRlYm91bmNlO1xyXG5cclxuICAgIHJldHVybiAoLi4uYXJncykgPT4ge1xyXG4gICAgICAgIGluRGVib3VuY2UgJiYgY2xlYXJUaW1lb3V0KGluRGVib3VuY2UpO1xyXG4gICAgICAgIGluRGVib3VuY2UgPSBzZXRUaW1lb3V0KCgpID0+IGZ1bmMoLi4uYXJncyksIHdhaXQpO1xyXG4gICAgfTtcclxufTsiLCJpbXBvcnQgU3dpcGVyLCB7TmF2aWdhdGlvbiwgUGFnaW5hdGlvbiB9IGZyb20gJ3N3aXBlcic7XHJcblN3aXBlci51c2UoW05hdmlnYXRpb24sIFBhZ2luYXRpb25dKTtcclxuaW1wb3J0IEFPUyBmcm9tICdhb3MnO1xyXG5pbXBvcnQgc2FsIGZyb20gJ3NhbC5qcydcclxuaW1wb3J0IGdzYXAgZnJvbSAnZ3NhcCc7XHJcbmltcG9ydCBTY3JvbGxUcmlnZ2VyIGZyb20gJ2dzYXAvU2Nyb2xsVHJpZ2dlcic7XHJcbmltcG9ydCB7ZmluZE9uZSwgZmluZCwgZ2V0T2Zmc2V0LCBvbn0gZnJvbSAnLi4vaGVscGVyJztcclxuaW1wb3J0IFRhYiBmcm9tICcuLi9UYWInO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSBcIi4uL01vZGFsXCI7XHJcbmltcG9ydCAqIGFzIGV2ZW50cyBmcm9tIFwiZXZlbnRzXCI7XHJcblxyXG5nc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRyaWdnZXIpO1xyXG5cclxuY29uc3QgYXBwID0gKCkgPT4ge1xyXG4gICAgQU9TLmluaXQoe1xyXG4gICAgICAgIG9uY2U6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIC8vaGVhZGVyXHJcbiAgICAoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNpdGVIZWFkZXIgID0gZmluZE9uZSgnaGVhZGVyJyk7XHJcbiAgICAgICAgY29uc3QgaGVhZGVySGVpZ2h0ID0gc2l0ZUhlYWRlci5jbGllbnRIZWlnaHQ7XHJcbiAgICAgICAgY29uc3Qgc2l0ZU1lbnUgPSBmaW5kT25lKCcuaGVhZGVyLW1lbnVfX2J1dHRvbicsIHNpdGVIZWFkZXIpO1xyXG4gICAgICAgIGNvbnN0IHNpdGVNZW51SXRlbXMgPSBmaW5kKCcuaGVhZGVyLW1lbnVfX2xpbmsnLCBzaXRlSGVhZGVyKTtcclxuICAgICAgICBjb25zdCBzZWN0aW9ucyA9IHNpdGVNZW51SXRlbXMubWFwKGxpbmsgPT4gZmluZE9uZShsaW5rLmdldEF0dHJpYnV0ZSgnaHJlZicpKSk7XHJcbiAgICAgICAgY29uc3Qgc2VjdGlvbnNTdGFydCA9IFtdO1xyXG4gICAgICAgIGNvbnN0IGdldFNlY3Rpb25zU3RhcnQgPSAoKSA9PiBzZWN0aW9ucy5mb3JFYWNoKChzZWN0aW9uLCBpbmRleCkgPT4gc2VjdGlvbnNTdGFydFtpbmRleF0gPSB+fihnZXRPZmZzZXQoc2VjdGlvbikudG9wIC0gaGVhZGVySGVpZ2h0KSsxKTtcclxuXHJcbiAgICAgICAgY29uc3QgbW92ZVNlY3Rpb24gPSAoaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgd2luZG93LnNjcm9sbCh7XHJcbiAgICAgICAgICAgICAgICB0b3A6IHNlY3Rpb25zU3RhcnRbaW5kZXhdLFxyXG4gICAgICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vaGVhZGVyIGZpeGVkXHJcbiAgICAgICAgY29uc3QgY2hhbmdlSGVhZGVyID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBzaXRlSGVhZGVyLmNsYXNzTGlzdFt3aW5kb3cucGFnZVlPZmZzZXQgPj0gc2l0ZUhlYWRlci5vZmZzZXRIZWlnaHQgPyAnYWRkJyA6ICdyZW1vdmUnXSgnZml4ZWQnKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG9uKHdpbmRvdywgJ3Njcm9sbCcsIGNoYW5nZUhlYWRlcik7XHJcblxyXG4gICAgICAgIC8v66mU64m0IG9wZW4sY2xvc2VcclxuICAgICAgICBzaXRlTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgaWYoc2l0ZUhlYWRlci5jbGFzc0xpc3QuY29udGFpbnMoJ2hlYWRlci1tZW51LS1vcGVuJykpIHtcclxuICAgICAgICAgICAgICAgIHNpdGVIZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGVhZGVyLW1lbnUtLW9wZW4nKTtcclxuICAgICAgICAgICAgICAgIHNpdGVIZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnZml4ZWQnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNpdGVIZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLW1lbnUtLW9wZW4nKTtcclxuICAgICAgICAgICAgICAgIHNpdGVIZWFkZXIuY2xhc3NMaXN0LmFkZCgnZml4ZWQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBnZXRTZWN0aW9uc1N0YXJ0KCk7XHJcblxyXG4gICAgICAgIHNpdGVNZW51SXRlbXMuZm9yRWFjaCgoc2l0ZU1lbnVJdGVtLGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHNpdGVNZW51SXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgc2l0ZUhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXItbWVudS0tb3BlbicpO1xyXG4gICAgICAgICAgICAgICAgbW92ZVNlY3Rpb24oaW5kZXgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIG9uKHdpbmRvdywgJ2xvYWQnLCBnZXRTZWN0aW9uc1N0YXJ0KTtcclxuICAgICAgICBvbih3aW5kb3csICdyZXNpemUnLCBnZXRTZWN0aW9uc1N0YXJ0KTtcclxuXHJcbiAgICB9KSgpO1xyXG5cclxuICAgIC8vIEJyYW5kIEZpbG1cclxuICAgICgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYnJhbmRGaWxtID0gZmluZE9uZSgnLmJyYW5kLWZpbG0nKTtcclxuICAgICAgICBjb25zdCB0YWIgPSBuZXcgVGFiKGZpbmRPbmUoJy50YWInLCBicmFuZEZpbG0pKTtcclxuICAgICAgICB0YWIubWVudXNbMF0uY2xpY2soKTtcclxuXHJcbiAgICAgICAgY29uc3QgYnJhbmRGaWxtQ2Fyb3VzZWwgPSBuZXcgU3dpcGVyKCcuYnJhbmQtZmlsbSAuc3dpcGVyJywge1xyXG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXHJcbiAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMTAsXHJcbiAgICAgICAgICAgIG9ic2VydmVyOiB0cnVlLFxyXG4gICAgICAgICAgICBvYnNlcnZlUGFyZW50czogdHJ1ZSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9KSgpO1xyXG5cclxuICAgIC8vIFdIWSBOT1QgUk9BRFxyXG4gICAgKCgpID0+IHtcclxuICAgICAgICBjb25zdCByb2FkID0gZmluZE9uZSgnLnJvYWQnKTtcclxuICAgICAgICBjb25zdCBjYXJvdXNlbFdyYXAgPSBmaW5kT25lKCcucm9hZF9fY2Fyb3VzZWxfMSAuc3dpcGVyJywgcm9hZCk7XHJcbiAgICAgICAgY29uc3QgY2Fyb3VzZWxXcmFwMiA9IGZpbmRPbmUoJy5yb2FkX19jYXJvdXNlbF8yIC5zd2lwZXInLCByb2FkKTtcclxuICAgICAgICBjb25zdCBjYXJvdXNlbFBhZ2luYXRpb24gPSBmaW5kT25lKCcuc3dpcGVyLXBhZ2luYXRpb24nLCByb2FkKTtcclxuICAgICAgICBjb25zdCBjYXJvdXNlbFBhZ2luYXRpb25NZW51cyA9IGZpbmQoJ3AnLCBjYXJvdXNlbFdyYXApLm1hcChtZW51ID0+IG1lbnUuaW5uZXJUZXh0KTtcclxuXHJcbiAgICAgICAgY29uc3Qgcm9hZENhcm91c2VsID0gbmV3IFN3aXBlcihjYXJvdXNlbFdyYXAsIHtcclxuICAgICAgICAgICAgbG9vcDp0cnVlLFxyXG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXHJcbiAgICAgICAgICAgIGxvb3BBZGRpdGlvbmFsU2xpZGVzOiAnNScsXHJcbiAgICAgICAgICAgIGxvb3BlZFNsaWRlczogJzUnLFxyXG4gICAgICAgICAgICBzcGFjZUJldHdlZW46IDEwLFxyXG5cclxuICAgICAgICAgICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgZWw6IGNhcm91c2VsUGFnaW5hdGlvbixcclxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHJlbmRlckJ1bGxldChpbmRleCwgY2xhc3NOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiJHtjbGFzc05hbWV9XCI+JHtjYXJvdXNlbFBhZ2luYXRpb25NZW51c1tpbmRleF19PC9kaXY+YDtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHJvYWRDYXJvdXNlbDIgPSBuZXcgU3dpcGVyKGNhcm91c2VsV3JhcDIsIHtcclxuICAgICAgICAgICAgLy8gbG9vcDogdHJ1ZSxcclxuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogXCJhdXRvXCIsXHJcbiAgICAgICAgICAgIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxyXG4gICAgICAgICAgICBhbGxvd1RvdWNoTW92ZTogZmFsc2UsXHJcbiAgICAgICAgICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgICAgICAgICAgIG5leHRFbDogXCIuc3dpcGVyLWJ1dHRvbi1uZXh0XCIsXHJcbiAgICAgICAgICAgICAgICBwcmV2RWw6IFwiLnN3aXBlci1idXR0b24tcHJldlwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbW9kYWwgPSBuZXcgTW9kYWwoKTtcclxuICAgICAgICAgICAgY29uc3QgdHJpZ2dlcnMgPSBmaW5kKCcucm9hZF9fbGluaycpO1xyXG4gICAgICAgICAgICBjb25zdCBnZXRJZCA9IHRyaWdnZXIgPT4gdHJpZ2dlci5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcclxuICAgICAgICAgICAgY29uc3QgY29udGVudHMgPSB0cmlnZ2Vycy5yZWR1Y2UoKGNvbnRlbnRzLCB0cmlnZ2VyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpZCA9IGdldElkKHRyaWdnZXIpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29udGVudCA9IGZpbmRPbmUoaWQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnRlbnRzW2lkXSA9IGNvbnRlbnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRlbnRzO1xyXG4gICAgICAgICAgICB9LCB7fSk7XHJcblxyXG4gICAgICAgICAgICB0cmlnZ2Vycy5mb3JFYWNoKCh0cmlnZ2VyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBvbih0cmlnZ2VyLCAnY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpZCA9IGdldElkKHRyaWdnZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBjb250ZW50c1tpZF07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsLm9wZW4oY29udGVudCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyB0cmlnZ2Vyc1szXS5jbGljaygpO1xyXG4gICAgICAgIH0pKCk7XHJcblxyXG4gICAgfSkoKTtcclxuXHJcbiAgICAvLyBXSFkgTk9UIENPTlRFTlRTXHJcbiAgICAoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvbnRlbnRzID0gZmluZE9uZSgnLmNvbnRlbnRzJyk7XHJcbiAgICAgICAgY29uc3QgY2Fyb3VzZWxXcmFwID0gZmluZE9uZSgnLnN3aXBlcicsIGNvbnRlbnRzKTtcclxuICAgICAgICBjb25zdCBjYXJvdXNlbFBhZ2luYXRpb24gPSBmaW5kT25lKCcuc3dpcGVyLXBhZ2luYXRpb24nLCBjb250ZW50cyk7XHJcbiAgICAgICAgY29uc3QgY2Fyb3VzZWxQYWdpbmF0aW9uTWVudXMgPSBmaW5kKCdbZGF0YS1wYWdpbmF0aW9uLW5hbWVdJywgY29udGVudHMpLm1hcChtZW51ID0+IG1lbnUuZGF0YXNldC5wYWdpbmF0aW9uTmFtZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbnRlbnRDYXJvdXNlbCA9IG5ldyBTd2lwZXIoY2Fyb3VzZWxXcmFwLCB7XHJcbiAgICAgICAgICAgIGxvb3A6dHJ1ZSxcclxuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogJ2F1dG8nLFxyXG4gICAgICAgICAgICBsb29wQWRkaXRpb25hbFNsaWRlczogJzUnLFxyXG4gICAgICAgICAgICBzcGFjZUJldHdlZW46IDEwLFxyXG5cclxuICAgICAgICAgICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgZWw6IGNhcm91c2VsUGFnaW5hdGlvbixcclxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHJlbmRlckJ1bGxldChpbmRleCwgY2xhc3NOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiJHtjbGFzc05hbWV9XCI+JHtjYXJvdXNlbFBhZ2luYXRpb25NZW51c1tpbmRleF19PC9kaXY+YDtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgIH0pKCk7XHJcblxyXG5cclxuICAgIC8vZm9vdGVyIOqwnOyduOygleuztCDsspjrpqwg67Cp7LmoXHJcbiAgICAoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZvb3RlciA9IGZpbmRPbmUoJ2Zvb3RlcicpO1xyXG4gICAgICAgIGNvbnN0IHByaXZhY3kgPSBmaW5kT25lKCcuZm9vdGVyX19wcml2YWN5JywgZm9vdGVyKTtcclxuICAgICAgICBjb25zdCBwcml2YWN5TW9kYWwgPSBmaW5kT25lKCcubW9kYWwtZm9vdGVyLXByaXZhY3knKTtcclxuICAgICAgICBjb25zdCBtb2RhbCA9IG5ldyBNb2RhbCgpO1xyXG5cclxuXHJcbiAgICAgICAgcHJpdmFjeS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgbW9kYWwub3Blbihwcml2YWN5TW9kYWwpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9KSgpO1xyXG5cclxufTtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBhcHApOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdGxvYWRlZDogZmFsc2UsXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuXHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IGZ1bmN0aW9uKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgY2h1bmtJZHMgPSBkZWZlcnJlZFtpXVswXTtcblx0XHR2YXIgZm4gPSBkZWZlcnJlZFtpXVsxXTtcblx0XHR2YXIgcHJpb3JpdHkgPSBkZWZlcnJlZFtpXVsyXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoZnVuY3Rpb24oa2V5KSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSk7IH0pKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZTsgfTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5tZCA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRtb2R1bGUucGF0aHMgPSBbXTtcblx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRyZXR1cm4gbW9kdWxlO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJhcHBcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSBmdW5jdGlvbihjaHVua0lkKSB7IHJldHVybiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDA7IH07XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gZnVuY3Rpb24ocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpIHtcblx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcblx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcblx0dmFyIHJ1bnRpbWUgPSBkYXRhWzJdO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoZnVuY3Rpb24oaWQpIHsgcmV0dXJuIGluc3RhbGxlZENodW5rc1tpZF0gIT09IDA7IH0pKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua1wiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzXCJdLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oXCIuL2pzL21vYmlsZS9hcHAuanNcIik7IH0pXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvcnNcIl0sIGZ1bmN0aW9uKCkgeyByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc2Nzcy9tb2JpbGUvYXBwLnNjc3NcIik7IH0pXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbImZpbmRPbmUiLCJvbiIsIkNMQVNTX05BTUVfQk9EWV9PUEVOIiwiQ0xBU1NfTkFNRV9PUEVOIiwiQ0xBU1NfTkFNRV9GQURFIiwiTW9kYWwiLCJib2R5IiwibW9kYWxzIiwib25FdmVudCIsInRhcmdldCIsImxlbmd0aCIsImNsYXNzTGlzdCIsImFkZCIsInB1c2giLCJzZXRUaW1lb3V0IiwidGFyZ2V0TW9kYWwiLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJyZW1vdmUiLCJldmVudCIsImNsb3NlIiwiY2xvc2VzdCIsInRhZ05hbWUiLCJwcmV2ZW50RGVmYXVsdCIsIm9uQ2xvc2UiLCJiaW5kIiwiTWF0aCIsImFicyIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudFdpZHRoIiwiZmluZCIsIlRhYiIsImVsZW1lbnQiLCJjYWxsYmFjayIsIm1lbnVzIiwicGFuZWxzIiwibWFwIiwibWVudSIsInBhbmVsSWQiLCJnZXRBdHRyaWJ1dGUiLCJwYW5lbCIsImN1cnJlbnQiLCJwYW5lbFRpbWVyIiwiaW5pdEV2ZW50cyIsImZvckVhY2giLCJzZXRBdHRyaWJ1dGUiLCJjbGVhclRpbWVvdXQiLCJ0b2dnbGVUYWIiLCJ0b2dnbGVQYW5lbCIsInRvZ2dsZSIsInNlbGVjdG9yIiwiY29udGV4dCIsInF1ZXJ5U2VsZWN0b3IiLCJxdWVyeVNlbGVjdG9yQWxsIiwidHlwZSIsImNhcHR1cmUiLCJhZGRFdmVudExpc3RlbmVyIiwib2ZmIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRlbGVnYXRlIiwiaGFuZGxlciIsImRpc3BhdGNoRXZlbnQiLCJ0YXJnZXRFbGVtZW50IiwicG90ZW50aWFsRWxlbWVudHMiLCJjYWxsIiwiZ2V0T2Zmc2V0IiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsInNjcm9sbFkiLCJsZWZ0Iiwic2Nyb2xsWCIsImRlYm91bmNlIiwiZnVuYyIsIndhaXQiLCJpbkRlYm91bmNlIiwiYXJncyIsIlN3aXBlciIsIk5hdmlnYXRpb24iLCJQYWdpbmF0aW9uIiwidXNlIiwiQU9TIiwic2FsIiwiZ3NhcCIsIlNjcm9sbFRyaWdnZXIiLCJldmVudHMiLCJyZWdpc3RlclBsdWdpbiIsImFwcCIsImluaXQiLCJvbmNlIiwic2l0ZUhlYWRlciIsImhlYWRlckhlaWdodCIsImNsaWVudEhlaWdodCIsInNpdGVNZW51Iiwic2l0ZU1lbnVJdGVtcyIsInNlY3Rpb25zIiwibGluayIsInNlY3Rpb25zU3RhcnQiLCJnZXRTZWN0aW9uc1N0YXJ0Iiwic2VjdGlvbiIsIm1vdmVTZWN0aW9uIiwic2Nyb2xsIiwiYmVoYXZpb3IiLCJjaGFuZ2VIZWFkZXIiLCJwYWdlWU9mZnNldCIsIm9mZnNldEhlaWdodCIsImNvbnRhaW5zIiwic2l0ZU1lbnVJdGVtIiwiYnJhbmRGaWxtIiwidGFiIiwiY2xpY2siLCJicmFuZEZpbG1DYXJvdXNlbCIsInNsaWRlc1BlclZpZXciLCJzcGFjZUJldHdlZW4iLCJvYnNlcnZlciIsIm9ic2VydmVQYXJlbnRzIiwicm9hZCIsImNhcm91c2VsV3JhcCIsImNhcm91c2VsV3JhcDIiLCJjYXJvdXNlbFBhZ2luYXRpb24iLCJjYXJvdXNlbFBhZ2luYXRpb25NZW51cyIsImlubmVyVGV4dCIsInJvYWRDYXJvdXNlbCIsImxvb3AiLCJsb29wQWRkaXRpb25hbFNsaWRlcyIsImxvb3BlZFNsaWRlcyIsInBhZ2luYXRpb24iLCJlbCIsImNsaWNrYWJsZSIsInJlbmRlckJ1bGxldCIsImNsYXNzTmFtZSIsInJvYWRDYXJvdXNlbDIiLCJjZW50ZXJlZFNsaWRlcyIsImFsbG93VG91Y2hNb3ZlIiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsIm1vZGFsIiwidHJpZ2dlcnMiLCJnZXRJZCIsInRyaWdnZXIiLCJjb250ZW50cyIsInJlZHVjZSIsImlkIiwiY29udGVudCIsIm9wZW4iLCJkYXRhc2V0IiwicGFnaW5hdGlvbk5hbWUiLCJjb250ZW50Q2Fyb3VzZWwiLCJmb290ZXIiLCJwcml2YWN5IiwicHJpdmFjeU1vZGFsIl0sInNvdXJjZVJvb3QiOiIifQ==