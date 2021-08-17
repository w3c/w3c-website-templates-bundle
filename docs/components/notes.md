# Notes

Notes can be used for simple informational messages, and for success, warning and error alerts. They are an enhancement of the [default box layout](../layouts/box.md#default-box).

```
<div class="l-box note note--info" role="status">
    <h2 class="txt-mars">Informative note heading</h2>
    <p>Group calendering is currently in beta-test. We encourage everyone to use it and report feedback and issues to its <a href="#1">dedicated GitHub repository</a>.</p>
</div>

<div class="l-box note note--success" role="status">
    <h2 class="txt-mars">Success note heading</h2>
    <p>Main profile successfully updated.</p>
</div>

<div class="l-box note note--warning" role="status">
    <h2 class="txt-mars">Warning note heading</h2>
    <p>We could not detect your affiliation based on your email address. Please select your affiliation below or <a href="#2">go back to use your corporate email address.</a></p>
</div>

<div class="l-box note note--error" role="alert">
    <h2 class="txt-mars">Error note heading</h2>
    <p>There has been an error.</p>
</div>
```

## Considerations

Note the use of `role="status"` and `role="alert"`. Both create an ARIA live region.

If the content of the note is advisory information not important enough to justify an alert, use `role="status"`. When added to an element, the browser will send out an accessible status event to assistive technologies, which can then notify the user about it.

For error messages, use `role="alert"`. The alert role should read out content that has changed, or bring the user's attention to it immediately, so it should not be used for static content or used regularly. Alerts, by definition, are disruptive. Lots of alerts at once or unnecessary alerts will create a bad user experience.