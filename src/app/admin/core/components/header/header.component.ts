import { Component, OnInit } from '@angular/core';
import { ROUTE_URLS } from '../../../../route-urls.const';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public pageUrls = {
    path: ROUTE_URLS.LOGOUT,
    link: `/${ROUTE_URLS.ADMIN}/${ROUTE_URLS.LOGOUT}`
  };

  constructor() {}

  ngOnInit() {}
}
