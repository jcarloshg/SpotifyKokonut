export interface GetAlbumDetailsRepository {
    run(albumID: String): Promise<Album>;
}

//============================================================
//============================================================

export interface Album {
    album_type:             string;
    artists:                Artist[];
    available_markets:      string[];
    copyrights:             Copyright[];
    external_ids:           ExternalIDS;
    external_urls:          ExternalUrls;
    genres:                 string[];
    href:                   string;
    id:                     string;
    images:                 Image[];
    label:                  string;
    name:                   string;
    popularity:             number;
    release_date_precision: string;
    release_date:           string;
    restrictions:           Restrictions;
    total_tracks:           number;
    tracks:                 Tracks;
    type:                   string;
    uri:                    string;
}

export interface Artist {
    external_urls: ExternalUrls;
    followers:     Followers;
    genres:        string[];
    href:          string;
    id:            string;
    images:        Image[];
    name:          string;
    popularity:    number;
    type:          string;
    uri:           string;
}

export interface ExternalUrls {
    spotify: string;
}

export interface Followers {
    href:  string;
    total: number;
}

export interface Image {
    url:    string;
    height: number;
    width:  number;
}

export interface Copyright {
    text: string;
    type: string;
}

export interface ExternalIDS {
    isrc: string;
    ean:  string;
    upc:  string;
}

export interface Restrictions {
    reason: string;
}

export interface Tracks {
    href:     string;
    limit:    number;
    next:     string;
    offset:   number;
    previous: string;
    total:    number;
    items:    Item[];
}

export interface Item {
    artists:           LinkedFrom[];
    available_markets: string[];
    disc_number:       number;
    duration_ms:       number;
    explicit:          boolean;
    external_urls:     ExternalUrls;
    href:              string;
    id:                string;
    is_playable:       boolean;
    linked_from:       LinkedFrom;
    restrictions:      Restrictions;
    name:              string;
    preview_url:       string;
    track_number:      number;
    type:              string;
    uri:               string;
    is_local:          boolean;
}

export interface LinkedFrom {
    external_urls: ExternalUrls;
    href:          string;
    id:            string;
    name?:         string;
    type:          string;
    uri:           string;
}
