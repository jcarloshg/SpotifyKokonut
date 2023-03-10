export interface AuthenticateRepository {
    logIn(): Promise<void>;
    getCurrentUserLogged(): Promise<void>;
    //
    requestAccessToken(): Promise<void>;
    requestARefreshedAccessToken(): Promise<void>;
}