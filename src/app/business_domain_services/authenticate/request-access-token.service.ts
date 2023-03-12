import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { AuthenticateApplication } from 'src/business_domain/authenticate/application/application.authenticate';
import { AuthenticateNavigator, AuthenticateService } from './authenticate.service';
import { RequestAccessTokenResponse } from 'src/business_domain/authenticate/domain/repository.requestAccessToken';
import { CookieManagerService } from '../../shared/services/cookie-manager.service';

@Injectable({
  providedIn: 'root'
})
export class RequestAccessTokenService {

  private _domain: AuthenticateApplication;   // domain
  private _state: CookieManagerService;       // state
  private _navigator: AuthenticateNavigator;  // navigator

  constructor(
    private cookieManagerService: CookieManagerService,
    authenticateService: AuthenticateService
  ) {
    this._domain = authenticateService.domain;
    this._state = this.cookieManagerService;
    this._navigator = authenticateService.navigator;
  }

  public getAccessToken(): String | null {
    const accessToken = this._state.getValue(CookieManagerService.ACCESS_TOKEN);
    return accessToken;
  }

  public async requestAccessToken(codeFromSpotifyApi: string) {
    await this._domain.requestAccessToken({ code: codeFromSpotifyApi });
    this._navigator.goToHome();
  }
}
