import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontendRoutingModule } from './frontend-routing.module';
import { FrontendComponent } from './frontend.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [FrontendComponent],
  imports: [CommonModule, FrontendRoutingModule, CoreModule],
  exports: [FrontendRoutingModule, FrontendComponent]
})
export class FrontendModule {}
