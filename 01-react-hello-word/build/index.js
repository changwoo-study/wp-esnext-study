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
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);


/*
ES Next #1: Hello, World!

리액트를 이용한 헬로 월드 스크립트 출력 예제입니다.
이제는 ES Next 문법을 이용해 스크립트를 작성합니다.
이렇게 소스 코드를 작성해도 실제 사용되는 스크립트는 이 파일이 아닌, build/index.js 파일입니다.

우리가 package.json 설정에서 @wordpress/scripts 패키지를 설치했고, 이 패키지는 'wp-scripts'라는 명령을
제공합니다. 아마 wp-scripts 명령이 올바르게 동작하면 그 결과로 build/index.js 파일을 생성하고,
워드프레스는 이 파일을 사용합니다.

사실 src/index.js 와 build/index.js는 의미적으로 동일합니다. 그러나 아직 웹브라우저가 ES Next, 즉 최신의 자바스크립트
문법을 모두 지원하는 것은 아니므로 어떤 브라우저에서는 src/index.js 의 내용을 제대로 이해하지 못할 수 있습니다.
호환성면에서 이렇게 되면 문제가 발생하므로 wp-scripts 에서는 이런 지원되지 않는 문법도 지원될 수 있도록
자바스크립트 파일을 한 번 더 번역하는 작업을 거칩니다. 이것을 트랜스파일이라 하며, 내부적으로는 babel이라는 패키지가
이런 번역을 담당합니다. 기계적으로 생성된 build/index.js 는 그러므로 원본의 파일보다 좀 더 복잡해 보입니다만,
아무튼 원본과 의미적으로는 동등합니다.

워드프레스 기본 옵션에 의하면 소스 코드 생성시 주석을 없애지 않습니다. 그러므로 만들어진 소스 코드를 열어 보면
지금 작성된 주석이 그대로 존재하는 것을 알 수 있습니다.

여기서 'wp-script start'를 실행한 이유도 추측 가능해집니다.
아직 개발자가 개발 중인 소스 코드는 계속 변경됩니다. 작성된 소스와 웹브라우저에서 실제 사용하는 파일이 각자 다르기 때문에
개발자가 계속 변경하는 코드는 실시간으로 모니터하면서 계속 빌드를 반복해 원본과 동등하도록 해야 합니다.
이것을 자동으로 해 주는 것이 바로 'wp-script start' 명령입니다.

조금씩 내용을 변경하면서 저장을 하면 모니터중인 wp-script 명령이 build/index.js, build/index.asset.php 파일을
갱신하는 것을 알 수 있습니다.
*/

/*
가장 먼저 React 라이브러리를 불러 오는 일입니다.
여기서 다른 웹 프로젝트와 좀 다른 점이 있스빈다.
블록 에디터가 이미 워드프레스 코어에 포함되어 있다면, 반드시 리액트 또한 워드프레스 코어 소스에 포함되어 있어야 한다는 뜻입니다.

사실 wp-includes/js/vendor 디렉토리에 react(.min).js, react-dom(.min).js 가 포함되어 있으며,
build/index.asset.php 의 'dependencies' 항목에는 'react', 'react-dom'이 포함되어 있을 것입니다.
이것은 원본 소스의 코드를 wp-script 가 분석해서 React를 참조하는 부분을 인식해서 특별히 처리하기 때문입니다.

혹시 에디터 등에서 코드 분석을 위해 리액트를 필요로 한다면 react를 개발 의존성으로 참조해도 됩니다.

wp-script가 적절히 판단해 index.js 빌드시 node_modules에 있는 react 대신 코어의 react를 사용하도록 처리하기 때문입니다.
*/



function WesHelloWorld() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h1", null, "ES Next #!"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, "Hello, World!"));
}

react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(WesHelloWorld, null), document.getElementById('wes-hello-world'));

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "react":
/*!*********************************!*\
  !*** external {"this":"React"} ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["React"]; }());

/***/ }),

/***/ "react-dom":
/*!************************************!*\
  !*** external {"this":"ReactDOM"} ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["ReactDOM"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map