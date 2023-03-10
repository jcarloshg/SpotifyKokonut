import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LogInService } from './busines_domain_services/authenticate/log-in.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'spotify-kokonut';

  constructor(
    private logInService: LogInService,
    private activatedRoute: ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit(): void {

    this.logInService.requestAccessToken(this.location);
    // const uRLSearchParams = new URLSearchParams(this.location.path());
    // console.log(uRLSearchParams.get("code"));
    // console.log(uRLSearchParams.get("state"));
    // console.log(this.location.path());
  }

  goToSpotifySingUp() {
    document.location.href = 'https://www.spotify.com/mx/signup';
  }

  async goLogin() {
    await this.logInService.logIn();
  }
}