import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { DataTableElements } from './data-table.interface';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  @Input() DATA_TABLE_ROWS;
  @Input() DATA_TABLE_HEADER: Array<any>;
  public displayedColumns: string[] = [];
  public dataSource = new MatTableDataSource<DataTableElements>(
    this.DATA_TABLE_ROWS
  );
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {
    this.displayedColumns = this.DATA_TABLE_HEADER.map(column => column.name);

    this.dataSource.paginator = this.paginator;
    this.dataSource = this.DATA_TABLE_ROWS;
  }
  onRowClicked(row, mode) {
    console.log('Row clicked: ', row, mode);
  }
}
