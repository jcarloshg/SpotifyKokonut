import { Component, Input } from '@angular/core';
import { SearchContentService } from 'src/app/business_domain_services/search_content/search-content.service';
import { AlbumElement, Artist, Image } from 'src/business_domain/search_content/domain/repository.searchItems';

@Component({
  selector: 'app-album-card-rectangular',
  templateUrl: './album-card-rectangular.component.html',
  styleUrls: ['./album-card-rectangular.component.css']
})
export class AlbumCardRectangularComponent {

  @Input() album!: AlbumElement;

  constructor(private searchContentService: SearchContentService) { }

  public getUrlImage(): String {
    try {
      const albums: Image[] = this.album.images;
      if (albums.length == 0) return './assets/images/not_artist_photo.jpg';
      return albums[1].url;
    } catch (error) {
      return './assets/images/not_artist_photo.jpg';
    }
  }

  public getArtist(): String {
    const artists: Artist[] = this.album.artists;
    const nameArtists: String[] = artists.map(artist => artist.name)
    return nameArtists.join(', ');
  }

  public goToAlbumDetailsPage() {
    const albumID = this.album.id;
    this.searchContentService.navigator.goToAlbumDetailsPage(albumID);
  }


}
