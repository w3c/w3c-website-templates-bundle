<?php

namespace W3C\WebsiteTemplatesBundle\Twig;

use DateTime;
use DateTimeImmutable;
use DateTimeZone;
use Exception;
use SimpleXMLElement;
use Symfony\Component\Translation\IdentityTranslator;
use Symfony\Contracts\Translation\TranslatorInterface;
use Twig\Environment;
use Twig\Extension\AbstractExtension;
use Twig\Extra\Intl\IntlExtension;
use Twig\TwigFilter;

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

    public function __construct(IntlExtension $intl, TranslatorInterface $translator, Environment $twig)
    {
        // Ignore the IdentityTranslator, otherwise the parameters won't be replaced properly
        if ($translator instanceof IdentityTranslator) {
            $translator = null;
        }

        $this->translator = $translator;
        $this->intl = $intl;
        $this->twig = $twig;
    }

    public function getFilters()
    {
        return [
            new TwigFilter('absolute_url', [$this, 'absoluteUrl']),
            new TwigFilter('preg_replace', [$this, 'pregReplace']),
            new TwigFilter('markup_attrs', [$this, 'markupAttrs']),
            new TwigFilter('time_diff', [$this, 'timeDiff'], ['needs_environment' => true]),
            new TwigFilter('avatar', [$this, 'avatar']),
            new TwigFilter('event_type', [$this, 'eventType']),
            new TwigFilter('crosslink_type', [$this, 'crosslinkType']),
            new TwigFilter('date_range', [$this, 'dateRange'])
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

    /**
     * Filters for converting dates to a time ago string like Facebook and Twitter has.
     * Source: https://github.com/twigphp/Twig-extensions/ (archived)
     *
     * @param string|DateTime $date a string or DateTime object to convert
     * @param string|DateTime $now A string or DateTime object to compare with. If none given, the current time will be used.
     *
     * @return string the converted time
     */
    public function timeDiff(Environment $env, $date, $now = null)
    {
        // Convert both dates to DateTime instances.
        $date = twig_date_converter($env, $date);
        $now  = twig_date_converter($env, $now);

        // Get the difference between the two DateTime objects.
        $diff = $date->diff($now);

        // Check for each interval if it appears in the $diff object.
        foreach (self::$units as $attribute => $unit) {
            $count = $diff->$attribute;

            if (0 !== $count) {
                return $this->getPluralizedInterval($count, $diff->invert, $unit);
            }
        }

        return '';
    }

    private function getPluralizedInterval($count, $invert, $unit)
    {
        if ($this->translator) {
            $id = sprintf('diff.%s.%s', $invert ? 'in' : 'ago', $unit);

            return $this->translator->transChoice($id, $count, ['%count%' => $count], 'date');
        }

        if (1 !== $count) {
            $unit .= 's';
        }

        return $invert ? "in $count $unit" : "$count $unit ago";
    }

    /**
     * Get the avatar URL corresponding to an email address
     *
     * @param string      $email email address to retrieve the corresponding avatar for
     * @param string|null $size size of the avatar, can be 'sm', 'tn' or null for default size
     *
     * @return string
     */
    public function avatar(string $email, string $size = null): string
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
            case 'global':
            case 'ac-meeting':
            case 'tpac-meeting':
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
     * @param string $sectionHandle - Craft section handle
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

    public function dateRange(array $event, string $locale): string
    {
        if ($locale == 'en') {
            $locale = 'en-GB';
        }

        $tz        = $event['tz'];
        $start     = DateTimeImmutable::createFromMutable($event['start'])->setTimezone(new DateTimeZone($tz));
        $end       = DateTimeImmutable::createFromMutable($event['end'])->setTimezone(new DateTimeZone($tz));
        $startDate = $this->intl->formatDate($this->twig, $start, 'long', '', $tz, 'gregorian', $locale);
        $startTime = $this->intl->formatTime($this->twig, $start, 'short', '', $tz, 'gregorian', $locale);
        $endDate   = $this->intl->formatDate($this->twig, $end, 'long', '', $tz, 'gregorian', $locale);
        $endTime   = $this->intl->formatTime($this->twig, $end, 'short', '', $tz, 'gregorian', $locale);
        $sameDay   = $start->format('Y-m-d') === $end->format('Y-m-d');

        //$timezone = $this->intl->getTimezoneName($tz, $locale);

        return $this->translator->trans(
            'events.date_range',
            [
                'start_date' => $startDate,
                'start_time' => $startTime,
                'end_date'   => $endDate,
                'end_time'   => $endTime,
                'timezone'   => $tz,
                'same_day'   => $sameDay
            ],
            'w3c_website_templates_bundle'
        );
    }
}
