/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "translate": () => (/* binding */ translate)
/* harmony export */ });
var translate = {
  'translations': {
    //microcopy translations
    'ar': {
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
    'de': {
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
    'es': {
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
    'fr': {
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
    'hu': {
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
    'pt-br': {
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


/***/ }),
/* 4 */,
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "accountMenu": () => (/* binding */ accountMenu)
/* harmony export */ });
/* harmony import */ var _translations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);


var accountMenu = function () {
  // Helper: Check whether element exists
  function exists(elem) {
    return elem != null && (elem.length >= 0 || elem.innerHTML.length >= 0);
  }

  var userInfo = null;

  var buildAccountMenu = function buildAccountMenu(userInfo) {
    if (userInfo == null || userInfo.length < 1) {
      return;
    } //getting the page language


    var languageCode = document.documentElement.lang; //generating the menu markup

    var fragment = document.createDocumentFragment();
    var status = document.querySelector('.global-header [role="status"]');
    var statusText;
    var toggleButton = document.createElement('button');
    var accMenu = document.createElement('div');
    accMenu.setAttribute('class', 'account-menu');
    var list = document.createElement('ul');
    list.setAttribute('class', 'clean-list');
    list.setAttribute('role', 'list');
    var nameLi = document.createElement('li');
    nameLi.textContent = userInfo.given + ' ' + userInfo.family;
    list.appendChild(nameLi);
    var emailLi = document.createElement('li');
    emailLi.textContent = userInfo.email;
    list.appendChild(emailLi);
    var userMenuKeys = Object.keys(userInfo.menus);

    for (var menuItemIndex = 0; menuItemIndex < userMenuKeys.length; menuItemIndex++) {
      var menuItemKey = userMenuKeys[menuItemIndex];
      var menuLi = document.createElement('li');
      menuLi.innerHTML = '<a href="' + userInfo.menus[menuItemKey]['url'] + '">' + _translations__WEBPACK_IMPORTED_MODULE_0__.translate.translate(menuItemKey, languageCode) + '</a>';
      list.appendChild(menuLi);
    }

    fragment.appendChild(list);
    accMenu.appendChild(fragment); //adding the menu to the header

    var domTargetSmall = document.querySelector('.logo-link');
    var domTargetWide = document.querySelector('.global-nav__inner ul');
    toggleButton.setAttribute('type', 'button');
    toggleButton.setAttribute('class', 'button button--ghost with-icon--larger');
    toggleButton.setAttribute('data-trigger', 'account-menu');
    toggleButton.setAttribute('aria-expanded', 'false');
    toggleButton.innerHTML = '<span class="sr-only">' + _translations__WEBPACK_IMPORTED_MODULE_0__.translate.translate('myAccount', languageCode) + ' </span><div class="avatar avatar--small icon"><img alt="" src="' + userInfo.avatar.small + '"/></div>'; // Media query event handler

    var mq = window.matchMedia('(min-width: 71.25em)');
    mq.addListener(insertAccountBtn);
    insertAccountBtn(mq);

    function insertAccountBtn(mq) {
      if (!mq.matches) {
        domTargetSmall.parentNode.insertBefore(toggleButton, domTargetSmall.nextSibling);
        toggleButton.parentNode.insertBefore(accMenu, toggleButton.nextSibling);
        status.textContent = statusText;
      } else {
        domTargetWide.parentNode.insertBefore(toggleButton, domTargetWide.nextSibling);
        toggleButton.parentNode.insertBefore(accMenu, toggleButton.nextSibling);
        status.textContent = statusText;
      }

      document.querySelector('body').classList.add('signed-in');
    } //add toggling action to button


    var accountToggler = document.querySelector('[data-trigger="account-menu"]');

    if (exists(accountToggler)) {
      // @todo Not sure if this is sufficient or whether there needs to be a re-usable function to check this. This is for the visual styling on button
      // if (profile.messages === true) {
      // 	accountToggler.classList.add('js-has-msg');
      // } else {
      // 	accountToggler.classList.remove('js-has-msg');
      // }
      document.addEventListener('click', function (event) {
        if (event.target.matches('[data-trigger="account-menu"]')) {
          if (event.target.getAttribute('aria-expanded') === 'false') {
            event.target.setAttribute('aria-expanded', 'true');
          } else {
            event.target.setAttribute('aria-expanded', 'false');
          }
        } else {
          if (accountToggler.getAttribute('aria-expanded') === 'true') {
            accountToggler.setAttribute('aria-expanded', false);
            accMenu.setAttribute('aria-hidden', 'true');
          }
        }
      }, false);
      document.addEventListener('keyup', function (event) {
        if (event.defaultPrevented) {
          return;
        }

        var key = event.key || event.keyCode;

        if (key === 'Escape' || key === 'Esc' || key === 27) {
          if (accountToggler.getAttribute('aria-expanded') === 'true') {
            accountToggler.setAttribute('aria-expanded', false);
            accMenu.setAttribute('aria-hidden', 'true');
          }
        }
      });
    }
  };

  if (document.querySelector('#account-login-link')) {
    var userInfoRequest = new XMLHttpRequest();
    userInfoRequest.open('GET', 'https://www.w3.org/accounts/user-menu', true);
    userInfoRequest.withCredentials = true;

    userInfoRequest.onload = function () {
      if (this.status === 200) {
        if (this.response.length > 0) {
          userInfo = JSON.parse(this.response);
          buildAccountMenu(userInfo);
        }
      }
    };

    userInfoRequest.send(); // // I18N
    // if (document.documentElement.lang === 'ja') {
    // 	accountLink.innerHTML = '<a href="page.html" hreflang="ja">マイアカウント</a>';
    // 	if (profile.messages === true) {
    // 		statusText = '未読メッセージがあります';
    // 	} else {
    // 		statusText = '未読メッセージはありません';
    // 	}
    // } else if (document.documentElement.lang === 'zh-hans') {
    // 	accountLink.innerHTML = '<a href="page.html" hreflang="zh-hans">我的帐户</a>';
    // 	if (profile.messages === true) {
    // 		statusText = '您有未读消息';
    // 	} else {
    // 		statusText = '您没有未读邮件';
    // 	}
    // } else {
    // 	accountLink.innerHTML = '<a href="page.html">My account</a>';
    // 	if (profile.messages === true) {
    // 		statusText = 'You have unread messages';
    // 	} else {
    // 		statusText = 'You have no unread messages';
    // 	}
    // }
  }
}();



/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cardEnhancement": () => (/* binding */ cardEnhancement)
/* harmony export */ });
/**
 * Card enhancement to trigger the main link whenever the card area is clicked
 * See https://css-tricks.com/block-links-the-search-for-a-perfect-solution/
 */
var cardEnhancement = function () {
  var cardsArray = Array.prototype.slice.call(document.querySelectorAll('[data-component="card"]'));

  if (cardsArray) {
    // Loop through cards adding a click event and identifying the main link
    cardsArray.forEach(function (card, index) {
      var mainLink = card.querySelector('.card__link');
      var clickableElems = Array.prototype.slice.call(card.querySelectorAll('[data-click]')); // Allow other links/buttons in the card to still be "clickable"

      if (clickableElems) {
        clickableElems.forEach(function (elem) {
          return elem.addEventListener("click", function (event) {
            return event.stopPropagation();
          });
        });
      }

      card.addEventListener('click', function () {
        var noTextSelected = !window.getSelection().toString();

        if (noTextSelected) {
          mainLink.click();
        }
      });
    });
  }
}();



/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "collapsibles": () => (/* binding */ collapsibles)
/* harmony export */ });
/**
 * Collapsible sections
 * See https://heydon.github.io/inclusive-components-demos/collapsible-sections/progressive.html
 */
