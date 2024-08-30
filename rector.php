<?php

declare(strict_types=1);

use Rector\Config\RectorConfig;
use Rector\Symfony\Set\SymfonySetList;

return RectorConfig::configure()
    ->withPaths(
       [
           __DIR__ . '/config',
           __DIR__ . '/public',
           __DIR__ . '/src',
           __DIR__ . '/templates',
       ]
    )
    ->withPhpSets()
    ->withTypeCoverageLevel(0)
    ->withSets(
       [
           SymfonySetList::SYMFONY_71,
           SymfonySetList::SYMFONY_CODE_QUALITY,
           SymfonySetList::SYMFONY_CONSTRUCTOR_INJECTION,
           SymfonySetList::ANNOTATIONS_TO_ATTRIBUTES,
           SymfonySetList::CONFIGS,
       ]
    )
;
