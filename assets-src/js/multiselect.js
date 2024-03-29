import MultiselectButtons from './multiselect-module';

document.addEventListener("DOMContentLoaded", function() {
    const selects = document.querySelectorAll('select.multiselect');

    selects.forEach(select => {
        const multiSelectParams = {
            source: select.dataset.source,
            minInput: select.dataset.minInput,
            searchStart: select.dataset.multiselectSearchStart,
            searchTextOnly: select.dataset.multiselectSearchTextOnly
        };
        const multiButtonComponent = new MultiselectButtons(select, multiSelectParams);
        multiButtonComponent.init();
    });
});
