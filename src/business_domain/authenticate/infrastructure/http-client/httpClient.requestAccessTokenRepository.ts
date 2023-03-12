import { HttpClient, HttpContext, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { lastValueFrom } from "rxjs";
import { RequestAccessTokenParams, RequestAccessTokenRepository, RequestAccessTokenResponse } from "../../domain/repository.requestAccessToken";
import { CookieManagerService } from 'src/app/shared/services/cookie-manager.service';
import { DISABLE_GLOBAL_EXCEPTION_HANDLING } from '../../../../app/pages/view-content/interceptors/view-content-interceptor.service';

export class RequestAccessTokenHttpClient implements RequestAccessTokenRepository {

    constructor(
        private httpClient: HttpClient,
        private cookieManagerService: CookieManagerService,
    ) { }

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

        const requestAccessTokenObservable = this.httpClient.post(
            url,
            body,
            {
                headers,
                context: new HttpContext().set(DISABLE_GLOBAL_EXCEPTION_HANDLING, true)
            }
        );

        const requestAccessTokenResponse = await lastValueFrom(requestAccessTokenObservable);
        const requestAccessToken = requestAccessTokenResponse as RequestAccessTokenResponse;

        const accessToken = requestAccessToken.access_token;
        const refreshToken = requestAccessToken.refresh_token;

        this.cookieManagerService.setValue(CookieManagerService.ACCESS_TOKEN, accessToken);
        this.cookieManagerService.setValue(CookieManagerService.REFRESH_TOKEN, refreshToken);

        return requestAccessToken;
    }

}