var collapsibles = function () {
  // Get all the collapsible containers
  var collapseArray = Array.prototype.slice.call(document.querySelectorAll('[data-component="collapsibles"]'));

  if (collapseArray) {
    // Loop through containers
    collapseArray.forEach(function (item) {
      // Get headings inside a collapsible container
      var headingsArray = Array.prototype.slice.call(item.querySelectorAll('[data-heading="collapsibles"]')); // Loop through headings

      headingsArray.forEach(function (heading, index) {
        // Insert a button for opening/closing the collapsible section
        heading.innerHTML = '<button class="button--ghost" aria-expanded="false">' + heading.innerHTML + '<svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 320 512" class="icon icon--larger" focusable="false" aria-hidden="true" width="30px" height="30px"><use class="angle-down" href="' + jsAssetsPath + 'svg/nav-icons.svg#angle-down"></use><use class="angle-up" href="' + jsAssetsPath + 'svg/nav-icons.svg#angle-up"></use></svg></button>'; // Add appropriate aria role to the collapsible section

        heading.nextElementSibling.setAttribute('aria-hidden', 'true'); // Assign the button

        var btn = heading.querySelector('button'); // Add click event listener

        btn.addEventListener('click', function (event) {
          // Cast the state as a boolean
          var expanded = btn.getAttribute('aria-expanded') === 'true'; // Switch the state

          btn.setAttribute('aria-expanded', !expanded); // Switch the collapsible section's visibility

          heading.nextElementSibling.setAttribute('aria-hidden', expanded);
        });
      }); // End loop
    }); // End loop
  } // End if statement

}();



