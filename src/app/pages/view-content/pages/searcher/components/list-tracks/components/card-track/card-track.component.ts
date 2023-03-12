import { Component, Input } from '@angular/core';
import { TracksItem } from 'src/business_domain/search_content/domain/repository.searchItems';

@Component({
  selector: 'app-card-track',
  templateUrl: './card-track.component.html',
  styleUrls: ['./card-track.component.css']
})
export class CardTrackComponent {
  @Input() track!: TracksItem;
}
