import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { AuthenticateApplication } from 'src/business_domain/authenticate/application/application.authenticate';
import { AuthenticateNavigator, AuthenticateService } from './authenticate.service';
import { RequestAccessTokenResponse } from 'src/business_domain/authenticate/domain/repository.requestAccessToken';

@Injectable({
  providedIn: 'root'
})
export class RequestAccessTokenService {

  private _domain: AuthenticateApplication;                                   // domain
  private requestAccessTokenResponse: RequestAccessTokenResponse | null;      // state
  private _navigator: AuthenticateNavigator;                                  // navigator

  constructor(authenticateService: AuthenticateService) {
    this._domain = authenticateService.domain;
    this.requestAccessTokenResponse = null;
    this._navigator = authenticateService.navigator;
  }

  public getState(): RequestAccessTokenResponse | null {
    return this.requestAccessTokenResponse;
  }

  public async requestAccessToken(codeFromSpotifyApi: string) {
    const requestAccessTokenResponse: RequestAccessTokenResponse = await this._domain.requestAccessToken({ code: codeFromSpotifyApi });
    this.requestAccessTokenResponse = requestAccessTokenResponse;
    // this._navigator.goToHome();
  }
}
