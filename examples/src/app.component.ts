import {Component, ChangeDetectionStrategy} from '@angular/core';

@Component({
    selector: 'my-app',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles:[`.app-content { padding: 1em 2em; }`],
    template: `
        <div class="app-routes">
            <a [routerLink]="['']">Home</a>
            <a [routerLink]="['/hello-world']">Hello world</a>
            <a [routerLink]="['/lang-selector']">Language selector</a>
        </div>
        <div class="app-content">
            <router-outlet></router-outlet>
        </div>`,
})
export class AppComponent {

}
