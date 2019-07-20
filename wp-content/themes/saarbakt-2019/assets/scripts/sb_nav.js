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
eval("__webpack_require__.r(__webpack_exports__);\n/*\n * This is a file for functions globally used throughout the\n * entire website. Think about a scroll to animation. Normally\n * we would use jQuery for this, but there's no need if we\n * have our own simple library.\n *----------------------------------------------------------*/\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  /**\n   * Our own scrollTo functionality. This will animate a scroll to a target. The target needs to be a selector you would pass\n   * to a querySelector \"div.container\" for example. This will look for the FIRST element with that name on the page and\n   * scroll to it. The second parameter is how long the scrolling should take. Quite straight forward.\n   */\n  scrollTo: (target, duration) => {\n    let el = document.querySelector(target);\n    let targetPosition = el.getBoundingClientRect().top + window.pageYOffset - 100;\n    let startPosition = window.pageYOffset;\n    let distance = targetPosition - startPosition;\n    let startTime = null;\n\n    const animation = currentTime => {\n      if (startTime === null) {\n        startTime = currentTime;\n      }\n\n      let timeElapsed = currentTime - startTime;\n      let run = ease(timeElapsed, startPosition, distance, duration);\n      window.scrollTo(0, run);\n\n      if (timeElapsed < duration) {\n        requestAnimationFrame(animation);\n      }\n    };\n\n    const ease = (t, b, c, d) => {\n      t /= d / 2;\n\n      if (t < 1) {\n        return c / 2 * t * t * t + b;\n      }\n\n      t -= 2;\n      return c / 2 * (t * t * t + 2) + b;\n    };\n\n    requestAnimationFrame(animation);\n  },\n\n  /**\n   * Use this function to determine wether a click event on a device is a touch or actual mouse click event. Simply execute\n   * the function in an \"addEventListener(_.clickEvent(), () => {})\" and depending on the device it'll return 'click' or \n   * 'touchstart'.\n   */\n  clickEvent: () => {\n    if ('ontouchstart' in document.documentElement !== true) {\n      return 'click';\n    } else {\n      return 'touchend';\n    }\n  },\n  onMobile: () => {\n    let isMobile = false;\n\n    if (/(android|bb\\d+|meego).+mobile|avantgo|bada\\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\\-(n|u)|c55\\/|capi|ccwa|cdm\\-|cell|chtm|cldc|cmd\\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\\-s|devi|dica|dmob|do(c|p)o|ds(12|\\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\\-|_)|g1 u|g560|gene|gf\\-5|g\\-mo|go(\\.w|od)|gr(ad|un)|haie|hcit|hd\\-(m|p|t)|hei\\-|hi(pt|ta)|hp( i|ip)|hs\\-c|ht(c(\\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\\-(20|go|ma)|i230|iac( |\\-|\\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\\/)|klon|kpt |kwc\\-|kyo(c|k)|le(no|xi)|lg( g|\\/(k|l|u)|50|54|\\-[a-w])|libw|lynx|m1\\-w|m3ga|m50\\/|ma(te|ui|xo)|mc(01|21|ca)|m\\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\\-2|po(ck|rt|se)|prox|psio|pt\\-g|qa\\-a|qc(07|12|21|32|60|\\-[2-7]|i\\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\\-|oo|p\\-)|sdk\\/|se(c(\\-|0|1)|47|mc|nd|ri)|sgh\\-|shar|sie(\\-|m)|sk\\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\\-|v\\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\\-|tdg\\-|tel(i|m)|tim\\-|t\\-mo|to(pl|sh)|ts(70|m\\-|m3|m5)|tx\\-9|up(\\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\\-|your|zeto|zte\\-/i.test(navigator.userAgent.substr(0, 4))) {\n      isMobile = true;\n    }\n\n    return isMobile;\n  },\n\n  /**\n   * Whenever you have an event that fires MANY times per ms (for example scrolling), you can use this throttle function to\n   * limit the amount of time a function fires.\n   */\n  throttle: (fn, threshhold, scope) => {\n    threshhold || (threshhold = 250);\n    var last, deferTimer;\n    return function () {\n      var context = scope || this;\n      var now = +new Date(),\n          args = arguments;\n\n      if (last && now < last + threshhold) {\n        // hold on to it\n        clearTimeout(deferTimer);\n        deferTimer = setTimeout(function () {\n          last = now;\n          fn.apply(context, args);\n        }, threshhold);\n      } else {\n        last = now;\n        fn.apply(context, args);\n      }\n    };\n  },\n\n  /**\n   * Whenever you have a function that you only want to execute after a certain time has passed (for example, if the user resizes their window and on the end of that resize you want\n   * to do something) you can do that with this one. Simply set the function and how long it should wait until the event is done.\n   */\n  debounce: (func, wait, immediate) => {\n    var timeout;\n    return function () {\n      var context = this,\n          args = arguments;\n\n      var later = function () {\n        timeout = null;\n\n        if (!immediate) {\n          func.apply(context, args);\n        }\n      };\n\n      var callNow = immediate && !timeout;\n      clearTimeout(timeout);\n      timeout = setTimeout(later, wait);\n\n      if (callNow) {\n        func.apply(context, args);\n      }\n    };\n  },\n\n  /**\n   * Disable body scrolling (when opening popup for example)\n   */\n  disableBodyScroll: boolean => {\n    boolean ? document.body.classList.add('no-scroll') : document.body.classList.remove('no-scroll');\n  },\n\n  /**\n   * Equalize the heights of an array of items (used in Glide Carousel)\n   */\n  equalizeHeights: (arrayOfItems, config) => {\n    if (config == 'true') {\n      let highestItem = 0;\n\n      for (let i = 0; i < arrayOfItems.length; i++) {\n        if (arrayOfItems[i].clientHeight > highestItem) {\n          highestItem = arrayOfItems[i].clientHeight;\n        }\n      }\n\n      for (let i = 0; i < arrayOfItems.length; i++) {\n        arrayOfItems[i].style.height = highestItem + 'px';\n      }\n    } else {\n      for (let i = 0; i < arrayOfItems.length; i++) {\n        arrayOfItems[i].style.height = Number(config) + 'px';\n      }\n    }\n  },\n\n  createElement(el, classNames, dataAttributeName, dataAttributeValue) {\n    let element = document.createElement(el);\n    element.classList.add(classNames);\n\n    if (dataAttributeName && dataAttributeValue) {\n      element.setAttribute(dataAttributeName, dataAttributeValue);\n    }\n\n    return element;\n  },\n\n  toArray(nodelist) {\n    let arr = []; // eslint-disable-next-line\n\n    for (var i = -1, l = nodelist.length; ++i !== l; arr[i] = nodelist[i]);\n\n    return arr;\n  }\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zb3VyY2Uvc2NyaXB0cy9oZWxwZXIvSGVscGVyRnVuY3Rpb25zLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc291cmNlL3NjcmlwdHMvaGVscGVyL0hlbHBlckZ1bmN0aW9ucy5qcz9jNTZlIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGlzIGEgZmlsZSBmb3IgZnVuY3Rpb25zIGdsb2JhbGx5IHVzZWQgdGhyb3VnaG91dCB0aGVcbiAqIGVudGlyZSB3ZWJzaXRlLiBUaGluayBhYm91dCBhIHNjcm9sbCB0byBhbmltYXRpb24uIE5vcm1hbGx5XG4gKiB3ZSB3b3VsZCB1c2UgalF1ZXJ5IGZvciB0aGlzLCBidXQgdGhlcmUncyBubyBuZWVkIGlmIHdlXG4gKiBoYXZlIG91ciBvd24gc2ltcGxlIGxpYnJhcnkuXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdC8qKlxuXHQgKiBPdXIgb3duIHNjcm9sbFRvIGZ1bmN0aW9uYWxpdHkuIFRoaXMgd2lsbCBhbmltYXRlIGEgc2Nyb2xsIHRvIGEgdGFyZ2V0LiBUaGUgdGFyZ2V0IG5lZWRzIHRvIGJlIGEgc2VsZWN0b3IgeW91IHdvdWxkIHBhc3Ncblx0ICogdG8gYSBxdWVyeVNlbGVjdG9yIFwiZGl2LmNvbnRhaW5lclwiIGZvciBleGFtcGxlLiBUaGlzIHdpbGwgbG9vayBmb3IgdGhlIEZJUlNUIGVsZW1lbnQgd2l0aCB0aGF0IG5hbWUgb24gdGhlIHBhZ2UgYW5kXG5cdCAqIHNjcm9sbCB0byBpdC4gVGhlIHNlY29uZCBwYXJhbWV0ZXIgaXMgaG93IGxvbmcgdGhlIHNjcm9sbGluZyBzaG91bGQgdGFrZS4gUXVpdGUgc3RyYWlnaHQgZm9yd2FyZC5cblx0ICovXG5cdHNjcm9sbFRvOiAodGFyZ2V0LCBkdXJhdGlvbikgPT4ge1xuXHRcdGxldCBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblx0XHRsZXQgdGFyZ2V0UG9zaXRpb24gPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyB3aW5kb3cucGFnZVlPZmZzZXQgLSAxMDA7XG5cdFx0bGV0IHN0YXJ0UG9zaXRpb24gPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG5cdFx0bGV0IGRpc3RhbmNlID0gdGFyZ2V0UG9zaXRpb24gLSBzdGFydFBvc2l0aW9uO1xuXHRcdGxldCBzdGFydFRpbWUgPSBudWxsO1xuXG5cdFx0Y29uc3QgYW5pbWF0aW9uID0gKGN1cnJlbnRUaW1lKSA9PiB7XG5cdFx0XHRpZiAoc3RhcnRUaW1lID09PSBudWxsKSB7XG5cdFx0XHRcdHN0YXJ0VGltZSA9IGN1cnJlbnRUaW1lO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRsZXQgdGltZUVsYXBzZWQgPSBjdXJyZW50VGltZSAtIHN0YXJ0VGltZTtcblx0XHRcdGxldCBydW4gPSBlYXNlKHRpbWVFbGFwc2VkLCBzdGFydFBvc2l0aW9uLCBkaXN0YW5jZSwgZHVyYXRpb24pO1xuXHRcdFx0d2luZG93LnNjcm9sbFRvKDAsIHJ1bik7XG5cdFx0XHRpZiAodGltZUVsYXBzZWQgPCBkdXJhdGlvbikge1xuXHRcdFx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRjb25zdCBlYXNlID0gKHQsIGIsIGMsIGQpID0+IHtcblx0XHRcdHQgLz0gZCAvIDI7XG5cdFx0XHRpZiAodCA8IDEpICB7XG5cdFx0XHRcdHJldHVybiBjIC8gMiAqIHQgKiB0ICogdCArIGI7XG5cdFx0XHR9XG5cdFx0XHR0IC09IDI7XG5cdFx0XHRyZXR1cm4gYyAvIDIgKiAodCAqIHQgKiB0ICsgMikgKyBiO1xuXHRcdH07XG5cblx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uKTtcblx0fSxcblxuXHQvKipcblx0ICogVXNlIHRoaXMgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIHdldGhlciBhIGNsaWNrIGV2ZW50IG9uIGEgZGV2aWNlIGlzIGEgdG91Y2ggb3IgYWN0dWFsIG1vdXNlIGNsaWNrIGV2ZW50LiBTaW1wbHkgZXhlY3V0ZVxuXHQgKiB0aGUgZnVuY3Rpb24gaW4gYW4gXCJhZGRFdmVudExpc3RlbmVyKF8uY2xpY2tFdmVudCgpLCAoKSA9PiB7fSlcIiBhbmQgZGVwZW5kaW5nIG9uIHRoZSBkZXZpY2UgaXQnbGwgcmV0dXJuICdjbGljaycgb3IgXG5cdCAqICd0b3VjaHN0YXJ0Jy5cblx0ICovXG5cdGNsaWNrRXZlbnQ6ICgpID0+IHtcblx0XHRpZiAoJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICE9PSB0cnVlKSB7XG5cdFx0XHRyZXR1cm4gJ2NsaWNrJztcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRyZXR1cm4gJ3RvdWNoZW5kJztcblx0XHR9XG5cdH0sXG5cblx0b25Nb2JpbGU6ICgpID0+IHtcblx0XHRsZXQgaXNNb2JpbGUgPSBmYWxzZTtcblx0XHRpZigvKGFuZHJvaWR8YmJcXGQrfG1lZWdvKS4rbW9iaWxlfGF2YW50Z298YmFkYVxcL3xibGFja2JlcnJ5fGJsYXplcnxjb21wYWx8ZWxhaW5lfGZlbm5lY3xoaXB0b3B8aWVtb2JpbGV8aXAoaG9uZXxvZCl8aXBhZHxpcmlzfGtpbmRsZXxBbmRyb2lkfFNpbGt8bGdlIHxtYWVtb3xtaWRwfG1tcHxuZXRmcm9udHxvcGVyYSBtKG9ifGluKWl8cGFsbSggb3MpP3xwaG9uZXxwKGl4aXxyZSlcXC98cGx1Y2tlcnxwb2NrZXR8cHNwfHNlcmllcyg0fDYpMHxzeW1iaWFufHRyZW98dXBcXC4oYnJvd3NlcnxsaW5rKXx2b2RhZm9uZXx3YXB8d2luZG93cyAoY2V8cGhvbmUpfHhkYXx4aWluby9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgXG5cdFx0XHR8fCAvMTIwN3w2MzEwfDY1OTB8M2dzb3w0dGhwfDUwWzEtNl1pfDc3MHN8ODAyc3xhIHdhfGFiYWN8YWMoZXJ8b298c1xcLSl8YWkoa298cm4pfGFsKGF2fGNhfGNvKXxhbW9pfGFuKGV4fG55fHl3KXxhcHR1fGFyKGNofGdvKXxhcyh0ZXx1cyl8YXR0d3xhdShkaXxcXC1tfHIgfHMgKXxhdmFufGJlKGNrfGxsfG5xKXxiaShsYnxyZCl8YmwoYWN8YXopfGJyKGV8dil3fGJ1bWJ8YndcXC0obnx1KXxjNTVcXC98Y2FwaXxjY3dhfGNkbVxcLXxjZWxsfGNodG18Y2xkY3xjbWRcXC18Y28obXB8bmQpfGNyYXd8ZGEoaXR8bGx8bmcpfGRidGV8ZGNcXC1zfGRldml8ZGljYXxkbW9ifGRvKGN8cClvfGRzKDEyfFxcLWQpfGVsKDQ5fGFpKXxlbShsMnx1bCl8ZXIoaWN8azApfGVzbDh8ZXooWzQtN10wfG9zfHdhfHplKXxmZXRjfGZseShcXC18Xyl8ZzEgdXxnNTYwfGdlbmV8Z2ZcXC01fGdcXC1tb3xnbyhcXC53fG9kKXxncihhZHx1bil8aGFpZXxoY2l0fGhkXFwtKG18cHx0KXxoZWlcXC18aGkocHR8dGEpfGhwKCBpfGlwKXxoc1xcLWN8aHQoYyhcXC18IHxffGF8Z3xwfHN8dCl8dHApfGh1KGF3fHRjKXxpXFwtKDIwfGdvfG1hKXxpMjMwfGlhYyggfFxcLXxcXC8pfGlicm98aWRlYXxpZzAxfGlrb218aW0xa3xpbm5vfGlwYXF8aXJpc3xqYSh0fHYpYXxqYnJvfGplbXV8amlnc3xrZGRpfGtlaml8a2d0KCB8XFwvKXxrbG9ufGtwdCB8a3djXFwtfGt5byhjfGspfGxlKG5vfHhpKXxsZyggZ3xcXC8oa3xsfHUpfDUwfDU0fFxcLVthLXddKXxsaWJ3fGx5bnh8bTFcXC13fG0zZ2F8bTUwXFwvfG1hKHRlfHVpfHhvKXxtYygwMXwyMXxjYSl8bVxcLWNyfG1lKHJjfHJpKXxtaShvOHxvYXx0cyl8bW1lZnxtbygwMXwwMnxiaXxkZXxkb3x0KFxcLXwgfG98dil8enopfG10KDUwfHAxfHYgKXxtd2JwfG15d2F8bjEwWzAtMl18bjIwWzItM118bjMwKDB8Mil8bjUwKDB8Mnw1KXxuNygwKDB8MSl8MTApfG5lKChjfG0pXFwtfG9ufHRmfHdmfHdnfHd0KXxub2soNnxpKXxuenBofG8yaW18b3AodGl8d3YpfG9yYW58b3dnMXxwODAwfHBhbihhfGR8dCl8cGR4Z3xwZygxM3xcXC0oWzEtOF18YykpfHBoaWx8cGlyZXxwbChheXx1Yyl8cG5cXC0yfHBvKGNrfHJ0fHNlKXxwcm94fHBzaW98cHRcXC1nfHFhXFwtYXxxYygwN3wxMnwyMXwzMnw2MHxcXC1bMi03XXxpXFwtKXxxdGVrfHIzODB8cjYwMHxyYWtzfHJpbTl8cm8odmV8em8pfHM1NVxcL3xzYShnZXxtYXxtbXxtc3xueXx2YSl8c2MoMDF8aFxcLXxvb3xwXFwtKXxzZGtcXC98c2UoYyhcXC18MHwxKXw0N3xtY3xuZHxyaSl8c2doXFwtfHNoYXJ8c2llKFxcLXxtKXxza1xcLTB8c2woNDV8aWQpfHNtKGFsfGFyfGIzfGl0fHQ1KXxzbyhmdHxueSl8c3AoMDF8aFxcLXx2XFwtfHYgKXxzeSgwMXxtYil8dDIoMTh8NTApfHQ2KDAwfDEwfDE4KXx0YShndHxsayl8dGNsXFwtfHRkZ1xcLXx0ZWwoaXxtKXx0aW1cXC18dFxcLW1vfHRvKHBsfHNoKXx0cyg3MHxtXFwtfG0zfG01KXx0eFxcLTl8dXAoXFwuYnxnMXxzaSl8dXRzdHx2NDAwfHY3NTB8dmVyaXx2aShyZ3x0ZSl8dmsoNDB8NVswLTNdfFxcLXYpfHZtNDB8dm9kYXx2dWxjfHZ4KDUyfDUzfDYwfDYxfDcwfDgwfDgxfDgzfDg1fDk4KXx3M2MoXFwtfCApfHdlYmN8d2hpdHx3aShnIHxuY3xudyl8d21sYnx3b251fHg3MDB8eWFzXFwtfHlvdXJ8emV0b3x6dGVcXC0vaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQuc3Vic3RyKDAsNCkpKSB7IFxuXHRcdFx0aXNNb2JpbGUgPSB0cnVlO1xuXHRcdH1cblxuXHRcdHJldHVybiBpc01vYmlsZTtcblx0fSxcblxuXHQvKipcblx0ICogV2hlbmV2ZXIgeW91IGhhdmUgYW4gZXZlbnQgdGhhdCBmaXJlcyBNQU5ZIHRpbWVzIHBlciBtcyAoZm9yIGV4YW1wbGUgc2Nyb2xsaW5nKSwgeW91IGNhbiB1c2UgdGhpcyB0aHJvdHRsZSBmdW5jdGlvbiB0b1xuXHQgKiBsaW1pdCB0aGUgYW1vdW50IG9mIHRpbWUgYSBmdW5jdGlvbiBmaXJlcy5cblx0ICovXG5cdHRocm90dGxlOiAoZm4sIHRocmVzaGhvbGQsIHNjb3BlKSA9PiB7XG5cdFx0dGhyZXNoaG9sZCB8fCAodGhyZXNoaG9sZCA9IDI1MCk7XG5cdFx0dmFyIGxhc3QsXG5cdFx0XHRkZWZlclRpbWVyO1xuXHRcdHJldHVybiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBjb250ZXh0ID0gc2NvcGUgfHwgdGhpcztcblxuXHRcdFx0dmFyIG5vdyA9ICtuZXcgRGF0ZSxcblx0XHRcdFx0YXJncyA9IGFyZ3VtZW50cztcblx0XHRcdGlmIChsYXN0ICYmIG5vdyA8IGxhc3QgKyB0aHJlc2hob2xkKSB7XG5cdFx0XHRcdC8vIGhvbGQgb24gdG8gaXRcblx0XHRcdFx0Y2xlYXJUaW1lb3V0KGRlZmVyVGltZXIpO1xuXHRcdFx0XHRkZWZlclRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRsYXN0ID0gbm93O1xuXHRcdFx0XHRcdGZuLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuXHRcdFx0XHR9LCB0aHJlc2hob2xkKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGxhc3QgPSBub3c7XG5cdFx0XHRcdGZuLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuXHRcdFx0fVxuXHRcdH07XG5cdH0sXG5cblx0LyoqXG5cdCAqIFdoZW5ldmVyIHlvdSBoYXZlIGEgZnVuY3Rpb24gdGhhdCB5b3Ugb25seSB3YW50IHRvIGV4ZWN1dGUgYWZ0ZXIgYSBjZXJ0YWluIHRpbWUgaGFzIHBhc3NlZCAoZm9yIGV4YW1wbGUsIGlmIHRoZSB1c2VyIHJlc2l6ZXMgdGhlaXIgd2luZG93IGFuZCBvbiB0aGUgZW5kIG9mIHRoYXQgcmVzaXplIHlvdSB3YW50XG5cdCAqIHRvIGRvIHNvbWV0aGluZykgeW91IGNhbiBkbyB0aGF0IHdpdGggdGhpcyBvbmUuIFNpbXBseSBzZXQgdGhlIGZ1bmN0aW9uIGFuZCBob3cgbG9uZyBpdCBzaG91bGQgd2FpdCB1bnRpbCB0aGUgZXZlbnQgaXMgZG9uZS5cblx0ICovXG5cdGRlYm91bmNlOiAoZnVuYywgd2FpdCwgaW1tZWRpYXRlKSA9PiB7XG5cdFx0dmFyIHRpbWVvdXQ7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGNvbnRleHQgPSB0aGlzLCBhcmdzID0gYXJndW1lbnRzO1xuXHRcdFx0dmFyIGxhdGVyID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHRpbWVvdXQgPSBudWxsO1xuXHRcdFx0XHRpZiAoIWltbWVkaWF0ZSkge1xuXHRcdFx0XHRcdGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncylcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHRcdHZhciBjYWxsTm93ID0gaW1tZWRpYXRlICYmICF0aW1lb3V0O1xuXHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXHRcdFx0dGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xuXHRcdFx0aWYgKGNhbGxOb3cpIHtcblx0XHRcdFx0ZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcblx0XHRcdH1cblx0XHR9O1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBEaXNhYmxlIGJvZHkgc2Nyb2xsaW5nICh3aGVuIG9wZW5pbmcgcG9wdXAgZm9yIGV4YW1wbGUpXG5cdCAqL1xuXHRkaXNhYmxlQm9keVNjcm9sbDogKGJvb2xlYW4pID0+IHtcblx0XHRib29sZWFuID8gZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCduby1zY3JvbGwnKSA6IGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbm8tc2Nyb2xsJyk7XG5cdH0sXG5cdFxuXHQvKipcblx0ICogRXF1YWxpemUgdGhlIGhlaWdodHMgb2YgYW4gYXJyYXkgb2YgaXRlbXMgKHVzZWQgaW4gR2xpZGUgQ2Fyb3VzZWwpXG5cdCAqL1xuXHRlcXVhbGl6ZUhlaWdodHM6IChhcnJheU9mSXRlbXMsIGNvbmZpZykgPT4ge1xuXG5cdFx0aWYoY29uZmlnID09ICd0cnVlJykge1xuXHRcdFx0bGV0IGhpZ2hlc3RJdGVtID0gMDtcblxuXHRcdFx0Zm9yKGxldCBpPTA7aTxhcnJheU9mSXRlbXMubGVuZ3RoO2krKykge1xuXHRcdFx0XHRcblx0XHRcdFx0aWYoYXJyYXlPZkl0ZW1zW2ldLmNsaWVudEhlaWdodCA+IGhpZ2hlc3RJdGVtKSB7XG5cdFx0XHRcdFx0aGlnaGVzdEl0ZW0gPSBhcnJheU9mSXRlbXNbaV0uY2xpZW50SGVpZ2h0O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGZvcihsZXQgaT0wO2k8YXJyYXlPZkl0ZW1zLmxlbmd0aDtpKyspIHtcblx0XHRcdFx0YXJyYXlPZkl0ZW1zW2ldLnN0eWxlLmhlaWdodCA9IGhpZ2hlc3RJdGVtICsgJ3B4Jztcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Zm9yKGxldCBpPTA7aTxhcnJheU9mSXRlbXMubGVuZ3RoO2krKykge1xuXHRcdFx0XHRhcnJheU9mSXRlbXNbaV0uc3R5bGUuaGVpZ2h0ID0gTnVtYmVyKGNvbmZpZykgKyAncHgnO1xuXHRcdFx0fVxuXHRcdH1cblx0fSxcblxuXHRjcmVhdGVFbGVtZW50KGVsLCBjbGFzc05hbWVzLCBkYXRhQXR0cmlidXRlTmFtZSwgZGF0YUF0dHJpYnV0ZVZhbHVlKSB7XG5cdFx0bGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsKTtcblx0XHRlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lcyk7XG5cdFx0aWYoZGF0YUF0dHJpYnV0ZU5hbWUgJiYgZGF0YUF0dHJpYnV0ZVZhbHVlKSB7XG5cdFx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZShkYXRhQXR0cmlidXRlTmFtZSwgZGF0YUF0dHJpYnV0ZVZhbHVlKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZWxlbWVudDtcblx0fSxcblxuXHR0b0FycmF5KG5vZGVsaXN0KSB7XG5cdFx0bGV0IGFyciA9IFtdO1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuXHRcdGZvcih2YXIgaT0tMSxsPW5vZGVsaXN0Lmxlbmd0aDsrK2khPT1sO2FycltpXT1ub2RlbGlzdFtpXSk7XG5cblx0XHRyZXR1cm4gYXJyO1xuXHR9XG59Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBOzs7Ozs7QUFPQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWpLQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./source/scripts/helper/HelperFunctions.js\n");

