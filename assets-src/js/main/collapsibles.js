/**
 * Collapsible sections
 * See https://heydon.github.io/inclusive-components-demos/collapsible-sections/progressive.html
 */

var collapsibles = function () {

	// Get all the collapsible containers
	var collapseArray = Array.prototype.slice.call(document.querySelectorAll('[data-component="collapsibles"]'));

	if (collapseArray) {

		// Loop through containers
		collapseArray.forEach(function (item) {

			// Get headings inside a collapsible container
			var headingsArray = Array.prototype.slice.call(item.querySelectorAll('[data-heading="collapsibles"]'));

			// Loop through headings
			headingsArray.forEach(function (heading, index) {

				// Insert a button for opening/closing the collapsible section
				heading.innerHTML = '<button class="button--ghost" aria-expanded="false">' + heading.innerHTML + '<svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 320 512" class="icon icon--larger" focusable="false" aria-hidden="true" width="30px" height="30px"><path class="angle-down" d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"/><path class="angle-up" d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z"/></svg></button>';

				// Add appropriate aria role to the collapsible section
				heading.nextElementSibling.setAttribute('aria-hidden', 'true');

				// Assign the button
				var btn = heading.querySelector('button');

				// Add click event listener
				btn.addEventListener('click', function(event){

					// Cast the state as a boolean
					var expanded = btn.getAttribute('aria-expanded') === 'true';

					// Switch the state
					btn.setAttribute('aria-expanded', !expanded);

					// Switch the collapsible section's visibility
					heading.nextElementSibling.setAttribute('aria-hidden', expanded);

				});

			}); // End loop

		}); // End loop

	} // End if statement

};

export {collapsibles};