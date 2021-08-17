<?php

namespace Deployer;

require 'recipe/common.php';
require 'vendor/studio24/deployer-recipes/all.php';

/**
 * Deployment configuration variables - set on a per-project basis
 */

// Friendly project name
$project_name = 'W3C Design System documentation website';

// The repo for the project
$repository = 'git@github.com:w3c/w3c-website-templates-bundle.git';

/**
 * Apply configuration to Deployer
 *
 * Don't edit beneath here unless you know what you're doing!
 */

set('application', $project_name);
set('repository', $repository);
set('http_user', 'apache');
set('webroot', '');
set('keep_releases', 10);
set('git_tty', true);
set('allow_anonymous_stats', false);

// Folder to help build clean copy of design system site
set('build_root', getenv('HOME') . '/.deployer');

// Default stage - prevents accidental deploying to production with dep deploy
set('default_stage', 'staging');

/**
 * Hosts
 */

host('staging')
    ->stage('staging')
    ->hostname('mercury.w3.org')
    ->user('studio24')
    ->set('deploy_path','/srv/design-system.w3.org')
    ->set('url', 'https://design-system.w3.org/');

/**
 * Deployment task
 * The task that will be run when using dep deploy
 */

desc('Deploy ' . get('application'));
task('deploy', [

    // Check that we are using local deployer
    's24:check-local-deployer',

    // Run initial checks
    'deploy:info',
    's24:check-branch',
    's24:display-disk-space',

    // Request confirmation to continue (default N)
    's24:confirm-continue',

    // Deploy site
    'deploy:prepare',
    'deploy:lock',
    'deploy:release',
    'local:build',
    'deploy:update_code',

    // Build complete, deploy is live once deploy:symlink runs
    'deploy:symlink',

    // Cleanup
    'deploy:unlock',
    'cleanup',
    'success'
]);

// Build tasks
desc('Build Design System website');
task('local:build', function () {

    //  Set local Deployment directory
    $buildRoot = get('build_root');

    //  Create local Deployment directory
    if (!file_exists($buildRoot)) {
        writeln('Creating Deployment Directory');
        mkdir($buildRoot);
    } else {
        writeln('Deployment Directory exists, skipping');
    }

    //  Set project root directory for build
    $buildPath = $buildRoot.'/'.run('basename {{repository}} .git');

    //  Remove previous local build
    if (!file_exists($buildPath)) {
        writeln('No previous build');
    } else {
        run('rm -rf '.$buildPath);
        writeln('Removed previous build');
    }

    writeln('Cloning Repository (Branch: <info>{{branch}}</info>)');

    //  Clone the required branch to the local build directory
    run('git clone --single-branch --branch {{branch}} {{repository}} '.$buildPath);
    writeln('Clone complete');

    cd($buildPath);

    // Install PHP packages
    run('composer install');

    // Build site
    writeln('Build Design System website');
    run('./vendor/bin/design-system');

    writeln('Build complete.');

})->local();

desc('Copy static website files to remote server');
task('deploy:update_code', function () {

    $buildRoot = get('build_root');
    $directory = run('basename {{repository}} .git');

    writeln("<info>Uploading files to server</info>");
    upload($buildRoot.'/'.$directory.'/_dist/', '{{release_path}}');
});

// Add unlock to failed deployment event.
after('deploy:failed', 'deploy:unlock');

