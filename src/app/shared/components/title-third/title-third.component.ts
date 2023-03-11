import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-third',
  templateUrl: './title-third.component.html',
  styleUrls: ['./title-third.component.css']
})
export class TitleThirdComponent {

  @Input() value: String = '[NOT_LABEL]';
  @Input() setColorWhite: boolean = false;

  public getStyle(): String {
    const styleBackgroundWhite: String = 'color: #767676;';
    const styleBackgroundBlack: String = 'color: white;';

    return this.setColorWhite
      ? styleBackgroundBlack
      : styleBackgroundWhite;
  }

}
