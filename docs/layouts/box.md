# Box

The box layout is a simple container for grouping content within a defined region. It uses the class `.l-box`.

The box layout deliberately treats padding and borders equally on all sides. If your container needs asymmetrical styling, then it's a container with a more specific purpose and not a box.

## Default box

<example title="Box layout: default" src="components/box-default.html.twig" />

## Box without padding

Add the modifier class `.l-box--no-padding`.

<example title="Box layout with no padding" src="components/box-no-padding.html.twig" />

## Box without border

Add the modifier class `.l-box--no-border`.

<example title="Box layout with no border" src="components/box-no-border.html.twig" />

### Considerations

Because high contrast themes can eliminate `background-color`, this class adds a transparent outline so that the shape of the box remains distinguished. Negative `outline-offset` moves the outline inside the box perimeter so that it doesn't impact its overall size.

## Box without padding or border

<example title="Box layout with no padding and no border" src="components/box-none.html.twig" />