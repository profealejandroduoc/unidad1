import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.page.html',
  styleUrls: ['./alertas.page.scss'],
})
export class AlertasPage implements OnInit {

  constructor(private alertController:AlertController) { }


  
  ngOnInit() {
  }

 ionViewWillEnter() {
  console.log("Antes de entrar a la página")
  
 }

 ionViewDidEnter() {
  console.log("Ya entró a la página");
 }

 ionViewWillLeave() {
  console.log("Me voy de la página");
 }

 ionViewDidLeave() {
  console.log("Ya no estoy en la página");
 }

  async presentAlert(msg:string) {
    const alert = await this.alertController.create({
      header: 'Alerta',
      subHeader: 'Información',
      message: msg,
      buttons: ['OK','Cancel'],
      backdropDismiss:false,
      
    });

    await alert.present();

    await alert.onDidDismiss()
    {
      console.log("Cerrando la alerta") 
    }
  }
}
