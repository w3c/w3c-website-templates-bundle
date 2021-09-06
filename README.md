# w3c-website-templates-bundle
Symfony Bundle containing generic templates and front-end assets for the W3C applications.

## Design System documentation

Frontend usage documentation for implementing the W3C website design can be found on the [Design System website](https://design-system.w3.org/).

To make updates to these see [design system](design-system.md).

## Installation
Install the bundle using the command

```bash
composer require w3c/w3c-website-templates-bundle
```

On installation, front-end assets (CSS, JavaScript, fonts, etc.) will be copied into the public directory of the application.
You will find them in the folder `public/bundles/w3cwebsitetemplates/dist/assets`. 
You will need to update the assets base URL to point to that folder. This can be done in your application `config/packages/assets.yaml` file for example.

Example syntax (provided you have defined an `%app.app_url%` parameter):

```yaml
framework:
    assets:
        packages:
            main:
                base_urls: '%app.app_url%/bundles/w3cwebsitetemplates/dist/assets/'
```
You can now use the W3C Twig templates and front-end assets in your application.

## Usage

The templates available can be found in this bundle's 'templates' folder. You can reference them in your application using the 
handle `@W3CWebsiteTemplates`. E.g.

```twig
{% extends '@W3CWebsiteTemplates/base.html.twig' %}
```

### Overriding the templates

TBImplemented

## Editing the front-end assets
Template styles, JavaScript, images, and fonts can be edited in the `assts-src` folder and compiled via NPM scripts defined
in the `package.json` file. The compiled assets can be found in the `public/dist/assets` folder.

### Installing the build tools and running them
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

Please refer to the design W3C design system (link TBC) for usage of the various components of this bundle.

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