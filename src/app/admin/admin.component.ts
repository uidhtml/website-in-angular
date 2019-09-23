import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '@common/services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  public isSidebarActive: boolean = false;
  public subject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    this.isSidebarActive
  );
  public isLoginActive = this.subject.asObservable();
  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.toggleSidebar();

    this.router.events
      .pipe(filter((event: NavigationEnd) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.toggleSidebar();
      });
  }

  toggleSidebar() {
    this.subject.next(this.authService.isLoggedIn);
    this.isLoginActive.subscribe(status => (this.isSidebarActive = status));
  }
}
