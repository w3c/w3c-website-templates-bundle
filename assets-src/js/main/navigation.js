var navigation = (function () {

	// https://developer.mozilla.org/en-US/docs/Web/API/Element/closest#Polyfill
	if (!Element.prototype.matches) {
		Element.prototype.matches =
			Element.prototype.msMatchesSelector ||
			Element.prototype.webkitMatchesSelector;
	}

	if (!Element.prototype.closest) {
		Element.prototype.closest = function(s) {
			var el = this;

			do {
				if (Element.prototype.matches.call(el, s)) return el;
				el = el.parentElement || el.parentNode;
			} while (el !== null && el.nodeType === 1);
			return null;
		};
	}

	// Helper: Check whether element exists
	function exists(elem) {
		return (elem != null && (elem.length >= 0 || elem.innerHTML.length >= 0) )
	}

	let nav = document.querySelector('.global-nav__inner ul');
	let mobileNavToggler = document.querySelector('[data-trigger="mobile-nav"]');
	mobileNavToggler.style = "";
	let menuIcon = '<svg class="icon icon--larger" xmlns:xlink="http://www.w3.org/1999/xlink" focusable="false" aria-hidden="true" viewBox="0 0 448 512" width="1em" height="1em"><use class="menu-icon" href="dist/assets/svg/nav-icons.svg#menu-icon"></use><use class="close-icon" href="dist/assets/svg/nav-icons.svg#close-icon"></use></svg>';
	let parentLinks = [].slice.call(nav.querySelectorAll('.top-nav-item.has-children > a'));
	let subNavArray = [].slice.call(nav.querySelectorAll('.nav__submenu'));

	// I18N for 'Menu' button text
	let menuText = 'Menu';
	if (document.documentElement.lang === 'ja') {
		menuText = 'メニュー';
	} else if (document.documentElement.lang === 'zh-hans') {
		menuText = '菜单';
	}

	// I18N for 'Main menu' back button text
	let backText = 'Back to main menu';
	if (document.documentElement.lang === 'ja') {
		backText = 'メインメニューに戻る';
	} else if (document.documentElement.lang === 'zh-hans') {
		backText = '返回主菜单';
	}

	let closeSubNavs = function () {
		let subNavTriggers = [].slice.call(nav.querySelectorAll('[data-trigger="subnav"]'));
		subNavTriggers.forEach(function (trigger) {
			trigger.setAttribute('aria-expanded', 'false');
			trigger.removeAttribute('class');
		});
	}

	// Toggle mobile navigation
	let toggleMobileNav = function () {

		if (mobileNavToggler && nav) {

			mobileNavToggler.innerHTML = menuText + menuIcon;
			mobileNavToggler.setAttribute('aria-expanded', 'false');

			document.addEventListener('click', function (event) {

				if (event.target.matches('[data-trigger="mobile-nav"]')) {

					if (event.target.getAttribute('aria-expanded') === 'false') {

						event.target.setAttribute('aria-expanded', 'true');

					} else {

						event.target.setAttribute('aria-expanded', 'false');
						closeSubNavs();

					}

				}

			}, false);

		}

	}

	// Media query event handler
	let mq = window.matchMedia('(min-width: 70em)');
	mq.addListener(WidthChange);
	WidthChange(mq);

	// Media query change
	function WidthChange(mq) {
		if (!(mq.matches)) {
			toggleMobileNav();
		} else {
			mobileNavToggler.setAttribute('aria-expanded', 'true');
		}
	}

	if (exists(parentLinks)) {

		parentLinks.forEach(function (item) {

			let clonedLink = item.cloneNode(true);
			let linkText = item.textContent + '&nbsp;';
			let toggleButton = document.createElement('button');
			let backButton = document.createElement('button');
			let fragment = document.createDocumentFragment();
			let subNav = item.parentNode.querySelector('.nav__submenu__intro');
			let submenuFirstChild = subNav.querySelector('.nav__submenu__intro__text');

			toggleButton.setAttribute('type', 'button');
			toggleButton.setAttribute('aria-expanded', 'false');
			toggleButton.setAttribute('data-trigger', 'subnav');
			toggleButton.innerHTML = linkText + '<svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 256 512" class="icon nav-small" focusable="false" aria-hidden="true" width="1em" height="1em"><use class="angle-left" href="dist/assets/svg/nav-icons.svg#angle-left"></use><use class="angle-right" href="dist/assets/svg/nav-icons.svg#angle-right"></use></svg><svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 320 512" class="icon nav-wide" focusable="false" aria-hidden="true" width="1em" height="1em"><use class="angle-down" href="dist/assets/svg/nav-icons.svg#angle-down"></use><use class="angle-up" href="dist/assets/svg/nav-icons.svg#angle-up"></use></svg>';

			backButton.setAttribute('type', 'button');
			backButton.setAttribute('class', 'button button--ghost u-full-width with-icon--before with-icon--larger');
			backButton.setAttribute('data-trigger', 'mobile-back');
			backButton.innerHTML = '<svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 256 512" class="icon icon--larger" focusable="false" aria-hidden="true" width="1em" height="1em"><use class="angle-left" href="dist/assets/svg/nav-icons.svg#angle-left"></use><use class="angle-right" href="dist/assets/svg/nav-icons.svg#angle-right"></use></svg>' + backText;

			fragment.appendChild(backButton);
			fragment.appendChild(clonedLink);

			subNav.insertBefore(fragment, submenuFirstChild);
			item.parentNode.replaceChild(toggleButton, item);

		});

		for (let i = 0; i < subNavArray.length; i++) {

			subNavArray[i].style = "";

		}

		document.addEventListener('click', function (event) {

			if (event.target.matches('[data-trigger="subnav"]')) {

				if (event.target.matches('[aria-expanded="false"]')) {

					closeSubNavs();
					event.target.setAttribute('aria-expanded', 'true');
					event.target.setAttribute('class', 'js-active');

				} else {

					event.target.setAttribute('aria-expanded', 'false');
					event.target.removeAttribute('class');

				}

			} else if (event.target.matches('[data-trigger="mobile-back"]')) {

				event.target.closest('li').querySelector('[data-trigger="subnav"]').setAttribute('aria-expanded', 'false');

			} else {

				closeSubNavs();

			}

		});

		document.addEventListener('keyup', function (event) {

			if (event.defaultPrevented) {
				return;
			}

			let key = event.key || event.keyCode;

			if (key === 'Escape' || key === 'Esc' || key === 27) {

				closeSubNavs();

			}

		});

	}

})();

export {navigation};