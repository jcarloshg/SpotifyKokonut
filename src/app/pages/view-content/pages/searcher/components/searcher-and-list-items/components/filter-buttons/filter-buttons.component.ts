import { Component } from '@angular/core';
import { SearcherAndListItemsService } from '../../searcher-and-list-items.service';
import { OptionsToDisplayLists } from '../../models/enum.optionsToDisplayLists';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-filter-buttons',
  templateUrl: './filter-buttons.component.html',
  styleUrls: ['./filter-buttons.component.css']
})
export class FilterButtonsComponent {

  public optionSelected = OptionsToDisplayLists.SHOW_TRACKS;
  private optionSelected$: Subscription;

  constructor(private searcherAndListItemsService: SearcherAndListItemsService) {
    this.optionSelected$ = this.searcherAndListItemsService
      .observableOptionsToDisplayLists
      .subscribe(option => this.optionSelected = option);
  }

  ngOnDestroy(): void {
    this.optionSelected$.unsubscribe();
  }

  public setToDisplayListTracks() {
    this
      .searcherAndListItemsService
      .setOptionsToDisplayLists(OptionsToDisplayLists.SHOW_TRACKS);
  }

  public setToDisplayListArtists() {
    this
      .searcherAndListItemsService
      .setOptionsToDisplayLists(OptionsToDisplayLists.SHOW_ARTISTS);
  }

  public setToDisplayListAlbums() {
    this
      .searcherAndListItemsService
      .setOptionsToDisplayLists(OptionsToDisplayLists.SHOW_ALBUMS);
  }

  //============================================================
  // auxiliar methods
  //============================================================

  public isSelectedTrack() {
    const optionSelected = this.searcherAndListItemsService.optionSelected;
    return optionSelected == OptionsToDisplayLists.SHOW_TRACKS;
  }

  public isSelectedArtists() {
    const optionSelected = this.searcherAndListItemsService.optionSelected;
    return optionSelected == OptionsToDisplayLists.SHOW_ARTISTS;
  }

  public isSelectedAlbums() {
    const optionSelected = this.searcherAndListItemsService.optionSelected;
    return optionSelected == OptionsToDisplayLists.SHOW_ALBUMS;
  }

}
