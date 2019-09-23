import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Menu } from './menu.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() sidebarIsActive: boolean;
  @Output() toggleSidebar: EventEmitter<boolean> = new EventEmitter();

  public menu: Menu[] = [
    { label: 'admin', url: '/admin/login' },
    { label: 'tutorials', url: '/admin/login' },
    { label: 'youtube videos', url: '/admin/login' },
    { label: 'gallery', url: '/admin/login' }
  ];

  constructor() {}

  ngOnInit() {}

  toggle() {
    this.sidebarIsActive = !this.sidebarIsActive;
    this.toggleSidebar.emit(this.sidebarIsActive);
  }
}
