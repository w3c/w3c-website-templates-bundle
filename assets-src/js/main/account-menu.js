var accountMenu = (function () {

	// Helper: Check whether element exists
	function exists(elem) {
		return (elem != null && (elem.length >= 0 || elem.innerHTML.length >= 0) )
	}

	// @todo Check whether this if statement for the prototype version is accurate for the live site or needs replacing with a different mechanism
	if (document.querySelector('.signed-in')) {

		// @todo Need JS to make API call to return JSON object with these properties
		let profile = {
			name: 'Simon Jones',
			email: 'simon@studio24.net',
			avatar: 'https://www.w3.org/2006/05/u/1682ihk1hqqo-tn.jpg',
			messages: true
		}

		let fragment = document.createDocumentFragment();
		let status = document.querySelector('.global-header [role="status"]');
		let statusText;
		let toggleButton = document.createElement('button');
		let accMenu = document.createElement('div');
		accMenu.setAttribute('class', 'account-menu');

		// @todo This array created from profile object should only contain those values needed for the dropdown menu (name and email)
		let profileArray = Object.keys(profile).map(function(item) {
			return profile[item];
		});

		let list = document.createElement('ul');
		list.setAttribute('class', 'clean-list');
		list.setAttribute('role', 'list');
		profileArray.forEach(function (item) {

			let li = document.createElement('li');
			li.textContent = item;
			list.appendChild(li);
		});

		let accountLink = document.createElement('li');
		let signOutLink = document.createElement('li');

		// I18N
		if (document.documentElement.lang === 'ja') {
			accountLink.innerHTML = '<a href="page.html" hreflang="ja">マイアカウント</a>';
			if (profile.messages === true) {
				statusText = '未読メッセージがあります';
			} else {
				statusText = '未読メッセージはありません';
			}
		} else if (document.documentElement.lang === 'zh-hans') {
			accountLink.innerHTML = '<a href="page.html" hreflang="zh-hans">我的帐户</a>';
			if (profile.messages === true) {
				statusText = '您有未读消息';
			} else {
				statusText = '您没有未读邮件';
			}
		} else {
			accountLink.innerHTML = '<a href="page.html">My account</a>';
			if (profile.messages === true) {
				statusText = 'You have unread messages';
			} else {
				statusText = 'You have no unread messages';
			}
		}

		if (document.documentElement.lang === 'ja') {
			signOutLink.innerHTML = '<a href="page.html" hreflang="ja">サインアウト</a>';
		} else if (document.documentElement.lang === 'zh-hans') {
			signOutLink.innerHTML = '<a href="page.html" hreflang="zh-hans">登出</a>';
		} else {
			signOutLink.innerHTML = '<a href="page.html">Sign out</a>';
		}

		list.append(accountLink);
		list.appendChild(signOutLink);

		fragment.appendChild(list);
		accMenu.appendChild(fragment);

		let domTargetSmall = document.querySelector('.logo-link');
		let domTargetWide = document.querySelector('.global-nav__inner ul');

		toggleButton.setAttribute('type', 'button');
		toggleButton.setAttribute('class', 'button button--ghost with-icon--larger');
		toggleButton.setAttribute('data-trigger', 'account-menu');
		toggleButton.setAttribute('aria-expanded', 'false');
		toggleButton.innerHTML = '<span class="sr-only">My account </span><div class="avatar avatar--small"><img alt="" src="' + profile.avatar + '"/></div>';

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

		}

		let accountToggler = document.querySelector('[data-trigger="account-menu"]');

		if (exists(accountToggler)) {

			// @todo Not sure if this is sufficient or whether there needs to be a re-usable function to check this. This is for the visual styling on button
			if (profile.messages === true) {
				accountToggler.classList.add('js-has-msg');
			} else {
				accountToggler.classList.remove('js-has-msg');
			}

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

	}

})();

export {accountMenu};