import {
  NgModule,
  NO_ERRORS_SCHEMA,
  CUSTOM_ELEMENTS_SCHEMA
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { CoreModule } from './core/core.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';

const adminComponents = [
  AdminComponent,
  DashboardComponent,
  LoginComponent,
  LogoutComponent
];

@NgModule({
  declarations: [...adminComponents],
  imports: [CommonModule, AdminRoutingModule, CoreModule],
  exports: [AdminRoutingModule, ...adminComponents, CoreModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AdminModule {}
