# Hero

## Decorative hero (home, landing and business ecosystem page templates)

<example title="Landing page hero" src="components/hero-landing.html.twig" />

### Considerations

Note the use of the [center layout](../layouts/center.md) and [sidebar layout](../layouts/sidebar.md), and the pattern used for the decorative [SVG image](../styles/svg-images.md).

## Listing page hero

On [listing pages](../templates/listings.md), the hero is used to hold any markup required for searching and filtering listing items. Add the modifier class `.hero--listing`.

```
<div class="u-full-width hero hero--listing">
    <div class="l-center">
        <h1>Posts</h1>
        <p class="lead">Search for posts, or browse posts by category or archive.</p>
        
        <!-- search and/or filter markup goes here -->
    </div>
</div>
```
