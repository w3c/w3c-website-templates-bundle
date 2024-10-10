# Heading anchors

This script is part of `main.js`/`main.min.js`. To help linking to specific parts of pages, this script automatically creates and appends a visible anchor link to the end of any H2-H6 heading within the `<main>` element, with the following exclusions:

- where the heading is a child of a `<nav>` element
- where the heading carries the attribute `data-anchor="no"`, the `hidden` attribute or the `.visuallyhidden` class
- where a heading has an ancestor carrying the attribute `data-anchor="no"`, the `hidden` attribute or the `.visuallyhidden` class

If a heading already has an `id` attribute, this is used when creating the `href` for the `<a>`. Otherwise, the script parses the text content of the heading to create both the heading `id` and the anchor `href`.

To override the default behaviour of the script and prevent the addition of anchor links to headings, modify the HTML markup to apply the `data-anchor="no"` attribute to an individual heading (or to a parent container, if targeting a group of headings).

The `data-anchor="no"` attribute has been added directly to the markup to override this behaviour in the following places:

- [home page template](../templates/home.md)
- [people listing](../templates/listings.md#list-of-people)
- [cards used for events listings](../templates/listings.md#list-of-events)
- [collapsible containers](../components/collapsible-containers.md)
- [evangelists](../components/evangelists.md)
- [group list](../components/group-list.md)
- [notes](../components/notes.md)