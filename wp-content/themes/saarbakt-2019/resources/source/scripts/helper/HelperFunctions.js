/*
 * This is a file for functions globally used throughout the
 * entire website. Think about a scroll to animation. Normally
 * we would use jQuery for this, but there's no need if we
 * have our own simple library.
 *----------------------------------------------------------*/

export default {
	/**
	 * Our own scrollTo functionality. This will animate a scroll to a target. The target needs to be a selector you would pass
	 * to a querySelector "div.container" for example. This will look for the FIRST element with that name on the page and
	 * scroll to it. The second parameter is how long the scrolling should take. Quite straight forward.
	 */
	scrollTo: (target, duration) => {
		let el = document.querySelector(target);
		let targetPosition = el.getBoundingClientRect().top + window.pageYOffset - 100;
		let startPosition = window.pageYOffset;
		let distance = targetPosition - startPosition;
		let startTime = null;

		const animation = (currentTime) => {
			if (startTime === null) {
				startTime = currentTime;
			}
			
			let timeElapsed = currentTime - startTime;
			let run = ease(timeElapsed, startPosition, distance, duration);
			window.scrollTo(0, run);
			if (timeElapsed < duration) {
				requestAnimationFrame(animation);
			}
		}

		const ease = (t, b, c, d) => {
			t /= d / 2;
			if (t < 1)  {
				return c / 2 * t * t * t + b;
			}
			t -= 2;
			return c / 2 * (t * t * t + 2) + b;
		};

		requestAnimationFrame(animation);
	},

	/**
	 * Use this function to determine wether a click event on a device is a touch or actual mouse click event. Simply execute
	 * the function in an "addEventListener(_.clickEvent(), () => {})" and depending on the device it'll return 'click' or 
	 * 'touchstart'.
	 */
	clickEvent: () => {
		if ('ontouchstart' in document.documentElement !== true) {
			return 'click';
		}
		else {
			return 'touchend';
		}
	},

	/**
	 * Whenever you have an event that fires MANY times per ms (for example scrolling), you can use this throttle function to
	 * limit the amount of time a function fires.
	 */
	throttle: (fn, threshhold, scope) => {
		threshhold || (threshhold = 250);
		var last,
			deferTimer;
		return function() {
			var context = scope || this;

			var now = +new Date,
				args = arguments;
			if (last && now < last + threshhold) {
				// hold on to it
				clearTimeout(deferTimer);
				deferTimer = setTimeout(function() {
					last = now;
					fn.apply(context, args);
				}, threshhold);
			} else {
				last = now;
				fn.apply(context, args);
			}
		};
	},

	/**
	 * Whenever you have a function that you only want to execute after a certain time has passed (for example, if the user resizes their window and on the end of that resize you want
	 * to do something) you can do that with this one. Simply set the function and how long it should wait until the event is done.
	 */
	debounce: (func, wait, immediate) => {
		var timeout;
		return function() {
			var context = this, args = arguments;
			var later = function() {
				timeout = null;
				if (!immediate) {
					func.apply(context, args)
				}
			};
			var callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (callNow) {
				func.apply(context, args);
			}
		};
	},

	/**
	 * Disable body scrolling (when opening popup for example)
	 */
	disableBodyScroll: (boolean) => {
		boolean ? document.body.classList.add('no-scroll') : document.body.classList.remove('no-scroll');
	},
	
	/**
	 * Equalize the heights of an array of items (used in Glide Carousel)
	 */
	equalizeHeights: (arrayOfItems, config) => {

		if(config == 'true') {
			let highestItem = 0;

			for(let i=0;i<arrayOfItems.length;i++) {
				
				if(arrayOfItems[i].clientHeight > highestItem) {
					highestItem = arrayOfItems[i].clientHeight;
				}
			}

			for(let i=0;i<arrayOfItems.length;i++) {
				arrayOfItems[i].style.height = highestItem + 'px';
			}
		} else {
			for(let i=0;i<arrayOfItems.length;i++) {
				arrayOfItems[i].style.height = Number(config) + 'px';
			}
		}
	},

	createElement(el, classNames, dataAttributeName, dataAttributeValue) {
		let element = document.createElement(el);
		element.classList.add(classNames);
		if(dataAttributeName && dataAttributeValue) {
			element.setAttribute(dataAttributeName, dataAttributeValue);
		}

		return element;
	},

	toArray(nodelist) {
		let arr = [];
		// eslint-disable-next-line
		for(var i=-1,l=nodelist.length;++i!==l;arr[i]=nodelist[i]);

		return arr;
	}
}