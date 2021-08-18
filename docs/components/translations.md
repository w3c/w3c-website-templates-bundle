# Translations

If translated versions of a page exist, link to them using the translation component.

<example title="Translations" src="components/translations.html.twig"></example>

Here is the code of the example:

<exampleHtml src="components/translations.html.twig"></exampleHtml>

## Considerations

Note the use of the [box layout](../layouts/box.md), [sidebar layout](../layouts/sidebar.md) and [cluster layout](../layouts/cluster.md).

When using the `hreflang` attribute on links to indicate the language of the page that is being linked to, make sure to include the `lang` with the same language indicator. This is helpful to Assistive Technology users for whom the link content will be in a foreign language.