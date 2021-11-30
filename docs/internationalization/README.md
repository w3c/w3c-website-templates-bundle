# Internationalization
All micro-copy in the templates and JS scripts are translatable.

## Templates micro-copy
Translations of the micro-copy of the templates can be found in the `translations` folder. There is one file per language. 
File names follow the pattern `w3c_website_templates_bundle_intl-icu.{lc}.yaml` where `{lc}` is the language code.

If you need to add a snippet of text, make sure you add it to the file for each language.

If you need to add a language, make sure you create the corresponding file and copy and paste the contents of the English 
translation file in it as a starting point.

## JS scripts micro-copy
Translations of the micro-copy required in JS scripts can be found in the `assets-src/js/main/translations.js` file.

The file defined a 'translate' object that holds:
* 'translations' - a JSON object that contains the translated strings
* the 'translate' function, that allows translating snippets of text; it does perform interpolation if needed.

### Structure of the `translate.translations` object

`````javascript
const translate = {
    'translations': {
        '<lc>': {
            '<snippet_reference>': '<translated_string>'
        }
    },
    ...
};
`````

Where:
* `<lc>` - is the language code
* `<snippet_reference>` - is a string that reference a specific snippet of text
* '<translated_string>' - the translated piece of text. Interpolation (injection of variables) is possible. Variables need to be defined
using curly braces, e.g. 'Hello {name}'.

For example, the translation of the 'menu' micro-copy in French is in `translate.translations.fr.menu`

To add a new language, please add a new property to the `translate.translations` JSON object, using the language code as its key.

### Using the `translate` object in scripts
If you are writing or editing a JS script and need to include micro-copy:

* Import the `translate` object at the top of the script: `import {translate} from .<relative_path_to_the_js_main_folder>/translations`
* Add any new snippet of text required to the `translate.translations` JSON object. Choose a snippet reference that makes it as clear as possible
what the snippet of text is for. Make sure to add the snippet of text using the same snippet reference to each language object. If you need to inject
variables in the 
* Get your translated snippet of text in the script using the syntax:

````javascript
translate.translate(<snippet_reference>, <lc>, {'var1': <variable1>, ... 'varn': <variablen>})`
````

where:
* '<snippet_reference>' is a string that is the name/reference of the snippet of text you want to translate
* '<lc>' is the target language code
* the last (optional) variable is an object containing variables to inject into the string. The variable keys must match
variables defined in the string. E.g. to interpolate 'Hello {name}', the variables object must contain a 'name' property (e.g. `{'name': 'Bob'}`)