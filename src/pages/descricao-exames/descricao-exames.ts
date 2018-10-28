import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DescricaoExamesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-descricao-exames',
  templateUrl: 'descricao-exames.html',
})
export class DescricaoExamesPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DescricaoExamesPage');
  }

  updateClass(value){
    var element = document.getElementById(value);
    element.classList.toggle("active");
  }
}
