import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './pages/home/home.component';
import { ViewContentRoutingModule } from './view-content-routing.module';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { SearcherComponent } from './pages/searcher/searcher.component';
import { SearcherInputComponent } from './pages/searcher/components/searcher-input/searcher-input.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    SearcherComponent,
    SearcherInputComponent,
  ],
  imports: [
    CommonModule,
    ViewContentRoutingModule,
    FormsModule,
    ComponentsModule,
  ]
})
export class ViewContentModule { }
