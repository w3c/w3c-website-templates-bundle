/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, exports) {

/**
 * Relocates comment reply form to parent comment and updates title
 */
window.addComment = function (window) {
  // Avoid scope lookups on commonly used variables.
  var document = window.document;
  var commentReplyTitle = document.querySelector('[data-title="reply"]');
  var origReplyTitle = commentReplyTitle.textContent; // I18N

  var cancelText;

  if (document.documentElement.lang === 'ja') {
    cancelText = '返信をキャンセルする';
  } else if (document.documentElement.lang === 'zh-hans') {
    cancelText = '取消回复';
  } else {
    cancelText = 'Cancel reply';
  }

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

  function moveForm(addBelowId, commentId, postId) {
    var addBelowElement = document.getElementById(addBelowId);
    var respondElement = document.querySelector('[data-respondelement]');
    addPlaceHolder(respondElement);
    addCancelBtn(respondElement);
    addBelowElement.parentNode.insertBefore(respondElement, addBelowElement.nextSibling);
  } // Check the DOM is ready


  if (document.readyState === 'interactive') {
    changeLinksToBtns();
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
        event.target.style.display = 'none';
      }
    }, false);
  }
}(window);

/***/ })

/******/ });