import { Component } from '@angular/core';
import { SearcherAndListItemsService } from '../../../../searcher-and-list-items.service';
import { OptionsToDisplayLists } from '../../../../models/enum.optionsToDisplayLists';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-viewer-list-components',
  templateUrl: './viewer-list-components.component.html',
  styleUrls: ['./viewer-list-components.component.css']
})
export class ViewerListComponentsComponent {

  public optionsToDisplayLists = OptionsToDisplayLists.SHOW_TRACKS;
  private optionsToDisplayLists$: Subscription;

  constructor(private searcherAndListItemsService: SearcherAndListItemsService) {
    this.optionsToDisplayLists$ = this.searcherAndListItemsService
      .observableOptionsToDisplayLists
      .subscribe(option => this.optionsToDisplayLists = option);
  }

  ngOnDestroy(): void {
    this.optionsToDisplayLists$.unsubscribe();
  }

  public showTracks(): boolean {
    return this.optionsToDisplayLists == OptionsToDisplayLists.SHOW_TRACKS;
  }

  public showArtists(): boolean {
    return this.optionsToDisplayLists == OptionsToDisplayLists.SHOW_ARTISTS;
  }

}
