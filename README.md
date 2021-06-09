# w3c-website-templates-bundle
Symfony Bundle containing generic templates and front-end assets for the W3C applications.

## Usage
Install the bundle using the command

```bash
composer require w3c/w3c-website-templates-bundle
```

You can now use the W3C Twig templates in your application. The templates can be found in the `templates` directory.

On installation, front-end assets (CSS, JavaScript, fonts, etc.) will be copied into the public directory of the application.
You will find them in the folder `public/bundles/w3cwebsitetemplates/dist/assets`. 
You will need to update the assets base URL to point to that folder. This can be done in your application `config/packages/assets.yaml` file for example.

Example syntax:

```yaml
framework:
    assets:
        packages:
            main:
                base_urls: '%app.app_url%/bundles/w3cwebsitetemplates/dist/assets/'
```
