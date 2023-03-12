import { Component } from '@angular/core';
import { SearchItemsService } from 'src/app/business_domain_services/search_content/search-items.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent {


  public keyword: String = '';

  constructor(
    private searchItemsService: SearchItemsService,
  ) { }

  public onKeyUp($event: Event) {
    this.searchItems();
  }

  public onKeyUpEnter($event: Event) {
    this.searchItems();
  }

  private async searchItems() {

    const accessToken: String = '[token]';
    const keyword = this.keyword;

    await this.searchItemsService.searchItems({
      keyword: keyword,
      type: 'track,album,artist',
      accessToken: accessToken,
    });

  }
}
