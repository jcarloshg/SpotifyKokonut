import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SearcherComponent } from './pages/searcher/searcher.component';
import { AlbumDetailsComponent } from './pages/album-details/album-details.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'buscador',
        component: SearcherComponent,
      },
      {
        path: 'album/:id',
        component: AlbumDetailsComponent,
      },
      {
        path: '**',
        redirectTo: 'buscador',
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewContentRoutingModule { }

// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './pages/home/home.component';
// import { SearcherComponent } from './pages/searcher/searcher.component';
// import { AlbumDetailsComponent } from './pages/album-details/album-details.component';

// const routes: Routes = [
//   {
//     path: '',
//     component: HomeComponent,
//     children: [
//       {
//         path: 'buscador',
//         component: SearcherComponent,
//       },
//       {
//         path: 'album/:id',
//         component: AlbumDetailsComponent,
//       },
//       {
//         path: '**',
//         redirectTo: 'buscador',
//       }
//     ],
//   }
// ];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// export class ViewContentRoutingModule { }
