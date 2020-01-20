// import Glide$1 from "../vendor/glide.esm";

// export default class CreateCarousel {
// 	constructor(el, config) {
// 		this.el = el;
// 		this.carousel;
// 		this.config = config;
// 		this.allSlides = this.el.querySelectorAll('.glide__slide');

// 		this.initializeCarousel();

// 		if(this.config.equalHeights) {
// 			this.equalHeights();
// 		}
// 	}

// 	initializeCarousel() {
// 		this.carousel = new Glide$1(this.el, {
// 			...this.config
// 		}).mount();
// 	}

// 	equalHeights() {
// 		let highest = 0;

// 		for(let i=0;i<this.allSlides.length;i++) {
// 			if(this.allSlides[i].offsetHeight > highest) {
// 				highest = this.allSlides[i].offsetHeight;
// 			}
// 		}

// 		for(let i=0;i<this.allSlides.length;i++) {
// 			this.allSlides[i].style.height = highest + "px";
// 		}
// 	}
// }