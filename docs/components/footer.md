# Footer

```
<footer class="global-footer">
    <div class="l-center">
        <div class="global-footer__links">
            <div class="l-cluster">
                <ul class="clean-list" role="list">
                    <li><a href="/">Home</a></li>
                    <li><a href="/path/to/page">Contact</a></li>
                    <li><a href="/path/to/page">Help</a></li>
                    <li><a href="/path/to/page">Sponsor and donate</a></li>
                    <li><a href="/path/to/page">Privacy policy</a></li>
                    <li><a href="/path/to/page">Legal</a></li>
                    <li><a href="/path/to/page">System status</a></li>
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
```

## Considerations

Note the use of the [center layout](../layouts/center.md) and [cluster layout](../layouts/cluster.md).

Also note the incidence of a `<span class="visuallyhidden">` to provide accessible text labels for icon links.