# Tables

The table markup must include column and/or row headers (`<th>`). Some screen readers that encounter a table without headers will treat it as a ‘layout table’ and communicate it quite differently.

Use the attributes `scope="col"` and `scope="row"` to differentiate between column and row headers respectively.

Where there are both column and row headers, do not leave the first header cell empty as this can produce unexpected behaviour.

Use a `<caption>` to label the table correctly. A heading element can be used within the caption if desired.

<example title="Basic table" src="components/table.html.twig" />

## Responsive tables

The grid structure of data tables must remain intact, no matter the available space. If there are many columns, the result may be horizontal scrolling. Based on the advice in Adrian Roselli's article [Under-Engineered Responsive Tables](https://adrianroselli.com/2020/11/under-engineered-responsive-tables.html), the basic table markup then needs to be amended as follows:

- Wrap the table in a `<div>` with the class `.table-wrap`, and the attribute `tabindex="0"` so that keyboard users can scroll it.

- Add the following attributes to the wrapping `<div>`: `tabindex="0"` and `role="region"`

- Add a unique ID to the `<caption>` and add `aria-labelledby` to the wrapping `<div>` with the caption ID as the value. This will correctly label what is now an interactive `<div>`.

- A JavaScript enhancement checks whether the wrapper has any overflow. If there is no overflow, the `tabindex`, `role` and `aria-labelledby` attributes are all removed; but they need to exist in the base markup in case JavaScript is not available.

<example title="Basic table" src="components/table-responsive.html.twig" />