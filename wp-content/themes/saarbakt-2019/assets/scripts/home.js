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
/******/ 	return __webpack_require__(__webpack_require__.s = "./source/scripts/home.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./source/scripts/home.js":
/*!********************************!*\
  !*** ./source/scripts/home.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\n/* Specific javascript for the homepage\n/*_______________________________________________________*/\n\n/**\n * Make the news and recipe container equal height\n */\nlet articles = document.querySelectorAll('.sb-frontpage-content__latest article');\nlet highest = 0;\n\nfor (let i = 0; i < articles.length; i++) {\n  if (articles[i].offsetHeight > highest) {\n    highest = articles[i].offsetHeight;\n  }\n}\n\nfor (let i = 0; i < articles.length; i++) {\n  articles[i].style.height = highest + 'px';\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zb3VyY2Uvc2NyaXB0cy9ob21lLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc291cmNlL3NjcmlwdHMvaG9tZS5qcz8wMjkyIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4vKiBTcGVjaWZpYyBqYXZhc2NyaXB0IGZvciB0aGUgaG9tZXBhZ2Vcbi8qX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXyovXG5cbi8qKlxuICogTWFrZSB0aGUgbmV3cyBhbmQgcmVjaXBlIGNvbnRhaW5lciBlcXVhbCBoZWlnaHRcbiAqL1xubGV0IGFydGljbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNiLWZyb250cGFnZS1jb250ZW50X19sYXRlc3QgYXJ0aWNsZScpO1xubGV0IGhpZ2hlc3QgPSAwO1xuXG5mb3IobGV0IGk9MDtpPGFydGljbGVzLmxlbmd0aDtpKyspIHtcblx0aWYoYXJ0aWNsZXNbaV0ub2Zmc2V0SGVpZ2h0ID4gaGlnaGVzdCkge1xuXHRcdGhpZ2hlc3QgPSBhcnRpY2xlc1tpXS5vZmZzZXRIZWlnaHQ7XG5cdH1cbn1cblxuZm9yKGxldCBpPTA7aTxhcnRpY2xlcy5sZW5ndGg7aSsrKSB7XG5cdGFydGljbGVzW2ldLnN0eWxlLmhlaWdodCA9IGhpZ2hlc3QgKyAncHgnO1xufSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFJQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./source/scripts/home.js\n");

/***/ })

/******/ });