import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterComponent } from './pages/master/master.component';
import { DetailComponent } from './pages/detail/detail.component';

/* Use a variable for detail routes,
   as they need to be added to the route
   map in 2 places (see below)... */
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
      // Mobile 'Detail' Routes
      // are children of the master...
      ...detailRoutes
    ]
  },
  // Desktop 'Detail' Routes
  // are siblings of the master...
  ...detailRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
