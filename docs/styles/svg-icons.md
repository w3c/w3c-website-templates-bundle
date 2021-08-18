# SVG icons

This section specifically covers using inline SVG files as icons. [Using an SVG file as the `src` of an `<img>`](svg-images.md) is covered separately.

Iconography uses SVGs from [Font Awesome](https://github.com/FortAwesome/Font-Awesome).

The default `.icon` class uses the relative em unit and is ideal for using icons inline with text, adapting the icon size to the font size of the parent element. The icon can easily sit before or after the text, using simple text spacing.

Always include width and height attributes as part of the SVG markup. This prevents the SVG from expanding to fill the whole page if the CSS doesn't load.

```
<p class="txt-mercury">
    <svg aria-hidden="true" focusable="false" class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em"><!-- Font Awesome Free 5.15.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"/></svg>
    </svg> Phone
</p>

<p class="txt-mars">
    Phone <svg aria-hidden="true" focusable="false" class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em"><!-- Font Awesome Free 5.15.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"/></svg>
    </svg>
</p>
```

## Controlling icon spacing

If you want control over the spacing between the icon and text, add the `.with-icon--before` or `.with-icon--after` class to the parent element. This applies inline-flex and alignment styles to help things line up nicely, and uses margin for the spacing. It also handles right-to-left text if applicable. Choose the class which reflects the correct order of icon and text.

```
<p class="with-icon--before">
    <svg aria-hidden="true" focusable="false" class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em"><!-- Font Awesome Free 5.15.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"/></svg>
    </svg> Phone
</p>

<p class="with-icon--after">
    Phone <svg aria-hidden="true" focusable="false" class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em"><!-- Font Awesome Free 5.15.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"/></svg>
    </svg>
</p>
```

## Larger icons

If there is a need for an inline icon that is distinctly larger than the default text, use `.with-icon--larger` on the parent element and add the modifier class `.icon--large` to the icon. This class uses the `rem` unit to specify a size relative to the root font size.

```
<button type="button" class="button with-icon--before with-icon--larger">
    <svg aria-hidden="true" focusable="false" class="icon icon--larger" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em"><!-- Font Awesome Free 5.15.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"/></svg>
    </svg> Phone
</button>

<button type="button" class="button with-icon--after with-icon--larger">
    Phone <svg aria-hidden="true" focusable="false" class="icon icon--larger" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em"><!-- Font Awesome Free 5.15.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"/></svg>
    </svg>
</button>
```

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
    <!-- ... -->
</svg>
```

This pattern is robust for use within links and buttons which have a visible text label. Icons with text labels are less ambiguous to users. 

If using an icon without a visible text label, the following markup pattern should be used to provide accessible names:

```
<button>
    <svg aria-hidden="true" focusable="false"><!--...--></svg>
    <span class="visuallyhidden">Search</span>
</button>

<a href="/search">
    <svg aria-hidden="true" focusable="false"><!--...--></svg>
    <span class="visuallyhidden">Search</span>
</a>
```

### Non-decorative SVG accessibility

If an SVG is used in a context where it adds meaning to the content then it is not being used as an icon, and requires a different markup pattern:

```
<svg role="img" focusable="false">
    <title>Accessible Name</title>
    <!--...-->
</svg>
```

Note that `path` and any other direct child elements of the SVG should receive the `aria-hidden="true"` attribute if they contain no information that should be made accessible.