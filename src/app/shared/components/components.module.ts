import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryButtonComponent } from './primary-button/primary-button.component';
import { TitleComponent } from './title/title.component';
import { SubtitleComponent } from './subtitle/subtitle.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    PrimaryButtonComponent,
    SubtitleComponent,
    TitleComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PrimaryButtonComponent,
    SubtitleComponent,
    TitleComponent,
    HeaderComponent,
    FooterComponent,
  ]
})
export class ComponentsModule { }
