import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaExamesPage } from './lista-exames';

@NgModule({
  declarations: [
    ListaExamesPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaExamesPage),
  ],
})
export class ListaExamesPageModule {}
