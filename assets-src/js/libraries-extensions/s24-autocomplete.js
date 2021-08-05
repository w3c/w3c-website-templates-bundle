/**
 * Enhances a <select> element into an accessible autocomplete <input>
 * See https://github.com/alphagov/accessible-autocomplete#progressive-enhancement
 */

import accessibleAutocomplete from 'accessible-autocomplete'

function simpleAccessibleAutocomplete (id) {

	const element = document.getElementById(id)

	if (element) {

		accessibleAutocomplete.enhanceSelectElement({
			confirmOnBlur: false,
			defaultValue: '',
			displayMenu: 'overlay',
			dropdownArrow: function (config) {
				return '<svg class="' + config.className + '" viewBox="0 0 320 512" focusable="false" aria-hidden="true"><path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"/></svg>'
			},
			preserveNullOptions: true,
			selectElement: element,
			showAllValues: true,
		})

		// If a reset button is used to clear the input, reflect this in the underlying <select>
		// and collapse the dropdown menu
		function resetHandler() {

			// Clear autocomplete and hidden select
			const enhancedElement = element.parentElement.querySelector('input');
			enhancedElement.value = '';
			element.value = '';

			// Collapse the dropdown menu
			enhancedElement.click();
			enhancedElement.focus();
			enhancedElement.blur();

		}

		document.addEventListener('click', function (event) {

			if (event.target.matches('button[type="reset"]')) {

				resetHandler();

			}

		}, false);

	}

}

export default simpleAccessibleAutocomplete;