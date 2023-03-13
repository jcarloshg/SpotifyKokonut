import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../../../../../../../../../../shared/components/components.module';
import { ListAlbumsCardComponent } from './components/list-albums-card/list-albums-card.component';
import { AlbumCardRectangularComponent } from './components/album-card-rectangular/album-card-rectangular.component';



@NgModule({
  declarations: [
    ListAlbumsCardComponent,
    AlbumCardRectangularComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
  ],
  exports: [
    ListAlbumsCardComponent
  ]
})
export class ListAlbumsModule { }
