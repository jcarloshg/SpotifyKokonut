import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewerListComponentsComponent } from './components/viewer-list-components/viewer-list-components.component';
import { ListTracksModule } from './components/list-tracks/list-tracks.module';
import { ListAlbumsModule } from './components/list-albums/list-albums.module';
import { ListArtistsModule } from './components/list-artists/list-artists.module';



@NgModule({
  declarations: [
    ViewerListComponentsComponent,
  ],
  imports: [
    CommonModule,
    ListTracksModule,
    ListAlbumsModule,
    ListArtistsModule,
  ],
  exports: [
    ViewerListComponentsComponent,
  ]
})
export class ListItemsFoundModule { }
