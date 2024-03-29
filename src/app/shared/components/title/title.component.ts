import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent {

  @Input() value: String = '[NOT_LABEL]';
  @Input() setColorWhite: boolean = false;

  public getStyle(): String {
    const style: String = 'color: white;';
    return this.setColorWhite ? style : '';
  }

}
