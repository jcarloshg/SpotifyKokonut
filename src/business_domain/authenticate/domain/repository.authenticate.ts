import { RequestAccessTokenParams, RequestAccessTokenResponse } from "./repository.requestAccessToken";

export interface AuthenticateRepository {

    logIn(): Promise<void>;

    requestAccessToken(params: RequestAccessTokenParams): Promise<RequestAccessTokenResponse>;

    requestARefreshedAccessToken(): Promise<void>;

    getCurrentUserLogged(): Promise<void>;

}