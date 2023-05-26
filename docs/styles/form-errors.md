# Forms: errors

To notify a user of an error with their form submission:

1. Prefix the word “Error:” to the document’s `<title>`. It’s the first thing announced by screen readers when the page loads.
2. Place an error summary at the top of the page
3. Add an error message to each problematic input

<example title="Examples of form errors" src="components/forms-errors.html.twig" />

## Error summary considerations:

The error summary should be at the top of the `<main>` element. If the page includes breadcrumbs or a back link, place it after these, but before the `<h1>`. The error summary must contain the heading ‘There is a problem’.

Keyboard focus needs to move to the error summary, hence the addition of `tabindex="-1"`. JavaScript is included to shift focus if an error summary is present.

Each item in the summary list must link to the field with the validation error. Use the same wording for the error in both the error summary and the problematic field.

## Error message considerations

In the event of a validation error, the error message should explain what went wrong and how to fix it. Keep the wording clear and concise.

To help screen reader users, the error message includes a visually hidden ‘Error:’ before the error message.