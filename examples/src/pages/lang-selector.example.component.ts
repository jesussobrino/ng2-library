import {Component} from '@angular/core';
import {Language} from "mt-components";

@Component({
    template: `
        <div style="padding:1em">
            <h1>Language selector.</h1>
            <h3>Receives an array of Languages and emits an event when the language is changed.</h3>
            <p>Selected language: <strong>{{selectedLanguage}}</strong></p>
            <mt-lang-selector [languages]="appLanguages" (languageChange)="onLanguageChanged($event)"></mt-lang-selector>
        </div>`
})
export class LangSelectorExampleComponent {
    selectedLanguage:string = 'en';

    appLanguages: Language[] = [
        {
            value: 'en',
            selected: this.selectedLanguage == 'en',
            name: 'English',
            flagClass:'flag flag-us'
        },
        {
            value: 'es',
            selected: this.selectedLanguage == 'es',
            name: 'Español',
            flagClass:'flag flag-es'
        }
    ];

    onLanguageChanged(selectedLanguageValue: string) {
        this.selectedLanguage = selectedLanguageValue;
    }
}
