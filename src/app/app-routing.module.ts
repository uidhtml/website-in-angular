import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ROUTE_URLS } from './route-urls.const';

const routes: Routes = [
  {
    path: ROUTE_URLS.ADMIN,
    loadChildren: () =>
      import('./admin/admin.module').then(module => module.AdminModule)
  },
  {
    path: '',
    loadChildren: () =>
      import('./frontend/frontend.module').then(module => module.FrontendModule)
  },
  {
    path: '**',
    redirectTo: ROUTE_URLS.HOMEPAGE,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
