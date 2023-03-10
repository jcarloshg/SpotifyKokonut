import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestAccessTokenService {

  constructor(private httpClient: HttpClient) { }

  async requestAccessTokenService() {

    // TODO - add to params [code]

    const url = 'https://accounts.spotify.com/api/token';

    let body = new URLSearchParams();
    body.set("grant_type", "authorization_code");
    body.set("code", "[code]");
    body.set("redirect_uri", 'http://localhost:4200/hola');

    // const response = this.httpClient.get(url);

  }
}
