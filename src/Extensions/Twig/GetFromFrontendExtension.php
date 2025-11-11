<?php

namespace W3C\WebsiteTemplatesBundle\Extensions\Twig;

use Symfony\Component\HttpClient\CachingHttpClient;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\HttpCache\Store;
use Symfony\Contracts\HttpClient\HttpClientInterface;
use Throwable;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

class GetFromFrontendExtension extends AbstractExtension
{
    private string $baseUrl;
    private HttpClientInterface $client;

    public function __construct(string $baseUrl, HttpClientInterface $client, string $cachePath)
    {
        $this->baseUrl = $baseUrl;
        $store  = new Store($cachePath);
        $this->client = new CachingHttpClient($client, $store, ['default_ttl' => 86400]);
    }

    /**
     * {@inheritdoc}
     */
    public function getFunctions(): array
    {
        return [
            new TwigFunction('global_nav', [$this, 'globalNav']),
            new TwigFunction('lang_nav', [$this, 'langNav']),
            new TwigFunction('footer', [$this, 'footer']),
            new TwigFunction('common-head', [$this, 'commonHead'])
        ];
    }

    /**
     * @param string $path
     *
     * @return string
     */
    private function fromFrontend(string $path, string $lang = 'en'): string
    {
        $content = '';
        try {
            $response = $this->client->request('GET', $this->baseUrl . ($lang === 'en' ? '' : '/' . $lang) . $path);

            $statusCode = $response->getStatusCode();

            if ($statusCode === Response::HTTP_OK) {
                $content = $response->getContent();
            }
        } catch (Throwable $e) {}

        return $content;
    }

    public function globalNav(string $lang = 'en'): string
    {
        return $this->fromFrontend('/_fragments/global-nav/', $lang);
    }

    public function langNav(string $lang = 'en'): string
    {
        return $this->fromFrontend('/_fragments/lang-nav/', $lang);
    }

    public function footer(string $lang = 'en'): string
    {
        return $this->fromFrontend('/_fragments/footer/', $lang);
    }

    public function commonHead(string $lang = 'en'): string
    {
        return $this->fromFrontend('/_fragments/common-head/', $lang);
    }
}

