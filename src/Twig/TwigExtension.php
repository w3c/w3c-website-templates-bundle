<?php

namespace W3C\WebsiteTemplatesBundle\Twig;

use DateTime;
use DateTimeImmutable;
use DateTimeInterface;
use DateTimeZone;
use Exception;
use SimpleXMLElement;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\Translation\IdentityTranslator;
use Symfony\Contracts\Translation\TranslatorInterface;
use Throwable;
use Twig\Environment;
use Twig\Extension\AbstractExtension;
use Twig\Extra\Intl\IntlExtension;
use Twig\TwigFilter;
use Twig\TwigFunction;
use W3C\WebsiteTemplatesBundle\Service\Utils;


class TwigExtension extends AbstractExtension
{
    public static $units = [
        'y' => 'year',
        'm' => 'month',
        'd' => 'day',
        'h' => 'hour',
        'i' => 'minute',
        's' => 'second',
    ];

    private TranslatorInterface $translator;
    private IntlExtension $intl;
    private Environment $twig;
    private Utils $utils;
    private RequestStack $requestStack;
    private array $loginUrlInfo;

    public function __construct(
        IntlExtension $intl,
        TranslatorInterface $translator,
        Environment $twig,
        Utils $utils,
        RequestStack $requestStack,
        array $loginUrlInfo
    ) {
        // Ignore the IdentityTranslator, otherwise the parameters won't be replaced properly
        if ($translator instanceof IdentityTranslator) {
            $translator = null;
        }

        $this->translator   = $translator;
        $this->intl         = $intl;
        $this->twig         = $twig;
        $this->utils        = $utils;
        $this->requestStack = $requestStack;
        $this->loginUrlInfo = $loginUrlInfo;
    }

    public function getFilters(): array
    {
        return [
            new TwigFilter('preg_replace', [$this, 'pregReplace']),
            new TwigFilter('markup_attrs', [$this, 'markupAttrs']),
            new TwigFilter('avatar', [$this, 'avatar']),
            new TwigFilter('event_type', [$this, 'eventType']),
            new TwigFilter('crosslink_type', [$this, 'crosslinkType']),
            new TwigFilter('date_range', [$this, 'dateRange']),
            new TwigFilter('array_shuffle', [$this, 'arrayShuffle']),
            new TwigFilter('strip_group_type', [$this, 'stripGroupType']),
            new TwigFilter('locale_to_bcp47', [$this, 'localeToBcp47']),
            new TwigFilter('bcp47_to_locale', [$this, 'bcp47ToLocale']),
            new TwigFilter('obfuscate', [$this, 'obfuscate'], ['is_safe' => ['html']]),
            new TwigFilter('i_to_em', [$this, 'iToEm'])
        ];
    }

    public function getFunctions(): array
    {
        return [
            new TwigFunction('date_range', [$this, 'dateRange']),
            new TwigFunction('w3c_date_format', [$this, 'w3cDateFormat']),
            new TwigFunction('login_url', [$this, 'getLoginUrl']),
        ];
    }

    /**
     * @param string $subject
     * @param string|string[] $pattern
     * @param string|string[] $replacement
     * @param int $limit
     * @return string
     */
    public function pregReplace(string $subject, $pattern, $replacement, int $limit = -1): string
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
    public function markupAttrs(string $markup, ?array $attrs = null)
    {
        try {
            $xml = new SimpleXMLElement($markup);
        } catch (Throwable $e) {
            return $markup;
        }

        foreach ($attrs as $name => $value) {
            $xml[$name] = $value;
        }

        // Convert back to string and return the code, removing XML version tag
        $dom = dom_import_simplexml($xml);
        return $dom->ownerDocument->saveXML($dom->ownerDocument->documentElement);
    }

    /**
     * Get the avatar URL corresponding to an email address
     *
     * @param string      $email email address to retrieve the corresponding avatar for
     * @param string|null $size size of the avatar, can be 'sm', 'tn' or null for default size
     *
     * @return string
     */
    public function avatar(string $email, string $size = 'sm'): string
    {

        $url = 'https://www.w3.org/avatars/' . md5($email) . '/';
        if ($size) {
            $url .= '?s=' . $size;
        }

        return $url;
    }

    public function eventType(array $event): string
    {
        switch ($event['type']['slug']) {
            case 'happenings':
            case 'ac':
            case 'tpac':
                return 'meeting';
            case 'workshops':
                return 'workshop';
            case 'talks':
                return 'talk';
            case 'conferences':
                return 'conference';
        }

        return '';
    }

