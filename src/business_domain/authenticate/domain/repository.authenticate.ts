export interface AuthenticateRepository {
    logIn(): Promise<void>;
    getCurrentUserLogged(): void;
}