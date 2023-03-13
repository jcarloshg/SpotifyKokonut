import { Injectable } from '@angular/core';
import { SearchContentApplication, } from 'src/business_domain/search_content/application/application.searchContent';
import { SearchContentNavigation, SearchContentService } from './search-content.service';
import { Album } from 'src/business_domain/search_content/domain/repository.getAlbumDetails';

@Injectable({
  providedIn: 'root'
})
export class GetAlbumDetailsService {


  private _domain: SearchContentApplication;    // domain
  private _navigator: SearchContentNavigation;  // navigator
  private _album: Album | null = null            // state

  constructor(private searchContentService: SearchContentService) {
    this._domain = this.searchContentService.domain;
    this._navigator = this.searchContentService.navigator;
  }

  public get navigator(): SearchContentNavigation { return this._navigator; }
  public get album(): Album | null { return this._album; }

  public async getAlbumDetails(albumID: String): Promise<Album | null> {
    const albumSelected = await this._domain.getAlbumDetails(albumID);
    if (albumSelected == null) {
      // show error
      return null;
    }
    this._album = albumSelected;
    return this._album;
  }

}
