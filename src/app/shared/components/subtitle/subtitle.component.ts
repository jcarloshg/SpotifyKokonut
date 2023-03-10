import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-subtitle',
  templateUrl: './subtitle.component.html',
})
export class SubtitleComponent {
  @Input() value: String = '[NOT_LABEL]';

}
