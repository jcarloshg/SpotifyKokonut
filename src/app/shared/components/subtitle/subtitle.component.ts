import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-subtitle',
  templateUrl: './subtitle.component.html',
})
export class SubtitleComponent {

  @Input() value: String = '[NOT_LABEL]';
  @Input() setColorWhite: boolean = false;

  public getStyle(): String {
    const styleBackgroundWhite: String = 'color: #767676;';
    const styleBackgroundBlack: String = 'color: #8C8C8C;';

    return this.setColorWhite
      ? styleBackgroundBlack
      : styleBackgroundWhite;
  }

}
