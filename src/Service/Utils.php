<?php

namespace W3C\WebsiteTemplatesBundle\Service;

class Utils
{
    public function stripGroupType(string $name)
    {
        return preg_replace(
            '/\s+(((working|community|business|interest|incubator|coordination|other)\s+group)' .
            '|(task\s+force)|(function)|(ecosystem))/i',
            '',
            $name
        );
    }
}
