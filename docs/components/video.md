# Video component

```
<figure class="component component--video">
    <div class="l-frame l-frame--16-9">
        <iframe title="Video title" loading="lazy" width="560" height="315" src="https://www.youtube-nocookie.com/embed/sw-j75MQtQU" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <figcaption>
        <p>Note: embed code from Vimeo/YouTube does not include the <code>title</code> attribute, but this is a WCAG requirement so needs to be added manually.</p>
        <a href="/path/to/transcript.html">Video transcript</a>
    </figcaption>
</figure>
```

## Considerations

Note the use of the [frame layout](../layouts/frame.md), to create the desired aspect ratio.

The `<iframe>` markup in this example is a YouTube embed code with the privacy-enhanced mode enabled. Add the `loading="lazy"` attribute to benefit from native lazy-loading.

### Transcript

All pre-recorded videos should have a transcript, for accessibility. The best way to provide transcripts is as HTML. If it needs to be something downloadable, then Rich Text Format (RTF) is the preferred choice. An [accessible PDF](https://helpx.adobe.com/uk/acrobat/using/creating-accessible-pdfs.html) would be acceptable.