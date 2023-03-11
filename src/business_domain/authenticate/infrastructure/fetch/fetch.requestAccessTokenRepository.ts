import { RequestAccessTokenParams, RequestAccessTokenRepository, RequestAccessTokenResponse } from '../../domain/repository.requestAccessToken';

export class RequestAccessTokenFetch implements RequestAccessTokenRepository {

    run(params: RequestAccessTokenParams): Promise<RequestAccessTokenResponse> {
        throw new Error('Method not implemented.');
    }

}