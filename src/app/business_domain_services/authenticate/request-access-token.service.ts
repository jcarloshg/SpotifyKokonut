import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { AuthenticateApplication } from 'src/business_domain/authenticate/application/application.authenticate';
import { AuthenticateService } from './authenticate.service';
import { RequestAccessTokenResponse } from 'src/business_domain/authenticate/domain/repository.requestAccessToken';

@Injectable({
  providedIn: 'root'
})
export class RequestAccessTokenService {

  // todo navigator                                                           // navigator
  private _domain: AuthenticateApplication;                                   // domain
  private requestAccessTokenResponse: RequestAccessTokenResponse | null;      // state

  constructor(authenticateService: AuthenticateService) {
    this._domain = authenticateService.domain;
    this.requestAccessTokenResponse = null;
  }

  async requestAccessToken(codeFromSpotifyApi: string) {
    const requestAccessTokenResponse: RequestAccessTokenResponse = await this._domain.requestAccessToken({ code: codeFromSpotifyApi });
    this.requestAccessTokenResponse = requestAccessTokenResponse;
  }
}
