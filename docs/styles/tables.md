# Tables

The table markup must include column and/or row headers (`<th>`). Some screen readers that encounter a table without headers will treat it as a ‘layout table’ and communicate it quite differently.

Use the attributes `scope="col"` and `scope="row"` to differentiate between column and row headers respectively.

Where there are both column and row headers, do not leave the first header cell empty as this can produce unexpected behaviour.

Use a `<caption>` to label the table correctly. A heading element can be used within the caption if desired.

```
<table>
    <caption>
        <h2>Example table</h2>
    </caption>
    <thead>
        <tr>
            <th scope="col">Column header 1</th>
            <th scope="col">Column header 2</th>
            <th scope="col">Column header 3</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">Row 1 header</th>
            <td>Row 1, cell 2</td>
            <td>Row 1, cell 3</td>
        </tr>
        <tr>
            <th scope="row">Row 2 header</th>
            <td>Row 2, cell 2</td>
            <td>Row 2, cell 3</td>
        </tr>
    </tbody>
</table>
```

## Responsive tables

The grid structure of data tables must remain intact, no matter the available space. If there are many columns, the result may be horizontal scrolling. Based on the advice in Adrian Roselli's article [Under-Engineered Responsive Tables](https://adrianroselli.com/2020/11/under-engineered-responsive-tables.html), the basic table markup then needs to be amended as follows:

- Wrap the table in a `<div>` with the class `.table-wrap`, and the attribute `tabindex="0"` so that keyboard users can scroll it.

- Add the following attributes to the wrapping `<div>`: `tabindex="0"` and `role="region"`

- Add a unique ID to the `<caption>` and add `aria-labelledby` to the wrapping `<div>` with the caption ID as the value. This will correctly label what is now an interactive `<div>`.

- A JavaScript enhancement checks whether the wrapper has any overflow. If there is no overflow, the `tabindex`, `role` and `aria-labelledby` attributes are all removed; but they need to exist in the base markup in case JavaScript is not available.

```
<div class="table-wrap" role="region" aria-labelledby="unique-caption-id" tabindex="0">
    <table>
        <caption id="unique-caption-id">Members of the Spice Girls</caption>
        <thead>
            <tr>
                <th scope="col">First name</th>
                <th scope="col">Last name</th>
                <th scope="col">Band name</th>
                <th scope="col">Date of birth</th>
                <th scope="col">Place of birth</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Emma</td>
                <td>Bunton</td>
                <td>Baby</td>
                <td>21 January 1976</td>
                <td>Watford</td>
            </tr>
            <tr>
                <td>Geri</td>
                <td>Halliwell</td>
                <td>Ginger</td>
                <td>6 August 1972</td>
                <td>London</td>
            </tr>
            <tr>
                <td>Victoria</td>
                <td>Beckham</td>
                <td>Posh</td>
                <td>17 April 1974</td>
                <td>Harlow</td>
            </tr>
            <tr>
                <td>Melanie</td>
                <td>Brown</td>
                <td>Scary</td>
                <td>29 May 1975</td>
                <td>Leeds</td>
            </tr>
            <tr>
                <td>Melanie</td>
                <td>Chisholm</td>
                <td>Sporty</td>
                <td>12 January 1974</td>
                <td>Whiston</td>
            </tr>
        </tbody>
    </table>
</div>
```
