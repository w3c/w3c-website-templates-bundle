# Links

Links are blue and underlined by default. If your link is at the very end of a sentence, make sure that the full stop is not part of the linked text.

```
<a href="#1">Text link</a>
```

Links can be made to look more like buttons by adding the classes used for styling [buttons](buttons.md):

```
<a href="#1" class="button">Text link with button styling</a>

<a href="#1" class="button button--alt">Text link with alternate button style</a>
```

## Grouping links

Links can be arranged in groups using the [cluster layout](../layouts/cluster.md). The following example is from the [business ecosystem](../templates/business-ecosystem.md) template.

```
<div class="l-cluster component--members__cta">
    <div>
        <p>Ways to get involved:</p>
        <a class="button button--alt" href="#1">Join</a>
        <a class="button button--alt" href="#2">Donate</a>
    </div>
</div>
```

## Opening links in a new tab

Avoid opening links in a new tab or window. It can be disorienting for users and [can cause accessibility problems for people unable to visually perceive that the new tab has opened](https://www.w3.org/TR/WCAG20-TECHS/G200.html).

If there is a definite need for a link to open in a new tab, include the words 'opens in new tab' within the link text. Include `rel="noreferrer noopener"` along with `target="_blank"` to reduce the risk of [reverse tabnapping](https://owasp.org/www-community/attacks/Reverse_Tabnabbing).

```
<a href="#1" rel="noreferrer noopener" target="_blank">Text link (opens in new tab)</a>
```