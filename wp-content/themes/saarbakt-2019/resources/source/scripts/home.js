/*
/* Specific javascript for the homepage
/*_______________________________________________________*/

/**
 * Make the news and recipe container equal height
 */
let articles = document.querySelectorAll('.sb-frontpage-content__latest article');
let highest = 0;

for(let i=0;i<articles.length;i++) {
	if(articles[i].offsetHeight > highest) {
		highest = articles[i].offsetHeight;
	}
}

for(let i=0;i<articles.length;i++) {
	articles[i].style.height = highest + 'px';
}