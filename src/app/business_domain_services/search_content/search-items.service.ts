import { Injectable } from '@angular/core';
import { SearchContentNavigation, SearchContentService } from './search-content.service';
import { SearchContentApplication } from 'src/business_domain/search_content/application/application.searchContent';
import { SearchItemsParams } from '../../../business_domain/search_content/domain/repository.searchItems';

@Injectable({
  providedIn: 'root'
})
export class SearchItemsService {

  private _domain: SearchContentApplication;                                   // domain
  private _navigator: SearchContentNavigation;                                  // navigator
  // state

  constructor(authenticateService: SearchContentService) {
    this._domain = authenticateService.domain;
    this._navigator = authenticateService.navigator;
  }

  public async searchItems(params: SearchItemsParams) {
    await this._domain.searchItems(params);
  }

}
