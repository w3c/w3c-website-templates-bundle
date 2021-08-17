# Image component

```
<figure class="component component--image">
    <div class="l-frame l-frame--16-9">
        <img src="/dist/assets/images/temp-developers-920.jpg"
             srcset="dist/assets/images/temp-developers-360.jpg 360w, dist/assets/images/temp-developers-580.jpg 580w, dist/assets/images/temp-developers-920.jpg 920w, dist/assets/images/temp-developers-1520.jpg 1520w"
             sizes="100vw"
             loading="lazy"
             alt="A Macbook screen with code, as seen from over the developer's shoulder" />
    </div>
    <figcaption>
        <p>The figcaption is not a replacement for the image's <code>alt</code> attribute. It should be used for providing relevant supporting content.</p>
    </figcaption>
</figure>
```

## Considerations

Note the use of the [frame layout](../layouts/frame.md), to create the desired aspect ratio, and the `loading="lazy"` attribute on `<img>` for native lazy-loading.

### Alternative text

Every instance of `<img>` must include the `alt` attribute. If the image is decorative it can be left blank. Otherwise, the `alt` requires a text value explaining the nature of the image for users of Assistive Technology. This [alt decision tree](https://www.w3.org/WAI/tutorials/images/decision-tree/) is helpful for determining whether and how to provide alternative text.