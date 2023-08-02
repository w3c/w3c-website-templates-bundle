# Third-party plugins

Styles for components/functionality from sources external to the design system. They may include some customisations specifically required to fit in with the design system.

## Autocomplete

The design system provides a custom script to enhance a `<select>` into and accessible auto-complete via JavaScript.

### Simple autocomplete

<example title="Simple autocomplete" src="third-party-plugins/simple-autocomplete.html.twig" />

### Multiple selection with autocomplete

<example title="Multiple autocomplete" src="third-party-plugins/multiple-autocomplete.html.twig" />

### Autocomplete options

The autocomplete script can be configured using <code>data-*</code> attributes on the <code>select</code>.

<table>
	<thead>
	<tr>
		<th scope="col">Attribute</th>
		<th scope="col">Description</th>
		<th scope="col">Default value</th>
	</tr>
	</thead>
	<tbody>
	<tr>
		<th scope="row">data-search-start</th>
		<td>By default, the script will only return options with text <em>starting</em> with the given input. To search for options that contain the input, set that attribute to <code>off</code></td>
		<td>on</td>
	</tr>
    <tr>
		<th scope="row">data-text-only</th>
		<td>By default, the script will only check the text node of each option. If you want to include the option values in the search, set that attribute to <code>off</code></td>
		<td>on</td>
	</tr>
	<tr>
		<th scope="row">data-source</th>
		<td>It is possible to specify an endpoint to retrieve the results instead. In this case, the endpoint provided must return a JSON with the following format:
<pre>
{"results":[
    {"id":1,"text":"foo"},
    {"id":2,"text":"bar"}
]}</pre></td>
		<td>-</td>
	</tr>
    <tr>
		<th scope="row">data-minInput</th>
		<td>Minimum input length to start the search from <code>data-source</code></td>
		<td>2</td>
	</tr>
	</tbody>
</table>