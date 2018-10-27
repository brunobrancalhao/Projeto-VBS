import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ApiProvider } from './../../providers/api/api';

/**
 * Generated class for the TiposExamesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tipos-exames',
  templateUrl: 'tipos-exames.html',
})
export class TiposExamesPage {
  exames: any[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public api : ApiProvider) {
  }
  presentLoadig(){
    const loader = this.loadingCtrl.create({
      content: "Carregando...",
      duration: 300
    });
    loader.present();
  }

  ionViewDidLoad() {
    this.exames = [];
    var matricula_id = this.navParams.get('matricula_id');
    this.getExames(matricula_id);
  }

  getExames(matricula_id){
    this.presentLoadig();
    this.api.getExames(matricula_id).then((result: any)=>{
      for (var i = 0; i < result.length; i++) {
        if(result[i].descricaoTipo != '<Todos>' && result[i].descricaoTipo != null){
          console.log(result[i]);
          this.exames.push(result[i]);
        }
      }
    });

  }

}
