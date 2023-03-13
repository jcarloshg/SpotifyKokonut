import { Component } from '@angular/core';
import { LogInService } from 'src/app/business_domain_services/authenticate/log-in.service';
import { RequestAccessTokenService } from 'src/app/business_domain_services/authenticate/request-access-token.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {

  constructor(
    private logInService: LogInService,
    private requestAccessTokenService: RequestAccessTokenService,
    private route: ActivatedRoute
  ) { }

  async ngOnInit(): Promise<void> {
    this.route.queryParamMap.subscribe(async params => {
      const codeFromSpotifyApi = params.get('code');
      if (codeFromSpotifyApi == null) return;
      await this.requestAccessTokenService.requestAccessToken(codeFromSpotifyApi);
    });
  }

  async goToSpotifySingUp() {
    // window.open('https://www.spotify.com/mx/signup')
    await this.logInService.logIn();
  }

  async goLogin() { await this.logInService.logIn(); }

}
