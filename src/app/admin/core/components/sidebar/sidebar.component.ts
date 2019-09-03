import { Component, OnInit } from '@angular/core';
import { Menu } from './menu.interface';
import { ROUTE_URLS } from '../../../../route-urls.const';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menu: Menu[] = [
    {
      label: 'post',
      link: null,
      icon: 'book-open',
      dropdownTarget: 'addPost',
      children: [
        {
        label: 'Add post',
        link: `${ROUTE_URLS.ADD}-post`,
        icon: 'plus-square',
      },
      {
          label: 'Edit post',
          link: `${ROUTE_URLS.ADD}-edit`,
          icon: 'edit',
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
