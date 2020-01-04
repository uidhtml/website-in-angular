import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '@app/common/services/http.service';
import { ApiHostService } from '@app/common/services/api-host.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html'
})
export class EditComponent implements OnInit {
  public postData: {};

  constructor(
    private httpService: HttpService,
    private activatedRoute: ActivatedRoute,
    private apiHostService: ApiHostService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.httpService
        .getHttp(
          this.apiHostService.concatUrl(`/post-details.php?id=${params.id}`)
        )
        .subscribe(data => {
          this.postData = data.results[0];
        });
    });
  }
}
