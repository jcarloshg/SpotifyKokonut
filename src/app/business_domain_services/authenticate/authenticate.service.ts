import { Injectable } from '@angular/core';
import { AuthenticateApplication } from 'src/business_domain/authenticate/application/application.authenticate';
import { GetCurrentUserLoggedFetch } from 'src/business_domain/authenticate/infrastructure/fetch/fetch.getCurrentUserLogged';
import { LogInFetch } from 'src/business_domain/authenticate/infrastructure/fetch/fetch.logIn';
import { RequestARefreshedAccessTokenFetch } from '../../../business_domain/authenticate/infrastructure/fetch/fetch.requestARefreshedAccessTokenRepository';
import { RequestAccessTokenHttpClient } from 'src/business_domain/authenticate/infrastructure/http-client/httpClient.requestAccessTokenRepository';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  private _domain: AuthenticateApplication;
  private _navigator: AuthenticateNavigator;

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) {

    this._navigator = new AuthenticateNavigator(this.router);

    this._domain = new AuthenticateApplication({
      logInRepo: new LogInFetch(),
      getCurrentUserLoggedRepo: new GetCurrentUserLoggedFetch(),
      requestAccessTokenRepository: new RequestAccessTokenHttpClient(this.httpClient),
      requestARefreshedAccessTokenRepository: new RequestARefreshedAccessTokenFetch()
    });

  }

  get navigator(): AuthenticateNavigator {
    return this._navigator;
  }

  get domain(): AuthenticateApplication {
    return this._domain;
  }

}

export class AuthenticateNavigator {
  constructor(private router: Router) { }

  public goToHome() {
    this.router.navigate(['./contenido']);
  }

}
