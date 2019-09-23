import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  edit?: string;
  delete?: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' }
];

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public columns: Array<any> = [
    { name: 'position', label: 'No.' },
    { name: 'name', label: 'Name' },
    { name: 'weight', label: 'Weight' },
    { name: 'symbol', label: 'Symbol' }
  ];
  public displayedColumns: string[] = [];
  public dataSource: PeriodicElement[];

  constructor() {}

  ngOnInit() {
    this.columns.push(
      { name: 'edit', label: 'Edit' },
      { name: 'delete', label: 'Delete' }
    );
    for (const item of ELEMENT_DATA) {
      item.edit = 'edit';
      item.delete = 'delete';
    }

    this.displayedColumns = this.columns.map(column => column.name);
    console.log(this.displayedColumns);
    console.log(this.columns);
    this.dataSource = ELEMENT_DATA;
  }
}
