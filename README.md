# w3c-website-templates-bundle
Symfony Bundle containing generic templates and front-end assets for the W3C applications.

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
### A note on the use of JavaScript

JavaScript files are built using [webpack](https://webpack.js.org/). Webpack configuration options are defined in the `webpack.config.js` file.