# Lists

Use lists to make blocks of text easier to read, and to break information into manageable chunks.

## Bulleted lists

```
<ul>
    <li>Level 1 list item 1</li>
    <li>Level 1 list item 2</li>
    <li>Level 1 list item 3
        <ul>
            <li>Level 2 list item 1</li>
            <li>Level 2 list item 2</li>
            <li>Level 2 list item 3</li>
        </ul>
    </li>
    <li>Level 1 list item 4</li>
    <li>Level 1 list item 5</li>
    <li>Level 1 list item 6</li>
</ul>
```

## Numbered lists

```
<ol>
    <li>Level 1 list item 1</li>
    <li>Level 1 list item 2</li>
    <li>Level 1 list item 3
        <ul>
            <li>Level 2 list item 1</li>
            <li>Level 2 list item 2</li>
            <li>Level 2 list item 3</li>
        </ul>
    </li>
    <li>Level 1 list item 4</li>
    <li>Level 1 list item 5</li>
    <li>Level 1 list item 6</li>
</ol>
```

## Clean list

Adding the `.clean-list` class to an unordered or ordered list will remove the list markers:

```
<ul class="clean-list">
    <li>Level 1 list item 1</li>
    <li>Level 1 list item 2</li>
    <li>Level 1 list item 3
        <ul>
            <li>Level 2 list item 1</li>
            <li>Level 2 list item 2</li>
            <li>Level 2 list item 3</li>
        </ul>
    </li>
    <li>Level 1 list item 4</li>
    <li>Level 1 list item 5</li>
    <li>Level 1 list item 6</li>
</ul>
```

### Considerations

As noted by Scott O'Hara, the CSS used for the `.clean-list` class to remove the markers also [removes the list semantics in Webkit browsers](https://www.scottohara.me/blog/2019/01/12/lists-and-safari.html). If the list semantics are important for your users, add `role="list"` to restore them.

## Description lists

```
<dl>
    <dt>Term</dt>
    <dd>Description</dd>
    <dt>Term</dt>
    <dd>Description</dd>
    <dt>Term</dt>
    <dd>Description</dd>
    <dt>Term</dt>
    <dd>Description</dd>
</dl>
```

For a more tabulated style, add the `.grid` class to the `<dl>` element:

```
<dl class="grid">
    <dt>Term</dt>
    <dd>Description</dd>
    <dt>Term</dt>
    <dd>Description</dd>
    <dt>Term</dt>
    <dd>Description</dd>
    <dt>Term</dt>
    <dd>Description</dd>
</dl>
```
