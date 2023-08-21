import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pagina2Page } from './pagina2.page';

const routes: Routes = [
  {
    path: '',
    component: Pagina2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pagina2PageRoutingModule {}
