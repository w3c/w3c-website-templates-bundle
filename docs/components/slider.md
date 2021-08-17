# Content slider (carousel)

An unordered list of slides which, when enhanced with JavaScript, acts as a content slider. It is used specifically for sharing quotations from W3C members as part of the [business ecosystem](../templates/business-ecosystem.md) template.

## Markup for a single slide
```
<figure class="slide">
    <blockquote class="slide__quote">
        <p>The School of Informatics at the University of Edinburgh is a world leader in research and teaching in Computer Science, Artificial Intelligence and Cognitive Science.</p>
        <p>W3C technologies are both used and studied here, and we are proud to contribute to their development.</p>
    </blockquote>
    <figcaption class="slide__cite l-sidebar">
        <div>
            <div class="sidebar">
                <div class="slide__logo">
                    <img src="/dist/assets/images/edinburgh-uni.png" alt="The University of Edinburgh" loading="lazy" />
                </div>
            </div>
            <div class="not-sidebar">
                <p>Dierdre De Veloper</p>
                <p>Lead Dev</p>
            </div>
        </div>
    </figcaption>
</figure>
```

## Markup for the content slider
```
<div class="component component--slider u-full-width" data-component="slider">
    <div class="l-center">
        <h2 id="slider-title">What organisations think about us</h2>
        <section aria-labelledby="slider-title">
            <ul class="clean-list" role="presentation">
                <li>
                    [Slide markup...]
                </li>
                <li>
                    [Slide markup...]
                </li>
                <li>
                    [Slide markup...]
                </li>
            </ul>
        </section>
    </div>
</div>
```

## Considerations

Carousels are highly interactive components, requiring a solid, semantic HTML base, and considered use of JavaScript and ARIA to make them accessible. The patterns above were tested in 2021 by the [Digital Accessibility Centre](https://digitalaccessibilitycentre.org/)

The following script must be added before the closing body tag `</body>` for the carousel to work correctly:

```
<script>
	if (document.documentElement.classList.contains('js')) {

		let sliderScript = document.createElement('script');
		sliderScript.src = 'dist/assets/js/slider.js';
		document.querySelector('body').appendChild(sliderScript);

	}
</script>
```