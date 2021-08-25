# Sidebar

The sidebar layout creates two content panels inside a containing element. These two panels stack vertically, until there is enough horizontal space for them to sit alongside each other. One content panel is narrower than the other, acting as a "sidebar".

The sidebar layout needs an inner flexbox container to hold the two panels. The same negative margin technique used for the [cluster layout](cluster.md) creates gutter spacing between the panels.

The point at which the panels sit side-by-side horizontally is determined by a `flex-basis` property on the narrower panel and a `min-width` on the wider panel. As there are no viewport media queries, the sidebar layout will nest nicely inside other containers.

## Default sidebar

In the default configuration there is no spacing between the content of the two panels and the panel edges.

<example title="Sidebar layout: default" src="components/sidebar-default.html.twig" />

## Using nested containers for spacing content

Nesting a [box layout](box.md) inside the panels allows us to space content away from the edges.

<example title="Sidebar layout with nested box layouts for internal spacing" src="components/sidebar-with-box.html.twig" />

## Using intrinsic content width for the sidebar

We can choose to not specify a width on the narrow "sidebar" panel (by not declaring a `flex-basis` value) and let the content of the sidebar determine how wide it is. The following example shows how to override the default styles by using an additional class and omitting the `.sidebar` class.

<example title="Sidebar layout intrinsic content width" src="components/sidebar-intrinsic.html.twig" />