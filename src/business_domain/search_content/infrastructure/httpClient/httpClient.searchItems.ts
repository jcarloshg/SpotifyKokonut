import { SearchItemsRepository } from "../../domain/repository.searchItems";
import { HttpClient } from '@angular/common/http';

export class SearchItemsHttpClient implements SearchItemsRepository {

    constructor(private httpClient: HttpClient) { }

    async run(keyword: String): Promise<void> {
        throw new Error("Method not implemented.");
    }
}