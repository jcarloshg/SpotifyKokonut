import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterButtonsComponent } from './components/filter-buttons/filter-buttons.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { ListItemsFoundComponent } from './components/list-items-found/list-items-found.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FilterButtonsComponent,
    SearchInputComponent,
    ListItemsFoundComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    SearchInputComponent,
  ]
})
export class SearcherAndListItemsModule { }
