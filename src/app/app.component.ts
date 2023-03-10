import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'spotify-kokonut';

  constructor(private activatedRoute: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    const plok = new URLSearchParams(this.location.path());
    console.log(plok.get("code"));

    console.log(this.location.path());


  }

  goToSpotifySingUp() {
    // document.location.href = 'https://www.spotify.com/mx/signup';
    window.open("https://www.spotify.com/mx/signup")
  }

  goLogin() {
    window.open("https://accounts.spotify.com/authorize?response_type=code&client_id=3503c48c3bd148ba9bddfce19674184b&scope=user-read-private%20user-read-email&redirect_uri=http://localhost:4200/");

    // https://accounts.spotify.com/authorize?response_type=code&client_id=3503c48c3bd148ba9bddfce19674184b&scope=user-read-private%20user-read-email&redirect_uri=http://localhost:4200/&state=202020
  }
}