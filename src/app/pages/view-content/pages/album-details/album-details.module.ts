import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumDetailsComponent } from './pages/album-details/album-details.component';
import { AlbumDetailsListTracksModule } from './components/list-tracks/album-details-list-tracks.module';

@NgModule({
  declarations: [
    AlbumDetailsComponent,
  ],
  imports: [
    CommonModule,
    AlbumDetailsListTracksModule,
  ],
  exports: [
    AlbumDetailsComponent,
  ]
})
export class AlbumDetailsModule { }
