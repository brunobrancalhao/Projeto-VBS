import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, Loading } from 'ionic-angular';

import { Usuario } from '../../domain/usuario/usuario';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { GlobalServiceProvider } from '../../providers/global-service/global-service';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  private usuario: Usuario = new Usuario();
  loading: Loading;

  constructor(
    public navCtrl: NavController,
    private authSrv: AuthServiceProvider,
    private loadingCtrl: LoadingController,
    private glbSrv: GlobalServiceProvider
  ) {
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Aguarde...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }


  public efetuaLogin() {
    this.usuario.cpf = this.usuario.email
    this.showLoading();

    this.authSrv.efetuaLogin(this.usuario).subscribe(allowed => {
    this.loading.dismiss();
      if (allowed) {
        this.authSrv.successfullLogin(allowed);
        this.navCtrl.setRoot(HomePage);
      }
    },
      error => {
        this.loading.dismiss();
        this.glbSrv.showMessage('Erro ao efetuar login', error);
      });

  }
}
