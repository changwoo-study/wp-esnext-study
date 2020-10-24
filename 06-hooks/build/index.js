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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__);
/*
 * JS에서도 훅이 구현되어 있습니다. 알아봅시다.
 */


(function () {
  var entryContent = document.querySelector('.entry-content');

  function actionCallback01(x, y, z) {
    entryContent.innerHTML += "<p>actionCallback01 called! ".concat(x, ", ").concat(y, ", ").concat(z, "</p>");
  }

  function actionCallback02(x, y) {
    entryContent.innerHTML += "<p>actionCallback02 called! ".concat(x, ", ").concat(y, "</p>");
  }

  function actionCallback03(x) {
    entryContent.innerHTML += "<p>actionCallback03 called! ".concat(x, "</p>");

    if (Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__["doingAction"])('wes06-test-action')) {
      entryContent.innerHTML += '<p>Doing wes06-test-action.</p>';
    }
  }

  function filterCallback01(r, x, y, z) {
    ++r;
    entryContent.innerHTML += "<p>filterCallback01 called! ".concat(r, ", ").concat(x, ", ").concat(y, ", ").concat(z, "</p>");
    return r;
  }

  function filterCallback02(r, x, y) {
    ++r;
    entryContent.innerHTML += "<p>filterCallback02 called! ".concat(r, ", ").concat(x, ", ").concat(y, "</p>");
    return r;
  }

  function filterCallback03(r, x) {
    ++r;
    entryContent.innerHTML += "<p>filterCallback03 called! ".concat(r, ", ").concat(x, "</p>");

    if (Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__["doingFilter"])('wes06-test-filter')) {
      entryContent.innerHTML += '<p>Doing wes06-test-filter.</p>';
    }

    return r + 10;
  }
  /*
  add_action() 의 JavaScript 버전. 파라미터는 약간 다르다.
  - hookName:  훅 이름. 이건 PHP 버전과 동일하다.
  - namespace: 네임스페이스. vendor/plugin/function 식으로 짓는다.
  - callback:  콜백 함수.
  - priority:  우선순위. 지정하지 않으면 10.
  */


  Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__["addAction"])('wes06-test-action', 'changwoo/wes06-hooks/index', actionCallback01, 30);
  Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__["addAction"])('wes06-test-action', 'changwoo/wes06-hooks/index', actionCallback02, 20);
  Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__["addAction"])('wes06-test-action', 'changwoo/wes06-hooks/index', actionCallback03, 10);
  Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__["doAction"])('wes06-test-action', 'x', 'y', 'z');
  Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__["addFilter"])('wes06-test-filter', 'changwoo/wes06-hooks/index', filterCallback01);
  Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__["addFilter"])('wes06-test-filter', 'changwoo/wes06-hooks/index', filterCallback02);
  Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__["addFilter"])('wes06-test-filter', 'changwoo/wes06-hooks/index', filterCallback03);
  var r = Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__["applyFilters"])('wes06-test-filter', 0, 'x', 'y', 'z');
  entryContent.innerHTML += "<p>Result of wes06-test-filer is ".concat(r, "</p>");
})();

/***/ }),

/***/ "@wordpress/hooks":
/*!****************************************!*\
  !*** external {"this":["wp","hooks"]} ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["hooks"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map