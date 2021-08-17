# Pagination

Used on various [listing pages](../templates/listings.md).

```
<nav aria-label="pagination" class="l-cluster pagination">
    <ul class="pagination__list">
        <li><a class="pagination__list__first" href="path/to/page"><span aria-hidden="true">&lt;&lt;</span><span class="visuallyhidden">First page</span></a></li>
        <li><a href="path/to/page">Previous <span class="visuallyhidden">page</span></a></li>
        <li><a href="path/to/page"><span class="visuallyhidden">page</span> 1</a></li>
        <li><a href="#" aria-label="page 2" aria-current="page">2</a></li>
        <li><a href="path/to/page"><span class="visuallyhidden">page</span> 3</a></li>
        <li><a href="path/to/page"><span class="visuallyhidden">page</span> 4</a></li>
        <li><a href="path/to/page"><span class="visuallyhidden">page</span> 5</a></li>
        <li><a class="ellipsis">&#8230;</a></li>
        <li><a href="path/to/page"><span class="visuallyhidden">page</span> 20</a></li>
        <li><a href="path/to/page">Next <span class="visuallyhidden">page</span></a></li>
        <li><a class="pagination__list__last" href="path/to/page"><span aria-hidden="true">&gt;&gt;</span><span class="visuallyhidden">Last page</span></a></li>
    </ul>
</nav>
```

## Considerations

Note the use of the [cluster layout](../layouts/cluster.md).

The `aria-label` attribute has been added to the `<nav>` element. This is because the main website navigation also uses the `<nav>` element. Where there are multiple`<nav>` elements on a single page, all must be given a unique accessible name via `aria-label`.

For all pagination links excluding the current page, `<span class="visuallyhidden">page</span>` is added to provide additional context to the link wording for users of Assistive Technology.

The current page is indicated by `aria-current="page"`. As per the [breadcrumbs component](breadcrumbs.md), it is fully linked so that users of Assistive Technology can find which is the currently active link. The `aria-label`on the current page link provides the same additional context as the visually-hidden span on other pagination links.

The angle bracket characters used within the links for the very first and very last pages are hidden from Assistive Technology users with inside `<span aria-hidden="true">`. Accessible text labels are added using `<span class="visuallyhidden">`.