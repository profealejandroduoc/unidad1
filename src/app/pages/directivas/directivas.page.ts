import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.page.html',
  styleUrls: ['./directivas.page.scss'],
})
export class DirectivasPage implements OnInit {

  constructor() { }

  numero=10;
  otronumero=5;
  nombres=['Wacoldo','Diogenes','Ladislao'];
  persona1={
    nombre:'Wacoldo',
    apellido:'Soto',
    edad:23
  }

  persona2={
    nombre:'Diogenes',
    apellido:'Carrasco',
    edad:45
  }

  personas=[this.persona1,this.persona2];

  

  ngOnInit() {


  }

}
