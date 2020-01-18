/*
/* Specific javascript for the homepage
/*_______________________________________________________*/
import _ from './helper/HelperFunctions';

/**
 * Make the news and recipe container equal height ONLY on > tablet
 */
let articles = document.querySelectorAll('.sb-frontpage-content__latest article');
let highest = 0;

window.addEventListener('resize', _.debounce(function() {
	if(window.innerWidth >= 1024) {
		for(let i=0;i<articles.length;i++) {
			if(articles[i].offsetHeight > highest) {
				highest = articles[i].offsetHeight;
			}
		}

		for(let i=0;i<articles.length;i++) {
			articles[i].style.height = highest + 'px';
		}
	} else {
		for(let i=0;i<articles.length;i++) {
			articles[i].style.height = 'auto';
		}
	}
}, 100))