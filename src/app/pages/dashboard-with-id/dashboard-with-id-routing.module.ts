import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardWithIdPage } from './dashboard-with-id.page';

const routes: Routes = [
  {
    path: ':id',
    component: DashboardWithIdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class DashboardWithIdPageRoutingModule {}
