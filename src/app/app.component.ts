import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StorageService } from '../providers/storage.service/storage.service';

import { HomePage } from '../pages/home/home';
// import { ListPage } from '../pages/list/list';
import { MapsPage } from '../pages/maps/maps';
import { LoginPage } from '../pages/login/login';
import { DescricaoExamesPage } from '../pages/descricao-exames/descricao-exames';
import { SobrePage } from '../pages/sobre/sobre';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  openMenu = false;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private localStorage: StorageService) {
    this.initializeApp();

    let paciente = this.localStorage.getLocalUser();
    console.log(paciente);
    // used for an example of ngFor and navigation
    if (paciente) {
      this.rootPage = HomePage;
    } else {
      this.rootPage = LoginPage;
    }
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  togglePopupMenu() {
    return this.openMenu = !this.openMenu;
  }

  goToPacient() {
    this.nav.setRoot(HomePage);
    this.togglePopupMenu();
  }

  goToLab() {
    this.nav.setRoot(MapsPage);
    this.togglePopupMenu();
  }

  goToExam() {
    this.nav.setRoot(DescricaoExamesPage);
    this.togglePopupMenu();
  }

  goToAbout() {
    this.nav.setRoot(SobrePage);
    this.togglePopupMenu();
  }

  goToLogout(){
    localStorage.removeItem('token');
    this.nav.setRoot(LoginPage);
    this.togglePopupMenu();
  }
}
