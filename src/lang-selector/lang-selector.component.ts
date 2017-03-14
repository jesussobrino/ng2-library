import {Component, Input, Output, EventEmitter, OnInit} from "@angular/core";
import {Language} from "./language.model";

@Component({
    selector: 'mt-lang-selector',
    styleUrls: ['./lang-selector.component.css'],
    template: `
            <div class="lang-selector">
                <button class="lang-selector__button" (click)="showLanguages = !showLanguages">
                    <span [class]="selected.flagClass"></span>
                    <span>{{selected.name}}</span>
                    <span [ngClass]="{'caret': true, 'open':showLanguages}" class="caret"></span>
                </button>
                <ul [ngClass]="{'lang-selector__options': true, 'active':showLanguages}">
                    <li *ngFor="let lang of languages" (click)="onChangeLanguage(lang)">
                        <span [class]="lang.flagClass"></span>
                        <span>{{lang.name}}</span>
                    </li>
                </ul>
            </div>`
})
export class LangSelectorComponent implements OnInit {

    /**
     * Input: Array of languages that will be shown in the languages selector.
     */
    @Input() languages: Language[];
    /**
     * Output: Event emmited when a language is selected.
     */
    @Output() languageChange = new EventEmitter<any>();

    showLanguages: boolean = false;
    selected: Language = null;


    ngOnInit(): void {
        if (!this.languages || this.languages.length == 0) {
            console.warn('No languages were passed to the LangSelectorComponent!');
            return
        }
        this.selected = this.languages.find((elem) => elem.selected);
    }

    onChangeLanguage(selected: Language) {
        this.selected = selected;
        this.languageChange.emit(selected.value);
        this.showLanguages = false;
    }

}
