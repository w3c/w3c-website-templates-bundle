<?php

namespace W3C\WebsiteTemplatesBundle;

use Symfony\Component\DependencyInjection\Extension\ExtensionInterface;
use Symfony\Component\HttpKernel\Bundle\Bundle;
use W3C\WebsiteTemplatesBundle\DependencyInjection\W3CWebsiteTemplatesExtension;
use function dirname;

class W3CWebsiteTemplatesBundle extends Bundle
{
    public function getPath(): string
    {
        return dirname(__DIR__);
    }

    public function getContainerExtension(): ?ExtensionInterface
    {
        return new W3CWebsiteTemplatesExtension();
    }
}