/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "disclosureWidget": () => (/* binding */ disclosureWidget)
/* harmony export */ });
var disclosureWidget = function () {
  var toggleButtonArray = Array.prototype.slice.call(document.querySelectorAll('[data-toggle="true"]'));

  var closeDisclosures = function closeDisclosures() {
    toggleButtonArray.forEach(function (btn) {
      if (btn.getAttribute('aria-expanded') === 'true') {
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  };

  if (toggleButtonArray.length > 0) {
    toggleButtonArray.forEach(function (btn) {
      btn.style = "";
      btn.setAttribute('aria-expanded', 'false');
    });

    if (document.body.classList.contains('group')) {
      // Media query change
      var WidthChange = function WidthChange(mq) {
        var toggleButton = document.querySelector('[data-toggle="true"]');

        if (!mq.matches) {
          toggleButton.setAttribute('aria-expanded', 'false');
        } else {
          toggleButton.removeAttribute('aria-expanded');
        }
      };

      // Media query event handler
      var mq = window.matchMedia('(min-width: 64em)');
      mq.addListener(WidthChange);
      WidthChange(mq);
    }

    document.addEventListener('click', function (event) {
      if (event.target.matches('[data-toggle="true"]')) {
        if (event.target.matches('[aria-expanded="false"]')) {
          closeDisclosures();
          event.target.setAttribute('aria-expanded', 'true');
        } else {
          event.target.setAttribute('aria-expanded', 'false');
        }
      } else {
        closeDisclosures();
      }
    });
    document.addEventListener('keyup', function (event) {
      if (event.defaultPrevented) {
        return;
      }

      var key = event.key || event.keyCode;

      if (key === 'Escape' || key === 'Esc' || key === 27) {
        closeDisclosures();
      }
    });
  }
}();



/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formErrorSummary": () => (/* binding */ formErrorSummary)
/* harmony export */ });
var formErrorSummary = function () {
  // Helper: Check whether element exists
  function exists(elem) {
    return elem != null && (elem.length >= 0 || elem.innerHTML.length >= 0);
  }

  var errorSummary = document.querySelector('[data-component="error-summary"]');

  if (exists(errorSummary)) {
    errorSummary.focus();
  }
}();



/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "navigation": () => (/* binding */ navigation)
/* harmony export */ });
/* harmony import */ var _translations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);


