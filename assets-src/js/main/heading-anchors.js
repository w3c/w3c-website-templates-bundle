/**
 * Add anchor links to any H2 - H6 within the <main> element that have been given an ID
 */

import {translate} from './translations';

let headingAnchors = function () {

	let languageCode = document.documentElement.lang;

	// Only add heading anchor links on "full" sites
	if (languageCode === 'en' || languageCode === 'ja' || languageCode === 'zh-hans') {

		let mainContent = document.querySelector('main');
		let idHeadingsArray =Array.prototype.slice.call(mainContent.querySelectorAll('h2[id], h3[id], h4[id], h5[id], h6[id]'));

		if (idHeadingsArray.length > 0) {

			idHeadingsArray.forEach(function (heading) {

				let idVal = heading.getAttribute('id');
				let anchor = document.createElement('a');
				anchor.setAttribute('href', '#' + idVal);
				anchor.setAttribute('class', 'heading-anchor');
				anchor.innerHTML = '<span aria-hidden="true">#</span>';
				anchor.innerHTML += '<span class="visuallyhidden">' + translate.translate('anchor', languageCode) + '</span>';
				heading.appendChild(anchor);

			});

		}

	}

}

export {headingAnchors};