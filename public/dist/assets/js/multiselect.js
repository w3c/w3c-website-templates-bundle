/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var Keys = {
  Backspace: 'Backspace',
  Clear: 'Clear',
  Down: 'ArrowDown',
  End: 'End',
  Enter: 'Enter',
  Escape: 'Escape',
  Home: 'Home',
  Left: 'ArrowLeft',
  PageDown: 'PageDown',
  PageUp: 'PageUp',
  Right: 'ArrowRight',
  Space: ' ',
  Tab: 'Tab',
  Up: 'ArrowUp'
};
var MenuActions = {
  Close: 0,
  CloseSelect: 1,
  First: 2,
  Last: 3,
  Next: 4,
  Open: 5,
  Previous: 6,
  Select: 7,
  Space: 8,
  Type: 9
}; // filter an array of options against an input string
// returns an array of options that begin with the filter string, case-independent

function filterOptions() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var filter = arguments.length > 1 ? arguments[1] : undefined;
  return options.filter(function (option) {
    var text = option.text.toLowerCase();
    return text.startsWith(filter.toLowerCase());
  });
} // return combobox action from key press


function getActionFromKey(key, menuOpen) {
  // handle opening when closed
  if (!menuOpen && key === Keys.Down) {
    return MenuActions.Open;
  } // handle keys when open


  if (key === Keys.Down) {
    return MenuActions.Next;
  } else if (key === Keys.Up) {
    return MenuActions.Previous;
  } else if (key === Keys.Home) {
    return MenuActions.First;
  } else if (key === Keys.End) {
    return MenuActions.Last;
  } else if (key === Keys.Escape) {
    return MenuActions.Close;
  } else if (key === Keys.Enter) {
    return MenuActions.CloseSelect;
  } else if (key === Keys.Backspace || key === Keys.Clear || key.length === 1) {
    return MenuActions.Type;
  }
} // get updated option index


function getUpdatedIndex(current, max, action) {
  switch (action) {
    case MenuActions.First:
      return 0;

    case MenuActions.Last:
      return max;

    case MenuActions.Previous:
      return Math.max(0, current - 1);

    case MenuActions.Next:
      return Math.min(max, current + 1);

    default:
      return current;
  }
} // check if an element is currently scrollable


function isScrollable(element) {
  return element && element.clientHeight < element.scrollHeight;
} // ensure given child element is within the parent's visible scroll area


function maintainScrollVisibility(activeElement, scrollParent) {
  var offsetHeight = activeElement.offsetHeight,
      offsetTop = activeElement.offsetTop;
  var parentOffsetHeight = scrollParent.offsetHeight,
      scrollTop = scrollParent.scrollTop;
  var isAbove = offsetTop < scrollTop;
  var isBelow = offsetTop + offsetHeight > scrollTop + parentOffsetHeight;

  if (isAbove) {
    scrollParent.scrollTo(0, offsetTop);
  } else if (isBelow) {
    scrollParent.scrollTo(0, offsetTop - parentOffsetHeight + offsetHeight);
  }
}
/*
 * Multiselect Combobox w/ Buttons code
 */


