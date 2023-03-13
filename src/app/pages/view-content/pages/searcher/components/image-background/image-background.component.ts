import { Component } from '@angular/core';
import { SearchItemsService } from '../../../../../../business_domain_services/search_content/search-items.service';

@Component({
  selector: 'app-image-background',
  templateUrl: './image-background.component.html',
  styleUrls: ['./image-background.component.css']
})
export class ImageBackgroundComponent {

  constructor(private searchItemsService: SearchItemsService) { }

  public showImage(): boolean {
    const tracksIsNull = this.searchItemsService.tracks == null;
    const artistsIsNull = this.searchItemsService.artists == null;
    const albumsIsNull = this.searchItemsService.albums == null;

    const showImage = true;

    if (tracksIsNull) return showImage;
    if (artistsIsNull) return showImage;
    if (albumsIsNull) return showImage;

    return false;
  }

}
