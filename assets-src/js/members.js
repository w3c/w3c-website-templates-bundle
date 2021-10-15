let membersPick = (function (){
    var membersContainer = document.querySelector('.component--members__grid');
    var updatedMembersContainer = membersContainer.cloneNode(false);

    let shuffledMembers = membersData
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);

    var pickedMembers = shuffledMembers.slice(0,8);


    for (var membersIndex = 0; membersIndex < pickedMembers.length; membersIndex++) {
        var memberDiv = document.createElement('div');
        var membersLogoHref = (pickedMembers[membersIndex].logo !== null)? pickedMembers[membersIndex].logo : 'https://via.placeholder.com/150';
        memberDiv.innerHTML = '<img src="' + membersLogoHref + '" alt="' + pickedMembers[membersIndex].name + '" loading="lazy" />';
        updatedMembersContainer.appendChild(memberDiv);
    }

    membersContainer.parentNode.replaceChild(updatedMembersContainer, membersContainer);

})();