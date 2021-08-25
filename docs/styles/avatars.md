# Avatars

Wrap a square or portrait image inside a `<div>` or `<span>` with the class `.avatar` to apply a circular mask to the image. Here is an example from the [evangelists component](../components/evangelists.md) found on the [business ecosystem](../templates/business-ecosystem.md) template:

<example title="Avatars" src="components/avatars.html.twig" />

## Considerations

Note the empty `alt` attribute in this example. Images must always have an `alt` attribute - leaving it empty shows that it is a decorative image.

The default size of an avatar is equivalent to 100px wide and tall (the CSS converts the pixel value into rem units.) Additional modifier classes can be added for smaller avatars:

- `.avatar--med` for an avatar equivalent to 50px wide and tall
- `.avatar--small` for an avatar equivalent to 30px wide and tall