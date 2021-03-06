# Frame

The frame layout is useful for cropping media (images and video) to a specific aspect ratio. It uses the class `.l-frame` and additional modifier classes for pre-defined aspect ratios. These modifier classes determine the amount of vertical padding on the frame, which then acts as a window onto the content inside.

## 16:9 aspect ratio

<example title="Frame layout: 16:9 aspect ratio" src="components/frame-16-9.html.twig" />

## 3:2 aspect ratio

<example title="Frame layout: 3:2 aspect ratio" src="components/frame-3-2.html.twig" />

## 4:3 aspect ratio

<example title="Frame layout: 4:3 aspect ratio" src="components/frame-4-3.html.twig" />

## Square aspect ratio

<example title="Frame layout: square aspect ratio" src="components/frame-square.html.twig" />

## Considerations

### Figure/figcaption use

If using `<figure>` with `<figcaption>`, make sure to apply the `.l-frame` class to an inner `<picture>` or `<div>` rather than directly to the `<figure>` to avoid obscuring the `<figcaption>`.

### Internet Explorer/Edge

The default frame layout uses `object-fit: cover` for images and videos. This is not supported in Internet Explorer or Edge prior to version 16 and in Edge 16-18 it is only supported on images. However, the Chromium Edge browser, which does support object-fit, is now available to systems as far back as Windows 7.

If you need broader support you may prefer to forgo `object-fit` and adapt your instance of the frame to rely on absolute positioning of the contents and hiding any overflow.