import { SearchItemsParams, SearchItemsRepository } from "../../domain/repository.searchItems";
import { HttpClient, HttpParams } from '@angular/common/http';

export class SearchItemsHttpClient implements SearchItemsRepository {

    static typeItemsToReturnByDefault: String = 'album,artist,track';

    constructor(private httpClient: HttpClient) { }

    async run(params: SearchItemsParams): Promise<void> {

        const url = 'https://api.spotify.com/v1/search';

        const body = new HttpParams()
            .append("q", params.keyword as string)
            .append("type", SearchItemsHttpClient.typeItemsToReturnByDefault as string);

        this.httpClient.post(url, body).subscribe(items => {
            console.log('====================================');
            console.log({ items });
            console.log('====================================');
        });
    }
}