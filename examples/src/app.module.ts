import {HttpModule} from "@angular/http";
import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {RouterModule} from "@angular/router";
import {HomeComponent} from "./home.component";
import {HelloWorldExampleComponent} from "./pages/hello-world.example.component";
import {LangSelectorExampleComponent} from "./pages/lang-selector.example.component";

import {HelloWorldComponent} from "mt-components";
import {LangSelectorComponent} from "mt-components";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule.forRoot([
            {path: '', component: HomeComponent},
            {path: '/hello-world', component: HelloWorldExampleComponent},
            {path: '/lang-selector', component: LangSelectorExampleComponent}
        ]),
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        HelloWorldComponent,
        HelloWorldExampleComponent,
        LangSelectorComponent,
        LangSelectorExampleComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
