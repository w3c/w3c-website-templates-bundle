# Listing templates

The following example shows the minimum required for a listing page. This example does not include:

- the complete [global navigation](../components/navigation.md)
- the exact markup of any search and filters and the listings themselves (variations for [posts](#posts), [events](#events), [members](#members), [people](#people) and [groups](#groups) are covered separately)
- the [pagination component](../components/pagination.md)
- the optional [pre-footer component](../components/pre-footer.md)
- the complete list of site links for the [footer](../components/footer.md).

<example title="Bare bones listing template" src="example-pages/listing-base.html.twig" standalone />

## Considerations

Note the `.listing` class applied to `<body>`.

### Posts

#### Search and filtering options for the hero

<example title="Post search/filter options" src="components/filters-posts.html.twig" />

#### List of posts

<example title="Post listings" src="components/listings-posts.html.twig" />

Note the `.post-list` class applied to the listings container.

Note that the individual listings are not given the `.card` class. This is a deliberate omission, as the `.card` class includes various styles that are not needed for post listings and so would need to be overridden.
They do however have the `.card--user` class.

Where there are two links to the same post destination, one in the heading and one wrapped around an image, note how image link is given `tabindex="-1"` and `aria-hidden="true"`. This is to [optimise keyboard navigation](https://www.sarasoueidan.com/blog/keyboard-friendlier-article-listings/).

### Events

#### Filtering options for the hero

<example title="Event filter options" src="components/filters-events.html.twig" />

#### List of events

<example title="Event listings" src="components/listings-events.html.twig" />

Note the `.event-list` class applied to the listings container.

Note how the individual listings take the basics of the [card component](../components/cards.md), and incorporate the [sidebar layout](../layouts/sidebar.md) to adjust their appearance.

Note the use of `aria-labelledby` to provide more context for each event listing

### Members

#### Filtering options for the hero

<example title="Member filter options" src="components/filters-members.html.twig" />

The country `<select>` can be enhanced into an auto-complete via JavaScript. To do so, the following script must be added before the closing body tag `</body>`:

```
<script>
	if (document.documentElement.classList.contains('js')) {

		let jsAutocompleteCountry = document.createElement('script');
		jsAutocompleteCountry.src = '/assets/js/country-autocomplete.js';
		document.querySelector('body').appendChild(jsAutocompleteCountry);

	}
</script>
```

#### List of members

<example title="Member listings" src="components/listings-members.html.twig" />

Note the `.member-list` class applied to the listings container.

Note how the individual listings take the basics of the [card component](../components/cards.md), and incorporate the [sidebar layout](../layouts/sidebar.md) to adjust their appearance.

### People

#### Filtering options for the hero

<example title="People filter options" src="components/filters-people.html.twig" />

The working group `<select>` can be enhanced into an auto-complete via JavaScript. To do so, the following script must be added before the closing body tag `</body>`:

```
<script>
	if (document.documentElement.classList.contains('js')) {

		let jsAutocompleteWG = document.createElement('script');
		jsAutocompleteWG.src = '/assets/js/working-group-autocomplete.js';
		document.querySelector('body').appendChild(jsAutocompleteWG);

	}
</script>
```

#### List of people

<example title="People listings" src="components/listings-people.html.twig" />

Note the `.people-list` class applied to the listings container.

Note that the individual listings are not given the `.card` class. This is a deliberate omission, as the `.card` class includes various styles that are not needed for people listings and so would need to be overridden.

### Groups

The Groups listing template does not have any search or filter options:

<example title="Groups listing template" src="example-pages/listing-groups.html.twig" standalone />

Note the `.group-list` class applied to the listings container.
