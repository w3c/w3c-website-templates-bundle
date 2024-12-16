<?php

namespace Deployer;

/**
 * 1. Deployer recipes we are using for this website
 */
require 'vendor/studio24/deployer-recipes/recipe/static.php';


/**
 * 2. Deployment configuration variables
 */

// Project name
set('application', 'W3C Design System documentation website');

// Git repo
set('repository', 'git@github.com:w3c/w3c-website-templates-bundle.git');

// Filesystem volume we're deploying to
set('disk_space_filesystem', '/dev/nvme1n1');

// Default deployment and HTTP users
set('remote_user', 'studio24');
set('http_user', 'apache');
set('keep_releases', 10);

// Default stage - prevents accidental deploying to production with dep deploy
set('default_selector', 'stage=staging');

// Directory that contains built website files
set("build_folder", "_dist");

// Build commands for static site
task('local_build', function() {
    runLocally("composer install");
    runLocally("./vendor/bin/design-system");
});

/**
 * 3. Hosts
 */

localhost('local');

host('production')
    ->set('labels', ['stage' => 'production'])
    ->set('hostname', 'proteus.w3.internal')
    ->set('remote_user', 'studio24')
    ->set('deploy_path','/srv/design-system.w3.org')
    ->set('url', 'https://design-system.w3.org/');

host('staging')
    ->set('labels', ['stage' => 'staging'])
    ->set('hostname', 'proteus.w3.internal')
    ->set('remote_user', 'studio24')
    ->set('deploy_path','/srv/staging-design-system.w3.org')
    ->set('url', 'https://staging-design-system.w3.org/');
