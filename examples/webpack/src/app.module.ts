import {HttpModule} from "@angular/http";
import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {RouterModule} from "@angular/router";
import {HomeComponent} from "./home.component";
import {MtComponentsModule} from "mt-components";


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        MtComponentsModule,
        RouterModule.forRoot([
            {path: '', component: HomeComponent}
        ]),
    ],
    declarations: [AppComponent, HomeComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
