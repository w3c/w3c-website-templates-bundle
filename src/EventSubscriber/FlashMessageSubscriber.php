<?php

namespace W3C\WebsiteTemplatesBundle\EventSubscriber;

use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpKernel\Event\ResponseEvent;
use Symfony\Component\HttpKernel\HttpKernelInterface;
use Symfony\Component\HttpKernel\KernelEvents;
use Symfony\Contracts\Translation\TranslatorInterface;

class FlashMessageSubscriber implements EventSubscriberInterface
{
    private RequestStack $requestStack;
    private TranslatorInterface $translator;

    public function __construct(RequestStack $requestStack, TranslatorInterface $translator)
    {
        $this->requestStack = $requestStack;
        $this->translator   = $translator;
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
         // @todo remove this when we drop support for SF4, see https://github.com/symfony/http-kernel/blob/7.1/CHANGELOG.md#53
        if (defined('HttpKernelInterface::MASTER_REQUEST') && HttpKernelInterface::MASTER_REQUEST !== $event->getRequestType()) {
            return;
        }

        if (defined('HttpKernelInterface::MAIN_REQUEST') && HttpKernelInterface::MAIN_REQUEST !== $event->getRequestType()) {
            return;
        }

        // @todo getSession() was introduced in SF5, remove this when we drop support for SF4
        if (method_exists($this->requestStack, 'getSession')) {
            $session = $this->requestStack->getSession();
        } else {
            if ((null !== $request = $this->requestStack->getCurrentRequest()) && $request->hasSession()) {
                $session = $request->getSession();
            } else {
                return;
            }
        }

        // Flash messages are stored in the session. If there is none, there
        // can't be any flash messages in it. $session->getFlashBag() would
        // create a session, we need to avoid that.
        if (!$session->isStarted()) {
            return;
        }

        $flashBag = $session->getFlashBag();
        // Use peekAll because we want to keep existing messages in the bag
        $flashes  = $flashBag->peekAll();

        if (empty($flashes)) {
            return;
        }

        $titleKeys = [
            'success' => 'successes',
            'warning' => 'warnings',
            'error'   => 'errors',
            'info'    => 'info'
        ];

        $existingTitles = array_keys(
            array_filter(
                $flashes,
                fn(string $key) => strpos($key, 'title-') === 0,
                ARRAY_FILTER_USE_KEY
            )
        );

        foreach(array_keys($flashes) as $type) {
            // $type is not a title and its corresponding title doesn't already exist
            if (
                strpos($type, 'title-') === false &&
                !in_array('title-' . $type, $existingTitles) &&
                array_key_exists($type, $titleKeys)
            ) {
                $flashBag->add(
                    'title-' . $type,
                    $this->translator->trans('notes.' . $titleKeys[$type] . '.default_title', [], 'w3c_website_templates_bundle')
                );
                $existingTitles[] = 'title-' . $type;
            }
        }
    }
}
