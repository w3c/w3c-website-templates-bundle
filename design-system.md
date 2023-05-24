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

### Frontend assets

Template styles, JavaScript, images, and fonts can be edited in the `assets-src` folder and compiled via NPM scripts defined
in the `package.json` file. The compiled assets can be found in the `public/dist/assets` folder.

#### Installing the build tools and running them

Make sure you are using the right version of npm to both install packages and run scripts. We strongly recommend using [nvm](https://github.com/nvm-sh/nvm)
to do so.

The npm version to use is defined in  the `.nvmrc` file. To switch to that version, use the command:

```bash
nvm use
```

To install the build tools, use the following commands:

```bash
npm install
```

To build the assets once, use the command:

```bash
npm run build
```

For the build tools to run every time you make a change to the assets source, please use:

```bash
npm run watch
```

### Front-end standards and components usage

Here are the front-end principles applied when building the templates: [Front-end standards](https://w3c.studio24.net/docs/front-end-standards/)

Please refer to the design [W3C design system](https://design-system.w3.org/) for usage of the various components of this bundle.

### A note on the use of JavaScript

JavaScript files are built using [webpack](https://webpack.js.org/). Webpack configuration options are defined in:

* `webpack.config.js` - for the build of the non-minified version of the JS files
* `webpack.config.min.js` - for the build of the minified version of the JS files

We are following the principles described in this article by Chris Ferdinandi when writing JavaScript: [How I structure my vanilla JS projects](https://gomakethings.com/how-i-structure-my-vanilla-js-projects/).

One of these principles states that we should only load the JavaScript files that are needed on any page. We are therefore splitting the code into multiple files.

At the moment these files are:

* `comments.js` - functions that apply to the blog commenting section and is only loaded in the single blog post template
* `main.js` - 'core' JS functions that are loaded on every page
* `s24-autocomplete.js` - only loaded on pages that contain a select list with an autocomplete functionality

If you need to add a new JS file to this project, you will need to add it to the list of entries in the webpack config files. For example, if you are
adding a file named `mynewscript.js`, amend BOTH `webpack.config.js` and `webpack.config.min.js` in this manner:

```javascript
const path = require('path');
module.exports = {
	entry: {
		'/public/dist/assets/js/s24-autocomplete': './assets-src/js/s24-autocomplete.js',
		'/public/dist/assets/js/comments': './assets-src/js/comments.js',
		'/public/dist/assets/js/main': './assets-src/js/main.js',
        '/public/dist/assets/js/mynewscripts': './assets-src/js/mynewscript.js'
	},
```

### Documentation

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
