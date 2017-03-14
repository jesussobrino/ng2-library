import {Component} from '@angular/core';

@Component({
    selector: 'mt-hello-world',
    styles: [`h1 { color: #0042B7; }`],
    template: `<div>
                  <h1 (click)="onClick()">{{message}}</h1>
               </div>`
})
export class HelloWorldComponent {

    message = "Click me ...";

    onClick() {
        this.message = "Hello World!";
        console.log(this.message);
    }

}
