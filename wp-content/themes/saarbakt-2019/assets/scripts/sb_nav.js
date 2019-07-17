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
/******/ 	return __webpack_require__(__webpack_require__.s = "./source/scripts/sb_nav.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./source/scripts/helper/HelperFunctions.js":
/*!**************************************************!*\
  !*** ./source/scripts/helper/HelperFunctions.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/*\n * This is a file for functions globally used throughout the\n * entire website. Think about a scroll to animation. Normally\n * we would use jQuery for this, but there's no need if we\n * have our own simple library.\n *----------------------------------------------------------*/\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  /**\n   * Our own scrollTo functionality. This will animate a scroll to a target. The target needs to be a selector you would pass\n   * to a querySelector \"div.container\" for example. This will look for the FIRST element with that name on the page and\n   * scroll to it. The second parameter is how long the scrolling should take. Quite straight forward.\n   */\n  scrollTo: (target, duration) => {\n    let el = document.querySelector(target);\n    let targetPosition = el.getBoundingClientRect().top + window.pageYOffset - 100;\n    let startPosition = window.pageYOffset;\n    let distance = targetPosition - startPosition;\n    let startTime = null;\n\n    const animation = currentTime => {\n      if (startTime === null) {\n        startTime = currentTime;\n      }\n\n      let timeElapsed = currentTime - startTime;\n      let run = ease(timeElapsed, startPosition, distance, duration);\n      window.scrollTo(0, run);\n\n      if (timeElapsed < duration) {\n        requestAnimationFrame(animation);\n      }\n    };\n\n    const ease = (t, b, c, d) => {\n      t /= d / 2;\n\n      if (t < 1) {\n        return c / 2 * t * t * t + b;\n      }\n\n      t -= 2;\n      return c / 2 * (t * t * t + 2) + b;\n    };\n\n    requestAnimationFrame(animation);\n  },\n\n  /**\n   * Use this function to determine wether a click event on a device is a touch or actual mouse click event. Simply execute\n   * the function in an \"addEventListener(_.clickEvent(), () => {})\" and depending on the device it'll return 'click' or \n   * 'touchstart'.\n   */\n  clickEvent: () => {\n    if ('ontouchstart' in document.documentElement !== true) {\n      return 'click';\n    } else {\n      return 'touchend';\n    }\n  },\n\n  /**\n   * Whenever you have an event that fires MANY times per ms (for example scrolling), you can use this throttle function to\n   * limit the amount of time a function fires.\n   */\n  throttle: (fn, threshhold, scope) => {\n    threshhold || (threshhold = 250);\n    var last, deferTimer;\n    return function () {\n      var context = scope || this;\n      var now = +new Date(),\n          args = arguments;\n\n      if (last && now < last + threshhold) {\n        // hold on to it\n        clearTimeout(deferTimer);\n        deferTimer = setTimeout(function () {\n          last = now;\n          fn.apply(context, args);\n        }, threshhold);\n      } else {\n        last = now;\n        fn.apply(context, args);\n      }\n    };\n  },\n\n  /**\n   * Whenever you have a function that you only want to execute after a certain time has passed (for example, if the user resizes their window and on the end of that resize you want\n   * to do something) you can do that with this one. Simply set the function and how long it should wait until the event is done.\n   */\n  debounce: (func, wait, immediate) => {\n    var timeout;\n    return function () {\n      var context = this,\n          args = arguments;\n\n      var later = function () {\n        timeout = null;\n\n        if (!immediate) {\n          func.apply(context, args);\n        }\n      };\n\n      var callNow = immediate && !timeout;\n      clearTimeout(timeout);\n      timeout = setTimeout(later, wait);\n\n      if (callNow) {\n        func.apply(context, args);\n      }\n    };\n  },\n\n  /**\n   * Disable body scrolling (when opening popup for example)\n   */\n  disableBodyScroll: boolean => {\n    boolean ? document.body.classList.add('no-scroll') : document.body.classList.remove('no-scroll');\n  },\n\n  /**\n   * Equalize the heights of an array of items (used in Glide Carousel)\n   */\n  equalizeHeights: (arrayOfItems, config) => {\n    if (config == 'true') {\n      let highestItem = 0;\n\n      for (let i = 0; i < arrayOfItems.length; i++) {\n        if (arrayOfItems[i].clientHeight > highestItem) {\n          highestItem = arrayOfItems[i].clientHeight;\n        }\n      }\n\n      for (let i = 0; i < arrayOfItems.length; i++) {\n        arrayOfItems[i].style.height = highestItem + 'px';\n      }\n    } else {\n      for (let i = 0; i < arrayOfItems.length; i++) {\n        arrayOfItems[i].style.height = Number(config) + 'px';\n      }\n    }\n  },\n\n  createElement(el, classNames, dataAttributeName, dataAttributeValue) {\n    let element = document.createElement(el);\n    element.classList.add(classNames);\n\n    if (dataAttributeName && dataAttributeValue) {\n      element.setAttribute(dataAttributeName, dataAttributeValue);\n    }\n\n    return element;\n  },\n\n  toArray(nodelist) {\n    let arr = []; // eslint-disable-next-line\n\n    for (var i = -1, l = nodelist.length; ++i !== l; arr[i] = nodelist[i]);\n\n    return arr;\n  }\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zb3VyY2Uvc2NyaXB0cy9oZWxwZXIvSGVscGVyRnVuY3Rpb25zLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc291cmNlL3NjcmlwdHMvaGVscGVyL0hlbHBlckZ1bmN0aW9ucy5qcz9jNTZlIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGlzIGEgZmlsZSBmb3IgZnVuY3Rpb25zIGdsb2JhbGx5IHVzZWQgdGhyb3VnaG91dCB0aGVcbiAqIGVudGlyZSB3ZWJzaXRlLiBUaGluayBhYm91dCBhIHNjcm9sbCB0byBhbmltYXRpb24uIE5vcm1hbGx5XG4gKiB3ZSB3b3VsZCB1c2UgalF1ZXJ5IGZvciB0aGlzLCBidXQgdGhlcmUncyBubyBuZWVkIGlmIHdlXG4gKiBoYXZlIG91ciBvd24gc2ltcGxlIGxpYnJhcnkuXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdC8qKlxuXHQgKiBPdXIgb3duIHNjcm9sbFRvIGZ1bmN0aW9uYWxpdHkuIFRoaXMgd2lsbCBhbmltYXRlIGEgc2Nyb2xsIHRvIGEgdGFyZ2V0LiBUaGUgdGFyZ2V0IG5lZWRzIHRvIGJlIGEgc2VsZWN0b3IgeW91IHdvdWxkIHBhc3Ncblx0ICogdG8gYSBxdWVyeVNlbGVjdG9yIFwiZGl2LmNvbnRhaW5lclwiIGZvciBleGFtcGxlLiBUaGlzIHdpbGwgbG9vayBmb3IgdGhlIEZJUlNUIGVsZW1lbnQgd2l0aCB0aGF0IG5hbWUgb24gdGhlIHBhZ2UgYW5kXG5cdCAqIHNjcm9sbCB0byBpdC4gVGhlIHNlY29uZCBwYXJhbWV0ZXIgaXMgaG93IGxvbmcgdGhlIHNjcm9sbGluZyBzaG91bGQgdGFrZS4gUXVpdGUgc3RyYWlnaHQgZm9yd2FyZC5cblx0ICovXG5cdHNjcm9sbFRvOiAodGFyZ2V0LCBkdXJhdGlvbikgPT4ge1xuXHRcdGxldCBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblx0XHRsZXQgdGFyZ2V0UG9zaXRpb24gPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyB3aW5kb3cucGFnZVlPZmZzZXQgLSAxMDA7XG5cdFx0bGV0IHN0YXJ0UG9zaXRpb24gPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG5cdFx0bGV0IGRpc3RhbmNlID0gdGFyZ2V0UG9zaXRpb24gLSBzdGFydFBvc2l0aW9uO1xuXHRcdGxldCBzdGFydFRpbWUgPSBudWxsO1xuXG5cdFx0Y29uc3QgYW5pbWF0aW9uID0gKGN1cnJlbnRUaW1lKSA9PiB7XG5cdFx0XHRpZiAoc3RhcnRUaW1lID09PSBudWxsKSB7XG5cdFx0XHRcdHN0YXJ0VGltZSA9IGN1cnJlbnRUaW1lO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRsZXQgdGltZUVsYXBzZWQgPSBjdXJyZW50VGltZSAtIHN0YXJ0VGltZTtcblx0XHRcdGxldCBydW4gPSBlYXNlKHRpbWVFbGFwc2VkLCBzdGFydFBvc2l0aW9uLCBkaXN0YW5jZSwgZHVyYXRpb24pO1xuXHRcdFx0d2luZG93LnNjcm9sbFRvKDAsIHJ1bik7XG5cdFx0XHRpZiAodGltZUVsYXBzZWQgPCBkdXJhdGlvbikge1xuXHRcdFx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRjb25zdCBlYXNlID0gKHQsIGIsIGMsIGQpID0+IHtcblx0XHRcdHQgLz0gZCAvIDI7XG5cdFx0XHRpZiAodCA8IDEpICB7XG5cdFx0XHRcdHJldHVybiBjIC8gMiAqIHQgKiB0ICogdCArIGI7XG5cdFx0XHR9XG5cdFx0XHR0IC09IDI7XG5cdFx0XHRyZXR1cm4gYyAvIDIgKiAodCAqIHQgKiB0ICsgMikgKyBiO1xuXHRcdH07XG5cblx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uKTtcblx0fSxcblxuXHQvKipcblx0ICogVXNlIHRoaXMgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIHdldGhlciBhIGNsaWNrIGV2ZW50IG9uIGEgZGV2aWNlIGlzIGEgdG91Y2ggb3IgYWN0dWFsIG1vdXNlIGNsaWNrIGV2ZW50LiBTaW1wbHkgZXhlY3V0ZVxuXHQgKiB0aGUgZnVuY3Rpb24gaW4gYW4gXCJhZGRFdmVudExpc3RlbmVyKF8uY2xpY2tFdmVudCgpLCAoKSA9PiB7fSlcIiBhbmQgZGVwZW5kaW5nIG9uIHRoZSBkZXZpY2UgaXQnbGwgcmV0dXJuICdjbGljaycgb3IgXG5cdCAqICd0b3VjaHN0YXJ0Jy5cblx0ICovXG5cdGNsaWNrRXZlbnQ6ICgpID0+IHtcblx0XHRpZiAoJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICE9PSB0cnVlKSB7XG5cdFx0XHRyZXR1cm4gJ2NsaWNrJztcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRyZXR1cm4gJ3RvdWNoZW5kJztcblx0XHR9XG5cdH0sXG5cblx0LyoqXG5cdCAqIFdoZW5ldmVyIHlvdSBoYXZlIGFuIGV2ZW50IHRoYXQgZmlyZXMgTUFOWSB0aW1lcyBwZXIgbXMgKGZvciBleGFtcGxlIHNjcm9sbGluZyksIHlvdSBjYW4gdXNlIHRoaXMgdGhyb3R0bGUgZnVuY3Rpb24gdG9cblx0ICogbGltaXQgdGhlIGFtb3VudCBvZiB0aW1lIGEgZnVuY3Rpb24gZmlyZXMuXG5cdCAqL1xuXHR0aHJvdHRsZTogKGZuLCB0aHJlc2hob2xkLCBzY29wZSkgPT4ge1xuXHRcdHRocmVzaGhvbGQgfHwgKHRocmVzaGhvbGQgPSAyNTApO1xuXHRcdHZhciBsYXN0LFxuXHRcdFx0ZGVmZXJUaW1lcjtcblx0XHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgY29udGV4dCA9IHNjb3BlIHx8IHRoaXM7XG5cblx0XHRcdHZhciBub3cgPSArbmV3IERhdGUsXG5cdFx0XHRcdGFyZ3MgPSBhcmd1bWVudHM7XG5cdFx0XHRpZiAobGFzdCAmJiBub3cgPCBsYXN0ICsgdGhyZXNoaG9sZCkge1xuXHRcdFx0XHQvLyBob2xkIG9uIHRvIGl0XG5cdFx0XHRcdGNsZWFyVGltZW91dChkZWZlclRpbWVyKTtcblx0XHRcdFx0ZGVmZXJUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0bGFzdCA9IG5vdztcblx0XHRcdFx0XHRmbi5hcHBseShjb250ZXh0LCBhcmdzKTtcblx0XHRcdFx0fSwgdGhyZXNoaG9sZCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRsYXN0ID0gbm93O1xuXHRcdFx0XHRmbi5hcHBseShjb250ZXh0LCBhcmdzKTtcblx0XHRcdH1cblx0XHR9O1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBXaGVuZXZlciB5b3UgaGF2ZSBhIGZ1bmN0aW9uIHRoYXQgeW91IG9ubHkgd2FudCB0byBleGVjdXRlIGFmdGVyIGEgY2VydGFpbiB0aW1lIGhhcyBwYXNzZWQgKGZvciBleGFtcGxlLCBpZiB0aGUgdXNlciByZXNpemVzIHRoZWlyIHdpbmRvdyBhbmQgb24gdGhlIGVuZCBvZiB0aGF0IHJlc2l6ZSB5b3Ugd2FudFxuXHQgKiB0byBkbyBzb21ldGhpbmcpIHlvdSBjYW4gZG8gdGhhdCB3aXRoIHRoaXMgb25lLiBTaW1wbHkgc2V0IHRoZSBmdW5jdGlvbiBhbmQgaG93IGxvbmcgaXQgc2hvdWxkIHdhaXQgdW50aWwgdGhlIGV2ZW50IGlzIGRvbmUuXG5cdCAqL1xuXHRkZWJvdW5jZTogKGZ1bmMsIHdhaXQsIGltbWVkaWF0ZSkgPT4ge1xuXHRcdHZhciB0aW1lb3V0O1xuXHRcdHJldHVybiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBjb250ZXh0ID0gdGhpcywgYXJncyA9IGFyZ3VtZW50cztcblx0XHRcdHZhciBsYXRlciA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR0aW1lb3V0ID0gbnVsbDtcblx0XHRcdFx0aWYgKCFpbW1lZGlhdGUpIHtcblx0XHRcdFx0XHRmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpXG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0XHR2YXIgY2FsbE5vdyA9IGltbWVkaWF0ZSAmJiAhdGltZW91dDtcblx0XHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcblx0XHRcdHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcblx0XHRcdGlmIChjYWxsTm93KSB7XG5cdFx0XHRcdGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG5cdFx0XHR9XG5cdFx0fTtcblx0fSxcblxuXHQvKipcblx0ICogRGlzYWJsZSBib2R5IHNjcm9sbGluZyAod2hlbiBvcGVuaW5nIHBvcHVwIGZvciBleGFtcGxlKVxuXHQgKi9cblx0ZGlzYWJsZUJvZHlTY3JvbGw6IChib29sZWFuKSA9PiB7XG5cdFx0Ym9vbGVhbiA/IGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbm8tc2Nyb2xsJykgOiBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ25vLXNjcm9sbCcpO1xuXHR9LFxuXHRcblx0LyoqXG5cdCAqIEVxdWFsaXplIHRoZSBoZWlnaHRzIG9mIGFuIGFycmF5IG9mIGl0ZW1zICh1c2VkIGluIEdsaWRlIENhcm91c2VsKVxuXHQgKi9cblx0ZXF1YWxpemVIZWlnaHRzOiAoYXJyYXlPZkl0ZW1zLCBjb25maWcpID0+IHtcblxuXHRcdGlmKGNvbmZpZyA9PSAndHJ1ZScpIHtcblx0XHRcdGxldCBoaWdoZXN0SXRlbSA9IDA7XG5cblx0XHRcdGZvcihsZXQgaT0wO2k8YXJyYXlPZkl0ZW1zLmxlbmd0aDtpKyspIHtcblx0XHRcdFx0XG5cdFx0XHRcdGlmKGFycmF5T2ZJdGVtc1tpXS5jbGllbnRIZWlnaHQgPiBoaWdoZXN0SXRlbSkge1xuXHRcdFx0XHRcdGhpZ2hlc3RJdGVtID0gYXJyYXlPZkl0ZW1zW2ldLmNsaWVudEhlaWdodDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRmb3IobGV0IGk9MDtpPGFycmF5T2ZJdGVtcy5sZW5ndGg7aSsrKSB7XG5cdFx0XHRcdGFycmF5T2ZJdGVtc1tpXS5zdHlsZS5oZWlnaHQgPSBoaWdoZXN0SXRlbSArICdweCc7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGZvcihsZXQgaT0wO2k8YXJyYXlPZkl0ZW1zLmxlbmd0aDtpKyspIHtcblx0XHRcdFx0YXJyYXlPZkl0ZW1zW2ldLnN0eWxlLmhlaWdodCA9IE51bWJlcihjb25maWcpICsgJ3B4Jztcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cblx0Y3JlYXRlRWxlbWVudChlbCwgY2xhc3NOYW1lcywgZGF0YUF0dHJpYnV0ZU5hbWUsIGRhdGFBdHRyaWJ1dGVWYWx1ZSkge1xuXHRcdGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbCk7XG5cdFx0ZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZXMpO1xuXHRcdGlmKGRhdGFBdHRyaWJ1dGVOYW1lICYmIGRhdGFBdHRyaWJ1dGVWYWx1ZSkge1xuXHRcdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoZGF0YUF0dHJpYnV0ZU5hbWUsIGRhdGFBdHRyaWJ1dGVWYWx1ZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGVsZW1lbnQ7XG5cdH0sXG5cblx0dG9BcnJheShub2RlbGlzdCkge1xuXHRcdGxldCBhcnIgPSBbXTtcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcblx0XHRmb3IodmFyIGk9LTEsbD1ub2RlbGlzdC5sZW5ndGg7KytpIT09bDthcnJbaV09bm9kZWxpc3RbaV0pO1xuXG5cdFx0cmV0dXJuIGFycjtcblx0fVxufSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTs7Ozs7O0FBT0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF2SkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./source/scripts/helper/HelperFunctions.js\n");

/***/ }),

/***/ "./source/scripts/sb_nav.js":
/*!**********************************!*\
  !*** ./source/scripts/sb_nav.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helper_HelperFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper/HelperFunctions */ \"./source/scripts/helper/HelperFunctions.js\");\n\n\nclass SbNav {\n  constructor() {\n    this.navToggle = document.getElementById('sb-nav-toggle');\n    this.menu = document.getElementById('sb-menu');\n    this.body = document.body;\n    this.setListeners();\n  }\n\n  setListeners() {\n    this.navToggle.addEventListener(_helper_HelperFunctions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].clickEvent(), function () {\n      this.body.classList.toggle('menu-open');\n    }.bind(this));\n  }\n\n}\n\nconst InitNavigation = new SbNav();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zb3VyY2Uvc2NyaXB0cy9zYl9uYXYuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zb3VyY2Uvc2NyaXB0cy9zYl9uYXYuanM/OGU5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXyBmcm9tICcuL2hlbHBlci9IZWxwZXJGdW5jdGlvbnMnO1xuXG5jbGFzcyBTYk5hdiB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMubmF2VG9nZ2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NiLW5hdi10b2dnbGUnKTtcblx0XHR0aGlzLm1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2ItbWVudScpO1xuXHRcdHRoaXMuYm9keSA9IGRvY3VtZW50LmJvZHk7XG5cblx0XHR0aGlzLnNldExpc3RlbmVycygpO1xuXHR9XG5cblx0c2V0TGlzdGVuZXJzKCkge1xuXHRcdHRoaXMubmF2VG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoXy5jbGlja0V2ZW50KCksIGZ1bmN0aW9uKCkge1xuXHRcdFx0dGhpcy5ib2R5LmNsYXNzTGlzdC50b2dnbGUoJ21lbnUtb3BlbicpO1xuXHRcdH0uYmluZCh0aGlzKSlcblx0fVxufVxuXG5jb25zdCBJbml0TmF2aWdhdGlvbiA9IG5ldyBTYk5hdigpIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFkQTtBQUNBO0FBZUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./source/scripts/sb_nav.js\n");

/***/ })

/******/ });