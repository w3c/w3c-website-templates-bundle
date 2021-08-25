# SVG images

This section specifically covers how to use an SVG file as the `src` of an `<img>`. The [use of SVG icons](svg-icons.md) is covered separately.

<example title="Using SVG as image source" src="components/svg-image.html.twig" />

Note the inclusion of the `role="img"` attribute. Without it, some versions of Safari and iOS will skip over the image entirely and not announce the image or the alt text.