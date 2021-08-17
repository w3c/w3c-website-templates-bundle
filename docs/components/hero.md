# Hero

## Decorative hero (home, landing and business ecosystem page templates)

```
<div class="u-full-width hero">
    <div class="l-center">
        <div class="l-sidebar">
            <div>
                <div class="not-sidebar">
                    <h1>Landing page</h1>
                    <p class="lead">A very short introduction/summary of the page.</p>
                </div>
                <div class="sidebar">
                    <img src="/dist/assets/svg/illustration-2.svg" alt role="presentation" />
                </div>
            </div>
        </div>
    </div>
</div>
```

### Considerations

Note the use of the [center layout](../layouts/center.md) and [sidebar layout](../layouts/sidebar.md), and the pattern used for the decorative [SVG image](../base/svg-images.md).

## Listing page hero

On [listing pages](../templates/listings.md), the hero is used to hold any markup required for searching and filtering listing items. Add the modifier class `.hero--listing`.

```
<div class="u-full-width hero hero--listing">
    <div class="l-center">
        <h1>Posts</h1>
        <p class="lead">Search for posts, or browse posts by category or archive.</p>
        [Search and/or filter markup...]
    </div>
</div>
```
