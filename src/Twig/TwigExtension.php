<?php

namespace W3C\WebsiteTemplatesBundle\Twig;

use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;

class TwigExtension extends AbstractExtension
{
    public function getFilters()
    {
        return [
            new TwigFilter('absolute_url', [$this, 'absoluteUrl']),
            new TwigFilter('preg_replace', [$this, 'pregReplace']),
        ];
    }

    public function absoluteUrl(string $url, string $language = 'en'): string
    {
        // $url is already absolute, don't change it
        if (preg_match(';^(http://|https://);', $url)) {
            return $url;
        }

        if (strpos($url, '/') !== 0) {
            $url = '/' . $url;
        }

        $prefix = '';
        if ($language !== 'en') {
            $prefix = '/' . $language;
        }

        return $prefix . $url;
    }

    public function pregReplace(string $subject, string $pattern, string $replacement, int $limit = -1): string
    {
        return preg_replace($pattern, $replacement, $subject, $limit);
    }
}
