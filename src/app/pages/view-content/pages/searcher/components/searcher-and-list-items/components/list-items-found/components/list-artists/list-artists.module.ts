import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListArtistCardComponent } from './component/list-artist-card/list-artist-card.component';
import { ArtistCardRectangleComponent } from './component/artist-card-rectangle/artist-card-rectangle.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';



@NgModule({
  declarations: [
    ListArtistCardComponent,
    ArtistCardRectangleComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
  ],
  exports: [
    ListArtistCardComponent
  ]
})
export class ListArtistsModule { }
