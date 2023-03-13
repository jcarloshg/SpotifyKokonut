import { Component, Input } from '@angular/core';
import { Tracks } from 'src/business_domain/search_content/domain/repository.getAlbumDetails';

@Component({
  selector: 'album-details-app-list-track',
  templateUrl: './album-details-list-track.component.html',
  styleUrls: ['./album-details-list-track.component.css']
})
export class AlbumDetailsListTrackComponent {

  @Input() tracks!: Tracks;

  constructor() { }

}
