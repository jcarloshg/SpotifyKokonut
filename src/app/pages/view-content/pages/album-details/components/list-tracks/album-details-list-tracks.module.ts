import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumDetailsListTrackComponent } from './components/album-details-list-track/album-details-list-track.component';
import { AlbumDetailsCardTrackComponent } from './components/album-details-card-track/album-details-card-track.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';



@NgModule({
  declarations: [
    AlbumDetailsListTrackComponent,
    AlbumDetailsCardTrackComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
  ],
  exports: [
    AlbumDetailsListTrackComponent,
  ]
})
export class AlbumDetailsListTracksModule { }
