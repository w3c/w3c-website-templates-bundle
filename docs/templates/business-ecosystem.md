# Business ecosystem template

An example of the business ecosystem page template. This example does not include:

- the complete [global navigation](../components/navigation.md)
- the complete list of site links for the [footer](../components/footer.md).

<example title="Business ecosystem page" src="example-pages/business-ecosystem.html.twig" standalone />

## Considerations

Note the `.ecosystem` class applied to `<body>`. The `<h1>` on this template uses the larger `.txt-mercury` font-size.

If the carousel is being used, the following script must be added before the closing body tag `</body>`:

```
<script>
	if (document.documentElement.classList.contains('js')) {

		let sliderScript = document.createElement('script');
		sliderScript.src = 'dist/assets/js/slider.js';
		document.querySelector('body').appendChild(sliderScript);

	}
</script>
```