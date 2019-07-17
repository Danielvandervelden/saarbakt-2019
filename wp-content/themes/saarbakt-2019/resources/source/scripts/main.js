/* Webpack styles import */
import '../styles/main.scss';

/* Import Javascript modules */
import sbCarousel from './src/sb_carousel';

/*
 * Initialize all carousels
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

if(document.getElementsByClassName('glide').length > 0) {
	[...document.getElementsByClassName('glide')].forEach(function(carousel) {
		let config = JSON.parse(carousel.getAttribute('data-carousel'));
		new sbCarousel(carousel, config);
	})
}
