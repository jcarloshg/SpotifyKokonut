import { RequestARefreshedAccessTokenRepository } from "../../domain/repository.requestARefreshedAccessToken";

export class RequestARefreshedAccessTokenFetch implements RequestARefreshedAccessTokenRepository {

    run(): Promise<void> {
        throw new Error("Method not implemented.");
    }
}