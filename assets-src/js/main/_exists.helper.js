/**
 * Check whether an element exists in the DOM
 * @param elem
 * @return {boolean}
 */

var exists = function(elem) {
	return (elem !== 'undefined' && elem !== null && (elem.length >= 0 || elem.innerHTML.length >= 0))
};

export {exists};