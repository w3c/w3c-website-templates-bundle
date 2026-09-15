# Lists

Use lists to make blocks of text easier to read, and to break information into manageable chunks.

Note that lists that are a descendant of the `<nav>` element have all margins, padding and list item markers removed by default.

## Unordered lists

<example title="Unordered list with markers" src="components/list-ul.html.twig" />

## Ordered lists

<example title="Ordered list with markers" src="components/list-ol.html.twig" />

## Classes to modify list styles

The `.clean-list` class removes all margin and padding and list item markers:

<example title="Unordered list without spacing and bullets" src="components/list-clean.html.twig" />

The `.nomarkers-list` class removes list item markers only:

<example title="Unordered list without bullets" src="components/list-nomarkers.html.twig" />

The `.noindent-list` class removes padding from the leading edge of lists:

<example title="Unordered list without bullets" src="components/list-noindent.html.twig" />

Adding the `.counter` class to an ordered list will ensure that any nested ordered lists are displayed as decimals, with the first digit corresponding to the number of the parent list item:

<example title="Ordered list with a counter" src="components/list-ol-counter.html.twig" />

## Considerations

The `.clean-list` and `.nomarkers-list` classes that remove list item markers also [remove list semantics in Webkit browsers](https://www.scottohara.me/blog/2019/01/12/lists-and-safari.html), as noted by Scott O'Hara. If list semantics are important for your users, add `role="list"` to restore them.

The `.counter` class supports the `"start"` and `"reversed"` attributes on the ordered list, but does not support the `"type"` attribute, e.g. for Roman numerals. Ordered lists with the `.counter` class will always use decimal numbers for the markers.

## Description lists

<example title="Description list" src="components/list-dl.html.twig" />

### Tabulated description lists

For a more tabulated style, add the `.grid` class to the `<dl>` element:

<example title="Description list with grid styling" src="components/list-dl-grid.html.twig" />

### Inline description lists

To align the terms and the descriptions separated with a comma, add the `.inline` class to the `<dl>` element and a `<div>` around the `<dt>`/`<dd>`:

<example title="Inline description list" src="components/list-dl-inline.html.twig" />
