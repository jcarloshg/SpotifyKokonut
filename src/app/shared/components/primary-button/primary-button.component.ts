import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.css']
})
export class PrimaryButtonComponent {

  @Input() label: String = '[NOT_LABEL]';
  @Input() disabled = false;
  @Output() click = new EventEmitter<MouseEvent>();

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {

    try {


      if (this.disabled) { return; }
      this.click.emit(event);
    } catch (error) {
      console.log('onClick - error - PrimaryButtonComponent');
    }
  }

}
