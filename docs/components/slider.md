# Content slider (carousel)

An unordered list of slides which, when enhanced with JavaScript, acts as a content slider. It is used specifically for sharing quotations from W3C members as part of the [business ecosystem](../templates/business-ecosystem.md) template.

## Markup for a single slide
<example title="A single carousel slide" src="components/content-slider-slide.html.twig" />

## Markup for the content slider

<example title="A complete carousel" src="components/content-slider.html.twig" />

## Considerations

Carousels are highly interactive components, requiring a solid, semantic HTML base, and considered use of JavaScript and ARIA to make them accessible. The patterns above were tested in 2021 by the [Digital Accessibility Centre](https://digitalaccessibilitycentre.org/)

Note the link to a specific JavaScript file for the carousel functionality in the preceding example.

In practice, add the following script before the closing body tag `</body>` for the carousel to work correctly:

```
<script>
	if (document.documentElement.classList.contains('js')) {

		let sliderScript = document.createElement('script');
		sliderScript.src = '/assets/js/slider.js';
		document.querySelector('body').appendChild(sliderScript);

	}
</script>
```