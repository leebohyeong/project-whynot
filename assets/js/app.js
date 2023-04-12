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
  })(); // BOOST US


  (function () {
    var boostUs = (0,_helper__WEBPACK_IMPORTED_MODULE_3__.findOne)('.boost-us');
    var tab = new _Tab__WEBPACK_IMPORTED_MODULE_4__["default"]((0,_helper__WEBPACK_IMPORTED_MODULE_3__.findOne)('.tab', boostUs));
    var modal = new _Modal__WEBPACK_IMPORTED_MODULE_5__["default"]();
    var triggers = (0,_helper__WEBPACK_IMPORTED_MODULE_3__.find)('a', boostUs);

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
    });
    tab.menus[0].click();
    var boostUsModal = (0,_helper__WEBPACK_IMPORTED_MODULE_3__.findOne)('.modal-boost-us');
    var form = document.querySelector('form', boostUsModal);
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      var formData = new FormData(form);
      fetch(form.action, {
        method: form.method,
        body: formData
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        alert(data.message);
        location.reload();
      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRzL2pzL2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLElBQU1FLG9CQUFvQixHQUFHLFlBQTdCO0FBQ0EsSUFBTUMsZUFBZSxHQUFHLGFBQXhCO0FBQ0EsSUFBTUMsZUFBZSxHQUFHLGFBQXhCOztBQUVBLElBQU1DLEtBQUs7RUFDUCxpQkFBYztJQUFBOztJQUNWLEtBQUtDLElBQUwsR0FBWU4sZ0RBQU8sQ0FBQyxNQUFELENBQW5CO0lBRUEsS0FBS08sTUFBTCxHQUFjLEVBQWQ7SUFDQSxLQUFLQyxPQUFMO0VBQ0g7O0VBTk07SUFBQTtJQUFBLE9BUVAsY0FBS0MsTUFBTCxFQUFhO01BQ1QsSUFBSSxDQUFDLEtBQUtGLE1BQUwsQ0FBWUcsTUFBakIsRUFBeUI7UUFDckIsS0FBS0osSUFBTCxDQUFVSyxTQUFWLENBQW9CQyxHQUFwQixDQUF3QlYsb0JBQXhCO01BQ0g7O01BRUQsS0FBS0ssTUFBTCxDQUFZTSxJQUFaLENBQWlCSixNQUFqQjtNQUNBQSxNQUFNLENBQUNFLFNBQVAsQ0FBaUJDLEdBQWpCLENBQXFCVCxlQUFyQjtNQUNBVyxVQUFVLENBQUM7UUFBQSxPQUFNTCxNQUFNLENBQUNFLFNBQVAsQ0FBaUJDLEdBQWpCLENBQXFCUixlQUFyQixDQUFOO01BQUEsQ0FBRCxFQUE4QyxDQUE5QyxDQUFWO01BRUEsT0FBTyxJQUFQO0lBQ0g7RUFsQk07SUFBQTtJQUFBLE9Bb0JQLGVBQU1XLFdBQU4sRUFBbUI7TUFDZixJQUFJQyxLQUFLLEdBQUcsS0FBS1QsTUFBTCxDQUFZRyxNQUFaLEdBQXFCLENBQWpDOztNQUVBLElBQUlLLFdBQUosRUFBaUI7UUFDYkMsS0FBSyxHQUFHLEtBQUtULE1BQUwsQ0FBWVUsT0FBWixDQUFvQkYsV0FBcEIsQ0FBUjs7UUFFQSxJQUFJQyxLQUFLLEtBQUssQ0FBQyxDQUFmLEVBQWtCO1VBQ2RBLEtBQUssR0FBRyxDQUFSO1FBQ0g7TUFDSjs7TUFFRCxJQUFNUCxNQUFNLEdBQUcsS0FBS0YsTUFBTCxDQUFZVyxNQUFaLENBQW1CRixLQUFuQixFQUEwQixDQUExQixFQUE2QixDQUE3QixDQUFmO01BRUEsSUFBSSxDQUFDUCxNQUFMLEVBQWE7TUFFYkEsTUFBTSxDQUFDRSxTQUFQLENBQWlCUSxNQUFqQixDQUF3QmYsZUFBeEIsRUFBeUNELGVBQXpDOztNQUVBLElBQUksQ0FBQyxLQUFLSSxNQUFMLENBQVlHLE1BQWpCLEVBQXlCO1FBQ3JCLEtBQUtKLElBQUwsQ0FBVUssU0FBVixDQUFvQlEsTUFBcEIsQ0FBMkJqQixvQkFBM0I7TUFDSDtJQUNKO0VBeENNO0lBQUE7SUFBQSxPQTBDUCxpQkFBUWtCLEtBQVIsRUFBZTtNQUNYLElBQU1DLEtBQUssR0FBR0QsS0FBSyxDQUFDWCxNQUFOLENBQWFhLE9BQWIsQ0FBcUIsZUFBckIsQ0FBZDs7TUFFQSxJQUFJRCxLQUFKLEVBQVc7UUFDUCxJQUFJQSxLQUFLLENBQUNFLE9BQU4sS0FBa0IsR0FBdEIsRUFBMkJILEtBQUssQ0FBQ0ksY0FBTjtRQUUzQixLQUFLSCxLQUFMO01BQ0g7SUFDSjtFQWxETTtJQUFBO0lBQUEsT0FvRFAsbUJBQVU7TUFDTnBCLDJDQUFFLENBQUMsS0FBS0ssSUFBTixFQUFZLE9BQVosRUFBcUIsS0FBS21CLE9BQUwsQ0FBYUMsSUFBYixDQUFrQixJQUFsQixDQUFyQixFQUE4QyxLQUE5QyxDQUFGO0lBQ0g7RUF0RE07SUFBQTtJQUFBLEtBd0RQLGVBQWtCO01BQ2QsT0FBT0MsSUFBSSxDQUFDQyxHQUFMLENBQVNDLE1BQU0sQ0FBQ0MsVUFBUCxHQUFvQkMsUUFBUSxDQUFDQyxlQUFULENBQXlCQyxXQUF0RCxDQUFQO0lBQ0g7RUExRE07O0VBQUE7QUFBQSxHQUFYOztBQTZEQSwrREFBZTVCLEtBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25FQTs7QUFFQSxJQUFNOEIsR0FBRztFQUNMLGFBQVlDLE9BQVosRUFBcUJDLFFBQXJCLEVBQStCO0lBQUE7O0lBQzNCLEtBQUtELE9BQUwsR0FBZUEsT0FBZjtJQUNBLEtBQUtFLEtBQUwsR0FBYUosNkNBQUksQ0FBQyxZQUFELEVBQWUsS0FBS0UsT0FBcEIsQ0FBakI7SUFDQSxLQUFLRyxNQUFMLEdBQWMsS0FBS0QsS0FBTCxDQUFXRSxHQUFYLENBQWUsVUFBQUMsSUFBSSxFQUFJO01BQ2pDLElBQU1DLE9BQU8sR0FBR0QsSUFBSSxDQUFDRSxZQUFMLENBQWtCLGVBQWxCLENBQWhCO01BQ0EsSUFBTUMsS0FBSyxHQUFHNUMsZ0RBQU8sWUFBSzBDLE9BQUwsRUFBckI7TUFFQSxPQUFPRSxLQUFQO0lBQ0gsQ0FMYSxDQUFkO0lBT0EsS0FBS0MsT0FBTCxHQUFlLENBQWY7SUFDQSxLQUFLQyxVQUFMLEdBQWtCLElBQWxCO0lBRUEsS0FBS1QsUUFBTCxHQUFnQkEsUUFBaEI7SUFFQSxLQUFLVSxVQUFMO0VBQ0g7O0VBakJJO0lBQUE7SUFBQSxPQW1CTCxxQkFBWTtNQUFBOztNQUNSLEtBQUtULEtBQUwsQ0FBV1UsT0FBWCxDQUFtQixVQUFDUCxJQUFELEVBQU96QixLQUFQLEVBQWlCO1FBQ2hDLElBQUksS0FBSSxDQUFDNkIsT0FBTCxLQUFpQjdCLEtBQXJCLEVBQTRCO1VBQ3hCeUIsSUFBSSxDQUFDOUIsU0FBTCxDQUFlQyxHQUFmLENBQW1CLG1CQUFuQjtVQUNBNkIsSUFBSSxDQUFDUSxZQUFMLENBQWtCLGVBQWxCLEVBQW1DLElBQW5DO1FBQ0gsQ0FIRCxNQUdPO1VBQ0hSLElBQUksQ0FBQzlCLFNBQUwsQ0FBZVEsTUFBZixDQUFzQixtQkFBdEI7VUFDQXNCLElBQUksQ0FBQ1EsWUFBTCxDQUFrQixlQUFsQixFQUFtQyxLQUFuQztRQUNIO01BQ0osQ0FSRDtJQVNIO0VBN0JJO0lBQUE7SUFBQSxPQStCTCx1QkFBYztNQUFBOztNQUNWLEtBQUtWLE1BQUwsQ0FBWVMsT0FBWixDQUFvQixVQUFDSixLQUFELEVBQVE1QixLQUFSLEVBQWtCO1FBQ2xDLElBQUksTUFBSSxDQUFDNkIsT0FBTCxLQUFpQjdCLEtBQXJCLEVBQTRCO1VBQ3hCNEIsS0FBSyxDQUFDakMsU0FBTixDQUFnQkMsR0FBaEIsQ0FBb0IsZ0JBQXBCO1VBQ0EsTUFBSSxDQUFDa0MsVUFBTCxJQUFtQkksWUFBWSxDQUFDLE1BQUksQ0FBQ0osVUFBTixDQUEvQjtVQUNBLE1BQUksQ0FBQ0EsVUFBTCxHQUFrQmhDLFVBQVUsQ0FBQztZQUFBLE9BQU04QixLQUFLLENBQUNqQyxTQUFOLENBQWdCQyxHQUFoQixDQUFvQixvQkFBcEIsQ0FBTjtVQUFBLENBQUQsRUFBa0QsRUFBbEQsQ0FBNUI7UUFDSCxDQUpELE1BSU87VUFDSGdDLEtBQUssQ0FBQ2pDLFNBQU4sQ0FBZ0JRLE1BQWhCLENBQXVCLGdCQUF2QixFQUF5QyxvQkFBekM7UUFDSDtNQUNKLENBUkQ7SUFTSDtFQXpDSTtJQUFBO0lBQUEsT0EyQ0wsa0JBQVM7TUFDTCxLQUFLZ0MsU0FBTDtNQUNBLEtBQUtDLFdBQUw7SUFDSDtFQTlDSTtJQUFBO0lBQUEsT0FnREwsc0JBQWE7TUFBQTs7TUFDVCxLQUFLZCxLQUFMLENBQVdVLE9BQVgsQ0FBbUIsVUFBQ1AsSUFBRCxFQUFPekIsS0FBUCxFQUFpQjtRQUNoQ2YsMkNBQUUsQ0FBQ3dDLElBQUQsRUFBTyxPQUFQLEVBQWdCLFVBQUNyQixLQUFELEVBQVc7VUFDekJBLEtBQUssQ0FBQ0ksY0FBTjtVQUVBLE1BQUksQ0FBQ3FCLE9BQUwsR0FBZTdCLEtBQWY7O1VBQ0EsTUFBSSxDQUFDcUMsTUFBTDs7VUFFQSxNQUFJLENBQUNoQixRQUFMLElBQWlCLE1BQUksQ0FBQ0EsUUFBTCxFQUFqQjtRQUNILENBUEMsQ0FBRjtNQVFILENBVEQ7SUFVSDtFQTNESTs7RUFBQTtBQUFBLEdBQVQ7O0FBOERBLCtEQUFlRixHQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hFTyxJQUFNbkMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ3NELFFBQUQ7RUFBQSxJQUFXQyxPQUFYLHVFQUFxQnhCLFFBQXJCO0VBQUEsT0FBa0N3QixPQUFPLENBQUNDLGFBQVIsQ0FBc0JGLFFBQXRCLENBQWxDO0FBQUEsQ0FBaEI7QUFDQSxJQUFNcEIsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ29CLFFBQUQ7RUFBQSxJQUFXQyxPQUFYLHVFQUFxQnhCLFFBQXJCO0VBQUEsMEJBQXNDd0IsT0FBTyxDQUFDRSxnQkFBUixDQUF5QkgsUUFBekIsQ0FBdEM7QUFBQSxDQUFiO0FBRUEsSUFBTXJELEVBQUUsR0FBRyxTQUFMQSxFQUFLLENBQUNRLE1BQUQsRUFBU2lELElBQVQsRUFBZXJCLFFBQWYsRUFBNkM7RUFBQSxJQUFwQnNCLE9BQW9CLHVFQUFWLEtBQVU7RUFDM0QsSUFBSSxDQUFDbEQsTUFBRCxJQUFXLENBQUNBLE1BQU0sQ0FBQ21ELGdCQUF2QixFQUF5QztFQUV6Q25ELE1BQU0sQ0FBQ21ELGdCQUFQLENBQXdCRixJQUF4QixFQUE4QnJCLFFBQTlCLEVBQXdDc0IsT0FBeEM7QUFDSCxDQUpNO0FBS0EsSUFBTUUsR0FBRyxHQUFHLFNBQU5BLEdBQU0sQ0FBQ3BELE1BQUQsRUFBU2lELElBQVQsRUFBZXJCLFFBQWY7RUFBQSxPQUE0QjVCLE1BQU0sQ0FBQ3FELG1CQUFQLENBQTJCSixJQUEzQixFQUFpQ3JCLFFBQWpDLENBQTVCO0FBQUEsQ0FBWjtBQUNBLElBQU0wQixRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDdEQsTUFBRCxFQUFTNkMsUUFBVCxFQUFtQkksSUFBbkIsRUFBeUJNLE9BQXpCLEVBQWtDTCxPQUFsQyxFQUE4QztFQUNsRSxJQUFNTSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUM3QyxLQUFELEVBQVc7SUFDN0IsSUFBTThDLGFBQWEsR0FBRzlDLEtBQUssQ0FBQ1gsTUFBNUI7SUFDQSxJQUFNMEQsaUJBQWlCLEdBQUdELGFBQWEsQ0FBQzVDLE9BQWQsQ0FBc0JnQyxRQUF0QixDQUExQjs7SUFFQSxJQUFJYSxpQkFBSixFQUF1QjtNQUNuQkgsT0FBTyxDQUFDSSxJQUFSLENBQWFELGlCQUFiLEVBQWdDL0MsS0FBaEM7SUFDSDtFQUNKLENBUEQ7O0VBU0FuQixFQUFFLENBQUNRLE1BQUQsRUFBU2lELElBQVQsRUFBZU8sYUFBZixFQUE4QixDQUFDLENBQUNOLE9BQWhDLENBQUY7QUFDSCxDQVhNO0FBYUEsSUFBTVUsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ2pDLE9BQUQsRUFBYTtFQUNsQyxJQUFNa0MsSUFBSSxHQUFHbEMsT0FBTyxDQUFDbUMscUJBQVIsRUFBYjtFQUVBLE9BQU87SUFDSEMsR0FBRyxFQUFFRixJQUFJLENBQUNFLEdBQUwsR0FBVzNDLE1BQU0sQ0FBQzRDLE9BRHBCO0lBRUhDLElBQUksRUFBRUosSUFBSSxDQUFDSSxJQUFMLEdBQVk3QyxNQUFNLENBQUM4QztFQUZ0QixDQUFQO0FBSUgsQ0FQTTtBQVNBLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLElBQUQsRUFBc0I7RUFBQSxJQUFmQyxJQUFlLHVFQUFSLEdBQVE7RUFDMUMsSUFBSUMsVUFBSjtFQUVBLE9BQU8sWUFBYTtJQUFBLGtDQUFUQyxJQUFTO01BQVRBLElBQVM7SUFBQTs7SUFDaEJELFVBQVUsSUFBSTdCLFlBQVksQ0FBQzZCLFVBQUQsQ0FBMUI7SUFDQUEsVUFBVSxHQUFHakUsVUFBVSxDQUFDO01BQUEsT0FBTStELElBQUksTUFBSixTQUFRRyxJQUFSLENBQU47SUFBQSxDQUFELEVBQXNCRixJQUF0QixDQUF2QjtFQUNILENBSEQ7QUFJSCxDQVBNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQlA7QUFDQUcsa0RBQUEsQ0FBVyxDQUFDQyw4Q0FBRCxFQUFhQyw4Q0FBYixDQUFYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUksMkRBQUEsQ0FBb0JDLDBEQUFwQjs7QUFFQSxJQUFNRSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxHQUFNO0VBQ2RMLCtDQUFBLENBQVM7SUFDTE8sSUFBSSxFQUFFO0VBREQsQ0FBVCxFQURjLENBS2Q7O0VBQ0EsQ0FBQyxZQUFNO0lBQ0gsSUFBTUMsTUFBTSxHQUFHN0YsZ0RBQU8sQ0FBQyxTQUFELENBQXRCO0lBQ0EsSUFBTThGLFlBQVksR0FBR0QsTUFBTSxDQUFDRSxZQUE1QjtJQUNBLElBQU1DLEtBQUssR0FBRzlELDZDQUFJLENBQUMsZUFBRCxFQUFrQjJELE1BQWxCLENBQWxCO0lBQ0EsSUFBTUksUUFBUSxHQUFHRCxLQUFLLENBQUN4RCxHQUFOLENBQVUsVUFBQTBELElBQUk7TUFBQSxPQUFJbEcsZ0RBQU8sQ0FBQ2tHLElBQUksQ0FBQ3ZELFlBQUwsQ0FBa0IsTUFBbEIsQ0FBRCxDQUFYO0lBQUEsQ0FBZCxDQUFqQjtJQUNBLElBQU13RCxhQUFhLEdBQUcsRUFBdEI7O0lBQ0EsSUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQjtNQUFBLE9BQU1ILFFBQVEsQ0FBQ2pELE9BQVQsQ0FBaUIsVUFBQ3FELE9BQUQsRUFBVXJGLEtBQVY7UUFBQSxPQUFvQm1GLGFBQWEsQ0FBQ25GLEtBQUQsQ0FBYixHQUF1QixDQUFDLEVBQUVxRCxrREFBUyxDQUFDZ0MsT0FBRCxDQUFULENBQW1CN0IsR0FBbkIsR0FBeUJzQixZQUEzQixDQUFELEdBQTBDLENBQXJGO01BQUEsQ0FBakIsQ0FBTjtJQUFBLENBQXpCOztJQUNBLElBQU1RLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07TUFDckIsSUFBTTdCLE9BQU8sR0FBRzVDLE1BQU0sQ0FBQzRDLE9BQXZCO01BQ0EsSUFBSThCLFlBQVksR0FBR0osYUFBYSxDQUFDekYsTUFBZCxHQUF1QixDQUExQzs7TUFFQSxPQUFPNkYsWUFBUCxFQUFxQjtRQUNqQixJQUFJOUIsT0FBTyxJQUFJMEIsYUFBYSxDQUFDSSxZQUFELENBQTVCLEVBQTRDO1FBRTVDQSxZQUFZO01BQ2Y7O01BRURQLEtBQUssQ0FBQ2hELE9BQU4sQ0FBYyxVQUFDa0QsSUFBRCxFQUFPbEYsS0FBUCxFQUFpQjtRQUMzQmtGLElBQUksQ0FBQ3ZGLFNBQUwsQ0FBZUssS0FBSyxLQUFLdUYsWUFBVixHQUF5QixLQUF6QixHQUFpQyxRQUFoRCxFQUEwRCxzQkFBMUQ7TUFDSCxDQUZEO0lBR0gsQ0FiRDs7SUFjQSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDeEYsS0FBRCxFQUFXO01BQzNCYSxNQUFNLENBQUM0RSxNQUFQLENBQWM7UUFDVmpDLEdBQUcsRUFBRTJCLGFBQWEsQ0FBQ25GLEtBQUQsQ0FEUjtRQUVWMEYsUUFBUSxFQUFFO01BRkEsQ0FBZDtJQUlILENBTEQ7O0lBT0FOLGdCQUFnQjtJQUVoQkosS0FBSyxDQUFDaEQsT0FBTixDQUFjLFVBQUNrRCxJQUFELEVBQU9sRixLQUFQLEVBQWlCO01BQzNCZiwyQ0FBRSxDQUFDaUcsSUFBRCxFQUFPLE9BQVAsRUFBZ0IsVUFBQzlFLEtBQUQsRUFBVztRQUN6QkEsS0FBSyxDQUFDSSxjQUFOO1FBQ0FnRixXQUFXLENBQUN4RixLQUFELENBQVg7UUFDQXNGLFVBQVU7TUFDYixDQUpDLENBQUY7SUFLSCxDQU5EO0lBUUFyRywyQ0FBRSxDQUFDNEIsTUFBRCxFQUFTLE1BQVQsRUFBaUJ1RSxnQkFBakIsQ0FBRjtJQUNBbkcsMkNBQUUsQ0FBQzRCLE1BQUQsRUFBUyxRQUFULEVBQW1CdUUsZ0JBQW5CLENBQUY7SUFDQW5HLDJDQUFFLENBQUM0QixNQUFELEVBQVMsUUFBVCxFQUFtQnlFLFVBQW5CLENBQUY7RUFDSCxDQXpDRCxJQU5jLENBaURkOzs7RUFDQSxDQUFDLFlBQU07SUFDSCxJQUFNSyxTQUFTLEdBQUczRyxnREFBTyxDQUFDLGFBQUQsQ0FBekI7SUFDQSxJQUFNNEcsR0FBRyxHQUFHLElBQUl6RSw0Q0FBSixDQUFRbkMsZ0RBQU8sQ0FBQyxNQUFELEVBQVMyRyxTQUFULENBQWYsQ0FBWjtJQUNBQyxHQUFHLENBQUN0RSxLQUFKLENBQVUsQ0FBVixFQUFhdUUsS0FBYjtJQUVBLElBQU1DLGlCQUFpQixHQUFHLElBQUk3Qiw4Q0FBSixDQUFXLHFCQUFYLEVBQWtDO01BQ3hEOEIsYUFBYSxFQUFFLE1BRHlDO01BRXhEQyxZQUFZLEVBQUUsRUFGMEM7TUFHeERDLGNBQWMsRUFBRSxJQUh3QztNQUl4REMsUUFBUSxFQUFFLElBSjhDO01BS3hEQyxjQUFjLEVBQUUsSUFMd0M7TUFNeERDLGNBQWMsRUFBRSxLQU53QztNQU94REMsVUFBVSxFQUFFO1FBQ1JDLE1BQU0sRUFBRSxxQkFEQTtRQUVSQyxNQUFNLEVBQUU7TUFGQTtJQVA0QyxDQUFsQyxDQUExQjtFQWFILENBbEJELElBbERjLENBc0VkOzs7RUFDQSxDQUFDLFlBQU07SUFDSDtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFFQSxJQUFNQyxZQUFZLEdBQUcsSUFBSXZDLDhDQUFKLENBQVcsZUFBWCxFQUE0QjtNQUM3Q3dDLElBQUksRUFBRSxJQUR1QztNQUU3Q1YsYUFBYSxFQUFFLE1BRjhCO01BRzdDRSxjQUFjLEVBQUUsSUFINkI7TUFJN0NHLGNBQWMsRUFBRSxLQUo2QjtNQUs3Q0MsVUFBVSxFQUFFO1FBQ1JDLE1BQU0sRUFBRSxxQkFEQTtRQUVSQyxNQUFNLEVBQUU7TUFGQSxDQUxpQztNQVU3Q3RILEVBQUUsRUFBRztJQVZ3QyxDQUE1QixDQUFyQixDQVJHLENBeUJIO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBOztJQUdBLENBQUMsWUFBTTtNQUNILElBQU15SCxLQUFLLEdBQUcsSUFBSXJILDhDQUFKLEVBQWQ7TUFDQSxJQUFNc0gsUUFBUSxHQUFHekYsNkNBQUksQ0FBQyxhQUFELENBQXJCOztNQUNBLElBQU0wRixLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFBQyxPQUFPO1FBQUEsT0FBSUEsT0FBTyxDQUFDbEYsWUFBUixDQUFxQixNQUFyQixDQUFKO01BQUEsQ0FBckI7O01BQ0EsSUFBTW1GLFFBQVEsR0FBR0gsUUFBUSxDQUFDSSxNQUFULENBQWdCLFVBQUNELFFBQUQsRUFBV0QsT0FBWCxFQUF1QjtRQUNwRCxJQUFNRyxFQUFFLEdBQUdKLEtBQUssQ0FBQ0MsT0FBRCxDQUFoQjtRQUNBLElBQU1JLE9BQU8sR0FBR2pJLGdEQUFPLENBQUNnSSxFQUFELENBQXZCO1FBRUFGLFFBQVEsQ0FBQ0UsRUFBRCxDQUFSLEdBQWVDLE9BQWY7UUFFQSxPQUFPSCxRQUFQO01BQ0gsQ0FQZ0IsRUFPZCxFQVBjLENBQWpCO01BU0FILFFBQVEsQ0FBQzNFLE9BQVQsQ0FBaUIsVUFBQzZFLE9BQUQsRUFBYTtRQUMxQjVILDJDQUFFLENBQUM0SCxPQUFELEVBQVUsT0FBVixFQUFtQixVQUFDekcsS0FBRCxFQUFXO1VBQzVCQSxLQUFLLENBQUNJLGNBQU47VUFFQSxJQUFNd0csRUFBRSxHQUFHSixLQUFLLENBQUNDLE9BQUQsQ0FBaEI7VUFDQSxJQUFNSSxPQUFPLEdBQUdILFFBQVEsQ0FBQ0UsRUFBRCxDQUF4QjtVQUVBTixLQUFLLENBQUNRLElBQU4sQ0FBV0QsT0FBWDtRQUNILENBUEMsQ0FBRjtNQVFILENBVEQsRUFiRyxDQXdCSDtJQUNILENBekJEO0VBMkJILENBaEVELElBdkVjLENBeUlkOzs7RUFDQSxDQUFDLFlBQU07SUFDSCxJQUFNSCxRQUFRLEdBQUc5SCxnREFBTyxDQUFDLFdBQUQsQ0FBeEI7SUFDQSxJQUFNNEcsR0FBRyxHQUFHLElBQUl6RSw0Q0FBSixDQUFRbkMsZ0RBQU8sQ0FBQyxNQUFELEVBQVM4SCxRQUFULENBQWYsQ0FBWjtJQUNBbEIsR0FBRyxDQUFDdEUsS0FBSixDQUFVLENBQVYsRUFBYXVFLEtBQWI7RUFDSCxDQUpELElBMUljLENBZ0pkOzs7RUFDQSxDQUFDLFlBQU07SUFDSCxJQUFNc0IsT0FBTyxHQUFHbkksZ0RBQU8sQ0FBQyxXQUFELENBQXZCO0lBQ0EsSUFBTTRHLEdBQUcsR0FBRyxJQUFJekUsNENBQUosQ0FBUW5DLGdEQUFPLENBQUMsTUFBRCxFQUFTbUksT0FBVCxDQUFmLENBQVo7SUFDQSxJQUFNVCxLQUFLLEdBQUcsSUFBSXJILDhDQUFKLEVBQWQ7SUFDQSxJQUFNc0gsUUFBUSxHQUFHekYsNkNBQUksQ0FBQyxHQUFELEVBQU1pRyxPQUFOLENBQXJCOztJQUNBLElBQU1QLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUFDLE9BQU87TUFBQSxPQUFJQSxPQUFPLENBQUNsRixZQUFSLENBQXFCLE1BQXJCLENBQUo7SUFBQSxDQUFyQjs7SUFDQSxJQUFNbUYsUUFBUSxHQUFHSCxRQUFRLENBQUNJLE1BQVQsQ0FBZ0IsVUFBQ0QsUUFBRCxFQUFXRCxPQUFYLEVBQXVCO01BQ3BELElBQU1HLEVBQUUsR0FBR0osS0FBSyxDQUFDQyxPQUFELENBQWhCO01BQ0EsSUFBTUksT0FBTyxHQUFHakksZ0RBQU8sQ0FBQ2dJLEVBQUQsQ0FBdkI7TUFFQUYsUUFBUSxDQUFDRSxFQUFELENBQVIsR0FBZUMsT0FBZjtNQUVBLE9BQU9ILFFBQVA7SUFDSCxDQVBnQixFQU9kLEVBUGMsQ0FBakI7SUFTQUgsUUFBUSxDQUFDM0UsT0FBVCxDQUFpQixVQUFDNkUsT0FBRCxFQUFhO01BQzFCNUgsMkNBQUUsQ0FBQzRILE9BQUQsRUFBVSxPQUFWLEVBQW1CLFVBQUN6RyxLQUFELEVBQVc7UUFDNUJBLEtBQUssQ0FBQ0ksY0FBTjtRQUVBLElBQU13RyxFQUFFLEdBQUdKLEtBQUssQ0FBQ0MsT0FBRCxDQUFoQjtRQUNBLElBQU1JLE9BQU8sR0FBR0gsUUFBUSxDQUFDRSxFQUFELENBQXhCO1FBRUFOLEtBQUssQ0FBQ1EsSUFBTixDQUFXRCxPQUFYO01BQ0gsQ0FQQyxDQUFGO0lBUUgsQ0FURDtJQVdBckIsR0FBRyxDQUFDdEUsS0FBSixDQUFVLENBQVYsRUFBYXVFLEtBQWI7SUFFQSxJQUFNdUIsWUFBWSxHQUFHcEksZ0RBQU8sQ0FBQyxpQkFBRCxDQUE1QjtJQUNBLElBQU1xSSxJQUFJLEdBQUd0RyxRQUFRLENBQUN5QixhQUFULENBQXVCLE1BQXZCLEVBQStCNEUsWUFBL0IsQ0FBYjtJQUVBQyxJQUFJLENBQUN6RSxnQkFBTCxDQUFzQixRQUF0QixFQUFnQyxVQUFDeEMsS0FBRCxFQUFXO01BQ3ZDQSxLQUFLLENBQUNJLGNBQU47TUFFQSxJQUFNOEcsUUFBUSxHQUFHLElBQUlDLFFBQUosQ0FBYUYsSUFBYixDQUFqQjtNQUVBRyxLQUFLLENBQUNILElBQUksQ0FBQ0ksTUFBTixFQUFjO1FBQ2ZDLE1BQU0sRUFBRUwsSUFBSSxDQUFDSyxNQURFO1FBRWZwSSxJQUFJLEVBQUVnSTtNQUZTLENBQWQsQ0FBTCxDQUlDSyxJQUpELENBSU0sVUFBQUMsUUFBUTtRQUFBLE9BQUlBLFFBQVEsQ0FBQ0MsSUFBVCxFQUFKO01BQUEsQ0FKZCxFQUtDRixJQUxELENBS00sVUFBQUcsSUFBSSxFQUFJO1FBQ1ZDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxPQUFOLENBQUw7UUFDQUMsUUFBUSxDQUFDQyxNQUFUO01BQ0gsQ0FSRDtJQVNILENBZEQ7RUFnQkgsQ0EvQ0QsSUFqSmMsQ0FrTWQ7OztFQUNBLENBQUMsWUFBTTtJQUNILElBQU1DLE1BQU0sR0FBR25KLGdEQUFPLENBQUMsUUFBRCxDQUF0QjtJQUNBLElBQU1vSixPQUFPLEdBQUdwSixnREFBTyxDQUFDLGtCQUFELEVBQXFCbUosTUFBckIsQ0FBdkI7SUFDQSxJQUFNRSxZQUFZLEdBQUdySixnREFBTyxDQUFDLHVCQUFELENBQTVCO0lBQ0EsSUFBTTBILEtBQUssR0FBRyxJQUFJckgsOENBQUosRUFBZDtJQUdBK0ksT0FBTyxDQUFDeEYsZ0JBQVIsQ0FBeUIsT0FBekIsRUFBa0MsVUFBQ3hDLEtBQUQsRUFBVztNQUN6Q0EsS0FBSyxDQUFDSSxjQUFOO01BRUFrRyxLQUFLLENBQUNRLElBQU4sQ0FBV21CLFlBQVg7SUFDSCxDQUpEO0VBS0gsQ0FaRDtBQWNILENBak5EOztBQW1OQXRILFFBQVEsQ0FBQzZCLGdCQUFULENBQTBCLGtCQUExQixFQUE4QzhCLEdBQTlDOzs7Ozs7Ozs7OztBQy9OQTs7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQzVCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLCtCQUErQix3Q0FBd0M7V0FDdkU7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQkFBaUIscUJBQXFCO1dBQ3RDO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esa0JBQWtCLHFCQUFxQjtXQUN2QyxvSEFBb0gsaURBQWlEO1dBQ3JLO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0M3QkE7V0FDQTtXQUNBO1dBQ0EsZUFBZSw0QkFBNEI7V0FDM0MsZUFBZTtXQUNmLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRCw4Q0FBOEM7Ozs7O1dDQTlDO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ0pBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQSw4Q0FBOEM7O1dBRTlDO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsbUNBQW1DO1dBQ3BFO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7VUVsREE7VUFDQTtVQUNBO1VBQ0EsMkRBQTJELCtDQUErQztVQUMxRyxxRkFBcUYsbURBQW1EO1VBQ3hJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vanMvTW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vanMvVGFiLmpzIiwid2VicGFjazovLy8uL2pzL2hlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9qcy9wYy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc2Nzcy9wYy9hcHAuc2NzcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9ub2RlIG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovLy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovLy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2ZpbmRPbmUsIG9ufSBmcm9tICcuL2hlbHBlcic7XHJcblxyXG5jb25zdCBDTEFTU19OQU1FX0JPRFlfT1BFTiA9ICdtb2RhbC1vcGVuJztcclxuY29uc3QgQ0xBU1NfTkFNRV9PUEVOID0gJ21vZGFsLS1vcGVuJztcclxuY29uc3QgQ0xBU1NfTkFNRV9GQURFID0gJ21vZGFsLS1mYWRlJztcclxuXHJcbmNvbnN0IE1vZGFsID0gY2xhc3Mge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5ib2R5ID0gZmluZE9uZSgnYm9keScpO1xyXG5cclxuICAgICAgICB0aGlzLm1vZGFscyA9IFtdO1xyXG4gICAgICAgIHRoaXMub25FdmVudCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW4odGFyZ2V0KSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm1vZGFscy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5ib2R5LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9CT0RZX09QRU4pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5tb2RhbHMucHVzaCh0YXJnZXQpO1xyXG4gICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfT1BFTik7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0YXJnZXQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0ZBREUpLCAwKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2UodGFyZ2V0TW9kYWwpIHtcclxuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLm1vZGFscy5sZW5ndGggLSAxO1xyXG5cclxuICAgICAgICBpZiAodGFyZ2V0TW9kYWwpIHtcclxuICAgICAgICAgICAgaW5kZXggPSB0aGlzLm1vZGFscy5pbmRleE9mKHRhcmdldE1vZGFsKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIGluZGV4ID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5tb2RhbHMuc3BsaWNlKGluZGV4LCAxKVswXTtcclxuXHJcbiAgICAgICAgaWYgKCF0YXJnZXQpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9GQURFLCBDTEFTU19OQU1FX09QRU4pO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMubW9kYWxzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLmJvZHkuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0JPRFlfT1BFTik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xvc2UoZXZlbnQpIHtcclxuICAgICAgICBjb25zdCBjbG9zZSA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcubW9kYWxfX2Nsb3NlJyk7XHJcblxyXG4gICAgICAgIGlmIChjbG9zZSkge1xyXG4gICAgICAgICAgICBpZiAoY2xvc2UudGFnTmFtZSA9PT0gJ0EnKSBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkV2ZW50KCkge1xyXG4gICAgICAgIG9uKHRoaXMuYm9keSwgJ2NsaWNrJywgdGhpcy5vbkNsb3NlLmJpbmQodGhpcyksIGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc2Nyb2xsV2lkdGgoKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguYWJzKHdpbmRvdy5pbm5lcldpZHRoIC0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoKTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vZGFsOyIsImltcG9ydCB7ZmluZE9uZSwgZmluZCwgb259IGZyb20gJy4vaGVscGVyJztcclxuXHJcbmNvbnN0IFRhYiA9IGNsYXNzIHtcclxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuICAgICAgICB0aGlzLm1lbnVzID0gZmluZCgnLnRhYl9fbWVudScsIHRoaXMuZWxlbWVudCk7XHJcbiAgICAgICAgdGhpcy5wYW5lbHMgPSB0aGlzLm1lbnVzLm1hcChtZW51ID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcGFuZWxJZCA9IG1lbnUuZ2V0QXR0cmlidXRlKCdhcmlhLWNvbnRyb2xzJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhbmVsID0gZmluZE9uZShgIyR7cGFuZWxJZH1gKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBwYW5lbDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gMDtcclxuICAgICAgICB0aGlzLnBhbmVsVGltZXIgPSBudWxsO1xyXG5cclxuICAgICAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdEV2ZW50cygpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZVRhYigpIHtcclxuICAgICAgICB0aGlzLm1lbnVzLmZvckVhY2goKG1lbnUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnQgPT09IGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ3RhYl9fbWVudS0tYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICBtZW51LnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsIHRydWUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKCd0YWJfX21lbnUtLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgbWVudS5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVQYW5lbCgpIHtcclxuICAgICAgICB0aGlzLnBhbmVscy5mb3JFYWNoKChwYW5lbCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudCA9PT0gaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIHBhbmVsLmNsYXNzTGlzdC5hZGQoJ3RhYl9fcGFuZWwtLWluJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhbmVsVGltZXIgJiYgY2xlYXJUaW1lb3V0KHRoaXMucGFuZWxUaW1lcik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhbmVsVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHBhbmVsLmNsYXNzTGlzdC5hZGQoJ3RhYl9fcGFuZWwtLWFjdGl2ZScpLCAxMyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwYW5lbC5jbGFzc0xpc3QucmVtb3ZlKCd0YWJfX3BhbmVsLS1pbicsICd0YWJfX3BhbmVsLS1hY3RpdmUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZSgpIHtcclxuICAgICAgICB0aGlzLnRvZ2dsZVRhYigpO1xyXG4gICAgICAgIHRoaXMudG9nZ2xlUGFuZWwoKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0RXZlbnRzKCkge1xyXG4gICAgICAgIHRoaXMubWVudXMuZm9yRWFjaCgobWVudSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgb24obWVudSwgJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudCA9IGluZGV4O1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGxiYWNrICYmIHRoaXMuY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYWI7IiwiZXhwb3J0IGNvbnN0IGZpbmRPbmUgPSAoc2VsZWN0b3IsIGNvbnRleHQgPSBkb2N1bWVudCkgPT4gY29udGV4dC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcclxuZXhwb3J0IGNvbnN0IGZpbmQgPSAoc2VsZWN0b3IsIGNvbnRleHQgPSBkb2N1bWVudCkgPT4gWy4uLmNvbnRleHQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcildO1xyXG5cclxuZXhwb3J0IGNvbnN0IG9uID0gKHRhcmdldCwgdHlwZSwgY2FsbGJhY2ssIGNhcHR1cmUgPSBmYWxzZSkgPT4ge1xyXG4gICAgaWYgKCF0YXJnZXQgfHwgIXRhcmdldC5hZGRFdmVudExpc3RlbmVyKSByZXR1cm47XHJcblxyXG4gICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgY2FsbGJhY2ssIGNhcHR1cmUpO1xyXG59O1xyXG5leHBvcnQgY29uc3Qgb2ZmID0gKHRhcmdldCwgdHlwZSwgY2FsbGJhY2spID0+IHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGNhbGxiYWNrKTtcclxuZXhwb3J0IGNvbnN0IGRlbGVnYXRlID0gKHRhcmdldCwgc2VsZWN0b3IsIHR5cGUsIGhhbmRsZXIsIGNhcHR1cmUpID0+IHtcclxuICAgIGNvbnN0IGRpc3BhdGNoRXZlbnQgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCB0YXJnZXRFbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgIGNvbnN0IHBvdGVudGlhbEVsZW1lbnRzID0gdGFyZ2V0RWxlbWVudC5jbG9zZXN0KHNlbGVjdG9yKTtcclxuXHJcbiAgICAgICAgaWYgKHBvdGVudGlhbEVsZW1lbnRzKSB7XHJcbiAgICAgICAgICAgIGhhbmRsZXIuY2FsbChwb3RlbnRpYWxFbGVtZW50cywgZXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgb24odGFyZ2V0LCB0eXBlLCBkaXNwYXRjaEV2ZW50LCAhIWNhcHR1cmUpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldE9mZnNldCA9IChlbGVtZW50KSA9PiB7XHJcbiAgICBjb25zdCByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHRvcDogcmVjdC50b3AgKyB3aW5kb3cuc2Nyb2xsWSxcclxuICAgICAgICBsZWZ0OiByZWN0LmxlZnQgKyB3aW5kb3cuc2Nyb2xsWFxyXG4gICAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkZWJvdW5jZSA9IChmdW5jLCB3YWl0ID0gMzAwKSA9PiB7XHJcbiAgICBsZXQgaW5EZWJvdW5jZTtcclxuXHJcbiAgICByZXR1cm4gKC4uLmFyZ3MpID0+IHtcclxuICAgICAgICBpbkRlYm91bmNlICYmIGNsZWFyVGltZW91dChpbkRlYm91bmNlKTtcclxuICAgICAgICBpbkRlYm91bmNlID0gc2V0VGltZW91dCgoKSA9PiBmdW5jKC4uLmFyZ3MpLCB3YWl0KTtcclxuICAgIH07XHJcbn07IiwiaW1wb3J0IFN3aXBlciwge05hdmlnYXRpb24sIFBhZ2luYXRpb24gfSBmcm9tICdzd2lwZXInO1xyXG5Td2lwZXIudXNlKFtOYXZpZ2F0aW9uLCBQYWdpbmF0aW9uXSk7XHJcbmltcG9ydCBBT1MgZnJvbSAnYW9zJztcclxuaW1wb3J0IHNhbCBmcm9tICdzYWwuanMnXHJcbmltcG9ydCBnc2FwIGZyb20gJ2dzYXAnO1xyXG5pbXBvcnQgU2Nyb2xsVHJpZ2dlciBmcm9tICdnc2FwL1Njcm9sbFRyaWdnZXInO1xyXG5pbXBvcnQge2ZpbmRPbmUsIGZpbmQsIGdldE9mZnNldCwgb259IGZyb20gJy4uL2hlbHBlcic7XHJcbmltcG9ydCBUYWIgZnJvbSAnLi4vVGFiJztcclxuaW1wb3J0IE1vZGFsIGZyb20gXCIuLi9Nb2RhbFwiO1xyXG5cclxuZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUcmlnZ2VyKTtcclxuXHJcbmNvbnN0IGFwcCA9ICgpID0+IHtcclxuICAgIEFPUy5pbml0KHtcclxuICAgICAgICBvbmNlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBTY3JvbGxTcHlcclxuICAgICgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZmluZE9uZSgnLmhlYWRlcicpO1xyXG4gICAgICAgIGNvbnN0IGhlYWRlckhlaWdodCA9IGhlYWRlci5jbGllbnRIZWlnaHQ7XHJcbiAgICAgICAgY29uc3QgbGlua3MgPSBmaW5kKCcuaGVhZGVyX19saW5rJywgaGVhZGVyKTtcclxuICAgICAgICBjb25zdCBzZWN0aW9ucyA9IGxpbmtzLm1hcChsaW5rID0+IGZpbmRPbmUobGluay5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSkpO1xyXG4gICAgICAgIGNvbnN0IHNlY3Rpb25zU3RhcnQgPSBbXTtcclxuICAgICAgICBjb25zdCBnZXRTZWN0aW9uc1N0YXJ0ID0gKCkgPT4gc2VjdGlvbnMuZm9yRWFjaCgoc2VjdGlvbiwgaW5kZXgpID0+IHNlY3Rpb25zU3RhcnRbaW5kZXhdID0gfn4oZ2V0T2Zmc2V0KHNlY3Rpb24pLnRvcCAtIGhlYWRlckhlaWdodCkrNSk7XHJcbiAgICAgICAgY29uc3QgdG9nZ2xlTGluayA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsWSA9IHdpbmRvdy5zY3JvbGxZO1xyXG4gICAgICAgICAgICBsZXQgY3VycmVudEluZGV4ID0gc2VjdGlvbnNTdGFydC5sZW5ndGggLSAxO1xyXG5cclxuICAgICAgICAgICAgd2hpbGUgKGN1cnJlbnRJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNjcm9sbFkgPj0gc2VjdGlvbnNTdGFydFtjdXJyZW50SW5kZXhdKSBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50SW5kZXgtLTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGlua3MuZm9yRWFjaCgobGluaywgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxpbmsuY2xhc3NMaXN0W2luZGV4ID09PSBjdXJyZW50SW5kZXggPyAnYWRkJyA6ICdyZW1vdmUnXSgnaGVhZGVyX19saW5rLS1hY3RpdmUnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBtb3ZlU2VjdGlvbiA9IChpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsKHtcclxuICAgICAgICAgICAgICAgIHRvcDogc2VjdGlvbnNTdGFydFtpbmRleF0sXHJcbiAgICAgICAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgZ2V0U2VjdGlvbnNTdGFydCgpO1xyXG5cclxuICAgICAgICBsaW5rcy5mb3JFYWNoKChsaW5rLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBvbihsaW5rLCAnY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBtb3ZlU2VjdGlvbihpbmRleCk7XHJcbiAgICAgICAgICAgICAgICB0b2dnbGVMaW5rKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBvbih3aW5kb3csICdsb2FkJywgZ2V0U2VjdGlvbnNTdGFydCk7XHJcbiAgICAgICAgb24od2luZG93LCAncmVzaXplJywgZ2V0U2VjdGlvbnNTdGFydCk7XHJcbiAgICAgICAgb24od2luZG93LCAnc2Nyb2xsJywgdG9nZ2xlTGluayk7XHJcbiAgICB9KSgpO1xyXG5cclxuICAgIC8vIEJyYW5kIEZpbG1cclxuICAgICgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYnJhbmRGaWxtID0gZmluZE9uZSgnLmJyYW5kLWZpbG0nKTtcclxuICAgICAgICBjb25zdCB0YWIgPSBuZXcgVGFiKGZpbmRPbmUoJy50YWInLCBicmFuZEZpbG0pKTtcclxuICAgICAgICB0YWIubWVudXNbMF0uY2xpY2soKTtcclxuXHJcbiAgICAgICAgY29uc3QgYnJhbmRGaWxtQ2Fyb3VzZWwgPSBuZXcgU3dpcGVyKCcuYnJhbmQtZmlsbSAuc3dpcGVyJywge1xyXG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXHJcbiAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogNTAsXHJcbiAgICAgICAgICAgIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxyXG4gICAgICAgICAgICBvYnNlcnZlcjogdHJ1ZSxcclxuICAgICAgICAgICAgb2JzZXJ2ZVBhcmVudHM6IHRydWUsXHJcbiAgICAgICAgICAgIGFsbG93VG91Y2hNb3ZlOiBmYWxzZSxcclxuICAgICAgICAgICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgbmV4dEVsOiBcIi5zd2lwZXItYnV0dG9uLW5leHRcIixcclxuICAgICAgICAgICAgICAgIHByZXZFbDogXCIuc3dpcGVyLWJ1dHRvbi1wcmV2XCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfSkoKTtcclxuXHJcbiAgICAvLyBXSFkgTk9UIFJPQURcclxuICAgICgoKSA9PiB7XHJcbiAgICAgICAgLy8gY29uc3QgaWZyYW1lcyA9IGZpbmQoJy5zaG93cm9vbS1hcHBzX19jb250ZW50LXN3aXBlciBpZnJhbWUnKTtcclxuICAgICAgICAvLyAvL2NvbnNvbGUubG9nKGlmcmFtZXMpXHJcbiAgICAgICAgLy8gbGV0IGlmcmFtZVNyYyA9IFtdO1xyXG4gICAgICAgIC8vIGlmcmFtZXMuZm9yRWFjaCgoaWZyYW1lKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIGlmcmFtZVNyYy5wdXNoKGlmcmFtZS5zcmMpO1xyXG4gICAgICAgIC8vIH0pO1xyXG5cclxuICAgICAgICBjb25zdCByb2FkQ2Fyb3VzZWwgPSBuZXcgU3dpcGVyKCcucm9hZCAuc3dpcGVyJywge1xyXG4gICAgICAgICAgICBsb29wOiB0cnVlLFxyXG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXHJcbiAgICAgICAgICAgIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxyXG4gICAgICAgICAgICBhbGxvd1RvdWNoTW92ZTogZmFsc2UsXHJcbiAgICAgICAgICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgICAgICAgICAgIG5leHRFbDogXCIuc3dpcGVyLWJ1dHRvbi1uZXh0XCIsXHJcbiAgICAgICAgICAgICAgICBwcmV2RWw6IFwiLnN3aXBlci1idXR0b24tcHJldlwiLFxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgb24gOiB7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgLy8gY29uc3Qgcm9hZENhcm91c2VsID0gbmV3IFN3aXBlcignLnJvYWQgLnN3aXBlcicsIHtcclxuICAgICAgICAvLyAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgICAvLyAgICAgc2xpZGVzUGVyVmlldzogJ2F1dG8nLFxyXG4gICAgICAgIC8vICAgICBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcclxuICAgICAgICAvLyAgICAgYWxsb3dUb3VjaE1vdmU6IGZhbHNlLFxyXG4gICAgICAgIC8vICAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgICAgLy8gICAgICAgICBuZXh0RWw6IFwiLnN3aXBlci1idXR0b24tbmV4dFwiLFxyXG4gICAgICAgIC8vICAgICAgICAgcHJldkVsOiBcIi5zd2lwZXItYnV0dG9uLXByZXZcIixcclxuICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAvLyB9KTtcclxuXHJcblxyXG4gICAgICAgICgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1vZGFsID0gbmV3IE1vZGFsKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRyaWdnZXJzID0gZmluZCgnLnJvYWRfX2xpbmsnKTtcclxuICAgICAgICAgICAgY29uc3QgZ2V0SWQgPSB0cmlnZ2VyID0+IHRyaWdnZXIuZ2V0QXR0cmlidXRlKCdocmVmJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnRzID0gdHJpZ2dlcnMucmVkdWNlKChjb250ZW50cywgdHJpZ2dlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaWQgPSBnZXRJZCh0cmlnZ2VyKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBmaW5kT25lKGlkKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb250ZW50c1tpZF0gPSBjb250ZW50O1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBjb250ZW50cztcclxuICAgICAgICAgICAgfSwge30pO1xyXG5cclxuICAgICAgICAgICAgdHJpZ2dlcnMuZm9yRWFjaCgodHJpZ2dlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgb24odHJpZ2dlciwgJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaWQgPSBnZXRJZCh0cmlnZ2VyKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb250ZW50ID0gY29udGVudHNbaWRdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBtb2RhbC5vcGVuKGNvbnRlbnQpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy90cmlnZ2Vyc1s0XS5jbGljaygpO1xyXG4gICAgICAgIH0pKCk7XHJcblxyXG4gICAgfSkoKTtcclxuXHJcbiAgICAvLyBXSFkgTk9UIENPTlRFTlRTXHJcbiAgICAoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvbnRlbnRzID0gZmluZE9uZSgnLmNvbnRlbnRzJyk7XHJcbiAgICAgICAgY29uc3QgdGFiID0gbmV3IFRhYihmaW5kT25lKCcudGFiJywgY29udGVudHMpKTtcclxuICAgICAgICB0YWIubWVudXNbMF0uY2xpY2soKTtcclxuICAgIH0pKCk7XHJcblxyXG4gICAgLy8gQk9PU1QgVVNcclxuICAgICgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYm9vc3RVcyA9IGZpbmRPbmUoJy5ib29zdC11cycpO1xyXG4gICAgICAgIGNvbnN0IHRhYiA9IG5ldyBUYWIoZmluZE9uZSgnLnRhYicsIGJvb3N0VXMpKTtcclxuICAgICAgICBjb25zdCBtb2RhbCA9IG5ldyBNb2RhbCgpO1xyXG4gICAgICAgIGNvbnN0IHRyaWdnZXJzID0gZmluZCgnYScsIGJvb3N0VXMpO1xyXG4gICAgICAgIGNvbnN0IGdldElkID0gdHJpZ2dlciA9PiB0cmlnZ2VyLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xyXG4gICAgICAgIGNvbnN0IGNvbnRlbnRzID0gdHJpZ2dlcnMucmVkdWNlKChjb250ZW50cywgdHJpZ2dlcikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpZCA9IGdldElkKHRyaWdnZXIpO1xyXG4gICAgICAgICAgICBjb25zdCBjb250ZW50ID0gZmluZE9uZShpZCk7XHJcblxyXG4gICAgICAgICAgICBjb250ZW50c1tpZF0gPSBjb250ZW50O1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGNvbnRlbnRzO1xyXG4gICAgICAgIH0sIHt9KTtcclxuXHJcbiAgICAgICAgdHJpZ2dlcnMuZm9yRWFjaCgodHJpZ2dlcikgPT4ge1xyXG4gICAgICAgICAgICBvbih0cmlnZ2VyLCAnY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgaWQgPSBnZXRJZCh0cmlnZ2VyKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBjb250ZW50c1tpZF07XHJcblxyXG4gICAgICAgICAgICAgICAgbW9kYWwub3Blbihjb250ZW50KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRhYi5tZW51c1swXS5jbGljaygpO1xyXG5cclxuICAgICAgICBjb25zdCBib29zdFVzTW9kYWwgPSBmaW5kT25lKCcubW9kYWwtYm9vc3QtdXMnKTtcclxuICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScsIGJvb3N0VXNNb2RhbCk7XHJcblxyXG4gICAgICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKTtcclxuXHJcbiAgICAgICAgICAgIGZldGNoKGZvcm0uYWN0aW9uLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6IGZvcm0ubWV0aG9kLFxyXG4gICAgICAgICAgICAgICAgYm9keTogZm9ybURhdGFcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KGRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfSkoKTtcclxuXHJcbiAgICAvL2Zvb3RlciDqsJzsnbjsoJXrs7Qg7LKY66asIOuwqey5qFxyXG4gICAgKCgpID0+IHtcclxuICAgICAgICBjb25zdCBmb290ZXIgPSBmaW5kT25lKCdmb290ZXInKTtcclxuICAgICAgICBjb25zdCBwcml2YWN5ID0gZmluZE9uZSgnLmZvb3Rlcl9fcHJpdmFjeScsIGZvb3Rlcik7XHJcbiAgICAgICAgY29uc3QgcHJpdmFjeU1vZGFsID0gZmluZE9uZSgnLm1vZGFsLWZvb3Rlci1wcml2YWN5Jyk7XHJcbiAgICAgICAgY29uc3QgbW9kYWwgPSBuZXcgTW9kYWwoKTtcclxuXHJcblxyXG4gICAgICAgIHByaXZhY3kuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIG1vZGFsLm9wZW4ocHJpdmFjeU1vZGFsKTtcclxuICAgICAgICB9KVxyXG4gICAgfSkoKTtcclxuXHJcbn07XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgYXBwKTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHRsb2FkZWQ6IGZhbHNlLFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcblx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSBmdW5jdGlvbihyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpIHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGNodW5rSWRzID0gZGVmZXJyZWRbaV1bMF07XG5cdFx0dmFyIGZuID0gZGVmZXJyZWRbaV1bMV07XG5cdFx0dmFyIHByaW9yaXR5ID0gZGVmZXJyZWRbaV1bMl07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pOyB9KSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGU7IH07XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ubWQgPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0bW9kdWxlLnBhdGhzID0gW107XG5cdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0cmV0dXJuIG1vZHVsZTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiYXBwXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gZnVuY3Rpb24oY2h1bmtJZCkgeyByZXR1cm4gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwOyB9O1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IGZ1bmN0aW9uKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSB7XG5cdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG5cdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG5cdHZhciBydW50aW1lID0gZGF0YVsyXTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKGZ1bmN0aW9uKGlkKSB7IHJldHVybiBpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwOyB9KSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtcIl0gPSBzZWxmW1wid2VicGFja0NodW5rXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxuX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9yc1wiXSwgZnVuY3Rpb24oKSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9qcy9wYy9hcHAuanNcIik7IH0pXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvcnNcIl0sIGZ1bmN0aW9uKCkgeyByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc2Nzcy9wYy9hcHAuc2Nzc1wiKTsgfSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOlsiZmluZE9uZSIsIm9uIiwiQ0xBU1NfTkFNRV9CT0RZX09QRU4iLCJDTEFTU19OQU1FX09QRU4iLCJDTEFTU19OQU1FX0ZBREUiLCJNb2RhbCIsImJvZHkiLCJtb2RhbHMiLCJvbkV2ZW50IiwidGFyZ2V0IiwibGVuZ3RoIiwiY2xhc3NMaXN0IiwiYWRkIiwicHVzaCIsInNldFRpbWVvdXQiLCJ0YXJnZXRNb2RhbCIsImluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsInJlbW92ZSIsImV2ZW50IiwiY2xvc2UiLCJjbG9zZXN0IiwidGFnTmFtZSIsInByZXZlbnREZWZhdWx0Iiwib25DbG9zZSIsImJpbmQiLCJNYXRoIiwiYWJzIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50V2lkdGgiLCJmaW5kIiwiVGFiIiwiZWxlbWVudCIsImNhbGxiYWNrIiwibWVudXMiLCJwYW5lbHMiLCJtYXAiLCJtZW51IiwicGFuZWxJZCIsImdldEF0dHJpYnV0ZSIsInBhbmVsIiwiY3VycmVudCIsInBhbmVsVGltZXIiLCJpbml0RXZlbnRzIiwiZm9yRWFjaCIsInNldEF0dHJpYnV0ZSIsImNsZWFyVGltZW91dCIsInRvZ2dsZVRhYiIsInRvZ2dsZVBhbmVsIiwidG9nZ2xlIiwic2VsZWN0b3IiLCJjb250ZXh0IiwicXVlcnlTZWxlY3RvciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ0eXBlIiwiY2FwdHVyZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJvZmYiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGVsZWdhdGUiLCJoYW5kbGVyIiwiZGlzcGF0Y2hFdmVudCIsInRhcmdldEVsZW1lbnQiLCJwb3RlbnRpYWxFbGVtZW50cyIsImNhbGwiLCJnZXRPZmZzZXQiLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwic2Nyb2xsWSIsImxlZnQiLCJzY3JvbGxYIiwiZGVib3VuY2UiLCJmdW5jIiwid2FpdCIsImluRGVib3VuY2UiLCJhcmdzIiwiU3dpcGVyIiwiTmF2aWdhdGlvbiIsIlBhZ2luYXRpb24iLCJ1c2UiLCJBT1MiLCJzYWwiLCJnc2FwIiwiU2Nyb2xsVHJpZ2dlciIsInJlZ2lzdGVyUGx1Z2luIiwiYXBwIiwiaW5pdCIsIm9uY2UiLCJoZWFkZXIiLCJoZWFkZXJIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJsaW5rcyIsInNlY3Rpb25zIiwibGluayIsInNlY3Rpb25zU3RhcnQiLCJnZXRTZWN0aW9uc1N0YXJ0Iiwic2VjdGlvbiIsInRvZ2dsZUxpbmsiLCJjdXJyZW50SW5kZXgiLCJtb3ZlU2VjdGlvbiIsInNjcm9sbCIsImJlaGF2aW9yIiwiYnJhbmRGaWxtIiwidGFiIiwiY2xpY2siLCJicmFuZEZpbG1DYXJvdXNlbCIsInNsaWRlc1BlclZpZXciLCJzcGFjZUJldHdlZW4iLCJjZW50ZXJlZFNsaWRlcyIsIm9ic2VydmVyIiwib2JzZXJ2ZVBhcmVudHMiLCJhbGxvd1RvdWNoTW92ZSIsIm5hdmlnYXRpb24iLCJuZXh0RWwiLCJwcmV2RWwiLCJyb2FkQ2Fyb3VzZWwiLCJsb29wIiwibW9kYWwiLCJ0cmlnZ2VycyIsImdldElkIiwidHJpZ2dlciIsImNvbnRlbnRzIiwicmVkdWNlIiwiaWQiLCJjb250ZW50Iiwib3BlbiIsImJvb3N0VXMiLCJib29zdFVzTW9kYWwiLCJmb3JtIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImZldGNoIiwiYWN0aW9uIiwibWV0aG9kIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJhbGVydCIsIm1lc3NhZ2UiLCJsb2NhdGlvbiIsInJlbG9hZCIsImZvb3RlciIsInByaXZhY3kiLCJwcml2YWN5TW9kYWwiXSwic291cmNlUm9vdCI6IiJ9