const translate = {
    'translations': { //microcopy translations
        'ar': {
            'admin': '__admin',
            'backToMainMenu': '__backToMainMenu',
            'cancelReply': '__cancelReply',
            'memberSite': '__memberSite',
            'logout': '__logout',
            'menu': '__menu',
            'myAccount': '__myAccount',
            'myCalendar': '__myCalendar',
            'myOrganization': '__myOrganization',
            'teamSite': '__teamsite',
            'sliderDescription': '__sliderDescription',
            'controlsDescription': '__controlsDescription',
            'previousSlide': '__previousSlide',
            'nextSlide': '__nextSlide',
            'slideText': '__Slide {x} of {y}'
        },
        'de': {
            'admin': '__admin',
            'backToMainMenu': '__backToMainMenu',
            'cancelReply': '__cancelReply',
            'memberSite': '__memberSite',
            'logout': '__logout',
            'menu': '__menu',
            'myAccount': '__myAccount',
            'myCalendar': '__myCalendar',
            'myOrganization': '__myOrganization',
            'teamSite': '__teamsite',
            'sliderDescription': '__sliderDescription',
            'controlsDescription': '__controlsDescription',
            'previousSlide': '__previousSlide',
            'nextSlide': '__nextSlide',
            'slideText': '__Slide {x} of {y}'
        },
        'en': {
            'admin': 'Admin',
            'backToMainMenu': 'Back to main menu',
            'cancelReply': 'Cancel reply',
            'memberSite': 'Member Site',
            'logout': 'Logout',
            'menu': 'Menu',
            'myAccount': 'My Account',
            'myCalendar': 'My Calendar',
            'myOrganization': 'My Organization',
            'teamSite': 'Team Site',
            'sliderDescription': 'carousel',
            'controlsDescription': 'carousel controls',
            'previousSlide': 'previous slide',
            'nextSlide': 'next slide',
            'slideText': 'Slide {x} of {y}'
        },
        'es': {
            'admin': '__admin',
            'backToMainMenu': '__backToMainMenu',
            'cancelReply': '__cancelReply',
            'memberSite': '__memberSite',
            'logout': '__logout',
            'menu': '__menu',
            'myAccount': '__myAccount',
            'myCalendar': '__myCalendar',
            'myOrganization': '__myOrganization',
            'teamSite': '__teamsite',
            'sliderDescription': '__sliderDescription',
            'controlsDescription': '__controlsDescription',
            'previousSlide': '__previousSlide',
            'nextSlide': '__nextSlide',
            'slideText': '__Slide {x} of {y}'
        },
        'fr': {
            'admin': '__admin',
            'backToMainMenu': '__backToMainMenu',
            'cancelReply': '__cancelReply',
            'memberSite': '__memberSite',
            'logout': '__logout',
            'menu': '__menu',
            'myAccount': '__myAccount',
            'myCalendar': '__myCalendar',
            'myOrganization': '__myOrganization',
            'teamSite': '__teamsite',
            'sliderDescription': '__sliderDescription',
            'controlsDescription': '__controlsDescription',
            'previousSlide': '__previousSlide',
            'nextSlide': '__nextSlide',
            'slideText': '__Slide {x} of {y}'
        },
        'hu': {
            'admin': '__admin',
            'backToMainMenu': '__backToMainMenu',
            'cancelReply': '__cancelReply',
            'memberSite': '__memberSite',
            'logout': '__logout',
            'menu': '__menu',
            'myAccount': '__myAccount',
            'myCalendar': '__myCalendar',
            'myOrganization': '__myOrganization',
            'teamSite': '__teamsite',
            'sliderDescription': '__sliderDescription',
            'controlsDescription': '__controlsDescription',
            'previousSlide': '__previousSlide',
            'nextSlide': '__nextSlide',
            'slideText': '__Slide {x} of {y}'
        },
        'ja': {
            'admin': '__admin',
            'backToMainMenu': '__backToMainMenu',
            'cancelReply': '__cancelReply',
            'memberSite': '__memberSite',
            'logout': '__logout',
            'menu': '__menu',
            'myAccount': '__myAccount',
            'myCalendar': '__myCalendar',
            'myOrganization': '__myOrganization',
            'teamSite': '__teamsite',
            'sliderDescription': '__sliderDescription',
            'controlsDescription': '__controlsDescription',
            'previousSlide': '__previousSlide',
            'nextSlide': '__nextSlide',
            'slideText': '__Slide {x} of {y}'
        },
        'pt-br': {
            'admin': '__admin',
            'backToMainMenu': '__backToMainMenu',
            'cancelReply': '__cancelReply',
            'memberSite': '__memberSite',
            'logout': '__logout',
            'menu': '__menu',
            'myAccount': '__myAccount',
            'myCalendar': '__myCalendar',
            'myOrganization': '__myOrganization',
            'teamSite': '__teamsite',
            'sliderDescription': '__sliderDescription',
            'controlsDescription': '__controlsDescription',
            'previousSlide': '__previousSlide',
            'nextSlide': '__nextSlide',
            'slideText': '__Slide {x} of {y}'
        },
        'zh-hans': {
            'admin': '__admin',
            'backToMainMenu': '__backToMainMenu',
            'cancelReply': 'cancelReply',
            'memberSite': '__memberSite',
            'logout': '__logout',
            'menu': '__menu',
            'myAccount': '__myAccount',
            'myCalendar': '__myCalendar',
            'myOrganization': '__myOrganization',
            'teamSite': '__teamsite',
            'sliderDescription': '__sliderDescription',
            'controlsDescription': '__controlsDescription',
            'previousSlide': '__previousSlide',
            'nextSlide': '__nextSlide',
            'slideText': '__Slide {x} of {y}'
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