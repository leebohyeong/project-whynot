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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7V0FFQTs7V0FFQTs7V0FFQSw4Q0FBOEM7O1dBRTlDO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsbUNBQW1DO1dBQ3BFO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7VUVsREE7VUFDQTtVQUNBO1VBQ0EsMkRBQTJELG1EQUFtRDtVQUM5RyxxRkFBcUYsdURBQXVEO1VBQzVJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vanMvTW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vanMvVGFiLmpzIiwid2VicGFjazovLy8uL2pzL2hlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9qcy9tb2JpbGUvYXBwLmpzIiwid2VicGFjazovLy8uL3Njc3MvbW9iaWxlL2FwcC5zY3NzP2UyNTUiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbm9kZSBtb2R1bGUgZGVjb3JhdG9yIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly8vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly8vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovLy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtmaW5kT25lLCBvbn0gZnJvbSAnLi9oZWxwZXInO1xyXG5cclxuY29uc3QgQ0xBU1NfTkFNRV9CT0RZX09QRU4gPSAnbW9kYWwtb3Blbic7XHJcbmNvbnN0IENMQVNTX05BTUVfT1BFTiA9ICdtb2RhbC0tb3Blbic7XHJcbmNvbnN0IENMQVNTX05BTUVfRkFERSA9ICdtb2RhbC0tZmFkZSc7XHJcblxyXG5jb25zdCBNb2RhbCA9IGNsYXNzIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuYm9keSA9IGZpbmRPbmUoJ2JvZHknKTtcclxuXHJcbiAgICAgICAgdGhpcy5tb2RhbHMgPSBbXTtcclxuICAgICAgICB0aGlzLm9uRXZlbnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuKHRhcmdldCkge1xyXG4gICAgICAgIGlmICghdGhpcy5tb2RhbHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYm9keS5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQk9EWV9PUEVOKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubW9kYWxzLnB1c2godGFyZ2V0KTtcclxuICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX09QRU4pO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGFyZ2V0LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9GQURFKSwgMCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlKHRhcmdldE1vZGFsKSB7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5tb2RhbHMubGVuZ3RoIC0gMTtcclxuXHJcbiAgICAgICAgaWYgKHRhcmdldE1vZGFsKSB7XHJcbiAgICAgICAgICAgIGluZGV4ID0gdGhpcy5tb2RhbHMuaW5kZXhPZih0YXJnZXRNb2RhbCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBpbmRleCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IHRoaXMubW9kYWxzLnNwbGljZShpbmRleCwgMSlbMF07XHJcblxyXG4gICAgICAgIGlmICghdGFyZ2V0KSByZXR1cm47XHJcblxyXG4gICAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfRkFERSwgQ0xBU1NfTkFNRV9PUEVOKTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLm1vZGFscy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9CT0RZX09QRU4pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkNsb3NlKGV2ZW50KSB7XHJcbiAgICAgICAgY29uc3QgY2xvc2UgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLm1vZGFsX19jbG9zZScpO1xyXG5cclxuICAgICAgICBpZiAoY2xvc2UpIHtcclxuICAgICAgICAgICAgaWYgKGNsb3NlLnRhZ05hbWUgPT09ICdBJykgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25FdmVudCgpIHtcclxuICAgICAgICBvbih0aGlzLmJvZHksICdjbGljaycsIHRoaXMub25DbG9zZS5iaW5kKHRoaXMpLCBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNjcm9sbFdpZHRoKCkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmFicyh3aW5kb3cuaW5uZXJXaWR0aCAtIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb2RhbDsiLCJpbXBvcnQge2ZpbmRPbmUsIGZpbmQsIG9ufSBmcm9tICcuL2hlbHBlcic7XHJcblxyXG5jb25zdCBUYWIgPSBjbGFzcyB7XHJcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjYWxsYmFjaykge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5tZW51cyA9IGZpbmQoJy50YWJfX21lbnUnLCB0aGlzLmVsZW1lbnQpO1xyXG4gICAgICAgIHRoaXMucGFuZWxzID0gdGhpcy5tZW51cy5tYXAobWVudSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhbmVsSWQgPSBtZW51LmdldEF0dHJpYnV0ZSgnYXJpYS1jb250cm9scycpO1xyXG4gICAgICAgICAgICBjb25zdCBwYW5lbCA9IGZpbmRPbmUoYCMke3BhbmVsSWR9YCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcGFuZWw7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudCA9IDA7XHJcbiAgICAgICAgdGhpcy5wYW5lbFRpbWVyID0gbnVsbDtcclxuXHJcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xyXG5cclxuICAgICAgICB0aGlzLmluaXRFdmVudHMoKTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVUYWIoKSB7XHJcbiAgICAgICAgdGhpcy5tZW51cy5mb3JFYWNoKChtZW51LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50ID09PSBpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgbWVudS5jbGFzc0xpc3QuYWRkKCd0YWJfX21lbnUtLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgbWVudS5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCB0cnVlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgndGFiX19tZW51LS1hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIG1lbnUuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlUGFuZWwoKSB7XHJcbiAgICAgICAgdGhpcy5wYW5lbHMuZm9yRWFjaCgocGFuZWwsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnQgPT09IGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICBwYW5lbC5jbGFzc0xpc3QuYWRkKCd0YWJfX3BhbmVsLS1pbicpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYW5lbFRpbWVyICYmIGNsZWFyVGltZW91dCh0aGlzLnBhbmVsVGltZXIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYW5lbFRpbWVyID0gc2V0VGltZW91dCgoKSA9PiBwYW5lbC5jbGFzc0xpc3QuYWRkKCd0YWJfX3BhbmVsLS1hY3RpdmUnKSwgMTMpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcGFuZWwuY2xhc3NMaXN0LnJlbW92ZSgndGFiX19wYW5lbC0taW4nLCAndGFiX19wYW5lbC0tYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGUoKSB7XHJcbiAgICAgICAgdGhpcy50b2dnbGVUYWIoKTtcclxuICAgICAgICB0aGlzLnRvZ2dsZVBhbmVsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdEV2ZW50cygpIHtcclxuICAgICAgICB0aGlzLm1lbnVzLmZvckVhY2goKG1lbnUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIG9uKG1lbnUsICdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnQgPSBpbmRleDtcclxuICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWxsYmFjayAmJiB0aGlzLmNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFiOyIsImV4cG9ydCBjb25zdCBmaW5kT25lID0gKHNlbGVjdG9yLCBjb250ZXh0ID0gZG9jdW1lbnQpID0+IGNvbnRleHQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XHJcbmV4cG9ydCBjb25zdCBmaW5kID0gKHNlbGVjdG9yLCBjb250ZXh0ID0gZG9jdW1lbnQpID0+IFsuLi5jb250ZXh0LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpXTtcclxuXHJcbmV4cG9ydCBjb25zdCBvbiA9ICh0YXJnZXQsIHR5cGUsIGNhbGxiYWNrLCBjYXB0dXJlID0gZmFsc2UpID0+IHtcclxuICAgIGlmICghdGFyZ2V0IHx8ICF0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcikgcmV0dXJuO1xyXG5cclxuICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGNhbGxiYWNrLCBjYXB0dXJlKTtcclxufTtcclxuZXhwb3J0IGNvbnN0IG9mZiA9ICh0YXJnZXQsIHR5cGUsIGNhbGxiYWNrKSA9PiB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBjYWxsYmFjayk7XHJcbmV4cG9ydCBjb25zdCBkZWxlZ2F0ZSA9ICh0YXJnZXQsIHNlbGVjdG9yLCB0eXBlLCBoYW5kbGVyLCBjYXB0dXJlKSA9PiB7XHJcbiAgICBjb25zdCBkaXNwYXRjaEV2ZW50ID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0RWxlbWVudCA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICBjb25zdCBwb3RlbnRpYWxFbGVtZW50cyA9IHRhcmdldEVsZW1lbnQuY2xvc2VzdChzZWxlY3Rvcik7XHJcblxyXG4gICAgICAgIGlmIChwb3RlbnRpYWxFbGVtZW50cykge1xyXG4gICAgICAgICAgICBoYW5kbGVyLmNhbGwocG90ZW50aWFsRWxlbWVudHMsIGV2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIG9uKHRhcmdldCwgdHlwZSwgZGlzcGF0Y2hFdmVudCwgISFjYXB0dXJlKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRPZmZzZXQgPSAoZWxlbWVudCkgPT4ge1xyXG4gICAgY29uc3QgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0b3A6IHJlY3QudG9wICsgd2luZG93LnNjcm9sbFksXHJcbiAgICAgICAgbGVmdDogcmVjdC5sZWZ0ICsgd2luZG93LnNjcm9sbFhcclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZGVib3VuY2UgPSAoZnVuYywgd2FpdCA9IDMwMCkgPT4ge1xyXG4gICAgbGV0IGluRGVib3VuY2U7XHJcblxyXG4gICAgcmV0dXJuICguLi5hcmdzKSA9PiB7XHJcbiAgICAgICAgaW5EZWJvdW5jZSAmJiBjbGVhclRpbWVvdXQoaW5EZWJvdW5jZSk7XHJcbiAgICAgICAgaW5EZWJvdW5jZSA9IHNldFRpbWVvdXQoKCkgPT4gZnVuYyguLi5hcmdzKSwgd2FpdCk7XHJcbiAgICB9O1xyXG59OyIsImltcG9ydCBTd2lwZXIsIHtOYXZpZ2F0aW9uLCBQYWdpbmF0aW9uIH0gZnJvbSAnc3dpcGVyJztcclxuU3dpcGVyLnVzZShbTmF2aWdhdGlvbiwgUGFnaW5hdGlvbl0pO1xyXG5pbXBvcnQgQU9TIGZyb20gJ2Fvcyc7XHJcbmltcG9ydCBzYWwgZnJvbSAnc2FsLmpzJ1xyXG5pbXBvcnQgZ3NhcCBmcm9tICdnc2FwJztcclxuaW1wb3J0IFNjcm9sbFRyaWdnZXIgZnJvbSAnZ3NhcC9TY3JvbGxUcmlnZ2VyJztcclxuaW1wb3J0IHtmaW5kT25lLCBmaW5kLCBnZXRPZmZzZXQsIG9ufSBmcm9tICcuLi9oZWxwZXInO1xyXG5pbXBvcnQgVGFiIGZyb20gJy4uL1RhYic7XHJcbmltcG9ydCBNb2RhbCBmcm9tIFwiLi4vTW9kYWxcIjtcclxuaW1wb3J0ICogYXMgZXZlbnRzIGZyb20gXCJldmVudHNcIjtcclxuXHJcbmdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVHJpZ2dlcik7XHJcblxyXG5jb25zdCBhcHAgPSAoKSA9PiB7XHJcbiAgICBBT1MuaW5pdCh7XHJcbiAgICAgICAgb25jZTogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy9oZWFkZXJcclxuICAgICgoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc2l0ZUhlYWRlciAgPSBmaW5kT25lKCdoZWFkZXInKTtcclxuICAgICAgICBjb25zdCBoZWFkZXJIZWlnaHQgPSBzaXRlSGVhZGVyLmNsaWVudEhlaWdodDtcclxuICAgICAgICBjb25zdCBzaXRlTWVudSA9IGZpbmRPbmUoJy5oZWFkZXItbWVudV9fYnV0dG9uJywgc2l0ZUhlYWRlcik7XHJcbiAgICAgICAgY29uc3Qgc2l0ZU1lbnVJdGVtcyA9IGZpbmQoJy5oZWFkZXItbWVudV9fbGluaycsIHNpdGVIZWFkZXIpO1xyXG4gICAgICAgIGNvbnN0IHNlY3Rpb25zID0gc2l0ZU1lbnVJdGVtcy5tYXAobGluayA9PiBmaW5kT25lKGxpbmsuZ2V0QXR0cmlidXRlKCdocmVmJykpKTtcclxuICAgICAgICBjb25zdCBzZWN0aW9uc1N0YXJ0ID0gW107XHJcbiAgICAgICAgY29uc3QgZ2V0U2VjdGlvbnNTdGFydCA9ICgpID0+IHNlY3Rpb25zLmZvckVhY2goKHNlY3Rpb24sIGluZGV4KSA9PiBzZWN0aW9uc1N0YXJ0W2luZGV4XSA9IH5+KGdldE9mZnNldChzZWN0aW9uKS50b3AgLSBoZWFkZXJIZWlnaHQpKzEpO1xyXG5cclxuICAgICAgICBjb25zdCBtb3ZlU2VjdGlvbiA9IChpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsKHtcclxuICAgICAgICAgICAgICAgIHRvcDogc2VjdGlvbnNTdGFydFtpbmRleF0sXHJcbiAgICAgICAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy9oZWFkZXIgZml4ZWRcclxuICAgICAgICBjb25zdCBjaGFuZ2VIZWFkZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHNpdGVIZWFkZXIuY2xhc3NMaXN0W3dpbmRvdy5wYWdlWU9mZnNldCA+PSBzaXRlSGVhZGVyLm9mZnNldEhlaWdodCA/ICdhZGQnIDogJ3JlbW92ZSddKCdmaXhlZCcpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb24od2luZG93LCAnc2Nyb2xsJywgY2hhbmdlSGVhZGVyKTtcclxuXHJcbiAgICAgICAgLy/rqZTribQgb3BlbixjbG9zZVxyXG4gICAgICAgIHNpdGVNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICBpZihzaXRlSGVhZGVyLmNsYXNzTGlzdC5jb250YWlucygnaGVhZGVyLW1lbnUtLW9wZW4nKSkge1xyXG4gICAgICAgICAgICAgICAgc2l0ZUhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXItbWVudS0tb3BlbicpO1xyXG4gICAgICAgICAgICAgICAgc2l0ZUhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdmaXhlZCcpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2l0ZUhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXItbWVudS0tb3BlbicpO1xyXG4gICAgICAgICAgICAgICAgc2l0ZUhlYWRlci5jbGFzc0xpc3QuYWRkKCdmaXhlZCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGdldFNlY3Rpb25zU3RhcnQoKTtcclxuXHJcbiAgICAgICAgc2l0ZU1lbnVJdGVtcy5mb3JFYWNoKChzaXRlTWVudUl0ZW0saW5kZXgpID0+IHtcclxuICAgICAgICAgICAgc2l0ZU1lbnVJdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBzaXRlSGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hlYWRlci1tZW51LS1vcGVuJyk7XHJcbiAgICAgICAgICAgICAgICBtb3ZlU2VjdGlvbihpbmRleCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgb24od2luZG93LCAnbG9hZCcsIGdldFNlY3Rpb25zU3RhcnQpO1xyXG4gICAgICAgIG9uKHdpbmRvdywgJ3Jlc2l6ZScsIGdldFNlY3Rpb25zU3RhcnQpO1xyXG5cclxuICAgIH0pKCk7XHJcblxyXG4gICAgLy8gQnJhbmQgRmlsbVxyXG4gICAgKCgpID0+IHtcclxuICAgICAgICBjb25zdCBicmFuZEZpbG0gPSBmaW5kT25lKCcuYnJhbmQtZmlsbScpO1xyXG4gICAgICAgIGNvbnN0IHRhYiA9IG5ldyBUYWIoZmluZE9uZSgnLnRhYicsIGJyYW5kRmlsbSkpO1xyXG4gICAgICAgIHRhYi5tZW51c1swXS5jbGljaygpO1xyXG5cclxuICAgICAgICBjb25zdCBicmFuZEZpbG1DYXJvdXNlbCA9IG5ldyBTd2lwZXIoJy5icmFuZC1maWxtIC5zd2lwZXInLCB7XHJcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcclxuICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAxMCxcclxuICAgICAgICAgICAgb2JzZXJ2ZXI6IHRydWUsXHJcbiAgICAgICAgICAgIG9ic2VydmVQYXJlbnRzOiB0cnVlLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH0pKCk7XHJcblxyXG4gICAgLy8gV0hZIE5PVCBST0FEXHJcbiAgICAoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJvYWQgPSBmaW5kT25lKCcucm9hZCcpO1xyXG4gICAgICAgIGNvbnN0IGNhcm91c2VsV3JhcCA9IGZpbmRPbmUoJy5yb2FkX19jYXJvdXNlbF8xIC5zd2lwZXInLCByb2FkKTtcclxuICAgICAgICBjb25zdCBjYXJvdXNlbFdyYXAyID0gZmluZE9uZSgnLnJvYWRfX2Nhcm91c2VsXzIgLnN3aXBlcicsIHJvYWQpO1xyXG4gICAgICAgIGNvbnN0IGNhcm91c2VsUGFnaW5hdGlvbiA9IGZpbmRPbmUoJy5zd2lwZXItcGFnaW5hdGlvbicsIHJvYWQpO1xyXG4gICAgICAgIGNvbnN0IGNhcm91c2VsUGFnaW5hdGlvbk1lbnVzID0gZmluZCgncCcsIGNhcm91c2VsV3JhcCkubWFwKG1lbnUgPT4gbWVudS5pbm5lclRleHQpO1xyXG5cclxuICAgICAgICBjb25zdCByb2FkQ2Fyb3VzZWwgPSBuZXcgU3dpcGVyKGNhcm91c2VsV3JhcCwge1xyXG4gICAgICAgICAgICBsb29wOnRydWUsXHJcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcclxuICAgICAgICAgICAgbG9vcEFkZGl0aW9uYWxTbGlkZXM6ICc1JyxcclxuICAgICAgICAgICAgbG9vcGVkU2xpZGVzOiAnNScsXHJcbiAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMTAsXHJcblxyXG4gICAgICAgICAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICBlbDogY2Fyb3VzZWxQYWdpbmF0aW9uLFxyXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgcmVuZGVyQnVsbGV0KGluZGV4LCBjbGFzc05hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCIke2NsYXNzTmFtZX1cIj4ke2Nhcm91c2VsUGFnaW5hdGlvbk1lbnVzW2luZGV4XX08L2Rpdj5gO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3Qgcm9hZENhcm91c2VsMiA9IG5ldyBTd2lwZXIoY2Fyb3VzZWxXcmFwMiwge1xyXG4gICAgICAgICAgICAvLyBsb29wOiB0cnVlLFxyXG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiBcImF1dG9cIixcclxuICAgICAgICAgICAgY2VudGVyZWRTbGlkZXM6IHRydWUsXHJcbiAgICAgICAgICAgIGFsbG93VG91Y2hNb3ZlOiBmYWxzZSxcclxuICAgICAgICAgICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgbmV4dEVsOiBcIi5zd2lwZXItYnV0dG9uLW5leHRcIixcclxuICAgICAgICAgICAgICAgIHByZXZFbDogXCIuc3dpcGVyLWJ1dHRvbi1wcmV2XCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBtb2RhbCA9IG5ldyBNb2RhbCgpO1xyXG4gICAgICAgICAgICBjb25zdCB0cmlnZ2VycyA9IGZpbmQoJy5yb2FkX19saW5rJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGdldElkID0gdHJpZ2dlciA9PiB0cmlnZ2VyLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xyXG4gICAgICAgICAgICBjb25zdCBjb250ZW50cyA9IHRyaWdnZXJzLnJlZHVjZSgoY29udGVudHMsIHRyaWdnZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gZ2V0SWQodHJpZ2dlcik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb250ZW50ID0gZmluZE9uZShpZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29udGVudHNbaWRdID0gY29udGVudDtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY29udGVudHM7XHJcbiAgICAgICAgICAgIH0sIHt9KTtcclxuXHJcbiAgICAgICAgICAgIHRyaWdnZXJzLmZvckVhY2goKHRyaWdnZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIG9uKHRyaWdnZXIsICdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gZ2V0SWQodHJpZ2dlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udGVudCA9IGNvbnRlbnRzW2lkXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbW9kYWwub3Blbihjb250ZW50KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIHRyaWdnZXJzWzNdLmNsaWNrKCk7XHJcbiAgICAgICAgfSkoKTtcclxuXHJcbiAgICB9KSgpO1xyXG5cclxuICAgIC8vIFdIWSBOT1QgQ09OVEVOVFNcclxuICAgICgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY29udGVudHMgPSBmaW5kT25lKCcuY29udGVudHMnKTtcclxuICAgICAgICBjb25zdCBjYXJvdXNlbFdyYXAgPSBmaW5kT25lKCcuc3dpcGVyJywgY29udGVudHMpO1xyXG4gICAgICAgIGNvbnN0IGNhcm91c2VsUGFnaW5hdGlvbiA9IGZpbmRPbmUoJy5zd2lwZXItcGFnaW5hdGlvbicsIGNvbnRlbnRzKTtcclxuICAgICAgICBjb25zdCBjYXJvdXNlbFBhZ2luYXRpb25NZW51cyA9IGZpbmQoJ1tkYXRhLXBhZ2luYXRpb24tbmFtZV0nLCBjb250ZW50cykubWFwKG1lbnUgPT4gbWVudS5kYXRhc2V0LnBhZ2luYXRpb25OYW1lKTtcclxuXHJcbiAgICAgICAgY29uc3QgY29udGVudENhcm91c2VsID0gbmV3IFN3aXBlcihjYXJvdXNlbFdyYXAsIHtcclxuICAgICAgICAgICAgbG9vcDp0cnVlLFxyXG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXHJcbiAgICAgICAgICAgIGxvb3BBZGRpdGlvbmFsU2xpZGVzOiAnNScsXHJcbiAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMTAsXHJcblxyXG4gICAgICAgICAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICBlbDogY2Fyb3VzZWxQYWdpbmF0aW9uLFxyXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgcmVuZGVyQnVsbGV0KGluZGV4LCBjbGFzc05hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCIke2NsYXNzTmFtZX1cIj4ke2Nhcm91c2VsUGFnaW5hdGlvbk1lbnVzW2luZGV4XX08L2Rpdj5gO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgfSkoKTtcclxuXHJcbiAgICAvLyBCT09TVCBVU1xyXG4gICAgKCgpID0+IHtcclxuICAgICAgICBjb25zdCBib29zdFVzID0gZmluZE9uZSgnLmJvb3N0LXVzJyk7XHJcbiAgICAgICAgY29uc3QgdGFiID0gbmV3IFRhYihmaW5kT25lKCcudGFiJywgYm9vc3RVcykpO1xyXG4gICAgICAgIGNvbnN0IG1vZGFsID0gbmV3IE1vZGFsKCk7XHJcbiAgICAgICAgY29uc3QgdHJpZ2dlcnMgPSBmaW5kKCdhJywgYm9vc3RVcyk7XHJcbiAgICAgICAgY29uc3QgZ2V0SWQgPSB0cmlnZ2VyID0+IHRyaWdnZXIuZ2V0QXR0cmlidXRlKCdocmVmJyk7XHJcbiAgICAgICAgY29uc3QgY29udGVudHMgPSB0cmlnZ2Vycy5yZWR1Y2UoKGNvbnRlbnRzLCB0cmlnZ2VyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlkID0gZ2V0SWQodHJpZ2dlcik7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBmaW5kT25lKGlkKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnRlbnRzW2lkXSA9IGNvbnRlbnQ7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gY29udGVudHM7XHJcbiAgICAgICAgfSwge30pO1xyXG5cclxuXHJcbiAgICAgICAgdHJpZ2dlcnMuZm9yRWFjaCgodHJpZ2dlcikgPT4ge1xyXG4gICAgICAgICAgICBvbih0cmlnZ2VyLCAnY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgaWQgPSBnZXRJZCh0cmlnZ2VyKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBjb250ZW50c1tpZF07XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gZm9ybS5yZXNldCgpO1xyXG4gICAgICAgICAgICAgICAgbW9kYWwub3Blbihjb250ZW50KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRhYi5tZW51c1swXS5jbGljaygpO1xyXG5cclxuICAgICAgICBjb25zdCBib29zdFVzTW9kYWwgPSBmaW5kT25lKCdzZWN0aW9uI2Jvb3N0LXVzLXYyJyk7XHJcbiAgICAgICAgY29uc3QgZm9ybSA9IGZpbmRPbmUoJy5yZWdpc3Rlci1mb3JtJywgYm9vc3RVc01vZGFsKTtcclxuICAgICAgICBjb25zdCBmb3JtQ2VydE5vID0gZmluZE9uZSgnW25hbWU9XCJjZXJ0X25vXCJdJywgZm9ybSk7XHJcbiAgICAgICAgY29uc3QgZm9ybUhwaG9uZSA9IGZpbmRPbmUoJ1tuYW1lPVwiaHBob25lXCJdJywgZm9ybSk7XHJcbiAgICAgICAgY29uc3QgZm9ybUNoYW5uZWwgPSBmaW5kKCdbbmFtZT1cImNoYW5uZWxcIl0nLCBmb3JtKTtcclxuICAgICAgICBjb25zdCBmb3JtVXJsID0gZmluZE9uZSgnW25hbWU9XCJ1cmxcIl0nLCBmb3JtKTtcclxuICAgICAgICBjb25zdCB1cmxSZWdleCA9IC8oaHR0cHxodHRwcyk6XFwvXFwvKFxcdys6ezAsMX1cXHcqQCk/KFxcUyspKDpbMC05XSspPyhcXC98XFwvKFtcXHcjITouPys9JiVAIVxcLVxcL10pKT8vO1xyXG4gICAgICAgIGNvbnN0IGZvcm1Db25jZXB0ID0gZmluZE9uZSgnW25hbWU9XCJjb25jZXB0XCJdJywgZm9ybSk7XHJcbiAgICAgICAgY29uc3QgZm9ybVJlYXNvbiA9IGZpbmRPbmUoJ1tuYW1lPVwicmVhc29uXCJdJywgZm9ybSk7XHJcbiAgICAgICAgY29uc3QgZm9ybUFncmVlMSA9IGZpbmRPbmUoJ1tuYW1lPVwiYWdyZWUxXCJdJywgZm9ybSk7XHJcbiAgICAgICAgY29uc3QgZm9ybUFncmVlMiA9IGZpbmRPbmUoJ1tuYW1lPVwiYWdyZWUyXCJdJywgZm9ybSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGlzVmFsaWQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKGZvcm1DZXJ0Tm8udmFsdWUgPT0gXCJcIiB8fCBmb3JtSHBob25lLnZhbHVlID09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KCfrs7jsnbjsnbjspp3snYQg7KeE7ZaJ7ZW0IOyjvOyEuOyalC4nKTtcclxuICAgICAgICAgICAgICAgIGZvcm1IcGhvbmUuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGlmIChmb3JtQ2hhbm5lbC5ldmVyeShpbnB1dCA9PiAhaW5wdXQuY2hlY2tlZCkpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KCftmZzrj5nssYTrhJDsnYQg7LK07YGs7ZW0IOyjvOyEuOyalC4nKTtcclxuICAgICAgICAgICAgICAgIGZvcm1DaGFubmVsWzBdLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghZm9ybVVybC52YWx1ZS50cmltKCkpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KCdVUkzsnYQg7J6F66Cl7ZW0IOyjvOyEuOyalC4nKTtcclxuICAgICAgICAgICAgICAgIGZvcm1VcmwuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoIXVybFJlZ2V4LnRlc3QoZm9ybVVybC52YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KCdVUkzsnYQg7KCV7ZmV7Z6IIOyeheugpe2VtCDso7zshLjsmpQuJyk7XHJcbiAgICAgICAgICAgICAgICBmb3JtVXJsLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBpZiAoIWZvcm1Db25jZXB0LnZhbHVlLnRyaW0oKSkge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoJ+yxhOuEkOy7qOyFieydhCDsnoXroKXtlbQg7KO87IS47JqULicpO1xyXG4gICAgICAgICAgICAgICAgZm9ybUNvbmNlcHQuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoIWZvcm1SZWFzb24udmFsdWUudHJpbSgpKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydCgn7KeA7JuQ64+Z6riw66W8IOyeheugpe2VtCDso7zshLjsmpQuJyk7XHJcbiAgICAgICAgICAgICAgICBmb3JtUmVhc29uLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBpZiAoIWZvcm1BZ3JlZTEuY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoJ+qwnOyduOygleuztCDsiJjsp5Eg67CPIO2ZnOyaqSDrj5nsnZjrpbwg7LK07YGs7ZW0IOyjvOyEuOyalC4nKTtcclxuICAgICAgICAgICAgICAgIGZvcm1BZ3JlZTEuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFmb3JtQWdyZWUyLmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KCfsp4Dsm5Av7LC47Jes7J6QIOycoOydmOyCrO2VreydhCDssrTtgaztlbQg7KO87IS47JqULicpO1xyXG4gICAgICAgICAgICAgICAgZm9ybUFncmVlMS5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoaXNWYWxpZCgpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKTtcclxuXHJcbiAgICAgICAgICAgICAgICBmZXRjaChmb3JtLmFjdGlvbiwge1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogZm9ybS5tZXRob2QsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9keTogZm9ybURhdGFcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5yZXN1bHQgPT0gZmFsc2Upe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydChkYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5ocmVmPScvbS8jYm9vc3QtdXMnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfSkoKTtcclxuXHJcbiAgICAvL2Zvb3RlciDqsJzsnbjsoJXrs7Qg7LKY66asIOuwqey5qFxyXG4gICAgKCgpID0+IHtcclxuICAgICAgICBjb25zdCBmb290ZXIgPSBmaW5kT25lKCdmb290ZXInKTtcclxuICAgICAgICBjb25zdCBwcml2YWN5ID0gZmluZE9uZSgnLmZvb3Rlcl9fcHJpdmFjeScsIGZvb3Rlcik7XHJcbiAgICAgICAgY29uc3QgcHJpdmFjeU1vZGFsID0gZmluZE9uZSgnLm1vZGFsLWZvb3Rlci1wcml2YWN5Jyk7XHJcbiAgICAgICAgY29uc3QgbW9kYWwgPSBuZXcgTW9kYWwoKTtcclxuXHJcblxyXG4gICAgICAgIHByaXZhY3kuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIG1vZGFsLm9wZW4ocHJpdmFjeU1vZGFsKTtcclxuICAgICAgICB9KVxyXG4gICAgfSkoKTtcclxuXHJcbn07XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgYXBwKTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHRsb2FkZWQ6IGZhbHNlLFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcblx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSBmdW5jdGlvbihyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpIHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGNodW5rSWRzID0gZGVmZXJyZWRbaV1bMF07XG5cdFx0dmFyIGZuID0gZGVmZXJyZWRbaV1bMV07XG5cdFx0dmFyIHByaW9yaXR5ID0gZGVmZXJyZWRbaV1bMl07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pOyB9KSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGU7IH07XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ubWQgPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0bW9kdWxlLnBhdGhzID0gW107XG5cdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0cmV0dXJuIG1vZHVsZTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiYXBwXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gZnVuY3Rpb24oY2h1bmtJZCkgeyByZXR1cm4gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwOyB9O1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IGZ1bmN0aW9uKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSB7XG5cdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG5cdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG5cdHZhciBydW50aW1lID0gZGF0YVsyXTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKGZ1bmN0aW9uKGlkKSB7IHJldHVybiBpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwOyB9KSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtcIl0gPSBzZWxmW1wid2VicGFja0NodW5rXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxuX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9yc1wiXSwgZnVuY3Rpb24oKSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9qcy9tb2JpbGUvYXBwLmpzXCIpOyB9KVxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzXCJdLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oXCIuL3Njc3MvbW9iaWxlL2FwcC5zY3NzXCIpOyB9KVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6WyJmaW5kT25lIiwib24iLCJDTEFTU19OQU1FX0JPRFlfT1BFTiIsIkNMQVNTX05BTUVfT1BFTiIsIkNMQVNTX05BTUVfRkFERSIsIk1vZGFsIiwiYm9keSIsIm1vZGFscyIsIm9uRXZlbnQiLCJ0YXJnZXQiLCJsZW5ndGgiLCJjbGFzc0xpc3QiLCJhZGQiLCJwdXNoIiwic2V0VGltZW91dCIsInRhcmdldE1vZGFsIiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwicmVtb3ZlIiwiZXZlbnQiLCJjbG9zZSIsImNsb3Nlc3QiLCJ0YWdOYW1lIiwicHJldmVudERlZmF1bHQiLCJvbkNsb3NlIiwiYmluZCIsIk1hdGgiLCJhYnMiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRXaWR0aCIsImZpbmQiLCJUYWIiLCJlbGVtZW50IiwiY2FsbGJhY2siLCJtZW51cyIsInBhbmVscyIsIm1hcCIsIm1lbnUiLCJwYW5lbElkIiwiZ2V0QXR0cmlidXRlIiwicGFuZWwiLCJjdXJyZW50IiwicGFuZWxUaW1lciIsImluaXRFdmVudHMiLCJmb3JFYWNoIiwic2V0QXR0cmlidXRlIiwiY2xlYXJUaW1lb3V0IiwidG9nZ2xlVGFiIiwidG9nZ2xlUGFuZWwiLCJ0b2dnbGUiLCJzZWxlY3RvciIsImNvbnRleHQiLCJxdWVyeVNlbGVjdG9yIiwicXVlcnlTZWxlY3RvckFsbCIsInR5cGUiLCJjYXB0dXJlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9mZiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkZWxlZ2F0ZSIsImhhbmRsZXIiLCJkaXNwYXRjaEV2ZW50IiwidGFyZ2V0RWxlbWVudCIsInBvdGVudGlhbEVsZW1lbnRzIiwiY2FsbCIsImdldE9mZnNldCIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJzY3JvbGxZIiwibGVmdCIsInNjcm9sbFgiLCJkZWJvdW5jZSIsImZ1bmMiLCJ3YWl0IiwiaW5EZWJvdW5jZSIsImFyZ3MiLCJTd2lwZXIiLCJOYXZpZ2F0aW9uIiwiUGFnaW5hdGlvbiIsInVzZSIsIkFPUyIsInNhbCIsImdzYXAiLCJTY3JvbGxUcmlnZ2VyIiwiZXZlbnRzIiwicmVnaXN0ZXJQbHVnaW4iLCJhcHAiLCJpbml0Iiwib25jZSIsInNpdGVIZWFkZXIiLCJoZWFkZXJIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJzaXRlTWVudSIsInNpdGVNZW51SXRlbXMiLCJzZWN0aW9ucyIsImxpbmsiLCJzZWN0aW9uc1N0YXJ0IiwiZ2V0U2VjdGlvbnNTdGFydCIsInNlY3Rpb24iLCJtb3ZlU2VjdGlvbiIsInNjcm9sbCIsImJlaGF2aW9yIiwiY2hhbmdlSGVhZGVyIiwicGFnZVlPZmZzZXQiLCJvZmZzZXRIZWlnaHQiLCJjb250YWlucyIsInNpdGVNZW51SXRlbSIsImJyYW5kRmlsbSIsInRhYiIsImNsaWNrIiwiYnJhbmRGaWxtQ2Fyb3VzZWwiLCJzbGlkZXNQZXJWaWV3Iiwic3BhY2VCZXR3ZWVuIiwib2JzZXJ2ZXIiLCJvYnNlcnZlUGFyZW50cyIsInJvYWQiLCJjYXJvdXNlbFdyYXAiLCJjYXJvdXNlbFdyYXAyIiwiY2Fyb3VzZWxQYWdpbmF0aW9uIiwiY2Fyb3VzZWxQYWdpbmF0aW9uTWVudXMiLCJpbm5lclRleHQiLCJyb2FkQ2Fyb3VzZWwiLCJsb29wIiwibG9vcEFkZGl0aW9uYWxTbGlkZXMiLCJsb29wZWRTbGlkZXMiLCJwYWdpbmF0aW9uIiwiZWwiLCJjbGlja2FibGUiLCJyZW5kZXJCdWxsZXQiLCJjbGFzc05hbWUiLCJyb2FkQ2Fyb3VzZWwyIiwiY2VudGVyZWRTbGlkZXMiLCJhbGxvd1RvdWNoTW92ZSIsIm5hdmlnYXRpb24iLCJuZXh0RWwiLCJwcmV2RWwiLCJtb2RhbCIsInRyaWdnZXJzIiwiZ2V0SWQiLCJ0cmlnZ2VyIiwiY29udGVudHMiLCJyZWR1Y2UiLCJpZCIsImNvbnRlbnQiLCJvcGVuIiwiZGF0YXNldCIsInBhZ2luYXRpb25OYW1lIiwiY29udGVudENhcm91c2VsIiwiYm9vc3RVcyIsImJvb3N0VXNNb2RhbCIsImZvcm0iLCJmb3JtQ2VydE5vIiwiZm9ybUhwaG9uZSIsImZvcm1DaGFubmVsIiwiZm9ybVVybCIsInVybFJlZ2V4IiwiZm9ybUNvbmNlcHQiLCJmb3JtUmVhc29uIiwiZm9ybUFncmVlMSIsImZvcm1BZ3JlZTIiLCJpc1ZhbGlkIiwidmFsdWUiLCJhbGVydCIsImZvY3VzIiwiZXZlcnkiLCJpbnB1dCIsImNoZWNrZWQiLCJ0cmltIiwidGVzdCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJmZXRjaCIsImFjdGlvbiIsIm1ldGhvZCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwicmVzdWx0IiwibWVzc2FnZSIsImxvY2F0aW9uIiwiaHJlZiIsInJlbG9hZCIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwiZm9vdGVyIiwicHJpdmFjeSIsInByaXZhY3lNb2RhbCJdLCJzb3VyY2VSb290IjoiIn0=