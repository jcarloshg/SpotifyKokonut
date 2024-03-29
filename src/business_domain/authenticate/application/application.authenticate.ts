import { AuthenticateRepository } from '../domain/repository.authenticate';
import { LogInRepository } from '../domain/repository.logIn';
import { GetCurrentUserLoggedRepository } from '../domain/repository.getCurrentUserLogged';
import { RequestAccessTokenParams, RequestAccessTokenRepository, RequestAccessTokenResponse } from '../domain/repository.requestAccessToken';
import { RequestARefreshedAccessTokenRepository } from '../domain/repository.requestARefreshedAccessToken';

export class AuthenticateApplication implements AuthenticateRepository {

    // nominal tracking
    private logInRepository: LogInRepository;
    private getCurrentUserLoggedRepository: GetCurrentUserLoggedRepository;
    private requestAccessTokenRepository: RequestAccessTokenRepository;
    private requestARefreshedAccessTokenRepository: RequestARefreshedAccessTokenRepository;
    // tracking alternative nominal
    // auxiliary methods

    constructor(params: {
        logInRepo: LogInRepository,
        getCurrentUserLoggedRepo: GetCurrentUserLoggedRepository,
        requestAccessTokenRepository: RequestAccessTokenRepository,
        requestARefreshedAccessTokenRepository: RequestARefreshedAccessTokenRepository,
    }) {
        this.logInRepository = params.logInRepo;
        this.getCurrentUserLoggedRepository = params.getCurrentUserLoggedRepo;
        this.requestAccessTokenRepository = params.requestAccessTokenRepository;
        this.requestARefreshedAccessTokenRepository = params.requestARefreshedAccessTokenRepository;
    }

    //============================================================
    // nominal tracking
    //============================================================

    public async logIn(): Promise<void> {
        await this.logInRepository.run();
    }

    public async getCurrentUserLogged(): Promise<void> {
        await this.getCurrentUserLoggedRepository.run();

    }

    public async requestAccessToken(params: RequestAccessTokenParams): Promise<RequestAccessTokenResponse> {
        const response: RequestAccessTokenResponse = await this.requestAccessTokenRepository.run(params);
        return response;
    }


    async requestARefreshedAccessToken(): Promise<void> {
        await this.requestARefreshedAccessTokenRepository.run();
    }

    //============================================================
    // tracking alternative nominal
    //============================================================

    //============================================================
    // auxiliary methods
    //============================================================
}