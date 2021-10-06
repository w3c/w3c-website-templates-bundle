# Getting started

_**Please note:** the design system is currently being updated while Studio 24 is working on the W3C redesign project. These
instructions are currently intended for W3C to test the design system. We plan to release a tagged version of the design
system once this work is done (November)._

## In a standalone project

### Installing via ZIP file

You can also download a [ZIP archive file](/assets/assets.zip) of the frontend assets and use these within your project.

_Todo: Review whether we can create an NPM package to load frontend assets_

### HTML templates

You can create HTML templates based on the examples in the Design System. For example the [Default template](https://design-system.w3.org/code/default.html) 
contains all the global styles required for pages.

If you wish to use Twig templates, you can use the Twig templates in `vendor/w3c/website-templates-bundle/design-system-templates`
as a starting point.

For Symfony projects please see below on how to integrate the design system using the bundle system.

## In a Symfony project

For usage instructions on how to install the W3C Design System as a [Symfony bundle](https://symfony.com/doc/current/bundles.html)
see the [w3c-website-templates-bundle README](https://github.com/w3c/w3c-website-templates-bundle/blob/main/README.md).

_Todo: review with W3C if we can bridge the gap between the Symfony template bundle & the design system and move usage docs here_

_Todo: review with W3C how portable these Twig bundle templates really are between different Symfony projects_
