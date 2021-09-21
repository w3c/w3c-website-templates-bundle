<?php

/**
 * Design System configuration
 *
 * Default values are provided when you run the init command.
 * Delete any you do not need to change since your config
 * settings override the default values.
 *
 * @see https://github.com/studio24/design-system/blob/main/docs/configuration.md
 */
$config = [
    'site_title'                => 'W3C Design System',
    'navigation'                => [
        'Home'                  => '/',
        'Settings'              => '/settings/',
        'Styles'                => '/styles/',
        'Layouts'               => '/layouts/',
        'Components'            => '/components/',
        'Third party plugins'   => '/third-party-plugins/',
        'Templates'             => '/templates/',
    ],
    'templates_path'    => 'design-system-templates',
    'zip_folder'        => 'public/dist/assets',
];
