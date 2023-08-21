import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pagina1Page } from './pagina1.page';

const routes: Routes = [
  {
    path: '',
    component: Pagina1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pagina1PageRoutingModule {}
