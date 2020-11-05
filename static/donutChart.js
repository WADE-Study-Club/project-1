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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/donutChart.js":
/*!*********************************!*\
  !*** ./assets/js/donutChart.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_0__);

var ctx = document.getElementById('donutChart');
var donutChart = new chart_js__WEBPACK_IMPORTED_MODULE_0___default.a(ctx, {
  type: 'doughnut',
  data: {
    datasets: [{
      data: [5, 2, 3, 1, 4],
      backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)'],
      borderColor: ['rgba(255,99,132,1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)']
    }],
    labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue']
  },
  options: {
    responsive: true,
    legend: {
      position: 'top'
    },
    title: {
      display: true,
      text: 'Weekly statistics'
    },
    animation: {
      animateScale: true,
      animateRotate: true
    }
  }
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/lib/index.js":
/*!***************************************************!*\
  !*** ./node_modules/@babel/polyfill/lib/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./noConflict */ "./node_modules/@babel/polyfill/lib/noConflict.js");

var _global = _interopRequireDefault(__webpack_require__(/*! core-js/library/fn/global */ "./node_modules/@babel/polyfill/node_modules/core-js/library/fn/global.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

if (_global["default"]._babelPolyfill && typeof console !== "undefined" && console.warn) {
  console.warn("@babel/polyfill is loaded more than once on this page. This is probably not desirable/intended " + "and may have consequences if different versions of the polyfills are applied sequentially. " + "If you do need to load the polyfill more than once, use @babel/polyfill/noConflict " + "instead to bypass the warning.");
}

_global["default"]._babelPolyfill = true;

/***/ }),

/***/ "./node_modules/@babel/polyfill/lib/noConflict.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/polyfill/lib/noConflict.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/es6 */ "./node_modules/@babel/polyfill/node_modules/core-js/es6/index.js");

__webpack_require__(/*! core-js/fn/array/includes */ "./node_modules/@babel/polyfill/node_modules/core-js/fn/array/includes.js");

__webpack_require__(/*! core-js/fn/array/flat-map */ "./node_modules/@babel/polyfill/node_modules/core-js/fn/array/flat-map.js");

__webpack_require__(/*! core-js/fn/string/pad-start */ "./node_modules/@babel/polyfill/node_modules/core-js/fn/string/pad-start.js");

__webpack_require__(/*! core-js/fn/string/pad-end */ "./node_modules/@babel/polyfill/node_modules/core-js/fn/string/pad-end.js");

__webpack_require__(/*! core-js/fn/string/trim-start */ "./node_modules/@babel/polyfill/node_modules/core-js/fn/string/trim-start.js");

__webpack_require__(/*! core-js/fn/string/trim-end */ "./node_modules/@babel/polyfill/node_modules/core-js/fn/string/trim-end.js");

__webpack_require__(/*! core-js/fn/symbol/async-iterator */ "./node_modules/@babel/polyfill/node_modules/core-js/fn/symbol/async-iterator.js");

__webpack_require__(/*! core-js/fn/object/get-own-property-descriptors */ "./node_modules/@babel/polyfill/node_modules/core-js/fn/object/get-own-property-descriptors.js");

__webpack_require__(/*! core-js/fn/object/values */ "./node_modules/@babel/polyfill/node_modules/core-js/fn/object/values.js");

__webpack_require__(/*! core-js/fn/object/entries */ "./node_modules/@babel/polyfill/node_modules/core-js/fn/object/entries.js");

__webpack_require__(/*! core-js/fn/promise/finally */ "./node_modules/@babel/polyfill/node_modules/core-js/fn/promise/finally.js");

__webpack_require__(/*! core-js/web */ "./node_modules/@babel/polyfill/node_modules/core-js/web/index.js");

__webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/es6/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/es6/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es6.symbol */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.symbol.js");

__webpack_require__(/*! ../modules/es6.object.create */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.object.create.js");

__webpack_require__(/*! ../modules/es6.object.define-property */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.object.define-property.js");

__webpack_require__(/*! ../modules/es6.object.define-properties */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.object.define-properties.js");

__webpack_require__(/*! ../modules/es6.object.get-own-property-descriptor */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.object.get-own-property-descriptor.js");

__webpack_require__(/*! ../modules/es6.object.get-prototype-of */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.object.get-prototype-of.js");

__webpack_require__(/*! ../modules/es6.object.keys */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.object.keys.js");

__webpack_require__(/*! ../modules/es6.object.get-own-property-names */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.object.get-own-property-names.js");

__webpack_require__(/*! ../modules/es6.object.freeze */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.object.freeze.js");

__webpack_require__(/*! ../modules/es6.object.seal */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.object.seal.js");

__webpack_require__(/*! ../modules/es6.object.prevent-extensions */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.object.prevent-extensions.js");

__webpack_require__(/*! ../modules/es6.object.is-frozen */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.object.is-frozen.js");

__webpack_require__(/*! ../modules/es6.object.is-sealed */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.object.is-sealed.js");

__webpack_require__(/*! ../modules/es6.object.is-extensible */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.object.is-extensible.js");

__webpack_require__(/*! ../modules/es6.object.assign */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.object.assign.js");

__webpack_require__(/*! ../modules/es6.object.is */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.object.is.js");

__webpack_require__(/*! ../modules/es6.object.set-prototype-of */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.object.set-prototype-of.js");

__webpack_require__(/*! ../modules/es6.object.to-string */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.object.to-string.js");

__webpack_require__(/*! ../modules/es6.function.bind */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.function.bind.js");

__webpack_require__(/*! ../modules/es6.function.name */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.function.name.js");

__webpack_require__(/*! ../modules/es6.function.has-instance */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.function.has-instance.js");

__webpack_require__(/*! ../modules/es6.parse-int */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.parse-int.js");

__webpack_require__(/*! ../modules/es6.parse-float */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.parse-float.js");

__webpack_require__(/*! ../modules/es6.number.constructor */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.number.constructor.js");

__webpack_require__(/*! ../modules/es6.number.to-fixed */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.number.to-fixed.js");

__webpack_require__(/*! ../modules/es6.number.to-precision */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.number.to-precision.js");

__webpack_require__(/*! ../modules/es6.number.epsilon */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.number.epsilon.js");

__webpack_require__(/*! ../modules/es6.number.is-finite */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.number.is-finite.js");

__webpack_require__(/*! ../modules/es6.number.is-integer */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.number.is-integer.js");

__webpack_require__(/*! ../modules/es6.number.is-nan */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.number.is-nan.js");

__webpack_require__(/*! ../modules/es6.number.is-safe-integer */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.number.is-safe-integer.js");

__webpack_require__(/*! ../modules/es6.number.max-safe-integer */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.number.max-safe-integer.js");

__webpack_require__(/*! ../modules/es6.number.min-safe-integer */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.number.min-safe-integer.js");

__webpack_require__(/*! ../modules/es6.number.parse-float */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.number.parse-float.js");

__webpack_require__(/*! ../modules/es6.number.parse-int */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.number.parse-int.js");

__webpack_require__(/*! ../modules/es6.math.acosh */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.math.acosh.js");

__webpack_require__(/*! ../modules/es6.math.asinh */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.math.asinh.js");

__webpack_require__(/*! ../modules/es6.math.atanh */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.math.atanh.js");

__webpack_require__(/*! ../modules/es6.math.cbrt */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.math.cbrt.js");

__webpack_require__(/*! ../modules/es6.math.clz32 */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.math.clz32.js");

__webpack_require__(/*! ../modules/es6.math.cosh */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.math.cosh.js");

__webpack_require__(/*! ../modules/es6.math.expm1 */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.math.expm1.js");

__webpack_require__(/*! ../modules/es6.math.fround */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.math.fround.js");

__webpack_require__(/*! ../modules/es6.math.hypot */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.math.hypot.js");

__webpack_require__(/*! ../modules/es6.math.imul */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.math.imul.js");

__webpack_require__(/*! ../modules/es6.math.log10 */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.math.log10.js");

__webpack_require__(/*! ../modules/es6.math.log1p */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.math.log1p.js");

__webpack_require__(/*! ../modules/es6.math.log2 */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.math.log2.js");

__webpack_require__(/*! ../modules/es6.math.sign */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.math.sign.js");

__webpack_require__(/*! ../modules/es6.math.sinh */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.math.sinh.js");

__webpack_require__(/*! ../modules/es6.math.tanh */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.math.tanh.js");

__webpack_require__(/*! ../modules/es6.math.trunc */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.math.trunc.js");

__webpack_require__(/*! ../modules/es6.string.from-code-point */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.string.from-code-point.js");

__webpack_require__(/*! ../modules/es6.string.raw */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.string.raw.js");

__webpack_require__(/*! ../modules/es6.string.trim */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.string.trim.js");

__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.string.iterator.js");

__webpack_require__(/*! ../modules/es6.string.code-point-at */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.string.code-point-at.js");

__webpack_require__(/*! ../modules/es6.string.ends-with */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.string.ends-with.js");

__webpack_require__(/*! ../modules/es6.string.includes */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.string.includes.js");

__webpack_require__(/*! ../modules/es6.string.repeat */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.string.repeat.js");

__webpack_require__(/*! ../modules/es6.string.starts-with */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.string.starts-with.js");

__webpack_require__(/*! ../modules/es6.string.anchor */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.string.anchor.js");

__webpack_require__(/*! ../modules/es6.string.big */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.string.big.js");

__webpack_require__(/*! ../modules/es6.string.blink */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.string.blink.js");

__webpack_require__(/*! ../modules/es6.string.bold */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.string.bold.js");

__webpack_require__(/*! ../modules/es6.string.fixed */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.string.fixed.js");

__webpack_require__(/*! ../modules/es6.string.fontcolor */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.string.fontcolor.js");

__webpack_require__(/*! ../modules/es6.string.fontsize */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.string.fontsize.js");

__webpack_require__(/*! ../modules/es6.string.italics */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.string.italics.js");

__webpack_require__(/*! ../modules/es6.string.link */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.string.link.js");

__webpack_require__(/*! ../modules/es6.string.small */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.string.small.js");

__webpack_require__(/*! ../modules/es6.string.strike */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.string.strike.js");

__webpack_require__(/*! ../modules/es6.string.sub */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.string.sub.js");

__webpack_require__(/*! ../modules/es6.string.sup */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.string.sup.js");

__webpack_require__(/*! ../modules/es6.date.now */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.date.now.js");

__webpack_require__(/*! ../modules/es6.date.to-json */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.date.to-json.js");

__webpack_require__(/*! ../modules/es6.date.to-iso-string */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.date.to-iso-string.js");

__webpack_require__(/*! ../modules/es6.date.to-string */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.date.to-string.js");

__webpack_require__(/*! ../modules/es6.date.to-primitive */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.date.to-primitive.js");

__webpack_require__(/*! ../modules/es6.array.is-array */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.array.is-array.js");

__webpack_require__(/*! ../modules/es6.array.from */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.array.from.js");

__webpack_require__(/*! ../modules/es6.array.of */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.array.of.js");

__webpack_require__(/*! ../modules/es6.array.join */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.array.join.js");

__webpack_require__(/*! ../modules/es6.array.slice */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.array.slice.js");

__webpack_require__(/*! ../modules/es6.array.sort */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.array.sort.js");

__webpack_require__(/*! ../modules/es6.array.for-each */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.array.for-each.js");

__webpack_require__(/*! ../modules/es6.array.map */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.array.map.js");

__webpack_require__(/*! ../modules/es6.array.filter */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.array.filter.js");

__webpack_require__(/*! ../modules/es6.array.some */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.array.some.js");

__webpack_require__(/*! ../modules/es6.array.every */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.array.every.js");

__webpack_require__(/*! ../modules/es6.array.reduce */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.array.reduce.js");

__webpack_require__(/*! ../modules/es6.array.reduce-right */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.array.reduce-right.js");

__webpack_require__(/*! ../modules/es6.array.index-of */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.array.index-of.js");

__webpack_require__(/*! ../modules/es6.array.last-index-of */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.array.last-index-of.js");

__webpack_require__(/*! ../modules/es6.array.copy-within */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.array.copy-within.js");

__webpack_require__(/*! ../modules/es6.array.fill */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.array.fill.js");

__webpack_require__(/*! ../modules/es6.array.find */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.array.find.js");

__webpack_require__(/*! ../modules/es6.array.find-index */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.array.find-index.js");

__webpack_require__(/*! ../modules/es6.array.species */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.array.species.js");

__webpack_require__(/*! ../modules/es6.array.iterator */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.array.iterator.js");

__webpack_require__(/*! ../modules/es6.regexp.constructor */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.regexp.constructor.js");

__webpack_require__(/*! ../modules/es6.regexp.exec */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.regexp.exec.js");

__webpack_require__(/*! ../modules/es6.regexp.to-string */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.regexp.to-string.js");

__webpack_require__(/*! ../modules/es6.regexp.flags */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.regexp.flags.js");

__webpack_require__(/*! ../modules/es6.regexp.match */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.regexp.match.js");

__webpack_require__(/*! ../modules/es6.regexp.replace */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.regexp.replace.js");

__webpack_require__(/*! ../modules/es6.regexp.search */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.regexp.search.js");

__webpack_require__(/*! ../modules/es6.regexp.split */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.regexp.split.js");

__webpack_require__(/*! ../modules/es6.promise */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.promise.js");

__webpack_require__(/*! ../modules/es6.map */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.map.js");

__webpack_require__(/*! ../modules/es6.set */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.set.js");

__webpack_require__(/*! ../modules/es6.weak-map */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.weak-map.js");

__webpack_require__(/*! ../modules/es6.weak-set */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.weak-set.js");

__webpack_require__(/*! ../modules/es6.typed.array-buffer */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.typed.array-buffer.js");

__webpack_require__(/*! ../modules/es6.typed.data-view */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.typed.data-view.js");

__webpack_require__(/*! ../modules/es6.typed.int8-array */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.typed.int8-array.js");

__webpack_require__(/*! ../modules/es6.typed.uint8-array */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.typed.uint8-array.js");

__webpack_require__(/*! ../modules/es6.typed.uint8-clamped-array */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.typed.uint8-clamped-array.js");

__webpack_require__(/*! ../modules/es6.typed.int16-array */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.typed.int16-array.js");

__webpack_require__(/*! ../modules/es6.typed.uint16-array */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.typed.uint16-array.js");

__webpack_require__(/*! ../modules/es6.typed.int32-array */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.typed.int32-array.js");

__webpack_require__(/*! ../modules/es6.typed.uint32-array */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.typed.uint32-array.js");

__webpack_require__(/*! ../modules/es6.typed.float32-array */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.typed.float32-array.js");

__webpack_require__(/*! ../modules/es6.typed.float64-array */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.typed.float64-array.js");

__webpack_require__(/*! ../modules/es6.reflect.apply */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.reflect.apply.js");

__webpack_require__(/*! ../modules/es6.reflect.construct */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.reflect.construct.js");

__webpack_require__(/*! ../modules/es6.reflect.define-property */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.reflect.define-property.js");

__webpack_require__(/*! ../modules/es6.reflect.delete-property */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.reflect.delete-property.js");

__webpack_require__(/*! ../modules/es6.reflect.enumerate */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.reflect.enumerate.js");

__webpack_require__(/*! ../modules/es6.reflect.get */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.reflect.get.js");

__webpack_require__(/*! ../modules/es6.reflect.get-own-property-descriptor */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js");

__webpack_require__(/*! ../modules/es6.reflect.get-prototype-of */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.reflect.get-prototype-of.js");

__webpack_require__(/*! ../modules/es6.reflect.has */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.reflect.has.js");

__webpack_require__(/*! ../modules/es6.reflect.is-extensible */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.reflect.is-extensible.js");

__webpack_require__(/*! ../modules/es6.reflect.own-keys */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.reflect.own-keys.js");

__webpack_require__(/*! ../modules/es6.reflect.prevent-extensions */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.reflect.prevent-extensions.js");

__webpack_require__(/*! ../modules/es6.reflect.set */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.reflect.set.js");

__webpack_require__(/*! ../modules/es6.reflect.set-prototype-of */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.reflect.set-prototype-of.js");

module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_core.js");

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/fn/array/flat-map.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/fn/array/flat-map.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es7.array.flat-map */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es7.array.flat-map.js");

module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_core.js").Array.flatMap;

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/fn/array/includes.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/fn/array/includes.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es7.array.includes */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es7.array.includes.js");

module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_core.js").Array.includes;

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/fn/object/entries.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/fn/object/entries.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es7.object.entries */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es7.object.entries.js");

module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_core.js").Object.entries;

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/fn/object/get-own-property-descriptors.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/fn/object/get-own-property-descriptors.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es7.object.get-own-property-descriptors */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es7.object.get-own-property-descriptors.js");

module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_core.js").Object.getOwnPropertyDescriptors;

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/fn/object/values.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/fn/object/values.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es7.object.values */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es7.object.values.js");

module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_core.js").Object.values;

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/fn/promise/finally.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/fn/promise/finally.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../modules/es6.promise */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.promise.js");

__webpack_require__(/*! ../../modules/es7.promise.finally */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es7.promise.finally.js");

module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_core.js").Promise['finally'];

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/fn/string/pad-end.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/fn/string/pad-end.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es7.string.pad-end */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es7.string.pad-end.js");

module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_core.js").String.padEnd;

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/fn/string/pad-start.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/fn/string/pad-start.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es7.string.pad-start */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es7.string.pad-start.js");

module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_core.js").String.padStart;

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/fn/string/trim-end.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/fn/string/trim-end.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es7.string.trim-right */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es7.string.trim-right.js");

module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_core.js").String.trimRight;

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/fn/string/trim-start.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/fn/string/trim-start.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es7.string.trim-left */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es7.string.trim-left.js");

module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_core.js").String.trimLeft;

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/fn/symbol/async-iterator.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/fn/symbol/async-iterator.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es7.symbol.async-iterator */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es7.symbol.async-iterator.js");

module.exports = __webpack_require__(/*! ../../modules/_wks-ext */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_wks-ext.js").f('asyncIterator');

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/library/fn/global.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/library/fn/global.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es7.global */ "./node_modules/@babel/polyfill/node_modules/core-js/library/modules/es7.global.js");

module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/@babel/polyfill/node_modules/core-js/library/modules/_core.js").global;

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/library/modules/_a-function.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/library/modules/_a-function.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/library/modules/_an-object.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/library/modules/_an-object.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/polyfill/node_modules/core-js/library/modules/_is-object.js");

module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/library/modules/_core.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/library/modules/_core.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = {
  version: '2.6.11'
};
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/library/modules/_ctx.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/library/modules/_ctx.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/@babel/polyfill/node_modules/core-js/library/modules/_a-function.js");

module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;

  switch (length) {
    case 1:
      return function (a) {
        return fn.call(that, a);
      };

    case 2:
      return function (a, b) {
        return fn.call(that, a, b);
      };

    case 3:
      return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
  }

  return function ()
  /* ...args */
  {
    return fn.apply(that, arguments);
  };
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/library/modules/_descriptors.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/library/modules/_descriptors.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/@babel/polyfill/node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', {
    get: function () {
      return 7;
    }
  }).a != 7;
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/library/modules/_dom-create.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/library/modules/_dom-create.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/polyfill/node_modules/core-js/library/modules/_is-object.js");

var document = __webpack_require__(/*! ./_global */ "./node_modules/@babel/polyfill/node_modules/core-js/library/modules/_global.js").document; // typeof document.createElement is 'object' in old IE


var is = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return is ? document.createElement(it) : {};
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/library/modules/_export.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/library/modules/_export.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/@babel/polyfill/node_modules/core-js/library/modules/_global.js");

var core = __webpack_require__(/*! ./_core */ "./node_modules/@babel/polyfill/node_modules/core-js/library/modules/_core.js");

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/@babel/polyfill/node_modules/core-js/library/modules/_ctx.js");

var hide = __webpack_require__(/*! ./_hide */ "./node_modules/@babel/polyfill/node_modules/core-js/library/modules/_hide.js");

var has = __webpack_require__(/*! ./_has */ "./node_modules/@babel/polyfill/node_modules/core-js/library/modules/_has.js");

var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;

  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue; // export native or passed

    out = own ? target[key] : source[key]; // prevent global pollution for namespaces

    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key] // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global) // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0:
              return new C();

            case 1:
              return new C(a);

            case 2:
              return new C(a, b);
          }

          return new C(a, b, c);
        }

        return C.apply(this, arguments);
      };

      F[PROTOTYPE] = C[PROTOTYPE];
      return F; // make static versions for prototype methods
    }(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out; // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%

    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out; // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%

      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
}; // type bitmap


$export.F = 1; // forced

$export.G = 2; // global

$export.S = 4; // static

$export.P = 8; // proto

$export.B = 16; // bind

$export.W = 32; // wrap

$export.U = 64; // safe

$export.R = 128; // real proto method for `library`

module.exports = $export;

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/library/modules/_fails.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/library/modules/_fails.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/library/modules/_global.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/library/modules/_global.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self // eslint-disable-next-line no-new-func
: Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/library/modules/_has.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/library/modules/_has.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/library/modules/_hide.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/library/modules/_hide.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/polyfill/node_modules/core-js/library/modules/_object-dp.js");

var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/@babel/polyfill/node_modules/core-js/library/modules/_property-desc.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/polyfill/node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/polyfill/node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/@babel/polyfill/node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/@babel/polyfill/node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', {
    get: function () {
      return 7;
    }
  }).a != 7;
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/library/modules/_is-object.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/library/modules/_is-object.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/library/modules/_object-dp.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/library/modules/_object-dp.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/polyfill/node_modules/core-js/library/modules/_an-object.js");

var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/@babel/polyfill/node_modules/core-js/library/modules/_ie8-dom-define.js");

var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/@babel/polyfill/node_modules/core-js/library/modules/_to-primitive.js");

var dP = Object.defineProperty;
exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/polyfill/node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) {
    /* empty */
  }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/library/modules/_property-desc.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/library/modules/_property-desc.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/library/modules/_to-primitive.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/library/modules/_to-primitive.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/polyfill/node_modules/core-js/library/modules/_is-object.js"); // instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string


module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/library/modules/es7.global.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/library/modules/es7.global.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-global
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/library/modules/_export.js");

$export($export.G, {
  global: __webpack_require__(/*! ./_global */ "./node_modules/@babel/polyfill/node_modules/core-js/library/modules/_global.js")
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_a-function.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_a-function.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_a-number-value.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_a-number-value.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var cof = __webpack_require__(/*! ./_cof */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_cof.js");

module.exports = function (it, msg) {
  if (typeof it != 'number' && cof(it) != 'Number') throw TypeError(msg);
  return +it;
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_add-to-unscopables.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_add-to-unscopables.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(/*! ./_wks */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_wks.js")('unscopables');

var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(/*! ./_hide */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_hide.js")(ArrayProto, UNSCOPABLES, {});

module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_advance-string-index.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_advance-string-index.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var at = __webpack_require__(/*! ./_string-at */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_string-at.js")(true); // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex


module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_an-instance.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_an-instance.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || forbiddenField !== undefined && forbiddenField in it) {
    throw TypeError(name + ': incorrect invocation!');
  }

  return it;
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_an-object.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_an-object.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_is-object.js");

module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_array-copy-within.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_array-copy-within.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)


var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_to-object.js");

var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_to-absolute-index.js");

var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_to-length.js");

module.exports = [].copyWithin || function copyWithin(target
/* = 0 */
, start
/* = 0, end = @length */
) {
  var O = toObject(this);
  var len = toLength(O.length);
  var to = toAbsoluteIndex(target, len);
  var from = toAbsoluteIndex(start, len);
  var end = arguments.length > 2 ? arguments[2] : undefined;
  var count = Math.min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
  var inc = 1;

  if (from < to && to < from + count) {
    inc = -1;
    from += count - 1;
    to += count - 1;
  }

  while (count-- > 0) {
    if (from in O) O[to] = O[from];else delete O[to];
    to += inc;
    from += inc;
  }

  return O;
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_array-fill.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_array-fill.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)


var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_to-object.js");

var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_to-absolute-index.js");

var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_to-length.js");

module.exports = function fill(value
/* , start = 0, end = @length */
) {
  var O = toObject(this);
  var length = toLength(O.length);
  var aLen = arguments.length;
  var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
  var end = aLen > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);

  while (endPos > index) O[index++] = value;

  return O;
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_array-includes.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_array-includes.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_to-iobject.js");

var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_to-length.js");

var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_to-absolute-index.js");

module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value; // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare

    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++]; // eslint-disable-next-line no-self-compare

      if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
    } else for (; length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    }
    return !IS_INCLUDES && -1;
  };
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_array-methods.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_array-methods.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_ctx.js");

var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_iobject.js");

var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_to-object.js");

var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_to-length.js");

var asc = __webpack_require__(/*! ./_array-species-create */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_array-species-create.js");

module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;

    for (; length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);

      if (TYPE) {
        if (IS_MAP) result[index] = res; // map
        else if (res) switch (TYPE) {
            case 3:
              return true;
            // some

            case 5:
              return val;
            // find

            case 6:
              return index;
            // findIndex

            case 2:
              result.push(val);
            // filter
          } else if (IS_EVERY) return false; // every
      }
    }

    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_array-reduce.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_array-reduce.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_a-function.js");

var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_to-object.js");

var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_iobject.js");

var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_to-length.js");

module.exports = function (that, callbackfn, aLen, memo, isRight) {
  aFunction(callbackfn);
  var O = toObject(that);
  var self = IObject(O);
  var length = toLength(O.length);
  var index = isRight ? length - 1 : 0;
  var i = isRight ? -1 : 1;
  if (aLen < 2) for (;;) {
    if (index in self) {
      memo = self[index];
      index += i;
      break;
    }

    index += i;

    if (isRight ? index < 0 : length <= index) {
      throw TypeError('Reduce of empty array with no initial value');
    }
  }

  for (; isRight ? index >= 0 : length > index; index += i) if (index in self) {
    memo = callbackfn(memo, self[index], index, O);
  }

  return memo;
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_array-species-constructor.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_array-species-constructor.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_is-object.js");

var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_is-array.js");

var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_wks.js")('species');

module.exports = function (original) {
  var C;

  if (isArray(original)) {
    C = original.constructor; // cross-realm fallback

    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;

    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  }

  return C === undefined ? Array : C;
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_array-species-create.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_array-species-create.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(/*! ./_array-species-constructor */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_array-species-constructor.js");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_bind.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_bind.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_a-function.js");

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_is-object.js");

var invoke = __webpack_require__(/*! ./_invoke */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_invoke.js");

var arraySlice = [].slice;
var factories = {};

var construct = function (F, len, args) {
  if (!(len in factories)) {
    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']'; // eslint-disable-next-line no-new-func


    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  }

  return factories[len](F, args);
};

module.exports = Function.bind || function bind(that
/* , ...args */
) {
  var fn = aFunction(this);
  var partArgs = arraySlice.call(arguments, 1);

  var bound = function ()
  /* args... */
  {
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };

  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
  return bound;
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_classof.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_classof.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_cof.js");

var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_wks.js")('toStringTag'); // ES3 wrong here


var ARG = cof(function () {
  return arguments;
}()) == 'Arguments'; // fallback for IE11 Script Access Denied error

var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) {
    /* empty */
  }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null' // @@toStringTag case
  : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T // builtinTag case
  : ARG ? cof(O) // ES3 arguments fallback
  : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_cof.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_cof.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_collection-strong.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_collection-strong.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-dp.js").f;

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-create.js");

var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_redefine-all.js");

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_ctx.js");

var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_an-instance.js");

var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_for-of.js");

var $iterDefine = __webpack_require__(/*! ./_iter-define */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_iter-define.js");

var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_iter-step.js");

var setSpecies = __webpack_require__(/*! ./_set-species */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_set-species.js");

var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_descriptors.js");

var fastKey = __webpack_require__(/*! ./_meta */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_meta.js").fastKey;

var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_validate-collection.js");

var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index]; // frozen object case

  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME; // collection type

      that._i = create(null); // index

      that._f = undefined; // first entry

      that._l = undefined; // last entry

      that[SIZE] = 0; // size

      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }

        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);

        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        }

        return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn
      /* , that = undefined */
      ) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;

        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this); // revert to the last existing entry

          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index; // change existing entry

    if (entry) {
      entry.v = value; // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true),
        // <- index
        k: key,
        // <- key
        v: value,
        // <- value
        p: prev = that._l,
        // <- previous entry
        n: undefined,
        // <- next entry
        r: false // <- removed

      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++; // add to index

      if (index !== 'F') that._i[index] = entry;
    }

    return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target

      this._k = kind; // kind

      this._l = undefined; // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l; // revert to the last existing entry

      while (entry && entry.r) entry = entry.p; // get next entry


      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      } // return step by kind


      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true); // add [@@species], 23.1.2.2, 23.2.2.2

    setSpecies(NAME);
  }
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_collection-weak.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_collection-weak.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_redefine-all.js");

var getWeak = __webpack_require__(/*! ./_meta */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_meta.js").getWeak;

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_an-object.js");

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_is-object.js");

var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_an-instance.js");

var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_for-of.js");

var createArrayMethod = __webpack_require__(/*! ./_array-methods */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_array-methods.js");

var $has = __webpack_require__(/*! ./_has */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_has.js");

var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_validate-collection.js");

var arrayFind = createArrayMethod(5);
var arrayFindIndex = createArrayMethod(6);
var id = 0; // fallback for uncaught frozen keys

var uncaughtFrozenStore = function (that) {
  return that._l || (that._l = new UncaughtFrozenStore());
};

var UncaughtFrozenStore = function () {
  this.a = [];
};

var findUncaughtFrozen = function (store, key) {
  return arrayFind(store.a, function (it) {
    return it[0] === key;
  });
};

UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;else this.a.push([key, value]);
  },
  'delete': function (key) {
    var index = arrayFindIndex(this.a, function (it) {
      return it[0] === key;
    });
    if (~index) this.a.splice(index, 1);
    return !!~index;
  }
};
module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME; // collection type

      that._i = id++; // collection id

      that._l = undefined; // leak store for uncaught frozen objects

      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function (key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var data = getWeak(anObject(key), true);
    if (data === true) uncaughtFrozenStore(that).set(key, value);else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_collection.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_collection.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__(/*! ./_global */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_global.js");

var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js");

var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_redefine.js");

var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_redefine-all.js");

var meta = __webpack_require__(/*! ./_meta */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_meta.js");

var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_for-of.js");

var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_an-instance.js");

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_is-object.js");

var fails = __webpack_require__(/*! ./_fails */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_fails.js");

var $iterDetect = __webpack_require__(/*! ./_iter-detect */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_iter-detect.js");

var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_set-to-string-tag.js");

var inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_inherit-if-required.js");

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};

  var fixMethod = function (KEY) {
    var fn = proto[KEY];
    redefine(proto, KEY, KEY == 'delete' ? function (a) {
      return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
    } : KEY == 'has' ? function has(a) {
      return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
    } : KEY == 'get' ? function get(a) {
      return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
    } : KEY == 'add' ? function add(a) {
      fn.call(this, a === 0 ? 0 : a);
      return this;
    } : function set(a, b) {
      fn.call(this, a === 0 ? 0 : a, b);
      return this;
    });
  };

  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance = new C(); // early implementations not supports chaining

    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance; // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false

    var THROWS_ON_PRIMITIVES = fails(function () {
      instance.has(1);
    }); // most early implementations doesn't supports iterables, most modern - not close it correctly

    var ACCEPT_ITERABLES = $iterDetect(function (iter) {
      new C(iter);
    }); // eslint-disable-line no-new
    // for early implementations -0 and +0 not the same

    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new C();
      var index = 5;

      while (index--) $instance[ADDER](index, index);

      return !$instance.has(-0);
    });

    if (!ACCEPT_ITERABLES) {
      C = wrapper(function (target, iterable) {
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base(), target, C);
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }

    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }

    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER); // weak collections should not contains .clear method

    if (IS_WEAK && proto.clear) delete proto.clear;
  }

  setToStringTag(C, NAME);
  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);
  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);
  return C;
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_core.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_core.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = {
  version: '2.6.11'
};
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_create-property.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_create-property.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-dp.js");

var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_property-desc.js");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));else object[index] = value;
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_ctx.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_ctx.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_a-function.js");

module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;

  switch (length) {
    case 1:
      return function (a) {
        return fn.call(that, a);
      };

    case 2:
      return function (a, b) {
        return fn.call(that, a, b);
      };

    case 3:
      return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
  }

  return function ()
  /* ...args */
  {
    return fn.apply(that, arguments);
  };
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_date-to-iso-string.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_date-to-iso-string.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()

var fails = __webpack_require__(/*! ./_fails */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_fails.js");

var getTime = Date.prototype.getTime;
var $toISOString = Date.prototype.toISOString;

var lz = function (num) {
  return num > 9 ? num : '0' + num;
}; // PhantomJS / old WebKit has a broken implementations


module.exports = fails(function () {
  return $toISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';
}) || !fails(function () {
  $toISOString.call(new Date(NaN));
}) ? function toISOString() {
  if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');
  var d = this;
  var y = d.getUTCFullYear();
  var m = d.getUTCMilliseconds();
  var s = y < 0 ? '-' : y > 9999 ? '+' : '';
  return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) + '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) + 'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) + ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
} : $toISOString;

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_date-to-primitive.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_date-to-primitive.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_an-object.js");

var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_to-primitive.js");

var NUMBER = 'number';

module.exports = function (hint) {
  if (hint !== 'string' && hint !== NUMBER && hint !== 'default') throw TypeError('Incorrect hint');
  return toPrimitive(anObject(this), hint != NUMBER);
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_defined.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_defined.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_descriptors.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_descriptors.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', {
    get: function () {
      return 7;
    }
  }).a != 7;
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_dom-create.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_dom-create.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_is-object.js");

var document = __webpack_require__(/*! ./_global */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_global.js").document; // typeof document.createElement is 'object' in old IE


var is = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return is ? document.createElement(it) : {};
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_enum-bug-keys.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_enum-bug-keys.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_enum-keys.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_enum-keys.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-keys.js");

var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-gops.js");

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-pie.js");

module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;

  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;

    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  }

  return result;
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_global.js");

var core = __webpack_require__(/*! ./_core */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_core.js");

var hide = __webpack_require__(/*! ./_hide */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_hide.js");

var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_redefine.js");

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_ctx.js");

var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;

  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined; // export native or passed

    out = (own ? target : source)[key]; // bind timers to global for call from export context

    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out; // extend global

    if (target) redefine(target, key, out, type & $export.U); // export

    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};

global.core = core; // type bitmap

$export.F = 1; // forced

$export.G = 2; // global

$export.S = 4; // static

$export.P = 8; // proto

$export.B = 16; // bind

$export.W = 32; // wrap

$export.U = 64; // safe

$export.R = 128; // real proto method for `library`

module.exports = $export;

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_fails-is-regexp.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_fails-is-regexp.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var MATCH = __webpack_require__(/*! ./_wks */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_wks.js")('match');

module.exports = function (KEY) {
  var re = /./;

  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) {
      /* empty */
    }
  }

  return true;
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_fails.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_fails.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_fix-re-wks.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_fix-re-wks.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./es6.regexp.exec */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.regexp.exec.js");

var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_redefine.js");

var hide = __webpack_require__(/*! ./_hide */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_hide.js");

var fails = __webpack_require__(/*! ./_fails */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_fails.js");

var defined = __webpack_require__(/*! ./_defined */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_defined.js");

var wks = __webpack_require__(/*! ./_wks */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_wks.js");

var regexpExec = __webpack_require__(/*! ./_regexp-exec */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_regexp-exec.js");

var SPECIES = wks('species');
var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;

  re.exec = function () {
    var result = [];
    result.groups = {
      a: '7'
    };
    return result;
  };

  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;

  re.exec = function () {
    return originalExec.apply(this, arguments);
  };

  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
}();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);
  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};

    O[SYMBOL] = function () {
      return 7;
    };

    return ''[KEY](O) != 7;
  });
  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    re.exec = function () {
      execCalled = true;
      return null;
    };

    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};

      re.constructor[SPECIES] = function () {
        return re;
      };
    }

    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS || KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(defined, SYMBOL, ''[KEY], function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
      if (regexp.exec === regexpExec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return {
            done: true,
            value: nativeRegExpMethod.call(regexp, str, arg2)
          };
        }

        return {
          done: true,
          value: nativeMethod.call(str, regexp, arg2)
        };
      }

      return {
        done: false
      };
    });
    var strfn = fns[0];
    var rxfn = fns[1];
    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2 // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
    // 21.2.5.11 RegExp.prototype[@@split](string, limit)
    ? function (string, arg) {
      return rxfn.call(string, this, arg);
    } // 21.2.5.6 RegExp.prototype[@@match](string)
    // 21.2.5.9 RegExp.prototype[@@search](string)
    : function (string) {
      return rxfn.call(string, this);
    });
  }
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_flags.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_flags.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // 21.2.5.3 get RegExp.prototype.flags

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_an-object.js");

module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_flatten-into-array.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_flatten-into-array.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray

var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_is-array.js");

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_is-object.js");

var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_to-length.js");

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_ctx.js");

var IS_CONCAT_SPREADABLE = __webpack_require__(/*! ./_wks */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_wks.js")('isConcatSpreadable');

function flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {
  var targetIndex = start;
  var sourceIndex = 0;
  var mapFn = mapper ? ctx(mapper, thisArg, 3) : false;
  var element, spreadable;

  while (sourceIndex < sourceLen) {
    if (sourceIndex in source) {
      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];
      spreadable = false;

      if (isObject(element)) {
        spreadable = element[IS_CONCAT_SPREADABLE];
        spreadable = spreadable !== undefined ? !!spreadable : isArray(element);
      }

      if (spreadable && depth > 0) {
        targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
      } else {
        if (targetIndex >= 0x1fffffffffffff) throw TypeError();
        target[targetIndex] = element;
      }

      targetIndex++;
    }

    sourceIndex++;
  }

  return targetIndex;
}

module.exports = flattenIntoArray;

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_for-of.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_for-of.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_ctx.js");

var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_iter-call.js");

var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_is-array-iter.js");

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_an-object.js");

var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_to-length.js");

var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/core.get-iterator-method.js");

var BREAK = {};
var RETURN = {};

var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () {
    return iterable;
  } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!'); // fast case for arrays with default iterator

  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};

exports.BREAK = BREAK;
exports.RETURN = RETURN;

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_function-to-string.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_function-to-string.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_shared */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_shared.js")('native-function-to-string', Function.toString);

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_global.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_global.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self // eslint-disable-next-line no-new-func
: Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_has.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_has.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_hide.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_hide.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-dp.js");

var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_property-desc.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_html.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_html.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_global.js").document;

module.exports = document && document.documentElement;

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_ie8-dom-define.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_ie8-dom-define.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_dom-create.js")('div'), 'a', {
    get: function () {
      return 7;
    }
  }).a != 7;
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_inherit-if-required.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_inherit-if-required.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_is-object.js");

var setPrototypeOf = __webpack_require__(/*! ./_set-proto */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_set-proto.js").set;

module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;

  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  }

  return that;
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_invoke.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_invoke.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;

  switch (args.length) {
    case 0:
      return un ? fn() : fn.call(that);

    case 1:
      return un ? fn(args[0]) : fn.call(that, args[0]);

    case 2:
      return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);

    case 3:
      return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);

    case 4:
      return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
  }

  return fn.apply(that, args);
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_iobject.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_iobject.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_cof.js"); // eslint-disable-next-line no-prototype-builtins


module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_is-array-iter.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_is-array-iter.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_iterators.js");

var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_wks.js")('iterator');

var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_is-array.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_is-array.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_cof.js");

module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_is-integer.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_is-integer.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_is-object.js");

var floor = Math.floor;

module.exports = function isInteger(it) {
  return !isObject(it) && isFinite(it) && floor(it) === it;
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_is-object.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_is-object.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_is-regexp.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_is-regexp.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_is-object.js");

var cof = __webpack_require__(/*! ./_cof */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_cof.js");

var MATCH = __webpack_require__(/*! ./_wks */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_wks.js")('match');

module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_iter-call.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_iter-call.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_an-object.js");

module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value); // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_iter-create.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_iter-create.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var create = __webpack_require__(/*! ./_object-create */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-create.js");

var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_property-desc.js");

var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_set-to-string-tag.js");

var IteratorPrototype = {}; // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()

__webpack_require__(/*! ./_hide */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_wks.js")('iterator'), function () {
  return this;
});

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, {
    next: descriptor(1, next)
  });
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_iter-define.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_iter-define.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_library.js");

var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js");

var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_redefine.js");

var hide = __webpack_require__(/*! ./_hide */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_hide.js");

var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_iterators.js");

var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_iter-create.js");

var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_set-to-string-tag.js");

var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-gpo.js");

var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_wks.js")('iterator');

var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`

var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () {
  return this;
};

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);

  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];

    switch (kind) {
      case KEYS:
        return function keys() {
          return new Constructor(this, kind);
        };

      case VALUES:
        return function values() {
          return new Constructor(this, kind);
        };
    }

    return function entries() {
      return new Constructor(this, kind);
    };
  };

  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype; // Fix native

  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));

    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true); // fix for some old engines

      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  } // fix Array#{values, @@iterator}.name in V8 / FF


  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;

    $default = function values() {
      return $native.call(this);
    };
  } // Define iterator


  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  } // Plug for library


  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;

  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }

  return methods;
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_iter-detect.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_iter-detect.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_wks.js")('iterator');

var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();

  riter['return'] = function () {
    SAFE_CLOSING = true;
  }; // eslint-disable-next-line no-throw-literal


  Array.from(riter, function () {
    throw 2;
  });
} catch (e) {
  /* empty */
}

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;

  try {
    var arr = [7];
    var iter = arr[ITERATOR]();

    iter.next = function () {
      return {
        done: safe = true
      };
    };

    arr[ITERATOR] = function () {
      return iter;
    };

    exec(arr);
  } catch (e) {
    /* empty */
  }

  return safe;
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_iter-step.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_iter-step.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return {
    value: value,
    done: !!done
  };
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_iterators.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_iterators.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_library.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_library.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_math-expm1.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_math-expm1.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 20.2.2.14 Math.expm1(x)
var $expm1 = Math.expm1;
module.exports = !$expm1 // Old FF bug
|| $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168 // Tor Browser bug
|| $expm1(-2e-17) != -2e-17 ? function expm1(x) {
  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
} : $expm1;

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_math-fround.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_math-fround.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.16 Math.fround(x)
var sign = __webpack_require__(/*! ./_math-sign */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_math-sign.js");

var pow = Math.pow;
var EPSILON = pow(2, -52);
var EPSILON32 = pow(2, -23);
var MAX32 = pow(2, 127) * (2 - EPSILON32);
var MIN32 = pow(2, -126);

var roundTiesToEven = function (n) {
  return n + 1 / EPSILON - 1 / EPSILON;
};

module.exports = Math.fround || function fround(x) {
  var $abs = Math.abs(x);
  var $sign = sign(x);
  var a, result;
  if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
  a = (1 + EPSILON32 / EPSILON) * $abs;
  result = a - (a - $abs); // eslint-disable-next-line no-self-compare

  if (result > MAX32 || result != result) return $sign * Infinity;
  return $sign * result;
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_math-log1p.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_math-log1p.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 20.2.2.20 Math.log1p(x)
module.exports = Math.log1p || function log1p(x) {
  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_math-sign.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_math-sign.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 20.2.2.28 Math.sign(x)
module.exports = Math.sign || function sign(x) {
  // eslint-disable-next-line no-self-compare
  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_meta.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_meta.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_uid.js")('meta');

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_is-object.js");

var has = __webpack_require__(/*! ./_has */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_has.js");

var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-dp.js").f;

var id = 0;

var isExtensible = Object.isExtensible || function () {
  return true;
};

var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});

var setMeta = function (it) {
  setDesc(it, META, {
    value: {
      i: 'O' + ++id,
      // object ID
      w: {} // weak collections IDs

    }
  });
};

var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;

  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F'; // not necessary to add metadata

    if (!create) return 'E'; // add missing metadata

    setMeta(it); // return object ID
  }

  return it[META].i;
};

var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true; // not necessary to add metadata

    if (!create) return false; // add missing metadata

    setMeta(it); // return hash weak collections IDs
  }

  return it[META].w;
}; // add metadata on freeze-family methods calling


var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};

var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_microtask.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_microtask.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_global.js");

var macrotask = __webpack_require__(/*! ./_task */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_task.js").set;

var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(/*! ./_cof */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_cof.js")(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();

    while (head) {
      fn = head.fn;
      head = head.next;

      try {
        fn();
      } catch (e) {
        if (head) notify();else last = undefined;
        throw e;
      }
    }

    last = undefined;
    if (parent) parent.enter();
  }; // Node.js


  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    }; // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339

  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, {
      characterData: true
    }); // eslint-disable-line no-new

    notify = function () {
      node.data = toggle = !toggle;
    }; // environments with maybe non-completely correct, but existent Promise

  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);

    notify = function () {
      promise.then(flush);
    }; // for other environments - macrotask based on:
    // - setImmediate
    // - MessageChannel
    // - window.postMessag
    // - onreadystatechange
    // - setTimeout

  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = {
      fn: fn,
      next: undefined
    };
    if (last) last.next = task;

    if (!head) {
      head = task;
      notify();
    }

    last = task;
  };
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_new-promise-capability.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_new-promise-capability.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // 25.4.1.5 NewPromiseCapability(C)

var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_a-function.js");

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-assign.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-assign.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // 19.1.2.1 Object.assign(target, source, ...)

var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_descriptors.js");

var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-keys.js");

var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-gops.js");

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-pie.js");

var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_to-object.js");

var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_iobject.js");

var $assign = Object.assign; // should work with symbols and should have deterministic property order (V8 bug)

module.exports = !$assign || __webpack_require__(/*! ./_fails */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_fails.js")(function () {
  var A = {};
  var B = {}; // eslint-disable-next-line no-undef

  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) {
    B[k] = k;
  });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) {
  // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;

  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;

    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  }

  return T;
} : $assign;

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-create.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-create.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_an-object.js");

var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-dps.js");

var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_enum-bug-keys.js");

var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

var Empty = function () {
  /* empty */
};

var PROTOTYPE = 'prototype'; // Create object with fake `null` prototype: use iframe Object with cleared prototype

var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_dom-create.js")('iframe');

  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';

  __webpack_require__(/*! ./_html */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_html.js").appendChild(iframe);

  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);

  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;

  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];

  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;

  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null; // add "__proto__" for Object.getPrototypeOf polyfill

    result[IE_PROTO] = O;
  } else result = createDict();

  return Properties === undefined ? result : dPs(result, Properties);
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-dp.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-dp.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_an-object.js");

var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_ie8-dom-define.js");

var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_to-primitive.js");

var dP = Object.defineProperty;
exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) {
    /* empty */
  }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-dps.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-dps.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-dp.js");

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_an-object.js");

var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;

  while (length > i) dP.f(O, P = keys[i++], Properties[P]);

  return O;
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-gopd.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-gopd.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-pie.js");

var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_property-desc.js");

var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_to-iobject.js");

var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_to-primitive.js");

var has = __webpack_require__(/*! ./_has */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_has.js");

var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_ie8-dom-define.js");

var gOPD = Object.getOwnPropertyDescriptor;
exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) {
    /* empty */
  }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-gopn-ext.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-gopn-ext.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_to-iobject.js");

var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-gopn.js").f;

var toString = {}.toString;
var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-gopn.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-gopn.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-keys-internal.js");

var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-gops.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-gops.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-gpo.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-gpo.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_has.js");

var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_to-object.js");

var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];

  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  }

  return O instanceof Object ? ObjectProto : null;
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-keys-internal.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-keys-internal.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_has.js");

var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_to-iobject.js");

var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_array-includes.js")(false);

var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;

  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key); // Don't enum bug & hidden keys


  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }

  return result;
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-keys.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-keys.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-keys-internal.js");

var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-pie.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-pie.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-sap.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-sap.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js");

var core = __webpack_require__(/*! ./_core */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_core.js");

var fails = __webpack_require__(/*! ./_fails */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_fails.js");

module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () {
    fn(1);
  }), 'Object', exp);
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-to-array.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-to-array.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_descriptors.js");

var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-keys.js");

var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_to-iobject.js");

var isEnum = __webpack_require__(/*! ./_object-pie */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-pie.js").f;

module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;

    while (length > i) {
      key = keys[i++];

      if (!DESCRIPTORS || isEnum.call(O, key)) {
        result.push(isEntries ? [key, O[key]] : O[key]);
      }
    }

    return result;
  };
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_own-keys.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_own-keys.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all object keys, includes non-enumerable and symbols
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-gopn.js");

var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-gops.js");

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_an-object.js");

var Reflect = __webpack_require__(/*! ./_global */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_global.js").Reflect;

module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_parse-float.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_parse-float.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $parseFloat = __webpack_require__(/*! ./_global */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_global.js").parseFloat;

var $trim = __webpack_require__(/*! ./_string-trim */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_string-trim.js").trim;

module.exports = 1 / $parseFloat(__webpack_require__(/*! ./_string-ws */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_string-ws.js") + '-0') !== -Infinity ? function parseFloat(str) {
  var string = $trim(String(str), 3);
  var result = $parseFloat(string);
  return result === 0 && string.charAt(0) == '-' ? -0 : result;
} : $parseFloat;

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_parse-int.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_parse-int.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $parseInt = __webpack_require__(/*! ./_global */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_global.js").parseInt;

var $trim = __webpack_require__(/*! ./_string-trim */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_string-trim.js").trim;

var ws = __webpack_require__(/*! ./_string-ws */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_string-ws.js");

var hex = /^[-+]?0[xX]/;
module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
  var string = $trim(String(str), 3);
  return $parseInt(string, radix >>> 0 || (hex.test(string) ? 16 : 10));
} : $parseInt;

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_perform.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_perform.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return {
      e: false,
      v: exec()
    };
  } catch (e) {
    return {
      e: true,
      v: e
    };
  }
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_promise-resolve.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_promise-resolve.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_an-object.js");

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_is-object.js");

var newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_new-promise-capability.js");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_property-desc.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_property-desc.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_redefine-all.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_redefine-all.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_redefine.js");

module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);

  return target;
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_redefine.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_redefine.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_global.js");

var hide = __webpack_require__(/*! ./_hide */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_hide.js");

var has = __webpack_require__(/*! ./_has */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_has.js");

var SRC = __webpack_require__(/*! ./_uid */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_uid.js")('src');

var $toString = __webpack_require__(/*! ./_function-to-string */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_function-to-string.js");

var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(/*! ./_core */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_core.js").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));

  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  } // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative

})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_regexp-exec-abstract.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_regexp-exec-abstract.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__(/*! ./_classof */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_classof.js");

var builtinExec = RegExp.prototype.exec; // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec

module.exports = function (R, S) {
  var exec = R.exec;

  if (typeof exec === 'function') {
    var result = exec.call(R, S);

    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }

    return result;
  }

  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }

  return builtinExec.call(R, S);
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_regexp-exec.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_regexp-exec.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexpFlags = __webpack_require__(/*! ./_flags */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_flags.js");

var nativeExec = RegExp.prototype.exec; // This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.

var nativeReplace = String.prototype.replace;
var patchedExec = nativeExec;
var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
}(); // nonparticipating capturing group, copied from es5-shim's String#split patch.


var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;
var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }

    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];
    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }

    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_same-value.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_same-value.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.9 SameValue(x, y)
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_set-proto.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_set-proto.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.

/* eslint-disable no-proto */
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_is-object.js");

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_an-object.js");

var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};

module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
  function (test, buggy, set) {
    try {
      set = __webpack_require__(/*! ./_ctx */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_ctx.js")(Function.call, __webpack_require__(/*! ./_object-gopd */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-gopd.js").f(Object.prototype, '__proto__').set, 2);
      set(test, []);
      buggy = !(test instanceof Array);
    } catch (e) {
      buggy = true;
    }

    return function setPrototypeOf(O, proto) {
      check(O, proto);
      if (buggy) O.__proto__ = proto;else set(O, proto);
      return O;
    };
  }({}, false) : undefined),
  check: check
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_set-species.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_set-species.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__(/*! ./_global */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_global.js");

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-dp.js");

var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_descriptors.js");

var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_wks.js")('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () {
      return this;
    }
  });
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_set-to-string-tag.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_set-to-string-tag.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-dp.js").f;

var has = __webpack_require__(/*! ./_has */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_has.js");

var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, {
    configurable: true,
    value: tag
  });
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_shared-key.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_shared-key.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_shared.js")('keys');

var uid = __webpack_require__(/*! ./_uid */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_uid.js");

module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_shared.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_shared.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_core.js");

var global = __webpack_require__(/*! ./_global */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_global.js");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_species-constructor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_species-constructor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_an-object.js");

var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_a-function.js");

var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_wks.js")('species');

module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_strict-method.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_strict-method.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fails = __webpack_require__(/*! ./_fails */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_fails.js");

module.exports = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () {
      /* empty */
    }, 1) : method.call(null);
  });
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_string-at.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_string-at.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_to-integer.js");

var defined = __webpack_require__(/*! ./_defined */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_defined.js"); // true  -> String#at
// false -> String#codePointAt


module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_string-context.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_string-context.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__(/*! ./_is-regexp */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_is-regexp.js");

var defined = __webpack_require__(/*! ./_defined */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_defined.js");

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_string-html.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_string-html.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js");

var fails = __webpack_require__(/*! ./_fails */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_fails.js");

var defined = __webpack_require__(/*! ./_defined */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_defined.js");

var quot = /"/g; // B.2.3.2.1 CreateHTML(string, tag, attribute, value)

var createHTML = function (string, tag, attribute, value) {
  var S = String(defined(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};

module.exports = function (NAME, exec) {
  var O = {};
  O[NAME] = exec(createHTML);
  $export($export.P + $export.F * fails(function () {
    var test = ''[NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  }), 'String', O);
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_string-pad.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_string-pad.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-string-pad-start-end
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_to-length.js");

var repeat = __webpack_require__(/*! ./_string-repeat */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_string-repeat.js");

var defined = __webpack_require__(/*! ./_defined */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_defined.js");

module.exports = function (that, maxLength, fillString, left) {
  var S = String(defined(that));
  var stringLength = S.length;
  var fillStr = fillString === undefined ? ' ' : String(fillString);
  var intMaxLength = toLength(maxLength);
  if (intMaxLength <= stringLength || fillStr == '') return S;
  var fillLen = intMaxLength - stringLength;
  var stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
  if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
  return left ? stringFiller + S : S + stringFiller;
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_string-repeat.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_string-repeat.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_to-integer.js");

var defined = __webpack_require__(/*! ./_defined */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_defined.js");

module.exports = function repeat(count) {
  var str = String(defined(this));
  var res = '';
  var n = toInteger(count);
  if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");

  for (; n > 0; (n >>>= 1) && (str += str)) if (n & 1) res += str;

  return res;
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_string-trim.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_string-trim.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js");

var defined = __webpack_require__(/*! ./_defined */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_defined.js");

var fails = __webpack_require__(/*! ./_fails */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_fails.js");

var spaces = __webpack_require__(/*! ./_string-ws */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_string-ws.js");

var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
}; // 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim


var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_string-ws.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_string-ws.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' + '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_task.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_task.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_ctx.js");

var invoke = __webpack_require__(/*! ./_invoke */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_invoke.js");

var html = __webpack_require__(/*! ./_html */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_html.js");

var cel = __webpack_require__(/*! ./_dom-create */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_dom-create.js");

var global = __webpack_require__(/*! ./_global */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_global.js");

var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;

var run = function () {
  var id = +this; // eslint-disable-next-line no-prototype-builtins

  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};

var listener = function (event) {
  run.call(event.data);
}; // Node.js 0.9+ & IE10+ has setImmediate, otherwise:


if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;

    while (arguments.length > i) args.push(arguments[i++]);

    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };

    defer(counter);
    return counter;
  };

  clearTask = function clearImmediate(id) {
    delete queue[id];
  }; // Node.js 0.8-


  if (__webpack_require__(/*! ./_cof */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_cof.js")(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    }; // Sphere (JS game engine) Dispatch API

  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    }; // Browsers with MessageChannel, includes WebWorkers

  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1); // Browsers with postMessage, skip WebWorkers
    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };

    global.addEventListener('message', listener, false); // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    }; // Rest old browsers

  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}

module.exports = {
  set: setTask,
  clear: clearTask
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_to-absolute-index.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_to-absolute-index.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_to-integer.js");

var max = Math.max;
var min = Math.min;

module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_to-index.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_to-index.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/ecma262/#sec-toindex
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_to-integer.js");

var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_to-length.js");

module.exports = function (it) {
  if (it === undefined) return 0;
  var number = toInteger(it);
  var length = toLength(number);
  if (number !== length) throw RangeError('Wrong length!');
  return length;
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_to-integer.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_to-integer.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;

module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_to-iobject.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_to-iobject.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_iobject.js");

var defined = __webpack_require__(/*! ./_defined */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_defined.js");

module.exports = function (it) {
  return IObject(defined(it));
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_to-length.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_to-length.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_to-integer.js");

var min = Math.min;

module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_to-object.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_to-object.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_defined.js");

module.exports = function (it) {
  return Object(defined(it));
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_to-primitive.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_to-primitive.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_is-object.js"); // instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string


module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_typed-array.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_typed-array.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (__webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_descriptors.js")) {
  var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_library.js");

  var global = __webpack_require__(/*! ./_global */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_global.js");

  var fails = __webpack_require__(/*! ./_fails */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_fails.js");

  var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js");

  var $typed = __webpack_require__(/*! ./_typed */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_typed.js");

  var $buffer = __webpack_require__(/*! ./_typed-buffer */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_typed-buffer.js");

  var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_ctx.js");

  var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_an-instance.js");

  var propertyDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_property-desc.js");

  var hide = __webpack_require__(/*! ./_hide */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_hide.js");

  var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_redefine-all.js");

  var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_to-integer.js");

  var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_to-length.js");

  var toIndex = __webpack_require__(/*! ./_to-index */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_to-index.js");

  var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_to-absolute-index.js");

  var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_to-primitive.js");

  var has = __webpack_require__(/*! ./_has */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_has.js");

  var classof = __webpack_require__(/*! ./_classof */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_classof.js");

  var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_is-object.js");

  var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_to-object.js");

  var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_is-array-iter.js");

  var create = __webpack_require__(/*! ./_object-create */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-create.js");

  var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-gpo.js");

  var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-gopn.js").f;

  var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/core.get-iterator-method.js");

  var uid = __webpack_require__(/*! ./_uid */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_uid.js");

  var wks = __webpack_require__(/*! ./_wks */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_wks.js");

  var createArrayMethod = __webpack_require__(/*! ./_array-methods */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_array-methods.js");

  var createArrayIncludes = __webpack_require__(/*! ./_array-includes */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_array-includes.js");

  var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_species-constructor.js");

  var ArrayIterators = __webpack_require__(/*! ./es6.array.iterator */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.array.iterator.js");

  var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_iterators.js");

  var $iterDetect = __webpack_require__(/*! ./_iter-detect */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_iter-detect.js");

  var setSpecies = __webpack_require__(/*! ./_set-species */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_set-species.js");

  var arrayFill = __webpack_require__(/*! ./_array-fill */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_array-fill.js");

  var arrayCopyWithin = __webpack_require__(/*! ./_array-copy-within */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_array-copy-within.js");

  var $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-dp.js");

  var $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-gopd.js");

  var dP = $DP.f;
  var gOPD = $GOPD.f;
  var RangeError = global.RangeError;
  var TypeError = global.TypeError;
  var Uint8Array = global.Uint8Array;
  var ARRAY_BUFFER = 'ArrayBuffer';
  var SHARED_BUFFER = 'Shared' + ARRAY_BUFFER;
  var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
  var PROTOTYPE = 'prototype';
  var ArrayProto = Array[PROTOTYPE];
  var $ArrayBuffer = $buffer.ArrayBuffer;
  var $DataView = $buffer.DataView;
  var arrayForEach = createArrayMethod(0);
  var arrayFilter = createArrayMethod(2);
  var arraySome = createArrayMethod(3);
  var arrayEvery = createArrayMethod(4);
  var arrayFind = createArrayMethod(5);
  var arrayFindIndex = createArrayMethod(6);
  var arrayIncludes = createArrayIncludes(true);
  var arrayIndexOf = createArrayIncludes(false);
  var arrayValues = ArrayIterators.values;
  var arrayKeys = ArrayIterators.keys;
  var arrayEntries = ArrayIterators.entries;
  var arrayLastIndexOf = ArrayProto.lastIndexOf;
  var arrayReduce = ArrayProto.reduce;
  var arrayReduceRight = ArrayProto.reduceRight;
  var arrayJoin = ArrayProto.join;
  var arraySort = ArrayProto.sort;
  var arraySlice = ArrayProto.slice;
  var arrayToString = ArrayProto.toString;
  var arrayToLocaleString = ArrayProto.toLocaleString;
  var ITERATOR = wks('iterator');
  var TAG = wks('toStringTag');
  var TYPED_CONSTRUCTOR = uid('typed_constructor');
  var DEF_CONSTRUCTOR = uid('def_constructor');
  var ALL_CONSTRUCTORS = $typed.CONSTR;
  var TYPED_ARRAY = $typed.TYPED;
  var VIEW = $typed.VIEW;
  var WRONG_LENGTH = 'Wrong length!';
  var $map = createArrayMethod(1, function (O, length) {
    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
  });
  var LITTLE_ENDIAN = fails(function () {
    // eslint-disable-next-line no-undef
    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
  });
  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function () {
    new Uint8Array(1).set({});
  });

  var toOffset = function (it, BYTES) {
    var offset = toInteger(it);
    if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');
    return offset;
  };

  var validate = function (it) {
    if (isObject(it) && TYPED_ARRAY in it) return it;
    throw TypeError(it + ' is not a typed array!');
  };

  var allocate = function (C, length) {
    if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {
      throw TypeError('It is not a typed array constructor!');
    }

    return new C(length);
  };

  var speciesFromList = function (O, list) {
    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
  };

  var fromList = function (C, list) {
    var index = 0;
    var length = list.length;
    var result = allocate(C, length);

    while (length > index) result[index] = list[index++];

    return result;
  };

  var addGetter = function (it, key, internal) {
    dP(it, key, {
      get: function () {
        return this._d[internal];
      }
    });
  };

  var $from = function from(source
  /* , mapfn, thisArg */
  ) {
    var O = toObject(source);
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var iterFn = getIterFn(O);
    var i, length, values, result, step, iterator;

    if (iterFn != undefined && !isArrayIter(iterFn)) {
      for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {
        values.push(step.value);
      }

      O = values;
    }

    if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);

    for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {
      result[i] = mapping ? mapfn(O[i], i) : O[i];
    }

    return result;
  };

  var $of = function of()
  /* ...items */
  {
    var index = 0;
    var length = arguments.length;
    var result = allocate(this, length);

    while (length > index) result[index] = arguments[index++];

    return result;
  }; // iOS Safari 6.x fails here


  var TO_LOCALE_BUG = !!Uint8Array && fails(function () {
    arrayToLocaleString.call(new Uint8Array(1));
  });

  var $toLocaleString = function toLocaleString() {
    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
  };

  var proto = {
    copyWithin: function copyWithin(target, start
    /* , end */
    ) {
      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
    },
    every: function every(callbackfn
    /* , thisArg */
    ) {
      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    fill: function fill(value
    /* , start, end */
    ) {
      // eslint-disable-line no-unused-vars
      return arrayFill.apply(validate(this), arguments);
    },
    filter: function filter(callbackfn
    /* , thisArg */
    ) {
      return speciesFromList(this, arrayFilter(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined));
    },
    find: function find(predicate
    /* , thisArg */
    ) {
      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    findIndex: function findIndex(predicate
    /* , thisArg */
    ) {
      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    forEach: function forEach(callbackfn
    /* , thisArg */
    ) {
      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    indexOf: function indexOf(searchElement
    /* , fromIndex */
    ) {
      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    includes: function includes(searchElement
    /* , fromIndex */
    ) {
      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    join: function join(separator) {
      // eslint-disable-line no-unused-vars
      return arrayJoin.apply(validate(this), arguments);
    },
    lastIndexOf: function lastIndexOf(searchElement
    /* , fromIndex */
    ) {
      // eslint-disable-line no-unused-vars
      return arrayLastIndexOf.apply(validate(this), arguments);
    },
    map: function map(mapfn
    /* , thisArg */
    ) {
      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    reduce: function reduce(callbackfn
    /* , initialValue */
    ) {
      // eslint-disable-line no-unused-vars
      return arrayReduce.apply(validate(this), arguments);
    },
    reduceRight: function reduceRight(callbackfn
    /* , initialValue */
    ) {
      // eslint-disable-line no-unused-vars
      return arrayReduceRight.apply(validate(this), arguments);
    },
    reverse: function reverse() {
      var that = this;
      var length = validate(that).length;
      var middle = Math.floor(length / 2);
      var index = 0;
      var value;

      while (index < middle) {
        value = that[index];
        that[index++] = that[--length];
        that[length] = value;
      }

      return that;
    },
    some: function some(callbackfn
    /* , thisArg */
    ) {
      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    sort: function sort(comparefn) {
      return arraySort.call(validate(this), comparefn);
    },
    subarray: function subarray(begin, end) {
      var O = validate(this);
      var length = O.length;
      var $begin = toAbsoluteIndex(begin, length);
      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(O.buffer, O.byteOffset + $begin * O.BYTES_PER_ELEMENT, toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin));
    }
  };

  var $slice = function slice(start, end) {
    return speciesFromList(this, arraySlice.call(validate(this), start, end));
  };

  var $set = function set(arrayLike
  /* , offset */
  ) {
    validate(this);
    var offset = toOffset(arguments[1], 1);
    var length = this.length;
    var src = toObject(arrayLike);
    var len = toLength(src.length);
    var index = 0;
    if (len + offset > length) throw RangeError(WRONG_LENGTH);

    while (index < len) this[offset + index] = src[index++];
  };

  var $iterators = {
    entries: function entries() {
      return arrayEntries.call(validate(this));
    },
    keys: function keys() {
      return arrayKeys.call(validate(this));
    },
    values: function values() {
      return arrayValues.call(validate(this));
    }
  };

  var isTAIndex = function (target, key) {
    return isObject(target) && target[TYPED_ARRAY] && typeof key != 'symbol' && key in target && String(+key) == String(key);
  };

  var $getDesc = function getOwnPropertyDescriptor(target, key) {
    return isTAIndex(target, key = toPrimitive(key, true)) ? propertyDesc(2, target[key]) : gOPD(target, key);
  };

  var $setDesc = function defineProperty(target, key, desc) {
    if (isTAIndex(target, key = toPrimitive(key, true)) && isObject(desc) && has(desc, 'value') && !has(desc, 'get') && !has(desc, 'set') // TODO: add validation descriptor w/o calling accessors
    && !desc.configurable && (!has(desc, 'writable') || desc.writable) && (!has(desc, 'enumerable') || desc.enumerable)) {
      target[key] = desc.value;
      return target;
    }

    return dP(target, key, desc);
  };

  if (!ALL_CONSTRUCTORS) {
    $GOPD.f = $getDesc;
    $DP.f = $setDesc;
  }

  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
    getOwnPropertyDescriptor: $getDesc,
    defineProperty: $setDesc
  });

  if (fails(function () {
    arrayToString.call({});
  })) {
    arrayToString = arrayToLocaleString = function toString() {
      return arrayJoin.call(this);
    };
  }

  var $TypedArrayPrototype$ = redefineAll({}, proto);
  redefineAll($TypedArrayPrototype$, $iterators);
  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
  redefineAll($TypedArrayPrototype$, {
    slice: $slice,
    set: $set,
    constructor: function () {
      /* noop */
    },
    toString: arrayToString,
    toLocaleString: $toLocaleString
  });
  addGetter($TypedArrayPrototype$, 'buffer', 'b');
  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
  addGetter($TypedArrayPrototype$, 'length', 'e');
  dP($TypedArrayPrototype$, TAG, {
    get: function () {
      return this[TYPED_ARRAY];
    }
  }); // eslint-disable-next-line max-statements

  module.exports = function (KEY, BYTES, wrapper, CLAMPED) {
    CLAMPED = !!CLAMPED;
    var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array';
    var GETTER = 'get' + KEY;
    var SETTER = 'set' + KEY;
    var TypedArray = global[NAME];
    var Base = TypedArray || {};
    var TAC = TypedArray && getPrototypeOf(TypedArray);
    var FORCED = !TypedArray || !$typed.ABV;
    var O = {};
    var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];

    var getter = function (that, index) {
      var data = that._d;
      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
    };

    var setter = function (that, index, value) {
      var data = that._d;
      if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
    };

    var addElement = function (that, index) {
      dP(that, index, {
        get: function () {
          return getter(this, index);
        },
        set: function (value) {
          return setter(this, index, value);
        },
        enumerable: true
      });
    };

    if (FORCED) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME, '_d');
        var index = 0;
        var offset = 0;
        var buffer, byteLength, length, klass;

        if (!isObject(data)) {
          length = toIndex(data);
          byteLength = length * BYTES;
          buffer = new $ArrayBuffer(byteLength);
        } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          buffer = data;
          offset = toOffset($offset, BYTES);
          var $len = data.byteLength;

          if ($length === undefined) {
            if ($len % BYTES) throw RangeError(WRONG_LENGTH);
            byteLength = $len - offset;
            if (byteLength < 0) throw RangeError(WRONG_LENGTH);
          } else {
            byteLength = toLength($length) * BYTES;
            if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);
          }

          length = byteLength / BYTES;
        } else if (TYPED_ARRAY in data) {
          return fromList(TypedArray, data);
        } else {
          return $from.call(TypedArray, data);
        }

        hide(that, '_d', {
          b: buffer,
          o: offset,
          l: byteLength,
          e: length,
          v: new $DataView(buffer)
        });

        while (index < length) addElement(that, index++);
      });
      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
      hide(TypedArrayPrototype, 'constructor', TypedArray);
    } else if (!fails(function () {
      TypedArray(1);
    }) || !fails(function () {
      new TypedArray(-1); // eslint-disable-line no-new
    }) || !$iterDetect(function (iter) {
      new TypedArray(); // eslint-disable-line no-new

      new TypedArray(null); // eslint-disable-line no-new

      new TypedArray(1.5); // eslint-disable-line no-new

      new TypedArray(iter); // eslint-disable-line no-new
    }, true)) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME);
        var klass; // `ws` module bug, temporarily remove validation length for Uint8Array
        // https://github.com/websockets/ws/pull/645

        if (!isObject(data)) return new Base(toIndex(data));

        if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          return $length !== undefined ? new Base(data, toOffset($offset, BYTES), $length) : $offset !== undefined ? new Base(data, toOffset($offset, BYTES)) : new Base(data);
        }

        if (TYPED_ARRAY in data) return fromList(TypedArray, data);
        return $from.call(TypedArray, data);
      });
      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {
        if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);
      });
      TypedArray[PROTOTYPE] = TypedArrayPrototype;
      if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;
    }

    var $nativeIterator = TypedArrayPrototype[ITERATOR];
    var CORRECT_ITER_NAME = !!$nativeIterator && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined);
    var $iterator = $iterators.values;
    hide(TypedArray, TYPED_CONSTRUCTOR, true);
    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
    hide(TypedArrayPrototype, VIEW, true);
    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

    if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
      dP(TypedArrayPrototype, TAG, {
        get: function () {
          return NAME;
        }
      });
    }

    O[NAME] = TypedArray;
    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);
    $export($export.S, NAME, {
      BYTES_PER_ELEMENT: BYTES
    });
    $export($export.S + $export.F * fails(function () {
      Base.of.call(TypedArray, 1);
    }), NAME, {
      from: $from,
      of: $of
    });
    if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);
    $export($export.P, NAME, proto);
    setSpecies(NAME);
    $export($export.P + $export.F * FORCED_SET, NAME, {
      set: $set
    });
    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);
    if (!LIBRARY && TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;
    $export($export.P + $export.F * fails(function () {
      new TypedArray(1).slice();
    }), NAME, {
      slice: $slice
    });
    $export($export.P + $export.F * (fails(function () {
      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();
    }) || !fails(function () {
      TypedArrayPrototype.toLocaleString.call([1, 2]);
    })), NAME, {
      toLocaleString: $toLocaleString
    });
    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
    if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);
  };
} else module.exports = function () {
  /* empty */
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_typed-buffer.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_typed-buffer.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__(/*! ./_global */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_global.js");

var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_descriptors.js");

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_library.js");

var $typed = __webpack_require__(/*! ./_typed */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_typed.js");

var hide = __webpack_require__(/*! ./_hide */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_hide.js");

var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_redefine-all.js");

var fails = __webpack_require__(/*! ./_fails */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_fails.js");

var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_an-instance.js");

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_to-integer.js");

var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_to-length.js");

var toIndex = __webpack_require__(/*! ./_to-index */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_to-index.js");

var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-gopn.js").f;

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-dp.js").f;

var arrayFill = __webpack_require__(/*! ./_array-fill */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_array-fill.js");

var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_set-to-string-tag.js");

var ARRAY_BUFFER = 'ArrayBuffer';
var DATA_VIEW = 'DataView';
var PROTOTYPE = 'prototype';
var WRONG_LENGTH = 'Wrong length!';
var WRONG_INDEX = 'Wrong index!';
var $ArrayBuffer = global[ARRAY_BUFFER];
var $DataView = global[DATA_VIEW];
var Math = global.Math;
var RangeError = global.RangeError; // eslint-disable-next-line no-shadow-restricted-names

var Infinity = global.Infinity;
var BaseBuffer = $ArrayBuffer;
var abs = Math.abs;
var pow = Math.pow;
var floor = Math.floor;
var log = Math.log;
var LN2 = Math.LN2;
var BUFFER = 'buffer';
var BYTE_LENGTH = 'byteLength';
var BYTE_OFFSET = 'byteOffset';
var $BUFFER = DESCRIPTORS ? '_b' : BUFFER;
var $LENGTH = DESCRIPTORS ? '_l' : BYTE_LENGTH;
var $OFFSET = DESCRIPTORS ? '_o' : BYTE_OFFSET; // IEEE754 conversions based on https://github.com/feross/ieee754

function packIEEE754(value, mLen, nBytes) {
  var buffer = new Array(nBytes);
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;
  var i = 0;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  var e, m, c;
  value = abs(value); // eslint-disable-next-line no-self-compare

  if (value != value || value === Infinity) {
    // eslint-disable-next-line no-self-compare
    m = value != value ? 1 : 0;
    e = eMax;
  } else {
    e = floor(log(value) / LN2);

    if (value * (c = pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }

    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * pow(2, 1 - eBias);
    }

    if (value * c >= 2) {
      e++;
      c /= 2;
    }

    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * pow(2, eBias - 1) * pow(2, mLen);
      e = 0;
    }
  }

  for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);

  e = e << mLen | m;
  eLen += mLen;

  for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);

  buffer[--i] |= s * 128;
  return buffer;
}

function unpackIEEE754(buffer, mLen, nBytes) {
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = eLen - 7;
  var i = nBytes - 1;
  var s = buffer[i--];
  var e = s & 127;
  var m;
  s >>= 7;

  for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);

  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;

  for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);

  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : s ? -Infinity : Infinity;
  } else {
    m = m + pow(2, mLen);
    e = e - eBias;
  }

  return (s ? -1 : 1) * m * pow(2, e - mLen);
}

function unpackI32(bytes) {
  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
}

function packI8(it) {
  return [it & 0xff];
}

function packI16(it) {
  return [it & 0xff, it >> 8 & 0xff];
}

function packI32(it) {
  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
}

function packF64(it) {
  return packIEEE754(it, 52, 8);
}

function packF32(it) {
  return packIEEE754(it, 23, 4);
}

function addGetter(C, key, internal) {
  dP(C[PROTOTYPE], key, {
    get: function () {
      return this[internal];
    }
  });
}

function get(view, bytes, index, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = store.slice(start, start + bytes);
  return isLittleEndian ? pack : pack.reverse();
}

function set(view, bytes, index, conversion, value, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = conversion(+value);

  for (var i = 0; i < bytes; i++) store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
}

if (!$typed.ABV) {
  $ArrayBuffer = function ArrayBuffer(length) {
    anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
    var byteLength = toIndex(length);
    this._b = arrayFill.call(new Array(byteLength), 0);
    this[$LENGTH] = byteLength;
  };

  $DataView = function DataView(buffer, byteOffset, byteLength) {
    anInstance(this, $DataView, DATA_VIEW);
    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
    var bufferLength = buffer[$LENGTH];
    var offset = toInteger(byteOffset);
    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');
    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
    this[$BUFFER] = buffer;
    this[$OFFSET] = offset;
    this[$LENGTH] = byteLength;
  };

  if (DESCRIPTORS) {
    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
    addGetter($DataView, BUFFER, '_b');
    addGetter($DataView, BYTE_LENGTH, '_l');
    addGetter($DataView, BYTE_OFFSET, '_o');
  }

  redefineAll($DataView[PROTOTYPE], {
    getInt8: function getInt8(byteOffset) {
      return get(this, 1, byteOffset)[0] << 24 >> 24;
    },
    getUint8: function getUint8(byteOffset) {
      return get(this, 1, byteOffset)[0];
    },
    getInt16: function getInt16(byteOffset
    /* , littleEndian */
    ) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
    },
    getUint16: function getUint16(byteOffset
    /* , littleEndian */
    ) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return bytes[1] << 8 | bytes[0];
    },
    getInt32: function getInt32(byteOffset
    /* , littleEndian */
    ) {
      return unpackI32(get(this, 4, byteOffset, arguments[1]));
    },
    getUint32: function getUint32(byteOffset
    /* , littleEndian */
    ) {
      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
    },
    getFloat32: function getFloat32(byteOffset
    /* , littleEndian */
    ) {
      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
    },
    getFloat64: function getFloat64(byteOffset
    /* , littleEndian */
    ) {
      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
    },
    setInt8: function setInt8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setUint8: function setUint8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setInt16: function setInt16(byteOffset, value
    /* , littleEndian */
    ) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setUint16: function setUint16(byteOffset, value
    /* , littleEndian */
    ) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setInt32: function setInt32(byteOffset, value
    /* , littleEndian */
    ) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setUint32: function setUint32(byteOffset, value
    /* , littleEndian */
    ) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setFloat32: function setFloat32(byteOffset, value
    /* , littleEndian */
    ) {
      set(this, 4, byteOffset, packF32, value, arguments[2]);
    },
    setFloat64: function setFloat64(byteOffset, value
    /* , littleEndian */
    ) {
      set(this, 8, byteOffset, packF64, value, arguments[2]);
    }
  });
} else {
  if (!fails(function () {
    $ArrayBuffer(1);
  }) || !fails(function () {
    new $ArrayBuffer(-1); // eslint-disable-line no-new
  }) || fails(function () {
    new $ArrayBuffer(); // eslint-disable-line no-new

    new $ArrayBuffer(1.5); // eslint-disable-line no-new

    new $ArrayBuffer(NaN); // eslint-disable-line no-new

    return $ArrayBuffer.name != ARRAY_BUFFER;
  })) {
    $ArrayBuffer = function ArrayBuffer(length) {
      anInstance(this, $ArrayBuffer);
      return new BaseBuffer(toIndex(length));
    };

    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];

    for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {
      if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);
    }

    if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;
  } // iOS Safari 7.x bug


  var view = new $DataView(new $ArrayBuffer(2));
  var $setInt8 = $DataView[PROTOTYPE].setInt8;
  view.setInt8(0, 2147483648);
  view.setInt8(1, 2147483649);
  if (view.getInt8(0) || !view.getInt8(1)) redefineAll($DataView[PROTOTYPE], {
    setInt8: function setInt8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    },
    setUint8: function setUint8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    }
  }, true);
}

setToStringTag($ArrayBuffer, ARRAY_BUFFER);
setToStringTag($DataView, DATA_VIEW);
hide($DataView[PROTOTYPE], $typed.VIEW, true);
exports[ARRAY_BUFFER] = $ArrayBuffer;
exports[DATA_VIEW] = $DataView;

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_typed.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_typed.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_global.js");

var hide = __webpack_require__(/*! ./_hide */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_hide.js");

var uid = __webpack_require__(/*! ./_uid */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_uid.js");

var TYPED = uid('typed_array');
var VIEW = uid('view');
var ABV = !!(global.ArrayBuffer && global.DataView);
var CONSTR = ABV;
var i = 0;
var l = 9;
var Typed;
var TypedArrayConstructors = 'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'.split(',');

while (i < l) {
  if (Typed = global[TypedArrayConstructors[i++]]) {
    hide(Typed.prototype, TYPED, true);
    hide(Typed.prototype, VIEW, true);
  } else CONSTR = false;
}

module.exports = {
  ABV: ABV,
  CONSTR: CONSTR,
  TYPED: TYPED,
  VIEW: VIEW
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_uid.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_uid.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();

module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_user-agent.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_user-agent.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_global.js");

var navigator = global.navigator;
module.exports = navigator && navigator.userAgent || '';

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_validate-collection.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_validate-collection.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_is-object.js");

module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_wks-define.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_wks-define.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_global.js");

var core = __webpack_require__(/*! ./_core */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_core.js");

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_library.js");

var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_wks-ext.js");

var defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-dp.js").f;

module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, {
    value: wksExt.f(name)
  });
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_wks-ext.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_wks-ext.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(/*! ./_wks */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_wks.js");

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_wks.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/_wks.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_shared.js")('wks');

var uid = __webpack_require__(/*! ./_uid */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_uid.js");

var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_global.js").Symbol;

var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] = USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/core.get-iterator-method.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/core.get-iterator-method.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_classof.js");

var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_wks.js")('iterator');

var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_iterators.js");

module.exports = __webpack_require__(/*! ./_core */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_core.js").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
};

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.array.copy-within.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.array.copy-within.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js");

$export($export.P, 'Array', {
  copyWithin: __webpack_require__(/*! ./_array-copy-within */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_array-copy-within.js")
});

__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_add-to-unscopables.js")('copyWithin');

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.array.every.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.array.every.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js");

var $every = __webpack_require__(/*! ./_array-methods */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_array-methods.js")(4);

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_strict-method.js")([].every, true), 'Array', {
  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
  every: function every(callbackfn
  /* , thisArg */
  ) {
    return $every(this, callbackfn, arguments[1]);
  }
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.array.fill.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.array.fill.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js");

$export($export.P, 'Array', {
  fill: __webpack_require__(/*! ./_array-fill */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_array-fill.js")
});

__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_add-to-unscopables.js")('fill');

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.array.filter.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.array.filter.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js");

var $filter = __webpack_require__(/*! ./_array-methods */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_array-methods.js")(2);

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_strict-method.js")([].filter, true), 'Array', {
  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
  filter: function filter(callbackfn
  /* , thisArg */
  ) {
    return $filter(this, callbackfn, arguments[1]);
  }
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.array.find-index.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.array.find-index.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)

var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js");

var $find = __webpack_require__(/*! ./_array-methods */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_array-methods.js")(6);

var KEY = 'findIndex';
var forced = true; // Shouldn't skip holes

if (KEY in []) Array(1)[KEY](function () {
  forced = false;
});
$export($export.P + $export.F * forced, 'Array', {
  findIndex: function findIndex(callbackfn
  /* , that = undefined */
  ) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_add-to-unscopables.js")(KEY);

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.array.find.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.array.find.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)

var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js");

var $find = __webpack_require__(/*! ./_array-methods */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_array-methods.js")(5);

var KEY = 'find';
var forced = true; // Shouldn't skip holes

if (KEY in []) Array(1)[KEY](function () {
  forced = false;
});
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn
  /* , that = undefined */
  ) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_add-to-unscopables.js")(KEY);

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.array.for-each.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.array.for-each.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js");

var $forEach = __webpack_require__(/*! ./_array-methods */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_array-methods.js")(0);

var STRICT = __webpack_require__(/*! ./_strict-method */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_strict-method.js")([].forEach, true);

$export($export.P + $export.F * !STRICT, 'Array', {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: function forEach(callbackfn
  /* , thisArg */
  ) {
    return $forEach(this, callbackfn, arguments[1]);
  }
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.array.from.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.array.from.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_ctx.js");

var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js");

var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_to-object.js");

var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_iter-call.js");

var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_is-array-iter.js");

var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_to-length.js");

var createProperty = __webpack_require__(/*! ./_create-property */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_create-property.js");

var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/core.get-iterator-method.js");

$export($export.S + $export.F * !__webpack_require__(/*! ./_iter-detect */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_iter-detect.js")(function (iter) {
  Array.from(iter);
}), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike
  /* , mapfn = undefined, thisArg = undefined */
  ) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2); // if object isn't iterable or it's array with default iterator - use simple case

    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);

      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }

    result.length = index;
    return result;
  }
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.array.index-of.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.array.index-of.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js");

var $indexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_array-includes.js")(false);

var $native = [].indexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;
$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(/*! ./_strict-method */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_strict-method.js")($native)), 'Array', {
  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
  indexOf: function indexOf(searchElement
  /* , fromIndex = 0 */
  ) {
    return NEGATIVE_ZERO // convert -0 to +0
    ? $native.apply(this, arguments) || 0 : $indexOf(this, searchElement, arguments[1]);
  }
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.array.is-array.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.array.is-array.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js");

$export($export.S, 'Array', {
  isArray: __webpack_require__(/*! ./_is-array */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_is-array.js")
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.array.iterator.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.array.iterator.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_add-to-unscopables.js");

var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_iter-step.js");

var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_iterators.js");

var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_to-iobject.js"); // 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()


module.exports = __webpack_require__(/*! ./_iter-define */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target

  this._i = 0; // next index

  this._k = kind; // kind
  // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;

  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }

  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values'); // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)

Iterators.Arguments = Iterators.Array;
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.array.join.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.array.join.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // 22.1.3.13 Array.prototype.join(separator)

var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js");

var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_to-iobject.js");

var arrayJoin = [].join; // fallback for not array-like strings

$export($export.P + $export.F * (__webpack_require__(/*! ./_iobject */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_iobject.js") != Object || !__webpack_require__(/*! ./_strict-method */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_strict-method.js")(arrayJoin)), 'Array', {
  join: function join(separator) {
    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
  }
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.array.last-index-of.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.array.last-index-of.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js");

var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_to-iobject.js");

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_to-integer.js");

var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_to-length.js");

var $native = [].lastIndexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;
$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(/*! ./_strict-method */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_strict-method.js")($native)), 'Array', {
  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
  lastIndexOf: function lastIndexOf(searchElement
  /* , fromIndex = @[*-1] */
  ) {
    // convert -0 to +0
    if (NEGATIVE_ZERO) return $native.apply(this, arguments) || 0;
    var O = toIObject(this);
    var length = toLength(O.length);
    var index = length - 1;
    if (arguments.length > 1) index = Math.min(index, toInteger(arguments[1]));
    if (index < 0) index = length + index;

    for (; index >= 0; index--) if (index in O) if (O[index] === searchElement) return index || 0;

    return -1;
  }
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.array.map.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.array.map.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js");

var $map = __webpack_require__(/*! ./_array-methods */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_array-methods.js")(1);

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_strict-method.js")([].map, true), 'Array', {
  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
  map: function map(callbackfn
  /* , thisArg */
  ) {
    return $map(this, callbackfn, arguments[1]);
  }
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.array.of.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.array.of.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js");

var createProperty = __webpack_require__(/*! ./_create-property */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_create-property.js"); // WebKit Array.of isn't generic


$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_fails.js")(function () {
  function F() {
    /* empty */
  }

  return !(Array.of.call(F) instanceof F);
}), 'Array', {
  // 22.1.2.3 Array.of( ...items)
  of: function of()
  /* ...args */
  {
    var index = 0;
    var aLen = arguments.length;
    var result = new (typeof this == 'function' ? this : Array)(aLen);

    while (aLen > index) createProperty(result, index, arguments[index++]);

    result.length = aLen;
    return result;
  }
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.array.reduce-right.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.array.reduce-right.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js");

var $reduce = __webpack_require__(/*! ./_array-reduce */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_array-reduce.js");

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_strict-method.js")([].reduceRight, true), 'Array', {
  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
  reduceRight: function reduceRight(callbackfn
  /* , initialValue */
  ) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
  }
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.array.reduce.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.array.reduce.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js");

var $reduce = __webpack_require__(/*! ./_array-reduce */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_array-reduce.js");

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_strict-method.js")([].reduce, true), 'Array', {
  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
  reduce: function reduce(callbackfn
  /* , initialValue */
  ) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
  }
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.array.slice.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.array.slice.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js");

var html = __webpack_require__(/*! ./_html */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_html.js");

var cof = __webpack_require__(/*! ./_cof */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_cof.js");

var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_to-absolute-index.js");

var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_to-length.js");

var arraySlice = [].slice; // fallback for not array-like ES3 strings and DOM objects

$export($export.P + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_fails.js")(function () {
  if (html) arraySlice.call(html);
}), 'Array', {
  slice: function slice(begin, end) {
    var len = toLength(this.length);
    var klass = cof(this);
    end = end === undefined ? len : end;
    if (klass == 'Array') return arraySlice.call(this, begin, end);
    var start = toAbsoluteIndex(begin, len);
    var upTo = toAbsoluteIndex(end, len);
    var size = toLength(upTo - start);
    var cloned = new Array(size);
    var i = 0;

    for (; i < size; i++) cloned[i] = klass == 'String' ? this.charAt(start + i) : this[start + i];

    return cloned;
  }
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.array.some.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.array.some.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js");

var $some = __webpack_require__(/*! ./_array-methods */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_array-methods.js")(3);

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_strict-method.js")([].some, true), 'Array', {
  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
  some: function some(callbackfn
  /* , thisArg */
  ) {
    return $some(this, callbackfn, arguments[1]);
  }
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.array.sort.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.array.sort.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js");

var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_a-function.js");

var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_to-object.js");

var fails = __webpack_require__(/*! ./_fails */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_fails.js");

var $sort = [].sort;
var test = [1, 2, 3];
$export($export.P + $export.F * (fails(function () {
  // IE8-
  test.sort(undefined);
}) || !fails(function () {
  // V8 bug
  test.sort(null); // Old WebKit
}) || !__webpack_require__(/*! ./_strict-method */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_strict-method.js")($sort)), 'Array', {
  // 22.1.3.25 Array.prototype.sort(comparefn)
  sort: function sort(comparefn) {
    return comparefn === undefined ? $sort.call(toObject(this)) : $sort.call(toObject(this), aFunction(comparefn));
  }
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.array.species.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.array.species.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_set-species */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_set-species.js")('Array');

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.date.now.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.date.now.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.3.3.1 / 15.9.4.4 Date.now()
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js");

$export($export.S, 'Date', {
  now: function () {
    return new Date().getTime();
  }
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.date.to-iso-string.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.date.to-iso-string.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js");

var toISOString = __webpack_require__(/*! ./_date-to-iso-string */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_date-to-iso-string.js"); // PhantomJS / old WebKit has a broken implementations


$export($export.P + $export.F * (Date.prototype.toISOString !== toISOString), 'Date', {
  toISOString: toISOString
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.date.to-json.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.date.to-json.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js");

var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_to-object.js");

var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_to-primitive.js");

$export($export.P + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_fails.js")(function () {
  return new Date(NaN).toJSON() !== null || Date.prototype.toJSON.call({
    toISOString: function () {
      return 1;
    }
  }) !== 1;
}), 'Date', {
  // eslint-disable-next-line no-unused-vars
  toJSON: function toJSON(key) {
    var O = toObject(this);
    var pv = toPrimitive(O);
    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
  }
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.date.to-primitive.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.date.to-primitive.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var TO_PRIMITIVE = __webpack_require__(/*! ./_wks */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_wks.js")('toPrimitive');

var proto = Date.prototype;
if (!(TO_PRIMITIVE in proto)) __webpack_require__(/*! ./_hide */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_hide.js")(proto, TO_PRIMITIVE, __webpack_require__(/*! ./_date-to-primitive */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_date-to-primitive.js"));

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.date.to-string.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.date.to-string.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DateProto = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var $toString = DateProto[TO_STRING];
var getTime = DateProto.getTime;

if (new Date(NaN) + '' != INVALID_DATE) {
  __webpack_require__(/*! ./_redefine */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_redefine.js")(DateProto, TO_STRING, function toString() {
    var value = getTime.call(this); // eslint-disable-next-line no-self-compare

    return value === value ? $toString.call(this) : INVALID_DATE;
  });
}

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.function.bind.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.function.bind.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js");

$export($export.P, 'Function', {
  bind: __webpack_require__(/*! ./_bind */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_bind.js")
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.function.has-instance.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.function.has-instance.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_is-object.js");

var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-gpo.js");

var HAS_INSTANCE = __webpack_require__(/*! ./_wks */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_wks.js")('hasInstance');

var FunctionProto = Function.prototype; // 19.2.3.6 Function.prototype[@@hasInstance](V)

if (!(HAS_INSTANCE in FunctionProto)) __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-dp.js").f(FunctionProto, HAS_INSTANCE, {
  value: function (O) {
    if (typeof this != 'function' || !isObject(O)) return false;
    if (!isObject(this.prototype)) return O instanceof this; // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:

    while (O = getPrototypeOf(O)) if (this.prototype === O) return true;

    return false;
  }
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.function.name.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.function.name.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-dp.js").f;

var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name'; // 19.2.4.2 name

NAME in FProto || __webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_descriptors.js") && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.map.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.map.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var strong = __webpack_require__(/*! ./_collection-strong */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_collection-strong.js");

var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_validate-collection.js");

var MAP = 'Map'; // 23.1 Map Objects

module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_collection.js")(MAP, function (get) {
  return function Map() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.math.acosh.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.math.acosh.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.3 Math.acosh(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js");

var log1p = __webpack_require__(/*! ./_math-log1p */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_math-log1p.js");

var sqrt = Math.sqrt;
var $acosh = Math.acosh;
$export($export.S + $export.F * !($acosh // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
&& Math.floor($acosh(Number.MAX_VALUE)) == 710 // Tor Browser bug: Math.acosh(Infinity) -> NaN
&& $acosh(Infinity) == Infinity), 'Math', {
  acosh: function acosh(x) {
    return (x = +x) < 1 ? NaN : x > 94906265.62425156 ? Math.log(x) + Math.LN2 : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
  }
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.math.asinh.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.math.asinh.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.5 Math.asinh(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js");

var $asinh = Math.asinh;

function asinh(x) {
  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
} // Tor Browser bug: Math.asinh(0) -> -0


$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', {
  asinh: asinh
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.math.atanh.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.math.atanh.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.7 Math.atanh(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js");

var $atanh = Math.atanh; // Tor Browser bug: Math.atanh(-0) -> 0

$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
  atanh: function atanh(x) {
    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
  }
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.math.cbrt.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.math.cbrt.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.9 Math.cbrt(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js");

var sign = __webpack_require__(/*! ./_math-sign */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_math-sign.js");

$export($export.S, 'Math', {
  cbrt: function cbrt(x) {
    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
  }
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.math.clz32.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.math.clz32.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.11 Math.clz32(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  clz32: function clz32(x) {
    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
  }
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.math.cosh.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.math.cosh.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.12 Math.cosh(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js");

var exp = Math.exp;
$export($export.S, 'Math', {
  cosh: function cosh(x) {
    return (exp(x = +x) + exp(-x)) / 2;
  }
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.math.expm1.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.math.expm1.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.14 Math.expm1(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js");

var $expm1 = __webpack_require__(/*! ./_math-expm1 */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_math-expm1.js");

$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', {
  expm1: $expm1
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.math.fround.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.math.fround.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.16 Math.fround(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  fround: __webpack_require__(/*! ./_math-fround */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_math-fround.js")
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.math.hypot.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.math.hypot.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js");

var abs = Math.abs;
$export($export.S, 'Math', {
  hypot: function hypot(value1, value2) {
    // eslint-disable-line no-unused-vars
    var sum = 0;
    var i = 0;
    var aLen = arguments.length;
    var larg = 0;
    var arg, div;

    while (i < aLen) {
      arg = abs(arguments[i++]);

      if (larg < arg) {
        div = larg / arg;
        sum = sum * div * div + 1;
        larg = arg;
      } else if (arg > 0) {
        div = arg / larg;
        sum += div * div;
      } else sum += arg;
    }

    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
  }
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.math.imul.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.math.imul.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.18 Math.imul(x, y)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js");

var $imul = Math.imul; // some WebKit versions fails with big numbers, some has wrong arity

$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_fails.js")(function () {
  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
}), 'Math', {
  imul: function imul(x, y) {
    var UINT16 = 0xffff;
    var xn = +x;
    var yn = +y;
    var xl = UINT16 & xn;
    var yl = UINT16 & yn;
    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
  }
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.math.log10.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.math.log10.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.21 Math.log10(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  log10: function log10(x) {
    return Math.log(x) * Math.LOG10E;
  }
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.math.log1p.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.math.log1p.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.20 Math.log1p(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  log1p: __webpack_require__(/*! ./_math-log1p */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_math-log1p.js")
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.math.log2.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.math.log2.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.22 Math.log2(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  log2: function log2(x) {
    return Math.log(x) / Math.LN2;
  }
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.math.sign.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.math.sign.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.28 Math.sign(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  sign: __webpack_require__(/*! ./_math-sign */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_math-sign.js")
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.math.sinh.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.math.sinh.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.30 Math.sinh(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js");

var expm1 = __webpack_require__(/*! ./_math-expm1 */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_math-expm1.js");

var exp = Math.exp; // V8 near Chromium 38 has a problem with very small numbers

$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_fails.js")(function () {
  return !Math.sinh(-2e-17) != -2e-17;
}), 'Math', {
  sinh: function sinh(x) {
    return Math.abs(x = +x) < 1 ? (expm1(x) - expm1(-x)) / 2 : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
  }
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.math.tanh.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.math.tanh.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.33 Math.tanh(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js");

var expm1 = __webpack_require__(/*! ./_math-expm1 */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_math-expm1.js");

var exp = Math.exp;
$export($export.S, 'Math', {
  tanh: function tanh(x) {
    var a = expm1(x = +x);
    var b = expm1(-x);
    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
  }
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.math.trunc.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.math.trunc.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.34 Math.trunc(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  trunc: function trunc(it) {
    return (it > 0 ? Math.floor : Math.ceil)(it);
  }
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.number.constructor.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.number.constructor.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__(/*! ./_global */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_global.js");

var has = __webpack_require__(/*! ./_has */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_has.js");

var cof = __webpack_require__(/*! ./_cof */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_cof.js");

var inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_inherit-if-required.js");

var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_to-primitive.js");

var fails = __webpack_require__(/*! ./_fails */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_fails.js");

var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-gopn.js").f;

var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-gopd.js").f;

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-dp.js").f;

var $trim = __webpack_require__(/*! ./_string-trim */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_string-trim.js").trim;

var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype; // Opera ~12 has broken Object#toString

var BROKEN_COF = cof(__webpack_require__(/*! ./_object-create */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-create.js")(proto)) == NUMBER;
var TRIM = ('trim' in String.prototype); // 7.1.3 ToNumber(argument)

var toNumber = function (argument) {
  var it = toPrimitive(argument, false);

  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;

    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66:
        case 98:
          radix = 2;
          maxCode = 49;
          break;
        // fast equal /^0b[01]+$/i

        case 79:
        case 111:
          radix = 8;
          maxCode = 55;
          break;
        // fast equal /^0o[0-7]+$/i

        default:
          return +it;
      }

      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i); // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols

        if (code < 48 || code > maxCode) return NaN;
      }

      return parseInt(digits, radix);
    }
  }

  return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number // check on 1..constructor(foo) case
    && (BROKEN_COF ? fails(function () {
      proto.valueOf.call(that);
    }) : cof(that) != NUMBER) ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };

  for (var keys = __webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_descriptors.js") ? gOPN(Base) : ( // ES3:
  'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' + // ES6 (in case, if modules with ES6 Number statics required before):
  'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' + 'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger').split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }

  $Number.prototype = proto;
  proto.constructor = $Number;

  __webpack_require__(/*! ./_redefine */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_redefine.js")(global, NUMBER, $Number);
}

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.number.epsilon.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.number.epsilon.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.1 Number.EPSILON
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js");

$export($export.S, 'Number', {
  EPSILON: Math.pow(2, -52)
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.number.is-finite.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.number.is-finite.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.2 Number.isFinite(number)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js");

var _isFinite = __webpack_require__(/*! ./_global */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_global.js").isFinite;

$export($export.S, 'Number', {
  isFinite: function isFinite(it) {
    return typeof it == 'number' && _isFinite(it);
  }
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.number.is-integer.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.number.is-integer.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js");

$export($export.S, 'Number', {
  isInteger: __webpack_require__(/*! ./_is-integer */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_is-integer.js")
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.number.is-nan.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.number.is-nan.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.4 Number.isNaN(number)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js");

$export($export.S, 'Number', {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare
    return number != number;
  }
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.number.is-safe-integer.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.number.is-safe-integer.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.5 Number.isSafeInteger(number)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js");

var isInteger = __webpack_require__(/*! ./_is-integer */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_is-integer.js");

var abs = Math.abs;
$export($export.S, 'Number', {
  isSafeInteger: function isSafeInteger(number) {
    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
  }
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.number.max-safe-integer.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.number.max-safe-integer.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.6 Number.MAX_SAFE_INTEGER
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js");

$export($export.S, 'Number', {
  MAX_SAFE_INTEGER: 0x1fffffffffffff
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.number.min-safe-integer.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.number.min-safe-integer.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.10 Number.MIN_SAFE_INTEGER
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js");

$export($export.S, 'Number', {
  MIN_SAFE_INTEGER: -0x1fffffffffffff
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.number.parse-float.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.number.parse-float.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js");

var $parseFloat = __webpack_require__(/*! ./_parse-float */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_parse-float.js"); // 20.1.2.12 Number.parseFloat(string)


$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', {
  parseFloat: $parseFloat
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.number.parse-int.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.number.parse-int.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js");

var $parseInt = __webpack_require__(/*! ./_parse-int */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_parse-int.js"); // 20.1.2.13 Number.parseInt(string, radix)


$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', {
  parseInt: $parseInt
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.number.to-fixed.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.number.to-fixed.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js");

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_to-integer.js");

var aNumberValue = __webpack_require__(/*! ./_a-number-value */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_a-number-value.js");

var repeat = __webpack_require__(/*! ./_string-repeat */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_string-repeat.js");

var $toFixed = 1.0.toFixed;
var floor = Math.floor;
var data = [0, 0, 0, 0, 0, 0];
var ERROR = 'Number.toFixed: incorrect invocation!';
var ZERO = '0';

var multiply = function (n, c) {
  var i = -1;
  var c2 = c;

  while (++i < 6) {
    c2 += n * data[i];
    data[i] = c2 % 1e7;
    c2 = floor(c2 / 1e7);
  }
};

var divide = function (n) {
  var i = 6;
  var c = 0;

  while (--i >= 0) {
    c += data[i];
    data[i] = floor(c / n);
    c = c % n * 1e7;
  }
};

var numToString = function () {
  var i = 6;
  var s = '';

  while (--i >= 0) {
    if (s !== '' || i === 0 || data[i] !== 0) {
      var t = String(data[i]);
      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
    }
  }

  return s;
};

var pow = function (x, n, acc) {
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};

var log = function (x) {
  var n = 0;
  var x2 = x;

  while (x2 >= 4096) {
    n += 12;
    x2 /= 4096;
  }

  while (x2 >= 2) {
    n += 1;
    x2 /= 2;
  }

  return n;
};

$export($export.P + $export.F * (!!$toFixed && (0.00008.toFixed(3) !== '0.000' || 0.9.toFixed(0) !== '1' || 1.255.toFixed(2) !== '1.25' || 1000000000000000128.0.toFixed(0) !== '1000000000000000128') || !__webpack_require__(/*! ./_fails */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_fails.js")(function () {
  // V8 ~ Android 4.3-
  $toFixed.call({});
})), 'Number', {
  toFixed: function toFixed(fractionDigits) {
    var x = aNumberValue(this, ERROR);
    var f = toInteger(fractionDigits);
    var s = '';
    var m = ZERO;
    var e, z, j, k;
    if (f < 0 || f > 20) throw RangeError(ERROR); // eslint-disable-next-line no-self-compare

    if (x != x) return 'NaN';
    if (x <= -1e21 || x >= 1e21) return String(x);

    if (x < 0) {
      s = '-';
      x = -x;
    }

    if (x > 1e-21) {
      e = log(x * pow(2, 69, 1)) - 69;
      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;

      if (e > 0) {
        multiply(0, z);
        j = f;

        while (j >= 7) {
          multiply(1e7, 0);
          j -= 7;
        }

        multiply(pow(10, j, 1), 0);
        j = e - 1;

        while (j >= 23) {
          divide(1 << 23);
          j -= 23;
        }

        divide(1 << j);
        multiply(1, 1);
        divide(2);
        m = numToString();
      } else {
        multiply(0, z);
        multiply(1 << -e, 0);
        m = numToString() + repeat.call(ZERO, f);
      }
    }

    if (f > 0) {
      k = m.length;
      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
    } else {
      m = s + m;
    }

    return m;
  }
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.number.to-precision.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.number.to-precision.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js");

var $fails = __webpack_require__(/*! ./_fails */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_fails.js");

var aNumberValue = __webpack_require__(/*! ./_a-number-value */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_a-number-value.js");

var $toPrecision = 1.0.toPrecision;
$export($export.P + $export.F * ($fails(function () {
  // IE7-
  return $toPrecision.call(1, undefined) !== '1';
}) || !$fails(function () {
  // V8 ~ Android 4.3-
  $toPrecision.call({});
})), 'Number', {
  toPrecision: function toPrecision(precision) {
    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);
  }
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.object.assign.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.object.assign.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js");

$export($export.S + $export.F, 'Object', {
  assign: __webpack_require__(/*! ./_object-assign */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-assign.js")
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.object.create.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.object.create.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js"); // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])


$export($export.S, 'Object', {
  create: __webpack_require__(/*! ./_object-create */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-create.js")
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.object.define-properties.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.object.define-properties.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js"); // 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)


$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_descriptors.js"), 'Object', {
  defineProperties: __webpack_require__(/*! ./_object-dps */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-dps.js")
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.object.define-property.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.object.define-property.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js"); // 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)


$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_descriptors.js"), 'Object', {
  defineProperty: __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-dp.js").f
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.object.freeze.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.object.freeze.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.5 Object.freeze(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_is-object.js");

var meta = __webpack_require__(/*! ./_meta */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_meta.js").onFreeze;

__webpack_require__(/*! ./_object-sap */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-sap.js")('freeze', function ($freeze) {
  return function freeze(it) {
    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
  };
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.object.get-own-property-descriptor.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.object.get-own-property-descriptor.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_to-iobject.js");

var $getOwnPropertyDescriptor = __webpack_require__(/*! ./_object-gopd */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-gopd.js").f;

__webpack_require__(/*! ./_object-sap */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-sap.js")('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.object.get-own-property-names.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.object.get-own-property-names.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 Object.getOwnPropertyNames(O)
__webpack_require__(/*! ./_object-sap */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-sap.js")('getOwnPropertyNames', function () {
  return __webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-gopn-ext.js").f;
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.object.get-prototype-of.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.object.get-prototype-of.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_to-object.js");

var $getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-gpo.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-sap.js")('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.object.is-extensible.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.object.is-extensible.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.11 Object.isExtensible(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_is-object.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-sap.js")('isExtensible', function ($isExtensible) {
  return function isExtensible(it) {
    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
  };
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.object.is-frozen.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.object.is-frozen.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.12 Object.isFrozen(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_is-object.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-sap.js")('isFrozen', function ($isFrozen) {
  return function isFrozen(it) {
    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
  };
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.object.is-sealed.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.object.is-sealed.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.13 Object.isSealed(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_is-object.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-sap.js")('isSealed', function ($isSealed) {
  return function isSealed(it) {
    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
  };
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.object.is.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.object.is.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.10 Object.is(value1, value2)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js");

$export($export.S, 'Object', {
  is: __webpack_require__(/*! ./_same-value */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_same-value.js")
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.object.keys.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.object.keys.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_to-object.js");

var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-keys.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-sap.js")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.object.prevent-extensions.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.object.prevent-extensions.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.15 Object.preventExtensions(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_is-object.js");

var meta = __webpack_require__(/*! ./_meta */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_meta.js").onFreeze;

__webpack_require__(/*! ./_object-sap */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-sap.js")('preventExtensions', function ($preventExtensions) {
  return function preventExtensions(it) {
    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
  };
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.object.seal.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.object.seal.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.17 Object.seal(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_is-object.js");

var meta = __webpack_require__(/*! ./_meta */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_meta.js").onFreeze;

__webpack_require__(/*! ./_object-sap */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-sap.js")('seal', function ($seal) {
  return function seal(it) {
    return $seal && isObject(it) ? $seal(meta(it)) : it;
  };
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.object.set-prototype-of.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.object.set-prototype-of.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js");

$export($export.S, 'Object', {
  setPrototypeOf: __webpack_require__(/*! ./_set-proto */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_set-proto.js").set
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.object.to-string.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.object.to-string.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // 19.1.3.6 Object.prototype.toString()

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_classof.js");

var test = {};
test[__webpack_require__(/*! ./_wks */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_wks.js")('toStringTag')] = 'z';

if (test + '' != '[object z]') {
  __webpack_require__(/*! ./_redefine */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_redefine.js")(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.parse-float.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.parse-float.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js");

var $parseFloat = __webpack_require__(/*! ./_parse-float */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_parse-float.js"); // 18.2.4 parseFloat(string)


$export($export.G + $export.F * (parseFloat != $parseFloat), {
  parseFloat: $parseFloat
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.parse-int.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.parse-int.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js");

var $parseInt = __webpack_require__(/*! ./_parse-int */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_parse-int.js"); // 18.2.5 parseInt(string, radix)


$export($export.G + $export.F * (parseInt != $parseInt), {
  parseInt: $parseInt
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.promise.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.promise.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_library.js");

var global = __webpack_require__(/*! ./_global */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_global.js");

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_ctx.js");

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_classof.js");

var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js");

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_is-object.js");

var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_a-function.js");

var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_an-instance.js");

var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_for-of.js");

var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_species-constructor.js");

var task = __webpack_require__(/*! ./_task */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_task.js").set;

var microtask = __webpack_require__(/*! ./_microtask */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_microtask.js")();

var newPromiseCapabilityModule = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_new-promise-capability.js");

var perform = __webpack_require__(/*! ./_perform */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_perform.js");

var userAgent = __webpack_require__(/*! ./_user-agent */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_user-agent.js");

var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_promise-resolve.js");

var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';

var empty = function () {
  /* empty */
};

var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;
var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);

    var FakePromise = (promise.constructor = {})[__webpack_require__(/*! ./_wks */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_wks.js")('species')] = function (exec) {
      exec(empty, empty);
    }; // unhandled rejections tracking support, NodeJS Promise without it fails @@species test


    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
    // we can't detect it synchronously, so just check versions
    && v8.indexOf('6.6') !== 0 && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) {
    /* empty */
  }
}(); // helpers

var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};

var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;

    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;

      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }

          if (handler === true) result = value;else {
            if (domain) domain.enter();
            result = handler(value); // may throw

            if (domain) {
              domain.exit();
              exited = true;
            }
          }

          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };

    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach


    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};

var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;

    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({
            promise: promise,
            reason: value
          });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      }); // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should

      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    }

    promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};

var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};

var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;

    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({
        promise: promise,
        reason: promise._v
      });
    }
  });
};

var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap

  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};

var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap

  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");

    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = {
          _w: promise,
          _d: false
        }; // wrap

        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({
      _w: promise,
      _d: false
    }, e); // wrap
  }
}; // constructor polyfill


if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);

    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  }; // eslint-disable-next-line no-unused-vars


  Internal = function Promise(executor) {
    this._c = []; // <- awaiting reactions

    this._a = undefined; // <- checked in isUnhandled reactions

    this._s = 0; // <- state

    this._d = false; // <- done

    this._v = undefined; // <- value

    this._h = 0; // <- rejection state, 0 - default, 1 - handled, 2 - unhandled

    this._n = false; // <- notify
  };

  Internal.prototype = __webpack_require__(/*! ./_redefine-all */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_redefine-all.js")($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;

      this._c.push(reaction);

      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });

  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };

  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {
  Promise: $Promise
});

__webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_set-to-string-tag.js")($Promise, PROMISE);

__webpack_require__(/*! ./_set-species */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_set-species.js")(PROMISE);

Wrapper = __webpack_require__(/*! ./_core */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_core.js")[PROMISE]; // statics

$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(/*! ./_iter-detect */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_iter-detect.js")(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.reflect.apply.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.reflect.apply.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js");

var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_a-function.js");

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_an-object.js");

var rApply = (__webpack_require__(/*! ./_global */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_global.js").Reflect || {}).apply;
var fApply = Function.apply; // MS Edge argumentsList argument is optional

$export($export.S + $export.F * !__webpack_require__(/*! ./_fails */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_fails.js")(function () {
  rApply(function () {
    /* empty */
  });
}), 'Reflect', {
  apply: function apply(target, thisArgument, argumentsList) {
    var T = aFunction(target);
    var L = anObject(argumentsList);
    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
  }
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.reflect.construct.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.reflect.construct.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js");

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-create.js");

var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_a-function.js");

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_an-object.js");

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_is-object.js");

var fails = __webpack_require__(/*! ./_fails */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_fails.js");

var bind = __webpack_require__(/*! ./_bind */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_bind.js");

var rConstruct = (__webpack_require__(/*! ./_global */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_global.js").Reflect || {}).construct; // MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it

var NEW_TARGET_BUG = fails(function () {
  function F() {
    /* empty */
  }

  return !(rConstruct(function () {
    /* empty */
  }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  rConstruct(function () {
    /* empty */
  });
});
$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
  construct: function construct(Target, args
  /* , newTarget */
  ) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);

    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0:
          return new Target();

        case 1:
          return new Target(args[0]);

        case 2:
          return new Target(args[0], args[1]);

        case 3:
          return new Target(args[0], args[1], args[2]);

        case 4:
          return new Target(args[0], args[1], args[2], args[3]);
      } // w/o altered newTarget, lot of arguments case


      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    } // with altered newTarget, not support built-in constructors


    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.reflect.define-property.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.reflect.define-property.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-dp.js");

var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js");

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_an-object.js");

var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_to-primitive.js"); // MS Edge has broken Reflect.defineProperty - throwing instead of returning false


$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_fails.js")(function () {
  // eslint-disable-next-line no-undef
  Reflect.defineProperty(dP.f({}, 1, {
    value: 1
  }), 1, {
    value: 2
  });
}), 'Reflect', {
  defineProperty: function defineProperty(target, propertyKey, attributes) {
    anObject(target);
    propertyKey = toPrimitive(propertyKey, true);
    anObject(attributes);

    try {
      dP.f(target, propertyKey, attributes);
      return true;
    } catch (e) {
      return false;
    }
  }
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.reflect.delete-property.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.reflect.delete-property.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.4 Reflect.deleteProperty(target, propertyKey)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js");

var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-gopd.js").f;

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_an-object.js");

$export($export.S, 'Reflect', {
  deleteProperty: function deleteProperty(target, propertyKey) {
    var desc = gOPD(anObject(target), propertyKey);
    return desc && !desc.configurable ? false : delete target[propertyKey];
  }
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.reflect.enumerate.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.reflect.enumerate.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // 26.1.5 Reflect.enumerate(target)

var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js");

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_an-object.js");

var Enumerate = function (iterated) {
  this._t = anObject(iterated); // target

  this._i = 0; // next index

  var keys = this._k = []; // keys

  var key;

  for (key in iterated) keys.push(key);
};

__webpack_require__(/*! ./_iter-create */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_iter-create.js")(Enumerate, 'Object', function () {
  var that = this;
  var keys = that._k;
  var key;

  do {
    if (that._i >= keys.length) return {
      value: undefined,
      done: true
    };
  } while (!((key = keys[that._i++]) in that._t));

  return {
    value: key,
    done: false
  };
});

$export($export.S, 'Reflect', {
  enumerate: function enumerate(target) {
    return new Enumerate(target);
  }
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-gopd.js");

var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js");

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_an-object.js");

$export($export.S, 'Reflect', {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
    return gOPD.f(anObject(target), propertyKey);
  }
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.reflect.get-prototype-of.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.reflect.get-prototype-of.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.8 Reflect.getPrototypeOf(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js");

var getProto = __webpack_require__(/*! ./_object-gpo */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-gpo.js");

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_an-object.js");

$export($export.S, 'Reflect', {
  getPrototypeOf: function getPrototypeOf(target) {
    return getProto(anObject(target));
  }
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.reflect.get.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.reflect.get.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.6 Reflect.get(target, propertyKey [, receiver])
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-gopd.js");

var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-gpo.js");

var has = __webpack_require__(/*! ./_has */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_has.js");

var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js");

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_is-object.js");

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_an-object.js");

function get(target, propertyKey
/* , receiver */
) {
  var receiver = arguments.length < 3 ? target : arguments[2];
  var desc, proto;
  if (anObject(target) === receiver) return target[propertyKey];
  if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value') ? desc.value : desc.get !== undefined ? desc.get.call(receiver) : undefined;
  if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);
}

$export($export.S, 'Reflect', {
  get: get
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.reflect.has.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.reflect.has.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.9 Reflect.has(target, propertyKey)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js");

$export($export.S, 'Reflect', {
  has: function has(target, propertyKey) {
    return propertyKey in target;
  }
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.reflect.is-extensible.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.reflect.is-extensible.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.10 Reflect.isExtensible(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js");

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_an-object.js");

var $isExtensible = Object.isExtensible;
$export($export.S, 'Reflect', {
  isExtensible: function isExtensible(target) {
    anObject(target);
    return $isExtensible ? $isExtensible(target) : true;
  }
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.reflect.own-keys.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.reflect.own-keys.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.11 Reflect.ownKeys(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js");

$export($export.S, 'Reflect', {
  ownKeys: __webpack_require__(/*! ./_own-keys */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_own-keys.js")
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.reflect.prevent-extensions.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.reflect.prevent-extensions.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.12 Reflect.preventExtensions(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js");

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_an-object.js");

var $preventExtensions = Object.preventExtensions;
$export($export.S, 'Reflect', {
  preventExtensions: function preventExtensions(target) {
    anObject(target);

    try {
      if ($preventExtensions) $preventExtensions(target);
      return true;
    } catch (e) {
      return false;
    }
  }
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.reflect.set-prototype-of.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.reflect.set-prototype-of.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.14 Reflect.setPrototypeOf(target, proto)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js");

var setProto = __webpack_require__(/*! ./_set-proto */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_set-proto.js");

if (setProto) $export($export.S, 'Reflect', {
  setPrototypeOf: function setPrototypeOf(target, proto) {
    setProto.check(target, proto);

    try {
      setProto.set(target, proto);
      return true;
    } catch (e) {
      return false;
    }
  }
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.reflect.set.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.reflect.set.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-dp.js");

var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-gopd.js");

var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-gpo.js");

var has = __webpack_require__(/*! ./_has */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_has.js");

var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js");

var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_property-desc.js");

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_an-object.js");

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_is-object.js");

function set(target, propertyKey, V
/* , receiver */
) {
  var receiver = arguments.length < 4 ? target : arguments[3];
  var ownDesc = gOPD.f(anObject(target), propertyKey);
  var existingDescriptor, proto;

  if (!ownDesc) {
    if (isObject(proto = getPrototypeOf(target))) {
      return set(proto, propertyKey, V, receiver);
    }

    ownDesc = createDesc(0);
  }

  if (has(ownDesc, 'value')) {
    if (ownDesc.writable === false || !isObject(receiver)) return false;

    if (existingDescriptor = gOPD.f(receiver, propertyKey)) {
      if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
      existingDescriptor.value = V;
      dP.f(receiver, propertyKey, existingDescriptor);
    } else dP.f(receiver, propertyKey, createDesc(0, V));

    return true;
  }

  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
}

$export($export.S, 'Reflect', {
  set: set
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.regexp.constructor.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.regexp.constructor.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_global.js");

var inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_inherit-if-required.js");

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-dp.js").f;

var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-gopn.js").f;

var isRegExp = __webpack_require__(/*! ./_is-regexp */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_is-regexp.js");

var $flags = __webpack_require__(/*! ./_flags */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_flags.js");

var $RegExp = global.RegExp;
var Base = $RegExp;
var proto = $RegExp.prototype;
var re1 = /a/g;
var re2 = /a/g; // "new" creates a new object, old webkit buggy here

var CORRECT_NEW = new $RegExp(re1) !== re1;

if (__webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_descriptors.js") && (!CORRECT_NEW || __webpack_require__(/*! ./_fails */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_fails.js")(function () {
  re2[__webpack_require__(/*! ./_wks */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_wks.js")('match')] = false; // RegExp constructor can alter flags and IsRegExp works correct with @@match

  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
}))) {
  $RegExp = function RegExp(p, f) {
    var tiRE = this instanceof $RegExp;
    var piRE = isRegExp(p);
    var fiU = f === undefined;
    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p : inheritIfRequired(CORRECT_NEW ? new Base(piRE && !fiU ? p.source : p, f) : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f), tiRE ? this : proto, $RegExp);
  };

  var proxy = function (key) {
    key in $RegExp || dP($RegExp, key, {
      configurable: true,
      get: function () {
        return Base[key];
      },
      set: function (it) {
        Base[key] = it;
      }
    });
  };

  for (var keys = gOPN(Base), i = 0; keys.length > i;) proxy(keys[i++]);

  proto.constructor = $RegExp;
  $RegExp.prototype = proto;

  __webpack_require__(/*! ./_redefine */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_redefine.js")(global, 'RegExp', $RegExp);
}

__webpack_require__(/*! ./_set-species */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_set-species.js")('RegExp');

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.regexp.exec.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.regexp.exec.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexpExec = __webpack_require__(/*! ./_regexp-exec */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_regexp-exec.js");

__webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js")({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.regexp.flags.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.regexp.flags.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_descriptors.js") && /./g.flags != 'g') __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-dp.js").f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__(/*! ./_flags */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_flags.js")
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.regexp.match.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.regexp.match.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_an-object.js");

var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_to-length.js");

var advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_advance-string-index.js");

var regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_regexp-exec-abstract.js"); // @@match logic


__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_fix-re-wks.js")('match', 1, function (defined, MATCH, $match, maybeCallNative) {
  return [// `String.prototype.match` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.match
  function match(regexp) {
    var O = defined(this);
    var fn = regexp == undefined ? undefined : regexp[MATCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
  }, // `RegExp.prototype[@@match]` method
  // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
  function (regexp) {
    var res = maybeCallNative($match, regexp, this);
    if (res.done) return res.value;
    var rx = anObject(regexp);
    var S = String(this);
    if (!rx.global) return regExpExec(rx, S);
    var fullUnicode = rx.unicode;
    rx.lastIndex = 0;
    var A = [];
    var n = 0;
    var result;

    while ((result = regExpExec(rx, S)) !== null) {
      var matchStr = String(result[0]);
      A[n] = matchStr;
      if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      n++;
    }

    return n === 0 ? null : A;
  }];
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.regexp.replace.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.regexp.replace.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_an-object.js");

var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_to-object.js");

var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_to-length.js");

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_to-integer.js");

var advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_advance-string-index.js");

var regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_regexp-exec-abstract.js");

var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
}; // @@replace logic


__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_fix-re-wks.js")('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [// `String.prototype.replace` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.replace
  function replace(searchValue, replaceValue) {
    var O = defined(this);
    var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
    return fn !== undefined ? fn.call(searchValue, O, replaceValue) : $replace.call(String(O), searchValue, replaceValue);
  }, // `RegExp.prototype[@@replace]` method
  // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
  function (regexp, replaceValue) {
    var res = maybeCallNative($replace, regexp, this, replaceValue);
    if (res.done) return res.value;
    var rx = anObject(regexp);
    var S = String(this);
    var functionalReplace = typeof replaceValue === 'function';
    if (!functionalReplace) replaceValue = String(replaceValue);
    var global = rx.global;

    if (global) {
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
    }

    var results = [];

    while (true) {
      var result = regExpExec(rx, S);
      if (result === null) break;
      results.push(result);
      if (!global) break;
      var matchStr = String(result[0]);
      if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
    }

    var accumulatedResult = '';
    var nextSourcePosition = 0;

    for (var i = 0; i < results.length; i++) {
      result = results[i];
      var matched = String(result[0]);
      var position = max(min(toInteger(result.index), S.length), 0);
      var captures = []; // NOTE: This is equivalent to
      //   captures = result.slice(1).map(maybeToString)
      // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
      // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
      // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.

      for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));

      var namedCaptures = result.groups;

      if (functionalReplace) {
        var replacerArgs = [matched].concat(captures, position, S);
        if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
        var replacement = String(replaceValue.apply(undefined, replacerArgs));
      } else {
        replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
      }

      if (position >= nextSourcePosition) {
        accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
        nextSourcePosition = position + matched.length;
      }
    }

    return accumulatedResult + S.slice(nextSourcePosition);
  }]; // https://tc39.github.io/ecma262/#sec-getsubstitution

  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;

    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }

    return $replace.call(replacement, symbols, function (match, ch) {
      var capture;

      switch (ch.charAt(0)) {
        case '$':
          return '$';

        case '&':
          return matched;

        case '`':
          return str.slice(0, position);

        case "'":
          return str.slice(tailPos);

        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;

        default:
          // \d\d?
          var n = +ch;
          if (n === 0) return match;

          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }

          capture = captures[n - 1];
      }

      return capture === undefined ? '' : capture;
    });
  }
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.regexp.search.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.regexp.search.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_an-object.js");

var sameValue = __webpack_require__(/*! ./_same-value */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_same-value.js");

var regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_regexp-exec-abstract.js"); // @@search logic


__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_fix-re-wks.js")('search', 1, function (defined, SEARCH, $search, maybeCallNative) {
  return [// `String.prototype.search` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.search
  function search(regexp) {
    var O = defined(this);
    var fn = regexp == undefined ? undefined : regexp[SEARCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
  }, // `RegExp.prototype[@@search]` method
  // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search
  function (regexp) {
    var res = maybeCallNative($search, regexp, this);
    if (res.done) return res.value;
    var rx = anObject(regexp);
    var S = String(this);
    var previousLastIndex = rx.lastIndex;
    if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
    var result = regExpExec(rx, S);
    if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
    return result === null ? -1 : result.index;
  }];
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.regexp.split.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.regexp.split.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isRegExp = __webpack_require__(/*! ./_is-regexp */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_is-regexp.js");

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_an-object.js");

var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_species-constructor.js");

var advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_advance-string-index.js");

var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_to-length.js");

var callRegExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_regexp-exec-abstract.js");

var regexpExec = __webpack_require__(/*! ./_regexp-exec */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_regexp-exec.js");

var fails = __webpack_require__(/*! ./_fails */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_fails.js");

var $min = Math.min;
var $push = [].push;
var $SPLIT = 'split';
var LENGTH = 'length';
var LAST_INDEX = 'lastIndex';
var MAX_UINT32 = 0xffffffff; // babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError

var SUPPORTS_Y = !fails(function () {
  RegExp(MAX_UINT32, 'y');
}); // @@split logic

__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_fix-re-wks.js")('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
  var internalSplit;

  if ('abbc'[$SPLIT](/(b)*/)[1] == 'c' || 'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 || 'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 || '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 || '.'[$SPLIT](/()()/)[LENGTH] > 1 || ''[$SPLIT](/.?/)[LENGTH]) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return []; // If `separator` is not a regex, use native split

      if (!isRegExp(separator)) return $split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.unicode ? 'u' : '') + (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0; // Make `global` and avoid `lastIndex` issues by working with a copy

      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;

      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy[LAST_INDEX];

        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }

        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }

      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));

      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    }; // Chakra, V8

  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
    };
  } else {
    internalSplit = $split;
  }

  return [// `String.prototype.split` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.split
  function split(separator, limit) {
    var O = defined(this);
    var splitter = separator == undefined ? undefined : separator[SPLIT];
    return splitter !== undefined ? splitter.call(separator, O, limit) : internalSplit.call(String(O), separator, limit);
  }, // `RegExp.prototype[@@split]` method
  // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
  //
  // NOTE: This cannot be properly polyfilled in engines that don't support
  // the 'y' flag.
  function (regexp, limit) {
    var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
    if (res.done) return res.value;
    var rx = anObject(regexp);
    var S = String(this);
    var C = speciesConstructor(rx, RegExp);
    var unicodeMatching = rx.unicode;
    var flags = (rx.ignoreCase ? 'i' : '') + (rx.multiline ? 'm' : '') + (rx.unicode ? 'u' : '') + (SUPPORTS_Y ? 'y' : 'g'); // ^(? + rx + ) is needed, in combination with some S slicing, to
    // simulate the 'y' flag.

    var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
    var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
    if (lim === 0) return [];
    if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
    var p = 0;
    var q = 0;
    var A = [];

    while (q < S.length) {
      splitter.lastIndex = SUPPORTS_Y ? q : 0;
      var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
      var e;

      if (z === null || (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p) {
        q = advanceStringIndex(S, q, unicodeMatching);
      } else {
        A.push(S.slice(p, q));
        if (A.length === lim) return A;

        for (var i = 1; i <= z.length - 1; i++) {
          A.push(z[i]);
          if (A.length === lim) return A;
        }

        q = p = e;
      }
    }

    A.push(S.slice(p));
    return A;
  }];
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.regexp.to-string.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.regexp.to-string.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./es6.regexp.flags */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.regexp.flags.js");

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_an-object.js");

var $flags = __webpack_require__(/*! ./_flags */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_flags.js");

var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_descriptors.js");

var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  __webpack_require__(/*! ./_redefine */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_redefine.js")(RegExp.prototype, TO_STRING, fn, true);
}; // 21.2.5.14 RegExp.prototype.toString()


if (__webpack_require__(/*! ./_fails */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_fails.js")(function () {
  return $toString.call({
    source: 'a',
    flags: 'b'
  }) != '/a/b';
})) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/', 'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  }); // FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.set.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.set.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var strong = __webpack_require__(/*! ./_collection-strong */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_collection-strong.js");

var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_validate-collection.js");

var SET = 'Set'; // 23.2 Set Objects

module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_collection.js")(SET, function (get) {
  return function Set() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.string.anchor.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.string.anchor.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // B.2.3.2 String.prototype.anchor(name)

__webpack_require__(/*! ./_string-html */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_string-html.js")('anchor', function (createHTML) {
  return function anchor(name) {
    return createHTML(this, 'a', 'name', name);
  };
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.string.big.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.string.big.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // B.2.3.3 String.prototype.big()

__webpack_require__(/*! ./_string-html */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_string-html.js")('big', function (createHTML) {
  return function big() {
    return createHTML(this, 'big', '', '');
  };
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.string.blink.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.string.blink.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // B.2.3.4 String.prototype.blink()

__webpack_require__(/*! ./_string-html */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_string-html.js")('blink', function (createHTML) {
  return function blink() {
    return createHTML(this, 'blink', '', '');
  };
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.string.bold.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.string.bold.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // B.2.3.5 String.prototype.bold()

__webpack_require__(/*! ./_string-html */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_string-html.js")('bold', function (createHTML) {
  return function bold() {
    return createHTML(this, 'b', '', '');
  };
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.string.code-point-at.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.string.code-point-at.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js");

var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_string-at.js")(false);

$export($export.P, 'String', {
  // 21.1.3.3 String.prototype.codePointAt(pos)
  codePointAt: function codePointAt(pos) {
    return $at(this, pos);
  }
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.string.ends-with.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.string.ends-with.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])


var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js");

var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_to-length.js");

var context = __webpack_require__(/*! ./_string-context */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_string-context.js");

var ENDS_WITH = 'endsWith';
var $endsWith = ''[ENDS_WITH];
$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_fails-is-regexp.js")(ENDS_WITH), 'String', {
  endsWith: function endsWith(searchString
  /* , endPosition = @length */
  ) {
    var that = context(this, searchString, ENDS_WITH);
    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
    var len = toLength(that.length);
    var end = endPosition === undefined ? len : Math.min(toLength(endPosition), len);
    var search = String(searchString);
    return $endsWith ? $endsWith.call(that, search, end) : that.slice(end - search.length, end) === search;
  }
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.string.fixed.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.string.fixed.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // B.2.3.6 String.prototype.fixed()

__webpack_require__(/*! ./_string-html */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_string-html.js")('fixed', function (createHTML) {
  return function fixed() {
    return createHTML(this, 'tt', '', '');
  };
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.string.fontcolor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.string.fontcolor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // B.2.3.7 String.prototype.fontcolor(color)

__webpack_require__(/*! ./_string-html */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_string-html.js")('fontcolor', function (createHTML) {
  return function fontcolor(color) {
    return createHTML(this, 'font', 'color', color);
  };
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.string.fontsize.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.string.fontsize.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // B.2.3.8 String.prototype.fontsize(size)

__webpack_require__(/*! ./_string-html */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_string-html.js")('fontsize', function (createHTML) {
  return function fontsize(size) {
    return createHTML(this, 'font', 'size', size);
  };
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.string.from-code-point.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.string.from-code-point.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js");

var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_to-absolute-index.js");

var fromCharCode = String.fromCharCode;
var $fromCodePoint = String.fromCodePoint; // length should be 1, old FF problem

$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
  // 21.1.2.2 String.fromCodePoint(...codePoints)
  fromCodePoint: function fromCodePoint(x) {
    // eslint-disable-line no-unused-vars
    var res = [];
    var aLen = arguments.length;
    var i = 0;
    var code;

    while (aLen > i) {
      code = +arguments[i++];
      if (toAbsoluteIndex(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');
      res.push(code < 0x10000 ? fromCharCode(code) : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00));
    }

    return res.join('');
  }
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.string.includes.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.string.includes.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)


var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js");

var context = __webpack_require__(/*! ./_string-context */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_string-context.js");

var INCLUDES = 'includes';
$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_fails-is-regexp.js")(INCLUDES), 'String', {
  includes: function includes(searchString
  /* , position = 0 */
  ) {
    return !!~context(this, searchString, INCLUDES).indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.string.italics.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.string.italics.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // B.2.3.9 String.prototype.italics()

__webpack_require__(/*! ./_string-html */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_string-html.js")('italics', function (createHTML) {
  return function italics() {
    return createHTML(this, 'i', '', '');
  };
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.string.iterator.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.string.iterator.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_string-at.js")(true); // 21.1.3.27 String.prototype[@@iterator]()


__webpack_require__(/*! ./_iter-define */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target

  this._i = 0; // next index
  // 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return {
    value: undefined,
    done: true
  };
  point = $at(O, index);
  this._i += point.length;
  return {
    value: point,
    done: false
  };
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.string.link.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.string.link.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // B.2.3.10 String.prototype.link(url)

__webpack_require__(/*! ./_string-html */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_string-html.js")('link', function (createHTML) {
  return function link(url) {
    return createHTML(this, 'a', 'href', url);
  };
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.string.raw.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.string.raw.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js");

var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_to-iobject.js");

var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_to-length.js");

$export($export.S, 'String', {
  // 21.1.2.4 String.raw(callSite, ...substitutions)
  raw: function raw(callSite) {
    var tpl = toIObject(callSite.raw);
    var len = toLength(tpl.length);
    var aLen = arguments.length;
    var res = [];
    var i = 0;

    while (len > i) {
      res.push(String(tpl[i++]));
      if (i < aLen) res.push(String(arguments[i]));
    }

    return res.join('');
  }
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.string.repeat.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.string.repeat.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js");

$export($export.P, 'String', {
  // 21.1.3.13 String.prototype.repeat(count)
  repeat: __webpack_require__(/*! ./_string-repeat */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_string-repeat.js")
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.string.small.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.string.small.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // B.2.3.11 String.prototype.small()

__webpack_require__(/*! ./_string-html */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_string-html.js")('small', function (createHTML) {
  return function small() {
    return createHTML(this, 'small', '', '');
  };
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.string.starts-with.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.string.starts-with.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.18 String.prototype.startsWith(searchString [, position ])


var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js");

var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_to-length.js");

var context = __webpack_require__(/*! ./_string-context */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_string-context.js");

var STARTS_WITH = 'startsWith';
var $startsWith = ''[STARTS_WITH];
$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_fails-is-regexp.js")(STARTS_WITH), 'String', {
  startsWith: function startsWith(searchString
  /* , position = 0 */
  ) {
    var that = context(this, searchString, STARTS_WITH);
    var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return $startsWith ? $startsWith.call(that, search, index) : that.slice(index, index + search.length) === search;
  }
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.string.strike.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.string.strike.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // B.2.3.12 String.prototype.strike()

__webpack_require__(/*! ./_string-html */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_string-html.js")('strike', function (createHTML) {
  return function strike() {
    return createHTML(this, 'strike', '', '');
  };
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.string.sub.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.string.sub.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // B.2.3.13 String.prototype.sub()

__webpack_require__(/*! ./_string-html */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_string-html.js")('sub', function (createHTML) {
  return function sub() {
    return createHTML(this, 'sub', '', '');
  };
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.string.sup.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.string.sup.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // B.2.3.14 String.prototype.sup()

__webpack_require__(/*! ./_string-html */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_string-html.js")('sup', function (createHTML) {
  return function sup() {
    return createHTML(this, 'sup', '', '');
  };
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.string.trim.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.string.trim.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // 21.1.3.25 String.prototype.trim()

__webpack_require__(/*! ./_string-trim */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_string-trim.js")('trim', function ($trim) {
  return function trim() {
    return $trim(this, 3);
  };
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.symbol.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.symbol.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // ECMAScript 6 symbols shim

var global = __webpack_require__(/*! ./_global */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_global.js");

var has = __webpack_require__(/*! ./_has */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_has.js");

var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_descriptors.js");

var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js");

var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_redefine.js");

var META = __webpack_require__(/*! ./_meta */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_meta.js").KEY;

var $fails = __webpack_require__(/*! ./_fails */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_fails.js");

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_shared.js");

var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_set-to-string-tag.js");

var uid = __webpack_require__(/*! ./_uid */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_uid.js");

var wks = __webpack_require__(/*! ./_wks */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_wks.js");

var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_wks-ext.js");

var wksDefine = __webpack_require__(/*! ./_wks-define */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_wks-define.js");

var enumKeys = __webpack_require__(/*! ./_enum-keys */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_enum-keys.js");

var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_is-array.js");

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_an-object.js");

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_is-object.js");

var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_to-object.js");

var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_to-iobject.js");

var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_to-primitive.js");

var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_property-desc.js");

var _create = __webpack_require__(/*! ./_object-create */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-create.js");

var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-gopn-ext.js");

var $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-gopd.js");

var $GOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-gops.js");

var $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-dp.js");

var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-keys.js");

var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;

var _stringify = $JSON && $JSON.stringify;

var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject; // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173

var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild; // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687

var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () {
      return dP(this, 'a', {
        value: 7
      }).a;
    }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);

  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);

  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, {
        enumerable: createDesc(0, false)
      });
    }

    return setSymbolDesc(it, key, D);
  }

  return dP(it, key, D);
};

var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;

  while (l > i) $defineProperty(it, key = keys[i++], P[key]);

  return it;
};

var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};

var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};

var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;

  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  }

  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;

  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  }

  return result;
}; // 19.4.1.1 Symbol([description])


if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);

    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };

    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, {
      configurable: true,
      set: $set
    });
    return wrap(tag);
  };

  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });
  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(/*! ./_object-gopn */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(/*! ./_object-pie */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-pie.js").f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_library.js")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {
  Symbol: $Symbol
});

for (var es6Symbols = // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(','), j = 0; es6Symbols.length > j;) wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '') ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');

    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () {
    setter = true;
  },
  useSimple: function () {
    setter = false;
  }
});
$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
}); // Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443

var FAILS_ON_PRIMITIVES = $fails(function () {
  $GOPS.f(1);
});
$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
}); // 24.3.2 JSON.stringify(value [, replacer [, space]])

$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol(); // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols

  return _stringify([S]) != '[null]' || _stringify({
    a: S
  }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;

    while (arguments.length > i) args.push(arguments[i++]);

    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined

    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
}); // 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)

$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf); // 19.4.3.5 Symbol.prototype[@@toStringTag]

setToStringTag($Symbol, 'Symbol'); // 20.2.1.9 Math[@@toStringTag]

setToStringTag(Math, 'Math', true); // 24.3.3 JSON[@@toStringTag]

setToStringTag(global.JSON, 'JSON', true);

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.typed.array-buffer.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.typed.array-buffer.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js");

var $typed = __webpack_require__(/*! ./_typed */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_typed.js");

var buffer = __webpack_require__(/*! ./_typed-buffer */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_typed-buffer.js");

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_an-object.js");

var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_to-absolute-index.js");

var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_to-length.js");

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_is-object.js");

var ArrayBuffer = __webpack_require__(/*! ./_global */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_global.js").ArrayBuffer;

var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_species-constructor.js");

var $ArrayBuffer = buffer.ArrayBuffer;
var $DataView = buffer.DataView;
var $isView = $typed.ABV && ArrayBuffer.isView;
var $slice = $ArrayBuffer.prototype.slice;
var VIEW = $typed.VIEW;
var ARRAY_BUFFER = 'ArrayBuffer';
$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), {
  ArrayBuffer: $ArrayBuffer
});
$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
  // 24.1.3.1 ArrayBuffer.isView(arg)
  isView: function isView(it) {
    return $isView && $isView(it) || isObject(it) && VIEW in it;
  }
});
$export($export.P + $export.U + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_fails.js")(function () {
  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
}), ARRAY_BUFFER, {
  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
  slice: function slice(start, end) {
    if ($slice !== undefined && end === undefined) return $slice.call(anObject(this), start); // FF fix

    var len = anObject(this).byteLength;
    var first = toAbsoluteIndex(start, len);
    var fin = toAbsoluteIndex(end === undefined ? len : end, len);
    var result = new (speciesConstructor(this, $ArrayBuffer))(toLength(fin - first));
    var viewS = new $DataView(this);
    var viewT = new $DataView(result);
    var index = 0;

    while (first < fin) {
      viewT.setUint8(index++, viewS.getUint8(first++));
    }

    return result;
  }
});

__webpack_require__(/*! ./_set-species */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_set-species.js")(ARRAY_BUFFER);

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.typed.data-view.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.typed.data-view.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js");

$export($export.G + $export.W + $export.F * !__webpack_require__(/*! ./_typed */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_typed.js").ABV, {
  DataView: __webpack_require__(/*! ./_typed-buffer */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_typed-buffer.js").DataView
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.typed.float32-array.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.typed.float32-array.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_typed-array */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_typed-array.js")('Float32', 4, function (init) {
  return function Float32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.typed.float64-array.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.typed.float64-array.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_typed-array */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_typed-array.js")('Float64', 8, function (init) {
  return function Float64Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.typed.int16-array.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.typed.int16-array.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_typed-array */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_typed-array.js")('Int16', 2, function (init) {
  return function Int16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.typed.int32-array.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.typed.int32-array.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_typed-array */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_typed-array.js")('Int32', 4, function (init) {
  return function Int32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.typed.int8-array.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.typed.int8-array.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_typed-array */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_typed-array.js")('Int8', 1, function (init) {
  return function Int8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.typed.uint16-array.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.typed.uint16-array.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_typed-array */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_typed-array.js")('Uint16', 2, function (init) {
  return function Uint16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.typed.uint32-array.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.typed.uint32-array.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_typed-array */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_typed-array.js")('Uint32', 4, function (init) {
  return function Uint32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.typed.uint8-array.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.typed.uint8-array.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_typed-array */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_typed-array.js")('Uint8', 1, function (init) {
  return function Uint8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.typed.uint8-clamped-array.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.typed.uint8-clamped-array.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_typed-array */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_typed-array.js")('Uint8', 1, function (init) {
  return function Uint8ClampedArray(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
}, true);

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.weak-map.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.weak-map.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__(/*! ./_global */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_global.js");

var each = __webpack_require__(/*! ./_array-methods */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_array-methods.js")(0);

var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_redefine.js");

var meta = __webpack_require__(/*! ./_meta */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_meta.js");

var assign = __webpack_require__(/*! ./_object-assign */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-assign.js");

var weak = __webpack_require__(/*! ./_collection-weak */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_collection-weak.js");

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_is-object.js");

var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_validate-collection.js");

var NATIVE_WEAK_MAP = __webpack_require__(/*! ./_validate-collection */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_validate-collection.js");

var IS_IE11 = !global.ActiveXObject && 'ActiveXObject' in global;
var WEAK_MAP = 'WeakMap';
var getWeak = meta.getWeak;
var isExtensible = Object.isExtensible;
var uncaughtFrozenStore = weak.ufstore;
var InternalMap;

var wrapper = function (get) {
  return function WeakMap() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key) {
    if (isObject(key)) {
      var data = getWeak(key);
      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value) {
    return weak.def(validate(this, WEAK_MAP), key, value);
  }
}; // 23.3 WeakMap Objects

var $WeakMap = module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_collection.js")(WEAK_MAP, wrapper, methods, weak, true, true); // IE11 WeakMap frozen keys fix


if (NATIVE_WEAK_MAP && IS_IE11) {
  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function (key) {
    var proto = $WeakMap.prototype;
    var method = proto[key];
    redefine(proto, key, function (a, b) {
      // store frozen objects on internal weakmap shim
      if (isObject(a) && !isExtensible(a)) {
        if (!this._f) this._f = new InternalMap();

        var result = this._f[key](a, b);

        return key == 'set' ? this : result; // store all the rest on native weakmap
      }

      return method.call(this, a, b);
    });
  });
}

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.weak-set.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.weak-set.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var weak = __webpack_require__(/*! ./_collection-weak */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_collection-weak.js");

var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_validate-collection.js");

var WEAK_SET = 'WeakSet'; // 23.4 WeakSet Objects

__webpack_require__(/*! ./_collection */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_collection.js")(WEAK_SET, function (get) {
  return function WeakSet() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
}, {
  // 23.4.3.1 WeakSet.prototype.add(value)
  add: function add(value) {
    return weak.def(validate(this, WEAK_SET), value, true);
  }
}, weak, false, true);

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es7.array.flat-map.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es7.array.flat-map.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatMap

var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js");

var flattenIntoArray = __webpack_require__(/*! ./_flatten-into-array */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_flatten-into-array.js");

var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_to-object.js");

var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_to-length.js");

var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_a-function.js");

var arraySpeciesCreate = __webpack_require__(/*! ./_array-species-create */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_array-species-create.js");

$export($export.P, 'Array', {
  flatMap: function flatMap(callbackfn
  /* , thisArg */
  ) {
    var O = toObject(this);
    var sourceLen, A;
    aFunction(callbackfn);
    sourceLen = toLength(O.length);
    A = arraySpeciesCreate(O, 0);
    flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments[1]);
    return A;
  }
});

__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_add-to-unscopables.js")('flatMap');

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es7.array.includes.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es7.array.includes.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // https://github.com/tc39/Array.prototype.includes

var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js");

var $includes = __webpack_require__(/*! ./_array-includes */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_array-includes.js")(true);

$export($export.P, 'Array', {
  includes: function includes(el
  /* , fromIndex = 0 */
  ) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_add-to-unscopables.js")('includes');

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es7.object.entries.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es7.object.entries.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js");

var $entries = __webpack_require__(/*! ./_object-to-array */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-to-array.js")(true);

$export($export.S, 'Object', {
  entries: function entries(it) {
    return $entries(it);
  }
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es7.object.get-own-property-descriptors.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es7.object.get-own-property-descriptors.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-getownpropertydescriptors
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js");

var ownKeys = __webpack_require__(/*! ./_own-keys */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_own-keys.js");

var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_to-iobject.js");

var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-gopd.js");

var createProperty = __webpack_require__(/*! ./_create-property */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_create-property.js");

$export($export.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIObject(object);
    var getDesc = gOPD.f;
    var keys = ownKeys(O);
    var result = {};
    var i = 0;
    var key, desc;

    while (keys.length > i) {
      desc = getDesc(O, key = keys[i++]);
      if (desc !== undefined) createProperty(result, key, desc);
    }

    return result;
  }
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es7.object.values.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es7.object.values.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js");

var $values = __webpack_require__(/*! ./_object-to-array */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-to-array.js")(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es7.promise.finally.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es7.promise.finally.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally


var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js");

var core = __webpack_require__(/*! ./_core */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_core.js");

var global = __webpack_require__(/*! ./_global */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_global.js");

var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_species-constructor.js");

var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_promise-resolve.js");

$export($export.P + $export.R, 'Promise', {
  'finally': function (onFinally) {
    var C = speciesConstructor(this, core.Promise || global.Promise);
    var isFunction = typeof onFinally == 'function';
    return this.then(isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () {
        return x;
      });
    } : onFinally, isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () {
        throw e;
      });
    } : onFinally);
  }
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es7.string.pad-end.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es7.string.pad-end.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // https://github.com/tc39/proposal-string-pad-start-end

var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js");

var $pad = __webpack_require__(/*! ./_string-pad */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_string-pad.js");

var userAgent = __webpack_require__(/*! ./_user-agent */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_user-agent.js"); // https://github.com/zloirock/core-js/issues/280


var WEBKIT_BUG = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent);
$export($export.P + $export.F * WEBKIT_BUG, 'String', {
  padEnd: function padEnd(maxLength
  /* , fillString = ' ' */
  ) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
  }
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es7.string.pad-start.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es7.string.pad-start.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // https://github.com/tc39/proposal-string-pad-start-end

var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js");

var $pad = __webpack_require__(/*! ./_string-pad */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_string-pad.js");

var userAgent = __webpack_require__(/*! ./_user-agent */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_user-agent.js"); // https://github.com/zloirock/core-js/issues/280


var WEBKIT_BUG = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent);
$export($export.P + $export.F * WEBKIT_BUG, 'String', {
  padStart: function padStart(maxLength
  /* , fillString = ' ' */
  ) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
  }
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es7.string.trim-left.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es7.string.trim-left.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // https://github.com/sebmarkbage/ecmascript-string-left-right-trim

__webpack_require__(/*! ./_string-trim */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_string-trim.js")('trimLeft', function ($trim) {
  return function trimLeft() {
    return $trim(this, 1);
  };
}, 'trimStart');

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es7.string.trim-right.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es7.string.trim-right.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // https://github.com/sebmarkbage/ecmascript-string-left-right-trim

__webpack_require__(/*! ./_string-trim */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_string-trim.js")('trimRight', function ($trim) {
  return function trimRight() {
    return $trim(this, 2);
  };
}, 'trimEnd');

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es7.symbol.async-iterator.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/es7.symbol.async-iterator.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_wks-define.js")('asyncIterator');

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/web.dom.iterable.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/web.dom.iterable.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__(/*! ./es6.array.iterator */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/es6.array.iterator.js");

var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_object-keys.js");

var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_redefine.js");

var global = __webpack_require__(/*! ./_global */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_global.js");

var hide = __webpack_require__(/*! ./_hide */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_hide.js");

var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_iterators.js");

var wks = __webpack_require__(/*! ./_wks */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_wks.js");

var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;
var DOMIterables = {
  CSSRuleList: true,
  // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true,
  // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true,
  // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;

  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/web.immediate.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/web.immediate.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js");

var $task = __webpack_require__(/*! ./_task */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_task.js");

$export($export.G + $export.B, {
  setImmediate: $task.set,
  clearImmediate: $task.clear
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/modules/web.timers.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/modules/web.timers.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// ie9- setTimeout & setInterval additional parameters fix
var global = __webpack_require__(/*! ./_global */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_global.js");

var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_export.js");

var userAgent = __webpack_require__(/*! ./_user-agent */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_user-agent.js");

var slice = [].slice;
var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check

var wrap = function (set) {
  return function (fn, time
  /* , ...args */
  ) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : false;
    return set(boundArgs ? function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(this, args);
    } : fn, time);
  };
};

$export($export.G + $export.B + $export.F * MSIE, {
  setTimeout: wrap(global.setTimeout),
  setInterval: wrap(global.setInterval)
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/core-js/web/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/core-js/web/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/web.timers */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/web.timers.js");

__webpack_require__(/*! ../modules/web.immediate */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/web.immediate.js");

__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/web.dom.iterable.js");

module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/@babel/polyfill/node_modules/core-js/modules/_core.js");

/***/ }),

/***/ "./node_modules/chart.js/dist/Chart.js":
/*!*********************************************!*\
  !*** ./node_modules/chart.js/dist/Chart.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Chart.js v2.9.4
 * https://www.chartjs.org
 * (c) 2020 Chart.js Contributors
 * Released under the MIT License
 */
(function (global, factory) {
   true ? module.exports = factory(function () {
    try {
      return __webpack_require__(/*! moment */ "moment");
    } catch (e) {}
  }()) : undefined;
})(this, function (moment) {
  'use strict';

  moment = moment && moment.hasOwnProperty('default') ? moment['default'] : moment;

  function createCommonjsModule(fn, module) {
    return module = {
      exports: {}
    }, fn(module, module.exports), module.exports;
  }

  function getCjsExportFromNamespace(n) {
    return n && n['default'] || n;
  }

  var colorName = {
    "aliceblue": [240, 248, 255],
    "antiquewhite": [250, 235, 215],
    "aqua": [0, 255, 255],
    "aquamarine": [127, 255, 212],
    "azure": [240, 255, 255],
    "beige": [245, 245, 220],
    "bisque": [255, 228, 196],
    "black": [0, 0, 0],
    "blanchedalmond": [255, 235, 205],
    "blue": [0, 0, 255],
    "blueviolet": [138, 43, 226],
    "brown": [165, 42, 42],
    "burlywood": [222, 184, 135],
    "cadetblue": [95, 158, 160],
    "chartreuse": [127, 255, 0],
    "chocolate": [210, 105, 30],
    "coral": [255, 127, 80],
    "cornflowerblue": [100, 149, 237],
    "cornsilk": [255, 248, 220],
    "crimson": [220, 20, 60],
    "cyan": [0, 255, 255],
    "darkblue": [0, 0, 139],
    "darkcyan": [0, 139, 139],
    "darkgoldenrod": [184, 134, 11],
    "darkgray": [169, 169, 169],
    "darkgreen": [0, 100, 0],
    "darkgrey": [169, 169, 169],
    "darkkhaki": [189, 183, 107],
    "darkmagenta": [139, 0, 139],
    "darkolivegreen": [85, 107, 47],
    "darkorange": [255, 140, 0],
    "darkorchid": [153, 50, 204],
    "darkred": [139, 0, 0],
    "darksalmon": [233, 150, 122],
    "darkseagreen": [143, 188, 143],
    "darkslateblue": [72, 61, 139],
    "darkslategray": [47, 79, 79],
    "darkslategrey": [47, 79, 79],
    "darkturquoise": [0, 206, 209],
    "darkviolet": [148, 0, 211],
    "deeppink": [255, 20, 147],
    "deepskyblue": [0, 191, 255],
    "dimgray": [105, 105, 105],
    "dimgrey": [105, 105, 105],
    "dodgerblue": [30, 144, 255],
    "firebrick": [178, 34, 34],
    "floralwhite": [255, 250, 240],
    "forestgreen": [34, 139, 34],
    "fuchsia": [255, 0, 255],
    "gainsboro": [220, 220, 220],
    "ghostwhite": [248, 248, 255],
    "gold": [255, 215, 0],
    "goldenrod": [218, 165, 32],
    "gray": [128, 128, 128],
    "green": [0, 128, 0],
    "greenyellow": [173, 255, 47],
    "grey": [128, 128, 128],
    "honeydew": [240, 255, 240],
    "hotpink": [255, 105, 180],
    "indianred": [205, 92, 92],
    "indigo": [75, 0, 130],
    "ivory": [255, 255, 240],
    "khaki": [240, 230, 140],
    "lavender": [230, 230, 250],
    "lavenderblush": [255, 240, 245],
    "lawngreen": [124, 252, 0],
    "lemonchiffon": [255, 250, 205],
    "lightblue": [173, 216, 230],
    "lightcoral": [240, 128, 128],
    "lightcyan": [224, 255, 255],
    "lightgoldenrodyellow": [250, 250, 210],
    "lightgray": [211, 211, 211],
    "lightgreen": [144, 238, 144],
    "lightgrey": [211, 211, 211],
    "lightpink": [255, 182, 193],
    "lightsalmon": [255, 160, 122],
    "lightseagreen": [32, 178, 170],
    "lightskyblue": [135, 206, 250],
    "lightslategray": [119, 136, 153],
    "lightslategrey": [119, 136, 153],
    "lightsteelblue": [176, 196, 222],
    "lightyellow": [255, 255, 224],
    "lime": [0, 255, 0],
    "limegreen": [50, 205, 50],
    "linen": [250, 240, 230],
    "magenta": [255, 0, 255],
    "maroon": [128, 0, 0],
    "mediumaquamarine": [102, 205, 170],
    "mediumblue": [0, 0, 205],
    "mediumorchid": [186, 85, 211],
    "mediumpurple": [147, 112, 219],
    "mediumseagreen": [60, 179, 113],
    "mediumslateblue": [123, 104, 238],
    "mediumspringgreen": [0, 250, 154],
    "mediumturquoise": [72, 209, 204],
    "mediumvioletred": [199, 21, 133],
    "midnightblue": [25, 25, 112],
    "mintcream": [245, 255, 250],
    "mistyrose": [255, 228, 225],
    "moccasin": [255, 228, 181],
    "navajowhite": [255, 222, 173],
    "navy": [0, 0, 128],
    "oldlace": [253, 245, 230],
    "olive": [128, 128, 0],
    "olivedrab": [107, 142, 35],
    "orange": [255, 165, 0],
    "orangered": [255, 69, 0],
    "orchid": [218, 112, 214],
    "palegoldenrod": [238, 232, 170],
    "palegreen": [152, 251, 152],
    "paleturquoise": [175, 238, 238],
    "palevioletred": [219, 112, 147],
    "papayawhip": [255, 239, 213],
    "peachpuff": [255, 218, 185],
    "peru": [205, 133, 63],
    "pink": [255, 192, 203],
    "plum": [221, 160, 221],
    "powderblue": [176, 224, 230],
    "purple": [128, 0, 128],
    "rebeccapurple": [102, 51, 153],
    "red": [255, 0, 0],
    "rosybrown": [188, 143, 143],
    "royalblue": [65, 105, 225],
    "saddlebrown": [139, 69, 19],
    "salmon": [250, 128, 114],
    "sandybrown": [244, 164, 96],
    "seagreen": [46, 139, 87],
    "seashell": [255, 245, 238],
    "sienna": [160, 82, 45],
    "silver": [192, 192, 192],
    "skyblue": [135, 206, 235],
    "slateblue": [106, 90, 205],
    "slategray": [112, 128, 144],
    "slategrey": [112, 128, 144],
    "snow": [255, 250, 250],
    "springgreen": [0, 255, 127],
    "steelblue": [70, 130, 180],
    "tan": [210, 180, 140],
    "teal": [0, 128, 128],
    "thistle": [216, 191, 216],
    "tomato": [255, 99, 71],
    "turquoise": [64, 224, 208],
    "violet": [238, 130, 238],
    "wheat": [245, 222, 179],
    "white": [255, 255, 255],
    "whitesmoke": [245, 245, 245],
    "yellow": [255, 255, 0],
    "yellowgreen": [154, 205, 50]
  };
  var conversions = createCommonjsModule(function (module) {
    /* MIT license */
    // NOTE: conversions should only return primitive values (i.e. arrays, or
    //       values that give correct `typeof` results).
    //       do not use box values types (i.e. Number(), String(), etc.)
    var reverseKeywords = {};

    for (var key in colorName) {
      if (colorName.hasOwnProperty(key)) {
        reverseKeywords[colorName[key]] = key;
      }
    }

    var convert = module.exports = {
      rgb: {
        channels: 3,
        labels: 'rgb'
      },
      hsl: {
        channels: 3,
        labels: 'hsl'
      },
      hsv: {
        channels: 3,
        labels: 'hsv'
      },
      hwb: {
        channels: 3,
        labels: 'hwb'
      },
      cmyk: {
        channels: 4,
        labels: 'cmyk'
      },
      xyz: {
        channels: 3,
        labels: 'xyz'
      },
      lab: {
        channels: 3,
        labels: 'lab'
      },
      lch: {
        channels: 3,
        labels: 'lch'
      },
      hex: {
        channels: 1,
        labels: ['hex']
      },
      keyword: {
        channels: 1,
        labels: ['keyword']
      },
      ansi16: {
        channels: 1,
        labels: ['ansi16']
      },
      ansi256: {
        channels: 1,
        labels: ['ansi256']
      },
      hcg: {
        channels: 3,
        labels: ['h', 'c', 'g']
      },
      apple: {
        channels: 3,
        labels: ['r16', 'g16', 'b16']
      },
      gray: {
        channels: 1,
        labels: ['gray']
      }
    }; // hide .channels and .labels properties

    for (var model in convert) {
      if (convert.hasOwnProperty(model)) {
        if (!('channels' in convert[model])) {
          throw new Error('missing channels property: ' + model);
        }

        if (!('labels' in convert[model])) {
          throw new Error('missing channel labels property: ' + model);
        }

        if (convert[model].labels.length !== convert[model].channels) {
          throw new Error('channel and label counts mismatch: ' + model);
        }

        var channels = convert[model].channels;
        var labels = convert[model].labels;
        delete convert[model].channels;
        delete convert[model].labels;
        Object.defineProperty(convert[model], 'channels', {
          value: channels
        });
        Object.defineProperty(convert[model], 'labels', {
          value: labels
        });
      }
    }

    convert.rgb.hsl = function (rgb) {
      var r = rgb[0] / 255;
      var g = rgb[1] / 255;
      var b = rgb[2] / 255;
      var min = Math.min(r, g, b);
      var max = Math.max(r, g, b);
      var delta = max - min;
      var h;
      var s;
      var l;

      if (max === min) {
        h = 0;
      } else if (r === max) {
        h = (g - b) / delta;
      } else if (g === max) {
        h = 2 + (b - r) / delta;
      } else if (b === max) {
        h = 4 + (r - g) / delta;
      }

      h = Math.min(h * 60, 360);

      if (h < 0) {
        h += 360;
      }

      l = (min + max) / 2;

      if (max === min) {
        s = 0;
      } else if (l <= 0.5) {
        s = delta / (max + min);
      } else {
        s = delta / (2 - max - min);
      }

      return [h, s * 100, l * 100];
    };

    convert.rgb.hsv = function (rgb) {
      var rdif;
      var gdif;
      var bdif;
      var h;
      var s;
      var r = rgb[0] / 255;
      var g = rgb[1] / 255;
      var b = rgb[2] / 255;
      var v = Math.max(r, g, b);
      var diff = v - Math.min(r, g, b);

      var diffc = function (c) {
        return (v - c) / 6 / diff + 1 / 2;
      };

      if (diff === 0) {
        h = s = 0;
      } else {
        s = diff / v;
        rdif = diffc(r);
        gdif = diffc(g);
        bdif = diffc(b);

        if (r === v) {
          h = bdif - gdif;
        } else if (g === v) {
          h = 1 / 3 + rdif - bdif;
        } else if (b === v) {
          h = 2 / 3 + gdif - rdif;
        }

        if (h < 0) {
          h += 1;
        } else if (h > 1) {
          h -= 1;
        }
      }

      return [h * 360, s * 100, v * 100];
    };

    convert.rgb.hwb = function (rgb) {
      var r = rgb[0];
      var g = rgb[1];
      var b = rgb[2];
      var h = convert.rgb.hsl(rgb)[0];
      var w = 1 / 255 * Math.min(r, Math.min(g, b));
      b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));
      return [h, w * 100, b * 100];
    };

    convert.rgb.cmyk = function (rgb) {
      var r = rgb[0] / 255;
      var g = rgb[1] / 255;
      var b = rgb[2] / 255;
      var c;
      var m;
      var y;
      var k;
      k = Math.min(1 - r, 1 - g, 1 - b);
      c = (1 - r - k) / (1 - k) || 0;
      m = (1 - g - k) / (1 - k) || 0;
      y = (1 - b - k) / (1 - k) || 0;
      return [c * 100, m * 100, y * 100, k * 100];
    };
    /**
     * See https://en.m.wikipedia.org/wiki/Euclidean_distance#Squared_Euclidean_distance
     * */


    function comparativeDistance(x, y) {
      return Math.pow(x[0] - y[0], 2) + Math.pow(x[1] - y[1], 2) + Math.pow(x[2] - y[2], 2);
    }

    convert.rgb.keyword = function (rgb) {
      var reversed = reverseKeywords[rgb];

      if (reversed) {
        return reversed;
      }

      var currentClosestDistance = Infinity;
      var currentClosestKeyword;

      for (var keyword in colorName) {
        if (colorName.hasOwnProperty(keyword)) {
          var value = colorName[keyword]; // Compute comparative distance

          var distance = comparativeDistance(rgb, value); // Check if its less, if so set as closest

          if (distance < currentClosestDistance) {
            currentClosestDistance = distance;
            currentClosestKeyword = keyword;
          }
        }
      }

      return currentClosestKeyword;
    };

    convert.keyword.rgb = function (keyword) {
      return colorName[keyword];
    };

    convert.rgb.xyz = function (rgb) {
      var r = rgb[0] / 255;
      var g = rgb[1] / 255;
      var b = rgb[2] / 255; // assume sRGB

      r = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
      g = g > 0.04045 ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
      b = b > 0.04045 ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92;
      var x = r * 0.4124 + g * 0.3576 + b * 0.1805;
      var y = r * 0.2126 + g * 0.7152 + b * 0.0722;
      var z = r * 0.0193 + g * 0.1192 + b * 0.9505;
      return [x * 100, y * 100, z * 100];
    };

    convert.rgb.lab = function (rgb) {
      var xyz = convert.rgb.xyz(rgb);
      var x = xyz[0];
      var y = xyz[1];
      var z = xyz[2];
      var l;
      var a;
      var b;
      x /= 95.047;
      y /= 100;
      z /= 108.883;
      x = x > 0.008856 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116;
      y = y > 0.008856 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116;
      z = z > 0.008856 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116;
      l = 116 * y - 16;
      a = 500 * (x - y);
      b = 200 * (y - z);
      return [l, a, b];
    };

    convert.hsl.rgb = function (hsl) {
      var h = hsl[0] / 360;
      var s = hsl[1] / 100;
      var l = hsl[2] / 100;
      var t1;
      var t2;
      var t3;
      var rgb;
      var val;

      if (s === 0) {
        val = l * 255;
        return [val, val, val];
      }

      if (l < 0.5) {
        t2 = l * (1 + s);
      } else {
        t2 = l + s - l * s;
      }

      t1 = 2 * l - t2;
      rgb = [0, 0, 0];

      for (var i = 0; i < 3; i++) {
        t3 = h + 1 / 3 * -(i - 1);

        if (t3 < 0) {
          t3++;
        }

        if (t3 > 1) {
          t3--;
        }

        if (6 * t3 < 1) {
          val = t1 + (t2 - t1) * 6 * t3;
        } else if (2 * t3 < 1) {
          val = t2;
        } else if (3 * t3 < 2) {
          val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
        } else {
          val = t1;
        }

        rgb[i] = val * 255;
      }

      return rgb;
    };

    convert.hsl.hsv = function (hsl) {
      var h = hsl[0];
      var s = hsl[1] / 100;
      var l = hsl[2] / 100;
      var smin = s;
      var lmin = Math.max(l, 0.01);
      var sv;
      var v;
      l *= 2;
      s *= l <= 1 ? l : 2 - l;
      smin *= lmin <= 1 ? lmin : 2 - lmin;
      v = (l + s) / 2;
      sv = l === 0 ? 2 * smin / (lmin + smin) : 2 * s / (l + s);
      return [h, sv * 100, v * 100];
    };

    convert.hsv.rgb = function (hsv) {
      var h = hsv[0] / 60;
      var s = hsv[1] / 100;
      var v = hsv[2] / 100;
      var hi = Math.floor(h) % 6;
      var f = h - Math.floor(h);
      var p = 255 * v * (1 - s);
      var q = 255 * v * (1 - s * f);
      var t = 255 * v * (1 - s * (1 - f));
      v *= 255;

      switch (hi) {
        case 0:
          return [v, t, p];

        case 1:
          return [q, v, p];

        case 2:
          return [p, v, t];

        case 3:
          return [p, q, v];

        case 4:
          return [t, p, v];

        case 5:
          return [v, p, q];
      }
    };

    convert.hsv.hsl = function (hsv) {
      var h = hsv[0];
      var s = hsv[1] / 100;
      var v = hsv[2] / 100;
      var vmin = Math.max(v, 0.01);
      var lmin;
      var sl;
      var l;
      l = (2 - s) * v;
      lmin = (2 - s) * vmin;
      sl = s * vmin;
      sl /= lmin <= 1 ? lmin : 2 - lmin;
      sl = sl || 0;
      l /= 2;
      return [h, sl * 100, l * 100];
    }; // http://dev.w3.org/csswg/css-color/#hwb-to-rgb


    convert.hwb.rgb = function (hwb) {
      var h = hwb[0] / 360;
      var wh = hwb[1] / 100;
      var bl = hwb[2] / 100;
      var ratio = wh + bl;
      var i;
      var v;
      var f;
      var n; // wh + bl cant be > 1

      if (ratio > 1) {
        wh /= ratio;
        bl /= ratio;
      }

      i = Math.floor(6 * h);
      v = 1 - bl;
      f = 6 * h - i;

      if ((i & 0x01) !== 0) {
        f = 1 - f;
      }

      n = wh + f * (v - wh); // linear interpolation

      var r;
      var g;
      var b;

      switch (i) {
        default:
        case 6:
        case 0:
          r = v;
          g = n;
          b = wh;
          break;

        case 1:
          r = n;
          g = v;
          b = wh;
          break;

        case 2:
          r = wh;
          g = v;
          b = n;
          break;

        case 3:
          r = wh;
          g = n;
          b = v;
          break;

        case 4:
          r = n;
          g = wh;
          b = v;
          break;

        case 5:
          r = v;
          g = wh;
          b = n;
          break;
      }

      return [r * 255, g * 255, b * 255];
    };

    convert.cmyk.rgb = function (cmyk) {
      var c = cmyk[0] / 100;
      var m = cmyk[1] / 100;
      var y = cmyk[2] / 100;
      var k = cmyk[3] / 100;
      var r;
      var g;
      var b;
      r = 1 - Math.min(1, c * (1 - k) + k);
      g = 1 - Math.min(1, m * (1 - k) + k);
      b = 1 - Math.min(1, y * (1 - k) + k);
      return [r * 255, g * 255, b * 255];
    };

    convert.xyz.rgb = function (xyz) {
      var x = xyz[0] / 100;
      var y = xyz[1] / 100;
      var z = xyz[2] / 100;
      var r;
      var g;
      var b;
      r = x * 3.2406 + y * -1.5372 + z * -0.4986;
      g = x * -0.9689 + y * 1.8758 + z * 0.0415;
      b = x * 0.0557 + y * -0.2040 + z * 1.0570; // assume sRGB

      r = r > 0.0031308 ? 1.055 * Math.pow(r, 1.0 / 2.4) - 0.055 : r * 12.92;
      g = g > 0.0031308 ? 1.055 * Math.pow(g, 1.0 / 2.4) - 0.055 : g * 12.92;
      b = b > 0.0031308 ? 1.055 * Math.pow(b, 1.0 / 2.4) - 0.055 : b * 12.92;
      r = Math.min(Math.max(0, r), 1);
      g = Math.min(Math.max(0, g), 1);
      b = Math.min(Math.max(0, b), 1);
      return [r * 255, g * 255, b * 255];
    };

    convert.xyz.lab = function (xyz) {
      var x = xyz[0];
      var y = xyz[1];
      var z = xyz[2];
      var l;
      var a;
      var b;
      x /= 95.047;
      y /= 100;
      z /= 108.883;
      x = x > 0.008856 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116;
      y = y > 0.008856 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116;
      z = z > 0.008856 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116;
      l = 116 * y - 16;
      a = 500 * (x - y);
      b = 200 * (y - z);
      return [l, a, b];
    };

    convert.lab.xyz = function (lab) {
      var l = lab[0];
      var a = lab[1];
      var b = lab[2];
      var x;
      var y;
      var z;
      y = (l + 16) / 116;
      x = a / 500 + y;
      z = y - b / 200;
      var y2 = Math.pow(y, 3);
      var x2 = Math.pow(x, 3);
      var z2 = Math.pow(z, 3);
      y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787;
      x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787;
      z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787;
      x *= 95.047;
      y *= 100;
      z *= 108.883;
      return [x, y, z];
    };

    convert.lab.lch = function (lab) {
      var l = lab[0];
      var a = lab[1];
      var b = lab[2];
      var hr;
      var h;
      var c;
      hr = Math.atan2(b, a);
      h = hr * 360 / 2 / Math.PI;

      if (h < 0) {
        h += 360;
      }

      c = Math.sqrt(a * a + b * b);
      return [l, c, h];
    };

    convert.lch.lab = function (lch) {
      var l = lch[0];
      var c = lch[1];
      var h = lch[2];
      var a;
      var b;
      var hr;
      hr = h / 360 * 2 * Math.PI;
      a = c * Math.cos(hr);
      b = c * Math.sin(hr);
      return [l, a, b];
    };

    convert.rgb.ansi16 = function (args) {
      var r = args[0];
      var g = args[1];
      var b = args[2];
      var value = 1 in arguments ? arguments[1] : convert.rgb.hsv(args)[2]; // hsv -> ansi16 optimization

      value = Math.round(value / 50);

      if (value === 0) {
        return 30;
      }

      var ansi = 30 + (Math.round(b / 255) << 2 | Math.round(g / 255) << 1 | Math.round(r / 255));

      if (value === 2) {
        ansi += 60;
      }

      return ansi;
    };

    convert.hsv.ansi16 = function (args) {
      // optimization here; we already know the value and don't need to get
      // it converted for us.
      return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
    };

    convert.rgb.ansi256 = function (args) {
      var r = args[0];
      var g = args[1];
      var b = args[2]; // we use the extended greyscale palette here, with the exception of
      // black and white. normal palette only has 4 greyscale shades.

      if (r === g && g === b) {
        if (r < 8) {
          return 16;
        }

        if (r > 248) {
          return 231;
        }

        return Math.round((r - 8) / 247 * 24) + 232;
      }

      var ansi = 16 + 36 * Math.round(r / 255 * 5) + 6 * Math.round(g / 255 * 5) + Math.round(b / 255 * 5);
      return ansi;
    };

    convert.ansi16.rgb = function (args) {
      var color = args % 10; // handle greyscale

      if (color === 0 || color === 7) {
        if (args > 50) {
          color += 3.5;
        }

        color = color / 10.5 * 255;
        return [color, color, color];
      }

      var mult = (~~(args > 50) + 1) * 0.5;
      var r = (color & 1) * mult * 255;
      var g = (color >> 1 & 1) * mult * 255;
      var b = (color >> 2 & 1) * mult * 255;
      return [r, g, b];
    };

    convert.ansi256.rgb = function (args) {
      // handle greyscale
      if (args >= 232) {
        var c = (args - 232) * 10 + 8;
        return [c, c, c];
      }

      args -= 16;
      var rem;
      var r = Math.floor(args / 36) / 5 * 255;
      var g = Math.floor((rem = args % 36) / 6) / 5 * 255;
      var b = rem % 6 / 5 * 255;
      return [r, g, b];
    };

    convert.rgb.hex = function (args) {
      var integer = ((Math.round(args[0]) & 0xFF) << 16) + ((Math.round(args[1]) & 0xFF) << 8) + (Math.round(args[2]) & 0xFF);
      var string = integer.toString(16).toUpperCase();
      return '000000'.substring(string.length) + string;
    };

    convert.hex.rgb = function (args) {
      var match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);

      if (!match) {
        return [0, 0, 0];
      }

      var colorString = match[0];

      if (match[0].length === 3) {
        colorString = colorString.split('').map(function (char) {
          return char + char;
        }).join('');
      }

      var integer = parseInt(colorString, 16);
      var r = integer >> 16 & 0xFF;
      var g = integer >> 8 & 0xFF;
      var b = integer & 0xFF;
      return [r, g, b];
    };

    convert.rgb.hcg = function (rgb) {
      var r = rgb[0] / 255;
      var g = rgb[1] / 255;
      var b = rgb[2] / 255;
      var max = Math.max(Math.max(r, g), b);
      var min = Math.min(Math.min(r, g), b);
      var chroma = max - min;
      var grayscale;
      var hue;

      if (chroma < 1) {
        grayscale = min / (1 - chroma);
      } else {
        grayscale = 0;
      }

      if (chroma <= 0) {
        hue = 0;
      } else if (max === r) {
        hue = (g - b) / chroma % 6;
      } else if (max === g) {
        hue = 2 + (b - r) / chroma;
      } else {
        hue = 4 + (r - g) / chroma + 4;
      }

      hue /= 6;
      hue %= 1;
      return [hue * 360, chroma * 100, grayscale * 100];
    };

    convert.hsl.hcg = function (hsl) {
      var s = hsl[1] / 100;
      var l = hsl[2] / 100;
      var c = 1;
      var f = 0;

      if (l < 0.5) {
        c = 2.0 * s * l;
      } else {
        c = 2.0 * s * (1.0 - l);
      }

      if (c < 1.0) {
        f = (l - 0.5 * c) / (1.0 - c);
      }

      return [hsl[0], c * 100, f * 100];
    };

    convert.hsv.hcg = function (hsv) {
      var s = hsv[1] / 100;
      var v = hsv[2] / 100;
      var c = s * v;
      var f = 0;

      if (c < 1.0) {
        f = (v - c) / (1 - c);
      }

      return [hsv[0], c * 100, f * 100];
    };

    convert.hcg.rgb = function (hcg) {
      var h = hcg[0] / 360;
      var c = hcg[1] / 100;
      var g = hcg[2] / 100;

      if (c === 0.0) {
        return [g * 255, g * 255, g * 255];
      }

      var pure = [0, 0, 0];
      var hi = h % 1 * 6;
      var v = hi % 1;
      var w = 1 - v;
      var mg = 0;

      switch (Math.floor(hi)) {
        case 0:
          pure[0] = 1;
          pure[1] = v;
          pure[2] = 0;
          break;

        case 1:
          pure[0] = w;
          pure[1] = 1;
          pure[2] = 0;
          break;

        case 2:
          pure[0] = 0;
          pure[1] = 1;
          pure[2] = v;
          break;

        case 3:
          pure[0] = 0;
          pure[1] = w;
          pure[2] = 1;
          break;

        case 4:
          pure[0] = v;
          pure[1] = 0;
          pure[2] = 1;
          break;

        default:
          pure[0] = 1;
          pure[1] = 0;
          pure[2] = w;
      }

      mg = (1.0 - c) * g;
      return [(c * pure[0] + mg) * 255, (c * pure[1] + mg) * 255, (c * pure[2] + mg) * 255];
    };

    convert.hcg.hsv = function (hcg) {
      var c = hcg[1] / 100;
      var g = hcg[2] / 100;
      var v = c + g * (1.0 - c);
      var f = 0;

      if (v > 0.0) {
        f = c / v;
      }

      return [hcg[0], f * 100, v * 100];
    };

    convert.hcg.hsl = function (hcg) {
      var c = hcg[1] / 100;
      var g = hcg[2] / 100;
      var l = g * (1.0 - c) + 0.5 * c;
      var s = 0;

      if (l > 0.0 && l < 0.5) {
        s = c / (2 * l);
      } else if (l >= 0.5 && l < 1.0) {
        s = c / (2 * (1 - l));
      }

      return [hcg[0], s * 100, l * 100];
    };

    convert.hcg.hwb = function (hcg) {
      var c = hcg[1] / 100;
      var g = hcg[2] / 100;
      var v = c + g * (1.0 - c);
      return [hcg[0], (v - c) * 100, (1 - v) * 100];
    };

    convert.hwb.hcg = function (hwb) {
      var w = hwb[1] / 100;
      var b = hwb[2] / 100;
      var v = 1 - b;
      var c = v - w;
      var g = 0;

      if (c < 1) {
        g = (v - c) / (1 - c);
      }

      return [hwb[0], c * 100, g * 100];
    };

    convert.apple.rgb = function (apple) {
      return [apple[0] / 65535 * 255, apple[1] / 65535 * 255, apple[2] / 65535 * 255];
    };

    convert.rgb.apple = function (rgb) {
      return [rgb[0] / 255 * 65535, rgb[1] / 255 * 65535, rgb[2] / 255 * 65535];
    };

    convert.gray.rgb = function (args) {
      return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
    };

    convert.gray.hsl = convert.gray.hsv = function (args) {
      return [0, 0, args[0]];
    };

    convert.gray.hwb = function (gray) {
      return [0, 100, gray[0]];
    };

    convert.gray.cmyk = function (gray) {
      return [0, 0, 0, gray[0]];
    };

    convert.gray.lab = function (gray) {
      return [gray[0], 0, 0];
    };

    convert.gray.hex = function (gray) {
      var val = Math.round(gray[0] / 100 * 255) & 0xFF;
      var integer = (val << 16) + (val << 8) + val;
      var string = integer.toString(16).toUpperCase();
      return '000000'.substring(string.length) + string;
    };

    convert.rgb.gray = function (rgb) {
      var val = (rgb[0] + rgb[1] + rgb[2]) / 3;
      return [val / 255 * 100];
    };
  });
  var conversions_1 = conversions.rgb;
  var conversions_2 = conversions.hsl;
  var conversions_3 = conversions.hsv;
  var conversions_4 = conversions.hwb;
  var conversions_5 = conversions.cmyk;
  var conversions_6 = conversions.xyz;
  var conversions_7 = conversions.lab;
  var conversions_8 = conversions.lch;
  var conversions_9 = conversions.hex;
  var conversions_10 = conversions.keyword;
  var conversions_11 = conversions.ansi16;
  var conversions_12 = conversions.ansi256;
  var conversions_13 = conversions.hcg;
  var conversions_14 = conversions.apple;
  var conversions_15 = conversions.gray;
  /*
  	this function routes a model to all other models.
  
  	all functions that are routed have a property `.conversion` attached
  	to the returned synthetic function. This property is an array
  	of strings, each with the steps in between the 'from' and 'to'
  	color models (inclusive).
  
  	conversions that are not possible simply are not included.
  */

  function buildGraph() {
    var graph = {}; // https://jsperf.com/object-keys-vs-for-in-with-closure/3

    var models = Object.keys(conversions);

    for (var len = models.length, i = 0; i < len; i++) {
      graph[models[i]] = {
        // http://jsperf.com/1-vs-infinity
        // micro-opt, but this is simple.
        distance: -1,
        parent: null
      };
    }

    return graph;
  } // https://en.wikipedia.org/wiki/Breadth-first_search


  function deriveBFS(fromModel) {
    var graph = buildGraph();
    var queue = [fromModel]; // unshift -> queue -> pop

    graph[fromModel].distance = 0;

    while (queue.length) {
      var current = queue.pop();
      var adjacents = Object.keys(conversions[current]);

      for (var len = adjacents.length, i = 0; i < len; i++) {
        var adjacent = adjacents[i];
        var node = graph[adjacent];

        if (node.distance === -1) {
          node.distance = graph[current].distance + 1;
          node.parent = current;
          queue.unshift(adjacent);
        }
      }
    }

    return graph;
  }

  function link(from, to) {
    return function (args) {
      return to(from(args));
    };
  }

  function wrapConversion(toModel, graph) {
    var path = [graph[toModel].parent, toModel];
    var fn = conversions[graph[toModel].parent][toModel];
    var cur = graph[toModel].parent;

    while (graph[cur].parent) {
      path.unshift(graph[cur].parent);
      fn = link(conversions[graph[cur].parent][cur], fn);
      cur = graph[cur].parent;
    }

    fn.conversion = path;
    return fn;
  }

  var route = function (fromModel) {
    var graph = deriveBFS(fromModel);
    var conversion = {};
    var models = Object.keys(graph);

    for (var len = models.length, i = 0; i < len; i++) {
      var toModel = models[i];
      var node = graph[toModel];

      if (node.parent === null) {
        // no possible conversion, or this node is the source model.
        continue;
      }

      conversion[toModel] = wrapConversion(toModel, graph);
    }

    return conversion;
  };

  var convert = {};
  var models = Object.keys(conversions);

  function wrapRaw(fn) {
    var wrappedFn = function (args) {
      if (args === undefined || args === null) {
        return args;
      }

      if (arguments.length > 1) {
        args = Array.prototype.slice.call(arguments);
      }

      return fn(args);
    }; // preserve .conversion property if there is one


    if ('conversion' in fn) {
      wrappedFn.conversion = fn.conversion;
    }

    return wrappedFn;
  }

  function wrapRounded(fn) {
    var wrappedFn = function (args) {
      if (args === undefined || args === null) {
        return args;
      }

      if (arguments.length > 1) {
        args = Array.prototype.slice.call(arguments);
      }

      var result = fn(args); // we're assuming the result is an array here.
      // see notice in conversions.js; don't use box types
      // in conversion functions.

      if (typeof result === 'object') {
        for (var len = result.length, i = 0; i < len; i++) {
          result[i] = Math.round(result[i]);
        }
      }

      return result;
    }; // preserve .conversion property if there is one


    if ('conversion' in fn) {
      wrappedFn.conversion = fn.conversion;
    }

    return wrappedFn;
  }

  models.forEach(function (fromModel) {
    convert[fromModel] = {};
    Object.defineProperty(convert[fromModel], 'channels', {
      value: conversions[fromModel].channels
    });
    Object.defineProperty(convert[fromModel], 'labels', {
      value: conversions[fromModel].labels
    });
    var routes = route(fromModel);
    var routeModels = Object.keys(routes);
    routeModels.forEach(function (toModel) {
      var fn = routes[toModel];
      convert[fromModel][toModel] = wrapRounded(fn);
      convert[fromModel][toModel].raw = wrapRaw(fn);
    });
  });
  var colorConvert = convert;
  var colorName$1 = {
    "aliceblue": [240, 248, 255],
    "antiquewhite": [250, 235, 215],
    "aqua": [0, 255, 255],
    "aquamarine": [127, 255, 212],
    "azure": [240, 255, 255],
    "beige": [245, 245, 220],
    "bisque": [255, 228, 196],
    "black": [0, 0, 0],
    "blanchedalmond": [255, 235, 205],
    "blue": [0, 0, 255],
    "blueviolet": [138, 43, 226],
    "brown": [165, 42, 42],
    "burlywood": [222, 184, 135],
    "cadetblue": [95, 158, 160],
    "chartreuse": [127, 255, 0],
    "chocolate": [210, 105, 30],
    "coral": [255, 127, 80],
    "cornflowerblue": [100, 149, 237],
    "cornsilk": [255, 248, 220],
    "crimson": [220, 20, 60],
    "cyan": [0, 255, 255],
    "darkblue": [0, 0, 139],
    "darkcyan": [0, 139, 139],
    "darkgoldenrod": [184, 134, 11],
    "darkgray": [169, 169, 169],
    "darkgreen": [0, 100, 0],
    "darkgrey": [169, 169, 169],
    "darkkhaki": [189, 183, 107],
    "darkmagenta": [139, 0, 139],
    "darkolivegreen": [85, 107, 47],
    "darkorange": [255, 140, 0],
    "darkorchid": [153, 50, 204],
    "darkred": [139, 0, 0],
    "darksalmon": [233, 150, 122],
    "darkseagreen": [143, 188, 143],
    "darkslateblue": [72, 61, 139],
    "darkslategray": [47, 79, 79],
    "darkslategrey": [47, 79, 79],
    "darkturquoise": [0, 206, 209],
    "darkviolet": [148, 0, 211],
    "deeppink": [255, 20, 147],
    "deepskyblue": [0, 191, 255],
    "dimgray": [105, 105, 105],
    "dimgrey": [105, 105, 105],
    "dodgerblue": [30, 144, 255],
    "firebrick": [178, 34, 34],
    "floralwhite": [255, 250, 240],
    "forestgreen": [34, 139, 34],
    "fuchsia": [255, 0, 255],
    "gainsboro": [220, 220, 220],
    "ghostwhite": [248, 248, 255],
    "gold": [255, 215, 0],
    "goldenrod": [218, 165, 32],
    "gray": [128, 128, 128],
    "green": [0, 128, 0],
    "greenyellow": [173, 255, 47],
    "grey": [128, 128, 128],
    "honeydew": [240, 255, 240],
    "hotpink": [255, 105, 180],
    "indianred": [205, 92, 92],
    "indigo": [75, 0, 130],
    "ivory": [255, 255, 240],
    "khaki": [240, 230, 140],
    "lavender": [230, 230, 250],
    "lavenderblush": [255, 240, 245],
    "lawngreen": [124, 252, 0],
    "lemonchiffon": [255, 250, 205],
    "lightblue": [173, 216, 230],
    "lightcoral": [240, 128, 128],
    "lightcyan": [224, 255, 255],
    "lightgoldenrodyellow": [250, 250, 210],
    "lightgray": [211, 211, 211],
    "lightgreen": [144, 238, 144],
    "lightgrey": [211, 211, 211],
    "lightpink": [255, 182, 193],
    "lightsalmon": [255, 160, 122],
    "lightseagreen": [32, 178, 170],
    "lightskyblue": [135, 206, 250],
    "lightslategray": [119, 136, 153],
    "lightslategrey": [119, 136, 153],
    "lightsteelblue": [176, 196, 222],
    "lightyellow": [255, 255, 224],
    "lime": [0, 255, 0],
    "limegreen": [50, 205, 50],
    "linen": [250, 240, 230],
    "magenta": [255, 0, 255],
    "maroon": [128, 0, 0],
    "mediumaquamarine": [102, 205, 170],
    "mediumblue": [0, 0, 205],
    "mediumorchid": [186, 85, 211],
    "mediumpurple": [147, 112, 219],
    "mediumseagreen": [60, 179, 113],
    "mediumslateblue": [123, 104, 238],
    "mediumspringgreen": [0, 250, 154],
    "mediumturquoise": [72, 209, 204],
    "mediumvioletred": [199, 21, 133],
    "midnightblue": [25, 25, 112],
    "mintcream": [245, 255, 250],
    "mistyrose": [255, 228, 225],
    "moccasin": [255, 228, 181],
    "navajowhite": [255, 222, 173],
    "navy": [0, 0, 128],
    "oldlace": [253, 245, 230],
    "olive": [128, 128, 0],
    "olivedrab": [107, 142, 35],
    "orange": [255, 165, 0],
    "orangered": [255, 69, 0],
    "orchid": [218, 112, 214],
    "palegoldenrod": [238, 232, 170],
    "palegreen": [152, 251, 152],
    "paleturquoise": [175, 238, 238],
    "palevioletred": [219, 112, 147],
    "papayawhip": [255, 239, 213],
    "peachpuff": [255, 218, 185],
    "peru": [205, 133, 63],
    "pink": [255, 192, 203],
    "plum": [221, 160, 221],
    "powderblue": [176, 224, 230],
    "purple": [128, 0, 128],
    "rebeccapurple": [102, 51, 153],
    "red": [255, 0, 0],
    "rosybrown": [188, 143, 143],
    "royalblue": [65, 105, 225],
    "saddlebrown": [139, 69, 19],
    "salmon": [250, 128, 114],
    "sandybrown": [244, 164, 96],
    "seagreen": [46, 139, 87],
    "seashell": [255, 245, 238],
    "sienna": [160, 82, 45],
    "silver": [192, 192, 192],
    "skyblue": [135, 206, 235],
    "slateblue": [106, 90, 205],
    "slategray": [112, 128, 144],
    "slategrey": [112, 128, 144],
    "snow": [255, 250, 250],
    "springgreen": [0, 255, 127],
    "steelblue": [70, 130, 180],
    "tan": [210, 180, 140],
    "teal": [0, 128, 128],
    "thistle": [216, 191, 216],
    "tomato": [255, 99, 71],
    "turquoise": [64, 224, 208],
    "violet": [238, 130, 238],
    "wheat": [245, 222, 179],
    "white": [255, 255, 255],
    "whitesmoke": [245, 245, 245],
    "yellow": [255, 255, 0],
    "yellowgreen": [154, 205, 50]
  };
  /* MIT license */

  var colorString = {
    getRgba: getRgba,
    getHsla: getHsla,
    getRgb: getRgb,
    getHsl: getHsl,
    getHwb: getHwb,
    getAlpha: getAlpha,
    hexString: hexString,
    rgbString: rgbString,
    rgbaString: rgbaString,
    percentString: percentString,
    percentaString: percentaString,
    hslString: hslString,
    hslaString: hslaString,
    hwbString: hwbString,
    keyword: keyword
  };

  function getRgba(string) {
    if (!string) {
      return;
    }

    var abbr = /^#([a-fA-F0-9]{3,4})$/i,
        hex = /^#([a-fA-F0-9]{6}([a-fA-F0-9]{2})?)$/i,
        rgba = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i,
        per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i,
        keyword = /(\w+)/;
    var rgb = [0, 0, 0],
        a = 1,
        match = string.match(abbr),
        hexAlpha = "";

    if (match) {
      match = match[1];
      hexAlpha = match[3];

      for (var i = 0; i < rgb.length; i++) {
        rgb[i] = parseInt(match[i] + match[i], 16);
      }

      if (hexAlpha) {
        a = Math.round(parseInt(hexAlpha + hexAlpha, 16) / 255 * 100) / 100;
      }
    } else if (match = string.match(hex)) {
      hexAlpha = match[2];
      match = match[1];

      for (var i = 0; i < rgb.length; i++) {
        rgb[i] = parseInt(match.slice(i * 2, i * 2 + 2), 16);
      }

      if (hexAlpha) {
        a = Math.round(parseInt(hexAlpha, 16) / 255 * 100) / 100;
      }
    } else if (match = string.match(rgba)) {
      for (var i = 0; i < rgb.length; i++) {
        rgb[i] = parseInt(match[i + 1]);
      }

      a = parseFloat(match[4]);
    } else if (match = string.match(per)) {
      for (var i = 0; i < rgb.length; i++) {
        rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
      }

      a = parseFloat(match[4]);
    } else if (match = string.match(keyword)) {
      if (match[1] == "transparent") {
        return [0, 0, 0, 0];
      }

      rgb = colorName$1[match[1]];

      if (!rgb) {
        return;
      }
    }

    for (var i = 0; i < rgb.length; i++) {
      rgb[i] = scale(rgb[i], 0, 255);
    }

    if (!a && a != 0) {
      a = 1;
    } else {
      a = scale(a, 0, 1);
    }

    rgb[3] = a;
    return rgb;
  }

  function getHsla(string) {
    if (!string) {
      return;
    }

    var hsl = /^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/;
    var match = string.match(hsl);

    if (match) {
      var alpha = parseFloat(match[4]);
      var h = scale(parseInt(match[1]), 0, 360),
          s = scale(parseFloat(match[2]), 0, 100),
          l = scale(parseFloat(match[3]), 0, 100),
          a = scale(isNaN(alpha) ? 1 : alpha, 0, 1);
      return [h, s, l, a];
    }
  }

  function getHwb(string) {
    if (!string) {
      return;
    }

    var hwb = /^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/;
    var match = string.match(hwb);

    if (match) {
      var alpha = parseFloat(match[4]);
      var h = scale(parseInt(match[1]), 0, 360),
          w = scale(parseFloat(match[2]), 0, 100),
          b = scale(parseFloat(match[3]), 0, 100),
          a = scale(isNaN(alpha) ? 1 : alpha, 0, 1);
      return [h, w, b, a];
    }
  }

  function getRgb(string) {
    var rgba = getRgba(string);
    return rgba && rgba.slice(0, 3);
  }

  function getHsl(string) {
    var hsla = getHsla(string);
    return hsla && hsla.slice(0, 3);
  }

  function getAlpha(string) {
    var vals = getRgba(string);

    if (vals) {
      return vals[3];
    } else if (vals = getHsla(string)) {
      return vals[3];
    } else if (vals = getHwb(string)) {
      return vals[3];
    }
  } // generators


  function hexString(rgba, a) {
    var a = a !== undefined && rgba.length === 3 ? a : rgba[3];
    return "#" + hexDouble(rgba[0]) + hexDouble(rgba[1]) + hexDouble(rgba[2]) + (a >= 0 && a < 1 ? hexDouble(Math.round(a * 255)) : "");
  }

  function rgbString(rgba, alpha) {
    if (alpha < 1 || rgba[3] && rgba[3] < 1) {
      return rgbaString(rgba, alpha);
    }

    return "rgb(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2] + ")";
  }

  function rgbaString(rgba, alpha) {
    if (alpha === undefined) {
      alpha = rgba[3] !== undefined ? rgba[3] : 1;
    }

    return "rgba(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2] + ", " + alpha + ")";
  }

  function percentString(rgba, alpha) {
    if (alpha < 1 || rgba[3] && rgba[3] < 1) {
      return percentaString(rgba, alpha);
    }

    var r = Math.round(rgba[0] / 255 * 100),
        g = Math.round(rgba[1] / 255 * 100),
        b = Math.round(rgba[2] / 255 * 100);
    return "rgb(" + r + "%, " + g + "%, " + b + "%)";
  }

  function percentaString(rgba, alpha) {
    var r = Math.round(rgba[0] / 255 * 100),
        g = Math.round(rgba[1] / 255 * 100),
        b = Math.round(rgba[2] / 255 * 100);
    return "rgba(" + r + "%, " + g + "%, " + b + "%, " + (alpha || rgba[3] || 1) + ")";
  }

  function hslString(hsla, alpha) {
    if (alpha < 1 || hsla[3] && hsla[3] < 1) {
      return hslaString(hsla, alpha);
    }

    return "hsl(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%)";
  }

  function hslaString(hsla, alpha) {
    if (alpha === undefined) {
      alpha = hsla[3] !== undefined ? hsla[3] : 1;
    }

    return "hsla(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%, " + alpha + ")";
  } // hwb is a bit different than rgb(a) & hsl(a) since there is no alpha specific syntax
  // (hwb have alpha optional & 1 is default value)


  function hwbString(hwb, alpha) {
    if (alpha === undefined) {
      alpha = hwb[3] !== undefined ? hwb[3] : 1;
    }

    return "hwb(" + hwb[0] + ", " + hwb[1] + "%, " + hwb[2] + "%" + (alpha !== undefined && alpha !== 1 ? ", " + alpha : "") + ")";
  }

  function keyword(rgb) {
    return reverseNames[rgb.slice(0, 3)];
  } // helpers


  function scale(num, min, max) {
    return Math.min(Math.max(min, num), max);
  }

  function hexDouble(num) {
    var str = num.toString(16).toUpperCase();
    return str.length < 2 ? "0" + str : str;
  } //create a list of reverse color names


  var reverseNames = {};

  for (var name in colorName$1) {
    reverseNames[colorName$1[name]] = name;
  }
  /* MIT license */


  var Color = function (obj) {
    if (obj instanceof Color) {
      return obj;
    }

    if (!(this instanceof Color)) {
      return new Color(obj);
    }

    this.valid = false;
    this.values = {
      rgb: [0, 0, 0],
      hsl: [0, 0, 0],
      hsv: [0, 0, 0],
      hwb: [0, 0, 0],
      cmyk: [0, 0, 0, 0],
      alpha: 1
    }; // parse Color() argument

    var vals;

    if (typeof obj === 'string') {
      vals = colorString.getRgba(obj);

      if (vals) {
        this.setValues('rgb', vals);
      } else if (vals = colorString.getHsla(obj)) {
        this.setValues('hsl', vals);
      } else if (vals = colorString.getHwb(obj)) {
        this.setValues('hwb', vals);
      }
    } else if (typeof obj === 'object') {
      vals = obj;

      if (vals.r !== undefined || vals.red !== undefined) {
        this.setValues('rgb', vals);
      } else if (vals.l !== undefined || vals.lightness !== undefined) {
        this.setValues('hsl', vals);
      } else if (vals.v !== undefined || vals.value !== undefined) {
        this.setValues('hsv', vals);
      } else if (vals.w !== undefined || vals.whiteness !== undefined) {
        this.setValues('hwb', vals);
      } else if (vals.c !== undefined || vals.cyan !== undefined) {
        this.setValues('cmyk', vals);
      }
    }
  };

  Color.prototype = {
    isValid: function () {
      return this.valid;
    },
    rgb: function () {
      return this.setSpace('rgb', arguments);
    },
    hsl: function () {
      return this.setSpace('hsl', arguments);
    },
    hsv: function () {
      return this.setSpace('hsv', arguments);
    },
    hwb: function () {
      return this.setSpace('hwb', arguments);
    },
    cmyk: function () {
      return this.setSpace('cmyk', arguments);
    },
    rgbArray: function () {
      return this.values.rgb;
    },
    hslArray: function () {
      return this.values.hsl;
    },
    hsvArray: function () {
      return this.values.hsv;
    },
    hwbArray: function () {
      var values = this.values;

      if (values.alpha !== 1) {
        return values.hwb.concat([values.alpha]);
      }

      return values.hwb;
    },
    cmykArray: function () {
      return this.values.cmyk;
    },
    rgbaArray: function () {
      var values = this.values;
      return values.rgb.concat([values.alpha]);
    },
    hslaArray: function () {
      var values = this.values;
      return values.hsl.concat([values.alpha]);
    },
    alpha: function (val) {
      if (val === undefined) {
        return this.values.alpha;
      }

      this.setValues('alpha', val);
      return this;
    },
    red: function (val) {
      return this.setChannel('rgb', 0, val);
    },
    green: function (val) {
      return this.setChannel('rgb', 1, val);
    },
    blue: function (val) {
      return this.setChannel('rgb', 2, val);
    },
    hue: function (val) {
      if (val) {
        val %= 360;
        val = val < 0 ? 360 + val : val;
      }

      return this.setChannel('hsl', 0, val);
    },
    saturation: function (val) {
      return this.setChannel('hsl', 1, val);
    },
    lightness: function (val) {
      return this.setChannel('hsl', 2, val);
    },
    saturationv: function (val) {
      return this.setChannel('hsv', 1, val);
    },
    whiteness: function (val) {
      return this.setChannel('hwb', 1, val);
    },
    blackness: function (val) {
      return this.setChannel('hwb', 2, val);
    },
    value: function (val) {
      return this.setChannel('hsv', 2, val);
    },
    cyan: function (val) {
      return this.setChannel('cmyk', 0, val);
    },
    magenta: function (val) {
      return this.setChannel('cmyk', 1, val);
    },
    yellow: function (val) {
      return this.setChannel('cmyk', 2, val);
    },
    black: function (val) {
      return this.setChannel('cmyk', 3, val);
    },
    hexString: function () {
      return colorString.hexString(this.values.rgb);
    },
    rgbString: function () {
      return colorString.rgbString(this.values.rgb, this.values.alpha);
    },
    rgbaString: function () {
      return colorString.rgbaString(this.values.rgb, this.values.alpha);
    },
    percentString: function () {
      return colorString.percentString(this.values.rgb, this.values.alpha);
    },
    hslString: function () {
      return colorString.hslString(this.values.hsl, this.values.alpha);
    },
    hslaString: function () {
      return colorString.hslaString(this.values.hsl, this.values.alpha);
    },
    hwbString: function () {
      return colorString.hwbString(this.values.hwb, this.values.alpha);
    },
    keyword: function () {
      return colorString.keyword(this.values.rgb, this.values.alpha);
    },
    rgbNumber: function () {
      var rgb = this.values.rgb;
      return rgb[0] << 16 | rgb[1] << 8 | rgb[2];
    },
    luminosity: function () {
      // http://www.w3.org/TR/WCAG20/#relativeluminancedef
      var rgb = this.values.rgb;
      var lum = [];

      for (var i = 0; i < rgb.length; i++) {
        var chan = rgb[i] / 255;
        lum[i] = chan <= 0.03928 ? chan / 12.92 : Math.pow((chan + 0.055) / 1.055, 2.4);
      }

      return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
    },
    contrast: function (color2) {
      // http://www.w3.org/TR/WCAG20/#contrast-ratiodef
      var lum1 = this.luminosity();
      var lum2 = color2.luminosity();

      if (lum1 > lum2) {
        return (lum1 + 0.05) / (lum2 + 0.05);
      }

      return (lum2 + 0.05) / (lum1 + 0.05);
    },
    level: function (color2) {
      var contrastRatio = this.contrast(color2);

      if (contrastRatio >= 7.1) {
        return 'AAA';
      }

      return contrastRatio >= 4.5 ? 'AA' : '';
    },
    dark: function () {
      // YIQ equation from http://24ways.org/2010/calculating-color-contrast
      var rgb = this.values.rgb;
      var yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
      return yiq < 128;
    },
    light: function () {
      return !this.dark();
    },
    negate: function () {
      var rgb = [];

      for (var i = 0; i < 3; i++) {
        rgb[i] = 255 - this.values.rgb[i];
      }

      this.setValues('rgb', rgb);
      return this;
    },
    lighten: function (ratio) {
      var hsl = this.values.hsl;
      hsl[2] += hsl[2] * ratio;
      this.setValues('hsl', hsl);
      return this;
    },
    darken: function (ratio) {
      var hsl = this.values.hsl;
      hsl[2] -= hsl[2] * ratio;
      this.setValues('hsl', hsl);
      return this;
    },
    saturate: function (ratio) {
      var hsl = this.values.hsl;
      hsl[1] += hsl[1] * ratio;
      this.setValues('hsl', hsl);
      return this;
    },
    desaturate: function (ratio) {
      var hsl = this.values.hsl;
      hsl[1] -= hsl[1] * ratio;
      this.setValues('hsl', hsl);
      return this;
    },
    whiten: function (ratio) {
      var hwb = this.values.hwb;
      hwb[1] += hwb[1] * ratio;
      this.setValues('hwb', hwb);
      return this;
    },
    blacken: function (ratio) {
      var hwb = this.values.hwb;
      hwb[2] += hwb[2] * ratio;
      this.setValues('hwb', hwb);
      return this;
    },
    greyscale: function () {
      var rgb = this.values.rgb; // http://en.wikipedia.org/wiki/Grayscale#Converting_color_to_grayscale

      var val = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
      this.setValues('rgb', [val, val, val]);
      return this;
    },
    clearer: function (ratio) {
      var alpha = this.values.alpha;
      this.setValues('alpha', alpha - alpha * ratio);
      return this;
    },
    opaquer: function (ratio) {
      var alpha = this.values.alpha;
      this.setValues('alpha', alpha + alpha * ratio);
      return this;
    },
    rotate: function (degrees) {
      var hsl = this.values.hsl;
      var hue = (hsl[0] + degrees) % 360;
      hsl[0] = hue < 0 ? 360 + hue : hue;
      this.setValues('hsl', hsl);
      return this;
    },

    /**
     * Ported from sass implementation in C
     * https://github.com/sass/libsass/blob/0e6b4a2850092356aa3ece07c6b249f0221caced/functions.cpp#L209
     */
    mix: function (mixinColor, weight) {
      var color1 = this;
      var color2 = mixinColor;
      var p = weight === undefined ? 0.5 : weight;
      var w = 2 * p - 1;
      var a = color1.alpha() - color2.alpha();
      var w1 = ((w * a === -1 ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
      var w2 = 1 - w1;
      return this.rgb(w1 * color1.red() + w2 * color2.red(), w1 * color1.green() + w2 * color2.green(), w1 * color1.blue() + w2 * color2.blue()).alpha(color1.alpha() * p + color2.alpha() * (1 - p));
    },
    toJSON: function () {
      return this.rgb();
    },
    clone: function () {
      // NOTE(SB): using node-clone creates a dependency to Buffer when using browserify,
      // making the final build way to big to embed in Chart.js. So let's do it manually,
      // assuming that values to clone are 1 dimension arrays containing only numbers,
      // except 'alpha' which is a number.
      var result = new Color();
      var source = this.values;
      var target = result.values;
      var value, type;

      for (var prop in source) {
        if (source.hasOwnProperty(prop)) {
          value = source[prop];
          type = {}.toString.call(value);

          if (type === '[object Array]') {
            target[prop] = value.slice(0);
          } else if (type === '[object Number]') {
            target[prop] = value;
          } else {
            console.error('unexpected color value:', value);
          }
        }
      }

      return result;
    }
  };
  Color.prototype.spaces = {
    rgb: ['red', 'green', 'blue'],
    hsl: ['hue', 'saturation', 'lightness'],
    hsv: ['hue', 'saturation', 'value'],
    hwb: ['hue', 'whiteness', 'blackness'],
    cmyk: ['cyan', 'magenta', 'yellow', 'black']
  };
  Color.prototype.maxes = {
    rgb: [255, 255, 255],
    hsl: [360, 100, 100],
    hsv: [360, 100, 100],
    hwb: [360, 100, 100],
    cmyk: [100, 100, 100, 100]
  };

  Color.prototype.getValues = function (space) {
    var values = this.values;
    var vals = {};

    for (var i = 0; i < space.length; i++) {
      vals[space.charAt(i)] = values[space][i];
    }

    if (values.alpha !== 1) {
      vals.a = values.alpha;
    } // {r: 255, g: 255, b: 255, a: 0.4}


    return vals;
  };

  Color.prototype.setValues = function (space, vals) {
    var values = this.values;
    var spaces = this.spaces;
    var maxes = this.maxes;
    var alpha = 1;
    var i;
    this.valid = true;

    if (space === 'alpha') {
      alpha = vals;
    } else if (vals.length) {
      // [10, 10, 10]
      values[space] = vals.slice(0, space.length);
      alpha = vals[space.length];
    } else if (vals[space.charAt(0)] !== undefined) {
      // {r: 10, g: 10, b: 10}
      for (i = 0; i < space.length; i++) {
        values[space][i] = vals[space.charAt(i)];
      }

      alpha = vals.a;
    } else if (vals[spaces[space][0]] !== undefined) {
      // {red: 10, green: 10, blue: 10}
      var chans = spaces[space];

      for (i = 0; i < space.length; i++) {
        values[space][i] = vals[chans[i]];
      }

      alpha = vals.alpha;
    }

    values.alpha = Math.max(0, Math.min(1, alpha === undefined ? values.alpha : alpha));

    if (space === 'alpha') {
      return false;
    }

    var capped; // cap values of the space prior converting all values

    for (i = 0; i < space.length; i++) {
      capped = Math.max(0, Math.min(maxes[space][i], values[space][i]));
      values[space][i] = Math.round(capped);
    } // convert to all the other color spaces


    for (var sname in spaces) {
      if (sname !== space) {
        values[sname] = colorConvert[space][sname](values[space]);
      }
    }

    return true;
  };

  Color.prototype.setSpace = function (space, args) {
    var vals = args[0];

    if (vals === undefined) {
      // color.rgb()
      return this.getValues(space);
    } // color.rgb(10, 10, 10)


    if (typeof vals === 'number') {
      vals = Array.prototype.slice.call(args);
    }

    this.setValues(space, vals);
    return this;
  };

  Color.prototype.setChannel = function (space, index, val) {
    var svalues = this.values[space];

    if (val === undefined) {
      // color.red()
      return svalues[index];
    } else if (val === svalues[index]) {
      // color.red(color.red())
      return this;
    } // color.red(100)


    svalues[index] = val;
    this.setValues(space, svalues);
    return this;
  };

  if (typeof window !== 'undefined') {
    window.Color = Color;
  }

  var chartjsColor = Color;

  function isValidKey(key) {
    return ['__proto__', 'prototype', 'constructor'].indexOf(key) === -1;
  }
  /**
   * @namespace Chart.helpers
   */


  var helpers = {
    /**
     * An empty function that can be used, for example, for optional callback.
     */
    noop: function () {},

    /**
     * Returns a unique id, sequentially generated from a global variable.
     * @returns {number}
     * @function
     */
    uid: function () {
      var id = 0;
      return function () {
        return id++;
      };
    }(),

    /**
     * Returns true if `value` is neither null nor undefined, else returns false.
     * @param {*} value - The value to test.
     * @returns {boolean}
     * @since 2.7.0
     */
    isNullOrUndef: function (value) {
      return value === null || typeof value === 'undefined';
    },

    /**
     * Returns true if `value` is an array (including typed arrays), else returns false.
     * @param {*} value - The value to test.
     * @returns {boolean}
     * @function
     */
    isArray: function (value) {
      if (Array.isArray && Array.isArray(value)) {
        return true;
      }

      var type = Object.prototype.toString.call(value);

      if (type.substr(0, 7) === '[object' && type.substr(-6) === 'Array]') {
        return true;
      }

      return false;
    },

    /**
     * Returns true if `value` is an object (excluding null), else returns false.
     * @param {*} value - The value to test.
     * @returns {boolean}
     * @since 2.7.0
     */
    isObject: function (value) {
      return value !== null && Object.prototype.toString.call(value) === '[object Object]';
    },

    /**
     * Returns true if `value` is a finite number, else returns false
     * @param {*} value  - The value to test.
     * @returns {boolean}
     */
    isFinite: function (value) {
      return (typeof value === 'number' || value instanceof Number) && isFinite(value);
    },

    /**
     * Returns `value` if defined, else returns `defaultValue`.
     * @param {*} value - The value to return if defined.
     * @param {*} defaultValue - The value to return if `value` is undefined.
     * @returns {*}
     */
    valueOrDefault: function (value, defaultValue) {
      return typeof value === 'undefined' ? defaultValue : value;
    },

    /**
     * Returns value at the given `index` in array if defined, else returns `defaultValue`.
     * @param {Array} value - The array to lookup for value at `index`.
     * @param {number} index - The index in `value` to lookup for value.
     * @param {*} defaultValue - The value to return if `value[index]` is undefined.
     * @returns {*}
     */
    valueAtIndexOrDefault: function (value, index, defaultValue) {
      return helpers.valueOrDefault(helpers.isArray(value) ? value[index] : value, defaultValue);
    },

    /**
     * Calls `fn` with the given `args` in the scope defined by `thisArg` and returns the
     * value returned by `fn`. If `fn` is not a function, this method returns undefined.
     * @param {function} fn - The function to call.
     * @param {Array|undefined|null} args - The arguments with which `fn` should be called.
     * @param {object} [thisArg] - The value of `this` provided for the call to `fn`.
     * @returns {*}
     */
    callback: function (fn, args, thisArg) {
      if (fn && typeof fn.call === 'function') {
        return fn.apply(thisArg, args);
      }
    },

    /**
     * Note(SB) for performance sake, this method should only be used when loopable type
     * is unknown or in none intensive code (not called often and small loopable). Else
     * it's preferable to use a regular for() loop and save extra function calls.
     * @param {object|Array} loopable - The object or array to be iterated.
     * @param {function} fn - The function to call for each item.
     * @param {object} [thisArg] - The value of `this` provided for the call to `fn`.
     * @param {boolean} [reverse] - If true, iterates backward on the loopable.
     */
    each: function (loopable, fn, thisArg, reverse) {
      var i, len, keys;

      if (helpers.isArray(loopable)) {
        len = loopable.length;

        if (reverse) {
          for (i = len - 1; i >= 0; i--) {
            fn.call(thisArg, loopable[i], i);
          }
        } else {
          for (i = 0; i < len; i++) {
            fn.call(thisArg, loopable[i], i);
          }
        }
      } else if (helpers.isObject(loopable)) {
        keys = Object.keys(loopable);
        len = keys.length;

        for (i = 0; i < len; i++) {
          fn.call(thisArg, loopable[keys[i]], keys[i]);
        }
      }
    },

    /**
     * Returns true if the `a0` and `a1` arrays have the same content, else returns false.
     * @see https://stackoverflow.com/a/14853974
     * @param {Array} a0 - The array to compare
     * @param {Array} a1 - The array to compare
     * @returns {boolean}
     */
    arrayEquals: function (a0, a1) {
      var i, ilen, v0, v1;

      if (!a0 || !a1 || a0.length !== a1.length) {
        return false;
      }

      for (i = 0, ilen = a0.length; i < ilen; ++i) {
        v0 = a0[i];
        v1 = a1[i];

        if (v0 instanceof Array && v1 instanceof Array) {
          if (!helpers.arrayEquals(v0, v1)) {
            return false;
          }
        } else if (v0 !== v1) {
          // NOTE: two different object instances will never be equal: {x:20} != {x:20}
          return false;
        }
      }

      return true;
    },

    /**
     * Returns a deep copy of `source` without keeping references on objects and arrays.
     * @param {*} source - The value to clone.
     * @returns {*}
     */
    clone: function (source) {
      if (helpers.isArray(source)) {
        return source.map(helpers.clone);
      }

      if (helpers.isObject(source)) {
        var target = Object.create(source);
        var keys = Object.keys(source);
        var klen = keys.length;
        var k = 0;

        for (; k < klen; ++k) {
          target[keys[k]] = helpers.clone(source[keys[k]]);
        }

        return target;
      }

      return source;
    },

    /**
     * The default merger when Chart.helpers.merge is called without merger option.
     * Note(SB): also used by mergeConfig and mergeScaleConfig as fallback.
     * @private
     */
    _merger: function (key, target, source, options) {
      if (!isValidKey(key)) {
        // We want to ensure we do not copy prototypes over
        // as this can pollute global namespaces
        return;
      }

      var tval = target[key];
      var sval = source[key];

      if (helpers.isObject(tval) && helpers.isObject(sval)) {
        helpers.merge(tval, sval, options);
      } else {
        target[key] = helpers.clone(sval);
      }
    },

    /**
     * Merges source[key] in target[key] only if target[key] is undefined.
     * @private
     */
    _mergerIf: function (key, target, source) {
      if (!isValidKey(key)) {
        // We want to ensure we do not copy prototypes over
        // as this can pollute global namespaces
        return;
      }

      var tval = target[key];
      var sval = source[key];

      if (helpers.isObject(tval) && helpers.isObject(sval)) {
        helpers.mergeIf(tval, sval);
      } else if (!target.hasOwnProperty(key)) {
        target[key] = helpers.clone(sval);
      }
    },

    /**
     * Recursively deep copies `source` properties into `target` with the given `options`.
     * IMPORTANT: `target` is not cloned and will be updated with `source` properties.
     * @param {object} target - The target object in which all sources are merged into.
     * @param {object|object[]} source - Object(s) to merge into `target`.
     * @param {object} [options] - Merging options:
     * @param {function} [options.merger] - The merge method (key, target, source, options)
     * @returns {object} The `target` object.
     */
    merge: function (target, source, options) {
      var sources = helpers.isArray(source) ? source : [source];
      var ilen = sources.length;
      var merge, i, keys, klen, k;

      if (!helpers.isObject(target)) {
        return target;
      }

      options = options || {};
      merge = options.merger || helpers._merger;

      for (i = 0; i < ilen; ++i) {
        source = sources[i];

        if (!helpers.isObject(source)) {
          continue;
        }

        keys = Object.keys(source);

        for (k = 0, klen = keys.length; k < klen; ++k) {
          merge(keys[k], target, source, options);
        }
      }

      return target;
    },

    /**
     * Recursively deep copies `source` properties into `target` *only* if not defined in target.
     * IMPORTANT: `target` is not cloned and will be updated with `source` properties.
     * @param {object} target - The target object in which all sources are merged into.
     * @param {object|object[]} source - Object(s) to merge into `target`.
     * @returns {object} The `target` object.
     */
    mergeIf: function (target, source) {
      return helpers.merge(target, source, {
        merger: helpers._mergerIf
      });
    },

    /**
     * Applies the contents of two or more objects together into the first object.
     * @param {object} target - The target object in which all objects are merged into.
     * @param {object} arg1 - Object containing additional properties to merge in target.
     * @param {object} argN - Additional objects containing properties to merge in target.
     * @returns {object} The `target` object.
     */
    extend: Object.assign || function (target) {
      return helpers.merge(target, [].slice.call(arguments, 1), {
        merger: function (key, dst, src) {
          dst[key] = src[key];
        }
      });
    },

    /**
     * Basic javascript inheritance based on the model created in Backbone.js
     */
    inherits: function (extensions) {
      var me = this;
      var ChartElement = extensions && extensions.hasOwnProperty('constructor') ? extensions.constructor : function () {
        return me.apply(this, arguments);
      };

      var Surrogate = function () {
        this.constructor = ChartElement;
      };

      Surrogate.prototype = me.prototype;
      ChartElement.prototype = new Surrogate();
      ChartElement.extend = helpers.inherits;

      if (extensions) {
        helpers.extend(ChartElement.prototype, extensions);
      }

      ChartElement.__super__ = me.prototype;
      return ChartElement;
    },
    _deprecated: function (scope, value, previous, current) {
      if (value !== undefined) {
        console.warn(scope + ': "' + previous + '" is deprecated. Please use "' + current + '" instead');
      }
    }
  };
  var helpers_core = helpers; // DEPRECATIONS

  /**
   * Provided for backward compatibility, use Chart.helpers.callback instead.
   * @function Chart.helpers.callCallback
   * @deprecated since version 2.6.0
   * @todo remove at version 3
   * @private
   */

  helpers.callCallback = helpers.callback;
  /**
   * Provided for backward compatibility, use Array.prototype.indexOf instead.
   * Array.prototype.indexOf compatibility: Chrome, Opera, Safari, FF1.5+, IE9+
   * @function Chart.helpers.indexOf
   * @deprecated since version 2.7.0
   * @todo remove at version 3
   * @private
   */

  helpers.indexOf = function (array, item, fromIndex) {
    return Array.prototype.indexOf.call(array, item, fromIndex);
  };
  /**
   * Provided for backward compatibility, use Chart.helpers.valueOrDefault instead.
   * @function Chart.helpers.getValueOrDefault
   * @deprecated since version 2.7.0
   * @todo remove at version 3
   * @private
   */


  helpers.getValueOrDefault = helpers.valueOrDefault;
  /**
   * Provided for backward compatibility, use Chart.helpers.valueAtIndexOrDefault instead.
   * @function Chart.helpers.getValueAtIndexOrDefault
   * @deprecated since version 2.7.0
   * @todo remove at version 3
   * @private
   */

  helpers.getValueAtIndexOrDefault = helpers.valueAtIndexOrDefault;
  /**
   * Easing functions adapted from Robert Penner's easing equations.
   * @namespace Chart.helpers.easingEffects
   * @see http://www.robertpenner.com/easing/
   */

  var effects = {
    linear: function (t) {
      return t;
    },
    easeInQuad: function (t) {
      return t * t;
    },
    easeOutQuad: function (t) {
      return -t * (t - 2);
    },
    easeInOutQuad: function (t) {
      if ((t /= 0.5) < 1) {
        return 0.5 * t * t;
      }

      return -0.5 * (--t * (t - 2) - 1);
    },
    easeInCubic: function (t) {
      return t * t * t;
    },
    easeOutCubic: function (t) {
      return (t = t - 1) * t * t + 1;
    },
    easeInOutCubic: function (t) {
      if ((t /= 0.5) < 1) {
        return 0.5 * t * t * t;
      }

      return 0.5 * ((t -= 2) * t * t + 2);
    },
    easeInQuart: function (t) {
      return t * t * t * t;
    },
    easeOutQuart: function (t) {
      return -((t = t - 1) * t * t * t - 1);
    },
    easeInOutQuart: function (t) {
      if ((t /= 0.5) < 1) {
        return 0.5 * t * t * t * t;
      }

      return -0.5 * ((t -= 2) * t * t * t - 2);
    },
    easeInQuint: function (t) {
      return t * t * t * t * t;
    },
    easeOutQuint: function (t) {
      return (t = t - 1) * t * t * t * t + 1;
    },
    easeInOutQuint: function (t) {
      if ((t /= 0.5) < 1) {
        return 0.5 * t * t * t * t * t;
      }

      return 0.5 * ((t -= 2) * t * t * t * t + 2);
    },
    easeInSine: function (t) {
      return -Math.cos(t * (Math.PI / 2)) + 1;
    },
    easeOutSine: function (t) {
      return Math.sin(t * (Math.PI / 2));
    },
    easeInOutSine: function (t) {
      return -0.5 * (Math.cos(Math.PI * t) - 1);
    },
    easeInExpo: function (t) {
      return t === 0 ? 0 : Math.pow(2, 10 * (t - 1));
    },
    easeOutExpo: function (t) {
      return t === 1 ? 1 : -Math.pow(2, -10 * t) + 1;
    },
    easeInOutExpo: function (t) {
      if (t === 0) {
        return 0;
      }

      if (t === 1) {
        return 1;
      }

      if ((t /= 0.5) < 1) {
        return 0.5 * Math.pow(2, 10 * (t - 1));
      }

      return 0.5 * (-Math.pow(2, -10 * --t) + 2);
    },
    easeInCirc: function (t) {
      if (t >= 1) {
        return t;
      }

      return -(Math.sqrt(1 - t * t) - 1);
    },
    easeOutCirc: function (t) {
      return Math.sqrt(1 - (t = t - 1) * t);
    },
    easeInOutCirc: function (t) {
      if ((t /= 0.5) < 1) {
        return -0.5 * (Math.sqrt(1 - t * t) - 1);
      }

      return 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
    },
    easeInElastic: function (t) {
      var s = 1.70158;
      var p = 0;
      var a = 1;

      if (t === 0) {
        return 0;
      }

      if (t === 1) {
        return 1;
      }

      if (!p) {
        p = 0.3;
      }

      if (a < 1) {
        a = 1;
        s = p / 4;
      } else {
        s = p / (2 * Math.PI) * Math.asin(1 / a);
      }

      return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * (2 * Math.PI) / p));
    },
    easeOutElastic: function (t) {
      var s = 1.70158;
      var p = 0;
      var a = 1;

      if (t === 0) {
        return 0;
      }

      if (t === 1) {
        return 1;
      }

      if (!p) {
        p = 0.3;
      }

      if (a < 1) {
        a = 1;
        s = p / 4;
      } else {
        s = p / (2 * Math.PI) * Math.asin(1 / a);
      }

      return a * Math.pow(2, -10 * t) * Math.sin((t - s) * (2 * Math.PI) / p) + 1;
    },
    easeInOutElastic: function (t) {
      var s = 1.70158;
      var p = 0;
      var a = 1;

      if (t === 0) {
        return 0;
      }

      if ((t /= 0.5) === 2) {
        return 1;
      }

      if (!p) {
        p = 0.45;
      }

      if (a < 1) {
        a = 1;
        s = p / 4;
      } else {
        s = p / (2 * Math.PI) * Math.asin(1 / a);
      }

      if (t < 1) {
        return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * (2 * Math.PI) / p));
      }

      return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - s) * (2 * Math.PI) / p) * 0.5 + 1;
    },
    easeInBack: function (t) {
      var s = 1.70158;
      return t * t * ((s + 1) * t - s);
    },
    easeOutBack: function (t) {
      var s = 1.70158;
      return (t = t - 1) * t * ((s + 1) * t + s) + 1;
    },
    easeInOutBack: function (t) {
      var s = 1.70158;

      if ((t /= 0.5) < 1) {
        return 0.5 * (t * t * (((s *= 1.525) + 1) * t - s));
      }

      return 0.5 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2);
    },
    easeInBounce: function (t) {
      return 1 - effects.easeOutBounce(1 - t);
    },
    easeOutBounce: function (t) {
      if (t < 1 / 2.75) {
        return 7.5625 * t * t;
      }

      if (t < 2 / 2.75) {
        return 7.5625 * (t -= 1.5 / 2.75) * t + 0.75;
      }

      if (t < 2.5 / 2.75) {
        return 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375;
      }

      return 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
    },
    easeInOutBounce: function (t) {
      if (t < 0.5) {
        return effects.easeInBounce(t * 2) * 0.5;
      }

      return effects.easeOutBounce(t * 2 - 1) * 0.5 + 0.5;
    }
  };
  var helpers_easing = {
    effects: effects
  }; // DEPRECATIONS

  /**
   * Provided for backward compatibility, use Chart.helpers.easing.effects instead.
   * @function Chart.helpers.easingEffects
   * @deprecated since version 2.7.0
   * @todo remove at version 3
   * @private
   */

  helpers_core.easingEffects = effects;
  var PI = Math.PI;
  var RAD_PER_DEG = PI / 180;
  var DOUBLE_PI = PI * 2;
  var HALF_PI = PI / 2;
  var QUARTER_PI = PI / 4;
  var TWO_THIRDS_PI = PI * 2 / 3;
  /**
   * @namespace Chart.helpers.canvas
   */

  var exports$1 = {
    /**
     * Clears the entire canvas associated to the given `chart`.
     * @param {Chart} chart - The chart for which to clear the canvas.
     */
    clear: function (chart) {
      chart.ctx.clearRect(0, 0, chart.width, chart.height);
    },

    /**
     * Creates a "path" for a rectangle with rounded corners at position (x, y) with a
     * given size (width, height) and the same `radius` for all corners.
     * @param {CanvasRenderingContext2D} ctx - The canvas 2D Context.
     * @param {number} x - The x axis of the coordinate for the rectangle starting point.
     * @param {number} y - The y axis of the coordinate for the rectangle starting point.
     * @param {number} width - The rectangle's width.
     * @param {number} height - The rectangle's height.
     * @param {number} radius - The rounded amount (in pixels) for the four corners.
     * @todo handle `radius` as top-left, top-right, bottom-right, bottom-left array/object?
     */
    roundedRect: function (ctx, x, y, width, height, radius) {
      if (radius) {
        var r = Math.min(radius, height / 2, width / 2);
        var left = x + r;
        var top = y + r;
        var right = x + width - r;
        var bottom = y + height - r;
        ctx.moveTo(x, top);

        if (left < right && top < bottom) {
          ctx.arc(left, top, r, -PI, -HALF_PI);
          ctx.arc(right, top, r, -HALF_PI, 0);
          ctx.arc(right, bottom, r, 0, HALF_PI);
          ctx.arc(left, bottom, r, HALF_PI, PI);
        } else if (left < right) {
          ctx.moveTo(left, y);
          ctx.arc(right, top, r, -HALF_PI, HALF_PI);
          ctx.arc(left, top, r, HALF_PI, PI + HALF_PI);
        } else if (top < bottom) {
          ctx.arc(left, top, r, -PI, 0);
          ctx.arc(left, bottom, r, 0, PI);
        } else {
          ctx.arc(left, top, r, -PI, PI);
        }

        ctx.closePath();
        ctx.moveTo(x, y);
      } else {
        ctx.rect(x, y, width, height);
      }
    },
    drawPoint: function (ctx, style, radius, x, y, rotation) {
      var type, xOffset, yOffset, size, cornerRadius;
      var rad = (rotation || 0) * RAD_PER_DEG;

      if (style && typeof style === 'object') {
        type = style.toString();

        if (type === '[object HTMLImageElement]' || type === '[object HTMLCanvasElement]') {
          ctx.save();
          ctx.translate(x, y);
          ctx.rotate(rad);
          ctx.drawImage(style, -style.width / 2, -style.height / 2, style.width, style.height);
          ctx.restore();
          return;
        }
      }

      if (isNaN(radius) || radius <= 0) {
        return;
      }

      ctx.beginPath();

      switch (style) {
        // Default includes circle
        default:
          ctx.arc(x, y, radius, 0, DOUBLE_PI);
          ctx.closePath();
          break;

        case 'triangle':
          ctx.moveTo(x + Math.sin(rad) * radius, y - Math.cos(rad) * radius);
          rad += TWO_THIRDS_PI;
          ctx.lineTo(x + Math.sin(rad) * radius, y - Math.cos(rad) * radius);
          rad += TWO_THIRDS_PI;
          ctx.lineTo(x + Math.sin(rad) * radius, y - Math.cos(rad) * radius);
          ctx.closePath();
          break;

        case 'rectRounded':
          // NOTE: the rounded rect implementation changed to use `arc` instead of
          // `quadraticCurveTo` since it generates better results when rect is
          // almost a circle. 0.516 (instead of 0.5) produces results with visually
          // closer proportion to the previous impl and it is inscribed in the
          // circle with `radius`. For more details, see the following PRs:
          // https://github.com/chartjs/Chart.js/issues/5597
          // https://github.com/chartjs/Chart.js/issues/5858
          cornerRadius = radius * 0.516;
          size = radius - cornerRadius;
          xOffset = Math.cos(rad + QUARTER_PI) * size;
          yOffset = Math.sin(rad + QUARTER_PI) * size;
          ctx.arc(x - xOffset, y - yOffset, cornerRadius, rad - PI, rad - HALF_PI);
          ctx.arc(x + yOffset, y - xOffset, cornerRadius, rad - HALF_PI, rad);
          ctx.arc(x + xOffset, y + yOffset, cornerRadius, rad, rad + HALF_PI);
          ctx.arc(x - yOffset, y + xOffset, cornerRadius, rad + HALF_PI, rad + PI);
          ctx.closePath();
          break;

        case 'rect':
          if (!rotation) {
            size = Math.SQRT1_2 * radius;
            ctx.rect(x - size, y - size, 2 * size, 2 * size);
            break;
          }

          rad += QUARTER_PI;

        /* falls through */

        case 'rectRot':
          xOffset = Math.cos(rad) * radius;
          yOffset = Math.sin(rad) * radius;
          ctx.moveTo(x - xOffset, y - yOffset);
          ctx.lineTo(x + yOffset, y - xOffset);
          ctx.lineTo(x + xOffset, y + yOffset);
          ctx.lineTo(x - yOffset, y + xOffset);
          ctx.closePath();
          break;

        case 'crossRot':
          rad += QUARTER_PI;

        /* falls through */

        case 'cross':
          xOffset = Math.cos(rad) * radius;
          yOffset = Math.sin(rad) * radius;
          ctx.moveTo(x - xOffset, y - yOffset);
          ctx.lineTo(x + xOffset, y + yOffset);
          ctx.moveTo(x + yOffset, y - xOffset);
          ctx.lineTo(x - yOffset, y + xOffset);
          break;

        case 'star':
          xOffset = Math.cos(rad) * radius;
          yOffset = Math.sin(rad) * radius;
          ctx.moveTo(x - xOffset, y - yOffset);
          ctx.lineTo(x + xOffset, y + yOffset);
          ctx.moveTo(x + yOffset, y - xOffset);
          ctx.lineTo(x - yOffset, y + xOffset);
          rad += QUARTER_PI;
          xOffset = Math.cos(rad) * radius;
          yOffset = Math.sin(rad) * radius;
          ctx.moveTo(x - xOffset, y - yOffset);
          ctx.lineTo(x + xOffset, y + yOffset);
          ctx.moveTo(x + yOffset, y - xOffset);
          ctx.lineTo(x - yOffset, y + xOffset);
          break;

        case 'line':
          xOffset = Math.cos(rad) * radius;
          yOffset = Math.sin(rad) * radius;
          ctx.moveTo(x - xOffset, y - yOffset);
          ctx.lineTo(x + xOffset, y + yOffset);
          break;

        case 'dash':
          ctx.moveTo(x, y);
          ctx.lineTo(x + Math.cos(rad) * radius, y + Math.sin(rad) * radius);
          break;
      }

      ctx.fill();
      ctx.stroke();
    },

    /**
     * Returns true if the point is inside the rectangle
     * @param {object} point - The point to test
     * @param {object} area - The rectangle
     * @returns {boolean}
     * @private
     */
    _isPointInArea: function (point, area) {
      var epsilon = 1e-6; // 1e-6 is margin in pixels for accumulated error.

      return point.x > area.left - epsilon && point.x < area.right + epsilon && point.y > area.top - epsilon && point.y < area.bottom + epsilon;
    },
    clipArea: function (ctx, area) {
      ctx.save();
      ctx.beginPath();
      ctx.rect(area.left, area.top, area.right - area.left, area.bottom - area.top);
      ctx.clip();
    },
    unclipArea: function (ctx) {
      ctx.restore();
    },
    lineTo: function (ctx, previous, target, flip) {
      var stepped = target.steppedLine;

      if (stepped) {
        if (stepped === 'middle') {
          var midpoint = (previous.x + target.x) / 2.0;
          ctx.lineTo(midpoint, flip ? target.y : previous.y);
          ctx.lineTo(midpoint, flip ? previous.y : target.y);
        } else if (stepped === 'after' && !flip || stepped !== 'after' && flip) {
          ctx.lineTo(previous.x, target.y);
        } else {
          ctx.lineTo(target.x, previous.y);
        }

        ctx.lineTo(target.x, target.y);
        return;
      }

      if (!target.tension) {
        ctx.lineTo(target.x, target.y);
        return;
      }

      ctx.bezierCurveTo(flip ? previous.controlPointPreviousX : previous.controlPointNextX, flip ? previous.controlPointPreviousY : previous.controlPointNextY, flip ? target.controlPointNextX : target.controlPointPreviousX, flip ? target.controlPointNextY : target.controlPointPreviousY, target.x, target.y);
    }
  };
  var helpers_canvas = exports$1; // DEPRECATIONS

  /**
   * Provided for backward compatibility, use Chart.helpers.canvas.clear instead.
   * @namespace Chart.helpers.clear
   * @deprecated since version 2.7.0
   * @todo remove at version 3
   * @private
   */

  helpers_core.clear = exports$1.clear;
  /**
   * Provided for backward compatibility, use Chart.helpers.canvas.roundedRect instead.
   * @namespace Chart.helpers.drawRoundedRectangle
   * @deprecated since version 2.7.0
   * @todo remove at version 3
   * @private
   */

  helpers_core.drawRoundedRectangle = function (ctx) {
    ctx.beginPath();
    exports$1.roundedRect.apply(exports$1, arguments);
  };

  var defaults = {
    /**
     * @private
     */
    _set: function (scope, values) {
      return helpers_core.merge(this[scope] || (this[scope] = {}), values);
    }
  }; // TODO(v3): remove 'global' from namespace.  all default are global and
  // there's inconsistency around which options are under 'global'

  defaults._set('global', {
    defaultColor: 'rgba(0,0,0,0.1)',
    defaultFontColor: '#666',
    defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
    defaultFontSize: 12,
    defaultFontStyle: 'normal',
    defaultLineHeight: 1.2,
    showLines: true
  });

  var core_defaults = defaults;
  var valueOrDefault = helpers_core.valueOrDefault;
  /**
   * Converts the given font object into a CSS font string.
   * @param {object} font - A font object.
   * @return {string} The CSS font string. See https://developer.mozilla.org/en-US/docs/Web/CSS/font
   * @private
   */

  function toFontString(font) {
    if (!font || helpers_core.isNullOrUndef(font.size) || helpers_core.isNullOrUndef(font.family)) {
      return null;
    }

    return (font.style ? font.style + ' ' : '') + (font.weight ? font.weight + ' ' : '') + font.size + 'px ' + font.family;
  }
  /**
   * @alias Chart.helpers.options
   * @namespace
   */


  var helpers_options = {
    /**
     * Converts the given line height `value` in pixels for a specific font `size`.
     * @param {number|string} value - The lineHeight to parse (eg. 1.6, '14px', '75%', '1.6em').
     * @param {number} size - The font size (in pixels) used to resolve relative `value`.
     * @returns {number} The effective line height in pixels (size * 1.2 if value is invalid).
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/line-height
     * @since 2.7.0
     */
    toLineHeight: function (value, size) {
      var matches = ('' + value).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);

      if (!matches || matches[1] === 'normal') {
        return size * 1.2;
      }

      value = +matches[2];

      switch (matches[3]) {
        case 'px':
          return value;

        case '%':
          value /= 100;
          break;
      }

      return size * value;
    },

    /**
     * Converts the given value into a padding object with pre-computed width/height.
     * @param {number|object} value - If a number, set the value to all TRBL component,
     *  else, if and object, use defined properties and sets undefined ones to 0.
     * @returns {object} The padding values (top, right, bottom, left, width, height)
     * @since 2.7.0
     */
    toPadding: function (value) {
      var t, r, b, l;

      if (helpers_core.isObject(value)) {
        t = +value.top || 0;
        r = +value.right || 0;
        b = +value.bottom || 0;
        l = +value.left || 0;
      } else {
        t = r = b = l = +value || 0;
      }

      return {
        top: t,
        right: r,
        bottom: b,
        left: l,
        height: t + b,
        width: l + r
      };
    },

    /**
     * Parses font options and returns the font object.
     * @param {object} options - A object that contains font options to be parsed.
     * @return {object} The font object.
     * @todo Support font.* options and renamed to toFont().
     * @private
     */
    _parseFont: function (options) {
      var globalDefaults = core_defaults.global;
      var size = valueOrDefault(options.fontSize, globalDefaults.defaultFontSize);
      var font = {
        family: valueOrDefault(options.fontFamily, globalDefaults.defaultFontFamily),
        lineHeight: helpers_core.options.toLineHeight(valueOrDefault(options.lineHeight, globalDefaults.defaultLineHeight), size),
        size: size,
        style: valueOrDefault(options.fontStyle, globalDefaults.defaultFontStyle),
        weight: null,
        string: ''
      };
      font.string = toFontString(font);
      return font;
    },

    /**
     * Evaluates the given `inputs` sequentially and returns the first defined value.
     * @param {Array} inputs - An array of values, falling back to the last value.
     * @param {object} [context] - If defined and the current value is a function, the value
     * is called with `context` as first argument and the result becomes the new input.
     * @param {number} [index] - If defined and the current value is an array, the value
     * at `index` become the new input.
     * @param {object} [info] - object to return information about resolution in
     * @param {boolean} [info.cacheable] - Will be set to `false` if option is not cacheable.
     * @since 2.7.0
     */
    resolve: function (inputs, context, index, info) {
      var cacheable = true;
      var i, ilen, value;

      for (i = 0, ilen = inputs.length; i < ilen; ++i) {
        value = inputs[i];

        if (value === undefined) {
          continue;
        }

        if (context !== undefined && typeof value === 'function') {
          value = value(context);
          cacheable = false;
        }

        if (index !== undefined && helpers_core.isArray(value)) {
          value = value[index];
          cacheable = false;
        }

        if (value !== undefined) {
          if (info && !cacheable) {
            info.cacheable = false;
          }

          return value;
        }
      }
    }
  };
  /**
   * @alias Chart.helpers.math
   * @namespace
   */

  var exports$2 = {
    /**
     * Returns an array of factors sorted from 1 to sqrt(value)
     * @private
     */
    _factorize: function (value) {
      var result = [];
      var sqrt = Math.sqrt(value);
      var i;

      for (i = 1; i < sqrt; i++) {
        if (value % i === 0) {
          result.push(i);
          result.push(value / i);
        }
      }

      if (sqrt === (sqrt | 0)) {
        // if value is a square number
        result.push(sqrt);
      }

      result.sort(function (a, b) {
        return a - b;
      }).pop();
      return result;
    },
    log10: Math.log10 || function (x) {
      var exponent = Math.log(x) * Math.LOG10E; // Math.LOG10E = 1 / Math.LN10.
      // Check for whole powers of 10,
      // which due to floating point rounding error should be corrected.

      var powerOf10 = Math.round(exponent);
      var isPowerOf10 = x === Math.pow(10, powerOf10);
      return isPowerOf10 ? powerOf10 : exponent;
    }
  };
  var helpers_math = exports$2; // DEPRECATIONS

  /**
   * Provided for backward compatibility, use Chart.helpers.math.log10 instead.
   * @namespace Chart.helpers.log10
   * @deprecated since version 2.9.0
   * @todo remove at version 3
   * @private
   */

  helpers_core.log10 = exports$2.log10;

  var getRtlAdapter = function (rectX, width) {
    return {
      x: function (x) {
        return rectX + rectX + width - x;
      },
      setWidth: function (w) {
        width = w;
      },
      textAlign: function (align) {
        if (align === 'center') {
          return align;
        }

        return align === 'right' ? 'left' : 'right';
      },
      xPlus: function (x, value) {
        return x - value;
      },
      leftForLtr: function (x, itemWidth) {
        return x - itemWidth;
      }
    };
  };

  var getLtrAdapter = function () {
    return {
      x: function (x) {
        return x;
      },
      setWidth: function (w) {// eslint-disable-line no-unused-vars
      },
      textAlign: function (align) {
        return align;
      },
      xPlus: function (x, value) {
        return x + value;
      },
      leftForLtr: function (x, _itemWidth) {
        // eslint-disable-line no-unused-vars
        return x;
      }
    };
  };

  var getAdapter = function (rtl, rectX, width) {
    return rtl ? getRtlAdapter(rectX, width) : getLtrAdapter();
  };

  var overrideTextDirection = function (ctx, direction) {
    var style, original;

    if (direction === 'ltr' || direction === 'rtl') {
      style = ctx.canvas.style;
      original = [style.getPropertyValue('direction'), style.getPropertyPriority('direction')];
      style.setProperty('direction', direction, 'important');
      ctx.prevTextDirection = original;
    }
  };

  var restoreTextDirection = function (ctx) {
    var original = ctx.prevTextDirection;

    if (original !== undefined) {
      delete ctx.prevTextDirection;
      ctx.canvas.style.setProperty('direction', original[0], original[1]);
    }
  };

  var helpers_rtl = {
    getRtlAdapter: getAdapter,
    overrideTextDirection: overrideTextDirection,
    restoreTextDirection: restoreTextDirection
  };
  var helpers$1 = helpers_core;
  var easing = helpers_easing;
  var canvas = helpers_canvas;
  var options = helpers_options;
  var math = helpers_math;
  var rtl = helpers_rtl;
  helpers$1.easing = easing;
  helpers$1.canvas = canvas;
  helpers$1.options = options;
  helpers$1.math = math;
  helpers$1.rtl = rtl;

  function interpolate(start, view, model, ease) {
    var keys = Object.keys(model);
    var i, ilen, key, actual, origin, target, type, c0, c1;

    for (i = 0, ilen = keys.length; i < ilen; ++i) {
      key = keys[i];
      target = model[key]; // if a value is added to the model after pivot() has been called, the view
      // doesn't contain it, so let's initialize the view to the target value.

      if (!view.hasOwnProperty(key)) {
        view[key] = target;
      }

      actual = view[key];

      if (actual === target || key[0] === '_') {
        continue;
      }

      if (!start.hasOwnProperty(key)) {
        start[key] = actual;
      }

      origin = start[key];
      type = typeof target;

      if (type === typeof origin) {
        if (type === 'string') {
          c0 = chartjsColor(origin);

          if (c0.valid) {
            c1 = chartjsColor(target);

            if (c1.valid) {
              view[key] = c1.mix(c0, ease).rgbString();
              continue;
            }
          }
        } else if (helpers$1.isFinite(origin) && helpers$1.isFinite(target)) {
          view[key] = origin + (target - origin) * ease;
          continue;
        }
      }

      view[key] = target;
    }
  }

  var Element = function (configuration) {
    helpers$1.extend(this, configuration);
    this.initialize.apply(this, arguments);
  };

  helpers$1.extend(Element.prototype, {
    _type: undefined,
    initialize: function () {
      this.hidden = false;
    },
    pivot: function () {
      var me = this;

      if (!me._view) {
        me._view = helpers$1.extend({}, me._model);
      }

      me._start = {};
      return me;
    },
    transition: function (ease) {
      var me = this;
      var model = me._model;
      var start = me._start;
      var view = me._view; // No animation -> No Transition

      if (!model || ease === 1) {
        me._view = helpers$1.extend({}, model);
        me._start = null;
        return me;
      }

      if (!view) {
        view = me._view = {};
      }

      if (!start) {
        start = me._start = {};
      }

      interpolate(start, view, model, ease);
      return me;
    },
    tooltipPosition: function () {
      return {
        x: this._model.x,
        y: this._model.y
      };
    },
    hasValue: function () {
      return helpers$1.isNumber(this._model.x) && helpers$1.isNumber(this._model.y);
    }
  });
  Element.extend = helpers$1.inherits;
  var core_element = Element;
  var exports$3 = core_element.extend({
    chart: null,
    // the animation associated chart instance
    currentStep: 0,
    // the current animation step
    numSteps: 60,
    // default number of steps
    easing: '',
    // the easing to use for this animation
    render: null,
    // render function used by the animation service
    onAnimationProgress: null,
    // user specified callback to fire on each step of the animation
    onAnimationComplete: null // user specified callback to fire when the animation finishes

  });
  var core_animation = exports$3; // DEPRECATIONS

  /**
   * Provided for backward compatibility, use Chart.Animation instead
   * @prop Chart.Animation#animationObject
   * @deprecated since version 2.6.0
   * @todo remove at version 3
   */

  Object.defineProperty(exports$3.prototype, 'animationObject', {
    get: function () {
      return this;
    }
  });
  /**
   * Provided for backward compatibility, use Chart.Animation#chart instead
   * @prop Chart.Animation#chartInstance
   * @deprecated since version 2.6.0
   * @todo remove at version 3
   */

  Object.defineProperty(exports$3.prototype, 'chartInstance', {
    get: function () {
      return this.chart;
    },
    set: function (value) {
      this.chart = value;
    }
  });

  core_defaults._set('global', {
    animation: {
      duration: 1000,
      easing: 'easeOutQuart',
      onProgress: helpers$1.noop,
      onComplete: helpers$1.noop
    }
  });

  var core_animations = {
    animations: [],
    request: null,

    /**
     * @param {Chart} chart - The chart to animate.
     * @param {Chart.Animation} animation - The animation that we will animate.
     * @param {number} duration - The animation duration in ms.
     * @param {boolean} lazy - if true, the chart is not marked as animating to enable more responsive interactions
     */
    addAnimation: function (chart, animation, duration, lazy) {
      var animations = this.animations;
      var i, ilen;
      animation.chart = chart;
      animation.startTime = Date.now();
      animation.duration = duration;

      if (!lazy) {
        chart.animating = true;
      }

      for (i = 0, ilen = animations.length; i < ilen; ++i) {
        if (animations[i].chart === chart) {
          animations[i] = animation;
          return;
        }
      }

      animations.push(animation); // If there are no animations queued, manually kickstart a digest, for lack of a better word

      if (animations.length === 1) {
        this.requestAnimationFrame();
      }
    },
    cancelAnimation: function (chart) {
      var index = helpers$1.findIndex(this.animations, function (animation) {
        return animation.chart === chart;
      });

      if (index !== -1) {
        this.animations.splice(index, 1);
        chart.animating = false;
      }
    },
    requestAnimationFrame: function () {
      var me = this;

      if (me.request === null) {
        // Skip animation frame requests until the active one is executed.
        // This can happen when processing mouse events, e.g. 'mousemove'
        // and 'mouseout' events will trigger multiple renders.
        me.request = helpers$1.requestAnimFrame.call(window, function () {
          me.request = null;
          me.startDigest();
        });
      }
    },

    /**
     * @private
     */
    startDigest: function () {
      var me = this;
      me.advance(); // Do we have more stuff to animate?

      if (me.animations.length > 0) {
        me.requestAnimationFrame();
      }
    },

    /**
     * @private
     */
    advance: function () {
      var animations = this.animations;
      var animation, chart, numSteps, nextStep;
      var i = 0; // 1 animation per chart, so we are looping charts here

      while (i < animations.length) {
        animation = animations[i];
        chart = animation.chart;
        numSteps = animation.numSteps; // Make sure that currentStep starts at 1
        // https://github.com/chartjs/Chart.js/issues/6104

        nextStep = Math.floor((Date.now() - animation.startTime) / animation.duration * numSteps) + 1;
        animation.currentStep = Math.min(nextStep, numSteps);
        helpers$1.callback(animation.render, [chart, animation], chart);
        helpers$1.callback(animation.onAnimationProgress, [animation], chart);

        if (animation.currentStep >= numSteps) {
          helpers$1.callback(animation.onAnimationComplete, [animation], chart);
          chart.animating = false;
          animations.splice(i, 1);
        } else {
          ++i;
        }
      }
    }
  };
  var resolve = helpers$1.options.resolve;
  var arrayEvents = ['push', 'pop', 'shift', 'splice', 'unshift'];
  /**
   * Hooks the array methods that add or remove values ('push', pop', 'shift', 'splice',
   * 'unshift') and notify the listener AFTER the array has been altered. Listeners are
   * called on the 'onData*' callbacks (e.g. onDataPush, etc.) with same arguments.
   */

  function listenArrayEvents(array, listener) {
    if (array._chartjs) {
      array._chartjs.listeners.push(listener);

      return;
    }

    Object.defineProperty(array, '_chartjs', {
      configurable: true,
      enumerable: false,
      value: {
        listeners: [listener]
      }
    });
    arrayEvents.forEach(function (key) {
      var method = 'onData' + key.charAt(0).toUpperCase() + key.slice(1);
      var base = array[key];
      Object.defineProperty(array, key, {
        configurable: true,
        enumerable: false,
        value: function () {
          var args = Array.prototype.slice.call(arguments);
          var res = base.apply(this, args);
          helpers$1.each(array._chartjs.listeners, function (object) {
            if (typeof object[method] === 'function') {
              object[method].apply(object, args);
            }
          });
          return res;
        }
      });
    });
  }
  /**
   * Removes the given array event listener and cleanup extra attached properties (such as
   * the _chartjs stub and overridden methods) if array doesn't have any more listeners.
   */


  function unlistenArrayEvents(array, listener) {
    var stub = array._chartjs;

    if (!stub) {
      return;
    }

    var listeners = stub.listeners;
    var index = listeners.indexOf(listener);

    if (index !== -1) {
      listeners.splice(index, 1);
    }

    if (listeners.length > 0) {
      return;
    }

    arrayEvents.forEach(function (key) {
      delete array[key];
    });
    delete array._chartjs;
  } // Base class for all dataset controllers (line, bar, etc)


  var DatasetController = function (chart, datasetIndex) {
    this.initialize(chart, datasetIndex);
  };

  helpers$1.extend(DatasetController.prototype, {
    /**
     * Element type used to generate a meta dataset (e.g. Chart.element.Line).
     * @type {Chart.core.element}
     */
    datasetElementType: null,

    /**
     * Element type used to generate a meta data (e.g. Chart.element.Point).
     * @type {Chart.core.element}
     */
    dataElementType: null,

    /**
     * Dataset element option keys to be resolved in _resolveDatasetElementOptions.
     * A derived controller may override this to resolve controller-specific options.
     * The keys defined here are for backward compatibility for legend styles.
     * @private
     */
    _datasetElementOptions: ['backgroundColor', 'borderCapStyle', 'borderColor', 'borderDash', 'borderDashOffset', 'borderJoinStyle', 'borderWidth'],

    /**
     * Data element option keys to be resolved in _resolveDataElementOptions.
     * A derived controller may override this to resolve controller-specific options.
     * The keys defined here are for backward compatibility for legend styles.
     * @private
     */
    _dataElementOptions: ['backgroundColor', 'borderColor', 'borderWidth', 'pointStyle'],
    initialize: function (chart, datasetIndex) {
      var me = this;
      me.chart = chart;
      me.index = datasetIndex;
      me.linkScales();
      me.addElements();
      me._type = me.getMeta().type;
    },
    updateIndex: function (datasetIndex) {
      this.index = datasetIndex;
    },
    linkScales: function () {
      var me = this;
      var meta = me.getMeta();
      var chart = me.chart;
      var scales = chart.scales;
      var dataset = me.getDataset();
      var scalesOpts = chart.options.scales;

      if (meta.xAxisID === null || !(meta.xAxisID in scales) || dataset.xAxisID) {
        meta.xAxisID = dataset.xAxisID || scalesOpts.xAxes[0].id;
      }

      if (meta.yAxisID === null || !(meta.yAxisID in scales) || dataset.yAxisID) {
        meta.yAxisID = dataset.yAxisID || scalesOpts.yAxes[0].id;
      }
    },
    getDataset: function () {
      return this.chart.data.datasets[this.index];
    },
    getMeta: function () {
      return this.chart.getDatasetMeta(this.index);
    },
    getScaleForId: function (scaleID) {
      return this.chart.scales[scaleID];
    },

    /**
     * @private
     */
    _getValueScaleId: function () {
      return this.getMeta().yAxisID;
    },

    /**
     * @private
     */
    _getIndexScaleId: function () {
      return this.getMeta().xAxisID;
    },

    /**
     * @private
     */
    _getValueScale: function () {
      return this.getScaleForId(this._getValueScaleId());
    },

    /**
     * @private
     */
    _getIndexScale: function () {
      return this.getScaleForId(this._getIndexScaleId());
    },
    reset: function () {
      this._update(true);
    },

    /**
     * @private
     */
    destroy: function () {
      if (this._data) {
        unlistenArrayEvents(this._data, this);
      }
    },
    createMetaDataset: function () {
      var me = this;
      var type = me.datasetElementType;
      return type && new type({
        _chart: me.chart,
        _datasetIndex: me.index
      });
    },
    createMetaData: function (index) {
      var me = this;
      var type = me.dataElementType;
      return type && new type({
        _chart: me.chart,
        _datasetIndex: me.index,
        _index: index
      });
    },
    addElements: function () {
      var me = this;
      var meta = me.getMeta();
      var data = me.getDataset().data || [];
      var metaData = meta.data;
      var i, ilen;

      for (i = 0, ilen = data.length; i < ilen; ++i) {
        metaData[i] = metaData[i] || me.createMetaData(i);
      }

      meta.dataset = meta.dataset || me.createMetaDataset();
    },
    addElementAndReset: function (index) {
      var element = this.createMetaData(index);
      this.getMeta().data.splice(index, 0, element);
      this.updateElement(element, index, true);
    },
    buildOrUpdateElements: function () {
      var me = this;
      var dataset = me.getDataset();
      var data = dataset.data || (dataset.data = []); // In order to correctly handle data addition/deletion animation (an thus simulate
      // real-time charts), we need to monitor these data modifications and synchronize
      // the internal meta data accordingly.

      if (me._data !== data) {
        if (me._data) {
          // This case happens when the user replaced the data array instance.
          unlistenArrayEvents(me._data, me);
        }

        if (data && Object.isExtensible(data)) {
          listenArrayEvents(data, me);
        }

        me._data = data;
      } // Re-sync meta data in case the user replaced the data array or if we missed
      // any updates and so make sure that we handle number of datapoints changing.


      me.resyncElements();
    },

    /**
     * Returns the merged user-supplied and default dataset-level options
     * @private
     */
    _configure: function () {
      var me = this;
      me._config = helpers$1.merge(Object.create(null), [me.chart.options.datasets[me._type], me.getDataset()], {
        merger: function (key, target, source) {
          if (key !== '_meta' && key !== 'data') {
            helpers$1._merger(key, target, source);
          }
        }
      });
    },
    _update: function (reset) {
      var me = this;

      me._configure();

      me._cachedDataOpts = null;
      me.update(reset);
    },
    update: helpers$1.noop,
    transition: function (easingValue) {
      var meta = this.getMeta();
      var elements = meta.data || [];
      var ilen = elements.length;
      var i = 0;

      for (; i < ilen; ++i) {
        elements[i].transition(easingValue);
      }

      if (meta.dataset) {
        meta.dataset.transition(easingValue);
      }
    },
    draw: function () {
      var meta = this.getMeta();
      var elements = meta.data || [];
      var ilen = elements.length;
      var i = 0;

      if (meta.dataset) {
        meta.dataset.draw();
      }

      for (; i < ilen; ++i) {
        elements[i].draw();
      }
    },

    /**
     * Returns a set of predefined style properties that should be used to represent the dataset
     * or the data if the index is specified
     * @param {number} index - data index
     * @return {IStyleInterface} style object
     */
    getStyle: function (index) {
      var me = this;
      var meta = me.getMeta();
      var dataset = meta.dataset;
      var style;

      me._configure();

      if (dataset && index === undefined) {
        style = me._resolveDatasetElementOptions(dataset || {});
      } else {
        index = index || 0;
        style = me._resolveDataElementOptions(meta.data[index] || {}, index);
      }

      if (style.fill === false || style.fill === null) {
        style.backgroundColor = style.borderColor;
      }

      return style;
    },

    /**
     * @private
     */
    _resolveDatasetElementOptions: function (element, hover) {
      var me = this;
      var chart = me.chart;
      var datasetOpts = me._config;
      var custom = element.custom || {};
      var options = chart.options.elements[me.datasetElementType.prototype._type] || {};
      var elementOptions = me._datasetElementOptions;
      var values = {};
      var i, ilen, key, readKey; // Scriptable options

      var context = {
        chart: chart,
        dataset: me.getDataset(),
        datasetIndex: me.index,
        hover: hover
      };

      for (i = 0, ilen = elementOptions.length; i < ilen; ++i) {
        key = elementOptions[i];
        readKey = hover ? 'hover' + key.charAt(0).toUpperCase() + key.slice(1) : key;
        values[key] = resolve([custom[readKey], datasetOpts[readKey], options[readKey]], context);
      }

      return values;
    },

    /**
     * @private
     */
    _resolveDataElementOptions: function (element, index) {
      var me = this;
      var custom = element && element.custom;
      var cached = me._cachedDataOpts;

      if (cached && !custom) {
        return cached;
      }

      var chart = me.chart;
      var datasetOpts = me._config;
      var options = chart.options.elements[me.dataElementType.prototype._type] || {};
      var elementOptions = me._dataElementOptions;
      var values = {}; // Scriptable options

      var context = {
        chart: chart,
        dataIndex: index,
        dataset: me.getDataset(),
        datasetIndex: me.index
      }; // `resolve` sets cacheable to `false` if any option is indexed or scripted

      var info = {
        cacheable: !custom
      };
      var keys, i, ilen, key;
      custom = custom || {};

      if (helpers$1.isArray(elementOptions)) {
        for (i = 0, ilen = elementOptions.length; i < ilen; ++i) {
          key = elementOptions[i];
          values[key] = resolve([custom[key], datasetOpts[key], options[key]], context, index, info);
        }
      } else {
        keys = Object.keys(elementOptions);

        for (i = 0, ilen = keys.length; i < ilen; ++i) {
          key = keys[i];
          values[key] = resolve([custom[key], datasetOpts[elementOptions[key]], datasetOpts[key], options[key]], context, index, info);
        }
      }

      if (info.cacheable) {
        me._cachedDataOpts = Object.freeze(values);
      }

      return values;
    },
    removeHoverStyle: function (element) {
      helpers$1.merge(element._model, element.$previousStyle || {});
      delete element.$previousStyle;
    },
    setHoverStyle: function (element) {
      var dataset = this.chart.data.datasets[element._datasetIndex];
      var index = element._index;
      var custom = element.custom || {};
      var model = element._model;
      var getHoverColor = helpers$1.getHoverColor;
      element.$previousStyle = {
        backgroundColor: model.backgroundColor,
        borderColor: model.borderColor,
        borderWidth: model.borderWidth
      };
      model.backgroundColor = resolve([custom.hoverBackgroundColor, dataset.hoverBackgroundColor, getHoverColor(model.backgroundColor)], undefined, index);
      model.borderColor = resolve([custom.hoverBorderColor, dataset.hoverBorderColor, getHoverColor(model.borderColor)], undefined, index);
      model.borderWidth = resolve([custom.hoverBorderWidth, dataset.hoverBorderWidth, model.borderWidth], undefined, index);
    },

    /**
     * @private
     */
    _removeDatasetHoverStyle: function () {
      var element = this.getMeta().dataset;

      if (element) {
        this.removeHoverStyle(element);
      }
    },

    /**
     * @private
     */
    _setDatasetHoverStyle: function () {
      var element = this.getMeta().dataset;
      var prev = {};
      var i, ilen, key, keys, hoverOptions, model;

      if (!element) {
        return;
      }

      model = element._model;
      hoverOptions = this._resolveDatasetElementOptions(element, true);
      keys = Object.keys(hoverOptions);

      for (i = 0, ilen = keys.length; i < ilen; ++i) {
        key = keys[i];
        prev[key] = model[key];
        model[key] = hoverOptions[key];
      }

      element.$previousStyle = prev;
    },

    /**
     * @private
     */
    resyncElements: function () {
      var me = this;
      var meta = me.getMeta();
      var data = me.getDataset().data;
      var numMeta = meta.data.length;
      var numData = data.length;

      if (numData < numMeta) {
        meta.data.splice(numData, numMeta - numData);
      } else if (numData > numMeta) {
        me.insertElements(numMeta, numData - numMeta);
      }
    },

    /**
     * @private
     */
    insertElements: function (start, count) {
      for (var i = 0; i < count; ++i) {
        this.addElementAndReset(start + i);
      }
    },

    /**
     * @private
     */
    onDataPush: function () {
      var count = arguments.length;
      this.insertElements(this.getDataset().data.length - count, count);
    },

    /**
     * @private
     */
    onDataPop: function () {
      this.getMeta().data.pop();
    },

    /**
     * @private
     */
    onDataShift: function () {
      this.getMeta().data.shift();
    },

    /**
     * @private
     */
    onDataSplice: function (start, count) {
      this.getMeta().data.splice(start, count);
      this.insertElements(start, arguments.length - 2);
    },

    /**
     * @private
     */
    onDataUnshift: function () {
      this.insertElements(0, arguments.length);
    }
  });
  DatasetController.extend = helpers$1.inherits;
  var core_datasetController = DatasetController;
  var TAU = Math.PI * 2;

  core_defaults._set('global', {
    elements: {
      arc: {
        backgroundColor: core_defaults.global.defaultColor,
        borderColor: '#fff',
        borderWidth: 2,
        borderAlign: 'center'
      }
    }
  });

  function clipArc(ctx, arc) {
    var startAngle = arc.startAngle;
    var endAngle = arc.endAngle;
    var pixelMargin = arc.pixelMargin;
    var angleMargin = pixelMargin / arc.outerRadius;
    var x = arc.x;
    var y = arc.y; // Draw an inner border by cliping the arc and drawing a double-width border
    // Enlarge the clipping arc by 0.33 pixels to eliminate glitches between borders

    ctx.beginPath();
    ctx.arc(x, y, arc.outerRadius, startAngle - angleMargin, endAngle + angleMargin);

    if (arc.innerRadius > pixelMargin) {
      angleMargin = pixelMargin / arc.innerRadius;
      ctx.arc(x, y, arc.innerRadius - pixelMargin, endAngle + angleMargin, startAngle - angleMargin, true);
    } else {
      ctx.arc(x, y, pixelMargin, endAngle + Math.PI / 2, startAngle - Math.PI / 2);
    }

    ctx.closePath();
    ctx.clip();
  }

  function drawFullCircleBorders(ctx, vm, arc, inner) {
    var endAngle = arc.endAngle;
    var i;

    if (inner) {
      arc.endAngle = arc.startAngle + TAU;
      clipArc(ctx, arc);
      arc.endAngle = endAngle;

      if (arc.endAngle === arc.startAngle && arc.fullCircles) {
        arc.endAngle += TAU;
        arc.fullCircles--;
      }
    }

    ctx.beginPath();
    ctx.arc(arc.x, arc.y, arc.innerRadius, arc.startAngle + TAU, arc.startAngle, true);

    for (i = 0; i < arc.fullCircles; ++i) {
      ctx.stroke();
    }

    ctx.beginPath();
    ctx.arc(arc.x, arc.y, vm.outerRadius, arc.startAngle, arc.startAngle + TAU);

    for (i = 0; i < arc.fullCircles; ++i) {
      ctx.stroke();
    }
  }

  function drawBorder(ctx, vm, arc) {
    var inner = vm.borderAlign === 'inner';

    if (inner) {
      ctx.lineWidth = vm.borderWidth * 2;
      ctx.lineJoin = 'round';
    } else {
      ctx.lineWidth = vm.borderWidth;
      ctx.lineJoin = 'bevel';
    }

    if (arc.fullCircles) {
      drawFullCircleBorders(ctx, vm, arc, inner);
    }

    if (inner) {
      clipArc(ctx, arc);
    }

    ctx.beginPath();
    ctx.arc(arc.x, arc.y, vm.outerRadius, arc.startAngle, arc.endAngle);
    ctx.arc(arc.x, arc.y, arc.innerRadius, arc.endAngle, arc.startAngle, true);
    ctx.closePath();
    ctx.stroke();
  }

  var element_arc = core_element.extend({
    _type: 'arc',
    inLabelRange: function (mouseX) {
      var vm = this._view;

      if (vm) {
        return Math.pow(mouseX - vm.x, 2) < Math.pow(vm.radius + vm.hoverRadius, 2);
      }

      return false;
    },
    inRange: function (chartX, chartY) {
      var vm = this._view;

      if (vm) {
        var pointRelativePosition = helpers$1.getAngleFromPoint(vm, {
          x: chartX,
          y: chartY
        });
        var angle = pointRelativePosition.angle;
        var distance = pointRelativePosition.distance; // Sanitise angle range

        var startAngle = vm.startAngle;
        var endAngle = vm.endAngle;

        while (endAngle < startAngle) {
          endAngle += TAU;
        }

        while (angle > endAngle) {
          angle -= TAU;
        }

        while (angle < startAngle) {
          angle += TAU;
        } // Check if within the range of the open/close angle


        var betweenAngles = angle >= startAngle && angle <= endAngle;
        var withinRadius = distance >= vm.innerRadius && distance <= vm.outerRadius;
        return betweenAngles && withinRadius;
      }

      return false;
    },
    getCenterPoint: function () {
      var vm = this._view;
      var halfAngle = (vm.startAngle + vm.endAngle) / 2;
      var halfRadius = (vm.innerRadius + vm.outerRadius) / 2;
      return {
        x: vm.x + Math.cos(halfAngle) * halfRadius,
        y: vm.y + Math.sin(halfAngle) * halfRadius
      };
    },
    getArea: function () {
      var vm = this._view;
      return Math.PI * ((vm.endAngle - vm.startAngle) / (2 * Math.PI)) * (Math.pow(vm.outerRadius, 2) - Math.pow(vm.innerRadius, 2));
    },
    tooltipPosition: function () {
      var vm = this._view;
      var centreAngle = vm.startAngle + (vm.endAngle - vm.startAngle) / 2;
      var rangeFromCentre = (vm.outerRadius - vm.innerRadius) / 2 + vm.innerRadius;
      return {
        x: vm.x + Math.cos(centreAngle) * rangeFromCentre,
        y: vm.y + Math.sin(centreAngle) * rangeFromCentre
      };
    },
    draw: function () {
      var ctx = this._chart.ctx;
      var vm = this._view;
      var pixelMargin = vm.borderAlign === 'inner' ? 0.33 : 0;
      var arc = {
        x: vm.x,
        y: vm.y,
        innerRadius: vm.innerRadius,
        outerRadius: Math.max(vm.outerRadius - pixelMargin, 0),
        pixelMargin: pixelMargin,
        startAngle: vm.startAngle,
        endAngle: vm.endAngle,
        fullCircles: Math.floor(vm.circumference / TAU)
      };
      var i;
      ctx.save();
      ctx.fillStyle = vm.backgroundColor;
      ctx.strokeStyle = vm.borderColor;

      if (arc.fullCircles) {
        arc.endAngle = arc.startAngle + TAU;
        ctx.beginPath();
        ctx.arc(arc.x, arc.y, arc.outerRadius, arc.startAngle, arc.endAngle);
        ctx.arc(arc.x, arc.y, arc.innerRadius, arc.endAngle, arc.startAngle, true);
        ctx.closePath();

        for (i = 0; i < arc.fullCircles; ++i) {
          ctx.fill();
        }

        arc.endAngle = arc.startAngle + vm.circumference % TAU;
      }

      ctx.beginPath();
      ctx.arc(arc.x, arc.y, arc.outerRadius, arc.startAngle, arc.endAngle);
      ctx.arc(arc.x, arc.y, arc.innerRadius, arc.endAngle, arc.startAngle, true);
      ctx.closePath();
      ctx.fill();

      if (vm.borderWidth) {
        drawBorder(ctx, vm, arc);
      }

      ctx.restore();
    }
  });
  var valueOrDefault$1 = helpers$1.valueOrDefault;
  var defaultColor = core_defaults.global.defaultColor;

  core_defaults._set('global', {
    elements: {
      line: {
        tension: 0.4,
        backgroundColor: defaultColor,
        borderWidth: 3,
        borderColor: defaultColor,
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        capBezierPoints: true,
        fill: true // do we fill in the area between the line and its base axis

      }
    }
  });

  var element_line = core_element.extend({
    _type: 'line',
    draw: function () {
      var me = this;
      var vm = me._view;
      var ctx = me._chart.ctx;
      var spanGaps = vm.spanGaps;

      var points = me._children.slice(); // clone array


      var globalDefaults = core_defaults.global;
      var globalOptionLineElements = globalDefaults.elements.line;
      var lastDrawnIndex = -1;
      var closePath = me._loop;
      var index, previous, currentVM;

      if (!points.length) {
        return;
      }

      if (me._loop) {
        for (index = 0; index < points.length; ++index) {
          previous = helpers$1.previousItem(points, index); // If the line has an open path, shift the point array

          if (!points[index]._view.skip && previous._view.skip) {
            points = points.slice(index).concat(points.slice(0, index));
            closePath = spanGaps;
            break;
          }
        } // If the line has a close path, add the first point again


        if (closePath) {
          points.push(points[0]);
        }
      }

      ctx.save(); // Stroke Line Options

      ctx.lineCap = vm.borderCapStyle || globalOptionLineElements.borderCapStyle; // IE 9 and 10 do not support line dash

      if (ctx.setLineDash) {
        ctx.setLineDash(vm.borderDash || globalOptionLineElements.borderDash);
      }

      ctx.lineDashOffset = valueOrDefault$1(vm.borderDashOffset, globalOptionLineElements.borderDashOffset);
      ctx.lineJoin = vm.borderJoinStyle || globalOptionLineElements.borderJoinStyle;
      ctx.lineWidth = valueOrDefault$1(vm.borderWidth, globalOptionLineElements.borderWidth);
      ctx.strokeStyle = vm.borderColor || globalDefaults.defaultColor; // Stroke Line

      ctx.beginPath(); // First point moves to it's starting position no matter what

      currentVM = points[0]._view;

      if (!currentVM.skip) {
        ctx.moveTo(currentVM.x, currentVM.y);
        lastDrawnIndex = 0;
      }

      for (index = 1; index < points.length; ++index) {
        currentVM = points[index]._view;
        previous = lastDrawnIndex === -1 ? helpers$1.previousItem(points, index) : points[lastDrawnIndex];

        if (!currentVM.skip) {
          if (lastDrawnIndex !== index - 1 && !spanGaps || lastDrawnIndex === -1) {
            // There was a gap and this is the first point after the gap
            ctx.moveTo(currentVM.x, currentVM.y);
          } else {
            // Line to next point
            helpers$1.canvas.lineTo(ctx, previous._view, currentVM);
          }

          lastDrawnIndex = index;
        }
      }

      if (closePath) {
        ctx.closePath();
      }

      ctx.stroke();
      ctx.restore();
    }
  });
  var valueOrDefault$2 = helpers$1.valueOrDefault;
  var defaultColor$1 = core_defaults.global.defaultColor;

  core_defaults._set('global', {
    elements: {
      point: {
        radius: 3,
        pointStyle: 'circle',
        backgroundColor: defaultColor$1,
        borderColor: defaultColor$1,
        borderWidth: 1,
        // Hover
        hitRadius: 1,
        hoverRadius: 4,
        hoverBorderWidth: 1
      }
    }
  });

  function xRange(mouseX) {
    var vm = this._view;
    return vm ? Math.abs(mouseX - vm.x) < vm.radius + vm.hitRadius : false;
  }

  function yRange(mouseY) {
    var vm = this._view;
    return vm ? Math.abs(mouseY - vm.y) < vm.radius + vm.hitRadius : false;
  }

  var element_point = core_element.extend({
    _type: 'point',
    inRange: function (mouseX, mouseY) {
      var vm = this._view;
      return vm ? Math.pow(mouseX - vm.x, 2) + Math.pow(mouseY - vm.y, 2) < Math.pow(vm.hitRadius + vm.radius, 2) : false;
    },
    inLabelRange: xRange,
    inXRange: xRange,
    inYRange: yRange,
    getCenterPoint: function () {
      var vm = this._view;
      return {
        x: vm.x,
        y: vm.y
      };
    },
    getArea: function () {
      return Math.PI * Math.pow(this._view.radius, 2);
    },
    tooltipPosition: function () {
      var vm = this._view;
      return {
        x: vm.x,
        y: vm.y,
        padding: vm.radius + vm.borderWidth
      };
    },
    draw: function (chartArea) {
      var vm = this._view;
      var ctx = this._chart.ctx;
      var pointStyle = vm.pointStyle;
      var rotation = vm.rotation;
      var radius = vm.radius;
      var x = vm.x;
      var y = vm.y;
      var globalDefaults = core_defaults.global;
      var defaultColor = globalDefaults.defaultColor; // eslint-disable-line no-shadow

      if (vm.skip) {
        return;
      } // Clipping for Points.


      if (chartArea === undefined || helpers$1.canvas._isPointInArea(vm, chartArea)) {
        ctx.strokeStyle = vm.borderColor || defaultColor;
        ctx.lineWidth = valueOrDefault$2(vm.borderWidth, globalDefaults.elements.point.borderWidth);
        ctx.fillStyle = vm.backgroundColor || defaultColor;
        helpers$1.canvas.drawPoint(ctx, pointStyle, radius, x, y, rotation);
      }
    }
  });
  var defaultColor$2 = core_defaults.global.defaultColor;

  core_defaults._set('global', {
    elements: {
      rectangle: {
        backgroundColor: defaultColor$2,
        borderColor: defaultColor$2,
        borderSkipped: 'bottom',
        borderWidth: 0
      }
    }
  });

  function isVertical(vm) {
    return vm && vm.width !== undefined;
  }
  /**
   * Helper function to get the bounds of the bar regardless of the orientation
   * @param bar {Chart.Element.Rectangle} the bar
   * @return {Bounds} bounds of the bar
   * @private
   */


  function getBarBounds(vm) {
    var x1, x2, y1, y2, half;

    if (isVertical(vm)) {
      half = vm.width / 2;
      x1 = vm.x - half;
      x2 = vm.x + half;
      y1 = Math.min(vm.y, vm.base);
      y2 = Math.max(vm.y, vm.base);
    } else {
      half = vm.height / 2;
      x1 = Math.min(vm.x, vm.base);
      x2 = Math.max(vm.x, vm.base);
      y1 = vm.y - half;
      y2 = vm.y + half;
    }

    return {
      left: x1,
      top: y1,
      right: x2,
      bottom: y2
    };
  }

  function swap(orig, v1, v2) {
    return orig === v1 ? v2 : orig === v2 ? v1 : orig;
  }

  function parseBorderSkipped(vm) {
    var edge = vm.borderSkipped;
    var res = {};

    if (!edge) {
      return res;
    }

    if (vm.horizontal) {
      if (vm.base > vm.x) {
        edge = swap(edge, 'left', 'right');
      }
    } else if (vm.base < vm.y) {
      edge = swap(edge, 'bottom', 'top');
    }

    res[edge] = true;
    return res;
  }

  function parseBorderWidth(vm, maxW, maxH) {
    var value = vm.borderWidth;
    var skip = parseBorderSkipped(vm);
    var t, r, b, l;

    if (helpers$1.isObject(value)) {
      t = +value.top || 0;
      r = +value.right || 0;
      b = +value.bottom || 0;
      l = +value.left || 0;
    } else {
      t = r = b = l = +value || 0;
    }

    return {
      t: skip.top || t < 0 ? 0 : t > maxH ? maxH : t,
      r: skip.right || r < 0 ? 0 : r > maxW ? maxW : r,
      b: skip.bottom || b < 0 ? 0 : b > maxH ? maxH : b,
      l: skip.left || l < 0 ? 0 : l > maxW ? maxW : l
    };
  }

  function boundingRects(vm) {
    var bounds = getBarBounds(vm);
    var width = bounds.right - bounds.left;
    var height = bounds.bottom - bounds.top;
    var border = parseBorderWidth(vm, width / 2, height / 2);
    return {
      outer: {
        x: bounds.left,
        y: bounds.top,
        w: width,
        h: height
      },
      inner: {
        x: bounds.left + border.l,
        y: bounds.top + border.t,
        w: width - border.l - border.r,
        h: height - border.t - border.b
      }
    };
  }

  function inRange(vm, x, y) {
    var skipX = x === null;
    var skipY = y === null;
    var bounds = !vm || skipX && skipY ? false : getBarBounds(vm);
    return bounds && (skipX || x >= bounds.left && x <= bounds.right) && (skipY || y >= bounds.top && y <= bounds.bottom);
  }

  var element_rectangle = core_element.extend({
    _type: 'rectangle',
    draw: function () {
      var ctx = this._chart.ctx;
      var vm = this._view;
      var rects = boundingRects(vm);
      var outer = rects.outer;
      var inner = rects.inner;
      ctx.fillStyle = vm.backgroundColor;
      ctx.fillRect(outer.x, outer.y, outer.w, outer.h);

      if (outer.w === inner.w && outer.h === inner.h) {
        return;
      }

      ctx.save();
      ctx.beginPath();
      ctx.rect(outer.x, outer.y, outer.w, outer.h);
      ctx.clip();
      ctx.fillStyle = vm.borderColor;
      ctx.rect(inner.x, inner.y, inner.w, inner.h);
      ctx.fill('evenodd');
      ctx.restore();
    },
    height: function () {
      var vm = this._view;
      return vm.base - vm.y;
    },
    inRange: function (mouseX, mouseY) {
      return inRange(this._view, mouseX, mouseY);
    },
    inLabelRange: function (mouseX, mouseY) {
      var vm = this._view;
      return isVertical(vm) ? inRange(vm, mouseX, null) : inRange(vm, null, mouseY);
    },
    inXRange: function (mouseX) {
      return inRange(this._view, mouseX, null);
    },
    inYRange: function (mouseY) {
      return inRange(this._view, null, mouseY);
    },
    getCenterPoint: function () {
      var vm = this._view;
      var x, y;

      if (isVertical(vm)) {
        x = vm.x;
        y = (vm.y + vm.base) / 2;
      } else {
        x = (vm.x + vm.base) / 2;
        y = vm.y;
      }

      return {
        x: x,
        y: y
      };
    },
    getArea: function () {
      var vm = this._view;
      return isVertical(vm) ? vm.width * Math.abs(vm.y - vm.base) : vm.height * Math.abs(vm.x - vm.base);
    },
    tooltipPosition: function () {
      var vm = this._view;
      return {
        x: vm.x,
        y: vm.y
      };
    }
  });
  var elements = {};
  var Arc = element_arc;
  var Line = element_line;
  var Point = element_point;
  var Rectangle = element_rectangle;
  elements.Arc = Arc;
  elements.Line = Line;
  elements.Point = Point;
  elements.Rectangle = Rectangle;
  var deprecated = helpers$1._deprecated;
  var valueOrDefault$3 = helpers$1.valueOrDefault;

  core_defaults._set('bar', {
    hover: {
      mode: 'label'
    },
    scales: {
      xAxes: [{
        type: 'category',
        offset: true,
        gridLines: {
          offsetGridLines: true
        }
      }],
      yAxes: [{
        type: 'linear'
      }]
    }
  });

  core_defaults._set('global', {
    datasets: {
      bar: {
        categoryPercentage: 0.8,
        barPercentage: 0.9
      }
    }
  });
  /**
   * Computes the "optimal" sample size to maintain bars equally sized while preventing overlap.
   * @private
   */


  function computeMinSampleSize(scale, pixels) {
    var min = scale._length;
    var prev, curr, i, ilen;

    for (i = 1, ilen = pixels.length; i < ilen; ++i) {
      min = Math.min(min, Math.abs(pixels[i] - pixels[i - 1]));
    }

    for (i = 0, ilen = scale.getTicks().length; i < ilen; ++i) {
      curr = scale.getPixelForTick(i);
      min = i > 0 ? Math.min(min, Math.abs(curr - prev)) : min;
      prev = curr;
    }

    return min;
  }
  /**
   * Computes an "ideal" category based on the absolute bar thickness or, if undefined or null,
   * uses the smallest interval (see computeMinSampleSize) that prevents bar overlapping. This
   * mode currently always generates bars equally sized (until we introduce scriptable options?).
   * @private
   */


  function computeFitCategoryTraits(index, ruler, options) {
    var thickness = options.barThickness;
    var count = ruler.stackCount;
    var curr = ruler.pixels[index];
    var min = helpers$1.isNullOrUndef(thickness) ? computeMinSampleSize(ruler.scale, ruler.pixels) : -1;
    var size, ratio;

    if (helpers$1.isNullOrUndef(thickness)) {
      size = min * options.categoryPercentage;
      ratio = options.barPercentage;
    } else {
      // When bar thickness is enforced, category and bar percentages are ignored.
      // Note(SB): we could add support for relative bar thickness (e.g. barThickness: '50%')
      // and deprecate barPercentage since this value is ignored when thickness is absolute.
      size = thickness * count;
      ratio = 1;
    }

    return {
      chunk: size / count,
      ratio: ratio,
      start: curr - size / 2
    };
  }
  /**
   * Computes an "optimal" category that globally arranges bars side by side (no gap when
   * percentage options are 1), based on the previous and following categories. This mode
   * generates bars with different widths when data are not evenly spaced.
   * @private
   */


  function computeFlexCategoryTraits(index, ruler, options) {
    var pixels = ruler.pixels;
    var curr = pixels[index];
    var prev = index > 0 ? pixels[index - 1] : null;
    var next = index < pixels.length - 1 ? pixels[index + 1] : null;
    var percent = options.categoryPercentage;
    var start, size;

    if (prev === null) {
      // first data: its size is double based on the next point or,
      // if it's also the last data, we use the scale size.
      prev = curr - (next === null ? ruler.end - ruler.start : next - curr);
    }

    if (next === null) {
      // last data: its size is also double based on the previous point.
      next = curr + curr - prev;
    }

    start = curr - (curr - Math.min(prev, next)) / 2 * percent;
    size = Math.abs(next - prev) / 2 * percent;
    return {
      chunk: size / ruler.stackCount,
      ratio: options.barPercentage,
      start: start
    };
  }

  var controller_bar = core_datasetController.extend({
    dataElementType: elements.Rectangle,

    /**
     * @private
     */
    _dataElementOptions: ['backgroundColor', 'borderColor', 'borderSkipped', 'borderWidth', 'barPercentage', 'barThickness', 'categoryPercentage', 'maxBarThickness', 'minBarLength'],
    initialize: function () {
      var me = this;
      var meta, scaleOpts;
      core_datasetController.prototype.initialize.apply(me, arguments);
      meta = me.getMeta();
      meta.stack = me.getDataset().stack;
      meta.bar = true;
      scaleOpts = me._getIndexScale().options;
      deprecated('bar chart', scaleOpts.barPercentage, 'scales.[x/y]Axes.barPercentage', 'dataset.barPercentage');
      deprecated('bar chart', scaleOpts.barThickness, 'scales.[x/y]Axes.barThickness', 'dataset.barThickness');
      deprecated('bar chart', scaleOpts.categoryPercentage, 'scales.[x/y]Axes.categoryPercentage', 'dataset.categoryPercentage');
      deprecated('bar chart', me._getValueScale().options.minBarLength, 'scales.[x/y]Axes.minBarLength', 'dataset.minBarLength');
      deprecated('bar chart', scaleOpts.maxBarThickness, 'scales.[x/y]Axes.maxBarThickness', 'dataset.maxBarThickness');
    },
    update: function (reset) {
      var me = this;
      var rects = me.getMeta().data;
      var i, ilen;
      me._ruler = me.getRuler();

      for (i = 0, ilen = rects.length; i < ilen; ++i) {
        me.updateElement(rects[i], i, reset);
      }
    },
    updateElement: function (rectangle, index, reset) {
      var me = this;
      var meta = me.getMeta();
      var dataset = me.getDataset();

      var options = me._resolveDataElementOptions(rectangle, index);

      rectangle._xScale = me.getScaleForId(meta.xAxisID);
      rectangle._yScale = me.getScaleForId(meta.yAxisID);
      rectangle._datasetIndex = me.index;
      rectangle._index = index;
      rectangle._model = {
        backgroundColor: options.backgroundColor,
        borderColor: options.borderColor,
        borderSkipped: options.borderSkipped,
        borderWidth: options.borderWidth,
        datasetLabel: dataset.label,
        label: me.chart.data.labels[index]
      };

      if (helpers$1.isArray(dataset.data[index])) {
        rectangle._model.borderSkipped = null;
      }

      me._updateElementGeometry(rectangle, index, reset, options);

      rectangle.pivot();
    },

    /**
     * @private
     */
    _updateElementGeometry: function (rectangle, index, reset, options) {
      var me = this;
      var model = rectangle._model;

      var vscale = me._getValueScale();

      var base = vscale.getBasePixel();
      var horizontal = vscale.isHorizontal();
      var ruler = me._ruler || me.getRuler();
      var vpixels = me.calculateBarValuePixels(me.index, index, options);
      var ipixels = me.calculateBarIndexPixels(me.index, index, ruler, options);
      model.horizontal = horizontal;
      model.base = reset ? base : vpixels.base;
      model.x = horizontal ? reset ? base : vpixels.head : ipixels.center;
      model.y = horizontal ? ipixels.center : reset ? base : vpixels.head;
      model.height = horizontal ? ipixels.size : undefined;
      model.width = horizontal ? undefined : ipixels.size;
    },

    /**
     * Returns the stacks based on groups and bar visibility.
     * @param {number} [last] - The dataset index
     * @returns {string[]} The list of stack IDs
     * @private
     */
    _getStacks: function (last) {
      var me = this;

      var scale = me._getIndexScale();

      var metasets = scale._getMatchingVisibleMetas(me._type);

      var stacked = scale.options.stacked;
      var ilen = metasets.length;
      var stacks = [];
      var i, meta;

      for (i = 0; i < ilen; ++i) {
        meta = metasets[i]; // stacked   | meta.stack
        //           | found | not found | undefined
        // false     |   x   |     x     |     x
        // true      |       |     x     |
        // undefined |       |     x     |     x

        if (stacked === false || stacks.indexOf(meta.stack) === -1 || stacked === undefined && meta.stack === undefined) {
          stacks.push(meta.stack);
        }

        if (meta.index === last) {
          break;
        }
      }

      return stacks;
    },

    /**
     * Returns the effective number of stacks based on groups and bar visibility.
     * @private
     */
    getStackCount: function () {
      return this._getStacks().length;
    },

    /**
     * Returns the stack index for the given dataset based on groups and bar visibility.
     * @param {number} [datasetIndex] - The dataset index
     * @param {string} [name] - The stack name to find
     * @returns {number} The stack index
     * @private
     */
    getStackIndex: function (datasetIndex, name) {
      var stacks = this._getStacks(datasetIndex);

      var index = name !== undefined ? stacks.indexOf(name) : -1; // indexOf returns -1 if element is not present

      return index === -1 ? stacks.length - 1 : index;
    },

    /**
     * @private
     */
    getRuler: function () {
      var me = this;

      var scale = me._getIndexScale();

      var pixels = [];
      var i, ilen;

      for (i = 0, ilen = me.getMeta().data.length; i < ilen; ++i) {
        pixels.push(scale.getPixelForValue(null, i, me.index));
      }

      return {
        pixels: pixels,
        start: scale._startPixel,
        end: scale._endPixel,
        stackCount: me.getStackCount(),
        scale: scale
      };
    },

    /**
     * Note: pixel values are not clamped to the scale area.
     * @private
     */
    calculateBarValuePixels: function (datasetIndex, index, options) {
      var me = this;
      var chart = me.chart;

      var scale = me._getValueScale();

      var isHorizontal = scale.isHorizontal();
      var datasets = chart.data.datasets;

      var metasets = scale._getMatchingVisibleMetas(me._type);

      var value = scale._parseValue(datasets[datasetIndex].data[index]);

      var minBarLength = options.minBarLength;
      var stacked = scale.options.stacked;
      var stack = me.getMeta().stack;
      var start = value.start === undefined ? 0 : value.max >= 0 && value.min >= 0 ? value.min : value.max;
      var length = value.start === undefined ? value.end : value.max >= 0 && value.min >= 0 ? value.max - value.min : value.min - value.max;
      var ilen = metasets.length;
      var i, imeta, ivalue, base, head, size, stackLength;

      if (stacked || stacked === undefined && stack !== undefined) {
        for (i = 0; i < ilen; ++i) {
          imeta = metasets[i];

          if (imeta.index === datasetIndex) {
            break;
          }

          if (imeta.stack === stack) {
            stackLength = scale._parseValue(datasets[imeta.index].data[index]);
            ivalue = stackLength.start === undefined ? stackLength.end : stackLength.min >= 0 && stackLength.max >= 0 ? stackLength.max : stackLength.min;

            if (value.min < 0 && ivalue < 0 || value.max >= 0 && ivalue > 0) {
              start += ivalue;
            }
          }
        }
      }

      base = scale.getPixelForValue(start);
      head = scale.getPixelForValue(start + length);
      size = head - base;

      if (minBarLength !== undefined && Math.abs(size) < minBarLength) {
        size = minBarLength;

        if (length >= 0 && !isHorizontal || length < 0 && isHorizontal) {
          head = base - minBarLength;
        } else {
          head = base + minBarLength;
        }
      }

      return {
        size: size,
        base: base,
        head: head,
        center: head + size / 2
      };
    },

    /**
     * @private
     */
    calculateBarIndexPixels: function (datasetIndex, index, ruler, options) {
      var me = this;
      var range = options.barThickness === 'flex' ? computeFlexCategoryTraits(index, ruler, options) : computeFitCategoryTraits(index, ruler, options);
      var stackIndex = me.getStackIndex(datasetIndex, me.getMeta().stack);
      var center = range.start + range.chunk * stackIndex + range.chunk / 2;
      var size = Math.min(valueOrDefault$3(options.maxBarThickness, Infinity), range.chunk * range.ratio);
      return {
        base: center - size / 2,
        head: center + size / 2,
        center: center,
        size: size
      };
    },
    draw: function () {
      var me = this;
      var chart = me.chart;

      var scale = me._getValueScale();

      var rects = me.getMeta().data;
      var dataset = me.getDataset();
      var ilen = rects.length;
      var i = 0;
      helpers$1.canvas.clipArea(chart.ctx, chart.chartArea);

      for (; i < ilen; ++i) {
        var val = scale._parseValue(dataset.data[i]);

        if (!isNaN(val.min) && !isNaN(val.max)) {
          rects[i].draw();
        }
      }

      helpers$1.canvas.unclipArea(chart.ctx);
    },

    /**
     * @private
     */
    _resolveDataElementOptions: function () {
      var me = this;
      var values = helpers$1.extend({}, core_datasetController.prototype._resolveDataElementOptions.apply(me, arguments));

      var indexOpts = me._getIndexScale().options;

      var valueOpts = me._getValueScale().options;

      values.barPercentage = valueOrDefault$3(indexOpts.barPercentage, values.barPercentage);
      values.barThickness = valueOrDefault$3(indexOpts.barThickness, values.barThickness);
      values.categoryPercentage = valueOrDefault$3(indexOpts.categoryPercentage, values.categoryPercentage);
      values.maxBarThickness = valueOrDefault$3(indexOpts.maxBarThickness, values.maxBarThickness);
      values.minBarLength = valueOrDefault$3(valueOpts.minBarLength, values.minBarLength);
      return values;
    }
  });
  var valueOrDefault$4 = helpers$1.valueOrDefault;
  var resolve$1 = helpers$1.options.resolve;

  core_defaults._set('bubble', {
    hover: {
      mode: 'single'
    },
    scales: {
      xAxes: [{
        type: 'linear',
        // bubble should probably use a linear scale by default
        position: 'bottom',
        id: 'x-axis-0' // need an ID so datasets can reference the scale

      }],
      yAxes: [{
        type: 'linear',
        position: 'left',
        id: 'y-axis-0'
      }]
    },
    tooltips: {
      callbacks: {
        title: function () {
          // Title doesn't make sense for scatter since we format the data as a point
          return '';
        },
        label: function (item, data) {
          var datasetLabel = data.datasets[item.datasetIndex].label || '';
          var dataPoint = data.datasets[item.datasetIndex].data[item.index];
          return datasetLabel + ': (' + item.xLabel + ', ' + item.yLabel + ', ' + dataPoint.r + ')';
        }
      }
    }
  });

  var controller_bubble = core_datasetController.extend({
    /**
     * @protected
     */
    dataElementType: elements.Point,

    /**
     * @private
     */
    _dataElementOptions: ['backgroundColor', 'borderColor', 'borderWidth', 'hoverBackgroundColor', 'hoverBorderColor', 'hoverBorderWidth', 'hoverRadius', 'hitRadius', 'pointStyle', 'rotation'],

    /**
     * @protected
     */
    update: function (reset) {
      var me = this;
      var meta = me.getMeta();
      var points = meta.data; // Update Points

      helpers$1.each(points, function (point, index) {
        me.updateElement(point, index, reset);
      });
    },

    /**
     * @protected
     */
    updateElement: function (point, index, reset) {
      var me = this;
      var meta = me.getMeta();
      var custom = point.custom || {};
      var xScale = me.getScaleForId(meta.xAxisID);
      var yScale = me.getScaleForId(meta.yAxisID);

      var options = me._resolveDataElementOptions(point, index);

      var data = me.getDataset().data[index];
      var dsIndex = me.index;
      var x = reset ? xScale.getPixelForDecimal(0.5) : xScale.getPixelForValue(typeof data === 'object' ? data : NaN, index, dsIndex);
      var y = reset ? yScale.getBasePixel() : yScale.getPixelForValue(data, index, dsIndex);
      point._xScale = xScale;
      point._yScale = yScale;
      point._options = options;
      point._datasetIndex = dsIndex;
      point._index = index;
      point._model = {
        backgroundColor: options.backgroundColor,
        borderColor: options.borderColor,
        borderWidth: options.borderWidth,
        hitRadius: options.hitRadius,
        pointStyle: options.pointStyle,
        rotation: options.rotation,
        radius: reset ? 0 : options.radius,
        skip: custom.skip || isNaN(x) || isNaN(y),
        x: x,
        y: y
      };
      point.pivot();
    },

    /**
     * @protected
     */
    setHoverStyle: function (point) {
      var model = point._model;
      var options = point._options;
      var getHoverColor = helpers$1.getHoverColor;
      point.$previousStyle = {
        backgroundColor: model.backgroundColor,
        borderColor: model.borderColor,
        borderWidth: model.borderWidth,
        radius: model.radius
      };
      model.backgroundColor = valueOrDefault$4(options.hoverBackgroundColor, getHoverColor(options.backgroundColor));
      model.borderColor = valueOrDefault$4(options.hoverBorderColor, getHoverColor(options.borderColor));
      model.borderWidth = valueOrDefault$4(options.hoverBorderWidth, options.borderWidth);
      model.radius = options.radius + options.hoverRadius;
    },

    /**
     * @private
     */
    _resolveDataElementOptions: function (point, index) {
      var me = this;
      var chart = me.chart;
      var dataset = me.getDataset();
      var custom = point.custom || {};
      var data = dataset.data[index] || {};

      var values = core_datasetController.prototype._resolveDataElementOptions.apply(me, arguments); // Scriptable options


      var context = {
        chart: chart,
        dataIndex: index,
        dataset: dataset,
        datasetIndex: me.index
      }; // In case values were cached (and thus frozen), we need to clone the values

      if (me._cachedDataOpts === values) {
        values = helpers$1.extend({}, values);
      } // Custom radius resolution


      values.radius = resolve$1([custom.radius, data.r, me._config.radius, chart.options.elements.point.radius], context, index);
      return values;
    }
  });
  var valueOrDefault$5 = helpers$1.valueOrDefault;
  var PI$1 = Math.PI;
  var DOUBLE_PI$1 = PI$1 * 2;
  var HALF_PI$1 = PI$1 / 2;

  core_defaults._set('doughnut', {
    animation: {
      // Boolean - Whether we animate the rotation of the Doughnut
      animateRotate: true,
      // Boolean - Whether we animate scaling the Doughnut from the centre
      animateScale: false
    },
    hover: {
      mode: 'single'
    },
    legendCallback: function (chart) {
      var list = document.createElement('ul');
      var data = chart.data;
      var datasets = data.datasets;
      var labels = data.labels;
      var i, ilen, listItem, listItemSpan;
      list.setAttribute('class', chart.id + '-legend');

      if (datasets.length) {
        for (i = 0, ilen = datasets[0].data.length; i < ilen; ++i) {
          listItem = list.appendChild(document.createElement('li'));
          listItemSpan = listItem.appendChild(document.createElement('span'));
          listItemSpan.style.backgroundColor = datasets[0].backgroundColor[i];

          if (labels[i]) {
            listItem.appendChild(document.createTextNode(labels[i]));
          }
        }
      }

      return list.outerHTML;
    },
    legend: {
      labels: {
        generateLabels: function (chart) {
          var data = chart.data;

          if (data.labels.length && data.datasets.length) {
            return data.labels.map(function (label, i) {
              var meta = chart.getDatasetMeta(0);
              var style = meta.controller.getStyle(i);
              return {
                text: label,
                fillStyle: style.backgroundColor,
                strokeStyle: style.borderColor,
                lineWidth: style.borderWidth,
                hidden: isNaN(data.datasets[0].data[i]) || meta.data[i].hidden,
                // Extra data used for toggling the correct item
                index: i
              };
            });
          }

          return [];
        }
      },
      onClick: function (e, legendItem) {
        var index = legendItem.index;
        var chart = this.chart;
        var i, ilen, meta;

        for (i = 0, ilen = (chart.data.datasets || []).length; i < ilen; ++i) {
          meta = chart.getDatasetMeta(i); // toggle visibility of index if exists

          if (meta.data[index]) {
            meta.data[index].hidden = !meta.data[index].hidden;
          }
        }

        chart.update();
      }
    },
    // The percentage of the chart that we cut out of the middle.
    cutoutPercentage: 50,
    // The rotation of the chart, where the first data arc begins.
    rotation: -HALF_PI$1,
    // The total circumference of the chart.
    circumference: DOUBLE_PI$1,
    // Need to override these to give a nice default
    tooltips: {
      callbacks: {
        title: function () {
          return '';
        },
        label: function (tooltipItem, data) {
          var dataLabel = data.labels[tooltipItem.index];
          var value = ': ' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];

          if (helpers$1.isArray(dataLabel)) {
            // show value on first line of multiline label
            // need to clone because we are changing the value
            dataLabel = dataLabel.slice();
            dataLabel[0] += value;
          } else {
            dataLabel += value;
          }

          return dataLabel;
        }
      }
    }
  });

  var controller_doughnut = core_datasetController.extend({
    dataElementType: elements.Arc,
    linkScales: helpers$1.noop,

    /**
     * @private
     */
    _dataElementOptions: ['backgroundColor', 'borderColor', 'borderWidth', 'borderAlign', 'hoverBackgroundColor', 'hoverBorderColor', 'hoverBorderWidth'],
    // Get index of the dataset in relation to the visible datasets. This allows determining the inner and outer radius correctly
    getRingIndex: function (datasetIndex) {
      var ringIndex = 0;

      for (var j = 0; j < datasetIndex; ++j) {
        if (this.chart.isDatasetVisible(j)) {
          ++ringIndex;
        }
      }

      return ringIndex;
    },
    update: function (reset) {
      var me = this;
      var chart = me.chart;
      var chartArea = chart.chartArea;
      var opts = chart.options;
      var ratioX = 1;
      var ratioY = 1;
      var offsetX = 0;
      var offsetY = 0;
      var meta = me.getMeta();
      var arcs = meta.data;
      var cutout = opts.cutoutPercentage / 100 || 0;
      var circumference = opts.circumference;

      var chartWeight = me._getRingWeight(me.index);

      var maxWidth, maxHeight, i, ilen; // If the chart's circumference isn't a full circle, calculate size as a ratio of the width/height of the arc

      if (circumference < DOUBLE_PI$1) {
        var startAngle = opts.rotation % DOUBLE_PI$1;
        startAngle += startAngle >= PI$1 ? -DOUBLE_PI$1 : startAngle < -PI$1 ? DOUBLE_PI$1 : 0;
        var endAngle = startAngle + circumference;
        var startX = Math.cos(startAngle);
        var startY = Math.sin(startAngle);
        var endX = Math.cos(endAngle);
        var endY = Math.sin(endAngle);
        var contains0 = startAngle <= 0 && endAngle >= 0 || endAngle >= DOUBLE_PI$1;
        var contains90 = startAngle <= HALF_PI$1 && endAngle >= HALF_PI$1 || endAngle >= DOUBLE_PI$1 + HALF_PI$1;
        var contains180 = startAngle === -PI$1 || endAngle >= PI$1;
        var contains270 = startAngle <= -HALF_PI$1 && endAngle >= -HALF_PI$1 || endAngle >= PI$1 + HALF_PI$1;
        var minX = contains180 ? -1 : Math.min(startX, startX * cutout, endX, endX * cutout);
        var minY = contains270 ? -1 : Math.min(startY, startY * cutout, endY, endY * cutout);
        var maxX = contains0 ? 1 : Math.max(startX, startX * cutout, endX, endX * cutout);
        var maxY = contains90 ? 1 : Math.max(startY, startY * cutout, endY, endY * cutout);
        ratioX = (maxX - minX) / 2;
        ratioY = (maxY - minY) / 2;
        offsetX = -(maxX + minX) / 2;
        offsetY = -(maxY + minY) / 2;
      }

      for (i = 0, ilen = arcs.length; i < ilen; ++i) {
        arcs[i]._options = me._resolveDataElementOptions(arcs[i], i);
      }

      chart.borderWidth = me.getMaxBorderWidth();
      maxWidth = (chartArea.right - chartArea.left - chart.borderWidth) / ratioX;
      maxHeight = (chartArea.bottom - chartArea.top - chart.borderWidth) / ratioY;
      chart.outerRadius = Math.max(Math.min(maxWidth, maxHeight) / 2, 0);
      chart.innerRadius = Math.max(chart.outerRadius * cutout, 0);
      chart.radiusLength = (chart.outerRadius - chart.innerRadius) / (me._getVisibleDatasetWeightTotal() || 1);
      chart.offsetX = offsetX * chart.outerRadius;
      chart.offsetY = offsetY * chart.outerRadius;
      meta.total = me.calculateTotal();
      me.outerRadius = chart.outerRadius - chart.radiusLength * me._getRingWeightOffset(me.index);
      me.innerRadius = Math.max(me.outerRadius - chart.radiusLength * chartWeight, 0);

      for (i = 0, ilen = arcs.length; i < ilen; ++i) {
        me.updateElement(arcs[i], i, reset);
      }
    },
    updateElement: function (arc, index, reset) {
      var me = this;
      var chart = me.chart;
      var chartArea = chart.chartArea;
      var opts = chart.options;
      var animationOpts = opts.animation;
      var centerX = (chartArea.left + chartArea.right) / 2;
      var centerY = (chartArea.top + chartArea.bottom) / 2;
      var startAngle = opts.rotation; // non reset case handled later

      var endAngle = opts.rotation; // non reset case handled later

      var dataset = me.getDataset();
      var circumference = reset && animationOpts.animateRotate ? 0 : arc.hidden ? 0 : me.calculateCircumference(dataset.data[index]) * (opts.circumference / DOUBLE_PI$1);
      var innerRadius = reset && animationOpts.animateScale ? 0 : me.innerRadius;
      var outerRadius = reset && animationOpts.animateScale ? 0 : me.outerRadius;
      var options = arc._options || {};
      helpers$1.extend(arc, {
        // Utility
        _datasetIndex: me.index,
        _index: index,
        // Desired view properties
        _model: {
          backgroundColor: options.backgroundColor,
          borderColor: options.borderColor,
          borderWidth: options.borderWidth,
          borderAlign: options.borderAlign,
          x: centerX + chart.offsetX,
          y: centerY + chart.offsetY,
          startAngle: startAngle,
          endAngle: endAngle,
          circumference: circumference,
          outerRadius: outerRadius,
          innerRadius: innerRadius,
          label: helpers$1.valueAtIndexOrDefault(dataset.label, index, chart.data.labels[index])
        }
      });
      var model = arc._model; // Set correct angles if not resetting

      if (!reset || !animationOpts.animateRotate) {
        if (index === 0) {
          model.startAngle = opts.rotation;
        } else {
          model.startAngle = me.getMeta().data[index - 1]._model.endAngle;
        }

        model.endAngle = model.startAngle + model.circumference;
      }

      arc.pivot();
    },
    calculateTotal: function () {
      var dataset = this.getDataset();
      var meta = this.getMeta();
      var total = 0;
      var value;
      helpers$1.each(meta.data, function (element, index) {
        value = dataset.data[index];

        if (!isNaN(value) && !element.hidden) {
          total += Math.abs(value);
        }
      });
      /* if (total === 0) {
      	total = NaN;
      }*/

      return total;
    },
    calculateCircumference: function (value) {
      var total = this.getMeta().total;

      if (total > 0 && !isNaN(value)) {
        return DOUBLE_PI$1 * (Math.abs(value) / total);
      }

      return 0;
    },
    // gets the max border or hover width to properly scale pie charts
    getMaxBorderWidth: function (arcs) {
      var me = this;
      var max = 0;
      var chart = me.chart;
      var i, ilen, meta, arc, controller, options, borderWidth, hoverWidth;

      if (!arcs) {
        // Find the outmost visible dataset
        for (i = 0, ilen = chart.data.datasets.length; i < ilen; ++i) {
          if (chart.isDatasetVisible(i)) {
            meta = chart.getDatasetMeta(i);
            arcs = meta.data;

            if (i !== me.index) {
              controller = meta.controller;
            }

            break;
          }
        }
      }

      if (!arcs) {
        return 0;
      }

      for (i = 0, ilen = arcs.length; i < ilen; ++i) {
        arc = arcs[i];

        if (controller) {
          controller._configure();

          options = controller._resolveDataElementOptions(arc, i);
        } else {
          options = arc._options;
        }

        if (options.borderAlign !== 'inner') {
          borderWidth = options.borderWidth;
          hoverWidth = options.hoverBorderWidth;
          max = borderWidth > max ? borderWidth : max;
          max = hoverWidth > max ? hoverWidth : max;
        }
      }

      return max;
    },

    /**
     * @protected
     */
    setHoverStyle: function (arc) {
      var model = arc._model;
      var options = arc._options;
      var getHoverColor = helpers$1.getHoverColor;
      arc.$previousStyle = {
        backgroundColor: model.backgroundColor,
        borderColor: model.borderColor,
        borderWidth: model.borderWidth
      };
      model.backgroundColor = valueOrDefault$5(options.hoverBackgroundColor, getHoverColor(options.backgroundColor));
      model.borderColor = valueOrDefault$5(options.hoverBorderColor, getHoverColor(options.borderColor));
      model.borderWidth = valueOrDefault$5(options.hoverBorderWidth, options.borderWidth);
    },

    /**
     * Get radius length offset of the dataset in relation to the visible datasets weights. This allows determining the inner and outer radius correctly
     * @private
     */
    _getRingWeightOffset: function (datasetIndex) {
      var ringWeightOffset = 0;

      for (var i = 0; i < datasetIndex; ++i) {
        if (this.chart.isDatasetVisible(i)) {
          ringWeightOffset += this._getRingWeight(i);
        }
      }

      return ringWeightOffset;
    },

    /**
     * @private
     */
    _getRingWeight: function (dataSetIndex) {
      return Math.max(valueOrDefault$5(this.chart.data.datasets[dataSetIndex].weight, 1), 0);
    },

    /**
     * Returns the sum of all visibile data set weights.  This value can be 0.
     * @private
     */
    _getVisibleDatasetWeightTotal: function () {
      return this._getRingWeightOffset(this.chart.data.datasets.length);
    }
  });

  core_defaults._set('horizontalBar', {
    hover: {
      mode: 'index',
      axis: 'y'
    },
    scales: {
      xAxes: [{
        type: 'linear',
        position: 'bottom'
      }],
      yAxes: [{
        type: 'category',
        position: 'left',
        offset: true,
        gridLines: {
          offsetGridLines: true
        }
      }]
    },
    elements: {
      rectangle: {
        borderSkipped: 'left'
      }
    },
    tooltips: {
      mode: 'index',
      axis: 'y'
    }
  });

  core_defaults._set('global', {
    datasets: {
      horizontalBar: {
        categoryPercentage: 0.8,
        barPercentage: 0.9
      }
    }
  });

  var controller_horizontalBar = controller_bar.extend({
    /**
     * @private
     */
    _getValueScaleId: function () {
      return this.getMeta().xAxisID;
    },

    /**
     * @private
     */
    _getIndexScaleId: function () {
      return this.getMeta().yAxisID;
    }
  });
  var valueOrDefault$6 = helpers$1.valueOrDefault;
  var resolve$2 = helpers$1.options.resolve;
  var isPointInArea = helpers$1.canvas._isPointInArea;

  core_defaults._set('line', {
    showLines: true,
    spanGaps: false,
    hover: {
      mode: 'label'
    },
    scales: {
      xAxes: [{
        type: 'category',
        id: 'x-axis-0'
      }],
      yAxes: [{
        type: 'linear',
        id: 'y-axis-0'
      }]
    }
  });

  function scaleClip(scale, halfBorderWidth) {
    var tickOpts = scale && scale.options.ticks || {};
    var reverse = tickOpts.reverse;
    var min = tickOpts.min === undefined ? halfBorderWidth : 0;
    var max = tickOpts.max === undefined ? halfBorderWidth : 0;
    return {
      start: reverse ? max : min,
      end: reverse ? min : max
    };
  }

  function defaultClip(xScale, yScale, borderWidth) {
    var halfBorderWidth = borderWidth / 2;
    var x = scaleClip(xScale, halfBorderWidth);
    var y = scaleClip(yScale, halfBorderWidth);
    return {
      top: y.end,
      right: x.end,
      bottom: y.start,
      left: x.start
    };
  }

  function toClip(value) {
    var t, r, b, l;

    if (helpers$1.isObject(value)) {
      t = value.top;
      r = value.right;
      b = value.bottom;
      l = value.left;
    } else {
      t = r = b = l = value;
    }

    return {
      top: t,
      right: r,
      bottom: b,
      left: l
    };
  }

  var controller_line = core_datasetController.extend({
    datasetElementType: elements.Line,
    dataElementType: elements.Point,

    /**
     * @private
     */
    _datasetElementOptions: ['backgroundColor', 'borderCapStyle', 'borderColor', 'borderDash', 'borderDashOffset', 'borderJoinStyle', 'borderWidth', 'cubicInterpolationMode', 'fill'],

    /**
     * @private
     */
    _dataElementOptions: {
      backgroundColor: 'pointBackgroundColor',
      borderColor: 'pointBorderColor',
      borderWidth: 'pointBorderWidth',
      hitRadius: 'pointHitRadius',
      hoverBackgroundColor: 'pointHoverBackgroundColor',
      hoverBorderColor: 'pointHoverBorderColor',
      hoverBorderWidth: 'pointHoverBorderWidth',
      hoverRadius: 'pointHoverRadius',
      pointStyle: 'pointStyle',
      radius: 'pointRadius',
      rotation: 'pointRotation'
    },
    update: function (reset) {
      var me = this;
      var meta = me.getMeta();
      var line = meta.dataset;
      var points = meta.data || [];
      var options = me.chart.options;
      var config = me._config;
      var showLine = me._showLine = valueOrDefault$6(config.showLine, options.showLines);
      var i, ilen;
      me._xScale = me.getScaleForId(meta.xAxisID);
      me._yScale = me.getScaleForId(meta.yAxisID); // Update Line

      if (showLine) {
        // Compatibility: If the properties are defined with only the old name, use those values
        if (config.tension !== undefined && config.lineTension === undefined) {
          config.lineTension = config.tension;
        } // Utility


        line._scale = me._yScale;
        line._datasetIndex = me.index; // Data

        line._children = points; // Model

        line._model = me._resolveDatasetElementOptions(line);
        line.pivot();
      } // Update Points


      for (i = 0, ilen = points.length; i < ilen; ++i) {
        me.updateElement(points[i], i, reset);
      }

      if (showLine && line._model.tension !== 0) {
        me.updateBezierControlPoints();
      } // Now pivot the point for animation


      for (i = 0, ilen = points.length; i < ilen; ++i) {
        points[i].pivot();
      }
    },
    updateElement: function (point, index, reset) {
      var me = this;
      var meta = me.getMeta();
      var custom = point.custom || {};
      var dataset = me.getDataset();
      var datasetIndex = me.index;
      var value = dataset.data[index];
      var xScale = me._xScale;
      var yScale = me._yScale;
      var lineModel = meta.dataset._model;
      var x, y;

      var options = me._resolveDataElementOptions(point, index);

      x = xScale.getPixelForValue(typeof value === 'object' ? value : NaN, index, datasetIndex);
      y = reset ? yScale.getBasePixel() : me.calculatePointY(value, index, datasetIndex); // Utility

      point._xScale = xScale;
      point._yScale = yScale;
      point._options = options;
      point._datasetIndex = datasetIndex;
      point._index = index; // Desired view properties

      point._model = {
        x: x,
        y: y,
        skip: custom.skip || isNaN(x) || isNaN(y),
        // Appearance
        radius: options.radius,
        pointStyle: options.pointStyle,
        rotation: options.rotation,
        backgroundColor: options.backgroundColor,
        borderColor: options.borderColor,
        borderWidth: options.borderWidth,
        tension: valueOrDefault$6(custom.tension, lineModel ? lineModel.tension : 0),
        steppedLine: lineModel ? lineModel.steppedLine : false,
        // Tooltip
        hitRadius: options.hitRadius
      };
    },

    /**
     * @private
     */
    _resolveDatasetElementOptions: function (element) {
      var me = this;
      var config = me._config;
      var custom = element.custom || {};
      var options = me.chart.options;
      var lineOptions = options.elements.line;

      var values = core_datasetController.prototype._resolveDatasetElementOptions.apply(me, arguments); // The default behavior of lines is to break at null values, according
      // to https://github.com/chartjs/Chart.js/issues/2435#issuecomment-216718158
      // This option gives lines the ability to span gaps


      values.spanGaps = valueOrDefault$6(config.spanGaps, options.spanGaps);
      values.tension = valueOrDefault$6(config.lineTension, lineOptions.tension);
      values.steppedLine = resolve$2([custom.steppedLine, config.steppedLine, lineOptions.stepped]);
      values.clip = toClip(valueOrDefault$6(config.clip, defaultClip(me._xScale, me._yScale, values.borderWidth)));
      return values;
    },
    calculatePointY: function (value, index, datasetIndex) {
      var me = this;
      var chart = me.chart;
      var yScale = me._yScale;
      var sumPos = 0;
      var sumNeg = 0;
      var i, ds, dsMeta, stackedRightValue, rightValue, metasets, ilen;

      if (yScale.options.stacked) {
        rightValue = +yScale.getRightValue(value);
        metasets = chart._getSortedVisibleDatasetMetas();
        ilen = metasets.length;

        for (i = 0; i < ilen; ++i) {
          dsMeta = metasets[i];

          if (dsMeta.index === datasetIndex) {
            break;
          }

          ds = chart.data.datasets[dsMeta.index];

          if (dsMeta.type === 'line' && dsMeta.yAxisID === yScale.id) {
            stackedRightValue = +yScale.getRightValue(ds.data[index]);

            if (stackedRightValue < 0) {
              sumNeg += stackedRightValue || 0;
            } else {
              sumPos += stackedRightValue || 0;
            }
          }
        }

        if (rightValue < 0) {
          return yScale.getPixelForValue(sumNeg + rightValue);
        }

        return yScale.getPixelForValue(sumPos + rightValue);
      }

      return yScale.getPixelForValue(value);
    },
    updateBezierControlPoints: function () {
      var me = this;
      var chart = me.chart;
      var meta = me.getMeta();
      var lineModel = meta.dataset._model;
      var area = chart.chartArea;
      var points = meta.data || [];
      var i, ilen, model, controlPoints; // Only consider points that are drawn in case the spanGaps option is used

      if (lineModel.spanGaps) {
        points = points.filter(function (pt) {
          return !pt._model.skip;
        });
      }

      function capControlPoint(pt, min, max) {
        return Math.max(Math.min(pt, max), min);
      }

      if (lineModel.cubicInterpolationMode === 'monotone') {
        helpers$1.splineCurveMonotone(points);
      } else {
        for (i = 0, ilen = points.length; i < ilen; ++i) {
          model = points[i]._model;
          controlPoints = helpers$1.splineCurve(helpers$1.previousItem(points, i)._model, model, helpers$1.nextItem(points, i)._model, lineModel.tension);
          model.controlPointPreviousX = controlPoints.previous.x;
          model.controlPointPreviousY = controlPoints.previous.y;
          model.controlPointNextX = controlPoints.next.x;
          model.controlPointNextY = controlPoints.next.y;
        }
      }

      if (chart.options.elements.line.capBezierPoints) {
        for (i = 0, ilen = points.length; i < ilen; ++i) {
          model = points[i]._model;

          if (isPointInArea(model, area)) {
            if (i > 0 && isPointInArea(points[i - 1]._model, area)) {
              model.controlPointPreviousX = capControlPoint(model.controlPointPreviousX, area.left, area.right);
              model.controlPointPreviousY = capControlPoint(model.controlPointPreviousY, area.top, area.bottom);
            }

            if (i < points.length - 1 && isPointInArea(points[i + 1]._model, area)) {
              model.controlPointNextX = capControlPoint(model.controlPointNextX, area.left, area.right);
              model.controlPointNextY = capControlPoint(model.controlPointNextY, area.top, area.bottom);
            }
          }
        }
      }
    },
    draw: function () {
      var me = this;
      var chart = me.chart;
      var meta = me.getMeta();
      var points = meta.data || [];
      var area = chart.chartArea;
      var canvas = chart.canvas;
      var i = 0;
      var ilen = points.length;
      var clip;

      if (me._showLine) {
        clip = meta.dataset._model.clip;
        helpers$1.canvas.clipArea(chart.ctx, {
          left: clip.left === false ? 0 : area.left - clip.left,
          right: clip.right === false ? canvas.width : area.right + clip.right,
          top: clip.top === false ? 0 : area.top - clip.top,
          bottom: clip.bottom === false ? canvas.height : area.bottom + clip.bottom
        });
        meta.dataset.draw();
        helpers$1.canvas.unclipArea(chart.ctx);
      } // Draw the points


      for (; i < ilen; ++i) {
        points[i].draw(area);
      }
    },

    /**
     * @protected
     */
    setHoverStyle: function (point) {
      var model = point._model;
      var options = point._options;
      var getHoverColor = helpers$1.getHoverColor;
      point.$previousStyle = {
        backgroundColor: model.backgroundColor,
        borderColor: model.borderColor,
        borderWidth: model.borderWidth,
        radius: model.radius
      };
      model.backgroundColor = valueOrDefault$6(options.hoverBackgroundColor, getHoverColor(options.backgroundColor));
      model.borderColor = valueOrDefault$6(options.hoverBorderColor, getHoverColor(options.borderColor));
      model.borderWidth = valueOrDefault$6(options.hoverBorderWidth, options.borderWidth);
      model.radius = valueOrDefault$6(options.hoverRadius, options.radius);
    }
  });
  var resolve$3 = helpers$1.options.resolve;

  core_defaults._set('polarArea', {
    scale: {
      type: 'radialLinear',
      angleLines: {
        display: false
      },
      gridLines: {
        circular: true
      },
      pointLabels: {
        display: false
      },
      ticks: {
        beginAtZero: true
      }
    },
    // Boolean - Whether to animate the rotation of the chart
    animation: {
      animateRotate: true,
      animateScale: true
    },
    startAngle: -0.5 * Math.PI,
    legendCallback: function (chart) {
      var list = document.createElement('ul');
      var data = chart.data;
      var datasets = data.datasets;
      var labels = data.labels;
      var i, ilen, listItem, listItemSpan;
      list.setAttribute('class', chart.id + '-legend');

      if (datasets.length) {
        for (i = 0, ilen = datasets[0].data.length; i < ilen; ++i) {
          listItem = list.appendChild(document.createElement('li'));
          listItemSpan = listItem.appendChild(document.createElement('span'));
          listItemSpan.style.backgroundColor = datasets[0].backgroundColor[i];

          if (labels[i]) {
            listItem.appendChild(document.createTextNode(labels[i]));
          }
        }
      }

      return list.outerHTML;
    },
    legend: {
      labels: {
        generateLabels: function (chart) {
          var data = chart.data;

          if (data.labels.length && data.datasets.length) {
            return data.labels.map(function (label, i) {
              var meta = chart.getDatasetMeta(0);
              var style = meta.controller.getStyle(i);
              return {
                text: label,
                fillStyle: style.backgroundColor,
                strokeStyle: style.borderColor,
                lineWidth: style.borderWidth,
                hidden: isNaN(data.datasets[0].data[i]) || meta.data[i].hidden,
                // Extra data used for toggling the correct item
                index: i
              };
            });
          }

          return [];
        }
      },
      onClick: function (e, legendItem) {
        var index = legendItem.index;
        var chart = this.chart;
        var i, ilen, meta;

        for (i = 0, ilen = (chart.data.datasets || []).length; i < ilen; ++i) {
          meta = chart.getDatasetMeta(i);
          meta.data[index].hidden = !meta.data[index].hidden;
        }

        chart.update();
      }
    },
    // Need to override these to give a nice default
    tooltips: {
      callbacks: {
        title: function () {
          return '';
        },
        label: function (item, data) {
          return data.labels[item.index] + ': ' + item.yLabel;
        }
      }
    }
  });

  var controller_polarArea = core_datasetController.extend({
    dataElementType: elements.Arc,
    linkScales: helpers$1.noop,

    /**
     * @private
     */
    _dataElementOptions: ['backgroundColor', 'borderColor', 'borderWidth', 'borderAlign', 'hoverBackgroundColor', 'hoverBorderColor', 'hoverBorderWidth'],

    /**
     * @private
     */
    _getIndexScaleId: function () {
      return this.chart.scale.id;
    },

    /**
     * @private
     */
    _getValueScaleId: function () {
      return this.chart.scale.id;
    },
    update: function (reset) {
      var me = this;
      var dataset = me.getDataset();
      var meta = me.getMeta();
      var start = me.chart.options.startAngle || 0;
      var starts = me._starts = [];
      var angles = me._angles = [];
      var arcs = meta.data;
      var i, ilen, angle;

      me._updateRadius();

      meta.count = me.countVisibleElements();

      for (i = 0, ilen = dataset.data.length; i < ilen; i++) {
        starts[i] = start;
        angle = me._computeAngle(i);
        angles[i] = angle;
        start += angle;
      }

      for (i = 0, ilen = arcs.length; i < ilen; ++i) {
        arcs[i]._options = me._resolveDataElementOptions(arcs[i], i);
        me.updateElement(arcs[i], i, reset);
      }
    },

    /**
     * @private
     */
    _updateRadius: function () {
      var me = this;
      var chart = me.chart;
      var chartArea = chart.chartArea;
      var opts = chart.options;
      var minSize = Math.min(chartArea.right - chartArea.left, chartArea.bottom - chartArea.top);
      chart.outerRadius = Math.max(minSize / 2, 0);
      chart.innerRadius = Math.max(opts.cutoutPercentage ? chart.outerRadius / 100 * opts.cutoutPercentage : 1, 0);
      chart.radiusLength = (chart.outerRadius - chart.innerRadius) / chart.getVisibleDatasetCount();
      me.outerRadius = chart.outerRadius - chart.radiusLength * me.index;
      me.innerRadius = me.outerRadius - chart.radiusLength;
    },
    updateElement: function (arc, index, reset) {
      var me = this;
      var chart = me.chart;
      var dataset = me.getDataset();
      var opts = chart.options;
      var animationOpts = opts.animation;
      var scale = chart.scale;
      var labels = chart.data.labels;
      var centerX = scale.xCenter;
      var centerY = scale.yCenter; // var negHalfPI = -0.5 * Math.PI;

      var datasetStartAngle = opts.startAngle;
      var distance = arc.hidden ? 0 : scale.getDistanceFromCenterForValue(dataset.data[index]);
      var startAngle = me._starts[index];
      var endAngle = startAngle + (arc.hidden ? 0 : me._angles[index]);
      var resetRadius = animationOpts.animateScale ? 0 : scale.getDistanceFromCenterForValue(dataset.data[index]);
      var options = arc._options || {};
      helpers$1.extend(arc, {
        // Utility
        _datasetIndex: me.index,
        _index: index,
        _scale: scale,
        // Desired view properties
        _model: {
          backgroundColor: options.backgroundColor,
          borderColor: options.borderColor,
          borderWidth: options.borderWidth,
          borderAlign: options.borderAlign,
          x: centerX,
          y: centerY,
          innerRadius: 0,
          outerRadius: reset ? resetRadius : distance,
          startAngle: reset && animationOpts.animateRotate ? datasetStartAngle : startAngle,
          endAngle: reset && animationOpts.animateRotate ? datasetStartAngle : endAngle,
          label: helpers$1.valueAtIndexOrDefault(labels, index, labels[index])
        }
      });
      arc.pivot();
    },
    countVisibleElements: function () {
      var dataset = this.getDataset();
      var meta = this.getMeta();
      var count = 0;
      helpers$1.each(meta.data, function (element, index) {
        if (!isNaN(dataset.data[index]) && !element.hidden) {
          count++;
        }
      });
      return count;
    },

    /**
     * @protected
     */
    setHoverStyle: function (arc) {
      var model = arc._model;
      var options = arc._options;
      var getHoverColor = helpers$1.getHoverColor;
      var valueOrDefault = helpers$1.valueOrDefault;
      arc.$previousStyle = {
        backgroundColor: model.backgroundColor,
        borderColor: model.borderColor,
        borderWidth: model.borderWidth
      };
      model.backgroundColor = valueOrDefault(options.hoverBackgroundColor, getHoverColor(options.backgroundColor));
      model.borderColor = valueOrDefault(options.hoverBorderColor, getHoverColor(options.borderColor));
      model.borderWidth = valueOrDefault(options.hoverBorderWidth, options.borderWidth);
    },

    /**
     * @private
     */
    _computeAngle: function (index) {
      var me = this;
      var count = this.getMeta().count;
      var dataset = me.getDataset();
      var meta = me.getMeta();

      if (isNaN(dataset.data[index]) || meta.data[index].hidden) {
        return 0;
      } // Scriptable options


      var context = {
        chart: me.chart,
        dataIndex: index,
        dataset: dataset,
        datasetIndex: me.index
      };
      return resolve$3([me.chart.options.elements.arc.angle, 2 * Math.PI / count], context, index);
    }
  });

  core_defaults._set('pie', helpers$1.clone(core_defaults.doughnut));

  core_defaults._set('pie', {
    cutoutPercentage: 0
  }); // Pie charts are Doughnut chart with different defaults


  var controller_pie = controller_doughnut;
  var valueOrDefault$7 = helpers$1.valueOrDefault;

  core_defaults._set('radar', {
    spanGaps: false,
    scale: {
      type: 'radialLinear'
    },
    elements: {
      line: {
        fill: 'start',
        tension: 0 // no bezier in radar

      }
    }
  });

  var controller_radar = core_datasetController.extend({
    datasetElementType: elements.Line,
    dataElementType: elements.Point,
    linkScales: helpers$1.noop,

    /**
     * @private
     */
    _datasetElementOptions: ['backgroundColor', 'borderWidth', 'borderColor', 'borderCapStyle', 'borderDash', 'borderDashOffset', 'borderJoinStyle', 'fill'],

    /**
     * @private
     */
    _dataElementOptions: {
      backgroundColor: 'pointBackgroundColor',
      borderColor: 'pointBorderColor',
      borderWidth: 'pointBorderWidth',
      hitRadius: 'pointHitRadius',
      hoverBackgroundColor: 'pointHoverBackgroundColor',
      hoverBorderColor: 'pointHoverBorderColor',
      hoverBorderWidth: 'pointHoverBorderWidth',
      hoverRadius: 'pointHoverRadius',
      pointStyle: 'pointStyle',
      radius: 'pointRadius',
      rotation: 'pointRotation'
    },

    /**
     * @private
     */
    _getIndexScaleId: function () {
      return this.chart.scale.id;
    },

    /**
     * @private
     */
    _getValueScaleId: function () {
      return this.chart.scale.id;
    },
    update: function (reset) {
      var me = this;
      var meta = me.getMeta();
      var line = meta.dataset;
      var points = meta.data || [];
      var scale = me.chart.scale;
      var config = me._config;
      var i, ilen; // Compatibility: If the properties are defined with only the old name, use those values

      if (config.tension !== undefined && config.lineTension === undefined) {
        config.lineTension = config.tension;
      } // Utility


      line._scale = scale;
      line._datasetIndex = me.index; // Data

      line._children = points;
      line._loop = true; // Model

      line._model = me._resolveDatasetElementOptions(line);
      line.pivot(); // Update Points

      for (i = 0, ilen = points.length; i < ilen; ++i) {
        me.updateElement(points[i], i, reset);
      } // Update bezier control points


      me.updateBezierControlPoints(); // Now pivot the point for animation

      for (i = 0, ilen = points.length; i < ilen; ++i) {
        points[i].pivot();
      }
    },
    updateElement: function (point, index, reset) {
      var me = this;
      var custom = point.custom || {};
      var dataset = me.getDataset();
      var scale = me.chart.scale;
      var pointPosition = scale.getPointPositionForValue(index, dataset.data[index]);

      var options = me._resolveDataElementOptions(point, index);

      var lineModel = me.getMeta().dataset._model;

      var x = reset ? scale.xCenter : pointPosition.x;
      var y = reset ? scale.yCenter : pointPosition.y; // Utility

      point._scale = scale;
      point._options = options;
      point._datasetIndex = me.index;
      point._index = index; // Desired view properties

      point._model = {
        x: x,
        // value not used in dataset scale, but we want a consistent API between scales
        y: y,
        skip: custom.skip || isNaN(x) || isNaN(y),
        // Appearance
        radius: options.radius,
        pointStyle: options.pointStyle,
        rotation: options.rotation,
        backgroundColor: options.backgroundColor,
        borderColor: options.borderColor,
        borderWidth: options.borderWidth,
        tension: valueOrDefault$7(custom.tension, lineModel ? lineModel.tension : 0),
        // Tooltip
        hitRadius: options.hitRadius
      };
    },

    /**
     * @private
     */
    _resolveDatasetElementOptions: function () {
      var me = this;
      var config = me._config;
      var options = me.chart.options;

      var values = core_datasetController.prototype._resolveDatasetElementOptions.apply(me, arguments);

      values.spanGaps = valueOrDefault$7(config.spanGaps, options.spanGaps);
      values.tension = valueOrDefault$7(config.lineTension, options.elements.line.tension);
      return values;
    },
    updateBezierControlPoints: function () {
      var me = this;
      var meta = me.getMeta();
      var area = me.chart.chartArea;
      var points = meta.data || [];
      var i, ilen, model, controlPoints; // Only consider points that are drawn in case the spanGaps option is used

      if (meta.dataset._model.spanGaps) {
        points = points.filter(function (pt) {
          return !pt._model.skip;
        });
      }

      function capControlPoint(pt, min, max) {
        return Math.max(Math.min(pt, max), min);
      }

      for (i = 0, ilen = points.length; i < ilen; ++i) {
        model = points[i]._model;
        controlPoints = helpers$1.splineCurve(helpers$1.previousItem(points, i, true)._model, model, helpers$1.nextItem(points, i, true)._model, model.tension); // Prevent the bezier going outside of the bounds of the graph

        model.controlPointPreviousX = capControlPoint(controlPoints.previous.x, area.left, area.right);
        model.controlPointPreviousY = capControlPoint(controlPoints.previous.y, area.top, area.bottom);
        model.controlPointNextX = capControlPoint(controlPoints.next.x, area.left, area.right);
        model.controlPointNextY = capControlPoint(controlPoints.next.y, area.top, area.bottom);
      }
    },
    setHoverStyle: function (point) {
      var model = point._model;
      var options = point._options;
      var getHoverColor = helpers$1.getHoverColor;
      point.$previousStyle = {
        backgroundColor: model.backgroundColor,
        borderColor: model.borderColor,
        borderWidth: model.borderWidth,
        radius: model.radius
      };
      model.backgroundColor = valueOrDefault$7(options.hoverBackgroundColor, getHoverColor(options.backgroundColor));
      model.borderColor = valueOrDefault$7(options.hoverBorderColor, getHoverColor(options.borderColor));
      model.borderWidth = valueOrDefault$7(options.hoverBorderWidth, options.borderWidth);
      model.radius = valueOrDefault$7(options.hoverRadius, options.radius);
    }
  });

  core_defaults._set('scatter', {
    hover: {
      mode: 'single'
    },
    scales: {
      xAxes: [{
        id: 'x-axis-1',
        // need an ID so datasets can reference the scale
        type: 'linear',
        // scatter should not use a category axis
        position: 'bottom'
      }],
      yAxes: [{
        id: 'y-axis-1',
        type: 'linear',
        position: 'left'
      }]
    },
    tooltips: {
      callbacks: {
        title: function () {
          return ''; // doesn't make sense for scatter since data are formatted as a point
        },
        label: function (item) {
          return '(' + item.xLabel + ', ' + item.yLabel + ')';
        }
      }
    }
  });

  core_defaults._set('global', {
    datasets: {
      scatter: {
        showLine: false
      }
    }
  }); // Scatter charts use line controllers


  var controller_scatter = controller_line; // NOTE export a map in which the key represents the controller type, not
  // the class, and so must be CamelCase in order to be correctly retrieved
  // by the controller in core.controller.js (`controllers[meta.type]`).

  var controllers = {
    bar: controller_bar,
    bubble: controller_bubble,
    doughnut: controller_doughnut,
    horizontalBar: controller_horizontalBar,
    line: controller_line,
    polarArea: controller_polarArea,
    pie: controller_pie,
    radar: controller_radar,
    scatter: controller_scatter
  };
  /**
   * Helper function to get relative position for an event
   * @param {Event|IEvent} event - The event to get the position for
   * @param {Chart} chart - The chart
   * @returns {object} the event position
   */

  function getRelativePosition(e, chart) {
    if (e.native) {
      return {
        x: e.x,
        y: e.y
      };
    }

    return helpers$1.getRelativePosition(e, chart);
  }
  /**
   * Helper function to traverse all of the visible elements in the chart
   * @param {Chart} chart - the chart
   * @param {function} handler - the callback to execute for each visible item
   */


  function parseVisibleItems(chart, handler) {
    var metasets = chart._getSortedVisibleDatasetMetas();

    var metadata, i, j, ilen, jlen, element;

    for (i = 0, ilen = metasets.length; i < ilen; ++i) {
      metadata = metasets[i].data;

      for (j = 0, jlen = metadata.length; j < jlen; ++j) {
        element = metadata[j];

        if (!element._view.skip) {
          handler(element);
        }
      }
    }
  }
  /**
   * Helper function to get the items that intersect the event position
   * @param {ChartElement[]} items - elements to filter
   * @param {object} position - the point to be nearest to
   * @return {ChartElement[]} the nearest items
   */


  function getIntersectItems(chart, position) {
    var elements = [];
    parseVisibleItems(chart, function (element) {
      if (element.inRange(position.x, position.y)) {
        elements.push(element);
      }
    });
    return elements;
  }
  /**
   * Helper function to get the items nearest to the event position considering all visible items in teh chart
   * @param {Chart} chart - the chart to look at elements from
   * @param {object} position - the point to be nearest to
   * @param {boolean} intersect - if true, only consider items that intersect the position
   * @param {function} distanceMetric - function to provide the distance between points
   * @return {ChartElement[]} the nearest items
   */


  function getNearestItems(chart, position, intersect, distanceMetric) {
    var minDistance = Number.POSITIVE_INFINITY;
    var nearestItems = [];
    parseVisibleItems(chart, function (element) {
      if (intersect && !element.inRange(position.x, position.y)) {
        return;
      }

      var center = element.getCenterPoint();
      var distance = distanceMetric(position, center);

      if (distance < minDistance) {
        nearestItems = [element];
        minDistance = distance;
      } else if (distance === minDistance) {
        // Can have multiple items at the same distance in which case we sort by size
        nearestItems.push(element);
      }
    });
    return nearestItems;
  }
  /**
   * Get a distance metric function for two points based on the
   * axis mode setting
   * @param {string} axis - the axis mode. x|y|xy
   */


  function getDistanceMetricForAxis(axis) {
    var useX = axis.indexOf('x') !== -1;
    var useY = axis.indexOf('y') !== -1;
    return function (pt1, pt2) {
      var deltaX = useX ? Math.abs(pt1.x - pt2.x) : 0;
      var deltaY = useY ? Math.abs(pt1.y - pt2.y) : 0;
      return Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
    };
  }

  function indexMode(chart, e, options) {
    var position = getRelativePosition(e, chart); // Default axis for index mode is 'x' to match old behaviour

    options.axis = options.axis || 'x';
    var distanceMetric = getDistanceMetricForAxis(options.axis);
    var items = options.intersect ? getIntersectItems(chart, position) : getNearestItems(chart, position, false, distanceMetric);
    var elements = [];

    if (!items.length) {
      return [];
    }

    chart._getSortedVisibleDatasetMetas().forEach(function (meta) {
      var element = meta.data[items[0]._index]; // don't count items that are skipped (null data)

      if (element && !element._view.skip) {
        elements.push(element);
      }
    });

    return elements;
  }
  /**
   * @interface IInteractionOptions
   */

  /**
   * If true, only consider items that intersect the point
   * @name IInterfaceOptions#boolean
   * @type Boolean
   */

  /**
   * Contains interaction related functions
   * @namespace Chart.Interaction
   */


  var core_interaction = {
    // Helper function for different modes
    modes: {
      single: function (chart, e) {
        var position = getRelativePosition(e, chart);
        var elements = [];
        parseVisibleItems(chart, function (element) {
          if (element.inRange(position.x, position.y)) {
            elements.push(element);
            return elements;
          }
        });
        return elements.slice(0, 1);
      },

      /**
       * @function Chart.Interaction.modes.label
       * @deprecated since version 2.4.0
       * @todo remove at version 3
       * @private
       */
      label: indexMode,

      /**
       * Returns items at the same index. If the options.intersect parameter is true, we only return items if we intersect something
       * If the options.intersect mode is false, we find the nearest item and return the items at the same index as that item
       * @function Chart.Interaction.modes.index
       * @since v2.4.0
       * @param {Chart} chart - the chart we are returning items from
       * @param {Event} e - the event we are find things at
       * @param {IInteractionOptions} options - options to use during interaction
       * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
       */
      index: indexMode,

      /**
       * Returns items in the same dataset. If the options.intersect parameter is true, we only return items if we intersect something
       * If the options.intersect is false, we find the nearest item and return the items in that dataset
       * @function Chart.Interaction.modes.dataset
       * @param {Chart} chart - the chart we are returning items from
       * @param {Event} e - the event we are find things at
       * @param {IInteractionOptions} options - options to use during interaction
       * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
       */
      dataset: function (chart, e, options) {
        var position = getRelativePosition(e, chart);
        options.axis = options.axis || 'xy';
        var distanceMetric = getDistanceMetricForAxis(options.axis);
        var items = options.intersect ? getIntersectItems(chart, position) : getNearestItems(chart, position, false, distanceMetric);

        if (items.length > 0) {
          items = chart.getDatasetMeta(items[0]._datasetIndex).data;
        }

        return items;
      },

      /**
       * @function Chart.Interaction.modes.x-axis
       * @deprecated since version 2.4.0. Use index mode and intersect == true
       * @todo remove at version 3
       * @private
       */
      'x-axis': function (chart, e) {
        return indexMode(chart, e, {
          intersect: false
        });
      },

      /**
       * Point mode returns all elements that hit test based on the event position
       * of the event
       * @function Chart.Interaction.modes.intersect
       * @param {Chart} chart - the chart we are returning items from
       * @param {Event} e - the event we are find things at
       * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
       */
      point: function (chart, e) {
        var position = getRelativePosition(e, chart);
        return getIntersectItems(chart, position);
      },

      /**
       * nearest mode returns the element closest to the point
       * @function Chart.Interaction.modes.intersect
       * @param {Chart} chart - the chart we are returning items from
       * @param {Event} e - the event we are find things at
       * @param {IInteractionOptions} options - options to use
       * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
       */
      nearest: function (chart, e, options) {
        var position = getRelativePosition(e, chart);
        options.axis = options.axis || 'xy';
        var distanceMetric = getDistanceMetricForAxis(options.axis);
        return getNearestItems(chart, position, options.intersect, distanceMetric);
      },

      /**
       * x mode returns the elements that hit-test at the current x coordinate
       * @function Chart.Interaction.modes.x
       * @param {Chart} chart - the chart we are returning items from
       * @param {Event} e - the event we are find things at
       * @param {IInteractionOptions} options - options to use
       * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
       */
      x: function (chart, e, options) {
        var position = getRelativePosition(e, chart);
        var items = [];
        var intersectsItem = false;
        parseVisibleItems(chart, function (element) {
          if (element.inXRange(position.x)) {
            items.push(element);
          }

          if (element.inRange(position.x, position.y)) {
            intersectsItem = true;
          }
        }); // If we want to trigger on an intersect and we don't have any items
        // that intersect the position, return nothing

        if (options.intersect && !intersectsItem) {
          items = [];
        }

        return items;
      },

      /**
       * y mode returns the elements that hit-test at the current y coordinate
       * @function Chart.Interaction.modes.y
       * @param {Chart} chart - the chart we are returning items from
       * @param {Event} e - the event we are find things at
       * @param {IInteractionOptions} options - options to use
       * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
       */
      y: function (chart, e, options) {
        var position = getRelativePosition(e, chart);
        var items = [];
        var intersectsItem = false;
        parseVisibleItems(chart, function (element) {
          if (element.inYRange(position.y)) {
            items.push(element);
          }

          if (element.inRange(position.x, position.y)) {
            intersectsItem = true;
          }
        }); // If we want to trigger on an intersect and we don't have any items
        // that intersect the position, return nothing

        if (options.intersect && !intersectsItem) {
          items = [];
        }

        return items;
      }
    }
  };
  var extend = helpers$1.extend;

  function filterByPosition(array, position) {
    return helpers$1.where(array, function (v) {
      return v.pos === position;
    });
  }

  function sortByWeight(array, reverse) {
    return array.sort(function (a, b) {
      var v0 = reverse ? b : a;
      var v1 = reverse ? a : b;
      return v0.weight === v1.weight ? v0.index - v1.index : v0.weight - v1.weight;
    });
  }

  function wrapBoxes(boxes) {
    var layoutBoxes = [];
    var i, ilen, box;

    for (i = 0, ilen = (boxes || []).length; i < ilen; ++i) {
      box = boxes[i];
      layoutBoxes.push({
        index: i,
        box: box,
        pos: box.position,
        horizontal: box.isHorizontal(),
        weight: box.weight
      });
    }

    return layoutBoxes;
  }

  function setLayoutDims(layouts, params) {
    var i, ilen, layout;

    for (i = 0, ilen = layouts.length; i < ilen; ++i) {
      layout = layouts[i]; // store width used instead of chartArea.w in fitBoxes

      layout.width = layout.horizontal ? layout.box.fullWidth && params.availableWidth : params.vBoxMaxWidth; // store height used instead of chartArea.h in fitBoxes

      layout.height = layout.horizontal && params.hBoxMaxHeight;
    }
  }

  function buildLayoutBoxes(boxes) {
    var layoutBoxes = wrapBoxes(boxes);
    var left = sortByWeight(filterByPosition(layoutBoxes, 'left'), true);
    var right = sortByWeight(filterByPosition(layoutBoxes, 'right'));
    var top = sortByWeight(filterByPosition(layoutBoxes, 'top'), true);
    var bottom = sortByWeight(filterByPosition(layoutBoxes, 'bottom'));
    return {
      leftAndTop: left.concat(top),
      rightAndBottom: right.concat(bottom),
      chartArea: filterByPosition(layoutBoxes, 'chartArea'),
      vertical: left.concat(right),
      horizontal: top.concat(bottom)
    };
  }

  function getCombinedMax(maxPadding, chartArea, a, b) {
    return Math.max(maxPadding[a], chartArea[a]) + Math.max(maxPadding[b], chartArea[b]);
  }

  function updateDims(chartArea, params, layout) {
    var box = layout.box;
    var maxPadding = chartArea.maxPadding;
    var newWidth, newHeight;

    if (layout.size) {
      // this layout was already counted for, lets first reduce old size
      chartArea[layout.pos] -= layout.size;
    }

    layout.size = layout.horizontal ? box.height : box.width;
    chartArea[layout.pos] += layout.size;

    if (box.getPadding) {
      var boxPadding = box.getPadding();
      maxPadding.top = Math.max(maxPadding.top, boxPadding.top);
      maxPadding.left = Math.max(maxPadding.left, boxPadding.left);
      maxPadding.bottom = Math.max(maxPadding.bottom, boxPadding.bottom);
      maxPadding.right = Math.max(maxPadding.right, boxPadding.right);
    }

    newWidth = params.outerWidth - getCombinedMax(maxPadding, chartArea, 'left', 'right');
    newHeight = params.outerHeight - getCombinedMax(maxPadding, chartArea, 'top', 'bottom');

    if (newWidth !== chartArea.w || newHeight !== chartArea.h) {
      chartArea.w = newWidth;
      chartArea.h = newHeight; // return true if chart area changed in layout's direction

      var sizes = layout.horizontal ? [newWidth, chartArea.w] : [newHeight, chartArea.h];
      return sizes[0] !== sizes[1] && (!isNaN(sizes[0]) || !isNaN(sizes[1]));
    }
  }

  function handleMaxPadding(chartArea) {
    var maxPadding = chartArea.maxPadding;

    function updatePos(pos) {
      var change = Math.max(maxPadding[pos] - chartArea[pos], 0);
      chartArea[pos] += change;
      return change;
    }

    chartArea.y += updatePos('top');
    chartArea.x += updatePos('left');
    updatePos('right');
    updatePos('bottom');
  }

  function getMargins(horizontal, chartArea) {
    var maxPadding = chartArea.maxPadding;

    function marginForPositions(positions) {
      var margin = {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      };
      positions.forEach(function (pos) {
        margin[pos] = Math.max(chartArea[pos], maxPadding[pos]);
      });
      return margin;
    }

    return horizontal ? marginForPositions(['left', 'right']) : marginForPositions(['top', 'bottom']);
  }

  function fitBoxes(boxes, chartArea, params) {
    var refitBoxes = [];
    var i, ilen, layout, box, refit, changed;

    for (i = 0, ilen = boxes.length; i < ilen; ++i) {
      layout = boxes[i];
      box = layout.box;
      box.update(layout.width || chartArea.w, layout.height || chartArea.h, getMargins(layout.horizontal, chartArea));

      if (updateDims(chartArea, params, layout)) {
        changed = true;

        if (refitBoxes.length) {
          // Dimensions changed and there were non full width boxes before this
          // -> we have to refit those
          refit = true;
        }
      }

      if (!box.fullWidth) {
        // fullWidth boxes don't need to be re-fitted in any case
        refitBoxes.push(layout);
      }
    }

    return refit ? fitBoxes(refitBoxes, chartArea, params) || changed : changed;
  }

  function placeBoxes(boxes, chartArea, params) {
    var userPadding = params.padding;
    var x = chartArea.x;
    var y = chartArea.y;
    var i, ilen, layout, box;

    for (i = 0, ilen = boxes.length; i < ilen; ++i) {
      layout = boxes[i];
      box = layout.box;

      if (layout.horizontal) {
        box.left = box.fullWidth ? userPadding.left : chartArea.left;
        box.right = box.fullWidth ? params.outerWidth - userPadding.right : chartArea.left + chartArea.w;
        box.top = y;
        box.bottom = y + box.height;
        box.width = box.right - box.left;
        y = box.bottom;
      } else {
        box.left = x;
        box.right = x + box.width;
        box.top = chartArea.top;
        box.bottom = chartArea.top + chartArea.h;
        box.height = box.bottom - box.top;
        x = box.right;
      }
    }

    chartArea.x = x;
    chartArea.y = y;
  }

  core_defaults._set('global', {
    layout: {
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }
    }
  });
  /**
   * @interface ILayoutItem
   * @prop {string} position - The position of the item in the chart layout. Possible values are
   * 'left', 'top', 'right', 'bottom', and 'chartArea'
   * @prop {number} weight - The weight used to sort the item. Higher weights are further away from the chart area
   * @prop {boolean} fullWidth - if true, and the item is horizontal, then push vertical boxes down
   * @prop {function} isHorizontal - returns true if the layout item is horizontal (ie. top or bottom)
   * @prop {function} update - Takes two parameters: width and height. Returns size of item
   * @prop {function} getPadding -  Returns an object with padding on the edges
   * @prop {number} width - Width of item. Must be valid after update()
   * @prop {number} height - Height of item. Must be valid after update()
   * @prop {number} left - Left edge of the item. Set by layout system and cannot be used in update
   * @prop {number} top - Top edge of the item. Set by layout system and cannot be used in update
   * @prop {number} right - Right edge of the item. Set by layout system and cannot be used in update
   * @prop {number} bottom - Bottom edge of the item. Set by layout system and cannot be used in update
   */
  // The layout service is very self explanatory.  It's responsible for the layout within a chart.
  // Scales, Legends and Plugins all rely on the layout service and can easily register to be placed anywhere they need
  // It is this service's responsibility of carrying out that layout.


  var core_layouts = {
    defaults: {},

    /**
     * Register a box to a chart.
     * A box is simply a reference to an object that requires layout. eg. Scales, Legend, Title.
     * @param {Chart} chart - the chart to use
     * @param {ILayoutItem} item - the item to add to be layed out
     */
    addBox: function (chart, item) {
      if (!chart.boxes) {
        chart.boxes = [];
      } // initialize item with default values


      item.fullWidth = item.fullWidth || false;
      item.position = item.position || 'top';
      item.weight = item.weight || 0;

      item._layers = item._layers || function () {
        return [{
          z: 0,
          draw: function () {
            item.draw.apply(item, arguments);
          }
        }];
      };

      chart.boxes.push(item);
    },

    /**
     * Remove a layoutItem from a chart
     * @param {Chart} chart - the chart to remove the box from
     * @param {ILayoutItem} layoutItem - the item to remove from the layout
     */
    removeBox: function (chart, layoutItem) {
      var index = chart.boxes ? chart.boxes.indexOf(layoutItem) : -1;

      if (index !== -1) {
        chart.boxes.splice(index, 1);
      }
    },

    /**
     * Sets (or updates) options on the given `item`.
     * @param {Chart} chart - the chart in which the item lives (or will be added to)
     * @param {ILayoutItem} item - the item to configure with the given options
     * @param {object} options - the new item options.
     */
    configure: function (chart, item, options) {
      var props = ['fullWidth', 'position', 'weight'];
      var ilen = props.length;
      var i = 0;
      var prop;

      for (; i < ilen; ++i) {
        prop = props[i];

        if (options.hasOwnProperty(prop)) {
          item[prop] = options[prop];
        }
      }
    },

    /**
     * Fits boxes of the given chart into the given size by having each box measure itself
     * then running a fitting algorithm
     * @param {Chart} chart - the chart
     * @param {number} width - the width to fit into
     * @param {number} height - the height to fit into
     */
    update: function (chart, width, height) {
      if (!chart) {
        return;
      }

      var layoutOptions = chart.options.layout || {};
      var padding = helpers$1.options.toPadding(layoutOptions.padding);
      var availableWidth = width - padding.width;
      var availableHeight = height - padding.height;
      var boxes = buildLayoutBoxes(chart.boxes);
      var verticalBoxes = boxes.vertical;
      var horizontalBoxes = boxes.horizontal; // Essentially we now have any number of boxes on each of the 4 sides.
      // Our canvas looks like the following.
      // The areas L1 and L2 are the left axes. R1 is the right axis, T1 is the top axis and
      // B1 is the bottom axis
      // There are also 4 quadrant-like locations (left to right instead of clockwise) reserved for chart overlays
      // These locations are single-box locations only, when trying to register a chartArea location that is already taken,
      // an error will be thrown.
      //
      // |----------------------------------------------------|
      // |                  T1 (Full Width)                   |
      // |----------------------------------------------------|
      // |    |    |                 T2                  |    |
      // |    |----|-------------------------------------|----|
      // |    |    | C1 |                           | C2 |    |
      // |    |    |----|                           |----|    |
      // |    |    |                                     |    |
      // | L1 | L2 |           ChartArea (C0)            | R1 |
      // |    |    |                                     |    |
      // |    |    |----|                           |----|    |
      // |    |    | C3 |                           | C4 |    |
      // |    |----|-------------------------------------|----|
      // |    |    |                 B1                  |    |
      // |----------------------------------------------------|
      // |                  B2 (Full Width)                   |
      // |----------------------------------------------------|
      //

      var params = Object.freeze({
        outerWidth: width,
        outerHeight: height,
        padding: padding,
        availableWidth: availableWidth,
        vBoxMaxWidth: availableWidth / 2 / verticalBoxes.length,
        hBoxMaxHeight: availableHeight / 2
      });
      var chartArea = extend({
        maxPadding: extend({}, padding),
        w: availableWidth,
        h: availableHeight,
        x: padding.left,
        y: padding.top
      }, padding);
      setLayoutDims(verticalBoxes.concat(horizontalBoxes), params); // First fit vertical boxes

      fitBoxes(verticalBoxes, chartArea, params); // Then fit horizontal boxes

      if (fitBoxes(horizontalBoxes, chartArea, params)) {
        // if the area changed, re-fit vertical boxes
        fitBoxes(verticalBoxes, chartArea, params);
      }

      handleMaxPadding(chartArea); // Finally place the boxes to correct coordinates

      placeBoxes(boxes.leftAndTop, chartArea, params); // Move to opposite side of chart

      chartArea.x += chartArea.w;
      chartArea.y += chartArea.h;
      placeBoxes(boxes.rightAndBottom, chartArea, params);
      chart.chartArea = {
        left: chartArea.left,
        top: chartArea.top,
        right: chartArea.left + chartArea.w,
        bottom: chartArea.top + chartArea.h
      }; // Finally update boxes in chartArea (radial scale for example)

      helpers$1.each(boxes.chartArea, function (layout) {
        var box = layout.box;
        extend(box, chart.chartArea);
        box.update(chartArea.w, chartArea.h);
      });
    }
  };
  /**
   * Platform fallback implementation (minimal).
   * @see https://github.com/chartjs/Chart.js/pull/4591#issuecomment-319575939
   */

  var platform_basic = {
    acquireContext: function (item) {
      if (item && item.canvas) {
        // Support for any object associated to a canvas (including a context2d)
        item = item.canvas;
      }

      return item && item.getContext('2d') || null;
    }
  };
  var platform_dom = "/*\r\n * DOM element rendering detection\r\n * https://davidwalsh.name/detect-node-insertion\r\n */\r\n@keyframes chartjs-render-animation {\r\n\tfrom { opacity: 0.99; }\r\n\tto { opacity: 1; }\r\n}\r\n\r\n.chartjs-render-monitor {\r\n\tanimation: chartjs-render-animation 0.001s;\r\n}\r\n\r\n/*\r\n * DOM element resizing detection\r\n * https://github.com/marcj/css-element-queries\r\n */\r\n.chartjs-size-monitor,\r\n.chartjs-size-monitor-expand,\r\n.chartjs-size-monitor-shrink {\r\n\tposition: absolute;\r\n\tdirection: ltr;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\tright: 0;\r\n\tbottom: 0;\r\n\toverflow: hidden;\r\n\tpointer-events: none;\r\n\tvisibility: hidden;\r\n\tz-index: -1;\r\n}\r\n\r\n.chartjs-size-monitor-expand > div {\r\n\tposition: absolute;\r\n\twidth: 1000000px;\r\n\theight: 1000000px;\r\n\tleft: 0;\r\n\ttop: 0;\r\n}\r\n\r\n.chartjs-size-monitor-shrink > div {\r\n\tposition: absolute;\r\n\twidth: 200%;\r\n\theight: 200%;\r\n\tleft: 0;\r\n\ttop: 0;\r\n}\r\n";
  var platform_dom$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': platform_dom
  });
  var stylesheet = getCjsExportFromNamespace(platform_dom$1);
  var EXPANDO_KEY = '$chartjs';
  var CSS_PREFIX = 'chartjs-';
  var CSS_SIZE_MONITOR = CSS_PREFIX + 'size-monitor';
  var CSS_RENDER_MONITOR = CSS_PREFIX + 'render-monitor';
  var CSS_RENDER_ANIMATION = CSS_PREFIX + 'render-animation';
  var ANIMATION_START_EVENTS = ['animationstart', 'webkitAnimationStart'];
  /**
   * DOM event types -> Chart.js event types.
   * Note: only events with different types are mapped.
   * @see https://developer.mozilla.org/en-US/docs/Web/Events
   */

  var EVENT_TYPES = {
    touchstart: 'mousedown',
    touchmove: 'mousemove',
    touchend: 'mouseup',
    pointerenter: 'mouseenter',
    pointerdown: 'mousedown',
    pointermove: 'mousemove',
    pointerup: 'mouseup',
    pointerleave: 'mouseout',
    pointerout: 'mouseout'
  };
  /**
   * The "used" size is the final value of a dimension property after all calculations have
   * been performed. This method uses the computed style of `element` but returns undefined
   * if the computed style is not expressed in pixels. That can happen in some cases where
   * `element` has a size relative to its parent and this last one is not yet displayed,
   * for example because of `display: none` on a parent node.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/used_value
   * @returns {number} Size in pixels or undefined if unknown.
   */

  function readUsedSize(element, property) {
    var value = helpers$1.getStyle(element, property);
    var matches = value && value.match(/^(\d+)(\.\d+)?px$/);
    return matches ? Number(matches[1]) : undefined;
  }
  /**
   * Initializes the canvas style and render size without modifying the canvas display size,
   * since responsiveness is handled by the controller.resize() method. The config is used
   * to determine the aspect ratio to apply in case no explicit height has been specified.
   */


  function initCanvas(canvas, config) {
    var style = canvas.style; // NOTE(SB) canvas.getAttribute('width') !== canvas.width: in the first case it
    // returns null or '' if no explicit value has been set to the canvas attribute.

    var renderHeight = canvas.getAttribute('height');
    var renderWidth = canvas.getAttribute('width'); // Chart.js modifies some canvas values that we want to restore on destroy

    canvas[EXPANDO_KEY] = {
      initial: {
        height: renderHeight,
        width: renderWidth,
        style: {
          display: style.display,
          height: style.height,
          width: style.width
        }
      }
    }; // Force canvas to display as block to avoid extra space caused by inline
    // elements, which would interfere with the responsive resize process.
    // https://github.com/chartjs/Chart.js/issues/2538

    style.display = style.display || 'block';

    if (renderWidth === null || renderWidth === '') {
      var displayWidth = readUsedSize(canvas, 'width');

      if (displayWidth !== undefined) {
        canvas.width = displayWidth;
      }
    }

    if (renderHeight === null || renderHeight === '') {
      if (canvas.style.height === '') {
        // If no explicit render height and style height, let's apply the aspect ratio,
        // which one can be specified by the user but also by charts as default option
        // (i.e. options.aspectRatio). If not specified, use canvas aspect ratio of 2.
        canvas.height = canvas.width / (config.options.aspectRatio || 2);
      } else {
        var displayHeight = readUsedSize(canvas, 'height');

        if (displayWidth !== undefined) {
          canvas.height = displayHeight;
        }
      }
    }

    return canvas;
  }
  /**
   * Detects support for options object argument in addEventListener.
   * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Safely_detecting_option_support
   * @private
   */


  var supportsEventListenerOptions = function () {
    var supports = false;

    try {
      var options = Object.defineProperty({}, 'passive', {
        // eslint-disable-next-line getter-return
        get: function () {
          supports = true;
        }
      });
      window.addEventListener('e', null, options);
    } catch (e) {// continue regardless of error
    }

    return supports;
  }(); // Default passive to true as expected by Chrome for 'touchstart' and 'touchend' events.
  // https://github.com/chartjs/Chart.js/issues/4287


  var eventListenerOptions = supportsEventListenerOptions ? {
    passive: true
  } : false;

  function addListener(node, type, listener) {
    node.addEventListener(type, listener, eventListenerOptions);
  }

  function removeListener(node, type, listener) {
    node.removeEventListener(type, listener, eventListenerOptions);
  }

  function createEvent(type, chart, x, y, nativeEvent) {
    return {
      type: type,
      chart: chart,
      native: nativeEvent || null,
      x: x !== undefined ? x : null,
      y: y !== undefined ? y : null
    };
  }

  function fromNativeEvent(event, chart) {
    var type = EVENT_TYPES[event.type] || event.type;
    var pos = helpers$1.getRelativePosition(event, chart);
    return createEvent(type, chart, pos.x, pos.y, event);
  }

  function throttled(fn, thisArg) {
    var ticking = false;
    var args = [];
    return function () {
      args = Array.prototype.slice.call(arguments);
      thisArg = thisArg || this;

      if (!ticking) {
        ticking = true;
        helpers$1.requestAnimFrame.call(window, function () {
          ticking = false;
          fn.apply(thisArg, args);
        });
      }
    };
  }

  function createDiv(cls) {
    var el = document.createElement('div');
    el.className = cls || '';
    return el;
  } // Implementation based on https://github.com/marcj/css-element-queries


  function createResizer(handler) {
    var maxSize = 1000000; // NOTE(SB) Don't use innerHTML because it could be considered unsafe.
    // https://github.com/chartjs/Chart.js/issues/5902

    var resizer = createDiv(CSS_SIZE_MONITOR);
    var expand = createDiv(CSS_SIZE_MONITOR + '-expand');
    var shrink = createDiv(CSS_SIZE_MONITOR + '-shrink');
    expand.appendChild(createDiv());
    shrink.appendChild(createDiv());
    resizer.appendChild(expand);
    resizer.appendChild(shrink);

    resizer._reset = function () {
      expand.scrollLeft = maxSize;
      expand.scrollTop = maxSize;
      shrink.scrollLeft = maxSize;
      shrink.scrollTop = maxSize;
    };

    var onScroll = function () {
      resizer._reset();

      handler();
    };

    addListener(expand, 'scroll', onScroll.bind(expand, 'expand'));
    addListener(shrink, 'scroll', onScroll.bind(shrink, 'shrink'));
    return resizer;
  } // https://davidwalsh.name/detect-node-insertion


  function watchForRender(node, handler) {
    var expando = node[EXPANDO_KEY] || (node[EXPANDO_KEY] = {});

    var proxy = expando.renderProxy = function (e) {
      if (e.animationName === CSS_RENDER_ANIMATION) {
        handler();
      }
    };

    helpers$1.each(ANIMATION_START_EVENTS, function (type) {
      addListener(node, type, proxy);
    }); // #4737: Chrome might skip the CSS animation when the CSS_RENDER_MONITOR class
    // is removed then added back immediately (same animation frame?). Accessing the
    // `offsetParent` property will force a reflow and re-evaluate the CSS animation.
    // https://gist.github.com/paulirish/5d52fb081b3570c81e3a#box-metrics
    // https://github.com/chartjs/Chart.js/issues/4737

    expando.reflow = !!node.offsetParent;
    node.classList.add(CSS_RENDER_MONITOR);
  }

  function unwatchForRender(node) {
    var expando = node[EXPANDO_KEY] || {};
    var proxy = expando.renderProxy;

    if (proxy) {
      helpers$1.each(ANIMATION_START_EVENTS, function (type) {
        removeListener(node, type, proxy);
      });
      delete expando.renderProxy;
    }

    node.classList.remove(CSS_RENDER_MONITOR);
  }

  function addResizeListener(node, listener, chart) {
    var expando = node[EXPANDO_KEY] || (node[EXPANDO_KEY] = {}); // Let's keep track of this added resizer and thus avoid DOM query when removing it.

    var resizer = expando.resizer = createResizer(throttled(function () {
      if (expando.resizer) {
        var container = chart.options.maintainAspectRatio && node.parentNode;
        var w = container ? container.clientWidth : 0;
        listener(createEvent('resize', chart));

        if (container && container.clientWidth < w && chart.canvas) {
          // If the container size shrank during chart resize, let's assume
          // scrollbar appeared. So we resize again with the scrollbar visible -
          // effectively making chart smaller and the scrollbar hidden again.
          // Because we are inside `throttled`, and currently `ticking`, scroll
          // events are ignored during this whole 2 resize process.
          // If we assumed wrong and something else happened, we are resizing
          // twice in a frame (potential performance issue)
          listener(createEvent('resize', chart));
        }
      }
    })); // The resizer needs to be attached to the node parent, so we first need to be
    // sure that `node` is attached to the DOM before injecting the resizer element.

    watchForRender(node, function () {
      if (expando.resizer) {
        var container = node.parentNode;

        if (container && container !== resizer.parentNode) {
          container.insertBefore(resizer, container.firstChild);
        } // The container size might have changed, let's reset the resizer state.


        resizer._reset();
      }
    });
  }

  function removeResizeListener(node) {
    var expando = node[EXPANDO_KEY] || {};
    var resizer = expando.resizer;
    delete expando.resizer;
    unwatchForRender(node);

    if (resizer && resizer.parentNode) {
      resizer.parentNode.removeChild(resizer);
    }
  }
  /**
   * Injects CSS styles inline if the styles are not already present.
   * @param {HTMLDocument|ShadowRoot} rootNode - the node to contain the <style>.
   * @param {string} css - the CSS to be injected.
   */


  function injectCSS(rootNode, css) {
    // https://stackoverflow.com/q/3922139
    var expando = rootNode[EXPANDO_KEY] || (rootNode[EXPANDO_KEY] = {});

    if (!expando.containsStyles) {
      expando.containsStyles = true;
      css = '/* Chart.js */\n' + css;
      var style = document.createElement('style');
      style.setAttribute('type', 'text/css');
      style.appendChild(document.createTextNode(css));
      rootNode.appendChild(style);
    }
  }

  var platform_dom$2 = {
    /**
     * When `true`, prevents the automatic injection of the stylesheet required to
     * correctly detect when the chart is added to the DOM and then resized. This
     * switch has been added to allow external stylesheet (`dist/Chart(.min)?.js`)
     * to be manually imported to make this library compatible with any CSP.
     * See https://github.com/chartjs/Chart.js/issues/5208
     */
    disableCSSInjection: false,

    /**
     * This property holds whether this platform is enabled for the current environment.
     * Currently used by platform.js to select the proper implementation.
     * @private
     */
    _enabled: typeof window !== 'undefined' && typeof document !== 'undefined',

    /**
     * Initializes resources that depend on platform options.
     * @param {HTMLCanvasElement} canvas - The Canvas element.
     * @private
     */
    _ensureLoaded: function (canvas) {
      if (!this.disableCSSInjection) {
        // If the canvas is in a shadow DOM, then the styles must also be inserted
        // into the same shadow DOM.
        // https://github.com/chartjs/Chart.js/issues/5763
        var root = canvas.getRootNode ? canvas.getRootNode() : document;
        var targetNode = root.host ? root : document.head;
        injectCSS(targetNode, stylesheet);
      }
    },
    acquireContext: function (item, config) {
      if (typeof item === 'string') {
        item = document.getElementById(item);
      } else if (item.length) {
        // Support for array based queries (such as jQuery)
        item = item[0];
      }

      if (item && item.canvas) {
        // Support for any object associated to a canvas (including a context2d)
        item = item.canvas;
      } // To prevent canvas fingerprinting, some add-ons undefine the getContext
      // method, for example: https://github.com/kkapsner/CanvasBlocker
      // https://github.com/chartjs/Chart.js/issues/2807


      var context = item && item.getContext && item.getContext('2d'); // `instanceof HTMLCanvasElement/CanvasRenderingContext2D` fails when the item is
      // inside an iframe or when running in a protected environment. We could guess the
      // types from their toString() value but let's keep things flexible and assume it's
      // a sufficient condition if the item has a context2D which has item as `canvas`.
      // https://github.com/chartjs/Chart.js/issues/3887
      // https://github.com/chartjs/Chart.js/issues/4102
      // https://github.com/chartjs/Chart.js/issues/4152

      if (context && context.canvas === item) {
        // Load platform resources on first chart creation, to make it possible to
        // import the library before setting platform options.
        this._ensureLoaded(item);

        initCanvas(item, config);
        return context;
      }

      return null;
    },
    releaseContext: function (context) {
      var canvas = context.canvas;

      if (!canvas[EXPANDO_KEY]) {
        return;
      }

      var initial = canvas[EXPANDO_KEY].initial;
      ['height', 'width'].forEach(function (prop) {
        var value = initial[prop];

        if (helpers$1.isNullOrUndef(value)) {
          canvas.removeAttribute(prop);
        } else {
          canvas.setAttribute(prop, value);
        }
      });
      helpers$1.each(initial.style || {}, function (value, key) {
        canvas.style[key] = value;
      }); // The canvas render size might have been changed (and thus the state stack discarded),
      // we can't use save() and restore() to restore the initial state. So make sure that at
      // least the canvas context is reset to the default state by setting the canvas width.
      // https://www.w3.org/TR/2011/WD-html5-20110525/the-canvas-element.html
      // eslint-disable-next-line no-self-assign

      canvas.width = canvas.width;
      delete canvas[EXPANDO_KEY];
    },
    addEventListener: function (chart, type, listener) {
      var canvas = chart.canvas;

      if (type === 'resize') {
        // Note: the resize event is not supported on all browsers.
        addResizeListener(canvas, listener, chart);
        return;
      }

      var expando = listener[EXPANDO_KEY] || (listener[EXPANDO_KEY] = {});
      var proxies = expando.proxies || (expando.proxies = {});

      var proxy = proxies[chart.id + '_' + type] = function (event) {
        listener(fromNativeEvent(event, chart));
      };

      addListener(canvas, type, proxy);
    },
    removeEventListener: function (chart, type, listener) {
      var canvas = chart.canvas;

      if (type === 'resize') {
        // Note: the resize event is not supported on all browsers.
        removeResizeListener(canvas);
        return;
      }

      var expando = listener[EXPANDO_KEY] || {};
      var proxies = expando.proxies || {};
      var proxy = proxies[chart.id + '_' + type];

      if (!proxy) {
        return;
      }

      removeListener(canvas, type, proxy);
    }
  }; // DEPRECATIONS

  /**
   * Provided for backward compatibility, use EventTarget.addEventListener instead.
   * EventTarget.addEventListener compatibility: Chrome, Opera 7, Safari, FF1.5+, IE9+
   * @see https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
   * @function Chart.helpers.addEvent
   * @deprecated since version 2.7.0
   * @todo remove at version 3
   * @private
   */

  helpers$1.addEvent = addListener;
  /**
   * Provided for backward compatibility, use EventTarget.removeEventListener instead.
   * EventTarget.removeEventListener compatibility: Chrome, Opera 7, Safari, FF1.5+, IE9+
   * @see https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener
   * @function Chart.helpers.removeEvent
   * @deprecated since version 2.7.0
   * @todo remove at version 3
   * @private
   */

  helpers$1.removeEvent = removeListener; // @TODO Make possible to select another platform at build time.

  var implementation = platform_dom$2._enabled ? platform_dom$2 : platform_basic;
  /**
   * @namespace Chart.platform
   * @see https://chartjs.gitbooks.io/proposals/content/Platform.html
   * @since 2.4.0
   */

  var platform = helpers$1.extend({
    /**
     * @since 2.7.0
     */
    initialize: function () {},

    /**
     * Called at chart construction time, returns a context2d instance implementing
     * the [W3C Canvas 2D Context API standard]{@link https://www.w3.org/TR/2dcontext/}.
     * @param {*} item - The native item from which to acquire context (platform specific)
     * @param {object} options - The chart options
     * @returns {CanvasRenderingContext2D} context2d instance
     */
    acquireContext: function () {},

    /**
     * Called at chart destruction time, releases any resources associated to the context
     * previously returned by the acquireContext() method.
     * @param {CanvasRenderingContext2D} context - The context2d instance
     * @returns {boolean} true if the method succeeded, else false
     */
    releaseContext: function () {},

    /**
     * Registers the specified listener on the given chart.
     * @param {Chart} chart - Chart from which to listen for event
     * @param {string} type - The ({@link IEvent}) type to listen for
     * @param {function} listener - Receives a notification (an object that implements
     * the {@link IEvent} interface) when an event of the specified type occurs.
     */
    addEventListener: function () {},

    /**
     * Removes the specified listener previously registered with addEventListener.
     * @param {Chart} chart - Chart from which to remove the listener
     * @param {string} type - The ({@link IEvent}) type to remove
     * @param {function} listener - The listener function to remove from the event target.
     */
    removeEventListener: function () {}
  }, implementation);

  core_defaults._set('global', {
    plugins: {}
  });
  /**
   * The plugin service singleton
   * @namespace Chart.plugins
   * @since 2.1.0
   */


  var core_plugins = {
    /**
     * Globally registered plugins.
     * @private
     */
    _plugins: [],

    /**
     * This identifier is used to invalidate the descriptors cache attached to each chart
     * when a global plugin is registered or unregistered. In this case, the cache ID is
     * incremented and descriptors are regenerated during following API calls.
     * @private
     */
    _cacheId: 0,

    /**
     * Registers the given plugin(s) if not already registered.
     * @param {IPlugin[]|IPlugin} plugins plugin instance(s).
     */
    register: function (plugins) {
      var p = this._plugins;
      [].concat(plugins).forEach(function (plugin) {
        if (p.indexOf(plugin) === -1) {
          p.push(plugin);
        }
      });
      this._cacheId++;
    },

    /**
     * Unregisters the given plugin(s) only if registered.
     * @param {IPlugin[]|IPlugin} plugins plugin instance(s).
     */
    unregister: function (plugins) {
      var p = this._plugins;
      [].concat(plugins).forEach(function (plugin) {
        var idx = p.indexOf(plugin);

        if (idx !== -1) {
          p.splice(idx, 1);
        }
      });
      this._cacheId++;
    },

    /**
     * Remove all registered plugins.
     * @since 2.1.5
     */
    clear: function () {
      this._plugins = [];
      this._cacheId++;
    },

    /**
     * Returns the number of registered plugins?
     * @returns {number}
     * @since 2.1.5
     */
    count: function () {
      return this._plugins.length;
    },

    /**
     * Returns all registered plugin instances.
     * @returns {IPlugin[]} array of plugin objects.
     * @since 2.1.5
     */
    getAll: function () {
      return this._plugins;
    },

    /**
     * Calls enabled plugins for `chart` on the specified hook and with the given args.
     * This method immediately returns as soon as a plugin explicitly returns false. The
     * returned value can be used, for instance, to interrupt the current action.
     * @param {Chart} chart - The chart instance for which plugins should be called.
     * @param {string} hook - The name of the plugin method to call (e.g. 'beforeUpdate').
     * @param {Array} [args] - Extra arguments to apply to the hook call.
     * @returns {boolean} false if any of the plugins return false, else returns true.
     */
    notify: function (chart, hook, args) {
      var descriptors = this.descriptors(chart);
      var ilen = descriptors.length;
      var i, descriptor, plugin, params, method;

      for (i = 0; i < ilen; ++i) {
        descriptor = descriptors[i];
        plugin = descriptor.plugin;
        method = plugin[hook];

        if (typeof method === 'function') {
          params = [chart].concat(args || []);
          params.push(descriptor.options);

          if (method.apply(plugin, params) === false) {
            return false;
          }
        }
      }

      return true;
    },

    /**
     * Returns descriptors of enabled plugins for the given chart.
     * @returns {object[]} [{ plugin, options }]
     * @private
     */
    descriptors: function (chart) {
      var cache = chart.$plugins || (chart.$plugins = {});

      if (cache.id === this._cacheId) {
        return cache.descriptors;
      }

      var plugins = [];
      var descriptors = [];
      var config = chart && chart.config || {};
      var options = config.options && config.options.plugins || {};

      this._plugins.concat(config.plugins || []).forEach(function (plugin) {
        var idx = plugins.indexOf(plugin);

        if (idx !== -1) {
          return;
        }

        var id = plugin.id;
        var opts = options[id];

        if (opts === false) {
          return;
        }

        if (opts === true) {
          opts = helpers$1.clone(core_defaults.global.plugins[id]);
        }

        plugins.push(plugin);
        descriptors.push({
          plugin: plugin,
          options: opts || {}
        });
      });

      cache.descriptors = descriptors;
      cache.id = this._cacheId;
      return descriptors;
    },

    /**
     * Invalidates cache for the given chart: descriptors hold a reference on plugin option,
     * but in some cases, this reference can be changed by the user when updating options.
     * https://github.com/chartjs/Chart.js/issues/5111#issuecomment-355934167
     * @private
     */
    _invalidate: function (chart) {
      delete chart.$plugins;
    }
  };
  var core_scaleService = {
    // Scale registration object. Extensions can register new scale types (such as log or DB scales) and then
    // use the new chart options to grab the correct scale
    constructors: {},
    // Use a registration function so that we can move to an ES6 map when we no longer need to support
    // old browsers
    // Scale config defaults
    defaults: {},
    registerScaleType: function (type, scaleConstructor, scaleDefaults) {
      this.constructors[type] = scaleConstructor;
      this.defaults[type] = helpers$1.clone(scaleDefaults);
    },
    getScaleConstructor: function (type) {
      return this.constructors.hasOwnProperty(type) ? this.constructors[type] : undefined;
    },
    getScaleDefaults: function (type) {
      // Return the scale defaults merged with the global settings so that we always use the latest ones
      return this.defaults.hasOwnProperty(type) ? helpers$1.merge(Object.create(null), [core_defaults.scale, this.defaults[type]]) : {};
    },
    updateScaleDefaults: function (type, additions) {
      var me = this;

      if (me.defaults.hasOwnProperty(type)) {
        me.defaults[type] = helpers$1.extend(me.defaults[type], additions);
      }
    },
    addScalesToLayout: function (chart) {
      // Adds each scale to the chart.boxes array to be sized accordingly
      helpers$1.each(chart.scales, function (scale) {
        // Set ILayoutItem parameters for backwards compatibility
        scale.fullWidth = scale.options.fullWidth;
        scale.position = scale.options.position;
        scale.weight = scale.options.weight;
        core_layouts.addBox(chart, scale);
      });
    }
  };
  var valueOrDefault$8 = helpers$1.valueOrDefault;
  var getRtlHelper = helpers$1.rtl.getRtlAdapter;

  core_defaults._set('global', {
    tooltips: {
      enabled: true,
      custom: null,
      mode: 'nearest',
      position: 'average',
      intersect: true,
      backgroundColor: 'rgba(0,0,0,0.8)',
      titleFontStyle: 'bold',
      titleSpacing: 2,
      titleMarginBottom: 6,
      titleFontColor: '#fff',
      titleAlign: 'left',
      bodySpacing: 2,
      bodyFontColor: '#fff',
      bodyAlign: 'left',
      footerFontStyle: 'bold',
      footerSpacing: 2,
      footerMarginTop: 6,
      footerFontColor: '#fff',
      footerAlign: 'left',
      yPadding: 6,
      xPadding: 6,
      caretPadding: 2,
      caretSize: 5,
      cornerRadius: 6,
      multiKeyBackground: '#fff',
      displayColors: true,
      borderColor: 'rgba(0,0,0,0)',
      borderWidth: 0,
      callbacks: {
        // Args are: (tooltipItems, data)
        beforeTitle: helpers$1.noop,
        title: function (tooltipItems, data) {
          var title = '';
          var labels = data.labels;
          var labelCount = labels ? labels.length : 0;

          if (tooltipItems.length > 0) {
            var item = tooltipItems[0];

            if (item.label) {
              title = item.label;
            } else if (item.xLabel) {
              title = item.xLabel;
            } else if (labelCount > 0 && item.index < labelCount) {
              title = labels[item.index];
            }
          }

          return title;
        },
        afterTitle: helpers$1.noop,
        // Args are: (tooltipItems, data)
        beforeBody: helpers$1.noop,
        // Args are: (tooltipItem, data)
        beforeLabel: helpers$1.noop,
        label: function (tooltipItem, data) {
          var label = data.datasets[tooltipItem.datasetIndex].label || '';

          if (label) {
            label += ': ';
          }

          if (!helpers$1.isNullOrUndef(tooltipItem.value)) {
            label += tooltipItem.value;
          } else {
            label += tooltipItem.yLabel;
          }

          return label;
        },
        labelColor: function (tooltipItem, chart) {
          var meta = chart.getDatasetMeta(tooltipItem.datasetIndex);
          var activeElement = meta.data[tooltipItem.index];
          var view = activeElement._view;
          return {
            borderColor: view.borderColor,
            backgroundColor: view.backgroundColor
          };
        },
        labelTextColor: function () {
          return this._options.bodyFontColor;
        },
        afterLabel: helpers$1.noop,
        // Args are: (tooltipItems, data)
        afterBody: helpers$1.noop,
        // Args are: (tooltipItems, data)
        beforeFooter: helpers$1.noop,
        footer: helpers$1.noop,
        afterFooter: helpers$1.noop
      }
    }
  });

  var positioners = {
    /**
     * Average mode places the tooltip at the average position of the elements shown
     * @function Chart.Tooltip.positioners.average
     * @param elements {ChartElement[]} the elements being displayed in the tooltip
     * @returns {object} tooltip position
     */
    average: function (elements) {
      if (!elements.length) {
        return false;
      }

      var i, len;
      var x = 0;
      var y = 0;
      var count = 0;

      for (i = 0, len = elements.length; i < len; ++i) {
        var el = elements[i];

        if (el && el.hasValue()) {
          var pos = el.tooltipPosition();
          x += pos.x;
          y += pos.y;
          ++count;
        }
      }

      return {
        x: x / count,
        y: y / count
      };
    },

    /**
     * Gets the tooltip position nearest of the item nearest to the event position
     * @function Chart.Tooltip.positioners.nearest
     * @param elements {Chart.Element[]} the tooltip elements
     * @param eventPosition {object} the position of the event in canvas coordinates
     * @returns {object} the tooltip position
     */
    nearest: function (elements, eventPosition) {
      var x = eventPosition.x;
      var y = eventPosition.y;
      var minDistance = Number.POSITIVE_INFINITY;
      var i, len, nearestElement;

      for (i = 0, len = elements.length; i < len; ++i) {
        var el = elements[i];

        if (el && el.hasValue()) {
          var center = el.getCenterPoint();
          var d = helpers$1.distanceBetweenPoints(eventPosition, center);

          if (d < minDistance) {
            minDistance = d;
            nearestElement = el;
          }
        }
      }

      if (nearestElement) {
        var tp = nearestElement.tooltipPosition();
        x = tp.x;
        y = tp.y;
      }

      return {
        x: x,
        y: y
      };
    }
  }; // Helper to push or concat based on if the 2nd parameter is an array or not

  function pushOrConcat(base, toPush) {
    if (toPush) {
      if (helpers$1.isArray(toPush)) {
        // base = base.concat(toPush);
        Array.prototype.push.apply(base, toPush);
      } else {
        base.push(toPush);
      }
    }

    return base;
  }
  /**
   * Returns array of strings split by newline
   * @param {string} value - The value to split by newline.
   * @returns {string[]} value if newline present - Returned from String split() method
   * @function
   */


  function splitNewlines(str) {
    if ((typeof str === 'string' || str instanceof String) && str.indexOf('\n') > -1) {
      return str.split('\n');
    }

    return str;
  }
  /**
   * Private helper to create a tooltip item model
   * @param element - the chart element (point, arc, bar) to create the tooltip item for
   * @return new tooltip item
   */


  function createTooltipItem(element) {
    var xScale = element._xScale;
    var yScale = element._yScale || element._scale; // handle radar || polarArea charts

    var index = element._index;
    var datasetIndex = element._datasetIndex;

    var controller = element._chart.getDatasetMeta(datasetIndex).controller;

    var indexScale = controller._getIndexScale();

    var valueScale = controller._getValueScale();

    return {
      xLabel: xScale ? xScale.getLabelForIndex(index, datasetIndex) : '',
      yLabel: yScale ? yScale.getLabelForIndex(index, datasetIndex) : '',
      label: indexScale ? '' + indexScale.getLabelForIndex(index, datasetIndex) : '',
      value: valueScale ? '' + valueScale.getLabelForIndex(index, datasetIndex) : '',
      index: index,
      datasetIndex: datasetIndex,
      x: element._model.x,
      y: element._model.y
    };
  }
  /**
   * Helper to get the reset model for the tooltip
   * @param tooltipOpts {object} the tooltip options
   */


  function getBaseModel(tooltipOpts) {
    var globalDefaults = core_defaults.global;
    return {
      // Positioning
      xPadding: tooltipOpts.xPadding,
      yPadding: tooltipOpts.yPadding,
      xAlign: tooltipOpts.xAlign,
      yAlign: tooltipOpts.yAlign,
      // Drawing direction and text direction
      rtl: tooltipOpts.rtl,
      textDirection: tooltipOpts.textDirection,
      // Body
      bodyFontColor: tooltipOpts.bodyFontColor,
      _bodyFontFamily: valueOrDefault$8(tooltipOpts.bodyFontFamily, globalDefaults.defaultFontFamily),
      _bodyFontStyle: valueOrDefault$8(tooltipOpts.bodyFontStyle, globalDefaults.defaultFontStyle),
      _bodyAlign: tooltipOpts.bodyAlign,
      bodyFontSize: valueOrDefault$8(tooltipOpts.bodyFontSize, globalDefaults.defaultFontSize),
      bodySpacing: tooltipOpts.bodySpacing,
      // Title
      titleFontColor: tooltipOpts.titleFontColor,
      _titleFontFamily: valueOrDefault$8(tooltipOpts.titleFontFamily, globalDefaults.defaultFontFamily),
      _titleFontStyle: valueOrDefault$8(tooltipOpts.titleFontStyle, globalDefaults.defaultFontStyle),
      titleFontSize: valueOrDefault$8(tooltipOpts.titleFontSize, globalDefaults.defaultFontSize),
      _titleAlign: tooltipOpts.titleAlign,
      titleSpacing: tooltipOpts.titleSpacing,
      titleMarginBottom: tooltipOpts.titleMarginBottom,
      // Footer
      footerFontColor: tooltipOpts.footerFontColor,
      _footerFontFamily: valueOrDefault$8(tooltipOpts.footerFontFamily, globalDefaults.defaultFontFamily),
      _footerFontStyle: valueOrDefault$8(tooltipOpts.footerFontStyle, globalDefaults.defaultFontStyle),
      footerFontSize: valueOrDefault$8(tooltipOpts.footerFontSize, globalDefaults.defaultFontSize),
      _footerAlign: tooltipOpts.footerAlign,
      footerSpacing: tooltipOpts.footerSpacing,
      footerMarginTop: tooltipOpts.footerMarginTop,
      // Appearance
      caretSize: tooltipOpts.caretSize,
      cornerRadius: tooltipOpts.cornerRadius,
      backgroundColor: tooltipOpts.backgroundColor,
      opacity: 0,
      legendColorBackground: tooltipOpts.multiKeyBackground,
      displayColors: tooltipOpts.displayColors,
      borderColor: tooltipOpts.borderColor,
      borderWidth: tooltipOpts.borderWidth
    };
  }
  /**
   * Get the size of the tooltip
   */


  function getTooltipSize(tooltip, model) {
    var ctx = tooltip._chart.ctx;
    var height = model.yPadding * 2; // Tooltip Padding

    var width = 0; // Count of all lines in the body

    var body = model.body;
    var combinedBodyLength = body.reduce(function (count, bodyItem) {
      return count + bodyItem.before.length + bodyItem.lines.length + bodyItem.after.length;
    }, 0);
    combinedBodyLength += model.beforeBody.length + model.afterBody.length;
    var titleLineCount = model.title.length;
    var footerLineCount = model.footer.length;
    var titleFontSize = model.titleFontSize;
    var bodyFontSize = model.bodyFontSize;
    var footerFontSize = model.footerFontSize;
    height += titleLineCount * titleFontSize; // Title Lines

    height += titleLineCount ? (titleLineCount - 1) * model.titleSpacing : 0; // Title Line Spacing

    height += titleLineCount ? model.titleMarginBottom : 0; // Title's bottom Margin

    height += combinedBodyLength * bodyFontSize; // Body Lines

    height += combinedBodyLength ? (combinedBodyLength - 1) * model.bodySpacing : 0; // Body Line Spacing

    height += footerLineCount ? model.footerMarginTop : 0; // Footer Margin

    height += footerLineCount * footerFontSize; // Footer Lines

    height += footerLineCount ? (footerLineCount - 1) * model.footerSpacing : 0; // Footer Line Spacing
    // Title width

    var widthPadding = 0;

    var maxLineWidth = function (line) {
      width = Math.max(width, ctx.measureText(line).width + widthPadding);
    };

    ctx.font = helpers$1.fontString(titleFontSize, model._titleFontStyle, model._titleFontFamily);
    helpers$1.each(model.title, maxLineWidth); // Body width

    ctx.font = helpers$1.fontString(bodyFontSize, model._bodyFontStyle, model._bodyFontFamily);
    helpers$1.each(model.beforeBody.concat(model.afterBody), maxLineWidth); // Body lines may include some extra width due to the color box

    widthPadding = model.displayColors ? bodyFontSize + 2 : 0;
    helpers$1.each(body, function (bodyItem) {
      helpers$1.each(bodyItem.before, maxLineWidth);
      helpers$1.each(bodyItem.lines, maxLineWidth);
      helpers$1.each(bodyItem.after, maxLineWidth);
    }); // Reset back to 0

    widthPadding = 0; // Footer width

    ctx.font = helpers$1.fontString(footerFontSize, model._footerFontStyle, model._footerFontFamily);
    helpers$1.each(model.footer, maxLineWidth); // Add padding

    width += 2 * model.xPadding;
    return {
      width: width,
      height: height
    };
  }
  /**
   * Helper to get the alignment of a tooltip given the size
   */


  function determineAlignment(tooltip, size) {
    var model = tooltip._model;
    var chart = tooltip._chart;
    var chartArea = tooltip._chart.chartArea;
    var xAlign = 'center';
    var yAlign = 'center';

    if (model.y < size.height) {
      yAlign = 'top';
    } else if (model.y > chart.height - size.height) {
      yAlign = 'bottom';
    }

    var lf, rf; // functions to determine left, right alignment

    var olf, orf; // functions to determine if left/right alignment causes tooltip to go outside chart

    var yf; // function to get the y alignment if the tooltip goes outside of the left or right edges

    var midX = (chartArea.left + chartArea.right) / 2;
    var midY = (chartArea.top + chartArea.bottom) / 2;

    if (yAlign === 'center') {
      lf = function (x) {
        return x <= midX;
      };

      rf = function (x) {
        return x > midX;
      };
    } else {
      lf = function (x) {
        return x <= size.width / 2;
      };

      rf = function (x) {
        return x >= chart.width - size.width / 2;
      };
    }

    olf = function (x) {
      return x + size.width + model.caretSize + model.caretPadding > chart.width;
    };

    orf = function (x) {
      return x - size.width - model.caretSize - model.caretPadding < 0;
    };

    yf = function (y) {
      return y <= midY ? 'top' : 'bottom';
    };

    if (lf(model.x)) {
      xAlign = 'left'; // Is tooltip too wide and goes over the right side of the chart.?

      if (olf(model.x)) {
        xAlign = 'center';
        yAlign = yf(model.y);
      }
    } else if (rf(model.x)) {
      xAlign = 'right'; // Is tooltip too wide and goes outside left edge of canvas?

      if (orf(model.x)) {
        xAlign = 'center';
        yAlign = yf(model.y);
      }
    }

    var opts = tooltip._options;
    return {
      xAlign: opts.xAlign ? opts.xAlign : xAlign,
      yAlign: opts.yAlign ? opts.yAlign : yAlign
    };
  }
  /**
   * Helper to get the location a tooltip needs to be placed at given the initial position (via the vm) and the size and alignment
   */


  function getBackgroundPoint(vm, size, alignment, chart) {
    // Background Position
    var x = vm.x;
    var y = vm.y;
    var caretSize = vm.caretSize;
    var caretPadding = vm.caretPadding;
    var cornerRadius = vm.cornerRadius;
    var xAlign = alignment.xAlign;
    var yAlign = alignment.yAlign;
    var paddingAndSize = caretSize + caretPadding;
    var radiusAndPadding = cornerRadius + caretPadding;

    if (xAlign === 'right') {
      x -= size.width;
    } else if (xAlign === 'center') {
      x -= size.width / 2;

      if (x + size.width > chart.width) {
        x = chart.width - size.width;
      }

      if (x < 0) {
        x = 0;
      }
    }

    if (yAlign === 'top') {
      y += paddingAndSize;
    } else if (yAlign === 'bottom') {
      y -= size.height + paddingAndSize;
    } else {
      y -= size.height / 2;
    }

    if (yAlign === 'center') {
      if (xAlign === 'left') {
        x += paddingAndSize;
      } else if (xAlign === 'right') {
        x -= paddingAndSize;
      }
    } else if (xAlign === 'left') {
      x -= radiusAndPadding;
    } else if (xAlign === 'right') {
      x += radiusAndPadding;
    }

    return {
      x: x,
      y: y
    };
  }

  function getAlignedX(vm, align) {
    return align === 'center' ? vm.x + vm.width / 2 : align === 'right' ? vm.x + vm.width - vm.xPadding : vm.x + vm.xPadding;
  }
  /**
   * Helper to build before and after body lines
   */


  function getBeforeAfterBodyLines(callback) {
    return pushOrConcat([], splitNewlines(callback));
  }

  var exports$4 = core_element.extend({
    initialize: function () {
      this._model = getBaseModel(this._options);
      this._lastActive = [];
    },
    // Get the title
    // Args are: (tooltipItem, data)
    getTitle: function () {
      var me = this;
      var opts = me._options;
      var callbacks = opts.callbacks;
      var beforeTitle = callbacks.beforeTitle.apply(me, arguments);
      var title = callbacks.title.apply(me, arguments);
      var afterTitle = callbacks.afterTitle.apply(me, arguments);
      var lines = [];
      lines = pushOrConcat(lines, splitNewlines(beforeTitle));
      lines = pushOrConcat(lines, splitNewlines(title));
      lines = pushOrConcat(lines, splitNewlines(afterTitle));
      return lines;
    },
    // Args are: (tooltipItem, data)
    getBeforeBody: function () {
      return getBeforeAfterBodyLines(this._options.callbacks.beforeBody.apply(this, arguments));
    },
    // Args are: (tooltipItem, data)
    getBody: function (tooltipItems, data) {
      var me = this;
      var callbacks = me._options.callbacks;
      var bodyItems = [];
      helpers$1.each(tooltipItems, function (tooltipItem) {
        var bodyItem = {
          before: [],
          lines: [],
          after: []
        };
        pushOrConcat(bodyItem.before, splitNewlines(callbacks.beforeLabel.call(me, tooltipItem, data)));
        pushOrConcat(bodyItem.lines, callbacks.label.call(me, tooltipItem, data));
        pushOrConcat(bodyItem.after, splitNewlines(callbacks.afterLabel.call(me, tooltipItem, data)));
        bodyItems.push(bodyItem);
      });
      return bodyItems;
    },
    // Args are: (tooltipItem, data)
    getAfterBody: function () {
      return getBeforeAfterBodyLines(this._options.callbacks.afterBody.apply(this, arguments));
    },
    // Get the footer and beforeFooter and afterFooter lines
    // Args are: (tooltipItem, data)
    getFooter: function () {
      var me = this;
      var callbacks = me._options.callbacks;
      var beforeFooter = callbacks.beforeFooter.apply(me, arguments);
      var footer = callbacks.footer.apply(me, arguments);
      var afterFooter = callbacks.afterFooter.apply(me, arguments);
      var lines = [];
      lines = pushOrConcat(lines, splitNewlines(beforeFooter));
      lines = pushOrConcat(lines, splitNewlines(footer));
      lines = pushOrConcat(lines, splitNewlines(afterFooter));
      return lines;
    },
    update: function (changed) {
      var me = this;
      var opts = me._options; // Need to regenerate the model because its faster than using extend and it is necessary due to the optimization in Chart.Element.transition
      // that does _view = _model if ease === 1. This causes the 2nd tooltip update to set properties in both the view and model at the same time
      // which breaks any animations.

      var existingModel = me._model;
      var model = me._model = getBaseModel(opts);
      var active = me._active;
      var data = me._data; // In the case where active.length === 0 we need to keep these at existing values for good animations

      var alignment = {
        xAlign: existingModel.xAlign,
        yAlign: existingModel.yAlign
      };
      var backgroundPoint = {
        x: existingModel.x,
        y: existingModel.y
      };
      var tooltipSize = {
        width: existingModel.width,
        height: existingModel.height
      };
      var tooltipPosition = {
        x: existingModel.caretX,
        y: existingModel.caretY
      };
      var i, len;

      if (active.length) {
        model.opacity = 1;
        var labelColors = [];
        var labelTextColors = [];
        tooltipPosition = positioners[opts.position].call(me, active, me._eventPosition);
        var tooltipItems = [];

        for (i = 0, len = active.length; i < len; ++i) {
          tooltipItems.push(createTooltipItem(active[i]));
        } // If the user provided a filter function, use it to modify the tooltip items


        if (opts.filter) {
          tooltipItems = tooltipItems.filter(function (a) {
            return opts.filter(a, data);
          });
        } // If the user provided a sorting function, use it to modify the tooltip items


        if (opts.itemSort) {
          tooltipItems = tooltipItems.sort(function (a, b) {
            return opts.itemSort(a, b, data);
          });
        } // Determine colors for boxes


        helpers$1.each(tooltipItems, function (tooltipItem) {
          labelColors.push(opts.callbacks.labelColor.call(me, tooltipItem, me._chart));
          labelTextColors.push(opts.callbacks.labelTextColor.call(me, tooltipItem, me._chart));
        }); // Build the Text Lines

        model.title = me.getTitle(tooltipItems, data);
        model.beforeBody = me.getBeforeBody(tooltipItems, data);
        model.body = me.getBody(tooltipItems, data);
        model.afterBody = me.getAfterBody(tooltipItems, data);
        model.footer = me.getFooter(tooltipItems, data); // Initial positioning and colors

        model.x = tooltipPosition.x;
        model.y = tooltipPosition.y;
        model.caretPadding = opts.caretPadding;
        model.labelColors = labelColors;
        model.labelTextColors = labelTextColors; // data points

        model.dataPoints = tooltipItems; // We need to determine alignment of the tooltip

        tooltipSize = getTooltipSize(this, model);
        alignment = determineAlignment(this, tooltipSize); // Final Size and Position

        backgroundPoint = getBackgroundPoint(model, tooltipSize, alignment, me._chart);
      } else {
        model.opacity = 0;
      }

      model.xAlign = alignment.xAlign;
      model.yAlign = alignment.yAlign;
      model.x = backgroundPoint.x;
      model.y = backgroundPoint.y;
      model.width = tooltipSize.width;
      model.height = tooltipSize.height; // Point where the caret on the tooltip points to

      model.caretX = tooltipPosition.x;
      model.caretY = tooltipPosition.y;
      me._model = model;

      if (changed && opts.custom) {
        opts.custom.call(me, model);
      }

      return me;
    },
    drawCaret: function (tooltipPoint, size) {
      var ctx = this._chart.ctx;
      var vm = this._view;
      var caretPosition = this.getCaretPosition(tooltipPoint, size, vm);
      ctx.lineTo(caretPosition.x1, caretPosition.y1);
      ctx.lineTo(caretPosition.x2, caretPosition.y2);
      ctx.lineTo(caretPosition.x3, caretPosition.y3);
    },
    getCaretPosition: function (tooltipPoint, size, vm) {
      var x1, x2, x3, y1, y2, y3;
      var caretSize = vm.caretSize;
      var cornerRadius = vm.cornerRadius;
      var xAlign = vm.xAlign;
      var yAlign = vm.yAlign;
      var ptX = tooltipPoint.x;
      var ptY = tooltipPoint.y;
      var width = size.width;
      var height = size.height;

      if (yAlign === 'center') {
        y2 = ptY + height / 2;

        if (xAlign === 'left') {
          x1 = ptX;
          x2 = x1 - caretSize;
          x3 = x1;
          y1 = y2 + caretSize;
          y3 = y2 - caretSize;
        } else {
          x1 = ptX + width;
          x2 = x1 + caretSize;
          x3 = x1;
          y1 = y2 - caretSize;
          y3 = y2 + caretSize;
        }
      } else {
        if (xAlign === 'left') {
          x2 = ptX + cornerRadius + caretSize;
          x1 = x2 - caretSize;
          x3 = x2 + caretSize;
        } else if (xAlign === 'right') {
          x2 = ptX + width - cornerRadius - caretSize;
          x1 = x2 - caretSize;
          x3 = x2 + caretSize;
        } else {
          x2 = vm.caretX;
          x1 = x2 - caretSize;
          x3 = x2 + caretSize;
        }

        if (yAlign === 'top') {
          y1 = ptY;
          y2 = y1 - caretSize;
          y3 = y1;
        } else {
          y1 = ptY + height;
          y2 = y1 + caretSize;
          y3 = y1; // invert drawing order

          var tmp = x3;
          x3 = x1;
          x1 = tmp;
        }
      }

      return {
        x1: x1,
        x2: x2,
        x3: x3,
        y1: y1,
        y2: y2,
        y3: y3
      };
    },
    drawTitle: function (pt, vm, ctx) {
      var title = vm.title;
      var length = title.length;
      var titleFontSize, titleSpacing, i;

      if (length) {
        var rtlHelper = getRtlHelper(vm.rtl, vm.x, vm.width);
        pt.x = getAlignedX(vm, vm._titleAlign);
        ctx.textAlign = rtlHelper.textAlign(vm._titleAlign);
        ctx.textBaseline = 'middle';
        titleFontSize = vm.titleFontSize;
        titleSpacing = vm.titleSpacing;
        ctx.fillStyle = vm.titleFontColor;
        ctx.font = helpers$1.fontString(titleFontSize, vm._titleFontStyle, vm._titleFontFamily);

        for (i = 0; i < length; ++i) {
          ctx.fillText(title[i], rtlHelper.x(pt.x), pt.y + titleFontSize / 2);
          pt.y += titleFontSize + titleSpacing; // Line Height and spacing

          if (i + 1 === length) {
            pt.y += vm.titleMarginBottom - titleSpacing; // If Last, add margin, remove spacing
          }
        }
      }
    },
    drawBody: function (pt, vm, ctx) {
      var bodyFontSize = vm.bodyFontSize;
      var bodySpacing = vm.bodySpacing;
      var bodyAlign = vm._bodyAlign;
      var body = vm.body;
      var drawColorBoxes = vm.displayColors;
      var xLinePadding = 0;
      var colorX = drawColorBoxes ? getAlignedX(vm, 'left') : 0;
      var rtlHelper = getRtlHelper(vm.rtl, vm.x, vm.width);

      var fillLineOfText = function (line) {
        ctx.fillText(line, rtlHelper.x(pt.x + xLinePadding), pt.y + bodyFontSize / 2);
        pt.y += bodyFontSize + bodySpacing;
      };

      var bodyItem, textColor, labelColors, lines, i, j, ilen, jlen;
      var bodyAlignForCalculation = rtlHelper.textAlign(bodyAlign);
      ctx.textAlign = bodyAlign;
      ctx.textBaseline = 'middle';
      ctx.font = helpers$1.fontString(bodyFontSize, vm._bodyFontStyle, vm._bodyFontFamily);
      pt.x = getAlignedX(vm, bodyAlignForCalculation); // Before body lines

      ctx.fillStyle = vm.bodyFontColor;
      helpers$1.each(vm.beforeBody, fillLineOfText);
      xLinePadding = drawColorBoxes && bodyAlignForCalculation !== 'right' ? bodyAlign === 'center' ? bodyFontSize / 2 + 1 : bodyFontSize + 2 : 0; // Draw body lines now

      for (i = 0, ilen = body.length; i < ilen; ++i) {
        bodyItem = body[i];
        textColor = vm.labelTextColors[i];
        labelColors = vm.labelColors[i];
        ctx.fillStyle = textColor;
        helpers$1.each(bodyItem.before, fillLineOfText);
        lines = bodyItem.lines;

        for (j = 0, jlen = lines.length; j < jlen; ++j) {
          // Draw Legend-like boxes if needed
          if (drawColorBoxes) {
            var rtlColorX = rtlHelper.x(colorX); // Fill a white rect so that colours merge nicely if the opacity is < 1

            ctx.fillStyle = vm.legendColorBackground;
            ctx.fillRect(rtlHelper.leftForLtr(rtlColorX, bodyFontSize), pt.y, bodyFontSize, bodyFontSize); // Border

            ctx.lineWidth = 1;
            ctx.strokeStyle = labelColors.borderColor;
            ctx.strokeRect(rtlHelper.leftForLtr(rtlColorX, bodyFontSize), pt.y, bodyFontSize, bodyFontSize); // Inner square

            ctx.fillStyle = labelColors.backgroundColor;
            ctx.fillRect(rtlHelper.leftForLtr(rtlHelper.xPlus(rtlColorX, 1), bodyFontSize - 2), pt.y + 1, bodyFontSize - 2, bodyFontSize - 2);
            ctx.fillStyle = textColor;
          }

          fillLineOfText(lines[j]);
        }

        helpers$1.each(bodyItem.after, fillLineOfText);
      } // Reset back to 0 for after body


      xLinePadding = 0; // After body lines

      helpers$1.each(vm.afterBody, fillLineOfText);
      pt.y -= bodySpacing; // Remove last body spacing
    },
    drawFooter: function (pt, vm, ctx) {
      var footer = vm.footer;
      var length = footer.length;
      var footerFontSize, i;

      if (length) {
        var rtlHelper = getRtlHelper(vm.rtl, vm.x, vm.width);
        pt.x = getAlignedX(vm, vm._footerAlign);
        pt.y += vm.footerMarginTop;
        ctx.textAlign = rtlHelper.textAlign(vm._footerAlign);
        ctx.textBaseline = 'middle';
        footerFontSize = vm.footerFontSize;
        ctx.fillStyle = vm.footerFontColor;
        ctx.font = helpers$1.fontString(footerFontSize, vm._footerFontStyle, vm._footerFontFamily);

        for (i = 0; i < length; ++i) {
          ctx.fillText(footer[i], rtlHelper.x(pt.x), pt.y + footerFontSize / 2);
          pt.y += footerFontSize + vm.footerSpacing;
        }
      }
    },
    drawBackground: function (pt, vm, ctx, tooltipSize) {
      ctx.fillStyle = vm.backgroundColor;
      ctx.strokeStyle = vm.borderColor;
      ctx.lineWidth = vm.borderWidth;
      var xAlign = vm.xAlign;
      var yAlign = vm.yAlign;
      var x = pt.x;
      var y = pt.y;
      var width = tooltipSize.width;
      var height = tooltipSize.height;
      var radius = vm.cornerRadius;
      ctx.beginPath();
      ctx.moveTo(x + radius, y);

      if (yAlign === 'top') {
        this.drawCaret(pt, tooltipSize);
      }

      ctx.lineTo(x + width - radius, y);
      ctx.quadraticCurveTo(x + width, y, x + width, y + radius);

      if (yAlign === 'center' && xAlign === 'right') {
        this.drawCaret(pt, tooltipSize);
      }

      ctx.lineTo(x + width, y + height - radius);
      ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);

      if (yAlign === 'bottom') {
        this.drawCaret(pt, tooltipSize);
      }

      ctx.lineTo(x + radius, y + height);
      ctx.quadraticCurveTo(x, y + height, x, y + height - radius);

      if (yAlign === 'center' && xAlign === 'left') {
        this.drawCaret(pt, tooltipSize);
      }

      ctx.lineTo(x, y + radius);
      ctx.quadraticCurveTo(x, y, x + radius, y);
      ctx.closePath();
      ctx.fill();

      if (vm.borderWidth > 0) {
        ctx.stroke();
      }
    },
    draw: function () {
      var ctx = this._chart.ctx;
      var vm = this._view;

      if (vm.opacity === 0) {
        return;
      }

      var tooltipSize = {
        width: vm.width,
        height: vm.height
      };
      var pt = {
        x: vm.x,
        y: vm.y
      }; // IE11/Edge does not like very small opacities, so snap to 0

      var opacity = Math.abs(vm.opacity < 1e-3) ? 0 : vm.opacity; // Truthy/falsey value for empty tooltip

      var hasTooltipContent = vm.title.length || vm.beforeBody.length || vm.body.length || vm.afterBody.length || vm.footer.length;

      if (this._options.enabled && hasTooltipContent) {
        ctx.save();
        ctx.globalAlpha = opacity; // Draw Background

        this.drawBackground(pt, vm, ctx, tooltipSize); // Draw Title, Body, and Footer

        pt.y += vm.yPadding;
        helpers$1.rtl.overrideTextDirection(ctx, vm.textDirection); // Titles

        this.drawTitle(pt, vm, ctx); // Body

        this.drawBody(pt, vm, ctx); // Footer

        this.drawFooter(pt, vm, ctx);
        helpers$1.rtl.restoreTextDirection(ctx, vm.textDirection);
        ctx.restore();
      }
    },

    /**
     * Handle an event
     * @private
     * @param {IEvent} event - The event to handle
     * @returns {boolean} true if the tooltip changed
     */
    handleEvent: function (e) {
      var me = this;
      var options = me._options;
      var changed = false;
      me._lastActive = me._lastActive || []; // Find Active Elements for tooltips

      if (e.type === 'mouseout') {
        me._active = [];
      } else {
        me._active = me._chart.getElementsAtEventForMode(e, options.mode, options);

        if (options.reverse) {
          me._active.reverse();
        }
      } // Remember Last Actives


      changed = !helpers$1.arrayEquals(me._active, me._lastActive); // Only handle target event on tooltip change

      if (changed) {
        me._lastActive = me._active;

        if (options.enabled || options.custom) {
          me._eventPosition = {
            x: e.x,
            y: e.y
          };
          me.update(true);
          me.pivot();
        }
      }

      return changed;
    }
  });
  /**
   * @namespace Chart.Tooltip.positioners
   */

  var positioners_1 = positioners;
  var core_tooltip = exports$4;
  core_tooltip.positioners = positioners_1;
  var valueOrDefault$9 = helpers$1.valueOrDefault;

  core_defaults._set('global', {
    elements: {},
    events: ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove'],
    hover: {
      onHover: null,
      mode: 'nearest',
      intersect: true,
      animationDuration: 400
    },
    onClick: null,
    maintainAspectRatio: true,
    responsive: true,
    responsiveAnimationDuration: 0
  });
  /**
   * Recursively merge the given config objects representing the `scales` option
   * by incorporating scale defaults in `xAxes` and `yAxes` array items, then
   * returns a deep copy of the result, thus doesn't alter inputs.
   */


  function mergeScaleConfig()
  /* config objects ... */
  {
    return helpers$1.merge(Object.create(null), [].slice.call(arguments), {
      merger: function (key, target, source, options) {
        if (key === 'xAxes' || key === 'yAxes') {
          var slen = source[key].length;
          var i, type, scale;

          if (!target[key]) {
            target[key] = [];
          }

          for (i = 0; i < slen; ++i) {
            scale = source[key][i];
            type = valueOrDefault$9(scale.type, key === 'xAxes' ? 'category' : 'linear');

            if (i >= target[key].length) {
              target[key].push({});
            }

            if (!target[key][i].type || scale.type && scale.type !== target[key][i].type) {
              // new/untyped scale or type changed: let's apply the new defaults
              // then merge source scale to correctly overwrite the defaults.
              helpers$1.merge(target[key][i], [core_scaleService.getScaleDefaults(type), scale]);
            } else {
              // scales type are the same
              helpers$1.merge(target[key][i], scale);
            }
          }
        } else {
          helpers$1._merger(key, target, source, options);
        }
      }
    });
  }
  /**
   * Recursively merge the given config objects as the root options by handling
   * default scale options for the `scales` and `scale` properties, then returns
   * a deep copy of the result, thus doesn't alter inputs.
   */


  function mergeConfig()
  /* config objects ... */
  {
    return helpers$1.merge(Object.create(null), [].slice.call(arguments), {
      merger: function (key, target, source, options) {
        var tval = target[key] || Object.create(null);
        var sval = source[key];

        if (key === 'scales') {
          // scale config merging is complex. Add our own function here for that
          target[key] = mergeScaleConfig(tval, sval);
        } else if (key === 'scale') {
          // used in polar area & radar charts since there is only one scale
          target[key] = helpers$1.merge(tval, [core_scaleService.getScaleDefaults(sval.type), sval]);
        } else {
          helpers$1._merger(key, target, source, options);
        }
      }
    });
  }

  function initConfig(config) {
    config = config || Object.create(null); // Do NOT use mergeConfig for the data object because this method merges arrays
    // and so would change references to labels and datasets, preventing data updates.

    var data = config.data = config.data || {};
    data.datasets = data.datasets || [];
    data.labels = data.labels || [];
    config.options = mergeConfig(core_defaults.global, core_defaults[config.type], config.options || {});
    return config;
  }

  function updateConfig(chart) {
    var newOptions = chart.options;
    helpers$1.each(chart.scales, function (scale) {
      core_layouts.removeBox(chart, scale);
    });
    newOptions = mergeConfig(core_defaults.global, core_defaults[chart.config.type], newOptions);
    chart.options = chart.config.options = newOptions;
    chart.ensureScalesHaveIDs();
    chart.buildOrUpdateScales(); // Tooltip

    chart.tooltip._options = newOptions.tooltips;
    chart.tooltip.initialize();
  }

  function nextAvailableScaleId(axesOpts, prefix, index) {
    var id;

    var hasId = function (obj) {
      return obj.id === id;
    };

    do {
      id = prefix + index++;
    } while (helpers$1.findIndex(axesOpts, hasId) >= 0);

    return id;
  }

  function positionIsHorizontal(position) {
    return position === 'top' || position === 'bottom';
  }

  function compare2Level(l1, l2) {
    return function (a, b) {
      return a[l1] === b[l1] ? a[l2] - b[l2] : a[l1] - b[l1];
    };
  }

  var Chart = function (item, config) {
    this.construct(item, config);
    return this;
  };

  helpers$1.extend(Chart.prototype,
  /** @lends Chart */
  {
    /**
     * @private
     */
    construct: function (item, config) {
      var me = this;
      config = initConfig(config);
      var context = platform.acquireContext(item, config);
      var canvas = context && context.canvas;
      var height = canvas && canvas.height;
      var width = canvas && canvas.width;
      me.id = helpers$1.uid();
      me.ctx = context;
      me.canvas = canvas;
      me.config = config;
      me.width = width;
      me.height = height;
      me.aspectRatio = height ? width / height : null;
      me.options = config.options;
      me._bufferedRender = false;
      me._layers = [];
      /**
       * Provided for backward compatibility, Chart and Chart.Controller have been merged,
       * the "instance" still need to be defined since it might be called from plugins.
       * @prop Chart#chart
       * @deprecated since version 2.6.0
       * @todo remove at version 3
       * @private
       */

      me.chart = me;
      me.controller = me; // chart.chart.controller #inception
      // Add the chart instance to the global namespace

      Chart.instances[me.id] = me; // Define alias to the config data: `chart.data === chart.config.data`

      Object.defineProperty(me, 'data', {
        get: function () {
          return me.config.data;
        },
        set: function (value) {
          me.config.data = value;
        }
      });

      if (!context || !canvas) {
        // The given item is not a compatible context2d element, let's return before finalizing
        // the chart initialization but after setting basic chart / controller properties that
        // can help to figure out that the chart is not valid (e.g chart.canvas !== null);
        // https://github.com/chartjs/Chart.js/issues/2807
        console.error("Failed to create chart: can't acquire context from the given item");
        return;
      }

      me.initialize();
      me.update();
    },

    /**
     * @private
     */
    initialize: function () {
      var me = this; // Before init plugin notification

      core_plugins.notify(me, 'beforeInit');
      helpers$1.retinaScale(me, me.options.devicePixelRatio);
      me.bindEvents();

      if (me.options.responsive) {
        // Initial resize before chart draws (must be silent to preserve initial animations).
        me.resize(true);
      }

      me.initToolTip(); // After init plugin notification

      core_plugins.notify(me, 'afterInit');
      return me;
    },
    clear: function () {
      helpers$1.canvas.clear(this);
      return this;
    },
    stop: function () {
      // Stops any current animation loop occurring
      core_animations.cancelAnimation(this);
      return this;
    },
    resize: function (silent) {
      var me = this;
      var options = me.options;
      var canvas = me.canvas;
      var aspectRatio = options.maintainAspectRatio && me.aspectRatio || null; // the canvas render width and height will be casted to integers so make sure that
      // the canvas display style uses the same integer values to avoid blurring effect.
      // Set to 0 instead of canvas.size because the size defaults to 300x150 if the element is collapsed

      var newWidth = Math.max(0, Math.floor(helpers$1.getMaximumWidth(canvas)));
      var newHeight = Math.max(0, Math.floor(aspectRatio ? newWidth / aspectRatio : helpers$1.getMaximumHeight(canvas)));

      if (me.width === newWidth && me.height === newHeight) {
        return;
      }

      canvas.width = me.width = newWidth;
      canvas.height = me.height = newHeight;
      canvas.style.width = newWidth + 'px';
      canvas.style.height = newHeight + 'px';
      helpers$1.retinaScale(me, options.devicePixelRatio);

      if (!silent) {
        // Notify any plugins about the resize
        var newSize = {
          width: newWidth,
          height: newHeight
        };
        core_plugins.notify(me, 'resize', [newSize]); // Notify of resize

        if (options.onResize) {
          options.onResize(me, newSize);
        }

        me.stop();
        me.update({
          duration: options.responsiveAnimationDuration
        });
      }
    },
    ensureScalesHaveIDs: function () {
      var options = this.options;
      var scalesOptions = options.scales || {};
      var scaleOptions = options.scale;
      helpers$1.each(scalesOptions.xAxes, function (xAxisOptions, index) {
        if (!xAxisOptions.id) {
          xAxisOptions.id = nextAvailableScaleId(scalesOptions.xAxes, 'x-axis-', index);
        }
      });
      helpers$1.each(scalesOptions.yAxes, function (yAxisOptions, index) {
        if (!yAxisOptions.id) {
          yAxisOptions.id = nextAvailableScaleId(scalesOptions.yAxes, 'y-axis-', index);
        }
      });

      if (scaleOptions) {
        scaleOptions.id = scaleOptions.id || 'scale';
      }
    },

    /**
     * Builds a map of scale ID to scale object for future lookup.
     */
    buildOrUpdateScales: function () {
      var me = this;
      var options = me.options;
      var scales = me.scales || {};
      var items = [];
      var updated = Object.keys(scales).reduce(function (obj, id) {
        obj[id] = false;
        return obj;
      }, {});

      if (options.scales) {
        items = items.concat((options.scales.xAxes || []).map(function (xAxisOptions) {
          return {
            options: xAxisOptions,
            dtype: 'category',
            dposition: 'bottom'
          };
        }), (options.scales.yAxes || []).map(function (yAxisOptions) {
          return {
            options: yAxisOptions,
            dtype: 'linear',
            dposition: 'left'
          };
        }));
      }

      if (options.scale) {
        items.push({
          options: options.scale,
          dtype: 'radialLinear',
          isDefault: true,
          dposition: 'chartArea'
        });
      }

      helpers$1.each(items, function (item) {
        var scaleOptions = item.options;
        var id = scaleOptions.id;
        var scaleType = valueOrDefault$9(scaleOptions.type, item.dtype);

        if (positionIsHorizontal(scaleOptions.position) !== positionIsHorizontal(item.dposition)) {
          scaleOptions.position = item.dposition;
        }

        updated[id] = true;
        var scale = null;

        if (id in scales && scales[id].type === scaleType) {
          scale = scales[id];
          scale.options = scaleOptions;
          scale.ctx = me.ctx;
          scale.chart = me;
        } else {
          var scaleClass = core_scaleService.getScaleConstructor(scaleType);

          if (!scaleClass) {
            return;
          }

          scale = new scaleClass({
            id: id,
            type: scaleType,
            options: scaleOptions,
            ctx: me.ctx,
            chart: me
          });
          scales[scale.id] = scale;
        }

        scale.mergeTicksOptions(); // TODO(SB): I think we should be able to remove this custom case (options.scale)
        // and consider it as a regular scale part of the "scales"" map only! This would
        // make the logic easier and remove some useless? custom code.

        if (item.isDefault) {
          me.scale = scale;
        }
      }); // clear up discarded scales

      helpers$1.each(updated, function (hasUpdated, id) {
        if (!hasUpdated) {
          delete scales[id];
        }
      });
      me.scales = scales;
      core_scaleService.addScalesToLayout(this);
    },
    buildOrUpdateControllers: function () {
      var me = this;
      var newControllers = [];
      var datasets = me.data.datasets;
      var i, ilen;

      for (i = 0, ilen = datasets.length; i < ilen; i++) {
        var dataset = datasets[i];
        var meta = me.getDatasetMeta(i);
        var type = dataset.type || me.config.type;

        if (meta.type && meta.type !== type) {
          me.destroyDatasetMeta(i);
          meta = me.getDatasetMeta(i);
        }

        meta.type = type;
        meta.order = dataset.order || 0;
        meta.index = i;

        if (meta.controller) {
          meta.controller.updateIndex(i);
          meta.controller.linkScales();
        } else {
          var ControllerClass = controllers[meta.type];

          if (ControllerClass === undefined) {
            throw new Error('"' + meta.type + '" is not a chart type.');
          }

          meta.controller = new ControllerClass(me, i);
          newControllers.push(meta.controller);
        }
      }

      return newControllers;
    },

    /**
     * Reset the elements of all datasets
     * @private
     */
    resetElements: function () {
      var me = this;
      helpers$1.each(me.data.datasets, function (dataset, datasetIndex) {
        me.getDatasetMeta(datasetIndex).controller.reset();
      }, me);
    },

    /**
    * Resets the chart back to it's state before the initial animation
    */
    reset: function () {
      this.resetElements();
      this.tooltip.initialize();
    },
    update: function (config) {
      var me = this;
      var i, ilen;

      if (!config || typeof config !== 'object') {
        // backwards compatibility
        config = {
          duration: config,
          lazy: arguments[1]
        };
      }

      updateConfig(me); // plugins options references might have change, let's invalidate the cache
      // https://github.com/chartjs/Chart.js/issues/5111#issuecomment-355934167

      core_plugins._invalidate(me);

      if (core_plugins.notify(me, 'beforeUpdate') === false) {
        return;
      } // In case the entire data object changed


      me.tooltip._data = me.data; // Make sure dataset controllers are updated and new controllers are reset

      var newControllers = me.buildOrUpdateControllers(); // Make sure all dataset controllers have correct meta data counts

      for (i = 0, ilen = me.data.datasets.length; i < ilen; i++) {
        me.getDatasetMeta(i).controller.buildOrUpdateElements();
      }

      me.updateLayout(); // Can only reset the new controllers after the scales have been updated

      if (me.options.animation && me.options.animation.duration) {
        helpers$1.each(newControllers, function (controller) {
          controller.reset();
        });
      }

      me.updateDatasets(); // Need to reset tooltip in case it is displayed with elements that are removed
      // after update.

      me.tooltip.initialize(); // Last active contains items that were previously in the tooltip.
      // When we reset the tooltip, we need to clear it

      me.lastActive = []; // Do this before render so that any plugins that need final scale updates can use it

      core_plugins.notify(me, 'afterUpdate');

      me._layers.sort(compare2Level('z', '_idx'));

      if (me._bufferedRender) {
        me._bufferedRequest = {
          duration: config.duration,
          easing: config.easing,
          lazy: config.lazy
        };
      } else {
        me.render(config);
      }
    },

    /**
     * Updates the chart layout unless a plugin returns `false` to the `beforeLayout`
     * hook, in which case, plugins will not be called on `afterLayout`.
     * @private
     */
    updateLayout: function () {
      var me = this;

      if (core_plugins.notify(me, 'beforeLayout') === false) {
        return;
      }

      core_layouts.update(this, this.width, this.height);
      me._layers = [];
      helpers$1.each(me.boxes, function (box) {
        // _configure is called twice, once in core.scale.update and once here.
        // Here the boxes are fully updated and at their final positions.
        if (box._configure) {
          box._configure();
        }

        me._layers.push.apply(me._layers, box._layers());
      }, me);

      me._layers.forEach(function (item, index) {
        item._idx = index;
      });
      /**
       * Provided for backward compatibility, use `afterLayout` instead.
       * @method IPlugin#afterScaleUpdate
       * @deprecated since version 2.5.0
       * @todo remove at version 3
       * @private
       */


      core_plugins.notify(me, 'afterScaleUpdate');
      core_plugins.notify(me, 'afterLayout');
    },

    /**
     * Updates all datasets unless a plugin returns `false` to the `beforeDatasetsUpdate`
     * hook, in which case, plugins will not be called on `afterDatasetsUpdate`.
     * @private
     */
    updateDatasets: function () {
      var me = this;

      if (core_plugins.notify(me, 'beforeDatasetsUpdate') === false) {
        return;
      }

      for (var i = 0, ilen = me.data.datasets.length; i < ilen; ++i) {
        me.updateDataset(i);
      }

      core_plugins.notify(me, 'afterDatasetsUpdate');
    },

    /**
     * Updates dataset at index unless a plugin returns `false` to the `beforeDatasetUpdate`
     * hook, in which case, plugins will not be called on `afterDatasetUpdate`.
     * @private
     */
    updateDataset: function (index) {
      var me = this;
      var meta = me.getDatasetMeta(index);
      var args = {
        meta: meta,
        index: index
      };

      if (core_plugins.notify(me, 'beforeDatasetUpdate', [args]) === false) {
        return;
      }

      meta.controller._update();

      core_plugins.notify(me, 'afterDatasetUpdate', [args]);
    },
    render: function (config) {
      var me = this;

      if (!config || typeof config !== 'object') {
        // backwards compatibility
        config = {
          duration: config,
          lazy: arguments[1]
        };
      }

      var animationOptions = me.options.animation;
      var duration = valueOrDefault$9(config.duration, animationOptions && animationOptions.duration);
      var lazy = config.lazy;

      if (core_plugins.notify(me, 'beforeRender') === false) {
        return;
      }

      var onComplete = function (animation) {
        core_plugins.notify(me, 'afterRender');
        helpers$1.callback(animationOptions && animationOptions.onComplete, [animation], me);
      };

      if (animationOptions && duration) {
        var animation = new core_animation({
          numSteps: duration / 16.66,
          // 60 fps
          easing: config.easing || animationOptions.easing,
          render: function (chart, animationObject) {
            var easingFunction = helpers$1.easing.effects[animationObject.easing];
            var currentStep = animationObject.currentStep;
            var stepDecimal = currentStep / animationObject.numSteps;
            chart.draw(easingFunction(stepDecimal), stepDecimal, currentStep);
          },
          onAnimationProgress: animationOptions.onProgress,
          onAnimationComplete: onComplete
        });
        core_animations.addAnimation(me, animation, duration, lazy);
      } else {
        me.draw(); // See https://github.com/chartjs/Chart.js/issues/3781

        onComplete(new core_animation({
          numSteps: 0,
          chart: me
        }));
      }

      return me;
    },
    draw: function (easingValue) {
      var me = this;
      var i, layers;
      me.clear();

      if (helpers$1.isNullOrUndef(easingValue)) {
        easingValue = 1;
      }

      me.transition(easingValue);

      if (me.width <= 0 || me.height <= 0) {
        return;
      }

      if (core_plugins.notify(me, 'beforeDraw', [easingValue]) === false) {
        return;
      } // Because of plugin hooks (before/afterDatasetsDraw), datasets can't
      // currently be part of layers. Instead, we draw
      // layers <= 0 before(default, backward compat), and the rest after


      layers = me._layers;

      for (i = 0; i < layers.length && layers[i].z <= 0; ++i) {
        layers[i].draw(me.chartArea);
      }

      me.drawDatasets(easingValue); // Rest of layers

      for (; i < layers.length; ++i) {
        layers[i].draw(me.chartArea);
      }

      me._drawTooltip(easingValue);

      core_plugins.notify(me, 'afterDraw', [easingValue]);
    },

    /**
     * @private
     */
    transition: function (easingValue) {
      var me = this;

      for (var i = 0, ilen = (me.data.datasets || []).length; i < ilen; ++i) {
        if (me.isDatasetVisible(i)) {
          me.getDatasetMeta(i).controller.transition(easingValue);
        }
      }

      me.tooltip.transition(easingValue);
    },

    /**
     * @private
     */
    _getSortedDatasetMetas: function (filterVisible) {
      var me = this;
      var datasets = me.data.datasets || [];
      var result = [];
      var i, ilen;

      for (i = 0, ilen = datasets.length; i < ilen; ++i) {
        if (!filterVisible || me.isDatasetVisible(i)) {
          result.push(me.getDatasetMeta(i));
        }
      }

      result.sort(compare2Level('order', 'index'));
      return result;
    },

    /**
     * @private
     */
    _getSortedVisibleDatasetMetas: function () {
      return this._getSortedDatasetMetas(true);
    },

    /**
     * Draws all datasets unless a plugin returns `false` to the `beforeDatasetsDraw`
     * hook, in which case, plugins will not be called on `afterDatasetsDraw`.
     * @private
     */
    drawDatasets: function (easingValue) {
      var me = this;
      var metasets, i;

      if (core_plugins.notify(me, 'beforeDatasetsDraw', [easingValue]) === false) {
        return;
      }

      metasets = me._getSortedVisibleDatasetMetas();

      for (i = metasets.length - 1; i >= 0; --i) {
        me.drawDataset(metasets[i], easingValue);
      }

      core_plugins.notify(me, 'afterDatasetsDraw', [easingValue]);
    },

    /**
     * Draws dataset at index unless a plugin returns `false` to the `beforeDatasetDraw`
     * hook, in which case, plugins will not be called on `afterDatasetDraw`.
     * @private
     */
    drawDataset: function (meta, easingValue) {
      var me = this;
      var args = {
        meta: meta,
        index: meta.index,
        easingValue: easingValue
      };

      if (core_plugins.notify(me, 'beforeDatasetDraw', [args]) === false) {
        return;
      }

      meta.controller.draw(easingValue);
      core_plugins.notify(me, 'afterDatasetDraw', [args]);
    },

    /**
     * Draws tooltip unless a plugin returns `false` to the `beforeTooltipDraw`
     * hook, in which case, plugins will not be called on `afterTooltipDraw`.
     * @private
     */
    _drawTooltip: function (easingValue) {
      var me = this;
      var tooltip = me.tooltip;
      var args = {
        tooltip: tooltip,
        easingValue: easingValue
      };

      if (core_plugins.notify(me, 'beforeTooltipDraw', [args]) === false) {
        return;
      }

      tooltip.draw();
      core_plugins.notify(me, 'afterTooltipDraw', [args]);
    },

    /**
     * Get the single element that was clicked on
     * @return An object containing the dataset index and element index of the matching element. Also contains the rectangle that was draw
     */
    getElementAtEvent: function (e) {
      return core_interaction.modes.single(this, e);
    },
    getElementsAtEvent: function (e) {
      return core_interaction.modes.label(this, e, {
        intersect: true
      });
    },
    getElementsAtXAxis: function (e) {
      return core_interaction.modes['x-axis'](this, e, {
        intersect: true
      });
    },
    getElementsAtEventForMode: function (e, mode, options) {
      var method = core_interaction.modes[mode];

      if (typeof method === 'function') {
        return method(this, e, options);
      }

      return [];
    },
    getDatasetAtEvent: function (e) {
      return core_interaction.modes.dataset(this, e, {
        intersect: true
      });
    },
    getDatasetMeta: function (datasetIndex) {
      var me = this;
      var dataset = me.data.datasets[datasetIndex];

      if (!dataset._meta) {
        dataset._meta = {};
      }

      var meta = dataset._meta[me.id];

      if (!meta) {
        meta = dataset._meta[me.id] = {
          type: null,
          data: [],
          dataset: null,
          controller: null,
          hidden: null,
          // See isDatasetVisible() comment
          xAxisID: null,
          yAxisID: null,
          order: dataset.order || 0,
          index: datasetIndex
        };
      }

      return meta;
    },
    getVisibleDatasetCount: function () {
      var count = 0;

      for (var i = 0, ilen = this.data.datasets.length; i < ilen; ++i) {
        if (this.isDatasetVisible(i)) {
          count++;
        }
      }

      return count;
    },
    isDatasetVisible: function (datasetIndex) {
      var meta = this.getDatasetMeta(datasetIndex); // meta.hidden is a per chart dataset hidden flag override with 3 states: if true or false,
      // the dataset.hidden value is ignored, else if null, the dataset hidden state is returned.

      return typeof meta.hidden === 'boolean' ? !meta.hidden : !this.data.datasets[datasetIndex].hidden;
    },
    generateLegend: function () {
      return this.options.legendCallback(this);
    },

    /**
     * @private
     */
    destroyDatasetMeta: function (datasetIndex) {
      var id = this.id;
      var dataset = this.data.datasets[datasetIndex];
      var meta = dataset._meta && dataset._meta[id];

      if (meta) {
        meta.controller.destroy();
        delete dataset._meta[id];
      }
    },
    destroy: function () {
      var me = this;
      var canvas = me.canvas;
      var i, ilen;
      me.stop(); // dataset controllers need to cleanup associated data

      for (i = 0, ilen = me.data.datasets.length; i < ilen; ++i) {
        me.destroyDatasetMeta(i);
      }

      if (canvas) {
        me.unbindEvents();
        helpers$1.canvas.clear(me);
        platform.releaseContext(me.ctx);
        me.canvas = null;
        me.ctx = null;
      }

      core_plugins.notify(me, 'destroy');
      delete Chart.instances[me.id];
    },
    toBase64Image: function () {
      return this.canvas.toDataURL.apply(this.canvas, arguments);
    },
    initToolTip: function () {
      var me = this;
      me.tooltip = new core_tooltip({
        _chart: me,
        _chartInstance: me,
        // deprecated, backward compatibility
        _data: me.data,
        _options: me.options.tooltips
      }, me);
    },

    /**
     * @private
     */
    bindEvents: function () {
      var me = this;
      var listeners = me._listeners = {};

      var listener = function () {
        me.eventHandler.apply(me, arguments);
      };

      helpers$1.each(me.options.events, function (type) {
        platform.addEventListener(me, type, listener);
        listeners[type] = listener;
      }); // Elements used to detect size change should not be injected for non responsive charts.
      // See https://github.com/chartjs/Chart.js/issues/2210

      if (me.options.responsive) {
        listener = function () {
          me.resize();
        };

        platform.addEventListener(me, 'resize', listener);
        listeners.resize = listener;
      }
    },

    /**
     * @private
     */
    unbindEvents: function () {
      var me = this;
      var listeners = me._listeners;

      if (!listeners) {
        return;
      }

      delete me._listeners;
      helpers$1.each(listeners, function (listener, type) {
        platform.removeEventListener(me, type, listener);
      });
    },
    updateHoverStyle: function (elements, mode, enabled) {
      var prefix = enabled ? 'set' : 'remove';
      var element, i, ilen;

      for (i = 0, ilen = elements.length; i < ilen; ++i) {
        element = elements[i];

        if (element) {
          this.getDatasetMeta(element._datasetIndex).controller[prefix + 'HoverStyle'](element);
        }
      }

      if (mode === 'dataset') {
        this.getDatasetMeta(elements[0]._datasetIndex).controller['_' + prefix + 'DatasetHoverStyle']();
      }
    },

    /**
     * @private
     */
    eventHandler: function (e) {
      var me = this;
      var tooltip = me.tooltip;

      if (core_plugins.notify(me, 'beforeEvent', [e]) === false) {
        return;
      } // Buffer any update calls so that renders do not occur


      me._bufferedRender = true;
      me._bufferedRequest = null;
      var changed = me.handleEvent(e); // for smooth tooltip animations issue #4989
      // the tooltip should be the source of change
      // Animation check workaround:
      // tooltip._start will be null when tooltip isn't animating

      if (tooltip) {
        changed = tooltip._start ? tooltip.handleEvent(e) : changed | tooltip.handleEvent(e);
      }

      core_plugins.notify(me, 'afterEvent', [e]);
      var bufferedRequest = me._bufferedRequest;

      if (bufferedRequest) {
        // If we have an update that was triggered, we need to do a normal render
        me.render(bufferedRequest);
      } else if (changed && !me.animating) {
        // If entering, leaving, or changing elements, animate the change via pivot
        me.stop(); // We only need to render at this point. Updating will cause scales to be
        // recomputed generating flicker & using more memory than necessary.

        me.render({
          duration: me.options.hover.animationDuration,
          lazy: true
        });
      }

      me._bufferedRender = false;
      me._bufferedRequest = null;
      return me;
    },

    /**
     * Handle an event
     * @private
     * @param {IEvent} event the event to handle
     * @return {boolean} true if the chart needs to re-render
     */
    handleEvent: function (e) {
      var me = this;
      var options = me.options || {};
      var hoverOptions = options.hover;
      var changed = false;
      me.lastActive = me.lastActive || []; // Find Active Elements for hover and tooltips

      if (e.type === 'mouseout') {
        me.active = [];
      } else {
        me.active = me.getElementsAtEventForMode(e, hoverOptions.mode, hoverOptions);
      } // Invoke onHover hook
      // Need to call with native event here to not break backwards compatibility


      helpers$1.callback(options.onHover || options.hover.onHover, [e.native, me.active], me);

      if (e.type === 'mouseup' || e.type === 'click') {
        if (options.onClick) {
          // Use e.native here for backwards compatibility
          options.onClick.call(me, e.native, me.active);
        }
      } // Remove styling for last active (even if it may still be active)


      if (me.lastActive.length) {
        me.updateHoverStyle(me.lastActive, hoverOptions.mode, false);
      } // Built in hover styling


      if (me.active.length && hoverOptions.mode) {
        me.updateHoverStyle(me.active, hoverOptions.mode, true);
      }

      changed = !helpers$1.arrayEquals(me.active, me.lastActive); // Remember Last Actives

      me.lastActive = me.active;
      return changed;
    }
  });
  /**
   * NOTE(SB) We actually don't use this container anymore but we need to keep it
   * for backward compatibility. Though, it can still be useful for plugins that
   * would need to work on multiple charts?!
   */

  Chart.instances = {};
  var core_controller = Chart; // DEPRECATIONS

  /**
   * Provided for backward compatibility, use Chart instead.
   * @class Chart.Controller
   * @deprecated since version 2.6
   * @todo remove at version 3
   * @private
   */

  Chart.Controller = Chart;
  /**
   * Provided for backward compatibility, not available anymore.
   * @namespace Chart
   * @deprecated since version 2.8
   * @todo remove at version 3
   * @private
   */

  Chart.types = {};
  /**
   * Provided for backward compatibility, not available anymore.
   * @namespace Chart.helpers.configMerge
   * @deprecated since version 2.8.0
   * @todo remove at version 3
   * @private
   */

  helpers$1.configMerge = mergeConfig;
  /**
   * Provided for backward compatibility, not available anymore.
   * @namespace Chart.helpers.scaleMerge
   * @deprecated since version 2.8.0
   * @todo remove at version 3
   * @private
   */

  helpers$1.scaleMerge = mergeScaleConfig;

  var core_helpers = function () {
    // -- Basic js utility methods
    helpers$1.where = function (collection, filterCallback) {
      if (helpers$1.isArray(collection) && Array.prototype.filter) {
        return collection.filter(filterCallback);
      }

      var filtered = [];
      helpers$1.each(collection, function (item) {
        if (filterCallback(item)) {
          filtered.push(item);
        }
      });
      return filtered;
    };

    helpers$1.findIndex = Array.prototype.findIndex ? function (array, callback, scope) {
      return array.findIndex(callback, scope);
    } : function (array, callback, scope) {
      scope = scope === undefined ? array : scope;

      for (var i = 0, ilen = array.length; i < ilen; ++i) {
        if (callback.call(scope, array[i], i, array)) {
          return i;
        }
      }

      return -1;
    };

    helpers$1.findNextWhere = function (arrayToSearch, filterCallback, startIndex) {
      // Default to start of the array
      if (helpers$1.isNullOrUndef(startIndex)) {
        startIndex = -1;
      }

      for (var i = startIndex + 1; i < arrayToSearch.length; i++) {
        var currentItem = arrayToSearch[i];

        if (filterCallback(currentItem)) {
          return currentItem;
        }
      }
    };

    helpers$1.findPreviousWhere = function (arrayToSearch, filterCallback, startIndex) {
      // Default to end of the array
      if (helpers$1.isNullOrUndef(startIndex)) {
        startIndex = arrayToSearch.length;
      }

      for (var i = startIndex - 1; i >= 0; i--) {
        var currentItem = arrayToSearch[i];

        if (filterCallback(currentItem)) {
          return currentItem;
        }
      }
    }; // -- Math methods


    helpers$1.isNumber = function (n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    };

    helpers$1.almostEquals = function (x, y, epsilon) {
      return Math.abs(x - y) < epsilon;
    };

    helpers$1.almostWhole = function (x, epsilon) {
      var rounded = Math.round(x);
      return rounded - epsilon <= x && rounded + epsilon >= x;
    };

    helpers$1.max = function (array) {
      return array.reduce(function (max, value) {
        if (!isNaN(value)) {
          return Math.max(max, value);
        }

        return max;
      }, Number.NEGATIVE_INFINITY);
    };

    helpers$1.min = function (array) {
      return array.reduce(function (min, value) {
        if (!isNaN(value)) {
          return Math.min(min, value);
        }

        return min;
      }, Number.POSITIVE_INFINITY);
    };

    helpers$1.sign = Math.sign ? function (x) {
      return Math.sign(x);
    } : function (x) {
      x = +x; // convert to a number

      if (x === 0 || isNaN(x)) {
        return x;
      }

      return x > 0 ? 1 : -1;
    };

    helpers$1.toRadians = function (degrees) {
      return degrees * (Math.PI / 180);
    };

    helpers$1.toDegrees = function (radians) {
      return radians * (180 / Math.PI);
    };
    /**
     * Returns the number of decimal places
     * i.e. the number of digits after the decimal point, of the value of this Number.
     * @param {number} x - A number.
     * @returns {number} The number of decimal places.
     * @private
     */


    helpers$1._decimalPlaces = function (x) {
      if (!helpers$1.isFinite(x)) {
        return;
      }

      var e = 1;
      var p = 0;

      while (Math.round(x * e) / e !== x) {
        e *= 10;
        p++;
      }

      return p;
    }; // Gets the angle from vertical upright to the point about a centre.


    helpers$1.getAngleFromPoint = function (centrePoint, anglePoint) {
      var distanceFromXCenter = anglePoint.x - centrePoint.x;
      var distanceFromYCenter = anglePoint.y - centrePoint.y;
      var radialDistanceFromCenter = Math.sqrt(distanceFromXCenter * distanceFromXCenter + distanceFromYCenter * distanceFromYCenter);
      var angle = Math.atan2(distanceFromYCenter, distanceFromXCenter);

      if (angle < -0.5 * Math.PI) {
        angle += 2.0 * Math.PI; // make sure the returned angle is in the range of (-PI/2, 3PI/2]
      }

      return {
        angle: angle,
        distance: radialDistanceFromCenter
      };
    };

    helpers$1.distanceBetweenPoints = function (pt1, pt2) {
      return Math.sqrt(Math.pow(pt2.x - pt1.x, 2) + Math.pow(pt2.y - pt1.y, 2));
    };
    /**
     * Provided for backward compatibility, not available anymore
     * @function Chart.helpers.aliasPixel
     * @deprecated since version 2.8.0
     * @todo remove at version 3
     */


    helpers$1.aliasPixel = function (pixelWidth) {
      return pixelWidth % 2 === 0 ? 0 : 0.5;
    };
    /**
     * Returns the aligned pixel value to avoid anti-aliasing blur
     * @param {Chart} chart - The chart instance.
     * @param {number} pixel - A pixel value.
     * @param {number} width - The width of the element.
     * @returns {number} The aligned pixel value.
     * @private
     */


    helpers$1._alignPixel = function (chart, pixel, width) {
      var devicePixelRatio = chart.currentDevicePixelRatio;
      var halfWidth = width / 2;
      return Math.round((pixel - halfWidth) * devicePixelRatio) / devicePixelRatio + halfWidth;
    };

    helpers$1.splineCurve = function (firstPoint, middlePoint, afterPoint, t) {
      // Props to Rob Spencer at scaled innovation for his post on splining between points
      // http://scaledinnovation.com/analytics/splines/aboutSplines.html
      // This function must also respect "skipped" points
      var previous = firstPoint.skip ? middlePoint : firstPoint;
      var current = middlePoint;
      var next = afterPoint.skip ? middlePoint : afterPoint;
      var d01 = Math.sqrt(Math.pow(current.x - previous.x, 2) + Math.pow(current.y - previous.y, 2));
      var d12 = Math.sqrt(Math.pow(next.x - current.x, 2) + Math.pow(next.y - current.y, 2));
      var s01 = d01 / (d01 + d12);
      var s12 = d12 / (d01 + d12); // If all points are the same, s01 & s02 will be inf

      s01 = isNaN(s01) ? 0 : s01;
      s12 = isNaN(s12) ? 0 : s12;
      var fa = t * s01; // scaling factor for triangle Ta

      var fb = t * s12;
      return {
        previous: {
          x: current.x - fa * (next.x - previous.x),
          y: current.y - fa * (next.y - previous.y)
        },
        next: {
          x: current.x + fb * (next.x - previous.x),
          y: current.y + fb * (next.y - previous.y)
        }
      };
    };

    helpers$1.EPSILON = Number.EPSILON || 1e-14;

    helpers$1.splineCurveMonotone = function (points) {
      // This function calculates Bézier control points in a similar way than |splineCurve|,
      // but preserves monotonicity of the provided data and ensures no local extremums are added
      // between the dataset discrete points due to the interpolation.
      // See : https://en.wikipedia.org/wiki/Monotone_cubic_interpolation
      var pointsWithTangents = (points || []).map(function (point) {
        return {
          model: point._model,
          deltaK: 0,
          mK: 0
        };
      }); // Calculate slopes (deltaK) and initialize tangents (mK)

      var pointsLen = pointsWithTangents.length;
      var i, pointBefore, pointCurrent, pointAfter;

      for (i = 0; i < pointsLen; ++i) {
        pointCurrent = pointsWithTangents[i];

        if (pointCurrent.model.skip) {
          continue;
        }

        pointBefore = i > 0 ? pointsWithTangents[i - 1] : null;
        pointAfter = i < pointsLen - 1 ? pointsWithTangents[i + 1] : null;

        if (pointAfter && !pointAfter.model.skip) {
          var slopeDeltaX = pointAfter.model.x - pointCurrent.model.x; // In the case of two points that appear at the same x pixel, slopeDeltaX is 0

          pointCurrent.deltaK = slopeDeltaX !== 0 ? (pointAfter.model.y - pointCurrent.model.y) / slopeDeltaX : 0;
        }

        if (!pointBefore || pointBefore.model.skip) {
          pointCurrent.mK = pointCurrent.deltaK;
        } else if (!pointAfter || pointAfter.model.skip) {
          pointCurrent.mK = pointBefore.deltaK;
        } else if (this.sign(pointBefore.deltaK) !== this.sign(pointCurrent.deltaK)) {
          pointCurrent.mK = 0;
        } else {
          pointCurrent.mK = (pointBefore.deltaK + pointCurrent.deltaK) / 2;
        }
      } // Adjust tangents to ensure monotonic properties


      var alphaK, betaK, tauK, squaredMagnitude;

      for (i = 0; i < pointsLen - 1; ++i) {
        pointCurrent = pointsWithTangents[i];
        pointAfter = pointsWithTangents[i + 1];

        if (pointCurrent.model.skip || pointAfter.model.skip) {
          continue;
        }

        if (helpers$1.almostEquals(pointCurrent.deltaK, 0, this.EPSILON)) {
          pointCurrent.mK = pointAfter.mK = 0;
          continue;
        }

        alphaK = pointCurrent.mK / pointCurrent.deltaK;
        betaK = pointAfter.mK / pointCurrent.deltaK;
        squaredMagnitude = Math.pow(alphaK, 2) + Math.pow(betaK, 2);

        if (squaredMagnitude <= 9) {
          continue;
        }

        tauK = 3 / Math.sqrt(squaredMagnitude);
        pointCurrent.mK = alphaK * tauK * pointCurrent.deltaK;
        pointAfter.mK = betaK * tauK * pointCurrent.deltaK;
      } // Compute control points


      var deltaX;

      for (i = 0; i < pointsLen; ++i) {
        pointCurrent = pointsWithTangents[i];

        if (pointCurrent.model.skip) {
          continue;
        }

        pointBefore = i > 0 ? pointsWithTangents[i - 1] : null;
        pointAfter = i < pointsLen - 1 ? pointsWithTangents[i + 1] : null;

        if (pointBefore && !pointBefore.model.skip) {
          deltaX = (pointCurrent.model.x - pointBefore.model.x) / 3;
          pointCurrent.model.controlPointPreviousX = pointCurrent.model.x - deltaX;
          pointCurrent.model.controlPointPreviousY = pointCurrent.model.y - deltaX * pointCurrent.mK;
        }

        if (pointAfter && !pointAfter.model.skip) {
          deltaX = (pointAfter.model.x - pointCurrent.model.x) / 3;
          pointCurrent.model.controlPointNextX = pointCurrent.model.x + deltaX;
          pointCurrent.model.controlPointNextY = pointCurrent.model.y + deltaX * pointCurrent.mK;
        }
      }
    };

    helpers$1.nextItem = function (collection, index, loop) {
      if (loop) {
        return index >= collection.length - 1 ? collection[0] : collection[index + 1];
      }

      return index >= collection.length - 1 ? collection[collection.length - 1] : collection[index + 1];
    };

    helpers$1.previousItem = function (collection, index, loop) {
      if (loop) {
        return index <= 0 ? collection[collection.length - 1] : collection[index - 1];
      }

      return index <= 0 ? collection[0] : collection[index - 1];
    }; // Implementation of the nice number algorithm used in determining where axis labels will go


    helpers$1.niceNum = function (range, round) {
      var exponent = Math.floor(helpers$1.log10(range));
      var fraction = range / Math.pow(10, exponent);
      var niceFraction;

      if (round) {
        if (fraction < 1.5) {
          niceFraction = 1;
        } else if (fraction < 3) {
          niceFraction = 2;
        } else if (fraction < 7) {
          niceFraction = 5;
        } else {
          niceFraction = 10;
        }
      } else if (fraction <= 1.0) {
        niceFraction = 1;
      } else if (fraction <= 2) {
        niceFraction = 2;
      } else if (fraction <= 5) {
        niceFraction = 5;
      } else {
        niceFraction = 10;
      }

      return niceFraction * Math.pow(10, exponent);
    }; // Request animation polyfill - https://www.paulirish.com/2011/requestanimationframe-for-smart-animating/


    helpers$1.requestAnimFrame = function () {
      if (typeof window === 'undefined') {
        return function (callback) {
          callback();
        };
      }

      return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
        return window.setTimeout(callback, 1000 / 60);
      };
    }(); // -- DOM methods


    helpers$1.getRelativePosition = function (evt, chart) {
      var mouseX, mouseY;
      var e = evt.originalEvent || evt;
      var canvas = evt.target || evt.srcElement;
      var boundingRect = canvas.getBoundingClientRect();
      var touches = e.touches;

      if (touches && touches.length > 0) {
        mouseX = touches[0].clientX;
        mouseY = touches[0].clientY;
      } else {
        mouseX = e.clientX;
        mouseY = e.clientY;
      } // Scale mouse coordinates into canvas coordinates
      // by following the pattern laid out by 'jerryj' in the comments of
      // https://www.html5canvastutorials.com/advanced/html5-canvas-mouse-coordinates/


      var paddingLeft = parseFloat(helpers$1.getStyle(canvas, 'padding-left'));
      var paddingTop = parseFloat(helpers$1.getStyle(canvas, 'padding-top'));
      var paddingRight = parseFloat(helpers$1.getStyle(canvas, 'padding-right'));
      var paddingBottom = parseFloat(helpers$1.getStyle(canvas, 'padding-bottom'));
      var width = boundingRect.right - boundingRect.left - paddingLeft - paddingRight;
      var height = boundingRect.bottom - boundingRect.top - paddingTop - paddingBottom; // We divide by the current device pixel ratio, because the canvas is scaled up by that amount in each direction. However
      // the backend model is in unscaled coordinates. Since we are going to deal with our model coordinates, we go back here

      mouseX = Math.round((mouseX - boundingRect.left - paddingLeft) / width * canvas.width / chart.currentDevicePixelRatio);
      mouseY = Math.round((mouseY - boundingRect.top - paddingTop) / height * canvas.height / chart.currentDevicePixelRatio);
      return {
        x: mouseX,
        y: mouseY
      };
    }; // Private helper function to convert max-width/max-height values that may be percentages into a number


    function parseMaxStyle(styleValue, node, parentProperty) {
      var valueInPixels;

      if (typeof styleValue === 'string') {
        valueInPixels = parseInt(styleValue, 10);

        if (styleValue.indexOf('%') !== -1) {
          // percentage * size in dimension
          valueInPixels = valueInPixels / 100 * node.parentNode[parentProperty];
        }
      } else {
        valueInPixels = styleValue;
      }

      return valueInPixels;
    }
    /**
     * Returns if the given value contains an effective constraint.
     * @private
     */


    function isConstrainedValue(value) {
      return value !== undefined && value !== null && value !== 'none';
    }
    /**
     * Returns the max width or height of the given DOM node in a cross-browser compatible fashion
     * @param {HTMLElement} domNode - the node to check the constraint on
     * @param {string} maxStyle - the style that defines the maximum for the direction we are using ('max-width' / 'max-height')
     * @param {string} percentageProperty - property of parent to use when calculating width as a percentage
     * @see {@link https://www.nathanaeljones.com/blog/2013/reading-max-width-cross-browser}
     */


    function getConstraintDimension(domNode, maxStyle, percentageProperty) {
      var view = document.defaultView;

      var parentNode = helpers$1._getParentNode(domNode);

      var constrainedNode = view.getComputedStyle(domNode)[maxStyle];
      var constrainedContainer = view.getComputedStyle(parentNode)[maxStyle];
      var hasCNode = isConstrainedValue(constrainedNode);
      var hasCContainer = isConstrainedValue(constrainedContainer);
      var infinity = Number.POSITIVE_INFINITY;

      if (hasCNode || hasCContainer) {
        return Math.min(hasCNode ? parseMaxStyle(constrainedNode, domNode, percentageProperty) : infinity, hasCContainer ? parseMaxStyle(constrainedContainer, parentNode, percentageProperty) : infinity);
      }

      return 'none';
    } // returns Number or undefined if no constraint


    helpers$1.getConstraintWidth = function (domNode) {
      return getConstraintDimension(domNode, 'max-width', 'clientWidth');
    }; // returns Number or undefined if no constraint


    helpers$1.getConstraintHeight = function (domNode) {
      return getConstraintDimension(domNode, 'max-height', 'clientHeight');
    };
    /**
     * @private
    	 */


    helpers$1._calculatePadding = function (container, padding, parentDimension) {
      padding = helpers$1.getStyle(container, padding);
      return padding.indexOf('%') > -1 ? parentDimension * parseInt(padding, 10) / 100 : parseInt(padding, 10);
    };
    /**
     * @private
     */


    helpers$1._getParentNode = function (domNode) {
      var parent = domNode.parentNode;

      if (parent && parent.toString() === '[object ShadowRoot]') {
        parent = parent.host;
      }

      return parent;
    };

    helpers$1.getMaximumWidth = function (domNode) {
      var container = helpers$1._getParentNode(domNode);

      if (!container) {
        return domNode.clientWidth;
      }

      var clientWidth = container.clientWidth;

      var paddingLeft = helpers$1._calculatePadding(container, 'padding-left', clientWidth);

      var paddingRight = helpers$1._calculatePadding(container, 'padding-right', clientWidth);

      var w = clientWidth - paddingLeft - paddingRight;
      var cw = helpers$1.getConstraintWidth(domNode);
      return isNaN(cw) ? w : Math.min(w, cw);
    };

    helpers$1.getMaximumHeight = function (domNode) {
      var container = helpers$1._getParentNode(domNode);

      if (!container) {
        return domNode.clientHeight;
      }

      var clientHeight = container.clientHeight;

      var paddingTop = helpers$1._calculatePadding(container, 'padding-top', clientHeight);

      var paddingBottom = helpers$1._calculatePadding(container, 'padding-bottom', clientHeight);

      var h = clientHeight - paddingTop - paddingBottom;
      var ch = helpers$1.getConstraintHeight(domNode);
      return isNaN(ch) ? h : Math.min(h, ch);
    };

    helpers$1.getStyle = function (el, property) {
      return el.currentStyle ? el.currentStyle[property] : document.defaultView.getComputedStyle(el, null).getPropertyValue(property);
    };

    helpers$1.retinaScale = function (chart, forceRatio) {
      var pixelRatio = chart.currentDevicePixelRatio = forceRatio || typeof window !== 'undefined' && window.devicePixelRatio || 1;

      if (pixelRatio === 1) {
        return;
      }

      var canvas = chart.canvas;
      var height = chart.height;
      var width = chart.width;
      canvas.height = height * pixelRatio;
      canvas.width = width * pixelRatio;
      chart.ctx.scale(pixelRatio, pixelRatio); // If no style has been set on the canvas, the render size is used as display size,
      // making the chart visually bigger, so let's enforce it to the "correct" values.
      // See https://github.com/chartjs/Chart.js/issues/3575

      if (!canvas.style.height && !canvas.style.width) {
        canvas.style.height = height + 'px';
        canvas.style.width = width + 'px';
      }
    }; // -- Canvas methods


    helpers$1.fontString = function (pixelSize, fontStyle, fontFamily) {
      return fontStyle + ' ' + pixelSize + 'px ' + fontFamily;
    };

    helpers$1.longestText = function (ctx, font, arrayOfThings, cache) {
      cache = cache || {};
      var data = cache.data = cache.data || {};
      var gc = cache.garbageCollect = cache.garbageCollect || [];

      if (cache.font !== font) {
        data = cache.data = {};
        gc = cache.garbageCollect = [];
        cache.font = font;
      }

      ctx.font = font;
      var longest = 0;
      var ilen = arrayOfThings.length;
      var i, j, jlen, thing, nestedThing;

      for (i = 0; i < ilen; i++) {
        thing = arrayOfThings[i]; // Undefined strings and arrays should not be measured

        if (thing !== undefined && thing !== null && helpers$1.isArray(thing) !== true) {
          longest = helpers$1.measureText(ctx, data, gc, longest, thing);
        } else if (helpers$1.isArray(thing)) {
          // if it is an array lets measure each element
          // to do maybe simplify this function a bit so we can do this more recursively?
          for (j = 0, jlen = thing.length; j < jlen; j++) {
            nestedThing = thing[j]; // Undefined strings and arrays should not be measured

            if (nestedThing !== undefined && nestedThing !== null && !helpers$1.isArray(nestedThing)) {
              longest = helpers$1.measureText(ctx, data, gc, longest, nestedThing);
            }
          }
        }
      }

      var gcLen = gc.length / 2;

      if (gcLen > arrayOfThings.length) {
        for (i = 0; i < gcLen; i++) {
          delete data[gc[i]];
        }

        gc.splice(0, gcLen);
      }

      return longest;
    };

    helpers$1.measureText = function (ctx, data, gc, longest, string) {
      var textWidth = data[string];

      if (!textWidth) {
        textWidth = data[string] = ctx.measureText(string).width;
        gc.push(string);
      }

      if (textWidth > longest) {
        longest = textWidth;
      }

      return longest;
    };
    /**
     * @deprecated
     */


    helpers$1.numberOfLabelLines = function (arrayOfThings) {
      var numberOfLines = 1;
      helpers$1.each(arrayOfThings, function (thing) {
        if (helpers$1.isArray(thing)) {
          if (thing.length > numberOfLines) {
            numberOfLines = thing.length;
          }
        }
      });
      return numberOfLines;
    };

    helpers$1.color = !chartjsColor ? function (value) {
      console.error('Color.js not found!');
      return value;
    } : function (value) {
      /* global CanvasGradient */
      if (value instanceof CanvasGradient) {
        value = core_defaults.global.defaultColor;
      }

      return chartjsColor(value);
    };

    helpers$1.getHoverColor = function (colorValue) {
      /* global CanvasPattern */
      return colorValue instanceof CanvasPattern || colorValue instanceof CanvasGradient ? colorValue : helpers$1.color(colorValue).saturate(0.5).darken(0.1).rgbString();
    };
  };

  function abstract() {
    throw new Error('This method is not implemented: either no adapter can ' + 'be found or an incomplete integration was provided.');
  }
  /**
   * Date adapter (current used by the time scale)
   * @namespace Chart._adapters._date
   * @memberof Chart._adapters
   * @private
   */

  /**
   * Currently supported unit string values.
   * @typedef {('millisecond'|'second'|'minute'|'hour'|'day'|'week'|'month'|'quarter'|'year')}
   * @memberof Chart._adapters._date
   * @name Unit
   */

  /**
   * @class
   */


  function DateAdapter(options) {
    this.options = options || {};
  }

  helpers$1.extend(DateAdapter.prototype,
  /** @lends DateAdapter */
  {
    /**
     * Returns a map of time formats for the supported formatting units defined
     * in Unit as well as 'datetime' representing a detailed date/time string.
     * @returns {{string: string}}
     */
    formats: abstract,

    /**
     * Parses the given `value` and return the associated timestamp.
     * @param {any} value - the value to parse (usually comes from the data)
     * @param {string} [format] - the expected data format
     * @returns {(number|null)}
     * @function
     */
    parse: abstract,

    /**
     * Returns the formatted date in the specified `format` for a given `timestamp`.
     * @param {number} timestamp - the timestamp to format
     * @param {string} format - the date/time token
     * @return {string}
     * @function
     */
    format: abstract,

    /**
     * Adds the specified `amount` of `unit` to the given `timestamp`.
     * @param {number} timestamp - the input timestamp
     * @param {number} amount - the amount to add
     * @param {Unit} unit - the unit as string
     * @return {number}
     * @function
     */
    add: abstract,

    /**
     * Returns the number of `unit` between the given timestamps.
     * @param {number} max - the input timestamp (reference)
     * @param {number} min - the timestamp to substract
     * @param {Unit} unit - the unit as string
     * @return {number}
     * @function
     */
    diff: abstract,

    /**
     * Returns start of `unit` for the given `timestamp`.
     * @param {number} timestamp - the input timestamp
     * @param {Unit} unit - the unit as string
     * @param {number} [weekday] - the ISO day of the week with 1 being Monday
     * and 7 being Sunday (only needed if param *unit* is `isoWeek`).
     * @function
     */
    startOf: abstract,

    /**
     * Returns end of `unit` for the given `timestamp`.
     * @param {number} timestamp - the input timestamp
     * @param {Unit} unit - the unit as string
     * @function
     */
    endOf: abstract,
    // DEPRECATIONS

    /**
     * Provided for backward compatibility for scale.getValueForPixel(),
     * this method should be overridden only by the moment adapter.
     * @deprecated since version 2.8.0
     * @todo remove at version 3
     * @private
     */
    _create: function (value) {
      return value;
    }
  });

  DateAdapter.override = function (members) {
    helpers$1.extend(DateAdapter.prototype, members);
  };

  var _date = DateAdapter;
  var core_adapters = {
    _date: _date
  };
  /**
   * Namespace to hold static tick generation functions
   * @namespace Chart.Ticks
   */

  var core_ticks = {
    /**
     * Namespace to hold formatters for different types of ticks
     * @namespace Chart.Ticks.formatters
     */
    formatters: {
      /**
       * Formatter for value labels
       * @method Chart.Ticks.formatters.values
       * @param value the value to display
       * @return {string|string[]} the label to display
       */
      values: function (value) {
        return helpers$1.isArray(value) ? value : '' + value;
      },

      /**
       * Formatter for linear numeric ticks
       * @method Chart.Ticks.formatters.linear
       * @param tickValue {number} the value to be formatted
       * @param index {number} the position of the tickValue parameter in the ticks array
       * @param ticks {number[]} the list of ticks being converted
       * @return {string} string representation of the tickValue parameter
       */
      linear: function (tickValue, index, ticks) {
        // If we have lots of ticks, don't use the ones
        var delta = ticks.length > 3 ? ticks[2] - ticks[1] : ticks[1] - ticks[0]; // If we have a number like 2.5 as the delta, figure out how many decimal places we need

        if (Math.abs(delta) > 1) {
          if (tickValue !== Math.floor(tickValue)) {
            // not an integer
            delta = tickValue - Math.floor(tickValue);
          }
        }

        var logDelta = helpers$1.log10(Math.abs(delta));
        var tickString = '';

        if (tickValue !== 0) {
          var maxTick = Math.max(Math.abs(ticks[0]), Math.abs(ticks[ticks.length - 1]));

          if (maxTick < 1e-4) {
            // all ticks are small numbers; use scientific notation
            var logTick = helpers$1.log10(Math.abs(tickValue));
            var numExponential = Math.floor(logTick) - Math.floor(logDelta);
            numExponential = Math.max(Math.min(numExponential, 20), 0);
            tickString = tickValue.toExponential(numExponential);
          } else {
            var numDecimal = -1 * Math.floor(logDelta);
            numDecimal = Math.max(Math.min(numDecimal, 20), 0); // toFixed has a max of 20 decimal places

            tickString = tickValue.toFixed(numDecimal);
          }
        } else {
          tickString = '0'; // never show decimal places for 0
        }

        return tickString;
      },
      logarithmic: function (tickValue, index, ticks) {
        var remain = tickValue / Math.pow(10, Math.floor(helpers$1.log10(tickValue)));

        if (tickValue === 0) {
          return '0';
        } else if (remain === 1 || remain === 2 || remain === 5 || index === 0 || index === ticks.length - 1) {
          return tickValue.toExponential();
        }

        return '';
      }
    }
  };
  var isArray = helpers$1.isArray;
  var isNullOrUndef = helpers$1.isNullOrUndef;
  var valueOrDefault$a = helpers$1.valueOrDefault;
  var valueAtIndexOrDefault = helpers$1.valueAtIndexOrDefault;

  core_defaults._set('scale', {
    display: true,
    position: 'left',
    offset: false,
    // grid line settings
    gridLines: {
      display: true,
      color: 'rgba(0,0,0,0.1)',
      lineWidth: 1,
      drawBorder: true,
      drawOnChartArea: true,
      drawTicks: true,
      tickMarkLength: 10,
      zeroLineWidth: 1,
      zeroLineColor: 'rgba(0,0,0,0.25)',
      zeroLineBorderDash: [],
      zeroLineBorderDashOffset: 0.0,
      offsetGridLines: false,
      borderDash: [],
      borderDashOffset: 0.0
    },
    // scale label
    scaleLabel: {
      // display property
      display: false,
      // actual label
      labelString: '',
      // top/bottom padding
      padding: {
        top: 4,
        bottom: 4
      }
    },
    // label settings
    ticks: {
      beginAtZero: false,
      minRotation: 0,
      maxRotation: 50,
      mirror: false,
      padding: 0,
      reverse: false,
      display: true,
      autoSkip: true,
      autoSkipPadding: 0,
      labelOffset: 0,
      // We pass through arrays to be rendered as multiline labels, we convert Others to strings here.
      callback: core_ticks.formatters.values,
      minor: {},
      major: {}
    }
  });
  /** Returns a new array containing numItems from arr */


  function sample(arr, numItems) {
    var result = [];
    var increment = arr.length / numItems;
    var i = 0;
    var len = arr.length;

    for (; i < len; i += increment) {
      result.push(arr[Math.floor(i)]);
    }

    return result;
  }

  function getPixelForGridLine(scale, index, offsetGridLines) {
    var length = scale.getTicks().length;
    var validIndex = Math.min(index, length - 1);
    var lineValue = scale.getPixelForTick(validIndex);
    var start = scale._startPixel;
    var end = scale._endPixel;
    var epsilon = 1e-6; // 1e-6 is margin in pixels for accumulated error.

    var offset;

    if (offsetGridLines) {
      if (length === 1) {
        offset = Math.max(lineValue - start, end - lineValue);
      } else if (index === 0) {
        offset = (scale.getPixelForTick(1) - lineValue) / 2;
      } else {
        offset = (lineValue - scale.getPixelForTick(validIndex - 1)) / 2;
      }

      lineValue += validIndex < index ? offset : -offset; // Return undefined if the pixel is out of the range

      if (lineValue < start - epsilon || lineValue > end + epsilon) {
        return;
      }
    }

    return lineValue;
  }

  function garbageCollect(caches, length) {
    helpers$1.each(caches, function (cache) {
      var gc = cache.gc;
      var gcLen = gc.length / 2;
      var i;

      if (gcLen > length) {
        for (i = 0; i < gcLen; ++i) {
          delete cache.data[gc[i]];
        }

        gc.splice(0, gcLen);
      }
    });
  }
  /**
   * Returns {width, height, offset} objects for the first, last, widest, highest tick
   * labels where offset indicates the anchor point offset from the top in pixels.
   */


  function computeLabelSizes(ctx, tickFonts, ticks, caches) {
    var length = ticks.length;
    var widths = [];
    var heights = [];
    var offsets = [];
    var widestLabelSize = 0;
    var highestLabelSize = 0;
    var i, j, jlen, label, tickFont, fontString, cache, lineHeight, width, height, nestedLabel, widest, highest;

    for (i = 0; i < length; ++i) {
      label = ticks[i].label;
      tickFont = ticks[i].major ? tickFonts.major : tickFonts.minor;
      ctx.font = fontString = tickFont.string;
      cache = caches[fontString] = caches[fontString] || {
        data: {},
        gc: []
      };
      lineHeight = tickFont.lineHeight;
      width = height = 0; // Undefined labels and arrays should not be measured

      if (!isNullOrUndef(label) && !isArray(label)) {
        width = helpers$1.measureText(ctx, cache.data, cache.gc, width, label);
        height = lineHeight;
      } else if (isArray(label)) {
        // if it is an array let's measure each element
        for (j = 0, jlen = label.length; j < jlen; ++j) {
          nestedLabel = label[j]; // Undefined labels and arrays should not be measured

          if (!isNullOrUndef(nestedLabel) && !isArray(nestedLabel)) {
            width = helpers$1.measureText(ctx, cache.data, cache.gc, width, nestedLabel);
            height += lineHeight;
          }
        }
      }

      widths.push(width);
      heights.push(height);
      offsets.push(lineHeight / 2);
      widestLabelSize = Math.max(width, widestLabelSize);
      highestLabelSize = Math.max(height, highestLabelSize);
    }

    garbageCollect(caches, length);
    widest = widths.indexOf(widestLabelSize);
    highest = heights.indexOf(highestLabelSize);

    function valueAt(idx) {
      return {
        width: widths[idx] || 0,
        height: heights[idx] || 0,
        offset: offsets[idx] || 0
      };
    }

    return {
      first: valueAt(0),
      last: valueAt(length - 1),
      widest: valueAt(widest),
      highest: valueAt(highest)
    };
  }

  function getTickMarkLength(options) {
    return options.drawTicks ? options.tickMarkLength : 0;
  }

  function getScaleLabelHeight(options) {
    var font, padding;

    if (!options.display) {
      return 0;
    }

    font = helpers$1.options._parseFont(options);
    padding = helpers$1.options.toPadding(options.padding);
    return font.lineHeight + padding.height;
  }

  function parseFontOptions(options, nestedOpts) {
    return helpers$1.extend(helpers$1.options._parseFont({
      fontFamily: valueOrDefault$a(nestedOpts.fontFamily, options.fontFamily),
      fontSize: valueOrDefault$a(nestedOpts.fontSize, options.fontSize),
      fontStyle: valueOrDefault$a(nestedOpts.fontStyle, options.fontStyle),
      lineHeight: valueOrDefault$a(nestedOpts.lineHeight, options.lineHeight)
    }), {
      color: helpers$1.options.resolve([nestedOpts.fontColor, options.fontColor, core_defaults.global.defaultFontColor])
    });
  }

  function parseTickFontOptions(options) {
    var minor = parseFontOptions(options, options.minor);
    var major = options.major.enabled ? parseFontOptions(options, options.major) : minor;
    return {
      minor: minor,
      major: major
    };
  }

  function nonSkipped(ticksToFilter) {
    var filtered = [];
    var item, index, len;

    for (index = 0, len = ticksToFilter.length; index < len; ++index) {
      item = ticksToFilter[index];

      if (typeof item._index !== 'undefined') {
        filtered.push(item);
      }
    }

    return filtered;
  }

  function getEvenSpacing(arr) {
    var len = arr.length;
    var i, diff;

    if (len < 2) {
      return false;
    }

    for (diff = arr[0], i = 1; i < len; ++i) {
      if (arr[i] - arr[i - 1] !== diff) {
        return false;
      }
    }

    return diff;
  }

  function calculateSpacing(majorIndices, ticks, axisLength, ticksLimit) {
    var evenMajorSpacing = getEvenSpacing(majorIndices);
    var spacing = (ticks.length - 1) / ticksLimit;
    var factors, factor, i, ilen; // If the major ticks are evenly spaced apart, place the minor ticks
    // so that they divide the major ticks into even chunks

    if (!evenMajorSpacing) {
      return Math.max(spacing, 1);
    }

    factors = helpers$1.math._factorize(evenMajorSpacing);

    for (i = 0, ilen = factors.length - 1; i < ilen; i++) {
      factor = factors[i];

      if (factor > spacing) {
        return factor;
      }
    }

    return Math.max(spacing, 1);
  }

  function getMajorIndices(ticks) {
    var result = [];
    var i, ilen;

    for (i = 0, ilen = ticks.length; i < ilen; i++) {
      if (ticks[i].major) {
        result.push(i);
      }
    }

    return result;
  }

  function skipMajors(ticks, majorIndices, spacing) {
    var count = 0;
    var next = majorIndices[0];
    var i, tick;
    spacing = Math.ceil(spacing);

    for (i = 0; i < ticks.length; i++) {
      tick = ticks[i];

      if (i === next) {
        tick._index = i;
        count++;
        next = majorIndices[count * spacing];
      } else {
        delete tick.label;
      }
    }
  }

  function skip(ticks, spacing, majorStart, majorEnd) {
    var start = valueOrDefault$a(majorStart, 0);
    var end = Math.min(valueOrDefault$a(majorEnd, ticks.length), ticks.length);
    var count = 0;
    var length, i, tick, next;
    spacing = Math.ceil(spacing);

    if (majorEnd) {
      length = majorEnd - majorStart;
      spacing = length / Math.floor(length / spacing);
    }

    next = start;

    while (next < 0) {
      count++;
      next = Math.round(start + count * spacing);
    }

    for (i = Math.max(start, 0); i < end; i++) {
      tick = ticks[i];

      if (i === next) {
        tick._index = i;
        count++;
        next = Math.round(start + count * spacing);
      } else {
        delete tick.label;
      }
    }
  }

  var Scale = core_element.extend({
    zeroLineIndex: 0,

    /**
     * Get the padding needed for the scale
     * @method getPadding
     * @private
     * @returns {Padding} the necessary padding
     */
    getPadding: function () {
      var me = this;
      return {
        left: me.paddingLeft || 0,
        top: me.paddingTop || 0,
        right: me.paddingRight || 0,
        bottom: me.paddingBottom || 0
      };
    },

    /**
     * Returns the scale tick objects ({label, major})
     * @since 2.7
     */
    getTicks: function () {
      return this._ticks;
    },

    /**
    * @private
    */
    _getLabels: function () {
      var data = this.chart.data;
      return this.options.labels || (this.isHorizontal() ? data.xLabels : data.yLabels) || data.labels || [];
    },
    // These methods are ordered by lifecyle. Utilities then follow.
    // Any function defined here is inherited by all scale types.
    // Any function can be extended by the scale type

    /**
     * Provided for backward compatibility, not available anymore
     * @function Chart.Scale.mergeTicksOptions
     * @deprecated since version 2.8.0
     * @todo remove at version 3
     */
    mergeTicksOptions: function () {// noop
    },
    beforeUpdate: function () {
      helpers$1.callback(this.options.beforeUpdate, [this]);
    },

    /**
     * @param {number} maxWidth - the max width in pixels
     * @param {number} maxHeight - the max height in pixels
     * @param {object} margins - the space between the edge of the other scales and edge of the chart
     *   This space comes from two sources:
     *     - padding - space that's required to show the labels at the edges of the scale
     *     - thickness of scales or legends in another orientation
     */
    update: function (maxWidth, maxHeight, margins) {
      var me = this;
      var tickOpts = me.options.ticks;
      var sampleSize = tickOpts.sampleSize;
      var i, ilen, labels, ticks, samplingEnabled; // Update Lifecycle - Probably don't want to ever extend or overwrite this function ;)

      me.beforeUpdate(); // Absorb the master measurements

      me.maxWidth = maxWidth;
      me.maxHeight = maxHeight;
      me.margins = helpers$1.extend({
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      }, margins);
      me._ticks = null;
      me.ticks = null;
      me._labelSizes = null;
      me._maxLabelLines = 0;
      me.longestLabelWidth = 0;
      me.longestTextCache = me.longestTextCache || {};
      me._gridLineItems = null;
      me._labelItems = null; // Dimensions

      me.beforeSetDimensions();
      me.setDimensions();
      me.afterSetDimensions(); // Data min/max

      me.beforeDataLimits();
      me.determineDataLimits();
      me.afterDataLimits(); // Ticks - `this.ticks` is now DEPRECATED!
      // Internal ticks are now stored as objects in the PRIVATE `this._ticks` member
      // and must not be accessed directly from outside this class. `this.ticks` being
      // around for long time and not marked as private, we can't change its structure
      // without unexpected breaking changes. If you need to access the scale ticks,
      // use scale.getTicks() instead.

      me.beforeBuildTicks(); // New implementations should return an array of objects but for BACKWARD COMPAT,
      // we still support no return (`this.ticks` internally set by calling this method).

      ticks = me.buildTicks() || []; // Allow modification of ticks in callback.

      ticks = me.afterBuildTicks(ticks) || ticks; // Ensure ticks contains ticks in new tick format

      if ((!ticks || !ticks.length) && me.ticks) {
        ticks = [];

        for (i = 0, ilen = me.ticks.length; i < ilen; ++i) {
          ticks.push({
            value: me.ticks[i],
            major: false
          });
        }
      }

      me._ticks = ticks; // Compute tick rotation and fit using a sampled subset of labels
      // We generally don't need to compute the size of every single label for determining scale size

      samplingEnabled = sampleSize < ticks.length;
      labels = me._convertTicksToLabels(samplingEnabled ? sample(ticks, sampleSize) : ticks); // _configure is called twice, once here, once from core.controller.updateLayout.
      // Here we haven't been positioned yet, but dimensions are correct.
      // Variables set in _configure are needed for calculateTickRotation, and
      // it's ok that coordinates are not correct there, only dimensions matter.

      me._configure(); // Tick Rotation


      me.beforeCalculateTickRotation();
      me.calculateTickRotation();
      me.afterCalculateTickRotation();
      me.beforeFit();
      me.fit();
      me.afterFit(); // Auto-skip

      me._ticksToDraw = tickOpts.display && (tickOpts.autoSkip || tickOpts.source === 'auto') ? me._autoSkip(ticks) : ticks;

      if (samplingEnabled) {
        // Generate labels using all non-skipped ticks
        labels = me._convertTicksToLabels(me._ticksToDraw);
      }

      me.ticks = labels; // BACKWARD COMPATIBILITY
      // IMPORTANT: after this point, we consider that `this.ticks` will NEVER change!

      me.afterUpdate(); // TODO(v3): remove minSize as a public property and return value from all layout boxes. It is unused
      // make maxWidth and maxHeight private

      return me.minSize;
    },

    /**
     * @private
     */
    _configure: function () {
      var me = this;
      var reversePixels = me.options.ticks.reverse;
      var startPixel, endPixel;

      if (me.isHorizontal()) {
        startPixel = me.left;
        endPixel = me.right;
      } else {
        startPixel = me.top;
        endPixel = me.bottom; // by default vertical scales are from bottom to top, so pixels are reversed

        reversePixels = !reversePixels;
      }

      me._startPixel = startPixel;
      me._endPixel = endPixel;
      me._reversePixels = reversePixels;
      me._length = endPixel - startPixel;
    },
    afterUpdate: function () {
      helpers$1.callback(this.options.afterUpdate, [this]);
    },
    //
    beforeSetDimensions: function () {
      helpers$1.callback(this.options.beforeSetDimensions, [this]);
    },
    setDimensions: function () {
      var me = this; // Set the unconstrained dimension before label rotation

      if (me.isHorizontal()) {
        // Reset position before calculating rotation
        me.width = me.maxWidth;
        me.left = 0;
        me.right = me.width;
      } else {
        me.height = me.maxHeight; // Reset position before calculating rotation

        me.top = 0;
        me.bottom = me.height;
      } // Reset padding


      me.paddingLeft = 0;
      me.paddingTop = 0;
      me.paddingRight = 0;
      me.paddingBottom = 0;
    },
    afterSetDimensions: function () {
      helpers$1.callback(this.options.afterSetDimensions, [this]);
    },
    // Data limits
    beforeDataLimits: function () {
      helpers$1.callback(this.options.beforeDataLimits, [this]);
    },
    determineDataLimits: helpers$1.noop,
    afterDataLimits: function () {
      helpers$1.callback(this.options.afterDataLimits, [this]);
    },
    //
    beforeBuildTicks: function () {
      helpers$1.callback(this.options.beforeBuildTicks, [this]);
    },
    buildTicks: helpers$1.noop,
    afterBuildTicks: function (ticks) {
      var me = this; // ticks is empty for old axis implementations here

      if (isArray(ticks) && ticks.length) {
        return helpers$1.callback(me.options.afterBuildTicks, [me, ticks]);
      } // Support old implementations (that modified `this.ticks` directly in buildTicks)


      me.ticks = helpers$1.callback(me.options.afterBuildTicks, [me, me.ticks]) || me.ticks;
      return ticks;
    },
    beforeTickToLabelConversion: function () {
      helpers$1.callback(this.options.beforeTickToLabelConversion, [this]);
    },
    convertTicksToLabels: function () {
      var me = this; // Convert ticks to strings

      var tickOpts = me.options.ticks;
      me.ticks = me.ticks.map(tickOpts.userCallback || tickOpts.callback, this);
    },
    afterTickToLabelConversion: function () {
      helpers$1.callback(this.options.afterTickToLabelConversion, [this]);
    },
    //
    beforeCalculateTickRotation: function () {
      helpers$1.callback(this.options.beforeCalculateTickRotation, [this]);
    },
    calculateTickRotation: function () {
      var me = this;
      var options = me.options;
      var tickOpts = options.ticks;
      var numTicks = me.getTicks().length;
      var minRotation = tickOpts.minRotation || 0;
      var maxRotation = tickOpts.maxRotation;
      var labelRotation = minRotation;
      var labelSizes, maxLabelWidth, maxLabelHeight, maxWidth, tickWidth, maxHeight, maxLabelDiagonal;

      if (!me._isVisible() || !tickOpts.display || minRotation >= maxRotation || numTicks <= 1 || !me.isHorizontal()) {
        me.labelRotation = minRotation;
        return;
      }

      labelSizes = me._getLabelSizes();
      maxLabelWidth = labelSizes.widest.width;
      maxLabelHeight = labelSizes.highest.height - labelSizes.highest.offset; // Estimate the width of each grid based on the canvas width, the maximum
      // label width and the number of tick intervals

      maxWidth = Math.min(me.maxWidth, me.chart.width - maxLabelWidth);
      tickWidth = options.offset ? me.maxWidth / numTicks : maxWidth / (numTicks - 1); // Allow 3 pixels x2 padding either side for label readability

      if (maxLabelWidth + 6 > tickWidth) {
        tickWidth = maxWidth / (numTicks - (options.offset ? 0.5 : 1));
        maxHeight = me.maxHeight - getTickMarkLength(options.gridLines) - tickOpts.padding - getScaleLabelHeight(options.scaleLabel);
        maxLabelDiagonal = Math.sqrt(maxLabelWidth * maxLabelWidth + maxLabelHeight * maxLabelHeight);
        labelRotation = helpers$1.toDegrees(Math.min(Math.asin(Math.min((labelSizes.highest.height + 6) / tickWidth, 1)), Math.asin(Math.min(maxHeight / maxLabelDiagonal, 1)) - Math.asin(maxLabelHeight / maxLabelDiagonal)));
        labelRotation = Math.max(minRotation, Math.min(maxRotation, labelRotation));
      }

      me.labelRotation = labelRotation;
    },
    afterCalculateTickRotation: function () {
      helpers$1.callback(this.options.afterCalculateTickRotation, [this]);
    },
    //
    beforeFit: function () {
      helpers$1.callback(this.options.beforeFit, [this]);
    },
    fit: function () {
      var me = this; // Reset

      var minSize = me.minSize = {
        width: 0,
        height: 0
      };
      var chart = me.chart;
      var opts = me.options;
      var tickOpts = opts.ticks;
      var scaleLabelOpts = opts.scaleLabel;
      var gridLineOpts = opts.gridLines;

      var display = me._isVisible();

      var isBottom = opts.position === 'bottom';
      var isHorizontal = me.isHorizontal(); // Width

      if (isHorizontal) {
        minSize.width = me.maxWidth;
      } else if (display) {
        minSize.width = getTickMarkLength(gridLineOpts) + getScaleLabelHeight(scaleLabelOpts);
      } // height


      if (!isHorizontal) {
        minSize.height = me.maxHeight; // fill all the height
      } else if (display) {
        minSize.height = getTickMarkLength(gridLineOpts) + getScaleLabelHeight(scaleLabelOpts);
      } // Don't bother fitting the ticks if we are not showing the labels


      if (tickOpts.display && display) {
        var tickFonts = parseTickFontOptions(tickOpts);

        var labelSizes = me._getLabelSizes();

        var firstLabelSize = labelSizes.first;
        var lastLabelSize = labelSizes.last;
        var widestLabelSize = labelSizes.widest;
        var highestLabelSize = labelSizes.highest;
        var lineSpace = tickFonts.minor.lineHeight * 0.4;
        var tickPadding = tickOpts.padding;

        if (isHorizontal) {
          // A horizontal axis is more constrained by the height.
          var isRotated = me.labelRotation !== 0;
          var angleRadians = helpers$1.toRadians(me.labelRotation);
          var cosRotation = Math.cos(angleRadians);
          var sinRotation = Math.sin(angleRadians);
          var labelHeight = sinRotation * widestLabelSize.width + cosRotation * (highestLabelSize.height - (isRotated ? highestLabelSize.offset : 0)) + (isRotated ? 0 : lineSpace); // padding

          minSize.height = Math.min(me.maxHeight, minSize.height + labelHeight + tickPadding);
          var offsetLeft = me.getPixelForTick(0) - me.left;
          var offsetRight = me.right - me.getPixelForTick(me.getTicks().length - 1);
          var paddingLeft, paddingRight; // Ensure that our ticks are always inside the canvas. When rotated, ticks are right aligned
          // which means that the right padding is dominated by the font height

          if (isRotated) {
            paddingLeft = isBottom ? cosRotation * firstLabelSize.width + sinRotation * firstLabelSize.offset : sinRotation * (firstLabelSize.height - firstLabelSize.offset);
            paddingRight = isBottom ? sinRotation * (lastLabelSize.height - lastLabelSize.offset) : cosRotation * lastLabelSize.width + sinRotation * lastLabelSize.offset;
          } else {
            paddingLeft = firstLabelSize.width / 2;
            paddingRight = lastLabelSize.width / 2;
          } // Adjust padding taking into account changes in offsets
          // and add 3 px to move away from canvas edges


          me.paddingLeft = Math.max((paddingLeft - offsetLeft) * me.width / (me.width - offsetLeft), 0) + 3;
          me.paddingRight = Math.max((paddingRight - offsetRight) * me.width / (me.width - offsetRight), 0) + 3;
        } else {
          // A vertical axis is more constrained by the width. Labels are the
          // dominant factor here, so get that length first and account for padding
          var labelWidth = tickOpts.mirror ? 0 : // use lineSpace for consistency with horizontal axis
          // tickPadding is not implemented for horizontal
          widestLabelSize.width + tickPadding + lineSpace;
          minSize.width = Math.min(me.maxWidth, minSize.width + labelWidth);
          me.paddingTop = firstLabelSize.height / 2;
          me.paddingBottom = lastLabelSize.height / 2;
        }
      }

      me.handleMargins();

      if (isHorizontal) {
        me.width = me._length = chart.width - me.margins.left - me.margins.right;
        me.height = minSize.height;
      } else {
        me.width = minSize.width;
        me.height = me._length = chart.height - me.margins.top - me.margins.bottom;
      }
    },

    /**
     * Handle margins and padding interactions
     * @private
     */
    handleMargins: function () {
      var me = this;

      if (me.margins) {
        me.margins.left = Math.max(me.paddingLeft, me.margins.left);
        me.margins.top = Math.max(me.paddingTop, me.margins.top);
        me.margins.right = Math.max(me.paddingRight, me.margins.right);
        me.margins.bottom = Math.max(me.paddingBottom, me.margins.bottom);
      }
    },
    afterFit: function () {
      helpers$1.callback(this.options.afterFit, [this]);
    },
    // Shared Methods
    isHorizontal: function () {
      var pos = this.options.position;
      return pos === 'top' || pos === 'bottom';
    },
    isFullWidth: function () {
      return this.options.fullWidth;
    },
    // Get the correct value. NaN bad inputs, If the value type is object get the x or y based on whether we are horizontal or not
    getRightValue: function (rawValue) {
      // Null and undefined values first
      if (isNullOrUndef(rawValue)) {
        return NaN;
      } // isNaN(object) returns true, so make sure NaN is checking for a number; Discard Infinite values


      if ((typeof rawValue === 'number' || rawValue instanceof Number) && !isFinite(rawValue)) {
        return NaN;
      } // If it is in fact an object, dive in one more level


      if (rawValue) {
        if (this.isHorizontal()) {
          if (rawValue.x !== undefined) {
            return this.getRightValue(rawValue.x);
          }
        } else if (rawValue.y !== undefined) {
          return this.getRightValue(rawValue.y);
        }
      } // Value is good, return it


      return rawValue;
    },
    _convertTicksToLabels: function (ticks) {
      var me = this;
      var labels, i, ilen;
      me.ticks = ticks.map(function (tick) {
        return tick.value;
      });
      me.beforeTickToLabelConversion(); // New implementations should return the formatted tick labels but for BACKWARD
      // COMPAT, we still support no return (`this.ticks` internally changed by calling
      // this method and supposed to contain only string values).

      labels = me.convertTicksToLabels(ticks) || me.ticks;
      me.afterTickToLabelConversion(); // BACKWARD COMPAT: synchronize `_ticks` with labels (so potentially `this.ticks`)

      for (i = 0, ilen = ticks.length; i < ilen; ++i) {
        ticks[i].label = labels[i];
      }

      return labels;
    },

    /**
     * @private
     */
    _getLabelSizes: function () {
      var me = this;
      var labelSizes = me._labelSizes;

      if (!labelSizes) {
        me._labelSizes = labelSizes = computeLabelSizes(me.ctx, parseTickFontOptions(me.options.ticks), me.getTicks(), me.longestTextCache);
        me.longestLabelWidth = labelSizes.widest.width;
      }

      return labelSizes;
    },

    /**
     * @private
     */
    _parseValue: function (value) {
      var start, end, min, max;

      if (isArray(value)) {
        start = +this.getRightValue(value[0]);
        end = +this.getRightValue(value[1]);
        min = Math.min(start, end);
        max = Math.max(start, end);
      } else {
        value = +this.getRightValue(value);
        start = undefined;
        end = value;
        min = value;
        max = value;
      }

      return {
        min: min,
        max: max,
        start: start,
        end: end
      };
    },

    /**
    * @private
    */
    _getScaleLabel: function (rawValue) {
      var v = this._parseValue(rawValue);

      if (v.start !== undefined) {
        return '[' + v.start + ', ' + v.end + ']';
      }

      return +this.getRightValue(rawValue);
    },

    /**
     * Used to get the value to display in the tooltip for the data at the given index
     * @param index
     * @param datasetIndex
     */
    getLabelForIndex: helpers$1.noop,

    /**
     * Returns the location of the given data point. Value can either be an index or a numerical value
     * The coordinate (0, 0) is at the upper-left corner of the canvas
     * @param value
     * @param index
     * @param datasetIndex
     */
    getPixelForValue: helpers$1.noop,

    /**
     * Used to get the data value from a given pixel. This is the inverse of getPixelForValue
     * The coordinate (0, 0) is at the upper-left corner of the canvas
     * @param pixel
     */
    getValueForPixel: helpers$1.noop,

    /**
     * Returns the location of the tick at the given index
     * The coordinate (0, 0) is at the upper-left corner of the canvas
     */
    getPixelForTick: function (index) {
      var me = this;
      var offset = me.options.offset;
      var numTicks = me._ticks.length;
      var tickWidth = 1 / Math.max(numTicks - (offset ? 0 : 1), 1);
      return index < 0 || index > numTicks - 1 ? null : me.getPixelForDecimal(index * tickWidth + (offset ? tickWidth / 2 : 0));
    },

    /**
     * Utility for getting the pixel location of a percentage of scale
     * The coordinate (0, 0) is at the upper-left corner of the canvas
     */
    getPixelForDecimal: function (decimal) {
      var me = this;

      if (me._reversePixels) {
        decimal = 1 - decimal;
      }

      return me._startPixel + decimal * me._length;
    },
    getDecimalForPixel: function (pixel) {
      var decimal = (pixel - this._startPixel) / this._length;
      return this._reversePixels ? 1 - decimal : decimal;
    },

    /**
     * Returns the pixel for the minimum chart value
     * The coordinate (0, 0) is at the upper-left corner of the canvas
     */
    getBasePixel: function () {
      return this.getPixelForValue(this.getBaseValue());
    },
    getBaseValue: function () {
      var me = this;
      var min = me.min;
      var max = me.max;
      return me.beginAtZero ? 0 : min < 0 && max < 0 ? max : min > 0 && max > 0 ? min : 0;
    },

    /**
     * Returns a subset of ticks to be plotted to avoid overlapping labels.
     * @private
     */
    _autoSkip: function (ticks) {
      var me = this;
      var tickOpts = me.options.ticks;
      var axisLength = me._length;
      var ticksLimit = tickOpts.maxTicksLimit || axisLength / me._tickSize() + 1;
      var majorIndices = tickOpts.major.enabled ? getMajorIndices(ticks) : [];
      var numMajorIndices = majorIndices.length;
      var first = majorIndices[0];
      var last = majorIndices[numMajorIndices - 1];
      var i, ilen, spacing, avgMajorSpacing; // If there are too many major ticks to display them all

      if (numMajorIndices > ticksLimit) {
        skipMajors(ticks, majorIndices, numMajorIndices / ticksLimit);
        return nonSkipped(ticks);
      }

      spacing = calculateSpacing(majorIndices, ticks, axisLength, ticksLimit);

      if (numMajorIndices > 0) {
        for (i = 0, ilen = numMajorIndices - 1; i < ilen; i++) {
          skip(ticks, spacing, majorIndices[i], majorIndices[i + 1]);
        }

        avgMajorSpacing = numMajorIndices > 1 ? (last - first) / (numMajorIndices - 1) : null;
        skip(ticks, spacing, helpers$1.isNullOrUndef(avgMajorSpacing) ? 0 : first - avgMajorSpacing, first);
        skip(ticks, spacing, last, helpers$1.isNullOrUndef(avgMajorSpacing) ? ticks.length : last + avgMajorSpacing);
        return nonSkipped(ticks);
      }

      skip(ticks, spacing);
      return nonSkipped(ticks);
    },

    /**
     * @private
     */
    _tickSize: function () {
      var me = this;
      var optionTicks = me.options.ticks; // Calculate space needed by label in axis direction.

      var rot = helpers$1.toRadians(me.labelRotation);
      var cos = Math.abs(Math.cos(rot));
      var sin = Math.abs(Math.sin(rot));

      var labelSizes = me._getLabelSizes();

      var padding = optionTicks.autoSkipPadding || 0;
      var w = labelSizes ? labelSizes.widest.width + padding : 0;
      var h = labelSizes ? labelSizes.highest.height + padding : 0; // Calculate space needed for 1 tick in axis direction.

      return me.isHorizontal() ? h * cos > w * sin ? w / cos : h / sin : h * sin < w * cos ? h / cos : w / sin;
    },

    /**
     * @private
     */
    _isVisible: function () {
      var me = this;
      var chart = me.chart;
      var display = me.options.display;
      var i, ilen, meta;

      if (display !== 'auto') {
        return !!display;
      } // When 'auto', the scale is visible if at least one associated dataset is visible.


      for (i = 0, ilen = chart.data.datasets.length; i < ilen; ++i) {
        if (chart.isDatasetVisible(i)) {
          meta = chart.getDatasetMeta(i);

          if (meta.xAxisID === me.id || meta.yAxisID === me.id) {
            return true;
          }
        }
      }

      return false;
    },

    /**
     * @private
     */
    _computeGridLineItems: function (chartArea) {
      var me = this;
      var chart = me.chart;
      var options = me.options;
      var gridLines = options.gridLines;
      var position = options.position;
      var offsetGridLines = gridLines.offsetGridLines;
      var isHorizontal = me.isHorizontal();
      var ticks = me._ticksToDraw;
      var ticksLength = ticks.length + (offsetGridLines ? 1 : 0);
      var tl = getTickMarkLength(gridLines);
      var items = [];
      var axisWidth = gridLines.drawBorder ? valueAtIndexOrDefault(gridLines.lineWidth, 0, 0) : 0;
      var axisHalfWidth = axisWidth / 2;
      var alignPixel = helpers$1._alignPixel;

      var alignBorderValue = function (pixel) {
        return alignPixel(chart, pixel, axisWidth);
      };

      var borderValue, i, tick, lineValue, alignedLineValue;
      var tx1, ty1, tx2, ty2, x1, y1, x2, y2, lineWidth, lineColor, borderDash, borderDashOffset;

      if (position === 'top') {
        borderValue = alignBorderValue(me.bottom);
        ty1 = me.bottom - tl;
        ty2 = borderValue - axisHalfWidth;
        y1 = alignBorderValue(chartArea.top) + axisHalfWidth;
        y2 = chartArea.bottom;
      } else if (position === 'bottom') {
        borderValue = alignBorderValue(me.top);
        y1 = chartArea.top;
        y2 = alignBorderValue(chartArea.bottom) - axisHalfWidth;
        ty1 = borderValue + axisHalfWidth;
        ty2 = me.top + tl;
      } else if (position === 'left') {
        borderValue = alignBorderValue(me.right);
        tx1 = me.right - tl;
        tx2 = borderValue - axisHalfWidth;
        x1 = alignBorderValue(chartArea.left) + axisHalfWidth;
        x2 = chartArea.right;
      } else {
        borderValue = alignBorderValue(me.left);
        x1 = chartArea.left;
        x2 = alignBorderValue(chartArea.right) - axisHalfWidth;
        tx1 = borderValue + axisHalfWidth;
        tx2 = me.left + tl;
      }

      for (i = 0; i < ticksLength; ++i) {
        tick = ticks[i] || {}; // autoskipper skipped this tick (#4635)

        if (isNullOrUndef(tick.label) && i < ticks.length) {
          continue;
        }

        if (i === me.zeroLineIndex && options.offset === offsetGridLines) {
          // Draw the first index specially
          lineWidth = gridLines.zeroLineWidth;
          lineColor = gridLines.zeroLineColor;
          borderDash = gridLines.zeroLineBorderDash || [];
          borderDashOffset = gridLines.zeroLineBorderDashOffset || 0.0;
        } else {
          lineWidth = valueAtIndexOrDefault(gridLines.lineWidth, i, 1);
          lineColor = valueAtIndexOrDefault(gridLines.color, i, 'rgba(0,0,0,0.1)');
          borderDash = gridLines.borderDash || [];
          borderDashOffset = gridLines.borderDashOffset || 0.0;
        }

        lineValue = getPixelForGridLine(me, tick._index || i, offsetGridLines); // Skip if the pixel is out of the range

        if (lineValue === undefined) {
          continue;
        }

        alignedLineValue = alignPixel(chart, lineValue, lineWidth);

        if (isHorizontal) {
          tx1 = tx2 = x1 = x2 = alignedLineValue;
        } else {
          ty1 = ty2 = y1 = y2 = alignedLineValue;
        }

        items.push({
          tx1: tx1,
          ty1: ty1,
          tx2: tx2,
          ty2: ty2,
          x1: x1,
          y1: y1,
          x2: x2,
          y2: y2,
          width: lineWidth,
          color: lineColor,
          borderDash: borderDash,
          borderDashOffset: borderDashOffset
        });
      }

      items.ticksLength = ticksLength;
      items.borderValue = borderValue;
      return items;
    },

    /**
     * @private
     */
    _computeLabelItems: function () {
      var me = this;
      var options = me.options;
      var optionTicks = options.ticks;
      var position = options.position;
      var isMirrored = optionTicks.mirror;
      var isHorizontal = me.isHorizontal();
      var ticks = me._ticksToDraw;
      var fonts = parseTickFontOptions(optionTicks);
      var tickPadding = optionTicks.padding;
      var tl = getTickMarkLength(options.gridLines);
      var rotation = -helpers$1.toRadians(me.labelRotation);
      var items = [];
      var i, ilen, tick, label, x, y, textAlign, pixel, font, lineHeight, lineCount, textOffset;

      if (position === 'top') {
        y = me.bottom - tl - tickPadding;
        textAlign = !rotation ? 'center' : 'left';
      } else if (position === 'bottom') {
        y = me.top + tl + tickPadding;
        textAlign = !rotation ? 'center' : 'right';
      } else if (position === 'left') {
        x = me.right - (isMirrored ? 0 : tl) - tickPadding;
        textAlign = isMirrored ? 'left' : 'right';
      } else {
        x = me.left + (isMirrored ? 0 : tl) + tickPadding;
        textAlign = isMirrored ? 'right' : 'left';
      }

      for (i = 0, ilen = ticks.length; i < ilen; ++i) {
        tick = ticks[i];
        label = tick.label; // autoskipper skipped this tick (#4635)

        if (isNullOrUndef(label)) {
          continue;
        }

        pixel = me.getPixelForTick(tick._index || i) + optionTicks.labelOffset;
        font = tick.major ? fonts.major : fonts.minor;
        lineHeight = font.lineHeight;
        lineCount = isArray(label) ? label.length : 1;

        if (isHorizontal) {
          x = pixel;
          textOffset = position === 'top' ? ((!rotation ? 0.5 : 1) - lineCount) * lineHeight : (!rotation ? 0.5 : 0) * lineHeight;
        } else {
          y = pixel;
          textOffset = (1 - lineCount) * lineHeight / 2;
        }

        items.push({
          x: x,
          y: y,
          rotation: rotation,
          label: label,
          font: font,
          textOffset: textOffset,
          textAlign: textAlign
        });
      }

      return items;
    },

    /**
     * @private
     */
    _drawGrid: function (chartArea) {
      var me = this;
      var gridLines = me.options.gridLines;

      if (!gridLines.display) {
        return;
      }

      var ctx = me.ctx;
      var chart = me.chart;
      var alignPixel = helpers$1._alignPixel;
      var axisWidth = gridLines.drawBorder ? valueAtIndexOrDefault(gridLines.lineWidth, 0, 0) : 0;

      var items = me._gridLineItems || (me._gridLineItems = me._computeGridLineItems(chartArea));

      var width, color, i, ilen, item;

      for (i = 0, ilen = items.length; i < ilen; ++i) {
        item = items[i];
        width = item.width;
        color = item.color;

        if (width && color) {
          ctx.save();
          ctx.lineWidth = width;
          ctx.strokeStyle = color;

          if (ctx.setLineDash) {
            ctx.setLineDash(item.borderDash);
            ctx.lineDashOffset = item.borderDashOffset;
          }

          ctx.beginPath();

          if (gridLines.drawTicks) {
            ctx.moveTo(item.tx1, item.ty1);
            ctx.lineTo(item.tx2, item.ty2);
          }

          if (gridLines.drawOnChartArea) {
            ctx.moveTo(item.x1, item.y1);
            ctx.lineTo(item.x2, item.y2);
          }

          ctx.stroke();
          ctx.restore();
        }
      }

      if (axisWidth) {
        // Draw the line at the edge of the axis
        var firstLineWidth = axisWidth;
        var lastLineWidth = valueAtIndexOrDefault(gridLines.lineWidth, items.ticksLength - 1, 1);
        var borderValue = items.borderValue;
        var x1, x2, y1, y2;

        if (me.isHorizontal()) {
          x1 = alignPixel(chart, me.left, firstLineWidth) - firstLineWidth / 2;
          x2 = alignPixel(chart, me.right, lastLineWidth) + lastLineWidth / 2;
          y1 = y2 = borderValue;
        } else {
          y1 = alignPixel(chart, me.top, firstLineWidth) - firstLineWidth / 2;
          y2 = alignPixel(chart, me.bottom, lastLineWidth) + lastLineWidth / 2;
          x1 = x2 = borderValue;
        }

        ctx.lineWidth = axisWidth;
        ctx.strokeStyle = valueAtIndexOrDefault(gridLines.color, 0);
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }
    },

    /**
     * @private
     */
    _drawLabels: function () {
      var me = this;
      var optionTicks = me.options.ticks;

      if (!optionTicks.display) {
        return;
      }

      var ctx = me.ctx;

      var items = me._labelItems || (me._labelItems = me._computeLabelItems());

      var i, j, ilen, jlen, item, tickFont, label, y;

      for (i = 0, ilen = items.length; i < ilen; ++i) {
        item = items[i];
        tickFont = item.font; // Make sure we draw text in the correct color and font

        ctx.save();
        ctx.translate(item.x, item.y);
        ctx.rotate(item.rotation);
        ctx.font = tickFont.string;
        ctx.fillStyle = tickFont.color;
        ctx.textBaseline = 'middle';
        ctx.textAlign = item.textAlign;
        label = item.label;
        y = item.textOffset;

        if (isArray(label)) {
          for (j = 0, jlen = label.length; j < jlen; ++j) {
            // We just make sure the multiline element is a string here..
            ctx.fillText('' + label[j], 0, y);
            y += tickFont.lineHeight;
          }
        } else {
          ctx.fillText(label, 0, y);
        }

        ctx.restore();
      }
    },

    /**
     * @private
     */
    _drawTitle: function () {
      var me = this;
      var ctx = me.ctx;
      var options = me.options;
      var scaleLabel = options.scaleLabel;

      if (!scaleLabel.display) {
        return;
      }

      var scaleLabelFontColor = valueOrDefault$a(scaleLabel.fontColor, core_defaults.global.defaultFontColor);

      var scaleLabelFont = helpers$1.options._parseFont(scaleLabel);

      var scaleLabelPadding = helpers$1.options.toPadding(scaleLabel.padding);
      var halfLineHeight = scaleLabelFont.lineHeight / 2;
      var position = options.position;
      var rotation = 0;
      var scaleLabelX, scaleLabelY;

      if (me.isHorizontal()) {
        scaleLabelX = me.left + me.width / 2; // midpoint of the width

        scaleLabelY = position === 'bottom' ? me.bottom - halfLineHeight - scaleLabelPadding.bottom : me.top + halfLineHeight + scaleLabelPadding.top;
      } else {
        var isLeft = position === 'left';
        scaleLabelX = isLeft ? me.left + halfLineHeight + scaleLabelPadding.top : me.right - halfLineHeight - scaleLabelPadding.top;
        scaleLabelY = me.top + me.height / 2;
        rotation = isLeft ? -0.5 * Math.PI : 0.5 * Math.PI;
      }

      ctx.save();
      ctx.translate(scaleLabelX, scaleLabelY);
      ctx.rotate(rotation);
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = scaleLabelFontColor; // render in correct colour

      ctx.font = scaleLabelFont.string;
      ctx.fillText(scaleLabel.labelString, 0, 0);
      ctx.restore();
    },
    draw: function (chartArea) {
      var me = this;

      if (!me._isVisible()) {
        return;
      }

      me._drawGrid(chartArea);

      me._drawTitle();

      me._drawLabels();
    },

    /**
     * @private
     */
    _layers: function () {
      var me = this;
      var opts = me.options;
      var tz = opts.ticks && opts.ticks.z || 0;
      var gz = opts.gridLines && opts.gridLines.z || 0;

      if (!me._isVisible() || tz === gz || me.draw !== me._draw) {
        // backward compatibility: draw has been overridden by custom scale
        return [{
          z: tz,
          draw: function () {
            me.draw.apply(me, arguments);
          }
        }];
      }

      return [{
        z: gz,
        draw: function () {
          me._drawGrid.apply(me, arguments);

          me._drawTitle.apply(me, arguments);
        }
      }, {
        z: tz,
        draw: function () {
          me._drawLabels.apply(me, arguments);
        }
      }];
    },

    /**
     * @private
     */
    _getMatchingVisibleMetas: function (type) {
      var me = this;
      var isHorizontal = me.isHorizontal();
      return me.chart._getSortedVisibleDatasetMetas().filter(function (meta) {
        return (!type || meta.type === type) && (isHorizontal ? meta.xAxisID === me.id : meta.yAxisID === me.id);
      });
    }
  });
  Scale.prototype._draw = Scale.prototype.draw;
  var core_scale = Scale;
  var isNullOrUndef$1 = helpers$1.isNullOrUndef;
  var defaultConfig = {
    position: 'bottom'
  };
  var scale_category = core_scale.extend({
    determineDataLimits: function () {
      var me = this;

      var labels = me._getLabels();

      var ticksOpts = me.options.ticks;
      var min = ticksOpts.min;
      var max = ticksOpts.max;
      var minIndex = 0;
      var maxIndex = labels.length - 1;
      var findIndex;

      if (min !== undefined) {
        // user specified min value
        findIndex = labels.indexOf(min);

        if (findIndex >= 0) {
          minIndex = findIndex;
        }
      }

      if (max !== undefined) {
        // user specified max value
        findIndex = labels.indexOf(max);

        if (findIndex >= 0) {
          maxIndex = findIndex;
        }
      }

      me.minIndex = minIndex;
      me.maxIndex = maxIndex;
      me.min = labels[minIndex];
      me.max = labels[maxIndex];
    },
    buildTicks: function () {
      var me = this;

      var labels = me._getLabels();

      var minIndex = me.minIndex;
      var maxIndex = me.maxIndex; // If we are viewing some subset of labels, slice the original array

      me.ticks = minIndex === 0 && maxIndex === labels.length - 1 ? labels : labels.slice(minIndex, maxIndex + 1);
    },
    getLabelForIndex: function (index, datasetIndex) {
      var me = this;
      var chart = me.chart;

      if (chart.getDatasetMeta(datasetIndex).controller._getValueScaleId() === me.id) {
        return me.getRightValue(chart.data.datasets[datasetIndex].data[index]);
      }

      return me._getLabels()[index];
    },
    _configure: function () {
      var me = this;
      var offset = me.options.offset;
      var ticks = me.ticks;

      core_scale.prototype._configure.call(me);

      if (!me.isHorizontal()) {
        // For backward compatibility, vertical category scale reverse is inverted.
        me._reversePixels = !me._reversePixels;
      }

      if (!ticks) {
        return;
      }

      me._startValue = me.minIndex - (offset ? 0.5 : 0);
      me._valueRange = Math.max(ticks.length - (offset ? 0 : 1), 1);
    },
    // Used to get data value locations.  Value can either be an index or a numerical value
    getPixelForValue: function (value, index, datasetIndex) {
      var me = this;
      var valueCategory, labels, idx;

      if (!isNullOrUndef$1(index) && !isNullOrUndef$1(datasetIndex)) {
        value = me.chart.data.datasets[datasetIndex].data[index];
      } // If value is a data object, then index is the index in the data array,
      // not the index of the scale. We need to change that.


      if (!isNullOrUndef$1(value)) {
        valueCategory = me.isHorizontal() ? value.x : value.y;
      }

      if (valueCategory !== undefined || value !== undefined && isNaN(index)) {
        labels = me._getLabels();
        value = helpers$1.valueOrDefault(valueCategory, value);
        idx = labels.indexOf(value);
        index = idx !== -1 ? idx : index;

        if (isNaN(index)) {
          index = value;
        }
      }

      return me.getPixelForDecimal((index - me._startValue) / me._valueRange);
    },
    getPixelForTick: function (index) {
      var ticks = this.ticks;
      return index < 0 || index > ticks.length - 1 ? null : this.getPixelForValue(ticks[index], index + this.minIndex);
    },
    getValueForPixel: function (pixel) {
      var me = this;
      var value = Math.round(me._startValue + me.getDecimalForPixel(pixel) * me._valueRange);
      return Math.min(Math.max(value, 0), me.ticks.length - 1);
    },
    getBasePixel: function () {
      return this.bottom;
    }
  }); // INTERNAL: static default options, registered in src/index.js

  var _defaults = defaultConfig;
  scale_category._defaults = _defaults;
  var noop = helpers$1.noop;
  var isNullOrUndef$2 = helpers$1.isNullOrUndef;
  /**
   * Generate a set of linear ticks
   * @param generationOptions the options used to generate the ticks
   * @param dataRange the range of the data
   * @returns {number[]} array of tick values
   */

  function generateTicks(generationOptions, dataRange) {
    var ticks = []; // To get a "nice" value for the tick spacing, we will use the appropriately named
    // "nice number" algorithm. See https://stackoverflow.com/questions/8506881/nice-label-algorithm-for-charts-with-minimum-ticks
    // for details.

    var MIN_SPACING = 1e-14;
    var stepSize = generationOptions.stepSize;
    var unit = stepSize || 1;
    var maxNumSpaces = generationOptions.maxTicks - 1;
    var min = generationOptions.min;
    var max = generationOptions.max;
    var precision = generationOptions.precision;
    var rmin = dataRange.min;
    var rmax = dataRange.max;
    var spacing = helpers$1.niceNum((rmax - rmin) / maxNumSpaces / unit) * unit;
    var factor, niceMin, niceMax, numSpaces; // Beyond MIN_SPACING floating point numbers being to lose precision
    // such that we can't do the math necessary to generate ticks

    if (spacing < MIN_SPACING && isNullOrUndef$2(min) && isNullOrUndef$2(max)) {
      return [rmin, rmax];
    }

    numSpaces = Math.ceil(rmax / spacing) - Math.floor(rmin / spacing);

    if (numSpaces > maxNumSpaces) {
      // If the calculated num of spaces exceeds maxNumSpaces, recalculate it
      spacing = helpers$1.niceNum(numSpaces * spacing / maxNumSpaces / unit) * unit;
    }

    if (stepSize || isNullOrUndef$2(precision)) {
      // If a precision is not specified, calculate factor based on spacing
      factor = Math.pow(10, helpers$1._decimalPlaces(spacing));
    } else {
      // If the user specified a precision, round to that number of decimal places
      factor = Math.pow(10, precision);
      spacing = Math.ceil(spacing * factor) / factor;
    }

    niceMin = Math.floor(rmin / spacing) * spacing;
    niceMax = Math.ceil(rmax / spacing) * spacing; // If min, max and stepSize is set and they make an evenly spaced scale use it.

    if (stepSize) {
      // If very close to our whole number, use it.
      if (!isNullOrUndef$2(min) && helpers$1.almostWhole(min / spacing, spacing / 1000)) {
        niceMin = min;
      }

      if (!isNullOrUndef$2(max) && helpers$1.almostWhole(max / spacing, spacing / 1000)) {
        niceMax = max;
      }
    }

    numSpaces = (niceMax - niceMin) / spacing; // If very close to our rounded value, use it.

    if (helpers$1.almostEquals(numSpaces, Math.round(numSpaces), spacing / 1000)) {
      numSpaces = Math.round(numSpaces);
    } else {
      numSpaces = Math.ceil(numSpaces);
    }

    niceMin = Math.round(niceMin * factor) / factor;
    niceMax = Math.round(niceMax * factor) / factor;
    ticks.push(isNullOrUndef$2(min) ? niceMin : min);

    for (var j = 1; j < numSpaces; ++j) {
      ticks.push(Math.round((niceMin + j * spacing) * factor) / factor);
    }

    ticks.push(isNullOrUndef$2(max) ? niceMax : max);
    return ticks;
  }

  var scale_linearbase = core_scale.extend({
    getRightValue: function (value) {
      if (typeof value === 'string') {
        return +value;
      }

      return core_scale.prototype.getRightValue.call(this, value);
    },
    handleTickRangeOptions: function () {
      var me = this;
      var opts = me.options;
      var tickOpts = opts.ticks; // If we are forcing it to begin at 0, but 0 will already be rendered on the chart,
      // do nothing since that would make the chart weird. If the user really wants a weird chart
      // axis, they can manually override it

      if (tickOpts.beginAtZero) {
        var minSign = helpers$1.sign(me.min);
        var maxSign = helpers$1.sign(me.max);

        if (minSign < 0 && maxSign < 0) {
          // move the top up to 0
          me.max = 0;
        } else if (minSign > 0 && maxSign > 0) {
          // move the bottom down to 0
          me.min = 0;
        }
      }

      var setMin = tickOpts.min !== undefined || tickOpts.suggestedMin !== undefined;
      var setMax = tickOpts.max !== undefined || tickOpts.suggestedMax !== undefined;

      if (tickOpts.min !== undefined) {
        me.min = tickOpts.min;
      } else if (tickOpts.suggestedMin !== undefined) {
        if (me.min === null) {
          me.min = tickOpts.suggestedMin;
        } else {
          me.min = Math.min(me.min, tickOpts.suggestedMin);
        }
      }

      if (tickOpts.max !== undefined) {
        me.max = tickOpts.max;
      } else if (tickOpts.suggestedMax !== undefined) {
        if (me.max === null) {
          me.max = tickOpts.suggestedMax;
        } else {
          me.max = Math.max(me.max, tickOpts.suggestedMax);
        }
      }

      if (setMin !== setMax) {
        // We set the min or the max but not both.
        // So ensure that our range is good
        // Inverted or 0 length range can happen when
        // ticks.min is set, and no datasets are visible
        if (me.min >= me.max) {
          if (setMin) {
            me.max = me.min + 1;
          } else {
            me.min = me.max - 1;
          }
        }
      }

      if (me.min === me.max) {
        me.max++;

        if (!tickOpts.beginAtZero) {
          me.min--;
        }
      }
    },
    getTickLimit: function () {
      var me = this;
      var tickOpts = me.options.ticks;
      var stepSize = tickOpts.stepSize;
      var maxTicksLimit = tickOpts.maxTicksLimit;
      var maxTicks;

      if (stepSize) {
        maxTicks = Math.ceil(me.max / stepSize) - Math.floor(me.min / stepSize) + 1;
      } else {
        maxTicks = me._computeTickLimit();
        maxTicksLimit = maxTicksLimit || 11;
      }

      if (maxTicksLimit) {
        maxTicks = Math.min(maxTicksLimit, maxTicks);
      }

      return maxTicks;
    },
    _computeTickLimit: function () {
      return Number.POSITIVE_INFINITY;
    },
    handleDirectionalChanges: noop,
    buildTicks: function () {
      var me = this;
      var opts = me.options;
      var tickOpts = opts.ticks; // Figure out what the max number of ticks we can support it is based on the size of
      // the axis area. For now, we say that the minimum tick spacing in pixels must be 40
      // We also limit the maximum number of ticks to 11 which gives a nice 10 squares on
      // the graph. Make sure we always have at least 2 ticks

      var maxTicks = me.getTickLimit();
      maxTicks = Math.max(2, maxTicks);
      var numericGeneratorOptions = {
        maxTicks: maxTicks,
        min: tickOpts.min,
        max: tickOpts.max,
        precision: tickOpts.precision,
        stepSize: helpers$1.valueOrDefault(tickOpts.fixedStepSize, tickOpts.stepSize)
      };
      var ticks = me.ticks = generateTicks(numericGeneratorOptions, me);
      me.handleDirectionalChanges(); // At this point, we need to update our max and min given the tick values since we have expanded the
      // range of the scale

      me.max = helpers$1.max(ticks);
      me.min = helpers$1.min(ticks);

      if (tickOpts.reverse) {
        ticks.reverse();
        me.start = me.max;
        me.end = me.min;
      } else {
        me.start = me.min;
        me.end = me.max;
      }
    },
    convertTicksToLabels: function () {
      var me = this;
      me.ticksAsNumbers = me.ticks.slice();
      me.zeroLineIndex = me.ticks.indexOf(0);
      core_scale.prototype.convertTicksToLabels.call(me);
    },
    _configure: function () {
      var me = this;
      var ticks = me.getTicks();
      var start = me.min;
      var end = me.max;
      var offset;

      core_scale.prototype._configure.call(me);

      if (me.options.offset && ticks.length) {
        offset = (end - start) / Math.max(ticks.length - 1, 1) / 2;
        start -= offset;
        end += offset;
      }

      me._startValue = start;
      me._endValue = end;
      me._valueRange = end - start;
    }
  });
  var defaultConfig$1 = {
    position: 'left',
    ticks: {
      callback: core_ticks.formatters.linear
    }
  };
  var DEFAULT_MIN = 0;
  var DEFAULT_MAX = 1;

  function getOrCreateStack(stacks, stacked, meta) {
    var key = [meta.type, // we have a separate stack for stack=undefined datasets when the opts.stacked is undefined
    stacked === undefined && meta.stack === undefined ? meta.index : '', meta.stack].join('.');

    if (stacks[key] === undefined) {
      stacks[key] = {
        pos: [],
        neg: []
      };
    }

    return stacks[key];
  }

  function stackData(scale, stacks, meta, data) {
    var opts = scale.options;
    var stacked = opts.stacked;
    var stack = getOrCreateStack(stacks, stacked, meta);
    var pos = stack.pos;
    var neg = stack.neg;
    var ilen = data.length;
    var i, value;

    for (i = 0; i < ilen; ++i) {
      value = scale._parseValue(data[i]);

      if (isNaN(value.min) || isNaN(value.max) || meta.data[i].hidden) {
        continue;
      }

      pos[i] = pos[i] || 0;
      neg[i] = neg[i] || 0;

      if (opts.relativePoints) {
        pos[i] = 100;
      } else if (value.min < 0 || value.max < 0) {
        neg[i] += value.min;
      } else {
        pos[i] += value.max;
      }
    }
  }

  function updateMinMax(scale, meta, data) {
    var ilen = data.length;
    var i, value;

    for (i = 0; i < ilen; ++i) {
      value = scale._parseValue(data[i]);

      if (isNaN(value.min) || isNaN(value.max) || meta.data[i].hidden) {
        continue;
      }

      scale.min = Math.min(scale.min, value.min);
      scale.max = Math.max(scale.max, value.max);
    }
  }

  var scale_linear = scale_linearbase.extend({
    determineDataLimits: function () {
      var me = this;
      var opts = me.options;
      var chart = me.chart;
      var datasets = chart.data.datasets;

      var metasets = me._getMatchingVisibleMetas();

      var hasStacks = opts.stacked;
      var stacks = {};
      var ilen = metasets.length;
      var i, meta, data, values;
      me.min = Number.POSITIVE_INFINITY;
      me.max = Number.NEGATIVE_INFINITY;

      if (hasStacks === undefined) {
        for (i = 0; !hasStacks && i < ilen; ++i) {
          meta = metasets[i];
          hasStacks = meta.stack !== undefined;
        }
      }

      for (i = 0; i < ilen; ++i) {
        meta = metasets[i];
        data = datasets[meta.index].data;

        if (hasStacks) {
          stackData(me, stacks, meta, data);
        } else {
          updateMinMax(me, meta, data);
        }
      }

      helpers$1.each(stacks, function (stackValues) {
        values = stackValues.pos.concat(stackValues.neg);
        me.min = Math.min(me.min, helpers$1.min(values));
        me.max = Math.max(me.max, helpers$1.max(values));
      });
      me.min = helpers$1.isFinite(me.min) && !isNaN(me.min) ? me.min : DEFAULT_MIN;
      me.max = helpers$1.isFinite(me.max) && !isNaN(me.max) ? me.max : DEFAULT_MAX; // Common base implementation to handle ticks.min, ticks.max, ticks.beginAtZero

      me.handleTickRangeOptions();
    },
    // Returns the maximum number of ticks based on the scale dimension
    _computeTickLimit: function () {
      var me = this;
      var tickFont;

      if (me.isHorizontal()) {
        return Math.ceil(me.width / 40);
      }

      tickFont = helpers$1.options._parseFont(me.options.ticks);
      return Math.ceil(me.height / tickFont.lineHeight);
    },
    // Called after the ticks are built. We need
    handleDirectionalChanges: function () {
      if (!this.isHorizontal()) {
        // We are in a vertical orientation. The top value is the highest. So reverse the array
        this.ticks.reverse();
      }
    },
    getLabelForIndex: function (index, datasetIndex) {
      return this._getScaleLabel(this.chart.data.datasets[datasetIndex].data[index]);
    },
    // Utils
    getPixelForValue: function (value) {
      var me = this;
      return me.getPixelForDecimal((+me.getRightValue(value) - me._startValue) / me._valueRange);
    },
    getValueForPixel: function (pixel) {
      return this._startValue + this.getDecimalForPixel(pixel) * this._valueRange;
    },
    getPixelForTick: function (index) {
      var ticks = this.ticksAsNumbers;

      if (index < 0 || index > ticks.length - 1) {
        return null;
      }

      return this.getPixelForValue(ticks[index]);
    }
  }); // INTERNAL: static default options, registered in src/index.js

  var _defaults$1 = defaultConfig$1;
  scale_linear._defaults = _defaults$1;
  var valueOrDefault$b = helpers$1.valueOrDefault;
  var log10 = helpers$1.math.log10;
  /**
   * Generate a set of logarithmic ticks
   * @param generationOptions the options used to generate the ticks
   * @param dataRange the range of the data
   * @returns {number[]} array of tick values
   */

  function generateTicks$1(generationOptions, dataRange) {
    var ticks = [];
    var tickVal = valueOrDefault$b(generationOptions.min, Math.pow(10, Math.floor(log10(dataRange.min))));
    var endExp = Math.floor(log10(dataRange.max));
    var endSignificand = Math.ceil(dataRange.max / Math.pow(10, endExp));
    var exp, significand;

    if (tickVal === 0) {
      exp = Math.floor(log10(dataRange.minNotZero));
      significand = Math.floor(dataRange.minNotZero / Math.pow(10, exp));
      ticks.push(tickVal);
      tickVal = significand * Math.pow(10, exp);
    } else {
      exp = Math.floor(log10(tickVal));
      significand = Math.floor(tickVal / Math.pow(10, exp));
    }

    var precision = exp < 0 ? Math.pow(10, Math.abs(exp)) : 1;

    do {
      ticks.push(tickVal);
      ++significand;

      if (significand === 10) {
        significand = 1;
        ++exp;
        precision = exp >= 0 ? 1 : precision;
      }

      tickVal = Math.round(significand * Math.pow(10, exp) * precision) / precision;
    } while (exp < endExp || exp === endExp && significand < endSignificand);

    var lastTick = valueOrDefault$b(generationOptions.max, tickVal);
    ticks.push(lastTick);
    return ticks;
  }

  var defaultConfig$2 = {
    position: 'left',
    // label settings
    ticks: {
      callback: core_ticks.formatters.logarithmic
    }
  }; // TODO(v3): change this to positiveOrDefault

  function nonNegativeOrDefault(value, defaultValue) {
    return helpers$1.isFinite(value) && value >= 0 ? value : defaultValue;
  }

  var scale_logarithmic = core_scale.extend({
    determineDataLimits: function () {
      var me = this;
      var opts = me.options;
      var chart = me.chart;
      var datasets = chart.data.datasets;
      var isHorizontal = me.isHorizontal();

      function IDMatches(meta) {
        return isHorizontal ? meta.xAxisID === me.id : meta.yAxisID === me.id;
      }

      var datasetIndex, meta, value, data, i, ilen; // Calculate Range

      me.min = Number.POSITIVE_INFINITY;
      me.max = Number.NEGATIVE_INFINITY;
      me.minNotZero = Number.POSITIVE_INFINITY;
      var hasStacks = opts.stacked;

      if (hasStacks === undefined) {
        for (datasetIndex = 0; datasetIndex < datasets.length; datasetIndex++) {
          meta = chart.getDatasetMeta(datasetIndex);

          if (chart.isDatasetVisible(datasetIndex) && IDMatches(meta) && meta.stack !== undefined) {
            hasStacks = true;
            break;
          }
        }
      }

      if (opts.stacked || hasStacks) {
        var valuesPerStack = {};

        for (datasetIndex = 0; datasetIndex < datasets.length; datasetIndex++) {
          meta = chart.getDatasetMeta(datasetIndex);
          var key = [meta.type, // we have a separate stack for stack=undefined datasets when the opts.stacked is undefined
          opts.stacked === undefined && meta.stack === undefined ? datasetIndex : '', meta.stack].join('.');

          if (chart.isDatasetVisible(datasetIndex) && IDMatches(meta)) {
            if (valuesPerStack[key] === undefined) {
              valuesPerStack[key] = [];
            }

            data = datasets[datasetIndex].data;

            for (i = 0, ilen = data.length; i < ilen; i++) {
              var values = valuesPerStack[key];
              value = me._parseValue(data[i]); // invalid, hidden and negative values are ignored

              if (isNaN(value.min) || isNaN(value.max) || meta.data[i].hidden || value.min < 0 || value.max < 0) {
                continue;
              }

              values[i] = values[i] || 0;
              values[i] += value.max;
            }
          }
        }

        helpers$1.each(valuesPerStack, function (valuesForType) {
          if (valuesForType.length > 0) {
            var minVal = helpers$1.min(valuesForType);
            var maxVal = helpers$1.max(valuesForType);
            me.min = Math.min(me.min, minVal);
            me.max = Math.max(me.max, maxVal);
          }
        });
      } else {
        for (datasetIndex = 0; datasetIndex < datasets.length; datasetIndex++) {
          meta = chart.getDatasetMeta(datasetIndex);

          if (chart.isDatasetVisible(datasetIndex) && IDMatches(meta)) {
            data = datasets[datasetIndex].data;

            for (i = 0, ilen = data.length; i < ilen; i++) {
              value = me._parseValue(data[i]); // invalid, hidden and negative values are ignored

              if (isNaN(value.min) || isNaN(value.max) || meta.data[i].hidden || value.min < 0 || value.max < 0) {
                continue;
              }

              me.min = Math.min(value.min, me.min);
              me.max = Math.max(value.max, me.max);

              if (value.min !== 0) {
                me.minNotZero = Math.min(value.min, me.minNotZero);
              }
            }
          }
        }
      }

      me.min = helpers$1.isFinite(me.min) ? me.min : null;
      me.max = helpers$1.isFinite(me.max) ? me.max : null;
      me.minNotZero = helpers$1.isFinite(me.minNotZero) ? me.minNotZero : null; // Common base implementation to handle ticks.min, ticks.max

      this.handleTickRangeOptions();
    },
    handleTickRangeOptions: function () {
      var me = this;
      var tickOpts = me.options.ticks;
      var DEFAULT_MIN = 1;
      var DEFAULT_MAX = 10;
      me.min = nonNegativeOrDefault(tickOpts.min, me.min);
      me.max = nonNegativeOrDefault(tickOpts.max, me.max);

      if (me.min === me.max) {
        if (me.min !== 0 && me.min !== null) {
          me.min = Math.pow(10, Math.floor(log10(me.min)) - 1);
          me.max = Math.pow(10, Math.floor(log10(me.max)) + 1);
        } else {
          me.min = DEFAULT_MIN;
          me.max = DEFAULT_MAX;
        }
      }

      if (me.min === null) {
        me.min = Math.pow(10, Math.floor(log10(me.max)) - 1);
      }

      if (me.max === null) {
        me.max = me.min !== 0 ? Math.pow(10, Math.floor(log10(me.min)) + 1) : DEFAULT_MAX;
      }

      if (me.minNotZero === null) {
        if (me.min > 0) {
          me.minNotZero = me.min;
        } else if (me.max < 1) {
          me.minNotZero = Math.pow(10, Math.floor(log10(me.max)));
        } else {
          me.minNotZero = DEFAULT_MIN;
        }
      }
    },
    buildTicks: function () {
      var me = this;
      var tickOpts = me.options.ticks;
      var reverse = !me.isHorizontal();
      var generationOptions = {
        min: nonNegativeOrDefault(tickOpts.min),
        max: nonNegativeOrDefault(tickOpts.max)
      };
      var ticks = me.ticks = generateTicks$1(generationOptions, me); // At this point, we need to update our max and min given the tick values since we have expanded the
      // range of the scale

      me.max = helpers$1.max(ticks);
      me.min = helpers$1.min(ticks);

      if (tickOpts.reverse) {
        reverse = !reverse;
        me.start = me.max;
        me.end = me.min;
      } else {
        me.start = me.min;
        me.end = me.max;
      }

      if (reverse) {
        ticks.reverse();
      }
    },
    convertTicksToLabels: function () {
      this.tickValues = this.ticks.slice();
      core_scale.prototype.convertTicksToLabels.call(this);
    },
    // Get the correct tooltip label
    getLabelForIndex: function (index, datasetIndex) {
      return this._getScaleLabel(this.chart.data.datasets[datasetIndex].data[index]);
    },
    getPixelForTick: function (index) {
      var ticks = this.tickValues;

      if (index < 0 || index > ticks.length - 1) {
        return null;
      }

      return this.getPixelForValue(ticks[index]);
    },

    /**
     * Returns the value of the first tick.
     * @param {number} value - The minimum not zero value.
     * @return {number} The first tick value.
     * @private
     */
    _getFirstTickValue: function (value) {
      var exp = Math.floor(log10(value));
      var significand = Math.floor(value / Math.pow(10, exp));
      return significand * Math.pow(10, exp);
    },
    _configure: function () {
      var me = this;
      var start = me.min;
      var offset = 0;

      core_scale.prototype._configure.call(me);

      if (start === 0) {
        start = me._getFirstTickValue(me.minNotZero);
        offset = valueOrDefault$b(me.options.ticks.fontSize, core_defaults.global.defaultFontSize) / me._length;
      }

      me._startValue = log10(start);
      me._valueOffset = offset;
      me._valueRange = (log10(me.max) - log10(start)) / (1 - offset);
    },
    getPixelForValue: function (value) {
      var me = this;
      var decimal = 0;
      value = +me.getRightValue(value);

      if (value > me.min && value > 0) {
        decimal = (log10(value) - me._startValue) / me._valueRange + me._valueOffset;
      }

      return me.getPixelForDecimal(decimal);
    },
    getValueForPixel: function (pixel) {
      var me = this;
      var decimal = me.getDecimalForPixel(pixel);
      return decimal === 0 && me.min === 0 ? 0 : Math.pow(10, me._startValue + (decimal - me._valueOffset) * me._valueRange);
    }
  }); // INTERNAL: static default options, registered in src/index.js

  var _defaults$2 = defaultConfig$2;
  scale_logarithmic._defaults = _defaults$2;
  var valueOrDefault$c = helpers$1.valueOrDefault;
  var valueAtIndexOrDefault$1 = helpers$1.valueAtIndexOrDefault;
  var resolve$4 = helpers$1.options.resolve;
  var defaultConfig$3 = {
    display: true,
    // Boolean - Whether to animate scaling the chart from the centre
    animate: true,
    position: 'chartArea',
    angleLines: {
      display: true,
      color: 'rgba(0,0,0,0.1)',
      lineWidth: 1,
      borderDash: [],
      borderDashOffset: 0.0
    },
    gridLines: {
      circular: false
    },
    // label settings
    ticks: {
      // Boolean - Show a backdrop to the scale label
      showLabelBackdrop: true,
      // String - The colour of the label backdrop
      backdropColor: 'rgba(255,255,255,0.75)',
      // Number - The backdrop padding above & below the label in pixels
      backdropPaddingY: 2,
      // Number - The backdrop padding to the side of the label in pixels
      backdropPaddingX: 2,
      callback: core_ticks.formatters.linear
    },
    pointLabels: {
      // Boolean - if true, show point labels
      display: true,
      // Number - Point label font size in pixels
      fontSize: 10,
      // Function - Used to convert point labels
      callback: function (label) {
        return label;
      }
    }
  };

  function getTickBackdropHeight(opts) {
    var tickOpts = opts.ticks;

    if (tickOpts.display && opts.display) {
      return valueOrDefault$c(tickOpts.fontSize, core_defaults.global.defaultFontSize) + tickOpts.backdropPaddingY * 2;
    }

    return 0;
  }

  function measureLabelSize(ctx, lineHeight, label) {
    if (helpers$1.isArray(label)) {
      return {
        w: helpers$1.longestText(ctx, ctx.font, label),
        h: label.length * lineHeight
      };
    }

    return {
      w: ctx.measureText(label).width,
      h: lineHeight
    };
  }

  function determineLimits(angle, pos, size, min, max) {
    if (angle === min || angle === max) {
      return {
        start: pos - size / 2,
        end: pos + size / 2
      };
    } else if (angle < min || angle > max) {
      return {
        start: pos - size,
        end: pos
      };
    }

    return {
      start: pos,
      end: pos + size
    };
  }
  /**
   * Helper function to fit a radial linear scale with point labels
   */


  function fitWithPointLabels(scale) {
    // Right, this is really confusing and there is a lot of maths going on here
    // The gist of the problem is here: https://gist.github.com/nnnick/696cc9c55f4b0beb8fe9
    //
    // Reaction: https://dl.dropboxusercontent.com/u/34601363/toomuchscience.gif
    //
    // Solution:
    //
    // We assume the radius of the polygon is half the size of the canvas at first
    // at each index we check if the text overlaps.
    //
    // Where it does, we store that angle and that index.
    //
    // After finding the largest index and angle we calculate how much we need to remove
    // from the shape radius to move the point inwards by that x.
    //
    // We average the left and right distances to get the maximum shape radius that can fit in the box
    // along with labels.
    //
    // Once we have that, we can find the centre point for the chart, by taking the x text protrusion
    // on each side, removing that from the size, halving it and adding the left x protrusion width.
    //
    // This will mean we have a shape fitted to the canvas, as large as it can be with the labels
    // and position it in the most space efficient manner
    //
    // https://dl.dropboxusercontent.com/u/34601363/yeahscience.gif
    var plFont = helpers$1.options._parseFont(scale.options.pointLabels); // Get maximum radius of the polygon. Either half the height (minus the text width) or half the width.
    // Use this to calculate the offset + change. - Make sure L/R protrusion is at least 0 to stop issues with centre points


    var furthestLimits = {
      l: 0,
      r: scale.width,
      t: 0,
      b: scale.height - scale.paddingTop
    };
    var furthestAngles = {};
    var i, textSize, pointPosition;
    scale.ctx.font = plFont.string;
    scale._pointLabelSizes = [];
    var valueCount = scale.chart.data.labels.length;

    for (i = 0; i < valueCount; i++) {
      pointPosition = scale.getPointPosition(i, scale.drawingArea + 5);
      textSize = measureLabelSize(scale.ctx, plFont.lineHeight, scale.pointLabels[i]);
      scale._pointLabelSizes[i] = textSize; // Add quarter circle to make degree 0 mean top of circle

      var angleRadians = scale.getIndexAngle(i);
      var angle = helpers$1.toDegrees(angleRadians) % 360;
      var hLimits = determineLimits(angle, pointPosition.x, textSize.w, 0, 180);
      var vLimits = determineLimits(angle, pointPosition.y, textSize.h, 90, 270);

      if (hLimits.start < furthestLimits.l) {
        furthestLimits.l = hLimits.start;
        furthestAngles.l = angleRadians;
      }

      if (hLimits.end > furthestLimits.r) {
        furthestLimits.r = hLimits.end;
        furthestAngles.r = angleRadians;
      }

      if (vLimits.start < furthestLimits.t) {
        furthestLimits.t = vLimits.start;
        furthestAngles.t = angleRadians;
      }

      if (vLimits.end > furthestLimits.b) {
        furthestLimits.b = vLimits.end;
        furthestAngles.b = angleRadians;
      }
    }

    scale.setReductions(scale.drawingArea, furthestLimits, furthestAngles);
  }

  function getTextAlignForAngle(angle) {
    if (angle === 0 || angle === 180) {
      return 'center';
    } else if (angle < 180) {
      return 'left';
    }

    return 'right';
  }

  function fillText(ctx, text, position, lineHeight) {
    var y = position.y + lineHeight / 2;
    var i, ilen;

    if (helpers$1.isArray(text)) {
      for (i = 0, ilen = text.length; i < ilen; ++i) {
        ctx.fillText(text[i], position.x, y);
        y += lineHeight;
      }
    } else {
      ctx.fillText(text, position.x, y);
    }
  }

  function adjustPointPositionForLabelHeight(angle, textSize, position) {
    if (angle === 90 || angle === 270) {
      position.y -= textSize.h / 2;
    } else if (angle > 270 || angle < 90) {
      position.y -= textSize.h;
    }
  }

  function drawPointLabels(scale) {
    var ctx = scale.ctx;
    var opts = scale.options;
    var pointLabelOpts = opts.pointLabels;
    var tickBackdropHeight = getTickBackdropHeight(opts);
    var outerDistance = scale.getDistanceFromCenterForValue(opts.ticks.reverse ? scale.min : scale.max);

    var plFont = helpers$1.options._parseFont(pointLabelOpts);

    ctx.save();
    ctx.font = plFont.string;
    ctx.textBaseline = 'middle';

    for (var i = scale.chart.data.labels.length - 1; i >= 0; i--) {
      // Extra pixels out for some label spacing
      var extra = i === 0 ? tickBackdropHeight / 2 : 0;
      var pointLabelPosition = scale.getPointPosition(i, outerDistance + extra + 5); // Keep this in loop since we may support array properties here

      var pointLabelFontColor = valueAtIndexOrDefault$1(pointLabelOpts.fontColor, i, core_defaults.global.defaultFontColor);
      ctx.fillStyle = pointLabelFontColor;
      var angleRadians = scale.getIndexAngle(i);
      var angle = helpers$1.toDegrees(angleRadians);
      ctx.textAlign = getTextAlignForAngle(angle);
      adjustPointPositionForLabelHeight(angle, scale._pointLabelSizes[i], pointLabelPosition);
      fillText(ctx, scale.pointLabels[i], pointLabelPosition, plFont.lineHeight);
    }

    ctx.restore();
  }

  function drawRadiusLine(scale, gridLineOpts, radius, index) {
    var ctx = scale.ctx;
    var circular = gridLineOpts.circular;
    var valueCount = scale.chart.data.labels.length;
    var lineColor = valueAtIndexOrDefault$1(gridLineOpts.color, index - 1);
    var lineWidth = valueAtIndexOrDefault$1(gridLineOpts.lineWidth, index - 1);
    var pointPosition;

    if (!circular && !valueCount || !lineColor || !lineWidth) {
      return;
    }

    ctx.save();
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = lineWidth;

    if (ctx.setLineDash) {
      ctx.setLineDash(gridLineOpts.borderDash || []);
      ctx.lineDashOffset = gridLineOpts.borderDashOffset || 0.0;
    }

    ctx.beginPath();

    if (circular) {
      // Draw circular arcs between the points
      ctx.arc(scale.xCenter, scale.yCenter, radius, 0, Math.PI * 2);
    } else {
      // Draw straight lines connecting each index
      pointPosition = scale.getPointPosition(0, radius);
      ctx.moveTo(pointPosition.x, pointPosition.y);

      for (var i = 1; i < valueCount; i++) {
        pointPosition = scale.getPointPosition(i, radius);
        ctx.lineTo(pointPosition.x, pointPosition.y);
      }
    }

    ctx.closePath();
    ctx.stroke();
    ctx.restore();
  }

  function numberOrZero(param) {
    return helpers$1.isNumber(param) ? param : 0;
  }

  var scale_radialLinear = scale_linearbase.extend({
    setDimensions: function () {
      var me = this; // Set the unconstrained dimension before label rotation

      me.width = me.maxWidth;
      me.height = me.maxHeight;
      me.paddingTop = getTickBackdropHeight(me.options) / 2;
      me.xCenter = Math.floor(me.width / 2);
      me.yCenter = Math.floor((me.height - me.paddingTop) / 2);
      me.drawingArea = Math.min(me.height - me.paddingTop, me.width) / 2;
    },
    determineDataLimits: function () {
      var me = this;
      var chart = me.chart;
      var min = Number.POSITIVE_INFINITY;
      var max = Number.NEGATIVE_INFINITY;
      helpers$1.each(chart.data.datasets, function (dataset, datasetIndex) {
        if (chart.isDatasetVisible(datasetIndex)) {
          var meta = chart.getDatasetMeta(datasetIndex);
          helpers$1.each(dataset.data, function (rawValue, index) {
            var value = +me.getRightValue(rawValue);

            if (isNaN(value) || meta.data[index].hidden) {
              return;
            }

            min = Math.min(value, min);
            max = Math.max(value, max);
          });
        }
      });
      me.min = min === Number.POSITIVE_INFINITY ? 0 : min;
      me.max = max === Number.NEGATIVE_INFINITY ? 0 : max; // Common base implementation to handle ticks.min, ticks.max, ticks.beginAtZero

      me.handleTickRangeOptions();
    },
    // Returns the maximum number of ticks based on the scale dimension
    _computeTickLimit: function () {
      return Math.ceil(this.drawingArea / getTickBackdropHeight(this.options));
    },
    convertTicksToLabels: function () {
      var me = this;
      scale_linearbase.prototype.convertTicksToLabels.call(me); // Point labels

      me.pointLabels = me.chart.data.labels.map(function () {
        var label = helpers$1.callback(me.options.pointLabels.callback, arguments, me);
        return label || label === 0 ? label : '';
      });
    },
    getLabelForIndex: function (index, datasetIndex) {
      return +this.getRightValue(this.chart.data.datasets[datasetIndex].data[index]);
    },
    fit: function () {
      var me = this;
      var opts = me.options;

      if (opts.display && opts.pointLabels.display) {
        fitWithPointLabels(me);
      } else {
        me.setCenterPoint(0, 0, 0, 0);
      }
    },

    /**
     * Set radius reductions and determine new radius and center point
     * @private
     */
    setReductions: function (largestPossibleRadius, furthestLimits, furthestAngles) {
      var me = this;
      var radiusReductionLeft = furthestLimits.l / Math.sin(furthestAngles.l);
      var radiusReductionRight = Math.max(furthestLimits.r - me.width, 0) / Math.sin(furthestAngles.r);
      var radiusReductionTop = -furthestLimits.t / Math.cos(furthestAngles.t);
      var radiusReductionBottom = -Math.max(furthestLimits.b - (me.height - me.paddingTop), 0) / Math.cos(furthestAngles.b);
      radiusReductionLeft = numberOrZero(radiusReductionLeft);
      radiusReductionRight = numberOrZero(radiusReductionRight);
      radiusReductionTop = numberOrZero(radiusReductionTop);
      radiusReductionBottom = numberOrZero(radiusReductionBottom);
      me.drawingArea = Math.min(Math.floor(largestPossibleRadius - (radiusReductionLeft + radiusReductionRight) / 2), Math.floor(largestPossibleRadius - (radiusReductionTop + radiusReductionBottom) / 2));
      me.setCenterPoint(radiusReductionLeft, radiusReductionRight, radiusReductionTop, radiusReductionBottom);
    },
    setCenterPoint: function (leftMovement, rightMovement, topMovement, bottomMovement) {
      var me = this;
      var maxRight = me.width - rightMovement - me.drawingArea;
      var maxLeft = leftMovement + me.drawingArea;
      var maxTop = topMovement + me.drawingArea;
      var maxBottom = me.height - me.paddingTop - bottomMovement - me.drawingArea;
      me.xCenter = Math.floor((maxLeft + maxRight) / 2 + me.left);
      me.yCenter = Math.floor((maxTop + maxBottom) / 2 + me.top + me.paddingTop);
    },
    getIndexAngle: function (index) {
      var chart = this.chart;
      var angleMultiplier = 360 / chart.data.labels.length;
      var options = chart.options || {};
      var startAngle = options.startAngle || 0; // Start from the top instead of right, so remove a quarter of the circle

      var angle = (index * angleMultiplier + startAngle) % 360;
      return (angle < 0 ? angle + 360 : angle) * Math.PI * 2 / 360;
    },
    getDistanceFromCenterForValue: function (value) {
      var me = this;

      if (helpers$1.isNullOrUndef(value)) {
        return NaN;
      } // Take into account half font size + the yPadding of the top value


      var scalingFactor = me.drawingArea / (me.max - me.min);

      if (me.options.ticks.reverse) {
        return (me.max - value) * scalingFactor;
      }

      return (value - me.min) * scalingFactor;
    },
    getPointPosition: function (index, distanceFromCenter) {
      var me = this;
      var thisAngle = me.getIndexAngle(index) - Math.PI / 2;
      return {
        x: Math.cos(thisAngle) * distanceFromCenter + me.xCenter,
        y: Math.sin(thisAngle) * distanceFromCenter + me.yCenter
      };
    },
    getPointPositionForValue: function (index, value) {
      return this.getPointPosition(index, this.getDistanceFromCenterForValue(value));
    },
    getBasePosition: function (index) {
      var me = this;
      var min = me.min;
      var max = me.max;
      return me.getPointPositionForValue(index || 0, me.beginAtZero ? 0 : min < 0 && max < 0 ? max : min > 0 && max > 0 ? min : 0);
    },

    /**
     * @private
     */
    _drawGrid: function () {
      var me = this;
      var ctx = me.ctx;
      var opts = me.options;
      var gridLineOpts = opts.gridLines;
      var angleLineOpts = opts.angleLines;
      var lineWidth = valueOrDefault$c(angleLineOpts.lineWidth, gridLineOpts.lineWidth);
      var lineColor = valueOrDefault$c(angleLineOpts.color, gridLineOpts.color);
      var i, offset, position;

      if (opts.pointLabels.display) {
        drawPointLabels(me);
      }

      if (gridLineOpts.display) {
        helpers$1.each(me.ticks, function (label, index) {
          if (index !== 0) {
            offset = me.getDistanceFromCenterForValue(me.ticksAsNumbers[index]);
            drawRadiusLine(me, gridLineOpts, offset, index);
          }
        });
      }

      if (angleLineOpts.display && lineWidth && lineColor) {
        ctx.save();
        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = lineColor;

        if (ctx.setLineDash) {
          ctx.setLineDash(resolve$4([angleLineOpts.borderDash, gridLineOpts.borderDash, []]));
          ctx.lineDashOffset = resolve$4([angleLineOpts.borderDashOffset, gridLineOpts.borderDashOffset, 0.0]);
        }

        for (i = me.chart.data.labels.length - 1; i >= 0; i--) {
          offset = me.getDistanceFromCenterForValue(opts.ticks.reverse ? me.min : me.max);
          position = me.getPointPosition(i, offset);
          ctx.beginPath();
          ctx.moveTo(me.xCenter, me.yCenter);
          ctx.lineTo(position.x, position.y);
          ctx.stroke();
        }

        ctx.restore();
      }
    },

    /**
     * @private
     */
    _drawLabels: function () {
      var me = this;
      var ctx = me.ctx;
      var opts = me.options;
      var tickOpts = opts.ticks;

      if (!tickOpts.display) {
        return;
      }

      var startAngle = me.getIndexAngle(0);

      var tickFont = helpers$1.options._parseFont(tickOpts);

      var tickFontColor = valueOrDefault$c(tickOpts.fontColor, core_defaults.global.defaultFontColor);
      var offset, width;
      ctx.save();
      ctx.font = tickFont.string;
      ctx.translate(me.xCenter, me.yCenter);
      ctx.rotate(startAngle);
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      helpers$1.each(me.ticks, function (label, index) {
        if (index === 0 && !tickOpts.reverse) {
          return;
        }

        offset = me.getDistanceFromCenterForValue(me.ticksAsNumbers[index]);

        if (tickOpts.showLabelBackdrop) {
          width = ctx.measureText(label).width;
          ctx.fillStyle = tickOpts.backdropColor;
          ctx.fillRect(-width / 2 - tickOpts.backdropPaddingX, -offset - tickFont.size / 2 - tickOpts.backdropPaddingY, width + tickOpts.backdropPaddingX * 2, tickFont.size + tickOpts.backdropPaddingY * 2);
        }

        ctx.fillStyle = tickFontColor;
        ctx.fillText(label, 0, -offset);
      });
      ctx.restore();
    },

    /**
     * @private
     */
    _drawTitle: helpers$1.noop
  }); // INTERNAL: static default options, registered in src/index.js

  var _defaults$3 = defaultConfig$3;
  scale_radialLinear._defaults = _defaults$3;
  var deprecated$1 = helpers$1._deprecated;
  var resolve$5 = helpers$1.options.resolve;
  var valueOrDefault$d = helpers$1.valueOrDefault; // Integer constants are from the ES6 spec.

  var MIN_INTEGER = Number.MIN_SAFE_INTEGER || -9007199254740991;
  var MAX_INTEGER = Number.MAX_SAFE_INTEGER || 9007199254740991;
  var INTERVALS = {
    millisecond: {
      common: true,
      size: 1,
      steps: 1000
    },
    second: {
      common: true,
      size: 1000,
      steps: 60
    },
    minute: {
      common: true,
      size: 60000,
      steps: 60
    },
    hour: {
      common: true,
      size: 3600000,
      steps: 24
    },
    day: {
      common: true,
      size: 86400000,
      steps: 30
    },
    week: {
      common: false,
      size: 604800000,
      steps: 4
    },
    month: {
      common: true,
      size: 2.628e9,
      steps: 12
    },
    quarter: {
      common: false,
      size: 7.884e9,
      steps: 4
    },
    year: {
      common: true,
      size: 3.154e10
    }
  };
  var UNITS = Object.keys(INTERVALS);

  function sorter(a, b) {
    return a - b;
  }

  function arrayUnique(items) {
    var hash = {};
    var out = [];
    var i, ilen, item;

    for (i = 0, ilen = items.length; i < ilen; ++i) {
      item = items[i];

      if (!hash[item]) {
        hash[item] = true;
        out.push(item);
      }
    }

    return out;
  }

  function getMin(options) {
    return helpers$1.valueOrDefault(options.time.min, options.ticks.min);
  }

  function getMax(options) {
    return helpers$1.valueOrDefault(options.time.max, options.ticks.max);
  }
  /**
   * Returns an array of {time, pos} objects used to interpolate a specific `time` or position
   * (`pos`) on the scale, by searching entries before and after the requested value. `pos` is
   * a decimal between 0 and 1: 0 being the start of the scale (left or top) and 1 the other
   * extremity (left + width or top + height). Note that it would be more optimized to directly
   * store pre-computed pixels, but the scale dimensions are not guaranteed at the time we need
   * to create the lookup table. The table ALWAYS contains at least two items: min and max.
   *
   * @param {number[]} timestamps - timestamps sorted from lowest to highest.
   * @param {string} distribution - If 'linear', timestamps will be spread linearly along the min
   * and max range, so basically, the table will contains only two items: {min, 0} and {max, 1}.
   * If 'series', timestamps will be positioned at the same distance from each other. In this
   * case, only timestamps that break the time linearity are registered, meaning that in the
   * best case, all timestamps are linear, the table contains only min and max.
   */


  function buildLookupTable(timestamps, min, max, distribution) {
    if (distribution === 'linear' || !timestamps.length) {
      return [{
        time: min,
        pos: 0
      }, {
        time: max,
        pos: 1
      }];
    }

    var table = [];
    var items = [min];
    var i, ilen, prev, curr, next;

    for (i = 0, ilen = timestamps.length; i < ilen; ++i) {
      curr = timestamps[i];

      if (curr > min && curr < max) {
        items.push(curr);
      }
    }

    items.push(max);

    for (i = 0, ilen = items.length; i < ilen; ++i) {
      next = items[i + 1];
      prev = items[i - 1];
      curr = items[i]; // only add points that breaks the scale linearity

      if (prev === undefined || next === undefined || Math.round((next + prev) / 2) !== curr) {
        table.push({
          time: curr,
          pos: i / (ilen - 1)
        });
      }
    }

    return table;
  } // @see adapted from https://www.anujgakhar.com/2014/03/01/binary-search-in-javascript/


  function lookup(table, key, value) {
    var lo = 0;
    var hi = table.length - 1;
    var mid, i0, i1;

    while (lo >= 0 && lo <= hi) {
      mid = lo + hi >> 1;
      i0 = table[mid - 1] || null;
      i1 = table[mid];

      if (!i0) {
        // given value is outside table (before first item)
        return {
          lo: null,
          hi: i1
        };
      } else if (i1[key] < value) {
        lo = mid + 1;
      } else if (i0[key] > value) {
        hi = mid - 1;
      } else {
        return {
          lo: i0,
          hi: i1
        };
      }
    } // given value is outside table (after last item)


    return {
      lo: i1,
      hi: null
    };
  }
  /**
   * Linearly interpolates the given source `value` using the table items `skey` values and
   * returns the associated `tkey` value. For example, interpolate(table, 'time', 42, 'pos')
   * returns the position for a timestamp equal to 42. If value is out of bounds, values at
   * index [0, 1] or [n - 1, n] are used for the interpolation.
   */


  function interpolate$1(table, skey, sval, tkey) {
    var range = lookup(table, skey, sval); // Note: the lookup table ALWAYS contains at least 2 items (min and max)

    var prev = !range.lo ? table[0] : !range.hi ? table[table.length - 2] : range.lo;
    var next = !range.lo ? table[1] : !range.hi ? table[table.length - 1] : range.hi;
    var span = next[skey] - prev[skey];
    var ratio = span ? (sval - prev[skey]) / span : 0;
    var offset = (next[tkey] - prev[tkey]) * ratio;
    return prev[tkey] + offset;
  }

  function toTimestamp(scale, input) {
    var adapter = scale._adapter;
    var options = scale.options.time;
    var parser = options.parser;
    var format = parser || options.format;
    var value = input;

    if (typeof parser === 'function') {
      value = parser(value);
    } // Only parse if its not a timestamp already


    if (!helpers$1.isFinite(value)) {
      value = typeof format === 'string' ? adapter.parse(value, format) : adapter.parse(value);
    }

    if (value !== null) {
      return +value;
    } // Labels are in an incompatible format and no `parser` has been provided.
    // The user might still use the deprecated `format` option for parsing.


    if (!parser && typeof format === 'function') {
      value = format(input); // `format` could return something else than a timestamp, if so, parse it

      if (!helpers$1.isFinite(value)) {
        value = adapter.parse(value);
      }
    }

    return value;
  }

  function parse(scale, input) {
    if (helpers$1.isNullOrUndef(input)) {
      return null;
    }

    var options = scale.options.time;
    var value = toTimestamp(scale, scale.getRightValue(input));

    if (value === null) {
      return value;
    }

    if (options.round) {
      value = +scale._adapter.startOf(value, options.round);
    }

    return value;
  }
  /**
   * Figures out what unit results in an appropriate number of auto-generated ticks
   */


  function determineUnitForAutoTicks(minUnit, min, max, capacity) {
    var ilen = UNITS.length;
    var i, interval, factor;

    for (i = UNITS.indexOf(minUnit); i < ilen - 1; ++i) {
      interval = INTERVALS[UNITS[i]];
      factor = interval.steps ? interval.steps : MAX_INTEGER;

      if (interval.common && Math.ceil((max - min) / (factor * interval.size)) <= capacity) {
        return UNITS[i];
      }
    }

    return UNITS[ilen - 1];
  }
  /**
   * Figures out what unit to format a set of ticks with
   */


  function determineUnitForFormatting(scale, numTicks, minUnit, min, max) {
    var i, unit;

    for (i = UNITS.length - 1; i >= UNITS.indexOf(minUnit); i--) {
      unit = UNITS[i];

      if (INTERVALS[unit].common && scale._adapter.diff(max, min, unit) >= numTicks - 1) {
        return unit;
      }
    }

    return UNITS[minUnit ? UNITS.indexOf(minUnit) : 0];
  }

  function determineMajorUnit(unit) {
    for (var i = UNITS.indexOf(unit) + 1, ilen = UNITS.length; i < ilen; ++i) {
      if (INTERVALS[UNITS[i]].common) {
        return UNITS[i];
      }
    }
  }
  /**
   * Generates a maximum of `capacity` timestamps between min and max, rounded to the
   * `minor` unit using the given scale time `options`.
   * Important: this method can return ticks outside the min and max range, it's the
   * responsibility of the calling code to clamp values if needed.
   */


  function generate(scale, min, max, capacity) {
    var adapter = scale._adapter;
    var options = scale.options;
    var timeOpts = options.time;
    var minor = timeOpts.unit || determineUnitForAutoTicks(timeOpts.minUnit, min, max, capacity);
    var stepSize = resolve$5([timeOpts.stepSize, timeOpts.unitStepSize, 1]);
    var weekday = minor === 'week' ? timeOpts.isoWeekday : false;
    var first = min;
    var ticks = [];
    var time; // For 'week' unit, handle the first day of week option

    if (weekday) {
      first = +adapter.startOf(first, 'isoWeek', weekday);
    } // Align first ticks on unit


    first = +adapter.startOf(first, weekday ? 'day' : minor); // Prevent browser from freezing in case user options request millions of milliseconds

    if (adapter.diff(max, min, minor) > 100000 * stepSize) {
      throw min + ' and ' + max + ' are too far apart with stepSize of ' + stepSize + ' ' + minor;
    }

    for (time = first; time < max; time = +adapter.add(time, stepSize, minor)) {
      ticks.push(time);
    }

    if (time === max || options.bounds === 'ticks') {
      ticks.push(time);
    }

    return ticks;
  }
  /**
   * Returns the start and end offsets from edges in the form of {start, end}
   * where each value is a relative width to the scale and ranges between 0 and 1.
   * They add extra margins on the both sides by scaling down the original scale.
   * Offsets are added when the `offset` option is true.
   */


  function computeOffsets(table, ticks, min, max, options) {
    var start = 0;
    var end = 0;
    var first, last;

    if (options.offset && ticks.length) {
      first = interpolate$1(table, 'time', ticks[0], 'pos');

      if (ticks.length === 1) {
        start = 1 - first;
      } else {
        start = (interpolate$1(table, 'time', ticks[1], 'pos') - first) / 2;
      }

      last = interpolate$1(table, 'time', ticks[ticks.length - 1], 'pos');

      if (ticks.length === 1) {
        end = last;
      } else {
        end = (last - interpolate$1(table, 'time', ticks[ticks.length - 2], 'pos')) / 2;
      }
    }

    return {
      start: start,
      end: end,
      factor: 1 / (start + 1 + end)
    };
  }

  function setMajorTicks(scale, ticks, map, majorUnit) {
    var adapter = scale._adapter;
    var first = +adapter.startOf(ticks[0].value, majorUnit);
    var last = ticks[ticks.length - 1].value;
    var major, index;

    for (major = first; major <= last; major = +adapter.add(major, 1, majorUnit)) {
      index = map[major];

      if (index >= 0) {
        ticks[index].major = true;
      }
    }

    return ticks;
  }

  function ticksFromTimestamps(scale, values, majorUnit) {
    var ticks = [];
    var map = {};
    var ilen = values.length;
    var i, value;

    for (i = 0; i < ilen; ++i) {
      value = values[i];
      map[value] = i;
      ticks.push({
        value: value,
        major: false
      });
    } // We set the major ticks separately from the above loop because calling startOf for every tick
    // is expensive when there is a large number of ticks


    return ilen === 0 || !majorUnit ? ticks : setMajorTicks(scale, ticks, map, majorUnit);
  }

  var defaultConfig$4 = {
    position: 'bottom',

    /**
     * Data distribution along the scale:
     * - 'linear': data are spread according to their time (distances can vary),
     * - 'series': data are spread at the same distance from each other.
     * @see https://github.com/chartjs/Chart.js/pull/4507
     * @since 2.7.0
     */
    distribution: 'linear',

    /**
     * Scale boundary strategy (bypassed by min/max time options)
     * - `data`: make sure data are fully visible, ticks outside are removed
     * - `ticks`: make sure ticks are fully visible, data outside are truncated
     * @see https://github.com/chartjs/Chart.js/pull/4556
     * @since 2.7.0
     */
    bounds: 'data',
    adapters: {},
    time: {
      parser: false,
      // false == a pattern string from https://momentjs.com/docs/#/parsing/string-format/ or a custom callback that converts its argument to a moment
      unit: false,
      // false == automatic or override with week, month, year, etc.
      round: false,
      // none, or override with week, month, year, etc.
      displayFormat: false,
      // DEPRECATED
      isoWeekday: false,
      // override week start day - see https://momentjs.com/docs/#/get-set/iso-weekday/
      minUnit: 'millisecond',
      displayFormats: {}
    },
    ticks: {
      autoSkip: false,

      /**
       * Ticks generation input values:
       * - 'auto': generates "optimal" ticks based on scale size and time options.
       * - 'data': generates ticks from data (including labels from data {t|x|y} objects).
       * - 'labels': generates ticks from user given `data.labels` values ONLY.
       * @see https://github.com/chartjs/Chart.js/pull/4507
       * @since 2.7.0
       */
      source: 'auto',
      major: {
        enabled: false
      }
    }
  };
  var scale_time = core_scale.extend({
    initialize: function () {
      this.mergeTicksOptions();
      core_scale.prototype.initialize.call(this);
    },
    update: function () {
      var me = this;
      var options = me.options;
      var time = options.time || (options.time = {});
      var adapter = me._adapter = new core_adapters._date(options.adapters.date); // DEPRECATIONS: output a message only one time per update

      deprecated$1('time scale', time.format, 'time.format', 'time.parser');
      deprecated$1('time scale', time.min, 'time.min', 'ticks.min');
      deprecated$1('time scale', time.max, 'time.max', 'ticks.max'); // Backward compatibility: before introducing adapter, `displayFormats` was
      // supposed to contain *all* unit/string pairs but this can't be resolved
      // when loading the scale (adapters are loaded afterward), so let's populate
      // missing formats on update

      helpers$1.mergeIf(time.displayFormats, adapter.formats());
      return core_scale.prototype.update.apply(me, arguments);
    },

    /**
     * Allows data to be referenced via 't' attribute
     */
    getRightValue: function (rawValue) {
      if (rawValue && rawValue.t !== undefined) {
        rawValue = rawValue.t;
      }

      return core_scale.prototype.getRightValue.call(this, rawValue);
    },
    determineDataLimits: function () {
      var me = this;
      var chart = me.chart;
      var adapter = me._adapter;
      var options = me.options;
      var unit = options.time.unit || 'day';
      var min = MAX_INTEGER;
      var max = MIN_INTEGER;
      var timestamps = [];
      var datasets = [];
      var labels = [];
      var i, j, ilen, jlen, data, timestamp, labelsAdded;

      var dataLabels = me._getLabels();

      for (i = 0, ilen = dataLabels.length; i < ilen; ++i) {
        labels.push(parse(me, dataLabels[i]));
      }

      for (i = 0, ilen = (chart.data.datasets || []).length; i < ilen; ++i) {
        if (chart.isDatasetVisible(i)) {
          data = chart.data.datasets[i].data; // Let's consider that all data have the same format.

          if (helpers$1.isObject(data[0])) {
            datasets[i] = [];

            for (j = 0, jlen = data.length; j < jlen; ++j) {
              timestamp = parse(me, data[j]);
              timestamps.push(timestamp);
              datasets[i][j] = timestamp;
            }
          } else {
            datasets[i] = labels.slice(0);

            if (!labelsAdded) {
              timestamps = timestamps.concat(labels);
              labelsAdded = true;
            }
          }
        } else {
          datasets[i] = [];
        }
      }

      if (labels.length) {
        min = Math.min(min, labels[0]);
        max = Math.max(max, labels[labels.length - 1]);
      }

      if (timestamps.length) {
        timestamps = ilen > 1 ? arrayUnique(timestamps).sort(sorter) : timestamps.sort(sorter);
        min = Math.min(min, timestamps[0]);
        max = Math.max(max, timestamps[timestamps.length - 1]);
      }

      min = parse(me, getMin(options)) || min;
      max = parse(me, getMax(options)) || max; // In case there is no valid min/max, set limits based on unit time option

      min = min === MAX_INTEGER ? +adapter.startOf(Date.now(), unit) : min;
      max = max === MIN_INTEGER ? +adapter.endOf(Date.now(), unit) + 1 : max; // Make sure that max is strictly higher than min (required by the lookup table)

      me.min = Math.min(min, max);
      me.max = Math.max(min + 1, max); // PRIVATE

      me._table = [];
      me._timestamps = {
        data: timestamps,
        datasets: datasets,
        labels: labels
      };
    },
    buildTicks: function () {
      var me = this;
      var min = me.min;
      var max = me.max;
      var options = me.options;
      var tickOpts = options.ticks;
      var timeOpts = options.time;
      var timestamps = me._timestamps;
      var ticks = [];
      var capacity = me.getLabelCapacity(min);
      var source = tickOpts.source;
      var distribution = options.distribution;
      var i, ilen, timestamp;

      if (source === 'data' || source === 'auto' && distribution === 'series') {
        timestamps = timestamps.data;
      } else if (source === 'labels') {
        timestamps = timestamps.labels;
      } else {
        timestamps = generate(me, min, max, capacity);
      }

      if (options.bounds === 'ticks' && timestamps.length) {
        min = timestamps[0];
        max = timestamps[timestamps.length - 1];
      } // Enforce limits with user min/max options


      min = parse(me, getMin(options)) || min;
      max = parse(me, getMax(options)) || max; // Remove ticks outside the min/max range

      for (i = 0, ilen = timestamps.length; i < ilen; ++i) {
        timestamp = timestamps[i];

        if (timestamp >= min && timestamp <= max) {
          ticks.push(timestamp);
        }
      }

      me.min = min;
      me.max = max; // PRIVATE
      // determineUnitForFormatting relies on the number of ticks so we don't use it when
      // autoSkip is enabled because we don't yet know what the final number of ticks will be

      me._unit = timeOpts.unit || (tickOpts.autoSkip ? determineUnitForAutoTicks(timeOpts.minUnit, me.min, me.max, capacity) : determineUnitForFormatting(me, ticks.length, timeOpts.minUnit, me.min, me.max));
      me._majorUnit = !tickOpts.major.enabled || me._unit === 'year' ? undefined : determineMajorUnit(me._unit);
      me._table = buildLookupTable(me._timestamps.data, min, max, distribution);
      me._offsets = computeOffsets(me._table, ticks, min, max, options);

      if (tickOpts.reverse) {
        ticks.reverse();
      }

      return ticksFromTimestamps(me, ticks, me._majorUnit);
    },
    getLabelForIndex: function (index, datasetIndex) {
      var me = this;
      var adapter = me._adapter;
      var data = me.chart.data;
      var timeOpts = me.options.time;
      var label = data.labels && index < data.labels.length ? data.labels[index] : '';
      var value = data.datasets[datasetIndex].data[index];

      if (helpers$1.isObject(value)) {
        label = me.getRightValue(value);
      }

      if (timeOpts.tooltipFormat) {
        return adapter.format(toTimestamp(me, label), timeOpts.tooltipFormat);
      }

      if (typeof label === 'string') {
        return label;
      }

      return adapter.format(toTimestamp(me, label), timeOpts.displayFormats.datetime);
    },

    /**
     * Function to format an individual tick mark
     * @private
     */
    tickFormatFunction: function (time, index, ticks, format) {
      var me = this;
      var adapter = me._adapter;
      var options = me.options;
      var formats = options.time.displayFormats;
      var minorFormat = formats[me._unit];
      var majorUnit = me._majorUnit;
      var majorFormat = formats[majorUnit];
      var tick = ticks[index];
      var tickOpts = options.ticks;
      var major = majorUnit && majorFormat && tick && tick.major;
      var label = adapter.format(time, format ? format : major ? majorFormat : minorFormat);
      var nestedTickOpts = major ? tickOpts.major : tickOpts.minor;
      var formatter = resolve$5([nestedTickOpts.callback, nestedTickOpts.userCallback, tickOpts.callback, tickOpts.userCallback]);
      return formatter ? formatter(label, index, ticks) : label;
    },
    convertTicksToLabels: function (ticks) {
      var labels = [];
      var i, ilen;

      for (i = 0, ilen = ticks.length; i < ilen; ++i) {
        labels.push(this.tickFormatFunction(ticks[i].value, i, ticks));
      }

      return labels;
    },

    /**
     * @private
     */
    getPixelForOffset: function (time) {
      var me = this;
      var offsets = me._offsets;
      var pos = interpolate$1(me._table, 'time', time, 'pos');
      return me.getPixelForDecimal((offsets.start + pos) * offsets.factor);
    },
    getPixelForValue: function (value, index, datasetIndex) {
      var me = this;
      var time = null;

      if (index !== undefined && datasetIndex !== undefined) {
        time = me._timestamps.datasets[datasetIndex][index];
      }

      if (time === null) {
        time = parse(me, value);
      }

      if (time !== null) {
        return me.getPixelForOffset(time);
      }
    },
    getPixelForTick: function (index) {
      var ticks = this.getTicks();
      return index >= 0 && index < ticks.length ? this.getPixelForOffset(ticks[index].value) : null;
    },
    getValueForPixel: function (pixel) {
      var me = this;
      var offsets = me._offsets;
      var pos = me.getDecimalForPixel(pixel) / offsets.factor - offsets.end;
      var time = interpolate$1(me._table, 'pos', pos, 'time'); // DEPRECATION, we should return time directly

      return me._adapter._create(time);
    },

    /**
     * @private
     */
    _getLabelSize: function (label) {
      var me = this;
      var ticksOpts = me.options.ticks;
      var tickLabelWidth = me.ctx.measureText(label).width;
      var angle = helpers$1.toRadians(me.isHorizontal() ? ticksOpts.maxRotation : ticksOpts.minRotation);
      var cosRotation = Math.cos(angle);
      var sinRotation = Math.sin(angle);
      var tickFontSize = valueOrDefault$d(ticksOpts.fontSize, core_defaults.global.defaultFontSize);
      return {
        w: tickLabelWidth * cosRotation + tickFontSize * sinRotation,
        h: tickLabelWidth * sinRotation + tickFontSize * cosRotation
      };
    },

    /**
     * Crude approximation of what the label width might be
     * @private
     */
    getLabelWidth: function (label) {
      return this._getLabelSize(label).w;
    },

    /**
     * @private
     */
    getLabelCapacity: function (exampleTime) {
      var me = this;
      var timeOpts = me.options.time;
      var displayFormats = timeOpts.displayFormats; // pick the longest format (milliseconds) for guestimation

      var format = displayFormats[timeOpts.unit] || displayFormats.millisecond;
      var exampleLabel = me.tickFormatFunction(exampleTime, 0, ticksFromTimestamps(me, [exampleTime], me._majorUnit), format);

      var size = me._getLabelSize(exampleLabel);

      var capacity = Math.floor(me.isHorizontal() ? me.width / size.w : me.height / size.h);

      if (me.options.offset) {
        capacity--;
      }

      return capacity > 0 ? capacity : 1;
    }
  }); // INTERNAL: static default options, registered in src/index.js

  var _defaults$4 = defaultConfig$4;
  scale_time._defaults = _defaults$4;
  var scales = {
    category: scale_category,
    linear: scale_linear,
    logarithmic: scale_logarithmic,
    radialLinear: scale_radialLinear,
    time: scale_time
  };
  var FORMATS = {
    datetime: 'MMM D, YYYY, h:mm:ss a',
    millisecond: 'h:mm:ss.SSS a',
    second: 'h:mm:ss a',
    minute: 'h:mm a',
    hour: 'hA',
    day: 'MMM D',
    week: 'll',
    month: 'MMM YYYY',
    quarter: '[Q]Q - YYYY',
    year: 'YYYY'
  };

  core_adapters._date.override(typeof moment === 'function' ? {
    _id: 'moment',
    // DEBUG ONLY
    formats: function () {
      return FORMATS;
    },
    parse: function (value, format) {
      if (typeof value === 'string' && typeof format === 'string') {
        value = moment(value, format);
      } else if (!(value instanceof moment)) {
        value = moment(value);
      }

      return value.isValid() ? value.valueOf() : null;
    },
    format: function (time, format) {
      return moment(time).format(format);
    },
    add: function (time, amount, unit) {
      return moment(time).add(amount, unit).valueOf();
    },
    diff: function (max, min, unit) {
      return moment(max).diff(moment(min), unit);
    },
    startOf: function (time, unit, weekday) {
      time = moment(time);

      if (unit === 'isoWeek') {
        return time.isoWeekday(weekday).valueOf();
      }

      return time.startOf(unit).valueOf();
    },
    endOf: function (time, unit) {
      return moment(time).endOf(unit).valueOf();
    },
    // DEPRECATIONS

    /**
     * Provided for backward compatibility with scale.getValueForPixel().
     * @deprecated since version 2.8.0
     * @todo remove at version 3
     * @private
     */
    _create: function (time) {
      return moment(time);
    }
  } : {});

  core_defaults._set('global', {
    plugins: {
      filler: {
        propagate: true
      }
    }
  });

  var mappers = {
    dataset: function (source) {
      var index = source.fill;
      var chart = source.chart;
      var meta = chart.getDatasetMeta(index);
      var visible = meta && chart.isDatasetVisible(index);
      var points = visible && meta.dataset._children || [];
      var length = points.length || 0;
      return !length ? null : function (point, i) {
        return i < length && points[i]._view || null;
      };
    },
    boundary: function (source) {
      var boundary = source.boundary;
      var x = boundary ? boundary.x : null;
      var y = boundary ? boundary.y : null;

      if (helpers$1.isArray(boundary)) {
        return function (point, i) {
          return boundary[i];
        };
      }

      return function (point) {
        return {
          x: x === null ? point.x : x,
          y: y === null ? point.y : y
        };
      };
    }
  }; // @todo if (fill[0] === '#')

  function decodeFill(el, index, count) {
    var model = el._model || {};
    var fill = model.fill;
    var target;

    if (fill === undefined) {
      fill = !!model.backgroundColor;
    }

    if (fill === false || fill === null) {
      return false;
    }

    if (fill === true) {
      return 'origin';
    }

    target = parseFloat(fill, 10);

    if (isFinite(target) && Math.floor(target) === target) {
      if (fill[0] === '-' || fill[0] === '+') {
        target = index + target;
      }

      if (target === index || target < 0 || target >= count) {
        return false;
      }

      return target;
    }

    switch (fill) {
      // compatibility
      case 'bottom':
        return 'start';

      case 'top':
        return 'end';

      case 'zero':
        return 'origin';
      // supported boundaries

      case 'origin':
      case 'start':
      case 'end':
        return fill;
      // invalid fill values

      default:
        return false;
    }
  }

  function computeLinearBoundary(source) {
    var model = source.el._model || {};
    var scale = source.el._scale || {};
    var fill = source.fill;
    var target = null;
    var horizontal;

    if (isFinite(fill)) {
      return null;
    } // Backward compatibility: until v3, we still need to support boundary values set on
    // the model (scaleTop, scaleBottom and scaleZero) because some external plugins and
    // controllers might still use it (e.g. the Smith chart).


    if (fill === 'start') {
      target = model.scaleBottom === undefined ? scale.bottom : model.scaleBottom;
    } else if (fill === 'end') {
      target = model.scaleTop === undefined ? scale.top : model.scaleTop;
    } else if (model.scaleZero !== undefined) {
      target = model.scaleZero;
    } else if (scale.getBasePixel) {
      target = scale.getBasePixel();
    }

    if (target !== undefined && target !== null) {
      if (target.x !== undefined && target.y !== undefined) {
        return target;
      }

      if (helpers$1.isFinite(target)) {
        horizontal = scale.isHorizontal();
        return {
          x: horizontal ? target : null,
          y: horizontal ? null : target
        };
      }
    }

    return null;
  }

  function computeCircularBoundary(source) {
    var scale = source.el._scale;
    var options = scale.options;
    var length = scale.chart.data.labels.length;
    var fill = source.fill;
    var target = [];
    var start, end, center, i, point;

    if (!length) {
      return null;
    }

    start = options.ticks.reverse ? scale.max : scale.min;
    end = options.ticks.reverse ? scale.min : scale.max;
    center = scale.getPointPositionForValue(0, start);

    for (i = 0; i < length; ++i) {
      point = fill === 'start' || fill === 'end' ? scale.getPointPositionForValue(i, fill === 'start' ? start : end) : scale.getBasePosition(i);

      if (options.gridLines.circular) {
        point.cx = center.x;
        point.cy = center.y;
        point.angle = scale.getIndexAngle(i) - Math.PI / 2;
      }

      target.push(point);
    }

    return target;
  }

  function computeBoundary(source) {
    var scale = source.el._scale || {};

    if (scale.getPointPositionForValue) {
      return computeCircularBoundary(source);
    }

    return computeLinearBoundary(source);
  }

  function resolveTarget(sources, index, propagate) {
    var source = sources[index];
    var fill = source.fill;
    var visited = [index];
    var target;

    if (!propagate) {
      return fill;
    }

    while (fill !== false && visited.indexOf(fill) === -1) {
      if (!isFinite(fill)) {
        return fill;
      }

      target = sources[fill];

      if (!target) {
        return false;
      }

      if (target.visible) {
        return fill;
      }

      visited.push(fill);
      fill = target.fill;
    }

    return false;
  }

  function createMapper(source) {
    var fill = source.fill;
    var type = 'dataset';

    if (fill === false) {
      return null;
    }

    if (!isFinite(fill)) {
      type = 'boundary';
    }

    return mappers[type](source);
  }

  function isDrawable(point) {
    return point && !point.skip;
  }

  function drawArea(ctx, curve0, curve1, len0, len1) {
    var i, cx, cy, r;

    if (!len0 || !len1) {
      return;
    } // building first area curve (normal)


    ctx.moveTo(curve0[0].x, curve0[0].y);

    for (i = 1; i < len0; ++i) {
      helpers$1.canvas.lineTo(ctx, curve0[i - 1], curve0[i]);
    }

    if (curve1[0].angle !== undefined) {
      cx = curve1[0].cx;
      cy = curve1[0].cy;
      r = Math.sqrt(Math.pow(curve1[0].x - cx, 2) + Math.pow(curve1[0].y - cy, 2));

      for (i = len1 - 1; i > 0; --i) {
        ctx.arc(cx, cy, r, curve1[i].angle, curve1[i - 1].angle, true);
      }

      return;
    } // joining the two area curves


    ctx.lineTo(curve1[len1 - 1].x, curve1[len1 - 1].y); // building opposite area curve (reverse)

    for (i = len1 - 1; i > 0; --i) {
      helpers$1.canvas.lineTo(ctx, curve1[i], curve1[i - 1], true);
    }
  }

  function doFill(ctx, points, mapper, view, color, loop) {
    var count = points.length;
    var span = view.spanGaps;
    var curve0 = [];
    var curve1 = [];
    var len0 = 0;
    var len1 = 0;
    var i, ilen, index, p0, p1, d0, d1, loopOffset;
    ctx.beginPath();

    for (i = 0, ilen = count; i < ilen; ++i) {
      index = i % count;
      p0 = points[index]._view;
      p1 = mapper(p0, index, view);
      d0 = isDrawable(p0);
      d1 = isDrawable(p1);

      if (loop && loopOffset === undefined && d0) {
        loopOffset = i + 1;
        ilen = count + loopOffset;
      }

      if (d0 && d1) {
        len0 = curve0.push(p0);
        len1 = curve1.push(p1);
      } else if (len0 && len1) {
        if (!span) {
          drawArea(ctx, curve0, curve1, len0, len1);
          len0 = len1 = 0;
          curve0 = [];
          curve1 = [];
        } else {
          if (d0) {
            curve0.push(p0);
          }

          if (d1) {
            curve1.push(p1);
          }
        }
      }
    }

    drawArea(ctx, curve0, curve1, len0, len1);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
  }

  var plugin_filler = {
    id: 'filler',
    afterDatasetsUpdate: function (chart, options) {
      var count = (chart.data.datasets || []).length;
      var propagate = options.propagate;
      var sources = [];
      var meta, i, el, source;

      for (i = 0; i < count; ++i) {
        meta = chart.getDatasetMeta(i);
        el = meta.dataset;
        source = null;

        if (el && el._model && el instanceof elements.Line) {
          source = {
            visible: chart.isDatasetVisible(i),
            fill: decodeFill(el, i, count),
            chart: chart,
            el: el
          };
        }

        meta.$filler = source;
        sources.push(source);
      }

      for (i = 0; i < count; ++i) {
        source = sources[i];

        if (!source) {
          continue;
        }

        source.fill = resolveTarget(sources, i, propagate);
        source.boundary = computeBoundary(source);
        source.mapper = createMapper(source);
      }
    },
    beforeDatasetsDraw: function (chart) {
      var metasets = chart._getSortedVisibleDatasetMetas();

      var ctx = chart.ctx;
      var meta, i, el, view, points, mapper, color;

      for (i = metasets.length - 1; i >= 0; --i) {
        meta = metasets[i].$filler;

        if (!meta || !meta.visible) {
          continue;
        }

        el = meta.el;
        view = el._view;
        points = el._children || [];
        mapper = meta.mapper;
        color = view.backgroundColor || core_defaults.global.defaultColor;

        if (mapper && color && points.length) {
          helpers$1.canvas.clipArea(ctx, chart.chartArea);
          doFill(ctx, points, mapper, view, color, el._loop);
          helpers$1.canvas.unclipArea(ctx);
        }
      }
    }
  };
  var getRtlHelper$1 = helpers$1.rtl.getRtlAdapter;
  var noop$1 = helpers$1.noop;
  var valueOrDefault$e = helpers$1.valueOrDefault;

  core_defaults._set('global', {
    legend: {
      display: true,
      position: 'top',
      align: 'center',
      fullWidth: true,
      reverse: false,
      weight: 1000,
      // a callback that will handle
      onClick: function (e, legendItem) {
        var index = legendItem.datasetIndex;
        var ci = this.chart;
        var meta = ci.getDatasetMeta(index); // See controller.isDatasetVisible comment

        meta.hidden = meta.hidden === null ? !ci.data.datasets[index].hidden : null; // We hid a dataset ... rerender the chart

        ci.update();
      },
      onHover: null,
      onLeave: null,
      labels: {
        boxWidth: 40,
        padding: 10,
        // Generates labels shown in the legend
        // Valid properties to return:
        // text : text to display
        // fillStyle : fill of coloured box
        // strokeStyle: stroke of coloured box
        // hidden : if this legend item refers to a hidden item
        // lineCap : cap style for line
        // lineDash
        // lineDashOffset :
        // lineJoin :
        // lineWidth :
        generateLabels: function (chart) {
          var datasets = chart.data.datasets;
          var options = chart.options.legend || {};
          var usePointStyle = options.labels && options.labels.usePointStyle;
          return chart._getSortedDatasetMetas().map(function (meta) {
            var style = meta.controller.getStyle(usePointStyle ? 0 : undefined);
            return {
              text: datasets[meta.index].label,
              fillStyle: style.backgroundColor,
              hidden: !chart.isDatasetVisible(meta.index),
              lineCap: style.borderCapStyle,
              lineDash: style.borderDash,
              lineDashOffset: style.borderDashOffset,
              lineJoin: style.borderJoinStyle,
              lineWidth: style.borderWidth,
              strokeStyle: style.borderColor,
              pointStyle: style.pointStyle,
              rotation: style.rotation,
              // Below is extra data used for toggling the datasets
              datasetIndex: meta.index
            };
          }, this);
        }
      }
    },
    legendCallback: function (chart) {
      var list = document.createElement('ul');
      var datasets = chart.data.datasets;
      var i, ilen, listItem, listItemSpan;
      list.setAttribute('class', chart.id + '-legend');

      for (i = 0, ilen = datasets.length; i < ilen; i++) {
        listItem = list.appendChild(document.createElement('li'));
        listItemSpan = listItem.appendChild(document.createElement('span'));
        listItemSpan.style.backgroundColor = datasets[i].backgroundColor;

        if (datasets[i].label) {
          listItem.appendChild(document.createTextNode(datasets[i].label));
        }
      }

      return list.outerHTML;
    }
  });
  /**
   * Helper function to get the box width based on the usePointStyle option
   * @param {object} labelopts - the label options on the legend
   * @param {number} fontSize - the label font size
   * @return {number} width of the color box area
   */


  function getBoxWidth(labelOpts, fontSize) {
    return labelOpts.usePointStyle && labelOpts.boxWidth > fontSize ? fontSize : labelOpts.boxWidth;
  }
  /**
   * IMPORTANT: this class is exposed publicly as Chart.Legend, backward compatibility required!
   */


  var Legend = core_element.extend({
    initialize: function (config) {
      var me = this;
      helpers$1.extend(me, config); // Contains hit boxes for each dataset (in dataset order)

      me.legendHitBoxes = [];
      /**
      	 * @private
      	 */

      me._hoveredItem = null; // Are we in doughnut mode which has a different data type

      me.doughnutMode = false;
    },
    // These methods are ordered by lifecycle. Utilities then follow.
    // Any function defined here is inherited by all legend types.
    // Any function can be extended by the legend type
    beforeUpdate: noop$1,
    update: function (maxWidth, maxHeight, margins) {
      var me = this; // Update Lifecycle - Probably don't want to ever extend or overwrite this function ;)

      me.beforeUpdate(); // Absorb the master measurements

      me.maxWidth = maxWidth;
      me.maxHeight = maxHeight;
      me.margins = margins; // Dimensions

      me.beforeSetDimensions();
      me.setDimensions();
      me.afterSetDimensions(); // Labels

      me.beforeBuildLabels();
      me.buildLabels();
      me.afterBuildLabels(); // Fit

      me.beforeFit();
      me.fit();
      me.afterFit(); //

      me.afterUpdate();
      return me.minSize;
    },
    afterUpdate: noop$1,
    //
    beforeSetDimensions: noop$1,
    setDimensions: function () {
      var me = this; // Set the unconstrained dimension before label rotation

      if (me.isHorizontal()) {
        // Reset position before calculating rotation
        me.width = me.maxWidth;
        me.left = 0;
        me.right = me.width;
      } else {
        me.height = me.maxHeight; // Reset position before calculating rotation

        me.top = 0;
        me.bottom = me.height;
      } // Reset padding


      me.paddingLeft = 0;
      me.paddingTop = 0;
      me.paddingRight = 0;
      me.paddingBottom = 0; // Reset minSize

      me.minSize = {
        width: 0,
        height: 0
      };
    },
    afterSetDimensions: noop$1,
    //
    beforeBuildLabels: noop$1,
    buildLabels: function () {
      var me = this;
      var labelOpts = me.options.labels || {};
      var legendItems = helpers$1.callback(labelOpts.generateLabels, [me.chart], me) || [];

      if (labelOpts.filter) {
        legendItems = legendItems.filter(function (item) {
          return labelOpts.filter(item, me.chart.data);
        });
      }

      if (me.options.reverse) {
        legendItems.reverse();
      }

      me.legendItems = legendItems;
    },
    afterBuildLabels: noop$1,
    //
    beforeFit: noop$1,
    fit: function () {
      var me = this;
      var opts = me.options;
      var labelOpts = opts.labels;
      var display = opts.display;
      var ctx = me.ctx;

      var labelFont = helpers$1.options._parseFont(labelOpts);

      var fontSize = labelFont.size; // Reset hit boxes

      var hitboxes = me.legendHitBoxes = [];
      var minSize = me.minSize;
      var isHorizontal = me.isHorizontal();

      if (isHorizontal) {
        minSize.width = me.maxWidth; // fill all the width

        minSize.height = display ? 10 : 0;
      } else {
        minSize.width = display ? 10 : 0;
        minSize.height = me.maxHeight; // fill all the height
      } // Increase sizes here


      if (!display) {
        me.width = minSize.width = me.height = minSize.height = 0;
        return;
      }

      ctx.font = labelFont.string;

      if (isHorizontal) {
        // Labels
        // Width of each line of legend boxes. Labels wrap onto multiple lines when there are too many to fit on one
        var lineWidths = me.lineWidths = [0];
        var totalHeight = 0;
        ctx.textAlign = 'left';
        ctx.textBaseline = 'middle';
        helpers$1.each(me.legendItems, function (legendItem, i) {
          var boxWidth = getBoxWidth(labelOpts, fontSize);
          var width = boxWidth + fontSize / 2 + ctx.measureText(legendItem.text).width;

          if (i === 0 || lineWidths[lineWidths.length - 1] + width + 2 * labelOpts.padding > minSize.width) {
            totalHeight += fontSize + labelOpts.padding;
            lineWidths[lineWidths.length - (i > 0 ? 0 : 1)] = 0;
          } // Store the hitbox width and height here. Final position will be updated in `draw`


          hitboxes[i] = {
            left: 0,
            top: 0,
            width: width,
            height: fontSize
          };
          lineWidths[lineWidths.length - 1] += width + labelOpts.padding;
        });
        minSize.height += totalHeight;
      } else {
        var vPadding = labelOpts.padding;
        var columnWidths = me.columnWidths = [];
        var columnHeights = me.columnHeights = [];
        var totalWidth = labelOpts.padding;
        var currentColWidth = 0;
        var currentColHeight = 0;
        helpers$1.each(me.legendItems, function (legendItem, i) {
          var boxWidth = getBoxWidth(labelOpts, fontSize);
          var itemWidth = boxWidth + fontSize / 2 + ctx.measureText(legendItem.text).width; // If too tall, go to new column

          if (i > 0 && currentColHeight + fontSize + 2 * vPadding > minSize.height) {
            totalWidth += currentColWidth + labelOpts.padding;
            columnWidths.push(currentColWidth); // previous column width

            columnHeights.push(currentColHeight);
            currentColWidth = 0;
            currentColHeight = 0;
          } // Get max width


          currentColWidth = Math.max(currentColWidth, itemWidth);
          currentColHeight += fontSize + vPadding; // Store the hitbox width and height here. Final position will be updated in `draw`

          hitboxes[i] = {
            left: 0,
            top: 0,
            width: itemWidth,
            height: fontSize
          };
        });
        totalWidth += currentColWidth;
        columnWidths.push(currentColWidth);
        columnHeights.push(currentColHeight);
        minSize.width += totalWidth;
      }

      me.width = minSize.width;
      me.height = minSize.height;
    },
    afterFit: noop$1,
    // Shared Methods
    isHorizontal: function () {
      return this.options.position === 'top' || this.options.position === 'bottom';
    },
    // Actually draw the legend on the canvas
    draw: function () {
      var me = this;
      var opts = me.options;
      var labelOpts = opts.labels;
      var globalDefaults = core_defaults.global;
      var defaultColor = globalDefaults.defaultColor;
      var lineDefault = globalDefaults.elements.line;
      var legendHeight = me.height;
      var columnHeights = me.columnHeights;
      var legendWidth = me.width;
      var lineWidths = me.lineWidths;

      if (!opts.display) {
        return;
      }

      var rtlHelper = getRtlHelper$1(opts.rtl, me.left, me.minSize.width);
      var ctx = me.ctx;
      var fontColor = valueOrDefault$e(labelOpts.fontColor, globalDefaults.defaultFontColor);

      var labelFont = helpers$1.options._parseFont(labelOpts);

      var fontSize = labelFont.size;
      var cursor; // Canvas setup

      ctx.textAlign = rtlHelper.textAlign('left');
      ctx.textBaseline = 'middle';
      ctx.lineWidth = 0.5;
      ctx.strokeStyle = fontColor; // for strikethrough effect

      ctx.fillStyle = fontColor; // render in correct colour

      ctx.font = labelFont.string;
      var boxWidth = getBoxWidth(labelOpts, fontSize);
      var hitboxes = me.legendHitBoxes; // current position

      var drawLegendBox = function (x, y, legendItem) {
        if (isNaN(boxWidth) || boxWidth <= 0) {
          return;
        } // Set the ctx for the box


        ctx.save();
        var lineWidth = valueOrDefault$e(legendItem.lineWidth, lineDefault.borderWidth);
        ctx.fillStyle = valueOrDefault$e(legendItem.fillStyle, defaultColor);
        ctx.lineCap = valueOrDefault$e(legendItem.lineCap, lineDefault.borderCapStyle);
        ctx.lineDashOffset = valueOrDefault$e(legendItem.lineDashOffset, lineDefault.borderDashOffset);
        ctx.lineJoin = valueOrDefault$e(legendItem.lineJoin, lineDefault.borderJoinStyle);
        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = valueOrDefault$e(legendItem.strokeStyle, defaultColor);

        if (ctx.setLineDash) {
          // IE 9 and 10 do not support line dash
          ctx.setLineDash(valueOrDefault$e(legendItem.lineDash, lineDefault.borderDash));
        }

        if (labelOpts && labelOpts.usePointStyle) {
          // Recalculate x and y for drawPoint() because its expecting
          // x and y to be center of figure (instead of top left)
          var radius = boxWidth * Math.SQRT2 / 2;
          var centerX = rtlHelper.xPlus(x, boxWidth / 2);
          var centerY = y + fontSize / 2; // Draw pointStyle as legend symbol

          helpers$1.canvas.drawPoint(ctx, legendItem.pointStyle, radius, centerX, centerY, legendItem.rotation);
        } else {
          // Draw box as legend symbol
          ctx.fillRect(rtlHelper.leftForLtr(x, boxWidth), y, boxWidth, fontSize);

          if (lineWidth !== 0) {
            ctx.strokeRect(rtlHelper.leftForLtr(x, boxWidth), y, boxWidth, fontSize);
          }
        }

        ctx.restore();
      };

      var fillText = function (x, y, legendItem, textWidth) {
        var halfFontSize = fontSize / 2;
        var xLeft = rtlHelper.xPlus(x, boxWidth + halfFontSize);
        var yMiddle = y + halfFontSize;
        ctx.fillText(legendItem.text, xLeft, yMiddle);

        if (legendItem.hidden) {
          // Strikethrough the text if hidden
          ctx.beginPath();
          ctx.lineWidth = 2;
          ctx.moveTo(xLeft, yMiddle);
          ctx.lineTo(rtlHelper.xPlus(xLeft, textWidth), yMiddle);
          ctx.stroke();
        }
      };

      var alignmentOffset = function (dimension, blockSize) {
        switch (opts.align) {
          case 'start':
            return labelOpts.padding;

          case 'end':
            return dimension - blockSize;

          default:
            // center
            return (dimension - blockSize + labelOpts.padding) / 2;
        }
      }; // Horizontal


      var isHorizontal = me.isHorizontal();

      if (isHorizontal) {
        cursor = {
          x: me.left + alignmentOffset(legendWidth, lineWidths[0]),
          y: me.top + labelOpts.padding,
          line: 0
        };
      } else {
        cursor = {
          x: me.left + labelOpts.padding,
          y: me.top + alignmentOffset(legendHeight, columnHeights[0]),
          line: 0
        };
      }

      helpers$1.rtl.overrideTextDirection(me.ctx, opts.textDirection);
      var itemHeight = fontSize + labelOpts.padding;
      helpers$1.each(me.legendItems, function (legendItem, i) {
        var textWidth = ctx.measureText(legendItem.text).width;
        var width = boxWidth + fontSize / 2 + textWidth;
        var x = cursor.x;
        var y = cursor.y;
        rtlHelper.setWidth(me.minSize.width); // Use (me.left + me.minSize.width) and (me.top + me.minSize.height)
        // instead of me.right and me.bottom because me.width and me.height
        // may have been changed since me.minSize was calculated

        if (isHorizontal) {
          if (i > 0 && x + width + labelOpts.padding > me.left + me.minSize.width) {
            y = cursor.y += itemHeight;
            cursor.line++;
            x = cursor.x = me.left + alignmentOffset(legendWidth, lineWidths[cursor.line]);
          }
        } else if (i > 0 && y + itemHeight > me.top + me.minSize.height) {
          x = cursor.x = x + me.columnWidths[cursor.line] + labelOpts.padding;
          cursor.line++;
          y = cursor.y = me.top + alignmentOffset(legendHeight, columnHeights[cursor.line]);
        }

        var realX = rtlHelper.x(x);
        drawLegendBox(realX, y, legendItem);
        hitboxes[i].left = rtlHelper.leftForLtr(realX, hitboxes[i].width);
        hitboxes[i].top = y; // Fill the actual label

        fillText(realX, y, legendItem, textWidth);

        if (isHorizontal) {
          cursor.x += width + labelOpts.padding;
        } else {
          cursor.y += itemHeight;
        }
      });
      helpers$1.rtl.restoreTextDirection(me.ctx, opts.textDirection);
    },

    /**
     * @private
     */
    _getLegendItemAt: function (x, y) {
      var me = this;
      var i, hitBox, lh;

      if (x >= me.left && x <= me.right && y >= me.top && y <= me.bottom) {
        // See if we are touching one of the dataset boxes
        lh = me.legendHitBoxes;

        for (i = 0; i < lh.length; ++i) {
          hitBox = lh[i];

          if (x >= hitBox.left && x <= hitBox.left + hitBox.width && y >= hitBox.top && y <= hitBox.top + hitBox.height) {
            // Touching an element
            return me.legendItems[i];
          }
        }
      }

      return null;
    },

    /**
     * Handle an event
     * @private
     * @param {IEvent} event - The event to handle
     */
    handleEvent: function (e) {
      var me = this;
      var opts = me.options;
      var type = e.type === 'mouseup' ? 'click' : e.type;
      var hoveredItem;

      if (type === 'mousemove') {
        if (!opts.onHover && !opts.onLeave) {
          return;
        }
      } else if (type === 'click') {
        if (!opts.onClick) {
          return;
        }
      } else {
        return;
      } // Chart event already has relative position in it


      hoveredItem = me._getLegendItemAt(e.x, e.y);

      if (type === 'click') {
        if (hoveredItem && opts.onClick) {
          // use e.native for backwards compatibility
          opts.onClick.call(me, e.native, hoveredItem);
        }
      } else {
        if (opts.onLeave && hoveredItem !== me._hoveredItem) {
          if (me._hoveredItem) {
            opts.onLeave.call(me, e.native, me._hoveredItem);
          }

          me._hoveredItem = hoveredItem;
        }

        if (opts.onHover && hoveredItem) {
          // use e.native for backwards compatibility
          opts.onHover.call(me, e.native, hoveredItem);
        }
      }
    }
  });

  function createNewLegendAndAttach(chart, legendOpts) {
    var legend = new Legend({
      ctx: chart.ctx,
      options: legendOpts,
      chart: chart
    });
    core_layouts.configure(chart, legend, legendOpts);
    core_layouts.addBox(chart, legend);
    chart.legend = legend;
  }

  var plugin_legend = {
    id: 'legend',

    /**
     * Backward compatibility: since 2.1.5, the legend is registered as a plugin, making
     * Chart.Legend obsolete. To avoid a breaking change, we export the Legend as part of
     * the plugin, which one will be re-exposed in the chart.js file.
     * https://github.com/chartjs/Chart.js/pull/2640
     * @private
     */
    _element: Legend,
    beforeInit: function (chart) {
      var legendOpts = chart.options.legend;

      if (legendOpts) {
        createNewLegendAndAttach(chart, legendOpts);
      }
    },
    beforeUpdate: function (chart) {
      var legendOpts = chart.options.legend;
      var legend = chart.legend;

      if (legendOpts) {
        helpers$1.mergeIf(legendOpts, core_defaults.global.legend);

        if (legend) {
          core_layouts.configure(chart, legend, legendOpts);
          legend.options = legendOpts;
        } else {
          createNewLegendAndAttach(chart, legendOpts);
        }
      } else if (legend) {
        core_layouts.removeBox(chart, legend);
        delete chart.legend;
      }
    },
    afterEvent: function (chart, e) {
      var legend = chart.legend;

      if (legend) {
        legend.handleEvent(e);
      }
    }
  };
  var noop$2 = helpers$1.noop;

  core_defaults._set('global', {
    title: {
      display: false,
      fontStyle: 'bold',
      fullWidth: true,
      padding: 10,
      position: 'top',
      text: '',
      weight: 2000 // by default greater than legend (1000) to be above

    }
  });
  /**
   * IMPORTANT: this class is exposed publicly as Chart.Legend, backward compatibility required!
   */


  var Title = core_element.extend({
    initialize: function (config) {
      var me = this;
      helpers$1.extend(me, config); // Contains hit boxes for each dataset (in dataset order)

      me.legendHitBoxes = [];
    },
    // These methods are ordered by lifecycle. Utilities then follow.
    beforeUpdate: noop$2,
    update: function (maxWidth, maxHeight, margins) {
      var me = this; // Update Lifecycle - Probably don't want to ever extend or overwrite this function ;)

      me.beforeUpdate(); // Absorb the master measurements

      me.maxWidth = maxWidth;
      me.maxHeight = maxHeight;
      me.margins = margins; // Dimensions

      me.beforeSetDimensions();
      me.setDimensions();
      me.afterSetDimensions(); // Labels

      me.beforeBuildLabels();
      me.buildLabels();
      me.afterBuildLabels(); // Fit

      me.beforeFit();
      me.fit();
      me.afterFit(); //

      me.afterUpdate();
      return me.minSize;
    },
    afterUpdate: noop$2,
    //
    beforeSetDimensions: noop$2,
    setDimensions: function () {
      var me = this; // Set the unconstrained dimension before label rotation

      if (me.isHorizontal()) {
        // Reset position before calculating rotation
        me.width = me.maxWidth;
        me.left = 0;
        me.right = me.width;
      } else {
        me.height = me.maxHeight; // Reset position before calculating rotation

        me.top = 0;
        me.bottom = me.height;
      } // Reset padding


      me.paddingLeft = 0;
      me.paddingTop = 0;
      me.paddingRight = 0;
      me.paddingBottom = 0; // Reset minSize

      me.minSize = {
        width: 0,
        height: 0
      };
    },
    afterSetDimensions: noop$2,
    //
    beforeBuildLabels: noop$2,
    buildLabels: noop$2,
    afterBuildLabels: noop$2,
    //
    beforeFit: noop$2,
    fit: function () {
      var me = this;
      var opts = me.options;
      var minSize = me.minSize = {};
      var isHorizontal = me.isHorizontal();
      var lineCount, textSize;

      if (!opts.display) {
        me.width = minSize.width = me.height = minSize.height = 0;
        return;
      }

      lineCount = helpers$1.isArray(opts.text) ? opts.text.length : 1;
      textSize = lineCount * helpers$1.options._parseFont(opts).lineHeight + opts.padding * 2;
      me.width = minSize.width = isHorizontal ? me.maxWidth : textSize;
      me.height = minSize.height = isHorizontal ? textSize : me.maxHeight;
    },
    afterFit: noop$2,
    // Shared Methods
    isHorizontal: function () {
      var pos = this.options.position;
      return pos === 'top' || pos === 'bottom';
    },
    // Actually draw the title block on the canvas
    draw: function () {
      var me = this;
      var ctx = me.ctx;
      var opts = me.options;

      if (!opts.display) {
        return;
      }

      var fontOpts = helpers$1.options._parseFont(opts);

      var lineHeight = fontOpts.lineHeight;
      var offset = lineHeight / 2 + opts.padding;
      var rotation = 0;
      var top = me.top;
      var left = me.left;
      var bottom = me.bottom;
      var right = me.right;
      var maxWidth, titleX, titleY;
      ctx.fillStyle = helpers$1.valueOrDefault(opts.fontColor, core_defaults.global.defaultFontColor); // render in correct colour

      ctx.font = fontOpts.string; // Horizontal

      if (me.isHorizontal()) {
        titleX = left + (right - left) / 2; // midpoint of the width

        titleY = top + offset;
        maxWidth = right - left;
      } else {
        titleX = opts.position === 'left' ? left + offset : right - offset;
        titleY = top + (bottom - top) / 2;
        maxWidth = bottom - top;
        rotation = Math.PI * (opts.position === 'left' ? -0.5 : 0.5);
      }

      ctx.save();
      ctx.translate(titleX, titleY);
      ctx.rotate(rotation);
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      var text = opts.text;

      if (helpers$1.isArray(text)) {
        var y = 0;

        for (var i = 0; i < text.length; ++i) {
          ctx.fillText(text[i], 0, y, maxWidth);
          y += lineHeight;
        }
      } else {
        ctx.fillText(text, 0, 0, maxWidth);
      }

      ctx.restore();
    }
  });

  function createNewTitleBlockAndAttach(chart, titleOpts) {
    var title = new Title({
      ctx: chart.ctx,
      options: titleOpts,
      chart: chart
    });
    core_layouts.configure(chart, title, titleOpts);
    core_layouts.addBox(chart, title);
    chart.titleBlock = title;
  }

  var plugin_title = {
    id: 'title',

    /**
     * Backward compatibility: since 2.1.5, the title is registered as a plugin, making
     * Chart.Title obsolete. To avoid a breaking change, we export the Title as part of
     * the plugin, which one will be re-exposed in the chart.js file.
     * https://github.com/chartjs/Chart.js/pull/2640
     * @private
     */
    _element: Title,
    beforeInit: function (chart) {
      var titleOpts = chart.options.title;

      if (titleOpts) {
        createNewTitleBlockAndAttach(chart, titleOpts);
      }
    },
    beforeUpdate: function (chart) {
      var titleOpts = chart.options.title;
      var titleBlock = chart.titleBlock;

      if (titleOpts) {
        helpers$1.mergeIf(titleOpts, core_defaults.global.title);

        if (titleBlock) {
          core_layouts.configure(chart, titleBlock, titleOpts);
          titleBlock.options = titleOpts;
        } else {
          createNewTitleBlockAndAttach(chart, titleOpts);
        }
      } else if (titleBlock) {
        core_layouts.removeBox(chart, titleBlock);
        delete chart.titleBlock;
      }
    }
  };
  var plugins = {};
  var filler = plugin_filler;
  var legend = plugin_legend;
  var title = plugin_title;
  plugins.filler = filler;
  plugins.legend = legend;
  plugins.title = title;
  /**
   * @namespace Chart
   */

  core_controller.helpers = helpers$1; // @todo dispatch these helpers into appropriated helpers/helpers.* file and write unit tests!

  core_helpers();
  core_controller._adapters = core_adapters;
  core_controller.Animation = core_animation;
  core_controller.animationService = core_animations;
  core_controller.controllers = controllers;
  core_controller.DatasetController = core_datasetController;
  core_controller.defaults = core_defaults;
  core_controller.Element = core_element;
  core_controller.elements = elements;
  core_controller.Interaction = core_interaction;
  core_controller.layouts = core_layouts;
  core_controller.platform = platform;
  core_controller.plugins = core_plugins;
  core_controller.Scale = core_scale;
  core_controller.scaleService = core_scaleService;
  core_controller.Ticks = core_ticks;
  core_controller.Tooltip = core_tooltip; // Register built-in scales

  core_controller.helpers.each(scales, function (scale, type) {
    core_controller.scaleService.registerScaleType(type, scale, scale._defaults);
  }); // Load to register built-in adapters (as side effects)
  // Loading built-in plugins

  for (var k in plugins) {
    if (plugins.hasOwnProperty(k)) {
      core_controller.plugins.register(plugins[k]);
    }
  }

  core_controller.platform.initialize();
  var src = core_controller;

  if (typeof window !== 'undefined') {
    window.Chart = core_controller;
  } // DEPRECATIONS

  /**
   * Provided for backward compatibility, not available anymore
   * @namespace Chart.Chart
   * @deprecated since version 2.8.0
   * @todo remove at version 3
   * @private
   */


  core_controller.Chart = core_controller;
  /**
   * Provided for backward compatibility, not available anymore
   * @namespace Chart.Legend
   * @deprecated since version 2.1.5
   * @todo remove at version 3
   * @private
   */

  core_controller.Legend = plugins.legend._element;
  /**
   * Provided for backward compatibility, not available anymore
   * @namespace Chart.Title
   * @deprecated since version 2.1.5
   * @todo remove at version 3
   * @private
   */

  core_controller.Title = plugins.title._element;
  /**
   * Provided for backward compatibility, use Chart.plugins instead
   * @namespace Chart.pluginService
   * @deprecated since version 2.1.5
   * @todo remove at version 3
   * @private
   */

  core_controller.pluginService = core_controller.plugins;
  /**
   * Provided for backward compatibility, inheriting from Chart.PlugingBase has no
   * effect, instead simply create/register plugins via plain JavaScript objects.
   * @interface Chart.PluginBase
   * @deprecated since version 2.5.0
   * @todo remove at version 3
   * @private
   */

  core_controller.PluginBase = core_controller.Element.extend({});
  /**
   * Provided for backward compatibility, use Chart.helpers.canvas instead.
   * @namespace Chart.canvasHelpers
   * @deprecated since version 2.6.0
   * @todo remove at version 3
   * @private
   */

  core_controller.canvasHelpers = core_controller.helpers.canvas;
  /**
   * Provided for backward compatibility, use Chart.layouts instead.
   * @namespace Chart.layoutService
   * @deprecated since version 2.7.3
   * @todo remove at version 3
   * @private
   */

  core_controller.layoutService = core_controller.layouts;
  /**
   * Provided for backward compatibility, not available anymore.
   * @namespace Chart.LinearScaleBase
   * @deprecated since version 2.8
   * @todo remove at version 3
   * @private
   */

  core_controller.LinearScaleBase = scale_linearbase;
  /**
   * Provided for backward compatibility, instead we should create a new Chart
   * by setting the type in the config (`new Chart(id, {type: '{chart-type}'}`).
   * @deprecated since version 2.8.0
   * @todo remove at version 3
   */

  core_controller.helpers.each(['Bar', 'Bubble', 'Doughnut', 'Line', 'PolarArea', 'Radar', 'Scatter'], function (klass) {
    core_controller[klass] = function (ctx, cfg) {
      return new core_controller(ctx, core_controller.helpers.merge(cfg || {}, {
        type: klass.charAt(0).toLowerCase() + klass.slice(1)
      }));
    };
  });
  return src;
});

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var runtime = function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.

  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }

  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function (obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.

    generator._invoke = makeInvokeMethod(innerFn, self, context);
    return generator;
  }

  exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.

  var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.


  var IteratorPrototype = {};

  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"); // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  exports.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }

    genFun.prototype = Object.create(Gp);
    return genFun;
  }; // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.


  exports.awrap = function (arg) {
    return {
      __await: arg
    };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;

        if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    } // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).


    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);

  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };

  exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.

  exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;
    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        } // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;

        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);

          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;
        var record = tryCatch(innerFn, self, context);

        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted; // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.

          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  } // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.


  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

      context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.

      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }
    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    } // The delegate iterator is finished, so forget it and continue with
    // the outer generator.


    context.delegate = null;
    return ContinueSentinel;
  } // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.


  defineIteratorMethods(Gp);
  define(Gp, toStringTagSymbol, "Generator"); // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.

  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{
      tryLoc: "root"
    }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    keys.reverse(); // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.

    return function next() {
      while (keys.length) {
        var key = keys.pop();

        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      } // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.


      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];

      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;
          return next;
        };

        return next.next = next;
      }
    } // Return an iterator with no values.


    return {
      next: doneResult
    };
  }

  exports.values = values;

  function doneResult() {
    return {
      value: undefined,
      done: true
    };
  }

  Context.prototype = {
    constructor: Context,
    reset: function (skipTempReset) {
      this.prev = 0;
      this.next = 0; // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.

      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;
      this.method = "next";
      this.arg = undefined;
      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },
    stop: function () {
      this.done = true;
      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;

      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },
    dispatchException: function (exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;

      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },
    abrupt: function (type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },
    complete: function (record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },
    finish: function (finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },
    "catch": function (tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      } // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.


      throw new Error("illegal catch attempt");
    },
    delegateYield: function (iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  }; // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.

  return exports;
}( // If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
 true ? module.exports : undefined);

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}

/***/ }),

/***/ 2:
/*!*******************************************************!*\
  !*** multi @babel/polyfill ./assets/js/donutChart.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! @babel/polyfill */"./node_modules/@babel/polyfill/lib/index.js");
module.exports = __webpack_require__(/*! C:\Users\ParkSeungyeon\project-1\assets\js\donutChart.js */"./assets/js/donutChart.js");


/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

if(typeof moment === 'undefined') {var e = new Error("Cannot find module 'moment'"); e.code = 'MODULE_NOT_FOUND'; throw e;}
module.exports = moment;

/***/ })

/******/ });
//# sourceMappingURL=donutChart.js.map