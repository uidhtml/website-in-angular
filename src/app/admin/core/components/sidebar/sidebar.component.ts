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
      label: ROUTE_URLS.DASHBAORD,
      link: ROUTE_URLS.DASHBAORD,
      icon: 'th'
    },
    {
      label: ROUTE_URLS.POST,
      icon: 'file-text',
      dropdownTarget: `${ROUTE_URLS.POST}-dropdown`,
      children: [
        {
          label: `${ROUTE_URLS.ALL}`,
          link: `/${ROUTE_URLS.ADMIN}/${ROUTE_URLS.POST}/${ROUTE_URLS.ALL}`,
          icon: 'th-list',
        },
        {
          label: `${ROUTE_URLS.ADD}`,
          link: `/${ROUTE_URLS.ADMIN}/${ROUTE_URLS.POST}/${ROUTE_URLS.ADD}`,
        icon: 'plus-square',
      },
      {
        label: `${ROUTE_URLS.EDIT}`,
        link: `/${ROUTE_URLS.ADMIN}/${ROUTE_URLS.POST}/${ROUTE_URLS.EDIT}`,
          icon: 'edit',
        }
      ]
    },
    {
      label: ROUTE_URLS.QUERY,
      icon: 'bell-o',
      dropdownTarget: `${ROUTE_URLS.QUERY}-dropdown`,
      children: [
        {
          label: `${ROUTE_URLS.ALL}`,
          link: `/${ROUTE_URLS.ADMIN}/${ROUTE_URLS.QUERY}/${ROUTE_URLS.ALL}`,
          icon: 'th-list',
        },
        {
          label: `${ROUTE_URLS.ANSWERED}`,
          link: `/${ROUTE_URLS.ADMIN}/${ROUTE_URLS.QUERY}/${ROUTE_URLS.ANSWERED}`,
          icon: 'commenting',
        },
        {
          label: `${ROUTE_URLS.UNANSWERED}`,
          link: `/${ROUTE_URLS.ADMIN}/${ROUTE_URLS.QUERY}/${ROUTE_URLS.UNANSWERED}`,
          icon: 'comment-o',
        },
        {
          label: `${ROUTE_URLS.PENDING}`,
          link: `/${ROUTE_URLS.ADMIN}/${ROUTE_URLS.QUERY}/${ROUTE_URLS.PENDING}`,
          icon: 'comment',
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