var navigation = function () {
  // https://developer.mozilla.org/en-US/docs/Web/API/Element/closest#Polyfill
  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
  }

  if (!Element.prototype.closest) {
    Element.prototype.closest = function (s) {
      var el = this;

      do {
        if (Element.prototype.matches.call(el, s)) return el;
        el = el.parentElement || el.parentNode;
      } while (el !== null && el.nodeType === 1);

      return null;
    };
  } // Helper: Check whether element exists


  function exists(elem) {
    return elem != null && (elem.length >= 0 || elem.innerHTML.length >= 0);
  }

  var languageCode = document.documentElement.lang;
  var nav = document.querySelector('.global-nav__inner ul');
  var mobileNavToggler = document.querySelector('[data-trigger="mobile-nav"]');

  if (exists(mobileNavToggler)) {
    mobileNavToggler.style = "";
  }

  var menuIcon = '<svg class="icon icon--larger" xmlns:xlink="http://www.w3.org/1999/xlink" focusable="false" aria-hidden="true" viewBox="0 0 448 512" width="1em" height="1em"><use class="menu-icon" href="' + jsAssetsPath + 'svg/nav-icons.svg#menu-icon"></use><use class="close-icon" href="' + jsAssetsPath + 'svg/nav-icons.svg#close-icon"></use></svg>';
  var parentLinks = [].slice.call(nav.querySelectorAll('.top-nav-item.has-children > a'));
  var subNavArray = [].slice.call(nav.querySelectorAll('.nav__submenu'));

  var closeSubNavs = function closeSubNavs() {
    var subNavTriggers = [].slice.call(nav.querySelectorAll('[data-trigger="subnav"]'));
    subNavTriggers.forEach(function (trigger) {
      trigger.setAttribute('aria-expanded', 'false');
      trigger.removeAttribute('class');
    });
  }; // Toggle mobile navigation


  var toggleMobileNav = function toggleMobileNav() {
    if (mobileNavToggler && nav) {
      mobileNavToggler.innerHTML = _translations__WEBPACK_IMPORTED_MODULE_0__.translate.translate('menu', languageCode) + menuIcon;
      mobileNavToggler.setAttribute('aria-expanded', 'false');
      document.addEventListener('click', function (event) {
        if (event.target.matches('[data-trigger="mobile-nav"]')) {
          if (event.target.getAttribute('aria-expanded') === 'false') {
            event.target.setAttribute('aria-expanded', 'true');
          } else {
            event.target.setAttribute('aria-expanded', 'false');
            closeSubNavs();
          }
        }
      }, false);
    }
  }; // Media query event handler


  var mq = window.matchMedia('(min-width: 70em)');
  mq.addListener(WidthChange);
  WidthChange(mq); // Media query change

  function WidthChange(mq) {
    if (!mq.matches) {
      toggleMobileNav();
    } else {
      mobileNavToggler.setAttribute('aria-expanded', 'true');
    }
  }

  if (exists(parentLinks)) {
    parentLinks.forEach(function (item) {
      var clonedLink = item.cloneNode(true);
      var linkText = item.textContent + '&nbsp;';
      var toggleButton = document.createElement('button');
      var backButton = document.createElement('button');
      var fragment = document.createDocumentFragment();
      var subNav = item.parentNode.querySelector('.nav__submenu__intro');
      var submenuFirstChild = subNav.querySelector('.nav__submenu__intro__text');
      toggleButton.setAttribute('type', 'button');
      toggleButton.setAttribute('aria-expanded', 'false');
      toggleButton.setAttribute('data-trigger', 'subnav');
      toggleButton.innerHTML = linkText + '<svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 256 512" class="icon nav-small" focusable="false" aria-hidden="true" width="1em" height="1em"><use class="angle-left" href="' + jsAssetsPath + 'svg/nav-icons.svg#angle-left"></use><use class="angle-right" href="' + jsAssetsPath + 'svg/nav-icons.svg#angle-right"></use></svg><svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 320 512" class="icon nav-wide" focusable="false" aria-hidden="true" width="1em" height="1em"><use class="angle-down" href="' + jsAssetsPath + 'svg/nav-icons.svg#angle-down"></use><use class="angle-up" href="' + jsAssetsPath + 'svg/nav-icons.svg#angle-up"></use></svg>';
      backButton.setAttribute('type', 'button');
      backButton.setAttribute('class', 'button button--ghost u-full-width with-icon--before with-icon--larger');
      backButton.setAttribute('data-trigger', 'mobile-back');
      backButton.innerHTML = '<svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 256 512" class="icon icon--larger" focusable="false" aria-hidden="true" width="1em" height="1em"><use class="angle-left" href="' + jsAssetsPath + 'svg/nav-icons.svg#angle-left"></use><use class="angle-right" href="' + jsAssetsPath + 'svg/nav-icons.svg#angle-right"></use></svg>' + _translations__WEBPACK_IMPORTED_MODULE_0__.translate.translate('backToMainMenu', languageCode);
      fragment.appendChild(backButton);
      fragment.appendChild(clonedLink);
      subNav.insertBefore(fragment, submenuFirstChild);
      item.parentNode.replaceChild(toggleButton, item);
    });

    for (var i = 0; i < subNavArray.length; i++) {
      subNavArray[i].style = "";
    }

    document.addEventListener('click', function (event) {
      if (event.target.matches('[data-trigger="subnav"]')) {
        if (event.target.matches('[aria-expanded="false"]')) {
          closeSubNavs();
          event.target.setAttribute('aria-expanded', 'true');
          event.target.setAttribute('class', 'js-active');
        } else {
          event.target.setAttribute('aria-expanded', 'false');
          event.target.removeAttribute('class');
        }
      } else if (event.target.matches('[data-trigger="mobile-back"]')) {
        event.target.closest('li').querySelector('[data-trigger="subnav"]').setAttribute('aria-expanded', 'false');
      } else {
        closeSubNavs();
      }
    });
    document.addEventListener('keyup', function (event) {
      if (event.defaultPrevented) {
        return;
      }

      var key = event.key || event.keyCode;

      if (key === 'Escape' || key === 'Esc' || key === 27) {
        closeSubNavs();
      }
    });
  }
}();



