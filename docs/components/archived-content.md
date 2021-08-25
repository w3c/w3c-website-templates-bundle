# Archived content

## Archive banner

Use the archive banner component to clearly indicate to users that a page they are visiting is an archive version and no longer updated. Place it directly after `<span role="status" aria-live="polite"></span>`.

<example title="Archive banner" src="components/archive-banner.html.twig" />

### Considerations

The styles for the archive banner sit within the Sass partial file at `50-core-components/_archive-banner.scss` but they are written as vanilla CSS and not Sass. This means that these styles can be copied and pasted directly from the Sass partial into other projects that may not be using the complete design system. In such circumstances, place the archive banner markup as the first item inside of `<header>`.

## Indicating links to archived content

<example title="Archive banner" src="components/archive-link.html.twig" />