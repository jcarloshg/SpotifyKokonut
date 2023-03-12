import { SearchAlbumsRepository } from '../domain/repository.searchAlbums';
import { SearchContentRepository } from '../domain/repository.searchContent';
import { SearchSongsRepository } from '../domain/repository.searchSongs';
import { SearchArtistsRepository } from '../domain/repository.searchArtists';
import { SearchItemsRepository } from '../domain/repository.searchItems';

export class SearchContentApplication implements SearchContentRepository {


    private searchItemsRepository: SearchItemsRepository;

    constructor(params: {
        searchItemsRepository: SearchItemsRepository
    }) {
        this.searchItemsRepository = params.searchItemsRepository;
    };


    public async searchItems(keyword: String): Promise<void> {
        this.searchItemsRepository.run(keyword);
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