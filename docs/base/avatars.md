# Avatars

Wrap a square or rectangular image inside a `<div>` or `<span>` with the class `.avatar` to apply a circular mask to the image. Here is an example from the [evangelists component](../components/evangelists.md) found on the [business ecosystem](../templates/business-ecosystem.md) template:

```
<div class="avatar">
    <img alt src="https://www.w3.org/2006/05/u/1682ihk1hqqo-sm.jpg" loading="lazy">
</div>
```

## Considerations

The default size of an avatar is equivalent to 100px wide and tall (the CSS converts the pixel value into rem units.) Additional modifier classes can be added for smaller avatars:

- `.avatar--med` for an avatar equivalent to 50px wide and tall
- `.avatar--small` for an avatar equivalent to 30px wide and tall