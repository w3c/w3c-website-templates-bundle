var formErrorSummary = function () {

	let errorSummary = document.querySelector('[data-component="error-summary"]');

	if (errorSummary) {
		errorSummary.focus();
	}

};

export {formErrorSummary};