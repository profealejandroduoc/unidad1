import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncabezadoComponent } from './encabezado/encabezado.component';



@NgModule({
  declarations: [EncabezadoComponent],
  exports:[EncabezadoComponent],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
