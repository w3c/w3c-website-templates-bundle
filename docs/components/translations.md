# Translations

If translated versions of a page exist, link to them using the translation component.

```
<section class="l-box l-box--no-border translations">
    <div class="l-sidebar">
        <div>
            <div class="sidebar">
                <h2>Read this page in:</h2>
            </div>
            <div class="not-sidebar">
                <div class="l-cluster">
                    <ul class="clean-list">
                        <li><a href="/fr" hreflang="fr" lang="fr">Français</a></li>
                        <li><a href="/zh" hreflang="zh-hans" lang="zh-hans">简体中文首页</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>
```

## Considerations

Note the use of the [box layout](../layouts/box.md), [sidebar layout](../layouts/sidebar.md) and [cluster layout](../layouts/cluster.md).

When using the `hreflang` attribute on links to indicate the language of the page that is being linked to, make sure to include the `lang` with the same language indicator. This is helpful to Assistive Technology users for whom the link content will be in a foreign language.