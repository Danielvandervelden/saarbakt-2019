import _ from './helper/HelperFunctions';

class SbSearch {
	constructor() {
		this.menuContainer = document.querySelector('#sb-menu .main-nav');
		this.searchInput = document.getElementById('search-input');
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
			this.body.classList.add('search-active');
		}.bind(this));
	}
}

const sbSearch = new SbSearch;