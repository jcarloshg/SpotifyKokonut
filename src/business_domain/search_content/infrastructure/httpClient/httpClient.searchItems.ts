import { SearchItemsParams, SearchItemsRepository } from "../../domain/repository.searchItems";
import { HttpClient } from '@angular/common/http';

export class SearchItemsHttpClient implements SearchItemsRepository {

    constructor(private httpClient: HttpClient) { }

    async run(params: SearchItemsParams): Promise<void> {

        const url = 'https://accounts.spotify.com/api/token';

        console.log('==================================== earchItemsHttpClient');
        console.log({ params });
        console.log('====================================');
    }
}