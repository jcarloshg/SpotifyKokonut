import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { lastValueFrom } from "rxjs";
import { RequestAccessTokenParams, RequestAccessTokenRepository, RequestAccessTokenResponse } from "../../domain/repository.requestAccessToken";

export class RequestAccessTokenHttpClient implements RequestAccessTokenRepository {

    constructor(private httpClient: HttpClient) { }

    async run(params: RequestAccessTokenParams): Promise<RequestAccessTokenResponse> {

        const url = 'https://accounts.spotify.com/api/token';

        const codeFromSpotifyApi = params.code;
        const spotifyClientId = environment.spotify_client_id;
        const spotifyClientSecret = environment.spotify_client_secret;
        const encodedData = btoa(spotifyClientId + ':' + spotifyClientSecret);

        const body = new HttpParams()
            .append("grant_type", "authorization_code")
            .append("code", codeFromSpotifyApi)
            .append("redirect_uri", 'http://localhost:4200/');

        const headers = new HttpHeaders({
            "Authorization": `Basic ${encodedData}`,
            "Content-Type": "application/x-www-form-urlencoded",
        });

        const requestAccessTokenResponse = await lastValueFrom(this.httpClient.post(url, body, { headers }));

        return requestAccessTokenResponse as RequestAccessTokenResponse;
    }

}