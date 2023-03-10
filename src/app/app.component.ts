import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LogInService } from './busines_domain_services/authenticate/log-in.service';
import { HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  title = 'spotify-kokonut';
  codeReturned: String = '';

  constructor(
    private logInService: LogInService,
    private httpClient: HttpClient,
    private location: Location,
  ) { }

  ngOnInit(): void {

    this.logInService.requestAccessToken(this.location);
    const uRLSearchParams = new URLSearchParams(this.location.path());

    this.codeReturned = uRLSearchParams.get("code") ?? '';


    // console.log(uRLSearchParams.get("state"));
    // console.log(this.location.path());
  }

  async goToSpotifySingUp() {

    const url = 'https://accounts.spotify.com/api/token';
    const spotify_client_id = '3503c48c3bd148ba9bddfce19674184b';
    const spotify_client_secret = 'a57e112df75f4128ba7597ceafdb688d';

    const params = new HttpParams()
      .append("grant_type", "authorization_code")
      .append("code", `${this.codeReturned}`)
      .append("redirect_uri", 'http://localhost:4200/');

    const encodedData = btoa(spotify_client_id + ':' + spotify_client_secret);

    const headers = new HttpHeaders({
      "Authorization": `Basic ${encodedData}`,
      "Content-Type": "application/x-www-form-urlencoded",
    });

    console.log({ params, headers, encodedData });


    this.httpClient.post(url, params, { headers }).subscribe(token => {
      console.log({ token });
    })

  }

  async goLogin() {
    await this.logInService.logIn();
  }
}