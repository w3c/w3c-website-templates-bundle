# Pre-footer

Used on the post and events [listing pages](../templates/listings.md).

## Post listing (generic) pre-footer

```
<div class="l-box l-box--no-border l-box--no-padding">
    <div class="l-switcher pre-footer">
        <div>
            <div>
                <a href="mailto:w3c-news-request@w3.org">Get press releases by email</a>
            </div>
            <div>
                <a href="mailto:w3t-pr@w3.org">Write to the W3C comms team</a>
            </div>
        </div>
    </div>
</div>
```

## Event listing pre-footer

This particular pre-footer uses `<section>` rather than simple `<div>` elements, mainly to clarify page structure for developers.

```
<div class="l-box l-box--no-border l-box--no-padding">
    <div class="l-switcher pre-footer">
        <div>
            <section class="rss">
                <h2 class="txt-jupiter">Related RSS feed</h2>
                <p class="with-icon--before with-icon--larger">
                    <img class="icon icon--larger" src="/dist/assets/svg/rss.svg" width="30" height="30" alt="" aria-hidden="true">
                    <a href="https://www.w3.org/events/feed">Subscribe to our Events feed</a>
                </p>
            </section>
            <section class="archive-links">
                <h2 class="txt-jupiter">W3C archived events</h2>
                <button type="button" class="button button--ghost with-icon with-icon--after" style="" data-toggle="true" aria-expanded="false">Browse archives <svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 320 512" class="icon" focusable="false" aria-hidden="true" width="1em" height="1em"><use class="angle-down" href="dist/assets/svg/nav-icons.svg#angle-down"></use><use class="angle-up" href="dist/assets/svg/nav-icons.svg#angle-up"></use></svg></button>
                <nav id="archive-nav" aria-label="Event archive">
                    <ul class="clean-list" role="list">
                        <li><a href="path/to/page">All</a></li>
                        <li><a href="path/to/page">2020</a></li>
                        <li><a href="path/to/page">2019</a></li>
                        <li><a href="path/to/page">2018</a></li>
                        <li><a href="path/to/page">2017</a></li>
                        <li><a href="path/to/page">2016</a></li>
                        <li><a href="path/to/page">2015</a></li>
                        <li><a href="path/to/page">2014</a></li>
                        <li><a href="path/to/page">2013</a></li>
                        <li><a href="path/to/page">2012</a></li>
                        <li><a href="path/to/page">2011</a></li>
                        <li><a href="path/to/page">2010</a></li>
                        <li><a href="path/to/page">2009</a></li>
                        <li><a href="path/to/page">2008</a></li>
                        <li><a href="path/to/page">2007</a></li>
                        <li><a href="path/to/page">2006</a></li>
                        <li><a href="path/to/page">2005</a></li>
                        <li><a href="path/to/page">2004</a></li>
                        <li><a href="path/to/page">2003</a></li>
                        <li><a href="path/to/page">2002</a></li>
                        <li><a href="path/to/page">2001</a></li>
                        <li><a href="path/to/page">2000</a></li>
                        <li><a href="path/to/page">1999</a></li>
                        <li><a href="path/to/page">1998</a></li>
                        <li><a href="path/to/page">1997</a></li>
                        <li><a href="path/to/page">1996</a></li>
                        <li><a href="path/to/page">1995</a></li>
                        <li><a href="path/to/page">1994</a></li>
                    </ul>
                </nav>
            </section>
        </div>
    </div>
</div>
```

## Considerations

Note the use of the [box layout](../layouts/box.md) and the [switcher layout](../layouts/switcher.md).