/***/ }),

/***/ "./source/scripts/sb_nav.js":
/*!**********************************!*\
  !*** ./source/scripts/sb_nav.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helper_HelperFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper/HelperFunctions */ \"./source/scripts/helper/HelperFunctions.js\");\n\n\nclass SbNav {\n  constructor() {\n    this.body = document.body; // Desktop Menu\n\n    this.megaMenuToggle = document.querySelectorAll('#sb-menu .menu-item-has-children');\n    this.menu = document.getElementById('sb-menu'); // Mobile Menu\n\n    this.navToggleMobile = document.getElementById('sb-nav-toggle');\n    this.recipeToggleMobile = document.querySelector('#sb-menu .menu-item-has-children');\n    this.backToggleMobile = document.getElementById('sb-back-toggle');\n\n    if (window.innerWidth <= 1024) {\n      this.initMobileNav();\n    } else {\n      this.initDesktopNav();\n    }\n  }\n\n  initMobileNav() {\n    this.navToggleMobile.addEventListener(_helper_HelperFunctions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].clickEvent(), function () {\n      this.body.classList.toggle('menu-open');\n    }.bind(this));\n    this.recipeToggleMobile.addEventListener(_helper_HelperFunctions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].clickEvent(), function (e) {\n      e.preventDefault();\n      this.body.classList.add('submenu-active');\n    }.bind(this));\n    this.backToggleMobile.addEventListener(_helper_HelperFunctions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].clickEvent(), function (e) {\n      e.preventDefault();\n      this.body.classList.remove('submenu-active');\n    }.bind(this));\n  }\n\n  initDesktopNav() {\n    this.megaMenuToggle.forEach(megaMenuItem => {\n      megaMenuItem.addEventListener(_helper_HelperFunctions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].clickEvent(), function (e) {\n        if (e.currentTarget === megaMenuItem && e.target.closest('.menu-item').classList.contains('menu-item-has-children')) {\n          e.preventDefault();\n\n          if (!document.querySelector('.backdrop')) {\n            this.openMenu(megaMenuItem);\n            this.setBackdropEventListener(megaMenuItem);\n          } else {\n            this.closeMenu(megaMenuItem);\n          }\n        }\n      }.bind(this));\n    });\n  }\n\n  setBackdropEventListener(megaMenuItem) {\n    this.body.addEventListener(_helper_HelperFunctions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].clickEvent(), function backdropListener(e) {\n      if (e.target === e.currentTarget) {\n        this.body.removeEventListener(_helper_HelperFunctions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].clickEvent(), backdropListener);\n        this.closeMenu(megaMenuItem);\n      }\n    }.bind(this));\n  }\n\n  openMenu(megaMenuItem) {\n    this.body.classList.add('backdrop');\n    this.menu.classList.add('mega-menu-active');\n    megaMenuItem.classList.add('submenu-active');\n  }\n\n  closeMenu(megaMenuItem) {\n    this.body.classList.remove('backdrop');\n    this.menu.classList.remove('mega-menu-active');\n    megaMenuItem.classList.remove('submenu-active');\n  }\n\n}\n\nconst InitNavigation = new SbNav();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zb3VyY2Uvc2NyaXB0cy9zYl9uYXYuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zb3VyY2Uvc2NyaXB0cy9zYl9uYXYuanM/OGU5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXyBmcm9tICcuL2hlbHBlci9IZWxwZXJGdW5jdGlvbnMnO1xuY2xhc3MgU2JOYXYge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLmJvZHkgPSBkb2N1bWVudC5ib2R5O1xuXG5cdFx0Ly8gRGVza3RvcCBNZW51XG5cdFx0dGhpcy5tZWdhTWVudVRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNzYi1tZW51IC5tZW51LWl0ZW0taGFzLWNoaWxkcmVuJyk7XG5cdFx0dGhpcy5tZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NiLW1lbnUnKTtcblxuXHRcdC8vIE1vYmlsZSBNZW51XG5cdFx0dGhpcy5uYXZUb2dnbGVNb2JpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2ItbmF2LXRvZ2dsZScpO1xuXHRcdHRoaXMucmVjaXBlVG9nZ2xlTW9iaWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NiLW1lbnUgLm1lbnUtaXRlbS1oYXMtY2hpbGRyZW4nKTtcblx0XHR0aGlzLmJhY2tUb2dnbGVNb2JpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2ItYmFjay10b2dnbGUnKTtcblxuXHRcdGlmKHdpbmRvdy5pbm5lcldpZHRoIDw9IDEwMjQpIHtcblx0XHRcdHRoaXMuaW5pdE1vYmlsZU5hdigpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmluaXREZXNrdG9wTmF2KCk7XG5cdFx0fVxuXHR9XG5cblx0aW5pdE1vYmlsZU5hdigpIHtcblx0XHR0aGlzLm5hdlRvZ2dsZU1vYmlsZS5hZGRFdmVudExpc3RlbmVyKF8uY2xpY2tFdmVudCgpLCBmdW5jdGlvbigpIHtcblx0XHRcdHRoaXMuYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdtZW51LW9wZW4nKTtcblx0XHR9LmJpbmQodGhpcykpXG5cblx0XHR0aGlzLnJlY2lwZVRvZ2dsZU1vYmlsZS5hZGRFdmVudExpc3RlbmVyKF8uY2xpY2tFdmVudCgpLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHR0aGlzLmJvZHkuY2xhc3NMaXN0LmFkZCgnc3VibWVudS1hY3RpdmUnKTtcblx0XHR9LmJpbmQodGhpcykpO1xuXG5cdFx0dGhpcy5iYWNrVG9nZ2xlTW9iaWxlLmFkZEV2ZW50TGlzdGVuZXIoXy5jbGlja0V2ZW50KCksIGZ1bmN0aW9uKGUpIHtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdHRoaXMuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdzdWJtZW51LWFjdGl2ZScpO1xuXHRcdH0uYmluZCh0aGlzKSk7XG5cdH1cblxuXHRpbml0RGVza3RvcE5hdigpIHtcblx0XHR0aGlzLm1lZ2FNZW51VG9nZ2xlLmZvckVhY2gobWVnYU1lbnVJdGVtID0+IHtcblx0XHRcdG1lZ2FNZW51SXRlbS5hZGRFdmVudExpc3RlbmVyKF8uY2xpY2tFdmVudCgpLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGlmKGUuY3VycmVudFRhcmdldCA9PT0gbWVnYU1lbnVJdGVtICYmIGUudGFyZ2V0LmNsb3Nlc3QoJy5tZW51LWl0ZW0nKS5jbGFzc0xpc3QuY29udGFpbnMoJ21lbnUtaXRlbS1oYXMtY2hpbGRyZW4nKSkge1xuXHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRpZighZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhY2tkcm9wJykpIHtcblx0XHRcdFx0XHRcdHRoaXMub3Blbk1lbnUobWVnYU1lbnVJdGVtKTtcblx0XHRcdFx0XHRcdHRoaXMuc2V0QmFja2Ryb3BFdmVudExpc3RlbmVyKG1lZ2FNZW51SXRlbSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRoaXMuY2xvc2VNZW51KG1lZ2FNZW51SXRlbSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9LmJpbmQodGhpcykpXG5cdFx0fSlcblx0fVxuXG5cdHNldEJhY2tkcm9wRXZlbnRMaXN0ZW5lcihtZWdhTWVudUl0ZW0pIHtcblx0XHR0aGlzLmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihfLmNsaWNrRXZlbnQoKSwgZnVuY3Rpb24gYmFja2Ryb3BMaXN0ZW5lcihlKSB7XG5cdFx0XHRpZihlLnRhcmdldCA9PT0gZS5jdXJyZW50VGFyZ2V0KSB7XG5cdFx0XHRcdHRoaXMuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKF8uY2xpY2tFdmVudCgpLCBiYWNrZHJvcExpc3RlbmVyKTtcblx0XHRcdFx0dGhpcy5jbG9zZU1lbnUobWVnYU1lbnVJdGVtKTtcblx0XHRcdH1cblx0XHR9LmJpbmQodGhpcykpXG5cdH1cblxuXHRvcGVuTWVudShtZWdhTWVudUl0ZW0pIHtcblx0XHR0aGlzLmJvZHkuY2xhc3NMaXN0LmFkZCgnYmFja2Ryb3AnKTtcblx0XHR0aGlzLm1lbnUuY2xhc3NMaXN0LmFkZCgnbWVnYS1tZW51LWFjdGl2ZScpO1xuXHRcdG1lZ2FNZW51SXRlbS5jbGFzc0xpc3QuYWRkKCdzdWJtZW51LWFjdGl2ZScpO1xuXHR9XG5cblx0Y2xvc2VNZW51KG1lZ2FNZW51SXRlbSkge1xuXHRcdHRoaXMuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdiYWNrZHJvcCcpO1xuXHRcdHRoaXMubWVudS5jbGFzc0xpc3QucmVtb3ZlKCdtZWdhLW1lbnUtYWN0aXZlJyk7XG5cdFx0bWVnYU1lbnVJdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3N1Ym1lbnUtYWN0aXZlJyk7XG5cdH1cbn1cblxuY29uc3QgSW5pdE5hdmlnYXRpb24gPSBuZXcgU2JOYXYoKSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXhFQTtBQUNBO0FBeUVBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./source/scripts/sb_nav.js\n");

/***/ })

/******/ });