import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTrackComponent } from './components/list-track/list-track.component';
import { CardTrackComponent } from './components/card-track/card-track.component';
import { ComponentsModule } from '../../../../../../../../../../shared/components/components.module';



@NgModule({
  declarations: [
    ListTrackComponent,
    CardTrackComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
  ],
  exports: [
    ListTrackComponent,
  ]
})
export class ListTracksModule { }
