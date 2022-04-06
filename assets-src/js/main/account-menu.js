import {translate} from "./translations";

var accountMenu = function () {

	// Helper: Check whether element exists
	function exists(elem) {
		return (elem != null && (elem.length >= 0 || elem.innerHTML.length >= 0) )
	}

	let userInfo = null;

	const buildAccountMenu = function(userInfo) {
		if (userInfo == null || userInfo.length < 1) {
			return;
		}

		//getting the page language
		var languageCode = document.documentElement.lang;

		//generating the menu markup
		let fragment = document.createDocumentFragment();
		let status = document.querySelector('.global-header [role="status"]');
		let statusText;
		let toggleButton = document.createElement('button');
		let accMenu = document.createElement('div');
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
		toggleButton.innerHTML = '<span class="sr-only">' + translate.translate('my-account', languageCode) + ' <span class="visuallyhidden">(' + translate.translate( 'logged-in' , languageCode) + ')</span></span><div class="avatar avatar--small icon"><img alt="" src="' + userInfo.avatar.small + '"/></div>';

		// Media query event handler
		let mq = window.matchMedia('(min-width: 71.25em)');
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
		let accountToggler = document.querySelector('[data-trigger="account-menu"]');

		if (exists(accountToggler)) {

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

					if (accountToggler.getAttribute('aria-expanded') === 'true') {
						accountToggler.setAttribute('aria-expanded', false);
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

					if (accountToggler.getAttribute('aria-expanded') === 'true') {
						accountToggler.setAttribute('aria-expanded', false);
						accMenu.setAttribute('aria-hidden', 'true');
					}

				}

			});

		}

	};

	const loginLink = document.querySelector('#account-login-link');
	if (loginLink) {
		loginLink.href = '/account/login/?redirect_url=' + encodeURI(window.location.href);
		var userInfoRequest = new XMLHttpRequest();
		userInfoRequest.open('GET', '/account/user-menu/', true)
		userInfoRequest.withCredentials = true;

		userInfoRequest.onload = function () {
			if (this.status === 200) {
				if (this.response.length > 0) {
					userInfo = JSON.parse(this.response);
					buildAccountMenu(userInfo);
				}
			}
		}

		userInfoRequest.send();

	}

};

export {accountMenu};
