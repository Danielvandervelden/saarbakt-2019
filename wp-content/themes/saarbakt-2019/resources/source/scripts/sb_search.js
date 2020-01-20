import _ from './helper/HelperFunctions';
import axios from 'axios';

class Search {

	//1. Describe and create the object.
	constructor() {
		this.resultsDiv = document.querySelector(".search__results");
		this.openButton = document.getElementById("search__trigger");
		this.openButtonMobile = document.getElementById("sb-search-toggle__mobile");
		this.closeButton = document.querySelector(".search__close");
		this.searchOverlay = document.querySelector(".search-overlay");
		this.searchField = document.getElementById("search-input");
		this.tabTitles;
		this.events();
		this.isOverlayOpen = false;
		this.isSpinnerVisible = false;
		this.previousValue;
		this.typingTimer;
		this.spinner = `<div class="chef-loader"><img src="/wp-content/themes/saarbakt-2019/assets/images/chefhat.svg" /></div>`;
		this.dragging = false;
	}

	//2. events
	events() {
		this.openButton.addEventListener(_.clickEvent(), this.openSearch.bind(this));
		this.openButtonMobile.addEventListener(_.clickEvent(), this.openSearch.bind(this));
		this.closeButton.addEventListener(_.clickEvent(), this.closeSearch.bind(this));
		this.searchField.addEventListener("keyup", this.typingLogic.bind(this));

		document.body.addEventListener('touchstart', () => {
			this.dragging = false;
		});

		document.body.addEventListener('touchmove', () => {
			this.dragging = true;
		} )
	}



	//3. methods (function, action..)
	openSearch() {
		document.body.classList.add('search-active');
		document.documentElement.style.overflow = 'hidden';
	}

	closeSearch() {
		document.body.classList.remove('search-active');
		document.documentElement.style.overflow = 'initial';
	}

	changeTab(tabNumber) {
		let resultDivs = this.resultsDiv.querySelectorAll('div[data-tab]')
		let tabTitles = this.resultsDiv.querySelectorAll('.search__tab-headings h2');

		if(this.dragging == false) {
			for(let i=0;i<resultDivs.length;i++) {
				if(resultDivs[i].getAttribute('data-tab') !== tabNumber) {
					resultDivs[i].classList.remove('active');
					tabTitles[i].classList.remove('active');
				} else {
					resultDivs[i].classList.add('active');
					tabTitles[i].classList.add('active');
				}
			}
		}
	}

	typingLogic() {
		if (this.searchField.value != this.previousValue) {
			clearTimeout(this.typingTimer);

			if (this.searchField.value) {
				if (!this.isSpinnerVisible) {
					this.resultsDiv.innerHTML = this.spinner;
					this.isSpinnerVisible = true;
				}
				this.typingTimer = setTimeout(this.getResults.bind(this), 1000);
			} else {
				this.resultsDiv.innerHTML = '';
				this.isSpinnerVisible = false;
			}
		}
		this.previousValue = this.searchField.value;
	}

	getResults() {
		axios.get('/wp-json/saarbakt/search?term=' + this.searchField.value)
		.then(results => {
			results = results.data;
			console.log(results);
			this.resultsDiv.innerHTML = `
				<div class="search-overlay__results">
					<div class="search__tab-headings">
						<h2 data-tab="0" class="active">Posts & Paginas</h2>
						<h2 data-tab="1">Nieuwtjes</h2>
						<h2 data-tab="2">Tips & Tricks</h2>
					</div>
					<div class="tab-container__wrapper">
						<div data-tab="0" class="tab-container active">
							${results.generalInfo.length ? '<ul class="search-results__list">' : '<p>Geen zoekresultaten gevonden..</p>'}
							${results.generalInfo.map(item => `<li>${item.thumbnail ? `<a href="${item.permalink}" title="${item.title}" class="thumbnail"><img src="${item.thumbnail}" alt="${item.title}"/></a>` : ''}<div class="content"><a href="${item.permalink}">${item.title}</a><div>${item.excerpt}</div></div></li>`).join('')}
							${results.generalInfo.length ? '</ul>' : ''}
						</div>
			
						<div data-tab="1" class="tab-container">
							${results.allenieuwtjes.length ? '<ul class="search-results__list">' : '<p>Geen zoekresultaten gevonden..</p>'}
							${results.allenieuwtjes.map(item => `<li>${item.thumbnail ? `<a href="${item.permalink}" title="${item.title}" class="thumbnail"><img src="${item.thumbnail}" alt="${item.title}"/></a>` : ''}<div class="content"><a href="${item.permalink}">${item.title}</a><div>${item.excerpt}</div></div></li>`).join('')}
							${results.allenieuwtjes.length ? '</ul>' : ''}
						</div>
			
						<div data-tab="2" class="tab-container">
							${results.alletipstricks.length ? '<ul class="search-results__list">' : '<p>Geen zoekresultaten gevonden..</p>'}
							${results.alletipstricks.map(item => `<li>${item.thumbnail ? `<a href="${item.permalink}" title="${item.title}" class="thumbnail"><img src="${item.thumbnail}" alt="${item.title}"/></a>` : ''}<div class="content"><a href="${item.permalink}">${item.title}</a><div>${item.excerpt}</div></div></li>`).join('')}
							${results.alletipstricks.length ? '</ul>' : ''}
						</div>
					</div>
				</div>
				`;
			this.isSpinnerVisible = false;
			
			this.tabTitles = document.querySelectorAll(".search__tab-headings h2");
			for(let i=0;i<this.tabTitles.length;i++) {
				this.tabTitles[i].addEventListener(_.clickEvent(), this.changeTab.bind(this, this.tabTitles[i].getAttribute('data-tab')));
			}
		})
	}
}

const search = new Search();