# Text component

The most commonly-used component for adding content to a page. Use for prose, [lists](../styles/lists.md) and [tables](../styles/tables.md). For quotations, use the [quote component](quote.md).

```
<div class="component component--text">
    <h2></h2>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
</div>
```

## Considerations

To help maintain the page heading hierarchy, `<h1>` is not an available option within the CMS as this has its own specific location within the page template.

If you have prose split across multiple text components, with other components interspersed (e.g. image components), be sure to check that no heading levels are accidentally skipped in the text components.