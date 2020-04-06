import { Component, OnInit } from '@angular/core';
import { Menu } from './menu.interface';
import { ROUTE_URLS } from '../../../../route-urls.const';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  public menu: Menu[] = [
    {
      label: ROUTE_URLS.DASHBAORD,
      headingAsLink: true,
      cssClass: ROUTE_URLS.DASHBAORD,
      children: [
        {
          label: ROUTE_URLS.DASHBAORD,
          link: `/${ROUTE_URLS.ADMIN}/${ROUTE_URLS.DASHBAORD}`,
          icon: 'dashboard',
        },
      ],
    },
    {
      label: ROUTE_URLS.POST,
      children: [
        {
          label: `${ROUTE_URLS.ALL}`,
          link: `/${ROUTE_URLS.ADMIN}/${ROUTE_URLS.POST}/${ROUTE_URLS.ALL}`,
          icon: 'view_list',
        },
        {
          label: `${ROUTE_URLS.ADD}`,
          link: `/${ROUTE_URLS.ADMIN}/${ROUTE_URLS.POST}/${ROUTE_URLS.ADD}`,
          icon: 'add',
        },
      ],
    },
    {
      label: ROUTE_URLS.QUERY,
      children: [
        {
          label: `${ROUTE_URLS.ALL}`,
          link: `/${ROUTE_URLS.ADMIN}/${ROUTE_URLS.QUERY}/${ROUTE_URLS.ALL}`,
          icon: 'view_list',
        },
        {
          label: `${ROUTE_URLS.ANSWERED}`,
          link: `/${ROUTE_URLS.ADMIN}/${ROUTE_URLS.QUERY}/${ROUTE_URLS.ANSWERED}`,
          icon: 'chat',
        },
        {
          label: `${ROUTE_URLS.UNANSWERED}`,
          link: `/${ROUTE_URLS.ADMIN}/${ROUTE_URLS.QUERY}/${ROUTE_URLS.UNANSWERED}`,
          icon: 'chat_bubble',
        },
        {
          label: `${ROUTE_URLS.PENDING}`,
          link: `/${ROUTE_URLS.ADMIN}/${ROUTE_URLS.QUERY}/${ROUTE_URLS.PENDING}`,
          icon: 'chat_bubble_outline',
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit() {}
}
