export interface SearchContentRepository {

    searchItems(keyword: String): Promise<void>;

    searchSongs(): Promise<void>;
    searchAlbums(): Promise<void>;
    searchArtists(): Promise<void>;
}