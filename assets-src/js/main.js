import {accountMenu} from "./main/account-menu";
import {cardEnhancement} from "./main/cards";
import {collapsibleCards} from "./main/collapsible-cards";
import {collapsibleCheckboxes} from "./main/collapsible-checkboxes";
import {collapsibles} from "./main/collapsibles";
import {disclosureWidget} from "./main/disclosure-widget";
import {formErrorSummary} from "./main/form-error-summary";
import {navigation} from "./main/navigation";
import {responsiveTables} from "./main/responsive-tables";

responsiveTables();

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
