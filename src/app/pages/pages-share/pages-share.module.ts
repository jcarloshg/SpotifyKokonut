import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesShareRoutingModule } from './pages-share-routing.module';
import { ConnectionFailedComponent } from './pages/connection-failed/connection-failed.component';
import { HomeSharedComponent } from './pages/home-shared/home-shared.component';
import { ComponentsModule } from '../../shared/components/components.module';


@NgModule({
  declarations: [
    ConnectionFailedComponent,
    HomeSharedComponent,
  ],
  imports: [
    CommonModule,
    PagesShareRoutingModule,
    ComponentsModule,
  ]
})
export class PagesShareModule { }
