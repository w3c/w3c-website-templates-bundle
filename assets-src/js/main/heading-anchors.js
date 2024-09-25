/**
 * Add anchor links to any H2 - H6 within the <main> element that:
 * - are not children of a <nav> element
 * - do not have an ancestor with the data-anchor="no" attribute
 * - do not themselves have the data-anchor="no" attribute
 *
 * If a heading does not already possess an ID, use regular expressions
 * on the textContent of the heading to generate a string that is valid to
 * use for both the heading ID and the anchor href. Supports non-Latin
 * scripts by matching any Unicode letter - \p{L} - or number - \p{N}. The
 * u flag enables Unicode matching, to support characters from any script.
 *
 * Otherwise, generate the anchor using the existing heading ID value.
 */

import {translate} from './translations';

let headingAnchors = function () {

	let languageCode = document.documentElement.lang;

	// Only add heading anchor links on "full" sites
	if (languageCode === 'en' || languageCode === 'ja' || languageCode === 'zh-hans') {

		let headingsArray= Array.from(document.querySelectorAll('main h2, main h3, main h4, main h5, main h6'));

		if (headingsArray.length > 0) {

			// Filter out headings that:
			// - Are not children of <nav>
			// - Do not have an ancestor with the data-anchor="no" attribute
			// - Do not themselves have the data-anchor="no" attribute
			let targetedHeadings = headingsArray.filter(function(heading) {
				let insideNav = heading.closest('nav') !== null;
				let parentHasDataAttribute = heading.closest('[data-anchor="no"]') !== null;
				let hasDataAttribute = heading.getAttribute('data-anchor') === 'no';

				return !insideNav && !parentHasDataAttribute && !hasDataAttribute;
			});

			if (targetedHeadings.length > 0) {
				targetedHeadings.forEach(function(heading) {

					let anchor = document.createElement('a');
					let anchorHref;

					// If the heading already has an ID, use this for constructing the anchor
					if (heading.getAttribute('id')) {
						anchorHref = heading.id;
					} else {
						// If the heading does not already have an ID, generate anchor href from the heading text. Steps are:
						// - Remove leading/trailing spaces
						// - Use RegEx to remove invalid characters but keep all Unicode letters/numbers
						// - Use RegEx to replace spaces with hyphens
						anchorHref = heading.textContent
							.trim()
							.replace(/[^\p{L}\p{N}\s-]/gu, '')
							.replace(/\s+/g, '-');
						heading.id = anchorHref;
					}

					anchor.setAttribute('href', '#' + anchorHref);
					anchor.setAttribute('class', 'heading-anchor');
					anchor.innerHTML = '<span aria-hidden="true">#</span>'
						+'<span class="visuallyhidden">'
						+ translate.translate('anchor', languageCode) + '</span>';
					heading.appendChild(anchor);

				});
			}

		}

	}

}

export {headingAnchors};