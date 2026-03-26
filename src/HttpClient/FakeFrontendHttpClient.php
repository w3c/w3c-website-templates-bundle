<?php

namespace W3C\WebsiteTemplatesBundle\HttpClient;

use Symfony\Component\HttpClient\MockHttpClient;
use Symfony\Component\HttpClient\Response\MockResponse;
use Symfony\Contracts\HttpClient\ResponseInterface;

class FakeFrontendHttpClient extends MockHttpClient
{
    // @phpstan-ignore constructor.unusedParameter
    public function __construct(callable|iterable|ResponseInterface|null $responseFactory = null, ?string $baseUri = null)
    {
        parent::__construct(function ($method, $url, $options) {
            return new MockResponse();
        }, $baseUri);
    }
}
