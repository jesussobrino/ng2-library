import {HttpModule} from "@angular/http";
import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {RouterModule} from "@angular/router";
import {HomeComponent} from "./home.component";
import {HelloWorld} from "../../../src/hello-world";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        HelloWorld,
        RouterModule.forRoot([
            {path: '', component: HomeComponent},
            {path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule'}
        ]),
    ],
    declarations: [AppComponent, HomeComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
