import { AuthenticateRepository } from '../domain/repository.authenticate';
import { LogInRepository } from '../domain/repository.logIn';
import { GetCurrentUserLoggedRepository } from '../domain/repository.getCurrentUserLogged';

export class AuthenticateApplication implements AuthenticateRepository {

    private logInRepository: LogInRepository;
    private getCurrentUserLoggedRepository: GetCurrentUserLoggedRepository;

    constructor(params: {
        logInRepo: LogInRepository,
        getCurrentUserLoggedRepo: GetCurrentUserLoggedRepository,
    }) {
        this.logInRepository = params.logInRepo;
        this.getCurrentUserLoggedRepository = params.getCurrentUserLoggedRepo;
    }

    public async logIn(): Promise<void> {
        await this.logInRepository.run();
    }

    async getCurrentUserLogged(): Promise<void> {
        await this.getCurrentUserLoggedRepository.run();

    }
}