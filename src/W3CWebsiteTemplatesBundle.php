<?php

namespace W3C\WebsiteTemplatesBundle;

use Symfony\Component\HttpKernel\Bundle\Bundle;
use function dirname;

class W3CWebsiteTemplatesBundle extends Bundle
{
    public function getPath(): string
    {
        return dirname(__DIR__);
    }
}
