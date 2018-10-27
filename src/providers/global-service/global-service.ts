import { Injectable } from '@angular/core';
import { RequestOptions, Headers } from '@angular/http';
import { AlertController } from 'ionic-angular';

@Injectable()
export class GlobalServiceProvider {

  private url: string = 'https://www.franca.sp.gov.br/';
  private rota: string = 'api/rest/'

  constructor(
    private alertCtrl: AlertController
  ) {
  }

  public get urlBase() {
    return this.url + this.rota;
  }

  public get optionsHeaders(): RequestOptions {
    var headers = new Headers();

    headers.append('Content-Type', 'application/Json');

    return new RequestOptions({ headers });
  }

  showMessage(title: string, subTitle: string) {
    this.alertCtrl
      .create({
        title: title,
        buttons: [{ text: 'OK' }],
        subTitle: subTitle
      }).present();
  }
}
