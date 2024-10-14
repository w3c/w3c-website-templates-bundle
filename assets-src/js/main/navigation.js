import './_object.assign.polyfill';
import './_closest.polyfill.js';
import {translate} from './translations';

/**
 * Object for creating double-level navigation menus
 * Inspired by https://github.com/mrwweb/clicky-menus/blob/main/clicky-menus.js
 * Uses event delegation to handle events for improved performance, and data attributes for targeting elements
 * Also manages button for toggling navigation on mobile
 *
 * @param {Element} menu - the top level navigation <ul>
 * @param {Object} options - configuration options for the navigation
 * @param {number} [options.breakpoint=1024] - pixel value at which the button for toggling the mobile navigation is hidden. Is converted to em (assumes 16px browser default).
 * @param {boolean} [options.cloneTopLevelLink=true] - whether to copy the link to be replaced with a button and add it to the sub menu.
 * @param {string} [options.mobileIcon] - SVG icon used for the button to show/hide the navigation on mobile.
 * @param {boolean} [options.submenuIntro=false] - whether the sub menu includes introductory text.
 */

const navigation = function(menu, options) {
	let	container = menu.parentElement;
	let mobileToggle = document.querySelector('[data-trigger="mobile-nav"]');
	let languageCode = document.documentElement.lang;

	// Default settings
	let defaults = {
		breakpoint: 1024,
		cloneTopLevelLink: true,
		mobileIcon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="30" width="30" class="icon icon--larger" focusable="false" aria-hidden="true" fill="currentColor">' +
			'<path class="menu-icon" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"/>' +
			'<path class="close-icon" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"/>' +
			'</svg>',
		submenuIntro: false,
	};

	// Merge user options into defaults
	let settings = Object.assign({}, defaults, options);

	this.init = function() {
		mobileToggleSetup();
		menuSetup();
		document.addEventListener('click', clickHandler);
		document.addEventListener('keyup', closeOnEscKey);
	}

	function closeSubmenus() {
		let subNavTriggers = Array.prototype.slice.call(menu.querySelectorAll('[data-trigger="sub-nav"]'));
		subNavTriggers.forEach(function (trigger) {
			trigger.setAttribute('aria-expanded', 'false');
		});
	}

	function clickHandler(event) {

		if (event.target.matches('[data-trigger="mobile-nav"]')) {
			if (event.target.matches('[aria-expanded="true"]')) {
				closeSubmenus();
				event.target.setAttribute('aria-expanded', 'false');
			} else {
				event.target.setAttribute('aria-expanded', 'true');
			}
		} else if (event.target.matches('[data-trigger="sub-nav"]')) {
			const button = event.target;
			const submenu = button.nextElementSibling;
			if (event.target.matches('[aria-expanded="true"]')) {
				event.target.setAttribute('aria-expanded', 'false');
			} else {
				closeSubmenus();
				event.target.setAttribute('aria-expanded', 'true');
				if (settings.submenuIntro === false) {
					preventOffScreenSubmenu(submenu);
				}
			}
		} else if (event.target.matches('[data-button="mobile-back"]')) {
			event.target.closest('li').querySelector('[data-trigger="sub-nav"]').setAttribute('aria-expanded', 'false');
		} else {
			closeSubmenus();
		}
	}

	function closeOnEscKey(event) {
		if (event.defaultPrevented) {
			return;
		}

		let key = event.key || event.keyCode;

		if (key === 'Escape' || key === 'Esc' || key === 27) {
			let subNavTriggers = Array.prototype.slice.call(menu.querySelectorAll('[data-trigger="sub-nav"]'));
			let result = true;

			for (let i = 0; i < subNavTriggers.length; i++) {
				if (subNavTriggers[i].getAttribute('aria-expanded') === 'true') {
					result = false;
					break;
				}
			}

			if (result && mobileToggle.style.display === 'inline-flex') {
				mobileToggle.setAttribute('aria-expanded', 'false');
			} else {
				closeSubmenus();
			}
		}
	}

	function preventOffScreenSubmenu(submenu) {
		const screenWidth =	window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
		const parent = submenu.parentElement;
		const menuLeftEdge = parent.getBoundingClientRect().left;
		const menuRightEdge = menuLeftEdge + submenu.offsetWidth;

		if (menuRightEdge + 32 > screenWidth) {
			// adding 32 so it's not too close
			submenu.classList.add('js-sub-menu-right');
		}
	}

	function mobileToggleSetup() {
		mobileToggle.innerHTML = translate.translate('menu', languageCode);
		mobileToggle.innerHTML += settings.mobileIcon;
		mobileToggle.setAttribute('aria-expanded', 'false');
		mobileToggle.style.display = 'inline-flex';

		let mqValue = settings.breakpoint / 16;
		let mq = window.matchMedia('(min-width: ' + mqValue + 'em)');
		mq.addListener(WidthChange);
		WidthChange(mq);

		// Media query change
		function WidthChange(mq) {
			if (!(mq.matches)) {
				mobileToggle.setAttribute('aria-expanded', 'false');
				mobileToggle.style.display = 'inline-flex';
			} else {
				mobileToggle.setAttribute('aria-expanded', 'true');
				mobileToggle.style.display = 'none';
			}
		}
	}

	function menuSetup() {
		if (settings.submenuIntro === true) {
			container.classList.add('js-nav-with-intro');
		}
		const subMenuWrappers = Array.prototype.slice.call(menu.querySelectorAll('[data-nav="submenu"]'));

		subMenuWrappers.forEach(function (wrapper) {
			wrapper.style="";

			const menuItem = wrapper.parentElement;

			if ('undefined' !== typeof wrapper) {
				let button = convertLinkToButton(menuItem);

				setUpAria(wrapper, button);
			}
		});
	}

	/**
	 * Why do this? See https://justmarkup.com/articles/2019-01-21-the-link-to-button-enhancement/
	 */
	function convertLinkToButton(menuItem) {
		const link = menuItem.getElementsByTagName('a')[0];
		const svg = link.querySelector('svg[style]');
		if (null !== svg) {
			svg.removeAttribute('style');
		}
		const linkHTML = link.innerHTML;
		const linkAtts = link.attributes;
		const button = document.createElement('button');
		button.setAttribute('data-trigger', 'sub-nav');
		const li = document.createElement('li');
		let subMenu = link.nextElementSibling.querySelector('ul');

		if (null !== link) {
			// copy button attributes and content from link
			button.innerHTML = linkHTML.trim();

			for (let i = 0, length = linkAtts.length; i < length; i++) {
				let attr = linkAtts[i];
				if ('href' !== attr.name) {
					button.setAttribute(attr.name, attr.value);
				}
			}

			if (settings.cloneTopLevelLink === true) {
				// insert cloned link as first item of submenu list
				const linkClone = link.cloneNode(true);
				li.appendChild(linkClone);
				subMenu.insertBefore(li, subMenu.children[0]);
			}

			menuItem.replaceChild(button, link);
		}

		// Insert a "back" button
		const backButton = document.createElement('button');
		backButton.setAttribute('data-button', 'mobile-back');
		backButton.setAttribute('class', 'button button--ghost u-full-width');
		backButton.innerHTML = translate.translate('backToMainMenu', languageCode);
		if (settings.submenuIntro === true) {
			subMenu.parentNode.insertBefore(backButton, subMenu.parentNode.children[0]);
		} else subMenu.parentNode.insertBefore(backButton, subMenu);

		return button;
	}

	function setUpAria(submenu, button) {
		const submenuId = submenu.getAttribute('id');
		let id;

		if (null === submenuId) {
			id = 'js-' + button.textContent.trim().replace(/\s+/g, '-').toLowerCase() + '-submenu';
		} else {
			id = submenuId + '-submenu';
		}

		// set button ARIA
		button.setAttribute('aria-controls', id);
		button.setAttribute('aria-expanded', 'false');

		// set submenu ARIA
		submenu.setAttribute('id', id);
	}
}

export {navigation};