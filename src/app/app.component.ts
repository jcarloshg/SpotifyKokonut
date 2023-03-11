import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LogInService } from './business_domain_services/authenticate/log-in.service';
import { HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';
import { RequestAccessTokenService } from './business_domain_services/authenticate/request-access-token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  title = 'spotify-kokonut';
  codeReturned: String = '';

  constructor(
    private httpClient: HttpClient,
    private location: Location,
    private logInService: LogInService,
    private requestAccessTokenService: RequestAccessTokenService,
  ) { }

  ngOnInit(): void {
    this.logInService.requestAccessToken(this.location);
    const uRLSearchParams = new URLSearchParams(this.location.path());
    this.codeReturned = uRLSearchParams.get("code") ?? '';
  }

  async goToSpotifySingUp() {

    const uRLSearchParams = new URLSearchParams(this.location.path());
    const codeFromSpotifyApi = uRLSearchParams.get("code");

    if (codeFromSpotifyApi == null) return;

    await this.requestAccessTokenService.requestAccessToken(codeFromSpotifyApi);
  }

  async goLogin() {
    await this.logInService.logIn();
  }
}