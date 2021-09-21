# Vertical spacing

The Stack [Sass mixin](https://sass-lang.com/documentation/at-rules/mixin), is used to create vertical spacing between [block-level elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements#elements). Although it resides in **20-mixins** rather than **30-base** in the architecture, it is discussed here along with other styles that are available to all browsers.

As discussed in [Every Layout](https://every-layout.dev/layouts/stack/), flow elements require space to physically and conceptually separate them from the elements that come before and after them. Every Layout uses a `.stack` class to achieve this, based on [Heydon Pickering's lobotomised owl](https://alistapart.com/article/axiomatic-css-and-lobotomized-owls/).

Chris Burnell took the theory and [converted the Stack class into a mixin](https://chrisburnell.com/article/sassy-lobotomised-owl/).

The design system uses its own version of this mixin but allows for specified units of measurement, rather than predefined reference sizes:

```scss
// The mixin
@mixin stack($measure: 1em) {

	display: flex;
	flex-direction: column;
	justify-content: flex-start;

	& > * + * {

		margin-top: $measure;

	}

}

// How to use the mixin with a specific measure
// Omit the round brackets and their contents to use the default 1em
blockquote {

	@include stack(1rem);
    
}
```