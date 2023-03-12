import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterButtonsComponent } from './components/filter-buttons/filter-buttons.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { FormsModule } from '@angular/forms';
import { ListItemsFoundModule } from './components/list-items-found/list-items-found.module';
import { FilterButtonsDirective } from './components/filter-buttons/filter-buttons.directive';




@NgModule({
  declarations: [
    FilterButtonsComponent,
    SearchInputComponent,
    FilterButtonsDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ListItemsFoundModule,
  ],
  exports: [
    SearchInputComponent,
    FilterButtonsComponent,
    ListItemsFoundModule,
  ]
})
export class SearcherAndListItemsModule { }
