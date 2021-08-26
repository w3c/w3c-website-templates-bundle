# Header

The following example shows a stripped back example of the website header. It does not include the complete [navigation component](navigation.md).

The beta banner is contained within `<div class="banner">` and can be removed when no longer required.

<example title="Simple header, with optional beta banner and omitting site navigation" src="components/header.html.twig" />

## Considerations

Note the use of the [center layout](../layouts/center.md) and [cluster layout](../layouts/cluster.md).

Note the inclusion of `<span role="status" aria-live="polite"></span>`. This will hold notifications for Assistive Technology users who have logged into their account. Such messages are injected via JavaScript.