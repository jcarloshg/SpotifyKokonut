
export interface RequestAccessTokenRepository {
    run(params: RequestAccessTokenParams): Promise<RequestAccessTokenResponse>;
}

export interface RequestAccessTokenParams {
    code: string,
}
export interface RequestAccessTokenResponse {
    access_token: string,
    token_type: string,
    scope: string,
    expires_in: number,
    refresh_token: string,
}