import {Component, ChangeDetectionStrategy} from '@angular/core';

@Component({
    selector: 'my-app',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles:[`
        .app-routes {float: left; width:20%; background-color: #0042B7; height: 100vh; padding-top: 2em;}
        .app-routes a{ display: block; padding: 1em 1em .5em; color: white; text-decoration: none;}
        .app-routes a:hover{ cursor: pointer; color: #ddd;}
        
        .app-content { float: left; width:80%; }
    `],
    template: `
        <div>
            <div class="app-routes">
                <a [routerLink]="['/']">Home</a>
                <a [routerLink]="['/hello-world']">Hello world</a>
                <a [routerLink]="['/lang-selector']">Language selector</a>
            </div>
            <div class="app-content">
                <router-outlet></router-outlet>
            </div>
        </div>`,
})
export class AppComponent {

}
