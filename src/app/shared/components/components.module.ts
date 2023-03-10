import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryButtonComponent } from './primary-button/primary-button.component';
import { TitleComponent } from './title/title.component';
import { SubtitleComponent } from './subtitle/subtitle.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    PrimaryButtonComponent,
    SubtitleComponent,
    TitleComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PrimaryButtonComponent,
    SubtitleComponent,
    TitleComponent,
    HeaderComponent,
  ]
})
export class ComponentsModule { }
