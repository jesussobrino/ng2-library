import {Component, ChangeDetectionStrategy} from '@angular/core';
import {Language} from "mt-components";

@Component({
    selector: 'home',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles:[`.home-container { padding: 1em 2em; }`],
    template: `
        <div class="home-container">
            <h1>Components container example</h1>
            <h3>This page is to demonstrate how you can include the components in your angular 2 application</h3>
            <ul>
                <li>
                    <h4>Just a simple hello world component</h4>
                    <mt-hello-world></mt-hello-world>            
                </li>
                <li>
                    <h4>A language selector. Receives an array of Languages and emits an event when the language is changed</h4>
                    <mt-lang-selector [languages]="appLanguages" (languageChange)="onLanguageChanged($event)"></mt-lang-selector>
                </li>
            </ul>
        </div>
    `,
})
export class HomeComponent {
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
