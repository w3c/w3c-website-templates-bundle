# Getting started

## In a standalone project

### Installing via Composer
You can install the Design System via [Composer](https://getcomposer.org/) via:

```
composer require w3c/website-templates-bundle
```

Please note this requires PHP 7.4+

To update these at any time, simply run `composer update`

_Todo: review with W3C whether we need a ZIP file that can be downloaded from the Design System site for the frontend assets_

### Frontend assets
This will install the built front-end assets for the Design System into `vendor/w3c/website-templates-bundle/public/dist/assets`

You can then copy these into your project codebase. 

If you wish to use the SASS files, you can find these in `vendor/w3c/website-templates-bundle/assets-src`

If you wish to copy our build process for frontend assets see `vendor/w3c/website-templates-bundle/package.json` file.

### HTML templates

You can create HTML templates based on the examples in the Design System. For example the [Default template](https://design-system.w3.org/code/default.html) 
contains all the global styles required for pages.

If you wish to use Twig templates, you can use the Twig templates in `vendor/w3c/website-templates-bundle/design-system-templates`
as a starting point.

For Symfony projects please see below on how to integrate the design system using the bundle system.

## In a Symfony project

For usage instructions on how to install the W3C Design System as a [Symfony bundle](https://symfony.com/doc/current/bundles.html)
see the [w3c-website-templates-bundle README](https://github.com/w3c/w3c-website-templates-bundle/blob/main/README.md).

Please note these contain complex Twig templates designed to be integrated into the [W3C frontend website project](https://github.com/w3c/w3c-website-frontend).

_Todo: review with W3C if we can bridge the gap between the Symfony template bundle & the design system and move usage docs here_

_Todo: review with W3C how portable these Twig bundle templates really are between different Symfony projects_
