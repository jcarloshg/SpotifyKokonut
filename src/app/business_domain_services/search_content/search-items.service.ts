import { Injectable } from '@angular/core';
import { SearchContentNavigation, SearchContentService } from './search-content.service';
import { SearchContentApplication } from 'src/business_domain/search_content/application/application.searchContent';
import { Albums, Artists, SearchItemsParams, Tracks, SearcherItemsResponse } from '../../../business_domain/search_content/domain/repository.searchItems';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchItemsService {

  private _domain: SearchContentApplication;    // domain
  private _navigator: SearchContentNavigation;  // navigator
  // state
  private albums: Albums | null = null;
  private _observableAlbums = new Subject<Albums>();
  private artists: Artists | null = null;
  private _observableArtists = new Subject<Artists>();
  private tracks: Tracks | null = null;
  private _observableTracks = new Subject<Tracks>();

  constructor(authenticateService: SearchContentService) {
    this._domain = authenticateService.domain;
    this._navigator = authenticateService.navigator;
  }

  public get observableAlbums() { return this._observableAlbums.asObservable(); }
  public get observableArtists() { return this._observableArtists.asObservable(); }
  public get observableTracks() { return this._observableTracks.asObservable(); }

  public async searchItems(params: SearchItemsParams) {
    const searcherItemsResponse: SearcherItemsResponse = await this._domain.searchItems(params);
    const plok = searcherItemsResponse.items.albums;

    // update state
    this._observableAlbums.next(searcherItemsResponse.items.albums);
    this._observableArtists.next(searcherItemsResponse.items.artists);
    this._observableTracks.next(searcherItemsResponse.items.tracks);
  }

}

