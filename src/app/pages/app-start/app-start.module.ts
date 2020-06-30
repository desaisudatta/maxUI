import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppStartPageRoutingModule } from './app-start-routing.module';

import { AppStartPage } from './app-start.page';

//Component
import { ComponentsModule } from "../../components/components.module";
import { from } from 'rxjs';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    AppStartPageRoutingModule
  ],
  declarations: [AppStartPage]
})
export class AppStartPageModule {}
