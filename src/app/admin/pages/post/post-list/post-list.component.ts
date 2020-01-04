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
  public rows: DataTableElements[] = [];
  public header: Array<any> = [
    { name: 'id', label: 'No.' },
    { name: 'title', label: 'Title' },
    { name: 'category', label: 'Category' },
    { name: 'subCategory', label: 'SubCategory' },
    { name: 'description', label: 'Description' },
    { name: 'bannerImage', label: 'Image' }
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
          this.rows = data.results;
          this.isEmpty = false;
        } else {
          this.isEmpty = true;
        }
      });
  }
}
