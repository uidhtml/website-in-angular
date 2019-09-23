import { NgModule } from '@angular/core';
import {
  MatInputModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatToolbarModule,
  MatDividerModule,
  MatTableModule,
  MatPaginatorModule
} from '@angular/material';

const materialItems = [
  MatInputModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatToolbarModule,
  MatDividerModule,
  MatTableModule,
  MatPaginatorModule
];

@NgModule({
  imports: [...materialItems],
  exports: [...materialItems]
})
export class MaterialModule {}
