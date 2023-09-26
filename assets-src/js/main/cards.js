/**
 * Card enhancement to trigger the main link whenever the card area is clicked
 * See https://css-tricks.com/block-links-the-search-for-a-perfect-solution/
 */

let cardEnhancement = function () {

	let cardsArray = Array.prototype.slice.call(document.querySelectorAll('[data-component="card"]'));

	if (cardsArray.length > 0) {

		// Loop through cards adding a click event and identifying the main link
		cardsArray.forEach(function (card, index) {

			let mainLink = card.querySelector('.card__link');
			let clickableElems = Array.prototype.slice.call(card.querySelectorAll('[data-click]'));

			// Allow other links/buttons in the card to still be "clickable"
			if (clickableElems) {

				clickableElems.forEach(function (elem) {
					return elem.addEventListener("click", function (event) {
						return event.stopPropagation();
					});
				});

			}

			card.addEventListener('click', function(ev) {

				if (ev.redispatched || ev.target === mainLink) {
 					return;
 				}
				let noTextSelected = !window.getSelection().toString();
				if (noTextSelected) {
					const ev2 = new MouseEvent("click", ev);
					ev2.redispatched = true;
					mainLink.dispatchEvent(ev2);
				}

			});

		});

	}

};

export {cardEnhancement};
