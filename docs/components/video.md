# Video component

<example title="Video component" src="components/video.html.twig" />

## Considerations

Note the use of the [frame layout](../layouts/frame.md), to create the desired aspect ratio.

The `<iframe>` markup in this example is a YouTube embed code with the privacy-enhanced mode enabled. Add the `loading="lazy"` attribute to benefit from native lazy-loading.

### Transcript

All pre-recorded videos should have a transcript, for accessibility. The best way to provide transcripts is as HTML. If it needs to be something downloadable, then Rich Text Format (RTF) is the preferred choice.
