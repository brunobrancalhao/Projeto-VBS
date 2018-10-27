import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Rx';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { RequestOptions, Http, RequestOptionsArgs, Response } from "@angular/http";
import { AuthServiceProvider } from "../providers/auth-service/auth-service";

@Injectable()
export class AuthInterceptor extends AuthHttp {

    constructor(
        private auth: AuthServiceProvider,
        options: AuthConfig,
        http: Http, defOpts?: RequestOptions
    ) {
        super(options, http, defOpts);
    }

    public delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.fazerRequisicao(() => super.delete(url, options));
    }

    public get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.fazerRequisicao(() => super.get(url, options));
    }

    public post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
        return this.fazerRequisicao(() => super.post(url, body, options));
    }

    private fazerRequisicao(fn: Function): Observable<Response> {
        if (this.auth.isAccessTokenInvalido()) {
            console.log('Requisição HTTP com access token inválido. Obtendo novo token...');

            const chamadaNovoAccessToken = this.auth.obterNovoAccessToken()
                .then(() => {
                    return fn().toPromise();
                });

            return Observable.fromPromise(chamadaNovoAccessToken);
        } else {
            console.log('REQUISIÇÃO HTTP COM ACCESS TOKEN VÁLIDO');
            return fn();
        }
    }

}