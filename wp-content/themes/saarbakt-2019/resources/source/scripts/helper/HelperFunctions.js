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

	onMobile: () => {
		let isMobile = false;
		if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
			|| /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
			isMobile = true;
		}

		return isMobile;
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