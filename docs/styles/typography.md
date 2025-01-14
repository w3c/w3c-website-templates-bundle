# Typography

## Font

The web font chosen for this design system is [Noto Sans from Google](https://www.google.com/get/noto/).

## Paragraphs

The default paragraph font size is 1rem, equivalent to 16px unless a user has changed their default browser settings.

### Lead paragraph

A lead paragraph is an introductory paragraph that you can use at the top of a page to summarise the content. The lead paragraph font size is 1.5rem, equivalent to 24px, and should only be used once per page if needed.

<example title="Lead paragraph" src="components/lead.html.twig" />

## Headings

Use the appropriate semantic `<h#>` to mark up headings. Check that headings are ordered hierarchically, without missing any numbers: `<h2>` is the next level down from `<h1>`, `<h3>` is the next level down from `<h2>`, etc.

A set of [font override classes](#font-override-classes) is available, with each class tied to a mixin setting a specific combination of font size and line-height, which have been designed to work together. Headings `<h1>` - `<h5>` have been matched to the classes as detailed in the following table, but can be overridden if desired. `<h6>` takes the default body text size of `1rem`.

Heading | Class
------- | -----
`<h1>`  | `.txt-venus`
`<h2>`  | `.txt-earth`
`<h3>`  | `.txt-mars`
`<h4>`  | `.txt-jupiter`
`<h5>`  | `.txt-saturn`

### Font override classes

Eight classes are available in total. Note that the font size and line-height of `.txt-mercury`, `.txt-venus` and `.txt-earth` increase at the `$bp-tab-small` media query breakpoint, defined in [Settings](../settings/README.md).

<example title="Font override classes" src="components/font-overrides.html.twig" />

### Heading anchors

There is a script which automatically adds anchor links to headings level H2-H6, with some exceptions. Read the [heading anchors documentation](../scripts/heading-anchors.md).