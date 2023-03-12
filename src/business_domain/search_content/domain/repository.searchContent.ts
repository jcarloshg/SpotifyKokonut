import { SearchItemsParams } from "./repository.searchItems";

export interface SearchContentRepository {

    searchItems(params: SearchItemsParams): Promise<void>;

    searchSongs(): Promise<void>;
    searchAlbums(): Promise<void>;
    searchArtists(): Promise<void>;
}