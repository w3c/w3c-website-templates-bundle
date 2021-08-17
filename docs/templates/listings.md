# Listing templates

The following example shows the minimum required for a listing page. This example does not include:

- the complete [global navigation](../components/navigation.md)
- the [breadcrumbs component](../components/breadcrumbs.md)
- the exact markup of any search and filters and the listings themselves (variations for [posts](#posts), [events](#events), [members](#members), [groups](#groups) and [people](#people) are covered separately)
- the [pagination component](../components/pagination.md)
- the optional [pre-footer component](../components/pre-footer.md)
- the complete list of site links for the [footer](../components/footer.md).

```
<!doctype html>
<html lang="en" class="no-js">

<head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <title>Page title</title>
    
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    
    <meta property="og:description" name="description" content="Basic page prototype for the W3C website redesign"/>
	<meta property="og:image" name="image" content="/dist/assets/images/w3c-opengraph-image.png">
	
	<script src="/dist/assets/js/libraries/fontfaceobserver.js"></script>
	
	<script>
		let myFont = new FontFaceObserver('Noto Sans');

		Promise.all([myFont.load()]).then(function () {
			document.documentElement.className += " fonts-loaded";
		});
	</script>
	
	<link rel="stylesheet" href="/dist/assets/styles/core.css" media="screen"/>
	
	<!--
    CSS Mustard Cut
    Print (Edge doesn't apply to print otherwise)
    Edge, Chrome 39+, Opera 26+, Safari 9+, iOS 9+, Android ~5+, Android UCBrowser ~11.8+
    FF 47+
    -->
	<link rel="stylesheet" id="advanced-stylesheet" href="/dist/assets/styles/advanced.css" media="
        only print,
        only all and (pointer: fine), only all and (pointer: coarse), only all and (pointer: none),
        only all and (min--moz-device-pixel-ratio:0) and (display-mode:browser), (min--moz-device-pixel-ratio:0) and (display-mode:fullscreen)
    ">
    
    <link rel="stylesheet" href="/dist/assets/styles/print.css" media="print"/>
    
    <script>
		(function() {
			let linkEl = document.getElementById('advanced-stylesheet');
			if (window.matchMedia && window.matchMedia(linkEl.media).matches) {
				let head = document.querySelector('head');
				// Add main JS
				let jsMain = document.createElement('script');
				jsMain.src = 'dist/assets/js/main.js';
				jsMain.defer = true;
				head.appendChild(jsMain);
				// Update classname to show JS is available
				(function(H){H.className=H.className.replace(/\bno-js\b/,'js')})(document.documentElement);
			}
		})();
	</script>
</head>

<body class="listing">
    <a class="skip-link" href="#main">Skip to content</a>
    
    <div class="grid-wrap">
        <div class="wrap">
        
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
            
            [Breadcrumbs go here...]
            
            <main id="main">
                <div class="u-full-width hero hero--listing">
                    <div class="l-center">
                        <h1>Page title</h1>
                        <p class="lead">Page introduction</p>
                        
                        [Page specific search/filtering options go here]
                    </div>
                </div>
                
                <div aria-live="polite" aria-atomic="true">There are x results when searching for 'blah'</div>
                
                [Page listings go here]
                
                [Pagination component goes here]
                
                [Optional pre-footer component goes here]
            </main>
        
        </div>
        
        <footer class="global-footer">
            <div class="l-center">
                <div class="global-footer__links">
                    <div class="l-cluster">
                        <ul class="clean-list" role="list">
                            <li><a href="/">Home</a></li>
                        </ul>
                    </div>
                    <ul class="clean-list" role="list">
                        <li><a class="with-icon--larger" href="https://twitter.com/W3C">
                            <img class="icon icon--larger" src="/dist/assets/svg/twitter.svg" width="20" height="20" alt aria-hidden="true" />
                            <span class="visuallyhidden">W3C on Twitter</span></a>
                        </li>
                        <li><a class="with-icon--larger" href="https://github.com/w3c/">
                            <img class="icon icon--larger" src="/dist/assets/svg/github.svg" width="20" height="20" alt aria-hidden="true" />
                            <span class="visuallyhidden">W3C on GitHub</span></a>
                        </li>
                    </ul>
                </div>
                <p class="copyright">Copyright © 20XX W3C <sup>®</sup> (<a href="https://www.csail.mit.edu/"><abbr title="Massachusetts Institute of Technology">MIT</abbr></a>, <a href="https://www.ercim.eu/"><abbr title="European Research Consortium for Informatics and Mathematics">ERCIM</abbr></a>,
                    <a href="https://www.keio.ac.jp/">Keio</a>, <a href="https://ev.buaa.edu.cn/">Beihang</a>) <a href="/Consortium/Legal/ipr-notice">Usage policies apply</a>.</p>
            </div>
        </footer>
        
    </div>
</body>
```

## Considerations

Note the `.listing` class applied to `<body>`.

### Posts

#### Search and filtering options for the hero

```
<div class="l-sidebar search">
    <form role="search" novalidate>
        <div class="not-sidebar">
            <h2 class="visuallyhidden">Search posts</h2>
            <input type="search" id="search" name="search" aria-label="Search posts">
        </div>
        <div class="sidebar">
            <button type="submit" class="button" name="search">Show results</button>
        </div>
    </form>
</div>
<div class="browse">
    <div>
        <div>
            <h2>Browse categories</h2>
            <button type="button" class="button button--ghost with-icon with-icon--after" style="display:none;" data-toggle="true">Browse categories <svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 320 512" class="icon" focusable="false" aria-hidden="true" width="1em" height="1em"><use class="angle-down" href="/dist/assets/svg/nav-icons.svg#angle-down"></use><use class="angle-up" href="/dist/assets/svg/nav-icons.svg#angle-up"></use></svg></button>
            <nav id="category-nav" aria-label="Post categories">
                <ul class="clean-list" role="list">
                    <li><a href="path/to/page">All</a></li>
                    <li><a href="path/to/page">Category 1</a></li>
                    <li><a href="path/to/page">Category 2</a></li>
                    <li><a href="path/to/page">Category 3</a></li>
                    <li><a href="path/to/page">Category 4</a></li>
                    <li><a href="path/to/page">Category 5</a></li>
                </ul>
            </nav>
        </div>
        <div>
            <h2>Browse archives</h2>
            <button type="button" class="button button--ghost with-icon with-icon--after" style="display:none;" data-toggle="true">Browse archives <svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 320 512" class="icon" focusable="false" aria-hidden="true" width="1em" height="1em"><use class="angle-down" href="/dist/assets/svg/nav-icons.svg#angle-down"></use><use class="angle-up" href="/dist/assets/svg/nav-icons.svg#angle-up"></use></svg></button>
            <nav id="archive-nav" aria-label="Post archive">
                <ul class="clean-list" role="list">
                    <li><a href="path/to/page">All</a></li>
                    <li><a href="path/to/page">2021</a></li>
                    <li><a href="path/to/page">2020</a></li>
                    [...]
                    <li><a href="path/to/page">1995</a></li>
                    <li><a href="path/to/page">1994</a></li>
                </ul>
            </nav>
        </div>
    </div>
</div>
```

#### List of posts

```
<div class="post-list">

    <div class="l-sidebar">
        <div>
            <div class="not-sidebar">
                <div>
                    <h2 class="txt-mars"><a href="path/to/post">Blog post card example</a></h2>
                    <div class="l-cluster">
                        <div>
                            <div>
                                <a href="path/to/category-page">Category</a>
                            </div>
                            <div>
                                <p><span class="visuallyhidden">Published:</span> <time datetime="2015-09-24">24 September 2015</time></p>
                            </div>
                            <div>
                                <p>By: Anne Author</p>
                            </div>
                        </div>
                    </div>
                    <p>This is an example of a blog post card. Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
                </div>
            </div>
            <div class="sidebar">
                <a href="path/to/post" class="l-frame" aria-hidden="true" tabindex="-1">
                    <img src="/dist/assets/images/temp-developers-360.jpg"
                         srcset="/dist/assets/images/temp-developers-580.jpg 2x"
                         loading="lazy"
                         alt="A Macbook screen with code, as seen from over the developer's shoulder" />
                </a>
            </div>
        </div>
    </div>
    
    <div class="l-sidebar">
        <div>
            <div class="not-sidebar">
                <div>
                    <h2 class="txt-mars"><a href="path/to/post">News article card example</a></h2>
                    <div class="l-cluster">
                        <div>
                            <div>
                                <a href="path/to/category-page">Category</a>
                            </div>
                            <div>
                                <p><span class="visuallyhidden">Published:</span> <time datetime="2015-09-24">24 September 2015</time></p>
                            </div>
                        </div>
                    </div>
                    <p>This is an example of a news article card. Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
                </div>
            </div>
            <div class="sidebar">
                <a href="path/to/post" class="l-frame" aria-hidden="true" tabindex="-1">
                    <img src="/dist/assets/images/temp-developers-360.jpg"
                         srcset="/dist/assets/images/temp-developers-580.jpg 2x"
                         loading="lazy"
                         alt="A Macbook screen with code, as seen from over the developer's shoulder" />
                </a>
            </div>
        </div>
    </div>
    
    <div class="l-sidebar">
        <div>
            <div class="not-sidebar">
                <div>
                    <h2 class="txt-mars"><a href="path/to/post">Press release card example</a></h2>
                    <div class="l-cluster">
                        <div>
                            <div>
                                <p>Press release</p>
                            </div>
                            <div>
                                <p><span class="visuallyhidden">Published:</span> <time datetime="2015-09-24">24 September 2015</time></p>
                            </div>
                        </div>
                    </div>
                    <p>This is an example of a press release card. Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
                </div>
            </div>
            <div class="sidebar">
                <a href="path/to/post" class="l-frame" aria-hidden="true" tabindex="-1">
                    <img src="/dist/assets/images/temp-developers-360.jpg"
                         srcset="/dist/assets/images/temp-developers-580.jpg 2x"
                         loading="lazy"
                         alt="A Macbook screen with code, as seen from over the developer's shoulder" />
                </a>
            </div>
        </div>
    </div>
    
    <div class="l-sidebar">
        <div>
            <div class="not-sidebar">
                <div>
                    <h2 class="txt-mars"><a class="with-icon--after" href="path/to/post">In the Media card example <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" focusable="false" aria-hidden="true"><defs/><path d="M432 320h-32a16 16 0 00-16 16v112H64V128h144a16 16 0 0016-16V80a16 16 0 00-16-16H48a48 48 0 00-48 48v352a48 48 0 0048 48h352a48 48 0 0048-48V336a16 16 0 00-16-16zM488 0H360c-21.37 0-32.05 25.91-17 41l35.73 35.73L135 320.37a24 24 0 000 34L157.67 377a24 24 0 0034 0l243.61-243.68L471 169c15 15 41 4.5 41-17V24a24 24 0 00-24-24z"/></svg></a></h2>
                    <div class="l-cluster">
                        <div>
                            <div>
                                <p><span class="visuallyhidden">Published:</span> <time datetime="2015-09-24">24 September 2015</time></p>
                            </div>
                            <div>
                                <p>By: Anne Author</p>
                            </div>
                            <div>
                                <p>In: Publication Name</p>
                            </div>
                        </div>
                    </div>
                    <div class="l-cluster">
                        <ul class="clean-list">
                            <li>
                                <span class="tag">Accessibility</span>
                            </li>
                            <li>
                                <span class="tag">Privacy</span>
                            </li>
                            <li>
                                <span class="tag">Security</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</div>
```

Note the `.post-list` class applied to the listings container.

Note that the individual listings are not given the `.card` class. This is a deliberate omission, as the `.card` class includes various styles that are not needed for post listings and so would need to be overridden.

Where there are two links to the same post destination, one in the heading and one wrapped around an image, note how image link is given `tabindex="-1"` and `aria-hidden="true"`. This is to [optimise keyboard navigation](https://www.sarasoueidan.com/blog/keyboard-friendlier-article-listings/).

### Events

#### Search and filtering options for the hero

```
<form class="l-switcher filters" novalidate>
    <div>
        <div>
            <div class="field">
                <label for="filter-event-type">
                    <span class="faux-label">Event type</span>
                </label>
                <select id="filter-event-type" name="filter-event-type">
                    <option value="">All</option>
                    <option value="conference">Conference</option>
                    <option value="meeting">Meeting</option>
                    <option value="AC meeting">-- AC Meeting</option>
                    <option value="TPAC meeting">-- TPAC Meeting</option>
                    <option value="talk">Talk</option>
                    <option value="workshop">Workshop</option>
                </select>
            </div>
        </div>
        <div>
            <div class="field">
                <label for="filter-event-cat">
                    <span class="faux-label">Category</span>
                </label>
                <select id="filter-event-cat" name="filter-event-cat">
                    <option value="">All</option>
                    <option value="cat1">Category 1</option>
                    <option value="cat2">Category 2</option>
                    <option value="cat3">Category 3</option>
                    <option value="cat4">Category 4</option>
                </select>
            </div>
        </div>
        <div>
            <div class="input-group">
                <button class="button" type="submit">Show results</button>
                <button class="button button--ghost" type="reset">Clear all</button>
            </div>
        </div>
    </div>
</form>
```

#### List of events

```
<div class="event-list">

    <div class="card card--event meeting" data-component="card">
        <div class="card__text">
            <div class="l-sidebar">
                <div>
                    <div class="not-sidebar">
                        <h2 class="card__heading"><a class="card__link" href="path/to/event">Advisory Committee Meeting</a></h2>
                        <p>This is an example of a meeting type event card. This is the excerpt text.</p>
                    </div>
                    <div class="sidebar">
                        <div class="date-location">
                            <div>
                                <img src="/dist/assets/svg/calendar.svg" width="18" height="20" alt aria-hidden="true" />
                            </div>
                            <div>
                                <p><time datetime="2021-01-28T18:00Z">28 January 2021, 18:00 - 19:30 UTC</time></p>
                                <p>Online</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p class="txt-pluto"><a href="path/to/category-page">Category link</a></p>
            <p class="txt-pluto">Meeting</p>
        </div>
    </div>
    
    <div class="card card--event workshop" data-component="card">
        <div class="card__text">
            <div class="l-sidebar">
                <div>
                    <div class="not-sidebar">
                        <h2 class="card__heading"><a class="card__link" href="path/to/event">W3C Workshop on Web & Machine Learning: Live Session #2</a></h2>
                        <p>This is an example of a workshop type event card. This is the excerpt text.</p>
                    </div>
                    <div class="sidebar">
                        <div class="date-location">
                            <div>
                                <img src="/dist/assets/svg/calendar.svg" width="18" height="20" alt aria-hidden="true" />
                            </div>
                            <div>
                                <p><time datetime="2021-01-28T18:00Z">28 January 2021, 18:00 - 19:30 UTC</time></p>
                                <p>Online</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="l-cluster">
                <div>
                    <a href="path/to/category-page">Category link</a>
                    <p>Host: Name of host</p>
                </div>
            </div>
            <p class="txt-pluto">Workshop</p>
        </div>
    </div>
    
    <div class="card card--event talk" data-component="card">
        <div class="card__text">
            <div class="l-sidebar">
                <div>
                    <div class="not-sidebar">
                        <h2 class="card__heading"><a class="card__link" href="path/to/event">Questions (and Answers) on Semantic Web</a></h2>
                        <p>This is an example of a talk type event card. This is the excerpt text.</p>
                    </div>
                    <div class="sidebar">
                        <div class="date-location">
                            <div>
                                <img src="/dist/assets/svg/calendar.svg" width="18" height="20" alt aria-hidden="true" />
                            </div>
                            <div>
                                <p><time datetime="2021-01-28T18:00Z">28 January 2021, 18:00 - 19:30 UTC</time></p>
                                <p>Online</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="l-cluster">
                <div>
                    <a href="path/to/category-page">Category link</a>
                    <p>Speaker: Name of speaker</p>
                </div>
            </div>
            <p class="txt-pluto">Talk</p>
        </div>
    </div>
    
    <div class="l-sidebar card card--event conference" data-component="card">
        <div>
            <div class="not-sidebar card__text">
                <div class="l-sidebar">
                    <div>
                        <div class="not-sidebar">
                            <h2 class="card__heading"><a class="card__link" href="path/to/event">Expo 2020</a></h2>
                            <p>This is an example of a conference type event card. This is the excerpt text.</p>
                        </div>
                        <div class="sidebar">
                            <div class="date-location">
                                <div>
                                    <img src="/dist/assets/svg/calendar.svg" width="18px" height="20px" alt role="img" aria-hidden="true" />
                                </div>
                                <div>
                                    <p><time datetime="2021-01-28T18:00Z">28 January 2021, 18:00 - 19:30 UTC</time></p>
                                    <p>NEC Birmingham, U.K.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <p class="txt-pluto"><a href="path/to/category-page">Category link</a></p>
                <p class="txt-pluto">W3C endorsed conference</p>
            </div>
            <div class="sidebar">
                <div class="l-frame card__image">
                    <img src="/dist/assets/images/temp-developers-360.jpg"
                         srcset="dist/assets/images/temp-developers-580.jpg 2x"
                         loading="lazy"
                         alt="A Macbook screen with code, as seen from over the developer's shoulder" />
                </div>
            </div>
        </div>
    </div>
    
</div>
```

Note the `.event-list` class applied to the listings container.

Note how the individual listings take the basics of the [card component](../components/cards.md), and incorporate the [sidebar layout](../layouts/sidebar.md) to adjust their appearance.

### Members

#### Search and filtering options for the hero

```
<form class="l-switcher filters" novalidate>
    <div>
        <div>
            <div class="field">
                <label for="filter-name">
                    <span class="faux-label">Name starts with</span>
                </label>
                <select id="filter-name" name="filter-name">
                    <option value="">All</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                    <option value="E">E</option>
                    <option value="F">F</option>
                    <option value="G">G</option>
                    <option value="H">H</option>
                    <option value="I">I</option>
                    <option value="J">J</option>
                    <option value="K">K</option>
                    <option value="L">L</option>
                    <option value="M">M</option>
                    <option value="N">N</option>
                    <option value="O">O</option>
                    <option value="P">P</option>
                    <option value="Q">Q</option>
                    <option value="R">R</option>
                    <option value="S">S</option>
                    <option value="T">T</option>
                    <option value="U">U</option>
                    <option value="V">V</option>
                    <option value="W">W</option>
                    <option value="X">X</option>
                    <option value="Y">Y</option>
                    <option value="Z">Z</option>
                </select>
            </div>
        </div>
        <div>
            <div class="field">
                <label for="country">
                    <span class="faux-label">Country</span>
                </label>
                <select id="country">
                    <option value="">All</option>
                    <option value="1" data-alt="AF">Afghanistan</option>
                    <option value="2" data-alt="AX Aaland Aland">Åland Islands</option>
                    <option value="3" data-alt="AL">Albania</option>
                    <option value="4" data-alt="DZ">Algeria</option>
                    <option value="5" data-alt="AS">American Samoa</option>
                    <option value="6" data-alt="AD">Andorra</option>
                    <option value="7" data-alt="AO">Angola</option>
                    <option value="8" data-alt="AI">Anguilla</option>
                    <option value="8" data-alt="AQ">Antarctica</option>
                    <option value="10" data-alt="AG">Antigua And Barbuda</option>
                    <option value="11" data-alt="AR">Argentina</option>
                    <option value="12" data-alt="AM">Armenia</option>
                    <option value="13" data-alt="AW">Aruba</option>
                    <option value="14" data-alt="AU">Australia</option>
                    <option value="15" data-alt="AT Österreich Osterreich Oesterreich ">Austria</option>
                    <option value="16" data-alt="AZ">Azerbaijan</option>
                    <option value="17" data-alt="BS">Bahamas</option>
                    <option value="18" data-alt="BH">Bahrain</option>
                    <option value="19" data-alt="BD">Bangladesh</option>
                    <option value="20" data-alt="BB">Barbados</option>
                    <option value="21" data-alt="BY">Belarus</option>
                    <option value="22" data-alt="BE België Belgie Belgien Belgique">Belgium</option>
                    <option value="23" data-alt="BZ">Belize</option>
                    <option value="24" data-alt="BJ">Benin</option>
                    <option value="25" data-alt="BM">Bermuda</option>
                    <option value="26" data-alt="BT">Bhutan</option>
                    <option value="27" data-alt="BO">Bolivia</option>
                    <option value="28" data-alt="BQ">Bonaire, Sint Eustatius and Saba</option>
                    <option value="29" data-alt="BA">Bosnia and Herzegovina</option>
                    <option value="30" data-alt="BW">Botswana</option>
                    <option value="31" data-alt="BV">Bouvet Island</option>
                    <option value="32" data-alt="BR Brasil">Brazil</option>
                    <option value="33" data-alt="IO">British Indian Ocean Territory</option>
                    <option value="34" data-alt="BN">Brunei Darussalam</option>
                    <option value="35" data-alt="BG">Bulgaria</option>
                    <option value="36" data-alt="BF">Burkina Faso</option>
                    <option value="37" data-alt="BI">Burundi</option>
                    <option value="38" data-alt="KH">Cambodia</option>
                    <option value="39" data-alt="CM">Cameroon</option>
                    <option value="40" data-alt="CA">Canada</option>
                    <option value="41" data-alt="CV">Cape Verde</option>
                    <option value="42" data-alt="KY">Cayman Islands</option>
                    <option value="43" data-alt="CF">Central African Republic</option>
                    <option value="44" data-alt="TD">Chad</option>
                    <option value="45" data-alt="CL">Chile</option>
                    <option value="46" data-alt="CN Zhongguo Zhonghua Peoples Republic">China</option>
                    <option value="47" data-alt="CX">Christmas Island</option>
                    <option value="48" data-alt="CC">Cocos (Keeling) Islands</option>
                    <option value="49" data-alt="CO">Colombia</option>
                    <option value="50" data-alt="KM">Comoros</option>
                    <option value="51" data-alt="CG">Congo</option>
                    <option value="52" data-alt="CD">Congo, the Democratic Republic of the</option>
                    <option value="53" data-alt="CK">Cook Islands</option>
                    <option value="54" data-alt="CR">Costa Rica</option>
                    <option value="55" data-alt="CI Cote dIvoire">Côte d'Ivoire</option>
                    <option value="x1Croatia" data-alt="HR Hrvatska">Croatia</option>
                    <option value="x1Cuba" data-alt="CU">Cuba</option>
                    <option value="x1Curaçao" data-alt="CW Curacao">Curaçao</option>
                    <option value="x1Cyprus" data-alt="CY">Cyprus</option>
                    <option value="x1Czech Republic" data-alt="CZ Česká Ceska">Czech Republic</option>
                    <option value="x1Denmark" data-alt="DK Danmark">Denmark</option>
                    <option value="x1Djibouti" data-alt="DJ">Djibouti</option>
                    <option value="x1Dominica" data-alt="DM">Dominica</option>
                    <option value="x1Dominican Republic" data-alt="DO">Dominican Republic</option>
                    <option value="x1Ecuador" data-alt="EC">Ecuador</option>
                    <option value="x1Egypt" data-alt="EG">Egypt</option>
                    <option value="x1El Salvador" data-alt="SV">El Salvador</option>
                    <option value="x1Equatorial Guinea" data-alt="GQ">Equatorial Guinea</option>
                    <option value="x1Eritrea" data-alt="ER">Eritrea</option>
                    <option value="x1Estonia" data-alt="EE Eesti">Estonia</option>
                    <option value="x1Ethiopia" data-alt="ET">Ethiopia</option>
                    <option value="x1Falkland Islands (Malvinas)" data-alt="FK">Falkland Islands (Malvinas)</option>
                    <option value="x1Faroe Islands" data-alt="FO Føroyar Færøerne">Faroe Islands</option>
                    <option value="x1Fiji" data-alt="FJ">Fiji</option>
                    <option value="x1Finland" data-alt="FI Suomi">Finland</option>
                    <option value="x1France" data-alt="FR République française">France</option>
                    <option value="x1French Guiana" data-alt="GF">French Guiana</option>
                    <option value="x1French Polynesia" data-alt="PF">French Polynesia</option>
                    <option value="x1French Southern Territories" data-alt="TF">French Southern Territories</option>
                    <option value="x1Gabon" data-alt="GA">Gabon</option>
                    <option value="x1Gambia" data-alt="GM">Gambia</option>
                    <option value="x1Georgia" data-alt="GE">Georgia</option>
                    <option value="x1Germany" data-alt="DE Bundesrepublik Deutschland">Germany</option>
                    <option value="x1Ghana" data-alt="GH">Ghana</option>
                    <option value="x1Gibraltar" data-alt="GI">Gibraltar</option>
                    <option value="x1Greece" data-alt="GR">Greece</option>
                    <option value="x1Greenland" data-alt="GL grønland">Greenland</option>
                    <option value="x1Grenada" data-alt="GD">Grenada</option>
                    <option value="x1Guadeloupe" data-alt="GP">Guadeloupe</option>
                    <option value="x1Guam" data-alt="GU">Guam</option>
                    <option value="x1Guatemala" data-alt="GT">Guatemala</option>
                    <option value="x1Guernsey" data-alt="GG">Guernsey</option>
                    <option value="x1Guinea" data-alt="GN">Guinea</option>
                    <option value="x1Guinea-Bissau" data-alt="GW">Guinea-Bissau</option>
                    <option value="x1Guyana" data-alt="GY">Guyana</option>
                    <option value="x1Haiti" data-alt="HT">Haiti</option>
                    <option value="x1Heard Island and McDonald Islands" data-alt="HM">Heard Island and McDonald Islands</option>
                    <option value="x1Holy See (Vatican City State)" data-alt="VA">Holy See (Vatican City State)</option>
                    <option value="x1Honduras" data-alt="HN">Honduras</option>
                    <option value="x1Hong Kong" data-alt="HK">Hong Kong</option>
                    <option value="x1Hungary" data-alt="HU">Hungary</option>
                    <option value="x1Iceland" data-alt="IS Island">Iceland</option>
                    <option value="x1India" data-alt="IN">India</option>
                    <option value="x1Indonesia" data-alt="ID">Indonesia</option>
                    <option value="x1Iran, Islamic Republic of" data-alt="IR">Iran, Islamic Republic of</option>
                    <option value="x1Iraq" data-alt="IQ">Iraq</option>
                    <option value="x1Ireland" data-alt="IE Éire">Ireland</option>
                    <option value="x1Isle of Man" data-alt="IM">Isle of Man</option>
                    <option value="x1Israel" data-alt="IL">Israel</option>
                    <option value="x1Italy" data-alt="IT Italia">Italy</option>
                    <option value="x1Jamaica" data-alt="JM">Jamaica</option>
                    <option value="x1Japan" data-alt="JP Nippon Nihon">Japan</option>
                    <option value="x1Jersey" data-alt="JE">Jersey</option>
                    <option value="x1Jordan" data-alt="JO">Jordan</option>
                    <option value="x1Kazakhstan" data-alt="KZ">Kazakhstan</option>
                    <option value="x1Kenya" data-alt="KE">Kenya</option>
                    <option value="x1Kiribati" data-alt="KI">Kiribati</option>
                    <option value="x1Korea, Democratic People's Republic of" data-alt="KP North Korea">Korea, Democratic People's Republic of</option>
                    <option value="x1Korea, Republic of" data-alt="KR South Korea">Korea, Republic of</option>
                    <option value="x1Kuwait" data-alt="KW">Kuwait</option>
                    <option value="x1Kyrgyzstan" data-alt="KG">Kyrgyzstan</option>
                    <option value="x1Lao People's Democratic Republic" data-alt="LA">Lao People's Democratic Republic</option>
                    <option value="x1Latvia" data-alt="LV">Latvia</option>
                    <option value="x1Lebanon" data-alt="LB">Lebanon</option>
                    <option value="x1Lesotho" data-alt="LS">Lesotho</option>
                    <option value="x1Liberia" data-alt="LR">Liberia</option>
                    <option value="x1Libyan Arab Jamahiriya" data-alt="LY">Libyan Arab Jamahiriya</option>
                    <option value="x1Liechtenstein" data-alt="LI">Liechtenstein</option>
                    <option value="x1Lithuania" data-alt="LT">Lithuania</option>
                    <option value="x1Luxembourg" data-alt="LU">Luxembourg</option>
                    <option value="x1Macao" data-alt="MO">Macao</option>
                    <option value="x1Madagascar" data-alt="MG">Madagascar</option>
                    <option value="x1Malawi" data-alt="MW">Malawi</option>
                    <option value="x1Malaysia" data-alt="MY">Malaysia</option>
                    <option value="x1Maldives" data-alt="MV">Maldives</option>
                    <option value="x1Mali" data-alt="ML">Mali</option>
                    <option value="x1Malta" data-alt="MT">Malta</option>
                    <option value="x1Marshall Islands" data-alt="MH">Marshall Islands</option>
                    <option value="x1Martinique" data-alt="MQ">Martinique</option>
                    <option value="x1Mauritania" data-alt="MR">Mauritania</option>
                    <option value="x1Mauritius" data-alt="MU">Mauritius</option>
                    <option value="x1Mayotte" data-alt="YT">Mayotte</option>
                    <option value="x1Mexico" data-alt="MX Mexicanos">Mexico</option>
                    <option value="x1Micronesia, Federated States of" data-alt="FM">Micronesia, Federated States of</option>
                    <option value="x1Moldova, Republic of" data-alt="MD">Moldova, Republic of</option>
                    <option value="x1Monaco" data-alt="MC">Monaco</option>
                    <option value="x1Mongolia" data-alt="MN">Mongolia</option>
                    <option value="x1Montenegro" data-alt="ME">Montenegro</option>
                    <option value="x1Montserrat" data-alt="MS">Montserrat</option>
                    <option value="x1Morocco" data-alt="MA">Morocco</option>
                    <option value="x1Mozambique" data-alt="MZ">Mozambique</option>
                    <option value="x1Myanmar" data-alt="MM">Myanmar</option>
                    <option value="x1Namibia" data-alt="NA">Namibia</option>
                    <option value="x1Nauru" data-alt="NR">Nauru</option>
                    <option value="x1Nepal" data-alt="NP">Nepal</option>
                    <option value="x1Netherlands" data-alt="NL Holland Nederland">Netherlands</option>
                    <option value="x1New Caledonia" data-alt="NC">New Caledonia</option>
                    <option value="x1New Zealand" data-alt="NZ">New Zealand</option>
                    <option value="x1Nicaragua" data-alt="NI">Nicaragua</option>
                    <option value="x1Niger" data-alt="NE">Niger</option>
                    <option value="x1Nigeria" data-alt="NG">Nigeria</option>
                    <option value="x1Niue" data-alt="NU">Niue</option>
                    <option value="x1Norfolk Island" data-alt="NF">Norfolk Island</option>
                    <option value="x1North Macedonia" data-alt="MK">North Macedonia</option>
                    <option value="x1Northern Mariana Islands" data-alt="MP">Northern Mariana Islands</option>
                    <option value="x1Norway" data-alt="NO Norge Noreg">Norway</option>
                    <option value="x1Oman" data-alt="OM">Oman</option>
                    <option value="x1Pakistan" data-alt="PK">Pakistan</option>
                    <option value="x1Palau" data-alt="PW">Palau</option>
                    <option value="x1Palestinian Territory, Occupied" data-alt="PS">Palestinian Territory, Occupied</option>
                    <option value="x1Panama" data-alt="PA">Panama</option>
                    <option value="x1Papua New Guinea" data-alt="PG">Papua New Guinea</option>
                    <option value="x1Paraguay" data-alt="PY">Paraguay</option>
                    <option value="x1Peru" data-alt="PE">Peru</option>
                    <option value="x1Philippines" data-alt="PH">Philippines</option>
                    <option value="x1Pitcairn" data-alt="PN">Pitcairn</option>
                    <option value="x1Poland" data-alt="PL">Poland</option>
                    <option value="x1Portugal" data-alt="PT">Portugal</option>
                    <option value="x1Puerto Rico" data-alt="PR">Puerto Rico</option>
                    <option value="x1Qatar" data-alt="QA">Qatar</option>
                    <option value="x1Réunion" data-alt="RE Reunion">Réunion</option>
                    <option value="x1Romania" data-alt="RO">Romania</option>
                    <option value="x1Russian Federation" data-alt="RU Russia Rossiya">Russian Federation</option>
                    <option value="x1Rwanda" data-alt="RW">Rwanda</option>
                    <option value="x1Saint Barthélemy" data-alt="BL">Saint Barthélemy</option>
                    <option value="x1Saint Helena" data-alt="SH">Saint Helena</option>
                    <option value="x1Saint Kitts and Nevis" data-alt="KN">Saint Kitts and Nevis</option>
                    <option value="x1Saint Lucia" data-alt="LC">Saint Lucia</option>
                    <option value="x1Saint Martin (French Part)" data-alt="MF">Saint Martin (French Part)</option>
                    <option value="x1Saint Pierre and Miquelon" data-alt="PM">Saint Pierre and Miquelon</option>
                    <option value="x1Saint Vincent and the Grenadines" data-alt="VC">Saint Vincent and the Grenadines</option>
                    <option value="x1Samoa" data-alt="WS">Samoa</option>
                    <option value="x1San Marino" data-alt="SM">San Marino</option>
                    <option value="x1Sao Tome and Principe" data-alt="ST">Sao Tome and Principe</option>
                    <option value="x1Saudi Arabia" data-alt="SA">Saudi Arabia</option>
                    <option value="x1Senegal" data-alt="SN">Senegal</option>
                    <option value="x1Serbia" data-alt="RS">Serbia</option>
                    <option value="x1Seychelles" data-alt="SC">Seychelles</option>
                    <option value="x1Sierra Leone" data-alt="SL">Sierra Leone</option>
                    <option value="x1Singapore" data-alt="SG">Singapore</option>
                    <option value="x1Sint Maarten (Dutch Part)" data-alt="SX">Sint Maarten (Dutch Part)</option>
                    <option value="x1Slovakia" data-alt="SK">Slovakia</option>
                    <option value="x1Slovenia" data-alt="SI">Slovenia</option>
                    <option value="x1Solomon Islands" data-alt="SB">Solomon Islands</option>
                    <option value="x1Somalia" data-alt="SO">Somalia</option>
                    <option value="x1South Africa" data-alt="ZA">South Africa</option>
                    <option value="x1South Georgia and the South Sandwich Islands" data-alt="GS">South Georgia and the South Sandwich Islands</option>
                    <option value="x1South Sudan" data-alt="SS">South Sudan</option>
                    <option value="x1Spain" data-alt="ES España">Spain</option>
                    <option value="x1Sri Lanka" data-alt="LK">Sri Lanka</option>
                    <option value="x1Sudan" data-alt="SD">Sudan</option>
                    <option value="x1Suriname" data-alt="SR">Suriname</option>
                    <option value="x1Svalbard and Jan Mayen" data-alt="SJ">Svalbard and Jan Mayen</option>
                    <option value="x1Swaziland" data-alt="SZ">Swaziland</option>
                    <option value="x1Sweden" data-alt="SE Sverige">Sweden</option>
                    <option value="x1Switzerland" data-alt="CH Swiss Confederation Schweiz Suisse Svizzera Svizra">Switzerland</option>
                    <option value="x1Syrian Arab Republic" data-alt="SY Syria">Syrian Arab Republic</option>
                    <option value="x1Taiwan, Province of China" data-alt="TW">Taiwan, Province of China</option>
                    <option value="x1Tajikistan" data-alt="TJ">Tajikistan</option>
                    <option value="x1Tanzania, United Republic of" data-alt="TZ">Tanzania, United Republic of</option>
                    <option value="x1Thailand" data-alt="TH">Thailand</option>
                    <option value="x1Timor-Leste" data-alt="TL">Timor-Leste</option>
                    <option value="x1Togo" data-alt="TG">Togo</option>
                    <option value="x1Tokelau" data-alt="TK">Tokelau</option>
                    <option value="x1Tonga" data-alt="TO">Tonga</option>
                    <option value="x1Trinidad and Tobago" data-alt="TT">Trinidad and Tobago</option>
                    <option value="x1Tunisia" data-alt="TN">Tunisia</option>
                    <option value="x1Turkey" data-alt="TR Türkiye Turkiye">Turkey</option>
                    <option value="x1Turkmenistan" data-alt="TM">Turkmenistan</option>
                    <option value="x1Turks and Caicos Islands" data-alt="TC">Turks and Caicos Islands</option>
                    <option value="x1Tuvalu" data-alt="TV">Tuvalu</option>
                    <option value="x1Uganda" data-alt="UG">Uganda</option>
                    <option value="x1Ukraine" data-alt="UA Ukrayina">Ukraine</option>
                    <option value="x1United Arab Emirates" data-alt="AE UAE Emirates">United Arab Emirates</option>
                    <option value="x1United Kingdom" data-alt="GB Great Britain England UK Wales Scotland Northern Ireland">United Kingdom</option>
                    <option value="x1United States" data-alt="US USA United States of America">United States</option>
                    <option value="x1United States Minor Outlying Islands" data-alt="UM">United States Minor Outlying Islands</option>
                    <option value="x1Uruguay" data-alt="UY">Uruguay</option>
                    <option value="x1Uzbekistan" data-alt="UZ">Uzbekistan</option>
                    <option value="x1Vanuatu" data-alt="VU">Vanuatu</option>
                    <option value="x1Venezuela" data-alt="VE">Venezuela</option>
                    <option value="x1Vietnam" data-alt="VN">Vietnam</option>
                    <option value="x1Virgin Islands, British" data-alt="VG">Virgin Islands, British</option>
                    <option value="x1Virgin Islands, U.S." data-alt="VI">Virgin Islands, U.S.</option>
                    <option value="x1Wallis and Futuna" data-alt="WF">Wallis and Futuna</option>
                    <option value="x1Western Sahara" data-alt="EH">Western Sahara</option>
                    <option value="x1Yemen" data-alt="YE">Yemen</option>
                    <option value="x1Zambia" data-alt="ZM">Zambia</option>
                    <option value="x1Zimbabwe" data-alt="ZW">Zimbabwe</option>
                </select>
            </div>
        </div>
        <div>
            <div class="field">
                <label for="filter-ecosystem">
                    <span class="faux-label">Business ecosystem</span>
                </label>
                <select id="filter-ecosystem" name="filter-ecosystem">
                    <option value="">All</option>
                    <option value="E-commerce">E-commerce</option>
                    <option value="Media and Entertainment">Media &amp; Entertainment</option>
                    <option value="Network and Communications">Network &amp; Communications</option>
                    <option value="Publishing">Publishing</option>
                    <option value="Smart Cities">Smart Cities</option>
                    <option value="Transportation">Transportation</option>
                    <option value="Web Advertising">Web Advertising</option>
                    <option value="Web of Things">Web of Things</option>
                </select>
            </div>
        </div>
        <div>
            <div class="input-group">
                <button class="button" type="submit">Show results</button>
                <button class="button button--ghost" type="reset">Clear all</button>
            </div>
        </div>
    </div>
</form>
```

The `<select>` has been given an `id` so that it can be enhanced into an auto-complete via JavaScript. The following script must be added before the closing body tag `</body>`:

```
<script>
	if (document.documentElement.classList.contains('js')) {

		let jsAutocompleteCountry = document.createElement('script');
		jsAutocompleteCountry.src = '/dist/assets/js/country-autocomplete.js';
		document.querySelector('body').appendChild(jsAutocompleteCountry);

	}
</script>
```

#### List of members

```
<div class="member-list">

    <div class="l-sidebar card card--member" data-component="card">
        <div>
            <div class="not-sidebar card__text">
                <h2 class="card__heading"><a class="card__link" href="path/to/page">Adobe</a></h2>
                <p>Adobe revolutionizes how the world engages with ideas and information - anytime, anywhere and through any medium. As a leading provider of best-in-class Web technologies, Adobe actively supports the development of W3C standards promoting global interoperability.</p>
            </div>
            <div class="sidebar">
                <div class="logo--member">
                    <img src="/dist/assets/images/adobe-transparent.png" alt="Adobe" loading="lazy" />
                </div>
            </div>
        </div>
    </div>
    
    <div class="l-sidebar card card--member" data-component="card">
        <div>
            <div class="not-sidebar card__text">
                <h2 class="card__heading"><a class="card__link" href="path/to/page">Amazon</a></h2>
                <p>Amazon.com, Inc. is an American multinational technology company based in Seattle, Washington, which focuses on e-commerce, cloud computing, digital streaming, and artificial intelligence.</p>
            </div>
            <div class="sidebar">
                <div class="logo--member">
                    <img src="/dist/assets/images/amazon.png" alt="Amazon" loading="lazy" />
                </div>
            </div>
        </div>
    </div>
    
    <div class="l-sidebar card card--member" data-component="card">
        <div>
            <div class="not-sidebar card__text">
                <h2 class="card__heading"><a class="card__link" href="path/to/page">Apple</a></h2>
                <p>Apple Inc. is an American multinational technology company headquartered in Cupertino, California, that designs, develops, and sells consumer electronics, computer software, and online services.</p>
            </div>
            <div class="sidebar">
                <div class="logo--member">
                    <img src="/dist/assets/images/apple.png" alt="Apple" loading="lazy" />
                </div>
            </div>
        </div>
    </div>
    
    <div class="l-sidebar card card--member" data-component="card">
        <div>
            <div class="not-sidebar card__text">
                <h2 class="card__heading"><a class="card__link" href="path/to/page">Google</a></h2>
                <p>Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, a search engine, cloud computing, software, and hardware.</p>
            </div>
            <div class="sidebar">
                <div class="logo--member">
                    <img src="/dist/assets/images/google.png" alt="Google" loading="lazy" />
                </div>
            </div>
        </div>
    </div>
    
</div>
```

Note the `.member-list` class applied to the listings container.

Note how the individual listings take the basics of the [card component](../components/cards.md), and incorporate the [sidebar layout](../layouts/sidebar.md) to adjust their appearance.

### Groups

The Groups listing template does not have any search or filter options. The markup for the listings is as follows:

```
<div class="u-full-width component component--group-list">
    <div class="l-center">
        <div class="group-list">
        
            <div class="card card--group" data-component="card">
                <div class="card__text">
                    <h2 class="card__heading"><a class="card__link" href="path/to/page">Accessibility Education and Outreach Working Group (EOWG)</a></h2>
                    <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
                    <dl class="txt-pluto">
                        <dt class="visuallyhidden">Business ecosystem</dt>
                        <dd>Name of business ecosystem</dd>
                    </dl>
                    <div class="l-cluster">
                        <ul class="clean-list">
                            <li>
                                <span class="tag">Accessibility</span>
                            </li>
                            <li>
                                <span class="tag">Privacy</span>
                            </li>
                            <li>
                                <span class="tag">Security</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div class="card card--group" data-component="card">
                <div class="card__text">
                    <h2 class="card__heading"><a class="card__link" href="path/to/page">Accessibility Guidelines Working Group</a></h2>
                    <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
                    <dl class="txt-pluto">
                        <dt class="visuallyhidden">Business ecosystem</dt>
                        <dd>Name of business ecosystem</dd>
                    </dl>
                    <div class="l-cluster">
                        <ul class="clean-list">
                            <li>
                                <span class="tag">Accessibility</span>
                            </li>
                            <li>
                                <span class="tag">Privacy</span>
                            </li>
                            <li>
                                <span class="tag">Security</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</div>         
```

Note the `.group-list` class applied to the listings container.

### People

#### Search and filtering options for the hero

```
<form class="l-switcher filters" novalidate>
    <div>
        <div>
            <div class="field">
                <label for="filter-wg">
                    <span class="faux-label">Working Group</span>
                </label>
                <select id="filter-wg" name="filter-wg">
                    <option value="">All Working Groups</option>
                    <option value="CWIG">Chinese Web Interest Group</option>
                    <option value="IIG">Internationalization Interest Group</option>
                    <option value="MEIG">Media and Entertainment Interest Group</option>
                    <option value="PASIG">Patents and Standards Interest Group</option>
                    <option value="PIG">Privacy Interest Group</option>
                    <option value="SDOTWIG">Spatial Data on the Web Interest Group</option>
                    <option value="WAIIG">WAI Interest Group</option>
                    <option value="WANIG">Web and Networks Interest Group</option>
                    <option value="WOTIG">Web of Things Interest Group</option>
                    <option value="WPSIG">Web Payment Security Interest Group</option>
                    <option value="EOWG">Accessibility Education and Outreach Working Group (EOWG)</option>
                    <option value="AGWG">Accessibility Guidelines Working Group</option>
                    <option value="APAWG">Accessible Platform Architectures Working Group</option>
                    <option value="ARIAWG">Accessible Rich Internet Applications Working Group</option>
                    <option value="AudioWG">Audio Working Group</option>
                    <option value="AudiobooksWG">Audiobooks Working Group</option>
                    <option value="AutomotiveWG">Automotive Working Group</option>
                    <option value="BTATWG">Browser Testing and Tools Working Group</option>
                    <option value="CSSWG">Cascading Style Sheets (CSS) Working Group</option>
                    <option value="DEWG">Dataset Exchange Working Group</option>
                    <option value="DIWG">Decentralized Identifier Working Group</option>
                    <option value="DASWG">Devices and Sensors Working Group</option>
                    <option value="DTWG">Distributed Tracing Working Group</option>
                    <option value="EPUB3WG">EPUB 3 Working Group</option>
                    <option value="GPUWG">GPU for the Web Working Group</option>
                    <option value="HTMLWG">HTML Working Group</option>
                    <option value="IWWG">Immersive Web Working Group</option>
                    <option value="IWG">Internationalization Working Group</option>
                    <option value="JSON-LDWG">JSON-LD Working Group</option>
                    <option value="MathWG">Math Working Group</option>
                    <option value="MediaWG">Media Working Group</option>
                    <option value="MAWG">MiniApps Working Group</option>
                    <option value="PEWG">Pointer Events Working Group</option>
                    <option value="SSWG">Second Screen Working Group</option>
                    <option value="SWWG">Service Workers Working Group</option>
                    <option value="SVGWG">SVG Working Group</option>
                    <option value="TTWG">Timed Text Working Group</option>
                    <option value="VCWG">Verifiable Credentials Working Group</option>
                    <option value="WASWG">Web Application Security Working Group</option>
                    <option value="WebAppWG">Web Applications Working Group</option>
                    <option value="WebAuthWG">Web Authentication Working Group</option>
                    <option value="WFWG">Web Fonts Working Group</option>
                    <option value="WMLWG">Web Machine Learning Working Group</option>
                    <option value="WOTWG">Web of Things Working Group</option>
                    <option value="WPWG">Web Payments Working Group</option>
                    <option value="WebPerfWG">Web Performance Working Group</option>
                    <option value="WebPlatformWG">Web Platform Working Group</option>
                    <option value="WRTCWG">Web Real-Time Communications Working Group</option>
                    <option value="WebAssemblyWG">WebAssembly Working Group</option>
                    <option value="WTWG">WebTransport Working Group</option>
                </select>
            </div>
        </div>
        <div>
            <div class="input-group">
                <button class="button" type="submit">Show results</button>
                <button class="button button--ghost" type="reset">Clear all</button>
            </div>
        </div>
    </div>
</form>
```

The `<select>` has been given an `id` so that it can be enhanced into an auto-complete via JavaScript. The following script must be added before the closing body tag `</body>`:

```
<script>
	if (document.documentElement.classList.contains('js')) {

		let jsAutocompleteWG = document.createElement('script');
		jsAutocompleteWG.src = 'dist/assets/js/working-group-autocomplete.js';
		document.querySelector('body').appendChild(jsAutocompleteWG);

	}
</script>
```

#### List of people

```
<div class="people-list">

    <div class="l-sidebar">
        <div>
            <div class="not-sidebar">
                <div>
                    <h2 class="txt-mars">Alan Bird</h2>
                    <p>Role: <strong>Staff Title</strong></p>
                    <p>This is an example of a staff card. J. Alan Bird is the Global Business Development Leader for W3C. In this role, Mr. Bird leads W3C staff efforts internationally to strengthen the W3C Membership program, identify business development strategies, and seek new revenue streams to support the organization.</p>
                    <div class="l-cluster">
                        <div>
                            <div>
                                <a href="mailto:name@w3c.org" class="with-icon--before"><img class="icon" src="dist/assets/svg/envelope.svg" width="20" height="20" alt aria-hidden="true" /> name@w3c.org</a>
                            </div>
                            <div>
                                <a href="../page.html" class="with-icon--before"><img class="icon" src="dist/assets/svg/external-link-alt.svg" width="20" height="20" alt aria-hidden="true" /> Alan's personal page</a>
                            </div>
                            <div>
                                <a href="../page.html" class="with-icon--before"><img class="icon" src="dist/assets/svg/github.svg" width="20" height="20" alt aria-hidden="true" /> Alan's GitHub repo</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sidebar">
                <div class="avatar">
                    <img alt="" src="https://www.w3.org/2006/05/u/1682ihk1hqqo-sm.jpg" loading="lazy">
                </div>
            </div>
        </div>
    </div>
    
    <div class="l-sidebar">
        <div>
            <div class="not-sidebar">
                <div>
                    <h2 class="txt-mars">Hatty Jacobs</h2>
                    <p>Role: <strong>Invited Expert</strong></p>
                    <p>This is an example of an invited expert card. The web was invented as a communications tool to allow anyone, anywhere to share information. For many years, the web was a "read-only" tool for many.</p>
                    <div class="l-sidebar groups">
                        <div>
                            <div class="sidebar">
                                <h3>Groups:</h3>
                            </div>
                            <div class="not-sidebar">
                                <div class="l-cluster">
                                    <ul class="clean-list">
                                        <li><a href="https://www.w3.org/groups/wg/ag">Accessibility Guidelines Working Group</a></li>
                                        <li><a href="https://www.w3.org/groups/wg/htmlwg">HTML Working Group</a></li>
                                        <li><a href="https://www.w3.org/groups/wg/svg">SVG Working Group</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="l-cluster">
                        <div>
                            <div>
                                <a href="../page.html" class="with-icon--before"><img class="icon" src="dist/assets/svg/github.svg" width="20" height="20" alt aria-hidden="true" /> Hatty's GitHub repo</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sidebar">
                <img src="dist/assets/svg/avatar.svg" width="100" height="100" alt aria-hidden="true"/>
            </div>
        </div>
    </div>
    
    <div class="l-sidebar">
        <div>
            <div class="not-sidebar">
                <div>
                    <h2 class="txt-mars">Jake Weary</h2>
                    <p>Evangelist for: <strong>Web payments</strong></p>
                    <p>This is an example of an evangelist card. The web was invented as a communications tool to allow anyone, anywhere to share information. For many years, the web was a "read-only" tool for many.</p>
                    <div class="l-cluster">
                        <div>
                            <div>
                                <a href="mailto:name@w3c.org" class="with-icon--before"><img class="icon" src="dist/assets/svg/envelope.svg" width="20" height="20" alt aria-hidden="true" /> name@w3c.org</a>
                            </div>
                            <div>
                                <a href="tel:+1(555)5309"  class="with-icon--before"><img class="icon" src="dist/assets/svg/phone.svg" width="20" height="20" alt aria-hidden="true" /> +1 (555) 5309</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sidebar">
                <div class="avatar">
                    <img alt="" src="https://www.w3.org/2006/05/u/1682ihk1hqqo-sm.jpg" loading="lazy">
                </div>
            </div>
        </div>
    </div>
    
    <div class="l-sidebar">
        <div class="alumni">
            <div class="not-sidebar">
                <div>
                    <h2 class="txt-mars">Joseph Lorem-Ipsum</h2>
                    <p>February 2008 to December 2014</p>
                    <p>This is an example of a staff alumni card. The web was invented as a communications tool to allow anyone, anywhere to share information. For many years, the web was a "read-only" tool for many.</p>
                </div>
            </div>
        </div>
    </div>
    
</div>
```

Note the `.people-list` class applied to the listings container.

Note that the individual listings are not given the `.card` class. This is a deliberate omission, as the `.card` class includes various styles that are not needed for people listings and so would need to be overridden.