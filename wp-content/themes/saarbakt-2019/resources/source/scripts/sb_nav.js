import _ from './helper/HelperFunctions';

class SbNav {
	constructor() {
		this.navToggle = document.getElementById('sb-nav-toggle');
		this.recipeToggle = document.querySelector('#sb-menu .menu-item-has-children');
		this.backToggle = document.getElementById('sb-back-toggle');
		this.body = document.body;

		if(window.innerWidth <= 1024) {
			this.initMobileNav();
		} else {
			this.initDesktopNav();
		}
	}

	initMobileNav() {
		this.navToggle.addEventListener(_.clickEvent(), function() {
			this.body.classList.toggle('menu-open');
		}.bind(this))

		this.recipeToggle.addEventListener(_.clickEvent(), function(e) {
			e.preventDefault();
			this.body.classList.add('submenu-active');
		}.bind(this));

		this.backToggle.addEventListener(_.clickEvent(), function(e) {
			e.preventDefault();
			this.body.classList.remove('submenu-active');
		}.bind(this));
	}

	initDesktopNav() {
		
	}
}

const InitNavigation = new SbNav()