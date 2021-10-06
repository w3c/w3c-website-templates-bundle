# W3C website template bundle & Design System

## Design System

This repo contains the design system documentation, frontend assets and example Twig templates. 

Documentation for implementing the W3C website design can be found on the [Design System website](https://design-system.w3.org/).

To make updates to these see [design system](design-system.md).

Please report any issues to the [w3c-website](https://github.com/w3c/w3c-website/issues) repo.

## Template bundle

This repo also contains a Symfony bundle which loads the frontend assets and has a set of Twig templates available 
to build Symfony apps using the W3C website design system.

### How to use the design system templates in Symfony

The design system contains [example Twig templates](design-system-templates) that cover all design patterns used
on the W3C website. These are simplified templates to help illustrate usage. 

To actually use the design system Twig templates, you need to copy these to the [Symfony bundle templates](templates) 
and customise them for use in your application. At present we're building the 
[W3C frontend application](https://github.com/w3c/w3c-website-frontend) which will power 
w3.org. As we build pages we are copying the design system templates across to the bundle templates 
and modifying them for real-world usage. 

Long-term the plan is to be able to use the Symfony bundle templates in a range of different 
Symfony applications - though some refactoring may need to be done to ensure the templates work easily 
across different applications.

### Installation

You can install this in your Symfony app via:

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

### Usage

The templates available can be found in this bundle's 'templates' folder. You can reference them in your application using the
handle `@W3CWebsiteTemplates`. E.g.

```twig
{% extends '@W3CWebsiteTemplates/base.html.twig' %}
```

### Overriding the templates

Templates can be overridden in the `templates/bundles/w3cwebsitetemplates/` directory in your 
Symfony project, using the same name and path as the original templates.

## Reporting issues

Please report any issues to the [w3c-website](https://github.com/w3c/w3c-website/issues) repo.
