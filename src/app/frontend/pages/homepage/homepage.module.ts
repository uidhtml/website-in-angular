import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';
import { frontendSharedComponent } from '../../shared';
import { MaterialModule } from '@app/material.module';
import { CardComponent } from '@common/utility';

@NgModule({
  declarations: [HomepageComponent, frontendSharedComponent, CardComponent],
  imports: [CommonModule, HomepageRoutingModule, MaterialModule],
  exports: [HomepageComponent, HomepageRoutingModule, frontendSharedComponent]
})
export class HomepageModule {}
