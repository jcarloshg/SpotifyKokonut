export interface RequestARefreshedAccessTokenRepository {
    run(): Promise<void>;
}