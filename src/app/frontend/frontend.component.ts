import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frontend',
  templateUrl: './frontend.component.html',
  styleUrls: ['./frontend.component.scss']
})
export class FrontendComponent implements OnInit {
  public sidebarIsActive: boolean = true;
  constructor() {}

  ngOnInit() {}

  toggleSidebar($event: boolean): void {
    this.sidebarIsActive = $event;
  }
}
