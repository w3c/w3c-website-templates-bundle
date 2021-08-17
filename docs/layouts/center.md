# Center

The center layout creates a vertical strip of content inside a given container element, with equal spacing on either side. It uses the class `.l-center`. Apollo uses this technique on the `<main>` element (albeit without using the `.l-center` class).

Padding on the sides of the center layout maintains a space between its contents and the edges of the parent container, even when the parent is narrower than the `max-width` of the center layout.

The center layout uses an exception to Apollo's global `box-sizing: border-box;` declaration. It uses `box-sizing: content-box;` to prevent the padding from making the content narrower than intended.

```
<div class="l-center">Center layout in action</div>
```