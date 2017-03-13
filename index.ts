import {NgModule} from "@angular/core";

// export * from "./src/hello-world";
// export * from "./src/lang-selector/lang-selector.component"

import { HelloWorld } from "./src/hello-world"
import { LangSelectorComponent } from "./src/lang-selector/lang-selector.component"


@NgModule({
    exports: [
        HelloWorld,
        LangSelectorComponent
    ]
})
export class MtComponentsModule {

}
