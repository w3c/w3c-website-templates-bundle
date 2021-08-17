# Post template

This example shows the minimum markup of a post template. It does not include:

- the complete [global navigation](../components/navigation.md)
- the [breadcrumbs component](../components/breadcrumbs.md)
- the optional [translations component](../components/translations.md)
- the complete list of site links for the [footer](../components/footer.md).

It does show the markup of the post meta details, the sidebar links to related content, and the comments section.

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

<body class="post">
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
                        <h1>Page title</h1>
                        <div class="sub-head">Part of <a href="path/to/page">W3C life</a></div>
                        
                        [Optional translations component goes here]
                        
                        <section class="meta">
                            <h2 class="visuallyhidden">Author(s) and publish date</h2>
                            <dl>
                                <dt>By:</dt>
                                <dd class="l-cluster">
                                    <ul class="clean-list" role="presentation">
                                        <li>
                                            <p class="with-icon--before with-icon--larger"><img class="icon" src="/dist/assets/svg/avatar.svg" width="24" height="24" alt aria-hidden="true"> Name of author</p>
                                        </li>
                                        <li>
                                            <p class="with-icon--before with-icon--larger"><img class="icon" src="/dist/assets/svg/avatar.svg" width="24" height="24" alt aria-hidden="true"> Name of author</p>
                                        </li>
                                    </ul>
                                </dd>
                                <dt>Published:</dt>
                                <dd>4 January 2021</dd>
                            </dl>
                            <a href="#comments" class="skip-to-comments txt-pluto">Skip to 6 Comments</a>
                        </section>
                        
                        [Page content...]
                    </article>
                    
                    <section class="related">
                        <div class="related__inner">
                            <h2 class="txt-jupiter">Related to this post</h2>
                            <div>
                                <h3>Tags</h3>
                                <ul class="clean-list" role="list">
                                    <li><a href="path/to/page">Tag name 1</a></li>
                                    <li><a href="path/to/page">Tag name 2</a></li>
                                    <li><a href="path/to/page">Tag name 3</a></li>
                                </ul>
                            </div>
                            <div>
							    <h3>Ecosystems</h3>
                                <ul class="clean-list" role="list">
                                    <li><a href="path/to/page">Ecosystem name A</a></li>
                                    <li><a href="path/to/page">Ecosystem name B</a></li>
                                </ul>
						    </div>
						    <div>
							    <h3>Groups</h3>
                                <ul class="clean-list" role="list">
                                    <li><a href="path/to/page">Working Group X</a></li>
                                    <li><a href="path/to/page">Working Group Y</a></li>
                                </ul>
						    </div>
						    <div>
							    <h3>Specifications</h3>
                                <ul class="clean-list" role="list">
                                    <li><a href="path/to/page">Specification 1</a></li>
                                    <li><a href="path/to/page">Specification 2</a></li>
                                </ul>
						    </div>
                        </div>
                    </section>
                </div>
                
                <section class="rss">
                    <h2 class="txt-jupiter">Related RSS feed</h2>
                    <p class="with-icon--before with-icon--larger">
                        <img class="icon icon--larger" src="/dist/assets/svg/rss.svg" width="30" height="30" alt aria-hidden="true" />
                        <a href="path/to/rss-feed">Subscribe to our Blog feed</a>
                    </p>
                </section>
                
            </main>
            
            <aside class="crosslinks">
                <div class="l-center">
                    <div class="component component--columns component--columns--images">
                        <div class="component--columns__intro">
                            <h2>Section heading for these teasers</h2>
						    <p>Highlights from across our News, Press Releases and Blog</p>
                        </div>
                        <ul class="clean-list" role="presentation">
                            <li>
                                <div class="card" data-component="card">
                                    <div class="card__text">
                                        <h3 class="card__heading"><a href="path/to/page" class="card__link">Card heading</a></h3>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                                        <p class="txt-pluto">News</p>
                                    </div>
                                    <div class="l-frame l-frame--16-9 card__image">
                                        <img src="/dist/assets/images/temp-developers-920.jpg"
                                             srcset="dist/assets/images/temp-developers-360.jpg 360w, dist/assets/images/temp-developers-580.jpg 580w, dist/assets/images/temp-developers-700.jpg 700w, dist/assets/images/temp-developers-920.jpg 920w, dist/assets/images/temp-developers-1520.jpg 1520w"
                                             sizes="(min-width: 64em) 33vw, (min-width: 48em) 50vw, 100vw"
                                             loading="lazy"
                                             alt="A Macbook screen with code, as seen from over the developer's shoulder" />
                                    </div>
                                </div>
                            </li>
                            [Additional cards...]
                        </ul>
                    </div>
                </div>
            </aside>
            
            <section class="comments">
                <div class="l-center">
                    <h2 id="comments">Comments <span>(6)</span></h2>
                    <a class="skip-to-comment-form" href="#respond">Skip to comment form</a>
                    <ol class="clean-list comment-list" role="list">
                        <li>
                            <article id="comment-106895" class="l-sidebar comment">
                                <div>
                                    <div class="not-sidebar">
                                        <div class="comment__author">Joseph Lorem-Ipsum - 6 months ago</div>
                                        <div class="comment__body">
                                            <p>The work achieved by the W3C community is really helpful for developers and users alike :)</p>
                                            <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
                                        </div>
                                        <a rel="nofollow" href="post.html?replytocom=106895#respond" data-replylink data-commentid="106895" data-postid="18930" data-belowelement="comment-106895" data-replyto="Reply to Joseph Lorem-Ipsum">Reply <span class="visuallyhidden">to Joseph Lorem-Ipsum</span></a>
                                    </div>
                                    <div class="sidebar comment__img">
                                        <div class="avatar avatar--med">
										    <img alt src="https://www.w3.org/2006/05/u/1682ihk1hqqo-sm.jpg" loading="lazy">
									    </div>
                                    </div>
                                </div>
                            </article>
                            <ul class="clean-list reply-list" role="list">
                                <li>
                                    <article id="comment-204687" class="l-sidebar comment">
                                        <div>
                                            <div class="not-sidebar">
                                                <div class="comment__author">Jake Weary - 6 months ago</div>
                                                <div class="comment__body">
                                                    <p>Hear hear!!</p>
                                                </div>
                                                <a rel="nofollow" href="post.html?replytocom=204687#respond" data-replylink data-commentid="204687" data-postid="18930" data-belowelement="comment-204687" data-replyto="Reply to Jake Weary">Reply <span class="visuallyhidden">to Jake Weary</span></a>
                                            </div>
                                            <div class="sidebar">
                                                <div class="avatar avatar--med">
                                                    <img alt src="https://www.w3.org/2006/05/u/1682ihk1hqqo-sm.jpg" loading="lazy">
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </li>
                                <li>
                                    <article id="comment-345071" class="l-sidebar comment">
                                        <div>
                                            <div class="not-sidebar">
                                                <div class="comment__author">Celeste Magritte - 5 months ago</div>
                                                <div class="comment__body">
                                                    <p>I second that!</p>
                                                    <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
                                                </div>
                                                <a rel="nofollow" href="post.html?replytocom=345071#respond" data-replylink data-commentid="345071" data-postid="18930" data-belowelement="comment-345071" data-replyto="Reply to Celeste Magritte">Reply <span class="visuallyhidden">to Celeste Magritte</span></a>
                                            </div>
                                            <div class="sidebar">
                                                <div class="avatar avatar--med">
                                                    <img alt src="https://www.w3.org/2006/05/u/1682ihk1hqqo-sm.jpg" loading="lazy">
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </li>
                            </ul>
                        </li>
                    </ol>
                        <div id="respond" class="l-box l-box--no-border l-box--no-padding" data-respondelement>
                        <div>
                            <h3 class="txt-saturn" data-title="reply">Post a new comment</h3>
                        </div>
                        <div class="l-sidebar comment-form-wrap">
                            <div>
                                <div class="not-sidebar">
                                    <form id="comment-form" name="comment-form" onsubmit="return false" novalidate>
                                        <div class="field">
                                            <label for="comment">
                                                <span class="field-label">Comment</span>
                                                <span class="field-hint">Your email address will not be published.</span>
                                            </label>
                                            <textarea id="comment" name="comment"></textarea>
                                        </div>
                                        <div class="l-switcher">
                                            <div>
                                                <div>
                                                    <div class="field">
                                                        <label for="name">
                                                            <span class="field-label">Name</span>
                                                        </label>
                                                        <input type="text" id="name" name="name" autocomplete="name">
                                                    </div>
                                                </div>
                                                <div>
                                                    <div class="field">
                                                        <label for="email">
                                                            <span class="field-label">Email address</span>
                                                        </label>
                                                        <input type="email" id="email" name="email" autocomplete="email" autocapitalize="none" autocorrect="off" spellcheck="false" inputmode="email">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="field">
                                            <button class="button" type="submit">Post comment</button>
                                        </div>
                                    </form>
                                </div>
                                <div class="sidebar">
                                    <img src="/dist/assets/svg/avatar.svg" width="50" height="50" alt aria-hidden="true" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
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

Note the `.post` class applied to `<body>`.