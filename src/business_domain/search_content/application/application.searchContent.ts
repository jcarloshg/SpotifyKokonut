import { SearchContentRepository } from '../domain/repository.searchContent';
import { SearchItemsParams, SearchItemsRepository, SearcherItemsResponse } from '../domain/repository.searchItems';

export class SearchContentApplication implements SearchContentRepository {


    private searchItemsRepository: SearchItemsRepository;

    constructor(params: {
        searchItemsRepository: SearchItemsRepository
    }) {
        this.searchItemsRepository = params.searchItemsRepository;
    };


    public async searchItems(params: SearchItemsParams): Promise<SearcherItemsResponse> {
        const searcherItemsResponse = await this.searchItemsRepository.run(params);
        return searcherItemsResponse;
    }


    public async searchSongs(): Promise<void> {
        throw new Error('Method not implemented.');
    }

    public async searchAlbums(): Promise<void> {
        throw new Error('Method not implemented.');
    }

    public async searchArtists(): Promise<void> {
        throw new Error('Method not implemented.');
    }

}