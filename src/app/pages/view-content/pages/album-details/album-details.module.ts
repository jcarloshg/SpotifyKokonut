import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumDetailsComponent } from './pages/album-details/album-details.component';
import { ListTracksModule } from './components/list-tracks/list-tracks.module';

@NgModule({
  declarations: [
    AlbumDetailsComponent,
  ],
  imports: [
    CommonModule,
    ListTracksModule,
  ],
  exports: [
    AlbumDetailsComponent,
  ]
})
export class AlbumDetailsModule { }
