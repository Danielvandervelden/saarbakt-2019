/* Webpack styles import */
import '../styles/main.scss';

/* Import Javascript modules */
import createCarousel from './src/create_carousel';

if(document.getElementsByClassName('glide').length > 0) {
	[...document.getElementsByClassName('glide')].forEach(function(carousel) {
		let config = JSON.parse(carousel.getAttribute('data-carousel'));
		new createCarousel(carousel, config);
	})
}

