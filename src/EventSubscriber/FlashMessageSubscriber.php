<?php

namespace W3C\WebsiteTemplatesBundle\EventSubscriber;

use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\HttpKernel\Event\ResponseEvent;
use Symfony\Component\HttpKernel\HttpKernel;
use Symfony\Component\HttpKernel\KernelEvents;
use Symfony\Contracts\Translation\TranslatorInterface;

class FlashMessageSubscriber implements EventSubscriberInterface
{
    private Session $session;
    private TranslatorInterface $translator;

    public function __construct(Session $session, TranslatorInterface $translator)
    {
        $this->session    = $session;
        $this->translator = $translator;
    }

    public static function getSubscribedEvents()
    {
        return [
            // we want that to run early (before the Session->Cookie transformation)
            KernelEvents::RESPONSE => ['onKernelResponse', 10]
        ];
    }

    public function onKernelResponse(ResponseEvent $event)
    {
        if (HttpKernel::MASTER_REQUEST !== $event->getRequestType()) {
            return;
        }

        // Flash messages are stored in the session. If there is none, there
        // can't be any flash messages in it. $session->getFlashBag() would
        // create a session, we need to avoid that.
        if (!$this->session->isStarted()) {
            return;
        }

        $flashBag = $this->session->getFlashBag();
        // Use peekAll because we want to keep existing messages in the bag
        $flashes  = $flashBag->peekAll();

        if (empty($flashes)) {
            return;
        }

        $titleKeys = [
            'success' => 'successes',
            'warning' => 'warnings',
            'error'   => 'errors'
        ];

        $existingTitles = array_keys(
            array_filter(
                $flashes,
                function (string $key) {
                    return strpos($key, 'title-') === 0;
                },
                ARRAY_FILTER_USE_KEY
            )
        );

        foreach(array_keys($flashes) as $type) {
            // $type is not a title and its corresponding title doesn't already exist
            if (strpos($type, 'title-') === false && !in_array('title-' . $type, $existingTitles)) {
                $flashBag->add(
                    'title-' . $type,
                    $this->translator->trans('notes.' . $titleKeys[$type] . '.default_title', [], 'w3c_website_templates_bundle')
                );
                $existingTitles[] = 'title-' . $type;
            }
        }
    }
}
