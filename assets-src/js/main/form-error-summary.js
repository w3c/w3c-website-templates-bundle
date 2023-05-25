import {exists} from './_exists.helper';
var formErrorSummary = function () {

	let errorSummary = document.querySelector('[data-component="error-summary"]');

	if (exists(errorSummary)) {

		errorSummary.focus();

	}

};

export {formErrorSummary};