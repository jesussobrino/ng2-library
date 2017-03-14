export class Language {
    /**
     * Two letters code as defined in ISO-639-1.
     */
    value: string;

    /**
     * Language name that will be shown in the language selector
     */
    name: string;

    /**
     * Indicates if this language is selected
     */
    selected: boolean;

    /**
     * Values must be "flag flag-[twoLettersLangCode]".
     *
     * Possible values are:
     * flag-es,
     * flag-se,
     * flag-is,
     * flag-pl,
     * flag-no,
     * flag-pt,
     * flag-cz,
     * flag-th,
     * flag-us,
     * flag-ro,
     * flag-dk,
     * flag-gr,
     * flag-nl,
     * flag-br,
     * flag-de,
     * flag-fi,
     * flag-it,
     * flag-jp,
     * flag-bg,
     * flag-ru,
     * flag-ch,
     * flag-cn,
     * flag-gb,
     * flag-fr.
     *
     * Examples. Spanish: "lang lang-es", English: "lang lang-us", Norwegian: "lang lang-no"
     */
    flagClass: string;
}
