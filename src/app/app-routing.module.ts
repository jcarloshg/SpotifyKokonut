import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/view-content/view-content.module').then(m => m.ViewContentModule),
  },
  {
    path: 'authenticate',
    loadChildren: () => import('./pages/authenticate/authenticate.module').then(m => m.AuthenticateModule),
  },
  {
    path: '**',
    redirectTo: '/authenticate',
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
