import { Component, OnInit } from '@angular/core';
import {
  Router,
  ActivatedRoute,
  NavigationEnd,
  ActivationEnd
} from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  public isActive: boolean = true;
  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.firstChild.url.subscribe(param => {
      param[0].path === 'login'
        ? (this.isActive = false)
        : (this.isActive = true);
      console.log(this.isActive);
    });

    this.router.events
      .pipe(filter((event: NavigationEnd) => event instanceof NavigationEnd))
      .subscribe(event => {
        event.url.indexOf('login') !== -1
          ? (this.isActive = false)
          : (this.isActive = true);
      });
  }
}
