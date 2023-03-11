import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { AuthenticateService } from './authenticate.service';
import { AuthenticateApplication } from 'src/business_domain/authenticate/application/application.authenticate';

@Injectable({
  providedIn: 'root'
})
export class LogInService {

  private _domain: AuthenticateApplication;
  // private navigation

  constructor(authenticateService: AuthenticateService) {
    this._domain = authenticateService.domain;
  }

  async logIn() {
    await this._domain.logIn();
  }

}
