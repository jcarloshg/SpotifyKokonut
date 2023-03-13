import { Component, Input } from '@angular/core';
import { Tracks } from 'src/business_domain/search_content/domain/repository.getAlbumDetails';

@Component({
  selector: 'app-list-track',
  templateUrl: './list-track.component.html',
  styleUrls: ['./list-track.component.css']
})
export class ListTrackComponent {

  @Input() tracks!: Tracks;

  constructor() { }

}