var MultiselectButtons = function MultiselectButtons(selectEl, params) {
  var _this = this;

  var baseId = selectEl.id;
  selectEl.hidden = true;
  var options = [];
  var selectedOptions = [];
  selectEl.querySelectorAll('option').forEach(function (option) {
    var o = {
      value: option.value,
      text: option.textContent
    };
    if (!option.disabled) options.push(o);

    if (option.defaultSelected) {
      selectedOptions.push(option.value);
    }
  }); // required elements for MultiselectButtons

  var span = document.createElement('span');
  span.id = baseId + '-remove';
  span.innerText = 'remove';
  span.style.display = 'none';
  selectEl.parentNode.appendChild(span);

  if (selectEl.multiple) {
    var ul = document.createElement('ul');
    ul.id = baseId + '-selected';
    ul.classList.add('selected-options');
    selectEl.parentNode.appendChild(ul);
    this.selectedEl = ul;
  }

  var div = document.createElement('div');
  div.classList.add('combo');
  div.id = "".concat(selectEl.id, "-js-multi-buttons");
  var divComboBox = document.createElement('div');
  divComboBox.setAttribute('role', 'combobox');
  divComboBox.setAttribute('aria-haspopup', 'listbox');
  divComboBox.setAttribute('aria-expanded', 'false');
  divComboBox.setAttribute('aria-owns', baseId + '-listbox');
  divComboBox.classList.add('input-wrapper');
  var input = document.createElement('input');
  input.setAttribute('aria-activedescendant', '');
  input.setAttribute('aria-autocomplete', 'list');
  input.setAttribute('aria-labelledby', baseId + '-label ' + baseId + '-selected');
  input.setAttribute('aria-controls', baseId + '-listbox');
  input.id = baseId + "-input";
  input.classList.add('combo-input');
  input.setAttribute('autocomplete', 'off');
  input.setAttribute('type', 'text');
  divComboBox.appendChild(input);
  var ulCombo = document.createElement('ul');
  ulCombo.setAttribute('role', 'listbox');
  ulCombo.setAttribute('aria-multiselectable', 'true');
  ulCombo.id = baseId + '-listbox';
  ulCombo.setAttribute('aria-labelledby', baseId + '-label');
  ulCombo.classList.add('combo-menu');
  div.appendChild(divComboBox);
  div.appendChild(ulCombo);
  selectEl.parentNode.appendChild(div); // element refs

  this.select = selectEl;
  this.el = div;
  this.comboEl = div.querySelector('[role=combobox]');
  this.inputEl = div.querySelector('input');
  this.listboxEl = div.querySelector('[role=listbox]');
  this.idBase = this.inputEl.id; // data

  this.options = options;
  this.filteredOptions = options; // params for ajax calls

  this.source = params.source;
  this.minInput = params.minInput || 2;
  this.page = 1;
  this.morePages = false;
  this.ajaxResultCount; // state

  this.activeIndex = 0;
  this.open = false;
  selectedOptions.forEach(function (value) {
    var option = _this.options.find(function (e) {
      return e.value === value;
    });

    if (selectEl.multiple) {
      var index = _this.options.indexOf(option);

      var buttonEl = document.createElement('button');
      var listItem = document.createElement('li');
      buttonEl.className = 'remove-option';
      buttonEl.type = 'button';
      buttonEl.id = "".concat(_this.idBase, "-remove-").concat(index);
      buttonEl.setAttribute('aria-describedby', "".concat(_this.idBase, "-remove"));
      buttonEl.dataset.value = option.value;
      buttonEl.addEventListener('click', function () {
        _this.removeOption(option);
      });
      buttonEl.innerHTML = option.text + ' ';
      listItem.appendChild(buttonEl);

      _this.selectedEl.appendChild(listItem);
    } else {
      _this.inputEl.value = option.text;
    }
  });
};

MultiselectButtons.prototype.init = function () {
  var _this2 = this;

  var self = this;
  var timeout = null;
  this.inputEl.addEventListener('input', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!_this2.source) {
              _context.next = 4;
              break;
            }

            clearTimeout(timeout);
            _context.next = 4;
            return new Promise(function (resolve) {
              return timeout = setTimeout(resolve, 500);
            });

          case 4:
            self.onInput();

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  this.inputEl.addEventListener('blur', this.onInputBlur.bind(this));
  this.inputEl.addEventListener('focus', function () {
    if (_this2.source) {
      var hint = _this2.listboxEl.querySelector('li[role=alert]');

      var alreadyExists = !!hint;

      if (!hint) {
        hint = document.createElement('li');
        hint.setAttribute('role', 'alert');
      }

      hint.innerText = "Please enter ".concat(_this2.minInput, " or more characters");

      if (!alreadyExists) {
        _this2.listboxEl.prepend(hint);
      }
    }

    _this2.updateMenuState(true);
  });
  this.inputEl.addEventListener('keydown', this.onInputKeyDown.bind(this));
};

