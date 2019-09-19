import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { PostComponent } from './post.component';
import { EditorJsComponent } from '@common/utility';

const postChildrenComponent = [AddComponent, EditComponent, ListComponent];

@NgModule({
  declarations: [PostComponent, ...postChildrenComponent, EditorJsComponent],
  imports: [CommonModule, PostRoutingModule],
  exports: [PostComponent, ...postChildrenComponent]
})
export class PostModule {}
