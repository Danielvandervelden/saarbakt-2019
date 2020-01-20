/* Webpack styles import */
import '../styles/main.scss';

/* Import Javascript modules */
import sbCarousel from './src/sb_carousel';
import _ from './helper/HelperFunctions';

import smoothscroll from 'smoothscroll-polyfill';

/**
 * Initialize smoothscroll polyfill
 */
smoothscroll.polyfill();

/*
 * Initialize all carousels
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

if (document.getElementsByClassName('glide').length > 0) {
	[...document.getElementsByClassName('glide')].forEach(function(carousel) {
		let config = JSON.parse(carousel.getAttribute('data-carousel'));
		new sbCarousel(carousel, config);
	})
}

/**
 * Fix the "to ingrients" button so it scrolls down to the ingrients.
 */
if (document.body.classList.contains('single')) {
	let ingredientsContainer = document.getElementById('ingredients_container');

	let toIngredientsButton = document.createElement('A');
	toIngredientsButton.setAttribute('id', 'to_ingredients');
	toIngredientsButton.classList.add('btn');
	toIngredientsButton.innerHTML = `<span><i class="fas fa-arrow-down"></i> naar ingrediënten</span>`;
	toIngredientsButton.style.position = 'fixed';
	toIngredientsButton.style.bottom = '1rem';
	toIngredientsButton.style.right = '-100%';
	toIngredientsButton.style.transition = 'all .3s ease-in-out';
	document.body.appendChild(toIngredientsButton);

	toIngredientsButton.addEventListener(_.clickEvent(), () => {
		_.scrollTo('#ingredients_container', 500);
	})

	let toTopButton = document.createElement('A');
	toTopButton.setAttribute('id', 'to_top');
	toTopButton.classList.add('btn');
	toTopButton.innerHTML =	`<span><i class="fas fa-arrow-up"></i> terug omhoog</span>`;
	toTopButton.style.position = 'fixed';
	toTopButton.style.bottom = '1rem';
	toTopButton.style.right = '-100%';
	toTopButton.style.transition = 'all .3s ease-in-out';
	document.body.appendChild(toTopButton);

	toTopButton.addEventListener(_.clickEvent(), () => {
		_.scrollTo('body', 500);
	})

	checkActionButton();
	
	window.addEventListener('scroll', _.debounce(() => {
		checkActionButton();
	}, 50))

	function checkActionButton() {
		if (ingredientsContainer.getBoundingClientRect().bottom < 1050) {
			toTopButton.style.right = '1rem';
			toIngredientsButton.style.right = '-100%';
		} else if(ingredientsContainer.getBoundingClientRect().bottom > 1050){
			toIngredientsButton.style.right = '1rem';
			toTopButton.style.right = '-100%';
		}
	}
}