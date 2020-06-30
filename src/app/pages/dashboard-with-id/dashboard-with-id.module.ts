import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardWithIdPageRoutingModule } from './dashboard-with-id-routing.module';

import { DashboardWithIdPage } from './dashboard-with-id.page';

//Component
import { ComponentsModule } from "../../components/components.module";

//Language set
import { TranslateModule } from "@ngx-translate/core";

//Pipe Test
import { PipesModule } from "../../pipes/pipes.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    DashboardWithIdPageRoutingModule,
    PipesModule,
    TranslateModule
  ],
  declarations: [DashboardWithIdPage]
})
export class DashboardWithIdPageModule {}
