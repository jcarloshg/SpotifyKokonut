export interface SearchItemsRepository {
    run(params: SearchItemsParams): Promise<SearcherItemsResponse>;
}

export interface SearchItemsParams {
    keyword: String,        //
    type: String,           // like 'album,artist,track'
    accessToken: String,    // like'Bearer [token]'
}

//============================================================
//============================================================

export interface SearcherItemsResponse {
    albums: Albums;
    artists: Artists;
    tracks: Tracks;
}

export interface Albums {
    href: string;
    items: AlbumElement[];
    limit: number;
    next: string;
    offset: number;
    previous: null;
    total: number;
}

export interface Artists {
    href: string;
    items: ArtistsItem[];
    limit: number;
    next: string;
    offset: number;
    previous: null;
    total: number;
}

export interface Tracks {
    href: string;
    items: TracksItem[];
    limit: number;
    next: string;
    offset: number;
    previous: null;
    total: number;
}

export interface AlbumElement {
    album_group: AlbumGroup;
    album_type: AlbumGroup;
    artists: Artist[];
    available_markets: string[];
    external_urls: ExternalUrls;
    href: string;
    id: string;
    images: Image[];
    is_playable: boolean;
    name: string;
    release_date: string;
    release_date_precision: ReleaseDatePrecision;
    total_tracks: number;
    type: AlbumGroup;
    uri: string;
}

export enum AlbumGroup {
    Album = "album",
    Compilation = "compilation",
    Single = "single",
}

export interface Artist {
    external_urls: ExternalUrls;
    href: string;
    id: string;
    name: string;
    type: ArtistType;
    uri: string;
}

export interface ExternalUrls {
    spotify: string;
}

export enum ArtistType {
    Artist = "artist",
}

export interface Image {
    height: number;
    url: string;
    width: number;
}

export enum ReleaseDatePrecision {
    Day = "day",
    Year = "year",
}

export interface ArtistsItem {
    external_urls: ExternalUrls;
    followers: Followers;
    genres: string[];
    href: string;
    id: string;
    images: Image[];
    name: string;
    popularity: number;
    type: ArtistType;
    uri: string;
}

export interface Followers {
    href: null;
    total: number;
}

export interface Tracks {
    href: string;
    items: TracksItem[];
    limit: number;
    next: string;
    offset: number;
    previous: null;
    total: number;
}

export interface TracksItem {
    album: AlbumElement;
    artists: Artist[];
    available_markets: string[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_ids: ExternalIDS;
    external_urls: ExternalUrls;
    href: string;
    id: string;
    is_local: boolean;
    name: string;
    popularity: number;
    preview_url: null | string;
    track_number: number;
    type: PurpleType;
    uri: string;
}

export interface ExternalIDS {
    isrc: string;
}

export enum PurpleType {
    Track = "track",
}
