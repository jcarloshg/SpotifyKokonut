export interface RequestAccessTokenRepository {
    run(): Promise<void>;
}