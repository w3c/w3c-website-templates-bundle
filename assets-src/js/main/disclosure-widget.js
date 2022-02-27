var disclosureWidget = function () {

	let toggleButtonArray = Array.prototype.slice.call(document.querySelectorAll('[data-toggle="true"]'));

	let closeDisclosures = function () {

		toggleButtonArray.forEach(function (btn) {

			if (btn.getAttribute('aria-expanded') === 'true') {

				btn.setAttribute('aria-expanded', 'false');

			}

		});

	}

	if (toggleButtonArray.length > 0) {

		toggleButtonArray.forEach(function (btn) {

			btn.style = "";
			btn.setAttribute('aria-expanded', 'false');

		});

		if (document.body.classList.contains('group')) {

			// Media query event handler
			let mq = window.matchMedia('(min-width: 64em)');
			mq.addListener(WidthChange);
			WidthChange(mq);

			// Media query change
			function WidthChange(mq) {

				var toggleButton = document.querySelector('[data-toggle="true"]');

				if (!(mq.matches)) {

					toggleButton.setAttribute('aria-expanded', 'false');

				} else {

					toggleButton.removeAttribute('aria-expanded');

				}
			}

		}

		document.addEventListener('click', function (event) {

			if (event.target.matches('[data-toggle="true"]')) {

				if (event.target.matches('[aria-expanded="false"]')) {

					closeDisclosures();
					event.target.setAttribute('aria-expanded', 'true');

				} else {

					event.target.setAttribute('aria-expanded', 'false');

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

};

export {disclosureWidget};