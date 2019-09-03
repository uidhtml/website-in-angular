import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontendRoutingModule } from './frontend-routing.module';
import { FrontendComponent } from '../frontend.component';

@NgModule({
  declarations: [FrontendComponent],
  imports: [
    CommonModule,
    FrontendRoutingModule
  ],
  exports: [FrontendRoutingModule, FrontendComponent]
})
export class FrontendModule { }
