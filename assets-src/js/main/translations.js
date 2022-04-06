const translate = {
    'translations': { //microcopy translations
        'ar': {
            'admin': '__admin',
            'backToMainMenu': '__backToMainMenu',
            'cancelReply': '__cancelReply',
            'controlsDescription': '__controlsDescription',
            'logged-in': '__logged-in',
            'logout': '__logout',
            'member-site': '__member-site',
            'menu': '__menu',
            'my-account': '__my-account',
            'my-calendar': '__my-calendar',
            'nextSlide': '__nextSlide',
            'previousSlide': '__previousSlide',
            'sliderDescription': '__sliderDescription',
            'slideText': '__Slide {x} of {y}',
            'team-site': '__team-site'
        },
        'de': {
            'admin': '__admin',
            'backToMainMenu': '__backToMainMenu',
            'cancelReply': '__cancelReply',
            'controlsDescription': '__controlsDescription',
            'logged-in': '__logged-in',
            'logout': '__logout',
            'member-site': '__member-site',
            'menu': '__menu',
            'my-account': '__my-account',
            'my-calendar': '__my-calendar',
            'nextSlide': '__nextSlide',
            'previousSlide': '__previousSlide',
            'sliderDescription': '__sliderDescription',
            'slideText': '__Slide {x} of {y}',
            'team-site': '__team-site'
        },
        'en': {
            'admin': 'Admin',
            'backToMainMenu': 'Back to main menu',
            'cancelReply': 'Cancel reply',
            'controlsDescription': 'carousel controls',
            'logged-in': 'logged in',
            'logout': 'Logout',
            'member-site': 'Member site',
            'menu': 'Menu',
            'my-account': 'My account',
            'my-calendar': 'My calendar',
            'nextSlide': 'next slide',
            'previousSlide': 'previous slide',
            'sliderDescription': 'carousel',
            'slideText': 'Slide {x} of {y}',
            'team-site': 'Team site',
        },
        'es': {
            'admin': '__admin',
            'backToMainMenu': '__backToMainMenu',
            'cancelReply': '__cancelReply',
            'controlsDescription': '__controlsDescription',
            'logged-in': '__logged-in',
            'logout': '__logout',
            'member-site': '__member-site',
            'menu': '__menu',
            'my-account': '__my-account',
            'my-calendar': '__my-calendar',
            'nextSlide': '__nextSlide',
            'previousSlide': '__previousSlide',
            'sliderDescription': '__sliderDescription',
            'slideText': '__Slide {x} of {y}',
            'team-site': '__team-site'
        },
        'fr': {
            'admin': '__admin',
            'backToMainMenu': '__backToMainMenu',
            'cancelReply': '__cancelReply',
            'controlsDescription': '__controlsDescription',
            'logged-in': '__logged-in',
            'logout': '__logout',
            'member-site': '__member-site',
            'menu': '__menu',
            'my-account': '__my-account',
            'my-calendar': '__my-calendar',
            'nextSlide': '__nextSlide',
            'previousSlide': '__previousSlide',
            'sliderDescription': '__sliderDescription',
            'slideText': '__Slide {x} of {y}',
            'team-site': '__team-site'
        },
        'hu': {
            'admin': '__admin',
            'backToMainMenu': '__backToMainMenu',
            'cancelReply': '__cancelReply',
            'controlsDescription': '__controlsDescription',
            'logged-in': '__logged-in',
            'logout': '__logout',
            'member-site': '__member-site',
            'menu': '__menu',
            'my-account': '__my-account',
            'my-calendar': '__my-calendar',
            'nextSlide': '__nextSlide',
            'previousSlide': '__previousSlide',
            'sliderDescription': '__sliderDescription',
            'slideText': '__Slide {x} of {y}',
            'team-site': '__team-site'
        },
        'ja': {
            'admin': '__admin',
            'backToMainMenu': '__backToMainMenu',
            'cancelReply': '__cancelReply',
            'controlsDescription': '__controlsDescription',
            'logged-in': '__logged-in',
            'logout': '__logout',
            'member-site': '__member-site',
            'menu': '__menu',
            'my-account': '__my-account',
            'my-calendar': '__my-calendar',
            'nextSlide': '__nextSlide',
            'previousSlide': '__previousSlide',
            'sliderDescription': '__sliderDescription',
            'slideText': '__Slide {x} of {y}',
            'team-site': '__team-site'
        },
        'pt-br': {
            'admin': '__admin',
            'backToMainMenu': '__backToMainMenu',
            'cancelReply': '__cancelReply',
            'controlsDescription': '__controlsDescription',
            'logged-in': '__logged-in',
            'logout': '__logout',
            'member-site': '__member-site',
            'menu': '__menu',
            'my-account': '__my-account',
            'my-calendar': '__my-calendar',
            'nextSlide': '__nextSlide',
            'previousSlide': '__previousSlide',
            'sliderDescription': '__sliderDescription',
            'slideText': '__Slide {x} of {y}',
            'team-site': '__team-site'
        },
        'zh-hans': {
            'admin': '__admin',
            'backToMainMenu': '__backToMainMenu',
            'cancelReply': '__cancelReply',
            'controlsDescription': '__controlsDescription',
            'logged-in': '__logged-in',
            'logout': '__logout',
            'member-site': '__member-site',
            'menu': '__menu',
            'my-account': '__my-account',
            'my-calendar': '__my-calendar',
            'nextSlide': '__nextSlide',
            'previousSlide': '__previousSlide',
            'sliderDescription': '__sliderDescription',
            'slideText': '__Slide {x} of {y}',
            'team-site': '__team-site'
        }
    },
    //snippetReference = index of micro copy snippet in translations object above
    //languageCode = code of the target language
    //injection = object of values to inject into the string if interpolation is required, object keys should match references in the translations snippets,
    // e.g. 'Slide {x} of {y} requires an object with keys x and y.
    'translate': function(snippetReference, languageCode, injections = {}) {
        //without a snippet reference, we don't know what to translate
        if (snippetReference === undefined || snippetReference === null || snippetReference.length < 1 ) {
            return;
        }

        //language code defaults to English
        if (languageCode === undefined || languageCode === null || this.translations[languageCode] === undefined) {
            languageCode = 'en';
        }

        var translatedString = this['translations'][languageCode][snippetReference];

        var injectionsKeys = Object.keys(injections);
        if (injectionsKeys.length > 0) {
            for(var keyIndex = 0; keyIndex < injectionsKeys.length; keyIndex++) {
                translatedString = translatedString.replace(new RegExp('\\{' + injectionsKeys[keyIndex] + '\\}', 'gm'), injections[injectionsKeys[keyIndex]]);
            }
        }
        return translatedString;
    }
};

export {translate}