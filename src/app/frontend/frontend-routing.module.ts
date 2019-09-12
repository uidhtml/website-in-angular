import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontendComponent } from './frontend.component';
import { ROUTE_URLS } from '../route-urls.const';

const routes: Routes = [
  {
    path: '',
    component: FrontendComponent,
    children: [
      {
        path: ROUTE_URLS.HOMEPAGE,
        loadChildren: () =>
          import('./pages/homepage/homepage.module').then(m => m.HomepageModule)
      },
      {
        path: ROUTE_URLS.ALL_POSTS,
        loadChildren: () =>
          import('./pages/all-posts/all-posts.module').then(
            m => m.AllPostsModule
          )
      },
      {
        path: ROUTE_URLS.POST_DETAILS,
        loadChildren: () =>
          import('./pages/post-details/post-details.module').then(
            m => m.PostDetailsModule
          )
      },
      {
        path: '',
        redirectTo: `/${ROUTE_URLS.HOMEPAGE}`,
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontendRoutingModule {}
