import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { ROUTE_URLS } from './../../../route-urls.const';
import { PostComponent } from './post.component';

const routes: Routes = [
  { path: '', component: PostComponent, children: [
    { path: ROUTE_URLS.ADD, component: AddComponent },
    { path: ROUTE_URLS.EDIT, component: EditComponent },
    { path: ROUTE_URLS.ALL, component: ListComponent },
    { path: '', redirectTo: ROUTE_URLS.ALL, pathMatch: 'full' }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