var loadMoreResults = function loadMoreResults(root, element, callback) {
  var options = {
    root: root,
    threshold: 0.5
  };
  var observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      callback(entry.isIntersecting);
    });
  }, options);
  observer.observe(element);
};

MultiselectButtons.prototype.filterOptions = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(value) {
    var _this3 = this;

    var selectedOptions, selectedValues, count, c;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (value) {
              this.clearOptions();
              selectedOptions = this.select.querySelectorAll('option:checked');
              selectedValues = _toConsumableArray(selectedOptions).map(function (option) {
                return option.innerText;
              }); // ajax call is already filtering the options

              this.filteredOptions = this.source ? this.options : filterOptions(this.options, value);
              count = this.source ? this.ajaxResultCount : this.filteredOptions.length;
              c = document.createDocumentFragment();
              this.filteredOptions.forEach(function (o, k) {
                var alreadySelected = selectedValues.includes(o.text);
                var optionEl = document.createElement('li');
                optionEl.setAttribute('role', 'option');

                if (count) {
                  optionEl.setAttribute('aria-setsize', count);
                  optionEl.setAttribute('aria-posinset', k + 1);
                }

                optionEl.id = "".concat(_this3.idBase, "-").concat(_this3.options.indexOf(o));
                optionEl.className = 'combo-option';
                optionEl.setAttribute('aria-selected', alreadySelected);
                optionEl.dataset.value = o.value;
                optionEl.innerText = o.text;

                if (alreadySelected) {
                  optionEl.classList.add('option-selected');
                }

                optionEl.addEventListener('click', function () {
                  _this3.onOptionClick(_this3.options.indexOf(o));
                });
                optionEl.addEventListener('mousedown', _this3.onOptionMouseDown.bind(_this3));
                c.appendChild(optionEl);

                if (_this3.source && _this3.morePages) {
                  if (o === _this3.filteredOptions[_this3.filteredOptions.length - 1]) {
                    var hint = document.createElement('li');
                    hint.setAttribute('role', 'alert');
                    hint.innerText = "Loading more results";
                    c.appendChild(hint);
                    loadMoreResults(_this3.listboxEl, optionEl, /*#__PURE__*/function () {
                      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(visible) {
                        return regeneratorRuntime.wrap(function _callee2$(_context2) {
                          while (1) {
                            switch (_context2.prev = _context2.next) {
                              case 0:
                                if (!visible) {
                                  _context2.next = 6;
                                  break;
                                }

                                _this3.page++;
                                _context2.next = 4;
                                return _this3.updateResults();

                              case 4:
                                _this3.filterOptions(value);

                                hint.remove();

                              case 6:
                              case "end":
                                return _context2.stop();
                            }
                          }
                        }, _callee2);
                      }));

                      return function (_x2) {
                        return _ref3.apply(this, arguments);
                      };
                    }());
                  }
                }
              });
              this.listboxEl.appendChild(c);
            }

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

