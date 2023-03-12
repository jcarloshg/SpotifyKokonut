import { SearchItemsParams, SearcherItemsResponse } from "./repository.searchItems";

export interface SearchContentRepository {

    searchItems(params: SearchItemsParams): Promise<SearcherItemsResponse>;

    searchSongs(): Promise<void>;
    searchAlbums(): Promise<void>;
    searchArtists(): Promise<void>;
}