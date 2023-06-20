# Forms: validation

The best practice is to validate a form on submission. It is recommended to [avoid default HTML5 form validation](https://adrianroselli.com/2019/02/avoid-default-field-validation.html). To turn this off, add the `novalidate` attribute to the `<form>` element.

Visit the GOV.UK Design system for [more advice about form validation](https://design-system.service.gov.uk/patterns/validation/#client-side-and-server-side-validation).

## Client side validation

If client side validation is required, here are some suggested JavaScript libraries:

- [Parsley](https://parsleyjs.org/)
- [PristineJS](https://pristine.js.org/)

Alternatively, you could roll your own thanks to [Chris Ferdinandi's series on form validation](https://css-tricks.com/form-validation-part-1-constraint-validation-html/).