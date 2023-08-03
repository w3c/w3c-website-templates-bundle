/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
var membersPick = function () {
  var membersContainer = document.querySelector('.component--members__grid');
  var updatedMembersContainer = membersContainer.cloneNode(false);
  var shuffledMembers = membersData.map(function (value) {
    return {
      value: value,
      sort: Math.random()
    };
  }).sort(function (a, b) {
    return a.sort - b.sort;
  }).map(function (_ref) {
    var value = _ref.value;
    return value;
  });
  var pickedMembers = shuffledMembers.slice(0, 6);
  for (var membersIndex = 0; membersIndex < pickedMembers.length; membersIndex++) {
    var memberWrap = document.createElement('figure');
    if (pickedMembers[membersIndex].logo !== null) {
      var membersLogoHref = pickedMembers[membersIndex].logo;
      memberWrap.innerHTML = '<div class="l-box l-box--no-border"><img src="' + membersLogoHref + '" alt="' + pickedMembers[membersIndex].name + '" loading="lazy" /></div>';
    } else {
      memberWrap.innerHTML = '<figcaption>' + pickedMembers[membersIndex].name + '</figcaption>';
    }
    updatedMembersContainer.appendChild(memberWrap);
  }
  membersContainer.parentNode.replaceChild(updatedMembersContainer, membersContainer);
}();
/******/ })()
;