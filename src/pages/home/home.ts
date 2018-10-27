import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { ApiProvider } from './../../providers/api/api';
import { TiposExamesPage } from '../tipos-exames/tipos-exames'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  users: any[];

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public ApiProvider: ApiProvider) {

  }

   delay (ms: number) {
    return new Promise<void>(function(resolve) {
        setTimeout(resolve, ms);
    });
}
  async ionViewDidEnter(){
    this.users = [];
    await this.delay(1000);
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
              this.ionViewDidEnter();
            }
          }
      ],
      cssClass: 'alert-list'
    });
    prompt.present();
  }
  
  irParaExames(matricula : string){
    this.navCtrl.push(TiposExamesPage,{
      matricula_id : matricula
    });
  }

}
