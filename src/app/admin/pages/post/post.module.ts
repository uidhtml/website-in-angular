import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PostRoutingModule } from './post-routing.module';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostComponent } from './post.component';
import {
  EditorJsComponent,
  DialogComponent,
  DataTableComponent
} from '@common/utility';
import { MaterialModule } from '@app/material.module';
import { PostFormComponent } from './post-form/post-form.component';

const postChildrenComponent = [AddComponent, EditComponent, PostListComponent];

@NgModule({
  declarations: [
    PostComponent,
    ...postChildrenComponent,
    EditorJsComponent,
    PostFormComponent,
    DialogComponent,
    DataTableComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    PostComponent,
    ...postChildrenComponent,
    MaterialModule,
    PostFormComponent
  ],
  entryComponents: [DialogComponent]
})
export class PostModule {}
