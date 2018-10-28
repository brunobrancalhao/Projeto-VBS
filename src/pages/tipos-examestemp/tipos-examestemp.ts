import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Nav } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the TiposExamestempPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tipos-examestemp',
  templateUrl: 'tipos-examestemp.html',
})
export class TiposExamestempPage {

  constructor(public nav: Nav, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TiposExamestempPage');
  }
  goToPacient() {
    this.nav.setRoot(HomePage);
  }

}
