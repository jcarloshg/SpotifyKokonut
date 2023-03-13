import { Album } from "./repository.getAlbumDetails";
import { SearchItemsParams, SearcherItemsResponse } from "./repository.searchItems";

export interface SearchContentRepository {

    searchItems(params: SearchItemsParams): Promise<SearcherItemsResponse>;
    getAlbumDetails(albumID: String): Promise<Album>;
    //
    searchSongs(): Promise<void>;
    searchArtists(): Promise<void>;
}