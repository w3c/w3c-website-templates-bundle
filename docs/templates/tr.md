# Technical reports template

This example shows the minimum markup of an Technical reports template. It does not include:

- the complete [global navigation](../components/navigation.md)
- the optional [translations component](../components/translations.md)
- the complete list of site links for the [footer](../components/footer.md).

<example title="Technical reports page" src="example-pages/tr.html.twig" standalone />

## Considerations

Note the `.listing` and `.technical-reports` classes applied to `<body>`.

### Search

#### Filtering options for the hero

To help users we provide links directly to certain results. These results have been carefully selected based on user needs as well as illustrating how the search options work:  

```
<p>Not sure where to start? Search for <a href="">Standards only</a>, <a href="path/to/page">any reports in progress</a>, <a href="path/to/page">everything tagged with Accessibility</a>, or <a href="path/to/page">all reports</a>.</p>
```

<example title="Search options" src="components/tr-search.html.twig" />

### Technical report item

#### Content on a single report item

Note that report titles and their maturity status is contained by `.tr-list__item__header` class. This is so that we can use flex-box to change their visual order. *Whenever you're changing the visual order, make sure the tab order remains predictable.*

Maturity statues are contained in `span` elements with the following class, `.maturity-level`. Additionally, we use the following classes to further qualify statuses:

- Standard: Add `.maturity-level--highlighted` (previously: Recommendation)
- All standards which are in progress: only `.maturity-level`
- Note: Add `.maturity-level--note`

#### Standard

When Standards have translations, we add a single link like in the example below:

<example title="A Standard report" src="components/tr-search-results-item-standard.html.twig" />

#### A note about Notes

For Notes we don't show their editors in the listing. This is to reduce the content and visual affordance for Notes.  

<example title="A Note report" src="components/tr-search-results-item-note.html.twig" />
