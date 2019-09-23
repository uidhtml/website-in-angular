import {
  NgModule,
  NO_ERRORS_SCHEMA,
  CUSTOM_ELEMENTS_SCHEMA
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RotateLogoComponent } from '@common/utility';
import { MaterialModule } from '@app/material.module';

const coreComponent = [HeaderComponent, FooterComponent, SidebarComponent];

@NgModule({
  declarations: [...coreComponent, RotateLogoComponent],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [coreComponent, RotateLogoComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class CoreModule {}
