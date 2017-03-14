import {Component, ChangeDetectionStrategy} from '@angular/core';

@Component({
    selector: 'my-app',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <div class="app-routes">
            <a [routerLink]="['']">Home</a>
            <a [routerLink]="['/hello-world']">Hello world</a>
            <a [routerLink]="['/lang-selector']">Language selector</a>
        </div>
        <router-outlet></router-outlet>`,
})
export class AppComponent {

}
