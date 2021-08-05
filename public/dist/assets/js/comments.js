/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
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
/******/ })()
;