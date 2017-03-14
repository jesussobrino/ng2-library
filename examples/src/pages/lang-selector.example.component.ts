import {Component} from '@angular/core';
import {Language} from "mt-components";

@Component({
    template: `
        <h4>A language selector. Receives an array of Languages and emits an event when the language is changed</h4>
        <mt-lang-selector [languages]="appLanguages" (languageChange)="onLanguageChanged($event)"></mt-lang-selector>`
})
export class LangSelectorExampleComponent {
    appLanguages: Language[] = [
        {
            value: 'en',
            selected: true,
            name: 'English',
            flagClass:'flag flag-us'
        },
        {
            value: 'es',
            selected: false,
            name: 'Español',
            flagClass:'flag flag-es'
        }
    ];

    onLanguageChanged(selectedLanguageValue: string) {
        console.log('Language changed to: ', selectedLanguageValue)
    }
}
