# Frame

The frame layout is useful for cropping media (images and video) to a specific aspect ratio. It uses the class `.l-frame` and additional modifier classes for pre-defined aspect ratios. These modifier classes determine the amount of vertical padding on the frame, which then acts as a window onto the content inside.

## 16:9 aspect ratio

```
<figure>
    <div class="l-frame l-frame--16-9">
        <img src="../assets/apollo-dist/assets/images/steve-johnson--zASKXkwkIY-unsplash.jpg" alt="Multicolored abstract painting">
    </div>
    <figcaption>An example of the 16:9 frame modifier</figcaption>
</figure>
```

## 3:2 aspect ratio

```
<figure>
    <div class="l-frame l-frame--3-2">
        <img src="../assets/apollo-dist/assets/images/steve-johnson--zASKXkwkIY-unsplash.jpg" alt="Multicolored abstract painting">
    </div>
    <figcaption>An example of the 3:2 frame modifier</figcaption>
</figure>
```

## 4:3 aspect ratio

```
<figure>
    <div class="l-frame l-frame--4-3">
        <img src="../assets/apollo-dist/assets/images/steve-johnson--zASKXkwkIY-unsplash.jpg" alt="Multicolored abstract painting">
    </div>
    <figcaption>An example of the 4:3 frame modifier</figcaption>
</figure>
```

## Square aspect ratio

```
<figure>
    <div class="l-frame l-frame--square">
        <img src="../assets/apollo-dist/assets/images/steve-johnson--zASKXkwkIY-unsplash.jpg" alt="Multicolored abstract painting">
    </div>
    <figcaption>An example of the square frame modifier</figcaption>
</figure>
```

## Considerations

### Figure/figcaption use

If using `<figure>` with `<figcaption>`, make sure to apply the `.l-frame` class to an inner `<picture>` or `<div>` rather than directly to the `<figure>` to avoid obscuring the `<figcaption>`.

### Internet Explorer/Edge

The default frame layout uses `object-fit: cover` for images and videos. This is not supported in Internet Explorer or Edge prior to version 16 and in Edge 16-18 it is only supported on images. However, the Chromium Edge browser, which does support object-fit, is now available to systems as far back as Windows 7.

If you need broader support you may prefer to forgo `object-fit` and adapt your instance of the frame to rely on absolute positioning of the contents and hiding any overflow.