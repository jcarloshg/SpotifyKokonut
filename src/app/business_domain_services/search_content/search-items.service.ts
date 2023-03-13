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
  private _albums: Albums | null = null;
  private _artists: Artists | null = null;
  private _tracks: Tracks | null = null;
  private _observableAlbums = new Subject<Albums>();
  private _observableArtists = new Subject<Artists>();
  private _observableTracks = new Subject<Tracks>();

  constructor(authenticateService: SearchContentService) {
    this._domain = authenticateService.domain;
    this._navigator = authenticateService.navigator;
  }

  public get albums(): Albums | null { return this._albums; }
  public get artists(): Artists | null { return this._artists; }
  public get tracks(): Tracks | null { return this._tracks; }
  public get observableAlbums() { return this._observableAlbums.asObservable(); }
  public get observableArtists() { return this._observableArtists.asObservable(); }
  public get observableTracks() { return this._observableTracks.asObservable(); }

  public async searchItems(params: SearchItemsParams) {
    const searcherItemsResponse: SearcherItemsResponse = await this._domain.searchItems(params);


    // update state
    this._albums = searcherItemsResponse.albums;
    this._artists = searcherItemsResponse.artists;
    this._tracks = searcherItemsResponse.tracks;
    this._observableAlbums.next(searcherItemsResponse.albums);
    this._observableArtists.next(searcherItemsResponse.artists);
    this._observableTracks.next(searcherItemsResponse.tracks);
  }

}

