import _ from './helper/HelperFunctions';

class SbNav {
	constructor() {
		this.navToggle = document.getElementById('sb-nav-toggle');
		this.recipeToggle = document.querySelector('#sb-mobile-menu .menu-item-has-children');
		this.backToggle = document.getElementById('sb-back-toggle');
		this.body = document.body;

		this.setListeners();
	}

	setListeners() {
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
}

const InitNavigation = new SbNav()