/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "responsiveTables": () => (/* binding */ responsiveTables)
/* harmony export */ });
/**
 * Responsive tables
 * Tab index changed from 0 to -1 if there is no horizontal overflow
 */
var responsiveTables = function responsiveTables() {
  // Get all the table wraps
  var tablesArray = Array.prototype.slice.call(document.querySelectorAll('.table-wrap'));

  if (tablesArray) {
    // Loop through them
    tablesArray.forEach(function (item) {
      // Get the parent element of the table wrap, and it's width
      var container = item.parentElement;
      var containerWidth = parseInt(window.getComputedStyle(container, null).getPropertyValue("width"), 10); // Get the table inside the table wrap, and it's width

      var table = item.firstElementChild;
      var tableWidth = parseInt(window.getComputedStyle(table, null).getPropertyValue("width"), 10); // Comparison: true if the container is wider than the table

      var noScroll = containerWidth >= tableWidth;
      var ariaLabel = item.querySelector('caption').id; // Only make the container focusable if it needs scrolling

      if (noScroll === true) {
        item.removeAttribute('role');
        item.removeAttribute('aria-labelledby');
        item.removeAttribute('tabindex');
      } else {
        item.setAttribute('role', 'region');
        item.setAttribute('aria-labelledby', ariaLabel);
        item.setAttribute('tabindex', '0');
      }
    }); // End loop
  } // End if statement

};



/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "flashes": () => (/* binding */ flashes)
/* harmony export */ });
var flashes = function flashes() {
  var getCookie = function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');

    for (var _i = 0; _i < ca.length; _i++) {
      var c = ca[_i].trim();

      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }

    return false;
  };

  var cookie = getCookie("flashes");

  if (!cookie) {
    return;
  }

  var flashes = JSON.parse(decodeURIComponent(cookie));
  var html = '';

  for (var type in flashes) {
    if (type.startsWith('title-') || type === 'length' || !flashes.hasOwnProperty(type)) {
      continue;
    }

    html += '<div class="l-box note note--' + type + '" role="' + (type === 'error' ? 'alert' : 'status') + '" aria-labelledby="' + type + '-summary-title" tabindex="-1" data-component = "' + type + '-summary" >';
    html += '<h2 id="' + type + '-summary-title" class="txt-saturn>' + flashes['title-' + type] + '</h2>';
    html += '<ul class="clean-list" role="list">';

    for (var i in flashes[type]) {
      html += '<li>' + flashes[type][i] + '</li>';
    }

    html += '</ul>';
    html += '</div>';
  }

  document.querySelector("#main").insertAdjacentHTML('afterbegin', html); // remove the cookie to not show flashes again
  // the cookie path is controlled by the fos_http_cache.flash_message.path configuration option

  document.cookie = "flashes=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/";
};



/***/ })
/******/ 	]);
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
/* harmony import */ var _main_account_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _main_cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _main_collapsibles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _main_disclosure_widget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var _main_form_error_summary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _main_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var _main_responsive_tables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11);
/* harmony import */ var _main_flashes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(12);








(0,_main_responsive_tables__WEBPACK_IMPORTED_MODULE_6__.responsiveTables)();
(0,_main_flashes__WEBPACK_IMPORTED_MODULE_7__.flashes)(); // Tie the responsiveTables function to a resize event, and debounce for performance

var timeout;
window.addEventListener('resize', function (event) {
  // If timer is null, reset it to 66ms and run desired functions.
  // Otherwise, wait until timer is cleared
  if (!timeout) {
    timeout = setTimeout(function () {
      // Reset timeout
      timeout = null; // Run our resize functions

      (0,_main_responsive_tables__WEBPACK_IMPORTED_MODULE_6__.responsiveTables)();
    }, 66);
  }
}, false);
})();

/******/ })()
;