# Navigation with new logo v1

The following example shows how the global navigation sits within the [header component](header.md).

<example title="Header including main navigation" src="components/header-new-logo.html.twig" />

## Considerations

Note the use of the inline style `display: none;` on the button element with the data attribute `data-trigger="mobile-nav"`. This data attribute is targeted by the JavaScript for the global navigation. In the absence of JavaScript, which is required for the off-canvas mobile navigation, the button remains hidden to users.

The inline style `display: none;` is also used on instances of `.nav__submenu`. As the sub-navigation requires JavaScript for the drop-down effect, this keeps it hidden if JavaScript is not available. It also prevents the sub-menus from flashing from visible to hidden when an uncached page first loads.

If a top level navigation item will have child links, indicated by the `.has-children` class on the `<li>`, JavaScript replaces the link with a button for toggling the display of the sub-navigation.