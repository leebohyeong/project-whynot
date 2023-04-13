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
    var boostUsModal = (0,_helper__WEBPACK_IMPORTED_MODULE_3__.findOne)('#boost-us-v2');
    var form = (0,_helper__WEBPACK_IMPORTED_MODULE_3__.findOne)('.register-form', boostUsModal);
    var formCertNo = (0,_helper__WEBPACK_IMPORTED_MODULE_3__.findOne)('[name="cert_no"]', form);
    var formHphone = (0,_helper__WEBPACK_IMPORTED_MODULE_3__.findOne)('[name="hphone"]', form);
    var formChannel = (0,_helper__WEBPACK_IMPORTED_MODULE_3__.find)('[name="channel"]', form);
    var formUrl = (0,_helper__WEBPACK_IMPORTED_MODULE_3__.findOne)('[name="url"]', form);
    var urlRegex = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    var formConcept = (0,_helper__WEBPACK_IMPORTED_MODULE_3__.findOne)('[name="concept"]', form);
    var formReason = (0,_helper__WEBPACK_IMPORTED_MODULE_3__.findOne)('[name="reason"]', form);
    var formAgree1 = (0,_helper__WEBPACK_IMPORTED_MODULE_3__.findOne)('[name="agree1"]', form);
    var formAgree2 = (0,_helper__WEBPACK_IMPORTED_MODULE_3__.findOne)('[name="agree2"]', form);

    var isValid = function isValid() {
      if (formCertNo.value == "" || formHphone.value == "") {
        alert('본인인증을 진행해 주세요.');
        formHphone.focus();
        return false;
      }

      ;

      if (formChannel.every(function (input) {
        return !input.checked;
      })) {
        alert('활동채널을 체크해 주세요.');
        formChannel[0].focus();
        return false;
      }

      if (!formUrl.value.trim()) {
        alert('URL을 입력해 주세요.');
        formUrl.focus();
        return false;
      }

      if (!urlRegex.test(formUrl.value)) {
        alert('URL을 정확히 입력해 주세요.');
        formUrl.focus();
        return false;
      }

      ;

      if (!formConcept.value.trim()) {
        alert('채널컨셉을 입력해 주세요.');
        formConcept.focus();
        return false;
      }

      if (!formReason.value.trim()) {
        alert('지원동기를 입력해 주세요.');
        formReason.focus();
        return false;
      }

      ;

      if (!formAgree1.checked) {
        alert('개인정보 수집 및 활용 동의를 체크해 주세요.');
        formAgree1.focus();
        return false;
      }

      if (!formAgree2.checked) {
        alert('지원/참여자 유의사항을 체크해 주세요.');
        formAgree1.focus();
        return false;
      }

      return true;
    };

    form.addEventListener('submit', function (event) {
      event.preventDefault();

      if (isValid()) {
        var formData = new FormData(form);
        fetch(form.action, {
          method: form.method,
          body: formData
        }).then(function (response) {
          return response.json();
        }).then(function (data) {
          if (data.result == false) {
            alert(data.message);
          } else {
            alert(data.message);
            location.reload();
          }
        });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNySztXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDN0JBO1dBQ0E7V0FDQTtXQUNBLGVBQWUsNEJBQTRCO1dBQzNDLGVBQWU7V0FDZixpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQsOENBQThDOzs7OztXQ0E5QztXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NKQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUEsOENBQThDOztXQUU5QztXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLG1DQUFtQztXQUNwRTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFbERBO1VBQ0E7VUFDQTtVQUNBLDJEQUEyRCwrQ0FBK0M7VUFDMUcscUZBQXFGLG1EQUFtRDtVQUN4SSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL01vZGFsLmpzIiwid2VicGFjazovLy8uL2pzL1RhYi5qcyIsIndlYnBhY2s6Ly8vLi9qcy9oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vanMvcGMvYXBwLmpzIiwid2VicGFjazovLy8uL3Njc3MvcGMvYXBwLnNjc3MiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbm9kZSBtb2R1bGUgZGVjb3JhdG9yIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly8vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly8vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovLy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtmaW5kT25lLCBvbn0gZnJvbSAnLi9oZWxwZXInO1xyXG5cclxuY29uc3QgQ0xBU1NfTkFNRV9CT0RZX09QRU4gPSAnbW9kYWwtb3Blbic7XHJcbmNvbnN0IENMQVNTX05BTUVfT1BFTiA9ICdtb2RhbC0tb3Blbic7XHJcbmNvbnN0IENMQVNTX05BTUVfRkFERSA9ICdtb2RhbC0tZmFkZSc7XHJcblxyXG5jb25zdCBNb2RhbCA9IGNsYXNzIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuYm9keSA9IGZpbmRPbmUoJ2JvZHknKTtcclxuXHJcbiAgICAgICAgdGhpcy5tb2RhbHMgPSBbXTtcclxuICAgICAgICB0aGlzLm9uRXZlbnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuKHRhcmdldCkge1xyXG4gICAgICAgIGlmICghdGhpcy5tb2RhbHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYm9keS5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQk9EWV9PUEVOKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubW9kYWxzLnB1c2godGFyZ2V0KTtcclxuICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX09QRU4pO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGFyZ2V0LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9GQURFKSwgMCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlKHRhcmdldE1vZGFsKSB7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5tb2RhbHMubGVuZ3RoIC0gMTtcclxuXHJcbiAgICAgICAgaWYgKHRhcmdldE1vZGFsKSB7XHJcbiAgICAgICAgICAgIGluZGV4ID0gdGhpcy5tb2RhbHMuaW5kZXhPZih0YXJnZXRNb2RhbCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBpbmRleCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IHRoaXMubW9kYWxzLnNwbGljZShpbmRleCwgMSlbMF07XHJcblxyXG4gICAgICAgIGlmICghdGFyZ2V0KSByZXR1cm47XHJcblxyXG4gICAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfRkFERSwgQ0xBU1NfTkFNRV9PUEVOKTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLm1vZGFscy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9CT0RZX09QRU4pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkNsb3NlKGV2ZW50KSB7XHJcbiAgICAgICAgY29uc3QgY2xvc2UgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLm1vZGFsX19jbG9zZScpO1xyXG5cclxuICAgICAgICBpZiAoY2xvc2UpIHtcclxuICAgICAgICAgICAgaWYgKGNsb3NlLnRhZ05hbWUgPT09ICdBJykgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25FdmVudCgpIHtcclxuICAgICAgICBvbih0aGlzLmJvZHksICdjbGljaycsIHRoaXMub25DbG9zZS5iaW5kKHRoaXMpLCBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNjcm9sbFdpZHRoKCkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmFicyh3aW5kb3cuaW5uZXJXaWR0aCAtIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb2RhbDsiLCJpbXBvcnQge2ZpbmRPbmUsIGZpbmQsIG9ufSBmcm9tICcuL2hlbHBlcic7XHJcblxyXG5jb25zdCBUYWIgPSBjbGFzcyB7XHJcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjYWxsYmFjaykge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5tZW51cyA9IGZpbmQoJy50YWJfX21lbnUnLCB0aGlzLmVsZW1lbnQpO1xyXG4gICAgICAgIHRoaXMucGFuZWxzID0gdGhpcy5tZW51cy5tYXAobWVudSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhbmVsSWQgPSBtZW51LmdldEF0dHJpYnV0ZSgnYXJpYS1jb250cm9scycpO1xyXG4gICAgICAgICAgICBjb25zdCBwYW5lbCA9IGZpbmRPbmUoYCMke3BhbmVsSWR9YCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcGFuZWw7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudCA9IDA7XHJcbiAgICAgICAgdGhpcy5wYW5lbFRpbWVyID0gbnVsbDtcclxuXHJcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xyXG5cclxuICAgICAgICB0aGlzLmluaXRFdmVudHMoKTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVUYWIoKSB7XHJcbiAgICAgICAgdGhpcy5tZW51cy5mb3JFYWNoKChtZW51LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50ID09PSBpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgbWVudS5jbGFzc0xpc3QuYWRkKCd0YWJfX21lbnUtLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgbWVudS5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCB0cnVlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgndGFiX19tZW51LS1hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIG1lbnUuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlUGFuZWwoKSB7XHJcbiAgICAgICAgdGhpcy5wYW5lbHMuZm9yRWFjaCgocGFuZWwsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnQgPT09IGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICBwYW5lbC5jbGFzc0xpc3QuYWRkKCd0YWJfX3BhbmVsLS1pbicpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYW5lbFRpbWVyICYmIGNsZWFyVGltZW91dCh0aGlzLnBhbmVsVGltZXIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYW5lbFRpbWVyID0gc2V0VGltZW91dCgoKSA9PiBwYW5lbC5jbGFzc0xpc3QuYWRkKCd0YWJfX3BhbmVsLS1hY3RpdmUnKSwgMTMpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcGFuZWwuY2xhc3NMaXN0LnJlbW92ZSgndGFiX19wYW5lbC0taW4nLCAndGFiX19wYW5lbC0tYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGUoKSB7XHJcbiAgICAgICAgdGhpcy50b2dnbGVUYWIoKTtcclxuICAgICAgICB0aGlzLnRvZ2dsZVBhbmVsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdEV2ZW50cygpIHtcclxuICAgICAgICB0aGlzLm1lbnVzLmZvckVhY2goKG1lbnUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIG9uKG1lbnUsICdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnQgPSBpbmRleDtcclxuICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWxsYmFjayAmJiB0aGlzLmNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFiOyIsImV4cG9ydCBjb25zdCBmaW5kT25lID0gKHNlbGVjdG9yLCBjb250ZXh0ID0gZG9jdW1lbnQpID0+IGNvbnRleHQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XHJcbmV4cG9ydCBjb25zdCBmaW5kID0gKHNlbGVjdG9yLCBjb250ZXh0ID0gZG9jdW1lbnQpID0+IFsuLi5jb250ZXh0LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpXTtcclxuXHJcbmV4cG9ydCBjb25zdCBvbiA9ICh0YXJnZXQsIHR5cGUsIGNhbGxiYWNrLCBjYXB0dXJlID0gZmFsc2UpID0+IHtcclxuICAgIGlmICghdGFyZ2V0IHx8ICF0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcikgcmV0dXJuO1xyXG5cclxuICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGNhbGxiYWNrLCBjYXB0dXJlKTtcclxufTtcclxuZXhwb3J0IGNvbnN0IG9mZiA9ICh0YXJnZXQsIHR5cGUsIGNhbGxiYWNrKSA9PiB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBjYWxsYmFjayk7XHJcbmV4cG9ydCBjb25zdCBkZWxlZ2F0ZSA9ICh0YXJnZXQsIHNlbGVjdG9yLCB0eXBlLCBoYW5kbGVyLCBjYXB0dXJlKSA9PiB7XHJcbiAgICBjb25zdCBkaXNwYXRjaEV2ZW50ID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0RWxlbWVudCA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICBjb25zdCBwb3RlbnRpYWxFbGVtZW50cyA9IHRhcmdldEVsZW1lbnQuY2xvc2VzdChzZWxlY3Rvcik7XHJcblxyXG4gICAgICAgIGlmIChwb3RlbnRpYWxFbGVtZW50cykge1xyXG4gICAgICAgICAgICBoYW5kbGVyLmNhbGwocG90ZW50aWFsRWxlbWVudHMsIGV2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIG9uKHRhcmdldCwgdHlwZSwgZGlzcGF0Y2hFdmVudCwgISFjYXB0dXJlKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRPZmZzZXQgPSAoZWxlbWVudCkgPT4ge1xyXG4gICAgY29uc3QgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0b3A6IHJlY3QudG9wICsgd2luZG93LnNjcm9sbFksXHJcbiAgICAgICAgbGVmdDogcmVjdC5sZWZ0ICsgd2luZG93LnNjcm9sbFhcclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZGVib3VuY2UgPSAoZnVuYywgd2FpdCA9IDMwMCkgPT4ge1xyXG4gICAgbGV0IGluRGVib3VuY2U7XHJcblxyXG4gICAgcmV0dXJuICguLi5hcmdzKSA9PiB7XHJcbiAgICAgICAgaW5EZWJvdW5jZSAmJiBjbGVhclRpbWVvdXQoaW5EZWJvdW5jZSk7XHJcbiAgICAgICAgaW5EZWJvdW5jZSA9IHNldFRpbWVvdXQoKCkgPT4gZnVuYyguLi5hcmdzKSwgd2FpdCk7XHJcbiAgICB9O1xyXG59OyIsImltcG9ydCBTd2lwZXIsIHtOYXZpZ2F0aW9uLCBQYWdpbmF0aW9uIH0gZnJvbSAnc3dpcGVyJztcclxuU3dpcGVyLnVzZShbTmF2aWdhdGlvbiwgUGFnaW5hdGlvbl0pO1xyXG5pbXBvcnQgQU9TIGZyb20gJ2Fvcyc7XHJcbmltcG9ydCBzYWwgZnJvbSAnc2FsLmpzJ1xyXG5pbXBvcnQgZ3NhcCBmcm9tICdnc2FwJztcclxuaW1wb3J0IFNjcm9sbFRyaWdnZXIgZnJvbSAnZ3NhcC9TY3JvbGxUcmlnZ2VyJztcclxuaW1wb3J0IHtmaW5kT25lLCBmaW5kLCBnZXRPZmZzZXQsIG9ufSBmcm9tICcuLi9oZWxwZXInO1xyXG5pbXBvcnQgVGFiIGZyb20gJy4uL1RhYic7XHJcbmltcG9ydCBNb2RhbCBmcm9tIFwiLi4vTW9kYWxcIjtcclxuXHJcbmdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVHJpZ2dlcik7XHJcblxyXG5jb25zdCBhcHAgPSAoKSA9PiB7XHJcbiAgICBBT1MuaW5pdCh7XHJcbiAgICAgICAgb25jZTogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gU2Nyb2xsU3B5XHJcbiAgICAoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGZpbmRPbmUoJy5oZWFkZXInKTtcclxuICAgICAgICBjb25zdCBoZWFkZXJIZWlnaHQgPSBoZWFkZXIuY2xpZW50SGVpZ2h0O1xyXG4gICAgICAgIGNvbnN0IGxpbmtzID0gZmluZCgnLmhlYWRlcl9fbGluaycsIGhlYWRlcik7XHJcbiAgICAgICAgY29uc3Qgc2VjdGlvbnMgPSBsaW5rcy5tYXAobGluayA9PiBmaW5kT25lKGxpbmsuZ2V0QXR0cmlidXRlKCdocmVmJykpKTtcclxuICAgICAgICBjb25zdCBzZWN0aW9uc1N0YXJ0ID0gW107XHJcbiAgICAgICAgY29uc3QgZ2V0U2VjdGlvbnNTdGFydCA9ICgpID0+IHNlY3Rpb25zLmZvckVhY2goKHNlY3Rpb24sIGluZGV4KSA9PiBzZWN0aW9uc1N0YXJ0W2luZGV4XSA9IH5+KGdldE9mZnNldChzZWN0aW9uKS50b3AgLSBoZWFkZXJIZWlnaHQpKzUpO1xyXG4gICAgICAgIGNvbnN0IHRvZ2dsZUxpbmsgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbFkgPSB3aW5kb3cuc2Nyb2xsWTtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRJbmRleCA9IHNlY3Rpb25zU3RhcnQubGVuZ3RoIC0gMTtcclxuXHJcbiAgICAgICAgICAgIHdoaWxlIChjdXJyZW50SW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzY3JvbGxZID49IHNlY3Rpb25zU3RhcnRbY3VycmVudEluZGV4XSkgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgY3VycmVudEluZGV4LS07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxpbmtzLmZvckVhY2goKGxpbmssIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsaW5rLmNsYXNzTGlzdFtpbmRleCA9PT0gY3VycmVudEluZGV4ID8gJ2FkZCcgOiAncmVtb3ZlJ10oJ2hlYWRlcl9fbGluay0tYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgbW92ZVNlY3Rpb24gPSAoaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgd2luZG93LnNjcm9sbCh7XHJcbiAgICAgICAgICAgICAgICB0b3A6IHNlY3Rpb25zU3RhcnRbaW5kZXhdLFxyXG4gICAgICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGdldFNlY3Rpb25zU3RhcnQoKTtcclxuXHJcbiAgICAgICAgbGlua3MuZm9yRWFjaCgobGluaywgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgb24obGluaywgJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgbW92ZVNlY3Rpb24oaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgdG9nZ2xlTGluaygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgb24od2luZG93LCAnbG9hZCcsIGdldFNlY3Rpb25zU3RhcnQpO1xyXG4gICAgICAgIG9uKHdpbmRvdywgJ3Jlc2l6ZScsIGdldFNlY3Rpb25zU3RhcnQpO1xyXG4gICAgICAgIG9uKHdpbmRvdywgJ3Njcm9sbCcsIHRvZ2dsZUxpbmspO1xyXG4gICAgfSkoKTtcclxuXHJcbiAgICAvLyBCcmFuZCBGaWxtXHJcbiAgICAoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGJyYW5kRmlsbSA9IGZpbmRPbmUoJy5icmFuZC1maWxtJyk7XHJcbiAgICAgICAgY29uc3QgdGFiID0gbmV3IFRhYihmaW5kT25lKCcudGFiJywgYnJhbmRGaWxtKSk7XHJcbiAgICAgICAgdGFiLm1lbnVzWzBdLmNsaWNrKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGJyYW5kRmlsbUNhcm91c2VsID0gbmV3IFN3aXBlcignLmJyYW5kLWZpbG0gLnN3aXBlcicsIHtcclxuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogJ2F1dG8nLFxyXG4gICAgICAgICAgICBzcGFjZUJldHdlZW46IDUwLFxyXG4gICAgICAgICAgICBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcclxuICAgICAgICAgICAgb2JzZXJ2ZXI6IHRydWUsXHJcbiAgICAgICAgICAgIG9ic2VydmVQYXJlbnRzOiB0cnVlLFxyXG4gICAgICAgICAgICBhbGxvd1RvdWNoTW92ZTogZmFsc2UsXHJcbiAgICAgICAgICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgICAgICAgICAgIG5leHRFbDogXCIuc3dpcGVyLWJ1dHRvbi1uZXh0XCIsXHJcbiAgICAgICAgICAgICAgICBwcmV2RWw6IFwiLnN3aXBlci1idXR0b24tcHJldlwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH0pKCk7XHJcblxyXG4gICAgLy8gV0hZIE5PVCBST0FEXHJcbiAgICAoKCkgPT4ge1xyXG4gICAgICAgIC8vIGNvbnN0IGlmcmFtZXMgPSBmaW5kKCcuc2hvd3Jvb20tYXBwc19fY29udGVudC1zd2lwZXIgaWZyYW1lJyk7XHJcbiAgICAgICAgLy8gLy9jb25zb2xlLmxvZyhpZnJhbWVzKVxyXG4gICAgICAgIC8vIGxldCBpZnJhbWVTcmMgPSBbXTtcclxuICAgICAgICAvLyBpZnJhbWVzLmZvckVhY2goKGlmcmFtZSkgPT4ge1xyXG4gICAgICAgIC8vICAgICBpZnJhbWVTcmMucHVzaChpZnJhbWUuc3JjKTtcclxuICAgICAgICAvLyB9KTtcclxuXHJcbiAgICAgICAgY29uc3Qgcm9hZENhcm91c2VsID0gbmV3IFN3aXBlcignLnJvYWQgLnN3aXBlcicsIHtcclxuICAgICAgICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogJ2F1dG8nLFxyXG4gICAgICAgICAgICBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcclxuICAgICAgICAgICAgYWxsb3dUb3VjaE1vdmU6IGZhbHNlLFxyXG4gICAgICAgICAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICBuZXh0RWw6IFwiLnN3aXBlci1idXR0b24tbmV4dFwiLFxyXG4gICAgICAgICAgICAgICAgcHJldkVsOiBcIi5zd2lwZXItYnV0dG9uLXByZXZcIixcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIG9uIDoge1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIC8vIGNvbnN0IHJvYWRDYXJvdXNlbCA9IG5ldyBTd2lwZXIoJy5yb2FkIC5zd2lwZXInLCB7XHJcbiAgICAgICAgLy8gICAgIGxvb3A6IHRydWUsXHJcbiAgICAgICAgLy8gICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcclxuICAgICAgICAvLyAgICAgY2VudGVyZWRTbGlkZXM6IHRydWUsXHJcbiAgICAgICAgLy8gICAgIGFsbG93VG91Y2hNb3ZlOiBmYWxzZSxcclxuICAgICAgICAvLyAgICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICAgIC8vICAgICAgICAgbmV4dEVsOiBcIi5zd2lwZXItYnV0dG9uLW5leHRcIixcclxuICAgICAgICAvLyAgICAgICAgIHByZXZFbDogXCIuc3dpcGVyLWJ1dHRvbi1wcmV2XCIsXHJcbiAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgLy8gfSk7XHJcblxyXG5cclxuICAgICAgICAoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBtb2RhbCA9IG5ldyBNb2RhbCgpO1xyXG4gICAgICAgICAgICBjb25zdCB0cmlnZ2VycyA9IGZpbmQoJy5yb2FkX19saW5rJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGdldElkID0gdHJpZ2dlciA9PiB0cmlnZ2VyLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xyXG4gICAgICAgICAgICBjb25zdCBjb250ZW50cyA9IHRyaWdnZXJzLnJlZHVjZSgoY29udGVudHMsIHRyaWdnZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gZ2V0SWQodHJpZ2dlcik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb250ZW50ID0gZmluZE9uZShpZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29udGVudHNbaWRdID0gY29udGVudDtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY29udGVudHM7XHJcbiAgICAgICAgICAgIH0sIHt9KTtcclxuXHJcbiAgICAgICAgICAgIHRyaWdnZXJzLmZvckVhY2goKHRyaWdnZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIG9uKHRyaWdnZXIsICdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gZ2V0SWQodHJpZ2dlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udGVudCA9IGNvbnRlbnRzW2lkXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbW9kYWwub3Blbihjb250ZW50KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vdHJpZ2dlcnNbNF0uY2xpY2soKTtcclxuICAgICAgICB9KSgpO1xyXG5cclxuICAgIH0pKCk7XHJcblxyXG4gICAgLy8gV0hZIE5PVCBDT05URU5UU1xyXG4gICAgKCgpID0+IHtcclxuICAgICAgICBjb25zdCBjb250ZW50cyA9IGZpbmRPbmUoJy5jb250ZW50cycpO1xyXG4gICAgICAgIGNvbnN0IHRhYiA9IG5ldyBUYWIoZmluZE9uZSgnLnRhYicsIGNvbnRlbnRzKSk7XHJcbiAgICAgICAgdGFiLm1lbnVzWzBdLmNsaWNrKCk7XHJcbiAgICB9KSgpO1xyXG5cclxuICAgIC8vIEJPT1NUIFVTXHJcbiAgICAoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGJvb3N0VXMgPSBmaW5kT25lKCcuYm9vc3QtdXMnKTtcclxuICAgICAgICBjb25zdCB0YWIgPSBuZXcgVGFiKGZpbmRPbmUoJy50YWInLCBib29zdFVzKSk7XHJcbiAgICAgICAgY29uc3QgbW9kYWwgPSBuZXcgTW9kYWwoKTtcclxuICAgICAgICBjb25zdCB0cmlnZ2VycyA9IGZpbmQoJ2EnLCBib29zdFVzKTtcclxuICAgICAgICBjb25zdCBnZXRJZCA9IHRyaWdnZXIgPT4gdHJpZ2dlci5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcclxuICAgICAgICBjb25zdCBjb250ZW50cyA9IHRyaWdnZXJzLnJlZHVjZSgoY29udGVudHMsIHRyaWdnZXIpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaWQgPSBnZXRJZCh0cmlnZ2VyKTtcclxuICAgICAgICAgICAgY29uc3QgY29udGVudCA9IGZpbmRPbmUoaWQpO1xyXG5cclxuICAgICAgICAgICAgY29udGVudHNbaWRdID0gY29udGVudDtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBjb250ZW50cztcclxuICAgICAgICB9LCB7fSk7XHJcblxyXG4gICAgICAgIHRyaWdnZXJzLmZvckVhY2goKHRyaWdnZXIpID0+IHtcclxuICAgICAgICAgICAgb24odHJpZ2dlciwgJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gZ2V0SWQodHJpZ2dlcik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb250ZW50ID0gY29udGVudHNbaWRdO1xyXG5cclxuICAgICAgICAgICAgICAgIG1vZGFsLm9wZW4oY29udGVudCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0YWIubWVudXNbMF0uY2xpY2soKTtcclxuXHJcbiAgICAgICAgY29uc3QgYm9vc3RVc01vZGFsID0gZmluZE9uZSgnI2Jvb3N0LXVzLXYyJyk7XHJcbiAgICAgICAgY29uc3QgZm9ybSA9IGZpbmRPbmUoJy5yZWdpc3Rlci1mb3JtJywgYm9vc3RVc01vZGFsKTtcclxuICAgICAgICBjb25zdCBmb3JtQ2VydE5vID0gZmluZE9uZSgnW25hbWU9XCJjZXJ0X25vXCJdJywgZm9ybSk7XHJcbiAgICAgICAgY29uc3QgZm9ybUhwaG9uZSA9IGZpbmRPbmUoJ1tuYW1lPVwiaHBob25lXCJdJywgZm9ybSk7XHJcbiAgICAgICAgY29uc3QgZm9ybUNoYW5uZWwgPSBmaW5kKCdbbmFtZT1cImNoYW5uZWxcIl0nLCBmb3JtKTtcclxuICAgICAgICBjb25zdCBmb3JtVXJsID0gZmluZE9uZSgnW25hbWU9XCJ1cmxcIl0nLCBmb3JtKTtcclxuICAgICAgICBjb25zdCB1cmxSZWdleCA9IC8oaHR0cHxodHRwcyk6XFwvXFwvKFxcdys6ezAsMX1cXHcqQCk/KFxcUyspKDpbMC05XSspPyhcXC98XFwvKFtcXHcjITouPys9JiVAIVxcLVxcL10pKT8vO1xyXG4gICAgICAgIGNvbnN0IGZvcm1Db25jZXB0ID0gZmluZE9uZSgnW25hbWU9XCJjb25jZXB0XCJdJywgZm9ybSk7XHJcbiAgICAgICAgY29uc3QgZm9ybVJlYXNvbiA9IGZpbmRPbmUoJ1tuYW1lPVwicmVhc29uXCJdJywgZm9ybSk7XHJcbiAgICAgICAgY29uc3QgZm9ybUFncmVlMSA9IGZpbmRPbmUoJ1tuYW1lPVwiYWdyZWUxXCJdJywgZm9ybSk7XHJcbiAgICAgICAgY29uc3QgZm9ybUFncmVlMiA9IGZpbmRPbmUoJ1tuYW1lPVwiYWdyZWUyXCJdJywgZm9ybSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGlzVmFsaWQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKGZvcm1DZXJ0Tm8udmFsdWUgPT0gXCJcIiB8fCBmb3JtSHBob25lLnZhbHVlID09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KCfrs7jsnbjsnbjspp3snYQg7KeE7ZaJ7ZW0IOyjvOyEuOyalC4nKTtcclxuICAgICAgICAgICAgICAgIGZvcm1IcGhvbmUuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGlmIChmb3JtQ2hhbm5lbC5ldmVyeShpbnB1dCA9PiAhaW5wdXQuY2hlY2tlZCkpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KCftmZzrj5nssYTrhJDsnYQg7LK07YGs7ZW0IOyjvOyEuOyalC4nKTtcclxuICAgICAgICAgICAgICAgIGZvcm1DaGFubmVsWzBdLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghZm9ybVVybC52YWx1ZS50cmltKCkpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KCdVUkzsnYQg7J6F66Cl7ZW0IOyjvOyEuOyalC4nKTtcclxuICAgICAgICAgICAgICAgIGZvcm1VcmwuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoIXVybFJlZ2V4LnRlc3QoZm9ybVVybC52YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KCdVUkzsnYQg7KCV7ZmV7Z6IIOyeheugpe2VtCDso7zshLjsmpQuJyk7XHJcbiAgICAgICAgICAgICAgICBmb3JtVXJsLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBpZiAoIWZvcm1Db25jZXB0LnZhbHVlLnRyaW0oKSkge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoJ+yxhOuEkOy7qOyFieydhCDsnoXroKXtlbQg7KO87IS47JqULicpO1xyXG4gICAgICAgICAgICAgICAgZm9ybUNvbmNlcHQuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoIWZvcm1SZWFzb24udmFsdWUudHJpbSgpKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydCgn7KeA7JuQ64+Z6riw66W8IOyeheugpe2VtCDso7zshLjsmpQuJyk7XHJcbiAgICAgICAgICAgICAgICBmb3JtUmVhc29uLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBpZiAoIWZvcm1BZ3JlZTEuY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoJ+qwnOyduOygleuztCDsiJjsp5Eg67CPIO2ZnOyaqSDrj5nsnZjrpbwg7LK07YGs7ZW0IOyjvOyEuOyalC4nKTtcclxuICAgICAgICAgICAgICAgIGZvcm1BZ3JlZTEuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFmb3JtQWdyZWUyLmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KCfsp4Dsm5Av7LC47Jes7J6QIOycoOydmOyCrO2VreydhCDssrTtgaztlbQg7KO87IS47JqULicpO1xyXG4gICAgICAgICAgICAgICAgZm9ybUFncmVlMS5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoaXNWYWxpZCgpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKTtcclxuXHJcbiAgICAgICAgICAgICAgICBmZXRjaChmb3JtLmFjdGlvbiwge1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogZm9ybS5tZXRob2QsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9keTogZm9ybURhdGFcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5yZXN1bHQgPT0gZmFsc2Upe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydChkYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH0pKCk7XHJcblxyXG4gICAgLy9mb290ZXIg6rCc7J247KCV67O0IOyymOumrCDrsKnsuahcclxuICAgICgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZm9vdGVyID0gZmluZE9uZSgnZm9vdGVyJyk7XHJcbiAgICAgICAgY29uc3QgcHJpdmFjeSA9IGZpbmRPbmUoJy5mb290ZXJfX3ByaXZhY3knLCBmb290ZXIpO1xyXG4gICAgICAgIGNvbnN0IHByaXZhY3lNb2RhbCA9IGZpbmRPbmUoJy5tb2RhbC1mb290ZXItcHJpdmFjeScpO1xyXG4gICAgICAgIGNvbnN0IG1vZGFsID0gbmV3IE1vZGFsKCk7XHJcblxyXG5cclxuICAgICAgICBwcml2YWN5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICBtb2RhbC5vcGVuKHByaXZhY3lNb2RhbCk7XHJcbiAgICAgICAgfSlcclxuICAgIH0pKCk7XHJcblxyXG59O1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGFwcCk7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0bG9hZGVkOiBmYWxzZSxcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG5cdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gZnVuY3Rpb24ocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBjaHVua0lkcyA9IGRlZmVycmVkW2ldWzBdO1xuXHRcdHZhciBmbiA9IGRlZmVycmVkW2ldWzFdO1xuXHRcdHZhciBwcmlvcml0eSA9IGRlZmVycmVkW2ldWzJdO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeShmdW5jdGlvbihrZXkpIHsgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKTsgfSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubm1kID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdHJldHVybiBtb2R1bGU7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImFwcFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IGZ1bmN0aW9uKGNodW5rSWQpIHsgcmV0dXJuIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMDsgfTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSBmdW5jdGlvbihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkge1xuXHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuXHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuXHR2YXIgcnVudGltZSA9IGRhdGFbMl07XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZShmdW5jdGlvbihpZCkgeyByZXR1cm4gaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMDsgfSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rXCJdID0gc2VsZltcIndlYnBhY2tDaHVua1wiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbl9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvcnNcIl0sIGZ1bmN0aW9uKCkgeyByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vanMvcGMvYXBwLmpzXCIpOyB9KVxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzXCJdLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oXCIuL3Njc3MvcGMvYXBwLnNjc3NcIik7IH0pXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbImZpbmRPbmUiLCJvbiIsIkNMQVNTX05BTUVfQk9EWV9PUEVOIiwiQ0xBU1NfTkFNRV9PUEVOIiwiQ0xBU1NfTkFNRV9GQURFIiwiTW9kYWwiLCJib2R5IiwibW9kYWxzIiwib25FdmVudCIsInRhcmdldCIsImxlbmd0aCIsImNsYXNzTGlzdCIsImFkZCIsInB1c2giLCJzZXRUaW1lb3V0IiwidGFyZ2V0TW9kYWwiLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJyZW1vdmUiLCJldmVudCIsImNsb3NlIiwiY2xvc2VzdCIsInRhZ05hbWUiLCJwcmV2ZW50RGVmYXVsdCIsIm9uQ2xvc2UiLCJiaW5kIiwiTWF0aCIsImFicyIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudFdpZHRoIiwiZmluZCIsIlRhYiIsImVsZW1lbnQiLCJjYWxsYmFjayIsIm1lbnVzIiwicGFuZWxzIiwibWFwIiwibWVudSIsInBhbmVsSWQiLCJnZXRBdHRyaWJ1dGUiLCJwYW5lbCIsImN1cnJlbnQiLCJwYW5lbFRpbWVyIiwiaW5pdEV2ZW50cyIsImZvckVhY2giLCJzZXRBdHRyaWJ1dGUiLCJjbGVhclRpbWVvdXQiLCJ0b2dnbGVUYWIiLCJ0b2dnbGVQYW5lbCIsInRvZ2dsZSIsInNlbGVjdG9yIiwiY29udGV4dCIsInF1ZXJ5U2VsZWN0b3IiLCJxdWVyeVNlbGVjdG9yQWxsIiwidHlwZSIsImNhcHR1cmUiLCJhZGRFdmVudExpc3RlbmVyIiwib2ZmIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRlbGVnYXRlIiwiaGFuZGxlciIsImRpc3BhdGNoRXZlbnQiLCJ0YXJnZXRFbGVtZW50IiwicG90ZW50aWFsRWxlbWVudHMiLCJjYWxsIiwiZ2V0T2Zmc2V0IiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsInNjcm9sbFkiLCJsZWZ0Iiwic2Nyb2xsWCIsImRlYm91bmNlIiwiZnVuYyIsIndhaXQiLCJpbkRlYm91bmNlIiwiYXJncyIsIlN3aXBlciIsIk5hdmlnYXRpb24iLCJQYWdpbmF0aW9uIiwidXNlIiwiQU9TIiwic2FsIiwiZ3NhcCIsIlNjcm9sbFRyaWdnZXIiLCJyZWdpc3RlclBsdWdpbiIsImFwcCIsImluaXQiLCJvbmNlIiwiaGVhZGVyIiwiaGVhZGVySGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwibGlua3MiLCJzZWN0aW9ucyIsImxpbmsiLCJzZWN0aW9uc1N0YXJ0IiwiZ2V0U2VjdGlvbnNTdGFydCIsInNlY3Rpb24iLCJ0b2dnbGVMaW5rIiwiY3VycmVudEluZGV4IiwibW92ZVNlY3Rpb24iLCJzY3JvbGwiLCJiZWhhdmlvciIsImJyYW5kRmlsbSIsInRhYiIsImNsaWNrIiwiYnJhbmRGaWxtQ2Fyb3VzZWwiLCJzbGlkZXNQZXJWaWV3Iiwic3BhY2VCZXR3ZWVuIiwiY2VudGVyZWRTbGlkZXMiLCJvYnNlcnZlciIsIm9ic2VydmVQYXJlbnRzIiwiYWxsb3dUb3VjaE1vdmUiLCJuYXZpZ2F0aW9uIiwibmV4dEVsIiwicHJldkVsIiwicm9hZENhcm91c2VsIiwibG9vcCIsIm1vZGFsIiwidHJpZ2dlcnMiLCJnZXRJZCIsInRyaWdnZXIiLCJjb250ZW50cyIsInJlZHVjZSIsImlkIiwiY29udGVudCIsIm9wZW4iLCJib29zdFVzIiwiYm9vc3RVc01vZGFsIiwiZm9ybSIsImZvcm1DZXJ0Tm8iLCJmb3JtSHBob25lIiwiZm9ybUNoYW5uZWwiLCJmb3JtVXJsIiwidXJsUmVnZXgiLCJmb3JtQ29uY2VwdCIsImZvcm1SZWFzb24iLCJmb3JtQWdyZWUxIiwiZm9ybUFncmVlMiIsImlzVmFsaWQiLCJ2YWx1ZSIsImFsZXJ0IiwiZm9jdXMiLCJldmVyeSIsImlucHV0IiwiY2hlY2tlZCIsInRyaW0iLCJ0ZXN0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImZldGNoIiwiYWN0aW9uIiwibWV0aG9kIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJyZXN1bHQiLCJtZXNzYWdlIiwibG9jYXRpb24iLCJyZWxvYWQiLCJmb290ZXIiLCJwcml2YWN5IiwicHJpdmFjeU1vZGFsIl0sInNvdXJjZVJvb3QiOiIifQ==