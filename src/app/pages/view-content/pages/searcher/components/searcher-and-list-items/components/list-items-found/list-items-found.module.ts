import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewerListComponentsComponent } from './components/viewer-list-components/viewer-list-components.component';
import { ListTracksModule } from './components/list-tracks/list-tracks.module';



@NgModule({
  declarations: [
    ViewerListComponentsComponent
  ],
  imports: [
    CommonModule,
    ListTracksModule,
    // ListArtistsModule,
    // ListAlbumsModule,
  ],
  exports: [
    ViewerListComponentsComponent,
  ]
})
export class ListItemsFoundModule { }
