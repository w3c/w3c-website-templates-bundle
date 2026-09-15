# Changelog

## September 2026

### Replacing Normalize CSS reset

The Sass import of Normalize CSS has been replaced a new global reset file: `assets-src/styles/sass/30-base/_global-reset.scss`. This holds a smaller collection of more modern reset styles.

### Typography updates

A new 1.125 type scale has been implemented, using more subtle size increments for different heading levels and reducing their overall size. Fluid typography has also been introduced.

Nine font sizes are defined as [CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/--*) (CSS variables) in `assets-src/styles/sass/00-settings/_font-sizes.scss`. They replace Sass mixins that controlled font size (and line height), and were tied to classes named after objects in our Solar System. For backwards compatibility, the old classes have been reassigned as follows:

New class | Old class
------- | -----
`.h1`  | `.txt-venus`
`.h2`  | `.txt-earth`
`.h3`  | `.txt-mars`
`.h4`  | `.txt-jupiter`
`.h5`  | `.txt-saturn`
`.text-sm`  | `.txt-pluto`, `.txt-eris`

[Read about typography](styles/typography.md)

### New list classes/styles

New modifier classes have been added: `.nomarkers-list` and `.noindent-list`.

[Read about list styles](styles/lists.md)

### New table class to add vertical borders

The new `.col-border` class has been introduced, for adding column borders.

[Read about tables](styles/tables.md)

### Removal of sticky footer pattern

This change was introduced to simplify the overall page markup.

### Changes to the text component

Prior to this update, a dedicated text [component](components) was used to wrap blocks of prose content inside `<div class="component component--text">`. This was part of a strategy for managing vertical space between components and elements, in which the reset styles removed the default block margins applied to HTML elements.

With this update, block margins have been reintroduced and there is no longer a need for this wrapping container, which has been removed.

The W3C content management system continues to provide a text component for entering prose content amongst other page components, but no wrapper is added in the resulting markup.

### Changes to the pre-footer component

To allow for additional content inside the pre-footer component, this has been refactored so that the [switcher layout](layouts/switcher.md) (used to for linking to an RSS feed, contact email, event archives) is now a child of `<div class="pre-footer">`. Additional content can be added, so long as it is placed outside the switcher layout.

[Read about the pre-footer component](components/pre-footer.md)

### Changes to listing templates

Prior to this update, there was a requirement for the collection of items/filtered results on a listing template to be wrapped in a container, which was given a specific class depending on the type of items it contained: `.post-list`, `.event-list`, `.member-list`, `.people-list`, `.group-list`. This was part of a strategy for managing vertical space between items.

With this update, both the wrapping container and its list class have been completely removed. Instead, the classes on the items themselves handle most of the styling, including vertical spacing between items, via their `.card--type-of-card` modifier class:

- `.card--post`
- `.card--event`
- `.card--member`
- `.card--user`
- `.card--group`

This makes it easier to nest one type of card inside another, for example nesting `<div class="card card--user">` inside `<div class="card card--member">`.

Specific styles targeting `.card--user` when nested inside `.card--member` have been added: there is no longer a content width restriction on `.card--user` and the avatar size has been reduced by 30%.

[Read about listing templates](templates/listings.md)

### New modifier class for cards that use the sidebar layout

The new `.dense` class has been introduced: when added to `<div class="l-sidebar card">` it removes the width restriction on the content of `<div class="not-sidebar">` and makes all headings the same size as body copy. This is useful for long listing pages with a lot of items, condensing each one to make the page easier to visually scan.