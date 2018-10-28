import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ToastController } from 'ionic-angular';
import { StorageService } from '../storage.service/storage.service';
import { PromiseObservable } from 'rxjs/observable/PromiseObservable';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {
  private url = 'https://www.franca.sp.gov.br/api/rest/saude/paciente/seleciona/cns/';

  constructor(public http: Http,    private localStorage: StorageService, private toast: ToastController) {
    console.log('Hello ApiProvider Provider');
  }

  getCardSUS(cns){
    return new Promise((resolve,reject)=>{
      this.http.get(this.url+cns).subscribe((result: any)=> {
        console.log(result);
        try{
          this.localStorage.setLocalUser2(result.json());
        }catch{
          this.toast.create({message:'Cartão do SUS não encontrado', position: 'botton', duration: 30000});
        }
        
      },
      (error) => {
        reject(error.json());
      });
    });
  }

  getExames(matricula_id){
   return new Promise((resolve,reject) => {
    let url = 'https://www.franca.sp.gov.br/api/rest/saude/tipoexame/lista/';

    this.http.get(url+matricula_id).subscribe((result: any) =>{
      if(result.json()){
        return resolve(result.json());
      } else {
        resolve();
      }
    },
    (error) =>{
      reject(error);
    });
   }); 
  }

  getListaExames(tipo_id, matricula_id){
    return new Promise((resolve,reject) => {
      let url = 'https://www.franca.sp.gov.br/api/rest/saude/exame/solicitados/';
  
      this.http.get(url+matricula_id+ '/' +tipo_id).subscribe((result: any) =>{
        if(result.json()){
          return resolve(result.json());
        } else {
          resolve();
        }
      },
      (error) =>{
        reject(error);
      });
     }); 
  }

}
