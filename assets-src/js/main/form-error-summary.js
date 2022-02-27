var formErrorSummary = function () {

	// Helper: Check whether element exists
	function exists(elem) {
		return (elem != null && (elem.length >= 0 || elem.innerHTML.length >= 0) )
	}

	let errorSummary = document.querySelector('[data-component="error-summary"]');

	if (exists(errorSummary)) {

		errorSummary.focus();

	}

};

export {formErrorSummary};