import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PostRoutingModule } from './post-routing.module';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { PostComponent } from './post.component';
import { EditorJsComponent } from '@common/utility';
import { MaterialModule } from '@app/material.module';

const postChildrenComponent = [AddComponent, EditComponent, ListComponent];

@NgModule({
  declarations: [PostComponent, ...postChildrenComponent, EditorJsComponent],
  imports: [
    CommonModule,
    PostRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [PostComponent, ...postChildrenComponent]
})
export class PostModule {}
