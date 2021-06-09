/**
 * Enhances a <select> element into an accessible autocomplete <input>
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
			selectElement: element,
			showAllValues: true,
			preserveNullOptions: true

		})

		const removeValue = () => {
			// Clear autocomplete and hidden select
			const enhancedElement = element.parentElement.querySelector('input');
			const replacedElement = element.parentElement.querySelector('select');

			enhancedElement.value = '';
			replacedElement.value = '';

			// Needed to collapse menu
			enhancedElement.click();
			enhancedElement.focus();
			enhancedElement.blur();

		}

		docu

		// In the case that the user deletes the entry from the field, we want this to be reflected in
		// the underlying select. This is a work-around to
		// https://github.com/alphagov/accessible-autocomplete/issues/205
		// const $enhancedElement = $(element).parent().find('input')
		// $enhancedElement.on('keyup', () => {
		// 	if ($enhancedElement.val() !== $(element).find('option:selected').text()) {
		// 		$(element).val('')
		// 	}
		// })



		// This adds ability to remove currently selected input by pressing on an X next to it
		// This is a work-around to
		// https://github.com/alphagov/accessible-autocomplete/issues/240
		// const removeButton = document.getElementById(`clear-${id}`)
		// if (removeButton) {
		// 	const removeValue = () => {
		// 		// Clear autocomplete and hidden select
		// 		$enhancedElement.val('')
		// 		$(element).parent().find('select').val('')
		//
		// 		// Needed to collapse menu
		// 		$enhancedElement.click()
		// 		$enhancedElement.focus()
		// 		$enhancedElement.blur()
		//
		// 		// Return focus to the button
		// 		removeButton.focus()
		// 	}
		//
		// 	removeButton.addEventListener('keypress', (e) => {
		// 		// Trigger on enter or space click only
		// 		if (e.keyCode === 13 || e.keyCode === 32) {
		// 			removeValue()
		// 		}
		// 	})
		//
		// 	removeButton.addEventListener('click', () => {
		// 		removeValue()
		// 	})
		//
		// 	// Without js remove button won't work, so it is not displayed, this makes it visible
		// 	removeButton.style.display = 'inline-block'
		// }
	}
}

function callAutocompleteWhenReady (id, options) {
	// $(document).ready(() => {
	simpleAccessibleAutocomplete(id, options);
	// })
}
window.callAutocompleteWhenReady = callAutocompleteWhenReady