    /**
     * Returns the translatable string reference that matches the Craft section handle.
     * Useful in crosslink cards which indicate the type of content at the bottom.
     *
     * @param string|null $category
     *
     * @return string translatable string reference
     */
    public function crosslinkType(?string $category): string
    {
        $referencePrepend = "components.crosslinks.types.";
        switch ($category) {
            case 'blogPosts':
            case 'blogListing':
                return $referencePrepend . 'blogpost';
            case 'ecosystems':
                return $referencePrepend . 'ecosystem';
            case 'ecosystemsLandingPage':
                return $referencePrepend . 'ecosystems';
            case 'events':
                return $referencePrepend . 'event';
            case 'eventsListing':
                return $referencePrepend . 'events';
            case 'newsArticles':
            case 'newsListing':
                return $referencePrepend . 'news';
            case 'pressReleases':
                return $referencePrepend . 'pressrelease';
            case 'pressReleasesListing':
                return $referencePrepend . 'pressreleases';
            case 'pages':
            case 'homepage':
            case 'null':
                return $referencePrepend. 'page';
            default:
                return ucfirst($category);
        }
    }

    public function dateRange(
        DateTimeInterface $originalStart,
        DateTimeInterface $originalEnd,
        string $tz,
        string $locale,
        bool $utc = false,
        ?string $id = null
    ): string {
        if ($locale == 'en') {
            $locale = 'en-GB';
        }

        if ($originalStart instanceof DateTime) {
            $originalStart = DateTimeImmutable::createFromMutable($originalStart);
        }
        if ($originalEnd instanceof DateTime) {
            $originalEnd = DateTimeImmutable::createFromMutable($originalEnd);
        }
        $tz        = ($utc === true)? 'UTC' : $tz;
        $start     = $originalStart->setTimezone(new DateTimeZone($tz));
        $end       = $originalEnd->setTimezone(new DateTimeZone($tz));
        $isoStart  = $originalStart->format('c');
        $isoEnd    = $originalEnd->format('c');
        $startDate = $this->intl->formatDate($this->twig, $start, 'long', '', $tz, 'gregorian', $locale);
        $startTime = $this->intl->formatTime($this->twig, $start, 'short', '', $tz, 'gregorian', $locale);
        $endDate   = $this->intl->formatDate($this->twig, $end, 'long', '', $tz, 'gregorian', $locale);
        $endTime   = $this->intl->formatTime($this->twig, $end, 'short', '', $tz, 'gregorian', $locale);
        $sameDay   = $start->format('Y-m-d') === $end->format('Y-m-d');
        //$timezone = $this->intl->getTimezoneName($tz, $locale);
        //$timezone = $this->intl->formatDate($this->twig, $start, 'short', 'zzz', $tz, 'gregorian', $locale);
        if ($tz == 'UTC' || $tz == 'Etc/UTC') {
            $timezone = 'UTC';
        } else {
            $timezone = $this->intl->formatDate($this->twig, $start, 'short', 'zzzz', $tz, 'gregorian', $locale);
        }
        //$timezone = $start->format('T');
        return $this->translator->trans(
            'events.date_range',
            [
                'iso_start'  => $isoStart,
                'iso_end'    => $isoEnd,
                'start_date' => $startDate,
                'start_time' => $startTime,
                'end_date'   => $endDate,
                'end_time'   => $endTime,
                'timezone'   => $timezone,
                'same_day'   => $sameDay,
                'with_id'    => $id != null,
                'id'         => $id
            ],
            'w3c_website_templates_bundle'
        );
    }

    public function w3cDateFormat(DateTimeInterface $date, string $locale = 'en_GB', string $format = 'Y-m-d'): string {
        $formattedDate = $this->intl->formatDate($this->twig, $date, 'long', '', $date->getTimezone(), 'gregorian', $locale);
        return '<time datetime="'.$date->format($format).'">'.$formattedDate.'</time>';
    }

    public function arrayShuffle(array $sourceArray): array
    {
        shuffle($sourceArray);
        return $sourceArray;
    }

    public function stripGroupType(string $name): string
    {
        return $this->utils->stripGroupType($name);
    }

    public function getLoginUrl(?string $redirectUrl = null): string
    {
        // @todo Simplify after we stop supporting Symfony 4
        if ($redirectUrl) {
            $redirectUrl = urlencode($redirectUrl);
        } elseif (method_exists($this->requestStack, 'getMainRequest')) {
            $redirectUrl = urlencode($this->requestStack->getMainRequest()->getUri());
        } else {
            $redirectUrl = urlencode($this->requestStack->getMasterRequest()->getUri());
        }

        return $this->loginUrlInfo['login_url'] . '?' . $this->loginUrlInfo['login_redirect_param'] . '=' . $redirectUrl;
    }

    public function localeToBcp47(string $locale): string
    {
        return str_replace('_', '-', $locale);
    }

    public function bcp47ToLocale(string $locale): string
    {
        return str_replace('-', '_', $locale);
    }

    public function obfuscate(string $text): string
    {
        // Obfuscate string by replacing all characters with their HTML entity equivalents
        return mb_encode_numericentity($text, [0x000000, 0x10ffff, 0, 0xffffff], 'UTF-8');
    }

    public function iToEm($text)
    {
        // Replace <i> with <em>
        return preg_replace([
            '/<i>/i',
            '/<\/i>/i'
        ], [
            '<em>',
            '</em>'
        ], $text);
    }


}
