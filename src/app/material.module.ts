import { NgModule } from '@angular/core';
import {
  MatInputModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatToolbarModule,
  MatDividerModule,
  MatTableModule,
  MatPaginatorModule,
  MatDialogModule,
  MatProgressSpinnerModule
} from '@angular/material';

const materialItems = [
  MatInputModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatToolbarModule,
  MatDividerModule,
  MatTableModule,
  MatPaginatorModule,
  MatDialogModule,
  MatProgressSpinnerModule
];

@NgModule({
  imports: [...materialItems],
  exports: [...materialItems]
})
export class MaterialModule {}
