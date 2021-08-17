# Forms

The examples on this page show how we manage forms and their fields. Recommendations are based on Adam Silver's article [Form design: from zero to hero all in one blog post](https://adamsilver.io/blog/form-design-from-zero-to-hero-all-in-one-blog-post/) and the [GOV.UK design system](https://design-system.service.gov.uk/components/).

## Top tips

- Every `<input>` needs a `<label>`. Put labels above the input.
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

Apollo uses the pattern `id="hint-...`. Replace the `...` with your unique wording.

Provide hint text when users are more likely to make a mistake, such as when having to satisfy a complex set of password rules. Error messages should be a last resort. Keep hint text brief and to the point. Do not use long paragraphs and lists.

## Dealing with text

```
<form novalidate>
    <div class="field">
        <label for="name">
            <span class="field-label">Name <span class="required">(Required)</span></span>
        </label>
        <div class="field-hint" id="hint-name">E.g. Robin Smith</div>
        <input type="text" id="name" name="name" autocomplete="name" aria-describedby="hint-name">
    </div
    
    <div class="field">
        <label for="email">
            <span class="field-label">Email</span>
        </label>
        <div class="field-hint" id="hint-email">E.g. robin.smith@example.co.uk</div>
        <input type="email" id="email" name="email" autocomplete="email" autocapitalize="none" autocorrect="off" spellcheck="false" inputmode="email" aria-describedby="hint-email">
    </div>
    
    <div class="field">
        <label for="website">
            <span class="field-label">Website address</span>
        </label>
        <input type="url" id="website" name="website" autocomplete="url" autocapitalize="none" autocorrect="off" spellcheck="false" inputmode="url">
    </div>
    
    <div class="field">
        <label for="password">
            <span class="field-label">Password</span>
        </label>
        <div class="field-hint" id="hint-password">Must contain 8+ characters with at least 1 number</div>
        <input type="password" id="password" name="password" autocapitalize="none" autocorrect="off" spellcheck="false" aria-describedby="hint-password">
    </div>
    
    <div class="field">
        <label for="message">
            <span class="field-label">Your message</span>
        </label>
        <textarea id="message" name="message"></textarea>
    </div>
</form>
```

### How to make filling in text fields easier

Use the specific input `type` when asking for email addresses, URLs and passwords.

