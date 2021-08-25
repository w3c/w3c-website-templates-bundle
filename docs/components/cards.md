# Cards

Cards are used in multiple places. Although the visual appearance may vary, they share two general patterns:

1. Simple cards with a distinct link that can be selected
2. Block link cards, where the entire surface area can act as a link

For both types of card, it is important to check that the heading level used fits in with the card's location in the page hierarchy.

## Simple cards

These are found on the [landing page](../templates/landing.md) template. The following examples show cards with either an image or icon to accompany the text. Cards can be text-only by omitting the icon markup/`<div class="card__image">`

### Simple card with icon

<example title="Simple card with SVG icon" src="components/card-simple-icon.html.twig" />

### Simple card with image

<example title="Simple card with image" src="components/card-simple-image.html.twig" />

### Considerations

Additional modifier classes can be added to cards:

- `.card--event`, `.card--member`, `.card--news` and `.card--group` add a `box-shadow` style.
- For event cards, the following additional classes change the color strip:
  - `.conference`,
  - `.meeting`,
  - `.talk`,
  - `.workshop`

In the markup, the card text is first in the source order to prioritise it over the icon/image. Flexbox is used to place the icon/image ahead of the card text visually, via the `order` property.

Where generic link text is used visually, this is enhanced for Assistive Technology users with the `<span class="visuallyhidden">` providing descriptive link text.

## Block link cards

A simple card is enhanced into a selectable card by adding the data attribute `data-component="card"`. When this is present, JavaScript will [enhance the card into a block link](https://css-tricks.com/block-links-the-search-for-a-perfect-solution/).

Do not wrap the contents of a card inside a singular `<a>` element. This can result in the entire contents of the card being read out to screen reader users.

<example title="Block link card with one link" src="components/card-link-single.html.twig" />

### Considerations

It is possible for a block link card to have one link as the main link while also allowing other specific links to different destinations, as shown in the following example:

<example title="Block link card with multiple links" src="components/card-link-multiple.html.twig" />

JavaScript targets the link with the class `.card__link` and identifies this as the main link for the card.