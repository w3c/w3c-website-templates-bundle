# Vertical spacing

The Stack [Sass mixin](https://sass-lang.com/documentation/at-rules/mixin), is used to create vertical spacing between flow elements. Although not part of Base within Apollo's CSS architecture, special note is made of it here because of how widely it can be used.

As discussed in [Every Layout](https://every-layout.dev/layouts/stack/), flow elements require space to physically and conceptually separate them from the elements that come before and after them. Every Layout uses a `.stack` class to achieve this.

Chris Burnell took the theory and [converted the Stack class into a mixin](https://chrisburnell.com/article/sassy-lobotomised-owl/).

Apollo uses its own version of this mixin, but allows for specified units of measurement, rather than predefined reference sizes.

