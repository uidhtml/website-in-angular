import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllPostsRoutingModule } from './all-posts-routing.module';
import { AllPostsComponent } from './all-posts.component';

@NgModule({
  declarations: [AllPostsComponent],
  imports: [CommonModule, AllPostsRoutingModule],
  exports: [AllPostsComponent]
})
export class AllPostsModule {}
