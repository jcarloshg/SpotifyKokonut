import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewContentRoutingModule } from './view-content-routing.module';
import { HomeComponent } from './pages/home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ViewContentRoutingModule
  ]
})
export class ViewContentModule { }
