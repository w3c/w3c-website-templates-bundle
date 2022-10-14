<?php

namespace W3C\WebsiteTemplatesBundle\Twig;

use DateTime;
use DateTimeImmutable;
use DateTimeInterface;
use DateTimeZone;
use Exception;
use SimpleXMLElement;
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

    private $translator;
    private IntlExtension $intl;
    private Environment $twig;
    private Utils $utils;

    public function __construct(
        IntlExtension $intl,
        TranslatorInterface $translator,
        Environment $twig,
        Utils $utils
    ) {
        // Ignore the IdentityTranslator, otherwise the parameters won't be replaced properly
        if ($translator instanceof IdentityTranslator) {
            $translator = null;
        }

        $this->translator = $translator;
        $this->intl       = $intl;
        $this->twig       = $twig;
        $this->utils      = $utils;
    }

    public function getFilters()
    {
        return [
            new TwigFilter('preg_replace', [$this, 'pregReplace']),
            new TwigFilter('markup_attrs', [$this, 'markupAttrs']),
            new TwigFilter('avatar', [$this, 'avatar']),
            new TwigFilter('event_type', [$this, 'eventType']),
            new TwigFilter('crosslink_type', [$this, 'crosslinkType']),
            new TwigFilter('date_range', [$this, 'dateRange']),
            new TwigFilter('array_shuffle', [$this, 'arrayShuffle']),
            new TwigFilter('strip_group_type', [$this, 'stripGroupType'])
        ];
    }

    public function getFunctions()
    {
        return [
            new TwigFunction('date_range', [$this, 'dateRange']),
            new TwigFunction('w3c_date_format', [$this, 'w3cDateFormat'])
        ];
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

        $url = 'https://www.w3.org/avatars/' . md5($email);
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
        bool $utc = false
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
        $timezone = $this->intl->formatDate($this->twig, $start, 'short', 'zzzz', $tz, 'gregorian', $locale);
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
                'same_day'   => $sameDay
            ],
            'w3c_website_templates_bundle'
        );
    }

    public function w3cDateFormat(DateTimeInterface $date, string $locale = 'en_GB', string $format = 'Y-m-d'): string {
        $formatedDate = $this->intl->formatDate($this->twig, $date, 'long', '', $date->getTimezone(), 'gregorian', $locale);
        return '<time datetime="'.$date->format($format).'">'.$formatedDate.'</time>';
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
}
