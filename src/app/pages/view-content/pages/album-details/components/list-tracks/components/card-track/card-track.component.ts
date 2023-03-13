import { Component, Input } from '@angular/core';
import { GetAlbumDetailsService } from 'src/app/business_domain_services/search_content/get-album-details.service';
import { Item } from 'src/business_domain/search_content/domain/repository.getAlbumDetails';
import { Image } from '../../../../../../../../../business_domain/search_content/domain/repository.searchItems';


@Component({
  selector: 'app-card-track',
  templateUrl: './card-track.component.html',
  styleUrls: ['./card-track.component.css']
})
export class CardTrackComponent {

  @Input() track!: Item;

  constructor(private getAlbumDetailsService: GetAlbumDetailsService) { }

  public getArtist(): String {
    try {
      return this.getAlbumDetailsService.album?.name!;
    } catch (error) {
      return "[NOT_ARTIST_NAME]";
    }
  }

  public getUrlImage(): String {
    try {
      const albums: Image[] = this.getAlbumDetailsService.album?.images!;
      if (albums.length == 0) return './assets/images/not_artist_photo.jpg';
      return albums[1].url;
    } catch (error) {
      return './assets/images/not_artist_photo.jpg';
    }
  }

  public getAlbumName(): String {
    try {
      return this.getAlbumDetailsService.album?.name!;
    } catch (error) {
      return "[NOT_ALBUM_NAME]";
    }
  }

  public isExplicit(): boolean {
    try {
      return this.track.explicit;
    } catch (error) {
      return false;
    }
  }

  public getDuration(): String {
    try {
      const minutes = Math.floor((this.track.duration_ms / 1000) / 60);
      const seconds = Math.floor((this.track.duration_ms / 1000) % 60);
      return `${minutes}:${seconds} min`;
    } catch (error) {
      return '';
    }
  }

}
