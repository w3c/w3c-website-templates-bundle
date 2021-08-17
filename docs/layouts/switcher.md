# Switcher

The switcher layout switches the alignment of items from horizontal to vertical at a given, container-based breakpoint. It's a good choice for situations where each child item should be considered of equal importance and has an equal width.

As with the [cluster](cluster.md) and [sidebar](sidebar.md) layouts, an inner flexbox container holds the switcher items., and the negative margin technique to create gutter soacing between items.

As there are no viewport media queries, the switcher layout will nest nicely inside other containers.

``` 
<div class="l-switcher">
    <div>
        <div>
            <div class="l-box l-box">Item 1</div>
        </div>
        <div>
            <div class="l-box">Item 2</div>
        </div>
        <div>
            <div class="l-box">Item 3</div>
        </div>
    </div>
</div>
```

## Considerations

The default switcher layout behaves as follows:

- When the inner flexbox container is less than 690px wide, the child items sit vertically.
- Otherwise, the child items sit horizontally.
- The number of columns in a row is two (determined by the `min-width` percentage used on the child items).

Use an additional class to override the default behaviour.

### Internet Explorer

There must be no padding on the switcher child items themselves, otherwise the layout will break in this browser. To space content away from the edges, use nested elements with margin or padding. The preceding example uses a nested [box layout](box.md).