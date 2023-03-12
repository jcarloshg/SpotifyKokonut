export interface SearchItemsRepository {
    run(params: SearchItemsParams): Promise<void>;
}

export interface SearchItemsParams {
    keyword: String,    //
    type: String,       // like 'album,artist,track'
    accessToken: String,      // like'Bearer [token]'
}
