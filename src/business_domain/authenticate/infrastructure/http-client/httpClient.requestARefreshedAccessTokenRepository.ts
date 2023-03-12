import { HttpClient } from "@angular/common/http";
import { RequestARefreshedAccessTokenRepository } from "../../domain/repository.requestARefreshedAccessToken";

export class RequestARefreshedAccessTokenHttpClient implements RequestARefreshedAccessTokenRepository {

    constructor(private httpClient: HttpClient) { }

    run(): Promise<void> {
        throw new Error("Method not implemented.");
    }
}