import _ from './helper/HelperFunctions';

class SbSearch {
	constructor() {
		this.menuContainer = document.querySelector('#sb-menu .main-nav');
		this.searchInput = document.getElementById('search-input');
		this.searchClose = document.querySelector('.search__close');
		this.body = document.body;

		if(window.innerWidth <= 1024) {
			this.initMobileSearch();
		} else {
			this.initDesktopSearch();
		}
	}

	initDesktopSearch() {
		const searchIcon = document.createElement('i');
		searchIcon.classList.add('fas', 'fa-search');

		this.menuContainer.appendChild(searchIcon);

		this.setSearchListeners(searchIcon);
	}

	initMobileSearch() {

	}

	setSearchListeners(target) {
		target.addEventListener(_.clickEvent(), function() {
			this.openSearch();
		}.bind(this));

		this.searchClose.addEventListener(_.clickEvent(), function() {
			this.closeSearch();
		}.bind(this))
	}

	openSearch() {
		this.body.classList.add('search-active');
		document.querySelector('html').style.overflow = 'hidden';
	}

	closeSearch() {
		this.body.classList.remove('search-active');
		document.querySelector('html').style.overflow = 'auto';
	}
}

const sbSearch = new SbSearch;