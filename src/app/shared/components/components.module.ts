import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryButtonComponent } from './primary-button/primary-button.component';
import { TitleComponent } from './title/title.component';
import { SubtitleComponent } from './subtitle/subtitle.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SecondaryButtonComponent } from './secondary-button/secondary-button.component';
import { TitleThirdComponent } from './title-third/title-third.component';

@NgModule({
  declarations: [
    PrimaryButtonComponent,
    SubtitleComponent,
    TitleComponent,
    HeaderComponent,
    FooterComponent,
    SecondaryButtonComponent,
    TitleThirdComponent,
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
    SecondaryButtonComponent,
    TitleThirdComponent
  ]
})
export class ComponentsModule { }
