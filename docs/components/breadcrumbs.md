# Breadcrumbs

Here is an example:

<example title="Breadcrumbs" src="components/breadcrumbs.html.twig">

Here is the code of the example:

<exampleHtml src="components/breadcrumbs.html.twig">

## Considerations

Note the use of the [center layout](../layouts/center.md) and [cluster layout](../layouts/cluster.md).

The `aria-label` attribute has been added to the `<nav>` element. This is because the main website navigation also uses the `<nav>` element. Where there are multiple`<nav>` elements on a single page, all must be given a unique accessible name via `aria-label`.

The current page is indicated by `aria-current="page"`. Following Scott O'Hara's [accessible breadcrumb pattern](https://scottaohara.github.io/a11y_breadcrumbs/) it is fully linked so that users of Assistive Technology can find which is the currently active link.