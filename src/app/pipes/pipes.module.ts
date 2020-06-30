import { NgModule } from '@angular/core';
import {SamplePipe} from './sample/sample.pipe'

@NgModule({
declarations: [SamplePipe],
imports: [],
exports: [SamplePipe],
})

export class PipesModule {}