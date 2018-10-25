import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

    addCardSUS() {
      const prompt = this.alertCtrl.create({
        title: 'Adicionar cartão SUS',
        message: "Entre com o cartão SUS do paciente",
        inputs: [
          {
            name: 'Número do cartão',
            placeholder: 'Número'
          },
        ],
        buttons: [
          {
            text: 'Cancelar',
            handler: data => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Adicionar',
            handler: data => {
              console.log('Saved clicked');
            }
          }
        ]
      });
      prompt.present();
    }

}
