import { environment } from "src/environments/environment";
import { LogInRepository } from "../../domain/repository.logIn";

export class LogInFetch implements LogInRepository {

    async run(): Promise<void> {

        const response_type = `response_type=${environment.spotify_response_type}`;
        const client_id = `client_id=${environment.spotify_client_id}`;
        const redirect_uri = `redirect_uri=${environment.spotify_redirect_uri}`;

        const urlHref = `https://accounts.spotify.com/authorize?${response_type}&${client_id}&scope=user-read-private%20user-read-email&${redirect_uri}`;

        document.location.href = urlHref;
        // window.open(urlHref)
    }

}