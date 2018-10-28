import { Component } from '@angular/core';
import { Nav, IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { ApiProvider } from './../../providers/api/api';
import { ListaExamesPage } from '../lista-exames/lista-exames';
import { HomePage } from '../home/home'

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
  matricula: string;
  semExames: boolean;
  constructor(public nav: Nav, public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public api: ApiProvider, private toast: ToastController) {
  }
  presentLoadig() {
    const loader = this.loadingCtrl.create({
      content: "Carregando...",
      duration: 300
    });
    loader.present();
  }

  ionViewDidLoad() {
    this.exames = [];
    var matricula_id = this.navParams.get('matricula_id');
    this.matricula = this.navParams.get('matricula_id');
    this.semExames = false;
    // this.getExames(matricula_id);
  }

  getExames(matricula_id) {
    this.presentLoadig();
    this.api.getExames(matricula_id).then((result: any) => {
      if (result.length > 1) {
        for (var i = 0; i < result.length; i++) {
          if (result[i].descricaoTipo != '<Todos>' && result[i].descricaoTipo != null) {
            this.exames.push(result[i]);
          }
        }
      } else {
        this.semExames = true;
      }
    });

  }

  irParaExamesDetalhes(matricula_id, tipo_id) {
    this.navCtrl.push(ListaExamesPage, {
    });
    // this.navCtrl.push(ListaExamesPage, {
    //   tipo_id: tipo_id,
    //   matricula: matricula_id
    // });
  }

  goToPacient() {
    this.nav.setRoot(HomePage);
  }
}
