export interface SearchItemsRepository {
    run(keyword: String): Promise<void>;
}