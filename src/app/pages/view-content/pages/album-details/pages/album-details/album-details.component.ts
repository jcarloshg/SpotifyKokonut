import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetAlbumDetailsService } from 'src/app/business_domain_services/search_content/get-album-details.service';
import { Album, Artist, Image } from 'src/business_domain/search_content/domain/repository.getAlbumDetails';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent {

  public album: Album | null = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private getAlbumDetailsService: GetAlbumDetailsService,
  ) { }

  async ngOnInit(): Promise<void> {
    const albumIDToSearch = this.activatedRoute.snapshot.paramMap.get('id') || '';
    this.album = await this.getAlbumDetailsService.getAlbumDetails(albumIDToSearch);
  }

  public getArtist(): String {
    const artists: Artist[] = this.album!.artists;
    const nameArtists: String[] = artists.map(artist => artist.name)
    return nameArtists.join(', ');
  }

  public getUrlImage(): String {
    try {
      const albums: Image[] = this.album!.images;
      if (albums.length == 0) return './assets/images/not_artist_photo.jpg';
      return albums[1].url;
    } catch (error) {
      return './assets/images/not_artist_photo.jpg';
    }
  }

  public getGenders(): String {
    const genres = this.album?.genres;
    return genres?.join(', ') ?? '';
  }

  public playAlbum() {
    const uriSpotify = this.album?.external_urls.spotify;
    window.open(uriSpotify);
  }

  public getCopyrights(): String[] {
    const copyrights = this.album?.copyrights;
    const copyrightsText = copyrights?.map(value => value.text) as String[];
    return copyrightsText;
  }


}