MultiselectButtons.prototype.updateResults = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
  var _this4 = this;

  var url, response, data;
  return regeneratorRuntime.wrap(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          url = new URL(this.source, window.location.protocol + '//' + window.location.host);
          url.search = "".concat(url.search ? url.search + '&' : '?', "q=").concat(this.inputEl.value, "&page=").concat(this.page);
          _context4.next = 4;
          return fetch(url);

        case 4:
          response = _context4.sent;
          _context4.next = 7;
          return response.json();

        case 7:
          data = _context4.sent;

          if (this.page === 1) {
            this.options = [];
          }

          data.results.forEach(function (c) {
            _this4.ajaxResultCount = data.total;

            if (!_this4.select.querySelector("option[value=\"".concat(c.id, "\"]"))) {
              var o = document.createElement('option');
              o.value = c.id;
              o.innerText = c.text;

              _this4.select.appendChild(o);
            }

            var option = {
              value: c.id,
              text: c.text
            };
            if (_this4.options.indexOf(option) === -1) _this4.options.push(option);
          });
          this.morePages = data.more || false;

        case 11:
        case "end":
          return _context4.stop();
      }
    }
  }, _callee4, this);
}));
MultiselectButtons.prototype.onInput = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
  var curValue, showHint, hint, _hint, firstFilteredIndex, menuState;

  return regeneratorRuntime.wrap(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          curValue = this.inputEl.value;
          showHint = false;
          hint = this.listboxEl.querySelector('li[role=alert]');
          this.page = 1; // reset pagination

          if (!curValue) {
            _context5.next = 27;
            break;
          }

          if (!this.source) {
            _context5.next = 21;
            break;
          }

          if (!(curValue.length >= this.minInput)) {
            _context5.next = 15;
            break;
          }

          if (!hint) {
            hint = document.createElement('li');
            hint.setAttribute('role', 'alert');
          }

          hint.innerText = "Loading results";
          this.listboxEl.prepend(hint);
          _context5.next = 12;
          return this.updateResults();

        case 12:
          hint.remove();
          _context5.next = 21;
          break;

        case 15:
          this.clearOptions();
          (_hint = hint) !== null && _hint !== void 0 ? _hint : hint = document.createElement('li');
          hint.setAttribute('role', 'alert');
          hint.innerText = "Please enter ".concat(this.minInput, " or more characters");
          this.listboxEl.prepend(hint);
          showHint = true;

        case 21:
          if (!this.source || this.source && curValue.length >= this.minInput) this.filterOptions(curValue); // if active option is not in filtered options, set it to first filtered option

          if (this.filteredOptions.indexOf(this.options[this.activeIndex]) < 0) {
            firstFilteredIndex = this.options.indexOf(this.filteredOptions[0]);
            this.onOptionChange(firstFilteredIndex);
          }

          menuState = this.filteredOptions.length > 0 || showHint;

          if (this.open !== menuState) {
            this.updateMenuState(menuState);
          }

          _context5.next = 28;
          break;

        case 27:
          this.clearOptions();

        case 28:
        case "end":
          return _context5.stop();
      }
    }
  }, _callee5, this);
}));

MultiselectButtons.prototype.onInputKeyDown = function (event) {
  var key = event.key;
  var max = this.filteredOptions.length - 1;
  var activeFilteredIndex = this.filteredOptions.indexOf(this.options[this.activeIndex]);
  var action = getActionFromKey(key, this.open);

  switch (action) {
    case MenuActions.Next:
    case MenuActions.Last:
    case MenuActions.First:
    case MenuActions.Previous:
      event.preventDefault();
      var nextFilteredIndex = getUpdatedIndex(activeFilteredIndex, max, action);
      var nextRealIndex = this.options.indexOf(this.filteredOptions[nextFilteredIndex]);
      return this.onOptionChange(nextRealIndex);

    case MenuActions.CloseSelect:
      event.preventDefault();
      return this.onOptionClick(this.activeIndex);

    case MenuActions.Close:
      event.preventDefault();
      return this.updateMenuState(false);

    case MenuActions.Open:
      return this.updateMenuState(true);
  }
};

MultiselectButtons.prototype.onInputBlur = function () {
  if (this.ignoreBlur) {
    this.ignoreBlur = false;
    return;
  }

  this.inputEl.value = '';

  if (!this.select.multiple) {
    var selectedOption = this.select.querySelector('option:checked');

    if (selectedOption) {
      this.inputEl.value = selectedOption.innerText;
    }
  }

  if (this.inputEl.value === '') {
    this.clearOptions();
  }

  if (this.open) {
    this.updateMenuState(false);
  }
};

