# Members

A component for displaying a grid of member logos, and linking to the members area of the website. It is part of the [business ecosystem](../templates/business-ecosystem.md) template.

```
<div class="component component--members u-full-width">
    <div class="l-center">
        <h2 class="visuallyhidden">W3C Members</h2>
        <p>20 member organisations are involved in the web payment ecosystem, including:</p>
        <div class="component--members__grid">
            <div>
                <img src="/dist/assets/svg/placeholder-logo.svg" alt role="presentation" loading="lazy" />
            </div>
            <div>
                <img src="/dist/assets/svg/placeholder-logo.svg" alt role="presentation" loading="lazy" />
            </div>
            <div>
                <img src="/dist/assets/svg/placeholder-logo.svg" alt role="presentation" loading="lazy" />
            </div>
            <div>
                <img src="/dist/assets/svg/placeholder-logo.svg" alt role="presentation" loading="lazy" />
            </div>
            <div>
                <img src="/dist/assets/svg/placeholder-logo.svg" alt role="presentation" loading="lazy" />
            </div>
            <div>
                <img src="/dist/assets/svg/placeholder-logo.svg" alt role="presentation" loading="lazy" />
            </div>
            <div>
                <img src="/dist/assets/svg/placeholder-logo.svg" alt role="presentation" loading="lazy" />
            </div>
            <div>
                <img src="/dist/assets/svg/placeholder-logo.svg" alt role="presentation" loading="lazy" />
            </div>
        </div>
        <a href="path/to/page">View all members of the web payment ecosystem</a>
        <div class="l-cluster component--members__cta">
            <div>
                <p>Ways to get involved:</p>
                <a class="button button--alt" href="path/to/page">Join</a>
                <a class="button button--alt" href="path/to/page">Donate</a>
            </div>
        </div>
    </div>
</div>
```

## Considerations

The `cluster layout` used for the call-to-action within the members component (`.component--members__cta`) has been modified, so that the text before the links appears on a separate line below a viewport width of 768px.