/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*
 * translations-sorting: sort a list of translations based on user's preferences
 */
const userLangs = navigator.languages || [navigator.language || navigator.userLanguage];

// duplicate to remove variations e.g. fr-fr, fr-ca -> fr
const userLangVars = userLangs.flatMap(i => [i.toLowerCase(), i.split("-")[0].toLowerCase()]);
const langs = userLangVars.filter((item, index) => userLangVars.indexOf(item) === index);
// add zh-hans and zh-hant
if (langs.some(i => ["zh-cn", "zh-sg", "zh"].includes(i))) {
  langs.splice(Math.max(langs.indexOf("zh-cn"), langs.indexOf("zh-sg"), langs.indexOf("zh")), 0, "zh-hans");
}
if (langs.some(i => ["zh-hk", "zh-tw"].includes(i))) {
  langs.splice(Math.max(langs.indexOf("zh-tw"), langs.indexOf("zh-hk")), 0, "zh-hant");
}

// only look for lists with at least 2 translations
const secondTranslations = document.querySelectorAll("div.translation-list > dd:nth-child(3) > a[hreflang], ul.translation-list > li:nth-child(2) > a[hreflang]");
secondTranslations.forEach(link => {
  const container = link.parentNode.parentNode;
  const children = container.querySelectorAll("dd, li");
  const sortedChildren = [...children].sort((a, b) => {
    const aLang = a.firstElementChild.getAttribute("hreflang").toLowerCase();
    const bLang = b.firstElementChild.getAttribute("hreflang").toLowerCase();
    const aIndex = langs.indexOf(aLang);
    const bIndex = langs.indexOf(bLang);
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
  sortedChildren.forEach(element => container.appendChild(element));
});
/******/ })()
;