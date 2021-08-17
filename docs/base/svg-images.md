# SVG images

This section specifically covers how to use an SVG file as the `src` of an `<img>`. The [use of SVG icon](svg-icons.md) is covered separately.

```
<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/44216/pixels-2.svg" role="img" alt="Pixels the cat">
```

Note the inclusion of the `role="img"` attribute. Without it, some versions of Safari and iOS will skip over the image entirely and not announce the image or the alt text.