import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from './../../providers/api/api';

/**
 * Generated class for the ListaExamesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-exames',
  templateUrl: 'lista-exames.html',
})
export class ListaExamesPage {
  exames: any[];
  matricula: string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public api : ApiProvider) {
  }

  ionViewDidLoad() {
    this.exames = [];
    var tipo_id = this.navParams.get('tipo_id');
    this.matricula = this.navParams.get('matricula');
    this.getExames(this.matricula,tipo_id);
  }

  getExames(matricula,tipo_id){
    this.api.getListaExames(matricula,tipo_id).then((result: any)=>{
      console.log(result);
      if(result.length > 0){
        for (var i = 0; i < result.length; i++) {
          this.exames.push(result[i]);
        }
      }
    });
  }

}
