/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
/*
 * translations-sorting: sort a list of translations based on user's preferences
 */
var userLangs = navigator.languages || [navigator.language || navigator.userLanguage];

// duplicate to remove variations e.g. fr-fr, fr-ca -> fr
var userLangVars = userLangs.flatMap(function (i) {
  return [i.toLowerCase(), i.split("-")[0].toLowerCase()];
});
var langs = userLangVars.filter(function (item, index) {
  return userLangVars.indexOf(item) === index;
});
// add zh-hans and zh-hant
if (langs.some(function (i) {
  return ["zh-cn", "zh-sg", "zh"].includes(i);
})) {
  langs.splice(Math.max(langs.indexOf("zh-cn"), langs.indexOf("zh-sg"), langs.indexOf("zh")), 0, "zh-hans");
}
if (langs.some(function (i) {
  return ["zh-hk", "zh-tw"].includes(i);
})) {
  langs.splice(Math.max(langs.indexOf("zh-tw"), langs.indexOf("zh-hk")), 0, "zh-hant");
}

// only look for lists with at least 2 translations
var secondTranslations = document.querySelectorAll("div.translation-list > dd:nth-child(3) > a[hreflang], ul.translation-list > li:nth-child(2) > a[hreflang]");
secondTranslations.forEach(function (link) {
  var container = link.parentNode.parentNode;
  var children = container.querySelectorAll("dd, li");
  var sortedChildren = _toConsumableArray(children).sort(function (a, b) {
    var aLang = a.firstElementChild.getAttribute("hreflang").toLowerCase();
    var bLang = b.firstElementChild.getAttribute("hreflang").toLowerCase();
    var aIndex = langs.indexOf(aLang);
    var bIndex = langs.indexOf(bLang);
    if (aIndex === -1 && bIndex === -1) {
      return 0;
    } else if (aIndex === -1) {
      return 1;
    } else if (bIndex === -1) {
      return -1;
    } else {
      return aIndex - bIndex;
    }
  });
  sortedChildren.forEach(function (element) {
    return container.appendChild(element);
  });
});
/******/ })()
;