import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticateRoutingModule } from './authenticate-routing.module';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { HomeAuthenticateComponent } from './pages/home-authenticate/home-authenticate.component';


@NgModule({
  declarations: [
    HomeAuthenticateComponent,
  ],
  imports: [
    CommonModule,
    AuthenticateRoutingModule,
    // mine
    ComponentsModule,
  ]
})
export class AuthenticateModule { }
