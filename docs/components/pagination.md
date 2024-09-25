# Pagination

Used on various [listing pages](../templates/listings.md).

<example title="Pagination" src="components/pagination.html.twig" />

## Considerations

Note the use of the [cluster layout](../layouts/cluster.md).

The `aria-labelledby` attribute has been added to the `<nav>` element, which references the ID of the visually-hidden `<h2>` inside the `<nav>`. This is because the main website navigation also uses the `<nav>` element. Where there are multiple `<nav>` elements on a single page, they should all have a unique accessible name.

The current page is indicated by `aria-current="page"`. As per the [breadcrumbs component](breadcrumbs.md), it is fully linked so that users of Assistive Technology can find which is the currently active link.
