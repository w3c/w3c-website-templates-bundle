# Collapsible containers

This is a series of `div` containers, each containing a heading and some content. JavaScript enhances the markup, collapsing all containers and inserting buttons inside the headings to toggle them open/closed. The JavaScript looks for the presence of the data attribute `data-component="collapsibles"` on the outer container and `data-heading="collapsibles"` on the headings.

The collapsible containers component is used within the [group list](group-list.md) component:

<example title="Collapsible containers" src="components/collapsible-containers.html.twig" />

## Considerations

[Buttons shouldn't use the pointer cursor](https://adamsilver.io/articles/buttons-shouldnt-have-a-hand-cursor/), so ensure the buttons have sufficient affordance by other visual means, such as background colour, border and/or box-shadow styles.