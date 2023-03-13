import { Injectable } from '@angular/core';
import { OptionsToDisplayLists } from './models/enum.optionsToDisplayLists';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearcherAndListItemsService {

  private _optionsToDisplayLists = OptionsToDisplayLists.SHOW_TRACKS;
  private _observableOptionsToDisplayLists = new Subject<OptionsToDisplayLists>();

  constructor() { }

  public get optionSelected() { return this._optionsToDisplayLists; }
  public get observableOptionsToDisplayLists() { return this._observableOptionsToDisplayLists.asObservable(); }

  public setOptionsToDisplayLists(option: OptionsToDisplayLists) {
    this._optionsToDisplayLists = option;
    this._observableOptionsToDisplayLists.next(option);
  }

}
