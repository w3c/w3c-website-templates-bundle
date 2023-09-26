# Forms

The examples on this page show how we manage forms and their fields. Recommendations are based on Adam Silver's article [Form design: from zero to hero all in one blog post](https://adamsilver.io/blog/form-design-from-zero-to-hero-all-in-one-blog-post/) and the [GOV.UK design system](https://design-system.service.gov.uk/components/).

## Top tips

- Every `<input>` needs a `<label>`. Do not wrap inputs in labels, put labels above the input.
- Do not use the `placeholder` attribute on `<input>` fields.
- Use [fixed width inputs](#fixed-width-inputs) for content that has a specific, known length. Postcode inputs should be postcode-sized, telephone number inputs should be telephone number-sized.
- Make form fields look like form fields: apply a border and make sure they are empty to begin with. A height of 44px or more makes them easy to tap on touch screen devices.
- Make sure any `<button>` looks like a button. Align them to the left edge of the last input (the right edge for right-to-left languages) where users naturally look for them. Use a verb for button text because the user is doing something, and relate it to what they are doing - avoid generic ‘Submit’ buttons.
- The `<select>` element should be a last resort as they’re really hard to use. Try radio buttons instead. If there’s a long list of options, use JavaScript to enhance the `<select>` into an [auto-complete field](#auto-complete) (not to be confused with the `autocomplete` attribute).
- If you have to use a `<select>`, don't submit a form when its value changes. Select boxes that submit the form automatically when the user selects an option cause problems for keyboard and screen reader users.

## Required fields

It is best practice to only ask questions that are strictly necessary.

In the event that a form contains both optional and required fields, to clearly identify the required fields to all users add `<span class="required">(Required)</span>` within the `<label>`.

## How to add hint text

To provide hint text advising how to complete a field, add a `<div class="field-hint">`. Check the examples that follow to see where this should be added. The pattern differs slightly for checkbox and radio inputs compared to other input types.

Each instance of `<div class="field-hint">` must have a unique ID that is used as the value of the `aria-describedby` attribute that must be added to the associated `<input>`. 

Use the pattern `id="hint-...`, replacing the `...` with your unique wording.

Provide hint text when users are more likely to make a mistake, such as when having to satisfy a complex set of password rules. Error messages should be a last resort. Keep hint text brief and to the point. Do not use long paragraphs and lists.

## Dealing with text

<example title="Form inputs for text" src="components/forms-text.html.twig" />

### How to make filling in text fields easier

Use the specific input `type` when asking for email addresses, URLs and passwords.

Adding the `autocomplete` attribute to common fields such as name, address, email etc. can help to speed up the form filling process for users. Here is a [list of valid autocomplete values](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete#Values).

Use `autocapitalize="none"`, `autocorrect="off"` and `spellcheck="false"` to stop browsers automatically changing user input on fields that expect grammatically incorrect data, such as email addresses and passwords.

## Dealing with numbers

<example title="Form inputs for numbers" src="components/forms-numbers.html.twig" />

### How to make filling in number fields easier

In many cases, it's better to use `<input type="text" pattern="[0-9]*" inputmode="numeric">` rather than `<input type="number">` when dealing with numbers. Adam Silver has written about [when to use the number input](https://adamsilver.io/articles/form-design-when-to-use-the-number-input/).

For telephone numbers, use the `type="tel"` and `inputmode="tel"` attributes on the `<input>`.

When asking for payment details, including the `autocomplete` attribute can help users complete their responses more quickly. Older browsers make use of the `name` attribute to achieve the same thing. Here is a [list of payment autofill attributes](https://www.smashingmagazine.com/2017/03/improve-billing-form-ux/).

## Dealing with dates and times

<example title="Form inputs for dates and times" src="components/forms-dates-times.html.twig" />

### How to make providing dates and times easier

For dates that the user will already know, such as birth dates, and dates that are easy to look up, use a series of simple text inputs. Note the use of `<fieldset>` and `<legend>` to group the separate text inputs together.

For other dates, due to inconsistencies with how different browsers and Assistive Technologies interpret `<input type="date">`, it is strongly recommended to use a simple text input. Provide [hint text](#how-to-add-hint-text) to let users know what format to use.

Again, due to inconsistencies with how different browsers and Assistive Technologies interpret `<input type="time">`, it is strongly recommended to use a simple text input. The preceding example includes a `<select>` to help users specify a local timezone.

## File input

<example title="File input" src="components/forms-files.html.twig" />

## Checkboxes

<example title="Checkbox inputs" src="components/forms-checkboxes.html.twig" />

### How to make checkboxes easier to use

Always position checkboxes to the left of their labels (to the right for right-to-left languages). This makes them easier to find, especially for users of screen magnifiers.

If required, hint text can be added for the entire checkbox group and/or for individual checkbox items. The preceding example shows how to do this.

## Radios

<example title="Checkbox inputs" src="components/forms-radios.html.twig" />

### How to make radios easier to use

Always position radios to the left of their labels (to the right for right-to-left languages). This makes them easier to find, especially for users of screen magnifiers.

Radio buttons cannot be unchecked once they are selected. So if the question is not mandatory, you'll need to include a ‘None’ or ‘Prefer not to say’ option.

If required, hint text can be added for the entire radio group and/or for individual radio items. The preceding example shows how to do this.

## Segmented options

The purpose is to show all available options outright, rather than hiding them behind a `<select>`. It can be used with either checkboxes, or with radio buttons as in the following example:

<example title="Segmented options" src="components/forms-options.html.twig" />

### Considerations

The basis of this pattern is the [switcher layout](../layouts/switcher.md). The default styles assume that there are three choices and are optimised for this. In the event of fewer or more choices, you can override the default `min-width` percentage by applying an additional class.

## Select

<example title="Select field" src="components/forms-select.html.twig" />

### Considerations

The `<select>` element should be a last resort as they’re really hard to use. Before using the `<select>` element, try asking users questions which will allow you to present them with fewer options. This should lessen the need for the `<select>` element, which could be replaced with e.g. radios.

## Auto-complete

The design system provides a custom script to enhance a `<select>` into and accessible auto-complete via JavaScript.

### Simple autocomplete

<example title="Simple autocomplete" src="components/simple-autocomplete.html.twig" />

### Multiple selection with autocomplete

<example title="Multiple autocomplete" src="components/multiple-autocomplete.html.twig" />

### Autocomplete options

The autocomplete script can be configured using <code>data-*</code> attributes on the <code>select</code>.

<table>
	<thead>
	<tr>
		<th scope="col">Attribute</th>
		<th scope="col">Description</th>
		<th scope="col">Default value</th>
	</tr>
	</thead>
	<tbody>
	<tr>
		<th scope="row">data-search-start</th>
		<td>By default, the script will only return options with text <em>starting</em> with the given input. To search for options that contain the input, set that attribute to <code>off</code></td>
		<td>on</td>
	</tr>
    <tr>
		<th scope="row">data-text-only</th>
		<td>By default, the script will only check the text node of each option. If you want to include the option values in the search, set that attribute to <code>off</code></td>
		<td>on</td>
	</tr>
	<tr>
		<th scope="row">data-source</th>
		<td>It is possible to specify an endpoint to retrieve the results instead. In this case, the endpoint provided must return a JSON with the following format:
<pre>
{"results":[
    {"id":1,"text":"foo"},
    {"id":2,"text":"bar"}
]}</pre></td>
		<td>-</td>
	</tr>
    <tr>
		<th scope="row">data-minInput</th>
		<td>Minimum input length to start the search from <code>data-source</code></td>
		<td>2</td>
	</tr>
	</tbody>
</table>

### Considerations

Note the link to a specific JavaScript file for the auto-complete functionality in the preceding example.

In practice, add the following script before the closing body tag </body> for the auto-complete to work correctly:

```
<script src="dist/assets/js/multiselect.js"></script>
```

## An example of a simple search form

Here is one example of how to use `<input type="search">`. It is recommended to include `role="search"` on the parent `<form>` element.

Notice the use of the [box layout](../layouts/box.md) and [sidebar layout](../layouts/sidebar.md) in this example.

<example title="Simple search form" src="components/forms-search.html.twig" />

## Grouping inputs to line up side-by-side

The class `.input-group` can be used to align form inputs horizontally with each other, by applying Flexbox behaviour. You can see an example of this in the preceding example for [dealing with times](#dealing-with-dates-and-times).

### Considerations

This class should not be used in conjunction with radios or checkboxes. The pattern has not been fully tested with these input types and may not work well on smaller viewports. Furthermore, radios and checkboxes are easier to read and quicker to scan when presented vertically.

## Fixed width inputs

There is a collection of CSS classes prefixed with `.input-width-` which, when added to an `<input>`, will reduce the maximum width of the input field to better suit the intended contents:

<example title="Examples of fixed width inputs" src="components/forms-widths.html.twig" />

## Progress indicators

While it is [recommended not to use progress indicators](https://design-system.service.gov.uk/patterns/question-pages/#using-progress-indicators) for forms, the design system does include one:

<example title="Form progress indicator" src="components/forms-progress.html.twig" />