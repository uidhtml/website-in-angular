import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public menu = [
    {
      icon: 'bubble_chart',
      name: 'general',
      list: [
        { name: 'Sliders', link: '' },
        { name: 'Accordion', link: '' },
        { name: 'Tooltip', link: '' },
        { name: 'Modal', link: '' }
      ]
    },
    {
      icon: 'developer_board',
      name: 'tutorials',
      list: [
        { name: 'html5', link: '' },
        { name: 'css3/css4', link: '' },
        { name: 'javascript', link: '' },
        { name: 'angular', link: '' },
        { name: 'react', link: '' },
        { name: 'nodejs', link: '' }
      ]
    },
    {
      icon: 'videocam',
      name: 'videos',
      list: [
        { name: 'html5', link: '' },
        { name: 'css3/css4', link: '' },
        { name: 'javascript', link: '' },
        { name: 'angular', link: '' },
        { name: 'react', link: '' },
        { name: 'nodejs', link: '' }
      ]
    },
    {
      icon: 'sports',
      name: 'HTML5 Canvas',
      list: [{ name: 'Jumping Deagon Game', link: '' }]
    }
  ];

  constructor() {}

  ngOnInit() {}
}