Adding the `autocomplete` attribute to common fields such as name, address, email etc. can help to speed up the form filling process for users. Here is a [list of valid autocomplete values](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete#Values).

Use `autocapitalize="none"`, `autocorrect="off"` and `spellcheck="false"` to stop browsers automatically changing user input on fields that expect grammatically incorrect data, such as email addresses and passwords.

## Dealing with numbers

```
<form novalidate>
    <div class="field">
        <label for="account-number">
            <span class="field-label">Account number</span>
        </label>
        <div class="field-hint" id="hint-account-number">Must be between 6 and 8 numbers long</div>
        <input type="text" class="input-width-10" id="account-number" name="account-number" pattern="[0-9]*" maxlength="8" inputmode="numeric" aria-describedby="hint-account-number">
    </div>
    
    <div class="field">
        <label for="telephone-number">
            <span class="field-label">Phone number</span>
        </label>
        <div class="field-hint" id="hint-telephone-number">Please include your country code</div>
        <input type="tel" class="input-width-20" id="telephone-number" name="telephone-number" autocomplete="tel" inputmode="tel" aria-describedby="hint-telephone-number">
    </div>
    
    <div class="field">
        <label for="guests">
            <span class="field-label">Number of guest tickets required</span>
        </label>
        <input type="number" class="input-width-3" id="guests" name="guests" value="0" pattern="[0-9]*">
    </div>
</form>
```

### How to make filling in number fields easier

In many cases, it's better to use `<input type="text" pattern="[0-9]*>` rather than `<input type="number">` when dealing with numbers. Adam Silver has written about [when to use the number input](https://adamsilver.io/articles/form-design-when-to-use-the-number-input/).

For telephone numbers, use the specific `type="tel"` attribute on the `<input>`.

When asking for payment details, including the `autocomplete` attribute can help users complete their responses more quickly. Older browsers make use of the `name` attribute to achieve the same thing. Here is a [list of payment autofill attributes](https://www.smashingmagazine.com/2017/03/improve-billing-form-ux/).

## Dealing with dates and times

```
<form novalidate>
    <div class="field">
        <label for="arrival-date">
            <span class="field-label">Date of arrival</span>
        </label>
        <div class="field-hint" id="hint-arrival-date">For example 30/05/2021</div>
        <input type="text" class="input-width-10" id="arrival-date" name="arrival-date" aria-describedby="hint-arrival-date">
    </div>
    
    <div class="field">
        <fieldset role="group" aria-describedby="hint-date-of-birth">
            <legend>
                <span class="field-label">Date of birth (an example of a memorable date)</span>
            </legend>
            <div class="field-hint u-no-margin-top" id="hint-date-of-birth">For example 20 07 1972</div>
            <div class="memorable-date">
                <label for="bday-day" class="faux-label">Day</label>
                <input type="text" class="input-width-2" id="bday-day" name="bday-day" autocomplete="bday-day" pattern="[0-9]*" inputmode="numeric" min="0" max="31">
            </div>
            <div class="memorable-date">
                <label for="bday-month" class="faux-label">Month</label>
                <input type="text" class="input-width-2" id="bday-month" name="bday-month" autocomplete="bday-month" pattern="[0-9]*" inputmode="numeric" min="1" max="12">
            </div>
            <div class="memorable-date">
                <label for="bday-year" class="faux-label">Year</label>
                <input type="text" class="input-width-4" id="bday-year" name="bday-year" autocomplete="bday-year" pattern="[0-9]*" inputmode="numeric" min="1900" max="2050">
            </div>
        </fieldset>
    </div>
    
    <div class="field">
        <fieldset role="group" aria-describedby="hint-meeting-time">
            <legend>
                <span class="field-label">Specify a start time for your meeting</span>
            </legend>
            <div class="field-hint u-no-margin-top" id="hint-meeting-time">Use <dfn id="utc"><abbr title="Coordinated Universal Time">UTC</abbr></dfn> and your local time zone</div>
            <div class="input-group">
                <div>
                    <label for="meeting-time" class="faux-label">Start time</label>
                        <input type="text" class="input-width-5" id="meeting-time" name="meeting-time">
                </div>
                <div>
                    <label for="meeting-time" class="faux-label">Time zone</label>
                    <select id="timezone" name="timezone">
                        <option value="UTC−12:00">UTC−12:00</option>
                        <option value="UTC−11:00">UTC−11:00</option>
                        <option value="UTC−10:00">UTC−10:00</option>
                        <option value="UTC−09:30">UTC−09:30</option>
                        <option value="UTC−09:00">UTC−09:00</option>
                        <option value="UTC−08:00">UTC−08:00</option>
                        <option value="UTC−07:00">UTC−07:00</option>
                        <option value="UTC−06:00">UTC−06:00</option>
                        <option value="UTC−05:00">UTC−05:00</option>
                        <option value="UTC−04:00">UTC−04:00</option>
                        <option value="UTC−03:30">UTC−03:30</option>
                        <option value="UTC−03:00">UTC−03:00</option>
                        <option value="UTC−02:00">UTC−02:00</option>
                        <option value="UTC−01:00">UTC−01:00</option>
                        <option value="UTC±00:00" selected>UTC±00:00</option>
                        <option value="UTC+01:00">UTC+01:00</option>
                        <option value="UTC+02:00">UTC+02:00</option>
                        <option value="UTC+03:00">UTC+03:00</option>
                        <option value="UTC+03:30">UTC+03:30</option>
                        <option value="UTC+04:00">UTC+04:00</option>
                        <option value="UTC+04:30">UTC+04:30</option>
                        <option value="UTC+05:00">UTC+05:00</option>
                        <option value="UTC+05:30">UTC+05:30</option>
                        <option value="UTC+05:45">UTC+05:45</option>
                        <option value="UTC+06:00">UTC+06:00</option>
                        <option value="UTC+06:30">UTC+06:30</option>
                        <option value="UTC+07:00">UTC+07:00</option>
                        <option value="UTC+08:00">UTC+08:00</option>
                        <option value="UTC+08:45">UTC+08:45</option>
                        <option value="UTC+09:00">UTC+09:00</option>
                        <option value="UTC+09:30">UTC+09:30</option>
                        <option value="UTC+10:00">UTC+10:00</option>
                        <option value="UTC+10:30">UTC+10:30</option>
                        <option value="UTC+11:00">UTC+11:00</option>
                        <option value="UTC+12:00">UTC+12:00</option>
                        <option value="UTC+12:45">UTC+12:45</option>
                        <option value="UTC+13:00">UTC+13:00</option>
                        <option value="UTC+14:00">UTC+14:00</option>
                    </select>
                </div>
            </div>
        </fieldset>
    </div>
</form>
```

### How to make providing dates and times easier

For dates that the user will already know, such as birth dates, and dates that are easy to look up, use a series of simple text inputs. Note the use of `<fieldset>` and `<legend>` to group the separate text inputs together.

For other dates, due to inconsistencies with how different browsers and Assistive Technologies interpret `<input type="date">`, it is strongly recommended to use a simple text input. Provide [hint text](#how-to-add-hint-text) to let users know what format to use.

Again, due to inconsistencies with how different browsers and Assistive Technologies interpret `<input type="time">`, it is strongly recommended to use a simple text input. The preceding example includes a `<select>` to help users specify a local timezone.

## File input

```
<form novalidate>
    <div class="field">
        <label for="file">
            <span class="field-label">Choose a file</span>
        </label>
        <input type="file" id="file" name="file">
    </div>
</form>
```

## Checkboxes

```
<form novalidate>
    <div class="field">
        <fieldset role="group" aria-describedby="hint-things-you-like">
            <legend class="group-legend">Things you like</legend>
            <div class="field-hint" id="hint-things-you-like">Select all that apply.</div>
            <div class="checkbox-item">
                <input type="checkbox" name="chocolate" id="chocolate" appearance="base">
                <label for="chocolate">
                    <span class="faux-label">Chocolate</span>
                </label>
            </div>
							
            <div class="checkbox-item">
                <input type="checkbox" name="coffee" id="coffee" appearance="base">
                <label for="coffee">
                    <span class="faux-label">Coffee</span>
                </label>
            </div>
            
            <div class="checkbox-item">
                <input type="checkbox" name="cake" id="cake" appearance="base">
                <label for="cake">
                    <span class="faux-label">Cake</span>
                </label>
            </div>
			
            <div class="checkbox-item">
                <input type="checkbox" name="chips" id="chips" appearance="base" aria-describedby="hint-chips">
                <label for="chips">
                    <span class="faux-label">Chips</span>
                </label>
                <div class="field-hint" id="hint-chips">Fries or frites, not crisps.</div>
            </div>
		</fieldset>
	</div>
</form>
```

### How to make checkboxes easier to use

Always position checkboxes to the left of their labels (to the right for right-to-left languages). This makes them easier to find, especially for users of screen magnifiers.

If required, hint text can be added for the entire checkbox group and/or for individual checkbox items. The preceding example shows how to do this.

## Radios

```
<form novalidate>
    <div class="field">
        <fieldset role="group" aria-describedby="hint-name-change">
            <legend class="group-legend">Have you changed your name?</legend>
            <div class="field-hint" id="hint-name-change">This includes changing your family name or spelling your name differently.</div>
            <div class="radio-item">
                <input type="radio" id="name-change_yes" name="name-change" value="yes">
                <label for="name-change_yes">
                    <span class="faux-label">Yes</span>
                </label>
            </div>
            
            <div class="radio-item">
                <input type="radio" id="name-change_no" name="name-change" value="no" aria-describedby="hint-name-change">
                <label for="name-change_no">
                    <span class="faux-label">No</span>
                </label>
                <div class="field-hint" id="hint-name-change">Hint text for this radio item would go here.</div>
            </div>
        </fieldset>
	</div>
</form>
```

### How to make radios easier to use

Always position radios to the left of their labels (to the right for right-to-left languages). This makes them easier to find, especially for users of screen magnifiers.

Radio buttons cannot be unchecked once they are selected. So if the question is not mandatory, you'll need to include a ‘None’ or ‘Prefer not to say’ option.

If required, hint text can be added for the entire radio group and/or for individual radio items. The preceding example shows how to do this.

## Segmented options

The purpose is to show all available options outright, rather than hiding them behind a `<select>`. It can be used with either checkboxes, or with radio buttons as in the following example:

```
<form novalidate>
    <div class="field segmented-group-wrapper">
        <fieldset role="group" aria-describedby="hint-segmented-options">
            <legend class="group-legend">Segmented options (Radio)</legend>
            <div class="field-hint" id="hint-segmented-options">We understand that different people enjoy books in different ways, which is why we’re giving you lots of options.</div>
            <div class="l-switcher segmented-group">
                <div>
                    <div>
                        <input type="radio" class="input--radio" id="segmented-option-1" name="segmented-options">
                        <label for="segmented-option-1">
                            <span class="segmented-label">
                                <span>Budget option</span>
                                <span>Copy to explain this option in more detail.</span>
                            </span>
                        </label>
                    </div>
                    <div>
                        <input type="radio" class="input--radio" id="segmented-option-2" name="segmented-options" checked>
                        <label for="segmented-option-2">
                            <span class="segmented-label">
                                <span>Value option</span>
                                <span>Copy to explain this option in more detail.</span>
                            </span>
                        </label>
                    </div>
                    <div>
                        <input type="radio" class="input--radio" id="segmented-option-3" name="segmented-options">
                        <label for="segmented-option-3">
                            <span class="segmented-label">
                                <span>Expensive option</span>
                                <span>Copy to explain this option in more detail.</span>
                            </span>
                        </label>
                    </div>
                </div>
            </div>
        </fieldset>
    </div>
</form>
```

### Considerations

The basis of this pattern is the [switcher layout](../layouts/switcher.md). The default styles assume that there are three choices and are optimised for this. In the event of fewer or more choices, you can override the default `min-width` percentage by applying an additional class.

## Select

```
<form novalidate>
    <div class="field">
        <label for="sort">
            <span class="field-label">Sort by</span>
        </label>
        <select id="sort" name="sort">
            <option value="published">Recently published</option>
            <option value="updated" selected>Recently updated</option>
            <option value="views">Most views</option>
            <option value="comments">Most comments</option>
        </select>
    </div>
</form>
```

### Considerations

Before using the `<select>` element, try asking users questions which will allow you to present them with fewer options. This should lessen the need for the `<select>` element, which could be replaced with e.g. radios.

## Auto-complete

A `<select>` can be enhanced into an accessible auto-complete via JavaScript. Apollo uses [Accessible autocomplete](https://github.com/alphagov/accessible-autocomplete) to achieve this, and there are a number of [example customisations](https://alphagov.github.io/accessible-autocomplete/examples/) which can be followed.

Follow the default markup for a `<select>`, making sure to give it a unique ID which can be referenced in the JavaScript.

## An example of a simple search form

Here is one example of how to use `<input type="search">`. It is recommended to include `role="search"` on the parent `<form>` element.

Notice the use of the [box layout](../layouts/box.md) and [sidebar layout](../layouts/sidebar.md) in this example.

```
<div class="l-box">
    <label for="search">
        <span class="field-label">Search</span>
    </label>
    <div class="l-sidebar search">
        <form role="search" novalidate>
            <div class="not-sidebar">
                <input type="search" id="search" name="search">
            </div>
            <div class="sidebar">
                <button type="submit" class="button" name="search">Search</button>
            </div>
        </form>
    </div>
</div>
```

## Grouping inputs to line up side-by-side

Apollo includes the class `.input-group` that can be used to align form inputs horizontally with each other, by applying Flexbox behaviour. You can see an example of this in the preceding example for [dealing with times](#dealing-with-dates-and-times).

### Considerations

This class should not be used in conjunction with radios or checkboxes. The pattern has not been fully tested with these input types and may not work well on smaller viewports. Furthermore, radios and checkboxes are easier to read and quicker to scan when presented vertically.

## Fixed width inputs

Apollo includes several CSS classes which, when added to an `<input>`, will reduce the maximum width of the input field to better suit the intended contents:

```
<form novalidate>
    <div class="field">
        <label for="width-30">
            <span class="field-label">30 character width</span>
        </label>
        <input type="text" class="input-width-30" id="width-30" name="width-30">
    </div>
    <div class="field">
        <label for="width-20">
            <span class="field-label">20 character width</span>
        </label>
        <input type="text" class="input-width-20" id="width-20" name="width-20">
    </div>
    <div class="field">
        <label for="width-10">
            <span class="field-label">10 character width</span>
        </label>
        <input type="text" class="input-width-10" id="width-10" name="width-10">
    </div>
    <div class="field">
        <label for="width-5">
            <span class="field-label">5 character width</span>
        </label>
        <input type="text" class="input-width-5" id="width-5" name="width-5">
    </div>
    <div class="field">
        <label for="width-4">
            <span class="field-label">4 character width</span>
        </label>
        <input type="text" class="input-width-4" id="width-4" name="width-4">
    </div>
    <div class="field">
        <label for="width-3">
            <span class="field-label">3 character width</span>
        </label>
        <input type="text" class="input-width-3" id="width-3" name="width-3">
    </div>
    <div class="field">
        <label for="width-2">
            <span class="field-label">2 character width</span>
        </label>
        <input type="text" class="input-width-2" id="width-2" name="width-2">
    </div>
</form>
```

## Error messages

To notify a user of an error with their form submission:

1. Prefix the word “Error:” to the document’s `<title>`. It’s the first thing announced by screen readers when the page loads.
2. Place an error summary at the top of the page
3. Add an error message to each problematic input

```
<div class="l-box error-summary" role="alert" aria-labelledby="error-summary-title" tabindex="-1" data-component="error-summary">
    <h2 id="error-summary-title" class="txt-mars">There is a problem</h2>
    <ul class="clean-list" role="list">
        <li>
            <a href="#name">Enter a name</a>
        </li>
        <li>
            <a href="#message">Enter a message</a>
        </li>
        <li>
            <a href="#account-number">Enter an account number</a>
        </li>
        <li>
            <a href="#arrival-date">Enter an arrival date</a>
        </li>
        <li>
            <a href="#meeting-time">Enter a start time</a>
        </li>
        <li>
            <a href="#bday-day">Enter a date of birth</a>
        </li>
        <li>
            <a href="#file">The file must be 2MB or smaller</a>
        </li>
        <li>
            <a href="#pets_yes">Select yes if you do own pets</a>
        </li>
        <li>
            <a href="#segmented-option-1">Choose a segmented option</a>
        </li>
        <li>
            <a href="#chocolate">Choose at least one item you like</a>
        </li>
        <li>
            <a href="#day">Choose your preferred day</a>
        </li>
    </ul>
</div>

<h1>Page title</h1>
<h2>Example form showcasing error messages</h2>
<form novalidate>
    <div class="field-group">
        <h3 class="field-legend">Dealing with text</h3>
        <div class="field field--error">
            <label for="name">
                <span class="field-label">Name (Required)</span>
                <span class="field-error-msg" id="error-name"><span class="visuallyhidden">Error:</span> Enter a name</span>
            </label>
        <div class="field-hint" id="hint-name">E.g. Robin Smith</div>
        <input type="text" id="name" name="name" autocomplete="name" aria-describedby="hint-name error-name">
        </div>
        
        <div class="field field--error">
            <label for="message">
                <span class="field-label">Your message (Required)</span>
                <span class="field-error-msg" id="error-msg"><span class="visuallyhidden">Error:</span> Enter a message</span>
            </label>
            <textarea id="message" name="message" aria-describedby="error-msg"></textarea>
        </div>
    </div>

    <div class="field-group">
        <h3 class="field-legend">Dealing with numbers</h3>
        <div class="field field--error">
            <label for="account-number">
                <span class="field-label">Account number (Required)</span>
                <span class="field-error-msg" id="error-account-number"><span class="visuallyhidden">Error:</span> Enter an account number</span>
            </label>
            <div class="field-hint" id="hint-account-number">Must be between 6 and 8 numbers long</div>
            <input type="text" class="input-width-10" id="account-number" name="account-number" pattern="[0-9]*" maxlength="8" inputmode="numeric" aria-describedby="hint-account-number error-account-number">
        </div>
    </div>

    <div class="field-group">
        <h3 class="field-legend">Dealing with dates and times</h3>
        <div class="field field--error">
            <label for="arrival-date">
                <span class="field-label">Date of arrival (Required)</span>
                <span class="field-error-msg" id="error-arrival-date"><span class="visuallyhidden">Error:</span> Enter an arrival date</span>
            </label>
            <div class="field-hint" id="hint-arrival-date">For example 30/05/2021</div>
            <input type="text" class="input-width-10" id="arrival-date" name="arrival-date" aria-describedby="hint-arrival-date error-arrival-date">
        </div>
        <div class="field field--error">
            <fieldset role="group" aria-describedby="hint-date-of-birth error-date-of-birth">
                <legend>
                    <span class="field-label">Date of birth (Required) (an example of a memorable date)</span>
                    <span class="field-error-msg" id="error-date-of-birth"><span class="visuallyhidden">Error:</span> Enter a date of birth</span>
                </legend>
                <div class="field-hint u-no-margin-top" id="hint-date-of-birth">For example 20 07 1972</div>
                <div class="memorable-date">
                    <label for="bday-day" class="field-label">Day</label>
                    <input type="text" class="input-width-2" id="bday-day" name="bday-day" autocomplete="bday-day" pattern="[0-9]*" inputmode="numeric" min="0" max="31">
                </div>
                <div class="memorable-date">
                    <label for="bday-month" class="field-label">Month</label>
                    <input type="text" class="input-width-2" id="bday-month" name="bday-month" autocomplete="bday-month" pattern="[0-9]*" inputmode="numeric" min="1" max="12">
                </div>
                <div class="memorable-date">
                    <label for="bday-year" class="field-label">Year</label>
                    <input type="text" class="input-width-4" id="bday-year" name="bday-year" autocomplete="bday-year" pattern="[0-9]*" inputmode="numeric" min="1900" max="2050">
                </div>
            </fieldset>
        </div>
        
        <div class="field field--error">
            <fieldset role="group" aria-describedby="hint-meeting-time error-meeting-time">
                <legend>
                    <span class="field-label">Specify a start time for your meeting</span>
                    <span class="field-error-msg" id="error-meeting-time"><span class="visuallyhidden">Error:</span> Enter a start time</span>
                </legend>
                <div class="field-hint u-no-margin-top" id="hint-meeting-time">Use <dfn id="utc"><abbr title="Coordinated Universal Time">UTC</abbr></dfn> and your local time zone</div>
                <div class="input-group">
                    <div>
                        <label for="meeting-time" class="faux-label">Start time</label>
                        <input type="text" class="input-width-5" id="meeting-time" name="meeting-time">
                    </div>
                    <div>
                        <label for="meeting-time" class="faux-label">Time zone</label>
                        <select id="timezone" name="timezone">
                            <option value="UTC−12:00">UTC−12:00</option>
                            <option value="UTC−11:00">UTC−11:00</option>
                            <option value="UTC−10:00">UTC−10:00</option>
                            <option value="UTC−09:30">UTC−09:30</option>
                            <option value="UTC−09:00">UTC−09:00</option>
                            <option value="UTC−08:00">UTC−08:00</option>
                            <option value="UTC−07:00">UTC−07:00</option>
                            <option value="UTC−06:00">UTC−06:00</option>
                            <option value="UTC−05:00">UTC−05:00</option>
                            <option value="UTC−04:00">UTC−04:00</option>
                            <option value="UTC−03:30">UTC−03:30</option>
                            <option value="UTC−03:00">UTC−03:00</option>
                            <option value="UTC−02:00">UTC−02:00</option>
                            <option value="UTC−01:00">UTC−01:00</option>
                            <option value="UTC±00:00" selected="">UTC±00:00</option>
                            <option value="UTC+01:00">UTC+01:00</option>
                            <option value="UTC+02:00">UTC+02:00</option>
                            <option value="UTC+03:00">UTC+03:00</option>
                            <option value="UTC+03:30">UTC+03:30</option>
                            <option value="UTC+04:00">UTC+04:00</option>
                            <option value="UTC+04:30">UTC+04:30</option>
                            <option value="UTC+05:00">UTC+05:00</option>
                            <option value="UTC+05:30">UTC+05:30</option>
                            <option value="UTC+05:45">UTC+05:45</option>
                            <option value="UTC+06:00">UTC+06:00</option>
                            <option value="UTC+06:30">UTC+06:30</option>
                            <option value="UTC+07:00">UTC+07:00</option>
                            <option value="UTC+08:00">UTC+08:00</option>
                            <option value="UTC+08:45">UTC+08:45</option>
                            <option value="UTC+09:00">UTC+09:00</option>
                            <option value="UTC+09:30">UTC+09:30</option>
                            <option value="UTC+10:00">UTC+10:00</option>
                            <option value="UTC+10:30">UTC+10:30</option>
                            <option value="UTC+11:00">UTC+11:00</option>
                            <option value="UTC+12:00">UTC+12:00</option>
                            <option value="UTC+12:45">UTC+12:45</option>
                            <option value="UTC+13:00">UTC+13:00</option>
                            <option value="UTC+14:00">UTC+14:00</option>
                        </select>
                    </div>
                </div>
            </fieldset>
        </div>
    </div>
    
    <div class="field-group">
        <h3 class="field-legend">Other input types</h3>
        <div class="field field--error">
            <label for="file">
                <span class="field-label">Upload an image</span>
                <span class="field-error-msg" id="error-file"><span class="visuallyhidden">Error:</span> The file must be 2MB or smaller</span>
            </label>
            <div class="field-hint" id="hint-file">Maximum file size 2MB</div>
            <input type="file" id="file" name="file" aria-describedby="hint-file error-file">
        </div>
        
        <div class="field field--error">
            <fieldset aria-describedby="error-pets">
                <legend class="group-legend">Do you own any pets? (Required)</legend>
                <span class="field-error-msg" id="error-pets"><span class="visuallyhidden">Error:</span> Select yes if you do own pets</span>
                <div class="radio-item">
                    <input type="radio" id="pets_yes" name="pets" value="yes">
                    <label for="pets_yes">
                        <span class="field-label">Yes</span>
                    </label>
                </div>
                <div class="radio-item">
                    <input type="radio" id="pets_no" name="pets" value="no">
                    <label for="pets_no">
                        <span class="field-label">No</span>
                    </label>
                </div>
                <div class="radio-item">
                    <input type="radio" id="pets_none" name="pets" value="none">
                    <label for="pets_none">
                        <span class="field-label">Prefer not to say</span>
                    </label>
                </div>
            </fieldset>
        </div>
        
        <div class="field field--error segmented-group-wrapper">
            <fieldset role="group" aria-describedby="hint-segmented-options error-segmented-options">
                <legend class="group-legend">Segmented options (Radio)</legend>
                <span class="field-error-msg" id="error-segmented-options"><span class="visuallyhidden">Error:</span> Choose an option</span>
                <div class="field-hint" id="hint-segmented-options">We understand that different people enjoy books in different ways, which is why we’re giving you lots of options.</div>
                <div class="l-switcher segmented-group">
                    <div>
                        <div>
                            <input type="radio" class="input--radio" id="segmented-option-1" name="segmented-options">
                            <label for="segmented-option-1">
                        <span class="segmented-label">
                            <span>Budget option</span>
                            <span>Copy to explain this option in more detail.</span>
                        </span>
                            </label>
                        </div>
                        <div>
                            <input type="radio" class="input--radio" id="segmented-option-2" name="segmented-options">
                            <label for="segmented-option-2">
                        <span class="segmented-label">
                            <span>Value option</span>
                            <span>Copy to explain this option in more detail.</span>
                        </span>
                            </label>
                        </div>
                        <div>
                            <input type="radio" class="input--radio" id="segmented-option-3" name="segmented-options">
                            <label for="segmented-option-3">
                        <span class="segmented-label">
                            <span>Expensive option</span>
                            <span>Copy to explain this option in more detail.</span>
                        </span>
                            </label>
                        </div>
                    </div>
                </div>
            </fieldset>
        </div>
        
        <div class="field field--error">
            <fieldset aria-describedby="error-like">
                <legend class="group-legend">Things you like</legend>
                <span class="field-error-msg" id="error-like"><span class="visuallyhidden">Error:</span> Choose at least one item</span>
                <div class="checkbox-item">
                    <input type="checkbox" name="chocolate" id="chocolate" appearance="base">
                    <label for="chocolate">
                        <span class="field-label">Chocolate</span>
                    </label>
                </div>
                <div class="checkbox-item">
                    <input type="checkbox" name="coffee" id="coffee" appearance="base">
                    <label for="coffee">
                        <span class="field-label">Coffee</span>
                    </label>
                </div>
                <div class="checkbox-item">
                    <input type="checkbox" name="cake" id="cake" appearance="base">
                    <label for="cake">
                        <span class="field-label">Cake</span>
                    </label>
                </div>
                <div class="checkbox-item">
                    <input type="checkbox" name="chips" id="chips" appearance="base">
                    <label for="chips">
                        <span class="field-label">Chips</span>
                    </label>
                </div>
            </fieldset>
        </div>
    </div>
    
    <div class="field field--error">
        <label for="sort">
            <span class="field-label">Preferred day of appointment</span>
            <span class="field-error-msg"><span class="visuallyhidden">Error:</span> Choose your preferred day</span>
        </label>
        <select id="day" name="day">
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
            <option value="Sunday">Sunday</option>
        </select>
    </div
</form>


```

### Error summary considerations:

The error summary should be at the top of the `<main>` element. If the page includes breadcrumbs or a back link, place it after these, but before the `<h1>`. The error summary must contain the heading ‘There is a problem’.

Keyboard focus needs to move to the error summary, hence the addition of `tabindex="-1"`. JavaScript is included to shift focus if an error summary is present.

Each item in the summary list must link to the field with the validation error. Use the same wording for the error in both the error summary and the problematic field.

### Error message considerations

In the event of a validation error, the error message should explain what went wrong and how to fix it. Keep the wording clear and concise.

To help screen reader users, the error message includes a visually hidden ‘Error:’ before the error message.

## Form validation

The best practice is to validate a form on submission. It is recommended to [avoid default HTML5 form validation](https://adrianroselli.com/2019/02/avoid-default-field-validation.html). To turn this off, add the `novalidate` attribute to the `<form>` element.

Visit the GOV.UK Design system for [more advice about form validation](https://design-system.service.gov.uk/patterns/validation/#client-side-and-server-side-validation).

### Client side validation

If client side validation is required, here are some suggested JavaScript libraries:

- [Parsley](https://parsleyjs.org/)
- [PristineJS](https://pristine.js.org/)

Alternatively, you could roll your own thanks to [Chris Ferdinandi's series on form validation](https://css-tricks.com/form-validation-part-1-constraint-validation-html/).

## Progress indicators

While it is [recommended not to use progress indicators](https://design-system.service.gov.uk/patterns/question-pages/#using-progress-indicators) for forms, Apollo does cater for one:

```
<section>
    <h2 class="visuallyhidden">Form progress</h2>
    <ol class="clean-list progress-list" role="list">
        <li class="progress-step complete">
            <span class="visuallyhidden">Completed: </span>
            <a href="" class="progress-step__inner">
                <div class="progress-step__marker complete" aria-hidden="true">1</div>
                <span>Delivery address</span>
            </a>
        </li>
        <li class="progress-step" aria-current="step">
            <div class="progress-step__inner">
                <div class="progress-step__marker" aria-hidden="true">2</div>
                <span>Billing address</span>
            </div>
        </li>
        <li class="progress-step">
            <div class="progress-step__inner">
                <div class="progress-step__marker" aria-hidden="true">3</div>
                <span>Payment details</span>
            </div>
        </li>
        <li class="progress-step">
            <div class="progress-step__inner">
                <div class="progress-step__marker" aria-hidden="true">4</div>
                <span>Confirmation</span>
            </div>
        </li>
    </ol>
</section>
```