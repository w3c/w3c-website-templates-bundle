/**
 * Card enhancement to trigger the main link whenever the card area is clicked
 * See https://css-tricks.com/block-links-the-search-for-a-perfect-solution/
 */

var cardEnhancement = function () {

	var cardsArray = Array.prototype.slice.call(document.querySelectorAll('[data-component="card"]'));

	if (cardsArray) {

		// Loop through cards adding a click event and identifying the main link
		cardsArray.forEach(function (card, index) {

			var mainLink = card.querySelector('.card__link');
			var clickableElems = Array.prototype.slice.call(card.querySelectorAll('[data-click]'));

			// Allow other links/buttons in the card to still be "clickable"
			if (clickableElems) {

				clickableElems.forEach(function (elem) {
					return elem.addEventListener("click", function (event) {
						return event.stopPropagation();
					});
				});

			}

			card.addEventListener('click', function() {

				var noTextSelected = !window.getSelection().toString();
				if (noTextSelected) {

					mainLink.click();

				}

			});

		});

	}

};

export {cardEnhancement};