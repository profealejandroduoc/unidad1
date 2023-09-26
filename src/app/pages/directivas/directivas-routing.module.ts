import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DirectivasPage } from './directivas.page';

const routes: Routes = [
  {
    path: '',
    component: DirectivasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DirectivasPageRoutingModule {}
