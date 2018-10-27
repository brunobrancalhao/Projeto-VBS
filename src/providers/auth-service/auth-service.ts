import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { GlobalServiceProvider } from '../global-service/global-service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { LocalUser } from '../../domain/local_user';
import { Usuario } from '../../domain/usuario/usuario';
import { JwtHelper } from 'angular2-jwt';
import { StorageService } from '../storage.service/storage.service';

@Injectable()
export class AuthServiceProvider {

  currentUser: Usuario;
  jwtHelper: JwtHelper = new JwtHelper();

  constructor(
    private http: Http,
    private glbSrv: GlobalServiceProvider,
    private storage: Storage,
    private localStorage: StorageService
  ) { }

  public getUserInfo(): Usuario {
    return this.currentUser;
  }

  public setUserInfo(usuario: Usuario) {
    this.currentUser = usuario;
  }

  successfullLogin(usuario: Usuario) {
    this.currentUser = usuario;
    this.storage.set('currentUser', usuario);

    this.armazenarToken(usuario.token);

  }
  armazenarToken(token: string) {
    let user: LocalUser = {
      token: token,
      // pega o cpf dentro do atributo subject do token
      cpf: this.jwtHelper.decodeToken(token).sub
    };
    // armazenar usuário no localStorage
    this.localStorage.setLocalUser(user);
  }

  isAccessTokenInvalido() {
    const token = this.localStorage.getLocalUser().token;

    return !token || this.jwtHelper.isTokenExpired(token);
  }

  obterNovoAccessToken(): Promise<void> {

    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.post(this.glbSrv.urlBase + 'central/usuario/token', this.localStorage.getLocalUser().token)
      .toPromise()
      .then(response => {
        this.armazenarToken(response.text());
        return Promise.resolve(null);
      })
      .catch(response => {
        console.log('Erro ao renovar token.', response);
        return Promise.resolve(null);
      });
  }



  public efetuaLogin(usuario: Usuario) {
    return this.http.post(this.glbSrv.urlBase + 'central/usuario/verifica', usuario).map(data => data.json());
  }

  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      this.localStorage.setLocalUser(null);
      this.storage.set('currentUser', null);
      observer.next(true);
      observer.complete();
    });
  }

}
