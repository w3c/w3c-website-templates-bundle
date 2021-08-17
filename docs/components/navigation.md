# Navigation

The following example shows how the global navigation sits within the [header component](header.md).

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
            <button type="button" class="button button--ghost with-icon--after with-icon--larger" data-trigger="mobile-nav" style="display: none;"></button>
            <ul class="clean-list">
                <li class="top-nav-item has-children">
                    <a href="path/to/page" class="nav-link">Standards</a>
                    <div class="nav__submenu" style="display: none;">
                        <div class="l-center">
                            <div class="nav__submenu__intro">
                                <div class="nav__submenu__intro__text">
                                    <p>Understand the various specifications, their maturity levels on the Web Standards track, and their adoption.</p>
                                    <a href="path/to/page" aria-hidden="true" tabindex="-1">Explore Web Standards</a>
                                </div>
                            </div>
                            <ul class="clean-list" role="list">
                                <li>
                                    <a class="with-icon--before with-icon--larger" href="path/to/page"><svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 320 512" class="icon icon--larger" focusable="false" aria-hidden="true" width="1em" height="1em"><use class="chevron-left" href="/dist/assets/svg/nav-icons.svg#chevron-left"></use><use class="chevron-right" href="/dist/assets/svg/nav-icons.svg#chevron-right"></use></svg> Technical reports</a>
                                </li>
                                <li>
                                    <a class="with-icon--before with-icon--larger" href="path/to/page"><svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 320 512" class="icon icon--larger" focusable="false" aria-hidden="true" width="1em" height="1em"><use class="chevron-left" href="/dist/assets/svg/nav-icons.svg#chevron-left"></use><use class="chevron-right" href="/dist/assets/svg/nav-icons.svg#chevron-right"></use></svg> Translations of technical reports</a>
                                </li>
                                <li>
                                    <a class="with-icon--before with-icon--larger" href="path/to/page"><svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 320 512" class="icon icon--larger" focusable="false" aria-hidden="true" width="1em" height="1em"><use class="chevron-left" href="/dist/assets/svg/nav-icons.svg#chevron-left"></use><use class="chevron-right" href="/dist/assets/svg/nav-icons.svg#chevron-right"></use></svg> Liaisons</a>
                                </li>
                                <li>
                                    <a class="with-icon--before with-icon--larger" href="path/to/page"><svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 320 512" class="icon icon--larger" focusable="false" aria-hidden="true" width="1em" height="1em"><use class="chevron-left" href="/dist/assets/svg/nav-icons.svg#chevron-left"></use><use class="chevron-right" href="/dist/assets/svg/nav-icons.svg#chevron-right"></use></svg> Promote web standards</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li class="top-nav-item has-children">
                    <a href="path/to/page" class="nav-link">Groups</a>
                    <div class="nav__submenu" style="display: none;">
                        <div class="l-center">
                            <div class="nav__submenu__intro">
                                <div class="nav__submenu__intro__text">
                                    <p>A variety of groups develop Web Standards, guidelines, or supporting materials.</p>
                                    <a href="path/to/page" aria-hidden="true" tabindex="-1">Discover W3C groups</a>
                                </div>
                            </div>
                            <ul class="clean-list" role="list">
                                <li>
                                    <a class="with-icon--before with-icon--larger" href="path/to/page"><svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 320 512" class="icon icon--larger" focusable="false" aria-hidden="true" width="1em" height="1em"><use class="chevron-left" href="/dist/assets/svg/nav-icons.svg#chevron-left"></use><use class="chevron-right" href="/dist/assets/svg/nav-icons.svg#chevron-right"></use></svg> Working groups</a>
                                </li>
                                <li>
                                    <a class="with-icon--before with-icon--larger" href="path/to/page"><svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 320 512" class="icon icon--larger" focusable="false" aria-hidden="true" width="1em" height="1em"><use class="chevron-left" href="/dist/assets/svg/nav-icons.svg#chevron-left"></use><use class="chevron-right" href="/dist/assets/svg/nav-icons.svg#chevron-right"></use></svg> Interest groups</a>
                                </li>
                                <li>
                                    <a class="with-icon--before with-icon--larger" href="path/to/page"><svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 320 512" class="icon icon--larger" focusable="false" aria-hidden="true" width="1em" height="1em"><use class="chevron-left" href="/dist/assets/svg/nav-icons.svg#chevron-left"></use><use class="chevron-right" href="/dist/assets/svg/nav-icons.svg#chevron-right"></use></svg> Community groups</a>
                                </li>
                                <li>
                                    <a class="with-icon--before with-icon--larger" href="path/to/page"><svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 320 512" class="icon icon--larger" focusable="false" aria-hidden="true" width="1em" height="1em"><use class="chevron-left" href="/dist/assets/svg/nav-icons.svg#chevron-left"></use><use class="chevron-right" href="/dist/assets/svg/nav-icons.svg#chevron-right"></use></svg> Business groups</a>
                                </li>
                                <li>
                                    <a class="with-icon--before with-icon--larger" href="path/to/page"><svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 320 512" class="icon icon--larger" focusable="false" aria-hidden="true" width="1em" height="1em"><use class="chevron-left" href="/dist/assets/svg/nav-icons.svg#chevron-left"></use><use class="chevron-right" href="/dist/assets/svg/nav-icons.svg#chevron-right"></use></svg> Technical architecture group</a>
                                </li>
                                <li>
                                    <a class="with-icon--before with-icon--larger" href="path/to/page"><svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 320 512" class="icon icon--larger" focusable="false" aria-hidden="true" width="1em" height="1em"><use class="chevron-left" href="/dist/assets/svg/nav-icons.svg#chevron-left"></use><use class="chevron-right" href="/dist/assets/svg/nav-icons.svg#chevron-right"></use></svg> Advisory Board</a>
                                </li>
                                <li>
                                    <a class="with-icon--before with-icon--larger" href="path/to/page"><svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 320 512" class="icon icon--larger" focusable="false" aria-hidden="true" width="1em" height="1em"><use class="chevron-left" href="/dist/assets/svg/nav-icons.svg#chevron-left"></use><use class="chevron-right" href="/dist/assets/svg/nav-icons.svg#chevron-right"></use></svg> Invited experts</a>
                                </li>
                                <li>
                                    <a class="with-icon--before with-icon--larger" href="path/to/page"><svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 320 512" class="icon icon--larger" focusable="false" aria-hidden="true" width="1em" height="1em"><use class="chevron-left" href="/dist/assets/svg/nav-icons.svg#chevron-left"></use><use class="chevron-right" href="/dist/assets/svg/nav-icons.svg#chevron-right"></use></svg> Participant guidebook</a>
                                </li>
                                <li>
                                    <a class="with-icon--before with-icon--larger" href="path/to/page"><svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 320 512" class="icon icon--larger" focusable="false" aria-hidden="true" width="1em" height="1em"><use class="chevron-left" href="/dist/assets/svg/nav-icons.svg#chevron-left"></use><use class="chevron-right" href="/dist/assets/svg/nav-icons.svg#chevron-right"></use></svg> Mailing lists</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li class="top-nav-item has-children">
                    <a href="path/to/page" class="nav-link">Get involved</a>
                    <div class="nav__submenu" style="display: none;">
                        <div class="l-center">
                            <div class="nav__submenu__intro">
                                <div class="nav__submenu__intro__text">
                                    <p>W3C works at the nexus of core technology, industry needs, and societal needs.</p>
                                    <a href="path/to/page" aria-hidden="true" tabindex="-1">Find ways to get involved</a>
                                </div>
                            </div>
                            <ul class="clean-list" role="list">
                                <li>
                                    <a class="with-icon--before with-icon--larger" href="path/to/page"><svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 320 512" class="icon icon--larger" focusable="false" aria-hidden="true" width="1em" height="1em"><use class="chevron-left" href="/dist/assets/svg/nav-icons.svg#chevron-left"></use><use class="chevron-right" href="/dist/assets/svg/nav-icons.svg#chevron-right"></use></svg> Working in business ecosystems</a>
                                </li>
                                <li>
                                    <a class="with-icon--before with-icon--larger" href="path/to/page"><svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 320 512" class="icon icon--larger" focusable="false" aria-hidden="true" width="1em" height="1em"><use class="chevron-left" href="/dist/assets/svg/nav-icons.svg#chevron-left"></use><use class="chevron-right" href="/dist/assets/svg/nav-icons.svg#chevron-right"></use></svg> E-commerce</a>
                                </li>
                                <li>
                                    <a class="with-icon--before with-icon--larger" href="path/to/page"><svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 320 512" class="icon icon--larger" focusable="false" aria-hidden="true" width="1em" height="1em"><use class="chevron-left" href="/dist/assets/svg/nav-icons.svg#chevron-left"></use><use class="chevron-right" href="/dist/assets/svg/nav-icons.svg#chevron-right"></use></svg> Media & Entertainment</a>
                                </li>
                                <li>
                                    <a class="with-icon--before with-icon--larger" href="path/to/page"><svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 320 512" class="icon icon--larger" focusable="false" aria-hidden="true" width="1em" height="1em"><use class="chevron-left" href="/dist/assets/svg/nav-icons.svg#chevron-left"></use><use class="chevron-right" href="/dist/assets/svg/nav-icons.svg#chevron-right"></use></svg> Network & Communications</a>
                                </li>
                                <li>
                                    <a class="with-icon--before with-icon--larger" href="path/to/page"><svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 320 512" class="icon icon--larger" focusable="false" aria-hidden="true" width="1em" height="1em"><use class="chevron-left" href="/dist/assets/svg/nav-icons.svg#chevron-left"></use><use class="chevron-right" href="/dist/assets/svg/nav-icons.svg#chevron-right"></use></svg> Publishing</a>
                                </li>
                                <li>
                                    <a class="with-icon--before with-icon--larger" href="path/to/page"><svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 320 512" class="icon icon--larger" focusable="false" aria-hidden="true" width="1em" height="1em"><use class="chevron-left" href="/dist/assets/svg/nav-icons.svg#chevron-left"></use><use class="chevron-right" href="/dist/assets/svg/nav-icons.svg#chevron-right"></use></svg> Smart Cities</a>
                                </li>
                                <li>
                                    <a class="with-icon--before with-icon--larger" href="path/to/page"><svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 320 512" class="icon icon--larger" focusable="false" aria-hidden="true" width="1em" height="1em"><use class="chevron-left" href="/dist/assets/svg/nav-icons.svg#chevron-left"></use><use class="chevron-right" href="/dist/assets/svg/nav-icons.svg#chevron-right"></use></svg> Transportation</a>
                                </li>
                                <li>
                                    <a class="with-icon--before with-icon--larger" href="path/to/page"><svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 320 512" class="icon icon--larger" focusable="false" aria-hidden="true" width="1em" height="1em"><use class="chevron-left" href="/dist/assets/svg/nav-icons.svg#chevron-left"></use><use class="chevron-right" href="/dist/assets/svg/nav-icons.svg#chevron-right"></use></svg> Web Advertising</a>
                                </li>
                                <li class="break-after">
                                    <a class="with-icon--before with-icon--larger" href="path/to/page"><svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 320 512" class="icon icon--larger" focusable="false" aria-hidden="true" width="1em" height="1em"><use class="chevron-left" href="/dist/assets/svg/nav-icons.svg#chevron-left"></use><use class="chevron-right" href="/dist/assets/svg/nav-icons.svg#chevron-right"></use></svg> Web of Things</a>
                                </li>
                                <li>
                                    <a class="with-icon--before with-icon--larger" href="path/to/page"><svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 320 512" class="icon icon--larger" focusable="false" aria-hidden="true" width="1em" height="1em"><use class="chevron-left" href="/dist/assets/svg/nav-icons.svg#chevron-left"></use><use class="chevron-right" href="/dist/assets/svg/nav-icons.svg#chevron-right"></use></svg> W3C Membership</a>
                                </li>
                                <li>
                                    <a class="with-icon--before with-icon--larger" href="path/to/page"><svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 320 512" class="icon icon--larger" focusable="false" aria-hidden="true" width="1em" height="1em"><use class="chevron-left" href="/dist/assets/svg/nav-icons.svg#chevron-left"></use><use class="chevron-right" href="/dist/assets/svg/nav-icons.svg#chevron-right"></use></svg> Donate</a>
                                </li>
                                <li>
                                    <a class="with-icon--before with-icon--larger" href="path/to/page"><svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 320 512" class="icon icon--larger" focusable="false" aria-hidden="true" width="1em" height="1em"><use class="chevron-left" href="/dist/assets/svg/nav-icons.svg#chevron-left"></use><use class="chevron-right" href="/dist/assets/svg/nav-icons.svg#chevron-right"></use></svg> Sponsoring W3C</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li class="top-nav-item has-children">
                    <a href="path/to/page" class="nav-link">Resources</a>
                    <div class="nav__submenu" style="display: none;">
                        <div class="l-center">
                            <div class="nav__submenu__intro">
                                <div class="nav__submenu__intro__text">
                                    <p>Master Web technology fundamentals, use our developer tools, or contribute code.</p>
                                    <a href="path/to/page" aria-hidden="true" tabindex="-1">Learn from W3C resources</a>
                                </div>
                            </div>
                            <ul class="clean-list" role="list">
                                <li>
                                    <a class="with-icon--before with-icon--larger" href="path/to/page"><svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 320 512" class="icon icon--larger" focusable="false" aria-hidden="true" width="1em" height="1em"><use class="chevron-left" href="/dist/assets/svg/nav-icons.svg#chevron-left"></use><use class="chevron-right" href="/dist/assets/svg/nav-icons.svg#chevron-right"></use></svg> Validators and tools</a>
                                </li>
                                <li>
                                    <a class="with-icon--before with-icon--larger" href="path/to/page"><svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 320 512" class="icon icon--larger" focusable="false" aria-hidden="true" width="1em" height="1em"><use class="chevron-left" href="/dist/assets/svg/nav-icons.svg#chevron-left"></use><use class="chevron-right" href="/dist/assets/svg/nav-icons.svg#chevron-right"></use></svg> Accessibility fundamentals</a>
                                </li>
                                <li>
                                    <a class="with-icon--before with-icon--larger" href="path/to/page"><svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 320 512" class="icon icon--larger" focusable="false" aria-hidden="true" width="1em" height="1em"><use class="chevron-left" href="/dist/assets/svg/nav-icons.svg#chevron-left"></use><use class="chevron-right" href="/dist/assets/svg/nav-icons.svg#chevron-right"></use></svg> Internationalization</a>
                                </li>
                                <li>
                                    <a class="with-icon--before with-icon--larger" href="path/to/page"><svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 320 512" class="icon icon--larger" focusable="false" aria-hidden="true" width="1em" height="1em"><use class="chevron-left" href="/dist/assets/svg/nav-icons.svg#chevron-left"></use><use class="chevron-right" href="/dist/assets/svg/nav-icons.svg#chevron-right"></use></svg> Learn CSS</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li class="top-nav-item has-children">
                    <a href="path/to/page" class="nav-link">News and events</a>
                    <div class="nav__submenu" style="display: none;">
                        <div class="l-center">
                            <div class="nav__submenu__intro">
                                <div class="nav__submenu__intro__text">
                                    <p>Recent content across news, blogs, press releases, media; upcoming events.</p>
                                    <a href="path/to/page" aria-hidden="true" tabindex="-1">Follow news and events</a>
                                </div>
                            </div>
                            <ul class="clean-list" role="list">
                                <li>
                                    <a class="with-icon--before with-icon--larger" href="path/to/page"><svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 320 512" class="icon icon--larger" focusable="false" aria-hidden="true" width="1em" height="1em"><use class="chevron-left" href="/dist/assets/svg/nav-icons.svg#chevron-left"></use><use class="chevron-right" href="/dist/assets/svg/nav-icons.svg#chevron-right"></use></svg> News</a>
                                </li>
                                <li>
                                    <a class="with-icon--before with-icon--larger" href="path/to/page"><svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 320 512" class="icon icon--larger" focusable="false" aria-hidden="true" width="1em" height="1em"><use class="chevron-left" href="/dist/assets/svg/nav-icons.svg#chevron-left"></use><use class="chevron-right" href="/dist/assets/svg/nav-icons.svg#chevron-right"></use></svg> Blog</a>
                                </li>
                                <li>
                                    <a class="with-icon--before with-icon--larger" href="path/to/page"><svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 320 512" class="icon icon--larger" focusable="false" aria-hidden="true" width="1em" height="1em"><use class="chevron-left" href="/dist/assets/svg/nav-icons.svg#chevron-left"></use><use class="chevron-right" href="/dist/assets/svg/nav-icons.svg#chevron-right"></use></svg> Press releases</a>
                                </li>
                                <li class="break-after">
                                    <a class="with-icon--before with-icon--larger" href="path/to/page"><svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 320 512" class="icon icon--larger" focusable="false" aria-hidden="true" width="1em" height="1em"><use class="chevron-left" href="/dist/assets/svg/nav-icons.svg#chevron-left"></use><use class="chevron-right" href="/dist/assets/svg/nav-icons.svg#chevron-right"></use></svg> In the media</a>
                                </li>
                                <li>
                                    <a class="with-icon--before with-icon--larger" href="path/to/page"><svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 320 512" class="icon icon--larger" focusable="false" aria-hidden="true" width="1em" height="1em"><use class="chevron-left" href="/dist/assets/svg/nav-icons.svg#chevron-left"></use><use class="chevron-right" href="/dist/assets/svg/nav-icons.svg#chevron-right"></use></svg> Events</a>
                                </li>
                                <li>
                                    <a class="with-icon--before with-icon--larger" href="path/to/page"><svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 320 512" class="icon icon--larger" focusable="false" aria-hidden="true" width="1em" height="1em"><use class="chevron-left" href="/dist/assets/svg/nav-icons.svg#chevron-left"></use><use class="chevron-right" href="/dist/assets/svg/nav-icons.svg#chevron-right"></use></svg> Talks</a>
                                </li>
                                <li>
                                    <a class="with-icon--before with-icon--larger" href="path/to/page"><svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 320 512" class="icon icon--larger" focusable="false" aria-hidden="true" width="1em" height="1em"><use class="chevron-left" href="/dist/assets/svg/nav-icons.svg#chevron-left"></use><use class="chevron-right" href="/dist/assets/svg/nav-icons.svg#chevron-right"></use></svg> Workshops</a>
                                </li>
                                <li>
                                    <a class="with-icon--before with-icon--larger" href="path/to/page"><svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 320 512" class="icon icon--larger" focusable="false" aria-hidden="true" width="1em" height="1em"><use class="chevron-left" href="/dist/assets/svg/nav-icons.svg#chevron-left"></use><use class="chevron-right" href="/dist/assets/svg/nav-icons.svg#chevron-right"></use></svg> Meetings</a>
                                </li>
                                <li>
                                    <a class="with-icon--before with-icon--larger" href="path/to/page"><svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 320 512" class="icon icon--larger" focusable="false" aria-hidden="true" width="1em" height="1em"><use class="chevron-left" href="/dist/assets/svg/nav-icons.svg#chevron-left"></use><use class="chevron-right" href="/dist/assets/svg/nav-icons.svg#chevron-right"></use></svg> Conferences</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li class="top-nav-item has-children">
                    <a href="path/to/page" class="nav-link">About</a>
                    <div class="nav__submenu" style="display: none;">
                        <div class="l-center">
                            <div class="nav__submenu__intro">
                                <div class="nav__submenu__intro__text">
                                    <p>Understand our values and principles, learn our history, look into our policies, meet our people.</p>
                                    <a href="path/to/page" aria-hidden="true" tabindex="-1">Find out more about us</a>
                                </div>
                            </div>
                            <ul class="clean-list" role="list">
                                <li>
                                    <a class="with-icon--before with-icon--larger" href="path/to/page"><svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 320 512" class="icon icon--larger" focusable="false" aria-hidden="true" width="1em" height="1em"><use class="chevron-left" href="/dist/assets/svg/nav-icons.svg#chevron-left"></use><use class="chevron-right" href="/dist/assets/svg/nav-icons.svg#chevron-right"></use></svg> Our mission</a>
                                </li>
                                <li>
                                    <a class="with-icon--before with-icon--larger" href="path/to/page"><svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 320 512" class="icon icon--larger" focusable="false" aria-hidden="true" width="1em" height="1em"><use class="chevron-left" href="/dist/assets/svg/nav-icons.svg#chevron-left"></use><use class="chevron-right" href="/dist/assets/svg/nav-icons.svg#chevron-right"></use></svg> Sponsoring W3C</a>
                                </li>
                                <li>
                                    <a class="with-icon--before with-icon--larger" href="path/to/page"><svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 320 512" class="icon icon--larger" focusable="false" aria-hidden="true" width="1em" height="1em"><use class="chevron-left" href="/dist/assets/svg/nav-icons.svg#chevron-left"></use><use class="chevron-right" href="/dist/assets/svg/nav-icons.svg#chevron-right"></use></svg> History</a>
                                </li>
                                <li>
                                    <a class="with-icon--before with-icon--larger" href="path/to/page"><svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 320 512" class="icon icon--larger" focusable="false" aria-hidden="true" width="1em" height="1em"><use class="chevron-left" href="/dist/assets/svg/nav-icons.svg#chevron-left"></use><use class="chevron-right" href="/dist/assets/svg/nav-icons.svg#chevron-right"></use></svg> Leadership</a>
                                </li>
                                <li>
                                    <a class="with-icon--before with-icon--larger" href="path/to/page"><svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 320 512" class="icon icon--larger" focusable="false" aria-hidden="true" width="1em" height="1em"><use class="chevron-left" href="/dist/assets/svg/nav-icons.svg#chevron-left"></use><use class="chevron-right" href="/dist/assets/svg/nav-icons.svg#chevron-right"></use></svg> Staff</a>
                                </li>
                                <li>
                                    <a class="with-icon--before with-icon--larger" href="path/to/page"><svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 320 512" class="icon icon--larger" focusable="false" aria-hidden="true" width="1em" height="1em"><use class="chevron-left" href="/dist/assets/svg/nav-icons.svg#chevron-left"></use><use class="chevron-right" href="/dist/assets/svg/nav-icons.svg#chevron-right"></use></svg> Evangelists</a>
                                </li>
                                <li>
                                    <a class="with-icon--before with-icon--larger" href="path/to/page"><svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 320 512" class="icon icon--larger" focusable="false" aria-hidden="true" width="1em" height="1em"><use class="chevron-left" href="/dist/assets/svg/nav-icons.svg#chevron-left"></use><use class="chevron-right" href="/dist/assets/svg/nav-icons.svg#chevron-right"></use></svg> Careers</a>
                                </li>
                                <li>
                                    <a class="with-icon--before with-icon--larger" href="path/to/page"><svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 320 512" class="icon icon--larger" focusable="false" aria-hidden="true" width="1em" height="1em"><use class="chevron-left" href="/dist/assets/svg/nav-icons.svg#chevron-left"></use><use class="chevron-right" href="/dist/assets/svg/nav-icons.svg#chevron-right"></use></svg> Press and media</a>
                                </li>
                                <li>
                                    <a class="with-icon--before with-icon--larger" href="path/to/page"><svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 320 512" class="icon icon--larger" focusable="false" aria-hidden="true" width="1em" height="1em"><use class="chevron-left" href="/dist/assets/svg/nav-icons.svg#chevron-left"></use><use class="chevron-right" href="/dist/assets/svg/nav-icons.svg#chevron-right"></use></svg> Contact</a>
                                </li>
                                <li>
                                    <a class="with-icon--before with-icon--larger" href="path/to/page"><svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 320 512" class="icon icon--larger" focusable="false" aria-hidden="true" width="1em" height="1em"><use class="chevron-left" href="/dist/assets/svg/nav-icons.svg#chevron-left"></use><use class="chevron-right" href="/dist/assets/svg/nav-icons.svg#chevron-right"></use></svg> Policies and legal information</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li class="top-nav-item">
                    <a href="path/to/page" class="nav-link icon-link"><span class="visuallyhidden">Search</span> <img class="icon" src="/dist/assets/svg/search.svg" width="24" height="24" alt aria-hidden="true" /></a>
                </li>
                <li class="top-nav-item">
                    <a href="path/to/page" class="account-login icon-link with-icon--after">My account <img class="icon" src="/dist/assets/svg/avatar.svg" width="24" height="24" alt aria-hidden="true" /></a>
                </li>
            </ul>
        </div>
    </nav>
</header>
```

## Considerations

Note the use of the inline style `display: none;` on the button element with the data attribute `data-trigger="mobile-nav"`. This data attribute is targeted by the JavaScript for the global navigation. In the absence of JavaScript, which is required for the off-canvas mobile navigation, the button remains hidden to users.

The inline style `display: none;` is also used on instances of `.nav__submenu`. As the sub-navigation requires JavaScript for the drop-down effect, this keeps it hidden if JavaScript is not available. It also prevents the sub-menus from flashing from visible to hidden when an uncached page first loads.

If a top level navigation item will have child links, indicated by the `.has-children` class on the `<li>`, JavaScript replaces the link with a button for toggling the display of the sub-navigation.