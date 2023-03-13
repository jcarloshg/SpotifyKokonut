import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// mine
import { HomeComponent } from './pages/home/home.component';
import { ViewContentRoutingModule } from './view-content-routing.module';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { SearcherComponent } from './pages/searcher/searcher.component';
import { SearcherAndListItemsModule } from './pages/searcher/components/searcher-and-list-items/searcher-and-list-items.module';


@NgModule({
  declarations: [
    HomeComponent,
    SearcherComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ViewContentRoutingModule,
    ComponentsModule,
    // mine
    SearcherAndListItemsModule,
  ],
  providers: [
  ]
})
export class ViewContentModule { }
