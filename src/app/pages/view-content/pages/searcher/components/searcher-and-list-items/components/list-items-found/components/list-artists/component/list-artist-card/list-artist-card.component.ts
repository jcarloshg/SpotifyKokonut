import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { SearchItemsService } from 'src/app/business_domain_services/search_content/search-items.service';
import { Albums, Artists } from 'src/business_domain/search_content/domain/repository.searchItems';

@Component({
  selector: 'app-list-artist-card',
  templateUrl: './list-artist-card.component.html',
  styleUrls: ['./list-artist-card.component.css']
})
export class ListArtistCardComponent {

  public artists: Artists | null = null;
  private artists$: Subscription;

  constructor(private searchItemsService: SearchItemsService) {
    this.artists$ = this.searchItemsService
      .observableArtists
      .subscribe(artists => this.artists = artists);
  }

  ngOnInit(): void {
    this.artists = this.searchItemsService.artists;
  }

  ngOnDestroy(): void {
    this.artists$.unsubscribe();
  }

}
