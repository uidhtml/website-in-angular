import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';
import { frontendSharedComponent } from '../../shared';
import { CardComponent } from './../../../utility';
import { MaterialModule } from './../../../material.module';

@NgModule({
  declarations: [HomepageComponent, frontendSharedComponent, CardComponent],
  imports: [CommonModule, HomepageRoutingModule, MaterialModule],
  exports: [
    HomepageComponent,
    HomepageRoutingModule,
    frontendSharedComponent,
    CardComponent
  ]
})
export class HomepageModule {}
