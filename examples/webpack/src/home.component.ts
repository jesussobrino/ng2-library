import {Component, ChangeDetectionStrategy} from '@angular/core';

@Component({
    selector: 'home',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <div>
            <hello-world></hello-world>
        </div>
    `,
})
export class HomeComponent {
}
