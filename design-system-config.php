<?php

/**
 * Design System configuration
 *
 * Default values are provided when you run the init command.
 * Delete any you do not need to change since your config
 * settings override the default values.
 *
 * twig_render is a list of file or directory paths, e.g.
 * ['examples', 'single.html.twig']
 *
 * If you want to pass any data to a template created by twig_render save a PHP
 * file with the same name as the template ending .php, e.g. for the single example
 * above: single.html.twig.php - this must contain a $data array.
 *
 * @see Studio24\DesignSystem\Config::$config
 */
$config = [
    'debug' => true,
    'navigation'        => [
        'Home'          => '/',
        'Settings'      => '/settings/',
        'Styles'        => '/base/',
        'Layouts'       => '/layouts/',
        'Components'    => '/components/',
        'Templates'     => '/templates/',
        '3rd party'     => '/third-party-plugins/',
    ],
    'build_templates'   => [
    ],
    'templates_path'    => 'design-system-templates',
];
