# Breadcrumbs

```
<nav id="breadcrumb" aria-label="Breadcrumb">
    <div class="l-center">
        <div class="l-cluster">
            <ol class="breadcrumbs clean-list" role="list">
                <li><a href="/">Home</a></li>
                <li><a href="/pg2">Second Page</a></li>
                <li><a href="/pg2/this-pg" aria-current="page">This page</a></li>
            </ol>
        </div>
    </div>
</nav>
```

## Considerations

Note the use of the [center layout](../layouts/center.md) and [cluster layout](../layouts/cluster.md).

The `aria-label` attribute has been added to the `<nav>` element. This is because the main website navigation also uses the `<nav>` element. Where there are multiple`<nav>` elements on a single page, all must be given a unique accessible name via `aria-label`.

The current page is indicated by `aria-current="page"`. Following Scott O'Hara's [accessible breadcrumb pattern](https://scottaohara.github.io/a11y_breadcrumbs/) it is fully linked so that users of Assistive Technology can find which is the currently active link.