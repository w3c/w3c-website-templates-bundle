<?php

namespace Deployer;

/**
 * 1. Deployer recipes we are using for this website
 */
require 'vendor/studio24/deployer-recipes/recipe/default.php';


/**
 * 2. Deployment configuration variables
 */

// Project name
set('application', 'W3C Design System documentation website');

// Git repo
set('repository', 'git@github.com:w3c/w3c-website-templates-bundle.git');

// Default deployment and HTTP users
set('remote_user', 'studio24');
set('http_user', 'apache');
set('webroot', '');
set('keep_releases', 10);

// Folder to help build clean copy of design system site
set('build_root', getenv('HOME') . '/.deployer');

// Default stage - prevents accidental deploying to production with dep deploy
set('default_selector', 'stage=staging');


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


/**
 * 4. Deployment tasks
 */

// Overwrite deploy:prepare to build and upload static site
desc('Prepares a new release');
task('deploy:prepare', [
    'deploy:info',
    'deploy:setup',
    'deploy:lock',
    'deploy:release',
    'local:build',
    'deploy:update_code'
]);


// Build tasks
desc('Build Design System website');
task('local:build', function () {

    //  Set local Deployment directory
    $buildRoot = get('build_root');

    //  Set project root directory for build
    $buildPath = $buildRoot.'/'.run('basename {{repository}} .git');

    //  Create local Deployment directory
    if (!file_exists($buildPath)) {
        writeln('Creating Deployment Directory');
        mkdir($buildPath, recursive: true);
    } else {
        writeln('Deployment Directory exists, skipping');
    }

    //  Remove previous local build
    if (!file_exists($buildPath . '/README.md')) {
        writeln('No previous build');
    } else {
        run(sprintf('rm -rf %s/*', $buildPath));
        writeln('Removed previous build');
    }

    writeln('Cloning Repository (Branch: <info>{{branch}}</info>)');

    //  Clone the required branch to the local build directory
    //run('git clone --single-branch --branch {{branch}} {{repository}} '.$buildPath);
    run(sprintf("git archive {{branch}} | tar -x -f - -C %s 2>&1", $buildPath));
    writeln('Clone complete');

    cd($buildPath);

    // Install PHP packages
    run('composer install');

    // Build site
    writeln('Build Design System website');
    run('./vendor/bin/design-system');

    writeln('Build complete.');

})->select('local');

desc('Copy static website files to remote server');
task('deploy:update_code', function () {

    $buildRoot = get('build_root');
    $directory = run('basename {{repository}} .git');

    writeln("<info>Uploading files to server</info>");
    upload($buildRoot.'/'.$directory.'/_dist/', '{{release_path}}');
});

