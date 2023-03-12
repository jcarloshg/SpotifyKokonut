import { Component } from '@angular/core';
import { SearchItemsService } from 'src/app/business_domain_services/search_content/search-items.service';
import { RequestAccessTokenService } from '../../../../../../business_domain_services/authenticate/request-access-token.service';
import { SearchItemsParams } from 'src/business_domain/search_content/domain/repository.searchItems';

@Component({
  selector: 'app-searcher-input',
  templateUrl: './searcher-input.component.html',
  styleUrls: ['./searcher-input.component.css']
})
export class SearcherInputComponent {

  public keyword: String = '';

  constructor(
    private searchItemsService: SearchItemsService,
    private requestAccessTokenService: RequestAccessTokenService,
  ) { }

  async searchItems() {

    const accessToken: String = '[token]';
    const keyword = this.keyword;

    await this.searchItemsService.searchItems({
      keyword: keyword,
      type: 'track,album,artist',
      accessToken: accessToken,
    });

  }

}
