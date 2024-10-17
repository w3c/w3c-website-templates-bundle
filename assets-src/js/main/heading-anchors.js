/**
 * Add anchor links to any H2 - H6 within the <main> element that:
 * - have an id
 * - are not children of a <nav> element
 * - do not have an ancestor with the data-anchor="no" attribute, with
 * the `hidden` attribute or with the .visuallyhidden class
 * - do not themselves have the data-anchor="no" attribute, the `hidden`
 * attribute or the .visuallyhidden class
 *
 * Generate the anchor using the existing heading ID value.
 */

import {translate} from './translations';

let headingAnchors = function () {

	let languageCode = document.documentElement.lang;

	// Only add heading anchor links on "full" sites
	if (languageCode === 'en' || languageCode === 'ja' || languageCode === 'zh-hans') {

		let headingsArray= Array.from(document.querySelectorAll('main h2[id], main h3[id], main h4[id], main h5[id], main h6[id]'));

		if (headingsArray.length > 0) {

			// Filter out headings that:
			// - Are not children of <nav>
			// - Do not have an ancestor with the data-anchor="no" attribute
			// - Do not have an ancestor with the `hidden` attribute
			// - Do not have an ancestor with the `.visuallyhidden` class
			// - Do not themselves have the data-anchor="no" attribute
			// - Do not themselves have the `hidden` attribute
			// - Do not themselves have the `.visuallyhidden` class
			let targetedHeadings = headingsArray.filter(function(heading) {
				let insideNav = heading.closest('nav') !== null;
				let parentHasDataAttribute = heading.closest('[data-anchor="no"]') !== null;
				let hiddenParent = heading.closest('[hidden]') !== null;
				let visuallyhiddenParent = heading.closest('.visuallyhidden') !== null;
				let hasDataAttribute = heading.getAttribute('data-anchor') === 'no';
				let isHidden = heading.getAttribute('hidden');
				let isVisuallyhidden = heading.classList.contains('visuallyhidden');

				return !insideNav && !parentHasDataAttribute && !hiddenParent && !visuallyhiddenParent && !hasDataAttribute && !isHidden && !isVisuallyhidden;
			});

			if (targetedHeadings.length > 0) {
				targetedHeadings.forEach(function(heading) {

					let anchor = document.createElement('a');

					anchor.setAttribute('href', '#' + heading.id);
					anchor.setAttribute('class', 'heading-anchor');
					anchor.innerHTML = '<span aria-hidden="true">&sect;</span>'
						+'<span class="visuallyhidden">'
						+ translate.translate('anchor', languageCode) + '</span>';
					heading.append('\xa0');
					heading.appendChild(anchor);

				});
			}

		}

	}

}

export {headingAnchors};
