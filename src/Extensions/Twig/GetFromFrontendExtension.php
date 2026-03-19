<?php

namespace W3C\WebsiteTemplatesBundle\Extensions\Twig;

use Symfony\Component\DependencyInjection\Attribute\AutoconfigureTag;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Contracts\HttpClient\HttpClientInterface;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

#[AutoconfigureTag('twig.extension')]
class GetFromFrontendExtension extends AbstractExtension
{
    public function __construct(private readonly HttpClientInterface $client)
    {
    }

    public function getFunctions(): array
    {
        return [
            new TwigFunction('global_nav', [$this, 'globalNav']),
            new TwigFunction('lang_nav', [$this, 'langNav']),
            new TwigFunction('footer', [$this, 'footer']),
            new TwigFunction('common-head', [$this, 'commonHead']),
        ];
    }

    private function fromFrontend(string $path, ?string $lang = 'en'): string
    {
        $content = '';
        try {
            $response = $this->client->request('GET', ((!$lang || 'en' === $lang) ? '' : '/'.$lang).$path);

            $statusCode = $response->getStatusCode();

            if (Response::HTTP_OK === $statusCode) {
                $content = $response->getContent();
            }
        } catch (\Throwable $e) {
        }

        return $content;
    }

    public function globalNav(?string $lang = 'en'): string
    {
        return $this->fromFrontend('/_fragments/global-nav/', $lang);
    }

    public function langNav(?string $lang = 'en'): string
    {
        return $this->fromFrontend('/_fragments/lang-nav/', $lang);
    }

    public function footer(?string $lang = 'en'): string
    {
        return $this->fromFrontend('/_fragments/footer/', $lang);
    }

    public function commonHead(?string $lang = 'en'): string
    {
        return $this->fromFrontend('/_fragments/common-head/', $lang);
    }
}
