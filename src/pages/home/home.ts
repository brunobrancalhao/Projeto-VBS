import { Component } from '@angular/core';
import { Nav, NavController, AlertController, ToastController, LoadingController } from 'ionic-angular';
import { ApiProvider } from './../../providers/api/api';
import { TiposExamesPage } from '../tipos-exames/tipos-exames';
import { TiposExamestempPage } from '../tipos-examestemp/tipos-examestemp';
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/abstract_emitter';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  users: any[];

  constructor(public nav: Nav, public navCtrl: NavController, public alertCtrl: AlertController, public loadingCtrl: LoadingController, public ApiProvider: ApiProvider, private toast: ToastController) {

  }
  presentLoadig() {
    const loader = this.loadingCtrl.create({
      content: "Carregando...",
      duration: 400
    });
    loader.present();
  }

  delay(ms: number) {
    return new Promise<void>(function (resolve) {
      setTimeout(resolve, ms);
    });
  }
  async ionViewDidEnter() {
    this.presentLoadig();
    this.users = [];
    await this.delay(800);
    this.getUsers();
  }
  getUsers() {
    var users = [];
    for (var i = 0; i < localStorage.length; i++) {
      try {
        if (!!JSON.parse(localStorage.getItem(localStorage.key(i))).id) {
          this.users.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      } catch (e) {
        console.log('Erro request localStorage: ', e);
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
            //localStorage.setItem('439624', '{\"id\":439624,\"nome\":\"LUIS HENRIQUE VIEIRA GUIRALDELLI\",\"cartaoSus\":\"703002878196170\",\"dataNascimento\":502509600000,\"rua\":{\"id\":688,\"nome\":\"RUA BELEM - FRANCA\"},\"bairro\":{\"id\":31,\"nome\":\"JARDIM BRASILANDIA - FRANCA\"},\"numeroCasa\":\"1156\",\"telefone\":\"(16)99214-5770\",\"celular\":\"(16)37253-850 \",\"email\":null,\"dataUltimaAtualizacao\":null,\"nomeMae\":\"APARECIDA FATIMA VIEIRA GUIRALDELLI\",\"sexo\":\"1\",\"doador\":null,\"tipoSanguineo\":null,\"mesesDataNascimento\":394}');
            this.ionViewDidEnter();
          }
        }
      ],
      cssClass: 'alert-list'
    });
    prompt.present();
  }

  irParaExames(matricula: string) {
    this.navCtrl.push(TiposExamesPage, {
      matricula_id: matricula
    });
  }

  deletaPaciente(matricula) {
    localStorage.removeItem(matricula);
    this.nav.setRoot(HomePage);
  }

}
