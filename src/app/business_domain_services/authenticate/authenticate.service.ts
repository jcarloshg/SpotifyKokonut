import { Injectable } from '@angular/core';
import { AuthenticateApplication } from 'src/business_domain/authenticate/application/application.authenticate';
import { GetCurrentUserLoggedFetch } from 'src/business_domain/authenticate/infrastructure/fetch/fetch.getCurrentUserLogged';
import { LogInFetch } from 'src/business_domain/authenticate/infrastructure/fetch/fetch.logIn';
import { RequestARefreshedAccessTokenFetch } from '../../../business_domain/authenticate/infrastructure/fetch/fetch.requestARefreshedAccessTokenRepository';
import { RequestAccessTokenHttpClient } from 'src/business_domain/authenticate/infrastructure/http-client/httpClient.requestAccessTokenRepository';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  private _domain: AuthenticateApplication;

  constructor(private httpClient: HttpClient) {

    this._domain = new AuthenticateApplication({
      logInRepo: new LogInFetch(),
      getCurrentUserLoggedRepo: new GetCurrentUserLoggedFetch(),
      requestAccessTokenRepository: new RequestAccessTokenHttpClient(this.httpClient),
      requestARefreshedAccessTokenRepository: new RequestARefreshedAccessTokenFetch()
    });

  }

  get domain(): AuthenticateApplication {
    return this._domain;
  }

}
