import { HttpClient } from "@angular/common/http";
import { Album, GetAlbumDetailsRepository } from "../../domain/repository.getAlbumDetails";
import { lastValueFrom } from "rxjs";

export class GetAlbumDetailsHttpClient implements GetAlbumDetailsRepository {


    constructor(private httpClient: HttpClient) { }

    public async run(albumID: String): Promise<Album> {

        const urlEndpoint = 'https://api.spotify.com/v1/albums/';
        const url = `${urlEndpoint}${albumID}`;

        const searchItemsResponse = await lastValueFrom(this.httpClient.get(url));

        return searchItemsResponse as Album;
    }

}