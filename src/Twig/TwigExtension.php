<?php

namespace W3C\WebsiteTemplatesBundle\Twig;

use Exception;
use SimpleXMLElement;
use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;

class TwigExtension extends AbstractExtension
{
    public function getFilters()
    {
        return [
            new TwigFilter('absolute_url', [$this, 'absoluteUrl']),
            new TwigFilter('preg_replace', [$this, 'pregReplace']),
            new TwigFilter('markup_attrs', [$this, 'markupAttrs']),
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

    /**
     * Add/Replace attributes to/from the root of arbitrary XML
     *
     * @param string     $markup string representation of an SVG element
     * @param array|null $attrs  array of attributes to add
     *
     * @return bool|string
     * @throws Exception
     */
    public function markupAttrs(string $markup, array $attrs = null)
    {
        $xml = new SimpleXMLElement($markup);

        foreach ($attrs as $name => $value) {
            $xml[$name] = $value;
        }

        // Convert back to string and return the code, removing XML version tag
        $dom = dom_import_simplexml($xml);
        return $dom->ownerDocument->saveXML($dom->ownerDocument->documentElement);
    }
}
