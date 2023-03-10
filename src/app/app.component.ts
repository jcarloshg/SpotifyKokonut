import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'spotify-kokonut';

  goToSpotifySingUp() {
    // document.location.href = 'https://www.spotify.com/mx/signup';
    window.open("https://www.spotify.com/mx/signup")
  }

  goToPlok() {
    // document.location.href = 'https://stackoverflow.com';
    window.open("https://www.spotify.com/mx/signup")
  }
}
