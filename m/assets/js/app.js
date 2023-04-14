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
        var content = contents[id]; // form.reset();

        modal.open(content);
      });
    });
    tab.menus[0].click();
    var boostUsModal = (0,_helper__WEBPACK_IMPORTED_MODULE_3__.findOne)('section#boost-us-v2');
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
            alert(data.message); // location.reload();

            location.href = '/m/#boost-us';
            location.reload();
          }
        }).catch(function (error) {
          console.error(error);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7V0FFQTs7V0FFQTs7V0FFQSw4Q0FBOEM7O1dBRTlDO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsbUNBQW1DO1dBQ3BFO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7VUVsREE7VUFDQTtVQUNBO1VBQ0EsMkRBQTJELG1EQUFtRDtVQUM5RyxxRkFBcUYsdURBQXVEO1VBQzVJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vanMvTW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vanMvVGFiLmpzIiwid2VicGFjazovLy8uL2pzL2hlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9qcy9tb2JpbGUvYXBwLmpzIiwid2VicGFjazovLy8uL3Njc3MvbW9iaWxlL2FwcC5zY3NzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL25vZGUgbW9kdWxlIGRlY29yYXRvciIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly8vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7ZmluZE9uZSwgb259IGZyb20gJy4vaGVscGVyJztcclxuXHJcbmNvbnN0IENMQVNTX05BTUVfQk9EWV9PUEVOID0gJ21vZGFsLW9wZW4nO1xyXG5jb25zdCBDTEFTU19OQU1FX09QRU4gPSAnbW9kYWwtLW9wZW4nO1xyXG5jb25zdCBDTEFTU19OQU1FX0ZBREUgPSAnbW9kYWwtLWZhZGUnO1xyXG5cclxuY29uc3QgTW9kYWwgPSBjbGFzcyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmJvZHkgPSBmaW5kT25lKCdib2R5Jyk7XHJcblxyXG4gICAgICAgIHRoaXMubW9kYWxzID0gW107XHJcbiAgICAgICAgdGhpcy5vbkV2ZW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgb3Blbih0YXJnZXQpIHtcclxuICAgICAgICBpZiAoIXRoaXMubW9kYWxzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLmJvZHkuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0JPRFlfT1BFTik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm1vZGFscy5wdXNoKHRhcmdldCk7XHJcbiAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9PUEVOKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRhcmdldC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfRkFERSksIDApO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZSh0YXJnZXRNb2RhbCkge1xyXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMubW9kYWxzLmxlbmd0aCAtIDE7XHJcblxyXG4gICAgICAgIGlmICh0YXJnZXRNb2RhbCkge1xyXG4gICAgICAgICAgICBpbmRleCA9IHRoaXMubW9kYWxzLmluZGV4T2YodGFyZ2V0TW9kYWwpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgaW5kZXggPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB0YXJnZXQgPSB0aGlzLm1vZGFscy5zcGxpY2UoaW5kZXgsIDEpWzBdO1xyXG5cclxuICAgICAgICBpZiAoIXRhcmdldCkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0ZBREUsIENMQVNTX05BTUVfT1BFTik7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5tb2RhbHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYm9keS5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQk9EWV9PUEVOKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25DbG9zZShldmVudCkge1xyXG4gICAgICAgIGNvbnN0IGNsb3NlID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5tb2RhbF9fY2xvc2UnKTtcclxuXHJcbiAgICAgICAgaWYgKGNsb3NlKSB7XHJcbiAgICAgICAgICAgIGlmIChjbG9zZS50YWdOYW1lID09PSAnQScpIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uRXZlbnQoKSB7XHJcbiAgICAgICAgb24odGhpcy5ib2R5LCAnY2xpY2snLCB0aGlzLm9uQ2xvc2UuYmluZCh0aGlzKSwgZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzY3JvbGxXaWR0aCgpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5hYnMod2luZG93LmlubmVyV2lkdGggLSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9kYWw7IiwiaW1wb3J0IHtmaW5kT25lLCBmaW5kLCBvbn0gZnJvbSAnLi9oZWxwZXInO1xyXG5cclxuY29uc3QgVGFiID0gY2xhc3Mge1xyXG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgY2FsbGJhY2spIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xyXG4gICAgICAgIHRoaXMubWVudXMgPSBmaW5kKCcudGFiX19tZW51JywgdGhpcy5lbGVtZW50KTtcclxuICAgICAgICB0aGlzLnBhbmVscyA9IHRoaXMubWVudXMubWFwKG1lbnUgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwYW5lbElkID0gbWVudS5nZXRBdHRyaWJ1dGUoJ2FyaWEtY29udHJvbHMnKTtcclxuICAgICAgICAgICAgY29uc3QgcGFuZWwgPSBmaW5kT25lKGAjJHtwYW5lbElkfWApO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHBhbmVsO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmN1cnJlbnQgPSAwO1xyXG4gICAgICAgIHRoaXMucGFuZWxUaW1lciA9IG51bGw7XHJcblxyXG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcclxuXHJcbiAgICAgICAgdGhpcy5pbml0RXZlbnRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlVGFiKCkge1xyXG4gICAgICAgIHRoaXMubWVudXMuZm9yRWFjaCgobWVudSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudCA9PT0gaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgndGFiX19tZW51LS1hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIG1lbnUuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ3RhYl9fbWVudS0tYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICBtZW51LnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsIGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZVBhbmVsKCkge1xyXG4gICAgICAgIHRoaXMucGFuZWxzLmZvckVhY2goKHBhbmVsLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50ID09PSBpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgcGFuZWwuY2xhc3NMaXN0LmFkZCgndGFiX19wYW5lbC0taW4nKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFuZWxUaW1lciAmJiBjbGVhclRpbWVvdXQodGhpcy5wYW5lbFRpbWVyKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFuZWxUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4gcGFuZWwuY2xhc3NMaXN0LmFkZCgndGFiX19wYW5lbC0tYWN0aXZlJyksIDEzKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHBhbmVsLmNsYXNzTGlzdC5yZW1vdmUoJ3RhYl9fcGFuZWwtLWluJywgJ3RhYl9fcGFuZWwtLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlKCkge1xyXG4gICAgICAgIHRoaXMudG9nZ2xlVGFiKCk7XHJcbiAgICAgICAgdGhpcy50b2dnbGVQYW5lbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRFdmVudHMoKSB7XHJcbiAgICAgICAgdGhpcy5tZW51cy5mb3JFYWNoKChtZW51LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBvbihtZW51LCAnY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50ID0gaW5kZXg7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuY2FsbGJhY2sgJiYgdGhpcy5jYWxsYmFjaygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhYjsiLCJleHBvcnQgY29uc3QgZmluZE9uZSA9IChzZWxlY3RvciwgY29udGV4dCA9IGRvY3VtZW50KSA9PiBjb250ZXh0LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xyXG5leHBvcnQgY29uc3QgZmluZCA9IChzZWxlY3RvciwgY29udGV4dCA9IGRvY3VtZW50KSA9PiBbLi4uY29udGV4dC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKV07XHJcblxyXG5leHBvcnQgY29uc3Qgb24gPSAodGFyZ2V0LCB0eXBlLCBjYWxsYmFjaywgY2FwdHVyZSA9IGZhbHNlKSA9PiB7XHJcbiAgICBpZiAoIXRhcmdldCB8fCAhdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIpIHJldHVybjtcclxuXHJcbiAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBjYWxsYmFjaywgY2FwdHVyZSk7XHJcbn07XHJcbmV4cG9ydCBjb25zdCBvZmYgPSAodGFyZ2V0LCB0eXBlLCBjYWxsYmFjaykgPT4gdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgY2FsbGJhY2spO1xyXG5leHBvcnQgY29uc3QgZGVsZWdhdGUgPSAodGFyZ2V0LCBzZWxlY3RvciwgdHlwZSwgaGFuZGxlciwgY2FwdHVyZSkgPT4ge1xyXG4gICAgY29uc3QgZGlzcGF0Y2hFdmVudCA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRhcmdldEVsZW1lbnQgPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgY29uc3QgcG90ZW50aWFsRWxlbWVudHMgPSB0YXJnZXRFbGVtZW50LmNsb3Nlc3Qoc2VsZWN0b3IpO1xyXG5cclxuICAgICAgICBpZiAocG90ZW50aWFsRWxlbWVudHMpIHtcclxuICAgICAgICAgICAgaGFuZGxlci5jYWxsKHBvdGVudGlhbEVsZW1lbnRzLCBldmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBvbih0YXJnZXQsIHR5cGUsIGRpc3BhdGNoRXZlbnQsICEhY2FwdHVyZSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0T2Zmc2V0ID0gKGVsZW1lbnQpID0+IHtcclxuICAgIGNvbnN0IHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdG9wOiByZWN0LnRvcCArIHdpbmRvdy5zY3JvbGxZLFxyXG4gICAgICAgIGxlZnQ6IHJlY3QubGVmdCArIHdpbmRvdy5zY3JvbGxYXHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlYm91bmNlID0gKGZ1bmMsIHdhaXQgPSAzMDApID0+IHtcclxuICAgIGxldCBpbkRlYm91bmNlO1xyXG5cclxuICAgIHJldHVybiAoLi4uYXJncykgPT4ge1xyXG4gICAgICAgIGluRGVib3VuY2UgJiYgY2xlYXJUaW1lb3V0KGluRGVib3VuY2UpO1xyXG4gICAgICAgIGluRGVib3VuY2UgPSBzZXRUaW1lb3V0KCgpID0+IGZ1bmMoLi4uYXJncyksIHdhaXQpO1xyXG4gICAgfTtcclxufTsiLCJpbXBvcnQgU3dpcGVyLCB7TmF2aWdhdGlvbiwgUGFnaW5hdGlvbiB9IGZyb20gJ3N3aXBlcic7XHJcblN3aXBlci51c2UoW05hdmlnYXRpb24sIFBhZ2luYXRpb25dKTtcclxuaW1wb3J0IEFPUyBmcm9tICdhb3MnO1xyXG5pbXBvcnQgc2FsIGZyb20gJ3NhbC5qcydcclxuaW1wb3J0IGdzYXAgZnJvbSAnZ3NhcCc7XHJcbmltcG9ydCBTY3JvbGxUcmlnZ2VyIGZyb20gJ2dzYXAvU2Nyb2xsVHJpZ2dlcic7XHJcbmltcG9ydCB7ZmluZE9uZSwgZmluZCwgZ2V0T2Zmc2V0LCBvbn0gZnJvbSAnLi4vaGVscGVyJztcclxuaW1wb3J0IFRhYiBmcm9tICcuLi9UYWInO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSBcIi4uL01vZGFsXCI7XHJcbmltcG9ydCAqIGFzIGV2ZW50cyBmcm9tIFwiZXZlbnRzXCI7XHJcblxyXG5nc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRyaWdnZXIpO1xyXG5cclxuY29uc3QgYXBwID0gKCkgPT4ge1xyXG4gICAgQU9TLmluaXQoe1xyXG4gICAgICAgIG9uY2U6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIC8vaGVhZGVyXHJcbiAgICAoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNpdGVIZWFkZXIgID0gZmluZE9uZSgnaGVhZGVyJyk7XHJcbiAgICAgICAgY29uc3QgaGVhZGVySGVpZ2h0ID0gc2l0ZUhlYWRlci5jbGllbnRIZWlnaHQ7XHJcbiAgICAgICAgY29uc3Qgc2l0ZU1lbnUgPSBmaW5kT25lKCcuaGVhZGVyLW1lbnVfX2J1dHRvbicsIHNpdGVIZWFkZXIpO1xyXG4gICAgICAgIGNvbnN0IHNpdGVNZW51SXRlbXMgPSBmaW5kKCcuaGVhZGVyLW1lbnVfX2xpbmsnLCBzaXRlSGVhZGVyKTtcclxuICAgICAgICBjb25zdCBzZWN0aW9ucyA9IHNpdGVNZW51SXRlbXMubWFwKGxpbmsgPT4gZmluZE9uZShsaW5rLmdldEF0dHJpYnV0ZSgnaHJlZicpKSk7XHJcbiAgICAgICAgY29uc3Qgc2VjdGlvbnNTdGFydCA9IFtdO1xyXG4gICAgICAgIGNvbnN0IGdldFNlY3Rpb25zU3RhcnQgPSAoKSA9PiBzZWN0aW9ucy5mb3JFYWNoKChzZWN0aW9uLCBpbmRleCkgPT4gc2VjdGlvbnNTdGFydFtpbmRleF0gPSB+fihnZXRPZmZzZXQoc2VjdGlvbikudG9wIC0gaGVhZGVySGVpZ2h0KSsxKTtcclxuXHJcbiAgICAgICAgY29uc3QgbW92ZVNlY3Rpb24gPSAoaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgd2luZG93LnNjcm9sbCh7XHJcbiAgICAgICAgICAgICAgICB0b3A6IHNlY3Rpb25zU3RhcnRbaW5kZXhdLFxyXG4gICAgICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vaGVhZGVyIGZpeGVkXHJcbiAgICAgICAgY29uc3QgY2hhbmdlSGVhZGVyID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBzaXRlSGVhZGVyLmNsYXNzTGlzdFt3aW5kb3cucGFnZVlPZmZzZXQgPj0gc2l0ZUhlYWRlci5vZmZzZXRIZWlnaHQgPyAnYWRkJyA6ICdyZW1vdmUnXSgnZml4ZWQnKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG9uKHdpbmRvdywgJ3Njcm9sbCcsIGNoYW5nZUhlYWRlcik7XHJcblxyXG4gICAgICAgIC8v66mU64m0IG9wZW4sY2xvc2VcclxuICAgICAgICBzaXRlTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgaWYoc2l0ZUhlYWRlci5jbGFzc0xpc3QuY29udGFpbnMoJ2hlYWRlci1tZW51LS1vcGVuJykpIHtcclxuICAgICAgICAgICAgICAgIHNpdGVIZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGVhZGVyLW1lbnUtLW9wZW4nKTtcclxuICAgICAgICAgICAgICAgIHNpdGVIZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnZml4ZWQnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNpdGVIZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLW1lbnUtLW9wZW4nKTtcclxuICAgICAgICAgICAgICAgIHNpdGVIZWFkZXIuY2xhc3NMaXN0LmFkZCgnZml4ZWQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBnZXRTZWN0aW9uc1N0YXJ0KCk7XHJcblxyXG4gICAgICAgIHNpdGVNZW51SXRlbXMuZm9yRWFjaCgoc2l0ZU1lbnVJdGVtLGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHNpdGVNZW51SXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgc2l0ZUhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXItbWVudS0tb3BlbicpO1xyXG4gICAgICAgICAgICAgICAgbW92ZVNlY3Rpb24oaW5kZXgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIG9uKHdpbmRvdywgJ2xvYWQnLCBnZXRTZWN0aW9uc1N0YXJ0KTtcclxuICAgICAgICBvbih3aW5kb3csICdyZXNpemUnLCBnZXRTZWN0aW9uc1N0YXJ0KTtcclxuXHJcbiAgICB9KSgpO1xyXG5cclxuICAgIC8vIEJyYW5kIEZpbG1cclxuICAgICgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYnJhbmRGaWxtID0gZmluZE9uZSgnLmJyYW5kLWZpbG0nKTtcclxuICAgICAgICBjb25zdCB0YWIgPSBuZXcgVGFiKGZpbmRPbmUoJy50YWInLCBicmFuZEZpbG0pKTtcclxuICAgICAgICB0YWIubWVudXNbMF0uY2xpY2soKTtcclxuXHJcbiAgICAgICAgY29uc3QgYnJhbmRGaWxtQ2Fyb3VzZWwgPSBuZXcgU3dpcGVyKCcuYnJhbmQtZmlsbSAuc3dpcGVyJywge1xyXG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXHJcbiAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMTAsXHJcbiAgICAgICAgICAgIG9ic2VydmVyOiB0cnVlLFxyXG4gICAgICAgICAgICBvYnNlcnZlUGFyZW50czogdHJ1ZSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9KSgpO1xyXG5cclxuICAgIC8vIFdIWSBOT1QgUk9BRFxyXG4gICAgKCgpID0+IHtcclxuICAgICAgICBjb25zdCByb2FkID0gZmluZE9uZSgnLnJvYWQnKTtcclxuICAgICAgICBjb25zdCBjYXJvdXNlbFdyYXAgPSBmaW5kT25lKCcucm9hZF9fY2Fyb3VzZWxfMSAuc3dpcGVyJywgcm9hZCk7XHJcbiAgICAgICAgY29uc3QgY2Fyb3VzZWxXcmFwMiA9IGZpbmRPbmUoJy5yb2FkX19jYXJvdXNlbF8yIC5zd2lwZXInLCByb2FkKTtcclxuICAgICAgICBjb25zdCBjYXJvdXNlbFBhZ2luYXRpb24gPSBmaW5kT25lKCcuc3dpcGVyLXBhZ2luYXRpb24nLCByb2FkKTtcclxuICAgICAgICBjb25zdCBjYXJvdXNlbFBhZ2luYXRpb25NZW51cyA9IGZpbmQoJ3AnLCBjYXJvdXNlbFdyYXApLm1hcChtZW51ID0+IG1lbnUuaW5uZXJUZXh0KTtcclxuXHJcbiAgICAgICAgY29uc3Qgcm9hZENhcm91c2VsID0gbmV3IFN3aXBlcihjYXJvdXNlbFdyYXAsIHtcclxuICAgICAgICAgICAgbG9vcDp0cnVlLFxyXG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXHJcbiAgICAgICAgICAgIGxvb3BBZGRpdGlvbmFsU2xpZGVzOiAnNScsXHJcbiAgICAgICAgICAgIGxvb3BlZFNsaWRlczogJzUnLFxyXG4gICAgICAgICAgICBzcGFjZUJldHdlZW46IDEwLFxyXG5cclxuICAgICAgICAgICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgZWw6IGNhcm91c2VsUGFnaW5hdGlvbixcclxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHJlbmRlckJ1bGxldChpbmRleCwgY2xhc3NOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiJHtjbGFzc05hbWV9XCI+JHtjYXJvdXNlbFBhZ2luYXRpb25NZW51c1tpbmRleF19PC9kaXY+YDtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHJvYWRDYXJvdXNlbDIgPSBuZXcgU3dpcGVyKGNhcm91c2VsV3JhcDIsIHtcclxuICAgICAgICAgICAgLy8gbG9vcDogdHJ1ZSxcclxuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogXCJhdXRvXCIsXHJcbiAgICAgICAgICAgIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxyXG4gICAgICAgICAgICBhbGxvd1RvdWNoTW92ZTogZmFsc2UsXHJcbiAgICAgICAgICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgICAgICAgICAgIG5leHRFbDogXCIuc3dpcGVyLWJ1dHRvbi1uZXh0XCIsXHJcbiAgICAgICAgICAgICAgICBwcmV2RWw6IFwiLnN3aXBlci1idXR0b24tcHJldlwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbW9kYWwgPSBuZXcgTW9kYWwoKTtcclxuICAgICAgICAgICAgY29uc3QgdHJpZ2dlcnMgPSBmaW5kKCcucm9hZF9fbGluaycpO1xyXG4gICAgICAgICAgICBjb25zdCBnZXRJZCA9IHRyaWdnZXIgPT4gdHJpZ2dlci5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcclxuICAgICAgICAgICAgY29uc3QgY29udGVudHMgPSB0cmlnZ2Vycy5yZWR1Y2UoKGNvbnRlbnRzLCB0cmlnZ2VyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpZCA9IGdldElkKHRyaWdnZXIpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29udGVudCA9IGZpbmRPbmUoaWQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnRlbnRzW2lkXSA9IGNvbnRlbnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRlbnRzO1xyXG4gICAgICAgICAgICB9LCB7fSk7XHJcblxyXG4gICAgICAgICAgICB0cmlnZ2Vycy5mb3JFYWNoKCh0cmlnZ2VyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBvbih0cmlnZ2VyLCAnY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpZCA9IGdldElkKHRyaWdnZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBjb250ZW50c1tpZF07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsLm9wZW4oY29udGVudCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyB0cmlnZ2Vyc1szXS5jbGljaygpO1xyXG4gICAgICAgIH0pKCk7XHJcblxyXG4gICAgfSkoKTtcclxuXHJcbiAgICAvLyBXSFkgTk9UIENPTlRFTlRTXHJcbiAgICAoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvbnRlbnRzID0gZmluZE9uZSgnLmNvbnRlbnRzJyk7XHJcbiAgICAgICAgY29uc3QgY2Fyb3VzZWxXcmFwID0gZmluZE9uZSgnLnN3aXBlcicsIGNvbnRlbnRzKTtcclxuICAgICAgICBjb25zdCBjYXJvdXNlbFBhZ2luYXRpb24gPSBmaW5kT25lKCcuc3dpcGVyLXBhZ2luYXRpb24nLCBjb250ZW50cyk7XHJcbiAgICAgICAgY29uc3QgY2Fyb3VzZWxQYWdpbmF0aW9uTWVudXMgPSBmaW5kKCdbZGF0YS1wYWdpbmF0aW9uLW5hbWVdJywgY29udGVudHMpLm1hcChtZW51ID0+IG1lbnUuZGF0YXNldC5wYWdpbmF0aW9uTmFtZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbnRlbnRDYXJvdXNlbCA9IG5ldyBTd2lwZXIoY2Fyb3VzZWxXcmFwLCB7XHJcbiAgICAgICAgICAgIGxvb3A6dHJ1ZSxcclxuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogJ2F1dG8nLFxyXG4gICAgICAgICAgICBsb29wQWRkaXRpb25hbFNsaWRlczogJzUnLFxyXG4gICAgICAgICAgICBzcGFjZUJldHdlZW46IDEwLFxyXG5cclxuICAgICAgICAgICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgZWw6IGNhcm91c2VsUGFnaW5hdGlvbixcclxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHJlbmRlckJ1bGxldChpbmRleCwgY2xhc3NOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiJHtjbGFzc05hbWV9XCI+JHtjYXJvdXNlbFBhZ2luYXRpb25NZW51c1tpbmRleF19PC9kaXY+YDtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgIH0pKCk7XHJcblxyXG4gICAgLy8gQk9PU1QgVVNcclxuICAgICgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYm9vc3RVcyA9IGZpbmRPbmUoJy5ib29zdC11cycpO1xyXG4gICAgICAgIGNvbnN0IHRhYiA9IG5ldyBUYWIoZmluZE9uZSgnLnRhYicsIGJvb3N0VXMpKTtcclxuICAgICAgICBjb25zdCBtb2RhbCA9IG5ldyBNb2RhbCgpO1xyXG4gICAgICAgIGNvbnN0IHRyaWdnZXJzID0gZmluZCgnYScsIGJvb3N0VXMpO1xyXG4gICAgICAgIGNvbnN0IGdldElkID0gdHJpZ2dlciA9PiB0cmlnZ2VyLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xyXG4gICAgICAgIGNvbnN0IGNvbnRlbnRzID0gdHJpZ2dlcnMucmVkdWNlKChjb250ZW50cywgdHJpZ2dlcikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpZCA9IGdldElkKHRyaWdnZXIpO1xyXG4gICAgICAgICAgICBjb25zdCBjb250ZW50ID0gZmluZE9uZShpZCk7XHJcblxyXG4gICAgICAgICAgICBjb250ZW50c1tpZF0gPSBjb250ZW50O1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGNvbnRlbnRzO1xyXG4gICAgICAgIH0sIHt9KTtcclxuXHJcblxyXG4gICAgICAgIHRyaWdnZXJzLmZvckVhY2goKHRyaWdnZXIpID0+IHtcclxuICAgICAgICAgICAgb24odHJpZ2dlciwgJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gZ2V0SWQodHJpZ2dlcik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb250ZW50ID0gY29udGVudHNbaWRdO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGZvcm0ucmVzZXQoKTtcclxuICAgICAgICAgICAgICAgIG1vZGFsLm9wZW4oY29udGVudCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0YWIubWVudXNbMF0uY2xpY2soKTtcclxuXHJcbiAgICAgICAgY29uc3QgYm9vc3RVc01vZGFsID0gZmluZE9uZSgnc2VjdGlvbiNib29zdC11cy12MicpO1xyXG4gICAgICAgIGNvbnN0IGZvcm0gPSBmaW5kT25lKCcucmVnaXN0ZXItZm9ybScsIGJvb3N0VXNNb2RhbCk7XHJcbiAgICAgICAgY29uc3QgZm9ybUNlcnRObyA9IGZpbmRPbmUoJ1tuYW1lPVwiY2VydF9ub1wiXScsIGZvcm0pO1xyXG4gICAgICAgIGNvbnN0IGZvcm1IcGhvbmUgPSBmaW5kT25lKCdbbmFtZT1cImhwaG9uZVwiXScsIGZvcm0pO1xyXG4gICAgICAgIGNvbnN0IGZvcm1DaGFubmVsID0gZmluZCgnW25hbWU9XCJjaGFubmVsXCJdJywgZm9ybSk7XHJcbiAgICAgICAgY29uc3QgZm9ybVVybCA9IGZpbmRPbmUoJ1tuYW1lPVwidXJsXCJdJywgZm9ybSk7XHJcbiAgICAgICAgY29uc3QgdXJsUmVnZXggPSAvKGh0dHB8aHR0cHMpOlxcL1xcLyhcXHcrOnswLDF9XFx3KkApPyhcXFMrKSg6WzAtOV0rKT8oXFwvfFxcLyhbXFx3IyE6Lj8rPSYlQCFcXC1cXC9dKSk/LztcclxuICAgICAgICBjb25zdCBmb3JtQ29uY2VwdCA9IGZpbmRPbmUoJ1tuYW1lPVwiY29uY2VwdFwiXScsIGZvcm0pO1xyXG4gICAgICAgIGNvbnN0IGZvcm1SZWFzb24gPSBmaW5kT25lKCdbbmFtZT1cInJlYXNvblwiXScsIGZvcm0pO1xyXG4gICAgICAgIGNvbnN0IGZvcm1BZ3JlZTEgPSBmaW5kT25lKCdbbmFtZT1cImFncmVlMVwiXScsIGZvcm0pO1xyXG4gICAgICAgIGNvbnN0IGZvcm1BZ3JlZTIgPSBmaW5kT25lKCdbbmFtZT1cImFncmVlMlwiXScsIGZvcm0pO1xyXG5cclxuICAgICAgICBjb25zdCBpc1ZhbGlkID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZihmb3JtQ2VydE5vLnZhbHVlID09IFwiXCIgfHwgZm9ybUhwaG9uZS52YWx1ZSA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydCgn67O47J247J247Kad7J2EIOynhO2Wie2VtCDso7zshLjsmpQuJyk7XHJcbiAgICAgICAgICAgICAgICBmb3JtSHBob25lLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBpZiAoZm9ybUNoYW5uZWwuZXZlcnkoaW5wdXQgPT4gIWlucHV0LmNoZWNrZWQpKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydCgn7Zmc64+Z7LGE64SQ7J2EIOyytO2BrO2VtCDso7zshLjsmpQuJyk7XHJcbiAgICAgICAgICAgICAgICBmb3JtQ2hhbm5lbFswXS5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIWZvcm1VcmwudmFsdWUudHJpbSgpKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydCgnVVJM7J2EIOyeheugpe2VtCDso7zshLjsmpQuJyk7XHJcbiAgICAgICAgICAgICAgICBmb3JtVXJsLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKCF1cmxSZWdleC50ZXN0KGZvcm1VcmwudmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydCgnVVJM7J2EIOygle2Zle2eiCDsnoXroKXtlbQg7KO87IS47JqULicpO1xyXG4gICAgICAgICAgICAgICAgZm9ybVVybC5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgaWYgKCFmb3JtQ29uY2VwdC52YWx1ZS50cmltKCkpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KCfssYTrhJDsu6jshYnsnYQg7J6F66Cl7ZW0IOyjvOyEuOyalC4nKTtcclxuICAgICAgICAgICAgICAgIGZvcm1Db25jZXB0LmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKCFmb3JtUmVhc29uLnZhbHVlLnRyaW0oKSkge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoJ+yngOybkOuPmeq4sOulvCDsnoXroKXtlbQg7KO87IS47JqULicpO1xyXG4gICAgICAgICAgICAgICAgZm9ybVJlYXNvbi5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgaWYgKCFmb3JtQWdyZWUxLmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KCfqsJzsnbjsoJXrs7Qg7IiY7KeRIOuwjyDtmZzsmqkg64+Z7J2Y66W8IOyytO2BrO2VtCDso7zshLjsmpQuJyk7XHJcbiAgICAgICAgICAgICAgICBmb3JtQWdyZWUxLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghZm9ybUFncmVlMi5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydCgn7KeA7JuQL+ywuOyXrOyekCDsnKDsnZjsgqztla3snYQg7LK07YGs7ZW0IOyjvOyEuOyalC4nKTtcclxuICAgICAgICAgICAgICAgIGZvcm1BZ3JlZTEuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGlzVmFsaWQoKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSk7XHJcblxyXG4gICAgICAgICAgICAgICAgZmV0Y2goZm9ybS5hY3Rpb24sIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IGZvcm0ubWV0aG9kLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IGZvcm1EYXRhXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEucmVzdWx0ID09IGZhbHNlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KGRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24uaHJlZj0nL20vI2Jvb3N0LXVzJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH0pKCk7XHJcblxyXG4gICAgLy9mb290ZXIg6rCc7J247KCV67O0IOyymOumrCDrsKnsuahcclxuICAgICgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZm9vdGVyID0gZmluZE9uZSgnZm9vdGVyJyk7XHJcbiAgICAgICAgY29uc3QgcHJpdmFjeSA9IGZpbmRPbmUoJy5mb290ZXJfX3ByaXZhY3knLCBmb290ZXIpO1xyXG4gICAgICAgIGNvbnN0IHByaXZhY3lNb2RhbCA9IGZpbmRPbmUoJy5tb2RhbC1mb290ZXItcHJpdmFjeScpO1xyXG4gICAgICAgIGNvbnN0IG1vZGFsID0gbmV3IE1vZGFsKCk7XHJcblxyXG5cclxuICAgICAgICBwcml2YWN5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICBtb2RhbC5vcGVuKHByaXZhY3lNb2RhbCk7XHJcbiAgICAgICAgfSlcclxuICAgIH0pKCk7XHJcblxyXG59O1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGFwcCk7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0bG9hZGVkOiBmYWxzZSxcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG5cdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gZnVuY3Rpb24ocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBjaHVua0lkcyA9IGRlZmVycmVkW2ldWzBdO1xuXHRcdHZhciBmbiA9IGRlZmVycmVkW2ldWzFdO1xuXHRcdHZhciBwcmlvcml0eSA9IGRlZmVycmVkW2ldWzJdO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeShmdW5jdGlvbihrZXkpIHsgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKTsgfSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubm1kID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdHJldHVybiBtb2R1bGU7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImFwcFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IGZ1bmN0aW9uKGNodW5rSWQpIHsgcmV0dXJuIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMDsgfTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSBmdW5jdGlvbihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkge1xuXHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuXHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuXHR2YXIgcnVudGltZSA9IGRhdGFbMl07XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZShmdW5jdGlvbihpZCkgeyByZXR1cm4gaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMDsgfSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rXCJdID0gc2VsZltcIndlYnBhY2tDaHVua1wiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbl9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvcnNcIl0sIGZ1bmN0aW9uKCkgeyByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vanMvbW9iaWxlL2FwcC5qc1wiKTsgfSlcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9yc1wiXSwgZnVuY3Rpb24oKSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zY3NzL21vYmlsZS9hcHAuc2Nzc1wiKTsgfSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOlsiZmluZE9uZSIsIm9uIiwiQ0xBU1NfTkFNRV9CT0RZX09QRU4iLCJDTEFTU19OQU1FX09QRU4iLCJDTEFTU19OQU1FX0ZBREUiLCJNb2RhbCIsImJvZHkiLCJtb2RhbHMiLCJvbkV2ZW50IiwidGFyZ2V0IiwibGVuZ3RoIiwiY2xhc3NMaXN0IiwiYWRkIiwicHVzaCIsInNldFRpbWVvdXQiLCJ0YXJnZXRNb2RhbCIsImluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsInJlbW92ZSIsImV2ZW50IiwiY2xvc2UiLCJjbG9zZXN0IiwidGFnTmFtZSIsInByZXZlbnREZWZhdWx0Iiwib25DbG9zZSIsImJpbmQiLCJNYXRoIiwiYWJzIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50V2lkdGgiLCJmaW5kIiwiVGFiIiwiZWxlbWVudCIsImNhbGxiYWNrIiwibWVudXMiLCJwYW5lbHMiLCJtYXAiLCJtZW51IiwicGFuZWxJZCIsImdldEF0dHJpYnV0ZSIsInBhbmVsIiwiY3VycmVudCIsInBhbmVsVGltZXIiLCJpbml0RXZlbnRzIiwiZm9yRWFjaCIsInNldEF0dHJpYnV0ZSIsImNsZWFyVGltZW91dCIsInRvZ2dsZVRhYiIsInRvZ2dsZVBhbmVsIiwidG9nZ2xlIiwic2VsZWN0b3IiLCJjb250ZXh0IiwicXVlcnlTZWxlY3RvciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ0eXBlIiwiY2FwdHVyZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJvZmYiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGVsZWdhdGUiLCJoYW5kbGVyIiwiZGlzcGF0Y2hFdmVudCIsInRhcmdldEVsZW1lbnQiLCJwb3RlbnRpYWxFbGVtZW50cyIsImNhbGwiLCJnZXRPZmZzZXQiLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwic2Nyb2xsWSIsImxlZnQiLCJzY3JvbGxYIiwiZGVib3VuY2UiLCJmdW5jIiwid2FpdCIsImluRGVib3VuY2UiLCJhcmdzIiwiU3dpcGVyIiwiTmF2aWdhdGlvbiIsIlBhZ2luYXRpb24iLCJ1c2UiLCJBT1MiLCJzYWwiLCJnc2FwIiwiU2Nyb2xsVHJpZ2dlciIsImV2ZW50cyIsInJlZ2lzdGVyUGx1Z2luIiwiYXBwIiwiaW5pdCIsIm9uY2UiLCJzaXRlSGVhZGVyIiwiaGVhZGVySGVpZ2h0IiwiY2xpZW50SGVpZ2h0Iiwic2l0ZU1lbnUiLCJzaXRlTWVudUl0ZW1zIiwic2VjdGlvbnMiLCJsaW5rIiwic2VjdGlvbnNTdGFydCIsImdldFNlY3Rpb25zU3RhcnQiLCJzZWN0aW9uIiwibW92ZVNlY3Rpb24iLCJzY3JvbGwiLCJiZWhhdmlvciIsImNoYW5nZUhlYWRlciIsInBhZ2VZT2Zmc2V0Iiwib2Zmc2V0SGVpZ2h0IiwiY29udGFpbnMiLCJzaXRlTWVudUl0ZW0iLCJicmFuZEZpbG0iLCJ0YWIiLCJjbGljayIsImJyYW5kRmlsbUNhcm91c2VsIiwic2xpZGVzUGVyVmlldyIsInNwYWNlQmV0d2VlbiIsIm9ic2VydmVyIiwib2JzZXJ2ZVBhcmVudHMiLCJyb2FkIiwiY2Fyb3VzZWxXcmFwIiwiY2Fyb3VzZWxXcmFwMiIsImNhcm91c2VsUGFnaW5hdGlvbiIsImNhcm91c2VsUGFnaW5hdGlvbk1lbnVzIiwiaW5uZXJUZXh0Iiwicm9hZENhcm91c2VsIiwibG9vcCIsImxvb3BBZGRpdGlvbmFsU2xpZGVzIiwibG9vcGVkU2xpZGVzIiwicGFnaW5hdGlvbiIsImVsIiwiY2xpY2thYmxlIiwicmVuZGVyQnVsbGV0IiwiY2xhc3NOYW1lIiwicm9hZENhcm91c2VsMiIsImNlbnRlcmVkU2xpZGVzIiwiYWxsb3dUb3VjaE1vdmUiLCJuYXZpZ2F0aW9uIiwibmV4dEVsIiwicHJldkVsIiwibW9kYWwiLCJ0cmlnZ2VycyIsImdldElkIiwidHJpZ2dlciIsImNvbnRlbnRzIiwicmVkdWNlIiwiaWQiLCJjb250ZW50Iiwib3BlbiIsImRhdGFzZXQiLCJwYWdpbmF0aW9uTmFtZSIsImNvbnRlbnRDYXJvdXNlbCIsImJvb3N0VXMiLCJib29zdFVzTW9kYWwiLCJmb3JtIiwiZm9ybUNlcnRObyIsImZvcm1IcGhvbmUiLCJmb3JtQ2hhbm5lbCIsImZvcm1VcmwiLCJ1cmxSZWdleCIsImZvcm1Db25jZXB0IiwiZm9ybVJlYXNvbiIsImZvcm1BZ3JlZTEiLCJmb3JtQWdyZWUyIiwiaXNWYWxpZCIsInZhbHVlIiwiYWxlcnQiLCJmb2N1cyIsImV2ZXJ5IiwiaW5wdXQiLCJjaGVja2VkIiwidHJpbSIsInRlc3QiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiZmV0Y2giLCJhY3Rpb24iLCJtZXRob2QiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsInJlc3VsdCIsIm1lc3NhZ2UiLCJsb2NhdGlvbiIsImhyZWYiLCJyZWxvYWQiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImZvb3RlciIsInByaXZhY3kiLCJwcml2YWN5TW9kYWwiXSwic291cmNlUm9vdCI6IiJ9