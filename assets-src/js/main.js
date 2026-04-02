import {accountMenu} from "./main/account-menu";
import {cardEnhancement} from "./main/cards";
import {collapsibles} from "./main/collapsibles";
import {disclosureWidget} from "./main/disclosure-widget";
import {formErrorSummary} from "./main/form-error-summary";
import {navigation} from "./main/navigation";
import {responsiveTables} from "./main/responsive-tables";
import {flashes} from "./main/flashes";
import {headingAnchors} from './main/heading-anchors';
import {videoHero} from './main/video-hero';

function domLoadedActions() {
	accountMenu();
	cardEnhancement();
	collapsibles();
	disclosureWidget();
	formErrorSummary();
	responsiveTables();
	flashes();
	headingAnchors();
	videoHero();

	/* Create a navDoubleLevel object and initiate double-level navigation for a <ul> with the correct data-component attribute */
	const navDoubleIntro = document.querySelector('ul[data-component="nav-double-intro"]');

	if (navDoubleIntro) {
		let siteNav = new navigation(navDoubleIntro, {
			breakpoint: 1120,
			cloneTopLevelLink: false,
			submenuIntro: true
		});
		siteNav.init();
	}
}

if (document.readyState === 'loading') {  // Loading hasn't finished yet
	document.addEventListener('DOMContentLoaded', domLoadedActions);
} else {  // `DOMContentLoaded` has already fired
	domLoadedActions();
}


// Tie the responsiveTables function to a resize event, and debounce for performance
var timeout;

window.addEventListener('resize', function (event) {

	// If timer is null, reset it to 66ms and run desired functions.
	// Otherwise, wait until timer is cleared
	if (!timeout) {
		timeout = setTimeout(function () {

			// Reset timeout
			timeout = null;

			// Run our resize functions
			responsiveTables();

		}, 66);
	}

}, false);
