import MultiselectButtons from './multiselect-module';

document.addEventListener("DOMContentLoaded", function() {
    const selects = document.querySelectorAll('select.multiselect');

    selects.forEach(select => {
        const multiSelectParams = {
            source: select.dataset.source,
            source: select.dataset.minInput
        };
        const multiButtonComponent = new MultiselectButtons(select, multiSelectParams);
        multiButtonComponent.init();
    });
});