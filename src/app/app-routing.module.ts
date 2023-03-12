import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewContentGuard } from './pages/view-content/guards/view-content.guard';

const routes: Routes = [
  {
    path: 'contenido',
    loadChildren: () => import('./pages/view-content/view-content.module').then(m => m.ViewContentModule),
    canLoad: [ViewContentGuard]
  },
  {
    path: 'ingresar',
    loadChildren: () => import('./pages/authenticate/authenticate.module').then(m => m.AuthenticateModule),
  },
  {
    path: '**',
    redirectTo: 'ingresar',
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
