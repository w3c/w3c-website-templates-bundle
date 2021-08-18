# Buttons

Use a button to help a user carry out an action, such as playing audio/video, toggling a dropdown, opening a modal, etc. 

If you are navigating a user to a new resource, use a [link](links.md).

## Default button style

```
<button type="button" class="button">A button</button>
```

## Alternate button style

```
<button type="button" class="button button--alt">Button with alternate styling</button>
```

## Ghost button

This style of button has no visible border or background color. Usage examples include toggling the mobile navigation, and the account menu for logged-in users.

```
<button type="button" class="button button--ghost">Button with ghost styling</button>
```

## Disabled buttons

Disabled buttons can confuse some users, so avoid them if possible. Only use disabled buttons if research shows it makes the user interface easier to understand.

```
<button type="button" class="button" disabled>This button is disabled</button>
```

## Grouping buttons

Buttons (and links styled as buttons) can be arranged in groups using the [cluster layout](../layouts/cluster.md). The following example is from the [business ecosystem](../templates/business-ecosystem.md) template.

```
<div class="l-cluster component--members__cta">
    <div>
        <p>Ways to get involved:</p>
        <a class="button button--alt" href="#1">Join</a>
        <a class="button button--alt" href="#2">Donate</a>
    </div>
</div>
```
