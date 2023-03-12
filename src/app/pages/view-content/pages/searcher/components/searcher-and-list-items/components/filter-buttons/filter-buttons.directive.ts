import { Directive, ElementRef, Input } from '@angular/core';
import { OptionsToDisplayLists } from '../../models/enum.optionsToDisplayLists';
import { SearcherAndListItemsService } from '../../searcher-and-list-items.service';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[appFilterButtons]'
})
export class FilterButtonsDirective {

  private optionSelected$: Subscription;
  public filterButtonHTMLElement: ElementRef<HTMLElement>;

  @Input() optionFromButton!: OptionsToDisplayLists;

  constructor(
    private elementRef: ElementRef<HTMLElement>,
    private searcherAndListItemsService: SearcherAndListItemsService,
  ) {
    this.filterButtonHTMLElement = elementRef;
    this.optionSelected$ = this.searcherAndListItemsService
      .observableOptionsToDisplayLists
      .subscribe(option => {
        const isButtonSelected = this.optionFromButton == option;
        isButtonSelected ? this.setStyleButtonSelected() : this.setStyleButtonNotSelected();
        console.log('====================================');
      });
  }

  public setStyleButtonSelected() {
    this.filterButtonHTMLElement.nativeElement.classList.add('btn');
    this.filterButtonHTMLElement.nativeElement.classList.add('btn-primary');
    this.filterButtonHTMLElement.nativeElement.classList.add('rounded-pill');
    this.filterButtonHTMLElement.nativeElement.classList.add('text-white');
    this.filterButtonHTMLElement.nativeElement.classList.add('me-1');
  }

  public setStyleButtonNotSelected() {
    this.filterButtonHTMLElement.nativeElement.classList.add('btn');
    this.filterButtonHTMLElement.nativeElement.classList.add('btn-outline-primary');
    this.filterButtonHTMLElement.nativeElement.classList.add('rounded-pill');
    this.filterButtonHTMLElement.nativeElement.classList.add('me-1');
  }

}
