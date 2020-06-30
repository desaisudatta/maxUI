import { NgModule } from '@angular/core';
import { SampleComponent } from "../components/sample/sample.component";

@NgModule({
    declarations:[SampleComponent],
    exports:[SampleComponent]
})

export class ComponentsModule{}