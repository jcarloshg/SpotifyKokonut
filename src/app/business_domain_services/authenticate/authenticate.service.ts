import { Injectable } from '@angular/core';
import { AuthenticateApplication } from 'src/business_domain/authenticate/application/application.authenticate';
import { GetCurrentUserLoggedFetch } from 'src/business_domain/authenticate/infrastructure/fetch/fetch.getCurrentUserLogged';
import { LogInFetch } from 'src/business_domain/authenticate/infrastructure/fetch/fetch.logIn';
import { RequestAccessTokenHttpClient } from 'src/business_domain/authenticate/infrastructure/http-client/httpClient.requestAccessTokenRepository';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { RequestARefreshedAccessTokenHttpClient } from 'src/business_domain/authenticate/infrastructure/http-client/httpClient.requestARefreshedAccessTokenRepository';
import { CookieManagerService } from 'src/app/shared/services/cookie-manager.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  private _domain: AuthenticateApplication;
  private _navigator: AuthenticateNavigator;

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private cookieManagerService: CookieManagerService,
  ) {

    this._navigator = new AuthenticateNavigator(this.router);

    this._domain = new AuthenticateApplication({
      logInRepo: new LogInFetch(),
      getCurrentUserLoggedRepo: new GetCurrentUserLoggedFetch(),
      requestAccessTokenRepository: new RequestAccessTokenHttpClient(this.httpClient, this.cookieManagerService),
      requestARefreshedAccessTokenRepository: new RequestARefreshedAccessTokenHttpClient(this.httpClient),
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

  public goToLandingPage() {
    this.router.navigate(['./ingresar/landing_page']);
  }

}