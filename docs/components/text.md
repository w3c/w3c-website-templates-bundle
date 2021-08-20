# Text component

The most commonly-used component for adding content to a page. Use for prose, [lists](../styles/lists.md) and [tables](../styles/tables.md). For quotations, use the [quote component](quote.md).

<example title="Text component" src="components/text.html.twig" />

## Considerations

To help maintain the page heading hierarchy, `<h1>` is not an available option within the CMS as this has its own specific location within the page template.

If you have prose split across multiple text components, with other components interspersed (e.g. the [image component](image.md)), be sure to check that no heading levels are accidentally skipped in the text components.