# Cards

Cards are used in multiple places. Although the visual appearance may vary, they share two general patterns:

1. Simple cards with a distinct link that can be selected
2. Block link cards, where the entire surface area can act as a link

For both types of card, it is important to check that the heading level used fits in with the card's location in the page hierarchy.

## Simple cards

These are found on the [landing page](../templates/landing.md) template. The following examples show cards with either an image or icon to accompany the text. Cards can be text-only by omitting the icon markup/`<div class="card__image">`

### Simple card with icon

```
<div class="card">
    <div class="card__text">
        <h3 class="card__heading">Web Design and Applications</h3>
        <p>The standards for building and Rendering Web pages, including HTML, CSS, SVG, Ajax, and other technologies for Web Applications (“WebApps”). Includes information on how to make pages accessible (WCAG), to internationalize them, and make them work on mobile devices.</p>
        <a href="path/to/page"><span class="visuallyhidden">Web Design and Applications</span> Learn more</a>
    </div>
    <svg class="icon icon--larger" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true" viewBox="0 0 512 512" width="1em" height="1em"><defs/><path d="M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"/></svg>
</div>
```

### Simple card with image

```
<div class="card">
    <div class="card__text">
        <h3 class="card__heading">W3C starts web payments standards work</h3>
        <p>New working group launched to make payments easier and more secure.</p>
        <a href="path/to/page"><span class="visuallyhidden">W3C starts web payments standards work</span> Learn more</a>
    </div>
    <div class="l-frame l-frame--3-2 card__image">
        <img src="/dist/assets/images/temp-developers-920.jpg"
             srcset="dist/assets/images/temp-developers-360.jpg 360w, dist/assets/images/temp-developers-580.jpg 580w, dist/assets/images/temp-developers-700.jpg 700w, dist/assets/images/temp-developers-920.jpg 920w, dist/assets/images/temp-developers-1520.jpg 1520w"
             sizes="(min-width: 64em) 33vw, (min-width: 48em) 50vw, 100vw"
             loading="lazy"
             alt="A Macbook screen with code, as seen from over the developer's shoulder" />
    </div>
</div>
```

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

```
<div class="card" data-component="card">
    <div class="card__text">
        <h3 class="card__heading"><a href="path/to/page" class="card__link">W3C starts web payments standards work</a></h3>
        <p>New working group launched to make payments easier and more secure.</p>
        <p class="txt-pluto">News</p>
    </div>
    <div class="l-frame l-frame--16-9 card__image">
        <img src="/dist/assets/images/temp-developers-920.jpg"
             srcset="dist/assets/images/temp-developers-360.jpg 360w, dist/assets/images/temp-developers-580.jpg 580w, dist/assets/images/temp-developers-700.jpg 700w, dist/assets/images/temp-developers-920.jpg 920w, dist/assets/images/temp-developers-1520.jpg 1520w"
             sizes="(min-width: 64em) 33vw, (min-width: 48em) 50vw, 100vw"
             loading="lazy"
             alt="A Macbook screen with code, as seen from over the developer's shoulder" />
    </div>
</div>
```

### Considerations

It is possible for a block link card to have one link as the main link while also allowing other specific links to different destinations, as shown in the following example:

```
<div class="card card--event meeting" data-component="card">
    <div class="card__text">
        <div class="l-sidebar">
            <div>
                <div class="not-sidebar">
                    <h2 class="card__heading"><a class="card__link" href="path/to/event">Advisory Committee Meeting</a></h2>
                    <p>This is an example of a meeting type event card. This is the excerpt text.</p>
                </div>
                <div class="sidebar">
                    <div class="date-location">
                        <div>
                            <img src="/dist/assets/svg/calendar.svg" width="18" height="20" alt aria-hidden="true" />
                        </div>
                        <div>
                            <p><time datetime="2021-01-28T18:00Z">28 January 2021, 18:00 - 19:30 UTC</time></p>
                            <p>Online</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <p class="txt-pluto"><a href="path/to/category">Category link</a></p>
        <p class="txt-pluto">Meeting</p>
    </div>
</div>
```

JavaScript targets the link with the class `.card__link` and identifies this as the main link for the card.