import {translate} from "./translations";

let accountMenu = function () {

	// maxWidth value needs to match breakpoint value used for global nav
	let userInfo = null;
	let maxWidth = 1280;
	const cacheKey = 'w3c-user-menu';

	// current menu elements, kept so the menu can be rebuilt or removed
	let toggleButton = null;
	let accMenu = null;
	let mq = null;
	let mqListener = null;
	let listenersAdded = false;

	const removeAccountMenu = function() {
		if (mq && mqListener) {
			mq.removeListener(mqListener);
		}
		if (toggleButton) {
			toggleButton.remove();
		}
		if (accMenu) {
			accMenu.remove();
		}
		toggleButton = accMenu = mq = mqListener = null;
		document.querySelector('body').classList.remove('signed-in');
	};

	const buildAccountMenu = function(userInfo) {
		if (userInfo == null || userInfo.length < 1) {
			return;
		}

		// remove any menu built earlier on this page (e.g. from the cache)
		removeAccountMenu();

		//getting the page language
		let languageCode = document.documentElement.lang;

		//generating the menu markup
		let fragment = document.createDocumentFragment();
		let status = document.querySelector('.global-header [role="status"]');
		let statusText;
		toggleButton = document.createElement('button');
		accMenu = document.createElement('div');
		accMenu.setAttribute('class', 'account-menu');

		let list = document.createElement('ul');
		list.setAttribute('class', 'clean-list');
		list.setAttribute('role', 'list');

		let nameLi = document.createElement('li');
		nameLi.textContent = userInfo.given + ' ' + userInfo.family;
		list.appendChild(nameLi);

		let emailLi = document.createElement('li');
		emailLi.textContent = userInfo.email;
		list.appendChild(emailLi);

		let userMenuKeys = Object.keys(userInfo.menus);
		for (let menuItemIndex = 0; menuItemIndex < userMenuKeys.length; menuItemIndex++) {
			let menuItemKey = userMenuKeys[menuItemIndex];
			let menuLi = document.createElement('li');
			menuLi.innerHTML = '<a href="' + userInfo.menus[menuItemKey]['url'] + '">' + translate.translate(menuItemKey, languageCode) + '</a>';
			list.appendChild(menuLi);
		}

		fragment.appendChild(list);
		accMenu.appendChild(fragment);

		//adding the menu to the header
		let domTargetSmall = document.querySelector('.logo-link');
		let domTargetWide = document.querySelector('.global-nav__inner ul');

		toggleButton.setAttribute('type', 'button');
		toggleButton.setAttribute('class', 'button button--ghost with-icon--larger');
		toggleButton.setAttribute('data-trigger', 'account-menu');
		toggleButton.setAttribute('aria-expanded', 'false');
		toggleButton.innerHTML = '<span class="sr-only">' + translate.translate('my-account', languageCode) + ' <span class="visuallyhidden">(' + translate.translate( 'logged-in' , languageCode) + ')</span></span><div class="avatar avatar--small icon"><img alt="" src="' + userInfo.avatar.thumbnail + '"/></div>';

		// Media query event handler
		let mqValue = maxWidth / 16;
		mq = window.matchMedia('(min-width: ' + mqValue + 'em)');
		mqListener = insertAccountBtn;
		mq.addListener(insertAccountBtn);
		insertAccountBtn(mq);

		function insertAccountBtn (mq) {

			if (!(mq.matches)) {

				domTargetSmall.parentNode.insertBefore(toggleButton, domTargetSmall.nextSibling);
				toggleButton.parentNode.insertBefore(accMenu, toggleButton.nextSibling);
				status.textContent = statusText;

			} else {

				domTargetWide.parentNode.insertBefore(toggleButton, domTargetWide.nextSibling);
				toggleButton.parentNode.insertBefore(accMenu, toggleButton.nextSibling);
				status.textContent = statusText;

			}

			document.querySelector('body').classList.add('signed-in');

		}

		//add toggling action to button
		// (added once per page; the handlers act on whichever menu is current)
		if (!listenersAdded) {
			listenersAdded = true;

			// @todo Not sure if this is sufficient or whether there needs to be a re-usable function to check this. This is for the visual styling on button
			// if (profile.messages === true) {
			// 	accountToggler.classList.add('js-has-msg');
			// } else {
			// 	accountToggler.classList.remove('js-has-msg');
			// }

			document.addEventListener('click', function (event) {

				if (event.target.matches('[data-trigger="account-menu"]')) {

					if (event.target.getAttribute('aria-expanded') === 'false') {

						event.target.setAttribute('aria-expanded', 'true');

					} else {

						event.target.setAttribute('aria-expanded', 'false');

					}

				} else {

					if (toggleButton && toggleButton.getAttribute('aria-expanded') === 'true') {
						toggleButton.setAttribute('aria-expanded', false);
						accMenu.setAttribute('aria-hidden', 'true');
					}

				}

			}, false);

			document.addEventListener('keyup', function (event) {

				if (event.defaultPrevented) {
					return;
				}

				let key = event.key || event.keyCode;

				if (key === 'Escape' || key === 'Esc' || key === 27) {

					if (toggleButton && toggleButton.getAttribute('aria-expanded') === 'true') {
						toggleButton.setAttribute('aria-expanded', false);
						accMenu.setAttribute('aria-hidden', 'true');
					}

				}

			});

		}

	};

	const loginLink = document.querySelector('#account-login-link');
	if (loginLink) {
		loginLink.href = 'https://auth.w3.org/?url=' + encodeURI(window.location.href);
		loginLink.firstChild.textContent = translate.translate('sign-in', document.documentElement.lang);

		// Build the menu from the cached response right away, in the same task
		// that sets "Sign in", so "Sign in" is never painted for a signed-in user
		let cachedResponse = null;
		try {
			cachedResponse = localStorage.getItem(cacheKey);
		} catch (e) {}
		if (cachedResponse) {
			try {
				buildAccountMenu(JSON.parse(cachedResponse));
			} catch (e) {
				cachedResponse = null;
				removeAccountMenu();
			}
		}

		// the cache check is done, so the login link can be shown if no menu was built
		document.documentElement.classList.add('account-ready');

		let userInfoRequest = new XMLHttpRequest();
		userInfoRequest.open('GET', 'https://www.w3.org/account/user-menu/', true)
		userInfoRequest.withCredentials = true;

		userInfoRequest.onload = function () {
			let response;
			if (this.status === 200) {
				response = this.response;
			} else if (this.status === 401 || this.status === 403) {
				// treat as signed out
				response = '';
			} else {
				// transient error: keep whatever is showing
				return;
			}

			// unchanged since it was cached: nothing to do
			if (response === (cachedResponse || '')) {
				return;
			}

			if (response.length > 0) {
				userInfo = JSON.parse(response);
				buildAccountMenu(userInfo);
				try {
					localStorage.setItem(cacheKey, response);
				} catch (e) {}
			} else {
				removeAccountMenu();
				try {
					localStorage.removeItem(cacheKey);
				} catch (e) {}
			}
		}

		userInfoRequest.send();

	}

};

export {accountMenu};
