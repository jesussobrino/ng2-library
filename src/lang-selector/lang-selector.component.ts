import {Component, Input, Output, EventEmitter, OnInit} from "@angular/core";
import {Language} from "./language.model";

@Component({
    selector: 'mt-lang-selector',
    styles: [`
                .lang-selector {
                    width: 150px;
                    text-align: left;
                }
                
                .lang-selector__button {
                    border: 1px solid #ddd;
                    padding: 1em;
                    background: none;
                    box-shadow: none;
                    width: 100%;
                    text-align: left;
                    position: relative;
                }
                
                .lang-selector__button:focus {
                    outline: none;
                }
                
                .lang-selector__button .caret {
                    display: inline-block;
                    width: 0;
                    height: 0;
                    margin-left: 10px;
                    border-top: 5px dashed #888;
                    border-right: 5px solid transparent;
                    border-left: 5px solid transparent;
                    transition: all .3s ease;
                    position: absolute;
                    top: 42%;
                    right: 10px;
                }
                
                .lang-selector__button .caret .open {
                    transform: rotate(-180deg);
                }
                
                .lang-selector__options {
                    display: none;
                    border: 1px solid #ddd;
                    transform: scale(0);
                    opacity: 0;
                    transition: transform .3s ease-in-out, opacity .3s ease-in-out;
                    width: 100%;
                    margin: 0;
                    padding: 0;
                    list-style: none;
                
                }
                
                .lang-selector__options li {
                    padding: .4em 1em;
                }
                
                .lang-selector__options li:hover {
                    cursor: pointer;
                    background-color: #ddd;
                }
                
                .lang-selector__options.active {
                    display: block;
                    transform: scale(1);
                    opacity: 1;
                    animation: anim .3s ease-in-out;
                }
                
                
                /*!
                 * Generated with CSS Flag Sprite generator (https://www.flag-sprites.com/)
                 */
                
                .flag {
                    display: inline-block;
                    width: 16px;
                    height: 11px;
                    margin-right: 10px;
                    background-image: url("data:image/svg+xml;charset=utf8,%3C?xml version='1.0' encoding='UTF-8' standalone='no'?%3E %3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sodipodi='http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd' xmlns:inkscape='http://www.inkscape.org/namespaces/inkscape' id='svg4136' version='1.1' width='80' height='55' viewBox='0 0 80 55' sodipodi:docname='flags.svg'%3E %3Cdefs id='defs4140' /%3E %3Cimage width='80' height='55' preserveAspectRatio='none' style='image-rendering:optimizeQuality' xlink:href='data:image/png;base64,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 ' id='image4144' x='0' y='0' /%3E %3C/svg%3E ");
                }
                
                .flag.flag-es {
                    background-position: -32px -11px;
                }
                
                .flag.flag-se {
                    background-position: -16px -44px;
                }
                
                .flag.flag-is {
                    background-position: -32px -22px;
                }
                
                .flag.flag-pl {
                    background-position: -32px -33px;
                }
                
                .flag.flag-no {
                    background-position: -16px -33px;
                }
                
                .flag.flag-pt {
                    background-position: -48px -33px;
                }
                
                .flag.flag-cz {
                    background-position: -64px 0;
                }
                
                .flag.flag-th {
                    background-position: -32px -44px;
                }
                
                .flag.flag-us {
                    background-position: -48px -44px;
                }
                
                .flag.flag-ro {
                    background-position: -64px -33px;
                }
                
                .flag.flag-dk {
                    background-position: -16px -11px;
                }
                
                .flag.flag-gr {
                    background-position: -16px -22px;
                }
                
                .flag.flag-nl {
                    background-position: 0 -33px;
                }
                
                .flag.flag-br {
                    background-position: -16px 0;
                }
                
                .flag.flag-de {
                    background-position: 0 -11px;
                }
                
                .flag.flag-fi {
                    background-position: -48px -11px;
                }
                
                .flag.flag-it {
                    background-position: -48px -22px;
                }
                
                .flag.flag-jp {
                    background-position: -64px -22px;
                }
                
                .flag.flag-bg {
                    background-position: 0 0;
                }
                
                .flag.flag-ru {
                    background-position: 0 -44px;
                }
                
                .flag.flag-ch {
                    background-position: -32px 0;
                }
                
                .flag.flag-cn {
                    background-position: -48px 0;
                }
                
                .flag.flag-gb {
                    background-position: 0 -22px;
                }
                
                .flag.flag-fr {
                    background-position: -64px -11px;
                }
                
                @keyframes anim {
                    0% {
                        display: none;
                        opacity: 0;
                    }
                    1% {
                        display: block;
                        opacity: 0;
                        transform: scale(0);
                    }
                    100% {
                        opacity: 1;
                        transform: scale(1);
                    }
                }
`],
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
export class LangSelectorComponent implements OnInit{

    /**
     * Input: Array of languages that will be shown in the languages selector.
     */
    @Input() languages:Language[];
    /**
     * Output: Event emmited when a language is selected.
     */
    @Output() languageChange = new EventEmitter<any>();

    private showLanguages:boolean=false;
    private selected:Language = null;


    ngOnInit(): void {
        if(!this.languages || this.languages.length == 0){
            console.warn('No languages were passed to the LangSelectorComponent!');
            return
        }
        this.selected = this.languages.find((elem)=>elem.selected);
    }

    onChangeLanguage(selected: Language){
        this.selected = selected;
        this.languageChange.emit(selected.value);
        this.showLanguages = false;
    }

}
