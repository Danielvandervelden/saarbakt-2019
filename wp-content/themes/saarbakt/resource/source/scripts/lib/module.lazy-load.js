/**
 * Grabbing all of the images and load them ONLY if we need to.
 */
import { toArray } from '../helper/module.helpers';

const img = new Image();

toArray(document.getElementsByTagName('img')).forEach(image => {
	if("srcset" in img && IntersectionObserver) {
		const observer = new IntersectionObserver(() => {
			fixSource(image, 'srcset');
		}, { root: null, rootMargin: '0px', threshold: 0.5 })

		observer.observe(image);
	} else {
		fixSource(image, 'src');
	}
})

function fixSource(image, dataAttribute) {
	console.log('test');
	image.setAttribute(dataAttribute, image.getAttribute(`data-${dataAttribute}`));
	image.removeAttribute('data-src');
	image.removeAttribute('data-srcset');

	image.classList.add('lazy-loaded');
}