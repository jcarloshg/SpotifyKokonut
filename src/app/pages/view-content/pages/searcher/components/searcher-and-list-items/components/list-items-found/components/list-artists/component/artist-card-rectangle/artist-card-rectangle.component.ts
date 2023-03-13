import { Component, Input } from '@angular/core';
import { ArtistsItem, Image } from 'src/business_domain/search_content/domain/repository.searchItems';

@Component({
  selector: 'app-artist-card-rectangle',
  templateUrl: './artist-card-rectangle.component.html',
  styleUrls: ['./artist-card-rectangle.component.css']
})
export class ArtistCardRectangleComponent {

  @Input() artist!: ArtistsItem;

  getUrlImage() {
    try {
      const albums: Image[] = this.artist.images;
      if (albums.length == 0) return './assets/images/not_artist_photo.jpg';
      return albums[1].url;
    } catch (error) {
      return './assets/images/not_artist_photo.jpg';
    }
  }

}
