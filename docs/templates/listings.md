# Listing templates

The following example shows the minimum required for a listing page. This example does not include:

- the complete [global navigation](../components/navigation.md) as per the live site
- the exact markup of any search and filters and the listings themselves (variations for [posts](#posts), [events](#events), [members](#members), [people](#people) and [groups](#groups) are covered separately)
- the [pagination component](../components/pagination.md)
- the optional [pre-footer component](../components/pre-footer.md)
- the complete list of site links for the [footer](../components/footer.md) as per the live site.

<example title="Bare bones listing template" src="example-pages/listing-base.html.twig" standalone />

## Considerations

Note the `.listing` class applied to `<body>`.

### Posts

#### Post search and filtering options

<example title="Post search/filter options" src="components/filters-posts.html.twig" />

#### List of posts

<example title="Post listings" src="components/listings-posts.html.twig" />

Note how each item in the listing has the `.card--post` class.

Where there are two links to the same post destination, one in the heading and one wrapped around an image, note how the image link is given `tabindex="-1"` and `aria-hidden="true"`. This is to [optimize keyboard navigation](https://www.sarasoueidan.com/blog/keyboard-friendlier-article-listings/). The alt text for the linked image is used to communicate the link destination, not to describe the image.

### Events

#### Event filtering options

<example title="Event filter options" src="components/filters-events.html.twig" />

#### List of events

<example title="Event listings" src="components/listings-events.html.twig" />

Note how each event is a [card component](../components/cards.md) with the `.card--event` class and a nested [sidebar layout](../layouts/sidebar.md). Modifier classes are available to change the color of the stripe on the leading edge for different event types:

- `.conference`
- `.meeting`
- `.talk`
- `.workshop`

Note the use of `aria-labelledby` to provide more context for each event listing.

### Members

#### Member filtering options

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

Note how each item in the listing has the `.card--member` class.

### People

#### People filtering options

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

Note how each item in the listing has the `.card--user` class.

### Groups

The Groups listing template does not have any search or filter options.

#### List of groups

<example title="Group listings" src="components/listings-groups.html.twig" />

Note how each item in the listing has the `.card--group` class.