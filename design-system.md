# Design System

* [Site URLs](#site-urls)
* [Installing](#installing)
* [Making changes](#making-changes)
* [Testing the documentation locally](#testing-the-documentation-locally)
* [Deployment](#deployment)

## Site URLs

### Production

* https://design-system.w3.org/

### Staging

* https://staging-design-system.w3.org/

## Installing

Install the required libraries via [Composer](https://getcomposer.org/). These are only loaded for local development. Please 
note this requires PHP 7.4+ 

```
composer install
```

## Making changes

The documentation is stored in `docs/` in Markdown format. The build process builds these pages into HTML, updates internal 
links, and converts the custom tags `<example>` and `<colors>` to embed code examples (components and full pages) and color swatches.

Please ensure you add a `README.md` file within each sub-folder to ensure an index file exists.

Top-level navigation can be edited in the [`design-system-config.php`](design-system-config.php) file (see the `navivgation` array element).

### Code examples

To display code fragments or full-page templates add the following custom HTML tag to your Markdown file, ensuring you 
close the HTML tag (e.g. `/>`):

```
<example title="Tables" src="components/tables.html.twig" />
```

This renders the template, saves this to a file and embeds it in your doc page. On your doc page a live preview of the template
is displayed, a link to view this in a new tab, and the HTML source code.

In order for this to work you need to include the following attributes:

* `title` - title of your code example
* `src` - path to the code Twig template, relative to your templates folder (by default this is `templates/`)

To display a standalone full-page template:

```
<example title="Default template" src="examples/default.html.twig" standalone />
```

This works in exactly the same way as code components, you just need to add the standalone attribute. This renders the template as a standalone page.

See [code examples documentation](https://github.com/studio24/design-system/blob/main/docs/code-examples.md).

### Color swatches

To output your color swatch use:

```
<colors src="guidelines/colours.json" />
```

This tag requires one attribute:

* `src` - path to JSON data file for color swatch, relative to your docs folder

See [code color swatches documentation](https://github.com/studio24/design-system/blob/main/docs/colors.md).

## Testing the documentation locally

To rebuild the documentation locally run:

```
./vendor/bin/design-system -v
```

And to view at http://localhost:8000 run:

```
php -S localhost:8000 -t _dist
```

This repo uses the [Design System build tool](https://github.com/studio24/design-system), see further 
[documentation](https://github.com/studio24/design-system/tree/main/docs) on usage.

## Deployment

The project uses [Deployer](https://deployer.org/) to perform deployment. 

Please note this project uses a local instance of Deployer (installed via Composer), as opposed to a global version of 
Deployer.

To run deployments please use:

````
vendor/bin/dep deploy <environment>
````

To deploy a specific branch use:

````
vendor/bin/dep deploy <environment> --branch=<branch_name>
````
