import { Component, Input } from '@angular/core';
import { SearchContentService } from 'src/app/business_domain_services/search_content/search-content.service';
import { Artist, Image, TracksItem } from 'src/business_domain/search_content/domain/repository.searchItems';

@Component({
  selector: 'app-card-track',
  templateUrl: './card-track.component.html',
  styleUrls: ['./card-track.component.css']
})
export class CardTrackComponent {

  @Input() track!: TracksItem;
  @Input() trackNumberFromList?: number;

  constructor(private searchContentService: SearchContentService) { }

  public goToAlbumDetailsPage() {
    const albumID = this.track.album.id;
    this.searchContentService.navigator.goToAlbumDetailsPage(albumID);
  }

  public getArtist(): String {
    const artists: Artist[] = this.track.artists;
    const nameArtists: String[] = artists.map(artist => artist.name)
    return nameArtists.join(', ');
  }

  public getUrlImage(): String {
    try {
      const albums: Image[] = this.track.album.images;
      if (albums.length == 0) return './assets/images/not_artist_photo.jpg';
      return albums[albums.length - 1].url;
    } catch (error) {
      return './assets/images/not_artist_photo.jpg';
    }
  }

  public getAlbumName(): String {
    try {
      const album = this.track.album.name;
      return album;
    } catch (error) {
      return 'nameArtists.join(';
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
