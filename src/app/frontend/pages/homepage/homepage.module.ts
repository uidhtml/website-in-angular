import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';
import { frontendSharedComponent } from '../../shared';

@NgModule({
  declarations: [HomepageComponent, frontendSharedComponent],
  imports: [CommonModule, HomepageRoutingModule],
  exports: [HomepageComponent, HomepageRoutingModule, frontendSharedComponent]
})
export class HomepageModule {}
