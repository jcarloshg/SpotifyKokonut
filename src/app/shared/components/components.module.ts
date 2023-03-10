import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryButtonComponent } from './primary-button/primary-button.component';
import { TitleComponent } from './title/title.component';
import { SubtitleComponent } from './subtitle/subtitle.component';

@NgModule({
  declarations: [
    PrimaryButtonComponent,
    SubtitleComponent,
    TitleComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PrimaryButtonComponent,
    SubtitleComponent,
    TitleComponent,
  ]
})
export class ComponentsModule { }
