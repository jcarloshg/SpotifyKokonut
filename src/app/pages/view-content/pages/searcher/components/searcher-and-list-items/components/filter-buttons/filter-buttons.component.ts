import { Component } from '@angular/core';
import { SearcherAndListItemsService } from '../../searcher-and-list-items.service';
import { OptionsToDisplayLists } from '../../models/enum.optionsToDisplayLists';

@Component({
  selector: 'app-filter-buttons',
  templateUrl: './filter-buttons.component.html',
  styleUrls: ['./filter-buttons.component.css']
})
export class FilterButtonsComponent {

  constructor(private searcherAndListItemsService: SearcherAndListItemsService) { }

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

}
