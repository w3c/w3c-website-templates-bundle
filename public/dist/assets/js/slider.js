/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 3:
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
      'controlsDescription': '__controlsDescription',
      'logout': '__logout',
      'member-site': '__member-site',
      'menu': '__menu',
      'my-account': '__my-account',
      'my-calendar': '__my-calendar',
      'nextSlide': '__nextSlide',
      'previousSlide': '__previousSlide',
      'sliderDescription': '__sliderDescription',
      'slideText': '__Slide {x} of {y}',
      'team-site': '__team-site'
    },
    'de': {
      'admin': '__admin',
      'backToMainMenu': '__backToMainMenu',
      'cancelReply': '__cancelReply',
      'controlsDescription': '__controlsDescription',
      'logout': '__logout',
      'member-site': '__member-site',
      'menu': '__menu',
      'my-account': '__my-account',
      'my-calendar': '__my-calendar',
      'nextSlide': '__nextSlide',
      'previousSlide': '__previousSlide',
      'sliderDescription': '__sliderDescription',
      'slideText': '__Slide {x} of {y}',
      'team-site': '__team-site'
    },
    'en': {
      'admin': 'Admin',
      'backToMainMenu': 'Back to main menu',
      'cancelReply': 'Cancel reply',
      'controlsDescription': 'carousel controls',
      'logout': 'Logout',
      'member-site': 'Member Site',
      'menu': 'Menu',
      'my-account': 'My Account',
      'my-calendar': 'My Calendar',
      'nextSlide': 'next slide',
      'previousSlide': 'previous slide',
      'sliderDescription': 'carousel',
      'slideText': 'Slide {x} of {y}',
      'team-site': 'Team Site'
    },
    'es': {
      'admin': '__admin',
      'backToMainMenu': '__backToMainMenu',
      'cancelReply': '__cancelReply',
      'controlsDescription': '__controlsDescription',
      'logout': '__logout',
      'member-site': '__member-site',
      'menu': '__menu',
      'my-account': '__my-account',
      'my-calendar': '__my-calendar',
      'nextSlide': '__nextSlide',
      'previousSlide': '__previousSlide',
      'sliderDescription': '__sliderDescription',
      'slideText': '__Slide {x} of {y}',
      'team-site': '__team-site'
    },
    'fr': {
      'admin': '__admin',
      'backToMainMenu': '__backToMainMenu',
      'cancelReply': '__cancelReply',
      'controlsDescription': '__controlsDescription',
      'logout': '__logout',
      'member-site': '__member-site',
      'menu': '__menu',
      'my-account': '__my-account',
      'my-calendar': '__my-calendar',
      'nextSlide': '__nextSlide',
      'previousSlide': '__previousSlide',
      'sliderDescription': '__sliderDescription',
      'slideText': '__Slide {x} of {y}',
      'team-site': '__team-site'
    },
    'hu': {
      'admin': '__admin',
      'backToMainMenu': '__backToMainMenu',
      'cancelReply': '__cancelReply',
      'controlsDescription': '__controlsDescription',
      'logout': '__logout',
      'member-site': '__member-site',
      'menu': '__menu',
      'my-account': '__my-account',
      'my-calendar': '__my-calendar',
      'nextSlide': '__nextSlide',
      'previousSlide': '__previousSlide',
      'sliderDescription': '__sliderDescription',
      'slideText': '__Slide {x} of {y}',
      'team-site': '__team-site'
    },
    'ja': {
      'admin': '__admin',
      'backToMainMenu': '__backToMainMenu',
      'cancelReply': '__cancelReply',
      'controlsDescription': '__controlsDescription',
      'logout': '__logout',
      'member-site': '__member-site',
      'menu': '__menu',
      'my-account': '__my-account',
      'my-calendar': '__my-calendar',
      'nextSlide': '__nextSlide',
      'previousSlide': '__previousSlide',
      'sliderDescription': '__sliderDescription',
      'slideText': '__Slide {x} of {y}',
      'team-site': '__team-site'
    },
    'pt-br': {
      'admin': '__admin',
      'backToMainMenu': '__backToMainMenu',
      'cancelReply': '__cancelReply',
      'controlsDescription': '__controlsDescription',
      'logout': '__logout',
      'member-site': '__member-site',
      'menu': '__menu',
      'my-account': '__my-account',
      'my-calendar': '__my-calendar',
      'nextSlide': '__nextSlide',
      'previousSlide': '__previousSlide',
      'sliderDescription': '__sliderDescription',
      'slideText': '__Slide {x} of {y}',
      'team-site': '__team-site'
    },
    'zh-hans': {
      'admin': '__admin',
      'backToMainMenu': '__backToMainMenu',
      'cancelReply': '__cancelReply',
      'controlsDescription': '__controlsDescription',
      'logout': '__logout',
      'member-site': '__member-site',
      'menu': '__menu',
      'my-account': '__my-account',
      'my-calendar': '__my-calendar',
      'nextSlide': '__nextSlide',
      'previousSlide': '__previousSlide',
      'sliderDescription': '__sliderDescription',
      'slideText': '__Slide {x} of {y}',
      'team-site': '__team-site'
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
/* harmony import */ var _main_translations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

/**
 * Content slider (carousel)
 */

var contentSlider = function () {
  if ('ResizeObserver' in window) {
    // I18N
    var sliderDescription = _main_translations__WEBPACK_IMPORTED_MODULE_0__.translate.translate('sliderDescription', document.documentElement.lang);
    var controlsDescription = _main_translations__WEBPACK_IMPORTED_MODULE_0__.translate.translate('controlsDescription', document.documentElement.lang);
    var previousSlide = _main_translations__WEBPACK_IMPORTED_MODULE_0__.translate.translate('previousSlide', document.documentElement.lang);
    var nextSlide = _main_translations__WEBPACK_IMPORTED_MODULE_0__.translate.translate('nextSlide', document.documentElement.lang);
    var slider = document.querySelector('[data-component="slider"] section');
    var dir = document.documentElement.getAttribute('dir');

    if (slider) {
      slider.setAttribute('aria-roledescription', sliderDescription);
      var list = slider.querySelector('ul');
      var slides = Array.prototype.slice.call(list.querySelectorAll('li'));

      if (slides.length > 1) {
        /**
         * Create container to hold slider controls and aria-live region
         * @return {HTMLDivElement}
         */
        var createControlsWrap = function createControlsWrap() {
          var wrap = document.createElement('div');
          wrap.style.display = 'flex';
          wrap.style.alignItems = 'center';
          wrap.style.marginTop = '0.625rem';
          return wrap;
        };
        /**
         * Create previous and next button controls for slider
         * @return {HTMLUListElement}
         */


        var createControls = function createControls() {
          var controls = document.createElement('ul');
          controls.setAttribute('class', 'slider-controls');
          controls.setAttribute('aria-label', controlsDescription);
          controls.innerHTML = '<li><button class="button button--ghost js-previous with-icon--larger" aria-label="' + previousSlide + '" style="padding:0.4375rem;"><svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 320 512" class="icon icon--larger" focusable="false" aria-hidden="true" width="1em" height="1em"><use class="chevron-left" href="' + jsAssetsPath + 'svg/nav-icons.svg#chevron-left"></use><use class="chevron-right" href="' + jsAssetsPath + 'svg/nav-icons.svg#chevron-right"></use></svg></button></li>' + '<li style="margin-top:0;margin-inline-start:0.25rem;"><button class="button button--ghost js-next with-icon--larger" aria-label="' + nextSlide + '" style="padding:0.4375rem;"><svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 320 512" class="icon icon--larger" focusable="false" aria-hidden="true" width="1em" height="1em"><use class="chevron-left" href="' + jsAssetsPath + 'svg/nav-icons.svg#chevron-left"></use><use class="chevron-right" href="' + jsAssetsPath + 'svg/nav-icons.svg#chevron-right"></use></svg></button></li>';
          controls.style.display = 'inline-flex';
          return controls;
        };
        /**
         * Create ARIA live region for slider
         * @return {HTMLDivElement}
         */


        var createLiveRegion = function createLiveRegion() {
          var liveRegion = document.createElement('div');
          liveRegion.setAttribute('role', 'status');
          liveRegion.setAttribute('aria-live', 'polite');
          liveRegion.setAttribute('class', 'txt-pluto');
          liveRegion.style.display = 'inline-block';
          liveRegion.style.paddingLeft = '0.625rem';
          liveRegion.style.paddingRight = '0.625rem';
          liveRegion.textContent = _main_translations__WEBPACK_IMPORTED_MODULE_0__.translate.translate('slideText', document.documentElement.lang, {
            'x': '1',
            'y': slides.length
          });
          return liveRegion;
        };

        /**
         * Set slide positions, which are used in the switchSlide function
         */
        var setSlidePositions = function setSlidePositions() {
          var slideWidth = slides[0].getBoundingClientRect().width;

          for (var _slide = 0; _slide < slides.length; _slide++) {
            slides[_slide].style.left = slideWidth * _slide + 'px';
          }
        };

        /**
         * Switch between slides
         * @param {number} currentSlideIndex
         * @param {number} targetSlideIndex
         */
        var switchSlide = function switchSlide(currentSlideIndex, targetSlideIndex) {
          var currentSlide = slides[currentSlideIndex];
          var targetSlide = slides[targetSlideIndex]; // Switches to the correct slide

          var destination = getComputedStyle(targetSlide).left;

          if (dir === 'rtl') {
            list.style.transform = 'translateX(' + destination + ')';
          } else {
            list.style.transform = 'translateX(-' + destination + ')';
          }

          currentSlide.classList.toggle('js-current');
          currentSlide.classList.toggle('js-hidden');
          currentSlide.removeAttribute('tabindex');
          targetSlide.classList.toggle('js-current');
          targetSlide.classList.toggle('js-hidden');
          targetSlide.setAttribute('tabindex', '-1');
          targetSlide.focus(); // Disable previous/next buttons

          if (targetSlideIndex === 0) {
            prev.setAttribute('disabled', true);
            next.removeAttribute('disabled');
          } else if (targetSlideIndex === slides.length - 1) {
            prev.removeAttribute('disabled');
            next.setAttribute('disabled', true);
          } else {
            prev.removeAttribute('disabled');
            next.removeAttribute('disabled');
          } // Announce selected slide to screen reader


          liveRegion.textContent = _main_translations__WEBPACK_IMPORTED_MODULE_0__.translate.translate('slideText', document.documentElement.lang, {
            'x': targetSlideIndex + 1,
            'y': slides.length
          });
        };
        /**
         * Get the current slide index
         * @return {number}
         */


        var getCurrentSlideIndex = function getCurrentSlideIndex() {
          var currentSlide = list.querySelector('.js-current');
          return slides.findIndex(function (slide) {
            return slide === currentSlide;
          });
        };

        var callback = function callback() {
          setSlidePositions();
          var targetSlide = slider.querySelector('.js-current');
          var destination = getComputedStyle(targetSlide).left;

          if (dir === 'rtl') {
            list.style.transform = 'translateX(' + destination + ')';
          } else {
            list.style.transform = 'translateX(-' + destination + ')';
          }
        };

        list.setAttribute('tabindex', '0');

        for (var slide = 1; slide < slides.length; slide++) {
          slides[slide].classList.add('js-hidden');
        }

        slides.forEach(function (slide, index) {
          var group = slide.querySelector('.slide');
          group.setAttribute('role', 'group');
          group.setAttribute('aria-roledescription', 'slide');
          group.setAttribute('aria-label', _main_translations__WEBPACK_IMPORTED_MODULE_0__.translate.translate('slideText', document.documentElement.lang, {
            'x': index + 1,
            'y': slides.length
          }));
        }); // Add current class to first slide

        slides[0].classList.add('js-current');
        var wrap = createControlsWrap();
        var controls = createControls();
        var prev = controls.querySelector('.js-previous');
        var next = controls.querySelector('.js-next');
        prev.disabled = true;
        var liveRegion = createLiveRegion();
        slider.setAttribute('class', 'js-slider');
        slider.parentNode.insertBefore(wrap, slider.nextElementSibling);
        wrap.appendChild(controls);
        wrap.appendChild(liveRegion);
        setSlidePositions();
        document.addEventListener('click', function (event) {
          if (event.target.matches('.js-next')) {
            var currentSlideIndex = getCurrentSlideIndex();
            var nextSlideIndex = currentSlideIndex + 1;
            switchSlide(currentSlideIndex, nextSlideIndex);
          }

          if (event.target.matches('.js-previous')) {
            var _currentSlideIndex = getCurrentSlideIndex();

            var previousSlideIndex = _currentSlideIndex - 1;
            switchSlide(_currentSlideIndex, previousSlideIndex);
          }
        }, false);
        list.addEventListener('keydown', function (event) {
          var key = event.key;
          if (key !== 'ArrowLeft' && key !== 'ArrowRight') return;
          var currentSlideIndex = getCurrentSlideIndex();
          var targetSlideIndex;

          if (dir === 'rtl') {
            if (key === 'ArrowRight') {
              targetSlideIndex = currentSlideIndex - 1;
            }

            if (key === 'ArrowLeft') {
              targetSlideIndex = currentSlideIndex + 1;
            }
          } else {
            if (key === 'ArrowLeft') {
              targetSlideIndex = currentSlideIndex - 1;
            }

            if (key === 'ArrowRight') {
              targetSlideIndex = currentSlideIndex + 1;
            }
          }

          if (targetSlideIndex < 0) {
            targetSlideIndex = 0;
          }

          if (targetSlideIndex > slides.length - 1) {
            targetSlideIndex = slides.length - 1;
          }

          switchSlide(currentSlideIndex, targetSlideIndex); // Focus on the correct slide
        }); // Use resize Observer API to reset slide positions and move current slide fully into view

        var slideObserver = new ResizeObserver(callback);
        slideObserver.observe(slider);
      }
    }
  }
}();
})();

/******/ })()
;