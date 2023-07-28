# Disclosure button

When included on a page, provided that JavaScript is available, the element directly following the button in the DOM is hidden from users. Pressing the button then toggles the display of that element. See it in action on the [profile template](../templates/profile.md).

<example title="Disclosure button" src="components/disclosure-button.html.twig" />

## Considerations

Note the use of the inline style `display: none;` and the data attribute `data-toggle="true"` on the button. This data attribute is targeted by JavaScript for adding the hide/show functionality. In the absence of JavaScript the button remains hidden to users and the element directly following the button is expanded by default. 

When used on the [profile template](../templates/profile.md), a CSS media query hides the button when the viewport size is at least 1024px wide, and the element directly following the button (in this case navigation) is fully displayed in a sidebar.