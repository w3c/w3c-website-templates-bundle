# Event template

This example shows the minimum markup of an event template. It does not include:

- the complete [global navigation](../components/navigation.md)
- the [breadcrumbs component](../components/breadcrumbs.md)
- the optional [translations component](../components/translations.md)
- the complete list of site links for the [footer](../components/footer.md).

It does show the markup of the event meta details.

The beta banner is contained within `<div class="banner">` and can be removed when no longer required.

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

<body class="event">
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
            
            <nav id="breadcrumb" aria-label="Breadcrumb">
                <div class="l-center">
                    <div class="l-cluster">
                        <ol class="breadcrumbs clean-list" role="list">
                            <li><a href="/">Home</a></li>
                            <li><a href="/pg2">Second Page</a></li>
                            <li><a href="/pg2/this-pg" aria-current="page">This page</a></li>
                        </ol>
                    </div>
                </div>
            </nav>
            
            <main id="main">
                <div class="content">
                    <article>
                        <div class="intro meeting">
                            <h1>Web and broadcast: The birth of exciting technologies</h1>
                            <p>Online meeting</p>
                        </div>
                        <p class="lead">Short description of the event</p>
                        
                        <a href="path/to/calender-file" class="with-icon--before calendar-link txt-pluto"><svg class="icon" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true" viewBox="0 0 448 512" width="1em" height="1em"><defs/><path d="M336 292v24c0 6.6-5.4 12-12 12h-76v76c0 6.6-5.4 12-12 12h-24c-6.6 0-12-5.4-12-12v-76h-76c-6.6 0-12-5.4-12-12v-24c0-6.6 5.4-12 12-12h76v-76c0-6.6 5.4-12 12-12h24c6.6 0 12 5.4 12 12v76h76c6.6 0 12 5.4 12 12zm112-180v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"/></svg> Add to calendar</a>
                        
                        [Optional translations component goes here]
                        
                        <section class="meta">
                            <h2 class="visuallyhidden">Event details</h2>
                            <dl class="grid">
                                <dt>Date:</dt>
                                <dd><time datetime="2021-01-28T18:00Z">28 January 2021, 14:00 - 15:30 Eastern Daylight Time (18:00 - 19:30 UTC)</time></dd>
                                <dt>Location:</dt>
                                <dd>Online</dd>
                                <dt>Speakers:</dt>
                                <dd>Deidre De Veloper</dd>
                                <dt>Host:</dt>
                                <dd>Jake Weary</dd>
                                <dt class="with-link">Category:</dt>
                                <dd class="with-link">
                                    <a href="path/to/page">Category 1</a>
                                </dd>
                                <dt class="with-link">Tags:</dt>
                                <dd class="l-cluster with-link">
                                    <ul class="clean-list">
                                        <li><a href="path/to/page">Tag 1</a></li>
                                        <li><a href="path/to/page">Tag 2</a></li>
                                        <li><a href="path/to/page">Tag 3</a></li>
                                        <li><a href="path/to/page">Tag 4</a></li>
                                        <li><a href="path/to/page">Tag 5</a></li>
                                    </ul>
                                </dd>
                                <dt class="with-link">Website:</dt>
                                <dd class="with-link"><a href="path/to/site">Name of website</a></dd>
                            </dl>
                        </section>
                        
                        [Page content...]
                    </article>
                </div>
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

Note the `.event` class applied to `<body>`.