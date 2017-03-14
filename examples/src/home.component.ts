import {Component, ChangeDetectionStrategy} from '@angular/core';

@Component({
    selector: 'home',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles:[`.home-container { padding: 1em 2em; }`],
    template: `
        <div class="home-container">
            <h1>Components container example</h1>
            <h4>This page is to demonstrate how you can include the components in your angular 2 application</h4>
            <p>Click on any of the above links to load component example pages</p>
        </div>
    `,
})
export class HomeComponent {}
