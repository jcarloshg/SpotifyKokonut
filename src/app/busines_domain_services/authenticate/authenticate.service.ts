import { Injectable } from '@angular/core';
import { AuthenticateApplication } from 'src/business_domain/authenticate/application/application.authenticate';
import { GetCurrentUserLoggedFetch } from 'src/business_domain/authenticate/infrastructure/fetch/fetch.getCurrentUserLogged';
import { LogInFetch } from 'src/business_domain/authenticate/infrastructure/fetch/fetch.logIn';
import { RequestAccessTokenFetch } from '../../../business_domain/authenticate/infrastructure/fetch/fetch.requestAccessTokenRepository';
import { RequestARefreshedAccessTokenFetch } from '../../../business_domain/authenticate/infrastructure/fetch/fetch.requestARefreshedAccessTokenRepository';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  private _domain: AuthenticateApplication;

  constructor() {
    this._domain = new AuthenticateApplication({
      logInRepo: new LogInFetch(),
      getCurrentUserLoggedRepo: new GetCurrentUserLoggedFetch(),
      requestAccessTokenRepository: new RequestAccessTokenFetch(),
      requestARefreshedAccessTokenRepository: new RequestARefreshedAccessTokenFetch()
    });
  }

  get domain(): AuthenticateApplication {
    return this._domain;
  }

}
