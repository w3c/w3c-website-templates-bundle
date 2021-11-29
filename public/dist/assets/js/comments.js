/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 5:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "translate": () => (/* binding */ translate)
/* harmony export */ });
var translate = {
  'translations': {
    //microcopy translations
    'en': {
      'admin': 'Admin',
      'backToMainMenu': 'Back to main menu',
      'cancelReply': 'Cancel reply',
      'memberSite': 'Member Site',
      'logout': 'Logout',
      'menu': 'Menu',
      'myAccount': 'My Account',
      'myCalendar': 'My Calendar',
      'myOrganization': 'My Organization',
      'teamSite': 'Team Site',
      'sliderDescription': 'carousel',
      'controlsDescription': 'carousel controls',
      'previousSlide': 'previous slide',
      'nextSlide': 'next slide',
      'slideText': 'Slide {x} of {y}'
    },
    'ja': {
      'admin': '__admin',
      'backToMainMenu': '__backToMainMenu',
      'cancelReply': '__cancelReply',
      'memberSite': '__memberSite',
      'logout': '__logout',
      'menu': '__menu',
      'myAccount': '__myAccount',
      'myCalendar': '__myCalendar',
      'myOrganization': '__myOrganization',
      'teamSite': '__teamsite',
      'sliderDescription': '__sliderDescription',
      'controlsDescription': '__controlsDescription',
      'previousSlide': '__previousSlide',
      'nextSlide': '__nextSlide',
      'slideText': '__Slide {x} of {y}'
    },
    'zh-hans': {
      'admin': '__admin',
      'backToMainMenu': '__backToMainMenu',
      'cancelReply': 'cancelReply',
      'memberSite': '__memberSite',
      'logout': '__logout',
      'menu': '__menu',
      'myAccount': '__myAccount',
      'myCalendar': '__myCalendar',
      'myOrganization': '__myOrganization',
      'teamSite': '__teamsite',
      'sliderDescription': '__sliderDescription',
      'controlsDescription': '__controlsDescription',
      'previousSlide': '__previousSlide',
      'nextSlide': '__nextSlide',
      'slideText': '__Slide {x} of {y}'
    }
  },
  //snippetReference = index of micro copy snippet in translations object above
  //languageCode = code of the target language
  //injection = object of values to inject into the string if interpolation is required, object keys should match references in the translations snippets,
  // e.g. 'Slide {x} of {y} requires an object with keys x and y.
  'translate': function translate(snippetReference, languageCode) {
    var injections = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    //without a snippet reference, we don't know what to translate
    if (snippetReference === undefined || snippetReference === null || snippetReference.length < 1) {
      return;
    } //language code defaults to English


    if (languageCode === undefined || languageCode === null || this.translations[languageCode] === undefined) {
      languageCode = 'en';
    }

    var translatedString = this['translations'][languageCode][snippetReference];
    var injectionsKeys = Object.keys(injections);

    if (injectionsKeys.length > 0) {
      for (var keyIndex = 0; keyIndex < injectionsKeys.length; keyIndex++) {
        translatedString = translatedString.replace(new RegExp('\\{' + injectionsKeys[keyIndex] + '\\}', 'gm'), injections[injectionsKeys[keyIndex]]);
      }
    }

    return translatedString;
  }
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_translations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

/**
 * Relocates comment reply form to parent comment and updates title
 */

window.addComment = function (window) {
  // Avoid scope lookups on commonly used variables.
  var document = window.document;
  var commentReplyTitle = document.querySelector('[data-title="reply"]');
  var origReplyTitle = commentReplyTitle.textContent;
  var commentForm = document.getElementById('comment-form'); // I18N

  var cancelText = _main_translations__WEBPACK_IMPORTED_MODULE_0__.translate.translate('cancelReply', document.documentElement.lang);

  function changeLinksToBtns() {
    var linksArray = Array.prototype.slice.call(document.querySelectorAll('[data-replylink]'));
    linksArray.forEach(function (link) {
      var attributes = link.dataset;
      var btn = document.createElement('button');
      btn.setAttribute('class', 'button button--ghost');
      btn.innerHTML = link.innerHTML;

      for (var key in attributes) {
        btn.setAttribute('data-' + key, attributes[key]);
      }

      link.parentNode.replaceChild(btn, link);
    });
  }

  function addPlaceHolder(respondElement) {
    var temporaryFormId = 'js-temp-form-div';
    var temporaryElement = document.getElementById(temporaryFormId);

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
    var cancelBtnId = 'js-cancel-reply';
    var cancelBtn = document.getElementById(cancelBtnId);

    if (cancelBtn) {
      cancelBtn.style.display = '';
      return;
    }

    var targetDiv = respondElement.querySelector('div');
    cancelBtn = document.createElement('button');
    cancelBtn.setAttribute('id', cancelBtnId);
    cancelBtn.setAttribute('class', 'button button--ghost');
    cancelBtn.textContent = cancelText;
    targetDiv.appendChild(cancelBtn);
  }

  function moveForm(addBelowId, commentId) {
    var addBelowElement = document.getElementById(addBelowId);
    var respondElement = document.querySelector('[data-respondelement]'); // Get the hidden fields

    var parentIdField = commentForm.querySelector('input[name="parent"]');
    parentIdField.value = commentId;
    addPlaceHolder(respondElement);
    addCancelBtn(respondElement);
    addBelowElement.parentNode.insertBefore(respondElement, addBelowElement.nextSibling);
  } // Check the DOM is ready


  if (document.readyState === 'interactive') {
    changeLinksToBtns(); // Hide cancel link used for non-JS fallback

    commentForm.querySelector('[type="submit"]').nextElementSibling.style.display = 'none';
    document.addEventListener('click', function (event) {
      if (event.target.matches('[data-replylink]')) {
        var replyLink = event.target;
        var newReplyTitle = replyLink.getAttribute('data-replyto');
        var commentId = replyLink.getAttribute('data-belowelement');
        var parentId = replyLink.getAttribute('data-commentid');
        var postId = replyLink.getAttribute('data-postid');
        if (!commentId || !parentId || !postId) return;
        event.preventDefault();
        commentReplyTitle.textContent = newReplyTitle;
        moveForm(commentId, parentId, postId);
      }

      if (event.target.matches('#js-cancel-reply')) {
        var temporaryElement = document.getElementById('js-temp-form-div');
        var respondElement = document.querySelector('[data-respondelement]');
        commentReplyTitle.textContent = origReplyTitle;
        temporaryElement.parentNode.replaceChild(respondElement, temporaryElement);
        respondElement.querySelector('input[name="parent"]').value = '';
        event.target.style.display = 'none';
      }
    }, false);
  }
}(window);
})();

/******/ })()
;