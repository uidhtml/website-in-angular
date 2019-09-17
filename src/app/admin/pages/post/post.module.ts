import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { PostComponent } from './post.component';
import { EditorJsComponent } from './../../../utility';

const postChildrenComponent = [AddComponent, EditComponent, ListComponent];
const sharedComponent = [EditorJsComponent];

@NgModule({
  declarations: [PostComponent, ...postChildrenComponent, ...sharedComponent],
  imports: [CommonModule, PostRoutingModule],
  exports: [PostComponent, ...postChildrenComponent, ...sharedComponent]
})
export class PostModule {}
