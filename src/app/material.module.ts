import { NgModule } from '@angular/core';
import {
  MatInputModule,
  MatIconModule,
  MatButtonModule
} from '@angular/material';

const materialItems = [MatInputModule, MatIconModule, MatButtonModule];

@NgModule({
  imports: [...materialItems],
  exports: [...materialItems]
})
export class MaterialModule {}
