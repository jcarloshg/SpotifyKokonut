import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeSharedComponent } from './pages/home-shared/home-shared.component';
import { ConnectionFailedComponent } from './pages/connection-failed/connection-failed.component';

const routes: Routes = [
  {
    path:'',
    component: HomeSharedComponent,
    children:[
      {
        path: 'conexion-fallida',
        component: ConnectionFailedComponent
      },
      {
        path: '**',
        redirectTo: 'conexion-fallida',
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesShareRoutingModule { }
