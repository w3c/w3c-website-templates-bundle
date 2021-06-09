/**
 * Collapsible sections
 * See https://heydon.github.io/inclusive-components-demos/collapsible-sections/progressive.html
 */

var collapsibleCards = (function () {

    // Get all the collapsible containers
    var collapseArray = Array.prototype.slice.call(document.querySelectorAll('[data-component="collapsible-cards"]'));

    if (collapseArray) {

        // Loop through containers
        collapseArray.forEach(function (item) {

            // Get headings inside a collapsible container
            var headingsArray = Array.prototype.slice.call(item.querySelectorAll('[data-heading="collapsible-cards"]'));

            // Loop through headings
            headingsArray.forEach(function (heading, index) {

                var headingTitle = heading.getAttribute('data-title');

                // Insert a button for opening/closing the collapsible section
                heading.innerHTML = heading.innerHTML + '<button class="button--ghost" aria-expanded="false"><span class="visuallyhidden">' + headingTitle + '</span><svg class="icon icon--larger" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true" viewBox="0 0 448 512" width="30px" height="30px"><path class="plus" d="M416 208H272V64a32 32 0 00-32-32h-32a32 32 0 00-32 32v144H32a32 32 0 00-32 32v32a32 32 0 0032 32h144v144a32 32 0 0032 32h32a32 32 0 0032-32V304h144a32 32 0 0032-32v-32a32 32 0 00-32-32z"/><path class="minus" d="M416 208H32a32 32 0 00-32 32v32a32 32 0 0032 32h384a32 32 0 0032-32v-32a32 32 0 00-32-32z"/></svg></button>';

                // Add appropriate aria role to the collapsible section
                heading.nextElementSibling.setAttribute('aria-hidden', 'true');

                // Assign the button
                var btn = heading.querySelector('button');

                // Add click event listener
                btn.addEventListener('click', function(event){

                    // Cast the state as a boolean
                    var expanded = btn.getAttribute('aria-expanded') === 'true';

                    // Switch the state
                    btn.setAttribute('aria-expanded', !expanded);

                    // Switch the collapsible section's visibility
                    heading.nextElementSibling.setAttribute('aria-hidden', expanded);

                });

            }); // End loop

        }); // End loop

    } // End if statement

})();

export {collapsibleCards};
