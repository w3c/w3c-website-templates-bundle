# Quote component

<example title="Quote component" src="components/quote.html.twig" />

## Considerations

The W3C specification says that a reference to a creative work, as included within a `<cite>` element, may include the name of the work’s author. However, the WHATWG specification for `<cite>` says the opposite: that a person’s name must never be included, under any circumstances. Hence, the example above does not use `<cite>`.

To include a reference to the source of quoted material which is contained within a `<blockquote>` or `<q>` element, use the `cite` attribute on the element to provide a URL.