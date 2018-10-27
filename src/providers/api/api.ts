import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
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

  constructor(public http: Http,    private localStorage: StorageService,) {
    console.log('Hello ApiProvider Provider');
  }

  getCardSUS(cns){
    return new Promise((resolve,reject)=>{
      this.http.get(this.url+cns).subscribe((result: any)=> {
        if(result.json()){
          this.localStorage.setLocalUser2(result.json());
        }else {
          console.log("aq");
        }
        
      },
      (error) => {
        reject(error.json());
      });
    });
  }

}
