import {Component, Input, Output, EventEmitter, OnInit} from "@angular/core";
import {Language} from "./language.model";

@Component({
    selector: 'mt-lang-selector',
    styleUrls: ['./lang-selector.component.css'],
    template: require('./lang-selector.component.html')
})
export class LangSelectorComponent implements OnInit{

    @Input() languages:Language[];
    @Output() languageChange = new EventEmitter<any>();
    showLanguages:boolean=false;
    selected:Language = null;


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
