import { Album, GetAlbumDetailsRepository } from '../domain/repository.getAlbumDetails';
import { SearchContentRepository } from '../domain/repository.searchContent';
import { SearchItemsParams, SearchItemsRepository, SearcherItemsResponse } from '../domain/repository.searchItems';

export class SearchContentApplication implements SearchContentRepository {


    private searchItemsRepository: SearchItemsRepository;
    private getAlbumDetailsRepository: GetAlbumDetailsRepository;

    constructor(
        params: {
            searchItemsRepository: SearchItemsRepository,
            getAlbumDetailsRepository: GetAlbumDetailsRepository
        }
    ) {
        this.searchItemsRepository = params.searchItemsRepository;
        this.getAlbumDetailsRepository = params.getAlbumDetailsRepository;
    }

    public async searchItems(params: SearchItemsParams): Promise<SearcherItemsResponse> {
        const searcherItemsResponse = await this.searchItemsRepository.run(params);
        return searcherItemsResponse;
    }


    public async getAlbumDetails(albumID: String): Promise<Album> {
        const albumDetailsResponse = await this.getAlbumDetailsRepository.run(albumID);
        return albumDetailsResponse;
    }

    public async searchSongs(): Promise<void> {
        throw new Error('Method not implemented.');
    }

    public async searchArtists(): Promise<void> {
        throw new Error('Method not implemented.');
    }

}