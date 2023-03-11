import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAuthenticateComponent } from './pages/home-authenticate/home-authenticate.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomeAuthenticateComponent,
    children: [
      {
        path: 'landing_page',
        component: LandingPageComponent,
      },
      {
        path: '**',
        redirectTo: 'landing_page'
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticateRoutingModule { }
