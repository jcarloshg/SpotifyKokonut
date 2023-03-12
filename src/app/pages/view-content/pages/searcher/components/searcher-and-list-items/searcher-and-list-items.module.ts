import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterButtonsComponent } from './components/filter-buttons/filter-buttons.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { ListItemsFoundComponent } from './components/list-items-found/list-items-found.component';



@NgModule({
  declarations: [
    FilterButtonsComponent,
    SearchInputComponent,
    ListItemsFoundComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SearcherAndListItemsModule { }
