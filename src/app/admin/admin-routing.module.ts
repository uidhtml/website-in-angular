import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ROUTE_URLS } from '../route-urls.const';
import { LogoutComponent } from './pages/logout/logout.component';
import { AuthGuard } from '@common/guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: ROUTE_URLS.LOGIN, component: LoginComponent },
      { path: ROUTE_URLS.LOGOUT, component: LogoutComponent },
      {
        path: ROUTE_URLS.DASHBAORD,
        component: DashboardComponent,
        canActivate: [AuthGuard]
      },
      {
        path: ROUTE_URLS.POST,
        loadChildren: () =>
          import('./pages/post/post.module').then(m => m.PostModule),
        canActivate: [AuthGuard]
      },
      {
        path: '',
        redirectTo: `/${ROUTE_URLS.ADMIN}/${ROUTE_URLS.LOGIN}`,
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
