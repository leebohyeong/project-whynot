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
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

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
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

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
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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
  });

  // ScrollSpy
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
  })();

  // Brand Film
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
  })();

  // WHY NOT ROAD
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
    });

    // const roadCarousel = new Swiper('.road .swiper', {
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
      });

      //triggers[4].click();
    })();
  })();

  // WHY NOT CONTENTS
  (function () {
    var contents = (0,_helper__WEBPACK_IMPORTED_MODULE_3__.findOne)('.contents');
    var tab = new _Tab__WEBPACK_IMPORTED_MODULE_4__["default"]((0,_helper__WEBPACK_IMPORTED_MODULE_3__.findOne)('.tab', contents));
    tab.menus[0].click();
  })();

  // BOOST US
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
        }).catch(function (error) {
          console.error(error);
        });
      }
    });
  })();

  //footer 개인정보 처리 방침
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9UYWIuanMiLCJ3ZWJwYWNrOi8vLy4vanMvaGVscGVyLmpzIiwid2VicGFjazovLy8uL2pzL3BjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zY3NzL3BjL2FwcC5zY3NzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL25vZGUgbW9kdWxlIGRlY29yYXRvciIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly8vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7ZmluZE9uZSwgb259IGZyb20gJy4vaGVscGVyJztcblxuY29uc3QgQ0xBU1NfTkFNRV9CT0RZX09QRU4gPSAnbW9kYWwtb3Blbic7XG5jb25zdCBDTEFTU19OQU1FX09QRU4gPSAnbW9kYWwtLW9wZW4nO1xuY29uc3QgQ0xBU1NfTkFNRV9GQURFID0gJ21vZGFsLS1mYWRlJztcblxuY29uc3QgTW9kYWwgPSBjbGFzcyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYm9keSA9IGZpbmRPbmUoJ2JvZHknKTtcblxuICAgICAgICB0aGlzLm1vZGFscyA9IFtdO1xuICAgICAgICB0aGlzLm9uRXZlbnQoKTtcbiAgICB9XG5cbiAgICBvcGVuKHRhcmdldCkge1xuICAgICAgICBpZiAoIXRoaXMubW9kYWxzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5ib2R5LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9CT0RZX09QRU4pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5tb2RhbHMucHVzaCh0YXJnZXQpO1xuICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX09QRU4pO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRhcmdldC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfRkFERSksIDApO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGNsb3NlKHRhcmdldE1vZGFsKSB7XG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMubW9kYWxzLmxlbmd0aCAtIDE7XG5cbiAgICAgICAgaWYgKHRhcmdldE1vZGFsKSB7XG4gICAgICAgICAgICBpbmRleCA9IHRoaXMubW9kYWxzLmluZGV4T2YodGFyZ2V0TW9kYWwpO1xuXG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgaW5kZXggPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5tb2RhbHMuc3BsaWNlKGluZGV4LCAxKVswXTtcblxuICAgICAgICBpZiAoIXRhcmdldCkgcmV0dXJuO1xuXG4gICAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfRkFERSwgQ0xBU1NfTkFNRV9PUEVOKTtcblxuICAgICAgICBpZiAoIXRoaXMubW9kYWxzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9CT0RZX09QRU4pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25DbG9zZShldmVudCkge1xuICAgICAgICBjb25zdCBjbG9zZSA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcubW9kYWxfX2Nsb3NlJyk7XG5cbiAgICAgICAgaWYgKGNsb3NlKSB7XG4gICAgICAgICAgICBpZiAoY2xvc2UudGFnTmFtZSA9PT0gJ0EnKSBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkV2ZW50KCkge1xuICAgICAgICBvbih0aGlzLmJvZHksICdjbGljaycsIHRoaXMub25DbG9zZS5iaW5kKHRoaXMpLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgZ2V0IHNjcm9sbFdpZHRoKCkge1xuICAgICAgICByZXR1cm4gTWF0aC5hYnMod2luZG93LmlubmVyV2lkdGggLSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGFsOyIsImltcG9ydCB7ZmluZE9uZSwgZmluZCwgb259IGZyb20gJy4vaGVscGVyJztcblxuY29uc3QgVGFiID0gY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMubWVudXMgPSBmaW5kKCcudGFiX19tZW51JywgdGhpcy5lbGVtZW50KTtcbiAgICAgICAgdGhpcy5wYW5lbHMgPSB0aGlzLm1lbnVzLm1hcChtZW51ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhbmVsSWQgPSBtZW51LmdldEF0dHJpYnV0ZSgnYXJpYS1jb250cm9scycpO1xuICAgICAgICAgICAgY29uc3QgcGFuZWwgPSBmaW5kT25lKGAjJHtwYW5lbElkfWApO1xuXG4gICAgICAgICAgICByZXR1cm4gcGFuZWw7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY3VycmVudCA9IDA7XG4gICAgICAgIHRoaXMucGFuZWxUaW1lciA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuXG4gICAgICAgIHRoaXMuaW5pdEV2ZW50cygpO1xuICAgIH1cblxuICAgIHRvZ2dsZVRhYigpIHtcbiAgICAgICAgdGhpcy5tZW51cy5mb3JFYWNoKChtZW51LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudCA9PT0gaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ3RhYl9fbWVudS0tYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgbWVudS5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKCd0YWJfX21lbnUtLWFjdGl2ZScpO1xuICAgICAgICAgICAgICAgIG1lbnUuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB0b2dnbGVQYW5lbCgpIHtcbiAgICAgICAgdGhpcy5wYW5lbHMuZm9yRWFjaCgocGFuZWwsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50ID09PSBpbmRleCkge1xuICAgICAgICAgICAgICAgIHBhbmVsLmNsYXNzTGlzdC5hZGQoJ3RhYl9fcGFuZWwtLWluJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5wYW5lbFRpbWVyICYmIGNsZWFyVGltZW91dCh0aGlzLnBhbmVsVGltZXIpO1xuICAgICAgICAgICAgICAgIHRoaXMucGFuZWxUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4gcGFuZWwuY2xhc3NMaXN0LmFkZCgndGFiX19wYW5lbC0tYWN0aXZlJyksIDEzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFuZWwuY2xhc3NMaXN0LnJlbW92ZSgndGFiX19wYW5lbC0taW4nLCAndGFiX19wYW5lbC0tYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHRvZ2dsZSgpIHtcbiAgICAgICAgdGhpcy50b2dnbGVUYWIoKTtcbiAgICAgICAgdGhpcy50b2dnbGVQYW5lbCgpO1xuICAgIH1cblxuICAgIGluaXRFdmVudHMoKSB7XG4gICAgICAgIHRoaXMubWVudXMuZm9yRWFjaCgobWVudSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIG9uKG1lbnUsICdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnQgPSBpbmRleDtcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZSgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jYWxsYmFjayAmJiB0aGlzLmNhbGxiYWNrKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgVGFiOyIsImV4cG9ydCBjb25zdCBmaW5kT25lID0gKHNlbGVjdG9yLCBjb250ZXh0ID0gZG9jdW1lbnQpID0+IGNvbnRleHQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG5leHBvcnQgY29uc3QgZmluZCA9IChzZWxlY3RvciwgY29udGV4dCA9IGRvY3VtZW50KSA9PiBbLi4uY29udGV4dC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKV07XG5cbmV4cG9ydCBjb25zdCBvbiA9ICh0YXJnZXQsIHR5cGUsIGNhbGxiYWNrLCBjYXB0dXJlID0gZmFsc2UpID0+IHtcbiAgICBpZiAoIXRhcmdldCB8fCAhdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIpIHJldHVybjtcblxuICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGNhbGxiYWNrLCBjYXB0dXJlKTtcbn07XG5leHBvcnQgY29uc3Qgb2ZmID0gKHRhcmdldCwgdHlwZSwgY2FsbGJhY2spID0+IHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGNhbGxiYWNrKTtcbmV4cG9ydCBjb25zdCBkZWxlZ2F0ZSA9ICh0YXJnZXQsIHNlbGVjdG9yLCB0eXBlLCBoYW5kbGVyLCBjYXB0dXJlKSA9PiB7XG4gICAgY29uc3QgZGlzcGF0Y2hFdmVudCA9IChldmVudCkgPT4ge1xuICAgICAgICBjb25zdCB0YXJnZXRFbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBjb25zdCBwb3RlbnRpYWxFbGVtZW50cyA9IHRhcmdldEVsZW1lbnQuY2xvc2VzdChzZWxlY3Rvcik7XG5cbiAgICAgICAgaWYgKHBvdGVudGlhbEVsZW1lbnRzKSB7XG4gICAgICAgICAgICBoYW5kbGVyLmNhbGwocG90ZW50aWFsRWxlbWVudHMsIGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBvbih0YXJnZXQsIHR5cGUsIGRpc3BhdGNoRXZlbnQsICEhY2FwdHVyZSk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0T2Zmc2V0ID0gKGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHRvcDogcmVjdC50b3AgKyB3aW5kb3cuc2Nyb2xsWSxcbiAgICAgICAgbGVmdDogcmVjdC5sZWZ0ICsgd2luZG93LnNjcm9sbFhcbiAgICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGRlYm91bmNlID0gKGZ1bmMsIHdhaXQgPSAzMDApID0+IHtcbiAgICBsZXQgaW5EZWJvdW5jZTtcblxuICAgIHJldHVybiAoLi4uYXJncykgPT4ge1xuICAgICAgICBpbkRlYm91bmNlICYmIGNsZWFyVGltZW91dChpbkRlYm91bmNlKTtcbiAgICAgICAgaW5EZWJvdW5jZSA9IHNldFRpbWVvdXQoKCkgPT4gZnVuYyguLi5hcmdzKSwgd2FpdCk7XG4gICAgfTtcbn07IiwiaW1wb3J0IFN3aXBlciwge05hdmlnYXRpb24sIFBhZ2luYXRpb24gfSBmcm9tICdzd2lwZXInO1xuU3dpcGVyLnVzZShbTmF2aWdhdGlvbiwgUGFnaW5hdGlvbl0pO1xuaW1wb3J0IEFPUyBmcm9tICdhb3MnO1xuaW1wb3J0IHNhbCBmcm9tICdzYWwuanMnXG5pbXBvcnQgZ3NhcCBmcm9tICdnc2FwJztcbmltcG9ydCBTY3JvbGxUcmlnZ2VyIGZyb20gJ2dzYXAvU2Nyb2xsVHJpZ2dlcic7XG5pbXBvcnQge2ZpbmRPbmUsIGZpbmQsIGdldE9mZnNldCwgb259IGZyb20gJy4uL2hlbHBlcic7XG5pbXBvcnQgVGFiIGZyb20gJy4uL1RhYic7XG5pbXBvcnQgTW9kYWwgZnJvbSBcIi4uL01vZGFsXCI7XG5cbmdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVHJpZ2dlcik7XG5cbmNvbnN0IGFwcCA9ICgpID0+IHtcbiAgICBBT1MuaW5pdCh7XG4gICAgICAgIG9uY2U6IHRydWVcbiAgICB9KTtcblxuICAgIC8vIFNjcm9sbFNweVxuICAgICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGZpbmRPbmUoJy5oZWFkZXInKTtcbiAgICAgICAgY29uc3QgaGVhZGVySGVpZ2h0ID0gaGVhZGVyLmNsaWVudEhlaWdodDtcbiAgICAgICAgY29uc3QgbGlua3MgPSBmaW5kKCcuaGVhZGVyX19saW5rJywgaGVhZGVyKTtcbiAgICAgICAgY29uc3Qgc2VjdGlvbnMgPSBsaW5rcy5tYXAobGluayA9PiBmaW5kT25lKGxpbmsuZ2V0QXR0cmlidXRlKCdocmVmJykpKTtcbiAgICAgICAgY29uc3Qgc2VjdGlvbnNTdGFydCA9IFtdO1xuICAgICAgICBjb25zdCBnZXRTZWN0aW9uc1N0YXJ0ID0gKCkgPT4gc2VjdGlvbnMuZm9yRWFjaCgoc2VjdGlvbiwgaW5kZXgpID0+IHNlY3Rpb25zU3RhcnRbaW5kZXhdID0gfn4oZ2V0T2Zmc2V0KHNlY3Rpb24pLnRvcCAtIGhlYWRlckhlaWdodCkrNSk7XG4gICAgICAgIGNvbnN0IHRvZ2dsZUxpbmsgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzY3JvbGxZID0gd2luZG93LnNjcm9sbFk7XG4gICAgICAgICAgICBsZXQgY3VycmVudEluZGV4ID0gc2VjdGlvbnNTdGFydC5sZW5ndGggLSAxO1xuXG4gICAgICAgICAgICB3aGlsZSAoY3VycmVudEluZGV4KSB7XG4gICAgICAgICAgICAgICAgaWYgKHNjcm9sbFkgPj0gc2VjdGlvbnNTdGFydFtjdXJyZW50SW5kZXhdKSBicmVhaztcblxuICAgICAgICAgICAgICAgIGN1cnJlbnRJbmRleC0tO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsaW5rcy5mb3JFYWNoKChsaW5rLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGxpbmsuY2xhc3NMaXN0W2luZGV4ID09PSBjdXJyZW50SW5kZXggPyAnYWRkJyA6ICdyZW1vdmUnXSgnaGVhZGVyX19saW5rLS1hY3RpdmUnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBtb3ZlU2VjdGlvbiA9IChpbmRleCkgPT4ge1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbCh7XG4gICAgICAgICAgICAgICAgdG9wOiBzZWN0aW9uc1N0YXJ0W2luZGV4XSxcbiAgICAgICAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIGdldFNlY3Rpb25zU3RhcnQoKTtcblxuICAgICAgICBsaW5rcy5mb3JFYWNoKChsaW5rLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgb24obGluaywgJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBtb3ZlU2VjdGlvbihpbmRleCk7XG4gICAgICAgICAgICAgICAgdG9nZ2xlTGluaygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG9uKHdpbmRvdywgJ2xvYWQnLCBnZXRTZWN0aW9uc1N0YXJ0KTtcbiAgICAgICAgb24od2luZG93LCAncmVzaXplJywgZ2V0U2VjdGlvbnNTdGFydCk7XG4gICAgICAgIG9uKHdpbmRvdywgJ3Njcm9sbCcsIHRvZ2dsZUxpbmspO1xuICAgIH0pKCk7XG5cbiAgICAvLyBCcmFuZCBGaWxtXG4gICAgKCgpID0+IHtcbiAgICAgICAgY29uc3QgYnJhbmRGaWxtID0gZmluZE9uZSgnLmJyYW5kLWZpbG0nKTtcbiAgICAgICAgY29uc3QgdGFiID0gbmV3IFRhYihmaW5kT25lKCcudGFiJywgYnJhbmRGaWxtKSk7XG4gICAgICAgIHRhYi5tZW51c1swXS5jbGljaygpO1xuXG4gICAgICAgIGNvbnN0IGJyYW5kRmlsbUNhcm91c2VsID0gbmV3IFN3aXBlcignLmJyYW5kLWZpbG0gLnN3aXBlcicsIHtcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcbiAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogNTAsXG4gICAgICAgICAgICBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcbiAgICAgICAgICAgIG9ic2VydmVyOiB0cnVlLFxuICAgICAgICAgICAgb2JzZXJ2ZVBhcmVudHM6IHRydWUsXG4gICAgICAgICAgICBhbGxvd1RvdWNoTW92ZTogZmFsc2UsXG4gICAgICAgICAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICAgICAgICAgICAgbmV4dEVsOiBcIi5zd2lwZXItYnV0dG9uLW5leHRcIixcbiAgICAgICAgICAgICAgICBwcmV2RWw6IFwiLnN3aXBlci1idXR0b24tcHJldlwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG5cbiAgICB9KSgpO1xuXG4gICAgLy8gV0hZIE5PVCBST0FEXG4gICAgKCgpID0+IHtcbiAgICAgICAgLy8gY29uc3QgaWZyYW1lcyA9IGZpbmQoJy5zaG93cm9vbS1hcHBzX19jb250ZW50LXN3aXBlciBpZnJhbWUnKTtcbiAgICAgICAgLy8gLy9jb25zb2xlLmxvZyhpZnJhbWVzKVxuICAgICAgICAvLyBsZXQgaWZyYW1lU3JjID0gW107XG4gICAgICAgIC8vIGlmcmFtZXMuZm9yRWFjaCgoaWZyYW1lKSA9PiB7XG4gICAgICAgIC8vICAgICBpZnJhbWVTcmMucHVzaChpZnJhbWUuc3JjKTtcbiAgICAgICAgLy8gfSk7XG5cbiAgICAgICAgY29uc3Qgcm9hZENhcm91c2VsID0gbmV3IFN3aXBlcignLnJvYWQgLnN3aXBlcicsIHtcbiAgICAgICAgICAgIGxvb3A6IHRydWUsXG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXG4gICAgICAgICAgICBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcbiAgICAgICAgICAgIGFsbG93VG91Y2hNb3ZlOiBmYWxzZSxcbiAgICAgICAgICAgIG5hdmlnYXRpb246IHtcbiAgICAgICAgICAgICAgICBuZXh0RWw6IFwiLnN3aXBlci1idXR0b24tbmV4dFwiLFxuICAgICAgICAgICAgICAgIHByZXZFbDogXCIuc3dpcGVyLWJ1dHRvbi1wcmV2XCIsXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBvbiA6IHtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgLy8gY29uc3Qgcm9hZENhcm91c2VsID0gbmV3IFN3aXBlcignLnJvYWQgLnN3aXBlcicsIHtcbiAgICAgICAgLy8gICAgIGxvb3A6IHRydWUsXG4gICAgICAgIC8vICAgICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXG4gICAgICAgIC8vICAgICBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcbiAgICAgICAgLy8gICAgIGFsbG93VG91Y2hNb3ZlOiBmYWxzZSxcbiAgICAgICAgLy8gICAgIG5hdmlnYXRpb246IHtcbiAgICAgICAgLy8gICAgICAgICBuZXh0RWw6IFwiLnN3aXBlci1idXR0b24tbmV4dFwiLFxuICAgICAgICAvLyAgICAgICAgIHByZXZFbDogXCIuc3dpcGVyLWJ1dHRvbi1wcmV2XCIsXG4gICAgICAgIC8vICAgICB9LFxuICAgICAgICAvLyB9KTtcblxuXG4gICAgICAgICgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtb2RhbCA9IG5ldyBNb2RhbCgpO1xuICAgICAgICAgICAgY29uc3QgdHJpZ2dlcnMgPSBmaW5kKCcucm9hZF9fbGluaycpO1xuICAgICAgICAgICAgY29uc3QgZ2V0SWQgPSB0cmlnZ2VyID0+IHRyaWdnZXIuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgICAgICAgICBjb25zdCBjb250ZW50cyA9IHRyaWdnZXJzLnJlZHVjZSgoY29udGVudHMsIHRyaWdnZXIpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpZCA9IGdldElkKHRyaWdnZXIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBmaW5kT25lKGlkKTtcblxuICAgICAgICAgICAgICAgIGNvbnRlbnRzW2lkXSA9IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gY29udGVudHM7XG4gICAgICAgICAgICB9LCB7fSk7XG5cbiAgICAgICAgICAgIHRyaWdnZXJzLmZvckVhY2goKHRyaWdnZXIpID0+IHtcbiAgICAgICAgICAgICAgICBvbih0cmlnZ2VyLCAnY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpZCA9IGdldElkKHRyaWdnZXIpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb250ZW50ID0gY29udGVudHNbaWRdO1xuXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsLm9wZW4oY29udGVudCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy90cmlnZ2Vyc1s0XS5jbGljaygpO1xuICAgICAgICB9KSgpO1xuXG4gICAgfSkoKTtcblxuICAgIC8vIFdIWSBOT1QgQ09OVEVOVFNcbiAgICAoKCkgPT4ge1xuICAgICAgICBjb25zdCBjb250ZW50cyA9IGZpbmRPbmUoJy5jb250ZW50cycpO1xuICAgICAgICBjb25zdCB0YWIgPSBuZXcgVGFiKGZpbmRPbmUoJy50YWInLCBjb250ZW50cykpO1xuICAgICAgICB0YWIubWVudXNbMF0uY2xpY2soKTtcbiAgICB9KSgpO1xuXG4gICAgLy8gQk9PU1QgVVNcbiAgICAoKCkgPT4ge1xuICAgICAgICBjb25zdCBib29zdFVzID0gZmluZE9uZSgnLmJvb3N0LXVzJyk7XG4gICAgICAgIGNvbnN0IHRhYiA9IG5ldyBUYWIoZmluZE9uZSgnLnRhYicsIGJvb3N0VXMpKTtcbiAgICAgICAgY29uc3QgbW9kYWwgPSBuZXcgTW9kYWwoKTtcbiAgICAgICAgY29uc3QgdHJpZ2dlcnMgPSBmaW5kKCdhJywgYm9vc3RVcyk7XG4gICAgICAgIGNvbnN0IGdldElkID0gdHJpZ2dlciA9PiB0cmlnZ2VyLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgICAgICBjb25zdCBjb250ZW50cyA9IHRyaWdnZXJzLnJlZHVjZSgoY29udGVudHMsIHRyaWdnZXIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gZ2V0SWQodHJpZ2dlcik7XG4gICAgICAgICAgICBjb25zdCBjb250ZW50ID0gZmluZE9uZShpZCk7XG5cbiAgICAgICAgICAgIGNvbnRlbnRzW2lkXSA9IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIHJldHVybiBjb250ZW50cztcbiAgICAgICAgfSwge30pO1xuXG4gICAgICAgIHRyaWdnZXJzLmZvckVhY2goKHRyaWdnZXIpID0+IHtcbiAgICAgICAgICAgIG9uKHRyaWdnZXIsICdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBpZCA9IGdldElkKHRyaWdnZXIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBjb250ZW50c1tpZF07XG5cbiAgICAgICAgICAgICAgICBtb2RhbC5vcGVuKGNvbnRlbnQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRhYi5tZW51c1swXS5jbGljaygpO1xuXG4gICAgICAgIGNvbnN0IGJvb3N0VXNNb2RhbCA9IGZpbmRPbmUoJyNib29zdC11cy12MicpO1xuICAgICAgICBjb25zdCBmb3JtID0gZmluZE9uZSgnLnJlZ2lzdGVyLWZvcm0nLCBib29zdFVzTW9kYWwpO1xuICAgICAgICBjb25zdCBmb3JtQ2VydE5vID0gZmluZE9uZSgnW25hbWU9XCJjZXJ0X25vXCJdJywgZm9ybSk7XG4gICAgICAgIGNvbnN0IGZvcm1IcGhvbmUgPSBmaW5kT25lKCdbbmFtZT1cImhwaG9uZVwiXScsIGZvcm0pO1xuICAgICAgICBjb25zdCBmb3JtQ2hhbm5lbCA9IGZpbmQoJ1tuYW1lPVwiY2hhbm5lbFwiXScsIGZvcm0pO1xuICAgICAgICBjb25zdCBmb3JtVXJsID0gZmluZE9uZSgnW25hbWU9XCJ1cmxcIl0nLCBmb3JtKTtcbiAgICAgICAgY29uc3QgdXJsUmVnZXggPSAvKGh0dHB8aHR0cHMpOlxcL1xcLyhcXHcrOnswLDF9XFx3KkApPyhcXFMrKSg6WzAtOV0rKT8oXFwvfFxcLyhbXFx3IyE6Lj8rPSYlQCFcXC1cXC9dKSk/LztcbiAgICAgICAgY29uc3QgZm9ybUNvbmNlcHQgPSBmaW5kT25lKCdbbmFtZT1cImNvbmNlcHRcIl0nLCBmb3JtKTtcbiAgICAgICAgY29uc3QgZm9ybVJlYXNvbiA9IGZpbmRPbmUoJ1tuYW1lPVwicmVhc29uXCJdJywgZm9ybSk7XG4gICAgICAgIGNvbnN0IGZvcm1BZ3JlZTEgPSBmaW5kT25lKCdbbmFtZT1cImFncmVlMVwiXScsIGZvcm0pO1xuICAgICAgICBjb25zdCBmb3JtQWdyZWUyID0gZmluZE9uZSgnW25hbWU9XCJhZ3JlZTJcIl0nLCBmb3JtKTtcblxuICAgICAgICBjb25zdCBpc1ZhbGlkID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYoZm9ybUNlcnROby52YWx1ZSA9PSBcIlwiIHx8IGZvcm1IcGhvbmUudmFsdWUgPT0gXCJcIikge1xuICAgICAgICAgICAgICAgIGFsZXJ0KCfrs7jsnbjsnbjspp3snYQg7KeE7ZaJ7ZW0IOyjvOyEuOyalC4nKTtcbiAgICAgICAgICAgICAgICBmb3JtSHBob25lLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKGZvcm1DaGFubmVsLmV2ZXJ5KGlucHV0ID0+ICFpbnB1dC5jaGVja2VkKSkge1xuICAgICAgICAgICAgICAgIGFsZXJ0KCftmZzrj5nssYTrhJDsnYQg7LK07YGs7ZW0IOyjvOyEuOyalC4nKTtcbiAgICAgICAgICAgICAgICBmb3JtQ2hhbm5lbFswXS5mb2N1cygpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFmb3JtVXJsLnZhbHVlLnRyaW0oKSkge1xuICAgICAgICAgICAgICAgIGFsZXJ0KCdVUkzsnYQg7J6F66Cl7ZW0IOyjvOyEuOyalC4nKTtcbiAgICAgICAgICAgICAgICBmb3JtVXJsLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZighdXJsUmVnZXgudGVzdChmb3JtVXJsLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGFsZXJ0KCdVUkzsnYQg7KCV7ZmV7Z6IIOyeheugpe2VtCDso7zshLjsmpQuJyk7XG4gICAgICAgICAgICAgICAgZm9ybVVybC5mb2N1cygpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmICghZm9ybUNvbmNlcHQudmFsdWUudHJpbSgpKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoJ+yxhOuEkOy7qOyFieydhCDsnoXroKXtlbQg7KO87IS47JqULicpO1xuICAgICAgICAgICAgICAgIGZvcm1Db25jZXB0LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZighZm9ybVJlYXNvbi52YWx1ZS50cmltKCkpIHtcbiAgICAgICAgICAgICAgICBhbGVydCgn7KeA7JuQ64+Z6riw66W8IOyeheugpe2VtCDso7zshLjsmpQuJyk7XG4gICAgICAgICAgICAgICAgZm9ybVJlYXNvbi5mb2N1cygpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmICghZm9ybUFncmVlMS5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoJ+qwnOyduOygleuztCDsiJjsp5Eg67CPIO2ZnOyaqSDrj5nsnZjrpbwg7LK07YGs7ZW0IOyjvOyEuOyalC4nKTtcbiAgICAgICAgICAgICAgICBmb3JtQWdyZWUxLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWZvcm1BZ3JlZTIuY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgIGFsZXJ0KCfsp4Dsm5Av7LC47Jes7J6QIOycoOydmOyCrO2VreydhCDssrTtgaztlbQg7KO87IS47JqULicpO1xuICAgICAgICAgICAgICAgIGZvcm1BZ3JlZTEuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIGlmIChpc1ZhbGlkKCkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKTtcblxuICAgICAgICAgICAgICAgIGZldGNoKGZvcm0uYWN0aW9uLCB7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogZm9ybS5tZXRob2QsXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IGZvcm1EYXRhXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLnJlc3VsdCA9PSBmYWxzZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoZGF0YS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KGRhdGEubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgfSkoKTtcblxuICAgIC8vZm9vdGVyIOqwnOyduOygleuztCDsspjrpqwg67Cp7LmoXG4gICAgKCgpID0+IHtcbiAgICAgICAgY29uc3QgZm9vdGVyID0gZmluZE9uZSgnZm9vdGVyJyk7XG4gICAgICAgIGNvbnN0IHByaXZhY3kgPSBmaW5kT25lKCcuZm9vdGVyX19wcml2YWN5JywgZm9vdGVyKTtcbiAgICAgICAgY29uc3QgcHJpdmFjeU1vZGFsID0gZmluZE9uZSgnLm1vZGFsLWZvb3Rlci1wcml2YWN5Jyk7XG4gICAgICAgIGNvbnN0IG1vZGFsID0gbmV3IE1vZGFsKCk7XG5cblxuICAgICAgICBwcml2YWN5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBtb2RhbC5vcGVuKHByaXZhY3lNb2RhbCk7XG4gICAgICAgIH0pXG4gICAgfSkoKTtcblxufTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGFwcCk7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0bG9hZGVkOiBmYWxzZSxcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG5cdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gZnVuY3Rpb24ocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBjaHVua0lkcyA9IGRlZmVycmVkW2ldWzBdO1xuXHRcdHZhciBmbiA9IGRlZmVycmVkW2ldWzFdO1xuXHRcdHZhciBwcmlvcml0eSA9IGRlZmVycmVkW2ldWzJdO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeShmdW5jdGlvbihrZXkpIHsgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKTsgfSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubm1kID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdHJldHVybiBtb2R1bGU7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImFwcFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IGZ1bmN0aW9uKGNodW5rSWQpIHsgcmV0dXJuIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMDsgfTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSBmdW5jdGlvbihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkge1xuXHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuXHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuXHR2YXIgcnVudGltZSA9IGRhdGFbMl07XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZShmdW5jdGlvbihpZCkgeyByZXR1cm4gaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMDsgfSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rXCJdID0gc2VsZltcIndlYnBhY2tDaHVua1wiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbl9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvcnNcIl0sIGZ1bmN0aW9uKCkgeyByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vanMvcGMvYXBwLmpzXCIpOyB9KVxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzXCJdLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oXCIuL3Njc3MvcGMvYXBwLnNjc3NcIik7IH0pXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbImZpbmRPbmUiLCJvbiIsIkNMQVNTX05BTUVfQk9EWV9PUEVOIiwiQ0xBU1NfTkFNRV9PUEVOIiwiQ0xBU1NfTkFNRV9GQURFIiwiTW9kYWwiLCJfY2xhc3NDYWxsQ2hlY2siLCJib2R5IiwibW9kYWxzIiwib25FdmVudCIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwib3BlbiIsInRhcmdldCIsImxlbmd0aCIsImNsYXNzTGlzdCIsImFkZCIsInB1c2giLCJzZXRUaW1lb3V0IiwiY2xvc2UiLCJ0YXJnZXRNb2RhbCIsImluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsInJlbW92ZSIsIm9uQ2xvc2UiLCJldmVudCIsImNsb3Nlc3QiLCJ0YWdOYW1lIiwicHJldmVudERlZmF1bHQiLCJiaW5kIiwiZ2V0IiwiTWF0aCIsImFicyIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudFdpZHRoIiwiZmluZCIsIlRhYiIsImVsZW1lbnQiLCJjYWxsYmFjayIsIm1lbnVzIiwicGFuZWxzIiwibWFwIiwibWVudSIsInBhbmVsSWQiLCJnZXRBdHRyaWJ1dGUiLCJwYW5lbCIsImNvbmNhdCIsImN1cnJlbnQiLCJwYW5lbFRpbWVyIiwiaW5pdEV2ZW50cyIsInRvZ2dsZVRhYiIsIl90aGlzIiwiZm9yRWFjaCIsInNldEF0dHJpYnV0ZSIsInRvZ2dsZVBhbmVsIiwiX3RoaXMyIiwiY2xlYXJUaW1lb3V0IiwidG9nZ2xlIiwiX3RoaXMzIiwic2VsZWN0b3IiLCJjb250ZXh0IiwiYXJndW1lbnRzIiwidW5kZWZpbmVkIiwicXVlcnlTZWxlY3RvciIsIl90b0NvbnN1bWFibGVBcnJheSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ0eXBlIiwiY2FwdHVyZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJvZmYiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGVsZWdhdGUiLCJoYW5kbGVyIiwiZGlzcGF0Y2hFdmVudCIsInRhcmdldEVsZW1lbnQiLCJwb3RlbnRpYWxFbGVtZW50cyIsImNhbGwiLCJnZXRPZmZzZXQiLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwic2Nyb2xsWSIsImxlZnQiLCJzY3JvbGxYIiwiZGVib3VuY2UiLCJmdW5jIiwid2FpdCIsImluRGVib3VuY2UiLCJfbGVuIiwiYXJncyIsIkFycmF5IiwiX2tleSIsImFwcGx5IiwiU3dpcGVyIiwiTmF2aWdhdGlvbiIsIlBhZ2luYXRpb24iLCJ1c2UiLCJBT1MiLCJzYWwiLCJnc2FwIiwiU2Nyb2xsVHJpZ2dlciIsInJlZ2lzdGVyUGx1Z2luIiwiYXBwIiwiaW5pdCIsIm9uY2UiLCJoZWFkZXIiLCJoZWFkZXJIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJsaW5rcyIsInNlY3Rpb25zIiwibGluayIsInNlY3Rpb25zU3RhcnQiLCJnZXRTZWN0aW9uc1N0YXJ0Iiwic2VjdGlvbiIsInRvZ2dsZUxpbmsiLCJjdXJyZW50SW5kZXgiLCJtb3ZlU2VjdGlvbiIsInNjcm9sbCIsImJlaGF2aW9yIiwiYnJhbmRGaWxtIiwidGFiIiwiY2xpY2siLCJicmFuZEZpbG1DYXJvdXNlbCIsInNsaWRlc1BlclZpZXciLCJzcGFjZUJldHdlZW4iLCJjZW50ZXJlZFNsaWRlcyIsIm9ic2VydmVyIiwib2JzZXJ2ZVBhcmVudHMiLCJhbGxvd1RvdWNoTW92ZSIsIm5hdmlnYXRpb24iLCJuZXh0RWwiLCJwcmV2RWwiLCJyb2FkQ2Fyb3VzZWwiLCJsb29wIiwibW9kYWwiLCJ0cmlnZ2VycyIsImdldElkIiwidHJpZ2dlciIsImNvbnRlbnRzIiwicmVkdWNlIiwiaWQiLCJjb250ZW50IiwiYm9vc3RVcyIsImJvb3N0VXNNb2RhbCIsImZvcm0iLCJmb3JtQ2VydE5vIiwiZm9ybUhwaG9uZSIsImZvcm1DaGFubmVsIiwiZm9ybVVybCIsInVybFJlZ2V4IiwiZm9ybUNvbmNlcHQiLCJmb3JtUmVhc29uIiwiZm9ybUFncmVlMSIsImZvcm1BZ3JlZTIiLCJpc1ZhbGlkIiwiYWxlcnQiLCJmb2N1cyIsImV2ZXJ5IiwiaW5wdXQiLCJjaGVja2VkIiwidHJpbSIsInRlc3QiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiZmV0Y2giLCJhY3Rpb24iLCJtZXRob2QiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsInJlc3VsdCIsIm1lc3NhZ2UiLCJsb2NhdGlvbiIsInJlbG9hZCIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwiZm9vdGVyIiwicHJpdmFjeSIsInByaXZhY3lNb2RhbCJdLCJzb3VyY2VSb290IjoiIn0=