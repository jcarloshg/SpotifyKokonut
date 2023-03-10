import { Injectable } from '@angular/core';
import { AuthenticateApplication } from 'src/business_domain/authenticate/application/application.authenticate';
import { GetCurrentUserLoggedFetch } from 'src/business_domain/authenticate/infrastructure/fetch/fetch.getCurrentUserLogged';
import { LogInFetch } from 'src/business_domain/authenticate/infrastructure/fetch/fetch.logIn';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  private _domain: AuthenticateApplication;

  constructor() {
    this._domain = new AuthenticateApplication({
      logInRepo: new LogInFetch(),
      getCurrentUserLoggedRepo: new GetCurrentUserLoggedFetch(),
    });
  }

  get domain(): AuthenticateApplication {
    return this._domain;
  }

}
