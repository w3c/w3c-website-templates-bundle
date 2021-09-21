# Notes

Notes can be used for simple informational messages, and for success, warning and error alerts. They are an enhancement of the [default box layout](../layouts/box.md#default-box).

<example title="Notes" src="components/notes.html.twig" />

## Considerations

Note the use of `role="status"` and `role="alert"`. Both create an ARIA live region.

If the content of the note is advisory information not important enough to justify an alert, use `role="status"`. When added to an element, the browser will send out an accessible status event to assistive technologies, which can then notify the user about it.

For error messages, use `role="alert"`. The alert role should read out content that has changed, or bring the user's attention to it immediately, so it should not be used for static content or used regularly. Alerts, by definition, are disruptive. Lots of alerts at once or unnecessary alerts will create a bad user experience.