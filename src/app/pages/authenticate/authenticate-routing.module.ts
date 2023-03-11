import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAuthenticateComponent } from './pages/home-authenticate/home-authenticate.component';

const routes: Routes = [
  {
    path: '',
    component: HomeAuthenticateComponent,
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticateRoutingModule { }
