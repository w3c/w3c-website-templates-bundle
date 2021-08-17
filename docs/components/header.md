# Header

The following example shows a stripped back example of the website header. It does not include the complete [navigation component](navigation.md).

The beta banner is contained within `<div class="banner">` and can be removed when no longer required.

```
<header class="global-header">
    <span role="status" aria-live="polite"></span>
    <div class="banner">
        <div class="banner__inner l-center">
            <img src="/dist/assets/svg/beta.svg" class="icon icon--beta" alt="Beta icon" role="img"/>
            <p>This is a new website. <a href="https://github.com/w3c/w3c-website">Give feedback</a> to help us improve it.</p>
        </div>
    </div>
    <nav id="lang-nav" aria-label="Language options">
        <div class="l-center">
            <div class="l-cluster">
                <ul class="clean-list" role="list">
                    <li><a href="/zh" hreflang="zh-hans" lang="zh-hans">简体中文首页</a></li>
                    <li><a href="/ja" hreflang="ja" lang="ja">日本語ホームページ</a></li>
                </ul>
            </div>
        </div>
    </nav>
    <nav id="global-nav" aria-label="Main">
        <div class="global-nav__inner l-center">
            <a class="logo-link" href="/">
                <span class="logo">
                    <img src="/dist/assets/svg/w3c-logo.svg" alt="W3C logo" role="img"/>
                </span>
                <span class="visuallyhidden">W3C homepage</span>
            </a>
        </div>
    </nav>
</header>
```

## Considerations

Note the use of the [center layout](../layouts/center.md) and [cluster layout](../layouts/cluster.md).

Note the inclusion of `<span role="status" aria-live="polite"></span>`. This will hold notifications for Assistive Technology users who have logged into their account. Such messages are injected via JavaScript.