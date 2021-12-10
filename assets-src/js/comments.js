import {translate} from "./main/translations";

/**
 * Replaces comment dates with their equivalent time difference (xx hours/days ago)
 */
let commentsTimeDiff = (function() {
	document.querySelectorAll(".comment__author time").forEach(function (time) {
		time.setAttribute('title', time.innerHTML.trim());
		const date = new Date(time.getAttribute("datetime"));
		const deltaSeconds = Math.round((date.getTime() - Date.now()) / 1000);
		const deltaMinutes = Math.round(deltaSeconds / 60);
		const deltaHours = Math.round(deltaSeconds / (60 * 60));
		const deltaDays = Math.round(deltaSeconds / (60 * 60 * 24));
		const deltaMonths = Math.round(deltaSeconds / (60 * 60 * 24 * 30));
		const deltaYears = Math.round(deltaSeconds / (60 * 60 * 24 * 365));

		const formatter = new Intl.RelativeTimeFormat(document.documentElement.lang, {numeric: "auto"});
		if (deltaYears != 0) {
			time.innerHTML = formatter.format(deltaYears, 'years');
		} else if (deltaMonths != 0) {
			time.innerHTML = formatter.format(deltaMonths, 'months');
		} else if (deltaDays != 0) {
			time.innerHTML = formatter.format(deltaDays, 'days');
		} else if (deltaHours != 0) {
			time.innerHTML = formatter.format(deltaHours, 'hours');
		} else if (deltaMinutes != 0) {
			time.innerHTML = formatter.format(deltaMinutes, 'minutes');
		} else {
			time.innerHTML = formatter.format(deltaSeconds, 'seconds');
		}
	});
})();

/**
 * Relocates comment reply form to parent comment and updates title
 */

window.addComment = (function(window) {

	// Avoid scope lookups on commonly used variables.
	let document = window.document;
	let commentReplyTitle = document.querySelector('[data-title="reply"]');
	let origReplyTitle = commentReplyTitle.textContent;
	let commentForm = document.getElementById('comment-form');

	// I18N
	let cancelText = translate.translate('cancelReply', document.documentElement.lang);

	function changeLinksToBtns() {

		let linksArray = Array.prototype.slice.call(document.querySelectorAll('[data-replylink]'));

		linksArray.forEach(function (link) {

			let attributes = link.dataset;
			let btn = document.createElement('button');
			btn.setAttribute('class', 'button button--ghost');
			btn.innerHTML = link.innerHTML;

			for (let key in attributes) {

				btn.setAttribute('data-' + key, attributes[key]);

			}

			link.parentNode.replaceChild(btn, link);

		});

	}

	function addPlaceHolder(respondElement) {

		let temporaryFormId = 'js-temp-form-div';
		let temporaryElement = document.getElementById(temporaryFormId);

		if (temporaryElement) {

			// The element already exists, no need to recreate.
			return;

		}

		temporaryElement = document.createElement('div');
		temporaryElement.setAttribute('id', temporaryFormId);
		temporaryElement.style.display = 'none';
		respondElement.parentNode.insertBefore(temporaryElement, respondElement);

	}

	function addCancelBtn(respondElement) {

		let cancelBtnId = 'js-cancel-reply';
		let cancelBtn = document.getElementById(cancelBtnId);

		if (cancelBtn) {

			cancelBtn.style.display = '';
			return;

		}

		let targetDiv = respondElement.querySelector('div');
		cancelBtn = document.createElement('button');
		cancelBtn.setAttribute('id', cancelBtnId);
		cancelBtn.setAttribute('class','button button--ghost');
		cancelBtn.textContent = cancelText;
		targetDiv.appendChild(cancelBtn);

	}

	function moveForm(addBelowId, commentId) {

		let addBelowElement = document.getElementById(addBelowId);
		let respondElement = document.querySelector('[data-respondelement]');

		// Get the hidden fields
		let parentIdField = commentForm.querySelector('input[name="parent"]');
		parentIdField.value = commentId;

		addPlaceHolder(respondElement);

		addCancelBtn(respondElement);

		addBelowElement.parentNode.insertBefore(respondElement, addBelowElement.nextSibling);

	}

	// Check the DOM is ready
	if (document.readyState === 'interactive') {

		changeLinksToBtns();

		// Hide cancel link used for non-JS fallback
		commentForm.querySelector('[type="submit"]').nextElementSibling.style.display = 'none';

		document.addEventListener('click', function (event) {

			if (event.target.matches('[data-replylink]')) {

				let replyLink = event.target;
				let newReplyTitle = replyLink.getAttribute('data-replyto');
				let commentId = replyLink.getAttribute('data-belowelement');
				let parentId = replyLink.getAttribute('data-commentid');
				let postId = replyLink.getAttribute('data-postid');

				if (!commentId || !parentId || !postId) return;

				event.preventDefault();

				commentReplyTitle.textContent = newReplyTitle;

				moveForm(commentId, parentId, postId);

			}

			if (event.target.matches('#js-cancel-reply')) {

				let temporaryElement = document.getElementById('js-temp-form-div');
				let respondElement = document.querySelector('[data-respondelement]');

				commentReplyTitle.textContent = origReplyTitle;

				temporaryElement.parentNode.replaceChild(respondElement, temporaryElement);
				respondElement.querySelector('input[name="parent"]').value = '';

				event.target.style.display = 'none';

			}

		}, false);

	}

})(window);
