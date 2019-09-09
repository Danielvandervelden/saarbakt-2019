import _ from './helper/HelperFunctions';
class SbNav {
	constructor() {
		this.body = document.body;

		// Desktop Menu
		this.megaMenuToggle = document.querySelectorAll('#sb-menu .menu-item-has-children');
		this.menu = document.getElementById('sb-menu');

		// Mobile Menu
		this.navToggleMobile = document.getElementById('sb-nav-toggle');
		this.recipeToggleMobile = document.querySelector('#sb-menu .menu-item-has-children');
		this.backToggleMobile = document.getElementById('sb-back-toggle');

		if(window.innerWidth <= 1024) {
			this.initMobileNav();
		} else {
			this.initDesktopNav();
		}
	}

	initMobileNav() {
		this.navToggleMobile.addEventListener(_.clickEvent(), function() {
			this.body.classList.toggle('menu-open');
			document.documentElement.classList.toggle('no-scroll');
			this.body.classList.remove('submenu-active');
		}.bind(this))

		this.recipeToggleMobile.addEventListener(_.clickEvent(), function(e) {
			if(e.target.href.indexOf('#') !== -1) {
				e.preventDefault();
				this.body.classList.add('submenu-active');
			}
		}.bind(this));

		this.backToggleMobile.addEventListener(_.clickEvent(), function(e) {
			e.preventDefault();
			this.body.classList.remove('submenu-active');
		}.bind(this));
	}

	initDesktopNav() {
		this.megaMenuToggle.forEach(megaMenuItem => {
			megaMenuItem.addEventListener(_.clickEvent(), function(e) {
				if(e.currentTarget === megaMenuItem && e.target.closest('.menu-item').classList.contains('menu-item-has-children')) {
					e.preventDefault();
					if(!document.querySelector('.backdrop')) {
						this.openMenu(megaMenuItem);
						this.setBackdropEventListener(megaMenuItem);
					} else {
						this.closeMenu(megaMenuItem);
					}
				}
			}.bind(this))
		})
	}

	setBackdropEventListener(megaMenuItem) {
		this.body.addEventListener(_.clickEvent(), function backdropListener(e) {
			if(e.target === e.currentTarget) {
				this.body.removeEventListener(_.clickEvent(), backdropListener);
				this.closeMenu(megaMenuItem);
			}
		}.bind(this))
	}

	openMenu(megaMenuItem) {
		this.body.classList.add('backdrop');
		this.menu.classList.add('mega-menu-active');
		megaMenuItem.classList.add('submenu-active');
		document.documentElement.classList.add('no-scroll');
	}

	closeMenu(megaMenuItem) {
		this.body.classList.remove('backdrop');
		this.body.classList.remove('submenu-active');
		this.menu.classList.remove('mega-menu-active');
		megaMenuItem.classList.remove('submenu-active');
		document.documentElement.classList.remove('no-scroll');
	}
}

const InitNavigation = new SbNav()