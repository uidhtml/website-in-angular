import { Component, OnInit } from '@angular/core';
import { HttpService } from '@services/http.service';
import { ApiHostService } from '@app/common/services/api-host.service';
import { DataTableElements } from '@common/utility/data-table/data-table.interface';

export interface DataTableElements {
  title: string;
  id: number;
  category: number;
  subCategory: string;
  description: string;
  bannerImage: string;
  edit?: string;
  delete?: string;
}

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  public isEmpty: boolean = true;
  public rows: DataTableElements[] = [
    {
      id: 1,
      title: 'Hydrogen',
      category: 1.0079,
      subCategory: 'H',
      description: 'H',
      bannerImage: 'whatsapp_image_2019-08-21_at_2.jpeg'
    }
  ];
  public header: Array<any> = [
    { name: 'id', label: 'No.' },
    { name: 'title', label: 'Title' },
    { name: 'category', label: 'Category' },
    { name: 'subCategory', label: 'SubCategory' },
    { name: 'description', label: 'Description' },
    { name: 'bannerImage', label: 'Image' }
  ];
  public columnDefs = [
    { headerName: 'Make', field: 'make' },
    { headerName: 'Model', field: 'model' },
    { headerName: 'Price', field: 'price' }
  ];

  public rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];
  constructor(
    private readonly httpService: HttpService,
    private readonly apiHostService: ApiHostService
  ) {
    if (this.rows.length > 0) {
      for (const item of this.rows) {
        item.edit = 'edit';
        item.delete = 'delete';
      }
    }
    if (this.header.length > 0) {
      this.header.push(
        { name: 'edit', label: '' },
        { name: 'delete', label: '' }
      );
    }
  }

  ngOnInit() {
    this.httpService
      .getHttp(this.apiHostService.concatUrl('/all-post.php'))
      .subscribe((data: { success: number; results: {}[] }) => {
        console.log(data);
        if (data.results.length) {
          this.isEmpty = false;
        } else {
          this.isEmpty = true;
        }
      });
  }
}
