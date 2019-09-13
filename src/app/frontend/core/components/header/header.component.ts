import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() sidebarIsActive: boolean;
  @Output() toggleSidebar: EventEmitter<boolean> = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  toggle() {
    this.sidebarIsActive = !this.sidebarIsActive;
    this.toggleSidebar.emit(this.sidebarIsActive);
  }
}
