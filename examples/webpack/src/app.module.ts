import {HttpModule} from "@angular/http";
import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {RouterModule} from "@angular/router";
import {HomeComponent} from "./home.component";

import {HelloWorld} from "mt-components";
import {LangSelectorComponent} from "mt-components";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule.forRoot([
            {path: '', component: HomeComponent}
        ]),
    ],
    declarations: [AppComponent, HomeComponent, HelloWorld, LangSelectorComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
