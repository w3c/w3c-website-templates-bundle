/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
let membersPick = function () {
  let membersContainer = document.querySelector('.component--members__grid');
  let updatedMembersContainer = membersContainer.cloneNode(false);
  let shuffledMembers = membersData.map(value => ({
    value,
    sort: Math.random()
  })).sort((a, b) => a.sort - b.sort).map(_ref => {
    let {
      value
    } = _ref;
    return value;
  });
  let pickedMembers = shuffledMembers.slice(0, 6);
  for (let membersIndex = 0; membersIndex < pickedMembers.length; membersIndex++) {
    let memberWrap = document.createElement('figure');
    if (pickedMembers[membersIndex].logo !== null) {
      let membersLogoHref = pickedMembers[membersIndex].logo;
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