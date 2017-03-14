import {Component, ChangeDetectionStrategy} from '@angular/core';

@Component({
    selector: 'home',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles:[`
        .home { padding: 1em }
    `],
    template: `
        <div class="home">
            <h1>Components container example</h1>
            <h2>This page is to demonstrate how you can include the components in your angular 2 application</h2>
            <p>Click on any of the above links to load component example pages</p>
        </div>
    `,
})
export class HomeComponent {}
