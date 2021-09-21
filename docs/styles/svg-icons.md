# SVG icons

This section specifically covers using inline SVG files as icons. [Using an SVG file as the `src` of an `<img>`](svg-images.md) is covered separately.

Iconography uses SVGs from [Font Awesome](https://github.com/FortAwesome/Font-Awesome).

The default `.icon` class uses the relative em unit and is ideal for using icons inline with text, adapting the icon size to the font size of the parent element. The icon can easily sit before or after the text, using simple text spacing.

Always include width and height attributes as part of the SVG markup. This prevents the SVG from expanding to fill the whole page if the CSS doesn't load.

<example title="Basic SVG icons" src="components/svg-icons-base.html.twig" />

## Controlling icon spacing

If you want control over the spacing between the icon and text, add the `.with-icon--before` or `.with-icon--after` class to the parent element. This applies inline-flex and alignment styles to help things line up nicely, and uses margin for the spacing. It also handles right-to-left text if applicable. Choose the class which reflects the correct order of icon and text.

<example title="SVG icons with spacing" src="components/svg-icons-spaced.html.twig" />

## Larger icons

If there is a need for an inline icon that is distinctly larger than the default text, use `.with-icon--larger` on the parent element and add the modifier class `.icon--large` to the icon. This class uses the `rem` unit to specify a size relative to the root font size.

<example title="Larger SVG icons" src="components/svg-icons-large.html.twig" />

## SVG usage

The preceding examples show how to include icons as inline SVGs. The benefits of doing this are:

- It eliminates a separate HTTP request
- SVGs added as background images as part of an icon font may not show properly for high contrast mode users
- We have full CSS control of the SVG in terms of colour, animations/transitions and manipulating paths.

However, inline SVGs are not cached. An alternative is to [use the `<use>` element of SVG to reference code from an external file](https://css-tricks.com/svg-use-with-external-reference-take-2/), which the browser can cache. It also improves the readability of the markup. [CSS styling is still possible](https://tympanus.net/codrops/2015/07/16/styling-svg-use-content-css/), although it has some limitations - be sure to add an extra class and target this in the CSS.

### Considerations

There is no Internet Explorer support for using SVGs with `<use>` and an external source. A JavaScript workaround - [SVG for Everybody](https://github.com/jonathantneal/svg4everybody) - is available if support for this browser is important.

## SVG Accessibility

It is highly recommended to read the advice from Scott O'Hara on [Contextually marking up accessible images and SVGs](https://www.scottohara.me/blog/2019/05/22/contextual-images-svgs-and-a11y.html). The following summarises that advice.

In all the preceding examples, the SVG has acted as a **decorative item**, and uses the following markup pattern, which hides the SVG from screen readers and prevents the <kbd>Tab</kbd> key from navigation inside the SVG in Internet Explorer:

```
<svg aria-hidden="true" focusable="false" ... >
    <!-- child elements of the inline SVG would go here -->
</svg>
```

This pattern is robust for use within links and buttons which have a visible text label. Icons with text labels are less ambiguous to users. 

If using an icon without a visible text label, the following markup pattern should be used to provide accessible names:

```
<button>
    <svg aria-hidden="true" focusable="false">
        <!-- child elements of the inline SVG would go here -->
    </svg>
    <span class="visuallyhidden">Search</span>
</button>

<a href="/search">
    <svg aria-hidden="true" focusable="false">
        <!-- child elements of the inline SVG would go here -->
    </svg>
    <span class="visuallyhidden">Search</span>
</a>
```

### Non-decorative SVG accessibility

If an SVG is used in a context where it adds meaning to the content then it is not being used as an icon, and requires a different markup pattern:

```
<svg role="img" focusable="false">
    <title>Accessible Name</title>
     <!-- child elements of the inline SVG would go here -->
</svg>
```

Note that `path` and any other direct child elements of the SVG should receive the `aria-hidden="true"` attribute if they contain no information that should be made accessible.