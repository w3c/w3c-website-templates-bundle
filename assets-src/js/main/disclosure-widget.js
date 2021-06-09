var disclosureWidget = (function () {

	let toggleButtonArray = Array.prototype.slice.call(document.querySelectorAll('[data-toggle="true"]'));

	let closeDisclosures = function () {

		toggleButtonArray.forEach(function (btn) {

			if (btn.getAttribute('aria-expanded') === 'true') {

				btn.setAttribute('aria-expanded', 'false');
				btn.nextElementSibling.setAttribute('aria-hidden', 'true');

			}

		});

	}

	if (toggleButtonArray.length > 0) {

		toggleButtonArray.forEach(function (btn) {

			var content = btn.nextElementSibling;

			btn.style = "";
			btn.setAttribute('aria-expanded', 'false');
			content.setAttribute('aria-hidden', 'true');

		});

		if (document.body.classList.contains('group')) {

			// Media query event handler
			let mq = window.matchMedia('(min-width: 64em)');
			mq.addListener(WidthChange);
			WidthChange(mq);

			// Media query change
			function WidthChange(mq) {

				var toggleButton = document.querySelector('[data-toggle="true"]');
				var target = toggleButton.nextElementSibling;

				if (!(mq.matches)) {

					toggleButton.setAttribute('aria-expanded', 'false');
					target.setAttribute('aria-hidden', 'true');

				} else {

					toggleButton.removeAttribute('aria-expanded');
					target.removeAttribute('aria-hidden');

				}
			}

		}

		document.addEventListener('click', function (event) {

			if (event.target.matches('[data-toggle="true"]')) {

				var content = event.target.nextElementSibling;

				if (content.getAttribute('aria-hidden') === 'true') {

					event.target.setAttribute('aria-expanded', 'true');
					content.setAttribute('aria-hidden', 'false');

				} else {

					event.target.setAttribute('aria-expanded', 'false');
					content.setAttribute('aria-hidden', 'true');

				}

			} else {

				closeDisclosures();

			}

		});

		document.addEventListener('keyup', function (event) {

			if (event.defaultPrevented) {
				return;
			}

			let key = event.key || event.keyCode;

			if (key === 'Escape' || key === 'Esc' || key === 27) {

				closeDisclosures();

			}

		});

	}

})();

export {disclosureWidget};