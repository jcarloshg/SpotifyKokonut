import { RequestAccessTokenRepository } from '../../domain/repository.requestAccessToken';


export class RequestAccessTokenFetch implements RequestAccessTokenRepository {

    run(): Promise<void> {
        throw new Error('Method not implemented.');
    }
}