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
    path: 'publico',
    loadChildren: () => import('./pages/pages-share/pages-share.module').then(m => m.PagesShareModule),
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
