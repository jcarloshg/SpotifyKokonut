import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { SearchItemsService } from 'src/app/business_domain_services/search_content/search-items.service';
import { Tracks } from 'src/business_domain/search_content/domain/repository.searchItems';

@Component({
  selector: 'app-list-track',
  templateUrl: './list-track.component.html',
  styleUrls: ['./list-track.component.css']
})
export class ListTrackComponent {

  public tracks: Tracks | null = null;
  private tracks$: Subscription;

  constructor(private searchItemsService: SearchItemsService) {
    this.tracks$ = this.searchItemsService
      .observableTracks
      .subscribe(tracks => this.tracks = tracks);
  }

  ngOnDestroy(): void {
    this.tracks$.unsubscribe();
  }

}
