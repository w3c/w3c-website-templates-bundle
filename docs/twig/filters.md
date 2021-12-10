# Twig Filters

A number of Twig filters are defined in `W3C\WebsiteTemplatesBundle\Twig\TwigExtension`. These filters are:

## `preg_replace`

The `preg_replace` filter formats a string by performing a [preg_replace](https://www.php.net/manual/en/function.preg-replace.php) on it.

Arguments:
 - `pattern`: same as PHP `$pattern` argument
 - `replacement`: same as PHP `$replacement` argument
 - `limit` (optional): same as PHP `limit` argument

## `markup_attrs`

The `markup_attrs` filter formats a string of XML (or similar well-formed markup language) by adding or replacing 
attributes to/from its root element. 

```twig
{{ xml|markup_attrs({
    'aria-hidden': 'true',
    'class': 'icon icon--larger',
    'focusable': 'false',
    'height': '1em',
    'width': '1em'
})|raw }}
```

Arguments:
 - `attrs`: a hash where keys are the attribute names and values are the attribute values

## `avatar`

The `avatar` filter transforms an email address into a URL of the avatar of the W3C user corresponding to this email.

```twig
{{ 'foo@bar.com'|avatar('sm')
```

Arguments:
 - `size` (optional): one of 'tn' (thumbnail) or 'sm' (small)

## `event_type`

The `event_type` filter transforms an event (represented as an array) into its type as an HTML class.

Arguments:
 - `event`: an array containing at least the key `['type']['slug']`

## `crosslink_type`

The `crosslink_type` filter transform a Craft section handle into a translatable string reference, useful in crosslink
cards which indicate the type of content at the bottom.

Arguments:
 - `category`: a string representing a Craft section handle

## `date_range`

The `date_range` filter transforms an event (represented as an array) into its formatted start and end dates.

Arguments:
 - `event`: an array representing an event, with at least the keys `start` (`DateTime`), `end`(`DateTime`) and `tz`
   (string representation of a timezone) 
 - `locale`: locale to use to format the range
 - `utc` (optional, default `false`): whether to use UTC instead of the event timezone