MultiselectButtons.prototype.onOptionChange = function (index) {
  this.activeIndex = index;
  this.inputEl.setAttribute('aria-activedescendant', "".concat(this.idBase, "-").concat(index)); // update active style

  var options = this.el.querySelectorAll('[role=option]');
  var currentOptions = this.el.querySelector("[id=".concat(this.idBase, "-").concat(index, "]"));

  _toConsumableArray(options).forEach(function (optionEl) {
    optionEl.classList.remove('option-current');
  });

  if (currentOptions) {
    currentOptions.classList.add('option-current');

    if (this.open && isScrollable(this.listboxEl)) {
      maintainScrollVisibility(currentOptions, this.listboxEl);
    }
  }
};

MultiselectButtons.prototype.clearOptions = function () {
  var options = this.el.querySelectorAll('[role=option]');

  _toConsumableArray(options).forEach(function (optionEl) {
    optionEl.remove();
  });
};

MultiselectButtons.prototype.onOptionClick = function (index) {
  // this.onOptionChange(index);
  this.updateOption(index);
  this.clearOptions();
  this.updateMenuState(false);
  this.inputEl.focus();
};

MultiselectButtons.prototype.onOptionMouseDown = function () {
  this.ignoreBlur = true;
};

MultiselectButtons.prototype.removeOption = function (option) {
  // const index = this.options.indexOf(option);
  // update aria-selected
  var o = this.el.querySelector("[data-value=\"".concat(option.value, "\"]"));

  if (o) {
    o.setAttribute('aria-selected', 'false');
    o.classList.remove('option-selected');
  } // remove button


  if (this.selectedEl) {
    var buttonEl = this.selectedEl.querySelector("[data-value=\"".concat(option.value, "\"]"));
    this.selectedEl.removeChild(buttonEl.parentElement);
  }

  this.select.querySelector('option[value="' + option.value + '"]').removeAttribute('selected');
};

MultiselectButtons.prototype.selectOption = function (option) {
  var _this5 = this;

  var index = this.options.indexOf(option);
  var selected = this.options[index];
  this.activeIndex = index; // update aria-selected

  var o = this.el.querySelector("[id=".concat(this.idBase, "-").concat(index, "]"));
  o.setAttribute('aria-selected', 'true');
  o.classList.add('option-selected'); // add remove option button

  var buttonEl = document.createElement('button');
  var listItem = document.createElement('li');
  buttonEl.className = 'remove-option';
  buttonEl.type = 'button';
  buttonEl.id = "".concat(this.idBase, "-remove-").concat(index);
  buttonEl.setAttribute('aria-describedby', "".concat(this.idBase, "-remove"));
  buttonEl.dataset.value = selected.value;
  buttonEl.addEventListener('click', function () {
    _this5.removeOption(option);
  });
  buttonEl.innerHTML = selected.text + ' ';
  listItem.appendChild(buttonEl);

  if (this.select.multiple) {
    this.selectedEl.appendChild(listItem);
  } else {
    var selectedOption = this.select.querySelector("option[selected]");
    if (selectedOption) selectedOption.removeAttribute('selected');
  }

  this.select.querySelector('option[value="' + option.value + '"]').setAttribute('selected', 'selected');
};

MultiselectButtons.prototype.updateOption = function (index) {
  var optionEl = this.el.querySelector("[id=".concat(this.idBase, "-").concat(index, "]"));
  var isSelected = optionEl.getAttribute('aria-selected') === 'true';
  this.inputEl.value = '';

  if (isSelected) {
    this.removeOption(this.options[index]);
  } else {
    this.selectOption(this.options[index]);

    if (!this.select.multiple) {
      this.inputEl.value = this.options[index].text;
    }
  }

  this.filterOptions('');
};

MultiselectButtons.prototype.updateMenuState = function (open) {
  this.open = open;
  this.comboEl.setAttribute('aria-expanded', "".concat(open));
  open ? this.el.classList.add('open') : this.el.classList.remove('open');
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MultiselectButtons);
/******/ })()
;