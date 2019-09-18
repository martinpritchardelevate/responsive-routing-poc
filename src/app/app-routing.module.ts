import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterComponent } from './pages/master/master.component';
import { DetailComponent } from './pages/detail/detail.component';

const detailRoutes = [
  {
    path: 'detail',
    component: DetailComponent
  }
];

const routes: Routes = [
  {
    path: '',
    redirectTo: 'master',
    pathMatch: 'full'
  },
  {
    path: 'master',
    component: MasterComponent,
    children: [
      ...detailRoutes
    ]
  },
  ...detailRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
