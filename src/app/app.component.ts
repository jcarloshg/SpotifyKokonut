import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LogInFetch } from 'src/business_domain/authenticate/infrastructure/fetch/fetch.logIn';
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
    const uRLSearchParams = new URLSearchParams(this.location.path());
    console.log(uRLSearchParams.get("code"));
    console.log(this.location.path());
  }

  goToSpotifySingUp() {
    document.location.href = 'https://www.spotify.com/mx/signup';
    // window.open("https://www.spotify.com/mx/signup")
  }

  async goLogin() {
    await this.logInService.logIn();
  }
}