import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { ApiProvider } from './../../providers/api/api';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  users: any[];

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public ApiProvider: ApiProvider) {

  }

  ionViewDidEnter() {
    this.users = [];
    this.getUsers();
  }
  getUsers() {
    var users = [];
    for (var i = 0; i < localStorage.length; i++) {
      if (localStorage.getItem(localStorage.key(i)).length > 0) {
        if (localStorage.key(i) != 'token' && localStorage.key(i) != 'ionic_lastdevices') {
          this.users.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
  }

  addCardSUS() {
    const prompt = this.alertCtrl.create({
      title: 'Adicionar cartão SUS',
      message: "Entre com o cartão SUS do paciente",
      inputs: [
        {
          name: 'nlCard',
          placeholder: 'Número'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
          }
        },
        {
          text: 'Adicionar',
          handler: data => {
            this.ApiProvider.getCardSUS(data['nlCard']);
          }
        }
      ],
      cssClass: 'alert-list'
    });
    prompt.present();
  }

}
