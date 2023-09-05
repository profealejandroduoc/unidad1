import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlertasPage } from './alertas.page';

const routes: Routes = [
  {
    path: '',
    component: AlertasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlertasPageRoutingModule {}
