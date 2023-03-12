import { lastValueFrom } from "rxjs";
import { SearchItemsParams, SearchItemsRepository, SearcherItemsResponse } from "../../domain/repository.searchItems";
import { HttpClient, HttpParams } from '@angular/common/http';

export class SearchItemsHttpClient implements SearchItemsRepository {

    static typeItemsToReturnByDefault: String = 'album,artist,track';

    constructor(private httpClient: HttpClient) { }

    async run(params: SearchItemsParams): Promise<SearcherItemsResponse> {

        const url = 'https://api.spotify.com/v1/search';

        const body = new HttpParams()
            .append("q", params.keyword as string)
            .append("type", SearchItemsHttpClient.typeItemsToReturnByDefault as string);

        const searchItemsResponse = await lastValueFrom(
            this.httpClient.get<SearcherItemsResponse>(
                url,
                {
                    params: body,
                }
            )
        );

        return searchItemsResponse as SearcherItemsResponse;
    }
}