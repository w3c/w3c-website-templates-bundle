# Columns

Columns are used to gather groups of [cards](cards.md) into listings. They rely on Flexbox.

## Columns for cards with images
```
<div class="component component--columns component--columns--images">
    <div class="component--columns__intro">
        <h2>Section heading for these teasers</h2>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
    </div>
    <ul class="clean-list" role="presentation">
        <li>
            [Card markup...]
        </li>
        <li>
            [Card markup...]
        </li>
        <li>
            [Card markup...]
        </li>
    <ul>
</div>
```

## Columns for cards with icons
```
<div class="component component--columns component--columns--icons">
    <div class="component--columns__intro">
        <h2>Section heading for these teasers</h2>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
    </div>
    <ul class="clean-list" role="presentation">
        <li>
            [Card markup...]
        </li>
        <li>
            [Card markup...]
        </li>
        <li>
            [Card markup...]
        </li>
    <ul>
</div>
```

## Considerations

The examples above use an unordered list to create the spaced columns. Because the [cards](cards.md) pattern uses headings that fit in with the surrounding page hierarchy, the unordered list is given `role="presentaton"` to reduce the verbosity of announcements for users of Assistive Technology.

Note the slightly different classes depending on whether the cards within the columns include an image (`.component--columns--images`) or an SVG icon (`component--columns--icons`). This is because of slight differences in the design for each.

[CSS quantity queries](https://alistapart.com/article/quantity-queries-for-css/) are used to determine the behaviour of the columns according to the number of cards they contain. Use [Quantity Queries Builder](https://quantityqueries.com/) to roll your own quantity queries.