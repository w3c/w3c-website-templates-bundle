# Image component

<example title="Image component" src="components/image.html.twig" />

## Considerations

Note the use of the [frame layout](../layouts/frame.md), to create the desired aspect ratio, and the `loading="lazy"` attribute on `<img>` for native lazy-loading.

### Alternative text

Every instance of `<img>` must include the `alt` attribute. If the image is decorative it can be left blank. Otherwise, the `alt` requires a text value explaining the nature of the image for users of Assistive Technology. This [alt decision tree](https://www.w3.org/WAI/tutorials/images/decision-tree/) is helpful for determining whether and how to provide alternative text.