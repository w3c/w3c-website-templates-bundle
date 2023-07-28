# Profile template

An example of the profile template. This example does not include:

- the complete [global navigation](../components/navigation.md)
- the complete list of site links for the [footer](../components/footer.md).

<example title="Profile template" src="example-pages/profile.html.twig" standalone />

## Considerations

Note the `.profile` class applied to `<body>`.

Note the use of the inline style `display: none;` on the button element with the data attribute `data-toggle="true"`. This data attribute is targeted by JavaScript for expanding/closing the secondary navigation on this template. In the absence of JavaScript the button remains hidden to users and the navigation is expanded by default.

A media query is used so that when the viewport size is at least 1024px wide, the button is hidden again and the navigation is fully displayed in a sidebar.