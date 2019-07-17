import _ from './helper/HelperFunctions';

class SbNav {
	constructor() {
		this.navToggle = document.getElementById('sb-nav-toggle');
		this.menu = document.getElementById('sb-menu');
		this.body = document.body;

		this.setListeners();
	}

	setListeners() {
		this.navToggle.addEventListener(_.clickEvent(), function() {
			this.body.classList.toggle('menu-open');
		}.bind(this))
	}
}

const InitNavigation = new SbNav()