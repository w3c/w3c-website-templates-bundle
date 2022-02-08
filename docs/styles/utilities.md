# Utilities

A utility class applies a single rule or a very simple, universal pattern.

In the context of this design system, utility classes are used as overrides or helper classes. As such, they could apply to any element and in any context, to do exactly the same thing each time. They are always prefixed with `.u-`, e.g. `.u-float-left` or `.u-full-width`.

Although they reside in **90-utilities** rather than **30-base** in the architecture, they are discussed here along with other styles that are available to all browsers.

Utility classes are organised into groups with a similar purpose or remit, as detailed below. If you have a requirement that you feel would be best covered by a utility class that does not yet exist, feel free to add to the current selection available in the design system.

## Alignments

For floating items and overriding default text alignment:

- `.u-float-left`
- `.u-float-right`
- `.u-block-left`
- `.u-block-right`
- `.u-text-center`
- `.u-text-left`
- `.u-text-right`
- `.u-text-vertical-rl`
- `.u-text-vertical-lr`
- `.u-text-left-from-lap`
- `.u-text-center-from-lap`
- `.u-text-right-from-lap`

The final three classes in the preceding list are linked to a specific breakpoint width, as defined in **00-settings**

`.u-block-left` and `.u-block-right` are used to float block elements such as images or divs with vertically aligned text that require some spacing between
them and the elements around them. 

## Clearfix

Forces an element to self-clear its children:

```scss
// Sass placeholder
%clearfix {

	&::after {
		clear: both;
		content: "";
		display: table;
	}

}

// Extend the clearfix placeholder with Sass to avoid
// having it appear over and over in your markup.
.my-element {
	@extend %clearfix;
}
```

## Layout

To create a full-viewport-width element inside a limited width parent, and to horizontally center a block-level item.

- `.u-full-width`
- `.u-center`

## Margins

For removing all margins or just the top margin from an element. Double specificity in the classnames avoids the use of `!important`.

- `.u-no-margin.u-no-margin`
- `.u-no-margin-top.u-no-margin-top`