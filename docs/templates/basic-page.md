# Basic page

This example shows the minimum required for a basic page. It does not include:

- the complete [global navigation](../components/navigation.md)
- the [breadcrumbs component](../components/breadcrumbs.md)
- the complete list of site links for the [footer](../components/footer.md).
  
The beta banner is contained within `<div class="banner">` and can be removed when no longer required.

<example title="Basic page" src="example-pages/basic-page.html.twig" standalone />

## Considerations

Note the inclusion of a skip link to help keyboard-only users skip to the main content on a page.

`<div class="grid-wrap">` is required for a sticky footer using CSS Grid. The technique is similar to that explained at [Sticky Footer, Five Ways](https://css-tricks.com/couple-takes-sticky-footer/#there-is-grid), except that the design system applies `<div class="grid-wrap">` as the grid container, rather than placing this on `<body>`.